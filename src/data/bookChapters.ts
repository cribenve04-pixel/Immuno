/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * NUOVA ARCHITETTURA: MANUALE DIGITALE A 8 MACRO-CAPITOLI DEL CORSO
 * Raggruppa le 33 lezioni universitarie negli 8 Macro-Moduli del Syllabus Ufficiale
 */

export interface BookChapterDefinition {
  id: number; // 1 to 8 (and 0 for Intro)
  romanId: string;
  title: string;
  subtitle: string;
  shortTitle: string;
  description: string;
  iconName: string;
  badgeColor: {
    bg: string;
    text: string;
    border: string;
    accent: string;
    ring: string;
    lightBg: string;
    darkBg: string;
    gradient: string;
  };
  lessonNumbers: number[];
  sections: {
    code: string; // e.g. "1.1", "1.2"
    lessonNumber: number;
    anchorId?: string;
    title: string;
    shortTitle: string;
    topicsCount: number;
    professor: string;
    duration: string;
  }[];
}

export const BOOK_CHAPTERS: BookChapterDefinition[] = [
  {
    id: 0,
    romanId: "0",
    title: "Fondamenti del Sistema Immunitario, Ontogenesi Ematopoietica e Architettura degli Organi Linfoidi",
    subtitle: "Logica Evolutiva, Nicchia Midollare, Organi Linfoidi Primari e Secondari, Teoria di Burnet",
    shortTitle: "Fondamenti & Organi Linfoidi",
    description: "La bussola strutturale per l'esame orale di Immunologia: architettura integrata della risposta immunitaria, cooperazione innata-adattativa, trained immunity, ematopoiesi, microarchitettura di timo, linfonodo e milza, e dinamica immunitaria nell'arco della vita.",
    iconName: "Compass",
    badgeColor: {
      bg: "bg-indigo-700 text-white",
      text: "text-indigo-800 dark:text-indigo-200",
      border: "border-indigo-300 dark:border-indigo-700",
      accent: "bg-indigo-600",
      ring: "ring-indigo-400",
      lightBg: "bg-indigo-50 text-indigo-800",
      darkBg: "dark:bg-indigo-950/60 dark:text-indigo-300",
      gradient: "from-indigo-700 to-blue-800"
    },
    lessonNumbers: [0],
    sections: [
      {
        code: "0.1",
        lessonNumber: 0,
        anchorId: "sec-0-logica",
        title: "Logica Evolutiva, Cinetica della Risposta (Gaussiana Innata vs Adattativa) e Trained Immunity",
        shortTitle: "Logica Evolutiva & Trained Immunity",
        topicsCount: 6,
        professor: "Area Fondamenti",
        duration: "40 min"
      },
      {
        code: "0.2",
        lessonNumber: 0,
        anchorId: "sec-0-ematopoiesi",
        title: "Ematopoiesi, Nicchia Midollare e Atlante delle Popolazioni Cellulari",
        shortTitle: "Ematopoiesi & Atlante Cellulare",
        topicsCount: 8,
        professor: "Area Fondamenti",
        duration: "50 min"
      },
      {
        code: "0.3",
        lessonNumber: 0,
        anchorId: "sec-0-organi-primari",
        title: "Organi Linfoidi Primari (Centrali): Midollo Osseo e Microarchitettura Timica",
        shortTitle: "Organi Primari: Midollo & Timo",
        topicsCount: 6,
        professor: "Area Fondamenti",
        duration: "45 min"
      },
      {
        code: "0.4",
        lessonNumber: 0,
        anchorId: "sec-0-organi-secondari",
        title: "Organi Linfoidi Secondari (Periferici): Linfonodi, Milza, MALT e Trafficking S1P",
        shortTitle: "Organi Secondari: Linfonodi & Milza",
        topicsCount: 8,
        professor: "Area Fondamenti",
        duration: "50 min"
      },
      {
        code: "0.5",
        lessonNumber: 0,
        anchorId: "sec-0-burnet-vita",
        title: "Postulati della Selezione Clonale di Burnet e Dinamica dell'Ospite nell'Arco della Vita",
        shortTitle: "Selezione Clonale & Arco della Vita",
        topicsCount: 6,
        professor: "Area Fondamenti",
        duration: "45 min"
      },
      {
        code: "0.6",
        lessonNumber: 0,
        anchorId: "sec-0-verifica",
        title: "Tabella Sinottica Master (Innata vs Adattativa) e Verifica delle Competenze",
        shortTitle: "Tabella Sinottica & Autovalutazione",
        topicsCount: 5,
        professor: "Area Fondamenti",
        duration: "30 min"
      }
    ]
  },
  {
    id: 1,
    romanId: "I",
    title: "Basi & Immunità Innata",
    subtitle: "Barriere Fisico-Chimiche, Sensori Molecolari PAMP/DAMP ed Effettori Mieloidi",
    shortTitle: "Immunità Innata & Sensori",
    description: "La prima linea difensiva: anatomia microscopica delle barriere mucosali ed epidermiche, peptidi antimicrobici, recettori PRR di superficie e citosolici (TLR, NLR, RLR, STING), biochimica dell'inflammasoma NLRP3, piroptosi con Gasdermina D, burst respiratorio NOX2, NETosi e citotossicità innata delle cellule Natural Killer (KIR/NKG2D).",
    iconName: "Shield",
    badgeColor: {
      bg: "bg-emerald-600 text-white",
      text: "text-emerald-700 dark:text-emerald-300",
      border: "border-emerald-300 dark:border-emerald-700",
      accent: "bg-emerald-500",
      ring: "ring-emerald-400",
      lightBg: "bg-emerald-50 text-emerald-800",
      darkBg: "dark:bg-emerald-950/60 dark:text-emerald-300",
      gradient: "from-emerald-600 to-teal-700"
    },
    lessonNumbers: [1, 3, 4, 5, 21],
    sections: [
      {
        code: "1.0",
        lessonNumber: 1,
        anchorId: "sec-1-barriere",
        title: "Architettura delle Barriere Epiteliali, Peptidi Antimicrobici (AMPs) & Microbioma",
        shortTitle: "Barriere & Peptidi (AMPs)",
        topicsCount: 6,
        professor: "Area Tematica 1",
        duration: "45 min"
      },
      {
        code: "1.1",
        lessonNumber: 1,
        anchorId: "sec-1-prr",
        title: "Il Riconoscimento Molecolare: La Tassonomia dei Sensori PRR (TLR, CLR, RLR)",
        shortTitle: "Sensori PRR & Vie TLR",
        topicsCount: 7,
        professor: "Area Tematica 1",
        duration: "50 min"
      },
      {
        code: "1.2",
        lessonNumber: 1,
        anchorId: "sec-1-inflammasoma",
        title: "L'Innesco dell'Infiammazione: Inflammasoma NLRP3, Caspasi-1 & Piroptosi",
        shortTitle: "Inflammasoma NLRP3 & Piroptosi",
        topicsCount: 7,
        professor: "Area Tematica 1",
        duration: "50 min"
      },
      {
        code: "1.3",
        lessonNumber: 1,
        anchorId: "sec-1-stravaso",
        title: "Il Reclutamento Leucocitario: Cascata di Adesione Endoteliale & Diapedesi",
        shortTitle: "Reclutamento & Stravaso",
        topicsCount: 6,
        professor: "Area Tematica 1",
        duration: "45 min"
      },
      {
        code: "1.4",
        lessonNumber: 1,
        anchorId: "sec-1-effettori",
        title: "Gli Effettori Mieloidi di Prima Linea: Neutrofili, NOX2 & NETosi",
        shortTitle: "Neutrofili, NOX2 & NETosi",
        topicsCount: 7,
        professor: "Area Tematica 1",
        duration: "50 min"
      },
      {
        code: "1.5",
        lessonNumber: 1,
        anchorId: "sec-1-antivirale",
        title: "La Difesa Antivirale Cellulo-Mediata: Interferoni di Tipo I & Stato Antivirale",
        shortTitle: "Interferoni Tipo I & ISG",
        topicsCount: 6,
        professor: "Area Tematica 1",
        duration: "45 min"
      },
      {
        code: "1.6",
        lessonNumber: 1,
        anchorId: "sec-1-nk",
        title: "L'Immunità Linfoide Innata: Cellule Natural Killer (Missing-Self) & ILCs",
        shortTitle: "Cellule NK & ILCs",
        topicsCount: 7,
        professor: "Area Tematica 1",
        duration: "55 min"
      },
      {
        code: "1.7",
        lessonNumber: 1,
        anchorId: "sec-1-verifica",
        title: "Tavola Sinottica Master di Immunità Innata, Batteria di Quiz d'Esame e Flashcard per Ripasso Attivo",
        shortTitle: "Tavola Master, Quiz & Flashcard",
        topicsCount: 7,
        professor: "Area Tematica 1",
        duration: "40 min"
      }
    ]
  },
  {
    id: 2,
    romanId: "II",
    title: "Basi Molecolari & Maturazione",
    subtitle: "Genetica dei Recettori Antigenici, Ricombinazione V(D)J, HLA e Selezione Linfocitaria",
    shortTitle: "Basi Molecolari & Maturazione",
    description: "La generazione della diversità recettoriale e i checkpoint di sviluppo: struttura molecolare di BCR e anticorpi, ontogenesi dei linfociti B e pre-BCR, biochimica della ricombinazione genica somatica V(D)J (RAG1/2, Artemis, TdT), architettura strutturale del complesso HLA di classe I e II con ancoraggio nelle tasche peptidiche, processazione citosolica ed esogena con cross-presentazione, e selezione timica dei linfociti T mediata da AIRE.",
    iconName: "Dna",
    badgeColor: {
      bg: "bg-indigo-600 text-white",
      text: "text-indigo-700 dark:text-indigo-300",
      border: "border-indigo-300 dark:border-indigo-700",
      accent: "bg-indigo-500",
      ring: "ring-indigo-400",
      lightBg: "bg-indigo-50 text-indigo-800",
      darkBg: "dark:bg-indigo-950/60 dark:text-indigo-300",
      gradient: "from-indigo-600 to-violet-700"
    },
    lessonNumbers: [6, 7, 8, 9, 10, 11],
    sections: [
      {
        code: "2.1",
        lessonNumber: 6,
        anchorId: "sec-2-bcr-ig",
        title: "Struttura delle Immunoglobuline, Complesso BCR e Trasduzione del Segnale",
        shortTitle: "Struttura Ig & Segnalazione BCR",
        topicsCount: 7,
        professor: "Prof.ssa Rosa Molfetta",
        duration: "50 min"
      },
      {
        code: "2.2",
        lessonNumber: 8,
        anchorId: "sec-2-vdj",
        title: "Biochimica della Ricombinazione Somatica V(D)J, Diversità Giunzionale e Difetti NHEJ (SCID/Omenn)",
        shortTitle: "Ricombinazione V(D)J & NHEJ",
        topicsCount: 8,
        professor: "Prof.ssa Rosa Molfetta",
        duration: "55 min"
      },
      {
        code: "2.3",
        lessonNumber: 7,
        anchorId: "sec-2-ontogenesi-b",
        title: "Ontogenesi Midollare B, Checkpoint Pre-BCR e Tolleranza Centrale/Periferica B",
        shortTitle: "Ontogenesi B & Tolleranza",
        topicsCount: 8,
        professor: "Prof.ssa Rosa Molfetta",
        duration: "55 min"
      },
      {
        code: "2.4",
        lessonNumber: 9,
        anchorId: "sec-2-mhc-struttura",
        title: "Complesso MHC / HLA: Struttura, Tasche Peptidiche, Mappa Genomica 6p21.3 ed Eredità Aplotipica",
        shortTitle: "Genetica HLA & Tasche MHC",
        topicsCount: 8,
        professor: "Prof.ssa Rosa Molfetta",
        duration: "55 min"
      },
      {
        code: "2.5",
        lessonNumber: 10,
        anchorId: "sec-2-processing",
        title: "Vie di Processazione Antigenica: Citosolica (MHC-I) vs Endocitaria (MHC-II)",
        shortTitle: "Vie di Processazione MHC I/II",
        topicsCount: 8,
        professor: "Prof.ssa Rosa Molfetta",
        duration: "55 min"
      },
      {
        code: "2.6",
        lessonNumber: 10,
        anchorId: "sec-2-cross-non-classiche",
        title: "Cross-Presentazione (cDC1), Superantigeni e Vie Non Classiche (CD1, MR1, Butirofiline)",
        shortTitle: "Cross-Pres. & Superantigeni",
        topicsCount: 7,
        professor: "Prof.ssa Rosa Molfetta",
        duration: "50 min"
      },
      {
        code: "2.7",
        lessonNumber: 11,
        anchorId: "sec-2-ontogenesi-t",
        title: "Ontogenesi Timica T: Stadi DN1-DN4, Checkpoint Pre-TCR, Selezione Positiva/Negativa e Fattore AIRE",
        shortTitle: "Selezione Timica T & AIRE",
        topicsCount: 8,
        professor: "Prof.ssa Ricciarda Galandrini",
        duration: "55 min"
      },
      {
        code: "2.8",
        lessonNumber: 6,
        anchorId: "sec-2-verifica",
        title: "Tavola Sinottica Comparativa Master, Batteria di Quiz d'Esame e Flashcard per Ripasso Attivo",
        shortTitle: "Tavola Master, Quiz & Flashcard",
        topicsCount: 6,
        professor: "Area Fondamenti & Clinica",
        duration: "40 min"
      }
    ]
  },
  {
    id: 3,
    romanId: "III",
    title: "Attivazione & Differenziamento T/B",
    subtitle: "Sinapsi Immunologica, Costimolazione, Centri Germinativi e Polarizzazione Effettrice",
    shortTitle: "Attivazione & Differenziamento",
    description: "Dalla presentazione dell'antigene all'attivazione clonale completa: segnalazione citochinica e via JAK-STAT con chemochine; i tre segnali di attivazione del linfocita T e segregazione cinetica nella sinapsi SMAC; cooperazione T-B nel follicolo linfonodale, focolai extrafollicolari e dinamica della zona scura/chiara del centro germinativo con enzima AID (ipermutazione somatica e switch isotipico); risposte anticorpali T-indipendenti con cellule B-1 e della zona marginale; polarizzazione dei linfociti T helper (Th1, Th2, Th17, Tfh, Treg) e priming citotossico dei linfociti CTL.",
    iconName: "Zap",
    badgeColor: {
      bg: "bg-blue-600 text-white",
      text: "text-blue-700 dark:text-blue-300",
      border: "border-blue-300 dark:border-blue-700",
      accent: "bg-blue-500",
      ring: "ring-blue-400",
      lightBg: "bg-blue-50 text-blue-800",
      darkBg: "dark:bg-blue-950/60 dark:text-blue-300",
      gradient: "from-blue-600 to-cyan-700"
    },
    lessonNumbers: [2, 12, 13, 14, 19, 20],
    sections: [
      {
        code: "3.1",
        lessonNumber: 2,
        anchorId: "sec-3-citochine-jak",
        title: "Proprietà delle Citochine, Famiglie Recettoriali, Asse JAK-STAT/SOCS & Chemochine DRY",
        shortTitle: "Citochine, JAK-STAT & Chemochine",
        topicsCount: 8,
        professor: "Prof.ssa Ricciarda Galandrini",
        duration: "55 min"
      },
      {
        code: "3.2",
        lessonNumber: 12,
        anchorId: "sec-3-sinapsi-tcr",
        title: "I Tre Segnali T, Architettura della Sinapsi SMAC, Cascata TCR, Sistema IL-2 & Checkpoint Inibitori",
        shortTitle: "Sinapsi SMAC & Cascata TCR",
        topicsCount: 10,
        professor: "Prof.ssa Ricciarda Galandrini",
        duration: "60 min"
      },
      {
        code: "3.3",
        lessonNumber: 13,
        anchorId: "sec-3-centro-germinativo",
        title: "Cooperazione T-B al Confine, Dinamica Dark/Light Zone, Enzima AID (SHM/CSR) & Destino Plasmacellulare",
        shortTitle: "Centro Germinativo & AID (SHM/CSR)",
        topicsCount: 10,
        professor: "Prof.ssa Rosa Molfetta",
        duration: "60 min"
      },
      {
        code: "3.4",
        lessonNumber: 14,
        anchorId: "sec-3-ti-b1-freni",
        title: "Antigeni TI-1/TI-2, Vaccini Glicoconiugati, Popolazioni B-1/MZ & Freni Inibitori ITIM (FcγRIIB/CD22)",
        shortTitle: "Antigeni TI, B-1/MZ & Freni ITIM",
        topicsCount: 10,
        professor: "Prof.ssa Rosa Molfetta",
        duration: "55 min"
      },
      {
        code: "3.5",
        lessonNumber: 19,
        anchorId: "sec-3-polarizzazione-th",
        title: "Differenziamento T Helper (Th1/Th2/Th17/Tfh/Treg), Plasticità Effettrice & Nobel 2025 FOXP3",
        shortTitle: "Polarizzazione Th & Treg (Nobel 2025)",
        topicsCount: 10,
        professor: "Prof.ssa Alessandra Soriani",
        duration: "60 min"
      },
      {
        code: "3.6",
        lessonNumber: 20,
        anchorId: "sec-3-ctl-cd8",
        title: "Linfociti T Citotossici (CTL): Priming, Sinapsi Litica, Degranulazione Perforina/Granzimi & Sindromi HLH",
        shortTitle: "CTL Citotossici & Sindromi HLH",
        topicsCount: 8,
        professor: "Prof.ssa Ricciarda Galandrini",
        duration: "55 min"
      },
      {
        code: "3.7",
        lessonNumber: 2,
        anchorId: "sec-3-verifica",
        title: "Tavola Sinottica Comparativa Master, Batteria di Quiz d'Esame e Flashcard per Ripasso Attivo",
        shortTitle: "Tavola Master, Quiz & Flashcard",
        topicsCount: 6,
        professor: "Area Fondamenti & Clinica",
        duration: "40 min"
      }
    ]
  },
  {
    id: 4,
    romanId: "IV",
    title: "Meccanismi Effettori & Complemento",
    subtitle: "Cascata Enzimatica del Complemento, Recettori Fc e Biotecnologia degli Anticorpi",
    shortTitle: "Effettori Umorali & Complemento",
    description: "Le armi biochimiche dell'immunità umorale e del siero: attivazione della via classica, lectinica ed alternativa del complemento con formazione del poro litico MAC (C5b-9) e regolazione (C1-INH, DAF, CD59); recettori complementari (CR1-CR4) nell'opsonizzazione e nella clearance degli immunocomplessi; funzioni effettrici degli isotipi anticorpali, recettori Fc cellulari (FcγR, FcRn, FcεR, pIgR) e ingegneria biotecnologica dei monoclonali (costrutti nudi, coniugati ADC e bispecifici BiTE).",
    iconName: "Flame",
    badgeColor: {
      bg: "bg-amber-600 text-white",
      text: "text-amber-700 dark:text-amber-300",
      border: "border-amber-300 dark:border-amber-700",
      accent: "bg-amber-500",
      ring: "ring-amber-400",
      lightBg: "bg-amber-50 text-amber-800",
      darkBg: "dark:bg-amber-950/60 dark:text-amber-300",
      gradient: "from-amber-600 to-orange-700"
    },
    lessonNumbers: [15, 16, 17, 18],
    sections: [
      {
        code: "4.1",
        lessonNumber: 15,
        anchorId: "sec-4-complemento-cascata",
        title: "Biochimica delle 3 Vie del Complemento, Convertasi, Legame Tioestere & Complesso MAC",
        shortTitle: "Vie Complemento & Poro MAC",
        topicsCount: 10,
        professor: "Prof.ssa Morrone & Prof.ssa Soriani",
        duration: "60 min"
      },
      {
        code: "4.2",
        lessonNumber: 16,
        anchorId: "sec-4-recettori-patologie-comp",
        title: "Recettori del Complemento (CR1-CR4), Anafilotossine, Patologie (HAE, EPN, aHUS) & Evasione",
        shortTitle: "Recettori CR & Patologie (HAE, EPN)",
        topicsCount: 10,
        professor: "Prof.ssa Morrone",
        duration: "55 min"
      },
      {
        code: "4.3",
        lessonNumber: 17,
        anchorId: "sec-4-fcr-funzioni",
        title: "Classi Anticorpali, Recettori Fc (FcγR, FcεR, FcRn, pIgR) & Glicosilazione Asn297",
        shortTitle: "Classi Ig, Recettori Fc & Asn297",
        topicsCount: 10,
        professor: "Prof.ssa Rosa Molfetta",
        duration: "55 min"
      },
      {
        code: "4.4",
        lessonNumber: 18,
        anchorId: "sec-4-mabs-ingegneria",
        title: "Anticorpi Monoclonali Terapeutici: Ibridomi HAT, Umanizzazione, BiTE, Coniugati ADC & Teranostica",
        shortTitle: "mAbs, BiTE, ADC & Teranostica",
        topicsCount: 10,
        professor: "Prof.ssa Rosa Molfetta",
        duration: "60 min"
      },
      {
        code: "4.5",
        lessonNumber: 15,
        anchorId: "sec-4-verifica",
        title: "Tavola Sinottica Comparativa Master, Batteria di Quiz d'Esame e Flashcard per Ripasso Attivo",
        shortTitle: "Tavola Master, Quiz & Flashcard",
        topicsCount: 6,
        professor: "Area Effettori & Biotecnologie",
        duration: "40 min"
      }
    ]
  },
  {
    id: 5,
    romanId: "V",
    title: "Immunità Mucosale, Microbiota & Infezioni",
    subtitle: "GALT, Barriere Mucosali, Microbiota Intestino-Cervello e Vaccinologia",
    shortTitle: "Immunità Mucosale & Microbiota",
    description: "L'interfaccia con il mondo esterno e gli ecosistemi commensali: architettura immunologica del GALT, cellule M, secrezione transepiteliale di IgA dimeriche e tolleranza orale; l'asse bidirezionale microbiota-intestino-cervello e la regolazione neuro-immune tramite metaboliti microbici (SCFA); meccanismi integrati di difesa contro batteri, parassiti e virus con strategie di immunoevasione; principi e piattaforme della moderna vaccinologia.",
    iconName: "Globe",
    badgeColor: {
      bg: "bg-teal-600 text-white",
      text: "text-teal-700 dark:text-teal-300",
      border: "border-teal-300 dark:border-teal-700",
      accent: "bg-teal-500",
      ring: "ring-teal-400",
      lightBg: "bg-teal-50 text-teal-800",
      darkBg: "dark:bg-teal-950/60 dark:text-teal-300",
      gradient: "from-teal-600 to-emerald-700"
    },
    lessonNumbers: [22, 23, 24, 25],
    sections: [
      {
        code: "5.1",
        lessonNumber: 23,
        anchorId: "sec-5-mucosale-galt",
        title: "Architettura del Sistema Immunitario Mucosale (MALT/GALT), Campionamento Antigenico, Homing Intestinale & Biologia delle sIgA",
        shortTitle: "MALT/GALT, Homing & sIgA",
        topicsCount: 12,
        professor: "Prof.ssa Alessandra Soriani",
        duration: "55 min"
      },
      {
        code: "5.2",
        lessonNumber: 25,
        anchorId: "sec-5-microbiota-gut-brain",
        title: "Microbiota Intestinale, Immunometabolismo degli SCFA & le 5 Vie di Comunicazione dell'Asse Gut-Brain",
        shortTitle: "Microbiota & Asse Gut-Brain",
        topicsCount: 14,
        professor: "Prof.ssa Alessandra Soriani",
        duration: "60 min"
      },
      {
        code: "5.3",
        lessonNumber: 22,
        anchorId: "sec-5-infezioni-batteri-funghi-elminti",
        title: "Difesa Integrata contro Infezioni Batteriche, Fungine ed Elmintiche: Meccanismi Effettori & Immunoevasione Microbica",
        shortTitle: "Batteri, Funghi, Elminti & Evasione",
        topicsCount: 15,
        professor: "Prof.ssa Alessandra Soriani",
        duration: "65 min"
      },
      {
        code: "5.4",
        lessonNumber: 24,
        anchorId: "sec-5-infezioni-virus-evasione",
        title: "Cinetica Trifasica della Risposta Antivirale, Omeostasi NK-Tfh & Strategie Molecolari di Immunoevasione Virale",
        shortTitle: "Risposta Antivirale & Evasione Virale",
        topicsCount: 14,
        professor: "Prof.ssa Alessandra Soriani",
        duration: "60 min"
      },
      {
        code: "5.5",
        lessonNumber: 24,
        anchorId: "sec-5-vaccinologia",
        title: "Vaccinologia Razionale, Piattaforme Classiche, Vaccini a mRNA-LNP, Vaccinologia Inversa & Immunità di Gregge",
        shortTitle: "Vaccinologia Razionale & mRNA-LNP",
        topicsCount: 16,
        professor: "Prof.ssa Alessandra Soriani",
        duration: "65 min"
      },
      {
        code: "5.6",
        lessonNumber: 22,
        anchorId: "sec-5-verifica",
        title: "Tavola Sinottica Comparativa Master, Batteria di Quiz d'Esame e Flashcard per Ripasso Attivo",
        shortTitle: "Tavola Master, Quiz & Flashcard",
        topicsCount: 10,
        professor: "Prof.ssa Alessandra Soriani",
        duration: "45 min"
      }
    ]
  },
  {
    id: 6,
    romanId: "VI",
    title: "Ipersensibilità & Immunopatologia",
    subtitle: "Danno Tessutale Immuno-Mediato secondo la Classificazione di Gell e Coombs",
    shortTitle: "Ipersensibilità & Immunopatologia",
    description: "Quando la risposta immunitaria genera malattia: ipersensibilità di Tipo I (immediata/allergica) mediata da IgA/IgE, mastociti e citochine Th2 (IL-4/IL-5/IL-13) con clinica di asma e anafilassi; Tipo II con danno citotossico tissutale anticorpo-mediato (ADCC e complemento); Tipo III da deposizione intravascolare di immunocomplessi circolanti (vasculiti, nefriti); Tipo IV cellulo-mediata (DTH) con reazioni granulomatose, psoriasi, IBD e celiachia.",
    iconName: "AlertTriangle",
    badgeColor: {
      bg: "bg-rose-600 text-white",
      text: "text-rose-700 dark:text-rose-300",
      border: "border-rose-300 dark:border-rose-700",
      accent: "bg-rose-500",
      ring: "ring-rose-400",
      lightBg: "bg-rose-50 text-rose-800",
      darkBg: "dark:bg-rose-950/60 dark:text-rose-300",
      gradient: "from-rose-600 to-red-700"
    },
    lessonNumbers: [26, 27, 28],
    sections: [
      {
        code: "6.1",
        lessonNumber: 26,
        anchorId: "sec-6-gell-coombs-tipo1-sens",
        title: "Classificazione di Gell e Coombs, Biochimica degli Allergeni (Der p 1), Allarmine & Armamento di FcεRI",
        shortTitle: "Gell & Coombs, Allergeni & FcεRI",
        topicsCount: 12,
        professor: "Prof. Fabrizio Antonangeli",
        duration: "55 min"
      },
      {
        code: "6.2",
        lessonNumber: 26,
        anchorId: "sec-6-tipo1-scatenamento-clinica",
        title: "Fase di Scatenamento, Cascata dei Mediatori Mastocitari, Eosinofili, Asma Grave, Anafilassi & Farmaci Biologici",
        shortTitle: "Mediatori Mastocitari, Asma & Anafilassi",
        topicsCount: 15,
        professor: "Prof. Fabrizio Antonangeli",
        duration: "65 min"
      },
      {
        code: "6.3",
        lessonNumber: 27,
        anchorId: "sec-6-tipo2",
        title: "Ipersensibilità di Tipo II: Citotossicità Anticorpale, Sistema AB0, Sistema Rh/MEN, Test di Coombs & Disfunzioni Recettoriali",
        shortTitle: "Tipo II: Citotossicità, AB0/Rh & Recettori",
        topicsCount: 14,
        professor: "Prof.ssa Ricciarda Galandrini",
        duration: "60 min"
      },
      {
        code: "6.4",
        lessonNumber: 27,
        anchorId: "sec-6-tipo3",
        title: "Ipersensibilità di Tipo III: Fisica della Curva di Heidelberger-Kendall, Vasculiti da Immunocomplessi & Malattia da Siero",
        shortTitle: "Tipo III: Immunocomplessi & Malattia da Siero",
        topicsCount: 12,
        professor: "Prof.ssa Ricciarda Galandrini",
        duration: "55 min"
      },
      {
        code: "6.5",
        lessonNumber: 28,
        anchorId: "sec-6-tipo4",
        title: "Ipersensibilità di Tipo IV: Sottotipi di Pichler (IVa–IVd), Dermatite da Contatto, Mantoux vs IGRA & Malattia Celiaca",
        shortTitle: "Tipo IV: Pichler, DAC, Mantoux & Celiachia",
        topicsCount: 16,
        professor: "Prof.ssa Alessandra Soriani",
        duration: "65 min"
      },
      {
        code: "6.6",
        lessonNumber: 26,
        anchorId: "sec-6-verifica",
        title: "Tavola Sinottica Comparativa Master, Batteria di Quiz d'Esame e Flashcard per Ripasso Attivo",
        shortTitle: "Tavola Master, Quiz & Flashcard",
        topicsCount: 10,
        professor: "Prof. Fabrizio Antonangeli",
        duration: "45 min"
      }
    ]
  },
  {
    id: 7,
    romanId: "VII",
    title: "Tolleranza & Autoimmunità",
    subtitle: "Mantenimento del Self, Immunologia dei Trapianti e Malattie Autoimmuni Cliniche",
    shortTitle: "Tolleranza & Autoimmunità",
    description: "I meccanismi che impediscono l'attacco ai tessuti propri e le conseguenze del loro fallimento: immunologia dei trapianti d'organo e di cellule staminali emopoietiche (alloriconoscimento diretto/indiretto, GVHD e rigetto); basi molecolari della tolleranza centrale timica e periferica (linfociti Treg, asse CTLA-4, IDO, anergia); sindromi monogeniche (APS-1, IPEX, ALPS); eziopatogenesi delle patologie autoimmuni (LES, Diabete Tipo 1, Sclerosi Multipla, Artrite Reumatoide) e basi genetiche del dimorfismo di genere (lncRNA Xist).",
    iconName: "ShieldAlert",
    badgeColor: {
      bg: "bg-purple-600 text-white",
      text: "text-purple-700 dark:text-purple-300",
      border: "border-purple-300 dark:border-purple-700",
      accent: "bg-purple-500",
      ring: "ring-purple-400",
      lightBg: "bg-purple-50 text-purple-800",
      darkBg: "dark:bg-purple-950/60 dark:text-purple-300",
      gradient: "from-purple-600 to-violet-800"
    },
    lessonNumbers: [29, 30, 31],
    sections: [
      {
        code: "7.1",
        lessonNumber: 29,
        anchorId: "sec-7-trapianti-alloriconoscimento",
        title: "Immunologia dei Trapianti: Istocompatibilità, Vie di Alloriconoscimento (Diretta, Indiretta, Semidiretta) & Tipi di Rigetto",
        shortTitle: "Alloriconoscimento & Rigetto",
        topicsCount: 14,
        professor: "Prof.ssa Alessandra Soriani",
        duration: "60 min"
      },
      {
        code: "7.2",
        lessonNumber: 29,
        anchorId: "sec-7-farmaci-trapianto-cse",
        title: "Farmacologia Immunosoppressiva & Trapianto HSCT: Antigeni Minori (H-Y), GVHD Acuta/Cronica & Effetto GvL (KIR)",
        shortTitle: "Farmaci Antirigetto & HSCT (GVHD/GvL)",
        topicsCount: 15,
        professor: "Prof.ssa Alessandra Soriani",
        duration: "65 min"
      },
      {
        code: "7.3",
        lessonNumber: 30,
        anchorId: "sec-7-tolleranza-monogeniche",
        title: "Architettura della Tolleranza Centrale (AIRE) e Periferica (Treg, Anergia, AICD) & le 4 Sindromi Monogeniche (APS-1, IPEX, ALPS, CHAI)",
        shortTitle: "Tolleranza & 4 Sindromi Monogeniche",
        topicsCount: 16,
        professor: "Prof.ssa Ricciarda Galandrini",
        duration: "65 min"
      },
      {
        code: "7.4",
        lessonNumber: 30,
        anchorId: "sec-7-eziopatogenesi-xist",
        title: "Eziopatogenesi Multifattoriale dell'Autoimmunità: HLA, Dimorfismo Sessuale (Complesso lncRNA Xist) & Trigger Ambientali",
        shortTitle: "Genetica HLA, Dimorfismo Xist & Trigger",
        topicsCount: 14,
        professor: "Prof.ssa Ricciarda Galandrini",
        duration: "60 min"
      },
      {
        code: "7.5",
        lessonNumber: 31,
        anchorId: "sec-7-autoimmuni-clinica",
        title: "Fisiopatologia delle Grandi Malattie Autoimmuni: LES (IFN Signature/BAFF), Artrite Reumatoide, Sclerosi Multipla & Diabete Tipo 1",
        shortTitle: "Patologie: LES, AR, SM & T1D",
        topicsCount: 18,
        professor: "Prof.ssa Ricciarda Galandrini",
        duration: "70 min"
      },
      {
        code: "7.6",
        lessonNumber: 29,
        anchorId: "sec-7-verifica",
        title: "Tavola Sinottica Master dei Bersagli Terapeutici, Batteria di Quiz d'Esame e Flashcard per Ripasso Attivo",
        shortTitle: "Tavola Master, Quiz & Flashcard",
        topicsCount: 10,
        professor: "Prof.ssa Alessandra Soriani",
        duration: "45 min"
      }
    ]
  },
  {
    id: 8,
    romanId: "VIII",
    title: "Immunologia Oncologica & Immunodeficienze",
    subtitle: "Immunoediting Tumorale, Terapie Cellulari CAR-T, Checkpoint e Pandemia da HIV/AIDS",
    shortTitle: "Onco-Immunologia & AIDS",
    description: "Le grandi sfide dell'immunologia clinica contemporanea: immunosorveglianza oncologica, ciclo cancro-immunità in 7 fasi, meccanismi di immunoediting (eliminazione, equilibrio, fuga), immunoterapia con inibitori dei checkpoint (anti-CTLA-4, anti-PD-1/PD-L1) e cellule CAR-T con gestione della CRS; virologia immunologica dell'HIV-1, cinetica multifasica dell'infezione, tropismo R5/X4, reservoir latente, meccanismi di evasione (Nef/Tat) e strategia terapeutica HAART.",
    iconName: "Activity",
    badgeColor: {
      bg: "bg-red-600 text-white",
      text: "text-red-700 dark:text-red-300",
      border: "border-red-300 dark:border-red-700",
      accent: "bg-red-500",
      ring: "ring-red-400",
      lightBg: "bg-red-50 text-red-800",
      darkBg: "dark:bg-red-950/60 dark:text-red-300",
      gradient: "from-red-600 to-rose-800"
    },
    lessonNumbers: [32, 33],
    sections: [
      {
        code: "8.1",
        lessonNumber: 32,
        anchorId: "sec-8-immunoediting-antigens",
        title: "Dall'Immunosorveglianza all'Immunoediting Tumorale (Le 3 E di Schreiber) & Classificazione degli Antigeni (TSA/TAA)",
        shortTitle: "Immunoediting & Antigeni TSA/TAA",
        topicsCount: 14,
        professor: "Prof.ssa Ricciarda Galandrini",
        duration: "60 min"
      },
      {
        code: "8.2",
        lessonNumber: 32,
        anchorId: "sec-8-tme-checkpoint",
        title: "Il Ciclo Cancro-Immunità, il Microambiente Tumorale (TME) & Inibitori dei Checkpoint (Premio Nobel 2018)",
        shortTitle: "Ciclo Cancro, TME & Checkpoint",
        topicsCount: 16,
        professor: "Prof.ssa Ricciarda Galandrini",
        duration: "65 min"
      },
      {
        code: "8.3",
        lessonNumber: 32,
        anchorId: "sec-8-cart-adoptive",
        title: "Terapie Cellulari Adottive: Linfociti Infiltranti (TILs) & Ingegneria dei CAR-T (Gen 1ª–4ª, Tossicità CRS/ICANS)",
        shortTitle: "CAR-T Cells, Generazioni & CRS",
        topicsCount: 15,
        professor: "Prof.ssa Ricciarda Galandrini",
        duration: "65 min"
      },
      {
        code: "8.4",
        lessonNumber: 32,
        anchorId: "sec-8-pid-trec",
        title: "Quadro Sinottico delle Immunodeficienze Primitive (PID / Inborn Errors of Immunity) & Screening Neonatale TREC/KREC",
        shortTitle: "Immunodeficienze Primitive & TREC",
        topicsCount: 12,
        professor: "Prof.ssa Ricciarda Galandrini",
        duration: "55 min"
      },
      {
        code: "8.5",
        lessonNumber: 33,
        anchorId: "sec-8-hiv-aids",
        title: "Immunodeficienze Acquisite: Biologia di HIV-1, Nef, Tropismo R5/X4, Storia Trifasica, Piroptosi & Reservoir Latente",
        shortTitle: "HIV-1, Nef, Patogenesi & Reservoir",
        topicsCount: 18,
        professor: "Prof. Fabrizio Antonangeli",
        duration: "70 min"
      },
      {
        code: "8.6",
        lessonNumber: 32,
        anchorId: "sec-8-verifica",
        title: "Tavola Sinottica Master di Onco-Immunologia ed HIV, Batteria di Quiz d'Esame e Flashcard per Ripasso Attivo",
        shortTitle: "Tavola Master, Quiz & Flashcard",
        topicsCount: 10,
        professor: "Prof.ssa Ricciarda Galandrini",
        duration: "45 min"
      }
    ]
  }
];

