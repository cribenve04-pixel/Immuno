import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
/**
 * Lezione 31: Malattie Autoimmuni: Spettro Nosografico ed Autoinfiammazione, Dimorfismo Sessuale (lncRNA Xist / 81 Ribonucleoproteine),
 * Malattie di Tipo II (ITP/Werlhof, Goodpasture, Pemfigo, Miastenia, Graves), Malattie di Tipo III (LES & Connettiviti)
 * e Malattie di Tipo IV (Diabete Tipo 1, Sclerosi Multipla, Artrite Reumatoide, Vitiligine)
 *
 * Corso di Laurea Magistrale in Medicina e Chirurgia
 * Trascrizione integrale integrata dalle lezioni universitarie della Prof.ssa Ricciarda Galandrini (11/12/2025, 1ª e 2ª ora)
 * Sbobinatori: Alessandra Civile, Alessio Corsaletti | Revisori: Maria Antonietta Chiodo, Vitandrea De Vito Francesco
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
  Wind,
  Sun,
  Shield,
  Target
} from 'lucide-react';

interface Lezione31ViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
}

export const Lezione31View: React.FC<Lezione31ViewProps> = ({
  isSerif = false,
  fontSize = 'normal'
}) => {
  // Simulator 1 State: Type II Hypersensitivity & Receptor Alterations
  const [selectedType2Disease, setSelectedType2Disease] = useState<'itp' | 'goodpasture' | 'pemphigus' | 'myasthenia' | 'graves'>('itp');
  const [itpPlateletCount, setItpPlateletCount] = useState<number>(18000); // microlitre
  const [itpTreatment, setItpTreatment] = useState<'none' | 'splenectomy' | 'rituximab' | 'syk_inhibitor' | 'tpo_mimetic'>('none');
  const [myastheniaMechanism, setMyastheniaMechanism] = useState<'complement_mac' | 'internalization' | 'antagonism'>('complement_mac');
  const [pemphigusSubtype, setPemphigusSubtype] = useState<'vulgaris_dsg3' | 'foliaceus_dsg1'>('vulgaris_dsg3');

  // Simulator 2 State: Type III (SLE) & Type IV / Mixed (T1D, RA, MS, Vitiligo)
  const [simActiveModule, setSimActiveModule] = useState<'sle_type3' | 't1d_type4' | 'ra_mixed' | 'ms_type4' | 'vitiligo_type4'>('sle_type3');
  // Sub-states for Simulator 2
  const [sleUvExposure, setSleUvExposure] = useState<boolean>(true);
  const [sleDnaseDefect, setSleDnaseDefect] = useState<boolean>(true);
  const [sleComplementDefect, setSleComplementDefect] = useState<'normal' | 'c1q_homozygous' | 'c4_c2_defect'>('c1q_homozygous');
  const [t1dHlaGenotype, setT1dHlaGenotype] = useState<'high_risk_val57' | 'protective_asp57' | 'neutral'>('high_risk_val57');
  const [t1dAntibodiesCount, setT1dAntibodiesCount] = useState<number>(3); // 0 to 3 (IAA, GAD65, IA-2)
  const [raPadActivity, setRaPadActivity] = useState<boolean>(true);
  const [raSharedEpitope, setRaSharedEpitope] = useState<boolean>(true);
  const [raTherapy, setRaTherapy] = useState<'none' | 'anti_tnf' | 'anti_il6' | 'denosumab_rankl' | 'jak_inhibitor'>('none');

  // Flashcards active-recall state
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const toggleCard = (id: number) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // 10 Academic Questions for Lezione 31
  const quizQuestions = [
    {
      id: 1,
      question: "In base alle recenti evidenze molecolari pubblicate su Cell e Nature, quale fattore spiega l'accentuata prevalenza delle malattie autoimmuni nel sesso femminile (circa il 75% dei casi)?",
      options: [
        "L'eccesso esclusivo di progesterone che blocca la maturazione dei linfociti Treg.",
        "Il long non-coding RNA Xist (deputato all'inattivazione random di uno dei cromosomi X), che si associa a 81 ribonucleoproteine formando un macro-neoantigene altamente immunogenico.",
        "La delezione genetica costitutiva del recettore FcγRIIB nei monociti femminili.",
        "La ridotta espressione timica del fattore AIRE causata dagli estrogeni."
      ],
      correctAnswer: 1,
      explanation: "Lo studio innovativo ha dimostrato che il long non-coding RNA Xist, espresso unicamente nelle cellule femminili per l'inattivazione del cromosoma X, si assembla fisicamente con ben 81 diverse ribonucleoproteine (RNP) self. Questo complesso macromolecolare Xist-RNP agisce come un potente neoantigene immunogenico, innescando risposte autoanticorpali anti-ribonucleoproteine tipiche del LES e delle connettiviti sistemiche."
    },
    {
      id: 2,
      question: "Nella Porpora Trombocitopenica Idiopatica (ITP o Morbo di Werlhof), quale meccanismo spiega la comparsa di autoanticorpi diretti contro la glicoproteina GPIb/IX dopo l'innesco primario contro GPIIb/IIIa?",
      options: [
        "Mimetismo molecolare da Coxsackievirus B4.",
        "Diffusione dell'epitopo (Epitope Spreading): il macrofago splenico fagocita la piastrina opsonizzata e presenta nuovi peptidi criptici self della piastrina stessa.",
        "Ipermutazione somatica aberrante promossa dal fattore BAFF.",
        "Inattivazione congenita del recettore FcRn nelle cellule endoteliali."
      ],
      correctAnswer: 1,
      explanation: "L'ITP è un modello paradigmico di epitope spreading non legato a patogeni esogeni: gli anticorpi iniziali opsonizzano le piastrine legando GPIIb/IIIa (2B/3A); il macrofago splenico fagocita la piastrina tramite FcγRI, processa l'intera struttura piastrinica e presenta nuovi epitopi self criptici (come la glicoproteina GPIb/IX o 1B9) a nuovi cloni T helper, allargando lo spettro della risposta autoanticorpale."
    },
    {
      id: 3,
      question: "Quale reperto all'immunofluorescenza su biopsia renale differenzia in modo patognomonico la Sindrome di Goodpasture dalla Glomerulonefrite Lupica?",
      options: [
        "Goodpasture mostra depositi lineari continui di IgG ('ad ansa di sigaretta') lungo la membrana basale glomerulare; il LES mostra depositi granulari a zolle ('a cielo stellato / Scott') da immunocomplessi precipitati.",
        "Goodpasture presenta depositi esclusivi di IgA mesangiali; il LES mostra depositi lineari di IgM.",
        "Goodpasture non mostra depositi anticorpali ma solo necrosi tubulare acuta; il LES mostra depositi di IgE.",
        "Goodpasture presenta depositi granulari subepiteliali; il LES mostra depositi continui lineari di transferrina."
      ],
      correctAnswer: 0,
      explanation: "La sindrome di Goodpasture è una malattia di Tipo II sostenuta da autoanticorpi IgG specifici per il Collagene di Tipo IV della membrana basale: legandosi uniformemente lungo la struttura laminare, generano una fluorescenza lineare continua ('ad ansa di sigaretta'). Nel LES (Tipo III), gli immunocomplessi solubili circolanti precipitano a zolle irregolari, fornendo un pattern granulare discontinuo."
    },
    {
      id: 4,
      question: "Qual è il bersaglio autoantigenico specifico del Pemfigo Volgare e quale differenza fenotipica sussiste rispetto al Pemfigo Foliaceo?",
      options: [
        "Il Pemfigo Volgare riconosce il Collagene VII; il Foliaceo riconosce la Laminina-332.",
        "Il Pemfigo Volgare riconosce la Desmogleina 3 (Dsg3) e causa scollamento acantolitico cutaneo e delle mucose; il Pemfigo Foliaceo riconosce la Desmogleina 1 (Dsg1) con interessamento prettamente cutaneo subcorneo.",
        "Il Pemfigo Volgare riconosce l'Integrina α4; il Foliaceo riconosce il recettore CD20.",
        "Il Pemfigo Volgare è mediato da IgE; il Foliaceo è causato da immunocomplessi C1q-dipendenti."
      ],
      correctAnswer: 1,
      explanation: "Nel Pemfigo Volgare gli autoanticorpi IgG sono diretti contro la Desmogleina 3 (espressa negli strati profondi dell'epidermide e nelle mucose), provocando lesioni bollose dolorose orali e cutanee. Nel Pemfigo Foliaceo gli autoanticorpi colpiscono la Desmogleina 1, presente solo negli strati superficiali dell'epidermide senza coinvolgimento mucosale."
    },
    {
      id: 5,
      question: "Quale triade di meccanismi patogenetici spiega la debolezza muscolare flaccida nella Miastenia Gravis indotta da anticorpi anti-recettore dell'acetilcolina (AChR)?",
      options: [
        "Degradazione del nervo vago, blocco dei canali del potassio e atrofia delle placche.",
        "1) Attivazione del complemento con danno focale da MAC; 2) Cross-linking recettoriale con internalizzazione e degradazione lisosomiale di AChR; 3) Antagonismo e blocco sterico diretto del legame dell'acetilcolina.",
        "Rilascio massivo di acetilcolinesterasi endoteliale, necrosi ischemica e fibrosi muscolare.",
        "Infiltrazione massiva di eosinofili con rilascio di proteina basica maggiore e perforine."
      ],
      correctAnswer: 1,
      explanation: "Gli autoanticorpi anti-AChR agiscono attraverso tre meccanismi sinergici: la formazione del complesso di attacco alla membrana (MAC) del complemento che distrugge la morfologia giunzionale; l'aggregazione dei recettori (cross-linking) che ne promuove l'endocitosi e la distruzione lisosomiale impoverendo la membrana post-sinaptica; e l'interferenza sterica antagonista diretta contro il neurotrasmettitore."
    },
    {
      id: 6,
      question: "Quale meccanismo molecolare spiega l'esoftalmo e l'ispessimento connettivale retro-orbitario nel Morbo di Basedow-Graves?",
      options: [
        "Infiltrazione diretta di mastociti degranulanti istamina nei muscoli oculomotori.",
        "Gli autoanticorpi agonisti stimolano non solo il TSHR tiroideo, ma riconoscono e cross-attivano anche il recettore IGF-1R sui fibroblasti connettivali orbitali, stimolando la produzione massiva di matrice extracellulare e glicosaminoglicani.",
        "Vasculite da immunocomplessi che occlude l'arteria oftalmica centrale.",
        "Aumento della pressione endocranica secondario all'ipertiroidismo acuto."
      ],
      correctAnswer: 1,
      explanation: "Nel Morbo di Graves, gli autoanticorpi (TRAb) possiedono attività agonista sul recettore del TSH (TSHR) e stimolano incrociatamente il recettore del fattore di crescita insulino-simile (IGF-1R) espresso sui fibroblasti retro-orbitari. Ciò innesca proliferazione fibroblastica e iper-sintesi di matrice extracellulare (glicosaminoglicani idrofili), provocando l'aumento volumetrico connettivale retro-bulbare con protrusione oculare."
    },
    {
      id: 7,
      question: "Quale reperto autoanticorpale sierologico è considerato patognomonico di Lupus Eritematoso Sistemico (LES) e correla strettamente con il rischio e l'attività della nefrite lupica?",
      options: [
        "Anticorpi anti-centromero (ACA).",
        "Anticorpi anti-DNA a doppia elica (anti-dsDNA).",
        "Anticorpi anti-mitocondrio (AMA).",
        "Anticorpi anti-tiroglobulina (anti-Tg)."
      ],
      correctAnswer: 1,
      explanation: "Mentre gli ANA (anticorpi antinucleo) sono altamente sensibili ma poco specifici (positivi nel 5% della popolazione sana), gli anticorpi anti-dsDNA (DNA a doppia elica) sono altamente specifici e patognomonici per il LES. Il loro incremento del titolo correla direttamente con le riacutizzazioni e con la comparsa/progressione della nefrite lupica."
    },
    {
      id: 8,
      question: "Nel Diabete Mellito di Tipo 1 (T1D), quale combinazione genetica a livello delle tasche peptidiche dell'HLA di classe II conferisce un Rischio Relativo (RR) superiore a 72 volte?",
      options: [
        "Omozigosi per HLA-A*02 e HLA-B*27.",
        "Omozigosi per una catena HLA-DQβ1 con aminoacido diverso dall'acido aspartico in posizione 57 associata ad omozigosi per arginina in posizione 52 della catena DQα1.",
        "Presenza dell'allele HLA-DR3 in assenza di varianti DQ.",
        "Omozigosi per l'acido aspartico in posizione 57 della catena HLA-DQβ1."
      ],
      correctAnswer: 1,
      explanation: "L'assenza di acido aspartico in posizione 57 della catena HLA-DQβ1 (sostituito da valina o alanina idrofobica) unita alla presenza di arginina in posizione 52 della catena DQα1 modifica l'architettura della tasca P9 dell'HLA-DQ. L'assenza di carica negativa elimina la repulsione elettrostatica con l'insulina, permettendo una presentazione ad altissima efficienza ai linfociti T autoreattivi, con un Rischio Relativo > 72."
    },
    {
      id: 9,
      question: "Qual è il meccanismo d'azione del farmaco biologico Natalizumab impiegato nella terapia della Sclerosi Multipla e delle IBD?",
      options: [
        "Anticorpo monoclonale che inibisce la sfingosina-1-fosfato trattenendo i linfociti nei linfonodi.",
        "Anticorpo monoclonale diretto contro la subunità α4 delle integrine (VLA-4 / α4β7), che impedisce ai linfociti T autoreattivi di legarsi alla VCAM-1 endoteliale bloccandone l'extravasazione nel SNC e nei tessuti.",
        "Inibitore solubile del TNF-α che lisa i macrofagi microgliali.",
        "Anticorpo monoclonale anti-CD20 che induce lisi complemento-mediata delle cellule B."
      ],
      correctAnswer: 1,
      explanation: "Natalizumab è un anticorpo monoclonale umanizzato specifico per la subunità α4 delle integrine (presente in α4β1 o VLA-4 e in α4β7). Bloccando l'interazione con la molecola di adesione endoteliale VCAM-1, impedisce l'extravasazione dei linfociti T autoreattivi Th1 e Th17 attraverso la barriera emato-encefalica nel SNC, riducendo drasticamente le lesioni demielinizzanti."
    },
    {
      id: 10,
      question: "Nell'osteoimmunologia dell'Artrite Reumatoide, come si realizza il danno erosivo osseo marginale e quale ruolo svolge la citrullinazione?",
      options: [
        "I neutrofili fagocitano direttamente gli osteoblasti attraverso il recettore FcγRIII.",
        "I linfociti Th1 e Th17 nel panno sinoviale secernono RANKL che si lega al recettore RANK sui precursori osteoclastici attivando il riassorbimento osseo; la citrullinazione da enzima PAD trasforma l'arginina in citrullina rendendo le proteine self capaci di legare la tasca dell'HLA-DR4.",
        "Il complemento lisa direttamente i condrociti articolari attraverso la via alternativa.",
        "La calcitonina sinoviale viene degradata da anticorpi anti-fosfolipidi provocando osteomalacia."
      ],
      correctAnswer: 1,
      explanation: "Nell'artrite reumatoide, l'infiammazione del panno sinoviale stimola i linfociti T e i fibroblasti a produrre massicce quantità di RANKL, che attiva il recettore RANK inducendo la differenziazione e attivazione degli osteoclasti con erosione ossea subcondrale. A monte, l'enzima PAD catalizza la citrullinazione dell'arginina, permettendo ai peptidi citrullinati di alloggiare perfettamente nello Shared Epitope dell'HLA-DR4 e scatenando la produzione di ACPA."
    }
  ];

  const flashcardsData = [
    {
      id: 1,
      title: "Dimorfismo di Genere: lncRNA Xist & 81 RNP",
      front: "Perché le malattie autoimmuni colpiscono nel 75% dei casi le donne e qual è la recente scoperta su Xist?",
      back: "Oltre all'effetto modulatore degli ormoni sessuali e della gravidanza, la recente scoperta su Nature/Cell dimostra che il long non-coding RNA Xist (espresso solo nelle femmine per inattivare un cromosoma X) si lega stabilmente a 81 ribonucleoproteine self. Questo complesso macromolecolare forma un potente neoantigene immunogenico che scatena la produzione di autoanticorpi sistemici."
    },
    {
      id: 2,
      title: "Sindrome di Goodpasture vs LES alla Biopsia Renale",
      front: "Come si distingue la glomerulonefrite di Goodpasture da quella lupica in immunofluorescenza?",
      back: "Goodpasture (Tipo II): deposito lineare continuo omogeneo di IgG ('ad ansa di sigaretta') lungo la membrana basale glomerulare (anticorpi anti-collagene IV). LES (Tipo III): deposito granulare discontinuo 'a zolle / Scott' di immunocomplessi circolanti precipitati nei distretti subendoteliali, subepiteliali o mesangiali."
    },
    {
      id: 3,
      title: "Epitope Spreading nell'ITP (Morbo di Werlhof)",
      front: "Come si realizza l'allargamento dello spettro anticorpale nella Porpora Trombocitopenica Idiopatica?",
      back: "Gli autoanticorpi iniziali opsonizzano le piastrine legando GPIIb/IIIa. I macrofagi della milza le fagocitano via FcγRI, degradano la piastrina e presentano nuovi peptidi self prima inaccessibili (come la glicoproteina GPIb/IX) ai linfociti T helper. Nuovi cloni B vengono attivati producendo anticorpi anti-GPIb/IX (epitope spreading)."
    },
    {
      id: 4,
      title: "Diabete Tipo 1: Valore Predittivo degli Autoanticorpi",
      front: "Gli autoanticorpi nel Diabete Tipo 1 hanno ruolo patogenetico o predittivo? Quali sono?",
      back: "Non hanno ruolo patogenetico diretto (il danno alle cellule beta è cellulo-mediato da CTL CD8+ e citochine Th1/Th17). Hanno invece un formidabile ruolo predittivo: la presenza combinata di autoanticorpi anti-insulina (IAA), anti-GAD65 e anti-IA2 nei familiari asintomatici conferisce un rischio relativo dell'80% di sviluppare il diabete manifesto entro 10 anni."
    },
    {
      id: 5,
      title: "Osteoimmunologia: Asse RANKL / RANK / OPG nell'AR",
      front: "Come viene indotta la distruzione ossea erosiva nel panno sinoviale dell'Artrite Reumatoide?",
      back: "I linfociti T attivati (Th1, Th17) e i sinoviociti fibroblasto-simili nel panno infiammatorio iper-esprimono RANKL (RANK Ligando). RANKL lega il recettore RANK sui precursori degli osteoclasti, stimolandone la maturazione e l'attività riassorbitiva ossea subcondrale. L'osteoprotegerina (OPG, esca solubile) è soppressa."
    },
    {
      id: 6,
      title: "Citrullinazione da Enzima PAD & ACPA",
      front: "Che cos'è la citrullinazione post-traduzionale e quale significato clinico ha nell'Artrite Reumatoide?",
      back: "La deaminazione dell'aminoacido basico Arginina trasformato in Citrullina neutra, catalizzata dall'enzima Peptidilarginina Deaminasi (PAD) in presenza di calcio e flogosi. I peptidi citrullinati legano la tasca elettropositiva dell'HLA-DR4/DR1 (Shared Epitope), inducendo la sintesi degli anticorpi ACPA, ad altissima specificità diagnostica."
    }
  ];

  return (
    <div className="space-y-12">
      {/* MONOGRAPHIC HERO SECTION */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="border-b border-slate-200 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                Lezione 31 · Trattato di Immunologia Clinica & Immunopatologia
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-white">
                Malattie Autoimmuni: Spettro Nosografico, Dimorfismo Sessuale, Reazioni di Tipo II, III e IV
              </h1>
              <p className="text-blue-100/90 text-sm sm:text-base mt-2 max-w-4xl">
                Dall'inquadramento continuo con l'autoinfiammazione e la recente scoperta del long non-coding RNA Xist (81 RNP),
                alla dissezione eziopatogenetica delle patologie di Tipo II (ITP, Goodpasture, Pemfigo, Miastenia, Graves),
                di Tipo III (Lupus Eritematoso Sistemico e connettiviti) e di Tipo IV cellulo-mediate e miste
                (Diabete Tipo 1, Sclerosi Multipla, Osteoimmunologia dell'Artrite Reumatoide e Vitiligine).
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-blue-800/50 text-xs text-blue-200/90 font-medium">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-blue-400" />
              <span><strong>Docente:</strong> Prof.ssa Ricciarda Galandrini</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400" />
              <span><strong>Data:</strong> 11 Dicembre 2025 (1ª e 2ª ora, h8:00 - 10:00)</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-400" />
              <span><strong>Sbobinatori:</strong> Alessandra Civile, Alessio Corsaletti | <strong>Revisori:</strong> Maria Antonietta Chiodo, Vitandrea De Vito Francesco</span>
            </div>
          </div>
        </div>

        {/* METRICS & OVERVIEW STRIP */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-200 bg-slate-50 border-b border-slate-200 text-xs">
          <div className="p-4 flex items-center gap-3">
            <Dna className="w-5 h-5 text-indigo-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900">Dimorfismo Sessuale</div>
              <div className="text-slate-500 text-[11px]">75% Donne · lncRNA Xist</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900">Tipo II & III</div>
              <div className="text-slate-500 text-[11px]">ITP, Goodpasture, LES</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-3">
            <Activity className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900">Tipo IV & Miste</div>
              <div className="text-slate-500 text-[11px]">Diabete T1, SM, AR, Vitiligine</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-3">
            <SlidersHorizontal className="w-5 h-5 text-amber-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900">2 Simulatori Clinici</div>
              <div className="text-slate-500 text-[11px]">Recettoriale & Osteoimmune</div>
            </div>
          </div>
        </div>
      </div>

      {/* SEZIONE 31.1: INQUADRAMENTO NOSOGRAFICO & DIMORFISMO DI GENERE */}
      <article id="sec-31-1" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold block">
            Sezione 31.1 · Epistemologia & Genetica di Popolazione
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Lo Spettro Continuo tra Autoimmunità ed Autoinfiammazione & il Ruolo del lncRNA Xist nel Dimorfismo Sessuale
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Le patologie causate da un funzionamento aberrante del sistema immunitario non rappresentano entità isolate, bensì si distribuiscono
            lungo uno <strong>spettro continuo e dinamico</strong>:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50">
              <div className="flex items-center gap-2 font-bold text-blue-900 text-sm mb-1.5">
                <Target className="w-4 h-4 text-blue-600" />
                <span>Polo dell'Autoimmunità Propriamente Detta</span>
              </div>
              <p className="text-slate-700 text-xs leading-relaxed">
                Il danno tessutale è mediato primariamente dai rami dell'<strong>immunità adattativa (linfociti T e linfociti B/anticorpi)</strong>,
                diretti verso <em>antigeni self ben definiti, clonabili e caratterizzati</em> (es. desmogleine nel pemfigo, AChR nella miastenia,
                collagene IV in Goodpasture, o peptidi della mielina nella sclerosi multipla).
              </p>
            </div>
            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm mb-1.5">
                <Flame className="w-4 h-4 text-amber-600" />
                <span>Polo dell'Autoinfiammazione</span>
              </div>
              <p className="text-slate-700 text-xs leading-relaxed">
                Il danno è sostenuto prevalentemente da iperattivazione dell'<strong>immunità innata (inflammasoma, macrofagi, neutrofili, citochine IL-1/IL-6/TNF)</strong>.
                Non si individua un autoantigene molecolare self preciso, ma uno stimolo flogistico cronico verso fattori endogeni o commensali aleatori
                (es. Malattie Infiammatorie Croniche Intestinali come Morbo di Crohn e Rettocolite Ulcerosa, o la Psoriasi).
              </p>
            </div>
          </div>
          <p>
            Alcune tra le malattie più invalidanti, come l'<strong>Artrite Reumatoide</strong>, si collocano esattamente a metà di questo continuum:
            presentano autoantigeni definiti e autoanticorpi ad alta specificità (ACPA), ma il danno erosivo poggia su una tempesta flogistica innata
            e su un'infiltrazione neutrofilo-macrofagica indistinguibile dalle malattie autoinfiammatorie.
          </p>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Il Mistero del Dimorfismo Sessuale: Perché il 75% dei Pazienti è di Sesso Femminile?
          </h3>
          <p>
            Uno dei dati epidemiologici più eclatanti in immunologia clinica è la marcata asimmetria di genere: circa il <strong>75% dei soggetti affetti da malattie autoimmuni appartiene al sesso femminile</strong>.
            Le patologie esordiscono tipicamente nell'età fertile, si modificano marcatamente durante la gravidanza (frequente remissione in gestazione seguita da violente riacutizzazioni nel post-partum)
            e peggiorano sotto terapie estroprogestiniche.
          </p>

          <div className="p-5 rounded-xl border border-indigo-200 bg-indigo-50/70 my-4">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-indigo-950 text-sm">
                  La Scoperta Rivoluzionaria del Long Non-Coding RNA Xist (Cell/Nature 2024)
                </h4>
                <p className="text-indigo-900 text-xs mt-1.5 leading-relaxed font-serif-body">
                  Nelle femmine di mammifero, la compensazione di dose genica richiede l'inattivazione trascrizionale casuale di uno dei due cromosomi X in ciascuna cellula somatica.
                  Questo processo è orchestrato dal trascritto non tradotto <strong>Xist (X-inactive specific transcript)</strong>, un long non-coding RNA (lncRNA) espresso unicamente
                  nel sesso femminile.
                  Studi innovativi condotti con animali transgenici e su coorti cliniche hanno rivelato che il lncRNA Xist non agisce in forma isolata, bensì
                  <strong>si associa stabilmente a ben 81 diverse ribonucleoproteine (RNP) self</strong>, formando complessi ribonucleoproteici densi.
                  La frammentazione e il rilascio di questi complessi durante il turnover cellulare genera un vero e proprio <em>neoantigene macromolecolare immunogenico</em>.
                  Il sistema immunitario sviluppa anticorpi diretti contro le ribonucleoproteine associate a Xist, fornendo per la prima volta una solida spiegazione
                  molecolare e genetica non ormonale per la predisposizione femminile al LES e alle connettiviti sistemiche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* SEZIONE 31.2: MALATTIE DI 2° TIPO: ITP & EPITOPE SPREADING */}
      <article id="sec-31-2" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold block">
            Sezione 31.2 · Citotossicità & Opsonizzazione
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Reazioni di Tipo II: Porpora Trombocitopenica Idiopatica (ITP / Werlhof) & Fenomeno dell'Epitope Spreading
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Le <strong>reazioni di ipersensibilità di Tipo II</strong> sono sostenute da autoanticorpi ad alta affinità (prevalentemente IgG)
            diretti contro antigeni insolubili ancorati stabilmente sulla superficie cellulare o all'interno della matrice extracellulare.
          </p>
          <p>
            La <strong>Porpora Trombocitopenica Idiopatica (ITP o Morbo di Werlhof)</strong> è il prototipo della malattia autoimmune citopenica periferica.
            Non è secondaria ad un difetto di produzione midollare (il midollo presenta anzi iperplasia megacariocitaria compensatoria),
            ma ad una <strong>distruzione periferica accelerata delle piastrine circolanti</strong>.
          </p>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 my-3 space-y-2 text-xs">
            <div className="font-bold text-slate-900 text-sm">Fisiopatologia & Quadro Clinico Ematologico:</div>
            <p className="text-slate-700 leading-relaxed">
              La concentrazione fisiologica di piastrine è compresa tra <strong>150.000 e 350.000 / μL</strong>.
              Quando gli autoanticorpi IgG legano le glicoproteine di membrana <strong>GPIIb/IIIa (integrina αIIbβ3)</strong>, le piastrine opsonizzate attraversano
              il filtro splenico e vengono captate dai macrofagi della milza attraverso il recettore per la frazione costante <strong>FcγRI (CD64)</strong>.
            </p>
            <p className="text-slate-700 leading-relaxed">
              La caduta del conteggio piastrinico al di sotto di 50.000/μL provoca manifestazioni emorragiche cutanee spontanee:
              <strong>petecchie</strong> (microemorragie puntiformi confluenti, accentuate agli arti inferiori per gravità idrostatica), ecchimosi,
              emorragie congiuntivali ed epistassi. Sotto la soglia critica di <strong>10.000–6.000 / μL</strong>, il paziente è esposto al rischio mortale
              di emorragie spontanee viscerali (tratto gastroenterico) ed emorragie cerebrali intracraniche.
            </p>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            La Porpora come Modello Didattico di Epitope Spreading (Diffusione dell'Epitopo)
          </h3>
          <p>
            Nella lezione, la Prof.ssa Galandrini sottolinea come l'ITP rappresenti una perfetta dimostrazione biologica di <strong>Epitope Spreading</strong> non dipendente da patogeni:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-800 text-xs">
            <li>L'autoimmunità esordisce con cloni B che producono anticorpi limitati contro un singolo epitopo dominante, la glicoproteina <strong>GPIIb/IIIa (2B/3A)</strong>.</li>
            <li>Il macrofago splenico fagocita l'intera piastrina opsonizzata e la degrada nei lisosomi.</li>
            <li>All'interno delle vescicole endocitiche, il macrofago processa e carica su MHC-II non solo la GPIIb/IIIa, ma una miriade di altre glicoproteine piastriniche intatte prima inaccessibili, come la glicoproteina <strong>GPIb/IX (1B9)</strong>.</li>
            <li>Il macrofago funge da APC presentando questi peptidi a cloni T helper naive, che a loro volta reclutano nuovi linfociti B.</li>
            <li>Si formano così autoanticorpi secondari diretti contro GPIb/IX: <em>lo spettro autoanticorpale si è diffuso ad epitopi intracellulari e adiacenti</em>, cronicizzando la malattia.</li>
          </ol>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Evoluzione Strategica del Trattamento dell'ITP
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3 text-xs">
            <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-900 block mb-1">1. Splenectomia Chirurgica</span>
              <p className="text-slate-600 leading-relaxed">
                Asportazione fisica della milza per eliminare la sede primaria di fagocitosi ed intrappolamento piastrinico. Oggi considerata seconda o terza linea per il rischio di infezioni da capsulati (pneumococco, meningococco).
              </p>
            </div>
            <div className="p-3.5 rounded-lg border border-blue-200 bg-blue-50/60">
              <span className="font-bold text-blue-950 block mb-1">2. Rituximab (Anti-CD20)</span>
              <p className="text-slate-700 leading-relaxed">
                Primo anticorpo monoclonale approvato in Italia. Legandosi a CD20 sui linfociti B, induce deplezione selettiva per citotossicità ADCC e complemento, arrestando la sintesi de novo di autoanticorpi.
              </p>
            </div>
            <div className="p-3.5 rounded-lg border border-emerald-200 bg-emerald-50/60">
              <span className="font-bold text-emerald-950 block mb-1">3. Inibitori di Syk (Fostamatinib)</span>
              <p className="text-slate-700 leading-relaxed">
                Target therapy di ultima generazione. La tirosin-chinasi <strong>Syk</strong> trasduce il segnale a valle dei recettori FcγR macrofagici; il suo blocco impedisce la fagocitosi delle piastrine opsonizzate senza depletare i linfociti B.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* SEZIONE 31.3: MALATTIE DI 2° TIPO DA DANNO TISSUTALE: GOODPASTURE VS PEMFIGO */}
      <article id="sec-31-3" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold block">
            Sezione 31.3 · Danno Tessutale di Membrana & Giunzioni
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Sindrome di Goodpasture (Anti-GBM) vs Pemfigo Volgare e Foliaceo (Anti-Desmogleine)
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
            {/* GOODPASTURE */}
            <div className="p-5 rounded-xl border border-rose-200 bg-rose-50/50 space-y-3">
              <div className="flex items-center gap-2 font-bold text-rose-950 text-sm">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                <span>Sindrome di Goodpasture (Malattia da Anti-GBM)</span>
              </div>
              <p className="text-xs text-rose-950 leading-relaxed font-serif-body">
                <strong>Autoantigene Bersaglio:</strong> Dominio NC1 della catena α3 del <strong>Collagene di Tipo IV</strong>,
                espresso in modo selettivo nelle membrane basali dei glomeruli renali (GBM) e degli alveoli polmonari.
              </p>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Meccanismo di Danno & Clinica:</strong> Gli autoanticorpi IgG si fissano saldamente alle membrane basali,
                attivando il complemento (C3a, C5a) e richiamando neutrofili. La degranulazione di proteasi neutrofile causa denudamento endoteliale,
                rottura della barriera di filtrazione e dei capillari alveolari: il quadro clinico è dominato da
                <strong>glomerulonefrite rapidamente progressiva (RPGN con insufficienza renale acuta) ed emottisi polmonare massiva</strong> (infiltrati polmonari, tosse e dispnea).
              </p>
              <div className="p-3 rounded-lg bg-white border border-rose-300 text-xs text-rose-950">
                <span className="font-bold block mb-1">Reperto Istologico Patognomonico:</span>
                All'immunofluorescenza diretta su biopsia renale con anticorpi anti-IgG umane marcati con fluoresceina, si osserva una
                <strong>colorazione verde lineare continua e omogenea ('ad ansa di sigaretta')</strong> lungo tutte le anse glomerulari.
                Questo reperto differenzia in modo netto Goodpasture dalle glomerulonefriti da immunocomplessi (Tipo III), che mostrano depositi discontinui granulari.
              </div>
            </div>

            {/* PEMFIGO */}
            <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/50 space-y-3">
              <div className="flex items-center gap-2 font-bold text-amber-950 text-sm">
                <Flame className="w-4 h-4 text-amber-600" />
                <span>Pemfigo Volgare vs Pemfigo Foliaceo</span>
              </div>
              <p className="text-xs text-amber-950 leading-relaxed font-serif-body">
                <strong>Autoantigene Bersaglio:</strong> Le <strong>Desmogleine (Dsg1 e Dsg3)</strong>, caderine desmosomiali
                che garantiscono l'ancoraggio intercellulare tra i cheratinociti dell'epitelio pavimentoso stratificato.
              </p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <p>
                  <strong>Pemfigo Volgare (Anti-Dsg3 ± Dsg1):</strong> la desmogleina 3 è espressa soprattutto negli strati basali e soprabasali e nelle mucose.
                  Il legame anticorpale causa scollamento acantolitico profondo con <strong>bolle flaccide e dolorosissime ulcere della mucosa orale</strong> e cutanee.
                </p>
                <p>
                  <strong>Pemfigo Foliaceo (Anti-Dsg1 selettivo):</strong> la desmogleina 1 è espressa nello strato granuloso subcorneo superficiale.
                  Produce lesioni bollose esfoliative e crostose superficiali <em>senza interessamento mucosale</em>.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-white border border-amber-300 text-xs text-amber-950">
                <span className="font-bold block mb-1">Reperto in Immunofluorescenza:</span>
                I depositi di IgG delineano perfettamente i contorni perimetrali dei singoli cheratinociti, generando il classico aspetto
                <strong>'a maglie di rete' o 'a nido d'ape' (acantolisi intraepidermica)</strong>.
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* SEZIONE 31.4: MALATTIE DI 2° TIPO CON ALTERAZIONE RECETTORIALE: MIASTENIA & GRAVES */}
      <article id="sec-31-4" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold block">
            Sezione 31.4 · Disfunzione della Segnalazione Molecolare
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Alterazioni Recettoriali di Tipo II: Antagonismo nella Miastenia Gravis & Agonismo nel Morbo di Basedow-Graves
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Nelle patologie di Tipo II non sempre il danno culmina nella lisi necrotica del tessuto: gli autoanticorpi possono agire modulando
            direttamente l'attività dei recettori cellulari, comportandosi come <strong>antagonisti neutralizzanti</strong> o come <strong>agonisti stimolanti</strong>.
          </p>

          <div className="space-y-4 my-4">
            {/* MIASTENIA GRAVIS */}
            <div className="p-5 rounded-xl border border-purple-200 bg-purple-50/60">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-purple-200 text-purple-900">
                    Effetto Antagonista & Deplezione Recettoriale
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-1.5">
                    Miastenia Gravis: Bersaglio Recettore Nicotinico AChR
                  </h4>
                </div>
                <span className="text-xs font-mono text-purple-800 font-bold shrink-0">Placca Neuromuscolare</span>
              </div>
              <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                Gli autoanticorpi IgG legano il recettore dell'acetilcolina (<strong>AChR</strong>) sulla membrana post-sinaptica del muscolo striato.
                La patogenesi poggia su tre meccanismi integrati:
              </p>
              <ul className="list-disc pl-5 mt-1.5 space-y-1 text-xs text-slate-800">
                <li><strong>Lisi Osmotica Complemento-Mediata:</strong> l'attivazione del complemento assembla il complesso di attacco alla membrana (MAC) determinando la distruzione dei ripiegamenti giunzionali della placca motrice.</li>
                <li><strong>Cross-linking ed Endocitosi Forzata:</strong> legando contemporaneamente due subunità adiacenti, gli anticorpi provocano l'aggregazione dei recettori inducendone l'internalizzazione e degradazione lisosomiale (impoverimento recettoriale di membrana).</li>
                <li><strong>Blocco Sterico Diretto:</strong> impediscono fisicamente all'acetilcolina rilasciata dal terminale presinaptico di legare la tasca attiva.</li>
              </ul>
              <div className="mt-2.5 p-3 rounded-lg bg-white border border-purple-200 text-xs text-purple-950 font-serif-body">
                <strong>Clinica:</strong> Paralisi flaccida a faticabilità ingravescente. Esordisce tipicamente con <strong>ptosi palpebrale asimmetrica</strong> (un solo occhio),
                diplopia, alterazione della mimica facciale, disfagia e debolezza muscolare che peggiora verso sera; nelle fasi avanzate minaccia la vita per insufficienza dei muscoli respiratori intercostali e del diaframma.
              </div>
            </div>

            {/* MORBO DI BASEDOW-GRAVES */}
            <div className="p-5 rounded-xl border border-teal-200 bg-teal-50/60">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-teal-200 text-teal-900">
                    Effetto Agonista Stimolante & Cross-Reattività IGF-1R
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-1.5">
                    Morbo di Basedow-Graves: Tireotossicosi, Esoftalmo & Dita a Bacchetta di Tamburo
                  </h4>
                </div>
                <span className="text-xs font-mono text-teal-800 font-bold shrink-0">Recettori TSHR & IGF-1R</span>
              </div>
              <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                Gli autoanticorpi (chiamati <strong>TRAb</strong> o <strong>TSI</strong>, <em>Thyroid-Stimulating Immunoglobulins</em>) riconoscono il recettore per l'ormone tireostimolante (<strong>TSHR</strong>)
                espresso sulle cellule follicolari tiroidee (tireociti). Anziché bloccarlo, mimano l'azione del TSH naturale, attivando stabilmente la cascata dell'adenilato ciclasi e cAMP.
                Si genera una <strong>produzione autonoma incontrollata di ormoni tiroidei (T3 e T4)</strong> con blocco totale per feedback negativo del TSH ipofisario (che crolla a valori indosabili).
              </p>
              <div className="mt-2.5 p-3 rounded-lg bg-white border border-teal-200 text-xs text-teal-950 font-serif-body">
                <strong>Il Meccanismo dell'Esoftalmo Retrobulbare e dell'Acropachia:</strong>
                Oltre all'ipertiroidismo (gozzo diffuso, tachicardia, calo ponderale, tremori, ansia), i pazienti presentano una caratteristica protrusione bilaterale dei globi oculari (<strong>esoftalmo</strong>),
                edema pretibiale e dita 'a bacchetta di tamburo'. Come chiarito dalla docente, questo danno connettivale distrettuale scaturisce dal fatto che i medesimi autoanticorpi
                <strong>stimolano anche il recettore per il fattore di crescita IGF-1R (Insulin-like Growth Factor-1 Receptor)</strong> espresso dai fibroblasti dell'orbita oculare e del derma,
                stimolandoli a produrre quantità massive di glicosaminoglicani idrofili e matrice extracellulare che rigonfiano i tessuti retro-oculari.
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* SIMULATORE 1: LABORATORIO REAZIONI DI TIPO II & RECETTORIALI */}
      <div id="sim-type2-receptor-pathology" className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
              <Microscope className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold block">
                Simulatore Didattico Interattivo 31.1
              </span>
              <h3 className="text-xl font-bold text-white">
                Laboratorio delle Patologie di Tipo II: Opsonizzazione, Danno di Membrana & Disfunzioni Recettoriali
              </h3>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono">
            Modellazione Biofisica Integrata
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls */}
          <div className="space-y-4 bg-slate-800/60 p-5 rounded-xl border border-slate-700/60 text-xs">
            <div>
              <label className="text-slate-300 font-bold block mb-2">1. Seleziona la Patologia Autoimmune di Tipo II:</label>
              <div className="space-y-1.5">
                <button
                  onClick={() => setSelectedType2Disease('itp')}
                  className={`w-full p-2.5 rounded-lg border text-left transition-all ${
                    selectedType2Disease === 'itp'
                      ? 'bg-blue-600/30 border-blue-400 text-blue-200 font-bold ring-1 ring-blue-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  ITP (Porpora Trombocitopenica Idiopatica)
                </button>
                <button
                  onClick={() => setSelectedType2Disease('goodpasture')}
                  className={`w-full p-2.5 rounded-lg border text-left transition-all ${
                    selectedType2Disease === 'goodpasture'
                      ? 'bg-rose-600/30 border-rose-400 text-rose-200 font-bold ring-1 ring-rose-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Sindrome di Goodpasture (Anti-Collagene IV)
                </button>
                <button
                  onClick={() => setSelectedType2Disease('pemphigus')}
                  className={`w-full p-2.5 rounded-lg border text-left transition-all ${
                    selectedType2Disease === 'pemphigus'
                      ? 'bg-amber-600/30 border-amber-400 text-amber-200 font-bold ring-1 ring-amber-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Pemfigo (Anti-Desmogleine 1 & 3)
                </button>
                <button
                  onClick={() => setSelectedType2Disease('myasthenia')}
                  className={`w-full p-2.5 rounded-lg border text-left transition-all ${
                    selectedType2Disease === 'myasthenia'
                      ? 'bg-purple-600/30 border-purple-400 text-purple-200 font-bold ring-1 ring-purple-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Miastenia Gravis (Antagonismo Anti-AChR)
                </button>
                <button
                  onClick={() => setSelectedType2Disease('graves')}
                  className={`w-full p-2.5 rounded-lg border text-left transition-all ${
                    selectedType2Disease === 'graves'
                      ? 'bg-teal-600/30 border-teal-400 text-teal-200 font-bold ring-1 ring-teal-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Morbo di Basedow-Graves (Agonismo TSHR & IGF-1R)
                </button>
              </div>
            </div>

            {/* Sub-controls conditional on selected disease */}
            {selectedType2Disease === 'itp' && (
              <div className="pt-2 border-t border-slate-700 space-y-3">
                <div>
                  <label className="text-slate-300 font-bold block mb-1">
                    Conteggio Piastrinico: <span className="text-blue-300 font-mono">{itpPlateletCount.toLocaleString()} / μL</span>
                  </label>
                  <input
                    type="range"
                    min="4000"
                    max="280000"
                    step="2000"
                    value={itpPlateletCount}
                    onChange={(e) => setItpPlateletCount(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-0.5">
                    <span>4k (Grave)</span>
                    <span>50k (Petecchie)</span>
                    <span>250k (Normale)</span>
                  </div>
                </div>
                <div>
                  <label className="text-slate-300 font-bold block mb-1">Opzione Terapeutica:</label>
                  <select
                    value={itpTreatment}
                    onChange={(e) => setItpTreatment(e.target.value as any)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs text-slate-200"
                  >
                    <option value="none">Nessuna terapia attiva</option>
                    <option value="syk_inhibitor">Inibitore di Syk (Fostamatinib) - Blocco FcγR</option>
                    <option value="rituximab">Rituximab (Anti-CD20) - Deplezione Linfociti B</option>
                    <option value="splenectomia">Splenectomia Chirurgica</option>
                    <option value="tpo_mimetic">TPO-Mimetico (Stimolazione Midollare)</option>
                  </select>
                </div>
              </div>
            )}

            {selectedType2Disease === 'pemphigus' && (
              <div className="pt-2 border-t border-slate-700 space-y-2">
                <label className="text-slate-300 font-bold block mb-1">Sottotipo Clinico:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setPemphigusSubtype('vulgaris_dsg3')}
                    className={`p-2 rounded border text-left ${pemphigusSubtype === 'vulgaris_dsg3' ? 'bg-amber-600/30 border-amber-400 text-white font-bold' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
                  >
                    Volgare (Dsg3)
                    <div className="text-[10px] text-slate-400">Mucose + Cute</div>
                  </button>
                  <button
                    onClick={() => setPemphigusSubtype('foliaceus_dsg1')}
                    className={`p-2 rounded border text-left ${pemphigusSubtype === 'foliaceus_dsg1' ? 'bg-amber-600/30 border-amber-400 text-white font-bold' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
                  >
                    Foliaceo (Dsg1)
                    <div className="text-[10px] text-slate-400">Solo Cute Subcornea</div>
                  </button>
                </div>
              </div>
            )}

            {selectedType2Disease === 'myasthenia' && (
              <div className="pt-2 border-t border-slate-700 space-y-2">
                <label className="text-slate-300 font-bold block mb-1">Meccanismo Molecolare in Esame:</label>
                <div className="space-y-1.5">
                  <button
                    onClick={() => setMyastheniaMechanism('complement_mac')}
                    className={`w-full p-2 rounded border text-left ${myastheniaMechanism === 'complement_mac' ? 'bg-purple-600/30 border-purple-400 text-white font-bold' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
                  >
                    1. Lisi da Complesso MAC
                  </button>
                  <button
                    onClick={() => setMyastheniaMechanism('internalization')}
                    className={`w-full p-2 rounded border text-left ${myastheniaMechanism === 'internalization' ? 'bg-purple-600/30 border-purple-400 text-white font-bold' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
                  >
                    2. Cross-Linking & Degradazione Lisosomiale
                  </button>
                  <button
                    onClick={() => setMyastheniaMechanism('antagonism')}
                    className={`w-full p-2 rounded border text-left ${myastheniaMechanism === 'antagonism' ? 'bg-purple-600/30 border-purple-400 text-white font-bold' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
                  >
                    3. Antagonismo Sterico Diretto
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Visualization & Outcome (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-5 rounded-xl border border-slate-700 bg-slate-800/80">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Dinamica Patologica & Biomarcatori di Laboratorio
                </span>
                <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${
                  selectedType2Disease === 'goodpasture'
                    ? 'bg-rose-950 text-rose-300 border border-rose-700'
                    : selectedType2Disease === 'graves'
                    ? 'bg-teal-950 text-teal-300 border border-teal-700'
                    : selectedType2Disease === 'myasthenia'
                    ? 'bg-purple-950 text-purple-300 border border-purple-700'
                    : 'bg-blue-950 text-blue-300 border border-blue-700'
                }`}>
                  {selectedType2Disease === 'itp'
                    ? (itpPlateletCount < 10000 ? 'RISCHIO EMORRAGIA CEREBRALE' : itpPlateletCount < 50000 ? 'PETECCHIE & PORPORA CLINICA' : 'COMPENSATO')
                    : selectedType2Disease === 'goodpasture'
                    ? 'GLOMERULONEFRITE & EMOTTISI'
                    : selectedType2Disease === 'pemphigus'
                    ? 'ACANTOLISI EPITELIALE'
                    : selectedType2Disease === 'myasthenia'
                    ? 'PARALISI FLACCIDA & PTOSI'
                    : 'TIREOTOSSICOSI & ESOFTALMO'}
                </span>
              </div>

              {/* Status Metrics Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">Bersaglio Molecolare</div>
                  <div className="text-sm font-bold text-white mt-0.5 truncate">
                    {selectedType2Disease === 'itp'
                      ? 'GPIIb/IIIa & GPIb/IX'
                      : selectedType2Disease === 'goodpasture'
                      ? 'Collagene IV (catena α3 NC1)'
                      : selectedType2Disease === 'pemphigus'
                      ? (pemphigusSubtype === 'vulgaris_dsg3' ? 'Desmogleina 3 (Dsg3)' : 'Desmogleina 1 (Dsg1)')
                      : selectedType2Disease === 'myasthenia'
                      ? 'Recettore AChR nicotinico'
                      : 'Recettori TSHR & IGF-1R'}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">Pattern Immunofluorescenza</div>
                  <div className="text-sm font-bold text-white mt-0.5 truncate">
                    {selectedType2Disease === 'goodpasture'
                      ? 'Lineare continuo (ansa sigaretta)'
                      : selectedType2Disease === 'pemphigus'
                      ? 'A maglie di rete (intercellulare)'
                      : selectedType2Disease === 'itp'
                      ? 'Opsonizzazione piastrinica'
                      : 'Disperso giunzionale'}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">Evoluzione Terapeutica</div>
                  <div className="text-sm font-bold text-white mt-0.5 truncate">
                    {selectedType2Disease === 'itp'
                      ? itpTreatment === 'syk_inhibitor' ? 'Syk Inibito (Fostamatinib)' : itpTreatment === 'rituximab' ? 'Deplezione B (Rituximab)' : 'Terapia standard'
                      : selectedType2Disease === 'goodpasture'
                      ? 'Plasmaferesi + Ciclofosfamide'
                      : selectedType2Disease === 'pemphigus'
                      ? 'Rituximab + Corticosteroidi'
                      : selectedType2Disease === 'myasthenia'
                      ? 'Anticolinesterasici + Plasmaferesi'
                      : 'Anti-tiroidei (Metimazolo) ± I-131'}
                  </div>
                </div>
              </div>

              {/* Dynamic Mechanism Narrative */}
              <div className="mt-4 p-4 rounded-lg bg-slate-900/90 border border-slate-700 text-xs leading-relaxed">
                <div className="font-bold text-blue-400 mb-1 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Referto Meccanicistico Integrato:</span>
                </div>
                {selectedType2Disease === 'itp' ? (
                  <p className="text-slate-200">
                    <strong>Porpora Trombocitopenica:</strong> Le piastrine opsonizzate da IgG anti-GPIIb/IIIa vengono catturate
                    dai macrofagi della polpa rossa splenica via <em>FcγRI</em>. Con conteggio &lt; 20.000/μL compaiono petecchie confluenti e sanguinamenti gengivali.
                    La fagocitosi stimola l'<em>epitope spreading</em> verso GPIb/IX.
                    {itpTreatment === 'syk_inhibitor' && ' Con Fostamatinib, la tirosin-chinasi Syk è bloccata: i macrofagi non possono fagocitare le piastrine nonostante la presenza di autoanticorpi.'}
                    {itpTreatment === 'rituximab' && ' Con Rituximab, la somministrazione anti-CD20 elimina i precursori dei cloni B secernenti, riducendo progressivamente il titolo di autoanticorpi circolanti.'}
                  </p>
                ) : selectedType2Disease === 'goodpasture' ? (
                  <p className="text-rose-200">
                    <strong>Sindrome di Goodpasture:</strong> Gli autoanticorpi IgG rivestono omogeneamente la lamina basale glomerulare e gli alveoli polmonari.
                    Il reclutamento massivo di neutrofili causa rottura vascolare con <em>emottisi</em> e <em>glomerulonefrite necrotizzante rapidamente progressiva</em>.
                    All'immunofluorescenza è diagnostico il tracciato verde lineare a 'ansa di sigaretta'.
                  </p>
                ) : selectedType2Disease === 'pemphigus' ? (
                  <p className="text-amber-200">
                    <strong>Pemfigo:</strong> Gli anticorpi anti-desmogleine scollano i desmosomi dei cheratinociti.
                    {pemphigusSubtype === 'vulgaris_dsg3'
                      ? ' Nel Pemfigo Volgare (anti-Dsg3), lo scollamento avviene negli strati profondi sovra-basali provocando bolle flaccide e severe ulcere dolorose della mucosa orale.'
                      : ' Nel Pemfigo Foliaceo (anti-Dsg1), il clivaggio avviene nel distretto subcorneo superficiale cutaneo, risparmiando totalmente le mucose.'}
                  </p>
                ) : selectedType2Disease === 'myasthenia' ? (
                  <p className="text-purple-200">
                    <strong>Miastenia Gravis:</strong> {myastheniaMechanism === 'complement_mac' && 'Il complemento assembla il MAC provocando lisi osmotica e perdita delle pliche post-sinaptiche.'}
                    {myastheniaMechanism === 'internalization' && 'Il cross-linking bivalente delle IgG porta all\'internalizzazione e degradazione lisosomiale di AChR.'}
                    {myastheniaMechanism === 'antagonism' && 'L\'anticorpo blocca stericamente il legame dell\'acetilcolina.'}
                    Clinicamente si manifesta con ptosi palpebrale asimmetrica e debolezza muscolare ingravescente.
                  </p>
                ) : (
                  <p className="text-teal-200">
                    <strong>Morbo di Basedow-Graves:</strong> Gli anticorpi TRAb agiscono da agonisti stimolanti il TSHR, producendo ipertiroidismo con gozzo e TSH soppresso.
                    Contemporaneamente, stimolano il recettore <em>IGF-1R</em> sui fibroblasti connettivali, scatenando l'accumulo di glicosaminoglicani che spinge in avanti i bulbi oculari (<strong>esoftalmo</strong>) e deforma le estremità digitali (acropachia a bacchetta di tamburo).
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEZIONE 31.5: MALATTIE DI 3° TIPO: LES, CONNETTIVITI & ANTICORPI ANTINUCLEO */}
      <article id="sec-31-5" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold block">
            Sezione 31.5 · Vasculiti da Immunocomplessi
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Malattie di 3° Tipo: Le Connettiviti Sistemiche, Anticorpi Antinucleo (ANA) & Lupus Eritematoso Sistemico
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Le <strong>reazioni di ipersensibilità di Tipo III</strong> sono mediate dalla formazione di <strong>immunocomplessi solubili circolanti (IC)</strong>,
            costituiti da antigeni solubili complessati ad anticorpi IgG o IgM. Quando la capacità fisiologica di clearance del sistema reticolo-endoteliale
            viene superata, gli immunocomplessi precipitano passivamente lungo l'endotelio dei capillari con elevata pressione idrostatica e turbolenza (glomeruli renali, sinovie articolari, vasi cutanei).
          </p>
          <p>
            Le <strong>Connettiviti Sistemiche</strong> costituiscono la famiglia classica delle malattie da immunocomplessi:
            comprendono il <em>Lupus Eritematoso Sistemico (LES)</em>, la <em>Sclerosi Sistemica (Sclerodermia)</em>, la <em>Dermatomiosite</em>,
            la <em>Sindrome di Sjögren</em> e la <em>Connettivite Mista (MCTD)</em>.
          </p>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            La Diagnostica degli Anticorpi Antinucleo (ANA) & il Paradosso della Specificità
          </h3>
          <p>
            Nel percorso diagnostico di laboratorio si esegue innanzitutto il dosaggio degli <strong>Anticorpi Antinucleo (ANA)</strong> in immunofluorescenza indiretta:
          </p>
          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/70 text-xs text-slate-800 space-y-2">
            <div className="font-bold text-amber-950 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Avvertenza Clinica: Bassa Specificità degli ANA di Screening</span>
            </div>
            <p className="leading-relaxed font-serif-body">
              Circa il <strong>5% della popolazione sana generale</strong> è positiva agli ANA a basso o medio titolo senza sviluppare alcuna patologia autoimmune.
              Gli ANA hanno quindi un elevato valore predittivo negativo (se negativi, il LES è improbabile al 98%), ma una bassa specificità positiva.
              Per formulare diagnosi certa è imperativo ricercare le <strong>sottospecificità autoanticorpali</strong>:
            </p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Anti-dsDNA (DNA nativo a doppia elica):</strong> altamente specifici e patognomonici per il LES. Il loro titolo correla direttamente con il rischio e la gravità della nefrite lupica attiva.</li>
              <li><strong>Anti-Sm (Smith):</strong> specifici per proteine core delle ribonucleoproteine nucleari; virtualmente diagnostici per LES.</li>
              <li><strong>Anti-Istoni:</strong> positivi in oltre il 95% dei casi di <em>Lupus indotto da farmaci</em> (es. idralazina, procainamide, isoniazide).</li>
              <li><strong>Anti-Ro/SSA e Anti-La/SSB:</strong> tipici della Sindrome di Sjögren e del Lupus cutaneo subacuto/neonatale (con rischio di blocco atrioventricolare congenito fetale).</li>
            </ul>
          </div>
        </div>
      </article>

      {/* SEZIONE 31.6: EZIOPATOGENESI DEL LES: DNASI, COMPLEMENTO, RAGGI UV & NETOSI */}
      <article id="sec-31-6" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold block">
            Sezione 31.6 · Fisiopatologia Molecolare del LES
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Eziopatogenesi Multifattoriale del LES: Deficit di DNasi 1, Raggi UV, Fagocitosi Frustrata & Nefrite Lupica
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Il Lupus Eritematoso Sistemico è una malattia multifattoriale che si sviluppa attraverso una sequenza definita di tappe biologiche:
          </p>

          <div className="space-y-4 my-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs space-y-2">
              <span className="font-bold text-slate-900 text-sm block text-blue-900">
                1. Danno Iniziale & Raggi UV (Il Perché delle Zone Fotoesposte)
              </span>
              <p className="text-slate-700 leading-relaxed">
                I raggi ultravioletti (UVB/UVA) colpiscono i cheratinociti cutanei inducendo fotodanno al DNA e stimolando una massiccia apoptosi.
                Questo spiega perché le lesioni cutanee tipiche del LES — l'<strong>eritema a farfalla</strong> (distribuzione malare simmetrica sulle guance e sul dorso del naso),
                il décolleté e il dorso delle mani — si manifestino elettivamente nelle zone esposte alla luce solare.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs space-y-2">
              <span className="font-bold text-slate-900 text-sm block text-purple-900">
                2. Difetti Ereditari di Degradazione (DNasi 1) & Clearance del Complemento
              </span>
              <p className="text-slate-700 leading-relaxed font-serif-body">
                Nei soggetti sani, i corpi apoptotici vengono rimossi in pochi minuti dai macrofagi grazie all'opsonizzazione delle componenti precoci del complemento
                (<strong>C1q, C1r, C1s, C4, C2</strong>) e il DNA genomico viene degradato dall'enzima <strong>DNasi 1</strong>.
                Nei pazienti lupici si riscontrano polimorfismi inattivanti della DNasi 1 o deficit genetici omozigoti di C1q/C4:
                i corpi apoptotici non vengono degradati ed entrano in <em>necrosi secondaria</em>, rilasciando nell'interstizio filamenti di dsDNA ed istoni.
                Gli acidi nucleici complessati ad anticorpi legano i recettori intracellulari TLR7 e TLR9 nelle cellule dendritiche plasmacitoidi (pDC),
                stimolando una massiva e persistente secrezione di <strong>Interferone-α (IFN-α)</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs space-y-2">
              <span className="font-bold text-slate-900 text-sm block text-rose-900">
                3. Precipitazione Vascolare, Fagocitosi Frustrata & Rilascio di NETs
              </span>
              <p className="text-slate-700 leading-relaxed">
                Gli immunocomplessi dsDNA-IgG circolanti si depositano nelle pareti dei capillari. I neutrofili accorrono richiamati da C5a e legano gli immunocomplessi
                fissati all'endotelio. Poiché gli immunocomplessi sono adesi alla parete vascolare e non possono essere internalizzati, i neutrofili vanno incontro a
                <strong>fagocitosi frustrata</strong>: degranulano enzimi proteolitici e rilasciano <strong>NETs (Neutrophil Extracellular Traps)</strong>.
                Le NETs espongono all'esterno ulteriore DNA e istoni, amplificando a feedback positivo la produzione di autoanticorpi e la trombosi microvascolare.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            La Glomerulonefrite Lupica: Istologia & Biopsia Renale
          </h3>
          <p>
            La nefrite lupica rappresenta la complicanza prognostica più grave del LES, capace di evolvere verso l'insufficienza renale cronica terminale (glomerulosclerosi).
            All'esame istologico bioptico, i depositi di immunocomplessi possono occupare differenti compartimenti glomerulari:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-slate-800">
            <li><strong>Depositi Mesangiali (Classe I e II):</strong> decorso lieve, microematuria o proteinuria asintomatica.</li>
            <li><strong>Depositi Subendoteliali (Classe III Focale e Classe IV Diffusa):</strong> a contatto diretto con il torrente ematico; causano grave proliferazione endocapillare, consumo sistemico di C3/C4, proteinuria marcata, ipertensione e sindrome nefritica acuta.</li>
            <li><strong>Depositi Subepiteliali (Classe V Membranosa):</strong> provocano ispessimento uniforme della membrana basale glomerulare con grave sindrome nefrosica (proteinuria massiva &gt; 3.5 g/die ed edemi declivi).</li>
          </ul>
        </div>
      </article>

      {/* SEZIONE 31.7: MALATTIE DI 4° TIPO: DIABETE MELLITO TIPO 1 (T1D) */}
      <article id="sec-31-7" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold block">
            Sezione 31.7 · Autoimmunità Cellulo-Mediata d'Organo
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Reazioni di Tipo IV: Diabete Mellito Tipo 1, Polimorfismo Asp57 su HLA-DQ, Coxsackie B4 & Marcatori Predittivi
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Le <strong>malattie autoimmuni di Tipo IV</strong> sono mediate dai <strong>linfociti T (CD4+ Th1/Th17 e CD8+ citotossici)</strong>.
            Rispetto alle forme sistemiche da immunocomplessi che possono colpire qualsiasi organo bersaglio, le malattie di Tipo IV sono
            tipicamente <strong>organo-specifiche</strong>.
          </p>
          <p>
            Il <strong>Diabete Mellito Insulino-Dipendente (Tipo 1 / T1D)</strong> è la patologia prototipica del gruppo:
            è caratterizzato dalla distruzione cronica e progressiva delle cellule β delle isole di Langerhans del pancreas endocrino,
            deputate alla sintesi e secrezione dell'insulina.
          </p>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            La Basi Molecolari della Suscettibilità HLA: Il Polimorfismo Asp57
          </h3>
          <p>
            La predisposizione genetica al Diabete di Tipo 1 poggia su aplotipi HLA di classe II (HLA-DQ e HLA-DR):
          </p>
          <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/70 text-xs text-slate-800 space-y-2 font-serif-body">
            <div className="font-bold text-blue-950 flex items-center gap-2">
              <Dna className="w-4 h-4 text-blue-700" />
              <span>Stereochimica della Tasca P9 di HLA-DQβ1:</span>
            </div>
            <p className="leading-relaxed">
              Studi di immunogenetica hanno dimostrato che i soggetti omozigoti per un residuo diverso dall'acido aspartico (ad esempio <strong>Valina o Alanina</strong>)
              in <strong>posizione 57 della catena HLA-DQβ1</strong>, uniti ad omozigosi per <strong>Arginina in posizione 52 della catena DQα1</strong>,
              presentano un <strong>Rischio Relativo maggiore di 72 volte (RR &gt; 72)</strong> di sviluppare T1D.
            </p>
            <p className="leading-relaxed">
              Al contrario, la presenza di <strong>Acido Aspartico in posizione 57</strong> conferisce forte protezione (<code className="font-mono font-bold">RR &lt; 0.2</code>).
              Il motivo biofisico risiede nella carica elettrica: l'aspartato possiede una catena laterale carica negativamente che crea
              repulsione elettrostatica con i peptidi insulinici (anch'essi carichi negativamente), impedendone l'alloggiamento stabile nella tasca P9.
              La valina o l'alanina, prive di carica e idrofobiche, accolgono stabilmente il peptide insulinico esponendolo ai linfociti T autoreattivi.
            </p>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Triggers Ambientali: Mimetismo con Coxsackievirus B4 & Bystander Activation
          </h3>
          <p>
            L'infezione da enterovirus invernali banali, in particolare il <strong>Coxsackievirus B4</strong>, agisce mediante:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-800">
            <li><strong>Mimetismo Molecolare:</strong> è stata dimostrata un'omologia di sequenza aminoacidica (triade glicina-asparagina-prolina) tra la proteina P2-C del Coxsackievirus B4 e l'autoantigene <strong>GAD65 (glutammato decarbossilasi)</strong> delle cellule β. Il medesimo TCR riconosce entrambi i peptidi nella tasca MHC.</li>
            <li><strong>Bystander Activation:</strong> l'infezione virale induce rilascio di citochine infiammatorie e PAMPs che attivano le cellule dendritiche pancreatiche resting, inducendo costimolo B7 e risvegliando i linfociti autoreattivi dall'anergia.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Danno Cellulo-Mediato & Valore Predittivo degli Autoanticorpi
          </h3>
          <p>
            Il danno finale che porta all'azzeramento della produzione insulinica è <strong>cellulo-mediato</strong>:
            i <strong>linfociti T CD8+ citotossici</strong> inducono l'apoptosi delle cellule β via perforine e granzimi,
            coadiuvati dai <strong>linfociti CD4+ Th1</strong> (secrezione di IFN-γ con attivazione dei macrofagi M1 e rilascio di ossido nitrico) e dai <strong>Th17</strong> (secrezione di IL-17).
          </p>
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/70 text-xs text-slate-800">
            <span className="font-bold text-emerald-950 block mb-1">Ruolo Clinico degli Autoanticorpi Sierologici:</span>
            Gli autoanticorpi — <strong>anti-insulina (IAA)</strong>, <strong>anti-GAD65</strong> e <strong>anti-IA2 (tirosina fosfatasi-like)</strong> — <em>non hanno ruolo patogenetico diretto</em>,
            ma possiedono un <strong>eccezionale potere predittivo</strong>.
            Vengono prodotti durante la fase asintomatica di <em>insulite preclinica</em>, anni prima che la massa beta-cellulare scenda sotto la soglia critica.
            Nei familiari di primo grado di pazienti diabetici, la positività concomitante a tutti e tre gli anticorpi correla con una probabilità dell'<strong>80% di sviluppare il diabete entro 10 anni</strong>.
          </div>
        </div>
      </article>

      {/* SEZIONE 31.8: SCLEROSI MULTIPLA: PATOGENESI, EBV & TERAPIE DI HOMING */}
      <article id="sec-31-8" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold block">
            Sezione 31.8 · Neuroimmunologia
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Sclerosi Multipla: Demielinizzazione del SNC, EBV & Terapie di Homing (Natalizumab, Fingolimod, Rituximab)
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            La <strong>Sclerosi Multipla (SM)</strong> è una malattia infiammatoria cronica demielinizzante progressiva del Sistema Nervoso Centrale (SNC).
            Gli autoantigeni primari sono costituenti della guaina mielinica sintetizzata dagli oligodendrociti:
            la <strong>Proteina Basica della Mielina (MBP)</strong>, la <strong>Proteina Proteolipidica (PLP)</strong> e la <strong>Glicoproteina Mielinica Oligodendrocitaria (MOG)</strong>.
          </p>

          <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">
            La Cascata di Ingresso attraverso la Barriera Emato-Encefalica (BEE)
          </h3>
          <p>
            A seguito di infezioni periferiche (fortissima associazione causale con il <strong>Virus di Epstein-Barr / EBV</strong> e mimetismo tra EBNA-1 e GlialCAM/MBP),
            i linfociti T CD4+ Th1 e Th17 autoreattivi acquisiscono la capacità di valicare la barriera emato-encefalica:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-xs text-slate-800">
            <li>I linfociti attivati esprimono ad alta densità l'integrina <strong>α4β1 (VLA-4)</strong>.</li>
            <li>L'integrina α4β1 si ancora al recettore <strong>VCAM-1</strong> espresso sulle cellule endoteliali dei vasi cerebrali infiammati.</li>
            <li>I linfociti secernono <strong>metalloproteasi di matrice (MMP-2, MMP-9)</strong> che degradano la membrana basale endoteliale, aprendo un varco nella BEE.</li>
            <li>Nel parenchima nervoso, le cellule T incontrano le cellule della <strong>microglia e macrofagi perivascolari (MHC-II+)</strong>, che le riattivano localmente scatenando la secrezione di IFN-γ, IL-17, TNF-α, specie reattive dell'ossigeno (ROS) e metalloproteasi che degradano la guaina mielinica lungo gli assoni neuronali.</li>
          </ol>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Innovazioni Terapeutiche di Immunomodulazione Biologica
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/60">
              <span className="font-bold text-blue-950 block mb-1">Natalizumab (Anti-integrina α4)</span>
              <p className="text-slate-700 leading-relaxed">
                Anticorpo monoclonale diretto contro la subunità α4 delle integrine (VLA-4). Blocca selettivamente l'adesione a VCAM-1, impedendo ai linfociti T autoreattivi di attraversare la BEE ed entrare nel parenchima cerebrale (utilizzato anche nelle IBD per bloccare α4β7 mucosale).
              </p>
            </div>
            <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/60">
              <span className="font-bold text-purple-950 block mb-1">Fingolimod (Modulatore di S1PR)</span>
              <p className="text-slate-700 leading-relaxed">
                Agonista funzionale che induce internalizzazione e degradazione del recettore della <strong>sfingosina-1-fosfato (S1PR)</strong> sui linfociti T.
                I linfociti non possono più seguire il gradiente chemotattico di S1P ed escono sequestrati all'interno dei linfonodi secondari, azzerandone l'infiltrazione nel SNC.
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-700">
            Completano il panorama: l'<strong>IFN-β</strong> (modula la sintesi di metalloproteasi e stabilizza la BEE) e gli anticorpi anti-CD20 come <strong>Rituximab</strong> e <em>Ocrelizumab</em>,
            che hanno confermato il ruolo determinante della cooperazione dei linfociti B e della sintesi intratecale di immunoglobuline (bande oligoclonali liquorali).
          </p>
        </div>
      </article>

      {/* SEZIONE 31.9: ARTRITE REUMATOIDE (MODELLO MISTO): CITRULLINAZIONE, PANNO & RANKL */}
      <article id="sec-31-9" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold block">
            Sezione 31.9 · Patologia a Meccanismo Misto
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Artrite Reumatoide: Panno Sinoviale Erosivo, Citrullinazione da PAD, ACPA & Osteoimmunologia (Asse RANKL/RANK)
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            L'<strong>Artrite Reumatoide (AR)</strong> è una malattia infiammatoria cronica sistemica a patogenesi mista:
            combina un danno cellulo-mediato da linfociti T e macrofagi con un danno umorale da immunocomplessi intra-articolari.
          </p>
          <p>
            Presenta un andamento tipicamente <strong>simmetrico ed erosivo</strong> a carico delle piccole articolazioni di mani e piedi:
            colpisce le metacarpo-falangee (MCP), metatarso-falangee (MTP) e le interfalangee prossimali (PIP), mentre
            <strong>risparmia costantemente le interfalangee distali (DIP)</strong> (criterio dirimente rispetto all'osteoartrosi).
            L'erosione ossea provoca tipiche deformità croniche: deviazione ulnare delle dita <em>'a colpo di vento'</em>, dita a collo di cigno, a boutonnière e <em>'dita a telescopio'</em> per riassorbimento osteoclastico.
          </p>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            La Citrullinazione delle Proteine Autologhe & gli Anticorpi ACPA
          </h3>
          <p>
            Gli autoantigeni dell'artrite reumatoide sono proteine connettivali e nucleari (vimentina, fibrinogeno, collagene di tipo II, enolasi, istoni)
            rese immunogeniche da una specifica modificazione post-traduzionale: la <strong>citrullinazione</strong>.
          </p>
          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/70 text-xs text-slate-800 space-y-2">
            <span className="font-bold text-amber-950 block">L'Enzima PAD (Peptidilarginina Deaminasi):</span>
            <p className="leading-relaxed font-serif-body">
              L'enzima calcio-dipendente <strong>PAD</strong> (attivato da fumo di sigaretta, parodontite da <em>Porphyromonas gingivalis</em> o flogosi cellulare)
              catalizza la deaminazione dell'aminoacido basico carico positivamente <strong>Arginina</strong>, convertendolo nel residuo neutro <strong>Citrullina</strong>.
              Questa perdita di carica elettrica consente al peptide citrullinato di alloggiare con altissima affinità nelle tasche elettropositive della variante
              HLA-DR4 / HLA-DR1 (la sequenza conservata nota come <em>Shared Epitope</em>).
              I linfociti B producono gli anticorpi <strong>ACPA (Anti-Citrullinated Protein Antibodies)</strong>, biomarcatore d'elezione con specificità superiore al 95%.
            </p>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Il Fattore Reumatoide (FR) & il Ruolo degli Immunocomplessi
          </h3>
          <p>
            Accanto agli ACPA, i pazienti possono presentare il <strong>Fattore Reumatoide (FR)</strong>:
            un autoanticorpo di isotipo <strong>IgM diretto contro la porzione costante Fc delle proprie immunoglobuline IgG</strong>.
            I complessi IgM-IgG precipitano nel liquido sinoviale comportandosi come crioglobuline, attivando il complemento, stimolando i macrofagi a secernere
            IL-1, IL-6 e TNF-α e inducendo i neutrofili a estrudere NETs ricche di istoni.
          </p>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Il Panno Sinoviale & l'Osteoimmunologia (Asse RANKL / RANK / OPG)
          </h3>
          <p>
            L'infiltrato infiammatorio ipertrofico trasforma la sottile membrana sinoviale in un tessuto invasivo pseudotumorale denominato <strong>panno sinoviale</strong>.
            La disciplina dell'<strong>osteoimmunologia</strong> ha decifrato il meccanismo della distruzione ossea articolare:
          </p>
          <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/60 text-xs text-slate-800 space-y-2">
            <div className="font-bold text-rose-950 flex items-center gap-2">
              <Scissors className="w-4 h-4 text-rose-600" />
              <span>Attivazione Osteoclastica Guidata dai Linfociti T:</span>
            </div>
            <p className="leading-relaxed">
              I linfociti Th1 (secrezione di IFN-γ) e Th17 (secrezione di IL-17) presenti nel panno sinoviale, insieme ai fibroblasti sinoviali,
              secernono livelli elevatissimi di <strong>RANKL (Receptor Activator of Nuclear Factor-κB Ligand)</strong>.
              RANKL si lega al recettore <strong>RANK</strong> espresso sui precursori monocitari degli osteoclasti, guidandone la fusione e l'attivazione l接著ica.
              Gli osteoclasti erodono l'osso corticale subcondrale, mentre i condrociti attivati producono metalloproteasi (MMP) che digeriscono la cartilagine.
              La proteina esca fisiologica <strong>Osteoprotegerina (OPG)</strong> viene soppressa.
              In terapia si impiegano anticorpi monoclonali che bloccano RANKL (<strong>Denosumab</strong>) e farmaci biologici anti-citochinici (anti-TNF-α, anti-IL-6R Tocilizumab, inibitori JAK).
            </p>
          </div>
        </div>
      </article>

      {/* SEZIONE 31.10: VITILIGINE: CITOTOSSICITA' CD8+, TIROSINASI & INIBITORI JAK */}
      <article id="sec-31-10" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold block">
            Sezione 31.10 · Immunodermatologia Cellulare
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Vitiligine: Distruzione dei Melanociti da CTL CD8+ anti-Tirosinasi, Nicchie Pilifere & Nuove Terapie con Inibitori JAK
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            La <strong>Vitiligine</strong> è una patologia autoimmune organo-specifica cellulo-mediata (Tipo IV) caratterizzata dalla comparsa
            di chiazze acromiche cutanee per distruzione selettiva dei <strong>melanociti</strong> dell'epidermide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 text-xs">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="font-bold text-slate-900 block text-blue-900">Autoantigene & Chemiotassi:</span>
              <p className="text-slate-700 leading-relaxed">
                L'autoantigene principale è la <strong>Tirosinasi</strong>, l'enzima chiave intra-melanosomiale che catalizza la conversione della tirosina in melanina.
                I <strong>linfociti T CD8+ citotossici</strong> specifici riconoscono frammenti peptidici della tirosinasi esposti su MHC-I e inducono la morte apoptotica dei melanociti.
                I linfociti T secernono IFN-γ, che stimola i cheratinociti circostanti a produrre la chemochina <strong>CXCL9</strong>; CXCL9 recluta a feedback ulteriori cellule T esprimenti il recettore <strong>CXCR3</strong>.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="font-bold text-slate-900 block text-emerald-900">Ripigmentazione & Nicchia Pilifera:</span>
              <p className="text-slate-700 leading-relaxed font-serif-body">
                La rigenerazione dei melanociti — spesso stimolata da fototerapia mirata con raggi UVB a banda stretta — non origina dall'epidermide depigmentata,
                ma dalle <strong>cellule staminali melanocitarie residenti nel colletto dei follicoli piliferi</strong>.
                Per questo motivo la ripigmentazione ha un caratteristico <strong>aspetto puntiforme perifollicolare</strong>. Nelle aree cutanee glabre (prive di follicoli piliferi, come le estremità acrali o le mucose genitali), la ripigmentazione spontanea non può realizzarsi.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/70 text-xs text-slate-800">
            <span className="font-bold text-indigo-950 block mb-1">La Rivoluzione delle Target Therapies: Inibitori di JAK</span>
            <p className="leading-relaxed font-serif-body">
              Poiché la cascata patogenetica dell'asse IFN-γ / CXCL9 / CXCR3 è trasdotta intracellulariamente dalle chinasi <strong>JAK1 e JAK2</strong>,
              l'introduzione recente di farmaci <strong>inibitori di JAK (es. Ruxolitinib in formulazione topica)</strong> ha rivoluzionato il trattamento della vitiligine,
              spegnendo l'attacco citotossico locale e consentendo alle cellule staminali follicolari di ripopolare l'epidermide.
            </p>
          </div>
        </div>
      </article>

      {/* SIMULATORE 2: LABORATORIO IMMUNOPATOLOGIA TIPO III & IV */}
      <div id="sim-type3-4-t1d-ra-lab" className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Crosshair className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold block">
                Simulatore Didattico Interattivo 31.2
              </span>
              <h3 className="text-xl font-bold text-white">
                Laboratorio di Immunopatologia di Tipo III & IV: Connettiviti/LES, Diabete Tipo 1 & Osteoimmunologia dell'AR
              </h3>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono">
            Modellazione Genetica & Tessutale
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-800 pb-3">
          <button
            onClick={() => setSimActiveModule('sle_type3')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              simActiveModule === 'sle_type3'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Modulo LES (Tipo III)
          </button>
          <button
            onClick={() => setSimActiveModule('t1d_type4')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              simActiveModule === 't1d_type4'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Modulo Diabete Tipo 1 (Tipo IV)
          </button>
          <button
            onClick={() => setSimActiveModule('ra_mixed')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              simActiveModule === 'ra_mixed'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Modulo Artrite Reumatoide (Misto)
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls Column */}
          <div className="space-y-4 bg-slate-800/60 p-5 rounded-xl border border-slate-700/60 text-xs">
            {simActiveModule === 'sle_type3' && (
              <>
                <div>
                  <label className="text-slate-300 font-bold block mb-1">Esposizione a Raggi Ultravioletti (UV):</label>
                  <button
                    onClick={() => setSleUvExposure(!sleUvExposure)}
                    className={`w-full p-2.5 rounded-lg border text-left flex items-center justify-between ${
                      sleUvExposure
                        ? 'bg-amber-600/30 border-amber-400 text-amber-200 font-bold'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    <span>{sleUvExposure ? 'Fotodanno UV Attivo (Apoptosi ↑)' : 'Schermatura Solare (Nessun UV)'}</span>
                    <Sun className="w-4 h-4 text-amber-400" />
                  </button>
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">Attività Enzimatica DNasi 1:</label>
                  <button
                    onClick={() => setSleDnaseDefect(!sleDnaseDefect)}
                    className={`w-full p-2.5 rounded-lg border text-left ${
                      sleDnaseDefect
                        ? 'bg-rose-600/30 border-rose-400 text-rose-200 font-bold'
                        : 'bg-emerald-600/30 border-emerald-400 text-emerald-200'
                    }`}
                  >
                    {sleDnaseDefect ? 'DNasi 1 Mutata (Mancata degradazione DNA)' : 'DNasi 1 Funzionante (Clearance DNA ok)'}
                  </button>
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">Stato delle Frazioni del Complemento:</label>
                  <select
                    value={sleComplementDefect}
                    onChange={(e) => setSleComplementDefect(e.target.value as any)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs text-slate-200"
                  >
                    <option value="normal">Complemento Normale</option>
                    <option value="c1q_homozygous">Deficit Omozigote C1q (Rischio LES &gt;90%)</option>
                    <option value="c4_c2_defect">Deficit Parziale C4 / C2</option>
                  </select>
                </div>
              </>
            )}

            {simActiveModule === 't1d_type4' && (
              <>
                <div>
                  <label className="text-slate-300 font-bold block mb-1">Genotipo Tasca P9 HLA-DQβ1:</label>
                  <select
                    value={t1dHlaGenotype}
                    onChange={(e) => setT1dHlaGenotype(e.target.value as any)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs text-slate-200"
                  >
                    <option value="high_risk_val57">Non-Asp57 (Val57) + Arg52 (RR &gt; 72)</option>
                    <option value="protective_asp57">Asp57 Omozigote (Protettivo, RR &lt; 0.2)</option>
                    <option value="neutral">Genotipo Neutro di Popolazione</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">
                    Autoanticorpi Rilevati nel Siero: <span className="text-blue-300 font-bold">{t1dAntibodiesCount} / 3</span>
                  </label>
                  <div className="grid grid-cols-4 gap-1">
                    {[0, 1, 2, 3].map((val) => (
                      <button
                        key={val}
                        onClick={() => setT1dAntibodiesCount(val)}
                        className={`p-2 rounded border text-center font-bold ${
                          t1dAntibodiesCount === val
                            ? 'bg-blue-600 border-blue-400 text-white'
                            : 'bg-slate-800 border-slate-700 text-slate-400'
                        }`}
                      >
                        {val === 0 ? 'Zero' : `${val} Ab`}
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Marcatori: Anti-Insulina (IAA), Anti-GAD65, Anti-IA2
                  </p>
                </div>
              </>
            )}

            {simActiveModule === 'ra_mixed' && (
              <>
                <div>
                  <label className="text-slate-300 font-bold block mb-1">Attività Enzima PAD (Citrullinazione):</label>
                  <button
                    onClick={() => setRaPadActivity(!raPadActivity)}
                    className={`w-full p-2.5 rounded-lg border text-left ${
                      raPadActivity
                        ? 'bg-amber-600/30 border-amber-400 text-amber-200 font-bold'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    {raPadActivity ? 'PAD Attivo (Citrullinazione Arginina ↑)' : 'PAD Inattivo (Nessun ACPA)'}
                  </button>
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">Allele HLA-DR4 (Shared Epitope):</label>
                  <button
                    onClick={() => setRaSharedEpitope(!raSharedEpitope)}
                    className={`w-full p-2.5 rounded-lg border text-left ${
                      raSharedEpitope
                        ? 'bg-rose-600/30 border-rose-400 text-rose-200 font-bold'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    {raSharedEpitope ? 'Presente (Alta affinità peptidi citrullinati)' : 'Assente'}
                  </button>
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">Trattamento con Farmaco Biologico:</label>
                  <select
                    value={raTherapy}
                    onChange={(e) => setRaTherapy(e.target.value as any)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs text-slate-200"
                  >
                    <option value="none">Nessun Biologico</option>
                    <option value="anti_tnf">Anti-TNF-α (Infliximab / Adalimumab)</option>
                    <option value="anti_il6">Anti-IL-6R (Tocilizumab)</option>
                    <option value="denosumab_rankl">Denosumab (Anti-RANKL Blocco Osteoclasti)</option>
                    <option value="jak_inhibitor">Inibitore JAK (Tofacitinib)</option>
                  </select>
                </div>
              </>
            )}
          </div>

          {/* Visualization & Analysis Output (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-5 rounded-xl border border-slate-700 bg-slate-800/80">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Valutazione Rischio Relativo & Stadio Fisiopatologico
                </span>
                <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${
                  simActiveModule === 'sle_type3' && sleUvExposure && (sleDnaseDefect || sleComplementDefect === 'c1q_homozygous')
                    ? 'bg-rose-950 text-rose-300 border border-rose-700'
                    : simActiveModule === 't1d_type4' && t1dAntibodiesCount === 3
                    ? 'bg-red-950 text-red-300 border border-red-700'
                    : simActiveModule === 'ra_mixed' && raPadActivity && raSharedEpitope
                    ? 'bg-amber-950 text-amber-300 border border-amber-700'
                    : 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                }`}>
                  {simActiveModule === 'sle_type3'
                    ? (sleUvExposure && (sleDnaseDefect || sleComplementDefect === 'c1q_homozygous') ? 'NEFRITE LUPICA ATTIVA & NETOSI' : 'LES COMPENSATO')
                    : simActiveModule === 't1d_type4'
                    ? (t1dAntibodiesCount === 3 ? 'PROBABILITÀ T1D 80% A 10 ANNI' : t1dAntibodiesCount > 0 ? 'INSULITE PRECLINICA' : 'BASSO RISCHIO')
                    : (raPadActivity && raSharedEpitope ? 'PANNO SINOVIALE EROSIVO (RANKL ↑)' : 'ARTRITE LIEVE O CONTROLLATA')}
                </span>
              </div>

              {/* Status Indicator Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">Marcatore / Biomarcatore</div>
                  <div className="text-sm font-bold text-white mt-0.5 truncate">
                    {simActiveModule === 'sle_type3'
                      ? 'Anti-dsDNA & Anti-Sm'
                      : simActiveModule === 't1d_type4'
                      ? `${t1dAntibodiesCount} su 3 (IAA, GAD65, IA2)`
                      : 'ACPA (Anti-CCP) & FR IgM'}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">Rischio Relativo (RR)</div>
                  <div className="text-sm font-bold text-white mt-0.5 truncate">
                    {simActiveModule === 'sle_type3'
                      ? sleComplementDefect === 'c1q_homozygous' ? 'RR > 90 (Estremo)' : 'RR Moderato'
                      : simActiveModule === 't1d_type4'
                      ? t1dHlaGenotype === 'high_risk_val57' ? 'RR > 72 (Elevatissimo)' : t1dHlaGenotype === 'protective_asp57' ? 'RR < 0.2 (Protetto)' : 'RR = 1.0'
                      : raSharedEpitope ? 'RR ≈ 4-10 (Significativo)' : 'RR Basale'}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">Effetto Terapeutico</div>
                  <div className="text-sm font-bold text-white mt-0.5 truncate">
                    {simActiveModule === 'sle_type3'
                      ? 'Idrossiclorochina + Belimumab'
                      : simActiveModule === 't1d_type4'
                      ? 'Insulinoterapia sostitutiva'
                      : raTherapy !== 'none' ? raTherapy.toUpperCase() : 'Attiva un biologico'}
                  </div>
                </div>
              </div>

              {/* Detailed Simulation Result */}
              <div className="mt-4 p-4 rounded-lg bg-slate-900/90 border border-slate-700 text-xs leading-relaxed">
                <div className="font-bold text-indigo-400 mb-1 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Analisi Clinica di Laboratorio:</span>
                </div>
                {simActiveModule === 'sle_type3' ? (
                  <p className="text-rose-200">
                    <strong>Fisiopatologia del LES:</strong> {sleUvExposure ? 'I raggi UV inducono apoptosi massiva nei cheratinociti. ' : 'In assenza di UV, l\'apoptosi cutanea è basale. '}
                    {sleDnaseDefect || sleComplementDefect === 'c1q_homozygous'
                      ? 'Il difetto di degradazione (DNasi 1 o C1q) porta i corpi apoptotici a necrosi secondaria, con rilascio di frammenti di dsDNA che formano immunocomplessi precipitanti nei capillari glomerulari e sinoviali. I neutrofili attivano la fagocitosi frustrata con rilascio di NETs infiammatorie.'
                      : 'Con DNasi 1 e complemento funzionanti, i corpi apoptotici vengono rimossi tempestivamente senza innesco di nefrite lupica attiva.'}
                  </p>
                ) : simActiveModule === 't1d_type4' ? (
                  <p className="text-blue-200">
                    <strong>Diabete di Tipo 1:</strong> {t1dHlaGenotype === 'high_risk_val57' ? 'L\'assenza di Asp57 apre la tasca P9 dell\'HLA-DQ, permettendo la presentazione efficiente dei peptidi insulinici. ' : t1dHlaGenotype === 'protective_asp57' ? 'L\'Aspartato 57 carico negativamente respinge l\'insulina bloccando la presentazione patologica. ' : ''}
                    {t1dAntibodiesCount === 3
                      ? 'La positività concomitante a tutti e tre gli autoanticorpi (IAA, GAD65, IA-2) indica un\'insulite attiva avanzata con probabilità stimata dell\'80% di distruzione completa delle cellule beta e comparsa di diabete clinico entro 10 anni.'
                      : t1dAntibodiesCount > 0
                      ? `La positività a ${t1dAntibodiesCount} anticorpo/i indica uno stadio iniziale di reattività autoimmune che richiede monitoraggio glicometabolico periodico.`
                      : 'In assenza di autoanticorpi sierici, il rischio a breve termine di sviluppo di diabete è minimo.'}
                  </p>
                ) : (
                  <p className="text-amber-200">
                    <strong>Artrite Reumatoide & Osteoimmunologia:</strong> {raPadActivity && raSharedEpitope ? 'L\'enzima PAD converte l\'arginina in citrullina e i peptidi legano lo Shared Epitope dell\'HLA-DR4, scatenando la produzione di ACPA ad alta affinità. Nel panno sinoviale, i linfociti Th1/Th17 producono alti livelli di RANKL, che attiva il recettore RANK inducendo riassorbimento ed erosione ossea marginale da parte degli osteoclasti.' : 'In assenza di citrullinazione o dell\'allele HLA-DR4 predisponente, l\'erosione articolare è marcatamente ridotta.'}
                    {raTherapy === 'denosumab_rankl' && ' Denosumab si lega a RANKL bloccando l\'attivazione degli osteoclasti e preservando la densità minerale ossea articolare.'}
                    {raTherapy === 'anti_tnf' && ' L\'anti-TNF-α spegne la flogosi sinoviale e riduce l\'espressione endoteliale di chemochine e molecole di adesione.'}
                    {raTherapy === 'jak_inhibitor' && ' L\'inibitore di JAK blocca la via intracellulare a valle delle citochine infiammatorie multiple (IL-6, IFN).'}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TABELLE SINOTTICHE (31.1 & 31.2) */}
      <article id="tabelle-sinottiche" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold block">
            Tavole Sinottiche Didattiche
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Compendio Tassonomico delle Malattie Autoimmuni & Matrice Farmacologica delle Target Therapies
          </h2>
        </div>

        {/* Tabella 31.1 */}
        <div id="tabella-31-1" className="mb-8">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-mono text-xs">Tabella 31.1</span>
            Classificazione Completa delle Malattie Autoimmuni per Meccanismo d'Ipersensibilità (Tipo II, III, IV)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Patologia</th>
                  <th className="p-3">Tipo Ipersensibilità</th>
                  <th className="p-3">Autoantigene Principale</th>
                  <th className="p-3">Meccanismo di Danno Prevalente</th>
                  <th className="p-3">Quadro Clinico Patognomonico</th>
                  <th className="p-3">Biomarcatore Diagnostico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-blue-900">Porpora Trombocitopenica (ITP)</td>
                  <td className="p-3">Tipo II (Citotossico)</td>
                  <td className="p-3 font-mono">GPIIb/IIIa & GPIb/IX</td>
                  <td className="p-3">Opsonizzazione da IgG e fagocitosi nei macrofagi splenici via FcγRI; epitope spreading</td>
                  <td className="p-3">Petecchie arti inferiori, emorragie congiuntivali e viscerali spontanee</td>
                  <td className="p-3">Trombocitopenia periferica severa (&lt; 20.000/μL)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-rose-900">Sindrome di Goodpasture</td>
                  <td className="p-3">Tipo II (Membrana Basale)</td>
                  <td className="p-3 font-mono">Collagene IV (catena α3 NC1)</td>
                  <td className="p-3">Attivazione complemento e neutrofili con denudamento endoteliale glomerulare ed alveolare</td>
                  <td className="p-3">Glomerulonefrite rapidamente progressiva (RPGN) ed emottisi polmonare</td>
                  <td className="p-3">Immunofluorescenza renale lineare 'ad ansa di sigaretta'</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-amber-900">Pemfigo Volgare / Foliaceo</td>
                  <td className="p-3">Tipo II (Giunzionale)</td>
                  <td className="p-3 font-mono">Desmogleina 3 (Volgare) / Desmogleina 1 (Foliaceo)</td>
                  <td className="p-3">Interferenza sterica con l'adesione intercellulare desmosomiale; acantolisi intraepidermica</td>
                  <td className="p-3">Bolle flaccide, ulcere dolorose mucose orali e cutanee (Volgare); croste superficiali (Foliaceo)</td>
                  <td className="p-3">Immunofluorescenza 'a maglie di rete / nido d'ape'; anti-Dsg3/Dsg1</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-purple-900">Miastenia Gravis</td>
                  <td className="p-3">Tipo II (Antagonismo Recettore)</td>
                  <td className="p-3 font-mono">Recettore AChR nicotinico</td>
                  <td className="p-3">Lisi focale da MAC, internalizzazione per cross-linking e blocco sterico dell'acetilcolina</td>
                  <td className="p-3">Ptosi palpebrale asimmetrica, diplopia, disfagia e paralisi flaccida ingravescente</td>
                  <td className="p-3">Autoanticorpi anti-AChR (e anti-MuSK) sierici</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-teal-900">Morbo di Basedow-Graves</td>
                  <td className="p-3">Tipo II (Agonismo Recettore)</td>
                  <td className="p-3 font-mono">Recettore TSH (TSHR) & IGF-1R</td>
                  <td className="p-3">Agonismo costitutivo su TSHR (ipertiroidismo); stimolazione IGF-1R sui fibroblasti orbitali</td>
                  <td className="p-3">Tireotossicosi, gozzo diffuso, esoftalmo retro-orbitario, dita a bacchetta di tamburo</td>
                  <td className="p-3">Anticorpi anti-recettore TSH (TRAb/TSI) + TSH indosabile</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-900">Lupus Eritematoso Sistemico (LES)</td>
                  <td className="p-3">Tipo III (Immunocomplessi)</td>
                  <td className="p-3 font-mono">dsDNA, Sm, Istoni, lncRNA Xist-RNP</td>
                  <td className="p-3">Deficit di clearance corpi apoptotici (DNasi 1, C1q), NETosi, precipitazione IC con vasculite</td>
                  <td className="p-3">Eritema a farfalla nelle aree fotoesposte, nefrite lupica, artriti, pleuro-pericarditi</td>
                  <td className="p-3">Anti-dsDNA (patognomonici), anti-Sm; depositi granulari a zolle (Scott)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-blue-900">Diabete Mellito Tipo 1 (T1D)</td>
                  <td className="p-3">Tipo IV (Cellulo-Mediato)</td>
                  <td className="p-3 font-mono">Insulina, GAD65, IA-2</td>
                  <td className="p-3">Distruzione cellule β da CTL CD8+ e citochine Th1/Th17; mimetismo Coxsackievirus B4</td>
                  <td className="p-3">Poliuria, polidipsia, calo ponderale, chetoacidosi diabetica giovanile</td>
                  <td className="p-3">Triade predittiva: anti-insulina, anti-GAD65, anti-IA2 (80% rischio a 10 anni)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Sclerosi Multipla (SM)</td>
                  <td className="p-3">Tipo IV (Cellulo-Mediato)</td>
                  <td className="p-3 font-mono">MBP, PLP, MOG (guaina mielinica)</td>
                  <td className="p-3">Infiltrazione SNC via integrina α4β1/VCAM-1; demielinizzazione da Th1/Th17 e microglia; trigger EBV</td>
                  <td className="p-3">Neurite ottica, deficit motori e sensitivi a poussée, atassia, lesioni demielinizzanti RMN</td>
                  <td className="p-3">Bande oligoclonali IgG nel liquor; lesioni demielinizzanti alla RMN encefalo</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-amber-900">Artrite Reumatoide (AR)</td>
                  <td className="p-3">Misto (Tipo IV + Tipo III)</td>
                  <td className="p-3 font-mono">Proteine citrullinate (PAD) & Fc di IgG</td>
                  <td className="p-3">Panno sinoviale erosivo, osteoimmunologia asse RANKL/RANK/OPG; immunocomplessi con FR IgM</td>
                  <td className="p-3">Artrite simmetrica piccole articolazioni (MCP, PIP; no DIP), deviazione ulnare a colpo di vento</td>
                  <td className="p-3">ACPA (anti-CCP, specificità &gt; 95%) e Fattore Reumatoide IgM</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-emerald-900">Vitiligine</td>
                  <td className="p-3">Tipo IV (Cellulo-Mediato)</td>
                  <td className="p-3 font-mono">Tirosinasi (melanosomi)</td>
                  <td className="p-3">Lisi dei melanociti da CTL CD8+; chemiotassi guidata da IFN-γ/CXCL9/CXCR3 e via JAK</td>
                  <td className="p-3">Chiazze acromiche cutanee; ripigmentazione puntiforme perifollicolare</td>
                  <td className="p-3">Clinico dermatologico; biopsia con assenza focale di melanociti epidermici</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabella 31.2 */}
        <div id="tabella-31-2">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-mono text-xs">Tabella 31.2</span>
            Matrice Farmacologica delle Target Therapies Biologiche nell'Autoimmunità
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Farmaco Biologico</th>
                  <th className="p-3">Tipologia / Classe</th>
                  <th className="p-3">Bersaglio Molecolare</th>
                  <th className="p-3">Meccanismo d'Azione Primario</th>
                  <th className="p-3">Indicazioni Elettive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-blue-900">Rituximab</td>
                  <td className="p-3">Anticorpo monoclonale chimerico</td>
                  <td className="p-3 font-mono">CD20 (Linfociti B)</td>
                  <td className="p-3">Deplezione dei linfociti B per ADCC, CDC e apoptosi; arresto della produzione autoanticorpale</td>
                  <td className="p-3">ITP refrattaria, Pemfigo Volgare, Artrite Reumatoide, Sclerosi Multipla, LES</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-emerald-900">Fostamatinib</td>
                  <td className="p-3">Piccola molecola (Target Therapy)</td>
                  <td className="p-3 font-mono">Tirosin-chinasi Syk</td>
                  <td className="p-3">Inibizione del segnale a valle dei recettori FcγR macrofagici; blocco della fagocitosi delle piastrine</td>
                  <td className="p-3">Porpora Trombocitopenica Idiopatica (ITP cronica)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-purple-900">Natalizumab</td>
                  <td className="p-3">Anticorpo monoclonale umanizzato</td>
                  <td className="p-3 font-mono">Integrina α4 (VLA-4 / α4β7)</td>
                  <td className="p-3">Blocco dell'adesione a VCAM-1 endoteliale; impedisce l'extravasazione nel SNC e nei tessuti mucosali</td>
                  <td className="p-3">Sclerosi Multipla recidivante-remittente, Morbo di Crohn refrattario</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-900">Fingolimod (FTY720)</td>
                  <td className="p-3">Modulatore recettoriale sintetico</td>
                  <td className="p-3 font-mono">Recettore S1PR (sfingosina-1-fosfato)</td>
                  <td className="p-3">Internalizzazione e degradazione di S1PR; intrappolamento dei linfociti T nei linfonodi</td>
                  <td className="p-3">Sclerosi Multipla recidivante-remittente ad elevata attività</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-rose-900">Denosumab</td>
                  <td className="p-3">Anticorpo monoclonale umano</td>
                  <td className="p-3 font-mono">RANKL (RANK Ligando)</td>
                  <td className="p-3">Impedisce il legame a RANK sui precursori degli osteoclasti; arresta l'erosione ossea marginale</td>
                  <td className="p-3">Osteoporosi severa, Artrite Reumatoide erosiva, metastasi ossee osteolitiche</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-amber-900">Inibitori di JAK (Ruxolitinib / Tofacitinib)</td>
                  <td className="p-3">Piccole molecole inibitrici</td>
                  <td className="p-3 font-mono">JAK1, JAK2, JAK3</td>
                  <td className="p-3">Spegnimento della cascata JAK/STAT a valle di IFN-γ, IL-6 e citochine infiammatorie</td>
                  <td className="p-3">Vitiligine (ripopolamento melanocitario), Artrite Reumatoide, Alopecia Areata</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </article>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={quizQuestions} lessonNumber={31} title="Verifica dell'Apprendimento · Lezione 31" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={flashcardsData} lessonNumber={31} title="Flashcard di Ripasso Attivo · Lezione 31" />
    </div>
  );
};
