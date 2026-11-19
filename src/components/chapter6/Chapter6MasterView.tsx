/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CAPITOLO VI MASTER VIEW: REAZIONI DI IPERSENSIBILITÀ (TIPI I–IV) E
 * MECCANISMI DI IMMUNOPATOLOGIA CLINICA
 * 
 * Trattato accademico continuo a pagina unica privo di frammentazione d'aula.
 * Unifica integralmente tutti i contenuti, le tabelle e i simulatori di:
 * - Lezione 26: Ipersensibilità di Tipo I (Sensibilizzazione, Allarmine, FcεRI, Asma, Anafilassi)
 * - Lezione 27: Ipersensibilità di Tipo II & Tipo III (AB0, Rh/MEN, Recettori, Goodpasture, Curva di Heidelberger-Kendall, Malattia da Siero)
 * - Lezione 28: Ipersensibilità di Tipo IV (Classificazione di Pichler, DAC, Mantoux/IGRA, Psoriasi, IBD e Malattia Celiaca)
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  AlertTriangle,
  Layers,
  Activity,
  Shield,
  Zap,
  Target,
  Sparkles,
  Info,
  ChevronRight,
  BookOpen,
  ArrowRight,
  CheckCircle2,
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
  Wind,
  Droplets,
  RotateCw,
  Sliders,
  Check,
  CheckCircle,
  HelpCircle,
  Syringe,
  Bug,
  Thermometer,
  FileText,
  BookmarkCheck,
  Split,
  Eye,
  SlidersHorizontal,
  Baby
} from 'lucide-react';

// Quiz & Flashcards
import { ALL_EXAM_QUESTIONS } from '../../data/examQuestions';
import { QuizSection } from '../QuizSection';
import { FlashcardDeck } from '../FlashcardDeck';

interface Chapter6MasterViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
  initialSection?: string;
  onNavigateSection?: (sectionId: string) => void;
}

