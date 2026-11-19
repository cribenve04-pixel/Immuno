/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CAPITOLO V MASTER VIEW: IMMUNITÀ MUCOSALE, MICROBIOTA E ASSE INTESTINO-CERVELLO,
 * DIFESA INTEGRATA CONTRO LE INFEZIONI E VACCINOLOGIA RAZIONALE
 * 
 * Trattato accademico continuo a pagina unica privo di discontinuità d'aula.
 * Unifica integralmente tutti i contenuti, le tabelle e i simulatori di:
 * - Lezione 22: Risposta Immunitaria alle Infezioni (Batteri, Funghi, Elminti, Lebbra, Evasione)
 * - Lezione 23: Immunità Mucosale & GALT (MALT, Cellule M, Homing α4β7, sIgA e Tolleranza Orale)
 * - Lezione 24: Risposta Antivirale, Evasione Virale, Piattaforme Vaccinali, mRNA-LNP e Immunità di Gregge
 * - Lezione 25: Microbiota Commensale, Immunometabolismo SCFA e le Vie dell'Asse Intestino-Cervello
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Globe,
  Layers,
  Activity,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Zap,
  Target,
  Sparkles,
  Info,
  ChevronRight,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  Microscope,
  Stethoscope,
  Pill,
  Clock,
  Compass,
  Radio,
  Dna,
  Boxes,
  Syringe,
  BrainCircuit,
  Bug,
  Award,
  Atom,
  Droplets,
  Crosshair,
  TrendingUp,
  CheckCircle,
  Check,
  RotateCw,
  Sliders,
  HelpCircle,
  HeartPulse,
  Eye,
  Split,
  Binary,
  BookmarkCheck
} from 'lucide-react';

// Simulatori e Diagrammi Interattivi
import { InlineProcessFlowDiagram } from '../InlineProcessFlowDiagram';
import { InteractiveAntiviralStateSimulator } from '../InteractiveAntiviralStateSimulator';

// Quiz & Flashcards
import { ALL_EXAM_QUESTIONS } from '../../data/examQuestions';
import { QuizSection } from '../QuizSection';
import { FlashcardDeck } from '../FlashcardDeck';

interface Chapter5MasterViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
  initialSection?: string;
  onNavigateSection?: (sectionId: string) => void;
}

