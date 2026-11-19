import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import { ConceptMapFlow } from './ConceptMapFlow';
import { MAP_LEZIONE_16_RECEPTORS_NETWORK, MAP_LEZIONE_16_MICROBIAL_EVASION } from '../data/conceptMapsData';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Activity,
  Layers,
  Microscope,
  Dna,
  RotateCcw,
  Sparkles,
  Zap,
  Bookmark,
  Target,
  GitBranch,
  Flame,
  Droplets,
  AlertTriangle,
  FileText,
  Check,
  CheckCircle
} from 'lucide-react';

interface Lezione16ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione16View: React.FC<Lezione16ViewProps> = ({ isSerif, fontSize }) => {
  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // ==========================================
  // STATO SIMULATORE 1: CO-RECETTORE B (CR2/CD21-CD19-CD81)
  // ==========================================
  const [hasC3dOpsonization, setHasC3dOpsonization] = useState<boolean>(true);
  const [antigenDose, setAntigenDose] = useState<'low' | 'medium' | 'high'>('low');
  const [isCD19Functional, setIsCD19Functional] = useState<boolean>(true);
  const [areSrcKinasesActive, setAreSrcKinasesActive] = useState<boolean>(true);

  // Calcolo dinamico dell'amplificazione e attivazione B-cell
  let multiplier = 1;
  let signalStrength = 0; // 0-100%
  let lynFynStatus = 'Inattive / Basali';
  let sykStatus = 'Inattiva';
  let pi3kStatus = 'Non reclutata';
  let activationOutcome = 'Attivazione fallita (sottosoglia)';
  let outcomeColor = 'text-rose-600 bg-rose-50 border-rose-200';

  // Contributo della dose antigenica di base per il BCR da solo
  const baseBcrSignal = antigenDose === 'low' ? 10 : antigenDose === 'medium' ? 45 : 85;

  if (hasC3dOpsonization && isCD19Functional && areSrcKinasesActive) {
    multiplier = 500; // abbattimento soglia fino a 1000x
    lynFynStatus = 'Fosforilazione rapida ITAM CD79a/b e coda citoplasmatica CD19';
    sykStatus = 'Attivazione massiva su doppi domini SH2';
    pi3kStatus = 'Docking prolungato su Tyr fosforilata di CD19 &rarr; sintesi PIP3';
    signalStrength = Math.min(100, baseBcrSignal * 5);
  } else if (!areSrcKinasesActive) {
    multiplier = 1;
    lynFynStatus = 'Bloccate farmacologicamente (nessuna fosforilazione iniziale)';
    sykStatus = 'Inattiva (mancato docking SH2)';
    pi3kStatus = 'Inattiva';
    signalStrength = 0;
  } else if (!isCD19Functional) {
    multiplier = 1;
    lynFynStatus = 'Attivata solo localmente su CD79a/b';
    sykStatus = antigenDose === 'high' ? 'Attivazione parziale BCR-dipendente' : 'Debole / Insufficiente';
    pi3kStatus = 'Assente (manca la piattaforma proteica CD19)';
    signalStrength = baseBcrSignal;
  } else {
    // Solo BCR, senza C3d
    multiplier = 1;
    lynFynStatus = 'Attivata unicamente su CD79a/b da crosslinking BCR';
    sykStatus = antigenDose === 'high' ? 'Attiva' : 'Debole / Transitoria';
    pi3kStatus = 'Basale';
    signalStrength = baseBcrSignal;
  }

  const isActivated = signalStrength >= 50;
  if (isActivated) {
    activationOutcome = 'Soglia superata: Linfocita B attivato, blastogenesi e migrazione verso il Follicolo/Centro Germinativo';
    outcomeColor = 'text-emerald-700 bg-emerald-50 border-emerald-300';
  } else {
    activationOutcome = 'Sottosoglia: Mancata attivazione del Linfocita B (necessaria cooperazione o dose antigenica 1000x superiore)';
    outcomeColor = 'text-amber-700 bg-amber-50 border-amber-300';
  }

  // ==========================================
  // STATO SIMULATORE 2: LABORATORIO CLINICO DELLE PATOLOGIE DEL COMPLEMENTO
  // ==========================================
  type PathologyId = 'hae' | 'epn' | 'ahus' | 'c3nef' | 'lad1' | 'neisseria';
  const [selectedPathology, setSelectedPathology] = useState<PathologyId>('hae');
  const [appliedTreatment, setAppliedTreatment] = useState<string>('none');

  // Reset del trattamento al cambio di patologia
  useEffect(() => {
    setAppliedTreatment('none');
  }, [selectedPathology]);

