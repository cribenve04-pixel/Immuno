import React, { useState } from 'react';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  Volume2,
  Sparkles,
  Zap,
  Activity,
  AlertTriangle,
  Layers,
  Maximize2,
  X,
  Shield,
  Pill
} from 'lucide-react';
import { IMAGES } from '../data/imageAssets';
import { useTtsInteractive } from '../hooks/useTtsInteractive';

type ClinicalCondition = 'wt' | 'ibrutinib' | 'bruton_xla';
type LigandMode = 'multivalent' | 'monovalent' | 'c3d_coreceptor';

export const InteractiveBcrSignalingSimulator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [ligandMode, setLigandMode] = useState<LigandMode>('multivalent');
  const [condition, setCondition] = useState<ClinicalCondition>('wt');
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const { explainState, explainWhatIf } = useTtsInteractive();

  const steps = [
    {
      num: 1,
      title: "1. Riposo & Architettura BCR-CD79a/b",
      desc: "La catena mIgM/mIgD ha code intracellulari di soli 3 amminoacidi, incapaci di trasdurre. È associata all'eterodimero invariante Igα (CD79a) e Igβ (CD79b) contenente i motivi ITAM.",
      molecularDetails: "mIgM + Igα/Igβ (CD79a/CD79b) · Motivi ITAM non fosforilati · Lyn associata a bassa attività basale."
    },
    {
      num: 2,
      title: "2. Cross-Linking & Fosforilazione ITAM da Lyn",
      desc: "L'antigene polivalente o opsonizzato aggrega multipli BCR. La chinasi della famiglia Src Lyn fosforila i doppi residui di tirosina negli ITAM di CD79a e CD79b.",
      molecularDetails: "Clustering di superficie · Fosforilazione a croce di Lyn · Generazione di docking bivalente per domini tandem SH2."
    },
    {
      num: 3,
      title: "3. Reclutamento di Syk & Piattaforma BLNK",
      desc: "La tirosin-chinasi Syk ingaggia i due residui fosfotirosinici degli ITAM tramite i suoi doppi domini SH2. Syk si autofosforila e fosforila la proteina adattatrice BLNK (SLP-65).",
      molecularDetails: "Attivazione conformazionale di Syk · Fosforilazione multipla di BLNK/SLP-65 come hub scaffold."
    },
    {
      num: 4,
      title: "4. Asse Btk, PLCγ2, Ca2+ & Degradazione IκB nel Proteasoma",
      desc: "BLNK assembla la chinasi Btk e PLCγ2. PLCγ2 idrolizza PIP2 in IP3 (surge di Ca2+ e calmodulina/calcineurina su NFAT) e DAG (PKCβ e complesso IKK). IKK fosforila IκBα, che viene degradato nel Proteasoma 26S liberando NF-κB.",
      molecularDetails: "Btk attiva PLCγ2 · IP3 → Ca2+ → NFAT · DAG → PKCβ → IKK → Degradazione di IκBα nel Proteasoma 26S → Rilascio NF-κB."
    },
    {
      num: 5,
      title: "5. Pori Nucleari & Trascrizione di Sopravvivenza",
      desc: "I fattori trascrizionali NFAT, NF-κB (p50/p65) e AP-1 traslocano attraverso i pori nucleari (NPC). Nel nucleo accendono geni di ciclo cellulare (Myc, ciclina D2) e sopravvivenza (Bcl-2, Bcl-xL).",
      molecularDetails: "Importazione nucleare via NPC · Trascrizione geni di proliferazione · Differenziamento in plasmacellula e secrezione IgM."
    }
  ];

  const handleSelectStep = (sNum: number) => {
    setCurrentStep(sNum);
  };

  const handleSpeakCurrentStep = () => {
    const target = steps.find(s => s.num === currentStep);
    if (target) {
      if (condition === 'ibrutinib' && currentStep >= 4) {
        explainWhatIf(
          "il farmaco Ibrutinib inibisce covalentemente la tirosin-chinasi Btk sul residuo Cys-481",
          "l'attivazione di PLCγ2 viene abolita, impedendo il rilascio di calcio e la degradazione proteasomiale di IκBα, arrestando la crescita dei cloni leucemici"
        );
      } else if (condition === 'bruton_xla' && currentStep >= 4) {
        explainWhatIf(
          "una mutazione con perdita di funzione colpisce il gene BTK sul cromosoma X",
          "i precursori B subiscono un arresto irreversibile allo stadio pre-B, causando agammaglobulinemia congenita completa ed infezioni batteriche ricorrenti"
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

  const spokenOverview = "Simulatore della cascata di trasduzione del segnale del BCR. Il recettore mIgM con sole 3 tirosine nelle code citoplasmatiche si associa all'eterodimero CD79a e CD79b dotati di motivi ITAM. L'aggregazione da antigene stimola la chinasi Lyn a fosforilare gli ITAM. Syk si ancora e fosforila la piattaforma BLNK, reclutando Btk e PLCγ2. L'idrolisi di PIP2 rilascia calcio attivando NFAT, mentre la via DAG-PKCβ-IKK invia IκBα al proteasoma 26S, consentendo a NF-κB di traslocare nel nucleo attraverso i pori nucleari.";

  return (
    <div
      data-speech-text={spokenOverview}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden my-8 shadow-xs"
    >
      {/* Top Header & Controls */}
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold">
            Simulatore di Segnalazione Molecolare
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-0.5">
            Trasduzione del Segnale del BCR: Complesso CD79, Lyn, Syk, Btk, Proteasoma e Pori Nucleari
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Dal cross-linking recettoriale all&apos;attivazione di BLNK/Btk, degradazione proteasomiale di IκBα e traslocazione di NF-κB / NFAT.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap print:hidden">
          <button
            onClick={handleSpeakCurrentStep}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-white border border-blue-300 text-blue-800 hover:bg-purple-50 transition-colors shadow-2xs cursor-pointer"
            title="Ascolta spiegazione vocale della fase corrente"
          >
            <Volume2 className="w-3.5 h-3.5 text-blue-700" />
            <span>Ascolta Fase</span>
          </button>
          <button
            onClick={handlePlayCycle}
            disabled={isPlaying}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-blue-700 text-white hover:bg-blue-800 disabled:opacity-50 transition-colors shadow-xs cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isPlaying ? 'Animazione in Corso...' : 'Avvia Animazione Fasi'}</span>
          </button>
          <button
            onClick={() => { setCurrentStep(1); setIsPlaying(false); setCondition('wt'); setLigandMode('multivalent'); }}
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
                ? 'bg-blue-50 text-blue-900 border-b-2 border-blue-600 font-semibold'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span className="truncate">{st.title.split('.')[1]}</span>
            {currentStep === st.num && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 ml-1" />}
          </button>
        ))}
      </div>

      {/* Stage Layout: Left Vector SVG (7 cols) + Right Illustration & Controls (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200">
        {/* Left Column: Interactive Vector Diagram */}
        <div className="lg:col-span-7 p-5 bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden select-none">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
            <span className="flex items-center gap-1.5 text-blue-300">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Fase {currentStep}: {steps[currentStep - 1].title.split('.')[1]}
            </span>
            <span className="text-[11px] text-amber-300">
              {condition === 'ibrutinib' ? 'Target: Inibizione Ibrutinib (Btk)' : condition === 'bruton_xla' ? 'Patologia: XLA (Deficit Btk)' : 'Stato: Attivazione Fisiologica'}
            </span>
          </div>

          {/* SVG Canvas (680x440) */}
          <div className="w-full py-2 flex items-center justify-center">
            <svg viewBox="0 0 680 440" className="w-full h-auto max-w-[620px]">
              <defs>
                <linearGradient id="bcrMemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="50%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <filter id="blueGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
                <filter id="amberGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
              </defs>

              {/* Compartment Labels */}
              <text x="25" y="25" fill="#94a3b8" fontSize="10" fontFamily="monospace" fontWeight="bold">SPAZIO EXTRACELLULARE</text>
              <text x="25" y="145" fill="#64748b" fontSize="10" fontFamily="monospace" fontWeight="bold">CITOPLASMA LINFOCITA B</text>

              {/* Lipid Bilayer Membrane */}
              <rect x="0" y="80" width="680" height="22" rx="4" fill="url(#bcrMemGrad)" stroke="#475569" strokeWidth="1.5" />
              <text x="560" y="95" fill="#94a3b8" fontSize="9" fontFamily="monospace">Membrana Plasmatica</text>

              {/* ANTIGEN LIGAND (Top) */}
              {currentStep >= 2 && (
                <g filter="url(#blueGlow)">
                  {ligandMode === 'multivalent' && (
                    <g>
                      <path d="M 240 22 Q 280 12 320 22 Q 360 32 400 22" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="260" cy="20" r="7" fill="#0284c7" stroke="#ffffff" strokeWidth="1" />
                      <circle cx="310" cy="18" r="7" fill="#0284c7" stroke="#ffffff" strokeWidth="1" />
                      <circle cx="360" cy="24" r="7" fill="#0284c7" stroke="#ffffff" strokeWidth="1" />
                      <text x="310" y="8" fill="#bae6fd" fontSize="8" fontWeight="bold" textAnchor="middle">Antigene Multivalente (Cross-Linking)</text>
                    </g>
                  )}
                  {ligandMode === 'c3d_coreceptor' && (
                    <g>
                      <path d="M 230 22 Q 300 15 370 22" fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="260" cy="20" r="7" fill="#059669" stroke="#ffffff" strokeWidth="1" />
                      <circle cx="340" cy="20" r="7" fill="#059669" stroke="#ffffff" strokeWidth="1" />
                      {/* C3d tag */}
                      <rect x="180" y="14" width="35" height="15" rx="3" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
                      <text x="197" y="25" fill="#78350f" fontSize="7" fontWeight="bold" textAnchor="middle">C3d</text>
                      <text x="300" y="8" fill="#6ee7b7" fontSize="8" fontWeight="bold" textAnchor="middle">Ag Opsonizzato C3d + Co-recettore CD19/CD21</text>
                    </g>
                  )}
                  {ligandMode === 'monovalent' && (
                    <g>
                      <circle cx="280" cy="22" r="7" fill="#94a3b8" stroke="#ffffff" strokeWidth="1" />
                      <text x="280" y="8" fill="#cbd5e1" fontSize="8" fontWeight="bold" textAnchor="middle">Ag Monovalente Solubile (Mancato Cross-Linking)</text>
                    </g>
                  )}
                </g>
              )}

              {/* CO-RECEPTOR CD19 / CD21 (CR2) / CD81 */}
              <g transform="translate(170, 45)">
                <rect x="0" y="0" width="12" height="60" rx="3" fill="#10b981" stroke="#059669" strokeWidth="1" />
                <rect x="15" y="0" width="12" height="60" rx="3" fill="#14b8a6" stroke="#0d9488" strokeWidth="1" />
                <text x="14" y="-4" fill="#a7f3d0" fontSize="7.5" fontWeight="bold" textAnchor="middle">CD19/CD21</text>
                {/* Intracellular tail with PI3K docking */}
                <path d="M 6 60 L 6 90" stroke="#10b981" strokeWidth="3" />
                <circle cx="6" cy="85" r="4" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                <text x="6" y="88" fill="#ffffff" fontSize="5.5" fontWeight="bold" textAnchor="middle">P</text>
              </g>

              {/* PRIMARY BCR UNIT 1 (mIgM) */}
              <g transform="translate(255, 30)">
                {/* Fab arms */}
                <path d="M 25 10 L 10 0 M 25 10 L 40 0" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
                {/* Fc stem */}
                <path d="M 25 10 L 25 50 L 25 65" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
                <text x="25" y="-5" fill="#bae6fd" fontSize="8" fontWeight="bold" textAnchor="middle">mIgM</text>

                {/* Short tail of 3 aa */}
                <circle cx="25" cy="68" r="2.5" fill="#64748b" />
                <text x="45" y="72" fill="#94a3b8" fontSize="6.5">Coda KVK (3 aa)</text>
              </g>

              {/* INVARIANT HETERODIMER Igα (CD79a) and Igβ (CD79b) with ITAMs */}
              <g transform="translate(235, 45)">
                {/* Igα chain */}
                <path d="M 0 0 L 0 35 L 0 95" stroke="#ec4899" strokeWidth="4" strokeLinecap="round" />
                <text x="-4" y="-4" fill="#f472b6" fontSize="7.5" fontWeight="bold">Igα</text>

                {/* Igβ chain */}
                <path d="M 65 0 L 65 35 L 65 95" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" />
                <text x="68" y="-4" fill="#fb7185" fontSize="7.5" fontWeight="bold">Igβ</text>

                {/* ITAM Motifs on Tails */}
                <rect x="-8" y="55" width="16" height="32" rx="3" fill="#831843" stroke="#f472b6" strokeWidth="1" />
                <text x="0" y="73" fill="#fbcfe8" fontSize="6" fontWeight="bold" textAnchor="middle">ITAM</text>

                <rect x="57" y="55" width="16" height="32" rx="3" fill="#881337" stroke="#fb7185" strokeWidth="1" />
                <text x="65" y="73" fill="#ffe4e6" fontSize="6" fontWeight="bold" textAnchor="middle">ITAM</text>

                {/* ITAM Phosphorylations (Step 2+) */}
                {currentStep >= 2 && (
                  <g>
                    <circle cx="0" cy="62" r="4.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                    <text x="0" y="65" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">P</text>
                    <circle cx="0" cy="80" r="4.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                    <text x="0" y="83" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">P</text>

                    <circle cx="65" cy="62" r="4.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                    <text x="65" y="65" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">P</text>
                    <circle cx="65" cy="80" r="4.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                    <text x="65" y="83" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">P</text>
                  </g>
                )}
              </g>

              {/* LYN KINASE (Src Family) */}
              <g transform="translate(195, 105)">
                <rect x="0" y="0" width="26" height="24" rx="4" fill="#a855f7" stroke="#c084fc" strokeWidth="1.5" />
                <text x="13" y="16" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">Lyn</text>
                {currentStep >= 2 && (
                  <g>
                    <circle cx="28" cy="6" r="4.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                    <text x="28" y="9" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">P</text>
                  </g>
                )}
              </g>

              {/* SYK KINASE (Tandem SH2 Domains) */}
              {currentStep >= 3 && (
                <g filter="url(#blueGlow)" transform="translate(260, 145)">
                  <rect x="0" y="0" width="46" height="26" rx="5" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="23" y="16" fill="#ffffff" fontSize="8.5" fontWeight="bold" textAnchor="middle">Syk</text>
                  {/* Tandem SH2 badges */}
                  <circle cx="6" cy="-2" r="4" fill="#38bdf8" stroke="#ffffff" strokeWidth="0.8" />
                  <circle cx="40" cy="-2" r="4" fill="#38bdf8" stroke="#ffffff" strokeWidth="0.8" />
                  <circle cx="23" cy="30" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                  <text x="23" y="33" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">P</text>
                  <text x="23" y="42" fill="#7dd3fc" fontSize="7" textAnchor="middle">Dual SH2 Docking</text>
                </g>
              )}

              {/* BLNK / SLP-65 PLATFORM + BTK + PLCγ2 (Step 4+) */}
              {currentStep >= 4 && (
                <g transform="translate(230, 200)">
                  {/* BLNK Scaffold Bar */}
                  <rect x="0" y="0" width="130" height="16" rx="4" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
                  <text x="65" y="12" fill="#f8fafc" fontSize="8" fontWeight="bold" textAnchor="middle">BLNK / SLP-65 (Scaffold)</text>

                  {/* BTK (Bruton's Tyrosine Kinase) */}
                  <g transform="translate(10, 22)">
                    <rect
                      x="0"
                      y="0"
                      width="45"
                      height="26"
                      rx="4"
                      fill={condition === 'ibrutinib' ? '#7f1d1d' : condition === 'bruton_xla' ? '#3f3f46' : '#d97706'}
                      stroke={condition === 'ibrutinib' ? '#ef4444' : condition === 'bruton_xla' ? '#71717a' : '#f59e0b'}
                      strokeWidth="1.5"
                    />
                    <text x="22" y="16" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">
                      {condition === 'bruton_xla' ? 'XLA (Mut)' : 'Btk'}
                    </text>
                    {condition === 'ibrutinib' && (
                      <g>
                        <circle cx="45" cy="6" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                        <text x="45" y="9" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">Inh</text>
                      </g>
                    )}
                  </g>

                  {/* PLCγ2 */}
                  <g transform="translate(70, 22)">
                    <rect x="0" y="0" width="50" height="26" rx="4" fill="#059669" stroke="#10b981" strokeWidth="1.5" />
                    <text x="25" y="16" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">PLCγ2</text>
                    {condition === 'wt' && (
                      <g>
                        <circle cx="50" cy="6" r="4.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                        <text x="50" y="9" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">P</text>
                      </g>
                    )}
                  </g>
                </g>
              )}

              {/* 26S PROTEASOME & NF-κB / NFAT BRANCHES (Step 4 & 5) */}
              {currentStep >= 4 && condition === 'wt' && (
                <g>
                  {/* Left Branch: Ca2+ / Calcineurin / NFAT */}
                  <g transform="translate(80, 220)">
                    <rect x="0" y="0" width="110" height="46" rx="5" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
                    <text x="55" y="15" fill="#38bdf8" fontSize="7.5" fontWeight="bold" textAnchor="middle">IP3 → Ca2+ Surge</text>
                    <text x="55" y="28" fill="#cbd5e1" fontSize="7" textAnchor="middle">Calmodulina / Calcineurina</text>
                    <rect x="25" y="32" width="60" height="12" rx="3" fill="#0284c7" />
                    <text x="55" y="41" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">NFAT Defosforilato</text>
                  </g>

                  {/* Right Branch: 26S Proteasome degradation of IκBα & NF-κB Release */}
                  <g transform="translate(480, 210)">
                    {/* Proteasome Barrel */}
                    <g>
                      <rect x="0" y="0" width="70" height="42" rx="6" fill="#431407" stroke="#ea580c" strokeWidth="1.5" />
                      <line x1="0" y1="14" x2="70" y2="14" stroke="#ea580c" strokeWidth="1" strokeDasharray="2 2" />
                      <line x1="0" y1="28" x2="70" y2="28" stroke="#ea580c" strokeWidth="1" strokeDasharray="2 2" />
                      <text x="35" y="11" fill="#fdba74" fontSize="7" fontWeight="bold" textAnchor="middle">PROTEASOMA 26S</text>
                      <text x="35" y="24" fill="#fb923c" fontSize="6.5" textAnchor="middle">Degradazione IκBα</text>
                      <text x="35" y="36" fill="#fed7aa" fontSize="6" textAnchor="middle">Ubiquitina-Dipendente</text>
                    </g>

                    {/* NF-κB dimer freed */}
                    <g transform="translate(78, 8)">
                      <rect x="0" y="0" width="55" height="26" rx="4" fill="#dc2626" stroke="#f87171" strokeWidth="1.5" />
                      <text x="27" y="16" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">NF-κB (p50/65)</text>
                      <text x="27" y="34" fill="#fca5a5" fontSize="6.5" textAnchor="middle">Dimero Libero</text>
                    </g>
                  </g>
                </g>
              )}

              {/* NUCLEAR ENVELOPE & NUCLEAR PORES (Bottom) */}
              <path d="M 0 320 Q 340 280 680 320 L 680 440 L 0 440 Z" fill="#090d16" stroke="#334155" strokeWidth="1.5" />
              <text x="340" y="420" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">NUCLEO CELLULARE (DNA / Promotori Bcl-2, Bcl-xL, Myc, Ig)</text>

              {/* Nuclear Pore Complexes (NPC) */}
              <g transform="translate(180, 290)">
                <ellipse cx="20" cy="8" rx="18" ry="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />
                <text x="20" y="24" fill="#7dd3fc" fontSize="7.5" textAnchor="middle">NPC (NFAT)</text>
              </g>
              <g transform="translate(480, 290)">
                <ellipse cx="20" cy="8" rx="18" ry="6" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
                <text x="20" y="24" fill="#fca5a5" fontSize="7.5" textAnchor="middle">NPC (NF-κB)</text>
              </g>

              {/* Step 5: Active Nuclear Transcription */}
              {currentStep === 5 && condition === 'wt' && (
                <g filter="url(#blueGlow)" transform="translate(230, 345)">
                  {/* NF-κB on DNA */}
                  <rect x="0" y="0" width="55" height="22" rx="4" fill="#dc2626" stroke="#fca5a5" />
                  <text x="27" y="15" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">NF-κB</text>

                  {/* NFAT on DNA */}
                  <rect x="65" y="0" width="55" height="22" rx="4" fill="#0284c7" stroke="#7dd3fc" />
                  <text x="92" y="15" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">NFAT</text>

                  {/* AP-1 on DNA */}
                  <rect x="130" y="0" width="50" height="22" rx="4" fill="#16a34a" stroke="#86efac" />
                  <text x="155" y="15" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">AP-1</text>

                  {/* DNA line */}
                  <line x1="-30" y1="28" x2="220" y2="28" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
                  <text x="95" y="42" fill="#4ade80" fontSize="9" fontWeight="bold" textAnchor="middle">
                    Trascrizione Attiva: Bcl-2, Bcl-xL, Myc, Ciclina D2 &amp; Differenziamento
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Molecular Detail Footer Banner */}
          <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs flex items-center justify-between mt-2">
            <span className="text-blue-300 font-mono text-[11px]">
              Dettaglio Molecolare: {steps[currentStep - 1].molecularDetails}
            </span>
            <span className="text-slate-400 text-[10px]">
              Step {currentStep} di {steps.length}
            </span>
          </div>
        </div>

        {/* Right Column: High-Res Medical Illustration HUD & Clinical Conditions (5 cols) */}
        <div className="lg:col-span-5 p-5 bg-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-200 space-y-4">
          {/* Micrograph Card */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Tavola Istologica / Vettoriale Ufficiale
              </span>
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="text-xs text-blue-700 hover:text-blue-800 font-medium flex items-center gap-1 cursor-pointer"
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
                src={IMAGES.bcrAntibodySignaling}
                alt="Struttura BCR, Complesso CD79 e Cascata di Segnalazione"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                <p className="text-[11px] text-white font-medium">
                  BCR (mIgM/IgD) con subunità Igα/Igβ, Lyn, Syk, BLNK, Btk e vie nucleari
                </p>
              </div>
            </div>
          </div>

          {/* Ligand & Co-receptor Toggles */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-700 block">
              Modalità di Ingaggio dell&apos;Antigene:
            </span>
            <div className="grid grid-cols-3 gap-1.5 text-xs">
              <button
                onClick={() => { setLigandMode('multivalent'); }}
                className={`p-2 rounded-md border text-center transition-all cursor-pointer ${
                  ligandMode === 'multivalent'
                    ? 'bg-blue-50 border-blue-400 text-blue-900 font-semibold ring-1 ring-blue-300'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div className="text-[10px] uppercase font-bold text-blue-700">Polivalente</div>
                <div className="truncate text-[11px]">Cross-Linking BCR</div>
              </button>

              <button
                onClick={() => { setLigandMode('c3d_coreceptor'); }}
                className={`p-2 rounded-md border text-center transition-all cursor-pointer ${
                  ligandMode === 'c3d_coreceptor'
                    ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold ring-1 ring-emerald-300'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div className="text-[10px] uppercase font-bold text-emerald-700">C3d + CD19/21</div>
                <div className="truncate text-[11px]">Sinergia 1000x</div>
              </button>

              <button
                onClick={() => { setLigandMode('monovalent'); }}
                className={`p-2 rounded-md border text-center transition-all cursor-pointer ${
                  ligandMode === 'monovalent'
                    ? 'bg-amber-50 border-amber-400 text-amber-900 font-semibold ring-1 ring-amber-300'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div className="text-[10px] uppercase font-bold text-amber-700">Monovalente</div>
                <div className="truncate text-[11px]">Anergia / No Signal</div>
              </button>
            </div>
          </div>

          {/* Genetic Condition & Pharmacology Toggles */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-700 block">
              Controllo Genetico / Farmacologico:
            </span>
            <div className="grid grid-cols-3 gap-1 text-[11px]">
              <button
                onClick={() => setCondition('wt')}
                className={`p-1.5 rounded-md text-center font-medium border cursor-pointer ${
                  condition === 'wt'
                    ? 'bg-blue-700 text-white border-blue-800'
                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                }`}
              >
                Fisiologico (WT)
              </button>
              <button
                onClick={() => setCondition('ibrutinib')}
                className={`p-1.5 rounded-md text-center font-medium border cursor-pointer ${
                  condition === 'ibrutinib'
                    ? 'bg-rose-700 text-white border-rose-800'
                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                }`}
              >
                + Ibrutinib (PCI-32765)
              </button>
              <button
                onClick={() => setCondition('bruton_xla')}
                className={`p-1.5 rounded-md text-center font-medium border cursor-pointer ${
                  condition === 'bruton_xla'
                    ? 'bg-purple-700 text-white border-purple-800'
                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                }`}
              >
                Malattia di Bruton (XLA)
              </button>
            </div>

            {/* Condition Description Box */}
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700">
              {condition === 'wt' && (
                <div>
                  <div className="font-bold text-blue-900 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-blue-700" />
                    Attivazione Fisiologica Completa:
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                    Syk fosforila BLNK; Btk attiva PLCγ2; IP3 stimola il calcio e NFAT; DAG attiva PKCβ e il proteasoma 26S degrada IκBα liberando NF-κB nel nucleo.
                  </p>
                </div>
              )}
              {condition === 'ibrutinib' && (
                <div>
                  <div className="font-bold text-rose-900 flex items-center gap-1.5">
                    <Pill className="w-3.5 h-3.5 text-rose-700" />
                    Inibitore Covalente di Btk (Ibrutinib):
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-rose-700">
                    Lega irreversibilmente la Cys481 nel sito catalitico di Btk. Blocca a monte l&apos;attivazione di PLCγ2, spegnendo la via del calcio e di NF-κB. Trattamento di prima linea per Leucemia Linfatica Cronica (LLC) e Linfoma Mantellare.
                  </p>
                </div>
              )}
              {condition === 'bruton_xla' && (
                <div>
                  <div className="font-bold text-purple-900 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-purple-700" />
                    Agammaglobulinemia Legata al Sesso (XLA):
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-purple-700">
                    Mutazione emizigote del gene <em>BTK</em> sul cromosoma X. Mancato segnale di sopravvivenza al primo checkpoint del Pre-BCR nel midollo: assenza pressoché totale di linfociti B maturi circolanti e agammaglobulinemia sierica severa.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Printable Unrolled Table of BCR Signal Transduction (A4 Format) */}
      <div className="hidden print:block p-6 border-t border-slate-200 bg-white">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4 font-mono flex items-center justify-between border-b border-slate-300 pb-2">
          <span>Cascata di Trasduzione del Segnale del BCR (Srotolata in Sequenza Lineare)</span>
          <span className="text-slate-500 font-mono">5 Fasi Molecolari</span>
        </div>

        <div className="space-y-4">
          {steps.map((st) => (
            <div key={st.num} className="p-4 rounded-lg border border-slate-300 bg-slate-50/60 break-inside-avoid space-y-2 text-xs">
              <div className="flex items-center justify-between font-bold text-slate-900 border-b border-slate-200 pb-1">
                <span className="text-sm text-blue-900">{st.title}</span>
                <span className="font-mono text-[10px] text-slate-500">Fase {st.num} di 5</span>
              </div>
              <p className="text-slate-800 leading-relaxed font-normal">{st.desc}</p>
              <div className="text-[11px] text-blue-900 font-mono pt-1">
                <strong>Biochimica & Complessi:</strong> {st.molecularDetails}
              </div>
            </div>
          ))}
        </div>

        {/* Quadro Farmacologico & Genetico */}
        <div className="mt-5 p-4 rounded-lg border border-slate-300 bg-slate-50 break-inside-avoid text-xs space-y-3">
          <div className="font-bold text-slate-900 font-mono uppercase tracking-wider">
            Correlazioni Clinico-Terapeutiche della Via del BCR:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
            <div className="p-2.5 rounded bg-white border border-slate-200 space-y-1">
              <strong className="text-blue-900 block font-bold">Inibizione Farmacologica (Ibrutinib / Zanubrutinib)</strong>
              <p className="text-slate-700 leading-snug">
                Inibitore suicida covalente che lega la <strong>Cys-481</strong> nel sito catalitico di Btk. Blocca irreversibilmente la fosforilazione di PLCγ2, il calcio citosolico e la degradazione proteasomiale di IκBα, mandando in apoptosi le cellule leucemiche della LLC (Leucemia Linfatica Cronica).
              </p>
            </div>
            <div className="p-2.5 rounded bg-white border border-slate-200 space-y-1">
              <strong className="text-purple-900 block font-bold">Agammaglobulinemia di Bruton (XLA)</strong>
              <p className="text-slate-700 leading-snug">
                Mutazione emizigote del gene <em>BTK</em> sul cromosoma X. Mancata trasduzione tonica del Pre-BCR nello stadio pre-B nel midollo osseo: blocco maturativo completo, assenza di plasmacellule e suscettibilità letale a batteri piogenici capsulati.
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
              <h3 className="text-lg font-bold text-blue-300">
                Struttura del Complesso BCR e Vie di Segnalazione Intracellulari
              </h3>
              <div className="max-h-[70vh] overflow-auto rounded-lg">
                <img
                  src={IMAGES.bcrAntibodySignaling}
                  alt="BCR Signaling Complex Full Illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tavola anatomica e molecolare dettagliata: associazione non covalente di mIgM/mIgD con l&apos;eterodimero di trasduzione Igα/Igβ (CD79a/CD79b), fosforilazione degli ITAM da Lyn, reclutamento di Syk, piattaforma di segnalazione BLNK, attivazione di Btk e PLCγ2, cascate del calcio / NFAT e di NF-κB mediata da proteasoma 26S.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
