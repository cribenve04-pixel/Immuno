/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CAPITOLO 0 MASTER VIEW: FONDAMENTI DEL SISTEMA IMMUNITARIO, ONTOGENESI E ARCHITETTURA DEGLI ORGANI LINFOIDI
 * Bussola strutturale monumentale per l'esame orale di Immunologia Umana.
 * Trattato accademico a pagina unica a flusso continuo privo di discontinuità d'aula.
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Shield,
  Layers,
  Activity,
  Flame,
  Dna,
  Zap,
  Target,
  Sparkles,
  Info,
  ChevronRight,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Microscope,
  Stethoscope,
  Pill,
  Clock,
  ExternalLink,
  ChevronDown,
  FileText,
  Sliders,
  RotateCw,
  HelpCircle,
  Baby,
  HeartPulse,
  UserCheck,
  Compass,
  GitBranch,
  Crosshair,
  TrendingUp,
  Award,
  Scale
} from 'lucide-react';

// Import dei simulatori integrati esistenti
import { InteractiveKineticsGraph } from '../InteractiveKineticsGraph';
import { InteractiveOntogenyChart } from '../InteractiveOntogenyChart';
import { InteractiveTraffickingSimulator } from '../InteractiveTraffickingSimulator';

// Componenti di verifica e autovalutazione
import { QuizSection } from '../QuizSection';
import { FlashcardDeck } from '../FlashcardDeck';

interface Chapter0MasterViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
  initialSection?: string;
  onNavigateToChapter?: (chapterNumber: number, sectionId?: string) => void;
}

