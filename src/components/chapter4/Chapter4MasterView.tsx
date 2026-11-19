/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CAPITOLO IV MASTER VIEW: IL SISTEMA DEL COMPLEMENTO, LA CONNESSIONE
 * UMORALE-CELLULARE VIA RECETTORI Fc E L'INGEGNERIA DEGLI ANTICORPI TERAPEUTICI
 * 
 * Trattato accademico continuo a pagina unica privo di discontinuità d'aula.
 * Unifica integralmente tutti i contenuti, le tabelle e i simulatori di:
 * - Lezione 15: Cascata Enzimatica del Complemento (Vie Classica, Lectinica, Alternativa, MAC, Regolatori)
 * - Lezione 16: Recettori del Complemento (CR1-CR4), Anafilotossine, Patologie (HAE, EPN, aHUS) ed Evasione Microbica
 * - Lezione 17: Classi e Sottoclassi Ig, Famiglia Recettori Fc (FcγR, FcεR, FcRn, pIgR), Asn297 e Meccanismi Effettori
 * - Lezione 18: Anticorpi Monoclonali Terapeutici: Ibridomi HAT, Umanizzazione, BiTE, Coniugati ADC e Teranostica
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Flame,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Layers,
  Activity,
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
  AlertCircle,
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
  Syringe,
  Lock,
  Unlock,
  RefreshCw,
  Award,
  Atom,
  Droplets,
  Crosshair,
  TrendingUp,
  CheckCircle,
  Check
} from 'lucide-react';

// Simulatori Interattivi Chapter 4
import { InteractiveComplementSimulator } from '../InteractiveComplementSimulator';

// Quiz & Flashcards
import { ALL_EXAM_QUESTIONS } from '../../data/examQuestions';
import { QuizSection } from '../QuizSection';
import { FlashcardDeck } from '../FlashcardDeck';

interface Chapter4MasterViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
  initialSection?: string;
  onNavigateSection?: (sectionId: string) => void;
}

