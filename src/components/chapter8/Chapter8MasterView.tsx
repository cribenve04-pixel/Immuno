/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CAPITOLO VIII MASTER VIEW: IMMUNOLOGIA ONCOLOGICA, IMMUNOTERAPIA DEI TUMORI
 * (CHECKPOINT & CAR-T) E IMMUNODEFICIENZE PRIMITIVE E ACQUISITE (HIV/AIDS)
 * 
 * Trattato accademico continuo a pagina unica privo di discontinuità d'aula.
 * Unifica integralmente tutti i contenuti, le tabelle e i simulatori di:
 * - Lezione 32: Immunologia Oncologica ed Immunoterapia (Immunoediting, TME, Checkpoint, CAR-T, irAEs)
 * - Lezione 33: Immunodeficienze Acquisite (HIV-1, Nef, Tropismo R5/X4, Storia Naturale, Reservoir & cART)
 * Inclusione del Quadro Sinottico delle Immunodeficienze Primitive (PID) e Screening Neonatale TREC/KREC.
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Activity,
  Layers,
  Shield,
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
  Compass,
  Radio,
  Dna,
  ShieldAlert,
  Boxes,
  HeartPulse,
  Flame,
  Bug,
  Crosshair,
  Sliders,
  Check,
  CheckCircle,
  HelpCircle,
  Syringe,
  Thermometer,
  FileText,
  BookmarkCheck,
  Split,
  Eye,
  SlidersHorizontal,
  Lock,
  Unlock,
  ShieldOff,
  Award,
  BrainCircuit
} from 'lucide-react';

// Simulatori Interattivi Chapter 8
import { InlineProcessFlowDiagram } from '../InlineProcessFlowDiagram';
import { InteractiveCheckpointBlockade } from '../InteractiveCheckpointBlockade';

// Quiz & Flashcards
import { ALL_EXAM_QUESTIONS } from '../../data/examQuestions';
import { QuizSection } from '../QuizSection';
import { FlashcardDeck } from '../FlashcardDeck';

interface Chapter8MasterViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
  initialSection?: string;
  onNavigateSection?: (sectionId: string) => void;
}

