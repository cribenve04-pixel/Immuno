/**
 * ReaderSettingsModal.tsx
 * Modal per personalizzare l'esperienza di lettura e accedere agli strumenti di schermo:
 * - Zoom Pagina (60% - 150%) stile Chrome per app Android / PWA standalone
 * - Dimensione testo / Carattere
 * - Tema cromatico (Chiaro, Carta/Sepia, Crepuscolo, Notte OLED)
 * - Famiglia tipografica (Serif editoriale, Sans moderno, Monospazio)
 * - Interlinea e spaziatura
 * - Strumenti rapidi: Ascolto Audio (TTS), Ruota Schermo, Schermo Intero, Stampa / PDF A4
 */

import React from 'react';
import {
  X,
  SlidersHorizontal,
  Check,
  Type,
  Palette,
  AlignLeft,
  RotateCcw,
  BookOpen,
  ZoomIn,
  ZoomOut,
  Headphones,
  Play,
  Pause,
  Square,
  RotateCw,
  Maximize,
  Minimize,
  Printer,
  FileText,
  Library,
  Loader2,
  Smartphone
} from 'lucide-react';
import { useTTS } from '../context/TTSContext';

export type ReadingTheme = 'light' | 'sepia' | 'slate' | 'night';
export type ReadingFont = 'serif' | 'sans' | 'mono';
export type ReadingSpacing = 'compact' | 'normal' | 'relaxed';

interface ReaderSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Page Zoom (Chrome-like zoom for Android PWA)
  pageZoom: number; // 60 - 150
  onChangePageZoom: (zoom: number) => void;
  // Font Size
  fontSizeLevel: number; // e.g. 90, 100, 110, 125, 140
  onChangeFontSizeLevel: (level: number) => void;
  // Font Family
  fontFamily: ReadingFont;
  onChangeFontFamily: (font: ReadingFont) => void;
  // Color Theme
  theme: ReadingTheme;
  onChangeTheme: (theme: ReadingTheme) => void;
  // Line Spacing
  spacing: ReadingSpacing;
  onChangeSpacing: (spacing: ReadingSpacing) => void;
  // Screen Orientation & Fullscreen
  isLandscape?: boolean;
  onToggleOrientation?: () => void;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
  // Print Actions
  currentChapterLabel?: string;
  onPrintCurrentChapter?: () => void;
  onPrintFullBook?: () => void;
  isPrintingFullBook?: boolean;
  // Reset
  onResetDefaults: () => void;
}

