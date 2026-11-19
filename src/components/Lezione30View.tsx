import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
/**
 * Lezione 30: Tolleranza Immunitaria: Meccanismi Centrali e Periferici, Basi dell'Autoimmunità,
 * Malattie Monogeniche (APS-1, IPEX, ALPS, CTLA-4), Predisposizione HLA e Triggers Ambientali
 * (Mimetismo Molecolare, Bystander Activation, Disbiosi)
 *
 * Corso di Laurea Magistrale in Medicina e Chirurgia
 * Trascrizione integrale integrata dalle lezioni universitarie della Prof.ssa Ricciarda Galandrini (10/12/2025, 1ª e 2ª ora)
 * Sbobinatori: Giulia Bella, Sara Colangelo | Revisori: Stefano Bergamasco, Margherita Cillerai
 */

import React, { useState, useEffect } from 'react';
import {
  Award,
  BookOpen,
  Microscope,
  ShieldCheck,
  Activity,
  Layers,
  Dna,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  Sparkles,
  FileText,
  CheckCircle,
  Heart,
  Zap,
  Crosshair,
  RefreshCw,
  Scissors,
  Stethoscope,
  ShieldAlert,
  ArrowRight,
  Info,
  Check,
  Clock,
  Eye,
  AlertTriangle,
  Flame,
  RotateCcw,
  Save,
  Trash2,
  Droplets,
  SlidersHorizontal,
  Share2,
  Wind
} from 'lucide-react';

interface Lezione30ViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
}

