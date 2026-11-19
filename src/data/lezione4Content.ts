import { QuizQuestion, Flashcard } from './chapterContent';

export interface TLRDetail {
  receptor: string;
  subcellularLocation: string;
  dimerization: string;
  primaryLigands: string[];
  pathogenSource: string;
  adapterUsed: 'MyD88' | 'TRIF' | 'MyD88 & TRIF';
  transcriptionFactors: string[];
  clinicalRelevance: string;
}

export const TLR_TAXONOMY_DATA: TLRDetail[] = [
  {
    receptor: 'TLR1 / TLR2',
    subcellularLocation: 'Membrana Plasmatica',
    dimerization: 'Eterodimero TLR1-TLR2',
    primaryLigands: ['Triacil lipopeptidi', 'Lipoproteine batteriche'],
    pathogenSource: 'Batteri Gram-negativi, Micobatteri',
    adapterUsed: 'MyD88',
    transcriptionFactors: ['NF-κB', 'AP-1'],
    clinicalRelevance: 'Riconoscimento delle micobatteriosi e flogosi cronica.'
  },
  {
    receptor: 'TLR2 / TLR6',
    subcellularLocation: 'Membrana Plasmatica',
    dimerization: 'Eterodimero TLR2-TLR6',
    primaryLigands: ['Diacil lipopeptidi', 'Acido lipoteicoico (LTA)', 'Zimosano fungino'],
    pathogenSource: 'Batteri Gram-positivi (Stafilococchi, Streptococchi), Lieviti',
    adapterUsed: 'MyD88',
    transcriptionFactors: ['NF-κB', 'AP-1'],
    clinicalRelevance: 'Immunità innata contro infezioni cutanee e polmonari da Gram+.'
  },
  {
    receptor: 'TLR3',
    subcellularLocation: 'Membrana Endosomiale',
    dimerization: 'Omodimero TLR3',
    primaryLigands: ['dsRNA virale (RNA a doppio filamento)', 'Poly(I:C) sintetico'],
    pathogenSource: 'Virus a RNA durante la replicazione intermediaria (es. Rotavirus, HSV, Reovirus)',
    adapterUsed: 'TRIF',
    transcriptionFactors: ['IRF3', 'NF-κB'],
    clinicalRelevance: 'Mutazioni di TLR3 sono associate a Encefalite Erpetica infantile sporadica letale (HSE).'
  },
  {
    receptor: 'TLR4',
    subcellularLocation: 'Membrana Plasmatica → Endosoma dopo internalizzazione',
    dimerization: 'Omodimero TLR4 complessato con MD-2 e CD14',
    primaryLigands: ['Lipopolisaccaride (LPS / Endotossina batterica)', 'Proteine F virali (RSV)', 'HMGB1 e HSP70 (DAMPs)'],
    pathogenSource: 'Batteri Gram-negativi (E. coli, Meningococco, Pseudomonas, Klebsiella)',
    adapterUsed: 'MyD88 & TRIF',
    transcriptionFactors: ['NF-κB (membrana)', 'IRF3 (endosoma via TRAM-TRIF)'],
    clinicalRelevance: 'Mediator chiave dello Shock Settico endotossinico e della sindrome da risposta infiammatoria sistemica (SIRS).'
  },
  {
    receptor: 'TLR5',
    subcellularLocation: 'Membrana Plasmatica (polo basolaterale degli enterociti)',
    dimerization: 'Omodimero TLR5',
    primaryLigands: ['Flagellina monomerica batterica'],
    pathogenSource: 'Batteri flagellati mobili (Salmonella typhimurium, Legionella pneumophila, Pseudomonas)',
    adapterUsed: 'MyD88',
    transcriptionFactors: ['NF-κB', 'MAPK (p38, JNK)'],
    clinicalRelevance: 'Polimorfismo TLR5 392STOP associato a maggiore suscettibilità a legionellosi nosocomiale.'
  },
  {
    receptor: 'TLR7 / TLR8',
    subcellularLocation: 'Membrana Endosomiale',
    dimerization: 'Omodimero o eterodimero TLR7 e TLR8',
    primaryLigands: ['ssRNA virale ricco in GU/U (RNA a singolo filamento)', 'Composti imidazochinolinici (Imiquimod, R848)'],
    pathogenSource: 'Virus a RNA (HIV, Influenza, Coronavirus SARS-CoV-2, HCV)',
    adapterUsed: 'MyD88',
    transcriptionFactors: ['IRF7 (TLR7 nelle pDC)', 'NF-κB'],
    clinicalRelevance: 'Attivazione massiva di INF-α nelle cellule dendritiche plasmacitoidi (pDC); target di Imiquimod nel condiloma e basalioma.'
  },
  {
    receptor: 'TLR9',
    subcellularLocation: 'Membrana Endosomiale',
    dimerization: 'Omodimero TLR9',
    primaryLigands: ['Motivi CpG non metilati di DNA', 'Emoziona malarica'],
    pathogenSource: 'DNA batterico, DNA virale (EBV, CMV, Parvovirus B19)',
    adapterUsed: 'MyD88',
    transcriptionFactors: ['IRF7 (pDC)', 'NF-κB (cellule B e macrofagi)'],
    clinicalRelevance: 'Coinvolto nell’autoimmunità da immunocomplessi con DNA autologo nel Lupus Eritematoso Sistemico (SLE).'
  },
  {
    receptor: 'TLR10',
    subcellularLocation: 'Membrana Plasmatica',
    dimerization: 'Omodimero o eterodimero con TLR1/2',
    primaryLigands: ['Ligandi non completamente definiti; compete per ligandi di TLR2'],
    pathogenSource: 'Microbi commensali e patogeni',
    adapterUsed: 'MyD88',
    transcriptionFactors: ['Attività prevalentemente inibitoria/antinfiammatoria'],
    clinicalRelevance: 'Funzione di freno omeostatico della risposta infiammatoria mediata da TLR2.'
  }
];