  // Informazioni dettagliate per ciascuna patologia
  const pathologyData: Record<PathologyId, {
    title: string;
    geneDefect: string;
    pathwayAffected: string;
    clinicalTriad: string;
    labFindings: string;
    treatments: { id: string; label: string; effect: string; success: boolean }[];
    clinicalRationale: string;
  }> = {
    hae: {
      title: 'Angioedema Ereditario (HAE Tipo I & II)',
      geneDefect: 'Mutazione eterozigote gene SERPING1 (deficit quantitativo Tipo I 85%, funzionale Tipo II 15% di C1-INH)',
      pathwayAffected: 'Mancata inibizione di C1r/C1s, MASP-1/2, Callicreina e Fattore XIIa &rarr; cascata del contatto sregolata',
      clinicalTriad: 'Edemi sottocutanei e sottomucosi ricorrenti non pruriginosi, coliche addominali violente da edema della parete intestinale, edema laringeo asfittico letale',
      labFindings: 'C4 sierico costantemente ridotto (<5-10 mg/dL), C1q normale (Tipo I/II ereditario, diminuito nelle forme acquisite), C3 normale, attività C1-INH <30-50%',
      treatments: [
        {
          id: 'antihistamine_cortisone',
          label: 'Antistaminici + Corticosteroidi + Adrenalina',
          effect: 'INEFFICACE: L\'angioedema non è mediato da istamina mastocitaria ma da bradichinina! Rischio mortale di ritardo terapeutico.',
          success: false
        },
        {
          id: 'c1inh_concentrate',
          label: 'Concentrato di C1-INH plasmatico o ricombinante (Berinert/Cinryze)',
          effect: 'SUCCESSO ELEVATO: Ripristina l\'inibizione immediata di callicreina e C1, bloccando la genesi di bradichinina in 30-60 min.',
          success: true
        },
        {
          id: 'icatibant',
          label: 'Icatibant (Firazyr - Antagonista selettivo recettore B2 bradichinina)',
          effect: 'SUCCESSO ECCELLENTE: Blocco competitivo istantaneo del recettore B2 endoteliale, risolve l\'edema laringeo e addominale.',
          success: true
        }
      ],
      clinicalRationale: 'L\'HAE è una patologia bradichinina-mediata. C1-INH è una serpina chiave che frena la callicreina: in sua assenza, il chininogeno ad alto peso molecolare (HMWK) viene scisso massivamente liberando bradichinina, con potente vasodilatazione e iperpermeabilità vascolare post-capillare priva di orticaria o prurito.'
    },
    epn: {
      title: 'Emoglobinuria Parossistica Notturna (EPN / PNH)',
      geneDefect: 'Mutazione somatica acquisita nel gene PIG-A su cellule staminali ematopoietiche (HSC)',
      pathwayAffected: 'Mancata sintesi delle ancore di glicosilfosfatidilinositolo (GPI) &rarr; perdita di CD55 (DAF) e CD59 (Protectina) sui globuli rossi clonali',
      clinicalTriad: 'Emolisi intravascolare notturna con urine color coca-cola al risveglio, trombosi venose atipiche (sindrome di Budd-Chiari, seni cerebrali), spasmi muscolari lisci da deplezione di NO',
      labFindings: 'Anemia emolitica Coombs-negativa, LDH elevatissima (>1000 U/L), aptoglobina azzerata, emosiderinuria, citometria a flusso (FLAER) dimostra assenza di CD59/CD55 su granulociti ed eritrociti',
      treatments: [
        {
          id: 'prednisone',
          label: 'Corticosteroidi orali ad alte dosi',
          effect: 'INEFFICACE nel bloccare la lisi da MAC: Riduce solo marginalmente la componente infiammatoria non specifica, senza ripristinare le ancore GPI.',
          success: false
        },
        {
          id: 'eculizumab',
          label: 'Eculizumab / Ravulizumab (Anticorpo monoclonale umanizzato anti-C5)',
          effect: 'SUCCESSO RIVOLUZIONARIO: Blocca il clivaggio di C5 impedendo la formazione di C5b e l\'assemblaggio del complesso MAC (C5b-9). Arresto immediato dell\'emolisi intravascolare.',
          success: true
        },
        {
          id: 'bone_marrow_transplant',
          label: 'Trapianto allogenico di cellule staminali ematopoietiche (HSCT)',
          effect: 'CURATIVO DEFINITIVO: Eradica il clone midollare mutato PIG-A, riservato a casi con insufficienza midollare severa associata o trombosi refrattarie.',
          success: true
        }
      ],
      clinicalRationale: 'Durante il sonno, una lieve acidosi respiratoria fisiologica attiva la via alternativa del complemento. Gli eritrociti sani sono protetti da CD59 (che impedisce la polimerizzazione di C9) e da CD55 (che accelera il decadimento della convertasi). I cloni EPN privi di GPI subiscono lisi colloido-osmotica massiva. L\'emoglobina libera sequestra avidamente NO, inducendo vasocostrizione, disfagia, ipertensione polmonare e pro-trombosi.'
    },
    ahus: {
      title: 'Sindrome Uremica Emolitica Atipica (aHUS)',
      geneDefect: 'Mutazioni loss-of-function nei geni CFH (Fattore H 30-40%), CFI (Fattore I), MCP (CD46), o autoanticorpi neutralizzanti anti-Fattore H',
      pathwayAffected: 'Incontrollata attivazione della via alternativa sulle superfici endoteliali microvascolari fenestrate renali',
      clinicalTriad: 'Microangiopatia trombotica (MAT), insufficienza renale acuta oligurica, trombocitopenia da consumo ed emolisi microangiopatica con schistociti',
      labFindings: 'Schistociti allo striscio periferico (>2%), piastrine <50.000/µL, creatinina elevata, C3 ridotto con C4 normale, test tossina Shiga (STEC) NEGATIVO',
      treatments: [
        {
          id: 'antibiotics',
          label: 'Antibioticoterapia empirica ad ampio spettro',
          effect: 'INEFFICACE ed eventualmente DANNOSA: La sindrome non è sostenuta da infezione batterica infettiva attiva né da ceppi STEC produttori di tossina Shiga.',
          success: false
        },
        {
          id: 'plasma_exchange',
          label: 'Plasmaferesi / Infusione di plasma fresco congelato',
          effect: 'PARZIALE / TEMPORANEO: Fornisce transitoriamente Fattore H/I sano o rimuove autoanticorpi, ma inadeguata a proteggere a lungo termine l\'endotelio renale.',
          success: false
        },
        {
          id: 'eculizumab_ahus',
          label: 'Eculizumab (Anti-C5) terapia mirata tempestiva',
          effect: 'SUCCESSO SALVAVITA: Blocca l\'attivazione terminale del complemento sull\'endotelio glomerulare, normalizza le piastrine e recupera la funzione renale nel >80% dei casi.',
          success: true
        }
      ],
      clinicalRationale: 'A differenza della SEU tipica (STEC-HUS post-dissenterica da E. coli O157:H7), l\'aHUS è una patologia puramente immunologica da fallimento dei meccanismi di protezione endoteliale del self. Il Fattore H solubile normalmente si ancora all\'eparan solfato e agli acidi sialici delle cellule endoteliali fenestrate glomerulari. Se mutato, la C3 convertasi alternativa distrugge la parete vascolare inducendo aggregazione piastrinica microtrombotica.'
    },
    c3nef: {
      title: 'Fattore Nefritogeno di C3 (C3NeF) & MPGN II',
      geneDefect: 'Autoanticorpo IgG policlonale diretto contro la C3-convertasi della via alternativa (C3bBb)',
      pathwayAffected: 'Stabilizzazione sterica della convertasi C3bBb con incremento dell\'emivita da 90 secondi a oltre 15-30 minuti',
      clinicalTriad: 'Glomerulonefrite membranoproliferativa di tipo II (Malattia a depositi densi intramembranosi), sindrome nefrosica/nefritica cronica, lipodistrofia parziale acquisita (sindrome di Barraquer-Simons)',
      labFindings: 'Consumo continuo e persistente di C3 (valori sierici indosabili o marcatamente depressi <10 mg/dL), livelli di C4 normali, biopsia renale con nastro continuo osmofilo denso lungo la lamina basale',
      treatments: [
        {
          id: 'c1inh_attempt',
          label: 'Somministrazione di inibitore C1-INH',
          effect: 'INEFFICACE: C1-INH agisce solo sulle vie classica e lectinica, lasciando inalterata la via alternativa stabilizzata da C3NeF.',
          success: false
        },
        {
          id: 'immunosuppression_c3',
          label: 'Immunosoppressione mirata (Micofenolato / Rituximab) + Inibitori prossimali del complemento (Anti-Fattore B / Anti-C3 Pegcetacoplan)',
          effect: 'SUCCESSO PROMETTENTE: Deplezione del clone autoanticorpale produttore di IgG anti-C3bBb e blocco a monte del clivaggio di C3.',
          success: true
        }
      ],
      clinicalRationale: 'C3NeF è un autoanticorpo funzionale che "congela" l\'enzima convertasi in conformazione attiva, mimando l\'azione protettiva della Properdina ma in modo resistente al Fattore H e al DAF. Ne consegue un consumo sfrenato e continuo di tutto il C3 circolante con deposizione massiva di frammenti degradati e danno alla membrana basale glomerulare.'
    },
    lad1: {
      title: 'Deficit di Adesione Leucocitaria Tipo 1 (LAD-1)',
      geneDefect: 'Mutazione autosomica recessiva nel gene ITGB2 codificante la subunità integrinica β2 comune (CD18)',
      pathwayAffected: 'Assenza di espressione di CR3 (CD11b/CD18, Mac-1), CR4 (CD11c/CD18, p150,95) e LFA-1 (CD11a/CD18)',
      clinicalTriad: 'Ritardo severo nella caduta del cordone ombelicale con onfalite, infezioni necrotizzanti batteriche/fungine cutanee e mucose prive di pus (ascessi freddi), parodontiti gravissime destruenti',
      labFindings: 'Leucocitosi neutrofila periferica elevatissima paradossa (>40.000-100.000/µL in corso di infezione), citometria a flusso dimostra assenza completa o severo deficit di CD18 e CD11b sui leucociti',
      treatments: [
        {
          id: 'eculizumab_lad',
          label: 'Eculizumab (Anti-C5)',
          effect: 'INEFFICACE e CONTROINDICATO: Il deficit non risiede nell\'iperattivazione di C5, bensì nell\'incapacità fisica dei neutrofili di aderire e compiere fagocitosi via CR3/CR4.',
          success: false
        },
        {
          id: 'prophylaxis_hsct',
          label: 'Antibioticoprofilassi continua + Trapianto di cellule staminali ematopoietiche (HSCT) o Terapia Genica CD18',
          effect: 'CURATIVO DEFINITIVO: Il trapianto allogenico ricostituisce una linea ematopoietica con normale espressione delle integrine β2, consentendo diapedesi e fagocitosi.',
          success: true
        }
      ],
      clinicalRationale: 'Senza CD18, i recettori CR3 e CR4 non possono formare eterodimeri stabili né esposti in membrana. I neutrofili non riescono ad interagire con ICAM-1 endoteliale per lo stravaso, rimanendo sequestrati nel sangue (da cui l\'enorme neutrofilia paradossa), né possono legare iC3b sulla capsula batterica per inglobare il patogeno, causando l\'assenza istologica di pus nei tessuti necrotici.'
    },
    neisseria: {
      title: 'Deficit Ereditario della Via Terminale (C5, C6, C7, C8, C9)',
      geneDefect: 'Mutazioni autosomiche recessive nei geni codificanti le subunità del Membrane Attack Complex (MAC)',
      pathwayAffected: 'Incapacità assoluta di assemblare il poro litico C5b-9 sulle membrane microbiche',
      clinicalTriad: 'Infezioni invasive batteriche disseminate ricorrenti da batteri Gram-negativi provvisti di parete sottile, specificamente Neisseria meningitidis (meningite cerebrospinale) e Neisseria gonorrhoeae (artrite gonococcica)',
      labFindings: 'Attività emolitica totale del complemento CH50 pari a ZERO, mentre i livelli e le funzioni di opsonizzazione (C3b/CR1) e chemiotassi (C3a) rimangono intatti',
      treatments: [
        {
          id: 'vaccines_meningo',
          label: 'Vaccinazione polivalente antimeningococcica (ACWY + MenB) + Chemioprofilassi mirata',
          effect: 'SUCCESSO PREVENTIVO SALVAVITA: Stimola alti titoli di anticorpi opsonizzanti che consentono l\'eliminazione batterica tramite opsonofagocitosi mediata da neutrofili (via FcγR e CR1/CR3), bypassando la necessità del MAC litico.',
          success: true
        }
      ],
      clinicalRationale: 'Mentre per la maggioranza dei batteri Gram-positivi e capsulati l\'opsonizzazione e fagocitosi via C3b/iC3b è il meccanismo di clearance principale, Neisseria meningitidis è l\'unico organismo strettamente dipendente dalla lisi osmotica diretta del MAC. I soggetti con deficit di C5-C9 hanno un rischio relativo di meningite meningococcica aumentato di oltre 10.000 volte rispetto alla popolazione generale.'
    }
  };

  const currentPathData = pathologyData[selectedPathology];

  // ==========================================
  // STATO FLASHCARDS ATTIVE
  // ==========================================
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const toggleCard = (index: number) => {
    setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const flashcards = [
    {
      question: 'Qual è il ligando primario di CR1 (CD35) e quale ruolo "navetta" svolge sugli eritrociti?',
      answer: 'CR1 lega con alta affinità C4b e C3b (e iC3b). Sugli eritrociti (che ne esprimono circa 500-1000 molecole per cellula), funge da navetta per la clearance degli immunocomplessi solubili circolanti, trasportandoli verso milza e fegato dove i macrofagi residenti (Kupffer) li "spogliano" tramite CR1/CR3 e FcγR senza distruggere il globulo rosso.'
    },
    {
      question: 'Come coopera il recettore CR2 (CD21) con il BCR per abbattere la soglia di attivazione del Linfocita B?',
      answer: 'CR2 forma il complesso corecettoriale con CD19 e CD81 (TAPA-1). Lega il frammento C3d legato covalentemente all\'antigene mentre il BCR lega l\'epitopo proteico. Il crosslinking recluta le chinasi Src (Lyn, Fyn, Blk) che fosforilano le tirosine di CD19, creando siti di docking per PI3K. Questo amplifica il segnale intracellulare abbattendo la soglia minima di antigene richiesta di 100-1000 volte.'
    },
    {
      question: 'Qual è la causa genetica e fisiopatologica dell\'Angioedema Ereditario (HAE)?',
      answer: 'Mutazione eterozigote di SERPING1 con deficit di C1-INH. C1-INH frena fisiologicamente la callicreina, il fattore XIIa e C1r/C1s. In sua assenza, la callicreina cliva senza controllo il chininogeno HMWK liberando bradichinina (non istamina!). La bradichinina induce massiva vasodilatazione ed edema laringeo asfittico, non responsivo ad antistaminici o cortisonici, ma trattabile con C1-INH concentrato o Icatibant (anti-B2).'
    },
    {
      question: 'Perché la lisi degli eritrociti nell\'EPN (Emoglobinuria Parossistica Notturna) avviene prevalentemente di notte?',
      answer: 'I cloni eritroidi EPN mancano delle ancore GPI (mutazione somatica di PIG-A) e quindi non esprimono CD55 (DAF) e CD59 (Protectina). Durante il sonno, la relativa ipoventilazione fisiologica induce una lieve acidosi respiratoria (abbassamento del pH ematico) che stimola spontaneamente il tick-over e la C3-convertasi della via alternativa. Privi di CD59, gli eritrociti subiscono la polimerizzazione incontrollata di C9 e lisi colloido-osmotica da MAC.'
    },
    {
      question: 'Qual è il paradosso clinico e di laboratorio del Deficit di Adesione Leucocitaria Tipo 1 (LAD-1)?',
      answer: 'Mutazione di CD18 (catena β2 delle integrine) impedisce la formazione di CR3, CR4 e LFA-1. Paradosso: neutrofilia periferica mostruosa (>50.000-100.000/µL) a fronte di totale assenza di neutrofili nei focolai tissutali d\'infezione, con ferite necrotizzanti prive di pus (ascessi freddi) e mancata caduta del cordone ombelicale, poiché i leucociti non possono aderire a ICAM-1 endoteliale né compiere diapedesi.'
    },
    {
      question: 'In che modo l\'allele HLA-B57 conferisce resistenza all\'HIV rispetto all\'allele HLA-B35?',
      answer: 'HLA-B57 presenta epitopi conservati e strutturalmente vitali della proteina Gag (es. TW10) ai linfociti CD8+ citotossici. Per sfuggire alla risposta CD8+, il virus è costretto a mutazioni che compromettono gravemente il suo assemblaggio capside/core ("fitness cost virale"), rallentando la progressione e rendendo i pazienti "elite controllers". HLA-B35 invece presenta epitopi variabili e debolmente protettivi, favorendo rapida progressione verso l\'AIDS.'
    }
  ];

  // ==========================================
  // STATO QUIZ ACCADEMICO (10 QUESITI)
  // ==========================================
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showQuizResults, setShowQuizResults] = useState<boolean>(false);

