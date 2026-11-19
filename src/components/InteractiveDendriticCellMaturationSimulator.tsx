import React, { useState } from 'react';
import { Shield, Sparkles, AlertCircle, CheckCircle2, RotateCcw, ArrowRight, Dna, Activity, Lock, Unlock, Zap, HeartHandshake } from 'lucide-react';

export const InteractiveDendriticCellMaturationSimulator: React.FC = () => {
  const [dcState, setDcState] = useState<'immature' | 'activated' | 'migrated'>('immature');
  const [hasPampTrigger, setHasPampTrigger] = useState<boolean>(false);
  const [useAbatacept, setUseAbatacept] = useState<boolean>(false); // CTLA-4-Ig drug test

  const handleTriggerPamp = () => {
    setHasPampTrigger(true);
    setDcState('activated');
  };

  const handleReset = () => {
    setHasPampTrigger(false);
    setDcState('immature');
    setUseAbatacept(false);
  };

  // 3-Signal Analysis
  const signal1Present = dcState !== 'immature';
  const signal2Present = dcState !== 'immature' && !useAbatacept;
  const signal3Present = dcState === 'migrated';

  const getTCellOutcome = () => {
    if (dcState === 'immature') {
      return {
        status: 'tolerance',
        title: 'Tolleranza Periferica / Assenza di Priming',
        badge: 'ANERGIA T / SILENZIAMENTO',
        description: 'La DC immatura presenta peptidi self in assenza di costimolatori B7 (CD80/CD86). Se un linfocita T autoreattivo lega il TCR (Segnale 1 isolato), non riceve il Segnale 2 ed entra in uno stato irreversibile di anergia funzionale o va incontro ad apoptosi.',
        color: 'amber'
      };
    }

    if (useAbatacept) {
      return {
        status: 'blocked',
        title: 'Blocco Farmacologico del Segnale 2 (Abatacept / CTLA-4-Ig)',
        badge: 'IMMUNOSOPPRESSIONE TERAPEUTICA',
        description: 'La proteina di fusione solubile CTLA-4-Ig (Abatacept) satura i ligandi B7-1 e B7-2 della DC matura. Il linfocita T riceve il Segnale 1 (TCR) ma gli viene negato il Segnale 2 (CD28): l’attivazione viene abortita, arrestando l’artrite reumatoide.',
        color: 'blue'
      };
    }

    if (dcState === 'activated') {
      return {
        status: 'migrating',
        title: 'Attivazione Tissutale in Corso (Transizione Verso i Linfonodi)',
        badge: 'UPREGOLAZIONE CCR7 & B7',
        description: 'L’innesco TLR ha spento la ligasi MARCH1 e indotto il recettore CCR7. La DC sta perdendo la motilità tissutale per imboccare i dotti linfatici afferenti verso i ligandi CCL19 e CCL21 dei linfonodi drenanti.',
        color: 'purple'
      };
    }

    // Migrated fully
    return {
      status: 'priming',
      title: 'Priming Efficace del Linfocita T Naïve nei Linfonodi',
      badge: 'ATTIVAZIONE COMPLETA (3 SEGNALI)',
      description: 'Sinapsi immunologica perfetta: Segnale 1 (TCR:pMHC), Segnale 2 (B7:CD28) e Segnale 3 (Citochine IL-12/IL-6). Il linfocita T naïve esce dalla quiescenza, prolifera clonalmente e si differenzia in effettore!',
      color: 'emerald'
    };
  };

  const outcome = getTCellOutcome();

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Biologia Funzionale delle APC
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Ubiquitina Ligasi MARCH1, CCR7 & I Tre Segnali
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white mt-1">
            Simulatore di Maturazione delle Cellule Dendritiche & Priming
          </h3>
        </div>

        <button
          onClick={handleReset}
          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors self-start sm:self-auto border border-slate-700/60"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Ripristina Stato Iniziale</span>
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: DC State Controller (5 cols) */}
        <div className="lg:col-span-5 bg-slate-950/80 rounded-xl p-5 border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
              1. Stato di Differenziazione della Dendritica:
            </span>

            <div className="space-y-2">
              <button
                onClick={() => {
                  setDcState('immature');
                  setHasPampTrigger(false);
                }}
                className={`w-full p-3 rounded-xl border text-left transition-all ${
                  dcState === 'immature'
                    ? 'bg-amber-950/40 border-amber-500 text-amber-200 shadow-sm'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                }`}
              >
                <div className="font-bold text-xs flex items-center justify-between">
                  <span>DC Immatura Tissutale (Langerhans)</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-900/60 text-amber-200">
                    MARCH1 ON
                  </span>
                </div>
                <p className="text-[11px] opacity-80 mt-1 leading-snug">
                  Localizzata nel derma/mucose. Alta fagocitosi; continua degradazione di MHC-II nel lisosoma; zero costimolatori B7; CCR7 spento.
                </p>
              </button>

              <button
                onClick={handleTriggerPamp}
                className={`w-full p-3 rounded-xl border text-left transition-all ${
                  dcState === 'activated'
                    ? 'bg-purple-950/40 border-purple-500 text-purple-200 shadow-sm'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                }`}
              >
                <div className="font-bold text-xs flex items-center justify-between">
                  <span>Stimolazione PRR / PAMP (LPS, ssRNA)</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-900/60 text-purple-200">
                    MARCH1 OFF
                  </span>
                </div>
                <p className="text-[11px] opacity-80 mt-1 leading-snug">
                  Trascrizione di MARCH1 inibita da TLR! Le molecole MHC-II si stabilizzano in membrana (&gt;40h). Upregolazione di CCR7 e B7.
                </p>
              </button>

              <button
                onClick={() => {
                  setHasPampTrigger(true);
                  setDcState('migrated');
                }}
                className={`w-full p-3 rounded-xl border text-left transition-all ${
                  dcState === 'migrated'
                    ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200 shadow-sm'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                }`}
              >
                <div className="font-bold text-xs flex items-center justify-between">
                  <span>DC Matura Migrata nel Linfonodo</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-900/60 text-emerald-200">
                    PRIMING LEADER
                  </span>
                </div>
                <p className="text-[11px] opacity-80 mt-1 leading-snug">
                  Giunta nell’area T paracorticale guidata da CCL19/21. Esprime massimi livelli di MHC-II, B7-1/B7-2 e citochine per i T naïve.
                </p>
              </button>
            </div>
          </div>

          {/* Abatacept Drug Toggle */}
          <div className="pt-3 border-t border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-blue-400" />
                Intervento Farmacologico (Abatacept / CTLA-4-Ig):
              </span>
              <button
                onClick={() => setUseAbatacept(!useAbatacept)}
                className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                  useAbatacept
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {useAbatacept ? 'Farmaco Presente' : 'Assente'}
              </button>
            </div>
            <p className="text-[10px] text-slate-400 leading-snug">
              CTLA-4-Ig si lega a CD80/CD86 mascherandoli stericamente e impedendo l’attivazione di CD28 sui T autoreattivi nell’artrite reumatoide.
            </p>
          </div>
        </div>

        {/* Right Column: Three Signals & Immunological Outcome (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950/80 rounded-xl p-5 border border-slate-800 flex flex-col justify-between space-y-5">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono uppercase text-slate-400 font-bold">
                2. Verifica della Sinapsi Immunologica: I Tre Segnali
              </span>
              <span className="text-xs font-mono text-slate-500">
                Linfocita T Naïve ↔ Cellula Dendritica
              </span>
            </div>

            {/* The 3 Signals Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {/* Signal 1 */}
              <div className={`p-3 rounded-lg border text-xs space-y-1 ${
                signal1Present
                  ? 'bg-blue-950/40 border-blue-600/70 text-blue-200'
                  : 'bg-slate-900 border-slate-800 text-slate-500'
              }`}>
                <div className="flex items-center justify-between font-bold">
                  <span>Segnale 1</span>
                  {signal1Present ? <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> : <Lock className="w-3 h-3 text-slate-600" />}
                </div>
                <div className="font-semibold text-white text-[11px]">TCR:pMHC (+CD4)</div>
                <p className="text-[10px] opacity-80 leading-tight">
                  Specificità epitopica.
                </p>
              </div>

              {/* Signal 2 */}
              <div className={`p-3 rounded-lg border text-xs space-y-1 ${
                signal2Present
                  ? 'bg-emerald-950/40 border-emerald-600/70 text-emerald-200'
                  : 'bg-slate-900 border-slate-800 text-slate-500'
              }`}>
                <div className="flex items-center justify-between font-bold">
                  <span>Segnale 2</span>
                  {signal2Present ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Lock className="w-3 h-3 text-slate-600" />}
                </div>
                <div className="font-semibold text-white text-[11px]">B7 (CD80/86) → CD28</div>
                <p className="text-[10px] opacity-80 leading-tight">
                  {useAbatacept ? 'Bloccato da CTLA-4-Ig!' : 'Costimolazione di sopravvivenza.'}
                </p>
              </div>

              {/* Signal 3 */}
              <div className={`p-3 rounded-lg border text-xs space-y-1 ${
                signal3Present
                  ? 'bg-purple-950/40 border-purple-600/70 text-purple-200'
                  : 'bg-slate-900 border-slate-800 text-slate-500'
              }`}>
                <div className="flex items-center justify-between font-bold">
                  <span>Segnale 3</span>
                  {signal3Present ? <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> : <Lock className="w-3 h-3 text-slate-600" />}
                </div>
                <div className="font-semibold text-white text-[11px]">Citochine Polarizzanti</div>
                <p className="text-[10px] opacity-80 leading-tight">
                  Differenziazione Th1, Th2, Th17.
                </p>
              </div>
            </div>
          </div>

          {/* Biological Outcome Banner */}
          <div className={`p-4 rounded-xl border space-y-2 ${
            outcome.color === 'emerald'
              ? 'bg-emerald-950/40 border-emerald-700 text-emerald-100'
              : outcome.color === 'blue'
              ? 'bg-blue-950/40 border-blue-700 text-blue-100'
              : outcome.color === 'purple'
              ? 'bg-purple-950/40 border-purple-700 text-purple-100'
              : 'bg-amber-950/40 border-amber-700 text-amber-100'
          }`}>
            <div className="flex items-center justify-between gap-2">
              <span className="font-bold text-sm flex items-center gap-2 text-white">
                <Sparkles className="w-4 h-4 text-amber-400" />
                {outcome.title}
              </span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded font-black bg-white/10 text-white">
                {outcome.badge}
              </span>
            </div>
            <p className="text-xs leading-relaxed opacity-90">
              {outcome.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
