import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import { ConceptMapFlow } from './ConceptMapFlow';
import { MAP_LEZIONE_15_COMPLEMENT_3WAYS, MAP_LEZIONE_15_REGULATION_AND_CLINICS } from '../data/conceptMapsData';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { InlineProcessFlowDiagram } from './InlineProcessFlowDiagram';
import {
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Activity,
  Layers,
  Microscope,
  Dna,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Clock,
  Sliders,
  Syringe,
  XCircle,
  Info,
  Lock,
  Unlock,
  FileText,
  Check,
  Zap,
  Bookmark,
  Target,
  RefreshCw,
  GitBranch,
  Filter,
  Eye,
  SlidersHorizontal,
  Flame,
  Award
} from 'lucide-react';

interface Lezione15ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione15View: React.FC<Lezione15ViewProps> = ({ isSerif, fontSize }) => {
  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // ==========================================
  // STATO SIMULATORE 1: VIE DEL COMPLEMENTO
  // ==========================================
  type TargetSurface = 'gram_negative' | 'mannose_yeast' | 'human_self' | 'hiv_gp120';
  type AntibodyType = 'none' | 'igm_pentamer' | 'igg_double';

  const [sim1Surface, setSim1Surface] = useState<TargetSurface>('gram_negative');
  const [sim1Antibodies, setSim1Antibodies] = useState<AntibodyType>('igm_pentamer');
  const [sim1ProperdinActive, setSim1ProperdinActive] = useState<boolean>(true);
  const [sim1MgCaPresent, setSim1MgCaPresent] = useState<boolean>(true);

  // Calcolo dell'esito del simulatore 1
  const isClassicalActive =
    sim1MgCaPresent &&
    ((sim1Antibodies === 'igm_pentamer' || sim1Antibodies === 'igg_double') ||
      sim1Surface === 'hiv_gp120');

  const isLectinActive =
    sim1MgCaPresent && (sim1Surface === 'mannose_yeast' || sim1Surface === 'gram_negative');

  const isAlternativeSolidActive =
    sim1MgCaPresent &&
    (sim1Surface === 'gram_negative' || sim1Surface === 'mannose_yeast') &&
    sim1ProperdinActive;

  const isSelfProtected = sim1Surface === 'human_self';

  // Convertasi risultanti
  let primaryC3Convertase = 'Nessuna convertasi stabile';
  let primaryC5Convertase = 'Nessuna convertasi C5';
  let c3bYield = '0%';
  let c5aInflammation = 'Silente';
  let finalOutcome = 'Nessuna reazione litica';

  if (!sim1MgCaPresent) {
    primaryC3Convertase = 'Blocco assoluto (carenza ioni bivalenti Mg²⁺/Ca²⁺)';
    primaryC5Convertase = 'Inattiva';
    c3bYield = '0%';
    c5aInflammation = 'Inibita';
    finalOutcome = 'Reazione abortita per chelazione ionica';
  } else if (isSelfProtected) {
    primaryC3Convertase = 'C3(H₂O)Bb fluido transitorio dissociato immediatamente da DAF e Fattore H';
    primaryC5Convertase = 'Completamente bloccata da MCP, CR1 e CD59';
    c3bYield = '< 2% (inattivato rapidamente a iC3b dal Fattore I)';
    c5aInflammation = 'Minima / Assente';
    finalOutcome = 'Protezione totale del Self (DAF, CD59, Fattore H, MCP)';
  } else {
    const pathways = [];
    if (isClassicalActive) pathways.push('Classica (C4b2b)');
    if (isLectinActive) pathways.push('Lectinica (C4b2b)');
    if (isAlternativeSolidActive) pathways.push('Alternativa (C3bBb-P)');

    if (pathways.length > 0) {
      primaryC3Convertase = pathways.join(' + ');
      primaryC5Convertase =
        isClassicalActive || isLectinActive ? 'C4b2b3b' : 'C3bBbC3b (stabilizzata da P)';
      c3bYield = pathways.length >= 2 ? '100% (Massiva amplificazione solid-phase)' : '65% (Attivazione canonica)';
      c5aInflammation = 'Elevata (chemotassi neutrofila e degranulazione mastocitaria)';
      finalOutcome = 'Opsonizzazione massiva e assemblaggio MAC con lisi osmotica';
    } else {
      primaryC3Convertase = 'Tick-over fluido basale non amplificato';
      primaryC5Convertase = 'Inattiva';
      c3bYield = '< 5%';
      c5aInflammation = 'Tracce';
      finalOutcome = 'Decadimento spontaneo in fase liquida';
    }
  }

  // ==========================================
  // STATO SIMULATORE 2: ASSEMBLAGGIO MAC & INIBITORI
  // ==========================================
  const [macStage, setMacStage] = useState<number>(5); // 1 to 5
  const [cd59Present, setCd59Present] = useState<boolean>(false); // Protectina su membrana
  const [proteinSPresent, setProteinSPresent] = useState<boolean>(false); // Vitronectina in fase fluida

  // Calcolo lisi MAC
  let macStatusText = '';
  let macStatusColor = '';
  let macLysisOccurs = false;

  if (proteinSPresent && macStage >= 3) {
    macStatusText = 'Blocco in fase fluida: la Proteina S (Vitronectina) ha legato C5b-7 prevenendo l\'ancoraggio alla membrana.';
    macStatusColor = 'text-amber-800 bg-amber-50 border-amber-200';
    macLysisOccurs = false;
  } else if (cd59Present && macStage >= 4) {
    macStatusText = 'Blocco su membrana: CD59 (Protectina) si è inserita nel complesso C5b-8 impedendo il reclutamento e la polimerizzazione di C9.';
    macStatusColor = 'text-blue-800 bg-blue-50 border-blue-200';
    macLysisOccurs = false;
  } else if (macStage === 5) {
    macStatusText = 'Poro del MAC completo: 12-18 monomeri di C9 polimerizzati. Poro idrofilico transmembrana (5-10 nm) attivo. Lisi colloido-osmotica in corso!';
    macStatusColor = 'text-red-800 bg-red-50 border-red-200';
    macLysisOccurs = true;
  } else {
    macStatusText = `Assemblaggio intermedio (Stadio ${macStage}/5). Membrana in fase di penetrazione.`;
    macStatusColor = 'text-slate-800 bg-slate-50 border-slate-200';
    macLysisOccurs = false;
  }

  // ==========================================
  // STATO FLASHCARDS
  // ==========================================
  const [flashcardIdx, setFlashcardIdx] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const FLASHCARDS = [
    {
      q: "Qual è la differenza fondamentale tra l'innesco della Via Classica e della Via Lectinica?",
      a: "La Via Classica è tipicamente anticorpo-dipendente (richiede il legame di C1q a porzioni Fc di IgM o di almeno due IgG ravvicinate), mentre la Via Lectinica è anticorpo-indipendente e riconosce direttamente PAMPs carboidratici (mannosio, fucosio) tramite MBL o Ficoline associate alle proteasi MASP-1 e MASP-2. Entrambe convergono però sullo stesso identico enzima: la C3 convertasi C4b2b.",
      tag: "Innesco & Riconoscimento"
    },
    {
      q: "Secondo la regola didattica tassativa della Prof.ssa Soriani, qual è la composizione corretta della C3 e C5 convertasi classica?",
      a: "La frazione 'a' è il frammento minore solubile rilasciato nel microambiente, mentre 'b' è la porzione maggiore che rimane ancorata. Pertanto, la C3 convertasi classica è C4b2b (C4b legato a C2b), e la C5 convertasi classica è C4b2b3b (con l'aggiunta di una subunità C3b).",
      tag: "Nomenclatura Rigorosa"
    },
    {
      q: "Che cos'è il 'tick-over' spontaneo della Via Alternativa e qual è la convertasi in fase fluida?",
      a: "È la lenta e spontanea idrolisi a basso tasso basale del legame tioestere interno di C3 a opera dell'acqua plasmatica, generando C3(H₂O). Questo lega il Fattore B in presenza di Mg²⁺, che viene clivato dal Fattore D generando la C3 convertasi fluida C3(H₂O)Bb.",
      tag: "Via Alternativa Fluida"
    },
    {
      q: "Qual è il ruolo cruciale della Properdina (Fattore P) nella Via Alternativa in fase solida?",
      a: "La Properdina è l'unico regolatore positivo del complemento: si lega alla convertasi C3bBb assemblata sulla superficie microbica estranea o su DAMPs/cellule apoptotiche, aumentandone l'emivita di oltre 10 volte e prevenendone la dissociazione spontanea.",
      tag: "Regolazione Positiva"
    },
    {
      q: "Come agisce la Protectina (CD59) e quale grave patologia deriva dal suo deficit?",
      a: "CD59 è una glicoproteina ancorata tramite ponte GPI alla membrana delle cellule dell'ospite; si interpone fisicamente nel complesso C5b-8 impedendo l'inserzione e la polimerizzazione dei 12-18 monomeri di C9. Il deficit di ancore GPI causa l'Emoglobinuria Parossistica Notturna (EPN), con lisi eritrocitaria intravascolare complementare.",
      tag: "Controllo del MAC & Clinica"
    },
    {
      q: "Qual è la gerarchia di potenza delle tre anafilotossine e quali sono i loro effetti biologici?",
      a: "La gerarchia di potenza biologica è C5a > C3a > C4a. C5a è la più potente anafilotossina e chemiotattica per neutrofili e monociti; induce degranulazione dei mastociti con rilascio di istamina, aumento della permeabilità vascolare, contrazione della muscolatura liscia ed espressione di molecole di adesione endoteliali.",
      tag: "Funzioni Effettrici"
    }
  ];

