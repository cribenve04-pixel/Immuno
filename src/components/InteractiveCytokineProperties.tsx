import React, { useState } from 'react';
import { Network, Copy, Plus, X, Sparkles, Check } from 'lucide-react';

export const InteractiveCytokineProperties: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pleiotropia' | 'ridondanza' | 'sinergia' | 'antagonismo'>('pleiotropia');

  const properties = {
    pleiotropia: {
      name: "Pleiotropia",
      definition: "La capacità di una singola citochina di agire su molteplici tipi cellulari distinti, inducendo effetti biologici diversi a seconda del contesto e dei recettori espressi.",
      example: "Interleuchina-4 (IL-4)",
      diagramTitle: "IL-4 attiva tre distinte popolazioni bersaglio:",
      targets: [
        { cell: "Linfocita B", effect: "Attivazione, proliferazione e switch isotipico verso IgE" },
        { cell: "Mastocita Tessutale", effect: "Maturazione e amplificazione della proliferazione" },
        { cell: "Timocita / Precursore T", effect: "Induzione della differenziazione verso il fenotipo Th2" }
      ],
      significance: "Consente a un unico mediatore flogistico di coordinare simultaneamente l'intera risposta tissutale antielmintica o atopica."
    },
    ridondanza: {
      name: "Ridondanza",
      definition: "Diverse citochine strutturalmente distinte condividono e possono svolgere la medesima funzione biologica sulla stessa cellula bersaglio.",
      example: "IL-2, IL-4 e IL-5 sui Linfociti B",
      diagramTitle: "Tre diverse citochine convergono sullo stesso effetto:",
      targets: [
        { cell: "IL-2", effect: "Stimola la proliferazione clonale del linfocita B" },
        { cell: "IL-4", effect: "Stimola la proliferazione clonale del linfocita B" },
        { cell: "IL-5", effect: "Stimola la proliferazione clonale del linfocita B" }
      ],
      significance: "Garantisce robustezza evolutiva: il deficit genetico o il blocco di una singola interleuchina non abolisce totalmente la risposta proliferativa."
    },
    sinergia: {
      name: "Sinergia",
      definition: "L'effetto combinato di due o più citochine somministrate insieme è marcatamente superiore alla semplice somma aritmetica dei loro effetti isolati.",
      example: "IL-4 + IL-5",
      diagramTitle: "Cooperazione molecolare nel centro germinativo:",
      targets: [
        { cell: "IL-4 da sola", effect: "Induce una debole trascrizione germline della regione Cε" },
        { cell: "IL-5 da sola", effect: "Favorisce la maturazione plasmacellulare tardiva" },
        { cell: "IL-4 + IL-5 insieme", effect: "Switch isotipico massivo a IgE con degranulazione di mastociti ed eosinofili" }
      ],
      significance: "Permette un innesco esponenziale e tempestivo della risposta difensiva quando sono presenti multipli stimoli flogistici concordanti."
    },
    antagonismo: {
      name: "Antagonismo",
      definition: "L'azione biologica di una citochina inibisce o neutralizza direttamente l'effetto indotto da un'altra citochina.",
      example: "IFN-γ blocca l'azione di IL-4",
      diagramTitle: "Regolazione reciproca tra immunità Th1 e Th2:",
      targets: [
        { cell: "IL-4 (Th2)", effect: "Promuove lo switch isotipico verso la produzione di IgE" },
        { cell: "IFN-γ (Th1)", effect: "Blocca selettivamente lo switch a IgE, deviando verso IgG opsonizzanti (IgG1/IgG3)" }
      ],
      significance: "Previene risposte miste o inappropriate e consente la polarizzazione netta dell'immunità verso il profilo effettore più idoneo al patogeno."
    }
  };

  const current = properties[activeTab];

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden my-8 shadow-xs">
      {/* Header */}
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold">
            Proprietà Funzionali delle Citochine
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-0.5">
            Pleiotropia, Ridondanza, Sinergia e Antagonismo
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            I quattro pilastri dell'interazione citochinica illustrati nella Lezione 1 della Prof.ssa Soriani.
          </p>
        </div>

        {/* Segmented Selector Buttons */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/80 rounded-lg text-xs font-semibold">
          {(['pleiotropia', 'ridondanza', 'sinergia', 'antagonismo'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-md capitalize transition-colors ${
                activeTab === tab
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="p-6">
        <div className="p-5 rounded-xl border border-blue-100 bg-blue-50/40">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blue-200/50 pb-3 mb-4">
            <h4 className="text-base font-bold text-blue-950 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              {current.name} (Esempio d'Elezione: {current.example})
            </h4>
            <span className="text-xs font-mono text-blue-800 bg-white px-2.5 py-1 rounded border border-blue-200">
              Prof.ssa Soriani · Lezione 1
            </span>
          </div>

          <p className="text-sm font-serif-body text-slate-800 leading-relaxed">
            {current.definition}
          </p>

          {/* Cards for Targets / Interactions */}
          <div className="mt-5">
            <span className="text-xs font-mono uppercase text-slate-500 font-semibold block mb-2">
              {current.diagramTitle}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {current.targets.map((t, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                  <div className="text-xs font-mono font-bold text-blue-700">{t.cell}</div>
                  <div className="text-xs text-slate-700 mt-1 leading-relaxed">{t.effect}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical & Biological Significance */}
          <div className="mt-4 pt-3 border-t border-blue-200/50 text-xs text-blue-900">
            <strong>Rilevanza Fisiopatologica:</strong> {current.significance}
          </div>
        </div>
      </div>
    </div>
  );
};
