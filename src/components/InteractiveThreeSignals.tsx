import React, { useState } from 'react';
import { KeyRound, Radio, Zap, AlertTriangle, ShieldCheck } from 'lucide-react';

export const InteractiveThreeSignals: React.FC = () => {
  const [hasSignal1, setHasSignal1] = useState<boolean>(true);
  const [hasSignal2, setHasSignal2] = useState<boolean>(true);
  const [signal3Type, setSignal3Type] = useState<'Th1' | 'Th2' | 'Th17' | 'Treg'>('Th1');

  // Compute outcome
  let outcomeTitle = '';
  let outcomeDesc = '';
  let outcomeBadge = '';

  if (!hasSignal1) {
    outcomeTitle = 'Nessuna Attivazione (Indifferenza Immunologica)';
    outcomeDesc = 'In assenza del riconoscimento del complesso peptide-MHC da parte del TCR, il linfocita T naïve non riceve il segnale di docking e continua a ricircolare nei tessuti linfoidi secondari.';
    outcomeBadge = 'bg-slate-200 text-slate-700';
  } else if (!hasSignal2) {
    outcomeTitle = 'Anergia Clonale Irreversibile (Tolleranza Periferica)';
    outcomeDesc = 'Il legame del solo TCR senza costimolazione CD28/B7 induce uno stato refrattario di tolleranza o apoptosi. Il linfocita non produce IL-2 e non si attiverà più anche in presenza di costimolazione successiva.';
    outcomeBadge = 'bg-amber-100 text-amber-900 border border-amber-300';
  } else {
    outcomeTitle = `Attivazione & Polarizzazione verso il profilo ${signal3Type}`;
    if (signal3Type === 'Th1') {
      outcomeDesc = 'Indotto da IL-12 e IFN-γ rilasciati da APC; attiva il fattore di trascrizione T-bet e indirizza verso la secrezione di IFN-γ per stimolare i macrofagi microbicidi contro patogeni intracellulari.';
    } else if (signal3Type === 'Th2') {
      outcomeDesc = 'Indotto da IL-4; attiva GATA-3 e induce secrezione di IL-4, IL-5 e IL-13 per la difesa contro elminti e attivazione di eosinofili e basofili.';
    } else if (signal3Type === 'Th17') {
      outcomeDesc = 'Indotto da IL-6 e TGF-β/IL-23; attiva RORγt e induce secrezione di IL-17 e IL-22 per reclutare neutrofili a livello mucosale contro funghi e batteri extracellulari.';
    } else {
      outcomeDesc = 'Indotto da TGF-β e IL-2 in assenza di citochine pro-infiammatorie; attiva FoxP3 per generare cellule T regolatorie che sopprimono la risposta immunitaria.';
    }
    outcomeBadge = 'bg-emerald-100 text-emerald-900 border border-emerald-300';
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden my-8 shadow-xs">
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold">
            Modello Sinaptico Fondamentale
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-0.5">
            I Tre Segnali di Attivazione e Differenziamento del Linfocita T
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Interazione cooperativa tra Cellula Presentante l'Antigene (APC) e Linfocita T Naïve.
          </p>
        </div>

        {/* Signal Toggles */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setHasSignal1(!hasSignal1)}
            className={`px-3 py-1.5 text-xs rounded-md font-medium border transition-colors ${
              hasSignal1 ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-600 border-slate-300'
            }`}
          >
            Segnale 1: {hasSignal1 ? 'ON (MHC/TCR)' : 'OFF'}
          </button>
          <button
            onClick={() => setHasSignal2(!hasSignal2)}
            className={`px-3 py-1.5 text-xs rounded-md font-medium border transition-colors ${
              hasSignal2 ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-slate-600 border-slate-300'
            }`}
          >
            Segnale 2: {hasSignal2 ? 'ON (CD28/B7)' : 'OFF'}
          </button>
        </div>
      </div>

      {/* SVG Interactive Synapse Canvas */}
      <div className="p-6 bg-slate-900 text-white select-none">
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-4">
          <span>APC (Dendritica / Macrofago)</span>
          <span>Sinapsi Immunologica</span>
          <span>Linfocita T CD4+ Naïve</span>
        </div>

        <div className="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 640 220" className="w-full h-auto min-w-[560px]">
            {/* Left Membrane: APC */}
            <path d="M 120 20 Q 150 110 120 200" stroke="#f59e0b" strokeWidth="8" fill="none" strokeLinecap="round" />
            <text x="50" y="115" fill="#fcd34d" fontSize="12" fontWeight="bold">APC</text>

            {/* Right Membrane: T Cell */}
            <path d="M 520 20 Q 490 110 520 200" stroke="#3b82f6" strokeWidth="8" fill="none" strokeLinecap="round" />
            <text x="540" y="115" fill="#93c5fd" fontSize="12" fontWeight="bold">Linfocita T</text>

            {/* SIGNAL 1: MHC - TCR */}
            <g opacity={hasSignal1 ? '1' : '0.3'}>
              {/* MHC on APC */}
              <rect x="135" y="45" width="40" height="16" rx="3" fill="#f59e0b" />
              <rect x="175" y="48" width="16" height="10" rx="2" fill="#ef4444" />
              <text x="140" y="38" fill="#fde68a" fontSize="8" fontFamily="monospace">MHC + Peptide</text>

              {/* TCR on T cell */}
              <rect x="440" y="45" width="45" height="16" rx="3" fill="#3b82f6" />
              <text x="450" y="38" fill="#bfdbfe" fontSize="8" fontFamily="monospace">TCR / CD3</text>

              {/* Engagement line */}
              <line x1="191" y1="53" x2="440" y2="53" stroke={hasSignal1 ? '#38bdf8' : '#64748b'} strokeWidth="3" strokeDasharray={hasSignal1 ? '0' : '4 2'} />
              <text x="315" y="42" fill={hasSignal1 ? '#38bdf8' : '#94a3b8'} fontSize="9" fontWeight="bold" textAnchor="middle">
                Segnale 1: Riconoscimento Antigenico
              </text>
            </g>

            {/* SIGNAL 2: Costimulation B7 - CD28 */}
            <g opacity={hasSignal2 ? '1' : '0.3'}>
              {/* B7 (CD80/CD86) on APC */}
              <rect x="135" y="105" width="45" height="16" rx="3" fill="#10b981" />
              <text x="140" y="98" fill="#a7f3d0" fontSize="8" fontFamily="monospace">B7-1 / B7-2</text>

              {/* CD28 on T cell */}
              <rect x="440" y="105" width="45" height="16" rx="3" fill="#10b981" />
              <text x="450" y="98" fill="#a7f3d0" fontSize="8" fontFamily="monospace">CD28</text>

              {/* Engagement line */}
              <line x1="180" y1="113" x2="440" y2="113" stroke={hasSignal2 ? '#34d399' : '#64748b'} strokeWidth="3" strokeDasharray={hasSignal2 ? '0' : '4 2'} />
              <text x="315" y="102" fill={hasSignal2 ? '#34d399' : '#94a3b8'} fontSize="9" fontWeight="bold" textAnchor="middle">
                Segnale 2: Costimolazione (CD28)
              </text>
            </g>

            {/* SIGNAL 3: Cytokines from APC to T cell */}
            <g opacity={hasSignal1 && hasSignal2 ? '1' : '0.3'}>
              <line x1="150" y1="170" x2="450" y2="170" stroke="#f43f5e" strokeWidth="2" strokeDasharray="5 3" />
              <circle cx="230" cy="170" r="5" fill="#f43f5e" />
              <circle cx="310" cy="170" r="5" fill="#f43f5e" />
              <circle cx="390" cy="170" r="5" fill="#f43f5e" />
              <text x="315" y="160" fill="#fda4af" fontSize="9" fontWeight="bold" textAnchor="middle">
                Segnale 3: Citochine Istruttive Polarizzanti
              </text>
              <text x="315" y="188" fill="#fca5a5" fontSize="8" textAnchor="middle">
                {signal3Type === 'Th1' && 'IL-12, IFN-γ → T-bet'}
                {signal3Type === 'Th2' && 'IL-4 → GATA-3'}
                {signal3Type === 'Th17' && 'IL-6, TGF-β → RORγt'}
                {signal3Type === 'Treg' && 'TGF-β, IL-2 → FoxP3'}
              </text>
            </g>
          </svg>
        </div>

        {/* Signal 3 Selector */}
        {hasSignal1 && hasSignal2 && (
          <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-slate-400">Seleziona la Citochina Istruttiva (Segnale 3):</span>
            <div className="flex gap-1.5">
              {(['Th1', 'Th2', 'Th17', 'Treg'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setSignal3Type(t)}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                    signal3Type === t ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Outcome Banner */}
      <div className="p-5 bg-slate-50 border-t border-slate-200">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
            {hasSignal1 && hasSignal2 ? <ShieldCheck className="w-5 h-5 text-emerald-600" /> : <AlertTriangle className="w-5 h-5 text-amber-600" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-[11px] font-mono px-2 py-0.5 rounded font-bold ${outcomeBadge}`}>
                {outcomeTitle}
              </span>
            </div>
            <p className="text-xs text-slate-700 mt-1.5 leading-relaxed font-serif-body">
              {outcomeDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
