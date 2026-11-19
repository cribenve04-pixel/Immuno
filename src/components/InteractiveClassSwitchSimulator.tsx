import React, { useState } from 'react';
import {
  Dna,
  Zap,
  Sparkles,
  ArrowRight,
  Shield,
  RotateCcw,
  Layers,
  Scissors,
  CheckCircle2,
  AlertTriangle,
  Info
} from 'lucide-react';

interface IsotypeTarget {
  id: string;
  name: string;
  geneName: string;
  cytokineTrigger: string;
  sourceCells: string;
  masterFactor: string;
  functions: string[];
  clinicalSignificance: string;
  colorScheme: {
    bg: string;
    border: string;
    text: string;
    badge: string;
  };
}

const ISOTYPES: Record<string, IsotypeTarget> = {
  default: {
    id: 'default',
    name: 'IgM / IgD (Stato Basale / Naïve)',
    geneName: 'Cμ e Cδ',
    cytokineTrigger: 'Nessuna citochina polarizzante (assenza di switch o IgM precoce)',
    sourceCells: 'Linfociti B vergini (naïve) o plasmablasti extrafollicolari',
    masterFactor: 'Stato germline intatto',
    functions: [
      'Espressione membranaria contemporanea di IgM e IgD tramite splicing alternativo dell’RNA',
      'Formazione di pentameri IgM secernenti uniti da catena J con avidità decavalente',
      'Attivazione ultra-potente della via classica del complemento (lega C1q)'
    ],
    clinicalSignificance: 'Predomina nella prima ondata della risposta primaria (2-4 giorni); mancato switch porta a ipogammaglobulinemia e iper-IgM.',
    colorScheme: {
      bg: 'bg-slate-50',
      border: 'border-slate-300',
      text: 'text-slate-900',
      badge: 'bg-slate-200 text-slate-800'
    }
  },
  igg: {
    id: 'igg',
    name: 'IgG1 e IgG3 (Risposta Opsonizzante e Antivirale)',
    geneName: 'Cγ1 e Cγ3',
    cytokineTrigger: 'Interferone-gamma (IFN-γ)',
    sourceCells: 'Linfociti Th1, Cellule NK, Linfociti T CD8+',
    masterFactor: 'T-bet e STAT1',
    functions: [
      'Opsonizzazione ad altissima affinità per i recettori FcγRI (CD64) sui fagociti',
      'Attivazione della citotossicità cellulare anticorpo-dipendente (ADCC) mediata da NK via FcγRIII (CD16)',
      'Fissazione e attivazione della cascata classica del Complemento (C1q)',
      'Attraversamento della barriera placentare mediato dal recettore neonatale FcRn (immunità neonatale passiva)'
    ],
    clinicalSignificance: 'Costituiscono oltre il 75% delle immunoglobuline sieriche totali con un’emivita record di ~21 giorni grazie al riciclo FcRn.',
    colorScheme: {
      bg: 'bg-blue-50',
      border: 'border-blue-300',
      text: 'text-blue-950',
      badge: 'bg-blue-200 text-blue-900'
    }
  },
  ige: {
    id: 'ige',
    name: 'IgE (Difesa Antielmintica e Risposta Allergica)',
    geneName: 'Cε',
    cytokineTrigger: 'Interleuchina-4 (IL-4) e Interleuchina-13 (IL-13)',
    sourceCells: 'Linfociti Th2, Linfociti Tfh2, Basofili, Mastociti, ILC2',
    masterFactor: 'GATA-3 e STAT6',
    functions: [
      'Legame irreversibile con affinità picomolare (Ka ~ 10^10 M^-1) al recettore FcεRI su mastociti e basofili',
      'Cross-linking antigenico con immediata degranulazione di istamina, leucotrieni e proteoglicani',
      'Attivazione degli eosinofili per l’uccisione litica di parassiti metazoi ed elminti'
    ],
    clinicalSignificance: 'Concentrazione sierica normalmente minima (&lt;100 UI/ml); patologicamente iperprodotta nell’asma atopico e nell’anafilassi.',
    colorScheme: {
      bg: 'bg-rose-50',
      border: 'border-rose-300',
      text: 'text-rose-950',
      badge: 'bg-rose-200 text-rose-900'
    }
  },
  iga: {
    id: 'iga',
    name: 'IgA1 e IgA2 (Immunità delle Mucose e Secrezioni Esterne)',
    geneName: 'Cα1 e Cα2',
    cytokineTrigger: 'TGF-β, BAFF (TNFSF13B) e APRIL (TNFSF13)',
    sourceCells: 'Treg, Cellule stromali del GALT/MALT, Cellule Dendritiche mucosali',
    masterFactor: 'Smad2/3, Smad4 e Runx3',
    functions: [
      'Formazione di dimeri secretori stabilizzati da catena J',
      'Transcitosi basolaterale-apicale negli epiteli ghiandolari guidata dal Poly-Ig Receptor (pIgR)',
      'Rilascio con la Componente Secretoria protettiva che ne impedisce la digestione proteolitica nel lume gastrico/intestinale',
      'Neutralizzazione asettica e immuno-esclusione dei patogeni senza innesco di infiammazione distruttiva'
    ],
    clinicalSignificance: 'L’isotipo più abbondante nell’organismo (oltre 3-5 grammi al giorno secreti nelle feci, saliva, lacrime e colostro).',
    colorScheme: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-300',
      text: 'text-emerald-950',
      badge: 'bg-emerald-200 text-emerald-900'
    }
  }
};

