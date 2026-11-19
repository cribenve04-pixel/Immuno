import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  Shield,
  Activity,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Pill,
  RotateCcw,
  Sparkles,
  Info,
  MapPin,
  Flame,
  Brain,
  Droplets
} from 'lucide-react';

type TraffickingStage = 'homing' | 'activation_retention' | 'egress_effector' | 'fingolimod_block';

export const InteractiveTraffickingSimulator: React.FC = () => {
  const [stage, setStage] = useState<TraffickingStage>('activation_retention');
  const [fingolimodActive, setFingolimodActive] = useState<boolean>(false);

  // Derive state based on selection
  let currentStageKey = stage;
  if (fingolimodActive) {
    currentStageKey = 'fingolimod_block';
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-8">
      {/* Header */}
      <div className="p-5 sm:p-6 bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-teal-300 text-xs font-mono uppercase tracking-wider mb-1">
            <Compass className="w-4 h-4" />
            <span>Simulatore di Trafficking Linfatico & Farmacologia Molecolare</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Asse CD69 - S1PR1 & Meccanismo di Fingolimod (FTY720)
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Comprendi come il bilancio dinamico tra il marcatore di attivazione precoce <strong>CD69</strong> e il recettore della sfingosina-1-fosfato (<strong>S1PR1</strong>) controlla la ritenzione linfonodale di 4-7 giorni e l’egresso effettore, e come il farmaco <strong>Fingolimod</strong> intrappola i linfociti autoreattivi nella Sclerosi Multipla.
          </p>
        </div>

        <button
          onClick={() => {
            setStage('homing');
            setFingolimodActive(false);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-colors border border-slate-700 self-start md:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Tappe</span>
        </button>
      </div>

      {/* Stage Selector */}
      <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
            Seleziona la Fase del Ciclo di Ricircolo & Ritenzione:
          </span>

          {/* Fingolimod toggle */}
          <button
            onClick={() => setFingolimodActive(!fingolimodActive)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all border ${
              fingolimodActive
                ? 'bg-rose-600 text-white border-rose-700 shadow-xs'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
            }`}
          >
            <Pill className="w-3.5 h-3.5" />
            <span>{fingolimodActive ? 'Sospendi Fingolimod (FTY720)' : 'Somministra Fingolimod (FTY720)'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            onClick={() => {
              setStage('homing');
              setFingolimodActive(false);
            }}
            className={`p-3 rounded-xl text-left border transition-all ${
              currentStageKey === 'homing'
                ? 'bg-blue-600 text-white border-blue-700 shadow-xs font-semibold'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 text-xs'
            }`}
          >
            <div className="font-bold flex items-center justify-between">
              <span>Fase 1: Homing Linfonodale</span>
              {currentStageKey === 'homing' && <CheckCircle2 className="w-4 h-4 text-white" />}
            </div>
            <div className={`text-xs mt-1 ${currentStageKey === 'homing' ? 'text-blue-100' : 'text-slate-500'}`}>
              HEV, CCR7:CCL21 & S1PR1 elevato (pronto ad uscire se non stimolato)
            </div>
          </button>

          <button
            onClick={() => {
              setStage('activation_retention');
              setFingolimodActive(false);
            }}
            className={`p-3 rounded-xl text-left border transition-all ${
              currentStageKey === 'activation_retention'
                ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs font-semibold'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 text-xs'
            }`}
          >
            <div className="font-bold flex items-center justify-between">
              <span>Fase 2: Ritenzione Attiva</span>
              {currentStageKey === 'activation_retention' && <CheckCircle2 className="w-4 h-4 text-white" />}
            </div>
            <div className={`text-xs mt-1 ${currentStageKey === 'activation_retention' ? 'text-emerald-100' : 'text-slate-500'}`}>
              Attivazione TCR → CD69 ↑ internalizza S1PR1 → Sequestro per 4-7 gg
            </div>
          </button>

          <button
            onClick={() => {
              setStage('egress_effector');
              setFingolimodActive(false);
            }}
            className={`p-3 rounded-xl text-left border transition-all ${
              currentStageKey === 'egress_effector'
                ? 'bg-amber-600 text-white border-amber-700 shadow-xs font-semibold'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 text-xs'
            }`}
          >
            <div className="font-bold flex items-center justify-between">
              <span>Fase 3: Egresso Effettore</span>
              {currentStageKey === 'egress_effector' && <CheckCircle2 className="w-4 h-4 text-white" />}
            </div>
            <div className={`text-xs mt-1 ${currentStageKey === 'egress_effector' ? 'text-amber-100' : 'text-slate-500'}`}>
              Differenziamento → CD69 ↓, S1PR1 ↑ → Uscita nella linfa efferente
            </div>
          </button>
        </div>
      </div>

      {/* Interactive Anatomy & S1P Gradient View */}
      <div className="p-5 sm:p-7 bg-slate-900 text-white">
        {/* S1P Gradient Bar Indicator */}
        <div className="mb-6 p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-bold text-slate-200">
              Gradiente Fisiologico di Sfingosina-1-Fosfato (S1P):
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-emerald-400 font-semibold bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800">
              Parenchima Linfonodale: [S1P] BASSA (~nanoMolare)
            </span>
            <span className="text-slate-500">→</span>
            <span className="text-rose-400 font-semibold bg-rose-950/70 px-2 py-0.5 rounded border border-rose-800">
              Linfa Efferente & Sangue: [S1P] ALTA (~microMolare)
            </span>
          </div>
        </div>

        {/* Anatomical Schematic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Box 1: HEV & Entrata */}
          <div className={`p-4 rounded-xl border transition-all ${
            currentStageKey === 'homing'
              ? 'bg-blue-950/70 border-blue-500 ring-2 ring-blue-500/40'
              : 'bg-slate-800/60 border-slate-700 opacity-60'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-blue-300 uppercase">1. Venula ad Alto Endotelio (HEV)</span>
              <span className="text-[10px] bg-blue-900 text-blue-200 px-1.5 py-0.5 rounded">Homing</span>
            </div>
            <div className="text-xs text-slate-300 space-y-1.5">
              <p>• <strong>CCL21 / CCL19</strong> legate all’endotelio delle HEV.</p>
              <p>• Linfocita T naïve esprime <strong>CCR7</strong> e <strong>L-selectina (CD62L)</strong>.</p>
              <p>• Rolling, arresto mediato da chemochina e diapedesi nella paracorticale.</p>
              <p className="text-[11px] text-blue-300 font-mono">
                Se non trova antigene entro 12-24h, esce seguendo S1PR1.
              </p>
            </div>
          </div>

          {/* Box 2: Paracorticale & Ritenzione CD69 */}
          <div className={`p-4 rounded-xl border transition-all ${
            currentStageKey === 'activation_retention' || currentStageKey === 'fingolimod_block'
              ? currentStageKey === 'fingolimod_block'
                ? 'bg-rose-950/80 border-rose-500 ring-2 ring-rose-500/50'
                : 'bg-emerald-950/70 border-emerald-500 ring-2 ring-emerald-500/40'
              : 'bg-slate-800/60 border-slate-700 opacity-60'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-xs font-mono font-bold uppercase ${
                currentStageKey === 'fingolimod_block' ? 'text-rose-300' : 'text-emerald-300'
              }`}>
                2. Paracorticale (Zona T) & Ritenzione
              </span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                currentStageKey === 'fingolimod_block' ? 'bg-rose-900 text-rose-200' : 'bg-emerald-900 text-emerald-200'
              }`}>
                {currentStageKey === 'fingolimod_block' ? 'Intrappolamento FTY720' : '4-7 Giorni'}
              </span>
            </div>
            <div className="text-xs text-slate-300 space-y-1.5">
              {currentStageKey === 'fingolimod_block' ? (
                <>
                  <p className="text-rose-300 font-semibold">• FTY720-P induce degradazione irreversibile di S1PR1.</p>
                  <p>• Il linfocita non percepisce la linfa efferente e non può uscire.</p>
                  <p>• I cloni autoreattivi rimangono intrappolati nel linfonodo.</p>
                  <p className="text-[11px] text-rose-200 font-mono">
                    Linfopenia periferica &gt;70%, protezione della mielina nel SNC.
                  </p>
                </>
              ) : (
                <>
                  <p>• Incontro con APC matura che presenta peptide-MHC + B7.</p>
                  <p>• Segnale 1 + 2 inducono espressione fulminea di <strong>CD69</strong>.</p>
                  <p>• <strong>CD69 si lega a S1PR1</strong> inducendone l’internalizzazione.</p>
                  <p className="text-[11px] text-emerald-300 font-mono">
                    La cellula è cieca a S1P: ritenzione obbligata per la proliferazione clonale.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Box 3: Seno Midollare & Vaso Linfatico Efferente */}
          <div className={`p-4 rounded-xl border transition-all ${
            currentStageKey === 'egress_effector'
              ? 'bg-amber-950/70 border-amber-500 ring-2 ring-amber-500/40'
              : 'bg-slate-800/60 border-slate-700 opacity-60'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-amber-300 uppercase">3. Vaso Linfatico Efferente</span>
              <span className="text-[10px] bg-amber-900 text-amber-200 px-1.5 py-0.5 rounded">Egresso</span>
            </div>
            <div className="text-xs text-slate-300 space-y-1.5">
              <p>• Al termine della differenziazione effettrice, <strong>CD69 decresce</strong>.</p>
              <p>• <strong>S1PR1 viene riespresso</strong> stabilmente sulla membrana plasmatica.</p>
              <p>• Chemiotassi verso l’elevato gradiente di S1P nel seno midollare.</p>
              <p className="text-[11px] text-amber-300 font-mono">
                Uscita via linfa efferente → Dotto toracico → Circolo ematico sistemico.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Receptor Expression Monitor */}
        <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 bg-slate-800/90 rounded-lg border border-slate-700">
            <span className="text-[10px] font-mono text-slate-400 block mb-1">Espressione CD69 in Membrana</span>
            <div className="text-sm font-bold font-mono">
              {currentStageKey === 'homing' && <span className="text-slate-400">Assente / Basale (&lt;5%)</span>}
              {currentStageKey === 'activation_retention' && <span className="text-emerald-400">Iper-espresso (&gt;90%)</span>}
              {currentStageKey === 'egress_effector' && <span className="text-amber-400">Spento (&lt;10%)</span>}
              {currentStageKey === 'fingolimod_block' && <span className="text-rose-400">Irrilevante (S1PR1 degradato)</span>}
            </div>
          </div>

          <div className="p-3 bg-slate-800/90 rounded-lg border border-slate-700">
            <span className="text-[10px] font-mono text-slate-400 block mb-1">Espressione S1PR1 in Superficie</span>
            <div className="text-sm font-bold font-mono">
              {currentStageKey === 'homing' && <span className="text-cyan-400">Elevata (Recettore Pronto)</span>}
              {currentStageKey === 'activation_retention' && <span className="text-rose-400">Internalizzato da CD69</span>}
              {currentStageKey === 'egress_effector' && <span className="text-emerald-400">Riespresso (Guida Egresso)</span>}
              {currentStageKey === 'fingolimod_block' && <span className="text-rose-500 font-black">DEGRADATO IRREVERSIBILMENTE</span>}
            </div>
          </div>

          <div className="p-3 bg-slate-800/90 rounded-lg border border-slate-700">
            <span className="text-[10px] font-mono text-slate-400 block mb-1">Sensibilità al Gradiente S1P</span>
            <div className="text-sm font-bold font-mono">
              {currentStageKey === 'homing' && <span className="text-cyan-400">Attiva (100%)</span>}
              {currentStageKey === 'activation_retention' && <span className="text-amber-400">Inibita (Cieco a S1P)</span>}
              {currentStageKey === 'egress_effector' && <span className="text-emerald-400">Attiva (100%)</span>}
              {currentStageKey === 'fingolimod_block' && <span className="text-rose-500">Completamente Soppressa</span>}
            </div>
          </div>

          <div className="p-3 bg-slate-800/90 rounded-lg border border-slate-700">
            <span className="text-[10px] font-mono text-slate-400 block mb-1">Localizzazione Linfocitaria</span>
            <div className="text-sm font-bold font-mono">
              {currentStageKey === 'homing' && <span className="text-blue-300">Ingresso in Paracorticale</span>}
              {currentStageKey === 'activation_retention' && <span className="text-emerald-300">Trattenuto in Zona T</span>}
              {currentStageKey === 'egress_effector' && <span className="text-amber-300">Circolo & Focolai Periferici</span>}
              {currentStageKey === 'fingolimod_block' && <span className="text-rose-300">Sequestrato nei Linfonodi</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Clinical Correlation Summary Box */}
      <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-teal-100 text-teal-800 shrink-0 mt-0.5">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
              Correlazione Clinica d’Esame: Fingolimod (Gilenya®) & Sclerosi Multipla
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              La <strong>Sclerosi Multipla</strong> è una patologia autoimmune demielinizzante del sistema nervoso centrale in cui linfociti T autoreattivi periferici (Th1 e Th17 diretti contro MBP, PLP e MOG) oltrepassano la barriera emato-encefalica. Somministrando <strong>Fingolimod</strong>, la distruzione del recettore S1PR1 impedisce a questi cloni di uscire dai linfonodi. Il numero di linfociti T nel sangue cala drasticamente (del 70-80%), azzerando la penetrazione encefalica di nuovi linfociti patogeni e riducendo drasticamente il tasso di recidive cliniche.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
