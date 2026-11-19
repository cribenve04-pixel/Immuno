import React, { useState } from 'react';
import { Activity, Play, RotateCcw, AlertTriangle, ShieldCheck, ArrowRight, Zap, CheckCircle2, ChevronRight, Droplets } from 'lucide-react';

type LadMode = 'wt' | 'lad1' | 'lad2';

export const InteractiveExtravasationCascade: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [ladCondition, setLadCondition] = useState<LadMode>('wt');

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  // Speed and state calculation
  const getVelocity = () => {
    if (ladCondition === 'lad2') return '2500 μm/s (Flusso rapido invariato)';
    if (currentStep === 0) return '40 μm/s (Rotolamento transiente / Rolling)';
    if (currentStep === 1) {
      if (ladCondition === 'lad1') return '50 μm/s (Mancata attivazione integrine β2)';
      return '20 μm/s (Rallentamento integrinico inside-out)';
    }
    if (currentStep === 2) {
      if (ladCondition === 'lad1') return '1500 μm/s (Distacco e rientro in circolo!)';
      return '0 μm/s (Arresto Totale / Tight Binding)';
    }
    if (currentStep === 3) {
      if (ladCondition === 'lad1') return 'Nessun ingresso nel tessuto';
      return 'Diapedesi attiva (1-2 μm/min)';
    }
    return '40 μm/s';
  };

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
              Simulatore Emodinamico & Molecolare
            </span>
            <span className="text-xs text-slate-400 font-mono">Leukocyte Adhesion Cascade</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
            Cascata di Stravaso Leucocitario & Deficit di Adesione (LAD-1 vs LAD-2)
          </h4>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            title="Riavvia simulazione"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={handleNextStep}
            disabled={currentStep === 3 || (ladCondition === 'lad1' && currentStep >= 2) || ladCondition === 'lad2'}
            className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-all shadow-blue-600/20 shadow-md"
          >
            <span>Fase Successiva</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Select Condition: Normal vs LAD-1 vs LAD-2 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <button
          onClick={() => {
            setLadCondition('wt');
            setCurrentStep(0);
          }}
          className={`p-3 rounded-xl border text-left transition-all ${
            ladCondition === 'wt'
              ? 'bg-blue-950/70 border-blue-500 text-blue-200 ring-1 ring-blue-500/40'
              : 'bg-slate-800/60 border-slate-750 text-slate-400 hover:bg-slate-800'
          }`}
        >
          <div className="text-xs font-bold uppercase tracking-wider text-blue-400">Fisiologia Normale</div>
          <div className="font-semibold text-sm text-white mt-0.5">Stravaso Efficace Completo</div>
          <div className="text-[11px] text-slate-400 mt-1">Selectine → Inside-out chemochine → LFA-1/ICAM-1 → Diapedesi.</div>
        </button>

        <button
          onClick={() => {
            setLadCondition('lad1');
            setCurrentStep(0);
          }}
          className={`p-3 rounded-xl border text-left transition-all ${
            ladCondition === 'lad1'
              ? 'bg-rose-950/70 border-rose-500 text-rose-200 ring-1 ring-rose-500/40'
              : 'bg-slate-800/60 border-slate-750 text-slate-400 hover:bg-slate-800'
          }`}
        >
          <div className="text-xs font-bold uppercase tracking-wider text-rose-400">Mutazione LAD-1 (CD18)</div>
          <div className="font-semibold text-sm text-white mt-0.5">Assenza Subunità Integrina β2</div>
          <div className="text-[11px] text-slate-400 mt-1">Rolling intatto ma mancato arresto saldo. Nessun leucocita nel tessuto!</div>
        </button>

        <button
          onClick={() => {
            setLadCondition('lad2');
            setCurrentStep(0);
          }}
          className={`p-3 rounded-xl border text-left transition-all ${
            ladCondition === 'lad2'
              ? 'bg-amber-950/70 border-amber-500 text-amber-200 ring-1 ring-amber-500/40'
              : 'bg-slate-800/60 border-slate-750 text-slate-400 hover:bg-slate-800'
          }`}
        >
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Mutazione LAD-2 (Fucosio)</div>
          <div className="font-semibold text-sm text-white mt-0.5">Difetto di Fucosilazione del Golgi</div>
          <div className="text-[11px] text-slate-400 mt-1">Assenza di Sialyl-Lewis X; il neutrofilo non riesce nemmeno a fare rolling.</div>
        </button>
      </div>

      {/* Dynamic Telemetry Strip */}
      <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span className="text-slate-300">Velocità del Leucocita nel Vaso:</span>
          <span className="font-mono font-bold text-white bg-slate-800 px-2 py-0.5 rounded">
            {getVelocity()}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-400">Fase Attiva:</span>
          <span className="font-mono font-semibold text-indigo-300">
            {currentStep === 0 && '1. Margination & Rolling'}
            {currentStep === 1 && '2. Inside-Out Activation'}
            {currentStep === 2 && '3. Firm Adhesion / Arrest'}
            {currentStep === 3 && '4. Transmigration / Diapedesis'}
          </span>
        </div>
      </div>

      {/* 4-Step Interactive Visual Flow */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {/* Step 1: Rolling */}
        <div
          className={`p-3.5 rounded-xl border transition-all ${
            currentStep >= 0
              ? ladCondition === 'lad2'
                ? 'bg-rose-950/40 border-rose-500/60'
                : 'bg-slate-900 border-blue-500/70 shadow-lg shadow-blue-500/10'
              : 'bg-slate-900/40 border-slate-800 opacity-50'
          }`}
        >
          <div className="text-[10px] font-mono uppercase text-blue-400 font-bold mb-1">Fase 1 · Selectine</div>
          <div className="font-semibold text-sm text-white">Margination & Rolling</div>
          <div className="mt-2 text-xs text-slate-300 leading-snug">
            {ladCondition === 'lad2' ? (
              <span className="text-rose-300 font-medium">
                BLOCCO LAD-2: Assenza dell&apos;epitopo tetrasaccaridico Sialyl-Lewis X (sLeX). Le selectine E/P non agganciano il leucocita, che sfreccia via senza rallentare!
              </span>
            ) : (
              <>E-selectina e P-selectina endoteliali legano con bassa affinità PSGL-1 sul leucocita. Il flusso fa rotolare la cellula (40 μm/s).</>
            )}
          </div>
        </div>

        {/* Step 2: Inside-out */}
        <div
          className={`p-3.5 rounded-xl border transition-all ${
            currentStep >= 1
              ? 'bg-slate-900 border-blue-500/70 shadow-lg shadow-blue-500/10'
              : 'bg-slate-900/40 border-slate-800 opacity-50'
          }`}
        >
          <div className="text-[10px] font-mono uppercase text-cyan-400 font-bold mb-1">Fase 2 · Chemochine</div>
          <div className="font-semibold text-sm text-white">Inside-Out Activation</div>
          <div className="mt-2 text-xs text-slate-300 leading-snug">
            {ladCondition === 'lad2' ? (
              <span className="text-slate-500">Non raggiungibile: la cellula non ha effettuato il rotolamento.</span>
            ) : (
              <>
                CXCL8 (o CCL2) su proteoglicani si lega al recettore GPCR leucocitario. Segnale intracellulare (Gαi/Rap1) che stira l&apos;integrina nella conformazione ad alta affinità.
              </>
            )}
          </div>
        </div>

        {/* Step 3: Firm Adhesion */}
        <div
          className={`p-3.5 rounded-xl border transition-all ${
            currentStep >= 2
              ? ladCondition === 'lad1'
                ? 'bg-rose-950/40 border-rose-500/60'
                : 'bg-slate-900 border-blue-500/70 shadow-lg shadow-blue-500/10'
              : 'bg-slate-900/40 border-slate-800 opacity-50'
          }`}
        >
          <div className="text-[10px] font-mono uppercase text-indigo-400 font-bold mb-1">Fase 3 · Integrine</div>
          <div className="font-semibold text-sm text-white">Adesione Stabile (Arrest)</div>
          <div className="mt-2 text-xs text-slate-300 leading-snug">
            {ladCondition === 'lad1' ? (
              <span className="text-rose-300 font-medium">
                BLOCCO PATOLOGICO LAD-1: Mancanza di CD18 (subunità β2 comune di LFA-1 e Mac-1). Il neutrofilo non può legare ICAM-1: si stacca e viene trascinato via dal sangue!
              </span>
            ) : ladCondition === 'lad2' ? (
              <span className="text-slate-500">Non raggiungibile.</span>
            ) : (
              <>
                LFA-1 e Mac-1 ad alta affinità legano stabilmente ICAM-1 endoteliale. Arresto solido immediato e appiattimento cellulare.
              </>
            )}
          </div>
        </div>

        {/* Step 4: Diapedesis */}
        <div
          className={`p-3.5 rounded-xl border transition-all ${
            currentStep >= 3
              ? 'bg-emerald-950/40 border-emerald-500/70 shadow-lg shadow-emerald-500/10'
              : 'bg-slate-900/40 border-slate-800 opacity-50'
          }`}
        >
          <div className="text-[10px] font-mono uppercase text-emerald-400 font-bold mb-1">Fase 4 · PECAM-1</div>
          <div className="font-semibold text-sm text-white">Diapedesi nel Tessuto</div>
          <div className="mt-2 text-xs text-slate-300 leading-snug">
            {ladCondition !== 'wt' ? (
              <span className="text-slate-500">Impossibile: leucocita non ancorato.</span>
            ) : (
              <>
                Transmigrazione attraverso le giunzioni endoteliali con PECAM-1 (CD31). Secrezione di MMP-9 (gelatinasi B) per attraversare la membrana basale verso i batteri.
              </>
            )}
          </div>
        </div>
      </div>

      {/* Clinical Correlation Warning */}
      {ladCondition !== 'wt' && (
        <div className="p-4 rounded-xl bg-amber-950/50 border border-amber-500/50 text-amber-200 text-xs space-y-1.5">
          <div className="font-bold flex items-center gap-1.5 text-amber-300 text-sm">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            Quadro Clinico di Esame: {ladCondition === 'lad1' ? 'LAD-1 (Deficit di CD18)' : 'LAD-2 (Difetto di Fucosio)'}
          </div>
          <p className="leading-relaxed">
            {ladCondition === 'lad1' ? (
              <>
                I neonati presentano il classico <strong>ritardo nella caduta del cordone ombelicale</strong> (&gt; 30 giorni) con onfalite severa.
                A livello ematologico si riscontra una <strong>leucocitosi neutrofila massiva e persistente (&gt; 30.000 - 100.000 / μL)</strong>
                poiché i neutrofili non riescono a marginare nei tessuti. Paradossalmente, le ulcere cutanee e le infezioni necrotiche batteriche
                sono <strong>completamente prive di pus</strong> (che è costituito proprio da neutrofili extravasati morti).
              </>
            ) : (
              <>
                Malattia metabolica autosomica recessiva rara (mutazione di SLC35C1). I pazienti mostrano ritardo psicomotorio severo,
                bassa statura, dismorfismi craniofacciali e fenotipo eritrocitario Bombay (assenza dell&apos;antigene H fucosilato sui globuli rossi).
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
};