/**
 * Sequential reading order in the book across chapters
 */
export const BOOK_LESSON_SEQUENCE: number[] = [
  0,
  1, 3, 4, 5, 21,
  6, 7, 8, 9, 10, 11,
  2, 12, 13, 14, 19, 20,
  15, 16, 17, 18,
  22, 23, 24, 25,
  26, 27, 28,
  29, 30, 31,
  32, 33
];

/**
 * Find chapter metadata by lesson number
 */
export function getChapterByLessonNumber(lessonNum: number): BookChapterDefinition {
  for (const chapter of BOOK_CHAPTERS) {
    if (chapter.lessonNumbers.includes(lessonNum)) {
      return chapter;
    }
  }
  return BOOK_CHAPTERS[1]; // Fallback to Chapter 1
}

/**
 * Find the section object inside the chapter for a given lesson
 */
export function getSectionByLessonNumber(lessonNum: number) {
  const chapter = getChapterByLessonNumber(lessonNum);
  const sec = chapter.sections.find((s) => s.lessonNumber === lessonNum);
  return {
    chapter,
    section: sec || chapter.sections[0]
  };
}

/**
 * Get Previous and Next lessons in the continuous digital book order
 */
export function getSurroundingLessonsInBook(currentLesson: number) {
  const currentIndex = BOOK_LESSON_SEQUENCE.indexOf(currentLesson);
  
  const prevLesson = currentIndex > 0 ? BOOK_LESSON_SEQUENCE[currentIndex - 1] : null;
  const nextLesson = currentIndex >= 0 && currentIndex < BOOK_LESSON_SEQUENCE.length - 1 ? BOOK_LESSON_SEQUENCE[currentIndex + 1] : null;

  return {
    prevLesson,
    prevInfo: prevLesson !== null ? getSectionByLessonNumber(prevLesson) : null,
    nextLesson,
    nextInfo: nextLesson !== null ? getSectionByLessonNumber(nextLesson) : null,
    currentPosition: currentIndex >= 0 ? currentIndex + 1 : 1,
    totalCount: BOOK_LESSON_SEQUENCE.length
  };
}