export const ReaderSettingsModal: React.FC<ReaderSettingsModalProps> = ({
  isOpen,
  onClose,
  pageZoom,
  onChangePageZoom,
  fontSizeLevel,
  onChangeFontSizeLevel,
  fontFamily,
  onChangeFontFamily,
  theme,
  onChangeTheme,
  spacing,
  onChangeSpacing,
  isLandscape = false,
  onToggleOrientation,
  isFullscreen = false,
  onToggleFullscreen,
  currentChapterLabel,
  onPrintCurrentChapter,
  onPrintFullBook,
  isPrintingFullBook = false,
  onResetDefaults
}) => {
  const { isPlaying, isPaused, play, pause, resume, stop } = useTTS();

  if (!isOpen) return null;

  const clampZoom = (val: number) => Math.min(150, Math.max(60, Math.round(val / 5) * 5));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reader-settings-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 rounded-xl">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h2 id="reader-settings-title" className="text-base font-bold text-slate-900 dark:text-slate-100 m-0">
                Regolazione Schermo & Strumenti
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 m-0">
                Zoom pagina, lettura, audio vocale, rotazione e stampa
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Chiudi impostazioni"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 overflow-y-auto space-y-6 text-xs font-sans">
          {/* Section 0: Strumenti Rapidi (Audio TTS, Rotazione, Schermo Intero, Stampa) */}
          <div className="space-y-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
            <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <Smartphone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Azioni Rapide & Strumenti
            </span>

            {/* Row 1: Ascolto Audio (TTS) */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  if (isPlaying && !isPaused) {
                    pause();
                  } else if (isPaused) {
                    resume();
                    onClose();
                  } else {
                    play();
                    onClose();
                  }
                }}
                className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  isPlaying && !isPaused
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : isPaused
                    ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border-amber-300 dark:border-amber-700'
                    : 'bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                }`}
              >
                <Headphones className={`w-4 h-4 shrink-0 ${isPlaying && !isPaused ? 'animate-pulse' : ''}`} />
                {isPlaying && !isPaused ? (
                  <>
                    <Pause className="w-3.5 h-3.5 shrink-0" />
                    <span>In Ascolto · Metti in Pausa</span>
                  </>
                ) : isPaused ? (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current shrink-0" />
                    <span>Riprendi Ascolto Audio</span>
                  </>
                ) : (
                  <span>Ascolta Audio Capitolo (TTS)</span>
                )}
              </button>

              {(isPlaying || isPaused) && (
                <button
                  type="button"
                  onClick={() => stop()}
                  title="Ferma lettura vocale"
                  aria-label="Ferma lettura vocale"
                  className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 hover:bg-rose-100 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 transition-colors cursor-pointer"
                >
                  <Square className="w-4 h-4 fill-current" />
                </button>
              )}
            </div>

            {/* Row 2: Rotazione Schermo & Schermo Intero */}
            <div className="grid grid-cols-2 gap-2">
              {onToggleOrientation && (
                <button
                  type="button"
                  onClick={() => {
                    onToggleOrientation();
                    onClose();
                  }}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isLandscape
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <RotateCw
                    className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                      isLandscape ? 'rotate-90 text-white' : 'text-indigo-600 dark:text-indigo-400'
                    }`}
                  />
                  <span>{isLandscape ? 'Torna Verticale' : 'Ruota Schermo'}</span>
                </button>
              )}

              {onToggleFullscreen && (
                <button
                  type="button"
                  onClick={() => {
                    onToggleFullscreen();
                    onClose();
                  }}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isFullscreen
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {isFullscreen ? (
                    <>
                      <Minimize className="w-4 h-4 shrink-0" />
                      <span>Esci Full Screen</span>
                    </>
                  ) : (
                    <>
                      <Maximize className="w-4 h-4 shrink-0 text-blue-600 dark:text-blue-400" />
                      <span>Schermo Intero</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Row 3: Stampa / Esportazione PDF A4 */}
            <div className="pt-1 border-t border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-600 dark:text-slate-400">
                <Printer className="w-3.5 h-3.5" />
                <span>Stampa & Esporta PDF A4</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  disabled={isPrintingFullBook}
                  onClick={() => {
                    onClose();
                    setTimeout(() => {
                      if (onPrintCurrentChapter) {
                        onPrintCurrentChapter();
                      } else {
                        window.print();
                      }
                    }, 120);
                  }}
                  className="py-2 px-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer disabled:opacity-50"
                >
                  <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="truncate">
                    Stampa {currentChapterLabel || 'Capitolo'}
                  </span>
                </button>

                <button
                  type="button"
                  disabled={isPrintingFullBook}
                  onClick={() => {
                    onClose();
                    if (onPrintFullBook) {
                      onPrintFullBook();
                    }
                  }}
                  className="py-2 px-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-amber-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isPrintingFullBook ? (
                    <Loader2 className="w-4 h-4 animate-spin text-amber-600 shrink-0" />
                  ) : (
                    <Library className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  )}
                  <span className="truncate">Stampa Libro Completo</span>
                </button>
              </div>
            </div>
          </div>

          {/* Section 1: Zoom Pagina (stile Chrome per App Android / PWA) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                  <ZoomIn className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  Zoom Pagina (App / Schermo)
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Riduce o ingrandisce tutta la pagina (tabelle, schemi e testo) come lo zoom di Chrome
                </p>
              </div>
              <span className="font-mono font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-200 dark:border-cyan-800 shrink-0">
                {pageZoom}%
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => onChangePageZoom(clampZoom(pageZoom - 5))}
                disabled={pageZoom <= 60}
                aria-label="Riduci zoom pagina"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 disabled:opacity-40 transition-colors cursor-pointer"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <input
                type="range"
                min={60}
                max={150}
                step={5}
                value={pageZoom}
                onChange={(e) => onChangePageZoom(Number(e.target.value))}
                aria-label="Percentuale zoom pagina"
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer accent-cyan-600"
              />

              <button
                type="button"
                onClick={() => onChangePageZoom(clampZoom(pageZoom + 5))}
                disabled={pageZoom >= 150}
                aria-label="Aumenta zoom pagina"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 disabled:opacity-40 transition-colors cursor-pointer"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-5 gap-1.5 pt-0.5">
              {[70, 85, 100, 115, 130].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => onChangePageZoom(val)}
                  className={`py-1.5 px-1.5 rounded-lg text-[11px] font-mono font-bold border transition-all cursor-pointer ${
                    pageZoom === val
                      ? 'bg-cyan-600 text-white border-cyan-700 shadow-2xs'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
                  }`}
                >
                  {val}%
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: Dimensione Testo */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <Type className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Dimensione Carattere
              </span>
              <span className="font-mono font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800">
                {fontSizeLevel}%
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] text-slate-500 font-bold">A</span>
              <input
                type="range"
                min={85}
                max={140}
                step={5}
                value={fontSizeLevel}
                onChange={(e) => onChangeFontSizeLevel(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer accent-blue-600"
              />
              <span className="text-base text-slate-700 dark:text-slate-300 font-bold">A</span>
            </div>

            <div className="grid grid-cols-4 gap-1.5 pt-1">
              {[
                { label: 'Compatto', val: 90 },
                { label: 'Normale', val: 100 },
                { label: 'Grande', val: 115 },
                { label: 'Extra', val: 130 }
              ].map((preset) => (
                <button
                  key={preset.val}
                  type="button"
                  onClick={() => onChangeFontSizeLevel(preset.val)}
                  className={`py-1.5 px-2 rounded-lg text-[11px] font-semibold border transition-all cursor-pointer ${
                    fontSizeLevel === preset.val
                      ? 'bg-blue-600 text-white border-blue-700 shadow-2xs'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: Tema Colore */}
          <div className="space-y-3">
            <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <Palette className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              Palette & Colore di Lettura
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                {
                  id: 'light' as ReadingTheme,
                  label: 'Chiaro',
                  desc: 'Classico',
                  preview: 'bg-white text-slate-900 border-slate-300'
                },
                {
                  id: 'sepia' as ReadingTheme,
                  label: 'Carta Sepia',
                  desc: 'Riposo occhi',
                  preview: 'bg-[#fbf7ee] text-[#2c2416] border-[#dfd6c3]'
                },
                {
                  id: 'slate' as ReadingTheme,
                  label: 'Crepuscolo',
                  desc: 'Ardesia',
                  preview: 'bg-slate-800 text-slate-100 border-slate-700'
                },
                {
                  id: 'night' as ReadingTheme,
                  label: 'Notte OLED',
                  desc: 'Nero totale',
                  preview: 'bg-neutral-950 text-neutral-100 border-neutral-800'
                }
              ].map((thm) => (
                <button
                  key={thm.id}
                  type="button"
                  onClick={() => onChangeTheme(thm.id)}
                  className={`p-3 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between h-20 ${
                    thm.preview
                  } ${
                    theme === thm.id
                      ? 'ring-2 ring-blue-500 border-blue-500 shadow-xs'
                      : 'hover:opacity-90'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-bold text-xs">{thm.label}</span>
                    {theme === thm.id && <Check className="w-3.5 h-3.5 text-blue-500" />}
                  </div>
                  <span className="text-[10px] opacity-75">{thm.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section 4: Tipografia / Font Family */}
          <div className="space-y-3">
            <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Carattere Tipografico
            </span>

            <div className="grid grid-cols-3 gap-2">
              {[
                {
                  id: 'serif' as ReadingFont,
                  label: 'Serif Editoriale',
                  fontSample: 'font-serif',
                  sampleText: 'Aa (Manuale)'
                },
                {
                  id: 'sans' as ReadingFont,
                  label: 'Sans Moderno',
                  fontSample: 'font-sans',
                  sampleText: 'Aa (Pulito)'
                },
                {
                  id: 'mono' as ReadingFont,
                  label: 'Monospazio',
                  fontSample: 'font-mono',
                  sampleText: 'Aa (Codice)'
                }
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => onChangeFontFamily(f.id)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    fontFamily === f.id
                      ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-500 text-blue-900 dark:text-blue-200 font-bold shadow-2xs'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <span className={`text-base block mb-1 ${f.fontSample}`}>{f.sampleText}</span>
                  <span className="text-[11px] block">{f.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section 5: Interlinea & Spaziatura */}
          <div className="space-y-3">
            <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <AlignLeft className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              Interlinea & Spaziatura
            </span>

            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'compact' as ReadingSpacing, label: 'Compatta (1.4)' },
                { id: 'normal' as ReadingSpacing, label: 'Standard (1.6)' },
                { id: 'relaxed' as ReadingSpacing, label: 'Ampia (1.9)' }
              ].map((sp) => (
                <button
                  key={sp.id}
                  type="button"
                  onClick={() => onChangeSpacing(sp.id)}
                  className={`py-2 px-2.5 rounded-xl border text-center transition-all cursor-pointer text-xs font-semibold ${
                    spacing === sp.id
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-500 text-indigo-900 dark:text-indigo-200 font-bold shadow-2xs'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {sp.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status Memoria di Visualizzazione */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="font-bold text-[11px]">Memoria automatica attiva</span>
            </div>
            <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-medium text-right">
              Zoom, font, tema e posizione salvati
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between text-xs shrink-0">
          <button
            type="button"
            onClick={onResetDefaults}
            className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Ripristina Predefiniti
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};
