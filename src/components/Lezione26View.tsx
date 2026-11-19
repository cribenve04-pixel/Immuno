import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  Activity,
  AlertTriangle,
  Award,
  CheckCircle,
  HelpCircle,
  ChevronRight,
  BookOpen,
  Zap,
  Target,
  Sparkles,
  Info,
  Clock,
  RotateCcw,
  Sliders,
  Play,
  Flame,
  FileText,
  Thermometer,
  Layers,
  Heart,
  Droplets,
  Syringe,
  Bug,
  Microscope,
  Baby,
  Dna,
  Wind,
  Pill
} from 'lucide-react';

interface Lezione26ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione26View: React.FC<Lezione26ViewProps> = ({ isSerif, fontSize }) => {
  // Simulator 1: Type I Hypersensitivity Phase Simulator
  const [hypersensitivityPhase, setHypersensitivityPhase] = useState<'sensitization' | 'immediate_reaction' | 'late_phase'>('sensitization');
  const [allergenDose, setAllergenDose] = useState<number>(60);

  // Simulator 2: Airway Remodeling & Biologics in Asthma
  const [selectedBiologic, setSelectedBiologic] = useState<'none' | 'omalizumab' | 'dupilumab' | 'mepolizumab' | 'tezepelumab' | 'ait_igg4'>('none');
  const [eosinophilInfiltration, setEosinophilInfiltration] = useState<number>(75);

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState<{ [key: number]: boolean }>({});

