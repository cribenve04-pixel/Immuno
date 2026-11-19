import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import { ConceptMapFlow } from './ConceptMapFlow';
import { MAP_LEZIONE_22_IMMUNE_RESPONSES_BY_PATHOGEN, MAP_LEZIONE_22_SUPERANTIGENS_VS_CONVENTIONAL } from '../data/conceptMapsData';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Shield,
  Zap,
  Activity,
  AlertTriangle,
  Award,
  BookOpen,
  CheckCircle,
  HelpCircle,
  RotateCw,
  Sparkles,
  Info,
  ChevronRight,
  Dna,
  Layers,
  HeartPulse,
  Sliders,
  FileText,
  UserCheck,
  Flame,
  ArrowRight,
  Bug,
  Thermometer,
  Crosshair
} from 'lucide-react';

interface Lezione22ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export function Lezione22View({ isSerif, fontSize }: Lezione22ViewProps) {
  // Simulator 1: Th1 vs Th2 Dichotomies & Cross-Inhibition
  const [selectedDiseaseModel, setSelectedDiseaseModel] = useState<'lepra' | 'helminthes' | 'cytokine_storm'>('lepra');
  const [lepraType, setLepraType] = useState<'tuberculoide' | 'lepromatosa'>('tuberculoide');
  const [helminthResponse, setHelminthResponse] = useState<'th2_protective' | 'th1_aberrant'>('th2_protective');
  const [stormSeverity, setStormSeverity] = useState<'controlled' | 'ards_storm'>('controlled');

  // Simulator 2: Microbial Evasion & Superantigen Lab
  const [evasionTab, setEvasionTab] = useState<'yersinia' | 'superantigen' | 'myco_tb' | 'eosinophil_adcc'>('yersinia');
  const [yersiniaTemp, setYersiniaTemp] = useState<25 | 37>(25);

