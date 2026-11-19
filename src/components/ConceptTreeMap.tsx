/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CONCEPT TREE MAP: MAPPA AD ALBERO DEL CAPITOLO (GERARCHIA VISIVA)
 * Visualizza graficamente l'articolazione gerarchica dei temi da generale a specifico:
 * Capitolo -> Sezioni Tematiche -> Sotto-argomenti e Cascate Molecolari.
 */

import React, { useState } from 'react';
import { GitFork, ChevronDown, ChevronRight, Layers, ExternalLink, CornerDownRight } from 'lucide-react';
import { ChapterPedagogy, TreeNode } from '../data/chapterPedagogyData';

interface ConceptTreeMapProps {
  pedagogy: ChapterPedagogy;
  currentLessonNumber: number;
  onNavigateToSection?: (lessonNumber: number, sectionId?: string) => void;
}

export const ConceptTreeMap: React.FC<ConceptTreeMapProps> = ({
  pedagogy,
  currentLessonNumber,
  onNavigateToSection
}) => {
  const [isTreeExpanded, setIsTreeExpanded] = useState(false);
  const { treeStructure, chapterId, romanId } = pedagogy;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden mb-6 not-prose transition-all">
      {/* Intestazione Barra della Mappa ad Albero */}
      <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-indigo-600 text-white flex items-center justify-center text-xs shadow-xs">
            <GitFork className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
              <span>Struttura Concettuale</span>
              <span aria-hidden="true">·</span>
              <span>Albero delle Relazioni</span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
              Mappa ad Albero del Capitolo {romanId}: Ramificazione dei Temi
            </h4>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsTreeExpanded(!isTreeExpanded)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750 transition-colors shadow-2xs"
          aria-expanded={isTreeExpanded}
        >
          <span>{isTreeExpanded ? 'Nascondi albero' : 'Esplora albero'}</span>
          {isTreeExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Albero Concettuale Interattivo Espanso */}
      {isTreeExpanded && (
        <div className="p-4 sm:p-6 bg-slate-50/50 dark:bg-slate-950/40">
          <div className="space-y-4">
            {treeStructure.map((branch) => {
              const hasActiveChild = branch.sublabel?.includes(`Lezione ${currentLessonNumber}`);
              
              return (
                <div
                  key={branch.id}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all ${
                    hasActiveChild
                      ? 'bg-blue-50/70 dark:bg-blue-950/40 border-blue-300 dark:border-blue-800 ring-1 ring-blue-400/30'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {/* Ramo Principale: Sezione */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${hasActiveChild ? 'bg-blue-600' : 'bg-slate-400'}`} />
                      <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                        {branch.label}
                      </span>
                    </div>
                    {branch.sublabel && (
                      <span className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-300">
                        {branch.sublabel}
                        {hasActiveChild && (
                          <span className="ml-2 font-bold text-blue-700 dark:text-blue-300">(In lettura)</span>
                        )}
                      </span>
                    )}
                  </div>

                  {/* Sotto-rami: Paragrafi e argomenti specifici */}
                  {branch.children && branch.children.length > 0 && (
                    <ul className="mt-3 pl-2 sm:pl-4 space-y-2 border-l-2 border-slate-300 dark:border-slate-700">
                      {branch.children.map((child, idx) => (
                        <li key={child.id} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                          <CornerDownRight className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 mt-0.5 shrink-0" />
                          <span className="leading-snug">
                            <strong className="text-slate-950 dark:text-white font-bold mr-1.5">
                              § {idx + 1}.
                            </strong>
                            {child.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300 font-medium flex items-center justify-between">
            <span>Ogni ramo dell'albero rappresenta un livello di specificazione del principio biologico cardine.</span>
            <span className="font-mono text-indigo-600 dark:text-indigo-400 font-medium">Gerarchia H1 → H4</span>
          </div>
        </div>
      )}
    </div>
  );
};
