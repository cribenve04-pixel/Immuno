import React, { useState } from 'react';
import { AlertTriangle, Flame, Shield, Sparkles, CheckCircle2, RotateCcw, Dna, Activity, Lock, Layers } from 'lucide-react';

export const InteractiveSuperantigenVsNonProteinSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'superantigen' | 'nonProtein'>('superantigen');

  // Superantigen state
  const [antigenType, setAntigenType] = useState<'conventional' | 'superantigen'>('superantigen');
  const [selectedSag, setSelectedSag] = useState<'tsst1' | 'seb' | 'speA'>('tsst1');

  // Non-Protein state
  const [nonProteinType, setNonProteinType] = useState<'cd1d' | 'mr1'>('cd1d');

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-rose-500/20 text-rose-400 border border-rose-500/30">
              Meccanismi Non Convenzionali
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Attivazione Policlonale SAg & Antigeni Non Proteici
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white mt-1">
            Simulatore: Superantigeni vs Presentazione di Lipidi e Vitamine
          </h3>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-lg bg-slate-800/90 p-1 border border-slate-700/60 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('superantigen')}
            className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
              activeTab === 'superantigen'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            I Superantigeni (SAg) & Shock
          </button>
          <button
            onClick={() => setActiveTab('nonProtein')}
            className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
              activeTab === 'nonProtein'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Antigeni Non Proteici (CD1 & MR1)
          </button>
        </div>
      </div>

      {activeTab === 'superantigen' ? (
        /* SUPERANTIGEN SIMULATOR */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Controls Column (4 cols) */}
          <div className="lg:col-span-4 bg-slate-950/80 rounded-xl p-4 border border-slate-800 space-y-4">
            <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
              Modalità di Stimolazione T:
            </span>

            <div className="space-y-2 text-xs">
              <button
                onClick={() => setAntigenType('conventional')}
                className={`w-full p-2.5 rounded-lg border text-left transition-all ${
                  antigenType === 'conventional'
                    ? 'bg-blue-950/40 border-blue-500 text-blue-200 shadow-xs'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                }`}
              >
                <div className="font-bold">Antigene Proteico Convenzionale</div>
                <div className="text-[10px] text-slate-400">Tasca peptidica + specificità clonale fine</div>
              </button>

              <button
                onClick={() => setAntigenType('superantigen')}
                className={`w-full p-2.5 rounded-lg border text-left transition-all ${
                  antigenType === 'superantigen'
                    ? 'bg-rose-950/40 border-rose-500 text-rose-200 shadow-xs'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                }`}
              >
                <div className="font-bold flex items-center justify-between">
                  <span>Superantigene Batterico (SAg)</span>
                  <Flame className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <div className="text-[10px] text-slate-400">Ponte esterno: legame a Vβ + MHC-II</div>
              </button>
            </div>

            {antigenType === 'superantigen' && (
              <div className="space-y-1.5 pt-2 border-t border-slate-800 text-xs">
                <label className="text-slate-300 font-semibold block">
                  Scegli Esotossina Batterica:
                </label>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedSag('tsst1')}
                    className={`w-full p-2 rounded text-left border ${
                      selectedSag === 'tsst1'
                        ? 'bg-rose-900/40 border-rose-500 text-rose-200 font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    TSST-1 (S. aureus) → Vβ2
                  </button>
                  <button
                    onClick={() => setSelectedSag('seb')}
                    className={`w-full p-2 rounded text-left border ${
                      selectedSag === 'seb'
                        ? 'bg-rose-900/40 border-rose-500 text-rose-200 font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    Enterotossina B (S. aureus) → Vβ3/12/14/15
                  </button>
                  <button
                    onClick={() => setSelectedSag('speA')}
                    className={`w-full p-2 rounded text-left border ${
                      selectedSag === 'speA'
                        ? 'bg-rose-900/40 border-rose-500 text-rose-200 font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    Esotossina SpeA (S. pyogenes) → Vβ2/4/8
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Visualization Column (8 cols) */}
          <div className="lg:col-span-8 bg-slate-950/80 rounded-xl p-5 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <h4 className="font-bold text-white text-sm">
                  {antigenType === 'conventional'
                    ? 'Attivazione Clonale Ristretta Convenzionale'
                    : 'Attivazione Policlonale Massiva da Superantigene'}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {antigenType === 'conventional'
                    ? 'Il peptide alloggia rigidamente nella tasca di MHC-II; solo il clone T specifico con TCR complementare si attiva.'
                    : 'La tossina bypassa la tasca peptidica e collega esternamente la catena Vβ del TCR e la porzione invariante di MHC-II!'}
                </p>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold self-start sm:self-auto ${
                antigenType === 'conventional'
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                  : 'bg-rose-500/20 text-rose-300 border border-rose-400/30'
              }`}>
                {antigenType === 'conventional' ? '0.0001% - 0.001% DEI T' : 'FINO AL 20-25% DEI T!'}
              </span>
            </div>

            {/* Repertoire Activation Gauge */}
            <div className="space-y-2 p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Frazione di Linfociti T Attivati nell’Organismo:</span>
                <span className={antigenType === 'conventional' ? 'text-blue-400 font-bold' : 'text-rose-400 font-black'}>
                  {antigenType === 'conventional' ? '1 su 100.000 (0.001%)' : '1 su 4 (25.0%)'}
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-3.5 overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    antigenType === 'conventional'
                      ? 'w-[1%] bg-blue-500'
                      : 'w-[25%] bg-gradient-to-r from-amber-500 via-rose-500 to-red-600 animate-pulse'
                  }`}
                />
              </div>
            </div>

            {/* Consequence Banner */}
            {antigenType === 'superantigen' ? (
              <div className="p-4 rounded-xl bg-rose-950/50 border border-rose-800 text-rose-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-rose-300">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Tempesta Citochinica Sistemica (Cytokine Storm)</span>
                </div>
                <p className="text-xs leading-relaxed opacity-95">
                  L’attivazione simultanea di milioni di linfociti T Helper scatena un rilascio torrenziale di <strong>TNF-α</strong>, <strong>IL-1β</strong>, <strong>IL-2</strong> e <strong>IFN-γ</strong> nel circolo ematico.
                  Conseguenze cliniche: vasodilatazione massiva, permeabilità vascolare diffusa con ipotensione refrattaria, shock tossico, rash desquamativo a guanto e insufficienza multiorgano (MOF).
                </p>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800 text-blue-200 space-y-1">
                <div className="flex items-center gap-2 font-bold text-sm text-blue-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Risposta Immunitaria Fisiologica Controllata</span>
                </div>
                <p className="text-xs leading-relaxed opacity-90">
                  Proliferazione selettiva ristretta al solo clone antigene-specifico. Rilascio calibrato di citochine, cooperazione con i linfociti B per lo switch isotipico e generazione di cellule della memoria immunologica.
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* NON-PROTEIN ANTIGEN SIMULATOR (CD1d vs MR1) */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Controls Column (4 cols) */}
          <div className="lg:col-span-4 bg-slate-950/80 rounded-xl p-4 border border-slate-800 space-y-4">
            <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
              Scegli Piattaforma Non-Proteica:
            </span>

            <div className="space-y-2 text-xs">
              <button
                onClick={() => setNonProteinType('cd1d')}
                className={`w-full p-3 rounded-lg border text-left transition-all ${
                  nonProteinType === 'cd1d'
                    ? 'bg-indigo-950/50 border-indigo-500 text-indigo-200 shadow-xs'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                }`}
              >
                <div className="font-bold flex items-center justify-between">
                  <span>Molecola CD1d (Lipidi)</span>
                  <span className="text-[9px] font-mono px-1 rounded bg-indigo-900 text-indigo-200">NKT</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  Presentazione di lipidi, glicolipidi e derivati della ceramide a cellule NKT
                </div>
              </button>

              <button
                onClick={() => setNonProteinType('mr1')}
                className={`w-full p-3 rounded-lg border text-left transition-all ${
                  nonProteinType === 'mr1'
                    ? 'bg-teal-950/50 border-teal-500 text-teal-200 shadow-xs'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                }`}
              >
                <div className="font-bold flex items-center justify-between">
                  <span>Molecola MR1 (Vitamine B)</span>
                  <span className="text-[9px] font-mono px-1 rounded bg-teal-900 text-teal-200">MAIT</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  Presentazione di metaboliti della Riboflavina (Vit. B2) a cellule MAIT
                </div>
              </button>
            </div>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1">
              <span className="text-[10px] font-mono text-purple-400 uppercase font-bold block">
                Localizzazione Genica:
              </span>
              <div className="font-bold text-white">Cromosoma 1 (Non nel locus HLA!)</div>
              <p className="text-[10px] text-slate-400 leading-snug">
                Sia CD1 che MR1 sono molecole monomorfiche invarianti (identiche in tutta la specie umana) associate alla β2-microglobulina.
              </p>
            </div>
          </div>

          {/* Details Column (8 cols) */}
          <div className="lg:col-span-8 bg-slate-950/80 rounded-xl p-5 border border-slate-800 space-y-4">
            {nonProteinType === 'cd1d' ? (
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <h4 className="font-bold text-indigo-300 text-sm">
                    Piattaforma CD1d & Linfociti NKT (Natural Killer T)
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-900/60 text-indigo-200">
                    TCR Invariante Vα24-Jα18
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <span className="font-bold text-white block">Tasca di Legame Idrofobica:</span>
                    <p className="text-slate-400 text-[11px] leading-snug">
                      La tasca di CD1d è profonda e foderata di residui apolari: alloggia le due lunghe code idrocarburiche dei lipidi (ceramide, fosfolipidi), esponendo all’esterno la testa polare idrofila per l’interazione con il TCR.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <span className="font-bold text-white block">Ligandi Protocollari:</span>
                    <p className="text-slate-400 text-[11px] leading-snug">
                      <strong>α-Galattosilceramide (α-GalCer)</strong>, lipidi della parete di micobatteri (glicolipide fenolico) e sfingolipidi self alterati in cellule tumorali.
                    </p>
                  </div>
                </div>
                <div className="p-3.5 rounded-lg bg-indigo-950/40 border border-indigo-700/60 text-indigo-200 text-xs">
                  <strong>Funzione Effettrice Istantanea:</strong> entro pochi minuti dal riconoscimento del lipide, le cellule NKT secernono simultaneamente enormi quantità di <strong>IFN-γ</strong> (orientamento Th1 citotossico) e <strong>IL-4</strong>, agendo da ponte fulmineo tra immunità innata ed adattativa.
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <h4 className="font-bold text-teal-300 text-sm">
                    Piattaforma MR1 & Linfociti MAIT (Mucosa-Associated Invariant T)
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-900/60 text-teal-200">
                    TCR Invariante Vα7.2-Jα33
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <span className="font-bold text-white block">Tasca per Piccole Molecole:</span>
                    <p className="text-slate-400 text-[11px] leading-snug">
                      La tasca di MR1 forma un legame covalente transitorio (base di Schiff) con piccoli derivati aromatici intermedi della sintesi della Vitamina B2/B9.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <span className="font-bold text-white block">Localizzazione Anatomica:</span>
                    <p className="text-slate-400 text-[11px] leading-snug">
                      Altamente concentrate nella lamina propria dell’<strong>intestino</strong>, nel <strong>fegato</strong> (fino al 40% dei linfociti epatici residenti!) e nell’albero respiratorio.
                    </p>
                  </div>
                </div>
                <div className="p-3.5 rounded-lg bg-teal-950/40 border border-teal-700/60 text-teal-200 text-xs">
                  <strong>Discrimine Microbico Assoluto:</strong> l’organismo umano non sintetizza la vitamina B2 e la assume con la dieta. I batteri e i lieviti possiedono la via di biosintesi della riboflavina: i loro metaboliti intermedi attivano istantaneamente le MAIT con secrezione di IFN-γ, TNF-α e lisi cellulare.
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
