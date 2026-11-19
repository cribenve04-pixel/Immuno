import { QuizQuestion, Flashcard } from './chapterContent';

export interface BcrVsTcrComparison {
  feature: string;
  bcr: string;
  tcr: string;
  clinicalSignificance: string;
}

export const BCR_VS_TCR_DATA: BcrVsTcrComparison[] = [
  {
    feature: 'Valenza e Siti di Legame',
    bcr: 'Bivalente (2 siti identici per monomero); fino a 10 siti nella forma pentamerica di IgM',
    tcr: 'Monovalente (1 solo sito di legame costituito dal dimero eterodimerico α/β o γ/δ)',
    clinicalSignificance: 'La bivalenza del BCR consente il cross-linking diretto sulla membrana cellulare e un’elevata avidità anche in presenza di affinità intrinseca moderata.'
  },
  {
    feature: 'Conformazione dell’Antigene',
    bcr: 'Riconosce antigeni nella loro forma nativa tridimensionale (superficiali, idrofilici)',
    tcr: 'Riconosce esclusivamente piccoli peptidi denaturati lineari (8-10 aa per MHC-I; 12-20 aa per MHC-II)',
    clinicalSignificance: 'Gli anticorpi neutralizzano tossine e virus intatti nello spazio extracellulare; i linfociti T sorvegliano il proteoma intracellulare degradato.'
  },
  {
    feature: 'Natura Chimica del Ligando',
    bcr: 'Proteine, glicani/polisaccaridi, lipidi, acidi nucleici, piccole molecole chimiche (apteni)',
    tcr: 'Quasi esclusivamente peptidi proteici (ad eccezione dei linfociti NKT che riconoscono glicolipidi su CD1d)',
    clinicalSignificance: 'I linfociti B possono montare risposte sia T-dipendenti (proteine) che T-indipendenti (capsule batteriche polisaccaridiche come pneumococco).'
  },
  {
    feature: 'Necessità di Presentazione MHC',
    bcr: 'Nessuna. Lega antigeni solubili liberi o associati a superfici microbiche intatte',
    tcr: 'Obbligatoria. Riconoscimento ristretto alle molecole MHC self (MHC restriction)',
    clinicalSignificance: 'Il TCR non può rilevare antigeni circolanti liberi, richiedendo il processamento e la presentazione da parte di cellule APC professionali (DC, macrofagi).'
  },
  {
    feature: 'Forma Solubile Secreta',
    bcr: 'Sì. Dopo l’attivazione e la differenziazione plasmacellulare, il BCR viene secreto come anticorpo circolante',
    tcr: 'No. Il TCR esiste unicamente come recettore di membrana e non viene mai secreto',
    clinicalSignificance: 'Gli anticorpi fungono da braccio umorale a distanza; i linfociti T operano esclusivamente per contatto cellula-cellula mediato da sinapsi.'
  }
];

export interface ImmunoglobulinIsotype {
  isotype: string;
  heavyChainGene: string;
  subclasses: string;
  polymericState: string;
  serumConcentration: string;
  halfLifeDays: string;
  placentalTransfer: boolean;
  complementActivation: string;
  primaryBiologicalFunction: string;
}