export const Chapter6MasterView: React.FC<Chapter6MasterViewProps> = ({
  isSerif = false,
  fontSize = 'normal',
  initialSection
}) => {
  const proseFontClass = isSerif ? 'font-serif' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // Domande d'esame filtrate per le lezioni del Capitolo 6 (26, 27, 28)
  const chapter6Questions = useMemo(() => {
    return ALL_EXAM_QUESTIONS.filter((q) => [26, 27, 28].includes(q.lessonNumber));
  }, []);

  // Flashcards cumulate del Capitolo 6 con set ad altissima resa didattico-clinica
  const chapter6Flashcards = useMemo(() => {
    return [
      {
        id: 'fc-c6-01',
        category: 'Tipo I - Allergeni',
        front: 'In che modo l\'allergene Der p 1 dell\'acaro della polvere facilita la propria penetrazione epiteliale e il priming Th2?',
        back: 'Der p 1 possiede un\'attività intrinseca di cisteina-proteasi: taglia direttamente le proteine occludina e claudina-1 delle tight junctions epiteliali respiratorie. Inoltre cliva i recettori CD23 e CD25, e attivando i recettori PAR-2 induce il rilascio epiteliale delle allarmine TSLP, IL-33 e IL-25, che stimolano le ILC2 e convertono le DC residenti in DC2 (OX40L⁺, IL-12⁻).'
      },
      {
        id: 'fc-c6-02',
        category: 'Tipo I - Recettori',
        front: 'Qual è la struttura molecolare del recettore FcεRI e perché i mastociti sono "costitutivamente armati" di IgE?',
        back: 'FcεRI è un eterotetramero αβγ₂: catena α extracellulare legante il dominio Cε3 dell\'IgE; catena β transmembrana amplificatrice con 1 ITAM; omodimero γ₂ legato da ponte disolfuro con 2 ITAM per la trasduzione via Syk. L\'affinità straordinaria (Kd ≈ 10⁻¹⁰ M, 100.000 volte superiore ai normali FcγR) fa sì che i mastociti siano stabilmente rivestiti di IgE policlonali anche a concentrazioni sieriche picomolari di IgE libera.'
      },
      {
        id: 'fc-c6-03',
        category: 'Tipo I - Biomarkers',
        front: 'Perché la Triptasi sierica è il biomarker gold-standard dello shock anafilattico rispetto all\'istamina?',
        back: 'L\'istamina ha un\'emivita plasmatica brevissima (<15-30 minuti), degradata rapidamente da istaminasi ed N-metiltransferasi. La Triptasi (proteasi neutra immagazzinata selettivamente nei granuli dei mastociti) ha un picco plasmatico a 1-2 ore e rimane dosabile nel siero per 4-6 ore dall\'evento acuto, confermando con certezza la massiva degranulazione mastocitaria.'
      },
      {
        id: 'fc-c6-04',
        category: 'Tipo I - Farmacologia',
        front: 'Perché l\'Adrenalina intramuscolare è il farmaco salvavita di prima scelta assoluta nell\'anafilassi sistemica?',
        back: 'Agisce su 3 bersagli recettoriali adrenergici sincronizzati: 1) α1: vasocostrizione arteriolare periferica, risoluzione immediata del collasso pressorio e riduzione dell\'edema laringeo; 2) β1: supporto inotropo e cronotropo cardiaco positivo; 3) β2: broncodilatazione rapida e incremento di cAMP intracellulare nei mastociti che blocca direttamente l\'ulteriore degranulazione.'
      },
      {
        id: 'fc-c6-05',
        category: 'Tipo II - Ematologia',
        front: 'Qual è il razionale immunologico della profilassi con immunoglobuline anti-D (RhoGAM) nelle madri Rh⁻?',
        back: 'Somministrate entro 72 ore dal parto di un feto Rh⁺, le IgG anti-D legano e opsonizzano le emazie fetali Rh⁺ transitate nel circolo materno. I macrofagi le eliminano rapidamente prima che i linfociti B materni possano riconoscerle e avviare la risposta adattativa primaria, prevenendo la formazione di plasmacellule di memoria IgG anti-D che attaccherebbero il secondo feto via FcRn.'
      },
      {
        id: 'fc-c6-06',
        category: 'Tipo II - Diagnostica',
        front: 'Come si differenziano metodologicamente il Test di Coombs Diretto e il Test di Coombs Indiretto?',
        back: 'Il Test di Coombs Diretto (DAT) ricerca anticorpi (IgG) o complemento già legati in vivo sulla membrana dei globuli rossi del paziente (aggiunta diretta di siero anti-IgG umane / siero di Coombs → agglutinazione). L\'Indiretto (IAT) ricerca anticorpi liberi nel siero del paziente (incubazione del siero del paziente con emazie test standard note, lavaggio, e aggiunta successiva del siero di Coombs).'
      },
      {
        id: 'fc-c6-07',
        category: 'Tipo II - Funzionale',
        front: 'In che modo la Miastenia Gravis e il Morbo di Graves-Basedow rappresentano varianti funzionali del Tipo II?',
        back: 'In entrambe non vi è danno tissutale distruttivo primario. Nel Graves, le IgG (TSI) legano il TSHR mimando il ligando ormonale e attivando costitutivamente la via adenilato ciclasi/cAMP (iperfunzione). Nella Miastenia Gravis, le IgG legano il recettore nicotinico AChR bloccandone l\'interazione con l\'acetilcolina e promuovendone l\'internalizzazione/endocitosi (ipofunzione muscolare).'
      },
      {
        id: 'fc-c6-08',
        category: 'Tipo III - Emodinamica',
        front: 'In quale condizione della curva di Heidelberger-Kendall si formano gli immunocomplessi più patogenetici del Tipo III?',
        back: 'In condizione di LIEVE/MODERATO ECCESSO DI ANTIGENE. In eccesso di anticorpo o in equivalenza si formano reticoli insolubili giganti rapidamente fagocitati dal reticolo endoteliale; in lieve eccesso di antigene i complessi sono piccoli-medi, solubili, sfuggono a CR1 e macrofagi epato-splenici, e precipitano nei letti vascolari ad alta pressione idrostatica (glomeruli, sinovia, vasi cutanei).'
      },
      {
        id: 'fc-c6-09',
        category: 'Tipo III - Clinica',
        front: 'Cosa differenzia l\'aspetto microscopico della glomerulonefrite di Goodpasture da quella lupica (Tipo II vs Tipo III)?',
        back: 'Alla biopsia renale con microscopia a immunofluorescenza: la Sindrome di Goodpasture (Tipo II con anticorpi anti-membrana basale contro α3 NC1 del collagene IV) mostra un pattern LINEARE continuo e omogeneo. La nefrite lupica o post-streptococcica (Tipo III da immunocomplessi precipitati) mostra un pattern GRANULARE discontinuo a zolle ("lumpy-bumpy").'
      },
      {
        id: 'fc-c6-10',
        category: 'Tipo IV - Sottotipi',
        front: 'Qual è la classificazione moderna di Pichler per l\'ipersensibilità di Tipo IV?',
        back: 'IVa: mediata da Th1, IFN-γ e attivazione di macrofagi M1 (Mantoux, granulomi); IVb: mediata da Th2, IL-5/IL-4/IL-13 ed eosinofili (asma grave, sindrome DRESS); IVc: mediata da CTL CD8⁺ via Perforina/Granzimi e FasL (sindrome di Stevens-Johnson/NET, reazioni citotossiche); IVd: mediata da Th17, IL-17/IL-8 e neutrofili (pustolosi esantematica acuta generalizzata AGEP, psoriasi).'
      },
      {
        id: 'fc-c6-11',
        category: 'Tipo IV - Celiachia',
        front: 'Qual è il ruolo molecolare della Transglutaminasi Tissutale 2 (tTG2) nella patogenesi della Malattia Celiaca?',
        back: 'La tTG2 deamina i residui di Glutammina neutra dei peptidi della gliadina (es. frammento 33-mero indigerito ricco in prolina/glutammina), convertendoli in Acido Glutammico carico negativamente. Queste cariche negative si incastrano con altissima affinità nelle tasche basiche cariche positivamente (P4, P6, P7, P9) delle molecole MHC-II HLA-DQ2 (DQA1*05:01/DQB1*02:01) e HLA-DQ8.'
      },
      {
        id: 'fc-c6-12',
        category: 'Tipo IV - Celiachia Innata',
        front: 'Come cooperano l\'immunità innata e i linfociti intraepiteliali (IEL) nel causare l\'atrofia dei villi nella celiachia?',
        back: 'Peptidi non-immunodominanti della gliadina (es. p31-43) inducono gli enterociti a produrre massicce quantità di IL-15 e a esporre molecole di stress MICA/MICB e HLA-E. L\'IL-15 riprogramma i linfociti intraepiteliali CD8⁺ in cellule citotossiche NK-like che esprimono NKG2D e CD94/NKG2C, inducendo apoptosi enterocitaria perforina/granzima-dipendente indipendente dal legame del TCR.'
      }
    ];
  }, []);

  const [activeSubSection, setActiveSubSection] = useState<string>('sec-6-gell-coombs-tipo1-sens');

  // --- STATI DEI SIMULATORI INCASTONATI ---
  
  // Simulatore 1: Fasi dell'Ipersensibilità di Tipo I & Degranulazione
  const [sim1Phase, setSim1Phase] = useState<'sensitization' | 'immediate' | 'late'>('immediate');
  const [sim1AllergenLoad, setSim1AllergenLoad] = useState<number>(75);
  const [sim1CrosslinkActive, setSim1CrosslinkActive] = useState<boolean>(true);

  // Simulatore 2: Airway Remodeling & Terapie Biologiche nell'Asma Grave
  const [sim2Biologic, setSim2Biologic] = useState<'none' | 'omalizumab' | 'dupilumab' | 'mepolizumab' | 'benralizumab' | 'tezepelumab'>('none');
  const [sim2EosinophilCount, setSim2EosinophilCount] = useState<number>(650); // cellule/µL

  // Simulatore 3: Laboratorio Trasfusionale AB0 & Test di Coombs
  const [sim3Donor, setSim3Donor] = useState<'A' | 'B' | 'AB' | '0'>('A');
  const [sim3Recipient, setSim3Recipient] = useState<'A' | 'B' | 'AB' | '0'>('0');
  const [sim3TestType, setSim3TestType] = useState<'direct' | 'indirect'>('direct');
  const [sim3RhMotherSensitized, setSim3RhMotherSensitized] = useState<boolean>(true);
  const [sim3RhoGAMGiven, setSim3RhoGAMGiven] = useState<boolean>(false);

  // Simulatore 4: Curva di Heidelberger-Kendall & Cinetica della Malattia da Siero (Tipo III)
  const [sim4Zone, setSim4Zone] = useState<'ab_excess' | 'slight_ag_excess' | 'extreme_ag_excess'>('slight_ag_excess');
  const [sim4Day, setSim4Day] = useState<number>(8); // giorno 1-14

  // Simulatore 5: Fisiopatologia della Malattia Celiaca (Genetica HLA-DQ2/8 & Deamidazione)
  const [sim5HlaStatus, setSim5HlaStatus] = useState<'dq2_dq8_pos' | 'dq2_dq8_neg'>('dq2_dq8_pos');
  const [sim5DeamidationActive, setSim5DeamidationActive] = useState<boolean>(true);
  const [sim5Il15Level, setSim5Il15Level] = useState<number>(80); // %

  const SECTIONS_NAV = [
    { id: 'sec-6-gell-coombs-tipo1-sens', label: '6.1 Gell & Coombs, Allergeni, DC2 & FcεRI', icon: Layers },
    { id: 'sec-6-tipo1-scatenamento-clinica', label: '6.2 Mediatori Mastociti, Asma, Anafilassi & Biologici', icon: Wind },
    { id: 'sec-6-tipo2', label: '6.3 Tipo II: Citotossicità, AB0/Rh & Recettori', icon: ShieldAlert },
    { id: 'sec-6-tipo3', label: '6.4 Tipo III: Immunocomplessi & Malattia da Siero', icon: Droplets },
    { id: 'sec-6-tipo4', label: '6.5 Tipo IV: Pichler, DAC, Mantoux/IGRA & Celiachia', icon: Flame },
    { id: 'sec-6-verifica', label: '6.6 Sintesi Master, Quiz d\'Esame & Flashcard', icon: CheckCircle2 }
  ];

  // ScrollSpy per aggiornare la pillola attiva nella barra di navigazione
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

  // Calcolo compatibilità AB0 per il Simulatore 3
  const ab0Evaluation = useMemo(() => {
    if (sim3Donor === '0') {
      return { compatible: true, status: 'Compatibile', text: 'Il gruppo 0 non esprime antigeni saccaridici A o B sulle emazie (donatore universale di globuli rossi concentrati).' };
    }
    if (sim3Recipient === 'AB') {
      return { compatible: true, status: 'Compatibile', text: 'Il ricevente AB non possiede isoemoagglutinine plasmatiche anti-A né anti-B (ricevente universale di emazie).' };
    }
    if (sim3Donor === sim3Recipient) {
      return { compatible: true, status: 'Compatibile', text: `Gruppi identici (${sim3Donor}): nessuna reazione con le isoemoagglutinine del ricevente.` };
    }
    const antibodies = sim3Recipient === '0' ? 'Anti-A e Anti-B (IgM)' : sim3Recipient === 'A' ? 'Anti-B (IgM)' : 'Anti-A (IgM)';
    return {
      compatible: false,
      status: 'EMOLISI INTRAVASCOLARE FULMINANTE',
      text: `Grave incompatibilità: il ricevente possiede ${antibodies} che legano istantaneamente le emazie trasfuse attivando la via classica del complemento (MAC C5b-9), causando shock emodinamico e insufficienza renale acuta.`
    };
  }, [sim3Donor, sim3Recipient]);

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 ${proseFontClass} pb-24 transition-colors duration-200`}>
      
      {/* =========================================================================
          TESTATA MONUMENTALE CAPITOLO VI
          ========================================================================= */}
      <header className="relative bg-gradient-to-br from-rose-950 via-slate-900 to-red-950 text-white border-b border-rose-800/40 py-12 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-rose-500/20 text-rose-300 border border-rose-400/40">
              Trattato Accademico Ufficiale • Capitolo VI
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700">
              Lezioni 26, 27 e 28 Integrate
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-900/40 text-red-200 border border-red-700/50">
              Cattedre: Prof. Antonangeli • Prof.ssa Galandrini • Prof.ssa Molfetta • Prof.ssa Soriani
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Reazioni di Ipersensibilità (Tipi I–IV) & Immunopatologia Clinica
            </h1>
            <p className="text-base sm:text-lg text-rose-100/90 max-w-4xl leading-relaxed">
              Dalla rottura dell'omeostasi mucosale ed epiteliale al danno tissutale immuno-mediato: 
              analisi biochimica e molecolare dei 4 prototipi di Gell e Coombs, recettori FcεRI, 
              mediatori lipidici e peptidici dei mastociti, isoemoagglutinine AB0 e sistema Rh/MEN, 
              fisica della curva di Heidelberger-Kendall e patologie da immunocomplessi, fino alla 
              sottoclassificazione di Pichler del Tipo IV con Mantoux, dermatite da contatto e celiachia.
            </p>
          </div>

          {/* KPI del Capitolo */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-rose-800/30 text-xs font-mono">
            <div className="bg-slate-900/60 p-3 rounded-xl border border-rose-800/30">
              <span className="text-rose-400 block font-semibold">Tipi di Gell & Coombs</span>
              <span className="text-white text-base font-bold">4 Classi (I–IV)</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-xl border border-rose-800/30">
              <span className="text-rose-400 block font-semibold">Affinità FcεRI</span>
              <span className="text-white text-base font-bold">Kd ≈ 10⁻¹⁰ M</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-xl border border-rose-800/30">
              <span className="text-rose-400 block font-semibold">Immunocomplessi Solubili</span>
              <span className="text-white text-base font-bold">Lieve Eccesso Ag</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-xl border border-rose-800/30">
              <span className="text-rose-400 block font-semibold">Genetica Celiachia</span>
              <span className="text-white text-base font-bold">HLA-DQ2 / DQ8</span>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          BARRA STICKY DI NAVIGAZIONE INTERNA DEL CAPITOLO (SECTIONS_NAV)
          ========================================================================= */}
      <nav aria-label="Navigazione interna capitolo 6" className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-2 px-3 sm:px-6">
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
                      ? 'bg-rose-600 text-white shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-rose-600 dark:hover:text-rose-400'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`} />
                  <span>{sec.label}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500">
            <span>Docenti: Galandrini / Soriani</span>
          </div>
        </div>
      </nav>

      {/* =========================================================================
          CORPO CENTRALE DEL TRATTATO (MAX-W-7XL)
          ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">

        {/* -----------------------------------------------------------------------
            SEZIONE 6.1: CLASSIFICAZIONE GELL E COOMBS & SENSIBILIZZAZIONE TIPO I
            ----------------------------------------------------------------------- */}
        <section id="sec-6-gell-coombs-tipo1-sens" className="scroll-mt-24 space-y-8">
          
          <div className="border-l-4 border-rose-600 pl-4 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 font-bold">
              Sezione 6.1 • Dalla Lezione 26
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              Classificazione di Gell e Coombs e Fase di Sensibilizzazione dell'Ipersensibilità di Tipo I
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Basi biochimiche degli allergeni, attività enzimatica proteasica intrinseca (Der p 1), sensing epiteliale via PAR-2 e allarmine, differenziamento DC2 e armamento tetramerico del recettore FcεRI.
            </p>
          </div>

          {/* QUADRO SINOTTICO COMPARATIVO DEI 4 TIPI DI GELL E COOMBS */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Layers className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <span>Tavola Sinottica Fondamentale: I 4 Tipi di Reazioni di Ipersensibilità (Gell e Coombs, 1963)</span>
              </h3>
              <span className="text-xs font-mono bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 px-2.5 py-1 rounded-full border border-rose-200 dark:border-rose-800">
                Inquadramento Generale
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 font-mono border-b border-slate-200 dark:border-slate-800">
                    <th className="p-3">Tipo & Denominazione</th>
                    <th className="p-3">Mediatore Primario</th>
                    <th className="p-3">Natura dell'Antigene</th>
                    <th className="p-3">Meccanismo Effettore</th>
                    <th className="p-3">Cinetica di Picco</th>
                    <th className="p-3">Prototipi Clinici</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-rose-600 dark:text-rose-400 font-mono">Tipo I (Immediata / Atopica)</td>
                    <td className="p-3 font-mono">IgE</td>
                    <td className="p-3">Solubile (Allergeni ambientali o alimentari, 10–70 kDa)</td>
                    <td className="p-3">Degranulazione di mastociti e basofili (istamina, LTC4/D4/E4, PGD2, citochine Th2)</td>
                    <td className="p-3 font-mono">15–30 min (fase precoce); 6–12 h (fase tardiva)</td>
                    <td className="p-3">Anafilassi sistemica, asma bronchiale allergico, rinite allergica, orticaria acuta</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-blue-600 dark:text-blue-400 font-mono">Tipo II (Citotossica / Recettoriale)</td>
                    <td className="p-3 font-mono">IgG, IgM</td>
                    <td className="p-3 font-medium text-slate-900 dark:text-slate-100">Fisso / Insolubile (superficie cellulare o matrice extracellulare)</td>
                    <td className="p-3">Opsonizzazione e fagocitosi via FcγR, lisi MAC C5b-9, ADCC o alterazione del segnale recettoriale</td>
                    <td className="p-3 font-mono">Minuti (AB0) a Ore / Giorni</td>
                    <td className="p-3">Reazioni AB0, MEN (RhD), Goodpasture, Graves, Miastenia Gravis, Pemfigo</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-amber-600 dark:text-amber-400 font-mono">Tipo III (da Immunocomplessi)</td>
                    <td className="p-3 font-mono">IgG, IgM (complessate)</td>
                    <td className="p-3 font-medium text-slate-900 dark:text-slate-100">Solubile in lieve eccesso (proteine eterologhe, DNA, antigeni virali)</td>
                    <td className="p-3">Deposizione vascolare di immunocomplessi, attivazione complemento (C5a) e neutrofili (fagocitosi frustrata)</td>
                    <td className="p-3 font-mono">4–10 h (Arthus) / 7–14 giorni (Malattia da siero)</td>
                    <td className="p-3">Malattia da siero, reazione di Arthus, Lupus Eritematoso Sistemico (LES), glomerulonefriti</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-emerald-600 dark:text-emerald-400 font-mono">Tipo IV (Ritardata / Cellulo-Mediata)</td>
                    <td className="p-3 font-mono">Linfociti T (Th1, Th2, Th17, CTL CD8⁺)</td>
                    <td className="p-3">Apteni-carrier cutanei, micobatteri, autoantigeni o peptidi alimentari (gliadina)</td>
                    <td className="p-3">Attivazione di macrofagi M1 via IFN-γ, citotossicità Perforina/Granzimi o reclutamento di neutrofili/eosinofili</td>
                    <td className="p-3 font-mono">24–72 ore (DTH - Delayed-Type Hypersensitivity)</td>
                    <td className="p-3">Test di Mantoux, dermatite allergica da contatto, celiachia, sindrome di Stevens-Johnson</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* TRATTAZIONE DETTAGLIATA: NATURA BIOCHIMICA DEGLI ALLERGENI E SENSING EPITELIALE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Microscope className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <span>Natura Biochimica degli Allergeni & Attività Enzimatica Intrinseca</span>
              </h3>
              <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
                Gli allergeni non sono semplici antigeni inerti: si tratta di proteine idrosolubili a basso peso molecolare (tra <strong>10 e 70 kDa</strong>) in grado di eluire rapidamente dalle particelle aerodisperse (granuli pollinici, feci di acari, forfora animale) a contatto con le superfici mucose umide.
              </p>
              <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
                La caratteristica molecolare più sovversiva di molti allergeni maggiori è la presenza di <strong>attività enzimatica intrinseca</strong>. L'esempio cardine esposto a lezione è l'allergene <strong>Der p 1</strong> (dell'acaro <em>Dermatophagoides pteronyssinus</em>):
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc list-inside bg-rose-50/50 dark:bg-rose-950/20 p-3.5 rounded-xl border border-rose-200/50 dark:border-rose-900/40">
                <li><strong>Attività Cisteina-Proteasica Diretta</strong>: Der p 1 digerisce selettivamente le proteine delle <em>tight junctions</em> inter-epiteliali (<strong>occludina</strong> e <strong>claudina-1</strong>), disgregando il sigillo di barriera e aprendo una via trans-epiteliale per l'ingresso di particelle antigeniche nella lamina propria.</li>
                <li><strong>Clivaggio di Recettori Immunologici</strong>: Der p 1 taglia enzimaticamente la subunità a bassa affinità per le IgE <strong>CD23 (FcεRII)</strong> e la subunità α del recettore dell'IL-2 <strong>CD25</strong>, alterando i fisiologici meccanismi di feedback omeostatico immunitario.</li>
                <li><strong>Attivazione di PAR-2</strong>: L'attività proteasica cliva il dominio extracellulare del recettore attivato dalle proteasi <strong>PAR-2</strong> sulle cellule epiteliali, innescando una trasduzione del segnale autonoma e infiammatoria.</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                <span>Sensing Epiteliale, Allarmine e Priming Linfocitario Th2/DC2</span>
              </h3>
              <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
                La penetrazione dell'allergene e l'attivazione di PAR-2 inducono l'epitelio a secernere una triade di citochine allarmine fondamentali: <strong>TSLP (Linfopoietina Timica Stromale)</strong>, <strong>IL-33</strong> (famiglia IL-1, ligando di ST2) e <strong>IL-25 (IL-17E)</strong>.
              </p>
              <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
                Questo microambiente citochinico condiziona le cellule presentanti l'antigene residenti:
              </p>
              <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                <div className="p-2.5 bg-slate-50 dark:bg-slate-850 rounded-lg border border-slate-200 dark:border-slate-800">
                  <strong className="text-rose-600 dark:text-rose-400">1. Generazione di DC2:</strong> Sotto lo stimolo di TSLP, le cellule dendritiche mieloidi maturano in cellule <strong>DC2</strong>, caratterizzate dalla sovraespressione della molecola costimolatoria <strong>OX40L</strong> e dalla <strong>completa repressione della sintesi di IL-12</strong> (il cui difetto impedisce a monte qualsiasi polarizzazione Th1).
                </div>
                <div className="p-2.5 bg-slate-50 dark:bg-slate-850 rounded-lg border border-slate-200 dark:border-slate-800">
                  <strong className="text-rose-600 dark:text-rose-400">2. Attivazione delle ILC2:</strong> IL-33 e IL-25 espandono le <em>Innate Lymphoid Cells</em> di Tipo 2 (ILC2), che rilasciano precocemente <strong>IL-5</strong> e <strong>IL-13</strong>.
                </div>
                <div className="p-2.5 bg-slate-50 dark:bg-slate-850 rounded-lg border border-slate-200 dark:border-slate-800">
                  <strong className="text-rose-600 dark:text-rose-400">3. Polarizzazione Th2 e Switch IgE:</strong> Nei linfonodi drenanti, le DC2 presentano l'allergene ai linfociti T CD4⁺ vergini inducendo <strong>GATA-3</strong> (linfociti <strong>Th2</strong> e <strong>Tfh2</strong>). Il rilascio di <strong>IL-4</strong> e <strong>IL-13</strong> stimola i linfociti B: l'attivazione del fattore di trascrizione <strong>STAT6</strong> apre il promotore sterile Iε, consentendo all'enzima <strong>AID</strong> di operare la ricombinazione di switch isotipico verso la catena pesante ε (produzione di <strong>IgE</strong> monoclonali/oligoclonali).
                </div>
              </div>
            </div>

          </div>

          {/* STRUTTURA DEL RECETTORE FcεRI E MECCANISMO DI ARMAMENTO */}
          <div className="bg-gradient-to-r from-rose-50 to-orange-50 dark:from-slate-900 dark:to-slate-900 border border-rose-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-rose-200/60 dark:border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <span>Struttura Tetramerica del Recettore FcεRI e Fisiologia dell'"Armamento" Mastocitario</span>
              </h3>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-rose-200 dark:bg-rose-950 text-rose-800 dark:text-rose-300 font-semibold self-start sm:self-auto">
                Affinità Kd ≈ 10⁻¹⁰ M
              </span>
            </div>

            <p className={`text-slate-700 dark:text-slate-300 ${proseSizeClass}`}>
              Il recettore ad alta affinità per le IgE (<strong>FcεRI</strong>) espresso sulla membrana citoplasmatica di mastociti e basofili è un complesso eterotetramerico formato da <strong>quattro catene polipeptidiche (αβγ₂)</strong>:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-white dark:bg-slate-850 p-4 rounded-xl border border-rose-200 dark:border-slate-700 space-y-2">
                <span className="font-mono font-bold text-rose-600 dark:text-rose-400 block text-sm">Catena α (Subunità di Riconoscimento)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Proteina transmembrana di Tipo I appartenente alla superfamiglia delle immunoglobuline (2 domini Ig-like extracellulari). Contatta con altissima affinità (Ka ≈ 10¹⁰ M⁻¹, Kd ≈ 10⁻¹⁰ M) il <strong>dominio costante Cε3</strong> della catena pesante dell'IgE.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-850 p-4 rounded-xl border border-rose-200 dark:border-slate-700 space-y-2">
                <span className="font-mono font-bold text-amber-600 dark:text-amber-400 block text-sm">Catena β (Amplificatore di Segnale)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Polipeptide a <strong>4 domini transmembrana</strong> che avvolge la catena α. Possiede nella coda citoplasmatica un <strong>motivo ITAM</strong> canonico: agisce da potente amplificatore della cascata di fosforilazione intracellulare, aumentando l'intensità del segnale di oltre 5-7 volte.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-850 p-4 rounded-xl border border-rose-200 dark:border-slate-700 space-y-2">
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 block text-sm">Omodimero γ₂ (Trasduttore Effettore)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Due subunità identiche unite da un ponte disolfuro intercatena (identiche alle catene γ di CD16). Ciascuna catena possiede un <strong>motivo ITAM citosolico</strong>: dopo la fosforilazione da parte della chinasi Lyn, costituiscono la docking station per la tirosin-chinasi <strong>Syk</strong>.
                </p>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-slate-850 rounded-xl border-l-4 border-rose-600 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong>Il Fenomeno Clinico dell'"Armamento":</strong> I normali recettori per le IgG (FcγR) possiedono affinità basse o intermedie (Kd ≈ 10⁻⁶ – 10⁻⁷ M) e legano solo immunocomplessi polimerici. FcεRI possiede invece un'affinità 100.000 volte superiore: anche a concentrazioni sieriche bassissime di IgE libera (nanogrammi o picogrammi per millilitro, normali nel soggetto sano), la costante di dissociazione è così lenta che <strong>tutti i recettori FcεRI sui mastociti tessutali sono perennemente e stabilmente occupati da molecole di IgE</strong>. Il mastocita è dunque costitutivamente "armato" con un repertorio eterogeneo di IgE policlonali dirette contro molteplici antigeni ambientali.
            </div>
          </div>

        </section>

        {/* -----------------------------------------------------------------------
            SEZIONE 6.2: SCATENAMENTO TIPO I, MEDIATORI, ASMA, ANAFILASSI & BIOLOGICI
            ----------------------------------------------------------------------- */}
        <section id="sec-6-tipo1-scatenamento-clinica" className="scroll-mt-24 space-y-8">
          
          <div className="border-l-4 border-amber-500 pl-4 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
              Sezione 6.2 • Dalle Lezioni 26 e 27
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              Fase di Scatenamento, Segnalazione di FcεRI, Cascata dei Mediatori, Asma e Terapie d'Urgenza e Biologiche
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Cross-linking multivalente, chinasi Lyn/Syk, degranulazione mediata da SNARE, LTC4/D4/E4 vs Istamina, triptasi come biomarker, shock anafilattico e adrenalina salvavita, recettore pseudoallergico MRGPRX2, anticorpi monoclonali e switch a IgG4 via AIT.
            </p>
          </div>

          {/* CASCATA BIOCHIMICA INTRACELLULARE DI FcεRI */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              <span>Biochimica del Cross-Linking: Perché il Legame Monomerico non Attiva il Mastocita</span>
            </h3>
            <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
              Il semplice legame di un anticorpo IgE a FcεRI non trasduce alcun segnale (stato di quiescenza sensibilizzata). Per scatenare l'attivazione è <strong>condizione biologica obbligatoria che un allergene bivalente o multivalente realizzi il "cross-linking" (ponte trasversale) aggregando almeno due recettori FcεRI contigui</strong> sulla superficie cellulare:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-mono font-bold text-slate-900 dark:text-slate-100 block">1. Aggregazione & Lyn</span>
                <p className="text-slate-600 dark:text-slate-400">
                  Il cross-linking avvicina i recettori nei lipid rafts. La chinasi della famiglia Src <strong>Lyn</strong> fosforila i residui di tirosina negli ITAM delle catene β e γ₂.
                </p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-mono font-bold text-slate-900 dark:text-slate-100 block">2. Reclutamento di Syk</span>
                <p className="text-slate-600 dark:text-slate-400">
                  I doppi domini SH2 della chinasi <strong>Syk</strong> si ancorano agli ITAM fosforilati. Syk si autofosforila e attiva la proteina adattatrice di membrana <strong>LAT</strong>.
                </p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-mono font-bold text-slate-900 dark:text-slate-100 block">3. Asse PLC-γ & Calcio</span>
                <p className="text-slate-600 dark:text-slate-400">
                  LAT recluta <strong>PLC-γ</strong>, che idrolizza PIP2 in <strong>IP3</strong> (apertura canali Ca²⁺ del RE) e <strong>DAG</strong> (attivazione PKC). Il picco di Ca²⁺ guida la fusione esocitica dei granuli via proteine SNARE.
                </p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-mono font-bold text-slate-900 dark:text-slate-100 block">4. Via MAPK & cPLA2</span>
                <p className="text-slate-600 dark:text-slate-400">
                  La via Ras/Raf/MEK/<strong>ERK</strong> fosforila la <strong>Fosfolipasi A2 citosolica (cPLA2)</strong>, che idrolizza i fosfolipidi di membrana liberando <strong>Acido Arachidonico</strong> per la sintesi lipidica de novo.
                </p>
              </div>
            </div>
          </div>

          {/* I TRE GRUPPI DI MEDIATORI MASTOCITARI */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Clock className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              <span>La Triade Temporale dei Mediatori Mastocitari: Preformati, Lipidici e Citochine</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
              
              {/* Mediatori Preformati */}
              <div className="space-y-3 p-4 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-rose-700 dark:text-rose-300 font-mono">1. Preformati (Granuli)</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-200 font-bold">1–15 minuti</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Rilasciati istantaneamente per esocitosi delle vescicole pre-immagazzinate:
                </p>
                <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 list-disc list-inside">
                  <li><strong>Istamina:</strong> legame al recettore <strong>H1</strong> sulle cellule endoteliali (rilascio di NO e prostaciclina → vasodilatazione, contrazione delle cellule endoteliali venulari con aumento della permeabilità, pomfo ed eritema) e sulla muscolatura liscia bronchiale (broncospasmo acuto).</li>
                  <li><strong>Triptasi:</strong> proteasi neutra specifica dei granuli mastocitari. <em>Biomarker cardine dello shock anafilattico</em> (dosaggio gold-standard entro 1–3 ore).</li>
                  <li><strong>Chimasi:</strong> proteasi serinica che attiva l'angiotensina II e degrada la matrice extracellulare.</li>
                  <li><strong>Eparina e Condroitin-solfato:</strong> proteoglicani acidi solfatati che impacchettano l'istamina nel granulo mantenendo un pH acido.</li>
                </ul>
              </div>

              {/* Mediatori Lipidici */}
              <div className="space-y-3 p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-700 dark:text-amber-300 font-mono">2. Lipidici (De Novo)</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200 font-bold">15–60 minuti</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Metabolismo enzimatico dell'acido arachidonico liberato dalla cPLA2:
                </p>
                <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 list-disc list-inside">
                  <li><strong>Leucotrieni Cisteinilici (LTC4, LTD4, LTE4):</strong> sintetizzati dalla 5-Lipossigenasi (5-LO). Costituiscono la storica sostanza <em>SRS-A (Slow Reacting Substance of Anaphylaxis)</em>: sono <strong>1.000 volte più potenti dell'istamina</strong> nell'indurre broncocostrizione prolungata e ipersecrezione mucosa (bloccati da <strong>Montelukast</strong>).</li>
                  <li><strong>Prostaglandina D2 (PGD2):</strong> sintetizzata dalla Ciclossigenasi (COX); induce marcata vasodilatazione, edema e reclutamento chemotattico di Th2 ed eosinofili via recettore <strong>CRTH2</strong>.</li>
                  <li><strong>PAF (Fattore Attivante le Piastrine):</strong> potente aggregante piastrinico, vasodilatatore e broncocostrittore.</li>
                </ul>
              </div>

              {/* Citochine Fase Tardiva */}
              <div className="space-y-3 p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-blue-700 dark:text-blue-300 font-mono">3. Citochine (Fase Tardiva)</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-bold">4–24 ore</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Trascrizione genica de novo guidata da NF-κB, NFAT e AP-1:
                </p>
                <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 list-disc list-inside">
                  <li><strong>TNF-α:</strong> presente in parte già preformato e in parte sintetizzato de novo; attiva l'endotelio a esprimere molecole di adesione (E-selectina, ICAM-1, VCAM-1).</li>
                  <li><strong>IL-4 & IL-13:</strong> perpetuano lo switch a IgE nei linfociti B e stimolano l'iperplasia delle goblet cells con ipersecrezione di muco.</li>
                  <li><strong>IL-5:</strong> citochina guida per la sopravvivenza, maturazione midollare e chemiotassi degli <strong>Eosinofili</strong>, innescando la flogosi cronica e il rimodellamento tessutale.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* SIMULATORE 1: FASI DELL'IPERSENSIBILITÀ DI TIPO I & DEGRANULAZIONE */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-lg space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-rose-400" />
                <h3 className="text-base font-bold text-white">Simulatore Interattivo: Cinetica Trifasica dell'Ipersensibilità di Tipo I</h3>
              </div>
              <span className="text-xs font-mono bg-slate-800 px-3 py-1 rounded text-rose-300 border border-slate-700">
                Laboratorio Dinamico di Immunopatologia
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 block">Fase Patogenetica:</label>
                <div className="grid grid-cols-3 gap-1 bg-slate-800 p-1 rounded-lg">
                  <button
                    onClick={() => setSim1Phase('sensitization')}
                    className={`py-1.5 text-[11px] font-mono rounded transition-all ${
                      sim1Phase === 'sensitization' ? 'bg-rose-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Sensibilizzazione
                  </button>
                  <button
                    onClick={() => setSim1Phase('immediate')}
                    className={`py-1.5 text-[11px] font-mono rounded transition-all ${
                      sim1Phase === 'immediate' ? 'bg-rose-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Immediata (1-15m)
                  </button>
                  <button
                    onClick={() => setSim1Phase('late')}
                    className={`py-1.5 text-[11px] font-mono rounded transition-all ${
                      sim1Phase === 'late' ? 'bg-rose-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Tardiva (4-24h)
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-slate-300">
                  <span>Carico Allergenico:</span>
                  <span className="text-rose-400 font-bold">{sim1AllergenLoad}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={sim1AllergenLoad}
                  onChange={(e) => setSim1AllergenLoad(Number(e.target.value))}
                  className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 block">Cross-Linking Multivalente FcεRI:</label>
                <button
                  onClick={() => setSim1CrosslinkActive(!sim1CrosslinkActive)}
                  className={`w-full py-2 px-3 rounded-lg text-xs font-mono font-bold transition-all border ${
                    sim1CrosslinkActive
                      ? 'bg-emerald-950/70 border-emerald-500 text-emerald-300'
                      : 'bg-rose-950/70 border-rose-500 text-rose-300'
                  }`}
                >
                  {sim1CrosslinkActive ? 'Cross-Linking Attivo (Multivalente)' : 'Cross-Linking Assente (Monomerico)'}
                </button>
              </div>
            </div>

            {/* Pannello Risultato Simulatore 1 */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono border-b border-slate-850 pb-2">
                <span className="text-slate-400">Stato Molecolare Attuale:</span>
                <span className="text-rose-400 font-bold">
                  {sim1Phase === 'sensitization' && 'Priming Linfonodale & Armamento Mastociti'}
                  {sim1Phase === 'immediate' && (sim1CrosslinkActive ? 'Degranulazione Immediata & Liberazione Mediatori' : 'Legame Quiescente (Nessuna Degranulazione)')}
                  {sim1Phase === 'late' && 'Infiltrazione Eosinofila & Rimodellamento Epiteliale'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block font-mono">Istamina & Triptasi Rilasciate:</span>
                  <span className="text-base font-bold text-white">
                    {sim1Phase === 'sensitization' || !sim1CrosslinkActive ? '0 % (Granuli Intatti)' : `${Math.round(sim1AllergenLoad * 0.95)} %`}
                  </span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block font-mono">Leucotrieni Cisteinilici (LTC4/D4/E4):</span>
                  <span className="text-base font-bold text-amber-400">
                    {sim1Phase === 'immediate' && sim1CrosslinkActive ? `${Math.round(sim1AllergenLoad * 0.85)} % (SRS-A attiva)` : sim1Phase === 'late' ? '40 %' : '0 %'}
                  </span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block font-mono">Infiltrato Eosinofilo Tessutale:</span>
                  <span className="text-base font-bold text-emerald-400">
                    {sim1Phase === 'late' && sim1CrosslinkActive ? `${Math.round(sim1AllergenLoad * 1.1)} cellule/campo (IL-5 dipendente)` : 'Minimo fisiologico'}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                {sim1Phase === 'sensitization' && 'La prima esposizione all\'allergene non scatena sintomi clinici. TSLP e allarmine epiteliali attivano DC2 ed espandono cloni Th2 secernenti IL-4/IL-13. I linfociti B operano switch a IgE, che si ancorano stabilmente a FcεRI armando tutti i mastociti.'}
                {sim1Phase === 'immediate' && sim1CrosslinkActive && 'Alla ri-esposizione, l\'allergene multivalente aggrega FcεRI adiacenti. La chinasi Lyn fosforila gli ITAM, Syk attiva PLC-γ e il massiccio afflusso di calcio citosolico guida la fusione dei granuli con rilascio fulmineo di istamina e triptasi sierica in meno di 15 minuti.'}
                {sim1Phase === 'immediate' && !sim1CrosslinkActive && 'Antigene monomerico o non aggregante: pur legando singole IgE, non induce cross-linking recettoriale. Lyn non fosforila gli ITAM e i granuli rimangono sigillati, dimostrando la specificità geometrica assoluta del Tipo I.'}
                {sim1Phase === 'late' && 'A distanza di 4-24 ore dalla degranulazione acuta, il rilascio di IL-5 ed eotassine richiama un massiccio contingente di eosinofili nel tessuto, responsabili della necrosi epiteliale bronchiale e dell\'iperreattività asmatica cronica.'}
              </p>
            </div>
          </div>

          {/* ASMA BRONCHIALE CRONICA, AIRWAY REMODELING E CELLULE EFFETTRICI EOSINOFILICHE */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Wind className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Biologia degli Eosinofili e Airway Remodeling nell'Asma Grave</span>
            </h3>
            <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
              Nell'asma bronchiale persistente, la lesione tissutale evolve oltre il semplice broncospasmo acuto: l'infiltrazione cronica di eosinofili orchestrata da <strong>IL-5</strong> e chemochine <strong>CCL11, CCL24, CCL26 (Eotassine)</strong> scatena il processo irreversibile di <strong>rimodellamento delle vie aeree (Airway Remodeling)</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 block font-mono">Tossicità Granulare dell'Eosinofilo</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Gli eosinofili rilasciano per degranulazione proteine cationiche altamente citotossiche per l'epitelio respiratorio ciliato:
                </p>
                <ul className="space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside">
                  <li><strong>MBP (Major Basic Protein):</strong> proteina basica che altera la carica della membrana plasmatica epiteliale provocando desquamazione diffusa dell'epitelio ciliato.</li>
                  <li><strong>ECP (Eosinophil Cationic Protein):</strong> forma pori citotossici nella membrana delle cellule respiratorie e possiede attività ribonucleasica.</li>
                  <li><strong>EPO (Eosinophil Peroxidase):</strong> genera radicali alogenati reattivi (acido ipobromoso) che perossidano lipidi di membrana.</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 block font-mono">Alterazioni Strutturali Istologiche del Rimodellamento</span>
                <p className="text-slate-600 dark:text-slate-300">
                  La flogosi cronica Th2 ed eosinofila determina modificazioni anatomopatologiche irreversibili:
                </p>
                <ul className="space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside">
                  <li><strong>Ispessimento della Membrana Basale Subepiteliale:</strong> deposizione abnorme di collagene di tipo I, III e V da parte di miofibroblasti attivati da TGF-β.</li>
                  <li><strong>Iperplasia e Ipertrofia della Muscolatura Liscia:</strong> aumento volumetrico e numerico dei miociti bronchiali responsabili dell'iperreattività intrattabile.</li>
                  <li><strong>Metaplasia Caliciforme:</strong> espansione delle cellule caliciformi (IL-13 dipendente) con formazione di tappi mucosi compatti (spirali di Curschmann e cristalli di Charcot-Leyden).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CLINICA DELL'ANAFILASSI, TERAPIA D'EMERGENZA E REAZIONI PSEUDOALLERGICHE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Box Adrenalina Salvavita */}
            <div className="bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-600 dark:border-rose-500 rounded-2xl p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <HeartPulse className="w-6 h-6 animate-pulse" />
                <h3 className="text-base font-bold">Shock Anafilattico: Farmaco Salvavita di Prima Linea</h3>
              </div>
              <p className={`text-slate-700 dark:text-slate-200 font-medium ${proseSizeClass}`}>
                Nell'anafilassi sistemica grave il farmaco di prima scelta assoluta, salvavita e immediato è l'<strong>Adrenalina (Epinefrina) somministrata per via intramuscolare (0,3–0,5 mg nell'adulto nel vasto laterale della coscia)</strong>.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-900/80 p-3.5 rounded-xl border border-rose-300 dark:border-rose-800">
                <p><strong>Azione Recettoriale Adrenergica Sincronizzata:</strong></p>
                <ul className="space-y-1 list-disc list-inside">
                  <li><strong>Recettori α1-adrenergici:</strong> vasocostrizione arteriolare periferica massiva → ripristina istantaneamente le resistenze vascolari sistemiche risolvendo il collasso emodinamico da vasodilatazione, e riduce rapidamente l'edema mucoso laringeo e glottideo.</li>
                  <li><strong>Recettori β1-adrenergici:</strong> incremento della contrattilità miocardica (inotropo positivo) e della frequenza (cronotropo positivo) a supporto della gittata cardiaca.</li>
                  <li><strong>Recettori β2-adrenergici:</strong> rapida broncodilatazione risolutiva del broncospasmo e, a livello mastocitario, <strong>innalzamento dei livelli intracellulari di cAMP che blocca direttamente l'ulteriore degranulazione</strong>!</li>
                </ul>
              </div>
              <p className="text-xs text-rose-800 dark:text-rose-300 italic">
                *Nota clinica d'esame: Antistaminici e cortisonici sono farmaci ancillari di seconda/terza linea con latenza d'azione (ore per i corticosteroidi); NON sostituiscono mai l'adrenalina nell'anafilassi acuta!
              </p>
            </div>

            {/* Box Reazioni Pseudoallergiche e Recettore MRGPRX2 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                <AlertTriangle className="w-5 h-5" />
                <h3 className="text-base font-bold">Reazioni Pseudoallergiche (Anafilattoidi) & Recettore MRGPRX2</h3>
              </div>
              <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
                In clinica si osservano quadri indistinguibili dallo shock anafilattico che si verificano <strong>alla prima somministrazione di un farmaco e in assenza totale di IgE specifiche</strong> (RAST ed ImmunoCAP negativi):
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                <li><strong>Ingaggio Diretto del Recettore MRGPRX2:</strong> Recettore a 7 domini transmembrana (GPCR) espresso sui mastociti cutanei, attivato direttamente da molecole basiche policationiche tra cui <strong>curari miorilassanti</strong> (atracurio, rocuronio), <strong>oppioidi</strong> (morfina, codeina), <strong>fluorochinoloni</strong> (ciprofloxacina) e <strong>vancomicina</strong> (responsabile della <em>Red Man Syndrome</em>).</li>
                <li><strong>Anafilatossine del Complemento (C3a e C5a):</strong> Legano i recettori C3aR e C5aR sui mastociti scatenando degranulazione istantanea senza aggregazione di FcεRI (es. da complessi emodialitici o mezzi di contrasto radiologici iodati iperosmolari).</li>
              </ul>
              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-lg border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                La distinzione è cruciale: le reazioni mediate da MRGPRX2 non richiedono una fase di sensibilizzazione preventiva e dipendono strettamente dalla concentrazione e dalla velocità di infusione endovenosa del farmaco.
              </div>
            </div>

          </div>

          {/* TERAPIE BIOLOGICHE MIRATE ED IMMUNOTERAPIA SPECIFICA (AIT) */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Pill className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              <span>Arsenale Terapeutico Biologico & Switch a IgG4 nell'Immunoterapia Allergene-Specifica (AIT)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-rose-600 dark:text-rose-400 font-mono text-sm block">Omalizumab (Anti-IgE)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Anticorpo monoclonale umanizzato che lega selettivamente il <strong>dominio Cε3 delle IgE libere</strong> circolanti, impedendone l'aggancio al recettore FcεRI. <em>Non provoca mai degranulazione</em> perché non può legare IgE già ancorate al recettore; a lungo termine causa down-regolazione per endocitosi dei recettori FcεRI sui mastociti.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-blue-600 dark:text-blue-400 font-mono text-sm block">Dupilumab (Anti-IL-4Rα)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Blocca la catena comune <strong>IL-4Rα</strong> condivisa dai recettori di Tipo I e Tipo II delle citochine Th2. Inibisce simultaneamente la trasduzione del segnale di <strong>IL-4 e IL-13</strong>, spegnendo la sintesi di IgE, l'iperplasia mucosa e l'iperreattività bronchiale nell'asma grave e dermatite atopica.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono text-sm block">Mepolizumab & Reslizumab (Anti-IL-5)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Anticorpi neutralizzanti che legano direttamente l'<strong>IL-5 libera</strong> nel plasma, impedendone il legame alla catena IL-5Rα degli eosinofili e arrestandone la maturazione midollare e la sopravvivenza periferica nell'asma grave a fenotipo eosinofilico.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-purple-600 dark:text-purple-400 font-mono text-sm block">Benralizumab (Anti-IL-5Rα Afucosilato)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Lega la catena α del recettore dell'IL-5 espresso selettivamente su eosinofili e basofili. Essendo ingegnerizzato con <strong>Fc privo di fucosio (afucosilato)</strong>, possiede un'affinità 50 volte superiore per CD16a (FcγRIIIA) delle cellule NK, provocando l'eliminazione fulminea e quasi totale degli eosinofili via <strong>ADCC</strong>.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-amber-600 dark:text-amber-400 font-mono text-sm block">Tezepelumab (Anti-TSLP)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Anticorpo monoclonale umano che neutralizza la <strong>Linfopoietina Timica Stromale (TSLP)</strong> all'apice della cascata infiammatoria epiteliale. Efficace sia nell'asma allergico eosinofilico (T2-high) sia nell'asma non allergico non eosinofilico (T2-low).
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-rose-700 dark:text-rose-300 font-mono text-sm block">Immunoterapia Specifica (AIT) & IgG4</span>
                <p className="text-slate-600 dark:text-slate-300">
                  La somministrazione ripetuta a dosi crescenti dell'allergene (SCIT/SLIT) induce un reprograming immunitario: espansione di <strong>Treg (IL-10, TGF-β)</strong> che sopprimono i Th2, e switch dei linfociti B verso <strong>anticorpi bloccanti IgG4</strong>. Le IgG4 sequestrano l'allergene in circolo e co-ingaggiano il recettore inibitorio <strong>FcγRIIB (ITIM/SHIP1)</strong> sui mastociti, spegnendo la degranulazione.
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* -----------------------------------------------------------------------
            SEZIONE 6.3: IPERSENSIBILITÀ DI TIPO II (CITOTOSSICA E RECETTORIALE)
            ----------------------------------------------------------------------- */}
        <section id="sec-6-tipo2" className="scroll-mt-24 space-y-8">
          
          <div className="border-l-4 border-blue-600 pl-4 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
              Sezione 6.3 • Dalla Lezione 27
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              Ipersensibilità di Tipo II: Citotossicità Anticorpo-Mediata e Disfunzione Recettoriale
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Antigeni fissi e insolubili di membrana e matrice; lisi complementare intravascolare ed extravascolare splenica; incompatibilità trasfusionale AB0 ed isoemoagglutinine IgM; sistema RhD, transcitosi via FcRn, malattia emolitica del neonato (MEN) e diagnostica con Test di Coombs Diretto vs Indiretto; sindrome di Goodpasture con immunofluorescenza lineare; disfunzione recettoriale agonista (Morbo di Graves) e antagonista (Miastenia Gravis).
            </p>
          </div>

          {/* I TRE MECCANISMI MOLECOLARI DI DANNO NEL TIPO II */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>I 3 Meccanismi Fisiopatologici Cardine del Tipo II (IgG e IgM contro Antigeni Fissi)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
              
              <div className="p-4 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 rounded-xl space-y-2">
                <span className="font-bold text-blue-700 dark:text-blue-300 font-mono block">1. Opsonizzazione, Fagocitosi & Lisi MAC</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Le IgG e IgM si legano ad antigeni superficiali espressi sulle cellule ematiche circolanti (eritrociti, piastrine, neutrofili):
                </p>
                <ul className="space-y-1 list-disc list-inside text-slate-600 dark:text-slate-400">
                  <li><strong>Emolisi Extravascolare:</strong> Le emazie opsonizzate da IgG1/IgG3 e frammenti C3b vengono fagocitate dai macrofagi della milza e del fegato tramite i recettori <strong>FcγRI / FcγRIIA</strong> e <strong>CR1 / CR3</strong>.</li>
                  <li><strong>Emolisi Intravascolare Fulminante:</strong> Le IgM pentameriche fissano C1q con estrema efficienza, innescando la cascata terminale del complemento e la lisi osmotica da complesso di attacco alla membrana <strong>MAC (C5b-9)</strong> direttamente nel letto vasale.</li>
                </ul>
              </div>

              <div className="p-4 bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 rounded-xl space-y-2">
                <span className="font-bold text-rose-700 dark:text-rose-300 font-mono block">2. Flogosi Tissutale da Recettori Fc & C5a</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Gli autoanticorpi si legano a componenti strutturali fisse della <strong>matrice extracellulare o delle membrane basali</strong> vascolari:
                </p>
                <ul className="space-y-1 list-disc list-inside text-slate-600 dark:text-slate-400">
                  <li>I frammenti solubili <strong>C3a e C5a</strong> reclutano neutrofili e monociti circolanti.</li>
                  <li>I neutrofili ingaggiano le IgG fisse tramite i recettori <strong>FcγRIIIA e FcγRIIIB</strong>: non potendo inglobare un'intera membrana basale renale o alveolare, mettono in atto una <strong>fagocitosi frustrata</strong>, degranulando enzimi litici (elastasi, collagenasi) e riversando radicali liberi dell'ossigeno (ROS) con necrosi tessutale.</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/50 rounded-xl space-y-2">
                <span className="font-bold text-purple-700 dark:text-purple-300 font-mono block">3. Disfunzione Recettoriale Funzionale (Tipo V)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Gli anticorpi si legano a recettori di membrana ormonali o neurotrasmettitoriali senza indurre lisi cellulare né flogosi:
                </p>
                <ul className="space-y-1 list-disc list-inside text-slate-600 dark:text-slate-400">
                  <li><strong>Effetto Agonista / Stimolante:</strong> Morbo di Graves-Basedow (autoanticorpi TSI che legano TSHR attivando cAMP in assenza di TSH).</li>
                  <li><strong>Effetto Antagonista / Bloccante:</strong> Miastenia Gravis (autoanticorpi anti-AChR che bloccano la sinapsi neuromuscolare e provocano endocitosi del recettore).</li>
                </ul>
              </div>

            </div>
          </div>

          {/* APPROFONDIMENTO EMATOLOGICO: SISTEMA AB0, SISTEMA Rh, MALATTIA EMOLITICA DEL NEONATO E TEST DI COOMBS */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-5">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Droplets className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span>Immunologia Trasfusionale e Materno-Fetale: Sistema AB0, Sistema RhD & Test di Coombs</span>
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs sm:text-sm">
              
              {/* Sistema AB0 ed Isoemoagglutinine */}
              <div className="space-y-3 bg-slate-50 dark:bg-slate-850 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-sm block">1. Sistema AB0 ed Isoemoagglutinine Naturali IgM</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Gli antigeni del sistema AB0 sono catene oligosaccaridiche ramificate legate a sfingolipidi di membrana eritrocitaria, sintetizzate da specifiche glicosiltransferasi a partire dalla sostanza H di base (fucosio): l'allele A aggiunge <strong>N-acetil-galattosamina</strong>, l'allele B aggiunge <strong>D-galattosio</strong>, l'allele 0 è una variante amorfa non funzionale.
                </p>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-red-500 text-xs">
                  <strong>Origine delle Isoemoagglutinine "Naturali":</strong> Nei primi mesi di vita post-natale, la flora microbica saprofita intestinale espone sulla propria capsula polisaccaridi antigenicamente identici agli antigeni A e B. Il neonato sviluppa tolleranza verso gli epitopi presenti sulle proprie emazie, ma produce fisiologicamente anticorpi <strong>IgM T-indipendenti</strong> diretti contro gli antigeni saccaridici non espressi sul self (es. un soggetto di gruppo A produrrà anticorpi anti-B; un soggetto di gruppo 0 produrrà sia anti-A sia anti-B). Nella trasfusione incompatibile, queste IgM fissano C1q con emolisi intravascolare immediata mediata da MAC.
                </div>
              </div>

              {/* Sistema Rh e Malattia Emolitica del Neonato */}
              <div className="space-y-3 bg-slate-50 dark:bg-slate-850 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-sm block">2. Sistema RhD, Recettore FcRn e Malattia Emolitica del Neonato (MEN)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  A differenza del sistema AB0, l'antigene <strong>RhD</strong> è una proteina idrofobica transmembrana non glicosilata: <strong>non esistono anticorpi "naturali" anti-D</strong>. Un soggetto Rh⁻ sviluppa anticorpi anti-D solo in seguito a immunizzazione attiva primaria (trasfusione errata o gravidanza di feto Rh⁺).
                </p>
                <ul className="space-y-1.5 list-disc list-inside text-slate-600 dark:text-slate-300 text-xs">
                  <li><strong>Prima Gravidanza:</strong> Madre Rh⁻ con feto Rh⁺ (ereditato dal padre). Durante il distacco placentare al parto, emazie fetali Rh⁺ penetrano nel circolo materno. La madre viene sensibilizzata e sviluppa cloni B di memoria IgG1/IgG3 anti-D. Il primo nato nasce del tutto sano.</li>
                  <li><strong>Seconda Gravidanza:</strong> In una successiva gravidanza con feto Rh⁺, le IgG anti-D materne legano il <strong>recettore neonatale FcRn (recettore di Brambell)</strong> sul sinciziotrofoblasto (legame a pH acido 6.0 endosomiale e rilascio a pH fisiologico 7.4 nel feto), attraversano la barriera placentare e distruggono le emazie fetali nella milza fetale → anemia grave, eritroblastosi, ittero nucleare encefalico (<em>kernicterus</em>) e idrope fetale.</li>
                  <li><strong>Profilassi Salvavita con RhoGAM:</strong> Somministrazione di immunoglobuline umane anti-D (0,3 mg) alla madre Rh⁻ entro 72 ore dal primo parto (e a 28 settimane di gestazione). Le IgG esogene mascherano gli antigeni D sulle emazie fetali fuggite e ne promuovono l'eliminazione macrofagica silente, prevenendo a monte il priming dei linfociti B materni.</li>
                </ul>
              </div>

            </div>

            {/* Test di Coombs Diretto vs Indiretto */}
            <div className="bg-slate-100 dark:bg-slate-850 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="font-mono font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                Punto Cardine Metodologico: Test di Coombs Diretto vs Indiretto (Antiglobulina Umana)
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <strong className="text-blue-600 dark:text-blue-400 block mb-1">Test di Coombs Diretto (DAT - Direct Antiglobulin Test):</strong>
                  Ricerca <strong>anticorpi IgG o fattori del complemento già fissati in vivo sulla membrana dei globuli rossi del paziente</strong>. Si prelevano i globuli rossi del neonato/paziente, si lavano per rimuovere proteine sieriche libere e si aggiunge direttamente il <em>Reattivo di Coombs</em> (siero anti-IgG umane polivalente). Se i globuli rossi sono rivestiti da IgG, il reattivo fa da ponte legando gli Fc contigui, provocando <strong>agglutinazione visibile a occhio nudo</strong>.
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <strong className="text-rose-600 dark:text-rose-400 block mb-1">Test di Coombs Indiretto (IAT - Indirect Antiglobulin Test):</strong>
                  Ricerca <strong>anticorpi IgG anti-eritrocitari liberi nel siero del paziente</strong> (es. screening prenatale materno o pre-trasfusionale). Il siero materno viene incubato in vitro con emazie test standard Rh⁺; dopo lavaggio, si aggiunge il Reattivo di Coombs. L'agglutinazione dimostra la presenza di anticorpi anti-D liberi capaci di legare le emazie Rh⁺.
                </div>
              </div>
            </div>

          </div>

          {/* SIMULATORE 3: LABORATORIO TRASFUSIONALE AB0 & COOMBS */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-lg space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Baby className="w-5 h-5 text-blue-400" />
                <h3 className="text-base font-bold text-white">Simulatore Interattivo: Compatibilità AB0 e Prevenzione della Malattia Emolitica RhD</h3>
              </div>
              <span className="text-xs font-mono bg-slate-800 px-3 py-1 rounded text-blue-300 border border-slate-700">
                Laboratorio Immunoematologico
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 block">Gruppo Donatore Emazie:</label>
                <div className="grid grid-cols-4 gap-1 bg-slate-800 p-1 rounded-lg">
                  {(['0', 'A', 'B', 'AB'] as const).map((grp) => (
                    <button
                      key={grp}
                      onClick={() => setSim3Donor(grp)}
                      className={`py-1 text-xs font-mono rounded ${
                        sim3Donor === grp ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {grp}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 block">Gruppo Ricevente:</label>
                <div className="grid grid-cols-4 gap-1 bg-slate-800 p-1 rounded-lg">
                  {(['0', 'A', 'B', 'AB'] as const).map((grp) => (
                    <button
                      key={grp}
                      onClick={() => setSim3Recipient(grp)}
                      className={`py-1 text-xs font-mono rounded ${
                        sim3Recipient === grp ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {grp}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 block">Madre Rh⁻ Sensibilizzata al 1° Parto:</label>
                <button
                  onClick={() => setSim3RhMotherSensitized(!sim3RhMotherSensitized)}
                  className={`w-full py-1.5 px-3 rounded text-xs font-mono font-bold border transition-all ${
                    sim3RhMotherSensitized
                      ? 'bg-rose-950/80 border-rose-500 text-rose-300'
                      : 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                  }`}
                >
                  {sim3RhMotherSensitized ? 'Sensibilizzata (IgG anti-D presenti)' : 'Vergine (Nessun anti-D)'}
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 block">Profilassi RhoGAM Somministrata:</label>
                <button
                  onClick={() => setSim3RhoGAMGiven(!sim3RhoGAMGiven)}
                  className={`w-full py-1.5 px-3 rounded text-xs font-mono font-bold border transition-all ${
                    sim3RhoGAMGiven
                      ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                      : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}
                >
                  {sim3RhoGAMGiven ? 'Profilassi Effettuata (OK)' : 'Profilassi Omessa'}
                </button>
              </div>
            </div>

            {/* Risultato della Valutazione Immunoematologica */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-850 pb-2 text-xs font-mono">
                <span className="text-slate-400">Esito Trasfusionale AB0 (Donatore {sim3Donor} → Ricevente {sim3Recipient}):</span>
                <span className={`px-2.5 py-0.5 rounded font-bold ${
                  ab0Evaluation.compatible ? 'bg-emerald-950 text-emerald-300 border border-emerald-700' : 'bg-rose-950 text-rose-300 border border-rose-700'
                }`}>
                  {ab0Evaluation.status}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {ab0Evaluation.text}
              </p>

              <div className="pt-2 border-t border-slate-850 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="text-slate-400">Rischio Eritroblastosi Fetale (MEN) al 2° Figlio Rh⁺:</span>
                <span className={`px-2.5 py-0.5 rounded font-bold ${
                  sim3RhoGAMGiven || !sim3RhMotherSensitized
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                    : 'bg-rose-950 text-rose-300 border border-rose-700'
                }`}>
                  {sim3RhoGAMGiven
                    ? 'Protetto: RhoGAM ha prevenuto il priming B materno'
                    : !sim3RhMotherSensitized
                    ? 'Protetto: Madre non sensibilizzata'
                    : 'ALTO RISCHIO: IgG materne attraversano FcRn con emolisi fetale grave'}
                </span>
              </div>
            </div>
          </div>

          {/* SINDROME DI GOODPASTURE VS DISFUNZIONE RECETTORIALE (GRAVES E MIASTENIA GRAVIS) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Box Sindrome di Goodpasture */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Sindrome di Goodpasture: Immunofluorescenza Lineare Continua</span>
              </h3>
              <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
                Prototipo del danno tissutale infiammatorio mediato da anticorpi anti-membrana basale (anti-GBM):
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                <li><strong>Autoantigene Bersaglio:</strong> Dominio globulare non-collagenico <strong>NC1 della catena α3 del Collagene di Tipo IV</strong>, altamente espresso nelle membrane basali dei glomeruli renali e degli alveoli polmonari.</li>
                <li><strong>Quadro Clinico:</strong> Sindrome nefritica rapidamente progressiva (glomerulonefrite a semilune) associata a emorragia alveolare ed emottisi fulminante.</li>
                <li><strong>Criterio Microscopico d'Esame:</strong> Alla biopsia renale con microscopia a immunofluorescenza, gli anticorpi anti-collagene IV rivestono uniformemente tutta la lamina basale continua, generando un tipico <strong>pattern di fluorescenza LINEARE continua e omogenea</strong> (a differenza dell'aspetto granulare del Tipo III!).</li>
              </ul>
            </div>

            {/* Box Morbo di Graves vs Miastenia Gravis */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>Disfunzioni Recettoriali Funzionali: Morbo di Graves vs Miastenia Gravis</span>
              </h3>
              <div className="space-y-2.5 text-xs">
                <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="font-bold text-purple-600 dark:text-purple-400 block font-mono">Morbo di Graves-Basedow (Agonismo Stimolante):</span>
                  <p className="text-slate-600 dark:text-slate-300">
                    Autoanticorpi <strong>TSI (Thyroid-Stimulating Immunoglobulins)</strong> legano la porzione extracellulare del recettore del TSH (TSHR) sui tireociti, mimando l'ormone ipofisario e attivando costitutivamente la proteina Gs e l'adenilato ciclasi. Risultato: ipersecrezione autonoma e massiva di ormoni tiroidei (FT3, FT4) con gozzo tossico diffuso, oftalmopatia e soppressione del TSH ipofisario.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="font-bold text-rose-600 dark:text-rose-400 block font-mono">Miastenia Gravis (Antagonismo Bloccante):</span>
                  <p className="text-slate-600 dark:text-slate-300">
                    Autoanticorpi anti-<strong>recettore nicotinico dell'acetilcolina (AChR)</strong> sulla membrana post-sinaptica della giunzione neuromuscolare. Meccanismo duplice: 1) blocco competitivo del legame dell'acetilcolina; 2) cross-linking recettoriale che stimola l'internalizzazione ed endocitosi accelerata dei recettori AChR con lisi complementare della plica sinaptica. Risultato: debolezza muscolare fluttuante (fatigabilità, ptosi palpebrale, diplopia) che peggiora con lo sforzo e migliora con il riposo e con inibitori dell'acetilcolinesterasi (Piridostigmina).
                  </p>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* -----------------------------------------------------------------------
            SEZIONE 6.4: IPERSENSIBILITÀ DI TIPO III (IMMUNOCOMPLESSI CIRCOLANTI)
            ----------------------------------------------------------------------- */}
        <section id="sec-6-tipo3" className="scroll-mt-24 space-y-8">
          
          <div className="border-l-4 border-amber-600 pl-4 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
              Sezione 6.4 • Dalle Lezioni 27 e 28
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              Ipersensibilità di Tipo III: Patologie da Immunocomplessi Solubili Circolanti
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Fisica della curva di Heidelberger-Kendall e patogenicità del lieve eccesso di antigene; clearance eritrocitaria via CR1/C3b; vasculite leucocitoclastica e consumo di C3/C4; pattern granulare "lumpy-bumpy"; Reazione di Arthus; Malattia da siero acuta sperimentale e patologie croniche umane (LES e vasculiti).
            </p>
          </div>

          {/* FISICA DELLA CURVA DI HEIDELBERGER-KENDALL E DESTINO DEGLI IMMUNOCOMPLESSI */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Boxes className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span>La Curva di Precipitazione di Heidelberger-Kendall e la Formazione degli Immunocomplessi Patogenetici</span>
            </h3>
            <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
              A differenza del Tipo II in cui l'antigene è fermo su un tessuto, nel Tipo III l'antigene è <strong>solubile nei fluidi biologici</strong>. Le dimensioni, la solubilità e il destino degli immunocomplessi dipendono rigorosamente dal rapporto quantitativo tra antigene e anticorpo secondo la legge di azione di massa descritta dalla <strong>curva di Heidelberger-Kendall</strong>:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-slate-800 dark:text-slate-200 font-mono text-sm block">1. Eccesso di Anticorpo</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Ogni molecola di antigene è rapidamente saturata da più anticorpi bivalenti. Si formano <strong>grandi immunocomplessi insolubili e reticolati</strong> che fissano abbondantemente il complemento. Vengono immediatamente opsonizzati e fagocitati in pochi minuti dai macrofagi del sistema reticolo-endoteliale epatico e splenico, risultando <em>non patogeni per i vasi periferici</em>.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-slate-800 dark:text-slate-200 font-mono text-sm block">2. Zona di Equivalenza</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Le concentrazioni molari di epitopi allergenici e paratopi anticorpali sono perfettamente bilanciate. Si formano reticoli tridimensionali giganti che <strong>precipitano spontaneamente in sede locale</strong> (come avviene nella reazione cutanea di Arthus).
                </p>
              </div>

              <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border-2 border-amber-500 space-y-2">
                <span className="font-bold text-amber-700 dark:text-amber-300 font-mono text-sm block">3. Lieve/Moderato Eccesso di Antigene (ZONA PATOGENA)</span>
                <p className="text-slate-700 dark:text-slate-200 font-medium">
                  Le molecole di antigene superano gli anticorpi: si formano <strong>complessi solubili di piccole-medie dimensioni</strong>. Questi complessi:
                </p>
                <ul className="space-y-1 list-disc list-inside text-slate-600 dark:text-slate-300">
                  <li>Non formano reticoli giganti e sfuggono alla cattura da parte del recettore CR1 eritrocitario.</li>
                  <li>Rimangono a lungo in circolo nel torrente ematico.</li>
                  <li>Precipitano selettivamente nei distretti vascolari ad alta pressione idrostatica e filtrazione.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* EMODINAMICA, PATOGENESI DELLA VASCULITE E PATTERN "LUMPY-BUMPY" */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Activity className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span>Emodinamica della Deposizione & Vasculite Leucocitoclastica</span>
              </h3>
              <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
                Perché gli immunocomplessi circolanti non si depositano uniformemente ovunque, ma colpiscono quasi sempre i medesimi organi? La cattedra sottolinea il ruolo cruciale dei <strong>fattori emodinamici e biofisici</strong>:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                <li><strong>Alta Pressione Idrostatica & Ultrafiltrazione:</strong> I capillari glomerulari renali (pressione idrostatica di ~45 mmHg vs 15-20 mmHg dei capillari periferici) e i plessi della sinovia articolare filtrano continuamente grandi volumi di plasma, "spingendo" meccanicamente gli immunocomplessi contro la membrana basale endoteliale fenestrata.</li>
                <li><strong>Turbolenza Emodinamica:</strong> Biforcazioni arteriose e venule post-capillari cutanee dove la velocità del flusso rallenta favorendo il contatto con l'endotelio.</li>
                <li><strong>Attivazione del Complemento & Ipocomplementemia:</strong> I complessi depositati fissano C1q e consumano massicciamente <strong>C3 e C4 circolanti</strong> (marker sierico essenziale per monitorare la riacutizzazione di LES o nefriti!). Il rilascio di <strong>C5a</strong> recluta neutrofili che riversano ROS ed enzimi litici distruggendo la parete vasale (<strong>necrosi fibrinoide</strong> con residui nucleari dei neutrofili = <em>leucocitoclasia</em>).</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Microscope className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span>Pattern Istologico a Immunofluorescenza: Lineare vs Granulare</span>
              </h3>
              <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
                All'esame istologico renale con anticorpi fluorescenti anti-IgG umane, la morfologia del deposito permette la diagnosi differenziale istantanea tra Tipo II e Tipo III:
              </p>
              <div className="space-y-3 text-xs">
                <div className="p-3.5 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900">
                  <strong className="text-blue-700 dark:text-blue-300 font-mono text-sm block">Pattern Lineare Continuo (Tipo II - Goodpasture):</strong>
                  Gli anticorpi si legano in modo uniforme e ininterrotto lungo tutta l'estensione della membrana basale glomerulare (NC1 del collagene IV). La linea fluorescente è perfettamente liscia, regolare e continua.
                </div>
                <div className="p-3.5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900">
                  <strong className="text-amber-700 dark:text-amber-300 font-mono text-sm block">Pattern Granulare Discontinuo "Lumpy-Bumpy" (Tipo III - LES / Post-Streptococcica):</strong>
                  Gli immunocomplessi precipitano casualmente a zolle e grumi isolati nello spazio subendoteliale, mesangiale o subepiteliale. La fluorescenza appare a macchie, grumi sparsi e noduli discontinui ("a cielo stellato" o <em>lumpy-bumpy</em>).
                </div>
              </div>
            </div>

          </div>

          {/* MODELLI SPERIMENTALI E CLINICI: REAZIONE DI ARTHUS E MALATTIA DA SIERO */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span>Modelli Clinici e Sperimentali: Reazione di Arthus vs Malattia da Siero Acuta</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-sm">Reazione di Arthus (Modello Locale)</span>
                  <span className="text-amber-600 dark:text-amber-400 font-mono text-xs font-bold">Picco a 4–10 ore</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Modello sperimentale di vasculite da immunocomplessi localizzata:
                </p>
                <ul className="space-y-1 list-disc list-inside text-slate-600 dark:text-slate-400 text-xs">
                  <li>Si inietta per via intradermica un antigene in un animale o individuo che possiede già alti titoli di anticorpi IgG circolanti contro quell'antigene.</li>
                  <li>L'antigene diffonde nella parete delle venule cutanee incontrando le IgG extravasate. Si formano grandi complessi in zona di equivalenza che fissano il complemento.</li>
                  <li>C5a richiama i neutrofili: tra le 4 e le 10 ore si sviluppa un'intensa vasculite necrotizzante acuta con edema, emorragia e trombosi vasale (distinta dai 15 minuti del Tipo I e dalle 48 ore del Tipo IV!).</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-sm">Malattia da Siero Acuta (Modello Sistemico)</span>
                  <span className="text-amber-600 dark:text-amber-400 font-mono text-xs font-bold">Latenza di 7–14 giorni</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Conseguenza della somministrazione endovenosa di una singola dose massiva di proteina eterologa (es. siero equino antiofidico o siero anti-linfocitario ATG):
                </p>
                <ul className="space-y-1 list-disc list-inside text-slate-600 dark:text-slate-400 text-xs">
                  <li><strong>Giorni 0–6:</strong> L'antigene circola liberamente senza sintomi (latenza per avviare la risposta immunitaria primaria adattativa).</li>
                  <li><strong>Giorni 7–10:</strong> La produzione primaria di IgG incontra l'antigene residuo ancora circolante in condizioni di <strong>lieve eccesso di antigene</strong>. Formazione massiva di complessi solubili e precipitazione sistemica.</li>
                  <li><strong>Tetrade Clinica Cardine:</strong> <strong>Febbre</strong> elevata, <strong>vasculite/orticaria cutanea</strong>, <strong>artrite/poliartralgie</strong> e <strong>proteinuria con glomerulonefrite</strong>, accompagnata da marcata caduta dei livelli di C3/C4 sierici. La malattia si autorisolve con la clearance definitiva dell'antigene.</li>
                </ul>
              </div>

            </div>
          </div>

        </section>

        {/* -----------------------------------------------------------------------
            SEZIONE 6.5: IPERSENSIBILITÀ DI TIPO IV (RITARDATA E CELLULO-MEDIATA)
            ----------------------------------------------------------------------- */}
        <section id="sec-6-tipo4" className="scroll-mt-24 space-y-8">
          
          <div className="border-l-4 border-emerald-600 pl-4 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
              Sezione 6.5 • Dalla Lezione 28
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              Ipersensibilità di Tipo IV: Sottotipi IVa–IVd, Dermatite da Contatto, Mantoux/IGRA e Malattia Celiaca
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Classificazione di Pichler; cinetica bifasica della DAC con apteni (nichel e urusciolo) e cellule di Langerhans; Mantoux con indurimento da fibrina vs QuantiFERON (ESAT-6/CFP-10 su RD1); celiachia: deamidazione da tTG2, genetica obbligata HLA-DQ2/8, Th1 nella lamina propria e citotossicità intraepiteliale IL-15/NKG2D mediata.
            </p>
          </div>

          {/* CLASSIFICAZIONE MODERNA DI PICHLER DEI SOTTOTIPI DI TIPO IV (IVa, IVb, IVc, IVd) */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Flame className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Sottoclassificazione Moderna dell'Ipersensibilità di Tipo IV (Classificazione di Pichler)</span>
              </h3>
              <span className="text-xs font-mono bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                Puro Meccanismo Cellulo-Mediato T-Dipendente (24–72h)
              </span>
            </div>

            <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
              Il Tipo IV è l'<strong>unica classe di Gell e Coombs completamente indipendente dagli anticorpi</strong>: la reattività è mediata da linfociti T antigene-specifici sensibilizzati ed è sperimentalmente trasferibile solo con cellule T e mai col siero. In clinica moderna viene suddivisa in 4 sottoclassi distinte in base al clone T effettore e al tipo di leucocita reclutato:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 block text-sm">Tipo IVa (Th1 / Macrofagi M1)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Mediatore:</strong> Linfociti CD4⁺ Th1 secernenti <strong>IFN-γ</strong> e TNF-α.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Effettore:</strong> Attivazione classica dei <strong>macrofagi (M1)</strong> con produzione di ROS, NO e citochine pro-infiammatorie.
                </p>
                <p className="text-slate-500 dark:text-slate-400 font-mono">
                  <strong>Clinica:</strong> Test di Mantoux (tubercolina), reazione granulomatosa tubercolare, componente macrofagica della DAC.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-mono font-bold text-blue-600 dark:text-blue-400 block text-sm">Tipo IVb (Th2 / Eosinofili)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Mediatore:</strong> Linfociti CD4⁺ Th2 secernenti <strong>IL-5</strong>, IL-4 e IL-13.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Effettore:</strong> Reclutamento e massiva degranulazione tissutale di <strong>Eosinofili</strong> (MBP, ECP, EPO).
                </p>
                <p className="text-slate-500 dark:text-slate-400 font-mono">
                  <strong>Clinica:</strong> Asma cronica eosinofilica persistente, eruzioni da farmaci con eosinofilia sistemica (Sindrome DRESS).
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-mono font-bold text-rose-600 dark:text-rose-400 block text-sm">Tipo IVc (CTL CD8⁺ / Citotossicità)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Mediatore:</strong> Linfociti <strong>CTL CD8⁺</strong> citotossici.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Effettore:</strong> Apoptosi selettiva delle cellule bersaglio via <strong>Perforina/Granzimi B</strong> e recettore di morte <strong>Fas/FasL</strong>.
                </p>
                <p className="text-slate-500 dark:text-slate-400 font-mono">
                  <strong>Clinica:</strong> Necrolisi Epidermica Tossica (Sindrome di Stevens-Johnson / Lyell), distruzione delle β-cellule nel diabete tipo 1, danno celiaco.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-mono font-bold text-amber-600 dark:text-amber-400 block text-sm">Tipo IVd (Th17 / Neutrofili)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Mediatore:</strong> Linfociti CD4⁺ Th17 secernenti <strong>IL-17A, IL-17F e IL-22</strong>.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Effettore:</strong> Secrezione epiteliale di <strong>CXCL8</strong> e GM-CSF con massiccio afflusso di <strong>Neutrofili</strong>.
                </p>
                <p className="text-slate-500 dark:text-slate-400 font-mono">
                  <strong>Clinica:</strong> Pustolosi Esantematica Acuta Generalizzata (AGEP da farmaci), lesioni pustolose della psoriasi, Morbo di Behçet.
                </p>
              </div>

            </div>
          </div>

          {/* CINETICA BIFASICA DELLA DERMATITE ALLERGICA DA CONTATTO (DAC) */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Microscope className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Dermatite Allergica da Contatto (DAC): Apteni, Cellule di Langerhans & Spongiosi Epidermica</span>
            </h3>
            <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
              La DAC rappresenta la manifestazione clinica più frequente di ipersensibilità ritardata cutanea. È scatenata da <strong>apteni</strong> (piccole molecole chimiche a basso peso molecolare, generalmente &lt;500 Da, come <strong>Nichel</strong>, cromo, profumi, <strong>urusciolo</strong> dell'edera velenosa o parafenilendiamina delle tinte) che non hanno alcuna immunogenicità intrinseca:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-emerald-700 dark:text-emerald-300 font-mono block">1. Fase di Sensibilizzazione (Priming, 10–14 giorni)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  L'aptene lipofilo attraversa lo strato corneo cutaneo e si lega covalentemente a residui di lisina o cisteina di proteine self della matrice o dell'epidermide formando un <strong>coniugato aptene-carrier immunogenico</strong>.
                </p>
                <ul className="space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside text-xs">
                  <li>Lo stress chimico induce i cheratinociti a liberare allarmine (IL-1β, TNF-α). Il nichel può persino attivare direttamente <strong>TLR4 umano</strong> tramite due residui di istidina (His456/His458) non presenti nel topo!</li>
                  <li>Le <strong>Cellule di Langerhans</strong> epidermiche e le DC dermiche catturano il complesso aptene-carrier, ritirano i dendriti, perdono la caderina epiteliale e migrano via vasi linfatici afferenti ai linfonodi paracorticali.</li>
                  <li>Vengono selezionati ed espansi cloni T specifici <strong>Th1 (IFN-γ) e CTL CD8⁺</strong> di memoria che esprimono il recettore di homing cutaneo <strong>CLA (Cutaneous Lymphocyte Antigen)</strong>, che lega la E-selectina endoteliale. L'ospite è ora sensibilizzato senza mostrare lesioni.</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-rose-700 dark:text-rose-300 font-mono">2. Fase di Elicitazione / Scatenamento</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-200 font-bold">24–72 ore</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Alla successiva applicazione dell'aptene (anche in dosi microscopiche):
                </p>
                <ul className="space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside text-xs">
                  <li>I linfociti T memoria CLA⁺ extravasano rapidamente nel derma ed epidermide guidati da chemochine (CCL17, CCL27).</li>
                  <li>I <strong>CTL CD8⁺</strong> riconoscono gli epitopi aptenici presentati su MHC-I dai cheratinociti, inducendone l'apoptosi via perforina/granzimi.</li>
                  <li>I <strong>linfociti Th1</strong> rilasciano grandi quantità di <strong>IFN-γ e TNF-α</strong>: la flogosi vasodilatatoria provoca massiccio edema intercellulare dell'epidermide (<strong>spongiosi</strong>) con rottura dei desmosomi e formazione delle caratteristiche <strong>microvescicole eczematose intensamente pruriginose</strong> (diagnosticata in allergologia tramite <strong>Patch Test</strong> a lettura a 48 e 72 ore).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* TEST DI MANTOUX (PPD) VS TEST IGRA (QUANTIFERON-TB) */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Syringe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Diagnostica Tubercolare: Test di Mantoux (PPD) vs Test IGRA (QuantiFERON-TB)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              
              <div className="space-y-2 p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono block">Test Intradermico di Mantoux (Tubercolina PPD)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Si iniettano per via intradermica nell'avambraccio 5 unità di PPD (<em>Purified Protein Derivative</em>, estratto proteico grezzo di micobatteri).
                </p>
                <ul className="space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside text-xs">
                  <li>Se il soggetto è stato precedentemente esposto a <em>M. tuberculosis</em>, i linfociti Th1 memoria CD4⁺ migrano nel derma rilasciando IFN-γ e TNF-α.</li>
                  <li>I macrofagi attivati aumentano la permeabilità capillare; si verifica extravaso di fibrinogeno e deposizione locale di <strong>fibrina</strong>.</li>
                  <li>La fibrina polimerizzata è la causa biochimica esclusiva dell'<strong>infiltrato duro palpabile</strong> (indurimento) misurato col calibro a <strong>48–72 ore</strong> (il solo eritema senza indurimento non ha alcun valore diagnostico!).</li>
                  <li><em>Limite Maggiore:</em> Il PPD contiene oltre 200 antigeni condivisi con il ceppo vaccinale <strong>BCG</strong> (<em>Bacillus Calmette-Guérin</em>) e con micobatteri ambientali non patogeni → produce frequenti <strong>falsi positivi</strong> nei soggetti vaccinati.</li>
                </ul>
              </div>

              <div className="space-y-2 p-4 bg-emerald-50/60 dark:bg-emerald-950/20 rounded-xl border border-emerald-300 dark:border-emerald-800">
                <span className="font-bold text-emerald-800 dark:text-emerald-300 font-mono block">Test IGRA (Interferon-Gamma Release Assay / QuantiFERON-TB)</span>
                <p className="text-slate-700 dark:text-slate-300">
                  Dosaggio quantitativo in vitro su sangue intero periferico dell'<strong>IFN-γ rilasciato dai linfociti T</strong> in risposta a specifici antigeni micobatterici ricombinanti.
                </p>
                <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside text-xs">
                  <li>Il test impiega esclusivamente gli antigeni peptidici ricombinanti <strong>ESAT-6</strong> (<em>Early Secretory Antigenic Target 6 kDa</em>) e <strong>CFP-10</strong> (<em>Culture Filtrate Protein 10 kDa</em>).</li>
                  <li><strong>Fondamento Genetico d'Eccellenza:</strong> I geni che codificano ESAT-6 e CFP-10 sono localizzati nella regione di differenziazione genomica <strong>RD1</strong> di <em>Mycobacterium tuberculosis</em>. <strong>La regione RD1 è interamente deleta in tutti i ceppi del vaccino BCG e nella quasi totalità dei micobatteri non tubercolari!</strong></li>
                  <li><em>Vantaggio Clinico Straordinario:</em> Il test QuantiFERON-TB possiede una specificità superiore al 98% e <strong>azzera totalmente i falsi positivi nei soggetti vaccinati con BCG</strong>, consentendo una diagnosi certa di infezione tubercolare latente.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* FISIOPATOLOGIA MOLECOLARE DELLA MALATTIA CELIACA (DOPPIO BRACCIO ADATTATIVO ED INNATO) */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Dna className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Malattia Celiaca (Enteropatia Glutine-Sensibile): Patogenesi Molecolare a Doppio Braccio</span>
              </h3>
              <span className="text-xs font-mono bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded font-semibold">
                VPN Genetico &gt; 99% (HLA-DQ2 / HLA-DQ8)
              </span>
            </div>

            <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
              La celiachia non è una semplice allergia alimentare, bensì una <strong>malattia infiammatoria cronica immuno-mediata intestinale</strong> scatenata dall'ingestione di glutine in individui geneticamente predisposti. Il glutine è una miscela proteica ricca in <strong>prolina e glutammina</strong> (presente nel grano, segale e orzo): i legami peptidici prolina-glutammina sono insolitamente resistenti all'idrolisi enzimatica operata da pepsina gastrica, tripsina, chimotripsina pancreatica e carbossipeptidasi dell'orletto a spazzola enterocitario, determinando la persistenza intatta nel lume di lunghi oligopeptidi immunogenici (tra cui l'emblematico <strong>frammento 33-mero della α-gliadina</strong>).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Braccio 1: Adattativo CD4+ nella Lamina Propria */}
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
                  <Split className="w-4 h-4" />
                  <span>Braccio 1: Risposta Adattativa CD4⁺ & Deamidazione da tTG2</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Il peptide 33-mero attraversa l'epitelio intestinale per via paracellulare (aumento di zonulina) o transcellulare raggiungendo la lamina propria:
                </p>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <p>
                    <strong>1. Deamidazione Enzimatica:</strong> L'enzima <strong>Transglutaminasi Tissutale 2 (tTG2)</strong> rilasciato in condizioni di danno/stress deamina selettivamente i residui di <strong>Glutammina neutra convertendoli in Acido Glutammico carico negativamente</strong>.
                  </p>
                  <p>
                    <strong>2. Incastro nelle Tasche Basiche di HLA-DQ2/8:</strong> Le cariche negative dell'acido glutammico si incastrano con altissima affinità nelle tasche di legame P4, P6, P7 e P9 (ricche di residui di lisina e arginina carichi positivamente) delle molecole MHC di Classe II <strong>HLA-DQ2 (DQA1*05:01 / DQB1*02:01)</strong> o <strong>HLA-DQ8</strong> espresse sulle cellule dendritiche.
                  </p>
                  <p>
                    <strong>3. Attivazione Th1 & Autoanticorpi:</strong> I linfociti CD4⁺ riconoscono il peptide deamidato e secernono <strong>IFN-γ</strong> (attivazione di metalloproteasi dei fibroblasti con lisi della matrice extracellulare) e aiutano i linfociti B a produrre <strong>anticorpi anti-gliadina deamidata (DGP)</strong> e <strong>autoanticorpi anti-transglutaminasi tissutale (anti-tTG IgA)</strong> e <strong>anti-endomisio (EMA)</strong> tramite un raffinato meccanismo di <em>linked recognition</em> (il linfocita B autoreattivo specifico per tTG2 internalizza il complesso covalente tTG-gliadina e presenta i peptidi della gliadina ai Tfh!).
                  </p>
                </div>
              </div>

              {/* Braccio 2: Innato Citotossico Intraepiteliale (Atrofia dei Villi) */}
              <div className="p-4 bg-rose-50/60 dark:bg-rose-950/20 rounded-xl border border-rose-300 dark:border-rose-800 space-y-3">
                <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
                  <Eye className="w-4 h-4" />
                  <span>Braccio 2: Immunità Innata Enterocitaria & Citotossicità IEL CD8⁺</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  Come muoiono gli enterociti provocando l'atrofia dei villi? Il meccanismo è <strong>innato-citotossico e indipendente dalla specificità del TCR per il glutine</strong>:
                </p>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <p>
                    <strong>1. Peptidi di Stress & Rilascio di IL-15:</strong> Frammenti non-immunogenici della gliadina (come il peptide <strong>p31-43</strong>) attivano vie di stress cellulare negli enterociti, inducendo una massiva secrezione della citochina <strong>IL-15</strong> e l'esposizione sulla membrana enterocitaria delle molecole di stress <strong>MICA e MICB</strong> e di <strong>HLA-E</strong>.
                  </p>
                  <p>
                    <strong>2. Riprogrammazione NK-like dei Linfociti Intraepiteliali (IEL):</strong> L'IL-15 presente nella nicchia intraepiteliale trasforma i <strong>Linfociti Intraepiteliali CD8⁺ (IEL)</strong> in cellule effettrici con fenotipo <em>NK-like</em>, sovraesprimendo i recettori attivatori citotossici <strong>NKG2D</strong> (che lega MICA/MICB) e <strong>CD94/NKG2C</strong> (che lega HLA-E).
                  </p>
                  <p>
                    <strong>3. Lisi Enterocitaria & Atrofia dei Villi:</strong> Gli IEL uccidono direttamente gli enterociti stressati mediante rilascio orientato di <strong>Perforina e Granzimi</strong> e via <strong>FasL/Fas</strong>, provocando l'<strong>atrofia dei villi intestinali, l'iperplasia delle cripte e la marcata linfocitosi intraepiteliale</strong> (lesione di Marsh-Oberhuber di Tipo 3) alla base della sindrome da malassorbimento.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* SIMULATORE 5: FISIOPATOLOGIA DELLA MALATTIA CELIACA */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-lg space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-bold text-white">Simulatore Interattivo: Genetica HLA-DQ2/8, Deamidazione tTG2 e Danno Villi</h3>
              </div>
              <span className="text-xs font-mono bg-slate-800 px-3 py-1 rounded text-emerald-300 border border-slate-700">
                Fisiopatologia della Mucosa Duodenale
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 block">Genotipo MHC-II del Paziente:</label>
                <div className="grid grid-cols-2 gap-1 bg-slate-800 p-1 rounded-lg">
                  <button
                    onClick={() => setSim5HlaStatus('dq2_dq8_pos')}
                    className={`py-1.5 text-xs font-mono rounded ${
                      sim5HlaStatus === 'dq2_dq8_pos' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    HLA-DQ2 / DQ8 ⁺
                  </button>
                  <button
                    onClick={() => setSim5HlaStatus('dq2_dq8_neg')}
                    className={`py-1.5 text-xs font-mono rounded ${
                      sim5HlaStatus === 'dq2_dq8_neg' ? 'bg-rose-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    HLA-DQ2 / DQ8 ⁻
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 block">Attività Deamidasica tTG2:</label>
                <button
                  onClick={() => setSim5DeamidationActive(!sim5DeamidationActive)}
                  className={`w-full py-1.5 px-3 rounded text-xs font-mono font-bold border transition-all ${
                    sim5DeamidationActive
                      ? 'bg-amber-950/80 border-amber-500 text-amber-300'
                      : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}
                >
                  {sim5DeamidationActive ? 'tTG2 Attiva (Glutammina → Glutammato ⁻)' : 'tTG2 Bloccata (Glutammina Neutra)'}
                </button>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-slate-300">
                  <span>Livello Enterocitario di IL-15:</span>
                  <span className="text-rose-400 font-bold">{sim5Il15Level}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sim5Il15Level}
                  onChange={(e) => setSim5Il15Level(Number(e.target.value))}
                  className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Risultato della Valutazione Celiaca */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-850 pb-2 text-xs font-mono">
                <span className="text-slate-400">Attivazione Adattativa Lamina Propria (CD4⁺ Th1):</span>
                <span className={`px-2.5 py-0.5 rounded font-bold ${
                  sim5HlaStatus === 'dq2_dq8_pos' && sim5DeamidationActive
                    ? 'bg-rose-950 text-rose-300 border border-rose-700'
                    : 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                }`}>
                  {sim5HlaStatus === 'dq2_dq8_neg'
                    ? 'ASSENTE (Impossibile: HLA non compatibile, VPN > 99%)'
                    : !sim5DeamidationActive
                    ? 'ASSENTE (Senza cariche negative il peptide non si incastra nelle tasche)'
                    : 'ATTIVAZIONE MASSIVA (Th1, IFN-γ e anticorpi anti-tTG/EMA)'}
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-850 pb-2 text-xs font-mono">
                <span className="text-slate-400">Citotossicità Linfociti Intraepiteliali (IEL NKG2D⁺):</span>
                <span className={`px-2.5 py-0.5 rounded font-bold ${
                  sim5Il15Level > 40 ? 'bg-rose-950 text-rose-300 border border-rose-700' : 'bg-slate-800 text-slate-300'
                }`}>
                  {sim5Il15Level > 40
                    ? `Attiva (${sim5Il15Level}% di espressione recettoriale: apoptosi enterocitaria e atrofia dei villi)`
                    : 'Omeostatica (Integrità villare preservata)'}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                {sim5HlaStatus === 'dq2_dq8_neg' && 'Se un paziente non possiede né HLA-DQ2 né HLA-DQ8, la diagnosi di celiachia può essere categoricamente esclusa con un Valore Predittivo Negativo (VPN) prossimo al 100%, indipendentemente dall\'assunzione di glutine.'}
                {sim5HlaStatus === 'dq2_dq8_pos' && sim5DeamidationActive && sim5Il15Level > 40 && 'Quadro istopatologico classico di Marsh 3: la deamidazione conferisce cariche negative al 33-mero che si lega saldamente a HLA-DQ2, attivando Th1 nella lamina propria. Contemporaneamente, l\'IL-15 armata gli IEL NKG2D⁺ che distruggono gli enterociti inducendo atrofia subtotale o totale dei villi intestinali.'}
                {sim5HlaStatus === 'dq2_dq8_pos' && (!sim5DeamidationActive || sim5Il15Level <= 40) && 'Soggetto geneticamente predisposto in cui mancano i cofattori enzimatici o infiammatori: i villi rimangono strutturalmente integri.'}
              </p>
            </div>
          </div>

        </section>

        {/* -----------------------------------------------------------------------
            SEZIONE 6.6: VERIFICA FINALE, QUIZ & FLASHCARDS CUMULATIVE
            ----------------------------------------------------------------------- */}
        <section id="sec-6-verifica" className="scroll-mt-24 space-y-8">
          
          <div className="border-l-4 border-slate-600 dark:border-slate-400 pl-4 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              Sezione 6.6 • Verifica dell'Apprendimento
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              Sintesi Comparativa Master, Batteria di Quiz d'Esame e Mazzo Flashcard
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Tavola sinottica dei 4 tipi di Gell e Coombs integrata con farmaci biologici, 12 flashcards mirate per il ripasso attivo a intervalli e test di autovalutazione cumulativo con quesiti ufficiali delle lezioni 26, 27 e 28.
            </p>
          </div>

          {/* TAVOLA COMPARATIVA MASTER DEI BERSAGLI TERAPEUTICI NELLE IPERSENSIBILITÀ */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookmarkCheck className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              <span>Tavola Master dei Farmaci Biologici e Meccanismi Immunopatologici</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 font-mono border-b border-slate-200 dark:border-slate-800">
                    <th className="p-3">Patologia / Tipo</th>
                    <th className="p-3">Farmaco / Biologico</th>
                    <th className="p-3">Bersaglio Molecolare</th>
                    <th className="p-3">Meccanismo d'Azione Immunologico</th>
                    <th className="p-3">Indicazione Clinica Cardine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-rose-600 font-mono">Tipo I (Asma)</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Omalizumab</td>
                    <td className="p-3 font-mono">Dominio Cε3 delle IgE libere</td>
                    <td className="p-3">Impedisce l'aggancio a FcεRI; non causa cross-linking; down-regola FcεRI</td>
                    <td className="p-3">Asma allergico grave refrattario, orticaria cronica spontanea</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-rose-600 font-mono">Tipo I (Th2)</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Dupilumab</td>
                    <td className="p-3 font-mono">Subunità IL-4Rα</td>
                    <td className="p-3">Inibizione contemporanea del segnale intracellulare di IL-4 e IL-13 (STAT6)</td>
                    <td className="p-3">Dermatite atopica grave, asma grave T2-high, poliposi nasale</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-rose-600 font-mono">Tipo I (Eosinofili)</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Benralizumab</td>
                    <td className="p-3 font-mono">Catena IL-5Rα (afucosilato)</td>
                    <td className="p-3">Super-affinità per CD16a (FcγRIIIA) su cellule NK con deplezione per ADCC</td>
                    <td className="p-3">Asma grave a fenotipo eosinofilico non controllato</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-blue-600 font-mono">Tipo II (MEN)</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100">RhoGAM</td>
                    <td className="p-3 font-mono">Antigene proteico RhD</td>
                    <td className="p-3">Clearance macrofagica silente prima del priming dei linfociti B materni</td>
                    <td className="p-3">Profilassi dell'alloimmunizzazione RhD in madri Rh⁻ entro 72h dal parto</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-amber-600 font-mono">Tipo III (LES / Nefrite)</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Belimumab</td>
                    <td className="p-3 font-mono">BAFF (BLyS) solubile</td>
                    <td className="p-3">Inibisce la sopravvivenza e maturazione dei linfociti B autoreattivi</td>
                    <td className="p-3">Lupus Eritematoso Sistemico attivo, Nefrite Lupica</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-emerald-600 font-mono">Tipo IV (Celiachia)</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Dieta Aglutinata (GFD)</td>
                    <td className="p-3 font-mono">Peptidi della gliadina (33-mero)</td>
                    <td className="p-3">Eliminazione del trigger ambientale; azzera la deamidazione e l'IL-15</td>
                    <td className="p-3">Terapia salvavita di prima scelta assoluta: ripristino istologico dei villi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* BANCO DI PROVA D'ESAME: QUIZ SECTION UFFICIALE */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Banco di Prova d'Esame: Quiz delle Lezioni 26, 27 e 28
                </h3>
              </div>
              <span className="text-xs font-mono bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 px-3 py-1 rounded-full font-semibold">
                {chapter6Questions.length} Quesiti Ufficiali Selezionati
              </span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Quesiti a scelta multipla con razionale biochimico dettagliato per ciascuna opzione corretta ed errata.
            </p>

            <QuizSection 
              customQuestions={chapter6Questions} 
              lessonNumber={26}
              title="Batteria Ufficiale di Quiz d'Esame · Capitolo VI (Ipersensibilità Tipi I–IV)" 
            />
          </div>

          {/* FLASHCARD PER RIPASSO ATTIVO AD ALTO RENDIMENTO */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Mazzo di Ripasso Attivo: 12 Flashcards Cliniche del Capitolo VI
                </h3>
              </div>
              <span className="text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full">
                Spaced Repetition
              </span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Clicca su ciascuna carta per svelare il meccanismo molecolare, il biomarker o il razionale diagnostico da ripetere ad alta voce prima dell'esame orale.
            </p>

            <FlashcardDeck cards={chapter6Flashcards} />
          </div>

          {/* PONTE FISIOLOGICO DI TRANSIZIONE AL CAPITOLO VII */}
          <div className="bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 border border-purple-800/40 shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-purple-300 text-xs font-mono uppercase tracking-wider font-bold">
              <span>Ponte Fisiologico di Transizione</span>
              <ArrowRight className="w-4 h-4" />
              <span>Capitolo VII: Tolleranza Immunologica, Trapianti d'Organo & Malattie Autoimmuni</span>
            </div>

            <h3 className="text-xl font-bold text-white">
              Dal Danno Ipersensibile alla Rottura della Tolleranza Verso il Self
            </h3>

            <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed">
              Nei 4 tipi di ipersensibilità di Gell e Coombs abbiamo analizzato le traiettorie mediante cui il sistema immunitario, pur riconoscendo antigeni estranei (allergeni del Tipo I, microbi del Tipo IV) o antigeni esogeni cross-reattivi (Tipo II e III), produce danno tissutale collaterale. 
              Nel <strong>Capitolo VII</strong> varcheremo la soglia fondamentale della <strong>rottura della tolleranza centrale timica e periferica</strong>: studieremo il fattore di trascrizione <strong>AIRE</strong> nella selezione negativa timica e la sindrome <strong>APS-1</strong>; i linfociti <strong>Treg CD4⁺CD25⁺FoxP3⁺</strong> e la sindrome letale <strong>IPEX</strong>; i checkpoint inibitori <strong>CTLA-4 e PD-1</strong>; l'alloriconoscimento diretto e indiretto nell'immunologia dei <strong>trapianti d'organo solido e di midollo (GVHD)</strong>; ed infine la patogenesi molecolare delle grandi malattie autoimmuni sistemiche (LES, Artrite Reumatoide, Sclerosi Multipla e Diabete di Tipo 1) con il ruolo emergente del dimorfismo di genere mediato dal trascritto lncRNA <em>Xist</em>.
            </p>

            <div className="pt-2 flex justify-end">
              <span className="text-xs font-mono text-purple-300 bg-purple-950/60 px-3 py-1.5 rounded-lg border border-purple-700/50 flex items-center gap-1.5">
                <span>Verso il Capitolo VII</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
};