  const quizQuestions = [
    {
      id: 1,
      question: 'Un paziente di 24 anni giunge in Pronto Soccorso per edema acuto non pruriginoso della lingua, del volto e disfonia progressiva senza orticaria né broncospasmo. Riferisce episodi ricorrenti di dolori addominali parossistici dall\'adolescenza. L\'iniezione di adrenalina ed antistaminico non induce alcun miglioramento. Quale dei seguenti reperti di laboratorio è atteso?',
      options: [
        'A) IgE totali marcatamente elevate (>2000 kU/L)',
        'B) Livelli sierici di C4 marcatamente ridotti con C1q normale',
        'C) Schistociti allo striscio periferico superiori al 5%',
        'D) Assenza di proteina CD59 sui granulociti alla citometria a flusso',
        'E) Neutrofilia periferica estrema superiore a 80.000/µL'
      ],
      correctAnswer: 1,
      explanation: 'Il quadro descrive un attacco acuto di Angioedema Ereditario (HAE) tipo I o II, causato da deficit di C1-INH con iperproduzione di bradichinina. Negli attacchi di HAE il dosaggio del C4 sierico è quasi costantemente diminuito per mancata inibizione della fase precoce, mentre C1q è normale (nelle forme acquisite è invece ridotto anche C1q).'
    },
    {
      id: 2,
      question: 'Il complesso co-recettoriale del Linfocita B (CR2/CD21 - CD19 - CD81) riduce la concentrazione di antigene richiesta per l\'attivazione cellulare di 100-1000 volte. Quale frammento del complemento funge da ponte di legame per CR2 e quale chinasi citoplasmatica viene reclutata?',
      options: [
        'A) Frammento C3a solubile; reclutamento della chinasi PKA',
        'B) Frammento C4a legato al BCR; reclutamento di ZAP-70',
        'C) Frammento C3d (o C3dg) legato covalentemente all\'antigene; reclutamento di PI3K tramite fosforilazione di CD19',
        'D) Frammento C5b solubile; reclutamento di MEK/ERK',
        'E) Inibitore Fattore H; reclutamento di PTEN'
      ],
      correctAnswer: 2,
      explanation: 'Il frammento C3d (derivato dalla degradazione sequenziale di C3b da parte del Fattore I e cofattori) rimane legato covalentemente all\'antigene. Quando il BCR riconosce l\'epitopo e il CR2 lega C3d, Lyn fosforila i residui tirosinici della coda di CD19, reclutando PI3K e amplificando il segnale.'
    },
    {
      id: 3,
      question: 'Qual è il meccanismo patogenetico cardine dell\'Emoglobinuria Parossistica Notturna (EPN)?',
      options: [
        'A) Mutazione germinale del gene codificante C3 con eccesso di lisi',
        'B) Mutazione somatica clonale del gene PIG-A che impedisce la sintesi dell\'ancora GPI per CD55 e CD59',
        'C) Autoanticorpo anti-eritrocitario freddo di classe IgM diretto contro l\'antigene I',
        'D) Deficit congenito di C1-esterasi inibitore con accumulo di C5a',
        'E) Iperproduzione di Properdina da parte dei linfociti midollari'
      ],
      correctAnswer: 1,
      explanation: 'L\'EPN è dovuta a mutazione somatica del gene PIG-A nelle HSC. Senza ancora GPI, proteine di superficie protettive come CD55 (DAF) e CD59 (Protectina) non possono essere ancorate, esponendo i globuli rossi alla lisi spontanea mediata dal MAC.'
    },
    {
      id: 4,
      question: 'In che modo le cellule apoptotiche evitano di innescare una risposta infiammatoria lesiva pur attivando il complemento in modalità attenuata ("mild activation")?',
      options: [
        'A) Esprimono livelli 10 volte superiori di DAF e CD59 sulla membrana frammentata',
        'B) Secernono lisozima che demolisce C3 e C5',
        'C) Reclutano i regolatori solubili Fattore H e C4BP, favorendo la conversione rapida di C3b in iC3b ed impedendo l\'assemblaggio del MAC',
        'D) Rilasciano massivamente istamina che inibisce la cascata classica',
        'E) Svolgono endocitosi immediata di tutti i componenti C1-C9'
      ],
      correctAnswer: 2,
      explanation: 'Durante l\'apoptosi i regolatori di membrana declinano, ma la cellula morente recluta regolatori solubili plasmatici (Fattore H e C4BP). Questo promuove il deposito limitato di C3b e la sua immediata scissione a iC3b da parte del Fattore I, che stimola la fagocitosi "silente" (efferocitosi) via CR3/CR4 senza assemblare il MAC né provocare lisi infiammatoria.'
    },
    {
      id: 5,
      question: 'Il gene CCR5 presenta una variante con delezione di 32 coppie di basi (CCR5-Δ32). Qual è la conseguenza immunologica di questo allele in omozigosi?',
      options: [
        'A) Suscettibilità aumentata ad infezioni letali da Herpesvirus',
        'B) Resistenza quasi assoluta all\'infezione da ceppi R5 (macrofagotropi) di HIV-1',
        'C) Sviluppo spontaneo di vasculite da immunocomplessi',
        'D) Incapacità di produrre anticorpi neutralizzanti di classe IgA',
        'E) Blocco dello stravaso diapedetico dei neutrofili'
      ],
      correctAnswer: 1,
      explanation: 'La delezione CCR5-Δ32 codifica una proteina tronca non esposta sulla membrana. Poiché i ceppi primari R5 di HIV-1 richiedono CCR5 come co-recettore di ingresso assieme al CD4, gli omozigoti Δ32/Δ32 sono altamente resistenti all\'infezione da HIV-1.'
    },
    {
      id: 6,
      question: 'In una biopsia linfonodale, quale tipo cellulare specializzato trattiene complessi immuni opsonizzati da C3d e li espone in forma non processata per mesi ai linfociti B?',
      options: [
        'A) Macrofagi della zona midollare',
        'B) Linfociti T regolatori FoxP3+',
        'C) Cellule Dendritiche Follicolari (FDC)',
        'D) Cellule endoteliali delle venule ad endotelio alto (HEV)',
        'E) Centrociti della zona scura'
      ],
      correctAnswer: 2,
      explanation: 'Le Follicular Dendritic Cells (FDC) non sono di derivazione ematopoietica ma stromale, ed esprimono densità altissime di CR1, CR2 e recettori Fc. Trattengono gli antigeni opsonizzati sulla loro arborizzazione per tempi prolungati senza degradarli, presentandoli intatti ai linfociti B per la selezione positiva nel centro germinativo.'
    },
    {
      id: 7,
      question: 'Quale delle seguenti coppie di integrine leucocitarie condivide la subunità β2 (CD18) e funge da recettore per il frammento opsonizzante iC3b?',
      options: [
        'A) VLA-4 (α4β1) e VLA-5 (α5β1)',
        'B) CR3 (CD11b/CD18) e CR4 (CD11c/CD18)',
        'C) LFA-2 (CD2) e LFA-3 (CD58)',
        'D) α4β7 e αEβ7',
        'E) Mac-2 (Galectina-3) e Siglec-1'
      ],
      correctAnswer: 1,
      explanation: 'CR3 (CD11b/CD18, Mac-1) e CR4 (CD11c/CD18, p150,95) sono integrine eterodimeriche appartenenti alla famiglia β2. Entrambe legano il frammento inattivato ma opsonizzante iC3b sulle superfici microbiche, innescando fagocitosi nei macrofagi e neutrofili.'
    },
    {
      id: 8,
      question: 'Per quale motivo Staphylococcus aureus esprime la proteina SCIN e la proteina CHIPS?',
      options: [
        'A) Per degradare le catene pesanti delle IgE',
        'B) SCIN inibisce le C3-convertasi batteriche e umane, mentre CHIPS blocca selettivamente i recettori C5aR e FPR1 dei neutrofili inibendo la chemiotassi',
        'C) Per attivare la via classica del complemento a scopo nutritivo',
        'D) Per chelare il ferro plasmatico e produrre acido folico',
        'E) Per perforare i globuli rossi mimando la subunità C9'
      ],
      correctAnswer: 1,
      explanation: 'S. aureus è maestro nell\'evasione del complemento: SCIN (Staphylococcal Complement Inhibitor) blocca le C3/C5 convertasi impedendo il deposito di C3b, mentre CHIPS (Chemotaxis Inhibitory Protein of Staphylococci) agisce da antagonista su C5aR e FPR1 sui neutrofili, impedendone il reclutamento chemiotattico al sito d\'infezione.'
    },
    {
      id: 9,
      question: 'Qual è il farmaco biologico d\'elezione nella Sindrome Uremica Emolitica Atipica (aHUS) e nell\'EPN, e quale target molecolare colpisce?',
      options: [
        'A) Rituximab, anti-CD20',
        'B) Infliximab, anti-TNF-α',
        'C) Eculizumab, anticorpo monoclonale umanizzato anti-C5 che ne blocca il clivaggio',
        'D) Tocilizumab, anti-IL-6R',
        'E) Anakinra, antagonista ricombinante del recettore IL-1R'
      ],
      correctAnswer: 2,
      explanation: 'Eculizumab (e la sua formulazione a lunga emivita Ravulizumab) si lega ad alta affinità al C5 prevenendone la scissione in C5a e C5b da parte delle C5 convertasi. Ciò blocca la formazione del MAC sia nell\'EPN (impedendo la lisi degli eritrociti privi di CD59) sia nell\'aHUS (arrestando il danno microvascolare renale).'
    },
    {
      id: 10,
      question: 'Nei pazienti affetti da infezione da Herpes Simplex Virus di tipo 1 (HSV-1), in quale distretto anatomico il virus stabilisce una latenza genomica episomiale a lungo termine al riparo dai linfociti T citotossici CD8+?',
      options: [
        'A) Nelle cellule endoteliali dei capillari glomerulari',
        'B) Nei neuroni sensoriali del ganglio trigeminale',
        'C) Nei cheratinociti basali dello strato germinativo dell\'epidermide labiale',
        'D) Nei linfociti B memoria della milza',
        'E) Nelle cellule di Kupffer epatiche'
      ],
      correctAnswer: 1,
      explanation: 'HSV-1 compie migrazione assonale retrograda dai tessuti mucocutanei orofacciali fino ai corpi cellulari dei neuroni sensoriali del ganglio trigeminale. I neuroni esprimono livelli trascurabili di MHC-I per proteggere la rete neurale dalla distruzione immuno-mediata, consentendo al genoma episomiale virale di persistere indefinitamente in forma quiescente (latenza).'
    }
  ];

