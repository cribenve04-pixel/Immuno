import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import { ConceptMapFlow } from './ConceptMapFlow';
import { MAP_LEZIONE_19_TH_POLARIZATION, MAP_LEZIONE_19_M1_VS_M2_MACROPHAGES } from '../data/conceptMapsData';
import React, { useState, useEffect } from 'react';
import {
  Compass,
  Layers,
  Dna,
  ShieldAlert,
  Activity,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  BookOpen,
  ArrowRight,
  Flame,
  Zap,
  Target,
  RefreshCw,
  Award,
  Stethoscope,
  Microscope,
  Info,
  ChevronDown,
  ChevronUp,
  FileText,
  AlertTriangle,
  RotateCcw,
  Sliders,
  ShieldCheck,
  Check,
  Scissors,
  Pill,
  Shuffle,
  Shield
} from 'lucide-react';

interface Lezione19ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione19View: React.FC<Lezione19ViewProps> = ({ isSerif, fontSize }) => {
  const fontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const sizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // State for Simulator 1: Th Polarization Compass
  const [selectedStimulus, setSelectedStimulus] = useState<'intracellular' | 'helminth' | 'fungal' | 'mucosal' | 'follicular'>('intracellular');

  // State for Simulator 2: Homing & Natalizumab Lab
  const [homingTarget, setHomingTarget] = useState<'gut' | 'skin' | 'cns'>('cns');
  const [natalizumabActive, setNatalizumabActive] = useState<boolean>(false);

  // State for Flashcards
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  // State for Quiz
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState<boolean>(false);


