import React, { useState } from 'react';
import { Sliders, RefreshCw, AlertCircle, Volume2 } from 'lucide-react';
import { useTtsInteractive } from '../hooks/useTtsInteractive';

export const InteractiveKineticsGraph: React.FC = () => {
  const [showSecondary, setShowSecondary] = useState<boolean>(true);
  const [showIgM, setShowIgM] = useState<boolean>(true);
  const [showIgG, setShowIgG] = useState<boolean>(true);
  const [affinityBoost, setAffinityBoost] = useState<number>(1.5);
  const [hoveredPoint, setHoveredPoint] = useState<{ x: number; y: number; day: number; igM: number; igG: number; note: string } | null>(null);
  const { announceSliderChange, explainWhatIf, explainState } = useTtsInteractive();

  // Generate curve points for 56 days
  // Primary encounter at Day 0, Secondary encounter at Day 28
  const totalDays = 56;
  const width = 760;
  const height = 280;
  const padding = { top: 20, right: 30, bottom: 40, left: 55 };

  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;

  // Calculate curve points
  const points: { day: number; igM: number; igG: number; note: string }[] = [];

  for (let d = 0; d <= totalDays; d++) {
    let igM = 0;
    let igG = 0;
    let note = '';

    // Primary response: Days 0 to 27
    if (d >= 0 && d < 28) {
      if (d < 4) {
        // Lag phase
        igM = 0;
        igG = 0;
        if (d === 0) note = '1° Incontro con l\'Antigene (Lag Phase / Latenza)';
      } else if (d <= 10) {
        // IgM peak in primary
        igM = Math.sin(((d - 4) / 6) * (Math.PI / 2)) * 35;
        igG = d >= 7 ? Math.sin(((d - 7) / 7) * (Math.PI / 2)) * 18 : 0;
        if (d === 10) note = 'Picco Primario IgM (Bassa affinità, isotipo iniziale)';
      } else if (d <= 21) {
        // Decline of IgM, modest IgG
        const progress = (d - 10) / 11;
        igM = 35 * Math.exp(-progress * 2.2);
        igG = 18 * Math.exp(-progress * 1.2);
        if (d === 14) note = 'Switch isotipico nei centri germinativi e formazione plasmacellule di memoria';
      } else {
        igM = 4 * Math.exp(-(d - 21) * 0.2);
        igG = 10 * Math.exp(-(d - 21) * 0.1);
      }
    }

    // Secondary response: Days 28 to 56
    if (d >= 28) {
      const relDay = d - 28;
      if (relDay === 0) {
        note = '2° Incontro con l\'Antigene (Dose Richiamo / Booster)';
      }
      if (relDay < 2) {
        // Very brief lag phase (1-2 days)
        igM = 2 + relDay;
        igG = 8 + relDay * 8;
      } else if (relDay <= 8) {
        // Dramatic explosive IgG increase
        igM = 5 + Math.sin((relDay / 8) * (Math.PI / 2)) * 15;
        igG = 20 + Math.sin((relDay / 8) * (Math.PI / 2)) * (65 * affinityBoost);
        if (relDay === 8) note = 'Picco Risposta Secondaria: Titoli IgG elevatissimi ad alta affinità';
      } else {
        // Long sustained plateau due to long-lived plasma cells
        const decayDays = relDay - 8;
        igM = 20 * Math.exp(-decayDays * 0.15);
        igG = (20 + 65 * affinityBoost) * Math.exp(-decayDays * 0.035);
        if (relDay === 20) note = 'Mantenimento duraturo di IgG neutralizzanti circolanti';
      }
    }

    points.push({ day: d, igM: Math.round(igM * 10) / 10, igG: Math.round(igG * 10) / 10, note });
  }

  const getSvgX = (day: number) => padding.left + (day / totalDays) * graphWidth;
  const maxTiter = 120;
  const getSvgY = (titer: number) => padding.top + graphHeight - (titer / maxTiter) * graphHeight;

  // Build SVG path strings
  const igmPath = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${getSvgX(p.day)} ${getSvgY(p.igM)}`)
    .join(' ');

  const iggPath = points
    .filter((p) => showSecondary || p.day < 28)
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${getSvgX(p.day)} ${getSvgY(p.igG)}`)
    .join(' ');

  const spokenOverview = "Grafico dinamico della cinetica anticorpale sierica. Mostra la differenza tra la risposta primaria lenta con IgM a bassa affinità e la risposta secondaria accelerata con esplosione di IgG ad alta affinità a seguito di memoria immunologica e switch isotipico.";

  const handleSliderChange = (newVal: number) => {
    setAffinityBoost(newVal);
  };

  const handleToggleSecondary = () => {
    setShowSecondary(prev => !prev);
  };

  return (
    <div
      data-speech-text={spokenOverview}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden my-8 shadow-xs"
    >
      {/* Header and Controls */}
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-700 font-semibold">Cinetica e Memoria Immunologica</span>
          <h3 className="text-lg font-bold text-slate-900 mt-0.5">Dinamica Sierica: Risposta Primaria vs Risposta Secondaria</h3>
          <p className="text-xs text-slate-500 mt-1">
            Simulazione dell'evoluzione temporale del titolo anticorpale, dello switch isotipico IgM → IgG e della maturazione dell'affinità.
          </p>
        </div>

        {/* Legend & Toggles */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => explainState("Curva Cinetica Sierica", spokenOverview)}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-semibold transition-colors shadow-2xs cursor-pointer"
            title="Ascolta spiegazione clinico-immunologica della cinetica anticorpale"
          >
            <Volume2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Ascolta Grafico</span>
          </button>
          <button
            onClick={() => setShowIgM(!showIgM)}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded border transition-colors cursor-pointer ${
              showIgM ? 'bg-amber-50 border-amber-300 text-amber-800 font-medium' : 'bg-white border-slate-200 text-slate-400'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
            <span>IgM (Iniziale)</span>
          </button>
          <button
            onClick={() => setShowIgG(!showIgG)}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded border transition-colors cursor-pointer ${
              showIgG ? 'bg-blue-50 border-blue-300 text-blue-800 font-medium' : 'bg-white border-slate-200 text-slate-400'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block"></span>
            <span>IgG (Alta Affinità)</span>
          </button>
          <button
            onClick={handleToggleSecondary}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded border transition-colors cursor-pointer ${
              showSecondary ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-medium' : 'bg-white border-slate-200 text-slate-400'
            }`}
          >
            <RefreshCw className="w-3 h-3 text-emerald-600" />
            <span>{showSecondary ? 'Richiamo / Booster Attivo' : 'Solo Risposta Primaria'}</span>
          </button>
        </div>
      </div>

      {/* Interactive Sliders */}
      <div className="px-5 py-3 border-b border-slate-200 bg-white grid grid-cols-1 sm:grid-cols-2 gap-4 items-center text-xs">
        <div className="flex items-center gap-3">
          <Sliders className="w-4 h-4 text-slate-400 shrink-0" />
          <div className="flex-1">
            <div className="flex justify-between font-medium text-slate-700 mb-1">
              <span>Maturazione dell'Affinità Somatica:</span>
              <span className="font-mono font-bold text-blue-700">{affinityBoost.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="0.8"
              max="2.0"
              step="0.1"
              value={affinityBoost}
              onChange={(e) => handleSliderChange(parseFloat(e.target.value))}
              aria-label="Regola fattore moltiplicativo di maturazione dell'affinità somatica"
              className="w-full accent-blue-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
            />
          </div>
        </div>
        <div className="text-[11px] text-slate-500 leading-normal pl-2 border-l border-slate-200">
          <span className="font-semibold text-slate-700">Principio Chiave:</span> Nel secondo incontro, le cellule B di memoria attivate hanno già subito switch isotipico e ipermutazione somatica: la proliferazione è immediata con affinità fino a centinaia di volte superiore.
        </div>
      </div>

      {/* SVG Canvas Plot */}
      <div className="p-4 bg-white relative">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto cursor-crosshair select-none"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const relX = ((e.clientX - rect.left) / rect.width) * width;
            const dayClamped = Math.max(0, Math.min(totalDays, Math.round(((relX - padding.left) / graphWidth) * totalDays)));
            const pt = points[dayClamped] || points[0];
            setHoveredPoint({
              x: getSvgX(pt.day),
              y: getSvgY(Math.max(pt.igM, pt.igG)),
              day: pt.day,
              igM: pt.igM,
              igG: pt.igG,
              note: pt.note
            });
          }}
          onMouseLeave={() => setHoveredPoint(null)}
        >
          {/* Y Axis Gridlines and Labels */}
          {[0, 30, 60, 90, 120].map((val) => (
            <g key={val}>
              <line
                x1={padding.left}
                y1={getSvgY(val)}
                x2={width - padding.right}
                y2={getSvgY(val)}
                stroke="#e2e8f0"
                strokeDasharray="2 2"
              />
              <text
                x={padding.left - 8}
                y={getSvgY(val) + 4}
                fill="#64748b"
                fontSize="10"
                fontFamily="sans-serif"
                textAnchor="end"
              >
                {val} UA
              </text>
            </g>
          ))}

          {/* X Axis Gridlines and Day Labels */}
          {[0, 7, 14, 21, 28, 35, 42, 49, 56].map((day) => (
            <g key={day}>
              <line
                x1={getSvgX(day)}
                y1={padding.top}
                x2={getSvgX(day)}
                y2={height - padding.bottom}
                stroke={day === 28 ? '#3b82f6' : '#e2e8f0'}
                strokeWidth={day === 28 ? '1.5' : '1'}
                strokeDasharray={day === 28 ? '4 2' : '2 2'}
              />
              <text
                x={getSvgX(day)}
                y={height - padding.bottom + 16}
                fill="#64748b"
                fontSize="10"
                fontFamily="sans-serif"
                textAnchor="middle"
              >
                Giorno {day}
              </text>
            </g>
          ))}

          {/* Area under curve for Primary & Secondary Zones */}
          <rect
            x={getSvgX(0)}
            y={padding.top}
            width={getSvgX(28) - getSvgX(0)}
            height={graphHeight}
            fill="#f8fafc"
            opacity="0.5"
          />
          {showSecondary && (
            <rect
              x={getSvgX(28)}
              y={padding.top}
              width={getSvgX(56) - getSvgX(28)}
              height={graphHeight}
              fill="#eff6ff"
              opacity="0.3"
            />
          )}

          {/* Section Marker Labels */}
          <text x={getSvgX(14)} y={padding.top + 16} fill="#475569" fontSize="11" fontWeight="bold" textAnchor="middle">
            RISPOSTA PRIMARIA
          </text>
          {showSecondary && (
            <text x={getSvgX(42)} y={padding.top + 16} fill="#1d4ed8" fontSize="11" fontWeight="bold" textAnchor="middle">
              RISPOSTA SECONDARIA (Memoria)
            </text>
          )}

          {/* Encounter Arrows */}
          <g>
            <path d={`M ${getSvgX(0)} ${height - padding.bottom} L ${getSvgX(0)} ${getSvgY(25)}`} stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrow)" />
            <circle cx={getSvgX(0)} cy={height - padding.bottom} r="4" fill="#dc2626" />
            <text x={getSvgX(0) + 6} y={height - padding.bottom - 8} fill="#dc2626" fontSize="9" fontWeight="bold">
              1° Antigene
            </text>
          </g>

          {showSecondary && (
            <g>
              <circle cx={getSvgX(28)} cy={height - padding.bottom} r="4" fill="#2563eb" />
              <text x={getSvgX(28) + 6} y={height - padding.bottom - 8} fill="#2563eb" fontSize="9" fontWeight="bold">
                2° Antigene (Richiamo)
              </text>
            </g>
          )}

          {/* IgM Path */}
          {showIgM && (
            <path
              d={igmPath}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          )}

          {/* IgG Path */}
          {showIgG && (
            <path
              d={iggPath}
              fill="none"
              stroke="#2563eb"
              strokeWidth="3"
              strokeLinecap="round"
            />
          )}

          {/* Hover Crosshair and Tooltip */}
          {hoveredPoint && (
            <g>
              <line
                x1={hoveredPoint.x}
                y1={padding.top}
                x2={hoveredPoint.x}
                y2={height - padding.bottom}
                stroke="#0f172a"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
              {showIgM && <circle cx={hoveredPoint.x} cy={getSvgY(hoveredPoint.igM)} r="4" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />}
              {showIgG && <circle cx={hoveredPoint.x} cy={getSvgY(hoveredPoint.igG)} r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />}
            </g>
          )}
        </svg>

        {/* Hover Readout Box */}
        {hoveredPoint && (
          <div
            className="absolute z-20 pointer-events-none p-3 rounded-lg bg-slate-900/95 text-white text-xs shadow-lg backdrop-blur-sm border border-slate-700"
            style={{
              left: `${Math.min(hoveredPoint.x + 15, width - 220)}px`,
              top: `${Math.max(hoveredPoint.y - 40, 20)}px`,
              width: '210px'
            }}
          >
            <div className="font-mono font-semibold text-amber-300">Giorno {hoveredPoint.day}</div>
            <div className="mt-1 flex justify-between">
              <span className="text-amber-400">Titolo IgM:</span>
              <span className="font-mono font-bold">{hoveredPoint.igM} UA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-400">Titolo IgG:</span>
              <span className="font-mono font-bold">{hoveredPoint.igG} UA</span>
            </div>
            {hoveredPoint.note && (
              <p className="mt-1.5 pt-1.5 border-t border-slate-800 text-[11px] text-slate-300 leading-tight">
                {hoveredPoint.note}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Kinetic Features Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-t border-slate-200 bg-slate-50 text-xs">
        <div className="p-4">
          <h4 className="font-bold text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
            Caratteristiche della Risposta Primaria
          </h4>
          <ul className="mt-2 space-y-1.5 text-slate-600">
            <li>• <strong>Latenza (Lag phase):</strong> 4-7 giorni necessari per attivazione e differenziamento dei cloni naïve.</li>
            <li>• <strong>Isotipo dominante:</strong> IgM pentameriche a bassa affinità per singolo legame (ma alta avidità).</li>
            <li>• <strong>Ampiezza del titolo:</strong> Basso o moderato, con rapido declino sierico.</li>
          </ul>
        </div>
        <div className="p-4">
          <h4 className="font-bold text-blue-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            Caratteristiche della Risposta Secondaria
          </h4>
          <ul className="mt-2 space-y-1.5 text-slate-700">
            <li>• <strong>Latenza ridotta:</strong> 1-3 giorni grazie al pool pre-formato di cellule B e T di memoria.</li>
            <li>• <strong>Isotipo dominante:</strong> IgG (o IgA nelle mucose) ad altissima affinità somatica.</li>
            <li>• <strong>Ampiezza e persistenza:</strong> Titolo fino a 10-100 volte superiore, con emivita plasmatica prolungata.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
