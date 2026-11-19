import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  ChevronUp,
  ChevronDown,
  ArrowUpToLine,
  ArrowDownToLine,
  SlidersVertical,
  BookOpen
} from 'lucide-react';
import { BOOK_CHAPTERS } from '../data/bookChapters';
import { StandardLectureHeader } from './StandardLectureHeader';
import { LessonMeta } from '../data/courseSyllabus';

interface SplitLectureColumnProps {
  columnId: 'A' | 'B';
  lessonMeta: LessonMeta;
  allLessons: LessonMeta[];
  onSelectLesson: (num: number) => void;
  renderContent: () => React.ReactNode;
  onOpenQuiz: () => void;
  onOpenDiagrams: () => void;
  colorTheme: 'blue' | 'indigo';
  containerHeightClass?: string;
  isSyncActive?: boolean;
  onScrollBroadcast?: (pct: number) => void;
  externalScrollPct?: number | null;
  className?: string;
}

export const SplitLectureColumn: React.FC<SplitLectureColumnProps> = ({
  columnId,
  lessonMeta,
  allLessons,
  onSelectLesson,
  renderContent,
  onOpenQuiz,
  onOpenDiagrams,
  colorTheme = 'blue',
  containerHeightClass = 'h-[calc(100vh-105px)]',
  isSyncActive = false,
  onScrollBroadcast,
  externalScrollPct,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  const isBlue = colorTheme === 'blue';

  const themeColors = {
    badge: isBlue
      ? 'bg-blue-600 text-white'
      : 'bg-indigo-600 text-white',
    badgeSecondary: isBlue
      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
      : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
    sliderRail: isBlue
      ? 'bg-blue-100 dark:bg-blue-950/50'
      : 'bg-indigo-100 dark:bg-indigo-950/50',
    sliderFill: isBlue
      ? 'bg-gradient-to-b from-blue-500 to-blue-700'
      : 'bg-gradient-to-b from-indigo-500 to-indigo-700',
    sliderThumb: isBlue
      ? 'bg-blue-600 border-blue-200 ring-blue-400 hover:bg-blue-700'
      : 'bg-indigo-600 border-indigo-200 ring-indigo-400 hover:bg-indigo-700',
    buttonHover: isBlue
      ? 'hover:bg-blue-50 dark:hover:bg-blue-950/50 text-blue-700 dark:text-blue-300'
      : 'hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300',
  };

  // Scroll listener: updates slider percentage as user scrolls naturally
  const handleScroll = useCallback(() => {
    if (!containerRef.current || isDraggingRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll <= 0) {
      setScrollPercent(0);
      return;
    }
    const pct = Math.min(100, Math.max(0, Math.round((scrollTop / maxScroll) * 100)));
    setScrollPercent(pct);

    if (isSyncActive && onScrollBroadcast) {
      onScrollBroadcast(pct);
    }
  }, [isSyncActive, onScrollBroadcast]);

  // Synchronized external scroll update if active
  useEffect(() => {
    if (
      isSyncActive &&
      externalScrollPct !== null &&
      externalScrollPct !== undefined &&
      !isDraggingRef.current &&
      containerRef.current
    ) {
      const { scrollHeight, clientHeight } = containerRef.current;
      const maxScroll = scrollHeight - clientHeight;
      if (maxScroll > 0) {
        const targetScroll = (externalScrollPct / 100) * maxScroll;
        if (Math.abs(containerRef.current.scrollTop - targetScroll) > 10) {
          containerRef.current.scrollTop = targetScroll;
          setScrollPercent(externalScrollPct);
        }
      }
    }
  }, [externalScrollPct, isSyncActive]);

  // Smooth scroll to a percentage of the content
  const scrollToPercent = (pct: number, smooth: boolean = true) => {
    if (!containerRef.current) return;
    const { scrollHeight, clientHeight } = containerRef.current;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll <= 0) return;

    const clampedPct = Math.min(100, Math.max(0, pct));
    const targetTop = (clampedPct / 100) * maxScroll;

    containerRef.current.scrollTo({
      top: targetTop,
      behavior: smooth ? 'smooth' : 'auto',
    });
    setScrollPercent(clampedPct);

    if (isSyncActive && onScrollBroadcast) {
      onScrollBroadcast(clampedPct);
    }
  };

  // Slider Dragging Handling via Pointer Events
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    isDraggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateSliderFromPointer(e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    updateSliderFromPointer(e.clientY);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  const updateSliderFromPointer = (clientY: number) => {
    if (!trackRef.current || !containerRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const trackHeight = rect.height;
    if (trackHeight <= 0) return;

    const offsetY = Math.min(trackHeight, Math.max(0, clientY - rect.top));
    const pct = Math.round((offsetY / trackHeight) * 100);

    const { scrollHeight, clientHeight } = containerRef.current;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll > 0) {
      containerRef.current.scrollTop = (pct / 100) * maxScroll;
      setScrollPercent(pct);
    }
  };

  // Native range input slider handler
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    scrollToPercent(val, false);
  };

  // Step scroll (up/down button)
  const stepScroll = (direction: 'up' | 'down') => {
    if (!containerRef.current) return;
    const delta = direction === 'up' ? -350 : 350;
    containerRef.current.scrollBy({ top: delta, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-w-0 w-full h-full flex flex-col bg-white dark:bg-slate-900 overflow-hidden ${className}`}
    >
      {/* COLUMN SUB-HEADER - Zero wasted vertical space */}
      <div className="h-10 px-3 sm:px-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-xs select-none shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`px-2 py-0.5 text-[11px] font-black rounded tracking-wider uppercase shrink-0 ${themeColors.badge}`}>
            Sezione {columnId}
          </span>
          <div className="flex items-center gap-1.5 min-w-0 truncate">
            <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0 hidden sm:inline" />
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 shrink-0">
              Lez. {lessonMeta.number}:
            </span>
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 truncate hidden md:inline">
              {lessonMeta.title}
            </span>
          </div>
        </div>

        {/* Change Lesson Dropdown & Slider indicator */}
        <div className="flex items-center gap-2 shrink-0">
          <select
            id={`select-col-${columnId}`}
            value={lessonMeta.number}
            onChange={(e) => onSelectLesson(Number(e.target.value))}
            aria-label={`Cambia Lezione per Sezione ${columnId}`}
            className="text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded px-2 py-0.5 focus:ring-1 focus:ring-blue-500 cursor-pointer max-w-[130px] sm:max-w-[200px] truncate"
          >
            {BOOK_CHAPTERS.map((ch) => (
              <optgroup
                key={ch.id}
                label={ch.id === 0 ? 'INTRO' : `CAP. ${ch.romanId}: ${ch.shortTitle}`}
              >
                {ch.sections.map((sec) => (
                  <option key={sec.lessonNumber} value={sec.lessonNumber}>
                    {sec.code} {sec.shortTitle}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>

          {/* Quick Slider Percentage Pill */}
          <div
            title={`Slider Verticale ${columnId} - Avanzamento: ${scrollPercent}%`}
            className={`flex items-center gap-1 text-[11px] font-mono font-bold px-1.5 py-0.5 rounded border ${themeColors.badgeSecondary}`}
          >
            <SlidersVertical className="w-3 h-3" />
            <span>{scrollPercent}%</span>
          </div>
        </div>
      </div>

      {/* COLUMN CONTENT + DEDICATED INDEPENDENT VERTICAL SLIDER */}
      <div className="relative flex-1 flex flex-row overflow-hidden w-full">
        {/* MAIN INDEPENDENT SCROLL CONTAINER - Pure reading area with zero native scrollbar clutter */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          tabIndex={0}
          aria-label={`Contenuto Lezione ${lessonMeta.number} (Sezione ${columnId})`}
          className={`${containerHeightClass} flex-1 overflow-y-auto overscroll-contain px-4 sm:px-6 lg:px-8 py-5 space-y-6 focus:outline-none no-scrollbar`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div className="unified-lecture-view space-y-6">
            {renderContent()}
          </div>
        </div>

        {/* UNICO SLIDER VERTICALE DEDICATO PER QUESTA SEZIONE (NESSUNA SCROLLBAR DOPPIA) */}
        <aside
          aria-label={`Slider Verticale Unico Sezione ${columnId}`}
          className="w-8 sm:w-9 shrink-0 bg-slate-50/90 dark:bg-slate-950/80 border-l border-slate-200 dark:border-slate-800 py-1.5 flex flex-col items-center justify-between select-none z-10"
        >
          {/* Top Quick Actions */}
          <div className="flex flex-col items-center gap-0.5 w-full pb-1 border-b border-slate-200/60 dark:border-slate-800">
            <button
              onClick={() => scrollToPercent(0)}
              title={`Inizio Sezione ${columnId} (0%)`}
              aria-label={`Vai all'inizio della Sezione ${columnId}`}
              className={`p-1 rounded text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 ${themeColors.buttonHover} transition-colors cursor-pointer`}
            >
              <ArrowUpToLine className="w-3 h-3" />
            </button>
            <button
              onClick={() => stepScroll('up')}
              title="Scorri Su"
              aria-label="Scorri verso l'alto"
              className={`p-0.5 rounded text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 ${themeColors.buttonHover} transition-colors cursor-pointer`}
            >
              <ChevronUp className="w-3 h-3" />
            </button>
          </div>

          {/* Vertical Slider Track */}
          <div className="flex-1 w-full my-1 relative flex flex-col items-center justify-center">
            <div
              ref={trackRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              title={`Trascina o fai clic per scorrere la Sezione ${columnId} (${scrollPercent}%)`}
              className={`relative h-full w-2 sm:w-2.5 rounded-full cursor-pointer touch-none shadow-inner border border-slate-300/60 dark:border-slate-700/60 ${themeColors.sliderRail}`}
            >
              {/* Fill indicator showing scrolled percentage */}
              <div
                className={`absolute top-0 left-0 right-0 rounded-full transition-all duration-75 ${themeColors.sliderFill}`}
                style={{ height: `${scrollPercent}%` }}
              />

              {/* Draggable Slider Thumb */}
              <div
                className={`absolute -left-1 sm:-left-1.5 w-4 sm:w-5 h-4.5 rounded shadow-sm border ring-1 transition-transform duration-75 flex items-center justify-center cursor-grab active:cursor-grabbing ${themeColors.sliderThumb}`}
                style={{
                  top: `calc(${scrollPercent}% - 9px)`,
                }}
              >
                <div className="w-1.5 h-0.5 bg-white/90 rounded-full" />
              </div>
            </div>

            {/* Accessibility input */}
            <input
              type="range"
              min={0}
              max={100}
              value={scrollPercent}
              onChange={handleRangeChange}
              aria-label={`Slider verticale Sezione ${columnId}`}
              className="sr-only"
            />
          </div>

          {/* Bottom Quick Actions */}
          <div className="flex flex-col items-center gap-0.5 w-full pt-1 border-t border-slate-200/60 dark:border-slate-800">
            <button
              onClick={() => stepScroll('down')}
              title="Scorri Giù"
              aria-label="Scorri verso il basso"
              className={`p-0.5 rounded text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 ${themeColors.buttonHover} transition-colors cursor-pointer`}
            >
              <ChevronDown className="w-3 h-3" />
            </button>
            <button
              onClick={() => scrollToPercent(100)}
              title={`Fine Sezione ${columnId} (100%)`}
              aria-label={`Vai alla fine della Sezione ${columnId}`}
              className={`p-1 rounded text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 ${themeColors.buttonHover} transition-colors cursor-pointer`}
            >
              <ArrowDownToLine className="w-3 h-3" />
            </button>

            {/* Percent text */}
            <span
              className="text-[8px] font-mono font-bold text-slate-500 dark:text-slate-400 mt-0.5 select-none"
              title={`Sezione ${columnId}: ${scrollPercent}%`}
            >
              {scrollPercent}%
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
};
