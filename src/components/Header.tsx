/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * HEADER ACCADEMICO & BREADCRUMB GEOGRAFICA (FILO D'ARIANNA)
 * Barra superiore snella e ottimizzata per mobile/Android PWA:
 * - Selettore rapido capitolo/sezione
 * - Ricerca & Glossario unificati (1 solo pulsante)
 * - Quiz d'Esame
 * - Account Google / Drive
 * - Regolazione Schermo (include Zoom Pagina, Audio TTS, Rotazione, Schermo Intero e Stampa)
 */

import React from 'react';
import {
  BookMarked,
  Search,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Maximize,
  Minimize,
  SlidersHorizontal,
  HelpCircle,
  Columns2,
  BookOpen
} from 'lucide-react';
import { HubTab } from './UnifiedSearchAndResourceHub';
import { useTTS } from '../context/TTSContext';
import {
  getSectionByLessonNumber,
  getSurroundingLessonsInBook,
  BOOK_CHAPTERS
} from '../data/bookChapters';
import { GoogleAccountButton } from './GoogleAccountButton';

interface HeaderProps {
  currentLesson: number;
  onSelectLesson: (num: number, sectionId?: string) => void;
  onOpenHub?: (tab?: HubTab) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onOpenReaderSettings?: () => void;
  onOpenQuiz?: () => void;
  onOpenDiagrams?: () => void;
  isSplitMode?: boolean;
  onToggleSplitMode?: () => void;
  pageZoom?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentLesson,
  onSelectLesson,
  onOpenHub,
  isFullscreen,
  onToggleFullscreen,
  onOpenReaderSettings,
  onOpenQuiz,
  isSplitMode,
  onToggleSplitMode,
  pageZoom = 100
}) => {
  const { isPlaying, isPaused } = useTTS();
  const { chapter, section } = getSectionByLessonNumber(currentLesson);
  const { prevLesson, nextLesson } = getSurroundingLessonsInBook(currentLesson);

  const hasActiveScreenIndicator = pageZoom !== 100 || isPlaying || isPaused;

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* 1. Barra Superiore Snella (Mobile-First) */}
      <div className="w-full flex items-center justify-between gap-2 sm:gap-3 px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-1.5 sm:py-2 border-b border-slate-150 dark:border-slate-800/80">
        {/* Zone 1: Brand & Selettore Rapido a Libro */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1 sm:flex-initial">
          <a
            href="#top"
            className="text-xs sm:text-base font-black tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap flex items-center gap-1.5 sm:gap-2 shrink-0"
          >
            <BookMarked className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />
            <span className="hidden sm:inline">Manuale Immunologia</span>
          </a>

          {/* Selettore rapido Capitolo/Sezione raggruppato in 8 Macro-Moduli */}
          <div className="relative flex items-center min-w-0 flex-1 sm:flex-initial">
            <select
              value={`${currentLesson}:${section?.anchorId || ''}`}
              onChange={(e) => {
                const [lessonStr, anchorId] = e.target.value.split(':');
                onSelectLesson(Number(lessonStr), anchorId || undefined);
              }}
              aria-label="Seleziona una sezione del libro"
              className="appearance-none bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs py-1.5 pl-2.5 pr-6 rounded-lg border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer w-full max-w-[155px] sm:max-w-[230px] truncate"
            >
              {BOOK_CHAPTERS.map((ch) => (
                <optgroup
                  key={`ch-${ch.id}`}
                  label={ch.id === 0 ? 'INTRODUZIONE' : `CAPITOLO ${ch.romanId}: ${ch.shortTitle}`}
                >
                  {ch.sections.map((sec, sIdx) => {
                    const optionValue = `${sec.lessonNumber}:${sec.anchorId || ''}`;
                    return (
                      <option key={`ch-${ch.id}-sec-${sec.code}-${sec.lessonNumber}-${sIdx}`} value={optionValue}>
                        {sec.code} {sec.shortTitle}
                      </option>
                    );
                  })}
                </optgroup>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-2 pointer-events-none" />
          </div>
        </div>

        {/* Zone 2: Strumenti Essenziali (4 tasti puliti su telefono) */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* 1. Cerca & Glossario Unificati */}
          {onOpenHub && (
            <button
              onClick={() => onOpenHub('search')}
              title="Cerca nel Manuale, Glossario A-Z e Indice (Ctrl+K)"
              aria-label="Cerca nel Manuale e Glossario"
              className="p-2 sm:px-2.5 sm:py-1.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-lg transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
            >
              <Search className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline text-xs font-bold">Cerca & Glossario</span>
            </button>
          )}

          {/* 2. Simulatore Quiz d'Esame */}
          {onOpenQuiz && (
            <button
              onClick={onOpenQuiz}
              title="Simulatore Quiz d'Esame On-the-Go"
              aria-label="Simulatore Quiz d'Esame On-the-Go"
              className="p-2 sm:px-2.5 sm:py-1.5 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 rounded-lg transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="hidden sm:inline text-xs font-bold">Quiz</span>
            </button>
          )}

          {/* 3. Account Google & Drive Sync */}
          <GoogleAccountButton compact />

          {/* 4. Regolazione Schermo (Zoom, Font, Audio TTS, Rotazione, Stampa) */}
          {onOpenReaderSettings && (
            <button
              onClick={onOpenReaderSettings}
              title="Regolazione schermo, zoom pagina, audio vocale, rotazione e stampa"
              aria-label="Regolazione schermo e strumenti"
              className="relative p-2 sm:px-2.5 sm:py-1.5 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/60 dark:hover:bg-amber-900/60 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-700 rounded-lg transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
              <span className="hidden md:inline text-xs font-bold">Schermo</span>
              {hasActiveScreenIndicator && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-blue-600 ring-2 ring-white dark:ring-slate-900" />
              )}
            </button>
          )}

          {/* Controlli extra solo su Desktop/Tablet grandi */}
          <button
            onClick={onToggleFullscreen}
            title={isFullscreen ? 'Esci da schermo intero' : 'Schermo intero'}
            aria-label={isFullscreen ? 'Esci da schermo intero' : 'Attiva schermo intero'}
            className={`hidden md:inline-flex p-2 rounded-lg border transition-all cursor-pointer ${
              isFullscreen
                ? 'bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-700 shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
            }`}
          >
            {isFullscreen ? (
              <Minimize className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            ) : (
              <Maximize className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            )}
          </button>

          {onToggleSplitMode && (
            <button
              onClick={onToggleSplitMode}
              title={
                isSplitMode
                  ? 'Disattiva vista affiancata (lezione singola)'
                  : 'Affianca due lezioni (vista comparativa 50/50)'
              }
              aria-label="Affianca due lezioni"
              className={`hidden lg:inline-flex p-2 rounded-lg border transition-all cursor-pointer ${
                isSplitMode
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 shadow-2xs'
              }`}
            >
              <Columns2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 2. BREADCRUMB GEOGRAFICA (FILO D'ARIANNA) */}
      <div className="w-full px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-1.5 sm:py-2 bg-slate-50/90 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3 text-xs overflow-x-auto select-none print:hidden">
        {/* Breadcrumb Path con badge cromatico */}
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0 hidden sm:inline" />

          {/* Badge Cromatico del Macro-Capitolo */}
          <span
            className={`px-2 py-0.5 rounded-full text-[10.5px] font-bold font-mono tracking-tight shrink-0 shadow-2xs ${chapter.badgeColor.bg}`}
          >
            {chapter.id === 0 ? 'INTRO' : `CAPITOLO ${chapter.romanId}`}
          </span>

          {/* Capitolo Title */}
          <span className="font-semibold text-slate-800 dark:text-slate-200 truncate hidden md:inline">
            {chapter.title}
          </span>

          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />

          {/* Sezione & Sotto-argomento */}
          <span className="font-mono font-bold text-blue-600 dark:text-blue-400 shrink-0">
            Sez. {section.code}
          </span>

          <span className="font-medium text-slate-900 dark:text-slate-100 truncate">
            {section.shortTitle}
          </span>
        </div>

        {/* Pulsantini Rapidi per Avanzamento Sequenziale Nel Header */}
        <div className="flex items-center gap-1 shrink-0">
          {prevLesson !== null && (
            <button
              onClick={() => onSelectLesson(prevLesson)}
              title="Vai alla sezione precedente del libro"
              className="p-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          <span className="text-[10px] font-mono text-slate-400 px-1 hidden lg:inline">
            L.{currentLesson}
          </span>

          {nextLesson !== null && (
            <button
              onClick={() => onSelectLesson(nextLesson)}
              title="Vai alla sezione successiva del libro"
              className="p-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
