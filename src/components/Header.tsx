/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * HEADER ACCADEMICO & BREADCRUMB GEOGRAFICA (FILO D'ARIANNA)
 * Mostra in modo chiaro e immediato la posizione dell'utente nel Libro a 8 Macro-Moduli:
 * 📘 Capitolo [X]: [Titolo Macro-Modulo] > Sezione [Y.Z]: [Titolo Lezione]
 * con badge cromatico dedicato per ciascuno degli 8 capitoli.
 */

import React from 'react';
import {
  BookMarked,
  Search,
  GraduationCap,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Maximize,
  Minimize,
  Printer,
  SlidersHorizontal,
  HelpCircle,
  Columns2,
  RotateCw,
  Headphones,
  BookOpen,
  Compass,
  FileText,
  Library,
  Loader2
} from 'lucide-react';
import { ALL_33_LESSONS } from '../data/courseSyllabus';
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
  isLandscape?: boolean;
  onToggleOrientation?: () => void;
  onPrintCurrentChapter?: () => void;
  onPrintFullBook?: () => void;
  isPrintingFullBook?: boolean;
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
  isLandscape,
  onToggleOrientation,
  onPrintCurrentChapter,
  onPrintFullBook,
  isPrintingFullBook = false
}) => {
  const { isPlaying, isPaused, play, pause, resume } = useTTS();
  const [isPrintMenuOpen, setIsPrintMenuOpen] = React.useState<boolean>(false);
  const printMenuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (printMenuRef.current && !printMenuRef.current.contains(e.target as Node)) {
        setIsPrintMenuOpen(false);
      }
    };
    if (isPrintMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPrintMenuOpen]);

  const { chapter, section } = getSectionByLessonNumber(currentLesson);
  const { prevLesson, nextLesson } = getSurroundingLessonsInBook(currentLesson);

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* 1. Barra Superiore dei Controlli & Strumenti */}
      <div className="w-full flex items-center justify-between gap-2 sm:gap-3 px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-1.5 sm:py-2 border-b border-slate-150 dark:border-slate-800/80">
        {/* Zone 1: Brand & Selettore Rapido a Libro */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 min-w-0">
          <a
            href="#top"
            className="text-xs sm:text-base font-black tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap flex items-center gap-1.5 sm:gap-2 shrink-0"
          >
            <BookMarked className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />
            <span className="hidden sm:inline">Manuale Immunologia</span>
            <span className="sm:hidden font-bold">Manuale</span>
          </a>

          {/* Selettore rapido Capitolo/Sezione raggruppato in 8 Macro-Moduli */}
          <div className="relative flex items-center">
            <select
              value={`${currentLesson}:${section?.anchorId || ''}`}
              onChange={(e) => {
                const [lessonStr, anchorId] = e.target.value.split(':');
                onSelectLesson(Number(lessonStr), anchorId || undefined);
              }}
              aria-label="Seleziona una sezione del libro"
              className="appearance-none bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs py-1 sm:py-1.5 pl-2 pr-6 rounded-lg border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer max-w-[125px] sm:max-w-[210px] truncate"
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

        {/* Zone 2: Fast Study Tools */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {/* Global Search Bar Trigger */}
          {onOpenHub && (
            <button
              onClick={() => onOpenHub('search')}
              title="Cerca nel Manuale (Ctrl+K)"
              aria-label="Cerca nel Manuale"
              className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 transition-all shadow-2xs cursor-pointer"
            >
              <Search className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </button>
          )}

          {/* Exam Quiz Simulator Trigger */}
          {onOpenQuiz && (
            <button
              onClick={onOpenQuiz}
              title="Simulatore Quiz d'Esame On-the-Go"
              aria-label="Simulatore Quiz d'Esame On-the-Go"
              className="p-2 sm:px-2.5 sm:py-1.5 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 rounded-lg transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="hidden sm:inline text-xs font-bold">Quiz Esame</span>
            </button>
          )}

          {/* Google Account & Drive Sync */}
          <GoogleAccountButton compact />

          {/* Reader Customization Settings */}
          {onOpenReaderSettings && (
            <button
              onClick={onOpenReaderSettings}
              title="Personalizza lettura (zoom, sfondo, font)"
              aria-label="Opzioni di visualizzazione e lettura"
              className="p-2 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/60 dark:hover:bg-amber-900/60 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-700 rounded-lg transition-all shadow-2xs cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            </button>
          )}

          {/* TTS Audio Player Bar Toggle */}
          <button
            onClick={() => {
              if (isPlaying && !isPaused) {
                pause();
              } else if (isPaused) {
                resume();
              } else {
                play();
              }
            }}
            title={
              isPlaying && !isPaused
                ? 'Pausa Sintesi Vocale'
                : isPaused
                ? 'Riprendi Sintesi Vocale'
                : 'Ascolta Sintesi Vocale'
            }
            aria-label="Lettore Vocale TTS"
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
              isPlaying && !isPaused
                ? 'bg-blue-600 text-white border-blue-600 shadow-xs ring-2 ring-blue-300'
                : isPaused
                ? 'bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border-amber-300'
                : 'bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 shadow-2xs'
            }`}
          >
            <Headphones
              className={`w-4 h-4 ${
                isPlaying && !isPaused ? 'animate-pulse text-white' : 'text-blue-600 dark:text-blue-400'
              }`}
            />
            <span className="hidden sm:inline">
              {isPlaying && !isPaused ? 'In Ascolto' : isPaused ? 'In Pausa' : 'Ascolta'}
            </span>
          </button>

          {/* Clean Print / PDF Export Menu (1-Click & Full Book) */}
          <div className="relative inline-block" ref={printMenuRef}>
            <button
              onClick={() => setIsPrintMenuOpen((prev) => !prev)}
              disabled={isPrintingFullBook}
              title="Stampa / Esporta in PDF (Capitolo o Libro Completo)"
              aria-label="Opzioni di Stampa ed Esportazione PDF"
              aria-expanded={isPrintMenuOpen}
              className={`p-2 rounded-lg border transition-all shadow-2xs cursor-pointer flex items-center gap-1 ${
                isPrintingFullBook
                  ? 'bg-blue-600 text-white border-blue-600 animate-pulse'
                  : isPrintMenuOpen
                  ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700'
                  : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700'
              }`}
            >
              {isPrintingFullBook ? (
                <Loader2 className="w-4 h-4 animate-spin text-white" />
              ) : (
                <Printer className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              )}
              <ChevronDown className={`w-3 h-3 text-slate-500 transition-transform ${isPrintMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Popover */}
            {isPrintMenuOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-72 sm:w-80 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Esportazione Stampa & PDF A4
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Layout accademico stile Abbas con simulatori srotolati
                  </p>
                </div>

                <div className="p-1 space-y-1">
                  {/* Opzione 1: Stampa Capitolo Corrente */}
                  <button
                    onClick={() => {
                      setIsPrintMenuOpen(false);
                      if (onPrintCurrentChapter) {
                        onPrintCurrentChapter();
                      } else {
                        window.print();
                      }
                    }}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors flex items-start gap-2.5 group cursor-pointer"
                  >
                    <div className="p-1.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0 mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        Stampa Capitolo Corrente
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                        Stampa solo la visualizzazione del capitolo attivo ({chapter.id === 0 ? 'Intro' : `Cap. ${chapter.romanId}`})
                      </div>
                    </div>
                  </button>

                  {/* Opzione 2: Stampa Libro Completo */}
                  <button
                    onClick={() => {
                      setIsPrintMenuOpen(false);
                      if (onPrintFullBook) {
                        onPrintFullBook();
                      }
                    }}
                    disabled={isPrintingFullBook}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors flex items-start gap-2.5 group cursor-pointer border border-transparent hover:border-blue-200 dark:hover:border-blue-900/40"
                  >
                    <div className="p-1.5 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-colors shrink-0 mt-0.5">
                      <Library className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 flex items-center gap-1.5">
                        <span>Stampa Libro Completo</span>
                        <span className="text-[9px] bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 font-mono px-1 py-0.5 rounded font-bold">
                          8 CAPITOLI
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                        Trattato completo unificato: Frontespizio accademico, Indice e tutti i 9 capitoli sequenziali in A4
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={onToggleFullscreen}
            title={isFullscreen ? 'Esci da schermo intero' : 'Schermo intero'}
            aria-label={isFullscreen ? 'Esci da schermo intero' : 'Attiva schermo intero'}
            className={`p-2 rounded-lg border transition-all cursor-pointer ${
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

          {/* Screen Rotation / Landscape Mode */}
          {onToggleOrientation && (
            <button
              onClick={onToggleOrientation}
              title={
                isLandscape
                  ? 'Schermo Orizzontale attivo: Clicca per tornare in Verticale'
                  : 'Ruota Schermo: Modalità orizzontale per Tablet e Mobile'
              }
              aria-label="Ruota schermo"
              className={`p-2 rounded-lg border transition-all cursor-pointer ${
                isLandscape
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs ring-2 ring-indigo-300/40'
                  : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 shadow-2xs'
              }`}
            >
              <RotateCw
                className={`w-4 h-4 transition-transform duration-300 ${
                  isLandscape ? 'text-white rotate-90' : 'text-indigo-600 dark:text-indigo-400'
                }`}
              />
            </button>
          )}

          {/* Side-by-side Comparative View Toggle */}
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

          {/* Merged Syllabus Modal Trigger */}
          {onOpenHub && (
            <button
              onClick={() => onOpenHub('syllabus')}
              title="Piano dell'Opera (8 Macro-Capitoli) & Glossario A-Z"
              aria-label="Piano dell'Opera e Glossario"
              className="p-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors shadow-xs cursor-pointer"
            >
              <GraduationCap className="w-4 h-4" />
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