export const IMMUNOGLOBULIN_ISOTYPES_DATA: ImmunoglobulinIsotype[] = [
  {
    isotype: 'IgG',
    heavyChainGene: 'Cγ (Cγ1, Cγ2, Cγ3, Cγ4)',
    subclasses: 'IgG1, IgG2, IgG3, IgG4',
    polymericState: 'Monomero (2 catene pesanti γ, 2 catene leggere κ o λ)',
    serumConcentration: '8 - 16 mg/mL (isotipo più abbondante nel siero, ~75-80%)',
    halfLifeDays: '21 - 28 giorni (prolungata grazie al riciclo mediato dal recettore FcRn)',
    placentalTransfer: true,
    complementActivation: 'Forte (IgG3 > IgG1 >> IgG2; assente per IgG4)',
    primaryBiologicalFunction: 'Opsonizzazione per fagocitosi via FcγRI, citotossicità cellulo-mediata anticorpo-dipendente (ADCC) via FcγRIIIa su cellule NK, neutralizzazione di virus e tossine, immunità passiva neonatale transplacentare.'
  },
  {
    isotype: 'IgM',
    heavyChainGene: 'Cμ',
    subclasses: 'Nessuna',
    polymericState: 'Monomero di membrana sul linfocita B naive; pentamero secreto (con catena J)',
    serumConcentration: '0.5 - 2.0 mg/mL (~10% del totale)',
    halfLifeDays: '4 - 5 giorni',
    placentalTransfer: false,
    complementActivation: 'Massima efficienza (un singolo pentamero di IgM legato attiva C1q)',
    primaryBiologicalFunction: 'Primo isotipo prodotto nella risposta umorale primaria (fase precoce); eccezionale avidità e potere agglutinante; non possiede regione cerniera ma un dominio CH4 rigido addizionale.'
  },
  {
    isotype: 'IgA',
    heavyChainGene: 'Cα (Cα1, Cα2)',
    subclasses: 'IgA1, IgA2',
    polymericState: 'Monomero nel siero; dimero secreto nelle mucose (con catena J e componente secretoria)',
    serumConcentration: '1.0 - 4.0 mg/mL (~15% nel siero, ma isotipo più prodotto in assoluto nelle secrezioni)',
    halfLifeDays: '5 - 6 giorni',
    placentalTransfer: false,
    complementActivation: 'Scarsa/Assente per la via classica; può debolmente attivare la via alternativa o lectinica',
    primaryBiologicalFunction: 'Immunità mucosale locale (saliva, lacrime, muco tracheobronchiale e gastrointestinale, colostro e latte materno); transcitosi epiteliale mediata dal recettore poly-Ig; neutralizzazione non infiammatoria (immune exclusion).'
  },
  {
    isotype: 'IgE',
    heavyChainGene: 'Cε',
    subclasses: 'Nessuna',
    polymericState: 'Monomero (privo di regione cerniera, possiede 4 domini costanti CH1-CH4)',
    serumConcentration: '< 0.0005 mg/mL (concentrazione sierica bassissima, quasi interamente catturato su cellule)',
    halfLifeDays: '2 giorni nel siero (settimane se legato stabilmente al recettore cellulare)',
    placentalTransfer: false,
    complementActivation: 'Nessuna',
    primaryBiologicalFunction: 'Lega con affinità picomolare (Kd ~ 10^-10 M) il recettore FcεRI su mastociti e basofili; il cross-linking antigenico scatena la degranulazione immediata di istamina (ipersensibilità di Tipo I / anafilassi) e difesa antiparassitaria contro gli elmini.'
  },
  {
    isotype: 'IgD',
    heavyChainGene: 'Cδ',
    subclasses: 'Nessuna',
    polymericState: 'Monomero (regione cerniera lunghissima e flessibile suscettibile di proteolisi)',
    serumConcentration: '< 0.05 mg/mL (tracce nel siero)',
    halfLifeDays: '2 - 3 giorni',
    placentalTransfer: false,
    complementActivation: 'Nessuna',
    primaryBiologicalFunction: 'Espresso insieme a IgM sulla membrana dei linfociti B maturi vergini (naive) mediante splicing alternativo del pre-mRNA primario contenente i segmenti VDJ e i geni Cμ e Cδ; funge da recettore di differenziazione e attivazione.'
  }
];

export interface EnzymaticCleavageComparison {
  enzyme: string;
  cleavageSite: string;
  fragmentsGenerated: string;
  antigenBindingCapacity: string;
  effectorFunctions: string;
  biotechUse: string;
}

