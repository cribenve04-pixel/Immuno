import { getSectionByLessonNumber } from './bookChapters';

export interface LessonMeta {
  number: number;
  id: string;
  title: string;
  subtitle?: string;
  dateStr: string;
  professor: string;
  durationMin?: number;
  duration?: string;
  readTimeMin?: number;
  sectionsCount?: number;
  isAvailable?: boolean;
  topics: string[];
  summary: string;
  chapterNumber?: number;
  chapterTitle?: string;
  chapterSubtitle?: string;
  sectionCode?: string;
}

const RAW_33_LESSONS: LessonMeta[] = [
  {
    number: 0,
    id: "lez-0",
    title: "Fondamenti del Sistema Immunitario, Ontogenesi Ematopoietica e Architettura degli Organi Linfoidi",
    subtitle: "Logica Evolutiva, Nicchia Midollare, Organi Linfoidi Primari e Secondari, Teoria di Burnet",
    professor: "Prof.ssa Galandrini / Soriani / Molfetta / Morrone / Rinaldi",
    dateStr: "Inizio Corso",
    duration: "45 min",
    readTimeMin: 45,
    sectionsCount: 6,
    isAvailable: true,
    chapterNumber: 0,
    chapterTitle: "Fondamenti del Sistema Immunitario, Ontogenesi Ematopoietica e Architettura degli Organi Linfoidi",
    topics: [
      "Logica Evolutiva & Cinetica",
      "Trained Immunity & Riprogrammazione Epigenetica",
      "HSC CD34+ & Nicchia CXCL12/CXCR4",
      "Atlante Mieloide & Cellule Dendritiche",
      "Organi Primari: Midollo & Timo (AIRE)",
      "Organi Secondari: Linfonodi, Milza (OPSI) & MALT",
      "Postulati di Burnet & Curva a U della Vita",
      "Tabella Master a 12 Parametri"
    ],
    summary: "Trattato fondamentale e bussola strutturale per l'esame orale: cooperazione innata-adattativa, memoria innata, nicchie midollari, istruzione timica, microanatomia linfonodale/splenica e dinamica immunitaria nell'arco della vita."
  },
  {
    number: 1,
    id: "lez-1",
    title: "Barriere Epiteliali, Peptidi Antimicrobici e Meccanismi Fisiologici di Difesa",
    subtitle: "Inizio Capitolo 1: Immunità Innata, Sensori PAMP/DAMP ed Effettori Mieloidi",
    dateStr: "1 Ottobre 2025",
    professor: "Prof.ssa Ricciarda Galandrini",
    durationMin: 45,
    isAvailable: true,
    chapterNumber: 1,
    chapterTitle: "Immunità Innata, Sensori Molecolari PAMP/DAMP ed Effettori Mieloidi",
    topics: ["Tight junctions", "Defensine α e β", "Catelicidina LL-37", "Lisozima", "Lattoferrina", "Calprotectina"],
    summary: "Anatomia funzionale delle barriere epiteliali, peptidi cationici antimicrobici (defensine e LL-37), enzimi litici e meccanismi di immunità nutrizionale."
  },
  {
    number: 2,
    id: "lez-2",
    title: "La Famiglia dei Toll-Like Receptors (TLR) e Vie di Trasduzione",
    dateStr: "2 Ottobre 2025",
    professor: "Prof.ssa Ricciarda Galandrini",
    durationMin: 50,
    isAvailable: true,
    chapterNumber: 1,
    chapterTitle: "Immunità Innata, Sensori Molecolari PAMP/DAMP ed Effettori Mieloidi",
    topics: ["TLR4/MD-2", "TLR2/1 e TLR2/6", "TLR5", "TLR endosomiali (TLR3, 7, 8, 9)", "Via MyD88-dipendente", "Via TRIF-dipendente", "IRF3/IRF7"],
    summary: "Riconoscimento dei PAMPs/DAMPs via TLR di superficie ed endosomiali, complessi adattatori MyD88/TRIF, attivazione di NF-κB e produzione di IFN di Tipo I."
  },
  {
    number: 3,
    id: "lez-3",
    title: "Sensori Intracellulari (NLR, RLR, STING), Inflammasoma NLRP3 e Piroptosi",
    dateStr: "6 Ottobre 2025",
    professor: "Prof.ssa Alessandra Soriani",
    durationMin: 50,
    isAvailable: true,
    chapterNumber: 1,
    chapterTitle: "Immunità Innata, Sensori Molecolari PAMP/DAMP ed Effettori Mieloidi",
    topics: ["NOD1 e NOD2", "Morbo di Crohn", "RIG-I e MDA5 (MAVS)", "Asse cGAS-STING", "Inflammasoma NLRP3", "Caspasi-1", "Gasdermina D", "Piroptosi"],
    summary: "Riconoscimento citosolico via NOD e sensori di acido nucleico (RIG-I/STING), biochimica dell'inflammasoma NLRP3, clivaggio della Gasdermina D e morte cellulare piroptotica."
  },
  {
    number: 4,
    id: "lez-4",
    title: "Fagocitosi, Completo NADPH Ossidasi, Burst Respiratorio e NETosi",
    dateStr: "8 Ottobre 2025",
    professor: "Prof.ssa Ricciarda Galandrini",
    durationMin: 50,
    isAvailable: true,
    chapterNumber: 1,
    chapterTitle: "Immunità Innata, Sensori Molecolari PAMP/DAMP ed Effettori Mieloidi",
    topics: ["Recettori Scavenger", "TIM-4", "Complesso NADPH ossidasi (phox)", "Mieloperossidasi (MPO)", "Malattia Granulomatosa Cronica (CGD)", "Enzima PAD4", "NETosi"],
    summary: "Meccanismi di fagocitosi ed efferocitosi, biochimica del complesso NADPH ossidasi, generazione di radicali liberi dell'ossigeno, patogenesi della CGD e trappole extracellulari (NETs)."
  },
  {
    number: 5,
    id: "lez-5",
    title: "Il Sistema del Complemento, Regolazione Biochimica e Quadri Clinici",
    subtitle: "Inizio Capitolo 2: Complemento, Traffico Cellulare & Homing",
    dateStr: "9 Ottobre 2025",
    professor: "Prof.ssa Morrone",
    durationMin: 55,
    isAvailable: true,
    chapterNumber: 2,
    chapterTitle: "Il Sistema del Complemento, Traffico Leucocitario e Morfologia Funzionale degli Organi Linfoidi",
    topics: ["Via Classica, Lectinica ed Alternativa", "Convertasi e MAC (C5b-9)", "Anafilatossine (C5a, C3a)", "C1-INH", "DAF (CD55) e CD59", "Emoglobinuria Parossistica Notturna (EPN)", "Angioedema Ereditario"],
    summary: "Vie di attivazione del complemento, generazione delle convertasi e del poro MAC, proteine regolatrici solubili/membrana e relative patologie (EPN e Angioedema Ereditario)."
  },
  {
    number: 6,
    id: "lez-6",
    title: "Organi Linfoidi Secondari (SLO) e Cascata dell'Extravasazione Leucocitaria",
    dateStr: "13 Ottobre 2025",
    professor: "Prof.ssa Morrone",
    durationMin: 50,
    isAvailable: true,
    chapterNumber: 2,
    chapterTitle: "Il Sistema del Complemento, Traffico Leucocitario e Morfologia Funzionale degli Organi Linfoidi",
    topics: ["Architettura Linfonodale e Splenica", "Venule HEV", "Rolling (Selectine/PNAd)", "Inside-out signaling (CCR7/CCL21)", "Adesione salda (LFA-1/ICAM-1)", "Asse CXCR5/CXCL13", "S1PR1 e CD69"],
    summary: "Morfologia funzionale di linfonodi e milza, dinamica dell'extravasazione attraverso le venule HEV (rolling, attivazione, diapedesi) e meccanismi di segregazione/egresso."
  },
  {
    number: 7,
    id: "lez-7",
    title: "Ontogenesi e Maturazione dei Linfociti B nel Midollo Osseo",
    subtitle: "Inizio Capitolo 4: Ontogenesi, Ricombinazione Somatica V(D)J e Formazione del Repertorio B e T",
    dateStr: "15 Ottobre 2025",
    professor: "Prof.ssa Rosa Molfetta",
    durationMin: 55,
    isAvailable: true,
    chapterNumber: 4,
    chapterTitle: "Ontogenesi, Ricombinazione Somatica V(D)J e Formazione del Repertorio B e T",
    topics: ["Nicchie stromali e Pax-5", "Stadi Pro-B e Pre-B", "Pre-BCR (VpreB/λ5)", "Esclusione allelica", "Editing recettoriale", "Tolleranza centrale B"],
    summary: "Sviluppo midollare delle cellule B, controllo trascrizionale via Pax-5, assemblaggio del pre-BCR, checkpoint di selezione centrale e meccanismo di salvataggio via editing recettoriale."
  },
  {
    number: 8,
    id: "lez-8",
    title: "Basi Molecolari della Ricombinazione Genica V(D)J e Sindromi da Deficit",
    dateStr: "16 Ottobre 2025",
    professor: "Prof.ssa Rosa Molfetta",
    durationMin: 55,
    isAvailable: true,
    chapterNumber: 4,
    chapterTitle: "Ontogenesi, Ricombinazione Somatica V(D)J e Formazione del Repertorio B e T",
    topics: ["Sequenze RSS 12/23", "Ricombinasi RAG1/RAG2", "Forcine Artemis", "Nucleotidi P ed N (TdT)", "Unione NHEJ (Ku70/Ku80)", "SCID da difetto RAG/Artemis", "Sindrome di Omenn"],
    summary: "Meccanismo enzimatico della ricombinazione V(D)J nei loci delle immunoglobuline e del TCR, generazione della diversità giunzionale e immunodeficienze da difetti dei geni RAG o di riparazione."
  },
  {
    number: 9,
    id: "lez-9",
    title: "Genetica e Architettura Molecolare del Complesso HLA (MHC I e II)",
    subtitle: "Inizio Capitolo 3: Genetica HLA, Processazione dell'Antigene e Presentazione Ristretta",
    dateStr: "20 Ottobre 2025",
    professor: "Prof.ssa Rosa Molfetta",
    durationMin: 55,
    isAvailable: true,
    chapterNumber: 3,
    chapterTitle: "Genetica HLA, Processazione dell'Antigene e Presentazione Ristretta",
    topics: ["Cromosoma 6p21.3", "Loci HLA I e II", "Polimorfismo e Codominanza", "Struttura MHC-I (α1-α3 + β2m)", "Struttura MHC-II (α1-α2/β1-β2)", "Basi stereochimiche delle tasche", "Associazioni HLA-Malattia"],
    summary: "Organizzazione genomica del complesso HLA, struttura tridimensionale comparata tra MHC-I e MHC-II, basi del legame peptidico promiscuo e correlazioni clinico-patologiche."
  },
  {
    number: 10,
    id: "lez-10",
    title: "Vie di Processazione Antigenica (Citosolica, Endosomiale) e Cross-Presentazione",
    dateStr: "22 Ottobre 2025",
    professor: "Prof.ssa Rosa Molfetta",
    durationMin: 55,
    isAvailable: true,
    chapterNumber: 3,
    chapterTitle: "Genetica HLA, Processazione dell'Antigene e Presentazione Ristretta",
    topics: ["Immunoproteasoma (LMP2/LMP7)", "Trasportatore TAP1/TAP2", "Tapasina e PLC", "Catena Invariante (CD74)", "CLIP e HLA-DM", "Cross-presentazione cDC1", "CD1 e MR1"],
    summary: "Biosintesi e caricamento dei peptidi su MHC-I (via citosolica) e MHC-II (via esogena), meccanismi di immunoevasione virale, cross-presentazione dendritica e presentazione non peptidica su CD1/MR1."
  },
  {
    number: 11,
    id: "lez-11",
    title: "Ontogenesi e Selezione Timica dei Linfociti T",
    dateStr: "23 Ottobre 2025",
    professor: "Prof.ssa Ricciarda Galandrini",
    durationMin: 55,
    isAvailable: true,
    chapterNumber: 4,
    chapterTitle: "Ontogenesi, Ricombinazione Somatica V(D)J e Formazione del Repertorio B e T",
    topics: ["Stadi DN1-DN4 e Notch-1", "Pre-TCR e checkpoint β", "Transizione a Doppio Positivo (CD4+CD8+)", "Selezione positiva (cTEC)", "Selezione negativa (mTEC)", "Fattore AIRE e Sindrome APECED"],
    summary: "Stadi maturativi dei timociti, controllo della ricombinazione TCR-β, selezione positiva corticale per restrizione MHC, selezione negativa midollare ed espressione di antigeni periferici via AIRE."
  },
  {
    number: 12,
    id: "lez-12",
    title: "Struttura del Recettore T (TCR-CD3) e Architettura della Sinapsi Immunologica",
    dateStr: "27 Ottobre 2025",
    professor: "Prof.ssa Ricciarda Galandrini",
    durationMin: 55,
    isAvailable: true,
    chapterNumber: 4,
    chapterTitle: "Ontogenesi, Ricombinazione Somatica V(D)J e Formazione del Repertorio B e T",
    topics: ["Eterodimero TCR α/β", "Anse CDR1-3", "Complesso CD3 (10 motivi ITAM)", "Sinapsi Immunologica (SMAC)", "c-SMAC, p-SMAC e d-SMAC", "Segregazione delle fosfatasi CD45"],
    summary: "Architettura molecolare dell'eterodimero TCR e delle catene di trasduzione CD3/ζ, bioarchitettura della sinapsi immunologica (SMAC) e modello di innesco per segregazione cinetica."
  },
  {
    number: 13,
    id: "lez-13",
    title: "Cascate di Trasduzione Intracellulare a Valle del TCR",
    dateStr: "29 Ottobre 2025",
    professor: "Prof.ssa Ricciarda Galandrini",
    durationMin: 55,
    isAvailable: true,
    chapterNumber: 4,
    chapterTitle: "Ontogenesi, Ricombinazione Somatica V(D)J e Formazione del Repertorio B e T",
    topics: ["Tirosin-chinasi Lck e ZAP-70", "Adattatore LAT", "PLC-γ1", "Via Calcio/Calcineurina/NFAT", "Via PKC-θ/NF-κB", "Via MAP-chinasi/AP-1", "Ciclosporina A e Tacrolimus"],
    summary: "Segnalsoma prossimale a valle del TCR, divergenza nelle tre principali vie metaboliche e trascrizionali (NFAT, NF-κB, AP-1) e target della terapia immunosoppressiva da inibitori della calcineurina."
  },
  {
    number: 14,
    id: "lez-14",
    title: "Costimolazione B7/CD28, Anergia Clonale e Checkpoint Inibitori CTLA-4 e PD-1",
    subtitle: "Inizio Capitolo 5: Regolazione del Segnale T, Differenziamento Th e Tolleranza Periferica",
    dateStr: "30 Ottobre 2025",
    professor: "Prof.ssa Ricciarda Galandrini",
    durationMin: 55,
    isAvailable: true,
    chapterNumber: 5,
    chapterTitle: "Regolazione del Segnale T, Differenziamento Th e Tolleranza Periferica",
    topics: ["Segnale 1 + Segnale 2", "CD28 vs B7-1/B7-2", "Induzione di Anergia (Cbl-b)", "CTLA-4 (Trans-endocitosi di B7)", "Abatacept", "Asse PD-1/PD-L1", "Fosfatasi SHP-2", "T-cell exhaustion"],
    summary: "Integrazione del doppio segnale di attivazione T, meccanismi di anergia da assenza di costimolo, funzione regolatoria precoce di CTLA-4 e soppressione tissutale/tumorale mediante l'asse PD-1/PD-L1."
  },
  {
    number: 15,
    id: "lez-15",
    title: "Differenziamento e Funzioni Effettrici delle Sottopopolazioni T Helper (Th1, Th2, Th17)",
    dateStr: "3 Novembre 2025",
    professor: "Prof.ssa Alessandra Soriani",
    durationMin: 60,
    isAvailable: true,
    chapterNumber: 5,
    chapterTitle: "Regolazione del Segnale T, Differenziamento Th e Tolleranza Periferica",
    topics: ["Th1 (IL-12, STAT4, T-bet, IFN-γ, Macrofagi M1)", "Th2 (IL-4, STAT6, GATA-3, Eosinofili, Macrofagi M2)", "Th17 (IL-6/TGF-β, STAT3, RORγt, IL-17/IL-22, Neutrofili)"],
    summary: "Master regulator trascrizionali, segnali citochinici e profili effettori dei linfociti Th1 (patogeni intracellulari), Th2 (parassiti/atopia) e Th17 (funghi e batteri mucosali)."
  },
  {
    number: 16,
    id: "lez-16",
    title: "Tolleranza Periferica e Biologia Molecolare dei Linfociti T Regolatori (Treg)",
    dateStr: "5 Novembre 2025",
    professor: "Prof.ssa Alessandra Soriani",
    durationMin: 60,
    isAvailable: true,
    chapterNumber: 5,
    chapterTitle: "Regolazione del Segnale T, Differenziamento Th e Tolleranza Periferica",
    topics: ["tTreg vs pTreg", "Fenotipo CD4+CD25+CD127low", "Fattore FoxP3", "Deplezione metabolica di IL-2", "Ectonucleotidasi CD39/CD73 (Adenosina)", "IL-10 e TGF-β", "Sindrome IPEX"],
    summary: "Ontogenesi e marcatori identitari dei Treg, meccanismi multipli di soppressione immunitaria (deplezione di IL-2, generazione di adenosina, citochine inibitorie) e immunopatologia della sindrome IPEX."
  },
  {
    number: 17,
    id: "lez-17",
    title: "Meccanismi Molecolari della Lisi Citotossica nei CTL e nelle Cellule NK",
    subtitle: "Inizio Capitolo 6: Cellule NK, Recettori KIR/NCR e Citotossicità Cellulare",
    dateStr: "6 Novembre 2025",
    professor: "Prof.ssa Ricciarda Galandrini",
    durationMin: 60,
    isAvailable: true,
    chapterNumber: 6,
    chapterTitle: "Cellule NK, Recettori KIR/NCR e Citotossicità Cellulare",
    topics: ["Polarizzazione del centrosoma (MTOC)", "Exocitosi di granuli (Rab27a, Munc13-4, LAMP-1/CD107a)", "Perforina (PRF1)", "Granzima B (tBid/Caspasi-3)", "Granzima A", "Asse Fas/FasL", "Linfoistiocitosi HLH"],
    summary: "Fisiologia della sinapsi litica, esocitosi dei granuli citotossici, cascate apoptotiche innescate da perforina/granzimi e dalla via recettoriale Fas/FasL, e patogenesi delle sindromi HLH."
  },
  {
    number: 18,
    id: "lez-18",
    title: "Biologia delle Cellule NK: Teorie del Missing-Self e Induced-Self",
    dateStr: "10 Novembre 2025",
    professor: "Prof.ssa Ricciarda Galandrini",
    durationMin: 60,
    isAvailable: true,
    chapterNumber: 6,
    chapterTitle: "Cellule NK, Recettori KIR/NCR e Citotossicità Cellulare",
    topics: ["Ipotesi del Missing-Self", "NKG2D (MICA/MICB, ULBP)", "Adattatore DAP10", "Recettori NCR (NKp46, NKp30, NKp44)", "Bilanciamento di segnali attivatori/inibitori"],
    summary: "Meccanismi di riconoscimento delle cellule NK: integrazione di segnali tra la perdita di MHC-I self (missing-self) e l'espressione di ligandi di stress indotti da trasformazione o infezione (induced-self)."
  },
  {
    number: 19,
    id: "lez-19",
    title: "Recettori KIR, HLA-E, Education/Licensing NK e Citotossicità ADCC",
    dateStr: "12 Novembre 2025",
    professor: "Prof.ssa Ricciarda Galandrini",
    durationMin: 60,
    isAvailable: true,
    chapterNumber: 6,
    chapterTitle: "Cellule NK, Recettori KIR/NCR e Citotossicità Cellulare",
    topics: ["Recettori KIR (KIR2DL/KIR2DS)", "Epitopi HLA-C (C1/C2)", "CD94/NKG2A ed HLA-E", "Processo di Licensing/Education NK", "Recettore CD16a (FcγRIIIA) e ADCC", "Trapianto Aploidentico"],
    summary: "Genetica dei recettori KIR, monitoraggio dei peptidi leader via HLA-E/NKG2A, processo maturativo di educazione delle NK, citotossicità ADCC via CD16 e applicazione nel trapianto aploidentico."
  },
  {
    number: 20,
    id: "lez-20",
    title: "Cooperazione T-B, Linfociti Tfh e Microarchitettura del Centro Germinativo",
    subtitle: "Inizio Capitolo 7: Risposta Umorale, Dinamica del Centro Germinativo e Switch Isotipico",
    dateStr: "13 Novembre 2025",
    professor: "Prof.ssa Rosa Molfetta",
    durationMin: 60,
    isAvailable: true,
    chapterNumber: 7,
    chapterTitle: "Risposta Umorale, Dinamica del Centro Germinativo e Switch Isotipico",
    topics: ["Risposte T-dipendenti vs T-indipendenti (TI-1/TI-2)", "Assi chemochinici CXCR5/CCR7", "Interazione CD40-CD40L", "Linfociti Tfh (Bcl-6, IL-21)", "Zona Scura (Centroblasti, CXCR4)", "Zona Chiara (Centrociti, FDC)"],
    summary: "Migrazione e cooperazione T-B al confine follicolare, segnale di sopravvivenza CD40-CD40L, differenziamento Tfh e compartimentalizzazione del centro germinativo tra Zona Scura e Zona Chiara."
  },
  {
    number: 21,
    id: "lez-21",
    title: "Enzima AID, Ipermutazione Somatica (SHM), Class Switch (CSR) e Sindromi Iper-IgM",
    dateStr: "17 Novembre 2025",
    professor: "Prof.ssa Rosa Molfetta",
    durationMin: 60,
    isAvailable: true,
    chapterNumber: 7,
    chapterTitle: "Risposta Umorale, Dinamica del Centro Germinativo e Switch Isotipico",
    topics: ["Enzima AID", "Deaminazione C→U", "Uracil-DNA Glicosilasi (UNG)", "Polimerasi Pol-η e maturazione dell'affinità", "Regioni di switch (S)", "Riparazione DSB/NHEJ", "Sindromi HIGM1, HIGM2, HIGM5"],
    summary: "Biochimica delle lesioni indotte da AID nel DNA linfoide B, meccanismi di ipermutazione somatica (SHM) nelle regioni variabili, ricombinazione di switch isotipico (CSR) e immunodeficienze Iper-IgM."
  },
  {
    number: 22,
    id: "lez-22",
    title: "Differenziamento Post-Germinativo: Plasmacellule e Linfociti B Memoria",
    dateStr: "19 Novembre 2025",
    professor: "Prof.ssa Rosa Molfetta",
    durationMin: 60,
    isAvailable: true,
    chapterNumber: 7,
    chapterTitle: "Risposta Umorale, Dinamica del Centro Germinativo e Switch Isotipico",
    topics: ["Antagonismo Bcl-6 vs Blimp-1", "Programma UPR (XBP-1, ATF6)", "Plasmacellule a breve vita vs a lunga vita", "Nicchie midollari (CXCL12/BAFF)", "B della memoria", "Feedback anticorpale via FcγRIIB"],
    summary: "Switch trascrizionale guidato da Blimp-1 per il differenziamento plasmacellulare, adattamento secretorio UPR, homing midollare e regolazione a feedback negativo mediata da FcγRIIB/SHIP-1."
  },
  {
    number: 23,
    id: "lez-23",
    title: "Immunità delle Mucose (MALT/GALT), IgA Secretorie e Metaboliti del Microbiota",
    subtitle: "Inizio Capitolo 8: Immunità delle Mucose, Tolleranza, Immunopatologia Clinica e Immunoterapia",
    dateStr: "20 Novembre 2025",
    professor: "Prof.ssa Alessandra Soriani",
    durationMin: 60,
    isAvailable: true,
    chapterNumber: 8,
    chapterTitle: "Immunità delle Mucose, Tolleranza, Immunopatologia Clinica e Immunoterapia",
    topics: ["Cellule M e DC CD103+", "Acido Retinoico e tropismo α4β7/CCR9", "IgA secretorie (sIgA)", "Recettore pIgR e Componente Secretorio", "Microbiota e SCFA (Butirrato)", "Inibizione HDAC e pTreg"],
    summary: "Anatomia ed ecologia del GALT, imprinting del tropismo mucosale guidato da acido retinoico, transcitosi delle IgA via pIgR ed effetto immunomodulante dei metaboliti del microbiota (SCFA)."
  },
  {
    number: 24,
    id: "lez-24",
    title: "Rottura della Tolleranza, Basi dell'Autoimmunità e Triggers Ambientali",
    dateStr: "24 Novembre 2025",
    professor: "Prof.ssa Alessandra Soriani",
    durationMin: 60,
    isAvailable: true,
    chapterNumber: 8,
    chapterTitle: "Immunità delle Mucose, Tolleranza, Immunopatologia Clinica e Immunoterapia",
    topics: ["Suscettibilità genetica (HLA e non-HLA)", "Mimetismo molecolare (Febbre Reumatica)", "Attivazione da spettatore (Bystander activation)", "Propagazione dell'epitopo (Epitope spreading)"],
    summary: "Eziopatogenesi multifattoriale delle patologie autoimmuni, rottura dei meccanismi di tolleranza ed inneschi ambientali infettivi (mimetismo molecolare, bystander activation ed epitope spreading)."
  },
  {
    number: 25,
    id: "lez-25",
    title: "Ipersensibilità di Tipo I (Immediata / IgE-mediata), Mastociti ed Asma Bronchiale",
    dateStr: "26 Novembre 2025",
    professor: "Prof.ssa Rinaldi",
    durationMin: 60,
    isAvailable: true,
    chapterNumber: 8,
    chapterTitle: "Immunità delle Mucose, Tolleranza, Immunopatologia Clinica e Immunoterapia",
    topics: ["Sensibilizzazione IgE e FcεRI", "Mediatori preformati (Istamina, Triptasi)", "Mediatori lipidici (Leucotrieni LTC4-LTE4, PGD2)", "Eosinofili (IL-5, CCL11)", "Shock Anafilattico ed Adrenalina i.m.", "Desensibilizzazione AIT"],
    summary: "Fisiopatologia della reazione allergica immediata e tardiva, degranulazione mastocitaria, cascata dell'acido arachidonico, gestione dell'anafilassi e principi di immunoterapia allergenica."
  },
  {
    number: 26,
    id: "lez-26",
    title: "Ipersensibilità di Tipo II (Citotossica) e Tipo III (Da Immunocomplessi)",
    dateStr: "27 Novembre 2025",
    professor: "Prof.ssa Rinaldi",
    durationMin: 60,
    isAvailable: true,
    chapterNumber: 8,
    chapterTitle: "Immunità delle Mucose, Tolleranza, Immunopatologia Clinica e Immunoterapia",
    topics: ["Ipersensibilità Tipo II (Anemia emolitica, Pemfigo volgare, Goodpasture)", "Varianti recettoriali (Basedow-Graves, Miastenia Gravis)", "Ipersensibilità Tipo III (LES, Nefrite lupica, Malattia da Siero)"],
    summary: "Citotossicità anticorpo-dipendente diretta contro antigeni di superficie/matrice (Tipo II), alterazioni funzionali recettoriali e patogenesi da deposizione di immunocomplessi solubili (Tipo III)."
  },
  {
    number: 27,
    id: "lez-27",
    title: "Ipersensibilità di Tipo IV (Ritardata / Cellulo-mediata) e Reazioni Granulomatose",
    dateStr: "1 Dicembre 2025",
    professor: "Prof.ssa Rinaldi",
    durationMin: 60,
    isAvailable: true,
    chapterNumber: 8,
    chapterTitle: "Immunità delle Mucose, Tolleranza, Immunopatologia Clinica e Immunoterapia",
    topics: ["Cinetica 24-72 ore", "Attivazione macrofagica via IFN-γ/TNF-α", "Granuloma tubercolare (Cellule epitelioidi/Langhans)", "Dermatite Allergica da Contatto", "Test di Mantoux ed IGRA"],
    summary: "Immunità T-cellulare ritardata, risposta infiammatoria granulomatosa contro infezioni persistenti (tubercolosi), dermatite da contatto da apteni e metodiche diagnostiche in vivo ed in vitro."
  },
  {
    number: 28,
    id: "lez-28",
    title: "Immunologia dei Trapianti: Vie di Alloriconoscimento, Rigetto e GVHD",
    dateStr: "3 Dicembre 2025",
    professor: "Prof.ssa Ricciarda Galandrini",
    durationMin: 60,
    isAvailable: true,
    chapterNumber: 8,
    chapterTitle: "Immunità delle Mucose, Tolleranza, Immunopatologia Clinica e Immunoterapia",
    topics: ["Via Diretta vs Via Indiretta", "Rigetto Iperacuto (Anticorpi preformati, Cross-match)", "Rigetto Acuto (Tubulite/C4d)", "Rigetto Cronico (Vasculopatia dell'alloinnesto)", "Trapianto HSC e GVHD vs GVL"],
    summary: "Riconoscimento molecolare degli alloantigeni HLA, forme clinicopatologiche del rigetto d'organo solido e dinamica della Graft-versus-Host Disease nel trapianto di staminali emopoietiche."
  },
  {
    number: 29,
    id: "lez-29",
    title: "Immunologia dei Tumori: Immunoediting Tumorale e Meccanismi di Evasione",
    dateStr: "4 Dicembre 2025",
    professor: "Prof.ssa Alessandra Soriani",
    durationMin: 60,
    isAvailable: true,
    chapterNumber: 8,
    chapterTitle: "Immunità delle Mucose, Tolleranza, Immunopatologia Clinica e Immunoterapia",
    topics: ["Le tre E di Schreiber (Eliminazione, Equilibrio, Escape)", "Perdita di HLA-I/β2m", "Shedding di MICA/MICB", "Microambiente TME (Treg, TAM M2, MDSC)", "Consumo di Arginina (Arginasi-1) e Triptofano (IDO)"],
    summary: "Fasi dell'immunoediting tumorale, strategie di soppressione dell'immunosorveglianza innata/adattativa e riprogrammazione metabolica del microambiente neoplastico."
  },
  {
    number: 30,
    id: "lez-30",
    title: "Immunoterapia Oncologica Avanzata: Checkpoint Blockade, CAR-T e BiTE",
    dateStr: "10 Dicembre 2025",
    professor: "Prof.ssa Alessandra Soriani",
    durationMin: 60,
    isAvailable: true,
    chapterNumber: 8,
    chapterTitle: "Immunità delle Mucose, Tolleranza, Immunopatologia Clinica e Immunoterapia",
    topics: ["Anti-CTLA-4 (Ipilimumab)", "Anti-PD-1/PD-L1 (Nivolumab, Pembrolizumab)", "Architettura CAR-T (scFv + CD3ζ + domini costimolatori CD28/4-1BB)", "Sindrome CRS (Tocilizumab) ed ICANS", "BiTE (Blinatumomab)"],
    summary: "Rivoluzione dello sblocco dei checkpoint immunologici, ingegnerizzazione delle cellule T con recettori chimerici (CAR-T), gestione delle tossicità sistemiche (CRS) e anticorpi bispecifici."
  },
  {
    number: 31,
    id: "lez-31",
    title: "Immunodeficienze Primitive B e SCID legate al Sesso",
    dateStr: "11 Dicembre 2025",
    professor: "Prof.ssa Rosa Molfetta",
    durationMin: 60,
    isAvailable: true,
    chapterNumber: 8,
    chapterTitle: "Immunità delle Mucose, Tolleranza, Immunopatologia Clinica e Immunoterapia",
    topics: ["Agammaglobulinemia di Bruton (BTK)", "CVID", "Deficit selettivo di IgA", "SCID X-linked (catena γc)", "Partner JAK3"],
    summary: "Difetti dello sviluppo B e della sintesi anticorpale, arresti maturativi midollari e genetica delle SCID da deficit della catena γ comune dei recettori per citochine."
  },
  {
    number: 32,
    id: "lez-32",
    title: "Immunodeficienze Primitive Combinate, Sindromi Complesse e Screening TREC",
    dateStr: "15 Dicembre 2025",
    professor: "Prof.ssa Rosa Molfetta",
    durationMin: 60,
    isAvailable: true,
    chapterNumber: 8,
    chapterTitle: "Immunità delle Mucose, Tolleranza, Immunopatologia Clinica e Immunoterapia",
    topics: ["SCID da deficit ADA (dATP tossico)", "SCID da difetto di ricombinazione", "Sindrome di DiGeorge (22q11.2)", "Sindrome di Wiskott-Aldrich (WASP)", "Screening neonatale con TREC"],
    summary: "Eziopatogenesi metabolica e genetica delle SCID autosomiche recessive, sindromi da difetto di sviluppo timico o citoscheletrico e test di screening neonatale universale TREC."
  },
  {
    number: 33,
    id: "lez-33",
    title: "Immunodeficienze Acquisite: Biologia Molecolare di HIV e Patogenesi dell'AIDS",
    dateStr: "17 Dicembre 2025",
    professor: "Prof.ssa Rosa Molfetta",
    durationMin: 60,
    isAvailable: true,
    chapterNumber: 8,
    chapterTitle: "Immunità delle Mucose, Tolleranza, Immunopatologia Clinica e Immunoterapia",
    topics: ["Geni Gag/Pol/Env e proteine accessorie (Tat, Rev, Nef, Vif, Vpu)", "Tropismo R5 (CCR5) vs X4 (CXCR4)", "Infezione acuta e deplezione GALT", "Reservoir di latenza provirale", "AIDS conclamato (<200 CD4/μL)", "Infezioni opportunistiche", "Terapia cART/HAART"],
    summary: "Struttura e ciclo replicativo di HIV-1, funzioni delle proteine regolatorie/accessorie, tropismo per i corecettori chemochinici, costituzione del reservoir di latenza e quadro clinico dell'AIDS conclamato."
  }
];

export const ALL_33_LESSONS: LessonMeta[] = RAW_33_LESSONS.map((l) => {
  const { chapter, section } = getSectionByLessonNumber(l.number);
  return {
    ...l,
    chapterNumber: chapter.id,
    chapterTitle: chapter.title,
    chapterSubtitle: chapter.subtitle,
    sectionCode: section ? section.code : (l.number === 0 ? '0.1' : `${chapter.id}.${l.number}`)
  };
});