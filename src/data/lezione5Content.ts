import { QuizQuestion, Flashcard } from './chapterContent';

export interface AntimicrobialPeptide {
  name: string;
  family: 'Defensine-α' | 'Defensine-β' | 'Catelicidine';
  cellularSource: string;
  molecularTarget: string;
  mechanismOfAction: string;
  clinicalRelevance: string;
}

export const ANTIMICROBIAL_PEPTIDES_DATA: AntimicrobialPeptide[] = [
  {
    name: 'α-Defensine (HNP1-4, HD5, HD6)',
    family: 'Defensine-α',
    cellularSource: 'Granuli azzurrofili dei neutrofili e cellule di Paneth delle cripte intestinali dell’ileo',
    molecularTarget: 'Doppio strato fosfolipidico con carica netta negativa dei batteri',
    mechanismOfAction: 'Piccoli peptidi cationici ricchi di cisteina (3 ponti disolfuro conservati). Per attrazione elettrostatica si inseriscono nella membrana batterica formando pori litici che alterano il potenziale di membrana.',
    clinicalRelevance: 'La ridotta secrezione di HD5 e HD6 da parte delle cellule di Paneth (spesso secondaria a mutazioni di NOD2) favorisce la colonizzazione patogena nel Morbo di Crohn ileale.'
  },
  {
    name: 'β-Defensine (hBD-1, hBD-2, hBD-3, hBD-4)',
    family: 'Defensine-β',
    cellularSource: 'Cheratinociti epidermici, epiteli dell’apparato respiratorio e urogenitale; parzialmente prodotte anche da monociti e macrofagi',
    molecularTarget: 'Involucro di batteri Gram-positivi, Gram-negativi, miceti (Candida) e virus capsulati',
    mechanismOfAction: 'hBD-1 è espressa costitutivamente per garantire protezione basale, mentre hBD-2 e hBD-3 sono potentemente indotte da citochine (IL-1, TNF-α) e attivazione di TLR. Formazione di canali ionici litici.',
    clinicalRelevance: 'Bassi livelli cutanei di β-defensine nella dermatite atopica spiegano la frequente sovrainfezione da Staphylococcus aureus; al contrario, livelli elevatissimi si riscontrano nelle placche psoriasiche.'
  },
  {
    name: 'Catelicidina (Precursore 18 kDa → LL-37)',
    family: 'Catelicidine',
    cellularSource: 'Neutrofili (granuli secondari specifici), cheratinociti cutanei, cellule epiteliali mucosali',
    molecularTarget: 'Membrane microbiche e recettori per formil-peptidi (FPR2) su cellule immunitarie',
    mechanismOfAction: 'Sintetizzata come pro-peptide inattivo hCAP-18 (18 kDa); il clivaggio proteolitico da parte della proteina proteinasi-3 rilascia il peptide C-terminale maturo di 37 aminoacidi (LL-37). Struttura ad anfipatica α-elica porigenica.',
    clinicalRelevance: 'Ruolo chiave nella patogenesi della Psoriasi: LL-37 si complessa con il DNA o RNA self rilasciato da cellule danneggiate, formando aggregati che attivano massivamente TLR7 e TLR9 nelle pDCs, scatenando la sintesi di IFN-α e la cronicizzazione della placca eritemato-desquamativa.'
  }
];

export interface ClrDetail {
  receptor: string;
  ligandRecognized: string;
  expressingCells: string;
  functionalRole: string;
  clinicalSignificance: string;
}