  const handleSelectAnswer = (qIndex: number, optionIndex: number) => {
    if (showQuizResults) return;
    setQuizAnswers(prev => ({ ...prev, [qIndex]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctAnswer) score++;
    });
    return score;
  };


  return (
    <div className={`space-y-12 ${proseFontClass} text-slate-800`}>
      {/* HEADER DELLA LEZIONE 16 */}
      <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-indigo-800/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full text-xs font-mono font-semibold tracking-wide uppercase">
              Lezione 16 · 05 Novembre 2025
            </span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full text-xs font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" /> Trascrizione Integrale Verificata
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Recettori del Complemento, Immunopatologia, Evasione Microbica & Risposta Integrata alle Infezioni
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-4xl leading-relaxed">
            Dalle funzioni biologiche avanzate del complemento (clearance con eritrociti "navetta", sinergia BCR-CR2 nel centro germinativo e tolleranza su cellule apoptotiche) alla genetica e biochimica delle patologie complementari (HAE, EPN, aHUS, C3NeF, LAD-1) e dell'evasione microbica (latenza erpetica, alleli HLA-B35 vs HLA-B57, resistenza CCR5-Δ32).
          </p>

          <div className="pt-4 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-300">
            <div>
              <span className="text-slate-400 block font-mono text-[10px] uppercase">Docente Ufficiale</span>
              <strong className="text-white text-sm">Prof.ssa Alessandra Soriani</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-mono text-[10px] uppercase">Sbobinatori</span>
              <strong className="text-white text-xs">Annachiara Alise & Alice Aquilino</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-mono text-[10px] uppercase">Revisori Medici</span>
              <strong className="text-white text-xs">Francesco Agate & Giulia Belletti</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-mono text-[10px] uppercase">Target Didattico</span>
              <strong className="text-white text-xs">Immunologia Clinica & Ematologia</strong>
            </div>
          </div>
        </div>
      </section>

      {/* INDICE RAPIDO DEI 10 CAPITOLI */}
      <nav className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-1.5">
            <Bookmark className="w-4 h-4" /> Struttura della Trattazione (10 Sotto-capitoli)
          </span>
          <span className="text-xs text-slate-500 font-sans">Tempo stimato: 35 min</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs">
          <a href="#sec-16-1" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">1</span>
            16.1 Recettori del Complemento (CR1-CR4, C3aR, C5aR GPCR)
          </a>
          <a href="#sec-16-2" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">2</span>
            16.2 Opsonizzazione Batteri Capsulati & Biochimica Fagolisosoma
          </a>
          <a href="#sec-16-3" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">3</span>
            16.3 Clearance Immunocomplessi: Eritrociti "Navetta" & Milza/Fegato
          </a>
          <a href="#sec-16-4" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">4</span>
            16.4 Centro Germinativo: FDC, Co-recettore B (CR2) & PI3K
          </a>
          <a href="#sec-16-5" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">5</span>
            16.5 Dinamica Linfonodale: Trasporto da Macrofagi SCS ai Linfociti B
          </a>
          <a href="#sec-16-6" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">6</span>
            16.6 Attivazione Attenuata sulle Cellule Apoptotiche & Tolleranza
          </a>
          <a href="#sec-16-7" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">7</span>
            16.7 Patologie da Deficit ed Iperattivazione: HAE, EPN, aHUS, LAD-1
          </a>
          <a href="#sec-16-8" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">8</span>
            16.8 Evasione & Hijacking Microbico: Batteri, Virus e SARS-CoV-2
          </a>
          <a href="#sec-16-9" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">9</span>
            16.9 Risposta alle Infezioni: Fitness del Sistema & ViraPAMPs
          </a>
          <a href="#sec-16-10" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">10</span>
            16.10 Tassonomia Effettrice, Evasione & Genetica (HLA-B57, CCR5-Δ32)
          </a>
        </div>
      </nav>

      {/* SOTTO-CAPITOLO 16.1 */}
      <section id="sec-16-1" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            1
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 16.1</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              I Recettori del Complemento (CR1, CR2, CR3, CR4, C3aR, C5aR) & Trasduzione GPCR
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            Il sistema del complemento non esercita le sue funzioni biologiche nel vuoto, ma agisce come una raffinata interfaccia molecolare che comunica costantemente con l'immunità cellulare innata e adattativa. Tale comunicazione è mediata da una famiglia eterogenea di <strong>recettori di membrana</strong>, classificabili in base ai ligandi legati e alle cascate di trasduzione:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50 space-y-2">
              <h4 className="font-bold text-blue-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-700" /> CR1 (CD35) &bull; Il Recettore Polispecifico
              </h4>
              <p className="text-xs text-blue-950 leading-relaxed">
                Costituito da 30 domini ripetuti consenso (SCR/CCP). Lega primariamente <strong>C3b</strong>, <strong>C4b</strong> e con minore affinità <strong>iC3b</strong>. Espresso su eritrociti, macrofagi, neutrofili, eosinofili, linfociti B e cellule dendritiche follicolari (FDC). Possiede attività intrinseca di cofattore per il Fattore I (promuove la scissione di C3b in iC3b) e capacità <em>decay-accelerating</em> dissociando le convertasi.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/50 space-y-2">
              <h4 className="font-bold text-indigo-900 text-sm flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-700" /> CR2 (CD21) &bull; Il Corecettore B e Recettore EBV
              </h4>
              <p className="text-xs text-indigo-950 leading-relaxed">
                Espresso su Linfociti B e FDC. Riconosce i frammenti terminali di degradazione del C3, in particolare <strong>C3d</strong>, <strong>C3dg</strong> e <strong>iC3b</strong>. Si associa stabilmente nella membrana dei linfociti B con le proteine <strong>CD19</strong> e <strong>CD81 (TAPA-1)</strong> formando il complesso co-recettoriale. È sfruttato opportunamente dal virus di Epstein-Barr (EBV) come recettore cellulare primario per l'infezione dei linfociti B.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2">
              <h4 className="font-bold text-emerald-900 text-sm flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-700" /> CR3 (CD11b/CD18) & CR4 (CD11c/CD18) &bull; Integrine β2
              </h4>
              <p className="text-xs text-emerald-950 leading-relaxed">
                Eterodimeri costituiti da una catena α variabile (CD11b per CR3/Mac-1, CD11c per CR4/p150,95) e una catena β2 comune (<strong>CD18</strong>). Espressi su macrofagi, monociti, neutrofili, cellule NK e dendritiche. Legano con elevata specificità l'opsonina <strong>iC3b</strong> e molecole adesive come ICAM-1. Guidano la fagocitosi dipendente dal complemento e lo stravaso diapedetico.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/50 space-y-2">
              <h4 className="font-bold text-rose-900 text-sm flex items-center gap-2">
                <Flame className="w-4 h-4 text-rose-700" /> C3aR & C5aR (CD88) &bull; Recettori GPCR per Anafilotossine
              </h4>
              <p className="text-xs text-rose-950 leading-relaxed">
                Appartengono alla superfamiglia dei recettori a 7 domini transmembrana accoppiati a proteine G eterotrimeriche (Gαi e Gα16). Legano rispettivamente le anafilotossine solubili <strong>C3a</strong> e <strong>C5a</strong> (C5a possiede una potenza infiammatoria 100-1000 volte superiore). Innescano l'attivazione della fosfolipasi C-β (PLC-β), rilascio di Ca²⁺ intracellulare, degranulazione mastocitaria e chemiotassi neutrofila guidata.
              </p>
            </div>
          </div>

          {/* Mappa Concettuale dei Recettori del Complemento */}
          <ConceptMapFlow {...MAP_LEZIONE_16_RECEPTORS_NETWORK} />
        </div>
      </section>

      {/* SOTTO-CAPITOLO 16.2 */}
      <section id="sec-16-2" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            2
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 16.2</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Opsonizzazione dei Batteri Capsulati & Biochimica Fagolisosomiale
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            I batteri provvisti di capsula polisaccaridica (es. <em>Streptococcus pneumoniae</em>, <em>Neisseria meningitidis</em>, <em>Haemophilus influenzae</em>) rappresentano una sfida biologica formidabile: la capsula, idrofila e ricca di cariche elettrostatiche negative, respinge la membrana plasmatica dei fagociti, impedendo la fagocitosi diretta mediata da recettori di superficie.
          </p>
          <p>
            L'opsonizzazione complementare supera questo ostacolo: il legame tioestere covalente di <strong>C3b</strong> e la sua successiva scissione ad <strong>iC3b</strong> formano una vera e propria "crosta molecolare" sulla capsula. Quando i recettori <strong>CR1</strong>, <strong>CR3</strong> e <strong>CR4</strong> dei neutrofili e macrofagi ingaggiano questi frammenti, innescano la polimerizzazione del citoscheletro actinico e l'internalizzazione nel fagosoma.
          </p>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-600" /> La Batteria Biochimica Intracellulare del Fagolisosoma
            </h4>
            <ul className="text-xs text-slate-700 space-y-2 list-disc pl-5">
              <li>
                <strong>Complesso NADPH ossidasi (NOX2):</strong> assemblaggio delle subunità citosoliche (p47phox, p67phox, p40phox, Rac) con le subunità di membrana (gp91phox e p22phox). Genera anione superossido (O₂⁻), convertito da SOD in perossido d'idrogeno (H₂O₂).
              </li>
              <li>
                <strong>Mieloperossidasi (MPO):</strong> abbondante nei granuli azzurrofili dei neutrofili, catalizza la reazione tra H₂O₂ e ioni cloruro (Cl⁻) generando <strong>acido ipocloroso (HOCl)</strong>, candeggina fisiologica ad altissimo potere battericida.
              </li>
              <li>
                <strong>Ossido Nitrico Sintasi Inducibile (iNOS):</strong> ossida la L-arginina a ossido nitrico (NO), che reagendo con O₂⁻ genera <strong>perossinitrito (ONOO⁻)</strong>, letale per la nitrazione delle proteine e il danno al DNA batterico.
              </li>
              <li>
                <strong>Peptidi cationici ed enzimi litici:</strong> defensine, lisozima (idrolisi dei legami β-1,4-glicosidici del peptidoglicano) e lattoferrina (chelazione del ferro libero essenziale per la sopravvivenza batterica).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 16.3 */}
      <section id="sec-16-3" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            3
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 16.3</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Clearance degli Immunocomplessi: Il Ruolo Navetta degli Eritrociti (CR1) e Fagociti Epatosplenici
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            Durante una vigorosa risposta anticorpale, l'incontro tra anticorpi IgG e antigeni solubili circolanti genera <strong>immunocomplessi (IC)</strong>. Se lasciati liberi di circolare, questi complessi precipitano nelle pareti dei vasi sanguigni fenestrati (glomeruli renali, sinovia articolare, plessi corioidei), attivando localmente il complemento e reclutando neutrofili con conseguente vasculite necrotizzante (ipersensibilità di tipo III).
          </p>
          <p>
            Per prevenire questa catastrofe immunopatologica, l'organismo ha evoluto il meccanismo degli <strong>eritrociti "navetta" (immune adherence)</strong>:
          </p>

