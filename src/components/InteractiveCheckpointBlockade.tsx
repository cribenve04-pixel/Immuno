import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, Zap, Activity, Volume2 } from 'lucide-react';
import { IMAGES } from '../data/imageAssets';
import { useTtsInteractive } from '../hooks/useTtsInteractive';

export const InteractiveCheckpointBlockade: React.FC = () => {
  const [therapyActive, setTherapyActive] = useState<boolean>(false);
  const [selectedTarget, setSelectedTarget] = useState<'anti-pd1' | 'anti-pdl1'>('anti-pd1');
  const { explainWhatIf, explainState } = useTtsInteractive();

  const handleToggleTherapy = (active: boolean) => {
    setTherapyActive(active);
  };

  const spokenOverview = "Simulatore interattivo dell'asse PD-1 e PD-L1. In condizioni di evasione tumorale, il tumore esprime PD-L1 che si lega al recettore inibitorio PD-1 sul linfocita T citotossico, reclutando la fosfatasi SHP-2 che spegne il segnale di CD28 e induce esaurimento clonale. Con l'immunoterapia mediante anticorpi monoclonali, il blocco dell'inibitore ripristina la secrezione di Granzima B e perforina, consentendo la distruzione attiva della cellula tumorale.";

  return (
    <div
      data-speech-text={spokenOverview}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden my-8 shadow-xs"
    >
      {/* Top Banner and Mode Switch */}
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-rose-700 font-semibold">Immunologia Oncologica e Terapie Mirate</span>
          <h3 className="text-lg font-bold text-slate-900 mt-0.5">Asse PD-1 / PD-L1: Evasione Tumorale vs Sblocco Terapeutico</h3>
          <p className="text-xs text-slate-500 mt-1">
            Modello molecolare dell'esaurimento clonale T-cellulare e ripristino dell'attività citotossica mediato da anticorpi monoclonali (*Immune Checkpoint Blockade*).
          </p>
        </div>

        {/* Therapy Toggle & Audio Explain */}
        <div className="flex items-center gap-2 print:hidden">
          <button
            onClick={() => handleToggleTherapy(false)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              !therapyActive
                ? 'bg-rose-100 text-rose-800 border border-rose-300'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
              1. Evasione Tumorale (Inattivato)
            </span>
          </button>
          <button
            onClick={() => handleToggleTherapy(true)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              therapyActive
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              2. Terapia mAb (Attivato)
            </span>
          </button>
          <button
            onClick={() => explainState(
              therapyActive ? "Stato Attivato con Terapia Checkpoint" : "Stato Inattivato di Evasione Tumorale",
              therapyActive 
                ? "Gli anticorpi monoclonali bloccano l'asse inibitorio: la fosfatasi SHP-2 è inattiva, la cascata ZAP-70 e PI3-chinasi è libera di trasdurre e la perforina distrugge il tumore."
                : "PD-L1 si lega al recettore PD-1: i motivi ITIM e ITSM reclutano SHP-2, provocando l'anergia o l'esaurimento clonale del linfocita T."
            )}
            title="Spiega questo stato con sintesi vocale (What-If)"
            className="p-1.5 rounded-md border border-slate-200 bg-white hover:bg-blue-50 text-blue-700 transition-colors flex items-center gap-1 text-xs font-medium cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden sm:inline">Ascolta Stato</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage with Side-by-side or Layered Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200">
        {/* Left Column: Interactive Visual Canvas (7 cols) */}
        <div className="lg:col-span-7 p-6 bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden print:hidden">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
            <span className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${therapyActive ? 'bg-emerald-400 animate-ping' : 'bg-rose-500'}`}></span>
              Stato Cellulare: {therapyActive ? 'CITOTOSSICITÀ ATTIVATA (Lisi Tumorale)' : 'ESAURIMENTO T (T-Cell Exhaustion)'}
            </span>
            <span>Premio Nobel 2018 (Allison & Honjo)</span>
          </div>

          {/* SVG Molecular Synapse Rendering */}
          <div className="w-full py-4 flex items-center justify-center">
            <svg viewBox="0 0 540 260" className="w-full h-auto max-w-[500px]">
              <defs>
                <linearGradient id="tumorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#064e3b" />
                </linearGradient>
                <linearGradient id="tcellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1e3a8a" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
              </defs>

              {/* Tumor Cell (Left) */}
              <g id="tumor-cell">
                <circle cx="80" cy="130" r="85" fill="url(#tumorGrad)" stroke="#10b981" strokeWidth="2" opacity="0.9" />
                <text x="80" y="125" fill="#ecfdf5" fontSize="12" fontWeight="bold" textAnchor="middle">Cellula Tumorale</text>
                <text x="80" y="142" fill="#a7f3d0" fontSize="9" textAnchor="middle">(Neoantigeni / dMMR)</text>

                {/* MHC-I Presenting Tumor Neoantigen */}
                <rect x="150" y="90" width="28" height="14" rx="3" fill="#eab308" />
                <rect x="178" y="94" width="14" height="6" rx="2" fill="#ef4444" />
                <text x="145" y="85" fill="#fde047" fontSize="8">MHC-I + Epitopo</text>

                {/* PD-L1 Ligand Expression */}
                <rect x="150" y="150" width="34" height="12" rx="3" fill="#f97316" />
                <polygon points="184,150 196,156 184,162" fill="#f97316" />
                <text x="145" y="180" fill="#fdba74" fontSize="8" fontWeight="bold">PD-L1</text>
              </g>

              {/* Cytotoxic T Lymphocyte (Right) */}
              <g id="t-cell">
                <circle cx="450" cy="130" r="85" fill="url(#tcellGrad)" stroke="#60a5fa" strokeWidth="2" />
                <text x="450" y="125" fill="#eff6ff" fontSize="12" fontWeight="bold" textAnchor="middle">Linfocita T (CD8+)</text>
                <text x="450" y="142" fill="#bfdbfe" fontSize="9" textAnchor="middle">CTL Specifico</text>

                {/* TCR Receptor Binding MHC-I */}
                <rect x="350" y="90" width="30" height="14" rx="3" fill="#38bdf8" />
                <text x="355" y="85" fill="#7dd3fc" fontSize="8">TCR</text>

                {/* PD-1 Inhibitory Receptor */}
                <rect x="345" y="150" width="32" height="12" rx="3" fill="#ec4899" />
                <polygon points="345,150 333,156 345,162" fill="#ec4899" />
                <text x="350" y="180" fill="#f472b6" fontSize="8" fontWeight="bold">PD-1</text>
              </g>

              {/* Synapse Interaction Center */}
              {/* 1. TCR-MHC Engagement line */}
              <line x1="192" y1="97" x2="350" y2="97" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" />

              {!therapyActive ? (
                /* STATE 1: PD-1 meets PD-L1 => Inhibitory signal deactivates CTL */
                <g id="exhaustion-state">
                  <path d="M 196 156 L 333 156" stroke="#f43f5e" strokeWidth="3" />
                  <circle cx="265" cy="156" r="10" fill="#881337" stroke="#f43f5e" />
                  <text x="265" y="160" fill="#ffe4e6" fontSize="10" textAnchor="middle" fontWeight="bold">✖</text>

                  {/* Inhibitory phosphatase wave into T cell */}
                  <path d="M 377 156 Q 410 156 425 170" fill="none" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4 2" />
                  <text x="410" y="195" fill="#fca5a5" fontSize="8" textAnchor="middle">SHP-1/2: Segnale Inibitorio</text>
                  <text x="265" y="138" fill="#fda4af" fontSize="9" textAnchor="middle" fontWeight="bold">
                    PD-1 legato a PD-L1
                  </text>
                  <text x="265" y="225" fill="#f87171" fontSize="9" textAnchor="middle">
                    Linfocita T in esaurimento: zero perforina rilasciata
                  </text>
                </g>
              ) : (
                /* STATE 2: Monoclonal Antibody blocks PD-1/PD-L1 => Perforin/Granzyme released */
                <g id="therapy-state">
                  {/* Monoclonal Antibody Y-shape */}
                  <g transform="translate(250, 135)" filter="url(#glow)">
                    <path
                      d="M 15 35 L 15 20 L 5 8 M 15 20 L 25 8"
                      stroke="#fbbf24"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <circle cx="5" cy="8" r="4" fill="#ef4444" />
                    <circle cx="25" cy="8" r="4" fill="#ef4444" />
                    <text x="15" y="-4" fill="#fef08a" fontSize="9" fontWeight="bold" textAnchor="middle">
                      {selectedTarget === 'anti-pd1' ? 'mAb Anti-PD-1' : 'mAb Anti-PD-L1'}
                    </text>
                  </g>

                  {/* Red cross indicating block */}
                  <line x1="225" y1="145" x2="245" y2="167" stroke="#ef4444" strokeWidth="3" />
                  <line x1="245" y1="145" x2="225" y2="167" stroke="#ef4444" strokeWidth="3" />

                  {/* Cytotoxic Granzyme/Perforin granules shooting to tumor */}
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <circle
                      key={i}
                      cx={330 - i * 26}
                      cy={85 + ((i % 3) * 14)}
                      r={3.5 + (i % 2)}
                      fill="#ef4444"
                      filter="url(#glow)"
                    />
                  ))}

                  <text x="240" y="65" fill="#f87171" fontSize="9" fontWeight="bold" textAnchor="middle">
                    Rilascio Perforina e Granzimi!
                  </text>
                  <text x="265" y="225" fill="#34d399" fontSize="9" textAnchor="middle" fontWeight="bold">
                    FRENO RIMOSSO: Ripristino Lisi Cellulare Antitumorale
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Sub-selector for mAb Target */}
          {therapyActive && (
            <div className="mt-2 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Bersaglio Farmacologico Selezionato:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedTarget('anti-pd1')}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                    selectedTarget === 'anti-pd1' ? 'bg-amber-400 text-slate-900 font-bold' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  Anti-PD-1 (es. Pembrolizumab, Nivolumab)
                </button>
                <button
                  onClick={() => setSelectedTarget('anti-pdl1')}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                    selectedTarget === 'anti-pdl1' ? 'bg-amber-400 text-slate-900 font-bold' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  Anti-PD-L1 (es. Atezolizumab, Durvalumab)
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: High-Resolution Scientific Micrograph & Clinical Pearl (5 cols) */}
        <div className="lg:col-span-5 p-5 bg-slate-50 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
              Iconografia e Correlazione Molecolare
            </span>
            <div className="mt-2 rounded-lg overflow-hidden border border-slate-200 bg-white">
              <img
                src={IMAGES.checkpointImmunotherapy}
                onError={(e) => { e.currentTarget.src = '/images/checkpoint_immunotherapy_1792319783630.jpg'; }}
                alt="Diagramma molecolare sinapsi immunologica e checkpoint PD-1 / PD-L1"
                className="w-full h-44 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-3 text-[11px] text-slate-600 bg-white leading-relaxed">
                <strong>Figura 1.4:</strong> Struttura dell'anticorpo monoclonale che si interpone stericamente tra PD-1 (linfocita CD8+) e PD-L1 (cellula neoplastica), impedendo il blocco dell'uccisione cellulare.
              </div>
            </div>
          </div>

          <div className="mt-4 p-3.5 rounded-lg bg-blue-50 border border-blue-200 text-xs">
            <h4 className="font-bold text-blue-900 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              Evidenza Clinica: Tumori dMMR / MSI-High
            </h4>
            <p className="mt-1 text-blue-950 leading-relaxed">
              Nei carcinomi del colon-retto con deficit di riparazione dei mismatch (dMMR), l'accumulo di migliaia di mutazioni somatiche genera un elevato numero di <strong>neoantigeni immunogenici</strong>. Il blocco con anti-PD-1 produce tassi di risposta clinica obiettiva e regressioni complete durature senza precedenti.
            </p>
          </div>
        </div>
      </div>

      {/* Explanatory Footer Strip */}
      <div className="p-4 bg-white text-xs text-slate-600 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-blue-600" />
          <span>
            <strong>Meccanismo SHP-1/SHP-2:</strong> Quando PD-1 lega PD-L1, recluta fosfatasi che defosforilano ZAP-70 e PI3K, spegnendo la proliferazione T e la produzione di citochine (IFN-γ, IL-2).
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-400">ICB Target Therapy · AI Studio Medical Textbook</span>
      </div>

      {/* Print View: Full molecular comparison for PDF export */}
      <div className="hidden print:block p-4 border-t border-slate-300 bg-slate-50/50 space-y-2">
        <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wide">
          Confronto Fisiopatologico Asse PD-1 / PD-L1:
        </h4>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-lg border border-rose-300 bg-white">
            <div className="font-bold text-rose-900 mb-1">1. Evasione Tumorale (Inassoluta Inattivazione T)</div>
            <p className="text-slate-700 leading-relaxed">
              Il tumore esprime PD-L1 sotto stimolo di IFN-γ. Il legame a PD-1 sul linfocita T recluta la fosfatasi SHP-2 che defosforila ZAP-70 e la catena CD28, bloccando la secrezione di IL-2, perforine e granzimi, determinando anergia ed esaurimento clonale.
            </p>
          </div>
          <div className="p-3 rounded-lg border border-emerald-300 bg-white">
            <div className="font-bold text-emerald-900 mb-1">2. Blocco Terapeutico ICB (Anticorpi Monoclonali)</div>
            <p className="text-slate-700 leading-relaxed">
              L'impiego di mAb anti-PD-1 (Pembrolizumab, Nivolumab) o anti-PD-L1 (Atezolizumab, Durvalumab) ostacola stericamente l'interazione ligando-recettore. La via di CD28 rimane accesa, riattivando la citotossicità CTL e la distruzione immunologica del tumore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
