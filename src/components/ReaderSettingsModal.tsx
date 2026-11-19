/**
 * ReaderSettingsModal.tsx
 * Modal per personalizzare l'esperienza di lettura:
 * - Zoom carattere / Dimensione testo
 * - Tema cromatico (Chiaro, Carta/Sepia, Crepuscolo, Notte OLED)
 * - Famiglia tipografica (Serif editoriale, Sans moderno, Monospazio)
 * - Interlinea e spaziatura
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
  Sun,
  Moon,
  BookOpen
} from 'lucide-react';

export type ReadingTheme = 'light' | 'sepia' | 'slate' | 'night';
export type ReadingFont = 'serif' | 'sans' | 'mono';
export type ReadingSpacing = 'compact' | 'normal' | 'relaxed';

interface ReaderSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Font Size / Zoom
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
  // Reset
  onResetDefaults: () => void;
}

export const ReaderSettingsModal: React.FC<ReaderSettingsModalProps> = ({
  isOpen,
  onClose,
  fontSizeLevel,
  onChangeFontSizeLevel,
  fontFamily,
  onChangeFontFamily,
  theme,
  onChangeTheme,
  spacing,
  onChangeSpacing,
  onResetDefaults
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reader-settings-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden text-slate-900 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-100 text-blue-700 rounded-xl">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h2 id="reader-settings-title" className="text-base font-bold text-slate-900 m-0">
                Personalizzazione & Lettura
              </h2>
              <p className="text-xs text-slate-500 m-0">
                Regola dimensione caratteri, palette colori e tipografia
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Chiudi impostazioni"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs font-sans">
          {/* Status Memoria di Visualizzazione */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-[11px]">Memoria di visualizzazione attiva</span>
            </div>
            <span className="text-[10px] text-emerald-700 font-medium">Lezione, font e tema salvati a ogni ricarica</span>
          </div>

          {/* Section 1: Zoom Carattere */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-800 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <Type className="w-4 h-4 text-blue-600" />
                Dimensione Testo & Zoom
              </span>
              <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
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
                className="w-full h-2 bg-slate-200 rounded-lg cursor-pointer accent-blue-600"
              />
              <span className="text-base text-slate-700 font-bold">A</span>
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
                  onClick={() => onChangeFontSizeLevel(preset.val)}
                  className={`py-1.5 px-2 rounded-lg text-[11px] font-semibold border transition-all cursor-pointer ${
                    fontSizeLevel === preset.val
                      ? 'bg-blue-600 text-white border-blue-700 shadow-2xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: Tema Colore */}
          <div className="space-y-3">
            <span className="font-bold text-slate-800 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <Palette className="w-4 h-4 text-purple-600" />
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

          {/* Section 3: Tipografia / Font Family */}
          <div className="space-y-3">
            <span className="font-bold text-slate-800 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-emerald-600" />
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
                  onClick={() => onChangeFontFamily(f.id)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    fontFamily === f.id
                      ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold shadow-2xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className={`text-base block mb-1 ${f.fontSample}`}>{f.sampleText}</span>
                  <span className="text-[11px] block">{f.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section 4: Interlinea & Spaziatura */}
          <div className="space-y-3">
            <span className="font-bold text-slate-800 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <AlignLeft className="w-4 h-4 text-indigo-600" />
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
                  onClick={() => onChangeSpacing(sp.id)}
                  className={`py-2 px-2.5 rounded-xl border text-center transition-all cursor-pointer text-xs font-semibold ${
                    spacing === sp.id
                      ? 'bg-indigo-50 border-indigo-500 text-indigo-900 font-bold shadow-2xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {sp.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
          <button
            onClick={onResetDefaults}
            className="text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Ripristina Predefiniti
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Applica & Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};
