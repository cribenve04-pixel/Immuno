import React, { useState } from 'react';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  Volume2,
  Shield,
  Sparkles,
  AlertCircle,
  XCircle,
  HeartPulse,
  Pill,
  Maximize2,
  X,
  Dna,
  Zap
} from 'lucide-react';
import { IMAGES } from '../data/imageAssets';
import { useTtsInteractive } from '../hooks/useTtsInteractive';

type SimulationMode = 'rescue_editing' | 'clonal_deletion' | 'anergy' | 'btk_block';

export const InteractiveBcellToleranceSimulator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [simMode, setSimMode] = useState<SimulationMode>('rescue_editing');
  const [editingAttempt, setEditingAttempt] = useState<number>(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const { explainState, explainWhatIf } = useTtsInteractive();

  const steps = [
    {
      num: 1,
      title: "1. 1° Checkpoint: Assemblaggio del Pre-BCR",
      desc: "Nello stadio Large Pre-B, la catena pesante μ appena ricombinata si associa alle catene invarianti surrogato VpreB e λ5 e al dimero Igα/Igβ, formando il Pre-BCR.",
      molecularDetails: "Catena μ + Catena leggera surrogato (VpreB + λ5) + Igα/Igβ (CD79a/b) sulla membrana plasmatica."
    },
    {
      num: 2,
      title: "2. Segnale Tonico & Esclusione Allelica",
      desc: "Il Pre-BCR genera un segnale tonico ligando-indipendente mediato da Btk e Syk. Questo segnale induce proliferazione clonale (5-6 divisioni) e spegne RAG, bloccando il riarrangiamento dell'altro allele IgH (esclusione allelica).",
      molecularDetails: "Tirosin-chinasi Btk e Syk attive · Degradazione proteasomiale di RAG2 · Espansione clonale di Pre-B."
    },
    {
      num: 3,
      title: "3. 2° Checkpoint: Saggio di Autoreattività Midollare",
      desc: "Nello stadio di linfocita B immaturo, mIgM completa (μ + catena leggera κ o λ) viene saggiata contro gli auto-antigeni stromali del microambiente midollare.",
      molecularDetails: "mIgM completa · Riconoscimento di autoantigeni multivalenti stromali ad alta affinità."
    },
    {
      num: 4,
      title: "4. Editing Recettoriale: Riaccensione di RAG",
      desc: "Il forte cross-linking da auto-antigene impedisce lo spegnimento di RAG1/RAG2. La cellula riarrangia i segmenti Vκ-Jκ a monte o passa al locus λ per sostituire la catena leggera autoreattiva.",
      molecularDetails: "Riattivazione di RAG1/RAG2 · Taglio del DNA al locus della catena leggera · Fino a 4 tentativi (κ allele 1 e 2, poi λ allele 1 e 2)."
    },
    {
      num: 5,
      title: "5. Destino Clonale Finale: Salvataggio vs Delezione",
      desc: "Se l'editing genera una catena leggera non-autoreattiva, il linfocita B immaturo viene salvato e migra nella milza come cellula B transizionale (T1/T2 dipendente da BAFF). Se fallisce, va incontro a morte per apoptosi (delezione clonale).",
      molecularDetails: "Successo editing: sopravvivenza e asse BAFF-R · Fallimento editing: attivazione caspasi e fagocitosi macrofagica."
    }
  ];

  const handleSelectStep = (sNum: number) => {
    setCurrentStep(sNum);
  };

  const handleSpeakCurrentStep = () => {
    const target = steps.find(s => s.num === currentStep);
    if (target) {
      if (simMode === 'btk_block' && currentStep === 2) {
        explainWhatIf(
          "la tirosin-chinasi Btk è mutata o assente come nell'agammaglobulinemia di Bruton XLA",
          "il Pre-BCR non trasduce il segnale tonico di sopravvivenza, le cellule pre-B muoiono nel midollo e non si formano linfociti B maturi"
        );
      } else if (simMode === 'clonal_deletion' && currentStep === 5) {
        explainWhatIf(
          "tutti e quattro i tentativi di editing recettoriale sui loci kappa e lambda risultano non produttivi o ancora autoreattivi",
          "il linfocita B immaturo attiva la cascata apoptotica mitocondriale e viene eliminato per delezione clonale dai macrofagi midollari"
        );
      } else {
        explainState(target.title, target.desc);
      }
    }
  };

  const handlePlayCycle = () => {
    setIsPlaying(true);
    let s = 1;
    setCurrentStep(1);
    explainState(steps[0].title, steps[0].desc);

    const interval = setInterval(() => {
      s++;
      if (s > 5) {
        clearInterval(interval);
        setIsPlaying(false);
      } else {
        setCurrentStep(s);
        const curr = steps[s - 1];
        if (curr) {
          explainState(curr.title, curr.desc);
        }
      }
    }, 4200);
  };

  const spokenOverview = "Simulatore dei checkpoint ontogenetici del linfocita B nel midollo osseo. Al primo checkpoint, la catena pesante mu si associa a VpreB e lambda5 formando il Pre-BCR, che invia un segnale tonico di sopravvivenza Btk-dipendente garantendo l'esclusione allelica. Al secondo checkpoint, il recettore IgM immaturo incontra gli autoantigeni: se autoreattivo ad alta affinità, riattiva RAG per l'editing recettoriale della catena leggera, sostituendo kappa con lambda prima di andare incontro ad apoptosi per delezione clonale.";

  return (
    <div
      data-speech-text={spokenOverview}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden my-8 shadow-xs"
    >
      {/* Top Header & Controls */}
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-700 font-semibold">
            Simulatore di Sviluppo &amp; Tolleranza Molecolare
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-0.5">
            Maturazione Linfociti B: Checkpoint Pre-BCR, Esclusione Allelica ed Editing Recettoriale
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Dalla catena surrogato VpreB/λ5 e segnale tonico Btk alla selezione centrale e salvataggio via switch κ → λ.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap print:hidden">
          <button
            onClick={handleSpeakCurrentStep}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-white border border-emerald-300 text-emerald-800 hover:bg-emerald-50 transition-colors shadow-2xs cursor-pointer"
            title="Ascolta spiegazione vocale della fase corrente"
          >
            <Volume2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Ascolta Fase</span>
          </button>
          <button
            onClick={handlePlayCycle}
            disabled={isPlaying}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-emerald-700 text-white hover:bg-emerald-800 disabled:opacity-50 transition-colors shadow-xs cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isPlaying ? 'Animazione in Corso...' : 'Avvia Animazione Fasi'}</span>
          </button>
          <button
            onClick={() => { setCurrentStep(1); setIsPlaying(false); setSimMode('rescue_editing'); setEditingAttempt(1); }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Screen Interactive Stage */}
      <div className="print:hidden">
        {/* Step Buttons Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-b border-slate-200 divide-x divide-slate-200 text-xs font-medium">
        {steps.map((st) => (
          <button
            key={st.num}
            onClick={() => handleSelectStep(st.num)}
            className={`p-3 text-left transition-colors flex items-center justify-between cursor-pointer ${
              currentStep === st.num
                ? 'bg-emerald-50 text-emerald-900 border-b-2 border-emerald-600 font-semibold'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span className="truncate">{st.title.split('.')[1]}</span>
            {currentStep === st.num && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 ml-1" />}
          </button>
        ))}
      </div>

      {/* Stage Layout: Left Vector SVG (7 cols) + Right Illustration & Controls (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200">
        {/* Left Column: Interactive Vector Diagram */}
        <div className="lg:col-span-7 p-5 bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden select-none">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
            <span className="flex items-center gap-1.5 text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Fase {currentStep}: {steps[currentStep - 1].title.split('.')[1]}
            </span>
            <span className="text-[11px] text-amber-300">
              {currentStep <= 2 ? '1° Checkpoint: Large Pre-B' : '2° Checkpoint: Immature B'}
            </span>
          </div>

          {/* SVG Canvas (680x440) */}
          <div className="w-full py-2 flex items-center justify-center">
            <svg viewBox="0 0 680 440" className="w-full h-auto max-w-[620px]">
              <defs>
                <linearGradient id="preBMemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="50%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <linearGradient id="dnaRecombGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
                <filter id="emeraldGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
                <filter id="amberGlowB" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
              </defs>

              {/* Compartment Labels */}
              <text x="25" y="25" fill="#94a3b8" fontSize="10" fontFamily="monospace" fontWeight="bold">
                {currentStep >= 3 ? 'MICROAMBIENTE MIDOLLARE / CELLULE STROMALI' : 'SPAZIO EXTRACELLULARE (MIDOLLO OSSEO)'}
              </text>
              <text x="25" y="145" fill="#64748b" fontSize="10" fontFamily="monospace" fontWeight="bold">
                CITOPLASMA DEL LINFOCITA B (PRE-B / IMMATURO)
              </text>

              {/* Lipid Bilayer Membrane */}
              <rect x="0" y="80" width="680" height="22" rx="4" fill="url(#preBMemGrad)" stroke="#475569" strokeWidth="1.5" />
              <text x="560" y="95" fill="#94a3b8" fontSize="9" fontFamily="monospace">Membrana Plasmatica</text>

              {/* STEPS 1 & 2: PRE-BCR STAGE (Large Pre-B Cell) */}
              {currentStep <= 2 && (
                <g transform="translate(240, 20)">
                  {/* Heavy chain mu dimer */}
                  <g>
                    {/* Left Heavy chain mu */}
                    <path d="M 50 15 L 30 5 M 50 15 L 50 65 L 50 85" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" />
                    {/* Right Heavy chain mu */}
                    <path d="M 70 15 L 90 5 M 70 15 L 70 65 L 70 85" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" />
                    <text x="60" y="-4" fill="#38bdf8" fontSize="8.5" fontWeight="bold" textAnchor="middle">Catena Pesante μ (Riarrangiata)</text>
                  </g>

                  {/* Surrogate Light Chains (VpreB + λ5) */}
                  <g filter="url(#amberGlowB)">
                    {/* Left VpreB and λ5 */}
                    <path d="M 22 25 L 30 5 L 42 15" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
                    <text x="12" y="15" fill="#fbbf24" fontSize="7" fontWeight="bold">VpreB</text>

                    {/* Right VpreB and λ5 */}
                    <path d="M 98 25 L 90 5 L 78 15" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
                    <text x="96" y="15" fill="#fbbf24" fontSize="7" fontWeight="bold">λ5</text>
                  </g>

                  {/* Igα and Igβ (CD79a/b) Signaling Subunits */}
                  <g transform="translate(30, 25)">
                    <path d="M 0 0 L 0 40 L 0 95" stroke="#ec4899" strokeWidth="3.5" strokeLinecap="round" />
                    <text x="-4" y="-2" fill="#f472b6" fontSize="6.5">Igα</text>
                    <path d="M 60 0 L 60 40 L 60 95" stroke="#f43f5e" strokeWidth="3.5" strokeLinecap="round" />
                    <text x="62" y="-2" fill="#fb7185" fontSize="6.5">Igβ</text>
                    {/* ITAM boxes */}
                    <rect x="-6" y="65" width="12" height="25" rx="2" fill="#831843" />
                    <rect x="54" y="65" width="12" height="25" rx="2" fill="#881337" />
                  </g>

                  {/* Tonic Signal via Btk and Syk (Step 2) */}
                  {currentStep === 2 && (
                    <g filter="url(#emeraldGlow)" transform="translate(15, 125)">
                      <rect
                        x="0"
                        y="0"
                        width="45"
                        height="26"
                        rx="4"
                        fill={simMode === 'btk_block' ? '#7f1d1d' : '#059669'}
                        stroke={simMode === 'btk_block' ? '#ef4444' : '#34d399'}
                        strokeWidth="1.5"
                      />
                      <text x="22" y="16" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">
                        {simMode === 'btk_block' ? 'Btk Mutata' : 'Btk Attiva'}
                      </text>

                      <rect x="52" y="0" width="45" height="26" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
                      <text x="74" y="16" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">Syk</text>

                      {simMode !== 'btk_block' && (
                        <g>
                          <circle cx="22" cy="32" r="4.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                          <text x="22" y="35" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">P</text>
                          <text x="50" y="46" fill="#6ee7b7" fontSize="8" fontWeight="bold" textAnchor="middle">
                            Segnale Tonico di Sopravvivenza
                          </text>
                        </g>
                      )}
                    </g>
                  )}
                </g>
              )}

              {/* STEPS 3, 4, 5: 2° CHECKPOINT (Immature B Cell with complete mIgM) */}
              {currentStep >= 3 && (
                <g transform="translate(240, 10)">
                  {/* Bone marrow stromal self-antigen (top) */}
                  {simMode !== 'anergy' ? (
                    <g filter="url(#amberGlowB)">
                      <rect x="25" y="0" width="70" height="18" rx="4" fill="#b45309" stroke="#fcd34d" strokeWidth="1.5" />
                      <text x="60" y="12" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">
                        Auto-Antigene Multivalente
                      </text>
                    </g>
                  ) : (
                    <g>
                      <circle cx="60" cy="10" r="8" fill="#eab308" stroke="#ffffff" strokeWidth="1" />
                      <text x="60" y="13" fill="#713f12" fontSize="6.5" fontWeight="bold" textAnchor="middle">Ag Solubile</text>
                    </g>
                  )}

                  {/* Complete mIgM (Heavy chain + Light chain) */}
                  <g transform="translate(0, 15)">
                    {/* Heavy chains */}
                    <path d="M 50 15 L 30 5 M 50 15 L 50 65 L 50 85" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" />
                    <path d="M 70 15 L 90 5 M 70 15 L 70 65 L 70 85" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" />

                    {/* Light chains (κ or λ) */}
                    {/* When rescued at step 5 or editing at step 4 */}
                    <g>
                      <path
                        d="M 22 25 L 30 5 L 42 15"
                        stroke={currentStep >= 4 ? '#10b981' : '#ec4899'}
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 98 25 L 90 5 L 78 15"
                        stroke={currentStep >= 4 ? '#10b981' : '#ec4899'}
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <text x="60" y="3" fill={currentStep >= 4 ? '#34d399' : '#f472b6'} fontSize="8" fontWeight="bold" textAnchor="middle">
                        {currentStep >= 4 ? 'Catena Leggera λ (Editing Riuscito)' : 'Catena Leggera κ (Autoreattiva)'}
                      </text>
                    </g>
                  </g>
                </g>
              )}

              {/* RAG1 / RAG2 ENZYME DYNAMICS IN CYTOSOL / NUCLEUS */}
              {/* At Step 2: RAG shutdown (allelic exclusion) */}
              {currentStep === 2 && simMode !== 'btk_block' && (
                <g transform="translate(480, 130)">
                  <rect x="0" y="0" width="170" height="50" rx="6" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
                  <text x="85" y="16" fill="#94a3b8" fontSize="8" fontWeight="bold" textAnchor="middle">
                    ESCLUSIONE ALLELICA IgH
                  </text>
                  <text x="85" y="30" fill="#f87171" fontSize="7.5" textAnchor="middle">
                    Spegnimento di RAG1/RAG2
                  </text>
                  <text x="85" y="42" fill="#cbd5e1" fontSize="7" textAnchor="middle">
                    Blocco del 2° allele della catena pesante
                  </text>
                </g>
              )}

              {/* At Step 4: RAG REACTIVATION FOR RECEPTOR EDITING */}
              {currentStep === 4 && (
                <g filter="url(#emeraldGlow)" transform="translate(460, 130)">
                  <rect x="0" y="0" width="195" height="56" rx="6" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
                  <text x="97" y="16" fill="#a7f3d0" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                    EDITING RECETTORIALE ATTIVO
                  </text>
                  <text x="97" y="30" fill="#facc15" fontSize="7.5" fontWeight="bold" textAnchor="middle">
                    Riaccensione RAG1/RAG2 (Tentativo {editingAttempt}/4)
                  </text>
                  <text x="97" y="44" fill="#e2e8f0" fontSize="7" textAnchor="middle">
                    {editingAttempt <= 2 ? 'Ricombinazione segmenti Vκ-Jκ interni' : 'Inattivazione κ e riarrangiamento Locus λ'}
                  </text>
                </g>
              )}

              {/* NUCLEAR ENVELOPE & NUCLEAR PORES (Bottom) */}
              <path d="M 0 310 Q 340 270 680 310 L 680 440 L 0 440 Z" fill="#090d16" stroke="#334155" strokeWidth="1.5" />
              <text x="340" y="420" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
                NUCLEO CELLULARE (Loci Genici IgH su Cr14, Igκ su Cr2, Igλ su Cr22)
              </text>

              {/* Nuclear Pore Complexes */}
              <g transform="translate(300, 275)">
                <ellipse cx="20" cy="8" rx="20" ry="7" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />
                <text x="20" y="24" fill="#7dd3fc" fontSize="8" textAnchor="middle">Poro Nucleare (NPC)</text>
              </g>

              {/* STEP 5 OUTCOMES IN NUCLEUS & SURVIVAL */}
              {currentStep === 5 && (
                <g transform="translate(200, 330)">
                  {simMode === 'rescue_editing' && (
                    <g filter="url(#emeraldGlow)">
                      <rect x="0" y="0" width="280" height="42" rx="6" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
                      <text x="140" y="16" fill="#a7f3d0" fontSize="9" fontWeight="bold" textAnchor="middle">
                        SALVATAGGIO CLONALE &amp; SELEZIONE POSITIVA
                      </text>
                      <text x="140" y="32" fill="#ffffff" fontSize="8" textAnchor="middle">
                        Espressione di IgM non-autoreattiva · Transizione alla milza (Asse BAFF-R)
                      </text>
                    </g>
                  )}

                  {simMode === 'clonal_deletion' && (
                    <g>
                      <rect x="0" y="0" width="280" height="42" rx="6" fill="#7f1d1d" stroke="#f87171" strokeWidth="1.5" />
                      <text x="140" y="16" fill="#fecaca" fontSize="9" fontWeight="bold" textAnchor="middle">
                        DELEZIONE CLONALE (APOPTOSI)
                      </text>
                      <text x="140" y="32" fill="#ffffff" fontSize="8" textAnchor="middle">
                        Editing fallito su κ e λ · Attivazione Caspasi-9/3 ed eliminazione macrofagica
                      </text>
                    </g>
                  )}

                  {simMode === 'anergy' && (
                    <g>
                      <rect x="0" y="0" width="280" height="42" rx="6" fill="#78350f" stroke="#fbbf24" strokeWidth="1.5" />
                      <text x="140" y="16" fill="#fef3c7" fontSize="9" fontWeight="bold" textAnchor="middle">
                        ANERGIA CLONALE PERIFERICA
                      </text>
                      <text x="140" y="32" fill="#ffffff" fontSize="8" textAnchor="middle">
                        Downregulation mIgM · Cellula refrattaria con emivita ridotta a pochi giorni
                      </text>
                    </g>
                  )}

                  {simMode === 'btk_block' && (
                    <g>
                      <rect x="0" y="0" width="280" height="42" rx="6" fill="#450a0a" stroke="#ef4444" strokeWidth="1.5" />
                      <text x="140" y="16" fill="#fee2e2" fontSize="9" fontWeight="bold" textAnchor="middle">
                        BLOCCO SVILUPPO PRE-B (MALATTIA DI BRUTON)
                      </text>
                      <text x="140" y="32" fill="#ffffff" fontSize="8" textAnchor="middle">
                        Mancato segnale di sopravvivenza tonico · Morte apoptotica nel midollo
                      </text>
                    </g>
                  )}
                </g>
              )}
            </svg>
          </div>

          {/* Molecular Detail Footer Banner */}
          <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs flex items-center justify-between mt-2">
            <span className="text-emerald-300 font-mono text-[11px]">
              Dettaglio Molecolare: {steps[currentStep - 1].molecularDetails}
            </span>
            <span className="text-slate-400 text-[10px]">
              Step {currentStep} di {steps.length}
            </span>
          </div>
        </div>

        {/* Right Column: High-Res Medical Illustration HUD & Checkpoint Selectors (5 cols) */}
        <div className="lg:col-span-5 p-5 bg-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-200 space-y-4">
          {/* Micrograph Card */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Tavola Istologica / Vettoriale Ufficiale
              </span>
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="text-xs text-emerald-700 hover:text-emerald-800 font-medium flex items-center gap-1 cursor-pointer"
              >
                <Maximize2 className="w-3 h-3" />
                Ingrandisci
              </button>
            </div>

            <div
              onClick={() => setIsLightboxOpen(true)}
              className="relative rounded-lg overflow-hidden border border-slate-200 group cursor-pointer aspect-video bg-slate-950 shadow-inner"
            >
              <img
                src={IMAGES.bCellCheckpoints}
                alt="Checkpoint Pre-BCR, Editing Recettoriale e Tolleranza Centrale"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                <p className="text-[11px] text-white font-medium">
                  Pre-BCR (catena μ + VpreB/λ5), segnale tonico Btk, editing κ → λ e delezione clonale
                </p>
              </div>
            </div>
          </div>

          {/* Scenario Selectors */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-700 block">
              Simula Destino al 2° Checkpoint / Patologia:
            </span>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              <button
                onClick={() => { setSimMode('rescue_editing'); setCurrentStep(4); }}
                className={`p-2 rounded-md border text-left transition-all cursor-pointer ${
                  simMode === 'rescue_editing'
                    ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold ring-1 ring-emerald-300'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div className="text-[10px] uppercase font-bold text-emerald-700">1. Editing Riuscito</div>
                <div className="truncate text-[11px]">Salvataggio via Switch λ</div>
              </button>

              <button
                onClick={() => { setSimMode('clonal_deletion'); setCurrentStep(5); }}
                className={`p-2 rounded-md border text-left transition-all cursor-pointer ${
                  simMode === 'clonal_deletion'
                    ? 'bg-rose-50 border-rose-400 text-rose-900 font-semibold ring-1 ring-rose-300'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div className="text-[10px] uppercase font-bold text-rose-700">2. Delezione Clonale</div>
                <div className="truncate text-[11px]">Apoptosi (Editing Fallito)</div>
              </button>

              <button
                onClick={() => { setSimMode('anergy'); setCurrentStep(5); }}
                className={`p-2 rounded-md border text-left transition-all cursor-pointer ${
                  simMode === 'anergy'
                    ? 'bg-amber-50 border-amber-400 text-amber-900 font-semibold ring-1 ring-amber-300'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div className="text-[10px] uppercase font-bold text-amber-700">3. Anergia Periferica</div>
                <div className="truncate text-[11px]">Ag Solubile Monovalente</div>
              </button>

              <button
                onClick={() => { setSimMode('btk_block'); setCurrentStep(2); }}
                className={`p-2 rounded-md border text-left transition-all cursor-pointer ${
                  simMode === 'btk_block'
                    ? 'bg-purple-50 border-purple-400 text-purple-900 font-semibold ring-1 ring-purple-300'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div className="text-[10px] uppercase font-bold text-purple-700">4. Deficit BTK (XLA)</div>
                <div className="truncate text-[11px]">Blocco Pre-BCR Midollare</div>
              </button>
            </div>
          </div>

          {/* Editing Attempt Controller */}
          {simMode === 'rescue_editing' && (
            <div className="space-y-1.5 p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">Tentativi di Ricombinazione (Editing):</span>
                <span className="font-mono text-emerald-700 font-bold">Tentativo {editingAttempt} di 4</span>
              </div>
              <div className="grid grid-cols-4 gap-1 text-[10px] text-center font-mono font-medium">
                <button
                  onClick={() => setEditingAttempt(1)}
                  className={`p-1 rounded cursor-pointer ${editingAttempt === 1 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'}`}
                >
                  κ All. 1
                </button>
                <button
                  onClick={() => setEditingAttempt(2)}
                  className={`p-1 rounded cursor-pointer ${editingAttempt === 2 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'}`}
                >
                  κ All. 2
                </button>
                <button
                  onClick={() => setEditingAttempt(3)}
                  className={`p-1 rounded cursor-pointer ${editingAttempt === 3 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'}`}
                >
                  λ All. 1
                </button>
                <button
                  onClick={() => setEditingAttempt(4)}
                  className={`p-1 rounded cursor-pointer ${editingAttempt === 4 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'}`}
                >
                  λ All. 2
                </button>
              </div>
            </div>
          )}

          {/* Description Box */}
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700">
            {simMode === 'rescue_editing' && (
              <div>
                <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-700" />
                  Editing Recettoriale (Receptor Editing):
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                  La forte stimolazione da auto-antigene riattiva RAG1/RAG2. Il linfocita non muore subito: tenta di rimpiazzare la catena leggera κ autoreattiva con una nuova specificità, preservando la catena pesante μ.
                </p>
              </div>
            )}
            {simMode === 'clonal_deletion' && (
              <div>
                <div className="font-bold text-rose-900 flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 text-rose-700" />
                  Delezione Clonale per Apoptosi:
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-rose-700">
                  Se dopo 4 tentativi (entrambi gli alleli κ e λ) la cellula resta autoreattiva o produce un trascritto non-senso, interviene la via mitocondriale intrinseca (Bim/Bax) che la induce a suicidio apoptotico.
                </p>
              </div>
            )}
            {simMode === 'anergy' && (
              <div>
                <div className="font-bold text-amber-900 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                  Anergia Clonale:
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-amber-700">
                  Il legame con autoantigeni solubili a bassa valenza downregola il BCR e disaccoppia la segnalazione. La cellula circola ma è incapace di attivarsi e compete sfavorevolmente per il fattore di sopravvivenza BAFF nella milza.
                </p>
              </div>
            )}
            {simMode === 'btk_block' && (
              <div>
                <div className="font-bold text-purple-900 flex items-center gap-1.5">
                  <Dna className="w-3.5 h-3.5 text-purple-700" />
                  Arresto allo Stadio Pre-B (Malattia di Bruton / XLA):
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-purple-700">
                  Senza BTK, il Pre-BCR non può inviare il segnale tonico di sopravvivenza. Le cellule Large Pre-B non proliferano e vanno incontro a morte: il paziente non avrà linfociti B né plasmacellule nel sangue periferico.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>

      {/* Printable Unrolled Table of B Cell Ontogeny & Central Tolerance (A4 Format) */}
      <div className="hidden print:block p-6 border-t border-slate-200 bg-white">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4 font-mono flex items-center justify-between border-b border-slate-300 pb-2">
          <span>Stadi di Maturazione Linfocitaria B, Checkpoint Pre-BCR ed Editing Recettoriale (Srotolati)</span>
          <span className="text-slate-500 font-mono">5 Fasi Midollari</span>
        </div>

        <div className="space-y-4">
          {steps.map((st) => (
            <div key={st.num} className="p-4 rounded-lg border border-slate-300 bg-slate-50/60 break-inside-avoid space-y-2 text-xs">
              <div className="flex items-center justify-between font-bold text-slate-900 border-b border-slate-200 pb-1">
                <span className="text-sm text-emerald-900">{st.title}</span>
                <span className="font-mono text-[10px] text-slate-500">Ontogenesi B</span>
              </div>
              <p className="text-slate-800 leading-relaxed font-normal">{st.desc}</p>
              <div className="text-[11px] text-emerald-900 font-mono pt-1">
                <strong>Biochimica & Meccanismo:</strong> {st.molecularDetails}
              </div>
            </div>
          ))}
        </div>

        {/* Quadro Destini Clonali di Tolleranza Centrale */}
        <div className="mt-5 p-4 rounded-lg border border-slate-300 bg-slate-50 break-inside-avoid text-xs space-y-3">
          <div className="font-bold text-slate-900 font-mono uppercase tracking-wider">
            I Quattro Destini dei Linfociti B Immaturi Autoreattivi nel Midollo Osseo:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
            <div className="p-2.5 rounded bg-white border border-slate-200 space-y-1">
              <strong className="text-emerald-900 block font-bold">1. Editing Recettoriale (Receptor Editing)</strong>
              <p className="text-slate-700 leading-snug">
                Prima opzione fisiologica: RAG1/RAG2 non vengono spenti. Il clone riarrangia segmenti Vκ-Jκ a monte o passa al locus λ (fino a 4 tentativi totali: 2 alleli κ + 2 alleli λ) per sostituire la specificità autoreattiva.
              </p>
            </div>
            <div className="p-2.5 rounded bg-white border border-slate-200 space-y-1">
              <strong className="text-rose-900 block font-bold">2. Delezione Clonale (Apoptosi Centrale)</strong>
              <p className="text-slate-700 leading-snug">
                Se l&apos;editing fallisce o non elimina l&apos;alta affinità per autoantigeni multivalenti di membrana, si attivano i sensori pro-apoptotici (Bim) con cascata delle caspasi ed eliminazione fagocitaria nel midollo.
              </p>
            </div>
            <div className="p-2.5 rounded bg-white border border-slate-200 space-y-1">
              <strong className="text-amber-900 block font-bold">3. Anergia Funzionale</strong>
              <p className="text-slate-700 leading-snug">
                Incontro con autoantigeni solubili monovalenti a bassa affinità. Il BCR viene internalizzato parzialmente, la segnalazione si disaccoppia e la cellula migra in periferia ma muore rapidamente per deficit di BAFF.
              </p>
            </div>
            <div className="p-2.5 rounded bg-white border border-slate-200 space-y-1">
              <strong className="text-purple-900 block font-bold">4. Malattia di Bruton (Blocco da Deficit di Btk)</strong>
              <p className="text-slate-700 leading-snug">
                Senza tirosin-chinasi BTK, il Pre-BCR non genera il segnale tonico di sopravvivenza. Tutte le cellule pre-B muoiono nel midollo: agammaglobulinemia totale nel sangue e midollo ipoplastico.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-4 sm:p-6 text-white space-y-4">
              <h3 className="text-lg font-bold text-emerald-300">
                Ontogenesi dei Linfociti B: Checkpoint Pre-BCR, Editing Recettoriale e Tolleranza Centrale
              </h3>
              <div className="max-h-[70vh] overflow-auto rounded-lg">
                <img
                  src={IMAGES.bCellCheckpoints}
                  alt="B Cell Checkpoints Full Medical Illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tavola didattica ad alta definizione dei due grandi checkpoint midollari: a sinistra, lo stadio di Pre-B grande con catena pesante μ assemblata alla catena surrogato VpreB/λ5 e trasduzione tonica Btk-dipendente; a destra, lo stadio di linfocita B immaturo con editing recettoriale mediato da RAG (switch della catena leggera da κ a λ) e selezione negativa/delezione clonale in caso di autoreattività persistente.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