  // ==========================================
  // STATO QUIZ (10 Quesiti Universitari)
  // ==========================================
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const QUIZ_QUESTIONS = [
    {
      id: 1,
      question: "Quale reperto sperimentale storico permise a Jules Bordet (Premio Nobel 1919) di dimostrare l'esistenza del complemento?",
      options: [
        "La lisi batterica ottenuta mescolando siero scaldato a 56 °C con eritrociti di montone.",
        "Il ripristino dell'attività batteriolitica incubando siero immune inattivato a 56 °C con siero fresco non immune.",
        "La cristallizzazione della proteina C3 a partire dal siero di cavia immune.",
        "L'inibizione della fagocitosi mediante trattamento del siero con anticorpi anti-IgM."
      ],
      correct: 1,
      rationale: "Bordet osservò che il siero immune perdeva la capacità di lisare i batteri se scaldato a 56 °C (distruzione del fattore termolabile), ma l'aggiunta di siero fresco non immune (contenente complemento intatto ma privo di anticorpi specifici) restituiva la piena lisi batterica, dimostrando la cooperazione tra due sostanze distinte.",
      clinicalPearl: "Questo esperimento diede origine al classico test di fissazione del complemento per la sierodiagnosi di infezioni storiche (es. reazione di Wassermann per la sifilide)."
    },
    {
      id: 2,
      question: "Perché una singola molecola di IgM pentamerica è sufficiente per attivare la via classica, mentre occorrono almeno due molecole di IgG ravvicinate?",
      options: [
        "Perché le IgG non contengono il dominio costante CH2 necessario per il legame con C1q.",
        "Perché C1q richiede l'interazione contemporanea con almeno due teste globulari; l'IgM legata all'antigene assume una conformazione 'a graffa' che espone multipli domini Fc (CH3) perfettamente spaziati.",
        "Perché le IgM attivano direttamente la proteasi C1s senza necessitare dell'intermediazione di C1q e C1r.",
        "Perché le IgG circolano esclusivamente in forma monomerica bloccata da legami tioestere instabili."
      ],
      correct: 1,
      rationale: "La molecola C1q possiede 6 teste globulari a tulipano e si attiva solo quando almeno 2 teste legano contemporaneamente porzioni Fc. L'IgM libera è planare (siti mascherati), ma quando lega l'antigene subisce una torsione a graffa (staple conformation) esponendo le regioni Fc con geometria ideale.",
      clinicalPearl: "Per questo motivo le IgM sono gli anticorpi più efficienti in assoluto nell'attivazione del complemento e nell'emoagglutinazione intravascolare (es. reazioni trasfusionali acute AB0)."
    },
    {
      id: 3,
      question: "In conformità alla rigorosa nomenclatura adottata nella lezione della Prof.ssa Soriani, come è definita la C3 convertasi della via classica?",
      options: [
        "C3bBb",
        "C4a2b",
        "C4b2b",
        "C4b2a"
      ],
      correct: 2,
      rationale: "Secondo la regola standardizzata illustrata dalla docente, il suffisso 'a' denota il frammento minore solubile e 'b' il frammento maggiore ancorato. Poiché C2b è il frammento catalitico maggiore associato a C4b, la C3 convertasi classica e lectinica è tassativamente C4b2b.",
      clinicalPearl: "Attenzione agli esami: alcuni testi storici anglosassoni invertivano C2a e C2b, ma la prof.ssa Soriani richiede tassativamente C4b2b per coerenza biologica con le frazioni solubili/legate."
    },
    {
      id: 4,
      question: "Quale molecola funge da convertasi C3 iniziale e solubile nella via alternativa durante il fenomeno del 'tick-over'?",
      options: [
        "C3bBb",
        "C3(H₂O)Bb",
        "C4b2b",
        "C3bBbC3b"
      ],
      correct: 1,
      rationale: "Il tick-over consiste nell'idrolisi spontanea del legame tioestere di C3 con acqua a formare C3(H₂O). Questa forma aperta lega il Fattore B, che viene tagliato dal Fattore D generando la convertasi solubile fluida C3(H₂O)Bb.",
      clinicalPearl: "La via alternativa non attende l'invasione batterica per partire: è sempre 'a motore acceso' a bassissimo regime in fase liquida, pronta a depositare C3b su qualsiasi membrana aliena priva di protezioni."
    },
    {
      id: 5,
      question: "Qual è il meccanismo con cui la Properdina (Fattore P) previene il fallimento della via alternativa su membrane batteriche?",
      options: [
        "Taglia enzimaticamente il Fattore B in Ba e Bb.",
        "Lega la subunità C5b prevenendo l'inserzione di C6.",
        "Si associa alla C3 convertasi in fase solida C3bBb aumentandone l'emivita di oltre 10 volte.",
        "Funge da recettore scavatrice sulla membrana degli eritrociti."
      ],
      correct: 2,
      rationale: "La convertasi di superficie C3bBb è intrinsecamente instabile con un'emivita spontanea di pochi minuti. Il legame della Properdina (sintetizzata e secreta anche dai granuli primari dei neutrofili) stabilizza il complesso multimolecolare, trasformandolo in un potente motore enzimatico ad altissima resa di C3b.",
      clinicalPearl: "Il deficit ereditario di properdina (X-linked) si associa a un rischio aumentato di oltre 10.000 volte di meningite fulminante da Neisseria meningitidis."
    },
    {
      id: 6,
      question: "Durante l'assemblaggio del Complesso di Attacco alla Membrana (MAC), quale componente subisce per primo una transizione conformazionale esponendo un dominio idrofobico che si ancora al doppio strato lipidico?",
      options: [
        "C5b",
        "C6",
        "C7",
        "C9"
      ],
      correct: 2,
      rationale: "Il dimero C5b-6 è ancora una proteina idrofilica solubile. Quando si associa C7, questo complesso ternario (C5b-6-7) subisce un ripiegamento allosterico che espone siti altamente lipofili, capaci di penetrare stabilmente nel doppio strato fosfolipidico.",
      clinicalPearl: "Se C5b-6-7 non trova rapidamente una membrana bersaglio entro frazioni di secondo, viene catturato dalla Proteina S (vitronectina) circolante, evitando la lisi distruttiva degli endoteli sani circostanti."
    },
    {
      id: 7,
      question: "Quale frazione del complemento rappresenta la più potente anafilotossina e il più energico fattore chemiotattico per i granulociti neutrofili?",
      options: [
        "C3a",
        "C4a",
        "C5a",
        "iC3b"
      ],
      correct: 2,
      rationale: "C5a è la regina delle anafilotossine, attiva a concentrazioni picomolari. Lega il recettore C5aR (accoppiato a proteine G) sui leucociti, inducendo chemiotassi direzionata, up-regolazione delle integrine β2 e degranulazione massiva dei mastociti con rilascio di amine vasoattive.",
      clinicalPearl: "L'eccesso sistemico di C5a è uno dei principali responsabili della vasodilatazione refrattaria, del danno polmonare acuto (ARDS) e del collasso cardiocircolatorio nello shock settico."
    },
    {
      id: 8,
      question: "Qual è il difetto molecolare alla base dell'Angioedema Ereditario (HAE) e quale mediatore solubile ne è il reale esecutore patogenetico?",
      options: [
        "Deficit di DAF (CD55) con iperattivazione di C3a.",
        "Deficit di C1-INH con mancata inibizione della callicreina e massiva produzione di bradichinina.",
        "Mutazione con guadagno di funzione di C9 con lisi spontanea dei cheratinociti.",
        "Deficit di Properdina con accumulo di anafilotossine polmonari."
      ],
      correct: 1,
      rationale: "C1-INH (C1 inhibitor) non inibisce soltanto C1r, C1s e MASP, ma è il principale freno fisiologico della callicreina e del fattore XII della coagulazione. Il suo deficit provoca un'incontrollata generazione di bradichinina, potente vasodilatatore e induttore di edema sottomucoso e sottocutaneo non pruriginoso.",
      clinicalPearl: "L'angioedema ereditario NON risponde ad antistaminici o cortisonici (poiché mediato da bradichinina e non da istamina); si tratta con concentrato di C1-INH o con Icatibant (antagonista recettoriale B2 della bradichinina)."
    },
    {
      id: 9,
      question: "Qual è il ruolo biochimico del Fattore I e quale frammento opsonizzante produce clivando il C3b?",
      options: [
        "È una serin-proteasi plasmatica che cliva C3b in iC3b, un frammento incapace di formare convertasi ma eccellente opsonina per i recettori CR3 e CR4.",
        "È una proteina di membrana che attiva la via lectinica legando il mannosio.",
        "È un cofattore intracellulare che accelera la trascrizione di C9.",
        "È un enzima che distrugge il legame tioestere di C4 prima del contatto con la membrana."
      ],
      correct: 0,
      rationale: "Il Fattore I è una serin-proteasi solubile costitutivamente attiva. In presenza di cofattori (Fattore H, MCP, CR1), cliva C3b generando iC3b ('inactivated C3b'). Questo non può più assemblare la C5 convertasi o propagare il MAC, ma rimane legato alla membrana fungendo da potente opsonina per i fagociti tramite CR3 (Mac-1, CD11b/CD18).",
      clinicalPearl: "Mutazioni del Fattore I o del Fattore H causano la Sindrome Emolitico-Uremica atipica (aHUS), caratterizzata da microangiopatia trombotica renale per mancata protezione dell'endotelio dal complemento."
    },
    {
      id: 10,
      question: "Quale meccanismo protegge selettivamente le cellule umane (self) dall'attivazione spontanea della via alternativa del complemento?",
      options: [
        "L'assenza totale di ioni magnesio (Mg²⁺) sulla superficie delle cellule umane.",
        "La ricchezza di residui di acido sialico e glicosaminoglicani sulle membrane self, che reclutano il Fattore H plasmatico favorendo la rapida inattivazione di C3b.",
        "L'assorbimento continuo di Properdina all'interno del citoplasma delle cellule endoteliali.",
        "La secrezione continua di C1q da parte dei globuli rossi maturi."
      ],
      correct: 1,
      rationale: "Le membrane dei mammiferi sono densamente ricoperte di acido sialico e solfati. Il Fattore H possiede domini di legame specifici ad alta affinità per l'acido sialico combinato al C3b self: una volta legato alla superficie self, il Fattore H stacca la subunità Bb (azione decay) e recluta il Fattore I per inattivare C3b. I batteri, privi di acido sialico, non riescono a legare il Fattore H e vengono distrutti.",
      clinicalPearl: "Alcuni patogeni furbi, come Neisseria meningitidis o Streptococcus pneumoniae, rivestono la propria capsula di acido sialico ('mimetismo molecolare') per reclutare il Fattore H dell'ospite ed evadere l'immunità innata!"
    }
  ];

