import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle2, ShieldAlert, Sparkles, Activity, Volume2 } from 'lucide-react';
import { IMAGES } from '../data/imageAssets';
import { useTtsInteractive } from '../hooks/useTtsInteractive';

export const InteractiveJakStatSimulator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [socsActive, setSocsActive] = useState<boolean>(false);
  const { explainState, explainWhatIf } = useTtsInteractive();

  const steps = [
    {
      num: 1,
      title: "1. Stato di Riposo (Inattivo)",
      desc: "I recettori per citochine sono monomeri o dimeri lassi associati alle tirosin-chinasi citoplasmatiche JAK. In assenza di ligando, le chinasi sono cataliticamente inattive.",
      molecularDetails: "JAK inattiva · STAT citosolica libera non fosforilata · Geni SOCS silenti."
    },
    {
      num: 2,
      title: "2. Legame della Citochina & Dimerizzazione",
      desc: "La citochina si lega ai domini extracellulari inducendo dimerizzazione del recettore. Le subunità JAK si avvicinano e si autofosforilano reciprocamente su residui di tirosina.",
      molecularDetails: "Autofosforilazione a croce di JAK · Attivazione del centro catalitico chinasico."
    },
    {
      num: 3,
      title: "3. Fosforilazione delle Tirosine Recettoriali",
      desc: "Le chinasi JAK attivate fosforilano specifici residui di tirosina sulle code intracellulari del recettore, creando motivi fosfotirosinici per il docking di domini SH2.",
      molecularDetails: "Code citoplasmatiche recettoriali fosforilate · Creazione di siti di ancoraggio per domini SH2."
    },
    {
      num: 4,
      title: "4. Reclutamento di STAT via Dominio SH2",
      desc: "I fattori trascrizionali STAT riconoscono e legano le fosfotirosine del recettore tramite il dominio SH2. JAK fosforila STAT su una specifica tirosina C-terminale.",
      molecularDetails: "Docking SH2-pTyr · Fosforilazione di tirosina su STAT (Tyr-701/705)."
    },
    {
      num: 5,
      title: "5. Dimerizzazione e Traslocazione Nucleare",
      desc: "STAT fosforilato si stacca dal recettore, dimerizza tramite interazione reciproca SH2-fosfotirosina, trasloca nel nucleo e attiva la trascrizione dei geni bersaglio e del gene SOCS.",
      molecularDetails: "Dimero STAT fosforilato · Trascrizione genica attiva · Induzione di geni immunitari e del gene SOCS."
    },
    {
      num: 6,
      title: "6. Spegnimento a Feedback Negativo via SOCS",
      desc: "Le proteine SOCS neosintetizzate inibiscono JAK tramite il dominio KIR, mascherano i siti di legame per STAT e reclutano ligasi di ubiquitina per degradare JAK e recettore.",
      molecularDetails: "Feedback a circuito chiuso · Blocco catalitico JAK · Degradazione proteasomiale ubiquitina-dipendente."
    }
  ];

  const handleSelectStep = (sNum: number) => {
    setCurrentStep(sNum);
  };

  const handleSpeakCurrentStep = () => {
    const target = steps.find(s => s.num === currentStep);
    if (target) {
      if (currentStep === 6) {
        explainWhatIf(
          "le proteine SOCS neosintetizzate si legano a JAK tramite il dominio inibitorio KIR",
          "l'attività chinasica si blocca e il complesso viene inviato a degradazione proteasomiale, spegnendo la risposta citochinica"
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
      if (s > 6) {
        clearInterval(interval);
        setIsPlaying(false);
      } else {
        setCurrentStep(s);
        const curr = steps[s - 1];
        if (curr) {
          explainState(curr.title, curr.desc);
        }
      }
    }, 3800);
  };

  const spokenOverview = "Simulatore interattivo della via di segnalazione JAK-STAT. In assenza di citochina, i recettori e le chinasi JAK sono inattivi. Il legame della citochina induce dimerizzazione e autofosforilazione di JAK. Le tirosine fosforilate del recettore reclutano i fattori STAT tramite dominio SH2. STAT viene fosforilato, dimerizza, migra nel nucleo e attiva la trascrizione genica, incluso il repressore SOCS che chiude il circuito a feedback negativo.";

  return (
    <div
      data-speech-text={spokenOverview}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden my-8 shadow-xs"
    >
      {/* Header and Controls */}
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-cyan-700 font-semibold">
            Simulatore di Segnalazione Molecolare
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-0.5">
            Via di Trasduzione JAK-STAT e Circuito di Feedback Negativo SOCS
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Dalla ricezione del segnale citochinico alla trascrizione nucleare e spegnimento proteasomiale.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSpeakCurrentStep}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-white border border-cyan-300 text-cyan-800 hover:bg-cyan-50 transition-colors shadow-2xs cursor-pointer"
            title="Ascolta spiegazione vocale della fase corrente"
          >
            <Volume2 className="w-3.5 h-3.5 text-cyan-700" />
            <span>Ascolta Fase</span>
          </button>
          <button
            onClick={handlePlayCycle}
            disabled={isPlaying}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-cyan-700 text-white hover:bg-cyan-800 disabled:opacity-50 transition-colors shadow-xs cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isPlaying ? 'Sequenza in Corso...' : 'Avvia Animazione Fasi'}</span>
          </button>
          <button
            onClick={() => { setCurrentStep(1); setSocsActive(false); }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Step Buttons Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-b border-slate-200 divide-x divide-slate-200 text-xs font-medium">
        {steps.map((st) => (
          <button
            key={st.num}
            onClick={() => handleSelectStep(st.num)}
            className={`p-3 text-left transition-colors flex items-center justify-between cursor-pointer ${
              currentStep === st.num
                ? 'bg-cyan-50 text-cyan-900 border-b-2 border-cyan-600 font-semibold'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span className="truncate">{st.title.split('.')[1]}</span>
            {currentStep === st.num && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 ml-1" />}
          </button>
        ))}
      </div>

      {/* Stage Layout: Left Interactive SVG + Right Micrograph & Molecular HUD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200">
        {/* Left Column: Interactive SVG (7 cols) */}
        <div className="lg:col-span-7 p-6 bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden select-none">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Fase: {steps[currentStep - 1].title}
            </span>
            <span>Target Farmacologico: Jakinibi (Inibitori JAK)</span>
          </div>

          {/* SVG Diagram of JAK-STAT Pathway */}
          <div className="w-full py-4 flex items-center justify-center">
            <svg viewBox="0 0 540 280" className="w-full h-auto max-w-[500px]">
              <defs>
                <linearGradient id="memGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
              </defs>

              {/* Lipid Bilayer Membrane */}
              <rect x="0" y="70" width="540" height="18" fill="url(#memGrad)" stroke="#64748b" strokeWidth="1" />
              <text x="20" y="83" fill="#94a3b8" fontSize="8" fontFamily="monospace">Membrana Plasmatica</text>
              <text x="20" y="60" fill="#cbd5e1" fontSize="8">Spazio Extracellulare</text>
              <text x="20" y="105" fill="#cbd5e1" fontSize="8">Citosol</text>

              {/* Nuclear Envelope at Bottom */}
              <path d="M 0 240 Q 270 200 540 240 L 540 280 L 0 280 Z" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
              <text x="270" y="258" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">NUCLEO CELLULARE (DNA / Promotore)</text>

              {/* CYTOKINE RECEPTOR CHAINS */}
              {/* Chain 1 */}
              <path
                d="M 235 25 L 235 70 L 235 150"
                stroke={currentStep >= 2 ? '#38bdf8' : '#94a3b8'}
                strokeWidth={currentStep >= 2 ? '6' : '5'}
                strokeLinecap="round"
              />
              {/* Chain 2 */}
              <path
                d={`M ${currentStep >= 2 ? 265 : 295} 25 L ${currentStep >= 2 ? 265 : 295} 70 L ${currentStep >= 2 ? 265 : 295} 150`}
                stroke={currentStep >= 2 ? '#38bdf8' : '#94a3b8'}
                strokeWidth={currentStep >= 2 ? '6' : '5'}
                strokeLinecap="round"
              />

              {/* CYTOKINE LIGAND (Appears at Step 2+) */}
              {currentStep >= 2 && (
                <g filter="url(#cyanGlow)">
                  <ellipse cx="250" cy="24" rx="16" ry="12" fill="#06b6d4" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="250" y="27" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">Citochina</text>
                </g>
              )}

              {/* JAK KINASES attached to receptor cytoplasmic tails */}
              <g>
                <rect x="215" y="95" width="18" height="26" rx="4" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
                <text x="224" y="112" fill="#713f12" fontSize="7" fontWeight="bold" textAnchor="middle">JAK</text>
                {/* Phosphorylation badge on JAK */}
                {currentStep >= 2 && (
                  <circle cx="212" cy="100" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                )}
                {currentStep >= 2 && (
                  <text x="212" y="103" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">P</text>
                )}
              </g>

              <g>
                <rect x={currentStep >= 2 ? 267 : 297} y="95" width="18" height="26" rx="4" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
                <text x={currentStep >= 2 ? 276 : 306} y="112" fill="#713f12" fontSize="7" fontWeight="bold" textAnchor="middle">JAK</text>
                {currentStep >= 2 && (
                  <circle cx={currentStep >= 2 ? 288 : 318} cy="100" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                )}
                {currentStep >= 2 && (
                  <text x={currentStep >= 2 ? 288 : 318} y="103" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">P</text>
                )}
              </g>

              {/* Receptor Tail Tyrosine Phosphorylations (Step 3+) */}
              {currentStep >= 3 && (
                <g>
                  <circle cx="235" cy="135" r="4.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                  <circle cx="265" cy="135" r="4.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                  <text x="235" y="138" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">P</text>
                  <text x="265" y="138" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">P</text>
                  <text x="288" y="137" fill="#f87171" fontSize="7">pTyr docking</text>
                </g>
              )}

              {/* STAT MOLECULES */}
              {currentStep === 4 && (
                /* Docking to receptor tails */
                <g filter="url(#cyanGlow)">
                  <rect x="200" y="125" width="28" height="18" rx="4" fill="#3b82f6" stroke="#93c5fd" />
                  <rect x="272" y="125" width="28" height="18" rx="4" fill="#3b82f6" stroke="#93c5fd" />
                  <text x="214" y="137" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">STAT</text>
                  <text x="286" y="137" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">STAT</text>
                  <text x="250" y="158" fill="#60a5fa" fontSize="8" textAnchor="middle">Fosforilazione di STAT</text>
                </g>
              )}

              {currentStep === 5 && (
                /* Active Phosphorylated Dimer moving into nucleus */
                <g filter="url(#cyanGlow)">
                  {/* Dimer in cytoplasm moving down */}
                  <g transform="translate(250, 205)">
                    <rect x="-24" y="-8" width="22" height="16" rx="3" fill="#3b82f6" />
                    <rect x="2" y="-8" width="22" height="16" rx="3" fill="#3b82f6" />
                    <circle cx="-13" cy="12" r="4" fill="#ef4444" />
                    <circle cx="13" cy="12" r="4" fill="#ef4444" />
                    <text x="0" y="4" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">Dimero STAT Attivo</text>
                  </g>
                  {/* Arrow to DNA */}
                  <line x1="250" y1="218" x2="250" y2="242" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" />
                </g>
              )}

              {currentStep === 6 && (
                /* SOCS Feedback Negative Loop */
                <g>
                  {/* SOCS Protein binding to JAK and receptor */}
                  <g transform="translate(240, 100)" filter="url(#cyanGlow)">
                    <rect x="-30" y="-10" width="60" height="22" rx="5" fill="#f43f5e" stroke="#ffffff" strokeWidth="1.5" />
                    <text x="0" y="4" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">SOCS (Inibitore)</text>
                  </g>
                  {/* Cross out symbol */}
                  <line x1="210" y1="85" x2="290" y2="135" stroke="#ef4444" strokeWidth="2.5" />
                  <line x1="290" y1="85" x2="210" y2="135" stroke="#ef4444" strokeWidth="2.5" />

                  {/* Ubiquitin tag */}
                  <circle cx="305" cy="100" r="8" fill="#a855f7" stroke="#ffffff" />
                  <text x="305" y="103" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">Ub</text>
                  <text x="360" y="103" fill="#d8b4fe" fontSize="8">Degradazione Proteasoma</text>
                </g>
              )}
            </svg>
          </div>

          <div className="mt-2 pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex justify-between">
            <span>{steps[currentStep - 1].molecularDetails}</span>
            <span>Step {currentStep} di 6</span>
          </div>
        </div>

        {/* Right Column: High-Res Molecular Micrograph & Scientific Breakdown (5 cols) */}
        <div className="lg:col-span-5 p-5 bg-slate-50 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
              Modellistica Strutturale 3D
            </span>
            <div className="mt-2 rounded-lg overflow-hidden border border-slate-200 bg-white">
              <img
                src={IMAGES.jakStatPathway}
                onError={(e) => { e.currentTarget.src = '/images/jak_stat_pathway_1792321706887.jpg'; }}
                alt="Rendering molecolare 3D del dimero recettoriale delle citochine, JAK e traslocazione nucleare di STAT"
                className="w-full h-44 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-3 text-[11px] text-slate-600 bg-white leading-relaxed">
                <strong>Figura 2.1:</strong> Architettura molecolare del recettore citochinico dimerico con le chinasi JAK che fosforilano STAT per la traslocazione nucleare attraverso il complesso del poro nucleare (NPC).
              </div>
            </div>
          </div>

          <div className="mt-4 p-3.5 rounded-lg bg-cyan-50 border border-cyan-200 text-xs">
            <h4 className="font-bold text-cyan-950 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-700" />
              Rilevanza Clinica: Farmaci Inibitori di JAK (*Jakinibi*)
            </h4>
            <p className="mt-1 text-cyan-950 leading-relaxed font-serif-body">
              Piccole molecole sintetiche orali (es. <em>Tofacitinib</em>, <em>Baricitinib</em>, <em>Ruxolitinib</em>)
              competono reversibilmente con l'ATP nella tasca catalitica di JAK1/JAK2/JAK3. Questo interrompe la cascata
              trascrizionale di citochine pro-infiammatorie (IL-6, IFN-γ) in patologie come artrite reumatoide, alopecia areata
              e sindromi da rilascio citochinico.
            </p>
          </div>
        </div>
      </div>

      {/* Narrative Step Details */}
      <div className="p-5 bg-slate-50 border-t border-slate-200">
        <h4 className="text-sm font-bold text-slate-900">
          {steps[currentStep - 1].title}
        </h4>
        <p className="text-xs text-slate-700 mt-1 leading-relaxed font-serif-body">
          {steps[currentStep - 1].desc}
        </p>
      </div>
    </div>
  );
};
