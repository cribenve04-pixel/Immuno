/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * INDICE LATERALE NIDIFICATO AD ALBERO SU 3 LIVELLI (SidebarTOC)
 * - Livello 1: Macro-Capitolo (Capitolo 1 a 8 + Guida Intro)
 * - Livello 2: Lezione / Sotto-Capitolo (es. 1.3 PRRs & Inflammasoma NLRP3)
 * - Livello 3: Paragrafo interno tracciato dallo ScrollSpy (es. sec-4-4: Piroptosi e Gasdermina D)
 */

import React, { useState, useEffect, useMemo } from 'react';
import {
  Bookmark,
  ListOrdered,
  Printer,
  ChevronRight,
  ChevronDown,
  BookOpen,
  Search,
  CheckCircle,
  Sparkles,
  Layers,
  FoldVertical,
  UnfoldVertical,
  Hash
} from 'lucide-react';
import {
  BOOK_CHAPTERS,
  BookChapterDefinition,
  getChapterByLessonNumber,
  getSectionByLessonNumber
} from '../data/bookChapters';
import { ALL_LESSON_SECTIONS, TocSectionItem } from '../data/lessonSections';

interface SidebarTOCProps {
  currentLesson: number;
  activeId: string;
  isSerif: boolean;
  setIsSerif: (val: boolean) => void;
  fontSize: 'normal' | 'large';
  setFontSize: (val: 'normal' | 'large') => void;
  onSwitchLesson: (num: number, sectionId?: string) => void;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
  onToggleCollapse?: () => void;
}

