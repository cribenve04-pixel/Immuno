import React, { useState } from 'react';
import { TH_POLARIZATIONS } from '../data/chapterContent';
import { Dna, Shield, AlertTriangle, Sparkles } from 'lucide-react';

export const InteractivePolarizationCompass: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('Th1');

  const currentTh = TH_POLARIZATIONS.find((th) => th.type === selectedType) || TH_POLARIZATIONS[0];

  const colors: Record<string, { bg: string; text: string; border: string; badge: string }> = {
    Th1: { bg: 'bg-red-50', text: 'text-red-900', border: 'border-red-200', badge: 'bg-red-600' },
    Th2: { bg: 'bg-amber-50', text: 'text-amber-900', border: 'border-amber-200', badge: 'bg-amber-600' },
    Th17: { bg: 'bg-orange-50', text: 'text-orange-900', border: 'border-orange-200', badge: 'bg-orange-600' },
    'Tfh (Follicolari)': { bg: 'bg-purple-50', text: 'text-purple-900', border: 'border-purple-200', badge: 'bg-purple-600' },
    'Treg (Regolatori)': { bg: 'bg-emerald-50', text: 'text-emerald-900', border: 'border-emerald-200', badge: 'bg-emerald-600' }
  };

  const currentStyle = colors[selectedType] || colors['Th1'];

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden my-8 shadow-xs">
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold">Differenziamento Linfocitario</span>
          <h3 className="text-lg font-bold text-slate-900 mt-0.5">Bussola della Polarizzazione dei Linfociti T Helper (CD4+)</h3>
          <p className="text-xs text-slate-500 mt-1">
            Mappatura dei fattori di trascrizione lignaggio-specifici (*lineage-defining TF*), citochine induttrici ed effettrici.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/80 rounded-lg">
          {TH_POLARIZATIONS.map((th) => (
            <button
              key={th.type}
              onClick={() => setSelectedType(th.type)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                selectedType === th.type
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {th.type}
            </button>
          ))}
        </div>
      </div>

      {/* Main Selected Details Card */}
      <div className="p-6">
        <div className={`p-5 rounded-xl border ${currentStyle.border} ${currentStyle.bg} transition-colors`}>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/5 pb-4">
            <div className="flex items-center gap-3">
              <span className={`w-8 h-8 rounded-full ${currentStyle.badge} text-white flex items-center justify-center font-bold text-sm shadow-xs`}>
                {currentTh.type.slice(0, 3)}
              </span>
              <div>
                <h4 className="text-base font-bold text-slate-900">{currentTh.type} - Sottopopolazione CD4+</h4>
                <span className="text-xs text-slate-500">Profilo trascrizionale ed effettore specifico</span>
              </div>
            </div>

            {/* Master TF Pill */}
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
              <Dna className="w-4 h-4 text-blue-600" />
              <div className="text-xs">
                <span className="text-slate-500 mr-1.5">Master TF:</span>
                <span className="font-mono font-bold text-slate-900">{currentTh.masterTF}</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-800 leading-relaxed font-serif-body">
            {currentTh.description}
          </p>

          {/* 4-Box Molecular Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <span className="text-[11px] font-mono uppercase text-slate-500 block mb-1">Citochine Induttrici</span>
              <span className="text-xs font-mono font-semibold text-slate-800">{currentTh.inducing}</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <span className="text-[11px] font-mono uppercase text-slate-500 block mb-1">Citochine Secrete</span>
              <span className="text-xs font-mono font-semibold text-blue-700">{currentTh.effectorCytokines}</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <span className="text-[11px] font-mono uppercase text-slate-500 block mb-1 flex items-center gap-1">
                <Shield className="w-3 h-3 text-emerald-600" />
                Bersaglio Fisiologico
              </span>
              <span className="text-xs text-slate-800">{currentTh.targets}</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <span className="text-[11px] font-mono uppercase text-slate-500 block mb-1 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 text-rose-500" />
                Patologia Correlata
              </span>
              <span className="text-xs text-rose-900 font-medium">{currentTh.pathology}</span>
            </div>
          </div>
        </div>

        {/* Quick Cross-Comparison Strip */}
        <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-mono">
          <span>T-bet (Th1) · GATA-3 (Th2) · RORγt (Th17) · Bcl-6 (Tfh) · FoxP3 (Treg)</span>
          <span className="text-slate-400">Antagonismo reciproco trascrizionale (Cross-Inhibition)</span>
        </div>
      </div>
    </div>
  );
};