  // Flashcards state
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  // Quiz state
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showQuizExplanations, setShowQuizExplanations] = useState<Record<number, boolean>>({});


  const toggleCard = (id: number) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAnswer = (questionId: number, optionLetter: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionLetter }));
    setShowQuizExplanations((prev) => ({ ...prev, [questionId]: true }));
  };

  const proseClass = `${isSerif ? 'font-serif-body' : 'font-sans'} ${
    fontSize === 'large' ? 'text-base sm:text-lg leading-relaxed' : 'text-sm sm:text-base leading-relaxed'
  } text-slate-800 space-y-4`;

  
  const FLASHCARDS = [
  {
    "id": 1,
    "front": "In che modo il superantigene TSST-1 si lega al TCR e ad MHC-II, e quanti linfociti T attiva?",
    "back": "Si lega simultaneamente alla catena Vβ del TCR e ad MHC-II al di fuori del peptide cleft senza processazione, attivando fino al 20% dei linfociti T e scatenando shock tossico.",
    "category": "SUPERANTIGENI"
  },
  {
    "id": 2,
    "front": "Come modifica Yersinia pestis il proprio LPS tra 21-27 °C nella pulce e 37 °C nell'uomo?",
    "back": "A 21-27 °C produce LPS esa-acilato stimolatorio per TLR4; a 37 °C nell'uomo produce LPS tetra-acilato che non attiva TLR4, impedendo la risposta innata NF-κB.",
    "category": "TERMOREGOLAZIONE YERSINIA"
  },
  {
    "id": 3,
    "front": "Cosa distingue la lebbra tubercoloide da quella lepromatosa in termini di risposta T e quadro clinico?",
    "back": "Tubercoloide: risposta Th1 (IFN-γ), granulomi circoscritti, bacilli rari. Lepromatosa: risposta Th2 aberrante (IL-4/10), crescita florida nei macrofagi schiumosi e sfiguramento nodulare.",
    "category": "DICOTOMIA LEBBRA"
  },
  {
    "id": 4,
    "front": "Quale tossina rilasciano gli eosinofili durante l'ADCC mediata da IgE contro gli elminti?",
    "back": "Rilasciano la Proteina Basica Maggiore (MBP - Major Basic Protein), che danneggia e disgrega direttamente il tegumento del parassita elmintico.",
    "category": "ADCC DEGLI EOSINOFILI"
  },
  {
    "id": 5,
    "front": "Come evade M. tuberculosis la distruzione intracellulare nel fagosoma macrofagico?",
    "back": "Blocca la fusione con il lisosoma, inibisce l'incorporazione della pompa V-ATPase (mantenendo il pH neutro ~6.4) ed attiva DC-SIGN inducendo IL-10.",
    "category": "M. TUBERCULOSIS"
  },
  {
    "id": 6,
    "front": "Quali chinasi e fattori di trascrizione attivano i sensori intracellulari di acidi nucleici virali?",
    "back": "Attivano le chinasi TBK-1 ed IKKε, che fosforilano IRF3 e IRF7 inducendo la produzione di Interferoni di tipo I (IFN-α/β).",
    "category": "SENSING VIRALE"
  }
];
  const QUIZ_QUESTIONS = [
  {
    "id": 1,
    "question": "Quale caratteristica biomeccanica distingue il legame di un superantigene (come TSST-1) da un antigene proteico convenzionale?",
    "options": [
      "Richiede una processazione lisosomiale prolungata tramite proteasoma",
      "Lega contemporaneamente la catena Vβ del TCR e la molecola MHC-II al di fuori del solco peptidico canonico senza alcuna processazione",
      "Lega esclusivamente le molecole MHC di classe I espressi da eritrociti",
      "Attiva selettivamente un singolo clone T specifico",
      "Viene inibito da anticorpi IgE secreti dalle cellule epiteliali"
    ],
    "correctIndex": 1,
    "explanation": "Risposta Esatta: B. I superantigeni non necessitano di digestione endocellulare e legano stericamente all'esterno del complesso Vβ-TCR / MHC-II, scatenando un'attivazione policlonale massiva fino al 20% dei linfociti T dell'organismo."
  },
  {
    "id": 2,
    "question": "Come si adatta Yersinia pestis quando passa dalla pulce vettore (21-27 °C) all'essere umano (37 °C) per evadere l'immunità innata?",
    "options": [
      "Sintetizza una capsula di acido ialuronico",
      "Distrugge i macrofagi rilasciando perforina virale",
      "Induce la produzione di anticorpi IgE contro le piastrine"
    ],
    "correctIndex": 1,
    "explanation": "Risposta Esatta: B. La transizione a 37 °C nell'uomo porta alla sintesi di un LPS tetra-acilato non stimolatorio per TLR4, che silenzia la reazione infiammatoria iniziale facilitando la proliferazione invasiva del batterio."
  },
  {
    "id": 3,
    "question": "Nella lebbra lepromatosa, a cosa è dovuto il fallimento dell'eradicazione di Mycobacterium leprae?",
    "options": [
      "A una risposta Th1 troppo violenta che causa necrosi massiva"
    ],
    "correctIndex": 1,
    "explanation": "Risposta Esatta: B. Nella lebbra lepromatosa si instaura una risposta Th2 disfunzionale: l'IL-10 disattiva i macrofagi, i micobatteri proliferano indisturbati e gli anticorpi prodotti in eccesso (ipergammaglobulinemia) sono inefficaci contro un patogeno intracellulare."
  },
  {
    "id": 4,
    "question": "[Domanda Chiave Docente] Oltre alle cellule NK, quale altra popolazione cellulare compie una vera e propria ADCC (citotossicità anticorpo-dipendente)?",
    "options": [
      "I Linfociti T citotossici CD8+",
      "Gli Eosinofili, mediante recettori Fc per le IgE rilasciando la Proteina Basica Maggiore (MBP)",
      "Gli eritrociti tramite CR1",
      "Le cellule dendritiche follicolari (FDC)",
      "I linfociti B naive"
    ],
    "correctIndex": 1,
    "explanation": "Risposta Esatta: B. Come rimarcato formalmente dalla docente, l'ADCC non è prerogativa esclusiva delle NK: gli eosinofili riconoscono le IgE legate al tegumento degli elminti e scaricano per ADCC la MBP (Major Basic Protein) distruggendo il parassita."
  },
  {
    "id": 5,
    "question": "Come viene percepita la presenza degli elminti intestinali dall'epitelio dell'ospite in assenza di PAMP convenzionali?",
    "options": [
      "Riconoscimento di LPS da parte di TLR4",
      "Attivazione proteolitica dei recettori PAR mediata dalle proteasi del parassita con rilascio di allarmine (IL-33, TSLP)",
      "Attivazione spontanea del complesso MAC del complemento",
      "Ingresso diretto del verme nei linfociti CD4+",
      "Sensing di flagellina tramite TLR5"
    ],
    "correctIndex": 1,
    "explanation": "Risposta Esatta: B. Gli elminti producono un microambiente ricco di proteasi che tagliano e attivano i recettori PAR (Protease-Activated Receptors) sulle cellule epiteliali, inducendo il rilascio delle allarmine IL-33 e TSLP che indirizzano verso una risposta Th2/ILC2."
  },
  {
    "id": 6,
    "question": "Nella regolazione negativa reciproca tra cellule T effettrici, quale citochina prodotta dai Th1 inibisce la proliferazione dei Th2?",
    "options": [
      "IL-4",
      "Interferone-gamma (IFN-γ)",
      "IL-17",
      "IL-5",
      "TGF-β"
    ],
    "correctIndex": 1,
    "explanation": "Risposta Esatta: B. L'IFN-γ secreto dai linfociti Th1 attivati blocca attivamente la proliferazione dei Th2 e lo sviluppo dei Th17 per concentrare l'energia dell'organismo contro il patogeno intracellulare."
  },
  {
    "id": 7,
    "question": "Quale citochina prodotta dai linfociti Th17 stimola le cellule epiteliali mucosali e di Paneth a rinsaldare le giunzioni serrate e produrre peptidi antimicrobici?",
    "options": [
      "IL-22 (in cooperazione con IL-17)",
      "IL-4",
      "IL-10",
      "IL-2",
      "TNF-α isolato"
    ],
    "correctIndex": 0,
    "explanation": "Risposta Esatta: A. L'IL-22 e l'IL-17 agiscono sui recettori delle cellule epiteliali rinforzando la barriera mucosale e inducendo il rilascio di defensine da parte delle cellule di Paneth durante le infezioni fungine da Candida o batteriche extracellulari."
  },
  {
    "id": 8,
    "question": "Quale recettore per le immunoglobuline consente ai mastociti di \"armarsi\" con anticorpi IgE prima ancora di incontrare l'antigene?",
    "options": [
      "CD16 (FcγRIIIA)",
      "FcεRI (ad altissima affinità per le IgE)",
      "FcRn (recettore neonatale)",
      "pIgR (recettore polimerico per IgA)",
      "CD32 (FcγRIIB inibitorio)"
    ],
    "correctIndex": 1,
    "explanation": "Risposta Esatta: B. Il recettore FcεRI possiede un'affinità talmente elevata (Kd ~ 10⁻¹⁰ M) da legare le IgE libere circolanti, rivestendo stabilmente la superficie del mastocita a riposo."
  },
  {
    "id": 9,
    "question": "Perché la presenza di oltre 90 sierotipi capsulari in Streptococcus pneumoniae rappresenta un formidabile meccanismo di immunoevasione?",
    "options": [
      "Perché distrugge i linfociti CD4+ nel midollo osseo",
      "Perché gli anticorpi specifici per i polisaccaridi capsulari di un ceppo non riconoscono gli epitopi capsulari di ceppi differenti, annullando la memoria protettiva crociata",
      "Perché la capsula converte le IgG in IgE",
      "Perché stimola la morte per piroptosi di tutti i neutrofili",
      "Perché induce la secrezione di IL-22 da parte dei mastociti"
    ],
    "correctIndex": 1,
    "explanation": "Risposta Esatta: B. L'elevata variazione antigenica capsulare fa sì che ogni incontro con un sierotipo differente venga gestito come un'infezione primaria, rendendo inefficace la memoria immunitaria anticorpale pregressa."
  },
  {
    "id": 10,
    "question": "Quale alterazione molecolare e fisiopatologica caratterizza la tempesta citochinica scatenata da H5N1 o SARS-CoV-2 nel polmone?",
    "options": [
      "Assoluta assenza di citochine infiammatorie e paralisi dei neutrofili",
      "Massiccio rilascio non controllato di citochine pro-infiammatorie e chemochine con reclutamento massivo di neutrofili, distruzione alveolare (ARDS) e risposta sistemica di fase acuta",
      "Iperespressione selettiva di sola IgA secretoria",
      "Attivazione esclusiva del complemento per via classica da anticorpi IgD",
      "Differenziamento di tutti i linfociti in plasmacellule producenti IgE"
    ],
    "correctIndex": 1,
    "explanation": "Risposta Esatta: B. La mancata regolazione dell'infezione primaria da spillover scatena una produzione torrenziale di TNF-α, IL-6 e chemochine che richiama milioni di leucociti, causando necrosi della barriera alveolo-capillare, edema polmonare ARDS e collasso multiorgano."
  }
];

  return (
    <article className="space-y-12">
      {/* Header Didattico Ufficiale */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-150 pb-4 mb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold">Lezione 22</span>
            <span>·</span>
            <span>19 Novembre 2025 (1ª e 2ª ora)</span>
            <span>·</span>
            <span>Docente: <strong>Prof.ssa Alessandra Soriani</strong></span>
          </div>
          <div className="text-xs font-mono text-slate-500">
            Sbobinatori: <strong>Sofia Caroli</strong> (1ª ora), <strong>Matteo Bellinzoni</strong> (2ª ora) | Revisori: <strong>Giuseppe Amante</strong>, <strong>Antonella Ambruosi</strong>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-serif-heading">
          La Risposta Immunitaria alle Infezioni: Meccanismi Effettori, Strategie di Evasione dei Patogeni & Immunopatologia
        </h1>

        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          Trattato monografico integrato sull'orchestrazione delle difese dell'ospite contro le grandi classi di patogeni (batteri extracellulari ed intracellulari, funghi, protozoi, elminti e virus):
          dai principi di coevoluzione, spillover e bilancio energetico-metabolico della risposta, alla regolazione negativa reciproca (<em>cross-inhibition</em>) tra i lignaggi T effettori (Th1, Th2, Th17, Treg);
          dal danno tissutale immunomediato (immunocomplessi, mimetismo molecolare e tempesta citochinica ARDS da H5N1 o SARS-CoV-2) ai superantigeni stafilococcici (TSST-1);
          dalle strategie di immunoevasione molecolare (l'interruttore termico di <em>Yersinia pestis</em>, le variazioni antigeniche di <em>S. pneumoniae</em>, l'arresto fagolisosomiale di <em>M. tuberculosis</em>)
          fino al paradigma clinico della lebbra tubercoloide vs lepromatosa e all'eliminazione degli elminti tramite <strong>ADCC mediata da IgE ed eosinofili</strong>.
        </p>
      </div>

      <div className={proseClass}>
        {/* 22.1 EPIDEMIOLOGIA & COSTO METABOLICO */}
        <section id="sec-22-1" className="space-y-4">
          <div className="flex items-center gap-2 text-blue-700">
            <Shield className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              22.1 Epidemiologia Globale, Coevoluzione Uomo-Patogeno, Spillover & Bilancio Energetico
            </h2>
          </div>

          <p>
            Le malattie infettive rappresentano storicamente e biologicamente una delle più potenti pressioni selettive che hanno plasmato il genoma della specie umana. Come illustrato dalla Prof.ssa Soriani nei grafici epidemiologici della prima ora (slide 1), le infezioni costituiscono tuttora la <strong>causa di circa il 50% della mortalità globale nei paesi a basso e medio reddito</strong> (paesi in via di sviluppo), a fronte dell'eradicazione o drastico contenimento nei paesi industrializzati grazie alle vaccinazioni e ai presidi igienico-sanitari.
          </p>

          <p>
            La storia evolutiva umana è indissolubilmente intrecciata con quella dei microbi:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
            <li><strong>Le Tappe della Diffusione Globale</strong>: le prime migrazioni fuori dall'Africa, la Via della Seta e, in epoca moderna, la globalizzazione e i trasporti aerei hanno trasformato epidemie confinate a singole valli in <em>pandemie globali</em> in poche ore.</li>
            <li><strong>Cambiamenti Climatici & Habitat dei Vettori</strong>: il riscaldamento globale ha modificato gli ecosistemi espandendo l'areale di diffusione di artropodi vettori (zanzare <em>Aedes</em> e <em>Culex</em>, zecche <em>Ixodes</em>), favorendo l'insorgenza di <strong>patogeni emergenti o riemergenti</strong> (West Nile, Dengue, Chikungunya, Ebola, SARS).</li>
            <li><strong>Patogeni Persistenti</strong>: microrganismi come l'<strong>HIV</strong>, per i quali l'estrema plasticità genetica impedisce la formulazione di un vaccino convenzionale, ma che vengono tenuti cronicamente "a bada" dalla terapia farmacologica antiretrovirale (HAART).</li>
          </ul>

          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs font-sans">
            <h4 className="font-bold text-amber-950 text-sm mb-1.5 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-700" />
              Il Principio del "Costo Metabolico" & la Gerarchia di Sicurezza
            </h4>
            <p className="text-amber-900 m-0 leading-relaxed">
              Il sistema immunitario non risponde a tutti gli stimoli con la medesima violenza. Ogni attivazione cellulare comporta un <strong>ingente costo energetico e metabolico</strong> per l'organismo.
              <br /><br />
              • <strong>Risposte a Basso Costo Energetico ("Media Sicurezza")</strong>: se attraverso un epitelio cutaneo o mucosale penetrano microbi commensali o particelle innocue, l'organismo mette in atto risposte costitutive ed economiche (peptidi antimicrobici come <em>defensine</em> e <em>mucine</em>, secrezione di <em>IgA dimeriche</em>, anticorpi naturali IgM, attività fagocitica di base). Queste sono sufficienti a gestire l'evento senza mobilitare l'intero apparato adattativo.
              <br />
              • <strong>Risposte ad Alto Costo Energetico ("Massima Emergenza")</strong>: solo quando penetrano patogeni invasivi dotati di fattori di virulenza che proliferano attivamente nei tessuti, il sistema attiva progressivamente risposte costose (flogosi sistemica con proteine di fase acuta dal fegato, differenziamento Th17, espansione clonale di linfociti T/B nei linfonodi e produzione massiva di IgG ad alta affinità).
            </p>
          </div>
        </section>

        {/* 22.2 CINETICHE DI RISPOSTA & GENETICA DELL'OSPITE */}
        <section id="sec-22-2" className="space-y-4">
          <div className="flex items-center gap-2 text-indigo-700">
            <Activity className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              22.2 Cinetiche di Risposta: Innata vs Adattativa, Infezione Primaria vs Secondaria & Genetica dell'Ospite
            </h2>
          </div>

          <p>
            L'attivazione del sistema immunitario procede secondo una scansione cronologica rigorosa:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-300 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm m-0">
                1. Risposta Primaria (Primo Contatto con il Patogeno)
              </h4>
              <p className="text-slate-700 m-0 leading-relaxed">
                Nelle prime ore intervengono gli epiteli, i PRR, i macrofagi residenti e il complemento. Se il patogeno persiste, tra il 2° e il 4° giorno si attivano le cellule NK (nelle infezioni virali). Entro <strong>7–10 giorni</strong> giunge a maturazione la risposta adattativa: attivazione dei linfociti T citotossici CD8+ ed espansione dei linfociti T helper con comparsa degli anticorpi di classe IgG ad alta affinità.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-300 space-y-2">
              <h4 className="font-bold text-blue-900 text-sm m-0">
                2. Risposta Secondaria (Memoria Immunologica)
              </h4>
              <p className="text-blue-950 m-0 leading-relaxed">
                In caso di reinfezione da parte del medesimo agente, la cinetica è drasticamente accelerata: la fase di latenza è virtualmente assente, i linfociti CD8+ di memoria e le plasmacellule secernenti IgG e IgA ad altissima affinità azzerano la carica patogena in tempi brevissimi, prima che si manifestino i sintomi clinici.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-purple-50/80 border border-purple-200 text-xs font-sans mt-3">
            <h4 className="font-bold text-purple-950 text-sm mb-1 flex items-center gap-2">
              <Dna className="w-4 h-4 text-purple-700" />
              Genetica dell'Ospite: Suscettibilità e Resistenza Ereditaria
            </h4>
            <p className="text-purple-900 m-0 leading-relaxed">
              Studi di concordanza su gemelli monozigoti vs dizigoti dimostrano che la suscettibilità alle infezioni ha una solida base genetica:
              <br />
              • <strong>Resistenza Naturale ad HIV (Delezione CCR5-Δ32)</strong>: gli individui omozigoti per la delezione di 32 paia di basi nel gene <em>CCR5</em> non esprimono il co-recettore di superficie sui macrofagi e linfociti T CD4+, risultando completamente refrattari all'ingresso dei ceppi virali R5-tropici di HIV-1.
              <br />
              • <strong>Polimorfismi HLA e Recettoriali</strong>: varianti alleliche specifiche (come l'allele D35 citato a lezione) influenzano l'efficacia della presentazione peptidica determinando progressione rapida vs lenta delle infezioni virali.
            </p>
          </div>
        </section>

        {/* 22.3 REGOLAZIONE NEGATIVA RECIPROCA TRA CELLULE T EFFETTRICI */}
        <section id="sec-22-3" className="space-y-4">
          <div className="flex items-center gap-2 text-rose-700">
            <Layers className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              22.3 Regolazione Negativa Reciproca delle Cellule T Effettrici (Cross-Inhibition Th1 - Th2 - Th17 - Treg)
            </h2>
          </div>

          <p>
            Uno dei cardini concettuali della seconda ora di lezione (Prof.ssa Soriani, slide 8) è il fenomeno della <strong>regolazione negativa reciproca (Cross-Inhibition)</strong> tra le sottopopolazioni dei linfociti T effettori:
          </p>

          <blockquote className="p-4 border-l-4 border-rose-600 bg-rose-50 text-rose-950 text-xs sm:text-sm font-sans rounded-r-xl">
            "Quando l'organismo decide di montare una risposta veicolata dal linfocita Th1, non vogliamo che preziose risorse biologiche vengano disperse nel differenziare sottopopolazioni (come i Th2) non adatte ad eliminare quel tipo di patogeno. Pertanto, il Th1 produrrà citochine che bloccano direttamente le altre vie."
          </blockquote>

          <p>
            Questo antagonismo molecolare incrociato si articola secondo precise interazioni citochiniche:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
            <li><strong>Azione Inibitoria di Th1</strong>: la citochina firma di Th1, l'<strong>Interferone-gamma (IFN-γ)</strong>, inibisce potentemente la proliferazione e l'espansione dei linfociti <strong>Th2</strong> e blocca il differenziamento dei <strong>Th17</strong>.</li>
            <li><strong>Azione Inibitoria di Th2</strong>: le citochine prodotte dai Th2, in particolare <strong>IL-4</strong> e <strong>IL-10</strong>, inibiscono la sintesi di IL-12 da parte dei macrofagi/DC e spengono il differenziamento dei linfociti <strong>Th1</strong> e <strong>Th17</strong>.</li>
            <li><strong>Azione Soppressiva dei Treg</strong>: i linfociti T regolatori secernono <strong>TGF-β</strong> e <strong>IL-10</strong>, che sopprimono sia la proliferazione dei Th1 che quella dei Th2, ripristinando l'omeostasi al termine dell'infezione.</li>
          </ul>

          {/* Schema Comparativo: Risposte Immunitarie per Tipologia di Patogeno */}
          <ConceptMapFlow {...MAP_LEZIONE_22_IMMUNE_RESPONSES_BY_PATHOGEN} />
        </section>

        {/* 22.4 DANNO DIRETTO VS DANNO INDIRETTO & IMMUNOPATOLOGIA */}
        <section id="sec-22-4" className="space-y-4">
          <div className="flex items-center gap-2 text-red-700">
            <Flame className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              22.4 Danno Diretto vs Danno Indiretto: Il Concetto di Immunopatologia e la Tempesta Citochinica (H5N1 & SARS-CoV-2)
            </h2>
          </div>

          <p>
            I sintomi e le lesioni tessutali riscontrati durante un'infezione derivano da due componenti distinte:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-300 space-y-2">
              <span className="font-bold text-slate-900 text-sm block">1. Danno Diretto Microbico</span>
              <p className="text-slate-700 m-0 leading-relaxed">
                Esercitato direttamente dal microrganismo attraverso:
                <br />
                • Lisi e citopatia cellulare da replicazione virale intracellulare.
                <br />
                • Secrezione di <strong>esotossine</strong> enzimatiche (es. tossina difterica, tetanica, botulinica).
                <br />
                • Rilascio di <strong>endotossine</strong> (LPS dei batteri Gram-negativi).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-red-50 border border-red-300 space-y-2">
              <span className="font-bold text-red-950 text-sm block">2. Danno Indiretto (Immunopatologia)</span>
              <p className="text-red-900 m-0 leading-relaxed">
                In moltissime patologie, <strong>è la risposta immunitaria esagerata dell'ospite, e non il patogeno in sé, a causare la distruzione tissutale e la morte</strong>:
                <br />
                • <strong>Immunocomplessi</strong>: deposito di complessi antigene-anticorpo nei capillari con glomerulonefrite (es. post-infezione da <em>Streptococcus pyogenes</em>).
                <br />
                • <strong>Mimetismo Molecolare</strong>: anticorpi cross-reattivi contro antigeni self (febbre reumatica).
                <br />
                • <strong>Flogosi Granulomatosa Cronica</strong>: necrosi caseosa e cavitazioni polmonari in <em>M. tuberculosis</em>.
              </p>
            </div>
          </div>

          {/* Focus H5N1 e Tempesta Citochinica */}
          <div className="p-4 rounded-xl bg-red-100/70 border border-red-300 text-xs font-sans">
            <h4 className="font-bold text-red-950 text-sm mb-1.5 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-700" />
              Il Paradigma dello Spillover: L'Influenza Aviaria H5N1 e la Sindrome da Distress Respiratorio Acuto (ARDS)
            </h4>
            <p className="text-red-950 m-0 leading-relaxed">
              Il virus influenzale aviario <strong>H5N1</strong> infetta naturalmente gli uccelli selvatici acquatici (serbatoio naturale), dove si replica asintomaticamente. Se compie un salto di specie verso ospiti intermedi (furetto, maiale), induce una malattia moderata.
              <br /><br />
              Quando però il virus compie lo <strong>spillover diretto nell'essere umano</strong>, il sistema immunitario, non avendo mai incontrato questo profilo antigenico nella filogenesi recente, scatena una risposta sproporzionata e caotica:
              <br />
              • I linfociti T e i macrofagi rilasciano fiumi di chemochine e citochine pro-infiammatorie (<strong>Tempesta Citochinica / Cytokine Storm</strong>: TNF-α, IL-1β, IL-6, IFN-γ).
              <br />
              • Reclutamento massivo di neutrofili nei polmoni con danno alveolare diffuso, essudato fibrinoso, perdita della barriera alveolo-capillare e <strong>Sindrome da Distress Respiratorio Acuto (ARDS)</strong> fatale.
              <br />
              • Il rilascio sistemico stimola la sintesi epatica di proteine di fase acuta, ipotensione, shock e insufficienza multiorgano (MOF), analogamente a quanto osservato nelle forme critiche di <strong>SARS-CoV-2</strong>.
            </p>
          </div>
        </section>

        {/* 22.5 ESOTOSSINE, ANTICORPI & SUPERANTIGENI TSST-1 */}
        <section id="sec-22-5" className="space-y-4">
          <div className="flex items-center gap-2 text-amber-700">
            <Zap className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              22.5 Esotossine Batteriche, Anticorpi Neutralizzanti & Superantigeni (TSST-1 Stafilococcico)
            </h2>
          </div>

          <p>
            I batteri patogeni elaborano tossine proteiche solubili con modalità d'azione radicalmente differenti:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
            <li><strong>Esotossine Convenzionali</strong>: proteine che si legano a specifici recettori cellulari ed entrano per endocitosi nel citoplasma esercitando attività catalitiche letali. La difesa principale dell'ospite è affidata agli <strong>anticorpi neutralizzanti (IgG ed IgA)</strong>, che legandosi alla porzione recettoriale della tossina ne impediscono stericamente l'attracco alla membrana cellulare.</li>
            <li><strong>Superantigeni (SAg)</strong>: tossine atipiche prodotte da stafilococchi e streptococchi, tra cui la <strong>TSST-1 (Toxic Shock Syndrome Toxin-1)</strong> di <em>Staphylococcus aureus</em> e le enterotossine stafilococciche (SEA, SEB, SEC).</li>
          </ul>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-xs font-sans">
            <h4 className="font-bold text-amber-950 text-sm mb-1.5 flex items-center gap-2">
              <Crosshair className="w-4 h-4 text-amber-800" />
              La Biofisica Molecolare dei Superantigeni: Perché Attivano Fino al 20% dei Linfociti T?
            </h4>
            <p className="text-amber-950 m-0 leading-relaxed">
              Un antigene convenzionale richiede digestione endocellulare, caricamento nella tasca dell'MHC e attiva solo lo specifico clone T dotato del TCR complementare (frequenza pari a <strong>1 su 100.000 – 1.000.000</strong>, circa lo 0.001% dei T).
              <br /><br />
              Il superantigene aggira completamente questo vincolo biologico:
              <br />
              1. <strong>Nessuna Processazione Richiesta</strong>: lega la molecola intatta senza bisogno di digestione lisosomiale.
              <br />
              2. <strong>Legame Bivalente Esterno</strong>: si lega simultaneamente alla <strong>catena Vβ del TCR</strong> (dominio variabile beta) e alla porzione esterna della molecola <strong>MHC di classe II</strong>, <em>completamente al di fuori del solco peptidico canonico</em>.
              <br />
              3. <strong>Attivazione Policlonale Massiva</strong>: poiché riconosce intere famiglie di catene Vβ a prescindere dalla specificità clonale, il superantigene attiva simultaneamente <strong>fino al 20% dell'intero pool di linfociti T dell'organismo</strong>!
              <br />
              4. <strong>Collasso da Shock Tossico</strong>: l'attivazione simultanea di un numero così colossale di cellule T scatena una produzione parossistica di citochine (IL-2, TNF-α, IFN-γ), causando vasodilatazione sistemica refrattaria, shock tossico e collasso cardiocircolatorio.
            </p>
          </div>
        </section>

        {/* 22.6 EVASIONE BATTERI EXTRACELLULARI */}
        <section id="sec-22-6" className="space-y-4">
          <div className="flex items-center gap-2 text-indigo-700">
            <Bug className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              22.6 Evasione dei Batteri Extracellulari: L'Interruttore Termico di Yersinia pestis, H. pylori & S. pneumoniae
            </h2>
          </div>

          <p>
            I batteri extracellulari hanno sviluppato sofisticati sistemi per eludere il riconoscimento dei PRR (TLR) e l'attacco del sistema del complemento:
          </p>

          <div className="space-y-3 font-sans text-xs">
            {/* Yersinia pestis */}
            <div className="p-4 rounded-xl bg-white border-2 border-indigo-200 shadow-xs space-y-2">
              <span className="font-bold text-indigo-950 text-sm block">
                1. Yersinia pestis: La Modifica Strutturale dell'LPS Regolata dalla Temperatura
              </span>
              <p className="text-slate-700 m-0 leading-relaxed">
                <em>Yersinia pestis</em> (l'agente eziologico della peste bubbonica e polmonare) alterna due ospiti biologici: l'artropode vettore (la pulce, a temperatura ambiente di <strong>21–27 °C</strong>) e l'ospite mammifero umano (temperatura corporea di <strong>37 °C</strong>).
                <br />
                • A <strong>21–27 °C</strong> sintetizza un <strong>LPS esa-acilato</strong> normale, che viene prontamente riconosciuto dal complesso umano <strong>TLR4/MD-2</strong> inducendo NF-κB e citochine.
                <br />
                • A <strong>37 °C</strong> nell'uomo, la trascrizione batterica modifica il profilo enzimatico di acilazione producendo un <strong>LPS tetra-acilato anomalo</strong>. Questa variante mutata <em>non è in grado di stimolare TLR4</em> (o agisce addirittura da antagonista recettoriale). Il batterio spegne l'allarme immunitario sul nascere, impedisce la trasduzione via MyD88/NF-κB e prolifera indisturbato, causando la forma polmonare a esito letale.
              </p>
            </div>

            {/* Helicobacter pylori */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="font-bold text-slate-950 text-sm block">
                2. Helicobacter pylori: Modifica Sinaptica di LPS e Flagellina
              </span>
              <p className="text-slate-700 m-0 leading-relaxed">
                Colonizzatore della mucosa gastrica acida, <em>H. pylori</em> ha modificato geneticamente sia l'LPS (privo di attività agonista verso TLR4) sia la sequenza primaria della <strong>flagellina</strong> nella porzione conservata di legame per il <strong>TLR5</strong>. I PRR epiteliali e fagocitici gastrici non riescono a percepirlo, permettendo la colonizzazione cronica asintomatica o l'evoluzione in ulcera peptica e gastrite atrofica.
              </p>
            </div>

            {/* Streptococcus pneumoniae & Complemento */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="font-bold text-slate-950 text-sm block">
                3. Streptococcus pneumoniae & Evasione del Complemento
              </span>
              <p className="text-slate-700 m-0 leading-relaxed">
                • <strong>Variazione Antigenica Capsulare</strong>: esprime oltre 90 sierotipi capsulari polisaccaridici distinti. L'infezione da un sierotipo non garantisce immunità verso gli altri (necessità di vaccini coniugati multivalenti: PCV13, PCV20).
                <br />
                • <strong>Evasione del Complemento</strong>: la capsula polisaccaridica impedisce fisicamente il contatto di C3b con la parete batterica; secrezione di proteasi degradanti C3b; modifiche strutturali di membrana che bloccano l'ancoraggio del complesso C5b-6-7 (MAC); reclutamento di inibitori solubili dell'ospite come il <strong>Fattore H</strong> per inattivare la C3 convertasi.
              </p>
            </div>
          </div>
        </section>

        {/* 22.7 BATTERI INTRACELLULARI: M. TUBERCULOSIS & LISTERIA */}
        <section id="sec-22-7" className="space-y-4">
          <div className="flex items-center gap-2 text-rose-800">
            <Shield className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              22.7 Batteri Intracellulari: Il Modello Mycobacterium tuberculosis & Listeria monocytogenes
            </h2>
          </div>

          <p>
            I batteri intracellulari si dividono in due grandi classi anatomiche: quelli che vivono confinati nei <strong>fagosomi</strong> e quelli che fuggono liberi nel <strong>citosol</strong>:
          </p>

          <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-3">
            A. Mycobacterium tuberculosis: Il Confinamento Fagolisosomiale & la Genesi del Granuloma
          </h3>
          <p>
            Captato per inalazione dai macrofagi alveolari, <em>M. tuberculosis</em> viene contenuto in forma latente nel <strong>95% dei soggetti immunocompetenti</strong>, mentre nel 5% sviluppa malattia attiva primaria con diffusione extrapolmonare:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
            <li><strong>Blocco della Maturazione del Fagosoma</strong>: impedisce la fusione tra fagosoma e lisosoma interferendo con le proteine Rab dell'ospite.</li>
            <li><strong>Inibizione dell'Acidificazione</strong>: blocca l'incorporazione della pompa protonica vacuolare V-ATPase, mantenendo il fagosoma a pH neutro (~6.4) ed impedendo l'attivazione delle idrolasi acide lisosomiali e la generazione di ROS e composti reattivi dell'azoto (RNI).</li>
            <li><strong>Switch dei PAMP e Induzione di IL-10</strong>: durante l'infezione cronica, il micobatterio modifica i propri PAMP di superficie, riducendo quelli che stimolano TLR attivatori e aumentando quelli (come il mannosio capsulare) che legano il recettore <strong>DC-SIGN</strong> sulle cellule dendritiche. Questo legame induce la sintesi della citochina immunosoppressiva <strong>IL-10</strong>, spegnendo la risposta Th1.</li>
            <li><strong>L'Architettura del Granuloma</strong>: quando il macrofago non riesce ad eliminare il micobatterio, i linfociti CD4+ (Th1), i CD8+ e i <strong>linfociti T γδ</strong> producono massicce dosi di <strong>IFN-γ</strong> e <strong>TNF-α</strong>. Le citochine trasformano i macrofagi in cellule epitelioidi e cellule giganti multinucleate di Langhans, circondate da un anello di linfociti T e fibroblasti, murando fisicamente il micobatterio ed impedendone lo spreading sistemico.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-6">
            B. Listeria monocytogenes: Fuga nel Citosol & Uccisione CD8+ Indipendente da Th
          </h3>
          <p>
            <em>Listeria monocytogenes</em> produce la tossina citolitica <strong>listeriolisina O (LLO)</strong> e fosfolipasi che perforano la membrana del fagosoma, permettendo al batterio di <strong>fuggire nel citoplasma</strong> e muoversi da cellula a cellula sfruttando la polimerizzazione dell'actina (ActA).
          </p>
          <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs font-sans">
            <strong className="text-blue-950 block text-sm mb-1 font-bold">
              Il Concetto d'Esame: Attivazione Diretta dei Linfociti T CD8+ Vergini
            </strong>
            <p className="text-blue-900 m-0 leading-relaxed">
              Come sottolineato nella slide 14 e 15, l'infezione da <em>Listeria</em> è in grado di <strong>attivare pienamente i linfociti T CD8 naive anche in assenza di cooperazione da parte dei linfociti T helper</strong>! L'intensa stimolazione dei PRR citosolici induce nella cellula dendritica una sovraespressione massiva di molecole costimolatorie (B7-1/B7-2, 4-1BBL) e citochine (IL-12, IL-18) tale da impartire direttamente il terzo segnale al CD8+. Una volta differenziato, il CTL effettore non richiede più co-stimolazione: riconosce il peptide batterico citosolico su MHC-I ed elimina direttamente l'epitelio infetto.
            </p>
          </div>
        </section>

        {/* 22.8 LEBBRA TUBERCOLOIDE VS LEPROMATOSA */}
        <section id="sec-22-8" className="space-y-4">
          <div className="flex items-center gap-2 text-rose-700">
            <Award className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              22.8 Il Paradigma della Dicotomia Clinica di Mycobacterium leprae: Lebbra Tubercoloide vs Lepromatosa
            </h2>
          </div>

          <p>
            L'infezione causata da <em>Mycobacterium leprae</em> (slide 14) costituisce il più celebre ed elegante modello didattico di patologia umana in cui <strong>il fenotipo clinico dipende interamente dalla polarizzazione della risposta T helper</strong> contro il medesimo microrganismo:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
            {/* Tubercoloide */}
            <div className="p-4 rounded-xl bg-emerald-50 border-2 border-emerald-300 space-y-2 shadow-xs">
              <div className="flex justify-between items-center">
                <span className="font-bold text-emerald-950 text-sm">1. Lebbra Tubercoloide (Forma Contenuta)</span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-mono font-bold">Th1 Dominante</span>
              </div>
              <p className="text-emerald-950 m-0 leading-relaxed">
                • <strong>Profilo Citochinico:</strong> Espressione esclusiva di citochine <strong>Th1 (IFN-γ, IL-2, Linfotossina)</strong>.
                <br />
                • <strong>Fisiopatologia:</strong> I macrofagi vengono potentemente attivati; il micobatterio viene circoscritto all'interno di <strong>granulomi ben delimitati</strong>.
                <br />
                • <strong>Quadro Clinico:</strong> Bassa o assente infettività; micobatteri rari o non individuabili alle colorazioni istologiche; lesioni cutanee poche e circoscritte; danno confinato a tronchi nervosi periferici con anestesia localizzata; livelli di anticorpi nel sangue perfettamente normali.
              </p>
            </div>

            {/* Lepromatosa */}
            <div className="p-4 rounded-xl bg-rose-50 border-2 border-rose-300 space-y-2 shadow-xs">
              <div className="flex justify-between items-center">
                <span className="font-bold text-rose-950 text-sm">2. Lebbra Lepromatosa (Forma Disseminata Maligna)</span>
                <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 font-mono font-bold">Th2 Aberrante</span>
              </div>
              <p className="text-rose-950 m-0 leading-relaxed">
                • <strong>Profilo Citochinico:</strong> Espressione aberrante di citochine <strong>Th2 (IL-4, IL-5, IL-10)</strong>.
                <br />
                • <strong>Fisiopatologia:</strong> L'IL-10 e l'IL-4 disattivano i macrofagi impedendone l'azione battericida. Il micobatterio prolifera in modo rigoglioso ed incontrollato all'interno dei macrofagi (cellule schiumose di Virchow).
                <br />
                • <strong>Quadro Clinico:</strong> Elevata infettività; lesioni cutanee diffuse e nodulari sfiguranti (*facies leonina*), distruzione delle cartilagini e dei nervi; comparsa di <strong>ipergammaglobulinemia massiva</strong> con titoli anticorpali altissimi che risultano però del tutto <em>inutili e non protettivi</em> contro un patogeno intracellulare.
              </p>
            </div>
          </div>
        </section>

        {/* 22.9 FUNGHI (CANDIDA) & PROTOZOI */}
        <section id="sec-22-9" className="space-y-4">
          <div className="flex items-center gap-2 text-indigo-700">
            <Layers className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              22.9 Infezioni Fungine (Candida albicans, CLRs, Th17 & Neutrofili) & Protozoi
            </h2>
          </div>

          <p>
            I funghi (es. <em>Candida albicans</em>) sono microrganismi normalmente non invasivi, che richiedono un danno epiteliale o un'immunodeficienza per attecchire (slide 16):
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
            <li><strong>Sensing Innato tramite C-type Lectin Receptors (CLRs)</strong>: gli zuccheri della parete fungina sono riconosciuti specificamente da recettori lectinici di tipo C: la <strong>Dectina-1</strong> lega i <strong>β-glucani</strong>, mentre <strong>Dectina-2</strong>, <strong>Mincle</strong> e il recettore del mannosio (MMR) legano i mannani, attivando a valle la via Syk/CARD9/NF-κB e l'inflammasoma NLRP3 (con rilascio di IL-1β).</li>
            <li><strong>Cooperazione Th1 e Th17</strong>:
              <br />
              - <strong>Linfociti Th1 e cellule NK</strong> rilasciano precocemente <strong>IFN-γ</strong>, che attiva il macrofago; questo a sua volta rilascia <strong>IL-12</strong> creando un loop di amplificazione positiva.
              <br />
              - <strong>Linfociti Th17</strong> secernono <strong>IL-17</strong> ed <strong>IL-22</strong>: queste citochine agiscono sui recettori delle cellule epiteliali mucosali, rinsaldando le giunzioni serrate intercellulari (riparando la barriera), stimolando le cellule di Paneth al rilascio di defensine e producendo gradienti chemochinici per il massiccio reclutamento dei <strong>neutrofili</strong>, i veri agenti litici capaci di fagocitare e distruggere lieviti e pseudofi.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-4">
            Risposte Immunitarie ed Evasione dei Protozoi (Slide 17)
          </h3>
          <p>
            I protozoi presentano cicli biologici complessi che impongono risposte mirate:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
            <li><strong>Forme Ematiche Circolanti (Trypanosoma brucei)</strong>: controllate dalla lisi mediata da anticorpi e complemento, da cui il parassita evade tramite una continua <strong>variazione antigenica delle glicoproteine VSG</strong>.</li>
            <li><strong>Forme Intracellulari nei Macrofagi (Leishmania, Trypanosoma cruzi, Toxoplasma gondii)</strong>: richiedono una risposta cellulo-mediata Th1/CD8+. Meccanismi di evasione: <em>Toxoplasma</em> blocca la fusione fagosoma-lisosoma; <em>T. cruzi</em> evade dal fagosoma nel citoplasma; <em>Leishmania</em> sintetizza inibitori resistenti agli enzimi idrolitici lisosomiali.</li>
          </ul>
        </section>

        {/* 22.10 ELMINTI, ADCC EOSINOFILI & RISPOSTA ANTIVIRALE */}
        <section id="sec-22-10" className="space-y-4">
          <div className="flex items-center gap-2 text-rose-800">
            <HeartPulse className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              22.10 Infezioni da Elminti: Sensing PAR, Circuito Th2, Armamento Mastocitario, ADCC degli Eosinofili & Risposta Virale
            </h2>
          </div>

          <p>
            Gli elminti sono grandi metazoi parassiti (nematodi come <em>Ascaris lumbricoides</em>, trematodi come <em>Schistosoma</em>, cestodi come tenie) che possono raggiungere lunghezze comprese tra centimetri e metri. A causa delle loro dimensioni titaniche, <strong>non possono essere fagocitati</strong> da macrofagi o neutrofili!
          </p>

          <p>
            Come illustrato dettagliatamente nelle slide 18–21:
          </p>

          <div className="space-y-3 font-sans text-xs">
            {/* Sensing PAR */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="font-bold text-slate-950 text-sm block">
                1. Il Sensing Tissutale: Proteasi Elmintiche & Recettori PAR (Protease-Activated Receptors)
              </span>
              <p className="text-slate-700 m-0 leading-relaxed">
                Gli elminti non possiedono PAMP classici riconosciuti dai PRR standard. Il sistema immunitario percepisce la loro presenza tramite un <strong>profilo di danno proteolitico</strong>: le potenti proteasi secrete dal verme tagliano il segmento extracellulare dei recettori <strong>PAR (Protease-Activated Receptors)</strong> espressi su cellule epiteliali, cellule dendritiche e basofili. Questo clivaggio innesca il rilascio immediato delle allarmine mucosali: <strong>IL-33, IL-25 e TSLP</strong>.
              </p>
            </div>

            {/* Circuito Th2 */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="font-bold text-slate-950 text-sm block">
                2. Il Programma Effettore Th2 / ILC2 (IL-4, IL-5, IL-13)
              </span>
              <p className="text-slate-700 m-0 leading-relaxed">
                Le allarmine stimolano le <strong>ILC2</strong> e inducono il differenziamento dei <strong>linfociti Th2</strong> (guidati dal master regulator GATA3):
                <br />
                • <strong>IL-4 e IL-13</strong>: agiscono sui linfociti B inducendo lo switch isotipico verso le <strong>Immunoglobuline E (IgE)</strong>; stimolano l'iperplasia delle cellule caliciformi (*goblet cells*) e la contrazione peristaltica della muscolatura liscia intestinale (*meccanismo weep and sweep* per espellere meccanicamente il verme).
                <br />
                • <strong>IL-5</strong>: fattore di crescita e chemiotassi essenziale che induce la differenziazione, il reclutamento e la prolungata sopravvivenza degli <strong>eosinofili</strong>.
              </p>
            </div>

            {/* Armamento Mastociti */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="font-bold text-slate-950 text-sm block">
                3. L'Armamento dei Mastociti e Basofili via Recettori FcεRI
              </span>
              <p className="text-slate-700 m-0 leading-relaxed">
                I mastociti esprimono il recettore ad altissima affinità <strong>FcεRI</strong>. A differenza degli altri recettori Fc, FcεRI è in grado di legare stabilmente le molecole di IgE circolanti anche in assenza di antigene: il mastocita a riposo si "arma" ricoprendosi di IgE. Quando sopraggiunge l'antigene multivalente dell'elminta, si verifica il cross-linking dei recettori con degranulazione fulminea di <strong>istamina, prostaglandine, leucotrieni e triptasi</strong>, aumentando la permeabilità vascolare per richiamare plasma ed effettori cellulari.
              </p>
            </div>

            {/* ADCC Eosinofili */}
            <div className="p-4 rounded-xl bg-rose-50/80 border-2 border-rose-300 shadow-xs space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-rose-950 text-sm">
                  4. La Perla d'Esame della Docente: L'ADCC Mediata da Eosinofili e IgE
                </span>
                <span className="px-2 py-0.5 rounded bg-rose-200 text-rose-900 font-mono font-bold">Domanda Chiave d'Esame</span>
              </div>
              <p className="text-rose-950 m-0 leading-relaxed">
                Alla domanda d'esame <em>"Quali cellule dell'organismo sono capaci di compiere la citotossicità cellulare anticorpo-dipendente (ADCC)?"</em>, la risposta corretta è:
                <br />
                <strong>Non soltanto le cellule NK (con CD16 verso IgG), ma anche gli EOSINOFILI!</strong>
                <br /><br />
                • Il tegumento chitinoso dell'elminta viene opsonizzato da anticorpi di classe <strong>IgE</strong>.
                <br />
                • Gli eosinofili esprimono recettori Fc per le IgE (<strong>FcεRI ed FcεRII/CD23</strong>) e per le IgG. L'ingaggio massivo delle IgE opsonizzanti attiva una vera e propria <strong>ADCC</strong>: l'eosinofilo rilascia i granuli tossici a stretto contatto con la superficie del parassita.
                <br />
                • Il mediatore litico chiave è la <strong>Proteina Basica Maggiore (MBP - Major Basic Protein)</strong>, affiancata dalla proteina cationica dell'eosinofilo (ECP) e dalla neurotossina EDN: queste molecole sono le uniche capaci di disgregare chimicamente il tegumento e causare la morte dell'elminta.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-6">
            Sintesi della Risposta Antivirale & Sensori Intracellulari (Slide 22)
          </h3>
          <p>
            La lezione si conclude riassumendo la sequenza integrata di difesa contro i virus:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
            <li><strong>Cinetica a 3 Ondate</strong>: 1) Produzione precoce di <strong>IFN di tipo I (IFN-α/β)</strong> da pDC ed epitelio infetto entro le prime 24-48 ore; 2) Intervento delle cellule <strong>NK</strong> tra il 2° e il 4° giorno per contenere il carico replicativo; 3) Comparsa dei <strong>CTL CD8+ specifici</strong> e degli anticorpi neutralizzanti dal 6°-8° giorno in poi.</li>
            <li><strong>Riconoscimento degli Acidi Nucleici Virali</strong>:
              <br />
              - <em>Endosomiale:</em> <strong>TLR3</strong> riconosce dsRNA; <strong>TLR7 e TLR8</strong> riconoscono ssRNA; <strong>TLR9</strong> riconosce DNA con CpG ipometilati.
              <br />
              - <em>Citosolico:</em> <strong>RIG-I</strong> riconosce 5'-trifosfato RNA; <strong>MDA5</strong> riconosce lunghi dsRNA; <strong>cGAS-STING</strong> riconosce dsDNA aberrante nel citoplasma.
              <br />
              - <em>Vie di trasduzione:</em> convergenza su chinasi <strong>TBK-1 ed IKKε</strong> con fosforilazione e traslocazione nucleare dei fattori di trascrizione <strong>IRF3 e IRF7</strong>, scatenando la trascrizione dei geni degli interferoni di tipo I.
            </li>
          </ul>

          {/* SIMULATORE 1: TH1 VS TH2 DICOTOMIA & CROSS-INHIBITION */}
          <div id="sim-th1-th2-dichotomy" className="mt-8 pt-6 border-t-2 border-slate-200">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                    Laboratorio Interattivo 1
                  </span>
                  <h3 className="text-xl font-bold font-serif-heading text-white m-0">
                    Dicotomie Immunopatologiche & Cross-Inhibition Reciproca Th1 vs Th2
                  </h3>
                </div>
                <div className="flex rounded-lg bg-slate-800 p-1 border border-slate-700 text-xs">
                  <button
                    onClick={() => setSelectedDiseaseModel('lepra')}
                    className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                      selectedDiseaseModel === 'lepra'
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    1. M. leprae
                  </button>
                  <button
                    onClick={() => setSelectedDiseaseModel('helminthes')}
                    className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                      selectedDiseaseModel === 'helminthes'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    2. Elminti
                  </button>
                  <button
                    onClick={() => setSelectedDiseaseModel('cytokine_storm')}
                    className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                      selectedDiseaseModel === 'cytokine_storm'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    3. H5N1 / ARDS
                  </button>
                </div>
              </div>

              {selectedDiseaseModel === 'lepra' && (
                <div className="space-y-4 text-xs font-sans">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setLepraType('tuberculoide')}
                      className={`flex-1 p-3 rounded-xl border text-left transition-all ${
                        lepraType === 'tuberculoide'
                          ? 'bg-emerald-950 border-emerald-400 text-emerald-200'
                          : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      <span className="font-bold block text-sm mb-1">Lebbra Tubercoloide (Risposta Th1)</span>
                      <span>IFN-γ, granulomi stabili, bacilli rari, bassa infettività</span>
                    </button>
                    <button
                      onClick={() => setLepraType('lepromatosa')}
                      className={`flex-1 p-3 rounded-xl border text-left transition-all ${
                        lepraType === 'lepromatosa'
                          ? 'bg-rose-950 border-rose-400 text-rose-200'
                          : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      <span className="font-bold block text-sm mb-1">Lebbra Lepromatosa (Risposta Th2)</span>
                      <span>IL-4/IL-10, macrofagi schiumosi, crescita florida, ipergammaglobulinemia</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-800/90 border border-slate-700">
                    <div>
                      <span className="text-slate-400 font-mono block text-[11px]">PROFILO CITOCHINICO</span>
                      <strong className="text-sm font-bold text-white block mt-1">
                        {lepraType === 'tuberculoide' ? 'IFN-γ, IL-2, LT-α' : 'IL-4, IL-5, IL-10'}
                      </strong>
                      <span className="text-[11px] text-slate-400">
                        {lepraType === 'tuberculoide' ? 'Th1 attivo, sopprime Th2' : 'Th2 attivo, spegne Th1 tramite IL-10'}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-mono block text-[11px]">ATTIVITÀ MACROFAGICA</span>
                      <strong className="text-sm font-bold text-white block mt-1">
                        {lepraType === 'tuberculoide' ? 'M1 Microbicida Attivo' : 'M2 Deattivato / Paralizzato'}
                      </strong>
                      <span className="text-[11px] text-slate-400">
                        {lepraType === 'tuberculoide' ? 'Uccisione intracellulare' : 'Istopatologia: cellule di Virchow'}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-mono block text-[11px]">OUTCOME CLINICO</span>
                      <strong className="text-sm font-bold text-white block mt-1">
                        {lepraType === 'tuberculoide' ? 'Malattia Circoscritta' : 'Disseminazione Incontrollata'}
                      </strong>
                      <span className="text-[11px] text-slate-400">
                        {lepraType === 'tuberculoide' ? 'Danno localizzato ai nervi' : 'Lesioni nodulari diffuse e sfiguramento'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {selectedDiseaseModel === 'helminthes' && (
                <div className="space-y-4 text-xs font-sans">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setHelminthResponse('th2_protective')}
                      className={`flex-1 p-3 rounded-xl border text-left transition-all ${
                        helminthResponse === 'th2_protective'
                          ? 'bg-emerald-950 border-emerald-400 text-emerald-200'
                          : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      <span className="font-bold block text-sm mb-1">Risposta Th2 Protettiva</span>
                      <span>IL-4, IL-5, IL-13, IgE, Eosinofili (MBP), degranulazione per ADCC</span>
                    </button>
                    <button
                      onClick={() => setHelminthResponse('th1_aberrant')}
                      className={`flex-1 p-3 rounded-xl border text-left transition-all ${
                        helminthResponse === 'th1_aberrant'
                          ? 'bg-rose-950 border-rose-400 text-rose-200'
                          : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      <span className="font-bold block text-sm mb-1">Risposta Th1 Dannosa (Errore di Bivio)</span>
                      <span>IFN-γ, IgG2a, mancata espulsione, flogosi cronica e cronicizzazione</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
                    <p className="m-0 leading-relaxed text-slate-200">
                      {helminthResponse === 'th2_protective' ? (
                        <>
                          <strong>Meccanismo Efficace:</strong> L'innesco dei recettori <strong>PAR</strong> e delle allarmine orienta la differenziazione in <strong>Th2</strong>. L'IL-4/IL-13 stimolano lo switch a <strong>IgE</strong> e la peristalsi; l'IL-5 recluta <strong>eosinofili</strong> che compiono l'<strong>ADCC mediata da IgE</strong> rilasciando la Proteina Basica Maggiore (MBP) per sciogliere il tegumento. Il parassita viene espulso.
                        </>
                      ) : (
                        <>
                          <strong>Errore Immunologico Fatale:</strong> Se per difetto genetico o stimolo inappropriato si produce <strong>IFN-γ (Th1)</strong>, vengono attivati i macrofagi e prodotte IgG inefficaci contro il tegumento. L'elminta persiste indisturbato, mentre la continua stimolazione provoca danno infiammatorio cronico intestinale dell'ospite.
                        </>
                      )}
                    </p>
                  </div>
                </div>
              )}

              {selectedDiseaseModel === 'cytokine_storm' && (
                <div className="space-y-4 text-xs font-sans">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setStormSeverity('controlled')}
                      className={`flex-1 p-3 rounded-xl border text-left transition-all ${
                        stormSeverity === 'controlled'
                          ? 'bg-blue-950 border-blue-400 text-blue-200'
                          : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      <span className="font-bold block text-sm mb-1">Risposta Antivirale Fisiologica</span>
                      <span>IFN-I precoce, NK, CD8+ specifici con clearance e minima infiammazione</span>
                    </button>
                    <button
                      onClick={() => setStormSeverity('ards_storm')}
                      className={`flex-1 p-3 rounded-xl border text-left transition-all ${
                        stormSeverity === 'ards_storm'
                          ? 'bg-red-950 border-red-500 text-red-200'
                          : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      <span className="font-bold block text-sm mb-1">Spillover H5N1 / SARS-CoV-2 (ARDS)</span>
                      <span>Tempesta citochinica (TNF, IL-6, IL-1), danno alveolare ed insufficienza multiorgano</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
                    <p className="m-0 leading-relaxed text-slate-200">
                      {stormSeverity === 'controlled' ? (
                        <>
                          <strong>Equilibrio Effettore:</strong> I sensori PRR attivano gli interferoni di tipo I che bloccano la trascrizione virale. L'azione coordinata dei CTL elimina le cellule infette; la contrazione clonale spegne la risposta prevenendo il danno collaterale.
                        </>
                      ) : (
                        <>
                          <strong>Immunopatologia Letale:</strong> L'ospite umano non possiede memoria filogenetica per il ceppo aviario H5N1. Il massiccio afflusso di neutrofili guidato da chemochine distrugge gli alveoli polmonari (ARDS). La proteina C-reattiva e le proteine di fase acuta prodotte dal fegato amplificano la cascata sistemica fino allo shock irreversibile.
                        </>
                      )}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* SIMULATORE 2: MICROBIAL EVASION LAB */}
          <div id="sim-microbial-evasion" className="mt-8 pt-6 border-t-2 border-slate-200">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold block">
                    Laboratorio Interattivo 2
                  </span>
                  <h3 className="text-xl font-bold font-serif-heading text-white m-0">
                    Laboratorio Molecolare di Evasione Microbica & Superantigeni
                  </h3>
                </div>
                <div className="flex rounded-lg bg-slate-800 p-1 border border-slate-700 text-xs">
                  <button
                    onClick={() => setEvasionTab('yersinia')}
                    className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                      evasionTab === 'yersinia' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Y. pestis (LPS)
                  </button>
                  <button
                    onClick={() => setEvasionTab('superantigen')}
                    className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                      evasionTab === 'superantigen' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Superantigeni (TSST-1)
                  </button>
                  <button
                    onClick={() => setEvasionTab('myco_tb')}
                    className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                      evasionTab === 'myco_tb' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    M. tuberculosis
                  </button>
                  <button
                    onClick={() => setEvasionTab('eosinophil_adcc')}
                    className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                      evasionTab === 'eosinophil_adcc' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    ADCC Eosinofili (MBP)
                  </button>
                </div>
              </div>

              {evasionTab === 'yersinia' && (
                <div className="space-y-4 text-xs font-sans">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-300">Seleziona Temperatura Ambientale / Ospite:</span>
                    <button
                      onClick={() => setYersiniaTemp(25)}
                      className={`px-3 py-1.5 rounded-lg border font-mono transition-all ${
                        yersiniaTemp === 25
                          ? 'bg-cyan-900 border-cyan-400 text-white font-bold'
                          : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      21–27 °C (Pulce Vettore)
                    </button>
                    <button
                      onClick={() => setYersiniaTemp(37)}
                      className={`px-3 py-1.5 rounded-lg border font-mono transition-all ${
                        yersiniaTemp === 37
                          ? 'bg-rose-900 border-rose-400 text-white font-bold'
                          : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      37 °C (Corpo Umano)
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2">
                    <div className="flex justify-between items-center text-slate-300 font-mono text-[11px]">
                      <span>STRUTTURA LIPIDE A (LPS)</span>
                      <span className="font-bold text-cyan-400">
                        {yersiniaTemp === 25 ? 'Forma Esa-Acilata' : 'Forma Tetra-Acilata Modificata'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-slate-300 font-mono text-[11px]">
                      <span>LEGAME CON TLR4 / MD-2</span>
                      <span className="font-bold text-emerald-400">
                        {yersiniaTemp === 25 ? 'Agonista Attivo (Attiva NF-κB)' : 'Antagonista / Non Riconosciuto'}
                      </span>
                    </div>
                    <p className="text-slate-300 text-[11px] m-0 pt-2 border-t border-slate-700">
                      {yersiniaTemp === 25
                        ? 'Nella pulce, l\'LPS è convenzionale: stimola TLR4 e genera citochine infiammatorie.'
                        : 'A 37 °C nell\'uomo, il batterio silenzia gli enzimi di acilazione: l\'LPS tetra-acilato non scatena la via MyD88. L\'uomo non genera allarme innato precoce e sviluppa peste letale!'}
                    </p>
                  </div>
                </div>
              )}

              {evasionTab === 'superantigen' && (
                <div className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
                      <span className="text-slate-400 font-mono text-[11px] block">ANTIGENE CONVENZIONALE</span>
                      <span className="text-2xl font-black text-emerald-400 block mt-1">0.001% – 0.01%</span>
                      <p className="text-slate-300 text-[11px] mt-2 m-0 leading-relaxed">
                        Richiede processazione intracellulare, caricamento nel cleft MHC-II e legame stereospecifico alle CDR del TCR. Solo 1 clone su centomila si attiva.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-amber-950/80 border border-amber-500">
                      <span className="text-amber-300 font-mono text-[11px] block">SUPERANTIGENE (TSST-1)</span>
                      <span className="text-2xl font-black text-amber-300 block mt-1">Fino al 20%</span>
                      <p className="text-amber-100 text-[11px] mt-2 m-0 leading-relaxed">
                        Nessuna processazione. Ponte bivalente diretto tra catena Vβ e parte esterna di MHC-II: attivazione policlonale catastrofica e collasso circolatorio da shock tossico.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {evasionTab === 'myco_tb' && (
                <div className="space-y-3 text-xs font-sans">
                  <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2">
                    <span className="font-bold text-rose-300 text-sm block">
                      I Tre Punti di Blocco Fagolisosomiale di M. tuberculosis
                    </span>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                      <li><strong>Blocco Fusione:</strong> inibizione del reclutamento delle GTPasi Rab7 e delle proteine SNARE.</li>
                      <li><strong>Mancata Acidificazione:</strong> esclusione sterica della pompa protonica V-ATPase (pH fagosomiale rimane a ~6.4).</li>
                      <li><strong>Immunoevasione via DC-SIGN:</strong> switch dei PAMP con ipersecrezione di <strong>IL-10</strong> da parte delle cellule dendritiche.</li>
                    </ul>
                  </div>
                </div>
              )}

              {evasionTab === 'eosinophil_adcc' && (
                <div className="space-y-3 text-xs font-sans">
                  <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2">
                    <span className="font-bold text-emerald-300 text-sm block">
                      Cascata Effettrice Eosinofila contro il Tegumento Elmintico
                    </span>
                    <p className="text-slate-300 m-0 leading-relaxed">
                      1. Taglio proteolitico dei recettori <strong>PAR</strong> &rarr; Allarmine (IL-33, TSLP).
                      <br />
                      2. Differenziamento <strong>Th2</strong> &rarr; Secrezione di <strong>IL-4/IL-13</strong> (switch a IgE) e <strong>IL-5</strong> (reclutamento eosinofili).
                      <br />
                      3. I mastociti si armano via <strong>FcεRI</strong>; gli eosinofili riconoscono l'elminta opsonizzato da IgE.
                      <br />
                      4. Degranulazione per <strong>ADCC</strong> con rilascio mirato di <strong>Proteina Basica Maggiore (MBP)</strong> e lisi letale del parassita.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* TABELLA 22.1: EVASIONE MICROBICA */}
        <section id="tabella-22-1" className="space-y-4 pt-6 border-t border-slate-200">
          <div className="flex items-center gap-2 text-slate-900">
            <FileText className="w-5 h-5 text-blue-700 shrink-0" />
            <h3 className="text-xl font-bold font-serif-heading m-0">
              Tabella 22.1: Meccanismi Molecolari di Evasione Immunitaria dei Patogeni
            </h3>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs font-sans text-xs">
            <table className="min-w-full divide-y divide-slate-200 text-left">
              <thead className="bg-slate-50 font-mono text-[11px] text-slate-700 uppercase">
                <tr>
                  <th className="py-2.5 px-3">Patogeno</th>
                  <th className="py-2.5 px-3">Classe</th>
                  <th className="py-2.5 px-3">Bersaglio dell'Ospite</th>
                  <th className="py-2.5 px-3">Meccanismo Molecolare di Evasione</th>
                  <th className="py-2.5 px-3">Conseguenza Patologica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-800">
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-slate-950">Yersinia pestis</td>
                  <td className="py-2.5 px-3">Batterio Gram-negativo</td>
                  <td className="py-2.5 px-3 font-mono">TLR4 / MD-2</td>
                  <td className="py-2.5 px-3">Sintesi di LPS tetra-acilato non stimolatorio a 37 °C</td>
                  <td className="py-2.5 px-3">Mancata attivazione NF-κB; peste polmonare fulminante.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-slate-950">Helicobacter pylori</td>
                  <td className="py-2.5 px-3">Batterio microaerofilo</td>
                  <td className="py-2.5 px-3 font-mono">TLR4 e TLR5</td>
                  <td className="py-2.5 px-3">Modifica di LPS e mutazioni nella sequenza della flagellina</td>
                  <td className="py-2.5 px-3">Colonizzazione cronica asintomatica della mucosa gastrica.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-slate-950">Streptococcus pneumoniae</td>
                  <td className="py-2.5 px-3">Batterio Gram-positivo</td>
                  <td className="py-2.5 px-3 font-mono">Complemento & Anticorpi</td>
                  <td className="py-2.5 px-3">Oltre 90 sierotipi capsulari; mascheramento C3b e proteasi</td>
                  <td className="py-2.5 px-3">Assenza di memoria immunitaria crociata tra sierotipi.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-slate-950">Mycobacterium tuberculosis</td>
                  <td className="py-2.5 px-3">Batterio intracellulare</td>
                  <td className="py-2.5 px-3 font-mono">Fagolisosoma & DC-SIGN</td>
                  <td className="py-2.5 px-3">Blocco fusione fagosoma-lisosoma, blocco V-ATPase e switch a IL-10</td>
                  <td className="py-2.5 px-3">Sopravvivenza cronica nei macrofagi alveolari (granuloma).</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-slate-950">Herpes Simplex Virus (HSV)</td>
                  <td className="py-2.5 px-3">Virus a DNA</td>
                  <td className="py-2.5 px-3 font-mono">MHC-I & Neuroni</td>
                  <td className="py-2.5 px-3">Latenza in siti immunologicamente privilegiati (gangli sensoriali)</td>
                  <td className="py-2.5 px-3">Riattivazione ricorrente in condizioni di immunosoppressione.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-slate-950">Trypanosoma brucei</td>
                  <td className="py-2.5 px-3">Protozoo ematico</td>
                  <td className="py-2.5 px-3 font-mono">Anticorpi & Complemento</td>
                  <td className="py-2.5 px-3">Variazione antigenica continua delle glicoproteine VSG</td>
                  <td className="py-2.5 px-3">Onde periodiche di parassitemia e malattia del sonno.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-slate-950">Schistosoma spp.</td>
                  <td className="py-2.5 px-3">Elminta trematode</td>
                  <td className="py-2.5 px-3 font-mono">Sistema Immunitario</td>
                  <td className="py-2.5 px-3">Acquisizione di antigeni self dell'ospite sul tegumento</td>
                  <td className="py-2.5 px-3">Mascheramento ed infestazione vascolare cronica.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* TABELLA 22.2: MATRICE COMPARATIVA RISPOSTE EFFETTRICI */}
        <section id="tabella-22-2" className="space-y-4 pt-6 border-t border-slate-200">
          <div className="flex items-center gap-2 text-slate-900">
            <FileText className="w-5 h-5 text-purple-700 shrink-0" />
            <h3 className="text-xl font-bold font-serif-heading m-0">
              Tabella 22.2: Matrice Comparativa della Risposta Effettrice per Classe di Patogeno
            </h3>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs font-sans text-xs">
            <table className="min-w-full divide-y divide-slate-200 text-left">
              <thead className="bg-slate-50 font-mono text-[11px] text-slate-700 uppercase">
                <tr>
                  <th className="py-2.5 px-3">Classe Patogeno</th>
                  <th className="py-2.5 px-3">Patogeni Esemplari</th>
                  <th className="py-2.5 px-3">Sensing Innato</th>
                  <th className="py-2.5 px-3">Lignaggio T Guida</th>
                  <th className="py-2.5 px-3">Citochine Chiave</th>
                  <th className="py-2.5 px-3">Effettori Primari</th>
                  <th className="py-2.5 px-3">Meccanismo di Lisi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-800">
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-blue-900">Batteri Extracellulari</td>
                  <td className="py-2.5 px-3">S. pneumoniae, S. pyogenes</td>
                  <td className="py-2.5 px-3">TLR1/2/4, Complemento</td>
                  <td className="py-2.5 px-3 font-bold text-indigo-900">Th17 & Tfh</td>
                  <td className="py-2.5 px-3 font-mono">IL-17, IL-6, IL-23</td>
                  <td className="py-2.5 px-3">Neutrofili, Anticorpi (IgG)</td>
                  <td className="py-2.5 px-3">Fagocitosi mediata da opsonine e lisi MAC.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-rose-900">Batteri Intracellulari</td>
                  <td className="py-2.5 px-3">M. tuberculosis, Listeria</td>
                  <td className="py-2.5 px-3">TLR2, NOD2, PRR citosol</td>
                  <td className="py-2.5 px-3 font-bold text-rose-900">Th1 & CTL CD8+</td>
                  <td className="py-2.5 px-3 font-mono">IFN-γ, IL-12, TNF-α</td>
                  <td className="py-2.5 px-3">Macrofagi M1, Linfociti T γδ</td>
                  <td className="py-2.5 px-3">Burst respiratorio (iNOS, ROS) e lisi CTL con perforina.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-amber-900">Funghi</td>
                  <td className="py-2.5 px-3">Candida albicans, Aspergillus</td>
                  <td className="py-2.5 px-3">Dectina-1, Mincle, TLR2</td>
                  <td className="py-2.5 px-3 font-bold text-amber-900">Th17 & Th1</td>
                  <td className="py-2.5 px-3 font-mono">IL-17, IL-22, IFN-γ</td>
                  <td className="py-2.5 px-3">Neutrofili, Cellule di Paneth</td>
                  <td className="py-2.5 px-3">Defensine e fagocitosi neutrofila.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-emerald-900">Elminti (Metazoi)</td>
                  <td className="py-2.5 px-3">Ascaris, Schistosoma</td>
                  <td className="py-2.5 px-3">Proteasi (PAR), Allarmine</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-900">Th2 & ILC2</td>
                  <td className="py-2.5 px-3 font-mono">IL-4, IL-5, IL-13</td>
                  <td className="py-2.5 px-3">Eosinofili, Mastociti, IgE</td>
                  <td className="py-2.5 px-3">ADCC con rilascio di MBP e sweep intestinale.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-cyan-900">Virus</td>
                  <td className="py-2.5 px-3">Influenza, HSV, SARS-CoV-2</td>
                  <td className="py-2.5 px-3">TLR3/7/8/9, RIG-I, cGAS</td>
                  <td className="py-2.5 px-3 font-bold text-cyan-900">Th1 & CTL CD8+</td>
                  <td className="py-2.5 px-3 font-mono">IFN-I (α/β), IFN-γ, IL-12</td>
                  <td className="py-2.5 px-3">Cellule NK, CTL CD8+, IgG</td>
                  <td className="py-2.5 px-3">Apoptosi perforina-granzimi e neutralizzazione virale.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

              {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_QUESTIONS} lessonNumber={22} title="Verifica dell'Apprendimento · Lezione 22" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS} lessonNumber={22} title="Flashcard di Ripasso Attivo · Lezione 22" />
    </div>
  </article>
);
};
