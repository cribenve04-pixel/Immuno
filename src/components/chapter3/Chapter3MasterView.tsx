/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CAPITOLO III MASTER VIEW: COMUNICAZIONE CITOCHINICA, SINAPSI IMMUNOLOGICA,
 * CENTRI GERMINATIVI E POLARIZZAZIONE EFFETTRICE T E B
 * 
 * Trattato accademico continuo a pagina unica privo di discontinuità d'aula.
 * Unifica integralmente tutti i contenuti, le tabelle e i simulatori di:
 * - Lezione 2: Proprietà Citochiniche, Famiglie Recettoriali, Asse JAK-STAT/SOCS e Chemochine DRY
 * - Lezione 12: I Tre Segnali T, Architettura della Sinapsi SMAC, Cascata TCR, Sistema IL-2 e Checkpoint
 * - Lezione 13: Cooperazione T-B, Centro Germinativo (Zona Scura/Chiara), Enzima AID (SHM e CSR) e LLPC
 * - Lezione 14: Antigeni Timo-Indipendenti (TI-1/TI-2), Vaccini Glicoconiugati, B-1/MZ e Freni ITIM (FcγRIIB, CD22)
 * - Lezione 19: Polarizzazione Th1/Th2/Th17/Tfh/Treg, Plasticità Effettrice e Nobel Medicina 2025 FOXP3
 * - Lezione 20: Priming CD8+, Sinapsi Litica, Degranulazione Perforina/Granzimi, Fas/FasL e FHL/HLH
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
  Scissors,
  Split,
  Binary,
  Cpu,
  BookmarkCheck,
  Scale,
  Compass,
  Radio,
  Users,
  ShieldCheck,
  Syringe,
  Lock,
  Unlock,
  RefreshCw,
  Award
} from 'lucide-react';

// Simulatori Interattivi Chapter 3
import { InteractiveJakStatSimulator } from '../InteractiveJakStatSimulator';
import { InteractiveCytokineProperties } from '../InteractiveCytokineProperties';
import { InteractiveCytokineMatrix } from '../InteractiveCytokineMatrix';
import { InteractiveChemokineMatrix } from '../InteractiveChemokineMatrix';
import { InteractiveSynapseSimulator } from '../InteractiveSynapseSimulator';
import { InteractiveThreeSignals } from '../InteractiveThreeSignals';
import { InteractiveCheckpointBlockade } from '../InteractiveCheckpointBlockade';
import { InteractiveGerminalCenterSimulator } from '../InteractiveGerminalCenterSimulator';
import { InteractiveClassSwitchSimulator } from '../InteractiveClassSwitchSimulator';
import { InteractivePolarizationCompass } from '../InteractivePolarizationCompass';

// Quiz & Flashcards
import { ALL_EXAM_QUESTIONS } from '../../data/examQuestions';
import { FLASHCARDS_LEZIONE_2, CYTOKINE_PROPERTIES_DATA } from '../../data/lezione2Content';
import { FLASHCARDS_LEZIONE_12, LYMPHOID_DISTRIBUTION_DATA } from '../../data/lezione12Content';
import { FLASHCARDS_LEZIONE_13 } from '../../data/lezione13Content';
import { QuizSection } from '../QuizSection';
import { FlashcardDeck } from '../FlashcardDeck';

interface Chapter3MasterViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
  initialSection?: string;
  onNavigateSection?: (sectionId: string) => void;
}