  // Flashcards State
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});


  const toggleFlashcard = (id: number) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectAnswer = (qId: number, optionIdx: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
    setShowResults((prev) => ({ ...prev, [qId]: true }));
  };

  const fontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const sizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // Computed metrics for Simulator 2 (Asthma Remodeling)
  const isBiologicActive = selectedBiologic !== 'none';
  const effectiveEosinophils =
    selectedBiologic === 'mepolizumab'
      ? Math.max(5, Math.round(eosinophilInfiltration * 0.1))
      : selectedBiologic === 'dupilumab'
      ? Math.max(10, Math.round(eosinophilInfiltration * 0.25))
      : selectedBiologic === 'tezepelumab'
      ? Math.max(8, Math.round(eosinophilInfiltration * 0.2))
      : selectedBiologic === 'omalizumab'
      ? Math.max(15, Math.round(eosinophilInfiltration * 0.35))
      : selectedBiologic === 'ait_igg4'
      ? Math.max(20, Math.round(eosinophilInfiltration * 0.4))
      : eosinophilInfiltration;

  const airwayResistance = Math.min(100, Math.max(15, Math.round(effectiveEosinophils * 0.9 + 15)));
  const mucusProduction =
    selectedBiologic === 'dupilumab' || selectedBiologic === 'tezepelumab'
      ? 20
      : selectedBiologic === 'mepolizumab'
      ? 45
      : 85;

  
  const FLASHCARDS = [
            {
              id: 1,
              front: "In che modo l'allergene dell'acaro della polvere Der p 1 facilita la propria penetrazione epiteliale?",
              back: "Der p 1 possiede un'attività enzimatica intrinseca di cisteina-proteasi: cliva attivamente le proteine delle giunzioni occludenti (occludina e claudina), disgregando le tight-junctions epiteliali e penetrando nella lamina propria respiratoria per raggiungere mastociti e DC."
            },
            {
              id: 2,
              front: "Quali sono le caratteristiche funzionali distintive delle cellule dendritiche DC2?",
              back: "Le DC2, maturate sotto lo stimolo di TSLP e allarmine epiteliali, esprimono il co-stimolatore OX40L (famiglia TNF) e sono costitutivamente incapaci di produrre IL-12. Questa assenza di IL-12 impedisce il differenziamento Th1, guidando il priming esclusivo verso Th2."
            },
            {
              id: 3,
              front: "Qual è la composizione in subunità del recettore FcεRI ad alta affinità per le IgE?",
              back: "È un eterotetramero composto da: 1 catena α Ig-like extracellulare che lega il frammento Fc (dominio Cε3) delle IgE con Ka ≈ 10^10 M^-1; 1 catena β a 4 passi transmembrana con ITAM; 1 omodimero γγ legato da ponte disolfuro contenente motivi ITAM per il reclutamento di SYK."
            },
            {
              id: 4,
              front: "Perché il dosaggio della triptasi sierica è dirimente nella diagnosi di shock anafilattico?",
              back: "La triptasi è una proteasi neutra immagazzinata selettivamente nei granuli dei mastociti (ma non dei basofili). Un rapido incremento sierico entro 1–2 ore dall'evento acuto costituisce la prova inconfutabile di una massiva degranulazione mastocitaria sistemica."
            },
            {
              id: 5,
              front: "Come agiscono le IgG4 come anticorpi bloccanti antiallergici via FcγRIIB?",
              back: "Le IgG4 (indotte da IL-10 durante l'immunoterapia AIT) non attivano il complemento; sequestrano l'allergene libero e si legano al recettore inibitorio FcγRIIB (CD32B) sui mastociti. Il motivo ITIM di FcγRIIB recluta la fosfatasi SHIP1, spegnendo la cascata attivatoria di FcεRI."
            },
            {
              id: 6,
              front: "Cosa spiega le reazioni anafilattoidi pseudoallergiche da farmaci con test RAST IgE negativo?",
              back: "Alcuni farmaci (chinoloni, curari, oppioidi, mezzi di contrasto) legano direttamente il recettore transmembrana mastocitario MRGPRX2, oppure attivano la via alternativa del complemento liberando le anafilotossine C3a e C5a: la degranulazione avviene senza alcun intervento delle IgE."
            }
          ];
  const QUIZ_QUESTIONS = [
            {
              id: 1,
              question: "Quale citochina allarmina prodotta dalle cellule epiteliali respiratorie agisce sulle cellule dendritiche inducendo l'espressione di OX40L e sopprimendo la sintesi di IL-12?",
              options: [
                "IL-12",
                "TSLP (Linfopoietina Timica Stromale)",
                "IFN-γ",
                "TGF-β"
              ],
              correct: 1,
              explanation: "TSLP rilasciata dall'epitelio stimola le cellule dendritiche immature trasformandole in DC2, caratterizzate dall'espressione di OX40L e dall'incapacità di produrre IL-12, prerequisito per il priming Th2."
            },
            {
              id: 2,
              question: "A quale evento molecolare è subordinata la degranulazione immediata dei mastociti precedentemente sensibilizzati?",
              options: [
                "Al legame monomerico di singole molecole di IgE al recettore FcεRI",
                "Al cross-linking multivalente di almeno due molecole di IgE contigue ancorate a FcεRI da parte dell'allergene",
                "Alla degradazione intracellulare del recettore CD40 da parte del proteasoma",
                "All'idrolisi delle catene pesanti delle IgG4 da parte della tripsina"
              ],
              correct: 1,
              explanation: "Il solo legame delle IgE a FcεRI sensibilizza il mastocita senza attivarlo. La degranulazione richiede obbligatoriamente il cross-linking multivalente indotto dall'allergene, che attiva le chinasi LYN/SYK e mobilita il calcio."
            },
            {
              id: 3,
              question: "Quale mediatore proteico preformato dei mastociti viene dosato nel siero per confermare retrospettivamente una diagnosi di shock anafilattico?",
              options: [
                "L'istamina (ha emivita di pochi minuti)",
                "La triptasi sierica",
                "La proteina C reattiva",
                "Il complemento C1q"
              ],
              correct: 1,
              explanation: "La triptasi è abbondantemente immagazzinata nei granuli mastocitari e ha un picco sierico dosabile entro 1-2 ore dall'evento; l'istamina decade troppo rapidamente per un dosaggio di routine."
            },
            {
              id: 4,
              question: "Quale farmaco costituisce il presidio salvavita di prima linea inderogabile nello shock anafilattico e per quale meccanismo?",
              options: [
                "I corticosteroidi orali ad alto dosaggio",
                "Gli antistaminici anti-H1 per via endovenosa lenta",
                "L'adrenalina per via intramuscolare (vasocostrizione α1, supporto cardiaco β1, broncodilatazione β2)",
                "L'aspirina a dosi antiaggreganti"
              ],
              correct: 2,
              explanation: "L'adrenalina intramuscolare è il solo farmaco salvavita immediato: contrasta l'ipotensione da vasodilatazione (α1), sostiene la pompa cardiaca (β1), rilascia la muscolatura bronchiale e arresta la degranulazione mastocitaria (β2)."
            },
            {
              id: 5,
              question: "Qual è il meccanismo patogenetico alla base dell'asma esacerbata da aspirina e altri FANS (sindrome AERD)?",
              options: [
                "I FANS stimolano direttamente i linfociti B a produrre IgE contro l'acido salicilico",
                "L'inibizione della ciclossigenasi (COX) devia l'acido arachidonico verso la 5-lipossigenasi, con accumulo massivo di leucotrieni cisteinilici broncocostrittori",
                "I FANS distruggono la membrana cellulare degli eosinofili liberando eparina",
                "I FANS bloccano il recettore adrenergico β2 bronchiale"
              ],
              correct: 1,
              explanation: "Bloccando la COX, i FANS impediscono la sintesi di prostaglandine deviando tutto il pool di acido arachidonico verso la 5-LOX, con sovraccumulo di leucotrieni C4, D4, E4 che provocano broncospasmo severo."
            },
            {
              id: 6,
              question: "Quale citochina prodotta dai Th2 è il fattore di crescita e differenziamento primario per i granulociti eosinofili a livello midollare?",
              options: [
                "IL-4",
                "IL-13",
                "IL-5",
                "IL-10"
              ],
              correct: 2,
              explanation: "L'interleuchina-5 (IL-5) è il mediatore cardine della linea eosinofila: promuove la maturazione midollare, il rilascio in circolo, la migrazione e la sopravvivenza tessutale degli eosinofili."
            },
            {
              id: 7,
              question: "In che modo le reazioni pseudoallergiche indotte da antibiotici chinolonici o curari attivano i mastociti in assenza di IgE?",
              options: [
                "Attivano direttamente il recettore transmembrana MRGPRX2",
                "Inducono la mutazione somatica del recettore FcεRI",
                "Bloccano la fosfatasi SHIP1 nel nucleo cellulare",
                "Inattivano la secrezione di adrenalina dalle surrenali"
              ],
              correct: 0,
              explanation: "I farmaci basici (chinoloni, curari, oppioidi) ingaggiano direttamente il recettore mastocitario MRGPRX2, inducendo degranulazione immediata e anafilassi pseudoallergica non mediata da IgE."
            },
            {
              id: 8,
              question: "Cosa caratterizza il rimodellamento bronchiale permanente nell'asma cronica rispetto alle altre allergie?",
              options: [
                "Una rapida e totale restitutio ad integrum delle mucose dopo ogni crisi",
                "Metaplasia caliciforme mucipara, ipertrofia della muscolatura liscia, ispessimento della membrana basale e fibrosi non reversibile",
                "La completa atrofia del tessuto muscolare bronchiale con dilatazione cistica",
                "La scomparsa irreversibile di tutti i vasi sanguigni polmonari"
              ],
              correct: 1,
              explanation: "L'asma cronica si differenzia per l'airway remodeling permanente causato dagli enzimi eosinofili e citochine Th2: iperplasia mucipara (IL-13), ipertrofia muscolare liscia e fibrosi subepiteliale che causano ostruzione cronica."
            },
            {
              id: 9,
              question: "Quale ruolo protettivo svolgono gli anticorpi della sottoclasse IgG4 indotti dall'immunoterapia specifica desensibilizzante (AIT)?",
              options: [
                "Attivano potentemente il complemento per eliminare i mastociti",
                "Sequestrano l'allergene e legano il recettore inibitorio FcγRIIB sui mastociti, spegnendo la degranulazione via ITIM/SHIP1",
                "Si legano al recettore dell'istamina H1 bloccandolo irreversibilmente",
                "Stimolano le cellule dendritiche a produrre massicce quantità di IL-4"
              ],
              correct: 1,
              explanation: "Le IgG4 fungono da 'anticorpi bloccanti' neutralizzando l'allergene e ingaggiano il recettore FcγRIIB sui mastociti, che trasduce un segnale inibitorio ITIM mediato da SHIP1 che blocca FcεRI."
            },
            {
              id: 10,
              question: "Qual è il meccanismo d'azione del farmaco biologico monoclonale Dupilumab impiegato nell'asma grave?",
              options: [
                "Lega e neutralizza direttamente l'istamina circolante",
                "Lega la catena recettoriale comune IL-4Rα, bloccando contemporaneamente la segnalazione sia di IL-4 che di IL-13",
                "Uccide le cellule staminali del midollo osseo per ADCC",
                "Inibisce la trascrizione del fattore FOXP3 nei linfociti T regolatori"
              ],
              correct: 1,
              explanation: "Dupilumab è un anticorpo monoclonale diretto contro la subunità IL-4Rα, componente condivisa del recettore di IL-4 e IL-13: blocca simultaneamente lo switch a IgE, l'ipersecrezione di muco e l'iperreattività bronchiale."
            }
          ];

  return (
    <article className={`space-y-12 ${fontClass} ${sizeClass} text-slate-800`}>
      {/* Textbook Hero Monograph Header */}
      <header className="border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-blue-700 uppercase tracking-wider mb-2">
          <span>Corso di Laurea Magistrale in Medicina e Chirurgia</span>
          <span>·</span>
          <span>Immunologia e Immunopatologia</span>
          <span>·</span>
          <span>Lezione 26</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight flex items-center gap-3">
          <span>Lezione 26: Immunopatologia & Ipersensibilità di Tipo I (Immediata)</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
          Dalla classificazione generale delle reazioni di ipersensibilità di Gell e Coombs (Tipi I–IV) all'analisi
          molecolare completa dell'ipersensibilità immediata mediata da IgE: biochimica degli allergeni (Der p 1 e
          attività enzimatica lesiva delle tight-junctions), sensing epiteliale tramite recettori PAR e rilascio di
          allarmine (TSLP, IL-33, IL-25), differenziamento delle cellule dendritiche DC2 (OX40L, blocco di IL-12) e
          priming Th2/ILC2 derivato dal circuito arcaico anti-elminti. Meccanismi molecolari della sensibilizzazione
          (switch a IgE via IL-4/IL-13/CD40L e armamento del recettore ad alta affinità FcεRI con subunità α, β, γγ)
          e dello scatenamento (cross-linking multivalente, chinasi LYN/SYK, picco di calcio ed esocitosi di granuli con
          istamina e triptasi sierica marcatrice di anafilassi). Sintesi lipidica de novo (PGD2 e leucotrieni cisteinilici
          LTC4/D4/E4), biologia degli eosinofili (IL-5, MBP, ECP, EPO) e fisiopatologia dell'airway remodeling nell'asma
          bronchiale cronica. Lo spettro clinico (prick test, sindrome orale allergica, shock anafilattico e adrenalina),
          le reazioni pseudoallergiche indipendenti da IgE (anafilotossine C3a/C5a e recettore farmacologico MRGPRX2), la
          finestra di opportunità dei primi 6 mesi di vita (teoria dell'igiene, allattamento, butirrato e induzione di
          Treg Foxp3+) e le moderne frontiere terapeutiche: immunoterapia specifica (SCIT verso Th1, SLIT verso Treg),
          il ruolo bloccante delle IgG4 via FcγRIIB e gli anticorpi monoclonali biologici (Omalizumab, Dupilumab,
          Mepolizumab, Tezepelumab).
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-sans text-slate-500 border-t border-slate-150 pt-4">
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Docente: <strong>Prof.ssa Ricciarda Galandrini</strong></span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>Data Lezione: <strong>27 Novembre 2025 (1ª e 2ª ora)</strong></span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-emerald-600" />
            <span>Sbobinatori: <strong>Gabriele Canini, Eleonora Bettero</strong></span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-indigo-600" />
            <span>Revisori: <strong>Ginevra Calandrella, Vittoria Campisi</strong></span>
          </div>
        </div>
      </header>

      {/* Chapter 26.1 */}
      <section id="sec-26-1" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">26.1</span> Introduzione all'Immunopatologia & Classificazione di Gell e Coombs
        </h2>
        <p>
          L'<strong>immunopatologia</strong> studia l'insieme delle condizioni patologiche in cui il sistema immunitario,
          anziché svolgere la sua fisiologica funzione omeostatica di difesa dell'organismo contro agenti infettivi o cellule
          trasformate, funziona in maniera aberrante o sregolata, divenendo esso stesso il <strong>motore primario di danno
          tissutale e malattia</strong>.
        </p>
        <p>
          Le risposte immunitarie adattative aberranti vengono storicamente classificate secondo lo schema canonico di{' '}
          <strong>Gell e Coombs (1963)</strong> in quattro distinti tipi di reazioni di ipersensibilità:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4 font-sans text-xs">
          <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-200 shadow-2xs space-y-1">
            <div className="flex items-center justify-between">
              <strong className="text-blue-900 font-bold">Tipo I (Immediata / IgE)</strong>
              <span className="px-1.5 py-0.5 rounded bg-blue-200 text-blue-800 font-mono text-[10px]">Minuti</span>
            </div>
            <p className="text-slate-700">
              Mediata da anticorpi <strong>IgE</strong> fissati ai recettori FcεRI su mastociti e basofili. Il cross-linking
              con allergeni ambientali innesca degranulazione esplosiva di amine vasoattive (istamina) e mediatori lipidici.
              Manifestazioni: asma, rinite, orticaria, shock anafilattico.
            </p>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 shadow-2xs space-y-1">
            <div className="flex items-center justify-between">
              <strong className="text-slate-900 font-bold">Tipo II (Citotossica / IgG-IgM)</strong>
              <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-800 font-mono text-[10px]">Ore</span>
            </div>
            <p className="text-slate-700">
              Anticorpi <strong>IgG o IgM diretti contro antigeni fissi di superficie</strong> o matrice cellulare.
              Danno mediato da attivazione del complemento (lisi MAC), fagocitosi o ADCC (anemia emolitica autoimmune,
              eritroblastosi fetale, rigetto iperacuto).
            </p>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 shadow-2xs space-y-1">
            <div className="flex items-center justify-between">
              <strong className="text-slate-900 font-bold">Tipo III (Immunocomplessi)</strong>
              <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-800 font-mono text-[10px]">Ore / Giorni</span>
            </div>
            <p className="text-slate-700">
              Deposizione tissutale di <strong>immunocomplessi solubili circolanti antigene-anticorpo (IgG/IgM)</strong> nei
              piccoli vasi glomerulari, sinoviali e cutanei, con attivazione del complemento e flogosi neutrofilica necrotizzante
              (LES, glomerulonefrite post-streptococcica, malattia da siero).
            </p>
          </div>

          <div className="p-3 bg-purple-50/80 rounded-xl border border-purple-200 shadow-2xs space-y-1">
            <div className="flex items-center justify-between">
              <strong className="text-purple-900 font-bold">Tipo IV (Cellulo-Mediata)</strong>
              <span className="px-1.5 py-0.5 rounded bg-purple-200 text-purple-800 font-mono text-[10px]">24–72 Ore</span>
            </div>
            <p className="text-slate-700">
              <strong>Indipendente da anticorpi</strong>; mediata direttamente da linfociti T effettori sensitizzati (Th1,
              Th17, CTL CD8+) e macrofagi attivati da IFN-γ (DTH: dermatite da contatto da nichel/edera velenosa, test alla
              tubercolina di Mantoux, rigetto cellulare acuto di trapianto).
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 26.2 */}
      <section id="sec-26-2" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">26.2</span> Anatomia Molecolare dell'Allergene & Proprietà Biochimiche
        </h2>
        <p>
          L'antigene bersaglio delle reazioni di Tipo I è definito <strong>allergene</strong>. A differenza delle malattie
          autoimmuni, un allergene è una molecola <strong>rigorosamente esogena ed estranea: non si tratta mai di antigeni self</strong>.
          Si tratta di sostanze innocue comunemente diffuse nell'ambiente, che entrano in contatto con l'organismo attraverso
          molteplici vie di esposizione:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Via inalatoria:</strong> pollini di graminacee, parietaria, betulla; spore fungine; forfora animale; acari della polvere domestica.</li>
          <li><strong>Via gastrointestinale (alimentare):</strong> proteine di arachidi, latte vaccino, albume d'uovo, soia, grano, frutta a guscio, crostacei.</li>
          <li><strong>Via parenterale / inoculazione:</strong> veleni di imenotteri (ape, vespa, calabrone), farmaci iniettabili (antibiotici β-lattamici).</li>
          <li><strong>Via cutanea / contatto diretto:</strong> lattice di gomma naturale, cosmetici, apteni proteici.</li>
        </ul>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-2 mt-3">
          <strong className="text-slate-900 text-sm block">Caratteristiche Chimico-Fisiche Universali degli Allergeni</strong>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <strong className="text-blue-900 block font-bold text-xs">1. Natura Proteica</strong>
              <p className="text-slate-600 mt-1">
                Tutti gli allergeni completi sono <strong>proteine o glicoproteine</strong>; ciò è biologicamente indispensabile
                per consentire la processazione e presentazione dei peptidi su molecole MHC di classe II per innescare una
                risposta cooperatrice <strong>T-dipendente</strong>.
              </p>
            </div>

            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <strong className="text-blue-900 block font-bold text-xs">2. Basso Peso Molecolare</strong>
              <p className="text-slate-600 mt-1">
                Massa molecolare compresa tra <strong>10 e 40 kDa</strong>: dimensione ideale per diffondere liberamente
                attraverso il gel mucoso delle vie respiratorie o della barriera intestinale.
              </p>
            </div>

            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <strong className="text-blue-900 block font-bold text-xs">3. Alta Solubilità & Stabilità</strong>
              <p className="text-slate-600 mt-1">
                Rapida eluizione da granuli o particelle aerodisperse (es. polline o feci dell'acaro) nel film liquido epiteliale,
                unitamente a stabilità strutturale in ambiente disidratato.
              </p>
            </div>

            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <strong className="text-rose-900 block font-bold text-xs">4. Attività Enzimatica Intrinseca</strong>
              <p className="text-slate-600 mt-1">
                Molti allergeni maggiori sono <strong>proteasi attive</strong>. L'esempio cardine illustrato dalla Prof.ssa
                Galandrini è <strong>Der p 1</strong> (allergene principale di <em>Dermatophagoides pteronyssinus</em>): è una
                cisteina-proteasi che cliva direttamente le proteine delle giunzioni occludenti epiteliali (<strong>occludine e
                claudine</strong>), aprendo varchi tra gli enterociti o le cellule respiratorie per facilitare la penetrazione
                tissutale profonda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 26.3 & 26.4: Priming Th2, DC2 & Elminti */}
      <section id="sec-26-3" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">26.3</span> Sensing Epiteliale, DC2 & Il Paradosso Evolutivo degli Elminti
        </h2>
        <p>
          Il priming della risposta allergica non è un evento passivo, ma è orchestrato attivamente dall'epitelio di barriera:
        </p>

        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 font-sans text-xs space-y-3">
          <div className="flex items-center justify-between">
            <strong className="text-blue-900 text-sm font-bold">Il Ruolo Proattivo dell'Epitelio: Recettori PAR & Le Tre Allarmine</strong>
            <span className="px-2 py-0.5 rounded bg-blue-200 text-blue-800 font-mono text-[10px] font-bold">Innesco Innato</span>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Le cellule epiteliali respiratorie e gastrointestinali esprimono recettori della famiglia <strong>PAR (Protease-Activated Receptors)</strong>{' '}
            e TLR specifici. L'attività proteasica degli allergeni taglia il dominio N-terminale extracellulare di PAR-2, generando un ligando
            tronco che auto-attiva il recettore accoppiato a proteine G. L'epitelio attivato sintetizza ed esocita tre citochine allarmine fondamentali:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-2.5 bg-white rounded-lg border border-blue-200">
              <strong className="text-slate-900 block font-bold">TSLP (Linfopoietina Timica Stromale)</strong>
              <p className="text-slate-600 mt-1">
                Prodotta da epitelio e fibroblasti. Si lega al recettore TSLPR sulle cellule dendritiche immature, inducendo una
                trasformazione fenotipica irreversibile in <strong>DC2</strong>: induzione di <strong>OX40L</strong> e blocco totale
                della produzione di IL-12.
              </p>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-blue-200">
              <strong className="text-slate-900 block font-bold">Interleuchina-33 (IL-33)</strong>
              <p className="text-slate-600 mt-1">
                Allarmina nucleare della famiglia IL-1 rilasciata per danno tissutale. Si lega al recettore ST2 su <strong>ILC2 e mastociti</strong>,
                stimolandoli a secernere massicce dosi di IL-13 e IL-5.
              </p>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-blue-200">
              <strong className="text-slate-900 block font-bold">Interleuchina-25 (IL-25 / IL-17E)</strong>
              <p className="text-slate-600 mt-1">
                Secreta dalle cellule con il ciuffo (Tuft cells); potente attivatore delle cellule linfoidi innate di tipo 2 (ILC2), che
                amplificano la secrezione precoce di citochine di Tipo 2 ancor prima dell'arrivo dei linfociti T adattativi.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 font-sans text-xs mt-3">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <strong className="text-slate-900 text-sm block font-bold">La Trasformazione della Cellula Dendritica: Il Fenotipo DC2</strong>
            <p className="text-slate-700 leading-relaxed">
              Come sottolineato con enfasi dalla Prof.ssa Galandrini, la cellula dendritica stimolata da TSLP e citochine epiteliali subisce
              una riprogrammazione funzionale cruciale:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>
                <strong>Espressione del Co-stimolatore OX40L (CD252):</strong> membro della superfamiglia di TNF/CD40. L'interazione tra OX40L
                sulla DC e OX40 (CD134) sul linfocita T CD4+ naive è il segnale co-stimolatorio obbligato per stabilizzare il fattore di trascrizione
                master <strong>GATA-3</strong>.
              </li>
              <li>
                <strong>Incapacità Assoluta di Produrre IL-12:</strong> La DC2 perde costitutivamente la capacità di sintetizzare IL-12 (la citochina
                istruttrice del lignaggio Th1). L'assenza di IL-12, unita al microambiente ricco di IL-4/IL-13 prodotto da ILC2 e basofili,
                polarizza i linfociti T naive irreversibilmente verso il subset <strong>T Helper 2 (Th2)</strong>.
              </li>
            </ul>
          </div>

          <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1">
            <strong className="text-amber-900 text-sm block font-bold">La Parentela Evolutiva: Allergie come Mimetismo degli Elminti</strong>
            <p className="text-slate-700 leading-relaxed">
              Perché il sistema immunitario scatena una risposta così violenta e autodistruttiva contro un frammento di polline o un acaro?
              Dal punto di vista filogenetico, la via Th2/IgE/mastociti/eosinofili è il <strong>programma di difesa specialistico selezionato
              in milioni di anni per combattere ed eliminare i vermi parassiti multicellulari giganti (elminti: nematodi, trematodi, cestodi)</strong>,
              troppo grandi per essere fagocitati da neutrofili o macrofagi. Gli allergeni ambientali condividono una sorprendente omologia
              strutturale e proteolitica con i determinanti antigenici degli elminti: l'allergia rappresenta un <em>errore di identificazione</em>{' '}
              da parte di una macchina immunologica arcaica priva dei suoi bersagli naturali nel mondo moderno asettico.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 26.5 & 26.6: Sensitisation & Cross-linking FcεRI */}
      <section id="sec-26-5" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">26.4</span> La Fase di Sensibilizzazione & L'Armamento del Recettore FcεRI
        </h2>
        <p>
          La patogenesi dell'ipersensibilità immediata si sviluppa in due fasi cronologicamente e clinicamente distinte:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 font-sans text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-slate-900 text-sm font-bold">FASE 1: SENSIBILIZZAZIONE (Asintomatica)</strong>
              <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-mono text-[10px] font-bold">7–10 Giorni</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Avviene al primo incontro con l'allergene e richiede i tempi fisiologici della risposta immunitaria adattativa primaria:
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-slate-700">
              <li>Cattura dell'allergene da parte delle DC epiteliali e migrazione nei linfonodi drenanti.</li>
              <li>Presentazione dei peptidi su MHC-II e priming dei linfociti Th2.</li>
              <li>Cooperazione B-T nel centro germinativo mediata da <strong>CD40L-CD40</strong> e secrezione di <strong>IL-4 e IL-13</strong>.</li>
              <li>Switch isotipico delle plasmacellule verso la produzione di <strong>anticorpi IgE</strong> antigene-specifici.</li>
              <li>
                Le IgE entrano in circolo ed hanno un'emivita sierica libera brevissima (~2 giorni); tuttavia, vengono rapidamente captate
                e legate ad altissima affinità dalla porzione Fc al recettore <strong>FcεRI</strong> espresso sulla superficie dei mastociti
                tessutali e dei basofili circolanti.
              </li>
            </ol>
            <p className="text-slate-600 italic">
              Al termine di questa fase, l'individuo è <strong>"sensibilizzato"</strong>: i mastociti sono armati di IgE specifiche ma
              completamente quiescenti; il soggetto non manifesta alcun sintomo clinico.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-rose-900 text-sm font-bold">FASE 2: REAZIONE EFFETTRICE (Scatenamento)</strong>
              <span className="px-2 py-0.5 rounded bg-rose-200 text-rose-800 font-mono text-[10px] font-bold">Pochi Minuti</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Si verifica al secondo o successivo contatto con il medesimo allergene:
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-slate-700">
              <li>
                L'allergene multivalente penetra nella mucosa e lega contemporaneamente i frammenti Fab di due o più molecole di IgE contigue
                ancorate ai recettori FcεRI (<strong>cross-linking del recettore</strong>).
              </li>
              <li>
                L'avvicinamento spaziale dei recettori attiva le tirosin-chinasi <strong>LYN</strong> (famiglia Src) e <strong>SYK</strong>{' '}
                (famiglia Syk/ZAP-70), che fosforilano i motivi ITAM delle catene β e γγ.
              </li>
              <li>
                Reclutamento di PLCγ, idrolisi di PIP2 in IP3 e DAG con massivo rilascio di <strong>Ca²⁺ intracellulare</strong>.
              </li>
              <li>
                Fusione immediata della membrana dei granuli elettrondensi con la membrana plasmatica ed esocitosi esplosiva di mediatori
                preformati (<strong>istamina, triptasi, eparina</strong>) entro <strong>5–15 minuti</strong> (ipersensibilità immediata).
              </li>
              <li>
                Attivazione della fosfolipasi A2 con sintesi di mediatori lipidici (prostaglandine e leucotrieni) e trascrizione di citochine.
              </li>
            </ol>
          </div>
        </div>

        {/* Structural Architecture of FceRI */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs font-sans text-xs space-y-2">
          <strong className="text-slate-900 text-sm block font-bold">Architettura Molecolare del Recettore ad Alta Affinità FcεRI</strong>
          <p className="text-slate-700 leading-relaxed">
            FcεRI possiede una costante di affinità straordinariamente elevata per il frammento Fc delle IgE (Ka ≈ 10¹⁰ M⁻¹),
            tanto che una volta legata, l'IgE rimane ancorata per mesi alla membrana cellulare:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
              <span className="font-bold text-blue-900 block">Catena α (Ig-like extracellulare)</span>
              <span className="text-slate-600">
                Possiede due domini Ig extracellulari che legano con altissima affinità il dominio Cε3 delle IgE. Possiede una
                coda citoplasmatica cortissima priva di capacità di trasduzione del segnale.
              </span>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
              <span className="font-bold text-purple-900 block">Catena β (Tetraspanin-like)</span>
              <span className="text-slate-600">
                Attraversa quattro volte la membrana cellulare; contiene un motivo ITAM citoplasmatico che amplifica il segnale attivatorio
                favorendo il reclutamento della chinasi LYN.
              </span>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
              <span className="font-bold text-emerald-900 block">Omodimero γγ (Disolfuro)</span>
              <span className="text-slate-600">
                Due catene identiche legate da ponte disolfuro, ciascuna contenente un motivo ITAM canonico: una volta fosforilate, le catene
                γ reclutano i doveri domini SH2 della chinasi SYK per innescare la cascata del calcio.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 26.7: Mediators of Type I Reaction */}
      <section id="sec-26-7" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">26.5</span> Mediatori Preformati & Neoformati: Istamina, Triptasi, PGD2 & Leucotrieni
        </h2>
        <p>
          I mediatori rilasciati o sintetizzati dai mastociti si dividono in tre classi biochimiche e temporali:
        </p>
        <div className="space-y-3 font-sans text-xs">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <strong className="text-slate-900 text-sm block font-bold">1. Mediatori Preformati nei Granuli (Rilascio in 0–15 minuti)</strong>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>
                <strong>Istamina:</strong> amina vasoattiva decarbossilata dall'istidina. Legandosi ai recettori H1 endoteliali induce rapida
                contrazione delle cellule endoteliali con apertura di giunzioni intercellulari (aumento della permeabilità vascolare ed edema),
                vasodilatazione arteriolare riflessa (arrossamento), contrazione della muscolatura liscia bronchiale (broncospasmo) e stimolazione
                delle terminazioni nervose sensitive amieliniche (prurito cutaneo e starnuti a salve).
              </li>
              <li>
                <strong>Triptasi:</strong> proteasi neutra abbondantemente immagazzinata nei granuli dei mastociti (ma scarsamente nei basofili).
                <span className="text-blue-900 font-bold"> È il marcatore diagnostico sierologico cardine dello shock anafilattico</span>:
                in caso di collasso sospetto, il riscontro di un picco dei livelli sierici di triptasi entro 1–2 ore dall'evento documenta inequivocabilmente
                l'avvenuta degranulazione mastocitaria sistemica.
              </li>
              <li><strong>Eparina e Proteoglicani:</strong> formano la matrice elettrondensa che impacchetta l'istamina; hanno azione anticoagulante locale.</li>
            </ul>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <strong className="text-slate-900 text-sm block font-bold">2. Mediatori Lipidici Neoformati (Sintesi in 10–30 minuti)</strong>
            <p className="text-slate-700 leading-relaxed">
              L'incremento di calcio attiva la <strong>Fosfolipasi A2 (PLA2)</strong> che distacca l'<strong>acido arachidonico</strong> dai
              fosfolipidi di membrana. L'acido arachidonico viene metabolizzato attraverso due vie enzimatiche:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>
                <strong>Via della Ciclossigenasi (COX-1/COX-2):</strong> porta alla sintesi della <strong>Prostaglandina D2 (PGD2)</strong>,
                che causa vasodilatazione prolungata, broncocostrizione e agisce come potente chemioattrattante per linfociti Th2 ed eosinofili via CRTH2.
              </li>
              <li>
                <strong>Via della 5-Lipossigenasi (5-LOX):</strong> porta alla sintesi dei <strong>Leucotrieni Cisteinilici (LTC4, LTD4, LTE4)</strong>{' '}
                (noti storicamente come SRS-A, <em>Slow Reacting Substance of Anaphylaxis</em>). Sono <strong>1.000 volte più potenti dell'istamina</strong>{' '}
                nel provocare broncocostrizione persistente e aumentano marcatamente la secrezione mucosa bronchiale.
              </li>
              <li>
                <strong>Rilevanza Farmacologica (FANS & AERD):</strong> I farmaci anti-infiammatori non steroidei (FANS, come l'aspirina) inibiscono
                la ciclossigenasi. In pazienti predisposti, il blocco di COX devia massivamente tutto l'acido arachidonico verso la via della
                5-lipossigenasi: l'accumulo incontrollato di leucotrieni scatena asma bronchiale grave e rinite vasomotoria (sindrome AERD / asma da aspirina).
              </li>
            </ul>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <strong className="text-slate-900 text-sm block font-bold">3. Citochine & Chemochine Sintetizzate ex novo (Fase Tardiva, 4–8 ore)</strong>
            <p className="text-slate-700 leading-relaxed">
              Attivazione delle MAP-chinasi e NF-κB con sintesi di TNF-α, IL-1, IL-6, IL-4, IL-13 e soprattutto <strong>IL-5</strong>,
              che sostiene il reclutamento e l'attivazione tissutale dei granulociti eosinofili.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 26.8: Eosinophils & Airway Remodeling */}
      <section id="sec-26-8" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">26.6</span> Eosinofili & Rimodellamento Tissutale Permanente nell'Asma Bronchiale
        </h2>
        <p>
          I granulociti eosinofili (fisiologicamente l'1–3% della formula leucocitaria nel sangue periferico) sono le cellule
          esecutrici del danno tissutale cronico:
        </p>
        <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 font-sans text-xs space-y-2">
          <strong className="text-purple-900 text-sm block font-bold">Reclutamento ed Attivazione degli Eosinofili</strong>
          <p className="text-slate-700 leading-relaxed">
            L'<strong>Interleuchina-5 (IL-5)</strong> prodotta dai linfociti Th2 stimola a livello del midollo osseo la differenziazione
            dei precursori ematopoietici in eosinofili, aumentandone la quota circolante (<strong>eosinofilia</strong>).
            Le citochine IL-4 e IL-13 sovraregolano la molecola di adesione <strong>VCAM-1</strong> sull'endotelio polmonare; le chemochine
            eotassine (CCL11, CCL24, CCL26) legano il recettore <strong>CCR3</strong> guidando la diapedesi degli eosinofili nella parete bronchiale.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Nel tessuto respiratorio, gli eosinofili degranulano rilasciando una batteria di molecole altamente citotossiche per l'epitelio dell'ospite:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
            <div className="p-2 bg-white rounded border border-purple-200">
              <strong className="text-purple-900 block font-bold">Proteina Basica Maggiore (MBP)</strong>
              <span className="text-slate-600 text-[11px]">Altamente cationica; induce desquamazione epiteliale e ciliostasi bronchiale.</span>
            </div>
            <div className="p-2 bg-white rounded border border-purple-200">
              <strong className="text-purple-900 block font-bold">Proteina Cationica Eosinofila (ECP)</strong>
              <span className="text-slate-600 text-[11px]">Forma pori litici sulle membrane cellulari dei parassiti e delle cellule epiteliali umane.</span>
            </div>
            <div className="p-2 bg-white rounded border border-purple-200">
              <strong className="text-purple-900 block font-bold">Perossidasi Eosinofila (EPO)</strong>
              <span className="text-slate-600 text-[11px]">Catalizza la sintesi di acido ipobromoso e radicali liberi, provocando stress ossidativo.</span>
            </div>
            <div className="p-2 bg-white rounded border border-purple-200">
              <strong className="text-purple-900 block font-bold">Neurotossina Derivata (EDN)</strong>
              <span className="text-slate-600 text-[11px]">Ribonucleasi con potente attività antivirale e neurotossica sulle terminazioni nervose.</span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-2 mt-3">
          <strong className="text-slate-900 text-sm block font-bold">Il Rimodellamento Bronchiale Permanente (Airway Remodeling)</strong>
          <p className="text-slate-700 leading-relaxed">
            Come chiarito dalla Prof.ssa Galandrini mettendo a confronto l'istologia del bronchiolo sano rispetto a quello asmatico:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>Nelle manifestazioni allergiche acute (alimentari o cutanee) il tessuto ritorna rapidamente alla normale anatomia (<em>restitutio ad integrum</em>).</li>
            <li>
              Nell'<strong>asma bronchiale cronica</strong>, la continua degranulazione di eosinofili e mastociti innesca un processo infiammatorio
              persistente con <strong>riarrangiamento strutturale permanente non reversibile</strong>:
              <ul className="list-circle pl-5 mt-1 space-y-0.5">
                <li><strong>Metaplasia e iperplasia delle cellule caliciformi mucipare (goblet cells):</strong> guidata da IL-13, genera tappi di muco denso che ostruiscono il lume.</li>
                <li><strong>Ipertrofia e iperplasia della tonaca muscolare liscia:</strong> la parete bronchiale si ispessisce enormemente divenendo iperreattiva.</li>
                <li><strong>Ispessimento della lamina reticolare subepiteliale:</strong> massiccia deposizione di collagene e fibrosi.</li>
                <li><strong>Neoangiogenesi bronchiale:</strong> dilatazione vasale cronica con essudazione continua.</li>
              </ul>
            </li>
          </ul>
          <p className="text-slate-700 font-semibold mt-1">
            Correlato Clinico: Si instaura una <strong>broncopatia cronica ostruttiva</strong> in cui l'aria viene intrappolata nei polmoni;
            il deficit ventilatorio caratteristico riguarda primariamente la <strong>fase espiratoria</strong> (broncospasmo espiratorio, sibili e dispnea).
          </p>
        </div>
      </section>

      {/* Simulator 1: Type I Hypersensitivity Phase Lab */}
      <section id="sim-type1-hypersensitivity-phases" className="p-6 rounded-2xl bg-slate-900 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-mono text-[11px] font-bold uppercase tracking-wider">
              Laboratorio Interattivo 1
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white mt-1">
              Simulatore Bifasico dell'Ipersensibilità di Tipo I: Sensibilizzazione vs Scatenamento
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">Cascata Molecolare FcεRI in Tempo Reale</span>
        </div>

        {/* Phase Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => setHypersensitivityPhase('sensitization')}
            className={`p-3 rounded-xl border text-left transition-all ${
              hypersensitivityPhase === 'sensitization'
                ? 'bg-blue-600/30 border-blue-400 text-white'
                : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <div className="font-bold text-xs">Fase 1: Sensibilizzazione</div>
            <div className="text-[11px] text-slate-400 mt-1">Priming Th2, IgE su FcεRI (Asintomatica)</div>
          </button>

          <button
            onClick={() => setHypersensitivityPhase('immediate_reaction')}
            className={`p-3 rounded-xl border text-left transition-all ${
              hypersensitivityPhase === 'immediate_reaction'
                ? 'bg-rose-600/30 border-rose-400 text-white'
                : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <div className="font-bold text-xs">Fase 2: Reazione Immediata</div>
            <div className="text-[11px] text-slate-400 mt-1">Cross-linking, Ca++, Istamina e Triptasi</div>
          </button>

          <button
            onClick={() => setHypersensitivityPhase('late_phase')}
            className={`p-3 rounded-xl border text-left transition-all ${
              hypersensitivityPhase === 'late_phase'
                ? 'bg-purple-600/30 border-purple-400 text-white'
                : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <div className="font-bold text-xs">Fase 3: Reazione Tardiva</div>
            <div className="text-[11px] text-slate-400 mt-1">Leucotrieni, IL-5 ed Eosinofili (4–8h)</div>
          </button>
        </div>

        {/* Real-time Dynamic Status Bars */}
        <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-[10px] block">LIVELLO IgE SU FcεRI</span>
              <strong className="text-sm font-bold text-cyan-400 block mt-1">
                {hypersensitivityPhase === 'sensitization' ? '100% (Armamento Completo)' : 'Legate & Cross-linkate'}
              </strong>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-cyan-400 h-full w-full" />
              </div>
            </div>

            <div className="p-3 bg-slate-900 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-[10px] block">FLUSSO CALCIO INTRACELLULARE</span>
              <strong className="text-sm font-bold block mt-1 text-white">
                {hypersensitivityPhase === 'sensitization'
                  ? 'Basale (0%)'
                  : hypersensitivityPhase === 'immediate_reaction'
                  ? 'Picco Esplosivo (98%)'
                  : 'Moderato (35%)'}
              </strong>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-amber-400 h-full transition-all duration-300"
                  style={{
                    width:
                      hypersensitivityPhase === 'sensitization'
                        ? '5%'
                        : hypersensitivityPhase === 'immediate_reaction'
                        ? '98%'
                        : '35%'
                  }}
                />
              </div>
            </div>

            <div className="p-3 bg-slate-900 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-[10px] block">DEGRANULAZIONE (ISTAMINA/TRIPTASI)</span>
              <strong className="text-sm font-bold block mt-1 text-white">
                {hypersensitivityPhase === 'immediate_reaction'
                  ? 'Massiva (100% - Picco Sierico)'
                  : hypersensitivityPhase === 'late_phase'
                  ? 'Granuli Esauriti'
                  : 'Assente (Granuli Intatti)'}
              </strong>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-rose-500 h-full transition-all duration-300"
                  style={{
                    width: hypersensitivityPhase === 'immediate_reaction' ? '100%' : '5%'
                  }}
                />
              </div>
            </div>

            <div className="p-3 bg-slate-900 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-[10px] block">INFILTRAZIONE EOSINOFILI</span>
              <strong className="text-sm font-bold block mt-1 text-white">
                {hypersensitivityPhase === 'late_phase' ? 'Massiva (IL-5 / Eotassina)' : 'Assente / Bassa'}
              </strong>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-purple-500 h-full transition-all duration-300"
                  style={{
                    width: hypersensitivityPhase === 'late_phase' ? '90%' : '10%'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Context Card */}
        <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 font-sans text-xs text-slate-200 leading-relaxed">
          {hypersensitivityPhase === 'sensitization' && (
            <p className="m-0">
              <strong>Fase 1 (Sensibilizzazione):</strong> L'antigene esogeno è stato processato dalle DC2 e presentato ai CD4+ con
              espressione di OX40L. I linfociti Th2 hanno rilasciato IL-4 e IL-13, guidando lo switch a <strong>IgE</strong>. Le IgE
              si sono legate alla subunità α del recettore <strong>FcεRI</strong> sui mastociti tessutali. Non c'è attivazione
              delle chinasi LYN/SYK: le cellule sono cariche ma asintomatiche.
            </p>
          )}
          {hypersensitivityPhase === 'immediate_reaction' && (
            <p className="m-0">
              <strong>Fase 2 (Reazione Immediata, 5–15 min):</strong> Il nuovo contatto con l'allergene induce il{' '}
              <strong>cross-linking simultaneo</strong> delle IgE su FcεRI. Gli ITAM delle catene γγ vengono fosforilati da LYN e
              SYK, attivando PLCγ con massivo afflusso di Ca²⁺ nel citosol. I granuli si fondono con la membrana: rilascio
              esplosivo di <strong>istamina</strong> (vasodilatazione, edema, broncospasmo) e <strong>triptasi</strong> (dosabile nel siero
              per confermare anafilassi).
            </p>
          )}
          {hypersensitivityPhase === 'late_phase' && (
            <p className="m-0">
              <strong>Fase 3 (Reazione Tardiva, 4–8 ore):</strong> La fosfolipasi A2 metabolizza l'acido arachidonico in{' '}
              <strong>leucotrieni cisteinilici (LTC4, LTD4, LTE4)</strong>, broncocostrittori 1.000 volte più potenti dell'istamina.
              Viene secreta <strong>IL-5</strong>, che richiama dal midollo osseo granulociti <strong>eosinofili</strong> carichi di MBP ed
              ECP, innescando desquamazione dell'epitelio ciliato e rimodellamento bronchiale.
            </p>
          )}
        </div>
      </section>

      {/* Chapter 26.9: Clinical Spectrum */}
      <section id="sec-26-9" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">26.7</span> Spettro Clinico: Dal Prick Test allo Shock Anafilattico
        </h2>
        <p>
          Le manifestazioni cliniche variano drammaticamente in base alla porta d'ingresso e alla quantità dell'allergene:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <strong className="text-slate-900 text-sm font-bold block">1. Cute: Prick Test & Orticaria</strong>
            <p className="text-slate-700 leading-relaxed">
              <strong>Prick Test:</strong> Inoculazione epidermica superficiale di gocce di estratti allergenici con lancetta sottile.
              Nei soggetti sensibilizzati, l'allergene cross-linka le IgE sui mastociti cutanei del derma superficiale: entro{' '}
              <strong>15–30 minuti</strong> compare la tipica <strong>reazione ponfo-eritematosa</strong> (ponfo edematoso centrale
              pruriginoso circondato da alone di eritema da vasodilatazione riflessa assonica). Se il diametro del ponfo supera di ≥ 3 mm
              il controllo negativo, il test è positivo.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>Orticaria:</strong> Ponfi multipli migranti a margini geografici pruriginosi causati da istamina nel derma.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <strong className="text-slate-900 text-sm font-bold block">2. Tratto Gastrointestinale: Allergie Alimentari</strong>
            <p className="text-slate-700 leading-relaxed">
              Gli allergeni alimentari (es. arachidi) penetrano la mucosa enterica. Le <strong>cellule Tuft</strong> (chemiosensori)
              producono TSLP e IL-25; cellule tipo SAP campionano gli antigeni favorendo il cross-linking dei mastociti della lamina propria.
            </p>
            <p className="text-slate-700 leading-relaxed">
              La degranulazione scatena ipermotilità, vasodilatazione e contrazione della muscolatura liscia (vomito, dolori colici, diarrea profusa).
              Se l'allergene viene assorbito nel circolo portale e sistemico, possono comparire manifestazioni a distanza: la{' '}
              <strong>Sindrome Orale Allergica (SOA)</strong> con edema improvviso di labbra, lingua e glottide, oppure anafilassi sistemica.
            </p>
          </div>

          <div className="p-3.5 bg-rose-50/70 border border-rose-300 rounded-xl space-y-2">
            <strong className="text-rose-900 text-sm font-bold block">3. Emergenza Medica: Lo Shock Anafilattico</strong>
            <p className="text-slate-700 leading-relaxed">
              Si verifica quando l'allergene (veleno di vespa, penicillina e.v., arachidi assorbite) entra rapidamente in circolo ematico:
              si assiste alla <strong>degranulazione massiva e sincrona di tutti i mastociti perivascolari e basofili</strong> dell'organismo.
            </p>
            <p className="text-slate-700 leading-relaxed">
              La tempesta di istamina e PAF genera vasodilatazione arteriolare generalizzata ed estravasazione massiva di plasma nel terzo spazio:
              <strong>ipotensione arteriosa profonda, collasso cardiocircolatorio asfittico</strong> ed <strong>edema ostruttivo della glottide</strong>.
            </p>
            <div className="p-2.5 bg-white rounded-lg border border-rose-400 font-bold text-rose-950">
              Farmaco Salvavita: ADRENALINA (Epinefrina)
              <p className="text-xs font-normal text-slate-700 mt-0.5">
                Iniezione intramuscolare immediata nella faccia antero-laterale della coscia (0.3–0.5 mg nell'adulto).
                Azione α₁ (vasocostrizione sistemica), β₁ (supporto inotropo) e β₂ (broncodilatazione e blocco della degranulazione mastocitaria via cAMP).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 26.10: Pseudoallergic Reactions (MRGPRX2 & Complement) */}
      <section id="sec-26-10" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">26.8</span> Reazioni Pseudoallergiche Indipendenti da IgE: C3a/C5a & Il Recettore MRGPRX2
        </h2>
        <p>
          Un concetto clinico e laboratoristico fondamentale affrontato dalla Prof.ssa Galandrini riguarda le reazioni anafilattoidi:
          in molti pazienti si manifestano quadri clinici identici all'allergia immediata, ma{' '}
          <strong>i test RAST e la ricerca di IgE specifiche risultano completamente negativi</strong>.
          Queste reazioni sono <strong>indipendenti da IgE</strong> e avvengono tramite due vie biologiche distinte:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 font-sans text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <strong className="text-slate-900 text-sm font-bold block">1. Attivazione Diretta del Complemento (Anafilotossine C3a & C5a)</strong>
            <p className="text-slate-700 leading-relaxed">
              Alcuni complessi macromolecolari o lipidi (inclusi determinanti di alcune arachidi o liposomi sintetici) attivano
              direttamente la via alternativa del complemento in assenza di anticorpi.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Il clivaggio di C3 e C5 rilascia le anafilotossine solubili <strong>C3a e C5a</strong>: queste molecole legano specifici
              recettori GPCR (<strong>C3aR e C5aR</strong>) espressi costitutivamente sulla membrana di mastociti e basofili, inducendo
              l'esocitosi dei granuli e rilascio di istamina in modo indistinguibile dalla via FcεRI.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <strong className="text-slate-900 text-sm font-bold block">2. Attivazione Farmacologica Diretta via Recettore MRGPRX2</strong>
            <p className="text-slate-700 leading-relaxed">
              I mastociti umani residenti nei tessuti connettivi esprimono un recettore di membrana a sette domini transmembrana chiamato{' '}
              <strong>MRGPRX2 (Mas-related G protein-coupled receptor member X2)</strong>.
            </p>
            <p className="text-slate-700 leading-relaxed">
              MRGPRX2 possiede una tasca di legame policationica che riconosce direttamente numerosi farmaci di uso comune:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li><strong>Antibiotici chinolonici:</strong> Ciprofloxacina, Levofloxacina.</li>
              <li><strong>Miorilassanti e curarici anestetici:</strong> Atracurio, Rocuronio (anafilassi perioperatoria).</li>
              <li><strong>Oppioidi:</strong> Morfina, Codeina.</li>
              <li><strong>Mezzi di contrasto iodati idrosolubili.</strong></li>
            </ul>
            <p className="text-slate-600 italic">
              Il farmaco si lega direttamente a MRGPRX2 scatenando degranulazione acuta al primo contatto farmacologico, senza alcuna
              necessità di sensibilizzazione pregressa né produzione di IgE.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 26.11: Multifactorial Etiology & 6-month Opportunity Window */}
      <section id="sec-26-11" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">26.9</span> Eziopatogenesi Multifattoriale & La Finestra di Opportunità dei Primi 6 Mesi
        </h2>
        <p>
          Il <strong>25–30% della popolazione dei paesi occidentali</strong> soffre di patologie allergiche. L'allergia non è
          una malattia monogenica ereditaria classica, ma una <strong>patologia multifattoriale complessa</strong> scaturita
          dall'integrazione di fattori genetici, epigenetici e ambientali:
        </p>

        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 font-sans text-xs space-y-3">
          <div className="flex items-center justify-between">
            <strong className="text-blue-900 text-sm font-bold">La Teoria dell'Igiene & La Finestra dei Primi 6 Mesi di Vita</strong>
            <span className="px-2 py-0.5 rounded bg-blue-200 text-blue-800 font-mono text-[10px] font-bold">Nature Reviews Immunology</span>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Dagli anni '70 a oggi, nei paesi industrializzati l'incidenza di malattie infettive (es. tubercolosi) è crollata verticalmente,
            mentre l'incidenza di asma, rinite e allergie alimentari è aumentata esponenzialmente. Questo fenomeno trova spiegazione
            nella <strong>Teoria dell'Igiene</strong> e nella colonizzazione del microbiota nei <strong>primi 6 mesi di vita</strong>:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3 bg-white rounded-lg border border-emerald-300">
              <strong className="text-emerald-900 block font-bold text-xs">Fattori Protettivi (Eubiosi & Tolleranza)</strong>
              <ul className="list-disc pl-4 mt-1 text-slate-700 space-y-1">
                <li><strong>Parto naturale vaginale:</strong> trasmissione di <em>Lactobacillus</em> e batteri fecali materni.</li>
                <li><strong>Allattamento al seno prolungato:</strong> oligosaccaridi HMO che nutrono <em>Bifidobacterium</em>.</li>
                <li><strong>Vita rurale e contatto con animali da cortile:</strong> esposizione precoce a endotossine batteriche saprofitiche.</li>
                <li><strong>Famiglie numerose e frequenza precoce dell'asilo nido:</strong> continuo scambio di microrganismi.</li>
                <li><strong>Svezzamento a 4–6 mesi:</strong> fibre vegetali fermentate in <strong>butirrato (SCFA)</strong>, che inibisce HDAC e stabilizza <strong>FOXP3 nei linfociti Treg</strong> producenti IL-10 e TGF-β.</li>
              </ul>
            </div>

            <div className="p-3 bg-white rounded-lg border border-rose-300">
              <strong className="text-rose-900 block font-bold text-xs">Fattori di Rischio (Disbiosi & Atopia)</strong>
              <ul className="list-disc pl-4 mt-1 text-slate-700 space-y-1">
                <li><strong>Parto cesareo:</strong> colonizzazione cutanea da stafilococchi; alterazione persistente fino a 2 anni.</li>
                <li><strong>Latte artificiale sterilizzato:</strong> assenza di HMO, colonizzazione anomala da clostridi e streptococchi.</li>
                <li><strong>Abuso di antibiotici nel primo anno di vita:</strong> distruzione della flora fisiologica mutualistica.</li>
                <li><strong>Eccesso di igiene e ambienti urbani sterili:</strong> mancata maturazione delle cellule dendritiche CD103+ RALDH+ tollerogeniche.</li>
                <li><strong>Esito:</strong> Mancata induzione di Treg → iperreattività Th2 → allergie persistenti.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 26.12: Allergen Immunotherapy & Biologics */}
      <section id="sec-26-12" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">26.10</span> Immunoterapia Specifica (AIT), Ruolo delle IgG4 & Farmaci Biologici
        </h2>
        <p>
          Il trattamento moderno delle allergie ha superato la mera terapia sintomatica con antistaminici e cortisonici,
          puntando alla <strong>riprogrammazione immunologica del paziente</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 font-sans text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <strong className="text-slate-900 text-sm font-bold block">1. Immunoterapia Specifica (AIT / Vaccini Antiallergici)</strong>
            <p className="text-slate-700 leading-relaxed">
              Consiste nella somministrazione controllata e a dosi crescenti dell'allergene specifico per indurre tolleranza immunologica:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
              <li>
                <strong>Via Sottocutanea (SCIT):</strong> L'allergene viene inoculato per via sottocutanea formulato con{' '}
                <strong>adiuvanti agonisti dei TLR</strong> (MPLA per TLR4, CpG per TLR9, flagellina per TLR5). Questi adiuvanti stimolano
                le APC a produrre <strong>IL-12</strong>, provocando un <strong>cambio di rotta da Th2 a Th1</strong> (switch protettivo con IFN-γ).
              </li>
              <li>
                <strong>Via Sublinguale / Orale (SLIT):</strong> L'esposizione dell'allergene alla mucosa sfrutta il microambiente tollerogenico
                naturale delle mucose (acido retinoico), inducendo <strong>linfociti Treg producenti IL-10 e TGF-β</strong>.
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-emerald-900 text-sm font-bold">2. Il Ruolo Antinfiammatorio Cruciale delle IgG4</strong>
              <span className="px-2 py-0.5 rounded bg-emerald-200 text-emerald-800 font-mono text-[10px] font-bold">Feedback Negativo</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Durante l'immunoterapia, l'IL-10 prodotta dai Treg stimola i linfociti B a effettuare lo switch isotipico verso{' '}
              <strong>IgG4</strong> (mentre TGF-β stimola IgA):
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Le IgG4 non attivano il complemento e non stimolano la fagocitosi.</li>
              <li>
                <strong>Azione Bloccante Sterica:</strong> Le IgG4 intercettano e sequestrano l'allergene solubile nei tessuti prima che
                possa raggiungere e cross-linkare le IgE fissate su mastociti e basofili.
              </li>
              <li>
                <strong>Legame al Recettore Inibitorio FcγRIIB:</strong> L'unico recettore Fc inibitorio, <strong>FcγRIIB (CD32B)</strong>,
                espresso su mastociti e basofili, viene legato con alta affinità dalle IgG4. L'ingaggio di FcγRIIB attiva il suo motivo citoplasmatico{' '}
                <strong>ITIM</strong>, reclutando la fosfatasi SHIP1 che spegne la cascata attivatoria di FcεRI, inibendo attivamente la degranulazione!
              </li>
            </ul>
            <p className="text-slate-600 italic">
              Il dosaggio delle <strong>IgG4 allergene-specifiche</strong> nel siero è il parametro di laboratorio per monitorare il successo della terapia.
            </p>
          </div>
        </div>

        {/* Biologics Arsenal */}
        <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 font-sans text-xs space-y-2 mt-2">
          <strong className="text-purple-900 text-sm block font-bold">Farmaci Biologici Monoclonali nell'Asma Grave e Forme Refrattarie</strong>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            <div className="p-2.5 bg-white rounded-lg border border-purple-200">
              <strong className="text-slate-900 block font-bold text-xs">Omalizumab (Anti-IgE)</strong>
              <p className="text-slate-600 mt-1">
                Anticorpo monoclonale umanizzato che lega il dominio Cε3 delle IgE libere circolanti, impedendone l'ancoraggio a FcεRI.
              </p>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-purple-200">
              <strong className="text-slate-900 block font-bold text-xs">Dupilumab (Anti-IL-4Rα)</strong>
              <p className="text-slate-600 mt-1">
                Blocca la catena condivisa IL-4Rα, inibendo contemporaneamente la segnalazione di <strong>IL-4 e IL-13</strong>;
                azzeramento dello switch a IgE e della metaplasia mucipara.
              </p>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-purple-200">
              <strong className="text-slate-900 block font-bold text-xs">Mepolizumab & Reslizumab (Anti-IL-5)</strong>
              <p className="text-slate-600 mt-1">
                Neutralizzano l'IL-5 libera (o Benralizumab che lega IL-5Rα inducendo ADCC), azzerando l'infiltrazione bronchiale di eosinofili.
              </p>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-purple-200">
              <strong className="text-slate-900 block font-bold text-xs">Tezepelumab (Anti-TSLP)</strong>
              <p className="text-slate-600 mt-1">
                Agisce all'apice della cascata: neutralizza la Linfopoietina Timica Stromale epiteliale, bloccando a monte l'attivazione di DC2 e ILC2.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simulator 2: Airway Remodeling & Biologics Lab */}
      <section id="sim-asthma-remodeling-lab" className="p-6 rounded-2xl bg-slate-900 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-400 font-mono text-[11px] font-bold uppercase tracking-wider">
              Laboratorio Interattivo 2
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white mt-1">
              Laboratorio di Rimodellamento Bronchiale & Farmaci Biologici nell'Asma
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">Targeting Molecolare di Precisione</span>
        </div>

        {/* Biologic Selector */}
        <div>
          <span className="text-xs font-semibold text-slate-300 block mb-2 font-mono">SELEZIONA TERAPIA BIOLOGICA O DESENSIBILIZZANTE:</span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
            {[
              { id: 'none', label: 'Nessuna Terapia', desc: 'Asma severo non controllato' },
              { id: 'omalizumab', label: 'Omalizumab', desc: 'Anti-IgE (blocco Cε3)' },
              { id: 'dupilumab', label: 'Dupilumab', desc: 'Anti-IL-4Rα (IL-4 + IL-13)' },
              { id: 'mepolizumab', label: 'Mepolizumab', desc: 'Anti-IL-5 (Stop Eosinofili)' },
              { id: 'tezepelumab', label: 'Tezepelumab', desc: 'Anti-TSLP (Allarmina Epiteliale)' },
              { id: 'ait_igg4', label: 'AIT + IgG4', desc: 'Immunoterapia (FcγRIIB inibitorio)' }
            ].map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedBiologic(b.id as any)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  selectedBiologic === b.id
                    ? 'bg-purple-600/30 border-purple-400 text-white shadow-md'
                    : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="font-bold">{b.label}</div>
                <div className="text-[10px] text-slate-400 truncate">{b.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Sliders & Indicators */}
        <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-4">
          <div className="flex justify-between items-center text-xs font-sans">
            <span className="text-slate-300 font-semibold">Grado di Esposizione Allergenica Cronica (Der p 1):</span>
            <span className="font-mono text-cyan-400 font-bold">{allergenDose}%</span>
          </div>
          <input
            type="range"
            min={10}
            max={100}
            value={allergenDose}
            onChange={(e) => {
              setAllergenDose(Number(e.target.value));
              setEosinophilInfiltration(Math.round(Number(e.target.value) * 0.9));
            }}
            className="w-full accent-cyan-400 cursor-pointer"
          />

          {/* Real-time Result Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs pt-2">
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-700">
              <span className="text-slate-400 text-[10px] block">INFILTRATO EOSINOFILO (MBP / ECP)</span>
              <strong
                className={`text-base font-bold block mt-1 ${
                  effectiveEosinophils < 25 ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {effectiveEosinophils}% ({effectiveEosinophils < 25 ? 'Normalizzato' : 'Grave Eosinofilia'})
              </strong>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    effectiveEosinophils < 25 ? 'bg-emerald-400' : 'bg-rose-500'
                  }`}
                  style={{ width: `${effectiveEosinophils}%` }}
                />
              </div>
            </div>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-700">
              <span className="text-slate-400 text-[10px] block">PRODUZIONE MUCO & TAPPI (IL-13)</span>
              <strong
                className={`text-base font-bold block mt-1 ${
                  mucusProduction < 30 ? 'text-emerald-400' : 'text-amber-400'
                }`}
              >
                {mucusProduction}% ({mucusProduction < 30 ? 'Fisiologica' : 'Ipersecrezione Ostruttiva'})
              </strong>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    mucusProduction < 30 ? 'bg-emerald-400' : 'bg-amber-400'
                  }`}
                  style={{ width: `${mucusProduction}%` }}
                />
              </div>
            </div>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-700">
              <span className="text-slate-400 text-[10px] block">RESISTENZA VIE AEREE (AIRWAY REMODELING)</span>
              <strong
                className={`text-base font-bold block mt-1 ${
                  airwayResistance < 40 ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {airwayResistance}% ({airwayResistance < 40 ? 'Lume Pervio' : 'Ostruzione Espiratoria Severa'})
              </strong>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    airwayResistance < 40 ? 'bg-emerald-400' : 'bg-rose-500'
                  }`}
                  style={{ width: `${airwayResistance}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Rationale */}
        <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 font-sans text-xs text-slate-200 leading-relaxed">
          {selectedBiologic === 'none' && (
            <p className="m-0">
              <strong>Asma Severo Non Trattato:</strong> La stimolazione cronica da IL-5 induce massiccia eosinofilia con rilascio di
              MBP ed ECP che desquamano l'epitelio respiratorio. L'IL-13 promuove la metaplasia delle ghiandole mucipare; la muscolatura liscia
              va incontro a ipertrofia permanente provocando intrappolamento d'aria e dispnea espiratoria.
            </p>
          )}
          {selectedBiologic === 'omalizumab' && (
            <p className="m-0">
              <strong>Omalizumab (Anti-IgE):</strong> Sequestra le IgE solubili impedendo il legame a FcεRI. Riduce l'attivazione mastocitaria
              e la fase precoce della reazione allergica.
            </p>
          )}
          {selectedBiologic === 'dupilumab' && (
            <p className="m-0">
              <strong>Dupilumab (Anti-IL-4Rα):</strong> Bloccando la subunità comune del recettore per IL-4 e IL-13, arresta sia lo switch a IgE
              che la <strong>metaplasia delle goblet cells</strong>, normalizzando la secrezione mucosa e riducendo l'iperreattività bronchiale.
            </p>
          )}
          {selectedBiologic === 'mepolizumab' && (
            <p className="m-0">
              <strong>Mepolizumab (Anti-IL-5):</strong> Neutralizza selettivamente l'IL-5, privando gli eosinofili del fattore di crescita midollare.
              L'eosinofilia tessutale crolla al 5–10%, arrestando il rilascio di perossidasi e proteine basiche citotossiche.
            </p>
          )}
          {selectedBiologic === 'tezepelumab' && (
            <p className="m-0">
              <strong>Tezepelumab (Anti-TSLP):</strong> Agisce al vertice della piramide infiammatoria bloccando l'allarmina epiteliale TSLP.
              Previene a monte la differenziazione delle DC2 e l'attivazione delle ILC2.
            </p>
          )}
          {selectedBiologic === 'ait_igg4' && (
            <p className="m-0">
              <strong>Immunoterapia Specifica (AIT):</strong> Induce la sintesi di anticorpi bloccanti <strong>IgG4</strong> via IL-10.
              Le IgG4 legano il recettore inibitorio <strong>FcγRIIB (CD32B)</strong> sui mastociti, trasducendo un segnale inibitorio ITAM-antagonista
              via SHIP1 che blocca la degranulazione.
            </p>
          )}
        </div>
      </section>

      {/* Advanced Academic Tables */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">26.11</span> Tabelle Sinottiche Avanzate di Studio
        </h2>

        {/* Table 1: Mediators */}
        <div id="tabella-26-1" className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase">
              Tabella 26.1 — I Mediatori Mastocitari: Cinetica, Biosintesi & Azioni Fisiopatologiche
            </span>
          </div>
          <div className="overflow-x-auto font-sans text-xs">
            <table className="w-full border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  <th className="border border-slate-200 p-2 text-left">Classe Mediatore</th>
                  <th className="border border-slate-200 p-2 text-left">Molecole Specifiche</th>
                  <th className="border border-slate-200 p-2 text-left">Origine / Via Biosintetica</th>
                  <th className="border border-slate-200 p-2 text-left">Effetti Fisiopatologici Cardine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-2 font-bold text-slate-900">Preformati (0–15 min)</td>
                  <td className="p-2 font-mono">Istamina</td>
                  <td className="p-2">Decarbossilazione dell'istidina; immagazzinata nei granuli elettrondensi</td>
                  <td className="p-2">Vasodilatazione, permeabilità vascolare ed edema (H1), broncospasmo, prurito e starnuti riflessi</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Preformati (0–15 min)</td>
                  <td className="p-2 font-mono">Triptasi Sierica</td>
                  <td className="p-2">Endoproteasi neutra esclusiva dei granuli mastocitari</td>
                  <td className="p-2 font-semibold text-blue-900">Marcatore di laboratorio dello shock anafilattico (picco a 1–2 ore)</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Lipidici Neoformati (10–30 min)</td>
                  <td className="p-2 font-mono">Leucotrieni C4, D4, E4 (CysLTs)</td>
                  <td className="p-2">Acido arachidonico via 5-Lipossigenasi (5-LOX)</td>
                  <td className="p-2">Broncocostrizione prolungata (1000x più potente dell'istamina), secrezione mucosa densa</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Lipidici Neoformati (10–30 min)</td>
                  <td className="p-2 font-mono">Prostaglandina D2 (PGD2)</td>
                  <td className="p-2">Acido arachidonico via Ciclossigenasi (COX-1/COX-2)</td>
                  <td className="p-2">Vasodilatazione, chemiotassi Th2 via CRTH2, broncocostrizione, dolore nocicettivo</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Citochine Tardive (4–8 ore)</td>
                  <td className="p-2 font-mono">IL-4, IL-13, IL-5, TNF-α</td>
                  <td className="p-2">Trascrizione genica de novo indotta da MAP-chinasi e NF-κB</td>
                  <td className="p-2">Mantenimento del circuito Th2, metaplasia ghiandolare, reclutamento ed attivazione eosinofili</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: Therapeutics */}
        <div id="tabella-26-2" className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase">
              Tabella 26.2 — Arsenale Terapeutico delle Malattie Allergiche: Desensibilizzazione & Biologici
            </span>
          </div>
          <div className="overflow-x-auto font-sans text-xs">
            <table className="w-full border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  <th className="border border-slate-200 p-2 text-left">Approccio Terapeutico</th>
                  <th className="border border-slate-200 p-2 text-left">Farmaco / Strategia</th>
                  <th className="border border-slate-200 p-2 text-left">Bersaglio Molecolare</th>
                  <th className="border border-slate-200 p-2 text-left">Meccanismo d'Azione & Indicazione Clinica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-2 font-bold text-slate-900">Immunoterapia (SCIT)</td>
                  <td className="p-2">Inoculazione sottocutanea + CpG/MPLA</td>
                  <td className="p-2">TLR4, TLR9 su cellule dendritiche</td>
                  <td className="p-2">Produzione di IL-12 e deviazione immunologica da risposta Th2 a Th1 protettiva</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Immunoterapia (SLIT)</td>
                  <td className="p-2">Esposizione mucosale sublinguale</td>
                  <td className="p-2">Induzione di Linfociti Treg, IL-10 e TGF-β</td>
                  <td className="p-2">Switch isotipico a IgG4 bloccanti che legano il recettore inibitorio FcγRIIB (ITIM)</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Biologico Monoclonale</td>
                  <td className="p-2 font-mono">Omalizumab</td>
                  <td className="p-2">Dominio Cε3 delle IgE libere circolanti</td>
                  <td className="p-2">Impedisce l'ancoraggio a FcεRI; indicato nell'asma allergico severo refrattario</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Biologico Monoclonale</td>
                  <td className="p-2 font-mono">Dupilumab</td>
                  <td className="p-2">Subunità recettoriale condivisa IL-4Rα</td>
                  <td className="p-2">Blocco duplice di IL-4 e IL-13; azzera metaplasia mucipara nell'asma e dermatite atopica</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Biologico Monoclonale</td>
                  <td className="p-2 font-mono">Mepolizumab / Benralizumab</td>
                  <td className="p-2">Citochina IL-5 o recettore IL-5Rα</td>
                  <td className="p-2">Azzeramento differenziamento e sopravvivenza degli eosinofili nell'asma eosinofilo grave</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Biologico Monoclonale</td>
                  <td className="p-2 font-mono">Tezepelumab</td>
                  <td className="p-2">Linfopoietina Timica Stromale (TSLP)</td>
                  <td className="p-2">Neutralizzazione dell'allarmina epiteliale a monte dell'innesco di DC2 e ILC2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_QUESTIONS} lessonNumber={26} title="Verifica dell'Apprendimento · Lezione 26" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS} lessonNumber={26} title="Flashcard di Ripasso Attivo · Lezione 26" />
    </article>
  );
};