export const InteractiveClassSwitchSimulator: React.FC = () => {
  const [selectedIsotypeKey, setSelectedIsotypeKey] = useState<string>('igg');
  const [molecularStep, setMolecularStep] = useState<number>(1);
  const [showSwitchCircle, setShowSwitchCircle] = useState<boolean>(true);

  const isotype = ISOTYPES[selectedIsotypeKey] || ISOTYPES.igg;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-[11px] font-mono tracking-wider uppercase text-cyan-300 font-semibold bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800/80">
              Modello Genomico di Ricombinazione DNA
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-2 text-white flex items-center gap-2">
              <Scissors className="w-6 h-6 text-amber-400" />
              Il Meccanismo Molecolare del Class Switch Recombination (CSR)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Comprendi come l’azione sequenziale di <strong>AID</strong>, <strong>UNG</strong> e <strong>APE1</strong> generi
              rotture a doppio filamento nelle regioni di <strong>Switch (S)</strong>, con delezione circolare irreversibile
              e fusione della porzione <strong>V(D)J</strong> al nuovo dominio costante.
            </p>
          </div>

          <button
            onClick={() => {
              setSelectedIsotypeKey('igg');
              setMolecularStep(1);
              setShowSwitchCircle(true);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-slate-100 rounded-lg transition-colors border border-white/10"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reimposta
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        {/* Cytokine Selector Bar */}
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 font-mono">
            Seleziona la Citochina Direzionatrice prodotta dai Linfociti Tfh / Helper:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <button
              onClick={() => {
                setSelectedIsotypeKey('igg');
                setMolecularStep(1);
              }}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedIsotypeKey === 'igg'
                  ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-500/20 text-blue-950 shadow-xs'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="text-[11px] font-mono font-bold text-blue-700 uppercase">IFN-γ (Th1)</div>
              <div className="text-xs font-bold mt-0.5 text-slate-900">Switch a IgG1 / IgG3</div>
              <div className="text-[10px] text-slate-500 mt-1">Opsonizzazione & ADCC</div>
            </button>

            <button
              onClick={() => {
                setSelectedIsotypeKey('ige');
                setMolecularStep(1);
              }}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedIsotypeKey === 'ige'
                  ? 'bg-rose-50 border-rose-600 ring-2 ring-rose-500/20 text-rose-950 shadow-xs'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="text-[11px] font-mono font-bold text-rose-700 uppercase">IL-4 & IL-13 (Th2)</div>
              <div className="text-xs font-bold mt-0.5 text-slate-900">Switch a IgE</div>
              <div className="text-[10px] text-slate-500 mt-1">Mastociti & Elminti</div>
            </button>

            <button
              onClick={() => {
                setSelectedIsotypeKey('iga');
                setMolecularStep(1);
              }}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedIsotypeKey === 'iga'
                  ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-500/20 text-emerald-950 shadow-xs'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="text-[11px] font-mono font-bold text-emerald-700 uppercase">TGF-β / BAFF (Mucosa)</div>
              <div className="text-xs font-bold mt-0.5 text-slate-900">Switch a IgA</div>
              <div className="text-[10px] text-slate-500 mt-1">Barriere Mucose (GALT)</div>
            </button>

            <button
              onClick={() => {
                setSelectedIsotypeKey('default');
                setMolecularStep(1);
              }}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedIsotypeKey === 'default'
                  ? 'bg-slate-200 border-slate-600 ring-2 ring-slate-400/30 text-slate-950 shadow-xs'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="text-[11px] font-mono font-bold text-slate-600 uppercase">Nessun Aiuto Tfh</div>
              <div className="text-xs font-bold mt-0.5 text-slate-900">Mantenimento IgM / IgD</div>
              <div className="text-[10px] text-slate-500 mt-1">Sindrome HIGM o Naïve</div>
            </button>
          </div>
        </div>

        {/* Genomic Locus Diagram */}
        <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 text-white">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800 font-mono">
            <span className="flex items-center gap-1.5 text-amber-300">
              <Dna className="w-4 h-4 text-cyan-400" />
              Mappa del Locus IgH Umano (Cromosoma 14q32)
            </span>
            <span className="text-[11px] text-slate-400">Direzione di Trascrizione 5' → 3'</span>
          </div>

          {/* DNA Segments Visualization */}
          <div className="my-6 overflow-x-auto pb-2">
            <div className="flex items-center gap-1 min-w-[700px] text-xs font-mono font-bold">
              {/* VDJ Segment */}
              <div className="bg-indigo-600 text-white px-3 py-3 rounded-lg border border-indigo-400 shadow-md text-center">
                <div className="text-[10px] text-indigo-200">Dominio Variabile</div>
                <div>V(D)J Ricombinato</div>
              </div>

              {/* S_mu Switch region */}
              <div
                className={`px-2 py-3 rounded-md text-center transition-all ${
                  molecularStep >= 2 && selectedIsotypeKey !== 'default'
                    ? 'bg-rose-500/90 text-white animate-pulse border border-rose-300'
                    : 'bg-slate-800 text-slate-300 border border-slate-700'
                }`}
              >
                <div className="text-[9px]">Switch</div>
                <div>Sμ</div>
              </div>

              {/* C_mu Constant region */}
              <div
                className={`px-3 py-3 rounded-md text-center transition-all ${
                  molecularStep >= 3 && selectedIsotypeKey !== 'default'
                    ? 'bg-slate-800/40 text-slate-600 line-through border border-dashed border-slate-700'
                    : 'bg-blue-900 text-blue-200 border border-blue-700'
                }`}
              >
                <div className="text-[9px]">Isotipo</div>
                <div>Cμ (IgM)</div>
              </div>

              {/* C_delta */}
              <div
                className={`px-3 py-3 rounded-md text-center transition-all ${
                  molecularStep >= 3 && selectedIsotypeKey !== 'default'
                    ? 'bg-slate-800/40 text-slate-600 line-through border border-dashed border-slate-700'
                    : 'bg-blue-950 text-blue-300 border border-blue-800'
                }`}
              >
                <div className="text-[9px]">Splicing</div>
                <div>Cδ (IgD)</div>
              </div>

              {/* Downstream S regions */}
              <div className="text-slate-600 px-1">···</div>

              {/* S_gamma / C_gamma */}
              <div
                className={`px-2 py-3 rounded-md text-center transition-all ${
                  selectedIsotypeKey === 'igg' && molecularStep >= 2
                    ? 'bg-rose-500/90 text-white animate-pulse border border-rose-300'
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                }`}
              >
                <div className="text-[9px]">Switch</div>
                <div>Sγ1</div>
              </div>
              <div
                className={`px-3 py-3 rounded-md text-center transition-all ${
                  selectedIsotypeKey === 'igg'
                    ? 'bg-blue-600 text-white border-2 border-cyan-400 shadow-md ring-2 ring-cyan-400/40'
                    : 'bg-slate-800/80 text-slate-400 border border-slate-700'
                }`}
              >
                <div className="text-[9px]">Isotipo</div>
                <div>Cγ1 (IgG1)</div>
              </div>

              <div className="text-slate-600 px-1">···</div>

              {/* S_alpha / C_alpha */}
              <div
                className={`px-2 py-3 rounded-md text-center transition-all ${
                  selectedIsotypeKey === 'iga' && molecularStep >= 2
                    ? 'bg-rose-500/90 text-white animate-pulse border border-rose-300'
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                }`}
              >
                <div className="text-[9px]">Switch</div>
                <div>Sα1</div>
              </div>
              <div
                className={`px-3 py-3 rounded-md text-center transition-all ${
                  selectedIsotypeKey === 'iga'
                    ? 'bg-emerald-600 text-white border-2 border-emerald-400 shadow-md ring-2 ring-emerald-400/40'
                    : 'bg-slate-800/80 text-slate-400 border border-slate-700'
                }`}
              >
                <div className="text-[9px]">Isotipo</div>
                <div>Cα1 (IgA1)</div>
              </div>

              <div className="text-slate-600 px-1">···</div>

              {/* S_epsilon / C_epsilon */}
              <div
                className={`px-2 py-3 rounded-md text-center transition-all ${
                  selectedIsotypeKey === 'ige' && molecularStep >= 2
                    ? 'bg-rose-500/90 text-white animate-pulse border border-rose-300'
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                }`}
              >
                <div className="text-[9px]">Switch</div>
                <div>Sε</div>
              </div>
              <div
                className={`px-3 py-3 rounded-md text-center transition-all ${
                  selectedIsotypeKey === 'ige'
                    ? 'bg-rose-600 text-white border-2 border-rose-400 shadow-md ring-2 ring-rose-400/40'
                    : 'bg-slate-800/80 text-slate-400 border border-slate-700'
                }`}
              >
                <div className="text-[9px]">Isotipo</div>
                <div>Cε (IgE)</div>
              </div>
            </div>
          </div>

          {/* Switch Circle Banner */}
          {molecularStep >= 3 && selectedIsotypeKey !== 'default' && (
            <div className="bg-amber-950/60 border border-amber-600/60 rounded-xl p-3.5 text-xs text-amber-200 flex items-start gap-2.5">
              <Scissors className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong>Formazione dello Switch Circle (Delezione Extracromosomica Irreversibile):</strong>
                <p className="text-[11px] text-amber-300 mt-0.5 leading-relaxed">
                  L’ansa di DNA escissa contenente <em>Sμ-Cμ-Cδ</em> viene rilasciata nel nucleo come anello circolare
                  privo di centromero e degradata. Il processo è <strong>irreversibile</strong>: il linfocita B e la sua progenie
                  non potranno mai più tornare a sintetizzare IgM o IgD.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Step-by-Step Molecular Progression Controls */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold text-slate-700 uppercase font-mono tracking-wider">
              Cascata Enzimatica Step-by-Step:
            </span>
            <div className="flex items-center gap-1 text-xs">
              {[1, 2, 3, 4].map((stepNum) => (
                <button
                  key={stepNum}
                  onClick={() => setMolecularStep(stepNum)}
                  className={`w-7 h-7 rounded-lg font-bold font-mono transition-all ${
                    molecularStep === stepNum
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {stepNum}
                </button>
              ))}
            </div>
          </div>

          {/* Current Step Description Card */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs">
            {molecularStep === 1 && (
              <div>
                <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-mono flex items-center justify-center text-xs">
                    1
                  </span>
                  Trascrizione Sterile Germinale (Accesso Cromatinico)
                </div>
                <p className="text-slate-600 leading-relaxed">
                  La citochina (es. {isotype.cytokineTrigger.split(' ')[0]}) attiva il suo fattore di trascrizione master (
                  <strong>{isotype.masterFactor}</strong>). Questo promuove la trascrizione non codificante ("sterile") a
                  partire dal promotore I a monte della regione di Switch target ({isotype.geneName}). La doppia elica si apre in
                  bolle trascrizionali (R-loops) esponendo filamenti singoli di DNA (ssDNA).
                </p>
              </div>
            )}
            {molecularStep === 2 && (
              <div>
                <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 font-mono flex items-center justify-center text-xs">
                    2
                  </span>
                  Deaminazione della Citosina da parte di AID (AICDA)
                </div>
                <p className="text-slate-600 leading-relaxed">
                  L’enzima <strong>AID</strong> catalizza la deaminazione idrolitica dei residui di deossicitidina in
                  deossiuracile (<code className="text-rose-600 font-mono">dC → dU</code>) specificamente nelle sequenze ripetute ricche
                  in G-C delle regioni di Switch sia in <strong>Sμ</strong> sia nella regione <strong>S target</strong> ({isotype.geneName}).
                </p>
              </div>
            )}
            {molecularStep === 3 && (
              <div>
                <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-mono flex items-center justify-center text-xs">
                    3
                  </span>
                  Generazione di Rotture a Doppio Filamento (DSBs) da UNG e APE1
                </div>
                <p className="text-slate-600 leading-relaxed">
                  L’enzima <strong>UNG (Uracil-DNA Glycosylase)</strong> rimuove le basi uraciliche lasciando siti abasici (siti AP).
                  L’endonucleasi <strong>APE1 (Apurinic/Apyrimidinic Endonuclease 1)</strong> incide lo scheletro fosfodiesterico
                  sui due filamenti opposti, convertendo i siti AP in multiple <strong>rotture a doppio filamento (DSB)</strong>.
                </p>
              </div>
            )}
            {molecularStep === 4 && (
              <div>
                <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-mono flex items-center justify-center text-xs">
                    4
                  </span>
                  Ricongiunzione Non Omologa (NHEJ) & Espressione del Nuovo Isotipo
                </div>
                <p className="text-slate-600 leading-relaxed">
                  I complessi di riparazione <strong>NHEJ (Ku70/80, DNA-PKcs, XRCC4, Ligasi IV)</strong> avvicinano la regione Sμ
                  alla regione S target ({isotype.geneName}), saldando covalentemente le estremità rotte. L’ansa interposta viene
                  eliminata (Switch Circle) e il trascritto primario congiunge ora il segmento <code className="text-indigo-600 font-mono">VDJ</code> al
                  nuovo gene costante <strong>{isotype.geneName}</strong> preservando intatta la specificità anticorpale per l’antigene!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Selected Isotype Biological Profile */}
        <div className={`p-5 rounded-2xl border ${isotype.colorScheme.border} ${isotype.colorScheme.bg}`}>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded font-mono ${isotype.colorScheme.badge}`}>
                Profilo Immunologico Isotipo Selezionato
              </span>
              <h4 className={`text-base font-bold mt-1 ${isotype.colorScheme.text}`}>{isotype.name}</h4>
            </div>
            <div className="text-right text-xs">
              <span className="text-slate-500 font-medium">Fattore di Trascrizione Master: </span>
              <strong className="text-slate-800 font-mono">{isotype.masterFactor}</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mt-3">
            <div className="bg-white/80 p-3.5 rounded-xl border border-slate-200/80">
              <span className="font-bold text-slate-800 block mb-1.5">Funzioni Effettrici Primarie:</span>
              <ul className="space-y-1 text-slate-700 list-disc list-inside">
                {isotype.functions.map((fn, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {fn}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/80 p-3.5 rounded-xl border border-slate-200/80 flex flex-col justify-between">
              <div>
                <span className="font-bold text-slate-800 block mb-1">Rilevanza Clinica & Patologica:</span>
                <p className="text-slate-700 leading-relaxed">{isotype.clinicalSignificance}</p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-200 text-[11px] text-slate-500 font-mono">
                Sorgente cellulare: {isotype.sourceCells}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