  const toggleCard = (index: number) => {
    setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    if (!showResults) {
      setUserAnswers(prev => ({ ...prev, [questionIndex]: optionIndex }));
    }
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  // Flashcards Data
  const flashcardsData = [
    {
      question: "Qual è il 3° segnale decisivo e il master regulator per i linfociti Tfh?",
      answer: "Il differenziamento in Tfh richiede Interleuchina-6 (IL-6). Induce la perdita di CCR7, l'upregolazione del recettore chemochinico CXCR5 e l'attivazione del fattore di trascrizione maestro BCL6, consentendo la migrazione verso CXCL13 al confine T-B e nei centri germinativi."
    },
    {
      question: "In che modo l'interazione tra Th1 e macrofagi genera i macrofagi M1?",
      answer: "I Th1 producono IFN-γ e forniscono CD40L. Nei macrofagi M1, IFN-γ attiva la sintesi di ossido nitrico sintasi inducibile (iNOS/NOS2), che metabolizza la L-arginina in ossido nitrico (NO) e citrullina, potenziando la produzione di ROS e citochine pro-infiammatorie (IL-1, IL-12, TNF-α)."
    },
    {
      question: "Quali allarmine epiteliali guidano la risposta Th2 in assenza del 3° segnale DC?",
      answer: "Infezioni da elminti e allergeni stimolano l'epitelio a produrre TSLP (che blocca la produzione di IL-12 da parte della DC), IL-25 (che stimola le ILC2 a produrre IL-4) e IL-33 (che stimola basofili e mastociti a rilasciare IL-4). L'IL-4 attiva GATA3 via STAT6."
    },
    {
      question: "Quale dicotomia metabolica distingue radicalmente i macrofagi M1 dagli M2?",
      answer: "Gli M1 usano iNOS per trasformare la L-arginina in NO + citrullina (microbicida, antitumorale). Gli M2, stimolati da IL-4/IL-13, usano l'Arginasi 1 (Arg1) per trasformare la L-arginina in ornitina + urea (proline e poliamine per riparazione della matrice, cicatrizzazione ed effetto pro-angiogenetico/immunosoppressorio con PD-L2)."
    },
    {
      question: "Chi ha scoperto FOXP3 e perché è valso il Premio Nobel per la Medicina 2025?",
      answer: "Mary Brunkow, Fred Ramsdell e Shimon Sakaguchi hanno identificato il gene e fattore di trascrizione FOXP3 come interruttore genetico maestro per lo sviluppo e la funzione soppressoria dei Treg. La sua mutazione provoca la sindrome fatale IPEX (autoimmunità polighiandolare sistemica)."
    },
    {
      question: "Qual è il codice molecolare di homing intestinale e come agisce il Natalizumab?",
      answer: "Homing intestinale: combinazione integrina α4β7 + chemochina CCL25/recettore CCR9; α4β7 si attiva ad alta affinità per MAdCAM-1 sulle venule mucosali. Il Natalizumab è un mAb anti-α4: blocca sia α4β1 che α4β7, impedendo ai T autoreattivi di attraversare la barriera emato-encefalica (nella sclerosi multipla) o endoteli intestinali (nel Crohn)."
    }
  ];

  // 10 Official Quiz Questions (including the 7 exact ones projected by the professor in slides 19-20)
  const quizData = [
    {
      question: "1. La differenziazione dei linfociti Th2 è stimolata da: (Quesito Ufficiale Slide 19)",
      options: [
        "A) Produzione di citochine proinfiammatorie in risposta all'allergene",
        "B) Produzione di TSLP da parte di cellule epiteliali",
        "C) Attivazione di Stat-1 e T-bet",
        "D) Infezione da patogeni intracellulari",
        "E) Produzione di IFNγ da parte di cellule NK"
      ],
      correctIndex: 1,
      rationale: "Corretto (B): La professoressa evidenzia come il TSLP epiteliale agisca sulla cellula dendritica inibendo l'espressione di IL-12, impedendo così la via Th1 e consentendo il differenziamento Th2 favorito da IL-4 (proveniente da ILC2 e basofili)."
    },
    {
      question: "2. I linfociti Th17. Indicare la risposta errata: (Quesito Ufficiale Slide 19)",
      options: [
        "A) Si sviluppano per azione combinata di IL-6 e TGF-β",
        "B) Il loro differenziamento dipende dai fattori di trascrizione T-bet e STAT-1",
        "C) Esprimono RORγt",
        "D) Producono IL-22 che stimola la produzione di sostanze antimicrobiche",
        "E) Contribuiscono alla patogenesi del danno nell'artrite reumatoide"
      ],
      correctIndex: 1,
      rationale: "Corretto (B): L'affermazione errata è la B. Il differenziamento Th17 dipende da RORγt e STAT3 (attivati da IL-6, IL-1, IL-23). T-bet e STAT-1 sono invece i master regulator del lineage Th1."
    },
    {
      question: "3. Il fattore di trascrizione GATA3: (Quesito Ufficiale Slide 20)",
      options: [
        "A) Attiva il programma trascrizionale Th1",
        "B) Attiva il programma trascrizionale Th2",
        "C) Attiva il programma trascrizionale Th22",
        "D) Attiva il programma trascrizionale Th17",
        "E) Attiva il programma trascrizionale dei linfociti NKT"
      ],
      correctIndex: 1,
      rationale: "Corretto (B): GATA3 è il master transcription factor che orchestra l'espressione delle citochine Th2 (IL-4, IL-5, IL-13) ed è indotto a valle della segnalazione di IL-4/STAT6."
    },
    {
      question: "4. La differenziazione dei linfociti CD4 in Th follicolari richiede: (Quesito Ufficiale Slide 20)",
      options: [
        "A) IL-12",
        "B) IL-4",
        "C) TGF-β + IL-12",
        "D) IL-21",
        "E) Nessuna delle precedenti -> richiede infatti IL-6"
      ],
      correctIndex: 4,
      rationale: "Corretto (E): Come ribadito formalmente nel quiz d'esame proiettato a lezione, la citochina induttrice primaria iniziale che innesca il programma Tfh e BCL6 è l'IL-6 (sebbene poi il Tfh maturo produca IL-21)."
    },
    {
      question: "5. I linfociti T del GALT: (Quesito Ufficiale Slide 20)",
      options: [
        "A) Ricircolano e fanno homing nel GALT poiché esprimono il CCR9 alfa4beta7",
        "B) Sono attratti nel GALT dalla chemochina CCL17",
        "C) Esprimono l'addressina MadCAM",
        "D) Hanno un fenotipo Th17",
        "E) Sono definiti IEL e si localizzano nelle Placche di Peyer"
      ],
      correctIndex: 0,
      rationale: "Corretto (A): La combinazione chemochinica/integrinica specifica per l'homing mucosale intestinale è il recettore CCR9 (per CCL25 epiteliale) e l'integrina α4β7 (il cui ligando sulle venule endoteliali è MAdCAM-1)."
    },
    {
      question: "6. Quale delle seguenti affermazioni a proposito della citochina IFN-γ non è corretta? (Quesito Ufficiale Slide 20)",
      options: [
        "A) È prodotta dai linfociti NK",
        "B) È prodotta dai linfociti T CD4 Th1",
        "C) È prodotta dai macrofagi",
        "D) Si lega a recettori specifici presenti sui macrofagi e li attiva",
        "E) Inibisce la differenziazione dei linfociti Th2"
      ],
      correctIndex: 2,
      rationale: "Corretto (C): I macrofagi NON producono IFN-γ; essi sono invece uno dei principali bersagli di IFN-γ (che li attiva per via classica a M1). L'IFN-γ è prodotto da NK, linfociti Th1 e T citotossici CD8+."
    },
    {
      question: "7. Quale citochina può indurre l'espressione di molecole di MHC di classe II nei macrofagi? (Quesito Ufficiale Slide 20)",
      options: [
        "A) IL-1",
        "B) IL-6",
        "C) IL-2",
        "D) IFN-γ",
        "E) IL-5"
      ],
      correctIndex: 3,
      rationale: "Corretto (D): L'interferone gamma (IFN-γ) è il più potente induttore dell'espressione di MHC di classe II e dei costimolatori B7 (CD80/CD86) sui macrofagi e cellule dendritiche, potenziandone la capacità di presentazione dell'antigene."
    },
    {
      question: "8. Se è stata attivata una risposta IgE-mediata, quali sono le citochine prodotte dai linfociti Th? (Quesito Ufficiale Slide 20)",
      options: [
        "A) IL-4 e IL-12",
        "B) IL-4 e IL-2",
        "C) IL-4 e TNF-β",
        "D) IL-2 e IL-6",
        "E) IL-4, IL-5, IL-13"
      ],
      correctIndex: 4,
      rationale: "Corretto (E): È la triade citochinica caratteristica del subset Th2: IL-4 (switch IgE e IgG4), IL-5 (differenziamento e attivazione eosinofili) e IL-13 (ipersecrezione di muco e motilità intestinale)."
    },
    {
      question: "9. Quale meccanismo recettoriale spiega l'azione immunosoppressoria di CTLA-4 espresso costitutivamente dai Treg?",
      options: [
        "A) Secrezione di perforina e granzimi contro i linfociti B",
        "B) Trans-endocitosi (rimozione fisica) di B7 dall'APC e blocco di IL-6 via FOXO3 / induzione di IDO",
        "C) Fosforilazione diretta del TCR con potenziamento della risposta T",
        "D) Conversione di TGF-β nella sua isoforma pro-infiammatoria",
        "E) Blocco irreversibile dei recettori CCR7 sui linfociti naive"
      ],
      correctIndex: 1,
      rationale: "Corretto (B): CTLA-4 ha affinità 20-100 volte superiore rispetto a CD28 per B7, 'strappa' e internalizza B7 dall'APC (trans-endocitosi), privando i T effettori del segnale 2. Inoltre innesca segnali intracellulari che attivano FOXO3 (inibisce IL-6) e IDO (degrada triptofano in chinurenina immunosoppressiva)."
    },
    {
      question: "10. In che modo il microbiota intestinale e la dieta cooperano nella generazione dei Treg inducibili (pTreg) nel colon?",
      options: [
        "A) Attraverso la produzione di IFN-γ da parte di batteri Gram-negativi",
        "B) I batteri anaerobi (Bacteroides) fermentano le fibre in SCFA (butirrato), che agiscono come inibitori di HDAC stabilizzando FOXP3",
        "C) Degradando completamente la vitamina A per impedire la formazione di acido retinoico",
        "D) Inducendo necrosi delle cellule M per liberare antigeni citoplasmatici",
        "E) Bloccando l'enzima RALDH nelle cellule dendritiche CD103+"
      ],
      correctIndex: 1,
      rationale: "Corretto (B): I batteri commensali anaerobi del colon fermentano le fibre alimentari in acidi grassi a catena corta (SCFAs: acetato, propionato e soprattutto butirrato). Il butirrato inibisce le istone deacetilasi (HDAC), favorendo l'acetilazione istonica al locus Foxp3 e promuovendone la stabilità trascrizionale."
    }
  ];

  return (
    <article className={`space-y-12 ${fontClass} ${sizeClass} text-slate-800`}>
      {/* Chapter Title & Academic Header */}
      <header className="border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 text-violet-800 border border-violet-200">
            Capitolo 19 · Differenziamento T & Homing
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 text-slate-700">
            Data: 12 Novembre 2025 (1ª e 2ª ora)
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            Prof.ssa Ricciarda Galandrini
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-50 text-amber-800 border border-amber-200">
            Premio Nobel Medicina 2025: FOXP3
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-serif-heading">
          Differenziamento dei Linfociti T (Th1, Th2, Th17, Tfh, Treg), Polarizzazione Macrofagica M1/M2, Tolleranza Mucosale & Homing Selettivo
        </h1>

        <p className="mt-4 text-base text-slate-600 leading-relaxed font-sans">
          Trattato monografico completo sul destino post-linfonodale dei linfociti T helper: dalla plasticità del lineage linfoide e i tre segnali di attivazione (con la genesi citochinica del 3° segnale), all'analisi molecolare dei programmi trascrizionali di <strong>Th1</strong> (T-bet, IFN-γ e macrofagi M1 con iNOS), <strong>Th2</strong> (allarmine TSLP/IL-33/IL-25, GATA3, IL-4/5/13 e macrofagi M2 con Arginasi-1 e PD-L2), <strong>Th17</strong> (RORγt, IL-17/IL-22 e neutrofili), <strong>Tfh</strong> (IL-6, BCL6, CXCR5 e centro germinativo), e <strong>Treg</strong> naturali vs periferici guidati da <strong>FOXP3</strong> (Premio Nobel 2025 Brunkow, Ramsdell, Sakaguchi). Studio approfondito della tolleranza mucosale nel GALT (cellule M, DC CD103+, vitamina A/acido retinoico RALDH, triptofano/AhR e fibre/SCFAs da microbiota), modello dell'equilibrio immunitario, codici molecolari di homing selettivo (asse α4β7/CCR9/MAdCAM-1 vs α4β1/CCR4/VCAM-1) e farmacologia clinica dell'anticorpo monoclonale <strong>Natalizumab</strong> nella Sclerosi Multipla.
        </p>

        {/* Metadocument Details */}
        <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 font-sans gap-3">
          <div className="flex items-center gap-2">
            <Microscope className="w-4 h-4 text-violet-600" />
            <span><strong>Sbobinatori:</strong> Alessandro Bartone (1ª ora), Alessia Cogno (2ª ora)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span><strong>Revisori:</strong> Alessio Cialone (1ª ora), Silvia Bini (2ª ora)</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-blue-600" />
            <span><strong>Focus Clinico:</strong> Granulomi TBC/Sarcoidosi, Diabete T1, Allergie, M1 vs M2, Tolleranza Orale, Natalizumab & Sclerosi Multipla</span>
          </div>
        </div>
      </header>

      {/* 19.1 Plasticità del Lineage Linfoide */}
      <section id="sec-19-1" className="space-y-4">
        <div className="flex items-center gap-2 text-violet-700">
          <Compass className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            19.1 Plasticità del Lineage Linfoide & Destino del Linfocita T Attivato (Th0)
          </h2>
        </div>

        <p>
          Il percorso biologico di un linfocita T rappresenta uno dei più affascinanti paradigmi di progressiva <em>restrizione differenziativa</em> accoppiata a una <strong>persistente plasticità funzionale</strong>. Nel midollo osseo, a livello della cellula staminale ematopoietica totipotente e del progenitore linfoide comune (CLP), la plasticità epigenetica è massima. Man mano che i precursori migrano e subiscono il condizionamento dei microambienti primari, questa plasticità si restringe: prima avviene l'impegno esclusivo verso il lineage T o B (guidato da Notch1 e GATA-3), poi nel timo la scelta tra recettore γδ e αβ, e infine la selezione positivo-negativa che restringe il repertorio in cellule mature naive single-positive <strong>CD4+</strong> o <strong>CD8+</strong>.
        </p>

        <p>
          Tuttavia, quando il linfocita T CD4+ naive lascia il timo e colonizza gli organi linfoidi secondari (linfonodi e milza), esso non possiede ancora un programma funzionale rigido né un profilo di citochine effettrici predeterminato: viene definito <strong>Linfocita Th0</strong>. La plasticità permane ad alti livelli: sotto la spinta dell'incontro con l'antigene e delle citochine ambientali, il Th0 può intraprendere strade divergenti differenziandosi in <strong>Th1, Th2, Th17, Tfh</strong> o <strong>Treg inducibili</strong>.
        </p>

        <div className="p-4 rounded-xl bg-violet-50/70 border border-violet-200">
          <h4 className="font-bold text-violet-900 text-sm flex items-center gap-2 mb-2 font-sans">
            <Sparkles className="w-4 h-4 text-violet-700" />
            Il Concetto Moderno di Plasticità Effettrice in Periferia
          </h4>
          <p className="text-xs text-violet-950 leading-relaxed font-sans m-0">
            Come ha sottolineato con enfasi la docente, anche una volta che il linfocita è diventato effettore maturo e ha raggiunto i tessuti periferici extravascolari, la plasticità <strong>non è affatto persa del tutto</strong>. In condizioni infiammatorie mutevoli, i linfociti possono "ri-orientarsi" (fenomeno di <em>lineage reprogramming</em> o transdifferenziamento: es. Th17 che acquisiscono un fenotipo Th1-like 'non-classico' secernente sia IL-17 che IFN-γ, oppure Treg che perdono FOXP3 in ambienti fortemente infiammati diventando Th17 autoreattivi). Questa dinamicità è governata dalla competizione diretta tra fattori di trascrizione nucleari e modificazioni cromatiniche (metilazione/acetilazione di promotori ed enhancer).
          </p>
        </div>
      </section>

      {/* 19.2 I Tre Segnali di Attivazione e Decisione */}
      <section id="sec-19-2" className="space-y-4">
        <div className="flex items-center gap-2 text-violet-700">
          <Zap className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            19.2 L'Evento Decisionale: I Tre Segnali e l'Origine del 3° Segnale Citochinico
          </h2>
        </div>

        <p>
          Il destino di polarizzazione di un linfocita T naive nei linfonodi non è casuale, ma è rigidamente codificato dall'integrazione di <strong>tre segnali sequenziali</strong> scambiati durante la formazione della sinapsi immunologica con la cellula presentante l'antigene (APC professionale, in primis la cellula dendritica convenzionale cDC1 o cDC2):
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center mb-2">1</div>
            <strong className="text-slate-900 block text-sm mb-1">Segnale 1: Specificità</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Interazione stereospecifica tra il <strong>TCR</strong> (e corecettore CD4) e il complesso <strong>MHC-II : Peptide</strong>. Conferisce la specificità clonale e innesca la cascata di fosforilazione di CD3/ITAM (Lck, ZAP-70).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 font-bold flex items-center justify-center mb-2">2</div>
            <strong className="text-slate-900 block text-sm mb-1">Segnale 2: Costimolazione</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Legame tra <strong>CD28</strong> (costitutivo sul T naive) e i ligandi costimolatori <strong>B7-1 (CD80)</strong> e <strong>B7-2 (CD86)</strong> upregolati sull'APC matura. Assicura sopravvivenza, proliferazione autocrina via IL-2/CD25 e previene l'anergia.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-700 font-bold flex items-center justify-center mb-2">3</div>
            <strong className="text-slate-900 block text-sm mb-1">Segnale 3: Polarizzazione</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Microambiente citochinico che istruisce il T naive sul tipo di effettore da diventare (Th1, Th2, Th17, Tfh, Treg). È la traduzione molecolare del tipo di patogeno rilevato originariamente dai PRR tissutali.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-6">
          Da Dove Origina il 3° Segnale?
        </h3>
        <p>
          La professoressa chiarisce che la produzione del terzo segnale non è un evento isolato della sola cellula dendritica, bensì un mosaico derivante da tre distinte sorgenti cellulari coordinate:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>
            <strong>Dalla cellula dendritica stessa</strong>: l'eterogeneità funzionale (cDC1 specializzate nella produzione di IL-12 per virus/batteri intracellulari vs cDC2 che producono IL-6/IL-23 per funghi/batteri extracellulari) viene attivata da combinazioni distinte di <em>PRR</em> (TLR di membrana ed endosomiali, recettori NLR e CLR).
          </li>
          <li>
            <strong>Da altre cellule del sistema immunitario innato</strong>: in particolare le <em>ILC</em> (cellule linfoidi innate ILC1, ILC2, ILC3 che rilasciano precocemente citochine omologhe nei tessuti), le cellule dendritiche plasmocitoidi (pDC, grandi produttrici di IFN-I), mastociti e basofili (fonti di IL-4 periferica).
          </li>
          <li>
            <strong>Da cellule non immunitarie (Epiteliali e Stromali)</strong>: in caso di danno o stimolo allergenico/elmintico, gli epiteli rilasciano allarmine solubili (TSLP, IL-33, IL-25) che condizionano a monte la cellula dendritica a non produrre IL-12.
          </li>
        </ul>
      </section>

      {/* 19.3 Linfociti Tfh & Centro Germinativo */}
      <section id="sec-19-3" className="space-y-4">
        <div className="flex items-center gap-2 text-violet-700">
          <Target className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            19.3 Linfociti T Helper Follicolari (Tfh): Asse IL-6, BCL6 e Migrazione CXCR5 al Centro Germinativo
          </h2>
        </div>

        <p>
          Una sottopopolazione effettrice essenziale per l'immunità umorale a lungo termine è rappresentata dai <strong>Linfociti T Helper Follicolari (Tfh)</strong>. Come formalizzato anche nel quiz d'esame della lezione, il segnale iniziale decisivo per istruire il CD4+ verso il programma Tfh è l'<strong>Interleuchina-6 (IL-6)</strong> prodotta dalle cDC attivate nella zona corticale dei linfonodi (con il successivo contributo autocrino di <strong>IL-21</strong>).
        </p>

        <p>
          La stimolazione con IL-6 induce una fondamentale riprogrammazione recettoriale e migratoria:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">1. Spegnimento di CCR7 & Accensione di CXCR5</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Il linfocita T attivato <strong>perde il recettore CCR7</strong> (che legava CCL19/CCL21 trattenendolo nella T-cell zone para-corticale) e <strong>upregola CXCR5</strong>, il cui ligando <strong>CXCL13</strong> è prodotto in abbondanza dalle cellule dendritiche follicolari (FDC) nei follicoli linfatici B. Questo gradiente chemiotattico attrae il Tfh verso il confine della zona marginale follicolare.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">2. Attivazione del Master Regulator BCL6</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Il fattore di trascrizione <strong>BCL6</strong> agisce come repressore selettivo di tutti gli altri programmi effettori (reprime T-bet, GATA3, RORγt e Blimp-1), bloccando il destino migrante verso i tessuti periferici e confinando stabilmente la cellula nel follicolo linfonodale.
            </p>
          </div>
        </div>

        <p>
          Al confine follicolare, il pre-Tfh incontra il linfocita B che ha internalizzato e processato il medesimo antigene (<em>linked recognition</em>). Attraverso il contatto diretto mediato da <strong>CD40-Ligando (CD40L : CD40)</strong> e <strong>ICOS (ICOS : ICOSL)</strong>, e la produzione massiva di <strong>IL-21</strong> e <strong>IL-4</strong>, il Tfh orchestra tutti i processi cardinali della reazione del centro germinativo nella zona chiara:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
          <li><strong>Ipermutazione somatica (SHM)</strong> mediata dall'enzima AID sui geni immunoglobulinici della regione variabile.</li>
          <li><strong>Maturazione dell'affinità</strong> tramite selezione darwiniana competitiva per l'antigene esposto sulla superficie delle FDC.</li>
          <li><strong>Scambio isotipico (CSR)</strong> verso IgG, IgA o IgE in base al profilo citochinico.</li>
          <li>Differenziamento finale in <strong>plasmacellule a lunga sopravvivenza (LLPC)</strong> midollari e <strong>linfociti B di memoria</strong>.</li>
        </ul>
      </section>

      {/* 19.4 Linfociti Th1 & Macrofagi M1 */}
      <section id="sec-19-4" className="space-y-4">
        <div className="flex items-center gap-2 text-violet-700">
          <Flame className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            19.4 Linfociti Th1: IL-12, STAT4, T-bet, Pleiotropismo di IFN-γ e Macrofagi M1
          </h2>
        </div>

        <p>
          I linfociti <strong>Th1</strong> sono i protagonisti indiscussi della <strong>Risposta di Tipo I</strong>, deputata alla neutralizzazione e distruzione di virus e batteri intracellulari (quali <em>Mycobacterium tuberculosis</em>, <em>Mycobacterium leprae</em>, <em>Listeria monocytogenes</em>, <em>Leishmania</em>).
        </p>

        <p>
          Il differenziamento Th1 richiede l'ingaggio da parte di batteri/virus sui recettori TLR delle cellule dendritiche cDC1 (es. TLR3, TLR4, TLR9), che secernono grandi quantità di <strong>Interleuchina-12 (IL-12)</strong>. L'IL-12 lega il suo recettore eterodimerico sul T naive attivando la chinasi Jak2/Tyk2 e fosforilando <strong>STAT4</strong>. Concomitantemente, l'IFN-γ precoce (rilasciato dalle cellule NK dell'immunità innata) attiva <strong>STAT1</strong>. L'azione concertata di STAT1 e STAT4 accende il master transcription factor <strong>T-bet</strong>. T-bet apre epigeneticamente il locus del gene dell'<strong>Interferone-γ (IFN-γ)</strong> e contemporaneamente reprime i loci di GATA3 e RORγt, bloccando lo sviluppo verso Th2 e Th17.
        </p>

        {/* Pleiotropismo di IFN-gamma */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <h4 className="font-bold text-slate-900 text-sm mb-2 font-sans flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-violet-600" />
            Il Pleiotropismo Funzionale di IFN-γ: Bersagli Multipli
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-sans mb-3">
            Come illustrato nella classica figura didattica analizzata dalla professoressa (Kuby Immunology, slide 5), l'IFN-γ agisce in modo pleiotropico su plurimi bersagli cellulari:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-sans">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-blue-900 block mb-1">Macrofagi (M1)</strong>
              <span>Attivazione per via classica: ↑ uccisione microbicida (ROS, NO), ↑ MHC-II, ↑ B7-1/B7-2, ↑ TNF-α, IL-1, IL-12.</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-emerald-900 block mb-1">Cellule B</strong>
              <span>Scambio isotipico verso anticorpi opsonizzanti e fissanti il complemento: <strong>↑ IgG1 e IgG3</strong> (↓ IgE e IgG4).</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-purple-900 block mb-1">Linfociti NK & CD8+</strong>
              <span>Potenziamento dell'attività citotossica, degranulazione di perforina/granzimi e secrezione autocrina di citochine.</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-rose-900 block mb-1">Inibizione Th2</strong>
              <span>Blocco diretto della proliferazione dei precursori Th2 e spegnimento della sintesi di IL-4 e IL-5 (inibizione crociata).</span>
            </div>
          </div>
        </div>

        {/* Attivazione M1 e Metabolismo dell'Ossido Nitrico */}
        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs font-sans">
          <h4 className="font-bold text-amber-950 text-sm flex items-center gap-2 mb-1.5">
            <Activity className="w-4 h-4 text-amber-700" />
            Biochimica dell'Attivazione Classica (M1): L'Asse iNOS / Ossido Nitrico
          </h4>
          <p className="text-amber-900 leading-relaxed m-0">
            L'interazione tra Th1 (tramite IFN-γ e ligando costimolatorio CD40L) e il recettore CD40 sui macrofagi induce l'enzima citosolico <strong>ossido nitrico sintasi inducibile (iNOS o NOS2)</strong>. Questo enzima utilizza l'amminoacido <strong>L-arginina</strong> e ossigeno molecolare convertendoli in <strong>Ossido Nitrico (NO) e L-citrullina</strong>. L'ossido nitrico, combinandosi con il radicale superossido (anione superossido O₂•⁻ generato dalla NADPH ossidasi), forma <strong>perossinitrito (ONOO⁻)</strong>, un agente nitrante e ossidante ad altissima reattività in grado di provocare la lisi letale dei microrganismi intrappolati nel fagolisosoma.
          </p>
        </div>

        {/* Immunopatologia Th1: Granulomi, Sarcoidosi e Diabete Mellito Tipo 1 */}
        <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 space-y-2 text-xs font-sans">
          <h4 className="font-bold text-rose-950 text-sm flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            Immunopatologia da Eccesso di Risposta Th1: Granulomi e Autoimmunità Organo-Specifica
          </h4>
          <p className="text-rose-900 leading-relaxed m-0">
            Quando un patogeno intracellulare resiste alla digestione lisosomiale (es. la capsula ricca di acidi micolici di <em>Mycobacterium tuberculosis</em> o <em>M. leprae</em>), la continua secrezione di IFN-γ da parte dei Th1 instaura una reazione infiammatoria cronica esasperata. I macrofagi iperattivati si fondono e degenerano, originando il reperto anatomopatologico del <strong>granuloma tubercolare</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-rose-950">
            <li><strong>Cellule Epitelioidi</strong>: macrofagi modificati con abbondante citoplasma eosinofilo e interdigitazioni membranose serrate che formano un vallo contenitivo.</li>
            <li><strong>Cellule Giganti Plurinucleate (di Langhans)</strong>: sincizi derivanti dalla fusione di decine di macrofagi, con nuclei disposti a ferro di cavallo alla periferia.</li>
            <li><strong>Necrosi Caseosa Centrale</strong>: distruzione ischemica e tossica delle cellule centrali del granuloma.</li>
            <li><strong>Sarcoidosi</strong>: patologia sistemica idiopatica caratterizzata dalla formazione di granulomi non-caseosi mediati da una risposta Th1/IFN-γ iperattiva nei polmoni e linfonodi ilari.</li>
            <li>
              <strong>Diabete Mellito Tipo 1 (Insulino-Dipendente)</strong>: classica malattia autoimmune organo-specifica in cui Th1 autoreattivi infiltrano le isole di Langerhans pancreatiche (<em>insulite</em>). Come illustrato nella lezione mediante l'esperimento del <em>topo transgenico</em> (slide 8), l'inserimento di un transgene codificante IFN-γ sotto il controllo del promotore dell'insulina porta le cellule beta a secernere IFN-γ locale; ciò basta a provocare un massivo reclutamento macrofagico, lisi delle cellule produttrici di insulina e insorgenza spontanea di diabete conclamato.
            </li>
          </ul>
        </div>
      </section>

      {/* 19.5 Linfociti Th2 & Allarmine Epiteliali */}
      <section id="sec-19-5" className="space-y-4">
        <div className="flex items-center gap-2 text-violet-700">
          <ShieldAlert className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            19.5 Linfociti Th2: Allarmine Epiteliali (TSLP, IL-33, IL-25), GATA3, Eosinofili e Asse IgE
          </h2>
        </div>

        <p>
          La <strong>Risposta di Tipo II</strong> è evolutivamente dedicata alla difesa contro parassiti pluricellulari voluminosi non fagocitabili (<strong>Elminti</strong>: nematodi, cestodi, trematodi) e costituisce il substrato patogenetico delle <strong>reazioni allergiche atopiche</strong> (asma bronchiale, rinite allergica, dermatite atopica, anafilassi).
        </p>

        <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-4">
          Il Paradosso del 3° Segnale: Perché "Manca" il 3° Segnale Classico della DC?
        </h3>
        <p>
          La professoressa chiarisce un concetto cardine: nelle infezioni da elminti o esposizione ad allergeni, la cellula dendritica <strong>NON produce IL-12</strong>. Come mai? Perché il microambiente è dominato da fattori secreti dalle <em>cellule epiteliali di rivestimento danneggiate</em>, definite <strong>allarmine epiteliali</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">1. TSLP (Thymic Stromal Lymphopoietin)</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Prodotta dall'epitelio barriera stimolato da proteasi parassitarie. Agisce sul recettore TSLPR espresso dalla DC, <strong>inibendo selettivamente la sintesi di IL-12</strong>. La DC presenta l'antigene senza poter dare il 3° segnale Th1.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">2. IL-25 (Interleuchina-25 / IL-17E)</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Secreta dall'epitelio mucosale, lega il recettore IL-17RB sulle <strong>ILC2 (Innate Lymphoid Cells di tipo 2)</strong>, inducendole a produrre precocemente elevate quantità di <strong>IL-4</strong> e IL-13 nel tessuto.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">3. IL-33 (Allarmina Nucleare)</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Rilasciata dall'epitelio necrotico/danneggiato, lega il recettore ST2 su <strong>basofili e mastociti</strong> tissutali, inducendo un'ulteriore ondata precoce di <strong>IL-4</strong> indipendente dal TCR.
            </p>
          </div>
        </div>

        <p>
          In virtù dell'<strong>assenza di IL-12</strong> combinata alla <strong>presenza di IL-4</strong> ambientale, il linfocita T naive attiva la cascata <strong>STAT6</strong>, che upregola il master regulator <strong>GATA3</strong>. GATA3 stabilizza il fenotipo Th2 e induce la produzione coordinata della triade citochinica effettrice:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>
            <strong>Interleuchina-4 (IL-4)</strong>: agisce sui linfociti B inducendo il cambio isotipico verso <strong>IgE</strong> e <strong>IgG4</strong>. Le IgE circolanti si legano con altissima affinità (Ka ≈ 10¹⁰ M⁻¹) al recettore <strong>FcεRI</strong> espresso costitutivamente su mastociti, basofili ed eosinofili attivati. Il successivo cross-linking multivalente ad opera dell'antigene/elminta provoca la degranulazione fulminea di istamina, leucotrieni (LTC4, LTD4) e prostaglandine.
          </li>
          <li>
            <strong>Interleuchina-5 (IL-5)</strong>: principale fattore di crescita, sopravvivenza e differenziamento dei <strong>granulociti eosinofili</strong> nel midollo osseo. Induce l'<em>eosinofilia</em> periferica tipica delle elmintiasi. Gli eosinofili, guidati dalle IgE legate alla cuticola dell'elminta, si attivano tramite FcεRI e degranulano enzimi citotossici (Proteina Basica Maggiore MBP, Proteina Cationica degli Eosinofili ECP, Perossidasi Eosinofila EPO) perforando e lisando il parassita (meccanismo di <strong>ADCC mediata da eosinofili</strong>).
          </li>
          <li>
            <strong>Interleuchina-13 (IL-13)</strong>: agisce in stretta sinergia con IL-4 sulle cellule caliciformi mucipare inducendo <em>ipersecrezione di muco</em> e sulla muscolatura liscia viscerale aumentando la <em>peristalsi intestinale</em> (meccanismo <strong>weep and sweep</strong> per l'espulsione fisica dei vermi intestinali). Inoltre, IL-13 e IL-4 sono i mediatori chiave dell'attivazione alternativa dei macrofagi M2.
          </li>
        </ul>

        {/* Schema Comparativo: I Quattro Destini Polarizzanti Th */}
        <ConceptMapFlow {...MAP_LEZIONE_19_TH_POLARIZATION} />
      </section>

      {/* 19.6 Macrofagi M1 vs M2 */}
      <section id="sec-19-6" className="space-y-4">
        <div className="flex items-center gap-2 text-violet-700">
          <Shuffle className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            19.6 Attivazione Alternativa dei Macrofagi: Fenotipo M2, Metabolismo dell'Arginasi 1 e Checkpoint PD-L2
          </h2>
        </div>

        <p>
          Mentre l'asse Th1/IFN-γ stimola la via classica dei macrofagi (M1), le citochine Th2 <strong>IL-4</strong> e <strong>IL-13</strong> promuovono la <strong>polarizzazione alternativa verso macrofagi M2</strong>. Come ampiamente dettagliato nella seconda ora della lezione, i macrofagi M2 rappresentano un'entità cellulare con proprietà biologiche diametralmente opposte rispetto agli M1:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
            <h4 className="font-bold text-blue-900 text-sm mb-2 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-blue-700" />
              Macrofago M1 (Attivazione Classica)
            </h4>
            <ul className="space-y-1.5 text-blue-950">
              <li><strong>Induttori:</strong> IFN-γ, LPS batterico, TNF-α.</li>
              <li><strong>Metabolismo Arginina:</strong> <em>iNOS (NOS2)</em> → <strong>Ossido Nitrico (NO) + Citrullina</strong>.</li>
              <li><strong>Funzioni:</strong> Fagocitosi battericida, citotossicità antitumorale, produzione di ROS.</li>
              <li><strong>Citochine Secrete:</strong> TNF-α, IL-1, IL-6, IL-12, CXCL10.</li>
              <li><strong>Marcatori Superficie:</strong> Alti livelli di HLA-DR, CD80, CD86 (presentazione antigene amplificata).</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
            <h4 className="font-bold text-amber-900 text-sm mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              Macrofago M2 (Attivazione Alternativa)
            </h4>
            <ul className="space-y-1.5 text-amber-950">
              <li><strong>Induttori:</strong> IL-4, IL-13 (anche IL-10, TGF-β).</li>
              <li><strong>Metabolismo Arginina:</strong> <em>Arginasi 1 (Arg1)</em> → <strong>L-Ornitina + Urea</strong> (precursori di poliamine e prolina per collagene).</li>
              <li><strong>Funzioni:</strong> Rimaneggiamento tissutale, sintesi matrice extracellulare, guarigione ferite, angiogenesi. <em>Privi di potere microbicida e NO/ROS</em>.</li>
              <li><strong>Fattori Secreti:</strong> Metalloproteasi (MMP), EGF, VEGF, TGF-β, IL-10.</li>
              <li><strong>Marcatori & Checkpoint:</strong> CD206 (Mannose Receptor), Dectin-1, <strong>PD-L2 (e PD-L1)</strong>.</li>
            </ul>
          </div>
        </div>

        {/* Focus Clinico PD-L2 ed Evasione Tumorale */}
        <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 text-xs font-sans space-y-2">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Pill className="w-4 h-4 text-violet-700" />
            Il Paradosso M2: Guarigione Tissutale vs Promozione Tumorale e Metastasi
          </h4>
          <p className="text-slate-700 leading-relaxed m-0">
            I macrofagi M2 sono fisiologicamente indispensabili nella fase di risoluzione dell'infiammazione: bloccano il danno tissutale, favoriscono la deposizione di collagene e stimolano la neo-vascolarizzazione. Tuttavia, in oncologia rappresentano un'arma a doppio taglio: reclutati all'interno dello stroma tumorale come <strong>TAM (Tumor-Associated Macrophages)</strong> con fenotipo M2-like, promuovono la crescita neoplastica e la metastatizzazione (rilascio di EGF, VEGF ed enzimi litici come le MMP che degradano la matrice consentendo l'invasione vascolare).
          </p>
          <p className="text-slate-700 leading-relaxed m-0">
            Inoltre, gli M2 esercitano una potente <strong>immunosoppressione locale</strong>: esprimono elevati livelli di <strong>PD-L2</strong> (e PD-L1). Quando un linfocita T citotossico riconosce la cellula neoplastica ma incontra il ligando PD-L2 sul macrofago M2, il recettore inibitorio <strong>PD-1</strong> viene fosforilato, trasducendo un potente segnale di de-attivazione cellulare che conduce il linfocita T all'<em>anergia o all'esaurimento funzionale (exhaustion)</em>.
          </p>
        </div>

        {/* Bivio Cellulare: Macrofagi M1 vs M2 */}
        <ConceptMapFlow {...MAP_LEZIONE_19_M1_VS_M2_MACROPHAGES} />
      </section>

      {/* 19.7 Linfociti Th17 */}
      <section id="sec-19-7" className="space-y-4">
        <div className="flex items-center gap-2 text-violet-700">
          <Activity className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            19.7 Linfociti Th17: Asse IL-6 / IL-23, RORγt, Sinergia con Neutrofili (IL-17) e Difesa Epiteliale (IL-22)
          </h2>
        </div>

        <p>
          La <strong>Risposta di Tipo III</strong> è guidata dai linfociti <strong>Th17</strong> ed è indispensabile per la protezione mucosale e cutanea contro infezioni da <strong>funghi patogeni</strong> (quali <em>Candida albicans</em>, <em>Aspergillus</em>) e <strong>batteri extracellulari</strong> piogenici (<em>Staphylococcus aureus</em>, <em>Klebsiella pneumoniae</em>, <em>Pseudomonas aeruginosa</em>).
        </p>

        <p>
          La cellula dendritica stimolata da funghi o batteri (tramite CLR come Dectina-1 o TLR) secerne una miscela citochinica composta da <strong>IL-6</strong>, <strong>IL-1β</strong> e <strong>IL-23</strong>, in presenza di TGF-β. Questa combinazione attiva <strong>STAT3</strong>, che induce l'espressione del fattore di trascrizione nucleare maestro <strong>RORγt</strong> (retinoid-related orphan receptor gamma-t).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <strong className="text-slate-900 block text-sm mb-1">Interleuchina-17 (IL-17A e IL-17F)</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Agisce su cellule stromali, fibroblasti ed endoteli inducendo una massiccia produzione di fattori mielopoietici (<strong>G-CSF</strong>) e chemochine attraenti i neutrofili (<strong>CXCL1, CXCL2, CXCL8 / IL-8</strong>). Agendo in <em>sinergia stretta con il TNF-α</em>, l'IL-17 guida il reclutamento tempestivo, l'extravasazione, l'attivazione microbicida e prolunga la sopravvivenza tissutale dei <strong>granulociti neutrofili</strong> nel focolaio infettivo.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <strong className="text-slate-900 block text-sm mb-1">Interleuchina-22 (IL-22)</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Il recettore IL-22R1 è espresso selettivamente sulle <strong>cellule epiteliali</strong> di rivestimento mucoso e cutaneo (non sui leucociti). IL-22 promuove l'integrità giunzionale dell'epitelio, stimola il turnover e la rigenerazione delle cellule staminali della cripta, e induce la sintesi di potenti <strong>peptidi antimicrobici</strong> endogeni (defensine β, calprotectina S100A8/A9, lectina RegIIIγ).
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 text-xs font-sans">
          <strong className="text-rose-950 block text-sm mb-1 font-bold">Th17 e Patologie Autoimmuni Infiammatorie Croniche</strong>
          <p className="text-rose-900 m-0 leading-relaxed">
            Se non adeguatamente controllata dai Treg, la prolungata attivazione dell'asse Th17 è la principale responsabile del danno infiammatorio cronico distruttivo in molteplici patologie autoimmuni: <strong>Artrite Reumatoide</strong> (distruzione osteocartilaginea sinoviale indotta dai neutrofili e RANKL), <strong>Psoriasi volgare</strong> (iperproliferazione epidermica e placche cheratosiche bersagliate con anticorpi monoclonali anti-IL-17 come Secukinumab o anti-IL-23 come Ustekinumab/Guselkumab), e <strong>Malattie Infiammatorie Croniche Intestinali (IBD)</strong>.
          </p>
        </div>
      </section>

      {/* 19.8 Linfociti Treg & FOXP3 Nobel 2025 */}
      <section id="sec-19-8" className="space-y-4">
        <div className="flex items-center gap-2 text-violet-700">
          <Award className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            19.8 Linfociti T Regolatori (Treg), il Fattore FOXP3 (Premio Nobel Medicina 2025) & Meccanismi Soppressori
          </h2>
        </div>

        {/* Nobel Box 2025 */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-l-4 border-amber-500 text-xs font-sans">
          <div className="flex items-center gap-2 mb-1.5">
            <Award className="w-5 h-5 text-amber-600 shrink-0" />
            <h4 className="font-bold text-amber-950 text-sm m-0">
              Pietra Miliare: Il Premio Nobel per la Fisiologia o la Medicina 2025
            </h4>
          </div>
          <p className="text-amber-900 leading-relaxed m-0">
            Come formalmente evidenziato nella sbobina della professoressa Galandrini (slide 13), il <strong>Premio Nobel per la Medicina 2025</strong> è stato conferito a <strong>Mary Brunkow, Fred Ramsdell e Shimon Sakaguchi</strong>. Le loro scoperte pionieristiche hanno identificato il gene e il fattore di trascrizione <strong>FOXP3</strong> (<em>Forkhead Box P3</em>) come l'interruttore genetico indispensabile per lo sviluppo e il funzionamento biologico dei linfociti T regolatori. Nell'uomo, mutazioni con perdita di funzione di FOXP3 provocano la letale <strong>Sindrome IPEX</strong> (<em>Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked</em>), con distruzione autoimmune massiva multitissutale precoce.
          </p>
        </div>

        <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-4">
          Due Origini Distinte: Treg Naturali (tTreg) vs Treg Inducibili (pTreg)
        </h3>
        <p>
          I linfociti Treg non costituiscono una popolazione uniforme, ma si dividono in due sottoclassi a seconda del sito anatomico di istruzione:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">1. Treg Naturali o Centrali (tTreg)</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Originano direttamente nella midollare del <strong>timo</strong> durante il processo di selezione negativa. Timociti con recettore TCR ad affinità intermedia (troppo alta per la sopravvivenza convenzionale ma non sufficiente a indurre apoptosi clonale massiva) vengono salvati e programmati stabilmente ad esprimere CD25 e FOXP3. Sono fisiologicamente autoreattivi e presidiano la <em>tolleranza centrale periferica</em> contro i tessuti self.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">2. Treg Inducibili o Periferici (pTreg / iTreg)</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Originano in <strong>periferia</strong> a partire da linfociti T CD4+ naive maturi in seguito a stimolazione antigenica in ambienti non-infiammatori o tolerogenici dominati da <strong>TGF-β</strong> e <strong>Acido Retinoico</strong> (soprattutto a livello del MALT intestinale). Presidiano l'<em>omeostasi mucosale</em> contro antigeni della dieta e del microbiota.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-4">
          I Due Meccanismi Soppressori Cardinali dei Treg
        </h3>
        <p>
          Sia i tTreg che i pTreg spengono la risposta immunitaria effettrice tramite un duplice binario operativo:
        </p>

        <div className="space-y-3 font-sans text-xs">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <strong className="text-slate-900 block text-sm mb-1">1. Secrezione di Citochine Immunosoppressorie: IL-10 e TGF-β</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              I Treg secernono elevate quantità di <strong>Interleuchina-10 (IL-10)</strong> e <strong>TGF-β</strong>. Queste citochine agiscono sia sulle cellule dendritiche (riducendo drasticamente l'espressione di MHC-II e dei costimolatori B7 e bloccando la produzione di IL-12 e IL-6) sia direttamente sui linfociti T effettori (inibendone il ciclo cellulare e la produzione di citochine pro-infiammatorie).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <strong className="text-slate-900 block text-sm mb-1">2. Contatto Intercellulare & CTLA-4 Costitutivo: Trans-Endocitosi, FOXO3 e IDO</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              A differenza dei T convenzionali (che esprimono CTLA-4 solo transitoriamente giorni dopo l'attivazione), i Treg esprimono <strong>CTLA-4 in modo costitutivo</strong> sulla loro membrana plasmatica. L'azione di CTLA-4 si articola in tre livelli molecolari avanzati illustrati dalla docente:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-slate-700">
              <li>
                <strong>Sottrazione Competitiva e Trans-Endocitosi</strong>: CTLA-4 lega B7-1 e B7-2 con affinità da 20 a 100 volte superiore rispetto a CD28. Inoltre, il legame induce la rottura fisica del legame con l'APC e l'internalizzazione del complesso (<em>trans-endocitosi</em> o trogocitosi mediata da CTLA-4), "spogliando" e impoverendo la cellula dendritica dei suoi ligandi costimolatori. Senza B7, nessun altro T naive può essere attivato.
              </li>
              <li>
                <strong>Attivazione del Pathway Trascrizionale FOXO3</strong>: il contatto retrogrado di CTLA-4 sulla cellula dendritica attiva il fattore trascrizionale <strong>FOXO3</strong>, che agisce come repressore selettivo della trascrizione del gene di <strong>IL-6</strong>, bloccando lo sviluppo di risposte Th17 infiammatorie.
              </li>
              <li>
                <strong>Induzione Enzimatica di IDO (Indoleamina 2,3-diossigenasi)</strong>: la stimolazione delle molecole B7 da parte di CTLA-4 induce nell'APC l'enzima IDO. IDO catalizza la degradazione locale del <strong>triptofano</strong> (amminoacido essenziale per la sintesi proteica e la divisione dei T effettori) in <strong>chinurenina</strong>. La deplezione di triptofano attiva il sensore di stress metabolico GCN2 arrestando i T in fase G1, mentre la chinurenina si lega al recettore AhR promuovendo ulteriore differenziamento tolerogenico di Treg.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 19.9 Tolleranza Mucosale nel GALT */}
      <section id="sec-19-9" className="space-y-4">
        <div className="flex items-center gap-2 text-violet-700">
          <Layers className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            19.9 Tolleranza Mucosale nel GALT: Cellule M, Cellule Dendritiche CD103+, Acido Retinoico e Microbiota
          </h2>
        </div>

        <p>
          Il tratto gastrointestinale costituisce la più estesa interfaccia con il mondo esterno del corpo umano (~300 m²). Ogni giorno è bombardato da centinaia di grammi di proteine alimentari eterologhe e ospita oltre 500 specie di microrganismi commensali (10¹³ - 10¹⁴ cellule batteriche nel <strong>microbiota</strong>). In questo contesto, scatenare una reazione immunitaria classica provocherebbe la distruzione irreversibile dell'organo (come accade nelle <em>Malattie Infammatorie Croniche Intestinali</em>: Morbo di Crohn e Rettocolite Ulcerosa). L'immunità mucosale del <strong>GALT</strong> (tessuto linfoide associato all'intestino: placche di Peyer, follicoli isolati e linfonodi mesenterici) è pertanto permanentemente sbilanciata verso l'<strong>induzione attiva di soppressione e anergia (tolleranza orale)</strong>.
        </p>

        <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-4">
          La Staffetta di Campionamento dell'Antigene nel Lume
        </h3>
        <p>
          Il campionamento degli antigeni luminali avviene attraverso due modalità altamente specializzate:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">1. Cellule M (Microfold Cells)</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Cellule epiteliali specializzate prive di microvilli e glicocalice spesso, situate nell'epitelio associato ai follicoli (FAE) delle <strong>Placche di Peyer</strong>. Formano profondi avvallamenti basolaterali contenenti linfociti e DC. Le cellule M effettuano una continua <em>transcitosi apicale-basolaterale</em> di antigeni particolati, virus e batteri intatti, riversandoli direttamente alle cellule dendritiche sottostanti.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">2. Macrofagi CX₃CR1⁺ con Protrusioni Trans-Epiteliali</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Macrofagi residenti nella lamina propria che estendono pseudopodi (digitazioni) direttamente attraverso le giunzioni serrate dell'epitelio fino al lume intestinale senza alterare la permeabilità di barriera, campionando direttamente antigeni solubili e batteri e trasferendoli alle cDC.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-4">
          Le Cellule Dendritiche CD103⁺ & l'Enzima RALDH: La Sintesi di Acido Retinoico
        </h3>
        <p>
          Il ruolo biologico cardinale nel condizionamento dei pTreg è svolto dalla sottopopolazione di <strong>cellule dendritiche CD103⁺</strong> della lamina propria e dei linfonodi mesenterici.
        </p>
        <p>
          La vitamina A introdotta con la dieta (carotenoidi vegetali o retinolo animale) viene assorbita nell'intestino tenue, stoccata nel fegato e secreta nella bile sotto forma di retinolo. All'interno della mucosa intestinale, tre tipi cellulari (le <strong>DC CD103⁺</strong>, le <strong>cellule epiteliali</strong> e le <strong>cellule stromali</strong>) esprimono l'enzima chiave <strong>RALDH (retinal dehydrogenase)</strong>. La RALDH ossida il retinale in <strong>Acido Retinoico (RA)</strong>.
        </p>

        <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs font-sans">
          <strong className="text-emerald-950 block text-sm mb-1 font-bold">L'Azione Combinata di TGF-β ed Acido Retinoico sui pTreg</strong>
          <p className="text-emerald-900 m-0 leading-relaxed">
            Quando una DC CD103⁺ presenta l'antigene alimentare o commensale a un linfocita T naive CD4+, rilascia simultaneamente <strong>TGF-β</strong> ed <strong>Acido Retinoico</strong>. L'acido retinoico lega il recettore nucleare RAR/RXR nel linfocita T, promuovendo il legame di Smad3 al promotore di <em>Foxp3</em> e inibendo la fosforilazione di STAT3 (bloccando l'opzione Th17). Di conseguenza, il T naive upregola stabilmente FOXP3 diventando un pTreg tolerogenico, e contestualmente induce l'espressione dei recettori di homing intestinale <strong>α₄β₇</strong> e <strong>CCR9</strong> per fare ritorno nella mucosa.
          </p>
        </div>

        <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-4">
          I Co-Fattori della Dieta e del Microbiota: Triptofano/AhR & Fibre/SCFAs
        </h3>
        <p>
          La lezione illustra con dovizia di dettagli come la tolleranza intestinale sia sostenuta da due specifici assi metabolici dipendenti dal microbiota:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">1. Metabolismo del Triptofano & Agonisti di AhR</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Il triptofano alimentare viene convertito dai <strong>Lactobacilli</strong> (prevalenti nell'intestino tenue) in derivati indolici (come <em>indolo-3-aldeide</em>), oppure metabolizzato dall'enzima <em>IDO</em> in <em>chinurenina</em>. Questi composti agiscono come <strong>AhR agonists</strong> (ligandi del recettore degli idrocarburi arilici), stimolando l'epitelio a produrre IL-22 e promuovendo la differenziazione dei Treg inducibili. La capacità di produrre ligandi AhR è massima nell'<strong>intestino tenue</strong>.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">2. Fibre Alimentari & SCFAs (Acidi Grassi a Catena Corta)</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Le fibre vegetali indigeribili vengono fermentate dai batteri anaerobi del colon (in primis <strong>Bacteroides</strong>, <em>Clostridium</em>, <em>Bifidobacterium</em>) generando <strong>SCFAs</strong>: <strong>acetato, propionato e butirrato</strong>. Il butirrato penetra nei linfociti e agisce come <em>inibitore delle istone deacetilasi (HDAC inhibitor)</em>: mantiene iperacetilato e accessibile l'enhancer CNS1 del gene <em>Foxp3</em>, stabilizzando epigeneticamente il fenotipo soppressorio dei Treg. La produzione di SCFAs è massima nel <strong>colon</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 19.10 Homing Linfocitario Selettivo & Natalizumab */}
      <section id="sec-19-10" className="space-y-4">
        <div className="flex items-center gap-2 text-violet-700">
          <Compass className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            19.10 Homing Linfocitario Selettivo, Modello dell'Equilibrio & Farmacologia del Natalizumab
          </h2>
        </div>

        <p>
          Una volta completato il differenziamento nel linfonodo, il linfocita T effettore abbandona l'organo tramite i vasi linfatici efferenti, si riversa nel dotto toracico e penetra nella circolazione sistemica. Per esercitare la propria funzione protettiva, il linfocita deve essere reclutato con estrema precisione anatomica nel tessuto di provenienza dell'infezione. Questo processo prende il nome di <strong>Homing Linfocitario Selettivo</strong> ed è regolato da un codice di "indirizzi" molecolari costituito dalla combinazione coordinata di <strong>integrine</strong> e <strong>recettori per chemochine</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-violet-600" />
              1. Homing Intestinale (Asse α4β7 / CCR9)
            </h4>
            <p className="text-slate-600 leading-relaxed mb-2">
              I linfociti istruiti nel GALT esprimono l'integrina <strong>α4β7</strong> (a4b7) e il recettore <strong>CCR9</strong>:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-slate-700">
              <li>L'integrina α4β7 sulla membrana del linfocita circolante si trova inizialmente in conformazione ripiegata inattiva a bassa affinità.</li>
              <li>Il recettore <strong>CCR9</strong> riconosce la chemochina <strong>CCL25</strong> (TECK), prodotta selettivamente dalle cellule epiteliali delle cripte intestinali ed esposta sull'endotelio delle venule post-capillari.</li>
              <li>Il legame CCR9-CCL25 innesca la segnalazione <em>inside-out</em> che stende conformazionalmente l'integrina α4β7 portandola ad altissima affinità.</li>
              <li>L'α4β7 attivata si ancora saldamente al suo ligando specifico endoteliale: la <strong>MAdCAM-1</strong> (<em>Mucosal Addressin Cell Adhesion Molecule-1</em>), consentendo l'arresto e la diapedesi nella lamina propria intestinale.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-rose-600" />
              2. Homing Cutaneo (Asse α4β1 / LFA-1 / CCR4 / CCR10)
            </h4>
            <p className="text-slate-600 leading-relaxed mb-2">
              I linfociti istruiti nei linfonodi drenanti la cute esprimono <strong>CLA</strong> (<em>Cutaneous Lymphocyte Antigen</em>), <strong>LFA-1</strong> (αLβ2), <strong>α4β1</strong> (VLA-4), e i recettori <strong>CCR4</strong> e <strong>CCR10</strong>:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-slate-700">
              <li>I recettori <strong>CCR4</strong> e <strong>CCR10</strong> riconoscono rispettivamente <strong>CCL17</strong> (TARC), <strong>CCL22</strong> (MDC) e <strong>CCL27</strong> (CTACK), espressi dall'endotelio venulare dermico.</li>
              <li>La stimolazione chemochinica attiva l'affinità di <strong>LFA-1</strong> per <strong>ICAM-1</strong> e di <strong>α4β1</strong> per <strong>VCAM-1</strong>.</li>
              <li>Questo binomio guida l'extravasazione selettiva dei linfociti T nel derma cutaneo.</li>
            </ul>
          </div>
        </div>

        {/* Modello dell'Equilibrio */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-sans">
          <h4 className="font-bold text-slate-900 text-sm mb-1.5">
            Il Modello dell'Equilibrio Immunitario & Immunopatologia
          </h4>
          <p className="text-slate-600 leading-relaxed m-0">
            Come illustrato nella slide 18, un soggetto sano mantiene un equilibrio armonico tra i 4 profili: <strong>Tipo 1</strong> (Th1 per virus/batteri intracellulari), <strong>Tipo 2</strong> (Th2 per elminti), <strong>Tipo 3</strong> (Th17 per funghi/batteri extracellulari) e <strong>Tipo 4 / Omeostatico</strong> (Treg per la tolleranza verso self e commensali). Quando uno di questi assi iper-prolifera rompendo l'equilibrio, si instaura l'immunopatologia: eccesso di Th1/Th17 causa <em>malattie autoimmuni</em> (sclerosi multipla, diabete tipo 1, artrite reumatoide, psoriasi); eccesso di Th2 scatena <em>allergie, asma e anafilassi</em>; eccesso di Treg causa <em>immunodepressione permissiva per tumori e infezioni croniche</em>.
          </p>
        </div>

        {/* Focus Farmacologico Natalizumab */}
        <div className="p-4 rounded-xl bg-indigo-50/80 border border-indigo-200 text-xs font-sans space-y-2">
          <div className="flex items-center gap-2">
            <Pill className="w-5 h-5 text-indigo-700 shrink-0" />
            <h4 className="font-bold text-indigo-950 text-sm m-0">
              Applicazione Farmacologica: Il Natalizumab nella Sclerosi Multipla
            </h4>
          </div>
          <p className="text-indigo-950 leading-relaxed m-0">
            Il <strong>Natalizumab</strong> è un anticorpo monoclonale umanizzato specifico contro la <strong>subunità α4 delle integrine</strong>. Bloccando la catena α4, neutralizza contemporaneamente sia l'integrina <strong>α4β1 (VLA-4)</strong> sia l'integrina <strong>α4β7</strong>.
          </p>
          <p className="text-indigo-900 leading-relaxed m-0">
            <strong>Meccanismo d'Azione nella Sclerosi Multipla</strong>: nella SM, cloni di linfociti T autoreattivi (Th1 e Th17) specifici per la mielina cerebrale utilizzano l'integrina α4β1 per legare la molecola <strong>VCAM-1</strong> espressa dall'endotelio vascolare della barriera emato-encefalica (BEE). Il legame consente loro di attraversare la BEE ed entrare nel parenchima dell'SNC, scatenando infiammazione demielinizzante. La somministrazione di Natalizumab neutralizza α4β1, impedisce fisicamente l'adesione a VCAM-1 e <em>"congela" i linfociti autoreattivi nel circolo ematico</em>, bloccando l'infiltrazione encefalica e riducendo drasticamente le recidive cliniche.
          </p>
          <div className="p-3 bg-white/80 rounded-lg border border-indigo-200">
            <strong className="text-rose-900 block font-semibold mb-0.5">Avvertenza Clinica Cruciale: Il Rischio di PML (Leucoencefalopatia Multifocale Progressiva)</strong>
            <span className="text-slate-700">
              Poiché il blocco di α4β1 impedisce a qualunque linfocita T di entrare nel cervello, l'SNC viene privato della fisiologica immunosorveglianza locale. Nei pazienti portatori latenti del <em>virus JC (John Cunningham)</em>, l'assenza di linfociti T consente la riattivazione incontrollata del virus negli oligodendrociti, provocando la <strong>PML</strong>, una grave infezione demielinizzante spesso fatale. Prima di iniziare la terapia è obbligatorio effettuare lo screening sierologico per anticorpi anti-JC virus.
            </span>
          </div>
        </div>
      </section>

      {/* SIMULATORE 1: BUSSOLA DELLA POLARIZZAZIONE T HELPER */}
      <section id="sim-th-polarization" className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-violet-600 text-white flex items-center justify-center font-bold">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 m-0">
                  Simulatore 1: Laboratorio di Polarizzazione T Helper & Segnali Citochinici
                </h3>
                <p className="text-xs text-slate-500 m-0">
                  Seleziona lo stimolo patogeno o microambientale per simulare la cascata molecolare completa: 3° segnale, trasduzione STAT, master regulator ed effetto cellulare.
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-violet-100 text-violet-800 border border-violet-200">
              Interactive Signal-3 Engine
            </span>
          </div>
        </div>

        {/* Stimulus Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs font-sans">
          <button
            onClick={() => setSelectedStimulus('intracellular')}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              selectedStimulus === 'intracellular'
                ? 'bg-blue-600 text-white border-blue-600 shadow-xs font-bold'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            <div className="text-[11px] opacity-80 uppercase tracking-wider">Patogeno Intracellulare</div>
            <div className="font-semibold mt-0.5">Virus / TBC (Th1)</div>
          </button>

          <button
            onClick={() => setSelectedStimulus('helminth')}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              selectedStimulus === 'helminth'
                ? 'bg-amber-600 text-white border-amber-600 shadow-xs font-bold'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            <div className="text-[11px] opacity-80 uppercase tracking-wider">Elminta / Allergene</div>
            <div className="font-semibold mt-0.5">Parassiti / Atopia (Th2)</div>
          </button>

          <button
            onClick={() => setSelectedStimulus('fungal')}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              selectedStimulus === 'fungal'
                ? 'bg-orange-600 text-white border-orange-600 shadow-xs font-bold'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            <div className="text-[11px] opacity-80 uppercase tracking-wider">Fungo / Piogeno</div>
            <div className="font-semibold mt-0.5">Candida / S. aureus (Th17)</div>
          </button>

          <button
            onClick={() => setSelectedStimulus('follicular')}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              selectedStimulus === 'follicular'
                ? 'bg-purple-600 text-white border-purple-600 shadow-xs font-bold'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            <div className="text-[11px] opacity-80 uppercase tracking-wider">Linfonodo / GC</div>
            <div className="font-semibold mt-0.5">Aiuto Linfociti B (Tfh)</div>
          </button>

          <button
            onClick={() => setSelectedStimulus('mucosal')}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              selectedStimulus === 'mucosal'
                ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs font-bold'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            <div className="text-[11px] opacity-80 uppercase tracking-wider">Mucosa / Dieta</div>
            <div className="font-semibold mt-0.5">Microbiota / GALT (Treg)</div>
          </button>
        </div>

        {/* Dynamic Simulation Board */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">3° Segnale Citochinico</span>
              <strong className="text-slate-900 text-sm block mt-0.5">
                {selectedStimulus === 'intracellular' && 'IL-12 (da cDC1) + IFN-γ (da NK)'}
                {selectedStimulus === 'helminth' && 'Assenza IL-12 (TSLP) + IL-4 (ILC2/Basofili)'}
                {selectedStimulus === 'fungal' && 'IL-6 + IL-1β + IL-23 (con TGF-β)'}
                {selectedStimulus === 'follicular' && 'Interleuchina-6 (IL-6 da cDC)'}
                {selectedStimulus === 'mucosal' && 'TGF-β + Acido Retinoico (da DC CD103+)'}
              </strong>
              <span className="text-slate-500 text-[11px] mt-1 block">
                {selectedStimulus === 'intracellular' && 'Innescato da TLR3, TLR4, TLR9 per microbi intracellulari'}
                {selectedStimulus === 'helminth' && 'Allarmine epiteliali attivate da proteasi o allergeni'}
                {selectedStimulus === 'fungal' && 'Attivazione di Dectina-1 e TLR fungini su cDC2'}
                {selectedStimulus === 'follicular' && 'Istruzione peri-follicolare nella T-zone linfonodale'}
                {selectedStimulus === 'mucosal' && 'Campionamento di commensali/antigeni alimentari da cellule M'}
              </span>
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Fattori Trascrizionali & STAT</span>
              <strong className="text-violet-700 text-sm block mt-0.5">
                {selectedStimulus === 'intracellular' && 'STAT4 & STAT1 -> T-bet'}
                {selectedStimulus === 'helminth' && 'STAT6 -> GATA3'}
                {selectedStimulus === 'fungal' && 'STAT3 -> RORγt'}
                {selectedStimulus === 'follicular' && 'STAT3 -> BCL6 (CXCR5+)'}
                {selectedStimulus === 'mucosal' && 'Smad3 & RAR -> FOXP3'}
              </strong>
              <span className="text-slate-500 text-[11px] mt-1 block">
                {selectedStimulus === 'intracellular' && 'Inibizione crociata su GATA3 e RORγt'}
                {selectedStimulus === 'helminth' && 'Repressione trascrizionale diretta di T-bet'}
                {selectedStimulus === 'fungal' && 'Blocco contemporaneo dei programmi Th1 e Th2'}
                {selectedStimulus === 'follicular' && 'Repressione di Blimp-1 e perdita di CCR7'}
                {selectedStimulus === 'mucosal' && 'Stabilizzazione epigenetica mediata da butirrato (SCFAs)'}
              </span>
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Citochine Effettrici Prodotte</span>
              <strong className="text-emerald-700 text-sm block mt-0.5">
                {selectedStimulus === 'intracellular' && 'IFN-γ, TNF-α, IL-2'}
                {selectedStimulus === 'helminth' && 'IL-4, IL-5, IL-13'}
                {selectedStimulus === 'fungal' && 'IL-17A, IL-17F, IL-22'}
                {selectedStimulus === 'follicular' && 'IL-21, IL-4, CD40L, ICOS'}
                {selectedStimulus === 'mucosal' && 'IL-10, TGF-β, CTLA-4'}
              </strong>
              <span className="text-slate-500 text-[11px] mt-1 block">
                {selectedStimulus === 'intracellular' && 'Attivazione macrofagi M1 (iNOS: NO+citrullina)'}
                {selectedStimulus === 'helminth' && 'Switch IgE/IgG4, eosinofili, M2 (Arginasi-1)'}
                {selectedStimulus === 'fungal' && 'Reclutamento massivo neutrofili (G-CSF/CXCL8)'}
                {selectedStimulus === 'follicular' && 'Ipermutazione somatica e switch nel centro germinativo'}
                {selectedStimulus === 'mucosal' && 'Trans-endocitosi di B7, inibizione IL-6 (FOXO3) e IDO'}
              </span>
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Correlato Clinico / Patologia</span>
              <strong className="text-rose-700 text-sm block mt-0.5">
                {selectedStimulus === 'intracellular' && 'Granuloma TBC, Sarcoidosi, Diabete Tipo 1'}
                {selectedStimulus === 'helminth' && 'Asma, Rinite, Anafilassi, Evasione Tumorale (M2)'}
                {selectedStimulus === 'fungal' && 'Psoriasi, Artrite Reumatoide, Malattie IBD'}
                {selectedStimulus === 'follicular' && 'Sindrome da Iper-IgM, Lupus Eritematoso Sistemico'}
                {selectedStimulus === 'mucosal' && 'Sindrome IPEX (deficit FOXP3), Tolleranza Orale'}
              </strong>
              <span className="text-slate-500 text-[11px] mt-1 block">
                {selectedStimulus === 'intracellular' && 'Eccessiva necrosi caseosa o lisi beta-cellule'}
                {selectedStimulus === 'helminth' && 'M2 secernono VEGF/MMP e spengono T con PD-L2'}
                {selectedStimulus === 'fungal' && 'Bersagliati terapeuticamente da anti-IL-17 e anti-IL-23'}
                {selectedStimulus === 'follicular' && 'Autoanticorpi ad alta affinità contro antigeni nucleari'}
                {selectedStimulus === 'mucosal' && 'Premio Nobel per la Medicina 2025'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SIMULATORE 2: HOMING TESSUTALE & NATALIZUMAB */}
      <section id="sim-homing-natalizumab" className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
                <Pill className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 m-0">
                  Simulatore 2: Homing Tessutale Selettivo & Farmacologia del Natalizumab
                </h3>
                <p className="text-xs text-slate-500 m-0">
                  Simula il codice molecolare di reclutamento endoteliale (integrine + chemochine) e valuta l'effetto del blocco terapeutico con l'anticorpo monoclonale anti-α4.
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-100 text-indigo-800 border border-indigo-200">
              Pharmacology & Adhesion Lab
            </span>
          </div>
        </div>

        {/* Tissue Selector & Natalizumab Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Tessuto Bersaglio:</span>
            <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50">
              <button
                onClick={() => setHomingTarget('cns')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  homingTarget === 'cns' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                SNC / Cervello (Sclerosi Multipla)
              </button>
              <button
                onClick={() => setHomingTarget('gut')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  homingTarget === 'gut' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Intestino / GALT (Morbo di Crohn)
              </button>
              <button
                onClick={() => setHomingTarget('skin')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  homingTarget === 'skin' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Cute / Derma (Dermatite/Psoriasi)
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-700">Somministrazione Farmaco:</span>
            <button
              onClick={() => setNatalizumabActive(!natalizumabActive)}
              className={`px-4 py-2 rounded-xl font-bold flex items-center gap-2 transition-all ${
                natalizumabActive
                  ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-md'
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-800'
              }`}
            >
              <Pill className="w-4 h-4" />
              <span>{natalizumabActive ? 'Natalizumab Attivo (Anti-α4 ON)' : 'Inietta Natalizumab (Anti-α4)'}</span>
            </button>
          </div>
        </div>

        {/* Dynamic Simulation Board */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Codice Molecolare di Homing</span>
              <div className="mt-1 space-y-1">
                <div>
                  <span className="text-slate-500">Integrina Linfocitaria: </span>
                  <strong className="text-slate-900">
                    {homingTarget === 'cns' && 'α4β1 (VLA-4)'}
                    {homingTarget === 'gut' && 'α4β7 (a4b7)'}
                    {homingTarget === 'skin' && 'LFA-1 (αLβ2) + α4β1 (VLA-4)'}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-500">Ligando Endoteliale: </span>
                  <strong className="text-violet-700">
                    {homingTarget === 'cns' && 'VCAM-1 (su endotelio Barriera Emato-Encefalica)'}
                    {homingTarget === 'gut' && 'MAdCAM-1 (su venule endoteliali mucosali)'}
                    {homingTarget === 'skin' && 'ICAM-1 & VCAM-1 (su venule dermiche)'}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-500">Asse Chemochinico: </span>
                  <strong className="text-emerald-700">
                    {homingTarget === 'cns' && 'CCL2 / CXCL12'}
                    {homingTarget === 'gut' && 'CCL25 (TECK) <-> CCR9'}
                    {homingTarget === 'skin' && 'CCL17 / CCL22 <-> CCR4; CCL27 <-> CCR10'}
                  </strong>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Stato di Adesione & Diapedesi</span>
              <div className="mt-2">
                {natalizumabActive ? (
                  homingTarget === 'skin' ? (
                    <div>
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold block mb-1">
                        Infiltrazione Parzialmente Preservata
                      </span>
                      <p className="text-slate-600 m-0">
                        Il Natalizumab blocca la catena α4 di α4β1, ma i linfociti possono ancora extravasare nella cute grazie all'integrina <strong>LFA-1</strong> legata a <strong>ICAM-1</strong>.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold block mb-1">
                        Adesione Endoteliale BLOCCATA al 100%
                      </span>
                      <p className="text-slate-600 m-0">
                        {homingTarget === 'cns'
                          ? 'Il legame anti-α4 neutralizza VLA-4 (α4β1). I linfociti T non riescono a legare VCAM-1: NESSUNA diapedesi attraverso la Barriera Emato-Encefalica.'
                          : 'Il legame anti-α4 neutralizza α4β7. I linfociti T non legano MAdCAM-1: arresto dell\'infiltrazione linfocitaria nella lamina propria intestinale.'}
                      </p>
                    </div>
                  )
                ) : (
                  <div>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold block mb-1">
                      Adesione & Diapedesi ATTIVA
                    </span>
                    <p className="text-slate-600 m-0">
                      I linfociti attivati subiscono il cambio conformazionale ad alta affinità e attraversano l'endotelio venulare penetrando nel tessuto bersaglio.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Valutazione Clinica & Rischio PML</span>
              <div className="mt-2">
                {natalizumabActive ? (
                  <div className="space-y-1.5">
                    <div className="p-2 bg-emerald-50 text-emerald-900 rounded border border-emerald-200">
                      <strong>Efficacia Terapeutica:</strong> Fortissima riduzione delle ricadute di Sclerosi Multipla (-68%) e cicatrizzazione delle lesioni intestinali nel Crohn.
                    </div>
                    <div className="p-2 bg-rose-50 text-rose-900 rounded border border-rose-200">
                      <strong>Rischio PML da Virus JC:</strong> Elevato dopo 24 mesi di terapia in pazienti JC-positivi per soppressione dell'immunosorveglianza nel SNC!
                    </div>
                  </div>
                ) : (
                  <div className="p-2 bg-slate-100 text-slate-700 rounded">
                    <strong>Nessun Trattamento In Corso:</strong> I cloni Th1/Th17 autoreattivi continuano a infiltrarsi nel tessuto provocando demielinizzazione cerebrale o infiammazione intestinale. Nessun rischio di PML da virus JC.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABELLE SINOTTICHE 19.1 e 19.2 */}
      <section className="space-y-6">
        {/* Tabella 19.1 */}
        <div id="tabella-19-1" className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-violet-700" />
            <h3 className="text-lg font-bold text-slate-900 m-0 font-serif-heading">
              Tabella 19.1: Compendio Comparativo dei Subset di Linfociti T Helper (Th1, Th2, Th17, Tfh, Treg)
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse font-sans">
              <thead>
                <tr className="bg-slate-100 text-slate-900 border-b border-slate-300">
                  <th className="p-3 font-bold">Subset T</th>
                  <th className="p-3 font-bold">3° Segnale Induttore (Citochine)</th>
                  <th className="p-3 font-bold">Master Regulator & STAT</th>
                  <th className="p-3 font-bold">Citochine Effettrici Prodotte</th>
                  <th className="p-3 font-bold">Funzione Biologica & Bersaglio</th>
                  <th className="p-3 font-bold">Immunopatologia / Eccesso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-blue-900">Th1</td>
                  <td className="p-3">IL-12 (da cDC1) + IFN-γ (da NK)</td>
                  <td className="p-3"><strong>T-bet</strong> (STAT4 & STAT1)</td>
                  <td className="p-3">IFN-γ, TNF-α, IL-2</td>
                  <td className="p-3">Virus, batteri intracellulari (TBC), attivazione macrofagi M1 (iNOS)</td>
                  <td className="p-3 text-rose-700">Granuloma tubercolare, Sarcoidosi, Diabete Tipo 1</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-amber-900">Th2</td>
                  <td className="p-3">Assenza IL-12 (TSLP) + IL-4 (ILC2, Basofili da IL-25/IL-33)</td>
                  <td className="p-3"><strong>GATA3</strong> (STAT6)</td>
                  <td className="p-3">IL-4, IL-5, IL-13</td>
                  <td className="p-3">Elminti parassiti, switch IgE/IgG4, attivazione eosinofili e macrofagi M2</td>
                  <td className="p-3 text-rose-700">Asma bronchiale, dermatite atopica, anafilassi, immunosoppressione tumorale</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-orange-900">Th17</td>
                  <td className="p-3">IL-6, IL-1β, IL-23 (con TGF-β)</td>
                  <td className="p-3"><strong>RORγt</strong> (STAT3)</td>
                  <td className="p-3">IL-17A, IL-17F, IL-22</td>
                  <td className="p-3">Funghi (Candida), batteri piogeni, reclutamento neutrofili e peptidi antimicrobici</td>
                  <td className="p-3 text-rose-700">Psoriasi, Artrite Reumatoide, Morbo di Crohn</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-purple-900">Tfh</td>
                  <td className="p-3">IL-6 (iniziale da cDC) + IL-21 autocrina</td>
                  <td className="p-3"><strong>BCL6</strong> (STAT3) [perde CCR7, esprime CXCR5]</td>
                  <td className="p-3">IL-21, IL-4, CD40L, ICOS</td>
                  <td className="p-3">Aiuto a cellule B nei follicoli: SHM, CSR e maturazione affinità nei centri germinativi</td>
                  <td className="p-3 text-rose-700">Lupus Eritematoso Sistemico (autoanticorpi patologici), Linfomi T angioimmunoblastici</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-emerald-900">Treg</td>
                  <td className="p-3">Timo (affinità intermedia) o TGF-β + Acido Retinoico nel GALT</td>
                  <td className="p-3"><strong>FOXP3</strong> (Smad3, RAR) [Nobel 2025]</td>
                  <td className="p-3">IL-10, TGF-β, CTLA-4 costitutivo</td>
                  <td className="p-3">Tolleranza periferica e orale, spegnimento immunitario, trans-endocitosi B7, induzione IDO</td>
                  <td className="p-3 text-rose-700">Deficit: Sindrome IPEX; Eccesso: Immunosoppressione nel microambiente tumorale</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabella 19.2 */}
        <div id="tabella-19-2" className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Shuffle className="w-5 h-5 text-violet-700" />
            <h3 className="text-lg font-bold text-slate-900 m-0 font-serif-heading">
              Tabella 19.2: Polarizzazione Macrofagica M1 vs M2 & Regolazione Metabolica
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse font-sans">
              <thead>
                <tr className="bg-slate-100 text-slate-900 border-b border-slate-300">
                  <th className="p-3 font-bold">Parametro Molecolare</th>
                  <th className="p-3 font-bold text-blue-900">Macrofagi M1 (Attivazione Classica)</th>
                  <th className="p-3 font-bold text-amber-900">Macrofagi M2 (Attivazione Alternativa)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-semibold">Citochine e Stimoli Induttori</td>
                  <td className="p-3">IFN-γ (da Th1/NK) + LPS batterico / TNF-α</td>
                  <td className="p-3">IL-4 e IL-13 (da Th2/ILC2), IL-10, TGF-β</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-semibold">Enzima Chiave del Metabolismo dell'Arginina</td>
                  <td className="p-3 font-bold text-blue-700">iNOS / NOS2 (Ossido Nitrico Sintasi Inducibile)</td>
                  <td className="p-3 font-bold text-amber-700">Arginasi 1 (Arg1)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-semibold">Metaboliti Generati dall'Arginina</td>
                  <td className="p-3">Ossido Nitrico (NO) + L-Citrullina (e perossinitrito)</td>
                  <td className="p-3">L-Ornitina + Urea (precursori di poliamine e prolina per collagene)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-semibold">Potere Microbicida & Fagocitosi Distruttiva</td>
                  <td className="p-3 text-emerald-700 font-bold">Altissimo (ROS, NO, enzimi lisosomiali)</td>
                  <td className="p-3 text-rose-700 font-bold">Assente / Negligibile (privi di NO e ROS)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-semibold">Citochine & Fattori Secreti</td>
                  <td className="p-3">TNF-α, IL-1, IL-6, IL-12, CXCL10 (pro-infiammatori)</td>
                  <td className="p-3">TGF-β, IL-10, EGF, VEGF, Metalloproteasi MMP (riparativi, angiogenetici)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-semibold">Marcatori di Membrana & Checkpoint Inibitori</td>
                  <td className="p-3">Alti livelli di HLA-DR, CD80, CD86 (APC eccellenti)</td>
                  <td className="p-3">CD206 (Mannose Receptor), Dectin-1, <strong>PD-L2 (e PD-L1)</strong></td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-semibold">Ruolo Fisiopatologico Primario</td>
                  <td className="p-3">Difesa antibatterica/antivirale, immunità antitumorale</td>
                  <td className="p-3">Cicatrizzazione ferite, risoluzione infiammatoria, immunosoppressione, metastatizzazione</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={quizData} lessonNumber={19} title="Verifica dell'Apprendimento · Lezione 19" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={flashcardsData} lessonNumber={19} title="Flashcard di Ripasso Attivo · Lezione 19" />
    </article>
  );
};
