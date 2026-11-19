import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
  ALL_EXAM_QUESTIONS,
  EXAM_TOPIC_CATEGORIES,
  PROFESSORS_LIST,
  ExamQuestion
} from '../data/examQuestions';
import { BOOK_CHAPTERS, BookChapterDefinition } from '../data/bookChapters';
import {
  QuizStorageService,
  StoredActiveSession,
  StoredQuizHistory
} from '../services/quizStorageService';
import { GoogleAccountButton } from './GoogleAccountButton';
import {
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ChevronRight,
  BookOpen,
  ArrowRight,
  GraduationCap,
  Sparkles,
  ExternalLink,
  X,
  Target,
  Flame,
  Bookmark,
  Check,
  AlertTriangle,
  Play,
  Trash2,
  Save,
  Layers,
  ChevronDown,
  ChevronUp,
  Cloud
} from 'lucide-react';

interface InteractiveQuizEngineProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToLesson: (lessonNumber: number, sectionId?: string) => void;
}

export const InteractiveQuizEngine: React.FC<InteractiveQuizEngineProps> = ({
  isOpen,
  onClose,
  onNavigateToLesson
}) => {
  // Setup configuration state
  const [isConfiguring, setIsConfiguring] = useState<boolean>(true);
  
  // Selezione per Macro-Capitoli anziché lezioni
  const [selectedChapterIds, setSelectedChapterIds] = useState<number[]>(() => {
    // Default: tutti i capitoli con quesiti selezionati (Capitoli I-VIII)
    return BOOK_CHAPTERS.filter((c) => c.lessonNumbers.length > 0 && c.id > 0).map((c) => c.id);
  });
  const [selectedCategoryFilters, setSelectedCategoryFilters] = useState<string[]>([]);
  const [selectedProfessorFilters, setSelectedProfessorFilters] = useState<string[]>([]);
  const [questionCountLimit, setQuestionCountLimit] = useState<number | 'infinite'>(20);

  // Active quiz session state
  const [activeQuestions, setActiveQuestions] = useState<ExamQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [streak, setStreak] = useState<number>(0);
  const [answeredHistory, setAnsweredHistory] = useState<
    { questionId: string; selectedIndex: number; isCorrect: boolean }[]
  >([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [sessionMode, setSessionMode] = useState<'standard' | 'continuous' | 'review_errors'>('continuous');

  // Memoria e sessione ripresa
  const [savedSession, setSavedSession] = useState<StoredActiveSession | null>(null);
  const [quizHistory, setQuizHistory] = useState<StoredQuizHistory>({});
  const [showAdvancedFilters, setShowAdvancedFilters] = useState<boolean>(false);
  const [saveToast, setSaveToast] = useState<string | null>(null);

  // Ricarica la memoria salvata all'apertura del modale
  const refreshStorageData = useCallback(() => {
    const history = QuizStorageService.getQuizHistory();
    setQuizHistory(history);
    const active = QuizStorageService.getActiveSession();
    setSavedSession(active);
  }, []);

  useEffect(() => {
    if (isOpen) {
      refreshStorageData();
    }
  }, [isOpen, refreshStorageData]);

  // Toast automatico che scompare
  useEffect(() => {
    if (saveToast) {
      const timer = setTimeout(() => setSaveToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [saveToast]);

  // Lista di capitoli validi per lo studio
  const availableChapters = useMemo(() => {
    return BOOK_CHAPTERS.filter((c) => c.id > 0 || c.lessonNumbers.some((num) => ALL_EXAM_QUESTIONS.some((q) => q.lessonNumber === num)));
  }, []);

  // Mappa delle lezioni incluse nei capitoli selezionati
  const selectedLessonNumbers = useMemo(() => {
    const lessons: number[] = [];
    selectedChapterIds.forEach((chapId) => {
      const chap = BOOK_CHAPTERS.find((c) => c.id === chapId);
      if (chap) {
        chap.lessonNumbers.forEach((l) => {
          if (!lessons.includes(l)) lessons.push(l);
        });
      }
    });
    return lessons;
  }, [selectedChapterIds]);

  // Toggle selezione singolo capitolo
  const toggleChapter = (chapterId: number) => {
    setSelectedChapterIds((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const selectAllChapters = () => {
    setSelectedChapterIds(availableChapters.map((c) => c.id));
  };

  const deselectAllChapters = () => {
    setSelectedChapterIds([]);
  };

  const toggleCategoryFilter = (cat: string) => {
    if (cat === 'Tutti gli Argomenti') {
      setSelectedCategoryFilters([]);
      return;
    }
    setSelectedCategoryFilters((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleProfessorFilter = (prof: string) => {
    if (prof === 'Tutti i Docenti') {
      setSelectedProfessorFilters([]);
      return;
    }
    const shortName = prof.replace('Prof.ssa ', '').replace('Prof. ', '');
    setSelectedProfessorFilters((prev) =>
      prev.includes(shortName) ? prev.filter((p) => p !== shortName) : [...prev, shortName]
    );
  };

  // Calcola il pool disponibile in base ai capitoli e ai filtri
  const availablePool = useMemo(() => {
    return ALL_EXAM_QUESTIONS.filter((q) => {
      const matchChapter =
        selectedChapterIds.length === 0 || selectedLessonNumbers.includes(q.lessonNumber);

      const matchCategory =
        selectedCategoryFilters.length === 0 || selectedCategoryFilters.includes(q.topicCategory);

      const matchProf =
        selectedProfessorFilters.length === 0 || selectedProfessorFilters.includes(q.professor);

      return matchChapter && matchCategory && matchProf;
    });
  }, [selectedChapterIds, selectedLessonNumbers, selectedCategoryFilters, selectedProfessorFilters]);

  // Domande errate in memoria per il ripasso mirato
  const wrongQuestionIds = useMemo(() => {
    return QuizStorageService.getWrongQuestionIds();
  }, [quizHistory]);

  const wrongQuestionsPool = useMemo(() => {
    return ALL_EXAM_QUESTIONS.filter((q) => wrongQuestionIds.includes(q.id));
  }, [wrongQuestionIds]);

  // Avvio nuova sessione (standard o continua)
  const handleStartQuiz = (mode: 'continuous' | 'standard' = 'continuous') => {
    if (availablePool.length === 0) return;

    const shuffled = [...availablePool].sort(() => 0.5 - Math.random());
    const limit = mode === 'continuous' || questionCountLimit === 'infinite'
      ? shuffled.length
      : questionCountLimit;
    const selected = shuffled.slice(0, Math.min(limit, shuffled.length));

    setActiveQuestions(selected);
    setCurrentIndex(0);
    setSelectedOption(null);
    setStreak(0);
    setAnsweredHistory([]);
    setIsCompleted(false);
    setSessionMode(mode);
    setIsConfiguring(false);

    // Salva l'inizio sessione
    const newSession: StoredActiveSession = {
      chapterIds: selectedChapterIds,
      selectedProfessorFilters,
      selectedCategoryFilters,
      questionIds: selected.map((q) => q.id),
      currentIndex: 0,
      mode,
      streak: 0,
      startedAt: Date.now(),
      answeredHistory: []
    };
    QuizStorageService.saveActiveSession(newSession);
    setSavedSession(newSession);
  };

  // Avvio sessione di Ripasso Errori
  const handleStartReviewErrors = () => {
    if (wrongQuestionsPool.length === 0) return;
    const shuffled = [...wrongQuestionsPool].sort(() => 0.5 - Math.random());

    setActiveQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedOption(null);
    setStreak(0);
    setAnsweredHistory([]);
    setIsCompleted(false);
    setSessionMode('review_errors');
    setIsConfiguring(false);

    const newSession: StoredActiveSession = {
      chapterIds: [],
      selectedProfessorFilters: [],
      selectedCategoryFilters: [],
      questionIds: shuffled.map((q) => q.id),
      currentIndex: 0,
      mode: 'review_errors',
      streak: 0,
      startedAt: Date.now(),
      answeredHistory: []
    };
    QuizStorageService.saveActiveSession(newSession);
    setSavedSession(newSession);
  };

  // Ripresa sessione salvata
  const handleResumeSession = () => {
    if (!savedSession) return;

    // Ricostruiamo le domande della sessione salvata
    const questionMap = new Map(ALL_EXAM_QUESTIONS.map((q) => [q.id, q]));
    const restoredQuestions = savedSession.questionIds
      .map((id) => questionMap.get(id))
      .filter((q): q is ExamQuestion => !!q);

    if (restoredQuestions.length === 0) {
      QuizStorageService.clearActiveSession();
      setSavedSession(null);
      return;
    }

    setActiveQuestions(restoredQuestions);
    setCurrentIndex(Math.min(savedSession.currentIndex, restoredQuestions.length - 1));
    setSelectedOption(null);
    setStreak(savedSession.streak || 0);
    setAnsweredHistory(savedSession.answeredHistory || []);
    setSessionMode(savedSession.mode || 'continuous');
    setIsCompleted(false);
    setIsConfiguring(false);
  };

  const handleDiscardSavedSession = () => {
    QuizStorageService.clearActiveSession();
    setSavedSession(null);
  };

  const handleClearAllHistory = () => {
    if (window.confirm('Sei sicuro di voler azzerare tutta la memoria dei quiz e la cronologia degli errori?')) {
      QuizStorageService.clearAllQuizData();
      refreshStorageData();
      setSaveToast('Memoria quiz azzerata');
    }
  };

  const currentQuestion = activeQuestions[currentIndex];
  const isAnswered = selectedOption !== null;

  // Risposta a una domanda
  const handleSelectOption = (idx: number) => {
    if (isAnswered || !currentQuestion) return;
    setSelectedOption(idx);
    const isCorrect = idx === currentQuestion.correctIndex;

    const newStreak = isCorrect ? streak + 1 : 0;
    setStreak(newStreak);

    const newHistoryEntry = {
      questionId: currentQuestion.id,
      selectedIndex: idx,
      isCorrect
    };
    const updatedHistory = [...answeredHistory, newHistoryEntry];
    setAnsweredHistory(updatedHistory);

    // Salva nella memoria permanente
    QuizStorageService.recordQuestionAnswer(currentQuestion.id, isCorrect, idx);

    // Aggiorna lo stato della sessione attiva salvata
    const updatedSession: StoredActiveSession = {
      chapterIds: selectedChapterIds,
      selectedProfessorFilters,
      selectedCategoryFilters,
      questionIds: activeQuestions.map((q) => q.id),
      currentIndex,
      mode: sessionMode,
      streak: newStreak,
      startedAt: savedSession?.startedAt || Date.now(),
      answeredHistory: updatedHistory
    };
    QuizStorageService.saveActiveSession(updatedSession);
    setSavedSession(updatedSession);
  };

  // Prossima domanda
  const handleNextQuestion = () => {
    if (currentIndex < activeQuestions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setSelectedOption(null);

      if (savedSession) {
        QuizStorageService.saveActiveSession({
          ...savedSession,
          currentIndex: nextIdx,
          answeredHistory
        });
      }
    } else {
      // Sessione terminata
      QuizStorageService.clearActiveSession();
      setSavedSession(null);
      setIsCompleted(true);
    }
  };

  // Pausa e salvataggio rapido (per quando scendi dal treno)
  const handlePauseAndSave = () => {
    if (savedSession) {
      QuizStorageService.saveActiveSession({
        ...savedSession,
        currentIndex,
        streak,
        answeredHistory
      });
      setSaveToast('Sessione salvata con successo. Potrai riprenderla in qualsiasi momento!');
    }
    refreshStorageData();
    setIsConfiguring(true);
  };

  const handleFinishEarly = () => {
    QuizStorageService.clearActiveSession();
    setSavedSession(null);
    setIsCompleted(true);
  };

  const handleResetSession = () => {
    refreshStorageData();
    setIsConfiguring(true);
    setIsCompleted(false);
    setSelectedOption(null);
    setCurrentIndex(0);
  };

  // Performance calculations
  const correctCount = answeredHistory.filter((h) => h.isCorrect).length;
  const totalAnswered = answeredHistory.length;
  const scorePercentage = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  // Trova capitolo della domanda corrente
  const currentChapter = useMemo(() => {
    if (!currentQuestion) return null;
    return BOOK_CHAPTERS.find((c) => c.lessonNumbers.includes(currentQuestion.lessonNumber));
  }, [currentQuestion]);

  // Weak lessons
  const weakLessons = useMemo(() => {
    const wrongHistory = answeredHistory.filter((h) => !h.isCorrect);
    const lessonMap: { [lessonNum: number]: { count: number; title: string; sectionId: string } } = {};

    wrongHistory.forEach((h) => {
      const q = activeQuestions.find((item) => item.id === h.questionId);
      if (q) {
        if (!lessonMap[q.lessonNumber]) {
          lessonMap[q.lessonNumber] = {
            count: 0,
            title: q.lessonTitle,
            sectionId: q.targetSectionId
          };
        }
        lessonMap[q.lessonNumber].count += 1;
      }
    });

    return Object.entries(lessonMap).map(([num, data]) => ({
      lessonNumber: parseInt(num),
      ...data
    }));
  }, [answeredHistory, activeQuestions]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-3xl h-[94vh] sm:h-[90vh] flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <div className="p-3.5 sm:p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-900 text-white shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-2 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-500/30 shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2 truncate">
                <span className="truncate">Simulatore d'Esame "On-the-Go"</span>
                <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30 font-medium shrink-0">
                  570 Quesiti
                </span>
              </h3>
              <p className="text-[11px] text-slate-400 truncate">
                {isConfiguring
                  ? 'Studio rapido per capitoli · Memoria automatica'
                  : currentChapter
                  ? `Capitolo ${currentChapter.romanId}: ${currentChapter.shortTitle}`
                  : 'Sessione di Quiz'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <GoogleAccountButton compact onSyncComplete={refreshStorageData} />

            {!isConfiguring && !isCompleted && (
              <button
                onClick={handlePauseAndSave}
                title="Pausa e Salva per continuare più tardi"
                className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Save className="w-3.5 h-3.5 text-blue-400" />
                <span className="hidden sm:inline">Pausa & Salva</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Chiudi"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Notifica Toast */}
        {saveToast && (
          <div className="bg-emerald-600 text-white text-xs px-4 py-2 flex items-center justify-between animate-in slide-in-from-top duration-200">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 shrink-0" />
              <span>{saveToast}</span>
            </div>
            <button onClick={() => setSaveToast(null)} className="text-white/80 hover:text-white text-xs ml-4 cursor-pointer">
              ✕
            </button>
          </div>
        )}

        {/* Modal Body Container */}
        <div className="p-3 sm:p-5 overflow-y-auto flex-1 bg-slate-50 dark:bg-slate-950">
          
          {/* STEP 1: CONFIGURAZIONE PER MACRO-CAPITOLI */}
          {isConfiguring && (
            <div className="max-w-2xl mx-auto space-y-4 sm:space-y-5">
              
              {/* Card Sincronizzazione Cloud Google Drive */}
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center shrink-0">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                      <span>Sincronizzazione su Google Drive</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                        Multi-Device
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      I tuoi progressi, le statistiche e le sessioni sono salvati automaticamente nel tuo Drive
                    </div>
                  </div>
                </div>
                <div className="self-end sm:self-center shrink-0">
                  <GoogleAccountButton onSyncComplete={refreshStorageData} />
                </div>
              </div>

              {/* Banner Ripresa Sessione Attiva (se presente) */}
              {savedSession && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-blue-950/40 border border-blue-500/40 dark:border-blue-700/60 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-950 px-2 py-0.5 rounded border border-blue-300 dark:border-blue-800">
                        <Bookmark className="w-3 h-3 text-blue-600" />
                        Sessione in Sospeso
                      </span>
                      {savedSession.streak > 0 && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-300 dark:border-amber-800">
                          <Flame className="w-3 h-3 text-amber-500" />
                          Streak: {savedSession.streak}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-800 dark:text-slate-200 font-medium">
                      Hai una sessione interrotta al <strong>quesito {savedSession.currentIndex + 1}</strong> di {savedSession.questionIds.length}.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    <button
                      onClick={handleResumeSession}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Riprendi Ora</span>
                    </button>
                    <button
                      onClick={handleDiscardSavedSession}
                      title="Elimina sessione salvata"
                      className="p-2 text-slate-400 hover:text-rose-500 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Banner Ripasso Errori (Spaced Repetition) */}
              {wrongQuestionIds.length > 0 && (
                <div className="p-3.5 rounded-xl bg-amber-50/90 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-amber-950 dark:text-amber-200">
                        {wrongQuestionIds.length} {wrongQuestionIds.length === 1 ? 'Domanda Errata' : 'Domande Errate'} in Memoria
                      </div>
                      <div className="text-[11px] text-amber-800 dark:text-amber-400">
                        Allenati specificamente sui concetti che hai sbagliato in precedenza
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleStartReviewErrors}
                    className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg shrink-0 transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Ripassa Errori</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* 1. SELEZIONE PER MACRO-CAPITOLI */}
              <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-bold">
                      Seleziona i Macro-Capitoli del Libro:
                    </label>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <button
                      type="button"
                      onClick={selectAllChapters}
                      className="text-blue-600 dark:text-blue-400 hover:underline font-semibold cursor-pointer"
                    >
                      Tutti
                    </button>
                    <span className="text-slate-300 dark:text-slate-700">|</span>
                    <button
                      type="button"
                      onClick={deselectAllChapters}
                      className="text-slate-500 hover:underline font-semibold cursor-pointer"
                    >
                      Nessuno
                    </button>
                  </div>
                </div>

                {/* Schede Capitolo con Selezione Multipla e Barra di Padronanza */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[46vh] sm:max-h-80 overflow-y-auto pr-1">
                  {availableChapters.map((chap) => {
                    const isSelected = selectedChapterIds.includes(chap.id);
                    const stats = QuizStorageService.getChapterStats(chap.id, ALL_EXAM_QUESTIONS);

                    return (
                      <div
                        key={chap.id}
                        onClick={() => toggleChapter(chap.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === ' ' || e.key === 'Enter') {
                            e.preventDefault();
                            toggleChapter(chap.id);
                          }
                        }}
                        className={`p-3 rounded-xl border transition-all text-left flex flex-col justify-between gap-2 cursor-pointer select-none ${
                          isSelected
                            ? 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-400 dark:border-blue-700 shadow-2xs'
                            : 'bg-slate-50/50 dark:bg-slate-850/40 border-slate-200 dark:border-slate-800 opacity-80 hover:opacity-100 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                                isSelected
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                              }`}>
                                Cap. {chap.romanId}
                              </span>
                              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                                {stats.total} domande
                              </span>
                            </div>
                            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 line-clamp-1">
                              {chap.shortTitle}
                            </h4>
                          </div>

                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                            isSelected
                              ? 'bg-blue-600 border-blue-600 text-white'
                              : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800'
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>

                        {/* Barra di Padronanza */}
                        <div className="space-y-1 pt-1 border-t border-slate-200/60 dark:border-slate-800/60">
                          <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400">
                            <span>Padronanza</span>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">
                              {stats.answered > 0 ? `${stats.accuracy}% (${stats.mastered}/${stats.total})` : '0%'}
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                            <div
                              className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300"
                              style={{ width: `${stats.total > 0 ? (stats.mastered / stats.total) * 100 : 0}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 2. RITMO DI ALLENAMENTO (RAPIDO vs INFINITO/TRENO) */}
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2.5">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-bold block">
                  Ritmo di Studio & Durata:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setQuestionCountLimit(10)}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      questionCountLimit === 10
                        ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    10 quesiti
                  </button>
                  <button
                    type="button"
                    onClick={() => setQuestionCountLimit(20)}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      questionCountLimit === 20
                        ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    20 quesiti
                  </button>
                  <button
                    type="button"
                    onClick={() => setQuestionCountLimit(50)}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      questionCountLimit === 50
                        ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    50 quesiti
                  </button>
                  <button
                    type="button"
                    onClick={() => setQuestionCountLimit('infinite')}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer flex items-center justify-center gap-1 ${
                      questionCountLimit === 'infinite'
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-2xs'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Flame className="w-3.5 h-3.5" />
                    <span>Continua ∞</span>
                  </button>
                </div>
              </div>

              {/* Filtri Avanzati Collapsible (Docenti & Categorie) */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xs">
                <button
                  type="button"
                  onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                  className="w-full p-3.5 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                    <span>Filtri Facoltativi (Docenti e Macro-Argomenti)</span>
                    {(selectedProfessorFilters.length > 0 || selectedCategoryFilters.length > 0) && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                        {selectedProfessorFilters.length + selectedCategoryFilters.length} attivi
                      </span>
                    )}
                  </div>
                  {showAdvancedFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {showAdvancedFilters && (
                  <div className="p-4 pt-1 border-t border-slate-100 dark:border-slate-800 space-y-4">
                    {/* Filtro Docente */}
                    <div>
                      <span className="text-[11px] font-mono uppercase text-slate-500 block mb-1.5 font-bold">
                        Docenti d'Esame:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {PROFESSORS_LIST.map((prof) => {
                          const isAll = prof === 'Tutti i Docenti';
                          const shortName = prof.replace('Prof.ssa ', '').replace('Prof. ', '');
                          const isSelected = isAll
                            ? selectedProfessorFilters.length === 0
                            : selectedProfessorFilters.includes(shortName);

                          return (
                            <button
                              key={prof}
                              type="button"
                              onClick={() => toggleProfessorFilter(prof)}
                              className={`px-2.5 py-1 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                              }`}
                            >
                              {prof}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Filtro Argomenti */}
                    <div>
                      <span className="text-[11px] font-mono uppercase text-slate-500 block mb-1.5 font-bold">
                        Macro-Argomenti Clinici:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {EXAM_TOPIC_CATEGORIES.slice(0, 8).map((cat) => {
                          const isAll = cat === 'Tutti gli Argomenti';
                          const isSelected = isAll
                            ? selectedCategoryFilters.length === 0
                            : selectedCategoryFilters.includes(cat);

                          return (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => toggleCategoryFilter(cat)}
                              className={`px-2.5 py-1 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                              }`}
                            >
                              {cat}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottoni di Avvio e Reset */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClearAllHistory}
                  className="text-xs text-slate-400 hover:text-rose-500 hover:underline flex items-center gap-1.5 cursor-pointer order-2 sm:order-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Azzera tutta la memoria quiz</span>
                </button>

                <button
                  disabled={availablePool.length === 0}
                  onClick={() => handleStartQuiz(questionCountLimit === 'infinite' ? 'continuous' : 'standard')}
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer order-1 sm:order-2"
                >
                  <span>
                    Avvia Sessione ({questionCountLimit === 'infinite' ? 'Continua ∞' : `${Math.min(questionCountLimit, availablePool.length)} quesiti`})
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: ACTIVE QUIZ (ONE BY ONE TOUCH-FIRST) */}
          {!isConfiguring && !isCompleted && currentQuestion && (
            <div className="max-w-xl mx-auto space-y-4">
              
              {/* Header di Stato Touch: Capitolo, Domanda e Streak 🔥 */}
              <div className="flex items-center justify-between gap-2 bg-white dark:bg-slate-900 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800">
                    Domanda {currentIndex + 1}{activeQuestions.length > 0 ? ` / ${activeQuestions.length}` : ''}
                  </span>
                  {currentChapter && (
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate max-w-[140px] sm:max-w-[200px]">
                      Cap. {currentChapter.romanId}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {streak > 1 && (
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-300 dark:border-amber-800 animate-in zoom-in-95">
                      <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>{streak} di fila!</span>
                    </div>
                  )}
                  <span className="text-[11px] text-slate-500 font-medium">
                    Docente: <strong className="text-slate-800 dark:text-slate-200">{currentQuestion.professor}</strong>
                  </span>
                </div>
              </div>

              {/* Question Text */}
              <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                  {currentQuestion.question}
                </h4>

                {/* Touch-Friendly Options (min 48px hitbox) */}
                <div className="space-y-2 pt-1">
                  {currentQuestion.options.map((option, idx) => {
                    let optionStyle = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 text-slate-800 dark:text-slate-200 active:scale-[0.99]';

                    if (isAnswered) {
                      if (idx === currentQuestion.correctIndex) {
                        optionStyle = 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-950 dark:text-emerald-200 font-bold';
                      } else if (idx === selectedOption) {
                        optionStyle = 'bg-rose-50 dark:bg-rose-950/50 border-rose-400 text-rose-950 dark:text-rose-200 font-bold';
                      } else {
                        optionStyle = 'bg-slate-50/50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-400 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(idx)}
                        className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm min-h-[48px] transition-all flex items-center justify-between gap-3 cursor-pointer ${optionStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-md border border-current flex items-center justify-center text-xs font-mono font-bold shrink-0">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="leading-snug">{option}</span>
                        </div>

                        {isAnswered && idx === currentQuestion.correctIndex && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        )}
                        {isAnswered && idx === selectedOption && idx !== currentQuestion.correctIndex && (
                          <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Immediate Feedback Card */}
              {isAnswered && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div
                    className={`p-4 rounded-xl border text-xs leading-relaxed ${
                      selectedOption === currentQuestion.correctIndex
                        ? 'bg-emerald-50/90 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                        : 'bg-rose-50/90 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                    }`}
                  >
                    <div className="font-bold text-sm mb-1.5 flex items-center gap-1.5">
                      {selectedOption === currentQuestion.correctIndex ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                          <span>Risposta Esatta! Ottimo ragionamento.</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-rose-700 dark:text-rose-400" />
                          <span>Risposta Errata</span>
                        </>
                      )}
                    </div>
                    <p className="text-slate-800 dark:text-slate-200">
                      <strong>Spiegazione Molecolare:</strong> {currentQuestion.explanation}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs text-blue-950 dark:text-blue-200 leading-relaxed">
                    <span className="font-bold flex items-center gap-1.5 text-blue-900 dark:text-blue-300 mb-1">
                      <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      Perla d'Esame del Docente:
                    </span>
                    <p>{currentQuestion.clinicalPearl}</p>
                  </div>

                  {/* Natural Thumb Zone Bottom Navigation */}
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      onClick={handleFinishEarly}
                      className="px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Termina Sessione
                    </button>

                    <button
                      onClick={handleNextQuestion}
                      className="flex-1 sm:flex-initial px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>
                        {currentIndex < activeQuestions.length - 1 ? 'Prossimo Quesito' : 'Visualizza Report Finale'}
                      </span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 3: FINAL REPORT & WEAKNESS ANALYSIS */}
          {isCompleted && (
            <div className="max-w-xl mx-auto space-y-5">
              <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-3 border border-blue-200 dark:border-blue-800">
                  <Award className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">Sessione Completata!</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Report analitico delle risposte e aggiornamento memoria di studio
                </p>

                <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-around">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block">Esatte</span>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{correctCount}</div>
                  </div>
                  <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block">Errate</span>
                    <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">{totalAnswered - correctCount}</div>
                  </div>
                  <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block">Precisione</span>
                    <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">{scorePercentage}%</div>
                  </div>
                </div>
              </div>

              {/* Lacune & Suggerimenti Capitoli */}
              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold text-sm">
                  <Target className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Argomenti su cui Effettuare il Ripasso</span>
                </div>

                {weakLessons.length === 0 ? (
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200">
                    <strong>Nessun errore commesso!</strong> Ottima padronanza dei concetti testati in questa sessione.
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      In base alle risposte errate, ti consigliamo di approfondire questi argomenti nel manuale:
                    </p>
                    {weakLessons.map((wl) => (
                      <div
                        key={wl.lessonNumber}
                        className="p-3 rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50/60 dark:bg-amber-950/40 flex items-center justify-between gap-3"
                      >
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                            Lezione {wl.lessonNumber}: {wl.title}
                          </div>
                          <div className="text-[11px] text-amber-800 dark:text-amber-300 font-medium">
                            {wl.count} {wl.count === 1 ? 'errore commesso' : 'errori commessi'}
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            onClose();
                            onNavigateToLesson(wl.lessonNumber, wl.sectionId);
                          }}
                          className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors shadow-2xs cursor-pointer"
                        >
                          <span>Leggi</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottoni Report Finale */}
              <div className="flex flex-wrap gap-2.5 justify-center pt-2">
                <button
                  onClick={handleResetSession}
                  className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Nuova Sessione</span>
                </button>

                {totalAnswered - correctCount > 0 && (
                  <button
                    onClick={handleStartReviewErrors}
                    className="px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <AlertTriangle className="w-4 h-4" />
                    <span>Ripassa Subito gli Errori</span>
                  </button>
                )}

                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors shadow-xs cursor-pointer"
                >
                  Torna al Manuale
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};