export const CLR_RECEPTORS_DATA: ClrDetail[] = [
  {
    receptor: 'Recettore del Mannosio (CD206)',
    ligandRecognized: 'Residui terminali di D-mannosio, L-fucosio e N-acetilglucosamina (GlcNAc)',
    expressingCells: 'Macrofagi tissutali, cellule dendritiche dermiche e monociti alternativamente attivati (M2)',
    functionalRole: 'Riconosce glicoproteine e glicolipidi della parete batterica e fungina; induce rapida endocitosi e fagocitosi recettore-mediata con trasporto al fagolisosoma.',
    clinicalSignificance: 'Marcatore fenotipico fondamentale dei macrofagi M2 con profilo riparativo e immunomodulatore.'
  },
  {
    receptor: 'Dectina-1 (CLEC7A)',
    ligandRecognized: 'β-1,3 e β-1,6 glucani della parete cellulare fungina',
    expressingCells: 'Cellule dendritiche mieloidi, macrofagi e neutrofili',
    functionalRole: 'Possiede un motivo ITAM-like (hemITAM) intracellulare: recluta la chinasi Syk e la proteina scaffold CARD9, attivando NF-κB e stimolando la secrezione di IL-23 e IL-1β.',
    clinicalSignificance: 'Induttore cardine della differenziazione dei linfociti Th17. Deficit congeniti di Dectina-1 o CARD9 causano candidosi mucocutanea cronica (CMC) recidivante refrattaria.'
  },
  {
    receptor: 'DC-SIGN (CD209)',
    ligandRecognized: 'Glicani ad alto contenuto di mannosio e strutture fucosilate (Lewis antigens)',
    expressingCells: 'Cellule dendritiche interstiziali e macrofagi',
    functionalRole: 'Media l’adesione delle DC ai linfociti T vergini legando ICAM-3; cattura antigeni per la presentazione crociata (cross-presentation).',
    clinicalSignificance: 'Sfruttato da patogeni insidiosi per l’evasione immunitaria: il virus HIV-1 si lega alla glicoproteina gp120 su DC-SIGN, permettendo al virione di viaggiare intatto all’interno della DC fino ai linfonodi (trasmissione trans a linfociti T CD4+).'
  },
  {
    receptor: 'Langerina (CD207)',
    ligandRecognized: 'Mannosio e β-glucani, compreso il lipoarabinomannano micobatterico',
    expressingCells: 'Cellule di Langerhans dell’epidermide',
    functionalRole: 'L’internalizzazione del ligando induce l’invaginazione della membrana e la biogenesi dei caratteristici granuli di Birbeck a forma di racchetta da tennis.',
    clinicalSignificance: 'Costituisce la prima barriera di captazione antigenica cutanea e marcatore diagnostico immunoistochimico per l’Istiocitosi a cellule di Langerhans.'
  }
];

export interface ExtravasationStep {
  stepNumber: number;
  phaseName: string;
  molecularActors: string;
  biomechanics: string;
  clinicalFailure: string;
}

export const EXTRAVASATION_STEPS_DATA: ExtravasationStep[] = [
  {
    stepNumber: 1,
    phaseName: 'Margination & Rolling (Rotolamento)',
    molecularActors: 'E-selectina e P-selectina (endoteliali) che legano Sialyl-Lewis X (PSGL-1 su neutrofili e monociti)',
    biomechanics: 'Le citochine infiammatorie TNF-α e IL-1 inducono la mobilizzazione rapida dei corpi di Weibel-Palade (rilascio di P-selectina in pochi minuti) e la trascrizione de novo di E-selectina (1-2 ore). I legami chimici hanno una rapida velocità di attacco e distacco (on-off rate): la forza di taglio ematica (shear stress) fa rotolare il leucocita lungo l’endotelio.',
    clinicalFailure: 'Deficit di Adesione Leucocitaria di Tipo 2 (LAD-2): mutazione del trasportatore del fucosio nel Golgi, assenza di epitopi Sialyl-Lewis X; i neutrofili non riescono a rotolare.'
  },
  {
    stepNumber: 2,
    phaseName: 'Attivazione & Inside-Out Signaling',
    molecularActors: 'Chemochine tissutali (CXCL8/IL-8 per neutrofili, CCL2/MCP-1 per monociti) legate a proteoglicani dell’endotelio, captate da recettori GPCR leucocitari',
    biomechanics: 'Il legame della chemochina al recettore a 7 eliche transmembrana attiva una cascata citoplasmatica (Gαi, fosfolipasi C, Rap1). Questo genera un segnale dall’interno verso l’esterno (inside-out signaling) che modifica la conformazione tridimensionale delle integrine leucocitarie: da una forma ripiegata a bassa affinità a una forma estesa lineare ad altissima affinità per i ligandi endoteliali.',
    clinicalFailure: 'Deficit di Rap1 o talina-1 aboliscono il clustering integrinico impedendo il passaggio alla conformazione ad alta affinità.'
  },
  {
    stepNumber: 3,
    phaseName: 'Adesione Stabile (Firm Adhesion & Arrest)',
    molecularActors: 'Integrine ad alta affinità: LFA-1 (αLβ2 / CD11a-CD18) e Mac-1 (αMβ2 / CD11b-CD18) che legano ICAM-1 e ICAM-2 endoteliali; VLA-4 (α4β1 / CD49d-CD29) che lega VCAM-1',
    biomechanics: 'I legami ad alta affinità arrestano completamente il rotolamento del leucocita, che si appiattisce saldamente sulla superficie dell’endotelio venulare post-capillare, riorganizzando il proprio citoscheletro di actina in lamellipodi polarizzati.',
    clinicalFailure: 'Deficit di Adesione Leucocitaria di Tipo 1 (LAD-1): mutazione autosomica recessiva del gene ITGB2 (subunità β2 comune CD18); assenza completa di LFA-1 e Mac-1. Marcata leucocitosi periferica senza formazione di pus nei tessuti.'
  },
  {
    stepNumber: 4,
    phaseName: 'Diapedesi & Migrazione Transendoteliale',
    molecularActors: 'PECAM-1 (CD31), CD99, giunzioni occludenti, metalloproteinasi (MMP-9 gelatinasi B)',
    biomechanics: 'Il leucocita scivola attraverso le giunzioni interendoteliali rilassate (via paracellulare o transcellulare), oltrepassa la membrana basale degradando localmente la matrice extracellulare mediante gelatinasi e migra seguendo il gradiente chemiotattico verso il focolaio batterico.',
    clinicalFailure: 'La mancata migrazione tissutale comporta ritardo di caduta del cordone ombelicale nel neonato con infezioni necrotiche batteriche ricorrenti della cute e delle mucose.'
  }
];