export interface InflammasomeStep {
  phase: 'Segnale 1: Priming' | 'Segnale 2: Triggering' | 'Assemblaggio' | 'Effetto';
  title: string;
  description: string;
  molecules: string[];
  clinicalCorrelation: string;
}

export const INFLAMMASOME_CASCADE_STEPS: InflammasomeStep[] = [
  {
    phase: 'Segnale 1: Priming',
    title: 'Trascrizione NF-κB Indotta da TLR o Citochine',
    description: 'Il legame di LPS a TLR4 o di TNF/IL-1 ai propri recettori attiva la via NF-κB, determinando la trascrizione e traduzione basale di NLRP3 inattivo, pro-IL-1β e pro-IL-18 (in condizioni basali le concentrazioni cellulari di queste proteine sono minime).',
    molecules: ['TLR4', 'MyD88', 'NF-κB', 'pro-IL-1β (31 kDa)', 'pro-IL-18 (24 kDa)', 'NLRP3'],
    clinicalCorrelation: 'Senza il Priming, il segnale 2 non è in grado di produrre citochine mature. La regolazione deubiquitinante (es. BRCC36) mantiene NLRP3 competente.'
  },
  {
    phase: 'Segnale 2: Triggering',
    title: 'Perturbazione Omeostatica Intracellulare (K+ efflux & DAMPs)',
    description: 'L’attivazione del recettore purinergico P2X7 da parte dell’ATP extracellulare provoca efflusso massivo di potassio (K+ < 70 mM). Fagocitosi frustrata di cristalli di urato monosodico (MSU) o silice induce destabilizzazione lisosomiale, rilascio citosolico di Catepsina B e stress mitocondriale con rilascio di mtDNA e ROS.',
    molecules: ['ATP', 'P2X7', 'K+ efflux', 'Cristalli MSU / Silice', 'Catepsina B', 'ROS Mitocondriali', 'mtDNA'],
    clinicalCorrelation: 'Gotta acuta articolare (cristalli di urato monosodico) e Silicosi polmonare sono modelli prototipici di attivazione sterile del Segnale 2.'
  },
  {
    phase: 'Assemblaggio',
    title: 'Oligomerizzazione dell’Heptamero NLRP3 e Reclutamento ASC / Pro-Caspasi-1',
    description: 'Il calo di K+ intracellulare induce il cambio conformazionale di NLRP3, esponendo il dominio PYD (Pyrin Domain). Tramite interazioni omotipiche PYD-PYD, viene reclutata la proteina adattatrice ASC (Apoptosis-associated Speck-like protein containing a CARD). ASC polimerizza in un unico macro-filamento visibile ("ASC speck"). Attraverso il dominio CARD, ASC recluta i monomeri di Pro-Caspasi-1.',
    molecules: ['NLRP3 (NACHT-LRR-PYD)', 'ASC (PYD-CARD)', 'Pro-Caspasi-1 (CARD-p20-p10)', 'NEK7 (chinasi regolatoria)'],
    clinicalCorrelation: 'Le sindromi CAPS (Muckle-Wells, CINCA/NOMID) presentano mutazioni puntiformi nel dominio NACHT che mimano la conformazione attiva anche senza efflusso di K+.'
  },
  {
    phase: 'Effetto',
    title: 'Attivazione di Caspasi-1, Clivaggio Citochinico e Piroptosi via Gasdermina D',
    description: 'La vicinanza forzata delle Pro-Caspasi-1 induce autoproteolisi nel tetramero catalitico attivo (due subunità p20 e due p10). La Caspasi-1 taglia proteoliticamente pro-IL-1β in IL-1β attiva (17 kDa) e pro-IL-18 in IL-18 matura. Contemporaneamente, cliva la Gasdermina D (GSDMD) rimuovendone il dominio C-terminale autoinibitorio. Il frammento N-terminale (GSDMD-N) si inserisce nella membrana plasmatica oligomerizzando in pori di 10-14 nm: la cellula va incontro a rigonfiamento osmotico, lisi e rilascio massivo di mediatori (Piroptosi).',
    molecules: ['Caspasi-1 attiva (p20/p10)', 'IL-1β matura (17 kDa)', 'IL-18 matura', 'Gasdermina D (GSDMD-N)', 'Pori litici (16-28 monomeri)'],
    clinicalCorrelation: 'L’impiego dell’antagonista ricombinante del recettore di IL-1 (Anakinra) o dell’anticorpo monoclonale anti-IL-1β (Canakinumab) spegne la cascata febbrile e articolare nelle CAPS e nella Gotta refrattaria.'
  }
];