  const handleSelectAnswer = (qId: number, optIdx: number) => {
    if (showResults) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  const score = Object.entries(userAnswers).filter(
    ([qId, ans]) => ans === QUIZ_QUESTIONS.find((q) => q.id === Number(qId))?.correct
  ).length;


  return (
    <article className={`space-y-12 ${proseFontClass}`}>

      {/* ========================================================================= */}
      {/* CAPITOLO 1: INTRODUZIONE, STORIA & NATURA DELLE PROTEINE */}
      {/* ========================================================================= */}
      <section id="sec-15-1" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-mono text-xs font-bold">15.1</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Introduzione Evoluzionistica, Storia (Esperimento di Jules Bordet) e Natura Molecolare delle Proteine Plasmatiche
          </h2>
        </div>

        <div className={`text-slate-700 ${proseSizeClass} space-y-4`}>
          <p>
            Il <strong>sistema del complemento</strong> rappresenta uno dei pilastri più antichi, conservati ed efficienti dell'immunità innata e umorale. Comparso oltre <strong>un miliardo di anni fa</strong> nei protostomi e nei deuterostomi ancestrali (dove già esistevano archetipi primitivi del Fattore C3 e del Fattore B), il complemento ha preceduto la comparsa stessa dei linfociti T, B e degli anticorpi, per poi integrarsi armoniosamente con la risposta adattativa nell'era dei vertebrati dotati di mascella.
          </p>

          <p>
            Da un punto di vista biochimico, è costituito da oltre <strong>30-35 proteine plasmatiche termolabili e recettori di membrana</strong>, sintetizzate prevalentemente a livello degli <strong>epatociti nel fegato</strong> (con contributi tissutali locali da parte di macrofagi, monociti e cellule epiteliali). In condizioni di riposo omeostatico, queste proteine circolano nel sangue e nei fluidi interstiziali sotto forma di <strong>precursori enzimatici inattivi (zimogeni)</strong>. Questa caratteristica è vitale: previene un'incontrollata distruzione dei tessuti sani circolanti e permette al contempo una risposta esplosiva, immediata e ad altissima amplificazione non appena viene identificato un segnale di pericolo (PAMPs esogeni o DAMPs endogeni).
          </p>

          {/* Box Esperimento di Bordet */}
          <div className="p-4 sm:p-5 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
              <Award className="w-4 h-4 text-blue-700" />
              <span>L'Esperimento Storico di Jules Bordet (Premio Nobel per la Medicina 1919)</span>
            </div>
            <p className="text-xs sm:text-sm text-blue-950 leading-relaxed">
              Nel 1894, presso l'Institut Pasteur di Parigi, Jules Bordet condusse una serie di esperimenti pionieristici per comprendere la natura della batteriolisi siero-mediata contro il vibrione del colera (*Vibrio cholerae*):
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="bg-white p-3 rounded-lg border border-blue-200 shadow-2xs">
                <span className="font-bold text-slate-800 block mb-1">Condizione A: Siero Fresco</span>
                <p className="text-slate-600">Siero immune fresco + batteri &rarr; <strong>Lisi batterica completa</strong>.</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-blue-200 shadow-2xs">
                <span className="font-bold text-slate-800 block mb-1">Condizione B: Trattamento Termico</span>
                <p className="text-slate-600">Siero immune riscaldato a <strong>56 °C per 30 min</strong> + batteri &rarr; <strong>Nessuna lisi</strong> (fattore termolabile distrutto).</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-blue-200 shadow-2xs">
                <span className="font-bold text-slate-800 block mb-1">Condizione C: Ricostituzione</span>
                <p className="text-slate-600">Siero immune a 56 °C + <em>Siero fresco NON immune</em> &rarr; <strong>Ripristino della piena lisi batterica!</strong></p>
              </div>
            </div>
            <p className="text-xs text-blue-900 font-medium pt-1">
              <strong>Conclusione geniale:</strong> L'uccisione dei patogeni richiede la convergenza di due fattori indipendenti: un componente <em>termostabile e specifico</em> (l'anticorpo sintetizzato dal sistema adattativo) e un componente <em>termolabile, aspecifico e preesistente</em> presente nel siero fresco di tutti gli individui, che "complementa" l'azione degli anticorpi. Per questo Ehrlich coniò il termine <strong>Complesso del Complemento</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CAPITOLO 2: LE QUATTRO FUNZIONI BIOLOGICHE CARDINALI */}
      {/* ========================================================================= */}
      <section id="sec-15-2" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-mono text-xs font-bold">15.2</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Le Quattro Funzioni Biologiche Cardinali dell'Ecosistema Complementare
          </h2>
        </div>

        <div className={`text-slate-700 ${proseSizeClass} space-y-4`}>
          <p>
            Il complemento non è un mero esecutore di lisi meccanica. La Prof.ssa Soriani evidenzia quattro funzioni biologiche integrate che collegano la sorveglianza innata con il reclutamento leucocitario e la tolleranza immunologica:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Funzione 1 */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                <Flame className="w-4 h-4 text-rose-600" />
                <span>1. Lisi Cellulare Diretta (MAC)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Attraverso la polimerizzazione del <strong>Membrane Attack Complex (C5b-9)</strong>, vengono scavati pori transmembrana idrofilici nel doppio strato fosfolipidico batterico o cellulare. Ne consegue un flusso osmotico massivo di acqua e soluti, rigonfiamento cellulare e lisi colloido-osmotica. Questa funzione è fondamentale contro batteri Gram-negativi a parete sottile, in particolare del genere <em>Neisseria</em> (gonococco e meningococco).
              </p>
            </div>

            {/* Funzione 2 */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>2. Opsonizzazione e Fagocitosi Avanzata</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                La deposizione covalente di milioni di frammenti di <strong>C3b</strong> e del suo derivato catalitico <strong>iC3b</strong> ricopre la superficie del patogeno. I macrofagi e i neutrofili possiedono recettori complementari ad altissima affinità (<strong>CR1 / CD35</strong> per C3b; <strong>CR3 / CD11b-CD18</strong> e <strong>CR4 / CD11c-CD18</strong> per iC3b), inducendo una fagocitosi fulminea anche in assenza di anticorpi opsonizzanti specifici.
              </p>
            </div>

            {/* Funzione 3 */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                <Zap className="w-4 h-4 text-amber-600" />
                <span>3. Infiammazione & Anafilotossine</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                I frammenti minori solubili rilasciati durante la scissione (<strong>C5a &gt; C3a &gt; C4a</strong>) agiscono come potenti ormoni locali (anafilotossine). Inducono degranulazione di mastociti e basofili (rilascio di istamina, leucotrieni), vasodilatazione e iperpermeabilità vascolare, ed esprimono una potentissima attrazione chemiotattica per neutrofili ed eosinofili, guidandoli al focolaio infettivo.
              </p>
            </div>

            {/* Funzione 4 */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <Filter className="w-4 h-4 text-emerald-600" />
                <span>4. Clearance di Immunocomplessi & Apoptosi</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                C3b si lega agli immunocomplessi solubili circolanti antigene-anticorpo. Gli eritrociti, esprimendo il recettore <strong>CR1</strong>, "catturano" questi complessi e fungono da veicoli di trasporto passivo nel torrente ematico fino ai macrofagi del fegato (cellule di Kupffer) e della milza, che li fagocitano senza distruggere il globulo rosso. Inoltre, C1q e C3b opsonizzano i <em>corpi apoptotici</em>: un loro difetto porta a necrosi secondaria, rilascio di autoantigeni nucleari e insorgenza di Lupus Eritematoso Sistemico (SLE).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CAPITOLO 3: NOMENCLATURA RIGOROSA (REGOLA DIDATTICA PROF.SSA SORIANI) */}
      {/* ========================================================================= */}
      <section id="sec-15-3" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-mono text-xs font-bold">15.3</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Nomenclatura Rigorosa del Complemento: Regola delle Frazioni "a" e "b" e Risoluzione su C2
          </h2>
        </div>

        <div className={`text-slate-700 ${proseSizeClass} space-y-4`}>
          <p>
            Uno dei punti in cui gli studenti di medicina generano maggiore confusione riguarda la nomenclatura delle subunità proteiche. La Prof.ssa Soriani ha imposto una <strong>regola didattica chiara, razionale e priva di eccezioni</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <h3 className="font-bold text-amber-900 text-sm flex items-center gap-1.5 mb-2">
                <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center text-xs font-mono">a</span>
                Frammento Minore: Solubile ("a" = anafilotossina / allontana)
              </h3>
              <p className="text-xs text-amber-950 leading-relaxed">
                Rappresenta la porzione più piccola generata dal taglio proteolitico. Viene <strong>rilasciata nel microambiente liquido</strong> circostante, non si ancora alla membrana e svolge funzioni regolatrici, ormonali o infiammatorie (es. <em>C3a, C4a, C5a, C2a</em>).
              </p>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <h3 className="font-bold text-blue-900 text-sm flex items-center gap-1.5 mb-2">
                <span className="w-5 h-5 rounded-full bg-blue-200 text-blue-900 flex items-center justify-center text-xs font-mono">b</span>
                Frammento Maggiore: Legato ("b" = bound / big / base)
              </h3>
              <p className="text-xs text-blue-950 leading-relaxed">
                Rappresenta la subunità molecolare più grande che <strong>rimane fisicamente associata</strong> al complesso enzimatico o si ancora covalentemente alla superficie cellulare (es. <em>C3b, C4b, C5b, C2b, Bb</em>).
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2 font-mono text-xs">
            <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>Chiarimento Tassativo d'Esame: Il Caso della Subunità C2</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Nei trattati storici e in alcune vecchie edizioni anglosassoni, la subunità C2 presentava un'anomalia storica inversa (C2a per il frammento maggiore legato e C2b per quello minore). <strong>La Prof.ssa Soriani ha chiarito tassativamente a lezione che adotta la nomenclatura moderna normalizzata:</strong>
            </p>
            <ul className="space-y-1 pl-4 list-disc text-blue-300">
              <li><strong>C2b</strong> è la frazione maggiore catalitica che rimane ancorata a C4b.</li>
              <li><strong>C2a</strong> è la frazione minore solubile rilasciata.</li>
              <li>Pertanto, la C3 convertasi classica/lectinica è denominata: <span className="text-emerald-400 font-bold">C4b2b</span>.</li>
              <li>La C5 convertasi classica/lectinica è denominata: <span className="text-emerald-400 font-bold">C4b2b3b</span>.</li>
            </ul>
          </div>

          {/* Mappa Concettuale delle Tre Vie del Complemento */}
          <ConceptMapFlow {...MAP_LEZIONE_15_COMPLEMENT_3WAYS} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CAPITOLO 4: LA VIA CLASSICA */}
      {/* ========================================================================= */}
      <section id="sec-15-4" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-mono text-xs font-bold">15.4</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            La Via Classica: Complesso C1qrs, Cambio Conformazionale degli Anticorpi e Legame Tioestere
          </h2>
        </div>

        <div className={`text-slate-700 ${proseSizeClass} space-y-4`}>
          <p>
            La <strong>Via Classica</strong> è stata la prima a essere scoperta storicamente, pur essendo evolutivamente la più recente in quanto impiega il legame antigene-anticorpo come principale interruttore.
          </p>

          {/* SCHEMA DI PROCESSO INTERCALATO NELLA SPIEGAZIONE */}
          <InlineProcessFlowDiagram
            processId="complement"
            title="Schema di Processo: La Cascata del Complemento (3 Vie & MAC)"
            subtitle="Dall'innesco su immunocomplessi/patogeni alla scissione massiva di C3, assemblaggio C5b-9 e controllo del self"
            defaultExpanded={true}
          />

          <h3 className="text-base font-bold text-slate-900">1. Architettura Macromolecolare del Complesso C1</h3>
          <p>
            Il complesso C1 è un macro-enzima calcio-dipendente (Ca²⁺) con massa di circa 750 kDa, formato dall'associazione stechiometrica:
            <span className="font-mono text-xs font-bold text-blue-800 bg-blue-50 px-2 py-1 rounded ml-1">
              C1 = C1q + C1r₂ + C1s₂
            </span>
          </p>

          <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm text-slate-600">
            <li>
              <strong>C1q (La sentinella sensore):</strong> Ha una tipica morfologia a "mazzo di tulipani" composta da 6 steli di tipo collagenoso che culminano in <strong>6 teste globulari</strong>. Ciascuna testa globulare è in grado di riconoscere specificamente la porzione costante (Fc) delle immunoglobuline legate all'antigene.
            </li>
            <li>
              <strong>C1r e C1s (Le serin-proteasi effettrici):</strong> Formano un tetramero (C1r₂-C1s₂) alloggiato all'interno delle braccia di C1q. L'ingaggio delle teste globulari induce una distorsione meccanica che fa autoattivare C1r, il quale cliva e attiva C1s.
            </li>
          </ul>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-4 h-4 text-indigo-600" />
              Requisito Geometrico di Attivazione: IgM vs IgG & Cambio Conformazionale
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Per attivare l'enzima C1r, <strong>C1q deve legare contemporaneamente almeno due teste globulari</strong> a porzioni Fc.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <span className="font-bold text-blue-900 block mb-1">IgM Pentameriche (Attivatore Sovrano)</span>
                <p className="text-slate-600">
                  Nel plasma libero l'IgM ha una conformazione planare discale con i siti di legame per C1q (dominio Cμ3) inaccessibili. Quando l'IgM si lega a epitopi ripetuti su un batterio, subisce un drammatico cambio conformazionale assumendo la cosiddetta <strong>conformazione "a graffa" (staple conformation)</strong>: le porzioni Fc si sollevano esponendo multipli siti Fc ravvicinati. <strong>Una singola molecola di IgM è sufficiente</strong> per attivare C1q!
                </p>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <span className="font-bold text-indigo-900 block mb-1">IgG Monomeriche (Richiedono Clustering)</span>
                <p className="text-slate-600">
                  Le IgG possiedono una sola porzione Fc con il sito di legame nel dominio Cγ2. Di conseguenza, una singola IgG non può attivare C1q. Sono necessarie <strong>almeno due molecole di IgG distanziate al massimo di 30-40 nm</strong> sulla superficie della cellula bersaglio affinché C1q possa ponteggiarle entrambe. L'efficienza decresce nell'ordine: <span className="font-mono font-bold text-slate-800">IgG3 &gt; IgG1 &gt; IgG2</span> (le IgG4 non attivano il complemento).
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-base font-bold text-slate-900 pt-2">2. Il Legame Tioestere Instabile di C4b e Assemblaggio Convertasi</h3>
          <p>
            Una volta attivata, la serin-proteasi C1s taglia in sequenza due substrati plasmatici:
          </p>
          <ol className="space-y-3 pl-4 list-decimal text-xs sm:text-sm text-slate-700">
            <li>
              <strong>Taglio di C4 in C4a e C4b:</strong> Il clivaggio rimuove un piccolo peptide aminoterminale (C4a), provocando un ribaltamento allosterico che espone un <strong>legame tioestere interno altamente instabile</strong>.
              Se la membrana batterica è a pochi nanometri di distanza, il tioestere subisce un attacco nucleofilo da parte di gruppi amminici (-NH₂) o idrossilici (-OH) delle proteine di membrana, formando un <strong>legame covalente indistruttibile</strong>. Se invece C4b diffonde lontano, il legame tioestere viene idrolizzato in frazioni di secondo dall'acqua libera (H₂O), inattivandosi irreversibilmente: <em>questo garantisce che il complemento agisca solo sulla membrana del bersaglio e non su cellule sane distanti!</em>
            </li>
            <li>
              <strong>Taglio di C2 in C2a e C2b:</strong> C2 si lega a C4b in presenza di ioni Mg²⁺ e viene clivato da C1s. Il frammento solubile C2a si allontana, mentre il frammento catalitico <strong>C2b</strong> rimane ancorato a C4b formando:
              <div className="my-2 p-2.5 bg-blue-50 border border-blue-200 rounded-lg font-mono text-center font-bold text-blue-900 text-sm">
                C4b2b = C3 Convertasi della Via Classica (e Lectinica)
              </div>
            </li>
            <li>
              <strong>Taglio Esplosivo di C3 e Formazione della C5 Convertasi:</strong> Una singola molecola di C4b2b è in grado di tagliare fino a <strong>1000 molecole di C3</strong> in C3a e C3b prima di decadere. Uno dei frammenti C3b neo-generati si ancora covalentemente a ridosso della C3 convertasi stessa, modificandone la specificità di substrato e trasformandola in:
              <div className="my-2 p-2.5 bg-indigo-50 border border-indigo-200 rounded-lg font-mono text-center font-bold text-indigo-900 text-sm">
                C4b2b3b = C5 Convertasi della Via Classica (e Lectinica)
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CAPITOLO 5: TRIGGER NON CANONICI DELLA VIA CLASSICA */}
      {/* ========================================================================= */}
      <section id="sec-15-5" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-mono text-xs font-bold">15.5</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Trigger Non Canonici della Via Classica: Anticorpo-Indipendenti, Pentrassine & Immuno-Evasione Virale
          </h2>
        </div>

        <div className={`text-slate-700 ${proseSizeClass} space-y-4`}>
          <p>
            Sebbene la via classica sia definita come "anticorpo-dipendente", la Prof.ssa Soriani ha dedicato ampio spazio ai <strong>trigger non canonici</strong> capaci di attivare direttamente C1q anche in assenza assoluta di immunoglobuline:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                Pentrassine: Proteina C-Reattiva (PCR) & PTX3
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Le pentrassine pentameriche circolanti (inclusa la <strong>PCR</strong> di fase acuta e la pentrassina lunga <strong>PTX3</strong> prodotta dalle cellule dendritiche) legano la fosfocolina e la fosfatidiletanolamina esposte su batteri e corpi apoptotici. Una volta legate al bersaglio, le pentrassine offrono una piattaforma multivalente che ingaggia direttamente le teste globulari di C1q, attivando C1 senza bisogno di anticorpi.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Dna className="w-4 h-4 text-purple-600" />
                Immuno-Evasione Virale: Glicoproteina gp120 di HIV
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Il virus HIV sfrutta paradossalmente il complemento per la propria sopravvivenza: la glicoproteina d'involucro <strong>gp120</strong> possiede sequenze che legano C1q e C4. Questo reclutamento opsonizza il virione con C3b e iC3b senza indurre la lisi (grazie all'incorporazione di CD59 nella membrana virale), favorendo l'infezione dei macrofagi tramite i recettori complementari CR1-CR4.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-600" />
                Polisaccaridi Pneumococcici & Recettori Splenici
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nelle aree marginali della milza, capsule polisaccaridiche (come quelle di <em>Streptococcus pneumoniae</em>) possono essere catturate da recettori lectinici dotati di ponti disolfuro (es. residui di <strong>D-cistina</strong>), favorendo un cross-linking che innesca la via classica anticorpale-indipendente.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Activity className="w-4 h-4 text-rose-600" />
                Proteine Amiloidi & DAMPs Neurodegenerativi
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fibrille di peptide β-amiloide nella malattia di Alzheimer e cristalli di urato monosodico legano direttamente le braccia collagenose di C1q, innescando una neuroinfiammazione cronica mediata da C3a e C5a che accelera il declino sinaptico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CAPITOLO 6: LA VIA LECTINICA */}
      {/* ========================================================================= */}
      <section id="sec-15-6" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-mono text-xs font-bold">15.6</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            La Via Lectinica: Struttura di MBL e Ficoline, Proteasi MASP-1/MASP-2 e Convergenza su C4b2b
          </h2>
        </div>

        <div className={`text-slate-700 ${proseSizeClass} space-y-4`}>
          <p>
            La <strong>Via Lectinica</strong> è un sistema di innesco completamente anticorpo-indipendente, appartenente alla prima linea di difesa dell'immunità innata. Dal punto di vista strutturale e biochimico è straordinariamente analoga alla via classica, ma sostituisce il complesso C1 con <strong>collettine e ficoline plasmatiche associate a proteasi seriniche specifiche</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">MBL (Mannan-Binding Lectin) & Ficoline</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                MBL è una collettina con una conformazione esamerica identica al mazzo di tulipani di C1q. Possiede domini di riconoscimento carboidratico (CRD) che legano con altissima affinità residui terminali di <strong>D-mannosio, L-fucosio e N-acetilglucosammina (GlcNAc)</strong>.
              </p>
              <div className="p-2.5 bg-white border border-slate-200 rounded text-xs text-slate-700">
                <strong>Il codice della spaziatura microbica:</strong> I carboidrati delle cellule eucariotiche umane terminano tipicamente con acido sialico e galattosio, e hanno spaziature irregolari. Sulle pareti di batteri, funghi e lieviti, invece, i residui di mannosio si ripetono con una spaziatura geometrica rigida di circa <strong>4,5 nm</strong>, consentendo il legame cooperativo simultaneo delle molteplici teste di MBL.
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Le Proteasi MASP (MBL-Associated Serine Proteases)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                MBL circola legata a tre proteasi omologhe a C1r e C1s:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-4">
                <li><strong>MASP-1:</strong> Omologa di C1r; quando MBL si flette legando i carboidrati batterici, MASP-1 subisce un'autoattivazione conformazionale.</li>
                <li><strong>MASP-2:</strong> Omologa funzionale di C1s; viene clivata e attivata da MASP-1. È l'enzima effettore che taglia <strong>C4</strong> e <strong>C2</strong> con cinetica identica a C1s.</li>
                <li><strong>MASP-3:</strong> Ruolo regolatorio e di supporto nell'innesco della via alternativa (taglio basale del Fattore D).</li>
              </ul>
            </div>
          </div>

          <p className="pt-1 text-slate-700">
            <strong>Convergenza Enzimatica Perfetta:</strong> Nonostante il diverso sensore di riconoscimento (MBL/MASP invece di C1qrs), la via lectinica cliva C4 e C2, assemblando l'identica <strong>C3 convertasi C4b2b</strong> e la successiva <strong>C5 convertasi C4b2b3b</strong>.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CAPITOLO 7: LA VIA ALTERNATIVA I (TICK-OVER FLUIDO) */}
      {/* ========================================================================= */}
      <section id="sec-15-7" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-mono text-xs font-bold">15.7</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            La Via Alternativa I: Il Meccanismo del "Tick-over" Spontaneo in Fase Fluida e i Fattori B e D
          </h2>
        </div>

        <div className={`text-slate-700 ${proseSizeClass} space-y-4`}>
          <p>
            A differenza delle vie classica e lectinica, la <strong>Via Alternativa</strong> possiede una caratteristica biologica rivoluzionaria: <strong>non richiede alcun trigger estrinseco o patogeno specifico per essere avviata</strong>. Essa è costantemente e perpetuamente attiva nel plasma di tutti gli individui a un ritmo basale continuo ("motore al minimo").
          </p>

          <h3 className="text-base font-bold text-slate-900">1. Il Fenomeno del "Tick-Over" Spontaneo</h3>
          <p>
            La molecola di C3 plasmatica contiene al proprio interno un legame tioestere protetto. Con una frequenza probabilistica basale (circa l'1-2% del C3 plasmatico totale per ora), molecole di acqua libera (H₂O) penetrano nella tasca proteica e idrolizzano spontaneamente il legame tioestere senza clivare la molecola. Questo genera una forma allostericamente modificata denominata:
            <span className="font-mono text-xs font-bold text-indigo-800 bg-indigo-50 px-2 py-1 rounded ml-1">
              C3(H₂O) o "C3 tick-over"
            </span>
          </p>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
            <h4 className="text-sm font-bold text-slate-900">2. Reclutamento del Fattore B e Clivaggio da Parte del Fattore D</h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <p>
                Il cambio di forma di C3(H₂O) espone un sito di legame per una glicoproteina plasmatica a singolo filamento chiamata <strong>Fattore B</strong>.
              </p>
              <ul className="space-y-2 pl-4 list-disc text-slate-600">
                <li>
                  In presenza obbligatoria di ioni <strong>Magnesio (Mg²⁺)</strong>, il Fattore B si complessa a C3(H₂O), formando il dimero transitorio [C3(H₂O) · B].
                </li>
                <li>
                  Questo complesso viene riconosciuto dalla proteasi plasmatica <strong>Fattore D</strong>. Il Fattore D è un'eccezione fisiologica straordinaria: <em>circola nel sangue già in forma cataliticamente attiva</em> (non come zimogeno inattivo!), ma può tagliare il Fattore B solo quando questo è complessato a C3.
                </li>
                <li>
                  Il Fattore D taglia il Fattore B rilasciando il frammento solubile <strong>Ba</strong> e lasciando la subunità catalitica maggiore <strong>Bb</strong> ancorata:
                </li>
              </ul>
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-center font-mono font-bold text-indigo-900 text-sm">
                C3(H₂O)Bb = C3 Convertasi Fluida Iniziale della Via Alternativa
              </div>
              <p className="text-xs text-slate-600 pt-1">
                La convertasi fluida C3(H₂O)Bb ha una vita media brevissima ma continua a scindere costantemente piccole quantità di C3 plasmatico normale nelle due frazioni <strong>C3a</strong> e <strong>C3b</strong> nel torrente circolatorio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CAPITOLO 8: LA VIA ALTERNATIVA II (FASE SOLIDA, PROPERDINA & LOOP) */}
      {/* ========================================================================= */}
      <section id="sec-15-8" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-mono text-xs font-bold">15.8</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            La Via Alternativa II: Fase Solida su Membrane Eterologhe, Ruolo della Properdina e Loop di Amplificazione
          </h2>
        </div>

        <div className={`text-slate-700 ${proseSizeClass} space-y-4`}>
          <p>
            Cosa accade al C3b continuamente generato dalla convertasi fluida C3(H₂O)Bb? Si aprono due destini radicalmente divergenti a seconda dell'ambiente incontrato:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl space-y-2">
              <span className="text-xs font-bold font-mono uppercase text-red-700 block">Scenario A: Destino nel Plasma o su Cellule Self</span>
              <h3 className="font-bold text-slate-900 text-sm">Inattivazione Idrolitica & Controllo</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Se C3b rimane nella fase fluida, il suo legame tioestere reattivo reagisce con l'acqua in meno di <strong>60 microsecondi</strong>, diventando inerte. Se urta una cellula self sana, i regolatori di membrana (DAF, MCP) e il Fattore H staccano immediatamente il Fattore B e inattivano C3b, arrestando sul nascere qualsiasi reazione.
              </p>
            </div>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
              <span className="text-xs font-bold font-mono uppercase text-emerald-700 block">Scenario B: Impatto su Membrana Patogena</span>
              <h3 className="font-bold text-slate-900 text-sm">Ancoraggio Covalente & Fase Solida</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Se C3b urta la parete di un batterio (priva di acido sialico e di regolatori umani), il legame tioestere reagisce covalentemente con carboidrati o proteine della superficie batterica. Il C3b ancorato lega il Fattore B, che viene clivato dal Fattore D: si assembla così la potente:
              </p>
              <div className="p-2 bg-white border border-emerald-300 rounded font-mono font-bold text-emerald-900 text-xs text-center">
                C3bBb = C3 Convertasi in Fase Solida
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-purple-900 font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-purple-700" />
              <span>La Properdina (Fattore P): L'Unico Regolatore Positivo del Sistema</span>
            </div>
            <p className="text-xs sm:text-sm text-purple-950 leading-relaxed">
              La convertasi C3bBb ha un'emivita intrinseca estremamente breve (decade in meno di 90 secondi se lasciata a se stessa). Entra qui in gioco la <strong>Properdina (Fattore P)</strong>, una γ-globulina plasmatica sintetizzata dai neutrofili e rilasciata dai loro granuli secondari (nonché presente nelle trappole extracellulari NETs):
            </p>
            <ul className="space-y-1.5 text-xs text-purple-900 list-disc pl-4">
              <li>
                La Properdina si lega con altissima selettività a complessi C3bBb depositati su superfici estranee o corpi apoptotici.
              </li>
              <li>
                <strong>Aumenta l'emivita della convertasi da 90 secondi a oltre 30 minuti</strong> (incremento di &gt; 10 volte!), fungendo da culla conformazionale che impedisce la dissociazione spontanea della subunità catalitica Bb.
              </li>
              <li>
                La convertasi alternativa stabilizzata <span className="font-mono font-bold text-purple-900">C3bBbP</span> cliva quindi C3 a velocità supersonica.
              </li>
            </ul>
          </div>

          <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2">
            <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-amber-400" />
              Il Colossale "Loop di Amplificazione" della Via Alternativa
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              La Prof.ssa Soriani ha sottolineato con massima enfasi questo concetto chiave: <strong>qualunque sia la via d'innesco iniziale (classica, lectinica o alternativa), ciascuna molecola di C3b depositata sulla superficie può reclutare nuovo Fattore B e Fattore D, alimentando a feedback positivo la via alternativa!</strong>
            </p>
            <p className="text-xs text-amber-300 font-mono">
              In vivo, oltre l'80-90% dell'intero deposito finale di C3b e di MAC sulla superficie di un patogeno è generato dall'amplificazione a cascata della via alternativa, anche quando la risposta è stata innescata originariamente da anticorpi o da MBL!
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SIMULATORE 1: COMPARATORE DELLE TRE VIE */}
      {/* ========================================================================= */}
      <section id="sim-complement-pathways" className="bg-white rounded-2xl border-2 border-blue-500/30 p-6 sm:p-8 space-y-6 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="p-2 bg-blue-600 text-white rounded-lg shadow-xs">
              <SlidersHorizontal className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Simulatore 1: Attivazione & Resa Comparata delle Tre Vie del Complemento
              </h3>
              <p className="text-xs text-slate-500">
                Sperimenta l'interazione tra bersaglio biologico, anticorpi, ioni bivalenti e regolatori per osservare la convertasi generata e la risposta efettiva
              </p>
            </div>
          </div>
          <span className="text-[11px] font-mono uppercase bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md font-semibold border border-blue-200">
            Laboratorio Biofisico
          </span>
        </div>

        {/* Controlli Interattivi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {/* Target Surface */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 block">1. Superficie Bersaglio:</label>
            <select
              value={sim1Surface}
              onChange={(e) => setSim1Surface(e.target.value as TargetSurface)}
              className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
            >
              <option value="gram_negative">Batterio Gram-negativo (LPS, privo acido sialico)</option>
              <option value="mannose_yeast">Parete di Lievito (Residui spaziati di Mannosio)</option>
              <option value="human_self">Cellula Umana Self (Eritrocita/Endotelio con acido sialico)</option>
              <option value="hiv_gp120">Virione HIV (gp120 esposta su capside)</option>
            </select>
          </div>

          {/* Anticorpi */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 block">2. Anticorpi Specifici nel Siero:</label>
            <select
              value={sim1Antibodies}
              onChange={(e) => setSim1Antibodies(e.target.value as AntibodyType)}
              className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
            >
              <option value="none">Nessun anticorpo specifico (Siero naive)</option>
              <option value="igm_pentamer">IgM Pentamerica (Conformazione a graffa)</option>
              <option value="igg_double">Almeno due molecole di IgG ravvicinate</option>
            </select>
          </div>

          {/* Properdina */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 block">3. Properdina (Fattore P):</label>
            <button
              type="button"
              onClick={() => setSim1ProperdinActive(!sim1ProperdinActive)}
              className={`w-full p-2 rounded-lg font-bold border transition-colors flex items-center justify-center gap-2 ${
                sim1ProperdinActive
                  ? 'bg-purple-50 text-purple-800 border-purple-300'
                  : 'bg-slate-100 text-slate-500 border-slate-300'
              }`}
            >
              {sim1ProperdinActive ? <Check className="w-4 h-4 text-purple-700" /> : <XCircle className="w-4 h-4 text-slate-400" />}
              {sim1ProperdinActive ? 'Presente & Funzionante' : 'Deficitaria (Mutazione X-linked)'}
            </button>
          </div>

          {/* Ioni Mg2+ e Ca2+ */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 block">4. Ioni Bivalenti (Mg²⁺ / Ca²⁺):</label>
            <button
              type="button"
              onClick={() => setSim1MgCaPresent(!sim1MgCaPresent)}
              className={`w-full p-2 rounded-lg font-bold border transition-colors flex items-center justify-center gap-2 ${
                sim1MgCaPresent
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-rose-50 text-rose-800 border-rose-300'
              }`}
            >
              {sim1MgCaPresent ? <Check className="w-4 h-4 text-emerald-700" /> : <XCircle className="w-4 h-4 text-rose-600" />}
              {sim1MgCaPresent ? 'Presenti (Fisiologici)' : 'Chelati (Provetta con EDTA)'}
            </button>
          </div>
        </div>

        {/* Monitor Dinamico Risultati */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white rounded-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-blue-400 animate-pulse" />
              Stato Dinamico delle Cascate del Complemento
            </span>
            <span className="text-xs font-mono text-slate-400">
              Analizzatore in tempo reale
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            {/* Via Classica */}
            <div className={`p-3 rounded-lg border ${isClassicalActive ? 'bg-blue-950/80 border-blue-500 text-blue-200' : 'bg-slate-800/60 border-slate-700 text-slate-400'}`}>
              <div className="font-bold flex items-center justify-between mb-1">
                <span>Via Classica (C1qrs)</span>
                {isClassicalActive ? <span className="text-emerald-400 font-mono">ATTIVA</span> : <span className="text-slate-500 font-mono">SILENTE</span>}
              </div>
              <p className="text-[11px] text-slate-300">
                {isClassicalActive
                  ? sim1Surface === 'hiv_gp120'
                    ? 'Innescata direttamente da gp120 (senza anticorpi)'
                    : `Innescata da C1q legato a ${sim1Antibodies === 'igm_pentamer' ? 'IgM' : 'IgG'}`
                  : 'Assenza di anticorpi specifici o blocco da EDTA.'}
              </p>
            </div>

            {/* Via Lectinica */}
            <div className={`p-3 rounded-lg border ${isLectinActive ? 'bg-indigo-950/80 border-indigo-500 text-indigo-200' : 'bg-slate-800/60 border-slate-700 text-slate-400'}`}>
              <div className="font-bold flex items-center justify-between mb-1">
                <span>Via Lectinica (MBL/MASP)</span>
                {isLectinActive ? <span className="text-emerald-400 font-mono">ATTIVA</span> : <span className="text-slate-500 font-mono">SILENTE</span>}
              </div>
              <p className="text-[11px] text-slate-300">
                {isLectinActive
                  ? 'MBL lega i residui carboidratici microbici spaziati'
                  : 'Superficie priva del codice di spaziatura mannosio (o self umana).'}
              </p>
            </div>

            {/* Via Alternativa */}
            <div className={`p-3 rounded-lg border ${isAlternativeSolidActive ? 'bg-purple-950/80 border-purple-500 text-purple-200' : 'bg-slate-800/60 border-slate-700 text-slate-400'}`}>
              <div className="font-bold flex items-center justify-between mb-1">
                <span>Via Alternativa Solida</span>
                {isAlternativeSolidActive ? <span className="text-emerald-400 font-mono">AMPLIFICATA</span> : <span className="text-slate-500 font-mono">NON ATTIVA</span>}
              </div>
              <p className="text-[11px] text-slate-300">
                {isAlternativeSolidActive
                  ? 'C3b ancorato stabilizzato da Properdina (loop esplosivo)'
                  : isSelfProtected
                  ? 'Bloccata dai protettori umani (Fattore H, DAF)'
                  : !sim1ProperdinActive
                  ? 'Decadimento rapido di C3bBb per assenza di Properdina'
                  : 'Inattiva.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 text-xs border-t border-slate-800">
            <div>
              <span className="text-slate-400 block mb-0.5">C3 Convertasi Predominante:</span>
              <span className="font-bold text-amber-300 font-mono">{primaryC3Convertase}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">C5 Convertasi:</span>
              <span className="font-bold text-blue-300 font-mono">{primaryC5Convertase}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Resa di Opsonizzazione C3b:</span>
              <span className="font-bold text-emerald-400 font-mono">{c3bYield}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Rilascio Anafilotossine (C5a):</span>
              <span className="font-bold text-rose-400 font-mono">{c5aInflammation}</span>
            </div>
          </div>

          <div className="p-3 bg-slate-800/90 rounded-lg text-xs flex items-center gap-2 border border-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-slate-200">
              <strong>Esito Biologico Finale:</strong> {finalOutcome}
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CAPITOLO 9: COMPLESSO DI ATTACCO ALLA MEMBRANA (MAC) */}
      {/* ========================================================================= */}
      <section id="sec-15-9" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-mono text-xs font-bold">15.9</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Fase Comune Tardiva: Complesso di Attacco alla Membrana (MAC: C5b, C6, C7, C8, Poly-C9) e Lisi Osmotica
          </h2>
        </div>

        <div className={`text-slate-700 ${proseSizeClass} space-y-4`}>
          <p>
            Tutte e tre le vie di attivazione convergono sulla formazione di una <strong>C5 convertasi</strong> (C4b2b3b per la classica e lectinica; C3bBbC3b per l'alternativa). Il clivaggio di C5 dà inizio alla fase non enzimatica terminale:
          </p>

          <ol className="space-y-3 pl-4 list-decimal text-xs sm:text-sm text-slate-700">
            <li>
              <strong>Scissione di C5 in C5a e C5b:</strong> C5a, la più potente anafilotossina, viene liberata nel microambiente. La subunità maggiore <strong>C5b</strong> subisce una transizione conformazionale instabile e funge da piattaforma di nucleazione iniziale.
            </li>
            <li>
              <strong>Reclutamento di C6:</strong> C6 si associa a C5b stabilizzandone la conformazione. Il complesso binario C5b-6 rimane idrofilico e solubile.
            </li>
            <li>
              <strong>Associazione di C7 e Transizione Idrofobica:</strong> Quando C7 si unisce al complesso formando C5b-6-7, la molecola subisce un ripiegamento allosterico: espone un dominio idrofobico che <strong>si ancora all'interno del doppio strato fosfolipidico</strong> della membrana plasmatica o della parete batterica.
            </li>
            <li>
              <strong>Inserimento di C8:</strong> C8 è un eterotrimero formato da tre catene (α, β, γ). La catena β si lega a C5b, mentre la catena α perfora fisicamente l'intero spessore della membrana cellulare, creando una prima breccia permeabile molto piccola.
            </li>
            <li>
              <strong>Polimerizzazione Esplosiva di C9 (Il Poro del MAC):</strong> Il complesso ancorato C5b-8 funge da catalizzatore di polimerizzazione per la proteina plasmatica <strong>C9</strong> (omologa della perforina dei linfociti T citotossici e delle cellule NK). Tra <strong>12 e 18 molecole di C9</strong> si assemblano a cerchio nel piano della membrana, formando un <strong>poro cilindrico idrofilico transmembrana con diametro interno di 5–10 nanometri</strong>.
            </li>
          </ol>

          {/* Dettaglio Biofisico della Lisi */}
          <div className="p-4 bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-red-900 font-bold text-sm">
              <Activity className="w-4 h-4 text-red-700" />
              <span>Biofisica della Lisi Colloido-Osmotica</span>
            </div>
            <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
              L'interno del batterio o della cellula eucariotica è stipato di macromolecole cariche negativamente (proteine, acidi nucleici) non diffusibili. L'apertura dei pori del MAC permette l'ingresso incontrollato e passivo di ioni Na⁺ e <strong>molecole d'acqua per gradiente osmotico</strong>, mentre le macromolecole interne non possono uscire. La cellula si rigonfia drammaticamente fino a superare la resistenza elastica della membrana, andando incontro a <strong>lisi colloido-osmotica (scoppio)</strong>.
            </p>
            <p className="text-xs text-red-800 font-medium pt-1">
              <strong>Nota clinica fondamentale:</strong> Il MAC è letale per i batteri Gram-negativi dotati di membrana esterna lipidica accessibile (come <em>Neisseria meningitidis</em>), mentre i batteri Gram-positivi sono naturalmente protetti dal loro spesso strato peptidoglicanico (fino a 80 nm), che impedisce al MAC di raggiungere la membrana plasmatica sottostante: contro di essi l'arma decisiva del complemento non è il MAC, ma l'<strong>opsonizzazione da C3b per la fagocitosi</strong>!
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SIMULATORE 2: ASSEMBLAGGIO MAC & INIBITORI (CD59 / VITRONECTINA) */}
      {/* ========================================================================= */}
      <section id="sim-mac-assembly" className="bg-white rounded-2xl border-2 border-indigo-500/30 p-6 sm:p-8 space-y-6 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="p-2 bg-indigo-600 text-white rounded-lg shadow-xs">
              <Microscope className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Simulatore 2: Assemblaggio Macromolecolare del MAC & Test Inibitori del Self
              </h3>
              <p className="text-xs text-slate-500">
                Avanza passo dopo passo nella sequenza C5b &rarr; C6 &rarr; C7 &rarr; C8 &rarr; Poly-C9 e testa l'azione protettiva di CD59 (Protectina) e Proteina S
              </p>
            </div>
          </div>
          <span className="text-[11px] font-mono uppercase bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md font-semibold border border-indigo-200">
            Laboratorio Macromolecolare
          </span>
        </div>

        {/* Stepper Stadio MAC */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-bold text-slate-700">
            <span>Stadio di Assemblaggio:</span>
            <span className="font-mono text-indigo-700">
              {macStage === 1 && 'Stadio 1: C5b isolato (instabile)'}
              {macStage === 2 && 'Stadio 2: Complesso solubile C5b-6'}
              {macStage === 3 && 'Stadio 3: Complesso C5b-6-7 (transizione idrofobica)'}
              {macStage === 4 && 'Stadio 4: Complesso C5b-8 (perforazione iniziale)'}
              {macStage === 5 && 'Stadio 5: C5b-9 (12-18 molecole di C9 polimerizzate in poro)'}
            </span>
          </div>

          <div className="grid grid-cols-5 gap-2 text-center text-xs">
            {[1, 2, 3, 4, 5].map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setMacStage(st)}
                className={`py-2 px-1 rounded-lg border font-bold transition-all ${
                  macStage === st
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                Passo {st}
              </button>
            ))}
          </div>
        </div>

        {/* Inibitori Toggles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-800">CD59 (Protectina su Membrana):</span>
              <button
                type="button"
                onClick={() => setCd59Present(!cd59Present)}
                className={`px-3 py-1 rounded-md font-bold transition-colors ${
                  cd59Present
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                }`}
              >
                {cd59Present ? 'CD59 Attiva (Self)' : 'Assente (es. EPN)'}
              </button>
            </div>
            <p className="text-[11px] text-slate-500">
              Glicoproteina GPI umana: blocca stericamente l'incorporazione e la polimerizzazione di C9 nel complesso C5b-8.
            </p>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-800">Proteina S (Vitronectina in Fase Fluida):</span>
              <button
                type="button"
                onClick={() => setProteinSPresent(!proteinSPresent)}
                className={`px-3 py-1 rounded-md font-bold transition-colors ${
                  proteinSPresent
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                }`}
              >
                {proteinSPresent ? 'Attiva (Tamponante)' : 'Disattivata'}
              </button>
            </div>
            <p className="text-[11px] text-slate-500">
              Lega C5b-7 in fase fluida prima che possa ancorarsi alla membrana di cellule bystander vicine.
            </p>
          </div>
        </div>

        {/* Visualizzazione Interattiva Poro e Membrana */}
        <div className="p-5 bg-slate-900 rounded-xl text-white space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-xs">
            <span className="font-mono text-indigo-400 font-bold uppercase">
              Microscopia Virtuale del Doppio Strato Fosfolipidico
            </span>
            <span className="text-[11px] text-slate-400 font-mono">Poro: ~7 nm</span>
          </div>

          <div className="h-28 bg-slate-950 rounded-lg border border-slate-800 relative flex items-center justify-center overflow-hidden">
            {/* Membrana Lipidica Superiore e Inferiore */}
            <div className="absolute inset-x-0 top-3 h-2 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 opacity-60" />
            <div className="absolute inset-x-0 bottom-3 h-2 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 opacity-60" />

            {/* Rappresentazione Macromolecolare */}
            <div className="z-10 flex items-center gap-2">
              {macStage >= 1 && (
                <div className="px-2 py-1 bg-blue-600 rounded text-[11px] font-mono font-bold text-white shadow-xs animate-fade-in">
                  C5b
                </div>
              )}
              {macStage >= 2 && (
                <div className="px-2 py-1 bg-cyan-600 rounded text-[11px] font-mono font-bold text-white shadow-xs animate-fade-in">
                  C6
                </div>
              )}
              {macStage >= 3 && (
                <div className={`px-2 py-1 rounded text-[11px] font-mono font-bold text-white shadow-xs ${proteinSPresent ? 'bg-amber-600 ring-2 ring-amber-300' : 'bg-emerald-600'}`}>
                  C7 {proteinSPresent && '(Bloccato da S)'}
                </div>
              )}
              {macStage >= 4 && (
                <div className={`px-2 py-1 rounded text-[11px] font-mono font-bold text-white shadow-xs ${cd59Present ? 'bg-blue-700 ring-2 ring-blue-300' : 'bg-purple-600'}`}>
                  C8 {cd59Present && '(Frenato da CD59)'}
                </div>
              )}
              {macStage === 5 && !cd59Present && !proteinSPresent && (
                <div className="px-3 py-1 bg-red-600 rounded-full text-xs font-mono font-bold text-white shadow-lg animate-pulse">
                  Poro Poly-C9 (12-18 monomeri) 💥
                </div>
              )}
            </div>

            {/* Flusso di Ioni/Acqua se Lisi */}
            {macLysisOccurs && (
              <div className="absolute inset-y-0 flex items-center justify-center pointer-events-none">
                <span className="text-[11px] text-cyan-300 font-mono font-bold bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500">
                  Flusso Massivo H₂O / Na⁺ Incontrollato
                </span>
              </div>
            )}
          </div>

          <div className={`p-3 rounded-lg border text-xs ${macStatusColor}`}>
            <strong>Diagnostica Biofisica:</strong> {macStatusText}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CAPITOLO 10: SISTEMI DI CONTROLLO E INIBIZIONE MULTI-LIVELLO */}
      {/* ========================================================================= */}
      <section id="sec-15-10" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-mono text-xs font-bold">15.10</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Sistemi di Controllo e Inibitori Multi-Livello: Protezione del Self & Patologie da Deficit
          </h2>
        </div>

        <div className={`text-slate-700 ${proseSizeClass} space-y-4`}>
          <p>
            Poiché il complemento genera potenti anafilotossine flogistiche e armi litiche transmembrana a getto continuo, l'evoluzione ha sviluppato una <strong>fitta rete di proteine regolatrici solubili e di membrana</strong> che arrestano la cascata su ogni singola cellula dell'ospite (self), preservandola dalla distruzione:
          </p>

          <div className="space-y-4 pt-1">
            {/* Livello 1: C1-INH */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-mono font-bold">1</span>
                  C1-INH (C1 Inhibitor): Il Freno Iniziale della Fase di Riconoscimento
                </h3>
                <span className="text-[11px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">Proteina Solubile (Serpina)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                È una serina-proteasi inibitrice (serpina) circolante nel plasma. Funge da "finto substrato" per le proteasi attive: si lega irreversibilmente ai siti catalitici di <strong>C1r, C1s e MASP-2</strong>, staccandole fisicamente da C1q e MBL e arrestando la via classica e lectinica prima del taglio di C4.
              </p>
              <div className="p-2.5 bg-rose-50 border border-rose-200 rounded text-xs text-rose-900">
                <strong>Correlazione Clinica: Angioedema Ereditario (HAE):</strong> Mutazioni autosomiche dominanti del gene di C1-INH provocano la mancata inibizione della <em>callicreina plasmatica</em> e del fattore XII. Ne deriva una massiva e periodica generazione di <strong>bradichinina</strong>, causando edemi acuti e non pruriginosi a livello cutaneo, gastrointestinale e, soprattutto, laringeo (con rischio imminente di asfissia e morte se non trattato prontamente).
              </div>
            </div>

            {/* Livello 2: Regolazione delle Convertasi C3/C5 */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-mono font-bold">2</span>
                  Regolazione delle Convertasi: Decadimento Accelerato (DAF, CR1) & Clivaggio del C3b (Fattore I, MCP, Fattore H)
                </h3>
                <span className="text-[11px] font-mono bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-200">Membrana & Fase Fluida</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white border border-slate-200 rounded-lg space-y-1">
                  <span className="font-bold text-indigo-900 block">Attività di Dissociazione (Decay-Accelerating)</span>
                  <p className="text-slate-600">
                    <strong>DAF (Decay-Accelerating Factor / CD55):</strong> Glicoproteina ancorata a GPI presente su tutte le cellule del sangue e dell'endotelio. Si interpone stericamente nelle convertasi formate, scalzando <em>C2b da C4b</em> (via classica) e <em>Bb da C3b</em> (via alternativa).
                  </p>
                  <p className="text-slate-600">
                    <strong>Fattore H & C4bp:</strong> Proteine solubili che svolgono la medesima azione decay in fase fluida (Fattore H per la via alternativa, C4-binding protein per la classica).
                  </p>
                </div>

                <div className="p-3 bg-white border border-slate-200 rounded-lg space-y-1">
                  <span className="font-bold text-indigo-900 block">Clivaggio Enzimatico Irreversibile (Fattore I)</span>
                  <p className="text-slate-600">
                    <strong>Fattore I (C3b/C4b Inactivator):</strong> Serin-proteasi plasmatica libera. Da solo è inattivo, ma in presenza dei cofattori cellulari <strong>MCP (CD46)</strong> o <strong>CR1 (CD35)</strong>, o dei cofattori solubili <strong>Fattore H</strong> e <strong>C4bp</strong>, taglia C3b in <strong>iC3b</strong> e successivamente in C3dg.
                  </p>
                  <p className="text-slate-600">
                    <em>iC3b</em> ha perso ogni capacità di formare convertasi o MAC, ma agisce da potente opsonina per i fagociti.
                  </p>
                </div>
              </div>
            </div>

            {/* Livello 3: Blocco del MAC (CD59 e Proteina S) */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-purple-100 text-purple-800 flex items-center justify-center text-xs font-mono font-bold">3</span>
                  Controllo del MAC: Protectina (CD59) e Vitronectina (Proteina S)
                </h3>
                <span className="text-[11px] font-mono bg-purple-50 text-purple-700 px-2 py-0.5 rounded border border-purple-200">Filtro Terminale</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Se nonostante i blocchi a monte una C5 convertasi dovesse generarsi vicino a una cellula self, intervengono due freni finali: <strong>CD59 (Protectina)</strong>, che blocca stericamente la polimerizzazione di C9 sulle membrane dell'ospite, e la <strong>Proteina S (Vitronectina)</strong>, che lega e tampona il complesso solubile C5b-7 circolante.
              </p>
              <div className="p-2.5 bg-blue-50 border border-blue-200 rounded text-xs text-blue-950">
                <strong>Correlazione Clinica: Emoglobinuria Parossistica Notturna (EPN):</strong> Mutazione somatica acquisita nel gene <em>PIGA</em> delle cellule staminali emopoietiche, con mancata sintesi dell'ancora GPI. I cloni eritrocitari privi di GPI non possono esprimere né <strong>CD55 (DAF)</strong> né <strong>CD59 (Protectina)</strong> sulla membrana. Di notte, la fisiologica e lieve acidosi respiratoria amplifica la via alternativa del complemento, scatenando una massiva lisi eritrocitaria intravascolare complementare mediata dal MAC con emoglobinuria scura al mattino, trombosi e anemia emolitica grave (trattata mirabilmente con <em>Eculizumab</em>, anticorpo monoclonale anti-C5).
              </div>
            </div>
          </div>

          {/* Mappa Concettuale dei Sistemi di Regolazione e Patologie del Complemento */}
          <ConceptMapFlow {...MAP_LEZIONE_15_REGULATION_AND_CLINICS} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TABELLE COMPARATIVE MEDICHE */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        {/* Tabella 1: Vie del Complemento */}
        <div id="tabella-15-1" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs overflow-hidden">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-mono text-xs font-bold">Tabella 15.1</span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Quadro Comparativo Integrato delle Tre Vie di Attivazione del Complemento
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-200 font-bold">
                  <th className="p-2.5">Parametro</th>
                  <th className="p-2.5 text-blue-800">Via Classica</th>
                  <th className="p-2.5 text-indigo-800">Via Lectinica</th>
                  <th className="p-2.5 text-purple-800">Via Alternativa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900">Trigger Primario</td>
                  <td className="p-2.5">Complessi antigene-anticorpo (IgM o cluster IgG) o PCR/PTX3</td>
                  <td className="p-2.5">Residui carboidratici (mannosio, GlcNAc) con spaziatura ~4,5 nm</td>
                  <td className="p-2.5">Superfici microbiche eterologhe prive di acido sialico / LPS / DAMPs</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900">Sensore / Riconoscimento</td>
                  <td className="p-2.5 font-mono">C1q (6 teste globulari a tulipano)</td>
                  <td className="p-2.5 font-mono">MBL (Mannan-Binding Lectin) e Ficoline</td>
                  <td className="p-2.5 font-mono">C3(H₂O) idrolizzato spontaneamente ("tick-over")</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900">Serin-Proteasi Iniziali</td>
                  <td className="p-2.5 font-mono">C1r e C1s (tetramero Ca²⁺-dipendente)</td>
                  <td className="p-2.5 font-mono">MASP-1 e MASP-2</td>
                  <td className="p-2.5 font-mono">Fattore D (attivo costitutivamente nel plasma)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900">Cofattori di Membrana</td>
                  <td className="p-2.5">Nessuno obbligatorio</td>
                  <td className="p-2.5">Nessuno obbligatorio</td>
                  <td className="p-2.5 font-mono">Properdina (Fattore P, stabilizzatore essenziale)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900">C3 Convertasi</td>
                  <td className="p-2.5 font-mono font-bold text-blue-700">C4b2b</td>
                  <td className="p-2.5 font-mono font-bold text-indigo-700">C4b2b</td>
                  <td className="p-2.5 font-mono font-bold text-purple-700">C3bBb (fase solida) / C3(H₂O)Bb (fluida)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900">C5 Convertasi</td>
                  <td className="p-2.5 font-mono font-bold text-blue-700">C4b2b3b</td>
                  <td className="p-2.5 font-mono font-bold text-indigo-700">C4b2b3b</td>
                  <td className="p-2.5 font-mono font-bold text-purple-700">C3bBbC3b</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900">Dipendenza da Anticorpi</td>
                  <td className="p-2.5 font-bold text-emerald-700">SÌ (Canonica)</td>
                  <td className="p-2.5 font-bold text-slate-500">NO (Innata pura)</td>
                  <td className="p-2.5 font-bold text-slate-500">NO (Innata pura)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900">Requisito Ionico Divalente</td>
                  <td className="p-2.5 font-mono">Ca²⁺ (per C1) e Mg²⁺ (per C2)</td>
                  <td className="p-2.5 font-mono">Ca²⁺ (per MBL) e Mg²⁺ (per C2)</td>
                  <td className="p-2.5 font-mono">Mg²⁺ (obbligatorio per Fattore B)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabella 2: Regolatori e Inibitori */}
        <div id="tabella-15-2" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs overflow-hidden">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded font-mono text-xs font-bold">Tabella 15.2</span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Compendio Clinico-Molecolare dei Regolatori del Complemento e Correlazioni Patologiche
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-200 font-bold">
                  <th className="p-2.5">Fattore Regolatore</th>
                  <th className="p-2.5">Localizzazione</th>
                  <th className="p-2.5">Bersaglio Molecolare</th>
                  <th className="p-2.5">Meccanismo Funzionale</th>
                  <th className="p-2.5">Patologia da Deficit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900 font-mono">C1-INH (C1 Inhibitor)</td>
                  <td className="p-2.5">Plasma (Solubile)</td>
                  <td className="p-2.5 font-mono">C1r, C1s, MASP-2, Callicreina</td>
                  <td className="p-2.5">Serpina "suicida", stacca le protease da C1q/MBL</td>
                  <td className="p-2.5 text-rose-700 font-semibold">Angioedema Ereditario (HAE) con edema da bradichinina</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900 font-mono">DAF (CD55)</td>
                  <td className="p-2.5">Membrana Cellulare (Ancora GPI)</td>
                  <td className="p-2.5 font-mono">C4b2b e C3bBb</td>
                  <td className="p-2.5">Acceleratore di decadimento: dissocia C2b e Bb</td>
                  <td className="p-2.5 text-rose-700 font-semibold">Emoglobinuria Parossistica Notturna (EPN)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900 font-mono">MCP (CD46)</td>
                  <td className="p-2.5">Membrana Cellulare (Integrale)</td>
                  <td className="p-2.5 font-mono">C3b e C4b</td>
                  <td className="p-2.5">Cofattore essenziale per il taglio da parte del Fattore I</td>
                  <td className="p-2.5 text-rose-700 font-semibold">Sindrome Emolitico Uremica atipica (aHUS)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900 font-mono">CR1 (CD35)</td>
                  <td className="p-2.5">Eritrociti e Leucociti</td>
                  <td className="p-2.5 font-mono">C3b, C4b, C3(H₂O)</td>
                  <td className="p-2.5">Sia decadimento accelerato che cofattore per Fattore I</td>
                  <td className="p-2.5 text-rose-700 font-semibold">Difetto di clearance immunocomplessi (Lupus / SLE)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900 font-mono">Fattore H</td>
                  <td className="p-2.5">Plasma (Solubile)</td>
                  <td className="p-2.5 font-mono">C3b su superfici ricche di acido sialico (Self)</td>
                  <td className="p-2.5">Dissocia Bb da C3b e fa da cofattore per Fattore I</td>
                  <td className="p-2.5 text-rose-700 font-semibold">aHUS e Glomerulopatia da C3 (Dense Deposit Disease)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900 font-mono">Fattore I</td>
                  <td className="p-2.5">Plasma (Solubile)</td>
                  <td className="p-2.5 font-mono">C3b e C4b legati a cofattori</td>
                  <td className="p-2.5">Serin-proteasi: taglia C3b nell'opsonina inattiva iC3b</td>
                  <td className="p-2.5 text-rose-700 font-semibold">Infezioni batteriche piogeniche gravi e aHUS</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900 font-mono">CD59 (Protectina)</td>
                  <td className="p-2.5">Membrana Cellulare (Ancora GPI)</td>
                  <td className="p-2.5 font-mono">Complesso C5b-8</td>
                  <td className="p-2.5">Blocco sterico dell'incorporazione e polimerizzazione di C9</td>
                  <td className="p-2.5 text-rose-700 font-semibold">Emoglobinuria Parossistica Notturna (EPN)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-slate-900 font-mono">Proteina S (Vitronectina)</td>
                  <td className="p-2.5">Plasma (Solubile)</td>
                  <td className="p-2.5 font-mono">Complesso C5b-7 in fase fluida</td>
                  <td className="p-2.5">Impedisce l'inserzione del MAC nelle membrane sane vicine</td>
                  <td className="p-2.5 text-slate-500">Danno endoteliale bystander diffuso</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FLASHCARD DI RIPASSO ATTIVO */}
      {/* ========================================================================= */}
      {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_QUESTIONS} lessonNumber={15} title="Verifica dell'Apprendimento · Lezione 15" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS} lessonNumber={15} title="Flashcard di Ripasso Attivo · Lezione 15" />
    </article>
  );
};
