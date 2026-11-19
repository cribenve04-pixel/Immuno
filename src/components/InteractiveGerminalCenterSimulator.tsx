import React, { useState } from 'react';
import {
  RotateCcw,
  Sparkles,
  Shield,
  Layers,
  ChevronRight,
  Flame,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Zap,
  Activity,
  Dna
} from 'lucide-react';

interface GCStep {
  stepNumber: number;
  title: string;
  zone: 'dark' | 'light' | 'extrafollicular' | 'output';
  cellType: string;
  molecularEvents: string;
  description: string;
  highlightGene: string;
}

const GC_STEPS: GCStep[] = [
  {
    stepNumber: 1,
    title: '1. Innesco al Confine T-B & Entrata nel Follicolo',
    zone: 'extrafollicular',
    cellType: 'Linfocita B Attivato (Pre-Centroblasto)',
    molecularEvents: 'Ingaggio BCR + CD40 al bordo T-B; induzione di Bcl-6; repressione di Blimp-1 e CCR7; up-regolazione di CXCR4.',
    description: 'Dopo l’incontro con l’antigene e il primo contatto con il linfocita T CD4 al confine tra zona T e follicolo, i cloni con espressione moderata di IRF4 inducono Bcl-6. Questo reprime la differenziazione terminale e dirige le cellule verso il centro del follicolo primario.',
    highlightGene: 'Bcl-6↑ / Pax5↑ / CXCR4↑'
  },
  {
    stepNumber: 2,
    title: '2. Zona Scura: Proliferazione Esplosiva & Ipermutazione (SHM)',
    zone: 'dark',
    cellType: 'Centroblasto (CXCR4^high, CD77+)',
    molecularEvents: 'Trascrizione genica ad alto volume; attivazione dell’enzima AID (deaminazione dC → dU nei CDR); cicli mitotici ogni 6-12h; blocco di p53 mediato da Bcl-6.',
    description: 'I centroblasti si compattano nella Zona Scura. L’enzima AID bersaglia specificamente le regioni variabili V(D)J introducendo mutazioni puntiformi casuali a frequenza elevatissima (~1 mutazione per 1000 bp per divisione cellulare).',
    highlightGene: 'AID (AICDA) / Ciclina D3 / Mcl-1'
  },
  {
    stepNumber: 3,
    title: '3. Transizione verso la Zona Chiara',
    zone: 'light',
    cellType: 'Centrocita (CXCR5^high, CXCR4^low)',
    molecularEvents: 'Calo di CXCR4 e aumento di CXCR5; rallentamento del ciclo cellulare; esposizione del BCR mutato in superficie.',
    description: 'I centroblasti cessano la proliferazione, riducono le dimensioni e up-regolano CXCR5, migrando attratti dal gradiente di CXCL13 verso la Zona Chiara, dove si trasmutano in centrociti pronti per la prova di selezione.',
    highlightGene: 'CXCR5↑ / CXCL13'
  },
  {
    stepNumber: 4,
    title: '4. Zona Chiara: Competizione per l’Antigene sulle FDC',
    zone: 'light',
    cellType: 'Centrocita vs Follicular Dendritic Cell',
    molecularEvents: 'Cattura meccanica dell’antigene nativo esposto su CR1/CR2 e FcγRIIB delle FDC; estrazione dell’antigene e internalizzazione endocitica.',
    description: 'L’antigene è presente in quantità strettamente limitante sulle FDC. Solo i centrociti che hanno acquisito mutazioni a più alta affinità riescono a strappare l’antigene con forza tensile e a internalizzarlo nei lisosomi per la processazione.',
    highlightGene: 'BCR Tensional Force / CR2 (CD21)'
  },
  {
    stepNumber: 5,
    title: '5. Zona Chiara: Presentazione a Tfh & Segnale di Salvataggio',
    zone: 'light',
    cellType: 'Centrocita con Linfocita Tfh (Bcl-6+)',
    molecularEvents: 'Presentazione complessi peptide:MHC-II al TCR del Tfh; legame CD40L:CD40; secrezione focale di IL-21; up-regolazione del fattore c-Myc e di Mcl-1.',
    description: 'Il centrocita che presenta la maggiore densità di peptidi cattura l’attenzione del Tfh. Il Tfh eroga il segnale vitale via CD40L e citochine (IL-21/IL-4), spegnendo la via apoptotica intrinseca che altrimenti condannerebbe la cellula entro poche ore.',
    highlightGene: 'CD40:CD40L / IL-21 / c-Myc'
  },
  {
    stepNumber: 6,
    title: '6. Risoluzione del Destino: Uscita o Riciclo',
    zone: 'output',
    cellType: 'LLPC (Midollo) o Memoria B o Riciclo Zona Scura',
    molecularEvents: 'Bivio trascrizionale: Blimp-1/XBP-1 (Plasmacellule LLPC) vs BACH2 (Cellule B Memoria) vs re-induzione di CXCR4/Bcl-6 (Riciclo per ulteriori cicli).',
    description: 'I cloni salvati con segnali prolungati attivano Blimp-1 diventando plasmacellule a lunga vita (LLPC) dirette al midollo osseo. I cloni con affinità moderata o segnali intermedi esprimono BACH2 diventando cellule B memoria. Altri rientrano nella Zona Scura per ulteriori cicli di affinamento.',
    highlightGene: 'Blimp-1 vs BACH2 vs CXCR4 Re-induction'
  }
];

