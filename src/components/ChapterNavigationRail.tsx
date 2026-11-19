/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CHAPTER NAVIGATION RAIL (NUOVO SELETTORE ACCADEMICO A 8 CAPITOLI & SEZIONI)
 * Sostituisce la barra orizzontale a 33 numeri con una navigazione strutturata a 3 livelli:
 * - Livello 1: Gli 8 Macro-Capitoli dell'Opera (+ Intro) con badge cromatici
 * - Livello 2: Le Sezioni Tematiche del capitolo attivo
 * - Livello 3: Riferimento discreto alla Lezione d'Aula corrispondente
 */

import React, { useState } from 'react';
import {
  BOOK_CHAPTERS,
  BookChapterDefinition,
  getChapterByLessonNumber
} from '../data/bookChapters';
import { BookOpen, Layers, ChevronDown, CheckCircle2, ChevronRight, Compass } from 'lucide-react';

interface ChapterNavigationRailProps {
  currentLesson: number;
  onSelectLesson: (lessonNumber: number, anchorId?: string) => void;
}

export const ChapterNavigationRail: React.FC<ChapterNavigationRailProps> = ({
  currentLesson,
  onSelectLesson
}) => {
  const activeChapter = getChapterByLessonNumber(currentLesson);
  const [selectedChapterId, setSelectedChapterId] = useState<number>(activeChapter.id);

  // Aggiorna capitolo selezionato se cambia dall'esterno la lezione corrente
  React.useEffect(() => {
    setSelectedChapterId(activeChapter.id);
  }, [activeChapter.id]);

  const displayedChapter = BOOK_CHAPTERS.find((c) => c.id === selectedChapterId) || activeChapter;

  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-2xs not-prose w-full">
      <div className="w-full px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 pt-2.5 sm:pt-3 pb-2">
        
        {/* Livello 1: Selezione dei Macro-Capitoli (I - VIII + Intro) */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
            <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
            <span className="uppercase tracking-wider">Trattato di Immunologia</span>
            <span className="text-slate-400 font-normal hidden sm:inline">· 8 Grandi Aree Tematiche</span>
          </div>

          <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
            <span>Capitolo Attivo: </span>
            <strong className="text-slate-900 dark:text-slate-100">
              {displayedChapter.id === 0 ? 'INTRO' : `CAP. ${displayedChapter.romanId}`}
            </strong>
          </div>
        </div>

        {/* Barra di scorrimento orizzontale dei Capitoli */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 pt-0.5 scrollbar-thin">
          {BOOK_CHAPTERS.map((ch) => {
            const isChapterActive = ch.id === displayedChapter.id;
            const containsCurrentLesson = ch.lessonNumbers.includes(currentLesson);

            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => {
                  setSelectedChapterId(ch.id);
                  // Se clicca un capitolo diverso, porta alla prima sezione di quel capitolo
                  if (ch.id !== activeChapter.id && ch.sections.length > 0) {
                    onSelectLesson(ch.sections[0].lessonNumber);
                  }
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border shrink-0 ${
                  isChapterActive
                    ? `${ch.badgeColor.bg} shadow-xs font-bold border-transparent`
                    : containsCurrentLesson
                    ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-800 font-semibold'
                    : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
                }`}
                title={`${ch.title} - ${ch.subtitle}`}
              >
                <span className="font-mono text-[11px] font-bold">
                  {ch.id === 0 ? '0' : ch.romanId}
                </span>
                <span className="truncate max-w-[130px] sm:max-w-[180px]">
                  {ch.shortTitle}
                </span>
                <span className="text-[10px] opacity-75 font-mono">
                  ({ch.sections.length})
                </span>
              </button>
            );
          })}
        </div>

        {/* Livello 2: Sezioni e Sotto-argomenti del Capitolo Selezionato */}
        <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          <span className="text-[11px] font-mono text-slate-600 dark:text-slate-300 uppercase tracking-wider shrink-0 pr-1 flex items-center gap-1 font-semibold">
            <Layers className="w-3 h-3" />
            <span>Sezioni:</span>
          </span>

          {displayedChapter.sections.map((sec) => {
            const isSelected = sec.lessonNumber === currentLesson;

            return (
              <button
                key={sec.code}
                type="button"
                onClick={() => {
                  onSelectLesson(sec.lessonNumber, sec.anchorId);
                  if (sec.anchorId) {
                    setTimeout(() => {
                      const el = document.getElementById(sec.anchorId!);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 50);
                  }
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs whitespace-nowrap transition-all border shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white font-bold border-blue-700 shadow-2xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border-slate-300 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700'
                }`}
                title={sec.title}
              >
                <span className={`font-mono text-[10.5px] font-bold ${isSelected ? 'text-white' : 'text-blue-700 dark:text-blue-400'}`}>
                  {sec.code}
                </span>
                <span className="truncate max-w-[140px] sm:max-w-[200px] font-medium">
                  {sec.shortTitle}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
