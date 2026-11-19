import React, { useState, useMemo } from 'react';
import { ALL_EXAM_QUESTIONS, ExamQuestion } from '../data/examQuestions';
import { BOOK_CHAPTERS } from '../data/bookChapters';
import { QuizStorageService } from '../services/quizStorageService';
import { CheckCircle2, XCircle, Award, RotateCcw, ChevronRight, BookOpen, Filter, Check, ArrowLeft, ArrowRight, HelpCircle, Layers } from 'lucide-react';

export interface GenericQuizQuestion {
  id?: string | number;
  question: string;
  options: string[];
  correctIndex?: number;
  correct?: number;
  answer?: string | number;
  explanation?: string;
  rationale?: string;
  clinicalPearl?: string;
  pearl?: string;
  professor?: string;
  topicCategory?: string;
  lessonNumber?: number;
}

export interface QuizSectionProps {
  lessonNumber?: number;
  customQuestions?: (GenericQuizQuestion | any)[];
  title?: string;
  subtitle?: string;
  showLessonFilter?: boolean;
}

export const QuizSection: React.FC<QuizSectionProps> = ({
  lessonNumber,
  customQuestions,
  title,
  subtitle,
  showLessonFilter
}) => {
  // Normalize custom questions if provided
  const normalizedCustomQuestions: ExamQuestion[] | null = useMemo(() => {
    if (!customQuestions || customQuestions.length === 0) return null;
    return customQuestions.map((q, idx) => {
      let correctIdx = 0;
      if (typeof q.correctIndex === 'number') {
        correctIdx = q.correctIndex;
      } else if (typeof q.correct === 'number') {
        correctIdx = q.correct;
      } else if (typeof q.answer === 'number') {
        correctIdx = q.answer;
      } else if (typeof q.answer === 'string') {
        const trimmed = q.answer.trim().toUpperCase();
        const code = trimmed.charCodeAt(0);
        if (code >= 65 && code <= 69) {
          correctIdx = code - 65;
        } else {
          const parsed = parseInt(trimmed, 10);
          correctIdx = isNaN(parsed) ? 0 : parsed;
        }
      }

      return {
        id: String(q.id || `q-${idx + 1}`),
        lessonNumber: q.lessonNumber || lessonNumber || 1,
        lessonTitle: q.lessonTitle || (lessonNumber ? `Lezione ${lessonNumber}` : 'Lezione Clinica'),
        professor: (['Galandrini', 'Morrone', 'Soriani', 'Molfetta', 'Rinaldi'].includes(q.professor) ? q.professor : 'Generale') as any,
        topicCategory: q.topicCategory || 'Fisiopatologia & Clinica',
        question: q.question,
        options: q.options || [],
        correctIndex: correctIdx,
        explanation: q.explanation || q.rationale || 'Razionale fisiopatologico e molecolare di riferimento.',
        clinicalPearl: q.clinicalPearl || q.pearl || 'Perla clinica ad alta resa per la prova d’esame.',
        targetSectionId: q.targetSectionId || 'verifica-quiz'
      };
    });
  }, [customQuestions, lessonNumber]);

  // Selezioni capitoli: se lessonNumber è fornito e non ci sono customQuestions, default al capitolo di quella lezione
  const defaultChapterId = useMemo(() => {
    if (lessonNumber) {
      const found = BOOK_CHAPTERS.find((c) => c.lessonNumbers.includes(lessonNumber));
      return found ? [found.id] : [];
    }
    return [];
  }, [lessonNumber]);

  const [selectedChapters, setSelectedChapters] = useState<number[]>(() => defaultChapterId);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  // Capitoli disponibili con quesiti
  const availableChapters = useMemo(() => {
    return BOOK_CHAPTERS.filter((c) => c.id > 0 && c.lessonNumbers.some((num) => ALL_EXAM_QUESTIONS.some((q) => q.lessonNumber === num)));
  }, []);

  // Gestione toggle di un singolo capitolo
  const toggleChapter = (chapterId: number) => {
    setSelectedChapters((prev) => {
      if (prev.includes(chapterId)) {
        return prev.filter((id) => id !== chapterId);
      } else {
        return [...prev, chapterId];
      }
    });
    handleReset();
  };

  // Seleziona/Deseleziona Tutti i capitoli
  const handleResetFilters = () => {
    setSelectedChapters([]);
    handleReset();
  };

  // Filtraggio dinamico delle domande in base ai capitoli scelti
  const activeQuestions: ExamQuestion[] = useMemo(() => {
    if (normalizedCustomQuestions) {
      return normalizedCustomQuestions;
    }
    if (selectedChapters.length === 0) {
      return ALL_EXAM_QUESTIONS;
    }
    const targetLessons: number[] = [];
    selectedChapters.forEach((chapId) => {
      const chap = BOOK_CHAPTERS.find((c) => c.id === chapId);
      if (chap) {
        chap.lessonNumbers.forEach((num) => {
          if (!targetLessons.includes(num)) targetLessons.push(num);
        });
      }
    });
    return ALL_EXAM_QUESTIONS.filter((q) => targetLessons.includes(q.lessonNumber));
  }, [normalizedCustomQuestions, selectedChapters]);

  const question = activeQuestions[currentIdx];
  const isAnswered = selectedAnswers[currentIdx] !== undefined;
  const isCorrect = isAnswered && question && selectedAnswers[currentIdx] === question.correctIndex;

  const handleSelectOption = (optIdx: number) => {
    if (isAnswered) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIdx]: optIdx
    });
    if (question) {
      QuizStorageService.recordQuestionAnswer(
        question.id,
        optIdx === question.correctIndex,
        optIdx
      );
    }
  };

  const handleNext = () => {
    if (currentIdx < activeQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  function handleReset() {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setShowResults(false);
  }

  const correctCount = Object.entries(selectedAnswers).filter(
    ([qIdx, ansIdx]) => activeQuestions[parseInt(qIdx)] && ansIdx === activeQuestions[parseInt(qIdx)].correctIndex
  ).length;

  const displayFilter = showLessonFilter ?? (!normalizedCustomQuestions && !lessonNumber);

  return (
    <div id="verifica-quiz" className="bg-white rounded-xl border border-slate-200 overflow-hidden my-8 shadow-xs">
      {/* Header del Quiz */}
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            {lessonNumber ? `Verifica Apprendimento · Lezione ${lessonNumber}` : "Verifica dell'Apprendimento & Esame"}
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-0.5">
            {title || (lessonNumber ? `Quesiti d'Esame con Razionale · Lezione ${lessonNumber}` : 'Quesiti a Scelta Multipla con Razionale Clinico')}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {subtitle || (lessonNumber ? `Test di autovalutazione a singola scheda con commento e perla clinica.` : 'Test di autovalutazione sulle lezioni selezionate.')}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {activeQuestions.length > 0 && (
            <div className="text-xs font-mono text-slate-600 bg-white px-3 py-1.5 rounded border border-slate-200 shadow-2xs">
              Quesito <strong>{currentIdx + 1}</strong> di {activeQuestions.length}
            </div>
          )}
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900 px-2 py-1 rounded hover:bg-slate-150 transition-colors cursor-pointer"
            title="Ricomincia il quiz"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            <span>Ricomincia</span>
          </button>
        </div>
      </div>

      {/* SELETTORE MACRO-CAPITOLI & CONTROLLI (Schermo) */}
      <div className="print:hidden">
        {displayFilter && (
          <div className="p-4 border-b border-slate-200 bg-slate-100/80">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Seleziona i Capitoli del manuale (fai clic per attivare/disattivare):</span>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">
              {selectedChapters.length === 0 
                ? `Tutti i capitoli (${ALL_EXAM_QUESTIONS.length} domande)` 
                : `${selectedChapters.length} capitoli scelti (${activeQuestions.length} domande)`}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto p-1 bg-white rounded-lg border border-slate-200">
            <button
              type="button"
              onClick={handleResetFilters}
              className={`px-3 py-1.5 text-xs rounded-md font-semibold border transition-all flex items-center gap-1 cursor-pointer ${
                selectedChapters.length === 0
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {selectedChapters.length === 0 && <Check className="w-3 h-3" />}
              Tutti i Capitoli ({ALL_EXAM_QUESTIONS.length})
            </button>

            {availableChapters.map((chap) => {
              const isSelected = selectedChapters.includes(chap.id);
              const count = ALL_EXAM_QUESTIONS.filter((q) => chap.lessonNumbers.includes(q.lessonNumber)).length;
              return (
                <button
                  key={chap.id}
                  type="button"
                  onClick={() => toggleChapter(chap.id)}
                  title={chap.title}
                  className={`px-2.5 py-1.5 text-xs rounded-md font-medium border transition-all flex items-center gap-1 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 text-white" />}
                  <span>Cap. {chap.romanId}</span>
                  <span className={`text-[10px] px-1 rounded ${isSelected ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Barra di Avanzamento */}
      {activeQuestions.length > 0 && (
        <div className="w-full bg-slate-100 h-1.5">
          <div
            className="bg-blue-600 h-1.5 transition-all duration-300"
            style={{ width: `${((currentIdx + 1) / activeQuestions.length) * 100}%` }}
          />
        </div>
      )}

      {activeQuestions.length === 0 ? (
        <div className="p-10 text-center text-slate-500 text-sm">
          Nessuna domanda disponibile per la selezione corrente.
        </div>
      ) : !showResults ? (
        <div className="p-6">
          <div className="max-w-2xl mx-auto">
            {/* Tag Lezione & Categoria */}
            <div className="flex items-center gap-2 mb-3 text-[11px] font-mono text-slate-500">
              <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded font-semibold">
                Lezione {question.lessonNumber}
              </span>
              <span>•</span>
              <span className="text-slate-800 font-medium">{question.professor}</span>
              {question.topicCategory && (
                <>
                  <span>•</span>
                  <span>{question.topicCategory}</span>
                </>
              )}
            </div>

            {/* Testo Domanda */}
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {currentIdx + 1}
              </span>
              <h4 className="text-base font-semibold text-slate-900 leading-snug">
                {question.question}
              </h4>
            </div>

            {/* Opzioni di Risposta */}
            <div className="mt-5 space-y-2">
              {question.options.map((option, idx) => {
                let btnStyle = 'border-slate-200 hover:border-blue-300 bg-white text-slate-800 hover:bg-slate-50/50';

                if (isAnswered) {
                  if (idx === question.correctIndex) {
                    btnStyle = 'border-emerald-500 bg-emerald-50/90 text-emerald-950 font-medium shadow-xs';
                  } else if (idx === selectedAnswers[currentIdx]) {
                    btnStyle = 'border-rose-400 bg-rose-50/90 text-rose-950';
                  } else {
                    btnStyle = 'border-slate-200 bg-slate-50/50 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-3 text-left text-xs sm:text-sm rounded-lg border transition-all flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded border border-current flex items-center justify-center text-xs font-mono shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="leading-snug">{option}</span>
                    </div>

                    {isAnswered && idx === question.correctIndex && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                    {isAnswered && idx === selectedAnswers[currentIdx] && idx !== question.correctIndex && (
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Spiegazione & Perla Clinica */}
            {isAnswered && (
              <div className="mt-5 space-y-3 animate-in fade-in duration-200">
                <div className={`p-4 rounded-lg border text-xs ${isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-slate-50 border-slate-200 text-slate-800'}`}>
                  <div className="flex items-center gap-1.5 font-bold mb-1">
                    {isCorrect ? (
                      <span className="text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Risposta Corretta!
                      </span>
                    ) : (
                      <span className="text-rose-700 flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> Risposta Errata
                      </span>
                    )}
                  </div>
                  <p className="leading-relaxed mt-1 text-slate-700">
                    <strong>Spiegazione Razionale:</strong> {question.explanation}
                  </p>
                </div>

                {question.clinicalPearl && (
                  <div className="p-3.5 rounded-lg bg-blue-50/80 border border-blue-200 text-xs text-blue-950">
                    <span className="font-bold flex items-center gap-1.5 text-blue-900 mb-1">
                      <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                      Perla Clinica d'Esame:
                    </span>
                    <p className="leading-relaxed">
                      {question.clinicalPearl}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Barra di Navigazione Precedente / Successiva */}
            <div className="mt-6 pt-4 border-t border-slate-150 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIdx === 0}
                className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                  currentIdx === 0
                    ? 'border-slate-200 text-slate-300 bg-slate-50 cursor-not-allowed'
                    : 'border-slate-200 text-slate-700 bg-white hover:bg-slate-50 cursor-pointer shadow-2xs'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Precedente</span>
              </button>

              <span className="text-xs text-slate-400 font-mono">
                {currentIdx + 1} di {activeQuestions.length}
              </span>

              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs cursor-pointer"
              >
                <span>{currentIdx < activeQuestions.length - 1 ? 'Prossima Domanda' : 'Riepilogo Risultati'}</span>
                {currentIdx < activeQuestions.length - 1 ? (
                  <ArrowRight className="w-3.5 h-3.5" />
                ) : (
                  <Award className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Schermata Risultati */
        <div className="p-8 text-center max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-200">
            <Award className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-slate-900">Verifica Completata!</h4>
          <p className="text-xs text-slate-500 mt-1">
            Hai risposto correttamente a <span className="font-bold text-slate-900">{correctCount}</span> su{' '}
            <span className="font-bold text-slate-900">{activeQuestions.length}</span> domande.
          </p>

          <div className="my-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <span className="text-xs text-slate-500 uppercase tracking-wide font-mono">Punteggio Percentuale</span>
            <div className="text-3xl font-extrabold text-blue-600 mt-1">
              {Math.round((correctCount / activeQuestions.length) * 100)}%
            </div>
          </div>

          <button
            onClick={handleReset}
            className="px-5 py-2 text-xs font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs cursor-pointer"
          >
            Ripeti la Verifica
          </button>
        </div>
      )}
      </div>

      {/* Printable Unrolled Quiz Worksheet (Foglio di Verifica & Autovalutazione d'Esame A4) */}
      <div className="hidden print:block p-6 border-t border-slate-200 bg-white">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4 font-mono flex items-center justify-between border-b border-slate-300 pb-2">
          <span>Foglio di Autovalutazione d'Esame (Quesiti, Risposte Corrette & Razionali Fisiopatologici)</span>
          <span className="text-slate-500 font-mono">{activeQuestions.length} Quesiti Completi</span>
        </div>

        <div className="space-y-6">
          {activeQuestions.map((q, idx) => (
            <div key={q.id || idx} className="p-4 rounded-lg border border-slate-300 bg-slate-50/50 break-inside-avoid space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 border-b border-slate-200 pb-1.5">
                <span className="font-bold text-slate-900">Quesito #{idx + 1}</span>
                <span className="text-blue-700 font-semibold">Lezione {q.lessonNumber} · {q.professor}</span>
              </div>

              <div className="text-xs font-bold text-slate-950 leading-snug">
                {q.question}
              </div>

              <div className="grid grid-cols-1 gap-1.5 text-[11px]">
                {q.options.map((opt, oIdx) => {
                  const isCorrect = oIdx === q.correctIndex;
                  return (
                    <div
                      key={oIdx}
                      className={`p-1.5 px-2.5 rounded border text-left flex items-start gap-2 ${
                        isCorrect
                          ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold'
                          : 'bg-white border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className="font-mono shrink-0">[{String.fromCharCode(65 + oIdx)}]</span>
                      <span>{opt}</span>
                      {isCorrect && (
                        <span className="ml-auto text-emerald-700 text-[10px] uppercase font-bold shrink-0">
                          (Risposta Corretta ✓)
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="text-[11px] text-slate-700 bg-white p-2.5 rounded border border-slate-200 leading-relaxed space-y-1">
                <div>
                  <strong className="text-slate-900">Razionale Clinico:</strong> {q.explanation}
                </div>
                {q.clinicalPearl && (
                  <div className="text-blue-900 pt-1 border-t border-slate-150">
                    <strong className="text-blue-950">Perla d'Esame:</strong> {q.clinicalPearl}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};