export const QUIZ_LEZIONE_4: QuizQuestion[] = [
  {
    "id": "q-l4-1",
    "question": "Quale coppia di recettori e adattatori intracellulari è responsabile della produzione selettiva di Interferoni di Tipo I (IFN-α/β) in risposta a dsRNA virale endosomiale?",
    "options": [
      "TLR4 tramite l'adattatore MyD88 e la chinasi IRAK4",
      "TLR2/TLR6 tramite Mal (TIRAP) e attivazione di AP-1",
      "TLR3 tramite l'adattatore TRIF e le chinasi TBK1 / IKKε",
      "TLR5 tramite MyD88 e traslocazione del dimero p50/p65 di NF-κB"
    ],
    "correctIndex": 2,
    "explanation": "TLR3 è l'unico Toll-Like Receptor che non utilizza la proteina adattatrice MyD88. Esso recluta esclusivamente l'adattatore TRIF (TIR-domain-containing adapter-inducing interferon-β), il quale attiva il complesso chinasico TBK1/IKKε con fosforilazione e traslocazione nucleare di IRF3 (Interferon Regulatory Factor 3), conducendo alla trascrizione massiva di IFN-β antivirale.",
    "clinicalPearl": "Pazienti con mutazioni germinali a carico di TLR3, TRIF, TBK1 o IRF3 manifestano una grave e selettiva suscettibilità all'encefalite da virus Herpes simplex di tipo 1 (HSE) durante l'infanzia."
  },
  {
    "id": "q-l4-2",
    "question": "Nei pazienti pediatrici affetti da deficit congenito autosomico recessivo di MyD88 o di IRAK-4, quale singolare reperto clinico-laboratoristico si riscontra tipicamente durante infezioni batteriche invasive severe da pneumococco?",
    "options": [
      "Febbre elevatissima e shock anafilattico immediato",
      "Linfoadenopatia generalizzata con ipergammaglobulinemia policlonale",
      "Iperproduzione incontrollata di IL-1β e calcinosi sistemica",
      "Quadro infettivo fulminante ma con assenza o modesto rialzo febbrile e proteina C reattiva (PCR) insolitamente bassa o ritardata"
    ],
    "correctIndex": 3,
    "explanation": "Il deficit di MyD88 o IRAK-4 abolisce la segnalazione della maggioranza dei TLR e dei recettori delle citochine pirogene IL-1R e IL-18R. Di conseguenza, i macrofagi non riescono a produrre TNF-α, IL-1 e IL-6: il paziente sviluppa infezioni piogeniche devastanti da capsulati (Streptococcus pneumoniae, Staphylococcus aureus, Pseudomonas) ma con una paradossale assenza di segni cardinali sistemici dell'infiammazione (scarsa febbre e livelli ematici di PCR paradossalmente normali o lievemente mossi).",
    "clinicalPearl": "Curiosamente, se i bambini sopravvivono all'adolescenza grazie a profilassi antibiotica e immunoglobuline e.v., la suscettibilità infettiva tende a ridursi spontaneamente con l'età, grazie alla maturazione delle difese adattative anticorpali T-indipendenti."
  },
  {
    "id": "q-l4-3",
    "question": "Nel modello a 'Due Segnali' di attivazione dell'inflammasoma NLRP3, quale evento cellulare rappresenta il primario innesco fisiologico universale per il Segnale 2 (Triggering)?",
    "options": [
      "Il calo della concentrazione citosolica di potassio (efflusso di K+) al di sotto di 70-80 mM",
      "L'iperpolarizzazione cellulare sostenuta da ingresso di sodio (Na+)",
      "La fosforilazione diretta del dominio CARD della Caspasi-8 da parte di JAK2",
      "Il legame di anticorpi IgG immunocomplessati al recettore CD16"
    ],
    "correctIndex": 0,
    "explanation": "Quasi tutti gli stimoli che attivano NLRP3 (incluso il legame dell'ATP extracellulare al recettore canale P2X7, la destabilizzazione della membrana da cristalli di acido urico o silice, e le tossine batteriche porine come la nigéricina) convergono sul medesimo evento biofisico: una massiccia fuoriuscita di ioni potassio (K+ efflux) dal citoplasma. Il calo di K+ induce il cambio conformazionale di NLRP3 necessario per la sua oligomerizzazione con l'adattatore ASC.",
    "clinicalPearl": "Esperimenti in vitro dimostrano che aumentare artificialmente la concentrazione extracellulare di KCl a 90-130 mM blocca l'efflusso di potassio e inibisce completamente l'attivazione dell'inflammasoma NLRP3 in risposta ad ATP o cristalli."
  },
  {
    "id": "q-l4-4",
    "question": "Qual è la proteina effettrice terminale che, clivata dalla Caspasi-1 attiva, forma oligomeri porigenici nella membrana cellulare causando la Piroptosi?",
    "options": [
      "Perforina (PRF1)",
      "Gasdermina D (GSDMD)",
      "Bax/Bak del complesso mitocondriale",
      "Granzima B"
    ],
    "correctIndex": 1,
    "explanation": "La Caspasi-1 cliva la Gasdermina D (GSDMD, 53 kDa) in corrispondenza del residuo Asp275 umano, liberando il frammento N-terminale citotossico (GSDMD-N, 31 kDa). I frammenti GSDMD-N si legano selettivamente ai fosfolipidi di membrana (fosfatidilinositolo 4,5-bisfosfato e fosfatidilserina del foglietto interno) oligomerizzando in anelli di 16-28 subunità che creano pori stabili di 10-14 nm. Ciò provoca lisi osmotica cellulare iperinfiammatoria (Piroptosi) e secrezione massiva di IL-1β e IL-18.",
    "clinicalPearl": "La Gasdermina D è il punto di convergenza sia della via canonica dell'inflammasoma (Caspasi-1) sia della via non canonica (Caspasi-4/5 nell'uomo, Caspasi-11 nel topo, attivate dal legame diretto con LPS citosolico intracellulare)."
  },
  {
    "id": "q-l4-5",
    "question": "Quale delle seguenti patologie umane è un prototipo di Criopirinopatia (CAPS), causata da mutazioni gain-of-function nel gene NLRP3 (CIAS1), e quale farmaco biologico rappresenta la terapia di prima linea di precisione?",
    "options": [
      "Artrite Reumatoide / Tocilizumab (anti-IL-6R)",
      "Lupus Eritematoso Sistemico (SLE) / Belimumab (anti-BAFF)",
      "Sindrome di Muckle-Wells (MWS) / Anakinra (antagonista recettoriale ricombinante di IL-1)",
      "Granulomatosi con Poliangioite (GPA) / Rituximab (anti-CD20)"
    ],
    "correctIndex": 2,
    "explanation": "Le CAPS (Cryopyrin-Associated Periodic Syndromes) comprendono la FCAS (Sindrome Autoinfiammatoria Familiare da Freddo), la Sindrome di Muckle-Wells (MWS) e la NOMID/CINCA. Sono causate da mutazioni autosomiche dominanti gain-of-function nel dominio NACHT del gene NLRP3, che mantengono il complesso costitutivamente assemblato anche a riposo. Poiché l'intero fenotipo clinico (febbri ricorrenti, orticaria neutrofila, amiloidosi AA, sordità neurosensoriale) è mediato dall'eccesso di IL-1β, la somministrazione di Anakinra (anti-IL-1R) o Canakinumab (anti-IL-1β) determina una drammatica e rapida remissione clinica.",
    "clinicalPearl": "Il blocco di IL-1β con Anakinra risolve la febbre e normalizza PCR e amiloide sierica A entro 24-48 ore dalla prima iniezione sottocutanea, prevenendo l'insufficienza renale da amiloidosi."
  }
];