export const ENZYMATIC_CLEAVAGE_DATA: EnzymaticCleavageComparison[] = [
  {
    enzyme: 'Papaina (Proteasi vegetale da Carica papaya)',
    cleavageSite: 'Taglio proteolitico a livello della cerniera, situato al di sopra dei ponti disolfuro intercatena pesante',
    fragmentsGenerated: '3 frammenti indipendenti: 2 frammenti Fab (50 kDa ciascuno) e 1 frammento Fc (50 kDa)',
    antigenBindingCapacity: 'I frammenti Fab sono monovalenti: legano l’antigene con la stessa affinità dell’anticorpo nativo ma non possono causare cross-linking o precipitazione reticolare dell’antigene',
    effectorFunctions: 'Il frammento Fc cristallizza facilmente a freddo (da cui il nome); conserva la capacità di legare i recettori FcR e la componente C1q del complemento',
    biotechUse: 'Produzione di frammenti leganti l’antigene privi di attività effettrice infiammatoria o per marcatura radiodiagnostica ad alta penetrazione tissutale.'
  },
  {
    enzyme: 'Pepsina (Proteasi gastrica acida)',
    cleavageSite: 'Taglio proteolitico a livello della cerniera, situato al di sotto dei ponti disolfuro intercatena pesante',
    fragmentsGenerated: '1 singolo frammento bivalente F(ab’)2 (110 kDa) e molteplici piccoli frammenti peptidici derivati dalla completa degradazione dell’Fc',
    antigenBindingCapacity: 'Il frammento F(ab’)2 è bivalente: possiede 2 siti di legame uniti dai ponti disolfuro e può quindi formare reticoli, agglutinare e precipitare l’antigene',
    effectorFunctions: 'Completamente privo di funzioni effettrici Fc-dipendenti (nessun legame a FcγR o C1q; nessuna attivazione di ADCC o fagocitosi)',
    biotechUse: 'Ideale per farmaci biologici neutralizzanti in cui l’attivazione di cellule infiammatorie o del complemento sarebbe dannosa (es. sieri antiveleno contro tossine di serpente privi di reattività Fc).'
  }
];

