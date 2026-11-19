/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * NAVIGAZIONE SEQUENZIALE CONTINUA A FINE PARAGRAFO (FOOTER FLOW)
 * Permette la transizione fluida tra sotto-capitoli e macro-moduli nel libro digitale.
 */

import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ArrowUp,
  BookmarkCheck,
  Sparkles,
  Layers
} from 'lucide-react';
import {
  getSurroundingLessonsInBook,
  getSectionByLessonNumber,
  BOOK_LESSON_SEQUENCE
} from '../data/bookChapters';

interface BookNavigationFooterProps {
  currentLesson: number;
  onNavigate: (lessonNumber: number, sectionId?: string) => void;
  onOpenSyllabus?: () => void;
}

export const BookNavigationFooter: React.FC<BookNavigationFooterProps> = ({
  currentLesson,
  onNavigate,
  onOpenSyllabus
}) => {
  const { prevLesson, prevInfo, nextLesson, nextInfo, currentPosition, totalCount } =
    getSurroundingLessonsInBook(currentLesson);
  const currentDetails = getSectionByLessonNumber(currentLesson);

  const isCrossChapterTransition =
    nextInfo && nextInfo.chapter.id !== currentDetails.chapter.id;
  const isCrossChapterPrev =
    prevInfo && prevInfo.chapter.id !== currentDetails.chapter.id;

  const progressPct = Math.round((currentPosition / totalCount) * 100);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Navigazione Sequenziale del Libro"
      className="mt-12 pt-8 pb-4 border-t-2 border-slate-200 dark:border-slate-800 not-prose print:hidden"
    >
      {/* 1. Barra di avanzamento nel Libro Digitale */}
      <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-300 font-medium mb-2">
          <div className="flex items-center gap-2">
            <span
              className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${currentDetails.chapter.badgeColor.bg}`}
            >
              Capitolo {currentDetails.chapter.id === 0 ? 'Intro' : currentDetails.chapter.romanId}
            </span>
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              {currentDetails.chapter.title}
            </span>
            <span className="text-slate-400">·</span>
            <span className="font-mono text-blue-600 dark:text-blue-400">
              Sez. {currentDetails.section.code}
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
            <span>Progresso Manuale:</span>
            <strong className="text-slate-800 dark:text-slate-200">
              {currentPosition} di {totalCount} Sezioni ({progressPct}%)
            </strong>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* 2. Pulsanti Sequenziali Continui Precedente / Successivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Pulsante Precedente */}
        {prevLesson !== null && prevInfo ? (
          <button
            onClick={() => {
              onNavigate(prevLesson);
              scrollToTop();
            }}
            className="group relative flex flex-col p-4 rounded-xl text-left bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 shadow-2xs hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold mb-1">
              <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:-translate-x-1 transition-all" />
              <span>Sotto-Capitolo Precedente</span>
              {isCrossChapterPrev && (
                <span className="ml-auto text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  Cap. {prevInfo.chapter.id === 0 ? 'Intro' : prevInfo.chapter.romanId}
                </span>
              )}
            </div>
            <div className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1">
              {prevInfo.section.code} {prevInfo.section.shortTitle}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
              {prevInfo.chapter.title} · {prevInfo.section.duration}
            </div>
          </button>
        ) : (
          <div className="p-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 flex items-center justify-center text-xs text-slate-400">
            <span>Inizio del Manuale (Introduzione)</span>
          </div>
        )}

        {/* Pulsante Successivo */}
        {nextLesson !== null && nextInfo ? (
          <button
            onClick={() => {
              onNavigate(nextLesson);
              scrollToTop();
            }}
            className={`group relative flex flex-col p-4 rounded-xl text-right bg-white dark:bg-slate-900 border shadow-2xs hover:shadow-md transition-all cursor-pointer ${
              isCrossChapterTransition
                ? 'border-indigo-300 dark:border-indigo-700 hover:border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20'
                : 'border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600'
            }`}
          >
            <div className="flex items-center justify-end gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold mb-1">
              {isCrossChapterTransition && (
                <span className="mr-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-indigo-500" />
                  <span>Nuovo Capitolo {nextInfo.chapter.romanId}</span>
                </span>
              )}
              <span>Sotto-Capitolo Successivo</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </div>
            <div className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1">
              {nextInfo.section.code} {nextInfo.section.shortTitle}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
              {nextInfo.chapter.title} · {nextInfo.section.duration}
            </div>
          </button>
        ) : (
          <div className="p-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 flex items-center justify-center text-xs text-emerald-600 dark:text-emerald-400 font-bold">
            <BookmarkCheck className="w-4 h-4 mr-1.5" />
            <span>Hai completato l'intero Manuale!</span>
          </div>
        )}
      </div>

      {/* 3. Azioni rapide: Torna in cima e Consulta Indice */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 pt-3">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors font-medium cursor-pointer"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Torna in cima alla sezione</span>
        </button>

        {onOpenSyllabus && (
          <button
            onClick={onOpenSyllabus}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/60 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 transition-colors font-semibold cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Consulta Piano dell'Opera Completo (8 Capitoli)</span>
          </button>
        )}
      </div>
    </nav>
  );
};
