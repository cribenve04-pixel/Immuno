import React, { useState } from 'react';
import { Compass, ShieldAlert, GitFork, ArrowDownRight, Layers } from 'lucide-react';

export const InteractiveChemokineMatrix: React.FC = () => {
  const [activeClass, setActiveClass] = useState<'CXC' | 'CC' | 'C' | 'CX3C'>('CXC');

  const classes = {
    CXC: {
      greek: "Classe α",
      formula: "C - X - C",
      structure: "Due cisteine amino-terminali separate da un singolo aminoacido interposto (X).",
      prototypes: ["CXCL8 (Interleuchina-8 / IL-8)", "CXCL12 (SDF-1α)", "CXCL10 (IP-10)"],
      targetCells: "Neutrofili (chemotassi primaria nei focolai batterici acuti), linfociti T, cellule endoteliali.",
      receptors: "CXCR1, CXCR2, CXCR4 (utilizzato da HIV-1 per l'ingresso T-tropico).",
      clinicalNotes: "Ruolo cruciale nell'angiogenesi tumorale e nel reclutamento massivo di neutrofili durante infezioni piogeniche acute."
    },
    CC: {
      greek: "Classe β",
      formula: "C - C",
      structure: "Due cisteine amino-terminali contigue, non separate da alcun aminoacido.",
      prototypes: ["CCL2 (MCP-1 / Monocyte Chemoattractant Protein-1)", "CCL3 (MIP-1α)", "CCL5 (RANTES)"],
      targetCells: "Monociti, macrofagi, cellule dendritiche, linfociti T e cellule NK (generalmente non attiva neutrofili).",
      receptors: "CCR1, CCR2, CCR5 (corecettore obbligato per ceppi virali M-tropici di HIV-1).",
      clinicalNotes: "I soggetti omozigoti per la delezione CCR5-Δ32 mostrano naturale resistenza all'infezione da ceppi R5 di HIV."
    },
    C: {
      greek: "Classe γ",
      formula: "C",
      structure: "Possiedono una sola cisteina conservata nel dominio N-terminale (hanno perso la prima e la terza cisteina).",
      prototypes: ["XCL1 (Linfotattina-α)", "XCL2 (Linfotattina-β)"],
      targetCells: "Linfociti T e cellule NK; forte attrazione verso le cellule dendritiche crosspresentanti CD141+.",
      receptors: "XCR1.",
      clinicalNotes: "Essenziali per il cross-talk mirato tra linfociti CD8+ citotossici e cellule dendritiche durante infezioni virali e vaccinazioni."
    },
    CX3C: {
      greek: "Classe δ",
      formula: "C - X - X - X - C",
      structure: "Due cisteine separate da tre aminoacidi interposti, associate a un lungo stelo mucinoso glicosilato ancorato a membrana.",
      prototypes: ["CX3CL1 (Frattalchina)"],
      targetCells: "Monociti, cellule NK, linfociti T citotossici e microglia cerebrale.",
      receptors: "CX3CR1.",
      clinicalNotes: "Molecola ibrida: in forma transmembrana funge da potente molecola di adesione salda; quando clivata da metalloproteasi diventa chemioattrattante solubile."
    }
  };

  const curr = classes[activeClass];

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden my-8 shadow-xs">
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold">
            Chemiotassi & Reclutamento Leucocitario
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-0.5">
            Le 4 Classi di Chemochine, Recettori GPCR con Motivo DRY e Fissazione sui GAG
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Classificazione in base alla disposizione delle cisteine e meccanismi di trasduzione del segnale.
          </p>
        </div>

        {/* 4 Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/80 rounded-lg text-xs font-semibold">
          {(['CXC', 'CC', 'C', 'CX3C'] as const).map((cl) => (
            <button
              key={cl}
              onClick={() => setActiveClass(cl)}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeClass === cl
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cl} ({classes[cl].greek})
            </button>
          ))}
        </div>
      </div>

      {/* Main Breakdown */}
      <div className="p-6">
        <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-4">
            <div>
              <span className="text-xs font-mono uppercase text-slate-400 font-semibold">Formula Strutturale</span>
              <h4 className="text-lg font-bold font-mono text-blue-900">{curr.formula} ({curr.greek})</h4>
            </div>
            <span className="text-xs font-mono bg-white px-2.5 py-1 rounded border border-slate-200 text-slate-700">
              Prof.ssa Soriani · Lezione 1 (Ora 2)
            </span>
          </div>

          <p className="text-sm font-serif-body text-slate-800 leading-relaxed">
            {curr.structure}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 text-xs">
            <div className="p-3.5 bg-white rounded-lg border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">Chemochine Prototipiche:</span>
              <ul className="space-y-1 text-slate-700 font-mono text-[11px]">
                {curr.prototypes.map((p, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 bg-white rounded-lg border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">Popolazioni Cellulari Bersaglio:</span>
              <p className="text-slate-700 leading-relaxed font-serif-body">{curr.targetCells}</p>
            </div>

            <div className="p-3.5 bg-white rounded-lg border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">Recettori Specifici (GPCR a 7 eliche):</span>
              <p className="text-slate-700 font-mono text-[11px] leading-relaxed">{curr.receptors}</p>
            </div>

            <div className="p-3.5 bg-white rounded-lg border border-slate-200">
              <span className="font-bold text-blue-900 flex items-center gap-1.5 mb-1">
                <ShieldAlert className="w-3.5 h-3.5 text-blue-600" />
                Rilevanza Clinica & Patologica:
              </span>
              <p className="text-slate-700 leading-relaxed font-serif-body">{curr.clinicalNotes}</p>
            </div>
          </div>

          {/* Special Deep-Dive Bar for DRY Motif & GAGs */}
          <div className="mt-5 p-3.5 rounded-lg bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-2">
            <div className="font-bold text-amber-900 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-amber-600" />
              Due Principi Fisiologici Chiave Spiegati a Lezione:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-amber-900/90 font-serif-body">
              <div>
                <strong>1. Motivo conservato DRY:</strong> Nella seconda ansa citoplasmatica dei recettori a 7 eliche transmembrana risiede la tripletta aminoacidica <em>Aspartato - Arginina - Tirosina</em> (DRY), che innesca lo scambio GDP/GTP sulla proteina G eterotrimerica.
              </div>
              <div>
                <strong>2. Immobilizzazione sui Glicosamminoglicani (GAG):</strong> Le chemochine secrete si legano con domini basici ai GAG della matrice e dell'endotelio, impedendone il wash-out ematico e formando il gradiente chemiotattico per lo stravaso.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
