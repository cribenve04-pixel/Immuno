/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CONCEPT BRIDGE BOX: SINTESI DI RACCORDO TRA CAPITOLI E SEZIONI
 * Crea la continuità logica della materia spiegando la transizione causale
 * e biologica da un capitolo a quello successivo.
 */

import React from 'react';
import { ArrowRight, Link2, Sparkles, ArrowLeft, ArrowUpRight } from 'lucide-react';

interface ConceptBridgeBoxProps {
  mode: 'in' | 'out';
  text: string;
  targetChapterTitle?: string;
  targetRomanId?: string;
  onNavigate?: () => void;
}

export const ConceptBridgeBox: React.FC<ConceptBridgeBoxProps> = ({
  mode,
  text,
  targetChapterTitle,
  targetRomanId,
  onNavigate
}) => {
  if (mode === 'in') {
    return (
      <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-6 not-prose">
        <div className="w-6 h-6 rounded-md bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0 mt-0.5">
          <Link2 className="w-3.5 h-3.5" />
        </div>
        <div className="flex-1">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-0.5">
            Ponte Concettuale di Raccordo · Da dove arriviamo
          </div>
          <p className="leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    );
  }

  // mode === 'out' (Chiusura & Transizione)
  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white shadow-md my-8 not-prose">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1.5 flex-1">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-300 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Ponte Logico Verso il Capitolo Successivo</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {text}
          </p>
          {targetChapterTitle && (
            <div className="text-xs text-blue-200/90 font-medium">
              Prossima Tappa: <strong className="text-white">Capitolo {targetRomanId} · {targetChapterTitle}</strong>
            </div>
          )}
        </div>

        {onNavigate && (
          <button
            type="button"
            onClick={onNavigate}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold text-xs shadow-sm transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Passa al Capitolo {targetRomanId || 'Succ.'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
