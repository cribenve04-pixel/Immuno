import React, { useState } from 'react';
import { Shield, Sparkles, AlertTriangle, CheckCircle2, RotateCcw, ArrowRight, Dna, Activity, Lock, Unlock, Zap, HeartHandshake, Pill, Syringe } from 'lucide-react';
import { SCID_CLASSIFICATION_DATA } from '../data/lezione11Content';

export const InteractiveScidMolecularSimulator: React.FC = () => {
  const [selectedScidIdx, setSelectedScidIdx] = useState<number>(0);
  const currentScid = SCID_CLASSIFICATION_DATA[selectedScidIdx];

  // Helper to determine presence of cell subsets
  const hasT = currentScid.immunophenotype.includes('T⁺');
  const hasB = currentScid.immunophenotype.includes('B⁺');
  const hasNK = currentScid.immunophenotype.includes('NK⁺');

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-rose-500/20 text-rose-400 border border-rose-500/30">
              Genetica Molecolare & Immunodeficienze
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Diagnosi Differenziale delle SCID
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white mt-1">
            Simulatore delle Immunodeficienze Severe Combinate (SCID)
          </h3>
        </div>

        <span className="text-xs font-mono text-slate-400">
          Malattie dei &quot;Bimbi-Bolla&quot; & Terapia Genica
        </span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: SCID Variant Selector (4 cols) */}
        <div className="lg:col-span-4 bg-slate-950/80 rounded-xl p-4 border border-slate-800 space-y-3">
          <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
            Seleziona Difetto Genico Causativo:
          </span>

          <div className="space-y-1.5 text-xs">
            {SCID_CLASSIFICATION_DATA.map((scid, idx) => (
              <button
                key={scid.type}
                onClick={() => setSelectedScidIdx(idx)}
                className={`w-full p-2.5 rounded-lg border text-left transition-all ${
                  selectedScidIdx === idx
                    ? 'bg-rose-950/50 border-rose-500 text-white shadow-xs'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold">{scid.type}</span>
                  <span className="text-[10px] font-mono font-black px-1.5 py-0.5 rounded bg-slate-800 text-rose-300">
                    {scid.immunophenotype}
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                  {scid.geneAndProtein} · {scid.inheritance}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Immunophenotype Panel & Molecular Mechanism (8 cols) */}
        <div className="lg:col-span-8 bg-slate-950/80 rounded-xl p-5 border border-slate-800 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <h4 className="font-bold text-white text-base">
                {currentScid.type}
              </h4>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Gene Mutato: <span className="text-rose-400 font-bold">{currentScid.geneAndProtein}</span> ({currentScid.inheritance})
              </p>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded-md font-black bg-rose-900/60 text-rose-200 border border-rose-700/60 self-start sm:self-auto">
              Fenotipo: {currentScid.immunophenotype}
            </span>
          </div>

          {/* Cytometric Lineage Bars */}
          <div className="space-y-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
              Pannello Citometrico Linfocitario nel Sangue Periferico:
            </span>

            <div className="space-y-2.5 text-xs">
              {/* T Cells */}
              <div className="space-y-1">
                <div className="flex justify-between font-mono">
                  <span className="text-slate-300 font-semibold">Linfociti T (CD3⁺):</span>
                  <span className={hasT ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                    {hasT ? 'Presenti (Normale)' : 'ASSENTI (Arresto Maturazione Timica)'}
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div className={`h-full transition-all duration-300 ${hasT ? 'w-full bg-emerald-500' : 'w-[2%] bg-rose-500'}`} />
                </div>
              </div>

              {/* B Cells */}
              <div className="space-y-1">
                <div className="flex justify-between font-mono">
                  <span className="text-slate-300 font-semibold">Linfociti B (CD19⁺):</span>
                  <span className={hasB ? 'text-blue-400 font-bold' : 'text-rose-400 font-bold'}>
                    {hasB ? 'Presenti (Ma anergici senza T helper)' : 'ASSENTI (Blocco Midollare VDJ)'}
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div className={`h-full transition-all duration-300 ${hasB ? 'w-full bg-blue-500' : 'w-[2%] bg-rose-500'}`} />
                </div>
              </div>

              {/* NK Cells */}
              <div className="space-y-1">
                <div className="flex justify-between font-mono">
                  <span className="text-slate-300 font-semibold">Cellule NK (CD16⁺ CD56⁺):</span>
                  <span className={hasNK ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                    {hasNK ? 'Presenti (Via IL-15 Funzionante)' : 'ASSENTI (Blocco Trasduzione IL-15)'}
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div className={`h-full transition-all duration-300 ${hasNK ? 'w-full bg-emerald-500' : 'w-[2%] bg-rose-500'}`} />
                </div>
              </div>
            </div>
          </div>

          {/* Molecular Mechanism */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="font-bold text-xs text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Fisiopatologia & Meccanismo Molecolare del Blocco:</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-serif-body">
              {currentScid.molecularMechanism}
            </p>
          </div>

          {/* Clinical Management & Therapy */}
          <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800 text-blue-200 space-y-2 text-xs">
            <div className="font-bold flex items-center gap-2 text-blue-300">
              <Syringe className="w-4 h-4 text-blue-400" />
              <span>Inquadramento Clinico & Terapia Salva-Vita:</span>
            </div>
            <p className="leading-relaxed opacity-90 font-serif-body">
              {currentScid.clinicalNotes} Senza intervento precoce, la malattia è letale nel primo anno di vita.
              Opzioni terapeutiche primarie: <strong>Trapianto Allogenico di Midollo Osseo (HSCT)</strong> da donatore HLA-compatibile,
              oppure <strong>Terapia Genica ex vivo</strong> con vettori virali (integrazione del gene corretto nelle cellule staminali autologhe del paziente).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
