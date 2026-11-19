import React, { useState } from 'react';
import { CYTOKINE_PROPERTIES_DATA } from '../data/lezione2Content';
import { GitMerge, Split, PlusCircle, Ban } from 'lucide-react';

export const InteractiveCytokineMatrix: React.FC = () => {
  const [activeProperty, setActiveProperty] = useState<'Pleiotropia' | 'Ridondanza' | 'Sinergia' | 'Antagonismo'>('Pleiotropia');

  const currentData = CYTOKINE_PROPERTIES_DATA.find((p) => p.type === activeProperty) || CYTOKINE_PROPERTIES_DATA[0];

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden my-8 shadow-xs">
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-purple-700 font-semibold">
            Modelli di Interazione Intercellulare
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-0.5">
            Le 4 Proprietà Cardinali delle Citochine
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Pleiotropia, Ridondanza, Sinergia e Antagonismo: la grammatica molecolare della comunicazione immunitaria.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/80 rounded-lg">
          {(['Pleiotropia', 'Ridondanza', 'Sinergia', 'Antagonismo'] as const).map((prop) => (
            <button
              key={prop}
              onClick={() => setActiveProperty(prop)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeProperty === prop
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {prop}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Diagram & Explanation Card */}
      <div className="p-6">
        <div className="p-5 rounded-xl border border-purple-200 bg-purple-50/40">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-200/60 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                {activeProperty === 'Pleiotropia' && <Split className="w-4 h-4" />}
                {activeProperty === 'Ridondanza' && <GitMerge className="w-4 h-4" />}
                {activeProperty === 'Sinergia' && <PlusCircle className="w-4 h-4" />}
                {activeProperty === 'Antagonismo' && <Ban className="w-4 h-4" />}
              </span>
              <div>
                <h4 className="text-base font-bold text-slate-900">{currentData.type}</h4>
                <span className="text-xs text-slate-500 font-mono">Citochine coinvolte: {currentData.cytokines}</span>
              </div>
            </div>

            <div className="text-xs font-mono bg-white px-3 py-1 rounded-md border border-slate-200 text-purple-900 font-semibold">
              Effetto: {currentData.effect}
            </div>
          </div>

          {/* SVG Conceptual Diagram */}
          <div className="my-5 p-4 bg-white rounded-lg border border-slate-200 overflow-x-auto">
            <svg viewBox="0 0 600 160" className="w-full h-auto min-w-[500px]">
              {activeProperty === 'Pleiotropia' && (
                /* 1 cytokine -> 3 different target cells */
                <g>
                  {/* Origin Cell / Cytokine IL-4 */}
                  <circle cx="90" cy="80" r="28" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" />
                  <text x="90" y="78" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Linfocita TH</text>
                  <text x="90" y="90" fill="#dbeafe" fontSize="8" textAnchor="middle">Secrezione IL-4</text>

                  {/* Radiating arrows */}
                  <line x1="125" y1="65" x2="310" y2="35" stroke="#9333ea" strokeWidth="2" markerEnd="url(#purpleArrow)" />
                  <line x1="125" y1="80" x2="310" y2="80" stroke="#9333ea" strokeWidth="2" markerEnd="url(#purpleArrow)" />
                  <line x1="125" y1="95" x2="310" y2="125" stroke="#9333ea" strokeWidth="2" markerEnd="url(#purpleArrow)" />

                  {/* Target 1: B Cell */}
                  <g transform="translate(350, 35)">
                    <rect x="-35" y="-18" width="70" height="36" rx="6" fill="#eff6ff" stroke="#3b82f6" />
                    <text x="0" y="-3" fill="#1e3a8a" fontSize="8" fontWeight="bold" textAnchor="middle">Linfocita B</text>
                    <text x="0" y="9" fill="#1e40af" fontSize="7" textAnchor="middle">Attivazione & IgE</text>
                  </g>

                  {/* Target 2: Thymocyte */}
                  <g transform="translate(350, 80)">
                    <rect x="-35" y="-18" width="70" height="36" rx="6" fill="#fdf2f8" stroke="#ec4899" />
                    <text x="0" y="-3" fill="#831843" fontSize="8" fontWeight="bold" textAnchor="middle">Timocita</text>
                    <text x="0" y="9" fill="#9d174d" fontSize="7" textAnchor="middle">Maturazione T</text>
                  </g>

                  {/* Target 3: Mast Cell */}
                  <g transform="translate(350, 125)">
                    <rect x="-35" y="-18" width="70" height="36" rx="6" fill="#fefce8" stroke="#eab308" />
                    <text x="0" y="-3" fill="#713f12" fontSize="8" fontWeight="bold" textAnchor="middle">Mastocita</text>
                    <text x="0" y="9" fill="#854d0e" fontSize="7" textAnchor="middle">Crescita & Degranulazione</text>
                  </g>
                </g>
              )}

              {activeProperty === 'Ridondanza' && (
                /* 3 cytokines -> 1 target cell with identical effect */
                <g>
                  {/* Origin Cytokines: IL-2, IL-4, IL-5 */}
                  <g transform="translate(80, 30)">
                    <ellipse cx="0" cy="0" rx="35" ry="14" fill="#3b82f6" />
                    <text x="0" y="3" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">IL-2</text>
                  </g>
                  <g transform="translate(80, 80)">
                    <ellipse cx="0" cy="0" rx="35" ry="14" fill="#8b5cf6" />
                    <text x="0" y="3" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">IL-4</text>
                  </g>
                  <g transform="translate(80, 130)">
                    <ellipse cx="0" cy="0" rx="35" ry="14" fill="#ec4899" />
                    <text x="0" y="3" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">IL-5</text>
                  </g>

                  {/* Converging arrows */}
                  <line x1="120" y1="35" x2="330" y2="70" stroke="#6b7280" strokeWidth="2" strokeDasharray="3 2" />
                  <line x1="120" y1="80" x2="330" y2="80" stroke="#6b7280" strokeWidth="2" strokeDasharray="3 2" />
                  <line x1="120" y1="125" x2="330" y2="90" stroke="#6b7280" strokeWidth="2" strokeDasharray="3 2" />

                  {/* Single Target Cell: Linfocita B */}
                  <g transform="translate(420, 80)">
                    <circle cx="0" cy="0" r="42" fill="#eff6ff" stroke="#2563eb" strokeWidth="2.5" />
                    <text x="0" y="-8" fill="#1e40af" fontSize="10" fontWeight="bold" textAnchor="middle">Linfocita B</text>
                    <text x="0" y="8" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle">PROLIFERAZIONE</text>
                    <text x="0" y="20" fill="#64748b" fontSize="7" textAnchor="middle">(Effetto condiviso identico)</text>
                  </g>
                </g>
              )}

              {activeProperty === 'Sinergia' && (
                /* IL-4 + IL-5 cooperatively induce IgE switch */
                <g>
                  <g transform="translate(100, 50)">
                    <ellipse cx="0" cy="0" rx="40" ry="16" fill="#8b5cf6" />
                    <text x="0" y="4" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">IL-4 (STAT6)</text>
                  </g>
                  <text x="100" y="85" fill="#9333ea" fontSize="16" fontWeight="bold" textAnchor="middle">+</text>
                  <g transform="translate(100, 115)">
                    <ellipse cx="0" cy="0" rx="40" ry="16" fill="#ec4899" />
                    <text x="0" y="4" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">IL-5</text>
                  </g>

                  {/* Combined arrow */}
                  <path d="M 150 80 L 330 80" stroke="#9333ea" strokeWidth="3" />
                  <polygon points="330,75 342,80 330,85" fill="#9333ea" />

                  {/* Target Cell */}
                  <g transform="translate(430, 80)">
                    <rect x="-65" y="-35" width="130" height="70" rx="8" fill="#faf5ff" stroke="#a855f7" strokeWidth="2" />
                    <text x="0" y="-12" fill="#581c87" fontSize="10" fontWeight="bold" textAnchor="middle">Linfocita B</text>
                    <text x="0" y="5" fill="#c026d3" fontSize="10" fontWeight="bold" textAnchor="middle">Switch Isotipico a IgE</text>
                    <text x="0" y="20" fill="#6b7280" fontSize="8" textAnchor="middle">Potenziamento cooperativo</text>
                  </g>
                </g>
              )}

              {activeProperty === 'Antagonismo' && (
                /* IFN-gamma blocks IL-4 induced IgE switch */
                <g>
                  <g transform="translate(100, 45)">
                    <ellipse cx="0" cy="0" rx="45" ry="15" fill="#8b5cf6" />
                    <text x="0" y="3" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">IL-4 (Attiva IgE)</text>
                  </g>

                  <g transform="translate(100, 115)">
                    <ellipse cx="0" cy="0" rx="45" ry="15" fill="#ef4444" />
                    <text x="0" y="3" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">IFN-γ (Blocco)</text>
                  </g>

                  {/* Arrow from IL-4 */}
                  <line x1="150" y1="45" x2="330" y2="45" stroke="#8b5cf6" strokeWidth="2" />

                  {/* Inhibitory cross bar from IFN-gamma */}
                  <path d="M 150 115 L 280 115 L 280 45" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="3 2" />
                  <line x1="265" y1="45" x2="295" y2="45" stroke="#ef4444" strokeWidth="4" />
                  <text x="280" y="32" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">BLOCCO</text>

                  {/* Target Cell */}
                  <g transform="translate(430, 80)">
                    <rect x="-65" y="-35" width="130" height="70" rx="8" fill="#fef2f2" stroke="#f87171" strokeWidth="1.5" />
                    <text x="0" y="-10" fill="#991b1b" fontSize="10" fontWeight="bold" textAnchor="middle">Linfocita B</text>
                    <text x="0" y="8" fill="#dc2626" fontSize="9" fontWeight="bold" textAnchor="middle">Inibizione Switch IgE</text>
                    <text x="0" y="22" fill="#7f1d1d" fontSize="7" textAnchor="middle">Deviazione a IgG protettive</text>
                  </g>
                </g>
              )}
            </svg>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed font-serif-body">
            <strong>Meccanismo Molecolare:</strong> {currentData.molecularMechanism}
          </p>
        </div>
      </div>
    </div>
  );
};