export const Chapter8MasterView: React.FC<Chapter8MasterViewProps> = ({
  isSerif = false,
  fontSize = 'normal',
  initialSection
}) => {
  const proseFontClass = isSerif ? 'font-serif' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // Domande d'esame filtrate per le lezioni del Capitolo 8 (32, 33)
  const chapter8Questions = useMemo(() => {
    return ALL_EXAM_QUESTIONS.filter((q) => [32, 33].includes(q.lessonNumber));
  }, []);

  // Flashcards cumulate del Capitolo 8 ad altissima resa d'esame
  const chapter8Flashcards = useMemo(() => {
    return [
      {
        id: 'fc-c8-01',
        category: 'Onco-Immunologia - Immunoediting',
        front: 'Quale esperimento definitivo di Robert Schreiber ha confermato l\'immunoediting rispetto alla vecchia teoria dell\'immunosorveglianza?',
        back: 'Schreiber ha dimostrato che topi knock-out RAG2⁻/⁻ (senza linfociti) o IFNGR1⁻/⁻ / STAT1⁻/⁻ sviluppano molti più tumori indotti da metilcolantrene (MCA). Quando questi tumori nati in topi immunodeficienti vengono trapiantati in topi wild-type immunocompetenti, vengono prontamente RIGETTATI (in quanto "non-editati" e ricchi di neoantigeni). Al contrario, tumori nati in topi wild-type ("editati" e selezionati per sfuggire al sistema immunitario) crescono indisturbati anche dopo il trapianto.'
      },
      {
        id: 'fc-c8-02',
        category: 'Onco-Immunologia - Antigeni',
        front: 'Cosa distingue concettualmente e clinicamente i TSA (Tumor-Specific Antigens / Neoantigeni) dai TAA?',
        back: 'I TSA derivano da mutazioni somatiche uniche del DNA tumorale (KRAS G12D, p53) o da oncovirus (HPV E6/E7): essendo totalmente assenti nei tessuti normali, NON sono soggetti a tolleranza timica centrale e inducono risposte T ad alta avidità. I TAA sono proteine self (HER2, MAGE, Melan-A, CD19): il sistema immunitario manifesta tolleranza centrale o rischio di tossicità on-target/off-tumor.'
      },
      {
        id: 'fc-c8-03',
        category: 'Onco-Immunologia - Checkpoint',
        front: 'Qual è la differenza biologica e farmacologica cardine tra l\'asse CTLA-4 (Ipilimumab) e l\'asse PD-1/PD-L1 (Nivolumab/Pembrolizumab)?',
        back: 'CTLA-4 agisce PRECOCEMENTE nei LINFONODI durante la fase di priming: compete con CD28 per CD80/CD86 regolando l\'attivazione iniziale dei cloni T naïve e la funzione delle Treg (più irAEs). PD-1 agisce TARDIVAMENTE nei TESSUTI PERIFERICI e nel MICROAMBIENTE TUMORALE (TME) sui CTL CD8⁺ in esaurimento funzionale (exhaustion): il legame a PD-L1 recluta la fosfatasi SHP-2 che defosforila CD28 e TCR.'
      },
      {
        id: 'fc-c8-04',
        category: 'Onco-Immunologia - CAR-T',
        front: 'Cosa differenzia i CAR di 2ª generazione con dominio costimolatorio CD28 da quelli con 4-1BB (CD137)?',
        back: 'I CAR-T con CD28 inducono una rapida ed esplosiva espansione basata sulla glicolisi aerobica (effetto citotossico fulmineo ma minore persistenza temporale ed esaurimento più rapido). I CAR-T con 4-1BB (come Tisagenlecleucel) stimolano la biogenesi mitocondriale e la fosforilazione ossidativa (OXPHOS), garantendo una sopravvivenza e memoria a lungo termine pluriennale.'
      },
      {
        id: 'fc-c8-05',
        category: 'Onco-Immunologia - Tossicità',
        front: 'Qual è il meccanismo patogenetico della Sindrome da Rilascio Citochinico (CRS) nelle CAR-T e qual è il trattamento d\'elezione?',
        back: 'La massiva lisi tumorale attiva le CAR-T a secernere IFN-γ e GM-CSF, che iperattivano i monociti/macrofagi dell\'ospite a rilasciare quantità torrenziali di IL-6, IL-1β e TNF-α (vasoplegia, shock ipotensivo e leak capillare). Il farmaco salvavita gold-standard è Tocilizumab (anticorpo monoclonale anti-recettore di IL-6), associato a desametasone/Anakinra in caso di neurotossicità ICANS.'
      },
      {
        id: 'fc-c8-06',
        category: 'Immunodeficienze - Screening',
        front: 'Come funziona il test di screening neonatale universale basato sulla quantificazione dei TREC?',
        back: 'I TREC (T-cell Receptor Excision Circles) sono anelli episomici di DNA scartati durante il riarrangiamento somatico V(D)J del locus TCRα (delezione del locus TCRδ). Non duplicandosi durante le mitosi cellulari, quantificano esattamente il tasso di timociti naïve appena generati nel timo (Recent Thymic Emigrants) su goccia di sangue essiccato (Guthrie card), diagnosticando qualsiasi forma di SCID prima delle infezioni.'
      },
      {
        id: 'fc-c8-07',
        category: 'HIV/AIDS - Virologia',
        front: 'Qual è il ruolo molecolare del doppio sabotaggio operato dalla proteina accessoria Nef di HIV-1?',
        back: 'Nef attua una raffinatissima strategia evasiva a due facce: 1) Downregola selettivamente HLA-A e HLA-B (endocitandoli via AP-1) per rendere la cellula infetta totalmente invisibile ai linfociti CTL CD8⁺; 2) Risparmia intenzionalmente l\'espressione di HLA-C e HLA-E sulla superficie per ingaggiare i recettori inibitori KIR e CD94/NKG2A delle Cellule NK, prevenendo l\'eliminazione per missing-self!'
      },
      {
        id: 'fc-c8-08',
        category: 'HIV/AIDS - Tropismo',
        front: 'Cosa distingue i ceppi virali R5 da quelli X4 e qual è il significato della mutazione naturale CCR5-Δ32?',
        back: 'I ceppi R5 (M-tropici) legano il corecettore CCR5 espresso su macrofagi e linfociti T CD4⁺ memoria mucosali del GALT: sono responsabili della trasmissione iniziale e della fase acuta. I ceppi X4 (T-tropici) usano CXCR4 sui T naïve ed emergono nelle fasi avanzate accelerando il crollo verso l\'AIDS. La mutazione CCR5-Δ32 in omozigosi conferisce resistenza naturale quasi assoluta all\'infezione da ceppi R5.'
      },
      {
        id: 'fc-c8-09',
        category: 'HIV/AIDS - Patogenesi',
        front: 'Cosa accade ai linfociti T CD4⁺ del GALT intestinale durante la fase acuta dell\'infezione da HIV?',
        back: 'Nelle prime 2-4 settimane si verifica una deplezione fulminea e catastrofica (>60-80%) di tutti i linfociti T CD4⁺ CCR5⁺ di memoria residenti nella lamina propria intestinale (inclusi i Th17). La perdita della barriera enterocitaria causa una cronica traslocazione luminale sistemica di LPS e prodotti batterici, alimentando una perpetua iperattivazione infiammatoria sistemica.'
      },
      {
        id: 'fc-c8-10',
        category: 'HIV/AIDS - Piroptosi',
        front: 'Qual è il meccanismo molecolare mediante cui muore il 95% dei linfociti T CD4⁺ nei linfonodi durante l\'infezione da HIV?',
        back: 'Muore per PIROPTOSI Caspasi-1 mediata (e non per apoptosi o lisi virale diretta). Nei linfociti CD4⁺ quiescenti "abortivamente infetti", la trascrittasi inversa si arresta generando filamenti incompleti di DNA citosolico. Il sensore intracellulare IFI16 rileva questi frammenti, attiva l\'inflammasoma con Caspasi-1, taglia la Gasdermina D provocando lisi cellulare infiammatoria e rilascio massivo di IL-1β.'
      },
      {
        id: 'fc-c8-11',
        category: 'HIV/AIDS - Farmacologia',
        front: 'Quali sono i meccanismi d\'azione degli INSTI e dei PI nella terapia combinata cART?',
        back: 'Gli INSTI (Inibitori del Trasferimento del Filamento dell\'Integrasi: Dolutegravir, Bictegravir) impediscono l\'inserzione covalente del cDNA provirale nel genoma della cellula ospite (pilastro di 1ª linea). I PI (Inibitori della Proteasi: Darunavir) bloccano il taglio proteolitico delle poliproteine strutturali Gag e Gag-Pol, determinando la produzione di virioni gemmati strutturalmente immaturi e non infettanti.'
      },
      {
        id: 'fc-c8-12',
        category: 'HIV/AIDS - Reservoir',
        front: 'Perché la terapia cART azzera la viremia plasmatica (<20-50 copie/mL, U=U) ma non eradica definitivamente l\'HIV?',
        back: 'A causa della formazione precoce del Reservoir Latente in linfociti T CD4⁺ Central Memory a riposo (G₀). Il provirus è integrato stabilmente nel DNA nucleare ma è trascrizionalmente silente: non producendo proteine virali, non espone peptidi su MHC-I risultando invisibile a CTL e farmaci antiretrovirali. Con un\'emivita biologica di 44 mesi, richiederebbe oltre 70 anni per estinguersi spontaneamente.'
      }
    ];
  }, []);

  const [activeSubSection, setActiveSubSection] = useState<string>('sec-8-immunoediting-antigens');

  // --- STATI DEI SIMULATORI INTERATTIVI DEL CAPITOLO VIII ---

  // Simulatore 1: Ciclo Cancro-Immunità & Immunotipi Tumorali
  const [sim1Immunotype, setSim1Immunotype] = useState<'desert' | 'excluded' | 'inflamed'>('inflamed');
  const [sim1MhcLoss, setSim1MhcLoss] = useState<boolean>(false);
  const [sim1Pdl1Expression, setSim1Pdl1Expression] = useState<number>(75); // %

  // Simulatore 2: CAR-T Generation & Tossicità (CRS/ICANS)
  const [sim2CarGen, setSim2CarGen] = useState<1 | 2 | 3 | 4>(2);
  const [sim2Costim, setSim2Costim] = useState<'cd28' | '41bb'>('41bb');
  const [sim2TumorBurden, setSim2TumorBurden] = useState<number>(80); // %

  // Simulatore 3: Cinetica Trifasica dell'Infezione da HIV & Effetto della cART
  const [sim3Phase, setSim3Phase] = useState<'acute' | 'latency' | 'aids'>('latency');
  const [sim3CartActive, setSim3CartActive] = useState<boolean>(false);
  const [sim3Ccr5Genotype, setSim3Ccr5Genotype] = useState<'wildtype' | 'delta32_het' | 'delta32_hom'>('wildtype');

  const SECTIONS_NAV = [
    { id: 'sec-8-immunoediting-antigens', label: '8.1 Immunoediting & Antigeni TSA/TAA', icon: Target },
    { id: 'sec-8-tme-checkpoint', label: '8.2 TME, Ciclo Cancro & Checkpoint (Nobel 2018)', icon: Crosshair },
    { id: 'sec-8-cart-adoptive', label: '8.3 CAR-T (Gen 1ª-4ª), Tossicità CRS & Solidi', icon: Zap },
    { id: 'sec-8-pid-trec', label: '8.4 Immunodeficienze Primitive & Screening TREC', icon: ShieldAlert },
    { id: 'sec-8-hiv-aids', label: '8.5 HIV-1, Nef, Tropismo R5/X4, Reservoir & cART', icon: Bug },
    { id: 'sec-8-verifica', label: '8.6 Sintesi Master, Quiz d\'Esame & Flashcard', icon: CheckCircle2 }
  ];

  // ScrollSpy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
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

  // Gestione dell'ancora iniziale da routing esterno (singola esecuzione per prevenire scroll a tratti)
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

  // Metriche calcolate per il Simulatore CAR-T (Simulatore 2)
  const carTMetrics = useMemo(() => {
    let expansionRate = sim2CarGen === 1 ? 'Bassa (Rapida anergia)' : sim2CarGen === 2 && sim2Costim === 'cd28' ? 'Esplosiva (Picco precoce)' : 'Sostenuta e costante';
    let persistence = sim2CarGen === 1 ? 'Pochi giorni' : sim2Costim === 'cd28' ? '1–3 mesi' : 'Pluriennale (Cellule memory OXPHOS)';
    let crsRisk = sim2TumorBurden > 60 && (sim2CarGen >= 2) ? (sim2Costim === 'cd28' ? 'MOLTO ALTO (CRS Grado 3-4 precoce)' : 'ALTO (CRS Grado 2-3 tardiva)') : 'Moderato/Basso';
    return { expansionRate, persistence, crsRisk };
  }, [sim2CarGen, sim2Costim, sim2TumorBurden]);

  // Metriche calcolate per il Simulatore HIV (Simulatore 3)
  const hivMetrics = useMemo(() => {
    if (sim3Ccr5Genotype === 'delta32_hom') {
      return {
        cd4Count: '950–1200 cellule/µL (Normale)',
        viralLoad: '0 copie RNA/mL (Protetto da trasmissione ceppi R5)',
        status: 'RESISTENZA NATURALE ALL\'INFEZIONE DA CEPPI R5'
      };
    }
    if (sim3CartActive) {
      return {
        cd4Count: '650–850 cellule/µL (Ripristino parziale/buono)',
        viralLoad: '<20-50 copie RNA/mL (Non Rilevabile: U=U)',
        status: 'CONTROLLO VIREMICO FARMACOLOGICO (Reservoir Latente Intatto)'
      };
    }
    if (sim3Phase === 'acute') {
      return {
        cd4Count: '450–600 cellule/µL (Crollo acuto nel GALT intestinale >70%)',
        viralLoad: '1.000.000 – 10.000.000 copie RNA/mL (Picco viremico)',
        status: 'SINDROME RETROVIRALE ACUTA & TRASLOCAZIONE DI LPS'
      };
    }
    if (sim3Phase === 'latency') {
      return {
        cd4Count: '350–500 cellule/µL (Perdita di 50-80 CD4+/anno)',
        viralLoad: '10.000 – 50.000 copie RNA/mL (Viral Set-Point)',
        status: 'LATENZA CLINICA ASINTOMATICA (Replicazione attiva nei linfonodi)'
      };
    }
    return {
      cd4Count: '<100 cellule/µL (Collasso totale dell\'immunità cellulo-mediata)',
      viralLoad: '>500.000 copie RNA/mL (Rebound terminale)',
      status: 'AIDS CONCLAMATO (Infezioni opportunistiche e neoplasie definenti)'
    };
  }, [sim3Phase, sim3CartActive, sim3Ccr5Genotype]);

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 ${proseFontClass} pb-24 transition-colors duration-200`}>
      
      {/* =========================================================================
          TESTATA MONUMENTALE CAPITOLO VIII
          ========================================================================= */}
      <header className="relative bg-gradient-to-br from-red-950 via-slate-900 to-rose-950 text-white border-b border-red-800/40 py-12 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-red-500/20 text-red-300 border border-red-400/40">
              Trattato Accademico Ufficiale • Capitolo VIII Conclusivo
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700">
              Lezioni 32 e 33 Integrate
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-rose-900/40 text-rose-200 border border-rose-700/50">
              Cattedre: Prof.ssa Ricciarda Galandrini • Prof. Fabrizio Antonangeli
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Immunologia Oncologica, Terapie dei Checkpoint, CAR-T & Immunodeficienze (HIV/AIDS)
            </h1>
            <p className="text-base sm:text-lg text-red-100/90 max-w-4xl leading-relaxed">
              Dalla teoria dell'immunoediting di Robert Schreiber (le 3 E: Eliminazione, Equilibrio, Evasione) 
              e la tassonomia molecolare degli antigeni tumorali (TSA vs TAA), all'analisi del Ciclo Cancro-Immunità 
              e il Premio Nobel 2018 per il blocco di CTLA-4 e PD-1/PD-L1. Dalle 4 generazioni dei linfociti ingegnerizzati 
              CAR-T con gestione della CRS via Tocilizumab, al quadro delle Immunodeficienze Primitive (PID con screening neonatale TREC), 
              fino alla virologia immunologica dell'HIV-1: il doppio sabotaggio di Nef, la mutazione protettiva CCR5-Δ32, 
              la piroptosi dei CD4⁺ e il mistero dell'incurabilità del reservoir provirale latente.
            </p>
          </div>

          {/* KPI del Capitolo */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-red-800/30 text-xs font-mono">
            <div className="bg-slate-900/60 p-3 rounded-xl border border-red-800/30">
              <span className="text-red-400 block font-semibold">Teoria Immunoediting</span>
              <span className="text-white text-base font-bold">Le 3 E di Schreiber</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-xl border border-red-800/30">
              <span className="text-red-400 block font-semibold">Premio Nobel 2018</span>
              <span className="text-white text-base font-bold">CTLA-4 & PD-1</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-xl border border-red-800/30">
              <span className="text-red-400 block font-semibold">Terapia CRS CAR-T</span>
              <span className="text-white text-base font-bold">Tocilizumab (anti-IL-6R)</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-xl border border-red-800/30">
              <span className="text-red-400 block font-semibold">Emivita Reservoir HIV</span>
              <span className="text-white text-base font-bold">44 Mesi (&gt;70 Anni)</span>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          BARRA STICKY DI NAVIGAZIONE DEL CAPITOLO (SECTIONS_NAV)
          ========================================================================= */}
      <nav aria-label="Navigazione interna capitolo 8" className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-2 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {SECTIONS_NAV.map((sec) => {
              const Icon = sec.icon;
              const isActive = activeSubSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToAnchor(sec.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? 'bg-red-600 text-white shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-red-600 dark:hover:text-red-400'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`} />
                  <span>{sec.label}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500">
            <span>Docenti: Galandrini / Antonangeli</span>
          </div>
        </div>
      </nav>

      {/* =========================================================================
          CORPO CENTRALE DEL CAPITOLO VIII (MAX-W-7XL)
          ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">

        {/* -----------------------------------------------------------------------
            SEZIONE 8.1: IMMUNOEDITING TUMORALE & CLASSIFICAZIONE ANTIGENI (TSA/TAA)
            ----------------------------------------------------------------------- */}
        <section id="sec-8-immunoediting-antigens" className="scroll-mt-24 space-y-8">
          
          <div className="border-l-4 border-red-600 pl-4 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-400 font-bold">
              Sezione 8.1 • Dalla Lezione 32
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              Dall'Immunosorveglianza all'Immunoediting Tumorale (Le 3 E di Schreiber) e Classificazione degli Antigeni
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              L'ipotesi storica di Burnet & Thomas e la crisi dei topi Nude; gli esperimenti definitivi di Robert Schreiber su topi RAG2⁻/⁻ e IFNGR1⁻/⁻; le tre fasi dell'immunoediting (Eliminazione, Equilibrio, Evasione); tassonomia degli antigeni tumorali: TSA neoantigeni (TMB, dMMR/MSI-H) vs TAA (differenziativi, cancro-testicolo, sovraespressi).
            </p>
          </div>

          {/* EVOLUZIONE STORICA ED ESPERIMENTO DEFINITIVO DI ROBERT SCHREIBER */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Award className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span>Dalla Teoria dell'Immunosorveglianza alla Dimostrazione dell'Immunoediting di Robert Schreiber</span>
            </h3>
            <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
              Nel 1909 Paul Ehrlich ipotizzò per primo che le difese immunitarie impedissero costantemente l'insorgenza di neoplasie. Nel 1957 Sir Frank Macfarlane Burnet e Lewis Thomas formalizzarono l'<strong>Ipotesi dell'Immunosorveglianza Tumorale</strong>: il sistema immunitario riconosce ed elimina continuamente cellule trasformate prima che diventino clinicamente evidenti.
            </p>
            <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border-l-4 border-amber-500 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <p>
                <strong>La Crisi Storica degli Anni '70 (Il Dilemma dei Topi Nude):</strong> Negli anni '70 l'ipotesi fu abbandonata poiché i topi atimici mutanti *Nude* (privi di timo e di linfociti T) non mostravano un aumento statisticamente significativo di tumori spontanei o indotti da carcinogeni chimici. L'enigma fu risolto decenni dopo quando si scoprì che i topi nude conservano cellule <strong>Natural Killer (NK)</strong> iperattive e linfociti B normali!
              </p>
              <p>
                <strong>L'Esperimento Decisivo di Robert Schreiber (2001):</strong> Utilizzando topi geneticamente modificati con knockout completo per <strong>RAG2⁻/⁻</strong> (totalmente privi di linfociti B, T e NKT) oppure per <strong>IFNGR1⁻/⁻ / STAT1⁻/⁻ / Perforina⁻/⁻</strong>, Schreiber ha provato che questi topi sviluppano tumori indotti dal carcinogeno chimico metilcolantrene (MCA) o tumori spontanei con frequenza e rapidità enormemente superiori rispetto ai topi wild-type.
              </p>
              <p className="font-semibold text-red-700 dark:text-red-300">
                La prova del nove concettuale: trapiantando i tumori nati nei topi RAG2⁻/⁻ in topi immunocompetenti wild-type sani, il 40–50% di essi veniva RIGETTATO spontaneamente in quanto altamente immunogenico ("non-editato" dal sistema immunitario). Al contrario, i tumori nati in topi immunocompetenti wild-type ("già editati" e selezionati) attecchivano e crescevano al 100%!
              </p>
            </div>
          </div>

          {/* LE TRE FASI DELL'IMMUNOEDITING (LE TRE E) */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Activity className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span>Le Tre Fasi dell'Immunoediting Tumorale (Le Tre "E" di Schreiber)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
              
              <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/20 border-2 border-emerald-400/60 dark:border-emerald-800 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-700 dark:text-emerald-300 font-mono text-sm">1. Eliminazione</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-200 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 font-bold">Immunosorveglianza</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  La cellula trasformata rilascia segnali di pericolo (<strong>DAMPs</strong>) dovuti a instabilità genomica:
                </p>
                <ul className="space-y-1 list-disc list-inside text-slate-600 dark:text-slate-400 text-xs">
                  <li>Attivazione dell'asse <strong>cGAS-STING</strong> da DNA citosolico instabile con secrezione di IFN di Tipo I.</li>
                  <li>Espressione di ligandi di stress <strong>MICA/MICB e ULBP</strong> che attivano il recettore citotossico <strong>NKG2D</strong> su cellule NK e T γδ.</li>
                  <li><strong>Morte Cellulare Immunogenica (ICD):</strong> esposizione di Calreticulina sulla membrana ("eat-me signal") e rilascio di ATP e HMGB1.</li>
                  <li>Cross-presentazione da parte delle cellule dendritiche convenzionali <strong>cDC1 (BATF3⁺)</strong> ai CTL CD8⁺ e Th1 che, cooperando con macrofagi M1 e IFN-γ, eradicano la neoplasia nascente.</li>
                </ul>
              </div>

              <div className="p-4 bg-amber-50/50 dark:bg-amber-950/20 border-2 border-amber-400/60 dark:border-amber-800 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-700 dark:text-amber-300 font-mono text-sm">2. Equilibrio</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200 font-bold">Dormienza</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Se alcune cellule tumorali sopravvivono alla fase di eliminazione, entrano in uno stato prolungato di <strong>dormienza immunologica subclinica</strong>:
                </p>
                <ul className="space-y-1 list-disc list-inside text-slate-600 dark:text-slate-400 text-xs">
                  <li>L'immunità adattativa (mediata da <strong>IL-12, IFN-γ e CTL CD8⁺</strong>) impedisce la crescita volumetrica della massa tumorale per mesi, anni o decenni.</li>
                  <li>Tuttavia, l'attacco immunitario costante esercita una <strong>formidabile pressione selettiva darwiniana</strong>: le cellule tumorali geneticamente instabili che accumulano mutazioni in grado di eludere il riconoscimento immunitario vengono selezionate favorevolmente.</li>
                </ul>
              </div>

              <div className="p-4 bg-rose-50/50 dark:bg-rose-950/20 border-2 border-rose-400/60 dark:border-rose-800 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-rose-700 dark:text-rose-300 font-mono text-sm">3. Evasione (Escape)</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-200 font-bold">Malattia Clinica</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  I cloni neoplastici resistenti superano la barriera immunitaria diventando clinicamente evidenti:
                </p>
                <ul className="space-y-1 list-disc list-inside text-slate-600 dark:text-slate-400 text-xs">
                  <li>Perdita di antigenicità (downregolazione o mutazione della <strong>β2-microglobulina</strong> con perdita di MHC-I).</li>
                  <li>Perdita di sensibilità immunitaria (mutazioni inattivanti di <strong>JAK1/JAK2</strong> che rendono il tumore insensibile all'IFN-γ).</li>
                  <li>Costruzione di un microambiente immunosoppressivo con reclutamento di <strong>Treg, MDSC e TAM M2</strong> ed espressione di <strong>PD-L1</strong>.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* CLASSIFICAZIONE MOLECOLARE DEGLI ANTIGENI TUMORALI: TSA VS TAA */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Dna className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span>Classificazione degli Antigeni Tumorali: TSA (Neoantigeni) vs TAA</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <span className="font-bold text-red-600 dark:text-red-400 font-mono text-sm block">
                  1. TSA (Tumor-Specific Antigens) / Neoantigeni
                </span>
                <p className="text-slate-600 dark:text-slate-300">
                  Antigeni presenti <strong>esclusivamente nelle cellule neoplastiche e totalmente assenti dai tessuti normali</strong>. Non essendo presenti durante l'ontogenesi, <em>sono totalmente esenti da tolleranza timica centrale</em> e stimolano risposte citotossiche T ad altissima avidità:
                </p>
                <ul className="space-y-1.5 list-disc list-inside text-slate-600 dark:text-slate-400 text-xs">
                  <li><strong>Neoantigeni da Mutazioni Somatiche:</strong> Mutazioni puntiformi nonsynonymous in oncogeni driver o passenger (es. <strong>KRAS G12D</strong>, p53 mutato, proteina di fusione <strong>BCR-ABL</strong> nella LMC).</li>
                  <li><strong>Oncoproteine Virali Estranee:</strong> Proteine codificate da virus oncogeni integrati (<strong>E6 ed E7</strong> del Papillomavirus Umano HPV nel cancro della cervice; EBNA-1 di EBV nei linfomi; HBx di HBV nel carcinoma epatico).</li>
                  <li><strong>Carico Mutazionale Tumorale (TMB) & Deficit MMR:</strong> I tumori con deficit del sistema di riparazione dei mismatch (<strong>dMMR / MSI-High</strong>, come nella sindrome di Lynch e carcinomi del colon-retto) accumulano migliaia di mutazioni frameshift generando centinaia di neoantigeni: rispondono con tassi di remissione straordinari agli inibitori dei checkpoint!</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <span className="font-bold text-blue-600 dark:text-blue-400 font-mono text-sm block">
                  2. TAA (Tumor-Associated Antigens)
                </span>
                <p className="text-slate-600 dark:text-slate-300">
                  Proteine self non mutate espresse anche in tessuti normali sani, ma che nei tumori presentano un'espressione quantitativamente o spazialmente anomala:
                </p>
                <ul className="space-y-1.5 list-disc list-inside text-slate-600 dark:text-slate-400 text-xs">
                  <li><strong>Antigeni Cancro-Testicolo (CTA):</strong> Espressi fisiologicamente solo negli spermatogoni testicolari e nel sinciziotrofoblasto (tessuti privi di MHC-I), e silenziati per metilazione in tutti i tessuti sani. Vengono riattivati per demetilazione epigenetica nei tumori (es. <strong>MAGE-A1, MAGE-A3, NY-ESO-1</strong> nel melanoma e carcinomi polmonari).</li>
                  <li><strong>Antigeni di Differenziazione Tissutale:</strong> Proteine condivise tra il tumore e il tessuto sano di derivazione (<strong>Melan-A/MART-1, gp100, Tirosinasi</strong> nel melanoma → target d'attacco con rischio di vitiligine; <strong>CD19, CD20, BCMA</strong> nei linfomi B → aplasia delle cellule B normali; PSA nella prostata).</li>
                  <li><strong>Antigeni Sovraespressi:</strong> Espressi a livelli bassissimi nei tessuti normali e amplificati a dismisura nei tumori (es. recettore tirosin-chinasico <strong>HER2/neu</strong> nel 20-25% dei tumori mammari e gastrici, target di Trastuzumab).</li>
                  <li><strong>Antigeni Oncofetali:</strong> Espressi normalmente durante la vita embrionale e silenziati nell'adulto (es. <strong>CEA</strong> nei carcinomi colorettali, <strong>α-Fetoproteina AFP</strong> nell'epatocarcinoma).</li>
                </ul>
              </div>

            </div>
          </div>

        </section>

        {/* -----------------------------------------------------------------------
            SEZIONE 8.2: TME, IL CICLO CANCRO-IMMUNITÀ & CHECKPOINT (NOBEL 2018)
            ----------------------------------------------------------------------- */}
        <section id="sec-8-tme-checkpoint" className="scroll-mt-24 space-y-8">
          
          <div className="border-l-4 border-amber-500 pl-4 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
              Sezione 8.2 • Dalla Lezione 32
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              Il Ciclo Cancro-Immunità, il Microambiente Tumorale (TME) e gli Inibitori dei Checkpoint (Premio Nobel 2018)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Il ciclo in 7 fasi di Chen & Mellman; classificazione immunologica (tumori Caldi, Esclusi e Freddi); barriere cellulari e metaboliche del TME (Treg, MDSC, TAM M2, IDO-1 e PD-L1); confronto fisiologico e clinico tra asse CTLA-4 (Ipilimumab nei linfonodi) e asse PD-1/PD-L1 (Nivolumab/Pembrolizumab nei tessuti) con SHP-2 e riattivazione dei progenitori Tpex.
            </p>
          </div>

          {/* DIAGRAMMA DEL CICLO CANCRO-IMMUNITÀ */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Crosshair className="w-5 h-5 text-red-600 dark:text-red-400" />
                <span>Il Ciclo Cancro-Immunità in 7 Fasi di Chen & Mellman (2013)</span>
              </h3>
              <span className="text-xs font-mono bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 px-3 py-1 rounded font-semibold">
                Architettura Dinamica
              </span>
            </div>

            <InlineProcessFlowDiagram processId="cancer_immunity" />
          </div>

          {/* I TRE IMMUNOTIPI TUMORALI (CALDI, ESCLUSI, FREDDI) */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-500" />
              <span>La Classificazione Immunologica dei Tumori: Caldi, Esclusi e Freddi</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/20 border-2 border-emerald-400/60 dark:border-emerald-800 rounded-xl space-y-2">
                <span className="font-bold text-emerald-700 dark:text-emerald-300 font-mono text-sm block">1. Tumori Caldi (Inflamed)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Massa tumorale intensamente infiltrata da linfociti T citotossici <strong>CD8⁺ (TILs)</strong> e cellule NK. Elevata espressione di chemochine (CXCL9, CXCL10), firma dell'<strong>IFN-γ</strong> e frequente formazione di Strutture Linfoidi Terziarie (TLS).
                </p>
                <p className="text-emerald-800 dark:text-emerald-200 font-mono font-semibold">
                  Risposta all'Immunoterapia: ECCELLENTE (Target ideale per anti-PD-1).
                </p>
              </div>

              <div className="p-4 bg-amber-50/50 dark:bg-amber-950/20 border-2 border-amber-400/60 dark:border-amber-800 rounded-xl space-y-2">
                <span className="font-bold text-amber-700 dark:text-amber-300 font-mono text-sm block">2. Tumori Esclusi (Immune-Excluded)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  I linfociti T CD8⁺ vengono correttamente primed e reclutati nei vasi, ma <strong>rimangono confinati nello stroma connettivale peritumorale</strong>, incapaci di penetrare tra le cellule maligne a causa di una densa barriera di collagene eretta dai fibroblasti associati al tumore (CAF) sotto lo stimolo di <strong>TGF-β</strong>.
                </p>
                <p className="text-amber-800 dark:text-amber-200 font-mono font-semibold">
                  Strategia Terapeutica: Combinazione anti-TGF-β o anti-VEGF + anti-PD-1.
                </p>
              </div>

              <div className="p-4 bg-rose-50/50 dark:bg-rose-950/20 border-2 border-rose-400/60 dark:border-rose-800 rounded-xl space-y-2">
                <span className="font-bold text-rose-700 dark:text-rose-300 font-mono text-sm block">3. Tumori Freddi (Immune-Desert)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Totale <strong>assenza di linfociti T sia nel nido tumorale sia nello stroma periferico</strong>. Dovuta a difetti intrinseci di riconoscimento antigenico (basso carico mutazionale TMB, assenza di cDC1 BATF3⁺, mancata attivazione dell'asse cGAS-STING).
                </p>
                <p className="text-rose-800 dark:text-rose-200 font-mono font-semibold">
                  Strategia Terapeutica: Vaccini a neoantigeni, radioterapia locale o virus oncolitici per "riscaldare" il tumore.
                </p>
              </div>
            </div>
          </div>

          {/* SIMULATORE INTERATTIVO CHECKPOINT BLOCKADE */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Simulatore Interattivo: Immune Checkpoint Blockade (CTLA-4 vs PD-1/PD-L1)</span>
            </h3>
            <InteractiveCheckpointBlockade />
          </div>

          {/* CONFRONTO FISIOLOGICO E FARMACOLOGICO CTLA-4 VS PD-1 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <span>Premio Nobel per la Medicina 2018: James P. Allison & Tasuku Honjo</span>
              </h3>
              <span className="text-xs font-mono bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full font-bold">
                Rivoluzione Immunologica
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <span className="font-bold text-indigo-600 dark:text-indigo-400 font-mono text-sm block">
                  Asse CTLA-4: Il Freno Centrale nel Linfonodo (James Allison)
                </span>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>CTLA-4 (CD152):</strong> omologo di CD28 immagazzinato nelle vescicole intracellulari dei linfociti T naïve, traslocato in membrana dopo l'attivazione. Possiede un'affinità 20–100 volte superiore rispetto a CD28 per i ligandi <strong>CD80 (B7-1) e CD86 (B7-2)</strong> sulle APC:
                </p>
                <ul className="space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside text-xs">
                  <li><strong>Sede d'Azione:</strong> Linfonodo drenante durante la fase di priming iniziale.</li>
                  <li><strong>Farmaci:</strong> <strong>Ipilimumab</strong> (anti-CTLA-4 IgG1 umana); Tremelimumab.</li>
                  <li><strong>Meccanismo Terapico:</strong> Rimuove il freno costimolatorio permettendo l'attivazione di cloni T anche a bassa avidità (espande la diversità del repertorio T). Inoltre, l'isomero IgG1 induce la <strong>deplezione selettiva delle cellule Treg intra-tumorali</strong> che sovraesprimono CTLA-4 mediante citotossicità cellulare anticorpo-dipendente (ADCC) mediata dai macrofagi del TME!</li>
                  <li><strong>Tossicità Cliniche (irAEs):</strong> Elevata incidenza di colite autoimmune grave, ipofisite/panipopituitarismo, epatite e dermatite.</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <span className="font-bold text-red-600 dark:text-red-400 font-mono text-sm block">
                  Asse PD-1 / PD-L1: Il Freno Periferico nel Microambiente (Tasuku Honjo)
                </span>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>PD-1 (CD279):</strong> espresso sulla membrana dei linfociti T, B e NK dopo stimolazione prolungata. Quando riconosce i ligandi <strong>PD-L1 (CD274)</strong> o <strong>PD-L2 (CD273)</strong>:
                </p>
                <ul className="space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside text-xs">
                  <li><strong>Meccanismo Molecolare:</strong> La coda citoplasmatica di PD-1 contiene motivi <strong>ITIM e ITSM</strong>: dopo fosforilazione, reclutano la tirosina-fosfatasi <strong>SHP-2</strong>. SHP-2 defosforila selettivamente le molecole a valle di CD28 e della catena CD3ζ del TCR, spegnendo la proliferazione e la secrezione di citochine.</li>
                  <li><strong>Farmaci Anti-PD-1:</strong> <strong>Nivolumab, Pembrolizumab, Cemiplimab</strong>.</li>
                  <li><strong>Farmaci Anti-PD-L1:</strong> <strong>Atezolizumab, Durvalumab, Avelumab</strong>.</li>
                  <li><strong>Le Cellule Tpex (TCF-1⁺):</strong> Gli anti-PD-1 non agiscono sui linfociti T terminalmente esausti irreversibili, ma risvegliano selettivamente i <strong>progenitori T-exhausted (Tpex TCF-1⁺)</strong>, inducendone una massiccia espansione proliferativa con produzione di nuovi CTL effettori.</li>
                </ul>
              </div>
            </div>
          </div>

        </section>

        {/* -----------------------------------------------------------------------
            SEZIONE 8.3: TERAPIE ADOTTIVE, CAR-T CELLS (GEN 1ª-4ª) & TOSSICITÀ (CRS)
            ----------------------------------------------------------------------- */}
        <section id="sec-8-cart-adoptive" className="scroll-mt-24 space-y-8">
          
          <div className="border-l-4 border-indigo-600 pl-4 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
              Sezione 8.3 • Dalla Lezione 32
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              Terapie Cellulari Adottive: Linfociti Infiltranti il Tumore (TILs) e Ingegneria dei CAR-T
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Architettura molecolare chimerica (scFv, cerniera, transmembrana e domini di segnalazione); evoluzione delle 4 generazioni di CAR (confronto metabolico tra CD28 glicolitico e 4-1BB mitocondriale); indicazioni ematologiche approvate (anti-CD19 e anti-BCMA); aplasia delle cellule B e gestione salvavita della Sindrome da Rilascio Citochinico (CRS) via Tocilizumab e neurotossicità ICANS.
            </p>
          </div>

          {/* STRUTTURA DEL RECETTORE CHIMERICO CAR E LE 4 GENERAZIONI */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Zap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Architettura Molecolare del CAR (Chimeric Antigen Receptor) & Le 4 Generazioni</span>
            </h3>

            <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
              Il recettore CAR è una proteina di fusione artificiale chimerica disegnata geneticamente per combinare la <strong>specificità anticorpale per antigeni di superficie nativi non processati</strong> (senza necessità di presentazione su MHC, superando così l'evasione tumorale da perdita di HLA-I o β2-microglobulina) con la <strong>potenza litica dei linfociti T citotossici</strong>:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              
              <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-slate-600 dark:text-slate-400 font-mono text-sm block">1ª Generazione (Storica)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  scFv + cerniera + solo endodominio <strong>CD3ζ</strong> (3 motivi ITAM).
                </p>
                <p className="text-slate-500 text-xs">
                  Fornisce solo il Segnale 1: in assenza di costimolazione in vivo le cellule andavano incontro a rapida anergia ed apoptosi entro pochi giorni, risultando clinicamente inefficaci.
                </p>
              </div>

              <div className="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border-2 border-indigo-500 space-y-2">
                <span className="font-bold text-indigo-700 dark:text-indigo-300 font-mono text-sm block">2ª Generazione (Standard Clinico)</span>
                <p className="text-slate-700 dark:text-slate-200 font-medium">
                  scFv + <strong>1 dominio costimolatorio (CD28 oppure 4-1BB/CD137)</strong> + CD3ζ.
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  Tutti i farmaci approvati da FDA ed EMA (<strong>Tisagenlecleucel, Axicabtagene ciloleucel, Ide-cel, Cilta-cel</strong>) appartengono alla 2ª generazione! Segnale 1 + Segnale 2 sincronizzati.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-purple-600 dark:text-purple-400 font-mono text-sm block">3ª Generazione</span>
                <p className="text-slate-600 dark:text-slate-300">
                  scFv + <strong>2 domini costimolatori in tandem (CD28 + 4-1BB o OX40)</strong> + CD3ζ.
                </p>
                <p className="text-slate-500 text-xs">
                  Amplifica la segnalazione intracellulare; attualmente in fase di sperimentazione per massimizzare la persistenza senza innescare tossicità eccessive.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-rose-600 dark:text-rose-400 font-mono text-sm block">4ª Generazione (TRUCKs)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  CAR di 2ª gen armato con un <strong>cassette trascrizionale per citochine (IL-12, IL-15, IL-18)</strong> inducibile da NFAT.
                </p>
                <p className="text-slate-500 text-xs">
                  All'ingaggio dell'antigene rilascia localmente la citochina nel TME per "riscaldare" i tumori solidi e reclutare macrofagi innati e cellule NK.
                </p>
              </div>

            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border-l-4 border-indigo-600 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong>Confronto Funzionale e Metabolico d'Esame: CD28 vs 4-1BB (CD137):</strong>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div>
                  <strong className="text-indigo-600 dark:text-indigo-400">CAR con dominio CD28 (es. Axicabtagene):</strong> Inducono una segnalazione a rapida cinetica fondata sulla glicolisi aerobica. Espansione clonale esplosiva e tempestiva distruzione tumorale, ma con più rapido esaurimento (persistenza da settimane a pochi mesi) e picco precoce di CRS.
                </div>
                <div>
                  <strong className="text-purple-600 dark:text-purple-400">CAR con dominio 4-1BB (es. Tisagenlecleucel):</strong> Inducono una cinetica più graduale fondata sulla biogenesi mitocondriale e fosforilazione ossidativa (OXPHOS). Favoriscono la differenziazione in cellule T Central Memory con <strong>persistenza a lungo termine (anni)</strong> e profilo di sicurezza più gestibile.
                </div>
              </div>
            </div>
          </div>

          {/* GESTIONE CLINICA DELLE TOSSICITÀ: APLASIA B, SINDROME DA RILASCIO CITOCHINICO (CRS) E ICANS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <div className="bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-500 rounded-2xl p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <AlertTriangle className="w-6 h-6 animate-pulse" />
                <h3 className="text-base font-bold">Sindrome da Rilascio Citochinico (CRS) & Trattamento Salvavita</h3>
              </div>
              <p className={`text-slate-700 dark:text-slate-200 font-medium ${proseSizeClass}`}>
                La CRS è la tossicità sistemica acuta più frequente e potenzialmente fatale della terapia con CAR-T:
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-900/80 p-3.5 rounded-xl border border-rose-300 dark:border-rose-800">
                <p><strong>Fisiopatologia della Tempesta Citochinica:</strong></p>
                <p>
                  L'incontro tra milioni di cellule CAR-T e l'antigene neoplastico scatena un rilascio massivo di <strong>IFN-γ e GM-CSF</strong> da parte delle CAR-T. Queste citochine <strong>iperattivano i monociti e macrofagi dell'ospite</strong> nel midollo e nel sangue, inducendoli a secernere quantità torrenziali di <strong>IL-6, IL-1β e TNF-α</strong>.
                </p>
                <p><strong>Clinica:</strong> Febbre ipertermica (&gt;40°C), vasoplegia con shock ipotensivo refrattario, sindrome da leak capillare con edema polmonare e insufficienza multiorgano.</p>
                <p className="font-bold text-rose-700 dark:text-rose-300">
                  Farmaco di Scelta Assoluta: TOCILIZUMAB (anticorpo monoclonale umanizzato anti-recettore di IL-6). Somministrato tempestivamente, spegne la cascata infiammatoria entro poche ore senza compromettere la funzionalità delle cellule CAR-T!
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Neurotossicità (ICANS) & Aplasia delle Cellule B (On-Target/Off-Tumor)</span>
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-slate-100 font-mono block">ICANS (Immune effector Cell-Associated Neurotoxicity Syndrome):</span>
                  <p className="text-slate-600 dark:text-slate-300">
                    Complicanza neurologica (afasia, confusione, tremori, convulsioni, edema cerebrale) dovuta alla rottura della barriera emato-encefalica indotta da <strong>IL-1β, TNF-α e citochine mieloidi</strong>. A differenza della CRS, Tocilizumab non attraversa la BBB: la terapia di prima scelta per l'ICANS è rappresentata da <strong>corticosteroidi ad alte dosi (desametasone)</strong> e l'antagonista recettoriale di IL-1 <strong>Anakinra</strong>.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-slate-100 font-mono block">Aplasia delle Cellule B & Terapia con IVIG:</span>
                  <p className="text-slate-600 dark:text-slate-300">
                    Poiché l'antigene bersaglio <strong>CD19</strong> è espresso costitutivamente su tutta la linea dei linfociti B normali (dallo stadio pre-B fino alla plasmacellula), le CAR-T distruggono sistematicamente sia le cellule neoplastiche sia i linfociti B sani (tossicità <em>on-target / off-tumor</em>). Il paziente sviluppa ipogammaglobulinemia cronica permanente, gestita con infusioni periodiche mensili di immunoglobuline umane per via endovenosa (<strong>IVIG</strong>).
                  </p>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* -----------------------------------------------------------------------
            SEZIONE 8.4: QUADRO DELLE IMMUNODEFICIENZE PRIMITIVE (PID) & TREC
            ----------------------------------------------------------------------- */}
        <section id="sec-8-pid-trec" className="scroll-mt-24 space-y-8">
          
          <div className="border-l-4 border-emerald-600 pl-4 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
              Sezione 8.4 • Ripasso Trasversale & Diagnostica Neonatale
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              Quadro Sinottico delle Immunodeficienze Primitive (PID) e Screening Neonatale Universale con TREC
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Tavola trasversale integrata di tutte le PID (SCID, XLA di Bruton, DiGeorge, Wiskott-Aldrich, Atassia-Teleangectasia, CGD, LAD-1/2, Deficit selettivo di IgA); biologia molecolare dei TREC (T-cell Receptor Excision Circles) e KREC: quantificazione dei Recent Thymic Emigrants su goccia di sangue essiccato (Guthrie card) per prevenire infezioni letali da vaccini vivi attenuati.
            </p>
          </div>

          {/* TAVOLA SINOTTICA COMPLETA DELLE IMMUNODEFICIENZE PRIMITIVE */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <BookmarkCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Tavola Trasversale Completa: Inborn Errors of Immunity (PID)</span>
              </h3>
              <span className="text-xs font-mono bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded font-semibold">
                Sintesi Clinica d'Esame
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 font-mono border-b border-slate-200 dark:border-slate-800">
                    <th className="p-2.5">Patologia / Fenotipo</th>
                    <th className="p-2.5">Gene Mutato & Trasmissione</th>
                    <th className="p-2.5">Difetto Molecolare & Cellulare</th>
                    <th className="p-2.5">Clinica & Infezioni Tipiche</th>
                    <th className="p-2.5">Approccio Terapeutico</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-2.5 font-bold text-red-600 font-mono">X-SCID (T⁻ B⁺ NK⁻)</td>
                    <td className="p-2.5 font-mono">IL2RG (CD132)<br/><span className="text-slate-500">X-linked</span></td>
                    <td className="p-2.5">Mutazione catena γc comune dei recettori per IL-2, IL-4, IL-7, IL-9, IL-15, IL-21. Mancata maturazione T ed NK.</td>
                    <td className="p-2.5">Infezioni opportunistiche precoci da <em>Pneumocystis jirovecii</em>, CMV, Candida e diarrea cronica neonatale.</td>
                    <td className="p-2.5">Emergenza medica: isolamento sterile, HSCT o terapia genica lentivirale.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-2.5 font-bold text-red-600 font-mono">ADA-SCID (T⁻ B⁻ NK⁻)</td>
                    <td className="p-2.5 font-mono">ADA (Cromosoma 20)<br/><span className="text-slate-500">Autosomica Recessiva</span></td>
                    <td className="p-2.5">Deficit Adenosina Deaminasi: accumulo citotossico di deossi-ATP (dATP) con blocco della ribonucleotide reduttasi.</td>
                    <td className="p-2.5">Aplasia linfoide totale (T, B ed NK assenti); anomalie scheletriche e sordità neurosensoriale.</td>
                    <td className="p-2.5">Enzima ricombinante PEG-ADA, HSCT allogenico o terapia genica (Strimvelis).</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-2.5 font-bold text-blue-600 font-mono">XLA di Bruton (T⁺ B⁻ NK⁺)</td>
                    <td className="p-2.5 font-mono">BTK (Tirosina chinasi)<br/><span className="text-slate-500">X-linked</span></td>
                    <td className="p-2.5">Blocco differenziativo dei linfociti B allo stadio pre-B nel midollo per mancata segnalazione del pre-BCR.</td>
                    <td className="p-2.5">Assenza totale di linfociti B e immunoglobuline circolanti; infezioni batteriche piogene ricorrenti dopo i 6 mesi.</td>
                    <td className="p-2.5">Infusione permanente di immunoglobuline endovena (IVIG / SCIG) a vita.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-2.5 font-bold text-purple-600 font-mono">Sindrome di DiGeorge</td>
                    <td className="p-2.5 font-mono">Microdelezione 22q11.2<br/><span className="text-slate-500">De Novo / AD</span></td>
                    <td className="p-2.5">Mancato sviluppo della 3ª e 4ª tasca faringea: aplasia timica, assenza di paratiroidi e difetti cardiaci conotruncali.</td>
                    <td className="p-2.5">Deficit T variabile (T-low), tetania neonatale da ipocalcemia, cardiopatia congenita (tetralogia di Fallot).</td>
                    <td className="p-2.5">Trapianto di tessuto timico allogenico coltivato nelle forme complete.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-2.5 font-bold text-amber-600 font-mono">Deficit Selettivo IgA</td>
                    <td className="p-2.5 font-mono">Eziologia poligenica<br/><span className="text-slate-500">1:600 nati</span></td>
                    <td className="p-2.5">Mancata differenziazione finale delle plasmacellule secernenti IgA. Spesso asintomatica per compenso delle sIgM.</td>
                    <td className="p-2.5">Infezioni mucosali respiratorie e gastrointestinali (giardiasi), celiachia; <strong>rischio di anafilassi da emoderivati per anticorpi anti-IgA!</strong></td>
                    <td className="p-2.5">Uso esclusivo di emazie lavate o plasma privo di IgA per le trasfusioni.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-2.5 font-bold text-emerald-600 font-mono">Malattia Granulomatosa (CGD)</td>
                    <td className="p-2.5 font-mono">CYBB (gp91phox)<br/><span className="text-slate-500">X-linked / AR</span></td>
                    <td className="p-2.5">Mutazione della NADPH Ossidasi fagocitaria (NOX2): totale incapacità di generare anione superossido e H2O2.</td>
                    <td className="p-2.5">Infezioni recidivanti e ascessi da <strong>batteri catalasi-positivi</strong> (<em>S. aureus, Aspergillus, Burkholderia</em>); granulomi.</td>
                    <td className="p-2.5">Profilassi con Cotrimoxazolo, Itraconazolo, IFN-γ sottocute ed eventuale HSCT.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SCREENING NEONATALE UNIVERSALE: BIOLOGIA DEI TREC E KREC */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-900 border-2 border-emerald-300 dark:border-emerald-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Dna className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Screening Neonatale Universale con TREC e KREC su Cartoncino di Guthrie
                </h3>
              </div>
              <span className="text-xs font-mono bg-emerald-200 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded font-bold">
                Diagnostica Molecolare Pre-Sintomatica
              </span>
            </div>

            <p className={`text-slate-700 dark:text-slate-300 ${proseSizeClass}`}>
              Fino a pochi anni fa, i neonati con SCID ("Bubble Babies") morivano entro il primo anno di vita a causa di infezioni fulminanti scatenate da patogeni opportunisti o dalla somministrazione di <strong>vaccini vivi attenuati (es. BCG, Rotavirus)</strong> somministrati incautamente in assenza di diagnosi. La rivoluzione diagnostica è giunta con il dosaggio quantitativo dei <strong>TREC</strong> tramite qPCR su goccia di sangue essiccato prelevata dal tallone (cartoncino di Guthrie):
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-white dark:bg-slate-850 rounded-xl border border-emerald-200 dark:border-slate-700 space-y-2">
                <span className="font-bold text-emerald-700 dark:text-emerald-300 font-mono block">Cosa sono i TREC (T-cell Receptor Excision Circles)?</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Durante il riarrangiamento somatico V(D)J del recettore TCRα nei timociti, il locus <strong>TCRδ</strong> situato all'interno del locus TCRα viene escisso mediante scissione ed unione circolare dei segnali RSS, formando un <strong>anello di DNA circolare episomico chiuso (TREC δRec-ψJα)</strong>.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Essendo privo di origine di replicazione, il TREC <strong>non si duplica durante le divisioni mitotiche periferiche</strong>: il suo dosaggio quantitativo in PCR riflette con precisione assoluta il volume dei timociti appena generati che hanno completato con successo la maturazione timica (<em>Recent Thymic Emigrants</em>). Se i TREC sono assenti o inferiori a 25 copie/µL, il neonato ha una SCID!
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-850 rounded-xl border border-emerald-200 dark:border-slate-700 space-y-2">
                <span className="font-bold text-blue-700 dark:text-blue-300 font-mono block">I KREC per la Valutazione dei Linfociti B</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Analogamente ai TREC, i <strong>KREC (Kappa-deleting Recombination Excision Circles)</strong> sono anelli di DNA generati durante il riarrangiamento del locus delle catene leggere Igκ dei linfociti B nel midollo osseo.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  L'analisi combinata <strong>TREC + KREC</strong> consente la diagnosi precoce pre-sintomatica non solo delle SCID ma anche delle immunodeficienze umorali B-linfocitarie congenite come l'Agammaglobulinemia legata al sesso di Bruton (XLA), permettendo di avviare immediatamente la terapia sostitutiva con immunoglobuline o il trapianto di midollo salvavita prima che il bambino contragga infezioni irreversibili.
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* -----------------------------------------------------------------------
            SEZIONE 8.5: HIV-1/AIDS: VIROLOGIA, NEF, TROPISMO, CINETICA & RESERVOIR
            ----------------------------------------------------------------------- */}
        <section id="sec-8-hiv-aids" className="scroll-mt-24 space-y-8">
          
          <div className="border-l-4 border-red-600 pl-4 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-400 font-bold">
              Sezione 8.5 • Dalla Lezione 33
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              Immunodeficienze Acquisite: Biologia Molecolare di HIV-1, Evasione, Tropismo R5/X4 e Reservoir Latente
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Premio Nobel 2008 (Barré-Sinoussi & Montagnier); struttura del virione (gp120/gp41, p24, RT/IN/PR); geni e sabotaggio di Nef (downregola HLA-A/B ma risparmia HLA-C/E contro le NK); Vif vs APOBEC3G; ingresso, ansa V3 e switch R5 → X4; mutazione protettiva CCR5-Δ32; storia naturale trifasica: distruzione acuta del GALT, piroptosi mediata da Caspasi-1/IFI16 nel 95% dei CD4⁺, latenza clinica ed AIDS; classi della cART e l'enigma del provirus latente in linfociti Central Memory (emivita 44 mesi).
            </p>
          </div>

          {/* STRUTTURA DEL VIRIONE HIV-1 E TRIADE ENZIMATICA */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Bug className="w-5 h-5 text-red-600 dark:text-red-400" />
                <span>Struttura Molecolare del Virione HIV-1 (Famiglia Retroviridae, Genere Lentivirus)</span>
              </h3>
              <span className="text-xs font-mono bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 px-3 py-1 rounded font-bold">
                Premio Nobel 2008
              </span>
            </div>

            <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
              Il virione maturo di HIV-1 possiede un diametro di ~100–120 nm ed è avvolto da un envelope lipidico derivato dalla membrana della cellula ospite, costellato da <strong>14 trimeri di spike Env</strong> formati da due glicoproteine clivate da furina cellulare: <strong>gp120</strong> esterna (riconoscimento del recettore CD4 e dei corecettori) e <strong>gp41</strong> transmembrana (fusione cellulare).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-sm block">Capside & Genoma</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Capside tronco-conico formato da ~2.000 molecole della proteina <strong>p24</strong> (<em>biomarker sierico essenziale dosato nei test ELISA di 4ª generazione Ag p24 + Ab</em> che riduce il periodo finestra diagnostico a 14–18 giorni!). All'interno racchiude <strong>2 copie identiche di ssRNA(+) a singolo filamento lineare</strong> legate alla nucleocapside p7.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-red-600 dark:text-red-400 font-mono text-sm block">La Triade Enzimatica Funzionale</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Pre-impacchettata nel capside: 1) <strong>Trascrittasi Inversa (RT p66/p51)</strong>: DNA-polimerasi RNA-dipendente e DNA-dipendente con attività RNasi H; <strong>priva di proofreading esonucleasico 3'→5'</strong> (tasso di mutazione di 3 × 10⁻⁵ per nucleotide → generazione di miliardi di <em>quasi-specie</em> virali mutanti ogni giorno!). 2) <strong>Integrasi (p32)</strong>: inserisce stabilmente il cDNA provirale nel DNA dell'ospite. 3) <strong>Proteasi (p10)</strong>: taglia le poliproteine strutturali Gag e Gag-Pol per la maturazione finale del virione.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-purple-600 dark:text-purple-400 font-mono text-sm block">Geni Regolatori & Accessori</span>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Tat:</strong> trans-attivatore che lega la sequenza TAR dell'RNA nascente, potenziando di 100 volte la processività di allungamento della RNA polimerasi II. <strong>Rev:</strong> lega le sequenze RRE per consentire l'esporto nucleare degli mRNA virali non-spliced codificanti le proteine strutturali. <strong>Vpu:</strong> induce la degradazione di CD4 nel reticolo endoplasmatico e contrasta la <strong>Teterina (BST-2)</strong> consentendo il distacco del virione.
                </p>
              </div>
            </div>

            {/* IL DOPPIO SABOTAGGIO DI NEF E VIF */}
            <div className="p-4 bg-rose-50 dark:bg-rose-950/40 rounded-xl border-2 border-rose-500 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <span className="font-bold text-rose-700 dark:text-rose-300 font-mono text-sm block">
                Il Doppio Sabotaggio Evasivo di Nef & La Degradazione di APOBEC3G da parte di Vif
              </span>
              <p>
                <strong>Il Doppio Inganno di Nef:</strong> Nef lega la catena citoplasmatica di <strong>HLA-A e HLA-B</strong> promuovendone l'internalizzazione e degradazione lisosomiale: la cellula infetta diventa <em>invisibile ai linfociti citotossici CTL CD8⁺</em>. Tuttavia, se eliminasse tutte le molecole MHC-I, la cellula verrebbe immediatamente lisata dalle <strong>Cellule NK per Missing-Self</strong>. Nef opera allora una mossa geniale: <strong>risparmia selettivamente HLA-C e HLA-E sulla membrana</strong>, i quali continuano a legare i recettori inibitori KIR e CD94/NKG2A delle cellule NK, neutralizzando anche l'attacco dell'immunità innata!
              </p>
              <p>
                <strong>Vif (Viral Infectivity Factor):</strong> Nelle cellule umane sane, l'enzima innato <strong>APOBEC3G</strong> (citidina deaminasi) si incapsula nei virioni deaminando le citosine in uracili durante la trascrizione inversa, inducendo ipermutazioni letali che distruggono il genoma virale. La proteina virale <strong>Vif</strong> recluta un complesso di ubiquitina-ligasi E3 che poli-ubiquitina APOBEC3G instradandolo alla distruzione proteasomica, proteggendo il virus.
              </p>
            </div>
          </div>

          {/* MECCANISMO D'INGRESSO, SWITCH R5 -> X4 E MUTAZIONE CCR5-DELTA32 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Target className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span>Meccanismo Molecolare d'Ingresso, Tropismo R5/X4 e la Resistenza Naturale CCR5-Δ32</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-sm block">1. Aggancio Primario a CD4</span>
                <p className="text-slate-600 dark:text-slate-300">
                  La glicoproteina <strong>gp120</strong> prende contatto con il dominio immunoglobulinico extracellulare D1 del recettore <strong>CD4</strong> (espresso su linfociti T helper, monociti/macrofagi, microglia e cellule dendritiche). Questo legame induce una transizione conformazionale che sposta i domini variabili ed espone l'<strong>ansa ipervariabile V3 (V3 loop)</strong> di gp120.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-sm block">2. Incontro col Corecettore (R5 vs X4)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  L'ansa V3 legata aggancia il corecettore a 7 passaggi transmembrana (GPCR):
                </p>
                <ul className="space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside text-xs">
                  <li><strong>Ceppi R5 (M-tropici):</strong> legano <strong>CCR5</strong> (macrofagi, DC e soprattutto <strong>T CD4⁺ memory residenti nel GALT</strong>). Sono i ceppi quasi esclusivi trasmessi per via mucosale sessuale.</li>
                  <li><strong>Ceppi X4 (T-tropici):</strong> insorgono tardivamente per mutazione di carica nell'ansa V3 legando <strong>CXCR4</strong> (T naïve), accelerando il crollo sistemico verso l'AIDS.</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-sm block">3. Fusione via gp41 (Six-Helix Bundle)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Il legame al corecettore scatena l'estroflessione a molla del peptide idrofobico di fusione di <strong>gp41</strong> che penetra la membrana della cellula ospite. La proteina gp41 si ripiega su se stessa formando una struttura ad ansa trimerica (<em>six-helix bundle</em>) che fonde le membrane a pH neutro, rilasciando il capside nel citoplasma (bloccato dal peptide <strong>Enfuvirtide / T-20</strong>).
                </p>
              </div>
            </div>

            <div className="p-3 bg-slate-100 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
              <strong>La Mutazione Protettiva CCR5-Δ32 & I Casi di Guarigione Funzionale:</strong> Circa l'1% della popolazione caucasica nord-europea possiede una delezione omozigote di 32 paia di basi nel gene <em>CCR5</em> (allele <strong>CCR5-Δ32/Δ32</strong>), che produce una proteina troncata non espressa in membrana. Questi individui godono di uno stato di salute normale e sono <strong>totalmente resistenti all'infezione da ceppi R5 di HIV-1</strong>! Pazienti affetti da leucemia e HIV sottoposti a trapianto allogenico di midollo da donatori CCR5-Δ32/Δ32 (il <em>Paziente di Berlino</em> Timothy Ray Brown, il <em>Paziente di Londra</em> e il <em>Paziente di Düsseldorf</em>) hanno ottenuto la completa eradicazione funzionale del virus e la sospensione definitiva della terapia cART.
            </div>
          </div>

          {/* STORIA NATURALE TRIFASICA DELL'INFEZIONE E PATOGENESI DELLA MORTE DEI CD4 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Clock className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span>Storia Naturale Trifasica dell'Infezione & Meccanismi di Deplezione dei CD4⁺</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
              
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-red-600 dark:text-red-400 font-mono text-sm block">1. Fase Acuta (2–6 Settimane)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Picco viremico elevatissimo (10⁶ – 10⁷ copie RNA/mL nel plasma). Sindrome simil-mononucleosica acuta (febbre, linfoadenopatia, faringite, rash maculare).
                </p>
                <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg text-xs border border-red-200 dark:border-red-900">
                  <strong>La Distruzione Catastrofica del GALT:</strong> In poche settimane, oltre il <strong>70–80% di tutti i linfociti T CD4⁺ CCR5⁺ di memoria residenti nella lamina propria intestinale viene distrutto irreversibilmente</strong>. La perdita della barriera epiteliale innesca la <strong>traslocazione microbica cronica di LPS</strong>, che genera un'iperattivazione immunitaria sistemica che guiderà la progressione verso l'AIDS.
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-amber-600 dark:text-amber-400 font-mono text-sm block">2. Latenza Clinica (2–10 Anni)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  I CTL CD8⁺ specifici e gli anticorpi compaiono nel sangue (sieroconversione), abbattendo la viremia plasmatica e stabilizzando il <strong>Viral Set-Point</strong> (livello basale di replicazione virale, predittivo della velocità di progressione).
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  Il paziente è clinicamente asintomatico, ma il virus replica a ritmi vertiginosi all'interno dei centri germinativi dei linfonodi (intrappolato sulle FDC). Si assiste a una lenta e progressiva erosione della conta dei CD4⁺ circolanti (perdita di circa <strong>50–80 cellule/µL ogni anno</strong>).
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-rose-600 dark:text-rose-400 font-mono text-sm block">3. AIDS Conclamato (CD4⁺ &lt; 200/µL)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Collasso totale dell'architettura istologica linfonodale, esaurimento funzionale dei CTL e rimbalzo esponenziale della carica virale.
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  Insorgenza di infezioni opportunistiche letali (polmonite da <em>Pneumocystis jirovecii</em>, candidosi esofagea, riattivazione di CMV, <em>Toxoplasma</em> cerebrale, <em>Cryptococcus</em>) e neoplasie definenti (<strong>Sarcoma di Kaposi da HHV-8</strong>, linfomi B da EBV e cancro invasivo della cervice da HPV).
                </p>
              </div>

            </div>

            {/* BOX PIROPTOSI VS MORTE CELLULARE */}
            <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border-l-4 border-red-600 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-sm block">
                Il Paradosso della Morte dei CD4⁺: Piroptosi Mediata da Caspasi-1 ed IFI16 (95% dei Casi)
              </span>
              <p>
                Per decenni si è ritenuto che i linfociti CD4⁺ morissero unicamente per effetto citopatico litico diretto del virus o per eliminazione da parte dei CTL CD8⁺. Gli studi moderni hanno svelato che questi meccanismi spiegano appena il 5% della perdita cellulare (limitata ai linfociti attivati permissivi con infezione produttiva).
              </p>
              <p>
                Il <strong>95% dei linfociti T CD4⁺ muore per PIROPTOSI nei linfonodi</strong>: si tratta di linfociti T quiescenti in cui il virus penetra ma incontra una retrotrascrizione abortiva a causa dei bassi livelli di nucleotidi intracellulari. I frammenti incompleti di cDNA virale citosolico vengono rilevati dal sensore <strong>IFI16</strong>, che attiva il complesso inflammasoma con <strong>Caspasi-1</strong>. La Caspasi-1 cliva la <strong>Gasdermina D</strong> formando pori di membrana litici con rilascio massivo di <strong>IL-1β</strong>, scatenando una necrosi infiammatoria che richiama nuovi linfociti CD4⁺, alimentando un incendio infiammatorio auto-perpetuante!
              </p>
            </div>
          </div>

          {/* SIMULATORE 3: CINETICA TRIFASICA DELL'HIV, cART & MUTAZIONE CCR5-DELTA32 */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-lg space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-red-400" />
                <h3 className="text-base font-bold text-white">Simulatore Interattivo: Cinetica dell'Infezione da HIV-1, Biomarcatori & cART</h3>
              </div>
              <span className="text-xs font-mono bg-slate-800 px-3 py-1 rounded text-red-300 border border-slate-700">
                Virologia Clinica Dinamica
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 block">Stadio Clinico Naturale:</label>
                <div className="grid grid-cols-3 gap-1 bg-slate-800 p-1 rounded-lg">
                  <button
                    onClick={() => setSim3Phase('acute')}
                    className={`py-1.5 text-[11px] font-mono rounded ${
                      sim3Phase === 'acute' ? 'bg-red-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Acuta (2-4s)
                  </button>
                  <button
                    onClick={() => setSim3Phase('latency')}
                    className={`py-1.5 text-[11px] font-mono rounded ${
                      sim3Phase === 'latency' ? 'bg-red-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Latenza (Anni)
                  </button>
                  <button
                    onClick={() => setSim3Phase('aids')}
                    className={`py-1.5 text-[11px] font-mono rounded ${
                      sim3Phase === 'aids' ? 'bg-red-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    AIDS Conclamato
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 block">Genotipo Corecettore CCR5:</label>
                <select
                  value={sim3Ccr5Genotype}
                  onChange={(e) => setSim3Ccr5Genotype(e.target.value as any)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs font-mono text-white"
                >
                  <option value="wildtype">CCR5 Wild-Type (Normale)</option>
                  <option value="delta32_het">CCR5-Δ32 Eterozigote (Progressione lenta)</option>
                  <option value="delta32_hom">CCR5-Δ32 Omozigote (Resistente)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 block">Terapia Antiretrovirale (cART):</label>
                <button
                  onClick={() => setSim3CartActive(!sim3CartActive)}
                  className={`w-full py-2 px-3 rounded-lg text-xs font-mono font-bold border transition-all ${
                    sim3CartActive
                      ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                      : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}
                >
                  {sim3CartActive ? 'cART Attiva (INSTI + 2 NRTI)' : 'Nessuna Terapia'}
                </button>
              </div>
            </div>

            {/* Risultato Simulatore HIV */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-850 pb-2 text-xs font-mono">
                <span className="text-slate-400">Stato Immunologico & Clinico Attuale:</span>
                <span className="text-red-400 font-bold">
                  {hivMetrics.status}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block font-mono">Conta Assoluta Linfociti T CD4⁺:</span>
                  <span className="text-base font-bold text-white">{hivMetrics.cd4Count}</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block font-mono">Viremia Plasmatica (Carica Virale):</span>
                  <span className="text-base font-bold text-red-400">{hivMetrics.viralLoad}</span>
                </div>
              </div>
            </div>
          </div>

          {/* LA TERAPIA COMBINATA cART E IL MISTERO DELL'INCURABILITÀ DEL RESERVOIR LATENTE */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Pill className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span>Le 5 Classi della Terapia Antiretrovirale (cART) & La Barriera del Reservoir Latente</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-red-600 dark:text-red-400 font-mono block">1. Inibitori Ingresso</span>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Maraviroc</strong> (antagonista allosterico di CCR5); <strong>Enfuvirtide / T-20</strong> (peptide biomimetico che blocca il ripiegamento a forcina di gp41).
                </p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-blue-600 dark:text-blue-400 font-mono block">2. NRTI (Nucleosidici)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Tenofovir, Emtricitabina, Abacavir, Lamivudina</strong>. Falsi nucleotidi privi del gruppo 3'-OH che causano la terminazione prematura della catena di DNA.
                </p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-amber-600 dark:text-amber-400 font-mono block">3. NNRTI (Non-Nucl.)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Efavirenz, Rilpivirina, Doravirina</strong>. Si legano a una tasca allosterica idrofobica adiacente al sito catalitico della Trascrittasi Inversa inattivandola.
                </p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono block">4. INSTI (Integrasi)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Dolutegravir, Bictegravir, Raltegravir</strong>. Bloccano lo <em>strand transfer</em> del provirus nel genoma umano. <em>Pilastro cardine di prima linea!</em>
                </p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-purple-600 dark:text-purple-400 font-mono block">5. PI (Proteasi)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Darunavir, Atazanavir</strong> potenziati con Ritonavir. Impediscono la maturazione litica delle poliproteine strutturali generando virioni immaturi e inerti.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border-l-4 border-red-600 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-sm block">
                Perché la Terapia cART Non Può Eradicare l'HIV? Il Principio U=U e il Serbatoio di Memoria
              </span>
              <p>
                La terapia antiretrovirale combinata (cART) moderna abbatte la replicazione virale fino a rendere la carica virale plasmatica non rilevabile (&lt;20-50 copie/mL). Questo ha introdotto il principio scientifico epocale <strong>U=U (Undetectable = Untransmittable)</strong>: una persona con HIV in soppressione virologica stabile da oltre 6 mesi <em>non trasmette il virus per via sessuale</em>!
              </p>
              <p className="font-semibold text-red-700 dark:text-red-300">
                Tuttavia, la cART NON è in grado di guarire l'infezione. Il genoma virale rimane integrato come provirus a DNA trascrizionalmente silente all'interno dei <strong>Linfociti T CD4⁺ Central Memory a riposo (G₀)</strong>, macrofagi e cellule dendritiche follicolari dei linfonodi. Poiché queste cellule non producono proteine virali, non espongono epitopi su MHC-I e risultano <strong>del tutto invisibili sia ai CTL CD8⁺ sia ai farmaci antiretrovirali</strong> (che agiscono solo durante il ciclo replicativo attivo). Con un'emivita stimata di <strong>44 mesi</strong>, il reservoir impiegherebbe oltre 70 anni per estinguersi spontaneamente: se la cART viene sospesa, il provirus si riaccende entro 2-3 settimane scatenando una ripresa virale esplosiva!
              </p>
            </div>
          </div>

        </section>

        {/* -----------------------------------------------------------------------
            SEZIONE 8.6: SINTESI MASTER, QUIZ D'ESAME & FLASHCARD CUMULATIVE
            ----------------------------------------------------------------------- */}
        <section id="sec-8-verifica" className="scroll-mt-24 space-y-8">
          
          <div className="border-l-4 border-slate-600 dark:border-slate-400 pl-4 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              Sezione 8.6 • Verifica dell'Apprendimento & Compendio Finale
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              Sintesi Comparativa Master, Batteria di Quiz d'Esame e Mazzo Flashcard
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Tavola sinottica dei farmaci e bersagli molecolari del Capitolo VIII, 12 flashcards cliniche e batteria completa di quiz ufficiali d'esame con razionale per ciascuna opzione.
            </p>
          </div>

          {/* TAVOLA COMPARATIVA MASTER DEI MODULI EFFETTORI DEL CAPITOLO VIII */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookmarkCheck className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span>Tavola Sinottica Master: Bersagli Terapeutici di Onco-Immunologia & HIV</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 font-mono border-b border-slate-200 dark:border-slate-800">
                    <th className="p-3">Modulo / Disciplina</th>
                    <th className="p-3">Farmaco / Biologico</th>
                    <th className="p-3">Bersaglio Molecolare</th>
                    <th className="p-3">Meccanismo d'Azione Immunologico</th>
                    <th className="p-3">Indicazione Clinica / Rilevanza d'Esame</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-indigo-600 font-mono">Immune Checkpoint</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Ipilimumab</td>
                    <td className="p-3 font-mono">CTLA-4 (CD152)</td>
                    <td className="p-3">Blocca il freno nel linfonodo; deplezione delle Treg intratumorali via ADCC</td>
                    <td className="p-3">Melanoma, carcinoma renale e polmonare in combinazione con anti-PD-1</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-indigo-600 font-mono">Immune Checkpoint</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Nivolumab / Pembrolizumab</td>
                    <td className="p-3 font-mono">PD-1 (CD279)</td>
                    <td className="p-3">Previene il reclutamento di SHP-2 riattivando i progenitori Tpex intratumorali</td>
                    <td className="p-3">Melanoma, NSCLC, Linfoma di Hodgkin, tumori dMMR/MSI-High</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-purple-600 font-mono">Terapia Cellulare CAR-T</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Tisagenlecleucel / Axi-cel</td>
                    <td className="p-3 font-mono">CD19 di superficie</td>
                    <td className="p-3">CAR di 2ª gen (scFv + CD28/4-1BB + CD3ζ): lisi citotossica MHC-indipendente</td>
                    <td className="p-3">Leucemia Linfoblastica Acuta a cellule B (LLA-B) e Linfomi B diffusi (DLBCL)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-red-600 font-mono">Gestione Tossicità CAR-T</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Tocilizumab</td>
                    <td className="p-3 font-mono">IL-6R (recettore IL-6)</td>
                    <td className="p-3">Blocca la cascata citochinica rilasciata dai macrofagi dell'ospite nella CRS</td>
                    <td className="p-3">Farmaco salvavita di 1ª linea per Sindrome da Rilascio Citochinico Grado 2–4</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-emerald-600 font-mono">Screening PID</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100">qPCR TREC / KREC</td>
                    <td className="p-3 font-mono">Anelli episomici scartati</td>
                    <td className="p-3">Misura i timociti naïve generati (Recent Thymic Emigrants) prima delle infezioni</td>
                    <td className="p-3">Screening neonatale universale per SCID su goccia di sangue (Guthrie card)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-rose-600 font-mono">Terapia HIV (INSTI)</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Dolutegravir / Bictegravir</td>
                    <td className="p-3 font-mono">Integrasi virale (p32)</td>
                    <td className="p-3">Blocca lo strand transfer del provirus nel DNA nucleare umano</td>
                    <td className="p-3">Pilastro di 1ª linea della cART moderna ad altissima barriera genetica</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* BANCO DI PROVA D'ESAME: QUIZ SECTION UFFICIALE */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Banco di Prova d'Esame: Quiz Ufficiali delle Lezioni 32 e 33
                </h3>
              </div>
              <span className="text-xs font-mono bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 px-3 py-1 rounded-full font-semibold">
                {chapter8Questions.length} Quesiti Selezionati
              </span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Quesiti a scelta multipla con spiegazione biochimica e farmacologica dettagliata per ciascuna opzione.
            </p>

            <QuizSection 
              customQuestions={chapter8Questions} 
              lessonNumber={32}
              title="Batteria Ufficiale di Quiz d'Esame · Capitolo VIII (Onco-Immunologia & HIV/AIDS)" 
            />
          </div>

          {/* FLASHCARD PER RIPASSO ATTIVO AD ALTO RENDIMENTO */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Mazzo di Ripasso Attivo: 12 Flashcards Cliniche del Capitolo VIII
                </h3>
              </div>
              <span className="text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full">
                Spaced Repetition
              </span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Clicca su ciascuna carta per svelare il meccanismo molecolare, il biomarker o il razionale farmacologico da ripetere ad alta voce prima dell'esame orale.
            </p>

            <FlashcardDeck cards={chapter8Flashcards} />
          </div>

          {/* TRAGUARDO FINALE: COMPENDIO DELL'OPERA ACCADEMICA */}
          <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white rounded-2xl p-8 border border-red-800/40 shadow-2xl space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-red-500/20 text-red-300 border border-red-400/40 mx-auto">
              <span>Traguardo Accademico Raggiunto</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Complimenti: Hai Completato l'Intero Corso Ufficiale di Immunologia Clinica!
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Dalle origini ontogenetiche nel midollo e nel timo (Capitoli 0–2), ai recettori PRR e la biochimica citochinica JAK-STAT (Capitolo 3), dal sistema del complemento e recettori Fc (Capitolo 4), alle mucose intestinali con l'asse gut-brain e la vaccinologia razionale (Capitolo 5), fino all'ipersensibilità (Capitolo 6), i trapianti e l'autoimmunità (Capitolo 7), per giungere alla frontiera dell'immunoterapia oncologica e la virologia dell'HIV (Capitolo 8). Ora possiedi la visione molecolare integrata richiesta per eccellere all'esame orale e nella futura pratica medica.
            </p>

            <div className="pt-2">
              <span className="text-xs font-mono text-emerald-300 bg-emerald-950/60 px-4 py-2 rounded-xl border border-emerald-700/50 inline-block font-bold">
                Tutte le 33 Lezioni Universitarie Integrate in 8 Grandi Trattati Master
              </span>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
};