          <div className="p-5 bg-gradient-to-r from-red-50 to-amber-50 rounded-xl border border-red-200 space-y-3">
            <h4 className="font-bold text-red-900 text-sm flex items-center gap-2">
              <Droplets className="w-4 h-4 text-red-600" /> La Cascata di Spoliazione Epatosplenica
            </h4>
            <ol className="text-xs text-red-950 space-y-2 list-decimal pl-5">
              <li>
                <strong>Fissazione di C3b:</strong> La via classica del complemento si attiva sulla porzione Fc degli immunocomplessi solubili, depositando covalentemente molecole di C3b sul reticolo immune.
              </li>
              <li>
                <strong>Cattura da parte di CR1 eritrocitario:</strong> Gli eritrociti umani esprimono circa 500-1000 molecole di CR1 (CD35) per cellula. Data la colossale massa complessiva dei globuli rossi nel circolo (5 &times; 10¹² / L), oltre il 90% del CR1 totale dell'organismo si trova sulla superficie eritrocitaria. Gli immunocomplessi vengono saldamente legati e "neutralizzati" nel lume vascolare.
              </li>
              <li>
                <strong>Trasporto asintomatico al filtro epatosplenico:</strong> Il legame su CR1 eritrocitario impedisce il contatto diretto degli immunocomplessi con le cellule endoteliali dei vasi periferici.
              </li>
              <li>
                <strong>Lo "Spogliamento" (Stripping) da parte dei macrofagi di Kupffer e della polpa rossa splenica:</strong> Nei sinusoidi della milza e del fegato, il flusso ematico rallenta drasticamente. I macrofagi residenti ingaggiano gli immunocomplessi con avidità combinata tramite recettori FcγR e CR1/CR3.
              </li>
              <li>
                <strong>Preservazione del globulo rosso:</strong> L'eritrocita non viene fagocitato: gli immunocomplessi vengono fisicamente strappati dalla membrana eritrocitaria, e il globulo rosso ritorna intatto nel circolo sanguigno sistemico.
              </li>
            </ol>
          </div>