export const Chapter4MasterView: React.FC<Chapter4MasterViewProps> = ({
  isSerif = false,
  fontSize = 'normal',
  initialSection
}) => {
  const proseFontClass = isSerif ? 'font-serif' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // Domande d'esame filtrate per le lezioni del Capitolo 4 (15, 16, 17, 18)
  const chapter4Questions = useMemo(() => {
    return ALL_EXAM_QUESTIONS.filter((q) => [15, 16, 17, 18].includes(q.lessonNumber));
  }, []);

  // Flashcards cumulate del Capitolo 4 con set ad altissima resa didattico-clinica
  const chapter4Flashcards = useMemo(() => {
    return [
      {
        id: 'fc-c4-01',
        category: 'Biochimica',
        front: 'Qual è la nomenclatura ratificata dalla Prof.ssa Soriani per la C3 convertasi e la C5 convertasi classica/lectinica?',
        back: 'In conformità alle linee guida IUIS moderne e alla didattica della Prof.ssa Soriani, il frammento minore rilasciato in fase fluida è C2a, mentre il frammento maggiore catalitico legato è C2b. Pertanto la C3 convertasi classica/lectinica è C4b2b, e la C5 convertasi è C4b2b3b.'
      },
      {
        id: 'fc-c4-02',
        category: 'Biochimica',
        front: 'Perché una singola IgM pentamerica attiva C1q mentre sono necessarie almeno due molecole di IgG1/3?',
        back: 'C1q possiede 6 teste globulari e necessita di legare contemporaneamente almeno 2 porzioni Fc ravvicinate. La molecola di IgM pentamerica in circolo è planare (inattiva), ma legandosi a epitopi ripetuti su una superficie planare assume la conformazione ripiegata a "fiocco di neve/granchio", esponendo simultaneamente molteplici siti Fc. Per le IgG, essendo monomeri indipendenti, è richiesta una densità di deposizione sufficiente a formare coppie o esameri ravvicinati (<30-40 nm).'
      },
      {
        id: 'fc-c4-03',
        category: 'Fisiologia',
        front: 'Come funziona il loop di amplificazione della via alternativa e quale ruolo svolge la Properdina?',
        back: 'Il loop di amplificazione genera l\'80% di tutto il C3b depositato sulle superfici. C3b generato da qualunque via lega il Fattore B, che viene clivato dal Fattore D generando la convertasi C3bBb. La Properdina (Fattore P) è l\'unico regolatore positivo: legandosi a C3bBb ne impedisce la dissociazione spontanea, prolungandone l\'emivita plasmatica da 3-4 minuti a oltre 30 minuti.'
      },
      {
        id: 'fc-c4-04',
        category: 'Clinica',
        front: 'Qual è il difetto molecolare alla base dell\'Angioedema Ereditario (HAE) e perché il C4 sierico è diminuito?',
        back: 'L\'HAE è dovuto al deficit autosomico dominante dell\'inibitore serpinico C1-INH. Senza C1-INH, la callicreina plasmatica attiva e non controllata taglia il chininogeno ad alto peso molecolare (HMWK) accumulando Bradichinina (mediatore di vasodilatazione e iperpermeabilità). Inoltre, C1s non inibito cliva continuamente C4 in circolo: per questo nei pazienti con HAE il livello di C4 è costantemente depauperato (<50%), mentre C3 è generalmente nei limiti normali.'
      },
      {
        id: 'fc-c4-05',
        category: 'Ematologia',
        front: 'Qual è la fisiopatologia dell\'Emoglobinuria Parossistica Notturna (EPN) e come agiscono Eculizumab e Pegcetacoplan?',
        back: 'Mutazione somatica acquisita del gene PIGA nella cellula staminale ematopoietica → blocco della sintesi dell\'ancora glicolipidica GPI → assenza di CD55 (DAF, che accelera il decadimento delle C3 convertasi) e CD59 (Protectina, che blocca la polimerizzazione di C9 nel poro MAC). Gli eritrociti clonali sono lisati dal MAC (emolisi intravascolare notturna). Eculizumab è un mAb umanizzato anti-C5 che previene la formazione del MAC; Pegcetacoplan inibisce C3 prevenendo anche l\'opsonizzazione extravascolare da C3b nella milza.'
      },
      {
        id: 'fc-c4-06',
        category: 'Cellulare',
        front: 'Come funziona il sistema navetta eritrocitario di CR1 (CD35) per la clearance degli immunocomplessi?',
        back: 'Gli eritrociti esprimono ~500-1000 molecole di CR1, con cui legano avidamente gli immunocomplessi opsonizzati da C3b nel torrente ematico. Gli eritrociti trasportano il complesso al fegato e alla milza senza subire danni; qui i macrofagi di Kupffer (esprimenti CR1/CR3 e FcγR) "spogliano" l\'immunocomplesso dall\'eritrocita rimettendo il globulo rosso intatto in circolo. Se questo sistema è sovraccaricato o difettoso, gli immunocomplessi precipitano nei tessuti innescando danno da Tipo III (LES).'
      },
      {
        id: 'fc-c4-07',
        category: 'Immunologia Molecolare',
        front: 'Qual è la singolarità strutturale e funzionale delle IgG4 (Fab-arm exchange)?',
        back: 'Le IgG4 possiedono ponti disolfuro intercatena instabili nella cerniera (sequenza Ser-Pro-Cys-Pro). In vivo subiscono lo scambio dinamico di un semimero (catena pesante + leggera) con un\'altra molecola di IgG4 circolante ("Fab-arm exchange"). Diventano così funzionalmente bispecifiche e monovalenti: non possono formare reticoli di immunocomplessi, non fissano C1q e fungono da anticorpi bloccanti anti-infiammatori fisiologici (protettivi nell\'immunoterapia allergica AIT).'
      },
      {
        id: 'fc-c4-08',
        category: 'Biotecnologie',
        front: 'In che modo la glicosilazione in Asn297 e l\'afucosilazione dell\'Fc modulano l\'ADCC?',
        back: 'La N-glicosilazione in Asn297 nel dominio CH2 mantiene distanziati i domini costanti permettendo l\'alloggiamento di CD16a (FcγRIIIA) delle cellule NK. La presenza di un residuo di fucosio centrale genera ingombro sterico. Gli anticorpi privi di fucosio (afucosilati, es. Obinutuzumab) hanno un\'affinità fino a 50-100 volte superiore per CD16a, scatenando un\'ADCC infinitamente più potente contro le cellule bersaglio tumorali.'
      },
      {
        id: 'fc-c4-09',
        category: 'Biotecnologie',
        front: 'Come funziona la selezione metabolica nel terreno HAT nella tecnologia degli ibridomi (Nobel 1984)?',
        back: 'L\'Aminopterina blocca la diidrofolato reduttasi (DHFR), impedendo la sintesi de novo dei nucleotidi. Le cellule possono sintetizzare DNA solo via salvataggio tramite HGPRT (usando Ipoxantina) e Timidina chinasi (usando Timidina). I mielomi non fusi sono HGPRT⁻ e muoiono per blocco metabolico; i linfociti B normali sono HGPRT⁺ ma muoiono spontaneamente dopo pochi giorni in vitro. Solo gli ibridomi fusi (immortalità del mieloma + HGPRT del linfocita B) sopravvivono e proliferano.'
      },
      {
        id: 'fc-c4-10',
        category: 'Farmacologia Oncologica',
        front: 'Qual è la differenza tra Trastuzumab Emtansine (T-DM1) e Trastuzumab Deruxtecan (T-DXd) e cosa significa effetto Bystander?',
        back: 'T-DM1 impiega un linker non-clivabile e payload emtansina (DM1) che rimane legato a un residuo di lisina: essendo carico/idrofilo, non esce dalla cellula tumorale uccisa (nessun effetto bystander). T-DXd possiede un linker peptidico clivabile da catepsine lisosomiali e rilascia DXd (inibitore topoisomerasi I) lipofilo e neutro a membrana, che diffonde nelle cellule tumorali adiacenti distruggendo anche le cellule neoplastiche circostanti HER2-negative (effetto Bystander killing).'
      },
      {
        id: 'fc-c4-11',
        category: 'Farmacologia',
        front: 'Come funziona la mutazione YTE per prolungare l\'emivita plasmatica degli anticorpi fino a 150 giorni?',
        back: 'La mutazione tripla M252Y/S254T/T256E (YTE) nei domini CH2-CH3 aumenta di ~10 volte l\'affinità di legame tra l\'Fc dell\'anticorpo e il recettore neonatale FcRn a pH acido endosomiale (pH 6.0), mentre si dissocia prontamente a pH fisiologico 7.4. Questo massimizza il riciclo endoteliale e porta l\'emivita da 21 a oltre 90-150 giorni (es. Nirsevimab contro RSV, mono-somministrazione per l\'intera stagione neonatale).'
      },
      {
        id: 'fc-c4-12',
        category: 'Biotecnologie',
        front: 'Qual è il meccanismo d\'azione citotossico dei BiTE (es. Blinatumomab)?',
        back: 'I BiTE sono costrutti bispecifici composti da due scFv uniti da un linker, privi di Fc. Un scFv lega un antigene tumorale (CD19) e l\'altro scFv lega CD3ε del complesso TCR sui linfociti T citotossici. Questa costrizione geometrica forza la formazione di una sinapsi litica artificiale tra CTL e cellula neoplastica, scatenando degranulazione di perforina e granzimi in maniera del tutto indipendente dalla restrizione MHC e senza co-stimolazione CD28.'
      }
    ];
  }, []);

  // Sezione attiva per lo ScrollSpy della barra sticky
  const [activeSubSection, setActiveSubSection] = useState<string>('sec-4-complemento-cascata');

  // Configurazione delle sezioni della barra di navigazione
  const SECTIONS_NAV = [
    { id: 'sec-4-complemento-cascata', label: '4.1 Vie del Complemento & MAC', icon: Flame },
    { id: 'sec-4-recettori-patologie-comp', label: '4.2 Recettori CR, Anafilotossine & Clinica', icon: ShieldAlert },
    { id: 'sec-4-fcr-funzioni', label: '4.3 Recettori Fc & Glicosilazione', icon: Layers },
    { id: 'sec-4-mabs-ingegneria', label: '4.4 mAbs, BiTE, ADC & Teranostica', icon: Syringe },
    { id: 'sec-4-verifica', label: '4.5 Tavola Master & Verifica', icon: CheckCircle2 }
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
      // Risolvi alias storici per garantire retrocompatibilità
      let targetId = initialSection;
      if (initialSection === 'sec-4-vie-complemento') targetId = 'sec-4-complemento-cascata';
      if (initialSection === 'sec-4-recettori-complemento') targetId = 'sec-4-recettori-patologie-comp';
      if (initialSection === 'sec-4-effettori-anticorpi') targetId = 'sec-4-fcr-funzioni';
      if (initialSection === 'sec-4-monoclonali-terapeutici') targetId = 'sec-4-mabs-ingegneria';

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
  // STATO SIMULATORE 1: VIE DEL COMPLEMENTO (L15)
  // ==========================================
  type TargetSurface = 'gram_negative' | 'mannose_yeast' | 'human_self' | 'hiv_gp120';
  type AntibodyType = 'none' | 'igm_pentamer' | 'igg_double';

  const [sim1Surface, setSim1Surface] = useState<TargetSurface>('gram_negative');
  const [sim1Antibodies, setSim1Antibodies] = useState<AntibodyType>('igm_pentamer');
  const [sim1ProperdinActive, setSim1ProperdinActive] = useState<boolean>(true);
  const [sim1MgCaPresent, setSim1MgCaPresent] = useState<boolean>(true);

  // Calcolo esiti simulatore vie
  const isClassicalActive =
    sim1MgCaPresent &&
    ((sim1Antibodies === 'igm_pentamer' || sim1Antibodies === 'igg_double') || sim1Surface === 'hiv_gp120');

  const isLectinActive =
    sim1MgCaPresent && (sim1Surface === 'mannose_yeast' || sim1Surface === 'hiv_gp120');

  const isAlternativeSolidActive =
    sim1MgCaPresent && sim1Surface !== 'human_self' && sim1ProperdinActive;

  let primaryC3Convertase = '';
  let primaryC5Convertase = '';
  let c3bYield = '';
  let finalOutcome = '';

  if (sim1Surface === 'human_self') {
    primaryC3Convertase = 'Inibita su membrana da CD55 (DAF) e Fattore H';
    primaryC5Convertase = 'Inibita; blocco assemblaggio C9 da parte di CD59 (Protectina)';
    c3bYield = 'Zero su superficie sana (clivaggio inattivante in iC3b via Fattore I)';
    finalOutcome = 'Protezione assoluta del Self. Assenza di lisi cellulare.';
  } else if (!sim1MgCaPresent) {
    primaryC3Convertase = 'Inattiva (la cascata richiede chelati bivalenti Ca²⁺ e Mg²⁺)';
    primaryC5Convertase = 'Inattiva';
    c3bYield = '0%';
    finalOutcome = 'Blocco completo in vitro (presenza di EDTA o chelanti).';
  } else {
    const pathways = [];
    if (isClassicalActive) pathways.push('Classica (C4b2b)');
    if (isLectinActive) pathways.push('Lectinica (C4b2b)');
    if (isAlternativeSolidActive) pathways.push('Alternativa (C3bBb-P)');

    if (pathways.length > 0) {
      primaryC3Convertase = pathways.join(' + ');
      primaryC5Convertase = isClassicalActive || isLectinActive ? 'C4b2b3b' : 'C3bBbC3b (stabilizzata da P)';
      c3bYield = pathways.length >= 2 ? '100% (Massiva amplificazione solid-phase)' : '65% (Attivazione canonica)';
      finalOutcome = 'Opsonizzazione massiva e assemblaggio MAC con lisi osmotica';
    } else {
      primaryC3Convertase = 'Tick-over fluido basale non amplificato C3(H₂O)Bb';
      primaryC5Convertase = 'Inattiva';
      c3bYield = '< 5%';
      finalOutcome = 'Decadimento spontaneo in fase liquida senza deposizione';
    }
  }

  // ==========================================
  // STATO SIMULATORE 2: CO-RECETTORE B (CR2/CD21-CD19-CD81) (L16)
  // ==========================================
  const [hasC3dOpsonization, setHasC3dOpsonization] = useState<boolean>(true);
  const [antigenDose, setAntigenDose] = useState<'low' | 'medium' | 'high'>('low');
  const [isCD19Functional, setIsCD19Functional] = useState<boolean>(true);

  let signalMultiplier = 1;
  let signalStrengthPct = 0;
  let cr2OutcomeText = '';
  let cr2OutcomeColor = '';

  const baseBcrSignal = antigenDose === 'low' ? 12 : antigenDose === 'medium' ? 45 : 85;

  if (hasC3dOpsonization && isCD19Functional) {
    signalMultiplier = 100;
    signalStrengthPct = Math.min(100, baseBcrSignal * 2.2);
    cr2OutcomeText = `Soglia di attivazione abbattuta di 100-1000 volte! Reclutamento massivo di Lyn e PI3K via CD19. Linfocita B attivato vigorosamente anche a dosi picomolari di antigene.`;
    cr2OutcomeColor = 'text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700';
  } else if (!isCD19Functional) {
    signalMultiplier = 1;
    signalStrengthPct = baseBcrSignal * 0.7;
    cr2OutcomeText = `Deficit di CD19 (Immunodeficienza Comune Variabile CVID): mancato potenziamento corecettoriale. Attivazione B gravemente compromessa.`;
    cr2OutcomeColor = 'text-rose-700 bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-700';
  } else {
    signalMultiplier = 1;
    signalStrengthPct = baseBcrSignal;
    cr2OutcomeText = antigenDose === 'high' 
      ? 'Attivazione BCR autonoma raggiunta ad alte dosi antigeniche (senza ausilio di C3d).'
      : 'Segnale BCR insufficiente (sotto-soglia): l\'antigene a basse dosi non induce risposta senza opsonizzazione complementare C3d.';
    cr2OutcomeColor = antigenDose === 'high' 
      ? 'text-amber-700 bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700'
      : 'text-slate-700 bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700';
  }

  // ==========================================
  // STATO SIMULATORE 3: LABORATORIO RECETTORI Fc (L17)
  // ==========================================
  type IgIsotypeChoice = 'igg1' | 'igg2' | 'igg3' | 'igg4' | 'iga_dimer' | 'igm_pentamer' | 'ige';
  const [selectedFcIg, setSelectedFcIg] = useState<IgIsotypeChoice>('igg1');
  const [isFcAfucosylated, setIsFcAfucosylated] = useState<boolean>(false);

  const getFcProfile = (isotype: IgIsotypeChoice, afucosylated: boolean) => {
    switch (isotype) {
      case 'igg1':
        return {
          c1qBinding: 'Alto (+++)',
          cd64Binding: 'Altissimo (Kd ~ 10⁻⁸ M) - monomerico',
          cd16aBinding: afucosylated ? 'Enorme (50x afucosilato! ADCC eccezionale)' : 'Medio (Kd ~ 10⁻⁶ M) - immunocomplessi',
          cd32bBinding: 'Medio (ITIM / feedback negativo)',
          fcrnBinding: 'Fisiologico (pH 6.0 endosoma / emivita 21 giorni)',
          adccScore: afucosylated ? 98 : 78,
          cdcScore: 82,
          clinicalNote: afucosylated 
            ? 'Glicoingegneria oncologica (es. Obinutuzumab): killing mediato da cellule NK straordinariamente potenziato.'
            : 'Isotipo standard della maggior parte dei monoclonali oncologici (Trastuzumab, Rituximab).'
        };
      case 'igg2':
        return {
          c1qBinding: 'Basso (+)',
          cd64Binding: 'Molto debole o assente',
          cd16aBinding: 'Debole',
          cd32bBinding: 'Debole',
          fcrnBinding: 'Fisiologico (emivita 21 giorni)',
          adccScore: 20,
          cdcScore: 25,
          clinicalNote: 'Specializzata contro polisaccaridi capsulari batterici. Utilizzata per mAbs bloccanti privi di spiccata ADCC (Panitumumab anti-EGFR).'
        };
      case 'igg3':
        return {
          c1qBinding: 'Massimo assoluto (++++) - cerniera lunga flessibile',
          cd64Binding: 'Altissimo',
          cd16aBinding: 'Alto',
          cd32bBinding: 'Medio',
          fcrnBinding: 'Basso (emivita dimezzata a soli 7 giorni per degradazione proteolitica della cerniera)',
          adccScore: 88,
          cdcScore: 99,
          clinicalNote: 'La cerniera iperflessibile a 62 amminoacidi favorisce la massima fissazione di C1q, ma la rende instabile farmacologicamente.'
        };
      case 'igg4':
        return {
          c1qBinding: 'Nullo (0) - non fissa il complemento',
          cd64Binding: 'Debole / Intermedio',
          cd16aBinding: 'Negligibile (nessuna ADCC)',
          cd32bBinding: 'Debole',
          fcrnBinding: 'Fisiologico (emivita 21 giorni)',
          adccScore: 8,
          cdcScore: 0,
          clinicalNote: 'Fab-arm exchange dinamico in vivo: funzionalmente bispecifica e monovalente. Isotipo ideale per bloccare ligandi senza citotossicità (Nivolumab, Pembrolizumab).'
        };
      case 'iga_dimer':
        return {
          c1qBinding: 'Nullo (0)',
          cd64Binding: 'Assente (lega CD89 / FcαRI sui neutrofili)',
          cd16aBinding: 'Nullo',
          cd32bBinding: 'Nullo',
          fcrnBinding: 'Non mediato da FcRn (trasportata via pIgR)',
          adccScore: 35,
          cdcScore: 0,
          clinicalNote: 'La forma secretoria (sIgA) presenta la Componente Secretoria (SC) che la rende immune alle proteasi gastrointestinali e polmonari.'
        };
      case 'igm_pentamer':
        return {
          c1qBinding: 'Straordinario (+++++) previa apertura conformazionale a granchio',
          cd64Binding: 'Assente (lega Fcα/μR)',
          cd16aBinding: 'Assente',
          cd32bBinding: 'Assente',
          fcrnBinding: 'Non riciclata da FcRn (emivita 5 giorni)',
          adccScore: 5,
          cdcScore: 100,
          clinicalNote: 'La più potente opsonina e attivatrice di CDC del siero umano durante la risposta primaria precoce.'
        };
      case 'ige':
        return {
          c1qBinding: 'Nullo (0)',
          cd64Binding: 'Assente (lega FcεRI ad altissima affinità Kd ~ 10⁻¹⁰ M)',
          cd16aBinding: 'Assente',
          cd32bBinding: 'Assente (può legare CD23 / FcεRII)',
          fcrnBinding: 'Assente (emivita sierica breve di 2-3 giorni; ma legata a mastociti dura mesi)',
          adccScore: 15,
          cdcScore: 0,
          clinicalNote: 'Attiva la degranulazione anafilattica mastocitaria e la citotossicità degli eosinofili contro i parassiti elminti.'
        };
    }
  };

  const fcProfile = getFcProfile(selectedFcIg, isFcAfucosylated);

  // ==========================================
  // STATO SIMULATORE 4: INGEGNERIA MOLECOLARE mAb (L18)
  // ==========================================
  type FormatType = 'murine' | 'chimeric' | 'humanized' | 'human' | 'bite' | 'adc';
  type FcModType = 'wt' | 'afucosylated' | 'yte_extension' | 'lala_silenced';

  const [sim4Format, setSim4Format] = useState<FormatType>('humanized');
  const [sim4FcMod, setSim4FcMod] = useState<FcModType>('wt');
  const [sim4Payload, setSim4Payload] = useState<'none' | 'dxd_topoisomerase' | 'dm1_microtubule' | 'lutetium177'>('none');

  const getMabEngineeringSpecs = (format: FormatType, fcMod: FcModType, payload: string) => {
    let suffix = '';
    let humanPct = 0;
    let hamaRisk = 'Basso';
    let halfLifeDays = 21;
    let mainMechanism = '';

    switch (format) {
      case 'murine':
        suffix = '-omab (es. Ibritumomab)';
        humanPct = 0;
        hamaRisk = 'Altissimo (rischio malattia da siero, rapida neutralizzazione)';
        halfLifeDays = 2;
        mainMechanism = 'Neutralizzazione/CDC precoce ma clearance accelerata';
        break;
      case 'chimeric':
        suffix = '-ximab (es. Rituximab, Infliximab, Cetuximab)';
        humanPct = 65;
        hamaRisk = 'Medio/Basso (anticorpi anti-chimerici HACA)';
        halfLifeDays = 14;
        mainMechanism = 'ADCC, CDC e blocco recettoriale';
        break;
      case 'humanized':
        suffix = '-zumab (es. Trastuzumab, Pembrolizumab, Eculizumab)';
        humanPct = 95;
        hamaRisk = 'Molto Basso (solo le 6 anse CDR sono murine)';
        halfLifeDays = 21;
        mainMechanism = 'Alta specificità, eccellente tollerabilità';
        break;
      case 'human':
        suffix = '-umab (es. Adalimumab, Nivolumab, Dupilumab)';
        humanPct = 100;
        hamaRisk = 'Minimo / Trascurabile (ottenuto da Phage Display o topi transgenici)';
        halfLifeDays = 21;
        mainMechanism = 'Compatibilità immunologica perfetta con il sistema immunitario umano';
        break;
      case 'bite':
        suffix = 'BiTE bispecifico (es. Blinatumomab)';
        humanPct = 95;
        hamaRisk = 'Basso (privo di Fc, due frammenti scFv con linker)';
        halfLifeDays = 0.1; // 2 ore, infusione continua
        mainMechanism = 'Sinapsi forzata artificiale tra linfocita T CD8⁺ (anti-CD3ε) e cellula B (anti-CD19), MHC-indipendente!';
        break;
      case 'adc':
        suffix = 'ADC Coniugato (es. T-DXd, T-DM1, Brentuximab Vedotin)';
        humanPct = 95;
        hamaRisk = 'Basso';
        halfLifeDays = 7;
        mainMechanism = 'Cavallo di Troia biologico: endocitosi recettoriale, rilascio intracellulare del payload ad alta citotossicità';
        break;
    }

    if (format !== 'bite') {
      if (fcMod === 'yte_extension') {
        halfLifeDays = 120;
      } else if (fcMod === 'afucosylated') {
        halfLifeDays = 21;
      } else if (fcMod === 'lala_silenced') {
        halfLifeDays = 21;
      }
    }

    return { suffix, humanPct, hamaRisk, halfLifeDays, mainMechanism };
  };

  const mabSpecs = getMabEngineeringSpecs(sim4Format, sim4FcMod, sim4Payload);

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 ${proseFontClass} transition-colors duration-200`}>
      {/* ========================================================= */}
      {/* TESTATA MONUMENTALE DEL CAPITOLO IV */}
      {/* ========================================================= */}
      <header className="relative border-b border-amber-200 dark:border-amber-900/60 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-slate-50 dark:from-amber-950/40 dark:via-slate-950 dark:to-slate-950 pt-10 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-12 w-80 h-80 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <span className="px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-800">
              Trattato Ufficiale di Immunologia Clinica
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 4 Ore Didattiche Complete
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5" /> Modulo di Immunità Umorale ed Effettrice
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 to-orange-500 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-amber-500/20">
                IV
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  Capitolo IV • Meccanismi Effettori Umorali & Biotecnologie
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Il Sistema del Complemento, i Recettori Fc e l'Ingegneria degli Anticorpi Terapeutici
                </h1>
              </div>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
              Trattato unificato continuo su: biochimica delle tre vie del complemento (classica, lectinica, alternativa) 
              e poro litico MAC; recettori del complemento CR1–CR4 e anafilotossine; patologie cliniche d'esame (Angioedema Ereditario, 
              Emoglobinuria Parossistica Notturna, aHUS); biologia delle classi anticorpali, recettori cellulari Fc (FcγR, FcεR, FcRn, pIgR) 
              e ruolo cruciale della glicosilazione in Asn297; tecnologia degli ibridomi e selezione HAT; architettura avanzata dei farmaci biologici 
              (anticorpi umanizzati, bispecifici BiTE, coniugati ADC con effetto Bystander e radioimmunoterapia teranostica).
            </p>
          </div>

          {/* Badge Docenti & Lezioni Coperte */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-200/80 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-2 text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Cattedre di Riferimento:</span>
              <span className="px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 font-medium">Prof.ssa Morrone</span>
              <span className="px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 font-medium">Prof.ssa Rosa Molfetta</span>
              <span className="px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 font-medium">Prof.ssa Alessandra Soriani</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-amber-700 dark:text-amber-400">
              <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800">L15</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800">L16</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800">L17</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800">L18</span>
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
                        ? 'bg-amber-600 text-white shadow-xs'
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
      {/* CORPO PRINCIPALE SEQUENZIALE DEL CAPITOLO IV */}
      {/* ========================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">

        {/* --------------------------------------------------------- */}
        {/* SEZIONE 4.1: VIE DEL COMPLEMENTO, CONVERTASI & MAC */}
        {/* --------------------------------------------------------- */}
        <section id="sec-4-complemento-cascata" className="scroll-mt-16 space-y-8">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-mono uppercase tracking-wider">
              <Flame className="w-4 h-4" />
              <span>Sezione 4.1 • Lezione 15</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Biochimica delle Tre Vie del Complemento, Dinamica delle Convertasi, Legame Tioestere e Complesso Litico MAC
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Dall'innesco molecolare (immunocomplessi, lectine, tick-over spontaneo) alla formazione del poro transmembrana C5b-9 e alle proteine sentinella del self.
            </p>
          </div>

          <div className={`space-y-6 text-slate-800 dark:text-slate-200 ${proseSizeClass}`}>
            
            {/* Box Chiarimento Nomenclatura Prof.ssa Soriani */}
            <div className="p-4 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50/60 dark:bg-amber-950/30 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-200 text-sm">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>Precisazione Accademica Fondamentale: Nomenclatura Ufficiale della Prof.ssa Soriani</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Nella storia della complementologia si è generata una discrepanza terminologica sul clivaggio del componente <strong>C2</strong>. 
                Mentre in tutti gli altri fattori complementari la lettera <strong>"a"</strong> indica il frammento minore solubile e <strong>"b"</strong> il frammento maggiore catalitico 
                (es. C3a/C3b, C4a/C4b, C5a/C5b), per C2 alcuni testi storici invertirono le lettere. 
                La <strong>Prof.ssa Alessandra Soriani</strong> e le linee guida moderne ratificate dall'<strong>IUIS</strong> stabiliscono in modo tassativo la regola uniforme: 
                <strong>C2a è il frammento minore solubile rilasciato nel mezzo</strong>, mentre <strong>C2b è il frammento catalitico maggiore che si ancora a C4b</strong>. 
                Pertanto, la C3 convertasi della via classica e lectinica è rigorosamente denominata <strong>C4b2b</strong>, e la C5 convertasi è <strong>C4b2b3b</strong>.
              </p>
            </div>

            <p>
              Il <strong>sistema del complemento</strong> è una cascata biochimica umorale ad attivazione proteolitica sequenziale composta da oltre 
              <strong>35 proteine plasmatiche e di membrana</strong>, sintetizzate prevalentemente dagli epatociti e in quota minore dai macrofagi tissutali. 
              Circolano nel plasma come <strong>zimogeni inattivi</strong> a concentrazioni elevate (il solo C3 raggiunge ~1.2 g/L nel siero, costituendo quasi il 5% delle globuline totali). 
              Le funzioni cardinali comprendono: <strong>opsonizzazione</strong> di patogeni per la fagocitosi, <strong>reclutamento chemiotattico</strong> di neutrofili e monociti 
              tramite anafilotossine, <strong>clearance degli immunocomplessi</strong> circolanti e <strong>lisi osmotica diretta</strong> dei microrganismi dotati di membrana lipidica via MAC.
            </p>

            {/* Le Tre Vie di Attivazione */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              
              {/* Via Classica */}
              <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20 space-y-2">
                <div className="font-bold text-blue-900 dark:text-blue-200 text-sm flex items-center justify-between">
                  <span>1. Via Classica</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-200/60 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300">Anticorpo-Dipendente</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                  Innescata dal legame del complesso <strong>C1 (C1q + C1r₂ + C1s₂)</strong> agli anticorpi fissati sulla superficie bersaglio. 
                  C1q è un esamero a "mazzo di 6 tulipani" stabilizzato da ioni Ca²⁺. 
                  L'attivazione richiede che <strong>almeno due teste globulari</strong> di C1q leghino contemporaneamente porzioni Fc vicine:
                  <br />• <strong>1 singola IgM pentamerica</strong> legata all'antigene cambia conformazione da planare a "fiocco di neve/granchio", esponendo simultaneamente molteplici Fc e innescando potentemente C1.
                  <br />• Le <strong>IgG</strong> richiedono una densità critica di deposizione di almeno 2 molecole (idealmente esameri ravvicinati a &lt;30 nm). Efficienza: <strong>IgG3 &gt; IgG1 &gt; IgG2</strong> (le <strong>IgG4 non fissano C1q</strong> a causa dell'angolo della cerniera).
                  <br />• Il legame attiva la serina-proteasi <strong>C1r</strong> (autoclivaggio), che taglia e attiva <strong>C1s</strong>. C1s cliva prima <strong>C4</strong> (generando C4b che si ancora covalentemente via legame tioestere) e poi <strong>C2</strong> (generando C2b), assemblando la <strong>C3 convertasi classica C4b2b</strong>.
                </p>
              </div>

              {/* Via Lectinica */}
              <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/30 dark:bg-emerald-950/20 space-y-2">
                <div className="font-bold text-emerald-900 dark:text-emerald-200 text-sm flex items-center justify-between">
                  <span>2. Via Lectinica</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-200/60 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300">PRR Solubili</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                  Innescata dal riconoscimento diretto di pattern carboidratici microbici da parte di PRR solubili dell'ospite, in assenza di anticorpi:
                  <br />• <strong>MBL (Mannose-Binding Lectin)</strong> riconosce residui terminali di D-mannosio e L-fucosio.
                  <br />• <strong>Ficoline (H, L, M)</strong> riconoscono zuccheri acetilati (N-acetilglucosamina GlcNAc) su batteri e funghi.
                  <br />• MBL e Ficoline circolano associate alle serina-proteasi <strong>MASP-1 e MASP-2</strong> (omologhi funzionali di C1r e C1s).
                  <br />• Al legame con i glicani microbici, <strong>MASP-2</strong> cliva C4 e C2 assemblando la medesima <strong>C3 convertasi C4b2b</strong>, unificandosi alla via classica.
                </p>
              </div>

              {/* Via Alternativa */}
              <div className="p-4 rounded-xl border border-orange-200 dark:border-orange-800 bg-orange-50/30 dark:bg-orange-950/20 space-y-2">
                <div className="font-bold text-orange-900 dark:text-orange-200 text-sm flex items-center justify-between">
                  <span>3. Via Alternativa</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-200/60 dark:bg-orange-900/60 text-orange-800 dark:text-orange-300">Tick-over (80% attività)</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                  Agisce come sistema di sorveglianza continuo e autonomo:
                  <br />• <strong>Tick-over spontaneo:</strong> idrolisi plasmatica basale costante dell'1-2% di C3/ora formando <strong>C3(H₂O)</strong>.
                  <br />• C3(H₂O) lega il <strong>Fattore B</strong> in presenza di Mg²⁺; il <strong>Fattore D</strong> (serina-proteasi sempre attiva nel plasma) taglia B in Ba e Bb, formando la convertasi fluida iniziale <strong>C3(H₂O)Bb</strong>.
                  <br />• Questa convertasi genera molecole di C3b che espongono il <strong>legame tioestere reattivo</strong>. Se incontrano gruppi -OH o -NH₂ su membrane microbiche prive di acido sialico, si ancorano covalentemente.
                  <br />• C3b legato lega il Fattore B, tagliato da D in Bb, formando la <strong>C3 convertasi di membrana C3bBb</strong>.
                  <br />• La <strong>Properdina (Fattore P)</strong> stabilizza C3bBb estendendone l'emivita da 3 a oltre 30 minuti (unico regolatore positivo).
                </p>
              </div>
            </div>

            {/* Dettaglio Biochimico del Legame Tioestere e Loop di Amplificazione */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Chimica del Legame Tioestere e il Loop di Amplificazione (80% dell'Attività Totale)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                <div>
                  <strong>Il Gruppo Tioestere Interno (TED):</strong>
                  <br />Nel C3 nativo, il legame tioestere tra la cisteina e la glutammina (sequenza conservata Cys-Gly-Glu-Gln) è sepolto idrofobicamente all'interno del dominio TED. 
                  Quando C3 viene clivato dalla C3 convertasi con rilascio del piccolo frammento C3a, la proteina subisce una драматиica transizione allosterica esponendo il legame tioestere altamente instabile. 
                  Il gruppo carbonilico del tioestere ha un'emivita reattiva di <strong>meno di 60 microsecondi</strong>:
                  <br />• Se incontra gruppi idrossilici (-OH) o amminici (-NH₂) sulla superficie batterica adiacente, forma un <strong>legame covalente estere o ammidico indistruttibile</strong>.
                  <br />• Se non incontra bersagli nei microsecondi, viene idrolizzato dall'acqua del solvente generando C3b inerte in fase fluida, prevenendo danni alle cellule sane bystander.
                </div>
                <div>
                  <strong>Il Loop di Amplificazione:</strong>
                  <br />Indipendentemente da quale sia stata la via di innesco (classica, lectinica o alternativa), ciascuna molecola di C3b depositata su una superficie bersaglio può reclutare il Fattore B e il Fattore D, 
                  assemblando nuove C3 convertasi della via alternativa <strong>C3bBb</strong>.
                  <br />Una singola convertasi cliva fino a 1000 molecole di C3 al secondo. Di conseguenza, si calcola che <strong>oltre l'80% di tutto il C3b depositato</strong> durante una risposta guidata dalla via classica o lectinica derivi in realtà dall'amplificazione della via alternativa!
                </div>
              </div>
            </div>

            {/* Fase Terminale: MAC (C5b-9) */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Target className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <span>Fase Litica Terminale: Il Complesso di Attacco alla Membrana (MAC, C5b-9)</span>
              </h3>
              <p>
                Quando la densità di C3b sulla superficie raggiunge livelli elevati, una molecola addizionale di C3b si associa alle C3 convertasi trasformandole in <strong>C5 convertasi</strong>: 
                <strong>C4b2b3b</strong> (per classica/lectinica) e <strong>C3bBbC3b</strong> (per l'alternativa). 
                La C5 convertasi taglia C5 in C5a (liberato in circolo) e <strong>C5b</strong>, che dà inizio all'assemblaggio sequenziale del MAC:
              </p>

              <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 font-mono border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3">Componente</th>
                      <th className="p-3">Proprietà Biochimica & Meccanismo d'Azione</th>
                      <th className="p-3">Stato di Membrana</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-3 font-bold text-rose-700 dark:text-rose-400">C5b</td>
                      <td className="p-3">Frammento labile privo di legame tioestere; espone transitoriamente un sito di docking per C6.</td>
                      <td className="p-3 font-mono">Fase fluida labile</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-3 font-bold text-rose-700 dark:text-rose-400">C5b67</td>
                      <td className="p-3">L'unione con C7 induce una transizione allosterica esponendo un dominio anfifilico idrofobico che si ancora al doppio strato fosfolipidico.</td>
                      <td className="p-3 font-mono">Inserimento superficiale</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-3 font-bold text-rose-700 dark:text-rose-400">C5b-8</td>
                      <td className="p-3">C8 è un eterotrimero (αβγ); la catena β lega C5b67, mentre la catena α penetra nel bilayer iniziando una lieve permeabilizzazione.</td>
                      <td className="p-3 font-mono">Penetrazione parziale</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-3 font-bold text-rose-700 dark:text-rose-400">MAC (C5b-9)</td>
                      <td className="p-3">Il complesso C5b-8 funge da catalizzatore legando e polimerizzando ad anello <strong>12-18 monomeri di C9</strong>, formando un canale transmembrana idrofilico cilindrico con diametro interno di <strong>10-11 nm</strong>.</td>
                      <td className="p-3 font-mono font-bold text-red-600">Poro Litico Completo</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3.5 rounded-lg border border-red-200 dark:border-red-900 bg-red-50/40 dark:bg-red-950/20 text-xs leading-relaxed text-red-950 dark:text-red-200">
                <strong>Clinica d'Esame: Suscettibilità Elettiva al genere Neisseria:</strong> i batteri Gram-positivi sono protetti dalla lisi MAC grazie allo spesso peptidoglicano della parete cellulare (vengono eliminati per opsonofagocitosi). Al contrario, i Gram-negativi sottili del genere <strong>Neisseria (N. meningitidis e N. gonorrhoeae)</strong> dipendono in modo assoluto dalla lisi MAC. I pazienti con deficit congenito dei fattori terminali (C5, C6, C7, C8, C9 o Properdina) presentano un rischio aumentato di oltre <strong>1000-10.000 volte di meningite meningococcica invasiva ricorrente</strong>.
              </div>
            </div>

            {/* Proteine Regolatrici del Self */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>La Batteria Regolatrice del Self: Come le Cellule dell'Ospite Disinnescano il Complemento</span>
              </h3>
              <p>
                In assenza di regolazione, il loop di amplificazione della via alternativa distruggerebbe i tessuti propri dell'organismo. 
                L'evoluzione ha selezionato una complessa rete di inibitori solubili e ancorati alla membrana:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                  <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between">
                    <span>C1-INH (C1-Inibitore)</span>
                    <span className="font-mono text-[10px] text-blue-600">Solubile (Serpina)</span>
                  </div>
                  <p className="mt-1 text-slate-600 dark:text-slate-400 leading-relaxed">
                    Serpina suicida circolante. Lega covalentemente C1r, C1s e MASP-1/2 causandone la dissociazione e inattivazione irreversibile. Inibisce inoltre Callicreina e Fattore XIIa.
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                  <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between">
                    <span>Fattore I</span>
                    <span className="font-mono text-[10px] text-blue-600">Solubile (Proteasi)</span>
                  </div>
                  <p className="mt-1 text-slate-600 dark:text-slate-400 leading-relaxed">
                    Serina-proteasi plasmatica costitutivamente attiva. Taglia irreversibilmente C3b in <strong>iC3b</strong> (incapace di convertasi) e poi in <strong>C3dg</strong> e <strong>C3d</strong>. Richiede cofattori obbligati (Fattore H, MCP, CR1).
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                  <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between">
                    <span>Fattore H</span>
                    <span className="font-mono text-[10px] text-blue-600">Solubile (20 SCR)</span>
                  </div>
                  <p className="mt-1 text-slate-600 dark:text-slate-400 leading-relaxed">
                    Riconosce l'<strong>acido sialico e i GAG</strong> solfatati tipici delle cellule umane sane. Lega C3b sul self, fungendo da cofattore per il Fattore I e spiazzando fisicamente la subunità Bb (decay-acceleration).
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                  <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between">
                    <span>CD55 (DAF)</span>
                    <span className="font-mono text-[10px] text-emerald-600">Ancorata GPI</span>
                  </div>
                  <p className="mt-1 text-slate-600 dark:text-slate-400 leading-relaxed">
                    <em>Decay-Accelerating Factor</em>. Si inserisce tra C4b e C2b (o tra C3b e Bb), dissociando rapidamente le C3 convertasi sulla membrana e bloccando l'innesco della cascata sul self.
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                  <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between">
                    <span>CD59 (Protectina)</span>
                    <span className="font-mono text-[10px] text-emerald-600">Ancorata GPI</span>
                  </div>
                  <p className="mt-1 text-slate-600 dark:text-slate-400 leading-relaxed">
                    Si interpone nel complesso C5b-8 in formazione sulla membrana e <strong>blocca fisicamente il legame e la polimerizzazione di C9</strong>, impedendo la formazione del poro litico MAC sulle cellule umane.
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                  <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between">
                    <span>MCP (CD46) & CR1</span>
                    <span className="font-mono text-[10px] text-purple-600">Transmembrana</span>
                  </div>
                  <p className="mt-1 text-slate-600 dark:text-slate-400 leading-relaxed">
                    CD46 (MCP) funge da cofattore di membrana per il clivaggio inattivante di C3b e C4b mediato dal Fattore I. CR1 (CD35) possiede sia attività di cofattore che di dissociazione delle convertasi.
                  </p>
                </div>
              </div>
            </div>

            {/* Simulatore 1 Interattivo Incastonato */}
            <div className="p-5 rounded-2xl border border-amber-300 dark:border-amber-800/80 bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-slate-100/50 dark:from-amber-950/20 dark:to-slate-900/50 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200 dark:border-amber-800/60 pb-3">
                <div className="flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Laboratorio Interattivo: Dinamica delle Convertasi e Attivazione del Complemento
                  </h3>
                </div>
                <span className="text-xs font-mono text-amber-700 dark:text-amber-400">
                  Simulatore Fisiopatologico Solid-Phase
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Superficie Bersaglio:</label>
                  <select
                    value={sim1Surface}
                    onChange={(e) => setSim1Surface(e.target.value as TargetSurface)}
                    className="w-full p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium"
                  >
                    <option value="gram_negative">Batterio Gram- (N. meningitidis)</option>
                    <option value="mannose_yeast">Lievito (C. albicans, Mannosio)</option>
                    <option value="hiv_gp120">Virus (HIV-1 gp120/glicosilato)</option>
                    <option value="human_self">Cellula Umana Sana (Eritrocita Self)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Titolo Anticorpale Presente:</label>
                  <select
                    value={sim1Antibodies}
                    onChange={(e) => setSim1Antibodies(e.target.value as AntibodyType)}
                    className="w-full p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium"
                  >
                    <option value="igm_pentamer">IgM Pentamerica (Conformazione a fiocco)</option>
                    <option value="igg_double">IgG1/IgG3 Bivalenti Ravvicinate</option>
                    <option value="none">Nessun Anticorpo (Ospite Vergine)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Properdina (Fattore P):</label>
                  <button
                    onClick={() => setSim1ProperdinActive(!sim1ProperdinActive)}
                    className={`w-full p-2 rounded-lg font-bold border transition-colors ${
                      sim1ProperdinActive
                        ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-300'
                        : 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border-rose-300'
                    }`}
                  >
                    {sim1ProperdinActive ? 'Presente (Emivita 30 min)' : 'Assente (Decadimento rapido)'}
                  </button>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Cationi Divalenti (Ca²⁺ / Mg²⁺):</label>
                  <button
                    onClick={() => setSim1MgCaPresent(!sim1MgCaPresent)}
                    className={`w-full p-2 rounded-lg font-bold border transition-colors ${
                      sim1MgCaPresent
                        ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-300'
                        : 'bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-300'
                    }`}
                  >
                    {sim1MgCaPresent ? 'Presenti (Attivazione possibile)' : 'Chelati da EDTA (Blocco in vitro)'}
                  </button>
                </div>
              </div>

              {/* Risultato della Simulazione */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  <div>
                    <span className="font-semibold text-slate-500">C3 Convertasi Predominante:</span>
                    <div className="font-mono font-bold text-slate-900 dark:text-white mt-0.5">{primaryC3Convertase}</div>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-500">C5 Convertasi:</span>
                    <div className="font-mono font-bold text-slate-900 dark:text-white mt-0.5">{primaryC5Convertase}</div>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-500">Resa Opsonizzante C3b:</span>
                    <div className="font-mono font-bold text-amber-600 dark:text-amber-400 mt-0.5">{c3bYield}</div>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
                  <Info className="w-4 h-4 text-blue-500 shrink-0" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Esito Funzionale:</span>
                  <span className="text-slate-600 dark:text-slate-300">{finalOutcome}</span>
                </div>
              </div>

              {/* Componente Ufficiale InteractiveComplementSimulator Incastonato */}
              <div className="pt-2">
                <InteractiveComplementSimulator />
              </div>
            </div>

            {/* Ponte Fisiologico 4.1 -> 4.2 */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border-l-4 border-amber-500 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <span className="font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider text-[11px] block">
                Ponte Fisiologico di Transizione: Dalla Cascata Enzimatica ai Recettori Cellulari e alla Clinica
              </span>
              <p>
                Il clivaggio di C3 e C5 non esaurisce la propria funzione nella lisi osmotica: i frammenti generati (C3b, iC3b, C3d, C5a, C3a) 
                costituiscono potenti ligandi che devono essere riconosciuti da recettori cellulari specifici. 
                Nella sezione successiva analizziamo come la famiglia dei <strong>recettori del complemento CR1–CR4</strong> governa la clearance eritrocitaria 
                degli immunocomplessi e abbassa di 1000 volte la soglia di attivazione dei linfociti B, e come le mutazioni dei regolatori del complemento 
                scatenino grandi quadri ematologici d'esame quali l'<strong>Angioedema Ereditario (HAE)</strong>, l'<strong>Emoglobinuria Parossistica Notturna (EPN)</strong> e la <strong>Sindrome Emolitico-Uremica Atipica (aHUS)</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* SEZIONE 4.2: RECETTORI CR, PATOLOGIE & EVASIONE */}
        {/* --------------------------------------------------------- */}
        <section id="sec-4-recettori-patologie-comp" className="scroll-mt-16 space-y-8">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 text-xs font-mono uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <span>Sezione 4.2 • Lezione 16</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              I Recettori del Complemento (CR1–CR4), le Anafilotossine, i Quadri Ematologico-Clinici d'Esame (HAE, EPN, aHUS) e l'Evasione Microbica
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              La connessione tra umorale e cellulare: clearance navetta eritrocitaria, amplificazione corecettoriale B via CD21/CD19, patogenesi della tempesta da bradichinina e terapia biologica mirata con mAb anti-C5 (Eculizumab/Ravulizumab).
            </p>
          </div>

          <div className={`space-y-6 text-slate-800 dark:text-slate-200 ${proseSizeClass}`}>
            
            {/* Famiglia dei Recettori CR */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>La Famiglia dei Recettori del Complemento (CR1, CR2, CR3, CR4)</span>
              </h3>
              <p>
                I frammenti di C3 depositati sulle superfici o rilasciati nel microambiente fungono da etichette biochimiche 
                decodificate da quattro principali classi di recettori leucocitari ed eritrocitari:
              </p>

              <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 font-mono border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3">Recettore</th>
                      <th className="p-3">CD / Struttura</th>
                      <th className="p-3">Ligandi Principali</th>
                      <th className="p-3">Distribuzione Cellulare</th>
                      <th className="p-3">Funzione Fisiologica Primaria</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-3 font-bold text-indigo-900 dark:text-indigo-300">CR1</td>
                      <td className="p-3 font-mono">CD35 (30 domini SCR)</td>
                      <td className="p-3 font-semibold">C3b, C4b, iC3b</td>
                      <td className="p-3">Eritrociti, Macrofagi, Neutrofili, Linfociti B, FDC</td>
                      <td className="p-3"><strong>Sistema navetta eritrocitario</strong> per trasporto sicuro di immunocomplessi; opsonofagocitosi mieloide; cofattore per Fattore I.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-3 font-bold text-indigo-900 dark:text-indigo-300">CR2</td>
                      <td className="p-3 font-mono">CD21 (15-16 SCR)</td>
                      <td className="p-3 font-semibold">C3d, C3dg, iC3b, gp350 (EBV)</td>
                      <td className="p-3">Linfociti B, Cellule Dendritiche Follicolari (FDC)</td>
                      <td className="p-3"><strong>Corecettore B con CD19/CD81</strong> (abbatte soglia di attivazione 100-1000x); ritenzione antigene su FDC; porta d'ingresso del virus EBV.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-3 font-bold text-indigo-900 dark:text-indigo-300">CR3</td>
                      <td className="p-3 font-mono">CD11b / CD18 (Mac-1, αMβ2)</td>
                      <td className="p-3 font-semibold">iC3b, ICAM-1, Glucani</td>
                      <td className="p-3">Neutrofili, Monociti, Macrofagi, Cellule NK</td>
                      <td className="p-3">Fagocitosi attiva dei patogeni opsonizzati da iC3b; adesione salda all'endotelio infiammato e stravaso diapedetico.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-3 font-bold text-indigo-900 dark:text-indigo-300">CR4</td>
                      <td className="p-3 font-mono">CD11c / CD18 (p150,95, αXβ2)</td>
                      <td className="p-3 font-semibold">iC3b, C3dg, Fibrinogeno</td>
                      <td className="p-3">Cellule Dendritiche mieloidi (cDC), Macrofagi residenti</td>
                      <td className="p-3">Fagocitosi ad alta efficienza; marcatore diagnostico universale delle cellule dendritiche umane (CD11c).</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Dettaglio sul Sistema Navetta Eritrocitario */}
              <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-900 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-2">
                <div className="font-bold text-indigo-950 dark:text-indigo-200 text-sm">
                  Il Meccanismo Navetta degli Eritrociti (Clearance Immunocomplessi senza Danno Cellulare):
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Ciascun eritrocita umano esprime sulla propria membrana circa <strong>500–1000 molecole di CR1 (CD35)</strong>. 
                  Quando nel sangue si formano immunocomplessi solubili, la via classica fissa C1q e deposita C3b sul reticolo. 
                  Il CR1 eritrocitario lega avidamente questo C3b. Poiché gli eritrociti costituiscono il 99% degli elementi figurati circolanti, 
                  <strong>oltre il 90% degli immunocomplessi opsonizzati circolanti viaggia a bordo dei globuli rossi</strong>. 
                  L'eritrocita agisce come una navetta passiva: giunto nei sinusoidi epatici e nei cordoni splenici, 
                  i <strong>macrofagi residenti di Kupffer</strong> (dotati di un'altissima densità di CR1, CR3 e FcγR) 
                  strappano l'immunocomplesso dalla superficie dell'eritrocita ("stripping" fagocitario) 
                  rimettendo il globulo rosso intatto nel flusso ematico senza provocarne l'emolisi! 
                  Se il sistema è depauperato (come nel deficit congenito di C1q/C4 o per esaurimento di CR1 nel Lupus LES), 
                  gli immunocomplessi precipitano nelle pareti capillari glomerulari e sinoviali scatenando infiammazione letale.
                </p>
              </div>
            </div>

            {/* Simulatore 2: Amplificazione Corecettoriale B via CR2/CD21 */}
            <div className="p-4 rounded-xl border border-indigo-300 dark:border-indigo-800 bg-slate-50 dark:bg-slate-900 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="font-bold text-sm text-slate-900 dark:text-white">
                    Simulatore di Segnalazione Corecettoriale B: Complesso CR2(CD21) / CD19 / CD81
                  </span>
                </div>
                <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                  Guadagno di Segnale: {signalMultiplier}x
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Opsonizzazione da C3d:</label>
                  <button
                    onClick={() => setHasC3dOpsonization(!hasC3dOpsonization)}
                    className={`w-full mt-1 p-2 rounded-lg font-bold border transition-colors ${
                      hasC3dOpsonization 
                        ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-300'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400 border-slate-300'
                    }`}
                  >
                    {hasC3dOpsonization ? 'Presente (Antigene opsonizzato con C3d)' : 'Assente (Antigene nudo)'}
                  </button>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Concentrazione Antigene:</label>
                  <select
                    value={antigenDose}
                    onChange={(e) => setAntigenDose(e.target.value as 'low' | 'medium' | 'high')}
                    className="w-full mt-1 p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  >
                    <option value="low">Bassa (Picomolare, infezione precoce)</option>
                    <option value="medium">Media (Nanomolare)</option>
                    <option value="high">Alta (Micromolare)</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Integrità Molecolare di CD19:</label>
                  <button
                    onClick={() => setIsCD19Functional(!isCD19Functional)}
                    className={`w-full mt-1 p-2 rounded-lg font-bold border transition-colors ${
                      isCD19Functional 
                        ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-300'
                        : 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border-rose-300'
                    }`}
                  >
                    {isCD19Functional ? 'Funzionante (Wild-Type)' : 'Mutante KO (Deficit CD19 / CVID)'}
                  </button>
                </div>
              </div>

              <div className={`p-3 rounded-lg border text-xs leading-relaxed ${cr2OutcomeColor}`}>
                <div className="flex items-center justify-between font-bold mb-1">
                  <span>Intensità Segnale Intracellulare: {Math.round(signalStrengthPct)}%</span>
                  <span>{signalStrengthPct >= 50 ? 'Soglia Attivazione Superata' : 'Segnale Sottosoglia'}</span>
                </div>
                {cr2OutcomeText}
              </div>
            </div>

            {/* Le Anafilotossine */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <span>Le Anafilotossine (C5a &gt; C3a &gt; C4a) e la Sicurezza della Carbossipeptidasi N</span>
              </h3>
              <p>
                I frammenti peptidici solubili rilasciati durante l'attivazione sono i più potenti mediatori flogistici del sangue umano. 
                Agiscono legando recettori a 7 eliche transmembrana accoppiati a proteine G eterotrimeriche (<strong>C5aR1 / CD88</strong> e <strong>C3aR</strong>):
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1.5">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                    <span>Effetti Fisiopatologici di C5a</span>
                    <span className="text-rose-600 font-mono">1000x più potente di C3a</span>
                  </div>
                  <p>
                    • <strong>Chemiotassi Estrema:</strong> guida il reclutamento direzionale di neutrofili, monociti ed eosinofili verso il focolaio infettivo.
                    <br />• <strong>Attivazione Leucocitaria:</strong> induce l'up-regolazione immediata delle integrine β2 (CR3/Mac-1) e scatena il burst ossidativo dipendente da NOX2.
                    <br />• <strong>Anafilassi:</strong> degranulazione mastocitaria e basofila con rilascio massivo di istamina, spasmo della muscolatura liscia bronchiale e shock da collasso emodinamico.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-1.5">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                    <span>Inattivazione da Carbossipeptidasi N</span>
                    <span className="text-emerald-600 font-mono">Spegnimento di Sicurezza</span>
                  </div>
                  <p>
                    L'azione delle anafilotossine in circolo deve essere rigidamente confinata per evitare shock anafilattico sistemico letale. 
                    L'enzima plasmatico costitutivo <strong>Carbossipeptidasi N (arginina carbossipeptidasi)</strong> rimuove istantaneamente il residuo di <strong>arginina C-terminale</strong> da C5a e C3a.
                    <br />I metaboliti risultanti (<strong>C5a-desArg</strong> e <strong>C3a-desArg</strong>) possiedono un'attività biologica ridotta di 10-100 volte, limitando la reazione infiammatoria alla sola sede locale.
                  </p>
                </div>
              </div>
            </div>

            {/* GRANDI QUADRI CLINICI ED EMATOLOGICI D'ESAME */}
            <div className="space-y-4 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <span>I Grandi Quadri Clinico-Ematologici d'Esame: Fisiopatologia e Terapia Mirata</span>
              </h3>

              {/* 1. Angioedema Ereditario (HAE) */}
              <div className="p-4 rounded-xl border border-rose-300 dark:border-rose-900 bg-rose-50/40 dark:bg-rose-950/20 space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-bold text-rose-950 dark:text-rose-200 text-sm">
                    1. Angioedema Ereditario (HAE): Deficit di C1-INH e Tempesta da Bradichinina
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-300 font-semibold">
                    Autosomico Dominante (Gene SERPING1)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  L'HAE non è una malattia allergica, bensì una <strong>patologia chinino-mediata</strong>. 
                  C1-INH è il principale regolatore sia della via classica del complemento sia della <strong>Callicreina plasmatica</strong> e del Fattore XIIa della via di contatto. 
                  In assenza di C1-INH funzionale (Tipo I: deficit quantitativo 85%; Tipo II: proteina disfunzionale 15%), la callicreina cliva senza freni il chininogeno ad alto peso molecolare (<strong>HMWK</strong>), liberando quantità massicce di <strong>Bradichinina</strong>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
                  <div className="p-2.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-rose-200 dark:border-rose-800">
                    <strong className="text-rose-900 dark:text-rose-300 block">Clinica Differenziale:</strong>
                    Edemi asimmetrici sottocutanei e sottomucosi non pruriginosi, <strong>non improntabili (senza fovea)</strong> e privi di orticaria. Coliche addominali lancinanti da edema intestinale e rischio mortale di asfissia da <strong>edema della glottide</strong>.
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-rose-200 dark:border-rose-800">
                    <strong className="text-rose-900 dark:text-rose-300 block">Laboratorio Tipico d'Esame:</strong>
                    <strong>Consumo isolato di C4 (&lt;50%) con C3 perfettamente normale</strong>. C1s non inibito degrada C4 in continuo, ma la C3 convertasi non si assembla su superfici attivanti.
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-rose-200 dark:border-rose-800">
                    <strong className="text-rose-900 dark:text-rose-300 block">Terapia Mirata di Precisione:</strong>
                    Non risponde a cortisonici, antistaminici o adrenalina! Farmaci: <strong>C1-INH concentrato</strong> (*Berinert*, *Cinryze*); <strong>Icatibant</strong> (*Firazyr*, antagonista selettivo recettore B2 bradichinina); <strong>Lanadelumab</strong> (mAb inibitore callicreina).
                  </div>
                </div>
              </div>

              {/* 2. Emoglobinuria Parossistica Notturna (EPN) */}
              <div className="p-4 rounded-xl border border-purple-300 dark:border-purple-900 bg-purple-50/40 dark:bg-purple-950/20 space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-bold text-purple-950 dark:text-purple-200 text-sm">
                    2. Emoglobinuria Parossistica Notturna (EPN / PNH): Mutazione PIGA ed Emolisi MAC-Dipendente
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-300 font-semibold">
                    Mutazione Somatica Acquisita X-Linked (Gene PIGA)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Una mutazione somatica del gene <em>PIGA</em> in una cellula staminale ematopoietica midollare (HSC) impedisce la biosintesi dell'<strong>ancora glicosilfosfatidilinositolo (GPI)</strong>. 
                  Tutta la progenie clonale (globuli rossi, granulociti, monociti, piastrine) è priva di tutte le proteine ancorate a GPI, 
                  incluse le due sentinelle del complemento: <strong>CD55 (DAF)</strong> e <strong>CD59 (Protectina)</strong>. 
                  Privi di CD59, gli eritrociti non possono bloccare la polimerizzazione di C9 e vengono distrutti dal poro MAC (emolisi intravascolare cronica con picchi notturni legati al lieve calo di pH fisiologico durante il sonno).
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
                  <div className="p-2.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-purple-200 dark:border-purple-800">
                    <strong className="text-purple-900 dark:text-purple-300 block">Triade Clinica Classica:</strong>
                    1) Emolisi intravascolare con emoglobinuria ("urine scure/color coca-cola" al mattino) e anemia con LDH elevatissima; 
                    2) Sequestro di Monossido d'Azoto (NO) da emoglobina libera con spasmi esofagei e disfunzione erettile; 
                    3) <strong>Trombofilia venosa atipica letale (Sindrome di Budd-Chiari)</strong>.
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-purple-200 dark:border-purple-800">
                    <strong className="text-purple-900 dark:text-purple-300 block">Diagnosi di Laboratorio:</strong>
                    <strong>Citofluorimetria a flusso</strong> con reagente FLAER (lega specificamente le ancore GPI) e anticorpi monoclonali anti-CD55 e anti-CD59 su eritrociti e granulociti, documentando il clone negativo. Test di Coombs rigorosamente negativo.
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-purple-200 dark:border-purple-800">
                    <strong className="text-purple-900 dark:text-purple-300 block">Rivoluzione Farmacologica:</strong>
                    <strong>Eculizumab</strong> (Soliris) e <strong>Ravulizumab</strong> (Ultomiris): mAb umanizzati anti-C5 che bloccano il clivaggio di C5 impedendo la lisi MAC. 
                    <strong>Pegcetacoplan</strong> (Empaveli): peptide inibitore di C3 che previene anche l'emolisi extravascolare splenica C3b-mediata.
                  </div>
                </div>
              </div>

              {/* 3. Sindrome Emolitico-Uremica Atipica (aHUS) e Glomerulopatie da C3 */}
              <div className="p-4 rounded-xl border border-blue-300 dark:border-blue-900 bg-blue-50/40 dark:bg-blue-950/20 space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-bold text-blue-950 dark:text-blue-200 text-sm">
                    3. Sindrome Emolitico-Uremica Atipica (aHUS) e Deficit di C1q nel Lupus (LES)
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-300 font-semibold">
                    Microangiopatia Trombotica da Disregolazione Alternativa
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  L'<strong>aHUS</strong> è causata da mutazioni loss-of-function nei geni che codificano per i regolatori della via alternativa (<strong>Fattore H</strong> nel 30%, <strong>Fattore I</strong> o <strong>MCP/CD46</strong>), o autoanticorpi neutralizzanti anti-Fattore H. 
                  Il fallimento della protezione del self porta alla distruzione litica dell'endotelio glomerulare con formazione di trombi microvascolari piastrinici, anemia emolitica meccanica con schistociti, piastrinopenia da consumo e insufficienza renale acuta.
                  <br /><strong>Il Paradosso del Lupus (LES) da Deficit di C1q:</strong> oltre il 90% degli individui con deficit genetico omozigote di C1q, C1r, C1s o C4 sviluppa Lupus sistemico grave. Il motivo biochimico risiede nell'incapacità di operare la clearance fisiologica e silenziosa dei corpi apoptotici cellulari; la loro lisi secondaria rilascia acidi nucleici che attivano TLR7/TLR9 delle cellule dendritiche plasmacitoidi, scatenando la produzione aberrante di IFN-α e autoanticorpi anti-DNA nucleare.
                </p>
              </div>
            </div>

            {/* Strategie di Evasione Microbica */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Microscope className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span>Strategie Batteriche di Immunoevasione e l'Esempio di Staphylococcus aureus</span>
              </h3>
              <p>
                I batteri patogeni hanno evoluto una formidabile controffensiva molecolare per neutralizzare il complemento:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <strong className="text-slate-900 dark:text-white block font-mono">Proteina A (SpA)</strong>
                  <span className="text-slate-600 dark:text-slate-400 mt-1 block">
                    Lega la porzione Fc delle IgG nel verso opposto, esponendo i Fab all'esterno e nascondendo i siti di docking per C1q e CD16.
                  </span>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <strong className="text-slate-900 dark:text-white block font-mono">SCIN (Inibitore Convertasi)</strong>
                  <span className="text-slate-600 dark:text-slate-400 mt-1 block">
                    <em>Staphylococcal Complement Inhibitor</em>. Lega e stabilizza in modo inerte le C3 convertasi C3bBb e C4b2b arrestando il loop.
                  </span>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <strong className="text-slate-900 dark:text-white block font-mono">CHIPS (Blocco C5aR)</strong>
                  <span className="text-slate-600 dark:text-slate-400 mt-1 block">
                    Lega ad altissima affinità C5aR1 (CD88) impedendo il legame di C5a e paralizzando la chemiotassi dei neutrofili.
                  </span>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <strong className="text-slate-900 dark:text-white block font-mono">Mascheramento da Acido Sialico</strong>
                  <span className="text-slate-600 dark:text-slate-400 mt-1 block">
                    <em>N. meningitidis</em> e <em>S. agalactiae</em> incorporano acido sialico nella capsula, reclutando il Fattore H e ingannando l'ospite.
                  </span>
                </div>
              </div>
            </div>

            {/* Ponte Fisiologico 4.2 -> 4.3 */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-rose-500/10 via-amber-500/5 to-transparent border-l-4 border-rose-500 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <span className="font-bold text-rose-800 dark:text-rose-300 uppercase tracking-wider text-[11px] block">
                Ponte Fisiologico di Transizione: Dal Complemento ai Recettori Cellulari Fc delle Immunoglobuline
              </span>
              <p>
                La cascata del complemento e le opsonine complementari agiscono in perfetta sinergia con la porzione costante degli anticorpi. 
                Quando un anticorpo lega il proprio antigene tramite i frammenti Fab, la sua porzione <strong>Fc (Frammento Cristallizzabile)</strong> 
                diventa il connettore fondamentale verso i sistemi cellulari effettori. 
                Nella sezione 4.3 esploriamo l'architettura delle classi anticorpali, il comportamento anomalo delle <strong>IgG4</strong>, 
                la famiglia dei recettori cellulari <strong>FcγR, FcεR, FcRn e pIgR</strong>, e la scoperta rivoluzionaria dell'impatto della 
                <strong>glicosilazione in Asn297 (anticorpi afucosilati)</strong> nel potenziare di 50-100 volte la citotossicità cellulare anticorpo-dipendente (ADCC).
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* SEZIONE 4.3: CLASSI IG, RECETTORI Fc & GLICOSILAZIONE */}
        {/* --------------------------------------------------------- */}
        <section id="sec-4-fcr-funzioni" className="scroll-mt-16 space-y-8">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Sezione 4.3 • Lezione 17</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Classi e Sottoclassi Anticorpali, la Famiglia dei Recettori Fc (FcγR, FcεR, FcRn, pIgR), la Glicosilazione Asn297 e i Meccanismi Effettori
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Il ponte molecolare tra riconoscimento umorale e risposta cellulare: l'anomalia dinamica delle IgG4 (Fab-arm exchange), i recettori ITAM vs ITIM (FcγRIIB), la transcitosi delle sIgA e la glicoingegneria dell'Fc afucosilato.
            </p>
          </div>

          <div className={`space-y-6 text-slate-800 dark:text-slate-200 ${proseSizeClass}`}>
            
            {/* Tavola Comparativa Completa delle 5 Classi e Sottoclassi */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Tavola Comparativa Rigorosa delle Classi e Sottoclassi delle Immunoglobuline Umane</span>
              </h3>
              <p>
                Ciascun isotipo anticorpale possiede proprietà biochimiche e cinetiche uniche, determinate dalla sequenza costante della catena pesante:
              </p>

              <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 font-mono border-b border-slate-200 dark:border-slate-800">
                      <th className="p-2.5">Classe / Sottoclasse</th>
                      <th className="p-2.5">Catena Pesante</th>
                      <th className="p-2.5">Valenza (Siti)</th>
                      <th className="p-2.5">Conc. Sierica (mg/mL)</th>
                      <th className="p-2.5">Emivita (Giorni)</th>
                      <th className="p-2.5">Passaggio Placentare</th>
                      <th className="p-2.5">Fissazione C1q</th>
                      <th className="p-2.5">Funzione Principale</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-blue-700 dark:text-blue-400">IgM Pentamerica</td>
                      <td className="p-2.5 font-mono">μ (con catena J)</td>
                      <td className="p-2.5 font-mono">10 (sterica ~5)</td>
                      <td className="p-2.5">1.5</td>
                      <td className="p-2.5">5</td>
                      <td className="p-2.5 text-rose-600 font-bold">No</td>
                      <td className="p-2.5 font-bold text-emerald-600">+++++ (massima)</td>
                      <td className="p-2.5">Risposta primaria precoce, opsonina, attivazione massiva della via classica del complemento.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-emerald-700 dark:text-emerald-400">IgG1</td>
                      <td className="p-2.5 font-mono">γ1</td>
                      <td className="p-2.5 font-mono">2 (bivalente)</td>
                      <td className="p-2.5 font-bold">9.0 (prevalente)</td>
                      <td className="p-2.5">21 (FcRn)</td>
                      <td className="p-2.5 text-emerald-600 font-bold">Sì (+++)</td>
                      <td className="p-2.5 font-bold text-emerald-600">+++</td>
                      <td className="p-2.5">Opsonofagocitosi via FcγR, ADCC mediata da NK, neutralizzazione tossine e virus.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-emerald-700 dark:text-emerald-400">IgG2</td>
                      <td className="p-2.5 font-mono">γ2</td>
                      <td className="p-2.5 font-mono">2</td>
                      <td className="p-2.5">3.0</td>
                      <td className="p-2.5">21</td>
                      <td className="p-2.5 text-amber-600">+ (basso)</td>
                      <td className="p-2.5">+ (debole)</td>
                      <td className="p-2.5">Risposta contro antigeni carboidratici e polisaccaridi capsulari batterici (TI-2).</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-emerald-700 dark:text-emerald-400">IgG3</td>
                      <td className="p-2.5 font-mono">γ3 (cerniera lunga)</td>
                      <td className="p-2.5 font-mono">2</td>
                      <td className="p-2.5">1.0</td>
                      <td className="p-2.5 font-bold text-rose-600">7 (suscettibile)</td>
                      <td className="p-2.5 text-emerald-600 font-bold">Sì (++++)</td>
                      <td className="p-2.5 font-bold text-emerald-600">++++ (massima)</td>
                      <td className="p-2.5">Altissima capacità attivatrice di C1q e ADCC; emivita breve per proteolisi della cerniera estesa.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-emerald-700 dark:text-emerald-400">IgG4</td>
                      <td className="p-2.5 font-mono">γ4 (cerniera instabile)</td>
                      <td className="p-2.5 font-mono">2 (monovalente dinamica)</td>
                      <td className="p-2.5">0.5</td>
                      <td className="p-2.5">21</td>
                      <td className="p-2.5 text-emerald-600 font-bold">Sì (++)</td>
                      <td className="p-2.5 text-rose-600 font-bold">Assente (0)</td>
                      <td className="p-2.5">Fab-arm exchange, anticorpo bloccante anti-infiammatorio, protezione in allergologia (AIT).</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-amber-700 dark:text-amber-400">IgA Dimerica (sIgA)</td>
                      <td className="p-2.5 font-mono">α1, α2 (con J e SC)</td>
                      <td className="p-2.5 font-mono">4 (tetravalente)</td>
                      <td className="p-2.5">2.0 (siero) / 3-5 g/die secreti</td>
                      <td className="p-2.5">6</td>
                      <td className="p-2.5 text-rose-600 font-bold">No (sì nel colostro)</td>
                      <td className="p-2.5 text-rose-600 font-bold">No (solo lectinica debole)</td>
                      <td className="p-2.5">Immunità mucosale, neutralizzazione immune exclusion senza reclutamento infiammatorio litico.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-purple-700 dark:text-purple-400">IgE</td>
                      <td className="p-2.5 font-mono">ε (4 domini CH)</td>
                      <td className="p-2.5 font-mono">2</td>
                      <td className="p-2.5 font-bold text-rose-600">0.00005 (tracce)</td>
                      <td className="p-2.5">2 (siero) / mesi (tessuti)</td>
                      <td className="p-2.5 text-rose-600 font-bold">No</td>
                      <td className="p-2.5 text-rose-600 font-bold">Assente (0)</td>
                      <td className="p-2.5">Immunità antielmintica, degranulazione di mastociti e basofili (FcεRI), reazioni allergiche immediate.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Box Approfondimento IgG4 e Fab-arm exchange */}
              <div className="p-4 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50/40 dark:bg-amber-950/20 space-y-2">
                <div className="font-bold text-amber-950 dark:text-amber-200 text-sm flex items-center gap-2">
                  <Split className="w-4 h-4 text-amber-600" />
                  <span>La Peculiarità Molecolare delle IgG4: Il Fenomeno del "Fab-Arm Exchange"</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Nella regione cerniera delle IgG4 umane è presente una prolina sostituita da una serina (sequenza <em>Cys-Pro-Ser-Cys</em> anziché <em>Cys-Pro-Pro-Cys</em>). 
                  Questo rende i due ponti disolfuro intercatena pesante deboli e reversibili in condizioni fisiologiche riducenti in vivo. 
                  Una molecola di IgG4 può dissociarsi in due emimeri (ciascuno composto da una catena pesante e una leggera) e ricombinarsi casualmente con un emimero proveniente da un'altra molecola di IgG4 differente. 
                  Il risultato è che la quasi totalità delle IgG4 circolanti diventa <strong>funzionalmente bispecifica e monovalente per ciascun epitopo</strong>: 
                  non possono cross-linkare antigeni formando precipitati o grandi immunocomplessi, non possono fissare C1q (mancanza del residuo Glu318) e legano molto debolmente i recettori Fc attivatori. 
                  Pertanto, agiscono come <strong>"spugne neutralizzanti bloccanti"</strong> prive di tossicità infiammatoria. 
                  In clinica allergologica, il successo dell'immunoterapia desensibilizzante specifica (AIT) si misura proprio dallo switch a IgG4 bloccanti che sottraggono l'allergene alle IgE mastocitarie!
                </p>
              </div>
            </div>

            {/* Architettura e Affinità della Famiglia dei Recettori FcγR */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Dna className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>La Famiglia dei Recettori Fc per le IgG (FcγR): Gerarchia di Affinità, ITAM vs ITIM</span>
              </h3>
              <p>
                La risposta cellulare alle IgG è orchestrata da recettori che appartengono alla superfamiglia delle immunoglobuline:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                
                {/* FcγRI (CD64) */}
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">FcγRI (CD64)</span>
                    <span className="font-mono text-emerald-600 font-bold">Alta Affinità (Kd ~ 10⁻⁸ - 10⁻⁹ M)</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    • <strong>Struttura:</strong> 3 domini extracellulari Ig-like. È l'<strong>unico FcγR capace di legare IgG monomeriche libere</strong> a concentrazioni fisiologiche.
                    <br />• <strong>Trasduzione:</strong> associato a un omodimero di <strong>catena γ comune (FcRγ)</strong> provvista di motivi <strong>ITAM</strong>. La tirosin-chinasi Syk attiva la cascata di fagocitosi attiva e burst respiratorio.
                    <br />• <strong>Clinica:</strong> espresso su macrofagi e monociti; fortemente <strong>up-regolato sui neutrofili durante infezioni batteriche sistemiche</strong> (marcatore biochimico di sepsi).
                  </p>
                </div>

                {/* FcγRIIA (CD32A) */}
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">FcγRIIA (CD32A)</span>
                    <span className="font-mono text-blue-600 font-bold">Bassa Affinità (Kd &gt; 10⁻⁷ M)</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    • <strong>Struttura:</strong> 2 domini extracellulari. Lega avidamente solo <strong>immunocomplessi o particelle opsonizzate multivalenti</strong>.
                    <br />• <strong>Particolarità Unica:</strong> possiede il motivo <strong>ITAM intrinseco direttamente nella propria coda citoplasmatica</strong> (non richiede catene accessorie).
                    <br />• <strong>Funzione:</strong> guida l'opsonofagocitosi e la clearance fagocitaria su neutrofili, monociti e macrofagi.
                  </p>
                </div>

                {/* FcγRIIB (CD32B) */}
                <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/20 dark:bg-rose-950/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-rose-900 dark:text-rose-200 text-sm">FcγRIIB (CD32B)</span>
                    <span className="font-mono text-rose-600 font-bold">Unico Recettore Inibitorio (ITIM)</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    • <strong>Struttura:</strong> 2 domini Ig-like, omologo a CD32A all'esterno ma provvisto di motivo <strong>ITIM</strong> citoplasmatico.
                    <br />• <strong>Meccanismo Molecolare:</strong> co-aggregato con il BCR o con FcγR attivatori, viene fosforilato da Lyn e recluta l'inositolo-5-fosfatasi <strong>SHIP-1</strong>, che idrolizza PIP₃ in PIP₂ provocando il distacco di Btk e PLC-γ e spegnendo la risposta.
                    <br />• <strong>Terapia con IVIG:</strong> le immunoglobuline endovena ad alte dosi (1-2 g/kg) saturano e up-regolano FcγRIIB sui macrofagi e sulle B cells, arrestando la distruzione autoimmune nella Porpora Trombocitopenica Immune (ITP) e nella Malattia di Kawasaki.
                  </p>
                </div>

                {/* FcγRIIIA (CD16a) */}
                <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-900 bg-indigo-50/20 dark:bg-indigo-950/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-indigo-900 dark:text-indigo-200 text-sm">FcγRIIIA (CD16a)</span>
                    <span className="font-mono text-indigo-600 font-bold">Mediatore della ADCC (Cellule NK)</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    • <strong>Espressione:</strong> espresso sulle <strong>Cellule NK</strong> e su macrofagi tissutali; associato a dimeri di catena FcRγ o catena ζ di CD3.
                    <br />• <strong>Meccanismo ADCC:</strong> il legame multivalente con anticorpi IgG1 o IgG3 che rivestono una cellula tumorale o infettata innesca la degranulazione selettiva e polarizzata di <strong>perforina e granzimi</strong> uccidendo il bersaglio per apoptosi.
                    <br />• <strong>Nota su CD16b:</strong> espresso ad altissima densità sui neutrofili, è privo di coda citoplasmatica e ancorato tramite <strong>GPI</strong> con funzione di recettore scavenger.
                  </p>
                </div>
              </div>
            </div>

            {/* L'Impatto della Glicosilazione Asn297 e l'Afucosilazione */}
            <div className="p-4 rounded-xl border border-indigo-300 dark:border-indigo-800 bg-indigo-50/40 dark:bg-indigo-950/20 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  La N-Glicosilazione in Asn297 e la Rivoluzione degli Anticorpi Afucosilati
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Ciascuna catena pesante delle IgG umane possiede un sito canonico e rigidamente conservato di <strong>N-glicosilazione all'asparagina 297 (Asn297)</strong> 
                nel dominio CH2. Il glicano bivalente complesso che vi è ancorato è strutturalmente indispensabile per mantenere distanziati i due domini CH2, 
                garantendo la corretta conformazione della tasca di legame per C1q e per i recettori FcγR (un anticorpo aglicosilato perde completamente la capacità di attivare complemento e ADCC).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-indigo-200 dark:border-indigo-800">
                  <strong className="text-indigo-900 dark:text-indigo-300 block">L'Ingombro Sterico del Fucosio:</strong>
                  Negli anticorpi umani convenzionali, il glicano presenta un residuo di <strong>fucosio centrale legato con legame α1,6</strong> alla prima N-acetilglucosamina (GlcNAc). 
                  Questo atomo di fucosio genera un minimo ingombro sterico contro il residuo di carboidrato presente su Asn162 del recettore <strong>CD16a</strong> delle cellule NK.
                </div>
                <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-indigo-200 dark:border-indigo-800">
                  <strong className="text-indigo-900 dark:text-indigo-300 block">La Potenza degli Anticorpi Afucosilati:</strong>
                  Rimuovendo biotecnologicamente il fucosio (*afucosylation* tramite linee cellulari ingegnerizzate prive dell'enzima FUT8), l'ingombro viene cancellato. 
                  L'affinità di legame per CD16a aumenta di <strong>50–100 volte</strong>! 
                  <br />• <strong>In Oncologia:</strong> farmaci come <strong>Obinutuzumab</strong> (anti-CD20 afucosilato di Tipo II) possiedono un'attività ADCC immensamente superiore a Rituximab.
                  <br />• <strong>Nella Patologia Infettiva:</strong> la produzione precoce di IgG afucosilate anti-Spike nel COVID-19 grave iperattiva i macrofagi polmonari innescando tempeste citochiniche distruttive.
                </div>
              </div>
            </div>

            {/* Altri Recettori Chiave: FcεRI, pIgR e FcRn */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                <div className="font-bold text-purple-900 dark:text-purple-300 text-sm">
                  FcεRI (Altissima Affinità per IgE)
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Eterotetramero (αβγ₂) su mastociti e basofili. La subunità α lega l'Fc delle IgE con un'affinità quasi covalente (<strong>Kd ≈ 10⁻¹⁰ M</strong>): 
                  la molecola di IgE rimane ancorata per mesi sulla cellula. Il legame bivalente dell'allergene innesca la degranulazione immediata (istamina, leucotrieni LTC4/LTD4). 
                  Il recettore a bassa affinità per IgE è <strong>CD23 (FcεRII)</strong>, lectina trimerica di Tipo C.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                <div className="font-bold text-amber-900 dark:text-amber-300 text-sm">
                  pIgR & Transcitosi Mucosale
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Espresso sul versante basolaterale delle cellule epiteliali mucosali (GALT e BALT). Riconosce la catena J delle <strong>IgA dimeriche</strong> e delle IgM pentameriche. 
                  Trasporta il complesso per transcitosi verso il lume; al polo apicale viene clivato proteoliticamente rilasciando l'anticorpo rivestito dalla <strong>Componente Secretoria (SC)</strong>, 
                  che scherma la cerniera dagli enzimi digestivi luminali.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                <div className="font-bold text-emerald-900 dark:text-emerald-300 text-sm">
                  FcRn & Riciclo pH-Dipendente
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Eterodimero non classico correlato a MHC-I (catena pesante associata a β₂-microglobulina) privo di solco peptidico. 
                  Lega il dominio CH2-CH3 delle IgG solo a <strong>pH acido endosomiale (pH 6.0)</strong>, salvandole dalla degradazione lisosomiale e rilasciandole intatte a <strong>pH neutro (7.4)</strong>. 
                  Responsabile dell'emivita di 21 giorni delle IgG e del passaggio placentare materno-fetale.
                </p>
              </div>
            </div>

            {/* Simulatore 3: Laboratorio Interattivo Recettori Fc */}
            <div className="p-5 rounded-2xl border border-indigo-300 dark:border-indigo-800/80 bg-gradient-to-br from-indigo-500/5 via-blue-500/5 to-slate-100/50 dark:from-indigo-950/20 dark:to-slate-900/50 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-200 dark:border-indigo-800/60 pb-3">
                <div className="flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Laboratorio Interattivo: Profilazione Molecolare delle Classi Ig e dei Recettori Fc
                  </h3>
                </div>
                <span className="text-xs font-mono text-indigo-700 dark:text-indigo-400 font-bold">
                  Simulatore Biofisico di Binding
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Isotipo / Classe Anticorpale:</label>
                  <select
                    value={selectedFcIg}
                    onChange={(e) => setSelectedFcIg(e.target.value as IgIsotypeChoice)}
                    className="w-full mt-1 p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium"
                  >
                    <option value="igg1">IgG1 Umana (Isotipo oncologico di riferimento)</option>
                    <option value="igg2">IgG2 Umana (Antipolisaccaridica)</option>
                    <option value="igg3">IgG3 Umana (Cerniera lunga iperflessibile)</option>
                    <option value="igg4">IgG4 Umana (Fab-arm exchange, non citotossica)</option>
                    <option value="iga_dimer">IgA Dimerica con Catena J (Mucosale)</option>
                    <option value="igm_pentamer">IgM Pentamerica con Catena J</option>
                    <option value="ige">IgE Monomerica (Allergia ed Elminti)</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Stato Glicosilazione Asn297 (Fucosio):</label>
                  <button
                    onClick={() => setIsFcAfucosylated(!isFcAfucosylated)}
                    disabled={!selectedFcIg.startsWith('igg')}
                    className={`w-full mt-1 p-2 rounded-lg font-bold border transition-colors ${
                      !selectedFcIg.startsWith('igg')
                        ? 'opacity-40 cursor-not-allowed bg-slate-200 dark:bg-slate-800 text-slate-500'
                        : isFcAfucosylated
                        ? 'bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-300'
                        : 'bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-300'
                    }`}
                  >
                    {isFcAfucosylated ? 'Afucosilato (Asn297 privo di fucosio - Alta ADCC)' : 'Normalmente Fucosilato (Wild-Type)'}
                  </button>
                </div>
              </div>

              {/* Scheda di Binding Calcolata */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 text-xs">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-500 block">Fissazione C1q:</span>
                    <strong className="text-slate-900 dark:text-white font-mono">{fcProfile.c1qBinding}</strong>
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-500 block">Legame CD64 (FcγRI):</span>
                    <strong className="text-slate-900 dark:text-white font-mono">{fcProfile.cd64Binding}</strong>
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-500 block">Legame CD16a (FcγRIIIA):</span>
                    <strong className="text-indigo-600 dark:text-indigo-400 font-mono">{fcProfile.cd16aBinding}</strong>
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-500 block">Riciclo FcRn:</span>
                    <strong className="text-emerald-600 dark:text-emerald-400 font-mono">{fcProfile.fcrnBinding}</strong>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-4">
                    <span>Score Potenziale ADCC: <strong className="font-mono text-indigo-600">{fcProfile.adccScore}/100</strong></span>
                    <span>Score Potenziale CDC: <strong className="font-mono text-rose-600">{fcProfile.cdcScore}/100</strong></span>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 italic">
                    {fcProfile.clinicalNote}
                  </div>
                </div>
              </div>
            </div>

            {/* Ponte Fisiologico 4.3 -> 4.4 */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent border-l-4 border-indigo-500 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <span className="font-bold text-indigo-800 dark:text-indigo-300 uppercase tracking-wider text-[11px] block">
                Ponte Fisiologico di Transizione: Dalla Biologia dei Recettori all'Ingegneria dei Monoclonali
              </span>
              <p>
                La comprensione delle interazioni biofisiche tra regione Fc, recettori Fc cellulari e FcRn ha trasformato l'immunologia in una straordinaria fucina biotecnologica. 
                Nella sezione 4.4 esploriamo come la tecnica degli ibridomi premiata col Nobel a Köhler e Milstein abbia aperto la strada agli anticorpi terapeutici moderni, 
                e come oggi gli ingegneri molecolari modifichino l'Fc (con mutazioni quali la tripla <strong>YTE</strong> per portare l'emivita a 150 giorni), 
                creino costrutti bispecifici <strong>BiTE</strong> capaci di forzare sinapsi litiche MHC-indipendenti, 
                e progettino <strong>coniugati farmaco-anticorpo (ADC)</strong> capaci di agire come letali cavalli di Troia sfruttando l'<strong>effetto Bystander</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* SEZIONE 4.4: MABS, UMANIZZAZIONE, BITE & ADC */}
        {/* --------------------------------------------------------- */}
        <section id="sec-4-mabs-ingegneria" className="scroll-mt-16 space-y-8">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs font-mono uppercase tracking-wider">
              <Syringe className="w-4 h-4" />
              <span>Sezione 4.4 • Lezione 18</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Anticorpi Monoclonali Terapeutici: Tecnologia degli Ibridomi, Umanizzazione, Piattaforme Avanzate (BiTE, ADC) e Teranostica
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Dalla selezione metabolica in terreno HAT (Nobel 1984) all'evoluzione chimerica-umanizzata-umana, estensione dell'emivita via Fc-YTE (Nirsevimab), reindirizzamento citotossico dei BiTE (Blinatumomab) e chemioterapia di precisione con ADC (T-DXd ed effetto Bystander).
            </p>
          </div>

          <div className={`space-y-6 text-slate-800 dark:text-slate-200 ${proseSizeClass}`}>
            
            {/* Box Nobel 1984 Köhler e Milstein */}
            <div className="p-4 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 space-y-2.5">
              <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-200 text-sm">
                <Award className="w-5 h-5 text-amber-600" />
                <span>La Tecnologia degli Ibridomi (Premio Nobel per la Medicina 1984 a Köhler e Milstein)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Prima del 1975 era impossibile ottenere anticorpi omogenei ad alta affinità contro un singolo epitopo (i sieri animali sono policlonali e variabili). 
                <strong>Georges Köhler e César Milstein</strong> risolsero il problema fondendo chimicamente con PEG (polietilenglicole) due cellule: 
                i <strong>linfociti B primari di topo immunizzato</strong> (dotati di specificità e di enzima HGPRT, ma mortali dopo 7 giorni) 
                e una linea cellulare di <strong>mieloma murino</strong> (immortale, ma resa mutante difettiva HGPRT⁻ e incapace di secernere Ig proprie).
              </p>
              <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-amber-200 dark:border-amber-800 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <strong className="text-amber-900 dark:text-amber-300 block">La Selezione Metabolica nel Terreno HAT (Ipoxantina, Aminopterina, Timidina):</strong>
                • L'<strong>Aminopterina</strong> blocca irreversibilmente la diidrofolato reduttasi (DHFR), impedendo a tutte le cellule la sintesi <em>de novo</em> dei nucleotidi. 
                Le cellule possono sopravvivere solo se attivano la <strong>via di salvataggio (salvage pathway)</strong> mediata dall'enzima <strong>HGPRT</strong> (usando Ipoxantina) e dalla timidina-chinasi (usando Timidina).
                <br />• Le <strong>cellule di mieloma non fuso</strong> muoiono tutte entro 48–72 ore perché prive di HGPRT.
                <br />• I <strong>linfociti B non fusi</strong> possiedono HGPRT ma muoiono spontaneamente per senescenza entro 7–10 giorni.
                <br />• <strong>Solo gli ibridomi fusi sopravvivono e proliferano indefinitamente:</strong> combinano l'enzima HGPRT vitale del linfocita B con l'immortalità del mieloma, secernendo quantità illimitate di anticorpo monoclonale identico.
              </div>
            </div>

            {/* Evoluzione Ingegneristica, Nomenclatura e HAMA */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Binary className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>Evoluzione dell'Ingegneria Anticorpale, Nomenclatura Ufficiale e Immunogenicità</span>
              </h3>
              <p>
                L'applicazione clinica dei primi monoclonali murini fu limitata dallo sviluppo precoce di anticorpi neutralizzanti 
                <strong>HAMA (Human Anti-Mouse Antibodies)</strong>, responsabili di shock anafilattico, malattia da siero e rapida eliminazione farmacocinetica. 
                L'ingegneria genetica ha gradualmente sostituito le sequenze murine con sequenze umane:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                
                <div className="p-3.5 rounded-xl border border-red-200 dark:border-red-900 bg-red-50/20 dark:bg-red-950/20 space-y-1.5">
                  <div className="font-bold text-red-900 dark:text-red-300 flex items-center justify-between">
                    <span>Murini (-omab)</span>
                    <span className="font-mono text-[10px]">0% Umani</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Interamente murini. Altissima immunogenicità (reazione HAMA), emivita plasmatica di poche ore. Ormai abbandonati in clinica tranne per radioimmunoterapie mirate (es. Ibritumomab tiuxetan).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50/20 dark:bg-amber-950/20 space-y-1.5">
                  <div className="font-bold text-amber-900 dark:text-amber-300 flex items-center justify-between">
                    <span>Chimerici (-ximab)</span>
                    <span className="font-mono text-[10px]">~65% Umani</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Domini variabili VH/VL murini fusi sui domini costanti CH e CL umani. Riducono drasticamente l'immunogenicità. 
                    Esempi storici: <strong>Rituximab</strong> (anti-CD20), <strong>Infliximab</strong> (anti-TNF-α), <strong>Cetuximab</strong> (anti-EGFR).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/20 dark:bg-blue-950/20 space-y-1.5">
                  <div className="font-bold text-blue-900 dark:text-blue-300 flex items-center justify-between">
                    <span>Umanizzati (-zumab)</span>
                    <span className="font-mono text-[10px]">&gt;90-95% Umani</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Tecnica del <strong>CDR grafting</strong>: solo le 6 anse ipervariabili CDR murine sono innestate sullo scaffold framework umano. 
                    Esempi: <strong>Trastuzumab</strong> (anti-HER2), <strong>Pembrolizumab</strong> (anti-PD-1), <strong>Eculizumab</strong> (anti-C5).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-1.5">
                  <div className="font-bold text-emerald-900 dark:text-emerald-300 flex items-center justify-between">
                    <span>Umani (-umab)</span>
                    <span className="font-mono text-[10px]">100% Umani</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Ottenuti da <strong>Phage Display</strong> o da topi transgenici (<em>XenoMouse</em>) in cui il locus Ig murino è sostituito da quello umano. 
                    Immunogenicità minima. Esempi: <strong>Adalimumab</strong> (anti-TNF), <strong>Nivolumab</strong> (anti-PD-1), <strong>Dupilumab</strong> (anti-IL-4Rα).
                  </p>
                </div>
              </div>
            </div>

            {/* Ingegneria dell'Fc per l'Emivita: La Mutazione YTE e Nirsevimab */}
            <div className="p-4 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/30 dark:bg-emerald-950/20 space-y-2">
              <div className="font-bold text-emerald-950 dark:text-emerald-200 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Estensione dell'Emivita Plasmatica: La Tripla Mutazione YTE (M252Y / S254T / T256E)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Gli ingegneri molecolari hanno mappato con precisione atomica i residui dell'Fc responsabili del legame con il recettore neonatale <strong>FcRn</strong>. 
                Introducendo la mutazione tripla <strong>M252Y / S254T / T256E (denominata YTE)</strong> o la variante <strong>LS (M428L / N434S)</strong> nei domini CH2-CH3, 
                l'affinità di legame per FcRn a pH acido endosomiale (pH 6.0) viene aumentata di <strong>oltre 10 volte</strong>, 
                mantenendo al contempo un rilascio istantaneo a pH fisiologico 7.4 nel siero.
                <br />Questo impedisce alle IgG di entrare nel pathway degradativo lisosomiale e spinge l'emivita plasmatica dai canonici 21 giorni a <strong>oltre 90–150 giorni (5 mesi!)</strong>.
                <br />• <strong>Applicazione Rivoluzionaria: Nirsevimab (Beyfortus)</strong>: anticorpo monoclonale umanizzato anti-proteina F del Virus Respiratorio Sinciziale (RSV). Una singola somministrazione intramuscolo alla nascita conferisce protezione passiva per l'intera durata della stagione epidemica invernale nei neonati, eliminando le ospedalizzazioni per bronchiolite.
              </p>
            </div>

            {/* Piattaforme Avanzate: BiTE (Blinatumomab) e Coniugati ADC (T-DXd) */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <span>Piattaforme di Nuova Generazione: Anticorpi Bispecifici (BiTE) e Coniugati Farmaco-Anticorpo (ADC)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                
                {/* BiTE */}
                <div className="p-4 rounded-xl border border-purple-200 dark:border-purple-900 bg-purple-50/20 dark:bg-purple-950/20 space-y-2">
                  <div className="font-bold text-purple-900 dark:text-purple-300 text-sm flex items-center justify-between">
                    <span>1. BiTE: Bispecific T-Cell Engagers</span>
                    <span className="font-mono text-purple-600">Blinatumomab</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    • <strong>Costruzione:</strong> due frammenti a catena singola <strong>scFv</strong> uniti da un linker peptidico corto e flessibile; <strong>completamente privi di Fc</strong> (massa ~55 kDa, eliminazione renale rapida che richiede infusione continua).
                    <br />• <strong>Meccanismo di Lisi Forzata:</strong> un braccio scFv lega ad alta affinità un marcatore tumorale (es. <strong>CD19</strong> sui blasti B leucemici) e l'altro braccio scFv lega la subunità <strong>CD3ε del TCR</strong> sui linfociti T citotossici.
                    <br />• <strong>Uccisione MHC-Indipendente:</strong> costringe fisicamente il linfocita T a formare una sinapsi litica artificiale contro la cellula tumorale, provocando la polarizzazione dell'MTOC e la scarica letale di perforina e granzimi <strong>senza necessità di presentazione MHC-I e senza bisogno del Segnale 2 di co-stimolazione!</strong>
                  </p>
                </div>

                {/* ADC */}
                <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/20 dark:bg-rose-950/20 space-y-2">
                  <div className="font-bold text-rose-900 dark:text-rose-300 text-sm flex items-center justify-between">
                    <span>2. ADC: Antibody-Drug Conjugates</span>
                    <span className="font-mono text-rose-600">Trastuzumab Deruxtecan (T-DXd)</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    • <strong>Triade Strutturale:</strong> mAb vettore specifico + Linker chimico stabile in circolo + Payload citotossico ad altissima potenza (IC50 picomolare, veleni dei microtubuli o inibitori della topoisomerasi I).
                    <br />• <strong>Parametro DAR (Drug-to-Antibody Ratio):</strong> numero medio di molecole citotossiche coniugate per anticorpo (DAR 8 in T-DXd vs DAR 3.5 in T-DM1).
                    <br />• <strong>Effetto Bystander Killing:</strong> nel T-DXd il linker peptidico è tagliato selettivamente dalla catepsina lisosomiale tumorale rilasciando un payload <strong>lipofilo e neutro</strong> che diffonde attraverso le membrane, sterminando anche le cellule tumorali vicine eterogenee che non esprimono l'antigene (efficacia clinica rivoluzionaria nei tumori HER2-low!).
                  </p>
                </div>
              </div>

              {/* Radioimmunoterapia e Teranostica */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 text-xs leading-relaxed">
                <div className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <Atom className="w-4 h-4 text-amber-500" />
                  <span>Radioimmunoterapia Mirata (RIT) e il Paradigma Teranostico</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  L'anticorpo monoclonale viene coniugato a un chelante chimico ad alta stabilità (come <strong>DOTA</strong>) in grado di coordinare isotopi radioattivi:
                  <br />• <strong>Radionuclidi β-emittenti (⁹⁰Y, ¹⁷⁷Lu):</strong> emettono elettroni con raggio d'azione di 1–5 mm; generano un <strong>effetto crossfire</strong> capace di sterilizzare le cellule tumorali interne a masse solide ipovascolarizzate e non direttamente raggiunte dal farmaco.
                  <br />• <strong>Radionuclidi α-emittenti (²²⁵Ac, ²¹³Bi):</strong> particelle ad altissimo trasferimento lineare di energia (LET) con raggio sub-cellulare (40–80 μm); inducono rotture irreversibili a doppio filamento del DNA (DSB) nelle singole cellule micrometastatiche.
                  <br />• <strong>Teranostica:</strong> l'impiego dello stesso anticorpo coniugato a ⁶⁸Ga per la diagnostica PET ad altissima risoluzione e successivamente a ¹⁷⁷Lu/²²⁵Ac per la radioterapia metabolica personalizzata.
                </p>
              </div>
            </div>

            {/* Simulatore 4: Ingegneria Molecolare mAb */}
            <div className="p-5 rounded-2xl border border-purple-300 dark:border-purple-800/80 bg-gradient-to-br from-purple-500/5 via-rose-500/5 to-slate-100/50 dark:from-purple-950/20 dark:to-slate-900/50 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-purple-200 dark:border-purple-800/60 pb-3">
                <div className="flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Simulatore di Ingegneria Farmacocinetica e Formato Anticorpale
                  </h3>
                </div>
                <span className="text-xs font-mono text-purple-700 dark:text-purple-400 font-bold">
                  Configuratore di Biotecnologie
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Formato / Piattaforma:</label>
                  <select
                    value={sim4Format}
                    onChange={(e) => setSim4Format(e.target.value as FormatType)}
                    className="w-full mt-1 p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium"
                  >
                    <option value="humanized">Umanizzato (-zumab, CDR grafting)</option>
                    <option value="human">Completamente Umano (-umab, Phage/Transgenico)</option>
                    <option value="chimeric">Chimerico (-ximab, 65% umano)</option>
                    <option value="murine">Murino (-omab, 0% umano, storico)</option>
                    <option value="bite">Costrutto Bispecifico BiTE (Dual-scFv)</option>
                    <option value="adc">Coniugato ADC (Anticorpo + Linker + Payload)</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Ingegneria della Porzione Fc:</label>
                  <select
                    value={sim4FcMod}
                    onChange={(e) => setSim4FcMod(e.target.value as FcModType)}
                    disabled={sim4Format === 'bite'}
                    className="w-full mt-1 p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium disabled:opacity-40"
                  >
                    <option value="wt">Fc Wild-Type (Emivita 21 giorni standard)</option>
                    <option value="yte_extension">Mutazione YTE / LS (Estensione emivita a 120-150 giorni)</option>
                    <option value="afucosylated">Afucosilato Asn297 (Potenziamento ADCC 50x)</option>
                    <option value="lala_silenced">Silenziato LALA / IgG4 (Blocco totale ADCC e CDC)</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Payload / Coniugazione Terapeutica:</label>
                  <select
                    value={sim4Payload}
                    onChange={(e) => setSim4Payload(e.target.value as any)}
                    className="w-full mt-1 p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium"
                  >
                    <option value="none">Nessun Payload (Anticorpo Nudo Bloccante)</option>
                    <option value="dxd_topoisomerase">Deruxtecan DXd (Linker clivabile, Bystander attivo)</option>
                    <option value="dm1_microtubule">Emtansina DM1 (Linker non clivabile, idrofilo)</option>
                    <option value="lutetium177">Lutezio-177 (Radionuclide β-emittente / Crossfire)</option>
                  </select>
                </div>
              </div>

              {/* Specifiche Calcolate */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 text-xs">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-500 block">Suffisso Nomenclatura:</span>
                    <strong className="text-slate-900 dark:text-white font-mono">{mabSpecs.suffix}</strong>
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-500 block">Percentuale Umana:</span>
                    <strong className="text-emerald-600 font-mono font-bold">{mabSpecs.humanPct}%</strong>
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-500 block">Rischio Immunogenicità (HAMA):</span>
                    <strong className="text-rose-600 font-mono">{mabSpecs.hamaRisk}</strong>
                  </div>
                  <div className="p-2 rounded bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-500 block">Emivita Plasmatica Stimata:</span>
                    <strong className="text-blue-600 font-mono font-bold">{mabSpecs.halfLifeDays} giorni</strong>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Meccanismo Funzionale:</span>
                  <span className="text-slate-600 dark:text-slate-300">{mabSpecs.mainMechanism}</span>
                </div>
              </div>
            </div>

            {/* Ponte Fisiologico 4.4 -> 4.5 */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 via-amber-500/5 to-transparent border-l-4 border-purple-500 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <span className="font-bold text-purple-800 dark:text-purple-300 uppercase tracking-wider text-[11px] block">
                Ponte Fisiologico di Transizione: Verso la Sintesi Sinottica e la Verifica Cumulativa
              </span>
              <p>
                Abbiamo percorso l'intera parabola delle armi effettrici umorali: dalla biochimica delle 35 proteine del complemento 
                e della loro lisi litica cellulare, ai recettori fagocitari CR1–4 e all'infiammazione delle anafilotossine, 
                fino alla complessità dei recettori Fc cellulari e all'apice dell'ingegneria anticorpale oncologica. 
                Nella sezione conclusiva 4.5 integriamo tutti i concetti in una <strong>Tavola Sinottica Comparativa Master</strong>, 
                accompagnata dalla <strong>Batteria Completa di Domande d'Esame</strong> e dal <strong>Deck Ufficiale di Flashcards</strong> per il consolidamento mnemonico attivo.
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- */}
        {/* SEZIONE 4.5: VERIFICA FINALE CUMULATIVA (QUIZ & FLASHCARDS) */}
        {/* --------------------------------------------------------- */}
        <section id="sec-4-verifica" className="scroll-mt-16 space-y-8">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Sezione 4.5 • Verifica Finale Cumulativa</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Tavola Sinottica Master di Capitolo IV, Batteria di Quiz d'Esame e Flashcard di Ripasso Attivo
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Sintesi comparativa integrata dei meccanismi effettori umorali e biotecnologie con verifica delle conoscenze orali su Lezioni 15, 16, 17 e 18.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* TAVOLA COMPARATIVA MASTER INTEGRATA */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <BookmarkCheck className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span>Tavola Sinottica Master: Integrazione dei Meccanismi Effettori del Capitolo IV</span>
              </h3>
              
              <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 font-mono border-b border-slate-200 dark:border-slate-800">
                      <th className="p-2.5">Asse Funzionale</th>
                      <th className="p-2.5">Innesco / Ligando Primario</th>
                      <th className="p-2.5">Complessi Enzimatici Chiave</th>
                      <th className="p-2.5">Proteine Regolatrici & Sicurezza</th>
                      <th className="p-2.5">Rilevanza Clinica & Farmacologica</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-blue-700 dark:text-blue-400 bg-blue-50/20">Via Classica Complemento</td>
                      <td className="p-2.5">Immunocomplessi IgM (fiocco) o IgG1/3 multivalenti leganti C1q</td>
                      <td className="p-2.5 font-mono">C1r₂s₂ → C4b2b (C3 conv) → C4b2b3b (C5 conv)</td>
                      <td className="p-2.5">C1-INH (dissocia C1r₂s₂), DAF (CD55), Fattore I + C4BP</td>
                      <td className="p-2.5">Deficit di C1q porta a LES per mancata clearance apoptotica. Deficit C1-INH causa HAE.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50/20">Via Lectinica Complemento</td>
                      <td className="p-2.5">MBL e Ficoline leganti D-mannosio, GlcNAc su batteri e funghi</td>
                      <td className="p-2.5 font-mono">MASP-1, MASP-2 → C4b2b (C3 conv)</td>
                      <td className="p-2.5">C1-INH, DAF, MCP (CD46), Fattore I</td>
                      <td className="p-2.5">Immunità innata neonatale contro miceti e batteri prima della sintesi anticorpale.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-orange-700 dark:text-orange-400 bg-orange-50/20">Via Alternativa & Loop</td>
                      <td className="p-2.5">Tick-over spontaneo di C3, pareti microbiche prive di acido sialico</td>
                      <td className="p-2.5 font-mono">C3(H₂O)Bb → C3bBb (stabilizzata da Properdina P)</td>
                      <td className="p-2.5">Fattore H (lega ac. sialico), Fattore I, DAF, MCP</td>
                      <td className="p-2.5">Responsabile dell'80% del C3b depositato. Mutazioni del Fattore H causano aHUS e C3G.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-red-700 dark:text-red-400 bg-red-50/20">Fase Terminale Litica (MAC)</td>
                      <td className="p-2.5">Clivaggio di C5 da parte delle C5 convertasi; assemblaggio C5b-9</td>
                      <td className="p-2.5 font-mono">C5b + C6 + C7 + C8 + (12-18 monomeri C9)</td>
                      <td className="p-2.5">CD59 (Protectina, ancora GPI), Proteina S / Vitronectina</td>
                      <td className="p-2.5">Assenza di CD59 causa EPN (emolisi MAC). Deficit C5-9 provoca infezioni fulminanti da Neisseria. Target di Eculizumab.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-indigo-700 dark:text-indigo-400 bg-indigo-50/20">Recettori Cellulari FcγR</td>
                      <td className="p-2.5">Porzione Fc delle IgG (IgG1, IgG3 ad alta efficacia; IgG4 bloccante)</td>
                      <td className="p-2.5 font-mono">ITAM (CD64, CD32A, CD16a) vs ITIM (CD32B)</td>
                      <td className="p-2.5">SHIP-1 (downstream di CD32B); afucosilazione Asn297</td>
                      <td className="p-2.5">ADCC mediata da NK via CD16a; opsonofagocitosi. IVIG inducono tolleranza saturando CD32B e FcRn.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                      <td className="p-2.5 font-bold text-purple-700 dark:text-purple-400 bg-purple-50/20">Biotecnologie Anticorpali</td>
                      <td className="p-2.5">Anticorpi Umanizzati, Umani, BiTE bispecifici e coniugati ADC</td>
                      <td className="p-2.5 font-mono">scFv-linker (BiTE), Linker clivabile + payload (ADC)</td>
                      <td className="p-2.5">Mutazione Fc-YTE per emivita a 150 giorni; DAR ratio</td>
                      <td className="p-2.5">Blinatumomab (anti-CD19xCD3 nella LLA); T-DXd ed effetto Bystander nei tumori; Nirsevimab anti-RSV.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* SEZIONE QUIZ D'ESAME INTEGRATA */}
            <div className="pt-4">
              <QuizSection 
                customQuestions={chapter4Questions} 
                lessonNumber={15}
                title="Batteria Ufficiale di Quiz d'Esame · Capitolo IV (Lezioni 15–18)" 
              />
            </div>

            {/* SEZIONE FLASHCARD DECK INTEGRATA */}
            <div className="pt-4">
              <FlashcardDeck 
                cards={chapter4Flashcards} 
                lessonNumber={15}
                title="Deck di Flashcard Ufficiali · Capitolo IV (Memoria Attiva)" 
              />
            </div>

          </div>
        </section>

      </main>
    </div>
  );
};
