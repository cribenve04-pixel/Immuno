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
  Share2,
  Flame,
  Users
} from 'lucide-react';
import { IMAGES } from '../data/imageAssets';
import { useTtsInteractive } from '../hooks/useTtsInteractive';

type MechanismMode = 'cytosolic' | 'vacuolar' | 'crossDressing' | 'superantigen';

interface CrossPresStep {
  num: number;
  title: string;
  shortTitle: string;
  desc: string;
  cytosolicAction: string;
  superantigenAction: string;
  molecularDetails: string;
}

export const InteractiveCrossPresentationSimulator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeMode, setActiveMode] = useState<MechanismMode>('cytosolic');
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);

  const { explainState, explainWhatIf } = useTtsInteractive();

  const steps: CrossPresStep[] = [
    {
      num: 1,
      title: "1. Captazione dell'Ag Esogeno / Incontro con la Tossina Superantigenica",
      shortTitle: "1. Captazione / SAg",
      desc: "La cellula dendritica convenzionale 1 (cDC1) ingloba una cellula tumorale o epiteliale infetta in necrosi/apoptosi tramite recettori fagocitici (CLEC9A). Nel caso del superantigene (TSST-1), la proteina batterica intatta penetra nel circolo senza richiedere alcuna endocitosi.",
      cytosolicAction: "La cDC1 riconosce le firme apoptotiche (es. filamenti di actina esposti legati da CLEC9A) e forma un fagosoma specializzato a bassa acidità.",
      superantigenAction: "La tossina TSST-1 di Staphylococcus aureus si distribuisce nel fluido interstiziale e raggiunge direttamente la sinapsi immunologica senza alterazioni.",
      molecularDetails: "Recettore CLEC9A / Axl / Tim4 vs Tossine batteriche esogene (TSST-1, SEA-E, SpeA)."
    },
    {
      num: 2,
      title: "2. Fuga nel Citosol (Canali ERAD / Sec61) vs Bypass della Digestione",
      shortTitle: "2. Fuga Citosolica",
      desc: "Nel pathway citosolico, l'antigene sfugge nel citoplasma attraverso il traslocone ERAD o la fusione retrograda ERGIC. Il superantigene invece bypassa completamente la digestione proteolitica e resta nativo.",
      cytosolicAction: "La proteina fagocitata viene retro-traslocata nel citosol attraverso canali membranosi dedicati (Sec61 / Derlin-1).",
      superantigenAction: "Zero digestione intracellulare: il superantigene conserva la propria conformazione terziaria nativa a due lobi.",
      molecularDetails: "Canale di retro-traslocazione ERAD / ERGIC vs Stabilità conformazionale termoresistente del SAg."
    },
    {
      num: 3,
      title: "3. Degradazione Proteasomica & Canale TAP vs Legame Laterale Diretto",
      shortTitle: "3. TAP vs Aggancio Laterale",
      desc: "L'antigene citosolico viene poliubiquitinato e clivato dal proteasoma 26S in frammenti di 8-10 aa pompati nel RER da TAP1/TAP2. Il superantigene si lega invece all'esterno della tasca dell'MHC-II dell'APC.",
      cytosolicAction: "I peptidi generati dal proteasoma entrano nel RER tramite TAP e si alloggiano nella tasca di MHC-I assistiti dalla tapasina.",
      superantigenAction: "Il superantigene si ancora alla faccia esterna della catena α o β di MHC-II, completamente al di fuori della tasca peptidica.",
      molecularDetails: "Trasportatore TAP1/TAP2 ed MHC-I vs Superficie esterna non polimorfica di MHC-II."
    },
    {
      num: 4,
      title: "4. Esibizione in Membrana & Cross-Linking del Dominio Vβ del TCR",
      shortTitle: "4. Cross-Linking Vβ",
      desc: "La cDC1 espone il complesso pMHC-I. Se è presente il superantigene, esso crea un ponte forzato tra MHC-II e il dominio Vβ del TCR, ignorando completamente la sequenza peptidica alloggiata nella tasca.",
      cytosolicAction: "L'MHC-I espone il peptide tumorale/virale associato a molecole costimolatorie B7-1/B7-2 (CD80/CD86).",
      superantigenAction: "La tossina aggancia la porzione laterale della regione variabile Vβ del TCR: qualsiasi linfocita T con quel Vβ viene forzatamente unito all'APC.",
      molecularDetails: "Restrizione MHC canonica clonale vs Aggancio promiscuo indipendente dalla specificità antigenica CDR3."
    },
    {
      num: 5,
      title: "5. Priming Citotossico CD8+ Mirato vs Tempesta Citochinica Policlonale",
      shortTitle: "5. Risposta Effettrice",
      desc: "Esito finale opposto: la cross-presentazione genera cloni killer CD8+ altamente specifici per il tumore. Il superantigene attiva fino al 20-25% di tutti i linfociti T dell'organismo, causando shock tossico.",
      cytosolicAction: "Priming di linfociti T citotossici CD8+ antigene-specifici capaci di distruggere le metastasi neoplastiche o cellule infette.",
      superantigenAction: "Attivazione massiva policlonale del 20% dei T cell naïve con rilascio torrenziale di TNF-α, IL-1, IL-2 e IFN-γ (Shock Settico Tossico / TSS).",
      molecularDetails: "Risposta clonale protettiva (< 0.001%) vs Attivazione catastrofica (20-25% del repertorio T) e vasodilatazione refrattaria."
    }
  ];

  const handleSelectStep = (sNum: number) => {
    setCurrentStep(sNum);
  };

  const handleSpeakCurrentStep = () => {
    const target = steps.find(s => s.num === currentStep);
    if (target) {
      if (activeMode === 'superantigen' && currentStep === 5) {
        explainWhatIf(
          "il superantigene TSST-1 collega forzatamente MHC-II e il segmento Vβ del TCR",
          "fino a un quarto di tutti i linfociti T dell'organismo si attivano simultaneamente senza specificità, liberando una tempesta di citochine mortale con ipotensione e shock sistemico"
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

  const spokenOverview = "Simulatore interattivo dei meccanismi non-canonici di presentazione antigenica. A sinistra, la cross-presentazione mediata dalle cellule dendritiche convenzionali cDC1: frammenti di cellule tumorali o infette fagocitati sfuggono nel citoplasma tramite il canale ERAD, vengono digeriti dal proteasoma 26S e pompati nel reticolo endoplasmatico da TAP per essere caricati su MHC di classe I, consentendo il priming dei linfociti T citotossici CD8+. A destra, il meccanismo dei superantigeni batterici come la tossina TSST-1: legano la superficie esterna di MHC di classe II e la regione V-beta del TCR al di fuori della tasca peptidica, attivando fino al venti per cento dell'intero patrimonio di linfociti T e scatenando una tempesta citochinica con shock tossico.";

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
              Laboratorio cDC1 & Superantigeni
            </span>
            <span className="text-xs text-slate-500 font-mono">Cross-Presentation · SAg · Non-Canonical</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
            Simulatore: Cross-Presentazione cDC1 vs Superantigeni (SAg)
          </h3>
          <p className="text-xs text-slate-600 mt-1 max-w-2xl">
            Dal pathway citosolico (ERAD, proteasoma, TAP, CD8+) al bypass strutturale dei Superantigeni (ponte MHC-II/Vβ, tempesta citochinica policlonale).
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Mode Selector */}
          <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 text-xs font-semibold shadow-2xs">
            <button
              onClick={() => setActiveMode('cytosolic')}
              className={`px-2.5 py-1.5 rounded-md transition-all cursor-pointer ${
                activeMode === 'cytosolic'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cross-Presentazione cDC1
            </button>
            <button
              onClick={() => setActiveMode('superantigen')}
              className={`px-2.5 py-1.5 rounded-md transition-all cursor-pointer ${
                activeMode === 'superantigen'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Superantigeni (SAg)
            </button>
          </div>

          {/* Audio TTS */}
          <button
            onClick={handleSpeakCurrentStep}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Ascolta spiegazione vocale della fase corrente"
          >
            <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
            <span>Ascolta Fase</span>
          </button>

          {/* Play Cycle */}
          <button
            onClick={handlePlayCycle}
            disabled={isPlaying}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 transition-colors shadow-xs cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isPlaying ? 'Animazione...' : 'Avvia Animazione'}</span>
          </button>

          {/* Reset */}
          <button
            onClick={() => { setCurrentStep(1); setActiveMode('cytosolic'); }}
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
              {activeMode === 'cytosolic' ? 'Pathway Citosolico cDC1' : 'Meccanismo Superantigenico (SAg)'}
            </span>
          </div>

          {/* SVG Canvas depicting Cross-presentation vs Superantigen */}
          <div className="w-full py-2 flex items-center justify-center">
            <svg
              viewBox="0 0 680 440"
              className="w-full h-auto max-w-[620px]"
              aria-label="Diagramma vettoriale della cross-presentazione e del meccanismo dei superantigeni"
            >
              <defs>
                <filter id="indGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
              </defs>

              {activeMode === 'cytosolic' ? (
                /* ==============================================================
                   VIEW 1: CROSS-PRESENTATION IN cDC1 (DENDRITIC CELL)
                   ============================================================== */
                <g filter="url(#indGlow)">
                  {/* cDC1 Cell Body outline with pseudopods */}
                  <path
                    d="M 60 120 Q 30 70 80 50 Q 180 30 260 50 Q 320 20 370 70 Q 420 120 400 200 Q 430 280 380 340 Q 320 380 250 370 Q 180 390 110 360 Q 40 330 60 260 Z"
                    fill="#0f172a"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <text x="230" y="30" fill="#93c5fd" fontSize="9" fontWeight="bold" textAnchor="middle">
                    CELLULA DENDRITICA CONVENZIONALE 1 (cDC1) · DIPENDENTE DA BATF3
                  </text>

                  {/* Dying Tumor / Apoptotic Body on the left outside */}
                  <g transform="translate(60, 160)">
                    <circle cx="0" cy="0" r="26" fill="#475569" stroke="#94a3b8" strokeDasharray="3 2" />
                    <text x="0" y="-4" fill="#f1f5f9" fontSize="6.5" fontWeight="bold" textAnchor="middle">Cellula</text>
                    <text x="0" y="6" fill="#cbd5e1" fontSize="6" textAnchor="middle">Tumorale</text>
                    <text x="0" y="15" fill="#f87171" fontSize="5.5" textAnchor="middle">Apoptotica</text>
                  </g>

                  {/* STEP 1: Phagosome with apoptotic cell fragments inside cDC1 */}
                  <g transform="translate(150, 150)">
                    <circle cx="0" cy="0" r="32" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                    <circle cx="0" cy="0" r="16" fill="#334155" opacity="0.8" />
                    <text x="0" y="-18" fill="#7dd3fc" fontSize="6.5" fontWeight="bold" textAnchor="middle">Fagosoma</text>
                    <text x="0" y="3" fill="#cbd5e1" fontSize="5.5" textAnchor="middle">frammenti Ag</text>

                    {/* STEP 2: ERAD / Sec61 Channel escape */}
                    {currentStep >= 2 && (
                      <g transform="translate(32, 0)">
                        <rect x="0" y="-8" width="10" height="16" rx="2" fill="#eab308" stroke="#ffffff" />
                        <text x="5" y="2" fill="#713f12" fontSize="5" fontWeight="bold" textAnchor="middle">ERAD</text>
                        {/* Wavy line escaped into cytosol */}
                        <path d="M 12 0 Q 22 -15 35 -5" stroke="#f43f5e" strokeWidth="2.5" fill="none" />
                        <text x="35" y="-12" fill="#fca5a5" fontSize="6">fuga citosol</text>
                      </g>
                    )}
                  </g>

                  {/* STEP 3: Proteasome 26S and TAP Transporter in RER */}
                  {currentStep >= 3 && (
                    <g transform="translate(250, 140)">
                      {/* Proteasome */}
                      <rect x="0" y="-14" width="24" height="28" rx="3" fill="#7c3aed" stroke="#ddd6fe" />
                      <text x="12" y="3" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">26S</text>
                      <text x="12" y="22" fill="#c4b5fd" fontSize="5.5" textAnchor="middle">Proteasoma</text>

                      {/* Small peptides exiting proteasome towards RER */}
                      <ellipse cx="40" cy="0" rx="4" ry="1.5" fill="#f43f5e" />
                      <ellipse cx="45" cy="8" rx="4" ry="1.5" fill="#f43f5e" />

                      {/* Endoplasmic Reticulum with TAP */}
                      <g transform="translate(65, 0)">
                        <path d="M 0 -30 Q 30 -35 50 -10 L 50 40 Q 25 35 0 20 Z" fill="#0f172a" stroke="#2563eb" strokeWidth="1.2" />
                        {/* TAP Channel */}
                        <rect x="-6" y="-10" width="12" height="18" rx="2" fill="#0284c7" stroke="#38bdf8" />
                        <text x="0" y="2" fill="#ffffff" fontSize="5" fontWeight="bold" textAnchor="middle">TAP</text>

                        {/* MHC-I molecule in RER */}
                        <circle cx="28" cy="8" r="8" fill="#1d4ed8" stroke="#93c5fd" />
                        <text x="28" y="10" fill="#ffffff" fontSize="5" textAnchor="middle">MHC-I</text>
                      </g>
                    </g>
                  )}

                  {/* STEP 4 & 5: Cell Surface Presentation to CD8+ CTL */}
                  {currentStep >= 4 && (
                    <g transform="translate(260, 360)">
                      {/* MHC-I molecule presenting peptide on cDC1 surface */}
                      <path d="M -8 -15 L -8 -30 Q 0 -38 8 -30 L 8 -15" fill="none" stroke="#2563eb" strokeWidth="3" />
                      <ellipse cx="0" cy="-32" rx="5" ry="2" fill="#ef4444" />
                      <text x="0" y="-42" fill="#93c5fd" fontSize="6.5" fontWeight="bold" textAnchor="middle">MHC-I:Peptide</text>

                      {/* CD8+ Cytotoxic T Cell */}
                      {currentStep >= 5 && (
                        <g transform="translate(0, 35)">
                          <circle cx="0" cy="20" r="38" fill="#0369a1" stroke="#38bdf8" strokeWidth="1.5" />
                          {/* TCR engaging */}
                          <line x1="-4" y1="-8" x2="-4" y2="-22" stroke="#38bdf8" strokeWidth="2.5" />
                          <line x1="4" y1="-8" x2="4" y2="-22" stroke="#38bdf8" strokeWidth="2.5" />
                          <text x="0" y="-12" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">TCR</text>

                          {/* CD8 coreceptor */}
                          <line x1="-14" y1="-5" x2="-14" y2="-20" stroke="#60a5fa" strokeWidth="2" />
                          <text x="-22" y="-12" fill="#93c5fd" fontSize="5.5" fontWeight="bold">CD8</text>

                          <text x="0" y="22" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">
                            LINFOCITA T CD8+
                          </text>
                          <text x="0" y="32" fill="#bae6fd" fontSize="6" textAnchor="middle">
                            (Priming & Lisi Tumorale)
                          </text>
                        </g>
                      )}
                    </g>
                  )}
                </g>
              ) : (
                /* ==============================================================
                   VIEW 2: SUPERANTIGEN (SAg) MECHANISM
                   ============================================================== */
                <g filter="url(#indGlow)">
                  <text x="340" y="30" fill="#fca5a5" fontSize="10" fontWeight="bold" textAnchor="middle">
                    MECCANISMO DEI SUPERANTIGENI BATTERICI (ES. TSST-1 / ENTEROTOSSINE)
                  </text>

                  {/* Left: APC Membrane with MHC-II */}
                  <g transform="translate(180, 200)">
                    {/* APC cell surface */}
                    <path d="M -80 -120 Q -40 0 -80 120" stroke="#059669" strokeWidth="6" fill="none" />
                    <text x="-120" y="0" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">
                      APC (MHC-II)
                    </text>

                    {/* MHC-II heterodimer extending horizontally */}
                    <rect x="-40" y="-18" width="45" height="16" rx="3" fill="#059669" stroke="#6ee7b7" />
                    <text x="-18" y="-7" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">Catena α</text>

                    <rect x="-40" y="2" width="45" height="16" rx="3" fill="#047857" stroke="#6ee7b7" />
                    <text x="-18" y="13" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">Catena β</text>

                    {/* Normal peptide sitting inside groove (ignored) */}
                    <ellipse cx="-5" cy="0" rx="4" ry="2" fill="#64748b" />
                  </g>

                  {/* Right: T Cell Membrane with TCR */}
                  <g transform="translate(500, 200)">
                    {/* T Cell surface */}
                    <path d="M 80 -120 Q 40 0 80 120" stroke="#2563eb" strokeWidth="6" fill="none" />
                    <text x="120" y="0" fill="#60a5fa" fontSize="9" fontWeight="bold" textAnchor="middle">
                      LINFOCITA T (TCR)
                    </text>

                    {/* TCR chains extending towards APC */}
                    <rect x="-5" y="-18" width="45" height="16" rx="3" fill="#2563eb" stroke="#93c5fd" />
                    <text x="18" y="-7" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">Catena Cα</text>

                    <rect x="-5" y="2" width="45" height="16" rx="3" fill="#1d4ed8" stroke="#93c5fd" />
                    <text x="18" y="13" fill="#ffffff" fontSize="6.5" fontWeight="bold" textAnchor="middle">Dominio Vβ</text>
                  </g>

                  {/* THE SUPERANTIGEN PROTEIN CLAMP (TSST-1) BRIDGING THEM EXTERNALLY */}
                  <g transform="translate(340, 180)">
                    {/* Superantigen protein bridging lateral faces */}
                    <path
                      d="M -15 -10 Q 0 -40 15 -10 Q 30 15 15 35 Q 0 45 -15 35 Z"
                      fill="#dc2626"
                      stroke="#fecaca"
                      strokeWidth="2"
                    />
                    <text x="0" y="8" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">
                      TSST-1
                    </text>
                    <text x="0" y="19" fill="#fef2f2" fontSize="6" textAnchor="middle">
                      Superantigene
                    </text>

                    {/* Clamping arrows */}
                    <line x1="-15" y1="5" x2="-45" y2="5" stroke="#ef4444" strokeWidth="2.5" />
                    <line x1="15" y1="5" x2="45" y2="5" stroke="#ef4444" strokeWidth="2.5" />
                    <text x="0" y="-22" fill="#fca5a5" fontSize="7" fontWeight="bold" textAnchor="middle">
                      Legame Esterno alla Tasca!
                    </text>
                  </g>

                  {/* Massive Cytokine Storm Flare on the T cell side */}
                  {currentStep >= 5 && (
                    <g transform="translate(560, 200)">
                      <circle cx="0" cy="0" r="15" fill="#f59e0b" opacity="0.8" />
                      <path d="M 0 0 L 30 -40 M 0 0 L 45 -15 M 0 0 L 45 15 M 0 0 L 30 40" stroke="#f59e0b" strokeWidth="2" />
                      <rect x="25" y="-55" width="90" height="28" rx="4" fill="#7f1d1d" stroke="#ef4444" />
                      <text x="70" y="-42" fill="#fca5a5" fontSize="6.5" fontWeight="bold" textAnchor="middle">
                        TEMPESTA CITOCHINICA:
                      </text>
                      <text x="70" y="-33" fill="#ffffff" fontSize="6.5" textAnchor="middle">
                        TNF-α · IL-1 · IL-2 · IFN-γ
                      </text>
                      <text x="70" y="-18" fill="#f87171" fontSize="6" fontWeight="bold" textAnchor="middle">
                        Attiva il 20-25% dei T totali!
                      </text>
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
                Tavola Didattica Ufficiale
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
                src={IMAGES.crossPresAndSuperantigen}
                onError={(e) => {
                  e.currentTarget.src = '/images/cross_pres_and_superantigen_1793615539507.jpg';
                }}
                alt="Illustrazione scientifica universitaria: Cross-Presentazione cDC1 vs Superantigeni"
                className="w-full h-48 object-cover group-hover:scale-102 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-xs text-white flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5" /> Clicca per visualizzare ad alta risoluzione
                </span>
              </div>
              <div className="p-3 text-[11px] text-slate-600 bg-white leading-relaxed border-t border-slate-100">
                <strong>Figura 10.1:</strong> Presentazione crociata in cDC1 a sinistra (fuga ERAD, proteasoma, TAP, CD8+) e meccanismo del superantigene stafilococcico a destra (ponte MHC-II / Vβ del TCR, tempesta citochinica).
              </div>
            </div>

            {/* Current Step Description Card */}
            <div className="space-y-2.5">
              <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                <span>Dettaglio della Fase Corrente:</span>
                <span className="text-indigo-600 font-mono text-[11px] font-semibold">Step {currentStep}</span>
              </div>

              {activeMode === 'cytosolic' ? (
                <div className="p-3.5 rounded-lg bg-indigo-50/80 border border-indigo-200 text-xs">
                  <div className="font-bold text-indigo-900 flex items-center gap-1.5 mb-1">
                    <Share2 className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Cross-Presentazione cDC1 (Antitumorale / Antivirale)</span>
                  </div>
                  <p className="text-indigo-900 leading-relaxed font-serif-body">
                    {steps[currentStep - 1].cytosolicAction}
                  </p>
                </div>
              ) : (
                <div className="p-3.5 rounded-lg bg-rose-50/80 border border-rose-200 text-xs">
                  <div className="font-bold text-rose-900 flex items-center gap-1.5 mb-1">
                    <Flame className="w-3.5 h-3.5 text-rose-600" />
                    <span>Superantigene Batterico (Shock Tossico)</span>
                  </div>
                  <p className="text-rose-900 leading-relaxed font-serif-body">
                    {steps[currentStep - 1].superantigenAction}
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
              className="px-3 py-1.5 rounded-md text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40 cursor-pointer flex items-center gap-1"
            >
              <span>Fase Successiva</span>
              <ChevronRight className="w-3 h-3" />
            </button>
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
                  Tavola Didattica: Cross-Presentazione cDC1 vs Superantigeni Batterici (SAg)
                </h4>
                <p className="text-xs text-slate-500">
                  Visualizzazione ad alta definizione con il ciclo intracellulare cDC1 e il bypass molecolare di TSST-1.
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
                src={IMAGES.crossPresAndSuperantigen}
                onError={(e) => {
                  e.currentTarget.src = '/images/cross_pres_and_superantigen_1793615539507.jpg';
                }}
                alt="Tavola anatomica completa ad alta risoluzione: Cross-Presentazione cDC1 vs Superantigeni"
                className="max-h-[68vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>

            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 font-serif-body">
              <div className="p-3 bg-white rounded-lg border border-indigo-200">
                <strong className="text-indigo-900 block font-bold mb-1">
                  Via Sinistra: Cross-Presentazione (cDC1)
                </strong>
                <p className="leading-relaxed">
                  Consente alle cellule dendritiche cDC1 (dipendenti da BATF3/IRF8) di fagocitare cellule tumorali o apoptotiche infettate da virus non-citopatici per le DC, traslocare le proteine nel citoplasma attraverso ERAD/Sec61, clivarle nel proteasoma e caricarle via TAP su MHC di classe I per innescare cloni T CD8+ citotossici protettivi.
                </p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-rose-200">
                <strong className="text-rose-900 block font-bold mb-1">
                  Via Destra: Superantigeni Batterici (SAg)
                </strong>
                <p className="leading-relaxed">
                  Tossine proteiche esogene (TSST-1, SpeA) che bypassano la processazione intracellulare legando simultaneamente la superficie laterale di MHC-II e la regione Vβ del TCR all&apos;esterno della tasca peptidica. Questo ponte artificiale attiva contemporaneamente fino al 20-25% di tutti i linfociti T, determinando rilascio massivo di citochine e shock tossico.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
