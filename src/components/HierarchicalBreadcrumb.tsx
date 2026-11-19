/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * BREADCRUMB GERARCHICO DEL TRATTATO (Capitolo > Sezione > Paragrafo)
 * Permette allo studente di comprendere all'istante la sua esatta posizione
 * nell'albero della conoscenza e navigare rapidamente tra i livelli.
 */

import React from 'react';
import { BookOpen, ChevronRight, Layers, Bookmark } from 'lucide-react';
import { BookChapterDefinition } from '../data/bookChapters';

interface HierarchicalBreadcrumbProps {
  chapter: BookChapterDefinition;
  sectionCode: string;
  sectionTitle: string;
  activeParagraphTitle?: string;
  onSelectChapter?: (chapterId: number) => void;
  onSelectSection?: (lessonNumber: number) => void;
  lessonNumber: number;
}

export const HierarchicalBreadcrumb: React.FC<HierarchicalBreadcrumbProps> = ({
  chapter,
  sectionCode,
  sectionTitle,
  activeParagraphTitle,
  onSelectChapter,
  onSelectSection,
  lessonNumber
}) => {
  return (
    <nav
      aria-label="Breadcrumb Gerarchico"
      className="flex items-center flex-wrap gap-1.5 text-xs text-slate-700 dark:text-slate-200 py-2.5 px-3.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-300 dark:border-slate-700 mb-4 not-prose print:hidden shadow-2xs"
    >
      {/* Livello 0: Trattato */}
      <span className="flex items-center gap-1 font-bold text-slate-900 dark:text-slate-100">
        <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
        <span>Manuale</span>
      </span>

      <ChevronRight className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" aria-hidden="true" />

      {/* Livello 1: Capitolo Macro */}
      <button
        type="button"
        onClick={() => onSelectChapter && onSelectChapter(chapter.id)}
        className="flex items-center gap-1 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
        title={`Capitolo ${chapter.romanId}: ${chapter.title}`}
      >
        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold font-mono ${chapter.badgeColor.bg}`}>
          {chapter.id === 0 ? 'INTRO' : `CAP. ${chapter.romanId}`}
        </span>
        <span className="truncate max-w-[140px] sm:max-w-[200px] font-bold text-slate-900 dark:text-slate-100">
          {chapter.shortTitle || chapter.title}
        </span>
      </button>

      <ChevronRight className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" aria-hidden="true" />

      {/* Livello 2: Sezione / Argomento Tematico */}
      <button
        type="button"
        onClick={() => onSelectSection && onSelectSection(lessonNumber)}
        className="flex items-center gap-1 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
        title={`Sezione ${sectionCode}: ${sectionTitle}`}
      >
        <span className="font-mono font-bold text-blue-700 dark:text-blue-400">
          Sez. {sectionCode}
        </span>
        <span className="truncate max-w-[150px] sm:max-w-[260px] font-semibold text-slate-800 dark:text-slate-200">
          {sectionTitle}
        </span>
      </button>

      {/* Livello 3: Paragrafo attivo dallo ScrollSpy (se rilevato) */}
      {activeParagraphTitle && (
        <>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" aria-hidden="true" />
          <span className="flex items-center gap-1 text-slate-950 dark:text-white font-bold truncate max-w-[160px] sm:max-w-[280px]">
            <Bookmark className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="truncate">{activeParagraphTitle}</span>
          </span>
        </>
      )}

      {/* Riferimento discreto alla Lezione d'Aula */}
      <span className="ml-auto text-[11px] font-mono text-slate-700 dark:text-slate-300 font-semibold hidden md:inline">
        (Lez. {lessonNumber})
      </span>
    </nav>
  );
};