export const QUIZ_LEZIONE_6: QuizQuestion[] = [
  {
    "id": "q-l6-1",
    "question": "Attraverso quale meccanismo molecolare il recettore Fc neonatale (FcRn) protegge le immunoglobuline di classe IgG dalla degradazione lisosomiale, garantendo loro un'eccezionale emivita sierica di circa 3-4 settimane?",
    "options": [
      "Lega selettivamente il frammento Fc delle IgG negli endosomi acidificati (pH < 6.5) dopo pinocitosi fluida, indirizzando la vescicola verso l'esocitosi anziché verso la fusione coi lisosomi",
      "Lega l'IgG nel sangue a pH neutro (7.4) e la trasporta nel citosol dove non sono presenti enzimi litici",
      "Fosforila la regione cerniera dell'IgG impedendo il legame delle proteasi sieriche",
      "Promuove la polimerizzazione delle IgG in pentameri resistenti all'idrolisi"
    ],
    "correctIndex": 0,
    "explanation": "Il recettore FcRn (strutturalmente correlato a MHC-I e complessato con β2-microglobulina) possiede un'affinità di legame strettamente dipendente dal pH: a pH neutro (7.4 nel plasma) non lega le IgG. Quando le cellule endoteliali internalizzano proteine per pinocitosi aspecifica, l'acidificazione dell'endosoma precoce (pH < 6.5) promuove la protonazione di residui di istidina dell'Fc, consentendo il legame ad altissima affinità con FcRn. Questo legame esclude le IgG dal percorso di degradazione lisosomiale e le indirizza alla membrana basolaterale o luminale, dove il ritorno a pH 7.4 provoca il distacco immediato della molecola intatta nel torrente ematico. Lo stesso recettore media il passaggio transplacentare delle IgG materne al feto.",
    "clinicalPearl": "Il blocco farmacologico di FcRn con anticorpi monoclonali (es. Efgartigimod) induce un rapido smaltimento delle IgG, costituendo una terapia salvavita rivoluzionaria per patologie autoimmuni mediate da autoanticorpi IgG, come la Miastenia Gravis."
  },
  {
    "id": "q-l6-2",
    "question": "Nel corso della risposta immunitaria umorale, per quale motivo la digestione enzimatica di una IgG con Pepsina produce un frammento F(ab’)2 bivalente, mentre la Papaina produce due frammenti Fab monovalenti separati?",
    "options": [
      "La Pepsina taglia i ponti disolfuro che uniscono la catena leggera alla catena pesante",
      "La Papaina taglia a monte (al di sopra) dei ponti disolfuro intercatena pesante della regione cerniera, mentre la Pepsina taglia a valle (al di sotto) preservando il ponte che tiene uniti i due Fab",
      "La Pepsina agisce esclusivamente sul frammento variabile N-terminale",
      "La Papaina digerisce completamente i domini costanti della catena leggera"
    ],
    "correctIndex": 1,
    "explanation": "La posizione del taglio rispetto ai ponti disolfuro della regione cerniera determina la valenza: la papaina taglia sul versante amminico (al di sopra) dei ponti disolfuro inter-pesante, separando fisicamente i due bracci leganti (2 Fab monovalenti) dal gambo Fc. La pepsina taglia invece sul versante carbossilico (al di sotto) dei ponti disolfuro della cerniera: i due bracci Fab restano uniti dal ponte disolfuro costituendo un'unica entità bivalente F(ab')2, mentre l'Fc viene frammentato in piccoli peptidi inattivi.",
    "clinicalPearl": "I frammenti F(ab')2 conservano la capacità di bloccare e agglutinare l'antigene senza attivare il complemento o reclutare cellule fagocitiche, proprietà sfruttata nella formulazione di sieri antiveleno privi di malattia da siero mediata da Fc."
  },
  {
    "id": "q-l6-3",
    "question": "In che modo l'eterodimero accessorio Igα/Igβ (CD79a/CD79b) consente al B Cell Receptor (BCR) di trasdurre il segnale di attivazione in seguito al legame con l'antigene?",
    "options": [
      "Presenta siti di legame diretti per le molecole del complemento C3b",
      "Esegue una ricombinazione genica somatica immediata nel citoplasma",
      "Fornisce una lunga coda citoplasmatica contenente motivi ITAM che vengono fosforilati dalle chinasi Src (Lyn/Fyn), reclutando e attivando la tirosin-chinasi Syk",
      "Attiva direttamente la secrezione esocitica delle IgG senza intervento del nucleo"
    ],
    "correctIndex": 2,
    "explanation": "Il BCR di membrana (mIgM o mIgD) possiede una coda citoplasmatica cortissima (solo 3 aminoacidi, Lys-Val-Lys) totalmente priva di attività enzimatica o di interazione con adattatori. È obbligatoriamente associato in modo non covalente all'eterodimero transmembrana Igα (CD79a) e Igβ (CD79b), legati da un ponte disolfuro. Ognuna di queste catene possiede un motivo citoplasmatico ITAM. Il cross-linking recettoriale attiva le chinasi Lyn e Fyn nelle zattere lipidiche, che fosforilano le due tirosine dell'ITAM, creando una docking site per i domini tandem SH2 della chinasi Syk, che accende la cascata mitogenica e differenziativa.",
    "clinicalPearl": "Mutazioni autosomiche recessive nei geni codificanti per CD79a o CD79b provocano agammaglobulinemia congenita con arresto precoce dello sviluppo dei linfociti B allo stadio pro-B, fenotipicamente indistinguibile dall'agammaglobulinemia legata all'X (malattia di Bruton)."
  },
  {
    "id": "q-l6-4",
    "question": "Qual è il principio immunologico alla base dell'effetto 'Aptene-Carrier' e della progettazione dei vaccini coniugati moderni contro batteri capsulati (es. Neisseria meningitidis, Streptococcus pneumoniae)?",
    "options": [
      "L'aptene polisaccaridico attiva direttamente i linfociti T CD8+ citotossici",
      "L'aptene impedisce la formazione di anticorpi contro il batterio",
      "La proteina carrier degrada il polisaccaride nel sangue aumentandone la tossicità",
      "I polisaccaridi capsulari batterici fungono da apteni (non immunogeni per le cellule T); coniugandoli covalentemente a una proteina carrier (es. tossoide difterico), il linfocita B specifico per il polisaccaride internalizza il complesso e presenta peptidi del carrier all'MHC-II, reclutando l'aiuto dei linfociti T helper e inducendo switch isotipico e memoria"
    ],
    "correctIndex": 3,
    "explanation": "I polisaccaridi capsulari batterici sono antigeni T-indipendenti: possono attivare transitoriamente cellule B producendo IgM a bassa affinità, ma nei bambini sotto i 2 anni non inducono memoria né switch a IgG. Legando chimicamente il polisaccaride (aptene) a una proteina carrier immunogena (es. tossoide tetanico o difterico CRM197), il BCR del linfocita B riconosce il polisaccaride, endocita l'intero coniugato, digerisce la proteina carrier e ne espone i peptidi su MHC-II. Un linfocita T helper specifico per il peptide del carrier riconosce il complesso ed emette citochine e CD40L verso il linfocita B, trasformando una risposta T-indipendente in una risposta T-dipendente con produzione di IgG ad alta affinità e memoria immunologica a lungo termine.",
    "clinicalPearl": "L'introduzione dei vaccini coniugati (es. PCV13 per lo pneumococco) ha quasi azzerato le meningiti e le sepsi fulminanti da batteri capsulati nei lattanti di tutto il mondo."
  },
  {
    "id": "q-l6-5",
    "question": "Nel profilo elettroforetico delle proteine sieriche di un paziente, quale reperto distingue fisiopatologicamente una risposta infiammatoria policlonale da una gammopatia monoclonale (es. Mieloma Multiplo)?",
    "options": [
      "Nella policlonale si osserva un allargamento a base ampia e diffuso della banda gamma (ipergammaglobulinemia policlonale), mentre nella monoclonale è presente un picco stretto, appuntito e simmetrico a guglia (componente monoclonale o picco M) derivato da un singolo clone plasmacellulare proliferante",
      "Nella policlonale le immunoglobuline migrano nella frazione albuminica, mentre nel mieloma migrano nella frazione alfa-1",
      "Il picco monoclonale è formato esclusivamente da catene leggere libere urinarie",
      "La policlonale mostra l'assenza totale di immunoglobuline IgG"
    ],
    "correctIndex": 0,
    "explanation": "In condizioni fisiologiche o in corso di flogosi/infezioni, la risposta anticorpale è generata da migliaia di cloni di plasmacellule differenti, ciascuno producente immunoglobuline con sequenze e cariche elettriche leggermente diverse; ciò si traduce all'elettroforesi in una cupola diffusa a base larga nella zona gamma. Nella gammopatia monoclonale, un singolo clone neoplastico o aberrante produce una quantità esorbitante di un'unica identica molecola anticorpale (con identica mobilità elettroforetica), creando un picco stretto, alto e aguzzo (picco M o componente monoclonale), tipico del mieloma multiplo, della macroglobulinemia di Waldenström o della MGUS.",
    "clinicalPearl": "In presenza di picco M all'elettroforesi, l'immunofissazione sierica è l'esame di conferma indispensabile per tipizzare con esattezza la classe di catena pesante (es. IgG, IgA, IgM) e la restrizione clonale di catena leggera (κ o λ)."
  }
];