export const SidebarTOC: React.FC<SidebarTOCProps> = ({
  currentLesson,
  activeId,
  onSwitchLesson,
  onToggleCollapse
}) => {
  const currentChapter = getChapterByLessonNumber(currentLesson);

  // Expanded Macro-Chapters state
  const [expandedChapters, setExpandedChapters] = useState<Set<number>>(
    () => new Set([currentChapter.id])
  );

  // Auto-expand active chapter whenever currentLesson changes
  useEffect(() => {
    setExpandedChapters((prev) => {
      const next = new Set(prev);
      next.add(currentChapter.id);
      return next;
    });
  }, [currentChapter.id]);

  // Quick TOC Search Filter
  const [filterQuery, setFilterQuery] = useState('');

  const toggleChapter = (chapterId: number) => {
    setExpandedChapters((prev) => {
      const next = new Set(prev);
      if (next.has(chapterId)) {
        next.delete(chapterId);
      } else {
        next.add(chapterId);
      }
      return next;
    });
  };

  const handleExpandAll = () => {
    setExpandedChapters(new Set(BOOK_CHAPTERS.map((c) => c.id)));
  };

  const handleCollapseAll = () => {
    setExpandedChapters(new Set([currentChapter.id]));
  };

  // Filtered chapters logic
  const filteredChapters = useMemo(() => {
    if (!filterQuery.trim()) return BOOK_CHAPTERS;
    const q = filterQuery.toLowerCase();

    return BOOK_CHAPTERS.map((ch) => {
      const matchChapter =
        ch.title.toLowerCase().includes(q) ||
        ch.subtitle.toLowerCase().includes(q) ||
        `capitolo ${ch.id}`.includes(q);

      const matchingSections = ch.sections.filter((sec) => {
        const inSecTitle = sec.title.toLowerCase().includes(q);
        const inSecCode = sec.code.toLowerCase().includes(q);
        const inProf = sec.professor.toLowerCase().includes(q);
        const paragraphs = ALL_LESSON_SECTIONS[sec.lessonNumber] || [];
        const inParagraphs = paragraphs.some((p) =>
          p.title.toLowerCase().includes(q)
        );
        return inSecTitle || inSecCode || inProf || inParagraphs;
      });

      if (matchChapter || matchingSections.length > 0) {
        return {
          ...ch,
          sections: matchingSections.length > 0 ? matchingSections : ch.sections
        };
      }
      return null;
    }).filter(Boolean) as BookChapterDefinition[];
  }, [filterQuery]);

  // If user searches, auto-expand matching chapters
  useEffect(() => {
    if (filterQuery.trim()) {
      setExpandedChapters(new Set(filteredChapters.map((c) => c.id)));
    }
  }, [filterQuery, filteredChapters]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <aside className="sticky top-20 max-h-[calc(100vh-6rem)] flex flex-col p-3.5 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs text-xs">
      {/* 1. Header & Controls Indice */}
      <div className="border-b border-slate-150 dark:border-slate-800 pb-3 shrink-0">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 text-blue-700 dark:text-blue-400 font-bold">
            <BookOpen className="w-4 h-4 shrink-0" />
            <span className="text-xs uppercase tracking-wider font-mono font-bold">
              Indice del Libro
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={
                expandedChapters.size >= BOOK_CHAPTERS.length
                  ? handleCollapseAll
                  : handleExpandAll
              }
              title={
                expandedChapters.size >= BOOK_CHAPTERS.length
                  ? 'Comprimi i capitoli inattivi'
                  : 'Espandi tutti gli 8 Capitoli'
              }
              className="p-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
            >
              {expandedChapters.size >= BOOK_CHAPTERS.length ? (
                <FoldVertical className="w-3.5 h-3.5" />
              ) : (
                <UnfoldVertical className="w-3.5 h-3.5" />
              )}
            </button>

            {onToggleCollapse && (
              <button
                onClick={onToggleCollapse}
                title="Nascondi indice laterale"
                className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-[11px] font-semibold flex items-center gap-1 transition-colors"
              >
                <span>Nascondi</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Quick Filter Search inside TOC */}
        <div className="relative mt-2">
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Filtra capitoli, sezioni o paragrafi..."
            className="w-full pl-7 pr-2.5 py-1.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg text-xs placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2 top-2 pointer-events-none" />
        </div>
      </div>

      {/* 2. Scrollable 3-Level Tree Navigation */}
      <div className="flex-1 overflow-y-auto py-3 space-y-2 pr-1 custom-scrollbar">
        {filteredChapters.map((chapter) => {
          const isCurrentChapter = chapter.id === currentChapter.id;
          const isExpanded = expandedChapters.has(chapter.id);
          const activeSectionsInChapter = chapter.sections;

          return (
            <div
              key={chapter.id}
              className={`rounded-xl border transition-all ${
                isCurrentChapter
                  ? 'border-blue-300 dark:border-blue-800/80 bg-blue-50/20 dark:bg-blue-950/20'
                  : 'border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60'
              }`}
            >
              {/* LIVELLO 1: Macro-Capitolo (Header Accordion) */}
              <button
                onClick={() => toggleChapter(chapter.id)}
                className="w-full p-2.5 flex items-center justify-between text-left gap-2 rounded-t-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className={`shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded font-mono ${
                      isCurrentChapter
                        ? chapter.badgeColor.bg
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {chapter.id === 0 ? 'INTRO' : `CAP. ${chapter.romanId}`}
                  </span>
                  <div className="min-w-0">
                    <h5
                      className={`font-bold text-xs truncate leading-tight ${
                        isCurrentChapter
                          ? 'text-blue-900 dark:text-blue-200'
                          : 'text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {chapter.title}
                    </h5>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {chapter.sections.length} sezioni
                    </span>
                  </div>
                </div>

                <div className="shrink-0 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200">
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* LIVELLO 2 & 3: Lista Sezioni e Paragrafi Interni */}
              {isExpanded && (
                <div className="px-2 pb-2.5 pt-1 space-y-1.5 border-t border-slate-150 dark:border-slate-800/80">
                  {activeSectionsInChapter.map((sec) => {
                    const isCurrentSection = isCurrentChapter && Boolean(
                      (sec.anchorId && activeId && (activeId === sec.anchorId || activeId.startsWith(sec.anchorId))) ||
                      (!activeId && sec.lessonNumber === currentLesson) ||
                      (sec.lessonNumber === currentLesson && !sec.anchorId)
                    );
                    const paragraphs: TocSectionItem[] =
                      ALL_LESSON_SECTIONS[sec.lessonNumber] || [];

                    return (
                      <div key={sec.code || sec.lessonNumber || sec.anchorId} className="space-y-1">
                        {/* LIVELLO 2: Sezione Tematica */}
                        <button
                          onClick={() => {
                            onSwitchLesson(sec.lessonNumber, sec.anchorId);
                            if (sec.anchorId) {
                              const el = document.getElementById(sec.anchorId);
                              if (el) {
                                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              } else {
                                setTimeout(() => {
                                  const delayedEl = document.getElementById(sec.anchorId!);
                                  if (delayedEl) {
                                    delayedEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                  }
                                }, 150);
                              }
                            }
                          }}
                          className={`w-full text-left px-2 py-1.5 rounded-lg flex items-center justify-between gap-1.5 transition-all cursor-pointer ${
                            isCurrentSection
                              ? 'bg-blue-100/90 dark:bg-blue-900/50 text-blue-900 dark:text-blue-100 font-bold border-l-2 border-blue-600 shadow-2xs'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span
                              className={`text-[10px] font-mono font-bold px-1 py-0.5 rounded ${
                                isCurrentSection
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                              }`}
                            >
                              {sec.code}
                            </span>
                            <span className="truncate text-[11px] leading-tight">
                              {sec.shortTitle}
                            </span>
                          </div>
                        </button>

                        {/* LIVELLO 3: Paragrafi interni con ScrollSpy (per la lezione corrente) */}
                        {isCurrentSection && paragraphs.length > 0 && (
                          <div className="pl-3 py-1 space-y-0.5 border-l-2 border-blue-200 dark:border-blue-800/60 ml-2">
                            {paragraphs.map((p) => {
                              const isParaActive = activeId === p.id;
                              return (
                                <a
                                  key={p.id}
                                  href={`#${p.id}`}
                                  className={`block py-1 px-2 rounded text-[10.5px] leading-snug transition-colors ${
                                    isParaActive
                                      ? 'bg-blue-600 text-white font-bold shadow-2xs'
                                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                                  }`}
                                >
                                  <div className="flex items-center gap-1.5">
                                    <span
                                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                        isParaActive
                                          ? 'bg-white'
                                          : 'bg-slate-300 dark:bg-slate-600'
                                      }`}
                                    />
                                    <span className="truncate">{p.title}</span>
                                  </div>
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 3. Footer Azioni: Stampa / PDF */}
      <div className="pt-2.5 border-t border-slate-150 dark:border-slate-800 shrink-0">
        <button
          onClick={handlePrint}
          className="w-full py-1.5 px-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <Printer className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
          <span>Stampa / Salva Sezione in PDF</span>
        </button>
      </div>
    </aside>
  );
};