export const Chapter5MasterView: React.FC<Chapter5MasterViewProps> = ({
  isSerif = false,
  fontSize = 'normal',
  initialSection
}) => {
  const proseFontClass = isSerif ? 'font-serif' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // Domande d'esame filtrate per le lezioni del Capitolo 5 (22, 23, 24, 25)
  const chapter5Questions = useMemo(() => {
    return ALL_EXAM_QUESTIONS.filter((q) => [22, 23, 24, 25].includes(q.lessonNumber));
  }, []);

  // Flashcards cumulate del Capitolo 5 con set ad altissima resa didattico-clinica
  const chapter5Flashcards = useMemo(() => {
    return [
      {
        id: 'fc-c5-01',
        category: 'Mucosale',
        front: 'Come viene impresso il "codice postale" di homing intestinale (α4β7 e CCR9) sui linfociti nei linfonodi mesenterici?',
        back: 'Le cellule dendritiche CD103⁺ (αEβ7⁺) della lamina propria catturano gli antigeni luminali e, grazie all\'enzima RALDH2, convertono la Vitamina A alimentare in Acido Tutto-Trans Retinoico (ATRA). Nei linfonodi mesenterici (MLN) e nelle Placche di Peyer, l\'acido retinoico induce sui linfociti T e B vergini l\'espressione dell\'integrina α4β7 (che lega MAdCAM-1 sulle venule della lamina propria) e del recettore chemochinico CCR9 (che risponde a CCL25 dell\'intestino tenue).'
      },
      {
        id: 'fc-c5-02',
        category: 'Umorale Mucosale',
        front: 'Qual è il meccanismo molecolare di sintesi e transcitosi delle IgA secretorie (sIgA) tramite pIgR?',
        back: 'Le plasmacellule della lamina propria secernono IgA dimeriche unite dalla Catena J. Il dimero lega il Polymeric Immunoglobulin Receptor (pIgR) espresso sul versante basolaterale degli enterociti. Il complesso viene internalizzato per transcitosi vescicolare verso il polo apicale luminale, dove pIgR viene clivato proteoliticamente: una porzione rimane ancorata all\'anticorpo costituendo la Componente Secretoria (SC), che protegge la cerniera delle sIgA dalla degradazione delle proteasi luminali.'
      },
      {
        id: 'fc-c5-03',
        category: 'Microbiota & Metabolismo',
        front: 'Come agisce il Butirrato nell\'induzione epigenetica dei linfociti Treg colici?',
        back: 'Il Butirrato, prodotto dalla fermentazione anaerobia delle fibre (Clostridia cluster IV e XIVa, F. prausnitzii), agisce come potente inibitore delle Istone Deacetilasi (HDAC). Questo favorisce l\'iper-acetilazione dell\'istone H3 sull\'enhancer non-codificante CNS1 del locus FOXP3 nelle cellule T naïve, stabilizzando l\'espressione di FOXP3 e guidando la differenziazione massiva di Treg colici protettivi.'
      },
      {
        id: 'fc-c5-04',
        category: 'Neuro-Immune',
        front: 'Qual è il riflesso infiammatorio colinergico del nervo vago mediato dal recettore α7nAChR?',
        back: 'Gli stimoli infiammatori o metabolici attivano le fibre afferenti del nervo vago che proiettano al tronco encefalico. La risposta efferente vagale raggiunge il ganglio celiaco e attiva i neuroni del nervo splenico, che rilasciano noradrenalina nella milza. Una sottopopolazione di linfociti T memoria CD4⁺ ChAT⁺ rilascia acetilcolina (ACh), la quale lega i recettori nicotinici α7nAChR sui macrofagi splenici, inibendo la fosforilazione di NF-κB e bloccando la produzione sistemica di TNF-α.'
      },
      {
        id: 'fc-c5-05',
        category: 'Neurochimica',
        front: 'Come altera l\'infiammazione sistemica il bivio metabolico del Triptofano (Serotonina vs Chinurenine)?',
        back: 'In condizioni fisiologiche, il triptofano alimentare è utilizzato per la sintesi di serotonina (5-HT) e melatonina. Citochine infiammatorie (IFN-γ, TNF-α, IL-6) e cortisolo attivano massivamente l\'enzima IDO-1 (Indoleamina 2,3-diossigenasi) e TDO, sottraendo triptofano alla serotonina e deviandolo verso la via delle Chinurenine. Nella microglia attivata, la chinurenina viene convertita in Acido Chinolinico, potente agonista eccitotossico dei recettori NMDA neuronali correlato a neurodegenerazione e depressione maggiore.'
      },
      {
        id: 'fc-c5-06',
        category: 'Clinica Infettivologica',
        front: 'Qual è la dicotomia immunologica e clinica tra Lebbra Tubercoloide e Lebbra Lepromatosa?',
        back: 'Infezione da Mycobacterium leprae:\n• Lebbra Tubercoloide: vigorosa risposta Th1 con IL-2 e IFN-γ; macrofagi M1 attivati formano granulomi ben circoscritti, carica batterica paucibacillare minima, danno circoscritto ai tronchi nervosi periferici.\n• Lebbra Lepromatosa: deviazione disfunzionale Th2 con IL-4, IL-10 e TGF-β; macrofagi M2 inefficaci, anticorpi inutili, anergia cellulo-mediata, carica multibacillare torrenziale e lesioni cutanee destruenti diffuse.'
      },
      {
        id: 'fc-c5-07',
        category: 'Immunoevasione',
        front: 'In che modo Yersinia pestis rimodella termicamente il proprio LPS tra la pulce e l\'ospite umano?',
        back: 'A 21-27°C (nel vettore invertebrato, la pulce), Yersinia sintetizza un LPS esa-acilato che è un potente agonista di TLR4. Quando viene inoculata nell\'ospite umano a 37°C, il batterio rimodella enzimaticamente la biosintesi lipidica producendo un LPS tetra-acilato: questa forma è completamente invisibile a TLR4 e agisce addirittura da antagonista recettoriale competitivo, impedendo l\'innesco della risposta infiammatoria precoce.'
      },
      {
        id: 'fc-c5-08',
        category: 'Immunità Antielmintica',
        front: 'Qual è la cascata effettrice Th2/"weep and sweep" e l\'ADCC degli eosinofili contro i vermi intestinali?',
        back: 'Il danno epiteliale da elminti scatena allarmine (IL-33, IL-25, TSLP) attivando ILC2 e Th2. IL-4 e IL-13 stimolano le cellule caliciformi a ipersecernere muco e la muscolatura liscia a contrarsi ritmicamente ("weep and sweep" per espellere i vermi). Inoltre IL-4 guida lo switch a IgE, mentre IL-5 espande gli Eosinofili. Gli eosinofili legano la cuticola opsonizzata da IgE o IgG ed eseguono ADCC degranulando la Proteina Basica Maggiore (MBP) e l\'ECP, che perforano il tegumento del parassita.'
      },
      {
        id: 'fc-c5-09',
        category: 'Virologia',
        front: 'In cosa differiscono l\'Antigenic Drift e l\'Antigenic Shift nel virus dell\'Influenza A?',
        back: '• Antigenic Drift: accumulo progressivo di mutazioni puntiformi nei geni di Emagglutinina (HA) e Neuraminidasi (NA) a causa dell\'assenza di attività di proofreading della RNA polimerasi virale (causa delle epidemie stagionali e della necessità di aggiornare annualmente il vaccino).\n• Antigenic Shift: riassortimento genetico drastico dei segmenti di RNA tra ceppi animali (aviari, suini) e umani che co-infettano la stessa cellula, generando una proteina HA completamente nuova verso cui la popolazione mondiale è priva di immunità pregressa (innesco di pandemie storiche).'
      },
      {
        id: 'fc-c5-10',
        category: 'Vaccinologia',
        front: 'Qual è il principio della Vaccinologia Inversa (Reverse Vaccinology) ideata da Rino Rappuoli per il Meningococco B?',
        back: 'Neisseria meningitidis di sierogruppo B presenta una capsula di acido polisialico α2-8 identica a NCAM neurale umana, risultando auto-tollerata e non immunogena. La vaccinologia inversa ha sequenziato l\'intero genoma batterico analizzando in silico le sequenze predittive di proteine di superficie esposte ed epitopi conservati, identificando fHbp, NadA e NHBA, che hanno portato alla formulazione del vaccino multicomponente 4CMenB (Bexsero).'
      },
      {
        id: 'fc-c5-11',
        category: 'Vaccinologia Moderna',
        front: 'Quali sono le due scoperte biochimiche cruciali che hanno reso efficaci e sicuri i vaccini a mRNA contro SARS-CoV-2 (Nobel 2023)?',
        back: '1) La sostituzione dell\'Uridina con N1-metil-pseudouridina (m1Ψ) (Karikó e Weissman): impedisce che l\'mRNA esogeno venga degradato dai sensori intracellulari TLR7/8 e PKR/OAS prima della traduzione.\n2) La mutazione stabilizzante a due proline (mutazione 2P): blocca la proteina Spike nella conformazione conformazionale pre-fusione, massimizzando l\'esposizione degli epitopi neutralizzanti del dominio RBD.'
      },
      {
        id: 'fc-c5-12',
        category: 'Epidemiologia',
        front: 'Qual è la formula della soglia critica di immunità di gregge (Qc) e cosa implica per patogeni come il Morbillo?',
        back: 'La formula è Qc = 1 - (1 / R₀), dove R₀ è il numero di riproduzione di base. Per il virus del Morbillo, che possiede un R₀ elevatissimo compreso tra 15 e 18, la soglia critica di copertura vaccinale è Qc = 1 - (1/16) ≈ 94%. Se la percentuale di popolazione immune scende al di sotto del 94-95%, la catena di trasmissione non si interrompe e insorgono focolai epidemici che colpiscono i soggetti fragili non vaccinabili.'
      }
    ];
  }, []);

  // Sezione attiva per lo ScrollSpy della barra sticky
  const [activeSubSection, setActiveSubSection] = useState<string>('sec-5-mucosale-galt');

  // Configurazione delle 6 sezioni della barra di navigazione
  const SECTIONS_NAV = [
    { id: 'sec-5-mucosale-galt', label: '5.1 MALT, Homing & sIgA', icon: Globe },
    { id: 'sec-5-microbiota-gut-brain', label: '5.2 Microbiota & Asse Gut-Brain', icon: BrainCircuit },
    { id: 'sec-5-infezioni-batteri-funghi-elminti', label: '5.3 Batteri, Funghi, Elminti & Evasione', icon: Bug },
    { id: 'sec-5-infezioni-virus-evasione', label: '5.4 Cinetica Virale & Antiviral State', icon: Dna },
    { id: 'sec-5-vaccinologia', label: '5.5 Vaccinologia Razionale & mRNA', icon: Syringe },
    { id: 'sec-5-verifica', label: '5.6 Tavola Master & Verifica', icon: CheckCircle2 }
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
      let targetId = initialSection;
      if (initialSection === 'sec-5-risposta-infezioni') targetId = 'sec-5-infezioni-batteri-funghi-elminti';
      if (initialSection === 'sec-5-immunita-mucosale') targetId = 'sec-5-mucosale-galt';
      if (initialSection === 'sec-5-antivirale-vaccini') targetId = 'sec-5-vaccinologia';
      if (initialSection === 'sec-5-asse-gut-brain') targetId = 'sec-5-microbiota-gut-brain';

      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSubSection(targetId);
        }, 100);
      }
    }
  }, [initialSection]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSubSection(id);
    }
  };

  // ==========================================
  // STATO SIMULATORE 1: TRANSCITOSI & STATO BARRIERA GUT (L23)
  // ==========================================
  type GutBarrierState = 'eubiosis' | 'antibiotics' | 'crohn_nod2';
  const [gutBarrierState, setGutBarrierState] = useState<GutBarrierState>('eubiosis');
  const [transcytosisActive, setTranscytosisActive] = useState<boolean>(true);

  // Calcolo barriera mucosale
  let mucusLayerStatus = '';
  let panethDefensins = '';
  let igaOutcome = '';
  let clinicalImpact = '';

  if (gutBarrierState === 'eubiosis') {
    mucusLayerStatus = 'Doppio strato intatto (MUC2 fisiologico, strato interno sterile)';
    panethDefensins = 'Ottimale (HD5, HD6 e RegIIIγ prodotte fisiologicamente sotto stimolo IL-22)';
    igaOutcome = 'Produzione abbondante di sIgA dimeriche con Componente Secretoria protettiva';
    clinicalImpact = 'Omeostasi mucosale ed eubiosi. Tolleranza orale attiva verso antigeni innocui.';
  } else if (gutBarrierState === 'antibiotics') {
    mucusLayerStatus = 'Assottigliato: crollo delle specie anaerobie produttrici di SCFA';
    panethDefensins = 'Depauperata per assenza di stimolazione microbica commensale basale';
    igaOutcome = 'Ridotta secrezione luminale di sIgA';
    clinicalImpact = 'Rischio di proliferazione opportunistica da Clostridioides difficile e leaky gut transitorio.';
  } else {
    mucusLayerStatus = 'Gravemente compromesso: disfunzione delle tight junctions epiteliali';
    panethDefensins = 'Crollo delle α-defensine da deficit di autofagia e sensing intracellulare (NOD2 KO)';
    igaOutcome = 'Alterata compartmentalizzazione con traslocazione transmurale di batteri';
    clinicalImpact = 'Infiammazione transmurale granulomatosa cronica tipica del Morbo di Crohn.';
  }

  // ==========================================
  // STATO SIMULATORE 2: MODELLO LEBBRA & EVASIONE (L22)
  // ==========================================
  type LepraPolarization = 'tuberculoide' | 'lepromatosa';
  const [lepraForm, setLepraForm] = useState<LepraPolarization>('tuberculoide');

  // ==========================================
  // STATO SIMULATORE 3: COPERTURA VACCINALE & HERD IMMUNITY (L24)
  // ==========================================
  const [selectedR0, setSelectedR0] = useState<number>(15); // Default Morbillo R0 ~ 15
  const [vaccineCoveragePct, setVaccineCoveragePct] = useState<number>(90);

  // Calcolo soglia critica Qc = 1 - (1/R0)
  const criticalThresholdPct = Math.round((1 - 1 / selectedR0) * 100);
  const isHerdImmunityAchieved = vaccineCoveragePct >= criticalThresholdPct;

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 ${proseFontClass} transition-colors duration-200`}>
      {/* ========================================================= */}
      {/* TESTATA MONUMENTALE DEL CAPITOLO V */}
      {/* ========================================================= */}
      <header className="relative border-b border-teal-200 dark:border-teal-900/60 bg-gradient-to-br from-teal-500/10 via-emerald-500/5 to-slate-50 dark:from-teal-950/40 dark:via-slate-950 dark:to-slate-950 pt-10 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-12 w-80 h-80 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
            <span className="px-2.5 py-1 rounded-md bg-teal-100 dark:bg-teal-950/80 border border-teal-300 dark:border-teal-800">
              Trattato Ufficiale di Immunologia Clinica
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 4 Ore Didattiche Complete
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5" /> Modulo di Immunità d'Organo, Infezioni & Vaccinologia
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-500 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-teal-500/20">
                V
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  Capitolo V • Barriere Mucosali, Ecosistemi Commensali & Vaccinologia
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Immunità Mucosale, Asse Intestino-Cervello, Risposta alle Infezioni e Vaccinologia Razionale
                </h1>
              </div>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
              Trattato accademico integrato su: architettura del MALT/GALT, campionamento via cellule M e DC CD103⁺, 
              imprinting dell'homing mucosale (α4β7, CCR9, target del Vedolizumab) e biologia delle sIgA secretorie con pIgR; 
              immunometabolismo del microbiota ed eubiosi mediata da SCFA (Butirrato inibitore di HDAC per i Treg colici); 
              le 7 vie bidirezionali dell'asse Microbiota-Intestino-Cervello (nervo vago e riflesso colinergico α7nAChR, serotonina enterocromaffine TPH1, bivio triptofano-chinurenine e leaky gut); 
              meccanismi di difesa integrati ed immunoevasione contro batteri extracellulari, intracellulari (paradigma tubercoloide vs lepromatoso di M. leprae, granuloma TNF-dipendente), funghi ed elminti; 
              cinetica trifasica antivirale e sabotaggio virale (HCV NS3/4A, HCMV, antigenic drift/shift); 
              vaccinologia classica, vaccinologia inversa di Rappuoli (Meningococco B 4CMenB) e rivoluzione molecolare dei vaccini a mRNA-LNP (Karikó e Weissman, Nobel 2023).
            </p>
          </div>

          {/* Badge Docenti & Lezioni Coperte */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-200/80 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-2 text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Cattedra di Riferimento:</span>
              <span className="px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 font-medium">Prof.ssa Alessandra Soriani</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-teal-700 dark:text-teal-400">
              <span className="px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950/70 border border-teal-300 dark:border-teal-800">L22</span>
              <span className="px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950/70 border border-teal-300 dark:border-teal-800">L23</span>
              <span className="px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950/70 border border-teal-300 dark:border-teal-800">L24</span>
              <span className="px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950/70 border border-teal-300 dark:border-teal-800">L25</span>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* BARRA STICKY NAVIGATION RAIL CON SCROLLSPY */}
      {/* ========================================================= */}
      <nav className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 overflow-x-auto no-scrollbar py-1 gap-2">
            <div className="flex items-center gap-1.5 flex-nowrap">
              {SECTIONS_NAV.map((sec) => {
                const IconComponent = sec.icon;
                const isActive = activeSubSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                      isActive
                        ? 'bg-teal-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span>{sec.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* ========================================================= */}
      {/* CORPO PRINCIPALE SEQUENZIALE DEL CAPITOLO V */}
      {/* ========================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">

        {/* --------------------------------------------------------- */}
        {/* SEZIONE 5.1: MALT, HOMING & sIgA */}
        {/* --------------------------------------------------------- */}
        <section id="sec-5-mucosale-galt" className="scroll-mt-16 space-y-8">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 text-xs font-mono uppercase tracking-wider">
              <Globe className="w-4 h-4" />
              <span>Sezione 5.1 • Lezione 22 & 23</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Architettura del Sistema Immunitario Mucosale (MALT/GALT), Campionamento Antigenico, Homing Intestinale e Biologia delle sIgA
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              La più vasta interfaccia immunologica dell'organismo (~300–400 m²): compartmentalizzazione induttori/effettori, transcitosi via cellule M, imprinting ATRA-dipendente dell'integrina α4β7 e neutralizzazione asintomatica mediata da sIgA dimeriche.
            </p>
          </div>

          <div className={`space-y-6 text-slate-800 dark:text-slate-200 ${proseSizeClass}`}>
            
            <p>
              Il <strong>Tessuto Linfoidale Associato alle Mucose (MALT)</strong>, e in particolare la sua componente gastroenterica 
              (<strong>GALT - Gut-Associated Lymphoid Tissue</strong>), rappresenta il più imponente distretto immunologico del corpo umano: 
              ospita oltre il <strong>70% di tutti i linfociti</strong> e produce quotidianamente più di <strong>3–5 grammi di immunoglobuline</strong> (prevalentemente IgA secretorie), 
              superando la produzione di tutti gli altri isotipi combinati. 
              La sfida biologica fondamentale del GALT è mantenere uno stato di <strong>"infiammazione fisiologica controllata"</strong>: 
              tollerare trilioni di batteri commensali e tonnellate di antigeni alimentari innocui (<strong>tolleranza orale</strong>), 
              preservando al contempo la capacità di scatenare risposte sterilizzanti fulminee contro i patogeni invasivi.
            </p>

            {/* Struttura della Barriera Intestinale */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Layers className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span>La Barriera Multistrato Fisico-Chimica ed Epiteliale</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed">
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                  <div className="font-bold text-teal-900 dark:text-teal-300 text-sm">
                    1. Doppio Strato di Muco (MUC2)
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Secreto costantemente dalle <strong>cellule caliciformi (Goblet cells)</strong>, stimolate da IL-13 (Th2) e IL-22 (ILC3/Th17). 
                    Nel colon è presente un <strong>doppio strato</strong>: uno strato esterno lasso colonizzato dal microbiota commensale, 
                    e uno <strong>strato interno adeso e compatto rigorosamente sterile</strong>, impenetrabile ai batteri grazie all'altissima densità di polimeri di mucina MUC2 e peptidi antimicrobici.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                  <div className="font-bold text-teal-900 dark:text-teal-300 text-sm">
                    2. Cellule di Paneth & Peptidi Antimicrobici
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Situate alla base delle cripte del tenue, proteggono le cellule staminali rigeneratrici <em>Lgr5⁺</em>. 
                    Secernono granuli contenenti <strong>α-defensine umane (HD5 e HD6)</strong>, lisozima, fosfolipasi A2 e la lectina battericida 
                    <strong>RegIIIγ</strong> (indotta potentemente da <strong>IL-22</strong> prodotta dalle ILC3), che uccide selettivamente i batteri Gram-positivi legando il peptidoglicano.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                  <div className="font-bold text-teal-900 dark:text-teal-300 text-sm">
                    3. Linfociti Intraepiteliali (IEL)
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Intercalati tra gli enterociti (rapporto ~1 IEL ogni 6 enterociti). Sono prevalentemente cellule citotossiche specializzate: 
                    linfociti T convenzionali CD8αβ⁺ o linfociti non convenzionali <strong>CD8αα⁺</strong> e <strong>TCR γδ⁺</strong>. 
                    Sorvegliano l'integrità dell'epitelio eliminando enterociti danneggiati o stressati che espongono MIC-A/B o CD1d.
                  </p>
                </div>
              </div>
            </div>

            {/* Siti Induttori vs Effettori e Cellule M */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Compass className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span>Siti Induttori (Placche di Peyer, Cellule M) vs Siti Effettori (Lamina Propria)</span>
              </h3>
              <p>
                Il GALT è rigidamente compartmentalizzato in due grandi territori funzionali:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                <div className="p-4 rounded-xl border border-teal-200 dark:border-teal-900 bg-teal-50/20 dark:bg-teal-950/20 space-y-2">
                  <div className="font-bold text-teal-900 dark:text-teal-300 text-sm flex items-center justify-between">
                    <span>Siti Induttori: Placche di Peyer & Cellule M</span>
                    <span className="font-mono text-teal-600">Priming & Switch</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    • <strong>Architettura:</strong> aggregati di follicoli B con centri germinativi e aree T interfollicolari nell'ileo distale, privi di vasi linfatici afferenti.
                    <br />• <strong>Epitelio Associato al Follicolo (FAE):</strong> epitelio privo di cellule di Paneth e povero di muco, contenente le <strong>Cellule M (Microfold)</strong>.
                    <br />• <strong>Funzione delle Cellule M:</strong> prive di microvilli apicali e di spesso glicocalice, presentano una profonda "tasca basolaterale" invaginata che accoglie linfociti e cellule dendritiche. Eseguono un'attiva <strong>transcitosi aspecifica di antigeni intatti, particelle e microbi interi</strong> dal lume alla cupola subepiteliale, consegnandoli direttamente alle DC residenti per il priming immunitario.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-2">
                  <div className="font-bold text-emerald-900 dark:text-emerald-300 text-sm flex items-center justify-between">
                    <span>Siti Effettori: Lamina Propria & Epitelio</span>
                    <span className="font-mono text-emerald-600">Azione Terminale</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    • <strong>Composizione:</strong> tessuto connettivo lasso distribuito sotto la membrana basale dell'intero tratto gastrointestinale.
                    <br />• <strong>Popolazioni Effettrici:</strong> densamente popolato da <strong>plasmacellule secernenti IgA dimeriche</strong>, linfociti T effettori differenziati (<strong>Th17, Th1, Th2, Treg FoxP3⁺</strong>), macrofagi tissutali fagocitari non infiammatori e mastociti mucosali.
                    <br />• <strong>Funzione:</strong> rilascio massivo di sIgA nel lume per neutralizzazione immunitaria e coordinamento dell'integrità epiteliale senza innescare infiammazione distruttiva sistemica.
                  </p>
                </div>
              </div>
            </div>

            {/* Imprinting dell'Homing: DC CD103+, RALDH2, Acido Retinoico, α4β7 e Vedolizumab */}
            <div className="p-4 rounded-xl border border-teal-300 dark:border-teal-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  Campionamento Dendritico e Imprinting del "Codice Postale" Mucosale (α4β7, CCR9 & Vedolizumab)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Le cellule dendritiche della lamina propria esprimono l'integrina <strong>CD103 (αEβ7)</strong>. 
                Catturano gli antigeni luminali attraverso tre vie principali: 1) fagocitosi dagli epiteli delle cellule M; 
                2) allungamento di dendriti transepiteliali direttamente nel lume formando giunzioni occludenti temporanee con gli enterociti; 
                3) ricezione di antigeni solubili veicolati attraverso i <strong>GAPs (Goblet cell-Associated Antigen Passages)</strong> formati dalle cellule caliciformi.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                <div className="p-3 rounded-lg bg-teal-50/40 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800">
                  <strong className="text-teal-950 dark:text-teal-200 block text-xs">La Biochimica dell'Imprinting da Acido Retinoico:</strong>
                  Le DC CD103⁺ esprimono ad alti livelli l'enzima <strong>RALDH2 (retinaldeide deidrogenasi 2)</strong>, con cui ossidano la vitamina A alimentare (retinolo) in <strong>Acido Tutto-Trans Retinoico (ATRA)</strong>. 
                  Migrando ai linfonodi mesenterici (MLN), le DC presentano l'antigene ai linfociti T e B naïve rilasciando ATRA. 
                  L'acido retinoico attiva i recettori nucleari RAR/RXR, inducendo la trascrizione selettiva dei recettori di homing intestinale:
                  <br />• <strong>Integrina α4β7:</strong> riconosce specificamente l'adressina vascolare mucosale <strong>MAdCAM-1</strong> espressa selettivamente sulle venule post-capillari della lamina propria intestinale.
                  <br />• <strong>Recettore chemochinico CCR9:</strong> guida l'extravasazione chemotattica rispondendo al gradiente di <strong>CCL25 (TECK)</strong> prodotto costitutivamente dagli enterociti del piccolo intestino (mentre nel colon e nelle ghiandole mammarie/salivari l'homing è guidato dall'asse <strong>CCR10 : CCL28</strong>).
                </div>
                <div className="p-3 rounded-lg bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800">
                  <strong className="text-emerald-950 dark:text-emerald-200 block text-xs">Applicazione Farmacologica Rivoluzionaria: Vedolizumab (Entyvio):</strong>
                  Nelle malattie infiammatorie croniche intestinali (<strong>MICI / IBD</strong>: Colite Ulcerosa e Malattia di Crohn), 
                  l'infiltrazione distruttiva di linfociti T patogeni nella mucosa intestinale è guidata dall'interazione α4β7 : MAdCAM-1. 
                  Il farmaco biotecnologico <strong>Vedolizumab</strong> è un anticorpo monoclonale umanizzato che blocca selettivamente l'integrina <strong>α4β7</strong>: 
                  impedisce l'adesione e lo stravaso dei linfociti T esclusivamente nell'intestino, <strong>senza provocare immunosoppressione sistemica</strong> o rischio di leucoencefalopatia multifocale progressiva (PML), a differenza di Natalizumab che blocca sia α4β7 che α4β1 cerebrale.
                </div>
              </div>
            </div>

            {/* Sintesi, Switch e Transcitosi delle IgA Secretorie */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Droplets className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Sintesi, Switch Isotipico e Transcitosi delle sIgA Dimeriche tramite pIgR</span>
              </h3>
              <p>
                Le IgA costituiscono la prima linea di difesa immunologica asintomatica:
              </p>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <strong className="text-slate-900 dark:text-white block font-semibold">1. Switch Verso IgA (TD vs TI):</strong>
                    • <em>Via T-Dipendente:</em> nelle Placche di Peyer, i Tfh forniscono <strong>CD40L + TGF-β</strong> (e IL-21, IL-5), guidando la ricombinazione di switch da Cμ a Cα con generazione di IgA ad alta affinità contro patogeni invasivi.
                    <br />• <em>Via T-Indipendente:</em> nella lamina propria, le DC e gli enterociti stimolati da TLR commensali rilasciano <strong>BAFF e APRIL</strong>, inducendo switch rapido a IgA polireattive a bassa affinità per contenere il microbiota commensale.
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white block font-semibold">2. Assemblaggio del Dimero con Catena J:</strong>
                    Nelle plasmacellule della lamina propria, due monomeri di IgA vengono uniti covalentemente a livello delle porzioni Fc da un piccolo polipeptide ricco di cisteine chiamato <strong>Catena J (Joining Chain, 15 kDa)</strong>. 
                    La presenza della catena J è il requisito conformazionale obbligatorio per il docking al recettore pIgR.
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white block font-semibold">3. Transcitosi Epiteliale & Componente Secretoria:</strong>
                    Il dimero lega il recettore <strong>pIgR (Polymeric Ig Receptor)</strong> sul polo basolaterale dell'enterocita. 
                    Il complesso viene endocitato e trasportato in vescicole transcitotiche verso il polo apicale luminale. 
                    Qui pIgR viene clivato: una porzione extracellulare rimane ancorata all'anticorpo costituendo la <strong>Componente Secretoria (SC)</strong>, formando la <strong>sIgA (IgA secretoria)</strong> matura.
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <strong className="text-blue-900 dark:text-blue-300 block">Ruolo Protetto della Componente Secretoria (SC):</strong>
                    La SC avvolge fisicamente la regione cerniera delle IgA schermandola dagli enzimi proteolitici intraluminali (tripsina, chimotripsina) e conferisce proprietà idrofiliche cariche che consentono alla sIgA di ancorarsi stabilmente al gel di muco (<strong>Immune Exclusion</strong>: neutralizzazione di tossine e batteri nel muco, impedendone l'adesione agli enterociti senza attivare la cascata distruttiva del complemento o reclutare neutrofili).
                  </div>
                  <div>
                    <strong className="text-blue-900 dark:text-blue-300 block">Dicotomia IgA1 vs IgA2:</strong>
                    • <strong>IgA1:</strong> cerniera allungata (13 amminoacidi ricchi di prolina e serina), flessibile ma vulnerabile alle <em>IgA1-proteasi</em> batteriche (es. <em>S. pneumoniae</em>, <em>N. meningitidis</em>, <em>H. influenzae</em>); prevale nel siero e nel tenue.
                    <br />• <strong>IgA2:</strong> cerniera corta priva del sito di taglio proteasico, intrinsecamente resistente alle proteasi; domina nel colon dove la carica batterica è massima.
                  </div>
                </div>
              </div>
            </div>

            {/* Tolleranza Orale */}
            <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-2 text-xs sm:text-sm">
              <div className="font-bold text-emerald-950 dark:text-emerald-200 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Basi Molecolari della Tolleranza Orale</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                La somministrazione enterica di proteine non replicanti o di commensali induce attivamente uno stato di non-reattività immunologica periferica sistemica: 
                le DC CD103⁺ della mucosa digeriscono gli antigeni innocui e, in un ambiente ricco di <strong>TGF-β costitutivo, IL-10 e acido retinoico</strong>, 
                non esprimono co-stimolazione CD80/CD86 infiammatoria. Nei linfonodi mesenterici promuovono la differenziazione selettiva di <strong>linfociti T regolatori inducibili (iTreg FoxP3⁺)</strong> 
                e di cellule <strong>Tr1 secernenti IL-10</strong>. Se la dose antigenica è massiva, si osserva anergia clonale o delezione apoptotica dei cloni reattivi. 
                Il fallimento della tolleranza orale sta alla base dell'eziopatogenesi della <strong>Celiachia</strong> (ipersensibilità al glutine/gliadina deamidata da transglutaminasi associata a HLA-DQ2/DQ8) e delle allergie alimentari (es. arachidi, latte).
              </p>
            </div>

            {/* Simulatore Barriera Mucosale */}
            <div className="p-5 rounded-2xl border border-teal-300 dark:border-teal-800/80 bg-gradient-to-br from-teal-500/5 via-emerald-500/5 to-slate-100/50 dark:from-teal-950/20 dark:to-slate-900/50 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-teal-200 dark:border-teal-800/60 pb-3">
                <div className="flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Laboratorio Interattivo: Omeostasi della Barriera Intestinale ed Eubiosi
                  </h3>
                </div>
                <span className="text-xs font-mono text-teal-700 dark:text-teal-400 font-bold">
                  Simulatore Fisiopatologico del GALT
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Stato Fisiopatologico dell'Ospite:</label>
                  <select
                    value={gutBarrierState}
                    onChange={(e) => setGutBarrierState(e.target.value as GutBarrierState)}
                    className="w-full mt-1 p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium"
                  >
                    <option value="eubiosis">Eubiosi Fisiologica (Microbiota integro, alta fibra alimentare)</option>
                    <option value="antibiotics">Post-Terapia Antibiotica ad Ampio Spettro (Disbiosi iatrogena)</option>
                    <option value="crohn_nod2">Morbo di Crohn (Mutazione loss-of-function NOD2 / Deficit defensine Paneth)</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Transcitosi sIgA via pIgR:</label>
                  <button
                    onClick={() => setTranscytosisActive(!transcytosisActive)}
                    className={`w-full mt-1 p-2 rounded-lg font-bold border transition-colors ${
                      transcytosisActive
                        ? 'bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border-teal-300'
                        : 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border-rose-300'
                    }`}
                  >
                    {transcytosisActive ? 'Attiva (Secrezione luminale sIgA fisiologica)' : 'Deficitaria (Deficit selettivo di IgA / pIgR bloccato)'}
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-500 block">Stato del Muco MUC2:</span>
                    <strong className="text-teal-700 dark:text-teal-300">{mucusLayerStatus}</strong>
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-500 block">Attività Cellule di Paneth:</span>
                    <strong className="text-slate-900 dark:text-white font-mono">{panethDefensins}</strong>
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-500 block">Comparto sIgA Luminali:</span>
                    <strong className="text-blue-600 dark:text-blue-400">{transcytosisActive ? igaOutcome : 'Crollo sIgA luminali'}</strong>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
                  <Info className="w-4 h-4 text-teal-600 shrink-0" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Quadro Clinico Risultante:</span>
                  <span className="text-slate-600 dark:text-slate-300">{clinicalImpact}</span>
                </div>
              </div>
            </div>

            {/* Ponte Fisiologico 5.1 -> 5.2 */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-teal-500/10 via-emerald-500/5 to-transparent border-l-4 border-teal-500 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <span className="font-bold text-teal-800 dark:text-teal-300 uppercase tracking-wider text-[11px] block">
                Ponte Fisiologico di Transizione: Dalla Barriera Mucosale all'Ecosistema Commensale e all'Asse Neuro-Immune
              </span>
              <p>
                La barriera epiteliale e le sIgA non sono state selezionate per isolare l'organismo dal mondo esterno, 
                ma per consentire una coesistenza simbiotica pacifica con i 38 trilioni di microrganismi del microbiota commensale. 
                Nella sezione 5.2 analizziamo come i metaboliti batterici (in particolare gli <strong>acidi grassi a catena corta SCFA come il Butirrato</strong>) 
                governino l'immunometabolismo e l'epigenetica dei linfociti Treg colici, e come le <strong>7 vie bidirezionali dell'asse Microbiota-Intestino-Cervello</strong> 
                (nervo vago e riflesso colinergico α7nAChR, serotonina enterocromaffine TPH1, bivio triptofano-chinurenine e leaky gut) 
                colleghino la salute dell'intestino all'omeostasi neuropsichiatrica e alle patologie neurodegenerative.
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* SEZIONE 5.2: MICROBIOTA & ASSE GUT-BRAIN */}
        {/* --------------------------------------------------------- */}
        <section id="sec-5-microbiota-gut-brain" className="scroll-mt-16 space-y-8">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <BrainCircuit className="w-4 h-4" />
              <span>Sezione 5.2 • Lezione 25</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Microbiota Commensale, Metaboliti Immunomodulanti (SCFA) e le 7 Vie dell'Asse Microbiota-Intestino-Cervello
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Dall'immunometabolismo del butirrato (inibitore di HDAC per l'espansione dei Treg colici) alla comunicazione bidirezionale: nervo vago e riflesso colinergico α7nAChR, serotonina enterocromaffine TPH1, il bivio metabolico triptofano-chinurenine e l'endotossiemia da leaky gut.
            </p>
          </div>

          <div className={`space-y-6 text-slate-800 dark:text-slate-200 ${proseSizeClass}`}>
            
            {/* Eubiosi vs Disbiosi & Ontogenesi */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Boxes className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Eubiosi vs Disbiosi e la Finestra Critica Neonatale</span>
              </h3>
              <p>
                Il microbiota umano comprende oltre 1000 specie batteriche dominate da quattro phyla: 
                <strong>Firmicutes (60–70%)</strong>, <strong>Bacteroidetes (20–30%)</strong>, <em>Actinobacteria</em> e <em>Proteobacteria</em>. 
                L'ontogenesi del microbiota attraversa una <strong>finestra temporale critica nei primi 1000 giorni di vita</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed">
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1.5">
                  <strong className="text-emerald-900 dark:text-emerald-300 block font-semibold text-xs">Modalità di Parto:</strong>
                  Il parto vaginale espone il neonato al microbiota materno vaginale e fecale (<em>Lactobacillus</em>, <em>Bifidobacterium</em>), 
                  mentre il parto cesareo seleziona batteri cutanei ed ospedalieri (<em>Staphylococcus</em>, <em>Enterococcus</em>), 
                  associandosi epidemiologicamente a un rischio aumentato di asma, allergie e obesità infantile.
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1.5">
                  <strong className="text-emerald-900 dark:text-emerald-300 block font-semibold text-xs">Oligosaccaridi del Latte (HMO):</strong>
                  Gli <em>Human Milk Oligosaccharides</em> (HMO) sono zuccheri complessi indigeribili dal neonato; sono stati selezionati dall'evoluzione per nutrire 
                  esclusivamente <strong>Bifidobacterium infantis</strong>, che metabolizza gli HMO rilasciando SCFA, acidificando il lume e impedendo l'attecchimento di patogeni.
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1.5">
                  <strong className="text-emerald-900 dark:text-emerald-300 block font-semibold text-xs">Ipotesi dell'Igiene ("Old Friends"):</strong>
                  L'educazione dei linfociti Treg e l'inibizione delle risposte allergiche Th2/IgE richiedono l'esposizione precoce a una vasta biodiversità di microrganismi commensali ancestrali. 
                  L'eccessiva igienizzazione urbana e l'abuso antibiotico precoce riducono la complessità tassonomica predisponendo ad autoimmunità.
                </div>
              </div>
            </div>

            {/* Immunometabolismo SCFA & Butirrato come Inibitore HDAC */}
            <div className="p-4 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/30 dark:bg-emerald-950/20 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  Immunometabolismo degli Acidi Grassi a Catena Corta (SCFA) e Controllo Epigenetico dei Treg
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Gli <strong>Acidi Grassi a Catena Corta (SCFA: Acetato C2, Propionato C3, Butirrato C4)</strong> sono i principali metaboliti 
                derivati dalla fermentazione batterica anaerobia dei carboidrati complessi e delle fibre alimentari non digeribili, 
                operata da ceppi specializzati quali <em>Faecalibacterium prausnitzii</em>, <em>Roseburia</em> e <em>Clostridia</em> (cluster IV e XIVa).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-emerald-200 dark:border-emerald-800 space-y-1.5">
                  <strong className="text-emerald-900 dark:text-emerald-300 block text-xs">Il Butirrato come Carburante Energetico e Inibitore HDAC:</strong>
                  • <strong>Fonte Energetica dei Colonociti:</strong> il Butirrato fornisce oltre il 70% dell'energia richiesta dall'epitelio colico via β-ossidazione mitocondriale, consumando O₂ locale e mantenendo l'<strong>ipossia fisiologica profonda (&lt;1% O₂)</strong> luminale, indispensabile per la sopravvivenza dei batteri anaerobi stretti.
                  <br />• <strong>Inibizione Epigenetica delle HDAC:</strong> il Butirrato (e il Propionato) è un potente <strong>inibitore pan-enzimatico delle Istone Deacetilasi (HDAC di classe I e II)</strong>. 
                  Inibendo la rimozione dei gruppi acetile, provoca l'iper-acetilazione dell'istone H3 a livello dell'enhancer non codificante <strong>CNS1 del locus FOXP3</strong> nei linfociti T CD4⁺ naïve, promuovendo la differenziazione e la stabilità fenotipica dei <strong>linfociti Treg colici</strong>.
                </div>
                <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-emerald-200 dark:border-emerald-800 space-y-1.5">
                  <strong className="text-emerald-900 dark:text-emerald-300 block text-xs">Segnalazione Recettoriale GPCR degli SCFA:</strong>
                  Gli SCFA legano recettori di membrana a 7 domini transmembrana accoppiati a proteine G:
                  <br />• <strong>GPR43 (FFAR2)</strong> e <strong>GPR41 (FFAR3):</strong> espressi su neutrofili, macrofagi e cellule enteroendocrine (cellule L); stimolano la secrezione di <strong>GLP-1</strong> e <strong>PYY</strong> (regolazione metabolica e del senso di sazietà) e inibiscono la chemiotassi neutrofila aberrante.
                  <br />• <strong>GPR109A (recettore per niacina/butirrato):</strong> espresso sulle DC della lamina propria e sugli enterociti, stimola la secrezione di <strong>IL-10</strong> e <strong>Aldeide Deidrogenasi (RALDH)</strong>, potenziando la tolleranza orale.
                  <br />• <em>Nota su SFB:</em> i <em>Segmented Filamentous Bacteria</em> (SFB) aderiscono all'epitelio dell'ileo inducendo la differenziazione fisiologica dei linfociti <strong>Th17</strong> protettivi.
                </div>
              </div>
            </div>

            {/* LE 5 GRANDI VIE DELL'ASSE MICROBIOTA-INTESTINO-CERVELLO */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>Le Vie di Comunicazione dell'Asse Microbiota-Intestino-Cervello (Gut-Brain Axis)</span>
              </h3>
              <p>
                Il microbiota enterico e il sistema nervoso centrale comunicano in modo bidirezionale attraverso una fitta rete neuroendocrina, immunitaria e metabolica:
              </p>

              {/* INCLUSIONE DEL DIAGRAMMA UFFICIALE InlineProcessFlowDiagram (processId="gut_brain") */}
              <div className="pt-1 pb-3">
                <InlineProcessFlowDiagram 
                  processId="gut_brain" 
                  title="Diagramma Interattivo: Le Vie Bidirezionali dell'Asse Microbiota-Intestino-Cervello"
                  subtitle="Dall'eubiosi luminale e stimolazione afferente vagale alla neuroinfiammazione sistemica da Leaky Gut"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                
                {/* 1. Via Neurale Diretta e Riflesso Colinergico */}
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                  <div className="font-bold text-purple-950 dark:text-purple-200 text-sm flex items-center justify-between">
                    <span>1. Nervo Vago & Riflesso Colinergico α7nAChR</span>
                    <span className="font-mono text-purple-600 text-[10px]">Autostrada Neurale</span>
                  </div>
                  <p>
                    L'<strong>80–90% delle fibre del nervo vago è costituito da fibre sensitive afferenti</strong>: i loro terminali nella lamina propria rilevano SCFA, GLP-1/PYY rilasciati dalle cellule enteroendocrine e citochine locali, proiettando al Nucleo del Tratto Solitario (NTS) nel tronco cerebrale.
                    <br />• <strong>Riflesso Infiammatorio Colinergico Efferente:</strong> dal tronco encefalico, fibre efferenti attivano il ganglio celiaco e il nervo splenico. Nella milza, il rilascio di noradrenalina attiva una popolazione specializzata di <strong>linfociti T CD4⁺ ChAT⁺</strong> che secernono <strong>Acetilcolina (ACh)</strong>.
                    <br />• L'acetilcolina lega selettivamente i recettori nicotinici <strong>α7nAChR</strong> sui macrofagi splenici e tissutali, <strong>inibendo la traslocazione nucleare di NF-κB e sopprimendo la sintesi sistemica di TNF-α, IL-1β e IL-6</strong>.
                  </p>
                </div>

                {/* 2. Sistema Nervoso Enterico (ENS) e Neuro-Immunità */}
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                  <div className="font-bold text-purple-950 dark:text-purple-200 text-sm flex items-center justify-between">
                    <span>2. Sistema Nervoso Enterico & Interazioni Muscolari</span>
                    <span className="font-mono text-purple-600 text-[10px]">Il Secondo Cervello</span>
                  </div>
                  <p>
                    L'ENS contiene oltre 500 milioni di neuroni (plessi mioenterico di Auerbach e sottomucoso di Meissner). 
                    I <strong>macrofagi residenti della muscularis externa</strong> sono a contatto anatomico intimo con i neuroni enterici: 
                    in risposta ai segnali del microbiota, i macrofagi secernono <strong>BMP2 (Bone Morphogenetic Protein 2)</strong>, che modula l'eccitabilità neuronale e la motilità peristaltica; 
                    in cambio, i neuroni enterici rilasciano costitutivamente il fattore di sopravvivenza <strong>CSF-1 (M-CSF)</strong> indispensabile per i macrofagi.
                  </p>
                </div>

                {/* 3. Neuroendocrino e Serotonina (5-HT) */}
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                  <div className="font-bold text-purple-950 dark:text-purple-200 text-sm flex items-center justify-between">
                    <span>3. Cellule Enterocromaffini & Serotonina (5-HT)</span>
                    <span className="font-mono text-purple-600 text-[10px]">90-95% del Pool Corporeo</span>
                  </div>
                  <p>
                    Oltre il <strong>90–95% della serotonina totale del corpo umano</strong> è sintetizzata nell'intestino dalle <strong>cellule enterocromaffini (EC)</strong> della mucosa tramite l'enzima <strong>Triptofano Idrossilasi 1 (TPH1)</strong>. 
                    La sintesi di serotonina da parte delle cellule EC è stimolata direttamente dagli SCFA (acetato e butirrato) e dagli acidi biliari secondari prodotti dal microbiota. 
                    La serotonina enterica regola la motilità, la secrezione e la sensibilità viscerale, oltre a modulare la vascolarizzazione e la funzione piastrinica.
                  </p>
                </div>

                {/* 4. Il Bivio Metabolico del Triptofano: Chinurenine vs Serotonina */}
                <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/20 dark:bg-rose-950/20 space-y-2">
                  <div className="font-bold text-rose-950 dark:text-rose-200 text-sm flex items-center justify-between">
                    <span>4. Bivio del Triptofano: Chinurenine vs Indoli</span>
                    <span className="font-mono text-rose-600 text-[10px]">Neurotossicità vs Eubiosi</span>
                  </div>
                  <p>
                    Il Triptofano (Trp) è al centro di una competizione metabolica critica:
                    <br />• <strong>In condizioni di Disbiosi / Infiammazione Sistemica:</strong> citochine pro-infiammatorie (IFN-γ, TNF-α, IL-6) e cortisolo up-regolano l'enzima <strong>IDO-1 (Indoleamina 2,3-diossigenasi)</strong>, che dirotta il triptofano nella <strong>via delle chinurenine</strong>, sottraendolo alla sintesi di serotonina. 
                    La chinurenina passa la barriera emato-encefalica (BBB): nella microglia attivata viene convertita in <strong>Acido Chinolinico</strong>, potente agonista eccitotossico dei recettori <strong>NMDA</strong> (induce morte neuronale, stress ossidativo e quadri di depressione resistente).
                    <br />• <strong>In Eubiosi:</strong> i batteri commensali (<em>Lactobacillus</em>) convertono il triptofano in <strong>derivati indolici (IAld, IPA)</strong>, potenti ligandi del recettore <strong>AhR (Aryl Hydrocarbon Receptor)</strong> che stimola le ILC3 a produrre IL-22, sigillando la barriera epiteliale.
                  </p>
                </div>
              </div>

              {/* 5. Asse HPA, Stress Cronico e Leaky Gut */}
              <div className="p-4 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50/40 dark:bg-amber-950/20 space-y-2 text-xs sm:text-sm">
                <div className="font-bold text-amber-950 dark:text-amber-200 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>5. Asse HPA, Stress Cronico, "Leaky Gut" ed Endotossiemia Metabolica</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                  Lo stress psicofisico cronico attiva l'asse Ipotalamo-Ipofisi-Surrene: il rilascio di <strong>Cortisolo</strong> altera la secrezione di muco, inibisce la sintesi di sIgA e provoca la down-regulation delle proteine delle tight junctions (claudine, occludina, ZO-1), causando la sindrome dell'<strong>intestino iperpermeabile ("Leaky Gut")</strong>. 
                  Questo consente la traslocazione ematica di frammenti batterici, in particolare <strong>LPS (Endotossiemia Metabolica)</strong>. 
                  L'LPS attiva i recettori TLR4 sistemici scatenando infiammazione di basso grado a livello vascolare, endoteliale e cerebrale: 
                  le citochine pro-infiammatorie aprono la barriera emato-encefalica (BBB) e attivano la <strong>Microglia (M1)</strong>, innescando neuroinfiammazione. 
                  Questa via è oggi riconosciuta come fattore patogenetico cardine non solo nel Morbo di Parkinson (con la propagazione prion-like retrograda dei corpi di Lewy con α-sinucleina dall'intestino al tronco encefalico via nervo vago, secondo l'ipotesi di Braak), ma anche nella malattia di Alzheimer e nella Sclerosi Multipla.
                </p>
              </div>
            </div>

            {/* Ponte Fisiologico 5.2 -> 5.3 */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent border-l-4 border-emerald-500 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <span className="font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider text-[11px] block">
                Ponte Fisiologico di Transizione: Dalla Simbiosi Commensale all'Invasione Patogena
              </span>
              <p>
                Quando la barriera mucosale viene violata o quando l'organismo è aggredito da patogeni primari virulenti, 
                il sistema immunitario deve passare istantaneamente dalla tolleranza alla guerra chimico-cellulare. 
                Nella sezione 5.3 esaminiamo come la risposta immunitaria adatti specificamente i propri moduli effettori 
                contro <strong>batteri extracellulari</strong> (opsonizzazione, complemento, Th17), 
                <strong>batteri intracellulari</strong> (l'asse IL-12/IFN-γ nel granuloma tubercolare e la dicotomia tra lebbra tubercoloide e lepromatosa), 
                <strong>funghi</strong> (sensing Dectina-1/CARD9 e neutrofili) ed <strong>elminti</strong> (risposta Th2/ILC2, asse IgE-mastociti ed ADCC da eosinofili).
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* SEZIONE 5.3: INFEZIONI BATTERI, FUNGHI, ELMINTI & EVASIONE */}
        {/* --------------------------------------------------------- */}
        <section id="sec-5-infezioni-batteri-funghi-elminti" className="scroll-mt-16 space-y-8">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 text-xs font-mono uppercase tracking-wider">
              <Bug className="w-4 h-4" />
              <span>Sezione 5.3 • Lezione 22 & 23</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Risposta Immunitaria Integrata a Batteri Extracellulari, Intracellulari, Funghi ed Elminti ed Evasione Microbica
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Moduli effettori specializzati: opsonofagocitosi e Th17 per i batteri extracellulari, asse IFN-γ/M1 e granuloma TNF-dipendente per Mycobacterium tuberculosis, la dicotomia clinica Th1 vs Th2 nella lebbra, cooperazione Dectina-1/CARD9 nei funghi e citotossicità eosinofila contro gli elminti.
            </p>
          </div>

          <div className={`space-y-6 text-slate-800 dark:text-slate-200 ${proseSizeClass}`}>
            
            {/* Economia Metabolica & Fitness */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              <strong className="text-slate-900 dark:text-white block font-semibold text-sm">Economia Metabolica, ViraPAMPs e Cross-Inibizione tra Lignaggi:</strong>
              L'attivazione immunitaria impone un immenso costo energetico (proliferazione clonale, sintesi di grammi di proteine e consumo di glucosio via glicolisi aerobia). 
              L'organismo distingue microrganismi vitali e pericolosi da detriti inerti rilevando i cosiddetti <strong>ViraPAMPs (segnali di vitalità batterica)</strong>, 
              come l'mRNA batterico citosolico labile o la presenza di secrezioni di tipo III/IV. 
              Inoltre, ciascun modulo effettore inibisce attivamente gli altri lignaggi per evitare risposte caotiche (<strong>Cross-Inhibition</strong>: IFN-γ dei Th1 silenzia la differenziazione Th2 e Th17; IL-4 dei Th2 blocca lo sviluppo Th1; IL-10 e TGF-β dei Treg spengono tutti i profili infiammatori).
            </div>

            {/* Batteri Extracellulari ed Evasione */}
            <div className="space-y-3 pt-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Batteri Extracellulari (Stafilococchi, Streptococchi, Neisserie) ed Evasione Molecolare</span>
              </h3>
              <p>
                La difesa primaria poggia sulla cooperazione tra <strong>anticorpi opsonizzanti (IgG1, IgG3)</strong>, <strong>fissazione del complemento (C3b/iC3b)</strong>, 
                reclutamento massivo di neutrofili guidato dall'asse <strong>Th17 (IL-17A, IL-17F, G-CSF)</strong> e lisi osmotica MAC per i Gram-negativi.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs leading-relaxed">
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1">
                  <strong className="text-rose-900 dark:text-rose-300 block font-mono text-xs">Yersinia pestis: Termo-Rimodellamento</strong>
                  A 21–27°C (nella pulce) produce LPS esa-acilato (attivatore di TLR4); a 37°C nell'uomo rimodella l'LPS in <strong>tetra-acilato</strong>, che non attiva TLR4 e fa da antagonista competitivo.
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1">
                  <strong className="text-rose-900 dark:text-rose-300 block font-mono text-xs">Helicobacter pylori: Mimetismo TLR</strong>
                  Sintetizza un LPS ipofosforilato e modificato (1000 volte meno affine a TLR4) e possiede una flagellina mutata nei residui 89–96 che non ingaggia TLR5.
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1">
                  <strong className="text-rose-900 dark:text-rose-300 block font-mono text-xs">Streptococcus pneumoniae: 100 Sierotipi</strong>
                  Variazione antigenica della capsula polisaccaridica e reclutamento del Fattore H dell'ospite per inattivare la C3 convertasi alternativa.
                </div>
              </div>
            </div>

            {/* Batteri Intracellulari: M. tuberculosis e Paradigma della Lebbra */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Microscope className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span>Batteri Intracellulari: Il Granuloma Tubercolare e la Dicotomia Clinica della Lebbra</span>
              </h3>

              {/* Tubercolosi e Granuloma */}
              <div className="p-4 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50/40 dark:bg-amber-950/20 space-y-2 text-xs sm:text-sm">
                <div className="font-bold text-amber-950 dark:text-amber-200 flex items-center justify-between">
                  <span>Mycobacterium tuberculosis: Blocco Fagolisosomiale e Architettura del Granuloma</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-300 font-semibold">Asse IL-12 / IFN-γ / TNF-α</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                  • <strong>Meccanismo di Sopravvivenza:</strong> <em>M. tuberculosis</em> viene fagocitato dai macrofagi alveolari, ma i lipidi di parete (lipoarabinomannano LAM) bloccano l'incorporazione della pompa protonica vacuolare V-ATPasi, impedendo l'acidificazione e arrestando la fusione tra fagosoma e lisosoma allo stadio precoce Rab5⁺.
                  <br />• <strong>Attivazione Th1:</strong> le DC migrano al linfonodo drenante secernendo <strong>IL-12</strong> per polarizzare i <strong>linfociti Th1</strong>. I Th1 migrano nel polmone e rilasciano massicce quantità di <strong>IFN-γ</strong>: l'IFN-γ riattiva i macrofagi infetti, inducendo l'autofagia, il complesso NOX2 (ROS) e l'ossido nitrico sintasi inducibile (<strong>iNOS / NO</strong>), portando all'uccisione intracellulare dei bacilli.
                  <br />• <strong>Architettura del Granuloma:</strong> se i batteri non possono essere eradicati completamente, l'organismo li sigilla all'interno del <strong>Granuloma</strong>: core necrotico caseoso centrale, macrofagi epitelioidi fusi in <strong>cellule giganti multinucleate di Langhans</strong>, circondati da un fitto vallo di linfociti T CD4⁺ e CD8⁺ e un guscio fibroso di fibroblasti.
                  <br />• <strong>Rischio Clinico dei Farmaci Anti-TNF:</strong> la stabilità strutturale del granuloma dipende in modo assoluto dal <strong>TNF-α</strong> secreto dai macrofagi e dai Th1. La somministrazione di farmaci biologici inibitori del TNF-α (es. <strong>Infliximab, Adalimumab, Etanercept</strong>) scioglie l'architettura del granuloma provocando la <strong>riattivazione fulminante della Tubercolosi latente</strong> (obbligo tassativo di screening con test Mantoux o quantiFERON-TB prima di iniziare la terapia!).
                </p>
              </div>

              {/* Dicotomia della Lebbra con Simulatore */}
              <div className="p-5 rounded-2xl border border-rose-300 dark:border-rose-800/80 bg-gradient-to-br from-rose-500/5 via-amber-500/5 to-slate-100/50 dark:from-rose-950/20 dark:to-slate-900/50 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rose-200 dark:border-rose-800/60 pb-3">
                  <div className="flex items-center gap-2">
                    <Split className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      Il Paradigma Immunopatologico di Mycobacterium leprae: Lebbra Tubercoloide vs Lepromatosa
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-rose-700 dark:text-rose-400 font-bold">
                    Dicotomia Th1 / Th2 Umana
                  </span>
                </div>

                <div className="flex gap-3 text-xs">
                  <button
                    onClick={() => setLepraForm('tuberculoide')}
                    className={`flex-1 p-2.5 rounded-xl font-bold border transition-all ${
                      lepraForm === 'tuberculoide'
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                    }`}
                  >
                    Lebbra Tubercoloide (Risposta Th1 Effettiva)
                  </button>
                  <button
                    onClick={() => setLepraForm('lepromatosa')}
                    className={`flex-1 p-2.5 rounded-xl font-bold border transition-all ${
                      lepraForm === 'lepromatosa'
                        ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                    }`}
                  >
                    Lebbra Lepromatosa (Deviazione Th2 Aberrante)
                  </button>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs leading-relaxed space-y-2">
                  {lepraForm === 'tuberculoide' ? (
                    <div className="space-y-1.5 text-emerald-950 dark:text-emerald-200">
                      <div className="flex items-center justify-between font-bold text-sm">
                        <span>Forma Tubercoloide (Paucibacillare):</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">Immunità Cellulo-Mediata Efficace</span>
                      </div>
                      <p>
                        • <strong>Profilo Citochinico:</strong> predominanza assoluta di <strong>IL-2, IFN-γ e TNF-β (lignaggio Th1)</strong>.
                        <br />• <strong>Istologia:</strong> formazione di granulomi epitelioidi ben delimitati con cellule giganti di Langhans e scarsissimi batteri (forma paucibacillare).
                        <br />• <strong>Clinica:</strong> lesioni cutanee poche, ipopigmentate, anidrotiche ed anestetiche, con precoce ispessimento dei tronchi nervosi periferici. Reazione alla lepromina (Mitsuda) fortemente positiva.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-1.5 text-rose-950 dark:text-rose-200">
                      <div className="flex items-center justify-between font-bold text-sm">
                        <span>Forma Lepromatosa (Multibacillare):</span>
                        <span className="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300">Immunità Cellulare Soppressa</span>
                      </div>
                      <p>
                        • <strong>Profilo Citochinico:</strong> crollo di IFN-γ con iperespressione di <strong>IL-4, IL-5, IL-10 e TGF-β (profilo Th2 disfunzionale)</strong>.
                        <br />• <strong>Istologia:</strong> macrofagi schiumosi (cellule di Virchow) stipati all'inverosimile da globi di bacilli intracellulari vivi; assenza di granulomi strutturati.
                        <br />• <strong>Clinica:</strong> ipergammaglobulinemia massiva (anticorpi inutili che non penetrano nei macrofagi), lesioni cutanee nodulari destruenti diffuse (<em>facies leonina</em>), distruzione della cartilagine nasale, anergia cutanea alla lepromina (Mitsuda negativa).
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Infezioni Fungine ed Elminti */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              
              {/* Funghi */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                <div className="font-bold text-slate-900 dark:text-white text-sm flex items-center justify-between">
                  <span>Infezioni Fungine (Candida, Aspergillus)</span>
                  <span className="font-mono text-purple-600">Dectina-1 / Th17</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  • <strong>Sensing:</strong> il recettore lectinico C-type <strong>Dectina-1</strong> riconosce i β-1,3-glucani della parete fungina e trasduce via <strong>Syk → complesso CARD9-BCL10-MALT1</strong>, stimolando la secrezione di IL-23, IL-6 e IL-1β.
                  <br />• <strong>Modulo Effettore Th17:</strong> IL-17A e IL-17F reclutano sciami di <strong>neutrofili</strong> che degranulano enzimi e generano NETs capaci di distruggere le ife fungine extracellulari troppo voluminose per la fagocitosi. Pazienti con mutazioni di STAT3 (Sindrome di Giobbe) o CARD9 soffrono di candidiasi mucocutanea cronica (CMC) intrattabile.
                </p>
              </div>

              {/* Elminti */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                <div className="font-bold text-slate-900 dark:text-white text-sm flex items-center justify-between">
                  <span>Infezioni da Elminti (Schistosoma, Ascaris)</span>
                  <span className="font-mono text-amber-600">Th2 / IgE / Eosinofili</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  • <strong>Allarmine & ILC2:</strong> il danno cuticolare scatena il rilascio epiteliale di <strong>IL-33, IL-25 e TSLP</strong>, che attivano le <strong>ILC2</strong> e i linfociti <strong>Th2</strong> (GATA-3).
                  <br />• <strong>Weep and Sweep:</strong> IL-4 e IL-13 causano iperplasia delle cellule mucipare (muco scivoloso) e contrazione spastica muscolare intestinale per staccare il parassita.
                  <br />• <strong>ADCC Eosinofila:</strong> IL-4 induce lo switch a <strong>IgE</strong> che rivestono il parassita; gli <strong>Eosinofili</strong> (attivati da <strong>IL-5</strong>) si legano tramite recettori Fc ed eseguono una potente ADCC degranulando la <strong>Proteina Basica Maggiore (MBP)</strong>, ECP e perossidasi eosinofila sulla cuticola del verme.
                </p>
              </div>
            </div>

            {/* Ponte Fisiologico 5.3 -> 5.4 */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-rose-500/10 via-purple-500/5 to-transparent border-l-4 border-rose-500 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <span className="font-bold text-rose-800 dark:text-rose-300 uppercase tracking-wider text-[11px] block">
                Ponte Fisiologico di Transizione: Dai Patogeni Extracellulari e Parassiti all'Universo Virale
              </span>
              <p>
                Mentre i batteri e gli elminti possono essere combattuti con meccanismi litici extracellulari, 
                i virus sono parassiti intracellulari obbligati che sequestrano l'apparato trascrizionale e traduzionale della cellula ospite. 
                Nella sezione 5.4 analizziamo la <strong>cinetica trifasica dell'infezione virale</strong> (IFN-I precoce, NK intermedia, CTL CD8⁺ e anticorpi tardivi), 
                la regolazione omeostatica delle cellule Tfh da parte delle NK (scoperta della Prof.ssa Soriani) 
                e il sofisticato arsenale di <strong>immunoevasione virale</strong> (taglio di MAVS da HCV NS3/4A, sequestro TAP e retrotraslocazione MHC-I in HCMV, antigenic drift e shift dell'influenza).
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* SEZIONE 5.4: INFEZIONI VIRUS & IMMUNOE統ASIONE */}
        {/* --------------------------------------------------------- */}
        <section id="sec-5-infezioni-virus-evasione" className="scroll-mt-16 space-y-8">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs font-mono uppercase tracking-wider">
              <Dna className="w-4 h-4" />
              <span>Sezione 5.4 • Lezione 24</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Cinetica Trifasica dell'Infezione Virale, Omeostasi NK-Tfh e Strategie Molecolari di Immunoevasione Virale
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Dalla risposta innata ultrarapida (IFN-I e geni ISG: PKR, OAS/RNasi L, Mx) al contenimento delle NK e all'eradicazione citotossica CD8⁺/anticorpale, fino al sabotaggio virale dei checkpoint (HCV, HCMV, EBV, Herpes e Influenza).
            </p>
          </div>

          <div className={`space-y-6 text-slate-800 dark:text-slate-200 ${proseSizeClass}`}>
            
            {/* Cinetica Trifasica */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>La Cinetica Trifasica della Risposta Antivirale</span>
              </h3>
              <p>
                La risposta immunitaria contro i virus si articola in una rigorosa sequenza temporale trifasica coordinata:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed">
                <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/20 dark:bg-blue-950/20 space-y-2">
                  <div className="font-bold text-blue-950 dark:text-blue-300 text-sm flex items-center justify-between">
                    <span>Fase 1: IFN Tipo I (Ore 0–24)</span>
                    <span className="font-mono text-blue-600 text-[10px]">Stato Antivirale</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Sensing precoce via TLR endosomiali (TLR3 per dsRNA, TLR7/8 per ssRNA, TLR9 per DNA non metilato) ed elicasi citosoliche (RIG-I, MDA5) e cGAS-STING. 
                    Le cellule dendritiche plasmacitoidi (<strong>pDC</strong>) secernono quantità oceaniche di <strong>IFN-α</strong>, mentre le cellule infette producono <strong>IFN-β</strong>. 
                    Il legame a IFNAR1/2 attiva JAK1/Tyk2 e STAT1/2-IRF9 (ISGF3), inducendo centinaia di geni <strong>ISG (Interferon-Stimulated Genes)</strong>: 
                    <strong>PKR</strong> (blocca eIF2α arrestando la sintesi proteica virale), <strong>2'-5'-OAS / RNasi L</strong> (degrada gli RNA virali) e proteine <strong>Mx</strong> (bloccano il traffico capsico).
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-900 bg-indigo-50/20 dark:bg-indigo-950/20 space-y-2">
                  <div className="font-bold text-indigo-950 dark:text-indigo-300 text-sm flex items-center justify-between">
                    <span>Fase 2: Cellule NK (Giorni 2–4)</span>
                    <span className="font-mono text-indigo-600 text-[10px]">Missing Self & Killing</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Gli IFN-I e l'IL-12/IL-15 attivano ed espandono le <strong>cellule NK</strong>. 
                    Le NK rilevano le cellule infette che hanno down-regolato MHC-I per sfuggire ai CD8⁺ (riconoscimento del <strong>"Missing Self"</strong> tramite recettori KIR inibitori non ingaggiati), 
                    oppure riconoscono i ligandi di stress inducibili (MICA/B, ULBP) tramite il recettore attivatore <strong>NKG2D</strong>, uccidendo la cellula infetta per degranulazione di perforina e granzimi.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-2">
                  <div className="font-bold text-emerald-950 dark:text-emerald-300 text-sm flex items-center justify-between">
                    <span>Fase 3: Adattativa (Giorni 7–14)</span>
                    <span className="font-mono text-emerald-600 text-[10px]">CTL CD8⁺ & Anticorpi</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    L'espansione clonale produce centinaia di migliaia di <strong>linfociti CTL CD8⁺</strong> che eliminano in modo antigene-specifico ogni residuo serbatoio cellulare infetto (MHC-I ristretti). 
                    Parallelamente, i linfociti B e Tfh nei centri germinativi generano <strong>anticorpi neutralizzanti ad altissima affinità</strong> (IgG e sIgA) che legano glicoproteine di superficie virali (es. RBD della Spike o Emagglutinina), prevenendo l'aggancio ai recettori cellulari e proteggendo dalle reinfezioni.
                  </p>
                </div>
              </div>
            </div>

            {/* Scoperta Prof.ssa Soriani sulla Regolazione NK delle Tfh */}
            <div className="p-4 rounded-xl border border-purple-300 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/20 space-y-2">
              <div className="flex items-center gap-2 font-bold text-purple-950 dark:text-purple-200 text-sm">
                <Award className="w-5 h-5 text-purple-600" />
                <span>Punto Cardine di Ricerca della Prof.ssa Alessandra Soriani: La Regolazione NK delle Tfh</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Le ricerche del gruppo della <strong>Prof.ssa Alessandra Soriani</strong> hanno svelato un fondamentale meccanismo di controllo omeostatico: 
                durante le infezioni virali acute, in presenza di alti livelli di <strong>Interferone di Tipo I (IFN-α)</strong>, 
                le <strong>cellule NK attivate</strong> possono migrare nei follicoli linfoidi e <strong>uccidere selettivamente i linfociti Tfh (T follicular helper) iperattivi</strong>. 
                Questa citolisi fisiologica previene la sovrastimolazione incontrollata dei centri germinativi, impedendo la rottura della tolleranza periferica e la genesi di autoanticorpi sistemici post-virali.
              </p>
            </div>

            {/* Simulatore 2: InteractiveAntiviralStateSimulator Incastonato */}
            <div className="p-5 rounded-2xl border border-purple-300 dark:border-purple-800/80 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-slate-100/50 dark:from-purple-950/20 dark:to-slate-900/50 space-y-4">
              <div className="flex items-center justify-between border-b border-purple-200 dark:border-purple-800/60 pb-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Simulatore Interattivo: L'Asse IFNAR e l'Induzione dello Stato Antivirale (ISG)
                  </h3>
                </div>
                <span className="text-xs font-mono text-purple-700 dark:text-purple-400 font-bold">
                  Biochimica Intracellulare ISG
                </span>
              </div>

              {/* Componente Ufficiale Incastonato */}
              <InteractiveAntiviralStateSimulator />
            </div>

            {/* Strategie Molecolari di Immunoevasione Virale */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <span>L'Arsenale Molecolare dell'Immunoevasione Virale</span>
              </h3>
              <p>
                I virus persistenti hanno evoluto contromisure biochimiche per sabotare ciascuna fase della risposta dell'ospite:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs leading-relaxed">
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1">
                  <strong className="text-rose-900 dark:text-rose-300 block font-mono text-xs">HCV: Taglio di MAVS da NS3/4A</strong>
                  La serina-proteasi NS3/4A del virus dell'epatite C taglia la proteina adattatrice <strong>MAVS</strong> sulla membrana mitocondriale esterna, disconnettendo RIG-I e bloccando sul nascere la sintesi di IFN-β.
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1">
                  <strong className="text-rose-900 dark:text-rose-300 block font-mono text-xs">HCMV: Sabotaggio Totale MHC-I</strong>
                  <strong>US6</strong> e <strong>ICP47 (HSV)</strong> bloccano il trasportatore TAP1/2; <strong>US2 e US11</strong> retrotraslocano MHC-I nel citosol per degradazione proteasomiale; <strong>E19 (Adenovirus)</strong> trattiene MHC-I nel RER.
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1">
                  <strong className="text-rose-900 dark:text-rose-300 block font-mono text-xs">HCMV & Pox: Inganno delle Cellule NK</strong>
                  HCMV esprime un falso MHC-I (<strong>UL18</strong>) ed esprime il peptide <strong>UL40</strong> che stabilizza HLA-E ingaggiando il recettore inibitorio CD94/NKG2A. Inoltre produce <strong>UL16</strong> e <strong>miR-UL112</strong> per sequestrare MICA/B.
                </div>
              </div>

              {/* Antigenic Drift vs Antigenic Shift */}
              <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/30 dark:bg-blue-950/20 space-y-2 text-xs sm:text-sm">
                <div className="font-bold text-blue-950 dark:text-blue-200 flex items-center justify-between">
                  <span>Variazione Antigenica del Virus Influenzale: Antigenic Drift vs Antigenic Shift</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-300 font-semibold">Genoma Segmentato a 8 RNA</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                  • <strong>Antigenic Drift (Deriva Antigenica):</strong> accumulo graduale di <strong>mutazioni puntiformi</strong> nei geni codificanti per l'Emagglutinina (HA) e la Neuraminidasi (NA), causato dall'assenza di attività di correzione di bozze (proofreading) della RNA polimerasi RNA-dipendente virale. Genera varianti virali che eludono parzialmente gli anticorpi neutralizzanti preesistenti, determinando le epidemie stagionali annuali e imponendo l'aggiornamento costante della composizione vaccinale.
                  <br />• <strong>Antigenic Shift (Spostamento Antigenico):</strong> riassortimento genomico drastico tra segmenti di RNA interi provenienti da ceppi virali animali differenti (es. aviari o suini) e ceppi umani che co-infettano la medesima cellula ospite (spesso nel maiale, definito "recipiente di mescolamento" o <em>mixing vessel</em>). Ne risulta un ceppo con una glicoproteina HA completamente nuova, verso la quale l'intera popolazione umana è immunologicamente vergine: è il meccanismo genetico responsabile delle <strong>grandi pandemie influenzali storiche</strong> (Spagnola 1918 H1N1, Asiatica 1957 H2N2, Hong Kong 1968 H3N3, Suina 2009 H1N1).
                </p>
              </div>
            </div>

            {/* Ponte Fisiologico 5.4 -> 5.5 */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 via-teal-500/5 to-transparent border-l-4 border-purple-500 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <span className="font-bold text-purple-800 dark:text-purple-300 uppercase tracking-wider text-[11px] block">
                Ponte Fisiologico di Transizione: Dalla Lotta Contro i Patogeni alla Vaccinologia Razionale
              </span>
              <p>
                Comprendere i meccanismi con cui i virus e i batteri infettano l'organismo ed evadono il sistema immunitario 
                ha permesso di sviluppare la più formidabile arma preventiva della medicina moderna: la <strong>vaccinologia razionale</strong>. 
                Nella sezione 5.5 esploriamo la classificazione completa delle piattaforme vaccinali (vivi attenuati, inattivati, tossoidi, VLP prive di DNA oncogeno come in HPV, coniugati), 
                la <strong>Vaccinologia Inversa di Rino Rappuoli</strong> sul Meningococco B, 
                la rivoluzione molecolare dei <strong>vaccini a mRNA in nanoparticelle lipidiche (Karikó e Weissman, Premio Nobel 2023)</strong> 
                e le basi matematiche ed epidemiologiche dell'<strong>immunità di gregge (Herd Immunity, formula di Qc)</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* SEZIONE 5.5: VACCINOLOGIA RAZIONALE & mRNA */}
        {/* --------------------------------------------------------- */}
        <section id="sec-5-vaccinologia" className="scroll-mt-16 space-y-8">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 text-xs font-mono uppercase tracking-wider">
              <Syringe className="w-4 h-4" />
              <span>Sezione 5.5 • Lezione 24</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Vaccinologia Razionale: Dalle Pietre Miliari Storiche ai Vaccini a mRNA-LNP, Adiuvanti e Immunità di Gregge
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Da Jenner e Pasteur alla Vaccinologia Inversa di Rappuoli (4CMenB), meccanismo molecolare dell'N1-metil-pseudouridina (m1Ψ) e stabilizzazione 2P (Nobel 2023 Karikó-Weissman), biochimica degli adiuvanti e modellizzazione matematica della soglia critica Qc.
            </p>
          </div>

          <div className={`space-y-6 text-slate-800 dark:text-slate-200 ${proseSizeClass}`}>
            
            {/* Immunizzazione Passiva vs Attiva */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              <strong className="text-slate-900 dark:text-white block font-semibold text-sm">Immunizzazione Passiva vs Immunizzazione Attiva:</strong>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <strong className="text-blue-900 dark:text-blue-300 block text-xs">Immunizzazione Passiva:</strong>
                  Trasferimento di anticorpi preformati senza attivazione del sistema immunitario dell'ospite:
                  <br />• <em>Naturale:</em> passaggio transplacentare materno di IgG via FcRn e apporto di sIgA col colostro.
                  <br />• <em>Artificiale:</em> sieri immuni, immunoglobuline umane iperimmuni (antitetaniche, antirabbiche) o anticorpi monoclonali profilattici (es. Nirsevimab).
                  <br />• <em>Caratteristica:</em> protezione immediata entro minuti, ma <strong>transitoria ed effimera</strong> (decade con l'emivita plasmatica dell'anticorpo) e <strong>totalmente priva di memoria immunologica</strong>.
                </div>
                <div className="p-3 rounded-lg bg-teal-50/50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800">
                  <strong className="text-teal-900 dark:text-teal-300 block text-xs">Immunizzazione Attiva (Vaccinazione):</strong>
                  Somministrazione controllata di un antigene sicuro derivato dal patogeno:
                  <br />• Provoca l'espansione clonale di 100–1000 volte dei linfociti T e B antigene-specifici, reazione dei centri germinativi con ipermutazione somatica (SHM) e switch isotipico.
                  <br />• Genera <strong>linfociti T e B di memoria</strong> a lunghissima sopravvivenza e <strong>plasmacellule midollari (LLPC)</strong> stabili, conferendo protezione attiva per anni o per l'intera durata della vita.
                </div>
              </div>
            </div>

            {/* Tassonomia Completa delle Piattaforme Vaccinali */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Layers className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span>Tassonomia Completa delle Piattaforme Vaccinali Umane</span>
              </h3>

              <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 font-mono border-b border-slate-200 dark:border-slate-800">
                      <th className="p-2.5">Tipologia Piattaforma</th>
                      <th className="p-2.5">Esempi Clinici Ufficiali</th>
                      <th className="p-2.5">Risposta Immunitaria Indotta</th>
                      <th className="p-2.5">Vantaggi & Limitazioni / Controindicazioni</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-teal-700 dark:text-teal-400">1. Vivi Attenuati</td>
                      <td className="p-2.5">MPR (Morbillo-Parotite-Rosolia), Varicella, Rotavirus, Febbre Gialla, Sabin OPV (polio orale)</td>
                      <td className="p-2.5">Replicano transitoriamente mimando l'infezione naturale: stimolano sia <strong>anticorpi neutralizzanti (IgG/sIgA) sia potenti CTL CD8⁺ (MHC-I citosolico)</strong>.</td>
                      <td className="p-2.5">Altissima efficacia con singola dose. <strong>Rischio di reversione alla virulenza (cVDPV con Sabin); controindicati in gravidanza e immunodepressi!</strong></td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-blue-700 dark:text-blue-400">2. Inattivati Uccisi</td>
                      <td className="p-2.5">Salk IPV (polio intramuscolare), Epatite A, Rabbia, Influenza a virione split</td>
                      <td className="p-2.5">Inattivati chimicamente (formalina) o termicamente. Stimolano prevalentemente <strong>anticorpi IgG (processazione esogena MHC-II)</strong>.</td>
                      <td className="p-2.5">Sicurezza assoluta (nessuna reversione). Minore immunogenicità cellulare, richiedono co-somministrazione di adiuvanti e richiami multipli.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-amber-700 dark:text-amber-400">3. Tossoidi (Anatossine)</td>
                      <td className="p-2.5">Tetano (tossoide tetanico) e Difterite</td>
                      <td className="p-2.5">Esotossine batteriche purificate e inattivate con formaldeide: inducono anticorpi neutralizzanti che bloccano l'azione patogena della tossina.</td>
                      <td className="p-2.5">Estremamente sicuri e stabili; richiedono adiuvante minerale (Allume) e dosi di richiamo decennali nell'adulto.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-purple-700 dark:text-purple-400">4. VLP & Subunità Ricombinanti</td>
                      <td className="p-2.5">HBsAg (Epatite B ricombinante), VLP del Papillomavirus Umano (HPV Gardasil 9)</td>
                      <td className="p-2.5">Le VLP sono gusci proteici vuoti (360 copie della proteina L1 di HPV) che auto-assemblano la morfologia 3D del virione senza possedere DNA virale.</td>
                      <td className="p-2.5"><strong>Totale assenza di materiale genetico e degli oncogeni virali E6 ed E7</strong>; eccezionale profilo di sicurezza e prevenzione oncologica universale della cervice, ano e orofaringe.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-emerald-700 dark:text-emerald-400">5. Glicoconiugati</td>
                      <td className="p-2.5">Hib (Haemophilus b), Meningococco ACWY, Pneumococco 13/20-valente</td>
                      <td className="p-2.5">Polisaccaride capsulare coniugato covalentemente a un carrier proteico (CRM197 o tossoide): linked recognition con attivazione Tfh e memoria B.</td>
                      <td className="p-2.5">Supera l'anergia dei lattanti sotto i 2 anni, trasformando antigeni TI-2 in risposte T-dipendenti con switch isotipico e memoria decennale.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Vaccinologia Inversa di Rino Rappuoli */}
            <div className="p-4 rounded-xl border border-teal-300 dark:border-teal-800 bg-teal-50/30 dark:bg-teal-950/20 space-y-2">
              <div className="flex items-center gap-2 font-bold text-teal-950 dark:text-teal-200 text-sm">
                <Atom className="w-5 h-5 text-teal-600" />
                <span>La Vaccinologia Inversa (Reverse Vaccinology di Rino Rappuoli): Il Caso del Meningococco B</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Per decenni è stato impossibile formulare un vaccino efficace contro <em>Neisseria meningitidis</em> di sierogruppo B: 
                la sua capsula è costituita da <strong>acido polisialico α2-8</strong>, identico alle molecole di adesione neuronale umane (NCAM), 
                risultando completamente invisibile al sistema immunitario (auto-tolleranza) e con rischio di autoimmunità se forzato. 
                Negli anni '90, <strong>Rino Rappuoli</strong> rivoluzionò il paradigma sequenziando l'intero genoma del ceppo MC58 e analizzando bioinformaticamente 
                le sequenze codificanti per proteine di superficie: ha identificato <em>in silico</em> oltre 600 antigeni candidati, selezionando le proteine ricombinanti conservate: 
                <strong>fHbp (Factor H binding protein)</strong>, <strong>NadA</strong> e <strong>NHBA</strong>, associate a vescicole di membrana esterna (OMV). 
                Questo ha portato alla nascita del vaccino multicomponente <strong>4CMenB (Bexsero)</strong>, il primo vaccino al mondo ideato partendo dal codice genetico digitale.
              </p>
            </div>

            {/* Vaccini a mRNA in Nanoparticelle Lipidiche (LNP) e Nobel 2023 */}
            <div className="p-4 rounded-xl border border-purple-300 dark:border-purple-800 bg-purple-50/40 dark:bg-purple-950/20 space-y-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  La Rivoluzione dei Vaccini a mRNA-LNP (Premio Nobel per la Medicina 2023 a Katalin Karikó e Drew Weissman)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                L'applicazione dell'mRNA terapeutico è stata a lungo ostacolata da due barriere apparentemente insormontabili: 
                l'mRNA esogeno sintetizzato in vitro scatenava una reazione infiammatoria distruttiva mediata dai sensori innati (TLR7, TLR8, PKR, OAS), 
                che degradavano l'RNA prima che potesse essere tradotto in proteina; e l'RNA libero nudo veniva immediatamente distrutto dalle ribonucleasi sieriche. 
                Il trionfo scientifico premiato con il Nobel si fonda su tre pilastri biochimici:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-purple-200 dark:border-purple-800 space-y-1">
                  <strong className="text-purple-900 dark:text-purple-300 block text-xs">1. N1-Metil-Pseudouridina (m1Ψ):</strong>
                  La scoperta rivoluzionaria di Karikó e Weissman: sostituendo tutte le molecole di uridina con <strong>N1-metil-pseudouridina (m1Ψ)</strong>, 
                  l'mRNA modificato non attiva più TLR7/TLR8 negli endosomi né PKR nel citoplasma. 
                  Questo sopprime l'interferonopatia innata distruttiva e <strong>aumenta di 10–100 volte la traduzione ribosomiale della proteina Spike</strong>.
                </div>
                <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-purple-200 dark:border-purple-800 space-y-1">
                  <strong className="text-purple-900 dark:text-purple-300 block text-xs">2. Stabilizzazione Pre-Fusione (Mutazione 2P):</strong>
                  La proteina Spike nativa di SARS-CoV-2 è metastabile e collassa facilmente nella conformazione post-fusione (meno immunogena). 
                  L'ingegneria molecolare ha introdotto <strong>due sostituzioni con prolina (mutazione 2P: K986P e V987P)</strong> nella cerniera dell'elica centrale, 
                  congelando la Spike nella <strong>conformazione pre-fusione</strong> trimerica aperta, esponendo in modo ideale il dominio RBD agli anticorpi neutralizzanti.
                </div>
                <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-purple-200 dark:border-purple-800 space-y-1">
                  <strong className="text-purple-900 dark:text-purple-300 block text-xs">3. Nanoparticelle Lipidiche (LNP):</strong>
                  L'mRNA è incapsulato in LNP contenenti: <strong>lipidi ionizzabili</strong> (carichi positivamente a pH acido endosomiale, favoriscono la fusione e l'escape citosolico dell'RNA), fosfolipidi helper, colesterolo e <strong>PEG-lipidi</strong> (che impediscono l'aggregazione precoce). 
                  Una volta nel citosol, l'mRNA viene tradotto: la proteina Spike viene esposta sia su <strong>MHC-I (attivando forti CTL CD8⁺)</strong> sia secretata su <strong>MHC-II (attivando Tfh e anticorpi)</strong>.
                </div>
              </div>
            </div>

            {/* Meccanismo d'Azione degli Adiuvanti */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              <strong className="text-slate-900 dark:text-white block font-semibold text-sm">Meccanismo Molecolare degli Adiuvanti Immunologici:</strong>
              Gli adiuvanti convertono proteine purificate poco immunogene in potenti stimolatori immunitari simulando l'infezione:
              <br />• <strong>Sali di Alluminio (Allume):</strong> l'adiuvante storico più diffuso. Creano un effetto deposito rilasciando lentamente l'antigene e provocano un micro-danno cellulare locale con rilascio di acido urico, attivando l'<strong>inflammasoma NLRP3</strong> dei macrofagi (IL-1β e polarizzazione prevalentemente Th2/umorale).
              <br />• <strong>Emulsioni Olio-in-Acqua di Squalene (MF59, AS03):</strong> stimolano un rapido afflusso di monociti e DC al sito di iniezione con efficiente captazione dell'antigene (usati nei vaccini influenzali adiuvati per anziani).
              <br />• <strong>Agonisti Puri dei PRR (Sistemi Adiuvanti Moderni GSK):</strong> 
              <br />  - <strong>AS04:</strong> contiene <strong>MPLA (Monofosforil-lipide A)</strong>, agonista detossificato di <strong>TLR4</strong> adsorbito su allume (induce una vigorosa risposta Th1/anticorpale nel vaccino anti-HPV Cervarix e anti-HBV Fendrix).
              <br />  - <strong>AS01:</strong> combina MPLA e la saponina QS-21 (vaccino contro l'Herpes Zoster ricombinante <em>Shingrix</em> e vaccino antimalarico <em>Mosquirix</em>), garantendo una risposta cellulare CD4⁺/CD8⁺ protettiva per decenni.
              <br />  - <strong>CpG 1018:</strong> oligonucleotidi sintetici non metilati agonisti puri di <strong>TLR9</strong> endosomiale.
            </div>

            {/* Epidemiologia & Herd Immunity */}
            <div className="p-5 rounded-2xl border border-teal-300 dark:border-teal-800/80 bg-gradient-to-br from-teal-500/5 via-blue-500/5 to-slate-100/50 dark:from-teal-950/20 dark:to-slate-900/50 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-teal-200 dark:border-teal-800/60 pb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Simulatore Epidemiologico: Numero R₀ e Soglia Critica di Immunità di Gregge (Qc)
                  </h3>
                </div>
                <span className="text-xs font-mono text-teal-700 dark:text-teal-400 font-bold">
                  Modellizzazione di Trasmissione
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Patogeno / Numero di Riproduzione di Base (R₀):</label>
                  <select
                    value={selectedR0}
                    onChange={(e) => setSelectedR0(Number(e.target.value))}
                    className="w-full mt-1 p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium"
                  >
                    <option value={16}>Morbillo (R₀ ≈ 15–18, Contagiosità Aerea Massima)</option>
                    <option value={7}>Pertosse (Bordetella pertussis, R₀ ≈ 6–8)</option>
                    <option value={6}>Rosolia / Poliomielite (R₀ ≈ 5–7)</option>
                    <option value={4}>SARS-CoV-2 (Varianti Omicron precoci, R₀ ≈ 3–5)</option>
                    <option value={2}>Influenza Stagionale (R₀ ≈ 1.5–2.0)</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-300">
                    <span>Copertura Vaccinale Popolazione:</span>
                    <span className="font-mono text-teal-600 font-bold">{vaccineCoveragePct}%</span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={100}
                    value={vaccineCoveragePct}
                    onChange={(e) => setVaccineCoveragePct(Number(e.target.value))}
                    className="w-full mt-2 accent-teal-600"
                  />
                </div>
              </div>

              {/* Risultato Calcolo Matematico */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-500 block">Formula di Calcolo:</span>
                    <strong className="font-mono text-slate-900 dark:text-white">Qc = 1 - (1 / R₀)</strong>
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-500 block">Soglia Critica Necessaria (Qc):</span>
                    <strong className="font-mono text-teal-600 font-bold text-sm">{criticalThresholdPct}%</strong>
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-500 block">Copertura Attuale:</span>
                    <strong className={`font-mono text-sm ${isHerdImmunityAchieved ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {vaccineCoveragePct}%
                    </strong>
                  </div>
                </div>

                <div className={`p-3 rounded-lg border text-xs leading-relaxed ${
                  isHerdImmunityAchieved
                    ? 'text-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300'
                    : 'text-rose-800 bg-rose-50 dark:bg-rose-950/40 border-rose-300'
                }`}>
                  <div className="font-bold mb-0.5">
                    {isHerdImmunityAchieved
                      ? 'Immunità di Gregge Raggiunta!'
                      : 'Soglia Non Raggiunta: Rischio Focolai Epidemici!'}
                  </div>
                  {isHerdImmunityAchieved ? (
                    <span>
                      La densità di individui immuni nella popolazione è sufficiente a impedire che il patogeno trovi ospiti suscettibili: 
                      la catena di trasmissione si interrompe spontaneamente, proteggendo indirettamente anche i soggetti fragili non vaccinabili (es. neonati, bambini oncologici o immunodepressi).
                    </span>
                  ) : (
                    <span>
                      La copertura ({vaccineCoveragePct}%) è inferiore alla soglia critica minima calcolata ({criticalThresholdPct}%). 
                      Il patogeno continua a circolare nella comunità con rischio di epidemie che colpiscono selettivamente i soggetti non vaccinabili.
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Ponte Fisiologico 5.5 -> 5.6 */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-teal-500/10 via-emerald-500/5 to-transparent border-l-4 border-teal-500 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <span className="font-bold text-teal-800 dark:text-teal-300 uppercase tracking-wider text-[11px] block">
                Ponte Fisiologico di Transizione: Verso la Sintesi Sinottica e la Verifica Cumulativa
              </span>
              <p>
                Abbiamo percorso l'intera traiettoria dell'interfaccia con il mondo esterno: 
                dall'architettura della barriera mucosale e dalle IgA secretorie, 
                alla simbiosi neuro-immune con il microbiota commensale e alle sue implicazioni sistemiche sull'asse intestino-cervello, 
                fino alla risposta integrata contro i patogeni invasivi e al trionfo biotecnologico della vaccinologia razionale e dei vaccini genetici a mRNA. 
                Nella sezione conclusiva 5.6 integriamo tutti i concetti in una <strong>Tavola Sinottica Comparativa Master</strong>, 
                accompagnata dalla <strong>Batteria Ufficiale di Quiz d'Esame</strong> e dal <strong>Deck Completo di Flashcards</strong> per il ripasso attivo ad alta resa.
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* SEZIONE 5.6: VERIFICA FINALE CUMULATIVA (QUIZ & FLASHCARDS) */}
        {/* --------------------------------------------------------- */}
        <section id="sec-5-verifica" className="scroll-mt-16 space-y-8">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Sezione 5.6 • Verifica Finale Cumulativa</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Tavola Sinottica Master di Capitolo V, Batteria di Quiz d'Esame e Flashcard per Ripasso Attivo
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Sintesi comparativa integrata dei moduli mucosali, neuro-immuni e vaccinali con verifica delle conoscenze orali su Lezioni 22, 23, 24 e 25.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* TAVOLA COMPARATIVA MASTER INTEGRATA */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <BookmarkCheck className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span>Tavola Sinottica Master: Integrazione dei Moduli Effettori del Capitolo V</span>
              </h3>
              
              <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 font-mono border-b border-slate-200 dark:border-slate-800">
                      <th className="p-2.5">Distretto / Modulo</th>
                      <th className="p-2.5">Componenti & Recettori Chiave</th>
                      <th className="p-2.5">Citochine & Mediatori Cardine</th>
                      <th className="p-2.5">Meccanismo Funzionale Primario</th>
                      <th className="p-2.5">Correlazione Clinica & Terapeutica</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-teal-700 dark:text-teal-400 bg-teal-50/20">GALT & Homing Mucosale</td>
                      <td className="p-2.5">Cellule M, DC CD103⁺, integrina α4β7 : MAdCAM-1, CCR9 : CCL25</td>
                      <td className="p-2.5 font-mono">Acido Retinoico (ATRA via RALDH2), TGF-β</td>
                      <td className="p-2.5">Campionamento luminale, imprinting del codice postale e migrazione selettiva nella lamina propria intestinale.</td>
                      <td className="p-2.5">Target di <strong>Vedolizumab</strong> (anti-α4β7) nelle MICI (Colite Ulcerosa e Crohn).</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-blue-700 dark:text-blue-400 bg-blue-50/20">Comparto sIgA & pIgR</td>
                      <td className="p-2.5">Catena J, recettore pIgR, Componente Secretoria (SC), IgA1 vs IgA2</td>
                      <td className="p-2.5 font-mono">TGF-β, IL-5, IL-21 (TD) / BAFF, APRIL (TI)</td>
                      <td className="p-2.5">Transcitosi apicale epiteliale di dimeri ed <strong>immune exclusion asintomatica</strong> nel lume senza attivare il complemento.</td>
                      <td className="p-2.5">Deficit selettivo di IgA (la più frequente immunodeficienza congenita primitiva: asintomatica o infezioni mucosali).</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50/20">Microbiota & SCFA</td>
                      <td className="p-2.5">Clostridia cluster IV/XIVa, F. prausnitzii, recettori GPR43, GPR41, GPR109A</td>
                      <td className="p-2.5 font-mono">Butirrato, Propionato, Acetato</td>
                      <td className="p-2.5">Inibizione delle Istone Deacetilasi (HDAC), iper-acetilazione H3 su CNS1 di FOXP3 ed espansione di <strong>Treg colici</strong>.</td>
                      <td className="p-2.5">Trapianto di microbiota fecale (FMT) per infezione ricorrente da <em>Clostridioides difficile</em>.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-purple-700 dark:text-purple-400 bg-purple-50/20">Asse Gut-Brain & Triptofano</td>
                      <td className="p-2.5">Nervo Vago (α7nAChR), Cellule EC (TPH1), asse HPA, IDO-1</td>
                      <td className="p-2.5 font-mono">Acetilcolina, 5-HT, Acido Chinolinico (NMDA), LPS</td>
                      <td className="p-2.5">Riflesso colinergico antinfiammatorio, sintesi del 95% della serotonina, bivio chinurenine e leaky gut neurotossico.</td>
                      <td className="p-2.5">Patogenesi di depressione maggiore, morbo di Parkinson (propagazione α-sinucleina) e decadimento cognitivo.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-rose-700 dark:text-rose-400 bg-rose-50/20">Difesa da Infezioni & Evasione</td>
                      <td className="p-2.5">Th1/M1 (TB, Lebbra), Dectina-1/CARD9/Th17 (Funghi), Th2/IgE/Eosinofili (Elminti)</td>
                      <td className="p-2.5 font-mono">IFN-γ, TNF-α / IL-17, IL-22 / IL-4, IL-5, IL-13</td>
                      <td className="p-2.5">Granuloma strutturato caseoso, weep and sweep con degranulazione di MBP, e lisi osmotica MAC contro Neisseria.</td>
                      <td className="p-2.5">Riattivazione della TBC con farmaci anti-TNF. Rimodellamento termico LPS in <em>Yersinia</em>.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-amber-700 dark:text-amber-400 bg-amber-50/20">Vaccinologia Razionale & mRNA</td>
                      <td className="p-2.5">Vivi attenuati, VLP prive di DNA oncogeno (HPV), LNP con lipidi ionizzabili</td>
                      <td className="p-2.5 font-mono">m1Ψ (Karikó-Weissman), mutazione pre-fusione 2P</td>
                      <td className="p-2.5">Traduzione ribosomiale diretta con presentazione doppia MHC-I (CTL CD8⁺) ed MHC-II (anticorpi neutralizzanti).</td>
                      <td className="p-2.5">Immunità di gregge (formula Qc = 1 - 1/R₀); eradicazione del Vaiolo e contenimento pandemico di SARS-CoV-2.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* SEZIONE QUIZ D'ESAME INTEGRATA */}
            <div className="pt-4">
              <QuizSection 
                customQuestions={chapter5Questions} 
                lessonNumber={22}
                title="Batteria Ufficiale di Quiz d'Esame · Capitolo V (Lezioni 22–25)" 
              />
            </div>

            {/* SEZIONE FLASHCARD DECK INTEGRATA */}
            <div className="pt-4">
              <FlashcardDeck 
                cards={chapter5Flashcards} 
                lessonNumber={22}
                title="Deck di Flashcard Ufficiali · Capitolo V (Memoria Attiva)" 
              />
            </div>

          </div>
        </section>

      </main>
    </div>
  );
};