export const InteractiveGerminalCenterSimulator: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(1);
  const [cloneAffinity, setCloneAffinity] = useState<'low' | 'medium' | 'high' | 'autoreactive'>('high');
  const [hasCd40lSignal, setHasCd40lSignal] = useState<boolean>(true);
  const [isAidActive, setIsAidActive] = useState<boolean>(true);

  const currentStep = GC_STEPS[currentStepIndex];

  // Fate evaluation based on interactive parameters
  const evaluateFate = () => {
    if (!isAidActive) {
      return {
        outcome: 'Nessuna Maturazione di Affinità né Class Switch',
        badge: 'HIGM Tipo 2 (Deficit AID)',
        badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
        detail: 'In assenza di AID, i centroblasti proliferano ma non possono mutare i domini variabili né operare rotture a doppio filamento per il CSR. Il centro germinativo diventa iperplastico e gigante, ma produce solo IgM non mutate.'
      };
    }
    if (!hasCd40lSignal) {
      return {
        outcome: 'Apoptosi Massiva di tutti i Centrociti (Assenza di GC maturi)',
        badge: 'HIGM Tipo 1 (Deficit CD40L)',
        badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
        detail: 'Senza il segnale di salvataggio CD40L dai linfociti Tfh, nessun centrocita riceve il segnale anti-apoptotico né induce Blimp-1. I centri germinativi collassano completamente e non si formano plasmacellule ad alta affinità.'
      };
    }
    if (cloneAffinity === 'low') {
      return {
        outcome: 'Morte Apoptotica per "Neglect" (Fagocitosi macrofagica)',
        badge: 'Morte Fisiologica (~90% cloni)',
        badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
        detail: 'Il clone a bassa affinità viene battuto nella competizione con i cloni ad alta affinità per l’antigene sulle FDC. Non riesce a presentare quantità sufficiente di peptidi su MHC-II, non ingaggia i Tfh e muore per apoptosi entro poche ore, fagocitato dai macrofagi a corpi tingibili.'
      };
    }
    if (cloneAffinity === 'autoreactive') {
      return {
        outcome: 'Eliminazione per Mancanza di Tfh Helper Autoreattivi',
        badge: 'Tolleranza Periferica B',
        badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
        detail: 'Se una mutazione somatica casuale genera per errore un BCR autoreattivo verso un antigene self esposto nei tessuti, il centrocita internalizza l’antigene self ma NON trova alcun Tfh compatibile (poiché i T autoreattivi sono stati eliminati nel timo per selezione negativa). Privo di aiuto T, il clone muore rapidamente.'
      };
    }
    if (cloneAffinity === 'medium') {
      return {
        outcome: 'Riciclo nella Zona Scura o Differenziamento in B Memoria',
        badge: 'Cellula B Memoria / Riciclo GC',
        badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
        detail: 'Riceve un segnale sufficiente a sopravvivere. Up-regola CXCR4 per rientrare nella Zona Scura e tentare un ulteriore round di ipermutazione, oppure esprime il fattore BACH2 diventando una cellula B memoria quiescente.'
      };
    }
    return {
      outcome: 'Differenziamento Terminale in Plasmacellula a Lunga Vita (LLPC)',
      badge: 'Super-Selettore di Affinità',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      detail: 'Massima affinità (Ka sub-nanomolare). Estrae vigorosamente l’antigene dalle FDC, monopolizza i Tfh, riceve fortissimi segnali CD40L e IL-21, induce alti livelli di IRF4 e Blimp-1. Silenzia Pax5 e Bcl-6, attiva XBP-1, up-regola CXCR4 e migra verso le nicchie midollari secernendo anticorpi ad alta affinità per decenni.'
    };
  };

  const fateResult = evaluateFate();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-[11px] font-mono tracking-wider uppercase text-cyan-300 font-semibold bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800/80">
              Simulatore Dinamico 3D della Microarchitettura Linfonodale
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-2 text-white flex items-center gap-2">
              <Layers className="w-6 h-6 text-cyan-400" />
              La Reazione del Centro Germinativo (Germinal Center Reaction)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Esplora la dicotomia funzionale tra la <strong>Zona Scura</strong> (proliferazione e ipermutazione somatica SHM)
              e la <strong>Zona Chiara</strong> (competizione su FDC e selezione darwiniana mediata da Tfh).
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentStepIndex(1);
              setCloneAffinity('high');
              setHasCd40lSignal(true);
              setIsAidActive(true);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-slate-100 rounded-lg transition-colors border border-white/10"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reimposta
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        {/* Step Sequencer Tabs */}
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 font-mono">
            Fasi Temporali della Reazione Germinativa:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {GC_STEPS.map((s, idx) => (
              <button
                key={s.stepNumber}
                onClick={() => setCurrentStepIndex(idx)}
                className={`p-2.5 text-left rounded-xl border transition-all text-xs flex flex-col justify-between ${
                  currentStepIndex === idx
                    ? 'border-indigo-600 bg-indigo-50/70 text-indigo-950 ring-2 ring-indigo-500/20 shadow-xs'
                    : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold font-mono text-[11px] text-slate-500">#{s.stepNumber}</span>
                  <span
                    className={`text-[9px] font-semibold px-1.5 py-0.5 rounded uppercase ${
                      s.zone === 'dark'
                        ? 'bg-indigo-200 text-indigo-900'
                        : s.zone === 'light'
                        ? 'bg-amber-200 text-amber-950'
                        : s.zone === 'output'
                        ? 'bg-emerald-200 text-emerald-950'
                        : 'bg-slate-200 text-slate-800'
                    }`}
                  >
                    {s.zone === 'dark' ? 'Scura' : s.zone === 'light' ? 'Chiara' : s.zone === 'output' ? 'Uscita' : 'Pre-GC'}
                  </span>
                </div>
                <span className="font-semibold line-clamp-2 leading-tight text-slate-900">{s.title.replace(/^\d+\.\s*/, '')}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Visual Map of the Germinal Center */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Diagram: 2 Zones */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-5 border border-slate-800 relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800 font-mono">
              <span className="flex items-center gap-1.5 text-slate-200">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                Architettura del Follicolo Linfatico Secondario
              </span>
              <span className="text-[11px] text-slate-400">Gradiente: CXCL12 (Scura) vs CXCL13 (Chiara)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              {/* Dark Zone representation */}
              <div
                className={`rounded-xl p-4 border transition-all ${
                  currentStep.zone === 'dark'
                    ? 'border-indigo-400 bg-indigo-950/80 ring-2 ring-indigo-400/40'
                    : 'border-slate-800 bg-slate-900/60 opacity-80'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 font-mono">
                    ZONA SCURA (Dark Zone)
                  </span>
                  <span className="text-[10px] bg-indigo-900/80 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700 font-mono">
                    CXCR4^high
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 mb-2">
                  Densa popolazione di <strong>Centroblasti</strong> in mitosi rapida (raddoppio ogni 6-12 ore).
                </p>
                <div className="space-y-1 text-[11px] font-mono text-slate-400 bg-black/40 p-2.5 rounded-lg border border-slate-800/80">
                  <div className="text-cyan-300 font-semibold">• Evento chiave: Ipermutazione Somatica (SHM)</div>
                  <div className="text-amber-300">• Enzima catalitico: AID (AICDA)</div>
                  <div className="text-slate-300">• Bersaglio: Esone V(D)J (CDR1, CDR2, CDR3)</div>
                  <div className="text-indigo-300">• Chemochina attraente: CXCL12</div>
                </div>
              </div>

              {/* Light Zone representation */}
              <div
                className={`rounded-xl p-4 border transition-all ${
                  currentStep.zone === 'light'
                    ? 'border-amber-400 bg-amber-950/40 ring-2 ring-amber-400/40'
                    : 'border-slate-800 bg-slate-900/60 opacity-80'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300 font-mono">
                    ZONA CHIARA (Light Zone)
                  </span>
                  <span className="text-[10px] bg-amber-900/80 text-amber-200 px-2 py-0.5 rounded border border-amber-700 font-mono">
                    CXCR5^high
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 mb-2">
                  <strong>Centrociti</strong> a contatto con la rete di <strong>FDC</strong> e <strong>Linfociti Tfh</strong>.
                </p>
                <div className="space-y-1 text-[11px] font-mono text-slate-400 bg-black/40 p-2.5 rounded-lg border border-slate-800/80">
                  <div className="text-amber-300 font-semibold">• Evento chiave: Selezione Darwiniana dell’Affinità</div>
                  <div className="text-cyan-300">• Presentante: FDC (antigene intatto su CR1/CR2)</div>
                  <div className="text-emerald-300">• Salvataggio: Tfh (CD40L + IL-21)</div>
                  <div className="text-rose-400">• Esito fallito: Apoptosi spontanea (&gt;90%)</div>
                </div>
              </div>
            </div>

            {/* Bottom summary in diagram */}
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>
                  <strong>Stato attuale clone:</strong> {currentStep.cellType}
                </span>
              </span>
              <span className="font-mono text-cyan-300 text-[11px]">{currentStep.highlightGene}</span>
            </div>
          </div>

          {/* Right Details Panel: Description of current selected step */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider font-mono">
                  Dettagli Molecolari Passo #{currentStep.stepNumber}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Fase {currentStepIndex + 1} di {GC_STEPS.length}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{currentStep.title}</h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">{currentStep.description}</p>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs space-y-2 mb-4">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-500" />
                  Cascata Molecolare Attiva:
                </div>
                <div className="text-slate-600 font-mono text-[11px] leading-relaxed">
                  {currentStep.molecularEvents}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-200">
              <button
                disabled={currentStepIndex === 0}
                onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-200 text-slate-700 hover:bg-slate-300 disabled:opacity-40 transition-colors"
              >
                ← Fase Precedente
              </button>
              <button
                disabled={currentStepIndex === GC_STEPS.length - 1}
                onClick={() => setCurrentStepIndex((prev) => Math.min(GC_STEPS.length - 1, prev + 1))}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40 transition-colors flex items-center gap-1"
              >
                <span>Fase Successiva</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Mutation & Selection Sandbox */}
        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-rose-500" />
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Laboratorio Interattivo di Selezione Clonale & Mutazioni
              </h4>
            </div>
            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
              Modifica i parametri e osserva il destino finale del clone
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Control 1: Clone Affinity */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Affinità acquisita dal BCR con SHM:
              </label>
              <select
                value={cloneAffinity}
                onChange={(e) => setCloneAffinity(e.target.value as any)}
                className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2 font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              >
                <option value="high">Altissima Affinità (Ka &gt; 10^9 M^-1)</option>
                <option value="medium">Affinità Moderata / Invariata</option>
                <option value="low">Bassa Affinità / Mutazione Deleteria</option>
                <option value="autoreactive">Mutazione Autoreattiva verso Self</option>
              </select>
            </div>

            {/* Control 2: CD40L Signal from Tfh */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Segnale Tfh CD40L:CD40:
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setHasCd40lSignal(true)}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all ${
                    hasCd40lSignal
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  Fisiologico (CD40L+)
                </button>
                <button
                  onClick={() => setHasCd40lSignal(false)}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all ${
                    !hasCd40lSignal
                      ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  Deficit (HIGM-1)
                </button>
              </div>
            </div>

            {/* Control 3: AID Activity */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Attività Enzima AID (AICDA):
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAidActive(true)}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all ${
                    isAidActive
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  Attivo (SHM + CSR)
                </button>
                <button
                  onClick={() => setIsAidActive(false)}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all ${
                    !isAidActive
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  Spento (HIGM-2)
                </button>
              </div>
            </div>
          </div>

          {/* Fate Result Box */}
          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
                Esito Finale della Prova Selettiva:
              </span>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${fateResult.badgeColor}`}>
                {fateResult.badge}
              </span>
            </div>
            <div className="text-sm font-bold text-slate-900 mb-1">{fateResult.outcome}</div>
            <p className="text-xs text-slate-600 leading-relaxed">{fateResult.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
