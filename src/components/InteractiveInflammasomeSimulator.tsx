import React, { useState } from 'react';
import {
  Flame,
  Sparkles,
  AlertTriangle,
  ShieldCheck,
  Play,
  RotateCcw,
  Activity,
  Droplets,
  HeartPulse,
  Pill,
  Volume2,
  Maximize2,
  ChevronRight,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { IMAGES } from '../data/imageAssets';
import { useTtsInteractive } from '../hooks/useTtsInteractive';

type TriggerType = 'atp_k_efflux' | 'msu_crystals' | 'silica' | 'caps_mutation';
type DrugType = 'none' | 'anakinra' | 'canakinumab' | 'mcc950' | 'colchicine';

interface InflammasomeStep {
  num: number;
  title: string;
  shortTitle: string;
  desc: string;
  molecularDetails: string;
}

export const InteractiveInflammasomeSimulator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [hasPriming, setHasPriming] = useState<boolean>(true);
  const [selectedTrigger, setSelectedTrigger] = useState<TriggerType>('msu_crystals');
  const [selectedDrug, setSelectedDrug] = useState<DrugType>('none');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);

  const { explainState, explainWhatIf } = useTtsInteractive();

  const steps: InflammasomeStep[] = [
    {
      num: 1,
      title: "1. Segnale 1 (Priming): Trascrizione NF-κB Dipendente",
      shortTitle: "1. Priming (NF-κB)",
      desc: "L'ingaggio di TLR4 o recettori citochinici (TNF-R, IL-1R) attiva NF-κB, che trasloca nel nucleo e induce la trascrizione di NLRP3 monomerico, pro-IL-1β (31 kDa) e pro-IL-18. In assenza di priming, le scorte citosoliche sono insufficienti.",
      molecularDetails: "Attivazione NF-κB · Sintesi NLRP3 · Sintesi zimogeno pro-IL-1β (31 kDa) e pro-IL-18."
    },
    {
      num: 2,
      title: "2. Segnale 2 (Triggering): Perturbazione Ionica & Stress Citosolico",
      shortTitle: "2. Triggering (PAMP/DAMP)",
      desc: "Cristalli di acido urico (MSU), efflusso massivo di potassio (K+), ATP extracellulare sul canale purinergico P2X7 o danno mitocondriale con rilascio di ROS innescano il cambiamento conformazionale del monomero NLRP3 con apertura del dominio NACHT.",
      molecularDetails: "Efflusso K+ · Canale P2X7 · Cristalli di urato monosodico (MSU) · Idrolisi ATP nel dominio NACHT."
    },
    {
      num: 3,
      title: "3. Assemblaggio del Disco Eptamerico & ASC Speck",
      shortTitle: "3. Assemblaggio Disco & ASC",
      desc: "I domini NACHT esposti oligomerizzano formando un disco eptamerico a 7 bracci. I domini PYD C-terminali nucleano la polimerizzazione a cascata dell'adattatore ASC, che collassa in un macromolecolare 'ASC speck' perinucleare visibile al microscopio.",
      molecularDetails: "Ruota eptamerica NLRP3 (7 subunità) · Filamento prion-like ASC speck (1 µm) · Interazione PYD-PYD."
    },
    {
      num: 4,
      title: "4. Reclutamento & Attivazione Catalitica della Caspasi-1",
      shortTitle: "4. Attivazione Caspasi-1",
      desc: "Il dominio CARD di ASC recluta la Pro-Caspasi-1 (45 kDa). L'avvicinamento spaziale forzato (autoclivaggio per prossimità) genera il tetramero catalitico attivo di Caspasi-1 (subunità p20 e p10), che cliva pro-IL-1β in IL-1β matura (17 kDa) e Gasdermina D.",
      molecularDetails: "Interazione CARD-CARD · Autoclivaggio pro-caspasi-1 in p20/p10 · Maturazione IL-1β (17 kDa) e IL-18."
    },
    {
      num: 5,
      title: "5. Pori di Gasdermina D (GSDMD), Piroptosi & Rilascio di Citochine",
      shortTitle: "5. Pori GSDMD & Piroptosi",
      desc: "Il frammento N-terminale lipofilo della Gasdermina D (GSDMD-NT) oligomerizza nella membrana plasmatica formando pori di 21 nm. Le citochine mature fuoriescono all'esterno e l'influsso osmotico di acqua causa rigonfiamento, lisi piroptotica ed allerta flogistica sistemica.",
      molecularDetails: "Oligomero circolare a 24-28 subunità di GSDMD · Poro litico 21 nm · Morte cellulare programmata infiammatoria."
    }
  ];

  const handleSelectStep = (sNum: number) => {
    setCurrentStep(sNum);
  };

  const handleSpeakCurrentStep = () => {
    const target = steps.find(s => s.num === currentStep);
    if (target) {
      if (!hasPriming && currentStep >= 2) {
        explainWhatIf(
          "manca il Segnale 1 di priming via NF-κB",
          "le scorte di pro-IL-1β e del sensore NLRP3 sono assenti nel citoplasma: il secondo segnale non può produrre citochine infiammatorie"
        );
      } else if (selectedDrug === 'anakinra' && currentStep === 5) {
        explainWhatIf(
          "si somministra Anakinra",
          "la citochina IL-1β viene secreta ma il farmaco antagonista recettoriale ne blocca l'ingaggio sul recettore IL-1R1, spegnendo la febbre e i sintomi della gotta o sindromi periodiche CAPS"
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

  const handleTriggerChange = (trig: TriggerType) => {
    setSelectedTrigger(trig);
  };

  const handleDrugChange = (drug: DrugType) => {
    setSelectedDrug(drug);
  };

  const spokenOverview = "Simulatore interattivo a due segnali dell'inflammasoma NLRP3 e della piroptosi cellulare. Il segnale uno, o priming, dipende da NF-kappa-B e genera le scorte di pro-interleuchina-1-beta e NLRP3. Il segnale due, causato da efflusso di potassio, cristalli di acido urico o ATP, induce l'oligomerizzazione a ruota eptamerica di NLRP3 e il filamento ASC speck. La Caspasi-1 si attiva e taglia pro-IL-1-beta in citochina matura e la Gasdermina D, che crea pori di 21 nanometri nella membrana plasmatica provocando lisi piroptotica ed effusione di allarmine flogistiche.";

  return (
    <div
      data-speech-text={spokenOverview}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden my-6 shadow-sm"
    >
      {/* Top Header & Actions */}
      <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-200">
              Modello a Due Segnali & Piroptosi
            </span>
            <span className="text-xs text-slate-500 font-mono">NLRP3 · ASC Speck · Gasdermin D</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
            Simulatore Dinamico: Inflammasoma NLRP3, Caspasi-1 e Pori di Gasdermina D
          </h3>
          <p className="text-xs text-slate-600 mt-1 max-w-2xl">
            Dal priming trascrizionale di NF-κB al secondo segnale ionico/cristallino, fino alla formazione del poro di GSDMD e ai target farmacologici (Anakinra, Canakinumab, Colchicina).
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 print:hidden">
          {/* Signal 1 Toggle */}
          <button
            onClick={() => setHasPriming(!hasPriming)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
              hasPriming
                ? 'bg-blue-600 text-white border-blue-700 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
            title="Attiva/Disattiva il Priming (Segnale 1 via NF-κB)"
          >
            <span>{hasPriming ? 'Segnale 1 (Priming): ON' : 'Segnale 1: ASSENTE'}</span>
          </button>

          {/* Audio TTS */}
          <button
            onClick={handleSpeakCurrentStep}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Ascolta spiegazione vocale della fase corrente"
          >
            <Volume2 className="w-3.5 h-3.5 text-rose-600" />
            <span>Ascolta Fase</span>
          </button>

          {/* Play Animation */}
          <button
            onClick={handlePlayCycle}
            disabled={isPlaying}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-rose-600 text-white hover:bg-rose-700 disabled:opacity-50 transition-colors shadow-xs cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isPlaying ? 'Animazione...' : 'Avvia Animazione'}</span>
          </button>

          {/* Reset */}
          <button
            onClick={() => { setCurrentStep(1); setHasPriming(true); setSelectedDrug('none'); }}
            className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Reimposta simulazione"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Controls & Graphical Simulation (Screen Only) */}
      <div className="print:hidden">
        {/* Trigger & Drug Ribbon */}
        <div className="p-3.5 bg-slate-100/70 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Trigger Selection */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold text-slate-700 font-mono text-[11px] uppercase">Segnale 2 (Trigger):</span>
          <button
            onClick={() => handleTriggerChange('msu_crystals')}
            className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
              selectedTrigger === 'msu_crystals'
                ? 'bg-rose-600 text-white shadow-2xs'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            Cristalli Urico (Gotta)
          </button>
          <button
            onClick={() => handleTriggerChange('atp_k_efflux')}
            className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
              selectedTrigger === 'atp_k_efflux'
                ? 'bg-rose-600 text-white shadow-2xs'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            ATP / Efflusso K+
          </button>
          <button
            onClick={() => handleTriggerChange('caps_mutation')}
            className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
              selectedTrigger === 'caps_mutation'
                ? 'bg-purple-600 text-white shadow-2xs'
                : 'bg-white text-purple-700 hover:bg-purple-50 border border-purple-200'
            }`}
          >
            Mutazione CAPS (NACHT)
          </button>
        </div>

        {/* Drug Selection */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold text-slate-700 font-mono text-[11px] uppercase flex items-center gap-1">
            <Pill className="w-3.5 h-3.5 text-emerald-600" />
            Farmaco:
          </span>
          <select
            value={selectedDrug}
            onChange={(e) => handleDrugChange(e.target.value as DrugType)}
            className="bg-white border border-slate-200 rounded-md px-2 py-1 text-xs font-semibold text-slate-800 cursor-pointer shadow-2xs focus:ring-1 focus:ring-indigo-500"
          >
            <option value="none">Nessun Farmaco (Wild Type)</option>
            <option value="anakinra">Anakinra (Anti-IL-1R1)</option>
            <option value="canakinumab">Canakinumab (Anti-IL-1β)</option>
            <option value="colchicina">Colchicina (Blocco Microtubuli ASC)</option>
            <option value="mcc950">MCC950 (Inibitore NACHT)</option>
          </select>
        </div>
      </div>

      {/* Step Buttons Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-b border-slate-200 divide-x divide-slate-200 text-xs font-medium">
        {steps.map((st) => (
          <button
            key={st.num}
            onClick={() => handleSelectStep(st.num)}
            className={`p-3 text-left transition-colors flex items-center justify-between cursor-pointer ${
              currentStep === st.num
                ? 'bg-rose-50/80 text-rose-950 border-b-2 border-rose-600 font-bold'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span className="truncate">{st.shortTitle}</span>
            {currentStep === st.num && <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 ml-1" />}
          </button>
        ))}
      </div>

      {/* Stage Layout: Left Interactive Graphical SVG + Right Micrograph & Molecular HUD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200">
        {/* Left Column: Interactive High-Precision SVG Diagram (7 cols) */}
        <div className="lg:col-span-7 p-5 sm:p-6 bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden select-none">
          {/* Status bar */}
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
            <span className="flex items-center gap-1.5 text-rose-300">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
              Fase {currentStep} di 5: {steps[currentStep - 1].shortTitle}
            </span>
            <span className="text-[11px] text-slate-400">
              {selectedDrug !== 'none' ? (
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Blocco: {selectedDrug.toUpperCase()}
                </span>
              ) : (
                'Cascata Infiammatoria Attiva'
              )}
            </span>
          </div>

          {/* SVG Canvas depicting Cell Membrane, Priming, Disc Assembly, GSDMD Pore, and Cytokine Release */}
          <div className="w-full py-2 flex items-center justify-center">
            <svg
              viewBox="0 0 680 440"
              className="w-full h-auto max-w-[620px]"
              aria-label="Diagramma vettoriale dell'inflammasoma NLRP3, assemblaggio disco e piroptosi"
            >
              <defs>
                <linearGradient id="inflamMemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>

                <filter id="roseGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
              </defs>

              {/* Cell Plasma Membrane at top */}
              <rect x="20" y="65" width="640" height="14" rx="2" fill="url(#inflamMemGrad)" stroke="#64748b" strokeWidth="1" />
              <text x="35" y="76" fill="#94a3b8" fontSize="8" fontFamily="monospace">Membrana Plasmatica del Macrofago / Monocita</text>
              <text x="35" y="45" fill="#cbd5e1" fontSize="9" fontWeight="bold">Spazio Extracellulare</text>
              <text x="35" y="105" fill="#64748b" fontSize="8" fontFamily="monospace">CITOSOL CELLULARE</text>

              {/* Nucleus at Bottom Left */}
              <path d="M 20 340 Q 150 300 280 340 L 280 430 L 20 430 Z" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
              <text x="140" y="380" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">NUCLEO (DNA / NF-κB)</text>

              {/* STEP 1: SIGNAL 1 PRIMING */}
              <g transform="translate(60, 20)">
                {/* TLR4 binding PAMP/LPS */}
                <path d="M 0 45 C 0 25 15 20 20 28" fill="none" stroke="#d97706" strokeWidth="5" />
                <path d="M 40 45 C 40 25 25 20 20 28" fill="none" stroke="#d97706" strokeWidth="5" />
                <text x="20" y="15" fill="#fbbf24" fontSize="7" fontWeight="bold" textAnchor="middle">TLR4 / PAMP</text>
                <line x1="20" y1="45" x2="20" y2="80" stroke="#f59e0b" strokeWidth="2" strokeDasharray="2 2" />

                {/* Arrow to Nucleus */}
                <path d="M 20 90 L 80 320" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
                <rect x="40" y="200" width="80" height="20" rx="3" fill="#78350f" stroke="#f59e0b" />
                <text x="80" y="213" fill="#fef3c7" fontSize="7" fontWeight="bold" textAnchor="middle">NF-κB Attivato</text>
              </g>

              {/* Monomer synthesis arrow from nucleus into cytosol */}
              {hasPriming && (
                <g filter="url(#roseGlow)">
                  <path d="M 170 330 Q 230 250 250 180" stroke="#38bdf8" strokeWidth="2" strokeDasharray="2 2" />
                  <rect x="210" y="160" width="75" height="24" rx="4" fill="#1e3a8a" stroke="#60a5fa" />
                  <text x="247" y="172" fill="#bfdbfe" fontSize="6.5" fontWeight="bold" textAnchor="middle">NLRP3 monomeri</text>
                  <text x="247" y="181" fill="#93c5fd" fontSize="6" textAnchor="middle">+ pro-IL-1β (31 kDa)</text>
                </g>
              )}

              {/* STEP 2: SIGNAL 2 TRIGGERING (MSU crystals / ATP / K+ efflux) */}
              <g transform="translate(480, 25)" filter="url(#roseGlow)">
                {/* P2X7 channel with ATP or crystal entry */}
                <rect x="-15" y="35" width="30" height="18" rx="3" fill="#dc2626" stroke="#fca5a5" />
                <text x="0" y="47" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">P2X7</text>
                <line x1="0" y1="15" x2="0" y2="35" stroke="#ef4444" strokeWidth="2" />
                <circle cx="0" cy="12" r="5" fill="#f87171" />
                <text x="0" y="14" fill="#ffffff" fontSize="5" fontWeight="bold" textAnchor="middle">ATP</text>

                {/* K+ efflux arrow */}
                <path d="M 15 65 Q 35 45 35 25" stroke="#38bdf8" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                <text x="45" y="40" fill="#7dd3fc" fontSize="7" fontWeight="bold">K+ out</text>

                {/* MSU Crystals */}
                {selectedTrigger === 'msu_crystals' && (
                  <g transform="translate(-60, 60)">
                    <polygon points="0,0 20,-10 30,5 10,15" fill="#e2e8f0" stroke="#64748b" />
                    <text x="15" y="5" fill="#0f172a" fontSize="6" fontWeight="bold" textAnchor="middle">MSU</text>
                  </g>
                )}
              </g>

              {/* STEP 3: THE HEPTAMERIC NLRP3 DISC & ASC SPECK */}
              {currentStep >= 3 && hasPriming && (
                <g transform="translate(360, 220)" filter="url(#roseGlow)">
                  {/* Outer circle of the heptamer (7 spokes) */}
                  <circle cx="0" cy="0" r="45" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="2" strokeDasharray="8 4" />
                  {/* Center hub (NACHT oligomer) */}
                  <circle cx="0" cy="0" r="16" fill="#6d28d9" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="0" y="3" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">NACHT</text>

                  {/* 7 Spoke Petals */}
                  {[0, 51.4, 102.8, 154.2, 205.7, 257.1, 308.5].map((angle, idx) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 32 * Math.cos(rad);
                    const y = 32 * Math.sin(rad);
                    return (
                      <circle
                        key={idx}
                        cx={x}
                        cy={y}
                        r="7"
                        fill="#f43f5e"
                        stroke="#ffffff"
                        strokeWidth="1"
                      />
                    );
                  })}

                  <text x="0" y="58" fill="#e9d5ff" fontSize="8" fontWeight="bold" textAnchor="middle">
                    Disco Eptamerico NLRP3
                  </text>

                  {/* ASC Speck polymer */}
                  <g transform="translate(70, -25)">
                    <path d="M 0 0 Q 20 -20 40 -10 Q 60 0 50 20 Q 30 30 10 15 Z" fill="#9333ea" stroke="#d8b4fe" />
                    <text x="28" y="5" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">ASC Speck</text>
                  </g>
                </g>
              )}

              {/* STEP 4: CASPASE-1 CLEAVAGE OF IL-1β */}
              {currentStep >= 4 && hasPriming && (
                <g transform="translate(520, 220)" filter="url(#roseGlow)">
                  {/* Active Caspase-1 Tetramer */}
                  <rect x="-24" y="-14" width="48" height="28" rx="5" fill="#b91c1c" stroke="#fca5a5" strokeWidth="1.5" />
                  <text x="0" y="-1" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">Caspasi-1</text>
                  <text x="0" y="9" fill="#fecaca" fontSize="6" textAnchor="middle">(p20 / p10)</text>

                  {/* Cleavage of pro-IL-1β into mature IL-1β */}
                  <line x1="0" y1="20" x2="0" y2="45" stroke="#ef4444" strokeWidth="2" strokeDasharray="2 2" />
                  <g transform="translate(0, 55)">
                    <circle cx="0" cy="0" r="10" fill="#ea580c" stroke="#fed7aa" />
                    <text x="0" y="3" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">IL-1β</text>
                    <text x="0" y="17" fill="#fde68a" fontSize="5.5" textAnchor="middle">17 kDa</text>
                  </g>
                </g>
              )}

              {/* STEP 5: GASDERMIN D PORE (21 nm) & PYROPTOSIS LYSIS */}
              {currentStep >= 5 && hasPriming && (
                <g transform="translate(360, 65)" filter="url(#roseGlow)">
                  {/* Break in plasma membrane */}
                  <rect x="-25" y="-3" width="50" height="20" rx="3" fill="#0f172a" />
                  {/* Gasdermin D pore ring */}
                  <circle cx="-16" cy="7" r="7" fill="#f97316" stroke="#ffffff" />
                  <circle cx="16" cy="7" r="7" fill="#f97316" stroke="#ffffff" />
                  <text x="0" y="10" fill="#fed7aa" fontSize="6.5" fontWeight="bold" textAnchor="middle">Poro 21nm</text>
                  <text x="0" y="-10" fill="#f97316" fontSize="7" fontWeight="bold" textAnchor="middle">
                    GASDERMINA D (GSDMD)
                  </text>

                  {/* Efflux of Mature IL-1β, IL-18, and Influx of Water (Swelling) */}
                  <g transform="translate(0, -30)">
                    <ellipse cx="-15" cy="0" rx="6" ry="6" fill="#ea580c" />
                    <text x="-15" y="3" fill="#ffffff" fontSize="5" fontWeight="bold" textAnchor="middle">IL-1β</text>

                    <ellipse cx="15" cy="0" rx="6" ry="6" fill="#c2410c" />
                    <text x="15" y="3" fill="#ffffff" fontSize="5" fontWeight="bold" textAnchor="middle">IL-18</text>

                    {/* Water influx */}
                    <path d="M 0 -8 L 0 15" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
                    <text x="0" y="-14" fill="#38bdf8" fontSize="6.5" fontWeight="bold" textAnchor="middle">
                      H2O Influx → PIROPTOSI
                    </text>
                  </g>
                </g>
              )}
            </svg>
          </div>

          {/* Molecular Detail HUD at bottom of stage */}
          <div className="mt-2 pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex flex-wrap items-center justify-between gap-2">
            <span>{steps[currentStep - 1].molecularDetails}</span>
            <span className="text-rose-400 font-semibold">Fase {currentStep} di 5</span>
          </div>
        </div>

        {/* Right Column: High-Res Medical Textbook Illustration & Breakdown HUD (5 cols) */}
        <div className="lg:col-span-5 p-5 bg-slate-50 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-rose-700 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                Tavola Didattica Universitaria
              </span>
              <button
                onClick={() => setIsImageModalOpen(true)}
                className="text-[11px] font-medium text-rose-600 hover:text-rose-800 flex items-center gap-1 cursor-pointer"
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
                src={IMAGES.inflammasomePathway}
                onError={(e) => {
                  e.currentTarget.src = '/images/inflammasome_nlrp3_pathway_1792323880438.jpg';
                }}
                alt="Rendering scientifico dell'inflammasoma NLRP3, ruota eptamerica, ASC speck e piroptosi"
                className="w-full h-44 object-cover group-hover:scale-102 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-xs text-white flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5" /> Clicca per visualizzare ad alta risoluzione
                </span>
              </div>
              <div className="p-3 text-[11px] text-slate-600 bg-white leading-relaxed border-t border-slate-100">
                <strong>Figura 4.2:</strong> Assemblaggio dell&apos;inflammasoma NLRP3 a disco, oligomerizzazione prionica di ASC, taglio della Caspasi-1 e lisi per pori di Gasdermina D.
              </div>
            </div>

            {/* Current Step Description Card */}
            <div className="space-y-2.5">
              <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                <span>Dettaglio della Fase Corrente:</span>
                <span className="text-rose-600 font-mono text-[11px] font-semibold">Step {currentStep}</span>
              </div>

              <div className="p-3.5 rounded-lg bg-rose-50/80 border border-rose-200 text-xs">
                <div className="font-bold text-rose-900 flex items-center gap-1.5 mb-1">
                  <Flame className="w-3.5 h-3.5 text-rose-600" />
                  <span>{steps[currentStep - 1].title}</span>
                </div>
                <p className="text-rose-900 leading-relaxed font-serif-body">
                  {steps[currentStep - 1].desc}
                </p>
              </div>

              {selectedDrug !== 'none' && (
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs">
                  <strong className="text-emerald-900 block font-bold mb-0.5">
                    Azione del Farmaco Selezionato ({selectedDrug.toUpperCase()}):
                  </strong>
                  <p className="text-emerald-800 leading-relaxed font-serif-body">
                    {selectedDrug === 'anakinra' && 'Antagonista ricombinante di IL-1R1: impedisce a IL-1β secreta di legare le cellule bersaglio (spegne la febbre e l\'infiammazione articolare da gotta).'}
                    {selectedDrug === 'canakinumab' && 'Anticorpo monoclonale umano anti-IL-1β: neutralizza specificamente la citochina circolante nel sangue.'}
                    {selectedDrug === 'colchicine' && 'Inibitore della polimerizzazione tubulinica: impedisce l\'avvicinamento centrosomiale dei cluster ASC speck.'}
                    {selectedDrug === 'mcc950' && 'Piccola molecola inibitoria selettiva di NLRP3: blocca l\'idrolisi di ATP nel dominio NACHT, prevenendo l\'eptamerizzazione.'}
                  </p>
                </div>
              )}
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
              className="px-3 py-1.5 rounded-md text-xs font-semibold bg-rose-600 text-white hover:bg-rose-700 disabled:opacity-40 cursor-pointer flex items-center gap-1"
            >
              <span>Fase Successiva</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Printable Unrolled Table of all 5 Steps & Pharmacology (A4 Format) */}
      <div className="hidden print:block p-6 border-t border-slate-200 bg-white">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4 font-mono flex items-center justify-between border-b border-slate-300 pb-2">
          <span>Modello a Due Segnali dell&apos;Inflammasoma NLRP3, Piroptosi & Target Farmacologici (Srotolato)</span>
          <span className="text-slate-500 font-mono">5 Fasi Sequenziali</span>
        </div>

        <div className="space-y-4">
          {steps.map((st) => (
            <div key={st.num} className="p-4 rounded-lg border border-slate-300 bg-slate-50/60 break-inside-avoid space-y-1.5 text-xs">
              <div className="flex items-center justify-between font-bold text-slate-900 border-b border-slate-200 pb-1">
                <span className="text-sm text-rose-900">{st.title}</span>
                <span className="font-mono text-[10px] text-slate-500">Fase {st.num} di 5</span>
              </div>
              <p className="text-slate-800 leading-relaxed font-normal">{st.desc}</p>
              <div className="pt-1 text-[11px] text-slate-600 font-mono">
                <strong>Biochimica:</strong> {st.molecularDetails}
              </div>
            </div>
          ))}
        </div>

        {/* Quadro Farmacologico di Neutralizzazione */}
        <div className="mt-5 p-4 rounded-lg border border-slate-300 bg-slate-50 break-inside-avoid text-xs">
          <div className="font-bold text-slate-900 mb-2 font-mono uppercase tracking-wider">
            Target Terapeutici nell&apos;Inflammasoma NLRP3 (Farmacologia dei Biologici):
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
            <div className="p-2.5 rounded bg-white border border-slate-200">
              <strong className="text-blue-900 block font-bold mb-0.5">Anakinra (Kineret)</strong>
              <p className="text-slate-700 leading-snug">Antagonista ricombinante del recettore di IL-1 (IL-1Ra). Blocca il legame sia di IL-1α che di IL-1β a IL-1R1.</p>
            </div>
            <div className="p-2.5 rounded bg-white border border-slate-200">
              <strong className="text-emerald-900 block font-bold mb-0.5">Canakinumab (Ilaris)</strong>
              <p className="text-slate-700 leading-snug">Anticorpo monoclonale umano IgG1 ad altissima affinità diretto selettivamente contro IL-1β libera plasmatica.</p>
            </div>
            <div className="p-2.5 rounded bg-white border border-slate-200">
              <strong className="text-purple-900 block font-bold mb-0.5">Colchicina & Inibitori NACHT (MCC950)</strong>
              <p className="text-slate-700 leading-snug">Inibiscono la polimerizzazione dei microtubuli necessaria per la coalescenza perinucleare dell&apos;ASC speck e bloccano l&apos;idrolisi ATP di NACHT.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
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
                  Tavola Didattica: Modello a Due Segnali dell&apos;Inflammasoma NLRP3 e Piroptosi
                </h4>
                <p className="text-xs text-slate-500">
                  Visualizzazione strutturale del priming NF-κB, assemblaggio discoide a 7 bracci, ASC speck e pori litici di Gasdermina D.
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
                src={IMAGES.inflammasomePathway}
                onError={(e) => {
                  e.currentTarget.src = '/images/inflammasome_nlrp3_pathway_1792323880438.jpg';
                }}
                alt="Tavola scientifica completa ad alta risoluzione dell'inflammasoma NLRP3"
                className="max-h-[68vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>

            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 text-xs text-slate-700 leading-relaxed font-serif-body">
              <strong>Correlazione Clinica:</strong> Le mutazioni autosomiche dominanti nel gene <em>NLRP3</em> (dominio NACHT) causano le <strong>CAPS (Cryopyrin-Associated Periodic Syndromes)</strong>, caratterizzate da febbre ricorrente, orticaria da freddo e amiloidosi. Farmaci biologici come <strong>Anakinra</strong> (antagonista recettoriale di IL-1) e <strong>Canakinumab</strong> (anticorpo monoclonale anti-IL-1β) neutralizzano con precisione la cascata, arrestando i danni d&apos;organo.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