export const FLASHCARDS_LEZIONE_6: Flashcard[] = [
  {
    id: 'fc-l6-1',
    front: "Quali sono le differenze strutturali e funzionali chiave tra i frammenti Fab e il frammento Fc generati dalla digestione con papaina?",
    back: "La papaina taglia al di sopra dei ponti disolfuro della regione cerniera generando 2 frammenti Fab monovalenti (ciascuno costituito da una catena leggera completa e dai domini VH e CH1 della catena pesante, deputati al legame dell'antigene) e 1 frammento Fc cristallizzabile (costituito dai domini CH2 e CH3 dimerizzati della catena pesante, responsabili delle funzioni effettrici: legame ai recettori FcR, C1q ed FcRn).",
    category: 'Molecolare'
  },
  {
    id: 'fc-l6-2',
    front: "Cos'è il recettore FcRn e perché conferisce alle IgG un'emivita plasmatica di 21-28 giorni?",
    back: "Il recettore Fc neonatale (FcRn) è un recettore espresso sulle cellule endoteliali che lega le IgG solo a pH acido (< 6.5) negli endosomi dopo pinocitosi fluida. Salvaguarda le IgG dalla degradazione lisosomiale riciclandole sulla superficie cellulare, dove a pH fisiologico (7.4) vengono rilasciate intatte nel sangue. Media inoltre il trasporto transplacentare madre-feto.",
    category: 'Cellulare'
  },
  {
    id: 'fc-l6-3',
    front: "Cosa si intende per 'Allotipo' e 'Idiotipo' nella genetica delle immunoglobuline?",
    back: "Allotipo: varianti alleliche polimorfiche delle regioni costanti (presenti in alcuni individui della stessa specie ma non in tutti, es. marcatori Gm delle IgG). Idiotipo: l'insieme delle caratteristiche antigeniche e conformazionali delle regioni variabili (CDR1, CDR2, CDR3) che conferiscono l'unicità del sito combinatorio al singolo clone di linfociti B.",
    category: 'Fondamenti'
  },
  {
    id: 'fc-l6-4',
    front: "Qual è la struttura molecolare delle IgA secretorie e quale ruolo svolgono la catena J e la componente secretoria?",
    back: "Le IgA secretorie sono dimeri uniti covalentemente dalla catena J (15 kDa). Durante la transcitosi attraverso l'epitelio mediata dal recettore poly-Ig, quest'ultimo viene clivato lasciando un frammento extracellulare (componente secretoria) avvolto attorno al dimero di IgA, proteggendolo dalla digestione enzimatica e proteolitica nei fluidi mucosali.",
    category: 'Molecolare'
  },
  {
    id: 'fc-l6-5',
    front: "Qual è la cascata di trasduzione del segnale del BCR mediata da Igα/Igβ, Lyn e Syk?",
    back: "1. Il cross-linking recettoriale da antigene multivalente raggruppa i complessi BCR nelle zattere lipidiche (lipid rafts).\n2. Le chinasi Src (Lyn, Fyn) fosforilano i residui di tirosina nei domini ITAM di Igα (CD79a) e Igβ (CD79b).\n3. L'ITAM doppiamente fosforilato recluta la tirosin-chinasi citoplasmatica Syk tramite domini SH2.\n4. Syk fosforila l'adattatore BLNK attivando PLCγ2, la via del calcio (IP3/DAG) e PKC, inducendo NF-κB, NFAT e AP-1.",
    category: 'Cellulare'
  },
  {
    id: 'fc-l6-6',
    front: "Come funziona il modello 'Aptene-Carrier' nei vaccini coniugati contro i batteri capsulati?",
    back: "L'aptene polisaccaridico capsulare lega il BCR del linfocita B specifico ma non stimola i T helper. Coniugato covalentemente a una proteina carrier (es. tossoide), il linfocita B endocita il complesso, processa la proteina carrier e ne presenta i peptidi su MHC-II ai linfociti T helper. L'aiuto T-dipendente induce scambio isotipico (switch a IgG) e memoria immunologica duratura anche nel neonato.",
    category: 'Clinica'
  }
];
