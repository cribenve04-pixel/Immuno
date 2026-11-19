import React, { useState } from 'react';
import { UserCheck, Shield, HeartHandshake, Skull, AlertCircle } from 'lucide-react';

export const InteractiveOntogenyChart: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<'neonato' | 'adulto' | 'gravidanza' | 'senescenza'>('neonato');

  const phaseData = {
    neonato: {
      title: "1. Periodo Neonatale e Prima Infanzia",
      features: "Sistema immunitario immaturo con scarsa produzione autonoma di anticorpi e ridotta attività citotossica.",
      maternalProtection: "Protezione passiva cruciale fornita dagli anticorpi materni: IgG trasmesse trans-placentarmente tramite recettore FcRn durante la gestazione, e IgA secretorie fornite con il colostro e l'allattamento materno nei primi mesi di vita.",
      vulnerability: "Elevata suscettibilità a infezioni respiratorie virali (influenza, VRS) dovuta all'assenza di memoria pre-esistente.",
      tregRole: "Bassi livelli basali, progressiva educazione nel timo e colonizzazione da parte del microbiota intestinale."
    },
    adulto: {
      title: "2. Età Adulta (Picco di Competenza)",
      features: "Piena funzionalità dei compartimenti innato e adattativo, massima diversità del repertorio clonale TCR e BCR.",
      maternalProtection: "Scomparsa completa degli anticorpi materni; protezione autonoma mediata da cellule B e T di memoria a lunga sopravvivenza.",
      vulnerability: "Minima mortalità infettiva; picco di espansione bilanciata delle risposte Th1, Th2 e Th17.",
      tregRole: "Omeostasi fisiologica ottimale: i Treg (FoxP3+) sopprimono l'attivazione aberrante e mantengono l'autotolleranza periferica."
    },
    gravidanza: {
      title: "3. Gravidanza (Adattamento Tollerogenico)",
      features: "Modulazione sistemica e locale per accogliere il feto come semi-allotrapianto (esprimente antigeni paterni non-self).",
      maternalProtection: "Trasferimento attivo di IgG materne al feto tramite sinciziotrofoblasto; modulazione della risposta citotossica materna all'interfaccia deciduale.",
      vulnerability: "Parziale suscettibilità aumentata ad alcuni patogeni intracellulari dovuta allo shift fisiologico Th2/Treg-dominante.",
      tregRole: "Aumento marcato dei linfociti T regolatori (Treg deciduali e circolanti): indispensabili per prevenire il rigetto immunologico dell'embrione e aborti spontanei."
    },
    senescenza: {
      title: "4. Fase Senile (>60-65 anni: Immunosenescenza)",
      features: "Involuzione atrofica del timo con drastico calo di linfociti T naïve vergini, oligoclonalità e accumulo di cloni senescenti esausti.",
      maternalProtection: "Assente; decadimento dei titoli anticorpali a lungo termine e scarsa risposta a nuove vaccinazioni.",
      vulnerability: "Secondo picco elevato di mortalità da patogeni respiratori (SARS-CoV-2, influenza) dovuto a 'inflammaging' (flogosi cronica sistemica sterile di basso grado) e difetto citotossico.",
      tregRole: "Spesso disfunzionali o numericamente sbilanciati; nell'oncologia senile, l'infiltrazione tumorale di Treg correla inversamente con la sopravvivenza (indice prognostico sfavorevole)."
    }
  };

  const current = phaseData[selectedPhase];

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden my-8 shadow-xs">
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-700 font-semibold">
            Dinamica Temporale dell'Ospite
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-0.5">
            Evoluzione dell'Immunità nel Corso della Vita, Gravidanza e Tumori
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Dall'immaturità neonatale e protezione materna, alla tolleranza gestazionale, fino all'immunosenescenza senile.
          </p>
        </div>

        {/* Phase Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/80 rounded-lg">
          {(['neonato', 'adulto', 'gravidanza', 'senescenza'] as const).map((ph) => (
            <button
              key={ph}
              onClick={() => setSelectedPhase(ph)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all capitalize ${
                selectedPhase === ph
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {ph}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Mortality & Immune Curve */}
      <div className="p-6 bg-slate-950 text-white select-none">
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
          <span>Curva U-Shaped di Mortalità Respiratoria Pandemica (SARS-CoV-2 / Influenza)</span>
          <span>Immunità per Fasce di Età</span>
        </div>

        <div className="w-full py-2">
          <svg viewBox="0 0 600 180" className="w-full h-auto">
            {/* Grid */}
            <line x1="50" y1="140" x2="570" y2="140" stroke="#334155" strokeWidth="1.5" />
            <line x1="50" y1="20" x2="50" y2="140" stroke="#334155" strokeWidth="1.5" />
            <text x="50" y="155" fill="#94a3b8" fontSize="8" textAnchor="middle">Nascita</text>
            <text x="180" y="155" fill="#94a3b8" fontSize="8" textAnchor="middle">Infanzia</text>
            <text x="310" y="155" fill="#94a3b8" fontSize="8" textAnchor="middle">Età Adulta (20-50)</text>
            <text x="440" y="155" fill="#94a3b8" fontSize="8" textAnchor="middle">60 Anni</text>
            <text x="550" y="155" fill="#94a3b8" fontSize="8" textAnchor="middle">Senescenza (80+)</text>
            <text x="35" y="30" fill="#f87171" fontSize="8" textAnchor="end">Mortalità</text>

            {/* U-Shape Curve of Mortality */}
            <path
              d="M 60 50 Q 150 120 310 125 Q 460 110 560 30"
              fill="none"
              stroke="#ef4444"
              strokeWidth="3"
            />
            <text x="85" y="42" fill="#fca5a5" fontSize="8" fontWeight="bold">1° Picco (Neonati)</text>
            <text x="310" y="112" fill="#4ade80" fontSize="8" textAnchor="middle">Minima Mortalità</text>
            <text x="525" y="24" fill="#fca5a5" fontSize="8" fontWeight="bold">2° Picco (Senescenza)</text>

            {/* Competence Fill Gradient below */}
            <path
              d="M 60 125 Q 160 50 310 40 Q 460 55 560 125 L 560 140 L 60 140 Z"
              fill="#3b82f6"
              opacity="0.15"
            />
            <text x="310" y="60" fill="#60a5fa" fontSize="9" fontWeight="bold" textAnchor="middle">
              Competenza Immunitaria Autonoma (Th1/Th2)
            </text>

            {/* Selected Phase Cursor Marker */}
            {selectedPhase === 'neonato' && (
              <g>
                <circle cx="90" cy="65" r="6" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
                <line x1="90" y1="20" x2="90" y2="140" stroke="#38bdf8" strokeDasharray="2 2" />
              </g>
            )}
            {selectedPhase === 'adulto' && (
              <g>
                <circle cx="310" cy="125" r="6" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                <line x1="310" y1="20" x2="310" y2="140" stroke="#10b981" strokeDasharray="2 2" />
              </g>
            )}
            {selectedPhase === 'gravidanza' && (
              <g>
                <circle cx="360" cy="120" r="6" fill="#ec4899" stroke="#ffffff" strokeWidth="2" />
                <line x1="360" y1="20" x2="360" y2="140" stroke="#ec4899" strokeDasharray="2 2" />
              </g>
            )}
            {selectedPhase === 'senescenza' && (
              <g>
                <circle cx="530" cy="45" r="6" fill="#f97316" stroke="#ffffff" strokeWidth="2" />
                <line x1="530" y1="20" x2="530" y2="140" stroke="#f97316" strokeDasharray="2 2" />
              </g>
            )}
          </svg>
        </div>
      </div>

      {/* Narrative Card */}
      <div className="p-6">
        <h4 className="text-base font-bold text-slate-900">{current.title}</h4>
        <p className="text-xs text-slate-700 mt-1 leading-relaxed font-serif-body">
          {current.features}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-xs">
          <div className="p-3 bg-blue-50/60 rounded-lg border border-blue-200">
            <span className="font-bold text-blue-900 flex items-center gap-1.5 mb-1">
              <Shield className="w-3.5 h-3.5 text-blue-600" />
              Protezione Anticorpale
            </span>
            <p className="text-slate-700 text-[11px] leading-relaxed">
              {current.maternalProtection}
            </p>
          </div>

          <div className="p-3 bg-rose-50/60 rounded-lg border border-rose-200">
            <span className="font-bold text-rose-900 flex items-center gap-1.5 mb-1">
              <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
              Vulnerabilità Infettiva
            </span>
            <p className="text-slate-700 text-[11px] leading-relaxed">
              {current.vulnerability}
            </p>
          </div>

          <div className="p-3 bg-purple-50/60 rounded-lg border border-purple-200">
            <span className="font-bold text-purple-900 flex items-center gap-1.5 mb-1">
              <HeartHandshake className="w-3.5 h-3.5 text-purple-600" />
              Dinamica dei Linfociti Treg
            </span>
            <p className="text-slate-700 text-[11px] leading-relaxed">
              {current.tregRole}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
