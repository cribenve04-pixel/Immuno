import React, { useState } from 'react';
import {
  Shield,
  Zap,
  Play,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Dna,
  Activity,
  Lock,
  Volume2,
  Layers,
  Sparkles,
  Flame,
  ShieldCheck,
  Maximize2
} from 'lucide-react';
import { IMAGES } from '../data/imageAssets';
import { useTtsInteractive } from '../hooks/useTtsInteractive';

type PathwayViewMode = 'both' | 'myd88' | 'trif';

interface StepInfo {
  num: number;
  title: string;
  shortTitle: string;
  desc: string;
  myd88Action: string;
  trifAction: string;
  molecularDetails: string;
}

export const InteractiveTlrPathwaySimulator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<PathwayViewMode>('both');
  const [isIrak4Deficient, setIsIrak4Deficient] = useState<boolean>(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);

  const { explainState, explainWhatIf } = useTtsInteractive();

  const steps: StepInfo[] = [
    {
      num: 1,
      title: "1. Riconoscimento del Ligando & Dimerizzazione LRR / TIR",
      shortTitle: "1. Ligando & Recettori",
      desc: "Il legame del PAMP (LPS complessato con MD-2 su TLR4, oppure dsRNA su TLR3) induce l'avvicinamento degli ectodomini a ferro di cavallo (LRR) e la stretta approssimazione spaziale dei domini intracellulari TIR.",
      myd88Action: "TLR4 su membrana plasmatica lega LPS/MD-2; i due domini TIR citoplasmatici dimerizzano creando la piattaforma di docking.",
      trifAction: "TLR3 (o TLR4 endocitato) su membrana endosomiale lega il proprio acido nucleico; i domini TIR si appaiano nel citosol.",
      molecularDetails: "Ectodomini LRR a ferro di cavallo · Tasca MD-2 · Dimerizzazione omotipica dei domini TIR."
    },
    {
      num: 2,
      title: "2. Reclutamento degli Adattatori: Myddosoma vs Piattaforma TRIF/TRAM",
      shortTitle: "2. Adattatori (MyD88 vs TRIF)",
      desc: "I domini TIR attivati ingaggiano specifici adattatori citoplasmatici: MyD88 (con dominio Death Domain) per la via infiammatoria, oppure TRIF (con TRAM) per la via antivirale.",
      myd88Action: "MyD88 si aggancia al dominio TIR (tramite MAL/TIRAP) e presenta il suo Death Domain (DD) per reclutare IRAK4 e IRAK1 nel complesso 'Myddosoma'.",
      trifAction: "TLR3 ingaggia direttamente TRIF; TLR4 endosomiale usa l'adattatore ponte TRAM per legare TRIF, innescando la via MyD88-indipendente.",
      molecularDetails: "Death Domain (DD) · Oligomero Myddosoma · Adattatore TRAM & TRIF."
    },
    {
      num: 3,
      title: "3. Cascata Chinasica e Reclutamento delle Ubiquitin-Ligasi TRAF",
      shortTitle: "3. Chinasi & TRAF",
      desc: "Biforcazione catalitica fondamentale: MyD88 attiva la cascata IRAK/TRAF6/TAK1; TRIF recluta TRAF3 e attiva le chinasi non canoniche TBK1 e IKKε.",
      myd88Action: "IRAK4 fosforila IRAK1, che attiva l'ubiquitina ligasi E3 TRAF6. Si assembla il complesso TAK1 che attiva a valle il complesso IKK (IKKα, IKKβ, NEMO).",
      trifAction: "TRIF recluta TRAF3, che forma una piattaforma di ancoraggio per le serina/treonina chinasi atipiche TBK1 (TANK-binding kinase 1) e IKKε.",
      molecularDetails: "IRAK4/1 · TRAF6 poliubiquitina K63 · TAK1 vs TRAF3 · TBK1/IKKε chinasi."
    },
    {
      num: 4,
      title: "4. Regolazione Post-Traduzionale: Degradazione IκBα vs Dimerizzazione IRF3",
      shortTitle: "4. Regolazione & Degradazione",
      desc: "Il complesso IKK fosforila l'inibitore citosolico IκBα determinandone la distruzione nel proteasoma 26S e liberando NF-κB. Nel ramo TRIF, TBK1 fosforila IRF3 inducendone l'omodimerizzazione.",
      myd88Action: "IKKβ fosforila IκBα su Ser32/36. IκBα viene poliubiquitinato e degradato nel Proteasoma 26S, liberando il dimero NF-κB (p50/p65).",
      trifAction: "TBK1/IKKε fosforilano specifici residui serinici C-terminali di IRF3 citosolico. I monomeri carichi omodimerizzano spontaneamente.",
      molecularDetails: "Fosforilazione Ser32/36 · Degradazione Proteasoma 26S · Omodimerizzazione IRF3."
    },
    {
      num: 5,
      title: "5. Traslocazione Nucleare e Trascrizione: Citochine Flogistiche vs IFN Tipo I",
      shortTitle: "5. Trascrizione Genica",
      desc: "I fattori trascrizionali attivi attraversano i pori nucleari (NPC) e si legano ai promotori bersaglio: NF-κB accende la tempesta citochinica; IRF3 induce lo stato antivirale con IFN-β.",
      myd88Action: "NF-κB (p50/p65) si lega agli elementi κB e guida la trascrizione massiva di TNF-α, IL-1β, IL-6, IL-12 e CXCL8 (reazione infiammatoria pirogena).",
      trifAction: "Il dimero fosforilato IRF3 si lega ai siti PRD del promotore dell'Interferone-β, stimolando la produzione di IFN-β e geni antivirali ISG.",
      molecularDetails: "Traslocazione attraverso Nuclear Pore · Siti κB (TNF, IL-6) vs Promotore IFN-β (ISGs)."
    }
  ];

  const handleSelectStep = (sNum: number) => {
    setCurrentStep(sNum);
  };

  const handleSpeakCurrentStep = () => {
    const target = steps.find(s => s.num === currentStep);
    if (target) {
      if (isIrak4Deficient && currentStep >= 3) {
        explainWhatIf(
          "il paziente presenta una mutazione congenita con perdita di funzione di IRAK4 o MyD88",
          "la cascata di NF-κB si arresta completamente con assenza di febbre e grave suscettibilità a infezioni piogene da Pneumococco e Stafilococco, mentre la produzione di Interferoni via TRIF rimane normale"
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
    const firstStep = steps[0];
    explainState(firstStep.title, firstStep.desc);

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

  const handleToggleDeficiency = () => {
    const nextState = !isIrak4Deficient;
    setIsIrak4Deficient(nextState);
    if (nextState) {
      explainWhatIf(
        "si instaura un deficit genetico di IRAK4 o MyD88",
        "il Myddosoma non trasduce il segnale a TRAF6: non si attiva IKK, I-kappa-B-alfa non viene degradato e NF-kappa-B resta bloccato nel citoplasma"
      );
    } else {
      explainState("Ripristino Wild Type", "La segnalazione di MyD88 e IRAK4 è pienamente funzionante.");
    }
  };

  const spokenOverview = "Simulatore interattivo comparativo delle due vie di segnalazione dei recettori Toll-like: la via MyD88-dipendente e la via TRIF-dipendente. La via MyD88, utilizzata da quasi tutti i TLR sulla membrana plasmatica come TLR4 e TLR2, porta alla degradazione di I-kappa-B-alfa nel proteasoma e alla liberazione nucleare di NF-kappa-B, inducendo le citochine pro-infiammatorie TNF-alfa, interleuchina 1 e interleuchina 6. La via TRIF-dipendente, utilizzata da TLR3 e TLR4 nell'endosoma, recluta TRAF3 e le chinasi TBK1 e IKK-epsilon, fosforilando IRF3 per la trascrizione selettiva di Interferone beta.";

  return (
    <div
      data-speech-text={spokenOverview}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden my-6 shadow-sm"
    >
      {/* Top Header & Actions */}
      <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 border border-indigo-200">
              Atlante Dinamico Comparativo
            </span>
            <span className="text-xs text-slate-500 font-mono">TIR Signaling: MyD88 vs TRIF</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
            Le Due Vie di Segnalazione TLR a Confronto Diretto
          </h3>
          <p className="text-xs text-slate-600 mt-1 max-w-2xl">
            Confronto biochimico e strutturale dei recettori LRR, piattaforme TIR, cascate chinasiche e destino dei fattori trascrizionali nel nucleo.
          </p>
        </div>

        {/* Control Buttons */}
        <div className="flex flex-wrap items-center gap-2 print:hidden">
          {/* Mode Selector */}
          <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 text-xs font-semibold shadow-2xs">
            <button
              onClick={() => setViewMode('both')}
              className={`px-2.5 py-1.5 rounded-md transition-all cursor-pointer ${
                viewMode === 'both'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Confronto Parallelo
            </button>
            <button
              onClick={() => setViewMode('myd88')}
              className={`px-2.5 py-1.5 rounded-md transition-all cursor-pointer ${
                viewMode === 'myd88'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Solo MyD88
            </button>
            <button
              onClick={() => setViewMode('trif')}
              className={`px-2.5 py-1.5 rounded-md transition-all cursor-pointer ${
                viewMode === 'trif'
                  ? 'bg-cyan-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Solo TRIF
            </button>
          </div>

          {/* Deficiency Simulation Toggle */}
          <button
            onClick={handleToggleDeficiency}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
              isIrak4Deficient
                ? 'bg-rose-50 text-rose-700 border-rose-300 ring-1 ring-rose-200'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
            title="Simula deficit genetico di IRAK4 o MyD88"
          >
            <AlertTriangle className={`w-3.5 h-3.5 ${isIrak4Deficient ? 'text-rose-600' : 'text-slate-400'}`} />
            <span>{isIrak4Deficient ? 'Mutazione IRAK4/MyD88: ATTIVA' : 'Deficit IRAK4: OFF'}</span>
          </button>

          {/* Audio TTS */}
          <button
            onClick={handleSpeakCurrentStep}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Ascolta spiegazione vocale della fase corrente"
          >
            <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
            <span>Ascolta Fase</span>
          </button>

          {/* Play Animation */}
          <button
            onClick={handlePlayCycle}
            disabled={isPlaying}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 transition-colors shadow-xs cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isPlaying ? 'Animazione in Corso...' : 'Avvia Animazione'}</span>
          </button>

          {/* Reset */}
          <button
            onClick={() => { setCurrentStep(1); setIsIrak4Deficient(false); }}
            className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Reimposta simulazione"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Controls & Canvas (Screen Only) */}
      <div className="print:hidden">
        {/* Step Buttons Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-b border-slate-200 divide-x divide-slate-200 text-xs font-medium">
        {steps.map((st) => (
          <button
            key={st.num}
            onClick={() => handleSelectStep(st.num)}
            className={`p-3 text-left transition-colors flex items-center justify-between cursor-pointer ${
              currentStep === st.num
                ? 'bg-indigo-50/80 text-indigo-950 border-b-2 border-indigo-600 font-bold'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span className="truncate">{st.shortTitle}</span>
            {currentStep === st.num && <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 ml-1" />}
          </button>
        ))}
      </div>

      {/* Stage Layout: Left Interactive Graphical SVG + Right Micrograph & Molecular HUD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200">
        {/* Left Column: Interactive High-Precision SVG Diagram (7 cols) */}
        <div className="lg:col-span-7 p-5 sm:p-6 bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden select-none">
          {/* Status bar */}
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
            <span className="flex items-center gap-1.5 text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              Fase {currentStep} di 5: {steps[currentStep - 1].shortTitle}
            </span>
            <span className="text-[11px] text-slate-400">
              {isIrak4Deficient ? (
                <span className="text-rose-400 font-bold flex items-center gap-1">
                  <Lock className="w-3 h-3" /> Blocco MyD88/IRAK4
                </span>
              ) : (
                'Fisiologia Wild-Type'
              )}
            </span>
          </div>

          {/* SVG Canvas depicting Receptors, Cell Membrane, Cytosol, and Nucleus */}
          <div className="w-full py-2 flex items-center justify-center">
            <svg
              viewBox="0 0 680 440"
              className="w-full h-auto max-w-[620px]"
              aria-label="Diagramma vettoriale comparativo delle vie di segnalazione MyD88 vs TRIF"
            >
              <defs>
                <linearGradient id="cellMemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="50%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>

                <linearGradient id="endoMemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0891b2" />
                  <stop offset="100%" stopColor="#0e7490" />
                </linearGradient>

                <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>

                <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>

                <filter id="glowRed" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
              </defs>

              {/* Vertical Divider between the two pathways (when both are visible) */}
              {viewMode === 'both' && (
                <line x1="340" y1="20" x2="340" y2="400" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4" />
              )}

              {/* ==============================================================
                  CELL ANATOMY BACKGROUND
                  ============================================================== */}
              {/* Plasma Membrane on Top (Left side and continuing) */}
              <rect x="10" y="65" width="320" height="14" rx="2" fill="url(#cellMemGrad)" stroke="#64748b" strokeWidth="1" />
              <text x="20" y="76" fill="#94a3b8" fontSize="8" fontFamily="monospace">Membrana Plasmatica</text>
              <text x="20" y="45" fill="#cbd5e1" fontSize="9" fontWeight="bold">Spazio Extracellulare</text>

              {/* Endosomal Membrane on Right side */}
              <path
                d="M 350 65 L 430 65 Q 450 65 460 85 Q 480 120 540 120 Q 600 120 620 85 Q 630 65 650 65 L 670 65"
                fill="none"
                stroke="#0e7490"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <rect x="470" y="70" width="100" height="40" rx="10" fill="#0f2b38" stroke="#155e75" strokeWidth="1" opacity="0.6" />
              <text x="520" y="93" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Lume Endosomiale</text>
              <text x="520" y="104" fill="#94a3b8" fontSize="7" textAnchor="middle">(Acidi Nucleici / dsRNA)</text>

              {/* Cytosol Label */}
              <text x="20" y="105" fill="#64748b" fontSize="9" fontFamily="monospace">CITOSOL CELLULARE</text>

              {/* Nuclear Envelope at Bottom */}
              <path
                d="M 10 370 Q 340 330 670 370 L 670 440 L 10 440 Z"
                fill="#0b1120"
                stroke="#1e293b"
                strokeWidth="2"
              />
              {/* Nuclear Pores */}
              <ellipse cx="170" cy="355" rx="14" ry="4" fill="#334155" stroke="#64748b" />
              <text x="170" y="347" fill="#64748b" fontSize="7" textAnchor="middle">Poro Nucleare</text>

              <ellipse cx="510" cy="355" rx="14" ry="4" fill="#334155" stroke="#64748b" />
              <text x="510" y="347" fill="#64748b" fontSize="7" textAnchor="middle">Poro Nucleare</text>

              <text x="340" y="415" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                NUCLEO CELLULARE (DNA / Promotori Trascrizionali)
              </text>

              {/* ==============================================================
                  LEFT PATHWAY: MyD88-DEPENDENT PATHWAY (AMBER / GOLD PALETTE)
                  ============================================================== */}
              {(viewMode === 'both' || viewMode === 'myd88') && (
                <g>
                  {/* Column Header */}
                  <rect x="50" y="15" width="240" height="22" rx="4" fill="#78350f" fillOpacity="0.4" stroke="#d97706" strokeWidth="1" />
                  <text x="170" y="30" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">
                    VIA MyD88-DIPENDENTE (TLR4/2/5/7/9)
                  </text>

                  {/* LPS Molecule + MD-2 Pocket */}
                  <g filter="url(#glowGold)">
                    {/* LPS ligand */}
                    <path d="M 166 22 L 170 35 L 174 22 Z" fill="#ec4899" stroke="#ffffff" strokeWidth="1" />
                    <circle cx="170" cy="22" r="4" fill="#f43f5e" />
                    <text x="170" y="16" fill="#fbcfe8" fontSize="7" fontWeight="bold" textAnchor="middle">LPS</text>
                    {/* MD-2 protein */}
                    <ellipse cx="190" cy="35" rx="8" ry="6" fill="#10b981" stroke="#059669" strokeWidth="1" />
                    <text x="190" y="38" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">MD-2</text>
                  </g>

                  {/* TLR4 Receptor Ectodomain (Horseshoe LRR curves) */}
                  {/* Monomer 1 */}
                  <path
                    d="M 145 65 C 145 35 160 30 166 38"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  {/* Monomer 2 */}
                  <path
                    d="M 195 65 C 195 35 180 30 174 38"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <text x="135" y="48" fill="#fcd34d" fontSize="8" fontWeight="bold">TLR4</text>

                  {/* Transmembrane segments */}
                  <line x1="150" y1="65" x2="150" y2="79" stroke="#b45309" strokeWidth="4" />
                  <line x1="190" y1="65" x2="190" y2="79" stroke="#b45309" strokeWidth="4" />

                  {/* Intracellular TIR Domains */}
                  <rect x="142" y="80" width="16" height="15" rx="3" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
                  <text x="150" y="91" fill="#78350f" fontSize="7" fontWeight="bold" textAnchor="middle">TIR</text>

                  <rect x="182" y="80" width="16" height="15" rx="3" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
                  <text x="190" y="91" fill="#78350f" fontSize="7" fontWeight="bold" textAnchor="middle">TIR</text>

                  {/* STEP 2: MyD88 Adapter & Death Domains */}
                  {currentStep >= 2 && (
                    <g filter="url(#glowGold)">
                      {/* Connection lines TIR to MyD88 */}
                      <line x1="150" y1="95" x2="160" y2="108" stroke="#f59e0b" strokeWidth="2" />
                      <line x1="190" y1="95" x2="180" y2="108" stroke="#f59e0b" strokeWidth="2" />

                      {/* MyD88 Complex (TIR + DD) */}
                      <rect x="145" y="108" width="50" height="22" rx="5" fill="#d97706" stroke="#fef3c7" strokeWidth="1.2" />
                      <text x="170" y="122" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">MyD88</text>
                      <text x="215" y="122" fill="#fde68a" fontSize="7">(TIRAP/Mal)</text>

                      {/* Death Domain indicator */}
                      <rect x="153" y="130" width="34" height="10" rx="2" fill="#b45309" />
                      <text x="170" y="138" fill="#fef3c7" fontSize="6" fontWeight="bold" textAnchor="middle">Death Domain</text>
                    </g>
                  )}

                  {/* STEP 3: IRAK4 / IRAK1 & TRAF6 / TAK1 (The Myddosoma) */}
                  {currentStep >= 3 && (
                    <g>
                      {/* IRAK4 / IRAK1 Complex */}
                      <g filter={isIrak4Deficient ? 'url(#glowRed)' : 'url(#glowGold)'}>
                        <rect
                          x="135"
                          y="150"
                          width="70"
                          height="24"
                          rx="5"
                          fill={isIrak4Deficient ? '#7f1d1d' : '#ea580c'}
                          stroke={isIrak4Deficient ? '#ef4444' : '#fed7aa'}
                          strokeWidth={isIrak4Deficient ? 2 : 1.2}
                        />
                        <text x="170" y="165" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">
                          IRAK4 + IRAK1
                        </text>
                      </g>

                      {/* DEFICIENCY LOCK / BLOCK IF ACTIVATED */}
                      {isIrak4Deficient ? (
                        <g>
                          {/* Cross-out lines */}
                          <line x1="130" y1="145" x2="210" y2="180" stroke="#ef4444" strokeWidth="3" />
                          <line x1="210" y1="145" x2="130" y2="180" stroke="#ef4444" strokeWidth="3" />
                          <rect x="110" y="185" width="120" height="26" rx="4" fill="#450a0a" stroke="#ef4444" />
                          <text x="170" y="197" fill="#fca5a5" fontSize="7" fontWeight="bold" textAnchor="middle">
                            BLOCCO: Deficit IRAK4/MyD88
                          </text>
                          <text x="170" y="206" fill="#fecaca" fontSize="6" textAnchor="middle">
                            Segnale infiammatorio azzerato!
                          </text>
                        </g>
                      ) : (
                        /* Normal Wild-Type continuation */
                        <g>
                          <line x1="170" y1="174" x2="170" y2="190" stroke="#fb923c" strokeWidth="2" strokeDasharray="2 2" />

                          {/* TRAF6 and TAK1 */}
                          <rect x="125" y="190" width="46" height="20" rx="4" fill="#c2410c" stroke="#fed7aa" />
                          <text x="148" y="203" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">TRAF6</text>

                          <rect x="175" y="190" width="42" height="20" rx="4" fill="#047857" stroke="#a7f3d0" />
                          <text x="196" y="203" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">TAK1</text>
                          <text x="225" y="203" fill="#6ee7b7" fontSize="6">K63-Ub</text>
                        </g>
                      )}
                    </g>
                  )}

                  {/* STEP 4: IKK Complex, IκBα Phosphorylation & 26S Proteasome */}
                  {currentStep >= 4 && !isIrak4Deficient && (
                    <g filter="url(#glowGold)">
                      <line x1="170" y1="210" x2="170" y2="225" stroke="#f59e0b" strokeWidth="2" />

                      {/* IKK complex (IKKα, IKKβ, NEMO/IKKγ) */}
                      <g transform="translate(170, 235)">
                        <circle cx="-16" cy="0" r="10" fill="#d97706" stroke="#ffffff" strokeWidth="0.8" />
                        <text x="-16" y="3" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">IKKα</text>

                        <circle cx="0" cy="0" r="11" fill="#ea580c" stroke="#ffffff" strokeWidth="1" />
                        <text x="0" y="3" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">IKKβ</text>

                        <circle cx="16" cy="0" r="10" fill="#b45309" stroke="#ffffff" strokeWidth="0.8" />
                        <text x="16" y="3" fill="#ffffff" fontSize="5.5" fontWeight="bold" textAnchor="middle">NEMO</text>
                      </g>

                      {/* IκBα bound to NF-κB vs Proteasome */}
                      <g transform="translate(170, 275)">
                        {/* IκBα inhibitor tag */}
                        <rect x="-35" y="-14" width="70" height="13" rx="3" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
                        <text x="0" y="-5" fill="#78350f" fontSize="7" fontWeight="bold" textAnchor="middle">IκBα (Inibitore)</text>
                        {/* Phosphate tag on Ser32/36 */}
                        <circle cx="28" cy="-8" r="5" fill="#ef4444" stroke="#ffffff" />
                        <text x="28" y="-5" fill="#ffffff" fontSize="5.5" fontWeight="bold" textAnchor="middle">P</text>

                        {/* Arrow to 26S Proteasome degradation */}
                        <line x1="38" y1="-8" x2="68" y2="-8" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 2" />
                        {/* 26S Proteasome barrel */}
                        <g transform="translate(85, -8)">
                          <rect x="-12" y="-12" width="24" height="24" rx="4" fill="#7c3aed" stroke="#ddd6fe" />
                          <line x1="-12" y1="-4" x2="12" y2="-4" stroke="#a78bfa" />
                          <line x1="-12" y1="4" x2="12" y2="4" stroke="#a78bfa" />
                          <text x="0" y="2" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">26S</text>
                          <text x="0" y="19" fill="#c4b5fd" fontSize="5.5" textAnchor="middle">Proteasoma</text>
                        </g>

                        {/* NF-κB dimer (p50/p65) */}
                        <rect x="-30" y="4" width="28" height="16" rx="3" fill="#2563eb" stroke="#93c5fd" />
                        <text x="-16" y="15" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">p50</text>

                        <rect x="2" y="4" width="28" height="16" rx="3" fill="#1d4ed8" stroke="#93c5fd" />
                        <text x="16" y="15" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">p65</text>
                      </g>
                    </g>
                  )}

                  {/* STEP 5: Nuclear Translocation of NF-κB & Cytokine Transcription */}
                  {currentStep >= 5 && !isIrak4Deficient && (
                    <g filter="url(#glowGold)">
                      {/* Arrow down through nuclear pore */}
                      <path d="M 170 310 L 170 365" stroke="#60a5fa" strokeWidth="2.5" strokeDasharray="3 2" markerEnd="url(#arrow)" />

                      {/* NF-κB active dimer bound to DNA promoter in nucleus */}
                      <g transform="translate(170, 385)">
                        {/* Double helix DNA line */}
                        <path d="M -80 10 Q -40 2 0 10 Q 40 18 80 10" stroke="#38bdf8" strokeWidth="2" fill="none" />
                        <path d="M -80 6 Q -40 14 0 6 Q 40 -2 80 6" stroke="#0ea5e9" strokeWidth="1.5" fill="none" opacity="0.6" />

                        {/* Dimer bound to DNA */}
                        <rect x="-24" y="-8" width="22" height="14" rx="2" fill="#2563eb" stroke="#ffffff" />
                        <text x="-13" y="2" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">p50</text>

                        <rect x="2" y="-8" width="22" height="14" rx="2" fill="#1d4ed8" stroke="#ffffff" />
                        <text x="13" y="2" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">p65</text>

                        {/* Gene transcription bubble */}
                        <rect x="-70" y="18" width="140" height="24" rx="4" fill="#1e1b4b" stroke="#f59e0b" strokeWidth="1" />
                        <text x="0" y="29" fill="#fde68a" fontSize="7.5" fontWeight="bold" textAnchor="middle">
                          Citochine Pro-Infiammatorie:
                        </text>
                        <text x="0" y="38" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">
                          TNF-α · IL-1β · IL-6 · IL-12
                        </text>
                      </g>
                    </g>
                  )}
                </g>
              )}

              {/* ==============================================================
                  RIGHT PATHWAY: TRIF-DEPENDENT PATHWAY (CYAN / BLUE PALETTE)
                  ============================================================== */}
              {(viewMode === 'both' || viewMode === 'trif') && (
                <g>
                  {/* Column Header */}
                  <rect x="390" y="15" width="240" height="22" rx="4" fill="#164e63" fillOpacity="0.4" stroke="#06b6d4" strokeWidth="1" />
                  <text x="510" y="30" fill="#67e8f9" fontSize="10" fontWeight="bold" textAnchor="middle">
                    VIA TRIF-DIPENDENTE (TLR3 / TLR4 Endosoma)
                  </text>

                  {/* dsRNA / Ligand inside Endosome */}
                  <g filter="url(#glowCyan)">
                    {/* dsRNA double ladder */}
                    <path d="M 500 74 Q 515 82 530 74" stroke="#a855f7" strokeWidth="2.5" fill="none" />
                    <path d="M 500 78 Q 515 86 530 78" stroke="#c084fc" strokeWidth="2.5" fill="none" />
                    <text x="515" y="67" fill="#e9d5ff" fontSize="7" fontWeight="bold" textAnchor="middle">dsRNA</text>
                  </g>

                  {/* TLR3 / TLR4 Ectodomain (Horseshoe LRR curves inside/crossing endosome) */}
                  <path
                    d="M 485 105 C 485 70 500 70 510 76"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="6.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 545 105 C 545 70 530 70 520 76"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="6.5"
                    strokeLinecap="round"
                  />
                  <text x="465" y="80" fill="#7dd3fc" fontSize="8" fontWeight="bold">TLR3/4</text>

                  {/* Transmembrane segments crossing endosomal bilayer */}
                  <line x1="490" y1="105" x2="490" y2="120" stroke="#0369a1" strokeWidth="4" />
                  <line x1="540" y1="105" x2="540" y2="120" stroke="#0369a1" strokeWidth="4" />

                  {/* Intracellular TIR Domains facing the Cytosol */}
                  <rect x="482" y="122" width="16" height="15" rx="3" fill="#06b6d4" stroke="#ffffff" strokeWidth="1" />
                  <text x="490" y="133" fill="#083344" fontSize="7" fontWeight="bold" textAnchor="middle">TIR</text>

                  <rect x="532" y="122" width="16" height="15" rx="3" fill="#06b6d4" stroke="#ffffff" strokeWidth="1" />
                  <text x="540" y="133" fill="#083344" fontSize="7" fontWeight="bold" textAnchor="middle">TIR</text>

                  {/* STEP 2: TRIF Adapter & TRAM */}
                  {currentStep >= 2 && (
                    <g filter="url(#glowCyan)">
                      <line x1="490" y1="137" x2="502" y2="150" stroke="#06b6d4" strokeWidth="2" />
                      <line x1="540" y1="137" x2="528" y2="150" stroke="#06b6d4" strokeWidth="2" />

                      {/* TRAM Bridging Adapter */}
                      <circle cx="548" cy="148" r="9" fill="#0284c7" stroke="#bae6fd" strokeWidth="1" />
                      <text x="548" y="151" fill="#ffffff" fontSize="5.5" fontWeight="bold" textAnchor="middle">TRAM</text>

                      {/* TRIF Adapter complex */}
                      <rect x="480" y="150" width="55" height="22" rx="5" fill="#0891b2" stroke="#cffafe" strokeWidth="1.2" />
                      <text x="507" y="164" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">TRIF</text>
                      <text x="507" y="180" fill="#a5f3fc" fontSize="6.5" textAnchor="middle">(TICAM-1)</text>
                    </g>
                  )}

                  {/* STEP 3: TRAF3 and TBK1 / IKKε Kinase Complex */}
                  {currentStep >= 3 && (
                    <g filter="url(#glowCyan)">
                      <line x1="510" y1="184" x2="510" y2="200" stroke="#38bdf8" strokeWidth="2" />

                      {/* TRAF3 Adapter */}
                      <rect x="485" y="198" width="50" height="18" rx="4" fill="#0369a1" stroke="#bae6fd" />
                      <text x="510" y="210" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">TRAF3</text>

                      <line x1="510" y1="216" x2="510" y2="230" stroke="#38bdf8" strokeWidth="2" strokeDasharray="2 2" />

                      {/* TBK1 & IKKε Non-canonical Kinases */}
                      <g transform="translate(510, 240)">
                        <rect x="-35" y="-10" width="32" height="20" rx="4" fill="#0284c7" stroke="#ffffff" strokeWidth="1" />
                        <text x="-19" y="3" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">TBK1</text>

                        <rect x="3" y="-10" width="32" height="20" rx="4" fill="#0e7490" stroke="#ffffff" strokeWidth="1" />
                        <text x="19" y="3" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">IKKε</text>
                      </g>
                    </g>
                  )}

                  {/* STEP 4: IRF3 Phosphorylation & Dimerization */}
                  {currentStep >= 4 && (
                    <g filter="url(#glowCyan)">
                      <line x1="510" y1="252" x2="510" y2="275" stroke="#38bdf8" strokeWidth="2" />

                      {/* Dimerized IRF3 with Phosphate groups */}
                      <g transform="translate(510, 290)">
                        {/* Monomer 1 */}
                        <rect x="-24" y="-10" width="22" height="20" rx="3" fill="#0891b2" stroke="#bae6fd" />
                        <text x="-13" y="3" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">IRF3</text>

                        {/* Monomer 2 */}
                        <rect x="2" y="-10" width="22" height="20" rx="3" fill="#0891b2" stroke="#bae6fd" />
                        <text x="13" y="3" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">IRF3</text>

                        {/* Phosphorylation tags */}
                        <circle cx="-13" cy="-12" r="5" fill="#ef4444" stroke="#ffffff" />
                        <text x="-13" y="-9" fill="#ffffff" fontSize="5.5" fontWeight="bold" textAnchor="middle">P</text>

                        <circle cx="13" cy="-12" r="5" fill="#ef4444" stroke="#ffffff" />
                        <text x="13" y="-9" fill="#ffffff" fontSize="5.5" fontWeight="bold" textAnchor="middle">P</text>

                        <text x="0" y="20" fill="#a5f3fc" fontSize="6.5" textAnchor="middle">Dimero Omofilico Attivo</text>
                      </g>
                    </g>
                  )}

                  {/* STEP 5: Nuclear Translocation of IRF3 & Type I IFN Transcription */}
                  {currentStep >= 5 && (
                    <g filter="url(#glowCyan)">
                      {/* Arrow down through nuclear pore */}
                      <path d="M 510 318 L 510 365" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="3 2" />

                      {/* IRF3 Dimer bound to DNA in nucleus */}
                      <g transform="translate(510, 385)">
                        {/* DNA strands */}
                        <path d="M -80 10 Q -40 2 0 10 Q 40 18 80 10" stroke="#38bdf8" strokeWidth="2" fill="none" />
                        <path d="M -80 6 Q -40 14 0 6 Q 40 -2 80 6" stroke="#0ea5e9" strokeWidth="1.5" fill="none" opacity="0.6" />

                        {/* Dimer on DNA */}
                        <rect x="-22" y="-8" width="20" height="14" rx="2" fill="#0891b2" stroke="#ffffff" />
                        <text x="-12" y="2" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">IRF3</text>

                        <rect x="2" y="-8" width="20" height="14" rx="2" fill="#0891b2" stroke="#ffffff" />
                        <text x="12" y="2" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">IRF3</text>

                        <circle cx="0" cy="-10" r="4" fill="#ef4444" stroke="#ffffff" />
                        <text x="0" y="-7" fill="#ffffff" fontSize="5" fontWeight="bold" textAnchor="middle">P</text>

                        {/* Gene transcription output bubble */}
                        <rect x="-70" y="18" width="140" height="24" rx="4" fill="#083344" stroke="#38bdf8" strokeWidth="1" />
                        <text x="0" y="29" fill="#a5f3fc" fontSize="7.5" fontWeight="bold" textAnchor="middle">
                          Risposta Antivirale Innata:
                        </text>
                        <text x="0" y="38" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">
                          Interferone-β (IFN-β) · ISGs
                        </text>
                      </g>
                    </g>
                  )}
                </g>
              )}
            </svg>
          </div>

          {/* Molecular Detail HUD at bottom of stage */}
          <div className="mt-2 pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex flex-wrap items-center justify-between gap-2">
            <span>{steps[currentStep - 1].molecularDetails}</span>
            <span className="text-indigo-400 font-semibold">Fase {currentStep} di 5</span>
          </div>
        </div>

        {/* Right Column: High-Res Medical Textbook Illustration & Breakdown HUD (5 cols) */}
        <div className="lg:col-span-5 p-5 bg-slate-50 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-700 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                Tavola Anatomica Ufficiale
              </span>
              <button
                onClick={() => setIsImageModalOpen(true)}
                className="text-[11px] font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Ingrandisci</span>
              </button>
            </div>

            {/* Thumbnail Card with click to enlarge */}
            <div
              onClick={() => setIsImageModalOpen(true)}
              className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-2xs group cursor-pointer relative"
              title="Clicca per ingrandire la tavola didattica"
            >
              <img
                src={IMAGES.tlrMyd88TrifPathway}
                onError={(e) => {
                  e.currentTarget.src = '/images/tlr_myd88_trif_pathway_1793614999882.jpg';
                }}
                alt="Illustrazione scientifica universitaria delle due vie di segnalazione MyD88 vs TRIF a confronto"
                className="w-full h-48 object-cover group-hover:scale-102 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-xs text-white flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5" /> Clicca per visualizzare ad alta risoluzione
                </span>
              </div>
              <div className="p-3 text-[11px] text-slate-600 bg-white leading-relaxed border-t border-slate-100">
                <strong>Figura 4.1:</strong> Rappresentazione a confronto diretto della via <em>MyD88-dipendente</em> (membrana, NF-κB, citochine flogistiche) e della via <em>TRIF-dipendente</em> (endosoma, IRF3, Interferoni di Tipo I).
              </div>
            </div>

            {/* Current Step Comparison Cards */}
            <div className="space-y-2.5">
              <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                <span>Dettaglio della Fase Corrente:</span>
                <span className="text-indigo-600 font-mono text-[11px] font-semibold">Step {currentStep}</span>
              </div>

              {/* MyD88 Branch Detail */}
              <div className="p-3 rounded-lg bg-amber-50/80 border border-amber-200 text-xs">
                <div className="font-bold text-amber-900 flex items-center gap-1.5 mb-1">
                  <Flame className="w-3.5 h-3.5 text-amber-600" />
                  <span>Ramo MyD88 (Infiammazione Pirogena)</span>
                </div>
                <p className="text-amber-800 leading-relaxed font-serif-body">
                  {steps[currentStep - 1].myd88Action}
                </p>
              </div>

              {/* TRIF Branch Detail */}
              <div className="p-3 rounded-lg bg-cyan-50/80 border border-cyan-200 text-xs">
                <div className="font-bold text-cyan-900 flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Ramo TRIF (Risposta Antivirale IFN)</span>
                </div>
                <p className="text-cyan-800 leading-relaxed font-serif-body">
                  {steps[currentStep - 1].trifAction}
                </p>
              </div>
            </div>
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="pt-4 border-t border-slate-200 mt-4 flex items-center justify-between">
            <button
              onClick={() => setCurrentStep(prev => Math.max(prev - 1, 1))}
              disabled={currentStep === 1}
              className="px-3 py-1.5 rounded-md text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 cursor-pointer"
            >
              Fase Precedente
            </button>
            <span className="text-xs text-slate-500 font-mono">
              Fase {currentStep} di {steps.length}
            </span>
            <button
              onClick={() => setCurrentStep(prev => Math.min(prev + 1, steps.length))}
              disabled={currentStep === steps.length}
              className="px-3 py-1.5 rounded-md text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40 cursor-pointer flex items-center gap-1"
            >
              <span>Fase Successiva</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Printable Unrolled Table of all 5 Steps (A4 Format) */}
      <div className="hidden print:block p-6 border-t border-slate-200 bg-white">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4 font-mono flex items-center justify-between border-b border-slate-300 pb-2">
          <span>Tavola Biochimica Unificata: Via MyD88 vs Via TRIF Srotolate in Sequenza</span>
          <span className="text-slate-500 font-mono">5 Fasi Molecolari</span>
        </div>

        <div className="space-y-4">
          {steps.map((st) => (
            <div key={st.num} className="p-4 rounded-lg border border-slate-300 bg-slate-50/60 break-inside-avoid space-y-2 text-xs">
              <div className="flex items-center justify-between font-bold text-slate-900 border-b border-slate-200 pb-1">
                <span className="text-sm text-indigo-900">{st.title}</span>
                <span className="font-mono text-[10px] text-slate-500">Fase {st.num} di 5</span>
              </div>
              <p className="text-slate-700 leading-relaxed italic">{st.desc}</p>
              
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-2.5 rounded bg-amber-50/80 border border-amber-200">
                  <strong className="text-amber-900 block font-bold mb-1">Ramo MyD88 (Infiammazione & NF-κB):</strong>
                  <p className="text-slate-800 text-[11px] leading-relaxed">{st.myd88Action}</p>
                </div>
                <div className="p-2.5 rounded bg-cyan-50/80 border border-cyan-200">
                  <strong className="text-cyan-900 block font-bold mb-1">Ramo TRIF (Antivirale & IRF3):</strong>
                  <p className="text-slate-800 text-[11px] leading-relaxed">{st.trifAction}</p>
                </div>
              </div>

              <div className="pt-1 text-[11px] text-slate-600 font-mono">
                <strong>Complessi Molecolari:</strong> {st.molecularDetails}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-950 break-inside-avoid">
          <strong>Correlazione Clinica (Deficit di IRAK-4 e MyD88):</strong> I pazienti con mutazioni a carico di IRAK-4 o MyD88 presentano suscettibilità selettiva a infezioni piogeniche invasive gravi da batteri capsulati (Streptococcus pneumoniae, Pseudomonas aeruginosa) nei primi anni di vita, con assenza paradossa dei classici segni sistemici flogistici (mancata febbre e mancato innalzamento di PCR), mentre mantengono intatta la risposta antivirale mediata da TRIF e IRF3.
        </div>
      </div>

      {/* Lightbox Modal for High-Resolution Medical Illustration */}
      {isImageModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div>
                <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">
                  Tavola Didattica: Vie di Segnalazione MyD88 vs TRIF a Confronto Diretto
                </h4>
                <p className="text-xs text-slate-500">
                  Rappresentazione ad alta fedeltà con disegni recettoriali, adattatori, cascata chinasica e pori nucleari.
                </p>
              </div>
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                title="Chiudi visualizzazione"
              >
                ✕
              </button>
            </div>

            <div className="p-4 sm:p-6 flex items-center justify-center bg-slate-950">
              <img
                src={IMAGES.tlrMyd88TrifPathway}
                onError={(e) => {
                  e.currentTarget.src = '/images/tlr_myd88_trif_pathway_1793614999882.jpg';
                }}
                alt="Tavola anatomica completa ad alta risoluzione: MyD88-dependent pathway vs TRIF-dependent pathway"
                className="max-h-[68vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>

            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
              <div className="p-3 bg-white rounded-lg border border-amber-200">
                <strong className="text-amber-900 block font-bold mb-1">
                  Via Sinistra: MyD88-Dipendente (Infiammazione Flogistica)
                </strong>
                <p className="leading-relaxed">
                  Ingaggio di TLR4/MD-2 con LPS → Dimerizzazione domini TIR → Reclutamento MyD88 e formazione del Myddosoma con IRAK4 e IRAK1 → Auto-ubiquitinazione di TRAF6 e attivazione di TAK1 → Fosforilazione del complesso IKK (IKKα, IKKβ, NEMO) → Fosforilazione e distruzione di IκBα nel proteasoma 26S → Ingresso nucleare del dimero NF-κB (p50/p65) → Trascrizione di TNF-α, IL-1β, IL-6.
                </p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-cyan-200">
                <strong className="text-cyan-900 block font-bold mb-1">
                  Via Destra: TRIF-Dipendente (Immunità Antivirale)
                </strong>
                <p className="leading-relaxed">
                  Ingaggio di TLR3 con dsRNA (o TLR4 endocitato tramite TRAM) → Reclutamento di TRIF → Reclutamento di TRAF3 → Attivazione del complesso chinasico non-canonico TBK1 e IKKε → Fosforilazione C-terminale e omodimerizzazione di IRF3 → Traslocazione attraverso il poro nucleare → Legame ai siti PRD del promotore di IFN-β → Induzione robusta di Interferone di Tipo I (IFN-β).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
