import React, { useState } from 'react';
import { Zap, Play, RotateCcw, AlertTriangle, ShieldCheck, Flame, Info, CheckCircle2 } from 'lucide-react';
import { ROS_CASCADE_STEPS } from '../data/lezione3Content';

export const InteractiveRosSimulator: React.FC = () => {
  const [isCGD, setIsCGD] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleNextStep = () => {
    if (isCGD) {
      setActiveStep(1); // CGD blocks at step 1
      return;
    }
    setActiveStep((prev) => (prev < 4 ? prev + 1 : 0));
  };

  const resetSimulation = () => {
    setActiveStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold tracking-wider text-rose-600 uppercase bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
              Biochimica del Fagosoma
            </span>
            <span className="text-xs text-slate-400 font-mono">Simulatore Enzimatico NOX2</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
            Il Complesso NADPH Ossidasi & la Cascata dei ROS
          </h3>
          <p className="text-xs text-slate-600 mt-0.5">
            Tracciamento del flusso di elettroni citosolico, dismutazione dei radicali e lisi microbica catalizzata dalla Mieloperossidasi (MPO).
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl self-start sm:self-auto border border-slate-200 print:hidden">
          <button
            onClick={() => {
              setIsCGD(false);
              resetSimulation();
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              !isCGD
                ? 'bg-white text-emerald-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Fisiologico Normale
          </button>
          <button
            onClick={() => {
              setIsCGD(true);
              resetSimulation();
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isCGD
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Mutazione CGD (Deficit gp91phox)
          </button>
        </div>
      </div>

      {/* SVG Diagram: Cross-section of Phagosomal Membrane */}
      <div className="mt-6 bg-slate-950 rounded-xl p-4 sm:p-6 overflow-hidden relative text-white border border-slate-800 print:hidden">
        <svg
          viewBox="0 0 800 380"
          className="w-full h-auto max-h-[380px] select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cytosolGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="phagosomeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#022c22" />
              <stop offset="100%" stopColor="#064e3b" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Compartment Backgrounds */}
          <rect x="0" y="0" width="800" height="150" fill="url(#cytosolGrad)" />
          <rect x="0" y="150" width="800" height="30" fill="#334155" stroke="#475569" strokeWidth="1" />
          <rect x="0" y="180" width="800" height="200" fill="url(#phagosomeGrad)" />

          {/* Labels for Compartments */}
          <text x="25" y="35" fill="#94a3b8" fontSize="11" fontFamily="monospace" fontWeight="600">
            CITOSOL DEL NEUTROFILO (pH 7.4)
          </text>
          <text x="25" y="170" fill="#cbd5e1" fontSize="10" fontFamily="monospace" fontWeight="bold">
            DOPPIO STRATO FOSFOLIPIDICO (MEMBRANA FAGOSOMIALE)
          </text>
          <text x="25" y="210" fill="#34d399" fontSize="11" fontFamily="monospace" fontWeight="600">
            LUME DEL FAGOLISOSOMA (pH 5.0 - 5.5)
          </text>

          {/* CYTOSOLIC SUBUNITS (p47phox, p67phox, p40phox, Rac2) */}
          <g transform="translate(180, 50)">
            <rect
              x="0"
              y="0"
              width="130"
              height="80"
              rx="12"
              fill={activeStep >= 1 ? '#0284c7' : '#1e3a5f'}
              stroke={activeStep >= 1 ? '#38bdf8' : '#334155'}
              strokeWidth="2"
              className="transition-all duration-300"
            />
            <text x="65" y="25" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">
              Complesso Citosolico
            </text>
            <text x="65" y="45" fill="#bae6fd" fontSize="9" fontFamily="monospace" textAnchor="middle">
              p47 + p67 + p40
            </text>
            <text x="65" y="65" fill="#e0f2fe" fontSize="9" fontFamily="monospace" textAnchor="middle">
              + GTP-Rac2
            </text>

            {/* Translocation Arrow */}
            {activeStep >= 1 && (
              <path
                d="M 65 85 L 65 125"
                stroke="#38bdf8"
                strokeWidth="3"
                strokeDasharray="4 3"
                fill="none"
                markerEnd="url(#arrowBlue)"
              />
            )}
          </g>

          {/* MEMBRANE SUBUNITS (Cytochrome b558: gp91phox + p22phox) */}
          <g transform="translate(360, 125)">
            <rect
              x="0"
              y="0"
              width="140"
              height="80"
              rx="10"
              fill={isCGD ? '#7f1d1d' : '#059669'}
              stroke={isCGD ? '#f43f5e' : '#10b981'}
              strokeWidth="2"
              className="transition-all duration-300"
            />
            <text x="70" y="25" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
              Citocromo b₅₅₈
            </text>
            <text x="70" y="45" fill={isCGD ? '#fca5a5' : '#a7f3d0'} fontSize="9" fontFamily="monospace" textAnchor="middle">
              {isCGD ? 'gp91phox MUTATO/ASSENTE' : 'gp91phox (β) + p22phox (α)'}
            </text>
            <text x="70" y="65" fill="#ffffff" fontSize="8" fontFamily="monospace" textAnchor="middle">
              {isCGD ? 'BLOCCO ELETTRONICO' : 'Gruppi Eme Fe²⁺/Fe³⁺ + FAD'}
            </text>
          </g>

          {/* NADPH Binding and Electron Transfer */}
          <g transform="translate(180, 20)">
            <rect x="150" y="60" width="75" height="30" rx="6" fill="#f59e0b" />
            <text x="187" y="79" fill="#78350f" fontSize="10" fontWeight="bold" textAnchor="middle">
              NADPH
            </text>
            {activeStep >= 1 && !isCGD && (
              <>
                {/* Electron beam */}
                <path
                  d="M 225 75 Q 300 75 360 145"
                  stroke="#fbbf24"
                  strokeWidth="3"
                  strokeDasharray="5 3"
                  fill="none"
                />
                <circle cx="290" cy="100" r="5" fill="#fbbf24" filter="url(#glow)" />
                <text x="300" y="98" fill="#fef08a" fontSize="10" fontWeight="bold">
                  2 e⁻
                </text>
              </>
            )}
          </g>

          {/* IN PHAGOSOME LUMEN: O2 reduction and ROS cascade */}
          {!isCGD ? (
            <>
              {/* O2 to Superoxide */}
              <g transform="translate(420, 220)">
                <circle cx="15" cy="15" r="22" fill={activeStep >= 1 ? '#ef4444' : '#334155'} />
                <text x="15" y="19" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
                  O₂
                </text>
                {activeStep >= 1 && (
                  <text x="50" y="19" fill="#f87171" fontSize="11" fontWeight="bold">
                    ➔ 2 O₂•⁻ (Superossido)
                  </text>
                )}
              </g>

              {/* Superoxide Dismutase (SOD) & H2O2 */}
              {activeStep >= 2 && (
                <g transform="translate(360, 270)">
                  <rect x="0" y="0" width="220" height="32" rx="8" fill="#1e293b" stroke="#38bdf8" />
                  <text x="110" y="15" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">
                    SOD: 2 O₂•⁻ + 2 H⁺ ➔ H₂O₂ + O₂
                  </text>
                  <text x="110" y="27" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">
                    Perossido di Idrogeno
                  </text>
                </g>
              )}

              {/* MPO and HOCl Synthesis */}
              {activeStep >= 3 && (
                <g transform="translate(320, 315)">
                  <rect x="0" y="0" width="300" height="42" rx="8" fill="#701a75" stroke="#f472b6" />
                  <text x="150" y="18" fill="#fdf2f8" fontSize="11" fontWeight="bold" textAnchor="middle">
                    MPO (Mieloperossidasi) + Cl⁻
                  </text>
                  <text x="150" y="34" fill="#fbcfe8" fontSize="10" fontFamily="monospace" textAnchor="middle">
                    H₂O₂ + Cl⁻ ➔ HOCl (Acido Ipocloroso / Candeggina)
                  </text>
                </g>
              )}

              {/* Target Bacterium (Staphylococcus aureus) */}
              <g transform="translate(640, 240)">
                <ellipse
                  cx="50"
                  cy="45"
                  rx="45"
                  ry="35"
                  fill={activeStep >= 4 ? '#334155' : '#854d0e'}
                  stroke={activeStep >= 4 ? '#ef4444' : '#eab308'}
                  strokeWidth="2"
                  strokeDasharray={activeStep >= 4 ? '5 3' : 'none'}
                />
                <text x="50" y="42" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                  {activeStep >= 4 ? 'BATTERIO LISATO' : 'S. aureus'}
                </text>
                <text x="50" y="55" fill={activeStep >= 4 ? '#fca5a5' : '#fef08a'} fontSize="8" textAnchor="middle">
                  {activeStep >= 4 ? 'Membrana perossidata' : 'Catalasi-positivo'}
                </text>
              </g>
            </>
          ) : (
            /* CGD DEFICIENT STATE */
            <g transform="translate(350, 230)">
              <rect x="0" y="0" width="380" height="90" rx="10" fill="#450a0a" stroke="#f87171" strokeWidth="2" />
              <text x="190" y="30" fill="#fecaca" fontSize="12" fontWeight="bold" textAnchor="middle">
                MALATTIA GRANULOMATOSA CRONICA (CGD)
              </text>
              <text x="190" y="50" fill="#ffffff" fontSize="10" textAnchor="middle">
                Assenza di Flusso Elettronico: Zero O₂•⁻, Zero H₂O₂, Zero HOCl
              </text>
              <text x="190" y="72" fill="#fca5a5" fontSize="9" fontFamily="monospace" textAnchor="middle">
                S. aureus e Aspergillus degradano ogni H2O2 residuo ➔ Infezione invasiva & Granulomi
              </text>
            </g>
          )}
        </svg>

        {/* Step indicator progress bar */}
        <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Progresso Reazione:</span>
            <span className="font-mono font-bold text-amber-400">
              {isCGD
                ? 'BLOCCO PATOLOGICO (NOX2 inattiva)'
                : activeStep === 0
                ? 'Stato Basale (Fagosoma Chiuso)'
                : `Fase ${activeStep} di 4: ${ROS_CASCADE_STEPS[activeStep - 1]?.products || 'Lisi Microbica'}`}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleNextStep}
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <Play className="w-3.5 h-3.5" />
              <span>{activeStep === 0 ? 'Avvia Flusso' : 'Fase Successiva'}</span>
            </button>
            <button
              onClick={resetSimulation}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Reimposta"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Step Explanation Cards (Screen Only) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 print:hidden">
        {ROS_CASCADE_STEPS.map((s) => {
          const isCurrent = activeStep === s.step && !isCGD;
          const isPassed = activeStep > s.step && !isCGD;

          return (
            <div
              key={s.step}
              className={`p-3.5 rounded-xl border transition-all ${
                isCurrent
                  ? 'border-blue-500 bg-blue-50/70 shadow-xs ring-1 ring-blue-400'
                  : isPassed
                  ? 'border-emerald-200 bg-emerald-50/40 text-slate-700'
                  : 'border-slate-200 bg-slate-50 text-slate-500'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                <span className="font-bold text-slate-700">Fase {s.step}</span>
                {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                {isCurrent && <span className="text-blue-600 font-bold animate-pulse">ATTIVA</span>}
              </div>
              <h4 className="text-xs font-bold text-slate-900 leading-tight">{s.enzyme}</h4>
              <p className="font-mono text-[11px] text-blue-700 mt-1 font-semibold">{s.products}</p>
              <p className="text-[11px] text-slate-600 mt-1 leading-snug">{s.description}</p>
            </div>
          );
        })}
      </div>

      {/* Printable Unrolled Table of ROS Cascade (A4 Format) */}
      <div className="hidden print:block my-4 p-4 rounded-xl border border-slate-300 bg-white">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 font-mono flex items-center justify-between border-b border-slate-300 pb-2">
          <span>Cascata Enzimatico-Biochimica della NADPH Ossidasi (NOX2) e Specie Reattive dell&apos;Ossigeno</span>
          <span className="text-slate-500 font-mono">4 Reazioni Stechiometriche</span>
        </div>

        <div className="space-y-3">
          {ROS_CASCADE_STEPS.map((s) => (
            <div key={s.step} className="p-3 rounded-lg border border-slate-200 bg-slate-50/50 break-inside-avoid space-y-1 text-xs">
              <div className="flex items-center justify-between font-bold text-slate-900 border-b border-slate-200 pb-1">
                <span className="text-rose-900 font-bold">Fase {s.step}: {s.enzyme}</span>
                <span className="font-mono text-[11px] text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">{s.reaction}</span>
              </div>
              <p className="text-slate-800 leading-relaxed pt-1 text-[11px]">{s.description}</p>
              <div className="text-[10.5px] text-amber-900 bg-amber-50/70 p-2 rounded border border-amber-200 mt-1">
                <strong>Clinica & Patologia:</strong> {s.clinicalNote}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clinical Diagnosis Callout Box (DHR Test) */}
      <div className="mt-5 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
        <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-amber-900">
            Gold Standard Diagnostico di Laboratorio: Test alla Diidrorodamina 123 (DHR)
          </h4>
          <p className="mt-1 leading-relaxed text-amber-800">
            La diidrorodamina 123 permea nei neutrofili; in presenza di un burst respiratorio intatto (H₂O₂ e MPO),
            viene ossidata a <strong>rodamina 123 fluorescente verde</strong>, misurata in citofluorimetria.
            Nei maschi affetti da <strong>X-CGD</strong> il picco di fluorescenza non si sposta dopo stimolazione con PMA.
            Nelle <strong>madri portatrici eterozigoti</strong> si evidenzia un caratteristico <strong>profilo bicaratteristico a due picchi</strong>,
            espressione del mosaicismo da inattivazione casuale del cromosoma X di Lyon.
          </p>
        </div>
      </div>
    </div>
  );
};
