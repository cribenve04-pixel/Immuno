import React, { useState } from 'react';
import {
  GitMerge,
  ChevronDown,
  ChevronUp,
  Maximize2,
  Sparkles,
  Info,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Activity,
  Dna
} from 'lucide-react';

export type ProcessType =
  | 'complement'
  | 'three_signals'
  | 'germinal_center'
  | 'cancer_immunity'
  | 'hiv_cycle'
  | 'gut_brain';

interface InlineProcessFlowDiagramProps {
  processId: ProcessType;
  title?: string;
  subtitle?: string;
  defaultExpanded?: boolean;
}

export const InlineProcessFlowDiagram: React.FC<InlineProcessFlowDiagramProps> = ({
  processId,
  title,
  subtitle,
  defaultExpanded = true
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
  const [activeStep, setActiveStep] = useState<number>(0);

  // 1. Cascata del Complemento
  const complementSteps = [
    {
      title: "1. Innesco delle 3 Vie",
      badge: "Pattern Recognition",
      color: "border-blue-500 bg-blue-50 text-blue-900",
      desc: "Via Classica (C1qrs lega immunocomplessi IgG/IgM); Via Lectinica (MBL/Ficoline legano mannosio e MASP1/2); Via Alternativa (idrolisi spontanea tick-over C3(H2O) o binding a LPS batterico)."
    },
    {
      title: "2. Formazione C3 Convertasi",
      badge: "Amplificazione",
      color: "border-indigo-500 bg-indigo-50 text-indigo-900",
      desc: "Classica/Lectinica assemblano C4b2a; l'Alternativa assembla C3bBb (stabilizzata da Properdina). Scissione massiva di centinaia di molecole di C3 in C3a (anafilotossina) e C3b (opsonina cardine)."
    },
    {
      title: "3. Bivio C5 Convertasi",
      badge: "Reclutamento Litico",
      color: "border-purple-500 bg-purple-50 text-purple-900",
      desc: "Reclutamento di una subunità addizionale di C3b genera C4b2a3b (Classica) o C3bBb3b (Alternativa). Scissione di C5 in C5a (il più potente chemiotattico per neutrofili) e C5b (innesco MAC)."
    },
    {
      title: "4. Assemblaggio MAC (C5b-9)",
      badge: "Lisi Osmotica",
      color: "border-red-500 bg-red-50 text-red-900",
      desc: "C5b lega stabilmente C6 e C7 inserendosi nel doppio strato fosfolipidico; C8 fissa l'ancoraggio e guida la polimerizzazione circolare di 12-18 monomeri di C9 creando un poro litico transmembrana di 10 nm."
    },
    {
      title: "5. Freni e Regolatori",
      badge: "Protezione Self",
      color: "border-emerald-500 bg-emerald-50 text-emerald-900",
      desc: "C1-INH (blocca C1r/s e MASP); DAF (CD55) e MCP (CD46) dissociano la C3 convertasi; Fattore H e Fattore I inattivano C3b in iC3b; CD59 (protectina) impedisce il legame di C9 bloccando la formazione del poro."
    }
  ];

  // 2. I Tre Segnali & Sinapsi Immunologica (SMAC)
  const threeSignalsSteps = [
    {
      title: "Segnale 1: TCR : pMHC & CD3",
      badge: "Specificità Clonale",
      color: "border-blue-500 bg-blue-50 text-blue-900",
      desc: "Il TCR αβ riconosce il peptide antigenico nel solco MHC (MHC-I per CD8, MHC-II per CD4). Fosforilazione delle tirosine ITAM della catena ζ di CD3 da parte di LCK; reclutamento e attivazione della chinasi ZAP-70."
    },
    {
      title: "Segnale 2: Costimolazione CD28 : B7",
      badge: "Licenza di Sopravvivenza",
      color: "border-emerald-500 bg-emerald-50 text-emerald-900",
      desc: "CD28 su linfocita T lega CD80 (B7-1) o CD86 (B7-2) sull'APC matura. Attivazione di PI3K/Akt, induzione di Bcl-xL (anti-apoptotico), trascrizione massiva di IL-2 e catena ad alta affinità CD25. Senza Segnale 2 = ANERGIA clonale."
    },
    {
      title: "Segnale 3: Polarizzazione Citochinica",
      badge: "Destino Effettore",
      color: "border-purple-500 bg-purple-50 text-purple-900",
      desc: "IL-12/IFN-γ inducono T-bet (Th1 citotossico); IL-4 induce GATA-3 (Th2 parassiti/allergia); IL-6/TGF-β/IL-23 inducono RORγt (Th17 batteri extracellulari); IL-6/IL-21 inducono BCL6 (Tfh centro germinativo); TGF-β/IL-2 inducono FOXP3 (Treg)."
    },
    {
      title: "Architettura Sinapsi SMAC",
      badge: "Organizzazione Spaziale",
      color: "border-amber-500 bg-amber-50 text-amber-900",
      desc: "cSMAC (centrale: TCR, CD3, CD28, PKC-θ); pSMAC (periferico ad anello: integrine LFA-1 : ICAM-1 e talina per sigillare il microambiente); dSMAC (distale: molecole voluminose CD45 e CD43 escluse per consentire la trasduzione)."
    }
  ];

  // 3. Reazione del Centro Germinativo & AID
  const germinalCenterSteps = [
    {
      title: "1. Ingresso nella Zona Scura",
      badge: "Clonal Expansion",
      color: "border-indigo-500 bg-indigo-50 text-indigo-900",
      desc: "I linfociti B follicolari attivati migrano nella Dark Zone come centroblasti, guidati dal recettore CXCR4, e vanno incontro a una vertiginosa proliferazione esponenziale (tempo di raddoppio < 6-8 ore)."
    },
    {
      title: "2. Ipermutazione Somatica (SHM) via AID",
      badge: "Generazione Diversità",
      color: "border-purple-500 bg-purple-50 text-purple-900",
      desc: "L'enzima AID (Activation-Induced Cytidine Deaminase) deamina citosine in uracili nei geni V(D)J variabili delle Ig. Intervento di UNG ed enzimi del mismatch repair che introducono mutazioni puntiformi ad altissima frequenza."
    },
    {
      title: "3. Migrazione nella Zona Chiara",
      badge: "Selezione Competitiva",
      color: "border-amber-500 bg-amber-50 text-amber-900",
      desc: "I centroblasti differenziano in centrociti (CXCR5+) ed entrano nella Light Zone, dove competono ferocemente per catturare l'antigene intatto esposto sulla superficie delle Cellule Dendritiche Follicolari (FDC)."
    },
    {
      title: "4. Help dei Tfh & BCL-6",
      badge: "Salvataggio da Apoptosi",
      color: "border-emerald-500 bg-emerald-50 text-emerald-900",
      desc: "Solo i centrociti con BCR ad aumentata affinità internalizzano l'antigene, lo presentano su MHC-II e ricevono il segnale di sopravvivenza dai Linfociti Tfh tramite CD40L e citochina IL-21. BCL-2 salvataggio; affinità debole = morte per apoptosi."
    },
    {
      title: "5. Output: Plasmacellule & B Memoria",
      badge: "Esecutori Terminali",
      color: "border-blue-500 bg-blue-50 text-blue-900",
      desc: "Switch isotipico (CSR guidato da AID verso IgG, IgA o IgE) ed egresso: differenziamento in Plasmacellule a lunga sopravvivenza (LLPC) dirette alla nicchia midollare o in Linfociti B di Memoria circolanti."
    }
  ];

  // 4. Asse Intestino-Cervello (Gut-Brain Axis)
  const gutBrainSteps = [
    {
      title: "1. Nervo Vago (Via Neurale Primaria)",
      badge: "90% Fibre Afferenti",
      color: "border-cyan-500 bg-cyan-50 text-cyan-900",
      desc: "Le fibre afferenti vagali registrano contrazioni, neurotrasmettitori e mediatori microbici nel plesso mioenterico e sottomucoso, trasmettendo segnali bottom-up diretti al nucleo del tratto solitario (NTS) e all'ippocampo."
    },
    {
      title: "2. Cellule Enterocromaffini & Serotonina",
      badge: "95% 5-HT Corporea",
      color: "border-amber-500 bg-amber-50 text-amber-900",
      desc: "I metaboliti batterici (soprattutto acidi grassi a catena corta, SCFA) stimolano le cellule enterocromaffini a produrre il 95% della serotonina dell'organismo, regolando motilità, permeabilità e modulazione nocicettiva."
    },
    {
      title: "3. Acidi Grassi a Catena Corta (SCFA)",
      badge: "Acetato, Propionato, Butirrato",
      color: "border-emerald-500 bg-emerald-50 text-emerald-900",
      desc: "Il butirrato prodotto dalla fermentazione di fibre insolubili agisce come inibitore delle istone deacetilasi (HDAC), promuovendo la differenziazione dei Treg colici FOXP3+ e preservando la barriera emato-encefalica (BBB)."
    },
    {
      title: "4. Bivio Metabolico Triptofano",
      badge: "Serotonina vs Acido Chinolinico",
      color: "border-purple-500 bg-purple-50 text-purple-900",
      desc: "In condizioni di eubiosi il triptofano alimenta la sintesi di serotonina. Nello stress e nell'infiammazione sistemica, l'enzima IDO/TDO devia verso la via delle chinurenine: la microglia produce acido chinolinico neurotossico (agonista NMDA)."
    },
    {
      title: "5. Asse HPA & Reclutamento Immunitario",
      badge: "Cortisolo, Microbiota & Microglia",
      color: "border-rose-500 bg-rose-50 text-rose-900",
      desc: "La disbiosi aumenta la permeabilità intestinale ('leaky gut') con traslocazione sistemica di LPS batterico; attivazione TLR4, rilascio di IL-1β/TNF-α e stimolo su asse ipotalamo-ipofisi-surrene, innescando neuroinfiammazione cronica."
    }
  ];

  // 5. Ciclo Cancro-Immunità in 7 Fasi
  const cancerImmunitySteps = [
    {
      title: "Fase 1: Rilascio di Neoantigeni Tumorali",
      badge: "Morte Cellulare Immunogenica",
      color: "border-slate-500 bg-slate-50 text-slate-900",
      desc: "Le cellule neoplastiche in rapida proliferazione o sottoposte a stress genotossico/terapia vanno incontro a morte cellulare immunogenica rilasciando TAA (antigeni associati al tumore) e TSA neoantigenici mutazionali."
    },
    {
      title: "Fase 2: Presentazione su cDC1",
      badge: "Cross-Presentazione",
      color: "border-blue-500 bg-blue-50 text-blue-900",
      desc: "Le cellule dendritiche convenzionali di tipo 1 (cDC1 CD141+/XCR1+) catturano i detriti cellulari, migrano ai linfonodi drenanti il tumore guidate da CCR7 e presentano i neoantigeni su MHC-I e MHC-II."
    },
    {
      title: "Fase 3: Priming & Attivazione CTL",
      badge: "Sito di Azione Anti-CTLA-4",
      color: "border-indigo-500 bg-indigo-50 text-indigo-900",
      desc: "Nel linfonodo ha luogo l'attivazione clonale dei Linfociti T CD8+. È la sede fisiologica del checkpoint CTLA-4: Ipilimumab rimuove il freno inibitorio precoce consentendo una massiccia espansione di cloni T specifici."
    },
    {
      title: "Fasi 4 & 5: Trafficking & Infiltrazione (TILs)",
      badge: "Homing nel Microambiente (TME)",
      color: "border-purple-500 bg-purple-50 text-purple-900",
      desc: "I CTL antigene-specifici circolano nel sangue, riconoscono chemochine (CXCL9, CXCL10) sull'endotelio tumorale ed extravasano nello stroma neoplastico. Classificazione in tumori Inflamed (caldi), Excluded o Desert (freddi)."
    },
    {
      title: "Fasi 6 & 7: Riconoscimento & Lisi",
      badge: "Sito di Azione Anti-PD-1",
      color: "border-red-500 bg-red-50 text-red-900",
      desc: "I CTL riconoscono il neoantigene su MHC-I tumorale e rilasciano perforine e granzimi. Il tumore contrattacca esprimendo PD-L1 (indotto da IFN-γ); gli inibitori Pembrolizumab/Nivolumab bloccano l'asse PD-1/PD-L1 ripristinando il killing citotossico."
    }
  ];

  // 6. Ciclo Replicativo HIV & Bersagli Farmacologici
  const hivCycleSteps = [
    {
      title: "1. Attacco & Fusione pH-Indipendente",
      badge: "Maraviroc & Enfuvirtide (T-20)",
      color: "border-red-500 bg-red-50 text-red-900",
      desc: "gp120 lega il CD4 (D1); cambio conformazionale con esposizione dell'ansa V3 che lega il corecettore CCR5 o CXCR4 (Maraviroc blocca CCR5). L'arpione gp41 si estende e forma il six-helix bundle (Enfuvirtide blocca gp41)."
    },
    {
      title: "2. Retrotrascrizione Genomica",
      badge: "NRTI & NNRTI",
      color: "border-amber-500 bg-amber-50 text-amber-900",
      desc: "La trascrittasi inversa (RT) sintetizza dsDNA provirale a partire dal genoma ssRNA(+). Bersaglio di analoghi nucleosidici NRTI (Tenofovir, Emtricitabina) che bloccano l'allungamento per terminazione di catena, e non-nucleosidici NNRTI (Efavirenz)."
    },
    {
      title: "3. Integrazione nel Genoma Ospite",
      badge: "Inibitori Integrasi (INSTI)",
      color: "border-purple-500 bg-purple-50 text-purple-900",
      desc: "Il complesso di pre-integrazione entra nel nucleo attraverso il poro nucleare; l'integrasi virale effettua un taglio sfalsato nel DNA cromosomico umano inserendo il DNA provirale. Bersaglio cardine degli INSTI (Dolutegravir, Bictegravir)."
    },
    {
      title: "4. Trascrizione & Esportazione",
      badge: "Fattori Regolatori Tat & Rev",
      color: "border-blue-500 bg-blue-50 text-blue-900",
      desc: "La RNA polimerasi II cellulare trascrive gli RNA virali con forte accelerazione da parte della proteina Tat. La proteina Rev guida l'esportazione nucleare degli mRNA virali non tagliati verso il citoplasma per la traduzione strutturale."
    },
    {
      title: "5. Gemmazione & Maturazione Proteasica",
      badge: "Inibitori Proteasi (PI)",
      color: "border-emerald-500 bg-emerald-50 text-emerald-900",
      desc: "I precursori poliproteici Gag e Gag-Pol si assemblano sotto la membrana cellulare; il virione gemma avvolto nel doppio strato fosfolipidico. La proteasi virale taglia i polipeptidi generando il capside condensato conico maturo infettante (Darunavir, Ritonavir)."
    }
  ];

  let steps = complementSteps;
  let defaultTitle = "Schema di Processo: Cascata del Complemento";
  let defaultSubtitle = "Dalle 3 vie d'innesco all'assemblaggio del poro litico MAC (C5b-9) e proteine regolatrici";

  if (processId === 'three_signals') {
    steps = threeSignalsSteps;
    defaultTitle = "Schema di Processo: I 3 Segnali dell'Attivazione T & Sinapsi (SMAC)";
    defaultSubtitle = "Riconoscimento antigene, costimolazione salvavita, polarizzazione citochinica e architettura molecolare";
  } else if (processId === 'germinal_center') {
    steps = germinalCenterSteps;
    defaultTitle = "Schema di Processo: Reazione del Centro Germinativo & Enzima AID";
    defaultSubtitle = "Dinamica Dark Zone/Light Zone: ipermutazione somatica, selezione per affinità con FDC/Tfh e switch isotipico";
  } else if (processId === 'gut_brain') {
    steps = gutBrainSteps;
    defaultTitle = "Schema di Processo: Le 7 Vie dell'Asse Intestino-Cervello (Gut-Brain Axis)";
    defaultSubtitle = "Nervo vago, 95% serotonina enterocromaffine, butirrato/SCFA, bivio triptofano-chinurenina e asse HPA";
  } else if (processId === 'cancer_immunity') {
    steps = cancerImmunitySteps;
    defaultTitle = "Schema di Processo: Ciclo Cancro-Immunità in 7 Fasi";
    defaultSubtitle = "Dalla morte immunogenica e priming linfonodale al rilascio di checkpoint inibitori (CTLA-4 & PD-1)";
  } else if (processId === 'hiv_cycle') {
    steps = hivCycleSteps;
    defaultTitle = "Schema di Processo: Ciclo Replicativo HIV & Bersagli Farmacologici";
    defaultSubtitle = "Fusione gp120/gp41, trascrittasi inversa, integrasi, fattori regolatori Tat/Rev e maturazione proteasica";
  }

  const finalTitle = title || defaultTitle;
  const finalSubtitle = subtitle || defaultSubtitle;
  const spokenDiagramNarrative = `Schema concettuale: ${finalTitle}. ${finalSubtitle}. Sequenza delle fasi: ` +
    steps.map((st, i) => `Fase ${i + 1}, ${st.title}: ${st.desc}`).join(' ');

  return (
    <div
      data-speech-text={spokenDiagramNarrative}
      className="my-8 rounded-2xl border border-slate-200/90 bg-white shadow-xs overflow-hidden print:border-slate-300 print:shadow-none not-prose"
    >
      {/* Header Bar */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-4 sm:p-5 bg-gradient-to-r from-slate-50 via-slate-100/70 to-blue-50/40 border-b border-slate-200 cursor-pointer flex items-center justify-between gap-4 transition-colors select-none"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-600 text-white shadow-xs">
            <GitMerge className="w-5 h-5 shrink-0" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700">
                Schema di Processo Immunologico · Visione d'Insieme
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-snug">
              {finalTitle}
            </h3>
            <p className="text-xs text-slate-600 hidden sm:block mt-0.5">
              {finalSubtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 print:hidden">
          <span className="text-xs font-semibold text-slate-500 hidden md:inline">
            {isExpanded ? 'Comprimi Schema' : 'Espandi Schema'}
          </span>
          <button
            type="button"
            className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
            aria-label={isExpanded ? 'Comprimi' : 'Espandi'}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Screen Interactive Flowchart Content */}
      {isExpanded && (
        <div className="p-4 sm:p-6 space-y-6 print:hidden">
          {/* Step Sequence Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pb-2">
            {steps.map((st, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-2.5 rounded-xl border text-left text-xs transition-all flex flex-col justify-between cursor-pointer ${
                  activeStep === idx
                    ? 'border-blue-600 bg-blue-50/80 text-blue-950 font-bold shadow-2xs ring-1 ring-blue-500'
                    : 'border-slate-200 bg-slate-50/60 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1">
                  <span>FASE {idx + 1}</span>
                  {activeStep === idx && <span className="w-2 h-2 rounded-full bg-blue-600" />}
                </div>
                <span className="line-clamp-2 leading-tight">{st.title.replace(/^\d+\.\s*/, '')}</span>
              </button>
            ))}
          </div>

          {/* Active Step Detailed Focus Card */}
          <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-slate-50/70 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {activeStep + 1}
                </span>
                <h4 className="font-extrabold text-slate-900 text-base">
                  {steps[activeStep].title}
                </h4>
              </div>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${steps[activeStep].color}`}>
                {steps[activeStep].badge}
              </span>
            </div>

            <p className="text-slate-800 text-sm leading-relaxed mb-4">
              {steps[activeStep].desc}
            </p>

            {/* Step Progression Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs">
              <button
                type="button"
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className={`px-3 py-1.5 rounded-lg border font-semibold transition-colors ${
                  activeStep === 0
                    ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                ← Fase Precedente
              </button>

              <span className="font-mono text-slate-500 text-[11px]">
                Passaggio {activeStep + 1} di {steps.length}
              </span>

              <button
                type="button"
                onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                disabled={activeStep === steps.length - 1}
                className={`px-3 py-1.5 rounded-lg border font-semibold transition-colors ${
                  activeStep === steps.length - 1
                    ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400'
                    : 'border-blue-600 bg-blue-600 text-white hover:bg-blue-700 shadow-2xs'
                }`}
              >
                Fase Successiva →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Print-Only Linear Flow: Renders 100% of all process phases sequentially for PDF without any truncation */}
      <div className="hidden print:block p-4 space-y-3 border-t border-slate-300">
        <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Sequenza Completa delle Fasi del Processo:
        </div>
        <div className="space-y-3">
          {steps.map((st, idx) => (
            <div key={idx} className="p-3.5 rounded-lg border border-slate-300 bg-slate-50/50 break-inside-avoid">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-white font-mono font-bold text-[10px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="font-bold text-slate-900 text-sm">{st.title}</span>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-300 text-slate-700">
                  {st.badge}
                </span>
              </div>
              <p className="text-xs text-slate-800 leading-normal pl-7">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
