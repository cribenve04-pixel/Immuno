import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import React, { useState } from 'react';
import { InteractiveGerminalCenterSimulator } from './InteractiveGerminalCenterSimulator';
import { InteractiveClassSwitchSimulator } from './InteractiveClassSwitchSimulator';
import {
  GC_ZONE_COMPARISON,
  MEMORY_TYPE_COMPARISON,
  CLASS_SWITCH_RULES,
  HIGM_SUBTYPES,
  QUIZ_LEZIONE_13,
  FLASHCARDS_LEZIONE_13
} from '../data/lezione13Content';
import { ConceptMapFlow } from './ConceptMapFlow';
import { MAP_LEZIONE_13_GERMINAL_CENTER, MAP_LEZIONE_13_TCR_TRANSDUCTION } from '../data/conceptMapsData';
import {
  Layers,
  Shield,
  Zap,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ChevronRight,
  ShieldAlert,
  Dna,
  Activity,
  Sparkles,
  Info,
  Check,
  Microscope,
  Stethoscope,
  Pill,
  Clock,
  Flame,
  FileText,
  AlertCircle,
  Users,
  Award,
  Lock,
  Unlock,
  Sliders,
  Brain,
  Droplets,
  HeartHandshake,
  BookOpen,
  Scissors
} from 'lucide-react';

interface Lezione13ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione13View: React.FC<Lezione13ViewProps> = ({ isSerif, fontSize }) => {
  // Navigation active tab
  const [activeTab, setActiveTab] = useState<'textbook' | 'gc_sim' | 'csr_sim' | 'quiz' | 'flashcards'>('textbook');