export const Lezione30View: React.FC<Lezione30ViewProps> = ({
  isSerif = false,
  fontSize = 'normal'
}) => {
  // Simulator 1 State: Central & Peripheral Tolerance Lab (Thymic Selection, AIRE, nTreg, CTLA-4)
  const [simAireStatus, setSimAireStatus] = useState<'wildtype' | 'mutated_aps1'>('wildtype');
  const [simTcrAvidity, setSimTcrAvidity] = useState<'low' | 'intermediate' | 'high'>('low');
  const [simCostimulationState, setSimCostimulationState] = useState<'normal_b7' | 'ctla4_active' | 'ipilimumab_block' | 'orphan_anergy'>('normal_b7');

  // Simulator 2 State: Environmental Triggers & Autoimmunity Lab (Bystander, Mimicry, Spreading, Dysbiosis)
  const [selectedHlaType, setSelectedHlaType] = useState<'hla_b27' | 'hla_dq2_8' | 'hla_dr4' | 'hla_dr3_dr2' | 'hla_neutral'>('hla_b27');
  const [selectedTriggerEvent, setSelectedTriggerEvent] = useState<'gas_infection' | 'ebv_infection' | 'gut_dysbiosis' | 'sterile_damage' | 'none'>('gas_infection');
  const [selectedMechanism, setSelectedMechanism] = useState<'mimicry' | 'bystander' | 'spreading' | 'dysbiosis_leaky'>('mimicry');

  // Flashcards state
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);


  const toggleCard = (id: number) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // Questions for Lezione 30
  const quizQuestions = [
    {
      id: 1,
      question: "Quale fondamentale scoperta valse il Premio Nobel per la Fisiologia o la Medicina nel 1960 a Sir Frank Macfarlane Burnet e Peter Medawar?",
      options: [
        "La scoperta della struttura a doppia elica del DNA nei timociti.",
        "La formulazione della teoria della selezione clonale e la dimostrazione sperimentale della tolleranza immunologica acquisita mediante chimerismo neonatale.",
        "L'identificazione della struttura tridimensionale del recettore ad altissima affinità per l'interleuchina-2 (CD25).",
        "La cristallografia a raggi X delle tasche di legame peptidico delle molecole HLA di classe I e classe II."
      ],
      correctAnswer: 1,
      explanation: "Burnet e Medawar condivisero il Premio Nobel nel 1960 per la scoperta della tolleranza immunologica acquisita. Medawar dimostrò sperimentalmente che l'inoculo intrauterino o neonatale di cellule allogeniche induceva nei topi adulti una tolleranza specifica verso innesti cutanei dello stesso donatore, confermando le predizioni della teoria clonale di Burnet."
    },
    {
      id: 2,
      question: "Qual è il ruolo molecolare del fattore trascrizionale AIRE (AutoImmune REgulator) nelle cellule epiteliali timiche midollari (mTEC)?",
      options: [
        "Inibire l'espressione di MHC di classe I per prevenire l'attivazione aspecifica dei linfociti CD8+.",
        "Promuovere l'ipermutazione somatica dei geni V(D)J nelle cellule dendritiche del timo.",
        "Promuovere l'espressione genica ectopica promiscua di antigeni tessuto-specifici (TRA) periferici per consentire la selezione negativa dei timociti autoreattivi.",
        "Attivare la produzione di perforine e granzimi per lisare direttamente i timociti a singolo positivo."
      ],
      correctAnswer: 2,
      explanation: "AIRE agisce come regolatore epigenetico nelle mTEC promuovendo l'espressione ectopica di migliaia di antigeni tessuto-ristretti (TRA, come insulina, tireoglobulina, proteina basica della mielina). In tal modo, i cloni T autoreattivi per proteine periferiche possono incontrare il proprio antigene nel timo ed essere eliminati per delezione clonale."
    },
    {
      id: 3,
      question: "La mutazione del gene AIRE provoca quale grave patologia monogenica autoimmune umana?",
      options: [
        "Sindrome IPEX (Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked).",
        "Sindrome Linfoproliferativa Autoimmune (ALPS).",
        "Sindrome Poliendocrina Autoimmune di Tipo 1 (APS-1 / APECED), caratterizzata da candidiasi mucocutanea cronica, ipoparatiroidismo e morbo di Addison.",
        "Agammaglobulinemia legata al sesso di Bruton (XLA)."
      ],
      correctAnswer: 2,
      explanation: "La sindrome APS-1 (o APECED) è una malattia autosomica recessiva causata da mutazioni inattivanti del gene AIRE. È caratterizzata dalla classica triade: candidiasi mucocutanea cronica precoce (dovuta ad autoanticorpi neutralizzanti anti-IL-17 e IL-22), ipoparatiroidismo primitivo autoimmune e morbo di Addison (insufficienza corticosurrenalica)."
    },
    {
      id: 4,
      question: "Quale destino biologico attende un timocita il cui TCR lega il complesso autoantigene-MHC nella midollare timica con avidità intermedia o medio-alta (sotto la soglia di morte apoptotica immediata)?",
      options: [
        "Viene convertito immediatamente in cellula plasmatica produttrice di IgM naturali.",
        "Subisce l'induzione del fattore di trascrizione FoxP3 e differenzia in linfocita T regolatore naturale (nTreg / tTreg).",
        "Va incontro a morte immediata per necrosi programmata (necroptosi).",
        "Subisce l'editing recettoriale del TCR mediante riattivazione di TdT e RAG1/2."
      ],
      correctAnswer: 1,
      explanation: "Mentre l'avidità eccessiva innesca la delezione clonale per apoptosi e la bassa avidità genera cellule T naïve convenzionali, una finestra di avidità intermedia/medio-alta devia il destino del timocita inducendo il fattore trascrizionale FoxP3, determinando la nascita dei linfociti T regolatori naturali (nTreg o tTreg)."
    },
    {
      id: 5,
      question: "In che modo l'elevata espressione costitutiva di CD25 (catena alfa del recettore per IL-2) conferisce ai linfociti Treg un potente meccanismo immunosoppressivo?",
      options: [
        "CD25 lisa enzimaticamente la membrana plasmatica dei linfociti T responder.",
        "CD25 agisce da 'spugna metabolica', sequestrando con altissima affinità l'IL-2 dal microambiente e provocando la morte per privazione citochinica dei linfociti T effettori convenzionali.",
        "CD25 induce la fagocitosi delle cellule dendritiche mature.",
        "CD25 converte l'IL-2 in IL-10 mediante scissione proteolitica extracellulare."
      ],
      correctAnswer: 1,
      explanation: "I linfociti Treg FoxP3+ esprimono livelli massivi del trimerico recettore ad alta affinità per IL-2 (CD25/CD122/CD132), ma non possono produrre IL-2 poiché FoxP3 ne reprime la trascrizione. Assorbono e consumano quindi avidamente l'IL-2 presente nell'ambiente circostante, privando i linfociti T effettori convenzionali del segnale trofico indispensabile e causandone l'apoptosi da deprivazione di citochine."
    },
    {
      id: 6,
      question: "Quale dei seguenti meccanismi molecolari descrive correttamente l'attività non-sterica di CTLA-4 (CD152) nei confronti delle cellule presentanti l'antigene (APC)?",
      options: [
        "Inibizione della sintesi di ATP mitocondriale nei linfociti B.",
        "Trans-endocitosi: CTLA-4 aggancia fisicamente le molecole B7-1 (CD80) e B7-2 (CD86) dalla superficie dell'APC, strappandole ed internalizzandole nel linfocita per degradazione lisosomiale, e inducendo la sintesi dell'enzima IDO nell'APC.",
        "Fosforilazione diretta dei canali del calcio voltaggio-dipendenti dei macrofagi.",
        "Blocco della trascrizione di RAG1 e RAG2 nelle cellule staminali emopoietiche."
      ],
      correctAnswer: 1,
      explanation: "Oltre a competere stericamente con CD28 per il legame a B7 con un'affinità da 20 a 100 volte superiore, CTLA-4 espleta la 'trans-endocitosi': strappa fisicamente i ligandi CD80/CD86 dalla membrana dell'APC e li degrada. Inoltre, il segnale retrogrado inviato all'APC stimola l'espressione dell'enzima indolammina-2,3-diossigenasi (IDO), che consuma triptofano generando chinurenine immunosoppressive."
    },
    {
      id: 7,
      question: "Quale segno diagnostico ematologico e fenotipico è patognomonico della Sindrome Linfoproliferativa Autoimmune (ALPS), causata da mutazioni dell'asse Fas-FasL o Caspasi-10?",
      options: [
        "Aplasia pura della serie rossa midollare con assenza di reticolociti.",
        "Presenza di anticorpi monoclonali IgG anti-cardiolipina e blasti leucemici nel liquor.",
        "Espansione massiva nel sangue periferico di linfociti T maturi 'doppi negativi' con fenotipo TCRαβ+ CD4- CD8- associata a splenomegalia e linfoadenopatia.",
        "Crollo selettivo della frazione C3 del complemento sierico associato ad ipercalcemia severa."
      ],
      correctAnswer: 2,
      explanation: "Nella sindrome ALPS, il difetto genetico dell'apoptosi indotta da attivazione (AICD) impedisce l'eliminazione dei linfociti T stimolati dall'antigene. Questo porta a massiva linfoadenopatia, splenomegalia e accumulo periferico dei caratteristici linfociti T 'doppi negativi' TCRαβ+ CD4- CD8-, che non riescono ad andare incontro a morte programmata Fas-dipendente."
    },
    {
      id: 8,
      question: "Quale molecola HLA di classe I presenta l'associazione epidemiologica più estrema con una patologia autoimmune/infiammatoria, con un Rischio Relativo (RR) prossimo a 87-90?",
      options: [
        "HLA-A*02 nella Sclerosi Multipla.",
        "HLA-B*27 nella Spondilite Anchilosante.",
        "HLA-Cw*06 nella Malattia di Crohn.",
        "HLA-B*51 nella Malattia Celiaca."
      ],
      correctAnswer: 1,
      explanation: "L'allele HLA-B*27 è presente in oltre il 90-95% dei pazienti affetti da Spondilite Anchilosante, conferendo un Rischio Relativo (RR) straordinario di circa 87-90 rispetto alla popolazione generale non portatrice dell'allele."
    },
    {
      id: 9,
      question: "Quale meccanismo eziopatogenetico spiega l'insorgenza della Febbre Reumatica Acuta e della Corea di Sydenham a seguito di una faringite da Streptococco beta-emolitico di gruppo A (GAS)?",
      options: [
        "Bystander activation mediata esclusivamente da rilascio massivo di istamina polmonare.",
        "Mimetismo molecolare (Molecular Mimicry): gli anticorpi diretti contro la proteina M dello streptococco cross-reagiscono con la miosina cardiaca, la laminina valvolare e i gangliosidi dei nuclei della base encefalici.",
        "Deficit primitivo congenito della proteina regolatrice C1-inibitore (C1-INH).",
        "Mutazione somatica de novo del gene FOXP3 indotta da tossine batteriche pirogene."
      ],
      correctAnswer: 1,
      explanation: "La febbre reumatica è il paradigma classico del mimetismo molecolare: la proteina M di Streptococcus pyogenes condivide omologie strutturali con molecole self umane. Gli anticorpi specifici cross-reagiscono con la miosina cardiaca (provocando cardite con valvulopatia mitralica/aortica), la laminina endoteliale e i gangliosidi dello striato/nuclei della base (causando la Corea di Sydenham)."
    },
    {
      id: 10,
      question: "In che modo gli acidi grassi a catena corta (SCFA), come il butirrato prodotto dalla fermentazione batterica intestinale, promuovono la tolleranza immunologica periferica?",
      options: [
        "Inibendo le istone deacetilasi (HDAC), favorendo l'acetilazione dell'enhancer CNS1 del gene FOXP3 e la differenziazione dei linfociti iTreg mucosali.",
        "Degradando selettivamente i recettori toll-like TLR4 sulla superficie delle cellule enterocitiche.",
        "Bloccando irreversibilmente la maturazione delle cellule Natural Killer nella milza.",
        "Inducendo l'immediata sintesi di anticorpi citotossici IgE contro tutti i ceppi batterici anaerobi."
      ],
      correctAnswer: 0,
      explanation: "Il butirrato e altri metaboliti microbici (SCFA) fungono da inibitori delle istone deacetilasi (HDACi). Questo stato iper-acetilato mantiene aperto e trascrizionalmente attivo il locus del gene FOXP3 (in particolare la regione regolatoria CNS1), promuovendo in modo decisivo l'induzione periferica dei linfociti T regolatori (iTreg) nella lamina propria intestinale."
    }
  ];

  const flashcardsData = [
    {
      id: 1,
      title: "Esperimento del Topo Chimerico (Medawar, 1960)",
      front: "Come dimostrò Sir Peter Medawar la natura acquisita della tolleranza immunologica?",
      back: "Inoculando cellule emopoietiche allogeniche del ceppo A in feti/neonati di ceppo B. Da adulti, i topi B non rigettavano l'innesto di cute del donatore A, mentre rigettavano prontamente quello di un ceppo C non correlato. La tolleranza verso il self non è innata nel genoma ma acquisita durante lo sviluppo ontogenetico."
    },
    {
      id: 2,
      title: "Fattore di Trascrizione AIRE & Sindrome APS-1",
      front: "Cos'è AIRE, dove agisce e cosa comporta la sua mutazione nell'uomo?",
      back: "AIRE (AutoImmune REgulator) induce nelle mTEC l'espressione ectopica di migliaia di antigeni tessuto-specifici periferici (TRA, come insulina o tireoglobulina) per la selezione negativa. La sua mutazione provoca la sindrome APS-1/APECED: candidiasi mucocutanea cronica, ipoparatiroidismo primitivo e morbo di Addison."
    },
    {
      id: 3,
      title: "Sindrome IPEX & Fattore FoxP3",
      front: "Qual è la base genetica della sindrome IPEX e quale quadro clinico manifesta?",
      back: "Mutazione recessiva legata all'X del gene FOXP3, determinante per lo sviluppo e la funzione dei linfociti T regolatori (Treg). Senza Treg funzionali, i neonati maschi sviluppano enteropatia secretoria fulminante, diabete neonatale autoimmune ed eczema severo (terapia: trapianto di midollo o immunosoppressione massiva)."
    },
    {
      id: 4,
      title: "Meccanismo Molecolare di CTLA-4 (CD152)",
      front: "Quali sono i tre meccanismi con cui CTLA-4 spegne la risposta immunitaria?",
      back: "1) Competizione sterica ad altissima affinità con CD28 per i ligandi B7 (CD80/CD86). 2) Trans-endocitosi: CTLA-4 strappa fisicamente B7 dalla membrana dell'APC degradandolo. 3) Segnale retrogrado nell'APC che stimola l'enzima IDO, esaurendo il triptofano e generando chinurenine immunosoppressive."
    },
    {
      id: 5,
      title: "Sindrome ALPS & Linfociti Doppi Negativi",
      front: "Qual è il difetto biologico nella sindrome ALPS e qual è il biomarcatore patognomonico?",
      back: "Difetto genetico dell'apoptosi indotta da attivazione (AICD) da mutazioni eterozigoti di FAS, FASL o Caspasi-10. Mancando la contrazione clonale omeostatica, si osserva linfoadenopatia massiva cronica, splenomegalia, citopenie autoimmuni e accumulo nel sangue di linfociti T TCRαβ+ CD4- CD8- (doppi negativi)."
    },
    {
      id: 6,
      title: "Mimetismo Molecolare: Febbre Reumatica Acuta",
      front: "Come scaturisce la Febbre Reumatica e la Corea di Sydenham dall'infezione da streptococco GAS?",
      back: "La risposta anticorpale anti-proteina M di Streptococcus pyogenes cross-reagisce con la miosina cardiaca (causando cardite e valvulopatia mitralica permanente), la laminina endoteliale e i gangliosidi dei nuclei della base encefalici (causando i movimenti coreici involontari della Corea di Sydenham)."
    }
  ];

  return (
    <div className="space-y-12">
      {/* MONOGRAPHIC HERO SECTION */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="border-b border-slate-200 bg-gradient-to-r from-teal-900 via-emerald-950 to-slate-900 p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                Lezione 30 · Tolleranza Immunologica & Autoimmunità
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-white">
                Tolleranza Centrale e Periferica, Basi Genetiche dell'Autoimmunità & Triggers Ambientali
              </h1>
              <p className="text-emerald-100/90 text-sm sm:text-base mt-2 max-w-4xl">
                Dall'ontogenesi timica con il fattore trascrizionale AIRE ai checkpoint periferici guidati da FoxP3 e CTLA-4;
                dissezione clinico-molecolare delle malattie monogeniche (APS-1, IPEX, ALPS, deficit di CTLA-4), predisposizione HLA
                e i tre meccanismi scatenanti ambientali: bystander activation, mimetismo molecolare ed epitope spreading.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-emerald-800/50 text-xs text-emerald-200/90 font-medium">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-emerald-400" />
              <span><strong>Docente:</strong> Prof.ssa Ricciarda Galandrini</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span><strong>Data:</strong> 10 Dicembre 2025 (1ª e 2ª ora)</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-400" />
              <span><strong>Sbobinatori:</strong> Giulia Bella, Sara Colangelo | <strong>Revisori:</strong> Stefano Bergamasco, Margherita Cillerai</span>
            </div>
          </div>
        </div>

        {/* METRICS & OVERVIEW STRIP */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-200 bg-slate-50 border-b border-slate-200 text-xs">
          <div className="p-4 flex items-center gap-3">
            <Dna className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900">Selezione Timica</div>
              <div className="text-slate-500 text-[11px]">AIRE, nTreg & Avidità TCR</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-teal-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900">4 Sindromi Monogeniche</div>
              <div className="text-slate-500 text-[11px]">APS-1, IPEX, ALPS & CTLA-4</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-3">
            <Activity className="w-5 h-5 text-rose-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900">Triggers Ambientali</div>
              <div className="text-slate-500 text-[11px]">Mimicry, Bystander, Spreading</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-3">
            <SlidersHorizontal className="w-5 h-5 text-indigo-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900">2 Laboratori Interattivi</div>
              <div className="text-slate-500 text-[11px]">Simulazione Basi Molecolari</div>
            </div>
          </div>
        </div>
      </div>

      {/* SEZIONE 30.1: FONDAMENTI DELLA TOLLERANZA & PROSPETTIVA STORICA */}
      <article id="sec-30-1" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-700 font-semibold block">
            Sezione 30.1 · Inquadramento Epistemologico
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Fondamenti della Tolleranza Immunologica & la Pietra Miliare di Burnet e Medawar
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            La <strong>tolleranza immunologica</strong> non rappresenta un semplice stato passivo di inattività o ignoranza dell'organismo verso
            le proprie molecole, bensì un <em>processo attivo, altamente coordinato ed energeticamente dispendioso</em> con cui il sistema
            immunitario previene ed estingue risposte dirette contro gli antigeni propri (<strong>autoantigeni o self</strong>), garantendo al contempo
            la piena reattività e immunocompetenza verso l'eterogeneo universo degli agenti patogeni esogeni (<em>non-self</em>).
          </p>
          <p>
            Dal punto di vista definitorio rigoroso, per tolleranza si intende la <strong>mancata risposta immunogenica specifica</strong> verso
            un determinato antigene, indotta da un precedente contatto con l'antigene stesso in specifiche finestre ontogenetiche o condizioni
            microambientali non infiammatorie. Gli antigeni capaci di generare tolleranza anziché scatenare una risposta effettrice vengono
            definiti <strong>tollerogeni</strong>, a differenza degli <em>immunogeni</em>.
          </p>

          <div className="my-6 p-5 rounded-xl border border-emerald-200 bg-emerald-50/70">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-emerald-950 text-sm">
                  Il Premio Nobel 1960: Sir Frank Macfarlane Burnet & Sir Peter Brian Medawar
                </h4>
                <p className="text-emerald-900 text-xs mt-1.5 leading-relaxed font-serif-body">
                  Nel 1949, Frank Macfarlane Burnet postulò teoricamente che i linfociti capaci di riconoscere componenti dell'organismo
                  fossero fisicamente eliminati durante lo sviluppo fetale primordiale, formulando il cardine della selezione clonale.
                  Pochi anni più tardi, nel 1953, Peter Medawar fornì la spettacolare <strong>dimostrazione sperimentale del chimerismo neonatale</strong>:
                  inoculando cellule emopoietiche e spleniche vive di un ceppo murino donatore (Ceppo A) all'interno di embrioni o topi neonati
                  di un ceppo geneticamente differente (Ceppo B), i topi B da adulti risultavano permanentemente incapaci di rigettare
                  un innesto cutaneo proveniente dal Ceppo A (conservando invece la fisiologica capacità di rigettare con cinetica acuta
                  innesti cutanei di un terzo ceppo indifferente C).
                </p>
              </div>
            </div>
          </div>

          <p>
            Questo esperimento epocale sancì il principio fondamentale secondo cui la capacità di distinguere il <em>self</em> dal <em>non-self</em> non
            è rigidamente precodificata nella sequenza genica della linea germinale, ma viene <strong>appresa ed acquisita ontogeneticamente</strong> durante
            il differenziamento linfocitario attraverso l'incontro educativo con gli antigeni presenti nell'organismo.
          </p>
          <p>
            L'architettura della tolleranza poggia pertanto su due barriere sequenziali imprescindibili:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-800">
            <li>
              <strong>Tolleranza Centrale:</strong> opera negli organi linfoidi primari (il <em>timo</em> per i linfociti T, il <em>midollo osseo</em> per i linfociti B),
              intercettando ed eliminando per apoptosi (delezione clonale) o rieducando (receptor editing) i cloni immaturi ad altissima affinità per il self.
            </li>
            <li>
              <strong>Tolleranza Periferica:</strong> opera nei tessuti periferici e negli organi linfoidi secondari (linfonodi, milza, MALT), fungendo da rete
              di sicurezza indispensabile per neutralizzare, sopprimere o anergizzare quei cloni autoreattivi a bassa o intermedia affinità inevitabilmente
              sfuggiti ai filtri centrali.
            </li>
          </ul>
        </div>
      </article>

      {/* SEZIONE 30.2: TOLLERANZA CENTRALE TIMICA & FATTORE AIRE */}
      <article id="sec-30-2" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-700 font-semibold block">
            Sezione 30.2 · Anatomia Funzionale Timica
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Tolleranza Centrale T: cTEC, mTEC, Selezione Positiva/Negativa & il Ruolo di AIRE
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            La maturazione dei timociti nel timo è un processo rigidamente compartimentalizzato lungo un asse cortico-midollare:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50">
              <div className="flex items-center gap-2 font-bold text-blue-900 text-sm mb-2">
                <Microscope className="w-4 h-4 text-blue-600" />
                <span>Corticale Timica: cTEC & Selezione Positiva</span>
              </div>
              <p className="text-slate-700 text-xs leading-relaxed">
                Le cellule epiteliali timiche corticali (<strong>cTEC</strong>) presentano peptidi self complessati a molecole MHC-I e MHC-II.
                I timociti doppi positivi (CD4+CD8+) capaci di ingaggiare pMHC con <em>affinità debole o moderata</em> ricevono segnali trofici di sopravvivenza
                (selezione positiva, garantendo la restrizione per il self-MHC). Quelli incapaci di legare alcun MHC muoiono per incuria (<em>death by neglect</em>, oltre l'85-90% dei precursori).
              </p>
            </div>
            <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/50">
              <div className="flex items-center gap-2 font-bold text-purple-900 text-sm mb-2">
                <ShieldAlert className="w-4 h-4 text-purple-600" />
                <span>Midollare Timica: mTEC & Selezione Negativa</span>
              </div>
              <p className="text-slate-700 text-xs leading-relaxed">
                Nella giunzione cortico-midollare e nella midollare, le cellule epiteliali midollari (<strong>mTEC</strong>) e le cellule dendritiche timiche
                espongono autoantigeni sia ubiquitari che organo-specifici. I timociti a singolo positivo (CD4+ o CD8+) che legano tali complessi con
                <strong>avidità eccessivamente elevata</strong> ricevono un segnale apoptotico letale via recettori di morte e attivazione della proteina pro-apoptotica Bim (delezione clonale).
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Il Fattore Trascrizionale AIRE (AutoImmune REgulator) & l'Espressione Ectopica Promiscua
          </h3>
          <p>
            Per decenni, un profondo enigma immunologico ha riguardato la modalità con cui il timo potesse selezionare negativamente cloni T
            specifici per proteine espresse esclusivamente in distretti anatomici remoti ed extraparenchimali (ad esempio: insulina prodotta
            dalle cellule β pancreatiche, tireoglobulina tiroidea, proteina basica della mielina nel sistema nervoso centrale, o tirosinasi nei melanociti).
          </p>
          <p>
            La soluzione molecolare risiede nel fattore <strong>AIRE (AutoImmune REgulator)</strong>, un fattore trascrizionale ed epigenetico
            altamente specializzato espresso quasi unicamente dalle mTEC mature. AIRE agisce promuovendo il <em>rilassamento conformazionale della cromatina condensata</em>,
            permettendo la trascrizione promiscua ed ectopica di oltre 4.000 geni codificanti per antigeni tessuto-ristretti (<strong>Tissue-Restricted Antigens, TRA</strong>).
            Queste proteine vengono processate e caricate su MHC-I e MHC-II delle mTEC, nonché trasferite alle cellule dendritiche residenti per cross-presentazione.
          </p>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/80 my-4">
            <div className="flex items-center gap-2 font-bold text-amber-950 text-sm mb-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Correlato Clinico Monogenico: Sindrome APS-1 / APECED</span>
            </div>
            <p className="text-amber-900 text-xs leading-relaxed font-serif-body">
              La mutazione o delezione biallelica del gene <strong>AIRE</strong> (cromosoma 21q22.3) causa la <em>Sindrome Poliendocrina Autoimmune di Tipo 1</em>
              (APS-1), nota anche come APECED (<em>Autoimmune Polyendocrinopathy-Candidiasis-Ectodermal Dystrophy</em>).
              In assenza di AIRE, le mTEC non esprimono i TRA periferici; i linfociti T autoreattivi per organi endocrini non incontrano il loro antigene nel timo,
              evadono la selezione negativa e invadono la periferia scatenando la distruzione immunitaria multiorgano.
              La malattia si manifesta con la tipica triade: <strong>Candidiasi mucocutanea cronica</strong> (secondaria alla presenza di autoanticorpi neutralizzanti
              anti-IL-17 e anti-IL-22), <strong>Ipoparatiroidismo primitivo</strong> e <strong>Morbo di Addison autoimmune</strong> (insufficienza corticosurrenalica).
            </p>
          </div>
        </div>
      </article>

      {/* SEZIONE 30.3: AVIDITA' DEL TCR, DESTINI DEI TIMOCITI & TOLLERANZA CENTRALE B */}
      <article id="sec-30-3" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-700 font-semibold block">
            Sezione 30.3 · Meccanismi Differenziativi
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Lo Spettro di Avidità del TCR: Dalla Delezione Clonale ai Linfociti nTreg FoxP3+ e Receptor Editing nei B
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Il destino del timocita che interagisce con il complesso autoantigene-MHC (pMHC) è governato da una rigorosa gradazione quantitativa
            dell'<strong>avidità complessiva</strong> (determinata dall'affinità stereochimica del singolo legame TCR-pMHC moltiplicata per la densità di complessi
            esposti sulla membrana dell'APC):
          </p>
          <div className="space-y-3 my-4">
            <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-3">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-200 text-slate-700 mt-0.5 shrink-0">Avidità Null/Bassa</span>
              <p className="text-xs text-slate-700">
                <strong>Sopravvivenza convenzionale naïve:</strong> il legame debole supera la soglia di morte per incuria nella corticale e non raggiunge la soglia
                di attivazione letale nella midollare. Il timocita completa la maturazione a CD4+ o CD8+ a singolo positivo e migra nei tessuti periferici
                come linfocita T naïve non autoreattivo.
              </p>
            </div>
            <div className="p-3.5 rounded-lg border border-emerald-200 bg-emerald-50/70 flex items-start gap-3">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-200 text-emerald-800 mt-0.5 shrink-0">Avidità Intermedia</span>
              <p className="text-xs text-emerald-950 font-serif-body">
                <strong>Deviazione in nTreg FoxP3+:</strong> una specifica finestra di avidità medio-alta — insufficiente per innescare l'apoptosi massiva
                ma superiore a quella dei T naïve — recluta segnali molecolari istruenti che accendono stabilmente il master transcription factor <strong>FoxP3</strong>.
                Il timocita si converte in <strong>linfocita T regolatore naturale (nTreg o tTreg)</strong>, programmandosi per svolgere funzioni soppressive in periferia.
              </p>
            </div>
            <div className="p-3.5 rounded-lg border border-rose-200 bg-rose-50/70 flex items-start gap-3">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-200 text-rose-800 mt-0.5 shrink-0">Avidità Elevata</span>
              <p className="text-xs text-rose-950 font-serif-body">
                <strong>Delezione clonale apoptotica:</strong> l'iper-ingaggio del TCR scatena un massivo influsso di calcio intracellulare, iperattivazione della calcineurina
                e sintesi della proteina BH3-only <strong>Bim</strong>. Bim neutralizza Bcl-2 e Bcl-xL, permeabilizzando la membrana mitocondriale esterna con rilascio di
                citocromo c, formazione dell'apoptosoma con Apaf-1 e attivazione della Caspasi-9 e Caspasi-3.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Tolleranza Centrale dei Linfociti B nel Midollo Osseo: Delezione, Anergia & Receptor Editing
          </h3>
          <p>
            Anche i linfociti B immaturi che esprimono IgM di membrana nel midollo osseo sono sottoposti a rigoroso vaglio di tolleranza centrale:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-800">
            <li>
              <strong>Delezione Clonale:</strong> cloni B immaturi che legano con forte avidità antigeni self multimerici di membrana vanno incontro ad apoptosi.
            </li>
            <li>
              <strong>Anergia:</strong> se l'autoantigene è solubile o monovalente con debole cross-linking, il linfocita B perde la motilità recettoriale,
              sottoregola le IgM di membrana ed entra in uno stato di iporesponsività perenne.
            </li>
            <li>
              <strong>Receptor Editing (Editing Recettoriale):</strong> a differenza dei linfociti T, il linfocita B autoreattivo dispone di un meccanismo di recupero
              straordinario. L'ingaggio dell'autoantigene non induce immediatamente l'apoptosi, bensì <em>riaccende la trascrizione degli enzimi RAG1 e RAG2</em>.
              Il linfocita B riprende il riarrangiamento genico dei segmenti V e J della catena leggera κ a monte o, se i loci κ sono esauriti,
              riarrangia i geni della catena leggera λ. Se la nuova catena leggera conferisce al BCR una specificità non-autoreattiva, il clone viene salvato ed esportato in periferia.
            </li>
          </ul>
        </div>
      </article>

      {/* SEZIONE 30.4: MECCANISMI DELLA TOLLERANZA PERIFERICA: TREG, IL-2 & CITOCHINE */}
      <article id="sec-30-4" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-700 font-semibold block">
            Sezione 30.4 · Checkpoint Periferici
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Tolleranza Periferica: Linfociti Treg (FoxP3+), Sequestro di IL-2 (CD25) & Citochine Soppressive
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Nonostante l'efficienza della selezione timica, una frazione fisiologica di cloni T autoreattivi a bassa-media affinità riesce a fuggire
            nel sangue e nei tessuti periferici. La prevenzione della distruzione autoimmune sistemica è affidata ad una rete integrata di meccanismi periferici,
            tra cui primeggia la sorveglianza attiva operata dai <strong>Linfociti T Regolatori (Treg)</strong>.
          </p>
          <p>
            I Treg sono contraddistinti dal fenotipo fenotipico molecolare:
            <code className="mx-1 px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 font-mono text-xs font-bold">
              CD4+ CD25^high FoxP3+ CD127^low
            </code>. Si suddividono ontogeneticamente in due popolazioni principali:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3">
            <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-900 text-xs block mb-1">nTreg (tTreg - Naturali Timici)</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Generati nel timo durante la selezione centrale ad avidità intermedia. Riconoscono prevalentemente autoantigeni tessutali e sono stabili epigeneticamente grazie alla demetilazione della regione TSDR del gene FoxP3.
              </p>
            </div>
            <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-900 text-xs block mb-1">iTreg (pTreg - Indotti Periferici)</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Generati nella lamina propria intestinale e nei linfonodi periferici a partire da CD4+ convenzionali naïve stimolati con antigene in presenza di alte concentrazioni di TGF-β, Acido Retinoico e acidi grassi a catena corta (SCFA).
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            La Triade dei Meccanismi Soppressivi dei Linfociti Treg
          </h3>
          <ol className="list-decimal pl-5 space-y-3 text-slate-800">
            <li>
              <strong>Sequestro Metabolico di IL-2 (Consumo Competitivo via CD25):</strong>
              i Treg esprimono concentrazioni straordinariamente elevate della subunità recettoriale α dell'IL-2 (<strong>CD25</strong>),
              che associata a CD122 e CD132 forma il trimero ad altissima affinità (Kd ≈ 10⁻¹¹ M). Al tempo stesso,
              il fattore FoxP3 lega il promotore di IL-2 reprimendone totalmente la trascrizione autonoma. I Treg agiscono perciò come vere e proprie
              <strong>"spugne metaboliche"</strong>: captano avidamente l'IL-2 secreta dalle cellule circostanti, privando i linfociti T responder convenzionali
              del loro segnale di sopravvivenza indispensabile e provocandone la morte apoptotica per deplezione citochinica.
            </li>
            <li>
              <strong>Secrezione di Citochine Immunosoppressive (IL-10 & TGF-β):</strong>
              l'<strong>IL-10</strong> inibisce l'espressione di MHC di classe II e dei costimoli CD80/CD86 sulle cellule dendritiche e sopprime la secrezione di
              citochine pro-infiammatorie (IL-12, TNF-α). Il <strong>TGF-β</strong> blocca direttamente la proliferazione T e B, sopprime l'attività
              macrofagica e promuove la differenziazione contagiosa di ulteriori iTreg.
            </li>
            <li>
              <strong>Generazione di Adenosina Immunosoppressiva (Asse Ectoenzimatico CD39 / CD73):</strong>
              i Treg esprimono in membrana gli ectoenzimi CD39 (nucleoside trifosfato difosfoidrolasi-1) e CD73 (5'-nucleotidasi), che degradano a cascata
              l'ATP extracellulare pro-infiammatorio in <em>Adenosina</em>. L'adenosina lega i recettori purinergici A2A sui linfociti effettori adiacenti,
              innalzando i livelli di cAMP intracellulare e spegnendo la risposta immune.
            </li>
          </ol>
        </div>
      </article>

      {/* SEZIONE 30.5: CTLA-4 (CD152) & TRANSO-ENDOCITOSI */}
      <article id="sec-30-5" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-700 font-semibold block">
            Sezione 30.5 · Biologia Molecolare dei Checkpoint
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Biologia Molecolare di CTLA-4 (CD152): Competizione Sterica, Trans-endocitosi & Induzione di IDO
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Il recettore inibitorio <strong>CTLA-4 (Cytotoxic T-Lymphocyte Antigen 4, CD152)</strong> è il freno omeostatico cardine della risposta T,
            espresso costitutivamente ad alti livelli dai linfociti Treg e rapidamente indotto nei linfociti T convenzionali nelle prime 24–48 ore dopo l'attivazione.
          </p>
          <p>
            CTLA-4 condivide con la molecola costimolatoria di attivazione <strong>CD28</strong> i medesimi ligandi espressi sulla cellula presentante l'antigene (APC):
            <strong>B7-1 (CD80)</strong> e <strong>B7-2 (CD86)</strong>. Tuttavia, le caratteristiche biofisiche e funzionali ne sanciscono la netta predominanza:
          </p>

          <div className="p-4 rounded-xl border border-teal-200 bg-teal-50/70 my-4 space-y-3">
            <div className="flex items-center gap-2 font-bold text-teal-950 text-sm">
              <Zap className="w-4 h-4 text-teal-600" />
              <span>I Tre Meccanismi di Spegnimento Esercitati da CTLA-4</span>
            </div>
            <div className="space-y-2 text-xs text-teal-950">
              <p>
                <strong>1. Competizione Sterica Diretto ad Altissima Affinità:</strong>
                CTLA-4 possiede un'affinità di legame per CD80 e CD86 da <strong>20 a 100 volte superiore</strong> rispetto a CD28.
                Pertanto, anche in presenza di quantità limitanti di molecole B7 sulla superficie dell'APC, CTLA-4 sequestra tutti i siti di legame,
                lasciando CD28 completamente orfano del suo ligando e impedendo il fondamentale Segnale 2.
              </p>
              <p>
                <strong>2. Trans-endocitosi (Spoliazione Fisica dei Ligandi B7):</strong>
                CTLA-4 non si limita a bloccare l'interazione: quando il recettore ingaggia CD80 o CD86 sull'APC, si attiva un processo di
                <em>endocitosi forzata mediata da clatrina nel linfocita T</em> che strappa fisicamente l'intero complesso molecolare B7
                dalla membrana plasmatica della cellula dendritica. Le molecole B7 vengono internalizzate e degradate nei lisosomi del linfocita T.
                La cellula dendritica viene letteralmente "disarmata" e resa incapace di attivare qualsiasi altro linfocita T naïve.
              </p>
              <p>
                <strong>3. Segnale Retrogrado nell'APC & Induzione dell'Enzima IDO:</strong>
                Il forte cross-linking di CD80 e CD86 mediato da CTLA-4 invia un segnale di trasduzione retrogrado all'interno dell'APC stessa,
                inducendo la trascrizione e l'attivazione dell'enzima metabolico <strong>IDO (indolammina-2,3-diossigenasi)</strong>.
                L'IDO catabolizza l'aminoacido essenziale <em>L-Triptofano</em> degradandolo in <strong>Chinurenine</strong>.
                La rapida deplezione locale di triptofano attiva la chinasi intracellulare GCN2, che blocca la sintesi proteica e arresta il ciclo cellulare
                dei linfociti T responder, mentre le chinurenine rilasciate legano il recettore AhR promuovendo la trans-differenziazione di ulteriori iTreg.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* SEZIONE 30.6: ANERGIA, ESAURIMENTO (EXHAUSTION) & APOPTOSI AICD */}
      <article id="sec-30-6" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-700 font-semibold block">
            Sezione 30.6 · Stati di Iporesponsività Funzionale
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Anergia da Mancata Costimolazione, Esaurimento T (Exhaustion) & Apoptosi AICD (Fas-FasL)
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Oltre alla soppressione mediata da cellule regolatrici e checkpoint solubili, la tolleranza periferica poggia su tre stati intrinseci di spegnimento clonale:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-900 text-sm block mb-1 text-blue-900">1. Anergia Linfocitaria</span>
              <span className="text-[11px] font-mono text-slate-500 block mb-2">Segnale 1 Isolato</span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Si instaura quando il TCR ingaggia il complesso pMHC su una cellula dendritica resting o immatura priva di molecole B7.
                L'attivazione di NFAT in assenza del segnale 2 (mancanza del complesso AP-1 Fos/Jun) innesca la trascrizione di ubiquitina ligasi E3
                (come <strong>Cbl-b</strong>, GRAIL e Itch). Queste enzimi ubiquitinano selettivamente i trasduttori del segnale a valle del TCR (CD3ζ, ZAP-70, PLCγ),
                degradandoli e rendendo la cellula permanentemente incapace di rispondere a successivi stimoli, anche in presenza di costimolazione ottimale.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-900 text-sm block mb-1 text-purple-900">2. T-Cell Exhaustion</span>
              <span className="text-[11px] font-mono text-slate-500 block mb-2">Stimolo Cronico Persistente</span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Stato di esaurimento funzionale progressivo che subentra durante infezioni virali croniche (HCV, HIV, HBV) o nel microambiente tumorale solido.
                La continua esposizione all'antigene senza risoluzione induce una sovraespressione cooperativa e irreversibile di recettori inibitori
                (<strong>PD-1, CTLA-4, TIM-3, LAG-3, TIGIT</strong>). I domini intracellulari ITIM/ITSM reclutano le tirosin-fosfatasi <strong>SHP-1 e SHP-2</strong>,
                spegnendo la cascata PI3K/Akt/mTOR e inibendo la produzione di IL-2, IFN-γ e TNF-α.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-900 text-sm block mb-1 text-rose-900">3. Apoptosi AICD</span>
              <span className="text-[11px] font-mono text-slate-500 block mb-2">Asse Fas (CD95) – FasL</span>
              <p className="text-xs text-slate-700 leading-relaxed">
                L'<em>Apoptosi Indotta da Attivazione</em> (AICD) garantisce la tempestiva contrazione omeostatica dell'espansione clonale al termine della risposta immune.
                I linfociti T ripetutamente attivati co-esprimono sulla membrana sia il recettore di morte <strong>Fas (CD95)</strong> che il suo ligando <strong>FasL (CD178)</strong>.
                La loro interazione trimerizza i Death Domain citoplasmatici, reclutando l'adattatore FADD per assemblare il complesso DISC (<em>Death-Inducing Signaling Complex</em>),
                che attiva per clivaggio autocatalitico la Pro-Caspasi-8 e Caspasi-10 inducendo la morte per apoptosi estrinseca.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* SIMULATORE 1: LABORATORIO TOLLERANZA CENTRALE & PERIFERICA */}
      <div id="sim-tolerance-thymus-lab" className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Microscope className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold block">
                Simulatore Didattico Interattivo 30.1
              </span>
              <h3 className="text-xl font-bold text-white">
                Laboratorio Molecolare della Tolleranza: Selezione Timica, AIRE, nTreg & Checkpoint CTLA-4
              </h3>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono">
            Parametri Biofisici Dinamici
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls Column */}
          <div className="space-y-5 bg-slate-800/60 p-5 rounded-xl border border-slate-700/60 text-xs">
            <div>
              <label className="text-slate-300 font-bold block mb-2">1. Stato del Fattore Trascrizionale AIRE (mTEC):</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSimAireStatus('wildtype')}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    simAireStatus === 'wildtype'
                      ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200 font-bold ring-1 ring-emerald-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-semibold">Wild-Type (Attivo)</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Espressione di ~4000 TRA</div>
                </button>
                <button
                  onClick={() => setSimAireStatus('mutated_aps1')}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    simAireStatus === 'mutated_aps1'
                      ? 'bg-rose-600/30 border-rose-400 text-rose-200 font-bold ring-1 ring-rose-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-semibold">Mutato (APS-1)</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Assenza totale di TRA</div>
                </button>
              </div>
            </div>

            <div>
              <label className="text-slate-300 font-bold block mb-2">2. Avidità del TCR per Autoantigene-pMHC:</label>
              <div className="grid grid-cols-3 gap-1.5">
                <button
                  onClick={() => setSimTcrAvidity('low')}
                  className={`p-2 rounded-lg border text-center transition-all ${
                    simTcrAvidity === 'low'
                      ? 'bg-blue-600/30 border-blue-400 text-blue-200 font-bold ring-1 ring-blue-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Bassa
                </button>
                <button
                  onClick={() => setSimTcrAvidity('intermediate')}
                  className={`p-2 rounded-lg border text-center transition-all ${
                    simTcrAvidity === 'intermediate'
                      ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200 font-bold ring-1 ring-emerald-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Intermedia
                </button>
                <button
                  onClick={() => setSimTcrAvidity('high')}
                  className={`p-2 rounded-lg border text-center transition-all ${
                    simTcrAvidity === 'high'
                      ? 'bg-rose-600/30 border-rose-400 text-rose-200 font-bold ring-1 ring-rose-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Elevata
                </button>
              </div>
            </div>

            <div>
              <label className="text-slate-300 font-bold block mb-2">3. Costimolazione Periferica & Checkpoint CTLA-4:</label>
              <div className="space-y-1.5">
                <button
                  onClick={() => setSimCostimulationState('normal_b7')}
                  className={`w-full p-2 rounded-lg border text-left transition-all ${
                    simCostimulationState === 'normal_b7'
                      ? 'bg-teal-600/30 border-teal-400 text-teal-200 font-bold ring-1 ring-teal-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  DC Matura con CD80/CD86 fisiologico
                </button>
                <button
                  onClick={() => setSimCostimulationState('ctla4_active')}
                  className={`w-full p-2 rounded-lg border text-left transition-all ${
                    simCostimulationState === 'ctla4_active'
                      ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200 font-bold ring-1 ring-emerald-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  CTLA-4 Attivo (Trans-endocitosi & Induzione IDO)
                </button>
                <button
                  onClick={() => setSimCostimulationState('ipilimumab_block')}
                  className={`w-full p-2 rounded-lg border text-left transition-all ${
                    simCostimulationState === 'ipilimumab_block'
                      ? 'bg-amber-600/30 border-amber-400 text-amber-200 font-bold ring-1 ring-amber-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Blocco CTLA-4 con Ipilimumab (Terapia Oncologica)
                </button>
                <button
                  onClick={() => setSimCostimulationState('orphan_anergy')}
                  className={`w-full p-2 rounded-lg border text-left transition-all ${
                    simCostimulationState === 'orphan_anergy'
                      ? 'bg-indigo-600/30 border-indigo-400 text-indigo-200 font-bold ring-1 ring-indigo-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  APC Resting priva di B7 (Induzione Anergia)
                </button>
              </div>
            </div>
          </div>

          {/* Visualization & Outcome (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Dynamic Status Card */}
            <div className="p-5 rounded-xl border border-slate-700 bg-slate-800/80">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Esito Biologico del Clone Linfocitario
                </span>
                <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold ${
                  simAireStatus === 'mutated_aps1' && simTcrAvidity === 'high'
                    ? 'bg-rose-950 text-rose-300 border border-rose-700'
                    : simTcrAvidity === 'intermediate'
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                    : simCostimulationState === 'orphan_anergy'
                    ? 'bg-indigo-950 text-indigo-300 border border-indigo-700'
                    : 'bg-blue-950 text-blue-300 border border-blue-700'
                }`}>
                  {simAireStatus === 'mutated_aps1' && simTcrAvidity === 'high'
                    ? 'FUGA AUTOREATTIVA GRAVE'
                    : simTcrAvidity === 'intermediate'
                    ? 'DIFFERENZIAMENTO nTreg'
                    : simTcrAvidity === 'high'
                    ? 'DELEZIONE CLONALE (APOPTOSI)'
                    : simCostimulationState === 'orphan_anergy'
                    ? 'ANERGIA PERIFERICA DUREVOLE'
                    : 'SOPRAVVIVENZA T NAÏVE'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">Espressione FoxP3</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {simTcrAvidity === 'intermediate' ? '+++ (Massiva)' : '- (Represso)'}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">Stato Ligandi B7 su APC</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {simCostimulationState === 'ctla4_active'
                      ? 'Denudati (Trans-endocitosi)'
                      : simCostimulationState === 'orphan_anergy'
                      ? 'Assenti (Resting)'
                      : 'Espressi su Membrana'}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">Attività Enzimatica IDO</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {simCostimulationState === 'ctla4_active' ? 'Elevata (Chinurenine ↑)' : 'Basale / Inattiva'}
                  </div>
                </div>
              </div>

              {/* Mechanistic Explanation Text */}
              <div className="mt-4 p-4 rounded-lg bg-slate-900/90 border border-slate-700 text-xs leading-relaxed">
                <div className="font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Dettaglio della Dinamica Molecolare:</span>
                </div>
                {simAireStatus === 'mutated_aps1' && simTcrAvidity === 'high' ? (
                  <p className="text-rose-200">
                    <strong>Paradosso Patologico della Sindrome APS-1:</strong> Poiché AIRE è inattivato, le mTEC non sintetizzano gli antigeni tessuto-specifici periferici (TRA).
                    Il timocita ad altissima affinità per proteine endocrine non incontra il suo ligando nella midollare timica ed evita la fisiologica delezione apoptotica.
                    Il clone migra immodificato in circolo e, incontrando la proteina bersaglio (es. 21-idrossilasi surrenalica o CaSR paratiroideo), innesca una reazione autoimmune distruttiva.
                  </p>
                ) : simTcrAvidity === 'intermediate' ? (
                  <p className="text-emerald-200">
                    <strong>Generazione Fisiologica di Linfociti T Regolatori:</strong> L'avidità intermedia ingaggia il TCR al di sotto della soglia letale di Bim,
                    ma attiva NFAT in modo persistente inducendo la demetilazione della regione non codificante CNS2 (TSDR) del locus FoxP3.
                    La cellula esprime alti livelli di CD25, CTLA-4 e GITR, pronta a svolgere compiti di immunosoppressione sistemica.
                  </p>
                ) : simTcrAvidity === 'high' ? (
                  <p className="text-blue-200">
                    <strong>Selezione Negativa Intatta:</strong> Le mTEC esprimono i TRA grazie ad AIRE wild-type. L'ingaggio ad altissima avidità scatena un'elevata
                    attivazione mitocondriale mediata da Bim, provocando il collasso del potenziale di membrana, rilascio di citocromo c e morte del timocita per apoptosi.
                  </p>
                ) : simCostimulationState === 'orphan_anergy' ? (
                  <p className="text-indigo-200">
                    <strong>Induzione di Anergia Periferica:</strong> Il linfocita lega il complesso pMHC (Segnale 1) su una DC resting non infiammata priva di B7 (Segnale 2 assente).
                    In assenza di Ras/MAPK e costimolo, l'attivazione isolata di NFAT stimola l'ubiquitina-ligasi Cbl-b, bloccando permanentemente la via di trasduzione a valle del TCR.
                  </p>
                ) : simCostimulationState === 'ipilimumab_block' ? (
                  <p className="text-amber-200">
                    <strong>Inibizione Farmacologica dei Checkpoint (Immuno-Oncologia):</strong> L'anticorpo monoclonale Ipilimumab blocca CTLA-4. CD28 può legare liberamente B7
                    senza subire trans-endocitosi o inibizione da IDO. Si ottiene un potenziamento massivo dell'attivazione dei cloni T antitumorali, a fronte di un aumentato
                    rischio di tossicità autoimmune (irAEs, es. ipofisite, colite e tiroidite).
                  </p>
                ) : (
                  <p className="text-slate-300">
                    <strong>Omeostasi T Naïve:</strong> Il timocita a bassa avidità supera la selezione corticale ed evita la delezione midollare. Nei linfonodi periferici,
                    incontra APC con espressione fisiologica di CD80/CD86, rimanendo silente in assenza di PAMPs/DAMPs infiammatori.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEZIONE 30.7: SINDROMI AUTOIMMUNI MONOGENICHE (APS-1, IPEX, ALPS, CTLA-4) */}
      <article id="sec-30-7" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-700 font-semibold block">
            Sezione 30.7 · Genetica Clinica Monogenica
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Sindromi Autoimmuni Monogeniche: APS-1, IPEX, ALPS & Aploinsufficienza di CTLA-4
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Sebbene la maggior parte delle malattie autoimmuni umane riconosca un'ereditarietà poligenica complessa, lo studio di rare
            <strong>malattie monogeniche mendeliane</strong> ha consentito di decifrare con precisione cristallina l'indispensabilità biologica
            di singoli nodi molecolari della tolleranza:
          </p>

          <div className="space-y-4 my-6">
            {/* APS-1 */}
            <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/60">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-200 text-amber-900">
                    Mutazione AIRE (21q22.3) · Autosomica Recessiva
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-1.5">
                    1. Sindrome Poliendocrina Autoimmune Tipo 1 (APS-1 / APECED)
                  </h4>
                </div>
                <span className="text-xs font-mono text-amber-800 font-bold shrink-0">Tolleranza Centrale mTEC</span>
              </div>
              <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                <strong>Fisiopatologia:</strong> Mancata espressione ectopica degli antigeni tessuto-ristretti (TRA) nel timo midollare,
                con conseguente mancata delezione clonale negativa dei timociti autoreattivi per organi endocrini.
              </p>
              <div className="mt-2.5 p-3 rounded-lg bg-white border border-amber-200/80 text-xs text-slate-800">
                <span className="font-bold text-amber-950 block mb-1">Triade Diagnostica Clinica:</span>
                <ul className="list-disc pl-4 space-y-1">
                  <li><strong>Candidiasi Mucocutanea Cronica:</strong> insorge nei primi anni di vita, dovuta a titoli elevatissimi di autoanticorpi neutralizzanti diretti contro IL-17A, IL-17F e IL-22 (compromettendo la barriera epiteliale contro <em>Candida albicans</em>).</li>
                  <li><strong>Ipoparatiroidismo Primitivo Autoimmune:</strong> con tetania ipocalcemica da anticorpi anti-recettore del calcio (CaSR).</li>
                  <li><strong>Morbo di Addison:</strong> insufficienza corticosurrenalica primaria da autoanticorpi anti-21-idrossilasi e citocromo P450scc.</li>
                  <li><em>Manifestazioni ectodermiche associate:</em> distrofia dello smalto dentario, cheratocongiuntivite, alopecia areata e vitiligine.</li>
                </ul>
              </div>
            </div>

            {/* IPEX */}
            <div className="p-5 rounded-xl border border-rose-200 bg-rose-50/60">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-rose-200 text-rose-900">
                    Mutazione FOXP3 (Xp11.23) · Recessiva X-Linked
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-1.5">
                    2. Sindrome IPEX (Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked)
                  </h4>
                </div>
                <span className="text-xs font-mono text-rose-800 font-bold shrink-0">Aplasia Totale Treg</span>
              </div>
              <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                <strong>Fisiopatologia:</strong> Mutazione del fattore trascrizionale FoxP3 che azzera completamente lo sviluppo e la funzione
                dei linfociti T regolatori. I neonati maschi manifestano un'incontrollata tempesta di proliferazione T autoreattiva e flogosi multiorgano.
              </p>
              <div className="mt-2.5 p-3 rounded-lg bg-white border border-rose-200/80 text-xs text-slate-800">
                <span className="font-bold text-rose-950 block mb-1">Quadro Clinico Neonatale Drammatico:</span>
                <ul className="list-disc pl-4 space-y-1">
                  <li><strong>Enteropatia Secretoria Intensa:</strong> diarrea profusa intrattabile fin dalle prime settimane di vita con grave malassorbimento, atrofia dei villi e arresto della crescita (<em>failure to thrive</em>).</li>
                  <li><strong>Diabete Mellito Neonatale di Tipo 1:</strong> distruzione autoimmune fulminante delle isole pancreatiche nel primo mese di vita.</li>
                  <li><strong>Dermatite Eczematosa Grave & Eritrodermia:</strong> associata ad altissimi livelli di IgE ed ipereosinofilia periferica massiva.</li>
                  <li><strong>Prognosi & Trattamento:</strong> letale nei primi mesi/anni di vita se non trattata tempestivamente con immunosoppressione intensiva (ciclosporina, tacrolimus, sirolimus) seguita da <strong>Trapianto Allogenico di Cellule Staminali Emopoietiche (HSC)</strong>.</li>
                </ul>
              </div>
            </div>

            {/* ALPS */}
            <div className="p-5 rounded-xl border border-purple-200 bg-purple-50/60">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-purple-200 text-purple-900">
                    Mutazioni FAS / FASL / Caspasi-10 · Autosomica Dominante (Penetranza Variabile)
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-1.5">
                    3. Sindrome Linfoproliferativa Autoimmune (ALPS)
                  </h4>
                </div>
                <span className="text-xs font-mono text-purple-800 font-bold shrink-0">Fallimento Apoptosi AICD</span>
              </div>
              <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                <strong>Fisiopatologia:</strong> Mutazioni a carico del recettore di morte Fas (CD95), del suo ligando FasL o della Caspasi-10.
                I linfociti T attivati risultano resistenti all'apoptosi indotta da attivazione (AICD). Non potendo essere eliminati dopo aver montato
                la risposta contro patogeni comuni, i linfociti continuano ad accumularsi indefinitamente.
              </p>
              <div className="mt-2.5 p-3 rounded-lg bg-white border border-purple-200/80 text-xs text-slate-800">
                <span className="font-bold text-purple-950 block mb-1">Biomarcatore Patognomonico & Clinica:</span>
                <ul className="list-disc pl-4 space-y-1">
                  <li><strong>Linfociti T Doppi Negativi (DNT):</strong> espansione massiva e caratteristica nel sangue periferico di linfociti T maturi con fenotipo <code className="font-mono text-xs font-bold text-purple-900">TCRαβ+ CD4- CD8-</code> (&gt;1.5% dei linfociti totali).</li>
                  <li><strong>Linfoadenomegalia Cronica Non Maligna & Splenomegalia Imponente:</strong> iperplasia policlonale massiva delle aree paracorticali linfonodali.</li>
                  <li><strong>Citopenie Autoimmuni Refrattarie:</strong> anemia emolitica autoimmune (Coombs positiva), piastrinopenia autoimmune severa e neutropenia.</li>
                  <li><strong>Rischio Oncologico:</strong> rischio significativamente aumentato di sviluppare linfomi di Hodgkin e non-Hodgkin nell'età adulta.</li>
                </ul>
              </div>
            </div>

            {/* APLOINSUFFICIENZA DI CTLA-4 */}
            <div className="p-5 rounded-xl border border-teal-200 bg-teal-50/60">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-teal-200 text-teal-900">
                    Aploinsufficienza di CTLA-4 · Autosomica Dominante
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-1.5">
                    4. Deficit Monogenico di CTLA-4 (Aploinsufficienza)
                  </h4>
                </div>
                <span className="text-xs font-mono text-teal-800 font-bold shrink-0">Iperattivazione T & Enteropatia</span>
              </div>
              <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                <strong>Fisiopatologia & Terapia Mirata:</strong> La perdita di un allele di CTLA-4 dimezza la densità del recettore in membrana,
                compromettendo gravemente la trans-endocitosi dei ligandi B7. I pazienti sviluppano infiltrazione linfocitaria multiorgano (polmoni, SNC, intestino),
                enteropatia autoimmune e paradossa ipogammaglobulinemia per perdita di coordinamento T-B.
                Rappresenta uno straordinario successo traslazionale: risponde in modo eccellente alla terapia con la proteina di fusione ricombinante <strong>Abatacept (CTLA-4-Ig)</strong>,
                che sopperisce al difetto fornendo dall'esterno il dominio solubile di CTLA-4 bloccante i ligandi B7.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* SEZIONE 30.8: PREDISPOSIZIONE HLA & GENI NON-HLA */}
      <article id="sec-30-8" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-700 font-semibold block">
            Sezione 30.8 · Genetica Poligenica dell'Autoimmunità
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Predisposizione Multifattoriale: Il Locus HLA (Rischio Relativo) & Difetti del Complemento
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Al di fuori delle forme monogeniche, le malattie autoimmuni sono <strong>patologie multifattoriali poligeniche</strong>:
            insorgono dall'interazione sinergica tra una predisposizione genetica poligenica (nella quale il locus HLA sul cromosoma 6p21.3
            fornisce il contributo di gran lunga preponderante) ed eventi scatenanti ambientali.
          </p>
          <p>
            In epidemiologia genetica, la forza dell'associazione tra un determinato allele HLA e una malattia autoimmune viene quantificata mediante
            il <strong>Rischio Relativo (RR)</strong> o l'Odds Ratio (OR):
          </p>
          <div className="p-3.5 rounded-lg bg-slate-100 border border-slate-200 font-mono text-xs text-slate-800 text-center my-3">
            RR = [Incidenza della malattia nei portatori dell'allele HLA] / [Incidenza nei non portatori]
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Le Grandi Associazioni HLA di Classe I e Classe II
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-900 text-sm block mb-1">HLA-B*27 & Spondilite Anchilosante</span>
              <span className="text-xs font-mono font-bold text-rose-700 block mb-2">Rischio Relativo (RR) ≈ 87 - 90</span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Rappresenta la più potente associazione genetica documentata in medicina. Oltre il 90% dei pazienti con spondilite anchilosante (entesite, sacroileite bilaterale, colonna a canna di bambù e uveite anteriore acuta) esprime l'allele HLA-B27. Il meccanismo coinvolge la presentazione di peptidi artritogenici e la tendenza di HLA-B27 a formare omomodimeri anomali privi di β₂-microglobulina che inducono stress del reticolo endoplasmatico con massivo rilascio di IL-23 e IL-17.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-900 text-sm block mb-1">HLA-DQ2 / HLA-DQ8 & Diabete Mellito Tipo 1</span>
              <span className="text-xs font-mono font-bold text-blue-700 block mb-2">Polimorfismo Molecolare Asp57</span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Gli eterozigoti per gli aplotipi <strong>HLA-DQ2</strong> e <strong>HLA-DQ8</strong> presentano un rischio relativo combinato fino a 75 di sviluppare il Diabete di Tipo 1. A livello strutturale, la suscettibilità è guidata da una specifica sostituzione aminoacidica in <strong>posizione 57 della catena DQβ</strong>: i soggetti protetti possiedono un residuo polare carico negativamente (<em>Aspartato</em>), mentre i soggetti suscettibili presentano un residuo idrofobico privo di carica (<em>Alanina, Valina o Serina</em>), allargando la tasca di ancoraggio P9 che accoglie avidamente autoantigeni insulari (proinsulina, GAD65).
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Geni Non-HLA: Il Ruolo Critico del Sistema del Complemento (C1q, C1r, C1s, C4, C2)
          </h3>
          <p>
            Tra i determinanti non-HLA, spicca il paradosso patogenetico delle <strong>componenti precoci della via classica del complemento</strong>:
          </p>
          <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/70 text-xs text-slate-800 my-3">
            <span className="font-bold text-indigo-950 block mb-1.5 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-indigo-600" />
              <span>Deficit di Clearance dei Corpi Apoptotici nel Lupus Eritematoso Sistemico (LES)</span>
            </span>
            <p className="leading-relaxed font-serif-body">
              In condizioni fisiologiche, le componenti precoci del complemento (<strong>C1q, C1r, C1s, C4 e C2</strong>) sono indispensabili per
              l'opsonizzazione, la solubilizzazione e la rapida rimozione da parte dei macrofagi residenti degli <em>immunocomplessi</em> e dei <em>corpi apoptotici</em>.
              Quando si verifica una mutazione omozigote o un deficit genetico di C1q (presente in oltre il 90% dei casi con penetranza fenotipica lupica),
              i corpi apoptotici non vengono prontamente fagocitati e vanno incontro a <em>necrosi secondaria</em>, rilasciando frammenti nucleari di DNA, RNA e istoni.
              Questi acidi nucleici endogeni legano i sensori intracellulari TLR7 e TLR9 nelle cellule dendritiche plasmacitoidi (pDC), scatenando una massiccia
              produzione di <strong>Interferone di tipo I (IFN-α)</strong> e la generazione di anticorpi antinucleo (ANA) e anti-dsDNA, fulcro del <strong>Lupus Eritematoso Sistemico</strong>.
            </p>
          </div>
        </div>
      </article>

      {/* SEZIONE 30.9: TRIGGERS AMBIENTALI & I TRE MECCANISMI SCATENANTI */}
      <article id="sec-30-9" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-700 font-semibold block">
            Sezione 30.9 · Eziopatogenesi Ambientale & Infettiva
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Triggers Ambientali: Bystander Activation, Mimetismo Molecolare (Febbre Reumatica) & Epitope Spreading
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            La predisposizione genetica costituisce il "terreno fertile", ma per la rottura conclamata della tolleranza periferica è quasi sempre
            necessario un evento scatenante esogeno (modello del <em>two-hit</em>). Le infezioni microbiche e virali agiscono mediante tre precisi meccanismi biologici:
          </p>

          <div className="space-y-4 my-6">
            {/* 1. BYSTANDER ACTIVATION */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2 text-indigo-900">
                <Flame className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>1. Bystander Activation (Attivazione dello Spettatore)</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Durante un'infezione acuta, i patogeni stimolano l'immunità innata mediante PAMPs che attivano i PRR, scatenando una massiccia secrezione
                locale di citochine pro-infiammatorie (IL-1, IL-6, TNF-α, IFN di tipo I, IL-12).
                Questa tempesta citochinica investe cellule dendritiche immature locali "innocenti", che normalmente presentano autoantigeni tessutali in modo silente
                inducendo anergia. A causa del microambiente infiammato, queste DC subiscono una maturazione non specifica: <strong>up-regolano fortemente i ligandi B7 (CD80/CD86)</strong>
                e molecole MHC. Presentando ora autoantigeni <em>INSIEME</em> ad un potente Segnale 2 costimolatorio, queste DC risvegliano cloni T autoreattivi dormienti,
                <strong>rompendone irreversibilmente l'anergia periferica</strong>.
              </p>
            </div>

            {/* 2. MIMETISMO MOLECOLARE */}
            <div className="p-5 rounded-xl border border-rose-200 bg-rose-50/70">
              <div className="flex items-center gap-2 font-bold text-rose-950 text-sm mb-2">
                <Crosshair className="w-4 h-4 text-rose-600 shrink-0" />
                <span>2. Mimetismo Molecolare (Molecular Mimicry)</span>
              </div>
              <p className="text-xs text-rose-950 leading-relaxed font-serif-body">
                Il mimetismo poggia sul fenomeno della <strong>degenerazione del riconoscimento del TCR/BCR</strong> e sulla plasticità conformazionale (<em>induced fit</em>):
                un singolo recettore antigenico può legare peptidi differenti purché condividano analoghi residui di contatto e profili di carica elettrica.
                Un epitopo peptidico di un microrganismo infettivo presenta un'omologia strutturale o conformazionale con una molecola self dell'ospite.
                La risposta immune montata per eliminare il patogeno cross-reagisce violentemente contro i tessuti sani dell'ospite.
              </p>

              <div className="mt-3 p-3.5 rounded-lg bg-white border border-rose-200 text-xs text-slate-800">
                <span className="font-bold text-rose-900 block mb-1">Il Paradigma Clinico Cardine: Febbre Reumatica Acuta (GAS)</span>
                <p className="leading-relaxed">
                  L'infezione faringea da <strong>Streptococco β-emolitico di gruppo A (GAS - <em>Streptococcus pyogenes</em>)</strong> stimola
                  una potente produzione anticorpale contro la <strong>Proteina M</strong> streptococcica della parete batterica.
                  La proteina M presenta una marcata omologia conformazionale ad α-elica con proteine self:
                </p>
                <ul className="list-disc pl-4 space-y-1 mt-1.5 text-slate-700">
                  <li><strong>Miosina Cardiaca & Laminina:</strong> gli anticorpi cross-reagenti attaccano l'endocardio e il miocardio, provocando <em>pancardite acuta</em> con deformazione e fibrosi delle cuspidi valvolari (soprattutto valvulopatia mitralica e stenosi aortica permanente).</li>
                  <li><strong>Gangliosidi dei Nuclei della Base Encefalici:</strong> l'attacco anticorpale alle strutture striatali causa la <strong>Corea di Sydenham</strong> (il cosiddetto "Ballo di San Vito"), caratterizzata da movimenti involontari rapidi e a scatto e labilità emotiva.</li>
                  <li><strong>Prevenzione Primaria:</strong> diagnosi tempestiva della faringite streptococcica mediante tampone faringeo e prescrizione precoce di <strong>antibioticoterapia con Penicillina</strong>, che eradicando il batterio entro i primi giorni azzera il rischio di insorgenza della complicanza reumatica.</li>
                </ul>
                <div className="mt-2 text-[11px] font-mono text-slate-600">
                  <em>Altro esempio cardine:</em> Epstein-Barr Virus (EBV) e mimetismo tra EBNA-1 e proteina GlialCAM/MBP nella Sclerosi Multipla.
                </div>
              </div>
            </div>

            {/* 3. EPITOPE SPREADING */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2 text-teal-900">
                <Share2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>3. Diffusione dell'Epitopo (Epitope Spreading)</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Il danno tissutale primario — indotto dal patogeno o da una risposta autoimmune iniziale mirata contro un singolo epitopo dominante — causa
                la necrosi delle cellule parenchimali dell'organo bersaglio. La rottura cellulare rilascia autoantigeni intracellulari precedentemente
                sequestrati (<strong>epitopi criptici</strong>), verso cui non si era instaurata tolleranza centrale efficiente.
                Le APC reclutate sul sito fagocitano questi detriti, li processano ed espongono nuovi peptidi self sia appartenenti alla medesima macromolecola
                (<em>diffusione intramolecolare</em>) sia a proteine strutturali adiacenti (<em>diffusione intermolecolare</em>).
                La risposta autoimmune si amplia progressivamente a ventaglio, cronicizzando la patologia ed ostacolando le terapie antigene-specifiche.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* SEZIONE 30.10: MICROBIOTA INTESTINALE, TOLLERANZA ORALE & DISBIOSI */}
      <article id="sec-30-10" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-700 font-semibold block">
            Sezione 30.10 · Ecologia Immunologica Mucose
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Microbiota Intestinale, Tolleranza Orale & Disbiosi: SCFA, Butirrato e Prospettive Terapeutiche
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            La superficie mucosale gastroenterica affronta costantemente il titanico paradosso di dover tollerare oltre 100 trilioni di batteri
            commensali e tonnellate di proteine alimentari introdotte con la dieta (<strong>tolleranza orale</strong>), preservando la capacità di reagire
            immediatamente contro enteropatogeni invasivi.
          </p>

          <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">
            I Metaboliti Batterici Cardine dell'Induzione di iTreg
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/60">
              <div className="font-bold text-emerald-950 text-xs mb-1">Acidi Grassi a Catena Corta (SCFA)</div>
              <div className="text-[11px] font-mono text-emerald-700 mb-2">Butirrato, Propionato, Acetato</div>
              <p className="text-xs text-slate-700 leading-relaxed font-serif-body">
                Derivati dalla fermentazione delle fibre alimentari non digeribili da parte di batteri anaerobi (es. <em>Faecalibacterium prausnitzii</em>).
                Il <strong>Butirrato</strong> agisce come inibitore naturale delle istone deacetilasi (HDACi): promuove l'iper-acetilazione degli istoni H3/H4
                a livello della regione regolatoria non codificante CNS1 del promotore di <strong>FOXP3</strong>, guidando in modo formidabile
                il differenziamento di linfociti CD4+ naïve in <strong>iTreg mucosali</strong>.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/60">
              <div className="font-bold text-blue-950 text-xs mb-1">Ligandi del Recettore AhR</div>
              <div className="text-[11px] font-mono text-blue-700 mb-2">Cataboliti del Triptofano</div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Molecole indololiche derivate dal metabolismo microbico del triptofano (es. indolo-3-aldeide). Attivano il fattore <strong>AhR (Aryl hydrocarbon Receptor)</strong>,
                stimolando le cellule linfoidi innate del gruppo 3 (ILC3) a produrre <strong>IL-22</strong>, che sigilla le tight junctions degli enterociti e induce la secrezione di mucine e peptidi antimicrobici (defensine).
              </p>
            </div>
            <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/60">
              <div className="font-bold text-purple-950 text-xs mb-1">Acido Retinoico & DC2</div>
              <div className="text-[11px] font-mono text-purple-700 mb-2">Vitamina A & Imprinting Mucosale</div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Le cellule dendritiche mucosali CD103+ producono enzimi retinaldeide deidrogenasi (RALDH), convertendo la vitamina A alimentare in Acido Retinoico.
                In sinergia con TGF-β, l'acido retinoico imprime ai linfociti T l'homing recettoriale mucosale (α₄β₇ e CCR9) e ne consolida il fenotipo tollerogenico.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Disbiosi, Aumento della Permeabilità Intestinale ("Leaky Gut") & Malattie Autoimmuni
          </h3>
          <p>
            Fattori quali diete iper-raffinate prive di fibre, abuso di antibiotici ad ampio spettro e stress ossidativo inducono <strong>disbiosi profonda</strong>:
            collasso delle specie produttrici di SCFA e proliferazione di patobionti mucolitici.
            La barriera epiteliale si assottiglia e perde integrità (sindrome dell'intestino permeabile o <em>leaky gut</em>).
            La traslocazione luminale sistemica di lipopolisaccaride batterico (LPS) e flagellina nel sangue portale attiva TLR4 e TLR5 epatici e sistemici,
            polarizzando la risposta verso linfociti Th1 e Th17 infiammatori e rompendo la tolleranza in patologie quali Sclerosi Sistemica, Artrite Reumatoide,
            Lupus Eritematoso Sistemico e Malattia Celiaca.
          </p>
          <p>
            Queste evidenze hanno aperto la strada a terapie immunologiche ecologiche: prescrizione di <strong>prebiotici ad alto contenuto di fibre solubili</strong>,
            probiotici specifici e, nelle forme refrattarie o nelle infezioni recidivanti, il <strong>Trapianto di Microbiota Fecale (FMT)</strong> per ripristinare
            l'architettura tollerogena mucosale.
          </p>
        </div>
      </article>

      {/* SIMULATORE 2: LABORATORIO DEI TRIGGERS AMBIENTALI & AUTOIMMUNITA' */}
      <div id="sim-autoimmune-triggers-lab" className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
              <Crosshair className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-teal-400 uppercase tracking-wider font-semibold block">
                Simulatore Didattico Interattivo 30.2
              </span>
              <h3 className="text-xl font-bold text-white">
                Laboratorio dei Triggers Ambientali: Bystander Activation, Mimetismo, Epitope Spreading & Disbiosi
              </h3>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono">
            Modello "Two-Hit" di Autoimmunità
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Inputs Column */}
          <div className="space-y-5 bg-slate-800/60 p-5 rounded-xl border border-slate-700/60 text-xs">
            <div>
              <label className="text-slate-300 font-bold block mb-2">1. Terreno Genetico / Aplotipo HLA del Paziente:</label>
              <div className="space-y-1.5">
                <button
                  onClick={() => setSelectedHlaType('hla_b27')}
                  className={`w-full p-2 rounded-lg border text-left transition-all ${
                    selectedHlaType === 'hla_b27'
                      ? 'bg-rose-600/30 border-rose-400 text-rose-200 font-bold ring-1 ring-rose-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  HLA-B*27 (RR ≈ 87 - Spondilite Anchilosante)
                </button>
                <button
                  onClick={() => setSelectedHlaType('hla_dq2_8')}
                  className={`w-full p-2 rounded-lg border text-left transition-all ${
                    selectedHlaType === 'hla_dq2_8'
                      ? 'bg-blue-600/30 border-blue-400 text-blue-200 font-bold ring-1 ring-blue-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  HLA-DQ2 / HLA-DQ8 (Asp57Val - Diabete T1 & Celiachia)
                </button>
                <button
                  onClick={() => setSelectedHlaType('hla_dr4')}
                  className={`w-full p-2 rounded-lg border text-left transition-all ${
                    selectedHlaType === 'hla_dr4'
                      ? 'bg-amber-600/30 border-amber-400 text-amber-200 font-bold ring-1 ring-amber-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  HLA-DR4 / HLA-DR1 (Shared Epitope - Artrite Reumatoide)
                </button>
                <button
                  onClick={() => setSelectedHlaType('hla_dr3_dr2')}
                  className={`w-full p-2 rounded-lg border text-left transition-all ${
                    selectedHlaType === 'hla_dr3_dr2'
                      ? 'bg-purple-600/30 border-purple-400 text-purple-200 font-bold ring-1 ring-purple-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  HLA-DR3 / HLA-DR2 (LES, Graves & Sclerosi Multipla)
                </button>
                <button
                  onClick={() => setSelectedHlaType('hla_neutral')}
                  className={`w-full p-2 rounded-lg border text-left transition-all ${
                    selectedHlaType === 'hla_neutral'
                      ? 'bg-teal-600/30 border-teal-400 text-teal-200 font-bold ring-1 ring-teal-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Aplotipo HLA Neutro / Popolazione Controllo (RR = 1)
                </button>
              </div>
            </div>

            <div>
              <label className="text-slate-300 font-bold block mb-2">2. Evento Scatenante Ambientale / Infettivo:</label>
              <div className="space-y-1.5">
                <button
                  onClick={() => {
                    setSelectedTriggerEvent('gas_infection');
                    setSelectedMechanism('mimicry');
                  }}
                  className={`w-full p-2 rounded-lg border text-left transition-all ${
                    selectedTriggerEvent === 'gas_infection'
                      ? 'bg-rose-600/30 border-rose-400 text-rose-200 font-bold ring-1 ring-rose-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Faringite da Streptococco GAS (Proteina M)
                </button>
                <button
                  onClick={() => {
                    setSelectedTriggerEvent('ebv_infection');
                    setSelectedMechanism('mimicry');
                  }}
                  className={`w-full p-2 rounded-lg border text-left transition-all ${
                    selectedTriggerEvent === 'ebv_infection'
                      ? 'bg-purple-600/30 border-purple-400 text-purple-200 font-bold ring-1 ring-purple-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Infezione da Epstein-Barr Virus (EBNA-1)
                </button>
                <button
                  onClick={() => {
                    setSelectedTriggerEvent('gut_dysbiosis');
                    setSelectedMechanism('dysbiosis_leaky');
                  }}
                  className={`w-full p-2 rounded-lg border text-left transition-all ${
                    selectedTriggerEvent === 'gut_dysbiosis'
                      ? 'bg-amber-600/30 border-amber-400 text-amber-200 font-bold ring-1 ring-amber-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Disbiosi Intestinale Severa (Crollo SCFA/Butirrato)
                </button>
                <button
                  onClick={() => {
                    setSelectedTriggerEvent('sterile_damage');
                    setSelectedMechanism('spreading');
                  }}
                  className={`w-full p-2 rounded-lg border text-left transition-all ${
                    selectedTriggerEvent === 'sterile_damage'
                      ? 'bg-teal-600/30 border-teal-400 text-teal-200 font-bold ring-1 ring-teal-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Danno Tissutale Sterile con Rilascio di DAMPs
                </button>
                <button
                  onClick={() => {
                    setSelectedTriggerEvent('none');
                  }}
                  className={`w-full p-2 rounded-lg border text-left transition-all ${
                    selectedTriggerEvent === 'none'
                      ? 'bg-slate-600/30 border-slate-400 text-slate-200 font-bold ring-1 ring-slate-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Nessun Insulto Ambientale (Solo Predisposizione)
                </button>
              </div>
            </div>
          </div>

          {/* Results Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-5 rounded-xl border border-slate-700 bg-slate-800/80">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Valutazione Rischio Relativo & Diagnosi Eziopatogenetica
                </span>
                <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${
                  selectedTriggerEvent === 'none'
                    ? 'bg-slate-800 text-slate-300 border border-slate-600'
                    : selectedTriggerEvent === 'gas_infection'
                    ? 'bg-rose-950 text-rose-300 border border-rose-700'
                    : 'bg-amber-950 text-amber-300 border border-amber-700'
                }`}>
                  {selectedTriggerEvent === 'none'
                    ? 'STATO SILENTE (TOLLERANZA COMPENSATA)'
                    : selectedTriggerEvent === 'gas_infection'
                    ? 'FEBBRE REUMATICA ACUTA & COREA'
                    : selectedTriggerEvent === 'ebv_infection' && selectedHlaType === 'hla_dr3_dr2'
                    ? 'ATTIVAZIONE AUTOIMMUNE SNC (SCLEROSI MULTIPLA)'
                    : selectedTriggerEvent === 'gut_dysbiosis'
                    ? 'DISBIOSI & ROTTURA TOLLERANZA MUCOSALE'
                    : 'ROTTURA TOLLERANZA & AUTOIMMUNITÀ'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">Meccanismo Primario</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {selectedTriggerEvent === 'none'
                      ? 'Nessuno'
                      : selectedTriggerEvent === 'gas_infection' || selectedTriggerEvent === 'ebv_infection'
                      ? 'Molecular Mimicry'
                      : selectedTriggerEvent === 'gut_dysbiosis'
                      ? 'Disbiosi / Leaky Gut'
                      : 'Epitope Spreading'}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">Cross-Reattività / Bersagli</div>
                  <div className="text-base font-bold text-white mt-0.5 truncate">
                    {selectedTriggerEvent === 'gas_infection'
                      ? 'Miosina, Laminina, Gangliosidi'
                      : selectedTriggerEvent === 'ebv_infection'
                      ? 'GlialCAM / MBP mielina'
                      : selectedTriggerEvent === 'gut_dysbiosis'
                      ? 'Th17 / LPS sistemico'
                      : 'Epitopi Criptici Self'}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">Rischio Relativo d'Organo</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {selectedHlaType === 'hla_b27'
                      ? 'RR ≈ 87 (Spiccato)'
                      : selectedHlaType === 'hla_dq2_8'
                      ? 'RR ≈ 30-75 (Elevato)'
                      : selectedHlaType === 'hla_dr4'
                      ? 'RR ≈ 4-10 (Significativo)'
                      : selectedHlaType === 'hla_dr3_dr2'
                      ? 'RR ≈ 3-5 (Moderato)'
                      : 'RR = 1.0 (Basale)'}
                  </div>
                </div>
              </div>

              {/* Dynamic Simulation Commentary */}
              <div className="mt-4 p-4 rounded-lg bg-slate-900/90 border border-slate-700 text-xs leading-relaxed">
                <div className="font-bold text-teal-400 mb-1 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Referto di Simulazione Clinico-Molecolare:</span>
                </div>
                {selectedTriggerEvent === 'none' ? (
                  <p className="text-slate-300">
                    In assenza di stimoli flogistici, infezioni o lesioni tessutali (secondo colpo), la predisposizione genetica da sola non è sufficiente
                    a scatenare la reazione patologica. I linfociti T autoreattivi a bassa affinità rimangono quiescenti o sotto il rigido controllo
                    dei linfociti Treg e dei checkpoint inibitori sistemici.
                  </p>
                ) : selectedTriggerEvent === 'gas_infection' ? (
                  <p className="text-rose-200">
                    <strong>Mimetismo Molecolare da Streptococco GAS:</strong> Gli anticorpi IgG montati contro l'antigene batterico (Proteina M)
                    riconoscono epitopi omologhi sulla <em>miosina cardiaca</em> (provocando cardite acuta con insufficienza mitralica ed infiammazione dell'endocardio)
                    e sui <em>gangliosidi dei nuclei della base</em> cerebrali (scatenando la Corea di Sydenham).
                    <strong>Prescrizione Immediata:</strong> Terapia antibiotica con Penicillina G benzatinica per eradicare il ceppo streptococcico e prevenire le recidive reumatiche.
                  </p>
                ) : selectedTriggerEvent === 'ebv_infection' ? (
                  <p className="text-purple-200">
                    <strong>Mimetismo Molecolare Virale & Sclerosi Multipla:</strong> L'infezione da EBV innesca una potente risposta T e B contro EBNA-1.
                    A causa di una spiccata omologia peptidica con la molecola di adesione GlialCAM degli oligodendrociti e la proteina basica della mielina (MBP),
                    i cloni T cross-reattivi valicano la barriera emato-encefalica, scatenando la demielinizzazione autoimmune del SNC (particolarmente accentuata in portatori di HLA-DR15/DR2).
                  </p>
                ) : selectedTriggerEvent === 'gut_dysbiosis' ? (
                  <p className="text-amber-200">
                    <strong>Disbiosi e Sindrome dell'Intestino Permeabile (Leaky Gut):</strong> La scomparsa di <em>F. prausnitzii</em> azzera i livelli di butirrato.
                    Gli iTreg intestinali collassano per assenza di inibizione di HDAC sul gene FOXP3. Il lipopolisaccaride (LPS) batterico trasloca in circolo,
                    stimola TLR4 sulle cellule dendritiche inducendo B7 (bystander activation) e devia la risposta sistemica verso linfociti Th17 altamente infiammatori.
                    <strong>Strategia:</strong> Rimodellamento del microbiota con fibre prebiotiche, probiotici e correzione dietetica.
                  </p>
                ) : (
                  <p className="text-teal-200">
                    <strong>Diffusione dell'Epitopo da Danno Tissutale Primario:</strong> La lisi cellulare secondaria rilascia allarmine (DAMPs) e nuovi autoantigeni criptici
                    che vengono fagocitati e presentati da DC attivate. La reattività immune si allarga a cascata ad una molteplicità di epitopi secondari,
                    rendendo la patologia autoimmune cronica e refrattaria alle monoterapie.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TABELLE COMPARATIVE SINOTTICHE (30.1 & 30.2) */}
      <article id="tabelle-sinottiche" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-700 font-semibold block">
            Tavole Sinottiche Didattiche
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Compendio Sinottico: Malattie Monogeniche, Locus HLA & Triggers Ambientali
          </h2>
        </div>

        {/* Tabella 30.1: Malattie Monogeniche */}
        <div id="tabella-30-1" className="mb-8">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-xs">Tabella 30.1</span>
            Compendio Clinico-Molecolare delle Sindromi Autoimmuni Monogeniche
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Sindrome</th>
                  <th className="p-3">Gene & Locus</th>
                  <th className="p-3">Ereditarietà</th>
                  <th className="p-3">Difetto Meccanicistico Primario</th>
                  <th className="p-3">Quadro Clinico Patognomonico</th>
                  <th className="p-3">Terapia Elettiva</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-amber-900">APS-1 / APECED</td>
                  <td className="p-3 font-mono">AIRE (21q22.3)</td>
                  <td className="p-3">Autosomica Recessiva</td>
                  <td className="p-3">Mancata trascrizione di TRA nelle mTEC; fallimento selezione negativa timica</td>
                  <td className="p-3">Triade: Candidiasi mucocutanea cronica, Ipoparatiroidismo, Morbo di Addison</td>
                  <td className="p-3">Terapia ormonale sostitutiva, antifungini sistemici, immunosoppressione</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-rose-900">Sindrome IPEX</td>
                  <td className="p-3 font-mono">FOXP3 (Xp11.23)</td>
                  <td className="p-3">Recessiva X-Linked</td>
                  <td className="p-3">Assenza totale di linfociti T regolatori (Treg) funzionali</td>
                  <td className="p-3">Enteropatia secretoria neonatale grave, Diabete tipo 1 nel primo mese, eczema grave</td>
                  <td className="p-3">Trapianto Allogenico di Cellule Staminali Emopoietiche (HSC), Inibitori calcineurina/mTOR</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-purple-900">Sindrome ALPS</td>
                  <td className="p-3 font-mono">FAS (10q23), FASL, CASP10</td>
                  <td className="p-3">Autosomica Dominante</td>
                  <td className="p-3">Difetto di apoptosi AICD; mancata contrazione dei cloni T stimolati</td>
                  <td className="p-3">Linfoadenomegalia massiva cronica, splenomegalia, citopenie autoimmuni, Linfociti DNT TCRαβ+CD4-CD8-</td>
                  <td className="p-3">Corticosteroidi, Sirolimus (Inibitore mTOR), Micofenolato mofetile</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-teal-900">Deficit di CTLA-4</td>
                  <td className="p-3 font-mono">CTLA4 (2q33.2)</td>
                  <td className="p-3">Autosomica Dominante (Aploinsufficienza)</td>
                  <td className="p-3">Mancata trans-endocitosi di CD80/CD86 sulle APC; iperattivazione T sistemica</td>
                  <td className="p-3">Infiltrazione linfocitaria polmonare ed intestinale, ipogammaglobulinemia paradossa</td>
                  <td className="p-3">Abatacept (proteina di fusione ricombinante solubile CTLA-4-Ig)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabella 30.2: Matrice HLA & Triggers */}
        <div id="tabella-30-2">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-xs">Tabella 30.2</span>
            Matrice delle Associazioni HLA, Rischio Relativo (RR) & Correlati Ambientali
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Allele / Locus HLA</th>
                  <th className="p-3">Classe</th>
                  <th className="p-3">Patologia Associata</th>
                  <th className="p-3">Rischio Relativo (RR)</th>
                  <th className="p-3">Basi Molecolari / Trigger Ambientale Correlato</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-rose-800">HLA-B*27</td>
                  <td className="p-3">Classe I</td>
                  <td className="p-3 font-semibold">Spondilite Anchilosante</td>
                  <td className="p-3 font-mono font-bold text-rose-700">≈ 87 - 90</td>
                  <td className="p-3">Omomodimeri anomali privi di β2-microglobulina (β2m), stress del RE con asse IL-23/IL-17; reattività a batteri enterici (Klebsiella)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-blue-800">HLA-DQ2 / HLA-DQ8</td>
                  <td className="p-3">Classe II</td>
                  <td className="p-3 font-semibold">Diabete Mellito Tipo 1 & Celiachia</td>
                  <td className="p-3 font-mono font-bold text-blue-700">≈ 30 - 75</td>
                  <td className="p-3">Sostituzione Asp57Val/Ala su catena DQβ; deamidazione della gliadina da parte della transglutaminasi (tTG)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-amber-800">HLA-DR4 / HLA-DR1</td>
                  <td className="p-3">Classe II</td>
                  <td className="p-3 font-semibold">Artrite Reumatoide</td>
                  <td className="p-3 font-mono font-bold text-amber-700">≈ 4 - 10</td>
                  <td className="p-3">Shared Epitope (sequenza QKRAA); legame preferenziale a peptidi citrullinati (ACPA); fumo di sigaretta e <em>P. gingivalis</em></td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-purple-800">HLA-DR3 / HLA-DR2</td>
                  <td className="p-3">Classe II</td>
                  <td className="p-3 font-semibold">Morbo di Graves, Pemfigo Volgare & Sclerosi Multipla</td>
                  <td className="p-3 font-mono font-bold text-purple-700">≈ 3 - 5</td>
                  <td className="p-3">Autoanticorpi stimolanti il recettore TSH (Graves); anticorpi anti-desmogleina 3 (Pemfigo); mimetismo EBNA-1/GlialCAM (SM)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-indigo-800">Deficit C1q, C1r, C1s, C4</td>
                  <td className="p-3">Non-HLA</td>
                  <td className="p-3 font-semibold">Lupus Eritematoso Sistemico (LES)</td>
                  <td className="p-3 font-mono font-bold text-indigo-700">&gt; 90% (C1q omozigote)</td>
                  <td className="p-3">Mancata clearance dei corpi apoptotici; accumulo di detriti nucleari con attivazione di TLR7/9 e iperproduzione di IFN-α</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </article>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={quizQuestions} lessonNumber={30} title="Verifica dell'Apprendimento · Lezione 30" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={flashcardsData} lessonNumber={30} title="Flashcard di Ripasso Attivo · Lezione 30" />
    </div>
  );
};
