import React, { useState } from 'react';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  Volume2,
  Shield,
  Zap,
  Activity,
  AlertCircle,
  Sparkles,
  Maximize2,
  X,
  Bug,
  Dna
} from 'lucide-react';
import { IMAGES } from '../data/imageAssets';
import { useTtsInteractive } from '../hooks/useTtsInteractive';

type VirusType = 'rna_flu' | 'dsrna_rota' | 'dna_hsv';

export const InteractiveAntiviralStateSimulator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedVirus, setSelectedVirus] = useState<VirusType>('rna_flu');
  const [activeArm, setActiveArm] = useState<'pkr' | 'oas' | 'mx'>('pkr');
  const [isInterferonopathy, setIsInterferonopathy] = useState<boolean>(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const { explainState, explainWhatIf } = useTtsInteractive();

  const steps = [
    {
      num: 1,
      title: "1. Sensing Virale & Rilascio di IFN-I",
      desc: "I sensori intracellulari (TLR3/7/8/9, RIG-I o cGAS-STING) rilevano acidi nucleici virali. Le cellule dendritiche plasmacitoidi (pDC) e le cellule infette secernono IFN-α e IFN-β per via paracrina e autocrina.",
      molecularDetails: "TLR endosomiali · Elicasi RIG-I/MDA-5 · Sintesi massiva di IFN-α/β (fino a 1000x nelle pDC)."
    },
    {
      num: 2,
      title: "2. Legame a IFNAR1/2 & Attivazione JAK1/Tyk2",
      desc: "L'interferone si lega al recettore eterodimerico IFNAR1/IFNAR2 sulla membrana cellulare. Le chinasi associate JAK1 e Tyk2 si autofosforilano a croce e fosforilano le tirosine recettoriali.",
      molecularDetails: "Eterodimero IFNAR1-IFNAR2 · Cross-fosforilazione JAK1/Tyk2 · Reclutamento SH2."
    },
    {
      num: 3,
      title: "3. Fosforilazione STAT1/STAT2 & Complesso ISGF3",
      desc: "STAT1 e STAT2 vengono reclutati sulle code recettoriali, fosforilati su tirosina e formano un eterodimero. A questo dimero si associa la subunità citoplasmatica IRF9, assemblando il trimero ISGF3.",
      molecularDetails: "Fosfo-STAT1 + Fosfo-STAT2 + IRF9 = ISGF3 (Interferon-Stimulated Gene Factor 3)."
    },
    {
      num: 4,
      title: "4. Traslocazione Nucleare & Promotore ISRE",
      desc: "Il complesso ISGF3 attraversa il complesso del poro nucleare (NPC) e si lega specificamente alla sequenza consenso ISRE (Interferon-Stimulated Response Element) nel DNA, inducendo oltre 300 geni antivirali (ISGs).",
      molecularDetails: "Attraversamento poro nucleare · Riconoscimento elemento ISRE su DNA · Trascrizione massiva di ISGs."
    },
    {
      num: 5,
      title: "5. Esecuzione Antivirale (PKR, OAS/RNasi L, Mx)",
      desc: "I prodotti genici ISG montano il blocco antivirale: PKR arresta la traduzione fosforilando eIF2α, OAS produce 2-5A che attiva RNasi L per degradare l'RNA, e le GTPasi Mx bloccano l'uncoating del capside.",
      molecularDetails: "PKR: blocco eIF2B · OAS: sintesi 2'-5' oligoadenilati · RNasi L: taglio RNA · Mx: trappola toroidale."
    }
  ];

  const handleSelectStep = (sNum: number) => {
    setCurrentStep(sNum);
  };

  const handleSpeakCurrentStep = () => {
    const target = steps.find(s => s.num === currentStep);
    if (target) {
      if (currentStep === 5) {
        explainWhatIf(
          "la cellula attiva contemporaneamente la chinasi PKR, l'enzima OAS con RNasi L e le GTPasi Mx",
          "la traduzione proteica viene bloccata, l'RNA virale viene degradato e l'assemblaggio del capside viene congelato meccanicamente"
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
    }, 4000);
  };

  const spokenOverview = "Simulatore interattivo dello stato antivirale indotto da interferoni di tipo I. Gli acidi nucleici virali inducono la secrezione di IFN-alfa e IFN-beta. Il legame a IFNAR1 e IFNAR2 attiva JAK1 e Tyk2, fosforilando STAT1 e STAT2 che formano con IRF9 il complesso eterotrimerico ISGF3. ISGF3 migra nel nucleo attraverso i pori nucleari e attiva l'elemento ISRE, inducendo PKR, OAS con RNasi L, e le GTPasi Mx.";

  return (
    <div
      data-speech-text={spokenOverview}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden my-8 shadow-xs"
    >
      {/* Top Header & Controls */}
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-purple-700 font-semibold">
            Simulatore di Segnalazione Molecolare
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-0.5">
            Induzione dello Stato Antivirale: Asse IFN-I, IFNAR, ISGF3 e Braccia Enzimatiche
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Dalla trasduzione JAK1/Tyk2-STAT1/STAT2-IRF9 al poro nucleare e all&apos;attivazione di PKR, OAS/RNasi L e Mx.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap print:hidden">
          <button
            onClick={handleSpeakCurrentStep}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-white border border-purple-300 text-purple-800 hover:bg-purple-50 transition-colors shadow-2xs cursor-pointer"
            title="Ascolta spiegazione vocale della fase corrente"
          >
            <Volume2 className="w-3.5 h-3.5 text-purple-700" />
            <span>Ascolta Fase</span>
          </button>
          <button
            onClick={handlePlayCycle}
            disabled={isPlaying}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-purple-700 text-white hover:bg-purple-800 disabled:opacity-50 transition-colors shadow-xs cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isPlaying ? 'Animazione in Corso...' : 'Avvia Animazione Fasi'}</span>
          </button>
          <button
            onClick={() => { setCurrentStep(1); setIsPlaying(false); setIsInterferonopathy(false); }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span>Reset</span>
          </button>
          <button
            onClick={() => setIsInterferonopathy(!isInterferonopathy)}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all border cursor-pointer ${
              isInterferonopathy
                ? 'bg-rose-100 text-rose-800 border-rose-300'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
            title="Simula Interferonopatia (es. Sindrome di Aicardi-Goutières: TREX1 mutato)"
          >
            <AlertCircle className={`w-3.5 h-3.5 ${isInterferonopathy ? 'text-rose-600' : 'text-slate-400'}`} />
            <span>{isInterferonopathy ? 'Interferonopatia: ATTIVA' : 'Simula Interferonopatia'}</span>
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
                ? 'bg-purple-50 text-purple-900 border-b-2 border-purple-600 font-semibold'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span className="truncate">{st.title.split('.')[1]}</span>
            {currentStep === st.num && <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 ml-1" />}
          </button>
        ))}
      </div>

      {/* Main Interactive Stage: Left SVG Diagram (7 cols) + Right Illustration & Controls (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200">
        {/* Left Column: Interactive Vector Diagram */}
        <div className="lg:col-span-7 p-5 bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden select-none">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
            <span className="flex items-center gap-1.5 text-purple-300">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              Fase {currentStep}: {steps[currentStep - 1].title.split('.')[1]}
            </span>
            <span>Target: IFNAR1/2 · JAK1/Tyk2 · ISGF3</span>
          </div>

          {/* SVG Canvas (680x440) */}
          <div className="w-full py-2 flex items-center justify-center">
            <svg viewBox="0 0 680 440" className="w-full h-auto max-w-[620px]">
              <defs>
                <linearGradient id="lipidMemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="50%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <linearGradient id="dnaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <filter id="purpleGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
                <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
              </defs>

              {/* Background labels */}
              <text x="25" y="30" fill="#94a3b8" fontSize="10" fontFamily="monospace" fontWeight="bold">SPAZIO EXTRACELLULARE</text>
              <text x="25" y="150" fill="#64748b" fontSize="10" fontFamily="monospace" fontWeight="bold">CITOSOL CELLULARE</text>

              {/* Lipid Bilayer Membrane */}
              <rect x="0" y="80" width="680" height="22" rx="4" fill="url(#lipidMemGrad)" stroke="#475569" strokeWidth="1.5" />
              <text x="560" y="95" fill="#94a3b8" fontSize="9" fontFamily="monospace">Doppio Strato Lipidico</text>

              {/* Viral Particle (top left) */}
              <g transform="translate(45, 15)">
                <circle cx="20" cy="20" r="16" fill="#ef4444" opacity="0.85" stroke="#fca5a5" strokeWidth="1.5" />
                {/* Viral spikes */}
                <path d="M 20 4 L 20 0 M 20 36 L 20 40 M 4 20 L 0 20 M 36 20 L 40 20 M 9 9 L 6 6 M 31 31 L 34 34 M 9 31 L 6 34 M 31 9 L 34 6" stroke="#fca5a5" strokeWidth="2" strokeLinecap="round" />
                <path d="M 12 18 Q 16 12 20 20 T 28 20" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                <text x="20" y="24" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">VIRUS</text>
              </g>

              {/* IFN-I LIGAND (IFN-α / IFN-β) */}
              {currentStep >= 1 && (
                <g filter="url(#purpleGlow)" transform={currentStep >= 2 ? "translate(290, 42)" : "translate(180, 30)"}>
                  <ellipse cx="25" cy="18" rx="22" ry="14" fill="#a855f7" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="25" y="21" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">IFN-α / β</text>
                  <text x="25" y="30" fill="#e9d5ff" fontSize="7" textAnchor="middle">Tipo I</text>
                </g>
              )}

              {/* IFNAR1 & IFNAR2 RECEPTOR CHAINS */}
              {/* IFNAR1 Chain */}
              <path
                d={currentStep >= 2 ? "M 290 45 L 290 80 L 290 170" : "M 260 45 L 260 80 L 260 170"}
                stroke={currentStep >= 2 ? '#c084fc' : '#94a3b8'}
                strokeWidth="6"
                strokeLinecap="round"
              />
              {/* IFNAR2 Chain */}
              <path
                d={currentStep >= 2 ? "M 340 45 L 340 80 L 340 170" : "M 370 45 L 370 80 L 370 170"}
                stroke={currentStep >= 2 ? '#c084fc' : '#94a3b8'}
                strokeWidth="6"
                strokeLinecap="round"
              />

              <text x={currentStep >= 2 ? 275 : 245} y="72" fill="#e9d5ff" fontSize="8" fontWeight="bold">IFNAR1</text>
              <text x={currentStep >= 2 ? 355 : 385} y="72" fill="#e9d5ff" fontSize="8" fontWeight="bold">IFNAR2</text>

              {/* TYK2 & JAK1 KINASES */}
              {/* Tyk2 on IFNAR1 */}
              <g transform={currentStep >= 2 ? "translate(262, 110)" : "translate(232, 110)"}>
                <rect x="0" y="0" width="24" height="32" rx="5" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" />
                <text x="12" y="20" fill="#78350f" fontSize="8" fontWeight="bold" textAnchor="middle">Tyk2</text>
                {currentStep >= 2 && (
                  <g>
                    <circle cx="-3" cy="8" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                    <text x="-3" y="11" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">P</text>
                  </g>
                )}
              </g>

              {/* JAK1 on IFNAR2 */}
              <g transform={currentStep >= 2 ? "translate(344, 110)" : "translate(374, 110)"}>
                <rect x="0" y="0" width="24" height="32" rx="5" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
                <text x="12" y="20" fill="#713f12" fontSize="8" fontWeight="bold" textAnchor="middle">JAK1</text>
                {currentStep >= 2 && (
                  <g>
                    <circle cx="27" cy="8" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                    <text x="27" y="11" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">P</text>
                  </g>
                )}
              </g>

              {/* Phosphorylated Tyrosines on Tails (Step 2+) */}
              {currentStep >= 2 && (
                <g>
                  <circle cx={currentStep >= 2 ? 290 : 260} cy="155" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                  <text x={currentStep >= 2 ? 290 : 260} y="158" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">P</text>
                  <circle cx={currentStep >= 2 ? 340 : 370} cy="155" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                  <text x={currentStep >= 2 ? 340 : 370} y="158" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">P</text>
                  <text x="315" y="167" fill="#f87171" fontSize="7" textAnchor="middle">pTyr docking</text>
                </g>
              )}

              {/* ISGF3 TRIMER COMPLEX DYNAMICS */}
              {/* Step 3: Docking to tails & assembly */}
              {currentStep === 3 && (
                <g filter="url(#purpleGlow)" transform="translate(250, 185)">
                  <rect x="0" y="0" width="34" height="22" rx="5" fill="#3b82f6" stroke="#93c5fd" />
                  <text x="17" y="14" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">STAT1</text>
                  <circle cx="17" cy="-2" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                  <text x="17" y="1" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">P</text>

                  <rect x="38" y="0" width="34" height="22" rx="5" fill="#06b6d4" stroke="#a5f3fc" />
                  <text x="55" y="14" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">STAT2</text>
                  <circle cx="55" cy="-2" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                  <text x="55" y="1" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">P</text>

                  <rect x="76" y="0" width="30" height="22" rx="5" fill="#a855f7" stroke="#f3e8ff" />
                  <text x="91" y="14" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">IRF9</text>
                  <text x="65" y="34" fill="#c084fc" fontSize="8" fontWeight="bold" textAnchor="middle">Assemblaggio Trimero ISGF3</text>
                </g>
              )}

              {/* NUCLEAR ENVELOPE & NUCLEAR PORES (Bottom Area) */}
              <path d="M 0 310 Q 340 270 680 310 L 680 440 L 0 440 Z" fill="#090d16" stroke="#334155" strokeWidth="1.5" />
              <text x="340" y="420" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">NUCLEO CELLULARE (DNA / Promotore ISRE)</text>

              {/* Nuclear Pore Complexes (NPC) */}
              <g transform="translate(295, 275)">
                <ellipse cx="20" cy="8" rx="20" ry="7" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />
                <rect x="3" y="2" width="6" height="12" rx="2" fill="#64748b" />
                <rect x="31" y="2" width="6" height="12" rx="2" fill="#64748b" />
                <text x="20" y="28" fill="#7dd3fc" fontSize="8" textAnchor="middle">Poro Nucleare (NPC)</text>
              </g>

              {/* ISGF3 Inside Nucleus Binding ISRE (Step 4 & 5) */}
              {currentStep >= 4 && (
                <g filter="url(#purpleGlow)" transform="translate(275, 330)">
                  <rect x="0" y="0" width="36" height="22" rx="5" fill="#3b82f6" stroke="#93c5fd" />
                  <text x="18" y="14" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">STAT1</text>

                  <rect x="40" y="0" width="36" height="22" rx="5" fill="#06b6d4" stroke="#a5f3fc" />
                  <text x="58" y="14" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">STAT2</text>

                  <rect x="80" y="0" width="32" height="22" rx="5" fill="#a855f7" stroke="#f3e8ff" />
                  <text x="96" y="14" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">IRF9</text>

                  <path d="M -20 30 L 135 30" stroke="url(#dnaGrad)" strokeWidth="4" strokeLinecap="round" />
                  <rect x="15" y="24" width="85" height="12" rx="2" fill="#facc15" opacity="0.8" />
                  <text x="57" y="33" fill="#713f12" fontSize="7.5" fontWeight="bold" textAnchor="middle">ISRE CONSENSUS</text>
                  <text x="57" y="48" fill="#4ade80" fontSize="8.5" fontWeight="bold" textAnchor="middle">Trascrizione di &gt;300 Geni ISG</text>
                </g>
              )}

              {/* STEP 5: THE 3 DOWNSTREAM EFFECTOR SYSTEMS (PKR, OAS, Mx) */}
              {currentStep === 5 && (
                <g transform="translate(480, 130)">
                  {/* PKR Branch */}
                  <g>
                    <rect x="0" y="0" width="180" height="42" rx="6" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" />
                    <circle cx="16" cy="21" r="10" fill="#6366f1" />
                    <text x="16" y="24" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">PKR</text>
                    <text x="34" y="17" fill="#e0e7ff" fontSize="8.5" fontWeight="bold">Blocco Sintesi Proteica</text>
                    <text x="34" y="30" fill="#a5b4fc" fontSize="7.5">eIF2α-P → Inibizione eIF2B</text>
                  </g>

                  {/* OAS / RNase L Branch */}
                  <g transform="translate(0, 52)">
                    <rect x="0" y="0" width="180" height="42" rx="6" fill="#083344" stroke="#22d3ee" strokeWidth="1.5" />
                    <circle cx="16" cy="21" r="10" fill="#06b6d4" />
                    <text x="16" y="24" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">OAS</text>
                    <text x="34" y="17" fill="#cffafe" fontSize="8.5" fontWeight="bold">Degradazione RNA Virale</text>
                    <text x="34" y="30" fill="#67e8f9" fontSize="7.5">2-5A → Dimeri di RNasi L</text>
                  </g>

                  {/* Mx GTPases Branch */}
                  <g transform="translate(0, 104)">
                    <rect x="0" y="0" width="180" height="42" rx="6" fill="#14532d" stroke="#4ade80" strokeWidth="1.5" />
                    <circle cx="16" cy="21" r="10" fill="#16a34a" />
                    <text x="16" y="24" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">MxA</text>
                    <text x="34" y="17" fill="#dcfce7" fontSize="8.5" fontWeight="bold">Intrappolamento Capside</text>
                    <text x="34" y="30" fill="#86efac" fontSize="7.5">Anelli toroidali su RNP virali</text>
                  </g>
                </g>
              )}
            </svg>
          </div>

          {/* Molecular Detail Footer Banner */}
          <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs flex items-center justify-between mt-2">
            <span className="text-purple-300 font-mono text-[11px]">
              Dettaglio Molecolare: {steps[currentStep - 1].molecularDetails}
            </span>
            <span className="text-slate-400 text-[10px]">
              Step {currentStep} di {steps.length}
            </span>
          </div>
        </div>

        {/* Right Column: High-Res Medical Illustration HUD & Effector Arms (5 cols) */}
        <div className="lg:col-span-5 p-5 bg-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-200 space-y-4">
          {/* Micrograph Card */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                Tavola Istologica / Vettoriale Ufficiale
              </span>
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="text-xs text-purple-700 hover:text-purple-800 font-medium flex items-center gap-1 cursor-pointer"
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
                src={IMAGES.antiviralState}
                alt="Via dell'Interferone di Tipo I e Stato Antivirale"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                <p className="text-[11px] text-white font-medium">
                  Cascata IFNAR1/2, JAK1-Tyk2, trimero ISGF3 e induzione di ISRE
                </p>
              </div>
            </div>
          </div>

          {/* Virus Trigger Selectors */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-700 block">
              Innesco Patogeno Simulato:
            </span>
            <div className="grid grid-cols-3 gap-1.5 text-xs">
              <button
                onClick={() => setSelectedVirus('rna_flu')}
                className={`p-2 rounded-md border text-center transition-all cursor-pointer ${
                  selectedVirus === 'rna_flu'
                    ? 'bg-purple-50 border-purple-400 text-purple-900 font-semibold ring-1 ring-purple-300'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div className="text-[10px] uppercase font-bold text-purple-700">Virus RNA</div>
                <div className="truncate text-[11px]">Influenza / RSV</div>
              </button>

              <button
                onClick={() => setSelectedVirus('dsrna_rota')}
                className={`p-2 rounded-md border text-center transition-all cursor-pointer ${
                  selectedVirus === 'dsrna_rota'
                    ? 'bg-cyan-50 border-cyan-400 text-cyan-900 font-semibold ring-1 ring-cyan-300'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div className="text-[10px] uppercase font-bold text-cyan-700">Virus dsRNA</div>
                <div className="truncate text-[11px]">Rotavirus / Reo</div>
              </button>

              <button
                onClick={() => setSelectedVirus('dna_hsv')}
                className={`p-2 rounded-md border text-center transition-all cursor-pointer ${
                  selectedVirus === 'dna_hsv'
                    ? 'bg-indigo-50 border-indigo-400 text-indigo-900 font-semibold ring-1 ring-indigo-300'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div className="text-[10px] uppercase font-bold text-indigo-700">Virus DNA</div>
                <div className="truncate text-[11px]">HSV / CMV</div>
              </button>
            </div>
          </div>

          {/* The 3 Downstream Arms Switcher */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-700 block">
              Dissezione Enzimatica ISG:
            </span>
            <div className="grid grid-cols-3 gap-1 text-[11px]">
              <button
                onClick={() => setActiveArm('pkr')}
                className={`p-1.5 rounded-md text-center font-medium border cursor-pointer ${
                  activeArm === 'pkr'
                    ? 'bg-purple-700 text-white border-purple-800'
                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                }`}
              >
                1. Asse PKR
              </button>
              <button
                onClick={() => setActiveArm('oas')}
                className={`p-1.5 rounded-md text-center font-medium border cursor-pointer ${
                  activeArm === 'oas'
                    ? 'bg-cyan-700 text-white border-cyan-800'
                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                }`}
              >
                2. Asse OAS
              </button>
              <button
                onClick={() => setActiveArm('mx')}
                className={`p-1.5 rounded-md text-center font-medium border cursor-pointer ${
                  activeArm === 'mx'
                    ? 'bg-emerald-700 text-white border-emerald-800'
                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                }`}
              >
                3. Asse MxA/B
              </button>
            </div>

            {/* Arm Description */}
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700">
              {activeArm === 'pkr' && (
                <div>
                  <div className="font-bold text-purple-900 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-purple-700" />
                    PKR (Protein Kinase R):
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                    Dimerizza legando dsRNA virale. Autofosforila e fosforila la subunità α di <strong>eIF2α</strong> (Ser51), sequestrando eIF2B e arrestando la sintesi proteica virale e dell&apos;ospite.
                  </p>
                </div>
              )}
              {activeArm === 'oas' && (
                <div>
                  <div className="font-bold text-cyan-900 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-700" />
                    2&apos;-5&apos; OAS & RNasi L:
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                    OAS sintetizza insoliti legami 2&apos;-5&apos; adenilici (2-5A) con ATP. 2-5A attiva allostericamente <strong>RNasi L</strong> citosolica latente, che degrada a tappeto l&apos;RNA a singolo filamento.
                  </p>
                </div>
              )}
              {activeArm === 'mx' && (
                <div>
                  <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-emerald-700" />
                    GTPasi Famiglia Mx (MxA e MxB):
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                    Grandi dinamina-like GTPasi che formano anelli oligomerici toroidali attorno alle ribonucleoproteine (RNP) virali, intrappolando meccanicamente i capsidi e bloccando trascrizione ed esocitosi.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Interferonopathy Alert */}
          {isInterferonopathy && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-800 space-y-1">
              <span className="font-bold flex items-center gap-1 text-rose-900">
                <AlertCircle className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                Sindrome di Aicardi-Goutières (AGS):
              </span>
              <p className="text-[11px] text-rose-700 leading-relaxed">
                Mutazione nell&apos;esonucleasi <strong>TREX1</strong> o <strong>RNasi H2</strong>. Gli acidi nucleici endogeni non vengono smaltiti, scatenando cGAS-STING e produzione cronica di IFN-I con microangiopatia cerebrale e calcificazioni dei nuclei della base.
              </p>
            </div>
          )}
        </div>
      </div>
      </div>

      {/* Printable Unrolled Table of Antiviral State & Effector Pathways (A4 Format) */}
      <div className="hidden print:block p-6 border-t border-slate-200 bg-white">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4 font-mono flex items-center justify-between border-b border-slate-300 pb-2">
          <span>Cascata dell&apos;Interferone di Tipo I (IFN-I) e Attivazione dello Stato Antivirale (Srotolata)</span>
          <span className="text-slate-500 font-mono">5 Fasi Molecolari</span>
        </div>

        <div className="space-y-4">
          {steps.map((st) => (
            <div key={st.num} className="p-4 rounded-lg border border-slate-300 bg-slate-50/60 break-inside-avoid space-y-2 text-xs">
              <div className="flex items-center justify-between font-bold text-slate-900 border-b border-slate-200 pb-1">
                <span className="text-sm text-purple-900">{st.title}</span>
                <span className="font-mono text-[10px] text-slate-500">Asse IFNAR / ISGF3</span>
              </div>
              <p className="text-slate-800 leading-relaxed font-normal">{st.desc}</p>
              <div className="text-[11px] text-purple-900 font-mono pt-1">
                <strong>Biochimica & Complessi:</strong> {st.molecularDetails}
              </div>
            </div>
          ))}
        </div>

        {/* Le 3 Vie Effettrici ISG Antivirali */}
        <div className="mt-5 p-4 rounded-lg border border-slate-300 bg-slate-50 break-inside-avoid text-xs space-y-3">
          <div className="font-bold text-slate-900 font-mono uppercase tracking-wider">
            I Tre Grandi Meccanismi Effettori Antivirali Indotti da ISRE:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
            <div className="p-2.5 rounded bg-white border border-slate-200">
              <strong className="text-blue-900 block font-bold mb-1">1. PKR (Protein Kinase R)</strong>
              <p className="text-slate-700 leading-relaxed">
                Attivata da dsRNA virale citoplasmatico. Fosforila la subunità α del fattore d&apos;inizio della traduzione <strong>eIF2α</strong>, provocando l&apos;arresto istantaneo della sintesi proteica virale e dell&apos;ospite.
              </p>
            </div>
            <div className="p-2.5 rounded bg-white border border-slate-200">
              <strong className="text-emerald-900 block font-bold mb-1">2. Asse OAS1 / RNasi L</strong>
              <p className="text-slate-700 leading-relaxed">
                La 2&apos;-5&apos; Oligoadenilato Sintetasi sintetizza oligomeri 2-5A che attivano l&apos;endonucleasi <strong>RNasi L</strong>. Questa cliva e degrada tutti gli RNA monocatena virali e cellulari non protetti.
              </p>
            </div>
            <div className="p-2.5 rounded bg-white border border-slate-200">
              <strong className="text-purple-900 block font-bold mb-1">3. GTPasi Mx1 / MxA</strong>
              <p className="text-slate-700 leading-relaxed">
                Grandi GTPasi simili alla dinamina che oligomerizzano in anelli toroidali attorno ai complessi ribonucleoproteici virali (es. Influenza), impedendone trascrizione, trasporto ed esocitosi.
              </p>
            </div>
          </div>
          <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-rose-950 text-[11px]">
            <strong>Interferonopatia (Sindrome di Aicardi-Goutières):</strong> Mutazioni inattivanti in <em>TREX1</em> o <em>RNasi H2</em> provocano l&apos;accumulo cronico di acidi nucleici endogeni, iperattivando cGAS-STING e scatenando una produzione patologica perenne di IFN-I con encefalopatia e microangiopatia.
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
              <h3 className="text-lg font-bold text-purple-300">
                Via di Segnalazione IFN-I: IFNAR1/2, JAK1/Tyk2, Complesso ISGF3 e ISRE
              </h3>
              <div className="max-h-[70vh] overflow-auto rounded-lg">
                <img
                  src={IMAGES.antiviralState}
                  alt="Interferon Type I and Antiviral State Full Illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Illustrazione scientifica ad alta definizione raffigurante il legame paracrino di IFN-α/β al recettore eterodimerico IFNAR1/IFNAR2, la fosforilazione a croce di JAK1 e Tyk2, l&apos;eterodimerizzazione di STAT1-STAT2 con reclutamento di IRF9 nel complesso ISGF3, l&apos;importazione nucleare tramite i pori nucleari (NPC) e l&apos;attivazione dell&apos;elemento di risposta ISRE per l&apos;induzione dello stato antivirale.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
