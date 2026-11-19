import React, { useState } from 'react';
import { Calendar, User, BookOpen, Layers, Printer, HelpCircle, GitMerge, ChevronDown, ChevronUp, Headphones } from 'lucide-react';
import { LessonMeta } from '../data/courseSyllabus';
import { InlineProcessFlowDiagram, ProcessType } from './InlineProcessFlowDiagram';
import { useTTS } from '../context/TTSContext';
import { getSectionByLessonNumber } from '../data/bookChapters';
import { HierarchicalBreadcrumb } from './HierarchicalBreadcrumb';
import { ExecutiveOverviewBox } from './ExecutiveOverviewBox';
import { ConceptTreeMap } from './ConceptTreeMap';
import { ConceptBridgeBox } from './ConceptBridgeBox';
import { getChapterPedagogy } from '../data/chapterPedagogyData';

interface StandardLectureHeaderProps {
  lesson: LessonMeta;
  onOpenQuiz?: () => void;
  onOpenDiagrams?: () => void;
  compact?: boolean;
  onSelectChapter?: (chapterId: number) => void;
  onSelectSection?: (lessonNumber: number, sectionId?: string) => void;
  activeParagraphTitle?: string;
}

export const StandardLectureHeader: React.FC<StandardLectureHeaderProps> = ({
  lesson,
  onOpenQuiz,
  onOpenDiagrams,
  compact = false,
  onSelectChapter,
  onSelectSection,
  activeParagraphTitle
}) => {
  const [showOverviewDiagram, setShowOverviewDiagram] = useState<boolean>(false);
  const { isPlaying, isPaused, play, pause, resume, isPlayerVisible, togglePlayerVisible } = useTTS();

  const { chapter, section } = getSectionByLessonNumber(lesson.number);
  const pedagogy = getChapterPedagogy(chapter.id);

  const getAssociatedProcess = (num: number): ProcessType | null => {
    if ([15, 16].includes(num)) return 'complement';
    if ([2, 12, 19, 20].includes(num)) return 'three_signals';
    if ([6, 7, 13, 14].includes(num)) return 'germinal_center';
    if ([23, 25, 28].includes(num)) return 'gut_brain';
    if ([31, 32].includes(num)) return 'cancer_immunity';
    if ([33].includes(num)) return 'hiv_cycle';
    return null;
  };

  const associatedProcess = getAssociatedProcess(lesson.number);

  return (
    <div className="not-prose mb-8">
      {/* 1. BREADCRUMB GERARCHICO DEL TRATTATO (Capitolo > Sezione > Paragrafo) */}
      <HierarchicalBreadcrumb
        chapter={chapter}
        sectionCode={section.code}
        sectionTitle={section.title}
        activeParagraphTitle={activeParagraphTitle}
        onSelectChapter={onSelectChapter}
        onSelectSection={onSelectSection}
        lessonNumber={lesson.number}
      />

      {/* 2. CARD PRINCIPALE DELLA SEZIONE / LEZIONE */}
      <div className={`bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs overflow-hidden transition-all print:border-none print:shadow-none ${compact ? 'mb-4' : 'mb-6'}`}>
        {/* Top Academic Accent Stripe with chapter gradient */}
        <div className={`h-1.5 bg-gradient-to-r ${chapter.badgeColor.gradient} print:hidden`} />

        <div className={compact ? "p-3 sm:p-4" : "p-6 sm:p-8"}>
          {/* Metadati in tipografia pulita senza pillole generiche */}
          <div className={`flex flex-wrap items-center justify-between gap-y-1.5 gap-x-3 text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800 font-mono ${compact ? 'text-[11px] pb-2 mb-2.5' : 'text-xs pb-3 mb-4'}`}>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className={`px-2 py-0.5 rounded text-[10.5px] font-bold font-mono tracking-tight shrink-0 ${chapter.badgeColor.bg}`}>
                {chapter.id === 0 ? 'INTRO' : `CAPITOLO ${chapter.romanId}`}
              </span>
              <span className="font-bold text-blue-700 dark:text-blue-400 font-mono">
                Sez. {section.code}
              </span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-600 dark:text-slate-300 font-semibold">
                (Lez. d'Aula {lesson.number})
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                <User className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Docente: <strong className="text-slate-900 dark:text-slate-100">{lesson.professor}</strong></span>
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Data: <strong className="text-slate-900 dark:text-slate-100">{lesson.dateStr}</strong></span>
              </span>
            </div>

            <div className="flex items-center gap-2 print:hidden">
              <span className="text-slate-600 dark:text-slate-400 font-medium text-xs">
                {chapter.title}
              </span>
            </div>
          </div>

          {/* Titolo Principale dell'Argomento */}
          <h1 className={`font-black text-slate-900 dark:text-slate-100 tracking-tight text-balance leading-snug ${compact ? 'text-lg sm:text-xl' : 'text-2xl sm:text-3xl lg:text-4xl'}`}>
            {lesson.title}
          </h1>

          {/* Riassuntino analitico per inquadrare rapidamente gli argomenti */}
          {!compact ? (
            <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2 font-mono">
                <BookOpen className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Sintesi Didattica & Argomenti Chiave della Trattazione</span>
              </div>

              {lesson.summary && (
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                  {lesson.summary}
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                {lesson.topics.map((t, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span className="font-medium truncate" title={t}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            lesson.summary && (
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed truncate">
                {lesson.summary}
              </p>
            )
          )}

          {/* Action Bar (TTS, Quiz d'Esame, Schemi di Flusso, Stampa PDF) */}
          <div className={`border-t border-slate-150 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs print:hidden ${compact ? 'mt-3 pt-2' : 'mt-6 pt-4'}`}>
            <div className="flex flex-wrap items-center gap-2">
              {/* Audio TTS Player Quick Start */}
              <button
                type="button"
                onClick={() => {
                  if (!isPlayerVisible) {
                    togglePlayerVisible();
                  }
                  if (isPlaying && !isPaused) {
                    pause();
                  } else if (isPaused) {
                    resume();
                  } else {
                    play();
                  }
                }}
                title="Avvia la sintesi vocale e l'ascolto della lezione (TTS)"
                className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer ${
                  isPlaying && !isPaused
                    ? 'bg-blue-600 text-white border-blue-700 ring-2 ring-blue-300 dark:ring-blue-800'
                    : 'bg-blue-50 hover:bg-blue-100 text-blue-900 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800'
                }`}
              >
                <Headphones className={`w-3.5 h-3.5 ${isPlaying && !isPaused ? 'animate-pulse text-white' : 'text-blue-600 dark:text-blue-400'}`} />
                <span>{isPlaying && !isPaused ? 'In Riproduzione...' : 'Ascolta Trattazione'}</span>
              </button>

              {/* Toggle per Visione d'Insieme / Schema integrato nella lezione */}
              {associatedProcess && (
                <button
                  type="button"
                  onClick={() => setShowOverviewDiagram(!showOverviewDiagram)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer ${
                    showOverviewDiagram
                      ? 'bg-indigo-600 text-white border-indigo-700'
                      : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800'
                  }`}
                >
                  <GitMerge className="w-3.5 h-3.5" />
                  <span>{showOverviewDiagram ? 'Nascondi Schema di Processo' : "Schema di Flusso Integrato"}</span>
                  {showOverviewDiagram ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              )}

              {onOpenQuiz && (
                <button
                  type="button"
                  onClick={onOpenQuiz}
                  title="Esercitati con i quesiti dei professori su questa lezione"
                  className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Quiz d'Esame Docenti</span>
                </button>
              )}

              {onOpenDiagrams && !associatedProcess && (
                <button
                  type="button"
                  onClick={onOpenDiagrams}
                  title="Apri i diagrammi di flusso dei pathway immunologici"
                  className="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
                >
                  <GitMerge className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Schemi di Flusso</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => window.print()}
                title="Stampa questo capitolo o esporta come PDF A4"
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                <span>Stampa PDF</span>
              </button>
            </div>
          </div>

          {/* Schema di Processo Espanso Direttamente nell'Header */}
          {showOverviewDiagram && associatedProcess && (
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              <InlineProcessFlowDiagram processId={associatedProcess} defaultExpanded={true} />
            </div>
          )}
        </div>
      </div>

      {/* 3. COESIONE DIDATTICA: VISIONE D'INSIEME (GENERALE → SPECIFICO) */}
      {!compact && (
        <>
          {/* Box Quadro Generale e Domanda Biologica */}
          <ExecutiveOverviewBox pedagogy={pedagogy} />

          {/* Mappa ad Albero del Capitolo per mostrare la gerarchia visiva */}
          <ConceptTreeMap
            pedagogy={pedagogy}
            currentLessonNumber={lesson.number}
            onNavigateToSection={onSelectSection}
          />

          {/* Ponte di Raccordo Concettuale dal tema precedente */}
          {pedagogy.bridgeFromPrevious && (
            <ConceptBridgeBox
              mode="in"
              text={pedagogy.bridgeFromPrevious}
            />
          )}
        </>
      )}
    </div>
  );
};