export const Chapter0MasterView: React.FC<Chapter0MasterViewProps> = ({
  isSerif = false,
  fontSize = 'normal',
  initialSection,
  onNavigateToChapter
}) => {
  const proseFontClass = isSerif ? 'font-serif' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // Stato navigazione in-page ScrollSpy
  const [activeSubSection, setActiveSubSection] = useState<string>('sec-0-logica');

  // Stato Simulatore Trained Immunity (Sezione 0.1)
  const [trainedImmunityState, setTrainedImmunityState] = useState<'naive' | 'primed_bcg' | 'restimulated'>('naive');

  // Stato Simulatore Nicchia Ematopoietica (Sezione 0.2)
  const [plerixaforActive, setPlerixaforActive] = useState<boolean>(false);
  const [selectedCytokine, setSelectedCytokine] = useState<'G-CSF' | 'GM-CSF' | 'M-CSF' | 'IL-7' | 'IL-15'>('G-CSF');

  // Stato Macrophage Polarization M1 vs M2 (Sezione 0.2)
  const [macrophageState, setMacrophageState] = useState<'M0' | 'M1' | 'M2'>('M1');

  // Configurazione sezioni con ID per la barra sticky di navigazione
  const SECTIONS_NAV = [
    { id: 'sec-0-logica', label: '0.1 Logica, Cinetica & Trained Immunity', icon: Zap },
    { id: 'sec-0-ematopoiesi', label: '0.2 Ematopoiesi, Nicchia & Atlante', icon: GitBranch },
    { id: 'sec-0-organi-primari', label: '0.3 Organi Primari: Midollo & Timo', icon: Shield },
    { id: 'sec-0-organi-secondari', label: '0.4 Organi Secondari: Linfonodi & Milza', icon: Activity },
    { id: 'sec-0-burnet-vita', label: '0.5 Teoria di Burnet & Arco della Vita', icon: Sparkles },
    { id: 'sec-0-verifica', label: '0.6 Tabella Master & Autovalutazione', icon: CheckCircle2 }
  ];

  // ScrollSpy per evidenziare la sezione visibile
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = SECTIONS_NAV.length - 1; i >= 0; i--) {
        const item = SECTIONS_NAV[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSubSection(item.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lastScrolledSectionRef = useRef<string | null>(null);

  // Gestione scorrimento iniziale se specificato (singola esecuzione per prevenire scroll a tratti)
  useEffect(() => {
    if (initialSection && lastScrolledSectionRef.current !== initialSection) {
      lastScrolledSectionRef.current = initialSection;
      setTimeout(() => {
        const el = document.getElementById(initialSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [initialSection]);

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSubSection(id);
    }
  };

  // Domande d'esame ad alta resa per il Capitolo 0
  const chapter0Questions = useMemo(() => [
    {
      id: "c0-q1",
      lessonNumber: 0,
      lessonTitle: "Capitolo 0 · Fondamenti & Ematopoiesi",
      topicCategory: "Immunità Innata, PRR & Barriere",
      professor: "Galandrini",
      question: "Quale riprogrammazione biochimica ed epigenetica caratterizza il fenomeno della 'Trained Immunity' (memoria dell'immunità innata) indotta da BCG o beta-glucani?",
      options: [
        "Inattivazione di mTOR, iperattivazione della beta-ossidazione e ipermetilazione de novo del DNA",
        "Shift metabolico verso la glicolisi aerobia guidato dall'asse Akt-mTOR-HIF1α con accumulo di fumarato e arricchimento epigenetico di H3K4me3 e H3K27ac ai promotori delle citochine",
        "Ricombinazione genica somatica V(D)J operata dalle endonucleasi RAG-1 e RAG-2 nel locus del recettore Toll-like",
        "Degradazione lisosomiale selettiva del recettore Dectina-1 con blocco della trascrizione di TNF-α e IL-6"
      ],
      correctIndex: 1,
      explanation: "La Trained Immunity non poggia su riarrangiamenti somatici genici, bensì su un rimodellamento epigenetico stabile (arricchimento del marcatore attivatorio H3K4me3 sui promotori genici e H3K27ac sugli enhancer) e uno shift metabolico dalla fosforilazione ossidativa mitocondriale alla glicolisi aerobia (effetto Warburg immunitario), coordinato da Akt-mTOR-HIF1α con accumulo di intermedi come fumarato.",
      clinicalPearl: "Domanda classica per la lode: citare il gruppo di Mihai Netea, la protezione eterologa aspecifica indotta dal vaccino BCG nei neonati e l'implicazione nelle patologie infiammatorie croniche.",
      targetSectionId: "sec-0-logica"
    },
    {
      id: "c0-q2",
      lessonNumber: 0,
      lessonTitle: "Capitolo 0 · Fondamenti & Ematopoiesi",
      topicCategory: "Immunità Innata, PRR & Barriere",
      professor: "Galandrini",
      question: "Quale asse molecolare di chemiotassi ancorante è indispensabile per la ritenzione delle cellule staminali ematopoietiche (HSC CD34+) nella nicchia midollare ed è il target del farmaco mobilizzante Plerixafor?",
      options: [
        "Asse CCL19/CCL21 legante CCR7",
        "Asse CXCL12 (SDF-1) prodotto dalle cellule stromali legante CXCR4 espresso sulle HSC",
        "Asse CXCL13 prodotto dalle cellule dendritiche follicolari legante CXCR5",
        "Asse S1P legante il recettore endoteliale S1PR1"
      ],
      correctIndex: 1,
      explanation: "Le cellule stromali reticolari ricche di CXCL12 (cellule CAR) e gli osteoblasti secernono CXCL12 (SDF-1), che ancora le HSC CD34+ esprimenti CXCR4 nella nicchia midollare. Il farmaco Plerixafor (AMD3100) è un antagonista selettivo reversibile di CXCR4 che, interrompendo questo legame in combinazione con G-CSF, mobilizza rapidamente le HSC nel sangue periferico per l'aferesi pre-trapianto.",
      clinicalPearl: "Spiegare all'esame il meccanismo d'azione di Plerixafor nel trapianto autologo di CSE per mieloma multiplo e linfomi.",
      targetSectionId: "sec-0-ematopoiesi"
    },
    {
      id: "c0-q3",
      lessonNumber: 0,
      lessonTitle: "Capitolo 0 · Fondamenti & Ematopoiesi",
      topicCategory: "MHC, HLA & Presentazione Antigenica",
      professor: "Morrone",
      question: "Quale popolazione di cellule dendritiche convenzionali dipende strettamente dal fattore di trascrizione BATF3 ed è specializzata nella cross-presentazione di antigeni esogeni su molecole MHC di Classe I ai linfociti CD8+?",
      options: [
        "cDC2 convenzionali (dipendenti da IRF4 ed esprimenti CD1c)",
        "pDC plasmacitoidi (esprimenti TLR7/9 e produttrici di IFN di tipo I)",
        "cDC1 convenzionali (esprimenti XCR1 e CLEC9A)",
        "Cellule dendritiche follicolari FDC (di origine mesenchimale)"
      ],
      correctIndex: 2,
      explanation: "Le cDC1 convenzionali dipendono dai fattori trascrizionali BATF3 e IRF8, esprimono il recettore chemiochinico XCR1 e il sensore di necrosi CLEC9A. Esse possiedono l'esclusivo macchinario biochimico necessario per la cross-presentazione: deviano gli antigeni endocitati dal fagolisosoma al citosol per essere degradati dal proteasoma e caricati su MHC-I per attivare i linfociti T citotossici CD8+ naïve contro virus e tumori.",
      clinicalPearl: "I topi knock-out per BATF3 mancano selettivamente di cDC1 e non sono in grado di rigettare tumori immunogenici né di innescare risposte CTL primarie contro molti virus intracellulari.",
      targetSectionId: "sec-0-ematopoiesi"
    },
    {
      id: "c0-q4",
      lessonNumber: 0,
      lessonTitle: "Capitolo 0 · Fondamenti & Ematopoiesi",
      topicCategory: "Tolleranza, Autoimmunità & Immunopatologia",
      professor: "Galandrini",
      question: "Quale anomalia genetica è responsabile della sindrome autoimmune poliendocrina di tipo 1 (APECED / APS-1) e quale tappa dell'istruzione timica risulta compromessa?",
      options: [
        "Mutazione di FOXP3 con mancata genesi periferica dei linfociti T regolatori",
        "Mutazione del gene AIRE con mancata trascrizione ectopica di antigeni tessuto-specifici (TRA) nelle mTEC e fallimento della selezione negativa",
        "Mutazione di FAS/FASL con mancata apoptosi periferica dei linfociti attivati",
        "Mutazione di RAG1 con blocco totale dello sviluppo timico"
      ],
      correctIndex: 1,
      explanation: "Il fattore di trascrizione AIRE (Autoimmune Regulator), espresso costitutivamente dalle cellule epiteliali midollari del timo (mTEC), consente l'espressione promiscua di proteine altrimenti limitate a tessuti periferici (insulina, tireoglobulina, proteina basica della mielina). Le mutazioni con perdita di funzione di AIRE causano APECED (ipoparatiroidismo, insufficienza corticosurrenalica e candidosi mucocutanea cronica da autoanticorpi neutralizzanti anti-IL-17).",
      clinicalPearl: "All'orale Galandrini insiste sul ruolo di AIRE: non è un recettore ma un regolatore trascrizionale epigenetico che recluta il fattore di allungamento P-TEFb sui promotori 'bivalenti' delle mTEC.",
      targetSectionId: "sec-0-organi-primari"
    },
    {
      id: "c0-q5",
      lessonNumber: 0,
      lessonTitle: "Capitolo 0 · Fondamenti & Ematopoiesi",
      topicCategory: "Linfociti T, Sinapsi & Differenziamento Th",
      professor: "Soriani",
      question: "Quale recettore lipidico governa l'egresso dei linfociti T naïve dal parenchima linfonodale alla linfa efferente, e come agisce il farmaco Fingolimod (FTY720) nella sclerosi multipla?",
      options: [
        "Recettore CCR7: Fingolimod ne stimola l'espressione impedendo l'uscita dalle venule HEV",
        "Recettore S1PR1: Fingolimod funge da agonista funzionale inducendone l'internalizzazione e degradazione irreversibile, sequestrando i linfociti T nei linfonodi",
        "Recettore CXCR4: Fingolimod ne blocca il ligando CXCL12 inducendo linfoadenite",
        "Recettore CD62L (L-selectina): Fingolimod ne causa il clivaggio proteolitico superficiale"
      ],
      correctIndex: 1,
      explanation: "L'egresso dei linfociti segue il gradiente di concentrazione della Sfingosina-1-Fosfato (S1P, alta nel sangue e linfa, bassa nel linfoide grazie alla S1P-liasi). I linfociti naïve esprimono S1PR1. Fingolimod (fosforilato in vivo a Fingolimod-P) si lega a S1PR1 inducendone internalizzazione duratura e degradazione: senza S1PR1 di superficie, i linfociti autoreattivi non possono percepire il gradiente di S1P e restano intrappolati nei linfonodi.",
      clinicalPearl: "Nella sclerosi multipla, Fingolimod riduce le recidive cliniche diminuendo drasticamente il numero di linfociti T e B circolanti che possono migrare nel sistema nervoso centrale.",
      targetSectionId: "sec-0-organi-secondari"
    },
    {
      id: "c0-q6",
      lessonNumber: 0,
      lessonTitle: "Capitolo 0 · Fondamenti & Ematopoiesi",
      topicCategory: "Immunità Innata, PRR & Barriere",
      professor: "Molfetta",
      question: "Per quale motivo fisiopatologico i pazienti asplenici o affetti da anemia falciforme presentano un rischio catastrofico di sepsi fulminante da batteri capsulati (OPSI - Overwhelming Post-Splenectomy Infection)?",
      options: [
        "A causa della perdita totale dei neutrofili circolanti prodotti esclusivamente dalla polpa rossa",
        "A causa della perdita dei macrofagi della polpa rossa e soprattutto dei linfociti B della Zona Marginale (MZ B cells), deputati alla risposta T-indipendente ultra-rapida contro i polisaccaridi capsulari",
        "A causa della cessazione della produzione di immunoglobuline di classe IgE e mastociti",
        "A causa del mancato completamento della selezione positiva timica dei linfociti T CD4+"
      ],
      correctIndex: 1,
      explanation: "La milza è l'unico organo sentinella a filtraggio ematico privo di vasi linfatici afferenti. La sua Zona Marginale ospita i linfociti B MZ (CD21high IgMhigh) che montano risposte anticorpali T-indipendenti precoci contro gli antigeni polisaccaridici delle capsule di Streptococcus pneumoniae, Neisseria meningitidis ed Haemophilus influenzae. La rimozione della milza priva l'organismo di questa prima linea ematica, scatenando la sepsi OPSI.",
      clinicalPearl: "Regola clinica inderogabile: ogni paziente candidato a splenectomia deve essere vaccinato con vaccini coniugati anti-pneumococco, meningococco e Hib almeno 14 giorni prima dell'intervento.",
      targetSectionId: "sec-0-organi-secondari"
    },
    {
      id: "c0-q7",
      lessonNumber: 0,
      lessonTitle: "Capitolo 0 · Fondamenti & Ematopoiesi",
      topicCategory: "Linfociti B, Anticorpi & Centro Germinativo",
      professor: "Rinaldi",
      question: "Quale recettore specializzato è responsabile del trasporto attivo trans-placentare delle sole IgG materne verso il feto durante il terzo trimestre di gestazione?",
      options: [
        "Recettore ad alta affinità FcγRI (CD64)",
        "Recettore polimerico delle immunoglobuline pIgR",
        "Recettore neonatale per l'Fc (FcRn), espresso a livello del sinciziotrofoblasto",
        "Recettore a bassa affinità FcγRIIB (CD32b)"
      ],
      correctIndex: 2,
      explanation: "Il recettore FcRn (eterodimero formato da una catena pesante MHC-I like e dalla β2-microglobulina) lega la porzione Fc delle IgG a pH acido (pH 6.0) all'interno delle vescicole endocitiche del sinciziotrofoblasto, le protegge dalla degradazione lisosomiale e le rilascia nel circolo fetale a pH fisiologico (pH 7.4). Questo meccanismo fornisce al neonato un titolo protettivo di IgG sovrapponibile a quello materno.",
      clinicalPearl: "Ricordare anche la funzione di FcRn nell'adulto: ricircolo ed estensione straordinaria dell'emivita plasmatica di albumina e IgG (~21 giorni), principio sfruttato per allungare l'emivita dei farmaci a base di anticorpi monoclonali.",
      targetSectionId: "sec-0-burnet-vita"
    }
  ], []);

  // Flashcards ad alta resa per il Capitolo 0
  const chapter0Flashcards = useMemo(() => [
    {
      id: "c0-fc-1",
      category: "Fondamenti & Trained Immunity",
      front: "Cos'è la Trained Immunity e in cosa si differenzia dalla memoria adattativa?",
      back: "È una memoria immunologica de facto dell'immunità innata (monociti, macrofagi, NK). Non dipende da ricombinazione genica V(D)J, ma da uno shift metabolico alla glicolisi aerobia (Akt-mTOR-HIF1α) e modificazioni epigenetiche stabili (H3K4me3 e H3K27ac) che permettono risposte amplificate a successivi stimoli eterologhi aspecifici (es. vaccino BCG)."
    },
    {
      id: "c0-fc-2",
      category: "Ematopoiesi & Nicchia",
      front: "Quali molecole mantengono la quiescenza e l'ancoraggio delle HSC nella nicchia midollare?",
      back: "L'asse CXCL12 (prodotto dalle cellule stromali CAR) legante CXCR4 sulle HSC CD34+, e lo SCF (Stem Cell Factor) legante c-Kit (CD117). Il farmaco Plerixafor (AMD3100) è un antagonista selettivo di CXCR4 che mobilizza le HSC nel sangue per il trapianto."
    },
    {
      id: "c0-fc-3",
      category: "Popolazioni Mieloidi",
      front: "Differenze fenotipiche e funzionali tra monociti classici e non-classici patrolling?",
      back: "Monociti classici: CD14++ CD16- CCR2+ CD62L+, reclutati rapidamente nei focolai flogistici tissutali per differenziare in macrofagi infiammatori. Monociti non-classici patrolling: CD14+ CD16++ CX3CR1high, pattugliano il lume endoteliale per rimuovere detriti e mantenere l'integrità vascolare."
    },
    {
      id: "c0-fc-4",
      category: "Cellule Dendritiche",
      front: "Quali sono le caratteristiche biologiche distintive delle FDC follicolari?",
      back: "Origine mesenchimale (non ematopoietica). Non esprimono MHC-II né processano antigeni. Trattengono immunocomplessi intatti sulla membrana per mesi/anni tramite CR1/CR2 e FcγR, guidando la maturazione dell'affinità dei linfociti B nel centro germinativo."
    },
    {
      id: "c0-fc-5",
      category: "Timo & Autotolleranza",
      front: "Qual è il ruolo del fattore AIRE nella selezione timica e cosa provoca la sua mutazione?",
      back: "Espresso dalle mTEC, induce la trascrizione promiscua di antigeni tessuto-specifici (TRA) per eliminare i timociti autoreattivi ad alta affinità (selezione negativa). Mutazioni di AIRE causano la sindrome APECED/APS-1 (ipoparatiroidismo, morbo di Addison, candidosi mucocutanea cronica)."
    },
    {
      id: "c0-fc-6",
      category: "Organi Linfoidi Secondari",
      front: "Come funziona l'asse CD69 - S1P/S1PR1 nell'intrappolamento linfonodale dei linfociti attivati?",
      back: "I linfociti naïve esprimono S1PR1 ed escono seguendo il gradiente di S1P (alta nella linfa). All'attivazione antigenica viene espresso rapidamente CD69, che si complessa a S1PR1 causandone internalizzazione e degradazione. La cellula resta intrappolata per 4-7 giorni per proliferare prima di riesporre S1PR1."
    },
    {
      id: "c0-fc-7",
      category: "Milza & Fisiopatologia",
      front: "Perché l'asplenia determina un rischio mortale di sepsi da batteri capsulati (OPSI)?",
      back: "La milza è priva di vasi linfatici afferenti ed è l'unico filtro per germi ematogeni. La sua Zona Marginale ospita i linfociti B MZ (CD21high) specializzati nella risposta T-indipendente ultra-rapida contro i polisaccaridi capsulari. Senza milza si perde la protezione contro Pneumococco, Meningococco e Hib."
    },
    {
      id: "c0-fc-8",
      category: "Dinamica dell'Ospite",
      front: "Come si spiega la tolleranza materno-fetale e il ruolo di HLA-G e IDO?",
      back: "Il feto è un semi-alloinnesto. Il trofoblasto non esprime HLA-A/B classici ma HLA-G (che inibisce le NK materne via ILT2). Le DC e il trofoblasto esprimono IDO (Indoleamina 2,3-diossigenasi) che degrada il triptofano arrestando la proliferazione dei cloni T alloreattivi materni, con espansione di Treg."
    }
  ], []);

  return (
    <div className="w-full space-y-6 sm:space-y-8 lg:space-y-10 pb-16">
      
      {/* 1. TESTATA MONUMENTALE DEL CAPITOLO 0 */}
      <header className="bg-gradient-to-br from-indigo-950 via-slate-950 to-blue-950 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-white shadow-xl border border-indigo-800/40 relative overflow-hidden w-full">
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-10 bottom-0 text-indigo-500/10 font-mono font-black text-9xl select-none pointer-events-none">
          0
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
              Capitolo 0 · Trattato Fondamentale
            </span>
            <span className="text-xs font-mono text-indigo-200/70">
              Bussola Strutturale & Atlante di Anatomia Funzionale per l'Esame Orale
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Fondamenti del Sistema Immunitario, Ontogenesi Ematopoietica e Architettura degli Organi Linfoidi
          </h1>

          <p className="text-indigo-100/90 text-sm sm:text-base leading-relaxed max-w-4xl">
            Dai vincoli evolutivi della cooperazione temporale tra difese immediate e risposte adattative clonali, 
            alla complessa biologia della <strong>nicchia staminale midollare</strong>, fino all'anatomia microscopica 
            di <strong>timo, linfonodi e milza</strong>. Questo capitolo costituisce il basamento logico-funzionale 
            indispensabile per comprendere ogni successiva cascata molecolare del corso di Immunologia.
          </p>

          {/* Badge riassuntivi orizzontali */}
          <div className="pt-2 flex flex-wrap gap-2 sm:gap-3 text-xs font-mono">
            <div className="bg-indigo-900/60 border border-indigo-700/50 rounded-lg px-3 py-1.5 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              <span>Cinetica Gaussiana & Trained Immunity</span>
            </div>
            <div className="bg-indigo-900/60 border border-indigo-700/50 rounded-lg px-3 py-1.5 flex items-center gap-2">
              <GitBranch className="w-3.5 h-3.5 text-blue-400" />
              <span>Nicchia HSC, CXCL12/CXCR4 & Plerixafor</span>
            </div>
            <div className="bg-indigo-900/60 border border-indigo-700/50 rounded-lg px-3 py-1.5 flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-teal-400" />
              <span>Microarchitettura Timica & Gene AIRE</span>
            </div>
            <div className="bg-indigo-900/60 border border-indigo-700/50 rounded-lg px-3 py-1.5 flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-amber-400" />
              <span>Linfonodi, Milza & Asse CD69-S1P</span>
            </div>
            <div className="bg-indigo-900/60 border border-indigo-700/50 rounded-lg px-3 py-1.5 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Postulati di Burnet & Curva a U della Vita</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. BARRA STICKY DI NAVIGAZIONE RAPIDA IN-PAGE (Smooth ScrollSpy) */}
      <nav 
        aria-label="Indice rapido delle sezioni del Capitolo 0"
        className="sticky top-14 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-y sm:border border-slate-200 dark:border-slate-800 sm:rounded-xl shadow-sm px-2 sm:px-4 py-2 transition-all"
      >
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-thin py-0.5 text-xs font-medium">
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider shrink-0 px-1 hidden md:flex items-center gap-1 font-bold">
            <Compass className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Cap. 0:</span>
          </span>

          {SECTIONS_NAV.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSubSection === sec.id;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToAnchor(sec.id)}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg whitespace-nowrap transition-all text-xs shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white font-bold shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{sec.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* 3. CORPO CONTINUO DEL CAPITOLO 0 (6 SEZIONI INTEGRALI) */}
      <main className={`space-y-12 sm:space-y-16 ${proseFontClass} ${proseSizeClass}`}>

        {/* =========================================================================
            SEZIONE 0.1: LOGICA EVOLUTIVA, CINETICA TEMPORALE & TRAINED IMMUNITY
            ========================================================================= */}
        <section 
          id="sec-0-logica" 
          aria-labelledby="heading-sec-0-logica"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-wider font-bold">
              <Zap className="w-4 h-4" />
              <span>Sezione 0.1 · Principi Generali della Risposta Immunitaria</span>
            </div>
            <h2 id="heading-sec-0-logica" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Logica Evolutiva, Cinetica Temporale della Risposta e Trained Immunity
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              La cooperazione tra contenimento mieloide rapido e precisione clonale linfocitaria: modelli knock-out murini e riprogrammazione epigenetico-metabolica dell'immunità innata.
            </p>
          </div>

          {/* Testo Accademico Approfondito */}
          <div className="space-y-4 text-slate-800 dark:text-slate-200">
            <p>
              Il sistema immunitario dei mammiferi non è un blocco monolitico, bensì il risultato di un'opera di 
              bricolage evolutivo durata oltre 500 milioni di anni. L'immunità <strong>innata (o naturale)</strong> rappresenta 
              la forma ancestrale di difesa, presente in tutti gli organismi pluricellulari dai metazoi primitivi e dalle piante. 
              Essa non richiede precedente incontro con il patogeno ed entra in azione in una finestra temporale compresa 
              tra <strong>0 e 12 ore</strong> dalla violazione delle barriere epiteliali. Al contrario, l'immunità <strong>adattativa 
              (o acquisita)</strong>, comparsa nei vertebrati gnatostomi (dotati di mandibola) grazie all'acquisizione evolutiva 
              dei geni per la ricombinasi <em>RAG-1</em> e <em>RAG-2</em>, richiede un tempo biologico di latenza (<strong>&gt;96 ore</strong> 
              fino a 7-14 giorni) necessario affinché i rari cloni linfocitari naïve antigene-specifici riconoscano l'antigene, 
              vengano costimolati ed effettuino l'espansione clonale esponenziale.
            </p>

            {/* Box Evidenza Sperimentale Knock-Out */}
            <div className="bg-indigo-50/70 dark:bg-indigo-950/30 border-l-4 border-indigo-600 p-4 rounded-r-xl space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-300 font-bold">
                <Microscope className="w-4 h-4 shrink-0 text-indigo-600" />
                <span>Evidenze Sperimentali Murine: Modelli Knock-Out per Immunità Innata vs Adattativa</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                La dimostrazione formale dell'assoluta cooperazione tra le due braccia difensive emerge dai classici esperimenti con infezioni murine (ad es. con <em>Listeria monocytogenes</em>):
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-slate-300">
                <li>
                  <strong>Topi RAG-1/2-/- o SCID (privi di linfociti T e B, ma con immunità innata intatta):</strong> In seguito a infezione subletale, 
                  i neutrofili, i macrofagi e le cellule NK contengono la proliferazione batterica nei primi 3-5 giorni, 
                  mantenendo la carica microbica su un plateau. Tuttavia, in assenza di cellule T CD4+ e CD8+ capaci di attivare 
                  sterilmente i macrofagi (tramite IFN-γ) e lisare le cellule infette, il patogeno prima o poi risale causando 
                  la morte tardiva dell'animale.
                </li>
                <li>
                  <strong>Topi privi di immunità innata (MyD88-/-, neutropenici o depleti di macrofagi):</strong> Anche possedendo 
                  un repertorio clonale di linfociti T e B perfettamente intatto, soccombono in sole <strong>24-48 ore</strong> 
                  a causa di una batteriemia fulminante. La replicazione esponenziale del patogeno supera la soglia letale 
                  prima che la risposta adattativa abbia il tempo biologico di generare il primo clone effettore.
                </li>
              </ul>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-2">
              Confronto Molecolare: PAMPs / DAMPs vs Antigeni ed Epitopi
            </h3>
            <p>
              La disparità nella cinetica e nella fisiologia riflette una profonda divergenza nella struttura e genesi dei recettori molecolari:
            </p>

            {/* Tabella Comparativa PAMP/DAMP vs Epitopi */}
            <div className="overflow-x-auto not-prose rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                    <th className="p-3">Parametro</th>
                    <th className="p-3 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300">Immunità Innata (PAMP / DAMP)</th>
                    <th className="p-3 bg-blue-50/50 dark:bg-blue-950/20 text-blue-800 dark:text-blue-300">Immunità Adattativa (Antigeni / Epitopi)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="p-3 font-semibold">Origine dei Recettori</td>
                    <td className="p-3">Codificati stabilmente nella linea germinale (<em>Germline-encoded</em>). Nessuna alterazione genetica durante l'ontogenesi.</td>
                    <td className="p-3">Generati <em>de novo</em> in ogni singolo linfocita tramite ricombinazione somatica casuale dei segmenti genici V(D)J.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Diversità del Repertorio</td>
                    <td className="p-3 font-mono font-bold text-emerald-700 dark:text-emerald-400">~10³ specifiche configurazioni molecolari</td>
                    <td className="p-3 font-mono font-bold text-blue-700 dark:text-blue-400">&gt;10⁹ - 10¹¹ potenziali specificità clonali uniche</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Natura del Bersaglio</td>
                    <td className="p-3">Motivi molecolari altamente conservati, condivisi da intere classi di microbi e vitali per la loro sopravvivenza (es. LPS, flagellina, peptidoglicano).</td>
                    <td className="p-3">Determinanti antigenici discreti (epitopi conformazionali su proteine native per il BCR; peptidi lineari presentati su molecole MHC per il TCR).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Discriminazione Self / Non-Self</td>
                    <td className="p-3">Intrinseca: i recettori PRR si sono evoluti per non riconoscere le strutture molecolari normalmente presenti nelle cellule eucariotiche sane.</td>
                    <td className="p-3">Imperfetta all'origine: la casualità del rimescolamento V(D)J genera continuamente cloni autoreattivi, imponendo una rigorosa <strong>selezione centrale e periferica</strong>.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Sotto-blocco: Trained Immunity */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  Focus di Frontiera
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Trained Immunity (La Memoria dell'Immunità Innata)
                </h3>
              </div>

              <p>
                Per oltre un secolo la microbiologia e l'immunologia hanno postulato che l'immunità innata fosse del tutto priva di memoria. 
                Le ricerche pionieristiche condotte dal gruppo di <strong>Mihai Netea</strong> hanno demolito questo dogma, 
                dimostrando che l'esposizione primaria a determinati stimoli microbici (in particolare il <strong>vaccino BCG</strong> 
                derivato da <em>Mycobacterium bovis</em> o i <strong>β-glucani</strong> della parete fungina) induce nei monociti, 
                nei macrofagi e nelle cellule NK un programma duraturo di <strong>Trained Immunity</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-purple-200 dark:border-purple-800/60 bg-purple-50/30 dark:bg-purple-950/20 space-y-2">
                  <h4 className="font-bold text-purple-900 dark:text-purple-300 text-sm flex items-center gap-2">
                    <Flame className="w-4 h-4 text-purple-600" />
                    <span>Riprogrammazione Metabolica (Effetto Warburg Immunitario)</span>
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                    Le cellule addestrate subiscono uno shift profondo dalla fosforilazione ossidativa mitocondriale (OxPhos) 
                    verso la <strong>glicolisi aerobia</strong>, governato dall'asse di segnalazione <strong>Akt - mTOR - HIF-1α</strong>. 
                    Questo comporta un massiccio consumo di glucosio e l'accumulo di metaboliti intermedi quali il <strong>fumarato</strong>, 
                    il quale inibisce in modo competitivo le istone-demetilasi KDM5, stabilizzando lo stato di decondensazione della cromatina.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-purple-200 dark:border-purple-800/60 bg-purple-50/30 dark:bg-purple-950/20 space-y-2">
                  <h4 className="font-bold text-purple-900 dark:text-purple-300 text-sm flex items-center gap-2">
                    <Dna className="w-4 h-4 text-purple-600" />
                    <span>Rimodellamento Epigenetico Stabile</span>
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                    A differenza della memoria adattativa (basata sulla duplicazione clonale e sui geni somatoclonali), la Trained Immunity 
                    è incisa nella cromatina: si osserva un marcato arricchimento di <strong>H3K4me3</strong> (trimetilazione della lisina 4 sull'istone H3) 
                    ai promotori dei geni codificanti citochine infiammatorie (<em>TNF</em>, <em>IL6</em>) e di <strong>H3K27ac</strong> 
                    (acetilazione su enhancers distali). Al ritorno allo stato di quiescenza, queste modificazioni permangono per mesi nei progenitori 
                    mieloidi midollari, rendendo la trascrizione citochinica ultra-rapida e 5-10 volte più potente al momento di un secondo stimolo.
                  </p>
                </div>
              </div>

              {/* Simulatore Interattivo Trained Immunity */}
              <div className="mt-4 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-3">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200">
                      Laboratorio Interattivo: Stato Metabolico-Epigenetico del Monocita
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <button
                      type="button"
                      onClick={() => setTrainedImmunityState('naive')}
                      className={`px-2.5 py-1 rounded-md font-mono transition-all ${
                        trainedImmunityState === 'naive'
                          ? 'bg-slate-700 text-white font-bold'
                          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      1. Monocita Naïve
                    </button>
                    <button
                      type="button"
                      onClick={() => setTrainedImmunityState('primed_bcg')}
                      className={`px-2.5 py-1 rounded-md font-mono transition-all ${
                        trainedImmunityState === 'primed_bcg'
                          ? 'bg-purple-600 text-white font-bold'
                          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      2. Priming BCG / β-Glucano
                    </button>
                    <button
                      type="button"
                      onClick={() => setTrainedImmunityState('restimulated')}
                      className={`px-2.5 py-1 rounded-md font-mono transition-all ${
                        trainedImmunityState === 'restimulated'
                          ? 'bg-emerald-600 text-white font-bold'
                          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      3. Ristimolazione Eterologa
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500 font-mono block text-[10px] uppercase">Metabolismo Prevalente</span>
                    <strong className="text-slate-900 dark:text-slate-100 text-sm block mt-0.5">
                      {trainedImmunityState === 'naive' && 'Fosforilazione Ossidativa (OxPhos)'}
                      {trainedImmunityState === 'primed_bcg' && 'Glicolisi Aerobia (Shift mTOR-HIF1α)'}
                      {trainedImmunityState === 'restimulated' && 'Iperglicolisi & Blocco Ciclo di Krebs'}
                    </strong>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      {trainedImmunityState === 'naive' && 'Consumo basale di glucosio; ATP generato nei mitocondri.'}
                      {trainedImmunityState === 'primed_bcg' && 'Attivazione di Akt-mTOR, accumulo di lattato e fumarato intracellulare.'}
                      {trainedImmunityState === 'restimulated' && 'Produzione fulminea di ATP e precursori biosintetici per l\'esocitosi.'}
                    </span>
                  </div>

                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500 font-mono block text-[10px] uppercase">Stato Epigenetico (Promotori)</span>
                    <strong className="text-slate-900 dark:text-slate-100 text-sm block mt-0.5">
                      {trainedImmunityState === 'naive' && 'Cromatina Basale / Eterocromatica'}
                      {trainedImmunityState === 'primed_bcg' && 'Arricchimento H3K4me3 & H3K27ac'}
                      {trainedImmunityState === 'restimulated' && 'Trascrizione Immediata e Massiva'}
                    </strong>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      {trainedImmunityState === 'naive' && 'Promotori di TNF e IL-6 parzialmente repressi, turnover istone basale.'}
                      {trainedImmunityState === 'primed_bcg' && 'Istone-demetilasi inibite dal fumarato: la cromatina resta aperta a lungo.'}
                      {trainedImmunityState === 'restimulated' && 'L\'RNA Polimerasi II trova i promotori già decondensati e accessibili.'}
                    </span>
                  </div>

                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500 font-mono block text-[10px] uppercase">Rilascio Citochinico (TNF-α, IL-6)</span>
                    <strong className={`text-sm block mt-0.5 ${
                      trainedImmunityState === 'restimulated' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-900 dark:text-slate-100'
                    }`}>
                      {trainedImmunityState === 'naive' && 'Livelli Basali Indotti (1x)'}
                      {trainedImmunityState === 'primed_bcg' && 'Stato Primed in Riserva'}
                      {trainedImmunityState === 'restimulated' && 'Iper-Rilascio Eterologo (5x - 10x)'}
                    </strong>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      {trainedImmunityState === 'naive' && 'Risposta standard dopo infezione primaria non pretrattata.'}
                      {trainedImmunityState === 'primed_bcg' && 'La cellula torna a riposo ma conserva la firma epigenetica per mesi.'}
                      {trainedImmunityState === 'restimulated' && 'Protezione eterologa verso patogeni totalmente scorrelati (virus respiratori, Candida).'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ponte Fisiologico di Transizione */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-100 via-indigo-50 to-slate-100 dark:from-slate-800 dark:via-indigo-950/40 dark:to-slate-800 border border-indigo-200/60 dark:border-indigo-800/50 flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-indigo-900 dark:text-indigo-200 font-semibold block mb-0.5">
                Ponte Fisiologico di Transizione: Dalla logica evolutiva alla fabbrica cellulare
              </strong>
              Affinché la risposta innata possa intervenire in minuti e la risposta adattativa possa reclutare milioni di cloni 
              specializzati, l'organismo deve generare costantemente miliardi di nuovi leucociti al giorno. 
              Questo processo continuo di rinnovamento e istruzione è governato dall'<strong>ematopoiesi</strong> e dalla microarchitettura 
              delle <strong>nicchie midollari</strong>.
            </div>
          </div>
        </section>


        {/* =========================================================================
            SEZIONE 0.2: EMATOPOIESI, NICCHIA MIDOLLARE & ATLANTE DELLE POPOLAZIONI
            ========================================================================= */}
        <section 
          id="sec-0-ematopoiesi" 
          aria-labelledby="heading-sec-0-ematopoiesi"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-wider font-bold">
              <GitBranch className="w-4 h-4" />
              <span>Sezione 0.2 · Ontogenesi & Tassonomia Cellulare</span>
            </div>
            <h2 id="heading-sec-0-ematopoiesi" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Ematopoiesi, Nicchia Midollare e Atlante delle Popolazioni Cellulari
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Dalla cellula staminale ematopoietica pluripotente (HSC CD34+) all'albero dei lignaggi mieloidi e linfoidi: ancoraggio molecolare CXCL12/CXCR4, polarizzazione macrofagica M1/M2 e tassonomia delle cellule dendritiche.
            </p>
          </div>

          <div className="space-y-4 text-slate-800 dark:text-slate-200">
            <p>
              Tutte le cellule mature circolanti nel sangue e residenti nei tessuti periferici originano da un unico precursore primitivo 
              pluripotente: la <strong>Cellula Staminale Ematopoietica (HSC, <em>Hematopoietic Stem Cell</em>)</strong>. 
              Nell'essere umano adulto la HSC è identificata fenotipicamente dall'espressione del marcatore di superficie 
              <strong>CD34⁺</strong>, del recettore per lo Stem Cell Factor <strong>c-Kit⁺ (CD117)</strong>, e dall'assenza 
              completa dei marcatori dei lignaggi differenziati terminali (<strong>Lin⁻</strong>). Nel topo è presente anche 
              il marcatore <em>Sca-1⁺</em>. Le due proprietà biologiche cardinali e irrinunciabili della HSC sono:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/40 dark:bg-blue-950/20">
                <strong className="text-blue-900 dark:text-blue-200 block mb-1">1. Autorinnovamento Asimmetrico (Self-Renewal)</strong>
                <p className="text-slate-700 dark:text-slate-300">
                  Capacità di dividersi generando una cellula figlia che mantiene intatta la staminalità indifferenziata (preservando il pool midollare per tutta la vita) 
                  e una cellula figlia indirizzata al differenziamento (<em>committed progenitor</em>).
                </p>
              </div>
              <div className="p-3.5 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/40 dark:bg-blue-950/20">
                <strong className="text-blue-900 dark:text-blue-200 block mb-1">2. Pluripotenza Ematopoietica</strong>
                <p className="text-slate-700 dark:text-slate-300">
                  Potenzialità genica di generare tutti i lignaggi ematici: eritroidi, megacariocitari, granulocitari (neutrofili, eosinofili, basofili), 
                  monocito-macrofagici, dendritici e l'intero compartimento linfoide (cellule T, B, NK e ILCs).
                </p>
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-3">
              La Microarchitettura della Nicchia Midollare: Endostale vs Perivascolare
            </h3>
            <p>
              Le HSC non fluttuano liberamente nel midollo ma sono alloggiate in microambienti stromali specializzati, detti <strong>nicchie</strong>, 
              che ne regolano finemente lo stato di quiescenza metabolica o di proliferazione:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Nicchia Endostale (Osteoblastica):</strong> Localizzata a ridosso dell'osso trabecolare, in intimo contatto con gli osteoblasti. 
                È caratterizzata da una bassissima tensione parziale di ossigeno (ambiente fortemente ipossico). Questa condizione protegge il genoma 
                della HSC dallo stress ossidativo mitocondriale e ne mantiene la <strong>quiescenza profonda (fase G₀ del ciclo cellulare)</strong>, 
                impedendo l'esaurimento staminale replicativo.
              </li>
              <li>
                <strong>Nicchia Perivascolare / Sinusoidale:</strong> Localizzata a ridosso delle venule sinusoidali fenestrate del midollo. 
                Le cellule endoteliali sinusoidali e le cellule stromali reticolari sub-endoteliali (denominate <strong>cellule CAR</strong>, 
                <em>CXCL12-abundant reticular cells</em>) formano una rete che guida la proliferazione attiva e il rilascio selettivo 
                delle cellule mature nel circolo sanguigno.
              </li>
            </ul>

            {/* Box Farmacologico: Asse CXCL12/CXCR4 e Plerixafor */}
            <div className="bg-amber-50/60 dark:bg-amber-950/25 border-l-4 border-amber-500 p-4 rounded-r-xl space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold">
                <Pill className="w-4 h-4 shrink-0 text-amber-600" />
                <span>Asse Molecolare CXCL12/CXCR4 & Farmacologia della Mobilizzazione (Plerixafor / AMD3100)</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                L'ancoraggio fisico della cellula staminale nella nicchia è assicurato dall'interazione tra la chemochina <strong>CXCL12 (SDF-1)</strong>, 
                costitutivamente secreta dalle cellule stromali, e il suo recettore accoppiato a proteine G <strong>CXCR4</strong>, 
                abbondantemente espresso sulla membrana delle HSC CD34⁺, assieme al legame tra <strong>SCF (Stem Cell Factor)</strong> e il recettore tirosin-chinasico <strong>c-Kit</strong>.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                <strong>Applicazione Clinica Traslazionale:</strong> Nel trapianto autologo di cellule staminali ematopoietiche (impiegato nel Mieloma Multiplo 
                e nei Linfomi non-Hodgkin recidivati), le cellule staminali devono essere raccolte dal sangue periferico mediante aferesi. 
                Il farmaco <strong>Plerixafor (AMD3100)</strong> è un antagonista selettivo e reversibile del recettore CXCR4. 
                Somministrato per via sottocutanea in combinazione con <strong>G-CSF</strong>, spezza il ponte adesivo CXCL12-CXCR4: 
                le HSC si staccano dalle cellule stromali CAR e si riversano massivamente nel torrente circolatorio entro 6-9 ore, 
                consentendo una raccolta aferetica ottimale di cellule CD34⁺ senza dover ricorrere a dolorose biopsie ossee della cresta iliaca.
              </p>
            </div>

            {/* Laboratorio Interattivo Nicchia Ematopoietica */}
            <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-2.5">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Simulatore di Differenziamento Ematopoietico & Farmaco Mobilizzante
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setPlerixaforActive(!plerixaforActive)}
                  className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                    plerixaforActive
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Pill className="w-3.5 h-3.5" />
                  <span>Plerixafor (AMD3100): {plerixaforActive ? 'ATTIVO (Blocco CXCR4)' : 'OFF (Ancorate)'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2">
                  <span className="font-bold text-slate-700 dark:text-slate-300 block">Stato di Mobilizzazione delle HSC CD34+:</span>
                  <div className={`p-2.5 rounded-lg border ${
                    plerixaforActive 
                      ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200' 
                      : 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200'
                  }`}>
                    <strong className="block text-sm mb-1">
                      {plerixaforActive ? 'Mobilizzazione Rapida nel Sangue Periferico' : 'Ancoraggio Stabile nella Nicchia Midollare'}
                    </strong>
                    <p className="text-[11px] leading-relaxed">
                      {plerixaforActive
                        ? 'L\'antagonista CXCR4 compete con CXCL12. Le HSC si staccano dalle cellule stromali CAR ed entrano nel lume dei sinusoidi. Titolo circolante di cellule CD34+ aumentato di 4-6 volte, pronto per aferesi.'
                        : 'Il legame CXCL12-CXCR4 e SCF-c-Kit mantiene le HSC adese al reticolo stromale in stato di quiescenza o divisione lenta.'
                      }
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2">
                  <span className="font-bold text-slate-700 dark:text-slate-300 block">Selettore Citochine Ematopoietiche:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {(['G-CSF', 'GM-CSF', 'M-CSF', 'IL-7', 'IL-15'] as const).map((cyt) => (
                      <button
                        key={cyt}
                        type="button"
                        onClick={() => setSelectedCytokine(cyt)}
                        className={`px-2 py-1 rounded text-[11px] font-mono transition-all ${
                          selectedCytokine === cyt
                            ? 'bg-indigo-600 text-white font-bold'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                        }`}
                      >
                        {cyt}
                      </button>
                    ))}
                  </div>

                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-2 p-2 bg-slate-50 dark:bg-slate-800/60 rounded">
                    {selectedCytokine === 'G-CSF' && (
                      <span><strong>G-CSF:</strong> Fattore stimolante le colonie granulocitarie. Induce la proliferazione, maturazione e rilascio massivo dei <strong>Neutrofili</strong>. Usato nei pazienti post-chemioterapia per prevenire la neutropenia febbrile.</span>
                    )}
                    {selectedCytokine === 'GM-CSF' && (
                      <span><strong>GM-CSF:</strong> Fattore mieloide bifunzionale: induce la differenziazione contemporanea di <strong>monociti, macrofagi e granulociti</strong>, nonché la maturazione di cellule dendritiche.</span>
                    )}
                    {selectedCytokine === 'M-CSF' && (
                      <span><strong>M-CSF (CSF-1):</strong> Indispensabile per la sopravvivenza, proliferazione e differenziamento terminale della linea monocito-macrofagica e degli osteoclasti.</span>
                    )}
                    {selectedCytokine === 'IL-7' && (
                      <span><strong>IL-7:</strong> Citochina essenziale per la sopravvivenza e proliferazione dei <strong>progenitori linfoidi B e T</strong>. Le mutazioni della catena γ comune (γc/CD132) impediscono il signaling di IL-7 causando la X-SCID (assenza di cellule T).</span>
                    )}
                    {selectedCytokine === 'IL-15' && (
                      <span><strong>IL-15:</strong> Citochina cruciale per lo sviluppo, maturazione e mantenimento omeostatico delle <strong>cellule Natural Killer (NK)</strong> e dei <strong>linfociti T CD8⁺ di memoria</strong> a lungo termine.</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-3">
              Atlante Funzionale dei Leucociti: Dal Granulocito al Macrofago M1/M2
            </h3>
            <p>
              La biforcazione primaria dell'albero ematopoietico separa il <strong>Progenitore Mieloide Comune (CMP)</strong> 
              dal <strong>Progenitore Linfoide Comune (CLP)</strong>. Di seguito è riassunta la tassonomia cellulare:
            </p>

            {/* Tabella Tassonomia Cellulare */}
            <div className="overflow-x-auto not-prose rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                    <th className="p-3">Popolazione</th>
                    <th className="p-3">Marcatori Chiave</th>
                    <th className="p-3">Dotazione Enzimatica / Granuli</th>
                    <th className="p-3">Ruolo Fisiopatologico Primario</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">Neutrofili (PMN)</td>
                    <td className="p-3 font-mono">CD15, CD16b, CD66b, CXCR1/2</td>
                    <td className="p-3">Azzurrofili (MPO, elastasi), Specifici (lattoferrina), Terziari (gelatinasi, metalloproteasi)</td>
                    <td className="p-3">Prima linea battericida: fagocitosi, burst respiratorio NOX2 e formazione di NETs. Emivita ematica breve (6-10 ore).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">Eosinofili</td>
                    <td className="p-3 font-mono">Siglec-8, CCR3, FcεRI (inducibile)</td>
                    <td className="p-3">Proteina Basica Maggiore (MBP), Proteina Cationica Eosinofila (ECP), Perossidasi Eosinofila (EPO)</td>
                    <td className="p-3">Difesa antiparassitaria contro elminti voluminosi; patogenesi flogistica dell'asma bronchiale allergico e reazioni di ipersensibilità di tipo I.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">Basofili</td>
                    <td className="p-3 font-mono">CD123, FcεRI constitutivi, CD203c</td>
                    <td className="p-3">Istamina, proteoglicani solfati (eparina), leucotrieni (LTC4), citochine IL-4 e IL-13</td>
                    <td className="p-3">Rappresentano &lt;1% dei leucociti circolanti; degranulano in risposta al cross-linking delle IgE amplificando le reazioni anafilattiche sistemiche.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">Mastociti (Tissutali)</td>
                    <td className="p-3 font-mono">c-Kit (CD117), FcεRI, MRGPRX2</td>
                    <td className="p-3">Triptasi, chimasi, carbossipeptidasi, istamina pre-formata e sintesi de novo di prostaglandine (PGD2)</td>
                    <td className="p-3">Sentinelle residenti nelle mucose e nel derma peri-vascolare a lunghissima sopravvivenza. Protagonisti dello shock anafilattico.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">Monociti Classici</td>
                    <td className="p-3 font-mono">CD14⁺⁺ CD16⁻, CCR2high, CD62L⁺</td>
                    <td className="p-3">Lisozima, citochine pro-infiammatorie primarie (TNF-α, IL-1β)</td>
                    <td className="p-3">Reclutati rapidamente nei focolai flogistici extravascolari per differenziare in macrofagi infiammatori e cDC.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">Monociti Patrolling</td>
                    <td className="p-3 font-mono">CD14⁺ CD16⁺⁺, CX₃CR1high</td>
                    <td className="p-3">Bassa produzione di ROS, espressione di fattori pro-sopravvivenza</td>
                    <td className="p-3">Sorveglianza continua della superficie luminale endoteliale vascolare (rimozione di immunocomplessi e cellule apoptotiche).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Sotto-blocco: Polarizzazione Macrofagica M1 vs M2 */}
            <div className="pt-3 space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                Dicotomia della Polarizzazione Macrofagica: M1 Microbicida vs M2 Riparativo
              </h4>
              <p>
                I macrofagi residenti e quelli derivati dai monociti esibiscono una straordinaria plasticità fenotipica in risposta al microambiente citochinico tissutale:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-red-200 dark:border-red-900/60 bg-red-50/30 dark:bg-red-950/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-red-900 dark:text-red-300 text-sm">Macrofago M1 (Classicamente Attivato)</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-100 dark:bg-red-900/60 text-red-800 dark:text-red-300 font-bold">PRO-INFIAMMATORIO</span>
                  </div>
                  <ul className="text-xs space-y-1.5 text-slate-700 dark:text-slate-300 list-disc pl-4">
                    <li><strong>Stimoli Induttori:</strong> IFN-γ (secreto da Th1 e NK) in cooperazione con ligandi TLR (es. LPS batterico) o TNF-α.</li>
                    <li><strong>Profilo Enzimatico:</strong> Espressione massiccia di <strong>iNOS (ossido nitrico sintasi inducibile)</strong> che converte L-arginina in <strong>Ossido Nitrico (NO)</strong> e citrullina, generando composti reattivi dell'azoto altamente microbicidi.</li>
                    <li><strong>Citochine Secrete:</strong> IL-12 (che alimenta il circuito Th1/IFN-γ), IL-23, IL-1β, IL-6 e TNF-α.</li>
                    <li><strong>Funzione:</strong> Eradicazione di patogeni intracellulari (batteri, protozoi), distruzione di cellule tumorali; se protratto causa danno tissutale necrotico massivo.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/30 dark:bg-emerald-950/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-900 dark:text-emerald-300 text-sm">Macrofago M2 (Alternativamente Attivato)</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold">RIPARATIVO / TOLLEROGENICO</span>
                  </div>
                  <ul className="text-xs space-y-1.5 text-slate-700 dark:text-slate-300 list-disc pl-4">
                    <li><strong>Stimoli Induttori:</strong> IL-4 e IL-13 (prodotte da Th2, ILC2 ed eosinofili) via STAT6, oppure IL-10 e glucocorticoidi.</li>
                    <li><strong>Profilo Enzimatico:</strong> Espressione selettiva di <strong>Arginasi-1 (Arg-1)</strong>, che compete per la L-arginina convertendola in <strong>L-ornitina</strong> e urea (precursore di prolina e poliamine per la biosintesi di collagene e matrice extracellulare).</li>
                    <li><strong>Citochine Secrete:</strong> IL-10, TGF-β, VEGF ed EGF (fattori angiogenetici e fibrogenetici).</li>
                    <li><strong>Funzione:</strong> Spegnimento della flogosi, cicatrizzazione delle ferite, angiogenesi e rimodellamento connettivale; nel microambiente tumorale i macrofagi associati al tumore (TAM) assumono fenotipo simil-M2 favorendo l'immunosoppressione e le metastasi.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sotto-blocco: Atlante delle Cellule Dendritiche */}
            <div className="pt-3 space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                Atlante delle Cellule Dendritiche (DC): I Conduttori dell'Immunità
              </h4>
              <p>
                Le cellule dendritiche rappresentano l'anello di congiunzione insostituibile tra immunità innata e adattativa. 
                Si suddividono in sottopopolazioni funzionalmente distinte con rigidi programmi trascrizionali:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl border border-blue-200 dark:border-blue-800/60 bg-blue-50/20 dark:bg-blue-950/20 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-blue-900 dark:text-blue-300 font-bold">
                    <Target className="w-4 h-4 text-blue-600" />
                    <span>cDC1 Convenzionali</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong>Marcatori & Fattori:</strong> BATF3, IRF8, XCR1, CLEC9A (sensore di cellule necrotiche).
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>Specializzazione:</strong> <strong>Cross-presentazione</strong> di antigeni esogeni su <strong>MHC di Classe I</strong> 
                    ai linfociti T CD8⁺ (CTL) e potente secrezione di IL-12 per innescare risposte Th1 antivirali e antitumorali.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50/20 dark:bg-indigo-950/20 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-indigo-900 dark:text-indigo-300 font-bold">
                    <Layers className="w-4 h-4 text-indigo-600" />
                    <span>cDC2 Convenzionali</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong>Marcatori & Fattori:</strong> IRF4, CD1c, CD11b, SIRPα.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>Specializzazione:</strong> Presentazione canonica su molecole <strong>MHC di Classe II</strong> 
                    ai linfociti T helper CD4⁺, con polarizzazione verso risposte Th2 (contro elminti) e Th17 (contro batteri extracellulari e funghi).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-purple-200 dark:border-purple-800/60 bg-purple-50/20 dark:bg-purple-950/20 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-purple-900 dark:text-purple-300 font-bold">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span>pDC Plasmacitoidi</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong>Marcatori & Fattori:</strong> E2-2 (TCF4), CD123, BDCA-2, TLR7, TLR9.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>Specializzazione:</strong> Fabbriche professionali di <strong>Interferoni di Tipo I (IFN-α/β)</strong> 
                    in risposta a RNA virale endosomiale (TLR7) e DNA CpG (TLR9), producendo livelli citochinici fino a 1000x superiori alle altre cellule.
                  </p>
                </div>
              </div>

              {/* Distinzione critica con FDC */}
              <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-xs">
                <strong className="text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mb-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                  <span>Distinzione Dogmatica d'Esame: FDC (Cellule Dendritiche Follicolari) vs DC Mieloidi</span>
                </strong>
                <p className="text-slate-600 dark:text-slate-300">
                  Le <strong>FDC (Cellule Dendritiche Follicolari)</strong>, residenti nei follicoli primari e nel centro germinativo di milza e linfonodi, 
                  <strong>non sono di origine ematopoietica</strong> bensì <strong>mesenchimale</strong>! Esse non derivano dalla HSC CD34⁺, 
                  <strong>non esprimono MHC di classe II</strong> e non presentano peptidi ai linfociti T. 
                  Il loro unico compito è trattenere immunocomplessi nativi (antigeni non digeriti) sulla loro complessa rete di prolungamenti 
                  tramite i recettori del complemento <strong>CR1 (CD35)</strong>, <strong>CR2 (CD21)</strong> e recettori FcγR, 
                  fungendo da substrato selettivo per la maturazione dell'affinità dei linfociti B.
                </p>
              </div>
            </div>
          </div>

          {/* Ponte Fisiologico di Transizione */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-100 via-indigo-50 to-slate-100 dark:from-slate-800 dark:via-indigo-950/40 dark:to-slate-800 border border-indigo-200/60 dark:border-indigo-800/50 flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-indigo-900 dark:text-indigo-200 font-semibold block mb-0.5">
                Ponte Fisiologico di Transizione: Dalla linfa vitale del midollo all'educazione clonale
              </strong>
              Una volta generati i precursori linfoidi, la biologia immunitaria si trova di fronte a un paradosso critico: 
              come addestrare cellule dotate di recettori generati casualmente senza che distruggano l'organismo stesso? 
              La risposta risiede negli <strong>organi linfoidi primari (o centrali)</strong>: il <strong>Midollo Osseo</strong> per i linfociti B 
              e il <strong>Timo</strong> per i linfociti T.
            </div>
          </div>
        </section>


        {/* =========================================================================
            SEZIONE 0.3: ORGANI LINFOIDI PRIMARI: MIDOLLO OSSEO & TIMO
            ========================================================================= */}
        <section 
          id="sec-0-organi-primari" 
          aria-labelledby="heading-sec-0-organi-primari"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-wider font-bold">
              <Shield className="w-4 h-4" />
              <span>Sezione 0.3 · Istruzione & Tolleranza Centrale</span>
            </div>
            <h2 id="heading-sec-0-organi-primari" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Organi Linfoidi Primari (Centrali): Midollo Osseo e Microarchitettura Timica
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Dall'istruzione B-midollare alla compartimentazione istologica del Timo: cTEC corticali, mTEC midollari, il regolatore trascrizionale AIRE (APECED) e i corpuscoli di Hassall produttori di TSLP.
            </p>
          </div>

          <div className="space-y-4 text-slate-800 dark:text-slate-200">
            <p>
              Gli <strong>Organi Linfoidi Primari (o Centrali)</strong> sono le sedi anatomiche specializzate in cui i linfociti 
              compiono la loro genesi, riarrangiano i geni per i recettori dell'antigene (BCR e TCR) e subiscono i processi 
              obbligati di <strong>selezione e autotolleranza centrale</strong>. Nel mammifero adulto, il <strong>Midollo Osseo</strong> 
              funziona sia da organo ematopoietico generale sia da organo primario per la linea B, mentre il <strong>Timo</strong> 
              è l'organo epiteliale deputato in via esclusiva all'educazione della linea T.
            </p>

            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-2">
              L'Involuzione Timica nell'Arco della Vita
            </h3>
            <p>
              Il timo è un organo bilobato situato nel mediastino antero-superiore. Possiede una cinetica di sviluppo peculiare: 
              raggiunge il massimo sviluppo relativo durante la vita fetale e perinatale, e la massima massa assoluta (30-40 grammi) 
              alla pubertà. Subito dopo, sotto la spinta degli ormoni steroidei sessuali (androgeni ed estrogeni), inizia un inarrestabile 
              processo di <strong>involuzione timica</strong>, caratterizzato da progressiva apoptosi dell'epitelio funzionale e sua 
              sostituzione con tessuto fibro-adiposo. Nell'anziano, il timo residuo è ridotto a una massa atrofica con isole epiteliali minime: 
              la produzione di nuovi linfociti T naïve vergini crolla verticalmente (misurata dal decremento dei cerchi di escissione 
              del DNA episomale <strong>TREC</strong>, <em>T-cell Receptor Excision Circles</em>), costringendo l'adulto a mantenere 
              il proprio compartimento T periferico mediante divisione omeostatica guidata da IL-7.
            </p>

            {/* Anatomia Istologica del Timo: Corticale vs Midollare */}
            <div className="pt-2 space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                Anatomia Istologica del Timo: Compartimentazione Corticale vs Midollare
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Corticale Timica */}
                <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800/70 bg-indigo-50/25 dark:bg-indigo-950/20 space-y-2.5">
                  <div className="flex items-center justify-between border-b border-indigo-200 dark:border-indigo-800/50 pb-2">
                    <span className="font-bold text-indigo-900 dark:text-indigo-300 text-sm">1. Corticale Timica (Alta Densità)</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 font-bold">SELEZIONE POSITIVA</span>
                  </div>
                  <ul className="text-xs space-y-2 text-slate-700 dark:text-slate-300 list-disc pl-4">
                    <li>
                      <strong>Popolazione Cellulare:</strong> Stipata all'inverosimile da timociti immaturi: prima <strong>Doppi Negativi (DN, CD4⁻ CD8⁻)</strong> 
                      che riarrangiano la catena β del TCR associandola al pre-Tα, e successivamente <strong>Doppi Positivi (DP, CD4⁺ CD8⁺)</strong> 
                      che esprimono il TCR αβ completo.
                    </li>
                    <li>
                      <strong>Cellule Epiteliali Corticali (cTEC):</strong> Formano un reticolo spugnoso ramificato che avvolge i timociti. 
                      Esprimono sia molecole MHC-I che MHC-II complessate con una varietà di peptidi self endogeni (processati da un proteasoma timico specifico contenente la subunità <em>β5t</em>).
                    </li>
                    <li>
                      <strong>Selezione Positiva:</strong> I timociti DP il cui TCR riconosce con <strong>bassa o moderata affinità</strong> 
                      i complessi self-MHC/peptide sulle cTEC ricevono segnali vitali anti-apoptotici (Bcl-2). Se riconoscono MHC-I diventano Singoli Positivi <strong>CD8⁺</strong>; 
                      se riconoscono MHC-II diventano Singoli Positivi <strong>CD4⁺</strong>. I timociti con TCR non funzionante muoiono per abbandono (<em>death by neglect</em>, oltre il 90%).
                    </li>
                  </ul>
                </div>

                {/* Midollare Timica */}
                <div className="p-4 rounded-xl border border-teal-200 dark:border-teal-800/70 bg-teal-50/25 dark:bg-teal-950/20 space-y-2.5">
                  <div className="flex items-center justify-between border-b border-teal-200 dark:border-teal-800/50 pb-2">
                    <span className="font-bold text-teal-900 dark:text-teal-300 text-sm">2. Midollare Timica (Bassa Densità)</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 font-bold">SELEZIONE NEGATIVA</span>
                  </div>
                  <ul className="text-xs space-y-2 text-slate-700 dark:text-slate-300 list-disc pl-4">
                    <li>
                      <strong>Popolazione Cellulare:</strong> Densità cellulare minore; timociti Singoli Positivi (SP CD4⁺ o SP CD8⁺) maturi, 
                      cellule epiteliali midollari (<strong>mTEC</strong>) e cellule dendritiche timiche residenti e migranti.
                    </li>
                    <li>
                      <strong>Il Fattore AIRE e i TRA:</strong> Le mTEC esprimono in via esclusiva il fattore <strong>AIRE (Autoimmune Regulator)</strong>, 
                      che induce la trascrizione ectopica promiscua di antigeni tessuto-specifici periferici (TRA, es. insulina, tireoglobulina).
                    </li>
                    <li>
                      <strong>Selezione Negativa (Delezione Clonale):</strong> I timociti SP che riconoscono i peptidi self presentati dalle mTEC o dalle DC 
                      con <strong>affinità eccessivamente elevata</strong> ricevono un potente segnale apoptotico mediato da Bim, venendo eliminati per fagocitosi macrofagica. 
                      Ciò impedisce che cloni autoreattivi pericolosi fuoriescano in periferia.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Approfondimento Clinico: AIRE e Sindrome APECED */}
            <div className="bg-red-50/60 dark:bg-red-950/25 border-l-4 border-red-500 p-4 rounded-r-xl space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-red-900 dark:text-red-300 font-bold">
                <Stethoscope className="w-4 h-4 shrink-0 text-red-600" />
                <span>Correlazione Clinico-Genetica: Mutazioni di AIRE e Sindrome APECED / APS-1</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                La perdita di funzione per mutazione autosomica recessiva del gene <strong>AIRE</strong> (cromosoma 21q22.3) scatena la 
                <strong>Sindrome Autoimmune Poliendocrina di Tipo 1 (APECED</strong> o <strong>APS-1)</strong>. 
                In assenza di AIRE, le mTEC non trascrivono le proteine tessuto-specifiche: i timociti dotati di TCR altamente affini 
                per l'insulina, l'ormone paratiroideo, la 21-idrossilasi surrenalica o antigeni delle mucose <strong>sfuggono alla selezione negativa</strong> 
                ed entrano nel sangue, provocando la distruzione immunomediata multiorgano.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                <strong>Triade Clinica Patognomonica d'Esame:</strong>
              </p>
              <ol className="list-decimal pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                <li><strong>Ipoparatiroidismo Primario Autoimmune:</strong> con conseguente ipocalcemia grave, tetania e spasmi muscolari.</li>
                <li><strong>Insufficienza Corticosurrenalica Primaria (Morbo di Addison):</strong> con ipocorticosurrenalismo, iponatremia, iperkaliemia e iperpigmentazione cutanea.</li>
                <li><strong>Candidosi Mucocutanea Cronica (CMC):</strong> causata paradossalmente dalla produzione di <strong>autoanticorpi neutralizzanti anti-IL-17A e anti-IL-17F</strong>, che aboliscono l'asse Th17 essenziale per le difese epiteliali contro la <em>Candida albicans</em>.</li>
              </ol>
            </div>

            {/* Focus: Corpuscoli di Hassall e Generazione dei Treg Naturali */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-2 text-xs sm:text-sm">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-600" />
                <span>I Corpuscoli di Hassall e la Nascita dei Linfociti T Regolatori Naturali (tTreg)</span>
              </h4>
              <p className="text-slate-700 dark:text-slate-300">
                Nella midollare timica risaltano istologicamente i <strong>Corpuscoli di Hassall</strong>: formazioni concentriche 
                lamellari di cellule epiteliali reticolari cheratinizzate. Lungi dall'essere meri detriti cellulari degenerativi, 
                i corpuscoli di Hassall secernono attivamente la <strong>TSLP (Thymic Stromal Lymphopoietin)</strong>. 
                Questa citochina istruisce le cellule dendritiche midollari a captare timociti CD4⁺ che hanno mostrato 
                un'<strong>affinità intermedia</strong> per il self (superiore alla soglia di selezione positiva ma insufficiente per l'apoptosi), 
                guidandone la deviazione verso il fenotipo <strong>Linfocita T Regolatore Naturale (tTreg / nTreg)</strong> 
                caratterizzato dall'espressione costitutiva della catena α del recettore per IL-2 (<strong>CD25⁺</strong>) e del master transcription factor <strong>FoxP3⁺</strong>. 
                Queste cellule lasceranno il timo con la specifica missione di pattugliare la periferia e sopprimere eventuali cloni autoreattivi sfuggiti.
              </p>
            </div>
          </div>

          {/* Ponte Fisiologico di Transizione */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-100 via-indigo-50 to-slate-100 dark:from-slate-800 dark:via-indigo-950/40 dark:to-slate-800 border border-indigo-200/60 dark:border-indigo-800/50 flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-indigo-900 dark:text-indigo-200 font-semibold block mb-0.5">
                Ponte Fisiologico di Transizione: Dagli organi centrali ai campi di battaglia periferici
              </strong>
              I linfociti maturi vergini (naïve) licenziati dal midollo osseo e dal timo non possono incontrare i patogeni 
              disseminati casualmente nei tessuti dell'organismo. Per massimizzare la probabilità statistica di contatto con l'antigene, 
              essi convergono e ricircolano incessantemente all'interno degli <strong>Organi Linfoidi Secondari (Periferici)</strong>: 
              i <strong>Linfonodi</strong> (filtri della linfa tissutale), la <strong>Milza</strong> (filtro immunologico del sangue) 
              e il <strong>MALT</strong> (sentinella delle mucose).
            </div>
          </div>
        </section>


        {/* =========================================================================
            SEZIONE 0.4: ORGANI LINFOIDI SECONDARI: LINFONODI, MILZA & MALT
            ========================================================================= */}
        <section 
          id="sec-0-organi-secondari" 
          aria-labelledby="heading-sec-0-organi-secondari"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-wider font-bold">
              <Activity className="w-4 h-4" />
              <span>Sezione 0.4 · Architettura Periferica & Trafficking</span>
            </div>
            <h2 id="heading-sec-0-organi-secondari" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Organi Linfoidi Secondari (Periferici): Linfonodi, Milza, MALT e Trafficking S1P
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Microanatomia del linfonodo (SCS, area B/CXCL13, area T/CCL19-21, HEV, egresso S1PR1), anatomia splenica (polpa rossa emocateretica, polpa bianca, asplenia e sepsi OPSI da capsulati) e MALT mucosale con cellule M.
            </p>
          </div>

          <div className="space-y-4 text-slate-800 dark:text-slate-200">
            <p>
              Gli <strong>Organi Linfoidi Secondari (SLO, <em>Secondary Lymphoid Organs</em>)</strong> sono stazioni anatomiche 
              progettate per risolvere un titanico problema probabilistico: come far incontrare un antigene penetrato in una sperduta 
              regione periferica con l'unico linfocita T o B naïve su 1 milione capace di riconoscerlo. 
              Gli SLO realizzano questa convergenza attraverso una sofisticata compartimentazione chemiochinica e una circolazione linfatica/ematica ininterrotta.
            </p>

            {/* Microarchitettura del Linfonodo */}
            <div className="pt-2 space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                La Microarchitettura Funzionale del Linfonodo
              </h3>
              <p>
                Il linfonodo è un organo reniforme capsulato inserito lungo il decorso delle vie linfatiche. 
                La linfa drenata dai tessuti periferici giunge al linfonodo attraverso molteplici <strong>vasi linfatici afferenti</strong> 
                che perforano la capsula connettivale, riversandosi nel <strong>seno sottocapsulare (SCS)</strong>, e fluisce 
                attraverso i seni corticali e midollari fino a convergere in un unico <strong>vaso linfatico efferente</strong> all'ilo dell'organo.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                {/* Seno Sottocapsulare e Corticale Esterna */}
                <div className="p-3.5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/20 dark:bg-indigo-950/20 space-y-1.5">
                  <span className="font-bold text-indigo-900 dark:text-indigo-300 block text-sm">1. Seno Sottocapsulare & Corticale (Area B)</span>
                  <p className="text-slate-600 dark:text-slate-300">
                    Il seno sottocapsulare è tappezzato da <strong>macrofagi SCS CD169⁺ (Siglec-1⁺)</strong>. 
                    Questi macrofagi hanno scarsa attività degradativa lisosomiale: catturano virus e immunocomplessi intatti 
                    e li trasportano meccanicamente oltre il seno per offrirli direttamente ai linfociti B follicolari.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    La corticale ospita i <strong>follicoli B primari</strong> (quiescenti) e <strong>secondari</strong> (con centro germinativo). 
                    Le FDC secernono la chemochina <strong>CXCL13</strong>, che lega selettivamente il recettore <strong>CXCR5</strong> 
                    espresso su linfociti B e linfociti T follicular helper (Tfh), confinandoli nell'area B.
                  </p>
                </div>

                {/* Paracorticale (Area T) */}
                <div className="p-3.5 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/20 dark:bg-blue-950/20 space-y-1.5">
                  <span className="font-bold text-blue-900 dark:text-blue-300 block text-sm">2. Paracorticale (Area T & Rete FRC)</span>
                  <p className="text-slate-600 dark:text-slate-300">
                    Popolata da linfociti T naïve (CD4⁺ e CD8⁺) e cellule dendritiche interdigitate. 
                    È strutturata dalla rete tridimensionale dei <strong>Fibroblasti Reticolari (FRC)</strong>, che formano condotti 
                    collagenici su cui scorrono rapidamente le molecole solubili e su cui "pattugliano" i linfociti T.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    Le FRC e le venule HEV secernono <strong>CCL19</strong> e <strong>CCL21</strong>, ligandi del recettore <strong>CCR7</strong> 
                    espresso sui linfociti T naïve e sulle cellule dendritiche mature migranti, guidandone il transito e l'incontro sinaptico.
                  </p>
                </div>

                {/* HEV e Midollare */}
                <div className="p-3.5 rounded-xl border border-teal-200 dark:border-teal-800 bg-teal-50/20 dark:bg-teal-950/20 space-y-1.5">
                  <span className="font-bold text-teal-900 dark:text-teal-300 block text-sm">3. Venule HEV & Cordoni Midollari</span>
                  <p className="text-slate-600 dark:text-slate-300">
                    I linfociti naïve ematici entrano nel linfonodo extravasando attraverso le <strong>Venule ad Endotelio Alto (HEV)</strong>, 
                    dotate di cellule endoteliali cubiche esprimenti le addressine <strong>PNAd</strong> (che legano la <strong>L-selectina / CD62L</strong> 
                    dei linfociti).
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    La midollare interna è composta da <strong>cordoni midollari</strong> ricchi di plasmacellule secernenti anticorpi, 
                    macrofagi e seni midollari convergenti nel vaso linfatico efferente all'ilo.
                  </p>
                </div>
              </div>
            </div>

            {/* Simulatore Integrato Trafficking Linfonodale & Farmacologia Fingolimod */}
            <div className="pt-2">
              <InteractiveTraffickingSimulator />
            </div>

            {/* Microarchitettura della Milza */}
            <div className="pt-4 space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                La Milza: Filtro del Sangue, Polpa Rossa ed Emergenza Clinica dell'Asplenia
              </h3>
              <p>
                La milza è il più grande organo linfoide secondario del corpo umano. A differenza dei linfonodi, 
                <strong>la milza non possiede vasi linfatici afferenti</strong>: non filtra la linfa ma riceve direttamente 
                l'intero flusso dell'arteria splenica (~5% della gittata cardiaca), fungendo da sentinella ematica specializzata 
                contro i patogeni penetrati nel torrente circolatorio (<em>blood-borne</em>).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-red-200 dark:border-red-900/60 bg-red-50/25 dark:bg-red-950/20 space-y-2">
                  <span className="font-bold text-red-900 dark:text-red-300 text-sm block">1. Polpa Rossa Splenica (Emocateresi)</span>
                  <p className="text-slate-700 dark:text-slate-300">
                    Composta dai <strong>cordoni splenici di Billroth</strong> e da sinusoidi vascolari rivestiti da cellule endoteliali "a botte", 
                    intervallate da fessure strette di soli 2-3 micron. 
                    I globuli rossi devono deformarsi attivamente per re-immettersi nel circolo venoso. 
                    Gli eritrociti senescenti (&gt;120 giorni) o rigidi (es. nella sferocitosi ereditaria) perdono la deformabilità cellulare, 
                    vengono intrappolati nei cordoni e fagocitati dai <strong>macrofagi splenici della polpa rossa</strong>, 
                    che riciclano il ferro dell'emoglobina tramite l'enzima eme-ossigenasi.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/25 dark:bg-indigo-950/20 space-y-2">
                  <span className="font-bold text-indigo-900 dark:text-indigo-300 text-sm block">2. Polpa Bianca & Zona Marginale (MZ)</span>
                  <p className="text-slate-700 dark:text-slate-300">
                    Organizzata attorno alle arteriole centrali: comprende la <strong>Guaina Linfoide Periarteriolare (PALS)</strong>, 
                    ricca di linfociti T (equivalente della paracorticale linfonodale), e i follicoli B adiacenti. 
                    All'interfaccia tra polpa bianca e rossa si trova la <strong>Zona Marginale (MZ)</strong>, popolata da macrofagi marginali 
                    e dai vitali <strong>Linfociti B della Zona Marginale (MZ B cells, CD21high CD23low IgMhigh CD1d⁺)</strong>. 
                    Queste cellule montano risposte T-indipendenti ultra-rapide producendo anticorpi IgM contro gli antigeni polisaccaridici capsulari.
                  </p>
                </div>
              </div>

              {/* Rischio Clinico Asplenia e OPSI */}
              <div className="bg-red-50/70 dark:bg-red-950/30 border-l-4 border-red-600 p-4 rounded-r-xl space-y-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-red-900 dark:text-red-300 font-bold">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>Quadro Clinico d'Emergenza: Asplenia & Sepsi Fulminante Post-Splenectomia (OPSI)</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Nei pazienti sottoposti a splenectomia chirurgica (per traumi addominali, porpora trombocitopenica immune ITP o sferocitosi) 
                  o con asplenia funzionale (come nell'anemia a cellule falciformi per ripetuti micro-infarti splenici durante l'infanzia), 
                  viene a mancare l'unico filtro ematico macrofagico e l'intero compartimento delle cellule B della zona marginale.
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  Ciò espone il paziente al rischio catastrofico di <strong>Infezione Fulminante Post-Splenectomia (OPSI, <em>Overwhelming Post-Splenectomy Infection</em>)</strong>, 
                  causata prevalentemente da batteri piogeni capsulati: <strong><em>Streptococcus pneumoniae</em></strong> (responsabile di oltre il 60% dei casi), 
                  <strong><em>Neisseria meningitidis</em></strong> e <strong><em>Haemophilus influenzae tipo b</em> (Hib)</strong>. 
                  Senza anticorpi anti-polisaccaridici e senza opsonizzazione splenica, questi batteri proliferano nel sangue a ritmi esponenziali, 
                  evolvendo in poche ore in shock settico, coagulazione intravascolare disseminata (CID), sindrome di Waterhouse-Friderichsen e morte con mortalità superiore al 50%.
                </p>
                <div className="p-2.5 rounded bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900 text-xs font-semibold text-red-800 dark:text-red-300">
                  Protocollo Profilattico Obbligatorio: Tutti i pazienti splenectomizzati devono ricevere vaccinazione anti-pneumococcica (coniugata e polisaccaridica), 
                  anti-meningococcica (coniugata tetravalente ACWY e sierogruppo B) e anti-Hib almeno 14 giorni prima dell'intervento in elezione 
                  (o 14 giorni dopo in urgenza), corredata da profilassi antibiotica di riserva da assumere immediatamente alla comparsa del primo picco febbrile.
                </div>
              </div>
            </div>

            {/* MALT e Cellule M */}
            <div className="pt-3 space-y-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                MALT (Tessuto Linfoide Associato alle Mucose) e le Cellule Microfold (Cellule M)
              </h3>
              <p className="text-xs sm:text-sm">
                Il <strong>MALT</strong> (GALT intestinale, BALT bronchiale, NALT faringeo dell'anello di Waldeyer) rappresenta 
                la più vasta estensione di tessuto linfoide dell'organismo. Nelle <strong>Placche di Peyer</strong> dell'ileo terminale, 
                l'epitelio follicolo-associato (FAE) è arricchito di cellule epiteliali specializzate denominate <strong>Cellule M (Microfold)</strong>. 
                Le cellule M sono prive del fitto glicocalice e dei microvilli tipici degli enterociti e presentano una profonda tasca 
                basolaterale in cui alloggiano linfociti T, B e cellule dendritiche. Esse compiono la continua <strong>transcitosi di antigeni e microbi intatti</strong> 
                dal lume intestinale verso la lamina propria sottostante, consegnandoli direttamente alle DC che guideranno 
                la differenziazione delle plasmacellule secernenti <strong>IgA dimeriche (sIgA)</strong>.
              </p>
            </div>
          </div>

          {/* Ponte Fisiologico di Transizione */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-100 via-indigo-50 to-slate-100 dark:from-slate-800 dark:via-indigo-950/40 dark:to-slate-800 border border-indigo-200/60 dark:border-indigo-800/50 flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-indigo-900 dark:text-indigo-200 font-semibold block mb-0.5">
                Ponte Fisiologico di Transizione: Dagli organi anatomici alla grande legge teorica di Burnet
              </strong>
              Come fa un singolo linfocita T o B, stipato nella paracorticale o nel follicolo, a governare la risposta dell'intero organismo? 
              La risposta teorica che ha fondato l'immunologia moderna è la <strong>Teoria della Selezione Clonale di Frank Macfarlane Burnet</strong>, 
              le cui dinamiche variano drammaticamente nell'arco della vita dell'ospite: dalla vulnerabilità neonatale alla tolleranza 
              materno-fetale fino all'<em>inflammaging</em> senile.
            </div>
          </div>
        </section>


        {/* =========================================================================
            SEZIONE 0.5: POSTULATI DI BURNET & DINAMICA NELL'ARCO DELLA VITA
            ========================================================================= */}
        <section 
          id="sec-0-burnet-vita" 
          aria-labelledby="heading-sec-0-burnet-vita"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-wider font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Sezione 0.5 · Teoria Clonale & Fisiologia dell'Ospite</span>
            </div>
            <h2 id="heading-sec-0-burnet-vita" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Postulati della Selezione Clonale di Burnet e Dinamica Immunitaria nell'Arco della Vita
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              I 4 postulati di Burnet, cinetica di risposta primaria vs secondaria, e la curva a U della suscettibilità infettiva: protezione passiva neonatale (FcRn/sIgA), tolleranza deciduale in gravidanza (HLA-G/IDO) e immunosenescenza senile con inflammaging.
            </p>
          </div>

          <div className="space-y-4 text-slate-800 dark:text-slate-200">
            <p>
              Nel 1957, il biologo australiano <strong>Sir Frank Macfarlane Burnet</strong> enunciò la <strong>Teoria della Selezione Clonale</strong>, 
              destinata a superare le obsolete teorie istruzionistiche (secondo cui l'antigene fungeva da stampo per plasmare l'anticorpo) 
              e a valergli il Premio Nobel per la Medicina nel 1960 insieme a Sir Peter Medawar.
            </p>

            {/* I 4 Postulati di Burnet */}
            <div className="space-y-2 pt-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Scale className="w-4 h-4 text-indigo-600" />
                <span>I 4 Postulati Cardinali di Burnet (La Costituzione dell'Immunologia Adattativa)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/20 dark:bg-indigo-950/20 space-y-1">
                  <strong className="text-indigo-900 dark:text-indigo-300 font-bold block">1. Unicità Pre-Formata del Recettore</strong>
                  <p className="text-slate-700 dark:text-slate-300">
                    Ogni singolo linfocita esprime sulla propria membrana plasmatica un unico tipo di recettore (BCR o TCR) con una specificità molecolare 
                    fissata prima di qualsiasi contatto con l'antigene estraneo.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/20 dark:bg-indigo-950/20 space-y-1">
                  <strong className="text-indigo-900 dark:text-indigo-300 font-bold block">2. Attivazione per Riconoscimento ad Alta Affinità</strong>
                  <p className="text-slate-700 dark:text-slate-300">
                    L'incontro fisico tra l'antigene estraneo e il recettore che presenta la complementarietà stereochimica ad alta affinità 
                    innesca l'entrata nel ciclo cellulare e l'espansione clonale esponenziale.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/20 dark:bg-indigo-950/20 space-y-1">
                  <strong className="text-indigo-900 dark:text-indigo-300 font-bold block">3. Conservazione Clonale e Memoria</strong>
                  <p className="text-slate-700 dark:text-slate-300">
                    Tutti i discendenti cellulari (il clone) ereditano stabilmente la medesima specificità recettoriale della cellula progenitrice, 
                    differenziando in effettori a breve sopravvivenza e cellule di memoria immunologica a lungo termine.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/20 dark:bg-indigo-950/20 space-y-1">
                  <strong className="text-indigo-900 dark:text-indigo-300 font-bold block">4. Delezione Clonale dei Linfociti Autoreattivi</strong>
                  <p className="text-slate-700 dark:text-slate-300">
                    I linfociti embrionali/precoci che riconoscono molecole autologhe (<em>self</em>) durante la maturazione negli organi linfoidi primari 
                    vengono fisicamente eliminati per apoptosi o anergizzati (autotolleranza centrale).
                  </p>
                </div>
              </div>
            </div>

            {/* Simulatore di Cinetica Primaria vs Secondaria */}
            <div className="pt-4 space-y-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>Cinetica della Risposta Primaria vs Secondaria (Simulatore Dinamico a 56 Giorni)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                La risposta primaria è dominata da una fase di latenza (<em>lag phase</em>, 5-7 giorni), modesto titolo anticorpale e prevalenza di IgM a bassa affinità. 
                La risposta secondaria (memoria) è immediata (1-3 giorni), raggiunge titoli 100-1000 volte superiori con persistenza duratura e isotipo IgG ad altissima affinità.
              </p>

              <InteractiveKineticsGraph />
            </div>

            {/* Dinamica della Suscettibilità nell'Arco della Vita (Curva a U) */}
            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  Dalla Lezione 2 del Syllabus
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  La Curva a U della Suscettibilità Infettiva e Fisiopatologia dell'Ospite
                </h3>
              </div>

              <p className="text-xs sm:text-sm">
                L'efficienza della risposta immunitaria traccia una caratteristica curva a forma di "U": la mortalità e la suscettibilità 
                alle infezioni gravi presentano due picchi estremi (nel <strong>periodo neonatale</strong> e nella <strong>senescenza</strong>), 
                mentre raggiungono il minimo assoluto nell'<strong>età adulta giovane</strong>, con una parentesi fisiologica speciale durante la <strong>gravidanza</strong>.
              </p>

              {/* Simulatore Interattivo Ontogenesi dell'Ospite */}
              <div className="pt-2">
                <InteractiveOntogenyChart />
              </div>

              {/* Approfondimenti Fisiopatologici Dettagliati per Fase */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-2">
                {/* 1. Neonato e FcRn */}
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-slate-100">
                    <Baby className="w-4 h-4 text-indigo-600" />
                    <span>1. Periodo Neonatale: FcRn & sIgA</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    Il sistema immunitario neonatale è naïve e fisiologicamente sbilanciato verso risposte Th2 e tollerogeniche. 
                    La protezione è interamente delegata alla madre:
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-300 text-[11px]">
                    <li><strong>FcRn Placentare:</strong> Il recettore neonatale per l'Fc (FcRn) espresso dal sinciziotrofoblasto trasporta attivamente le sole IgG materne nel sangue fetale durante il 3° trimestre.</li>
                    <li><strong>sIgA del Colostro:</strong> L'allattamento fornisce IgA secretorie dimeriche che rivestono e sterilizzano la mucosa gastrointestinale.</li>
                    <li><strong>Finestra di Nadir (3-6 mesi):</strong> Le IgG materne decadono (emivita ~21 giorni) prima che la sintesi autonoma di IgG infantili sia sufficiente, determinando la massima vulnerabilità a infezioni respiratorie virali (RSV).</li>
                  </ul>
                </div>

                {/* 2. Gravidanza e Tolleranza Materno-Fetale */}
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-slate-100">
                    <HeartPulse className="w-4 h-4 text-pink-600" />
                    <span>2. Gravidanza: Il Semi-Alloinnesto</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    Il feto esprime antigeni paterni non-self, configurandosi come un semi-allotrapianto. L'interfaccia deciduale adotta 3 strategie molecolari attive:
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-300 text-[11px]">
                    <li><strong>Molecola HLA-G:</strong> Il trofoblasto non esprime HLA-A o HLA-B (bloccando i CD8+ alloreattivi), ma espone la molecola non-classica HLA-G, che lega il recettore inibitorio ILT2/LILRB1 sulle NK materne.</li>
                    <li><strong>Enzima IDO:</strong> L'indoleamina 2,3-diossigenasi degrada il triptofano essenziale esaurendo i linfociti T materni.</li>
                    <li><strong>Espansione Treg Deciduali:</strong> Blocco del rigetto immunitario dell'embrione mediato da FoxP3+.</li>
                  </ul>
                </div>

                {/* 3. Immunosenescenza e Inflammaging */}
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-slate-100">
                    <Activity className="w-4 h-4 text-amber-600" />
                    <span>3. Senescenza: Inflammaging</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    L'involuzione timica completa e decenni di stimolazioni antigene-dipendenti provocano:
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-300 text-[11px]">
                    <li><strong>Restrizione del Repertorio TCR:</strong> Contrazione dei linfociti T naïve ed espansione oligoclonale di cloni senescenti (CD28⁻ CD57⁺) esausti specifici per CMV.</li>
                    <li><strong>Inflammaging Sistemico:</strong> Flogosi cronica sterile di basso grado sostenuta dal fenotipo secretorio associato alla senescenza (SASP: IL-6, TNF-α, IL-1β).</li>
                    <li><strong>Declino Vaccinale:</strong> Scarsa risposta anticorpale e cellulare a nuovi patogeni e ai vaccini influenzali.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Ponte Fisiologico di Transizione */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-100 via-indigo-50 to-slate-100 dark:from-slate-800 dark:via-indigo-950/40 dark:to-slate-800 border border-indigo-200/60 dark:border-indigo-800/50 flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-indigo-900 dark:text-indigo-200 font-semibold block mb-0.5">
                Ponte Fisiologico di Transizione: Verso la sintesi e l'autovalutazione finale
              </strong>
              Abbiamo percorso l'intera impalcatura logica dell'immunologia umana: dalla cinetica dei sistemi molecolari 
              alla fabbrica dell'ematopoiesi, all'istruzione centrale di timo e midollo, al ricircolo linfonodale e alle 
              fasi della vita dell'ospite. Ora consolidiamo le nozioni mediante la <strong>Tabella Sinottica Master a 12 parametri</strong> 
              e verifichiamo la padronanza accademica con i quesiti d'esame e le flashcard attive.
            </div>
          </div>
        </section>


        {/* =========================================================================
            SEZIONE 0.6: TABELLA SINOTTICA MASTER & AUTOVALUTAZIONE FINALE
            ========================================================================= */}
        <section 
          id="sec-0-verifica" 
          aria-labelledby="heading-sec-0-verifica"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-wider font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Sezione 0.6 · Sintesi & Verifica delle Competenze</span>
            </div>
            <h2 id="heading-sec-0-verifica" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Tabella Sinottica Master (Innata vs Adattativa) e Autovalutazione dell'Esame Orale
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Confronto a 12 parametri tra i due bracci immunitari, batteria ufficiale di quesiti a scelta multipla con razionale biochimico-clinico, e flashcard deck di ripasso mnemonico attivo.
            </p>
          </div>

          <div className="space-y-6">
            {/* Tabella Sinottica Master a 12 Parametri */}
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                <Scale className="w-4 h-4 text-indigo-600" />
                <span>Tabella Sinottica Master: Confronto Fisiopatologico Rigoroso a 12 Parametri</span>
              </h3>

              <div className="overflow-x-auto not-prose rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                      <th className="p-3 font-mono">#</th>
                      <th className="p-3">Parametro Biologico</th>
                      <th className="p-3 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300">Immunità Innata (Naturale)</th>
                      <th className="p-3 bg-blue-50/50 dark:bg-blue-950/20 text-blue-800 dark:text-blue-300">Immunità Adattativa (Acquisita)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    <tr>
                      <td className="p-3 font-mono font-bold text-slate-400">1</td>
                      <td className="p-3 font-semibold">Tempo di Risposta</td>
                      <td className="p-3 font-bold text-emerald-700 dark:text-emerald-400">Immediato (0 - 12 ore)</td>
                      <td className="p-3 font-bold text-blue-700 dark:text-blue-400">Ritardato (&gt;96 ore, picco a 7-14 giorni)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-slate-400">2</td>
                      <td className="p-3 font-semibold">Specificità dei Recettori</td>
                      <td className="p-3">Limitata a motivi molecolari condivisi (PAMPs / DAMPs)</td>
                      <td className="p-3">Squisita per singoli epitopi conformazionali o peptidi lineari</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-slate-400">3</td>
                      <td className="p-3 font-semibold">Diversità del Repertorio</td>
                      <td className="p-3 font-mono">Bassa (~10³ configurazioni)</td>
                      <td className="p-3 font-mono">Iper-diversificata (&gt;10⁹ - 10¹¹ recettori distinti)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-slate-400">4</td>
                      <td className="p-3 font-semibold">Meccanismo Genetico</td>
                      <td className="p-3">Codificato stabilmente nella linea germinale (<em>Germline</em>)</td>
                      <td className="p-3">Ricombinazione somatica casuale dei segmenti genici V(D)J (RAG-1/2)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-slate-400">5</td>
                      <td className="p-3 font-semibold">Distribuzione dei Recettori</td>
                      <td className="p-3">Non-clonale: recettori identici espressi su tutte le cellule dello stesso tipo</td>
                      <td className="p-3">Clonale: ogni singolo linfocita T o B esprime un recettore unico</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-slate-400">6</td>
                      <td className="p-3 font-semibold">Discriminazione Self / Non-Self</td>
                      <td className="p-3">Perfetta intrinseca: recettori evoluti per non legare molecole dell'ospite sano</td>
                      <td className="p-3">Imperfetta all'origine: richiede selezione centrale (timo/midollo) e periferica</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-slate-400">7</td>
                      <td className="p-3 font-semibold">Memoria Immunologica</td>
                      <td className="p-3"><em>Trained Immunity</em> de facto (epigenetica/metabolica, priva di ricombinazione genica)</td>
                      <td className="p-3 font-bold">Memoria Classica Clonale: espansione di cellule B e T a lunghissima vita</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-slate-400">8</td>
                      <td className="p-3 font-semibold">Componenti Cellulari</td>
                      <td className="p-3">Neutrofili, Monociti, Macrofagi, Cellule Dendritiche, Cellule NK, Mastociti, ILCs</td>
                      <td className="p-3">Linfociti T (CD4⁺ helper, CD8⁺ citotossici, Treg), Linfociti B e Plasmacellule</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-slate-400">9</td>
                      <td className="p-3 font-semibold">Componenti Umorali / Solubili</td>
                      <td className="p-3">Sistema del Complemento (via alternativa e lectinica), Lisozima, Defensine, CRP, PTX3</td>
                      <td className="p-3">Anticorpi secreti da plasmacellule (IgM, IgD, IgG, IgA, IgE)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-slate-400">10</td>
                      <td className="p-3 font-semibold">Adattabilità a Mutazioni Virali</td>
                      <td className="p-3">Rigida: se il patogeno muta il PAMP essenziale, il PRR non può adattarsi</td>
                      <td className="p-3">Flessibile: ipermutazione somatica e maturazione dell'affinità nel centro germinativo</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-slate-400">11</td>
                      <td className="p-3 font-semibold">Eredità Filogenetica</td>
                      <td className="p-3">Ancestrale: presente in tutti i metazoi pluricellulari e negli invertebrati</td>
                      <td className="p-3">Recente: comparsa nei vertebrati dotati di mascella (gnatostomi, ~500 milioni di anni fa)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-slate-400">12</td>
                      <td className="p-3 font-semibold">Rischi Fisiopatologici Tipici</td>
                      <td className="p-3">Sindrome da rilascio citochinico, shock settico da endotossina, flogosi cronica sterile</td>
                      <td className="p-3">Malattie autoimmuni organo-specifiche e sistemiche, ipersensibilità allergiche, rigetto</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quiz Integrato Ufficiale d'Esame */}
            <div className="not-prose space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              <QuizSection
                title="Quesiti d'Esame Ufficiali · Capitolo 0 (Fondamenti, Nicchia Midollare, Timo & Milza)"
                subtitle="Domande con razionale biochimico e perle d'esame per testare la padronanza dei concetti prima dell'orale"
                customQuestions={chapter0Questions}
              />
            </div>

            {/* Flashcard Deck di Ripasso Attivo */}
            <div className="not-prose pt-4 border-t border-slate-200 dark:border-slate-800">
              <FlashcardDeck
                title="Flashcard di Ripasso Mnemonico Attivo · Capitolo 0"
                subtitle="Mappe concettuali e schemi ad altissima resa: Trained Immunity, CXCL12/CXCR4, cDC1/cDC2, AIRE, S1PR1 e OPSI"
                cards={chapter0Flashcards}
              />
            </div>

            {/* Pulsante di Avanzamento al Capitolo I */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-gradient-to-r from-indigo-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800/80">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                  Percorso Didattico Sequenziale
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                  Pronto per il Capitolo I: L'Immunità Innata e le Difese di Barriera
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Prosegui con l'architettura microscopica delle giunzioni serrate, i peptidi antimicrobici (AMPs) e la cascata dei recettori TLR/NLR.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (onNavigateToChapter) {
                    onNavigateToChapter(1, 'sec-1-barriere');
                  } else {
                    const el = document.getElementById('top');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer"
              >
                <span>Vai al Capitolo I</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};
