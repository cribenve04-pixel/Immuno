import React, { useState } from 'react';
import {
  Layers,
  Shield,
  Zap,
  AlertTriangle,
  CheckCircle2,
  RotateCcw,
  ChevronRight,
  Dna,
  Lock,
  Sparkles,
  Volume2,
  Play,
  Maximize2,
  Share2
} from 'lucide-react';
import { IMAGES } from '../data/imageAssets';
import { useTtsInteractive } from '../hooks/useTtsInteractive';

type PathwayViewMode = 'both' | 'mhc1' | 'mhc2';

interface StepInfo {
  num: number;
  title: string;
  shortTitle: string;
  desc: string;
  mhc1Action: string;
  mhc2Action: string;
  molecularDetails: string;
}

export const InteractiveProcessingPathwaysSimulator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<PathwayViewMode>('both');
  const [isTapDeficient, setIsTapDeficient] = useState<boolean>(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);

  const { explainState, explainWhatIf } = useTtsInteractive();

  const steps: StepInfo[] = [
    {
      num: 1,
      title: "1. Origine dell'Antigene & Compartimento Iniziale",
      shortTitle: "1. Origine Antigene",
      desc: "Segregazione topografica rigorosa: gli antigeni endogeni citosolici (virali, tumorali o self anomali) risiedono nel citoplasma; gli antigeni esogeni (batteri, funghi, parassiti) vengono inglobati dall'esterno tramite endocitosi o fagocitosi in vacuoli membranosi.",
      mhc1Action: "Proteine citosoliche endogene marcate con catene di poliubiquitina Lys48 tramite le ligasi E1-E2-E3 per la distruzione controllata.",
      mhc2Action: "Captazione di patogeni extracellulari da parte delle APC (dendritiche, macrofagi, linfociti B) e confinamento in endosomi precoci.",
      molecularDetails: "Poliubiquitina K48 vs Fagocitosi / Endocitosi mediata da Clatrina o Recettore (BCR/FcR)."
    },
    {
      num: 2,
      title: "2. Degradazione Proteolitica: Proteasoma 26S vs Catepsine Lisosomiali",
      shortTitle: "2. Digestione Proteolitica",
      desc: "Nel ramo MHC-I, il cilindro catalitico del Proteasoma 26S (o Immunoproteasoma con LMP2/LMP7) frammenta le proteine in corti peptidi. Nel ramo MHC-II, le catepsine endolisosomiali a pH acido digeriscono le proteine in peptidi lunghi.",
      mhc1Action: "Il cilindro del proteasoma idrolizza i legami peptidici rilasciando frammenti di 8-16 aminoacidi nel citosol.",
      mhc2Action: "Acidificazione dell'endosoma (pompa protonica v-ATPase) e attivazione delle catepsine B, D, L e S che tagliano la proteina esogena in frammenti di 10-30 aa.",
      molecularDetails: "Subunità catalitiche β1i/β2i/β5i (LMP2/LMP7) vs Catepsine acide (S, L, B) a pH 4.5-5.0."
    },
    {
      num: 3,
      title: "3. Biosintesi nel RER & Protezione della Tasca (Chaperonine vs Catena Invariante CD74)",
      shortTitle: "3. Assemblaggio nel RER",
      desc: "MHC-I si assembla nel RER con la β2-microglobulina assistito da Calnexina, Calreticulina ed ERp57. MHC-II viene sintetizzato associato a un trimero di Catena Invariante (CD74 / Ii) che ne sigilla la tasca per impedire il legame precoce di peptidi del RE.",
      mhc1Action: "La catena pesante α di MHC-I si associa alla β2m e alla tapasina, collegandosi fisicamente al canale trasportatore TAP.",
      mhc2Action: "L'eterodimero αβ di MHC-II viene incappucciato dalla Catena Invariante (CD74), il cui segmento CLIP si adagia nella tasca peptidica.",
      molecularDetails: "Complesso di carico PLC (Tapasina, Calreticulina, ERp57) vs Trimerizzazione di CD74 (Ii) con segmento CLIP."
    },
    {
      num: 4,
      title: "4. Trasporto Peptidico & Caricamento (TAP/ERAP vs Scambio HLA-DM)",
      shortTitle: "4. Caricamento Peptidico",
      desc: "Il trasportatore ATP-dipendente TAP pompa i peptidi dal citosol nel lume del RER, dove ERAP1/2 li rifinisce (trimming a 8-10 aa) per alloggiarli in MHC-I. Per MHC-II, la fusione con il MIIC degrada CD74 lasciando CLIP, che viene rimosso dallo chaperone catalitico HLA-DM.",
      mhc1Action: "TAP1/TAP2 idrolizza ATP e trasferisce i peptidi; ERAP taglia l'eccesso N-terminale e la tasca chiusa di MHC-I accoglie l'ottamero/nonamero.",
      mhc2Action: "Nel compartimento MIIC, le catepsine tagliano CD74 lasciando solo il frammento CLIP; HLA-DM favorisce il distacco di CLIP e inserisce il peptide ad alta affinità.",
      molecularDetails: "Canale ABC TAP1/TAP2 ed aminopeptidasi ERAP1/2 vs MIIC, frammento CLIP e catalizzatore HLA-DM (regolato da HLA-DO)."
    },
    {
      num: 5,
      title: "5. Esocitosi alla Membrana & Riconoscimento T (CD8+ CTL vs CD4+ Helper)",
      shortTitle: "5. Presentazione T",
      desc: "I complessi pMHC stabili viaggiano attraverso l'apparato di Golgi in vescicole secretorie verso la superficie cellulare: MHC-I innesca la citotossicità dei Linfociti T CD8+, mentre MHC-II attiva i Linfociti T CD4+ Helper.",
      mhc1Action: "Il complesso MHC-I:peptide espone l'antigene al TCR ristretto per MHC-I e al corecettore CD8 di un linfocita T citotossico (induzione di lisi perforina/granzima).",
      mhc2Action: "Il complesso MHC-II:peptide viene riconosciuto dal TCR ristretto per MHC-II e dal corecettore CD4 di un T helper (differenziamento Th1, Th2, Th17, Tfh).",
      molecularDetails: "Restrizione MHC di Classe I (TCR + CD8) vs Restrizione MHC di Classe II (TCR + CD4)."
    }
  ];

  const handleSelectStep = (sNum: number) => {
    setCurrentStep(sNum);
  };

  const handleSpeakCurrentStep = () => {
    const target = steps.find(s => s.num === currentStep);
    if (target) {
      if (isTapDeficient && currentStep >= 4) {
        explainWhatIf(
          "il trasportatore TAP1/TAP2 è mutato o bloccato dalla proteina virale ICP47",
          "i peptidi citosolici non possono entrare nel reticolo endoplasmatico, le molecole MHC di classe I restano vuote e instabili e vengono degradate nel citosol, causando la Sindrome del Linfocita Nudo di Tipo I"
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

  const handleToggleTapDeficiency = () => {
    const nextState = !isTapDeficient;
    setIsTapDeficient(nextState);
    if (nextState) {
      explainWhatIf(
        "si instaura un deficit genetico di TAP1 o TAP2",
        "nessun peptide entra nel RER. Le molecole MHC di Classe I non raggiungono la conformazione stabile e non compaiono in membrana, con grave difetto dell'immunità mediata da CD8"
      );
    } else {
      explainState("Ripristino Canale TAP Wild Type", "Il trasporto attivo ATP-dipendente di peptidi nel RER è pienamente ripristinato.");
    }
  };

  const spokenOverview = "Simulatore interattivo comparativo delle vie di processazione antigenica. A sinistra, la via citosolica endogena: le proteine ubiquitinata vengono degradate dal proteasoma 26S, i peptidi entrano nel reticolo endoplasmatico tramite il trasportatore TAP, vengono rifiniti da ERAP e caricati su MHC di classe I per l'esposizione ai linfociti T citotossici CD8+. A destra, la via vescicolare esogena: i patogeni extracellulari vengono inglobati in endosomi e digeriti da catepsine acide. Nel reticolo, MHC di classe II viene protetto dalla catena invariante CD74; nel compartimento MIIC la catena invariante viene degradata lasciando il frammento CLIP, che viene scambiato con il peptide ad alta affinità grazie allo chaperone HLA-DM per la presentazione ai linfociti T helper CD4+.";

  return (
    <div
      data-speech-text={spokenOverview}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden my-6 shadow-sm"
    >
      {/* Top Header & Actions */}
      <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
              Laboratorio Molecolare Integrato
            </span>
            <span className="text-xs text-slate-500 font-mono">MHC Antigen Processing: Class I vs Class II</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
            Le Due Vie di Processazione Antigenica a Confronto Diretto
          </h3>
          <p className="text-xs text-slate-600 mt-1 max-w-2xl">
            Confronto biochimico e topografico: via endogena (proteasoma, TAP, RER, MHC-I, CD8+) vs via esogena (endosoma, catepsine, CD74/CLIP, HLA-DM, MHC-II, CD4+).
          </p>
        </div>

        {/* Control Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* View Mode Selector */}
          <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 text-xs font-semibold shadow-2xs">
            <button
              onClick={() => setViewMode('both')}
              className={`px-2.5 py-1.5 rounded-md transition-all cursor-pointer ${
                viewMode === 'both'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Confronto Parallelo
            </button>
            <button
              onClick={() => setViewMode('mhc1')}
              className={`px-2.5 py-1.5 rounded-md transition-all cursor-pointer ${
                viewMode === 'mhc1'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Solo MHC-I (Citosol)
            </button>
            <button
              onClick={() => setViewMode('mhc2')}
              className={`px-2.5 py-1.5 rounded-md transition-all cursor-pointer ${
                viewMode === 'mhc2'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Solo MHC-II (Vescicole)
            </button>
          </div>

          {/* TAP Deficiency Simulation Toggle */}
          <button
            onClick={handleToggleTapDeficiency}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
              isTapDeficient
                ? 'bg-rose-50 text-rose-700 border-rose-300 ring-1 ring-rose-200'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
            title="Simula deficit genetico di TAP1/2 o blocco da proteina virale ICP47"
          >
            <AlertTriangle className={`w-3.5 h-3.5 ${isTapDeficient ? 'text-rose-600' : 'text-slate-400'}`} />
            <span>{isTapDeficient ? 'Blocco TAP / Bare Lymphocyte: ATTIVO' : 'Stato TAP: Wild Type'}</span>
          </button>

          {/* Audio TTS */}
          <button
            onClick={handleSpeakCurrentStep}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Ascolta spiegazione vocale della fase corrente"
          >
            <Volume2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Ascolta Fase</span>
          </button>

          {/* Play Cycle */}
          <button
            onClick={handlePlayCycle}
            disabled={isPlaying}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-xs cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isPlaying ? 'Animazione...' : 'Avvia Animazione'}</span>
          </button>

          {/* Reset */}
          <button
            onClick={() => { setCurrentStep(1); setIsTapDeficient(false); }}
            className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Reimposta simulazione"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
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
                ? 'bg-blue-50/80 text-blue-950 border-b-2 border-blue-600 font-bold'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span className="truncate">{st.shortTitle}</span>
            {currentStep === st.num && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 ml-1" />}
          </button>
        ))}
      </div>

      {/* Stage Layout: Left Interactive Graphical SVG + Right Micrograph & Molecular HUD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200">
        {/* Left Column: Interactive High-Precision SVG Diagram (7 cols) */}
        <div className="lg:col-span-7 p-5 sm:p-6 bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden select-none">
          {/* Status bar */}
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
            <span className="flex items-center gap-1.5 text-blue-300">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Fase {currentStep} di 5: {steps[currentStep - 1].shortTitle}
            </span>
            <span className="text-[11px] text-slate-400">
              {isTapDeficient ? (
                <span className="text-rose-400 font-bold flex items-center gap-1">
                  <Lock className="w-3 h-3" /> Canale TAP Bloccato
                </span>
              ) : (
                'Fisiologia Wild-Type'
              )}
            </span>
          </div>

          {/* SVG Canvas depicting Cells, Organelles, Receptors, and T Cells */}
          <div className="w-full py-2 flex items-center justify-center">
            <svg
              viewBox="0 0 680 440"
              className="w-full h-auto max-w-[620px]"
              aria-label="Diagramma vettoriale comparativo delle vie di processazione antigenica MHC-I vs MHC-II"
            >
              <defs>
                <linearGradient id="mhc1CellGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
                </linearGradient>

                <linearGradient id="mhc2CellGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#065f46" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
                </linearGradient>

                <filter id="blueGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>

                <filter id="emeraldGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
              </defs>

              {/* Vertical Divider */}
              {viewMode === 'both' && (
                <line x1="340" y1="15" x2="340" y2="420" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4" />
              )}

              {/* ==============================================================
                  LEFT PANEL: MHC CLASS I CITOSOLIC PATHWAY (BLUE PALETTE)
                  ============================================================== */}
              {(viewMode === 'both' || viewMode === 'mhc1') && (
                <g>
                  {/* Column Header */}
                  <rect x="30" y="15" width="280" height="24" rx="4" fill="#1e3a8a" fillOpacity="0.4" stroke="#3b82f6" strokeWidth="1" />
                  <text x="170" y="31" fill="#93c5fd" fontSize="10" fontWeight="bold" textAnchor="middle">
                    VIA CITOSOLICA ENDOGENA (MHC-I → CD8+)
                  </text>

                  {/* Cell Outline and Cytosol */}
                  <rect x="20" y="48" width="300" height="300" rx="16" fill="url(#mhc1CellGrad)" stroke="#1e40af" strokeWidth="1.5" />
                  <text x="35" y="66" fill="#60a5fa" fontSize="8" fontFamily="monospace">CITOSOL DELL&apos;APC / CELLULA BERSAGLIO</text>

                  {/* 1. Ubiquitinated Protein & Proteasome 26S */}
                  <g transform="translate(90, 95)" filter="url(#blueGlow)">
                    {/* Folded endogenous protein */}
                    <circle cx="-35" cy="0" r="12" fill="#3b82f6" stroke="#93c5fd" strokeWidth="1" />
                    <text x="-35" y="3" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">Prot.</text>
                    {/* Ubiquitin chain */}
                    <circle cx="-42" cy="-14" r="4" fill="#f59e0b" />
                    <circle cx="-35" cy="-20" r="4" fill="#f59e0b" />
                    <circle cx="-27" cy="-24" r="4" fill="#f59e0b" />
                    <text x="-35" y="-14" fill="#78350f" fontSize="5" fontWeight="bold">Ub</text>

                    {/* Proteasome 26S barrel */}
                    <rect x="0" y="-18" width="32" height="36" rx="4" fill="#7c3aed" stroke="#c4b5fd" strokeWidth="1.2" />
                    <line x1="0" y1="-6" x2="32" y2="-6" stroke="#a78bfa" />
                    <line x1="0" y1="6" x2="32" y2="6" stroke="#a78bfa" />
                    <text x="16" y="2" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">26S</text>
                    <text x="16" y="27" fill="#c4b5fd" fontSize="6.5" textAnchor="middle">Proteasoma</text>

                    {/* Released short peptides */}
                    {currentStep >= 2 && (
                      <g>
                        <line x1="16" y1="20" x2="16" y2="35" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />
                        <ellipse cx="10" cy="42" rx="4" ry="1.5" fill="#f43f5e" />
                        <ellipse cx="22" cy="45" rx="5" ry="1.5" fill="#f43f5e" />
                        <ellipse cx="16" cy="52" rx="4.5" ry="1.5" fill="#f43f5e" />
                        <text x="35" y="48" fill="#fca5a5" fontSize="6">peptidi</text>
                      </g>
                    )}
                  </g>

                  {/* 2. RER Membrane with TAP1/TAP2 Transporter */}
                  <g transform="translate(40, 185)">
                    {/* RER lumen background */}
                    <path d="M 0 30 Q 130 10 260 30 L 260 85 Q 130 65 0 85 Z" fill="#0f172a" stroke="#2563eb" strokeWidth="1.5" />
                    <text x="130" y="60" fill="#3b82f6" fontSize="8" fontWeight="bold" textAnchor="middle">
                      LUME DEL RETICOLO ENDOPLASMATICO (RER)
                    </text>

                    {/* TAP1/TAP2 Channel */}
                    <g transform="translate(90, 20)">
                      <rect
                        x="-14"
                        y="-10"
                        width="12"
                        height="22"
                        rx="2"
                        fill={isTapDeficient ? '#7f1d1d' : '#0284c7'}
                        stroke={isTapDeficient ? '#ef4444' : '#38bdf8'}
                      />
                      <rect
                        x="2"
                        y="-10"
                        width="12"
                        height="22"
                        rx="2"
                        fill={isTapDeficient ? '#7f1d1d' : '#0284c7'}
                        stroke={isTapDeficient ? '#ef4444' : '#38bdf8'}
                      />
                      <text x="0" y="3" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">TAP</text>
                      <text x="0" y="20" fill={isTapDeficient ? '#f87171' : '#7dd3fc'} fontSize="5.5" textAnchor="middle">
                        {isTapDeficient ? 'BLOCCO' : '1 / 2'}
                      </text>
                    </g>

                    {/* Peptide loading on MHC-I in RER */}
                    {currentStep >= 3 && (
                      <g transform="translate(190, 48)">
                        {/* Heavy chain alpha */}
                        <path d="M -12 10 L -12 -5 Q 0 -12 12 -5 L 12 10" fill="none" stroke="#2563eb" strokeWidth="4" />
                        {/* beta2m */}
                        <circle cx="-16" cy="12" r="6" fill="#60a5fa" />
                        <text x="-16" y="14" fill="#ffffff" fontSize="5" fontWeight="bold" textAnchor="middle">β2m</text>
                        {/* Tapasin / Chaperones */}
                        <circle cx="16" cy="12" r="5.5" fill="#f59e0b" />
                        <text x="16" y="14" fill="#ffffff" fontSize="4.5" textAnchor="middle">Tpn</text>

                        {/* Loaded Peptide (if not TAP deficient) */}
                        {currentStep >= 4 && !isTapDeficient && (
                          <ellipse cx="0" cy="-6" rx="6" ry="2" fill="#ef4444" stroke="#ffffff" strokeWidth="0.5" />
                        )}

                        <text x="0" y="25" fill="#93c5fd" fontSize="6.5" fontWeight="bold" textAnchor="middle">
                          MHC-I:Peptide
                        </text>
                      </g>
                    )}
                  </g>

                  {/* 3. Surface Presentation & CD8+ T Cell at Bottom */}
                  {currentStep >= 5 && !isTapDeficient && (
                    <g transform="translate(170, 348)" filter="url(#blueGlow)">
                      {/* Plasma membrane MHC-I */}
                      <path d="M -10 0 L -10 -15 Q 0 -22 10 -15 L 10 0" fill="none" stroke="#2563eb" strokeWidth="4" />
                      <circle cx="-14" cy="2" r="5" fill="#60a5fa" />
                      {/* Antigenic peptide */}
                      <ellipse cx="0" cy="-16" rx="6" ry="2" fill="#ef4444" />

                      {/* CD8+ T Cell TCR & Coreceptor */}
                      <g transform="translate(0, 42)">
                        {/* CD8 Cell membrane arc */}
                        <path d="M -60 20 Q 0 5 60 20" stroke="#0284c7" strokeWidth="3" fill="none" />
                        {/* TCR heterodimer */}
                        <line x1="-5" y1="5" x2="-5" y2="-12" stroke="#38bdf8" strokeWidth="3" />
                        <line x1="5" y1="5" x2="5" y2="-12" stroke="#38bdf8" strokeWidth="3" />
                        <text x="0" y="-1" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">TCR</text>
                        {/* CD8 coreceptor */}
                        <line x1="-16" y1="10" x2="-16" y2="-10" stroke="#3b82f6" strokeWidth="2.5" />
                        <text x="-24" y="-2" fill="#93c5fd" fontSize="6" fontWeight="bold">CD8</text>

                        <text x="0" y="25" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">
                          LINFOCITA T CD8+ (CITOTOSSICO)
                        </text>
                      </g>
                    </g>
                  )}
                </g>
              )}

              {/* ==============================================================
                  RIGHT PANEL: MHC CLASS II VESICULAR PATHWAY (EMERALD PALETTE)
                  ============================================================== */}
              {(viewMode === 'both' || viewMode === 'mhc2') && (
                <g>
                  {/* Column Header */}
                  <rect x="370" y="15" width="280" height="24" rx="4" fill="#065f46" fillOpacity="0.4" stroke="#10b981" strokeWidth="1" />
                  <text x="510" y="31" fill="#a7f3d0" fontSize="10" fontWeight="bold" textAnchor="middle">
                    VIA VESCICOLARE ESOGENA (MHC-II → CD4+)
                  </text>

                  {/* Cell Outline and Cytosol */}
                  <rect x="360" y="48" width="300" height="300" rx="16" fill="url(#mhc2CellGrad)" stroke="#059669" strokeWidth="1.5" />
                  <text x="375" y="66" fill="#34d399" fontSize="8" fontFamily="monospace">CITOSOL DELL&apos;APC PROFESSIONALE (DC/B/MΦ)</text>

                  {/* 1. Endosome / Phagolysosome with Extracellular Bacteria */}
                  <g transform="translate(440, 105)" filter="url(#emeraldGlow)">
                    {/* Endosomal vesicle */}
                    <circle cx="0" cy="0" r="28" fill="#042f2e" stroke="#10b981" strokeWidth="1.5" />
                    <text x="0" y="-16" fill="#a7f3d0" fontSize="6.5" fontWeight="bold" textAnchor="middle">Fagolisosoma</text>

                    {/* Bacterium / Extracellular antigen being degraded by cathepsins */}
                    <rect x="-10" y="-8" width="20" height="10" rx="4" fill="#059669" stroke="#6ee7b7" />
                    {/* Cathepsins scissors symbol */}
                    <text x="0" y="15" fill="#f43f5e" fontSize="6" fontWeight="bold" textAnchor="middle">
                      Catepsine B/D/S (pH 4.5)
                    </text>
                  </g>

                  {/* 2. RER synthesis of MHC-II with Invariant Chain CD74 */}
                  <g transform="translate(560, 110)">
                    <rect x="-30" y="-18" width="60" height="34" rx="4" fill="#0f172a" stroke="#059669" strokeWidth="1" />
                    <text x="0" y="-22" fill="#6ee7b7" fontSize="6.5" textAnchor="middle">RER: MHC-II + CD74</text>
                    {/* MHC-II chains */}
                    <path d="M -10 6 L -10 -4 Q 0 -8 10 -4 L 10 6" fill="none" stroke="#10b981" strokeWidth="3" />
                    {/* Invariant chain (CD74) covering the groove */}
                    <path d="M -12 -5 Q 0 -2 12 -5" stroke="#f59e0b" strokeWidth="3" fill="none" />
                    <text x="0" y="8" fill="#fde68a" fontSize="5" fontWeight="bold" textAnchor="middle">CD74 (CLIP)</text>
                  </g>

                  {/* 3. MIIC Compartment: HLA-DM Catalytic Exchange */}
                  <g transform="translate(510, 205)" filter="url(#emeraldGlow)">
                    {/* Late Endosome / MIIC */}
                    <ellipse cx="0" cy="0" rx="65" ry="34" fill="#022c22" stroke="#059669" strokeWidth="1.5" />
                    <text x="0" y="-22" fill="#6ee7b7" fontSize="7" fontWeight="bold" textAnchor="middle">
                      COMPARTIMENTO MIIC
                    </text>

                    {/* HLA-DM chaperone */}
                    <rect x="-45" y="-10" width="28" height="20" rx="3" fill="#0d9488" stroke="#5eead4" />
                    <text x="-31" y="2" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">HLA-DM</text>

                    {/* CLIP Release Arrow */}
                    <path d="M -8 -8 Q 0 -18 8 -8" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="2 2" />
                    <text x="0" y="-12" fill="#fde68a" fontSize="5" textAnchor="middle">CLIP out</text>

                    {/* MHC-II loading antigenic peptide */}
                    <path d="M 12 12 L 12 0 Q 22 -4 32 0 L 32 12" fill="none" stroke="#10b981" strokeWidth="3" />
                    {currentStep >= 4 && (
                      <ellipse cx="22" cy="-2" rx="6" ry="2" fill="#ef4444" stroke="#ffffff" strokeWidth="0.5" />
                    )}
                    <text x="22" y="18" fill="#a7f3d0" fontSize="5.5" fontWeight="bold" textAnchor="middle">MHC-II</text>
                  </g>

                  {/* 4. Surface Presentation & CD4+ T Cell at Bottom */}
                  {currentStep >= 5 && (
                    <g transform="translate(510, 348)" filter="url(#emeraldGlow)">
                      {/* Plasma membrane MHC-II */}
                      <path d="M -10 0 L -10 -15 Q 0 -22 10 -15 L 10 0" fill="none" stroke="#10b981" strokeWidth="4" />
                      {/* Antigenic peptide */}
                      <ellipse cx="0" cy="-16" rx="6" ry="2" fill="#ef4444" />

                      {/* CD4+ T Cell TCR & Coreceptor */}
                      <g transform="translate(0, 42)">
                        {/* CD4 Cell membrane arc */}
                        <path d="M -60 20 Q 0 5 60 20" stroke="#059669" strokeWidth="3" fill="none" />
                        {/* TCR heterodimer */}
                        <line x1="-5" y1="5" x2="-5" y2="-12" stroke="#34d399" strokeWidth="3" />
                        <line x1="5" y1="5" x2="5" y2="-12" stroke="#34d399" strokeWidth="3" />
                        <text x="0" y="-1" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">TCR</text>
                        {/* CD4 coreceptor (4 domains) */}
                        <line x1="16" y1="12" x2="16" y2="-10" stroke="#10b981" strokeWidth="2.5" />
                        <text x="22" y="-2" fill="#a7f3d0" fontSize="6" fontWeight="bold">CD4</text>

                        <text x="0" y="25" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">
                          LINFOCITA T CD4+ (HELPER)
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
            <span className="text-blue-400 font-semibold">Fase {currentStep} di 5</span>
          </div>
        </div>

        {/* Right Column: High-Res Medical Textbook Illustration & Breakdown HUD (5 cols) */}
        <div className="lg:col-span-5 p-5 bg-slate-50 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-700 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Tavola Anatomica Ufficiale
              </span>
              <button
                onClick={() => setIsImageModalOpen(true)}
                className="text-[11px] font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
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
                src={IMAGES.mhc1VsMhc2Pathways}
                onError={(e) => {
                  e.currentTarget.src = '/images/mhc1_vs_mhc2_pathways_1793615522510.jpg';
                }}
                alt="Illustrazione scientifica universitaria delle due vie di processazione antigenica a confronto: MHC-I citosolica vs MHC-II vescicolare"
                className="w-full h-48 object-cover group-hover:scale-102 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-xs text-white flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5" /> Clicca per visualizzare ad alta risoluzione
                </span>
              </div>
              <div className="p-3 text-[11px] text-slate-600 bg-white leading-relaxed border-t border-slate-100">
                <strong>Figura 9.1:</strong> Architettura cellulare comparata delle vie di processazione: a sinistra il pathway citosolico <em>MHC-I/TAP/Proteasoma</em> (CD8+ CTL), a destra il pathway endolisosomiale <em>MHC-II/CD74/HLA-DM</em> (CD4+ T helper).
              </div>
            </div>

            {/* Current Step Comparison Cards */}
            <div className="space-y-2.5">
              <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                <span>Dettaglio della Fase Corrente:</span>
                <span className="text-blue-600 font-mono text-[11px] font-semibold">Step {currentStep}</span>
              </div>

              {/* MHC-I Branch Detail */}
              <div className="p-3 rounded-lg bg-blue-50/80 border border-blue-200 text-xs">
                <div className="font-bold text-blue-900 flex items-center gap-1.5 mb-1">
                  <Dna className="w-3.5 h-3.5 text-blue-600" />
                  <span>Via Citosolica (MHC-I / CD8+)</span>
                </div>
                <p className="text-blue-800 leading-relaxed font-serif-body">
                  {steps[currentStep - 1].mhc1Action}
                </p>
              </div>

              {/* MHC-II Branch Detail */}
              <div className="p-3 rounded-lg bg-emerald-50/80 border border-emerald-200 text-xs">
                <div className="font-bold text-emerald-900 flex items-center gap-1.5 mb-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Via Vescicolare (MHC-II / CD4+)</span>
                </div>
                <p className="text-emerald-800 leading-relaxed font-serif-body">
                  {steps[currentStep - 1].mhc2Action}
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
              className="px-3 py-1.5 rounded-md text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 cursor-pointer flex items-center gap-1"
            >
              <span>Fase Successiva</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
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
                  Tavola Didattica: Vie di Processazione Antigenica MHC-I vs MHC-II a Confronto
                </h4>
                <p className="text-xs text-slate-500">
                  Rappresentazione ad alta fedeltà con proteasoma, canale TAP, chaperonine RER, MIIC, HLA-DM e sinapsi T.
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
                src={IMAGES.mhc1VsMhc2Pathways}
                onError={(e) => {
                  e.currentTarget.src = '/images/mhc1_vs_mhc2_pathways_1793615522510.jpg';
                }}
                alt="Tavola anatomica completa ad alta risoluzione: Endogenous Cytosolic Pathway (MHC Class I) vs Exogenous Vesicular Pathway (MHC Class II)"
                className="max-h-[68vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>

            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
              <div className="p-3 bg-white rounded-lg border border-blue-200">
                <strong className="text-blue-900 block font-bold mb-1">
                  Via Sinistra: Citosolica / Endogena (MHC di Classe I)
                </strong>
                <p className="leading-relaxed">
                  Proteine endogene citosoliche (virali, tumorali, self) marcate con poliubiquitina Lys48 → Degradazione nel Proteasoma 26S / Immunoproteasoma → Trasporto attivo peptidico nel RER tramite il canale ATP-dipendente TAP1/TAP2 → Trimming N-terminale da ERAP1/2 → Caricamento sulla tasca di MHC-I (stabilizzato da Calnexina, Calreticulina, ERp57, Tapasina) → Gemmazione Golgi → Presentazione al TCR dei linfociti T citotossici CD8+.
                </p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-emerald-200">
                <strong className="text-emerald-900 block font-bold mb-1">
                  Via Destra: Vescicolare / Esogena (MHC di Classe II)
                </strong>
                <p className="leading-relaxed">
                  Antigeni extracellulari captati per fagocitosi/endocitosi → Acidificazione endosomiale e clivaggio proteolitico da Catepsine B/D/S → Nel RER, MHC-II sintetizzato con la Catena Invariante (CD74 / Ii) che blocca la tasca → Traffico verso il compartimento MIIC → Degradazione parziale di CD74 lasciando il peptide CLIP → HLA-DM catalizza la rimozione di CLIP e il caricamento del peptide esogeno ad alta affinità → Esocitosi alla membrana plasmatica per il riconoscimento da parte dei Linfociti T CD4+ Helper.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
