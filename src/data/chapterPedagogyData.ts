/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * DATI PEDAGOGICI UNIFICATI: VISIONE D'INSIEME, MAPPE AD ALBERO E PONTI CONCETTUALI
 * Struttura gerarchica a 3 livelli (Capitolo > Sezione > Paragrafo) per il Manuale Universitario di Immunologia.
 */

export interface TreeNode {
  id: string;
  label: string;
  sublabel?: string;
  description?: string;
  lessonNumber?: number;
  sectionCode?: string;
  children?: TreeNode[];
}

export interface ChapterPedagogy {
  chapterId: number;
  romanId: string;
  generalMission: string;
  executiveOverview: {
    simpleAnalogy: string;
    keyBiologicalQuestion: string;
    coreMechanism: string;
    clinicalTakeaway: string;
  };
  bridgeFromPrevious: string;
  bridgeToNext: string;
  treeStructure: TreeNode[];
}

export interface SectionPedagogy {
  lessonNumber: number;
  sectionCode: string;
  simpleOverview: string;
  detailedScope: string;
  bridgeIn: string;
  bridgeOut: string;
  keySubtopics: {
    code: string;
    title: string;
    focus: string;
  }[];
}

export const CHAPTER_PEDAGOGY: Record<number, ChapterPedagogy> = {
  0: {
    chapterId: 0,
    romanId: "INTRO",
    generalMission: "Guida Metodologica: Come studiare l'Immunologia Moderna come Scienza Quantitativa e Superare la Discontinuità delle Lezioni d'Aula.",
    executiveOverview: {
      simpleAnalogy: "Il sistema immunitario non è una lista di cellule isolate, ma un'orchestra distribuita e autoregolata in cui ogni strumento risponde a leggi molecolari ed evolutive precise.",
      keyBiologicalQuestion: "Come fa l'organismo a discriminare tra 10^9 patogeni mutevoli e le proprie cellule sane (self) senza distruggere i tessuti vitali?",
      coreMechanism: "Integrazione continua tra sensori innati a risposta rapida (PAMP/DAMP) e recettori adattativi a ricombinazione somatica (BCR/TCR) orchestrati da chemochine e citochine.",
      clinicalTakeaway: "La quasi totalità delle patologie umane (da infezioni e tumori ad allergie e autoimmunità) rispecchia un difetto quantitativo o temporale di questa regolazione."
    },
    bridgeFromPrevious: "Punto di partenza del corso universitario integrato di Immunologia.",
    bridgeToNext: "Dalla comprensione metodologica generale si passa alla prima barriera fisica e molecolare: l'Immunità Innata del Capitolo I.",
    treeStructure: [
      {
        id: "intro-tree-1",
        label: "Guida & Metodologia",
        sublabel: "Capitolo 0",
        children: [
          { id: "intro-1", label: "Superamento discontinuità d'aula", sectionCode: "0.1" },
          { id: "intro-2", label: "Piano dell'opera in 8 Grandi Aree", sectionCode: "0.2" },
          { id: "intro-3", label: "Correlazione fisiologia ed immunopatologia", sectionCode: "0.3" }
        ]
      }
    ]
  },
  1: {
    chapterId: 1,
    romanId: "I",
    generalMission: "Barriere Fisico-Chimiche, Riconoscimento dei Pericoli Molecolari (PAMP/DAMP) ed Effettori Mieloidi di Prima Linea.",
    executiveOverview: {
      simpleAnalogy: "Le mura della fortezza (epitelio e muco), le guardie di ronda con rilevatori universali di infrazione (PRR) e i soldati di prima linea (neutrofili, macrofagi e cellule NK).",
      keyBiologicalQuestion: "Come interviene l'organismo nei primissimi minuti dall'invasione microbica, prima ancora che i linfociti T e B vengano attivati?",
      coreMechanism: "Rilevazione immediata di strutture microbiche conservate (LPS, peptidoglicano, RNA virale) tramite recettori invarianti (TLR, NLR, RLR, STING) che innescano fagocitosi, burst respiratorio NOX2, NETosi e rilascio di citochine pro-infiammatorie.",
      clinicalTakeaway: "Un difetto congenito della NADPH ossidasi provoca la Malattia Granulomatosa Cronica (CGD), mentre mutazioni nei sensori NLR/STING scatenano sindromi autoinfiammatorie gravi."
    },
    bridgeFromPrevious: "Introduzione metodologica e principi generali della risposta immunitaria.",
    bridgeToNext: "L'allarme lanciato dai sensori innati richiama i mediatori solubili e le chemochine del Capitolo II (Complemento e Flogosi) per amplificare l'infiammazione.",
    treeStructure: [
      {
        id: "cap1-tree-1",
        label: "Barriere Esterne & Peptidi",
        sublabel: "Sezione 1.1 · Lezione 1",
        children: [
          { id: "t1-1", label: "Giunzioni serrate ed epiteli mucosali" },
          { id: "t1-2", label: "Defensine α/β, Catelicidina LL-37 e Lisozima" },
          { id: "t1-3", label: "Immunità nutrizionale (Lattoferrina, Calprotectina)" }
        ]
      },
      {
        id: "cap1-tree-2",
        label: "Ematopoiesi & Neutrofili Effettori",
        sublabel: "Sezione 1.2 · Lezione 3",
        children: [
          { id: "t1-4", label: "Cinetica midollare e pool marginale dei neutrofili" },
          { id: "t1-5", label: "Burst respiratorio e complesso NADPH ossidasi (NOX2)" },
          { id: "t1-6", label: "Meccanismi molecolari della NETosi e PAD4" }
        ]
      },
      {
        id: "cap1-tree-3",
        label: "Sensori Intracellulari & Inflammasoma",
        sublabel: "Sezione 1.3 · Lezione 4",
        children: [
          { id: "t1-7", label: "Sensori citosolici NLR (NOD1, NOD2) e RLR (RIG-I/MDA5)" },
          { id: "t1-8", label: "Piattaforma multiproteica NLRP3 e Caspasi-1" },
          { id: "t1-9", label: "Piroptosi dipendente da Gasdermina D vs Apoptosi" }
        ]
      },
      {
        id: "cap1-tree-4",
        label: "Barriere, Stravaso & Stato Antivirale",
        sublabel: "Sezione 1.4 · Lezione 5",
        children: [
          { id: "t1-10", label: "Cascata dello stravaso: rotolamento, attivazione, adesione stabile e diapedesi" },
          { id: "t1-11", label: "Interferoni di Tipo I (IFN-α/β) e pathway JAK-STAT antivirale" },
          { id: "t1-12", label: "Effettori antivirali: OAS, PKR e Mx" }
        ]
      },
      {
        id: "cap1-tree-5",
        label: "Cellule Natural Killer (NK) & ILCs",
        sublabel: "Sezione 1.5 · Lezione 21",
        children: [
          { id: "t1-13", label: "Principio del Missing-Self e bilancio recettoriale KIR/NKG2D" },
          { id: "t1-14", label: "Citotossicità mediata da Granzimi, Perforina e FasL" },
          { id: "t1-15", label: "Cellule Linfoidi Innate (ILC1, ILC2, ILC3)" }
        ]
      }
    ]
  },
  2: {
    chapterId: 2,
    romanId: "II",
    generalMission: "Il Sistema del Complemento, Chemochine, Citochine e la Dinamica Vascolo-Essudativa della Flogosi.",
    executiveOverview: {
      simpleAnalogy: "Il sistema d'allarme idraulico e chimico del sangue: una cascata proteica enzimatica pronta a perforare batteri, opsonizzarli per la distruzione e rilasciare gradienti chimici per guidare i globuli bianchi nel tessuto.",
      keyBiologicalQuestion: "Come fa il sangue a riconoscere istantaneamente una superficie patogena e a trasformare un'allerta locale in una potente risposta essudativa e chemotattica?",
      coreMechanism: "Tre vie di attivazione (Classica, Lectinica, Alternativa) che convergono sulla C3-convertasi, portando a opsonizzazione (C3b), anafilatossine chemiotattiche (C3a, C5a) e lisi tramite il Complesso di Attacco alla Membrana (MAC C5b-9).",
      clinicalTakeaway: "I deficit di C1q/C2/C4 predispongono a Lupus (LES), il deficit di C3 provoca infezioni batteriche fulminanti, mentre l'iperattivazione incontrollata causa Emoglobinuria Parossistica Notturna (trattata con Eculizumab/anti-C5)."
    },
    bridgeFromPrevious: "Nel Capitolo I abbiamo esaminato i sensori innati di superficie e intracellulari. Ora vediamo come gli enzimi circolanti nel plasma rilevano i patogeni e reclutano le cellule mieloidi.",
    bridgeToNext: "L'infiammazione acuta e il reclutamento leucocitario attivano le Cellule Dendritiche, che migrano agli organi linfoidi secondari del Capitolo III per dare inizio all'immunità adattativa.",
    treeStructure: [
      {
        id: "cap2-tree-1",
        label: "Attivazione delle Tre Vie del Complemento",
        sublabel: "Sezione 2.1 · Lezione 6",
        children: [
          { id: "t2-1", label: "Via classica (C1qrs e complessi antigene-anticorpo)" },
          { id: "t2-2", label: "Via lectinica (MBL e proteasi MASP)" },
          { id: "t2-3", label: "Via alternativa (idrolisi spontanea C3 tick-over e Fattore B/D)" }
        ]
      },
      {
        id: "cap2-tree-2",
        label: "Fase Effettrice, Regolazione & Patologia",
        sublabel: "Sezione 2.2 · Lezione 7",
        children: [
          { id: "t2-4", label: "Assemblaggio del Complesso di Attacco alla Membrana (MAC C5b-9)" },
          { id: "t2-5", label: "Proteine regolatorie: DAF (CD55), CD59 e Fattore H" },
          { id: "t2-6", label: "Emoglobinuria Parossistica Notturna e anticorpo monoclonale Eculizumab" }
        ]
      },
      {
        id: "cap2-tree-3",
        label: "Chemochine & Gradienti Tissutali",
        sublabel: "Sezione 2.3 · Lezione 8-11",
        children: [
          { id: "t2-7", label: "Classificazione CXC, CC, C e CX3C" },
          { id: "t2-8", label: "Recettori accoppiati a proteine G (GPCR) e motivo DRY" },
          { id: "t2-9", label: "Corecettori HIV (CCR5 e CXCR4) e farmaco Maraviroc" }
        ]
      }
    ]
  },
  3: {
    chapterId: 3,
    romanId: "III",
    generalMission: "Architettura dei Tessuti Linfoidi, Trafficking Leucocitario e Generazione del Repertorio Clonale (V(D)J Recombination).",
    executiveOverview: {
      simpleAnalogy: "I quartieri generali e le accademie militari: il midollo osseo e il timo forgiano miliardi di recettori unici per tentativi ed errori casuali, mentre i linfonodi e la milza fungono da piazze di incontro tra dendritiche e linfociti vergini.",
      keyBiologicalQuestion: "Come fa il corpo a produrre recettori capaci di riconoscere qualsiasi antigene biologico esistente o futuro con solo 20.000 geni nel genoma?",
      coreMechanism: "Ricombinazione somatica V(D)J guidata dagli enzimi RAG1/RAG2 e TdT con giunzioni imprecise, unita al controllo dei checkpoint di selezione e all'indirizzamento nei tessuti linfoidi tramite CCR7 e L-selectina.",
      clinicalTakeaway: "Mutazioni in RAG1/RAG2 o Artemis provocano Immunodeficienze Combinate Gravi (SCID T-B-), mentre difetti nell'editing recettoriale favoriscono autoimmunità precoce."
    },
    bridgeFromPrevious: "I mediatori infiammatori e il complemento del Capitolo II hanno guidato le cellule dendritiche cariche di antigene verso le vie linfatiche afferenti.",
    bridgeToNext: "I recettori clonali diversificati devono ora interagire con le molecole MHC per riconoscere i peptidi presentati, tema centrale del Capitolo IV.",
    treeStructure: [
      {
        id: "cap3-tree-1",
        label: "Organi Linfoidi Primari e Secondari",
        sublabel: "Sezione 3.1 · Lezione 2",
        children: [
          { id: "t3-1", label: "Midollo osseo e stroma timico" },
          { id: "t3-2", label: "Architettura del linfonodo (corteccia follicolare, paracorteccia T)" },
          { id: "t3-3", label: "Polpa bianca e polpa rossa della milza" }
        ]
      },
      {
        id: "cap3-tree-2",
        label: "Ricombinazione Somatica V(D)J",
        sublabel: "Sezione 3.2 · Lezione 12-14",
        children: [
          { id: "t3-4", label: "Sequenze RSS (12/23) e complesso enzimatico RAG1/RAG2" },
          { id: "t3-5", label: "Diversità giunzionale, enzima TdT e inserzione di nucleotidi N/P" },
          { id: "t3-6", label: "Esclusione allelica e checkpoint del pre-BCR e pre-TCR" }
        ]
      },
      {
        id: "cap3-tree-3",
        label: "Trafficking dei Linfociti Naive",
        sublabel: "Sezione 3.3 · Lezione 19-20",
        children: [
          { id: "t3-7", label: "Venule ad endotelio alto (HEV) e asse CCR7/CCL19/CCL21" },
          { id: "t3-8", label: "Uscita dal linfonodo mediata dal recettore S1PR1" },
          { id: "t3-9", label: "Applicazione farmacologica del Fingolimod (FTY720)" }
        ]
      }
    ]
  },
  4: {
    chapterId: 4,
    romanId: "IV",
    generalMission: "Il Complesso Maggiore di Istocompatibilità (MHC/HLA), Elaborazione dell'Antigene e Sinapsi Immunologica.",
    executiveOverview: {
      simpleAnalogy: "Il sistema di passaporti cellulari: i linfociti T sono 'ciechi' agli antigeni liberi e possono vederli solo se tagliati in piccoli frammenti peptidici ed esposti sulle tasche delle molecole MHC di classe I o II.",
      keyBiologicalQuestion: "Come fa il linfocita T a distinguere se un virus sta replicando all'interno di una cellula o se un batterio è stato fagocitato dall'esterno?",
      coreMechanism: "Due vie canoniche distinte: via citosolica (Proteasoma/TAP) su MHC-I per linfociti CD8+ citotossici; via endosomiale (Cathepsine, Catena Invariante, HLA-DM) su MHC-II per linfociti CD4+ helper; oltre alla cross-presentazione nelle cellule dendritiche cDC1.",
      clinicalTakeaway: "Il polimorfismo HLA determina la suscettibilità a malattie autoimmuni (es. HLA-B27 nella Spondilite Anchilosante, HLA-DQ2/DQ8 nella Celiachia) e il rigetto nei trapianti."
    },
    bridgeFromPrevious: "I linfociti T maturi generati nel Capitolo III pattugliano la paracorteccia linfonodale in attesa di incontrare il proprio antigene specifico.",
    bridgeToNext: "Il riconoscimento dell'MHC-peptide genera il Segnale 1, che innesca l'attivazione e la polarizzazione delle sottopopolazioni T del Capitolo V.",
    treeStructure: [
      {
        id: "cap4-tree-1",
        label: "Genetica & Struttura del Locus HLA",
        sublabel: "Sezione 4.1 · Lezione 15",
        children: [
          { id: "t4-1", label: "Organizzazione genomica sul cromosoma 6 (HLA-A/B/C e DP/DQ/DR)" },
          { id: "t4-2", label: "Poligenismo, polimorfismo codominante e residui di ancoraggio nella tasca" }
        ]
      },
      {
        id: "cap4-tree-2",
        label: "Via Endogena MHC-I vs Esogena MHC-II",
        sublabel: "Sezione 4.2 · Lezione 16-17",
        children: [
          { id: "t4-3", label: "Via MHC-I: immunoproteasoma, trasportatore TAP, tapasina e reticolo endoplasmatico" },
          { id: "t4-4", label: "Via MHC-II: catena invariante Ii, frammento CLIP e scambiatore HLA-DM" },
          { id: "t4-5", label: "Cross-presentazione delle cDC1 (antigene esogeno su MHC-I per CD8+)" }
        ]
      },
      {
        id: "cap4-tree-3",
        label: "Sinapsi Immunologica & Superantigeni",
        sublabel: "Sezione 4.3 · Lezione 18",
        children: [
          { id: "t4-6", label: "Struttura della sinapsi: c-SMAC, p-SMAC (LFA-1/ICAM-1) e d-SMAC" },
          { id: "t4-7", label: "Superantigeni batterici (TSST-1) e attivazione policlonale massiva" }
        ]
      }
    ]
  },
  5: {
    chapterId: 5,
    romanId: "V",
    generalMission: "Attivazione Linfocitaria T, Modello dei Tre Segnali, Polarizzazione dei Linfociti T Helper (Th1, Th2, Th17, Tfh) ed Effettori Citotossici (CTL).",
    executiveOverview: {
      simpleAnalogy: "La catena di comando e specializzazione operativa: il linfocita T riceve l'ordine di partenza (Segnale 1 TCR), l'autorizzazione di sicurezza (Segnale 2 Costimolazione CD28) e l'istruzione specifica su quale nemico combattere (Segnale 3 Citochine polarizzanti).",
      keyBiologicalQuestion: "In che modo una risposta immunitaria adatta la propria strategia distruttiva per debellare un virus intracellulare rispetto a un parassita elminta o un fungo extracellulare?",
      coreMechanism: "Attivazione a cascata tramite ITAM di CD3, fosforilazione di ZAP-70, vie NFAT/AP-1/NF-κB, seguita da master regulator trascrizionali: T-bet (Th1 / IFN-γ), GATA-3 (Th2 / IL-4/5/13), RORγt (Th17 / IL-17/22) e Bcl-6 (Tfh).",
      clinicalTakeaway: "Sbilanciamenti Th1/Th17 guidano malattie croniche (Sclerosi Multipla, Psoriasi); sbilanciamenti Th2 innescano asma e atopia; i CTL sono la base dell'immunoterapia antitumorale moderna."
    },
    bridgeFromPrevious: "La presentazione antigenica e la sinapsi immunologica del Capitolo IV generano il complesso di attivazione molecolare.",
    bridgeToNext: "I linfociti T differenziati in T follicolari helper (Tfh) migrano ai follicoli per aiutare i linfociti B nel Capitolo VI (Risposta Umorale e Germinal Center).",
    treeStructure: [
      {
        id: "cap5-tree-1",
        label: "I Tre Segnali & Trasduzione del Segnale TCR",
        sublabel: "Sezione 5.1 · Lezione 22",
        children: [
          { id: "t5-1", label: "Segnale 1: TCR-CD3, Lck, ZAP-70 e vie NFAT / NF-κB / MAPK" },
          { id: "t5-2", label: "Segnale 2: Costimolazione CD28/B7-1/B7-2 vs inibizione CTLA-4" },
          { id: "t5-3", label: "Segnale 3: IL-2, recettore trimetico ad alta affinità (CD25) e proliferazione clonale" }
        ]
      },
      {
        id: "cap5-tree-2",
        label: "La Bussola della Polarizzazione Th",
        sublabel: "Sezione 5.2 · Lezione 23-24",
        children: [
          { id: "t5-4", label: "Profilo Th1: IL-12/IFN-γ, T-bet, macrofagi M1 e patogeni intracellulari" },
          { id: "t5-5", label: "Profilo Th2: IL-4, GATA-3, eosinofili, IgE e parassiti elmintici" },
          { id: "t5-6", label: "Profilo Th17: IL-6/TGF-β/IL-23, RORγt, neutrofili e barriere mucosali" },
          { id: "t5-7", label: "Profilo Tfh: IL-21, Bcl-6 e cooperazione nei centri germinativi" }
        ]
      },
      {
        id: "cap5-tree-3",
        label: "Linfociti T Citotossici CD8+ (CTL)",
        sublabel: "Sezione 5.3 · Lezione 25",
        children: [
          { id: "t5-8", label: "Licensing della cellula dendritica e cooperazione T-help per CTL" },
          { id: "t5-9", label: "Rilascio polarizzato di granuli litici (Perforina e Granzima B)" },
          { id: "t5-10", label: "Via di induzione apoptotica estrinseca Fas/FasL" }
        ]
      }
    ]
  },
  6: {
    chapterId: 6,
    romanId: "VI",
    generalMission: "Attivazione dei Linfociti B, Reazione del Centro Germinativo, Ipermutazione Somatica (SHM), Scambio di Classe (CSR) e Memoria Anticorpale.",
    executiveOverview: {
      simpleAnalogy: "L'industria di precisione dell'organismo: gli anticorpi iniziali a bassa affinità (IgM) vengono perfezionati in armi su misura ad altissima affinità (IgG, IgA, IgE) grazie a una selezione darwiniana accelerata nei linfonodi.",
      keyBiologicalQuestion: "Come fa il sistema immunitario ad aumentare progressivamente l'affinità dei suoi anticorpi nel corso di un'infezione o dopo una vaccinazione di richiamo?",
      coreMechanism: "La cooperazione T-B guidata da CD40/CD40L e l'enzima AID (Activation-Induced Cytidine Deaminase), che introduce mutazioni puntiformi nei geni delle regioni variabili (SHM) e ricombinazioni nei geni costanti (CSR).",
      clinicalTakeaway: "Un difetto di CD40L causa la Sindrome da Iper-IgM legata all'X, mentre la mancata selezione negativa dei cloni B mutati può generare autoanticorpi ad alta affinità."
    },
    bridgeFromPrevious: "I linfociti Tfh generati nel Capitolo V entrano nei follicoli primari per incontrare i linfociti B specifici per l'antigene.",
    bridgeToNext: "L'enorme potere distruttivo di anticorpi e linfociti T attivati impone rigidi meccanismi di spegnimento e tolleranza, affrontati nel Capitolo VII.",
    treeStructure: [
      {
        id: "cap6-tree-1",
        label: "Attivazione Linfocitaria B & Segnalazione BCR",
        sublabel: "Sezione 6.1 · Lezione 26",
        children: [
          { id: "t6-1", label: "Complesso BCR: immunoglobuline di membrana e eterodimero Igα/Igβ (CD79a/CD79b)" },
          { id: "t6-2", label: "Corecettore B (CD19, CD21/CR2, CD81) e abbassamento della soglia di attivazione" },
          { id: "t6-3", label: "Risposte T-indipendenti (TI-1 e TI-2) vs risposte T-dipendenti (TD)" }
        ]
      },
      {
        id: "cap6-tree-2",
        label: "La Macchina del Centro Germinativo",
        sublabel: "Sezione 6.2 · Lezione 27",
        children: [
          { id: "t6-4", label: "Zona scura (centroblasti e proliferazione con SHM guidata da AID)" },
          { id: "t6-5", label: "Zona chiara (centrociti, cellule dendritiche follicolari FDC e selezione Tfh)" },
          { id: "t6-6", label: "Maturazione dell'affinità e destino: plasmacellula a lunga vita vs cellula B memoria" }
        ]
      },
      {
        id: "cap6-tree-3",
        label: "Isotipi Anticorpali & Cinetica di Risposta",
        sublabel: "Sezione 6.3 · Lezione 28",
        children: [
          { id: "t6-7", label: "Scambio isotipico (CSR): citochine guida (IFN-γ -> IgG1, IL-4 -> IgE, TGF-β -> IgA)" },
          { id: "t6-8", label: "Funzioni effettrici degli isotipi: neutralizzazione, opsonizzazione, ADCC e trasporto mucosale" },
          { id: "t6-9", label: "Cinetica primaria vs secondaria di risposta anticorpale e basi della vaccinazione" }
        ]
      }
    ]
  },
  7: {
    chapterId: 7,
    romanId: "VII",
    generalMission: "Tolleranza Immunologica Centrale e Periferica, Linfociti T Regolatori (Treg) e Omeostasi delle Mucose.",
    executiveOverview: {
      simpleAnalogy: "I freni di emergenza e i guardiani della pace: il sistema immunitario elimina o disarma i cloni che riconoscono i componenti dell'organismo (self) e mantiene un patto di convivenza pacifica con il microbiota intestinale.",
      keyBiologicalQuestion: "Perché, pur producendo cloni autoreattivi in modo stocastico, la maggior parte degli individui sani non distrugge i propri organi?",
      coreMechanism: "Selezione negativa timica con espressione di antigeni tessuto-specifici mediata da AIRE, unita a soppressione periferica da linfociti T regolatori FoxP3+ (IL-10, TGF-β, consumo di IL-2, CTLA-4) e all'anergia clonale.",
      clinicalTakeaway: "Mutazioni in AIRE causano la sindrome APECED/APS-1; mutazioni in FoxP3 causano la letale sindrome IPEX; difetti della barriera mucosale favoriscono Malattie Infiammatorie Croniche Intestinali (IBD)."
    },
    bridgeFromPrevious: "Nei Capitoli IV-VI abbiamo visto la piena potenza delle risposte T e B; ora analizziamo i dispositivi molecolari che prevengono l'autodistruzione.",
    bridgeToNext: "Quando la tolleranza viene meno o un patogeno/tumore sovverte le difese, si entra nel Capitolo VIII: l'Immunopatologia Clinica.",
    treeStructure: [
      {
        id: "cap7-tree-1",
        label: "Tolleranza Centrale Timica & Fattore AIRE",
        sublabel: "Sezione 7.1 · Lezione 29",
        children: [
          { id: "t7-1", label: "Selezione positiva in corteccia timica (restrizione MHC)" },
          { id: "t7-2", label: "Selezione negativa in midollare timica ed eliminazione cloni ad alta affinità per il self" },
          { id: "t7-3", label: "Regolatore Trascrizionale AIRE e patogenesi della sindrome APECED" }
        ]
      },
      {
        id: "cap7-tree-2",
        label: "Tolleranza Periferica & Linfociti Treg",
        sublabel: "Sezione 7.2 · Lezione 30",
        children: [
          { id: "t7-3", label: "Anergia clonale per assenza di costimolazione (Segnale 1 senza Segnale 2)" },
          { id: "t7-4", label: "Linfociti T regolatori FoxP3+ (tTreg e pTreg): meccanismi di soppressione cellulare" },
          { id: "t7-5", label: "Citochine immunosoppressorie (IL-10, TGF-β) e sequestro metabolico dell'IL-2" },
          { id: "t7-6", label: "Sindrome IPEX e malattie da deregolazione immunitaria" }
        ]
      },
      {
        id: "cap7-tree-3",
        label: "Immunità Mucosale & Microbiota",
        sublabel: "Sezione 7.3 · Lezione 31",
        children: [
          { id: "t7-7", label: "Placche di Peyer, cellule M e secrezione transcellulare di IgA dimeriche" },
          { id: "t7-8", label: "Interazione mutualistica con il microbiota e metaboliti a catena corta (SCFA)" },
          { id: "t7-9", label: "Rottura dell'omeostasi mucosale: Morbo di Crohn e Rettocolite Ulcerosa" }
        ]
      }
    ]
  },
  8: {
    chapterId: 8,
    romanId: "VIII",
    generalMission: "Immunopatologia Clinica: Ipersensibilità (Gell e Coombs), Autoimmunità Sistemica ed Organo-Specifica, Immunooncologia e Immunoterapie Biologiche.",
    executiveOverview: {
      simpleAnalogy: "Quando il sistema sbaglia mira, reagisce eccessivamente a sostanze innocue, attacca i tessuti sani o viene ingannato dalle cellule neoplastiche che usano i freni immunitari per sfuggire alla distruzione.",
      keyBiologicalQuestion: "Come convertiamo la comprensione dell'immunologia cellulare in farmaci capaci di riprogrammare la risposta (anticorpi monoclonali, checkpoint inhibitors, cellule CAR-T)?",
      coreMechanism: "Classificazione delle reazioni avverse in 4 tipi di Gell & Coombs (IgE/anafilassi, citotossiche, immunocomplessi, cellulo-mediate Th1/Th17); sblocco dell'immunosorveglianza antitumorale con blocco di PD-1/CTLA-4; riequilibrio mirato delle citochine.",
      clinicalTakeaway: "La moderna terapia medica è una terapia immunologica: dagli anti-TNF nell'artrite reumatoide ai checkpoint inhibitors nel melanoma e nelle neoplasie solide avanzate."
    },
    bridgeFromPrevious: "Tutte le nozioni apprese dal Capitolo I al VII convergono qui per spiegare la patogenesi e la terapia delle malattie umane all'esame clinico.",
    bridgeToNext: "Chiusura del corso e consolidamento delle competenze per l'esame orale di Medicina e Chirurgia.",
    treeStructure: [
      {
        id: "cap8-tree-1",
        label: "Le 4 Reazioni di Ipersensibilità (Gell & Coombs)",
        sublabel: "Sezione 8.1 · Lezione 31",
        children: [
          { id: "t8-1", label: "Tipo I: Reazioni immediate IgE-mediate, mastociti, degranulazione e anafilassi" },
          { id: "t8-2", label: "Tipo II: Anticorpi citotossici diretti contro antigeni tissutali (es. Miastenia Gravis)" },
          { id: "t8-3", label: "Tipo III: Immunocomplessi circolanti solubili e glomerulonefrite / vasculite" },
          { id: "t8-4", label: "Tipo IV: Ipersensibilità ritardata cellulo-mediata da T helper e CTL (es. Mantoux, dermatite da contatto)" }
        ]
      },
      {
        id: "cap8-tree-2",
        label: "Autoimmunità: Meccanismi Eziopatogenetici",
        sublabel: "Sezione 8.2 · Lezione 32",
        children: [
          { id: "t8-5", label: "Fattori genetici (aplotipi HLA) ed ambientali (infezioni, mimetismo molecolare)" },
          { id: "t8-6", label: "Malattie organo-specifiche (Tiroidite di Hashimoto, Diabete Tipo 1, Sclerosi Multipla)" },
          { id: "t8-7", label: "Malattie sistemiche (Lupus Eritematoso Sistemico, Artrite Reumatoide, Sclerosi Sistemica)" }
        ]
      },
      {
        id: "cap8-tree-3",
        label: "Immunologia dei Tumori & Checkpoint Immunotherapy",
        sublabel: "Sezione 8.3 · Lezione 32-33",
        children: [
          { id: "t8-8", label: "Teoria dell'Immunoediting: Eliminazione, Equilibrio ed Evasione (3E)" },
          { id: "t8-9", label: "Freni molecolari PD-1/PD-L1 e CTLA-4 nel microambiente tumorale" },
          { id: "t8-10", label: "Terapia con inibitori dei checkpoint (Nivolumab, Pembrolizumab, Ipilimumab) e cellule CAR-T" }
        ]
      }
    ]
  }
};

/**
 * Accessore rapido ai dati pedagogici per ID Capitolo
 */
export function getChapterPedagogy(chapterId: number): ChapterPedagogy {
  return CHAPTER_PEDAGOGY[chapterId] || CHAPTER_PEDAGOGY[1];
}