  // Quiz state
  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  return (
    <div className="space-y-10">
      {/* Textbook Hero Header */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white">
          <div className="flex flex-wrap items-center gap-2 text-xs text-indigo-300 mb-3 font-mono">
            <span>Corso di Laurea Magistrale in Medicina e Chirurgia</span>
            <span aria-hidden="true">·</span>
            <span>Immunologia Clinica e Molecolare</span>
            <span aria-hidden="true">·</span>
            <span className="bg-indigo-800/80 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700">
              Lezione 13 / 33
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
            Attivazione dei Linfociti B, Interazione B-T e la Reazione del Centro Germinativo
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-4 font-mono">
            <span><strong>Docente:</strong> Prof.ssa Rosa Molfetta</span>
            <span>·</span>
            <span><strong>Data:</strong> 29 Ottobre 2025, 2ª ora</span>
            <span>·</span>
            <span><strong>Sbobinatore:</strong> Arianna Brosio</span>
            <span>·</span>
            <span><strong>Revisore:</strong> Letizia Boccabella</span>
          </div>

          {/* Quick Stats Pill Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800 text-xs">
            <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700">
              <span className="text-slate-400 block text-[11px]">Cinetica Centroblasti</span>
              <span className="text-base font-bold text-cyan-400 font-mono">6 - 12 ore / mitosi</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700">
              <span className="text-slate-400 block text-[11px]">Tasso Ipermutazione AID</span>
              <span className="text-base font-bold text-amber-300 font-mono">10^-3 bp / divisione</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700">
              <span className="text-slate-400 block text-[11px]">Selezione Centrociti</span>
              <span className="text-base font-bold text-rose-400 font-mono">~90-95% Apoptosi</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700">
              <span className="text-slate-400 block text-[11px]">Incremento di Affinità</span>
              <span className="text-base font-bold text-emerald-400 font-mono">100 - 10.000×</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation Ribbon */}
        <div className="bg-slate-100 p-2 border-b border-slate-200 flex flex-wrap items-center gap-1.5 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('textbook')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'textbook'
                ? 'bg-white text-indigo-900 shadow-xs border border-slate-200 font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span>Trattato Monografico Completo</span>
          </button>
          <button
            onClick={() => setActiveTab('gc_sim')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'gc_sim'
                ? 'bg-white text-indigo-900 shadow-xs border border-slate-200 font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Layers className="w-4 h-4 text-cyan-600" />
            <span>Simulatore Centro Germinativo (Dark/Light Zone)</span>
          </button>
          <button
            onClick={() => setActiveTab('csr_sim')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'csr_sim'
                ? 'bg-white text-indigo-900 shadow-xs border border-slate-200 font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Scissors className="w-4 h-4 text-amber-600" />
            <span>Simulatore Class Switch Recombination (CSR & AID)</span>
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'quiz'
                ? 'bg-white text-indigo-900 shadow-xs border border-slate-200 font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Autoverifica & Quiz Ufficiali ({QUIZ_LEZIONE_13.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'flashcards'
                ? 'bg-white text-indigo-900 shadow-xs border border-slate-200 font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Flashcards di Ripasso ({FLASHCARDS_LEZIONE_13.length})</span>
          </button>
        </div>
      </div>

      {/* RENDER ACTIVE TAB */}
      {activeTab === 'gc_sim' ? (
        <div className="space-y-6">
          <InteractiveGerminalCenterSimulator />
          <div className="text-center">
            <button
              onClick={() => setActiveTab('textbook')}
              className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold underline underline-offset-4"
            >
              ← Torna al Trattato Accademico
            </button>
          </div>
        </div>
      ) : activeTab === 'csr_sim' ? (
        <div className="space-y-6">
          <InteractiveClassSwitchSimulator />
          <div className="text-center">
            <button
              onClick={() => setActiveTab('textbook')}
              className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold underline underline-offset-4"
            >
              ← Torna al Trattato Accademico
            </button>
          </div>
        </div>
      ) : activeTab === 'quiz' ? (
        <QuizSection customQuestions={QUIZ_LEZIONE_13} lessonNumber={13} title="Verifica dell'Apprendimento · Lezione 13" />
      ) : activeTab === 'flashcards' ? (
        <FlashcardDeck cards={FLASHCARDS_LEZIONE_13} lessonNumber={13} title="Flashcard di Ripasso Attivo · Lezione 13" />
      ) : (
        /* MAIN MONOGRAPHIC TEXTBOOK */
        <div className="space-y-12">
          {/* Quick Outline Index Banner */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              Sommario Monografico — Lezione 13
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <a href="#sec-13-1" className="hover:text-indigo-600 hover:underline flex items-center gap-1.5">
                <span className="font-mono font-bold text-slate-400">§ 13.1</span> Cattura dell'Antigene: Macrofagi SCS & FDC (CXCL13 vs CCR7)
              </a>
              <a href="#sec-13-2" className="hover:text-indigo-600 hover:underline flex items-center gap-1.5">
                <span className="font-mono font-bold text-slate-400">§ 13.2</span> Segnalazione del BCR & Corecettore CD21/CD19/CD81
              </a>
              <a href="#sec-13-3" className="hover:text-indigo-600 hover:underline flex items-center gap-1.5">
                <span className="font-mono font-bold text-slate-400">§ 13.3</span> Riconoscimento Congiunto & Razionale dei Vaccini Coniugati (Hib)
              </a>
              <a href="#sec-13-4" className="hover:text-indigo-600 hover:underline flex items-center gap-1.5">
                <span className="font-mono font-bold text-slate-400">§ 13.4</span> Confine T-B, Focolai Extrafollicolari & Switch Bcl-6 vs Blimp-1
              </a>
              <a href="#sec-13-5" className="hover:text-indigo-600 hover:underline flex items-center gap-1.5">
                <span className="font-mono font-bold text-slate-400">§ 13.5</span> Linfociti Tfh: Marcatori (CXCR5, ICOS, CD40L) & Asse IL-21
              </a>
              <a href="#sec-13-6" className="hover:text-indigo-600 hover:underline flex items-center gap-1.5">
                <span className="font-mono font-bold text-slate-400">§ 13.6</span> Centro Germinativo: Zona Scura (Centroblasti) vs Zona Chiara (Centrociti)
              </a>
              <a href="#sec-13-7" className="hover:text-indigo-600 hover:underline flex items-center gap-1.5">
                <span className="font-mono font-bold text-slate-400">§ 13.7</span> Biologia Molecolare dell'AID: Deaminazione, UNG, APE1 & CSR
              </a>
              <a href="#sec-13-8" className="hover:text-indigo-600 hover:underline flex items-center gap-1.5">
                <span className="font-mono font-bold text-slate-400">§ 13.8</span> Controllo Citochinico dello Switch: IFN-γ, IL-4, TGF-β, BAFF/APRIL
              </a>
              <a href="#sec-13-9" className="hover:text-indigo-600 hover:underline flex items-center gap-1.5">
                <span className="font-mono font-bold text-slate-400">§ 13.9</span> Sindromi da Iper-IgM (HIGM-1 X-linked vs HIGM-2/5 AID/UNG)
              </a>
              <a href="#sec-13-10" className="hover:text-indigo-600 hover:underline flex items-center gap-1.5">
                <span className="font-mono font-bold text-slate-400">§ 13.10</span> Output Post-GC: LLPC Midollari & Memoria GC-Dipendente vs Indipendente
              </a>
            </div>
          </div>

          {/* SECTION 1 */}
          <article id="sec-13-1" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                Capitolo 13 · Sezione 1
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                13.1 Cattura e Trasporto dell'Antigene nel Follicolo Linfatico: Macrofagi SCS, FDC e Chemochine
              </h2>
            </div>

            <div className={`space-y-4 text-slate-800 ${proseFontClass} ${proseSizeClass}`}>
              <p>
                A differenza dei linfociti T, che riconoscono esclusivamente frammenti peptidici lineari associati a molecole del
                Complesso Maggiore di Istocompatibilità (MHC), i <strong>linfociti B</strong> sono programmati per riconoscere
                <strong>epitopi conformazionali tridimensionali nativi</strong> (proteine, glicoproteine, polisaccaridi o lipidi)
                presenti sulla superficie intatta dei microrganismi o in soluzione libera. Questo vincolo strutturale impone che
                l’antigene arrivi nel follicolo linfoide senza subire la degradazione proteolitica lisosomiale tipica delle cellule
                presentanti l’antigene convenzionali.
              </p>

              <p>
                Il drenaggio linfatico afferente trasporta gli antigeni verso il seno sottocapsulare (<strong>Subcapsular Sinus, SCS</strong>)
                del linfonodo. Qui risiede una popolazione specializzata di <strong>macrofagi del seno sottocapsulare</strong> dotati
                di caratteristiche fenotipiche uniche: possiedono una bassissima attività lisosomiale degradativa e un’altissima densità
                di recettori del complemento, in particolare il <strong>recettore CR2 (CD21)</strong> e il <strong>recettore CR1 (CD35)</strong>.
                Questi macrofagi agiscono come una vera e propria <em>griglia filtrante</em>: legano gli immunocomplessi opsonizzati
                con frammenti di C3 (C3b, iC3b, C3d) e, tramite un movimento transcitosico trans-membrana protetto, li trasferiscono
                intatti sul loro versante follicolare senza internalizzarli per la distruzione.
              </p>

              <div className="bg-slate-50 border-l-4 border-indigo-600 p-4 rounded-r-xl my-4 text-xs sm:text-sm font-sans">
                <span className="font-bold text-indigo-950 block mb-1">
                  Le Cellule Dendritiche Follicolari (FDC): Natura Stroma-Mesenchimale e Non-Ematopoietica
                </span>
                <p className="text-slate-700 leading-relaxed">
                  Le FDC non hanno alcuna parentela con le cellule dendritiche mieloidi (cDC1 o cDC2): non derivano da precursori
                  midollari CD34+, sono <strong>prive di molecole MHC di classe II</strong> e non sono in grado di effettuare fagocitosi.
                  Sono cellule stromali mesenchimali organizzate in una fittissima rete tridimensionale nel follicolo primario e nella
                  futura zona chiara. Le FDC secernono costitutivamente la chemochina <strong>CXCL13</strong> (che attrae i linfociti B
                  esprimenti <strong>CXCR5</strong>) e il fattore trofico <strong>BAFF</strong> (B-cell Activating Factor), garantendo
                  la sopravvivenza del follicolo. Grazie ai loro lunghi prolungamenti citoplasmatici rivestiti di recettori CR1, CR2
                  e FcγRIIB, le FDC fungono da <em>magazzino vivente</em> di antigeni nativi, esponendoli intatti per giorni o settimane
                  alla sorveglianza dei linfociti B.
                </p>
              </div>
            </div>
          </article>

          {/* SECTION 2 */}
          <article id="sec-13-2" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                Capitolo 13 · Sezione 2
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                13.2 Segnalazione del BCR, Complesso Corecettoriale (CD21/CD19/CD81) e Abbattimento della Soglia
              </h2>
            </div>

            <div className={`space-y-4 text-slate-800 ${proseFontClass} ${proseSizeClass}`}>
              <p>
                Il recettore per l'antigene del linfocita B (<strong>BCR</strong>) è costituito da un’immunoglobulina di membrana
                (mIgM o mIgD) associata non-covalentemente a un eterodimero di trasduzione: <strong>Igα (CD79a)</strong> e
                <strong>Igβ (CD79b)</strong>. Ciascuna catena CD79 contiene un singolo motivo <strong>ITAM (Immunoreceptor
                Tyrosine-based Activation Motif)</strong> nella coda citoplasmatica. Il cross-linking indotto dal legame multivalente
                dell’antigene provoca la rapida fosforilazione degli ITAM a opera di tirosin-chinasi della famiglia Src, in particolare
                <strong>Lyn</strong> e <strong>Fyn</strong>.
              </p>

              <p>
                Gli ITAM doppiamente fosforilati fungono da sito di ancoraggio ad alta affinità per i domini tandem SH2 della
                tirosin-chinasi <strong>Syk</strong>. Una volta reclutata e autofosforilata, Syk attiva la scaffold protein
                BLNK (SLP-65) e la Fosfolipasi C-gamma-2 (PLCγ2), catalizzando l’idrolisi di PIP₂ (PIP2) in due secondi messaggeri cardinali:
              </p>

              <ul className="list-disc list-inside space-y-1.5 pl-2 font-sans text-xs sm:text-sm text-slate-700">
                <li>
                  <strong>Inositolo 1,4,5-trifosfato (IP₃):</strong> si lega ai recettori del reticolo endoplasmatico liberando
                  ioni Ca²⁺, che aprono i canali SOCE (CRACM/ORAI1), attivando la calcineurina e il fattore di trascrizione <strong>NFAT</strong>.
                </li>
                <li>
                  <strong>Diacilglicerolo (DAG):</strong> attiva la <strong>PKC-beta (PKCβ)</strong>, che fosforila il complesso CARMA1/BCL10/MALT1,
                  portando alla degradazione di IκB e alla traslocazione nucleare di <strong>NF-κB</strong>.
                </li>
                <li>
                  <strong>Attivazione di Ras-MAPK:</strong> converge sull’induzione della proteina fosforilata <strong>AP-1</strong> (Fos/Jun).
                </li>
              </ul>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950 text-xs sm:text-sm font-sans mb-1.5">
                  <Zap className="w-4 h-4 text-amber-600" />
                  Il Complesso Corecettoriale B: Amplificazione del Segnale di 100-1000 Volte
                </div>
                <p className="text-xs text-amber-900 leading-relaxed font-sans">
                  Il linfocita B esprime sulla membrana il complesso eterotrimerico corecettoriale costituito da <strong>CR2 (CD21)</strong>,
                  <strong>CD19</strong> e la tetraspanina <strong>CD81 (TAPA-1)</strong>. Quando un antigene microbico è opsonizzato dal
                  frammento <strong>C3d</strong> del complemento, si verifica un contemporaneo ingaggio: il BCR lega l’epitopo proteico,
                  mentre CD21 lega il C3d adiacente. Questo cross-linking ravvicinato permette a Lyn di fosforilare i molteplici residui di
                  tirosina presenti nella lunga coda citoplasmatica di <strong>CD19</strong>. CD19 fosforilato recluta la <strong>PI3K (Fosfatidilinositolo
                  3-chinasi)</strong>, che genera PIP₃ e attiva la via di sopravvivenza Akt/mTOR. Il risultato biologico è sbalorditivo:
                  la concentrazione di antigene necessaria per attivare il linfocita B viene ridotta di <strong>100 - 1000 volte</strong> rispetto
                  al legame del solo BCR!
                </p>
              </div>

              {/* Mappa Concettuale di Fine Paragrafo: Le Tre Vie Trascrizionali a Valle del Recettore */}
              <ConceptMapFlow {...MAP_LEZIONE_13_TCR_TRANSDUCTION} />
            </div>
          </article>

          {/* SECTION 3 */}
          <article id="sec-13-3" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                Capitolo 13 · Sezione 3
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                13.3 Riconoscimento Congiunto (Linked Recognition) e la Base Razionale dei Vaccini Coniugati (Hib)
              </h2>
            </div>

            <div className={`space-y-4 text-slate-800 ${proseFontClass} ${proseSizeClass}`}>
              <p>
                L’attivazione piena del linfocita B follicolare e la formazione del centro germinativo richiedono obbligatoriamente
                l’aiuto ("help") fornito da un linfocita T CD4+ pre-attivato. Tuttavia, come fa il linfocita T a cooperare con il
                giusto linfocita B specifico per il medesimo patogeno? La risposta risiede nel principio del <strong>riconoscimento
                congiunto (Linked Recognition)</strong>.
              </p>

              <p>
                Dopo l’ingaggio dell’antigene da parte del BCR, il complesso BCR-antigene viene internalizzato mediante endocitosi
                clatrina-dipendente e veicolato negli endolisosomi acidi. Qui l’antigene proteico viene denaturato e digerito dalle
                catepsine in corti frammenti peptidici (12-16 aminoacidi), che vengono caricati sulle molecole <strong>MHC di classe II</strong>
                (mediante lo scambio guidato da HLA-DM esaminato nella Lezione 9) ed esposti sulla superficie cellulare.
              </p>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 my-4">
                <div className="flex items-center gap-2 font-bold text-indigo-950 text-sm font-sans mb-2">
                  <Stethoscope className="w-5 h-5 text-indigo-700" />
                  Applicazione Clinica Traslazionale: La Rivoluzione dei Vaccini Coniugati
                </div>
                <div className="text-xs sm:text-sm text-slate-700 font-sans space-y-2 leading-relaxed">
                  <p>
                    I batteri capsulati come <em>Haemophilus influenzae</em> tipo b (Hib), <em>Streptococcus pneumoniae</em> e
                    <em>Neisseria meningitidis</em> possiedono una capsula polisaccaridica che maschera le proteine di membrana.
                    I polisaccaridi sono <strong>antigeni T-indipendenti</strong>: cross-linkano i BCR dei linfociti B ma non possono
                    essere caricati su MHC-II. Di conseguenza, nei bambini sotto i due anni (il cui compartimento B della zona marginale
                    è immaturo), i vaccini polisaccaridici purificati falliscono totalmente, non producono switch isotipico ad alte concentrazioni
                    di IgG protettive né memoria immunologica, lasciando i piccoli esposti a meningiti fulminanti.
                  </p>
                  <p>
                    <strong>La soluzione biotecnologica:</strong> legando covalentemente il polisaccaride capsulare a una proteina carrier
                    immunogena (es. anatossina tetanica o tossoide difterico mutato non tossico CRM197), il linfocita B specifico per il
                    polisaccaride lega l’antigene con il suo BCR, internalizza l’intero complesso chimerico, processa la proteina carrier
                    ed espone i peptidi tetanici o difterici su MHC-II. Un linfocita T CD4+ (già immunizzato contro il tetano o la difterite)
                    riconosce il peptide su MHC-II e somministra i segnali CD40L e IL-21 al linfocita B, inducendo <em>switch a IgG protettive</em>,
                    ipermutazione somatica e <em>cellule B memoria durature</em>.
                  </p>
                </div>
              </div>
            </div>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
            <QuizSection customQuestions={QUIZ_LEZIONE_13} lessonNumber={13} title="Verifica dell'Apprendimento · Lezione 13" />

            {/* FLASHCARDS DI RIPASSO ATTIVO */}
            <FlashcardDeck cards={FLASHCARDS_LEZIONE_13} lessonNumber={13} title="Flashcard di Ripasso Attivo · Lezione 13" />
          </article>

          {/* SECTION 4 */}
          <article id="sec-13-4" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                Capitolo 13 · Sezione 4
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                13.4 L'Incontro al Confine T-B, i Focolai Extrafollicolari e il Bivio Bcl-6 vs Blimp-1
              </h2>
            </div>

            <div className={`space-y-4 text-slate-800 ${proseFontClass} ${proseSizeClass}`}>
              <p>
                Affinché il linfocita B e il linfocita T si incontrino, l'organismo mette in atto una precisa rimodulazione dei recettori
                chemochinici:
              </p>

              <ul className="list-disc list-inside space-y-1.5 pl-2 font-sans text-xs sm:text-sm text-slate-700">
                <li>
                  Il <strong>linfocita B naïve</strong> risiede nel follicolo grazie a <strong>CXCR5</strong> (che risponde a CXCL13).
                  Dopo l'ingaggio antigenico, sottoregola parzialmente CXCR5 e up-regola <strong>CCR7</strong>, muovendosi verso la zona paracorticale T.
                </li>
                <li>
                  Il <strong>linfocita T helper</strong> naïve risiede nella zona T grazie a <strong>CCR7</strong> (che risponde a CCL19/CCL21).
                  Dopo essere stato attivato dalla cellula dendritica, sottoregola CCR7 e up-regola <strong>CXCR5</strong>, migrando verso il follicolo B.
                </li>
              </ul>

              <p>
                Le due popolazioni convergono con precisione millimetrica all'interfaccia tra follicolo e paracorteccia (<strong>T-B border</strong>),
                dove stabiliscono la loro prima sinapsi immunologica cooperativa mediata da CD40:CD40L, ICOS:ICOSL e molecole di adesione (SLAM/SAP).
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-4">
                <span className="font-bold text-slate-900 text-xs sm:text-sm font-sans block mb-2">
                  La Prima Decisione di Destino: Focolai Extrafollicolari vs Centro Germinativo
                </span>
                <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed mb-3">
                  Al termine della prima interazione al confine T-B, i linfociti B proliferano e affrontano un bivio trascrizionale
                  governato dal livello di <strong>IRF4</strong> e dall'antagonismo reciproco tra due "master regulator":
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                  <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                    <span className="font-bold text-rose-700 block mb-1">Focolai Extrafollicolari (IRF4^high → Blimp-1)</span>
                    <p className="text-slate-600 leading-relaxed">
                      Una parte delle cellule si differenzia rapidamente in <strong>plasmablasti a vita breve</strong> (3-5 giorni)
                      localizzati nei cordoni midollari del linfonodo. Secernono un'ondata immediata di <strong>IgM a bassa affinità</strong>
                      (con rari switch precoci a IgG) che garantisce la prima difesa umorale sistemica entro 48-72 ore dall'infezione.
                    </p>
                  </div>
                  <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                    <span className="font-bold text-indigo-700 block mb-1">Re-ingresso Follicolare (IRF4^moderate → Bcl-6)</span>
                    <p className="text-slate-600 leading-relaxed">
                      Le cellule che esprimono livelli intermedi di IRF4 inducono il repressore <strong>Bcl-6</strong>, che reprime
                      Blimp-1 e preserva l'identità B (Pax5). Queste cellule migrano all'interno del follicolo primario insieme a linfociti T
                      specializzati, dando vita al <strong>Centro Germinativo</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
            <QuizSection customQuestions={QUIZ_LEZIONE_13} lessonNumber={13} title="Verifica dell'Apprendimento · Lezione 13" />

            {/* FLASHCARDS DI RIPASSO ATTIVO */}
            <FlashcardDeck cards={FLASHCARDS_LEZIONE_13} lessonNumber={13} title="Flashcard di Ripasso Attivo · Lezione 13" />
          </article>

          {/* SECTION 5 */}
          <article id="sec-13-5" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                Capitolo 13 · Sezione 5
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                13.5 I Linfociti T Follicolari Helper (Tfh): Marcatori (CXCR5, ICOS, CD40L) e Secrezione di IL-21
              </h2>
            </div>

            <div className={`space-y-4 text-slate-800 ${proseFontClass} ${proseSizeClass}`}>
              <p>
                I linfociti <strong>Tfh (T follicular helper)</strong> rappresentano la sottopopolazione T CD4+ deputata in modo
                esclusivo alla guida e al controllo di qualità della risposta B nei centri germinativi. La loro genesi richiede
                la stimolazione da parte di <strong>IL-6</strong> e <strong>IL-21</strong> (che attivano <strong>STAT3</strong>),
                la quale induce stabilmente il fattore di trascrizione <strong>Bcl-6</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4 font-sans text-xs">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="font-bold text-indigo-900 block mb-1">CXCR5 (Recettore Chemochine)</span>
                  <p className="text-slate-600">
                    Consente ai Tfh di abbandonare la paracorteccia T e posizionarsi stabilmente all'interno dei follicoli B attratti da CXCL13.
                  </p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="font-bold text-indigo-900 block mb-1">ICOS & PD-1 (Costimolazione)</span>
                  <p className="text-slate-600">
                    ICOS (Inducible T-cell Costimulator) interagisce con ICOSL sui B; induce alti livelli di IL-21 e sostiene la sopravvivenza del Tfh.
                  </p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="font-bold text-indigo-900 block mb-1">CD40L (CD154) & IL-21</span>
                  <p className="text-slate-600">
                    CD40L eroga il segnale anti-apoptotico fondamentale via NF-κB, mentre IL-21 promuove la proliferazione e la differenziazione in plasmacellule.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* EMBEDDED SIMULATOR 1 */}
          <div className="my-8">
            <InteractiveGerminalCenterSimulator />
          </div>

          {/* SECTION 6 */}
          <article id="sec-13-6" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                Capitolo 13 · Sezione 6
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                13.6 Microarchitettura del Centro Germinativo: Zona Scura (Centroblasti) vs Zona Chiara (Centrociti)
              </h2>
            </div>

            <div className={`space-y-4 text-slate-800 ${proseFontClass} ${proseSizeClass}`}>
              <p>
                Circa 7-10 giorni dopo l'infezione o la vaccinazione, il follicolo primario si trasforma in <strong>follicolo
                secondario</strong> sviluppando al suo interno una struttura dinamica altamente polarizzata: il <strong>Centro Germinativo</strong>.
                All'esame istologico e confocale, il centro germinativo è chiaramente suddiviso in due compartimenti microanatomici
                distinti e complementari:
              </p>

              {/* Comparative Table */}
              <div className="my-5 overflow-x-auto font-sans">
                <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                  <thead className="bg-slate-900 text-white font-mono uppercase text-[11px]">
                    <tr>
                      <th className="p-3 border-b border-slate-800">Parametro</th>
                      <th className="p-3 border-b border-slate-800 bg-indigo-950/80">Zona Scura (Dark Zone)</th>
                      <th className="p-3 border-b border-slate-800 bg-amber-950/80">Zona Chiara (Light Zone)</th>
                      <th className="p-3 border-b border-slate-800">Rilevanza Clinica & Patologica</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {GC_ZONE_COMPARISON.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="p-3 font-bold text-slate-900">{row.feature}</td>
                        <td className="p-3 text-indigo-950 bg-indigo-50/40 leading-relaxed">{row.darkZone}</td>
                        <td className="p-3 text-amber-950 bg-amber-50/40 leading-relaxed">{row.lightZone}</td>
                        <td className="p-3 text-slate-600 text-[11px] leading-relaxed">{row.clinicalSignificance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs sm:text-sm font-sans">
                <span className="font-bold text-amber-950 block mb-1">
                  Il Modello di Ricircolo Iterativo e i Macrofagi a Corpi Tingibili
                </span>
                <p className="text-slate-700 leading-relaxed">
                  La reazione del centro germinativo non è un percorso unidirezionale a senso unico, bensì un <strong>ciclo iterativo
                  darwiniano</strong>. I centrociti che superano la selezione nella zona chiara grazie a mutazioni favorevoli possono
                  re-indurre CXCR4 e ritornare nella zona scura per ulteriori cicli di replicazione e ipermutazione. Al contrario, oltre il
                  <strong>90-95%</strong> dei centrociti genera mutazioni sfavorevoli, nonsenso o autoreattive: queste cellule non riescono
                  a estrarre l'antigene dalle FDC e muoiono per apoptosi entro poche ore. La zona chiara è perciò popolata da caratteristici
                  <strong>macrofagi a corpi tingibili (Tingible Body Macrophages)</strong>, macrofagi CD68+ carichi di detriti nucleari e corpi
                  apoptotici fagocitati (aspetto a <em>"cielo stellato"</em> tipico dei tessuti a iperproliferazione fisiologica o neoplastica,
                  come nel linfoma di Burkitt).
                </p>
              </div>

              {/* Mappa Concettuale di Fine Paragrafo: Dinamica del Centro Germinativo */}
              <ConceptMapFlow {...MAP_LEZIONE_13_GERMINAL_CENTER} />
            </div>
          </article>

          {/* SECTION 7 */}
          <article id="sec-13-7" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                Capitolo 13 · Sezione 7
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                13.7 Biologia Molecolare dell'AID: Deaminazione di Citosina, Riparazione Error-Prone e CSR
              </h2>
            </div>

            <div className={`space-y-4 text-slate-800 ${proseFontClass} ${proseSizeClass}`}>
              <p>
                Il motore molecolare assoluto della maturazione dell'affinità (SHM) e del cambio di classe anticorpale (CSR) è l'enzima
                <strong>AID (Activation-Induced Cytidine Deaminase)</strong>, scoperto nel 1999 dal gruppo di Tasuku Honjo (Premio Nobel 2018).
                L'AID è espressa quasi esclusivamente nei linfociti B del centro germinativo in risposta ai segnali CD40 e citochine.
              </p>

              <p>
                <strong>La Reazione Catalitica Primaria:</strong> AID deamina idroliticamente la <strong>deossicitidina (dC)</strong>
                in <strong>deossiuracile (dU)</strong> nel DNA. Poiché l'AID possiede attività solo su filamenti singoli (ssDNA), la sua azione
                richiede l'apertura della doppia elica da parte dell'RNA polimerasi II durante la trascrizione attiva del locus genico.
              </p>

              <div className="bg-slate-900 text-white rounded-xl p-5 my-4 font-sans text-xs">
                <span className="font-bold text-cyan-300 block mb-2 font-mono text-xs uppercase tracking-wider">
                  Le Tre Vie di Risoluzione del Deossiuracile nella Somatic Hypermutation (SHM):
                </span>
                <div className="space-y-2 text-slate-300">
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                    <strong className="text-amber-400">1. Replicazione Diretta (Transizione C:G → T:A):</strong>
                    <p className="mt-0.5 text-slate-300 leading-relaxed">
                      Se il DNA viene duplicato prima dell'intervento dei sistemi di riparazione, l'uracile si appaia con l'adenina. Al ciclo successivo,
                      l'adenina dirigerà l'inserimento di una timina, generando una transizione fissa da coppia C:G a coppia T:A.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                    <strong className="text-rose-400">2. Rimozione da UNG e Polimerasi Translesione (Transversioni e Transizioni):</strong>
                    <p className="mt-0.5 text-slate-300 leading-relaxed">
                      L'enzima <strong>UNG (Uracil-DNA Glycosylase)</strong> escinde l'uracile lasciando un sito abasico (sito AP). Le polimerasi
                      translesione error-prone (come <strong>Rev1</strong>) scavalcano il sito abasico inserendo qualsiasi nucleotide a caso,
                      generando sia transizioni che transversioni (C → A, G, T).
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                    <strong className="text-emerald-400">3. Riconoscimento del Mismatch MSH2/MSH6 ed Esonucleasi Exo1:</strong>
                    <p className="mt-0.5 text-slate-300 leading-relaxed">
                      Il mismatch U:G viene riconosciuto dal complesso MutSα (MSH2/MSH6), che recluta l'esonucleasi 1 (Exo1) per degradare un tratto di DNA.
                      Il gap viene riparato dalla <strong>DNA polimerasi eta (Pol η)</strong>, una polimerasi priva di proofreading che introduce mutazioni
                      anche sulle coppie A:T adiacenti (motivi WA/TW).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
            <QuizSection customQuestions={QUIZ_LEZIONE_13} lessonNumber={13} title="Verifica dell'Apprendimento · Lezione 13" />

            {/* FLASHCARDS DI RIPASSO ATTIVO */}
            <FlashcardDeck cards={FLASHCARDS_LEZIONE_13} lessonNumber={13} title="Flashcard di Ripasso Attivo · Lezione 13" />
          </article>

          {/* EMBEDDED SIMULATOR 2 */}
          <div className="my-8">
            <InteractiveClassSwitchSimulator />
          </div>

          {/* SECTION 8 */}
          <article id="sec-13-8" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                Capitolo 13 · Sezione 8
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                13.8 Controllo Citochinico dello Switch Isotipico: IFN-γ, IL-4, TGF-β, BAFF e APRIL
              </h2>
            </div>

            <div className={`space-y-4 text-slate-800 ${proseFontClass} ${proseSizeClass}`}>
              <p>
                Il processo di <strong>Class Switch Recombination (CSR)</strong> non è casuale: è rigorosamente indirizzato dal profilo
                citochinico prodotto dai linfociti Tfh e dalle cellule dell'immunità innata presenti nel microambiente linfonodale.
                Le citochine legano i loro recettori sul linfocita B e attivano specifici fattori di trascrizione che promuovono
                la <em>trascrizione sterile non-codificante</em> a partire dal promotore I della specifica regione Switch target,
                aprendo la cromatina e rendendola accessibile all'AID.
              </p>

              {/* Cytokine Rules Table */}
              <div className="my-5 overflow-x-auto font-sans">
                <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                  <thead className="bg-slate-900 text-white font-mono uppercase text-[11px]">
                    <tr>
                      <th className="p-3 border-b border-slate-800">Citochina Guida</th>
                      <th className="p-3 border-b border-slate-800">Isotipo Indotto</th>
                      <th className="p-3 border-b border-slate-800">Fattore di Trascrizione</th>
                      <th className="p-3 border-b border-slate-800">Funzioni Effettrici Cardine</th>
                      <th className="p-3 border-b border-slate-800">Correlato Clinico</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {CLASS_SWITCH_RULES.map((rule, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="p-3 font-bold text-slate-900">{rule.cytokine}</td>
                        <td className="p-3 font-mono font-bold text-indigo-700 bg-indigo-50/30">{rule.inducedIsotype}</td>
                        <td className="p-3 font-mono text-slate-700">{rule.transcriptionFactor}</td>
                        <td className="p-3 text-slate-700 leading-relaxed">{rule.mainEffectorFunctions}</td>
                        <td className="p-3 text-slate-600 text-[11px] leading-relaxed">{rule.clinicalRelevance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
            <QuizSection customQuestions={QUIZ_LEZIONE_13} lessonNumber={13} title="Verifica dell'Apprendimento · Lezione 13" />

            {/* FLASHCARDS DI RIPASSO ATTIVO */}
            <FlashcardDeck cards={FLASHCARDS_LEZIONE_13} lessonNumber={13} title="Flashcard di Ripasso Attivo · Lezione 13" />
          </article>

          {/* SECTION 9 */}
          <article id="sec-13-9" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                Capitolo 13 · Sezione 9
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                13.9 Immunopatologia Clinica: Le Sindromi da Iper-IgM (HIGM-1 X-Linked vs HIGM-2/5 da AID/UNG)
              </h2>
            </div>

            <div className={`space-y-4 text-slate-800 ${proseFontClass} ${proseSizeClass}`}>
              <p>
                Le <strong>Sindromi da Iper-IgM (Hyper-IgM Syndromes, HIGM)</strong> sono un gruppo eterogeneo di immunodeficienze primitive
                caratterizzate dalla marcata riduzione o assenza degli isotipi class-switched (IgG, IgA, IgE) con livelli sierici di IgM
                normali o spiccatamente elevati. Rappresentano lo straordinario equivalente umano dei modelli <em>knock-out</em> di laboratorio,
                chiarendo in modo inequivocabile il ruolo dei singoli geni nella fisiologia dell'interazione T-B.
              </p>

              {/* HIGM Subtypes Table */}
              <div className="my-5 overflow-x-auto font-sans">
                <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                  <thead className="bg-slate-900 text-white font-mono uppercase text-[11px]">
                    <tr>
                      <th className="p-3 border-b border-slate-800">Forma Clinica</th>
                      <th className="p-3 border-b border-slate-800">Gene Difettivo</th>
                      <th className="p-3 border-b border-slate-800">Difetto Cellulare</th>
                      <th className="p-3 border-b border-slate-800">Istologia Linfonodale</th>
                      <th className="p-3 border-b border-slate-800">Spettro Infettivo & Clinica</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {HIGM_SUBTYPES.map((sub, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="p-3 font-bold text-slate-900">{sub.type}</td>
                        <td className="p-3 font-mono text-indigo-700 bg-indigo-50/30">{sub.defectGene}</td>
                        <td className="p-3 text-slate-700 leading-relaxed">{sub.cellularDefect}</td>
                        <td className="p-3 text-slate-700 text-[11px] leading-relaxed">{sub.lymphoidHistology}</td>
                        <td className="p-3 text-rose-950 bg-rose-50/20 text-[11px] leading-relaxed">{sub.clinicalSpectrum}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-rose-50 border border-rose-200 rounded-xl p-5 my-4 font-sans text-xs sm:text-sm">
                <div className="flex items-center gap-2 font-bold text-rose-950 mb-1.5">
                  <AlertCircle className="w-5 h-5 text-rose-600" />
                  La Dicotomia Diagnostica Fondamentale: HIGM-1 vs HIGM-2
                </div>
                <p className="text-slate-700 leading-relaxed mb-2">
                  La diagnosi differenziale tra il deficit di CD40L (HIGM-1) e il deficit di AID (HIGM-2) è una delle domande più
                  frequenti e discriminanti nei concorsi di ammissione alle Scuole di Specializzazione e all'Esame di Stato:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mt-2">
                  <div className="p-3 rounded-lg bg-white border border-rose-200">
                    <strong className="text-rose-900 block mb-1">HIGM-1 (CD40L sui Linfociti T)</strong>
                    <ul className="space-y-1 text-slate-700 list-disc list-inside">
                      <li>Assenza totale di centri germinativi.</li>
                      <li>Infezioni opportunistiche gravi (<em>Pneumocystis jirovecii</em>, <em>Cryptosporidium</em>).</li>
                      <li>Causa: mancato licensing macrofagico CD40-dipendente.</li>
                      <li>Trattamento: Immunoglobuline e.v. + Profilassi con Cotrimossazolo + Trapianto di HSC.</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-rose-200">
                    <strong className="text-amber-900 block mb-1">HIGM-2 (AID nei Linfociti B)</strong>
                    <ul className="space-y-1 text-slate-700 list-disc list-inside">
                      <li>Centri germinativi giganti e iperplastici (linfoadenomegalia massiva).</li>
                      <li>Nessuna infezione opportunistica (i macrofagi sono sani).</li>
                      <li>Infezioni unicamente da batteri piogeni capsulati respiratori.</li>
                      <li>Trattamento: Terapia sostitutiva con Immunoglobuline e.v. periodiche.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
            <QuizSection customQuestions={QUIZ_LEZIONE_13} lessonNumber={13} title="Verifica dell'Apprendimento · Lezione 13" />

            {/* FLASHCARDS DI RIPASSO ATTIVO */}
            <FlashcardDeck cards={FLASHCARDS_LEZIONE_13} lessonNumber={13} title="Flashcard di Ripasso Attivo · Lezione 13" />
          </article>

          {/* SECTION 10 */}
          <article id="sec-13-10" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                Capitolo 13 · Sezione 10
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                13.10 Output Post-GC: Plasmacellule a Lunga Vita Midollari e la Dualità delle Cellule B Memoria
              </h2>
            </div>

            <div className={`space-y-4 text-slate-800 ${proseFontClass} ${proseSizeClass}`}>
              <p>
                Al termine della complessa reazione del centro germinativo, i cloni centrocitici sopravvissuti affrontano la loro
                differenziazione terminale biforcando in due compartimenti funzionali dotati di cinetiche e ruoli diametralmente opposti:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-indigo-950 text-sm block mb-1">
                    1. Le Plasmacellule a Lunga Vita (Long-Lived Plasma Cells, LLPC)
                  </span>
                  <p className="text-slate-700 leading-relaxed mb-2">
                    Guidate dall'attivazione irreversibile di <strong>Blimp-1</strong> e <strong>XBP-1</strong>, le plasmacellule spengono
                    la sintesi di Pax5, perdono il BCR di membrana e le molecole MHC di classe II. Espandono a dismisura il reticolo endoplasmatico
                    rugoso e l'apparato del Golgi, trasformandosi in formidabili "fabbriche biochimiche" capaci di secernere oltre
                    <strong>2000 molecole di anticorpo al secondo</strong>.
                  </p>
                  <div className="text-[11px] text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200">
                    <strong>Homing Midollare:</strong> Le LLPC up-regolano <strong>CXCR4</strong> e migrano attratte da CXCL12 nelle nicchie stromali
                    del midollo osseo. Qui risiedono per decenni in assenza di divisione cellulare, mantenute da segnali trofici come <strong>APRIL</strong>
                    (via recettore <strong>BCMA</strong>) e <strong>IL-6</strong>, garantendo titoli anticorpali protettivi per tutta la vita.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-indigo-950 text-sm block mb-1">
                    2. Le Cellule B Memoria (Memory B Cells, MBC)
                  </span>
                  <p className="text-slate-700 leading-relaxed mb-2">
                    Guidate dal fattore di trascrizione <strong>BACH2</strong> (che previene la transizione a plasmacellula reprimendo Blimp-1),
                    le cellule B memoria mantengono alti livelli di BCR di superficie e di molecole MHC-II. Abbandonano il ciclo cellulare ed entrano
                    in stato quiescente G₀ (fase G0), pattugliando i tessuti linfoidi secondari e il sangue periferico per anni.
                  </p>
                  <div className="text-[11px] text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200">
                    <strong>Risposta Secondaria:</strong> Al secondo contatto con lo stesso antigene, la loro soglia di attivazione è bassissima:
                    proliferano ed espandono cloni plasmacellulari maturi entro 24-48 ore con titoli di IgG mille volte superiori alla risposta primaria.
                  </div>
                </div>
              </div>

              {/* Memory Comparison Table */}
              <div className="my-5 overflow-x-auto font-sans">
                <div className="text-xs font-bold font-mono text-slate-600 uppercase mb-2">
                  La Dicotomia Strategica della Memoria B: GC-Dipendente vs GC-Indipendente
                </div>
                <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                  <thead className="bg-slate-900 text-white font-mono uppercase text-[11px]">
                    <tr>
                      <th className="p-3 border-b border-slate-800">Caratteristica</th>
                      <th className="p-3 border-b border-slate-800 bg-indigo-950/80">Memoria GC-Dipendente</th>
                      <th className="p-3 border-b border-slate-800 bg-emerald-950/80">Memoria GC-Indipendente (Extrafollicolare)</th>
                      <th className="p-3 border-b border-slate-800">Vantaggio Biologico per l'Organismo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {MEMORY_TYPE_COMPARISON.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="p-3 font-bold text-slate-900">{row.feature}</td>
                        <td className="p-3 text-indigo-950 bg-indigo-50/30 leading-relaxed">{row.gcDependentMemory}</td>
                        <td className="p-3 text-emerald-950 bg-emerald-50/30 leading-relaxed">{row.gcIndependentMemory}</td>
                        <td className="p-3 text-slate-600 text-[11px] leading-relaxed">{row.biologicalAdvantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-4 font-sans text-xs sm:text-sm">
                <div className="flex items-center gap-2 font-bold text-emerald-950 mb-1.5">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  La Lezione di Medicina Molecolare: Come Neutralizzare le Varianti Virali (SARS-CoV-2 Spike)
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Come illustrato dalla Prof.ssa Molfetta nella lezione, se il sistema immunitario producesse unicamente plasmacellule ad altissima
                  affinità ipermutate (GC-dipendenti), si troverebbe in un vicolo cieco evolutivo di <em>"over-fitting immunitario"</em>: una singola
                  mutazione aminoacidica nell'antigene virale (deriva antigenica) potrebbe azzerare l'affinità anticorpale.
                  La conservazione parallela di una riserva di <strong>cellule B memoria GC-indipendenti</strong> (a bassa o nulla mutazione somatica)
                  garantisce una plasticità recettoriale polivalente: di fronte a una variante mutante (es. varianti Omicron o nuovi ceppi influenzali),
                  queste cellule riescono a legare il patogeno e rientrano rapidamente in un centro germinativo secondario, guidando una nuova ondata
                  di maturazione dell'affinità ritagliata sul nuovo mutante.
                </p>
              </div>
            </div>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
            <QuizSection customQuestions={QUIZ_LEZIONE_13} lessonNumber={13} title="Verifica dell'Apprendimento · Lezione 13" />

            {/* FLASHCARDS DI RIPASSO ATTIVO */}
            <FlashcardDeck cards={FLASHCARDS_LEZIONE_13} lessonNumber={13} title="Flashcard di Ripasso Attivo · Lezione 13" />
          </article>
        </div>
      )}
    </div>
  );
};