export const FLASHCARDS_LEZIONE_4: Flashcard[] = [
  {
    id: 'fc-l4-1',
    front: "Cosa distingue la struttura di un recettore Toll-Like Receptor (TLR) tra il versante extracellulare e quello citoplasmatico?",
    back: "All'esterno o nel lume dell'endosoma presenta un ectodominio a ferro di cavallo composto da 19-25 ripetizioni ricche in leucina (LRR - Leucine-Rich Repeats) deputate al legame del PAMP/DAMP. Nel versante citoplasmatico possiede un dominio TIR (Toll/Interleukin-1 Receptor) omologo a quello di IL-1R, responsabile del reclutamento degli adattatori MyD88, TRIF, TIRAP o TRAM.",
    category: 'Molecolare'
  },
  {
    id: 'fc-l4-2',
    front: "Qual è il meccanismo molecolare con cui il Lipopolisaccaride (LPS) attiva TLR4 sulla membrana plasmatica?",
    back: "LPS viene prima legato dalla proteina sierica LBP (LPS-Binding Protein) che lo cede al recettore solubile o di membrana CD14 (con ancora GPI). CD14 trasferisce il monomero di LPS alla tasca idrofobica della proteina MD-2 (LY96), la quale si trova complessata non-covalentemente con TLR4. L'inserimento delle catene aciliche dell'LPS in MD-2 induce la dimerizzazione di due complessi TLR4/MD-2, avvicinando i domini TIR citosolici per innescare la cascata MyD88.",
    category: 'Molecolare'
  },
  {
    id: 'fc-l4-3',
    front: "Come differisce la via di trasduzione MyD88-dipendente da quella TRIF-dipendente?",
    back: "MyD88 recluta le chinasi IRAK4 e IRAK1 e l'ubiquitina-ligasi TRAF6, portando all'attivazione del complesso IKK (IκB chinasi), alla degradazione del repressore IκBα e alla traslocazione nucleare di NF-κB con trascrizione di citochine pro-infiammatorie (TNF-α, IL-6, IL-12). TRIF (usato da TLR3 e da TLR4 endocitato tramite TRAM) recluta invece TRAF3 e le chinasi TBK1/IKKε, che fosforilano IRF3/IRF7 per trascrivere gli Interferoni antivirali di Tipo I (IFN-α, IFN-β).",
    category: 'Molecolare'
  },
  {
    id: 'fc-l4-4',
    front: "Quali sono i 'Due Segnali' indispensabili per l'attivazione e la secrezione di IL-1β e IL-18 da parte dell'inflammasoma NLRP3?",
    back: "Segnale 1 (Priming): stimolazione di TLR o recettori citochinici (TNF/IL-1) -> attivazione di NF-κB -> sintesi trascrizionale di NLRP3 inerte e dei precursori inattivi pro-IL-1β (31 kDa) e pro-IL-18 (24 kDa). Segnale 2 (Triggering/Assemblaggio): perturbazione ionica cellulare (efflusso di K+, cristalli di urato, silice, ATP su P2X7, ROS mitocondriali) -> oligomerizzazione di NLRP3 con ASC e Pro-Caspasi-1 -> clivaggio proteolitico in Caspasi-1 attiva -> rilascio delle citochine mature da 17 kDa.",
    category: 'Cellulare'
  },
  {
    id: 'fc-l4-5',
    front: "Cos'è la Piroptosi e in che modo la Gasdermina D (GSDMD) la provoca?",
    back: "È una forma programmata e litica di morte cellulare altamente pro-infiammatoria, tipica dei fagociti attivati. La Caspasi-1 (o Caspasi-4/5/11) taglia la Gasdermina D liberando il dominio N-terminale (GSDMD-N), che si inserisce nella membrana plasmatica assemblandosi in pori ad anello di 10-14 nm di diametro interno. Questo provoca collasso del gradiente elettrochimico, rigonfiamento osmotico della cellula, rottura di membrana e rilascio violento di DAMPs, IL-1β e IL-18.",
    category: 'Patologia'
  },
  {
    id: 'fc-l4-6',
    front: "Quali malattie umane originano da disfunzioni dei sensori intracellulari NOD2 e NLRP3?",
    back: "Mutazioni loss-of-function nel dominio LRR di NOD2/CARD15 (sensore del muramil-dipeptide MDP batterico) compromettono la difesa antibatterica enterocitaria e la secrezione di defensine, predisponendo al Morbo di Crohn ileale. Al contrario, mutazioni gain-of-function nel gene NLRP3 generano le Criopirinopatie (CAPS: Muckle-Wells, FCAS, NOMID), sindromi autoinfiammatorie sistemiche con febbri sterili ricorrenti e amiloidosi responsivo a inibitori di IL-1 (Anakinra, Canakinumab).",
    category: 'Clinica'
  }
];
