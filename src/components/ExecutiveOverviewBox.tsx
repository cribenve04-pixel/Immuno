/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * EXECUTIVE OVERVIEW BOX: LA VISIONE D'INSIEME (DALL'UNIVERSALE AL PARTICOLARE)
 * Fornisce un quadro concettuale semplice, chiaro e orientato alla logica biologica
 * prima di addentrarsi nei dettagli recettoriali e biochimici specifici.
 */

import React, { useState } from 'react';
import { Compass, Lightbulb, HelpCircle, Dna, Stethoscope, ChevronDown, ChevronUp } from 'lucide-react';
import { ChapterPedagogy } from '../data/chapterPedagogyData';

interface ExecutiveOverviewBoxProps {
  pedagogy: ChapterPedagogy;
  compact?: boolean;
}

export const ExecutiveOverviewBox: React.FC<ExecutiveOverviewBoxProps> = ({
  pedagogy,
  compact = false
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const { executiveOverview, generalMission } = pedagogy;

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/20 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-indigo-950/30 rounded-xl border border-blue-200/80 dark:border-blue-900/50 shadow-xs overflow-hidden mb-6 not-prose transition-all">
      {/* Intestazione del Box */}
      <div className="flex items-center justify-between p-4 sm:p-5 border-b border-blue-200 dark:border-blue-900/50 bg-white dark:bg-slate-900">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs shrink-0">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              <span>Metodo d'Apprendimento</span>
              <span aria-hidden="true">·</span>
              <span>Visione d'Insieme</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Quadro Generale: Dalla Logica Biologica al Meccanismo Molecolare
            </h3>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 px-2.5 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-750 transition-colors border border-slate-200 dark:border-slate-700"
          aria-expanded={isOpen}
        >
          <span className="hidden sm:inline">{isOpen ? 'Comprimi sintesi' : 'Espandi sintesi'}</span>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Missione didattica in risalto */}
      <div className="px-4 py-3 sm:px-5 bg-blue-50/80 dark:bg-blue-950/60 border-b border-blue-200 dark:border-blue-900/50 text-xs sm:text-sm text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
        <strong className="text-blue-900 dark:text-blue-200">Obiettivo dell'Area:</strong> {generalMission}
      </div>

      {/* Contenuto esecutivo a 4 quadranti logici */}
      {isOpen && (
        <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Quadrante 1: Analogia & Quadro Mentale */}
          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wide mb-1.5 font-mono">
              <Lightbulb className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
              <span>1. Modello Concettuale Intuitivo</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
              {executiveOverview.simpleAnalogy}
            </p>
          </div>

          {/* Quadrante 2: La Domanda Biologica Guida */}
          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide mb-1.5 font-mono">
              <HelpCircle className="w-4 h-4 shrink-0 text-blue-600 dark:text-blue-400" />
              <span>2. Il Problema Fisiologico</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif-body italic">
              «{executiveOverview.keyBiologicalQuestion}»
            </p>
          </div>

          {/* Quadrante 3: Il Meccanismo Cardine */}
          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wide mb-1.5 font-mono">
              <Dna className="w-4 h-4 shrink-0 text-teal-600 dark:text-teal-400" />
              <span>3. Soluzione Molecolare Integrata</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
              {executiveOverview.coreMechanism}
            </p>
          </div>

          {/* Quadrante 4: Ricaduta Clinica & Esame Orale */}
          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold text-rose-700 dark:text-rose-300 uppercase tracking-wide mb-1.5 font-mono">
              <Stethoscope className="w-4 h-4 shrink-0 text-rose-600 dark:text-rose-400" />
              <span>4. Punto d'Attacco Clinico & d'Esame</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
              {executiveOverview.clinicalTakeaway}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
