import React, { useState } from 'react';
import { Activity, Dna, Scissors, Sparkles, AlertTriangle, ShieldCheck, RotateCcw, ChevronRight, CheckCircle2 } from 'lucide-react';
import { VDJ_ENZYMES_DATA } from '../data/lezione7Content';

type RecombinationLocus = 'heavy' | 'kappa';
type RecombinationDisease = 'wt' | 'omenn' | 'artemis_defect';

export const InteractiveVdjRecombinationSimulator: React.FC = () => {
  const [locus, setLocus] = useState<RecombinationLocus>('heavy');
  const [disease, setDisease] = useState<RecombinationDisease>('wt');
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNextStep = () => {
    setActiveStep((prev) => Math.min(prev + 1, 4));
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepOutcome = () => {
    if (disease === 'omenn') {
      return {
        status: 'Blocco da Deficit RAG1/RAG2 (Sindrome di Omenn / SCID)',
        desc: 'Il complesso delle ricombinasi RAG non riconosce le sequenze RSS o non effettua il taglio a doppio filamento. Mancato sviluppo di linfociti B e T.',
        color: 'text-rose-400'
      };
    }
    if (disease === 'artemis_defect') {
      return {
        status: 'Blocco da Deficit Artemis / DNA-PK (SCID Radiosensibile)',
        desc: 'Le forcine (hairpins) di DNA rimangono covalentemente chiuse e non possono essere aperte. Mancata unione giunzionale e rotture cromosomiche letali.',
        color: 'text-rose-400'
      };
    }
    if (activeStep === 0) {
      return {
        status: 'Allineamento RSS: Rispetto Rigoroso della Regola 12/23',
        desc: locus === 'heavy'
          ? 'Nel locus pesante, D (fiancheggiato da spaziatore 12 a monte e a valle) si appaia a J (spaziatore 23). V (spaziatore 23) non può unire direttamente J!'
          : 'Nel locus kappa, il segmento V (spaziatore 12) si appaia direttamente a J (spaziatore 23). Nessun segmento D intermedio.',
        color: 'text-blue-400'
      };
    }
    if (activeStep === 1) {
      return {
        status: 'Taglio Sfasato RAG1/2 & Formazione Forcine (Hairpins)',
        desc: 'RAG1/RAG2 catalizza l’idrolisi fosfodiesterica generando estremità codificanti sigillate a forcina e l’escissione del DNA intermedio.',
        color: 'text-cyan-400'
      };
    }
    if (activeStep === 2) {
      return {
        status: 'Apertura Forcine da Artemis / DNA-PKcs (Nucleotidi P)',
        desc: 'Artemis apre asimmetricamente la forcina. Il riempimento da DNA polimerasi genera sequenze palindromiche a specchio (nucleotidi P).',
        color: 'text-indigo-400'
      };
    }
    if (activeStep === 3) {
      return {
        status: 'Aggiunta Nucleotidi N Casuali via TdT (Ipervariabilità CDR3)',
        desc: 'La TdT inserisce fino a 20 nucleotidi privi di stampo (N-nucleotides). È il massimo contributore alla diversità giunzionale anticorpale!',
        color: 'text-purple-400'
      };
    }
    return {
      status: 'Saldatura Finale Covalente via DNA Ligasi IV / XRCC4',
      desc: 'Il modulo VDJ (o VJ) è ora contiguo, funzionale e pronto ad essere trascritto in pre-mRNA con i geni costanti adiacenti!',
      color: 'text-emerald-400'
    };
  };

  const outcome = getStepOutcome();

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
              Macchinario Enzimatico di Ricombinazione
            </span>
            <span className="text-xs text-slate-400 font-mono">Regola 12/23 · RAG · Artemis · TdT</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
            Simulatore Molecolare del Riarrangiamento V(D)J e Diversità Giunzionale
          </h4>
        </div>

        {/* Action Controls */}
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
            disabled={activeStep >= 4 || disease !== 'wt'}
            className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-all shadow-purple-600/20 shadow-md"
          >
            <span>Fase Successiva</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Select Locus: Catena Pesante vs Catena Leggera */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <button
          onClick={() => {
            setLocus('heavy');
            setActiveStep(0);
          }}
          className={`p-3 rounded-xl border text-left transition-all ${
            locus === 'heavy'
              ? 'bg-purple-950/70 border-purple-500 text-purple-200 ring-1 ring-purple-500/40'
              : 'bg-slate-800/60 border-slate-750 text-slate-400 hover:bg-slate-800'
          }`}
        >
          <div className="text-xs font-bold uppercase tracking-wider text-purple-400">Cromosoma 14q32</div>
          <div className="font-semibold text-sm text-white mt-0.5">Locus Catena Pesante (V - D - J)</div>
          <div className="text-[11px] text-slate-400 mt-1">Due eventi sequenziali: prima D-J, poi V-DJ. Presenza di nucleotidi N (TdT).</div>
        </button>

        <button
          onClick={() => {
            setLocus('kappa');
            setActiveStep(0);
          }}
          className={`p-3 rounded-xl border text-left transition-all ${
            locus === 'kappa'
              ? 'bg-cyan-950/70 border-cyan-500 text-cyan-200 ring-1 ring-cyan-500/40'
              : 'bg-slate-800/60 border-slate-750 text-slate-400 hover:bg-slate-800'
          }`}
        >
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">Cromosoma 2p11</div>
          <div className="font-semibold text-sm text-white mt-0.5">Locus Catena Leggera Kappa (V - J)</div>
          <div className="text-[11px] text-slate-400 mt-1">Unico evento V-J privo di segmenti D. TdT generalmente silente.</div>
        </button>
      </div>

      {/* Disease Selection Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
        <span className="font-mono text-slate-400 font-semibold uppercase">Assetto Enzimatico:</span>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setDisease('wt')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
              disease === 'wt' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Fisiologico (WT)
          </button>
          <button
            onClick={() => setDisease('omenn')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
              disease === 'omenn' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Mutazione RAG (Omenn / SCID)
          </button>
          <button
            onClick={() => setDisease('artemis_defect')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
              disease === 'artemis_defect' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Deficit Artemis (SCID-Radiosensibile)
          </button>
        </div>
      </div>

      {/* Molecular Step Visualization Strip */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5">
        {/* Step 0 */}
        <div
          className={`p-3 rounded-xl border transition-all ${
            activeStep >= 0
              ? 'bg-slate-900 border-purple-500/70 shadow-md shadow-purple-500/10'
              : 'bg-slate-900/40 border-slate-800 opacity-50'
          }`}
        >
          <div className="text-[10px] font-mono uppercase text-purple-400 font-bold mb-1">Fase 1 · RSS</div>
          <div className="font-semibold text-xs text-white">Regola 12 / 23</div>
          <div className="mt-1.5 text-[11px] text-slate-300 leading-snug">
            Ettamero (7nt) + Spaziatore 12/23nt (1-2 giri d&apos;elica) + Nonamero (9nt). Si uniscono solo 12 con 23!
          </div>
        </div>

        {/* Step 1 */}
        <div
          className={`p-3 rounded-xl border transition-all ${
            activeStep >= 1
              ? disease === 'omenn'
                ? 'bg-rose-950/40 border-rose-500/60'
                : 'bg-slate-900 border-cyan-500/70 shadow-md shadow-cyan-500/10'
              : 'bg-slate-900/40 border-slate-800 opacity-50'
          }`}
        >
          <div className="text-[10px] font-mono uppercase text-cyan-400 font-bold mb-1">Fase 2 · RAG1/2</div>
          <div className="font-semibold text-xs text-white">Taglio & Forcina</div>
          <div className="mt-1.5 text-[11px] text-slate-300 leading-snug">
            {disease === 'omenn' ? (
              <span className="text-rose-300 font-bold">BLOCCO: Assenza di attività endonucleasica RAG.</span>
            ) : (
              <>Taglio sfasato a singolo filamento e chiusura covalente delle estremità a forcina (hairpins).</>
            )}
          </div>
        </div>

        {/* Step 2 */}
        <div
          className={`p-3 rounded-xl border transition-all ${
            activeStep >= 2
              ? disease === 'artemis_defect'
                ? 'bg-rose-950/40 border-rose-500/60'
                : 'bg-slate-900 border-indigo-500/70 shadow-md shadow-indigo-500/10'
              : 'bg-slate-900/40 border-slate-800 opacity-50'
          }`}
        >
          <div className="text-[10px] font-mono uppercase text-indigo-400 font-bold mb-1">Fase 3 · Artemis</div>
          <div className="font-semibold text-xs text-white">Nucleotidi P</div>
          <div className="mt-1.5 text-[11px] text-slate-300 leading-snug">
            {disease === 'artemis_defect' ? (
              <span className="text-rose-300 font-bold">BLOCCO: Forcine chiuse; mancata apertura da Artemis.</span>
            ) : (
              <>Taglio asimmetrico della forcina; l&apos;apertura produce sporgenze a singolo filamento (palindromi P).</>
            )}
          </div>
        </div>

        {/* Step 3 */}
        <div
          className={`p-3 rounded-xl border transition-all ${
            activeStep >= 3
              ? 'bg-slate-900 border-purple-500/70 shadow-md shadow-purple-500/10'
              : 'bg-slate-900/40 border-slate-800 opacity-50'
          }`}
        >
          <div className="text-[10px] font-mono uppercase text-purple-400 font-bold mb-1">Fase 4 · TdT</div>
          <div className="font-semibold text-xs text-white">Nucleotidi N</div>
          <div className="mt-1.5 text-[11px] text-slate-300 leading-snug">
            La TdT aggiunge fino a 20 basi azotate casuali senza stampo, creando la massima variabilità nel CDR3!
          </div>
        </div>

        {/* Step 4 */}
        <div
          className={`p-3 rounded-xl border transition-all ${
            activeStep >= 4
              ? 'bg-emerald-950/40 border-emerald-500/70 shadow-md shadow-emerald-500/10'
              : 'bg-slate-900/40 border-slate-800 opacity-50'
          }`}
        >
          <div className="text-[10px] font-mono uppercase text-emerald-400 font-bold mb-1">Fase 5 · Ligasi</div>
          <div className="font-semibold text-xs text-white">DNA Ligasi IV / XRCC4</div>
          <div className="mt-1.5 text-[11px] text-slate-300 leading-snug">
            Saldatura dei legami fosfodiesterici. Il gene variabile è ora contiguo con gli enhancer costanti!
          </div>
        </div>
      </div>

      {/* Outcome Banner */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div>
          <div className={`font-bold text-sm ${outcome.color}`}>{outcome.status}</div>
          <p className="text-slate-300 mt-0.5 leading-relaxed">{outcome.desc}</p>
        </div>
        <div className="text-[11px] font-mono text-slate-400 border-t sm:border-t-0 sm:border-l border-slate-800 pt-2 sm:pt-0 sm:pl-4 shrink-0">
          <div>Locus: <strong>{locus === 'heavy' ? 'Catena Pesante H (VDJ)' : 'Catena Leggera κ (VJ)'}</strong></div>
          <div>Assetto: <strong>{disease}</strong></div>
        </div>
      </div>
    </div>
  );
};