          <div className="p-3 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs text-amber-900">
            <strong>Rilevanza Clinica nel Lupus Eritematoso Sistemico (LES):</strong> Nei pazienti con deficit ereditario di componenti precoci del complemento (C1q, C1r, C1s, C4 o C2), la fissazione di C3b sugli immunocomplessi è gravemente compromessa. Gli aggregati antigene-anticorpo non possono legarsi al CR1 eritrocitario, precipitano nella membrana basale glomerulare (nefrite lupica) e nella cute (rash malare a farfalla), innescando l'infiammazione cronica autoimmunitaria.
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 16.4 */}
      <section id="sec-16-4" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            4
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 16.4</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Il Complemento nel Centro Germinativo: FDC, Co-Recettore B (CR2/CD21-CD19-CD81) & Cascate di Segnalazione
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            Il complemento gioca un ruolo decisivo anche nel braccio adattativo della risposta umorale. All'interno dei follicoli linfonodali e splenici, le <strong>Cellule Dendritiche Follicolari (FDC)</strong> non appartengono alla linea midollare ematopoietica ma derivano da precursori mesenchimali stromali; esse non esprimono MHC di classe II ma sono ricchissime di recettori per il complemento (<strong>CR1</strong> e <strong>CR2</strong>) e recettori Fc (FcγRIIB).
          </p>
          <p>
            Le FDC catturano gli immunocomplessi opsonizzati da C3b/C3d e li mantengono esposti in conformazione <em>nativa non processata</em> lungo i loro sottili prolungamenti dendritici per settimane o mesi. I centrociti che transitano nella zona chiara del centro germinativo competono avidamente per legare questi complessi: solo i cloni con BCR ad altissima affinità ricevono il segnale di sopravvivenza anti-apoptotico.
          </p>

          <div className="p-4 bg-indigo-50/60 rounded-xl border border-indigo-200 space-y-3">
            <h4 className="font-bold text-indigo-900 text-sm flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-600" /> Il Co-recettore B: Lyn/Fyn/Blk &rarr; Syk &rarr; PI3K
            </h4>
            <p className="text-xs text-indigo-950 leading-relaxed">
              Sulla superficie del Linfocita B, il recettore <strong>CR2 (CD21)</strong> è saldamente associato a <strong>CD19</strong> (dotato di una lunga coda citoplasmatica ricca di residui tirosinici) e <strong>CD81 (TAPA-1)</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-white rounded-lg border border-indigo-150">
                <strong className="block text-indigo-700 font-mono mb-1">1. Riconoscimento Duo</strong>
                Il BCR riconosce l'epitopo proteico, mentre CR2 lega il frammento C3d legato covalentemente all'antigene stesso.
              </div>
              <div className="p-3 bg-white rounded-lg border border-indigo-150">
                <strong className="block text-indigo-700 font-mono mb-1">2. Chinasi della famiglia Src</strong>
                Lyn, Fyn e Blk fosforilano sia gli ITAM di CD79a/CD79b sia le tirosine citoplasmatiche di CD19 (in particolare Y482 e Y515).
              </div>
              <div className="p-3 bg-white rounded-lg border border-indigo-150">
                <strong className="block text-indigo-700 font-mono mb-1">3. Reclutamento PI3K & Syk</strong>
                La coda fosforilata di CD19 funge da piattaforma ad alta affinità per i domini SH2 della subunità regolatoria p85 di <strong>PI3K</strong>, convertendo PIP₂ in PIP₃ e abbassando la soglia di attivazione di 100-1000 volte.
              </div>
            </div>
          </div>
        </div>

        {/* SIMULATORE 1 EMBEDDATO: CO-RECETTORE B */}
        <div id="sim-bcell-coreceptor" className="p-5 sm:p-6 bg-slate-900 text-white rounded-2xl border border-indigo-500/40 shadow-lg space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-indigo-400" />
              <h3 className="font-bold text-sm sm:text-base text-indigo-200">
                Simulatore Molecolare: Complesso Co-Recettoriale Linfocita B (CR2/CD21 - CD19 - CD81)
              </h3>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-900/60 text-indigo-300 font-mono text-[11px] border border-indigo-700">
              Soglia di Attivazione & Sinergia C3d
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            {/* Controllo 1: Presenza C3d */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
              <label className="text-slate-300 font-semibold block">Opsonizzazione Antigene</label>
              <select
                aria-label="Opsonizzazione Antigene"
                value={hasC3dOpsonization ? 'c3d_yes' : 'c3d_no'}
                onChange={(e) => setHasC3dOpsonization(e.target.value === 'c3d_yes')}
                className="w-full bg-slate-950 text-white border border-slate-600 rounded-lg p-1.5 text-xs focus:ring-1 focus:ring-indigo-400"
              >
                <option value="c3d_yes">Antigene opsonizzato con C3d (+ C3d)</option>
                <option value="c3d_no">Antigene puro senza C3d (solo BCR)</option>
              </select>
              <p className="text-[10px] text-slate-400">Determina il crosslinking CR2-BCR simultaneo.</p>
            </div>

            {/* Controllo 2: Dose di Antigene */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
              <label className="text-slate-300 font-semibold block">Concentrazione Antigene</label>
              <select
                aria-label="Concentrazione Antigene"
                value={antigenDose}
                onChange={(e) => setAntigenDose(e.target.value as any)}
                className="w-full bg-slate-950 text-white border border-slate-600 rounded-lg p-1.5 text-xs focus:ring-1 focus:ring-indigo-400"
              >
                <option value="low">Bassa (nM) - Microgrammi minimi</option>
                <option value="medium">Media (µM) - Carico standard</option>
                <option value="high">Alta (mM) - Sovraccarico massivo</option>
              </select>
              <p className="text-[10px] text-slate-400">Disponibilità di ligando nel follicolo.</p>
            </div>

            {/* Controllo 3: Integrità CD19 */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
              <label className="text-slate-300 font-semibold block">Stato Molecolare CD19</label>
              <select
                aria-label="Stato Molecolare CD19"
                value={isCD19Functional ? 'intact' : 'knockout'}
                onChange={(e) => setIsCD19Functional(e.target.value === 'intact')}
                className="w-full bg-slate-950 text-white border border-slate-600 rounded-lg p-1.5 text-xs focus:ring-1 focus:ring-indigo-400"
              >
                <option value="intact">CD19 Intatto e Funzionante</option>
                <option value="knockout">Deficit / Mutazione CD19 (CVID)</option>
              </select>
              <p className="text-[10px] text-slate-400">Piattaforma di ancoraggio per PI3K.</p>
            </div>

            {/* Controllo 4: Chinasi Src */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
              <label className="text-slate-300 font-semibold block">Tirosin-Chinasi Src (Lyn/Fyn)</label>
              <select
                aria-label="Tirosin-Chinasi Src (Lyn/Fyn)"
                value={areSrcKinasesActive ? 'active' : 'inhibited'}
                onChange={(e) => setAreSrcKinasesActive(e.target.value === 'active')}
                className="w-full bg-slate-950 text-white border border-slate-600 rounded-lg p-1.5 text-xs focus:ring-1 focus:ring-indigo-400"
              >
                <option value="active">Lyn / Fyn / Blk Attive</option>
                <option value="inhibited">Inibite (es. Dasatinib / Farmaci)</option>
              </select>
              <p className="text-[10px] text-slate-400">Iniziano la cascata fosforilativa.</p>
            </div>
          </div>

          {/* Risultato della simulazione */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono uppercase text-indigo-400">Intensità del Segnale di Trasduzione</span>
              <span className="text-xs font-bold text-white font-mono">
                Amplificazione Molecolare: <span className="text-emerald-400">{multiplier}x</span> &bull; Forza: {signalStrength}%
              </span>
            </div>

            {/* Progress bar del segnale */}
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  isActivated ? 'bg-gradient-to-r from-indigo-500 to-emerald-400' : 'bg-amber-500'
                }`}
                style={{ width: `${Math.max(5, signalStrength)}%` }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] pt-1">
              <div>
                <span className="text-slate-400 block font-mono">Lyn / Fyn / Blk:</span>
                <span className="text-white font-medium">{lynFynStatus}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono">Syk & PLCγ2:</span>
                <span className="text-white font-medium">{sykStatus}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono">PI3K / Akt / PIP3:</span>
                <span className="text-white font-medium">{pi3kStatus}</span>
              </div>
            </div>

            <div className={`p-3 rounded-lg border text-xs font-medium ${outcomeColor}`}>
              <strong>Esito Biologico Linfocitario:</strong> {activationOutcome}
            </div>
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 16.5 */}
      <section id="sec-16-5" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            5
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 16.5</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Dinamica Linfonodale: Trasporto da Macrofagi Subcapsulari (SCS) ai Linfociti B Follicolari
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            Come fanno gli antigeni microbici opsonizzati che drenano attraverso la linfa afferente a raggiungere le profondità dei follicoli primari per incontrare le FDC e i linfociti B?
          </p>
          <p>
            Il meccanismo è governato da una popolazione specializzata di cellule sentinella: i <strong>Macrofagi del Seno Sottocapsulare (SCS Macrophages, CD169+)</strong>.
          </p>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-blue-600" /> La "Staffetta" Linfonodale in 4 Fasi
            </h4>
            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-blue-700 w-6 shrink-0">1.</span>
                <p>
                  <strong>Arrivo della Linfa:</strong> La linfa afferente riversa nel seno sottocapsulare batteri, virus e immunocomplessi rivestiti da frammenti del complemento (C3b/iC3b/C3d).
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-blue-700 w-6 shrink-0">2.</span>
                <p>
                  <strong>Scarsa degradazione endolisosomiale:</strong> A differenza dei macrofagi classici della midollare (avidi fagociti distruttori), i macrofagi SCS possiedono una bassa capacità degradativa endosomiale. Essi catturano gli immunocomplessi tramite <strong>CR3</strong>, <strong>CR4</strong> e <strong>FcγR</strong> e li trattengono intatti sulla loro membrana esposta verso il parenchima follicolare sottostante.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-blue-700 w-6 shrink-0">3.</span>
                <p>
                  <strong>Il "Passaggio del Testimone" ai Linfociti B Vergini:</strong> I linfociti B naïve non specifici per quell'antigene pattugliano il bordo del seno sottocapsulare. Attraverso il loro recettore <strong>CR2 (CD21)</strong>, agganciano i complessi opsonizzati dai macrofagi SCS.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-blue-700 w-6 shrink-0">4.</span>
                <p>
                  <strong>Consegna finale alle FDC:</strong> I linfociti B migrano verso il centro del follicolo guidati dal gradiente della chemochina <strong>CXCL13</strong> (che lega il recettore <strong>CXCR5</strong>). Arrivati nel nucleo follicolare, cedono gli immunocomplessi alle <strong>FDC</strong>, che possiedono una densità di CR1/CR2 ancora più elevata e ne garantiscono l'esposizione durevole ai centrociti specifici.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 16.6 */}
      <section id="sec-16-6" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            6
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 16.6</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Attivazione Attenuata ("Mild Activation") sulle Cellule Apoptotiche: Omeostasi vs Necrosi Secondaria
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            Ogni giorno nel corpo umano muoiono per apoptosi programmata oltre 50-70 miliardi di cellule. Se questi corpi apoptotici rimanessero nell'interstizio, andrebbero incontro a <strong>necrosi secondaria</strong>: la membrana plasmatica si lisa, rilasciando frammenti nucleari (DNA a doppia elica, istoni, ribonucleoproteine Sm/RNP) che fungono da potenti <em>DAMPs</em> e scatenano l'autoimmunità sistemica caratteristica del Lupus (LES).
          </p>
          <p>
            Il complemento partecipa alla loro tempestiva rimozione mediante un processo calibrato di <strong>attivazione attenuata o silente ("Mild Activation")</strong>:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2">
              <h4 className="font-bold text-emerald-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" /> Il Segnale "Eat-Me" Silente
              </h4>
              <p className="text-xs text-emerald-950 leading-relaxed">
                Le cellule apoptotiche esternalizzano la <strong>fosfatidilserina (PS)</strong> e legano la molecola <strong>C1q</strong> (anche in assenza di anticorpi!) e la proteina C-reattiva (PCR). Questo innesca una cascata classica iniziale ma strettamente controllata.
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 space-y-2">
              <h4 className="font-bold text-blue-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-700" /> Reclutamento dei Regolatori Solubili
              </h4>
              <p className="text-xs text-blue-950 leading-relaxed">
                Sebbene i regolatori ancorati alla membrana (DAF, CD59) vengano persi per blebbing durante l'apoptosi, la superficie morente lega attivamente i regolatori solubili plasmatici <strong>Fattore H</strong> e <strong>C4BP</strong>. Essi promuovono l'immediata conversione di C3b nel frammento non convertasico <strong>iC3b</strong> da parte del Fattore I.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-600 italic">
            <strong>Risultato Biologico:</strong> La cellula apoptotica viene rivestita da iC3b, che stimola l'inglobamento fagocitico da parte di macrofagi residenti (dotati di CR3 e CR4) senza generare C5a né assemblare il MAC (C5b-9). Questo processo di "efferocitosi" stimola la secrezione di citochine antinfiammatorie come <strong>TGF-β</strong> e <strong>IL-10</strong>, mantenendo la tolleranza immunologica periferica.
          </p>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 16.7 */}
      <section id="sec-16-7" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            7
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 16.7</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Patologie da Deficit ed Iperattivazione: HAE, EPN, aHUS, C3NeF e Deficit CD18 (LAD-1)
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            I difetti dei componenti del complemento e dei loro sofisticati circuiti inibitori sono responsabili di sindromi cliniche di estrema rilevanza in ematologia, nefrologia, immunologia ed emergenza-urgenza:
          </p>
        </div>

        {/* SIMULATORE 2 EMBEDDATO: LABORATORIO CLINICO PATOLOGIE */}
        <div id="sim-complement-pathologies" className="p-5 sm:p-6 bg-slate-900 text-white rounded-2xl border border-indigo-500/40 shadow-lg space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Microscope className="w-5 h-5 text-indigo-400" />
              <h3 className="font-bold text-sm sm:text-base text-indigo-200">
                Laboratorio Clinico di Immunopatologia del Complemento
              </h3>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-900/60 text-indigo-300 font-mono text-[11px] border border-indigo-700">
              Simulazione Diagnostico-Terapeutica
            </span>
          </div>

          {/* Selettore Patologia */}
          <div className="space-y-1.5">
            <label className="text-slate-300 text-xs font-semibold block">Seleziona la Condizione Clinica da Indagare:</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-xs">
              <button
                onClick={() => setSelectedPathology('hae')}
                className={`p-2 rounded-lg font-semibold text-center border transition-all ${
                  selectedPathology === 'hae'
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                    : 'bg-slate-800 hover:bg-slate-750 text-slate-300 border-slate-700'
                }`}
              >
                HAE (C1-INH)
              </button>
              <button
                onClick={() => setSelectedPathology('epn')}
                className={`p-2 rounded-lg font-semibold text-center border transition-all ${
                  selectedPathology === 'epn'
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                    : 'bg-slate-800 hover:bg-slate-750 text-slate-300 border-slate-700'
                }`}
              >
                EPN (PIG-A / CD59)
              </button>
              <button
                onClick={() => setSelectedPathology('ahus')}
                className={`p-2 rounded-lg font-semibold text-center border transition-all ${
                  selectedPathology === 'ahus'
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                    : 'bg-slate-800 hover:bg-slate-750 text-slate-300 border-slate-700'
                }`}
              >
                aHUS (Fattore H)
              </button>
              <button
                onClick={() => setSelectedPathology('c3nef')}
                className={`p-2 rounded-lg font-semibold text-center border transition-all ${
                  selectedPathology === 'c3nef'
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                    : 'bg-slate-800 hover:bg-slate-750 text-slate-300 border-slate-700'
                }`}
              >
                C3NeF (MPGN II)
              </button>
              <button
                onClick={() => setSelectedPathology('lad1')}
                className={`p-2 rounded-lg font-semibold text-center border transition-all ${
                  selectedPathology === 'lad1'
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                    : 'bg-slate-800 hover:bg-slate-750 text-slate-300 border-slate-700'
                }`}
              >
                LAD-1 (CD18)
              </button>
              <button
                onClick={() => setSelectedPathology('neisseria')}
                className={`p-2 rounded-lg font-semibold text-center border transition-all ${
                  selectedPathology === 'neisseria'
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                    : 'bg-slate-800 hover:bg-slate-750 text-slate-300 border-slate-700'
                }`}
              >
                Deficit C5-C9
              </button>
            </div>
          </div>

          {/* Scheda Clinica della patologia selezionata */}
          <div className="bg-slate-950 p-4 sm:p-5 rounded-xl border border-slate-800 space-y-4 text-xs">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-800 pb-2">
              <h4 className="text-sm font-bold text-indigo-300">{currentPathData.title}</h4>
              <span className="text-[11px] font-mono text-slate-400">{currentPathData.pathwayAffected}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                <span className="text-slate-400 font-mono text-[10px] uppercase block">Difetto Molecolare / Genetico</span>
                <p className="text-slate-200 font-medium">{currentPathData.geneDefect}</p>
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                <span className="text-slate-400 font-mono text-[10px] uppercase block">Triade Clinica Esordio</span>
                <p className="text-slate-200 font-medium">{currentPathData.clinicalTriad}</p>
              </div>
            </div>

            <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 space-y-1">
              <span className="text-indigo-400 font-mono text-[10px] uppercase block font-semibold">Laboratorio & Marker Diagnostici</span>
              <p className="text-slate-300">{currentPathData.labFindings}</p>
            </div>

            {/* Test terapeutico interattivo */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <label className="text-slate-300 font-semibold block text-xs">
                Applica un Protocollo Terapeutico di Prova:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {currentPathData.treatments.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setAppliedTreatment(t.id)}
                    className={`p-2.5 rounded-lg text-left text-[11px] font-medium border transition-all ${
                      appliedTreatment === t.id
                        ? t.success
                          ? 'bg-emerald-950 border-emerald-500 text-emerald-200'
                          : 'bg-rose-950 border-rose-500 text-rose-200'
                        : 'bg-slate-900 hover:bg-slate-850 text-slate-300 border-slate-700'
                    }`}
                  >
                    <div className="font-bold mb-0.5">{t.label}</div>
                  </button>
                ))}
              </div>

              {appliedTreatment !== 'none' && (
                <div
                  className={`p-3 rounded-lg border mt-3 text-xs leading-relaxed ${
                    currentPathData.treatments.find((t) => t.id === appliedTreatment)?.success
                      ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-200'
                      : 'bg-rose-950/80 border-rose-500/60 text-rose-200'
                  }`}
                >
                  <strong>Riscontro Terapeutico:</strong>{' '}
                  {currentPathData.treatments.find((t) => t.id === appliedTreatment)?.effect}
                </div>
              )}
            </div>

            <p className="text-[11px] text-slate-400 italic pt-1">
              <strong>Rationale Fisiopatologico:</strong> {currentPathData.clinicalRationale}
            </p>
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 16.8 */}
      <section id="sec-16-8" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            8
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 16.8</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Evasione & Hijacking del Complemento: Dai Batteri e Virus a SARS-CoV-2 (C3, NETs e Tempesta Citochinica)
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            Sotto la formidabile pressione evolutiva esercitata dal complemento, i microrganismi hanno sviluppato un arsenale sofisticato di contromisure per disinnescare la cascata o addirittura volgerla a proprio favore (<em>complement hijacking</em>):
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600" /> Mascheramento Sterico & Pareti Spesse
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Le capsule polisaccaridiche (pneumococco, meningococco, <em>Cryptococcus</em>) creano un ostacolo sterico che allontana il MAC dalla membrana cellulare vitale. Nei Gram-positivi, la spessa parete di peptidoglicano (30-40 nm) blocca fisicamente l'inserimento litico del poro C5b-9.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Activity className="w-4 h-4 text-amber-600" /> Inattivazione Proteolitica Diretta
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Elastasi di <em>Pseudomonas aeruginosa</em>, C5a-peptidasi di <em>Streptococcus pyogenes</em> e proteasi stafilococciche degradano specificamente C3a e C5a abolendo l'effetto chemiotattico sui neutrofili.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" /> Sequestro e Mimicry dei Regolatori Umani
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Incorporazione di acido sialico nella capsula (ceppi di <em>Neisseria</em>) che recluta il <strong>Fattore H</strong> umano mimando le cellule self. La glicoproteina C (gC) dell'Herpes Simplex Virus (HSV-1/2) si lega a C3b bloccando la formazione delle convertasi.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" /> L'Arsenale di Staphylococcus aureus
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Proteina A (SpA)</strong> che capovolge le IgG legandone l'Fc; <strong>SCIN</strong> che inattiva le C3/C5 convertasi; <strong>CHIPS</strong> che acceca i recettori C5aR e FPR1 dei neutrofili; e <strong>Stafilochinasi (SAK)</strong> che attiva la plasmina degradando C3b.
              </p>
            </div>
          </div>

          <div className="p-4 bg-red-50/70 border border-red-200 rounded-xl space-y-2">
            <h4 className="font-bold text-red-950 text-sm flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600" /> Modelli Murini di SARS-CoV-2 e il Ruolo Tossico del Complemento
            </h4>
            <p className="text-xs text-red-950 leading-relaxed">
              Durante la fase iperinfiammatoria di COVID-19 grave, la proteina Spike e gli immunocomplessi attivano la via alternativa e lectinica. L'eccesso di anafilotossina <strong>C5a</strong> recluta un'ondata distruttiva di neutrofili nel tessuto polmonare, stimolandone la degranulazione e la produzione massiva di <strong>NETs (Neutrophil Extracellular Traps)</strong>. Le NETs innescano microtrombosi vascolare diffusa e danno alveolare. Nei modelli murini knock-out per <strong>C3 (C3-/-)</strong> o trattati con inibitori selettivi di C3 o C5aR, si è osservata una drastica riduzione della tempesta citochinica, del danno polmonare e della letalità.
            </p>
          </div>

          {/* Mappa Concettuale delle Strategie di Evasione Microbica */}
          <ConceptMapFlow {...MAP_LEZIONE_16_MICROBIAL_EVASION} />
        </div>
      </section>

      {/* SOTTO-CAPITOLO 16.9 */}
      <section id="sec-16-9" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            9
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 16.9</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Risposta Immunitaria alle Infezioni: Fitness del Sistema, Gradiente di Attivazione e ViraPAMPs
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            La seconda parte della lezione introduce la logica globale della risposta immunitaria dell'ospite contro il regno dei patogeni. Il concetto fondante è quello di <strong>Fitness del Sistema Immunitario</strong>:
          </p>
          <blockquote className="p-4 bg-slate-50 rounded-xl border-l-4 border-indigo-500 text-xs italic text-slate-800">
            «La fitness immunitaria non risiede nella capacità di scatenare sempre la massima distruzione possibile, bensì nel perfetto bilanciamento tra l'efficacia dell'eradicazione del patogeno e la limitazione del danno tissutale collaterale (immunopatologia). Una risposta immunitaria iperergica è letale tanto quanto una risposta assente.»
          </blockquote>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">Il Gradiente di Attivazione Proporzionale al Pericolo</h4>
            <p>
              L'organismo non risponde con la medesima intensità a qualsiasi stimolo microbico. La risposta è modulata in base alla <em>vitalità</em> e alla <em>capacità replicativa</em> del patogeno, distinte mediante i cosiddetti <strong>ViraPAMPs (o vita-PAMPs)</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="block text-slate-900 font-semibold mb-1">Microbioma Commensale / Inerte</strong>
                Espone PAMPs basali ma non invade né replica nei tessuti sterili. Evoca tolleranza periferica e produzione basale di IgA secretorie.
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="block text-slate-900 font-semibold mb-1">ViraPAMPs / Vita-PAMPs</strong>
                Marcatori intrinseci di batteri/virus vivi e attivamente replicanti (es. mRNA batterico non modificato, dinucleotidi ciclici c-di-GMP, RNA virale replicativo con 5'-trifosfato).
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="block text-slate-900 font-semibold mb-1">Patogeni Emergenti Zoonotici</strong>
                Patogeni passati di recente da specie animali all'uomo (es. SARS-CoV-2, Ebola). Mancando la millenaria co-evoluzione, scatenano risposte disordinate ad altissima letalità.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 16.10 */}
      <section id="sec-16-10" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            10
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 16.10</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Tassonomia della Risposta Effettrice, Evasione Microbica & Suscettibilità Genetica (HLA-B57, CCR5-Δ32)
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            L'immunità adotta strategie molecolari e cellulari radicalmente diverse a seconda della localizzazione e della biologia del microrganismo:
          </p>

          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-indigo-600" /> Nascondimento & Latenza in Siti Immunologicamente Privilegiati
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                I siti immunologicamente privilegiati (cervello, camera anteriore dell'occhio, testicoli, placenta) presentano basse concentrazioni basali di molecole MHC-I/II e barriere fisiche per proteggere organi nobili non rigenerabili da danni citotossici.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-2.5 bg-white rounded border border-slate-200">
                  <strong className="text-slate-900 block font-semibold mb-0.5">Herpes Simplex Virus (HSV-1)</strong>
                  Latenza nei neuroni sensoriali del <strong>ganglio trigeminale</strong>. I neuroni mancano di MHC-I: il genoma virale rimane in forma episomiale silente (trascritti LAT) per riattivarsi anterogradamente verso le labbra in caso di stress o febbre.
                </div>
                <div className="p-2.5 bg-white rounded border border-slate-200">
                  <strong className="text-slate-900 block font-semibold mb-0.5">Varicella-Zoster Virus (VZV)</strong>
                  Dopo la varicella, il virus persiste latente nei <strong>gangli delle radici dorsali del midollo spinale (DRG)</strong>. Con l'immunosenescenza si riattiva migrando lungo il dermatomero sensitivo causando l'<strong>Herpes Zoster (fuoco di Sant'Antonio)</strong> con dolore neuropatico severo.
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Dna className="w-4 h-4 text-emerald-600" /> Fattori Genetici dell'Ospite: Alleli HLA e la Delezione CCR5-Δ32
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Gli studi di concordanza nei gemelli monozigoti vs dizigoti confermano che la suscettibilità alle infezioni ha una base genetica quantitativa decisiva:
              </p>
              <ul className="text-xs text-slate-700 space-y-2 list-disc pl-5">
                <li>
                  <strong>HLA-B35 vs HLA-B57 nell'infezione da HIV-1:</strong> I pazienti con l'allele <strong>HLA-B35</strong> presentano una progressione accelerata verso l'AIDS conclamato. Al contrario, l'allele <strong>HLA-B57</strong> (e HLA-B27) è fortemente associato al fenotipo di <em>HIV Elite Controller</em>: le tasche di HLA-B57 presentano epitopi della proteina capsidica Gag (es. peptide TW10); le eventuali mutazioni virali per sfuggire ai CD8+ comportano un costo di replicazione virale (<em>viral fitness cost</em>) devastante per il virus, che rimane incapace di replicare.
                </li>
                <li>
                  <strong>La Delezione Protettiva CCR5-Δ32:</strong> La proteina <strong>CCR5</strong> è il co-recettore indispensabile per i ceppi R5 (macrofagotropi) di HIV-1. La mutazione con delezione di 32 paia di basi nel gene <em>CCR5</em> genera una proteina tronca non esposta in membrana. I soggetti <strong>omozigoti (CCR5-Δ32 / Δ32)</strong> sono immuni all'infezione naturale da HIV-1 (base scientifica della guarigione del "Paziente di Berlino" e del "Paziente di Londra" dopo trapianto di midollo osseo da donatori omozigoti Δ32). Tale allele ha una frequenza del 10-15% nel Nord Europa, probabilmente selezionato positivamente da epidemie storiche passate come il vaiolo o la peste bubbonica.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TABELLE COMPARATIVE SINOTTICHE (16.1 & 16.2) */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-8">
        <div>
          <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Tabelle Sinottiche Ufficiali</span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
            Compendio Molecolare dei Recettori e Matrice di Risposta Effettrice
          </h3>
        </div>

        {/* Tabella 16.1 */}
        <div className="space-y-3">
          <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-600" /> Tabella 16.1: Compendio dei Recettori del Complemento
          </h4>
          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-mono">
                  <th className="p-3">Recettore</th>
                  <th className="p-3">Struttura / CD</th>
                  <th className="p-3">Ligandi Principali</th>
                  <th className="p-3">Distribuzione Cellulare</th>
                  <th className="p-3">Funzioni Biologiche Primarie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">CR1</td>
                  <td className="p-3 font-mono">CD35 (30 SCR/CCP)</td>
                  <td className="p-3">C3b, C4b, iC3b</td>
                  <td className="p-3">Eritrociti, Macrofagi, Neutrofili, Eosinofili, Linfociti B, FDC</td>
                  <td className="p-3">Clearance navetta immunocomplessi, opsonofagocitosi, attività di cofattore per Fattore I</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">CR2</td>
                  <td className="p-3 font-mono">CD21 (15-16 SCR)</td>
                  <td className="p-3">C3d, C3dg, iC3b, gp350 (EBV)</td>
                  <td className="p-3">Linfociti B, Follicular Dendritic Cells (FDC)</td>
                  <td className="p-3">Co-recettore B con CD19/CD81 (abbattimento soglia 1000x), legame e ritenzione su FDC, recettore per EBV</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">CR3</td>
                  <td className="p-3 font-mono">CD11b / CD18 (Mac-1, αMβ2)</td>
                  <td className="p-3">iC3b, ICAM-1, Fibrinogeno, β-glucani</td>
                  <td className="p-3">Macrofagi, Neutrofili, Monociti, Cellule NK, DC</td>
                  <td className="p-3">Fagocitosi di patogeni opsonizzati da iC3b, adesione salda all'endotelio e stravaso diapedetico</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">CR4</td>
                  <td className="p-3 font-mono">CD11c / CD18 (p150,95, αXβ2)</td>
                  <td className="p-3">iC3b, C3dg, Fibrinogeno</td>
                  <td className="p-3">Macrofagi tissutali, Cellule Dendritiche, Neutrofili</td>
                  <td className="p-3">Fagocitosi dei frammenti iC3b, motilità cellulare e adesione</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">C3aR</td>
                  <td className="p-3 font-mono">7-TM GPCR (Gαi, Gα16)</td>
                  <td className="p-3">C3a (solubile)</td>
                  <td className="p-3">Mastociti, Basofili, Eosinofili, Muscolatura liscia</td>
                  <td className="p-3">Degranulazione mastociti, vasodilatazione, contrazione muscolatura liscia bronchiale/intestinale</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">C5aR (CD88)</td>
                  <td className="p-3 font-mono">7-TM GPCR (Gαi)</td>
                  <td className="p-3">C5a (1000x più potente di C3a)</td>
                  <td className="p-3">Neutrofili, Monociti, Macrofagi, Mastociti, Endotelio</td>
                  <td className="p-3">Potentissimo fattore chemiotattico per neutrofili, attivazione NOX2, up-regolazione integrine, shock anafilattico</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabella 16.2 */}
        <div className="space-y-3">
          <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" /> Tabella 16.2: Classificazione dei Patogeni, Risposta Effettrice & Meccanismi di Evasione
          </h4>
          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-mono">
                  <th className="p-3">Classe Patogeno</th>
                  <th className="p-3">Esempi Clinici</th>
                  <th className="p-3">Immunità Innata Prevalente</th>
                  <th className="p-3">Immunità Adattativa Prevalente</th>
                  <th className="p-3">Strategie di Evasione Microbica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Batteri Extracellulari</td>
                  <td className="p-3 italic">S. pneumoniae, N. meningitidis, S. aureus</td>
                  <td className="p-3">Neutrofili, C3b/iC3b, MAC, Peptidi antimicrobici</td>
                  <td className="p-3">Linfociti Th17 (IL-17, IL-22), Anticorpi opsonizzanti (IgG) e neutralizzanti (IgA)</td>
                  <td className="p-3">Capsule polisaccaridiche, Proteina A, SCIN, degradazione enzimatica di C5a</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Batteri / Parassiti Intracellulari</td>
                  <td className="p-3 italic">M. tuberculosis, L. monocytogenes, Leishmania</td>
                  <td className="p-3">Macrofagi, Cellule NK (produzione precoce di IFN-γ indotta da IL-12)</td>
                  <td className="p-3">Linfociti Th1 (T-bet, IFN-γ, CD40L) con attivazione macrofagi M1 & Granulomi</td>
                  <td className="p-3">Inibizione fusione fago-lisosoma, fuga nel citoplasma, resistenza a NOX2</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Virus (Intracellulari Obbligati)</td>
                  <td className="p-3 italic">Influenza, HSV, VZV, HIV, SARS-CoV-2</td>
                  <td className="p-3">Interferoni Tipo I (IFN-α/β &rarr; PKR/OAS), Cellule NK (Missing Self)</td>
                  <td className="p-3">Linfociti T citotossici CD8+ (perforina/granzimi), Anticorpi neutralizzanti</td>
                  <td className="p-3">Latenza in gangli (HSV/VZV), drift/shift antigenico, down-regulation MHC-I</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Elminti & Vermi (Pluricellulari)</td>
                  <td className="p-3 italic">Schistosoma, Ascaris, Filarie</td>
                  <td className="p-3">Eosinofili, Mastociti, ILC2, Allarmine (IL-25, IL-33, TSLP)</td>
                  <td className="p-3">Linfociti Th2 (GATA-3, IL-4, IL-5, IL-13) & Switch isotipico verso IgE (ADCC)</td>
                  <td className="p-3">Tegumento spesso resistente a ROS, immunosoppressione con analoghi TGF-β</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={quizQuestions} lessonNumber={16} title="Verifica dell'Apprendimento · Lezione 16" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={flashcards} lessonNumber={16} title="Flashcard di Ripasso Attivo · Lezione 16" />
    </div>
  );
};