export const Chapter3MasterView: React.FC<Chapter3MasterViewProps> = ({
  isSerif = false,
  fontSize = 'normal',
  initialSection
}) => {
  const proseFontClass = isSerif ? 'font-serif' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // Domande d'esame filtrate per le lezioni del Capitolo 3 (2, 12, 13, 14, 19, 20)
  const chapter3Questions = useMemo(() => {
    return ALL_EXAM_QUESTIONS.filter((q) => [2, 12, 13, 14, 19, 20].includes(q.lessonNumber));
  }, []);

  // Flashcards cumulate del Capitolo 3 (con set addizionali ad alta resa per L14, L19, L20)
  const chapter3Flashcards = useMemo(() => {
    const customCardsL14L19L20 = [
      {
        id: 'fc-c3-ti-1',
        category: 'Cellulare',
        front: 'Qual è la differenza fondamentale tra l\'attivazione indotta da antigeni TI-1 e antigeni TI-2?',
        back: 'Gli antigeni TI-1 (es. LPS ad alte dosi) possiedono attività mitogena intrinseca legando simultaneamente il BCR e un recettore PRR (TLR4), inducendo attivazione e proliferazione policlonale anche in linfociti B immaturi. Gli antigeni TI-2 (es. polisaccaridi capsulari ripetitivi) non hanno attività intrinseca di TLR, ma cross-linkano simultaneamente decine di BCR maturi sulla cellula B con l\'aiuto di C3d/CR2 e citochine BAFF/APRIL prodotte dalle cellule della milza.'
      },
      {
        id: 'fc-c3-conjugate',
        category: 'Clinica',
        front: 'Qual è il principio della "Linked Recognition" nei vaccini glicoconiugati contro i batteri capsulati?',
        back: 'Nei bambini < 2 anni i polisaccaridi capsulari (antigeni TI-2) non inducono risposta protettiva né memoria. Coniugando covalentemente il polisaccaride (aptene) a una proteina carrier (tossoide tetanico o CRM197), il linfocita B specifico lega lo zucchero col BCR, endocita il complesso, degrada la proteina e ne espone i peptidi su MHC-II. Il linfocita Tfh riconosce il peptide e fornisce CD40L e IL-21, consentendo la reazione del centro germinativo con switch a IgG e memoria a lungo termine.'
      },
      {
        id: 'fc-c3-fcgr2b',
        category: 'Molecolare',
        front: 'Come funziona il freno inibitorio del recettore FcγRIIB (CD32B) e quale fosfatasi recluta?',
        back: 'FcγRIIB è l\'unico recettore Fc inibitorio (dotato di motivo ITIM). Quando immunocomplessi IgG-antigene co-aggregano il BCR e FcγRIIB, la tirosina dell\'ITIM viene fosforilata da Lyn. L\'ITIM fosforilato recluta l\'inositolo-5-fosfatasi SHIP-1, la quale idrolizza PIP3 in PIP2 di membrana. Privato del PIP3, il complesso Btk-PLCγ2 si stacca dalla membrana plasmatica, arrestando la produzione di nuovi anticorpi (feedback negativo anticorpale).'
      },
      {
        id: 'fc-c3-th-polar',
        category: 'Cellulare',
        front: 'Quali sono i master regulator trascrizionali e le citochine signature di Th1, Th2, Th17 e Treg?',
        back: '• Th1: T-bet (indotto da IL-12/STAT4 e IFN-γ/STAT1) → produce IFN-γ per attivare macrofagi M1 contro patogeni intracellulari.\n• Th2: GATA-3 (indotto da IL-4/STAT6) → produce IL-4, IL-5, IL-13 contro elminti e nelle allergie.\n• Th17: RORγt (indotto da TGF-β + IL-6/IL-21/STAT3) → produce IL-17A/F e IL-22 per neutrofili e barriere contro funghi e batteri extracellulari.\n• Treg: FOXP3 (indotto da TGF-β + IL-2/STAT5) → immunosoppressione e tolleranza periferica.'
      },
      {
        id: 'fc-c3-nobel-2025',
        category: 'Fondamenti',
        front: 'Qual è la scoperta premiata con il Nobel per la Medicina 2025 su FOXP3 e cellule Treg?',
        back: 'Il Premio Nobel per la Fisiologia o Medicina 2025 è stato assegnato a Shimon Sakaguchi, Mary Brunkow e Fred Ramsdell per la scoperta e caratterizzazione del fattore di trascrizione FOXP3 come interruttore genetico maestro per lo sviluppo e la funzione soppressoria dei linfociti T regolatori (Treg), la cui mutazione provoca la sindrome autoimmune letale IPEX.'
      },
      {
        id: 'fc-c3-fhl',
        category: 'Patologia',
        front: 'Qual è il paradosso fisiopatologico della Linfoistiocitosi Emofagocitica Familiare (FHL)?',
        back: 'Mutazioni di geni della degranulazione (Perforina PRF1, Munc13-4 UNC13D, Sintassina-11 STX11, Rab27a) impediscono ai CTL e alle NK di uccidere la cellula bersaglio. Non ricevendo il segnale di spegnimento dato dalla lisi del target, rimangono agganciati nella sinapsi ipersecernendo quantità torrenziali di IFN-γ. Questo attiva massivamente i macrofagi sistemici che fagocitano eritrociti e piastrine nel midollo, provocando pancitopenia grave, iperferritinemia e tempesta citochinica fatale.'
      }
    ];

    return [
      ...FLASHCARDS_LEZIONE_2,
      ...FLASHCARDS_LEZIONE_12,
      ...FLASHCARDS_LEZIONE_13,
      ...customCardsL14L19L20
    ];
  }, []);

  // Sezione attiva per lo ScrollSpy della barra sticky
  const [activeSubSection, setActiveSubSection] = useState<string>('sec-3-citochine-jak');

  // Configurazione delle 7 grandi sezioni della barra di navigazione
  const SECTIONS_NAV = [
    { id: 'sec-3-citochine-jak', label: '3.1 Citochine & JAK-STAT', icon: Radio },
    { id: 'sec-3-sinapsi-tcr', label: '3.2 Sinapsi SMAC & TCR', icon: Zap },
    { id: 'sec-3-centro-germinativo', label: '3.3 Centro Germinativo & AID', icon: Sparkles },
    { id: 'sec-3-ti-b1-freni', label: '3.4 Antigeni TI & Freni ITIM', icon: Layers },
    { id: 'sec-3-polarizzazione-th', label: '3.5 Polarizzazione Th & Treg', icon: Compass },
    { id: 'sec-3-ctl-cd8', label: '3.6 CTL Citotossici & FHL', icon: Target },
    { id: 'sec-3-verifica', label: '3.7 Tavola Master & Quiz', icon: CheckCircle2 }
  ];

  // ScrollSpy per evidenziare la sezione visibile
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
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

  // Scorrimento alla sezione iniziale se specificata (singola esecuzione per prevenire scroll a tratti)
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

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSubSection(id);
    }
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8 lg:space-y-10 pb-16">

      {/* =========================================================================
          1. TESTATA MONUMENTALE DEL CAPITOLO III
          ========================================================================= */}
      <header className="bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-white shadow-xl border border-blue-800/40 relative overflow-hidden w-full">
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-10 bottom-0 text-blue-500/10 font-mono font-black text-9xl select-none pointer-events-none">
          III
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
              Capitolo III · Trattato Fondamentale
            </span>
            <span className="text-xs font-mono text-blue-200/70">
              Prof.sse Ricciarda Galandrini, Rosa Molfetta & Alessandra Soriani · Lezioni 2, 12, 13, 14, 19, 20
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Comunicazione Citochinica, Sinapsi Immunologica, Centri Germinativi e Polarizzazione Effettrice T e B
          </h1>

          <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed max-w-4xl">
            Dal codice biochimico di comunicazione intercellulare (le 4 proprietà delle citochine, la catena γc comune CD132, 
            la via di trasduzione JAK-STAT/SOCS e le chemochine con motivo DRY) alla coordinazione della <strong>Sinapsi Immunologica (SMAC)</strong> 
            e i tre segnali del TCR; dalla macchina mutazionale del <strong>Centro Germinativo</strong> guidata da AID (ipermutazione somatica e switch isotipico) 
            e le risposte T-indipendenti con freni ITIM (FcγRIIB e CD22), fino alla complessa <strong>Polarizzazione Effettrice Th1/Th2/Th17/Tfh/Treg</strong> 
            (con la scoperta di FOXP3 insignita del <strong>Premio Nobel per la Medicina 2025</strong>) e l'esecuzione letale dei linfociti citotossici <strong>CTL CD8⁺</strong>.
          </p>

          <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-md bg-white/10 text-white/90 border border-white/10 flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-blue-400" /> JAK-STAT Signaling & Jakinibs
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/10 text-white/90 border border-white/10 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" /> SMAC Synapse & Three Signals
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/10 text-white/90 border border-white/10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Germinal Center & AID (SHM/CSR)
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/10 text-white/90 border border-white/10 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-emerald-400" /> Th Lineages & Nobel 2025 FOXP3
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/10 text-white/90 border border-white/10 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-rose-400" /> CTL Lytic Synapse & FHL
            </span>
          </div>
        </div>
      </header>

      {/* =========================================================================
          2. BARRA STICKY DI NAVIGAZIONE RAPIDA IN-PAGE (SECTIONS_NAV)
          ========================================================================= */}
      <nav
        aria-label="Navigazione rapida sezioni Capitolo III"
        className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-xl p-1.5 shadow-lg shadow-black/20"
      >
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar scroll-smooth">
          {SECTIONS_NAV.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSubSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-sm shadow-blue-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{sec.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* =========================================================================
          CORPO DEL CAPITOLO: 7 GRANDI ARTICOLI SEQUENZIALI
          ========================================================================= */}
      <div className={`space-y-10 sm:space-y-12 lg:space-y-16 ${proseFontClass} ${proseSizeClass}`}>

        {/* =========================================================================
            SEZIONE 3.1: PROPRIETÀ DELLE CITOCHINE, FAMIGLIE RECETTORIALI & JAK-STAT
            ========================================================================= */}
        <section
          id="sec-3-citochine-jak"
          aria-labelledby="heading-sec-3-citochine-jak"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-mono uppercase tracking-wider font-bold">
              <Radio className="w-4 h-4" />
              <span>Sezione 3.1 · Comunicazione Umorale & Trasduzione Recettoriale (Lezione 2)</span>
            </div>
            <h2 id="heading-sec-3-citochine-jak" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Proprietà delle Citochine, Famiglie Recettoriali, Catena γc, Via JAK-STAT/SOCS e Chemochine
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Dalle 4 proprietà cardinali e la catena γ comune CD132 (X-SCID), al meccanismo molecolare della cascata JAK-STAT, lo spegnimento via SOCS/ubiquitina-ligasi e i Jakinibi; fino alle 4 classi di chemochine con recettori GPCR a motivo conservato DRY e corecettori HIV.
            </p>
          </div>

          <div className="space-y-5 text-slate-800 dark:text-slate-200">
            <p>
              Le <strong>citochine</strong> sono polipeptidi o glicoproteine a basso peso molecolare (generalmente 8-30 kDa) 
              secreti transitoriamente in risposta a stimoli antigenici o microbici. Agiscono con affinità picomolare (Kd ~ 10⁻¹⁰ - 10⁻¹² M) 
              legando recettori di superficie specifici con modalità prevalentemente <strong>autocrina</strong> (sulla cellula che le produce) 
              e <strong>paracrina</strong> (su cellule immediatamente adiacenti), riducendo al minimo la dispersione endocrina sistemica 
              grazie a una concentrazione direzionata nella fessura intercellulare e a una <strong>brevissima emivita plasmatica</strong> (pochi minuti).
            </p>

            {/* Sotto-blocco 1: Le 4 Proprietà Cardinali */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>1. I Quattro Pilastri Funzionali della Rete Citochinica</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20">
                  <strong className="text-blue-900 dark:text-blue-200 block mb-1">Pleiotropia</strong>
                  <p className="text-slate-700 dark:text-slate-300 text-xs">
                    Una singola citochina esplica effetti biologici diametralmente diversi su tipi cellulari distinti. 
                    <em>Esempio cardinale:</em> l'<strong>IL-4</strong> induce switch a IgE nei B, proliferazione nei mastociti e differenziamento Th2 nei timociti.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-cyan-200 dark:border-cyan-800 bg-cyan-50/30 dark:bg-cyan-950/20">
                  <strong className="text-cyan-900 dark:text-cyan-200 block mb-1">Ridondanza</strong>
                  <p className="text-slate-700 dark:text-slate-300 text-xs">
                    Citochine strutturalmente distinte inducono la medesima funzione biologica sulla stessa cellula. 
                    <em>Esempio:</em> <strong>IL-2, IL-4 e IL-5</strong> stimolano tutte la proliferazione clonale del linfocita B convergendo su vie proliferative comuni.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-950/20">
                  <strong className="text-indigo-900 dark:text-indigo-200 block mb-1">Sinergia</strong>
                  <p className="text-slate-700 dark:text-slate-300 text-xs">
                    Due citochine cooperano moltiplicando l'effetto finale oltre la somma aritmetica. 
                    <em>Esempio:</em> <strong>IL-4 + IL-5</strong> inducono uno switch massivo a IgE con degranulazione di eosinofili e mastociti nei centri germinativi.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50/30 dark:bg-rose-950/20">
                  <strong className="text-rose-900 dark:text-rose-200 block mb-1">Antagonismo</strong>
                  <p className="text-slate-700 dark:text-slate-300 text-xs">
                    Una citochina inibisce o annulla l'azione di un'altra. 
                    <em>Esempio:</em> <strong>IFN-γ</strong> (attivatore Th1) reprime direttamente lo switch isotipico a IgE indotto da <strong>IL-4</strong> (Th2).
                  </p>
                </div>
              </div>

              {/* Simulatore Incastonato Proprietà Citochine */}
              <div className="pt-2">
                <InteractiveCytokineProperties />
              </div>
            </div>

            {/* Sotto-blocco 2: Le 5 Famiglie Recettoriali e la Catena γc */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>2. Tassonomia delle 5 Famiglie di Recettori Citochinici e la Catena γc Comune</span>
              </h3>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-3 text-xs sm:text-sm">
                <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
                  <li>
                    <strong>Recettori di Tipo I (Superfamiglia delle Emopoietine):</strong> presentano nel dominio extracellulare il motivo amminoacidico conservato 
                    <strong>Trp-Ser-X-Trp-Ser (motivo WSXWS)</strong> e 4 cisteine conservate. Si articolano in tre sottofamiglie strutturate attorno a subunità condivise:
                    <div className="pl-4 pt-1 space-y-1">
                      <div>• <strong>Sottofamiglia della Catena γ Comune (γc o CD132):</strong> codificata dal gene <em>IL2RG</em> sul cromosoma Xq13. Condivisa da <strong>IL-2, IL-4, IL-7, IL-9, IL-15 e IL-21</strong>.</div>
                      <div>• <strong>Sottofamiglia della Catena β Comune (βc o CD131):</strong> condivisa da <strong>IL-3, IL-5 e GM-CSF</strong> (regolazione di mielopoiesi ed eosinofili).</div>
                      <div>• <strong>Sottofamiglia gp130 (CD130):</strong> subunità di trasduzione condivisa da <strong>IL-6, IL-11, LIF e Oncostatina M (OSM)</strong>.</div>
                    </div>
                  </li>
                  <li>
                    <strong>Recettori di Tipo II (Famiglia degli Interferoni):</strong> privi di motivo WSXWS, formati da eterodimeri leganti <strong>IFN-α/β (IFNAR1/2)</strong>, 
                    <strong>IFN-γ (IFNGR1/2)</strong> e la citochina antinfiammatoria <strong>IL-10</strong>.
                  </li>
                  <li>
                    <strong>Famiglia dell'Immunoglobulina (Ig-Superfamily):</strong> caratterizzati da domini Ig-fold extracellulari e dominio citoplasmatico <strong>TIR</strong> 
                    omologo ai TLR (recettori per <strong>IL-1α/β, IL-18 e IL-33</strong>; segnalazione mediata dall'adattatore MyD88 e IRAK4).
                  </li>
                  <li>
                    <strong>Famiglia del TNF-Receptor (TNF-R):</strong> trimeri transmembrana ricchi in cisteine. Comprendono recettori dotati di <strong>Death Domain (DD)</strong> citoplasmatico 
                    che reclutano TRADD/FADD innescando apoptosi o necroptosi (<strong>TNFR1, Fas/CD95, TRAIL-R</strong>), e recettori privi di DD che reclutano adattatori 
                    <strong>TRAF</strong> attivando NF-κB e MAPK (<strong>TNFR2, CD40, OX40, 4-1BB, RANK, BAFF-R</strong>).
                  </li>
                  <li>
                    <strong>Famiglia dei Recettori per IL-17 (IL-17R):</strong> eterodimeri (IL-17RA/IL-17RC) contenenti il dominio citoplasmatico conservato <strong>SEFIR</strong>, 
                    che recluta la proteina adattatrice <strong>Act1</strong> per l'attivazione di NF-κB e la stabilizzazione degli mRNA dei fattori infiammatori.
                  </li>
                </ol>
              </div>

              {/* Correlazione Clinica: X-SCID */}
              <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/40 dark:bg-rose-950/20 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span className="font-bold text-xs uppercase tracking-wider text-rose-900 dark:text-rose-200">
                    Correlazione Clinica d'Esame: X-SCID (Deficit di Catena γc / CD132)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Le mutazioni con perdita di funzione del gene <strong>IL2RG</strong> causano la <strong>SCID legata al sesso (X-SCID)</strong>, 
                  la forma più frequente di immunodeficienza combinata grave (~50% dei casi). 
                  La perdita della subunità γc abolisce simultaneamente la segnalazione di 6 citochine vitali: 
                  il blocco di <strong>IL-7</strong> arresta lo sviluppo dei linfociti T nel timo; il blocco di <strong>IL-15</strong> abolisce lo sviluppo 
                  delle cellule NK nel midollo osseo. Nel sangue periferico si osserva il classico fenotipo <strong>T⁻ B⁺ NK⁻</strong>: 
                  i linfociti B sono presenti numericamente (poiché nel midollo umano lo sviluppo B può sopperire a IL-7 grazie a SCF e Flt3L), 
                  ma risultano funzionalmente inermi per assenza di cooperazione T helper (pan-ipogammaglobulinemia grave con decesso entro il primo anno di vita se non trattata).
                </p>
              </div>
            </div>

            {/* Sotto-blocco 3: Cascata JAK-STAT, Spegnimento SOCS e Farmacologia dei Jakinibi */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>3. La Cascata di Trasduzione JAK-STAT, il Feedback Negativo SOCS e i Farmaci Jakinibi</span>
              </h3>
              <p>
                I recettori per citochine di Tipo I e Tipo II sono privi di attività catalitica intrinseca; 
                accoppiano constitutivamente le loro code intracellulari a tirosin-chinasi citoplasmatiche della famiglia 
                <strong>JAK (Janus Kinases: JAK1, JAK2, JAK3, Tyk2)</strong>.
              </p>

              <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20 space-y-2 text-xs sm:text-sm">
                <div className="font-bold text-blue-900 dark:text-blue-200">
                  Sequenza Enzimatica di Attivazione e Regolazione Intracellulare:
                </div>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-700 dark:text-slate-300 text-xs">
                  <li><strong>Dimerizzazione Recettoriale e Trans-Fosforilazione:</strong> il legame della citochina avvicina le JAK associate che si autofosforilano reciprocamente su residui di tirosina nel loop di attivazione.</li>
                  <li><strong>Docking delle Proteine STAT:</strong> le JAK attive fosforilano specifiche tirosine sulla coda del recettore, creando siti di ancoraggio per i domini <strong>SH2</strong> dei fattori di trascrizione citosolici <strong>STAT (STAT1, STAT2, STAT3, STAT4, STAT5a/b, STAT6)</strong>.</li>
                  <li><strong>Fosforilazione e Omodimerizzazione di STAT:</strong> JAK fosforila una tirosina critica vicino al C-terminale di STAT; le molecole di STAT si staccano dal recettore e <strong>dimerizzano reciprocamente SH2-fosfotirosina</strong>, esponendo un segnale di localizzazione nucleare (NLS). Il dimero trasloca nel nucleo legando sequenze promoter GAS (<em>Gamma-Activated Sites</em>).</li>
                  <li><strong>Spegnimento Fisiologico:</strong>
                    <br />• <strong>Fosfatasi SHP-1 e SHP-2:</strong> defosforilano rapidamente i recettori e le JAK;
                    <br />• <strong>Inibitori PIAS (Protein Inhibitors of Activated STAT):</strong> legano i dimeri STAT nel nucleo impedendone l'interazione con il DNA;
                    <br />• <strong>Proteine SOCS (Suppressors of Cytokine Signaling, SOCS1-7 e CIS):</strong> indotte dagli stessi STAT come circuito a <strong>feedback negativo</strong>. Con il loro dominio KIR bloccano l'attività chinasica di JAK, mentre con il dominio <strong>SOCS box</strong> reclutano una ubiquitina-ligasi E3 (elongina B/C e cullina 5) marcando JAK per la degradazione irreversibile nel proteasoma 26S.
                  </li>
                </ol>
              </div>

              {/* Simulatore Incastonato JAK-STAT */}
              <div className="pt-2">
                <InteractiveJakStatSimulator />
              </div>

              {/* Box Farmacologico: Jakinibi */}
              <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/40 dark:bg-indigo-950/20 space-y-2">
                <div className="flex items-center gap-2">
                  <Pill className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="font-bold text-xs uppercase tracking-wider text-indigo-900 dark:text-indigo-200">
                    Farmacologia Clinica: Gli Inibitori delle JAK (Jakinibi)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  I <strong>Jakinibi</strong> sono piccole molecole di sintesi chimica somministrabili per os che competono reversibilmente con l'ATP 
                  nella tasca catalitica delle JAK, bloccando a monte la trasduzione di molteplici citochine infiammatorie:
                  <br />• <strong>Tofacitinib:</strong> pan-JAK inibitore (prevalentemente JAK1 e JAK3, blocca γc) approvato per Artrite Reumatoide e Rettocolite Ulcerosa;
                  <br />• <strong>Baricitinib:</strong> inibitore selettivo JAK1/JAK2, utilizzato nell'Artrite Reumatoide refrattaria e nell'Alopecia Areata grave;
                  <br />• <strong>Ruxolitinib:</strong> inibitore JAK1/JAK2 impiegato nelle neoplasie mieloproliferative (Policitemia Vera, Mielofibrosi da mutazione JAK2-V617F) e nella GvHD;
                  <br />• <strong>Upadacitinib:</strong> inibitore selettivo JAK1 di seconda generazione approvato per Dermatite Atopica grave e Malattie Infiammatorie Croniche Intestinali.
                </p>
              </div>
            </div>

            {/* Sotto-blocco 4: Le Chemochine e il Motivo DRY */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Compass className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>4. Chemochine, Fissazione sui GAG e il Motivo Conservato DRY</span>
              </h3>
              <p>
                Le <strong>chemochine (citochine chemiotattiche, 8-10 kDa)</strong> governano la migrazione, l'homing tissutale e la localizzazione anatomica 
                dei leucociti. Si suddividono in 4 classi in base alla spaziatura delle prime due cisteine amino-terminali:
                <br />• <strong>CC (β-chemochine):</strong> cisteine adiacenti (es. CCL2/MCP-1 per monociti, CCL3/MIP-1α, CCL5/RANTES, CCL19/CCL21 per CCR7);
                <br />• <strong>CXC (α-chemochine):</strong> cisteine separate da un aminoacido (CXCL8/IL-8 contenente il motivo <strong>ELR</strong> per il reclutamento dei neutrofili; CXCL12/SDF-1 e CXCL13 prive di ELR per l'homing linfocitario);
                <br />• <strong>C (γ-chemochine):</strong> possiedono una sola cisteina (XCL1/Linfotactina, specifica per cDC1 via recettore XCR1);
                <br />• <strong>CX3C (δ-chemochine):</strong> cisteine separate da 3 aminoacidi (<strong>CX3CL1 / Frattalchina</strong>, espressa come proteina transmembrana ancorata su cellule endoteliali infiammate o solubile).
              </p>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-2 text-xs sm:text-sm">
                <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Dna className="w-4 h-4 text-blue-600" />
                  <span>Biofisica Recettoriale: Il Motivo Canonico DRY e i GAG</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                  Tutti i recettori chemochinici appartengono alla superfamiglia dei recettori a <strong>7 eliche transmembrana (GPCR) accoppiati a proteine eterotrimeriche Gαi</strong> 
                  (sensibili alla tossina pertossica). All'interno della seconda ansa intracellulare presentano la sequenza amminoacidica conservata 
                  <strong>Asp-Arg-Tyr (motivo DRY)</strong>: l'ingaggio della chemochina induce uno switch conformazionale del motivo DRY che catalizza lo scambio 
                  di GDP con GTP sulla subunità Gαi, provocando la dissociazione del complesso Gβγ che attiva PLCβ, PI3Kγ e le piccole GTPasi (Rho, Rac, Cdc42) 
                  per la polimerizzazione direzionale dell'actina.
                  <br />• <strong>Fissazione sui GAG Endoteliali:</strong> nel lume vascolare le chemochine non sono disperse libere nella corrente rapida del sangue, 
                  ma vengono immobilizzate mediante cariche elettrostatiche sui <strong>glicosamminoglicani (GAG, es. eparansolfato)</strong> del glicocalice endoteliale, 
                  generando un gradiente solido-fasico stabile di <strong>aptotassi</strong> che guida lo stravaso leucocitario.
                  <br />• <strong>Corecettori HIV:</strong> <strong>CCR5</strong> (espresso su macrofagi e cellule T memoria, bersaglio dei ceppi R5 macrofago-tropici) 
                  e <strong>CXCR4</strong> (espresso su cellule T naive, ceppi X4 linfo-tropici tardivi). La delezione omozigote naturale <strong>CCR5-Δ32</strong> 
                  conferisce resistenza quasi assoluta all'infezione da HIV-1.
                </p>
              </div>

              {/* Simulatore Incastonato Chemochine */}
              <div className="pt-2">
                <InteractiveChemokineMatrix />
              </div>
            </div>
          </div>

          {/* Ponte Fisiologico di Transizione */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-100 via-blue-50 to-slate-100 dark:from-slate-800 dark:via-blue-950/40 dark:to-slate-800 border border-blue-200/60 dark:border-blue-800/50 flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-blue-900 dark:text-blue-200 font-semibold block mb-0.5">
                Ponte Fisiologico di Transizione: Dalla chemiochinesi al contatto sinaptico stabile
              </strong>
              Guidati dai gradienti di CCL19 e CCL21, i linfociti T naïve vergini entrano nella paracorteccia linfonodale. 
              Qui la scansione delle cellule dendritiche culmina nell'arresto del movimento e nell'assemblaggio 
              di una complessa giunzione intercellulare specializzata: la <strong>Sinapsi Immunologica (SMAC)</strong>.
            </div>
          </div>
        </section>


        {/* =========================================================================
            SEZIONE 3.2: I TRE SEGNALI T, SINAPSI SMAC & SISTEMA IL-2
            ========================================================================= */}
        <section
          id="sec-3-sinapsi-tcr"
          aria-labelledby="heading-sec-3-sinapsi-tcr"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-mono uppercase tracking-wider font-bold">
              <Zap className="w-4 h-4" />
              <span>Sezione 3.2 · Attivazione Linfocitaria & Checkpoint (Lezione 12)</span>
            </div>
            <h2 id="heading-sec-3-sinapsi-tcr" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              I Tre Segnali di Attivazione T, Sinapsi Immunologica (SMAC), Cascata del TCR e Sistema IL-2
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Dalla segregazione cinetica cSMAC/pSMAC/dSMAC alla biochimica del Segnale 1 (Lck, 10 motivi ITAM, ZAP-70, LAT/SLP-76, PLC-γ1 con le vie Calcio/Calcineurina/NFAT, CBM/NF-κB e MAPK/AP-1); la costimolazione CD28/B7 (Segnale 2) vs anergia, il recettore trimerico ad altissima affinità per IL-2 (CD25) e i checkpoint inibitori CTLA-4 e PD-1.
            </p>
          </div>

          <div className="space-y-5 text-slate-800 dark:text-slate-200">
            <p>
              L'innesco di una risposta immunitaria adattativa richiede un rigido paradigma a <strong>tre segnali</strong>:
              <br />• <strong>Segnale 1 (Specificità):</strong> riconoscimento del complesso peptide-MHC da parte del TCR con l'assistenza dei corecettori CD4 o CD8.
              <br />• <strong>Segnale 2 (Costimolazione di Sopravvivenza):</strong> legame del recettore <strong>CD28</strong> con i costimolatori <strong>CD80 (B7-1) o CD86 (B7-2)</strong> sull'APC; l'assenza del segnale 2 determina <strong>anergia clonale irreversibile</strong>.
              <br />• <strong>Segnale 3 (Differenziamento e Polarizzazione):</strong> citochine polarizzanti prodotte dall'APC e dal microambiente (es. IL-12 per Th1, IL-4 per Th2, IL-6+TGF-β per Th17).
            </p>

            {/* Sotto-blocco 1: Architettura SMAC */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>1. Architettura della Sinapsi Immunologica (SMAC)</span>
              </h3>
              <p>
                All'ingaggio con l'APC, le molecole di membrana del linfocita T si riorganizzano nello spazio formando una struttura a bersaglio 
                concentrica denominata <strong>SMAC (<em>Supramolecular Activation Cluster</em>)</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20 space-y-1.5">
                  <div className="font-bold text-blue-900 dark:text-blue-200 flex items-center justify-between">
                    <span>cSMAC (Centro)</span>
                    <span className="text-[10px] font-mono font-bold text-blue-600">~15 nm cleft</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    Zona centrale a fessura stretta (~15 nm). Concentra i complessi di riconoscimento e segnalazione: 
                    <strong>TCR / CD3</strong>, corecettori <strong>CD4 o CD8</strong>, costimolatore <strong>CD28</strong> legato a B7, 
                    e nel versante citoplasmatico la chinasi <strong>PKC-θ</strong> associata a CARMA1.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-1.5">
                  <div className="font-bold text-indigo-900 dark:text-indigo-200 flex items-center justify-between">
                    <span>pSMAC (Anello Periferico)</span>
                    <span className="text-[10px] font-mono font-bold text-indigo-600">~40 nm cleft</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    Anello adesivo intermedio che circonda il cSMAC. Arricchito dall'integrina <strong>LFA-1 (CD11a/CD18)</strong> ad alta affinità 
                    legata a <strong>ICAM-1 (CD54)</strong> dell'APC, stabilizzata all'interno dal citoscheletro di actina tramite la <strong>Talina</strong>. 
                    Mantiene il sigillo meccanico ermetico per ore.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-1.5">
                  <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between">
                    <span>dSMAC (Anello Distale)</span>
                    <span className="text-[10px] font-mono font-bold text-slate-500">&gt;50 nm cleft</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    Zona esterna a fessura ampia. Per <strong>esclusione sterica cinetica</strong>, vengono relegate in periferia le molecole con voluminosi 
                    ectodomini extracellulari: la fosfatasi inibitoria <strong>CD45</strong> e la sialomucina <strong>CD43</strong>, impedendo che defosforilino 
                    prematuramente il complesso TCR.
                  </p>
                </div>
              </div>

              {/* Simulatori Incastonati: Sinapsi & 3 Segnali */}
              <div className="pt-2 space-y-4">
                <InteractiveSynapseSimulator />
                <InteractiveThreeSignals />
              </div>
            </div>

            {/* Sotto-blocco 2: Biochimica del Segnale 1 */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>2. Biochimica del Segnale 1: La Cascata Enzimatica del TCR</span>
              </h3>

              <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20 space-y-2.5 text-xs sm:text-sm">
                <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
                  <li>
                    <strong>Fosforilazione degli ITAM mediata da Lck:</strong> il legame al peptide-MHC posiziona la chinasi della famiglia Src 
                    <strong>Lck</strong> (ancorata alla coda di CD4 o CD8) vicino al complesso <strong>CD3</strong>. Lck fosforila i residui di tirosina 
                    nei <strong>10 motivi ITAM</strong> complessivi (1 motivo in ciascuna catena γ, δ, ε e ben 3 motivi per ciascuna delle 2 catene ζ).
                  </li>
                  <li>
                    <strong>Reclutamento e Attivazione di ZAP-70:</strong> i motivi ITAM della catena ζ doppiamente fosforilati reclutano i domini 
                    tandem SH2 della chinasi <strong>ZAP-70</strong>, la quale viene fosforilata e attivata da Lck.
                  </li>
                  <li>
                    <strong>Fosforilazione dello Scaffold LAT / SLP-76:</strong> ZAP-70 fosforila la proteina transmembrana <strong>LAT (<em>Linker for Activation of T cells</em>)</strong> 
                    e la proteina citosolica <strong>SLP-76</strong>, formando una piattaforma macromolecolare che recluta la <strong>Fosfolipasi C-gamma-1 (PLC-γ1)</strong>.
                  </li>
                  <li>
                    <strong>Scissione di PIP₂ e Ramificazione in Tre Vie Principali:</strong>
                    <div className="pl-4 pt-1 space-y-1.5">
                      <div>
                        • <strong>1. Via IP₃ → Calcio → Calcineurina → NFAT:</strong> IP₃ apre i canali del calcio sul reticolo endoplasmatico. 
                        Lo svuotamento attiva il sensore <strong>STIM1</strong> che induce l'apertura sostenuta dei canali di membrana <strong>ORAI1 (CRAC)</strong>. 
                        L'aumento di Ca²⁺ citosolico attiva la <em>Calmodulina</em>, che attiva la fosfatasi <strong>Calcineurina</strong>. 
                        La calcineurina defosforila il fattore trascrizionale <strong>NFAT</strong>, consentendone la traslocazione nucleare per trascrivere <em>IL2</em>. 
                        (I farmaci antirigetto <strong>Ciclosporina A</strong> e <strong>Tacrolimus / FK506</strong> inibiscono selettivamente la Calcineurina).
                      </div>
                      <div>
                        • <strong>2. Via DAG → PKC-θ → Complesso CBM → NF-κB:</strong> il diacilglicerolo di membrana attiva la chinasi <strong>PKC-θ</strong>, 
                        la quale fosforila CARD11 che polimerizza con BCL10 e MALT1 (<strong>complesso CBM</strong>), attivando IKK e degradando IκBα per liberare 
                        <strong>NF-κB (p50/p65)</strong>.
                      </div>
                      <div>
                        • <strong>3. Via RasGRP / SOS → Ras-Raf-MEK-ERK → AP-1:</strong> DAG recluta RasGRP che converte Ras-GDP in Ras-GTP, innescando la cascata 
                        delle MAP chinasi fino a fosforilare ERK. ERK attiva l'espressione di c-Fos e c-Jun, i quali dimerizzano formando il fattore trascrizionale <strong>AP-1</strong>.
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Sotto-blocco 3: Il Sistema IL-2 e Checkpoint Inibitori */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>3. Il Circuito Autocrino di IL-2 (CD25) e i Checkpoint Inibitori CTLA-4 e PD-1</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Sistema IL-2 */}
                <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20 space-y-2 text-xs sm:text-sm">
                  <div className="font-bold text-blue-900 dark:text-blue-200">
                    Il Paradosso di Affinità del Recettore IL-2 (CD25):
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    • <strong>Linfocita T naïve a riposo:</strong> esprime il recettore dimero a media affinità (Kd ~ 10⁻⁹ M), composto dalla catena β (CD122) e dalla catena γc (CD132).
                    <br />• <strong>Linfocita T attivato (TCR + CD28):</strong> sintetizza de novo la catena α (<strong>CD25, 55 kDa</strong>), assemblando il trimero αβγ ad <strong>altissima affinità (Kd ~ 10⁻¹¹ M)</strong>. 
                    Il legame autocrino di IL-2 innesca un'espansione clonale esplosiva attivando mTOR e arrestando l'apoptosi via Bcl-2.
                    <br />• <strong>Treg naturali:</strong> esprimono costitutivamente alti livelli di CD25, sequestrando competitivamente l'IL-2 dal microambiente ed esercitando immunosoppressione metabolica.
                    <br />• <strong>Farmaci bersaglio:</strong> <strong>Rapamicina (Sirolimus)</strong> inibisce mTOR a valle di IL-2R; l'anticorpo monoclonale <strong>Basiliximab</strong> blocca CD25 prevenendo il rigetto acuto di trapianto renale.
                  </p>
                </div>

                {/* Checkpoint Inibitori CTLA-4 e PD-1 */}
                <div className="p-4 rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50/30 dark:bg-violet-950/20 space-y-2 text-xs sm:text-sm">
                  <div className="font-bold text-violet-900 dark:text-violet-200">
                    Checkpoint Inibitori (CTLA-4 vs PD-1):
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    • <strong>CTLA-4 (CD152):</strong> omologo strutturale di CD28 immagazzinato in vescicole intracellulari e mobilizzato in membrana all'attivazione. 
                    Lega CD80 e CD86 con un'<strong>affinità 20-50 volte superiore rispetto a CD28</strong>, spiazzando il segnale costimolatorio. 
                    Esercita inoltre <em>trans-endocitosi</em> (strappa fisicamente B7 dalla membrana dell'APC degradandolo). 
                    Agisce precocemente nei linfonodi. Il farmaco <strong>Abatacept / Belatacept (CTLA4-Ig)</strong> è un analogo solubile immunosoppressore.
                    <br />• <strong>PD-1 (CD279):</strong> espresso sui T attivati ed esausti. Possiede motivi intracellulari <strong>ITIM e ITSM</strong> che reclutano la tirosina-fosfatasi 
                    <strong>SHP-2</strong>, la quale defosforila direttamente le tirosine di ZAP-70 e CD28. I suoi ligandi (PD-L1 e PD-L2) sono espressi nei tessuti periferici e dai tumori per spegnere la risposta T effettrice.
                  </p>
                </div>
              </div>

              {/* Simulatore Incastonato Checkpoint Blockade */}
              <div className="pt-2">
                <InteractiveCheckpointBlockade />
              </div>
            </div>
          </div>

          {/* Ponte Fisiologico di Transizione */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-100 via-blue-50 to-slate-100 dark:from-slate-800 dark:via-blue-950/40 dark:to-slate-800 border border-blue-200/60 dark:border-blue-800/50 flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-blue-900 dark:text-blue-200 font-semibold block mb-0.5">
                Ponte Fisiologico di Transizione: Dalla sinapsi T alla cooperazione nel centro germinativo
              </strong>
              Il linfocita T CD4⁺ attivato acquisisce il fenotipo Tfh esprimendo CXCR5 e migra verso il confine del follicolo linfoide. 
              Qui incontra il linfocita B specifico, innescando la più straordinaria fabbrica somatica di mutazione ed evoluzione 
              ad altissima affinità dell'organismo: la <strong>Reazione del Centro Germinativo</strong>.
            </div>
          </div>
        </section>


        {/* =========================================================================
            SEZIONE 3.3: CENTRO GERMINATIVO, ENZIMA AID (SHM/CSR) & PLASMACELLULE
            ========================================================================= */}
        <section
          id="sec-3-centro-germinativo"
          aria-labelledby="heading-sec-3-centro-germinativo"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-mono uppercase tracking-wider font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Sezione 3.3 · Immunità Umorale T-Dipendente & Ipermutazione (Lezione 13)</span>
            </div>
            <h2 id="heading-sec-3-centro-germinativo" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Cooperazione T-B, Reazione del Centro Germinativo, Enzima AID (SHM e CSR) e Differenziazione Plasmacellulare
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Dall'incontro al confine T-B (linked recognition e codice CCR7/CXCR5) e la dinamica Zona Scura (CXCR4, centroblasti, BCL-6, AID) vs Zona Chiara (CXCR5, centrociti, FDC, Tfh), alle basi molecolari di SHM e CSR (sindromi da Iper-IgM HIGM1-5) e il bivio finale BCL-6 vs BLIMP-1/XBP-1 per la generazione di plasmacellule a lunga vita (LLPC).
            </p>
          </div>

          <div className="space-y-5 text-slate-800 dark:text-slate-200">
            {/* Sotto-blocco 1: Incontro al Confine T-B */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>1. L'Incontro al Confine T-B e il Riconoscimento Coniugato (Linked Recognition)</span>
              </h3>
              <p>
                Il linfocita B naive riconosce l'antigene nella sua conformazione nativa tramite il BCR all'interno del follicolo primario. 
                Dopo l'ingaggio, il linfocita B sottoregola parzialmente <strong>CXCR5</strong> e upregola <strong>CCR7</strong>, 
                migrando verso la paracorteccia ricca di CCL19/CCL21. Simmetricamente, il linfocita T CD4⁺ pre-attivato dalla DC sottoregola CCR7 
                e upregola CXCR5, migrando verso il follicolo ricco di CXCL13. Le due popolazioni convergono con precisione al <strong>confine T-B (T-B border)</strong>.
              </p>

              <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20 space-y-1.5 text-xs sm:text-sm">
                <strong className="text-blue-900 dark:text-blue-200 font-bold block">
                  Il Principio del Riconoscimento Coniugato (Linked Recognition):
                </strong>
                <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                  Il linfocita T helper può fornire aiuto al linfocita B solo se l'antigene riconosciuto dal TCR è fisicamente associato o coniugato 
                  alla macromolecola legata dal BCR. Il linfocita B endocita l'intero complesso antigene-BCR, lo digerisce negli endolisosomi MIIC 
                  ed espone frammenti peptidici lineari complessati a <strong>MHC di Classe II</strong>. 
                  Il linfocita T riconosce il peptide e risponde ingaggiando <strong>CD40L (CD154)</strong> con <strong>CD40</strong> sul B e secernendo 
                  citochine (IL-4, IL-21). Questo contatto genera una prima ondata extrafollicolare di plasmablasti a breve vita secernenti IgM a bassa affinità, 
                  mentre una quota migra nel follicolo fondando il <strong>Centro Germinativo</strong>.
                </p>
              </div>
            </div>

            {/* Sotto-blocco 2: Dinamica del Centro Germinativo (Zona Scura vs Chiara) */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>2. Microarchitettura del Centro Germinativo: Zona Scura vs Zona Chiara</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                {/* Zona Scura */}
                <div className="p-4 rounded-xl border border-slate-700 bg-slate-900 text-slate-200 space-y-2">
                  <div className="font-bold text-amber-400 flex items-center justify-between">
                    <span>Zona Scura (Dark Zone)</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-amber-300">
                      CXCR4_high · CXCL12
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
                    <li>• <strong>Cellule residenti:</strong> Centroblasti proliferanti a velocità vertiginosa (tempo di duplicazione mitotica di sole 6-8 ore).</li>
                    <li>• <strong>Master Gene BCL-6:</strong> reprime i check oncogenici p53 e p21, consentendo alla cellula di tollerare massicce rotture al DNA senza suicidarsi per apoptosi.</li>
                    <li>• <strong>Attività di AID:</strong> l'enzima <strong>AID (<em>Activation-Induced Cytidine Deaminase</em>)</strong> deamina la citosina in uracile (<strong>dC → dU</strong>) sul DNA a singolo filamento aperto dalla RNA Polimerasi II.</li>
                    <li>• <strong>Ipermutazione Somatica (SHM):</strong> la rimozione dell'uracile da parte di <strong>UNG</strong> (siti abasici AP) e il reclutamento del mismatch repair (<strong>MSH2/MSH6</strong> con la DNA polimerasi mutagenica η) introducono mutazioni puntiformi casuali a frequenza elevatissima (10⁻³ mutazioni per paia di basi per divisione, 1 milione di volte superiore al tasso genomico spontaneo) nei domini variabili V(D)J, specialmente nei <strong>CDR</strong>.</li>
                  </ul>
                </div>

                {/* Zona Chiara */}
                <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/40 dark:bg-blue-950/20 space-y-2">
                  <div className="font-bold text-blue-900 dark:text-blue-200 flex items-center justify-between">
                    <span>Zona Chiara (Light Zone)</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      CXCR5_high · CXCL13
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <li>• <strong>Cellule residenti:</strong> Centrociti non proliferanti, Cellule Dendritiche Follicolari (<strong>FDC</strong>) e Linfociti <strong>Tfh (CD4⁺ BCL-6⁺ CXCR5⁺ PD-1⁺ ICOS⁺)</strong>.</li>
                    <li>• <strong>Selezione Darwiniana di Affinità:</strong> le FDC trattengono immunocomplessi nativi intatti sulla membrana via CR1/CR2 e FcγR. I centrociti competono per strappare l'antigene ed esporlo su MHC-II ai Tfh.</li>
                    <li>• I centrociti che hanno acquisito mutazioni migliorative ad alta affinità ricevono segnali di salvezza via <strong>CD40L:CD40 e IL-21</strong> e possono riciclare nella zona scura per ulteriori cicli di mutazione o differenziare.</li>
                    <li>• I cloni con mutazioni svantaggiose o deleterie non ricevono il segnale Tfh ed entrano in <strong>apoptosi rapida</strong>, venendo prontamente eliminati dai <em>tingible body macrophages</em>.</li>
                  </ul>
                </div>
              </div>

              {/* Simulatori Incastonati: Centro Germinativo & CSR */}
              <div className="pt-2 space-y-4">
                <InteractiveGerminalCenterSimulator />
                <InteractiveClassSwitchSimulator />
              </div>
            </div>

            {/* Sotto-blocco 3: Switch Isotipico (CSR) e Sindromi da Iper-IgM */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Dna className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>3. La Ricombinazione per Scambio di Classe (CSR) e le Sindromi da Iper-IgM</span>
              </h3>
              <p>
                La <strong>Ricombinazione per Scambio di Classe (CSR)</strong> è un riarrangiamento genomico irreversibile che sostituisce 
                il gene costante della catena pesante (Cμ e Cδ) con un gene costante a valle (Cγ, Cε o Cα), 
                preservando intatta la specificità antigenica del dominio V(D)J ma conferendo all'anticorpo nuove funzioni effettrici 
                (fissazione del complemento, opsonizzazione via FcγR, immunità mucosale IgA o difesa antielmintica IgE).
              </p>

              <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20 space-y-2.5 text-xs sm:text-sm">
                <div>
                  <strong>Meccanismo Enzimatico:</strong> le citochine polarizzanti fornite dai Tfh e APC aprono i promotori germline a monte delle 
                  <strong>regioni di Switch (regioni S)</strong>, segmenti di DNA non codificante ricchi di sequenze ripetute G-C situate a monte di ciascun gene costante. 
                  L'enzima <strong>AID</strong> deamina massicciamente le citidine su entrambi i filamenti; l'uracile viene rimosso da <strong>UNG</strong> 
                  e i siti privi di base vengono tagliati dall'endonucleasi <strong>APE1</strong> generando rotture a doppio filamento (<strong>DSB</strong>). 
                  Il macchinario NHEJ unisce la regione S iniziale alla regione S bersaglio, escindendo covalentemente il DNA genomico interposto sotto forma di un anello circolare di scarto.
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 pt-1 text-xs">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <strong className="text-blue-600 dark:text-blue-400 block font-bold mb-0.5">HIGM1 (X-Linked)</strong>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                      Mutazione di <strong>CD40L (CD154)</strong> sui T. Blocco totale di CSR e SHM; grave suscettibilità a infezioni opportunistiche 
                      (<em>Pneumocystis jirovecii</em>) per mancata attivazione macrofagica CD40-dipendente.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <strong className="text-indigo-600 dark:text-indigo-400 block font-bold mb-0.5">HIGM2 (Autosomica Recessiva)</strong>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                      Mutazione del gene <strong>AICDA (AID)</strong>. Blocco intrinseco B di CSR e SHM con centri germinativi iperplastici giganti e linfoadenomegalia; 
                      i macrofagi funzionano regolarmente (niente <em>Pneumocystis</em>).
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <strong className="text-violet-600 dark:text-violet-400 block font-bold mb-0.5">HIGM3 (Autosomica Recessiva)</strong>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                      Mutazione del recettore <strong>CD40</strong> espresso sui linfociti B e APC. Fenotipo clinico severo sovrapponibile a HIGM1.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <strong className="text-rose-600 dark:text-rose-400 block font-bold mb-0.5">HIGM5 (Autosomica Recessiva)</strong>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                      Mutazione di <strong>UNG (Uracil-DNA Glicosilasi)</strong>. AID deamina la citidina ma l'uracile non viene rimosso: difetto selettivo di CSR 
                      con SHM qualitativamente sbilanciata verso transizioni.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sotto-blocco 4: Differenziazione Terminale (BCL-6 vs BLIMP-1) e Nicchie LLPC */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>4. Il Circuito Mutualmente Antagonista: BCL-6 vs BLIMP-1 e le Plasmacellule a Lunga Vita</span>
              </h3>
              <p>
                Il destino terminale del centrocito ad alta affinità selezionato nella zona chiara è governato da un interruttore trascrizionale binario:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-1.5">
                  <div className="font-bold text-slate-900 dark:text-slate-100">
                    Linfocita B della Memoria (Memory B Cell)
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                    Mantiene l'espressione di <strong>PAX5 e BCL-6</strong> (spento BLIMP-1). Conserva il BCR di membrana ad altissima affinità già isotipicamente commutato 
                    (IgG, IgA, IgE). Esprime CD27 e recircola continuamente tra organi linfoidi secondari e sangue periferico per decenni, 
                    pronto a differenziare in modo esplosivo a plasmacellula entro 24-48 ore in caso di riesposizione all'antigene.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/40 dark:bg-blue-950/20 space-y-1.5">
                  <div className="font-bold text-blue-900 dark:text-blue-200">
                    Plasmacellula a Lunga Vita (LLPC - Long-Lived Plasma Cell)
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    Sotto segnali forti di CD40L e IL-21, viene indotto il repressore trascrizionale <strong>BLIMP-1 (PRDM1)</strong> insieme a <strong>IRF4</strong> e <strong>XBP-1</strong>. 
                    BLIMP-1 silenzia permanentemente BCL-6 e PAX5, spegnendo il programma del centro germinativo e arrestando il ciclo cellulare. 
                    La cellula perde il BCR di membrana e trasforma il citoplasma in una macchina proteica specializzata nella secrezione massiva di oltre 
                    <strong>2.000 molecole anticorpali al secondo</strong>.
                    <br />• <strong>Homing Midollare e Nicchie di Sopravvivenza:</strong> le LLPC upregolano <strong>CXCR4</strong> e migrano attraverso il sangue 
                    nel <strong>midollo osseo</strong>, dove alloggiano nelle nicchie stromali venulari. Qui sopravvivono per decenni (anche per l'intera vita dell'individuo) 
                    grazie a segnali trofici forniti da <strong>IL-6</strong> e dal fattore <strong>APRIL</strong> (che lega il recettore di sopravvivenza <strong>BCMA</strong> espresso sulle plasmacellule).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ponte Fisiologico di Transizione */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-100 via-blue-50 to-slate-100 dark:from-slate-800 dark:via-blue-950/40 dark:to-slate-800 border border-blue-200/60 dark:border-blue-800/50 flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-blue-900 dark:text-blue-200 font-semibold block mb-0.5">
                Ponte Fisiologico di Transizione: Risposte T-indipendenti e spegnimento anticorpale
              </strong>
              Non tutti gli invasori microbici attendono i 5-7 giorni necessari all'assemblaggio del centro germinativo. 
              Come fa l'organismo a proteggersi istantaneamente contro i batteri capsulati del sangue, 
              e quali interruttori molecolari spengono la produzione di anticorpi una volta debellata l'infezione? 
              L'analisi prosegue con gli <strong>antigeni TI</strong>, le sottopopolazioni <strong>B-1/MZ</strong> e i recettori inibitori <strong>ITIM</strong>.
            </div>
          </div>
        </section>


        {/* =========================================================================
            SEZIONE 3.4: ANTIGENI TI, VACCINI CONIUGATI, B-1/MZ & FRENI ITIM
            ========================================================================= */}
        <section
          id="sec-3-ti-b1-freni"
          aria-labelledby="heading-sec-3-ti-b1-freni"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-mono uppercase tracking-wider font-bold">
              <Layers className="w-4 h-4" />
              <span>Sezione 3.4 · Risposte Rapide & Regolazione Inibitoria B (Lezione 14)</span>
            </div>
            <h2 id="heading-sec-3-ti-b1-freni" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Antigeni Timo-Indipendenti (TI-1 e TI-2), Vaccini Coniugati, Sottopopolazioni B-1 / Zona Marginale e Freni Inibitori ITIM
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Attivazione mitogena policlonale TI-1 (LPS/TLR4) vs cross-linking polivalente TI-2 (polisaccaridi capsulari); ingegneria razionale dei vaccini glicoconiugati nei lattanti; ontogenesi e repertorio delle cellule B-1 (cavità sierose, IgM naturali) e B della Zona Marginale (Notch2); circuiti inibitori a feedback FcγRIIB (SHIP-1/PIP2) e CD22 (SHP-1).
            </p>
          </div>

          <div className="space-y-5 text-slate-800 dark:text-slate-200">
            {/* Sotto-blocco 1: TI-1 vs TI-2 e Vaccini Coniugati */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Syringe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>1. Dicotomia Molecolare: Antigeni TI-1 vs TI-2 e la Razionale dei Vaccini Glicoconiugati</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20 space-y-2">
                  <div className="font-bold text-blue-900 dark:text-blue-200">
                    Antigeni TI-1 (Attivatori Mitogeni Policlonali)
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    • <strong>Esempio prototipo:</strong> Lipopolisaccaride (LPS) dei batteri Gram-negativi ad alte dosi.
                    <br />• <strong>Meccanismo:</strong> possiedono un'attività mitogena intrinseca indipendente dal TCR/Tfh. Si legano simultaneamente al BCR antigene-specifico 
                    e al recettore dell'immunità innata <strong>TLR4 / MD-2</strong> espresso dal linfocita B. 
                    Ad alte concentrazioni innescano proliferazione policlonale aspecifica; a basse concentrazioni attivano selettivamente i soli cloni B specifici per l'antigene. 
                    Attivano sia linfociti B maturi che immaturi.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-2">
                  <div className="font-bold text-indigo-900 dark:text-indigo-200">
                    Antigeni TI-2 (Polivalenti Altamente Ripetitivi)
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    • <strong>Esempi prototipo:</strong> Polisaccaridi capsulari batterici (<em>Streptococcus pneumoniae, Neisseria meningitidis, Haemophilus influenzae</em> tipo b) e flagellina polimerica.
                    <br />• <strong>Meccanismo:</strong> molecole prive di attività intrinseca di TLR, ma costituite da subunità identiche ripetute decine o centinaia di volte. 
                    Operano un <strong>cross-linking massivo e prolungato di decine di recettori BCR</strong> sulla membrana cellulare, superando la soglia di attivazione 
                    anche in assenza di T helper, amplificate dalla fissazione di C3d su CD21 (CR2) e da citochine BAFF/APRIL.
                    <br />• <strong>Vincolo ontogenetico:</strong> richiedono cellule B mature; nei lattanti sotto i 2 anni la milza non ha ancora sviluppato la zona marginale, 
                    rendendo i bambini totalmente indifesi e anergici verso gli antigeni TI-2.
                  </p>
                </div>
              </div>

              {/* Box Vaccini Glicoconiugati */}
              <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-bold text-xs uppercase tracking-wider text-emerald-900 dark:text-emerald-200">
                    Rivoluzione Biomedica: La Razionale Molecolare dei Vaccini Coniugati
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  I vaccini a solo polisaccaride purificato (es. il vecchio vaccino pneumococcico PPV23) non inducono memoria né switch isotipico e risultano inefficaci nei bambini &lt; 2 anni. 
                  Coniugando chimicamente e covalentemente il polisaccaride capsulare (aptene) a una proteina carrier immunogena (es. <strong>tossoide tetanico</strong> o tossina difterica mutata <strong>CRM197</strong>):
                  <br />1. Il BCR del linfocita B infantile riconosce lo zucchero del polisaccaride capsulare ed endocita l'intero complesso coniugato;
                  <br />2. Negli endolisosomi il linfocita B digerisce la proteina carrier ed espone i peptidi del carrier legati a <strong>MHC di Classe II</strong>;
                  <br />3. Un linfocita Tfh specifico per il carrier proteico riconosce il complesso peptide-MHC, rilascia <strong>CD40L e IL-21</strong> e fornisce l'aiuto cooperativo completo;
                  <br />4. Il linfocita B specifico per lo zucchero è così autorizzato a formare centri germinativi, andare incontro a switch isotipico a <strong>IgG ad altissima affinità</strong> 
                  e generare <strong>cellule B della memoria</strong> durature anche nel lattante (es. vaccini coniugati esavalente, PCV13/15/20 e MenACWY).
                </p>
              </div>
            </div>

            {/* Sotto-blocco 2: Triforcazione dei Linfociti B (B-1, MZ B, Follicolari B-2) */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>2. Tassonomia delle Sottopopolazioni B: Linfociti B-1, Zona Marginale (MZ B) e Follicolari (B-2)</span>
              </h3>

              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th className="p-3 font-bold">Caratteristica Biologica</th>
                      <th className="p-3 font-bold text-amber-700 dark:text-amber-400">Linfociti B-1 (B-1a e B-1b)</th>
                      <th className="p-3 font-bold text-blue-700 dark:text-blue-300">Linfociti B della Zona Marginale (MZ)</th>
                      <th className="p-3 font-bold text-indigo-700 dark:text-indigo-300">Linfociti B Follicolari (B-2)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300 text-xs">
                    <tr>
                      <td className="p-2.5 font-semibold bg-slate-50/50 dark:bg-slate-850">Origine Ontogenetica</td>
                      <td className="p-2.5">Fegato fetale (sviluppo embrionale primitivo)</td>
                      <td className="p-2.5">Midollo osseo post-natale (dipendenti da Notch2)</td>
                      <td className="p-2.5">Midollo osseo post-natale continuo</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold bg-slate-50/50 dark:bg-slate-850">Sede Anatomica Principale</td>
                      <td className="p-2.5">Cavità peritoneale e pleurica (sierose)</td>
                      <td className="p-2.5">Zona marginale della milza (polpa bianca periferica)</td>
                      <td className="p-2.5">Follicoli di linfonodi, milza, MALT (recircolanti)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold bg-slate-50/50 dark:bg-slate-850">Marcatori di Superficie</td>
                      <td className="p-2.5">CD5⁺ (B-1a) o CD5⁻ (B-1b), IgM<sup>high</sup>, IgD<sup>low</sup>, CD43⁺, CD23⁻</td>
                      <td className="p-2.5">CD21/CR2<sup>high</sup>, CD1d<sup>high</sup>, IgM<sup>high</sup>, IgD<sup>low</sup>, CD23⁻</td>
                      <td className="p-2.5">CD21<sup>int</sup>, CD23⁺, IgM<sup>low</sup>, IgD<sup>high</sup></td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold bg-slate-50/50 dark:bg-slate-850">Diversità Recettoriale</td>
                      <td className="p-2.5">Limitata/oligoclonale (riarrangiato prima dell'espressione di TdT, privo di nucleotidi N)</td>
                      <td className="p-2.5">Parzialmente ristretta contro polisaccaridi e glicani</td>
                      <td className="p-2.5">Estremamente polimorfa e ipermutabile (alta diversità giunzionale N)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold bg-slate-50/50 dark:bg-slate-850">Prodotto Anticorpale</td>
                      <td className="p-2.5"><strong>Anticorpi Naturali IgM</strong> (polispecifici, anti-fosforilcolina, isoagglutinine anti-AB0)</td>
                      <td className="p-2.5">IgM e IgG rapide contro polisaccaridi capsulari batterici</td>
                      <td className="p-2.5">IgG, IgA, IgE ad altissima affinità post-centro germinativo</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold bg-slate-50/50 dark:bg-slate-850">Rinnovamento del Pool</td>
                      <td className="p-2.5">Autorinnovamento periferico per divisione mitotica</td>
                      <td className="p-2.5">Rinnovamento da precursori transizionali midollari T2</td>
                      <td className="p-2.5">Continuo flusso di nuovi linfociti dal midollo osseo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sotto-blocco 3: I Freni Inibitori ITIM (FcγRIIB e CD22) */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Lock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>3. I Circuiti Inibitori a Feedback del Linfocita B: FcγRIIB (SHIP-1) e CD22 (SHP-1)</span>
              </h3>
              <p>
                Per impedire che la proliferazione e la produzione di anticorpi procedano all'infinito scatenando autoimmunità sistemica, 
                la cellula B possiede due recettori di superficie dotati di motivi inibitori <strong>ITIM (<em>Immunoreceptor Tyrosine-based Inhibitory Motif</em>)</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                {/* FcγRIIB */}
                <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/30 dark:bg-rose-950/20 space-y-2">
                  <div className="font-bold text-rose-900 dark:text-rose-200 flex items-center justify-between">
                    <span>FcγRIIB (CD32B) & Inositolo-Fosfatasi SHIP-1</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-200">
                      Feedback Anticorpale
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    È l'unico recettore Fc dotato di motivo <strong>ITIM</strong> citoplasmatico.
                    <br />• Quando la concentrazione di IgG specifiche nel siero è sufficientemente elevata, gli <strong>immunocomplessi antigene-IgG</strong> 
                    legano contemporaneamente il BCR (col paratope) e l'FcγRIIB (con la porzione Fc dell'anticorpo già secreto).
                    <br />• Questa co-aggregazione induce la chinasi Lyn a fosforilare la tirosina dell'ITIM. L'ITIM fosforilato recluta specificamente 
                    l'inositolo-5-fosfatasi <strong>SHIP-1</strong> tramite domini SH2.
                    <br />• <strong>Azione di SHIP-1:</strong> de-fosforila il fosfatidilinositolo-3,4,5-trisfosfato (<strong>PIP₃ → PIP₂</strong>) sulla membrana plasmatica. 
                    Privati dei loro siti di aggancio lipidico, <strong>Btk e PLC-γ2 si staccano fisicamente dalla membrana</strong>, arrestando istantaneamente 
                    l'efflusso di calcio e spegnendo la trascrizione di nuove immunoglobuline. Polimorfismi loss-of-function di FcγRIIB sono fortemente associati al <strong>Lupus Eritematoso Sistemico (LES)</strong>.
                  </p>
                </div>

                {/* CD22 */}
                <div className="p-4 rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50/30 dark:bg-violet-950/20 space-y-2">
                  <div className="font-bold text-violet-900 dark:text-violet-200 flex items-center justify-between">
                    <span>CD22 (Siglec-2) & Tirosina-Fosfatasi SHP-1</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-200 dark:bg-violet-900 text-violet-800 dark:text-violet-200">
                      Sensore di Acidi Sialici
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    Lectina transmembrana della famiglia <strong>Siglec</strong> che possiede 3 motivi ITIM intracellulari.
                    <br />• Riconosce con il dominio extracellulare residui di <strong>acido sialico con legame α2,6</strong> esposti sulle membrane delle cellule dell'ospite.
                    <br />• Quando il linfocita B incontra glicoproteine self ricche di acido sialico, CD22 si attiva e fosforila i propri ITIM, reclutando la 
                    <strong>tirosina-fosfatasi SHP-1</strong>.
                    <br />• <strong>Azione di SHP-1:</strong> defosforila direttamente le tirosine dei motivi ITAM di CD79a e CD79b e le tirosine attivatrici di <strong>Syk e BLNK</strong>, 
                    elevando drasticamente la soglia di attivazione del BCR e prevenendo l'innesco accidentale contro antigeni self debolmente cross-reattivi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ponte Fisiologico di Transizione */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-100 via-blue-50 to-slate-100 dark:from-slate-800 dark:via-blue-950/40 dark:to-slate-800 border border-blue-200/60 dark:border-blue-800/50 flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-blue-900 dark:text-blue-200 font-semibold block mb-0.5">
                Ponte Fisiologico di Transizione: Dalla regolazione B all'orchestra della polarizzazione T
              </strong>
              Se il linfocita B è il braccio esecutore della produzione anticorpale, 
              è il linfocita T CD4⁺ il vero direttore d'orchestra dell'immunità adattativa. 
              In base alla natura del patogeno incontrato, il T helper deve polarizzarsi verso uno specifico lignaggio effettrice: 
              <strong>Th1, Th2, Th17, Tfh o Treg</strong>.
            </div>
          </div>
        </section>


        {/* =========================================================================
            SEZIONE 3.5: POLARIZZAZIONE E PLASTICITÀ DEI LINFOCITI T HELPER (CD4+)
            ========================================================================= */}
        <section
          id="sec-3-polarizzazione-th"
          aria-labelledby="heading-sec-3-polarizzazione-th"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-mono uppercase tracking-wider font-bold">
              <Compass className="w-4 h-4" />
              <span>Sezione 3.5 · Differenziamento CD4⁺ & Nobel 2025 (Lezione 19)</span>
            </div>
            <h2 id="heading-sec-3-polarizzazione-th" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Polarizzazione e Plasticità delle Sottopopolazioni T Helper CD4⁺ (Th1, Th2, Th17, Tfh, Treg)
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Il paradigma del Segnale 3: citochine induttrici, attivatori STAT, fattori di trascrizione master (T-bet, GATA-3, RORγt, BCL-6, FOXP3), citochine effettrici signature e inibizione crociata reciproca; e la scoperta delle cellule Treg e del gene FOXP3 premiata con il Premio Nobel per la Medicina 2025.
            </p>
          </div>

          <div className="space-y-5 text-slate-800 dark:text-slate-200">
            <p>
              Dopo l'ingaggio del TCR (Segnale 1) e la costimolazione di CD28 (Segnale 2), il destino effettrice del linfocita T CD4⁺ naïve 
              è determinato dal microambiente citochinico circostante rilasciato dalle cellule dell'immunità innata (<strong>Segnale 3</strong>). 
              Ciascuna polarizzazione attiva uno specifico membro della famiglia <strong>STAT</strong>, il quale accende un fattore di trascrizione maestro 
              (<strong>Master Regulator</strong>) che guida l'espressione di citochine signature e recettori per chemochine di homing, reprimendo contemporaneamente 
              i programmi trascrizionali alternativi (<strong>Inibizione Crociata Reciproca</strong>).
            </p>

            {/* Sotto-blocco 1: I 5 Lignaggi Effettori */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Dna className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>1. Atlante Molecolare delle Sottopopolazioni T Helper</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
                {/* Th1 */}
                <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/30 dark:bg-rose-950/20 space-y-2">
                  <div className="font-bold text-rose-900 dark:text-rose-200 flex items-center justify-between">
                    <span>Linfociti Th1</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-200">CXCR3, CCR5</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    • <strong>Induzione:</strong> <strong>IL-12</strong> (prodotta da DC e macrofagi) via <strong>STAT4</strong> e <strong>IFN-γ</strong> (da NK) via <strong>STAT1</strong>.
                    <br />• <strong>Master Regulator:</strong> <strong>T-bet</strong> (T-box transcription factor).
                    <br />• <strong>Citochine Prodotte:</strong> <strong>IFN-γ</strong>, TNF-α, IL-2.
                    <br />• <strong>Funzioni Effettrici:</strong> attivazione classica <strong>M1 dei macrofagi</strong> (induzione di iNOS con sintesi di NO e fusione fagolisosomiale), switch a IgG opsonizzanti (IgG1, IgG3). Difesa contro patogeni intracellulari (<em>Mycobacterium tuberculosis, Listeria, Leishmania</em>).
                  </p>
                </div>

                {/* Th2 */}
                <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50/30 dark:bg-amber-950/20 space-y-2">
                  <div className="font-bold text-amber-900 dark:text-amber-200 flex items-center justify-between">
                    <span>Linfociti Th2</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200">CCR4, CRTh2</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    • <strong>Induzione:</strong> <strong>IL-4</strong> (da mastociti, basofili, ILC2) via <strong>STAT6</strong> e allarmine epiteliali (<strong>TSLP, IL-33, IL-25</strong>).
                    <br />• <strong>Master Regulator:</strong> <strong>GATA-3</strong>.
                    <br />• <strong>Citochine Prodotte:</strong> <strong>IL-4</strong> (switch a IgE), <strong>IL-5</strong> (sopravvivenza e chemiotassi eosinofili), <strong>IL-13</strong> (ipersecrezione di muco caliciforme e peristalsi <em>"weep and sweep"</em>).
                    <br />• <strong>Funzioni Effettrici:</strong> attivazione alternativa <strong>M2 dei macrofagi</strong> (riparazione tissutale e fibrosi via Arginasi-1). Difesa contro elminti parassiti e patogenesi dell'asma/atopia.
                  </p>
                </div>

                {/* Th17 */}
                <div className="p-4 rounded-xl border border-orange-200 dark:border-orange-900 bg-orange-50/30 dark:bg-orange-950/20 space-y-2">
                  <div className="font-bold text-orange-900 dark:text-orange-200 flex items-center justify-between">
                    <span>Linfociti Th17</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-200 dark:bg-orange-900 text-orange-800 dark:text-orange-200">CCR6 (CCL20)</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    • <strong>Induzione:</strong> <strong>TGF-β + IL-6 o IL-21</strong> via <strong>STAT3</strong>, amplificati da IL-1β e stabilizzati da <strong>IL-23</strong>.
                    <br />• <strong>Master Regulator:</strong> <strong>RORγt</strong> (RAR-related orphan receptor gamma t).
                    <br />• <strong>Citochine Prodotte:</strong> <strong>IL-17A, IL-17F</strong> (stimolano cellule stromali ed epiteliali a rilasciare G-CSF e CXCL8 reclutando fiumi di neutrofili) e <strong>IL-22</strong> (produzione di β-defensine e rigenerazione epiteliale).
                    <br />• <strong>Clinica:</strong> <strong>Sindrome di Giobbe (Iper-IgE AD)</strong> da mutazioni STAT3: deficit Th17, ascessi freddi cutanei e candidosi mucocutanea cronica.
                  </p>
                </div>

                {/* Tfh */}
                <div className="p-4 rounded-xl border border-purple-200 dark:border-purple-900 bg-purple-50/30 dark:bg-purple-950/20 space-y-2">
                  <div className="font-bold text-purple-900 dark:text-purple-200 flex items-center justify-between">
                    <span>Linfociti Tfh (Folliculari Helper)</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-200">CXCR5, ICOS, PD-1</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    • <strong>Induzione:</strong> <strong>IL-6 e IL-21</strong> via <strong>STAT3</strong>, con costimolazione sostenuta via ICOS-ICOSL.
                    <br />• <strong>Master Regulator:</strong> <strong>BCL-6</strong> (che reprime T-bet, GATA-3 e RORγt).
                    <br />• <strong>Citochina Signature:</strong> <strong>IL-21</strong> associata a espressione sostenuta di <strong>CD40L</strong>.
                    <br />• <strong>Funzioni Effettrici:</strong> migrano nei centri germinativi guidati da CXCL13 per guidare la selezione di affinità dei centrociti e la formazione di plasmacellule.
                  </p>
                </div>

                {/* Treg */}
                <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/30 dark:bg-emerald-950/20 space-y-2 col-span-1 md:col-span-2">
                  <div className="font-bold text-emerald-900 dark:text-emerald-200 flex items-center justify-between">
                    <span>Linfociti T Regolatori (Treg CD4⁺ CD25⁺ FOXP3⁺ CD127⁻/low)</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-200 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">CCR4, CCR8, CTLA-4</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    • <strong>Induzione:</strong> <strong>TGF-β + IL-2</strong> (tramite <strong>STAT5 e SMAD3</strong>) e Acido Retinoico.
                    <br />• <strong>Master Regulator:</strong> <strong>FOXP3</strong> (Forkhead box P3, sul cromosoma Xp11.23).
                    <br />• <strong>Meccanismi di Soppressione Attiva:</strong>
                    <br />1. <em>Sequestro Metabolico di IL-2:</em> espressione costitutiva del recettore trimerico ad altissima affinità CD25 (αβγ), privando le cellule T convenzionali del fattore di crescita;
                    <br />2. <em>Citochine Immunosoppressive:</em> secrezione massiva di <strong>IL-10, TGF-β e IL-35</strong>;
                    <br />3. <em>Consumo di ATP e Generazione di Adenosina:</em> gli ectoenzimi di membrana <strong>CD39 e CD73</strong> idrolizzano ATP/ADP extracellulare infiammatorio in <strong>Adenosina immunosoppressiva</strong> (che lega i recettori A2AR sulle cellule T attivate bloccandole);
                    <br />4. <em>Inattivazione delle APC:</em> espressione costitutiva di <strong>CTLA-4</strong> ad alta affinità che strappa e degrada CD80/CD86 sulle cellule dendritiche.
                  </p>
                </div>
              </div>

              {/* Simulatore Incastonato Polarizzazione Th */}
              <div className="pt-2">
                <InteractivePolarizationCompass />
              </div>

              {/* Box Premio Nobel per la Medicina 2025 */}
              <div className="p-4 rounded-xl border border-amber-300 dark:border-amber-800/80 bg-amber-50/60 dark:bg-amber-950/30 space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <span className="font-bold text-xs uppercase tracking-wider text-amber-950 dark:text-amber-200">
                    Premio Nobel per la Fisiologia o la Medicina 2025: La Scoperta di FOXP3 e delle Cellule Treg
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                  L'Assemblea dei Nobel del Karolinska Institutet ha assegnato il <strong>Premio Nobel per la Medicina 2025</strong> congiuntamente a 
                  <strong>Shimon Sakaguchi</strong> (Osaka University), <strong>Mary Brunkow</strong> e <strong>Fred Ramsdell</strong> (Celltech/Sonoma Biotherapeutics) 
                  per la loro epocale scoperta dei <em>«Linfociti T regolatori e del gene FOXP3 come guardiani dell'autotolleranza immunitaria»</em>.
                  <br />• <strong>La Ricerca Storica:</strong> Sakaguchi nel 1995 identificò per la prima volta una sottopopolazione minoritaria di linfociti CD4⁺ 
                  esprimenti constitutivamente la catena α di IL-2R (CD25), la cui deplezione nei topi scatenava una devastante autoimmunità multiorgano. 
                  Nel 2001, Mary Brunkow e Fred Ramsdell identificarono la mutazione genetica spontanea responsabile del fenotipo letale del topo <em>scurfy</em>, 
                  clonando il gene <strong>FOXP3</strong> e dimostrando che le mutazioni nel gene ortologo umano provocano la <strong>sindrome IPEX</strong> 
                  (<em>Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked syndrome</em>: diabete neonatale autoimmune, enteropatia cronica intrattabile ed eczema grave). 
                  Nel 2003 Sakaguchi dimostrò definitivamente che FOXP3 è il master regulator necessario e sufficiente per impartire il fenotipo soppressorio ai Treg. 
                  Questa scoperta ha aperto la strada alle moderne terapie cellulari con Treg ingegnerizzati CAR-Treg per la prevenzione del rigetto nei trapianti d'organo e la cura delle patologie autoimmuni.
                </p>
              </div>
            </div>
          </div>

          {/* Ponte Fisiologico di Transizione */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-100 via-blue-50 to-slate-100 dark:from-slate-800 dark:via-blue-950/40 dark:to-slate-800 border border-blue-200/60 dark:border-blue-800/50 flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-blue-900 dark:text-blue-200 font-semibold block mb-0.5">
                Ponte Fisiologico di Transizione: Dalla cooperazione helper all'esecuzione letale citotossica
              </strong>
              Mentre i Th polarizzati e gli anticorpi neutralizzano i patogeni nei fluidi extracellulari, 
              quando i virus infettano le cellule o si sviluppano mutazioni neoplastiche intracellulari interviene 
              il braccio esecutore più letale dell'immunità cellulare: i <strong>Linfociti T Citotossici CD8⁺ (CTL)</strong>.
            </div>
          </div>
        </section>


        {/* =========================================================================
            SEZIONE 3.6: LINFOCITI T CITOTOSSICI CD8+ (CTL), SINAPSI LITICA & FHL
            ========================================================================= */}
        <section
          id="sec-3-ctl-cd8"
          aria-labelledby="heading-sec-3-ctl-cd8"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-mono uppercase tracking-wider font-bold">
              <Target className="w-4 h-4" />
              <span>Sezione 3.6 · Citotossicità Cellulare Esecutrice & Fisiopatologia (Lezione 20)</span>
            </div>
            <h2 id="heading-sec-3-ctl-cd8" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Linfociti T Citotossici CD8⁺ (CTL): Sinapsi Litica, Perforina/Granzimi, Fas/FasL e Linfoistiocitosi Emofagocitica (FHL)
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Il priming con licensing della DC via CD40L e i master factor T-bet/Eomes; l'architettura della sinapsi litica con polarizzazione dell'MTOC e traffico secretorio Rab27a/Munc13-4/Sintassina-11; le due vie di killing (Perforina/Granzima B vs Fas/FasL/DISC) e la fisiopatologia della Linfoistiocitosi Emofagocitica Familiare (FHL/HLH) e sindrome di Griscelli.
            </p>
          </div>

          <div className="space-y-5 text-slate-800 dark:text-slate-200">
            {/* Sotto-blocco 1: Priming e Licensing della DC */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>1. Il Priming dei Linfociti T CD8⁺ e il Licensing della Cellula Dendritica</span>
              </h3>
              <p>
                Il linfocita T CD8⁺ naïve ha una soglia di attivazione notevolmente più severa rispetto al CD4⁺, 
                per prevenire danni tissutali irreversibili derivanti dalla sua letale attività citotossica. 
                L'innesco ottimale richiede il <strong>"Licensing" della Cellula Dendritica da parte del Linfocita Th1</strong>:
              </p>

              <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20 space-y-2 text-xs sm:text-sm">
                <div className="font-bold text-blue-900 dark:text-blue-200">
                  Meccanismo Cooperativo Th1 - DC - CD8⁺:
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                  1. Il linfocita Th1 riconosce il peptide su MHC-II ed esprime <strong>CD40L (CD154)</strong>, il quale trimerizza <strong>CD40</strong> sulla DC;
                  <br />2. Il segnale CD40 iperattiva ("licenzia") la cellula dendritica, che upregola drasticamente <strong>CD80 e CD86</strong>, aumenta le molecole MHC-I in membrana e secerne elevate quantità di <strong>IL-12 e IL-15</strong>;
                  <br />3. Il linfocita T CD8⁺ riceve contemporaneamente il Segnale 1 su MHC-I, un vigoroso Segnale 2 da CD28 e citochine trofiche (IL-2 autocrina e paracrina da Th1, IL-12);
                  <br />4. I master regulator trascrizionali <strong>T-bet e Eomesodermin (Eomes)</strong> accendono il programma litico: sintesi di <strong>Perforina, Granzimi, Serglicina, Granulisina e FasL</strong>, trasformando il precursore in <strong>Linfocita Effettore Citotossico (CTL)</strong>.
                </p>
              </div>
            </div>

            {/* Sotto-blocco 2: La Sinapsi Litica e la Degranulazione Direzionale */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>2. Architettura della Sinapsi Litica, Polarizzazione dell'MTOC e Traffico Vescicolare</span>
              </h3>
              <p>
                Quando il CTL riconosce la cellula bersaglio infettata da virus o tumorale (interazione TCR con MHC-I:peptide), 
                si forma una giunzione adesiva ermetica mediata dall'integrina LFA-1 legata a ICAM-1. 
                Entro pochi minuti si innesca una serie di eventi biomeccanici concertati:
              </p>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-2 text-xs sm:text-sm">
                <ol className="list-decimal list-inside space-y-1.5 text-slate-700 dark:text-slate-300 text-xs">
                  <li><strong>Riorientamento dell'MTOC:</strong> il centro organizzatore dei microtubuli (<strong>MTOC / Centrosoma</strong>) e l'apparato di Golgi polarizzano fisicamente verso la membrana a contatto con la cellula bersaglio.</li>
                  <li><strong>Trasporto Lungo i Microtubuli:</strong> i granuli litici citotossici (lisosomi secretori acidificati) scorrono lungo i binari di tubulina verso la sinapsi mediante motori proteici di <strong>Chinesina</strong>.</li>
                  <li><strong>Docking, Priming e Fusione Vescicolare (SNARE Complex):</strong>
                    <br />• La piccola GTPasi <strong>Rab27a</strong> guida l'attracco (docking) del granulo alla membrana plasmatica;
                    <br />• La proteina <strong>Munc13-4</strong> apre la conformazione della sintassina permettendo il priming;
                    <br />• Il complesso SNARE guidato dalla t-SNARE <strong>Sintassina-11 (STX11)</strong> e da <strong>Munc18-2</strong> media la fusione lipidica finale della vescicola, rilasciando il carico tossico esclusivamente nello spazio confinato della sinapsi, salvaguardando le cellule sane adiacenti.
                  </li>
                  <li><strong>Serial Killing:</strong> terminato il rilascio, il CTL si stacca prontamente dalla cellula morente e migra verso un secondo bersaglio (ciascun CTL può uccidere in sequenza da 5 a oltre 10 cellule bersaglio).</li>
                </ol>
              </div>
            </div>

            {/* Sotto-blocco 3: Le Due Vie di Killing e la FHL */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Flame className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>3. Le Due Vie Molecolari di Citotossicità e la Linfoistiocitosi Emofagocitica (FHL)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                {/* Via Perforina/Granzimi */}
                <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/30 dark:bg-rose-950/20 space-y-2">
                  <div className="font-bold text-rose-900 dark:text-rose-200">
                    1. Via Esocitotica: Perforina, Granzimi e Granulisina
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    All'interno del granulo, a pH acido (~5.5), la proteoglicano solfato <strong>Serglicina</strong> mantiene inattive le proteasi legandole in un reticolo elettrostatico. 
                    Nel cleft sinaptico a pH neutro e in presenza di Ca²⁺:
                    <br />• <strong>Perforina (PRF1):</strong> omologa a C9 del complemento, polimerizza nella membrana del bersaglio formando pori cilindrici da 13-20 nm.
                    <br />• <strong>Granzima B:</strong> serina-proteasi che penetra nel citoplasma bersaglio e attua una duplice via letale: 
                    1) Taglia e attiva direttamente la <strong>Procaspasi-3</strong>; 
                    2) Cliva la proteina pro-apoptotica <strong>Bid</strong> generando <strong>tBid</strong>, che trasloca sul mitocondrio attivando Bax e Bak con massivo rilascio di <strong>Citocromo c</strong> e formazione dell'<strong>Apoptosoma</strong> (Apaf-1 + Caspasi-9).
                    <br />• <strong>Granzima A:</strong> attiva la via apoptotica caspasi-indipendente clivando il complesso SET e attivando la DNasi NM23-H1 che genera rotture al DNA.
                    <br />• <strong>Granulisina:</strong> peptide con attività microbicida diretta contro <em>Mycobacterium tuberculosis</em>.
                  </p>
                </div>

                {/* Via Fas/FasL */}
                <div className="p-4 rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50/30 dark:bg-violet-950/20 space-y-2">
                  <div className="font-bold text-violet-900 dark:text-violet-200">
                    2. Via Recettoriale Estrinseca: FasL (CD95L) → Fas (CD95)
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    Il CTL attivato esprime in membrana il ligando trimerico <strong>FasL (CD178)</strong>, che trimerizza il recettore di morte <strong>Fas (CD95)</strong> sulla superficie della cellula bersaglio.
                    <br />• Il Death Domain (DD) citoplasmatico di Fas recluta la proteina adattatrice <strong>FADD</strong>, formando il complesso <strong>DISC (<em>Death-Inducing Signaling Complex</em>)</strong>.
                    <br />• DISC recluta la <strong>Pro-caspasi-8 (o Pro-caspasi-10)</strong> via domini DED, attivandola per autoclivaggio. 
                    La caspasi-8 attiva cliva direttamente la caspasi-3 effettrice provocando la frammentazione del nucleo e apoptosi.
                    <br />• <strong>Significato Omeostatico (AICD):</strong> la via Fas/FasL è fondamentale per la <strong>Morte Cellulare Indotta da Attivazione (AICD)</strong>, 
                    il meccanismo con cui il sistema immunitario spegne l'eccesso di linfociti T al termine dell'infezione. 
                    Mutazioni di FAS o FASL provocano la <strong>Sindrome Linfoproliferativa Autoimmune (ALPS)</strong> con linfoadenomegalia massiva, splenomegalia e accumulo di linfociti T doppi negativi (CD4⁻ CD8⁻ TCRαβ⁺).
                  </p>
                </div>
              </div>

              {/* Box Correlazione Clinica d'Esame: FHL e Sindrome di Griscelli */}
              <div className="p-4 rounded-xl border border-rose-300 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/30 space-y-2">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  <span className="font-bold text-xs uppercase tracking-wider text-rose-900 dark:text-rose-200">
                    Correlazione Clinica d'Esame (Prof.ssa Soriani): Linfoistiocitosi Emofagocitica Familiare (FHL)
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
                  <p>
                    La <strong>Linfoistiocitosi Emofagocitica Familiare (FHL o HLH)</strong> è un disordine genetico iperinfiammatorio letale a trasmissione autosomica recessiva 
                    causato da mutazioni nei geni che compongono il macchinario di esocitosi citotossica:
                    <br />• <strong>FHL2:</strong> mutazioni nel gene <em>PRF1</em> (Perforina);
                    <br />• <strong>FHL3:</strong> mutazioni nel gene <em>UNC13D</em> (Munc13-4, difetto di priming);
                    <br />• <strong>FHL4:</strong> mutazioni nel gene <em>STX11</em> (Sintassina-11, difetto di fusione SNARE);
                    <br />• <strong>FHL5:</strong> mutazioni nel gene <em>STXBP2</em> (Munc18-2);
                    <br />• <strong>Sindrome di Griscelli di Tipo 2:</strong> mutazioni nel gene <em>RAB27A</em>. 
                    (<em>Perla d'esame:</em> Rab27a controlla sia l'esocitosi dei granuli litici nei T/NK che l'esocitosi dei melanosomi dai melanociti cutanei: 
                    i pazienti presentano l'associazione caratteristica tra grave immunodeficienza HLH e <strong>albinismo parziale / ipopigmentazione argentea dei capelli</strong>).
                  </p>
                  <p className="bg-white/60 dark:bg-slate-900/60 p-3 rounded-lg border border-rose-200 dark:border-rose-900/60">
                    <strong>Il Paradosso Fisiopatologico della FHL:</strong>
                    I CTL e le cellule NK si legano regolarmente alle cellule infettate da virus (frequentemente <em>Epstein-Barr Virus</em>, EBV), 
                    ma <strong>non riescono ad ucciderle</strong> per l'assenza del poro di perforina o per la mancata fusione dei granuli. 
                    Non ricevendo il segnale di spegnimento fornito dalla lisi della cellula bersaglio, i linfociti rimangono bloccati nella sinapsi 
                    ipersecernendo quantità torrenziali e continue di <strong>IFN-γ</strong>. L'IFN-γ induce un'iperattivazione sistemica incontrollata 
                    dei macrofagi (<strong>Tempesta Citochinica CRS</strong>), i quali infiltrano il midollo osseo, il fegato e la milza iniziando a fagocitare 
                    gli elementi figurati del sangue (<strong>Emofagocitosi midollare</strong>). 
                    Quadro clinico d'emergenza: febbre remittente continua, <strong>pancitopenia severa</strong>, epatosplenomegalia massiva, 
                    <strong>iperferritinemia estrema (&gt; 10.000 ng/mL)</strong>, ipofibrinogenemia, ipertrigliceridemia e decesso rapido per shock multiorgano. 
                    Terapia salvavita: anticorpo monoclonale neutralizzante <strong>Emapalumab (anti-IFN-γ)</strong> e trapianto allogenico di cellule staminali ematopoietiche.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ponte Fisiologico di Transizione */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-100 via-blue-50 to-slate-100 dark:from-slate-800 dark:via-blue-950/40 dark:to-slate-800 border border-blue-200/60 dark:border-blue-800/50 flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-blue-900 dark:text-blue-200 font-semibold block mb-0.5">
                Ponte Fisiologico di Transizione: Verso la sintesi sinottica e l'autovalutazione d'esame
              </strong>
              Abbiamo esplorato l'intero arco dell'attivazione e differenziamento dell'immunità adattativa: 
              dalle citochine e dalla sinapsi immunologica, ai centri germinativi e alle armi citotossiche letali. 
              Consolidiamo ora queste nozioni nella <strong>Tavola Sinottica Comparativa Master</strong> e nella batteria di verifica con <strong>Quiz d'Esame</strong> e <strong>Flashcard</strong>.
            </div>
          </div>
        </section>


        {/* =========================================================================
            SEZIONE 3.7: TAVOLA SINOTTICA MASTER, QUIZ D'ESAME & FLASHCARD DI CAPITOLO
            ========================================================================= */}
        <section
          id="sec-3-verifica"
          aria-labelledby="heading-sec-3-verifica"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-8"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-mono uppercase tracking-wider font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Sezione 3.7 · Autovalutazione, Ripasso Attivo e Competenze Cliniche</span>
            </div>
            <h2 id="heading-sec-3-verifica" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Tavola Sinottica Comparativa Master, Batteria di Quiz d'Esame e Flashcard
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Sintesi comparativa integrata a specchio dei profili effettori e dei meccanismi di regolazione, con quesiti ufficiali d'esame e mazzo di schede per la memorizzazione a lungo termine.
            </p>
          </div>

          {/* 1. Tavola Sinottica Comparativa Master */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Scale className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>1. Tavola Sinottica Comparativa Master: I Cinque Profili Linfocitari T Helper e CTL</span>
            </h3>

            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="p-3 font-bold">Sottopopolazione</th>
                    <th className="p-3 font-bold text-blue-700 dark:text-blue-300">Segnale 3 (Citochine)</th>
                    <th className="p-3 font-bold text-indigo-700 dark:text-indigo-300">STAT & Master Regulator</th>
                    <th className="p-3 font-bold text-amber-700 dark:text-amber-400">Citochine Signature</th>
                    <th className="p-3 font-bold text-emerald-700 dark:text-emerald-400">Bersaglio Primario & Malattia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300 text-xs">
                  <tr>
                    <td className="p-2.5 font-bold text-rose-700 dark:text-rose-400 bg-rose-50/20">Th1</td>
                    <td className="p-2.5">IL-12 + IFN-γ</td>
                    <td className="p-2.5">STAT4 / STAT1 → <strong>T-bet</strong></td>
                    <td className="p-2.5">IFN-γ, TNF-α, IL-2</td>
                    <td className="p-2.5">Macrofagi M1 (iNOS, NO). Patogeni intracellulari (TB, Leishmania). Autoimmunità d'organo (Crohn, SM).</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-amber-700 dark:text-amber-400 bg-amber-50/20">Th2</td>
                    <td className="p-2.5">IL-4, TSLP, IL-33, IL-25</td>
                    <td className="p-2.5">STAT6 → <strong>GATA-3</strong></td>
                    <td className="p-2.5">IL-4, IL-5, IL-13</td>
                    <td className="p-2.5">Eosinofili, mastociti, macrofagi M2 (Arg-1). Elminti parassiti. Asma bronchiale e dermatite atopica.</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-orange-700 dark:text-orange-400 bg-orange-50/20">Th17</td>
                    <td className="p-2.5">TGF-β + IL-6 / IL-21 + IL-23</td>
                    <td className="p-2.5">STAT3 → <strong>RORγt</strong></td>
                    <td className="p-2.5">IL-17A, IL-17F, IL-22</td>
                    <td className="p-2.5">Cellule epiteliali e neutrofili (G-CSF, CXCL8). Funghi (Candida) e batteri extracellulari. Psoriasi, Artrite.</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-purple-700 dark:text-purple-400 bg-purple-50/20">Tfh</td>
                    <td className="p-2.5">IL-6, IL-21 + ICOS</td>
                    <td className="p-2.5">STAT3 → <strong>BCL-6</strong></td>
                    <td className="p-2.5">IL-21, CD40L</td>
                    <td className="p-2.5">Centrociti nel centro germinativo. Ipermutazione somatica e switch. Autoanticorpi nel LES.</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50/20">Treg</td>
                    <td className="p-2.5">TGF-β + IL-2 + Ac. Retinoico</td>
                    <td className="p-2.5">STAT5 / SMAD3 → <strong>FOXP3</strong></td>
                    <td className="p-2.5">IL-10, TGF-β, IL-35, Adenosina</td>
                    <td className="p-2.5">Soppressione di tutte le cellule effettrici e APC. Sindrome IPEX da mutazione di FOXP3 (Nobel 2025).</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-blue-700 dark:text-blue-400 bg-blue-50/20">CTL CD8⁺</td>
                    <td className="p-2.5">IL-12, IL-2 + Licensing CD40</td>
                    <td className="p-2.5">STAT4 → <strong>T-bet & Eomes</strong></td>
                    <td className="p-2.5">Perforina, Granzimi, FasL, IFN-γ</td>
                    <td className="p-2.5">Cellule infettate da virus e neoplastiche. Linfoistiocitosi Emofagocitica Familiare (FHL).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Batteria di Quiz d'Esame Filtrata */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>2. Batteria Ufficiale di Domande d'Esame Orale (Lezioni 2, 12, 13, 14, 19, 20)</span>
              </h3>
              <span className="text-xs font-mono text-slate-500">
                {chapter3Questions.length} Quesiti Selezionati
              </span>
            </div>

            <QuizSection customQuestions={chapter3Questions} />
          </div>

          {/* 3. Mazzo di Flashcards del Capitolo III */}
          <div className="space-y-4 pt-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <BookmarkCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>3. Mazzo Completo di Flashcard per il Ripasso Attivo (Capitolo III)</span>
              </h3>
              <span className="text-xs font-mono text-slate-500">
                {chapter3Flashcards.length} Schede Concettuali
              </span>
            </div>

            <FlashcardDeck cards={chapter3Flashcards} />
          </div>
        </section>

      </div>
    </div>
  );
};