export interface AntiviralMechanism {
  enzyme: string;
  activator: string;
  molecularAction: string;
  virologicalOutcome: string;
}

export const ANTIVIRAL_MECHANISMS_DATA: AntiviralMechanism[] = [
  {
    enzyme: 'Protein Kinase R (PKR)',
    activator: 'dsRNA virale citosolico (RNA a doppio filamento)',
    molecularAction: 'Il legame di dsRNA induce la dimerizzazione e autofosforilazione di PKR. La chinasi attiva fosforila la subunità α del fattore d’inizio eucariotico 2 (eIF2α) sul residuo Ser51.',
    virologicalOutcome: 'Blocco completo e irreversibile della traduzione proteica cellulare e virale: il virus non può sintetizzare proteine strutturali o polimerasi replicative.'
  },
  {
    enzyme: '2’-5’ Oligoadenilato Sintetasi (OAS) & RNasi L',
    activator: 'dsRNA virale',
    molecularAction: 'OAS sintetizza corti polimeri insoliti di adenina uniti da legami fosfodiesterici 2’-5’ (2-5A: ppp(A2’p5’A)n). Il 2-5A si lega alla ribonucleasi latente monomerica RNasi L inducendone la dimerizzazione attiva.',
    virologicalOutcome: 'RNasi L degrada indiscriminatamente tutto l’RNA virale a singolo filamento presente nel citosol, limitando la replicazione ed esponendo motivi 5’-OH che allertano ulteriormente RIG-I.'
  },
  {
    enzyme: 'GTPasi della famiglia Mx (MxA e MxB)',
    activator: 'Trascrizione indotta da ISGF3 (STAT1/STAT2/IRF9) a valle di IFNAR1/2',
    molecularAction: 'Grandi dinamina-like GTPasi che formano strutture oligomeriche ad anello attorno ai complessi ribonucleoproteici e nucleocapsidici virali nel citoplasma o nel nucleo.',
    virologicalOutcome: 'Intrappolamento sterico delle componenti virali che impedisce l’uncoating, la trascrizione primaria e l’assemblaggio finale dei virioni (es. contro virus influenzale A, rhabdovirus, retrovirus).'
  }
];

