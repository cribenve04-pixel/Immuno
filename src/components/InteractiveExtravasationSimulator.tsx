import React, { useState } from 'react';
import { EXTRAVASATION_STEPS } from '../data/chapterContent';
import { ArrowRight, Play, RotateCcw, Info, CheckCircle2 } from 'lucide-react';

export const InteractiveExtravasationSimulator: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedMolecule, setSelectedMolecule] = useState<string | null>(null);

  const moleculeDetails: Record<string, { role: string; clinic: string }> = {
    'Selectine': {
      role: 'P-selectina ed E-selectina espresse dall\'endotelio infiammato legano i carboidrati sialilati sul leucocita a bassa affinità.',
      clinic: 'La P-selectina è preformata nei granuli di Weibel-Palade endoteliali e trasloca in superficie in pochi minuti stimolata da istamina o trombina.'
    },
    'Sialil-Lewis X': {
      role: 'Tetrasaccaride legato a glicoproteine di membrana leucocitaria (es. PSGL-1) che funge da ligando per le selectine.',
      clinic: 'Difetti genetici nella fucosilazione determinano il deficit di adesione leucocitaria di tipo 2 (LAD-2).'
    },
    'Chemochine / GPCR': {
      role: 'CXCL8 (IL-8) esposta sull\'endotelio attiva il recettore CXCR1/2 inducendo la cascata intracellulare mediata da proteine G.',
      clinic: 'Innesca il segnale "inside-out" che modifica la conformazione tridimensionale delle integrine in frazioni di secondo.'
    },
    'Integrine (LFA-1)': {
      role: 'Eterodimero αLβ2 (CD11a/CD18) che passa da conformazione ripiegata (bassa affinità) a conformazione estesa (altissima affinità).',
      clinic: 'La LAD-1 (Leukocyte Adhesion Deficiency-1) è dovuta a mutazioni della catena β2 (CD18), con assenza di adesione stabile, mancata formazione di pus e leucocitosi marcata.'
    },
    'ICAM-1': {
      role: 'Molecola di adesione intercellulare-1 (CD54), espressa fortemente dall\'endotelio vascolare attivato da TNF-α e IL-1.',
      clinic: 'Fornisce l\'ancoraggio rigido che arresta il movimento rotatorio del leucocita vincendo le forze emodinamiche.'
    },
    'PECAM-1 (CD31)': {
      role: 'Espresso sia sui leucociti che sulle giunzioni tra cellule endoteliali, guida la diapedesi trans-endoteliale.',
      clinic: 'L\'interazione omofilica PECAM-1/PECAM-1 facilita la penetrazione della barriera basale vascolare verso il tessuto infiammato.'
    }
  };

  const handlePlayCycle = () => {
    setIsPlaying(true);
    let current = 1;
    setActiveStep(1);
    const interval = setInterval(() => {
      current++;
      if (current > 4) {
        clearInterval(interval);
        setIsPlaying(false);
      } else {
        setActiveStep(current);
      }
    }, 1800);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden my-8 shadow-xs">
      <div className="p-5 border-b border-slate-150 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold">Simulatore Fisiopatologico Interattivo</span>
          <h3 className="text-lg font-bold text-slate-900 mt-0.5">Cascata del Reclutamento e Stravaso Leucocitario</h3>
          <p className="text-xs text-slate-500 mt-1">
            Visualizzazione dinamica delle 4 fasi molecolari: dal rotolamento alla transmigrazione trans-endoteliale.
          </p>
        </div>

        <div className="flex items-center gap-2 print:hidden">
          <button
            onClick={handlePlayCycle}
            disabled={isPlaying}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-xs"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isPlaying ? 'Esecuzione in corso...' : 'Avvia Animazione Fasi'}</span>
          </button>
          <button
            onClick={() => { setActiveStep(1); setSelectedMolecule(null); }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Screen Interactive Stage */}
      <div className="print:hidden">
        {/* Step Selector Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-200 divide-x divide-slate-200 text-xs font-medium">
        {EXTRAVASATION_STEPS.map((s) => (
          <button
            key={s.step}
            onClick={() => { setActiveStep(s.step); }}
            className={`p-3 text-left transition-colors flex items-center justify-between ${
              activeStep === s.step
                ? 'bg-blue-50/80 text-blue-900 border-b-2 border-blue-600 font-semibold'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span className="truncate">{s.title}</span>
            {activeStep === s.step && <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 ml-1" />}
          </button>
        ))}
      </div>

      {/* Interactive Stage & Diagram */}
      <div className="p-6 bg-slate-900 text-white relative select-none">
        {/* Blood Flow Direction Indicator */}
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-4 px-2">
          <span className="flex items-center gap-1.5 text-amber-300">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            Lume Vascolare / Flusso Ematico Emostatico (Forze di Taglio)
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            Direzione Flusso <ArrowRight className="w-3.5 h-3.5 inline animate-pulse text-amber-300" />
          </span>
        </div>

        {/* SVG Extravasation Stage */}
        <div className="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 800 240" className="w-full h-auto min-w-[700px]">
            {/* Background Blood Flow Gradient */}
            <rect x="0" y="0" width="800" height="150" fill="url(#bloodGrad)" opacity="0.35" />

            <defs>
              <linearGradient id="bloodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="leukocyteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>

            {/* Endothelial Layer */}
            <g id="endothelium">
              {[0, 160, 320, 480, 640].map((x, i) => (
                <g key={i}>
                  <rect
                    x={x + 2}
                    y="150"
                    width="156"
                    height="34"
                    rx="4"
                    fill="#334155"
                    stroke="#475569"
                    strokeWidth="1.5"
                  />
                  <ellipse cx={x + 80} cy="167" rx="20" ry="6" fill="#1e293b" />
                  <text x={x + 80} y="170" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">
                    Endotelio {i + 1}
                  </text>
                </g>
              ))}
            </g>

            {/* Sub-endothelial Tissue Layer (Inflamed site) */}
            <rect x="0" y="184" width="800" height="56" fill="#1e293b" />
            <text x="400" y="215" fill="#f87171" fontSize="11" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">
              Interstizio Tissutale Infiammato (TNF-α, IL-1, CXCL8, danno patogeno)
            </text>

            {/* STEP 1: Rolling Leucocyte */}
            <g
              className={`cursor-pointer transition-all duration-300 ${activeStep === 1 ? 'opacity-100' : 'opacity-40 hover:opacity-80'}`}
              onClick={() => setActiveStep(1)}
            >
              <circle cx="100" cy="90" r="32" fill="url(#leukocyteGrad)" stroke="#93c5fd" strokeWidth="2" />
              <text x="100" y="88" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold">Leucocita</text>
              <text x="100" y="101" fill="#cbd5e1" fontSize="8" textAnchor="middle">Rolling</text>

              {/* Selectin and sLeX interaction */}
              <line x1="100" y1="122" x2="100" y2="150" stroke="#f59e0b" strokeWidth="3" strokeDasharray="3 3" />
              <circle cx="100" cy="136" r="4" fill="#fbbf24" />
              <text x="100" y="145" fill="#fef08a" fontSize="7" textAnchor="middle">sLeX - Selectina</text>
            </g>

            {/* STEP 2: Chemokine Activation */}
            <g
              className={`cursor-pointer transition-all duration-300 ${activeStep === 2 ? 'opacity-100' : 'opacity-40 hover:opacity-80'}`}
              onClick={() => setActiveStep(2)}
            >
              <circle cx="300" cy="100" r="32" fill="url(#leukocyteGrad)" stroke="#38bdf8" strokeWidth="2" />
              <text x="300" y="98" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold">Leucocita</text>
              <text x="300" y="111" fill="#7dd3fc" fontSize="8" textAnchor="middle">Attivazione</text>

              {/* Chemokine gradient sparks */}
              <circle cx="285" cy="144" r="5" fill="#38bdf8" />
              <circle cx="315" cy="146" r="4" fill="#38bdf8" />
              <text x="300" y="145" fill="#bae6fd" fontSize="7" textAnchor="middle">CXCL8 (GPCR)</text>
            </g>

            {/* STEP 3: Stable Adhesion */}
            <g
              className={`cursor-pointer transition-all duration-300 ${activeStep === 3 ? 'opacity-100' : 'opacity-40 hover:opacity-80'}`}
              onClick={() => setActiveStep(3)}
            >
              {/* Flattened Leucocyte */}
              <ellipse cx="500" cy="122" rx="36" ry="24" fill="url(#leukocyteGrad)" stroke="#10b981" strokeWidth="2.5" />
              <text x="500" y="120" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold">Arresto Leucocita</text>
              <text x="500" y="132" fill="#a7f3d0" fontSize="8" textAnchor="middle">Adesione Stabile</text>

              {/* High-affinity integrin bonds */}
              <rect x="480" y="146" width="10" height="6" fill="#10b981" />
              <rect x="510" y="146" width="10" height="6" fill="#10b981" />
              <text x="500" y="146" fill="#34d399" fontSize="7" textAnchor="middle">LFA-1 + ICAM-1</text>
            </g>

            {/* STEP 4: Diapedesis / Transmigration */}
            <g
              className={`cursor-pointer transition-all duration-300 ${activeStep === 4 ? 'opacity-100' : 'opacity-40 hover:opacity-80'}`}
              onClick={() => setActiveStep(4)}
            >
              {/* Squeezing Leucocyte between Endothelial Cells 4 and 5 */}
              <path
                d="M 640 120 Q 645 150 638 180 Q 632 200 645 210 Q 655 200 650 180 Q 645 150 655 120 Z"
                fill="url(#leukocyteGrad)"
                stroke="#ec4899"
                strokeWidth="2"
              />
              <circle cx="645" cy="190" r="16" fill="url(#leukocyteGrad)" opacity="0.8" />
              <text x="645" y="112" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold">Diapedesi</text>
              <text x="645" y="193" fill="#fbcfe8" fontSize="8" textAnchor="middle">PECAM-1</text>
            </g>

            {/* Intercellular Junction CD31 marker */}
            <line x1="640" y1="150" x2="640" y2="184" stroke="#ec4899" strokeWidth="2" strokeDasharray="2 2" />
          </svg>
        </div>

        {/* Clickable Molecular Target Pills for Deep Dive */}
        <div className="mt-4 pt-4 border-t border-slate-800">
          <div className="text-xs text-slate-400 mb-2 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-blue-400" />
            <span>Fai clic sulle molecole chiave per esaminare meccanismo e patologia correlata:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.keys(moleculeDetails).map((mol) => (
              <button
                key={mol}
                onClick={() => setSelectedMolecule(selectedMolecule === mol ? null : mol)}
                className={`text-xs px-2.5 py-1 rounded transition-colors ${
                  selectedMolecule === mol
                    ? 'bg-blue-600 text-white font-medium'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {mol}
              </button>
            ))}
          </div>

          {selectedMolecule && (
            <div className="mt-3 p-3.5 rounded-lg bg-slate-800/90 border border-slate-700 text-xs animate-in fade-in duration-200">
              <span className="font-bold text-blue-300">{selectedMolecule}</span>
              <p className="mt-1 text-slate-200">{moleculeDetails[selectedMolecule].role}</p>
              <p className="mt-1.5 text-amber-300 font-mono text-[11px]">
                Correlazione Clinica: {moleculeDetails[selectedMolecule].clinic}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Step Explanation Drawer */}
      <div className="p-5 bg-slate-50 border-t border-slate-200">
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-sm mt-0.5">
            {activeStep}
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-slate-900">
              {EXTRAVASATION_STEPS[activeStep - 1].title}
            </h4>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">
              {EXTRAVASATION_STEPS[activeStep - 1].mechanism}
            </p>
            <div className="mt-2.5 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded bg-white border border-slate-200">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Dinamica Emodinamica</span>
                <p className="text-slate-800 mt-0.5">{EXTRAVASATION_STEPS[activeStep - 1].dynamics}</p>
              </div>
              <div className="p-2.5 rounded bg-white border border-slate-200">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Attori Molecolari Chiave</span>
                <p className="text-slate-800 font-mono text-[11px] mt-0.5">{EXTRAVASATION_STEPS[activeStep - 1].molecularPlayers}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Printable Unrolled Table of Extravasation Steps & Adhesion Molecules (A4 Format) */}
      <div className="hidden print:block p-6 border-t border-slate-200 bg-white">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4 font-mono flex items-center justify-between border-b border-slate-300 pb-2">
          <span>Cascata Completa del Reclutamento e Stravaso Leucocitario (Srotolata)</span>
          <span className="text-slate-500 font-mono">4 Fasi Emodinamiche</span>
        </div>

        <div className="space-y-4">
          {EXTRAVASATION_STEPS.map((s) => (
            <div key={s.step} className="p-4 rounded-lg border border-slate-300 bg-slate-50/60 break-inside-avoid space-y-2 text-xs">
              <div className="flex items-center justify-between font-bold text-slate-900 border-b border-slate-200 pb-1">
                <span className="text-sm text-blue-900">Fase {s.step}: {s.title}</span>
                <span className="font-mono text-[10px] text-slate-500">Stravaso Leucocitario</span>
              </div>
              <p className="text-slate-800 leading-relaxed font-normal">{s.mechanism}</p>
              
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-2 rounded bg-white border border-slate-200">
                  <strong className="text-slate-900 block font-semibold mb-0.5 text-[11px]">Dinamica Emodinamica:</strong>
                  <p className="text-slate-700 text-[11px] leading-relaxed">{s.dynamics}</p>
                </div>
                <div className="p-2 rounded bg-white border border-slate-200">
                  <strong className="text-slate-900 block font-semibold mb-0.5 text-[11px]">Attori Molecolari:</strong>
                  <p className="text-slate-700 font-mono text-[11px] leading-relaxed">{s.molecularPlayers}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quadro Sinottico Molecole di Adesione & Deficit Clinici (LAD-1 & LAD-2) */}
        <div className="mt-5 p-4 rounded-lg border border-slate-300 bg-slate-50 break-inside-avoid text-xs space-y-3">
          <div className="font-bold text-slate-900 font-mono uppercase tracking-wider">
            Repertorio delle Molecole di Adesione e Correlazioni Cliniche:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
            {Object.entries(moleculeDetails).map(([mol, detail]) => (
              <div key={mol} className="p-2.5 rounded bg-white border border-slate-200 space-y-1">
                <strong className="text-blue-900 block font-bold">{mol}</strong>
                <p className="text-slate-700 leading-snug">{detail.role}</p>
                <p className="text-amber-900 bg-amber-50/80 p-1.5 rounded border border-amber-200 text-[10.5px]">
                  <strong>Clinica:</strong> {detail.clinic}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