export const QUIZ_LEZIONE_5: QuizQuestion[] = [
  {
    "id": "q-l5-1",
    "question": "Nei pazienti pediatrici con Displasia Ipoidrotica Ectodermica con Immunodeficienza legata all’X (X-HMID), quale anomalia molecolare è alla base della suscettibilità severa alle infezioni batteriche e micobatteriche?",
    "options": [
      "Mutazione germinale di TLR3 con encefalite erpetica isolata",
      "Mutazione del gene CD18 (ITGB2) con assenza dell'integrina LFA-1",
      "Deficit dell'enzima NADPH ossidasi gp91phox con difetto del burst respiratorio",
      "Mutazione loss-of-function nel gene IKBKG codificante per NEMO/IKK-γ, con blocco dell'attivazione nucleare di NF-κB"
    ],
    "correctIndex": 3,
    "explanation": "La displasia ipoidrotica ectodermica associata a immunodeficienza è una malattia recessiva legata al cromosoma X dovuta a mutazioni ipomorfe del gene IKBKG (NEMO / IKK-γ), componente regolatoria essenziale del complesso IKK. Il blocco impedisce la fosforilazione di IκBα e la liberazione nucleare di NF-κB a valle di TLR, IL-1R e del recettore dell'ectodisplasina-A (EDA-A1R), causando la triade: anodontia/anomalie dentarie coniche, ipoidrosi (mancanza di ghiandole sudoripare) e grave immunodeficienza con infezioni batteriche e micobatteriche invasive.",
    "clinicalPearl": "Poiché il gene è situato sul cromosoma X (Xq28), la sindrome colpisce prevalentemente i maschi, mentre le femmine eterozigoti possono mostrare lesioni cutanee a mosaico lungo le linee di Blaschko (incontinentia pigmenti)."
  },
  {
    "id": "q-l5-2",
    "question": "Quale recettore per le Lectine di tipo C (CLR) è espresso dalle cellule dendritiche, lega specificamente i β-glucani fungini ed è il principale innesco per la differenziazione dei linfociti Th17 protettivi contro la Candida?",
    "options": [
      "Dectina-1 (CLEC7A)",
      "Recettore del Mannosio (CD206)",
      "DC-SIGN (CD209)",
      "Langerina (CD207)"
    ],
    "correctIndex": 0,
    "explanation": "Dectina-1 (CLEC7A) è il sensore innato cardine dei β-1,3 e β-1,6 glucani presenti nella parete dei lieviti e dei miceti filamentosi. La trasduzione del segnale mediata dal suo dominio citoplasmatico hemITAM recluta la tirosin-chinasi Syk e il complesso scaffold CARD9-Bcl10-MALT1, promuovendo la secrezione di IL-23, IL-1β e IL-6, citochine indispensabili per la polarizzazione dei linfociti CD4+ Th17 (produttori di IL-17 e IL-22).",
    "clinicalPearl": "Pazienti portatori di mutazioni autosomiche recessive nel gene CARD9 o in CLEC7A sviluppano Candidosi Mucocutanea Cronica (CMC) recalcitrante e infezioni dermatofitiche invasive letali."
  },
  {
    "id": "q-l5-3",
    "question": "Nel processo di extravasazione leucocitaria durante l'infiammazione acuta, a quale meccanismo biochimico corrisponde il fenomeno dell' 'Inside-Out Signaling'?",
    "options": [
      "Il legame di E-selectina a PSGL-1 che causa la degranulazione dei granuli primari azzurrofili",
      "Il legame di chemochine (come CXCL8 o CCL2) a recettori GPCR leucocitari che induce un cambio conformazionale delle integrine (es. LFA-1), aumentandone drammaticamente l'affinità per ICAM-1",
      "La clivatura proteolitica della molecola CD31 (PECAM-1) per aprire le giunzioni endoteliali",
      "La fagocitosi di immunocomplessi tramite recettori FcγR"
    ],
    "correctIndex": 1,
    "explanation": "Le integrine leucocitarie (LFA-1, Mac-1, VLA-4) si trovano a riposo in una conformazione chiusa a bassa affinità che impedisce l'adesione spontanea nei vasi sanguigni. Durante il rotolamento, le chemochine immobilizzate sull'endotelio si legano ai recettori GPCR leucocitari (CXCR1/2, CCR2), innescando una cascata intracellulare (Gαi, Rap1, talina, kindlina) che stira la testa dell'integrina nella conformazione aperta ad altissima affinità ('inside-out'). Ciò rende possibile il legame solido con ICAM-1 e l'arresto immediato del leucocita.",
    "clinicalPearl": "Nel Deficit di Adesione Leucocitaria di tipo 3 (LAD-3), mutazioni nel gene FERMT3 (kindlina-3) impediscono l'inside-out signaling delle integrine sia dei leucociti che delle piastrine, causando contemporaneamente infezioni severe e diatesi emorragica grave (simile alla tromboastenia di Glanzmann)."
  },
  {
    "id": "q-l5-4",
    "question": "Quale triade di enzimi effettori intracellulari viene trascritta in risposta agli Interferoni di Tipo I (IFN-α/IFN-β) per instaurare lo 'Stato Antivirale' nelle cellule bersaglio non infette?",
    "options": [
      "Mieloperossidasi (MPO), Elastasi e Gelatinasi",
      "NADPH ossidasi (NOX2), Inducible Nitric Oxide Synthase (iNOS) e Lisozima",
      "Protein Kinase R (PKR), 2’-5’ Oligoadenilato Sintetasi (OAS/RNasi L) e GTPasi Mx (MxA)",
      "Caspasi-1, Gasdermina D e Granzima B"
    ],
    "correctIndex": 2,
    "explanation": "Il legame di IFN-α/β al recettore eterodimerico IFNAR1/IFNAR2 attiva la via JAK1/TYK2 con fosforilazione di STAT1 e STAT2, che insieme a IRF9 formano il complesso eterotrimerico ISGF3. ISGF3 trasloca nel nucleo legando gli elementi ISRE (Interferon-Stimulated Response Elements) e inducendo centinaia di geni antivirali (ISGs), tra cui spiccano: PKR (che fosforila eIF2α bloccando la sintesi proteica), OAS (che genera 2-5A attivando la RNasi L che taglia l'RNA a singolo filamento) e le GTPasi Mx (che inibiscono l'uncoating e l'assemblaggio dei virioni).",
    "clinicalPearl": "La mancata inattivazione o la presenza di mutazioni in enzimi che smaltiscono gli acidi nucleici endogeni (come TREX1 o RNASEH2) causano accumulo di acidi nucleici self che stimolano cGAS o RIG-I, generando le cosiddette 'Interferonopatie di Tipo I' (es. Sindrome di Aicardi-Goutières, mimante un'infezione congenita TORCH)."
  },
  {
    "id": "q-l5-5",
    "question": "Per quale motivo la catelicidina umana LL-37 è oggetto di profondo studio molecolare nella patogenesi della Psoriasi a placche?",
    "options": [
      "Perché inibisce la sintesi di cheratina provocando atrofia cutanea",
      "Perché provoca la mutazione genica diretta della molecola HLA-Cw6",
      "Perché agisce come antagonista competitivo del recettore di IL-17",
      "Perché si complessa con il DNA e RNA autologo rilasciato dalle cellule danneggiate, formando aggregati stabili che attivano i recettori endosomiali TLR7 e TLR9 nelle cellule dendritiche plasmacitoidi (pDCs)"
    ],
    "correctIndex": 3,
    "explanation": "In condizioni ordinarie il DNA e RNA self rilasciati dalle cellule che muoiono non attivano il sistema immunitario perché vengono degradati rapidamente dalle nucleasi extracellulari e non penetrano negli endosomi. Nella cute psoriasica, il peptide cationico LL-37 (iperprodotto da cheratinociti e neutrofili) si lega elettrostaticamente ai frammenti di DNA/RNA self formando micro-aggregati nanocristallini stabili e resistenti alle nucleasi. Questi aggregati vengono endocitati massivamente dalle pDCs attivando TLR9 (per il DNA) e TLR7 (per l'RNA), innescando una produzione torrenziale di IFN-α che sostiene il circuito cronico infiammatorio della placca psoriasica.",
    "clinicalPearl": "Questo meccanismo spiega perché la psoriasi può essere scatenata da traumi meccanici cutanei minori (fenomeno di Koebner), dove il rilascio di frammenti cellulari self e LL-37 avvia il priming della risposta autoimmune."
  }
];

export const FLASHCARDS_LEZIONE_5: Flashcard[] = [
  {
    id: 'fc-l5-1',
    front: "Cosa distingue le defensine di tipo alfa dalle defensine di tipo beta per quanto riguarda la sede anatomica e cellulare di sintesi?",
    back: "Le defensine-α sono sintetizzate principalmente dai neutrofili (immagazzinate nei granuli azzurrofili HNP1-4) e dalle cellule di Paneth situate alla base delle cripte di Lieberkühn nell'intestino tenue (HD5 e HD6). Le defensine-β (hBD1-4) sono invece prodotte prevalentemente dalle cellule epiteliali degli apparati respiratorio, urogenitale e dalla cute (cheratinociti epidermici), nonché in misura minore da monociti e macrofagi.",
    category: 'Cellulare'
  },
  {
    id: 'fc-l5-2',
    front: "Qual è la correlazione tra catelicidina LL-37, acidi nucleici self e cellule dendritiche plasmacitoidi (pDCs) nella psoriasi?",
    back: "Il peptide cationico LL-37 (derivato dal precursore hCAP-18) forma complessi compatti con frammenti di DNA e RNA self rilasciati da cellule stressate. Questi complessi proteggono gli acidi nucleici dalla degradazione e ne permettono l'endocitosi nelle pDCs, dove attivano potentemente i recettori endosomiali TLR9 (DNA) e TLR7 (RNA), inducendo un'enorme secrezione di IFN-α che cronicizza la risposta autoimmune psoriasica.",
    category: 'Patologia'
  },
  {
    id: 'fc-l5-3',
    front: "Qual è il ruolo di Dectina-1 nella risposta antifungina e quale via di trasduzione intracellulare impiega?",
    back: "Dectina-1 (recettore lectinico di tipo C) riconosce i β-glucani della parete fungina. Tramite il suo dominio citoplasmatico hemITAM recluta la tirosin-chinasi Syk e il complesso proteico CARD9-Bcl10-MALT1, attivando NF-κB. Questo induce la sintesi di IL-23 e IL-1β, determinanti per la polarizzazione dei linfociti Th17 e la difesa contro Candida albicans.",
    category: 'Molecolare'
  },
  {
    id: 'fc-l5-4',
    front: "Quali sono le quattro fasi sequenziali dello stravaso leucocitario (leukocyte extravasation cascade)?",
    back: "1. Margination & Rolling: legame transiente debole tra selectine endoteliali (E e P-selectina) e carboidrati leucocitari (Sialyl-Lewis X su PSGL-1).\n2. Attivazione & Inside-Out Signaling: chemochine (CXCL8, CCL2) legano GPCR leucocitari e inducono il cambio conformazionale delle integrine ad alta affinità.\n3. Adesione Stabile (Firm Adhesion): le integrine ad alta affinità (LFA-1, Mac-1, VLA-4) legano stabilmente ICAM-1 e VCAM-1 endoteliali, arrestando la cellula.\n4. Diapedesi: transmigrazione transendoteliale mediata da PECAM-1 (CD31) e digestione della membrana basale tramite gelatinasi.",
    category: 'Cellulare'
  },
  {
    id: 'fc-l5-5',
    front: "Quali sono le tre braccia enzimatiche intracellulari dello 'Stato Antivirale' indotto dagli Interferoni di Tipo I?",
    back: "1. PKR (Protein Kinase R): si attiva su dsRNA e fosforila eIF2α su Ser51, arrestando la sintesi proteica virale e cellulare.\n2. OAS (2'-5' Oligoadenilato Sintetasi) e RNasi L: produce polimeri 2-5A che attivano la RNasi L inducendo la degradazione dell'RNA a singolo filamento.\n3. GTPasi Mx (MxA/MxB): oligomerizzano attorno ai complessi nucleoproteici virali inibendone l'uncoating, la trascrizione e l'assemblaggio.",
    category: 'Molecolare'
  },
  {
    id: 'fc-l5-6',
    front: "Qual è il difetto genetico nel Deficit di Adesione Leucocitaria di tipo 1 (LAD-1) e quale paradosso laboratoristico determina?",
    back: "È dovuto a mutazioni autosomiche recessive nel gene ITGB2 che codifica per la subunità comune CD18 (β2) delle integrine LFA-1 e Mac-1. I neutrofili non possono completare l'adesione stabile e la diapedesi. Clinicamente si manifesta con ritardo nella caduta del cordone ombelicale, infezioni batteriche cutaneo-mucose gravi e un paradosso tipico: marcata leucocitosi periferica (>30.000-50.000/μL) ma lesioni tissutali completamente prive di pus.",
    category: 'Clinica'
  }
];
