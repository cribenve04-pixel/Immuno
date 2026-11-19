export interface ExamQuestion {
  id: string;
  lessonNumber: number;
  lessonTitle: string;
  topicCategory: string;
  professor: 'Galandrini' | 'Morrone' | 'Soriani' | 'Molfetta' | 'Rinaldi' | 'Generale';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  clinicalPearl: string;
  targetSectionId: string;
}

export const EXAM_TOPIC_CATEGORIES = [
  "Tutti gli Argomenti",
  "Immunità Innata, PRR & Barriere",
  "Citochine, JAK-STAT & Chemochine",
  "MHC, HLA & Presentazione Antigenica",
  "Linfociti B, Anticorpi & Centro Germinativo",
  "Linfociti T, Sinapsi & Differenziamento Th",
  "Sistema del Complemento",
  "Cellule NK & Linfociti Citotossici",
  "Immunità Mucosale (GALT) & Microbiota",
  "Ipersensibilità (Tipi I, II, III, IV)",
  "Tolleranza, Autoimmunità & Immunopatologia",
  "Trapianti & Immunologia Oncologica",
  "Immunodeficienze (SCID, Bruton, HIV & AIDS)"
] as const;

export const PROFESSORS_LIST = [
  "Tutti i Docenti",
  "Prof.ssa Ricciarda Galandrini",
  "Prof.ssa Laura Morrone",
  "Prof.ssa Alessandra Soriani",
  "Prof.ssa Rosa Molfetta",
  "Prof.ssa Rinaldi"
] as const;

export const ALL_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    "id": "gal-1",
    "lessonNumber": 30,
    "lessonTitle": "Tolleranza Immunitaria Centrale e Periferica",
    "topicCategory": "Tolleranza, Autoimmunità & Immunopatologia",
    "professor": "Galandrini",
    "question": "Quale fattore di trascrizione è costitutivamente espresso dai linfociti T regolatori (Treg) ed è indispensabile per la loro funzione soppressoria, la cui mutazione provoca la sindrome IPEX?",
    "options": [
      "T-bet (T-box expressed in T cells)",
      "FOXP3 (Forkhead box P3)",
      "GATA-3",
      "RORγt"
    ],
    "correctIndex": 1,
    "explanation": "FOXP3 è il master regulator dei linfociti Treg naturali (tTreg) e periferici (pTreg). La sua espressione è indispensabile per mantenere l'omeostasi e la tolleranza periferica. Mutazioni con perdita di funzione del gene FOXP3 (situato sul cromosoma X) provocano la sindrome IPEX (Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked syndrome).",
    "clinicalPearl": "Domanda tipica orale Galandrini: la professoressa richiede il gene mutato (FOXP3), la trasmissione legata all'X e la triade clinica di IPEX (diabete neonatale autoimmune, enteropatia grave con diarrea intrattabile ed eczema).",
    "targetSectionId": "sec-30-3"
  },
  {
    "id": "gal-2",
    "lessonNumber": 30,
    "lessonTitle": "Tolleranza Immunitaria Centrale e Periferica",
    "topicCategory": "Tolleranza, Autoimmunità & Immunopatologia",
    "professor": "Galandrini",
    "question": "In che modo il recettore inibitorio CTLA-4 (CD152) rimuove fisicamente i costimolatori B7-1 (CD80) e B7-2 (CD86) dalla superficie delle cellule dendritiche?",
    "options": [
      "Tramite clivaggio proteolitico mediato da metalloproteasi extracellulari",
      "Attraverso il processo di trans-endocitosi ligando-dipendente e degradazione lisosomiale",
      "Inducendo l'internalizzazione mediata da caveolina all'interno dell'APC",
      "Fosforilando i residui intracellulari di tirosina di B7"
    ],
    "correctIndex": 1,
    "explanation": "CTLA-4 possiede un'affinità e un'avidità per B7-1 e B7-2 notevolmente superiori rispetto a CD28. Oltre alla competizione sterica, CTLA-4 espresso sui Treg e sui T attivati cattura fisicamente le molecole B7 dalla membrana dell'APC mediante trans-endocitosi, trasportandole all'interno del linfocita T dove vengono degradate nei lisosomi, depauperando l'APC di segnale costimolatorio.",
    "clinicalPearl": "Galandrini chiede sempre la struttura dimero-dipendente di CTLA-4, la trans-endocitosi e la differenza con PD-1 (CTLA-4 agisce nel priming linfonodale, PD-1 nei tessuti periferici).",
    "targetSectionId": "sec-30-5"
  },
  {
    "id": "gal-3",
    "lessonNumber": 31,
    "lessonTitle": "Malattie Autoimmuni",
    "topicCategory": "Tolleranza, Autoimmunità & Immunopatologia",
    "professor": "Galandrini",
    "question": "Quale recente scoperta epigenetica giustifica la marcata preponderanza femminile (≈ 75% dei casi) nelle malattie autoimmuni sistemiche come il LES?",
    "options": [
      "La sovraespressione estrogenica del recettore TLR-4 sui mastociti",
      "Il complesso ribonucleoproteico formato dal long non-coding RNA Xist con 81 proteine self",
      "La mutazione omozigote costitutiva della deossiribonucleasi 1 (DNasi 1)",
      "L'ipermetilazione del promotore del gene codificante per IFN-γ"
    ],
    "correctIndex": 1,
    "explanation": "Lo studio evidenziato a lezione ha dimostrato che il long non-coding RNA Xist, espresso esclusivamente nelle femmine per l'inattivazione random di uno dei due cromosomi X, si associa fisicamente a ben 81 diverse ribonucleoproteine nucleari. Questo complesso ribonucleoproteico funge da potente neoantigene immunogenico quando rilasciato nei corpi apoptotici, scatenando risposte autoanticorpali.",
    "clinicalPearl": "Galandrini cita espressamente questo recente lavoro pubblicato su Cell per motivare il dimorfismo sessuale dell'autoimmunità accanto all'influenza ormonale estro-progestinica.",
    "targetSectionId": "sec-31-1"
  },
  {
    "id": "gal-4",
    "lessonNumber": 31,
    "lessonTitle": "Malattie Autoimmuni",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Galandrini",
    "question": "Nel Morbo di Basedow-Graves, quale meccanismo d'azione esercitano gli autoanticorpi diretti contro il recettore del TSH (TSHR)?",
    "options": [
      "Effetto depletante mediato da ADCC da parte delle cellule NK sui tireociti",
      "Effetto antagonista con blocco competitivo e atrofia tiroidea",
      "Effetto agonista stimolatorio che mima l'azione del TSH determinando iperproduzione autonoma di ormoni tiroidei",
      "Attivazione del complemento con lisi osmotica MAC dei follicoli tiroidei"
    ],
    "correctIndex": 2,
    "explanation": "Gli anticorpi anti-TSHR nel Morbo di Basedow-Graves agiscono come agonisti: si legano al recettore attivandolo costitutivamente, con conseguente iperproduzione di ormoni tiroidei (T3/T4) e blocco per feedback negativo della secrezione di TSH ipofisario. Inoltre, cross-reagiscono stimolando il recettore IGF-1R sui fibroblasti retro-orbitari causando esoftalmo.",
    "clinicalPearl": "Galandrini insiste sulla dicotomia funzionale: Graves = anticorpi agonisti stimolanti (ipertiroidismo + esoftalmo via IGF-1R); Miastenia Gravis = anticorpi antagonisti e depletanti (blocco placca neuromuscolare AChR).",
    "targetSectionId": "sec-31-4"
  },
  {
    "id": "gal-5",
    "lessonNumber": 32,
    "lessonTitle": "Immunologia Oncologica ed Immunoterapia dei Tumori",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Galandrini",
    "question": "Quale farmaco biologico è il cardine salvavita nella gestione della Sindrome da Rilascio di Citochine (CRS) scatenata dalla terapia con cellule CAR-T?",
    "options": [
      "Infliximab (anti-TNF-α)",
      "Tocilizumab (anticorpo monoclonale antagonista del recettore dell'IL-6)",
      "Rituximab (anti-CD20)",
      "Nivolumab (anti-PD-1)"
    ],
    "correctIndex": 1,
    "explanation": "La CRS (Cytokine Release Syndrome) indotta dall'iperattivazione delle CAR-T è sostenuta da una massiccia secrezione di interleuchina-6 (IL-6) da parte dei macrofagi attivati. L'antagonista recettoriale Tocilizumab (anti-IL-6R), associato o meno a corticosteroidi ad alte dosi, blocca la cascata citochinica controllando tempestivamente febbre maligna, ipotensione e shock.",
    "clinicalPearl": "Galandrini richiede sia il meccanismo della CRS (IL-6 macrofagica post-CAR-T) sia il farmaco d'elezione approvato (Tocilizumab).",
    "targetSectionId": "sec-32-8"
  },
  {
    "id": "gal-6",
    "lessonNumber": 33,
    "lessonTitle": "Infezione da HIV e Patogenesi dell'AIDS",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Galandrini",
    "question": "Quale duplice meccanismo patogenetico esercita la proteina accessoria virale Nef di HIV-1?",
    "options": [
      "Inibizione della trascrittasi inversa e blocco della trascrizione cellulare",
      "Degradazione lisosomiale di MHC-I per evadere i CTL e induzione di filopodi macrofagici che trasferiscono Nef ai linfociti B inibendo il class-switch",
      "Sostituzione del corecettore CCR5 con CXCR4 mediante fusione diretta",
      "Attivazione selettiva della cascata classica del complemento contro i T CD4+"
    ],
    "correctIndex": 1,
    "explanation": "Nef rimuove MHC-I dal Golgi e lo degrada nei lisosomi, rendendo le cellule infette invisibili ai CTL CD8+. Inoltre, stimola i macrofagi a produrre filopodi che tramite trogocitosi trasferiscono Nef ai linfociti B, bloccando lo switch isotipico e generando ipergammaglobulinemia policlonale inefficace.",
    "clinicalPearl": "Domanda da 30 e lode di Galandrini: la trogocitosi mediata da filopodi macrofagici con trasferimento di Nef ai linfociti B.",
    "targetSectionId": "sec-33-3"
  },
  {
    "id": "mor-1",
    "lessonNumber": 8,
    "lessonTitle": "MHC di Classe I & II, Genetica HLA e Presentazione",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Morrone",
    "question": "Come viene definita la modalità di trasmissione genetica delle molecole HLA di classe I e classe II nei mammiferi?",
    "options": [
      "Eredità autosomica recessiva con penetranza incompleta",
      "Espressione codominante: gli alleli ereditati da entrambi i genitori vengono espressi simultaneamente",
      "Esclusione allelica come per le immunoglobuline e il TCR",
      "Eredità legata al cromosoma X con imprinting materno"
    ],
    "correctIndex": 1,
    "explanation": "I geni HLA sul braccio corto del cromosoma 6 (6p21.3) sono espressi in modo rigorosamente CODOMINANTE: ogni individuo esprime contemporaneamente sia gli alleli di origine materna sia quelli di origine paterna su ogni cellula, garantendo la massima diversità di presentazione antigenica.",
    "clinicalPearl": "Domanda fissa della Prof.ssa Morrone: 'I geni MHC sono espressi con esclusione allelica o codominanza?'. Risposta: codominanza su tutte le cellule esprimenti!",
    "targetSectionId": "sec-8-3"
  },
  {
    "id": "mor-2",
    "lessonNumber": 15,
    "lessonTitle": "Il Sistema del Complemento",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale deficit molecolare acquisito di proteine regolatrici di membrana determina la patogenesi dell'Emoglobinuria Parossistica Notturna (EPN)?",
    "options": [
      "Deficit quantitativo o funzionale dell'inibitore C1-INH",
      "Mutazione somatica del gene PIGA con mancata sintesi dell'ancora GPI e assenza di DAF (CD55) e CD59 sulla membrana eritrocitaria",
      "Deficit congenito del Fattore H e del Fattore I plasmatici",
      "Iperattivazione costitutiva della via lectinica della MASP-2"
    ],
    "correctIndex": 1,
    "explanation": "Nell'EPN una mutazione somatica del gene PIGA nelle cellule staminali emopoietiche impedisce la sintesi dell'ancora glicosilfosfatidilinositolo (GPI). I globuli rossi mancano quindi di DAF (CD55, che degrada la C3 convertasi) e di CD59 (protectina, che blocca l'inserzione di C9 nel MAC), risultando ipersensibili alla lisi osmotica complemento-mediata.",
    "clinicalPearl": "La Prof.ssa Morrone apprezza particolarmente chi cita l'EPN anziché il solo angioedema ereditario come patologia da mancata regolazione del complemento.",
    "targetSectionId": "sec-15-10"
  },
  {
    "id": "mor-3",
    "lessonNumber": 29,
    "lessonTitle": "Immunologia dei Trapianti & HSC",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Morrone",
    "question": "Qual è la differenza fondamentale tra alloriconoscimento diretto e indiretto nel rigetto acuto d'organo solido?",
    "options": [
      "Il riconoscimento diretto coinvolge le IgE, l'indiretto coinvolge i macrofagi M2",
      "Nel diretto i CTL del ricevente riconoscono intatte le molecole MHC allogeniche sulle APC del donatore; nell'indiretto le APC del ricevente processano e presentano peptidi allogenici su proprio MHC-II",
      "Nel diretto il rigetto è mediato da anticorpi preformati; nell'indiretto da cellule NK",
      "Nel diretto il trapianto è singenico; nell'indiretto è xenogenico"
    ],
    "correctIndex": 1,
    "explanation": "Nel riconoscimento diretto i linfociti T del ricevente riconoscono ad altissima frequenza clonale (1-10%) la molecola MHC allogenica intatta sulle APC passeggere del donatore (cross-reattività allogenica). Nel riconoscimento indiretto le APC del ricevente internalizzano frammenti dell'organo trapiantato, li processano ed espongono peptidi allogenici sulle proprie molecole self MHC-II a linfociti T helper.",
    "clinicalPearl": "Morrone chiede sempre di descrivere entrambe le vie, collegando la diretta al rigetto acuto cellulo-mediato e l'indiretta al rigetto cronico e alla produzione di anticorpi donatore-specifici (DSA).",
    "targetSectionId": "sec-29-5"
  },
  {
    "id": "mor-4",
    "lessonNumber": 23,
    "lessonTitle": "Immunità Mucosale & GALT",
    "topicCategory": "Immunità Mucosale (GALT) & Microbiota",
    "professor": "Morrone",
    "question": "Quale recettore cellulare specializzato è responsabile del trasporto transepiteliale e rilascio delle IgA dimeriche nel lume intestinale?",
    "options": [
      "Il recettore neonatale FcRn (Brambell)",
      "Il recettore polimerico delle immunoglobuline (pIgR)",
      "Il recettore FcγRIIIA (CD16)",
      "Il recettore lectinico DC-SIGN"
    ],
    "correctIndex": 1,
    "explanation": "Il pIgR (polymeric Immunoglobulin Receptor) espresso sulla membrana basolaterale degli enterociti lega le IgA dimeriche dotate di catena J. Il complesso viene endocitato, trasportato per transcitosi al polo apicale e clivato: la porzione extracellulare rimane ancorata all'anticorpo come Componente Secretoria (SC), proteggendo la sIgA dalle proteasi luminali.",
    "clinicalPearl": "Morrone vuole sapere la struttura della sIgA (dimero + catena J + componente secretoria) e la transcitosi mediata da pIgR.",
    "targetSectionId": "sec-23-10"
  },
  {
    "id": "sor-1",
    "lessonNumber": 4,
    "lessonTitle": "Pattern Recognition Receptors (PRR) & Inflammasoma",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale recettore intracellulare dell'immunità innata forma un oligomero con la proteina adattatrice ASC e la pro-caspasi-1 per formare l'inflammasoma canonico?",
    "options": [
      "TLR-4",
      "NLRP3 (NOD-like receptor family pyrin domain containing 3)",
      "RIG-I",
      "cGAS"
    ],
    "correctIndex": 1,
    "explanation": "NLRP3 è un sensore citosolico che, in risposta a stress di membrana, efflusso di K⁺, cristalli di urato o ROS, oligomerizza reclutando l'adattatore ASC e la procaspasi-1 nell'inflammasoma. La caspasi-1 attiva cliva i precursori pro-IL-1β e pro-IL-18 nelle loro forme mature e taglia la gasdermina D (GSDMD) innescando la piroptosi.",
    "clinicalPearl": "La Prof.ssa Soriani chiede spesso la compartimentazione dei PRR: di superficie (TLR1/2/4/5/6), endosomiali (TLR3/7/8/9) e citosolici (NLR, RIG-I, cGAS/STING) con focus su NLRP3.",
    "targetSectionId": "sec-4-6"
  },
  {
    "id": "sor-2",
    "lessonNumber": 20,
    "lessonTitle": "Linfociti T Citotossici & Sindromi HLH",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Soriani",
    "question": "Quale alterazione molecolare è alla base della Linfoistiocitosi Emofagocitica Familiare di tipo 2 (FHL2)?",
    "options": [
      "Mutazione con perdita di funzione del gene PRF1 codificante per la Perforina",
      "Mutazione della catena gamma comune del recettore per IL-2",
      "Deficit dell'enzima tirosina chinasi di Bruton (Btk)",
      "Delezione del fattore di trascrizione AIRE"
    ],
    "correctIndex": 0,
    "explanation": "Nella FHL2 (Familial Hemophagocytic Lymphohistiocytosis type 2), la mutazione omozigote del gene PRF1 impedisce la sintesi della perforina nei CTL e nelle cellule NK. Le cellule citotossiche non riescono a lisare il bersaglio infettato, provocando un'iperstimolazione cronica con tempesta di IFN-γ, iperattivazione fagocitica distruttiva dei macrofagi (emofagocitosi) e pancitopenia severa.",
    "clinicalPearl": "Domanda classica della Prof.ssa Soriani: fisiopatologia dell'emofagocitosi (mancato killing -> loop iper-infiammatorio di IFN-γ e attivazione macrofagica incontrollata).",
    "targetSectionId": "sec-20-10"
  },
  {
    "id": "sor-3",
    "lessonNumber": 15,
    "lessonTitle": "Il Sistema del Complemento",
    "topicCategory": "Sistema del Complemento",
    "professor": "Soriani",
    "question": "Quale legame chimico altamente reattivo consente ai frammenti C3b e C4b del complemento di ancorarsi covalentemente alle membrane biologiche?",
    "options": [
      "Un ponte disolfuro intercatena reversibile",
      "Un legame estere o ammidico mediato dalla rottura di un anello tioestere interno",
      "Un legame ionico calcio-dipendente con i lipidi carichi negativamente",
      "Un'interazione idrofobica sterica non covalente"
    ],
    "correctIndex": 1,
    "explanation": "Sia C3 che C4 contengono un anello tioestere intramolecolare protetto. Quando la convertasi cliva la molecola rilasciando C3a o C4a, il legame tioestere viene esposto e subisce un attacco nucleofilo da parte di gruppi ossidrilici (-OH) o amminici (-NH2) presenti su glicoproteine o carboidrati della membrana del patogeno, formando un legame covalente stabile.",
    "clinicalPearl": "Soriani chiede specificamente: 'Come fanno C3b e C4b ad attaccarsi alla membrana?'. La risposta attesa è: rottura dell'anello tioestere con formazione di legame estere/ammidico.",
    "targetSectionId": "sec-15-4"
  },
  {
    "id": "sor-4",
    "lessonNumber": 17,
    "lessonTitle": "Funzioni Effettrici degli Anticorpi & Recettori Fc",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Soriani",
    "question": "Quale recettore cellulare atipico per le IgG è responsabile dell'estensione dell'emivita delle IgG sieriche a oltre 21-28 giorni e del passaggio transplacentare madre-feto?",
    "options": [
      "FcγRI (CD64)",
      "Il recettore neonatale per l'Fc (FcRn / Recettore di Brambell)",
      "FcγRIIB (CD32b)",
      "Il recettore polimerico pIgR"
    ],
    "correctIndex": 1,
    "explanation": "FcRn è un eterodimero strutturalmente simile a MHC-I (associato a β2-microglobulina). Nei lisosomi a pH acido (≈ 6.0) lega l'Fc delle IgG internalizzate per pinocitosi, sottraendole alla degradazione lisosomiale e riciclandole sulla superficie cellulare a pH neutro (7.4) dove le rilascia nel torrente circolatorio. Media inoltre il trasporto transplacentare delle IgG materne.",
    "clinicalPearl": "Soriani chiede il meccanismo pH-dipendente di FcRn e la sua applicazione biotecnologica per estendere l'emivita di anticorpi terapeutici (es. mutazioni YTE).",
    "targetSectionId": "sec-17-5"
  },
  {
    "id": "molf-1",
    "lessonNumber": 21,
    "lessonTitle": "Cellule Natural Killer (NK)",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Molfetta",
    "question": "In che modo le cellule tumorali possono eludere il riconoscimento e l'uccisione mediata dal recettore attivatorio NKG2D delle cellule NK?",
    "options": [
      "Upregolando costitutivamente le molecole HLA-A e HLA-B",
      "Attraverso lo 'shedding' proteolitico dei ligandi MICA e MICB, rilasciati sotto forma solubile che satura ed induce l'internalizzazione di NKG2D",
      "Secernendo grandi quantità di perforina solubile nel microambiente",
      "Inibendo la trascrizione della catena gamma comune di IL-15"
    ],
    "correctIndex": 1,
    "explanation": "Le cellule neoplastiche iper-esprimono metalloproteasi di membrana (ADAM10, ADAM17) che tagliano il dominio extracellulare dei ligandi di stress indotto MICA e MICB. Le forme solubili di MICA/B circolano e saturano i recettori NKG2D sulle cellule NK provocandone l'internalizzazione e degradazione lisosomiale ('accecamento' dell'NK).",
    "clinicalPearl": "Molfetta chiede costantemente i meccanismi di immunoevasione tumorale verso le NK: perdita di MHC-I attiva il missing-self, ma il rilascio in vescicole o lo shedding dei ligandi di NKG2D neutralizza la risposta.",
    "targetSectionId": "sec-21-10"
  },
  {
    "id": "molf-2",
    "lessonNumber": 18,
    "lessonTitle": "Anticorpi Monoclonali, BiTE & ADC",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Molfetta",
    "question": "Qual è il meccanismo d'azione dei costrutti bispecifici BiTE (Bispecific T-cell Engagers), come ad esempio Blinatumomab?",
    "options": [
      "Leghano due molecole di checkpoint inibitori (PD-1 e CTLA-4) simultaneamente",
      "Posseggono due domini scFv: uno specifico per un antigene tumorale (CD19) e uno specifico per la molecola CD3 dei linfociti T, forzando la formazione di una sinapsi citotossica indipendente da MHC",
      "Coniugano un anticorpo con un chemioterapico altamente tossico tramite linker clivabile",
      "Stimolano selettivamente i macrofagi M2 inducendo la produzione di TGF-β"
    ],
    "correctIndex": 1,
    "explanation": "I BiTE sono proteine di fusione ricombinanti composte da due scFv legati in tandem. Blinatumomab riconosce da un lato l'antigene CD19 espresso sui blasti di leucemia linfoide acuta e dall'altro la catena CD3ε dei linfociti T, accostando fisicamente qualsiasi CTL al bersaglio e scatenando la degranulazione di perforina e granzimi indipendentemente dal TCR e dalle molecole MHC.",
    "clinicalPearl": "Molfetta richiede la distinzione precisa tra mAbs nudi (ADCC, CDC), ADC (veicolazione intracellulare di citotossici come T-DM1) e BiTE/BiKE (ponti bispecifici T-tumore o NK-tumore).",
    "targetSectionId": "sec-18-6"
  },
  {
    "id": "molf-3",
    "lessonNumber": 24,
    "lessonTitle": "Vaccinologia Generale",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Nei vaccini coniugati contro batteri capsulati (es. Haemophilus influenzae b, Pneumococco), perché il polisaccaride capsulare viene legato covalentemente a un carrier proteico?",
    "options": [
      "Per inibire l'attivazione della via classica del complemento",
      "Per trasformare un antigene T-indipendente di tipo 2 (TI-2) in un antigene T-dipendente, inducendo memoria immunologica e switch a IgG anche nei lattanti sotto i 2 anni",
      "Per favorire l'ingresso del vaccino per endocitosi nei macrofagi alveolari",
      "Per stimolare unicamente le cellule dendritiche plasmacitoidi a secernere IFN-α"
    ],
    "correctIndex": 1,
    "explanation": "I polisaccaridi capsulari sono antigeni TI-2: stimolano i linfociti B periferici per cross-linking ma non possono essere presentati su MHC-II. Nei bambini sotto i 2 anni la milza marginale è immatura e la risposta è nulla. Coniugando il polisaccaride a un carrier proteico (tetano o difterite), il linfocita B specifico internalizza l'intero complesso ed espone peptidi del carrier su MHC-II a linfociti T helper (linked recognition), inducendo reazione del centro germinativo, switch a IgG e memoria a lungo termine.",
    "clinicalPearl": "Molfetta ama chiedere: 'Come funziona un vaccino coniugato?'. Risposta: effetto aptene-carrier con linked recognition tra B e Th.",
    "targetSectionId": "sec-24-9"
  },
  {
    "id": "rin-1",
    "lessonNumber": 5,
    "lessonTitle": "Barriere, Stravaso & Stato Antivirale",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Rinaldi",
    "question": "Durante la cascata dello stravaso leucocitario, quale transizione conformazionale subiscono le integrine leucocitarie (come LFA-1 e VLA-4) a seguito dello stimolo chemochinico?",
    "options": [
      "Passaggio dalla conformazione a riposo piegata (low-affinity) alla conformazione estesa aperta (high-affinity) mediata da segnalazione inside-out",
      "Clivaggio della catena beta con rilascio del dominio extracellulare",
      "Trimerizzazione calcio-indipendente con le selectine endoteliali",
      "Defosforilazione delle code intracellulari con perdita di adesione"
    ],
    "correctIndex": 0,
    "explanation": "Durante il rolling mediato dalle selectine, il legame delle chemochine endoteliali (es. CXCL8) ai recettori GPCR del leucocita innesca una cascata di segnalazione intracellulare ('inside-out signaling') che fosforila e modifica il citoscheletro, raddrizzando le integrine dalla forma piegata inattiva a quella estesa ad alta affinità. Questa conformazione lega saldamente ICAM-1 e VCAM-1 arrestando il leucocita.",
    "clinicalPearl": "La Prof.ssa Rinaldi è estremamente puntigliosa sulla struttura delle selectine (domini lectina, EGF e complement-regulatory) e sul cambio conformazionale delle integrine inside-out.",
    "targetSectionId": "sec-5-4"
  },
  {
    "id": "rin-2",
    "lessonNumber": 26,
    "lessonTitle": "Ipersensibilità di Tipo I (Immediata)",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Rinaldi",
    "question": "Nel corso della reazione anafilattica di tipo I, quali mediatori lipidici neoformati derivano dal metabolismo dell'acido arachidonico ad opera della via della 5-lipossigenasi nei mastociti?",
    "options": [
      "Istamina ed Eparina preformate nei granuli",
      "Leucotrieni cisteinilici (LTC4, LTD4, LTE4) responsabili di potente broncocostrizione prolungata e iperpermeabilità vascolare",
      "Prostaglandina D2 (PGD2) sintetizzata dalla ciclossigenasi",
      "Fattore attivante le piastrine (PAF) di origine proteasomica"
    ],
    "correctIndex": 1,
    "explanation": "I granuli contengono mediatori preformati (istamina, proteoglicani, proteasi neutre). In seguito al cross-linking di FcεRI, l'attivazione della fosfolipasi A2 libera acido arachidonico, che viene metabolizzato via 5-lipossigenasi in leucotrieni (LTC4, LTD4, LTE4, storicamente noti come SRS-A: Slow-Reacting Substance of Anaphylaxis), con potenza broncocostrittrice 1000 volte superiore all'istamina.",
    "clinicalPearl": "Rinaldi si sofferma sempre sui dettagli biochimici dei mastociti: mediatori preformati vs mediatori lipidici neoformati (via COX -> PGD2; via 5-LOX -> leucotrieni LTC4/D4/E4).",
    "targetSectionId": "sec-26-6"
  },
  {
    "id": "rin-3",
    "lessonNumber": 9,
    "lessonTitle": "Processazione degli Antigeni",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Rinaldi",
    "question": "Quale affermazione definisce con precisione la distinzione tra epitopi riconosciuti dai linfociti T rispetto a quelli riconosciuti dai linfociti B?",
    "options": [
      "I linfociti T riconoscono solo proteine native tridimensionali; i linfociti B riconoscono frammenti peptidici",
      "I linfociti T riconoscono esclusivamente brevi peptidi lineari (8-10 o 12-20 aa) alloggiati nella tasca di molecole MHC; i linfociti B riconoscono epitopi conformazionali o lineari di proteine native intatte, polisaccaridi o lipidi",
      "I linfociti T riconoscono solo carboidrati complessi; i linfociti B solo acidi nucleici",
      "Non vi è alcuna differenza biochimica tra il riconoscimento T e B"
    ],
    "correctIndex": 1,
    "explanation": "I linfociti T (TCR αβ) sono rigorosamente ristretti per il complesso peptide-MHC: non possono riconoscere proteine intatte, ma necessitano di digestione proteolitica in peptidi lineari. I linfociti B (BCR/anticorpi) riconoscono invece direttamente antigeni solubili o particolati intatti nella loro conformazione tridimensionale nativa.",
    "clinicalPearl": "La Prof.ssa Rinaldi fa sempre la distinzione rigorosa tra peptidi lineari presentati su MHC (riconosciuti da TCR) e conformazioni native (riconosciute da BCR).",
    "targetSectionId": "sec-9-1"
  },
  {
    "id": "gen-1",
    "lessonNumber": 1,
    "lessonTitle": "01. Immunologia - 01.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale componente biochimico delle barriere chimico-fisiche epiteliali esercita un'azione battericida idrolizzando specificamente il legame beta-1,4-glicosidico tra acido N-acetilmuramico e N-acetilglucosamina del peptidoglicano?",
    "options": [
      "Defensine alfa",
      "Lattoferrina",
      "Lisozima",
      "Calprotectina"
    ],
    "correctIndex": 2,
    "explanation": "Il lisozima è un enzima secreto nei fluidi biologici (lacrime, saliva, secrezioni respiratorie) che taglia il legame beta-1,4-glicosidico del peptidoglicano batterico, provocando lisi osmotica.",
    "clinicalPearl": "La Prof.ssa Galandrini sottolinea come le barriere chimiche rappresentino il primo livello insormontabile di difesa costitutiva prima dell'intervento cellulare.",
    "targetSectionId": "sec-1-1"
  },
  {
    "id": "gen-2",
    "lessonNumber": 1,
    "lessonTitle": "01. Immunologia - 01.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Le defensine alfa e beta svolgono la loro funzione antimicrobica principalmente attraverso quale meccanismo biofisico?",
    "options": [
      "Chelazione del ferro libero nei fluidi extracellulari",
      "Inserimento e formazione di pori nelle membrane microbiche ricche di fosfolipidi anionici",
      "Ossidazione dei residui di metionina sulle tossine batteriche",
      "Inibizione della DNA girasi batterica"
    ],
    "correctIndex": 1,
    "explanation": "Le defensine sono peptidi cationici ad anfipatici che interagiscono elettrostaticamente con i fosfolipidi anionici della membrana batterica, oligomerizzando e formando pori litici.",
    "clinicalPearl": "Le defensine umane HD5 e HD6 sono secrete dalle cellule di Paneth nell'intestino tenue, elemento cruciale discusso a lezione.",
    "targetSectionId": "sec-1-2"
  },
  {
    "id": "gen-3",
    "lessonNumber": 1,
    "lessonTitle": "01. Immunologia - 01.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale proteina sequestratrice di ioni metallici essenziali è abbondantemente contenuta nei granuli specifici dei neutrofili e nelle secrezioni mucose?",
    "options": [
      "Catelicidina LL-37",
      "Lattoferrina",
      "Pentraxina 3",
      "Surfactante SP-D"
    ],
    "correctIndex": 1,
    "explanation": "La lattoferrina chela il ferro (Fe3+), sottraendolo alla disponibilità metabolica dei batteri siderofili e bloccandone la replicazione.",
    "clinicalPearl": "All'orale la Galandrini chiede spesso il meccanismo dell'immunità nutrizionale innata mediata da lattoferrina e calprotectina.",
    "targetSectionId": "sec-1-3"
  },
  {
    "id": "gen-4",
    "lessonNumber": 2,
    "lessonTitle": "02. Immunologia - 02.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale Toll-Like Receptor (TLR) localizzato sulla membrana plasmatica riconosce specificamente la flagellina batterica?",
    "options": [
      "TLR9",
      "TLR4",
      "TLR2",
      "TLR5"
    ],
    "correctIndex": 3,
    "explanation": "Il TLR5 è espresso sulla superficie cellulare di macrofagi e cellule epiteliali intestinali e riconosce la subunità monomerica conservata della flagellina.",
    "clinicalPearl": "La localizzazione basolaterale del TLR5 nelle cellule epiteliali coliche previene l'infiammazione cronica contro il microbiota luminale intatto.",
    "targetSectionId": "sec-2-1"
  },
  {
    "id": "gen-5",
    "lessonNumber": 2,
    "lessonTitle": "02. Immunologia - 02.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Nella trasduzione del segnale da parte di TLR4 in risposta al lipopolisaccaride (LPS), quale adattatore citoplasmatico recluta la chinasi IRAK4 e il complesso IRAK1/TRAF6?",
    "options": [
      "MyD88",
      "TRIF",
      "TRAM",
      "TIRAP/Mal indipendente da MyD88"
    ],
    "correctIndex": 0,
    "explanation": "MyD88 si lega al dominio TIR di TLR4 tramite l'adattatore TIRAP/Mal, reclutando il 'midosoma' con IRAK4 e IRAK1, che attiva l'ubiquitina-ligasi TRAF6 verso la via NF-kB.",
    "clinicalPearl": "Il TLR4 è l'unico TLR capace di segnalare sia attraverso la via MyD88-dipendente (in membrana) sia TRIF-dipendente (dall'endosoma).",
    "targetSectionId": "sec-2-2"
  },
  {
    "id": "gen-6",
    "lessonNumber": 2,
    "lessonTitle": "02. Immunologia - 02.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale recettore intracellulare endosomiale riconosce RNA a singolo filamento ricco in GU/U di origine virale e segnala tramite MyD88?",
    "options": [
      "TLR9",
      "TLR3",
      "TLR7",
      "RIG-I"
    ],
    "correctIndex": 2,
    "explanation": "TLR7 (e TLR8) è localizzato nell'endosoma e riconosce ssRNA virale, portando alla fosforilazione di IRF7 e produzione massiva di IFN-I nelle cellule dendritiche plasmacitoidi.",
    "clinicalPearl": "La prof.ssa Galandrini sottolinea il ruolo del TLR7 nelle pDC per la risposta antivirale sistemica e nel lupus eritematoso sistemico.",
    "targetSectionId": "sec-2-3"
  },
  {
    "id": "gen-7",
    "lessonNumber": 3,
    "lessonTitle": "03. Immunologia - 06.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale componente sensorio nuclea l'inflammasoma canonico NLRP3 in risposta a efflusso di potassio, cristalli di acido urato o ROS?",
    "options": [
      "AIM2 con dominio HIN-200",
      "NLRC4 con dominio CARD",
      "NLRP3 con dominio pirinico (PYD)",
      "NOD2"
    ],
    "correctIndex": 2,
    "explanation": "NLRP3 possiede un dominio LRR sensorio, un dominio NACHT/NOD e un dominio aminoterminale PYD che recluta l'adattatore ASC tramite interazioni omofitiche PYD-PYD.",
    "clinicalPearl": "La sindrome periodica associata a criopirina (CAPS) è una classica canalopatia/inflammasomopatia da mutazione gain-of-function di NLRP3 chiesta dalla Soriani.",
    "targetSectionId": "sec-3-1"
  },
  {
    "id": "gen-8",
    "lessonNumber": 3,
    "lessonTitle": "03. Immunologia - 06.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale proteasi effettrice viene attivata per autocivisione all'interno del complesso dell'inflammasoma e quale bersaglio cliva per innescare la piroptosi?",
    "options": [
      "Caspasi-3, che cliva ICAD",
      "Caspasi-8, che cliva Bid",
      "Caspasi-1, che cliva la Gasdermina D (GSDMD)",
      "Caspasi-9, che cliva Apaf-1"
    ],
    "correctIndex": 2,
    "explanation": "La caspasi-1 matura taglia i precursori pro-IL-1beta e pro-IL-18 e contemporaneamente cliva la Gasdermina D, liberando il frammento N-terminale che perfora la membrana plasmatica.",
    "clinicalPearl": "La piroptosi è una morte cellulare infiammatoria litica che rilascia allarmina (HMGB1, IL-1beta), differenziandosi dall'apoptosi immunologicamente silente.",
    "targetSectionId": "sec-3-2"
  },
  {
    "id": "gen-9",
    "lessonNumber": 3,
    "lessonTitle": "03. Immunologia - 06.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale recettore citosolico a RNA riconosce dsRNA virale privo di cappuccio con terminali 5'-trifosfato o 5'-difosfato?",
    "options": [
      "cGAS",
      "MDA5",
      "RIG-I",
      "STING"
    ],
    "correctIndex": 2,
    "explanation": "RIG-I riconosce dsRNA corto con 5'-trifosfato (5'-ppp), esponendo i suoi domini CARD per interagire con la proteina adattatrice mitocondriale MAVS.",
    "clinicalPearl": "La Prof.ssa Soriani evidenzia il contrasto tra RIG-I (RNA corti con 5'-ppp) e MDA5 (lunghi dsRNA tipici dei picornavirus).",
    "targetSectionId": "sec-3-3"
  },
  {
    "id": "gen-10",
    "lessonNumber": 4,
    "lessonTitle": "04. Immunologia - 08.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale difetto genetico enzimatico è responsabile della Malattia Granulomatosa Cronica (CGD)?",
    "options": [
      "Deficit di mieloperossidasi (MPO)",
      "Mutazione nei geni del complesso NADPH ossidasi fagocitaria (es. gp91phox/CYBB)",
      "Deficit di glucosio-6-fosfato deidrogenasi (G6PD)",
      "Mutazione del gene dell'elastasi neutrofila (ELANE)"
    ],
    "correctIndex": 1,
    "explanation": "La CGD è causata da mutazioni nei componenti del complesso enzimatico NADPH ossidasi (phox), che impediscono l'esplosione respiratoria e la produzione di anione superossido.",
    "clinicalPearl": "Domanda tipica d'esame: i pazienti con CGD sviluppano infezioni ricorrenti da batteri catalasi-positivi (es. Staphylococcus aureus, Aspergillus, Serratia marcescens).",
    "targetSectionId": "sec-4-1"
  },
  {
    "id": "gen-11",
    "lessonNumber": 4,
    "lessonTitle": "04. Immunologia - 08.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale enzima contenuto nei granuli azzurrofili dei neutrofili utilizza perossido di idrogeno e ioni cloruro per generare acido ipocloroso (HOCl)?",
    "options": [
      "Catalasi",
      "Superossido dismutasi (SOD)",
      "Mieloperossidasi (MPO)",
      "Lisozima"
    ],
    "correctIndex": 2,
    "explanation": "La mieloperossidasi catalizza la reazione tra H2O2 e Cl- per produrre acido ipocloroso, potente agente ossidante microbicida.",
    "clinicalPearl": "Il deficit isolato di MPO è spesso asintomatico o si manifesta solo con infezioni da Candida in pazienti diabetici, a differenza della CGD.",
    "targetSectionId": "sec-4-2"
  },
  {
    "id": "gen-12",
    "lessonNumber": 4,
    "lessonTitle": "04. Immunologia - 08.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale recettore fagocitico riconosce direttamente fosfatidilserina esposta sul foglietto esterno della membrana delle cellule apoptotiche?",
    "options": [
      "TIM-4",
      "Scavenger Receptor A (SR-A)",
      "Dectin-1",
      "CD14"
    ],
    "correctIndex": 0,
    "explanation": "TIM-4 (T-cell immunoglobulin and mucin domain-containing protein 4) e stabilina-2 legano direttamente la fosfatidilserina per promuovere l'efferocitosi non infiammatoria.",
    "clinicalPearl": "L'efferocitosi induce il rilascio di citochine antinfiammatorie come TGF-beta e IL-10, prevenendo risposte autoimmuni verso autoantigeni nucleari.",
    "targetSectionId": "sec-4-3"
  },
  {
    "id": "gen-13",
    "lessonNumber": 5,
    "lessonTitle": "05. Immunologia - 09.10.25",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale complesso proteico costituisce la C3 convertasi della via classica e lectinica del complemento?",
    "options": [
      "C3bBb3b",
      "C3bBb",
      "C4b2a3b",
      "C4b2a"
    ],
    "correctIndex": 3,
    "explanation": "Il legame di C1s (o MASP-2) cliva C4 in C4a e C4b, e C2 in C2a e C2b; l'unione di C4b e C2a forma l'enzima attivo C4b2a (C3 convertasi classica).",
    "clinicalPearl": "La prof.ssa Morrone sottolinea che secondo la nomenclatura IUPAC C2a è il frammento maggiore con attività enzimatica.",
    "targetSectionId": "sec-5-1"
  },
  {
    "id": "gen-14",
    "lessonNumber": 5,
    "lessonTitle": "05. Immunologia - 09.10.25",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale anafilatossina possiede la maggiore potenza biologica nel mediare vasodilatazione, degranulazione dei mastociti e chemiotassi dei neutrofili?",
    "options": [
      "C3a",
      "C5a",
      "C4a",
      "Bb"
    ],
    "correctIndex": 1,
    "explanation": "C5a è la più potente anafilatossina e agente chemiotattico per neutrofili, monociti ed eosinofili, legandosi al recettore C5aR (CD88) accoppiato a proteine G.",
    "clinicalPearl": "C5a stimola anche l'up-regulation di molecole di adesione endoteliali (ICAM-1, selectine) durante l'infiammazione acuta.",
    "targetSectionId": "sec-5-2"
  },
  {
    "id": "gen-15",
    "lessonNumber": 5,
    "lessonTitle": "05. Immunologia - 09.10.25",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale fattore di regolazione plasmatico cliva inattivando C3b e C4b in presenza di cofattori quali Fattore H, MCP (CD46) o C4BP?",
    "options": [
      "Properdina",
      "Fattore D",
      "Fattore I",
      "Fattore P"
    ],
    "correctIndex": 2,
    "explanation": "Il Fattore I è una serina-proteasi circolante costitutiva che taglia proteoliticamente C3b in iC3b e C3dg, e C4b in C4c e C4d, impedendo l'assemblaggio delle convertasi.",
    "clinicalPearl": "Il deficit di Fattore I o di Fattore H causa l'attivazione incontrollata della via alternativa, portando a Sindrome Emolitico-Uremica atipica (aHUS).",
    "targetSectionId": "sec-5-3"
  },
  {
    "id": "gen-16",
    "lessonNumber": 6,
    "lessonTitle": "06. Immunologia - 13.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale combinazione chemochinica guida selettivamente l'homing dei linfociti T naive e delle cellule dendritiche mature attraverso le venule ad endotelio alto (HEV) dei linfonodi?",
    "options": [
      "CXCR4 legante CXCL12",
      "CXCR5 legante CXCL13",
      "CCR7 legante CCL19 e CCL21",
      "CCR9 legante CCL25"
    ],
    "correctIndex": 2,
    "explanation": "I linfociti T naive e le DC mature esprimono CCR7, che risponde al gradiente di CCL19 (secreto da cellule stromali T) e CCL21 (espresso dalle HEV e vasi linfatici afferenti).",
    "clinicalPearl": "La Prof.ssa Morrone richiede spesso all'esame la sequenza molecolare dell'extravasazione: rolling via L-selectina (CD62L), arresto su chemochina e adesione ferma con LFA-1/ICAM-1.",
    "targetSectionId": "sec-6-1"
  },
  {
    "id": "gen-17",
    "lessonNumber": 6,
    "lessonTitle": "06. Immunologia - 13.10.25",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Morrone",
    "question": "Quale chemochina, prodotta dalle cellule dendritiche follicolari (FDC), è responsabile dell'attrazione dei linfociti B e Tfh verso i follicoli linfoidi primari?",
    "options": [
      "CCL2 (che lega CCR2)",
      "CCL21 (che lega CCR7)",
      "CXCL8 (che lega CXCR1/2)",
      "CXCL13 (che lega CXCR5)"
    ],
    "correctIndex": 3,
    "explanation": "Le FDC e le cellule stromali follicolari producono costitutivamente CXCL13, che attrae le cellule esprimenti CXCR5 all'interno dell'area B.",
    "clinicalPearl": "La modulazione di CXCR5 e CCR7 è fondamentale per l'incontro reciproco T-B al confine tra zona T e follicolo B.",
    "targetSectionId": "sec-6-2"
  },
  {
    "id": "gen-18",
    "lessonNumber": 6,
    "lessonTitle": "06. Immunologia - 13.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale integrina leucocitaria dimerica (alfa4-beta7) interagisce specificamente con MAdCAM-1 per dirigere l'homing linfocitario nella lamina propria intestinale?",
    "options": [
      "VLA-4 (alfa4-beta1)",
      "LFA-1 (alfaL-beta2)",
      "Mac-1 (alfaM-beta2)",
      "Integrina alfa4-beta7"
    ],
    "correctIndex": 3,
    "explanation": "L'integrina alfa4-beta7 lega la molecola MAdCAM-1 espressa sulle venule post-capillari della mucosa intestinale (GALT e placche di Peyer).",
    "clinicalPearl": "Il farmaco biologico vedolizumab blocca l'alfa4-beta7 ed è utilizzato nella colite ulcerosa e malattia di Crohn per inibire selettivamente l'infiltrazione leucocitaria intestinale.",
    "targetSectionId": "sec-6-3"
  },
  {
    "id": "gen-19",
    "lessonNumber": 7,
    "lessonTitle": "07. Immunologia - 15.10.25",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale citochina secreta dallo stroma midollare è indispensabile per la proliferazione e sopravvivenza dei progenitori pro-B ed è il cui recettore condivide la catena gamma comune (gamma-c)?",
    "options": [
      "Interleuchina-7 (IL-7)",
      "Interleuchina-3 (IL-3)",
      "Interleuchina-4 (IL-4)",
      "FLT3-ligando"
    ],
    "correctIndex": 0,
    "explanation": "IL-7 è fondamentale per l'ematopoiesi linfoide; nel topo è essenziale per la linea B, mentre nell'uomo mutazioni del recettore di IL-7 causano SCID T-B+NK+.",
    "clinicalPearl": "La Prof.ssa Molfetta chiede la distinzione tra il ruolo di IL-7 nell'uomo (prevalente sullo sviluppo T) e nel topo (essenziale anche per la linea B).",
    "targetSectionId": "sec-7-1"
  },
  {
    "id": "gen-20",
    "lessonNumber": 7,
    "lessonTitle": "07. Immunologia - 15.10.25",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Allo stadio di linfocita pre-B grande, da cosa è costituito il recettore pre-BCR che invia il segnale di sopravvivenza e di arresto del riarrangiamento della catena pesante?",
    "options": [
      "Catena pesante delta associata a catena surrogata",
      "Catena pesante mu associata a catena leggera kappa",
      "Catena pesante mu associata alla catena leggera surrogata (VpreB e lambda5) e Ig-alfa/Ig-beta",
      "Solo catena pesante mu di membrana"
    ],
    "correctIndex": 2,
    "explanation": "Il pre-BCR è un trimero funzionale composto dalla catena mu neo-sintetizzata e dalle proteine non riarrangiate VpreB e lambda5 (surrogate light chain), complessate con CD79a/CD79b.",
    "clinicalPearl": "Il mancato assemblaggio del pre-BCR o mutazioni della tirosina chinasi BTK bloccano lo sviluppo allo stadio pre-B, causando Agammaglobulinemia legata al sesso (Bruton).",
    "targetSectionId": "sec-7-2"
  },
  {
    "id": "gen-21",
    "lessonNumber": 7,
    "lessonTitle": "07. Immunologia - 15.10.25",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Cosa accade a un linfocita B immaturo nel midollo osseo quando il suo BCR lega con alta avidità un antigene self multivalente?",
    "options": [
      "Editing recettoriale della catena leggera tramite riattivazione di RAG1/RAG2 o delezione clonale",
      "Differenziamento immediato in plasmacellula produttrice di IgM",
      "Maturazione accelerata in B marginale",
      "Switch isotipico verso IgD"
    ],
    "correctIndex": 0,
    "explanation": "La tolleranza centrale B prevede in primis l'editing recettoriale: la cellula arresta lo sviluppo, riattiva i geni RAG e tenta un nuovo riarrangiamento sul locus kappa o lambda; se fallisce va incontro ad apoptosi.",
    "clinicalPearl": "Punto critico d'esame: l'editing recettoriale avviene prevalentemente nei linfociti B e quasi mai nei linfociti T, dove prevale la delezione clonale.",
    "targetSectionId": "sec-7-3"
  },
  {
    "id": "gen-22",
    "lessonNumber": 8,
    "lessonTitle": "08. Immunologia - 16.10.25",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale enzima linfoide-specifico è responsabile dell'aggiunta casuale di nucleotidi N non templati a livello delle giunzioni tra i segmenti genici D e J durante la ricombinazione V(D)J?",
    "options": [
      "RAG2",
      "RAG1",
      "TdT (Terminal Deoxynucleotidyl Transferase)",
      "DNA-PKcs"
    ],
    "correctIndex": 2,
    "explanation": "La TdT aggiunge deossinucleotidi N alle estremità 3'-OH a singolo filamento generate dopo il taglio a forcina, massimizzando la diversità giunzionale nel CDR3.",
    "clinicalPearl": "La TdT è attiva durante il riarrangiamento della catena pesante Ig e delle catene TCR, ma è spenta durante il riarrangiamento della catena leggera nel fegato fetale (linfociti B1).",
    "targetSectionId": "sec-8-1"
  },
  {
    "id": "gen-23",
    "lessonNumber": 8,
    "lessonTitle": "08. Immunologia - 16.10.25",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale proteina con attività endonucleasica viene attivata mediante fosforilazione dal complesso DNA-PKcs per aprire le forcine a forcella (hairpin) di DNA?",
    "options": [
      "Artemis",
      "Ku70",
      "Ku80",
      "DNA Ligasi IV"
    ],
    "correctIndex": 0,
    "explanation": "Artemis fa parte del macchinario non-omologo di giunzione (NHEJ); una volta fosforilata da DNA-PKcs acquisisce attività endonucleasica aprendo le forcine con generazione di nucleotidi P.",
    "clinicalPearl": "Mutazioni in Artemis o DNA-PKcs causano SCID radiosensibile di tipo T-B-NK+, frequente domanda d'esame della Prof.ssa Molfetta.",
    "targetSectionId": "sec-8-2"
  },
  {
    "id": "gen-24",
    "lessonNumber": 8,
    "lessonTitle": "08. Immunologia - 16.10.25",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Cosa stabilisce la regola empirica del 12/23 nella ricombinazione dei segmenti variabili delle immunoglobuline e del TCR?",
    "options": [
      "La ricombinazione può avvenire solo tra segmenti con identico spaziatore di 12 bp",
      "Un segmento fiancheggiato da uno spaziatore di 12 bp può ricombinare solo con uno avente spaziatore di 23 bp",
      "Ogni locus genico deve contenere esattamente 23 segmenti V e 12 segmenti J",
      "Il taglio di RAG avviene 12 nucleotidi a monte e 23 a valle dell'eptamero"
    ],
    "correctIndex": 1,
    "explanation": "La regola 12/23 impedisce la giunzione anomala diretta tra segmenti omologhi (es. V-J diretto nella catena pesante, bypassando il segmento D).",
    "clinicalPearl": "La struttura delle sequenze RSS (eptamero conservato, spaziatore di 12 o 23 bp e nonamero ricco in AT) è un cavallo di battaglia della Molfetta.",
    "targetSectionId": "sec-8-3"
  },
  {
    "id": "gen-25",
    "lessonNumber": 9,
    "lessonTitle": "09. Immunologia - 20.10.2025",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Molfetta",
    "question": "Su quale cromosoma umano è mappato il locus genico del Complesso Maggiore di Istocompatibilità (HLA)?",
    "options": [
      "Cromosoma 2",
      "Braccio lungo del cromosoma 15",
      "Braccio corto del cromosoma 6 (6p21.3)",
      "Cromosoma 14"
    ],
    "correctIndex": 2,
    "explanation": "Il locus HLA è localizzato sul braccio corto del cromosoma 6 e si estende per circa 3,5-4 Mb, contenente più di 200 geni suddivisi nelle classi I, II e III.",
    "clinicalPearl": "La beta2-microglobulina non è mappata sul cromosoma 6, bensì sul cromosoma 15: distinzione fondamentale richiesta costantemente all'orale.",
    "targetSectionId": "sec-9-1"
  },
  {
    "id": "gen-26",
    "lessonNumber": 9,
    "lessonTitle": "09. Immunologia - 20.10.2025",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Molfetta",
    "question": "Quali domini polipeptidici delimitano strutturalmente la tasca di alloggiamento del peptide nella molecola MHC di classe II?",
    "options": [
      "Alfa3 e beta2-microglobulina",
      "Alfa1 e Alfa2",
      "Alfa2 e Beta2",
      "Alfa1 e Beta1"
    ],
    "correctIndex": 3,
    "explanation": "Nelle molecole MHC di classe II la tasca è formata dall'interazione eterodimerica tra il dominio alfa1 e il dominio beta1, lasciando le estremità aperte per peptidi di 13-18 aminoacidi.",
    "clinicalPearl": "Nell'MHC-I la tasca è formata dai domini alfa1 e alfa2 della sola catena alfa ed è chiusa alle estremità per peptidi corti (8-10 aa).",
    "targetSectionId": "sec-9-2"
  },
  {
    "id": "gen-27",
    "lessonNumber": 9,
    "lessonTitle": "09. Immunologia - 20.10.2025",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Molfetta",
    "question": "Quale patologia autoimmune mostra la più forte associazione epidemiologica nota con un allele HLA di classe I (odds ratio > 80)?",
    "options": [
      "Sclerosi Multipla (HLA-DR2)",
      "Artrite Reumatoide (HLA-DR4)",
      "Diabete di Tipo 1 (HLA-DQ2/DQ8)",
      "Spondilite Anchilosante (HLA-B27)"
    ],
    "correctIndex": 3,
    "explanation": "Oltre il 90% dei pazienti con spondilite anchilosante è portatore dell'allele HLA-B27, legato a ripiegamento anomalo (misfolding) nel RE ed autofagia.",
    "clinicalPearl": "Correlazione clinica principe citata da tutti i docenti per illustrare il legame tra polimorfismo HLA e patologie infiammatorie croniche.",
    "targetSectionId": "sec-9-3"
  },
  {
    "id": "gen-28",
    "lessonNumber": 10,
    "lessonTitle": "10. Immunologia - 22.10.2025",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Molfetta",
    "question": "Nella via di processazione endogena dell'MHC di classe I, quale proteina funge da ponte molecolare tra la tasca vuota dell'MHC-I e il trasportatore TAP nel reticolo endoplasmatico?",
    "options": [
      "ERp57",
      "Calreticulina",
      "Tapasina",
      "Calnexina"
    ],
    "correctIndex": 2,
    "explanation": "La tapasina è il componente chiave del complesso di caricamento del peptide (PLC) che collega fisicamente il dimero MHC-I/beta2m al canale TAP1/TAP2.",
    "clinicalPearl": "La mutazione o assenza di tapasina riduce drasticamente l'espressione di MHC-I in superficie per instabilità del complesso privo di peptide.",
    "targetSectionId": "sec-10-1"
  },
  {
    "id": "gen-29",
    "lessonNumber": 10,
    "lessonTitle": "10. Immunologia - 22.10.2025",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Molfetta",
    "question": "Quale funzione biologica svolge la molecola non polimorfica HLA-DM all'interno del compartimento endosomiale acido MIIC?",
    "options": [
      "Lega direttamente peptidi non-self per presentarli ai T",
      "Inibisce l'azione delle proteasi catepsina S e L",
      "Trasporta peptidi dal citosol all'endosoma",
      "Catalizza il rilascio del frammento CLIP e favorisce il caricamento di peptidi esogeni ad alta affinità su MHC-II"
    ],
    "correctIndex": 3,
    "explanation": "HLA-DM agisce come scambiatore peptidico (peptide editor), inducendo un cambio conformazionale nell'MHC-II che scalza il peptide CLIP residuo della catena invariante.",
    "clinicalPearl": "HLA-DO funge da inibitore fisiologico di HLA-DM nelle cellule B a riposo per preservare la tolleranza immunologica.",
    "targetSectionId": "sec-10-2"
  },
  {
    "id": "gen-30",
    "lessonNumber": 10,
    "lessonTitle": "10. Immunologia - 22.10.2025",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Molfetta",
    "question": "Cosa caratterizza la via non canonica della cross-presentazione antigenica mediata dalle cellule dendritiche convenzionali cDC1?",
    "options": [
      "Presentazione di antigeni glicolipidici su CD1d",
      "Caricamento di antigeni endogeni su molecole MHC di classe II tramite autofagia",
      "Internalizzazione di antigeni esogeni e loro traslocazione nel citosol per essere degradati dal proteasoma e presentati su MHC-I a T CD8+",
      "Presentazione diretta di tossine senza processamento"
    ],
    "correctIndex": 2,
    "explanation": "La cross-presentazione permette alle cDC1 di attivare (cross-priming) i linfociti T CD8+ citotossici naive contro virus o tumori che non infettano direttamente la cellula dendritica.",
    "clinicalPearl": "Domanda classica d'esame: quali recettori facilitano la cross-presentazione? Clec9A (che lega actina F necrotica) e CD8alpha/XCR1.",
    "targetSectionId": "sec-10-3"
  },
  {
    "id": "gen-31",
    "lessonNumber": 11,
    "lessonTitle": "11. Immunologia - 23.10.2025 docx",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "A quale stadio maturativo della timopoiesi si verifica la selezione positiva nella corticale del timo?",
    "options": [
      "Timociti singoli positivi (CD4+ o CD8+)",
      "Timociti doppi negativi DN1 (CD44+ CD25-)",
      "Timociti doppi negativi DN3 (CD44- CD25+)",
      "Timociti doppi positivi (CD4+ CD8+)"
    ],
    "correctIndex": 3,
    "explanation": "I timociti doppi positivi interagiscono con le cellule epiteliali corticali timiche (cTEC) che espongono peptidi self su MHC-I e MHC-II; solo chi lega con affinità moderata riceve il segnale di sopravvivenza.",
    "clinicalPearl": "La selezione positiva determina la restrizione MHC e guida il lineage commitment verso singolo positivo CD4 o CD8.",
    "targetSectionId": "sec-11-1"
  },
  {
    "id": "gen-32",
    "lessonNumber": 11,
    "lessonTitle": "11. Immunologia - 23.10.2025 docx",
    "topicCategory": "Tolleranza, Autoimmunità & Immunopatologia",
    "professor": "Galandrini",
    "question": "Quale fattore di trascrizione espresso dalle cellule epiteliali midollari timiche (mTEC) consente la trascrizione ectopica di antigeni tessuto-specifici (TRA) per la selezione negativa?",
    "options": [
      "AIRE (Autoimmune Regulator)",
      "FoxP3",
      "T-bet",
      "Fezf2"
    ],
    "correctIndex": 0,
    "explanation": "AIRE induce l'espressione di proteine periferiche (insulina, tireoglobulina) nel timo per eliminare per delezione clonale i timociti ad alta avidità per il self.",
    "clinicalPearl": "Mutazioni inattivanti di AIRE provocano la sindrome da poliendocrinopatia autoimmune tipo 1 (APECED/APS-1), caratterizzata da candidosi mucocutanea, ipoparatiroidismo e insufficienza surrenalica.",
    "targetSectionId": "sec-11-2"
  },
  {
    "id": "gen-33",
    "lessonNumber": 11,
    "lessonTitle": "11. Immunologia - 23.10.2025 docx",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Cosa compone il pre-TCR espresso allo stadio di timocita doppio negativo DN3 che assicura l'avvenuto riarrangiamento produttivo del locus beta?",
    "options": [
      "Catene gamma e delta associate a zeta",
      "Catena TCR-alfa associata a CD3",
      "Eterodimero TCR alfa/beta completo",
      "Catena TCR-beta combinata con la catena invariante pre-T-alfa (pT-alfa) e il complesso CD3"
    ],
    "correctIndex": 3,
    "explanation": "Il pre-TCR è costituito dalla catena beta associata alla catena surrogata pT-alfa e alle subunità di trasduzione CD3 (gamma, delta, epsilon, zeta).",
    "clinicalPearl": "Il segnale generato dal pre-TCR induce proliferazione massiva, esclusione allelica sul secondo allele beta e arresto temporaneo dei geni RAG.",
    "targetSectionId": "sec-11-3"
  },
  {
    "id": "gen-34",
    "lessonNumber": 12,
    "lessonTitle": "12. Immunologia - 27.10.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quanti motivi di attivazione basati su tirosina (ITAM) sono complessivamente contenuti nelle catene accessorie che formano il complesso TCR-CD3?",
    "options": [
      "12 motivi ITAM",
      "6 motivi ITAM",
      "4 motivi ITAM",
      "10 motivi ITAM (3 su ciascun omodimero zeta, 1 su ciascuna catena CD3-gamma, delta, epsilon)"
    ],
    "correctIndex": 3,
    "explanation": "Ciascuna subunità zeta contiene 3 motivi ITAM (totale 6 sull'omodimero zeta-zeta), mentre CD3-gamma, CD3-delta e le due catene CD3-epsilon contengono ciascuna 1 ITAM (totale 4 ITAM), per un totale di 10 ITAM per complesso.",
    "clinicalPearl": "Domanda numerica 'trappola' prediletta dalla Galandrini: serve a comprendere l'amplificazione del segnale a valle dell'ingaggio con l'MHC.",
    "targetSectionId": "sec-12-1"
  },
  {
    "id": "gen-35",
    "lessonNumber": 12,
    "lessonTitle": "12. Immunologia - 27.10.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "All'interno della sinapsi immunologica matura (SMAC), quali molecole si concentrano nell'area periferica (p-SMAC) per stabilizzare l'adesione cellula-cellula?",
    "options": [
      "Granuli citotossici di perforina",
      "TCR e CD28 leganti MHC e B7",
      "CD45 e CD148",
      "LFA-1 legante ICAM-1"
    ],
    "correctIndex": 3,
    "explanation": "Il p-SMAC (peripheral supramolecular activation cluster) contiene anelli concentrici di integrine, in primis LFA-1 complessata con il ligando ICAM-1 endoteliale o dell'APC.",
    "clinicalPearl": "Il c-SMAC centrale racchiude TCR, corecettori CD4/CD8 e CD28, mentre i d-SMAC distale esclude le grandi fosfatasi come CD45.",
    "targetSectionId": "sec-12-2"
  },
  {
    "id": "gen-36",
    "lessonNumber": 12,
    "lessonTitle": "12. Immunologia - 27.10.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale tirosina chinasi citoplasmatica appartenente alla famiglia Syk viene reclutata sui doppi motivi ITAM fosforilati della catena zeta del TCR?",
    "options": [
      "Itk",
      "Lck",
      "Fyn",
      "ZAP-70"
    ],
    "correctIndex": 3,
    "explanation": "ZAP-70 possiede due domini tandem SH2 che si ancorano alle tirosine fosforilate degli ITAM di zeta, dove viene attivata mediante fosforilazione ad opera di Lck.",
    "clinicalPearl": "Il deficit genetico di ZAP-70 causa una rara SCID caratterizzata da assenza selettiva di linfociti T CD8+ e presenza di T CD4+ non funzionanti.",
    "targetSectionId": "sec-12-3"
  },
  {
    "id": "gen-37",
    "lessonNumber": 13,
    "lessonTitle": "13. Immunologia - 29.10.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale proteina adattatrice di membrana transmembrana viene fosforilata da ZAP-70 per fungere da piattaforma di ancoraggio per Grb2, Gads e PLC-gamma-1?",
    "options": [
      "LAT (Linker for Activation of T cells)",
      "SLP-76",
      "Vav",
      "PDK1"
    ],
    "correctIndex": 0,
    "explanation": "LAT è una proteina integrale localizzata nei lipid rafts che, una volta fosforilata su molteplici residui di tirosina, recluta il 'segnalsoma' con Gads, SLP-76 e PLC-gamma-1.",
    "clinicalPearl": "La Prof.ssa Galandrini pone grande enfasi sulla formazione del segnalsoma LAT-SLP76 per la propagazione delle vie di calcio, PKC-theta e Ras-MAPK.",
    "targetSectionId": "sec-13-1"
  },
  {
    "id": "gen-38",
    "lessonNumber": 13,
    "lessonTitle": "13. Immunologia - 29.10.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale fosfatasi citosolica calcio/calmodulina-dipendente defosforila i residui serinici del fattore NFAT consentendone la traslocazione nucleare?",
    "options": [
      "SHIP-1",
      "SHP-1",
      "PP2A",
      "Calcineurina"
    ],
    "correctIndex": 3,
    "explanation": "L'aumento di calcio citosolico attiva la calmodulina, che stimola la calcineurina a rimuovere i fosfati inibitori da NFAT, esponendo il segnale di localizzazione nucleare.",
    "clinicalPearl": "I farmaci immunosoppressori cardine nei trapianti (Ciclosporina A e Tacrolimus/FK506) inibiscono selettivamente la calcineurina bloccando la trascrizione di IL-2.",
    "targetSectionId": "sec-13-2"
  },
  {
    "id": "gen-39",
    "lessonNumber": 13,
    "lessonTitle": "13. Immunologia - 29.10.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale via molecolare a valle del diacilglicerolo (DAG) porta all'attivazione del fattore trascrizionale NF-kB nei linfociti T?",
    "options": [
      "Attivazione di PKC-theta e reclutamento del complesso CARMA1-BCL10-MALT1 (CBM)",
      "Fosforilazione di Raf-1",
      "Attivazione di Akt via PIP3",
      "Inibizione diretta di IKK"
    ],
    "correctIndex": 0,
    "explanation": "PKC-theta fosforila CARMA1, che oligomerizza con BCL10 e MALT1 forming il complesso CBM, il quale recluta e attiva il complesso chinasi IKK (I-kappa-B chinasi).",
    "clinicalPearl": "Mutazioni nei componenti del complesso CBM causano gravi immunodeficienze combinate con difetto di attivazione di NF-kB.",
    "targetSectionId": "sec-13-3"
  },
  {
    "id": "gen-40",
    "lessonNumber": 14,
    "lessonTitle": "14. Immunologia - 30.10.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale recettore inibitorio presente sui linfociti T compete con CD28 per il legame a B7-1 (CD80) e B7-2 (CD86), possedendo un'affinità da 20 a 50 volte superiore?",
    "options": [
      "PD-1 (CD279)",
      "CTLA-4 (CD152)",
      "LAG-3",
      "TIM-3"
    ],
    "correctIndex": 1,
    "explanation": "CTLA-4 è un omologo di CD28 con altissima affinità per B7; non solo sequestra i ligandi ma ne media la rimozione dalla superficie dell'APC tramite trans-endocitosi.",
    "clinicalPearl": "Il farmaco biologico Abatacept (CTLA-4-Ig) sfrutta questo meccanismo per bloccare la costimolazione nell'artrite reumatoide refrattaria.",
    "targetSectionId": "sec-14-1"
  },
  {
    "id": "gen-41",
    "lessonNumber": 14,
    "lessonTitle": "14. Immunologia - 30.10.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Galandrini",
    "question": "Quale motivo molecolare presente nella coda intracellulare di PD-1 recluta la fosfatasi SHP-2 per inattivare i segnali a valle del TCR e di CD28?",
    "options": [
      "Dominio CARD",
      "Motivo ITAM",
      "Motivo ITSM (Immunoreceptor Tyrosine-based Switch Motif)",
      "Dominio TRAF"
    ],
    "correctIndex": 2,
    "explanation": "PD-1 possiede un dominio ITIM e un motivo ITSM; dopo fosforilazione, l'ITSM recluta la fosfatasi SHP-2 che defosforila ZAP-70, CD3-zeta e la PI3K.",
    "clinicalPearl": "Gli inibitori dei checkpoint immunitari anti-PD-1 (Nivolumab, Pembrolizumab) e anti-PD-L1 riattivano i linfociti T esausti nei tumori solidi.",
    "targetSectionId": "sec-14-2"
  },
  {
    "id": "gen-42",
    "lessonNumber": 14,
    "lessonTitle": "14. Immunologia - 30.10.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Cosa accade a un linfocita T naive quando il suo TCR riconosce il complesso peptide-MHC in assenza completa del segnale costimolatorio mediato da CD28?",
    "options": [
      "Va incontro a lisi per piroptosi",
      "Entra in uno stato di anergia clonale irreversibile",
      "Differenzia spontaneamente in linfocita Th17",
      "Attiva una risposta citotossica aspecifica"
    ],
    "correctIndex": 1,
    "explanation": "Il segnale 1 da solo, senza il segnale 2 (B7-CD28), induce l'attivazione della proteina ligasi GRAIL e dei fattori Cbl-b, portando ad anergia cellulare prolungata.",
    "clinicalPearl": "Concetto chiave della tolleranza periferica: l'espressione di costimolatori è ristretta alle APC attivate da segnali di pericolo (PAMPs/DAMPs).",
    "targetSectionId": "sec-14-3"
  },
  {
    "id": "gen-43",
    "lessonNumber": 15,
    "lessonTitle": "15. Immunologia - 3.11.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Soriani",
    "question": "Quale citochina induttrice secreta da macrofagi e DC guida il differenziamento dei linfociti Th1 attivando il fattore trascrizionale STAT4?",
    "options": [
      "Interleuchina-12 (IL-12)",
      "Interleuchina-4 (IL-4)",
      "Interleuchina-6 (IL-6)",
      "Interleuchina-10 (IL-10)"
    ],
    "correctIndex": 0,
    "explanation": "IL-12 (eterodimero p35/p40) attiva STAT4 che, in sinergia con STAT1 (attivato da IFN-gamma), induce il master regulator T-bet per la linea Th1.",
    "clinicalPearl": "La Prof.ssa Soriani interroga frequentemente sull'asse IL-12/IFN-gamma nella suscettibilità mendeliana a micobatteri atipici (MSMD).",
    "targetSectionId": "sec-15-1"
  },
  {
    "id": "gen-44",
    "lessonNumber": 15,
    "lessonTitle": "15. Immunologia - 3.11.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Soriani",
    "question": "Quale master regulator trascrizionale definisce il profilo dei linfociti Th2 ed è indotto a valle della via IL-4/STAT6?",
    "options": [
      "Bcl-6",
      "T-bet",
      "ROR-gamma-t",
      "GATA-3"
    ],
    "correctIndex": 3,
    "explanation": "GATA-3 è il fattore trascrizionale specifico che rimodella la cromatina del locus delle citochine Th2 (IL-4, IL-5, IL-13) sul cromosoma 5q31.",
    "clinicalPearl": "GATA-3 inibisce direttamente l'espressione di T-bet e la catena beta2 del recettore di IL-12, stabilizzando irreversibilmente il destino Th2.",
    "targetSectionId": "sec-15-2"
  },
  {
    "id": "gen-45",
    "lessonNumber": 15,
    "lessonTitle": "15. Immunologia - 3.11.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Soriani",
    "question": "Quale combinazione di citochine polarizza nell'uomo il differenziamento dei linfociti Th17, caratterizzati dall'espressione del recettore CCR6?",
    "options": [
      "IL-4 e IL-2",
      "IL-12 e IFN-gamma",
      "TGF-beta, IL-1beta, IL-6 e IL-23",
      "IL-10 e IL-35"
    ],
    "correctIndex": 2,
    "explanation": "Nell'uomo la combinazione di citochine proinfiammatorie (IL-1beta, IL-6 o IL-21) con TGF-beta attiva STAT3 e induce il fattore ROR-gamma-t (e ROR-alfa), stabilizzato da IL-23.",
    "clinicalPearl": "I Th17 producono IL-17A, IL-17F e IL-22 per reclutare neutrofili contro funghi (Candida) e batteri extracellulari; il deficit causa sindrome di Job (iper-IgE).",
    "targetSectionId": "sec-15-3"
  },
  {
    "id": "gen-46",
    "lessonNumber": 16,
    "lessonTitle": "16. Immunologia - 5.11.2025",
    "topicCategory": "Tolleranza, Autoimmunità & Immunopatologia",
    "professor": "Soriani",
    "question": "Quale mutazione genica è responsabile della sindrome IPEX (Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked)?",
    "options": [
      "Mutazione di FASLG",
      "Mutazione di STAT3",
      "Mutazione inattivante del gene FOXP3 sul cromosoma X",
      "Mutazione di CD25 (IL-2RA)"
    ],
    "correctIndex": 2,
    "explanation": "La sindrome IPEX è dovuta all'assenza congenita o disfunzione dei linfociti Treg CD4+ CD25+ FoxP3+, provocando enteropatia severa, diabete neonatale e tiroidite autoimmune.",
    "clinicalPearl": "Domanda classica d'esame: i Treg esprimono costitutivamente alti livelli di CD25 (catena alfa del recettore di IL-2) per sottrarre IL-2 ai T effettori.",
    "targetSectionId": "sec-16-1"
  },
  {
    "id": "gen-47",
    "lessonNumber": 16,
    "lessonTitle": "16. Immunologia - 5.11.2025",
    "topicCategory": "Tolleranza, Autoimmunità & Immunopatologia",
    "professor": "Soriani",
    "question": "Quale meccanismo immunosoppressivo metabolico è operato dagli enzimi ectonucleotidasi CD39 e CD73 espressi sulla superficie dei Treg?",
    "options": [
      "Degradazione sequenziale di ATP extracellulare ad adenosina immunosoppressiva",
      "Deplezione di triptofano tramite IDO",
      "Sintesi massiva di ossido nitrico",
      "Generazione di perossido di idrogeno"
    ],
    "correctIndex": 0,
    "explanation": "CD39 idrolizza ATP/ADP a AMP, e CD73 converte AMP in adenosina; l'adenosina lega il recettore A2AR sui linfociti effettori aumentando il cAMP e bloccandone l'attivazione.",
    "clinicalPearl": "La Prof.ssa Soriani evidenzia il doppio ruolo: eliminare una molecola pro-infiammatoria (ATP) e produrre un potente immunosoppressore (adenosina).",
    "targetSectionId": "sec-16-2"
  },
  {
    "id": "gen-48",
    "lessonNumber": 16,
    "lessonTitle": "16. Immunologia - 5.11.2025",
    "topicCategory": "Tolleranza, Autoimmunità & Immunopatologia",
    "professor": "Soriani",
    "question": "Quale citochina regolatoria secreta dai Treg inibisce la produzione di citochine proinfiammatorie macrofagiche e down-regola MHC-II e molecole B7?",
    "options": [
      "TNF-alfa",
      "Interleuchina-12",
      "Interleuchina-10 (IL-10)",
      "Interferone-gamma"
    ],
    "correctIndex": 2,
    "explanation": "IL-10 lega il recettore IL-10R attivando STAT3, che inibisce la trascrizione di TNF-alfa, IL-1, IL-6 e riduce drasticamente l'espressione di B7-1 e B7-2 sulle APC.",
    "clinicalPearl": "Mutazioni nei geni IL10 o IL10RA/RB provocano gravissime forme di colite infiammatoria infantile a esordio precoce.",
    "targetSectionId": "sec-16-3"
  },
  {
    "id": "gen-49",
    "lessonNumber": 17,
    "lessonTitle": "17. Immunologia - 6.11.2025",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale serina-proteasi contenuta nei granuli citotossici dei CTL cliva specificamente la proteina pro-apoptotica Bid e la pro-caspasi-3 per innescare la morte cellulare?",
    "options": [
      "Granzima B",
      "Granzima A",
      "Granzima M",
      "Granulisina"
    ],
    "correctIndex": 0,
    "explanation": "Il granzima B cliva la proteina Bid generando tBid (che migra sui mitocondri attivando Bax/Bak e rilasciando citocromo c) e attiva direttamente la pro-caspasi-3 e 7.",
    "clinicalPearl": "La Prof.ssa Galandrini è un'esperta internazionale di citotossicità: chiede sempre la distinzione tra la via caspasi-dipendente di Granzima B e quella DNA-damaging/caspasi-indipendente di Granzima A.",
    "targetSectionId": "sec-17-1"
  },
  {
    "id": "gen-50",
    "lessonNumber": 17,
    "lessonTitle": "17. Immunologia - 6.11.2025",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale proteina è responsabile dell'esocitosi calcio-dipendente dei granuli citotossici e causa la linfoistiocitosi emofagocitica familiare di tipo 2 (FHL-2) se mutata?",
    "options": [
      "Perforina (PRF1)",
      "Munc13-4",
      "Sintassina 11",
      "Rab27a"
    ],
    "correctIndex": 0,
    "explanation": "PRF1 codifica per la perforina; mutazioni omozigoti inattivano la polimerizzazione e formazione di pori sulla cellula bersaglio, provocando FHL-2.",
    "clinicalPearl": "Nei pazienti con FHL i CTL non uccidono il bersaglio, continuano a secernere IFN-gamma e iperattivano i macrofagi, portando ad emofagocitosi e tempesta citochinica.",
    "targetSectionId": "sec-17-2"
  },
  {
    "id": "gen-51",
    "lessonNumber": 17,
    "lessonTitle": "17. Immunologia - 6.11.2025",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale recettore di morte della superfamiglia del TNF espresso sulle cellule bersaglio lega il ligando FasL (CD178) up-regolato sui CTL attivati?",
    "options": [
      "DR5",
      "TRAIL-R1 (DR4)",
      "TNFR1",
      "Fas (CD95)"
    ],
    "correctIndex": 3,
    "explanation": "Fas lega il trimero FasL, inducendo l'oligomerizzazione del recettore e il reclutamento della proteina adattatrice FADD tramite interazione omofitica tra domini di morte (DD).",
    "clinicalPearl": "Mutazioni in Fas o FasL provocano la Sindrome Linfoproliferativa Autoimmune (ALPS), caratterizzata da mancata contrazione clonale linfocitaria e splenomegalia.",
    "targetSectionId": "sec-17-3"
  },
  {
    "id": "gen-52",
    "lessonNumber": 18,
    "lessonTitle": "18. Immunologia - 10.11.2025",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale recettore di citotossicità naturale (NCR) è espresso costitutivamente su tutte le cellule NK umane e lega residui di acido eparano solfato e proteine virali?",
    "options": [
      "NKG2D",
      "NKp30 (CD337)",
      "NKp44 (CD336)",
      "NKp46 (CD335)"
    ],
    "correctIndex": 3,
    "explanation": "NKp46 è il marker fenotipico più conservato ed esclusivo delle cellule NK nell'uomo e nel topo, espresso sia a riposo che dopo attivazione.",
    "clinicalPearl": "NKp44 viene espresso solo in seguito ad attivazione da IL-2 o IL-15, mentre NKp46 e NKp30 sono costitutivi: dettaglio d'esame richiesto dalla Galandrini.",
    "targetSectionId": "sec-18-1"
  },
  {
    "id": "gen-53",
    "lessonNumber": 18,
    "lessonTitle": "18. Immunologia - 10.11.2025",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale recettore attivatorio omodimerico C-tipo lectina-like riconosce le proteine di stress MICA, MICB e le proteine ULBP esposte da cellule trasformate o infettate?",
    "options": [
      "LILRB1",
      "CD94/NKG2A",
      "KIR2DL1",
      "NKG2D (CD314)"
    ],
    "correctIndex": 3,
    "explanation": "NKG2D si associa alla proteina adattatrice DAP10 citoplasmatica per inviare segnali di citotossicità quando rileva molecole self indotte da danno genomico o infezione virale.",
    "clinicalPearl": "Le cellule tumorali sfuggono al riconoscimento rilasciando MICA/B solubili tramite metalloproteinasi (shedding), esaurendo il recettore NKG2D.",
    "targetSectionId": "sec-18-2"
  },
  {
    "id": "gen-54",
    "lessonNumber": 18,
    "lessonTitle": "18. Immunologia - 10.11.2025",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Secondo l'ipotesi del 'missing-self' di Ljunggren e Kärre, cosa innesca la lisi della cellula bersaglio da parte della cellula NK?",
    "options": [
      "La perdita o downregulation delle molecole HLA di classe I self che ingaggiano i recettori inibitori KIR",
      "La sovraespressione di beta2-microglobulina",
      "L'iperespressione costitutiva di HLA-E",
      "La secrezione di anticorpi IgA"
    ],
    "correctIndex": 0,
    "explanation": "I recettori inibitori KIR e CD94/NKG2A legano costitutivamente HLA-I; se la cellula tumorale o infettata perde HLA-I per sfuggire ai CTL, viene a mancare il segnale inibitorio ITIM e scatta la lisi NK.",
    "clinicalPearl": "Argomento focale del corso: integrazione tra immunità innata (NK) e adattativa (CTL) nella sorveglianza delle cellule bersaglio.",
    "targetSectionId": "sec-18-3"
  },
  {
    "id": "gen-55",
    "lessonNumber": 19,
    "lessonTitle": "19. Immunologia - 12.11.2025",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale recettore eterodimerico inibitorio composto da CD94 riconosce specificamente la molecola monomorfa HLA-E che presenta i peptidi leader delle altre classi I?",
    "options": [
      "KIR3DL1",
      "CD94/NKG2C",
      "CD94/NKG2A",
      "KIR2DL3"
    ],
    "correctIndex": 2,
    "explanation": "CD94/NKG2A contiene motivi ITIM nella catena NKG2A e funge da sensore dell'integrità complessiva della biosintesi delle molecole HLA-A, B e C monitorando HLA-E.",
    "clinicalPearl": "Il recettore eterodimero omologo CD94/NKG2C è invece attivatorio (segnala con DAP12) ed espande cellule NK 'memory-like' nell'infezione da Citomegalovirus.",
    "targetSectionId": "sec-19-1"
  },
  {
    "id": "gen-56",
    "lessonNumber": 19,
    "lessonTitle": "19. Immunologia - 12.11.2025",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "In cosa consiste il processo di 'licensing' o educazione delle cellule NK durante il loro sviluppo?",
    "options": [
      "L'induzione obbligatoria di riarrangiamenti genici somatici",
      "L'eliminazione apoptotica di tutte le NK che riconoscono MHC self",
      "Le cellule NK acquisiscono competenza funzionale solo se i loro recettori inibitori interagiscono con molecole HLA di classe I self durante la maturazione",
      "L'acquisizione esclusiva del marcatore CD16"
    ],
    "correctIndex": 2,
    "explanation": "L'educazione delle NK è un processo dinamico: le NK che possiedono recettori inibitori per ligandi self diventano 'armate' e responsiva; le NK prive di recettori inibitori autologhi rimangono anergiche/iporesponsabili.",
    "clinicalPearl": "Concetto avanzato di immunologia delle NK spesso oggetto di lode all'esame con la Prof.ssa Galandrini.",
    "targetSectionId": "sec-19-2"
  },
  {
    "id": "gen-57",
    "lessonNumber": 19,
    "lessonTitle": "19. Immunologia - 12.11.2025",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale recettore Fc a bassa affinità espresso sulle cellule NK mature media la citotossicità cellulare anticorpo-dipendente (ADCC)?",
    "options": [
      "Fc-gamma-RIIIA (CD16a)",
      "Fc-gamma-RI (CD64)",
      "Fc-gamma-RIIB (CD32b)",
      "Fc-epsilon-RI"
    ],
    "correctIndex": 0,
    "explanation": "CD16a si associa a catene zeta o Fc-epsilon-RI-gamma contenenti ITAM; legando la porzione Fc di IgG1 o IgG3 complessate al bersaglio, scatena degranulazione rapida indipendente da altri corecettori.",
    "clinicalPearl": "L'ADCC mediata da CD16 è il principale meccanismo d'azione di anticorpi terapeutici antitumorali quali Rituximab (anti-CD20) e Trastuzumab (anti-HER2).",
    "targetSectionId": "sec-19-3"
  },
  {
    "id": "gen-58",
    "lessonNumber": 20,
    "lessonTitle": "20. Immunologia - 13.11.2025",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale recettore appartenente alla superfamiglia del TNFR espresso sul linfocita B deve legare il ligando CD154 sul linfocita Tfh per consentire l'ingresso nel centro germinativo e lo switch isotipico?",
    "options": [
      "BCMA",
      "BAFF-R",
      "CD40",
      "TACI"
    ],
    "correctIndex": 2,
    "explanation": "Il cross-linking di CD40 da parte di CD154 (CD40L) trimerico attiva le vie NF-kB classica e non canonica, essenziali per la proliferazione B e l'induzione dell'enzima AID.",
    "clinicalPearl": "Mutazioni in CD154 causano la Sindrome da Iper-IgM legata all'X (HIGM1), caratterizzata da assenza di centri germinativi e livelli sierici azzerati di IgG, IgA e IgE.",
    "targetSectionId": "sec-20-1"
  },
  {
    "id": "gen-59",
    "lessonNumber": 20,
    "lessonTitle": "20. Immunologia - 13.11.2025",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale master transcription factor specifica l'identità e la funzionalità dei linfociti T helper follicolari (Tfh) e reprime Blimp-1?",
    "options": [
      "STAT5",
      "Blimp-1",
      "Bcl-6",
      "FoxP3"
    ],
    "correctIndex": 2,
    "explanation": "Bcl-6 è il regolatore fondamentale dei Tfh (e dei centroblasti B); guida l'espressione di CXCR5, ICOS, PD-1 e la citochina IL-21, inibendo al contempo T-bet, GATA-3 e ROR-gamma-t.",
    "clinicalPearl": "L'antagonismo reciproco tra Bcl-6 (che mantiene lo stato proliferativo del centro germinativo) e Blimp-1 (che guida il differenziamento plasmacellulare terminale) è una domanda frequente della Molfetta.",
    "targetSectionId": "sec-20-2"
  },
  {
    "id": "gen-60",
    "lessonNumber": 20,
    "lessonTitle": "20. Immunologia - 13.11.2025",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "In quale compartimento anatomico del centro germinativo i centroblasti proliferano intensamente e vanno incontro ad ipermutazione somatica?",
    "options": [
      "Zona marginale",
      "Zona chiara",
      "Mantello follicolare",
      "Zona scura"
    ],
    "correctIndex": 3,
    "explanation": "Nella zona scura (dark zone) i centroblasti esprimono alti livelli di CXCR4 ed esprimono AID per mutare i geni V(D)J; migrano poi nella zona chiara (light zone, ricca di CXCL13) per la selezione antigenica.",
    "clinicalPearl": "La Prof.ssa Molfetta richiede la dinamica ciclica tra centroblasti (zona scura) e centrociti (zona chiara).",
    "targetSectionId": "sec-20-3"
  },
  {
    "id": "gen-61",
    "lessonNumber": 21,
    "lessonTitle": "21. Immunologia - 17.11.2025",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale attività enzimatica è svolta direttamente da AID (Activation-Induced Cytidine Deaminase) sulle sequenze di DNA a singolo filamento?",
    "options": [
      "Taglio endonucleasico del legame fosfodiesterico",
      "Deaminazione della deossicitidina in deossiuridina",
      "Aggiunta di nucleotidi N al terminale 3'",
      "Metilazione delle citosine CpG"
    ],
    "correctIndex": 1,
    "explanation": "AID deamina la citosina in uracile nei motivi preferenziali WRCY; l'uracile viene poi rimosso dalla uracil-DNA glicosilasi (UNG), generando siti abasici poi tagliati dall'endonucleasi APE1.",
    "clinicalPearl": "Mutazioni in AID causano la Sindrome da Iper-IgM autosomica recessiva tipo 2 (HIGM2), con difetto intrinseco sia di ipermutazione somatica sia di switch isotipico.",
    "targetSectionId": "sec-21-1"
  },
  {
    "id": "gen-62",
    "lessonNumber": 21,
    "lessonTitle": "21. Immunologia - 17.11.2025",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale citochina rilasciata dai linfociti Th2 induce specificamente la trascrizione germinativa della regione di switch S-epsilon guidando lo scambio di classe verso IgE?",
    "options": [
      "Interleuchina-10",
      "Interferone-gamma (IFN-gamma)",
      "TGF-beta",
      "Interleuchina-4 (IL-4)"
    ],
    "correctIndex": 3,
    "explanation": "IL-4 (e IL-13) attiva STAT6 che apre la cromatina a monte dell'esone C-epsilon, consentendo ad AID di generare rotture del doppio filamento (DSB) e guidare la ricombinazione di switch verso IgE.",
    "clinicalPearl": "Al contrario, IFN-gamma promuove lo switch verso IgG1/IgG3 nell'uomo (e IgG2a nel topo), mentre TGF-beta indirizza verso IgA.",
    "targetSectionId": "sec-21-2"
  },
  {
    "id": "gen-63",
    "lessonNumber": 21,
    "lessonTitle": "21. Immunologia - 17.11.2025",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Cosa espongono le cellule dendritiche follicolari (FDC) nella zona chiara per consentire la selezione competitiva dei centrociti ad alta affinità?",
    "options": [
      "Antigeni lipidici complessati con CD1d",
      "Peptidi processati associati a MHC di classe II",
      "Complessi antigene-anticorpo su recettori Fc-gamma e frammenti di complemento su CR1/CR2",
      "Proteine denaturate su chaperonine"
    ],
    "correctIndex": 2,
    "explanation": "Le FDC non processano l'antigene su MHC-II (non sono APC convenzionali di origine ematopoietica); trattengono antigeni nativi tramite Fc-gamma-R e recettori per C3d (CD21/CD35) per mesi.",
    "clinicalPearl": "Punto d'esame critico: le FDC non derivano da progenitori ematopoietici midollari ma hanno origine stromale mesenchimale.",
    "targetSectionId": "sec-21-3"
  },
  {
    "id": "gen-64",
    "lessonNumber": 22,
    "lessonTitle": "22. immunologia - 19.11.2025 (2) (2)",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale fattore di trascrizione è il regolatore master essenziale per il differenziamento terminale e la sopravvivenza delle plasmacellule secernenti?",
    "options": [
      "Blimp-1 (PRDM1)",
      "Pax-5",
      "Bcl-6",
      "EBF1"
    ],
    "correctIndex": 0,
    "explanation": "Blimp-1 spegne il programma trascrizionale del linfocita B reprimendo Pax-5 e Bcl-6, e attiva (insieme a XBP-1) il macchinario secretorio e la risposta UPR per la produzione massiva di immunoglobuline.",
    "clinicalPearl": "La Prof.ssa Molfetta pone estrema attenzione sul duello trascrizionale Bcl-6 (cellula proliferante del GC) vs Blimp-1 (plasmacellula terminale).",
    "targetSectionId": "sec-22-1"
  },
  {
    "id": "gen-65",
    "lessonNumber": 22,
    "lessonTitle": "22. immunologia - 19.11.2025 (2) (2)",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale chemochina espressa dallo stroma del midollo osseo attira e mantiene nelle nicchie di sopravvivenza le plasmacellule a lunga vita tramite il recettore CXCR4?",
    "options": [
      "CXCL13",
      "CXCL12 (SDF-1)",
      "CCL19",
      "CCL25"
    ],
    "correctIndex": 1,
    "explanation": "Le plasmacellule a lunga vita up-regolano CXCR4 e perdono CXCR5, migrando verso il midollo osseo dove le cellule stromali rilasciano CXCL12, BAFF e citochine come IL-6.",
    "clinicalPearl": "Nelle nicchie midollari le plasmacellule a lunga vita continuano a produrre anticorpi protettivi ad alta affinità per decenni senza necessità di ri-esposizione all'antigene.",
    "targetSectionId": "sec-22-2"
  },
  {
    "id": "gen-66",
    "lessonNumber": 22,
    "lessonTitle": "22. immunologia - 19.11.2025 (2) (2)",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale recettore inibitorio presente sui linfociti B lega la porzione Fc delle IgG aggregate inducendo l'inibizione retroattiva (antibody feedback)?",
    "options": [
      "Fc-gamma-RIIA (CD32a)",
      "Fc-gamma-RIA (CD64)",
      "Fc-gamma-RIIB (CD32b)",
      "Fc-gamma-RIIIA (CD16)"
    ],
    "correctIndex": 2,
    "explanation": "Fc-gamma-RIIB possiede un motivo ITIM citoplasmatico; quando cross-linkato con il BCR da immunocomplessi, recluta la fosfatasi SHIP1 che degrada PIP3 spegnendo l'attivazione B.",
    "clinicalPearl": "L'antibody feedback previene l'iperproduzione anticorpale quando i livelli sierici di IgG specifiche sono già sufficienti a neutralizzare l'infezione.",
    "targetSectionId": "sec-22-3"
  },
  {
    "id": "gen-67",
    "lessonNumber": 23,
    "lessonTitle": "23. Immunologia - 20.11.2025",
    "topicCategory": "Immunità Mucosale (GALT) & Microbiota",
    "professor": "Soriani",
    "question": "Quale recettore polimerico transmembrana espresso sul polo basolaterale degli enterociti media la transcitosi delle IgA dimeriche nel lume intestinale?",
    "options": [
      "CD89 (Fc-alfa-RI)",
      "FcRn (Recettore neonatale per Fc)",
      "Recettore Asialoglicoproteico",
      "pIgR (Polymeric Immunoglobulin Receptor)"
    ],
    "correctIndex": 3,
    "explanation": "Il pIgR lega il frammento J delle IgA dimeriche (e IgM pentameriche), le endocita e le trasporta al polo apicale; il clivaggio proteolitico rilascia l'IgA legata al 'componente secretorio'.",
    "clinicalPearl": "Il componente secretorio protegge l'IgA secretoria (sIgA) dalla degradazione da parte delle proteasi luminali pancreatiche e batteriche.",
    "targetSectionId": "sec-23-1"
  },
  {
    "id": "gen-68",
    "lessonNumber": 23,
    "lessonTitle": "23. Immunologia - 20.11.2025",
    "topicCategory": "Immunità Mucosale (GALT) & Microbiota",
    "professor": "Soriani",
    "question": "Quali cellule epiteliali specializzate sovrastano le cupole delle placche di Peyer ed effettuano transcitosi di antigeni intatti dal lume intestinale al GALT?",
    "options": [
      "Cellule M (Microfold cells)",
      "Cellule di Paneth",
      "Cellule enteroendocrine",
      "Cellule a calice muciparo"
    ],
    "correctIndex": 0,
    "explanation": "Le cellule M possiedono invaginazioni basolaterali contenenti linfociti e DC e mancano di microvilli rigidi e glicocalice spesso, permettendo il campionamento continuo del contenuto luminale.",
    "clinicalPearl": "Alcuni patogeni invasivi (es. Salmonella, Shigella, Yersinia) sfruttano le cellule M come porta d'ingresso privileged per invadere l'ospite.",
    "targetSectionId": "sec-23-2"
  },
  {
    "id": "gen-69",
    "lessonNumber": 23,
    "lessonTitle": "23. Immunologia - 20.11.2025",
    "topicCategory": "Immunità Mucosale (GALT) & Microbiota",
    "professor": "Soriani",
    "question": "Quale metabolita della dieta viene convertito dalle cellule dendritiche mucosali (CD103+) in acido retinoico per indurre l'espressione di CCR9 e alfa4-beta7 sui linfociti T?",
    "options": [
      "Acido butirrico",
      "Vitamina D3 (Colecalciferolo)",
      "Triptofano",
      "Vitamina A (Retinolo)"
    ],
    "correctIndex": 3,
    "explanation": "L'enzima retinolo deidrogenasi (RALDH) nelle DC mucosali trasforma la vitamina A in acido retinoico, che imprime l'homing tropismo intestinale (CCR9 verso CCL25 e alfa4-beta7 verso MAdCAM-1).",
    "clinicalPearl": "La Prof.ssa Soriani interroga frequentemente sull'educazione mucosale mediata da acido retinoico, TGF-beta e acidi grassi a catena corta (SCFA).",
    "targetSectionId": "sec-23-3"
  },
  {
    "id": "gen-70",
    "lessonNumber": 24,
    "lessonTitle": "24.Immunologia-24.11.2025",
    "topicCategory": "Tolleranza, Autoimmunità & Immunopatologia",
    "professor": "Soriani",
    "question": "Quale ligando espresso da macrofagi e cellule dendritiche attiva il pathway Fas-dipendente per eliminare i linfociti T autoreattivi tramite morte indotta da attivazione (AICD)?",
    "options": [
      "FasL (CD178)",
      "TRAIL",
      "TNF-alfa",
      "TWEAK"
    ],
    "correctIndex": 0,
    "explanation": "La stimolazione ripetuta del TCR senza adeguata costimolazione o in presenza di IL-2 induce l'espressione di Fas e FasL, portando ad apoptosi per AICD (tolleranza periferica).",
    "clinicalPearl": "Un difetto in questa via porta alla sindrome linfoproliferativa autoimmune ALPS con accumulo aberrante di linfociti T CD4- CD8- doppio negativi.",
    "targetSectionId": "sec-24-1"
  },
  {
    "id": "gen-71",
    "lessonNumber": 24,
    "lessonTitle": "24.Immunologia-24.11.2025",
    "topicCategory": "Tolleranza, Autoimmunità & Immunopatologia",
    "professor": "Soriani",
    "question": "In che modo il mimetismo molecolare può innescare una malattia autoimmune post-infettiva come la febbre reumatica acuta?",
    "options": [
      "Downregulation generalizzata di FoxP3",
      "Iperproduzione aspecifica di anticorpi IgE",
      "Attivazione policlonale mediata da superantigeni",
      "Cross-reattività tra epitopi antigenici dello Streptococco beta-emolitico di gruppo A e molecole self cardiache come la miosina"
    ],
    "correctIndex": 3,
    "explanation": "Anticorpi e cloni T generati contro la proteina M streptococcica riconoscono per omologia strutturale la miosina cardiaca e le glicoproteine valvolari, scatenando cardite reumatica.",
    "clinicalPearl": "Esempio cardine all'esame orale per spiegare come un'infezione acuta possa fungere da 'trigger' per la rottura della tolleranza periferica.",
    "targetSectionId": "sec-24-2"
  },
  {
    "id": "gen-72",
    "lessonNumber": 24,
    "lessonTitle": "24.Immunologia-24.11.2025",
    "topicCategory": "Tolleranza, Autoimmunità & Immunopatologia",
    "professor": "Soriani",
    "question": "Quale fenomeno descrive la progresiva risposta autoimmune verso nuovi epitopi dello stesso autoantigene o di molecole adiacenti durante il danno tissutale cronico?",
    "options": [
      "Maturazione dell'affinità",
      "Esclusione allelica",
      "Epitope spreading (propagazione dell'epitopo)",
      "Anergia clonale"
    ],
    "correctIndex": 2,
    "explanation": "Il danno tissutale continuo causa il rilascio di nuovi antigeni intracellulari criptici che vengono processati da APC e presentati a ulteriori cloni autoreattivi naive.",
    "clinicalPearl": "L'epitope spreading spiega perché le malattie autoimmuni (es. Sclerosi Multipla, Diabete tipo 1) tendano a cronicizzare e aggravarsi nel tempo.",
    "targetSectionId": "sec-24-3"
  },
  {
    "id": "gen-73",
    "lessonNumber": 25,
    "lessonTitle": "25. Immunologia - 26.11.2025.pdf",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Rinaldi",
    "question": "Quale recettore ad altissima affinità per il frammento Fc delle immunoglobuline E è costitutivamente espresso sulla membrana dei mastociti e basofili?",
    "options": [
      "Fc-epsilon-RII (CD23)",
      "Fc-epsilon-RI",
      "Fc-gamma-RI (CD64)",
      "Fc-alfa-RI (CD89)"
    ],
    "correctIndex": 1,
    "explanation": "Fc-epsilon-RI è un tetramero (alfa-beta-gamma2); la catena alfa lega la porzione C-epsilon-3 delle IgE con affinità altissima (Kd di circa 10^-10 M), trattenendo le IgE anche a bassissime concentrazioni sieriche.",
    "clinicalPearl": "Il farmaco Omalizumab è un anticorpo monoclonale anti-IgE che si lega al sito di legame per Fc-epsilon-RI, impedendo l'ancoraggio delle IgE ai mastociti.",
    "targetSectionId": "sec-25-1"
  },
  {
    "id": "gen-74",
    "lessonNumber": 25,
    "lessonTitle": "25. Immunologia - 26.11.2025.pdf",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Rinaldi",
    "question": "Quale mediatore preformato rilasciato istantaneamente dai granuli mastocitari è responsabile del broncospasmo, aumento della permeabilità vascolare e vasodilatazione nella fase precoce?",
    "options": [
      "Prostaglandina D2 (PGD2)",
      "Leucotriene C4 (LTC4)",
      "Istamina",
      "Triptasi"
    ],
    "correctIndex": 2,
    "explanation": "L'istamina agisce rapidamente sui recettori H1 endoteliali e della muscolatura liscia bronchiale, determinando la reazione immediata da ipersensibilità entro pochi minuti dal contatto con l'allergene.",
    "clinicalPearl": "La triptasi sierica è un marcatore biochimico specifico misurato in emergenza per confermare una diagnosi di anafilassi sistemica.",
    "targetSectionId": "sec-25-2"
  },
  {
    "id": "gen-75",
    "lessonNumber": 25,
    "lessonTitle": "25. Immunologia - 26.11.2025.pdf",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Rinaldi",
    "question": "Quali lipidi derivati dall'acido arachidonico tramite la via della 5-lipossigenasi compongono la 'sostanza a reazione lenta dell'anafilassi' (SRS-A) con prolungata azione broncocostrittrice?",
    "options": [
      "Trombossano A2",
      "Prostaglandina E2 (PGE2)",
      "Leucotrieni cisteinilici (LTC4, LTD4, LTE4)",
      "Lipossine A4"
    ],
    "correctIndex": 2,
    "explanation": "I cisteinil-leucotrieni sono prodotti nella fase secondaria mastocitaria e possiedono una potenza broncocostrittrice 1000 volte superiore a quella dell'istamina con azione duratura.",
    "clinicalPearl": "I farmaci inibitori dei recettori dei leucotrieni (Montelukast) sono cardine terapeutico nell'asma bronchiale allergico e da aspirina.",
    "targetSectionId": "sec-25-3"
  },
  {
    "id": "gen-76",
    "lessonNumber": 26,
    "lessonTitle": "26. Immunologia - 27.11.25",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Rinaldi",
    "question": "Qual è il meccanismo patogenetico che distingue l'ipersensibilità di tipo II da quella di tipo III?",
    "options": [
      "Nel Tipo II gli anticorpi riconoscono antigeni fissi tessutali o cellulari; nel Tipo III il danno è causato da immunocomplessi solubili circolanti che precipitano nei vasi",
      "Il Tipo II è mediato da IgE, il Tipo III da linfociti T citotossici",
      "Il Tipo II non attiva il complemento, il Tipo III sì",
      "Il Tipo II coinvolge solo mastociti tissutali"
    ],
    "correctIndex": 0,
    "explanation": "L'ipersensibilità di tipo II è citotossica anticorpo-dipendente verso antigeni di superficie; il tipo III è caratterizzato dalla formazione e deposizione vascolare sistemica di immunocomplessi antigene-anticorpo.",
    "clinicalPearl": "Domanda classica d'esame: la Miastenia Gravis e il Pemfigo sono Tipo II; il Lupus (LES) e la Malattia da Siero sono Tipo III.",
    "targetSectionId": "sec-26-1"
  },
  {
    "id": "gen-77",
    "lessonNumber": 26,
    "lessonTitle": "26. Immunologia - 27.11.25",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Rinaldi",
    "question": "Nella Miastenia Gravis, quale recettore post-sinaptico della giunzione neuromuscolare è il bersaglio degli autoanticorpi patogenetici di classe IgG?",
    "options": [
      "Recettore nicotinico dell'acetilcolina (AChR)",
      "Canale del calcio voltaggio-dipendente (VGCC)",
      "Recettore muscarinico M2",
      "Recettore della rianodina"
    ],
    "correctIndex": 0,
    "explanation": "Gli anticorpi anti-AChR bloccano competitivamente il legame dell'acetilcolina, inducono endocitosi del recettore e attivano il complemento sulla placca motrice, causando astenia muscolare fluttuante.",
    "clinicalPearl": "Si contrappone alla sindrome di Lambert-Eaton (paraneoplastica) dove gli autoanticorpi colpiscono i canali del calcio pre-sinaptici.",
    "targetSectionId": "sec-26-2"
  },
  {
    "id": "gen-78",
    "lessonNumber": 26,
    "lessonTitle": "26. Immunologia - 27.11.25",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Rinaldi",
    "question": "Quale quadro clinico sperimentale e umano di ipersensibilità di tipo III localizzata è innescato dall'iniezione cutanea di un antigene in un soggetto con alti livelli di IgG specifiche preformate?",
    "options": [
      "Glomerulonefrite post-streptococcica",
      "Malattia da siero acuta",
      "Reazione di Arthus",
      "Dermatite da contatto"
    ],
    "correctIndex": 2,
    "explanation": "La reazione di Arthus è caratterizzata da vasculite necrotizzante acuta e trombosi locale, indotta dalla precipitazione in situ di immunocomplessi che legano Fc-gamma-RIII sui mastociti e attivano C5a.",
    "clinicalPearl": "Può verificarsi storicamente come complicanza locale di dosi di richiamo vaccinali iper-ravvicinate in soggetti iperimmunizzati.",
    "targetSectionId": "sec-26-3"
  },
  {
    "id": "gen-79",
    "lessonNumber": 27,
    "lessonTitle": "27. Immunologia - 01.12.2025",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Rinaldi",
    "question": "Quali cellule effettrici primarie mediano la formazione del granuloma immunologico nella reazione di ipersensibilità ritardata (DTH) cronica contro Mycobacterium tuberculosis?",
    "options": [
      "Linfociti Th2 secernenti IL-4 ed eosinofili",
      "Linfociti Th1 secernenti IFN-gamma e macrofagi attivati differenziati in cellule epitelioidi e cellule giganti di Langhans",
      "Linfociti B e plasmacellule secernenti IgG",
      "Cellule NK e mastociti"
    ],
    "correctIndex": 1,
    "explanation": "I Th1 secernono grandi quantità di IFN-gamma che iperattiva i macrofagi; in caso di mancata eliminazione del micobatterio, i macrofagi si fondono formando cellule giganti multinucleate delimitando il granuloma tubercolare.",
    "clinicalPearl": "Il TNF-alfa è essenziale per il mantenimento strutturale del granuloma; i farmaci biologici anti-TNF possono riattivare una tubercolosi latente.",
    "targetSectionId": "sec-27-1"
  },
  {
    "id": "gen-80",
    "lessonNumber": 27,
    "lessonTitle": "27. Immunologia - 01.12.2025",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Rinaldi",
    "question": "Quale aptene metallico è la causa più frequente di dermatite allergica da contatto (reazione di Tipo IV mediata da cellule T cutanee esprimenti CLA)?",
    "options": [
      "Nichel (Ni2+)",
      "Cromo",
      "Mercurio",
      "Cobalto"
    ],
    "correctIndex": 0,
    "explanation": "Gli ioni Nichel attraversano la barriera epidermica, si legano covalentemente a proteine self fungendo da apteni, e possono legare e attivare direttamente TLR4 inducendo risposta Th1 e CD8+ citotossica.",
    "clinicalPearl": "La Prof.ssa Rinaldi sottolinea che il patch test è l'indagine diagnostica gold standard per le reazioni di tipo IV, a differenza del prick test (Tipo I).",
    "targetSectionId": "sec-27-2"
  },
  {
    "id": "gen-81",
    "lessonNumber": 27,
    "lessonTitle": "27. Immunologia - 01.12.2025",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Rinaldi",
    "question": "Nel test cutaneo alla tubercolina (reazione di Mantoux), entro quanto tempo si manifesta l'indurimento ed eritema tipico dell'ipersensibilità ritardata?",
    "options": [
      "6 - 8 ore",
      "15 - 30 minuti",
      "2 - 4 ore",
      "48 - 72 ore"
    ],
    "correctIndex": 3,
    "explanation": "La DTH necessita di 24-72 ore per consentire il reclutamento dei linfociti T memoria nel derma, la secrezione di citochine e il richiamo massivo di monociti e macrofagi.",
    "clinicalPearl": "Un diametro dell'infiltrato palpabile > 10 mm (o > 5 mm nei soggetti immunocompromessi/HIV) è considerato positivo.",
    "targetSectionId": "sec-27-3"
  },
  {
    "id": "gen-82",
    "lessonNumber": 28,
    "lessonTitle": "28. Immunologia - 03.12.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Galandrini",
    "question": "Quale forma temporale di rigetto del trapianto si verifica entro minuti od ore dalla riperfusione vascolare dell'organo ed è causata da anticorpi preformati donatore-specifici?",
    "options": [
      "Rigetto iperacuto",
      "Rigetto acuto cellulare",
      "Rigetto acuto umorale",
      "Rigetto cronico"
    ],
    "correctIndex": 0,
    "explanation": "Il rigetto iperacuto è causato da anticorpi preesistenti (anti-AB0 o anti-HLA da pregresse trasfusioni, gravidanze o trapianti) che legano l'endotelio dell'innesto, attivano il complemento e causano trombosi massiva e necrosi ischemica.",
    "clinicalPearl": "Si previene obbligatoriamente eseguendo il test del cross-match pre-trapianto tra siero del ricevente e linfociti del donatore.",
    "targetSectionId": "sec-28-1"
  },
  {
    "id": "gen-83",
    "lessonNumber": 28,
    "lessonTitle": "28. Immunologia - 03.12.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Galandrini",
    "question": "In cosa consiste la via di alloriconoscimento 'diretta' che innesca il rigetto acuto dell'organo trapiantato?",
    "options": [
      "Il riconoscimento di antigeni solubili del donatore da parte delle cellule NK",
      "I linfociti T del ricevente riconoscono peptidi dell'alloinnesto processati e presentati da APC del ricevente",
      "I linfociti T del ricevente riconoscono le molecole MHC allogeniche intatte esposte sulla superficie delle cellule dendritiche del donatore (leucociti passeggeri)",
      "L'attivazione del complemento mediata da anticorpi naturali"
    ],
    "correctIndex": 2,
    "explanation": "La via diretta è un evento ad altissima frequenza clonale (fino all'1-5% dei T totali), dovuto al fatto che il TCR self cross-reagisce con la conformazione tridimensionale dell'MHC estraneo intatto espresso dalle DC passeggere dell'organo.",
    "clinicalPearl": "La via indiretta invece coinvolge APC del ricevente che presentano peptidi derivati dall'innesto allogenico su MHC self, predominante nel rigetto cronico.",
    "targetSectionId": "sec-28-2"
  },
  {
    "id": "gen-84",
    "lessonNumber": 28,
    "lessonTitle": "28. Immunologia - 03.12.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Galandrini",
    "question": "Nel trapianto di cellule staminali ematopoietiche (HSCT), quale complicanza sistemica è causata dai linfociti T maturi del donatore che aggrediscono i tessuti del ricevente (cute, fegato, intestino)?",
    "options": [
      "Graft-versus-Host Disease (GVHD)",
      "Rigetto dell'innesto",
      "Sindrome da lisi tumorale",
      "Porpora trombocitopenica idiopatica"
    ],
    "correctIndex": 0,
    "explanation": "La GVHD è innescata dai linfociti T alloreattivi contenuti nell'inoculo del donatore che riconoscono sia antigeni HLA maggiori che minori di istocompatibilità (mHA) nei tessuti del paziente condizionato.",
    "clinicalPearl": "La rimozione parziale dei linfociti T riduce la GVHD ma aumenta il rischio di recidiva leucemica per perdita dell'effetto terapeutico Graft-versus-Leukemia (GVL).",
    "targetSectionId": "sec-28-3"
  },
  {
    "id": "gen-85",
    "lessonNumber": 29,
    "lessonTitle": "29. Immunologia - 04.12.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Soriani",
    "question": "Quale fase del processo di 'immunoediting' tumorale (le tre E) è caratterizzata da una pressione selettiva darwiniana che seleziona varianti tumorali non immunogeniche resistenti alla risposta immunitaria?",
    "options": [
      "Equilibrio",
      "Eliminazione",
      "Evasione (Escape)",
      "Espansione"
    ],
    "correctIndex": 0,
    "explanation": "La fase di Equilibrio è la più lunga (può durare anni): il sistema immunitario controlla la massa tumorale ma la selettività immunitaria favorisce cloni con mutazioni che consentono la fuga (Escape).",
    "clinicalPearl": "Le tre E di Schreiber (Elimination, Equilibrium, Escape) sono una domanda sistematica chiesta all'orale dalla Prof.ssa Soriani.",
    "targetSectionId": "sec-29-1"
  },
  {
    "id": "gen-86",
    "lessonNumber": 29,
    "lessonTitle": "29. Immunologia - 04.12.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Soriani",
    "question": "Quale meccanismo di evasione immunitaria tumorale impedisce il riconoscimento da parte dei linfociti T CD8+ citotossici pur rendendo il tumore teoricamente suscettibile alla lisi da cellule NK?",
    "options": [
      "Secrezione di IL-12",
      "Iperespressione di CD80 e CD86",
      "Perdita della beta2-microglobulina o mutazioni con perdita di eterozigosi (LOH) nel locus HLA di classe I",
      "Attivazione del pathway STING"
    ],
    "correctIndex": 2,
    "explanation": "Mutazioni in B2M impediscono il trasporto in membrana dell'eterodimero HLA-I; il tumore elude i CTL CD8+, ma secondo l'ipotesi del missing-self dovrebbe diventare bersaglio delle cellule NK.",
    "clinicalPearl": "Spesso i tumori rilasciano metalloproteinasi che tagliano i ligandi MICA/MICB per inattivare contestualmente anche le cellule NK.",
    "targetSectionId": "sec-29-2"
  },
  {
    "id": "gen-87",
    "lessonNumber": 29,
    "lessonTitle": "29. Immunologia - 04.12.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Soriani",
    "question": "Quale enzima espresso dalle cellule mieloidi soppressorie (MDSC) e dal microambiente tumorale depaupera la L-arginina inibendo la proliferazione dei linfociti T?",
    "options": [
      "Ossido nitrico sintasi inducibile (iNOS)",
      "Indoleamina 2,3-diossigenasi (IDO)",
      "Arginasi-1 (ARG1)",
      "Glutaminasi"
    ],
    "correctIndex": 2,
    "explanation": "ARG1 degrada la L-arginina a urea e ornitina; la carenza di questo aminoacido essenziale blocca il ciclo cellulare dei T linfociti e provoca la perdita della catena CD3-zeta.",
    "clinicalPearl": "Le MDSC utilizzano sia ARG1 che iNOS per generare specie reattive dell'azoto (perossinitrito) che nitrano il TCR inattivandolo.",
    "targetSectionId": "sec-29-3"
  },
  {
    "id": "gen-88",
    "lessonNumber": 30,
    "lessonTitle": "30. Immunologia - 10.12.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Soriani",
    "question": "Da cosa è costituito il dominio extracellulare di riconoscimento antigenico di un recettore chimerico dell'antigene (CAR) espresso sui linfociti T?",
    "options": [
      "Frammento variabile a singola catena (scFv) derivato da un anticorpo monoclonale",
      "Dominio extracellulare nativo di un TCR alfa/beta",
      "Dominio immunoglobulinico del CD4",
      "Frammento Fc costante delle IgG1"
    ],
    "correctIndex": 0,
    "explanation": "L'scFv è formato dai domini variabili VH e VL uniti da un linker flessibile; permette alle CAR-T di riconoscere antigeni nativi di superficie tumorale in modo totalmente indipendente dall'MHC.",
    "clinicalPearl": "La Prof.ssa Soriani evidenzia il grande vantaggio delle CAR-T: scavalcano la downregulation tumorale delle molecole HLA di classe I.",
    "targetSectionId": "sec-30-1"
  },
  {
    "id": "gen-89",
    "lessonNumber": 30,
    "lessonTitle": "30. Immunologia - 10.12.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Soriani",
    "question": "Nelle CAR-T di seconda generazione, quale dominio costimolatorio viene inserito in tandem con il dominio di trasduzione CD3-zeta per prevenire l'anergia ed estendere la persistenza?",
    "options": [
      "Dominio CARD di MAVS",
      "Dominio ITIM di CTLA-4",
      "Dominio extracellulare di PD-1",
      "Dominio costimolatorio derivato da CD28 o 4-1BB (CD137)"
    ],
    "correctIndex": 3,
    "explanation": "Le CAR-T di prima generazione (solo CD3-zeta) andavano rapidamente in anergia; l'aggiunta di CD28 (rapida espansione litica) o 4-1BB (lunga persistenza e memoria) ha rivoluzionato l'efficacia clinica.",
    "clinicalPearl": "Le CAR-T anti-CD19 (Tisagenlecleucel, Axicabtagene ciloleucel) sono approvate per leucemia linfoblastica acuta B e linfomi non-Hodgkin refrattari.",
    "targetSectionId": "sec-30-2"
  },
  {
    "id": "gen-90",
    "lessonNumber": 30,
    "lessonTitle": "30. Immunologia - 10.12.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Soriani",
    "question": "Quale complicanza infiammatoria sistemica grave, scatenata dal rilascio massivo di IL-6 e IFN-gamma dopo infusione di CAR-T, viene trattata con l'anticorpo monoclonale Tocilizumab?",
    "options": [
      "Sindrome da Rilascio di Citochine (CRS)",
      "Sindrome Linfoproliferativa Autoimmune",
      "Malattia da siero acuta",
      "Angioedema ereditario"
    ],
    "correctIndex": 0,
    "explanation": "La CRS è provocata dalla massiva attivazione dei macrofagi da parte dei T ingegnerizzati; si manifesta con febbre elevata, ipotensione grave, ipossia e insufficienza multiorgano; Tocilizumab blocca il recettore di IL-6.",
    "clinicalPearl": "Spesso associata a neurotossicità immuno-mediata (ICANS), tema d'attualità clinica trattato a lezione.",
    "targetSectionId": "sec-30-3"
  },
  {
    "id": "gen-91",
    "lessonNumber": 31,
    "lessonTitle": "31. Immunologia - 11.12.2025",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "Quale alterazione molecolare ed enzimatica è alla base della Agammaglobulinemia legata al sesso (Malattia di Bruton)?",
    "options": [
      "Mutazione della catena pesante mu",
      "Deficit della proteina transmembrana CD19",
      "Mutazione del gene dell'enzima AID",
      "Mutazione del gene che codifica per la Tirosina Chinasi di Bruton (BTK)"
    ],
    "correctIndex": 3,
    "explanation": "BTK è una chinasi citoplasmatica fondamentale per la trasduzione del segnale del pre-BCR; la sua assenza arresta la maturazione dei B allo stadio di pre-B, causando assenza totale di linfociti B e immunoglobuline circolanti.",
    "clinicalPearl": "I maschi affetti sviluppano infezioni batteriche respiratorie ricorrenti da incapsulati a partire dai 6 mesi di vita, quando svaniscono le IgG materne trasmesse per via transplacentare.",
    "targetSectionId": "sec-31-1"
  },
  {
    "id": "gen-92",
    "lessonNumber": 31,
    "lessonTitle": "31. Immunologia - 11.12.2025",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "Quale difetto genetico provoca l'Immunodeficienza Comune Variabile (CVID), la più frequente immunodeficienza primitiva sintomatica dell'adulto?",
    "options": [
      "Mutazione del gene CD40L",
      "Mutazione monogenica esclusiva di RAG1",
      "Delezione del cromosoma 22q11",
      "Eziologia poligenica eterogenea con mutazioni in geni quali TACI, ICOS, CD19 o BAFF-R caratterizzata da ipogammaglobulinemia e difetto anticorpale"
    ],
    "correctIndex": 3,
    "explanation": "La CVID è caratterizzata da normale o levemente ridotto numero di linfociti B ma incapacità di differenziare in plasmacellule della memoria, con marcato calo di IgG e IgA/IgM e frequente autoimmunità.",
    "clinicalPearl": "Punto d'esame distintivo rispetto a Bruton: in Bruton non ci sono linfociti B periferici (CD19/CD20 assenti); in CVID i linfociti B sono presenti ma funzionalmente incompetenti.",
    "targetSectionId": "sec-31-2"
  },
  {
    "id": "gen-93",
    "lessonNumber": 31,
    "lessonTitle": "31. Immunologia - 11.12.2025",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "Qual è il fenotipo immunologico cellulare tipico dei pazienti affetti da SCID X-linked causata da mutazioni nel gene IL2RG (catena gamma comune)?",
    "options": [
      "T- B- NK-",
      "T- B+ NK-",
      "T+ B- NK+",
      "T- B- NK+"
    ],
    "correctIndex": 1,
    "explanation": "La subunità gamma-c è condivisa dai recettori per IL-2, IL-4, IL-7, IL-9, IL-15 e IL-21; l'assenza di segnale per IL-7 azzera lo sviluppo T, mentre la mancanza di IL-15 blocca lo sviluppo NK; i linfociti B si sviluppano ma non funzionano.",
    "clinicalPearl": "La prof.ssa Molfetta chiede sempre la formula fenotipica delle diverse SCID: gamma-c = T-B+NK-; RAG/Artemis = T-B-NK+; deficit di ADA = T-B-NK-.",
    "targetSectionId": "sec-31-3"
  },
  {
    "id": "gen-94",
    "lessonNumber": 32,
    "lessonTitle": "32. Immunologia - 15.12.2025",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "Quale alterazione metabolica tossica è responsabile della SCID da deficit dell'enzima Adenosina Deaminasi (ADA)?",
    "options": [
      "Accumulo di dATP e deossiadenosina tossici che inibiscono la ribonucleotide reduttasi e causano apoptosi precoce di tutti i precursori linfoidi (T- B- NK-)",
      "Accumulo di acido urico nei tessuti",
      "Deficit di pirimidine",
      "Mancata glicolisi nei neutrofili"
    ],
    "correctIndex": 0,
    "explanation": "Il deficit di ADA è autosomico recessivo e comporta l'accumulo intracellulare di metaboliti purinici fosforilati tossici per le cellule in attiva replicazione, eliminando tutti i lignaggi linfocitari.",
    "clinicalPearl": "È stata la prima malattia genetica curata con successo mediante terapia genica ex-vivo con cellule staminali autologhe (Strimvelis).",
    "targetSectionId": "sec-32-1"
  },
  {
    "id": "gen-95",
    "lessonNumber": 32,
    "lessonTitle": "32. Immunologia - 15.12.2025",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "Quale triade clinica caratterizza la Sindrome di Wiskott-Aldrich (WAS), malattia recessiva legata al cromosoma X dovuta a difetti nella riorganizzazione dell'actina?",
    "options": [
      "Angioedema, nefrite e porpora",
      "Albinismo parziale, neuropatia e neutropenia",
      "Teleangectasie oculari, atassia cerebellare e deficit di IgA",
      "Trombocitopenia con piastrine di piccolo volume, eczema cutaneo e infezioni batteriche/virali ricorrenti"
    ],
    "correctIndex": 3,
    "explanation": "La proteina WASP coordina la polimerizzazione dei filamenti di actina necessaria per la formazione della sinapsi immunologica linfocitaria e per la citoscheletria piastrinica.",
    "clinicalPearl": "La microtrombocitopenia (ridotto volume piastrinico medio, MPV) è il reperto patognomonico presente fin dalla nascita.",
    "targetSectionId": "sec-32-2"
  },
  {
    "id": "gen-96",
    "lessonNumber": 32,
    "lessonTitle": "32. Immunologia - 15.12.2025",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "Quale difetto embriologico è alla base della Sindrome di DiGeorge (delezione cromosomica 22q11.2)?",
    "options": [
      "Mancata discesa dei testicoli",
      "Mancato o difettoso sviluppo della terza e quarta tasca faringea, con aplasia/ipoplasia timica, ipoparatiroidismo e cardiopatia congenita",
      "Deficit di fusione dei dotti di Muller",
      "Mancata chiusura del tubo neurale"
    ],
    "correctIndex": 1,
    "explanation": "Il mancato sviluppo timico provoca un deficit variabile di linfociti T maturi nel sangue periferico, associato a ipocalcemia neonatale per assenza delle paratiroidi e anomalie dell'arco aortico/conotruncali.",
    "clinicalPearl": "Il gene TBX1 situato nella regione delezionata 22q11 è il principale fattore trascrizionale implicato nelle alterazioni morfogenetiche.",
    "targetSectionId": "sec-32-3"
  },
  {
    "id": "gen-97",
    "lessonNumber": 33,
    "lessonTitle": "33. Immunologia - 17.12.25",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "Quale glicoproteina dell'involucro virale di HIV media il legame iniziale ad alta affinità con la molecola CD4 espressa sui linfociti T helper e monociti?",
    "options": [
      "p17",
      "gp41",
      "p24",
      "gp120"
    ],
    "correctIndex": 3,
    "explanation": "La proteina monomerica gp120 si lega al dominio D1 della proteina CD4 cellulare, subendo un cambio conformazionale che espone il sito di legame per i corecettori chemochinici.",
    "clinicalPearl": "gp41 è invece la subunità transmembrana che media la fusione vera e propria della membrana virale con quella cellulare tramite formazione del fascio a sei eliche.",
    "targetSectionId": "sec-33-1"
  },
  {
    "id": "gen-98",
    "lessonNumber": 33,
    "lessonTitle": "33. Immunologia - 17.12.25",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "Quale corecettore per chemochine è utilizzato dai ceppi virali di HIV con tropismo per i macrofagi (ceppi R5) predominanti durante la trasmissione primaria dell'infezione?",
    "options": [
      "CX3CR1",
      "CXCR4",
      "CCR3",
      "CCR5"
    ],
    "correctIndex": 3,
    "explanation": "I ceppi R5 utilizzano CCR5; individui omozigoti per la delezione di 32 paia di basi nel gene CCR5 (CCR5-delta32) non esprimono il recettore e risultano quasi completamente resistenti all'infezione da HIV-1.",
    "clinicalPearl": "Nelle fasi tardive della progressione verso AIDS si verifica spesso uno 'switch di tropismo' verso i ceppi X4 che utilizzano CXCR4, accelerando la deplezione dei T CD4+ naive.",
    "targetSectionId": "sec-33-2"
  },
  {
    "id": "gen-99",
    "lessonNumber": 33,
    "lessonTitle": "33. Immunologia - 17.12.25",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "A quale valore di conta periferica di linfociti T CD4+ per microlitro di sangue si definisce formalmente la transizione clinica alla fase conclamata di AIDS?",
    "options": [
      "Conta di CD4+ inferiore a 50 cellule per microlitro",
      "Conta di CD4+ inferiore a 500 cellule per microlitro",
      "Conta di CD4+ inferiore a 1000 cellule per microlitro",
      "Conta di CD4+ inferiore a 200 cellule per microlitro"
    ],
    "correctIndex": 3,
    "explanation": "Al di sotto di 200 linfociti T CD4+/microlitro (o percentuale < 14%), il sistema immunitario perde il controllo e insorgono infezioni opportunistiche maggiori (Pneumocystis jirovecii, citomegalovirus, toxoplasmosi cerebrale) e neoplasie (Sarcoma di Kaposi).",
    "clinicalPearl": "Parametro laboratoristico cardine costantemente richiesto nei quesiti clinici.",
    "targetSectionId": "sec-33-3"
  },
  {
    "id": "gen-100",
    "lessonNumber": 33,
    "lessonTitle": "33. Immunologia - 17.12.25",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "Quale proteina accessoria di HIV promuove la degradazione proteasomica della proteina cellulare antivirale APOBEC3G tramite reclutamento dell'ubiquitina ligasi culina 5?",
    "options": [
      "Vif (Viral infectivity factor)",
      "Nef",
      "Vpr",
      "Tat"
    ],
    "correctIndex": 0,
    "explanation": "APOBEC3G è una citidina deaminasi cellulare che induce ipermutazioni ipermutando il DNA virale nascente; la proteina virale Vif lega APOBEC3G e ne induce la degradazione proteasomica, consentendo la replicazione virale.",
    "clinicalPearl": "La Prof.ssa Molfetta illustra le proteine accessorie di HIV (Vif, Nef, Vpu) come mirabili esempi di contromisure evolutive virali contro l'immunità intrinseca dell'ospite.",
    "targetSectionId": "sec-33-4"
  },
  {
    "id": "gen-101",
    "lessonNumber": 1,
    "lessonTitle": "01. Immunologia - 01.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale proteina solubile del surfactante polmonare (collectina) lega i residui mannosilati dei patogeni favorendone l'opsonizzazione e clearance alveolare?",
    "options": [
      "SP-A ed SP-D",
      "SP-B ed SP-C",
      "Pentraxina 3 (PTX3)",
      "Proteina C reattiva (CRP)"
    ],
    "correctIndex": 0,
    "explanation": "Le proteine del surfactante SP-A ed SP-D sono collectine con domini lectinici calcio-dipendenti (CRD) che legano carboidrati microbici nei polmoni, promuovendo la fagocitosi da parte dei macrofagi alveolari.",
    "clinicalPearl": "La prof.ssa Galandrini sottolinea il ruolo di SP-A e SP-D nella difesa costitutiva dell'albero respiratorio e come opsonine della risposta innata precoce.",
    "targetSectionId": "sec-1-4"
  },
  {
    "id": "gen-102",
    "lessonNumber": 1,
    "lessonTitle": "01. Immunologia - 01.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale peptide antimicrobico umano appartenente alla famiglia delle catelicidine viene processato proteoliticamente dalla proteasi 3 dei neutrofili per acquisire la sua forma attiva?",
    "options": [
      "Defensina beta 2",
      "Defensina alfa 1",
      "LL-37",
      "Epcidina"
    ],
    "correctIndex": 2,
    "explanation": "La catelicidina umana hCAP18 viene clivata nei granuli secondari dei neutrofili o nei fluidi extracellulari dalla proteinasi 3, liberando il peptide attivo cationico LL-37 ad azione litica.",
    "clinicalPearl": "Oltre all'effetto battericida, LL-37 lega il DNA self rilasciato dalle cellule danneggiate formando complessi che attivano il TLR9 nelle pDC nel lupus e nella psoriasi.",
    "targetSectionId": "sec-1-5"
  },
  {
    "id": "gen-103",
    "lessonNumber": 1,
    "lessonTitle": "01. Immunologia - 01.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale proteina eterodimerica chelante dello zinco e del manganese costituisce fino al 40-50% delle proteine citosoliche solubili dei neutrofili?",
    "options": [
      "Calprotectina (S100A8/S100A9)",
      "Lattoferrina",
      "Mieloperossidasi",
      "Lisozima"
    ],
    "correctIndex": 0,
    "explanation": "La calprotectina è un complesso eterooligomerico di S100A8 e S100A9 che lega bivalente Zn2+ e Mn2+, privando i microbi di cofattori essenziali (immunità nutrizionale).",
    "clinicalPearl": "Il dosaggio della calprotectina fecale è un biomarcatore clinico gold-standard per monitorare l'infiammazione e le recidive nelle IBD (Crohn e rettocolite ulcerosa).",
    "targetSectionId": "sec-1-6"
  },
  {
    "id": "gen-104",
    "lessonNumber": 2,
    "lessonTitle": "02. Immunologia - 02.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale eterodimero recettoriale riconosce specificamente i lipopeptidi diacilati di origine micoplasmatica sulla membrana cellulare?",
    "options": [
      "TLR4/MD-2",
      "TLR2/TLR1",
      "TLR2/TLR6",
      "TLR5 omodimero"
    ],
    "correctIndex": 2,
    "explanation": "L'eterodimero TLR2/TLR6 riconosce lipopeptidi diacilati, mentre TLR2/TLR1 riconosce lipopeptidi triacilati batterici (es. micobatteri), variando la tasca di legame per le catene lipidiche.",
    "clinicalPearl": "La cooperazione differenziale di TLR2 con TLR1 o TLR6 è una classica domanda d'esame sulla plasticità di riconoscimento dei PAMPs lipidici.",
    "targetSectionId": "sec-2-4"
  },
  {
    "id": "gen-105",
    "lessonNumber": 2,
    "lessonTitle": "02. Immunologia - 02.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale recettore endosomiale riconosce dinucleotidi CpG non metilati tipici del DNA batterico e virale?",
    "options": [
      "TLR7",
      "TLR3",
      "TLR9",
      "cGAS"
    ],
    "correctIndex": 2,
    "explanation": "Il TLR9 è localizzato negli endosomi di pDC e cellule B e lega sequenze CpG non metilate, attivando MyD88 ed inducendo massiccia trascrizione di IFN di tipo I e citochine infiammatorie.",
    "clinicalPearl": "Nel lupus eritematoso sistemico (LES), immunocomplessi contenenti DNA self ipometilato internalizzati tramite Fc-gamma-RIIA attivano TLR9 nelle pDC.",
    "targetSectionId": "sec-2-5"
  },
  {
    "id": "gen-106",
    "lessonNumber": 2,
    "lessonTitle": "02. Immunologia - 02.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Attraverso quale adattatore esclusivo il recettore endosomiale TLR3 attiva le chinasi TBK1 ed IKK-epsilon per fosforilare IRF3?",
    "options": [
      "TIRAP (Mal)",
      "MyD88",
      "TRIF (TICAM-1)",
      "TRAM"
    ],
    "correctIndex": 2,
    "explanation": "TLR3 è l'unico TLR interamente indipendente da MyD88; utilizza esclusivamente l'adattatore TRIF per attivare TBK1, inducendo la trascrizione specifica di interferone-beta.",
    "clinicalPearl": "Mutazioni autosomiche dominanti o recessive in TLR3 o TRIF predispongono all'encefalite erpetica severa da HSV-1 nei bambini.",
    "targetSectionId": "sec-2-6"
  },
  {
    "id": "gen-107",
    "lessonNumber": 3,
    "lessonTitle": "03. Immunologia - 06.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale enzima citosolico funge da sensore per il DNA a doppio filamento intracellulare sintetizzando il secondo messaggero 2'3'-cGAMP?",
    "options": [
      "AIM2",
      "STING",
      "cGAS (cyclic GMP-AMP synthase)",
      "DAI"
    ],
    "correctIndex": 2,
    "explanation": "cGAS si lega a dsDNA aberrante nel citosol e catalizza la condensazione di GTP e ATP formando cGAMP non canonico (2'3'-cGAMP), che migra sulla membrana del reticolo legando STING.",
    "clinicalPearl": "La sindrome SAVI (STING-Associated Vasculopathy with onset in Infancy) è una tipica interferonopatia di tipo I da mutazione attivante di STING chiesta dalla Soriani.",
    "targetSectionId": "sec-3-4"
  },
  {
    "id": "gen-108",
    "lessonNumber": 3,
    "lessonTitle": "03. Immunologia - 06.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale motivo strutturale batterico è specificamente riconosciuto dal recettore citoplasmatico NOD2 all'interno degli enterociti?",
    "options": [
      "Acido diaminopimelico (iE-DAP)",
      "Muramil dipeptide (MDP)",
      "Flagellina",
      "Lipopolisaccaride"
    ],
    "correctIndex": 1,
    "explanation": "NOD2 riconosce il muramil dipeptide (derivato sia da batteri Gram-positivi che Gram-negativi), mentre NOD1 riconosce l'acido iE-DAP presente prevalentemente nei Gram-negativi.",
    "clinicalPearl": "Polimorfismi di perdita di funzione nel dominio LRR di NOD2/CARD15 sono fortemente associati a suscettibilità genetica alla Malattia di Crohn ileale.",
    "targetSectionId": "sec-3-5"
  },
  {
    "id": "gen-109",
    "lessonNumber": 3,
    "lessonTitle": "03. Immunologia - 06.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Nelle vie dell'inflammasoma 'non canonico', quale caspasi infiammatoria umana viene direttamente attivata dal legame intracellulare con il lipopolisaccaride (LPS)?",
    "options": [
      "Caspasi-8",
      "Caspasi-1",
      "Caspasi-4 e Caspasi-5",
      "Caspasi-12"
    ],
    "correctIndex": 2,
    "explanation": "Nell'uomo le caspasi-4 e 5 (omologhe della caspasi-11 murina) legano il lipide A dell'LPS citosolico direttamente tramite il loro dominio CARD, clivando la Gasdermina D e innescando piroptosi.",
    "clinicalPearl": "Questo pathway dell'inflammasoma non-canonico è il mediatore biochimico cruciale dello shock settico endotossico fatale da Gram-negativi.",
    "targetSectionId": "sec-3-6"
  },
  {
    "id": "gen-110",
    "lessonNumber": 4,
    "lessonTitle": "04. Immunologia - 08.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale alterazione molecolare a carico della subunità beta2 delle integrine (CD18) causa il Deficit di Adesione Leucocitaria di tipo 1 (LAD-1)?",
    "options": [
      "Mancata espressione o mutazione di CD18 che impedisce l'assemblaggio di LFA-1 e Mac-1",
      "Deficit del trasportatore di fucosio (SLC35C1)",
      "Mutazione della proteina kindlina-3",
      "Assenza di sialil-Lewis X"
    ],
    "correctIndex": 0,
    "explanation": "In LAD-1 le mutazioni nel gene ITGB2 (CD18) impediscono la formazione degli eterodimeri integrinici beta2 (LFA-1/CD11a e Mac-1/CD11b), bloccando l'adesione ferma all'endotelio.",
    "clinicalPearl": "Segni cardinali di LAD-1: ritardata caduta del cordone ombelicale, leucocitosi neutrofila massiva e infezioni batteriche necrotizzanti senza formazione di pus.",
    "targetSectionId": "sec-4-4"
  },
  {
    "id": "gen-111",
    "lessonNumber": 4,
    "lessonTitle": "04. Immunologia - 08.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "In cosa consiste la NETosi dei neutrofili e quale enzima catalizza la deiminazione degli istoni favorendo la decondensazione della cromatina?",
    "options": [
      "PAD4 (Peptidylarginine Deiminase 4)",
      "Mieloperossidasi",
      "Elastasi neutrofila",
      "Caspasi-3"
    ],
    "correctIndex": 0,
    "explanation": "PAD4 catalizza la citrullinazione degli istoni nucleari (H3 e H4), annullando le cariche positive e consentendo alla cromatina di aprirsi ed essere estrusa all'esterno con proteine granulari nei NET.",
    "clinicalPearl": "Gli istoni citrullinati rilasciati nei NET fungono da autoantigeni primari nella patogenesi degli ACPA (anti-citrullinated protein antibodies) dell'artrite reumatoide.",
    "targetSectionId": "sec-4-5"
  },
  {
    "id": "gen-112",
    "lessonNumber": 4,
    "lessonTitle": "04. Immunologia - 08.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale recettore scavenger di classe A espresso sui macrofagi lega lipoproteine acetilate ed ossidate (oxLDL), favorendo la formazione delle 'foam cells' aterosclerotiche?",
    "options": [
      "SR-A1 (CD204)",
      "CD36",
      "MARCO",
      "LOX-1"
    ],
    "correctIndex": 0,
    "explanation": "I recettori SR-A1 e CD36 internalizzano avidamente oxLDL nei macrofagi subendoteliali; a differenza del recettore LDL classico, non sono soggetti a downregulation per feedback, portando alla cellula schiumosa.",
    "clinicalPearl": "I recettori scavenger fungono da anello di congiunzione tra immunità innata, clearance dei detriti cellulari e patogenesi dell'aterosclerosi.",
    "targetSectionId": "sec-4-6"
  },
  {
    "id": "gen-113",
    "lessonNumber": 5,
    "lessonTitle": "05. Immunologia - 09.10.25",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale patologia ematologica clonale acquisita è dovuta a mutazioni somatiche del gene PIGA con conseguente assenza dei regolatori CD55 e CD59?",
    "options": [
      "Sindrome emolitico-uremica atipica",
      "Angioedema ereditario",
      "Emoglobinuria Parossistica Notturna (EPN)",
      "Porpora trombotica trombocitopenica"
    ],
    "correctIndex": 2,
    "explanation": "Il gene PIGA è necessario per la sintesi dell'ancora a glicosilfosfatidilinositolo (GPI); il difetto priva gli eritrociti di CD55 (DAF) e CD59 (MAC-inhibitor), esponendoli alla lisi da MAC.",
    "clinicalPearl": "Il trattamento con Eculizumab (anticorpo monoclonale anti-C5) blocca l'assemblaggio del MAC e arresta l'emolisi intravascolare notturna.",
    "targetSectionId": "sec-5-4"
  },
  {
    "id": "gen-114",
    "lessonNumber": 5,
    "lessonTitle": "05. Immunologia - 09.10.25",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Nel deficit congenito di C1-inibitore (C1-INH), quale mediatore vasoattivo è il diretto responsabile degli episodi ricorrenti di edema laringeo e sottocutaneo nell'angioedema ereditario?",
    "options": [
      "Bradichinina",
      "Istamina",
      "C3a",
      "Leucotriene B4"
    ],
    "correctIndex": 0,
    "explanation": "C1-INH fisiologicamente inattiva anche la callicreina plasmatica e il fattore XIIa; la sua carenza causa un'attivazione incontrollata della callicreina con massiccia liberazione di bradichinina.",
    "clinicalPearl": "L'angioedema ereditario è bradichinina-mediato e NON risponde ad antistaminici o corticosteroidi; si tratta con Icatibant (antagonista B2) o concentrato di C1-INH.",
    "targetSectionId": "sec-5-5"
  },
  {
    "id": "gen-115",
    "lessonNumber": 5,
    "lessonTitle": "05. Immunologia - 09.10.25",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale proteina plasmatica funge da regolatore positivo stabilizzando la C3 convertasi della via alternativa (C3bBb) e prolungandone l'emivita di circa 10 volte?",
    "options": [
      "Properdina (Fattore P)",
      "Fattore H",
      "Fattore B",
      "Vitronectina"
    ],
    "correctIndex": 0,
    "explanation": "La properdina è l'unico regolatore ad azione positiva del complemento; si lega a C3bBb sulle superfici microbiche impedendone la dissociazione rapida mediata da Fattore H e DAF.",
    "clinicalPearl": "Il deficit di properdina (legato all'X) conferisce elevatissima suscettibilità a infezioni invasive fulminanti da Neisseria meningitidis.",
    "targetSectionId": "sec-5-6"
  },
  {
    "id": "gen-116",
    "lessonNumber": 6,
    "lessonTitle": "06. Immunologia - 13.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale ligando glucidico solfatato espresso sulle venule ad endotelio alto (HEV) dei linfonodi viene riconosciuto dalla L-selectina (CD62L) per il rotolamento (rolling)?",
    "options": [
      "ICAM-1",
      "GlyCAM-1 e CD34 (che espongono sialil-Lewis X solfatato)",
      "VCAM-1",
      "MAdCAM-1 privo di carboidrati"
    ],
    "correctIndex": 1,
    "explanation": "La L-selectina sui T naive riconosce residui glucidici specifici chiamati PNAd (Peripheral Node Addressin), presenti su GlyCAM-1 e CD34 delle HEV.",
    "clinicalPearl": "Il clivaggio proteolitico della L-selectina (shedding) avviene rapidamente dopo l'attivazione del linfocita T per consentirgli di abbandonare il ricircolo linfonodale.",
    "targetSectionId": "sec-6-4"
  },
  {
    "id": "gen-117",
    "lessonNumber": 6,
    "lessonTitle": "06. Immunologia - 13.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale chemochina e recettore controllano l'uscita (egresso) dei linfociti T maturi dai linfonodi verso la circolazione sistemica mediante antagonismo con CD69?",
    "options": [
      "CXCR4 e CXCL12",
      "CCR7 e CCL19",
      "Recettore per la sfingosina-1-fosfato 1 (S1PR1) e ligando S1P",
      "CCR5 e CCL5"
    ],
    "correctIndex": 2,
    "explanation": "Il gradiente di S1P (alto nel sangue e linfa, basso nel parenchima linfonodale) attrae i T esprimenti S1PR1; l'attivazione induce precocemente CD69 che internalizza S1PR1 trattenendo il T nel linfonodo.",
    "clinicalPearl": "Il farmaco Fingolimod (FTY720) è un modulatore di S1PR1 che ne induce l'internalizzazione irreversibile, sequestrando i linfociti autoreattivi nei linfonodi nella Sclerosi Multipla.",
    "targetSectionId": "sec-6-5"
  },
  {
    "id": "gen-118",
    "lessonNumber": 6,
    "lessonTitle": "06. Immunologia - 13.10.25",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale struttura anatomica della polpa bianca splenica circonda direttamente le arteriole centrali ed ospita prevalentemente linfociti T?",
    "options": [
      "Cordoni splenici di Billroth",
      "Follicolo linfoide primario",
      "Seno marginale",
      "Guaina linfoide periarteriolare (PALS)"
    ],
    "correctIndex": 3,
    "explanation": "La PALS (Periarteriolar Lymphoid Sheath) costituisce la zona T-dipendente della polpa bianca della milza, circondata lateralmente dai follicoli B e dalla zona marginale.",
    "clinicalPearl": "I pazienti splenectomizzati perdono la barriera di filtraggio ematico e le cellule B marginali, necessitando di vaccinazione tempestiva contro batteri capsulati (pneumococco, meningococco, emofilo).",
    "targetSectionId": "sec-6-6"
  },
  {
    "id": "gen-119",
    "lessonNumber": 7,
    "lessonTitle": "07. Immunologia - 15.10.25",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale recettore tirosina chinasico espresso sui progenitori pro-B lega il fattore delle cellule staminali (SCF) ancorato alla membrana delle cellule stromali del midollo osseo?",
    "options": [
      "CD19",
      "FLT3 (CD135)",
      "IL-7R (CD127)",
      "c-Kit (CD117)"
    ],
    "correctIndex": 3,
    "explanation": "L'interazione tra c-Kit sul pro-B e SCF (Stem Cell Factor) stromale fornisce i segnali iniziali di sopravvivenza e proliferazione prima che intervenga la segnalazione di IL-7.",
    "clinicalPearl": "La perdita dell'espressione di c-Kit coincide fisiologicamente con la progressione maturativa verso lo stadio di pre-B grande.",
    "targetSectionId": "sec-7-4"
  },
  {
    "id": "gen-120",
    "lessonNumber": 7,
    "lessonTitle": "07. Immunologia - 15.10.25",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale fattore di trascrizione è indispensabile per la specificazione irreversibile del lignaggio linfoide B tramite l'induzione di CD19, Ig-alfa e del fattore EBF1?",
    "options": [
      "Notch-1",
      "Pax-5",
      "GATA-3",
      "Bcl-6"
    ],
    "correctIndex": 1,
    "explanation": "Pax-5 è il 'commitment factor' della linea B: reprime la trascrizione di geni specifici mieloidi e T e attiva i geni strutturali fondamentali del BCR e dei suoi correttori.",
    "clinicalPearl": "In assenza di Pax-5, i progenitori pro-B mantengono pluripotenza e possono differenziare in linfociti T, macrofagi o cellule NK.",
    "targetSectionId": "sec-7-5"
  },
  {
    "id": "gen-121",
    "lessonNumber": 7,
    "lessonTitle": "07. Immunologia - 15.10.25",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Cosa si intende per 'esclusione allelica' durante il riarrangiamento della catena pesante delle immunoglobuline?",
    "options": [
      "La soppressione della catena leggera lambda a favore di kappa",
      "L'inattivazione casuale del cromosoma X materno o paterno",
      "Il riarrangiamento produttivo su un cromosoma blocca la ricombinazione sull'altro omologo, assicurando la monospecificità del BCR",
      "L'eliminazione dei geni V non utilizzati tramite metilazione"
    ],
    "correctIndex": 2,
    "explanation": "Il segnale inviato dal pre-BCR (catena mu + surrogata) induce l'ubiquitinazione e degradazione di RAG2 e la decondensazione eterocromatinica del secondo allele Igh, prevenendo un doppio BCR.",
    "clinicalPearl": "L'esclusione allelica garantisce che ogni singolo linfocita B esprima anticorpi diretti contro un unico determinante antigenico (postulato di Burnet).",
    "targetSectionId": "sec-7-6"
  },
  {
    "id": "gen-122",
    "lessonNumber": 8,
    "lessonTitle": "08. Immunologia - 16.10.25",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Come si originano i nucleotidi P (palindromici) durante la ricombinazione somatica V(D)J?",
    "options": [
      "Dall'aggiunta template-indipendente da parte della TdT",
      "Dal taglio asimmetrico delle forcine (hairpins) di DNA ad opera dell'endonucleasi Artemis",
      "Dall'attività esonucleasica di RAG1",
      "Da errori della DNA polimerasi mu e lambda"
    ],
    "correctIndex": 1,
    "explanation": "Artemis cliva la forcina in posizione asimmetrica; il riempimento dei nucleotidi a singolo filamento per complementarità genera brevi sequenze invertite palindrome (nucleotidi P).",
    "clinicalPearl": "I nucleotidi P, insieme ai nucleotidi N della TdT, creano l'infinita variabilità giunzionale della regione ipervariabile CDR3.",
    "targetSectionId": "sec-8-4"
  },
  {
    "id": "gen-123",
    "lessonNumber": 8,
    "lessonTitle": "08. Immunologia - 16.10.25",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale proteina del macchinario Non-Homologous End Joining (NHEJ) forma un eterodimero ad anello che si lega per primo e stabilizza le estremità di DNA a doppio filamento rotte da RAG?",
    "options": [
      "Cernunnos (XLF)",
      "DNA Ligasi IV",
      "XRCC4",
      "Ku70 / Ku80"
    ],
    "correctIndex": 3,
    "explanation": "L'eterodimero Ku70/Ku80 scivola sulle estremità del DNA a doppio filamento, proteggendole da nucleasi aspecifiche e reclutando la subunità catalitica DNA-PKcs.",
    "clinicalPearl": "A differenza di RAG e TdT (esclusivi dei linfociti), i fattori NHEJ (Ku, DNA-PKcs, Artemis, XRCC4, Ligasi IV) sono ubiquitari e riparano le rotture da radiazioni ionizzanti.",
    "targetSectionId": "sec-8-5"
  },
  {
    "id": "gen-124",
    "lessonNumber": 8,
    "lessonTitle": "08. Immunologia - 16.10.25",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "In quale fase del ciclo cellulare viene specificamente degradata la proteina RAG2 mediante fosforilazione mediata da chinasi ciclina-dipendenti (CDK)?",
    "options": [
      "Fase G1 precoce",
      "Fase G0",
      "Fase S ed entrata in M (mitosi)",
      "Solo durante l'apoptosi"
    ],
    "correctIndex": 2,
    "explanation": "RAG2 è degradata all'inizio della fase S per prevenire rotture aberranti del genoma durante la replicazione del DNA cromosomico, limitando la ricombinazione alla fase G0/G1.",
    "clinicalPearl": "La disregolazione di questo controllo temporale è causa primaria di traslocazioni oncogeniche (es. t(14;18) BCL2-IgH nel linfoma follicolare).",
    "targetSectionId": "sec-8-6"
  },
  {
    "id": "gen-125",
    "lessonNumber": 9,
    "lessonTitle": "09. Immunologia - 20.10.2025",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Molfetta",
    "question": "Quale dominio immunoglobulinico della molecola MHC di classe I interagisce direttamente e selettivamente con il corecettore CD8 dei linfociti T citotossici?",
    "options": [
      "Beta2-microglobulina",
      "Dominio Alfa1",
      "Dominio Alfa2",
      "Dominio Alfa3"
    ],
    "correctIndex": 3,
    "explanation": "Il dominio alfa3 è una regione conservata monomorfa che contiene l'ansa di legame per il corecettore CD8 (catene alfa/beta), assicurando la restrizione per la classe I.",
    "clinicalPearl": "Simmetricamente, il corecettore CD4 si lega ai domini non polimorfici conservati alfa2 e beta2 dell'MHC di classe II.",
    "targetSectionId": "sec-9-4"
  },
  {
    "id": "gen-126",
    "lessonNumber": 9,
    "lessonTitle": "09. Immunologia - 20.10.2025",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Molfetta",
    "question": "Cosa si intende per 'linkage disequilibrium' (squilibrio di associazione) nella genetica del locus HLA umano?",
    "options": [
      "Il polimorfismo limitato alla tasca peptidica",
      "La mutazione casuale durante il crossing-over meiotico",
      "La mancata espressione di un allele materno o paterno",
      "La frequenza con cui determinati alleli di loci distinti si ritrovano associati sullo stesso cromosoma è significativamente maggiore di quella attesa dal caso"
    ],
    "correctIndex": 3,
    "explanation": "A causa dell'estrema vicinanza fisica sul cromosoma 6, specifici blocchi aplotipici (es. HLA-A1, B8, DR3) vengono co-ereditati intatti come aplotipi ancestrali conservati.",
    "clinicalPearl": "Lo squilibrio di associazione rende fondamentale la tipizzazione dell'aplotipo completo nei trapianti di midollo osseo tra non consanguinei.",
    "targetSectionId": "sec-9-5"
  },
  {
    "id": "gen-127",
    "lessonNumber": 9,
    "lessonTitle": "09. Immunologia - 20.10.2025",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Molfetta",
    "question": "Quale tra le seguenti molecole appartiene alle molecole HLA di classe Ib non classiche ed è caratterizzata da minimo polimorfismo e tessuto-distribuzione ristretta al trofoblasto placentare?",
    "options": [
      "HLA-DP",
      "HLA-A",
      "HLA-G",
      "HLA-DRB1"
    ],
    "correctIndex": 2,
    "explanation": "HLA-G è espressa dal trofoblasto extravilloso ed interagisce con i recettori inibitori ILT2/ILT4 e KIR2DL4 delle cellule dNK materne, proteggendo il feto dal rigetto allogenico materno.",
    "clinicalPearl": "La prof.ssa Molfetta richiede la triade delle classi Ib: HLA-E (lega peptidi leader per CD94/NKG2A), HLA-F e HLA-G (tolleranza materno-fetale).",
    "targetSectionId": "sec-9-6"
  },
  {
    "id": "gen-128",
    "lessonNumber": 10,
    "lessonTitle": "10. Immunologia - 22.10.2025",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Molfetta",
    "question": "Quale proteina virale del virus Herpes Simplex (HSV) blocca selettivamente il trasportatore TAP legandosi al versante citosolico ed inibendo l'idrolisi di ATP?",
    "options": [
      "EBNA-1 (da EBV)",
      "US6 (da Citomegalovirus)",
      "Tat",
      "ICP47"
    ],
    "correctIndex": 3,
    "explanation": "ICP47 di HSV si inserisce nel canale di TAP dal lato citoplasmatico ad alta affinità, bloccando l'ingresso dei peptidi antigenici nel reticolo e l'assemblaggio di MHC-I.",
    "clinicalPearl": "Le strategie immunoevasive virali su TAP (ICP47 di HSV, US6 di CMV che blocca il lato luminale) sono frequentemente chieste dalla Molfetta.",
    "targetSectionId": "sec-10-4"
  },
  {
    "id": "gen-129",
    "lessonNumber": 10,
    "lessonTitle": "10. Immunologia - 22.10.2025",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Molfetta",
    "question": "Quale proteasi acida endosomiale della famiglia delle catepsine è essenziale nelle cellule dendritiche e nei macrofagi per la digestione proteolitica della catena invariante CD74 a CLIP?",
    "options": [
      "Caspasi-1",
      "Catepsina L",
      "Granzima B",
      "Catepsina S"
    ],
    "correctIndex": 3,
    "explanation": "La catepsina S è l'enzima chiave nelle DC, macrofagi e cellule B per clivare il frammento leupeptina-sensibile (LIP10) di CD74 lasciando il solo CLIP; nei timociti corticali interviene invece la catepsina L.",
    "clinicalPearl": "Inibitori farmacologici della catepsina S bloccano la presentazione su MHC-II e sono studiati come immunosoppressori specifici per malattie autoimmuni.",
    "targetSectionId": "sec-10-5"
  },
  {
    "id": "gen-130",
    "lessonNumber": 10,
    "lessonTitle": "10. Immunologia - 22.10.2025",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Molfetta",
    "question": "Quale via alternativa permette la presentazione di antigeni citosolici virali su molecole MHC di classe II per attivare linfociti T CD4+?",
    "options": [
      "Trasporto inverso via TAP",
      "Cross-presentazione proteasoma-dipendente",
      "Macroautofagia con fusione degli autofagosomi al compartimento MIIC",
      "Esolisi lisosomiale"
    ],
    "correctIndex": 2,
    "explanation": "Attraverso l'autofagia, porzioni di citoplasma e proteine intracellulari vengono inglobate in autofagosomi a doppia membrana che si fondono con i lisosomi contenenti MHC-II.",
    "clinicalPearl": "L'autofagia basale nelle mTEC timiche è cruciale per la selezione negativa dei linfociti T CD4+ specifici per autoantigeni intracellulari.",
    "targetSectionId": "sec-10-6"
  },
  {
    "id": "gen-131",
    "lessonNumber": 11,
    "lessonTitle": "11. Immunologia - 23.10.2025 docx",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Secondo il modello dell'avocazione dell'intensità del segnale (affinity threshold hypothesis), quale destino subisce un timocita doppio positivo il cui TCR lega con avidità eccessivamente elevata il complesso MHC/self?",
    "options": [
      "Apoptosi per delezione clonale (selezione negativa)",
      "Sopravvivenza e maturazione in singolo positivo (selezione positiva)",
      "Morte per incuria (mancanza di segnale)",
      "Differenziamento in cellula B midollare"
    ],
    "correctIndex": 0,
    "explanation": "L'ipotesi della forza del segnale prevede: nessun legame = morte per incuria; legame a bassa/moderata affinità = selezione positiva; legame ad alta avidità = segnale apoptotico mediato da Bim (selezione negativa).",
    "clinicalPearl": "La proteina pro-apoptotica BH3-only Bim è il mediatore biochimico intracellulare essenziale della selezione negativa timica.",
    "targetSectionId": "sec-11-4"
  },
  {
    "id": "gen-132",
    "lessonNumber": 11,
    "lessonTitle": "11. Immunologia - 23.10.2025 docx",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale fattore di trascrizione master dirige il lineage commitment verso il destino di linfocita T singolo positivo CD4+ reprimendo la trascrizione del gene CD8?",
    "options": [
      "ThPOK (Zbtb7b)",
      "Runx3",
      "GATA-3",
      "T-bet"
    ],
    "correctIndex": 0,
    "explanation": "Un segnale TCR prolungato attiva ThPOK, che reprime Runx3 e impone il differenziamento a CD4+; un segnale breve/interrotto permette l'espressione di Runx3, che spegne CD4 ed induce il programma CD8+.",
    "clinicalPearl": "La prof.ssa Galandrini sottolinea il cross-antagonismo tra ThPOK (CD4) e Runx3 (CD8) nella decisione fenotipica timica terminale.",
    "targetSectionId": "sec-11-5"
  },
  {
    "id": "gen-133",
    "lessonNumber": 11,
    "lessonTitle": "11. Immunologia - 23.10.2025 docx",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Cosa caratterizza i linfociti T gamma-delta rispetto ai convenzionali linfociti T alfa-beta durante lo sviluppo timico?",
    "options": [
      "Non richiedono la selezione positiva corticale mediata da MHC classico e mostrano tropismo per gli epiteli mucosi e cutanei",
      "Esprimono solo CD4 o CD8 ad alta intensità",
      "Hanno un repertorio V(D)J infinitamente più diversificato",
      "Richiedono AIRE per la loro maturazione"
    ],
    "correctIndex": 0,
    "explanation": "I linfociti T gamma-delta emergono precocemente allo stadio DN2/DN3; non sono ristretti per MHC classico (possono riconoscere fosfoantigeni o CD1) e colonizzano le barriere epiteliali come IEL.",
    "clinicalPearl": "I T gamma-delta fungono da ponte tra immunità innata ed adattativa, rispondendo rapidamente senza espansione clonale prolungata.",
    "targetSectionId": "sec-11-6"
  },
  {
    "id": "gen-134",
    "lessonNumber": 12,
    "lessonTitle": "12. Immunologia - 27.10.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale tirosina chinasi della famiglia Src è constitutivamente associata alle code citoplasmatiche dei corecettori CD4 e CD8 ed avvia la fosforilazione degli ITAM di CD3?",
    "options": [
      "Fyn",
      "Lck",
      "ZAP-70",
      "Syk"
    ],
    "correctIndex": 1,
    "explanation": "Lck è ancorata al motivo citoplasmatico ricco in cisteine di CD4 e CD8; quando il corecettore ingaggia l'MHC, Lck viene posizionata vicino agli ITAM di CD3-zeta fosforilandoli rapidamente.",
    "clinicalPearl": "L'attivazione di Lck richiede la defosforilazione della sua tirosina inibitoria terminale (Tyr505) ad opera della fosfatasi transmembrana CD45.",
    "targetSectionId": "sec-12-4"
  },
  {
    "id": "gen-135",
    "lessonNumber": 12,
    "lessonTitle": "12. Immunologia - 27.10.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale conformazione tridimensionale assume l'omodimero zeta-zeta del complesso CD3 nella membrana plasmatica?",
    "options": [
      "Un dominio di ancoraggio GPI",
      "Un dominio immunoglobulinico extracellulare V-like",
      "Due domini lectinici transmembrana",
      "Un piccolo dominio extracellulare di soli 9 aminoacidi unito a una lunga coda citoplasmatica contenente 3 motivi ITAM per catena"
    ],
    "correctIndex": 3,
    "explanation": "Le catene zeta possiedono un ectodominio cortissimo legato da un ponte disolfuro e una lunghissima estensione citosolica contenente 3 ITAM ciascuna (6 ITAM totali nell'omodimero).",
    "clinicalPearl": "Le catene zeta sono condivise anche dal recettore CD16 delle cellule NK e dal recettore Fc-epsilon-RI.",
    "targetSectionId": "sec-12-5"
  },
  {
    "id": "gen-136",
    "lessonNumber": 12,
    "lessonTitle": "12. Immunologia - 27.10.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale fenomeno biofisico descrive il modello di segregazione cinetica che favorisce l'attivazione del TCR nella sinapsi immunologica?",
    "options": [
      "L'avvicinamento stretto delle membrane (15 nm) esclude fisicamente dal c-SMAC le grandi fosfatasi come CD45 consentendo alla chinasi Lck di prevalere",
      "Il trasporto attivo di ATP nella fessura sinaptica",
      "La fagocitosi selettiva dell'MHC",
      "La polarizzazione dei microtubuli verso l'opposto della cellula"
    ],
    "correctIndex": 0,
    "explanation": "L'interazione TCR-MHC genera uno spazio intermembrana di soli 15 nm; CD45 possiede un ectodominio ingombrante (> 40 nm) e viene fisicamente estromessa, impedendo che defosforili gli ITAM attivi.",
    "clinicalPearl": "Il modello della segregazione cinetica di van der Merwe e Davis è un cavallo di battaglia accademico spiegato nel dettaglio dalla Prof.ssa Galandrini.",
    "targetSectionId": "sec-12-6"
  },
  {
    "id": "gen-137",
    "lessonNumber": 13,
    "lessonTitle": "13. Immunologia - 29.10.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale fosfolipide di membrana viene scisso dalla fosfolipasi C-gamma-1 (PLC-gamma-1) per generare inositolo 1,4,5-trisfosfato (IP3) e diacilglicerolo (DAG)?",
    "options": [
      "Fosfatidilinositolo 4,5-bisfosfato (PIP2)",
      "Fosfatidilcolina",
      "Fosfatidilserina",
      "Fosfatidilinositolo 3,4,5-trisfosfato (PIP3)"
    ],
    "correctIndex": 0,
    "explanation": "La PLC-gamma-1 attivata idrolizza specificamente il legame fosfodiesterico di PIP2 generando il messaggero solubile IP3 e il lipide di membrana DAG.",
    "clinicalPearl": "IP3 diffonde verso i recettori IP3R del reticolo endoplasmatico liberando calcio, mentre DAG ancora ed attiva PKC-theta e RasGRP.",
    "targetSectionId": "sec-13-4"
  },
  {
    "id": "gen-138",
    "lessonNumber": 13,
    "lessonTitle": "13. Immunologia - 29.10.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale canale del calcio di membrana attiva l'ingresso sostenuto di calcio extracellulare (SOCE) in seguito allo svuotamento dei depositi reticolari rilevato da STIM1?",
    "options": [
      "ORAI1 (CRAC channel)",
      "TRPV1",
      "Canale del calcio di tipo L",
      "Canale del sodio voltaggio-dipendente"
    ],
    "correctIndex": 0,
    "explanation": "STIM1 percepisce il calo di Ca2+ nel lume del RE, oligomerizza e migra vicino alla membrana plasmatica agganciando il canale ORAI1/CRAC, aprendolo.",
    "clinicalPearl": "Mutazioni in ORAI1 o STIM1 causano una grave immunodeficienza con assenza di funzione NFAT, associata a disfunzione muscolare e amelogenesi imperfetta.",
    "targetSectionId": "sec-13-5"
  },
  {
    "id": "gen-139",
    "lessonNumber": 13,
    "lessonTitle": "13. Immunologia - 29.10.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale fattore di scambio nucleotidico (GEF) attivato direttamente da DAG attiva la piccola GTPasi Ras nella cascata delle MAP chinasi nei linfociti T?",
    "options": [
      "SOS",
      "RasGRP1",
      "Vav1",
      "Rac1"
    ],
    "correctIndex": 1,
    "explanation": "RasGRP1 possiede un dominio C1 di legame per il DAG; una volta reclutato in membrana converte Ras-GDP nella forma attiva Ras-GTP, innescando la via Raf-MEK-ERK.",
    "clinicalPearl": "L'attivazione di ERK porta alla trascrizione del gene c-Fos, che si eterodimerizza con c-Jun forming il fattore trascrizionale AP-1.",
    "targetSectionId": "sec-13-6"
  },
  {
    "id": "gen-140",
    "lessonNumber": 14,
    "lessonTitle": "14. Immunologia - 30.10.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "In che modo l'interazione CD28-B7 promuove la sopravvivenza clonale dei linfociti T a livello biochimico?",
    "options": [
      "Recluta la PI3K inducendo Akt che up-regola la proteina anti-apoptotica Bcl-xL e stabilizza l'mRNA di IL-2",
      "Attiva la caspasi-8",
      "Defosforila ZAP-70",
      "Blocca la trascrizione di c-Myc"
    ],
    "correctIndex": 0,
    "explanation": "CD28 contiene il motivo fosforilabile YMNM che lega la subunità p85 di PI3K; Akt fosforila Bad inattivandolo e aumenta drasticamente l'emivita del trascritto di IL-2.",
    "clinicalPearl": "Senza costimolazione CD28, il segnale del solo TCR induce uno squilibrio metabolico con attivazione incompleta e anergia.",
    "targetSectionId": "sec-14-4"
  },
  {
    "id": "gen-141",
    "lessonNumber": 14,
    "lessonTitle": "14. Immunologia - 30.10.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Galandrini",
    "question": "Quale anticorpo monoclonale umano anti-CTLA-4 è stato il capostipite storico degli inibitori dei checkpoint immunologici approvato nel melanoma metastatico?",
    "options": [
      "Atezolizumab",
      "Nivolumab",
      "Pembrolizumab",
      "Ipilimumab"
    ],
    "correctIndex": 3,
    "explanation": "Ipilimumab blocca il checkpoint CTLA-4 nei linfonodi drenanti, permettendo l'attivazione prolungata dei cloni T antitumorali ad opera delle molecole B7 delle APC.",
    "clinicalPearl": "La Prof.ssa Galandrini sottolinea la differenza anatomica: CTLA-4 agisce prevalentemente durante il priming linfonodale, mentre PD-1 agisce nei tessuti periferici e nel tumore.",
    "targetSectionId": "sec-14-5"
  },
  {
    "id": "gen-142",
    "lessonNumber": 14,
    "lessonTitle": "14. Immunologia - 30.10.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale proteina ligasi E3 citosolica è responsabile dell'ubiquitinazione e degradazione di CD3-zeta e ZAP-70 nello stato di anergia cellulare T?",
    "options": [
      "Cbl-b",
      "GRAIL",
      "Itch",
      "MDM2"
    ],
    "correctIndex": 0,
    "explanation": "Nelle cellule T anergiche, l'assenza di costimolazione induce elevati livelli di Cbl-b, che ubiquitina i componenti della trasduzione prossimale portandoli a degradazione nei lisosomi.",
    "clinicalPearl": "I topi knockout per Cbl-b sviluppano sindromi autoimmuni multiorgano spontanee per incapacità di indurre anergia periferica.",
    "targetSectionId": "sec-14-6"
  },
  {
    "id": "gen-143",
    "lessonNumber": 15,
    "lessonTitle": "15. Immunologia - 3.11.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Soriani",
    "question": "Quale citochina effettrice caratteristica dei Th1 attiva la produzione di ossido nitrico (iNOS) e specie reattive dell'ossigeno nei macrofagi (attivazione classica M1)?",
    "options": [
      "Interleuchina-17",
      "Interleuchina-4",
      "Interferone-gamma (IFN-gamma)",
      "Interleuchina-10"
    ],
    "correctIndex": 2,
    "explanation": "L'IFN-gamma secreto dai Th1 sinergizza con l'ingaggio di CD40 per indurre nei macrofagi la trascrizione di iNOS (NOS2) e NADPH ossidasi per distruggere batteri intracellulari.",
    "clinicalPearl": "Il difetto dell'asse IFN-gamma/IL-12 espone a infezioni disseminate fatali da micobatteri non tubercolari e salmonelle.",
    "targetSectionId": "sec-15-4"
  },
  {
    "id": "gen-144",
    "lessonNumber": 15,
    "lessonTitle": "15. Immunologia - 3.11.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Soriani",
    "question": "Quale interleuchina secreta dai linfociti Th2 è il fattore di crescita, sopravvivenza ed attivazione primario per gli eosinofili?",
    "options": [
      "Interleuchina-4",
      "Interleuchina-5 (IL-5)",
      "Interleuchina-13",
      "Interleuchina-9"
    ],
    "correctIndex": 1,
    "explanation": "IL-5 stimola l'ematopoiesi eosinofila nel midollo osseo, la loro migrazione tessutale e la degranulazione contro gli elminti parassiti.",
    "clinicalPearl": "Farmaci monoclonali biologici anti-IL-5 (Mepolizumab, Reslizumab) o anti-IL-5R (Benralizumab) sono indicati nell'asma grave eosinofilico non controllato.",
    "targetSectionId": "sec-15-5"
  },
  {
    "id": "gen-145",
    "lessonNumber": 15,
    "lessonTitle": "15. Immunologia - 3.11.2025",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Soriani",
    "question": "Quale citochina della famiglia dell'IL-10 è prodotta dai Th17 e stimola le cellule epiteliali cutanee e mucosali a produrre peptidi antimicrobici e rigenerare la barriera?",
    "options": [
      "Interleuchina-21",
      "Interleuchina-17A",
      "Interleuchina-22 (IL-22)",
      "Interleuchina-26"
    ],
    "correctIndex": 2,
    "explanation": "IL-22 agisce esclusivamente sulle cellule epiteliali e stromali (esprimenti IL-22R1), inducendo proliferazione cellulare, defensine e riparo tessutale.",
    "clinicalPearl": "La cooperazione coordinata tra IL-17 (reclutamento neutrofili) e IL-22 (rinforzo epiteliale) protegge le mucose da infezioni fungine da Candida albicans.",
    "targetSectionId": "sec-15-6"
  },
  {
    "id": "gen-146",
    "lessonNumber": 16,
    "lessonTitle": "16. Immunologia - 5.11.2025",
    "topicCategory": "Tolleranza, Autoimmunità & Immunopatologia",
    "professor": "Soriani",
    "question": "Quale recettore inibitorio constitutivamente espresso ad alti livelli sui Treg lega B7-1 e B7-2 sulle APC 'strappandoli' mediante trans-endocitosi?",
    "options": [
      "PD-1",
      "CTLA-4",
      "GITR",
      "TIGIT"
    ],
    "correctIndex": 1,
    "explanation": "I Treg esprimono CTLA-4 continuo indotto da FoxP3; CTLA-4 cattura CD80 e CD86 dalle DC portandoli all'interno del Treg per degradazione lisosomiale, privando i T naive di costimolazione.",
    "clinicalPearl": "La deplezione selettiva di CTLA-4 nei soli linfociti Treg causa malattia autoimmune sistemica letale sovrapponibile a IPEX.",
    "targetSectionId": "sec-16-4"
  },
  {
    "id": "gen-147",
    "lessonNumber": 16,
    "lessonTitle": "16. Immunologia - 5.11.2025",
    "topicCategory": "Tolleranza, Autoimmunità & Immunopatologia",
    "professor": "Soriani",
    "question": "Quale citochina immunosoppressiva dimerica sintetizzata dai Treg in forma latente associata a LAP (Latency-Associated Peptide) inibisce la proliferazione dei T ed induce switch ad IgA?",
    "options": [
      "TGF-beta1",
      "IL-10",
      "IL-35",
      "IL-27"
    ],
    "correctIndex": 0,
    "explanation": "TGF-beta viene secreto come pro-complesso inattivo con LAP; viene attivato dall'integrina alfaV-beta8 delle DC o plasmina, legando i recettori TGFBR1/2 e fosforilando Smad2 e Smad3.",
    "clinicalPearl": "Topi privi di TGF-beta1 muoiono a 3-4 settimane di vita per massiva infiltrazione linfomonocitaria infiammatoria in tutti gli organi vitali.",
    "targetSectionId": "sec-16-5"
  },
  {
    "id": "gen-148",
    "lessonNumber": 16,
    "lessonTitle": "16. Immunologia - 5.11.2025",
    "topicCategory": "Tolleranza, Autoimmunità & Immunopatologia",
    "professor": "Soriani",
    "question": "Come differiscono i linfociti Treg naturali timici (tTreg) dai Treg indotti periferici (pTreg) a livello epigenetico?",
    "options": [
      "I pTreg non esprimono CD25",
      "I tTreg possiedono la regione regolatoria CNS2 del locus FoxP3 completamente demetilata, garantendo un'espressione stabile per tutta la vita",
      "I tTreg sono privi di TCR funzionale",
      "I pTreg riconoscono solo antigeni lipidici"
    ],
    "correctIndex": 1,
    "explanation": "La demetilazione dell'elemento enhancer CNS2 (Treg-specific demethylated region, TSDR) è esclusiva dei tTreg; nei pTreg la metilazione parziale conferisce plasticità e potenziale instabilità.",
    "clinicalPearl": "Il marcatore neuropilina-1 (Nrp-1) ed Helios consentono di distinguere i tTreg (Nrp1+/Helios+) dai pTreg mucosali (spesso Nrp1-).",
    "targetSectionId": "sec-16-6"
  },
  {
    "id": "gen-149",
    "lessonNumber": 17,
    "lessonTitle": "17. Immunologia - 6.11.2025",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale proteoglicano a catene di condroitin solfato solfato presente nella matrice interna dei granuli litici mantiene complessati la perforina e i granzimi a pH acido prevenendone l'autodigestione?",
    "options": [
      "Aggrecano",
      "Serglicina",
      "Decorina",
      "Perlecano"
    ],
    "correctIndex": 1,
    "explanation": "La serglicina è un proteoglicano fortemente polianionico che fa da scaffold ai granuli secretori, sequestrando perforina e granzimi carichi positivamente a pH 5.5.",
    "clinicalPearl": "Quando il contenuto del granulo viene esocitato nella sinapsi litica a pH 7.4 e in presenza di ioni Ca2+, la perforina si dissocia dalla serglicina e polimerizza.",
    "targetSectionId": "sec-17-4"
  },
  {
    "id": "gen-150",
    "lessonNumber": 17,
    "lessonTitle": "17. Immunologia - 6.11.2025",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale proteasi granulare specifica dei CTL lisa direttamente la parete di batteri intracellulari quali Mycobacterium tuberculosis formando canali ionici nella membrana lipidica batterica?",
    "options": [
      "Granulisina",
      "Granzima A",
      "Granzima K",
      "Perforina"
    ],
    "correctIndex": 0,
    "explanation": "La granulisina è una proteina saposina-like antimicrobica che distrugge la parete lipidica microbica ricca in acidi micolici; la perforina permette il suo ingresso nella cellula ospite.",
    "clinicalPearl": "La Prof.ssa Galandrini sottolinea come l'azione combinata di perforina e granulisina permetta ai CTL di eliminare non solo la cellula infettata ma anche il batterio vitale intracellulare.",
    "targetSectionId": "sec-17-5"
  },
  {
    "id": "gen-151",
    "lessonNumber": 17,
    "lessonTitle": "17. Immunologia - 6.11.2025",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Nella degranulazione citotossica, quale marcatore di membrana dei granuli lisosomiali (LAMP-1) viene esposto sulla superficie cellulare e funge da test diagnostico di degranulazione?",
    "options": [
      "CD25",
      "CD69",
      "CD107a",
      "CD45RA"
    ],
    "correctIndex": 2,
    "explanation": "CD107a (LAMP-1) riveste la membrana interna del granulo citotossico; quando il granulo si fonde con la membrana plasmatica, l'epitopo luminale di CD107a sporge all'esterno.",
    "clinicalPearl": "La citofluorimetria per CD107a è il saggio gold standard laboratoristico per valutare la citotossicità funzionale di CTL ed NK in pazienti sospetti per FHL.",
    "targetSectionId": "sec-17-6"
  },
  {
    "id": "gen-152",
    "lessonNumber": 18,
    "lessonTitle": "18. Immunologia - 10.11.2025",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale proteina adattatrice transmembrana contenente domini ITAM citoplasmatici si associa con il recettore naturale di citotossicità NKp46 (NCR1)?",
    "options": [
      "TRIF",
      "DAP10",
      "MyD88",
      "CD3-zeta o catena Fc-epsilon-RI-gamma"
    ],
    "correctIndex": 3,
    "explanation": "NKp46 possiede un residuo di arginina nel segmento transmembrana che ancora covalentemente le catene CD3-zeta o Fc-epsilon-RI-gamma, reclutando le chinasi ZAP-70 o Syk.",
    "clinicalPearl": "Al contrario, NKG2D nell'uomo si associa esclusivamente a DAP10, che contiene il motivo YINM attivando la PI3K e non le chinasi ITAM classiche.",
    "targetSectionId": "sec-18-4"
  },
  {
    "id": "gen-153",
    "lessonNumber": 18,
    "lessonTitle": "18. Immunologia - 10.11.2025",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale citochina infiammatoria è il più potente induttore dell'espressione transitoria del recettore attivatorio NKp44 sulle cellule NK?",
    "options": [
      "Interleuchina-4",
      "Interleuchina-10",
      "TGF-beta",
      "Interleuchina-2 (IL-2) o Interleuchina-15 (IL-15)"
    ],
    "correctIndex": 3,
    "explanation": "NKp44 è assente sulle cellule NK a riposo; viene rapidamente up-regolato in seguito a stimolazione con IL-2 o IL-15 ed interagisce con la catena DAP12.",
    "clinicalPearl": "NKp44 attivato riconosce forme tronche di emagglutinina virale e ligandi tumorali come MLL5/NKp44L.",
    "targetSectionId": "sec-18-5"
  },
  {
    "id": "gen-154",
    "lessonNumber": 18,
    "lessonTitle": "18. Immunologia - 10.11.2025",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale ligando di NKG2D è codificato al di fuori della regione MHC ed è costituito da una proteina ancorata alla membrana tramite GPI priva di domini transmembrana?",
    "options": [
      "MICB",
      "MICA",
      "Proteine ULBP (UL16-binding proteins)",
      "HLA-E"
    ],
    "correctIndex": 2,
    "explanation": "La famiglia ULBP (ULBP1-6) appartiene ai ligandi di stress di NKG2D; molti suoi membri sono proteine ancorate tramite GPI, sovraespresse in seguito a danno genotossico o infezioni.",
    "clinicalPearl": "La modulazione combinata di MICA/B e ULBP rappresenta uno dei principali sensori di 'induced-self' per le cellule NK spiegati dalla Galandrini.",
    "targetSectionId": "sec-18-6"
  },
  {
    "id": "gen-155",
    "lessonNumber": 19,
    "lessonTitle": "19. Immunologia - 12.11.2025",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale recettore inibitorio polimorfico della famiglia KIR riconosce il gruppo di epitopi C1 delle molecole HLA-C (aventi serina in posizione 77 e valina in 80)?",
    "options": [
      "KIR2DL2 / KIR2DL3",
      "KIR2DL1",
      "KIR3DL1",
      "KIR3DL2"
    ],
    "correctIndex": 0,
    "explanation": "KIR2DL2 e KIR2DL3 legano le varianti HLA-C del gruppo C1, mentre KIR2DL1 riconosce il gruppo C2 (aventi asparagina in 77 e lisina in 80).",
    "clinicalPearl": "La segregazione indipendente tra geni KIR polimorfici (cr. 19) e geni HLA (cr. 6) genera una straordinaria eterogeneità di repertorio individuale NK.",
    "targetSectionId": "sec-19-4"
  },
  {
    "id": "gen-156",
    "lessonNumber": 19,
    "lessonTitle": "19. Immunologia - 12.11.2025",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale sottopopolazione periferica di cellule NK umane mostra fenotipo CD56-bright CD16-negativo e risiede preferenzialmente nei linfonodi secernendo elevated quantità di citochine?",
    "options": [
      "Cellule NK CD56-bright",
      "Cellule NK CD56-dim",
      "Cellule NK adaptive (NKG2C+)",
      "Cellule ILC1 epatiche"
    ],
    "correctIndex": 0,
    "explanation": "Le NK CD56-bright costituiscono circa il 10% delle NK ematiche ma predominano nei linfonodi e tessuti; producono massicciamente IFN-gamma, TNF-alfa e GM-CSF dopo stimolo con IL-12 e IL-18.",
    "clinicalPearl": "Le NK CD56-dim CD16+ costituiscono il restante 90% nel sangue periferico e possiedono alta attività citotossica perforina-dipendente ed ADCC.",
    "targetSectionId": "sec-19-5"
  },
  {
    "id": "gen-157",
    "lessonNumber": 19,
    "lessonTitle": "19. Immunologia - 12.11.2025",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Nel trapianto allogenico aploidentico di midollo osseo nelle leucemie mieloidi acute (LMA), in cosa consiste il cosiddetto 'KIR-ligand mismatch' favorevole?",
    "options": [
      "L'induzione di tolleranza NK mediante ciclosporina",
      "La perfetta compatibilità HLA totale tra donatore e ricevente",
      "L'assenza totale di molecole HLA-C nel donatore",
      "La presenza nel donatore di cellule NK con recettori KIR inibitori i cui corrispondenti ligandi HLA di classe I sono assenti nel ricevente leucemico"
    ],
    "correctIndex": 3,
    "explanation": "Nel ricevente le cellule leucemiche mancano del ligando HLA-I specifico per il KIR del donatore: le NK allogeniche del donatore non ricevono inibizione e lisano selettivamente i blasti leucemici (GvL senza GvHD).",
    "clinicalPearl": "La scoperta dell'effetto benefico dell'alloreattività NK da KIR mismatch nelle LMA (protocollo Velardi) è un cavallo di battaglia della Prof.ssa Galandrini.",
    "targetSectionId": "sec-19-6"
  },
  {
    "id": "gen-158",
    "lessonNumber": 20,
    "lessonTitle": "20. Immunologia - 13.11.2025",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale recettore costimolatorio espresso dai Tfh lega ICOSL espresso sul linfocita B ed è fondamentale per la formazione del centro germinativo?",
    "options": [
      "CD28",
      "ICOS (CD278)",
      "OX40 (CD134)",
      "CD40"
    ],
    "correctIndex": 1,
    "explanation": "L'interazione ICOS-ICOSL induce la secrezione di IL-21 da parte del Tfh e mantiene l'espressione stabile del master regulator Bcl-6 sia nel T che nel B.",
    "clinicalPearl": "Mutazioni umane in ICOS causano una rara forma di immunodeficienza comune variabile (CVID) con perdita selettiva dei centri germinativi.",
    "targetSectionId": "sec-20-4"
  },
  {
    "id": "gen-159",
    "lessonNumber": 20,
    "lessonTitle": "20. Immunologia - 13.11.2025",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale interleuchina prodotta dai Tfh agisce tramite un recettore eterodimerico con la catena gamma-c attivando STAT3 e stimolando la crescita clonale dei centrociti?",
    "options": [
      "Interleuchina-2",
      "Interleuchina-21 (IL-21)",
      "Interleuchina-7",
      "Interleuchina-15"
    ],
    "correctIndex": 1,
    "explanation": "IL-21 è la citochina cardine dei Tfh; agisce in modo autocrino e paracrino sostenendo la sopravvivenza dei centrociti nella zona chiara e guidando la maturazione dell'affinità.",
    "clinicalPearl": "Difetti nella via di segnalazione IL-21/IL-21R o STAT3 compromettono severamente la produzione di anticorpi ad alta affinità e la memoria B.",
    "targetSectionId": "sec-20-5"
  },
  {
    "id": "gen-160",
    "lessonNumber": 20,
    "lessonTitle": "20. Immunologia - 13.11.2025",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale recettore per chemochine è altamente espresso dai centroblasti nella zona scura per trattenerli in prossimità della rete stromale producente CXCL12?",
    "options": [
      "CCR9",
      "CXCR5",
      "CCR7",
      "CXCR4"
    ],
    "correctIndex": 3,
    "explanation": "I centroblasti esprimono alti livelli di CXCR4 che li confina nella zona scura; quando riducono CXCR4 e mantengono CXCR5 migrano verso la zona chiara ricca di CXCL13.",
    "clinicalPearl": "La disregolazione del ciclo zonale CXCR4/CXCR5 favorisce la disseminazione extracapsulare nei linfomi a cellule B del centro germinativo.",
    "targetSectionId": "sec-20-6"
  },
  {
    "id": "gen-161",
    "lessonNumber": 21,
    "lessonTitle": "21. Immunologia - 17.11.2025",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale enzima interviene a valle di AID tagliando il legame tra deossiuridina e deossiribosio generando un sito abasico nel DNA durante l'ipermutazione somatica?",
    "options": [
      "DNA Ligasi III",
      "APE1 (Apurinic/apyrimidinic endonuclease 1)",
      "Uracil-DNA Glicosilasi (UNG)",
      "Mismatch repair protein MSH2"
    ],
    "correctIndex": 2,
    "explanation": "UNG rimuove l'uracile deaminato da AID lasciando un sito abasico; polimerasi translesione 'error-prone' come la Pol-eta inseriscono poi nucleotidi casuali generando transizioni o transversioni.",
    "clinicalPearl": "Mutazioni in UNG causano la Sindrome da Iper-IgM autosomica recessiva tipo 5 (HIGM5), confermando il ruolo indispensabile di questo pathway nell'uomo.",
    "targetSectionId": "sec-21-4"
  },
  {
    "id": "gen-162",
    "lessonNumber": 21,
    "lessonTitle": "21. Immunologia - 17.11.2025",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Cosa caratterizza strutturalmente le regioni di switch (S) situate a monte dei geni della regione costante delle immunoglobuline (es. S-gamma, S-alfa)?",
    "options": [
      "Sequenze ripetitive ricche in tandem di guanine e citosine su filamenti opposti capaci di formare strutture secondarie a R-loop",
      "Eptameri e nonameri separati da 12 o 23 paia di basi",
      "Sequenze telomeriche TTAGGG",
      "Isole CpG metilate"
    ],
    "correctIndex": 0,
    "explanation": "Le regioni S sono lunghe da 1 a 10 kb e ricche in motivi G-rich; la trascrizione sterile genera complessi ibridi RNA-DNA (R-loops) lasciando il filamento non trascritto a singolo filamento, bersaglio ideale per AID.",
    "clinicalPearl": "La Prof.ssa Molfetta richiede la distinzione precisa tra le sequenze RSS della ricombinazione V(D)J e le sequenze S dello switch di classe.",
    "targetSectionId": "sec-21-5"
  },
  {
    "id": "gen-163",
    "lessonNumber": 21,
    "lessonTitle": "21. Immunologia - 17.11.2025",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale fattore di trascrizione indotto da TGF-beta e acido retinoico apre la cromatina germinativa a livello del promotore I-alfa guidando lo switch ricombinatorio verso IgA?",
    "options": [
      "T-bet",
      "STAT6",
      "STAT4",
      "Smad3 / Smad4"
    ],
    "correctIndex": 3,
    "explanation": "Il legame di TGF-beta induce fosforilazione di Smad2/3 che si associano a Smad4, attivando la trascrizione germinativa sterile della regione I-alfa e orientando AID su S-alfa.",
    "clinicalPearl": "Questo processo avviene costantemente nelle placche di Peyer e linfonodi mesenterici, garantendo la produzione di grammi di IgA al giorno per le mucose.",
    "targetSectionId": "sec-21-6"
  },
  {
    "id": "gen-164",
    "lessonNumber": 22,
    "lessonTitle": "22. immunologia - 19.11.2025 (2) (2)",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale fattore trascrizionale della risposta alle proteine non ripiegate (UPR) viene attivato mediante splicing non convenzionale dell'mRNA da IRE1alpha nelle plasmacellule?",
    "options": [
      "XBP-1 (X-box binding protein 1)",
      "Blimp-1",
      "ATF6",
      "CHOP"
    ],
    "correctIndex": 0,
    "explanation": "L'enzima endoribonucleasico IRE1alpha effettua lo splicing citoplasmatico dell'mRNA di XBP-1 rimuovendo un introne di 26 nucleotidi; XBP-1s espande massivamente il reticolo endoplasmatico.",
    "clinicalPearl": "Senza XBP-1, le plasmacellule muoiono rapidamente per stress proteotossico derivante dall'accumulo di catene anticorpali nascenti.",
    "targetSectionId": "sec-22-4"
  },
  {
    "id": "gen-165",
    "lessonNumber": 22,
    "lessonTitle": "22. immunologia - 19.11.2025 (2) (2)",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "Quale recettore inibitorio presente sui linfociti B contiene motivi ITIM intracellulari e lega specificamente residui di acido sialico alfa-2,6 collegati alle glicoproteine?",
    "options": [
      "PIR-B",
      "CD72",
      "Fc-gamma-RIIB",
      "CD22 (Siglec-2)"
    ],
    "correctIndex": 3,
    "explanation": "CD22 appartiene alla famiglia delle sialoadesine (Siglec); recluta le fosfatasi SHP-1 che defosforilano i residui attivi di Ig-alfa/beta e BLNK, innalzando la soglia di attivazione del BCR.",
    "clinicalPearl": "Il farmaco Inotuzumab ozogamicina è un anticorpo coniugato anti-CD22 utilizzato nella terapia della leucemia linfoblastica acuta a precursori B recidivante.",
    "targetSectionId": "sec-22-5"
  },
  {
    "id": "gen-166",
    "lessonNumber": 22,
    "lessonTitle": "22. immunologia - 19.11.2025 (2) (2)",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Molfetta",
    "question": "In che modo l'aspirina e i FANS possono potenziare la produzione di cisteinil-leucotrieni nell'asma intollerante ad aspirina (sindrome di Samter)?",
    "options": [
      "Attivando direttamente Fc-epsilon-RI",
      "Inibendo la ciclossigenasi-1 (COX-1) e deviando il metabolismo dell'acido arachidonico verso la via della 5-lipossigenasi",
      "Bloccando l'istaminasi tissutale",
      "Aumentando i livelli di IgE totali"
    ],
    "correctIndex": 1,
    "explanation": "Il blocco di COX-1 riduce la sintesi di PGE2 antinfiammatoria (che normalmente stabilizza i mastociti) e canalizza tutto il substrato verso la 5-LOX, iperproducendo LTC4, LTD4 ed LTE4.",
    "clinicalPearl": "La triade di Samter comprende asma bronchiale grave, poliposi nasale recidivante e intolleranza all'acido acetilsalicilico.",
    "targetSectionId": "sec-22-6"
  },
  {
    "id": "gen-167",
    "lessonNumber": 23,
    "lessonTitle": "23. Immunologia - 20.11.2025",
    "topicCategory": "Immunità Mucosale (GALT) & Microbiota",
    "professor": "Soriani",
    "question": "Quale chemochina espressa costitutivamente dalle cellule epiteliali dell'intestino tenue attrae i linfociti esprimenti il recettore chemochinico CCR9?",
    "options": [
      "CCL28 (MEC)",
      "CCL25 (TECK)",
      "CXCL12",
      "CCL20"
    ],
    "correctIndex": 1,
    "explanation": "CCL25 è selettiva per l'intestino tenue e funge da ligando per CCR9 impresso sui linfociti T e plasmacellule IgA dall'acido retinoico nel GALT.",
    "clinicalPearl": "Al contrario, CCL28 (MEC) è espressa nell'epitelio del colon e nelle ghiandole salivari/mammarie e lega il recettore CCR10.",
    "targetSectionId": "sec-23-4"
  },
  {
    "id": "gen-168",
    "lessonNumber": 23,
    "lessonTitle": "23. Immunologia - 20.11.2025",
    "topicCategory": "Immunità Mucosale (GALT) & Microbiota",
    "professor": "Soriani",
    "question": "Quali acidi grassi a catena corta (SCFA) prodotti dalla fermentazione batterica delle fibre vegetali promuovono la differenziazione e funzione dei Treg colici inibendo le istone deacetilasi (HDAC)?",
    "options": [
      "Acido oleico",
      "Acido palmitico e stearico",
      "Acido linoleico e arachidonico",
      "Butirrato, propionato e acetato"
    ],
    "correctIndex": 3,
    "explanation": "Il butirrato e il propionato penetrano nei linfociti T naive colici e inibiscono le HDAC di classe I/II, iperacetilando l'enhancer del gene FoxP3 e stimolandone la trascrizione.",
    "clinicalPearl": "La deplezione di batteri produttori di butirrato (es. Faecalibacterium prausnitzii) è un reperto costante di disbiosi associato alla Malattia di Crohn.",
    "targetSectionId": "sec-23-5"
  },
  {
    "id": "gen-169",
    "lessonNumber": 23,
    "lessonTitle": "23. Immunologia - 20.11.2025",
    "topicCategory": "Immunità Mucosale (GALT) & Microbiota",
    "professor": "Soriani",
    "question": "Quale lectina antimicrobica C-tipo secreta dagli enterociti uccide i batteri Gram-positivi legando specificamente i residui lipidici del peptidoglicano e formando un poro esamerico?",
    "options": [
      "Calprotectina",
      "Defensina HD5",
      "Lisozima",
      "RegIII-gamma (nell'uomo REG3A)"
    ],
    "correctIndex": 3,
    "explanation": "RegIII-gamma è indotta da segnali batterici via TLR/MyD88 e si inserisce nella membrana dei Gram-positivi creando pori ionici litici che mantengono una zona sterile di 50 micrometri dall'epitelio.",
    "clinicalPearl": "RegIII-gamma garantisce la separazione fisica tra la fitta comunità batterica luminale e la superficie apicale degli enterociti.",
    "targetSectionId": "sec-23-6"
  },
  {
    "id": "gen-170",
    "lessonNumber": 24,
    "lessonTitle": "24.Immunologia-24.11.2025",
    "topicCategory": "Tolleranza, Autoimmunità & Immunopatologia",
    "professor": "Soriani",
    "question": "Quale ormone o fattore biologico contribuisce alla spiccata prevalenza femminile (rapporto fino a 9:1) di malattie autoimmuni come il Lupus Eritematoso Sistemico?",
    "options": [
      "Gli estrogeni che stimolano la produzione di interferone-alfa e l'escape dall'inattivazione del cromosoma X di geni immunologici come TLR7",
      "Il testosterone che attiva i linfociti Th1",
      "La prolattina che inibisce i linfociti B",
      "Il progesterone che inattiva i Treg"
    ],
    "correctIndex": 0,
    "explanation": "Il gene TLR7 è situato sul cromosoma X e può sfuggire parzialmente all'inattivazione femminile (X-inactivation escape), raddoppiando il dosaggio genico e predisponendo a iperproduzione di IFN-I.",
    "clinicalPearl": "Argomento ampiamente trattato dalla Prof.ssa Soriani sul dimorfismo sessuale nella risposta immunitaria e nell'autoimmunità.",
    "targetSectionId": "sec-24-4"
  },
  {
    "id": "gen-171",
    "lessonNumber": 24,
    "lessonTitle": "24.Immunologia-24.11.2025",
    "topicCategory": "Tolleranza, Autoimmunità & Immunopatologia",
    "professor": "Soriani",
    "question": "Quale meccanismo di perdita della tolleranza è definito come 'attivazione da spettatore innocente' (bystander activation)?",
    "options": [
      "Attivazione aspecifica di linfociti T autoreattivi preesistenti a causa dell'ambiente infiammatorio locale ricco di citochine e costimolatori generato da un'infezione",
      "Cross-reattività recettoriale verso epitopi omologhi",
      "Formazione di neoantigeni indotti da farmaci",
      "Esposizione di antigeni sequestrati post-trauma"
    ],
    "correctIndex": 0,
    "explanation": "Un'infezione locale induce le APC ad iperesprimere B7-1/B7-2 e secernere IL-12/IL-6; linfociti T autoreattivi silenti che transitano nella sede infiammata possono superare la soglia di attivazione.",
    "clinicalPearl": "Si differenzia dal mimetismo molecolare perché non richiede omologia di sequenza primaria tra il patogeno e l'autoantigene.",
    "targetSectionId": "sec-24-5"
  },
  {
    "id": "gen-172",
    "lessonNumber": 24,
    "lessonTitle": "24.Immunologia-24.11.2025",
    "topicCategory": "Tolleranza, Autoimmunità & Immunopatologia",
    "professor": "Soriani",
    "question": "Quale tra i seguenti tessuti costituisce un tipico sito di 'privilegio immunitario' anatomico in cui gli antigeni self sono segregati e protetti da immunosoppressione attiva?",
    "options": [
      "Linfonodo mesenterico",
      "Milza",
      "Midollo osseo",
      "Camera anteriore dell'occhio e cornea"
    ],
    "correctIndex": 3,
    "explanation": "L'occhio possiede assenza di drenaggio linfatico diretto, barriera emato-oculare e produce costitutivamente TGF-beta, FasL e neuropeptidi immunosoppressori (fenomeno ACAID).",
    "clinicalPearl": "Il trauma perforante unilaterale all'occhio può rilasciare antigeni sequestrati inducendo un'uveite autoimmune bilaterale distruttiva (oftalmia simpatica).",
    "targetSectionId": "sec-24-6"
  },
  {
    "id": "gen-173",
    "lessonNumber": 25,
    "lessonTitle": "25. Immunologia - 26.11.2025.pdf",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Rinaldi",
    "question": "Quale farmaco di prima linea salvavita deve essere somministrato immediatamente per via intramuscolare in caso di shock anafilattico sistemico?",
    "options": [
      "Salbutamolo inalatorio",
      "Idrocortisone per via endovenosa",
      "Antistaminico anti-H1 (Clorfenamina)",
      "Adrenalina (Epinefrina)"
    ],
    "correctIndex": 3,
    "explanation": "L'adrenalina stimola i recettori alfa-1 (vasocostrizione periferica, contrasto dell'ipotensione e dell'edema laringeo) e beta-2 (broncodilatazione e inibizione diretta della degranulazione mastocitaria).",
    "clinicalPearl": "I cortisonici e antistaminici sono farmaci di supporto di seconda linea ma NON arrestano il collasso cardiocircolatorio acuto nell'anafilassi.",
    "targetSectionId": "sec-25-4"
  },
  {
    "id": "gen-174",
    "lessonNumber": 25,
    "lessonTitle": "25. Immunologia - 26.11.2025.pdf",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Rinaldi",
    "question": "In che cosa consiste il meccanismo d'azione della terapia desensibilizzante specifica per allergeni (AIT o immunoterapia specifica)?",
    "options": [
      "Distruzione selettiva dei mastociti peritoneali",
      "Somministrazione di dosi scalari crescenti dell'allergene per indurre linfociti Treg, IL-10 e deviare la risposta anticorpale verso IgG4 bloccanti",
      "Inattivazione irreversibile delle plasmacellule",
      "Neutralizzazione chimica dell'istamina nel circolo"
    ],
    "correctIndex": 1,
    "explanation": "L'AIT stimola i linfociti Treg e Tr1 a secernere IL-10 e TGF-beta, che sopprimono la risposta Th2 e inducono le plasmacellule a produrre anticorpi 'bloccanti' di sottoclasse IgG4.",
    "clinicalPearl": "Le IgG4 legano l'allergene prima che possa cross-linkare le IgE sui mastociti e non attivano la via classica del complemento.",
    "targetSectionId": "sec-25-5"
  },
  {
    "id": "gen-175",
    "lessonNumber": 25,
    "lessonTitle": "25. Immunologia - 26.11.2025.pdf",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Rinaldi",
    "question": "Quale alarmina derivata dall'epitelio delle vie aeree danneggiate (insieme a IL-25 e IL-33) attiva le cellule ILC2 e le DC mucosali ad innescare una risposta Th2 allergica?",
    "options": [
      "Interferone-alfa",
      "TSLP (Linfopoietina Stromale Timica)",
      "Interleuchina-12",
      "Fattore C3 del complemento"
    ],
    "correctIndex": 1,
    "explanation": "TSLP è rilasciata dall'epitelio bronchiale in risposta a inquinanti, fumo o allergeni con attività proteasica, up-regolando OX40L sulle DC e stimolando le ILC2 a secernere IL-5 e IL-13.",
    "clinicalPearl": "Tezepelumab è un anticorpo monoclonale umano approvato che blocca TSLP, efficace nell'asma grave sia eosinofilo che non eosinofilo.",
    "targetSectionId": "sec-25-6"
  },
  {
    "id": "gen-176",
    "lessonNumber": 26,
    "lessonTitle": "26. Immunologia - 27.11.25",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Rinaldi",
    "question": "Nel Pemfigo Volgare (ipersensibilità di tipo II), contro quale proteina delle giunzioni intercellulari epidermiche (desmosomi) sono diretti gli autoanticorpi IgG che causano acantolisi?",
    "options": [
      "Integrina alfa6-beta4",
      "Collagene di tipo VII",
      "Desmogleina-3 (e Desmogleina-1)",
      "BP180 (Collagene XVII)"
    ],
    "correctIndex": 2,
    "explanation": "Gli autoanticorpi legano i domini extracellulari della desmogleina-3 provocando la perdita di adesione tra i cheratinociti soprabasali (acantolisi) con formazione di bolle flaccide e dolorose.",
    "clinicalPearl": "Nel Pemfigoide Bolloso invece gli anticorpi colpiscono BP180/BP230 degli emidesmosomi, provocando bolle tese subepidermiche con deposito lineare di IgG e C3.",
    "targetSectionId": "sec-26-4"
  },
  {
    "id": "gen-177",
    "lessonNumber": 26,
    "lessonTitle": "26. Immunologia - 27.11.25",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Rinaldi",
    "question": "Quale patologia autoimmune d'organo rientra nell'ipersensibilità di tipo II senza danno citotossico ma con effetto 'agonista/stimolatorio' mediato da autoanticorpi anti-TSHR?",
    "options": [
      "Malattia di Addison",
      "Tiroidite di Hashimoto",
      "Morbo di Basedow-Graves",
      "Diabete mellito di tipo 1"
    ],
    "correctIndex": 2,
    "explanation": "Nel morbo di Basedow gli anticorpi TSI (Thyroid Stimulating Immunoglobulins) legano il recettore TSH mimando l'azione dell'ormone ipofisario e inducendo ipertiroidismo continuo.",
    "clinicalPearl": "Esempio fondamentale di come l'ipersensibilità di tipo II possa manifestarsi con disregolazione funzionale pura senza distruzione cellulare mediata da complemento.",
    "targetSectionId": "sec-26-5"
  },
  {
    "id": "gen-178",
    "lessonNumber": 26,
    "lessonTitle": "26. Immunologia - 27.11.25",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Rinaldi",
    "question": "Quale alterazione sierica tipica si riscontra durante le fasi di riacutizzazione nefritica del Lupus Eritematoso Sistemico a causa del consumo mediato da immunocomplessi?",
    "options": [
      "Aumento selettivo di C1-inibitore",
      "Marcata riduzione delle frazioni C3 e C4 del complemento (ipocomplementemia)",
      "Ipercomplementemia globale C3 e C5",
      "Scomparsa completa del fibrinogeno"
    ],
    "correctIndex": 1,
    "explanation": "La precipitazione massiva di immunocomplessi DNA-anti-DNA nella membrana basale glomerulare attiva la via classica del complemento consumando grandi quantità di C4 e C3 sierici.",
    "clinicalPearl": "Il monitoraggio seriato dei livelli plasmatici di C3, C4 e degli anticorpi anti-dsDNA è il cardine di laboratorio per valutare il 'flare' nefritico lupico.",
    "targetSectionId": "sec-26-6"
  },
  {
    "id": "gen-179",
    "lessonNumber": 27,
    "lessonTitle": "27. Immunologia - 01.12.2025",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Rinaldi",
    "question": "Quale citochina rilasciata dai macrofagi nel granuloma tubercolare è indispensabile per la formazione e l'integrità strutturale del granuloma stesso?",
    "options": [
      "Interleuchina-10",
      "Interleuchina-4",
      "TNF-alfa",
      "TGF-alfa"
    ],
    "correctIndex": 2,
    "explanation": "Il TNF-alfa induce l'espressione di chemochine (CCL2, CXCL8) e molecole di adesione endoteliali che mantengono aggregati macrofagi epitelioidi e linfociti intorno all'infezione.",
    "clinicalPearl": "Prima di iniziare una terapia biologica con inibitori del TNF-alfa (Infliximab, Adalimumab) è obbligatorio eseguire lo screening per tubercolosi latente (Quantiferon/Mantoux).",
    "targetSectionId": "sec-27-4"
  },
  {
    "id": "gen-180",
    "lessonNumber": 27,
    "lessonTitle": "27. Immunologia - 01.12.2025",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Rinaldi",
    "question": "In che modo il test ematico IGRA (Interferon-Gamma Release Assay, come il QuantiFERON-TB) supera i limiti di specificità del test cutaneo di Mantoux?",
    "options": [
      "Non richiede l'incubazione di linfociti T vivi",
      "Misura direttamente la carica batterica circolante",
      "Rileva anticorpi IgE specifici",
      "Utilizza antigeni peptidici ricombinanti esclusivi di M. tuberculosis (ESAT-6 e CFP-10) assenti nel ceppo vaccinale BCG e nella maggior parte dei micobatteri non tubercolari"
    ],
    "correctIndex": 3,
    "explanation": "Il test di Mantoux può risultare falsamente positivo nei soggetti vaccinati con BCG; gli antigeni ESAT-6 e CFP-10 sono codificati nella regione genomica RD1 assente nel BCG.",
    "clinicalPearl": "Domanda classica sul confronto diagnostico tra risposta in vivo (Mantoux, ipersensibilità IV) e dosaggio in vitro (IGRA).",
    "targetSectionId": "sec-27-5"
  },
  {
    "id": "gen-181",
    "lessonNumber": 27,
    "lessonTitle": "27. Immunologia - 01.12.2025",
    "topicCategory": "Ipersensibilità (Tipi I, II, III, IV)",
    "professor": "Rinaldi",
    "question": "Nella celiachia (enteropatia da glutine), quale enzima tissutale deamina i residui di glutammina della gliadina in acido glutammico, aumentandone l'affinità di legame per HLA-DQ2 e HLA-DQ8?",
    "options": [
      "Calpaina",
      "Enteropeptidasi duodenale",
      "Peptidasi DPP-IV",
      "Transglutaminasi tissutale di tipo 2 (tTG)"
    ],
    "correctIndex": 3,
    "explanation": "La deaminazione conferisce cariche negative al peptide della gliadina, alloggiandolo perfettamente nelle tasche basiche cariche positivamente delle molecole HLA-DQ2 e DQ8.",
    "clinicalPearl": "Gli anticorpi anti-transglutaminasi IgA (anti-tTG) e anti-endomisio (EMA) sono i biomarcatori sierologici cardine utilizzati per la diagnosi di celiachia.",
    "targetSectionId": "sec-27-6"
  },
  {
    "id": "gen-182",
    "lessonNumber": 28,
    "lessonTitle": "28. Immunologia - 03.12.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Galandrini",
    "question": "Quale alterazione patologica a carico della parete vascolare caratterizza l'istologia del rigetto cronico d'organo (es. vasculopatia dell'alloinnesto cardiaco o renale)?",
    "options": [
      "Infiltrazione purulenta neutrofila transmurale",
      "Trombosi massiva fibrinoide acuta dei glomeruli",
      "Proliferazione miointimale concentrica progressiva con occlusione del lume vascolare e sclerosi fibrosa parenchimale",
      "Aneurisma dissecante dell'arteria principale"
    ],
    "correctIndex": 2,
    "explanation": "Il rigetto cronico è causato da un'insulto infiammatorio endoteliale cronico T e anticorpo-mediato (via indiretta), che stimola le cellule muscolari lisce a migrare e proliferare nell'intima.",
    "clinicalPearl": "La vasculopatia dell'alloinnesto è irreversibile e rappresenta la principale causa di perdita d'organo a lungo termine non responsiva ai comuni immunosoppressori.",
    "targetSectionId": "sec-28-4"
  },
  {
    "id": "gen-183",
    "lessonNumber": 28,
    "lessonTitle": "28. Immunologia - 03.12.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Galandrini",
    "question": "Quale frammento proteico della via classica del complemento legato covalentemente all'endotelio dei capillari peritubulari è il biomarcatore bioptico diagnostico di rigetto acuto anticorpo-mediato (ABMR)?",
    "options": [
      "Bb",
      "C3a",
      "C1q",
      "C4d"
    ],
    "correctIndex": 3,
    "explanation": "C4d possiede un gruppo tiolestere interno che forma un legame covalente stabile e duraturo con le proteine di membrana endoteliali dopo l'attivazione della via classica da anticorpi anti-HLA.",
    "clinicalPearl": "La positività per C4d nei capillari peritubulari alla biopsia renale fa diagnosi certa di rigetto umorale secondo i criteri di Banff.",
    "targetSectionId": "sec-28-5"
  },
  {
    "id": "gen-184",
    "lessonNumber": 28,
    "lessonTitle": "28. Immunologia - 03.12.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Galandrini",
    "question": "Quale bersaglio intracellulare inibisce il farmaco immunosoppressore Sirolimus (Rapamicina) arrestando la progressione del ciclo cellulare dei linfociti T stimolati da IL-2?",
    "options": [
      "JAK3",
      "Calcineurina",
      "Inosina monofosfato deidrogenasi (IMPDH)",
      "mTORC1 (mammalian Target of Rapamycin)"
    ],
    "correctIndex": 3,
    "explanation": "La rapamicina si lega alla proteina intracellulare FKBP-12; il complesso inibisce specificamente la serina-treonina chinasi mTOR, bloccando la traduzione e il ciclo cellulare da fase G1 a S.",
    "clinicalPearl": "A differenza della ciclosporina, la rapamicina non inibisce la sintesi di IL-2 ma blocca la segnalazione trasduzionale a valle del recettore di IL-2.",
    "targetSectionId": "sec-28-6"
  },
  {
    "id": "gen-185",
    "lessonNumber": 29,
    "lessonTitle": "29. Immunologia - 04.12.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Soriani",
    "question": "In che modo l'enzima Indoleamina 2,3-diossigenasi (IDO), iperespresso dalle cellule dendritiche regolatorie nel microambiente tumorale, inibisce la risposta citotossica T?",
    "options": [
      "Degradando il triptofano essenziale in chinurenina immunosoppressiva",
      "Sintetizzando perossido di idrogeno nei lisosomi",
      "Defosforilando il recettore del TCR",
      "Idrolizzando l'ATP extracellulare"
    ],
    "correctIndex": 0,
    "explanation": "IDO depaupera il triptofano nell'ambiente extracellulare (attivando la via dello stress da fame GCN2 nei T) e accumula chinurenina, metabolita tossico che lega AHR inducendo fenotipo Treg.",
    "clinicalPearl": "La Prof.ssa Soriani evidenzia IDO come tipico bersaglio del metabolismo tumorale studiato per combinazioni con gli inibitori dei checkpoint.",
    "targetSectionId": "sec-29-4"
  },
  {
    "id": "gen-186",
    "lessonNumber": 29,
    "lessonTitle": "29. Immunologia - 04.12.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Soriani",
    "question": "Quali neoantigeni tumorali derivano da mutazioni genetiche somatiche puntiformi 'non-sinonime' private ed esclusive del singolo paziente oncologico?",
    "options": [
      "Antigeni di differenziazione tissutale (Melan-A, Tirosinasi)",
      "Antigeni oncofetali (CEA, AFP)",
      "Neoepitopi derivati da mutazioni somatiche casuali (mutanomi)",
      "Antigeni cancro-testicolo (MAGE, NY-ESO-1)"
    ],
    "correctIndex": 2,
    "explanation": "I neoantigeni somatici nascono da mutazioni missenso del tumore; non essendo mai stati espressi nel timo, eludono la tolleranza centrale ed evocano risposte T ad altissima avidità.",
    "clinicalPearl": "L'elevato carico mutazionale tumorale (TMB, tipico dei tumori con deficit del mismatch repair dMMR/MSI-high) è il predittore primario di risposta agli inibitori di PD-1.",
    "targetSectionId": "sec-29-5"
  },
  {
    "id": "gen-187",
    "lessonNumber": 29,
    "lessonTitle": "29. Immunologia - 04.12.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Soriani",
    "question": "Quale fattore angiogenico e immunosoppressore rilasciato in abbondanza dal tumore blocca la maturazione delle cellule dendritiche e favorisce l'accumulo di Treg?",
    "options": [
      "Eritropoietina",
      "VEGF-A",
      "Trombopoietina",
      "FGF-2"
    ],
    "correctIndex": 1,
    "explanation": "VEGF inibisce direttamente la differenziazione dei precursori ematopoietici in DC mature e riduce l'adesione leucocitaria all'endotelio tumorale tramite downregulation di ICAM-1 e VCAM-1.",
    "clinicalPearl": "L'associazione tra farmaci anti-VEGF (Bevacizumab) e inibitori di PD-L1 (Atezolizumab) ha dimostrato sinergia nel carcinoma epatocellulare avanzato.",
    "targetSectionId": "sec-29-6"
  },
  {
    "id": "gen-188",
    "lessonNumber": 30,
    "lessonTitle": "30. Immunologia - 10.12.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Soriani",
    "question": "Nelle CAR-T di quarta generazione (dette anche TRUCKs), quale proprietà funzionale aggiuntiva è ingegnerizzata per rimodellare il microambiente immunosoppressivo del tumore solido?",
    "options": [
      "La delezione dell'omodimero zeta",
      "La secrezione inducibile di citochine immunomodulanti transgeniche (es. IL-12 o IL-18) all'ingaggio con l'antigene",
      "La sostituzione dell'scFv con un anticorpo IgA",
      "L'espressione costitutiva di PD-1"
    ],
    "correctIndex": 1,
    "explanation": "I TRUCKs (T cells Redirected for Universal Cytokine Killing) rilasciano citochine proinfiammatorie come IL-12 nella sede tumorale, reclutando ed attivando macrofagi e cellule NK endogene.",
    "clinicalPearl": "Questa strategia serve a contrastare l'esaurimento funzionale e la scarsa penetrazione delle CAR-T convenzionali nei tumori solidi.",
    "targetSectionId": "sec-30-4"
  },
  {
    "id": "gen-189",
    "lessonNumber": 30,
    "lessonTitle": "30. Immunologia - 10.12.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Soriani",
    "question": "Quale fenomeno tossico 'on-target off-tumor' si manifesta costantemente nei pazienti trattati con CAR-T dirette contro l'antigene CD19 a causa della condivisione del marcatore con le cellule B sane?",
    "options": [
      "Aplasia midollare eritroide pura",
      "Aplasia totale dei linfociti B e conseguente ipogammaglobulinemia duratura",
      "Epatite autoimmune acuta",
      "Glomerulonefrite proliferativa"
    ],
    "correctIndex": 1,
    "explanation": "CD19 è espresso sia sui blasti leucemici B sia su tutti i linfociti B fisiologici maturi e immaturi; le CAR-T eliminano l'intero compartimento B normale, rendendo necessaria l'infusione periodica di immunoglobuline endovena (IVIG).",
    "clinicalPearl": "La gestione dell'ipogammaglobulinemia cronica con IVIG è un aspetto pratico clinico fondamentale della terapia cellulare con CAR-T.",
    "targetSectionId": "sec-30-5"
  },
  {
    "id": "gen-190",
    "lessonNumber": 30,
    "lessonTitle": "30. Immunologia - 10.12.2025",
    "topicCategory": "Trapianti & Immunologia Oncologica",
    "professor": "Soriani",
    "question": "Quale molecola bispecifica (BiTE) approvata in clinica lega simultaneamente la molecola CD19 sul blasto leucemico e la catena CD3-epsilon sul linfocita T per forzare la sinapsi citotossica?",
    "options": [
      "Rituximab",
      "Blinatumomab",
      "Brentuximab vedotin",
      "Infliximab"
    ],
    "correctIndex": 1,
    "explanation": "Blinatumomab è costituito da due domini scFv ricombinanti uniti da un linker; mette a stretto contatto qualsiasi linfocito T citotossico vicino con la cellula B leucemica inducendone la lisi senza necessità di costimolazione.",
    "clinicalPearl": "I BiTEs rappresentano un'alternativa off-the-shelf di immunoterapia redirected T rispetto alla manifattura autologa complessa delle CAR-T.",
    "targetSectionId": "sec-30-6"
  },
  {
    "id": "gen-191",
    "lessonNumber": 31,
    "lessonTitle": "31. Immunologia - 11.12.2025",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "Quale immunodeficienza primitiva è la più comune in assoluto nella popolazione caucasica (frequenza 1:600) e decorre frequentemente in modo del tutto asintomatico?",
    "options": [
      "Deficit selettivo di IgA",
      "Malattia di Bruton",
      "SCID da deficit di ADA",
      "Sindrome da Iper-IgE"
    ],
    "correctIndex": 0,
    "explanation": "Il deficit selettivo di IgA è caratterizzato da livelli sierici di IgA inferiori a 7 mg/dL con normali IgG e IgM; può causare infezioni respiratorie o gastrointestinali lievi o manifestarsi con anafilassi a trasfusioni contenenti IgA.",
    "clinicalPearl": "Attenzione clinica all'orale: i soggetti con deficit selettivo di IgA possono produrre anticorpi anti-IgA ed andare incontro a shock anafilattico fatale se ricevono emotrasfusioni o emocomponenti contenenti IgA.",
    "targetSectionId": "sec-31-4"
  },
  {
    "id": "gen-192",
    "lessonNumber": 31,
    "lessonTitle": "31. Immunologia - 11.12.2025",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "Quale gene mutato sul cromosoma 11q22 è responsabile dell'Atassia-Teleangectasia, caratterizzata da ipersensibilità alle radiazioni ionizzanti e deficit immunitario combinato?",
    "options": [
      "NBN (Nibrina)",
      "ATM (Ataxia Telangiectasia Mutated)",
      "BLM (Bloom helicase)",
      "WRN"
    ],
    "correctIndex": 1,
    "explanation": "La chinasi ATM rileva le rotture del doppio filamento (DSB) di DNA fosforilando p53 e H2AX; la sua assenza impedisce sia la corretta ricombinazione V(D)J e di switch, sia la riparazione dei danni genomici.",
    "clinicalPearl": "Segni clinici tipici: atassia cerebellare progressiva, teleangectasie oculari/cutanee, deficit di IgA/IgG2 e forte predisposizione a linfomi e leucemie.",
    "targetSectionId": "sec-31-5"
  },
  {
    "id": "gen-193",
    "lessonNumber": 31,
    "lessonTitle": "31. Immunologia - 11.12.2025",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "Quale tirosina chinasi associata alla catena gamma comune intracellulare è mutata nella forma autosomica recessiva di SCID con fenotipo identico a quello X-linked (T- B+ NK-)?",
    "options": [
      "JAK2",
      "Tyk2",
      "JAK1",
      "JAK3"
    ],
    "correctIndex": 3,
    "explanation": "JAK3 è l'unica tirosina chinasi citoplasmatica che si associa specificamente alla catena gamma-c; mutazioni in JAK3 aboliscono le medesime vie recettoriali di IL-7 e IL-15, provocando SCID autosomica T-B+NK-.",
    "clinicalPearl": "Domanda classica di genetica molecolare: JAK3 è specifica del sistema linfoide, mentre JAK1/2 sono espresse ubiquitariamente.",
    "targetSectionId": "sec-31-6"
  },
  {
    "id": "gen-194",
    "lessonNumber": 32,
    "lessonTitle": "32. Immunologia - 15.12.2025",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "Quale patologia da immunodeficienza e instabilità cromosomica è causata da mutazioni nel gene della DNA metiltransferasi DNMT3B ed è caratterizzata da anomalie facciali e ritardo?",
    "options": [
      "Sindrome di Nijmegen",
      "Sindrome ICF (Immunodeficiency, Centromeric instability, Facial anomalies)",
      "Sindrome di Bloom",
      "Sindrome di Chediak-Higashi"
    ],
    "correctIndex": 1,
    "explanation": "Mutazioni in DNMT3B impediscono la metilazione delle eterocromatine centromeriche sui cromosomi 1, 9 e 16, causando rotture cromosomiche aberranti e difetto di maturazione plasmacellulare.",
    "clinicalPearl": "Esempio magistrale citato dalla Prof.ssa Molfetta di patologia epigenetica che influenza lo sviluppo del sistema immunitario.",
    "targetSectionId": "sec-32-4"
  },
  {
    "id": "gen-195",
    "lessonNumber": 32,
    "lessonTitle": "32. Immunologia - 15.12.2025",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "Quale anomalia ultrastrutturale granulare caratterizza i neutrofili e le cellule NK nella Sindrome di Chediak-Higashi dovuta a mutazioni nel gene regolatore del traffico lisosomiale LYST?",
    "options": [
      "Assenza completa di granuli primari",
      "Presenza di inclusioni giganti azzurrofile lisosomiali derivanti dalla fusione aberrante e incontrollata dei granuli",
      "Ipersegmentazione del nucleo neutrofilo",
      "Formazione di cristalli di Charcot-Leyden"
    ],
    "correctIndex": 1,
    "explanation": "La proteina LYST controlla la fissione e dimensione dei lisosomi; la sua assenza causa granuli giganti non funzionali che non riescono a degranulare, provocando albinismo oculocutaneo e immunodeficienza grave.",
    "clinicalPearl": "I pazienti sviluppano frequentemente una fase accelerata emofagocitica (HLH secondaria) scatenata da infezioni da EBV.",
    "targetSectionId": "sec-32-5"
  },
  {
    "id": "gen-196",
    "lessonNumber": 32,
    "lessonTitle": "32. Immunologia - 15.12.2025",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "Quale biomarcatore molecolare dosato su cartoncino di Guthrie nello screening neonatale universale permette la diagnosi precoce pre-sintomatica di tutte le SCID T-linfopeniche?",
    "options": [
      "Livello di immunoglobuline IgM",
      "KREC",
      "TREC (T-cell Receptor Excision Circles)",
      "Concentrazione di IL-7 sierica"
    ],
    "correctIndex": 2,
    "explanation": "I TREC sono frammenti circolari di DNA episomiale generati fisiologicamente durante l'escisione genica del locus delta nella ricombinazione del TCR-alfa; la loro assenza indica aplasia o assenza di produzione timica di T.",
    "clinicalPearl": "Lo screening neonatale con TREC permette di trapiantare le cellule staminali prima dell'insorgenza di infezioni opportunistiche letali.",
    "targetSectionId": "sec-32-6"
  },
  {
    "id": "gen-197",
    "lessonNumber": 33,
    "lessonTitle": "33. Immunologia - 17.12.25",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "Quale proteina accessoria di HIV induce l'internalizzazione e la degradazione lisosomiale della molecola CD4 e delle molecole HLA-A e HLA-B della cellula infettata?",
    "options": [
      "Vpu",
      "Nef",
      "Rev",
      "Vpr"
    ],
    "correctIndex": 1,
    "explanation": "Nef connecta CD4 e HLA-I al macchinario delle vescicole a clatrina (AP-1 e AP-2), deviandoli verso i lisosomi; la perdita di HLA-A/B riduce la lisi da CTL preservando parzialmente HLA-C ed E per inibire le cellule NK.",
    "clinicalPearl": "La downregulation selettiva di HLA-A e B risparmiando HLA-C ed E è un meccanismo sopraffino di immunoevasione combinata verso CTL ed NK discusso a lezione.",
    "targetSectionId": "sec-33-5"
  },
  {
    "id": "gen-198",
    "lessonNumber": 33,
    "lessonTitle": "33. Immunologia - 17.12.25",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "Quale fattore di restrizione cellulare innato (noto anche come BST-2) trattiene i virioni maturi di HIV neo-gemmati legati alla membrana plasmatica ed è antagonizzato dalla proteina virale Vpu?",
    "options": [
      "TRIM5-alfa",
      "SAMHD1",
      "Teterina (CD317 / BST-2)",
      "APOBEC3G"
    ],
    "correctIndex": 2,
    "explanation": "La teterina possiede due ancore di membrana contrapposte che imprigionano fisicamente la particella virale rilasciata; Vpu degrada la teterina consentendo la dispersione dei virioni maturi.",
    "clinicalPearl": "La teterina è un gene indotto da interferone di tipo I (ISG) fondamentale nell'immunità intrinseca antivirale.",
    "targetSectionId": "sec-33-6"
  },
  {
    "id": "gen-199",
    "lessonNumber": 33,
    "lessonTitle": "33. Immunologia - 17.12.25",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "Quale enzima virale sintetizza il DNA provirale a partire dal genoma a RNA genomico a singolo filamento all'interno del citoplasma della cellula ospite?",
    "options": [
      "RNA polimerasi II cellulare",
      "Integrasi virale",
      "Proteasi virale",
      "Trascrittasi Inversa (Retrotrascrittasi con attività DNA polimerasi RNA-dipendente e RNasi H)"
    ],
    "correctIndex": 3,
    "explanation": "La trascrittasi inversa converte l'ssRNA virale in dsDNA provirale privo di correzione di bozze (proofreading), introducendo l'elevatissimo tasso di mutazione tipico delle quasi-specie di HIV.",
    "clinicalPearl": "I farmaci NRTI (Tenofovir, Emtricitabina) e NNRTI (Efavirenz) bloccano specificamente questo enzima cardine della terapia cART.",
    "targetSectionId": "sec-33-7"
  },
  {
    "id": "gen-200",
    "lessonNumber": 33,
    "lessonTitle": "33. Immunologia - 17.12.25",
    "topicCategory": "Immunodeficienze (SCID, Bruton, HIV & AIDS)",
    "professor": "Molfetta",
    "question": "Quale serbatoio cellulare anatomico e fenotipico a lunga vita rappresenta il principale ostacolo all'eradicazione definitiva di HIV durante terapia antiretrovirale soppressiva?",
    "options": [
      "Linfociti T CD4+ della memoria centrale e follicolari (Tfh) nei linfonodi e GALT contenenti DNA provirale integrato trascrizionalmente latente",
      "Monociti circolanti a breve emivita",
      "Cellule NK plasmacitoidi",
      "Eritroblasti midollari"
    ],
    "correctIndex": 0,
    "explanation": "I linfociti T CD4+ memory a riposo contengono provirus latente integrato nel genoma cellulare; non esprimendo proteine virali, non vengono rilevati né dai farmaci antiretrovirali né dai CTL.",
    "clinicalPearl": "Le strategie sperimentali 'shock and kill' mirano a riattivare farmacologicamente il provirus latente con inibitori HDAC per esporre la cellula infetta all'eliminazione immunitaria.",
    "targetSectionId": "sec-33-8"
  },
{
    "id": "gen-201",
    "lessonNumber": 4,
    "lessonTitle": "04. PRR, Inflammasoma & Risposta Infiammatoria",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale alterazione molecolare e biofisica intracellulare rappresenta il segnale primario di innesco (triggering) per l'oligomerizzazione dell'inflammasoma NLRP3?",
    "options": [
      "Efflusso citosolico di ioni potassio (K+) con conseguente caduta della concentrazione intracellulare",
      "Ingresso massivo di ioni sodio attraverso canali voltaggio-dipendenti",
      "Ipermetilazione del promotore del gene codificante per la pro-caspasi-1",
      "Defosforilazione irreversibile del dominio CARD di ASC"
    ],
    "correctIndex": 0,
    "explanation": "L'efflusso di potassio (K+) indotto da pori di membrana (ATP extracellulare su P2X7, tossine batteriche, particolato di urato o silice) induce una transizione conformazionale che libera il dominio NACHT di NLRP3, consentendone l'oligomerizzazione.",
    "clinicalPearl": "La prof.ssa Soriani richiede la sequenza a due segnali dell'inflammasoma: Segnale 1 di priming (NF-kB trascrive NLRP3 e pro-IL-1b) e Segnale 2 di triggering (drop di K+ intracellulare che assembla la ruota con ASC).",
    "targetSectionId": "sec-1-inflammasoma"
  },
  {
    "id": "gen-202",
    "lessonNumber": 1,
    "lessonTitle": "01. Fondamenti del Sistema Immunitario ed Ematopoiesi",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale profilo fenotipico molecolare di superficie definisce con precisione la Cellula Staminale Ematopoietica a lungo termine (LT-HSC) umana purificata dal midollo osseo?",
    "options": [
      "CD34-negativo, CD38-positivo, Lin-positivo, CD45RA-positivo",
      "CD34-positivo, CD38-negativo, Lin-negativo, CD90/Thy-1-positivo e CD45RA-negativo",
      "CD19-positivo, CD3-positivo, CD14-positivo, CD56-positivo",
      "CD117/c-Kit-negativo, CD133-negativo, CD34-negativo, HLA-DR-alto"
    ],
    "correctIndex": 1,
    "explanation": "Le cellule staminali ematopoietiche pluripotenti primitive umane a lungo termine sono prive di marcatori di lignaggio differenziativo (Lin-), esprimono CD34 e CD90 (Thy-1), e mancano sia di CD38 che di CD45RA.",
    "clinicalPearl": "Nei protocolli trapiantologici e nella mobilizzazione con G-CSF, il dosaggio citofluorimetrico quantitativo delle cellule CD34+ rappresenta il parametro clinico standard per stimare l'adeguatezza dell'innesto staminale.",
    "targetSectionId": "sec-0-ematopoiesi"
  },
  {
    "id": "gen-203",
    "lessonNumber": 1,
    "lessonTitle": "01. Fondamenti del Sistema Immunitario ed Ematopoiesi",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale asse chemochinico governa l'ancoraggio, la quiescenza e la ritenzione delle cellule staminali ematopoietiche all'interno delle nicchie stromali perivascolari ed endostali del midollo osseo?",
    "options": [
      "CCR7 espresso dalle HSC che risponde a CCL19 secreto dagli osteoblasti",
      "CXCR5 espresso dalle HSC che risponde a CXCL13 prodotto dalle cellule dendritiche follicolari",
      "CXCR4 espresso dalle HSC che risponde al ligando CXCL12 (SDF-1) secreto dalle cellule stromali reticolari CAR",
      "CCR9 espresso dalle HSC che riconosce CCL25 sintetizzato dall'endotelio sinusoidale"
    ],
    "correctIndex": 2,
    "explanation": "Le cellule stromali reticolari abbondanti di CXCL12 (cellule CAR) e le cellule perivascolari rilasciano elevati gradienti di CXCL12 che trattengono le HSC esprimenti CXCR4 all'interno della nicchia midollare.",
    "clinicalPearl": "Il farmaco Plerixafor (AMD3100) è un antagonista selettivo reversibile di CXCR4 che blocca il legame con CXCL12, inducendo il rapido distacco e la mobilizzazione massiva delle HSC dalla nicchia verso il sangue periferico per il trapianto autologo.",
    "targetSectionId": "sec-0-nicchia"
  },
  {
    "id": "gen-204",
    "lessonNumber": 1,
    "lessonTitle": "01. Fondamenti del Sistema Immunitario ed Ematopoiesi",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale fattore di trascrizione 'master regulator' a dita di zinco è indispensabile per la transizione dal progenitore multipotente (MPP) al progenitore linfoide comune (CLP), reprimendo i programmi differenziativi mieloidi ed eritroidi?",
    "options": [
      "GATA-1",
      "C/EBP-alfa",
      "PU.1 ad altissima concentrazione",
      "Ikaros (IKZF1)"
    ],
    "correctIndex": 3,
    "explanation": "Ikaros organizza la cromatina e reprime l'espressione dei geni mieloidi/eritroidi guidando la specificazione iniziale verso il lignaggio linfoide B, T e NK; livelli bassi o moderati di PU.1 cooperano con Ikaros, mentre alti livelli di PU.1 deviano verso il lignaggio mieloide.",
    "clinicalPearl": "Delezioni o mutazioni loss-of-function nel gene IKZF1 (Ikaros) sono associate a leucemia linfoblastica acuta a cellule B ad alto rischio citogenetico e prognosi infausta.",
    "targetSectionId": "sec-0-differenziamento"
  },
  {
    "id": "gen-205",
    "lessonNumber": 6,
    "lessonTitle": "06. Organi Linfoidi Secondari & Traffico Leucocitario",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale specializzazione anatomica e molecolare delle venule ad endotelio alto (HEV) nella paracorticale linfonodale consente l'extravasazione selettiva dei linfociti naive rispetto a quelli effettori?",
    "options": [
      "Espressione costitutiva di adresine periferiche (PNAd: GlyCAM-1 e CD34 solfatati) riconosciute dalla L-selectina (CD62L)",
      "Assenza completa della membrana basale e presenza di fenestrature endoteliali aperte",
      "Espressione esclusiva di E-selectina e P-selectina inducibili solo da trombina",
      "Presenza di integrine VLA-4 espresse sulla membrana luminale endoteliale"
    ],
    "correctIndex": 0,
    "explanation": "Le cellule endoteliali cuboidi delle HEV espongono le PNAd (Peripheral Node Addressins) contenenti residui solfatati di sialil-Lewis X che mediano il rolling a bassa affinità della L-selectina (CD62L) espressa dai linfociti naive.",
    "clinicalPearl": "Quando un linfocita T si attiva ed acquisisce il fenotipo effettore o memoria effettrice (TEM), va incontro a shedding proteolitico della L-selectina, perdendo la capacità di ricircolare attraverso le HEV nei linfonodi periferici.",
    "targetSectionId": "sec-6-hev"
  },
  {
    "id": "gen-206",
    "lessonNumber": 6,
    "lessonTitle": "06. Organi Linfoidi Secondari & Traffico Leucocitario",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale compartimento della milza è direttamente deputato alla clearance immunitaria dei batteri incapsulati opsonizzati da IgM e complemento provenienti dal circolo sistemico?",
    "options": [
      "La guaina linfoide periarteriolare (PALS) T-dipendente",
      "La zona marginale della polpa bianca, ricca di linfociti B della zona marginale e macrofagi specializzati (MMM e MZM)",
      "La polpa rossa profonda a livello dei cordoni di Billroth contenenti esclusivamente piastrine",
      "Il centro germinativo della corticale splenica superficiale"
    ],
    "correctIndex": 1,
    "explanation": "La zona marginale circonda la polpa bianca e riceve direttamente il flusso arterioso; ospita i linfociti B della zona marginale (MZB) capaci di risposte T-indipendenti rapide contro polisaccaridi capsulari e macrofagi che fagocitano patogeni ematogeni.",
    "clinicalPearl": "I pazienti sottoposti a splenectomia per trauma o sferocitosi perdono questa barriera filtrante e vanno incontro al rischio di 'overwhelming post-splenectomy infection' (OPSI) fatale, necessitando di vaccinazione anti-pneumococcica, anti-meningococcica e anti-Haemophilus.",
    "targetSectionId": "sec-6-milza"
  },
  {
    "id": "gen-207",
    "lessonNumber": 6,
    "lessonTitle": "06. Organi Linfoidi Secondari & Traffico Leucocitario",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale meccanismo biochimico garantisce la compartimentazione anatomica differenziale dei linfociti B e T all'interno del linfonodo primario non stimolato?",
    "options": [
      "I linfociti B esprimono CCR7 e migrano verso CXCL13, mentre i linfociti T esprimono CXCR5 e migrano verso CCL19",
      "I linfociti T e B esprimono entrambi CXCR4 e vengono trattenuti esclusivamente nella midollare",
      "I linfociti B esprimono CXCR5 e vengono attratti nei follicoli da CXCL13 prodotto dalle FDC, mentre i linfociti T esprimono CCR7 e migrano nella paracorticale attratti da CCL19 e CCL21",
      "I linfociti T esprimono integrina alfa4-beta7 che ne impedisce l'accesso ai follicoli corticali"
    ],
    "correctIndex": 2,
    "explanation": "La segregazione zonale degli SLO è orchestrata da due assi paralleli: CXCR5/CXCL13 confina i linfociti B nei follicoli primari sostenuti dalle cellule dendritiche follicolari, mentre CCR7/CCL19/CCL21 attrae i linfociti T e le DC convenzionali nella paracorticale.",
    "clinicalPearl": "Durante l'attivazione linfoide, i linfociti B riducono CXCR5 e upregolano CCR7, mentre i T attivati upregolano CXCR5; questo rimodellamento permette l'incontro fisico dei due lignaggi al confine cortico-paracorticale per l'avvio della risposta T-dipendente.",
    "targetSectionId": "sec-6-segregazione"
  },
  {
    "id": "gen-208",
    "lessonNumber": 6,
    "lessonTitle": "06. Organi Linfoidi Secondari & Traffico Leucocitario",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale alterazione molecolare impedisce transitoriamente l'egresso dal linfonodo di un linfocita T naive che ha appena riconosciuto il complesso peptide-MHC sulla cellula dendritica?",
    "options": [
      "Upregulazione immediata del recettore CCR9",
      "Fosforilazione e blocco del recettore S1PR1 da parte di Lck",
      "Degradazione lisosomiale della L-selectina mediata da proteasoma",
      "Induzione precoce della proteina di membrana CD69 che complessa fisicamente e internalizza S1PR1"
    ],
    "correctIndex": 3,
    "explanation": "Il segnale del TCR induce rapidamente CD69 sulla membrana; CD69 si associa al recettore S1PR1 provocandone l'internalizzazione e degradazione, insensibilizzando il linfocito al gradiente di S1P e trattenendolo nel linfonodo per consentirne la proliferazione clonale.",
    "clinicalPearl": "Il farmaco Fingolimod (FTY720) agisce come modulatore funzionale di S1PR1 inducendone l'internalizzazione permanente nei linfociti, sequestrandoli nei linfonodi ed impedendo il loro stravaso nel sistema nervoso centrale nella sclerosi multipla.",
    "targetSectionId": "sec-6-egresso"
  },
  {
    "id": "gen-209",
    "lessonNumber": 1,
    "lessonTitle": "01. Barriere Epiteliali & Peptidi Antimicrobici",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale meccanismo d'azione biofisico caratterizza l'attività battericida delle defensine alfa umane (HD5 e HD6) prodotte costitutivamente dalle cellule di Paneth nell'ileo?",
    "options": [
      "Inserimento dipendente dalla carica cationica nel doppio strato fosfolipidico microbico ricco di cariche negative con formazione di pori multimerici che inducono lisi osmotica",
      "Idrolisi specifica dei legami ammidici del peptidoglicano tra acido N-acetilmuramico e N-acetilglucosamina",
      "Chelazione selettiva degli ioni ferro extracellulari con inibizione della sintesi di ATP batterica",
      "Inibizione competitiva della DNA girasi batterica mediante intercalazione genica"
    ],
    "correctIndex": 0,
    "explanation": "Le alfa-defensine sono peptidi anfipatici cationici ricchi in ponti disolfuro conservati; interagiscono elettrostaticamente con i lipidi batterici carichi negativamente, si inseriscono nella membrana e formano pori toroidali permeabilizzanti che portano alla lisi osmotica rapida.",
    "clinicalPearl": "Nei pazienti affetti da Malattia di Crohn ileale con polimorfismi inattivati di NOD2, la secrezione delle defensine HD5 e HD6 da parte delle cellule di Paneth è marcatamente ridotta, alterando la barriera mucosale e favorendo l'invasione batterica.",
    "targetSectionId": "sec-1-defensine"
  },
  {
    "id": "gen-210",
    "lessonNumber": 1,
    "lessonTitle": "01. Barriere Epiteliali & Peptidi Antimicrobici",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale enzima idrolitico secreto nella saliva, nelle lacrime e nei granuli dei neutrofili scinde specificamente il legame beta-1,4-glicosidico tra acido N-acetilmuramico (NAM) e N-acetilglucosamina (NAG)?",
    "options": [
      "Proteinasi 3",
      "Lisozima (muramidasi)",
      "Elastasi neutrofila",
      "Mieloperossidasi"
    ],
    "correctIndex": 1,
    "explanation": "Il lisozima è una muramidasi che idrolizza direttamente l'ossatura glicidica del peptidoglicano batterico scindendo i legami beta-1,4 tra NAM e NAG, risultando particolarmente efficace contro i batteri Gram-positivi la cui parete è direttamente esposta.",
    "clinicalPearl": "Nei batteri Gram-negativi, la membrana esterna ricca di LPS scherma lo strato di peptidoglicano dal lisozima; l'azione combinata di peptidi che disgregano la membrana esterna (come BPI o complemento) è necessaria per consentire l'accesso del lisozima.",
    "targetSectionId": "sec-1-lisozima"
  },
  {
    "id": "gen-211",
    "lessonNumber": 1,
    "lessonTitle": "01. Barriere Epiteliali & Peptidi Antimicrobici",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "In quale modo il peptide antimicrobico LL-37, derivato dalla proteolisi della catelicidina hCAP-18, può contribuire alla cronicizzazione dell'infiammazione autoimmune nel lupus e nella psoriasi?",
    "options": [
      "Attivando direttamente il recettore TCR dei linfociti T CD8+",
      "Inibendo la degradazione lisosomiale della mieloperossidasi",
      "Formando complessi stabili elettrostatici con frammenti di DNA self che proteggono l'acido nucleico dalle nucleasi e stimolano potentemente TLR9 nelle pDC",
      "Bloccando il recettore IL-10R sui linfociti T regolatori"
    ],
    "correctIndex": 2,
    "explanation": "LL-37 si lega al DNA self rilasciato da cellule apoptotiche o nei NET neutrofili; questi complessi compatti condensati vengono internalizzati per endocitosi nelle cellule dendritiche plasmacitoidi (pDC), dove attivano persistentemente TLR9 inducendo massiccia produzione di IFN di tipo I.",
    "clinicalPearl": "La 'segnatura interferonica' (IFN signature) riscontrabile nel sangue dei pazienti affetti da LES e nelle placche psoriasiche cutanee è sostenuta proprio da questo asse aberrante LL-37/DNA self/TLR9.",
    "targetSectionId": "sec-1-catelicidine"
  },
  {
    "id": "gen-212",
    "lessonNumber": 2,
    "lessonTitle": "02. Pattern Recognition Receptors: Toll-Like Receptors",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale proteina accessoria solubile o ancorata a GPI si associa al complesso TLR4/MD-2 per catturare e trasferire monomeri di lipopolisaccaride (LPS) complessati con LBP?",
    "options": [
      "CD11b",
      "CD18",
      "CD80",
      "CD14"
    ],
    "correctIndex": 3,
    "explanation": "LBP (Lipopolysaccharide Binding Protein) estrae LPS aggregato dal sangue e lo cede a CD14; CD14 trasferisce quindi il monomero lipidico alla tasca idrofobica di MD-2 associata a TLR4, innescando l'omodimerizzazione di TLR4 e l'avvio della trasduzione.",
    "clinicalPearl": "CD14 esiste in forma ancorata a GPI sui monociti/macrofagi e in forma solubile nel plasma (sCD14); durante la sepsi grave Gram-negativa, i livelli circolanti di sCD14 aumentano drammaticamente fungendo da mediatore dell'attivazione endoteliale.",
    "targetSectionId": "sec-2-tlr4"
  },
  {
    "id": "gen-213",
    "lessonNumber": 2,
    "lessonTitle": "02. Pattern Recognition Receptors: Toll-Like Receptors",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale eterodimero recettoriale della famiglia TLR discrimina specificamente i lipopeptidi triacilati tipici della parete di batteri e micobatteri rispetto a quelli diacilati?",
    "options": [
      "TLR2 / TLR1",
      "TLR2 / TLR6",
      "TLR4 / TLR5",
      "TLR7 / TLR8"
    ],
    "correctIndex": 0,
    "explanation": "TLR2 possiede una tasca idrofobica che accoglie due catene lipidiche; la terza catena dei lipopeptidi triacilati alloggia nella tasca adiacente fornita da TLR1. Al contrario, TLR6 non possiede questa tasca idrofobica supplementare e si eterodimerizza con TLR2 per riconoscere lipopeptidi diacilati.",
    "clinicalPearl": "L'uso differenziale di co-recettori eterodimerici (TLR2/1 vs TLR2/6) consente al sistema immunitario innato di ampliare il repertorio di ligandi microbici mantenendo un numero limitato di geni codificati nella linea germinale.",
    "targetSectionId": "sec-2-tlr2"
  },
  {
    "id": "gen-214",
    "lessonNumber": 2,
    "lessonTitle": "02. Pattern Recognition Receptors: Toll-Like Receptors",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale chaperonina multipasso del reticolo endoplasmatico è indispensabile per il corretto folding e il traffico intracellulare di tutti i TLR endosomiali (TLR3, TLR7, TLR8, TLR9)?",
    "options": [
      "Calreticulina",
      "UNC93B1",
      "Tapasina",
      "ERp57"
    ],
    "correctIndex": 1,
    "explanation": "UNC93B1 è una proteina transmembrana a 12 domini del RE che lega fisicamente i TLR endosomiali e ne guida il trasporto vescicolare attraverso il Golgi fino agli endosomi tardivi e lisosomi.",
    "clinicalPearl": "Mutazioni inattivanti autosomiche recessive in UNC93B1 nell'uomo aboliscono la localizzazione endosomiale di TLR3/7/8/9, provocando una grave predisposizione genetica all'encefalite erpetica severa da HSV-1 nell'infanzia.",
    "targetSectionId": "sec-2-unc93b1"
  },
  {
    "id": "gen-215",
    "lessonNumber": 2,
    "lessonTitle": "02. Pattern Recognition Receptors: Toll-Like Receptors",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale tirosina o serina-treonina chinasi intracellulare viene reclutata direttamente dall'adattatore MyD88 tramite interazione omotipica tra domini di morte (Death Domain)?",
    "options": [
      "ZAP-70",
      "TBK1",
      "IRAK4 (interleukin-1 receptor-associated kinase 4)",
      "JAK2"
    ],
    "correctIndex": 2,
    "explanation": "A valle del legame del ligando, MyD88 oligomerizza tramite i suoi domini TIR e recluta, mediante domini Death Domain (DD), la chinasi IRAK4 e successivamente IRAK1 e IRAK2, formando il complesso multiproteico ad alta densità denominato 'myddosoma'.",
    "clinicalPearl": "Pazienti pediatrici con deficit congenito autosomico recessivo di IRAK4 o MyD88 presentano infezioni batteriche piogeniche invasive recidivanti (soprattutto da Streptococcus pneumoniae e Staphylococcus aureus) con una caratteristica paradossale: scarsa o assente febbre e bassa elevazione della PCR.",
    "targetSectionId": "sec-2-irak4"
  },
  {
    "id": "gen-216",
    "lessonNumber": 2,
    "lessonTitle": "02. Pattern Recognition Receptors: Toll-Like Receptors",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Attraverso quale adattatore esclusivo il recettore TLR3 attiva la chinasi TBK1 inducendo la dimerizzazione e traslocazione nucleare di IRF3 per la trascrizione di Interferone-beta?",
    "options": [
      "MyD88",
      "TIRAP / Mal",
      "TRAM",
      "TRIF (TICAM-1)"
    ],
    "correctIndex": 3,
    "explanation": "TLR3 non possiede il motivo di legame per MyD88 e segnala unicamente attraverso TRIF (TIR-domain-containing adapter-inducing interferon-beta); TRIF recluta TBK1 ed IKK-epsilon, che fosforilano direttamente il fattore trascrizionale IRF3.",
    "clinicalPearl": "TLR4 è l'unico TLR capace di utilizzare entrambe le vie: sulla membrana plasmatica utilizza TIRAP/MyD88 per indurre citochine infiammatorie precoci, e dopo internalizzazione endosomiale recluta TRAM/TRIF per indurre IFN di tipo I.",
    "targetSectionId": "sec-2-trif"
  },
  {
    "id": "gen-217",
    "lessonNumber": 3,
    "lessonTitle": "03. Sensori Intracellulari: NLR, RLR, STING & Inflammasomi",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale costituente biochimico del peptidoglicano batterico è riconosciuto con altissima specificità dal recettore citosolico NOD1?",
    "options": [
      "Acido meso-diaminopimelico (iE-DAP), presente prevalentemente nei batteri Gram-negativi",
      "Muramil dipeptide (MDP), conservato in tutti i Gram-positivi e Gram-negativi",
      "Acido lipoteicoico di membrana",
      "D-alanil-D-alanina terminale"
    ],
    "correctIndex": 0,
    "explanation": "NOD1 riconosce specificamente peptidi contenenti acido D-glutamil-meso-diaminopimelico (iE-DAP), un mattoncino strutturale peculiare della parete dei batteri Gram-negativi e di alcuni Gram-positivi (come Listeria e Bacillus).",
    "clinicalPearl": "Al contrario, NOD2 riconosce il muramil dipeptide (MDP), comune sia ai Gram-positivi che ai Gram-negativi; la ridotta funzione di NOD2 è strettamente associata alla patogenesi della Malattia di Crohn ileale.",
    "targetSectionId": "sec-3-nod1"
  },
  {
    "id": "gen-218",
    "lessonNumber": 3,
    "lessonTitle": "03. Sensori Intracellulari: NLR, RLR, STING & Inflammasomi",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale proteina adattatrice citoplasmatica contenente un dominio CARD viene reclutata dagli oligomeri di NOD1 e NOD2 per attivare il complesso IKK e le MAP chinasi?",
    "options": [
      "MyD88",
      "RIPK2 (noto anche come RICK o CARDIAK)",
      "STING",
      "TRIF"
    ],
    "correctIndex": 1,
    "explanation": "Dopo il legame con il peptidoglicano, NOD1 e NOD2 oligomerizzano e reclutano la chinasi RIPK2 mediante interazione omotipica CARD-CARD; RIPK2 viene poliubiquitinata e funge da scaffold per attivare TAK1 e il complesso IKK.",
    "clinicalPearl": "Inibitori farmacologici a piccole molecole della chinasi RIPK2 sono attualmente in fase di sperimentazione clinica per bloccare l'infiammazione cronica mediata da NLR nelle patologie infiammatorie croniche intestinali.",
    "targetSectionId": "sec-3-ripk2"
  },
  {
    "id": "gen-219",
    "lessonNumber": 3,
    "lessonTitle": "03. Sensori Intracellulari: NLR, RLR, STING & Inflammasomi",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale sensore citosolico riconosce direttamente molecole di DNA a doppio filamento intracellulare aberrante catalizzando la sintesi del secondo messaggero non canonico 2'3'-cGAMP?",
    "options": [
      "RIG-I",
      "MDA5",
      "cGAS (cyclic GMP-AMP synthase)",
      "AIM2"
    ],
    "correctIndex": 2,
    "explanation": "cGAS si lega al dsDNA citosolico in maniera indipendente dalla sequenza e catalizza la condensazione di GTP e ATP formando il dinucleotide ciclico 2'3'-cGAMP, che diffonde verso la membrana del reticolo endoplasmatico attivando STING.",
    "clinicalPearl": "Mutazioni gain-of-function costitutivamente attive in STING sono causa della vasculopatia associata a STING con esordio nell'infanzia (sindrome SAVI), una grave interferonopatia di tipo I caratterizzata da necrosi periferica delle dita e fibrosi polmonare.",
    "targetSectionId": "sec-3-cgas"
  },
  {
    "id": "gen-220",
    "lessonNumber": 3,
    "lessonTitle": "03. Sensori Intracellulari: NLR, RLR, STING & Inflammasomi",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale caratteristica biochimica differenzia il ligando a RNA virale riconosciuto dall'elicasi citosolica RIG-I rispetto a quello riconosciuto da MDA5?",
    "options": [
      "RIG-I lega dsDNA metilato, mentre MDA5 lega DNA a singolo filamento",
      "RIG-I riconosce ssRNA privo di modificazioni, mentre MDA5 lega mRNA cellulare con cappuccio 5'",
      "RIG-I richiede RNA ribosomiale 28S, mentre MDA5 riconosce tRNA transfer",
      "RIG-I riconosce dsRNA o ssRNA corti recanti un gruppo 5'-trifosfato o 5'-difosfato non mascherato, mentre MDA5 riconosce lunghe molecole di dsRNA ad alto peso molecolare"
    ],
    "correctIndex": 3,
    "explanation": "RIG-I riconosce l'estremità 5'-trifosfato (5'-ppp) o difosfato di duplex di RNA virali privi di cap cellulare; MDA5 riconosce invece lunghi filamenti doppi di dsRNA (generati ad esempio durante la replicazione di Picornavirus come Coxsackie ed Enterovirus). Entrambi segnalano tramite l'adattatore mitocondriale MAVS.",
    "clinicalPearl": "Mutazioni autosomiche dominanti gain-of-function nel gene IFIH1 (codificante MDA5) causano la Sindrome di Aicardi-Goutières di tipo 7, caratterizzata da encefalopatia infiammatoria subacuta e iperproduzione continua di IFN-alfa.",
    "targetSectionId": "sec-3-rlr"
  },
  {
    "id": "gen-221",
    "lessonNumber": 4,
    "lessonTitle": "04. PRR, Inflammasoma & Risposta Infiammatoria",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale proteina adattatrice dell'inflammasoma funge da ponte molecolare possedendo sia un dominio pirinico (PYD) sia un dominio di reclutamento della caspasi (CARD)?",
    "options": [
      "ASC (noto anche come PYCARD)",
      "MyD88",
      "MAVS",
      "TIRAP"
    ],
    "correctIndex": 0,
    "explanation": "ASC (Apoptosis-associated speck-like protein containing a CARD) interagisce tramite il suo dominio PYD con il sensore NLRP3 (o AIM2) e tramite il suo dominio CARD con la pro-caspasi-1, assemblando la piattaforma filamentosa che attiva la caspasi.",
    "clinicalPearl": "Dopo la piroptosi cellulare, gli aggregati oligomerici di ASC rimangono stabili nello spazio extracellulare (specks) dove continuano a processare citochine e amplificare l'infiammazione circostante.",
    "targetSectionId": "sec-4-asc"
  },
  {
    "id": "gen-222",
    "lessonNumber": 4,
    "lessonTitle": "04. PRR, Inflammasoma & Risposta Infiammatoria",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale proteina citosolica viene selettivamente clivata dalla caspasi-1 per rilasciare il suo dominio N-terminale citotossico che polimerizza nella membrana plasmatica formando i pori di piroptosi?",
    "options": [
      "Perforina",
      "Gasdermina D (GSDMD)",
      "Bad",
      "FasL"
    ],
    "correctIndex": 1,
    "explanation": "La caspasi-1 (o le caspasi-4/5 nell'inflammasoma non canonico) taglia la Gasdermina D separando il dominio C-terminale autoinibitorio dal dominio N-terminale; quest'ultimo oligomerizza nella membrana formando pori da 10-14 nm che causano lisi cellulare piroptotica e rilascio di IL-1beta e IL-18.",
    "clinicalPearl": "Il farmaco Disulfiram, storicamente impiegato nel disassuefamento dall'alcol, è stato recentemente scoperto inibire la piroptosi bloccando covalentemente la cisteina 191 della Gasdermina D impedendone la porazione.",
    "targetSectionId": "sec-4-gsdmd"
  },
  {
    "id": "gen-223",
    "lessonNumber": 4,
    "lessonTitle": "04. PRR, Inflammasoma & Risposta Infiammatoria",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Nelle vie dell'inflammasoma 'non canonico', quale componente batterico viene legato direttamente nel citoplasma delle cellule mieloidi umane dalle caspasi infiammatorie caspasi-4 e caspasi-5?",
    "options": [
      "Acido teicoico",
      "Flagellina",
      "Lipide A del Lipopolisaccaride (LPS)",
      "RNA transfer microbico"
    ],
    "correctIndex": 2,
    "explanation": "Le caspasi-4 e 5 umane (omologhe della caspasi-11 murina) possiedono un dominio CARD che interagisce direttamente ad alta affinità con il lipide A dell'LPS penetrato nel citosol, provocando la loro autoattivazione e il clivaggio della Gasdermina D indipendentemente da NLRP3.",
    "clinicalPearl": "Questa via dell'inflammasoma non canonico è il fulcro fisiopatologico dello shock settico endotossico fulminante da batteri Gram-negativi intracellulari come Salmonella e Shigella.",
    "targetSectionId": "sec-4-noncanonico"
  },
  {
    "id": "gen-224",
    "lessonNumber": 4,
    "lessonTitle": "04. PRR, Inflammasoma & Risposta Infiammatoria",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale inflammasoma citosolico è costituito da una proteina contenente un dominio HIN-200 che riconosce specificamente il DNA a doppio filamento citosolico sia virale che batterico?",
    "options": [
      "NLRP1",
      "NLRC4",
      "NOD2",
      "AIM2 (Absent In Melanoma 2)"
    ],
    "correctIndex": 3,
    "explanation": "AIM2 appartiene alla famiglia delle proteine ALR (AIM2-like receptors); il suo dominio C-terminale HIN-200 lega il dsDNA citosolico, liberando il dominio N-terminale PYD che recluta ASC e assembla l'inflammasoma.",
    "clinicalPearl": "AIM2 è essenziale per la risposta infiammatoria protettiva contro patogeni intracellulari quali Francisella tularensis, Cytomegalovirus e Listeria monocytogenes.",
    "targetSectionId": "sec-4-aim2"
  },
  {
    "id": "gen-225",
    "lessonNumber": 4,
    "lessonTitle": "04. PRR, Inflammasoma & Risposta Infiammatoria",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale citochina pro-infiammatoria sintetizzata in forma inattiva (pro-forma) richiede il taglio proteolitico da parte della caspasi-1 per acquisire la capacità biologica di legarsi al recettore IL-1R1?",
    "options": [
      "Interleuchina-1-beta (IL-1b)",
      "Tumor Necrosis Factor-alfa (TNF-a)",
      "Interleuchina-6 (IL-6)",
      "Interleuchina-12 (IL-12)"
    ],
    "correctIndex": 0,
    "explanation": "La pro-IL-1beta (31 kDa) è inattiva ed è priva di sequenza segnale di secrezione; la caspasi-1 la scinde a livello dell'aspartato 116 generando la forma matura biologicamente attiva da 17 kDa.",
    "clinicalPearl": "L'antagonista ricombinante del recettore di IL-1 (Anakinra) e l'anticorpo monoclonale anti-IL-1beta (Canakinumab) sono farmaci biologici salvavita nelle sindromi periodiche associate a criopirina (CAPS / Muckle-Wells) dovute a iperattivazione genetica costitutiva di NLRP3.",
    "targetSectionId": "sec-4-il1b"
  },
  {
    "id": "gen-226",
    "lessonNumber": 4,
    "lessonTitle": "04. PRR, Inflammasoma & Risposta Infiammatoria",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale recettore lectinico di tipo C (CLR) espresso dalle cellule dendritiche riconosce i beta-1,3-glucani della parete fungina e trasduce attraverso l'adattatore CARD9?",
    "options": [
      "DC-SIGN (CD209)",
      "Dectin-1 (CLEC7A)",
      "Recettore del Mannosio (CD206)",
      "Mincle (CLEC4E)"
    ],
    "correctIndex": 1,
    "explanation": "Dectin-1 possiede un motivo citoplasmatico emisferico ITAM (hemITAM) che recluta la tirosina chinasi Syk; Syk attiva il complesso CARD9-BCL10-MALT1, innescando la trascrizione di IL-6 e IL-23 che indirizzano il differenziamento Th17 antifungino.",
    "clinicalPearl": "Pazienti con mutazioni omozigoti inattivati in CARD9 o Dectin-1 sviluppano candidosi mucocutanea cronica severa e infezioni invasive letali del sistema nervoso centrale da funghi filamentosi.",
    "targetSectionId": "sec-4-dectin1"
  },
  {
    "id": "gen-227",
    "lessonNumber": 4,
    "lessonTitle": "04. PRR, Inflammasoma & Risposta Infiammatoria",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale lectina di membrana transmembrana (CD209) riconosce residui ad alto contenuto di mannosio e fucose su gp120 di HIV e sulla parete di Mycobacterium tuberculosis?",
    "options": [
      "Dectin-2",
      "Langerina (CD207)",
      "DC-SIGN",
      "Selectina E"
    ],
    "correctIndex": 2,
    "explanation": "DC-SIGN è una C-type lectina espressa su macrofagi e cellule dendritiche mieloidi; internalizza patogeni glicosilati per la presentazione antigenica ma viene sfruttata da HIV per essere trasportato intatto dalle DC ai linfonodi drenanti.",
    "clinicalPearl": "Questo meccanismo permette ad HIV di infettare in trans i linfociti T CD4+ nella paracorticale linfonodale senza necessità di replicarsi all'interno della cellula dendritica trasportatrice.",
    "targetSectionId": "sec-4-dcsign"
  },
  {
    "id": "gen-228",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale subunità recettoriale comune (CD132) è condivisa dai recettori eterodimerici o eterotrimerici per IL-2, IL-4, IL-7, IL-9, IL-15 e IL-21?",
    "options": [
      "Subunità gp130",
      "Catena beta comune (CD131)",
      "Catena alfa comune (CD25)",
      "Catena gamma comune (gamma-c)"
    ],
    "correctIndex": 3,
    "explanation": "La catena gamma comune (gamma-c o CD132) è la componente essenziale di trasduzione condivisa da tutte le citochine della famiglia dell'IL-2 ed è costitutivamente associata alla tirosina chinasi citoplasmatica JAK3.",
    "clinicalPearl": "Mutazioni nel gene IL2RG codificante la catena gamma comune sono responsabili della SCID legata al cromosoma X (X-SCID), con totale assenza di linfociti T (per difetto di IL-7) e cellule NK (per difetto di IL-15).",
    "targetSectionId": "sec-5-gammac"
  },
  {
    "id": "gen-229",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale chinasi della famiglia Janus Kinase (JAK) è espressa in modo selettivo nel sistema ematopoietico ed interagisce unicamente con la coda citoplasmatica della catena gamma comune (gamma-c)?",
    "options": [
      "JAK3",
      "JAK1",
      "JAK2",
      "Tyk2"
    ],
    "correctIndex": 0,
    "explanation": "A differenza di JAK1, JAK2 e Tyk2 che possiedono un'espressione ubiquitaria e mediano segnali di molteplici ormoni e interferoni, JAK3 è ristretta al compartimento linfoide e si associa specificamente ed esclusivamente a gamma-c.",
    "clinicalPearl": "Mutazioni autosomiche recessive del gene JAK3 causano una forma di SCID con fenotipo clinico ed immunologico rigorosamente identico a quello della X-SCID (linfociti T negativi, NK negativi, B normali ma non funzionanti).",
    "targetSectionId": "sec-5-jak3"
  },
  {
    "id": "gen-230",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale fattore di trascrizione della famiglia STAT viene specificamente fosforilato su tirosina a valle del legame di IL-4 al suo recettore, guidando il differenziamento Th2 e lo switch anticorpale a IgE?",
    "options": [
      "STAT4",
      "STAT6",
      "STAT3",
      "STAT1"
    ],
    "correctIndex": 1,
    "explanation": "L'ingaggio del recettore per IL-4 attiva JAK1 e JAK3, che fosforilano STAT6; STAT6 dimerizza tramite interazioni SH2-fosfotirosina, trasloca nel nucleo e attiva il master regulator GATA-3 e la trascrizione germinativa del locus IgE.",
    "clinicalPearl": "Il farmaco biologico Dupilumab blocca la subunità IL-4R-alfa condivisa dai recettori di IL-4 e IL-13, arrestando la fosforilazione di STAT6 ed è gold-standard nella dermatite atopica e nell'asma grave eosinofilico.",
    "targetSectionId": "sec-5-stat6"
  },
  {
    "id": "gen-231",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale famiglia di proteine indotte da citochine agisce come meccanismo a feedback negativo spegnendo la via JAK-STAT tramite reclutamento del macchinario di ubiquitinazione e blocco del sito catalitico di JAK?",
    "options": [
      "Famiglia Caspasi",
      "Proteine Granzimi",
      "Proteine SOCS (Suppressor of Cytokine Signaling)",
      "Proteine Bcl-2"
    ],
    "correctIndex": 2,
    "explanation": "Le proteine SOCS (come SOCS1 e SOCS3) contengono un dominio SH2 che si lega alle tirosine fosforilate di JAK o del recettore, una regione KIR che inibisce la tasca catalitica chinasica e un SOCS-box che recluta l'ubiquitina ligasi E3 per la degradazione proteasomica del complesso.",
    "clinicalPearl": "Topi privi di SOCS1 muoiono precocemente per infiammazione multiorgano fulminante scatenata da un'ipersensibilità incontrollata ai normali livelli basali di IFN-gamma.",
    "targetSectionId": "sec-5-socs"
  },
  {
    "id": "gen-232",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale mutazione autosomica dominante a carico del fattore trascrizionale STAT3 causa la Sindrome da Iper-IgE (Sindrome di Job), caratterizzata da mancato differenziamento Th17 e ascessi freddi ricorrenti?",
    "options": [
      "Mutazione duplicativa del promotore di STAT3",
      "Mutazione del dominio transattivatore C-terminale con iperattivazione costitutiva",
      "Delezione del gene codificante ROR-gamma-t",
      "Mutazioni 'loss-of-function' con effetto dominante negativo nel dominio SH2 o di legame al DNA di STAT3"
    ],
    "correctIndex": 3,
    "explanation": "Le mutazioni eterozigoti dominanti-negative in STAT3 impediscono la corretta dimerizzazione e segnalazione nucleare a valle di IL-6, IL-21 e IL-23, determinando un collasso della differenziazione dei linfociti Th17 e grave compromissione della risposta antifungina e antibatterica.",
    "clinicalPearl": "La Sindrome di Job è caratterizzata da dermatite eczematosa grave, infezioni polmonari e cutanee ricorrenti da stafilococco senza calore o eritema (ascessi freddi) e livelli sierici di IgE estremamente elevati (> 2000 UI/ml).",
    "targetSectionId": "sec-5-stat3"
  },
  {
    "id": "gen-233",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale recettore per chemochine espresso ad alti livelli dai neutrofili risponde con estrema affinità a CXCL8 (IL-8) guidando il loro reclutamento massivo nei siti di flogosi acuta?",
    "options": [
      "CXCR1 e CXCR2",
      "CCR3 e CCR4",
      "CCR7",
      "CXCR5"
    ],
    "correctIndex": 0,
    "explanation": "CXCR1 (selettivo per CXCL8 e CXCL6) e CXCR2 (che riconosce CXCL8 e altre chemochine con motivo ELR come CXCL1 e CXCL2) sono GPCR accoppiati a proteine Gi che inducono l'attivazione integrinica e la migrazione direzionale dei neutrofili.",
    "clinicalPearl": "L'asse CXCL8-CXCR1/2 è il principale bersaglio chemochinico indagato per limitare il danno polmonare acuto da infiltrazione neutrofila massiva nella sindrome da distress respiratorio acuto (ARDS).",
    "targetSectionId": "sec-5-cxcr1"
  },
  {
    "id": "gen-234",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale classe strutturale di chemochine possiede un singolo residuo di cisteina N-terminale (o due cisteine prive del consueto ponte disolfuro) ed è rappresentata da XCL1 (linfotactina)?",
    "options": [
      "Chemochine CX3C",
      "Chemochine C (o gamma)",
      "Chemochine CC (o beta)",
      "Chemochine CXC (o alfa)"
    ],
    "correctIndex": 1,
    "explanation": "Le chemochine della classe C (XCL1 e XCL2) mancano della prima e della terza cisteina del motivo tetra-cisteinico canonico; XCL1 è secreta dalle cellule NK e CTL e lega selettivamente il recettore XCR1 espresso sulle cellule dendritiche cross-presentanti cDC1.",
    "clinicalPearl": "L'asse XCL1-XCR1 è fondamentale per la cooperazione fisica tra cellule dendritiche cDC1 e linfociti CD8+ nell'avvio della risposta citotossica antivirale e antitumorale.",
    "targetSectionId": "sec-5-xcl1"
  },
  {
    "id": "gen-235",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale chemochina della famiglia CX3C è espressa come proteina integrale di membrana su un lungo stelo mucinoso dall'endotelio infiammato fungendo contemporaneamente da molecola di adesione e chemochina solubile dopo taglio proteolitico?",
    "options": [
      "CCL2 (MCP-1)",
      "CXCL12 (SDF-1)",
      "CX3CL1 (Frattalchina)",
      "CCL11 (Eotassina)"
    ],
    "correctIndex": 2,
    "explanation": "La frattalchina (CX3CL1) è l'unico membro noto della famiglia CX3C; ancorata alla membrana endoteliale cattura i monociti e le cellule NK esprimenti CX3CR1 anche sotto flusso ematico elevato, e quando clivata da metalloproteinasi (ADAM10) rilascia un frammento chemiotattico solubile.",
    "clinicalPearl": "Il polimorfismo genico CX3CR1-M280I è stato associato a una ridotta adesione monocitaria e a una protezione relativa contro lo sviluppo della placca aterosclerotica coronarica.",
    "targetSectionId": "sec-5-frattalchina"
  },
  {
    "id": "gen-236",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale proteina G eterotrimerica media tipicamente la trasduzione del segnale a valle dei recettori chemochinici a 7 eliche transmembrana (GPCR) ed è sensibile all'inattivazione mediata dalla tossina della pertosse?",
    "options": [
      "Proteina G-alfa-s",
      "Proteina G-alfa-12/13",
      "Proteina G-alfa-q",
      "Proteina G-alfa-i"
    ],
    "correctIndex": 3,
    "explanation": "I recettori per chemochine legano proteine eterotrimeriche contenenti la subunità G-alfa-i; il rilascio del dimero G-beta-gamma attiva la fosfolipasi C-beta e le vie Ras/Rho per la polimerizzazione dell'actina e la chemiotassi direzionale, mentre G-alfa-i inibisce l'adenilato ciclasi.",
    "clinicalPearl": "La tossina della pertosse catalizza la ADP-ribosilazione della subunità G-alfa-i bloccandone irreversibilmente la funzione; questo causa un difetto nell'extravasazione linfoide che si manifesta clinicamente con marcata leucocitosi linfocitaria nel sangue periferico.",
    "targetSectionId": "sec-5-gpcr"
  },
  {
    "id": "gen-237",
    "lessonNumber": 1,
    "lessonTitle": "01. Fondamenti del Sistema Immunitario ed Ematopoiesi",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale popolazione linfoide atipica risiede prevalentemente nei seni linfatici sottomandibolari e peritoneali, produce anticorpi naturali IgM polireattivi in assenza di cooperazione T e si autorinnova per divisione periferica?",
    "options": [
      "Linfociti B-1 (prevalentemente B-1a CD5-positivi)",
      "Linfociti B follicolari naive convenzionali (B-2)",
      "Linfociti B della memoria centrale",
      "Cellule dendritiche follicolari"
    ],
    "correctIndex": 0,
    "explanation": "I linfociti B-1 originano durante la vita fetale e persistono nelle cavità sierose (pleurica e peritoneale); generano gran parte delle IgM naturali circolanti contro antigeni batterici comuni come la fosfocolina e polisaccaridi capsulari, senza necessità di ipermutazione somatica.",
    "clinicalPearl": "Le IgM naturali prodotte dai linfociti B-1 forniscono una prima linea essenziale di difesa umorale immediata prima che si sviluppi la risposta adattativa convenzionale centro-germinativa mediata dai linfociti B-2.",
    "targetSectionId": "sec-0-b1"
  },
  {
    "id": "gen-238",
    "lessonNumber": 1,
    "lessonTitle": "01. Fondamenti del Sistema Immunitario ed Ematopoiesi",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale ligando espresso dalle cellule epiteliali timiche corticali (cTEC) attiva il recettore Notch-1 sui precursori precoci ETP imponendo il commitment irreversibile verso il lignaggio T?",
    "options": [
      "Jagged-2",
      "DLL4 (Delta-Like Ligand 4)",
      "FGF-7",
      "Wnt-3a"
    ],
    "correctIndex": 1,
    "explanation": "Il legame di DLL4 su Notch-1 induce il clivaggio proteolitico mediato da gamma-secretasi con rilascio del dominio intracellulare NICD, che trasloca nel nucleo e attiva geni essenziali (Gata3, Tcf7) reprimendo il potenziale differenziativo verso cellule B e mieloidi.",
    "clinicalPearl": "Mutazioni attivanti con guadagno di funzione nel recettore NOTCH1 si riscontrano in oltre il 50% dei casi di Leucemia Linfoblastica Acuta a cellule T (T-ALL).",
    "targetSectionId": "sec-0-notch1"
  },
  {
    "id": "gen-239",
    "lessonNumber": 6,
    "lessonTitle": "06. Organi Linfoidi Secondari & Traffico Leucocitario",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale struttura istologica dei cordoni midollari della milza contiene una ricca rete reticolare di endotelio fenestrato a botte attraverso cui gli eritrociti devono spremersi per verificare la loro deformabilità?",
    "options": [
      "Arteriole penicillari spiralizzate",
      "Seno marginale perisinusoidale",
      "Seni venosi splenici della polpa rossa",
      "Cripte della polpa bianca"
    ],
    "correctIndex": 2,
    "explanation": "Nella polpa rossa della milza, il sangue fuoriesce dalle arteriole aperte nei cordoni di Billroth; per rientrare nella circolazione sistemica attraverso i seni venosi, gli eritrociti devono passare attraverso fessure interendoteliali di 2-3 micrometri; globuli rossi invecchiati o rigidi vengono trattenuti e fagocitati dai macrofagi (emocateresi).",
    "clinicalPearl": "Nella sferocitosi ereditaria, la perdita di spectrina o anchirina rende l'eritrocita sferico e non deformabile, provocando sequestro ed emolisi extravascolare massiva nei cordoni splenici.",
    "targetSectionId": "sec-6-splenocateresi"
  },
  {
    "id": "gen-240",
    "lessonNumber": 6,
    "lessonTitle": "06. Organi Linfoidi Secondari & Traffico Leucocitario",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale integrina leucocitaria dimerica (nota anche come LPAM-1) interagisce con MAdCAM-1 sulle venule mucosali della lamina propria intestinale guidando l'homing enterico?",
    "options": [
      "Integrina alfa-L / beta-2 (LFA-1)",
      "Integrina alfa-4 / beta-1 (VLA-4)",
      "Integrina alfa-X / beta-2 (CD11c/CD18)",
      "Integrina alfa-4 / beta-7"
    ],
    "correctIndex": 3,
    "explanation": "L'integrina alfa4-beta7 viene indotta sui linfociti T e B durante il priming nei linfonodi mesenterici o placche di Peyer in presenza di acido retinoico; lega selettivamente MAdCAM-1 espressa dall'endotelio delle mucose intestinali.",
    "clinicalPearl": "L'anticorpo monoclonale Vedolizumab lega specificamente l'integrina alfa4-beta7 bloccando il reclutamento selettivo dei linfociti T nella mucosa intestinale infiammata, ed è utilizzato nella Colite Ulcerosa e nella Malattia di Crohn senza causare immunosoppressione sistemica.",
    "targetSectionId": "sec-6-alfa4beta7"
  },
  {
    "id": "gen-241",
    "lessonNumber": 1,
    "lessonTitle": "01. Barriere Epiteliali & Peptidi Antimicrobici",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale proteina plasmatica a ferro-chelante secreta nei granuli secondari dei neutrofili e nei fluidi mucosali sottrae ioni Fe3+ liberi ai batteri bloccandone la crescita?",
    "options": [
      "Lattoferrina",
      "Aptoglobina",
      "Ceruloplasmina",
      "Ferritina citosolica"
    ],
    "correctIndex": 0,
    "explanation": "La lattoferrina lega due ioni Fe3+ ad altissima affinità a pH fisiologico ed acido, privando i microbi extracellulari di ferro essenziale per la respirazione e la duplicazione enzimatica.",
    "clinicalPearl": "Il dosaggio della lattoferrina fecale, analogamente alla calprotectina, riflette la degranulazione dei neutrofili nella mucosa intestinale ed è ampiamente usato come marcatore non invasivo di infiammazione intestinale attiva.",
    "targetSectionId": "sec-1-lattoferrina"
  },
  {
    "id": "gen-242",
    "lessonNumber": 1,
    "lessonTitle": "01. Barriere Epiteliali & Peptidi Antimicrobici",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale famiglia di proteine eterodimeriche citosoliche solubili dei neutrofili (S100A8 e S100A9) esercita azione antimicrobica chelando gli ioni zinco e manganese?",
    "options": [
      "Selectine",
      "Calprotectina",
      "Defensine",
      "Catelicidine"
    ],
    "correctIndex": 1,
    "explanation": "La calprotectina è un complesso eterooligomerico di S100A8 e S100A9 che lega reversibilmente bivalenti come Zn2+ e Mn2+, inibendo l'attività di metalloenzimi batterici come la superossido dismutasi.",
    "clinicalPearl": "La calprotectina fecale è il marcatore di laboratorio più utilizzato per differenziare la sindrome dell'intestino irritabile (valori normali) da una riacutizzazione di IBD (valori marcatamente elevati).",
    "targetSectionId": "sec-1-calprotectina"
  },
  {
    "id": "gen-243",
    "lessonNumber": 2,
    "lessonTitle": "02. Pattern Recognition Receptors: Toll-Like Receptors",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale ligando microbico è riconosciuto dal recettore omodimerico TLR5 espresso sulla membrana basolaterale delle cellule epiteliali intestinali?",
    "options": [
      "Peptidoglicano insolubile",
      "Lipoteicoico",
      "Flagellina batterica monomerica",
      "Zimosano"
    ],
    "correctIndex": 2,
    "explanation": "TLR5 riconosce la flagellina monomerica (proteina che costituisce i flagelli dei batteri mobili); la localizzazione basolaterale negli enterociti evita che venga costantemente attivato dai batteri commensali luminali, rispondendo solo se la barriera viene oltrepassata.",
    "clinicalPearl": "Polimorfismi con codoni di stop prematuri nel gene TLR5 (TLR5-392STOP) si associano a una ridotta risposta infiammatoria e aumentata suscettibilità alla polmonite da Legionella pneumophila.",
    "targetSectionId": "sec-2-tlr5"
  },
  {
    "id": "gen-244",
    "lessonNumber": 2,
    "lessonTitle": "02. Pattern Recognition Receptors: Toll-Like Receptors",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale TLR endosomiale riconosce specificamente molecole di ssRNA a singolo filamento ricche in guanosina e uridina tipiche di virus come HIV, Influenza e SARS-CoV-2?",
    "options": [
      "TLR3",
      "TLR9",
      "TLR4",
      "TLR7 e TLR8"
    ],
    "correctIndex": 3,
    "explanation": "TLR7 e TLR8 sono sensori endosomiali specializzati per l'ssRNA virale e ribonucleotidi sintetici (es. imidazochinoline); TLR7 è espresso potentemente nelle cellule dendritiche plasmacitoidi inducendo interferoni di tipo I, mentre TLR8 è espresso nei monociti/macrofagi.",
    "clinicalPearl": "Il farmaco Imiquimod è un agonista sintetico topico di TLR7 utilizzato nel trattamento dei condilomi acuminati e del carcinoma basocellulare superficiale cutaneo.",
    "targetSectionId": "sec-2-tlr7"
  },
  {
    "id": "gen-245",
    "lessonNumber": 2,
    "lessonTitle": "02. Pattern Recognition Receptors: Toll-Like Receptors",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale proteina adattatrice citoplasmatica funge da ponte reclutando MyD88 specificamente alla coda intracellulare dei recettori TLR2 e TLR4 sulla membrana plasmatica?",
    "options": [
      "TIRAP (noto anche come Mal)",
      "TRIF",
      "TRAM",
      "RIPK1"
    ],
    "correctIndex": 0,
    "explanation": "TIRAP possiede un dominio legante i fosfoinositidi (PIP2) che lo ancora alla membrana plasmatica; funge da adattatore di smistamento che collega i domini TIR di TLR2 o TLR4 alla proteina MyD88.",
    "clinicalPearl": "Un polimorfismo comune eterozigote inattivo in TIRAP (S180L) conferisce protezione parziale contro diverse infezioni invasive da pneumococco e meningococco attenuando la tempesta citochinica deleteria.",
    "targetSectionId": "sec-2-tirap"
  },
  {
    "id": "gen-246",
    "lessonNumber": 2,
    "lessonTitle": "02. Pattern Recognition Receptors: Toll-Like Receptors",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale proteina chinasi viene attivata a valle del complesso ubiquitina-dipendente formato da TRAF6 per fosforilare e attivare il complesso IKK (IKK-alfa/beta/gamma)?",
    "options": [
      "ZAP-70",
      "TAK1 (TGF-beta activated kinase 1)",
      "Akt / PKB",
      "Fyn"
    ],
    "correctIndex": 1,
    "explanation": "TRAF6 sintetizza catene di poliubiquitina legate a Lys63 che reclutano il complesso TAK1-TAB1-TAB2; TAK1 attivato fosforila la subunità IKK-beta del complesso IKK, provocando la fosforilazione e successiva degradazione di I-kappa-B-alfa.",
    "clinicalPearl": "L'attivazione di TAK1 è il nodo di convergenza comune per l'induzione nucleare di NF-kappa-B a valle di TLR, recettore di IL-1 (IL-1R) e recettore del TNF (TNFR1).",
    "targetSectionId": "sec-2-tak1"
  },
  {
    "id": "gen-247",
    "lessonNumber": 3,
    "lessonTitle": "03. Sensori Intracellulari: NLR, RLR, STING & Inflammasomi",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale dominio strutturale conservato permette ai recettori NLR (NOD-Like Receptors) di legare nucleotidi tri-fosfato (ATP) ed auto-oligomerizzare?",
    "options": [
      "Dominio TIR",
      "Dominio SH2",
      "Dominio NACHT (NBD)",
      "Dominio Death Effector Domain (DED)"
    ],
    "correctIndex": 2,
    "explanation": "Il dominio centrale NACHT (chiamato anche NBD, Nucleotide-Binding Domain) possiede attività ATPasica intrinseca; il legame dell'ATP provoca una transizione conformazionale che induce l'oligomerizzazione degli NLR in anelli multimerici.",
    "clinicalPearl": "Mutazioni gain-of-function concentrate nel dominio NACHT di NLRP3 riducono la soglia di idrolisi dell'ATP, provocando l'assemblaggio spontaneo dell'inflammasoma nelle patologie autoinfiammatorie CAPS.",
    "targetSectionId": "sec-3-nacht"
  },
  {
    "id": "gen-248",
    "lessonNumber": 3,
    "lessonTitle": "03. Sensori Intracellulari: NLR, RLR, STING & Inflammasomi",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale inflammasoma batterio-specifico viene attivato dal riconoscimento intracellulare di flagellina e proteine dell'apparato di secrezione di tipo III (T3SS) tramite le proteine sensore NAIP?",
    "options": [
      "Inflammasoma AIM2",
      "Inflammasoma NLRP3",
      "Inflammasoma NLRP6",
      "Inflammasoma NLRC4 (IPAF)"
    ],
    "correctIndex": 3,
    "explanation": "NLRC4 non lega direttamente i ligandi batterici; sono le proteine della famiglia NAIP a riconoscere la flagellina o i componenti dell'ago T3SS nel citoplasma, inducendo l'eterooligomerizzazione con NLRC4 che recluta pro-caspasi-1.",
    "clinicalPearl": "L'inflammasoma NLRC4 è fondamentale per la difesa epiteliale contro enteropatogeni invasivi come Salmonella enterica e Legionella pneumophila.",
    "targetSectionId": "sec-3-nlrc4"
  },
  {
    "id": "gen-249",
    "lessonNumber": 3,
    "lessonTitle": "03. Sensori Intracellulari: NLR, RLR, STING & Inflammasomi",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale proteina mitocondriale transmembrana funge da piattaforma adattatrice centrale a cui si ancorano le elicasi a RNA RIG-I e MDA5 tramite interazione CARD-CARD?",
    "options": [
      "MAVS (noto anche come IPS-1, VISA, Cardif)",
      "STING",
      "TRIF",
      "MyD88"
    ],
    "correctIndex": 0,
    "explanation": "MAVS (Mitochondrial Antiviral Signaling protein) è inserita nella membrana mitocondriale esterna; quando ingaggia i domini tandem CARD di RIG-I o MDA5, forma aggregati prion-like sulla superficie mitocondriale reclutando TBK1 e IKK.",
    "clinicalPearl": "La proteasi virale NS3/4A del virus dell'Epatite C (HCV) cliva specificamente MAVS dalla membrana mitocondriale, abolendo la produzione di interferoni e favorendo la cronicizzazione virale.",
    "targetSectionId": "sec-3-mavs"
  },
  {
    "id": "gen-250",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale subunità proteica transmembrana comune (CD130 o gp130) è utilizzata per la trasduzione del segnale recettoriale da parte di IL-6, IL-11 e LIF?",
    "options": [
      "Catena gamma comune (CD132)",
      "Glicoproteina 130 (gp130)",
      "Catena beta comune (CD131)",
      "Catena alfa dell'IL-2R (CD25)"
    ],
    "correctIndex": 1,
    "explanation": "La famiglia dell'IL-6 condivide la subunità gp130 (CD130); il legame di IL-6 al recettore alfa (IL-6R / CD80) recluta l'omodimero gp130, che attiva JAK1 e JAK2 inducendo la fosforilazione di STAT3.",
    "clinicalPearl": "Il farmaco monoclonale Tocilizumab blocca l'IL-6R solubile e di membrana, impedendo l'ingaggio di gp130; è essenziale nell'artrite reumatoide e nella sindrome da rilascio di citochine (CRS) post-terapia CAR-T.",
    "targetSectionId": "sec-5-gp130"
  },
  {
    "id": "gen-251",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale complesso eterotrimerico trascrizionale (noto come ISGF3) si assembla nel citosol a valle della stimolazione con Interferoni di tipo I (IFN-alfa/beta)?",
    "options": [
      "Omodimero di STAT3 associato a c-Jun",
      "Eterodimero di STAT4 e STAT6 complessato con GATA-3",
      "Eterodimero fosforilato di STAT1 e STAT2 associato alla proteina IRF9 (p48)",
      "Omodimero di STAT5b legato a FoxP3"
    ],
    "correctIndex": 2,
    "explanation": "Il recettore IFNAR (IFNAR1/IFNAR2) attiva le chinasi Tyk2 e JAK1 che fosforilano STAT1 e STAT2; questi formano un eterodimero che recluta il fattore IRF9, assemblando il complesso ISGF3 che migra nel nucleo legandosi agli elementi ISRE (Interferon-Stimulated Response Elements).",
    "clinicalPearl": "Difetti genetici autosomici recessivi in STAT1 o STAT2 aboliscono la formazione di ISGF3, causando gravissima suscettibilità a infezioni virali disseminate severe (morbillo, herpesvirus) post-vaccinazione con virus vivi attenuati.",
    "targetSectionId": "sec-5-isgf3"
  },
  {
    "id": "gen-252",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale inibitore selettivo a piccole molecole delle chinasi JAK1 e JAK3 (JAK inhibitor o Jakinib) è utilizzato nel trattamento dell'artrite reumatoide e della colite ulcerosa?",
    "options": [
      "Ciclosporina A",
      "Infliximab",
      "Anakinra",
      "Tofacitinib"
    ],
    "correctIndex": 3,
    "explanation": "Tofacitinib è un inibitore reversibile ATP-competitivo che blocca preferenzialmente JAK3 e JAK1, interrompendo la trasduzione della catena gamma comune (IL-2, IL-4, IL-15, IL-21) e di IFN-gamma.",
    "clinicalPearl": "A differenza degli anticorpi monoclonali biologici che bloccano una singola citochina extracellulare, i Jakinib orali spengono simultaneamente molteplici assi citochinici all'interno della cellula ma aumentano il rischio di riattivazione di herpes zoster.",
    "targetSectionId": "sec-5-jakinib"
  },
  {
    "id": "gen-253",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale citochina della famiglia dell'IL-12 è costituita dall'eterodimero formato dalle subunità p19 e p40 ed è il principale fattore di sopravvivenza ed espansione dei linfociti Th17 patogenetici?",
    "options": [
      "Interleuchina-23 (IL-23)",
      "Interleuchina-27",
      "Interleuchina-35",
      "Interleuchina-12 propriamente detta (p35/p40)"
    ],
    "correctIndex": 0,
    "explanation": "IL-23 condivide la subunità p40 con IL-12, ma è appaiata alla subunità esclusiva p19; segnala attraverso il recettore eterodimerico IL-23R/IL-12R-beta-1 attivando JAK2 e Tyk2 per la fosforilazione di STAT3.",
    "clinicalPearl": "Anticorpi monoclonali diretti specificamente contro la subunità p19 di IL-23 (come Guselkumab e Risankizumab) sono estremamente efficaci e approvati nella psoriasi a placche e nella malattia di Crohn.",
    "targetSectionId": "sec-5-il23"
  },
  {
    "id": "gen-254",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale recettore 'scavenger' atipico per chemochine (ACKR1, precedentemente noto come antigene Duffy DARC) è espresso sugli eritrociti privo di proteina G e funge da serbatoio/tampone plasmatico?",
    "options": [
      "ACKR3 (CXCR7)",
      "Antigene dei gruppi sanguigni Duffy (ACKR1 / DARC)",
      "Recettore CCR5",
      "Recettore CXCR4"
    ],
    "correctIndex": 1,
    "explanation": "DARC/ACKR1 lega ad alta affinità numerose chemochine infiammatorie CC e CXC ma manca del motivo canonico DRY necessario per l'accoppiamento con le proteine G; funge da 'sink' che rimuove o tampona le chemochine in circolo.",
    "clinicalPearl": "L'assenza di DARC sugli eritrociti (fenotipo Duffy-negativo) è comune nelle popolazioni africane e conferisce resistenza selettiva all'invasione eritrocitaria da parte di Plasmodium vivax.",
    "targetSectionId": "sec-5-darc"
  },
  {
    "id": "gen-255",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale citochina pleiotropica dimerica immunoregolarizzatrice prodotta da macrofagi M2 e linfociti Treg segnala attraverso un recettore che fosforila STAT3 inducendo geni anti-infiammatori e reprimendo la sintesi di TNF, IL-1 e IL-12?",
    "options": [
      "Interleuchina-17",
      "Interferone-gamma",
      "Interleuchina-10 (IL-10)",
      "Interleuchina-2"
    ],
    "correctIndex": 2,
    "explanation": "IL-10 lega il complesso eterotetramerico IL-10R1/IL-10R2, attivando JAK1 e Tyk2 per fosforilare STAT3; paradossalmente, nei macrofagi STAT3 attivato da IL-10 induce fattori che reprimono i promotori delle citochine infiammatorie.",
    "clinicalPearl": "Mutazioni autosomiche recessive con perdita di funzione nei geni IL10, IL10RA o IL10RB causano una gravissima enterocolite infiammatoria neonatale intrattabile refrattaria a terapie mediche convenzionali.",
    "targetSectionId": "sec-5-il10"
  },
  {
    "id": "gen-256",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale fosfatasi citoplasmatica tirosinica (PTPN22, nota anche come Lyp) funge da regolatore negativo defosforilando le chinasi Lck e ZAP-70 ed è associata ad autoimmunità multipla?",
    "options": [
      "Fosfatasi CD45",
      "Fosfatasi calcineurina",
      "Fosfatasi SHIP-1",
      "Tirosina fosfatasi PTPN22 (Lyp)"
    ],
    "correctIndex": 3,
    "explanation": "PTPN22 defosforila le tirosine attivatorie delle chinasi Src (Lck e Fyn) e di ZAP-70/Syk, innalzando la soglia di attivazione del TCR e BCR.",
    "clinicalPearl": "Il polimorfismo a singolo nucleotide R620W di PTPN22 altera l'interazione con Csk ed è uno dei più potenti fattori di rischio genetici non-HLA per diabete di tipo 1, artrite reumatoide, tiroidite di Hashimoto e LES.",
    "targetSectionId": "sec-5-ptpn22"
  },
  {
    "id": "gen-257",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale fattore di crescita ematopoietico lineage-specifico regola in modo primario la proliferazione, il differenziamento e il rilascio rapido dei neutrofili dal midollo osseo?",
    "options": [
      "G-CSF (Granulocyte Colony-Stimulating Factor)",
      "M-CSF (CSF-1)",
      "Eritropoietina (EPO)",
      "Trombopoietina (TPO)"
    ],
    "correctIndex": 0,
    "explanation": "G-CSF agisce sul recettore G-CSFR (CD114) espresso sui precursori mieloidi e neutrofili maturi, accelerando la maturazione dallo stadio di mieloblasto a granulocita segmentato e mobilitando la riserva midollare.",
    "clinicalPearl": "Forme ricombinanti di G-CSF (come Filgrastim e Pegfilgrastim) sono ampiamente impiegate in oncologia per ridurre la durata della neutropenia febbrile indotta da chemioterapia mielosoppressiva.",
    "targetSectionId": "sec-4-gcsf"
  },
  {
    "id": "gen-258",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale marcatore enzimatico ed antimicrobico peculiare è contenuto esclusivamente nei granuli primari (azzurrofili) dei neutrofili ed è assente nei granuli secondari e terziari?",
    "options": [
      "Lattoferrina",
      "Mieloperossidasi (MPO)",
      "Gelatinasi (MMP-9)",
      "Fosfatasi alcalina leucocitaria (LAP)"
    ],
    "correctIndex": 1,
    "explanation": "La mieloperossidasi (MPO) è sintetizzata precocemente allo stadio di promielocito e segregata nei granuli azzurrofili assieme ad altre idrolasi acide, elastasi neutrofila e defensine.",
    "clinicalPearl": "Autoanticorpi diretti contro la mieloperossidasi (p-ANCA / MPO-ANCA) sono diagnostici di vasculiti dei piccoli vasi come la granulomatosi eosinofila con poliangioite (Churg-Strauss) e la poliangioite microscopica.",
    "targetSectionId": "sec-4-mpo"
  },
  {
    "id": "gen-259",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale proteina antimicrobica contenuta nei granuli azzurrofili lega con avidità nanomolare il lipide A dell'LPS batterico neutralizzandone la tossicità e permeabilizzando la membrana esterna dei batteri Gram-negativi?",
    "options": [
      "Lisozima",
      "Calprotectina",
      "BPI (Bactericidal/Permeability-Increasing protein)",
      "Catelicidina LL-37"
    ],
    "correctIndex": 2,
    "explanation": "BPI possiede una struttura carica positivamente che interagisce specificamente con le catene di lipide A cariche negativamente dell'LPS, neutralizzando l'endotossina e danneggiando la membrana esterna dei bacilli Gram-negativi.",
    "clinicalPearl": "Autoanticorpi anti-BPI possono svilupparsi nei pazienti affetti da fibrosi cistica con colonizzazione polmonare cronica da Pseudomonas aeruginosa, associandosi a una peggiore funzione respiratoria.",
    "targetSectionId": "sec-4-bpi"
  },
  {
    "id": "gen-260",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "In quale compartimento granulare o vescicolare dei neutrofili risiede la metalloproteinasi di matrice 9 (MMP-9 o gelatinasi B), mobilizzata con facilità per degradare la membrana basale endoteliale?",
    "options": [
      "Granuli primari azzurrofili",
      "Vescicole secretorie di endocitosi",
      "Granuli secondari specifici",
      "Granuli terziari (o granuli a gelatinasi)"
    ],
    "correctIndex": 3,
    "explanation": "I granuli terziari contengono gelatinasi (MMP-9) e lisozima; possiedono una soglia di attivazione per l'esocitosi inferiore rispetto ai granuli secondari e primari, consentendo il rilascio precoce di MMP-9 durante il passaggio attraverso la lamina basale perivascolare.",
    "clinicalPearl": "La gerarchia di degranulazione del neutrofilo prevede prima l'esocitosi delle vescicole secretorie (che espongono recettori di membrana), seguita dai granuli terziari, secondari e infine primari nei fagosomi.",
    "targetSectionId": "sec-4-granuli"
  },
  {
    "id": "gen-261",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale eterodimero transmembrana costituisce il nucleo catalitico del flavocitocromo b558 ancorato alla membrana dei granuli specifici e della membrana plasmatica nel complesso NOX2?",
    "options": [
      "gp91-phox (CYBB) associata alla catena p22-phox (CYBA)",
      "p47-phox complessata con p67-phox",
      "Omodimero di p40-phox",
      "Eterodimero Rac1 / Rac2"
    ],
    "correctIndex": 0,
    "explanation": "Il flavocitocromo b558 è formato dalla glicoproteina gp91-phox (subunità catalitica legante FAD e due gruppi eme) e dalla proteina transmembrana p22-phox; questo complesso stabilizza le due subunità nella membrana.",
    "clinicalPearl": "Il gene CYBB codificante gp91-phox è localizzato sul braccio corto del cromosoma X (Xp21.1); le sue mutazioni rappresentano la causa della forma legata all'X della Malattia Granulomatosa Cronica.",
    "targetSectionId": "sec-4-nox2"
  },
  {
    "id": "gen-262",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale subunità citosolica adattatrice della NADPH ossidasi funge da 'organizzatore' venendo massivamente fosforilata su residui serinici da PKC per consentire la traslocazione del complesso alla membrana?",
    "options": [
      "p67-phox",
      "p47-phox (NCF1)",
      "p40-phox",
      "gp91-phox"
    ],
    "correctIndex": 1,
    "explanation": "A riposo, p47-phox adotta una conformazione autoinibita; la stimolazione cellulare induce fosforilazione di molteplici serine da parte di PKC, svelando i suoi domini SH2 che si agganciano alla coda citoplasmatica di p22-phox trascinando p67-phox e p40-phox alla membrana.",
    "clinicalPearl": "Mutazioni autosomiche recessive nel gene NCF1 (codificante p47-phox) sono responsabili di circa il 20-25% di tutti i casi di Malattia Granulomatosa Cronica (la forma autosomica più frequente).",
    "targetSectionId": "sec-4-p47phox"
  },
  {
    "id": "gen-263",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale piccola GTPasi della famiglia Rho è indispensabile per legarsi direttamente a p67-phox e gp91-phox inducendo la corretta configurazione catalitica della NADPH ossidasi durante il burst respiratorio nei neutrofili?",
    "options": [
      "RhoA",
      "Cdc42",
      "Rac2",
      "Ras"
    ],
    "correctIndex": 2,
    "explanation": "Nei neutrofili umani, la GTPasi Rac2 passa dallo stato inattivo legato a GDP allo stato attivo legato a GTP; Rac2-GTP migra alla membrana e si lega al dominio TPR di p67-phox e alla tasca catalitica di gp91-phox, attivando il trasferimento di elettroni dal NADPH all'ossigeno molecolare.",
    "clinicalPearl": "Mutazioni dominanti negative in Rac2 causano una rara immunodeficienza con difetto combinato di chemiotassi, stravaso e produzione di specie reattive dell'ossigeno.",
    "targetSectionId": "sec-4-rac2"
  },
  {
    "id": "gen-264",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale reazione biochimica primaria catalizza il complesso NOX2 attivo sulla membrana del fagosoma trasferendo elettroni dal citosol al lume fagocitico?",
    "options": [
      "Conversione di acido arachidonico in leucotrieni",
      "Scissione proteolitica della catalasi batterica",
      "Fosforilazione dell'ossido nitrico a perossinitrito",
      "Trasferimento di elettroni da NADPH a due molecole di ossigeno (O2) formando anione superossido (O2•-)"
    ],
    "correctIndex": 3,
    "explanation": "La reazione stechiometrica fondamentale è: NADPH + 2 O2 -> NADP+ + H+ + 2 O2•-. L'anione superossido generato subisce quindi dismutazione spontanea o catalizzata da SOD formando perossido di idrogeno (H2O2).",
    "clinicalPearl": "L'accumulo di elettroni negativi nel lume del fagosoma indotto da NOX2 genera una depolarizzazione di membrana che stimola l'apertura di canali ionici (influsso di K+), attivando le proteasi lisosomiali come l'elastasi neutrofila.",
    "targetSectionId": "sec-4-reazioneox"
  },
  {
    "id": "gen-265",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale potente specie battericida alogena viene sintetizzata dalla mieloperossidasi (MPO) all'interno del fagolisosoma utilizzando perossido di idrogeno (H2O2) e ioni cloruro (Cl-)?",
    "options": [
      "Acido ipocloroso (HOCl)",
      "Anione ipofosfito",
      "Ozono radicalico",
      "Diossido di cloro"
    ],
    "correctIndex": 0,
    "explanation": "La MPO utilizza il perossido di idrogeno derivato dalla dismutazione del superossido per ossidare gli ioni Cl- formando acido ipocloroso (HOCl), il principio chimico attivo della candeggina, capace di ossidare istantaneamente proteine e tioli batterici.",
    "clinicalPearl": "Il deficit ereditario isolato di mieloperossidasi è relativamente comune (1:2000-4000) e spesso asintomatico grazie ai meccanismi alternativi NOX2-dipendenti, tranne nei pazienti diabetici dove predispone a infezioni da Candida albicans.",
    "targetSectionId": "sec-4-hocl"
  },
  {
    "id": "gen-266",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale saggio diagnostico di citometria a flusso quantitativo è il gold-standard attuale per la diagnosi rapida e la distinzione tra Malattia Granulomatosa Cronica (CGD) e stato di portatrice sana?",
    "options": [
      "Test della calprotectina sierica",
      "Saggio alla diidrorodamina 123 (DHR 123)",
      "Test del tempo di protrombina",
      "Dosaggio dell'elastasi fecale"
    ],
    "correctIndex": 1,
    "explanation": "La DHR 123 non fluorescente penetra nei neutrofili stimolati (con PMA) e viene ossidata dai ROS a rodamina 123, altamente fluorescente. Nei pazienti con CGD non vi è aumento di fluorescenza; nelle femmine portatrici della forma X-linked si osservano chiaramente due picchi bimodali per inattivazione casuale del cromosoma X.",
    "clinicalPearl": "Il test DHR ha sostituito il vecchio test microscopico al Nitroblu di Tetrazolio (NBT) perché consente una valutazione oggettiva quantitativa su migliaia di cellule in pochi minuti.",
    "targetSectionId": "sec-4-dhr"
  },
  {
    "id": "gen-267",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale caratteristica microbiologica accomuna i cinque microrganismi responsabili della stragrande maggioranza delle infezioni severe e ascessuali recidivanti nei pazienti affetti da CGD?",
    "options": [
      "Sono tutti batteri anaerobi stretti",
      "Mancano della parete di peptidoglicano",
      "Esprimono tutti l'enzima catalasi (sono microrganismi catalasi-positivi)",
      "Possiedono una capsula ricca di acido sialico"
    ],
    "correctIndex": 2,
    "explanation": "Nei soggetti normali, i batteri catalasi-negativi producono piccole quantità di H2O2 come sottoprodotto metabolico che il fagocita può utilizzare per sintetizzare HOCl; i batteri catalasi-positivi (Staphylococcus aureus, Burkholderia cepacia, Serratia marcescens, Nocardia e Aspergillus) distruggono il proprio perossido, lasciando il neutrofilo con CGD privo di qualsiasi fonte di ROS.",
    "clinicalPearl": "L'infezione o la polmonite necrotizzante da Burkholderia cepacia, Serratia marcescens o Nocardia in un bambino deve sempre far scattare il sospetto diagnostico immediato di Malattia Granulomatosa Cronica.",
    "targetSectionId": "sec-4-catalasipositivi"
  },
  {
    "id": "gen-268",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale enzima nucleare calcio-dipendente catalizza la citrullinazione dei residui di arginina degli istoni nucleari (H3 e H4) innescando la massiva decondensazione della cromatina durante la NETosi?",
    "options": [
      "Mieloperossidasi",
      "Caspasi-3",
      "DNasi 1",
      "PAD4 (Peptidylarginine Deiminase 4)"
    ],
    "correctIndex": 3,
    "explanation": "PAD4 converte le cariche positive dell'arginina in citrullina neutra sugli istoni H3 e H4; la perdita della carica positiva annulla le interazioni elettrostatiche con lo scheletro fosfodiesterico negativo del DNA, provocando lo srotolamento della cromatina che si espande nel nucleo e poi nel citoplasma.",
    "clinicalPearl": "Topi privi del gene Padi4 non sono in grado di formare NET e mostrano una marcata riduzione della formazione di trombi venosi profundi nei modelli sperimentali di trombofilia, dimostrando il ruolo centrale dell'immunotrombosi mediata da NET.",
    "targetSectionId": "sec-4-pad4"
  },
  {
    "id": "gen-269",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale anomalia immunitaria ed ematologica è direttamente imputabile al rilascio aberrante e ritardato smaltimento delle trappole extracellulari dei neutrofili (NETs) nel Lupus Eritematoso Sistemico?",
    "options": [
      "Esposizione continua all'ambiente extracellulare di autoantigeni nucleari (dsDNA, istoni) e complessi antimicrobici che alimentano la produzione di autoanticorpi ANA e l'attivazione di TLR9",
      "Aplasia midollare selettiva della linea eritroide",
      "Perdita completa delle piastrine per lisi osmotica diretta",
      "Inattivazione permanente del fattore di trascrizione FoxP3"
    ],
    "correctIndex": 0,
    "explanation": "I NET contengono dsDNA associato a LL-37, HMGB1 e istoni citrullinati; nei pazienti con LES la degradazione dei NET da parte della DNasi I è compromessa, determinando un'esposizione persistente che stimola le pDC a produrre IFN-alfa e i linfociti B autoreattivi a produrre anticorpi anti-dsDNA.",
    "clinicalPearl": "I NET decorati da fattore tissutale (TF) legano e attivano direttamente le piastrine, innescando la cascata coagulativa intrinseca e spiegando l'elevatissimo rischio trombotico arterioso e venoso nel LES.",
    "targetSectionId": "sec-4-netlupus"
  },
  {
    "id": "gen-270",
    "lessonNumber": 6,
    "lessonTitle": "06. Cascata di Adesione & Stravaso Leucocitario",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "In quali strutture intracellulari di stoccaggio endoteliali è preformata la P-selectina (CD62P), pronta per essere esocitata in membrana entro pochi minuti dalla stimolazione con istamina o trombina?",
    "options": [
      "Granuli primari azzurrofili",
      "Corpi di Weibel-Palade",
      "Caveole di plasmalemma",
      "Lisosomi secondari"
    ],
    "correctIndex": 1,
    "explanation": "La P-selectina è immagazzinata preformata nelle cellule endoteliali all'interno dei corpi di Weibel-Palade (e nei granuli alfa delle piastrine); mediatori infiammatori acuti ne inducono l'esocitosi istantanea sulla superficie luminale senza richiedere sintesi proteica de novo.",
    "clinicalPearl": "Al contrario, l'E-selectina non è preformata: la sua espressione richiede trascrizione e traduzione de novo indotta da citochine infiammatorie (IL-1 e TNF) raggiungendo il picco a 4-6 ore dallo stimolo.",
    "targetSectionId": "sec-6-selectine"
  },
  {
    "id": "gen-271",
    "lessonNumber": 6,
    "lessonTitle": "06. Cascata di Adesione & Stravaso Leucocitario",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale ligando tetrasaccaridico fucosilato e sialilato (CD15s) presente su glicoproteine come PSGL-1 è essenziale per il legame con la P-selectina e l'E-selectina durante il rolling leucocitario?",
    "options": [
      "Acido ialuronico ad alto peso molecolare",
      "Eparan solfato",
      "Sialil-Lewis X (sLeX)",
      "N-glicolilneuraminico"
    ],
    "correctIndex": 2,
    "explanation": "Il determinante antigenico carboidratico sialil-Lewis X (presente all'estremità N-terminale di PSGL-1 e altre mucine) viene legato con legami a idrogeno e ponti coordinati da Ca2+ dai domini lectinici delle selectine endoteliali.",
    "clinicalPearl": "Nel Deficit di Adesione Leucocitaria di tipo 2 (LAD-2), una mutazione nel trasportatore di GDP-fucosio abolisce la sintesi di sialil-Lewis X, bloccando completamente il rolling leucocitario.",
    "targetSectionId": "sec-6-slex"
  },
  {
    "id": "gen-272",
    "lessonNumber": 6,
    "lessonTitle": "06. Cascata di Adesione & Stravaso Leucocitario",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale difetto molecolare nel gene SLC35C1 è responsabile del Deficit di Adesione Leucocitaria di tipo 2 (LAD-2 / CDG-IIc)?",
    "options": [
      "Mutazione della catena beta-2 delle integrine",
      "Deficit della proteina kindlina-3",
      "Assenza completa della mieloperossidasi",
      "Mutazione del trasportatore specifico dell'apparato di Golgi per il GDP-fucosio"
    ],
    "correctIndex": 3,
    "explanation": "La mutazione di SLC35C1 impedisce il trasporto del GDP-fucosio nel lume del Golgi; le glicosiltransferasi non possono fucosilare le glicoproteine, determinando assenza totale di sialil-Lewis X e degli antigeni dei gruppi sanguigni ABH (fenotipo Bombay).",
    "clinicalPearl": "Clinicamente i pazienti con LAD-2 presentano leucocitosi marcata, infezioni batteriche ricorrenti senza pus, dismorfismi facciali caratteristici, bassa statura e grave ritardo psicomotorio.",
    "targetSectionId": "sec-6-lad2"
  },
  {
    "id": "gen-273",
    "lessonNumber": 6,
    "lessonTitle": "06. Cascata di Adesione & Stravaso Leucocitario",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale mutazione autosomica recessiva a carico del gene ITGB2 (localizzato sul cromosoma 21q22.3) provoca il Deficit di Adesione Leucocitaria di tipo 1 (LAD-1)?",
    "options": [
      "Mutazione della catena comune beta-2 delle integrine (CD18)",
      "Mutazione selettiva della catena alfa-L (CD11a)",
      "Delezione del gene codificante ICAM-1",
      "Deficit enzimatico di fucosiltransferasi 7"
    ],
    "correctIndex": 0,
    "explanation": "In LAD-1 le mutazioni in ITGB2 impediscono la sintesi o l'assemblaggio della catena beta-2 (CD18), abolendo l'espressione di tutti e quattro gli eterodimeri integrinici leucocitari beta-2: LFA-1 (alfaL-beta2), Mac-1 (alfaM-beta2), p150,95 (alfaX-beta2) e alfaD-beta2.",
    "clinicalPearl": "I segni patognomonici di LAD-1 sono il ritardo nella caduta del funicolo ombelicale (> 3-4 settimane), gengiviti necrotizzanti, infezioni batteriche cutanee recidivanti prive di pus e spiccata leucocitosi neutrofila persistente nel sangue.",
    "targetSectionId": "sec-6-lad1"
  },
  {
    "id": "gen-274",
    "lessonNumber": 6,
    "lessonTitle": "06. Cascata di Adesione & Stravaso Leucocitario",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale proteina del citoscheletro (mutata nel LAD-3 / LAD-1 variant) coopera con la talina-1 legandosi alla coda citoplasmatica delle integrine beta-1, beta-2 e beta-3 per attivarne la conformazione estesa ad alta affinità?",
    "options": [
      "Vinculina",
      "Kindlina-3 (FERMT3)",
      "Paxillina",
      "Actinina alfa"
    ],
    "correctIndex": 1,
    "explanation": "Kindlina-3 si lega al secondo motivo NxxY della coda delle subunità beta delle integrine; coopera con la talina nella via 'inside-out' innescata dai recettori chemochinici, inducendo l'apertura e l'estensione ad alta affinità delle integrine beta1, beta2 e beta3.",
    "clinicalPearl": "In LAD-3, poiché l'integrina piastrinica alfaIIb-beta3 (GPIIb/IIIa) è anch'essa disfunzionale, i pazienti presentano sia la suscettibilità alle infezioni tipica di LAD-1 sia una severa diatesi emorragica simile alla tromboastenia di Glanzmann e osteopetrosi.",
    "targetSectionId": "sec-6-lad3"
  },
  {
    "id": "gen-275",
    "lessonNumber": 6,
    "lessonTitle": "06. Cascata di Adesione & Stravaso Leucocitario",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale integrina leucocitaria della famiglia beta-1 (VLA-4 o alfa-4/beta-1, CD49d/CD29) media l'adesione salda e lo stravaso di monociti, linfociti ed eosinofili legando VCAM-1 sull'endotelio infiammato?",
    "options": [
      "Mac-1 (CD11b/CD18)",
      "LFA-1 (CD11a/CD18)",
      "VLA-4 (alfa-4 / beta-1)",
      "Integrina alfa-V / beta-3"
    ],
    "correctIndex": 2,
    "explanation": "VLA-4 è espressa su tutti i leucociti mononucleati (ma è assente o a bassissimi livelli sui neutrofili maturi); interagisce con VCAM-1 (indotta da citochine sull'endotelio) e con la fibronectina della matrice extracellulare.",
    "clinicalPearl": "L'anticorpo monoclonale Natalizumab lega la catena alfa-4 bloccando VLA-4; impedisce lo stravaso dei linfociti T nel SNC nella sclerosi multipla e nell'intestino nella malattia di Crohn, ma comporta il rischio di leucoencefalopatia multifocale progressiva (PML) da virus JC.",
    "targetSectionId": "sec-6-vla4"
  },
  {
    "id": "gen-276",
    "lessonNumber": 6,
    "lessonTitle": "06. Cascata di Adesione & Stravaso Leucocitario",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale molecola immunoglobulinica espressa sia sui margini laterali delle cellule endoteliali sia sui leucociti media la transmigrazione attraverso le giunzioni intercellulari (diapedesi) tramite interazione omotipica?",
    "options": [
      "ICAM-1 (CD54)",
      "VCAM-1 (CD106)",
      "Selectina L",
      "PECAM-1 (CD31)"
    ],
    "correctIndex": 3,
    "explanation": "PECAM-1 (Platelet Endothelial Cell Adhesion Molecule 1 o CD31) è concentrata nelle giunzioni endoteliali e interagisce in modo omotipico con il CD31 espresso sulla membrana leucocitaria, guidando la migrazione transendoteliale paracellulare.",
    "clinicalPearl": "Nel laboratorio di anatomia patologica, l'anticorpo anti-CD31 è il marcatore immunoistochimico gold-standard per identificare l'origine vascolare ed endoteliale delle neoplasie (come l'angiosarcoma).",
    "targetSectionId": "sec-6-pecam1"
  },
  {
    "id": "gen-277",
    "lessonNumber": 17,
    "lessonTitle": "17. Cellule NK & Meccanismi Molecolari di Citotossicità",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale teoria immunologica formulata da Klas Kärre stabilisce che le cellule NK lisano preferenzialmente cellule bersaglio che hanno perso o down-regolato l'espressione superficiale delle molecole MHC di classe I autologhe?",
    "options": [
      "Ipotesi del 'Missing-Self'",
      "Teoria della selezione clonale",
      "Ipotesi dell'induced-fit",
      "Teoria del doppio segnale recettoriale"
    ],
    "correctIndex": 0,
    "explanation": "L'ipotesi del missing-self postula che le cellule dell'organismo esprimono MHC-I che attiva recettori inibitori sulle cellule NK proteggendole dalla lisi; se una cellula tumorale o infettata da virus perde MHC-I per sfuggire ai linfociti T citotossici, il segnale inibitorio cessa e la cellula NK degranula ed elimina il bersaglio.",
    "clinicalPearl": "Questa complementarietà perfetta tra CTL (che uccidono cellule che espongono antigeni su MHC-I) e cellule NK (che uccidono cellule che hanno perso MHC-I) impedisce ai virus e tumori di evadere completamente il controllo immunitario.",
    "targetSectionId": "sec-17-missingself"
  },
  {
    "id": "gen-278",
    "lessonNumber": 17,
    "lessonTitle": "17. Cellule NK & Meccanismi Molecolari di Citotossicità",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale proteoglicano polianionico solfato funge da scaffold proteico all'interno dei granuli citotossici sequestrando perforina e granzimi a pH 5.5 per impedirne l'attivazione e l'autolisi prima dell'esocitosi?",
    "options": [
      "Aggrecano",
      "Serglicina",
      "Decorina",
      "Sindecano-1"
    ],
    "correctIndex": 1,
    "explanation": "La serglicina è decorata con lunghe catene di condroitin solfato fortemente cariche negativamente; a pH 5.5 lega e neutralizza le cariche positive di perforina e granzimi, mantenendoli in uno stato inattivo e condensato.",
    "clinicalPearl": "Quando il granulo si fonde con la membrana plasmatica e rilascia il contenuto nella sinapsi a pH 7.4 in presenza di ioni Ca2+ extracellulari, il complesso con la serglicina si dissocia permettendo alla perforina di polimerizzare.",
    "targetSectionId": "sec-17-serglicina"
  },
  {
    "id": "gen-279",
    "lessonNumber": 17,
    "lessonTitle": "17. Cellule NK & Meccanismi Molecolari di Citotossicità",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale marcatore glicoproteico della membrana lisosomiale (LAMP-1) viene esposto sulla superficie esterna delle cellule NK e CTL durante l'esocitosi dei granuli e funge da test citofluorimetrico di degranulazione attiva?",
    "options": [
      "CD69",
      "CD25",
      "CD107a",
      "CD45RO"
    ],
    "correctIndex": 2,
    "explanation": "CD107a (LAMP-1) è incorporato nella membrana interna del granulo secretorio; la fusione del granulo con la membrana plasmatica espone l'epitopo luminale di CD107a sulla superficie cellulare, permettendo la quantificazione della degranulazione tramite citometria a flusso.",
    "clinicalPearl": "Il test di degranulazione CD107a su cellule NK stimolate con bersaglio K562 è il saggio diagnostico primario impiegato per confermare o escludere difetti genetici della secrezione citotossica nelle linfoistiocitosi emofagocitiche (FHL).",
    "targetSectionId": "sec-17-cd107a"
  },
  {
    "id": "gen-280",
    "lessonNumber": 17,
    "lessonTitle": "17. Cellule NK & Meccanismi Molecolari di Citotossicità",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale proteina del macchinario secretorio (mutata nella linfoistiocitosi emofagocitica familiare di tipo 3, FHL3) è indispensabile per la fase di 'priming' e ancoraggio delle vescicole litiche alla membrana plasmatica della cellula NK?",
    "options": [
      "Rab27a",
      "Sintassina-11",
      "Perforina-1",
      "Munc13-4"
    ],
    "correctIndex": 3,
    "explanation": "Munc13-4 interagisce con la GTPasi Rab27a promuovendo la transizione dei granuli citotossici dallo stato di docking allo stato di priming, preparando la formazione dei complessi SNARE trans-membrana con sintassina-11 e SNAP-23 per la fusione.",
    "clinicalPearl": "Nelle FHL (FHL2 da perforina, FHL3 da Munc13-4, FHL4 da sintassina-11), l'incapacità di uccidere le cellule bersaglio infettate da virus (come EBV) provoca una persistente attivazione dei T e macrofagi con tempesta citochinica ed emofagocitosi midollare spesso letale.",
    "targetSectionId": "sec-17-munc134"
  },
  {
    "id": "gen-281",
    "lessonNumber": 17,
    "lessonTitle": "17. Cellule NK & Meccanismi Molecolari di Citotossicità",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale proteasi ad attività 'caspasi-like' dei granuli citotossici taglia specificamente la proteina pro-apoptotica Bid a livello dell'aspartato 75 generando il frammento attivo tBid?",
    "options": [
      "Granzima B",
      "Granzima A",
      "Granzima K",
      "Granulisina"
    ],
    "correctIndex": 0,
    "explanation": "Il granzima B è l'unica proteasi dei mammiferi oltre alle caspasi a tagliare specificamente dopo residui di aspartato; cliva Bid in tBid (che migra ai mitocondri per attivare Bax/Bak) e cliva direttamente la pro-caspasi-3 e la pro-caspasi-7 attivando l'apoptosi rapida.",
    "clinicalPearl": "Questa doppia capacità del granzima B di innescare l'apoptosi sia tramite la via mitocondriale intrinseca (Bid/citocromo c) sia tramite attivazione diretta delle caspasi esecutrici assicura la morte della cellula bersaglio anche in presenza di inibitori virali delle caspasi.",
    "targetSectionId": "sec-17-granzimab"
  },
  {
    "id": "gen-282",
    "lessonNumber": 17,
    "lessonTitle": "17. Cellule NK & Meccanismi Molecolari di Citotossicità",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale granzima dei granuli citotossici attiva una via di morte cellulare caspasi-indipendente clivando il complesso citosolico SET e liberando l'endonucleasi NM23-H1 che genera rotture a singolo filamento del DNA?",
    "options": [
      "Granzima B",
      "Granzima A",
      "Granzima M",
      "Granzima H"
    ],
    "correctIndex": 1,
    "explanation": "Il granzima A è una triptasi che taglia dopo residui basici (arginina o lisina); penetra nei mitocondri danneggiando il complesso I della catena respiratoria e cliva il complesso inibitore SET, liberando la DNasi NM23-H1 che frammenta il DNA nucleare senza richiedere caspasi.",
    "clinicalPearl": "La via del granzima A è una contromisura evolutiva fondamentale per distruggere cellule infettate da virus a DNA o cellule tumorali che hanno bloccato la via delle caspasi sovraesprimendo proteine come Bcl-2 o XIAP.",
    "targetSectionId": "sec-17-granzimaa"
  },
  {
    "id": "gen-283",
    "lessonNumber": 18,
    "lessonTitle": "18. Recettori Attivatori ed Inibitori delle Cellule NK",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale proteina adattatrice transmembrana contenente il motivo citosolico YINM recluta la subunità p85 della PI3K e il complesso Grb2-Vav1 a valle del recettore attivatorio NKG2D nell'uomo?",
    "options": [
      "DAP12",
      "Catena CD3-zeta",
      "DAP10",
      "MyD88"
    ],
    "correctIndex": 2,
    "explanation": "Nell'uomo, il recettore omodimerico NKG2D si associa esclusivamente con la catena adattatrice DAP10; DAP10 non possiede motivi ITAM canonici ma un motivo YINM che, una volta fosforilato, attiva potentemente la via della fosfoinositide 3-chinasi (PI3K) e la citotossicità cellulare.",
    "clinicalPearl": "Nei topi NKG2D può associarsi sia a DAP10 che a DAP12; la restrizione a DAP10 nella specie umana è un classico quesito d'esame sulla biochimica della trasduzione delle cellule NK.",
    "targetSectionId": "sec-18-dap10"
  },
  {
    "id": "gen-284",
    "lessonNumber": 18,
    "lessonTitle": "18. Recettori Attivatori ed Inibitori delle Cellule NK",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale famiglia di ligandi di NKG2D correlati a MHC è costituita da glicoproteine transmembrana polimorfiche iperespresse da cellule sottoposte a stress genotossico, infezioni virali o trasformazione neoplastica?",
    "options": [
      "Molecole B7-H6",
      "Antigeni CD1d",
      "Molecole HLA-G",
      "Proteine MICA e MICB"
    ],
    "correctIndex": 3,
    "explanation": "MICA e MICB (MHC Class I Polypeptide-Related Sequence A e B) possiedono tre domini extracellulari alfa ma non associano la beta2-microglobulina né legano peptidi; fungono da segnali di pericolo 'induced-self' che allertano le cellule NK e i linfociti T CD8+ tramite NKG2D.",
    "clinicalPearl": "Numerosi carcinomi avanzati rilasciano MICA e MICB in forma solubile nel plasma attraverso il taglio proteolitico mediato da metalloproteinasi della matrice (ADAM10, ADAM17); le forme solubili legano NKG2D inducendone l'internalizzazione e paralizzando la funzione NK.",
    "targetSectionId": "sec-18-micab"
  },
  {
    "id": "gen-285",
    "lessonNumber": 18,
    "lessonTitle": "18. Recettori Attivatori ed Inibitori delle Cellule NK",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale recettore naturale di citotossicità (NCR1 o CD335) è espresso costitutivamente su tutte le cellule NK umane a riposo e trasduce attraverso eterodimeri o omodimeri di CD3-zeta e catene Fc-epsilon-RI-gamma contenenti ITAM?",
    "options": [
      "NKp46",
      "NKp44",
      "NKp30",
      "NKG2D"
    ],
    "correctIndex": 0,
    "explanation": "NKp46 (CD335) è l'unico NCR presente costitutivamente sia nell'uomo che nel topo su tutte le cellule NK; possiede una carica positiva (arginina) nel segmento transmembrana che si accoppia con aspartati delle catene CD3-zeta o Fc-epsilon-RI-gamma.",
    "clinicalPearl": "L'espressione di NKp46 è così rigorosamente ristretta alle cellule NK che viene universalmente impiegata come marcatore di identificazione fenotipica definitiva per citometria a flusso ed immunoistochimica.",
    "targetSectionId": "sec-18-nkp46"
  },
  {
    "id": "gen-286",
    "lessonNumber": 18,
    "lessonTitle": "18. Recettori Attivatori ed Inibitori delle Cellule NK",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale membro della famiglia dei Natural Cytotoxicity Receptors (NCR2 o CD336) NON è espresso sulle cellule NK quiescenti ma viene rapidamente indotto sulla membrana in seguito ad attivazione con citochine come IL-2 o IL-15?",
    "options": [
      "NKp46",
      "NKp44",
      "NKp30",
      "DNAM-1"
    ],
    "correctIndex": 1,
    "explanation": "NKp44 è un recettore attivatorio inducibile; si associa con la catena adattatrice DAP12 contenente un motivo ITAM citosolico che recluta le chinasi Syk o ZAP-70 potenziando la citotossicità delle NK attivate.",
    "clinicalPearl": "NKp44 è espresso anche su alcune sottopopolazioni di cellule linfoidi innate di tipo 3 (ILC3) a livello della mucosa intestinale, dove contribuisce alla regolazione della barriera epiteliale.",
    "targetSectionId": "sec-18-nkp44"
  },
  {
    "id": "gen-287",
    "lessonNumber": 18,
    "lessonTitle": "18. Recettori Attivatori ed Inibitori delle Cellule NK",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale ligando tumorale transmembrana appartenente alla famiglia B7 è specificamente riconosciuto dal recettore attivatorio NKp30 (CD337)?",
    "options": [
      "PD-L1",
      "CD80 (B7-1)",
      "B7-H6",
      "ICOSL"
    ],
    "correctIndex": 2,
    "explanation": "B7-H6 è espresso specificamente su numerose linee cellulari trasformate tumorali e non sui tessuti sani; il suo legame ad alta affinità con NKp30 innesca la degranulazione litica della cellula NK mediata dalla catena CD3-zeta.",
    "clinicalPearl": "Forme solubili di B7-H6 nel siero di pazienti con neuroblastoma metastatico o linfoma fungono da esca neutralizzante per NKp30, correlano con stadio clinico avanzato e ridotta sopravvivenza globale.",
    "targetSectionId": "sec-18-b7h6"
  },
  {
    "id": "gen-288",
    "lessonNumber": 18,
    "lessonTitle": "18. Recettori Attivatori ed Inibitori delle Cellule NK",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale recettore attivatorio e di adesione espresso dalle cellule NK (DNAM-1 o CD226) compete con il checkpoint inibitorio TIGIT per il legame con i ligandi CD155 (PVR) e CD112 (Nectina-2)?",
    "options": [
      "CD16a",
      "CD94",
      "KIR2DL1",
      "DNAM-1 (CD226)"
    ],
    "correctIndex": 3,
    "explanation": "DNAM-1 contiene domini immunoglobulinici che legano PVR (CD155) e Nectina-2 (CD112) inducendo segnali attivatori; TIGIT e CD96 legano gli stessi ligandi con affinità maggiore ma trasducono segnali inibitori mediati da ITIM.",
    "clinicalPearl": "Nel microambiente tumorale iperinfiammatorio, le cellule NK vanno incontro a downregulation di DNAM-1 e contestuale iperespressione di TIGIT, conducendo al blocco funzionale della citotossicità antitumorale.",
    "targetSectionId": "sec-18-dnam1"
  },
  {
    "id": "gen-289",
    "lessonNumber": 19,
    "lessonTitle": "19. Recettori KIR, Educazione NK & ADCC",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale residuo aminoacidico in posizione 80 della catena pesante delle molecole HLA-C discrimina il gruppo di epitopi C1 (legato da KIR2DL2/3) rispetto al gruppo C2 (legato da KIR2DL1)?",
    "options": [
      "Asparagina in posizione 80 nel gruppo C1 rispetto a Lisina in posizione 80 nel gruppo C2",
      "Treonina in 80 rispetto ad Alanina in 80",
      "Arginina in 80 rispetto a Triptofano in 80",
      "Leucina in 80 rispetto a Valina in 80"
    ],
    "correctIndex": 0,
    "explanation": "Il dimorfismo dell'ansa alfa-1 delle molecole HLA-C è determinato dal residuo 80: le varianti HLA-C1 possiedono un'asparagina (Asn80) e vengono legate da KIR2DL2 e KIR2DL3; le varianti HLA-C2 possiedono una lisina (Lys80) e vengono legate selettivamente da KIR2DL1.",
    "clinicalPearl": "L'interazione KIR2DL1/HLA-C2 trasduce un segnale inibitorio biochimicamente più forte e rigido rispetto a KIR2DL2/HLA-C1, influenzando la suscettibilità a preeclampsia materna e la risposta a infezioni virali.",
    "targetSectionId": "sec-19-kirhlac"
  },
  {
    "id": "gen-290",
    "lessonNumber": 19,
    "lessonTitle": "19. Recettori KIR, Educazione NK & ADCC",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale fosfatasi citoplasmatica contenente doppi domini SH2 viene reclutata e attivata dalle tirosine fosforilate dei motivi ITIM sulle code intracellulari dei recettori KIR inibitori?",
    "options": [
      "Fosfatasi calcineurina",
      "SHP-1 (Src homology 2 domain-containing protein tyrosine phosphatase 1)",
      "Fosfatasi CD45",
      "Fosfatasi PP2A"
    ],
    "correctIndex": 1,
    "explanation": "I motivi ITIM fosforilati dei KIR legano e attivano SHP-1; SHP-1 defosforila prontamente proteine cardine della segnalazione attivatoria della sinapsi litica, in particolare il fattore di scambio nucleotidico Vav1, bloccando la riorganizzazione dell'actina e la degranulazione.",
    "clinicalPearl": "La defosforilazione di Vav1 è considerata l'interruttore biochimico 'off' primario con cui le cellule NK decidono di interrompere la sinapsi litica e risparmiare la cellula sana.",
    "targetSectionId": "sec-19-shp1"
  },
  {
    "id": "gen-291",
    "lessonNumber": 19,
    "lessonTitle": "19. Recettori KIR, Educazione NK & ADCC",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale molecola HLA di classe Ib non classica è legata con altissima specificità dal recettore inibitorio eterodimerico conservato CD94/NKG2A?",
    "options": [
      "HLA-G",
      "HLA-F",
      "HLA-E",
      "HLA-A2"
    ],
    "correctIndex": 2,
    "explanation": "HLA-E alloggia all'interno della sua tasca peptidica i peptidi segnale (leader peptides) derivati dalla biosintesi delle molecole HLA-A, B e C; CD94/NKG2A monitora complessivamente l'integrità della sintesi di classe I cellulare riconoscendo questo peptide leader esposto su HLA-E.",
    "clinicalPearl": "L'anticorpo monoclonale Monalizumab è un inibitore di checkpoint che blocca specificamente NKG2A, sbloccando la citotossicità antitumorale di NK e CTL CD8+ nei carcinomi della testa e del collo.",
    "targetSectionId": "sec-19-nkg2a"
  },
  {
    "id": "gen-292",
    "lessonNumber": 19,
    "lessonTitle": "19. Recettori KIR, Educazione NK & ADCC",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "In che cosa consiste il processo biologico di 'licensing' (o educazione funzionale) delle cellule NK durante la loro maturazione?",
    "options": [
      "Nell'esclusione allelica dei loci per le immunoglobuline",
      "Nel riarrangiamento somatico dei geni TCR-delta",
      "Nell'eliminazione apoptotica timica di tutte le cellule che legano il self",
      "Nell'acquisizione della piena competenza citotossica ed effettrice solo da parte delle cellule NK i cui recettori inibitori hanno ingaggiato con successo molecole MHC-I autologhe"
    ],
    "correctIndex": 3,
    "explanation": "Le cellule NK che esprimono un recettore inibitorio (KIR o NKG2A) specifico per le molecole MHC-I dell'individuo ricevono segnali tonici educativi che ne sintonizzano il macchinario secretorio ('licensing'); le cellule NK prive di recettori per il self rimangono 'uneducated' o anergiche, prevenendo reazioni autoimmuni.",
    "clinicalPearl": "Le cellule NK iporesponsive non educate non sono tuttavia morte: possono essere risvegliate e attivate da forti stimoli infiammatori o citochine come IL-2 e IL-15 durante gravi infezioni virali.",
    "targetSectionId": "sec-19-licensing"
  },
  {
    "id": "gen-293",
    "lessonNumber": 19,
    "lessonTitle": "19. Recettori KIR, Educazione NK & ADCC",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale recettore di membrana a bassa affinità per il frammento Fc delle immunoglobuline (Fc-gamma-RIIIA o CD16a) è espresso sulla maggior parte delle cellule NK periferiche mediando la citotossicità cellulare anticorpo-dipendente (ADCC)?",
    "options": [
      "CD16a (Fc-gamma-RIIIA)",
      "CD32a (Fc-gamma-RIIA)",
      "CD64 (Fc-gamma-RI)",
      "CD23 (Fc-epsilon-RII)"
    ],
    "correctIndex": 0,
    "explanation": "CD16a è espresso sulle cellule NK CD56dim; lega la porzione Fc di anticorpi IgG1 e IgG3 legati ad antigeni cellulari bersaglio, provocando una massiccia attivazione litica e degranulazione mediata dalle catene CD3-zeta associate, indipendentemente dalla costimolazione.",
    "clinicalPearl": "L'efficacia terapeutica di anticorpi monoclonali oncologici come Rituximab (anti-CD20) e Trastuzumab (anti-HER2) dipende in larga misura dall'innesco dell'ADCC mediata da CD16a sulle cellule NK.",
    "targetSectionId": "sec-19-adcc"
  },
  {
    "id": "gen-294",
    "lessonNumber": 19,
    "lessonTitle": "19. Recettori KIR, Educazione NK & ADCC",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale polimorfismo genetico a carico della posizione aminoacidica 158 di CD16a (Fc-gamma-RIIIA) conferisce un'affinità significativamente superiore per le IgG1 umane correlando con una migliore risposta clinica all'immunoterapia?",
    "options": [
      "Variante 158-Alanina",
      "Polimorfismo Valina/Fenilalanina (variante 158V rispetto a 158F)",
      "Variante 158-Glicina",
      "Variante 158-Prolina"
    ],
    "correctIndex": 1,
    "explanation": "La presenza di una Valina invece di una Fenilalanina in posizione 158 (CD16a-158V) aumenta notevolmente l'affinità di legame per il dominio Fc delle IgG1 umane, determinando una più potente attivazione delle NK e superiore ADCC.",
    "clinicalPearl": "I pazienti affetti da linfoma follicolare o carcinoma mammario omozigoti per l'allele CD16a-158V mostrano tassi di risposta obiettiva e sopravvivenza libera da progressione nettamente superiori quando trattati con Rituximab o Trastuzumab.",
    "targetSectionId": "sec-19-cd16polimorfismo"
  },
  {
    "id": "gen-295",
    "lessonNumber": 19,
    "lessonTitle": "19. Recettori KIR, Educazione NK & ADCC",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale sottopopolazione di cellule NK umane costituisce circa il 90% delle NK circolanti nel sangue periferico, esprime bassi livelli di CD56, alti livelli di CD16 ed è caratterizzata da elevata citotossicità naturale?",
    "options": [
      "Cellule NK CD56bright CD16negative",
      "Cellule ILC1 epatiche",
      "Cellule NK CD56dim CD16bright",
      "Cellule NKT invarianti"
    ],
    "correctIndex": 2,
    "explanation": "Le cellule NK si dividono in due sottogruppi primari: le CD56bright CD16neg/dim (10% nel sangue, predominanti nei linfonodi, specializzate nella secrezione di citochine come IFN-gamma) e le CD56dim CD16bright (90% nel sangue, ricche di granuli di perforina e ad alta attività litica citotossica ed ADCC).",
    "clinicalPearl": "Durante le risposte a infezioni croniche come il Citomegalovirus (CMV), una quota di cellule NK CD56dim può differenziare in cellule 'adaptive' o memory-like con perdita di CD161 e iperespressione del recettore attivatorio NKG2C.",
    "targetSectionId": "sec-19-sottopopolazioni"
  },
  {
    "id": "gen-296",
    "lessonNumber": 19,
    "lessonTitle": "19. Recettori KIR, Educazione NK & ADCC",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Nel contesto del trapianto allogenico aploidentico di midollo osseo nelle leucemie acute (modello Velardi), quale condizione definisce il 'KIR-ligand mismatch' bidirezionale favorevole?",
    "options": [
      "La presenza nel ricevente di tutte le molecole HLA-C presenti nel donatore",
      "La totale identità aplotipica tra donatore e ricevente",
      "La delezione completa di tutti i recettori KIR nel genoma del donatore",
      "L'assenza nel ricevente leucemico di uno o più alleli HLA di classe I (es. gruppo C1 o C2) che fungono da ligandi per i recettori KIR inibitori espressi dalle NK del donatore"
    ],
    "correctIndex": 3,
    "explanation": "Se le cellule leucemiche del ricevente mancano dell'allele HLA-C o HLA-B specifico per il KIR del donatore, le cellule NK allogeniche mature del donatore infuse non ricevono il segnale inibitorio e mediano una potente lisi diretta dei blasti leucemici residui (effetto Graft-versus-Leukemia) senza innescare GVHD poiché i tessuti non esprimono antigeni costimolatori.",
    "clinicalPearl": "Il protocollo di selezione del donatore aploidentico basato sul KIR-mismatch ha rivoluzionato il tasso di sopravvivenza libera da malattia nella Leucemia Mieloide Acuta (LMA) ad alto rischio.",
    "targetSectionId": "sec-19-trapiantoaplo"
  },
  {
    "id": "gen-297",
    "lessonNumber": 17,
    "lessonTitle": "17. Cellule NK & Meccanismi Molecolari di Citotossicità",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale recettore della superfamiglia del TNF espresso sulle cellule bersaglio lega FasL (CD178) inducendo la formazione del complesso DISC e l'autoattivazione della caspasi-8 nell'apoptosi estrinseca mediata da CTL ed NK?",
    "options": [
      "Fas (CD95 / APO-1)",
      "Recettore TNF-R2",
      "TRAIL-R3 (DcR1)",
      "CD40"
    ],
    "correctIndex": 0,
    "explanation": "FasL trimerizzato lega Fas; i domini di morte intracellulari (Death Domain) di Fas reclutano la proteina adattatrice FADD, che a sua volta recluta pro-caspasi-8 e pro-caspasi-10 assemblando il Death-Inducing Signaling Complex (DISC).",
    "clinicalPearl": "Mutazioni genetiche autosomiche dominanti in FAS, FASL o CASP10 causano la Sindrome Linfoproliferativa Autoimmune (ALPS), caratterizzata da mancata eliminazione apoptotica dei linfociti attivati con linfoadenopatia massiva, splenomegalia ed espansione di linfociti T doppi negativi TCR-alfa/beta CD4- CD8-.",
    "targetSectionId": "sec-17-fas"
  },
  {
    "id": "gen-298",
    "lessonNumber": 17,
    "lessonTitle": "17. Cellule NK & Meccanismi Molecolari di Citotossicità",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale proteina dei granuli citotossici ad omologia saposinica possiede un'azione litica diretta e specifica contro la complessa parete cerosa ricca di acidi micolici di Mycobacterium tuberculosis?",
    "options": [
      "Perforina",
      "Granulisina",
      "Granzima B",
      "Serglicina"
    ],
    "correctIndex": 1,
    "explanation": "La granulisina è una proteina cationica anfipatica presente nei granuli dei CTL e delle cellule NK umane; inserendosi nella parete lipidica dei batteri e funghi, altera i gradienti osmotici uccidendo micobatteri intracellulari senza danneggiare la cellula ospite.",
    "clinicalPearl": "I topi non possiedono l'omologo del gene della granulisina; questo rende i modelli murini inadatti per studiare appieno questa specifica via di killing citotossico antitubercolare umana.",
    "targetSectionId": "sec-17-granulisina"
  },
  {
    "id": "gen-299",
    "lessonNumber": 18,
    "lessonTitle": "18. Recettori Attivatori ed Inibitori delle Cellule NK",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale membro della famiglia dei ligandi ULBP (UL16-Binding Proteins) di NKG2D si caratterizza per l'ancoraggio alla membrana plasmatica mediante coda a glicosilfosfatidilinositolo (GPI) anziché segmento transmembrana?",
    "options": [
      "MICA",
      "MICB",
      "ULBP1 e ULBP2",
      "HLA-E"
    ],
    "correctIndex": 2,
    "explanation": "A differenza di MICA/B che sono proteine transmembrana classiche, ULBP1, ULBP2, ULBP3 e ULBP6 sono proteine ancorate tramite glicosilfosfatidilinositolo (GPI); legano il dominio lectina-like di NKG2D attivando le cellule NK.",
    "clinicalPearl": "Nell'Emoglobinuria Parossistica Notturna (EPN), il difetto della sintesi dell'ancora GPI determina la perdita della superficie eritrocitaria e leucocitaria di questi ligandi, proteggendo parzialmente le cellule mutanti dal killing mediato da NKG2D.",
    "targetSectionId": "sec-18-ulbp"
  },
  {
    "id": "gen-300",
    "lessonNumber": 19,
    "lessonTitle": "19. Recettori KIR, Educazione NK & ADCC",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale caratteristica di nomenclatura distingue strutturalmente e funzionalmente i recettori KIR inibitori (es. KIR2DL1) dai recettori KIR attivatori (es. KIR2DS1)?",
    "options": [
      "Il numero di domini lectinici extracellulari",
      "La presenza di ponti disolfuro intracatena",
      "La capacità di legare antigeni polisaccaridici",
      "La lunghezza della coda citoplasmatica: coda lunga ('L') contenente motivi ITIM vs coda corta ('S') associata alla proteina adattatrice DAP12 contenente ITAM"
    ],
    "correctIndex": 3,
    "explanation": "La nomenclatura ufficiale dei geni KIR riflette la struttura: il numero (2D o 3D) indica il numero di domini immunoglobulinici extracellulari (due o tre); il suffisso 'L' (Long) indica una lunga coda citoplasmatica dotata di due motivi ITIM inibitori; il suffisso 'S' (Short) indica una coda corta con una lisina carica positivamente che ancora DAP12 per inviare segnali attivatori.",
    "clinicalPearl": "La prof.ssa Galandrini richiede frequentemente la decodifica della sigla: ad esempio KIR2DL1 riconosce HLA-C2 ed è inibitorio, mentre KIR2DS1 ha la medesima specificità per HLA-C2 ma è attivatorio.",
    "targetSectionId": "sec-19-nomenclaturakir"
  },
  {
    "id": "gen-301",
    "lessonNumber": 11,
    "lessonTitle": "11. Sviluppo Timico & Architettura del Timo",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale struttura epiteliale concentrica caratteristica della midollare timica è formata da cellule epiteliali timiche midollari (mTEC) degenerate e cheratinizzate e secerne citochine come TSLP?",
    "options": [
      "Corpuscoli di Hassall",
      "Centri germinativi midollari",
      "Isole di Pander",
      "Cripte di Lieberkühn timiche"
    ],
    "correctIndex": 0,
    "explanation": "I corpuscoli di Hassall sono formazioni epiteliali lamellari concentriche esclusive della midollare del timo; secernono la linfopoietina stromale timica (TSLP), che attiva le cellule dendritiche midollari a promuovere la generazione dei linfociti T regolatori naturali (tTreg) CD4+ CD25+ FoxP3+.",
    "clinicalPearl": "Il numero dei corpuscoli di Hassall aumenta con l'età e durante stati infiammatori acuti, fungendo da marker istologico di maturità e differenziamento dell'epitelio timico midollare.",
    "targetSectionId": "sec-11-hassall"
  },
  {
    "id": "gen-302",
    "lessonNumber": 6,
    "lessonTitle": "06. Organi Linfoidi Secondari & Traffico Leucocitario",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale popolazione macrofagica specializzata risiede nel seno sottocapsulare del linfonodo esprimendo alti livelli di CD169 (Sialoadesina) per catturare virus e batteri intatti dalla linfa afferente e trasferirli ai linfociti B follicolari?",
    "options": [
      "Macrofagi dei cordoni midollari",
      "Macrofagi del seno sottocapsulare (SSM)",
      "Cellule di Kupffer linfonodali",
      "Macrofagi a corpo tingibile"
    ],
    "correctIndex": 1,
    "explanation": "I macrofagi del seno sottocapsulare (SSM, Subcapsular Sinus Macrophages) hanno una scarsa attività degradativa lisosomiale; trattengono particelle virali e immunocomplessi intatti sulla loro membrana esponendoli direttamente attraverso lo strato corticale ai linfociti B sottostanti.",
    "clinicalPearl": "Questa via di trasporto 'in trans' da parte degli SSM consente una rapida attivazione dei linfociti B follicolari entro pochi minuti dall'ingresso di un patogeno nel vaso linfatico afferente.",
    "targetSectionId": "sec-6-ssm"
  },
  {
    "id": "gen-303",
    "lessonNumber": 1,
    "lessonTitle": "01. Fondamenti del Sistema Immunitario ed Ematopoiesi",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale recettore tirosina chinasico della famiglia RTK di classe III (noto anche come CD135) è espresso sui progenitori ematopoietici precoci ed è fondamentale per lo sviluppo delle cellule dendritiche convenzionali e plasmacitoidi?",
    "options": [
      "c-Kit (CD117)",
      "Recettore M-CSFR (CD115)",
      "Flt3 (FMS-like tyrosine kinase 3 / FLK2)",
      "Recettore TIE-2"
    ],
    "correctIndex": 2,
    "explanation": "Il legame di Flt3-Ligand (Flt3L) al recettore Flt3 espresso sui precursori midollari induce l'espansione e il differenziamento sia delle cellule dendritiche mieloidi convenzionali (cDC1 e cDC2) sia delle cellule dendritiche plasmacitoidi (pDC).",
    "clinicalPearl": "Mutazioni attivanti con duplicazione tandem interna (Flt3-ITD) si riscontrano in circa il 30% dei pazienti con Leucemia Mieloide Acuta (LMA) e identificano una classe prognostica particolarmente aggressiva trattata con inibitori specifici (Midostaurina, Gilteritinib).",
    "targetSectionId": "sec-0-flt3"
  },
  {
    "id": "gen-304",
    "lessonNumber": 1,
    "lessonTitle": "01. Barriere Epiteliali & Peptidi Antimicrobici",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale proteina transmembrana a 4 domini delle giunzioni serrate (tight junctions) epiteliali stabilisce la selettività di carica e dimensione per il passaggio paracellulare di ioni e soluti?",
    "options": [
      "E-caderina",
      "Connessina-43",
      "Desmogleina-1",
      "Claudine (famiglia delle Claudine)"
    ],
    "correctIndex": 3,
    "explanation": "Le claudine sono le componenti strutturali e funzionali primarie delle tight junctions; legano in modo omofilico e eterofilico le cellule adiacenti determinando la permeabilità e la resistenza elettrica transepiteliale della barriera mucosa.",
    "clinicalPearl": "Tossine batteriche come l'enterotossina di Clostridium perfringens legano specificamente i domini extracellulari di Claudina-3 e Claudina-4 provocando la formazione di pori litici e la disgregazione della barriera epiteliale intestinale.",
    "targetSectionId": "sec-1-claudine"
  },
  {
    "id": "gen-305",
    "lessonNumber": 4,
    "lessonTitle": "04. PRR, Inflammasoma & Risposta Infiammatoria",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale recettore lectinico di tipo C espresso sui macrofagi riconosce il fattore cordale (trealosio-6,6'-dimicolato) presente sulla parete di Mycobacterium tuberculosis trasducendo attraverso l'adattatore Fc-R-gamma e la chinasi Syk?",
    "options": [
      "Mincle (CLEC4E)",
      "Recettore del Mannosio",
      "DC-SIGN",
      "Langerina"
    ],
    "correctIndex": 0,
    "explanation": "Mincle (Macrophage-inducible C-type lectin) riconosce glicolipidi micobatterici (in particolare il trealosio dimicolato o cord factor) e ligandi endogeni di danno tissutale come la ribonucleoproteina SAP130, attivando la via Syk-CARD9.",
    "clinicalPearl": "La stimolazione di Mincle da parte del cord factor è il meccanismo molecolare con cui l'adiuvante completo di Freund (CFA) stimola una potente risposta immunitaria cellulo-mediata negli studi immunologici.",
    "targetSectionId": "sec-4-mincle"
  },
  {
    "id": "gen-306",
    "lessonNumber": 4,
    "lessonTitle": "04. PRR, Inflammasoma & Risposta Infiammatoria",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale inflammasoma è formato da una proteina sensore (Pyrin o marenostrina) che monitora lo stato di modificazione o inattivazione delle piccole GTPasi RhoA indotto da tossine batteriche (come quelle di Clostridium difficile)?",
    "options": [
      "Inflammasoma NLRP3",
      "Inflammasoma Pyrin (codificato dal gene MEFV)",
      "Inflammasoma AIM2",
      "Inflammasoma NLRC4"
    ],
    "correctIndex": 1,
    "explanation": "Pyrin non lega direttamente le tossine, ma percepisce la deattivazione di RhoA: quando RhoA è attiva, le chinasi PKN fosforilano Pyrin che viene sequestrata dalla proteina 14-3-3; se una tossina inattiva RhoA, Pyrin perde la fosforilazione e si assembla con ASC attivando caspasi-1.",
    "clinicalPearl": "Mutazioni recessive nel gene MEFV causano la Febbre Mediterranea Familiare (FMF), caratterizzata da episodi ricorrenti di febbre, sierosite dolorosa peritonitica/pleurica e rischio di amiloidosi secondaria da proteina SAA, trattata con Colchicina.",
    "targetSectionId": "sec-4-pyrin"
  },
  {
    "id": "gen-307",
    "lessonNumber": 4,
    "lessonTitle": "04. PRR, Inflammasoma & Risposta Infiammatoria",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale alarmina appartenente alla famiglia delle citochine dell'IL-1 (IL-33) è localizzata constitutivamente nel nucleo delle cellule epiteliali ed endoteliali e viene rilasciata a seguito di necrosi legando il recettore ST2 (IL-1RL1)?",
    "options": [
      "Interleuchina-1-alfa",
      "Interleuchina-18",
      "Interleuchina-33 (IL-33)",
      "Interleuchina-36-gamma"
    ],
    "correctIndex": 2,
    "explanation": "IL-33 agisce come alarmina nucleare intracellulare; quando rilasciata per necrosi da danno di barriera, si lega al recettore eterodimerico ST2/IL-1RAcP presente su mastociti, basofili, eosinofili e cellule ILC2, stimolando una massiccia produzione di IL-5 e IL-13.",
    "clinicalPearl": "Forme solubili del recettore ST2 (sST2) rilasciate nel siero fungono da recettori esca per IL-33 e sono utilizzate in cardiologia come biomarcatore prognostico di stress miocardico e rimodellamento nello scompenso cardiaco acuto e cronico.",
    "targetSectionId": "sec-4-il33"
  },
  {
    "id": "gen-308",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale via di morte cellulare programmata infiammatoria non apoptotica (necroptosi) viene innescata dal recettore TNFR1 quando la caspasi-8 è bloccata o inibita da proteine virali?",
    "options": [
      "Piroptosi mediata da gasdermina D",
      "Autofagia chaperon-mediata",
      "Entosi cellulare",
      "Oligomerizzazione di RIPK1 e RIPK3 con fosforilazione e traslocazione alla membrana della pseudochinasi MLKL"
    ],
    "correctIndex": 3,
    "explanation": "In assenza di attività della caspasi-8, RIPK1 e RIPK3 non vengono clivate e formano il complesso 'necroptosoma'; RIPK3 fosforila la pseudochinasi MLKL, che oligomerizza e migra nella membrana plasmatica distruggendone l'integrità osmotica e provocando necrosi cellulare.",
    "clinicalPearl": "La necroptosi è un meccanismo di backup cruciale con cui l'organismo elimina cellule infettate da virus (come Cytomegalovirus o Poxvirus) che esprimono proteine inibitorie specifiche delle caspasi (es. vICA o CrmA).",
    "targetSectionId": "sec-5-necroptosi"
  },
  {
    "id": "gen-309",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale gruppo di citochine antivirali (Interferoni di tipo III o IFN-lambda) segnala attraverso il recettore eterodimerico IFNLR1 / IL-10R2 espresso primariamente sulle cellule epiteliali delle barriere respiratorie ed intestinali?",
    "options": [
      "IFN-lambda-1, IFN-lambda-2, IFN-lambda-3 e IFN-lambda-4",
      "IFN-alfa e IFN-beta",
      "IFN-gamma omodimerico",
      "Interleuchina-22 e Interleuchina-26"
    ],
    "correctIndex": 0,
    "explanation": "Gli interferoni lambda (tipo III) condividono la cascata JAK-STAT e i geni ISG degli interferoni di tipo I, ma il loro recettore IFNLR1 è espresso selettivamente sugli epiteli di barriera; questo consente di proteggere le mucose da infezioni virali senza scatenare la tossicità infiammatoria sistemica tipica degli IFN di tipo I.",
    "clinicalPearl": "Polimorfismi nel locus del gene IFNL4 (come la variante ss469415590) sono strettamente associati alla clearance spontanea del virus dell'epatite C (HCV) e alla risposta alla terapia antivirale.",
    "targetSectionId": "sec-5-ifnlambda"
  },
  {
    "id": "gen-310",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale inibitore selettivo allosterico della tirosina chinasi Tyk2 approvato per la psoriasi a placche blocca selettivamente il dominio pseudochinasico JH2 anziché la tasca catalitica ATP?",
    "options": [
      "Tofacitinib",
      "Deucravacitinib",
      "Ruxolitinib",
      "Upadacitinib"
    ],
    "correctIndex": 1,
    "explanation": "Deucravacitinib si lega specificamente al dominio regolatorio pseudochinasico JH2 di Tyk2, stabilizzando una conformazione autoinibitoria; questo previene il legame aspecifico alle tasche catalitiche di JAK1, JAK2 o JAK3, minimizzando gli effetti collaterali ematologici tipici dei pan-JAK inibitori.",
    "clinicalPearl": "Il blocco di Tyk2 sopprime simultaneamente le vie recettoriali di IL-23, IL-12 e IFN di tipo I, rendendolo un bersaglio ideale nelle malattie autoimmuni a patogenesi Th17 e Th1.",
    "targetSectionId": "sec-5-tyk2"
  },
  {
    "id": "gen-311",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale meccanismo molecolare spegne la segnalazione dei recettori per chemochine accoppiati a proteine G (GPCR) inducendone la desensibilizzazione omologa e l'internalizzazione mediata da clatrina?",
    "options": [
      "Fosforilazione della subunità G-alfa da parte di Lck",
      "Idrolisi diretta dell'anello recettoriale da parte della proteasi MMP-9",
      "Fosforilazione della coda citoplasmatica C-terminale del GPCR da parte delle chinasi GRK seguita dal reclutamento di beta-arrestine",
      "Metilazione della tasca transmembrana da parte di SAMHD1"
    ],
    "correctIndex": 2,
    "explanation": "Dopo stimolazione prolungata con chemochina, le chinasi GRK (G protein-coupled receptor kinases) fosforilano serine e treonine sulla coda C-terminale del recettore; questo promuove il legame ad alta affinità delle beta-arrestine, che impediscono l'ulteriore accoppiamento con le proteine G e collegano il recettore alle vescicole rivestite di clatrina per l'endocitosi.",
    "clinicalPearl": "Questo processo di desensibilizzazione e 'recettori cycling' consente ai leucociti di percepire incrementi progressivi nel gradiente chemochinico mentre si muovono verso il fuoco infiammatorio senza saturare irreversibilmente la risposta.",
    "targetSectionId": "sec-5-desensibilizzazione"
  },
  {
    "id": "gen-312",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale modificazione fenotipica di superficie caratterizza il neutrofilo senescente 'aged' prossimo alla clearance programmata dopo circa 6-8 ore di permanenza nel circolo ematico?",
    "options": [
      "Alti livelli di CD62L e assenza di CXCR4",
      "Espressione costitutiva di CD3 e CD19",
      "Perdita di CD11b e comparsa di BCR",
      "Perdita (shedding) della L-selectina (CD62L-basso) e progressiva upregolazione del recettore per chemochine CXCR4 (CXCR4-alto)"
    ],
    "correctIndex": 3,
    "explanation": "Durante l'invecchiamento circolante, il neutrofilo perde CD62L ed esprime alti livelli di CXCR4; questo fenotipo lo rende sensibile al gradiente di CXCL12 espresso nel midollo osseo, milza e fegato, dove rientra e viene prontamente fagocitato e digerito dai macrofagi tissutali per efferocitosi.",
    "clinicalPearl": "La clearance efferocitica dei neutrofili senescenti da parte dei macrofagi stimola il rilascio di segnali anti-infiammatori (TGF-beta e IL-10) che sopprimono l'ulteriore produzione di G-CSF, stabilizzando il numero fisiologico di neutrofili nel sangue (anello a feedback 'neutrostato').",
    "targetSectionId": "sec-4-neutrostat"
  },
  {
    "id": "gen-313",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale subunità della NADPH ossidasi citosolica contiene un dominio PX (Phox Homology) che lega specificamente il fosfatidilinositolo 3-fosfato (PI3P) sui fagosomi assicurando l'ancoraggio e l'attivazione spaziale del complesso NOX2?",
    "options": [
      "p40-phox (NCF4)",
      "p67-phox",
      "gp91-phox",
      "p22-phox"
    ],
    "correctIndex": 0,
    "explanation": "p40-phox possiede un dominio PX ad alta affinità per il lipide di membrana PI3P, generato sui fagosomi durante la fagocitosi; questo legame ancora fisicamente il complesso citosolico al fagosoma cooperando con p47-phox per l'assemblaggio completo di NOX2.",
    "clinicalPearl": "Mutazioni autosomiche recessive nel gene NCF4 (codificante p40-phox) sono state identificate in pazienti con una forma rara di Malattia Granulomatosa Cronica attenuata, caratterizzata da intolleranza infiammatoria intestinale simile a Crohn.",
    "targetSectionId": "sec-4-p40phox"
  },
  {
    "id": "gen-314",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "In che cosa si differenzia la 'NETosi vitale' rapida rispetto alla classica 'NETosi suicida' litica dei neutrofili?",
    "options": [
      "La NETosi vitale avviene solo in cellule prive di nucleo",
      "La NETosi vitale avviene entro 15-30 minuti mediante rilascio di vescicole contenenti DNA e granuli senza lisi della membrana plasmatica, consentendo al neutrofilo di continuare a migrare e fagocitare",
      "La NETosi vitale richiede l'attivazione della caspasi-3 e non impiega PAD4",
      "La NETosi vitale produce esclusivamente filamenti di RNA"
    ],
    "correctIndex": 1,
    "explanation": "Nella NETosi suicida canonica (lenta, 2-4 ore), la cellula muore per rottura dell'involucro nucleare e della membrana plasmatica ROS-dipendente; nella NETosi vitale (rapida), il DNA decondensato viene esocitato attraverso vescicole secretorie preservando la vitalità cellulare, motilità chemotattica e fagocitosi del citoplasto.",
    "clinicalPearl": "La NETosi vitale è osservata frequentemente durante infezioni batteriche sistemiche fulminanti da Staphylococcus aureus, dove rappresenta un meccanismo immediato di intrappolamento vascolare dei cocchi.",
    "targetSectionId": "sec-4-netosivitale"
  },
  {
    "id": "gen-315",
    "lessonNumber": 6,
    "lessonTitle": "06. Cascata di Adesione & Stravaso Leucocitario",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale proteina guanine nucleotide exchange factor (GEF) attivata dal calcio e dal diacilglicerolo (CalDAG-GEFI) è essenziale per attivare la GTPasi Rap1 nella segnalazione inside-out delle integrine neutrofile?",
    "options": [
      "SOS1",
      "Vav1",
      "CalDAG-GEFI (RASGRP2)",
      "RasGRP1"
    ],
    "correctIndex": 2,
    "explanation": "L'innesco dei recettori chemochinici genera Ca2+ e DAG, che attivano specificamente CalDAG-GEFI; questo fattore converte Rap1-GDP nella forma attiva Rap1-GTP, promuovendo il reclutamento della talina-1 alle code delle integrine beta-2 (LFA-1 e Mac-1).",
    "clinicalPearl": "Mutazioni inattivanti in RASGRP2 (CalDAG-GEFI) nell'uomo provocano una severa sindrome di disfunzione piastrinica e deficit di adesione leucocitaria lieve-moderata.",
    "targetSectionId": "sec-6-caldag"
  },
  {
    "id": "gen-316",
    "lessonNumber": 6,
    "lessonTitle": "06. Cascata di Adesione & Stravaso Leucocitario",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale conformazione tridimensionale assume l'eterodimero dell'integrina LFA-1 (alfaL-beta2) nello stato di massima affinità funzionale per ICAM-1?",
    "options": [
      "Conformazione ripiegata (bent) a bassa affinità",
      "Conformazione estesa con tasca del dominio I chiusa ad affinità intermedia",
      "Omodimero circolare privo di ioni bivalenti",
      "Conformazione estesa aperta (extended-open) con separazione delle code citoplasmatiche e apertura del dominio 'I' legante il magnesio"
    ],
    "correctIndex": 3,
    "explanation": "L'attivazione inside-out induce la distensione dell'ectodominio dell'integrina ('unbending') e la traslazione dell'elica C-terminale del dominio alfa-I, allargando la tasca MIDAS per coordinare lo ione Mg2+ che lega l'aspartato del dominio D1 di ICAM-1 con un incremento di affinità di oltre 10.000 volte.",
    "clinicalPearl": "La misurazione mediante anticorpi conformazionali specifici (come mAb 24 o KIM127) consente di quantificare lo stato di attivazione estesa delle integrine nei pazienti con sepsi o trombosi.",
    "targetSectionId": "sec-6-conformazioneintegrine"
  },
  {
    "id": "gen-317",
    "lessonNumber": 19,
    "lessonTitle": "19. Recettori KIR, Educazione NK & ADCC",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale recettore inibitorio polimorfico della famiglia KIR a tre domini extracellulari (KIR3DL1) riconosce specificamente l'epitopo pubblico HLA-Bw4 condiviso da un sottogruppo di molecole HLA-B e HLA-A?",
    "options": [
      "KIR3DL1",
      "KIR2DL1",
      "KIR2DL3",
      "KIR3DL2"
    ],
    "correctIndex": 0,
    "explanation": "KIR3DL1 possiede tre domini Ig extracellulari (D0, D1, D2); interagisce specificamente con l'epitopo dimorfo Bw4 (definito da aminoacidi specifici nelle posizioni 77-83 della catena alfa) espresso su alleli come HLA-B27, B57 e A32.",
    "clinicalPearl": "La combinazione genetica di specifici alleli ad alta espressione di KIR3DL1 associati ad HLA-B*57 o HLA-B*27 è fortemente correlata con un controllo eccellente e duraturo dell'infezione da HIV nei soggetti Long-Term Non-Progressors (LTNP).",
    "targetSectionId": "sec-19-kir3dl1"
  },
  {
    "id": "gen-318",
    "lessonNumber": 19,
    "lessonTitle": "19. Recettori KIR, Educazione NK & ADCC",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale recettore inibitorio transmembrana della famiglia delle Ig-like transcript (LILRB1 / ILT2 o CD85j) espresso sulle cellule NK e CTL lega con alta affinità la catena conservata non polimorfica beta2-microglobulina delle molecole HLA di classe I?",
    "options": [
      "KIR2DL4",
      "LILRB1 (ILT2 / CD85j)",
      "CD94",
      "NKG2D"
    ],
    "correctIndex": 1,
    "explanation": "LILRB1/ILT2 contiene quattro domini immunoglobulinici extracellulari che interagiscono non con la tasca peptidica polimorfica, bensì con il dominio monomorfo alfa-3 e con la beta2-microglobulina delle molecole HLA di classe I classiche e non classiche (come HLA-G), trasducendo segnali inibitori via ITIM/SHP-1.",
    "clinicalPearl": "La proteina virale UL18 del Citomegalovirus umano (HCMV) è un omologo di MHC-I che lega ILT2 con un'affinità 1000 volte superiore rispetto alle molecole HLA endogene, paralizzando l'attività delle cellule NK ed eludendo la risposta citotossica.",
    "targetSectionId": "sec-19-ilt2"
  },
  {
    "id": "gen-319",
    "lessonNumber": 18,
    "lessonTitle": "18. Recettori Attivatori ed Inibitori delle Cellule NK",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale recettore eterodimerico lectinico di tipo C attivatorio (CD94/NKG2C) riconosce HLA-E e si associa alla catena adattatrice DAP12 per inviare segnali litici nelle cellule NK adaptive?",
    "options": [
      "CD94 / NKG2A",
      "KIR2DL1",
      "CD94 / NKG2C",
      "DNAM-1"
    ],
    "correctIndex": 2,
    "explanation": "Mentre CD94/NKG2A contiene un motivo ITIM citosolico ed è inibitorio, l'eterodimero CD94/NKG2C possiede una lisina transmembrana che recluta l'adattatore DAP12 (dotato di ITAM), inviando un segnale attivatorio potente in risposta ad HLA-E che espone specifici peptidi virali derivati da CMV.",
    "clinicalPearl": "L'espansione clonale di cellule NK che esprimono CD94/NKG2C è il marcatore fenotipico identificativo della 'memoria immunitaria innata' delle cellule NK indotta dall'infezione da Cytomegalovirus.",
    "targetSectionId": "sec-19-nkg2c"
  },
  {
    "id": "gen-320",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale difetto genetico molecolare a carico della proteina regolatrice del traffico lisosomiale LYST (gene CHS1) provoca la Sindrome di Chediak-Higashi?",
    "options": [
      "Mutazione della subunità catalitica della tirosina chinasi Syk",
      "Deficit della proteina adattatrice MyD88",
      "Assenza completa di L-selectina",
      "Mutazioni loss-of-function nel gene LYST con formazione di inclusioni giganti azzurrofile lisosomiali non funzionanti"
    ],
    "correctIndex": 3,
    "explanation": "La proteina LYST controlla la fissione e dimensione dei lisosomi; la sua assenza causa la fusione abnorme e incontrollata dei granuli in formazioni megagranulari giganti nei neutrofili, monociti e cellule NK, impedendone la degranulazione nella sinapsi o nel fagosoma.",
    "clinicalPearl": "I segni patognomonici della Sindrome di Chediak-Higashi sono infezioni batteriche piogeniche recidivanti, albinismo parziale oculocutaneo (per difetto nei melanosomi), anomalie neurologiche progressive e l'insorgenza di una 'fase accelerata' emofagocitica (HLH) letale.",
    "targetSectionId": "sec-4-chediakhigashi"
  },
  {
    "id": "gen-321",
    "lessonNumber": 1,
    "lessonTitle": "01. Barriere Epiteliali & Peptidi Antimicrobici",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale lectina solubile appartenente alla famiglia delle collectine plasmatiche forma oligomeri a forma di bouquet e si lega ai residui di mannosio e glucosio dei microbi attivando la via lectinica del complemento?",
    "options": [
      "MBL (Mannose-Binding Lectin)",
      "Pentraxina 3 (PTX3)",
      "Proteina C reattiva",
      "Proteina sierica amiloide A"
    ],
    "correctIndex": 0,
    "explanation": "MBL possiede teste globulari lectiniche calcio-dipendenti (CRD) connesse a steli collagenici; quando lega ripetizioni zuccherine microbiche, subisce un cambio conformazionale che attiva le serina-proteasi associate MASP-1 e MASP-2, clivando C4 e C2.",
    "clinicalPearl": "Mutazioni strutturali o nei promotori del gene MBL2 sono presenti in oltre il 10% della popolazione generale e configurano un deficit di MBL, associato a un aumentato rischio di infezioni respiratorie severe nei bambini e nei pazienti neutropenici.",
    "targetSectionId": "sec-1-mbl"
  },
  {
    "id": "gen-322",
    "lessonNumber": 1,
    "lessonTitle": "01. Barriere Epiteliali & Peptidi Antimicrobici",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale pentraxina 'lunga' prodotta localmente da cellule endoteliali, macrofagi e cellule dendritiche in risposta a TNF e IL-1 funge da opsonina solubile riconoscendo Aspergillus fumigatus?",
    "options": [
      "Proteina C reattiva (CRP)",
      "Pentraxina 3 (PTX3)",
      "Amiloide sierica P (SAP)",
      "Fibrinogeno"
    ],
    "correctIndex": 1,
    "explanation": "A differenza delle pentraxine corte (CRP e SAP) sintetizzate dal fegato sotto stimolo di IL-6, PTX3 è una pentraxina lunga prodotta direttamente nella sede periferica dell'infezione da cellule stromali e mieloidi, opsonizzando funghi come Aspergillus fumigatus per la fagocitosi e attivando C1q.",
    "clinicalPearl": "Deficit genetici di PTX3 nei pazienti sottoposti a trapianto di cellule staminali ematopoietiche sono strettamente correlati a un'elevata incidenza di aspergillosi polmonare invasiva.",
    "targetSectionId": "sec-1-ptx3"
  },
  {
    "id": "gen-323",
    "lessonNumber": 2,
    "lessonTitle": "02. Pattern Recognition Receptors: Toll-Like Receptors",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale recettore endosomiale della famiglia TLR riconosce specificamente dinucleotidi citosina-guanina non metilati (motivi CpG) tipici del DNA genomico batterico e virale?",
    "options": [
      "TLR3",
      "TLR7",
      "TLR9",
      "TLR5"
    ],
    "correctIndex": 2,
    "explanation": "TLR9 è localizzato negli endolisosomi; riconosce sequenze oligonucleotidiche di DNA contenenti motivi CpG in cui la citosina è priva di metilazione sul carbonio 5 (mentre nel genoma dei mammiferi oltre il 70-80% dei residui CpG è constitutivamente metilato).",
    "clinicalPearl": "Oligonucleotidi CpG sintetici (ODN-CpG) sono formulati come potenti adiuvanti vaccinali per stimolare una robusta risposta T citotossica e la secrezione di IFN-alfa da parte delle pDC.",
    "targetSectionId": "sec-2-tlr9"
  },
  {
    "id": "gen-324",
    "lessonNumber": 3,
    "lessonTitle": "03. Sensori Intracellulari: NLR, RLR, STING & Inflammasomi",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale proteina sensore dell'inflammasoma riconosce direttamente cristalli intracellulari di urato monosodico (MSU) precipitati nel citoplasma o rilasciati per rottura lisosomiale?",
    "options": [
      "AIM2",
      "NLRC4",
      "NOD1",
      "NLRP3"
    ],
    "correctIndex": 3,
    "explanation": "I cristalli di urato monosodico (MSU) o di pirofosfato di calcio vengono fagocitati ma non digeriti; provocano danno della membrana lisosomiale e fuoriuscita di catepsine nel citosol con caduta del potassio intracellulare, innescando l'assemblaggio di NLRP3.",
    "clinicalPearl": "L'innesco di NLRP3 da cristalli di MSU con rilascio massivo di IL-1beta è la base fisiopatologica primaria della crisi artritica gottosa acuta; farmaci come la Colchicina e l'Anakinra bloccano selettivamente questo pathway.",
    "targetSectionId": "sec-3-gotta"
  },
  {
    "id": "gen-325",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale fattore di trascrizione STAT è attivato specificamente a valle del recettore per IL-12 (IL-12R-beta1 / IL-12R-beta2) inducendo l'espressione del master regulator T-bet nei linfociti T CD4+ naive?",
    "options": [
      "STAT4",
      "STAT6",
      "STAT3",
      "STAT5a"
    ],
    "correctIndex": 0,
    "explanation": "L'ingaggio di IL-12 attiva le chinasi JAK2 e Tyk2 associate alle catene recettoriali; queste fosforilano STAT4, che omodimerizza e penetra nel nucleo attivando la trascrizione di T-bet e di IFN-gamma, indirizzando irreversibilmente la polarizzazione Th1.",
    "clinicalPearl": "Deficit genetici di IL12RB1 o di STAT4 compromettono la produzione di IFN-gamma e provocano la sindrome da suscettibilità mendeliana alle infezioni da micobatteri (MSMD).",
    "targetSectionId": "sec-5-stat4"
  },
  {
    "id": "gen-326",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale coppia di fattori trascrizionali della famiglia STAT (STAT5a e STAT5b) viene reclutata dalla catena beta del recettore per IL-2 ed è indispensabile per la trascrizione del master regulator FoxP3 nei linfociti Treg?",
    "options": [
      "STAT1 e STAT2",
      "STAT5a e STAT5b",
      "STAT3 e STAT4",
      "STAT6 e STAT3"
    ],
    "correctIndex": 1,
    "explanation": "IL-2 attiva JAK1 e JAK3 che fosforilano STAT5a e STAT5b; i dimeri di STAT5 si legano direttamente all'enhancer CNS2 del locus genico FoxP3 stabilizzandone l'espressione e sostenendo la sopravvivenza dei linfociti T regolatori.",
    "clinicalPearl": "Mutazioni inattivanti in STAT5B nell'uomo causano un'immunodeficienza grave con disregolazione autoimmune somigliante a IPEX combinata a bassa statura per insensibilità al Growth Hormone (GH).",
    "targetSectionId": "sec-5-stat5"
  },
  {
    "id": "gen-327",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale famiglia di proteine nucleari regolatrici negative si lega direttamente ai dimeri attivati di STAT impedendone fisicamente il legame alle sequenze di DNA bersaglio?",
    "options": [
      "Proteine SOCS",
      "Fosfatasi SHP-2",
      "Proteine PIAS (Protein Inhibitor of Activated STAT)",
      "Proteine Smad"
    ],
    "correctIndex": 2,
    "explanation": "Le proteine PIAS (come PIAS1 e PIAS3) interagiscono in modo specifico con i dimeri di STAT fosforilati all'interno del nucleo; possiedono attività E3 SUMO-ligasi e mascherano il dominio di legame al DNA di STAT bloccando la trascrizione genica.",
    "clinicalPearl": "La disregolazione del bilanciamento tra STAT3 e PIAS3 è stata riscontrata in diversi tumori ematologici e solidi, dove il calo di PIAS3 sostiene un'iperattivazione oncogenica continua di STAT3.",
    "targetSectionId": "sec-5-pias"
  },
  {
    "id": "gen-328",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale recettore scavenger della classe B (CD36) presente sui macrofagi e cellule endoteliali riconosce fosfolipidi ossidati (oxLDL) e acidi grassi a catena lunga senza subire downregulation a feedback?",
    "options": [
      "SR-A1 (CD204)",
      "MARCO",
      "LOX-1",
      "CD36 (SR-B2)"
    ],
    "correctIndex": 3,
    "explanation": "CD36 è un recettore scavenger multipasso che internalizza avidamente lipoproteine a bassa densità ossidate (oxLDL) e detriti apoptotici; la mancata repressione trascrizionale da accumulo di colesterolo causa il continuo caricamento lipidico nei macrofagi subendoteliali.",
    "clinicalPearl": "Questo assorbimento incontrollato di oxLDL mediato da CD36 trasforma i macrofagi intimali nelle 'cellule schiumose' (foam cells), evento patogenetico primario nella genesi della stria lipidica e della placca aterosclerotica.",
    "targetSectionId": "sec-4-cd36"
  },
  {
    "id": "gen-329",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale recettore fosfatidilserina-specifico transmembrana (TIM-4 o TIMD4) espresso selettivamente sui macrofagi tissutali della milza e del peritoneo media l'efferocitosi delle cellule apoptotiche?",
    "options": [
      "TIM-4",
      "TIM-3",
      "CD16",
      "CD3"
    ],
    "correctIndex": 0,
    "explanation": "TIM-4 (T-cell immunoglobulin and mucin domain-containing molecule 4) possiede un dominio immunoglobulinico IgV con una specifica tasca di coordinazione per ioni Ca2+ che lega direttamente la fosfatidilserina esposta sul foglietto esterno delle cellule in apoptosi.",
    "clinicalPearl": "La clearance rapida e 'silente' dei corpi apoptotici mediata da TIM-4 previene la lisi secondaria della cellula morente e il rilascio di DAMPs infiammatori, garantendo la tolleranza immunologica periferica.",
    "targetSectionId": "sec-4-tim4"
  },
  {
    "id": "gen-330",
    "lessonNumber": 6,
    "lessonTitle": "06. Cascata di Adesione & Stravaso Leucocitario",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale fattore di trascrizione primario attivato da TNF e IL-1 induce la trascrizione de novo e l'espressione di membrana di VCAM-1 e ICAM-1 sulle cellule endoteliali venulari?",
    "options": [
      "STAT3",
      "NF-kappa-B (eterodimero p50/p65)",
      "AP-1",
      "FoxP3"
    ],
    "correctIndex": 1,
    "explanation": "Il legame di citochine infiammatorie induce la fosforilazione e degradazione di I-kappa-B-alfa; il dimero libero NF-kappa-B trasloca nel nucleo legandosi ai promotori dei geni VCAM1 e ICAM1, aumentandone esponenzialmente la densità sulla membrana endoteliale luminale a partire da 2-4 ore dallo stimolo.",
    "clinicalPearl": "I farmaci glucocorticoidi inibiscono potentemente questo passaggio sia inducendo la sintesi di I-kappa-B-alfa sia interferendo fisicamente con la subunità p65 di NF-kappa-B, bloccando l'infiltrazione leucocitaria nei tessuti infiammati.",
    "targetSectionId": "sec-6-nfkbendotelio"
  },
  {
    "id": "gen-331",
    "lessonNumber": 18,
    "lessonTitle": "18. Recettori Attivatori ed Inibitori delle Cellule NK",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale checkpoint inibitorio appartenente alla superfamiglia delle immunoglobuline (TIGIT) compete con DNAM-1 per il legame con PVR (CD155) e trasduce segnali inibitori nelle cellule NK attraverso motivi ITIM ed ITT-like?",
    "options": [
      "PD-1",
      "CTLA-4",
      "TIGIT (T cell immunoreceptor with Ig and ITIM domains)",
      "LAG-3"
    ],
    "correctIndex": 2,
    "explanation": "TIGIT possiede un'affinità per PVR (CD155) significativamente più alta rispetto al recettore attivatorio DNAM-1; il suo legame scalza stericamente DNAM-1 e recluta le fosfatasi SHIP-1 e SHP-1, bloccando la citotossicità e la secrezione di IFN-gamma.",
    "clinicalPearl": "Anticorpi monoclonali bloccanti anti-TIGIT (come Tiragolumab) sono in avanzata sperimentazione clinica in oncologia in combinazione con inibitori di PD-1/PD-L1 per ripristinare la funzione antitumorale di cellule NK e T CD8+.",
    "targetSectionId": "sec-18-tigit"
  },
  {
    "id": "gen-332",
    "lessonNumber": 19,
    "lessonTitle": "19. Recettori KIR, Educazione NK & ADCC",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale recettore KIR atipico (KIR2DL4 o CD158d) risiede prevalentemente negli endosomi delle cellule NK deciduali (dNK) legando la molecola monomorfa HLA-G e stimolando la secrezione di citochine pro-angiogeniche senza indurre lisi litica?",
    "options": [
      "KIR2DL1",
      "KIR2DS4",
      "KIR3DL1",
      "KIR2DL4"
    ],
    "correctIndex": 3,
    "explanation": "KIR2DL4 possiede una struttura peculiare contenente sia un motivo ITIM citosolico sia una carica positiva transmembrana (arginina); localizzato negli endosomi, lega HLA-G solubile o internalizzato inducendo la trascrizione e secrezione di IL-8 e VEGF senza scatenare la citotossicità perforina-dipendente.",
    "clinicalPearl": "Questo pathway è cruciale all'interfaccia materno-fetale: le dNK utilizzano KIR2DL4 per favorire l'angiogenesi e il rimodellamento delle arterie spirali uterine durante l'impianto trofoblastico placentare.",
    "targetSectionId": "sec-19-kir2dl4"
  },
  {
    "id": "gen-333",
    "lessonNumber": 1,
    "lessonTitle": "01. Fondamenti del Sistema Immunitario ed Ematopoiesi",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale popolazione di progenitori midollari linfo-mieloidi intermedi (LMPP) mantiene la capacità differenziativa sia verso la linea linfoide (B, T, NK) sia verso granulociti e monociti, ma ha perso irreversibilmente il potenziale eritroide e megacariocitico?",
    "options": [
      "LMPP (Lymphoid-primed Multipotent Progenitor)",
      "MEP (Megakaryocyte-Erythroid Progenitor)",
      "CMP (Common Myeloid Progenitor)",
      "HSC a lungo termine"
    ],
    "correctIndex": 0,
    "explanation": "Nel modello ematopoietico revisionato, la prima separazione separa il destino eritroide/megacariocitico da quello linfo-mieloide; gli LMPP esprimono alti livelli di Flt3 e PU.1, mantenendo potenziale combinato per macrofagi, neutrofili, cellule dendritiche e linfociti.",
    "clinicalPearl": "Questo modello spiega la stretta parentela filogenetica e molecolare tra monociti/macrofagi e cellule linfoidi rispetto alla linea eritrocitaria.",
    "targetSectionId": "sec-0-lmpp"
  },
  {
    "id": "gen-334",
    "lessonNumber": 2,
    "lessonTitle": "02. Pattern Recognition Receptors: Toll-Like Receptors",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale citochina della famiglia degli interferoni di tipo I è prodotta selettivamente e massivamente (fino a 1000 volte superiore rispetto alle altre cellule) dalle cellule dendritiche plasmacitoidi (pDC) a valle di TLR7 e TLR9?",
    "options": [
      "Interferone-gamma",
      "Interferone-alfa (multipli sottotipi di IFN-alfa)",
      "Interleuchina-12",
      "Interferone-lambda-3"
    ],
    "correctIndex": 1,
    "explanation": "Nelle pDC, TLR7 e TLR9 sono costitutivamente complessati con MyD88 e il fattore trascrizionale IRF7 all'interno di endosomi a lenta acidificazione; questa configurazione consente una fosforilazione immediata e massiva di IRF7 con secrezione di enormi quantità di tutti i sottotipi di IFN-alfa.",
    "clinicalPearl": "Nelle infezioni virali sistemiche acute, le pDC costituiscono meno dell'1% delle cellule mononucleate del sangue periferico ma generano oltre il 95% dell'interferone-alfa circolante.",
    "targetSectionId": "sec-2-pdc"
  },
  {
    "id": "gen-335",
    "lessonNumber": 3,
    "lessonTitle": "03. Sensori Intracellulari: NLR, RLR, STING & Inflammasomi",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Soriani",
    "question": "Quale meccanismo molecolare di attivazione 'funzionale per distruzione' caratterizza l'inflammasoma NLRP1 umano in seguito all'infezione da enterovirus o tossine batteriche?",
    "options": [
      "Fosforilazione serinica del dominio LRR da parte di Lck",
      "Dimerizzazione mediata da zinco",
      "Clivaggio proteolitico N-terminale seguito da ubiquitinazione e degradazione proteasomica del frammento inibitore, liberando il dominio bioattivo C-terminale UPA-CARD",
      "Apertura della tasca peptidica mediata da catepsina S"
    ],
    "correctIndex": 2,
    "explanation": "NLRP1 possiede un dominio FIIND che va incontro ad autoclivaggio fisiologico; quando proteasi patogene (come la proteasi 3C dei picornavirus o la tossina letale dell'antrace) tagliano l'N-terminale, la porzione viene degradata dal proteasoma, rilasciando il frammento C-terminale libero (UPA-CARD) che oligomerizza e recluta pro-caspasi-1.",
    "clinicalPearl": "Questo raffinato meccanismo di 'functional degradation' trasforma un attacco proteolitico virale distruttivo nel segnale biochimico di innesco dell'inflammasoma e della piroptosi protettiva.",
    "targetSectionId": "sec-3-nlrp1"
  },
  {
    "id": "gen-336",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale citochina eterodimerica della famiglia dell'IL-6 (composta da p28 ed EBI3) segnala attraverso il recettore gp130/WSX-1 attivando STAT1 e STAT3 e sopprimendo la risposta Th17?",
    "options": [
      "Interleuchina-12",
      "Interleuchina-23",
      "Interleuchina-35",
      "Interleuchina-27 (IL-27)"
    ],
    "correctIndex": 3,
    "explanation": "IL-27 è secreta dalle cellule dendritiche e macrofagi; lega il recettore eterodimerico WSX-1 (IL-27R-alfa) e gp130, attivando STAT1 e STAT3 con induzione del recettore inibitorio PD-L1 e secrezione di IL-10 nei T effettori, fungendo da freno fisiologico all'iperinfiammazione Th17.",
    "clinicalPearl": "Topi carenti di WSX-1 sviluppano risposte infiammatorie e autoimmuni Th17 esagerate e distruttive durante infezioni parassitarie e modelli di encefalite autoimmune sperimentale (EAE).",
    "targetSectionId": "sec-5-il27"
  },
  {
    "id": "gen-337",
    "lessonNumber": 6,
    "lessonTitle": "06. Cascata di Adesione & Stravaso Leucocitario",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale proteina intracellulare cytoscheletrica ad alto peso molecolare si lega al primo motivo NPxY della subunità citoplasmatica beta delle integrine staccandola dalla subunità alfa e guidandone l'apertura allosterica ad alta affinità?",
    "options": [
      "Talina-1",
      "Vinculina",
      "Profilina",
      "Cofilina"
    ],
    "correctIndex": 0,
    "explanation": "Il legame del dominio FERM della testa della talina-1 al motivo conservato NPxY della coda beta delle integrine rompe il ponte salino inibitore inter-catena con la coda alfa, consentendo la transizione conformazionale dell'ectodominio allo stato esteso ad alta affinità.",
    "clinicalPearl": "La delezione genica selettiva della talina-1 nei neutrofili blocca l'arresto e l'adesione salda leucocitaria sotto flusso ematico in vivo, mimando il fenotipo di LAD-1.",
    "targetSectionId": "sec-6-talina"
  },
  {
    "id": "gen-338",
    "lessonNumber": 17,
    "lessonTitle": "17. Cellule NK & Meccanismi Molecolari di Citotossicità",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale ligando apoptotico espresso sui granuli litici e sulla membrana di CTL ed NK (TRAIL o CD253) lega i recettori con dominio di morte DR4 e DR5 inducendo apoptosi selettiva nelle cellule neoplastiche?",
    "options": [
      "FasL",
      "TRAIL (TNF-Related Apoptosis-Inducing Ligand)",
      "TNF-alfa",
      "CD40L"
    ],
    "correctIndex": 1,
    "explanation": "TRAIL trimerizza e lega i recettori di morte pro-apoptotici DR4 (TRAIL-R1) e DR5 (TRAIL-R2); le cellule sane esprimono recettori esca privi di dominio di morte funzionale (DcR1 ancorato a GPI e DcR2), risultando fisiologicamente protette dall'apoptosi mediata da TRAIL.",
    "clinicalPearl": "Questa selettività intrinseca di TRAIL nell'eliminare cellule trasformate tumorali risparmiando i tessuti sani ha guidato lo sviluppo di farmaci agonisti ricombinanti di DR4/DR5 in oncologia medica.",
    "targetSectionId": "sec-17-trail"
  },
  {
    "id": "gen-339",
    "lessonNumber": 17,
    "lessonTitle": "17. Cellule NK & Meccanismi Molecolari di Citotossicità",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale proteina regolatrice della secrezione vescicolare (mutata nella Linfoistiocitosi Emofagocitica Familiare di tipo 4, FHL4) interagisce con le proteine SNAP-23 e Munc18-2 per formare il complesso SNARE di fusione?",
    "options": [
      "Perforina",
      "Munc13-4",
      "Sintassina-11 (STX11)",
      "Rab27a"
    ],
    "correctIndex": 2,
    "explanation": "La sintassina-11 è una t-SNARE atipica priva di dominio transmembrana idrofobico che si ancora alla membrana plasmatica mediante palmitoilazione C-terminale; coopera con SNAP-23 mediando la fusione finale dei granuli citotossici.",
    "clinicalPearl": "La perdita o mutazione di sintassina-11 (FHL4) o del suo chaperon Munc18-2 / STXBP2 (FHL5) abolisce la degranulazione di CTL ed NK, scatenando la linfoistiocitosi emofagocitica infantile.",
    "targetSectionId": "sec-17-sintassina11"
  },
  {
    "id": "gen-340",
    "lessonNumber": 19,
    "lessonTitle": "19. Recettori KIR, Educazione NK & ADCC",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale caratteristica distingue geneticamente il cluster dei geni KIR localizzato sul cromosoma 19q13.4 umano rispetto al cluster dei geni HLA sul cromosoma 6?",
    "options": [
      "I geni KIR non mostrano alcun polimorfismo allelico",
      "I geni KIR sono espressi unicamente durante la vita fetale",
      "I geni KIR sono ricombinati mediante l'enzima RAG1/2",
      "I geni KIR mostrano sia elevatissimo polimorfismo allelico sia una marcata variabilità nel numero e tipo di geni presenti nei singoli aplotipi (aplotipi A ad alto contenuto inibitorio vs aplotipi B ad alto contenuto attivatorio)"
    ],
    "correctIndex": 3,
    "explanation": "Il locus KIR presenta due livelli estremi di diversità: polimorfismo di sequenza e poligenia variabile con aplotipi A (fissi, con prevalenza di recettori inibitori) e aplotipi B (variabili, arricchiti in geni attivatori KIR2DS e KIR3DS). L'assortimento indipendente con i geni HLA (cr. 6) genera un'infinita variabilità individuale.",
    "clinicalPearl": "Donatori di midollo osseo con aplotipi KIR di tipo B (ricchi di geni KIR attivatori) conferiscono un tasso significativamente inferiore di recidiva leucemica post-trapianto allogenico.",
    "targetSectionId": "sec-19-geneticakir"
  },
  {
    "id": "gen-341",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale serina proteasi neutrofila immagazzinata nei granuli azzurrofili cliva fisiologicamente la molecola hCAP-18 liberando il peptide attivo LL-37 ed è bersaglio degli autoanticorpi c-ANCA nella Granulomatosi con Poliangioite (Wegener)?",
    "options": [
      "Proteinasi 3 (PR3)",
      "Elastasi neutrofila",
      "Catepsina G",
      "Granzima B"
    ],
    "correctIndex": 0,
    "explanation": "La proteinasi 3 (PR3) è una proteasi neutrofila neutro-attiva che processa precursori pro-infiammatori e antimicrobici; nei pazienti con granulomatosi con poliangioite (GPA), gli autoanticorpi c-ANCA legano specificamente PR3 esposta sulla superficie dei neutrofili attivati inducendone la degranulazione patologica intravascolare e la necrosi fibrinoide parietale.",
    "clinicalPearl": "Il riscontro di c-ANCA (anti-PR3) ad alto titolo nel siero con pattern citoplasmatico all'immunofluorescenza indiretta ha un valore predittivo positivo superiore al 95% per la diagnosi di GPA con coinvolgimento rinosinusale, polmonare e renale.",
    "targetSectionId": "sec-4-pr3"
  },
  {
    "id": "gen-342",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale enzima antiossidante intracellulare converte il perossido di idrogeno (H2O2) in acqua e ossigeno molecolare (2 H2O2 -> 2 H2O + O2) ed è assente o carente nei batteri catalasi-negativi come lo Streptococcus pneumoniae?",
    "options": [
      "Mieloperossidasi",
      "Catalasi",
      "Superossido dismutasi",
      "Glutatione perossidasi"
    ],
    "correctIndex": 1,
    "explanation": "La catalasi è un tetramero eme-dipendente ad altissima efficienza catalitica che scinde il perossido di idrogeno; microrganismi catalasi-negativi non possono distruggere il proprio H2O2 prodotto metabolicamente, rendendosi suscettibili al killing anche nei fagociti di pazienti con deficit di NOX2 (CGD).",
    "clinicalPearl": "Questo principio biochimico spiega perché i pazienti con Malattia Granulomatosa Cronica NON hanno una suscettibilità aumentata a Streptococcus pneumoniae o Streptococcus pyogenes (catalasi-negativi), mentre soccombono ad ascessi da Staphylococcus aureus (catalasi-positivo).",
    "targetSectionId": "sec-4-catalasibiochimica"
  },
  {
    "id": "gen-343",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale citochina pleiotropica della famiglia del TGF-beta è secreta in forma latente legata al peptide LAP (Latency-Associated Peptide) e richiede l'attivazione mediata dalle integrine alfaV-beta6 o alfaV-beta8 per agire sui recettori TGFBR1/2?",
    "options": [
      "Interleuchina-10",
      "Interleuchina-35",
      "TGF-beta-1 (Transforming Growth Factor beta 1)",
      "Interferone-beta"
    ],
    "correctIndex": 2,
    "explanation": "TGF-beta-1 viene sintetizzato come pro-complesso inattivo associato covalentemente a LAP e proteine LTBP; l'interazione meccanica tra le integrine alfaV delle cellule epiteliali/dendritiche e LAP stacca il peptide esponendo il dimero bioattivo di TGF-beta che fosforila i fattori trascrizionali Smad2 e Smad3.",
    "clinicalPearl": "TGF-beta è la citochina cardine che guida simultaneamente la differenziazione dei linfociti Treg FoxP3+ periferici, lo switch anticorpale a IgA nelle mucose e la transizione fibroblasto-miofibroblasto nei processi di fibrosi tessutale d'organo.",
    "targetSectionId": "sec-5-tgfbeta"
  },
  {
    "id": "gen-344",
    "lessonNumber": 5,
    "lessonTitle": "05. Citochine, Recettori & Trasduzione JAK-STAT",
    "topicCategory": "Citochine, JAK-STAT & Chemochine",
    "professor": "Morrone",
    "question": "Quale chemochina espressa constitutivamente dalle cellule dendritiche e stromali della paracorticale linfonodale attrae sia i linfociti T naive sia le cellule dendritiche mature attraverso il recettore CCR7?",
    "options": [
      "CXCL13",
      "CXCL12",
      "CCL2",
      "CCL19 e CCL21"
    ],
    "correctIndex": 3,
    "explanation": "CCL19 (solubile) e CCL21 (ancorata all'endotelio delle HEV e alla matrice tramite code cariche) sono i ligandi funzionali di CCR7; guidano l'ingresso coordinato delle DC migranti cariche di antigene e dei linfociti T naive nella paracorticale per consentire l'incontro antigene-specifico.",
    "clinicalPearl": "Topi mutanti privi di CCL19 e CCL21 (topi 'plt/plt') mostrano una completa disorganizzazione anatomica degli organi linfoidi secondari con incapacità dei linfociti T naive e delle DC di colonizzare i linfonodi.",
    "targetSectionId": "sec-5-ccr7"
  },
  {
    "id": "gen-345",
    "lessonNumber": 6,
    "lessonTitle": "06. Cascata di Adesione & Stravaso Leucocitario",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Morrone",
    "question": "Quale metalloproteinasi solubile (MMP-8 o collagenasi neutrofila) contenuta nei granuli specifici e terziari viene rilasciata per degradare specificamente il collagene interstiziale di tipo I, II e III facilitando l'avanzamento tissutale del neutrofilo?",
    "options": [
      "MMP-8 (Collagenasi neutrofila)",
      "MMP-2",
      "Elastasi neutrofila",
      "Catepsina D"
    ],
    "correctIndex": 0,
    "explanation": "MMP-8 taglia le triple eliche native del collagene interstiziale a pH neutro, aprendo varchi fisici attraverso la matrice connettivale sottomucosa e perivascolare per permettere la migrazione del fronte ameboide del neutrofilo.",
    "clinicalPearl": "La quantificazione di MMP-8 nel fluido crevicolare gengivale è utilizzata in odontoiatria come biomarcatore gold-standard diagnostico precoce per monitorare l'attività distruttiva tissutale della parodontite cronica.",
    "targetSectionId": "sec-6-mmp8"
  },
  {
    "id": "gen-346",
    "lessonNumber": 18,
    "lessonTitle": "18. Recettori Attivatori ed Inibitori delle Cellule NK",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale tirosina chinasi citoplasmatica a monte viene reclutata tramite doppi domini SH2 sui motivi ITAM fosforilati dell'adattatore DAP12 associato a NKp44 e KIR attivatori?",
    "options": [
      "Lck",
      "Syk (Spleen Tyrosine Kinase) o ZAP-70",
      "PI3K p85",
      "BTK"
    ],
    "correctIndex": 1,
    "explanation": "DAP12 possiede un motivo canonico ITAM nella sua coda citoplasmatica; la fosforilazione mediata da chinasi Src recluta Syk o ZAP-70, che innescano la cascata LAT/SLP-76, PLC-gamma e l'influsso di calcio portando alla degranulazione litica.",
    "clinicalPearl": "Mutazioni genetiche inattivanti in DAP12 o nel suo recettore associato TREM2 provocano la sindrome di Nasu-Hakola (osteodisplasia lipomembranosa policistica con demenza sclerotizzante presenile), confermando l'importanza di questo pathway anche nella microglia cerebrale.",
    "targetSectionId": "sec-18-dap12"
  },
  {
    "id": "gen-347",
    "lessonNumber": 17,
    "lessonTitle": "17. Cellule NK & Meccanismi Molecolari di Citotossicità",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale alterazione genetica nel gene PRF1 (localizzato sul cromosoma 10q22) è responsabile della forma più frequente di Linfoistiocitosi Emofagocitica Familiare (FHL2)?",
    "options": [
      "Mutazione della proteina sintassina-11",
      "Delezione del dominio CARD di caspasi-1",
      "Mutazioni bialleliche inattivanti del gene della Perforina-1",
      "Polimorfismo attivante del recettore Fas"
    ],
    "correctIndex": 2,
    "explanation": "FHL2 è causata da mutazioni autosomiche recessive nel gene PRF1; la mancanza di perforina funzionante impedisce ai CTL e alle cellule NK di formare pori nella membrana bersaglio, impedendo la penetrazione dei granzimi e la clearance delle cellule infettate da EBV.",
    "clinicalPearl": "La mancata terminazione della risposta immunitaria scatena una proliferazione incontrollata di T CD8+ e macrofagi con iperattivazione emofagocitica sistemica, pancitopenia, febbre continua, iperferritinemia (> 10.000 ng/ml) ed elevatissimi livelli solubili di CD25 (sIL-2R).",
    "targetSectionId": "sec-17-fhl2"
  },
  {
    "id": "gen-348",
    "lessonNumber": 19,
    "lessonTitle": "19. Recettori KIR, Educazione NK & ADCC",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale citochina infiammatoria dimerica prodotta dai macrofagi (IL-12) sinergizza potentemente con l'IL-18 nell'indurre la massima trascrizione e secrezione di IFN-gamma da parte delle cellule NK senza richiedere degranulazione litica?",
    "options": [
      "Interleuchina-4",
      "Interleuchina-10",
      "TGF-beta",
      "Interleuchina-12 (p35/p40)"
    ],
    "correctIndex": 3,
    "explanation": "IL-12 attiva STAT4 mentre IL-18 (tramite MyD88) attiva NF-kappa-B e AP-1; la cooperazione dei due fattori trascrizionali sul promotore del gene IFNG induce un'amplificazione sinergica drammatica della produzione di IFN-gamma, fondamentale nelle prime ore dell'infezione sistemica.",
    "clinicalPearl": "Questa via citochinica secretoria è massimamente attiva nelle cellule NK CD56bright dei linfonodi e rappresenta il principale meccanismo innato per stimolare l'attivazione microbicida dei macrofagi prima dell'espansione dei linfociti Th1.",
    "targetSectionId": "sec-19-il12il18"
  },
  {
    "id": "gen-349",
    "lessonNumber": 4,
    "lessonTitle": "04. Biologia dei Neutrofili, Fagocitosi & NOX2",
    "topicCategory": "Immunità Innata, PRR & Barriere",
    "professor": "Galandrini",
    "question": "Quale recettore tirosina chinasico della famiglia TAM (Axl, MerTK e Tyro3) espresso sui macrofagi lega la proteina Gas6 o la Proteina S complessata con la fosfatidilserina per spegnere la flogosi durante l'efferocitosi?",
    "options": [
      "Recettori della famiglia TAM (Tyro3, Axl, MerTK)",
      "Recettori TLR4",
      "Recettori NOD2",
      "Recettori del complemento CR3"
    ],
    "correctIndex": 0,
    "explanation": "I recettori TAM interagiscono con la fosfatidilserina mediante ligandi ponte (Gas6 e Proteina S); la loro attivazione induce l'internalizzazione del corpo apoptotico e attiva SOCS1 e SOCS3, spegnendo la trascrizione di citochine infiammatorie e promuovendo la risoluzione della flogosi.",
    "clinicalPearl": "Topi triplo-knockout privi dei tre recettori TAM (Tyro3-/-, Axl-/-, MerTK-/-) sviluppano spontaneamente una severa patologia autoimmune sistemica ad esordio precoce sovrapponibile al Lupus Eritematoso Sistemico.",
    "targetSectionId": "sec-4-tam"
  },
  {
    "id": "gen-350",
    "lessonNumber": 19,
    "lessonTitle": "19. Recettori KIR, Educazione NK & ADCC",
    "topicCategory": "Cellule NK & Linfociti Citotossici",
    "professor": "Galandrini",
    "question": "Quale recettore tirosina chinasico non recettoriale (chinasi Csk) mantiene i recettori inibitori e le chinasi della famiglia Src in uno stato inattivo fosforilandone la tirosina inibitrice C-terminale (Tyr505 in Lck, Tyr527 in Fyn)?",
    "options": [
      "ZAP-70",
      "Csk (C-terminal Src Kinase)",
      "Lck",
      "Fyn"
    ],
    "correctIndex": 1,
    "explanation": "Csk fosforila specificamente il residuo inibitorio terminale di tirosina delle chinasi Src; questa tirosina fosforilata si ripiega internamente legando il proprio dominio SH2, bloccando la chinasi in una conformazione chiusa inattiva finché la fosfatasi CD45 non la defosforila.",
    "clinicalPearl": "La regolazione dinamica dell'attività di Csk e CD45 è il principale termostato biochimico basale che stabilisce la soglia di sensibilità all'attivazione cellulare sia nelle cellule NK che nei linfociti T e B.",
    "targetSectionId": "sec-19-csk"
  },
  {
    "id": "gen-351",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Complesso BCR",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale dominio strutturale della catena pesante delle immunoglobuline IgG definisce la regione cerniera (hinge region) conferendo estrema flessibilità angolare e sensibilità al taglio proteolitico da parte della papaina?",
    "options": [
      "Segmento ricco in residui di prolina e cisteine intercatena localizzato tra i domini CH1 e CH2",
      "Ansa ipervariabile CDR3 situata all'estremità N-terminale del dominio VH",
      "Regione globulare idrofobica interposta tra i domini CH2 e CH3",
      "Sequenza transmembrana C-terminale idrofobica ancorata a GPI"
    ],
    "correctIndex": 0,
    "explanation": "La regione cerniera (hinge) delle immunoglobuline IgG1, IgG2, IgG4 e IgA è costituita da una sequenza ricca di proline (che impediscono la formazione di alfa-eliche o foglietti beta rigidi) e cisteine che formano ponti disolfuro inter-catena pesante, permettendo ai due bracci Fab di variare l'angolo di apertura per legare epitopi a distanze variabili.",
    "clinicalPearl": "Le immunoglobuline IgM e IgE sono sprovviste di regione cerniera e possiedono invece un quarto dominio costante (CH4), risultando strutturalmente meno flessibili dei monomeri IgG.",
    "targetSectionId": "sec-7-hinge"
  },
  {
    "id": "gen-352",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Complesso BCR",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale frammento anticorpale bivalente privo della porzione Fc viene generato dalla digestione proteolitica enzimatica delle IgG mediate dalla pepsina?",
    "options": [
      "Due frammenti monovalenti Fab separati",
      "Un singolo frammento bivalente F(ab')2",
      "Un frammento cristallizzabile Fc intatto",
      "Due catene leggere lambda isolate"
    ],
    "correctIndex": 1,
    "explanation": "La pepsina scinde la catena pesante a valle dei ponti disolfuro intercatena della cerniera, preservando il legame tra i due bracci Fab e generando un singolo frammento bivalente F(ab')2 capace di agglutinare e neutralizzare, mentre la porzione Fc viene degradata in multipli piccoli peptidi.",
    "clinicalPearl": "La papaina scinde invece a monte dei ponti disolfuro generando tre frammenti indipendenti: due frammenti Fab monovalenti e un frammento Fc intatto.",
    "targetSectionId": "sec-7-digestione"
  },
  {
    "id": "gen-353",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Complesso BCR",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale eterodimero transmembrana contenente domini ITAM citoplasmatici è non-covalentemente associato all'immunoglobulina di membrana costituendo il modulo di trasduzione del BCR?",
    "options": [
      "Eterodimero CD3-gamma / CD3-delta",
      "Omodimero di catene CD3-zeta",
      "Eterodimero Ig-alfa (CD79a) e Ig-beta (CD79b)",
      "Complesso DAP10 / DAP12"
    ],
    "correctIndex": 2,
    "explanation": "L'immunoglobulina di superficie possiede code citoplasmatiche troppo corte (solo 3 aminoacidi per IgM ed IgD: Lys-Val-Lys) per trasdurre segnali biochimici; si associa non-covalentemente con il modulo eterodimerico Ig-alfa/Ig-beta stabilizzato da ponti disolfuro, le cui code citoplasmatiche ospitano ciascuna un motivo ITAM.",
    "clinicalPearl": "Mutazioni congenite nei geni CD79A o CD79B bloccano l'assemblaggio del BCR alla superficie, causando agammaglobulinemia autosomica recessiva con fenotipo indistinguibile dalla malattia di Bruton X-linked.",
    "targetSectionId": "sec-7-bcrtrasduzione"
  },
  {
    "id": "gen-354",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Complesso BCR",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale complesso co-recettoriale espresso sulla superficie dei linfociti B maturi abbassa di oltre 100-1000 volte la soglia di attivazione del BCR riconoscendo l'antigene opsonizzato da C3d?",
    "options": [
      "Complesso LFA-1 / ICAM-1",
      "Eterodimero CD28 / CTLA-4",
      "Complesso CD40 / CD40L",
      "Complesso formato da CD21 (CR2), CD19 e CD81 (TAPA-1)"
    ],
    "correctIndex": 3,
    "explanation": "Il co-recettore del linfocito B è un trimero costituito da CD21 (recettore del complemento CR2 che lega C3d/C3dg covalente all'antigene), CD19 (adattatore con molteplici tirosine fosforilabili che recluta PI3K e Lyn) e la tetraspanina CD81; l'ingaggio simultaneo del BCR e di CD21 da parte dell'antigene opsonizzato amplifica drammaticamente la trasduzione.",
    "clinicalPearl": "Deficit genetici di CD19 o CD81 nell'uomo provocano una forma di Immunodeficienza Comune Variabile (CVID) autosomica recessiva con grave ipogammaglobulinemia e infezioni piogeniche sinopolmonari recidivanti.",
    "targetSectionId": "sec-7-corecettoreb"
  },
  {
    "id": "gen-355",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Complesso BCR",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale tirosina chinasi non recettoriale (appartenente alla famiglia Tec) viene reclutata tramite il suo dominio PH al PIP3 di membrana ed è attivata da Syk e Lyn a valle del BCR?",
    "options": [
      "BTK (Bruton's Tyrosine Kinase)",
      "ZAP-70",
      "Itk",
      "Lck"
    ],
    "correctIndex": 0,
    "explanation": "A valle dell'attivazione di PI3K, il lipide PIP3 ancora alla membrana plasmatica la tirosina chinasi BTK mediante il suo dominio PH (Pleckstrin Homology); Lyn e Syk fosforilano la tirosina Tyr551 di BTK, che autofosforila Tyr223 e attiva la fosfolipasi C-gamma-2 (PLC-gamma-2).",
    "clinicalPearl": "Mutazioni nel gene BTK (sul cromosoma Xq22) provocano l'Agammaglobulinemia legata al sesso (XLA o Malattia di Bruton), con arresto maturativo allo stadio di linfocito pre-B nel midollo osseo e totale assenza di linfociti B e immunoglobuline circolanti.",
    "targetSectionId": "sec-7-btk"
  },
  {
    "id": "gen-356",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Complesso BCR",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale farmaco biologico antitumorale a bersaglio molecolare inibisce irreversibilmente la chinasi BTK legandosi covalentemente alla cisteina 481 nella tasca di legame dell'ATP?",
    "options": [
      "Rituximab",
      "Ibrutinib",
      "Bortezomib",
      "Tocilizumab"
    ],
    "correctIndex": 1,
    "explanation": "Ibrutinib forma un legame covalente con il residuo Cys481 nel sito catalitico di BTK, bloccando in modo irreversibile la segnalazione survival del BCR e inducendo l'apoptosi dei linfociti B neoplastici.",
    "clinicalPearl": "Ibrutinib ha rivoluzionato il trattamento della Leucemia Linfatica Cronica (LLC), della macroglobulinemia di Waldenström e del linfoma mantellare.",
    "targetSectionId": "sec-7-ibrutinib"
  },
  {
    "id": "gen-357",
    "lessonNumber": 8,
    "lessonTitle": "08. Ricombinazione V(D)J & Generazione della Diversità",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale complesso proteico enzimatico linfoide-specifico riconosce le Sequenze Segnale di Ricombinazione (RSS) ed esegue il primo taglio a singolo filamento seguito dalla formazione di un hairpin a forcina?",
    "options": [
      "DNA-PKcs ed Artemis",
      "TdT (Terminal Deoxynucleotidyl Transferase)",
      "Complesso RAG1 / RAG2",
      "Eterodimero Ku70 / Ku80"
    ],
    "correctIndex": 2,
    "explanation": "RAG1 funge da endonucleasi catalitica coordinata da ioni zinco, mentre RAG2 stabilizza il complesso legando istoni H3 trimetilati; RAG1/2 introduce un nick a singolo filamento tra il segmento codificante e l'eptamero della RSS, e il gruppo 3'-OH libero attacca il filamento opposto generando una forcina covalente (hairpin) all'estremità codificante e un'estremità netta a doppio filamento al segnale.",
    "clinicalPearl": "Mutazioni nulle in RAG1 o RAG2 causano la SCID T- B- NK+ autosomica recessiva; mutazioni ipomorfiche parziali (leaky) causano invece la Sindrome di Omenn, con eritrodermia generalizzata, eosinofilia e oligoclonali linfociti T autoreattivi.",
    "targetSectionId": "sec-8-rag"
  },
  {
    "id": "gen-358",
    "lessonNumber": 8,
    "lessonTitle": "08. Ricombinazione V(D)J & Generazione della Diversità",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale proteina endonucleasica ad attività intrinseca controllata dalla chinasi DNA-PKcs apre asimmetricamente i terminali a forcina (hairpins) generando sequenze palindromiche (nucleotidi P)?",
    "options": [
      "RAG1",
      "DNA Ligasi IV",
      "TdT",
      "Artemis (DCLRE1C)"
    ],
    "correctIndex": 3,
    "explanation": "Le forcine a hairpin generate da RAG non possono essere saldate direttamente; l'eterodimero Ku70/Ku80 recluta la serina/treonina chinasi DNA-PKcs, che fosforila e attiva Artemis; Artemis esegue un taglio endonucleasico asimmetrico a singolo filamento della forcina, generando estremità a singolo filamento che costituiscono i nucleotidi P palindromici.",
    "clinicalPearl": "Mutazioni autosomiche recessive nel gene DCLRE1C (codificante Artemis) causano una forma grave di SCID radiosensibile (T- B- NK+) ad altissima incidenza nella popolazione Navajo e Apache.",
    "targetSectionId": "sec-8-artemis"
  },
  {
    "id": "gen-359",
    "lessonNumber": 8,
    "lessonTitle": "08. Ricombinazione V(D)J & Generazione della Diversità",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale DNA polimerasi non templata linfoide-specifica aggiunge nucleotidi N casuali alle estremità 3'-OH aperte delle giunzioni V-D e D-J durante il riarrangiamento genico?",
    "options": [
      "TdT (Terminal Deoxynucleotidyl Transferase)",
      "DNA polimerasi beta",
      "Artemis",
      "DNA polimerasi eta"
    ],
    "correctIndex": 0,
    "explanation": "La deossinucleotidil-transferasi terminale (TdT) è espressa transitoriamente nei pro-B e pro-T; aggiunge deossiribonucleotidi monofosfato casuali (fino a 20 nucleotidi N) alle giunzioni di taglio senza necessitare di uno stampo a DNA, creando un'ipervariabilità giunzionale enorme focalizzata nella regione CDR3.",
    "clinicalPearl": "La TdT è attiva durante il riarrangiamento della catena pesante IgH ma è quasi spenta durante il successivo riarrangiamento delle catene leggere (kappa e lambda), motivo per cui le catene leggere contengono pochissimi nucleotidi N.",
    "targetSectionId": "sec-8-tdt"
  },
  {
    "id": "gen-360",
    "lessonNumber": 8,
    "lessonTitle": "08. Ricombinazione V(D)J & Generazione della Diversità",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "In che cosa consiste la 'regola 12/23' che governa rigorosamente la ricombinazione somatica V(D)J mediata da RAG1/2?",
    "options": [
      "Un segmento con spaziatore di 12 bp può ricombinare solo con un altro segmento con spaziatore di 12 bp",
      "Un segmento fiancheggiato da una Sequenza Segnale di Ricombinazione (RSS) con spaziatore di 12 paia di basi può ricombinare unicamente con un segmento fiancheggiato da una RSS con spaziatore di 23 paia di basi",
      "La ricombinazione richiede esattamente 12 ore nel midollo e 23 ore nel timo",
      "Vengono sempre riarrangiati 12 segmenti V per ogni 23 segmenti J"
    ],
    "correctIndex": 1,
    "explanation": "Le RSS sono composte da un eptamero e un nonamero conservati separati da uno spaziatore non conservato di 12 bp (un giro d'elica del DNA) o 23 bp (due giri d'elica); il complesso asimmetrico RAG1/2 può sinapsare e tagliare il DNA solo quando associa una RSS da 12 bp con una da 23 bp, impedendo il salto errato di segmenti genici (ad esempio vietando giunzioni dirette V-J nel locus IgH dove sia V che J possiedono spaziatori da 23 bp mentre D ha spaziatori da 12 bp su entrambi i lati).",
    "clinicalPearl": "Questo vincolo topologico sterico garantisce che nei loci a tre elementi (IgH, TCR-beta, TCR-delta) si formi obbligatoriamente un segmento V-D-J e non un anomalo V-J.",
    "targetSectionId": "sec-8-regola1223"
  },
  {
    "id": "gen-361",
    "lessonNumber": 8,
    "lessonTitle": "08. Ontogenesi dei Linfociti B & Selezione Midollare",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale complesso proteico transmembrana insolito funge da 'catena leggera surrogata' associandosi alla catena pesante mu riarrangiata nello stadio di linfocito pre-B?",
    "options": [
      "Catena invariante CD74",
      "Catena beta-2-microglobulina",
      "Eterodimero VpreB e lambda5 (CD179a / CD179b)",
      "Catena Ig-alfa e Ig-beta"
    ],
    "correctIndex": 2,
    "explanation": "Nello stadio di linfocito pre-B grande, la catena pesante mu appena tradotta si associa alla catena leggera surrogata, formata dalle proteine non polimorfiche VpreB (che mima il dominio variabile) e lambda5 (che mima il dominio costante); assieme a Ig-alfa/Ig-beta forma il complesso del pre-BCR.",
    "clinicalPearl": "La segnalazione autonoma ligando-indipendente del pre-BCR arresta l'ulteriore ricombinazione della catena pesante sul secondo allele (esclusione allelica), attiva l'espansione clonale e promuove il successivo riarrangiamento del locus della catena leggera kappa.",
    "targetSectionId": "sec-8-prebcr"
  },
  {
    "id": "gen-362",
    "lessonNumber": 8,
    "lessonTitle": "08. Ontogenesi dei Linfociti B & Selezione Midollare",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale meccanismo di tolleranza centrale consente a un linfocito B immaturo autoreattivo nel midollo osseo di riattivare i geni RAG per rimpiazzare la catena leggera kappa con un nuovo riarrangiamento non autoreattivo?",
    "options": [
      "Ipermutazione somatica follicolare",
      "Switch isotipico di classe",
      "Conversione genica con pseudogeni",
      "Editing recettoriale (Receptor Editing)"
    ],
    "correctIndex": 3,
    "explanation": "Se il BCR di un linfocito B immaturo lega con alta affinità un autoantigene multivalente nel midollo osseo, il segnale non induce apoptosi immediata bensì mantiene aperti i geni RAG1 e RAG2; la cellula tenta nuovi riarrangiamenti a valle sul locus kappa o, se esaurito, sul locus lambda per sostituire la catena leggera e cambiare specificità antigene.",
    "clinicalPearl": "Se anche dopo l'editing recettoriale il BCR rimane autoreattivo, il linfocito B va incontro a delezione clonale per apoptosi; se incontra autoantigeni solubili a bassa affinità, diventa invece anergico con downregulation delle IgM di superficie.",
    "targetSectionId": "sec-8-receptorediting"
  },
  {
    "id": "gen-363",
    "lessonNumber": 8,
    "lessonTitle": "08. Ontogenesi dei Linfociti B & Selezione Midollare",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale profilo di espressione isotipica immunoglobulinica superficiale contraddistingue in modo definitivo il linfocito B naive maturo pronto a migrare negli organi linfoidi secondari?",
    "options": [
      "Co-espressione simultanea di IgM ed IgD di membrana con identica specificità antigenica",
      "Espressione esclusiva di IgG1 di membrana",
      "Espressione isolata di IgA dimeriche",
      "Presenza esclusiva di IgE ad alta affinità"
    ],
    "correctIndex": 0,
    "explanation": "Il linfocito B maturo naive esprime simultaneamente sia IgM che IgD di superficie aventi la medesima regione variabile e identica specificità di legame per l'antigene; questo evento non è mediato da ricombinazione genomica bensì da splicing alternativo dell'RNA trascritto primario policistronico contenente sia i segmenti C-mu che C-delta.",
    "clinicalPearl": "Il linfocito B immaturo esprime solo IgM; l'acquisizione di alti livelli di IgD di membrana segna l'avvenuta maturazione fenotipica midollare e la capacità di entrare nei follicoli linfonodali.",
    "targetSectionId": "sec-8-bmaturo"
  },
  {
    "id": "gen-364",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Isotipi",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale polipeptide addizionale (catena J) unito da ponti disolfuro è indispensabile per consentire la polimerizzazione e la conformazione pentamerica secretoria delle IgM?",
    "options": [
      "Componente secretoria SC",
      "Catena J (Joining chain)",
      "Catena invariante Ii",
      "Proteina amiloide P"
    ],
    "correctIndex": 1,
    "explanation": "La catena J (Joining chain, 15 kDa) è sintetizzata dalle plasmacellule; lega i residui di cisteina C-terminali delle code sekretorie delle catene mu o alfa, permettendo l'assemblaggio stabile del pentamero planare di IgM o del dimero di IgA.",
    "clinicalPearl": "In assenza della catena J, le IgM vengono secrete come esameri disordinati privi della corretta interazione con il recettore polimerico delle immunoglobuline (pIgR).",
    "targetSectionId": "sec-7-catenaj"
  },
  {
    "id": "gen-365",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Isotipi",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale recettore Fc espresso sul polo basolaterale delle cellule epiteliali delle mucose lega la catena J mediando la transcitosi delle IgA dimeriche verso il lume mucosale?",
    "options": [
      "Fc-gamma-RI (CD64)",
      "Recettore neonatale FcRn",
      "pIgR (Polymeric Immunoglobulin Receptor)",
      "Fc-alfa-RI (CD89)"
    ],
    "correctIndex": 2,
    "explanation": "Il recettore pIgR lega il dimero di IgA complessato con la catena J sulla membrana basolaterale dell'enterocita; il complesso viene internalizzato e trasportato per transcitosi al polo apicale, dove pIgR viene clivato proteoliticamente rilasciando l'IgA legata al frammento extracellulare recettoriale denominato 'componente secretoria' (SC).",
    "clinicalPearl": "La componente secretoria protegge le IgA secretorie (sIgA) dalla degradazione proteolitica operata dagli enzimi digestivi luminali e acidi gastrici.",
    "targetSectionId": "sec-7-pigr"
  },
  {
    "id": "gen-366",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Isotipi",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale recettore Fc atipico strutturalmente correlato alle molecole MHC di classe I protegge le IgG plasmatiche dalla degradazione lisosomiale conferendo loro un'emivita di circa 21-28 giorni?",
    "options": [
      "Fc-gamma-RIIB (CD32b)",
      "Recettore del complemento CR1",
      "Recettore del transferrina CD71",
      "FcRn (Neonatal Fc Receptor)"
    ],
    "correctIndex": 3,
    "explanation": "FcRn è un eterodimero composto da una catena pesante MHC-I-like associata alla beta-2-microglobulina; negli endosomi acidificati (pH 6.0) lega con alta affinità la porzione CH2-CH3 delle IgG endocitate, riciclandole alla superficie cellulare dove, al pH neutro ematico (pH 7.4), le rilascia intatte nel plasma.",
    "clinicalPearl": "Il farmaco Efgartigimod è un frammento anticorpale ingegnerizzato che lega FcRn ad altissima affinità sia a pH acido che neutro, bloccando il riciclo delle IgG endogene e inducendo una rapida deplezione degli autoanticorpi patogeni nella Miastenia Gravis.",
    "targetSectionId": "sec-7-fcrn"
  },
  {
    "id": "gen-367",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Isotipi",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale sottoclasse di IgG umane è incapace di attivare la via classica del complemento (non lega C1q) e subisce fisiologicamente lo scambio dei bracci Fab in vivo (Fab-arm exchange)?",
    "options": [
      "IgG4",
      "IgG1",
      "IgG3",
      "IgG2"
    ],
    "correctIndex": 0,
    "explanation": "Le IgG4 possiedono una regione cerniera peculiare con legami disolfuro inter-catena instabili che si dissociano e riassociano casualmente con altre molecole di IgG4 in circolo, generando anticorpi bispecifici asimmetrici funzionalmente monovalenti che non formano immunocomplessi precipitanti né attivano C1q.",
    "clinicalPearl": "La malattia correlata a IgG4 (IgG4-Related Disease) è una condizione fibro-infiammatoria sistemica caratterizzata da infiltrazione tissutale plasmacellulare IgG4-positiva, sclerosi a nido d'ape e flebite obliterante (es. pancreatite autoimmune tipo 1).",
    "targetSectionId": "sec-7-igg4"
  },
  {
    "id": "gen-368",
    "lessonNumber": 7,
    "lessonTitle": "07. Centro Germinativo, Switch & Ipermutazione",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale enzima DNA-deaminasi linfoide-specifico è assolutamente obbligatorio sia per l'ipermutazione somatica (SHM) sia per la ricombinazione dello switch di classe (CSR)?",
    "options": [
      "RAG1",
      "AID (Activation-Induced Cytidine Deaminase)",
      "Artemis",
      "TdT"
    ],
    "correctIndex": 1,
    "explanation": "L'enzima AID deamina specificamente i residui di citosina in uracile (C -> U) su filamenti singoli di DNA accessibili durante la trascrizione a livello delle regioni variabili V(D)J (innescando la riparazione incline all'errore che genera la SHM) e a livello delle regioni di switch ripetitive S a monte dei geni costanti (innescando tagli a doppio filamento per la CSR).",
    "clinicalPearl": "Mutazioni inattivanti nel gene AICDA causano la Sindrome da Iper-IgM autosomica recessiva di tipo 2 (HIGM2), caratterizzata da livelli sierici elevatissimi di IgM, assenza totale di IgG, IgA, IgE e assenza di ipermutazione somatica.",
    "targetSectionId": "sec-7-aid"
  },
  {
    "id": "gen-369",
    "lessonNumber": 7,
    "lessonTitle": "07. Centro Germinativo, Switch & Ipermutazione",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale compartimento anatomico del centro germinativo è densamente popolato da centroblasti in attiva e rapidissima proliferazione privi di BCR di membrana?",
    "options": [
      "Zona marginale",
      "Zona chiara",
      "Zona scura (Dark Zone)",
      "Mantello follicolare"
    ],
    "correctIndex": 2,
    "explanation": "Nel centro germinativo polarizzato, la zona scura è occupata dai centroblasti proliferanti sotto l'influenza di CXCL12 (esprimono alti livelli di CXCR4); in questa sede avviene l'ipermutazione somatica dei geni variabili. I centroblasti escono quindi dal ciclo cellulare diventando centrociti ed esprimono nuovamente il BCR migrando nella zona chiara.",
    "clinicalPearl": "La quasi totalità dei linfomi a cellule B diffusi a grandi cellule (DLBCL) origina da aberrazioni oncogeniche maturate durante i cicli di divisione cellulare rapida nella zona scura del centro germinativo.",
    "targetSectionId": "sec-7-zonascura"
  },
  {
    "id": "gen-370",
    "lessonNumber": 7,
    "lessonTitle": "07. Centro Germinativo, Switch & Ipermutazione",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale cellula stromale di origine non ematopoietica trattiene sulla sua superficie antigeni intatti opsonizzati da complemento ed anticorpi tramite i recettori CR1, CR2 e Fc-gamma-RIIB selezionando i centrociti ad alta affinità nella zona chiara?",
    "options": [
      "Cellula dendritica convenzionale cDC1",
      "Cellula dendritica plasmacitoide pDC",
      "Cellula endoteliale delle HEV",
      "Cellula dendritica follicolare (FDC)"
    ],
    "correctIndex": 3,
    "explanation": "Le FDC non derivano da precursori ematopoietici ma stromali mesenchimali e non processano antigeni su MHC-II; espongono immunocomplessi nativi sui dendriti per mesi attraverso i recettori del complemento CR1/CR2 e Fc-gamma-RIIB; i centrociti che legano l'antigene con la più alta affinità estraggono l'antigene mediante trazione meccanica, lo processano e ricevono il segnale di salvezza dai Tfh.",
    "clinicalPearl": "I centrociti che non riescono a legare l'antigene sulle FDC con sufficiente affinità non ricevono segnali di sopravvivenza da parte dei Tfh e muoiono per apoptosi rapida, venendo fagocitati dai macrofagi a corpi tingibili.",
    "targetSectionId": "sec-7-fdc"
  },
  {
    "id": "gen-371",
    "lessonNumber": 7,
    "lessonTitle": "07. Centro Germinativo, Switch & Ipermutazione",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale fattore di trascrizione zinc-finger funge da master regulator essenziale per l'istituzione e il mantenimento del programma genetico del centro germinativo reprimendo BLIMP-1?",
    "options": [
      "BCL-6",
      "BLIMP-1 (PRDM1)",
      "XBP-1",
      "IRF4"
    ],
    "correctIndex": 0,
    "explanation": "BCL-6 reprime i check-point del ciclo cellulare (come p53 e p21), consentendo ai centroblasti di proliferare a ritmi elevatissimi tollerando i tagli al DNA indotti da AID; reprime inoltre BLIMP-1 e IRF4 bloccando il differenziamento prematuro a plasmacellula.",
    "clinicalPearl": "Traslocazioni cromosomiche del gene BCL6 (3q27) sotto il controllo dei promotori immunoglobulinici sono tra le lesioni genetiche più comuni nei linfomi follicolari e nei DLBCL.",
    "targetSectionId": "sec-7-bcl6"
  },
  {
    "id": "gen-372",
    "lessonNumber": 7,
    "lessonTitle": "07. Centro Germinativo, Switch & Ipermutazione",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale fattore trascrizionale master regulator coordina il differenziamento terminale a plasmacellula reprimendo direttamente BCL-6 e PAX-5 e attivando la risposta alle proteine mal ripiegate (UPR)?",
    "options": [
      "BCL-6",
      "BLIMP-1 (PRDM1)",
      "GATA-3",
      "T-bet"
    ],
    "correctIndex": 1,
    "explanation": "BLIMP-1 agisce come antagonista reciproco di BCL-6: spegne il programma trascrizionale linfoide follicolare reprimendo BCL-6, PAX-5 e c-Myc, e in cooperazione con XBP-1 induce l'espansione massiva del reticolo endoplasmatico per sostenere la secrezione di migliaia di anticorpi al secondo.",
    "clinicalPearl": "La perdita genetica di BLIMP-1 impedisce la transizione plasmacellulare e favorisce la proliferazione centro-germinativa neoplastica.",
    "targetSectionId": "sec-7-blimp1"
  },
  {
    "id": "gen-373",
    "lessonNumber": 7,
    "lessonTitle": "07. Centro Germinativo, Switch & Ipermutazione",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale citochina T-helper specifica indirizza selettivamente lo switch isotipico verso la produzione di IgE e IgG4 nei linfociti B umani?",
    "options": [
      "IFN-gamma",
      "TGF-beta",
      "Interleuchina-4 (IL-4)",
      "Interleuchina-10"
    ],
    "correctIndex": 2,
    "explanation": "IL-4 attiva il fattore trascrizionale STAT6, che apre la cromatina e inizia la trascrizione germinativa sterile a livello del promotore del gene I-epsilon; AID accede a queste regioni inducendo il ricongiungimento tra S-mu e S-epsilon con switch a IgE.",
    "clinicalPearl": "Nei soggetti atopici la produzione iperattiva di IL-4 da parte dei linfociti Th2 induce una sintesi cronica ed eccessiva di IgE verso allergeni ambientali innocui.",
    "targetSectionId": "sec-7-switchil4"
  },
  {
    "id": "gen-374",
    "lessonNumber": 7,
    "lessonTitle": "07. Centro Germinativo, Switch & Ipermutazione",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale recettore inibitorio solubile o di membrana espresso sui linfociti B naive (CD32b o Fc-gamma-RIIB) media il fenomeno fisiologico del 'feedback anticorpale' spegnendo l'attivazione quando lega immunocomplessi IgG?",
    "options": [
      "Fc-gamma-RI (CD64)",
      "CD19",
      "CD22",
      "Fc-gamma-RIIB (CD32b)"
    ],
    "correctIndex": 3,
    "explanation": "Fc-gamma-RIIB è l'unico recettore Fc dotato di un motivo inibitorio ITIM nella sua coda citoplasmatica; quando anticorpi IgG già prodotti si legano all'antigene formando immunocomplessi, essi legano simultaneamente il BCR e Fc-gamma-RIIB; l'ITIM viene fosforilato da Lyn e recluta la fosfatasi SHIP-1, che idrolizza il PIP3 in PI(3,4)P2 interrompendo il segnale di sopravvivenza e proliferazione.",
    "clinicalPearl": "Polimorfismi con ridotta funzione di Fc-gamma-RIIB aboliscono il freno a feedback negativo, favorendo l'iperattività plasmacellulare e la produzione incontrollata di autoanticorpi nel LES.",
    "targetSectionId": "sec-7-fcgammariib"
  },
  {
    "id": "gen-375",
    "lessonNumber": 7,
    "lessonTitle": "07. Centro Germinativo, Switch & Ipermutazione",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale chemochina e asse recettoriale guida l'homing e la ritenzione selettiva delle plasmacellule della memoria a lunga sopravvivenza (LLPC) verso le nicchie midollari di supporto?",
    "options": [
      "CXCL12 che lega il recettore CXCR4 espresso sulle plasmacellule",
      "CXCL13 che lega CXCR5",
      "CCL19 che lega CCR7",
      "CCL25 che lega CCR9"
    ],
    "correctIndex": 0,
    "explanation": "Le plasmacellule mature a lunga sopravvivenza spengono CXCR5 e upregolano CXCR4; migrano seguendo il gradiente di CXCL12 verso le nicchie stromali midollari, dove le cellule CAR e gli eosinofili forniscono fattori di sopravvivenza essenziali come BAFF e APRIL.",
    "clinicalPearl": "Le plasmacellule midollari così ancorate possono sopravvivere per decenni mantenendo titoli protettivi stabili di IgG nel sangue contro patogeni o vaccini incontrati nell'infanzia.",
    "targetSectionId": "sec-7-nicchiaplasmacellule"
  },
  {
    "id": "gen-376",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Isotipi",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale isoforma dell'immunoglobulina A è predominante nelle secrezioni mucosali del colon e dell'apparato genitale grazie alla sua resistenza al taglio operato dalle proteasi batteriche delle IgA1?",
    "options": [
      "IgA1",
      "IgA2",
      "IgM pentamerica",
      "IgG2"
    ],
    "correctIndex": 1,
    "explanation": "L'IgA2 possiede una regione cerniera molto più corta rispetto all'IgA1 priva della sequenza di aminoacidi duplicata bersagliata dalle proteasi specifiche secrete da batteri come Neisseria gonorrhoeae, Streptococcus pneumoniae e Haemophilus influenzae, risultando biochimicamente resistente alla digestione.",
    "clinicalPearl": "Nei tessuti mucosali distali ricchi di flora batterica densa (colon) il rapporto IgA2/IgA1 è molto più elevato rispetto al siero, dove oltre il 90% delle IgA circolanti è costituito dall'isoforma IgA1.",
    "targetSectionId": "sec-7-iga2"
  },
  {
    "id": "gen-377",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Isotipi",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale recettore ad altissima affinità per le IgE monomeriche (costituito da una catena alfa, una beta e due catene gamma con ITAM) è espresso costitutivamente sulla membrana di mastociti e basofili?",
    "options": [
      "CD23 (Fc-epsilon-RII)",
      "Fc-gamma-RIII (CD16)",
      "Fc-epsilon-RI",
      "CD64"
    ],
    "correctIndex": 2,
    "explanation": "Fc-epsilon-RI possiede un'affinità costante (Kd di circa 10^-10 M) talmente elevata per il dominio CH3-CH4 delle IgE che queste rimangono legate stabilmente alla membrana dei mastociti per settimane o mesi, anche in presenza di concentrazioni plasmatiche bassissime di IgE libere.",
    "clinicalPearl": "L'anticorpo monoclonale Omalizumab lega specificamente le IgE libere a livello dello stesso sito con cui interagiscono con Fc-epsilon-RI, impedendone l'aggancio ai mastociti e riducendo l'espressione superficiale del recettore nell'asma grave refrattario.",
    "targetSectionId": "sec-7-fcepsilonri"
  },
  {
    "id": "gen-378",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Isotipi",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale recettore solubile o di membrana della famiglia delle lectine di tipo C (CD23 o Fc-epsilon-RII) regola negativamente la sintesi di IgE legando le catene epsilon a bassa affinità?",
    "options": [
      "Fc-epsilon-RI",
      "Galectina-9",
      "Dectin-1",
      "CD23 (Fc-epsilon-RII)"
    ],
    "correctIndex": 3,
    "explanation": "CD23 è un recettore atipico non appartenente alla superfamiglia delle immunoglobuline bensì alle C-type lectine; trimero calcio-dipendente, regola il trasporto e l'omeostasi delle IgE fungendo da freno alla produzione eccessiva di anticorpi allergici.",
    "clinicalPearl": "La forma solubile sCD23 rilasciata per clivaggio metalloproteinico promuove la differenziazione dei linfociti B e può essere monitorata nei disordini linfoproliferativi come la Leucemia Linfatica Cronica.",
    "targetSectionId": "sec-7-cd23"
  },
  {
    "id": "gen-379",
    "lessonNumber": 8,
    "lessonTitle": "08. Ricombinazione V(D)J & Generazione della Diversità",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale eterodimero proteico a ciambella si lega ad altissima affinità alle estremità libere del DNA a doppio filamento generate da RAG reclutando la chinasi DNA-PKcs nel macchinario NHEJ?",
    "options": [
      "Eterodimero Ku70 / Ku80",
      "Complesso MRN",
      "Complesso RAG1 / RAG2",
      "Complesso RPA"
    ],
    "correctIndex": 0,
    "explanation": "L'eterodimero Ku70/Ku80 scivola sulle estremità rotte del DNA proteggendole dalla degradazione esonucleasica e fungendo da scaffold strutturale che recluta la subunità catalitica DNA-PKcs per avviare il processo di giunzione non omologa delle estremità (NHEJ).",
    "clinicalPearl": "Mutazioni nei componenti del macchinario NHEJ (Ku70, Ku80, DNA-PKcs, Artemis, DNA Ligasi IV) causano immunodeficienze combinate gravi con marcata ipersensibilità cellulare alle radiazioni ionizzanti (radiosensibilità).",
    "targetSectionId": "sec-8-ku"
  },
  {
    "id": "gen-380",
    "lessonNumber": 8,
    "lessonTitle": "08. Ricombinazione V(D)J & Generazione della Diversità",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale enzima specifico esegue la saldatura finale fosfodiesterica dei frammenti di DNA complessandosi con XRCC4 durante la ricombinazione somatica?",
    "options": [
      "DNA Ligasi I",
      "DNA Ligasi IV",
      "DNA Ligasi III",
      "Topoisomerasi II"
    ],
    "correctIndex": 1,
    "explanation": "La DNA Ligasi IV forma un complesso obbligato con la proteina accessoria XRCC4 (e XLF/Cernunnos), che allinea perfettamente le estremità a doppio filamento e catalizza la sintesi del legame fosfodiesterico finale chiudendo sia i codanti che i segnali di ricombinazione.",
    "clinicalPearl": "Mutazioni nel gene LIG4 o in NHEJ1 (Cernunnos) causano la Sindrome di LIG4, caratterizzata da immunodeficienza grave, microcefalia, dismorfismi facciali e difetti dello sviluppo cerebrale da mancata riparazione delle rotture del DNA.",
    "targetSectionId": "sec-8-ligasi4"
  },
  {
    "id": "gen-381",
    "lessonNumber": 8,
    "lessonTitle": "08. Ontogenesi dei Linfociti B & Selezione Midollare",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "In quale stadio maturativo dell'ontogenesi B midollare avviene il primo evento di ricombinazione genomica consistente nell'unione del segmento D con il segmento J del locus IgH?",
    "options": [
      "Stadio di linfocito pre-B piccolo",
      "Stadio di linfocito B immaturo",
      "Stadio di linfocito pro-B precoce (Early Pro-B)",
      "Stadio di progenitore linfoide comune (CLP) non commitato"
    ],
    "correctIndex": 2,
    "explanation": "L'ordine sequenziale della ricombinazione è rigidamente prestabilito: nello stadio early pro-B avviene la giunzione D-J su entrambi gli alleli del locus della catena pesante; successivamente nello stadio late pro-B avviene l'unione di un segmento V al complesso D-J riarrangiato.",
    "clinicalPearl": "Se il riarrangiamento V-DJ sul primo allele è produttivo (mantiene la corretta cornice di lettura), la sintesi della catena mu arresta il riarrangiamento sul secondo allele (esclusione allelica).",
    "targetSectionId": "sec-8-stadioproB"
  },
  {
    "id": "gen-382",
    "lessonNumber": 8,
    "lessonTitle": "08. Ontogenesi dei Linfociti B & Selezione Midollare",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale marcatore pan-B nucleare/citoplasmatico e poi di membrana (CD19) viene attivato precocemente dal fattore di trascrizione Pax-5 imponendo il commitment irreversibile al lignaggio B?",
    "options": [
      "CD3",
      "CD14",
      "CD56",
      "CD19"
    ],
    "correctIndex": 3,
    "explanation": "Pax-5 è il master gene del lignaggio B; attiva geni cardine come CD19, CD79A, BLNK e reprime i recettori di altri lignaggi (Notch-1, M-CSFR, Fms), imponendo l'impegno esclusivo e irreversibile lungo la via B linfocitaria.",
    "clinicalPearl": "La valutazione citofluorimetrica di CD19 è impiegata universalmente nei pannelli ematologici clinici per quantificare i linfociti B e monitorare la loro deplezione terapeutica post-terapia con Rituximab o cellule CAR-T anti-CD19.",
    "targetSectionId": "sec-8-pax5"
  },
  {
    "id": "gen-383",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Isotipi",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale legame chimico covalente tiene unite le due catene pesanti tra loro e ciascuna catena leggera alla rispettiva catena pesante nella struttura fondamentale dell'anticorpo?",
    "options": [
      "Ponti disolfuro inter-catena tra residui conservati di cisteina",
      "Legami fosfodiesterici tra serine",
      "Interazioni idrofobiche polari non covalenti esclusive",
      "Legami peptidici isopeptidici indotti da transglutaminasi"
    ],
    "correctIndex": 0,
    "explanation": "I monomeri immunoglobulinici sono eterotetrameri (H2L2) stabilizzati da legami covalenti a ponte disolfuro (-S-S-) formati dall'ossidazione di residui di cisteina conservati, integrati da fitte interazioni idrofobiche non covalenti tra i domini adiacenti.",
    "clinicalPearl": "Il trattamento con agenti riducenti come il 2-mercaptoetanolo o il DTT rompe selettivamente i ponti disolfuro, separando le catene pesanti dalle catene leggere per l'analisi elettroforetica SDS-PAGE.",
    "targetSectionId": "sec-7-pontidisolfuro"
  },
  {
    "id": "gen-384",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Isotipi",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale regione ipervariabile (CDR) presenta la massima variabilità di sequenza e lunghezza sia nel BCR che nel TCR derivando direttamente dalla giunzione V-D-J e dall'azione della TdT?",
    "options": [
      "CDR1",
      "CDR3",
      "CDR2",
      "Regione FR3 (Framework 3)"
    ],
    "correctIndex": 1,
    "explanation": "Mentre CDR1 e CDR2 sono interamente codificati all'interno della sequenza germinale del segmento V, l'ansa CDR3 cade esattamente al punto di giunzione tra il segmento V, il segmento D (con le sue estremità ricombinate) e il segmento J; l'inclusione dei nucleotidi P ed N generati da RAG e TdT conferisce a CDR3 una variabilità di sequenza pressoché infinita.",
    "clinicalPearl": "Nei test di clonarità molecolare per linfomi e leucemie linfoblastiche, il sequenziamento NGS o il saggio GeneScan della lunghezza e sequenza del riarrangiamento CDR3 viene impiegato per identificare il clone neoplastico e monitorare la Malattia Residua Minima (MRD).",
    "targetSectionId": "sec-7-cdr3"
  },
  {
    "id": "gen-385",
    "lessonNumber": 7,
    "lessonTitle": "07. Centro Germinativo, Switch & Ipermutazione",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale citochina della famiglia del TNF (BAFF, nota anche come BLyS) prodotta da cellule dendritiche e macrofagi è indispensabile per la sopravvivenza dei linfociti B transizionali e follicolari maturi?",
    "options": [
      "FasL",
      "TRAIL",
      "BAFF (B-cell Activating Factor / TNFSF13B)",
      "RANKL"
    ],
    "correctIndex": 2,
    "explanation": "BAFF si lega specificamente al recettore BAFF-R espresso sui linfociti B a partire dallo stadio transizionale T2; attiva la via non canonica di NF-kappa-B (p52/RelB) promuovendo la trascrizione di geni anti-apoptotici come Bcl-2 e Bcl-xL, garantendo la sopravvivenza periferica.",
    "clinicalPearl": "Il farmaco Belimumab è un anticorpo monoclonale umanizzato che neutralizza BAFF solubile; è approvato per il trattamento del Lupus Eritematoso Sistemico e della nefrite lupica attiva.",
    "targetSectionId": "sec-7-baff"
  },
  {
    "id": "gen-386",
    "lessonNumber": 7,
    "lessonTitle": "07. Centro Germinativo, Switch & Ipermutazione",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale ligando espresso dai linfociti T helper follicolari (CD40L o CD154) interagisce con il recettore CD40 sui linfociti B inducendo il segnale obbligatorio per l'avvio della reazione del centro germinativo e dello switch isotipico?",
    "options": [
      "CD80",
      "ICOSL",
      "OX40L",
      "CD40L (CD154)"
    ],
    "correctIndex": 3,
    "explanation": "L'interazione tra CD40L (espresso sui T attivati) e CD40 (costitutivo sui linfociti B) recluta le proteine adattatrici TRAF (TRAF2, TRAF3, TRAF6), attivando potentemente sia la via canonica che non canonica di NF-kappa-B; questo induce la trascrizione di AID, promuove la proliferazione e protegge i centrociti dall'apoptosi Fas-mediata.",
    "clinicalPearl": "Mutazioni nel gene CD40LG (localizzato sul cromosoma Xq26) causano la Sindrome da Iper-IgM legata al sesso (X-HIGM1), caratterizzata da difetto grave dell'immunità umorale e cellulo-mediata con infezioni opportunistiche severe da Pneumocystis jirovecii e Cryptosporidium.",
    "targetSectionId": "sec-7-cd40l"
  },
  {
    "id": "gen-387",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Isotipi",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale alterazione genica o trascritturale genera la forma secreta dell'immunoglobulina rispetto alla forma ancorata alla membrana?",
    "options": [
      "Splicing alternativo e scelta differenziale del sito di poliadenilazione dell'mRNA della catena pesante",
      "Ricombinazione somatica addizionale operata da RAG1",
      "Taglio proteolitico post-traduzionale del segmento N-terminale",
      "Mutazione puntiforme indotta da AID nella cerniera"
    ],
    "correctIndex": 0,
    "explanation": "Il trascritto primario del locus della catena pesante contiene sia gli esoni secretori (SC) sia gli esoni transmembrana (M1 e M2); a seconda del sito di poliadenilazione utilizzato (pA1 prossimale o pA2 distale), l'mRNA maturo codificherà per la coda idrofila secreta oppure per l'elica idrofobica transmembrana con la coda citoplasmatica.",
    "clinicalPearl": "Nelle plasmacellule mature, la sovraespressione di fattori di poliadenilazione orienta lo splicing quasi al 100% verso il sito pA1 secretorio, riconvertendo la cellula in fabbrica esclusiva di anticorpi solubili.",
    "targetSectionId": "sec-7-splicingsecretomembrana"
  },
  {
    "id": "gen-388",
    "lessonNumber": 8,
    "lessonTitle": "08. Ontogenesi dei Linfociti B & Selezione Midollare",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "In che cosa consiste l'esclusione isotipica delle catene leggere durante la maturazione dei linfociti B?",
    "options": [
      "Nell'espressione contemporanea di catene kappa e lambda sulla stessa molecola di IgM",
      "Nell'espressione esclusiva o di catene leggere kappa o di catene leggere lambda da parte di ciascun singolo linfocito B, mai di entrambe",
      "Nella delezione completa del locus lambda in tutti i mammiferi sani",
      "Nello switch spontaneo da kappa a lambda in risposta a infezioni virali"
    ],
    "correctIndex": 1,
    "explanation": "Un singolo linfocito B esprime un solo tipo di catena leggera: kappa oppure lambda; il locus kappa riarrangia per primo; se genera una catena funzionante, l'ulteriore ricombinazione viene inibita e il locus lambda rimane in configurazione germinale; solo se entrambi gli alleli kappa falliscono, si tenta il riarrangiamento del locus lambda.",
    "clinicalPearl": "Nel siero umano normale, il rapporto tra immunoglobuline a catena leggera kappa e lambda è di circa 2:1 (60% kappa, 40% lambda); una deviazione marcata di questo rapporto (sbilanciamento delle catene leggere libere sFLC) è un criterio fondamentale per diagnosticare una gammopatia monoclonale come il Mieloma Multiplo.",
    "targetSectionId": "sec-8-esclusioneisotipica"
  },
  {
    "id": "gen-389",
    "lessonNumber": 8,
    "lessonTitle": "08. Ontogenesi dei Linfociti B & Selezione Midollare",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale tirosina chinasi citoplasmatica della famiglia Syk viene reclutata tramite doppi domini SH2 sui motivi ITAM fosforilati di Ig-alfa e Ig-beta a valle del BCR?",
    "options": [
      "ZAP-70",
      "Lck",
      "Syk (Spleen Tyrosine Kinase)",
      "Fyn"
    ],
    "correctIndex": 2,
    "explanation": "Mentre nei linfociti T il TCR recluta ZAP-70, nei linfociti B il BCR recluta la tirosina chinasi Syk; Syk autofosforila residui regolatori e fosforila la proteina adattatrice BLNK (SLP-65), coordinando il reclutamento di BTK e PLC-gamma-2.",
    "clinicalPearl": "Inibitori farmacologici specifici di Syk (come Fostamatinib) sono approvati nel trattamento della trombocitopenia immune cronica (ITP) refrattaria per bloccare sia l'attivazione B che la fagocitosi Fc-mediata piastrinica da parte dei macrofagi splenici.",
    "targetSectionId": "sec-8-syk"
  },
  {
    "id": "gen-390",
    "lessonNumber": 8,
    "lessonTitle": "08. Ontogenesi dei Linfociti B & Selezione Midollare",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale proteina scaffold specifica del lignaggio B (BLNK o SLP-65) viene fosforilata da Syk coordinando la formazione del 'signalosoma' con BTK, Grb2 e PLC-gamma-2?",
    "options": [
      "LAT",
      "SLP-76",
      "MyD88",
      "BLNK (B-cell Linker Protein / SLP-65)"
    ],
    "correctIndex": 3,
    "explanation": "BLNK possiede molteplici tirosine fosforilabili e un dominio SH2; funge da piattaforma molecolare che assembla simultaneamente la chinasi BTK, la fosfolipasi C-gamma-2 e la proteina Grb2, consentendo la propagazione del segnale di calcio e delle MAP chinasi.",
    "clinicalPearl": "Mutazioni inattivanti autosomiche recessive nel gene BLNK provocano un blocco differenziativo totale tra lo stadio pro-B e pre-B con agammaglobulinemia severa indistinguibile dalla XLA.",
    "targetSectionId": "sec-8-blnk"
  },
  {
    "id": "gen-391",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Isotipi",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale sottoclasse di immunoglobuline IgG umane è dotata della cerniera più lunga (circa 62 aminoacidi con molteplici ponti disolfuro intercatena) ed è il più potente attivatore della via classica del complemento?",
    "options": [
      "IgG3",
      "IgG1",
      "IgG4",
      "IgG2"
    ],
    "correctIndex": 0,
    "explanation": "L'IgG3 possiede una regione cerniera estesa formata da quattro esoni codificanti che le conferisce un'estrema flessibilità e accessibilità sterica per il legame con le teste globulari di C1q; tuttavia questa cerniera aperta la rende anche molto sensibile alla degradazione proteolitica, riducendone l'emivita sierica a circa 7 giorni (rispetto ai 21 giorni delle altre IgG).",
    "clinicalPearl": "La gerarchia di efficacia nell'attivazione della via classica del complemento è: IgM > IgG3 > IgG1 > IgG2, mentre IgG4 è del tutto incapace di attivare C1q.",
    "targetSectionId": "sec-7-igg3"
  },
  {
    "id": "gen-392",
    "lessonNumber": 7,
    "lessonTitle": "07. Centro Germinativo, Switch & Ipermutazione",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale DNA glicosilasi nucleare rimuove la base uracile generata da AID nel DNA generando un sito abasico (sito AP) durante il processo di ipermutazione somatica e switch di classe?",
    "options": [
      "Polimerasi eta",
      "UNG (Uracil-DNA Glycosylase)",
      "Endonucleasi APE1",
      "MSH2"
    ],
    "correctIndex": 1,
    "explanation": "Dopo che AID ha deaminato la citosina in uracile (C -> U), interviene l'enzima UNG (Uracil-DNA Glycosylase) che cliva il legame N-glicosidico rimuovendo la base uracile e generando un sito apurinico/apirimidinico (sito AP); la successiva scissione da parte dell'endonucleasi APE1 genera rotture a singolo filamento necessarie per lo switch o transizioni mutazionali.",
    "clinicalPearl": "Mutazioni genetiche autosomiche recessive nel gene UNG causano la Sindrome da Iper-IgM di tipo 5 (HIGM5), caratterizzata da difetto profondo della ricombinazione dello switch di classe.",
    "targetSectionId": "sec-7-ung"
  },
  {
    "id": "gen-393",
    "lessonNumber": 7,
    "lessonTitle": "07. Centro Germinativo, Switch & Ipermutazione",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale DNA polimerasi 'translesione' priva di attività proofreading (polimerasi eta) inserisce mutazioni somatiche prevalentemente a carico delle coppie di basi adenina-timina (A:T) nelle regioni ipervariabili?",
    "options": [
      "DNA polimerasi delta",
      "DNA polimerasi alfa",
      "DNA polimerasi eta (POLH)",
      "DNA polimerasi gamma"
    ],
    "correctIndex": 2,
    "explanation": "La DNA polimerasi eta è reclutata dal sistema di mismatch repair (MSH2/MSH6 ed esonucleasi 1) che intercetta i mismatch U:G generati da AID; la polimerasi eta sintetizza nuovo DNA commettendo frequenti errori preferenziali sulle coppie A:T, espandendo lo spettro dell'ipermutazione somatica a tutti e quattro i nucleotidi.",
    "clinicalPearl": "Mutazioni costitutive nel gene POLH provocano la variante dello Xeroderma Pigmentoso (XPV), con difetto nella replicazione del DNA danneggiato da raggi ultravioletti ed estrema suscettibilità a tumori cutanei.",
    "targetSectionId": "sec-7-polimerasieta"
  },
  {
    "id": "gen-394",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Isotipi",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale isotipo anticorpale monomerico attraversa attivamente la placenta durante il secondo e terzo trimestre di gravidanza conferendo immunità umorale passiva al feto e al neonato?",
    "options": [
      "IgM",
      "IgA secretoria",
      "IgE",
      "Immunoglobuline G (IgG, prevalentemente IgG1, IgG3 e IgG4)"
    ],
    "correctIndex": 3,
    "explanation": "Il sinciziotrofoblasto placentare esprime constitutivamente il recettore neonatale FcRn; le IgG materne penetrano per endocitosi nei lisosomi acidi, legano FcRn e vengono transcitate intatte verso il versante capillare fetale, mentre le altre classi (IgM, IgA, IgE) non legano FcRn e non oltrepassano la barriera ematoplacentare.",
    "clinicalPearl": "Questo passaggio fisiologico salvavita è anche il meccanismo patogenetico della Malattia Emolitica del Neonato (MEN), in cui IgG materne anti-Rh(D) o anti-Kell attraversano la placenta emolizzando i globuli rossi fetali.",
    "targetSectionId": "sec-7-passaggioplacentare"
  },
  {
    "id": "gen-395",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Isotipi",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale alterazione molecolare a carico della porzione C-terminale delle IgG ne riduce l'eliminazione renale e ne estende artificialmente l'emivita terapeutica nei farmaci monoclonali ingegnerizzati?",
    "options": [
      "Mutazioni mirate della regione Fc (es. YTE: M252Y/S254T/T256E) che aumentano l'affinità di legame per FcRn a pH 6.0",
      "Eliminazione completa di tutti i ponti disolfuro della cerniera",
      "Glicosilazione aggiuntiva con acido sialico sui domini Fab",
      "Inserimento di una coda peptidica poly-lisina"
    ],
    "correctIndex": 0,
    "explanation": "La tripletta di mutazioni amminoacidiche nota come 'tecnologia YTE' (M252Y, S254T, T256E) incrementa di circa 10 volte l'affinità per FcRn a pH acido endosomiale (pH 6.0) preservando il rilascio rapido a pH 7.4 plasmatico; questo triplica l'emivita delle IgG terapeutiche fino a 70-100 giorni.",
    "clinicalPearl": "L'anticorpo monoclonale Nirsevimab impiega la mutazione YTE per proteggere i neonati e lattanti dall'infezione da Virus Respiratorio Sinciziale (VRS) per l'intera durata della stagione epidemica con una singola somministrazione.",
    "targetSectionId": "sec-7-yte"
  },
  {
    "id": "gen-396",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Isotipi",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale residuo glicidico conservato legato alla catena pesante (Asn297 nel dominio CH2 delle IgG) è strettamente indispensabile per mantenere la conformazione aperta dell'Fc e consentire il legame a C1q e ai recettori Fc-gamma-R?",
    "options": [
      "O-glicosilazione su serina 120",
      "N-glicosilazione a livello dell'asparagina 297 (Asn297)",
      "Solfatazione su tirosina 300",
      "Fosforilazione su treonina 240"
    ],
    "correctIndex": 1,
    "explanation": "L'oligosaccaride biantennario complesso legato covalentemente ad Asn297 funge da cuneo strutturale che separa e orienta i due domini CH2 della catena pesante; la rimozione enzimatica o mutazione di Asn297 provoca il collasso sterico dei domini CH2, abolendo quasi completamente il legame con C1q e con tutti i recettori Fc-gamma leucocitari.",
    "clinicalPearl": "Anticorpi monoclonali privati del residuo di fucosio su Asn297 (anticorpi afucosilati, come Obinutuzumab) legano Fc-gamma-RIIIA con un'affinità fino a 50 volte superiore, innescando una citotossicità ADCC infinitamente più potente.",
    "targetSectionId": "sec-7-asn297"
  },
  {
    "id": "gen-397",
    "lessonNumber": 7,
    "lessonTitle": "07. Struttura delle Immunoglobuline & Isotipi",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale meccanismo di 'neutralizzazione virale' mediato dagli anticorpi impedisce fisicamente l'infezione cellulare senza richiedere l'intervento del complemento o dei fagociti?",
    "options": [
      "Attivazione della cascata della perforina",
      "Opsonizzazione e induzione di burst respiratorio",
      "Ingombro sterico diretto che blocca il legame della proteina di superficie virale al recettore cellulare dell'ospite",
      "Induzione della piroptosi cellulare tramite caspasi-1"
    ],
    "correctIndex": 2,
    "explanation": "Gli anticorpi neutralizzanti legano con altissima affinità gli epitopi chiave della glicoproteina di fusione o adsorbimento del patogeno (es. il dominio RBD della proteina Spike di SARS-CoV-2 o l'emoagglutinina dell'influenza), mascherando il sito di ancoraggio al recettore cellulare o bloccando la transizione conformazionale fusogena.",
    "clinicalPearl": "La quantificazione del titolo di anticorpi neutralizzanti nel siero mediante saggi di inibizione della neutralizzazione (PRNT o microneutralizzazione) è il correlato primario di protezione vaccinale contro la maggior parte dei virus patogeni umani.",
    "targetSectionId": "sec-7-neutralizzazione"
  },
  {
    "id": "gen-398",
    "lessonNumber": 8,
    "lessonTitle": "08. Ontogenesi dei Linfociti B & Selezione Midollare",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale citochina stromale prodotta dalle cellule della nicchia midollare ed epiteliali timiche stimola la proliferazione e sopravvivenza precoce dei precursori linfocitari B e T?",
    "options": [
      "Interleuchina-2",
      "Interleuchina-15",
      "G-CSF",
      "Interleuchina-7 (IL-7)"
    ],
    "correctIndex": 3,
    "explanation": "IL-7 è essenziale per la sopravvivenza e proliferazione dei pro-B e pre-B (soprattutto nel topo) e dei pro-T nel timo umano; segnala tramite il recettore IL-7R (eterodimero di CD127 e della catena gamma comune CD132) attivando STAT5 e la trascrizione del fattore anti-apoptotico Mcl-1.",
    "clinicalPearl": "Mentre nei topi il deficit di IL-7 abolisce lo sviluppo sia dei T che dei B, nell'uomo mutazioni inattivati di IL-7R-alfa (CD127) provocano una forma di SCID autosomica recessiva con assenza selettiva di linfociti T (T- B+ NK+) poiché lo sviluppo B umano ha vie compensatorie parzialmente ridondanti.",
    "targetSectionId": "sec-8-il7"
  },
  {
    "id": "gen-399",
    "lessonNumber": 8,
    "lessonTitle": "08. Ricombinazione V(D)J & Generazione della Diversità",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "Quale struttura circolare episomale extracromosomica stabile (escissione del DNA) viene generata dalla ricombinazione V(D)J per delezione e funge da marcatore quantitativo di neogenesi linfoide?",
    "options": [
      "TREC (T-cell Receptor Excision Circles) e KREC (Kappa-deleting Recombination Excision Circles)",
      "Plasmide mitocondriale circolare",
      "Corpo apoptotico nucleare",
      "Centromero ad anello telomerico"
    ],
    "correctIndex": 0,
    "explanation": "Quando due segmenti genici orientati nello stesso senso ricombinano per delezione, il segmento intermedio di DNA viene escisso e le sue estremità di segnale vengono saldate con precisione da DNA Ligasi IV formando un circolo episomale privo di origine di replicazione; i TREC (nei T per il TCR-alfa/delta) e i KREC (nei B per il locus kappa) si diluiscono a ogni divisione cellulare e identificano i recenti emigranti midollari/timici.",
    "clinicalPearl": "Il dosaggio PCR quantitativo di TREC e KREC su cartoncino Guthrie da sangue di tallone essiccato è il test gold-standard impiegato nello screening neonatale esteso universale per la diagnosi precoce asintomatica di SCID e agammaglobulinemia.",
    "targetSectionId": "sec-8-treckrec"
  },
  {
    "id": "gen-400",
    "lessonNumber": 8,
    "lessonTitle": "08. Ricombinazione V(D)J & Generazione della Diversità",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Galandrini",
    "question": "In che cosa consiste il meccanismo genetico di 'diversità giunzionale' che espande il repertorio combinatorio da circa 10^6 a oltre 10^11 combinazioni possibili?",
    "options": [
      "Nella ricombinazione meiotica omologa dei cromosomi parentali",
      "Nell'addizione flessibile di nucleotidi P (palindromici), rimozione esonucleasica casuale di basi codificanti e aggiunta non templata di nucleotidi N operata dalla TdT",
      "Nell'ipermetilazione differenziale dei promotori di membrana",
      "Nello scambio reciproco di bracci Fab tra immunoglobuline mature"
    ],
    "correctIndex": 1,
    "explanation": "La diversità combinatoria (accoppiamento casuale dei diversi segmenti V, D e J) genererebbe solo 1-2 milioni di varianti; l'imprecisione biochimica del taglio di Artemis, la digestione esonucleasica casuale delle estremità aperte e l'aggiunta stocastica di deossinucleotidi N da parte della TdT creano sequenze uniche e irripetibili alle giunzioni CDR3, superando teoricamente 10^11 specificità diverse.",
    "clinicalPearl": "Il prezzo biologico di questa estrema diversità giunzionale è che oltre due terzi dei riarrangiamenti generati cadono fuori dalla corretta cornice di lettura (frameshift), condannando la maggior parte dei precursori midollari alla morte precoce per apoptosi da riarrangiamento non produttivo.",
    "targetSectionId": "sec-8-diversitagiunzionale"
  },
  {
    "id": "gen-401",
    "lessonNumber": 9,
    "lessonTitle": "09. Complesso Maggiore di Istocompatibilità & Genetica HLA",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Morrone",
    "question": "Quale regione genomica del braccio corto del cromosoma 6 (6p21.3) ospita i geni altamente polimorfici codificanti per le catene alfa delle molecole HLA di classe I classiche?",
    "options": [
      "Regione telomerica HLA di classe II (HLA-DP, DQ, DR)",
      "Regione centrale HLA di classe III codificante per TNF e complemento",
      "Regione HLA di classe I contenente i loci HLA-A, HLA-B e HLA-C",
      "Regione pericentromerica non polimorfica codificante la beta-2-microglobulina"
    ],
    "correctIndex": 2,
    "explanation": "I geni HLA classici di classe I (HLA-A, HLA-B, HLA-C) sono situati all'estremità telomerica del locus MHC sul cromosoma 6p21.3; ciascuno codifica per una catena pesante polimorfica transmembrana da circa 44 kDa associata non-covalentemente con la beta-2-microglobulina codificata sul cromosoma 15.",
    "clinicalPearl": "Il gene per la beta-2-microglobulina non è polimorfico ed è situato su un cromosoma diverso (cromosoma 15q21), un classico tranello nei quesiti d'esame sulla genetica del complesso HLA.",
    "targetSectionId": "sec-9-genomicahla"
  },
  {
    "id": "gen-402",
    "lessonNumber": 9,
    "lessonTitle": "09. Complesso Maggiore di Istocompatibilità & Genetica HLA",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Morrone",
    "question": "In che cosa consiste la modalità di trasmissione genetica e di espressione fenotipica degli alleli HLA all'interno dell'individuo?",
    "options": [
      "Espressione a mosaico con inattivazione casuale del cromosoma paterno",
      "Esclusione allelica identica a quella delle immunoglobuline",
      "Dominanza mendeliana semplice con spegnimento degli alleli recessivi",
      "Espressione codominante di entrambi gli aplotipi parentali ereditati in blocco come aplotipo mendeliano"
    ],
    "correctIndex": 3,
    "explanation": "I geni HLA vengono ereditati in blocco da ciascun genitore come aplotipo a causa della strettissima vicinanza fisica sul cromosoma 6 (bassa frequenza di ricombinazione meiotica) e vengono espressi in modo codominante sulla superficie cellulare, per cui un individuo eterozigote esprime fino a 6 diverse molecole di classe I (2 varianti per A, B e C) e fino a 12 o più combinazioni eterodimeriche di classe II.",
    "clinicalPearl": "La probabilità che due fratelli siano HLA-identici ereditando esattamente gli stessi due aplotipi parentali è del 25% (1 su 4), valore cardine nei bilanci trapiantologici da donatore familiare vivente.",
    "targetSectionId": "sec-9-ereditarietahla"
  },
  {
    "id": "gen-403",
    "lessonNumber": 9,
    "lessonTitle": "09. Complesso Maggiore di Istocompatibilità & Genetica HLA",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Morrone",
    "question": "Quali domini polipeptidici formano le pareti e il pavimento della tasca di legame peptidico (cleft) nella struttura tridimensionale di una molecola MHC di classe I?",
    "options": [
      "I domini alfa-1 e alfa-2 della catena pesante polimorfica",
      "Il dominio alfa-3 combinato con la beta-2-microglobulina",
      "I domini alfa-1 ed alfa-beta eterodimerici della catena leggera",
      "I domini beta-1 e beta-2 della catena transmembrana"
    ],
    "correctIndex": 0,
    "explanation": "La fessura di legame peptidico dell'MHC-I è formata interamente dai due domini N-terminali alfa-1 e alfa-2 della stessa catena pesante polimorfica; ciascun dominio contribuisce con un foglietto beta (pavimento) e un'alfa-elica antiparallela (parete laterale), generando una tasca chiusa alle due estremità.",
    "clinicalPearl": "La chiusura strutturale delle due estremità della tasca impone un vincolo sterico rigido alla lunghezza dei peptidi legabili dall'MHC-I, che devono essere corti (solitamente 8-10 aminoacidi).",
    "targetSectionId": "sec-9-strutturamhci"
  },
  {
    "id": "gen-404",
    "lessonNumber": 9,
    "lessonTitle": "09. Complesso Maggiore di Istocompatibilità & Genetica HLA",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Morrone",
    "question": "Quale caratteristica strutturale della tasca di legame peptidico delle molecole MHC di classe II consente loro di alloggiare peptidi antigenici significativamente più lunghi (13-25 aminoacidi o più)?",
    "options": [
      "La presenza di legami disolfuro con la beta-2-microglobulina",
      "Le estremità aperte della fessura formate dall'eterodimero alfa-1 e beta-1 che permettono al peptide di sporgere dai due lati",
      "La presenza di domini lipidici leganti acidi grassi",
      "La capacità di legare peptidi circolari senza estremità N-terminali libere"
    ],
    "correctIndex": 1,
    "explanation": "Nelle molecole MHC di classe II la tasca è formata dalla cooperazione dei domini alfa-1 (della catena alfa) e beta-1 (della catena beta); le estremità laterali della tasca sono aperte, consentendo al peptide di adagiarsi come una fune estesa con i suoi residui terminali liberi di sporgere oltre i confini del solco.",
    "clinicalPearl": "Questa flessibilità consente all'MHC-II di presentare grandi frammenti proteici parzialmente digeriti derivati dalla digestione endosomiale ed endocitica per il riconoscimento da parte dei linfociti T CD4+.",
    "targetSectionId": "sec-9-strutturamhcii"
  },
  {
    "id": "gen-405",
    "lessonNumber": 9,
    "lessonTitle": "09. Complesso Maggiore di Istocompatibilità & Genetica HLA",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Morrone",
    "question": "Quale allele del complesso maggiore di istocompatibilità di classe I mostra la più forte associazione nota con una patologia reumatologica cronica autoimmune (Spondilite Anchilosante, con rischio relativo superiore a 80-90)?",
    "options": [
      "HLA-DR4",
      "HLA-DQ2",
      "HLA-B*27",
      "HLA-A*02"
    ],
    "correctIndex": 2,
    "explanation": "L'allele HLA-B*27 è presente in oltre il 90-95% dei pazienti affetti da Spondilite Anchilosante; i meccanismi patogenetici ipotizzati includono la presentazione di peptidi artritogeni microbici/self (mimetismo molecolare) e la propensione della catena pesante di HLA-B27 a formare omodimeri aberranti o accumularsi mal ripiegata nel reticolo endoplasmatico innescando stress del RE e rilascio di IL-23.",
    "clinicalPearl": "La tipizzazione dell'HLA-B27 mediante citometria a flusso o PCR è un'indagine diagnostica standard fondamentale nei giovani con lombalgia infiammatoria notturna cronica, sacroileite radiologica o entesite achillea.",
    "targetSectionId": "sec-9-hlab27"
  },
  {
    "id": "gen-406",
    "lessonNumber": 9,
    "lessonTitle": "09. Complesso Maggiore di Istocompatibilità & Genetica HLA",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Morrone",
    "question": "Quale combinazione eterodimerica HLA di classe II codificata in cis o in trans conferisce una predisposizione genetica quasi obbligata (>95% dei casi) allo sviluppo della Celiachia legando peptidi della gliadina deaminati dalla transglutaminasi tissutale?",
    "options": [
      "HLA-B8",
      "HLA-DR3 monomorfo",
      "HLA-DRB1*04",
      "HLA-DQ2 (DQA1*05:01 / DQB1*02:01) e HLA-DQ8 (DQA1*03:01 / DQB1*03:02)"
    ],
    "correctIndex": 3,
    "explanation": "Le tasche cariche positivamente dell'eterodimero HLA-DQ2.5 e HLA-DQ8 alloggiano ad altissima affinità i peptidi della gliadina ricchi di glutammato carico negativamente (generato dalla deaminazione della glutammina operata dall'enzima tTG2); questo complesso trimero scatena la potente attivazione dei linfociti T CD4+ mucosali.",
    "clinicalPearl": "La negatività contemporanea sia per HLA-DQ2 che per HLA-DQ8 possiede un Valore Predittivo Negativo (VPN) superiore al 99%, consentendo di escludere con certezza la diagnosi di malattia celiaca.",
    "targetSectionId": "sec-9-hladq2"
  },
  {
    "id": "gen-407",
    "lessonNumber": 10,
    "lessonTitle": "10. Processazione e Presentazione Antigenica",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Morrone",
    "question": "Quale forma modificata del proteasoma standard viene indotta nelle cellule da citochine pro-infiammatorie (come IFN-gamma) sostituendo le subunità catalitiche beta-1, beta-2 e beta-5 con LMP2, MECL-1 e LMP7 per ottimizzare il caricamento su MHC-I?",
    "options": [
      "Immunoproteasoma",
      "Proteasoma timico corticale contenente beta-5t",
      "Esosoma citosolico",
      "Aggresoma cellulare"
    ],
    "correctIndex": 0,
    "explanation": "L'IFN-gamma induce la sintesi delle subunità beta-1i (LMP2), beta-2i (MECL-1) e beta-5i (LMP7) che si assemblano nel 'core' 20S dell'immunoproteasoma; questo enzima modifica la specificità di taglio proteolitico, incrementando i tagli dopo residui idrofobici o basici che fungono da perfetti residui ancora (anchor residues) C-terminali per la tasca dell'MHC di classe I.",
    "clinicalPearl": "Nelle cellule epiteliali timiche corticali (cTEC) viene invece espresso il 'timoproteasoma' contenente la subunità beta-5t, che genera peptidi a bassissima affinità essenziali per la selezione positiva dei linfociti T CD8+.",
    "targetSectionId": "sec-10-immunoproteasoma"
  },
  {
    "id": "gen-408",
    "lessonNumber": 10,
    "lessonTitle": "10. Processazione e Presentazione Antigenica",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Morrone",
    "question": "Quale trasportatore ABC ATP-dipendente localizzato sulla membrana del reticolo endoplasmatico trasferisce peptidi citosolici di 8-16 aminoacidi nel lume del RE per il caricamento su MHC-I?",
    "options": [
      "CFTR",
      "Eterodimero TAP1 / TAP2",
      "MDR1 (P-glicoproteina)",
      "Trasportatore di glucosio GLUT4"
    ],
    "correctIndex": 1,
    "explanation": "TAP (Transporter associated with Antigen Processing) è un eterodimero costituito dalle subunità TAP1 e TAP2; consuma ATP per pompare selettivamente peptidi proteasomici dal citosol all'interno del reticolo endoplasmatico, mostrando preferenza per peptidi recanti residui C-terminali idrofobici o basici.",
    "clinicalPearl": "Mutazioni inattivanti in TAP1 o TAP2 provocano la 'Bare Lymphocyte Syndrome di tipo I' (BLS tipo I), caratterizzata dalla pressoché totale assenza di molecole MHC-I sulla membrana, grave deficit di linfociti T CD8+ e lesioni cutanee necrotizzanti granulomatose croniche.",
    "targetSectionId": "sec-10-tap"
  },
  {
    "id": "gen-409",
    "lessonNumber": 10,
    "lessonTitle": "10. Processazione e Presentazione Antigenica",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Morrone",
    "question": "Quale proteina adattatrice del Complesso di Caricamento del Peptide (PLC) connette fisicamente la molecola MHC-I vuota parzialmente ripiegata al trasportatore TAP?",
    "options": [
      "Calreticulina",
      "ERp57",
      "Tapasina (TAPBP)",
      "Calnessina"
    ],
    "correctIndex": 2,
    "explanation": "La tapasina funge da ponte centrale nel complesso PLC (Peptide-Loading Complex): tiene associata la catena alfa di MHC-I complessata con beta-2-microglobulina al trasportatore TAP, allargando la tasca di legame e fungendo da 'chaperon di editing peptidico' per assicurare che solo peptidi ad altissima affinità stabilizzino la molecola MHC-I.",
    "clinicalPearl": "Senza tapasina, le molecole MHC-I vengono rilasciate premature con peptidi a bassa affinità, dissociandosi rapidamente una volta giunte sulla membrana plasmatica.",
    "targetSectionId": "sec-10-tapasina"
  },
  {
    "id": "gen-410",
    "lessonNumber": 10,
    "lessonTitle": "10. Processazione e Presentazione Antigenica",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Morrone",
    "question": "Quale aminopeptidasi del reticolo endoplasmatico (ERAP1) accorcia i peptidi trasportati da TAP che risultano troppo lunghi rifilandoli alla lunghezza ottimale di 8-9 aminoacidi per la tasca di MHC-I?",
    "options": [
      "Catepsina S",
      "Caspasi-1",
      "Granzima B",
      "ERAP1 (Endoplasmic Reticulum Aminopeptidase 1)"
    ],
    "correctIndex": 3,
    "explanation": "ERAP1 agisce come un 'righello molecolare': taglia progressivamente i residui aminoacidici dall'estremità N-terminale dei peptidi all'interno del RE, ma arresta l'attività idrolitica quando il peptide raggiunge la lunghezza critica di 8-9 residui, impedendone la distruzione completa.",
    "clinicalPearl": "Polimorfismi funzionali nel gene ERAP1 interagiscono epistaticamente con gli alleli HLA-B*27 e HLA-A*29, modulando drasticamente la suscettibilità genetica rispettivamente alla spondilite anchilosante e alla retinocoroidopatia di Birdshot.",
    "targetSectionId": "sec-10-erap1"
  },
  {
    "id": "gen-411",
    "lessonNumber": 10,
    "lessonTitle": "10. Processazione e Presentazione Antigenica",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Morrone",
    "question": "Quale proteina homotrimerica transmembrana (Ii o CD74) si assembla con gli eterodimeri neosintetizzati di MHC di classe II nel reticolo endoplasmatico impedendo il legame prematuro di peptidi citosolici?",
    "options": [
      "Catena Invariante (Ii o CD74)",
      "Beta-2-microglobulina",
      "Tapasina",
      "Calreticulina"
    ],
    "correctIndex": 0,
    "explanation": "Un trimero di catena invariante (Ii / CD74) complessa tre eterodimeri alfa/beta di MHC-II appena tradotti nel RE; il segmento CLIP (Class II-associated Invariant chain Peptide) della catena invariante si adagia esattamente all'interno del solco di legame, proteggendolo fisicamente dall'incorporazione di peptidi endogeni destinati all'MHC-I.",
    "clinicalPearl": "Inoltre, la coda citoplasmatica della catena invariante contiene una sequenza segnale di smistamento a doppio residuo di leucina che devia il traffico vescicolare dell'MHC-II dal Golgi direttamente verso il compartimento endosomiale tardivo MIIC.",
    "targetSectionId": "sec-10-catenainvariante"
  },
  {
    "id": "gen-412",
    "lessonNumber": 10,
    "lessonTitle": "10. Processazione e Presentazione Antigenica",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Morrone",
    "question": "Quale piccolo peptide residuo della catena invariante rimane ancorato nella tasca delle molecole MHC di classe II all'interno del compartimento MIIC dopo l'azione digestiva delle catepsine endosomiali?",
    "options": [
      "Peptide segnale leader",
      "Peptide CLIP (Class II-associated Invariant chain Peptide)",
      "Dominio CARD",
      "Peptide SLAM"
    ],
    "correctIndex": 1,
    "explanation": "Le proteasi acide endosomiali (in particolare la catepsina S e la catepsina L) digeriscono sequenzialmente la catena invariante sia all'estremità luminale che citosolica, lasciando intatto solo il corto frammento centrale CLIP (residui 81-104) che rimane saldamente alloggiato nella tasca di MHC-II.",
    "clinicalPearl": "La rimozione di CLIP è l'evento regolatorio chiave che consente lo scambio con i peptidi antigenici esogeni derivati dalla fagocitosi.",
    "targetSectionId": "sec-10-clip"
  },
  {
    "id": "gen-413",
    "lessonNumber": 10,
    "lessonTitle": "10. Processazione e Presentazione Antigenica",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Morrone",
    "question": "Quale molecola non classica e non polimorfica di classe II localizzata negli endosomi acidificati (HLA-DM) catalizza il rilascio di CLIP consentendo il caricamento di peptidi antigenici ad alta affinità?",
    "options": [
      "HLA-E",
      "HLA-G",
      "HLA-DM",
      "HLA-DO"
    ],
    "correctIndex": 2,
    "explanation": "HLA-DM interagisce fisicamente con l'eterodimero MHC-II distorcendone lievemente la tasca; questo allenta i legami a idrogeno con CLIP provocandone il distacco istantaneo e consentendo a peptidi ad alta affinità di occupare il solco, agendo come editor di affinità peptidica.",
    "clinicalPearl": "La molecola HLA-DO funge da regolatore negativo di HLA-DM nei linfociti B: complessandosi ad HLA-DM ne blocca l'azione a pH debolmente acido, impedendo la presentazione di autoantigeni a bassa affinità.",
    "targetSectionId": "sec-10-hladm"
  },
  {
    "id": "gen-414",
    "lessonNumber": 10,
    "lessonTitle": "10. Processazione e Presentazione Antigenica",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Morrone",
    "question": "In che cosa consiste il meccanismo cellulare della 'Cross-Presentazione' (Cross-Presentation) eseguito con straordinaria efficienza dalle cellule dendritiche convenzionali di tipo 1 (cDC1)?",
    "options": [
      "Nel trasferimento diretto di plasmidi da cellula a cellula",
      "Nella secrezione di anticorpi da parte delle cellule dendritiche",
      "Nella presentazione di antigeni citosolici endogeni direttamente su molecole MHC di classe II ai linfociti Th1",
      "Nell'internalizzazione per fagocitosi o pinocitosi di antigeni esogeni extracellulari che vengono traslocati nel citosol e caricati su molecole MHC di classe I per stimolare i linfociti T CD8+ naive"
    ],
    "correctIndex": 3,
    "explanation": "La regola generale prevede che gli antigeni esogeni vadano su MHC-II; le cellule dendritiche cDC1 (marcate da BDCA3/CD141 e dal fattore Batf3) possiedono la capacità unica di instradare antigeni extracellulari fagocitati (da virus che non infettano le DC o cellule tumorali necrotiche) all'interno del proprio citosol, dove vengono processati dal proteasoma e caricati su MHC-I per innescare (cross-priming) i CTL CD8+ naive.",
    "clinicalPearl": "Senza la cross-presentazione mediata dalle cDC1, il sistema immunitario sarebbe totalmente incapace di montare risposte T citotossiche contro virus eparotropi, polmonari o cellule neoplastiche che non infettano o non originano direttamente dalle cellule dendritiche.",
    "targetSectionId": "sec-10-crosspresentazione"
  },
  {
    "id": "gen-415",
    "lessonNumber": 10,
    "lessonTitle": "10. Processazione e Presentazione Antigenica",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Morrone",
    "question": "Quale fattore di trascrizione anomico (CIITA, MHC Class II Transactivator) funge da master regulator dell'espressione di tutti i geni HLA di classe II ed è mutato nella Bare Lymphocyte Syndrome di tipo II?",
    "options": [
      "CIITA (Class II Major Histocompatibility Complex Transactivator)",
      "RFX5",
      "NF-kappa-B",
      "STAT1"
    ],
    "correctIndex": 0,
    "explanation": "CIITA non lega direttamente il DNA, ma interagisce con il complesso proteico RFX (RFX5, RFXAP, RFXANK) legato alla 'box S-X-Y' dei promotori di tutti i geni HLA-DP, DQ e DR, coordinando l'acetilazione degli istoni e la trascrizione; è inducibile da IFN-gamma.",
    "clinicalPearl": "Mutazioni bialleliche in CIITA o nei componenti del complesso RFX causano la Sindrome dei Linfociti Nudi di tipo II (BLS tipo II), una forma gravissima di SCID autosomica recessiva con assenza totale di molecole MHC-II e grave collasso selettivo dei linfociti T CD4+.",
    "targetSectionId": "sec-10-ciita"
  },
  {
    "id": "gen-416",
    "lessonNumber": 10,
    "lessonTitle": "10. Processazione e Presentazione Antigenica",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Morrone",
    "question": "Quale famiglia di glicoproteine non polimorfiche correlate ad MHC (famiglia CD1: CD1a, CD1b, CD1c, CD1d) è specializzata nella presentazione di antigeni lipidici e glicolipidici micobatterici ai linfociti T ed NKT?",
    "options": [
      "Famiglia Selectine",
      "Famiglia CD1 (CD1a-d)",
      "Famiglia B7",
      "Famiglia Siglec"
    ],
    "correctIndex": 1,
    "explanation": "Le molecole CD1 possiedono profonde tasche idrofobiche che alloggiano le lunghe catene alifatiche degli acidi grassi e acidi micolici (es. lipoarabinomannano di Mycobacterium tuberculosis), esponendo la testa polare idrofila zuccherina verso l'esterno per il riconoscimento da parte del TCR.",
    "clinicalPearl": "La molecola CD1d presenta specificamente il glicolipide sintetico alfa-galattosilceramide (alfa-GalCer) ai linfociti NKT invarianti (iNKT esprimenti la catena V-alfa-24 J-alfa-18).",
    "targetSectionId": "sec-10-cd1"
  },
  {
    "id": "gen-417",
    "lessonNumber": 10,
    "lessonTitle": "10. Processazione e Presentazione Antigenica",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Morrone",
    "question": "Quale molecola correlata ad MHC di classe Ib (MR1) presenta metaboliti intermedi insolubili della biosintesi della riboflavina (vitamina B2) microbica ai linfociti MAIT (Mucosal-Associated Invariant T)?",
    "options": [
      "HLA-G",
      "CD1d",
      "MR1 (MHC-related protein 1)",
      "MICA"
    ],
    "correctIndex": 2,
    "explanation": "MR1 possiede una tasca specializzata che cattura addotti pirimidinici instabili derivati dalla via di sintesi batterica e fungina della riboflavina (come il 5-OP-RU); presenta questi metaboliti ai linfociti T invarianti associati alle mucose (MAIT), che rispondono rapidamente producendo IL-17 e IFN-gamma.",
    "clinicalPearl": "Poiché i mammiferi non sintetizzano la riboflavina ma la assumono con la dieta, il riconoscimento di metaboliti legati a MR1 consente ai linfociti MAIT di discriminare in modo assoluto i microbi dall'ospite.",
    "targetSectionId": "sec-10-mr1"
  },
  {
    "id": "gen-418",
    "lessonNumber": 11,
    "lessonTitle": "11. Complesso TCR-CD3 & Trasduzione del Segnale T",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quanti motivi di attivazione basati su tirosina (ITAM) sono complessivamente contenuti nelle code citoplasmatiche del complesso multi-subunità CD3 associato a un singolo eterodimero TCR-alfa/beta?",
    "options": [
      "Esattamente 2 motivi ITAM",
      "Esattamente 4 motivi ITAM",
      "Esattamente 6 motivi ITAM",
      "Esattamente 10 motivi ITAM"
    ],
    "correctIndex": 3,
    "explanation": "Il complesso TCR-CD3 comprende: un eterodimero CD3-gamma/epsilon (1 ITAM ciascuno = 2), un eterodimero CD3-delta/epsilon (1 ITAM ciascuno = 2) e un omodimero di catene CD3-zeta (3 ITAM ciascuna = 6). La somma totale di motivi ITAM disponibili per la fosforilazione da parte di Lck su un singolo recettore TCR completo è esattamente pari a 10.",
    "clinicalPearl": "Questa ricchezza di ben 10 domini ITAM garantisce una straordinaria amplificazione stechiometrica intracellulare del segnale anche quando il TCR lega rarissimi complessi peptide-MHC sulla cellula presentante.",
    "targetSectionId": "sec-11-tcrsubunita"
  },
  {
    "id": "gen-419",
    "lessonNumber": 11,
    "lessonTitle": "11. Complesso TCR-CD3 & Trasduzione del Segnale T",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale tirosina chinasi della famiglia Src è constitutivamente associata alla coda citoplasmatica dei co-recettori CD4 e CD8 mediante interazione chelante coordinata da uno ione zinco?",
    "options": [
      "Lck (Lymphocyte cell-specific protein-tyrosine kinase)",
      "Fyn",
      "ZAP-70",
      "Itk"
    ],
    "correctIndex": 0,
    "explanation": "Lck si lega alla coda intracellulare di CD4 (o CD8) attraverso un motivo conservato formato da due residui di cisteina che coordinano uno ione zinco (Zn2+) con cisteine corrispondenti del co-recettore; quando CD4 o CD8 legano le porzioni non polimorfiche di MHC, Lck viene avvicinata fisicamente alle catene CD3-zeta fosforilandone gli ITAM.",
    "clinicalPearl": "Mutazioni inattivanti nel gene LCK nell'uomo provocano una severa immunodeficienza combinata con profondo blocco dello sviluppo timico sia dei linfociti CD4 che CD8.",
    "targetSectionId": "sec-11-lck"
  },
  {
    "id": "gen-420",
    "lessonNumber": 11,
    "lessonTitle": "11. Complesso TCR-CD3 & Trasduzione del Segnale T",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale tirosina chinasi citoplasmatica contenente doppi domini SH2 in tandem si lega agli ITAM doppiamente fosforilati della catena CD3-zeta venendo attivata per fosforilazione da Lck?",
    "options": [
      "Syk",
      "ZAP-70 (Zeta-chain-associated protein kinase 70)",
      "BTK",
      "Akt"
    ],
    "correctIndex": 1,
    "explanation": "ZAP-70 possiede due domini SH2 allineati rigidamente che richiedono la simultanea presenza di entrambe le tirosine fosforilate all'interno dello stesso motivo ITAM per ancorarsi; una volta agganciata, Lck fosforila le tirosine Tyr492 e Tyr493 nel loop di attivazione di ZAP-70 inducendone la piena attività enzimatica.",
    "clinicalPearl": "Mutazioni autosomiche recessive nel gene ZAP70 causano una rara forma di SCID paradossale caratterizzata da assenza totale di linfociti T CD8+ circolanti e presenza di linfociti T CD4+ periferici totalmente non funzionanti ed anergici.",
    "targetSectionId": "sec-11-zap70"
  },
  {
    "id": "gen-421",
    "lessonNumber": 11,
    "lessonTitle": "11. Complesso TCR-CD3 & Trasduzione del Segnale T",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale proteina adattatrice integrale di membrana palmitoilata (LAT) viene fosforilata su multiple tirosine da ZAP-70 fungendo da piattaforma centrale per il reclutamento di Grb2, Gads e PLC-gamma-1?",
    "options": [
      "SLP-76",
      "BLNK",
      "LAT (Linker for Activation of T cells)",
      "MyD88"
    ],
    "correctIndex": 2,
    "explanation": "LAT è una proteina transmembrana ancorata ai lipid rafts mediante palmitoilazione; ZAP-70 fosforila 4 tirosine distali di LAT, consentendo il legame di Gads (che recluta SLP-76) e della fosfolipasi C-gamma-1 (PLC-gamma-1), assemblando il 'signalosoma LAT' essenziale per tutti i rami di trasduzione a valle.",
    "clinicalPearl": "La delezione o mutazione di LAT nell'uomo o nel topo abolisce completamente la trasduzione del TCR, bloccando lo sviluppo timico allo stadio di doppio negativo DN3.",
    "targetSectionId": "sec-11-lat"
  },
  {
    "id": "gen-422",
    "lessonNumber": 11,
    "lessonTitle": "11. Complesso TCR-CD3 & Trasduzione del Segnale T",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale fosfatasi serina/treonina calcio-calmodulina dipendente defosforila residui multipli di serina nel fattore trascrizionale citosolico NFAT consentendone la rapida traslocazione nel nucleo?",
    "options": [
      "Fosfatasi CD45",
      "Fosfatasi SHP-1",
      "Fosfatasi PP2A",
      "Calcineurina (eterodimero PPP3CA / PPP3R1)"
    ],
    "correctIndex": 3,
    "explanation": "L'innalzamento del calcio citosolico (liberato dal reticolo tramite IP3 e sostenuto dall'apertura dei canali CRAC/ORAI1) attiva la calmodulina, che si lega e attiva la calcineurina; la calcineurina rimuove i gruppi fosfato che mascheravano la sequenza di localizzazione nucleare di NFAT, consentendone la migrazione nel nucleo per trascrivere il gene dell'IL-2.",
    "clinicalPearl": "I potenti farmaci immunosoppressori Ciclosporina A (legata alla ciclofillina) e Tacrolimus/FK506 (legato a FKBP12) formano complessi che inibiscono specificamente la tasca catalitica della calcineurina, impedendo la trascrizione di IL-2 e prevenendo il rigetto d'organo.",
    "targetSectionId": "sec-11-calcineurina"
  },
  {
    "id": "gen-423",
    "lessonNumber": 11,
    "lessonTitle": "11. Complesso TCR-CD3 & Trasduzione del Segnale T",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale proteina canale calcio-selettiva della membrana plasmatica (ORAI1) si apre in risposta all'interazione fisica con la proteina sensore STIM1 del reticolo endoplasmatico esausto mediando l'influsso capacitativo SOCE?",
    "options": [
      "Canale ORAI1 (componente del canale CRAC)",
      "Canale P2X7",
      "Canale TRPM7",
      "Canale voltaggio-dipendente Cav1.2"
    ],
    "correctIndex": 0,
    "explanation": "Quando il calcio luminale del reticolo endoplasmatico cala in seguito al rilascio indotto da IP3, il sensore STIM1 oligomerizza e migra alle giunzioni ER-membrana plasmatica, legandosi direttamente a ORAI1 e aprendo il canale CRAC per un massiccio influsso prolungato di Ca2+ extracellulare.",
    "clinicalPearl": "Mutazioni inattivanti in ORAI1 o STIM1 causano la 'Sindrome da deficit di CRAC' autosomica recessiva, caratterizzata da immunodeficienza combinata severa, anidrosi congenita, displasia dello smalto dentario e miopatia.",
    "targetSectionId": "sec-11-orai1"
  },
  {
    "id": "gen-424",
    "lessonNumber": 12,
    "lessonTitle": "12. Sinapsi Immunologica & Costimolazione T",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale compartimento centrale della sinapsi immunologica (c-SMAC) concentra i complessi TCR-CD3, CD4/CD8 e le molecole costimolatorie CD28 durante il riconoscimento dell'APC?",
    "options": [
      "SMAC periferico (p-SMAC)",
      "SMAC centrale (c-SMAC)",
      "SMAC distale (d-SMAC)",
      "Anello di actina corticale"
    ],
    "correctIndex": 1,
    "explanation": "La sinapsi immunologica matura assume un'organizzazione a bersaglio (bull's eye): il centro (c-SMAC) contiene i complessi TCR-CD3 legati a peptide-MHC, i co-recettori CD4/CD8 e CD28; qui avviene la trasduzione iniziale seguita dall'endocitosi e degradazione del TCR; l'anello circostante (p-SMAC) concentra le integrine come LFA-1.",
    "clinicalPearl": "La formazione della sinapsi immunologica garantisce la secrezione direzionale quantica di citochine e granuli litici nello spazio intermembranario ristretto evitando il danno aspecifico ai tessuti circostanti innocenti.",
    "targetSectionId": "sec-12-csmac"
  },
  {
    "id": "gen-425",
    "lessonNumber": 12,
    "lessonTitle": "12. Sinapsi Immunologica & Costimolazione T",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale molecola di adesione integrinica leucocitaria si concentra tipicamente nell'anello periferico della sinapsi immunologica (p-SMAC) legandosi a ICAM-1 per sigillare meccanicamente la giunzione?",
    "options": [
      "Selectina L",
      "VLA-4",
      "LFA-1 (alfa-L / beta-2, CD11a/CD18)",
      "Integrina alfa-4 / beta-7"
    ],
    "correctIndex": 2,
    "explanation": "Nel p-SMAC le integrine LFA-1 formano un anello molecolare adesivo serrato che lega ICAM-1 sulla cellula bersaglio o APC; questa guarnizione fisica stabilizza il contatto per ore e confina la secrezione dei granuli citolitici.",
    "clinicalPearl": "Pazienti affetti da LAD-1 non possono formare il p-SMAC a causa dell'assenza di LFA-1, mostrando gravi deficit nella stabilizzazione della sinapsi citotossica T ed NK.",
    "targetSectionId": "sec-12-psmac"
  },
  {
    "id": "gen-426",
    "lessonNumber": 12,
    "lessonTitle": "12. Sinapsi Immunologica & Costimolazione T",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale grande fosfatasi transmembrana tirosinica (CD45) viene fisicamente esclusa per ingombro sterico dalla zona di contatto centrale (d-SMAC/fuori dalla sinapsi) per consentire la persistenza della fosforilazione degli ITAM?",
    "options": [
      "CD28",
      "Calcineurina",
      "SHP-1",
      "Fosfatasi CD45 (Leukocyte Common Antigen)"
    ],
    "correctIndex": 3,
    "explanation": "Il modello cinetico di segregazione molecolare postula che la fessura intermembrana del c-SMAC (circa 15 nm) sia troppo stretta per accogliere il voluminoso ectodominio extracellulare di CD45 (circa 40 nm); CD45 viene spinta alla periferia (d-SMAC), consentendo a Lck di fosforilare indisturbata gli ITAM senza la contestuale defosforilazione operata da CD45.",
    "clinicalPearl": "Mutazioni inattivanti nel gene PTPRC (CD45) aboliscono la regolazione basale di Lck e impediscono la corretta segregazione sinaptica, provocando SCID autosomica recessiva con deficit combinato T e B.",
    "targetSectionId": "sec-12-cd45"
  },
  {
    "id": "gen-427",
    "lessonNumber": 12,
    "lessonTitle": "12. Sinapsi Immunologica & Costimolazione T",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale recettore costimolatorio costitutivo dei linfociti T (CD28) lega le molecole B7-1 (CD80) e B7-2 (CD86) sulle APC attivando PI3K, Akt e la sintesi autocrina di IL-2?",
    "options": [
      "CD28",
      "CTLA-4",
      "PD-1",
      "ICOS"
    ],
    "correctIndex": 0,
    "explanation": "CD28 è il principale secondo segnale positivo (Segnale 2); la sua coda citoplasmatica contiene il motivo YMNM che lega la subunità p85 di PI3K attivando Akt e Bcl-xL, stabilizzando l'mRNA di IL-2 e prevenendo l'anergia clonale del linfocito T.",
    "clinicalPearl": "Se un linfocita T naive riconosce il Segnale 1 (peptide-MHC) in assenza del Segnale 2 (CD28 non ingaggia B7), la cellula entra in uno stato di anergia clonale permanente o va incontro a delezione apoptotica, meccanismo cardine della tolleranza periferica.",
    "targetSectionId": "sec-12-cd28"
  },
  {
    "id": "gen-428",
    "lessonNumber": 12,
    "lessonTitle": "12. Sinapsi Immunologica & Costimolazione T",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale checkpoint inibitorio omologo a CD28 (CTLA-4 o CD152) possiede un'affinità 20-50 volte superiore per B7-1 e B7-2 ed esercita immunosoppressione sottraendo i ligandi mediante trans-endocitosi?",
    "options": [
      "PD-1",
      "CTLA-4 (CD152)",
      "LAG-3",
      "TIM-3"
    ],
    "correctIndex": 1,
    "explanation": "CTLA-4 lega sia CD80 che CD86 con avidità enormemente superiore a CD28; oltre a scalzare fisicamente CD28 e reclutare fosfatasi, le cellule Treg e i T attivati utilizzano CTLA-4 per strappare letteralmente le molecole B7 dalla membrana dell'APC e internalizzarle per degradazione lisosomiale ('trans-endocitosi').",
    "clinicalPearl": "La proteina di fusione ricombinante Abatacept (CTLA-4-Ig) si lega a CD80/CD86 bloccando la costimolazione mediata da CD28 ed è utilizzata nell'artrite reumatoide; al contrario, l'anticorpo bloccante anti-CTLA-4 Ipilimumab toglie questo freno potenziando l'immunità antitumorale nel melanoma avanzato.",
    "targetSectionId": "sec-12-ctla4"
  },
  {
    "id": "gen-429",
    "lessonNumber": 12,
    "lessonTitle": "12. Sinapsi Immunologica & Costimolazione T",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale checkpoint inibitorio di membrana (PD-1 o CD279) contiene motivi ITIM ed ITSM citosolici che reclutano la fosfatasi SHP-2 spegnendo preferenzialmente la segnalazione di PI3K ed estinguendo la risposta T effettrice periferica?",
    "options": [
      "CD28",
      "OX40",
      "PD-1 (Programmed Cell Death Protein 1)",
      "GITR"
    ],
    "correctIndex": 2,
    "explanation": "PD-1 viene indotto sui linfociti T in seguito ad attivazione prolungata; legando i suoi ligandi PD-L1 o PD-L2 espressi su cellule tumorali o infiammate, il motivo ITSM viene fosforilato reclutando SHP-2, che defosforila ZAP-70, CD28 e Akt inducendo lo stato di 'esaurimento clonale' (T-cell exhaustion).",
    "clinicalPearl": "Anticorpi monoclonali che bloccano PD-1 (Pembrolizumab, Nivolumab) o PD-L1 (Atezolizumab) riattivano i linfociti T esausti all'interno del tumore, costituendo la pietra miliare dell'immuno-oncologia moderna in decine di neoplasie solide ed ematologiche.",
    "targetSectionId": "sec-12-pd1"
  },
  {
    "id": "gen-430",
    "lessonNumber": 12,
    "lessonTitle": "12. Sinapsi Immunologica & Costimolazione T",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale molecola costimolatoria inducibile della superfamiglia di CD28 (ICOS o CD278) è espressa ad altissimi livelli sui linfociti T helper follicolari (Tfh) ed è essenziale per la cooperazione con i linfociti B?",
    "options": [
      "CTLA-4",
      "PD-1",
      "CD40",
      "ICOS (Inducible T-cell Costimulator)"
    ],
    "correctIndex": 3,
    "explanation": "ICOS lega selettivamente ICOSL (B7-H2 / CD275) espresso sui linfociti B; a differenza di CD28, il motivo citosolico di ICOS recluta la subunità regolatoria p50-alfa della PI3K inducendo una potente segnalazione che sostiene la sopravvivenza dei Tfh e la secrezione di IL-21.",
    "clinicalPearl": "Mutazioni omozigoti con perdita di funzione nel gene ICOS causano una forma autosomica recessiva di Immunodeficienza Comune Variabile (CVID) con mancata formazione dei centri germinativi e marcata ipogammaglobulinemia.",
    "targetSectionId": "sec-12-icos"
  },
  {
    "id": "gen-431",
    "lessonNumber": 13,
    "lessonTitle": "13. Differenziamento Linfociti T Helper: Th1 & Th2",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale fattore di trascrizione 'master regulator' a dita di zinco della famiglia T-box (T-bet) viene indotto da IFN-gamma ed IL-12 imponendo il destino Th1 e attivando la trascrizione di IFNG?",
    "options": [
      "T-bet (codificato dal gene TBX21)",
      "GATA-3",
      "ROR-gamma-t",
      "FoxP3"
    ],
    "correctIndex": 0,
    "explanation": "L'IFN-gamma attiva STAT1, che induce la trascrizione di T-bet; T-bet rimodella la cromatina aprendo il locus IFNG e upregola la catena recettoriale IL-12R-beta2; l'IL-12 attiva quindi STAT4, consolidando in modo irreversibile la polarizzazione Th1 e reprimendo GATA-3.",
    "clinicalPearl": "I topi knockout per T-bet non sono in grado di montare risposte Th1 e soccombono rapidamente a infezioni intracellulari da Leishmania major, sviluppando spontaneamente asma allergico da iperpolarizzazione Th2.",
    "targetSectionId": "sec-13-tbet"
  },
  {
    "id": "gen-432",
    "lessonNumber": 13,
    "lessonTitle": "13. Differenziamento Linfociti T Helper: Th1 & Th2",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale fattore di trascrizione master regulator a dita di zinco (GATA-3) è guidato dall'attivazione di STAT6 indotta da IL-4 reprimendo T-bet e indirizzando il fenotipo Th2?",
    "options": [
      "T-bet",
      "GATA-3",
      "BCL-6",
      "Eomesodermina"
    ],
    "correctIndex": 1,
    "explanation": "GATA-3 è il master regulator del lignaggio Th2; si lega agli elementi di controllo del locus citochinico Th2 sul cromosoma 5q31, coordinando l'espressione simultanea di IL-4, IL-5 e IL-13 e reprimendo attivamente l'espressione di IL-12R-beta2 e STAT4.",
    "clinicalPearl": "Mutazioni eterozigoti con aploinsufficienza nel gene GATA3 nell'uomo provocano la Sindrome HDR (ipoparatiroidismo, sordità neurosensoriale e displasia renale).",
    "targetSectionId": "sec-13-gata3"
  },
  {
    "id": "gen-433",
    "lessonNumber": 13,
    "lessonTitle": "13. Differenziamento Linfociti T Helper: Th1 & Th2",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale citochina specifica secreta dai linfociti Th2 stimola in modo selettivo la differenziazione midollare, la sopravvivenza e l'attivazione tissutale dei granulociti eosinofili?",
    "options": [
      "Interleuchina-4",
      "Interleuchina-13",
      "Interleuchina-5 (IL-5)",
      "Interleuchina-9"
    ],
    "correctIndex": 2,
    "explanation": "IL-5 è il fattore di crescita e attivazione lineage-specifico primario degli eosinofili; agisce sul recettore eterodimerico IL-5R-alfa/beta-c promuovendo l'uscita midollare, l'adesione vascolare e la degranulazione di proteine cationiche litiche (MBP, ECP) contro gli elmintici.",
    "clinicalPearl": "Gli anticorpi monoclonali neutralizzanti anti-IL-5 (Mepolizumab, Reslizumab) o anti-IL-5R-alfa (Benralizumab) provocano una rapida deplezione degli eosinofili circolanti e sono farmaci rivoluzionari nell'asma grave eosinofilico refrattario.",
    "targetSectionId": "sec-13-il5"
  },
  {
    "id": "gen-434",
    "lessonNumber": 13,
    "lessonTitle": "13. Differenziamento Linfociti T Helper: Th1 & Th2",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale citochina effettrice prodotta sia da Th2 che da ILC2 stimola la contrazione della muscolatura liscia bronchiale, l'ipersecrezione di muco da parte delle cellule caliciformi e la fibrosi tissutale?",
    "options": [
      "IFN-gamma",
      "Interleuchina-12",
      "Interleuchina-2",
      "Interleuchina-13 (IL-13)"
    ],
    "correctIndex": 3,
    "explanation": "IL-13 condivide con IL-4 il recettore di tipo II (IL-4R-alfa / IL-13R-alfa-1); a livello bronchiale e intestinale induce direttamente l'ipertrofia muscolare liscia, l'iperreattività delle vie aeree, la metaplasia a cellule caliciformi e stimola i fibroblasti a produrre collagene (remodelling tissutale).",
    "clinicalPearl": "Il farmaco Lebrikizumab è un anticorpo monoclonale che lega specificamente IL-13 impedendone l'interazione con IL-13R-alfa-1 ed è approvato per la dermatite atopica moderata-severa.",
    "targetSectionId": "sec-13-il13"
  },
  {
    "id": "gen-435",
    "lessonNumber": 14,
    "lessonTitle": "14. Differenziamento Linfociti T Helper: Th17, Treg & Tfh",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale recettore ormonale nucleare orfano (ROR-gamma-t) funge da master regulator essenziale per il differenziamento dei linfociti Th17 a valle di IL-6, IL-1beta e TGF-beta?",
    "options": [
      "ROR-gamma-t (RORC nell'uomo)",
      "T-bet",
      "GATA-3",
      "AHR (Aryl Hydrocarbon Receptor)"
    ],
    "correctIndex": 0,
    "explanation": "L'attivazione coordinata di STAT3 indotta da IL-6, IL-21 o IL-23, combinata con concentrazioni basse/moderate di TGF-beta e IL-1beta, induce la trascrizione di ROR-gamma-t (gene RORC); ROR-gamma-t apre la cromatina dei promotori dei geni IL17A, IL17F e IL22.",
    "clinicalPearl": "Mutazioni bialleliche inattivati in RORC nell'uomo causano una rara immunodeficienza combinata caratterizzata da candidosi mucocutanea cronica (per deficit di IL-17) e infezioni micobatteriche severe (per ridotta produzione di IFN-gamma).",
    "targetSectionId": "sec-14-rorgammat"
  },
  {
    "id": "gen-436",
    "lessonNumber": 14,
    "lessonTitle": "14. Differenziamento Linfociti T Helper: Th17, Treg & Tfh",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale citochina prodotta dai linfociti Th17 agisce selettivamente sulle cellule epiteliali mucosali inducendo la secrezione di peptidi antimicrobici (beta-defensine, RegIII-gamma) e promuovendo la rigenerazione tissutale di barriera?",
    "options": [
      "Interleuchina-17A",
      "Interleuchina-22 (IL-22)",
      "IFN-gamma",
      "TNF-alfa"
    ],
    "correctIndex": 1,
    "explanation": "A differenza dei recettori per IL-17 che sono ubiquitari, il recettore per IL-22 (IL-22R1 / IL-10R2) è espresso esclusivamente sulle cellule epiteliali di cute, intestino, fegato e polmone; IL-22 attiva STAT3 epiteliale promuovendo la produzione di defensine e la proliferazione riparativa senza indurre chemiotassi neutrofila.",
    "clinicalPearl": "La proteina solubile IL-22BP (IL-22 Binding Protein) lega e neutralizza IL-22 fungendo da inibitore fisiologico; la sua downregulation nell'infiammazione cronica favorisce l'iperproliferazione epiteliale.",
    "targetSectionId": "sec-14-il22"
  },
  {
    "id": "gen-437",
    "lessonNumber": 14,
    "lessonTitle": "14. Differenziamento Linfociti T Helper: Th17, Treg & Tfh",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale fattore di trascrizione 'forkhead box' a dita di zinco codificato sul cromosoma X è il master regulator assoluto per lo sviluppo e la funzione soppressoria dei linfociti T regolatori (Treg)?",
    "options": [
      "FoxO1",
      "FoxA2",
      "FoxP3",
      "FoxM1"
    ],
    "correctIndex": 2,
    "explanation": "FoxP3 si associa stabilmente con NFAT, Runx1 ed Eos formando complessi che reprimono la trascrizione del gene IL2 e attivano constitutivamente geni immunoregolatori come CD25 (IL-2R-alfa), CTLA-4, GITR e CD39/CD73.",
    "clinicalPearl": "Mutazioni nel gene FOXP3 causano la letale Sindrome IPEX (Immunodysregulation, Polyendocrinopathy, Enteropathy, X-linked), caratterizzata nei neonati maschi da diabete mellito autoimmune neonatale di tipo 1, enteropatia secretoria intrattabile, dermatite grave e tiroidite.",
    "targetSectionId": "sec-14-foxp3"
  },
  {
    "id": "gen-438",
    "lessonNumber": 14,
    "lessonTitle": "14. Differenziamento Linfociti T Helper: Th17, Treg & Tfh",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale profilo recettoriale e fenotipico di superficie permette di identificare e isolare con precisione i linfociti T regolatori CD4+ nel sangue umano discriminandoli dai T effettori attivati?",
    "options": [
      "CD4+ CD25-negativi CD127-alti",
      "CD4+ CD25-bassi CD45RA-negativi",
      "CD4+ CD3-negativi CD56-positivi",
      "CD4+ CD25-bright (catena alfa di IL-2R ad altissima densità) e CD127-low/negative (catena alfa di IL-7R marcatamente ridotta o assente)"
    ],
    "correctIndex": 3,
    "explanation": "FoxP3 reprime direttamente il promotore del gene IL7R (CD127) e attiva il promotore del gene IL2RA (CD25); pertanto, il fenotipo CD4+ CD25^bright CD127^dim/neg identifica con oltre il 95% di purezza le cellule FoxP3+ soppressorie senza richiedere la permeabilizzazione cellulare per la marcatura intracitoplasmatica.",
    "clinicalPearl": "Questo profilo citofluorimetrico CD25^high CD127^low è lo standard per la purificazione e l'espansione ex vivo di Treg per protocolli di terapia cellulare adottiva nelle malattie autoimmuni e nel trapianto d'organo.",
    "targetSectionId": "sec-14-fenotipotreg"
  },
  {
    "id": "gen-439",
    "lessonNumber": 14,
    "lessonTitle": "14. Differenziamento Linfociti T Helper: Th17, Treg & Tfh",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale coppia di ectonucleotidasi tandem di membrana espresse dai linfociti Treg idrolizza sequenzialmente l'ATP e l'AMP extracellulari generando adenosina immunosoppressoria che agisce sul recettore A2AR?",
    "options": [
      "CD39 (NTPDasi-1) e CD73 (5'-ectonucleotidasi)",
      "Fosfatasi alcalina e calcineurina",
      "CD26 e dipeptidil-peptidasi",
      "ATPasi Na+/K+ e adenilato ciclasi"
    ],
    "correctIndex": 0,
    "explanation": "CD39 converte l'ATP e l'ADP pro-infiammatori rilasciati da cellule danneggiate in AMP; CD73 scinde l'AMP liberando adenosina purina; l'adenosina si lega al recettore A2AR espresso sui linfociti T effettori e cellule dendritiche, innalzando il cAMP intracellulare e bloccandone l'attivazione.",
    "clinicalPearl": "Nel microambiente tumorale, la sovraespressione di CD39 e CD73 sulle cellule neoplastiche e sui Treg infiltranti genera una 'barriera purinergica' di adenosina che paralizza i linfociti citotossici; farmaci inibitori di CD73 sono attualmente in avanzata fase clinica.",
    "targetSectionId": "sec-14-cd39cd73"
  },
  {
    "id": "gen-440",
    "lessonNumber": 14,
    "lessonTitle": "14. Differenziamento Linfociti T Helper: Th17, Treg & Tfh",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale recettore per chemochine (CXCR5) viene upregolato dai linfociti T helper follicolari (Tfh) guidandone la migrazione verso i follicoli linfoidi in risposta a CXCL13?",
    "options": [
      "CCR7",
      "CXCR5 (recettore per CXCL13)",
      "CXCR4",
      "CCR9"
    ],
    "correctIndex": 1,
    "explanation": "I linfociti Tfh riducono l'espressione di CCR7 (allontanandosi dalla paracorticale) e upregolano CXCR5 sotto il controllo del master regulator BCL-6; questo permette loro di migrare lungo il gradiente di CXCL13 prodotto dalle cellule dendritiche follicolari posizionandosi all'interno del centro germinativo.",
    "clinicalPearl": "L'analisi citofluorimetrica di Tfh circolanti nel sangue periferico (cTfh, marcati da CXCR5+ PD-1+) correla strettamente con l'efficacia della produzione anticorpale neutralizzante post-vaccinica.",
    "targetSectionId": "sec-14-tfhcxcr5"
  },
  {
    "id": "gen-441",
    "lessonNumber": 14,
    "lessonTitle": "14. Differenziamento Linfociti T Helper: Th17, Treg & Tfh",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale citochina pleiotropica secreta dai linfociti Tfh e Th17 (IL-21) agisce su un recettore contenente la catena gamma comune attivando STAT3 e guidando la proliferazione dei centrociti e lo switch plasmacellulare?",
    "options": [
      "Interleuchina-2",
      "Interleuchina-4",
      "Interleuchina-21 (IL-21)",
      "Interleuchina-10"
    ],
    "correctIndex": 2,
    "explanation": "IL-21 è la principale citochina effettrice dei Tfh; lega il complesso eterodimerico IL-21R/gamma-c sui linfociti B del centro germinativo attivando STAT3; stimola la proliferazione dei centrociti, l'espressione di BLIMP-1 e la differenziazione in plasmacellule ad alta affinità e cellule B della memoria.",
    "clinicalPearl": "Mutazioni genetiche autosomiche recessive nel gene IL21 o nel gene IL21R provocano una grave immunodeficienza combinata con assenza di switch anticorpale, ipogammaglobulinemia severa e colite precoce refrattaria.",
    "targetSectionId": "sec-14-il21"
  },
  {
    "id": "gen-442",
    "lessonNumber": 13,
    "lessonTitle": "13. Differenziamento Linfociti T Helper: Th1 & Th2",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale polarizzazione aberrante dei linfociti T helper e citochine correlate è responsabile della forma tubercoloide benigna (bassa carica batterica, granulomi epitelioidi) rispetto alla forma lepromatosa maligna (anergia T, distruzione tessutale) nella lebbra di Hansen?",
    "options": [
      "Risposta Th17 nella forma lepromatosa e Th2 nella tubercoloide",
      "Risposta Th2 esclusiva in entrambe le forme",
      "Assenza di risposta T in entrambe le varianti",
      "Robusta polarizzazione Th1 protettiva (IFN-gamma e macrofagi attivati) nella lebbra tubercoloide rispetto a una risposta disfunzionale Th2/Treg (IL-4, IL-10) nella lebbra lepromatosa"
    ],
    "correctIndex": 3,
    "explanation": "La lebbra di Hansen è il paradigma clinico della dicotomia Th1/Th2 nell'uomo: nella forma tubercoloide una risposta Th1 vigorosa produce IFN-gamma attivando i macrofagi a contenere Mycobacterium leprae nei granulomi circoscritti; nella forma lepromatosa la polarizzazione aberrante Th2 produce IL-4 e IL-10 che sopprimono i macrofagi, consentendo la proliferazione incontrollata dei bacilli nelle cellule di Schwann e nella cute.",
    "clinicalPearl": "Questa dicotomia spiega perché i pazienti con lebbra tubercoloide risultano lepromina-positivi al test cutaneo (ipersensibilità ritardata Th1 intatta), mentre i pazienti con lebbra lepromatosa sono completamente anergici al test.",
    "targetSectionId": "sec-13-lebbrapolarizzazione"
  },
  {
    "id": "gen-443",
    "lessonNumber": 14,
    "lessonTitle": "14. Differenziamento Linfociti T Helper: Th17, Treg & Tfh",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale fattore di trascrizione 'master regulator' è condiviso sia dai linfociti T helper follicolari (Tfh) sia dai centroblasti del centro germinativo e reprime l'espressione di Blimp-1?",
    "options": [
      "BCL-6",
      "FoxP3",
      "T-bet",
      "GATA-3"
    ],
    "correctIndex": 0,
    "explanation": "BCL-6 è indispensabile per la genesi dei Tfh: reprime i recettori chemochinici della zona T (CCR7, PSGL-1), upregola CXCR5, induce PD-1 e ICOS, e reprime i programmi alternativi Th1, Th2 e Th17.",
    "clinicalPearl": "Topi privi di BCL-6 specificamente nei linfociti T non sono in grado di generare linfociti Tfh e mostrano una completa assenza di centri germinativi e anticorpi ad alta affinità in seguito a immunizzazione.",
    "targetSectionId": "sec-14-bcl6tfh"
  },
  {
    "id": "gen-444",
    "lessonNumber": 14,
    "lessonTitle": "14. Differenziamento Linfociti T Helper: Th17, Treg & Tfh",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale citochina rilasciata in grandi quantità dai linfociti Treg media soppressione immunitaria legando un recettore eterodimerico ad attività serina/treonina chinasica (TbetaR-I / TbetaR-II) e fosforilando le proteine Smad2 e Smad3?",
    "options": [
      "Interleuchina-10",
      "TGF-beta (Transforming Growth Factor beta)",
      "Interleuchina-35",
      "Interferone-alfa"
    ],
    "correctIndex": 1,
    "explanation": "I linfociti Treg rilasciano TGF-beta sia in forma solubile che legato alla membrana plasmatica complessato con GARP; il legame a TGFBR2 attiva TGFBR1 che fosforila Smad2 e Smad3; questi migrano nel nucleo associati a Smad4 bloccando la proliferazione dei T effettori e la maturazione delle cellule dendritiche.",
    "clinicalPearl": "Topi con delezione mirata del recettore di TGF-beta nei linfociti T muoiono precocemente per infiammazione multiorgano massiva fulminante causata da un'incontrollata attivazione autoreattiva spontanea.",
    "targetSectionId": "sec-14-tgfbetasoppressione"
  },
  {
    "id": "gen-445",
    "lessonNumber": 14,
    "lessonTitle": "14. Differenziamento Linfociti T Helper: Th17, Treg & Tfh",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale citochina immunosoppressoria eterodimerica atipica secreta dai linfociti Treg è formata dall'accoppiamento della subunità p35 dell'IL-12 con la subunità EBI3?",
    "options": [
      "Interleuchina-12",
      "Interleuchina-27",
      "Interleuchina-35 (IL-35)",
      "Interleuchina-23"
    ],
    "correctIndex": 2,
    "explanation": "L'IL-35 è una citochina immunoregolatrice esclusiva composta dalle subunità p35 (condivisa con IL-12) ed EBI3 (condivisa con IL-27); segnala attraverso eterodimeri di gp130, IL-12R-beta2 o omodimeri inducendo l'arresto del ciclo cellulare in G1 dei linfociti T convenzionali.",
    "clinicalPearl": "I Treg esposti ad IL-35 acquisiscono un fenotipo soppressorio specializzato denominato 'iTr35', che non esprime FoxP3 ma è estremamente potente nel sopprimere la colite autoimmune.",
    "targetSectionId": "sec-14-il35"
  },
  {
    "id": "gen-446",
    "lessonNumber": 14,
    "lessonTitle": "14. Differenziamento Linfociti T Helper: Th17, Treg & Tfh",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale recettore chemochinico è selettivamente espresso sui linfociti Th17 coordinandone la migrazione verso i tessuti epiteliali e sinoviali infiammati in risposta alla chemochina CCL20?",
    "options": [
      "CXCR3",
      "CCR4",
      "CXCR5",
      "CCR6"
    ],
    "correctIndex": 3,
    "explanation": "CCR6 è il marcatore recettoriale cardine dei linfociti Th17; riconosce esclusivamente la chemochina CCL20 (MIP-3-alfa) prodotta dalle cellule epiteliali cheratinocitarie e dagli enterociti sotto lo stimolo di IL-17 e TNF.",
    "clinicalPearl": "L'asse CCR6-CCL20 guida l'infiltrazione continua di cellule Th17 nelle placche psoriasiche cutanee e nelle articolazioni colpite da artrite reumatoide.",
    "targetSectionId": "sec-14-ccr6"
  },
  {
    "id": "gen-447",
    "lessonNumber": 13,
    "lessonTitle": "13. Differenziamento Linfociti T Helper: Th1 & Th2",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale citochina autocrina prodotta precocemente dai linfociti T attivati stimola la loro transizione dal ciclo cellulare G0 a S legandosi al recettore trimerico ad alta affinità costituito da CD25, CD122 e CD132?",
    "options": [
      "Interleuchina-2 (IL-2)",
      "Interleuchina-7",
      "Interleuchina-15",
      "Interleuchina-21"
    ],
    "correctIndex": 0,
    "explanation": "IL-2 è il principale fattore di crescita autocrino dei linfociti T; a riposo i T naive esprimono il recettore a media affinità (beta/gamma-c); l'attivazione induce la subunità alfa (CD25), che si assembla formando il complesso eterotrimerico ad altissima affinità (Kd di 10^-11 M) che scatena la proliferazione clonale massiva.",
    "clinicalPearl": "Gli anticorpi monoclonali Basiliximab e Daclizumab legano specificamente CD25 bloccando il legame di IL-2 sui linfociti T alloreattivi e sono impiegati nella profilassi del rigetto acuto nel trapianto renale.",
    "targetSectionId": "sec-13-il2"
  },
  {
    "id": "gen-448",
    "lessonNumber": 14,
    "lessonTitle": "14. Differenziamento Linfociti T Helper: Th17, Treg & Tfh",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale citochina pro-infiammatoria sintetizzata dai linfociti Th17 (IL-17A) agisce sui fibroblasti stromali e sulle cellule epiteliali inducendo una potente secrezione di CXCL8 (IL-8) e G-CSF reclutando massivamente neutrofili?",
    "options": [
      "Interleuchina-4",
      "Interleuchina-17A (IL-17A)",
      "Interleuchina-10",
      "TGF-beta"
    ],
    "correctIndex": 1,
    "explanation": "IL-17A si lega al recettore eterodimerico IL-17RA/IL-17RC accoppiato all'adattatore Act1; questo attiva le vie NF-kappa-B e C/EBP inducendo le cellule stromali a secernere enormi quantità di CXCL1, CXCL2, CXCL8 e G-CSF, mobilitando i neutrofili dal midollo.",
    "clinicalPearl": "L'anticorpo monoclonale Secukinumab blocca selettivamente IL-17A ed è una terapia mirata di straordinaria efficacia nella psoriasi a placche severa e nella spondilite anchilosante.",
    "targetSectionId": "sec-14-il17a"
  },
  {
    "id": "gen-449",
    "lessonNumber": 11,
    "lessonTitle": "11. Sviluppo Timico & Selezione T",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale regolatore trascrizionale nucleare (AIRE, Autoimmune Regulator) espresso nelle cellule epiteliali timiche midollari (mTEC) induce l'espressione ectopica di migliaia di antigeni tessuto-specifici periferici per la selezione negativa?",
    "options": [
      "FoxP3",
      "Fezf2",
      "AIRE (Autoimmune Regulator)",
      "CIITA"
    ],
    "correctIndex": 2,
    "explanation": "La proteina AIRE si associa a complessi epigenetici promuovendo la trascrizione promiscua di geni normalmente espressi solo in tessuti periferici (insulina pancreatica, tiroglobulina tiroidea, proteina interfotorecettoriale retinica); le mTEC espongono questi autoantigeni inducendo l'eliminazione per apoptosi (delezione clonale) dei timociti autoreattivi ad alta affinità.",
    "clinicalPearl": "Mutazioni inattivanti autosomiche recessive nel gene AIRE (21q22.3) causano la Sindrome Poliendocrina Autoimmune di tipo 1 (APS-1 o APECED), caratterizzata dalla triade classica: candidosi mucocutanea cronica, ipoparatiroidismo primitivo e insufficienza corticosurrenalica autoimmune (morbo di Addison).",
    "targetSectionId": "sec-11-aire"
  },
  {
    "id": "gen-450",
    "lessonNumber": 11,
    "lessonTitle": "11. Sviluppo Timico & Selezione T",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "In che cosa consiste il processo di 'selezione positiva' che avviene nella corticale timica mediato dalle cTEC sui timociti doppi positivi (CD4+ CD8+)?",
    "options": [
      "Nell'eliminazione apoptotica di tutti i timociti che legano peptidi estranei",
      "Nell'induzione della ricombinazione del locus della catena pesante",
      "Nell'ipermutazione somatica dei geni variabili TCR-alfa",
      "Nel salvataggio dalla morte per incuria (morte per default) esclusivamente di quei timociti il cui TCR riconosce con affinità bassa o intermedia i complessi self peptide-MHC autologhi"
    ],
    "correctIndex": 3,
    "explanation": "Oltre il 90% dei timociti generati possiede un TCR incapace di interagire con le molecole MHC dell'individuo e morirebbe per apoptosi da mancato segnale ('death by neglect'); le cTEC corticali espongono complessi self-MHC: i timociti che stabiliscono un'interazione a bassa/moderata affinità ricevono segnali di salvezza mediati da Bcl-2 ed ERK, sopravvivono e determinano la restrizione per il self-MHC (imparando a distinguere se diventare CD4+ o CD8+).",
    "clinicalPearl": "La selezione positiva stabilisce in modo indelebile il fenomeno fondamentale della 'Restrizione per l'MHC autologo' descritto da Zinkernagel e Doherty (Premio Nobel 1996).",
    "targetSectionId": "sec-11-selezionepositiva"
  },
  {
    "id": "gen-451",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: Vie di Attivazione",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale sub-componente del complesso molecolare C1 (composto da C1q, C1r e C1s) possiede sei teste globulari connesse a steli collagenici capaci di legarsi ai domini Fc delle IgM e delle IgG complessate con l'antigene?",
    "options": [
      "C1q",
      "C1r",
      "C1s",
      "C4b"
    ],
    "correctIndex": 0,
    "explanation": "C1q è un esamero macromolecolare simile a un mazzo di tulipani; le sue teste globulari riconoscono la porzione Fc delle IgG (in particolare IgG3 e IgG1) e delle IgM conformazionalmente aperte a 'graffetta' (staple); il legame di almeno due teste globulari induce una distorsione meccanica dello stelo che attiva la serina proteasi autocatalitica C1r.",
    "clinicalPearl": "Mutazioni congenite omozigoti inattivati nei geni di C1q (C1QA, C1QB, C1QC) causano la forma monogenica a più alta penetranza di Lupus Eritematoso Sistemico (>90% di rischio), per grave difetto nella clearance degli immunocomplessi e dei corpi apoptotici.",
    "targetSectionId": "sec-15-c1q"
  },
  {
    "id": "gen-452",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: Vie di Attivazione",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale serina proteasi specifica del complesso C1 viene attivata per clivaggio proteolitico da C1r ed è direttamente responsabile del taglio enzimatico dei substrati solubili C4 e C2?",
    "options": [
      "C1q",
      "C1s",
      "Fattore D",
      "MASP-1"
    ],
    "correctIndex": 1,
    "explanation": "C1r attivato scinde la pro-enzima C1s convertendolo in una serina proteasi attiva a due catene; C1s cliva prima la proteina C4 rilasciando C4a e esponendo il legame tioestere reattivo di C4b che si ancora alla membrana, e successivamente cliva C2 legato a C4b rilasciando C2b e formando la convertasi C4b2a.",
    "clinicalPearl": "L'inibitore C1-INH bersaglia e inattiva irreversibilmente sia C1r che C1s staccandoli da C1q, arrestando l'innesco della via classica.",
    "targetSectionId": "sec-15-c1s"
  },
  {
    "id": "gen-453",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: Vie di Attivazione",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale legame chimico intramolecolare ad alta energia altamente reattivo è presente sia nella proteina C3 che nella proteina C4 e consente l'ancoraggio covalente irreversibile alle superfici microbiche mediante esterificazione o amidazione?",
    "options": [
      "Ponte disolfuro intercatena",
      "Legame fosfodiesterico",
      "Legame tioestere interno formato tra un gruppo sulfidrilico di cisteina e un carbonile di glutammina (Cys-Gly-Glu-Gln)",
      "Legame anidridico di pirofosfato"
    ],
    "correctIndex": 2,
    "explanation": "Il legame tioestere interno è normalmente protetto e sepolto all'interno del dominio TED di C3 e C4; quando il peptide viene clivato (in C3b o C4b), avviene un drammatico cambio conformazionale che proietta il legame tioestere verso l'esterno; esso reagisce entro millisecondi con gruppi idrossilici (-OH) o amminici (-NH2) delle proteine e carboidrati adiacenti ancorandosi covalentemente.",
    "clinicalPearl": "Se il tioestere esposto non incontra una superficie entro pochi microsecondi, viene idrolizzato irreversibilmente dall'acqua circolante, neutralizzando C3b solubile e prevenendo l'attacco incontrollato ai tessuti dell'ospite.",
    "targetSectionId": "sec-15-legametioestere"
  },
  {
    "id": "gen-454",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: Vie di Attivazione",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale proteasi serinica associata alla lectina legante il mannosio (MASP-2) è la componente catalitica principale della via lectinica deputata alla scissione di C4 e C2 per assemblare la C3 convertasi C4b2a?",
    "options": [
      "MASP-1",
      "Fattore B",
      "C1s",
      "MASP-2"
    ],
    "correctIndex": 3,
    "explanation": "La via lectinica non impiega anticorpi né C1q: complessi solubili di MBL o Ficoline riconoscono zuccheri terminali microbici; MASP-1 subisce autoattivazione e fosforila/attiva MASP-2; MASP-2 cliva efficientemente sia C4 che C2, assemblando la C3 convertasi identica a quella della via classica (C4b2a).",
    "clinicalPearl": "La via lectinica fornisce una barriera innata immediata contro patogeni fungini e batterici nei primi giorni di vita prima che il neonato sia in grado di produrre anticorpi specifici.",
    "targetSectionId": "sec-15-masp2"
  },
  {
    "id": "gen-455",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: Vie di Attivazione",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale fenomeno biochimico continuo spontaneo (noto come 'tick-over') innesca l'attivazione costitutiva basale della via alternativa del complemento nel plasma fisiologico?",
    "options": [
      "Lenta idrolisi spontanea del legame tioestere interno di C3 operata da molecole d'acqua per formare C3(H2O)",
      "Taglio proteolitico basale da parte della trombina piastrinica",
      "Apertura spontanea di C5 indotta da variazioni di temperatura",
      "Secrezione continua di Properdina attiva dai globuli rossi"
    ],
    "correctIndex": 0,
    "explanation": "Circa l'1-2% del C3 plasmatico subisce spontaneamente ogni ora l'idrolisi del proprio legame tioestere generando C3(H2O) o 'iC3'; C3(H2O) lega il Fattore B, consentendo al Fattore D di clivare il Fattore B in Ba e Bb, formando la C3 convertasi fluida iniziale C3(H2O)Bb che genera i primi frammenti C3b.",
    "clinicalPearl": "Questo tick-over continuo fa sì che la via alternativa agisca come un sistema di sorveglianza costantemente 'acceso al minimo', pronto ad amplificarsi esponenzialmente non appena C3b si deposita su una superficie microbica priva di inibitori.",
    "targetSectionId": "sec-15-tickover"
  },
  {
    "id": "gen-456",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: Vie di Attivazione",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale proteina plasmatica a ferro-indipendente è l'unico fattore regolatorio ad azione positiva del complemento legandosi alla C3 convertasi alternativa (C3bBb) e prolungandone l'emivita di circa 5-10 volte?",
    "options": [
      "Fattore H",
      "Properdina (Fattore P)",
      "Fattore I",
      "Proteina C reattiva"
    ],
    "correctIndex": 1,
    "explanation": "La convertasi C3bBb è intrinsecamente instabile e si dissocia in circa 90 secondi; la Properdina (Fattore P) è un oligomero sintetizzato dai neutrofili che si lega al complesso C3bBb stabilizzandolo stericamente sulla superficie cellulare e impedendone la dissociazione rapida da parte del Fattore H.",
    "clinicalPearl": "Il deficit congenito di Properdina è un'immunodeficienza legata al cromosoma X che predispone a infezioni batteriche fulminanti da Neisseria meningitidis con altissima mortalità in età giovanile.",
    "targetSectionId": "sec-15-properdina"
  },
  {
    "id": "gen-457",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: Vie di Attivazione",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale complesso enzimatico macromolecolare costituisce la C3 convertasi attiva della via classica e della via lectinica secondo la nomenclatura ufficiale moderna?",
    "options": [
      "C3bBb",
      "C3bBb3b",
      "C4b2a",
      "C4b2a3b"
    ],
    "correctIndex": 2,
    "explanation": "Nella via classica e lectinica, C4b legato alla membrana complessa C2a (il frammento catalitico maggiore contenente il dominio serina-proteasico, storicamente talora indicato come C2a e formalizzato come tale); il complesso eterodimerico C4b2a è la C3 convertasi che cliva migliaia di molecole di C3 in C3a e C3b.",
    "clinicalPearl": "La prof.ssa Morrone richiede con rigore le formule stechiometriche: C4b2a è la C3 convertasi classica, mentre aggiungendo un frammento C3b si forma C4b2a3b che è la C5 convertasi classica.",
    "targetSectionId": "sec-15-c3convertasiclassica"
  },
  {
    "id": "gen-458",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: Vie di Attivazione",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale composizione subunitaria molecolare caratterizza la C5 convertasi della via alternativa del complemento?",
    "options": [
      "C4b2a",
      "C4b2a3b",
      "C3bBb",
      "C3bBb3b (oppure C3b2Bb)"
    ],
    "correctIndex": 3,
    "explanation": "La generazione massiva di C3b da parte della C3 convertasi alternativa (C3bBb) fa sì che una seconda molecola di C3b si leghi covalentemente nelle immediate adiacenze del complesso, formando il trimero C3bBb3b; questo trimero modifica la specificità sterica del sito catalitico di Bb, consentendogli di legare e clivare con altissima affinità la proteina C5.",
    "clinicalPearl": "Il taglio di C5 da parte della C5 convertasi (C3bBb3b o C4b2a3b) è l'evento committed irreversibile che innesca l'assemblaggio litico della via terminale comune (MAC).",
    "targetSectionId": "sec-15-c5convertasialternativa"
  },
  {
    "id": "gen-459",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: MAC & Complesso Terminale",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale frammento proteico generato dal taglio di C5 rimane ancorato alla superficie cellulare nucleando l'assemblaggio sequenziale del Complesso di Attacco alla Membrana (MAC / C5b-9)?",
    "options": [
      "C5b",
      "C5a",
      "C3b",
      "C4b"
    ],
    "correctIndex": 0,
    "explanation": "La C5 convertasi scinde C5 rilasciando l'anafilatossina solubile C5a; il frammento C5b subisce una transizione conformazionale metastabile che lega immediatamente la proteina C6 plasmatica formando il complesso C5b6, che recluta poi C7.",
    "clinicalPearl": "A differenza di C3b e C4b, C5b è privo di legame tioestere; l'ancoraggio alla membrana plasmatica non avviene tramite legami covalenti ma attraverso l'inserimento idrofobico delle catene di C7 e C8.",
    "targetSectionId": "sec-15-c5b"
  },
  {
    "id": "gen-460",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: MAC & Complesso Terminale",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale componente del complesso terminale (C7) subisce una transizione idrofila-lipofila inserendo le sue anse anfipatiche nel doppio strato lipidico della membrana plasmatica per ancorare il complesso C5b67?",
    "options": [
      "C6",
      "C7",
      "C8-gamma",
      "C9 monomerico"
    ],
    "correctIndex": 1,
    "explanation": "L'interazione tra C7 e il complesso solubile C5b6 smaschera domini idrofobici su C7 che si inseriscono nel foglietto esterno fosfolipidico; questo passaggio ancora fisicamente il complesso alla membrana plasmatica bersaglio.",
    "clinicalPearl": "Se C7 si associa a C5b6 in fase fluida lontano da una membrana, può legarsi a proteine regolatrici solubili (come la clusterina o vitronectina) che ne impediscono l'inserimento aspecifico sulle cellule dell'ospite.",
    "targetSectionId": "sec-15-c7"
  },
  {
    "id": "gen-461",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: MAC & Complesso Terminale",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale proteina del complemento possiede omologia strutturale con la perforina dei linfociti citotossici e polimerizza formando un poro transmembrana idrofilo di circa 10-15 nm composto da 12-18 subunità nel poro del MAC?",
    "options": [
      "C5a",
      "C8-alfa",
      "C9 (polimero poly-C9)",
      "Fattore B"
    ],
    "correctIndex": 2,
    "explanation": "C9 appartiene alla superfamiglia MACPF/perforina; quando si lega al complesso C5b-8 già inserito nella membrana, C9 subisce un massivo srotolamento strutturale oligomerizzando a cerchio (12-18 molecole di C9) per formare un poro transmembrana polimerico litico aperto che causa l'influsso massivo di acqua e ioni e la lisi osmotica cellulare rapida.",
    "clinicalPearl": "Pazienti con deficit ereditario terminale del complemento (C5, C6, C7, C8 o C9) presentano una suscettibilità aumentata di oltre 10.000 volte alle infezioni batteriche invasive disseminate recidivanti da Neisseria meningitidis.",
    "targetSectionId": "sec-15-c9mac"
  },
  {
    "id": "gen-462",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: MAC & Complesso Terminale",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale farmaco biologico è un anticorpo monoclonale umanizzato diretto specificamente contro la frazione C5 del complemento impedendone il clivaggio e bloccando la formazione del complesso terminale C5b-9?",
    "options": [
      "Rituximab",
      "Anakinra",
      "Tocilizumab",
      "Eculizumab (e la sua formulazione a lunga emivita Ravulizumab)"
    ],
    "correctIndex": 3,
    "explanation": "Eculizumab si lega ad alta affinità a C5 bloccandone stericamente il taglio da parte di entrambe le C5 convertasi; previene il rilascio di C5a e l'assemblaggio litico di C5b-9, arrestando l'emolisi intravascolare complemento-mediata.",
    "clinicalPearl": "Eculizumab è il farmaco di riferimento per l'Emoglobinuria Parossistica Notturna (EPN) e per la Sindrome Emolitico-Uremica atipica (aHUS); i pazienti trattati devono obbligatoriamente ricevere la vaccinazione antimeningococcica per il rischio di sepsi da Neisseria.",
    "targetSectionId": "sec-15-eculizumab"
  },
  {
    "id": "gen-463",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale inibitore solubile appartenente alla superfamiglia delle serpine inattiva covalentemente C1r, C1s, MASP-1, MASP-2 nonché la callicreina e il fattore XIIa della coagulazione?",
    "options": [
      "C1-INH (C1-Inhibitor)",
      "Fattore I",
      "Proteina C attivata",
      "Antitrombina III"
    ],
    "correctIndex": 0,
    "explanation": "C1-INH è una glicoproteina plasmatica fortemente glicosilata sintetizzata dagli epatociti; agisce come substrato suicida per C1r, C1s, MASP-2 e callicreina; il legame provoca un taglio proteolitico che intrappola irreversibilmente la proteasi, prevenendo l'attivazione spontanea del complemento e del sistema callicreina-chinina.",
    "clinicalPearl": "Il deficit ereditario quantitativo (tipo I) o qualitativo funzionale (tipo II) di C1-INH causa l'Angioedema Ereditario (HAE), in cui l'assenza di freno sulla callicreina provoca un'iperproduzione massiva di bradichinina con edemi acuti sottocutanei e sottomucosi laringei potenzialmente asfittici, trattati con Icatibant o concentrati di C1-INH.",
    "targetSectionId": "sec-16-c1inh"
  },
  {
    "id": "gen-464",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale proteina di membrana ancorata a glicosilfosfatidilinositolo (GPI) nota come CD55 o DAF (Decay-Accelerating Factor) accelera la dissociazione spontanea delle C3 convertasi proteggendo le cellule del sangue?",
    "options": [
      "CD59 (Protectina)",
      "CD55 (DAF, Decay-Accelerating Factor)",
      "CD46 (MCP)",
      "CD35 (CR1)"
    ],
    "correctIndex": 1,
    "explanation": "DAF (CD55) è espresso su tutte le cellule esposte al sangue; si insinua stericamente nelle C3 convertasi di superficie (staccando 2a da C4b e Bb da C3b), riducendo l'emivita delle convertasi a frazioni di secondo e arrestando l'amplificazione a cascata prima che si formi C5b.",
    "clinicalPearl": "La perdita concomitante di CD55 e CD59 sulla membrana clonale dei globuli rossi a causa di mutazioni somatiche nel gene PIGA nei progenitori staminali midollari è il difetto molecolare patogenetico primario dell'Emoglobinuria Parossistica Notturna (EPN).",
    "targetSectionId": "sec-16-cd55daf"
  },
  {
    "id": "gen-465",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale regolatore ancorato a GPI (CD59 o Protectina) si inserisce nel complesso terminale C5b-8 impedendo stericamente il legame e la polimerizzazione litica di C9 nella membrana?",
    "options": [
      "CD55",
      "CD46",
      "CD59 (Protectina / MAC-Inhibitory Protein)",
      "Fattore H"
    ],
    "correctIndex": 2,
    "explanation": "CD59 è il principale regolatore terminale di membrana; possiede una tasca specifica che si lega ai domini di C8-alfa e C9 nel complesso nascente, bloccando l'incorporazione delle ulteriori 12-18 molecole di C9 e prevenendo la perforazione litica osmotica delle cellule autologhe sane.",
    "clinicalPearl": "Nell'EPN, l'assenza di CD59 rende gli eritrociti ipersensibili alla lisi osmotica da MAC indotta dall'acidificazione notturna o infezioni, scatenando crisi di emoglobinuria con urine scure al risveglio.",
    "targetSectionId": "sec-16-cd59protectina"
  },
  {
    "id": "gen-466",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale serina proteasi plasmatica costitutivamente attiva (Fattore I) degrada proteoliticamente C3b e C4b in frammenti inattivi (iC3b, C3dg, C4d) necessitando obbligatoriamente di cofattori proteici?",
    "options": [
      "Fattore D",
      "C1s",
      "C2a",
      "Fattore I (CFI)"
    ],
    "correctIndex": 3,
    "explanation": "Il Fattore I circola nel sangue già nella sua conformazione catalitica attiva ma è completamente incapace di tagliare C3b o C4b isolati; richiede che il bersaglio sia preventivamente legato a un cofattore (Fattore H, MCP/CD46, CR1 o C4bp); solo allora il Fattore I esegue i tagli che generano iC3b e successivamente C3d/C3dg.",
    "clinicalPearl": "Mutazioni loss-of-function nel gene CFI portano al consumo incontrollato di C3 nel plasma con ipocomplementemia severa e predisposizione ad aHUS e glomerulonefrite membranoproliferativa.",
    "targetSectionId": "sec-16-fattorei"
  },
  {
    "id": "gen-467",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale glicoproteina plasmatica a 20 domini CCP (Fattore H) discrimina le cellule self dell'ospite dai microbi legandosi all'acido sialico e ai glicosaminoglicani solfati autologhi?",
    "options": [
      "Fattore H (CFH)",
      "Properdina",
      "Fattore B",
      "C4bp"
    ],
    "correctIndex": 0,
    "explanation": "Il Fattore H utilizza i suoi domini CCP 1-4 per accelerare il decadimento di C3bBb e fungere da cofattore per il Fattore I; contemporaneamente, i suoi domini CCP 19-20 riconoscono i residui di acido sialico ed eparan solfato abbondanti sulle cellule umane ma assenti sulla maggior parte dei batteri, concentrando l'azione protettiva antilisi sulle membrane autologhe.",
    "clinicalPearl": "Mutazioni nei domini CCP 19-20 del Fattore H che aboliscono l'interazione con l'acido sialico dell'endotelio renale sono la causa primaria della Sindrome Emolitico-Uremica atipica (aHUS), caratterizzata da microangiopatia trombotica renale.",
    "targetSectionId": "sec-16-fattoreh"
  },
  {
    "id": "gen-468",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale polimorfismo genetico a singolo nucleotide (Y402H) nel dominio CCP 7 del Fattore H è il più potente fattore di rischio genetico non modificabile per la Degenerazione Maculare Senile (AMD)?",
    "options": [
      "Polimorfismo V158F in CD16a",
      "Sostituzione aminoacidica Tirosina-402-Istidina (Y402H nel gene CFH)",
      "Mutazione R620W in PTPN22",
      "Delezione delta-32 in CCR5"
    ],
    "correctIndex": 1,
    "explanation": "La variante Y402H altera la carica elettrostatica del dominio CCP 7 del Fattore H, riducendone drasticamente l'affinità di legame per i glicosaminoglicani della membrana di Bruch e dell'epitelio pigmentato retinico; la mancata inibizione del complemento causa deposizione cronica di C3b e MAC formando le caratteristiche 'drusen' subretiniche che portano alla perdita della visione centrale.",
    "clinicalPearl": "I portatori omozigoti per l'allele di rischio CFH 402H hanno un incremento del rischio di sviluppare Degenerazione Maculare Senile avanzata di oltre 5-7 volte rispetto ai non portatori.",
    "targetSectionId": "sec-16-y402hamd"
  },
  {
    "id": "gen-469",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: Anafilatossine & Infiammazione",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale anafilatossina polipeptidica di 74 aminoacidi rilasciata dal clivaggio di C5 è il più potente peptide chemiotattico e spasmogeno della cascata complementare legandosi al recettore C5aR1 (CD88)?",
    "options": [
      "C3a",
      "C4a",
      "C5a",
      "Bb"
    ],
    "correctIndex": 2,
    "explanation": "C5a è la più potente anafilatossina conosciuta: possiede un'attività biologica circa 20-50 volte superiore a C3a e oltre 1000 volte superiore a C4a; agisce su C5aR1 (recettore GPCR associato a Gi) inducendo degranulazione massiva dei mastociti con rilascio di istamina, aumento della permeabilità capillare, broncocostrizione e chemiotassi direzionale potente per neutrofili e monociti.",
    "clinicalPearl": "La carboxipeptidasi N plasmatica rimuove rapidamente l'arginina C-terminale di C5a convertendolo nella forma attenuata 'C5a des-Arg', prevenendo lo shock anafilattoide sistemico indiscriminato.",
    "targetSectionId": "sec-15-c5a"
  },
  {
    "id": "gen-470",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale recettore del complemento espresso sugli eritrociti umani (CR1 o CD35) lega C3b e C4b opsonizzati negli immunocomplessi circolanti consentendone il trasporto ematico alla milza e al fegato per la clearance macrofagica?",
    "options": [
      "CR2 (CD21)",
      "CR3 (CD11b/CD18)",
      "CR4 (CD11c/CD18)",
      "CR1 (CD35)"
    ],
    "correctIndex": 3,
    "explanation": "Gli eritrociti circolanti esprimono migliaia di molecole di CR1 (CD35); quando gli immunocomplessi plasmatici attivano il complemento, i residui covalenti di C3b e C4b vengono catturati da CR1; gli eritrociti trasportano questi immunocomplessi ai sinusoidi di milza e fegato, dove i macrofagi tessutali li staccano e distruggono senza danneggiare l'eritrocita ('fenomeno dell'immunoaderenza').",
    "clinicalPearl": "Nel LES, la progressiva saturazione e riduzione numerica dei recettori CR1 eritrocitari impedisce la corretta clearance degli immunocomplessi solubili, che precipitano nelle membrane basali dei glomeruli renali causando glomerulonefrite lupica.",
    "targetSectionId": "sec-16-cr1clearance"
  },
  {
    "id": "gen-471",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale frammento proteico derivato dalla degradazione sequenziale di C4 mediata dal Fattore I (C4d) rimane ancorato covalentemente alla membrana endoteliale e funge da biomarcatore gold-standard istologico per il rigetto mediato da anticorpi (ABMR)?",
    "options": [
      "Frammento C4d",
      "Frammento C4a",
      "Frammento C3a",
      "Frammento C5a"
    ],
    "correctIndex": 0,
    "explanation": "C4d è il frammento C-terminale inattivo che conserva il legame tioestere originale ancorato covalentemente all'endotelio capillare peritubulare; non possiede recettori di clearance rapida e persiste per giorni nei tessuti vascolari trapiantati.",
    "clinicalPearl": "La positività diffusa per C4d nei capillari peritubulari della biopsia renale allogenica all'immunofluorescenza è il criterio diagnostico cardine di Banff per confermare il Rigetto Acuto Mediato da Anticorpi (ABMR).",
    "targetSectionId": "sec-16-c4d"
  },
  {
    "id": "gen-472",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale proteina solubile plasmatica ad alto peso molecolare (C4bp, C4b-Binding Protein) a forma di piovra si lega a C4b fungendo da cofattore per il Fattore I ed accelerando il decadimento della convertasi classica C4b2a?",
    "options": [
      "Fattore H",
      "C4bp (C4b-Binding Protein)",
      "Clusterina",
      "Properdina"
    ],
    "correctIndex": 1,
    "explanation": "C4bp è costituita da 7 catene alfa identiche e una catena beta tenute insieme da un nucleo centrale; le catene alfa legano C4b staccando stericamente C2a e consentendo al Fattore I di scindere C4b in C4c e C4d; la catena beta lega la Proteina S anticoagulante, connettendo il complemento alla coagulazione.",
    "clinicalPearl": "Alcuni ceppi patogeni di Streptococcus pyogenes (proteina M) e Neisseria gonorrhoeae catturano C4bp sulla loro superficie per inattivare C4b ed evadere l'opsonizzazione complementare.",
    "targetSectionId": "sec-16-c4bp"
  },
  {
    "id": "gen-473",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale regolatore ubiquitario integrale transmembrana (CD46 o MCP, Membrane Cofactor Protein) protegge tutti i tessuti nucleati fungendo da cofattore per il taglio di C3b e C4b operato dal Fattore I?",
    "options": [
      "CD55 (DAF)",
      "CD59",
      "CD46 (MCP, Membrane Cofactor Protein)",
      "CR2"
    ],
    "correctIndex": 2,
    "explanation": "A differenza di CD55 (che accelera solo la dissociazione delle convertasi), CD46 non ha attività di decadimento ma agisce unicamente come cofattore essenziale: lega C3b e C4b depositati sulle membrane delle cellule nucleate sane orientandoli per il taglio degradativo definitivo da parte del Fattore I.",
    "clinicalPearl": "Mutazioni genetiche autosomiche dominanti con aploinsufficienza nel gene CD46 si riscontrano in circa il 10-15% dei casi di Sindrome Emolitico-Uremica atipica (aHUS).",
    "targetSectionId": "sec-16-cd46mcp"
  },
  {
    "id": "gen-474",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: MAC & Complesso Terminale",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale proteina plasmatica solubile lipoproteica (nota anche come Proteina S del complemento o Vitronectina) si lega al complesso C5b-7 in fase fluida impedendone l'inserimento idrofobico nelle membrane cellulari bystander?",
    "options": [
      "Properdina",
      "Clusterina",
      "Fattore I",
      "Vitronectina (Proteina S del complemento)"
    ],
    "correctIndex": 3,
    "explanation": "La vitronectina (e la clusterina) agisce come 'trappola fluida': se il complesso C5b67 non si ancora immediatamente alla membrana del patogeno entro pochi millisecondi, la vitronectina complessa C7 mascherando le regioni idrofobiche; il complesso risultante SC5b-9 rimane solubile e non litico nel plasma.",
    "clinicalPearl": "La quantificazione dei complessi solubili terminali SC5b-9 (TCC) nel siero o plasma con saggio ELISA è un indice diretto quantitativo di attivazione sistemica massiva in vivo del complemento.",
    "targetSectionId": "sec-15-vitronectina"
  },
  {
    "id": "gen-475",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale autoanticorpo patologico circolante (C3 Nephritic Factor o C3NeF) si lega direttamente alla C3 convertasi alternativa (C3bBb) stabilizzandola contro il decadimento mediato dal Fattore H e causando consumo plasmatico massivo di C3?",
    "options": [
      "C3NeF (C3 Nephritic Factor)",
      "Autoanticorpi anti-C1q",
      "Anticorpi anti-dsDNA",
      "Autoanticorpi anti-MPO"
    ],
    "correctIndex": 0,
    "explanation": "C3NeF è un autoanticorpo IgG che mima la funzione della Properdina legandosi all'interfaccia tra C3b e Bb; impedisce la dissociazione fisiologica operata dal Fattore H e da DAF prolungando l'emivita della convertasi fino a decine di minuti; questo induce la scissione incontrollata continua di C3 nel plasma con ipocomplementemia profonda.",
    "clinicalPearl": "La presenza di C3NeF è tipica della Glomerulopatia a Depositi Densi (DDD / Glomerulonefrite Membranoproliferativa di tipo II), caratterizzata da deposizione continua di C3 lungo la membrana basale glomerulare e lipodistrofia parziale.",
    "targetSectionId": "sec-16-c3nef"
  },
  {
    "id": "gen-476",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: Vie di Attivazione",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale classe di patogeni batterici capsulati è storicamente e clinicamente legata a meningiti fulminanti ed episcleriti nei pazienti con deficit congenito delle proteine terminali del MAC (C5, C6, C7, C8, C9)?",
    "options": [
      "Staphylococcus aureus",
      "Neisseria meningitidis (Meningococco) e Neisseria gonorrhoeae",
      "Streptococcus pneumoniae",
      "Listeria monocytogenes"
    ],
    "correctIndex": 1,
    "explanation": "La maggior parte dei batteri Gram-positivi e Gram-negativi viene eliminata primariamente per opsonofagocitosi mediata da C3b; tuttavia, i batteri del genere Neisseria possiedono pareti cellulari sottili con membrane esterne direttamente accessibili alla lisi osmotica da parte del poro MAC C5b-9, che rappresenta l'unico meccanismo veramente efficace per la loro distruzione rapida.",
    "clinicalPearl": "Un episodio di meningite meningococcica ricorrente o causata da sierotipi rari (come Y, W135 o X) in un adolescente impone tassativamente lo studio diagnostico quantitativo dell'attività emolitica totale del complemento CH50 e AH50.",
    "targetSectionId": "sec-15-neisseriamac"
  },
  {
    "id": "gen-477",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: Anafilatossine & Infiammazione",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale recettore alternativo atipico per C5a (C5aR2 o C5L2) è privo di accoppiamento funzionale con le proteine G e funge primariamente da recettore esca per il sequestro e la degradazione di C5a?",
    "options": [
      "C5aR1 (CD88)",
      "C3aR",
      "C5aR2 (C5L2)",
      "CR3"
    ],
    "correctIndex": 2,
    "explanation": "A differenza di C5aR1 che trasduce segnali pro-infiammatori tramite proteine Gi e G16, C5aR2 manca del motivo DRY canonico intracellulare; lega sia C5a che C5a des-Arg ad alta affinità inducendone l'internalizzazione e il trasporto lisosomiale, modulando negativamente la disponibilità dell'anafilatossina.",
    "clinicalPearl": "Nei modelli murini, il knockout di C5aR2 aggrava la sepsi endotossica per mancata rimozione di C5a plasmatico.",
    "targetSectionId": "sec-15-c5ar2"
  },
  {
    "id": "gen-478",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale test di laboratorio emolitico quantitativo valuta l'integrità funzionale globale della via classica del complemento misurando la diluizione di siero necessaria per lisare il 50% di una sospensione standard di eritrociti di montone sensibilizzati con anticorpi di coniglio?",
    "options": [
      "Test AH50",
      "Dosaggio DHR 123",
      "Test della calprotectina",
      "Test CH50 (Total Hemolytic Complement)"
    ],
    "correctIndex": 3,
    "explanation": "Il test CH50 misura la capacità del siero del paziente di indurre la lisi di emazie di montone pre-rivestite di anticorpi IgG/IgM anti-eritrocita (attivazione via classica da C1 fino a C9); un valore di CH50 azzerato o marcatamente ridotto indica un deficit genetico o un consumo massivo di uno qualsiasi dei componenti da C1 a C9.",
    "clinicalPearl": "Se il CH50 è nullo mentre il test AH50 (via alternativa) è perfettamente normale, il difetto molecolare è selettivamente confinato a monte nella via classica (C1q, C1r, C1s, C4 o C2).",
    "targetSectionId": "sec-16-ch50"
  },
  {
    "id": "gen-479",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale test funzionale emolitico valuta specificamente l'integrità della via alternativa del complemento utilizzando eritrociti di coniglio in presenza di chelanti del calcio (EGTA) che inibiscono selettivamente C1 e MBL?",
    "options": [
      "Test AH50 (Alternative Pathway Hemolytic Activity)",
      "Test CH50",
      "Test di Coombs diretto",
      "Saggio alla benzidina"
    ],
    "correctIndex": 0,
    "explanation": "La via alternativa non richiede ioni Ca2+ per la propria convertasi (richiede solo Mg2+); chelando selettivamente il calcio con EGTA e fornendo magnesio, si bloccano la via classica e lectinica (Ca2+-dipendenti); gli eritrociti di coniglio (privi di acido sialico) innescano la via alternativa: l'AH50 misura la percentuale di lisi dipendente da C3, Fattore B, Fattore D, Properdina e componenti del MAC.",
    "clinicalPearl": "L'analisi combinata di CH50 e AH50 permette una rapida discriminazione biochimica della localizzazione di qualsiasi deficit complementare congenito o acquisito.",
    "targetSectionId": "sec-16-ah50"
  },
  {
    "id": "gen-480",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale alterazione molecolare e genetica è alla base della Sindrome Emolitico-Uremica atipica (aHUS), caratterizzata da anemia emolitica microangiopatica, trombocitopenia e insufficienza renale acuta?",
    "options": [
      "Presenza della tossina Shiga di Escherichia coli O157:H7",
      "Mutazioni con perdita di funzione nei regolatori del complemento (Fattore H, Fattore I, CD46) o mutazioni gain-of-function nel Fattore B o C3 che provocano una perenne iperattivazione della via alternativa sull'endotelio glomerulare",
      "Deficit dell'enzima ADAMTS13 con accumulo di multimeri giganti di von Willebrand",
      "Assenza genetica completa di C1q"
    ],
    "correctIndex": 1,
    "explanation": "Nell'aHUS non vi è alcuna infezione da batteri produttori di Shiga-tossina (che causa invece la forma tipica post-dissenterica); le mutazioni dei regolatori del complemento (soprattutto nei domini C-terminali del Fattore H) impediscono la protezione dell'endotelio fenestrato glomerulare dall'attacco della convertasi alternativa, innescando necrosi endoteliale, trombosi microvascolare ed emolisi meccanica.",
    "clinicalPearl": "La terapia con l'anticorpo monoclonale anti-C5 Eculizumab o Ravulizumab arresta tempestivamente il danno endoteliale e previene l'insufficienza renale cronica dialisi-dipendente nell'aHUS.",
    "targetSectionId": "sec-16-ahus"
  },
  {
    "id": "gen-481",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: Vie di Attivazione",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale frammento peptidico viene rilasciato solubile nel plasma quando C3 viene scisso dalla C3 convertasi e agisce come potente anafilatossina sui mastociti?",
    "options": [
      "C3b",
      "C3d",
      "C3a",
      "C3(H2O)"
    ],
    "correctIndex": 2,
    "explanation": "La scissione enzimatica di C3 da parte delle C3 convertasi genera il grande frammento C3b (che espone il tioestere e media l'opsonizzazione) e il piccolo peptide solubile N-terminale C3a (77 aminoacidi); C3a si lega al recettore C3aR su mastociti, basofili e cellule muscolari lisce innescando vasodilatazione e contrazione bronchiale.",
    "clinicalPearl": "Analogamente a C5a, anche C3a viene inattivato rapidamente nel plasma dalla carboxipeptidasi N che rimuove l'arginina terminale trasformandolo in C3a des-Arg, privo di attività anafilatossica.",
    "targetSectionId": "sec-15-c3a"
  },
  {
    "id": "gen-482",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale recettore fagocitico leucocitario (CR3 o integrina Mac-1, CD11b/CD18) riconosce con altissima affinità il frammento degradato iC3b sulla superficie microbica mediando la fagocitosi?",
    "options": [
      "CR1 (CD35)",
      "CR2 (CD21)",
      "C5aR1",
      "CR3 (Mac-1 / alfa-M-beta-2 / CD11b/CD18)"
    ],
    "correctIndex": 3,
    "explanation": "iC3b deriva dal taglio di C3b operato dal Fattore I; non può più partecipare alle convertasi ma funge da potentissima opsonina legandosi al dominio I dell'integrina leucocitaria CR3 (CD11b/CD18) e CR4 (CD11c/CD18) su neutrofili e macrofagi, promuovendo una vigorosa fagocitosi non infiammatoria.",
    "clinicalPearl": "Nei pazienti affetti da LAD-1, l'assenza della catena comune CD18 impedisce l'espressione di CR3 e CR4, determinando una grave compromissione della fagocitosi mediata da complemento.",
    "targetSectionId": "sec-16-cr3"
  },
  {
    "id": "gen-483",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale proteina plasmatica di fase acuta epatica a struttura pentamerica ciclica (Proteina C Reattiva, CRP) si lega alla fosfocolina della parete batterica e attiva direttamente la via classica del complemento reclutando C1q?",
    "options": [
      "Proteina C Reattiva (CRP)",
      "Laminina",
      "Aptoglobina",
      "Ceruloplasmina"
    ],
    "correctIndex": 0,
    "explanation": "La CRP appartiene alle pentraxine corte; riconosce la fosfocolina esposta sulla capsula dello Streptococcus pneumoniae e su cellule apoptotiche; il legame provoca un riarrangiamento conformazionale che espone un sito di ancoraggio ad alta affinità per le teste globulari di C1q, attivando la via classica in assenza di anticorpi specifici.",
    "clinicalPearl": "La velocità e l'entità con cui la CRP plasmatica aumenta (fino a 1000 volte) entro 24-48 ore da uno stimolo flogistico la rendono il marcatore quantitativo di routine più diffuso per monitorare infezioni batteriche sistemiche.",
    "targetSectionId": "sec-16-crp"
  },
  {
    "id": "gen-484",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale deficit complementare congenito è associato a una presentazione clinica caratterizzata da Lupus Eritematoso Sistemico ad esordio precoce con positività anti-Ro/SSA e scarsa o assente glomerulonefrite?",
    "options": [
      "Deficit isolato di Properdina",
      "Deficit congenito di C2 o C4 (in particolare C4A)",
      "Deficit di C9",
      "Deficit del Fattore D"
    ],
    "correctIndex": 1,
    "explanation": "Il deficit di C2 è il deficit del complemento più comune nella popolazione caucasica (frequenza eterozigote circa 1:100); l'assenza di C2 o di C4 compromette la clearance degli immunocomplessi e la rimozione fisiologica delle cellule apoptotiche, favorendo la rottura della tolleranza e lo sviluppo di un fenotipo lupico cutaneo subacuto.",
    "clinicalPearl": "I pazienti con deficit di C2 presentano tipicamente test CH50 azzerato ma AH50 normale, e possono mostrare una spiccata fotosensibilità cutanea.",
    "targetSectionId": "sec-16-deficitc2"
  },
  {
    "id": "gen-485",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: Vie di Attivazione",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale lectina solubile omologa a MBL riconosce specificamente residui di N-acetilglucosamina (GlcNAc) e N-acetilgalattosamina attraverso domini fibrinogeno-like (FBG) anziché lectinici?",
    "options": [
      "Catelicidina",
      "Proteina C reattiva",
      "Ficoline (L-ficolina, M-ficolina, H-ficolina)",
      "Selectina P"
    ],
    "correctIndex": 2,
    "explanation": "Le ficoline formano oligomeri simili a MBL con steli collagenici ma le loro teste globulari di riconoscimento sono costituite da domini omologhi al fibrinogeno (domini FBG); riconoscono composti acetilati sui batteri attivando le proteasi MASP-1 e MASP-2.",
    "clinicalPearl": "La L-ficolina (ficolina-2) è abbondante nel siero umano ed è essenziale per la neutralizzazione e opsonizzazione complementare di batteri Gram-positivi capsulati come lo Streptococcus agalactiae.",
    "targetSectionId": "sec-15-ficoline"
  },
  {
    "id": "gen-486",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale recettore dell'anafilatossina C3a (C3aR) espresso su basofili, mastociti e cellule muscolari lisce trasduce attraverso proteine G eterotrimeriche inducendo degranulazione istaminica?",
    "options": [
      "CR1",
      "CR2",
      "C5aR2",
      "C3aR (recettore a 7 eliche transmembrana per C3a)"
    ],
    "correctIndex": 3,
    "explanation": "C3aR è un GPCR a 7 domini transmembrana accoppiato a proteine G-alfa-i; il legame di C3a induce il rilascio di inositolo trifosfato e l'apertura dei canali del calcio, provocando la degranulazione immediata dei mediatori preformati mastocitari.",
    "clinicalPearl": "Iniezioni intradermiche di C3a o C5a inducono la classica reazione di 'pomfo ed eritema' (wheal and flare) indistinguibile dall'ipersensibilità immediata IgE-mediata.",
    "targetSectionId": "sec-16-c3ar"
  },
  {
    "id": "gen-487",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale farmaco biologico peptidico ciclico (Pegcetacoplan) lega selettivamente C3 e C3b bloccando sia il clivaggio di C3 che la formazione di tutte le convertasi a monte della cascata?",
    "options": [
      "Pegcetacoplan (inibitore allosterico sintetico di C3)",
      "Eculizumab",
      "Anakinra",
      "Infliximab"
    ],
    "correctIndex": 0,
    "explanation": "Pegcetacoplan (un derivato pegilato della compstatina) si inserisce in una tasca conservata di C3 e C3b, impedendone stericamente il taglio sia da parte della C3 convertasi classica che alternativa; blocca sia l'emolisi intravascolare terminale mediata da C5 sia l'opsonizzazione extravascolare splenica mediata da C3b.",
    "clinicalPearl": "Pegcetacoplan è stato approvato per i pazienti con EPN che sviluppano emolisi extravascolare cronica persistente durante il trattamento con Eculizumab a causa del continuo deposito di C3b sugli eritrociti.",
    "targetSectionId": "sec-16-pegcetacoplan"
  },
  {
    "id": "gen-488",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale alterazione molecolare a carico del gene PIGA (localizzato sul cromosoma Xp22.2) provoca l'assenza contemporanea di CD55 e CD59 sulla superficie degli eritrociti nell'Emoglobinuria Parossistica Notturna?",
    "options": [
      "Mutazione della catena pesante delle immunoglobuline",
      "Mutazione somatica inattivante nel gene PIGA che blocca la prima tappa della sintesi del nucleo glicosilfosfatidilinositolo (GPI)",
      "Delezione del gene della spectrina eritrocitaria",
      "Inattivazione permanente del fattore I"
    ],
    "correctIndex": 1,
    "explanation": "Il gene PIGA codifica la subunità catalitica fondamentale della fosfatidilinositolo-glicano N-acetilglucosaminil-transferasi, enzima indispensabile per il primo passaggio biosintetico dell'ancora lipidica GPI; una mutazione somatica in una cellula staminale ematopoietica clonale abolisce l'ancoraggio di tutte le proteine GPI-dipendenti, lasciando la progenie eritrocitaria priva sia di CD55 che di CD59.",
    "clinicalPearl": "La citometria a flusso FLAER (fluorescent aerolysin test) che si lega specificamente al nucleo GPI intatto è il gold-standard diagnostico assoluto per quantificare la dimensione del clone EPN nel sangue periferico.",
    "targetSectionId": "sec-16-piga"
  },
  {
    "id": "gen-489",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: Vie di Attivazione",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale serina proteasi plasmatica monomerica a concentrazione limitante circola nel sangue in forma constitutivamente attiva scindendo il Fattore B legato a C3b?",
    "options": [
      "Fattore I",
      "C1r",
      "Fattore D (CFD)",
      "MASP-2"
    ],
    "correctIndex": 2,
    "explanation": "Il Fattore D circola nel sangue già nella sua conformazione catalitica ma la sua tasca attiva è inibita da un'ansa flessibile; solo quando il Fattore B si lega a C3b o C3(H2O), subisce un cambio conformazionale che allinea la tasca catalitica del Fattore D, permettendogli di clivare il legame Arg-Lys del Fattore B rilasciando Ba e generando C3bBb.",
    "clinicalPearl": "Inibitori selettivi a piccole molecole orali del Fattore D (come Danicopan) sono stati recentemente sviluppati per bloccare la via alternativa inibendo selettivamente l'emolisi extravascolare.",
    "targetSectionId": "sec-15-fattored"
  },
  {
    "id": "gen-490",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale recettore solubile o di membrana del complemento (CR2 o CD21) funge da recettore di ingresso cellulare primario per il virus di Epstein-Barr (EBV) sui linfociti B umani?",
    "options": [
      "CR1 (CD35)",
      "CR2 (CD21)",
      "CD19",
      "CR2 (CD21)"
    ],
    "correctIndex": 3,
    "explanation": "La glicoproteina gp350/220 dell'involucro virale di EBV mima la struttura di C3d legandosi con avidità nanomolare ai domini CCP 1-2 di CR2 (CD21); questo legame innesca l'endocitosi e l'infezione latente trasformativa dei linfociti B.",
    "clinicalPearl": "La perdita di CD21 sulla membrana dei linfociti B della memoria è un segno caratteristico di senescenza o 'esaurimento clonale' (cellule B atipiche esaurite) durante infezioni croniche come HIV o malaria.",
    "targetSectionId": "sec-16-cr2ebv"
  },
  {
    "id": "gen-491",
    "lessonNumber": 14,
    "lessonTitle": "14. Cellule T della Memoria & Omeostasi",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale sottopopolazione di linfociti T della memoria (TCM o Central Memory T cells) esprime costitutivamente CD62L e CCR7 ricircolando preferenzialmente attraverso le venule ad endotelio alto negli organi linfoidi secondari?",
    "options": [
      "Linfociti T della memoria centrale (TCM)",
      "Linfociti T della memoria effettrice (TEM)",
      "Linfociti T della memoria residente nei tessuti (TRM)",
      "Linfociti T effettori terminali TEMRA"
    ],
    "correctIndex": 0,
    "explanation": "Le cellule TCM mantengono i recettori di homing linfoide CD62L (L-selectina) e CCR7; possiedono una straordinaria capacità proliferativa e differenziativa in seguito a re-infezioni secondarie producendo grandi quantità di IL-2 ma scarse citochine effettrici immediate.",
    "clinicalPearl": "Al contrario, le cellule TEM mancano di CD62L e CCR7, esprimono recettori per chemochine infiammatorie e migrano nei tessuti periferici dove esercitano citotossicità o rilascio immediato di IFN-gamma.",
    "targetSectionId": "sec-14-tcm"
  },
  {
    "id": "gen-492",
    "lessonNumber": 14,
    "lessonTitle": "14. Cellule T della Memoria & Omeostasi",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale marcatore integrinico di superficie (CD103 o alfa-E-beta-7) combinato con l'upregolazione di CD69 e l'assenza di S1PR1 caratterizza i linfociti T della memoria residenti nei tessuti (TRM) nelle barriere mucosali ed epidermiche?",
    "options": [
      "CD62L",
      "Integrina alfa-E / beta-7 (CD103) e CD69",
      "CCR7",
      "CD45RA"
    ],
    "correctIndex": 1,
    "explanation": "I linfociti TRM non ricircolano nel sangue o nella linfa ma risiedono stabilmente negli epiteli; l'integrina alfaE-beta7 (CD103) si ancora all'E-caderina degli enterociti o cheratinociti, mentre CD69 internalizza S1PR1 impedendone l'uscita vascolare; forniscono una prima linea sentinella immediata nei siti di ri-esposizione al patogeno.",
    "clinicalPearl": "Nelle patologie infiammatorie croniche recidivanti a localizzazione fissa (come le placche psoriasiche che ricompaiono esattamente nella stessa sede o la vitiligine), la persistenza clonale dei linfociti TRM patogeni autoreattivi è la causa primaria della recidiva tessutale.",
    "targetSectionId": "sec-14-trm"
  },
  {
    "id": "gen-493",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: Vie di Attivazione",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale ione bivalente inorganico è strettamente indispensabile per mantenere l'integrità strutturale dell'eterotetramero catalitico C1r2-C1s2 all'interno del complesso macromolecolare C1 della via classica?",
    "options": [
      "Magnesio (Mg2+)",
      "Zinco (Zn2+)",
      "Calcio (Ca2+)",
      "Ferro (Fe2+)"
    ],
    "correctIndex": 2,
    "explanation": "Gli ioni Ca2+ coordinano specifici domini di legame tra C1r e C1s, mantenendo l'eterotetramero stabile e ancorato all'anello centrale di C1q; la chelazione del calcio mediante EDTA dissocia istantaneamente C1r e C1s da C1q abolendo del tutto l'attività della via classica.",
    "clinicalPearl": "Al contrario, la convertasi della via alternativa (C3bBb) richiede ioni Mg2+ per coordinare la tasca MIDAS del Fattore B; questa distinzione biochimica viene sfruttata in laboratorio per isolare la funzione delle due vie mediante chelanti selettivi.",
    "targetSectionId": "sec-15-calcioc1"
  },
  {
    "id": "gen-494",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: Vie di Attivazione",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale alterazione strutturale o conformazionale subisce la molecola pentamerica di IgM solubile nel plasma quando lega molteplici epitopi ripetuti sulla superficie di un batterio consentendo l'ancoraggio di C1q?",
    "options": [
      "Idrolisi della catena J",
      "Shedding delle catene leggere",
      "Dissociazione in monomeri isolati",
      "Transizione conformazionale planare-a-graffetta ('planar to staple transition') con esposizione dei domini CH3 leganti C1q"
    ],
    "correctIndex": 3,
    "explanation": "Nel plasma libero, la molecola pentamerica di IgM adotta una conformazione planare piatta a stella ('disco planare') in cui i siti di legame per C1q sui domini CH3 sono stericamente mascherati; quando i bracci Fab legano epitopi antigenici ravvicinati sulla superficie microbica, i domini costanti Fc si piegano perpendicolarmente verso l'alto assumendo la conformazione a 'graffetta' (staple); questa transizione espone simultaneamente fino a 5 siti di legame per C1q, consentendo un ancoraggio multivalente ad altissima avidità (Kd < 10^-9 M).",
    "clinicalPearl": "Una singola molecola di IgM legata all'antigene in conformazione a graffetta è sufficiente per attivare e scatenare l'intera cascata classica del complemento, mentre sono necessarie almeno due molecole di IgG ravvicinate sulla membrana (a meno di 30-40 nm) per permettere l'ingaggio bivalente di C1q.",
    "targetSectionId": "sec-15-igmstaple"
  },
  {
    "id": "gen-495",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale classe di farmaci biologici ricombinanti o inibitori recettoriali a piccole molecole orali (come Avacopan) blocca selettivamente il recettore C5aR1 (CD88) senza interferire con la formazione del complesso litico MAC C5b-9?",
    "options": [
      "Avacopan (antagonista selettivo orale di C5aR1)",
      "Eculizumab",
      "Anakinra",
      "Rituximab"
    ],
    "correctIndex": 0,
    "explanation": "Avacopan è un potente antagonista allosterico competitivo del recettore C5aR1; spegne l'attivazione dei neutrofili, la chemiotassi e il rilascio di specie reattive dell'ossigeno innescati da C5a, ma preserva completamente la generazione di C5b e la formazione fisiologica del MAC (C5b-9) a valle, mantenendo intatta la difesa litica antibatterica contro Neisseria.",
    "clinicalPearl": "Avacopan è un farmaco innovativo approvato per il trattamento delle vasculiti ANCA-associate severe (Granulomatosi con poliangioite e poliangioite microscopica), consentendo una drastica riduzione o eliminazione dell'uso dei glucocorticoidi ad alte dosi.",
    "targetSectionId": "sec-16-avacopan"
  },
  {
    "id": "gen-496",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale organo o tessuto è la principale sorgente ematopoietica/stromale di biosintesi sistemica della stragrande maggioranza delle proteine solubili del complemento (C1r, C1s, C2, C3, C4, C5, C6, C7, C8, C9, Fattore B, Fattore H, Fattore I)?",
    "options": [
      "Milza",
      "Fegato (epatociti parenchimali)",
      "Midollo osseo",
      "Rene (tubuli prossimali)"
    ],
    "correctIndex": 1,
    "explanation": "Oltre il 90% delle proteine native del complemento plasmatico circolante viene sintetizzato e secreto costitutivamente dagli epatociti parenchimali nel fegato; durante la risposta di fase acuta, citochine come IL-6, IL-1 e TNF aumentano esponenzialmente la trascrizione epatica di C3, C4 e Fattore B.",
    "clinicalPearl": "Pazienti affetti da insufficienza epatica terminale o cirrosi scompensata mostrano una grave ipocomplementemia secondaria da ridotta sintesi epatica, che concorre in modo determinante all'elevatissima suscettibilità a sepsi e peritonite batterica spontanea (SBP).",
    "targetSectionId": "sec-16-sintesiepatica"
  },
  {
    "id": "gen-497",
    "lessonNumber": 15,
    "lessonTitle": "15. Sistema del Complemento: Anafilatossine & Infiammazione",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale enzima idrolitico metallo-dipendente plasmatico (Carboxipeptidasi N o CPN) inattiva prontamente in circolo le anafilatossine C3a, C4a e C5a rimuovendo il residuo basico di arginina C-terminale?",
    "options": [
      "Fattore I",
      "Trombina",
      "Carboxipeptidasi N (chiamata anche chinasi I o anafilatossina inattivatore)",
      "Elastasi neutrofila"
    ],
    "correctIndex": 2,
    "explanation": "La carboxipeptidasi N (CPN) è una carbossipeptidasi zinco-dipendente sintetizzata dal fegato; idrolizza specificamente il residuo fondamentale di arginina presente all'estremità C-terminale di C3a (Arg77) e C5a (Arg74); la rimozione dell'arginina abbatte l'affinità per i rispettivi recettori di 100-1000 volte, generando le forme des-Arg fisiologicamente attenuate e prevenendo il collasso emodinamico anafilattico sistemico.",
    "clinicalPearl": "Il deficit ereditario di Carboxipeptidasi N nell'uomo è una rara condizione associata a episodi ricorrenti spontanei di angioedema e orticaria cronica severa per mancato smaltimento delle anafilatossine.",
    "targetSectionId": "sec-15-carboxipeptidasin"
  },
  {
    "id": "gen-498",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale alterazione istopatologica renale glomerulare è causata dalla precipitazione passiva di immunocomplessi DNA-anti-dsDNA con massiva attivazione e consumo delle frazioni precoci C1q, C4, C2 e C3 nella nefrite lupica?",
    "options": [
      "Glomerulosclerosi focale segmentaria primitiva",
      "Nefropatia a lesioni minime",
      "Amiloidosi AL renale",
      "Glomerulonefrite proliferativa diffusa a 'pieno campo' (Classe IV di Banff/ISN) con pattern a 'full house' all'immunofluorescenza"
    ],
    "correctIndex": 3,
    "explanation": "Nella nefrite lupica di Classe IV, immunocomplessi circolanti penetrano nello spazio sottoendoteliale e mesangiale attivando violentemente la via classica del complemento; all'immunofluorescenza su biopsia renale si riscontra la deposizione massiva policlonale contemporanea di tutte le immunoglobuline (IgG, IgA, IgM) e di tutte le frazioni complementari (C1q, C4, C3), definendo il classico quadro patognomonico denominato 'pattern full-house'.",
    "clinicalPearl": "Il monitoraggio seriato dei livelli plasmatici di C3 e C4 è il parametro di laboratorio essenziale per valutare l'attività di malattia nel LES: un repentino crollo di C3 e C4 segnala il massiccio consumo complementare intralesionale e predice una riacutizzazione nefritica acuta (flare lupico).",
    "targetSectionId": "sec-16-fullhouselupus"
  },
  {
    "id": "gen-499",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale proteina solubile citoplasmatica e plasmatica (Clusterina o Apolipoproteina J) agisce come chaperon extracellulare complessandosi a C5b-7 e impedendo la formazione aspecifica di complessi litici solubili?",
    "options": [
      "Clusterina (Apolipoproteina J / SP-40,40)",
      "Properdina",
      "Fattore H",
      "Trombospondina"
    ],
    "correctIndex": 0,
    "explanation": "La clusterina si lega con alta affinità alle porzioni idrofobiche esposte del complesso C5b-7 in fase fluida; cooperando con la vitronectina, impedisce che il complesso si inserisca nelle cellule endoteliali sane adiacenti al fuoco infettivo, mantenendolo in uno stato solubile inattivo denominato SC5b-9.",
    "clinicalPearl": "Oltre al suo ruolo nel complemento, la clusterina è coinvolta nella clearance dei peptidi amiloidi solubili e la sua concentrazione nel liquido cefalorachidiano è studiata come biomarcatore di neurodegenerazione nella Malattia di Alzheimer.",
    "targetSectionId": "sec-16-clusterina"
  },
  {
    "id": "gen-500",
    "lessonNumber": 16,
    "lessonTitle": "16. Regolazione del Complemento & Immunopatologia",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale anticorpo monoclonale terapeutico chimerico murino-umano diretto contro l'antigene pan-B CD20 sfrutta contemporaneamente la citotossicità dipendente dal complemento (CDC) legando fortemente C1q e l'ADCC mediata da cellule NK?",
    "options": [
      "Infliximab",
      "Rituximab",
      "Eculizumab",
      "Adalimumab"
    ],
    "correctIndex": 1,
    "explanation": "Rituximab è una IgG1 chimerica diretta contro CD20; legandosi alla superficie dei linfociti B, i suoi domini Fc esposti legano con eccezionale affinità C1q, scatenando una potente citotossicità dipendente dal complemento (CDC) con deposizione di C3b e lisi osmotica da MAC, e contemporaneamente attivano il recettore CD16a sulle cellule NK per indurre l'ADCC.",
    "clinicalPearl": "Rituximab ha radicalmente trasformato la terapia dei linfomi non-Hodgkin a cellule B, della leucemia linfatica cronica e di gravi malattie autoimmuni mediate da autoanticorpi come il pemfigo volgare e la porpora trombocitopenica immune refrattaria.",
    "targetSectionId": "sec-16-rituximabcdc"
  },
  {
    "id": "gen-501",
    "lessonNumber": 5,
    "lessonTitle": "05. Barriere, Stravaso & Stato Antivirale",
    "topicCategory": "Sistema del Complemento",
    "professor": "Rinaldi",
    "question": "Nella prima fase della cascata di stravaso leucocitario (rolling), quale interazione molecolare a bassa affinità media il rotolamento del neutrofilo sull'endotelio attivato?",
    "options": [
      "Il legame tra E-selectina o P-selectina endoteliale e i residui carboidratici sialil-Lewis X (su PSGL-1) del neutrofilo",
      "Il legame tra l'integrina LFA-1 e la molecola di adesione ICAM-1",
      "Il legame tra la molecola PECAM-1 (CD31) leucocitaria ed endoteliale",
      "Il legame diretto delle chemochine infiammatorie con il complesso del citocromo b558"
    ],
    "correctIndex": 0,
    "explanation": "La fase di rolling (rotolamento) è mediata dalle selectine (E-selectina e P-selectina) espresse sull'endotelio attivato, che legano transitoriamente il carboidrato sialil-Lewis X esposto sulla glicoproteina PSGL-1 del neutrofilo. Questa interazione ha un alto on-off rate, permettendo alla cellula di rallentare sotto la spinta del flusso ematico.",
    "clinicalPearl": "Mutazioni nel trasportatore del fucosio nel Golgi impediscono la sintesi di sialil-Lewis X, causando il Deficit di Adesione Leucocitaria di Tipo 2 (LAD-2).",
    "targetSectionId": "sec-5-5"
  },
  {
    "id": "gen-502",
    "lessonNumber": 5,
    "lessonTitle": "05. Barriere, Stravaso & Stato Antivirale",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Rinaldi",
    "question": "Quale evento biochimico definisce l'inside-out signaling durante il reclutamento leucocitario?",
    "options": [
      "La degradazione proteasomica della L-selectina",
      "L'ingaggio dei recettori per chemochine che induce un cambio conformazionale delle integrine leucocitarie dallo stato ripiegato a quello esteso ad alta affinità",
      "La secrezione massiva di metalloproteasi per distruggere la membrana basale endoteliale",
      "La fusione istantanea dei granuli azzurrofili con la membrana plasmatica"
    ],
    "correctIndex": 1,
    "explanation": "Le chemochine immobilizzate sull'endotelio legano i GPCR del neutrofilo, scatenando una cascata intracellulare (G-alpha-i, Rap1, talina) che induce lo stiramento meccanico delle integrine. Questo cambio conformazionale 'dall'interno verso l'esterno' aumenta drammaticamente la loro affinità per i ligandi endoteliali.",
    "clinicalPearl": "L'arresto stabile del leucocita in circolo dipende esclusivamente dall'efficacia di questo switch conformazionale; se difettoso, la cellula non può marginare.",
    "targetSectionId": "sec-5-5"
  },
  {
    "id": "gen-503",
    "lessonNumber": 5,
    "lessonTitle": "05. Barriere, Stravaso & Stato Antivirale",
    "topicCategory": "Sistema del Complemento",
    "professor": "Rinaldi",
    "question": "Quale alterazione genetica causa il Deficit di Adesione Leucocitaria di tipo 1 (LAD-1)?",
    "options": [
      "Mutazione del recettore CXCR4",
      "Mutazione del gene della mieloperossidasi",
      "Mutazione del gene ITGB2 codificante la catena beta-2 comune (CD18) delle integrine leucocitarie",
      "Mutazione di PECAM-1"
    ],
    "correctIndex": 2,
    "explanation": "In LAD-1, la mutazione del gene ITGB2 (CD18) impedisce l'assemblaggio e l'espressione in membrana delle integrine beta-2 (LFA-1, Mac-1/CR3). I neutrofili riescono a rotolare ma non possono compiere l'adesione salda e la diapedesi, rimanendo sequestrati nel torrente ematico.",
    "clinicalPearl": "Un segno cardinale clinico di LAD-1 è il ritardo estremo nella caduta del cordone ombelicale associato a ferite necrotiche totalmente prive di pus.",
    "targetSectionId": "sec-5-5"
  },
  {
    "id": "gen-504",
    "lessonNumber": 5,
    "lessonTitle": "05. Barriere, Stravaso & Stato Antivirale",
    "topicCategory": "Sistema del Complemento",
    "professor": "Rinaldi",
    "question": "Nel Deficit di Adesione Leucocitaria di tipo 2 (LAD-2), quale difetto molecolare impedisce il rolling dei leucociti?",
    "options": [
      "Assenza della catena integrinica beta-2",
      "Inattivazione del complesso NADPH ossidasi",
      "Difetto del macchinario dei microtubuli",
      "Mutazione del trasportatore specifico del fucosio nel Golgi (SLC35C1), con conseguente assenza del tetrasaccaride sialil-Lewis X"
    ],
    "correctIndex": 3,
    "explanation": "LAD-2 è causata da un difetto nel trasporto del GDP-fucosio nel complesso di Golgi. L'incapacità di fucosilare le glicoproteine impedisce la formazione del dominio sialil-Lewis X (sLeX) su PSGL-1. Privi di questo ligando, i neutrofili non riescono ad agganciare le selectine endoteliali.",
    "clinicalPearl": "I pazienti con LAD-2 presentano anche il raro fenotipo sanguigno Bombay, grave ritardo mentale e dismorfismi facciali a causa del difetto sistemico di fucosilazione.",
    "targetSectionId": "sec-5-5"
  },
  {
    "id": "gen-505",
    "lessonNumber": 5,
    "lessonTitle": "05. Barriere, Stravaso & Stato Antivirale",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale proteina adattatrice citosolica è mutata nel Deficit di Adesione Leucocitaria di tipo 3 (LAD-3), abolendo il processo di inside-out signaling?",
    "options": [
      "Kindlina-3 (codificata dal gene FERMT3)",
      "ZAP-70",
      "Artemis",
      "Mieloperossidasi"
    ],
    "correctIndex": 0,
    "explanation": "Nel LAD-3, le integrine e le selectine sono espresse normalmente in membrana, ma le integrine non possono passare alla conformazione ad alta affinità. La mutazione della kindlina-3 impedisce l'ancoraggio del citoscheletro alle integrine a valle del segnale chemochinico.",
    "clinicalPearl": "Poiché la kindlina-3 è essenziale anche per l'attivazione dell'integrina piastrinica GPIIb/IIIa, i pazienti con LAD-3 manifestano contemporaneamente immunodeficienza e gravi difetti emorragici (tromboastenia).",
    "targetSectionId": "sec-5-5"
  },
  {
    "id": "gen-506",
    "lessonNumber": 5,
    "lessonTitle": "05. Barriere, Stravaso & Stato Antivirale",
    "topicCategory": "Sistema del Complemento",
    "professor": "Galandrini",
    "question": "Quale molecola omotipica espressa sia dal leucocita che dalle giunzioni inter-endoteliali regola la migrazione paracellulare durante la diapedesi?",
    "options": [
      "L-selectina (CD62L)",
      "PECAM-1 (CD31)",
      "ICAM-1",
      "MAdCAM-1"
    ],
    "correctIndex": 1,
    "explanation": "PECAM-1 (Platelet Endothelial Cell Adhesion Molecule-1 o CD31) si concentra alle giunzioni endoteliali e interagisce in modo omotipico (PECAM-1 con PECAM-1) con il leucocita in transito, guidandolo 'a cerniera' attraverso la barriera.",
    "clinicalPearl": "Il blocco sperimentale di CD31 arresta il leucocita fermamente adeso all'endotelio senza permetterne lo sganciamento trans-endoteliale.",
    "targetSectionId": "sec-5-5"
  },
  {
    "id": "gen-507",
    "lessonNumber": 3,
    "lessonTitle": "03. Ematopoiesi, Neutrofili & NETosi",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quali proteine e peptidi antimicrobici sono specificamente immagazzinati nei granuli primari (azzurrofili) dei granulociti neutrofili?",
    "options": [
      "Lattoferrina e citocromo b558",
      "Gelatinasi (MMP-9) e arilsolfatasi",
      "Mieloperossidasi (MPO), elastasi neutrofila e defensine alfa",
      "Solo albumina sierica e fattori della coagulazione"
    ],
    "correctIndex": 2,
    "explanation": "I granuli primari o azzurrofili si formano allo stadio di promielocita e contengono l'arsenale litico più distruttivo: mieloperossidasi, idrolasi acide, elastasi neutrofila, proteinasi 3, catepsina G e defensine.",
    "clinicalPearl": "La degranulazione primaria è strettamente controllata e avviene preferenzialmente all'interno del fagolisosoma per limitare il danno necrotico ai tessuti sani circostanti.",
    "targetSectionId": "sec-3-2"
  },
  {
    "id": "gen-508",
    "lessonNumber": 3,
    "lessonTitle": "03. Ematopoiesi, Neutrofili & NETosi",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Morrone",
    "question": "Quale reazione biochimica viene catalizzata dal complesso enzimatico NADPH ossidasi (NOX2) assemblato sulla membrana del fagosoma?",
    "options": [
      "La fosforilazione di proteine intracellulari",
      "La deaminazione di residui di arginina in citrullina",
      "La conversione di perossido di idrogeno in acido ipocloroso",
      "Il trasferimento di elettroni dal NADPH all'ossigeno molecolare (O2) generando l'anione superossido (O2-)"
    ],
    "correctIndex": 3,
    "explanation": "Il burst respiratorio (esplosione ossidativa) inizia con l'assemblaggio di NOX2 (gp91phox, p22phox, p47phox, p67phox, Rac). L'enzima trasferisce elettroni dal NADPH citosolico all'ossigeno intracellulare generando grandi quantità di anione superossido all'interno del vacuolo.",
    "clinicalPearl": "L'anione superossido è il precursore instabile di tutte le altre specie reattive dell'ossigeno microbicide (ROS), come il perossido di idrogeno e il radicale idrossile.",
    "targetSectionId": "sec-3-3"
  },
  {
    "id": "gen-509",
    "lessonNumber": 3,
    "lessonTitle": "03. Ematopoiesi, Neutrofili & NETosi",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Soriani",
    "question": "Quale alterazione genetica è responsabile di circa il 65-70% dei casi di Malattia Granulomatosa Cronica (CGD)?",
    "options": [
      "Mutazioni nel gene CYBB localizzato sul cromosoma X, codificante per la subunità gp91phox del citocromo b558",
      "Mutazioni autosomiche del gene MPO per la mieloperossidasi",
      "Delezione del locus genomico dell'interleuchina-2",
      "Silenziamento epigenetico del fattore di trascrizione STAT3"
    ],
    "correctIndex": 0,
    "explanation": "La forma più comune e grave di CGD è ereditaria recessiva legata al cromosoma X (X-CGD), dovuta a mutazioni del gene CYBB. La proteina gp91phox è la componente transmembrana catalitica essenziale per il trasferimento degli elettroni; la sua assenza abolisce completamente la capacità fagocitica di produrre ROS.",
    "clinicalPearl": "A causa dell'ereditarietà X-linked, le madri portatrici sane possiedono una doppia popolazione neutrofila (un 50% sano e un 50% malato) per via dell'inattivazione casuale del cromosoma X (lyonizzazione).",
    "targetSectionId": "sec-3-5"
  },
  {
    "id": "gen-510",
    "lessonNumber": 3,
    "lessonTitle": "03. Ematopoiesi, Neutrofili & NETosi",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Morrone",
    "question": "Quale saggio citofluorimetrico costituisce oggi il gold standard per la diagnosi rapida della Malattia Granulomatosa Cronica (CGD)?",
    "options": [
      "Dosaggio delle IgG sieriche totali",
      "Test di ossidazione della diidrorodamina 123 (DHR 123) valutato mediante citometria a flusso",
      "Misurazione della triptasi sierica post-attivazione",
      "Dosaggio spettrofotometrico del complemento CH50"
    ],
    "correctIndex": 1,
    "explanation": "Il test DHR impiega la diidrorodamina 123, una sonda permeabile e non fluorescente che viene ossidata in rodamina 123 altamente fluorescente verde all'interno dei neutrofili capaci di produrre H2O2. I neutrofili dei pazienti CGD non emettono fluorescenza dopo stimolo.",
    "clinicalPearl": "Il test DHR ha sostituito il vecchio test NBT (Nitroblu di Tetrazolio) in quanto offre altissima sensibilità e permette di identificare facilmente le madri portatrici mediante il classico picco bimodale.",
    "targetSectionId": "sec-3-5"
  },
  {
    "id": "gen-511",
    "lessonNumber": 3,
    "lessonTitle": "03. Ematopoiesi, Neutrofili & NETosi",
    "topicCategory": "Sistema del Complemento",
    "professor": "Soriani",
    "question": "I pazienti affetti da CGD sono suscettibili ad ascessi letali provocati da batteri e funghi dotati di una specifica caratteristica metabolica. Quale?",
    "options": [
      "Sono patogeni che si replicano esclusivamente nei linfociti B",
      "Producono tossine superantigeniche",
      "Possiedono l'enzima catalasi, che degrada il proprio perossido di idrogeno (H2O2) impedendo al neutrofilo difettoso di sfruttarlo come substrato",
      "Formano capsule di acido ialuronico resistenti al lisozima"
    ],
    "correctIndex": 2,
    "explanation": "I germi catalasi-negativi (come Streptococco) rilasciano H2O2 metabolico; la mieloperossidasi del paziente CGD può usare questo H2O2 esogeno per formare l'ipoclorito e uccidere il batterio. Invece, i germi catalasi-positivi (S. aureus, Aspergillus, Serratia, Burkholderia, Nocardia) distruggono il proprio H2O2, lasciando il fagosoma CGD del tutto impotente.",
    "clinicalPearl": "La profilassi antibiotica e antifungina (es. itraconazolo) è mirata proprio a coprire questi '5 grandi' patogeni catalasi-positivi.",
    "targetSectionId": "sec-3-5"
  },
  {
    "id": "gen-512",
    "lessonNumber": 3,
    "lessonTitle": "03. Ematopoiesi, Neutrofili & NETosi",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quale substrato e prodotti caratterizzano la reazione chimica catalizzata dalla Mieloperossidasi (MPO) all'interno del fagolisosoma?",
    "options": [
      "Idrolizza il legame peptidico delle proteine batteriche generando aminoacidi liberi",
      "Converte l'anione superossido in perossido di idrogeno e ossigeno",
      "Fosforila molecole di ATP in ADP",
      "Utilizza perossido di idrogeno (H2O2) e ioni cloruro (Cl-) per sintetizzare acido ipocloroso (HOCl), potente agente alogenante e ossidante"
    ],
    "correctIndex": 3,
    "explanation": "La MPO converte il perossido di idrogeno generato dalla dismutazione dell'anione superossido, combinandolo con ioni alogenuro (soprattutto cloruro, abbondante nel citoplasma) per formare acido ipocloroso, lo stesso principio attivo della candeggina.",
    "clinicalPearl": "Il deficit ereditario isolato di MPO è relativamente comune (1:2000) ma spesso clinicamente asintomatico o limitato a una maggiore incidenza di candidosi nei diabetici, poiché il burst di H2O2 supplisce parzialmente alla mancanza di HOCl.",
    "targetSectionId": "sec-3-3"
  },
  {
    "id": "gen-513",
    "lessonNumber": 3,
    "lessonTitle": "03. Ematopoiesi, Neutrofili & NETosi",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Nel processo di formazione delle Neutrophil Extracellular Traps (NETs), qual è il ruolo biochimico dell'enzima PAD4 (peptidil-arginina deiminasi 4)?",
    "options": [
      "Catalizza la deiminazione dei residui di arginina sugli istoni convertendoli in citrullina, annullandone la carica positiva e provocando la decondensazione della cromatina",
      "Taglia le molecole di DNA a intervalli regolari creando filamenti corti",
      "Fosforila la membrana nucleare inducendone la lisi",
      "Polimerizza la perforina per creare pori di efflusso"
    ],
    "correctIndex": 0,
    "explanation": "PAD4 elimina la carica cationica dell'arginina sugli istoni H3 e H4. Venendo meno l'attrazione elettrostatica tra gli istoni basici e lo scheletro fosfodiesterico acido (carico negativamente) del DNA, la cromatina si rigonfia spontaneamente e si decondensa occupando l'intero volume cellulare, preludio dell'estrusione.",
    "clinicalPearl": "Inibitori farmacologici specifici di PAD4 sono in fase di sperimentazione per bloccare la NETosi intravascolare anomala in condizioni di ipercoagulabilità, trombosi venosa profonda e infarto miocardico.",
    "targetSectionId": "sec-3-4"
  },
  {
    "id": "gen-514",
    "lessonNumber": 3,
    "lessonTitle": "03. Ematopoiesi, Neutrofili & NETosi",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Morrone",
    "question": "Qual è la differenza fondamentale tra la 'Suicidal NETosis' e la 'Vital NETosis'?",
    "options": [
      "La Suicidal NETosis avviene solo nelle cellule NK; la Vital NETosis solo nei monociti",
      "Nella Vital NETosis il DNA viene espulso in microvescicole preservando l'integrità della cellula e la capacità di chemiotassi, mentre la Suicidal NETosis culmina in ore con la lisi e morte del neutrofilo",
      "La Vital NETosis richiede NOX2 mentre la Suicidal NETosis è indipendente dai ROS",
      "La Suicidal NETosis è reversibile con l'aggiunta di plasma fresco"
    ],
    "correctIndex": 1,
    "explanation": "La Suicidal NETosis richiede 2-4 ore, è dipendente da NOX2/ROS e comporta la disintegrazione del nucleo e della membrana plasmatica. La Vital NETosis si completa in 5-15 minuti (indipendente da ROS), rilascia DNA mitocondriale o vescicolare, e il 'neutrofilo anucleato' generato (cytoplast) continua a perlustrare il tessuto fagocitando microrganismi.",
    "clinicalPearl": "La Vital NETosis è stata osservata prevalentemente in corso di infezioni gravi fulminanti (es. Staphylococcus aureus) dove il neutrofilo deve lanciare la rete mantenendo al contempo l'attività difensiva cellulare.",
    "targetSectionId": "sec-3-4"
  },
  {
    "id": "gen-515",
    "lessonNumber": 3,
    "lessonTitle": "03. Ematopoiesi, Neutrofili & NETosi",
    "topicCategory": "Linfociti B, Anticorpi & Centro Germinativo",
    "professor": "Soriani",
    "question": "Quale conseguenza immunopatologica sistemica grave deriva da un difetto di clearance delle NETs mediato da una riduzione sierica dell'enzima DNasi I?",
    "options": [
      "Innesco di anafilassi locale da accumulo di istamina",
      "Iperattivazione dei linfociti B periferici a produrre unicamente anticorpi IgE",
      "Sviluppo di autoimmunità sistemica, in particolare Lupus Eritematoso Sistemico (LES), a causa dell'esposizione persistente di autoantigeni nucleari e istoni citrullinati altamente immunogenici",
      "Trasformazione neoplastica dei progenitori linfoidi in leucemia"
    ],
    "correctIndex": 2,
    "explanation": "Le reti NET sono costituite da DNA a doppio filamento e istoni (molecole intracellulari strettamente self). Se le nucleasi sieriche (DNasi I) non scompongono le reti, tali molecole attivano le pDC tramite i recettori endosomiali (TLR9), innescando l'esplosione di interferone-alfa e la produzione di anticorpi anti-dsDNA (tipici del Lupus) o ACPA (Artrite Reumatoide).",
    "clinicalPearl": "I pazienti con LES mostrano spesso un difetto genetico o acquisito (inibitori) dell'attività della DNasi I circolante, perpetuando il danno glomerulare da microtrombosi indotta dalle NETs.",
    "targetSectionId": "sec-3-4"
  },
  {
    "id": "gen-516",
    "lessonNumber": 3,
    "lessonTitle": "03. Ematopoiesi, Neutrofili & NETosi",
    "topicCategory": "Sistema del Complemento",
    "professor": "Morrone",
    "question": "Quali elementi funzionali caratterizzano il contenuto dei granuli secondari (specifici) del neutrofilo?",
    "options": [
      "Solo mediatori dell'infiammazione lipidici come i leucotrieni",
      "Triptasi, eparina e istamina",
      "Lisozima citosolico ed enzimi glicolitici",
      "Lattoferrina, gelatinasi associata alla lipocalina (NGAL) e le subunità transmembrana di NOX2 (gp91phox e p22phox)"
    ],
    "correctIndex": 3,
    "explanation": "I granuli secondari si formano allo stadio di mielocita e non contengono gli enzimi litici distruttivi (presenti nei primari). Contengono invece fattori chelanti ad attività batteriostatica (Lattoferrina per privare i microbi del ferro) e forniscono il complesso citocromo b558 alla membrana del fagosoma per accendere l'esplosione ossidativa.",
    "clinicalPearl": "La fusione dei granuli secondari con la membrana fagosomiale è il passaggio chiave per assemblare la subunità di membrana della NADPH ossidasi con le subunità citosoliche (p47phox, p67phox, Rac).",
    "targetSectionId": "sec-3-2"
  },
  {
    "id": "gen-517",
    "lessonNumber": 3,
    "lessonTitle": "03. Ematopoiesi, Neutrofili & NETosi",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Come si spiega fisiopatologicamente la leucocitosi neutrofila che si riscontra in un paziente entro poche ore dall'assunzione di glucocorticoidi (es. prednisone)?",
    "options": [
      "I glucocorticoidi downregolano l'espressione di molecole di adesione endoteliali (selectine e integrine), causando il distacco (demarginazione) del pool marginale dei neutrofili che si riversano nel sangue circolante",
      "Il cortisolo induce la lisi massiva dei macrofagi midollari rilasciando citochine chemiotattiche",
      "Stimolano una proliferazione blastica neoplastica esplosiva",
      "Causano il differenziamento dei globuli rossi in cellule mieloidi"
    ],
    "correctIndex": 0,
    "explanation": "Normalmente, circa il 50% dei neutrofili vascolari è adeso reversibilmente all'endotelio dei vasi polmonari e splenici (pool marginale). I corticosteroidi diminuiscono l'adesività endoteliale, facendo sì che questi neutrofili 'scivolino' nel flusso assiale (demarginazione), provocando un rapido incremento della conta dei globuli bianchi all'emocromo.",
    "clinicalPearl": "Questa leucocitosi 'sterile' indotta da steroidi manca tipicamente dello 'shift a sinistra' (non vi sono forme immature a banda nel sangue periferico, a differenza delle infezioni acute).",
    "targetSectionId": "sec-3-5"
  },
  {
    "id": "gen-518",
    "lessonNumber": 21,
    "lessonTitle": "21. Cellule Natural Killer (NK)",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale immunofenotipo superficiale caratterizza univocamente le cellule Natural Killer (NK) nel sangue periferico umano, distinguendole dai linfociti T, B e mieloidi?",
    "options": [
      "Espressione di CD19, CD20, mIgM di membrana e recettore CXCR5",
      "Espressione dei recettori CD56 (NCAM) e CD16 (Fc-gamma-RIIIA), unitamente all'assoluta assenza del recettore TCR e del marcatore CD3",
      "Presenza simultanea di CD4, CD8, CD3 e TCR alfa-beta",
      "Esclusiva positività per marcatori mieloidi quali CD14 e CD68"
    ],
    "correctIndex": 1,
    "explanation": "Nella diagnostica citofluorimetrica, le NK sono rigorosamente identificate come cellule CD3- (che esclude i T convenzionali e NKT) e CD56+ (marker principe nell'uomo, omologo a NK1.1 nel topo). La maggioranza delle NK circolanti coesprime CD16 (recettore a bassa affinità per le IgG) per mediare citotossicità anticorpo-dipendente (ADCC).",
    "clinicalPearl": "La scoperta delle cellule NK nel 1975 documentò per la prima volta cellule linfoidi capaci di lisi spontanea tumorale senza previa immunizzazione MHC-ristretta.",
    "targetSectionId": "sec-21-1"
  },
  {
    "id": "gen-519",
    "lessonNumber": 21,
    "lessonTitle": "21. Cellule Natural Killer (NK)",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Dalla quale citochina ematopoietica dipendono in modo assoluto l'ontogenesi, lo sviluppo midollare e la sopravvivenza periferica delle cellule Natural Killer?",
    "options": [
      "Interleuchina-2 (IL-2)",
      "Interleuchina-7 (IL-7)",
      "Interleuchina-15 (IL-15) trasdotta dal recettore contenente la catena gamma-comune (CD132)",
      "Interleuchina-10 (IL-10)"
    ],
    "correctIndex": 2,
    "explanation": "L'IL-15 è il fattore di crescita esclusivo e vitale per le NK e i linfociti T CD8+ della memoria. Il recettore (IL-15R) è un eterotrimero contenente la catena specifica alfa, la catena beta condivisa con IL-2 e la catena gamma-c. Le cellule stromali del midollo trans-presentano IL-15 alla NK in via di sviluppo.",
    "clinicalPearl": "Nella SCID legata all'X, la mutazione del gene della catena gamma-c (IL2RG) inattiva la via di segnale di IL-15, determinando la totale assenza fisiologica di cellule NK (profilo T- B+ NK-).",
    "targetSectionId": "sec-21-2"
  },
  {
    "id": "gen-520",
    "lessonNumber": 21,
    "lessonTitle": "21. Cellule Natural Killer (NK)",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Galandrini",
    "question": "In cosa consiste l'intuizione pionieristica di Klas Kärre (1981) definita Teoria del 'Missing-Self'?",
    "options": [
      "L'attivazione macrofagica scatenata dall'assenza del recettore di mannosio",
      "Il rigetto di allotrapianti dovuto a reazioni anticorpali contro antigeni minori",
      "Il suicidio apoptotico delle cellule T al venir meno dei fattori costimolatori",
      "L'uccisione NK scatenata dall'assenza (perdita o downregulation) delle molecole MHC di classe I sulla superficie della cellula bersaglio, venendo a mancare il segnale inibitorio dominante"
    ],
    "correctIndex": 3,
    "explanation": "Le NK esprimono costitutivamente recettori inibitori specifici per le molecole MHC-I autologhe. Tumori e virus down-regolano l'MHC-I per sfuggire all'attacco dei linfociti T citotossici CD8+. Tuttavia, questa perdita (missing-self) fa cadere il freno inibitorio sulle NK, che lisano attivamente la cellula anomala tramite sbilanciamento verso i segnali attivatori residui.",
    "clinicalPearl": "Questa teoria spiegò brillantemente il paradosso per cui i tumori più aggressivi ed evasivi all'immunità adattativa diventavano le prede più facili per le cellule innate NK.",
    "targetSectionId": "sec-21-8"
  },
  {
    "id": "gen-521",
    "lessonNumber": 21,
    "lessonTitle": "21. Cellule Natural Killer (NK)",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Galandrini",
    "question": "A livello di genetica di popolazione, come si differenziano funzionalmente i macro-aplotipi A e B del locus dei recettori KIR (Killer cell Immunoglobulin-like Receptors)?",
    "options": [
      "L'aplotipo A codifica prevalentemente un repertorio rigido di recettori inibitori (KIR-L), favorendo un forte controllo della tolleranza; l'aplotipo B è più variabile ed arricchito di recettori attivatori (KIR-S)",
      "Entrambi gli aplotipi codificano solo recettori attivatori e si trovano sul cromosoma 6",
      "L'aplotipo A è responsabile del rigetto acuto, l'aplotipo B della tolleranza",
      "L'aplotipo A genera recettori per carboidrati, l'aplotipo B recettori per ligandi peptidici"
    ],
    "correctIndex": 0,
    "explanation": "L'aplotipo KIR A contiene un set limitato e conservato di geni quasi esclusivamente inibitori (KIR2DL1/3, KIR3DL1), proteggendo rigorosamente dall'autoimmunità ma risultando meno performante contro infezioni virali. L'aplotipo KIR B possiede numerosi recettori attivatori a coda corta (KIR2DS, KIR3DS) ed è evolutivamente avvantaggiato nelle risposte antivirali e riproduttive.",
    "clinicalPearl": "Individui HIV-positivi omozigoti per l'aplotipo KIR-B presentano una ridotta viremia e sono frequentemente classificati come Long-Term Non-Progressors.",
    "targetSectionId": "sec-21-7"
  },
  {
    "id": "gen-522",
    "lessonNumber": 21,
    "lessonTitle": "21. Cellule Natural Killer (NK)",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale meccanismo biochimico blocca in millisecondi la cascata litica all'interno della cellula NK a seguito dell'ingaggio del recettore inibitorio KIR con l'MHC di classe I?",
    "options": [
      "Attivazione del complesso apoptotico della caspasi-8",
      "Il motivo intracellulare ITIM del KIR viene fosforilato da Src-chinasi e recluta ad altissima affinità le tirosin-fosfatasi citoplasmatiche SHP-1 e SHP-2, che defosforilano le chinasi a valle (ZAP-70/Syk/Vav-1)",
      "Internalizzazione istantanea dei granuli litici e loro distruzione autofagica",
      "Iperattivazione nucleare del fattore NF-kB"
    ],
    "correctIndex": 1,
    "explanation": "Il legame HLA/KIR-inibitorio innesca la trasduzione tramite la coda lunga (Long) del recettore, che contiene i motivi ITIM (Immunoreceptor Tyrosine-based Inhibitory Motif). SHP-1/2 si legano agli ITIM fosforilati e agiscono chirurgicamente staccando i gruppi fosfato aggiunti dalle vie attivatorie dominanti, spegnendo sul nascere il riarrangiamento actinico necessario per la secrezione.",
    "clinicalPearl": "I segnali inibitori (ITIM) prevalgono sistematicamente su tutti i segnali attivatori, assicurando la sopravvivenza dei tessuti sani, con l'unica formidabile eccezione dell'ADCC mediata dal recettore CD16.",
    "targetSectionId": "sec-21-6"
  },
  {
    "id": "gen-523",
    "lessonNumber": 21,
    "lessonTitle": "21. Cellule Natural Killer (NK)",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Galandrini",
    "question": "In che modo l'eterodimero inibitorio CD94/NKG2A agisce come sentinella bio-sensore globale della fisiologica espressione cellulare dell'MHC di classe I?",
    "options": [
      "Legando sequenze di DNA virale e disattivando la trascrizione nel nucleo",
      "Legando polisaccaridi batterici nel sangue e opsonizzandoli per la clearance",
      "Riconoscendo e legando la molecola monomorfa non classica HLA-E, unicamente quando questa alloggia nella tasca il peptide segnale (leader peptide) scisso dai precursori proteici delle classiche HLA-A, HLA-B e HLA-C",
      "Misurando i livelli citosolici della proteina MICA secreta dai ribosomi"
    ],
    "correctIndex": 2,
    "explanation": "HLA-E (classe Ib) non espone epitopi microbici ma trasporta stabilmente in superficie frammenti del peptide leader cleavato durante la traslazione delle molecole HLA classiche (HLA-A, -B, -C). CD94/NKG2A interroga HLA-E: se il peptide è presente, l'NK riconosce che la cellula sta regolarmente sintetizzando i propri complessi MHC e invia un segnale inibitorio ITIM. Se la sintesi di HLA crolla (infezione virale o tumore), anche HLA-E rimane vuota e l'inibizione salta.",
    "clinicalPearl": "Il Cytomegalovirus (HCMV) produce la proteina virale UL40 che imita il peptide leader di HLA classico, forzando l'esposizione di HLA-E per ingannare CD94/NKG2A e sopprimere l'attacco dell'NK.",
    "targetSectionId": "sec-21-6"
  },
  {
    "id": "gen-524",
    "lessonNumber": 21,
    "lessonTitle": "21. Cellule Natural Killer (NK)",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale gruppo di ligandi è il bersaglio principale del recettore attivatorio NKG2D espresso dalle cellule NK (e CTL CD8+)?",
    "options": [
      "Fas-Ligando e TWEAK",
      "Laminina, Fibronectina e Collagene di Tipo IV",
      "Fosfolipidi anionici esposti su cellule senescenti",
      "Proteine non polimorfiche omologhe a MHC-I denominate MICA, MICB e ULBP (UL16-binding proteins), la cui espressione è massivamente indotta in caso di danno genotossico, stress cellulare e trasformazione neoplastica ('induced-self')"
    ],
    "correctIndex": 3,
    "explanation": "NKG2D è il sensore principale del danno e dello stress (teoria dell'induced-self). Cellule sane non esprimono MICA/MICB; quando l'oncogene p53, chinasi del danno al DNA (ATM/ATR) o calore estremo stressano la cellula, si accende la trascrizione di questi ligandi allarmando le NK a lisare il bersaglio.",
    "clinicalPearl": "Come strategia di immunoevasione micidiale, i tumori solidi e leucemie iperesprimono metalloproteasi (ADAM10, ADAM17) che operano lo shedding clivando MICA/B dalla superficie; i ligandi solubili saturano il recettore NKG2D sull'NK 'accecandola'.",
    "targetSectionId": "sec-21-5"
  },
  {
    "id": "gen-525",
    "lessonNumber": 21,
    "lessonTitle": "21. Cellule Natural Killer (NK)",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale particolarità biochimica contraddistingue la via di segnalazione intracellulare del recettore attivatorio NKG2D nell'uomo rispetto agli altri recettori attivatori NCR o CD16?",
    "options": [
      "NKG2D nell'uomo si associa esclusivamente all'adattatore DAP10 che trasduce tramite motivi YINM attivando la PI3K e Vav-1, senza utilizzare proteine dotate di motivi ITAM e chinasi Syk",
      "NKG2D possiede attività serin-chinasica intrinseca",
      "NKG2D si associa a subunità ITIM trasducendo segnali citotossici diretti",
      "NKG2D entra direttamente nel nucleo per indurre trascrizione genica"
    ],
    "correctIndex": 0,
    "explanation": "A differenza di CD16 e NCRs (NKp46, NKp30) che si associano a catene ITAM (CD3-zeta o gamma di Fc-epsilon-RI), l'omodimero NKG2D non lega ITAM. Recluta l'omodimero DAP10, il cui motivo intracellulare YINM fosforilato funge da docking site diretto per la subunità p85 di fosfatidilinositolo 3-chinasi (PI3K) e Grb2, guidando la riorganizzazione actinica della sinapsi.",
    "clinicalPearl": "Questa via (simile alla costimolazione T CD28-dipendente) è potentemente citolitica ma non induce la stessa ondata tempestosa di citochine prodotta dagli ITAM classici.",
    "targetSectionId": "sec-21-5"
  },
  {
    "id": "gen-526",
    "lessonNumber": 21,
    "lessonTitle": "21. Cellule Natural Killer (NK)",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Nel bilancio dei segnali delle cellule NK, quale peculiarità funzionale rende l'ADCC mediata dal recettore CD16a il più formidabile meccanismo di innesco citotossico?",
    "options": [
      "CD16a innesca l'apoptosi senza richiedere il rilascio di granuli",
      "Il recettore CD16a possiede una gerarchia segnica dominante: l'elevata avidità di legame per frammenti Fc di IgG opsonizzanti sovrasta completamente e scavalca ogni segnale inibitorio generato dai KIR, distruggendo il bersaglio anche se esso possiede normali livelli di MHC-I",
      "CD16a funge contemporaneamente da recettore per chemochine",
      "CD16a è l'unico recettore attivato dai linfociti T"
    ],
    "correctIndex": 1,
    "explanation": "Normalmente l'espressione di MHC-I self sull'organo protegge dalla lisi NK (prevalenza del segnale ITIM sul segnale attivatore debole). Tuttavia, quando una cellula è densamente rivestita da anticorpi (IgG1, IgG3), l'aggregazione di CD16 (Fc-gamma-RIIIA) recluta complessi ITAM zeta-zeta/gamma-gamma così imponenti da azzerare la capacità de-fosfatante di SHP-1/2 dei KIR. La lisi avviene a prescindere dallo stato MHC.",
    "clinicalPearl": "Questa potenza spaventosa di CD16 è la base del successo degli anticorpi monoclonali IgG terapeutici nudi (es. Rituximab anti-CD20, Trastuzumab anti-HER2) per sterminare le cellule tumorali autologhe tollerate.",
    "targetSectionId": "sec-21-5"
  },
  {
    "id": "gen-527",
    "lessonNumber": 21,
    "lessonTitle": "21. Cellule Natural Killer (NK)",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "La famiglia dei Natural Cytotoxicity Receptors (NCR) comprende NKp46, NKp30 e NKp44. Oltre a legare eparansolfato e ligandi di stress, quale patogeno fornisce un ligando esogeno diretto per NKp46 (CD335)?",
    "options": [
      "La proteina capsidica p24 di HIV-1",
      "La molecola CD1d sui batteri intracellulari",
      "Proteine dell'involucro virale come l'emagglutinina (HA) del virus dell'influenza e l'emoagglutinina-neuraminidasi (HN) dei virus parainfluenzali",
      "La capsula di Streptococcus pneumoniae"
    ],
    "correctIndex": 2,
    "explanation": "NKp46 (e NKp44) hanno dimostrato sperimentalmente una capacità unica: riconoscono e legano direttamente le glicoproteine fusogene dei virus respiratori sulla superficie della cellula infettata (l'emagglutinina dell'influenza e i paramyxovirus, o la E-protein dei flavivirus).",
    "clinicalPearl": "NKp46 è il marcatore fenotipico identificativo ancestrale e più esclusivo del lineage NK in tutti i mammiferi; non richiede attivazione preliminare, permettendo risposta fulminea alle infezioni virali.",
    "targetSectionId": "sec-21-5"
  },
  {
    "id": "gen-528",
    "lessonNumber": 20,
    "lessonTitle": "20. Linfociti T Citotossici (CTL)",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale evento biomeccanico intracellulare del CTL o cellula NK è assolutamente imperativo per concentrare il rilascio litico dei granuli esclusivamente sulla cellula bersaglio, risparmiando i tessuti vicini (bystanders)?",
    "options": [
      "Secrezione aspecifica in fase fluida",
      "Rottura volontaria della membrana plasmatica propria della cellula NK",
      "L'iperattivazione dei canali del potassio a livello della coda",
      "L'immediata riorganizzazione del citoscheletro e la traslocazione del centrosoma (Centro Organizzatore dei Microtubuli, MTOC) che porta l'apparato di Golgi ei granuli secretori a polarizzarsi esattamente al centro della sinapsi litica (cSMAC)"
    ],
    "correctIndex": 3,
    "explanation": "L'aderenza con integrine (LFA-1/ICAM) forma una guarnizione stagna. Il segnale chinasico induce una rapida polimerizzazione di actina e l'orientamento di tutto il macchinario microtubulare MTOC verso il polo sinaptico. I granuli litici corrono lungo i binari di tubulina verso la fessura inter-membrana, limitando l'esocitosi a uno spazio confinato e isolato di circa 15 nm.",
    "clinicalPearl": "Questo processo direzionale mirato permette il fenomeno del 'Serial Killing': la cellula killer scarica selettivamente alcuni granuli letali, uccide il bersaglio, si disancora illesa e ripete il ciclo contro una nuova preda.",
    "targetSectionId": "sec-20-5"
  },
  {
    "id": "gen-529",
    "lessonNumber": 20,
    "lessonTitle": "20. Linfociti T Citotossici (CTL)",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Qual è l'attività molecolare esatta della Perforina rilasciata nella sinapsi litica in presenza di ioni Ca2+ extracellulari?",
    "options": [
      "Monomeri anfipatici polimerizzano inserendosi nel foglietto lipidico della cellula bersaglio per formare pori cilindrici idrofili transmembrana (simili al MAC) o per destabilizzare gli endosomi",
      "Attiva l'apoptosi legandosi ai recettori di morte extracellulari TNFR",
      "Taglia direttamente l'elica del DNA nucleare",
      "Fosforila le chinasi cellulari bloccando il ciclo mitotico"
    ],
    "correctIndex": 0,
    "explanation": "Nei granuli, a pH acido, la perforina è inibita dalla serglicina. Rilasciata nel fluido neutro sinaptico ricco di calcio, la perforina cambia conformazione, si àncora alla membrana della cellula bersaglio e oligomerizza (12-18 molecole) in pori strutturati o promuove la permeabilizzazione degli endosomi in cui viene endocitata la tossina, consentendo ai granzimi di invadere il citoplasma bersaglio.",
    "clinicalPearl": "L'omologia genetica, di piegamento a dominio MACPF e del poro tra la Perforina dei linfociti T/NK e il componente C9 del Complemento evidenzia una stupefacente convergenza evolutiva litica.",
    "targetSectionId": "sec-20-5"
  },
  {
    "id": "gen-530",
    "lessonNumber": 20,
    "lessonTitle": "20. Linfociti T Citotossici (CTL)",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Con quale meccanismo il Granzima B innesca la morte rapida e irreversibile della cellula bersaglio una volta penetrato nel citosol?",
    "options": [
      "Attiva recettori Toll-like causando shock immunitario locale",
      "Scinde proteoliticamente la proteina pro-apoptotica Bid nel frammento tossico tBid (che migra ai mitocondri aprendo i pori di Bax/Bak per il rilascio di citocromo C) e attiva direttamente la Pro-caspasi-3 e 7",
      "Degrada direttamente l'RNA messaggero citoplasmatico virale",
      "Inibisce la trascrizione di geni per p53"
    ],
    "correctIndex": 1,
    "explanation": "Il Granzima B è una serina-proteasi con attività 'Caspase-like' (taglia dopo acido aspartico). Accende l'apoptosi su due fronti: 1) attivando in modo diretto gli esecutori terminali Caspasi-3/7 per tagliare l'inibitore CAD e degradare il DNA; 2) inducendo via tBid un collasso mortale mitocondriale con liberazione dell'apoptosoma (via intrinseca mediata da citocromo c).",
    "clinicalPearl": "Questa aggressione mitocondriale garantisce che l'apoptosi proceda senza fallimenti anche se la cellula virale ha disattivato alcune caspasi a valle.",
    "targetSectionId": "sec-20-5"
  },
  {
    "id": "gen-531",
    "lessonNumber": 20,
    "lessonTitle": "20. Linfociti T Citotossici (CTL)",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale alterazione molecolare causa la devastante Sindrome Emofagocitica Familiare (HLH tipo FHL2) nel neonato?",
    "options": [
      "Delezione del gene della catena gamma-comune (SCID)",
      "Mutazione iper-attivante dell'inflammasoma NLRP3 (CAPS)",
      "Mutazioni bialleliche loss-of-function nel gene PRF1 (Perforina), rendendo il linfocita CTL e la cellula NK incapaci di lisare la cellula infettata e portando a un'ipersecrezione tossica continua di IFN-gamma che iperattiva i macrofagi",
      "Assenza di CD18 con impossibilità di migrazione (LAD-1)"
    ],
    "correctIndex": 2,
    "explanation": "Nell'HLH (o Linfoistiocitosi Emofagocitica Familiare) il macchinario esocitico/litico è rotto (perforina in FHL2, Munc13-4 in FHL3, Rab27a, Sintassina 11). Senza l'uccisione del bersaglio, il linfocita NK o CTL non arresta mai la sinapsi e riversa IFN-gamma illimitato nei tessuti. I macrofagi attivati si espandono e fagocitano ferocemente le cellule ematiche sane (globuli rossi, piastrine), causando epatosplenomegalia fatale, pancitopenia e febbre incessante.",
    "clinicalPearl": "Il farmaco salvavita ponte per il trapianto di midollo nella HLH primaria (fino ad approvazione dell'anti-IFN-gamma Emapalumab) include altissime dosi di steroidi per fermare la tempesta iper-fagocitica.",
    "targetSectionId": "sec-20-10"
  },
  {
    "id": "gen-532",
    "lessonNumber": 24,
    "lessonTitle": "24. Risposta Antivirale e Evasione dei Patogeni",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Soriani",
    "question": "Poiché il virus Citomegalovirus Umano (HCMV) disinnesca il macchinario di MHC-I per sfuggire ai CTL CD8+, in che modo evita di essere distrutto per 'missing-self' dalle cellule NK attivando NKG2D?",
    "options": [
      "Attiva MAVS impedendo alle NK di rispondere all'interferone",
      "Secreta grandi quantità di citochine infiammatorie disorientando la cellula effettrice",
      "Fagocita le molecole litiche mediante esosomi espulsi",
      "Evolve micro-RNA (miR-UL112) che distruggono il trascritto del ligando attivatore MICB, e usa la proteina virale UL16 per sequestrare nel reticolo endoplasmatico MICA e MICB impedendone l'arrivo in membrana"
    ],
    "correctIndex": 3,
    "explanation": "L'HCMV sa di rischiare la lisi NK per mancanza di inibizione (missing MHC-I). Adotta quindi il doppio sabotaggio: sopprime l'MHC-I ma silenzia parallelamente anche il segnale attivatorio dominato da NKG2D. La proteina UL16 trattiene le proteine MICA, MICB (e ULBP1/2) nell'ER, e il miR-UL112 taglia l'mRNA di MICB. Senza ligandi da stress l'NK non scatta.",
    "clinicalPearl": "L'immunoevasione multiforme di HCMV lo rende la complicanza infettiva latente più minacciosa nei pazienti immunocompromessi e trapiantati.",
    "targetSectionId": "sec-24-5"
  },
  {
    "id": "gen-533",
    "lessonNumber": 21,
    "lessonTitle": "21. Cellule Natural Killer (NK)",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Galandrini",
    "question": "Quale accoppiamento genetico tra aplotipo materno e trofoblasto fetale aumenta clinicamente il rischio di sviluppare preeclampsia in gravidanza?",
    "options": [
      "Madre omozigote per l'Aplotipo Inibitorio KIR AA e un feto portatore dell'allele HLA-C del Gruppo 2 (ereditato dal padre) che si lega con elevata affinità reprimendo eccessivamente la cellula NK uterina",
      "Madre omozigote per KIR B e feto senza molecole HLA-C",
      "Madre esprimente un eccesso di recettori attivatori CD16 e feto con immunoglobuline materne",
      "Mutazione della proteina NKG2A materna e HLA-E nel feto"
    ],
    "correctIndex": 0,
    "explanation": "Le NK uterine (uNK) regolano l'invasione trofoblastica secernendo fattori angiogenici (VEGF e PlGF) che dilatano le arterie spirali. Se l'aplotipo materno è AA (tutti recettori KIR inibitori potenti, come KIR2DL1) e incontra il ligando paterno estraneo HLA-C2 del trofoblasto, la cellula uNK viene zittita inibitoriamente (repressa) e non produce VEGF. La placenta resta ischemica innescando preeclampsia/eclampsia sistemica.",
    "clinicalPearl": "L'analisi tipizzante (studio A. Moffett) di HLA-C del padre e dell'aplotipo KIR della madre ha svelato il legame molecolare alla base di complicanze ostetriche immunomediate finora idiopatiche.",
    "targetSectionId": "sec-21-9"
  },
  {
    "id": "gen-534",
    "lessonNumber": 21,
    "lessonTitle": "21. Cellule Natural Killer (NK)",
    "topicCategory": "MHC, HLA & Presentazione Antigenica",
    "professor": "Galandrini",
    "question": "Qual è il razionale immunologico innovativo dello studio Ruggeri-Velardi (Scuola di Perugia) nel trapianto allogenico aploidentico per la Leucemia Mieloide Acuta?",
    "options": [
      "La totale deplezione dei linfociti B e T e somministrazione sola di immunoglobuline",
      "L'uso di un donatore con cellule NK portatrici di recettori KIR per cui le cellule leucemiche del ricevente non esprimono il corrispondente HLA inibitorio (KIR-mismatch), consentendo un letale effetto Graft-versus-Leukemia senza scatenare Graft-versus-Host Disease (GVHD)",
      "La somministrazione esclusiva di IL-2 associata a linfociti T autologhi reinfusi",
      "L'irradiazione corporea totale che inibisce il recettore NKG2D"
    ],
    "correctIndex": 1,
    "explanation": "In presenza di un 'mismatch KIR-ligando' nella via del trapianto aploidentico con rigida deplezione T, il clone NK alloreattivo del donatore non incontra MHC inibitorio sul blasto leucemico (manca HLA inibente, ma sono presenti ligandi attivatori indotti). I blasti vengono sterminati (zero recidive) grazie alla forte componente litica (GVL). Al contempo, i tessuti sani del paziente (intestino, cute) non sono distrutti, poiché non esprimono i ligandi attivatori tipici dello stress tumorale, azzerando virtualmente l'insorgenza della letale GVHD.",
    "clinicalPearl": "L'uso deliberato dell'incompatibilità HLA per massimizzare il bersaglio leucemico NK senza intaccare gli organi sani è la più alta applicazione clinica del 'missing self' e dell''induced self' congiunti.",
    "targetSectionId": "sec-21-10"
  },
  {
    "id": "gen-535",
    "lessonNumber": 2,
    "lessonTitle": "02. Citochine, JAK-STAT & Chemochine",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Le citochine mediano risposte intercellulari essenziali del sistema immunitario. Quali sono le proprietà biochimiche e pleiotropiche distintive di questi mediatori?",
    "options": [
      "Circolano per mesi in forma inattiva e richiedono taglio endonucleasico",
      "Segnalano unicamente a raggio autocrino e non raggiungono mai i vasi linfatici",
      "Una singola citochina può agire su molti tipi cellulari diversi con effetti multipli (pleiotropia) e più citochine diverse possono svolgere la medesima funzione (ridondanza); operano per lo più a concentrazioni picomolari con emivita effimera",
      "Sono peptidi trasmembrana con dominio serin-chinasico"
    ],
    "correctIndex": 2,
    "explanation": "L'impalcatura molecolare citochinica (es. IL-4 e IL-13, interleuchine pleiotropiche) mostra altissima ridondanza e pleiotropia, garantendo robustezza immunitaria (il guasto di una non azzera la risposta globale). Vengono secrete temporaneamente in seguito ad attivazione e hanno emivita di minuti/ore, spesso secrete in modo polarizzato nella fessura intercellulare.",
    "clinicalPearl": "La somministrazione terapeutica sistemica (endovenosa) di citochine pleiotropiche come IFN-alfa o IL-2 causa tossicità gravi multiorgano (febbre, brividi, ipotensione capillary-leak) per assenza della fisiologica compartimentalizzazione locale.",
    "targetSectionId": "sec-2-1"
  },
  {
    "id": "gen-536",
    "lessonNumber": 2,
    "lessonTitle": "02. Citochine, JAK-STAT & Chemochine",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale classico trio di citochine primarie dell'immunità innata, rilasciate in primis da monociti/macrofagi attivati, coordina gli effetti infiammatori acuti sistemici (febbre, proteine di fase acuta fegato, mobilizzazione neutrofili)?",
    "options": [
      "Interleuchina-4, Interleuchina-5, Interleuchina-13",
      "Interferone-alfa, Interferone-beta, IFN-gamma",
      "Interleuchina-10, TGF-beta, Interleuchina-35",
      "TNF-alfa, Interleuchina-1 (IL-1beta) e Interleuchina-6 (IL-6)"
    ],
    "correctIndex": 3,
    "explanation": "Riconosciuti i PAMP e i DAMP, il macrofago innato spara in periferia l'asse citochinico pro-infiammatorio: TNF-alfa e IL-1 attivano l'endotelio vascolare locale e agiscono come pirogeni endogeni. L'IL-6 viaggia al fegato inducendo la trascrizione rapida e massiva delle Proteine di Fase Acuta (CRP, amiloide A sierica, epcidina, fibrinogeno).",
    "clinicalPearl": "Questa tempesta è la quintessenza clinica dello shock infettivo (SIRS), dove l'esagerato rilascio endoteliale produce crollo resistenze vascolari (ipotensione) e coagulopatia disseminata.",
    "targetSectionId": "sec-2-2"
  },
  {
    "id": "gen-537",
    "lessonNumber": 2,
    "lessonTitle": "02. Citochine, JAK-STAT & Chemochine",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Qual è la rigorosa sequenza di attivazione molecolare all'interno della via di trasduzione rapida JAK-STAT in risposta a una citochina di Classe I / II?",
    "options": [
      "Legame della citochina che avvicina i domini recettoriali → le JAK adiacenti si autofosforilano e transfosforilano il recettore → i fattori STAT liberi agganciano i fosfati via domini SH2 → JAK fosforila STAT → gli STAT fosforilati formano dimeri attivi e traslocano nel nucleo",
      "Legame citochina al recettore → JAK si scinde dal recettore attraversando il nucleo → JAK lega il promotore → trascritta proteina STAT citosolica",
      "STAT viene defosforilato da PI3K e si disgrega portando apoptosi del nucleo → JAK distrugge la citochina",
      "Legame recettore attiva PLC-gamma che rilascia JAK dal calcio endocitico → STAT aggancia l'RNA cellulare"
    ],
    "correctIndex": 0,
    "explanation": "La forza di JAK-STAT è la velocità (trasduzione in minuti e senza intermediari complessi). Le Janus Chinasi (JAK) non agiscono se il recettore è monomero; quando la citochina induce dimerizzazione, le JAK citosoliche vicine si fosforilano a vicenda (attivandosi) e imprimono fosfotirosine nella coda del recettore. STAT aggancia questi siti specifici (riconoscimento via SH2). JAK quindi trasferisce un fosfato a STAT. Fosfo-STAT dimerizza, lascia il recettore e passa nel nucleo accendendo le sequenze geniche bersaglio.",
    "clinicalPearl": "Il difetto in JAK3 inibisce l'azione della catena gamma comune causando SCID autosomica (identica al fenotipo X-SCID per difetto in gamma-c).",
    "targetSectionId": "sec-2-3"
  },
  {
    "id": "gen-538",
    "lessonNumber": 2,
    "lessonTitle": "02. Citochine, JAK-STAT & Chemochine",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Attraverso quale meccanismo intrinseco le proteine SOCS (Suppressors of Cytokine Signaling) esercitano un potente 'freno molecolare' spegnendo la via JAK-STAT appena accesa?",
    "options": [
      "Promuovono la secrezione addizionale di ligandi attivatori per over-saturazione del recettore",
      "Legano competitivamente con il loro dominio SH2 i siti fosforilati sul recettore oscurando l'aggancio a STAT e usano il SOCS-box (reclutando complessi E3 ligasi come le culline) per distruggere ubiquitinando JAK e lo stesso recettore",
      "Esocitano granuli lisosomiali che lisano citochine in circolo",
      "Metilano epigeneticamente gli istoni a livello di ogni locus genico"
    ],
    "correctIndex": 1,
    "explanation": "SOCS costituisce l'anello classico del 'feedback inibitorio negativo'. I geni della famiglia SOCS sono i primi a essere trascritti dalla neo-attivazione di STAT. Appena sintetizzate, le proteine SOCS (che possiedono dominio KIR pseudochinasico e SH2) impediscono l'attacco di nuovo STAT e instradano la catena inibitoria della ubiquitinazione mirata delle chinasi JAK.",
    "clinicalPearl": "Lo smarrimento dell'azione frenante SOCS è associato a ipersensibilità recettoriale oncogenica e allo sviluppo di disordini mieloproliferativi o patologie disinfiammatorie autoimmuni persistenti.",
    "targetSectionId": "sec-2-4"
  },
  {
    "id": "gen-539",
    "lessonNumber": 5,
    "lessonTitle": "05. Barriere, Stravaso & Stato Antivirale",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "La trascrizione nucleare dei geni ISG (Interferon-Stimulated Genes) stimolata da IFN di Tipo I (alfa/beta) sintetizza tre fondamentali enzimi ad azione antivirale diretta. Quali sono?",
    "options": [
      "PAD4 deiminante, Mieloperossidasi e Caspasi-1 piroptotica",
      "Perforina Ca2+-dipendente, Granzimi e Granulisina lisosomiale",
      "PKR (arresta l'inizio della traduzione tramite eIF2a), OAS/RNasi L (sminuzza RNA citosolico virale), e la famiglia delle GTPasi Mx (polimerizzano attorno ai complessi virali bloccando assemblaggio nucleocapsidico)",
      "iNOS, Arginasi-1 e Indolamina diossigenasi (IDO)"
    ],
    "correctIndex": 2,
    "explanation": "Lo 'Stato Antivirale' inibisce olisticamente l'esplosione replicativa cellulare nei tessuti contigui. L'OAS sintetizza il 2'-5' Oligoadenilato che accende la RNasi L ad asportare gli mRNA e dsRNA; PKR disattiva per fosforilazione eIF2alfa fermando i ribosomi infetti; Mx ostacola stericamente l'architettura polimerica delle ribonucleoproteine (Mxa intrappola influenza e Mxb HIV nel nucleo).",
    "clinicalPearl": "L'interferone endogeno o farmaceutico paralizza globalmente l'ospite, giustificando astenia, spossatezza e artromialgie classiche di esordio dell'infezione influenzale.",
    "targetSectionId": "sec-5-6"
  },
  {
    "id": "gen-540",
    "lessonNumber": 19,
    "lessonTitle": "19. Differenziamento T Helper",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale è il pattern di polarizzazione linfocitaria T helper innescato dalla produzione macrofagica primaria di Interleuchina-12 (IL-12) e qual è il fattore trascrizionale 'master regulator' attivato?",
    "options": [
      "Polarizzazione verso Th2 con attivazione del master regulator GATA-3 via STAT6",
      "Polarizzazione verso Tfh (follicolare) con attivazione del master regulator Bcl-6 via STAT3",
      "Differenziazione in linfocita T regolatore con fosforilazione esclusiva di Smad2",
      "Polarizzazione verso Th1 con attivazione di STAT4 e consolidamento epigenetico tramite l'induzione del master regulator T-bet"
    ],
    "correctIndex": 3,
    "explanation": "L'IL-12 (rilasciata da cellule presentanti e macrofagi che hanno captato batteri o patogeni intracellulari, aiutati dagli IFN tipo I o IFN-gamma delle NK) lega recettori ad alta affinità sui linfociti CD4 attivati e tramite JAK/STAT attiva primariamente STAT4. Questo percorso attiva il locus del gene T-bet, il quale apre il programma definitivo Th1, istruendo il linfocita a produrre IFN-gamma per massimizzare la fagocitosi M1.",
    "clinicalPearl": "La carenza di IL-12/IL-12R o mutazione genetica in STAT4 sfocia in suscettibilità mortale verso le infezioni sistemiche da micobatteri non tubercolari (Sindrome MSMD).",
    "targetSectionId": "sec-19-4"
  },
  {
    "id": "gen-541",
    "lessonNumber": 19,
    "lessonTitle": "19. Differenziamento T Helper",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale ruolo patogenetico ricopre l'Interleuchina-23 (IL-23) nella maturazione del subset effettrice pro-infiammatorio Th17?",
    "options": [
      "Esercita l'imprinting essenziale di polarizzazione Th17 stabilizzando in periferia il fenotipo attivato a valle della trascrizione indotta da STAT3 per impedire il trans-differenziamento e la regressione a linfocita T regolatore",
      "Provoca esclusivo arresto cellulare G0 e atrofia epiteliale",
      "Media il richiamo diretto neutrofilo come recettore chemio-attrattante sul vaso (homing CXC)",
      "Maturazione dei linfociti B immaturi a plasmacellule IgD"
    ],
    "correctIndex": 0,
    "explanation": "IL-1, IL-6 e TGF-beta accendono il programma Th17 inducendo ROR-gamma-t (via STAT3). Tuttavia, il mantenimento e l'espansione tissutale delle cellule Th17 con acquisizione di funzioni altamente patogene in corso di flogosi prolungata richiede indispensabilmente la presenza di IL-23 (condividente la sub-p40 con IL-12), che le 'fissa' e funge da sopravvivenza ed esaltatore citotossico.",
    "clinicalPearl": "Anticorpi monoclonali neutralizzanti la subunità p19 selettiva dell'IL-23 (es. Ustekinumab, Guselkumab, Risankizumab) sciolgono le placche nella Psoriasi a placche refrattaria abbattendo il subset Th17 periferico.",
    "targetSectionId": "sec-19-7"
  },
  {
    "id": "gen-542",
    "lessonNumber": 19,
    "lessonTitle": "19. Differenziamento T Helper",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Nel tessuto linfoide periferico o intestinale privo di un forte stimolo citochinico pro-infiammatorio batterico, quale azione esegue la secrezione abbondante di TGF-beta sul linfocita T CD4+ naïve?",
    "options": [
      "Sopprime immediatamente le ligasi della trascrizione spegnendo i ribosomi ed iperplasando p53",
      "Attiva il complesso chinasico T-beta-R innescando Smad2 e Smad3 (con Smad4 nucleare) stimolando il promotore del gene FoxP3 e convertendo il T naïve in linfocita T regolatore inducibile (pTreg o iTreg) tollerogenico",
      "Attrae IgA convertendo il linfocita CD4 in un B follicolare di transizione mucosale",
      "Genera la necrosi asettica del linfocita CD4 che diventa substrato efferocitosico"
    ],
    "correctIndex": 1,
    "explanation": "Il TGF-beta, citochina sovrana della tolleranza (secreta dalle cellule epiteliali sane, dai macrofagi 'calmi' e Treg naturali), modula la risposta inducendo la fosforilazione dei mediatori citosolici Smad2/3; il complesso Smad trascrive direttamente FoxP3, il master regulator dell'induzione differenziativa Treg (periferico pTreg) per la salvaguardia omeostatica contro antigeni alimentari o self benigno.",
    "clinicalPearl": "Assieme all'Acido Retinoico, il TGF-beta genera le schiere di pTreg intestinali: la deplezione murina di TGF-beta esplode in sindrome autoimmunitaria linfo-infiammatoria fatale in età giovanissima.",
    "targetSectionId": "sec-19-8"
  },
  {
    "id": "gen-543",
    "lessonNumber": 19,
    "lessonTitle": "19. Differenziamento T Helper",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale ribaltamento fenotipico drastico ('switch polarizzante') subisce il microambiente tissutale mediato da TGF-beta qualora subentri contemporaneamente un'infezione batterica o fungina con alta secrezione di Interleuchina-6 (IL-6)?",
    "options": [
      "Rafforza a dismisura la sintesi di linfociti Treg provocando una totale immunoparalisi",
      "Induce apoptosi selettiva dei granulociti per limitare danni istologici collaterali",
      "IL-6 inattiva l'espressione di FoxP3 e sinergizza assieme a TGF-beta per stimolare vigorosamente la trascrizione di ROR-gamma-t, dirottando in poche ore il differenziamento del CD4+ naïve dalla via Treg tollerante all'aggressiva via pro-infiammatoria effettrice Th17",
      "Induce l'espulsione delle molecole HLA della classe II da tutte le cellule per proteggerle"
    ],
    "correctIndex": 2,
    "explanation": "È la dimostrazione molecolare della plasticità dell'equilibrio immunitario di mucosa: TGF-beta da solo è tollerogenico e Foxp3-direttivo. Ma quando IL-6 (il tipico allarme PRR-mediato dell'ingresso batterico/fungino) investe il focolaio locale e co-trasduce il STAT3 citosolico, l'intersezione tra Smad e STAT3 accende ROR-gamma-t e silenzia Foxp3. Il sistema muta volto per estinguere le ife fungine con massiva mobilitazione di Th17 e rilascio di IL-17 (reclutamento neutrofili).",
    "clinicalPearl": "L'eccesso sierico IL-6 blocca funzionalmente la via di Foxp3 promuovendo cronicamente il Th17 (artriti e IBD): giustifica l'uso di anticorpi anti-IL-6 recettore nell'inversione delle disinfiammatorie refrattarie.",
    "targetSectionId": "sec-19-7"
  },
  {
    "id": "gen-544",
    "lessonNumber": 27,
    "lessonTitle": "27. Ipersensibilità (Tipi I, II, III, IV)",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Rinaldi",
    "question": "Nell'ipersensibilità cellulare ritardata (Tipo IV) scatenata da patogeni intracellulari persistenti come il Mycobacterium tuberculosis, quale grave effetto avverso si deve prevenire scrupolosamente prima di infondere una terapia biologica immunosoppressiva mirata con antagonisti del TNF-alfa (Infliximab, Adalimumab)?",
    "options": [
      "Una linfo-plasmacellulare pan-deplezione con arresto CSR verso immunoglobuline",
      "Un edema laringeo bradichininergico incontrollabile per via di deficienza inibitoria a cascata",
      "Lo sfaldamento e il deterioramento architetturale granulomatoso, con destrutturazione dell'anello macrofagico epitelioide-linfocitario e successiva riesplosione massiva e letale in disseminazione miliare della Tubercolosi latente",
      "La fusione osmotica delle cellule di microglia che innesca infiammazione centrale"
    ],
    "correctIndex": 2,
    "explanation": "Il TNF-alfa prodotto dai macrofagi M1 centrali è la citochina chemiotattica coagulante per eccellenza, essenziale per la coesione tridimensionale, lo stazionamento sinciziale cellulare (cellule di Langhans giganti e epitelioidi) del tubercolo isolante granulomatoso. La sua inattivazione farmacologica scioglie i muri perimetrali epitelioidi e vascolari restituendo libertà ematogena ai bacilli tubercolari vitali rinchiusi.",
    "clinicalPearl": "Nessun paziente reumatologico può ricevere Adalimumab, Infliximab o Etanercept (anti-TNF) senza un Test quantitativo IGRA-QuantiFERON negativo che escluda pregressa Infezione Tubercolare Latente (LTBI).",
    "targetSectionId": "sec-27-4"
  },
  {
    "id": "gen-545",
    "lessonNumber": 32,
    "lessonTitle": "32. Immunologia Oncologica",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale farmaco monoclonale viene obbligatoriamente utilizzato come terapia d'emergenza o di profilassi per abbattere la tempesta citochinica ad alta mortalità (Sindrome da Rilascio Citochinico, CRS) conseguente all'esplosione infiammatoria innescata dall'infusione di cellule CAR-T attive?",
    "options": [
      "Tocilizumab, farmaco antagonista del recettore intermembrana o solubile per l'Interleuchina-6 (IL-6R), arrestando in pochi minuti l'onda d'urto vascolare innescata dai macrofagi peritumorali",
      "Eculizumab, anticorpo anti-C5 inibitore terminale del MAC del complemento sierico",
      "Ipilimumab, bloccante recettoriale di CTLA-4 che frena il rilascio autocrino di istamina nel fegato",
      "Rituximab, sradicante plasmacellulare ad elevata ADCC selettiva"
    ],
    "correctIndex": 0,
    "explanation": "La distruzione lisi-mediata dei blasti tumorali, abbinata all'iperproliferazione sinaptica CAR-T (specie se equipaggiate con costimolatore forte come CD28 o 4-1BB), iperstimola le componenti mieloidi accessorie innescando un quadro settico acuto. I macrofagi rilasciano fiumi di IL-6 sistemica: il blocco selettivo al recettore per IL-6 con Tocilizumab abbassa istantaneamente la febbre oltre i 40 gradi e previene ipotensione vasoplegica e shock ipossico letale.",
    "clinicalPearl": "La somministrazione di Tocilizumab, pur riducendo e annullando le tossicità vitali iperinfiammatorie della 'CAR-T CRS', lascia fortunatamente intatta la potenza citotossica anti-leucemica citosolica delle T cells infuse.",
    "targetSectionId": "sec-32-8"
  },
  {
    "id": "gen-546",
    "lessonNumber": 4,
    "lessonTitle": "04. Inflammasoma e PRR",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Soriani",
    "question": "I pazienti pediatrici affetti da CAPS (Cryopyrin-Associated Periodic Syndromes) o artrite gotto-refrattaria acuta vengono trattati miracolosamente e curativamente entro 24 ore con farmaci biologici diretti contro quale esatta citochina letale neo-formata dall'inflammasoma?",
    "options": [
      "Neutralizzanti diretti contro l'interferone-beta antivirale nucleare pDC",
      "Antagonisti mirati e selettivi (es. Anakinra, Canakinumab, Rilonacept) che inibiscono potentemente il ligando o il recettore della potente Interleuchina-1-beta (IL-1beta), abbassando la febbre sterile genetica e prevenendo l'amiloidosi AA infiammatoria secondaria fatale",
      "Anticorpi sintetici bloccanti il recettore di attivazione PD-1 tessutale con apoptosi infiammatoria associata",
      "Antagonisti del cortisolo e dei farmaci steroidei che riducono l'infiammazione di base a livello endoteliale"
    ],
    "correctIndex": 1,
    "explanation": "L'iperfunzione epatica o genetica delle varianti dominanti NACHT nel sensore NLRP3 accende di continuo la procaspasi-1, tagliando massicce vagonate del precursore pro-IL-1beta in IL-1beta maturo e proinfiammatorio citotossico tissutale (con manifestazioni come orticaria da freddo, sordità neurosensoriale progressiva, febbre costante e dolori assiali atipici). L'interruzione in asse dell'IL-1R o con anticorpi solubili specifici disattiva le pirogenesi con remissione biochimica totale.",
    "clinicalPearl": "L'iniezioni di Canakinumab (IgG completamente umane) copre il paziente pediatrico stabilmente per oltre un mese per ciascuna singola puntura.",
    "targetSectionId": "sec-4-6"
  },
  {
    "id": "gen-547",
    "lessonNumber": 19,
    "lessonTitle": "19. Differenziamento T Helper",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Come modula l'Interferone-gamma (IFN-gamma), potente citochina escreta dai linfociti Th1 e NK, l'assetto fenotipico e microbicida dei macrofagi istiocitari residenti?",
    "options": [
      "Spegnendo la NADPH ossidasi di membrana ma inducendo la secrezione compensatoria di anticorpi anti-micobatteri",
      "Trasformandoli stabilmente nel subset tissutale tollerogenico e cicatriziale di derivazione Macrofagica M2, ad alto tasso di Arginasi-1 inibitrice e induzione di fattori stromali riparatori per es. PDGF o IL-10",
      "Inducendo un'estrema e violenta Polarizzazione Classica Macrofagica (profilo M1): massima upregulation di MHC-II (tramite CIITA), espressione chinasica massiva dell'enzima iNOS (per il rilascio tossico letale di Ossido Nitrico dai substrati L-argininici) ed assemblaggio NOX2 potenziato con rilascio imponente di ROS",
      "Esautorando i recettori per i DAMP al fine di tollerare cellule necrotiche endogene e inattivare la chemiotassi di granulociti eosinofili citoplasmatici"
    ],
    "correctIndex": 2,
    "explanation": "IFN-gamma stimola il segnale intracellulare JAK-STAT1 determinando un drammatico 'upgrade militare' nel fagocita. Il macrofago passa al profilo esplosivo M1: il fagolisosoma fonde incessantemente e produce alte dosi combinate di Superossido (NOX2) e Ossido Nitrico (sintesi de novo via iNOS), forgiando come micidiale prodotto intermedio battericida terminale la molecola citotossica e nitrosilante del Perossinitrito. L'M1 iper-presenta le proteine su MHC-II ed iper-attiva ulteriori Th1 con cicli autocrini continui ed efficienti di citochina tumorale IL-12.",
    "clinicalPearl": "Questo shift a macrofago M1 produce una lisi massiva del micobatterio, ma, ove le cause non siano eradicate, esita invariabilmente nel contenimento protettivo a stroma granulomatoso epitelioide tubercolare cronico.",
    "targetSectionId": "sec-19-6"
  },
  {
    "id": "gen-548",
    "lessonNumber": 2,
    "lessonTitle": "02. Citochine, JAK-STAT & Chemochine",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale meccanismo molecolare profondo e innovativo giustifica l'aumentata e migliorata reattività a lungo termine delle cellule innato-macrofagiche al rientro dei patogeni, definita scientificamente come 'Trained Immunity' o Memoria dell'Immunità Innata?",
    "options": [
      "Consiste in profonde e stabili riprogrammazioni e marcature epigenetiche (es. trimetilazione persistente istonica attivante come H3K4me3 ed H3K27ac in siti genetici) accoppiate ad uno shift metabolico intracellulare forzoso verso la glicolisi aerobia ad alta efficienza (via mTOR-HIF1alfa), consentendo al monocita esposto a reagire violentemente ed espansivamente in futuro",
      "Consiste nella replicazione aspecifica dei geni codificanti il BCR asportando la memoria linfocitaria passandola alle cellule CD14",
      "Consiste nell'accumulo di recettori Fas transmembrana a valle della proliferazione",
      "Consiste in una ricombinazione genomica e V(D)J somatica aspecifica a livello del DNA di recettori citotossici innati NK, analoga alla TdT"
    ],
    "correctIndex": 0,
    "explanation": "Sebbene storicamente relegata a reazione stupida monoclonale aspecifica, l'Immunità Innata possiede memoria e tracciamento biologico. L'esposizione iniziale e l'attivazione dei Toll-Like Receptor genera un accumulo di metaboliti intermedi cellulari (es. acido fumarico intracellulare ed attivazione glicolitica) che inibiscono fisicamente gli enzimi demetilasi cellulari istonici KDM5. Ne risulta un imprinting epigenetico differenziante a lunghissimo termine: la cromatina dei promotori infiammatori e citocitossici rimane allentata (eucromatinica) con traccia metilata (H3K4me3) permanente per mesi o anni. Un secondo attacco batterico incontra una barriera istiocitica iper-reattiva non-specifica già potenziata in situ ed addestrata ('trained').",
    "clinicalPearl": "La somministrazione del vaccino pediatrico vivente attenuato antitubercolare BCG a nascita imprime una forte e salda 'Trained Immunity' che decuplica le resistenze neonatali verso innumerevoli altre complicanze o infezioni sistemiche virali ed aspecifiche.",
    "targetSectionId": "sec-2-1"
  },
  {
    "id": "gen-549",
    "lessonNumber": 2,
    "lessonTitle": "02. Citochine, JAK-STAT & Chemochine",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Nella pletora di farmaci biologici rivoluzionari ed avanzati per il controllo acuto o cronico delle citochine flogistiche sistemiche in reumatologia ed oncoematologia, cosa contraddistingue primariamente l'azione inibitoria delle small-molecules denominate 'Jakinibi' (es. Tofacitinib, Ruxolitinib) rispetto agli anticorpi monoclonali neutralizzanti puri?",
    "options": [
      "Inibiscono enzimaticamente in sede intracellulare e citosolica con elevata precisione e penetranza l'attività tirosin-chinasica (competizione per ATP) del recettore accoppiato alle Janus chinasi (JAK), inattivando la trasmissione e bloccando alla radice molteplici pathways citochinici (anziché colpire selettivamente il ligando sierico specifico all'esterno)",
      "Agiscono neutralizzando specificamente il ligando solubile extracellulare impedendogli passivamente il contatto recettoriale",
      "Agiscono sequestrando la beta2 microglobulina sulle emazie disattivate precludendo MHC-I",
      "Stimolano selettivamente i geni delle difese e degli effettori antivirali, impedendo ai recettori T di degranulare citochine letali"
    ],
    "correctIndex": 0,
    "explanation": "I Jakinibs o Inibitori della JAK penetrano all'interno del citoplasma e bloccano fisicamente le reazioni autofosforilative della chinasi (inibitori small molecule reversibili della tasca dell'ATP chinasica). Non colpiscono la singola interleuchina nel sangue. Inattivando l'asse JAK-STAT dall'interno arrestano simultaneamente i segnali pleiotropici e ridondanti di numerose e raggruppate citochine infiammatorie e fattori di crescita emopoietici a valle dei recettori.",
    "clinicalPearl": "Questo potente blocco multiplo a valle (es. Tofacitinib nell'Artrite Reumatoide o Ruxolitinib nella Mielofibrosi policitemica) domina le gravi reazioni autoinfiammatorie, ma al contempo rende il paziente estremamente e criticamente suscettibile al riaccendersi di infezioni opportunistiche latenti gravi virali come l'Herpes Zoster (VZV) da deficit immuno-STAT protettivo.",
    "targetSectionId": "sec-2-3"
  },
  {
    "id": "gen-550",
    "lessonNumber": 11,
    "lessonTitle": "11. Sviluppo Timico e Citochine",
    "topicCategory": "Linfociti T, Sinapsi & Differenziamento Th",
    "professor": "Galandrini",
    "question": "Quale specifica rilevanza chimica assume il recettore multi-subunità che utilizza la catena denominata 'gamma comune' (gamma-c / CD132) durante la trasduzione bio-chimica del segnale linfocitario?",
    "options": [
      "Interviene esclusivamente sull'immunità innata a valle del riconoscimento lipopolisaccaridico su cellula epiteliale per il TNF",
      "È condiviso strutturalmente per trasdurre i segnali pro-sopravvivenza indotti da un ristretto e ben preciso pool di interleuchine della famiglia (IL-2, IL-4, IL-7, IL-9, IL-15, IL-21) e recluta selettivamente in modo differenziato l'enzima tirosin-chinasi esclusivo intracellulare JAK3",
      "Induce tolleranza centrale legandosi costitutivamente a PD-L1 al fine di deprimere per default la differenziazione degli autoanticorpi nucleari",
      "Viene esposto dalle APC nei linfonodi periferici in sostituzione delle integrine inibendo lo sfregamento della diapedesi stravasatoria endoteliale"
    ],
    "correctIndex": 1,
    "explanation": "La catena 'gamma comune' (CD132) è una subunità recettoriale promiscua che partecipa all'assemblaggio dei complessi per varie interleuchine fisiologicamente indispensabili ed essenziali (2, 4, 7, 9, 15, 21). Trasduce sempre ed invariabilmente avvalendosi dell'ancoraggio citosolico alla sua regione citoplasmatica della specifica chinasi JAK3.",
    "clinicalPearl": "Tale promiscuita recettoriale e chinasica spiega in maniera mirabile il motivo clinico per cui le rarissime mutazioni con perdita di funzione genica o del recettore IL2RG (gamma-c) oppure del solo enzima citoplasmatico JAK3 generano immunodeficienze combinate fatali ed indistinguibili fenotipicamente: assenza timica di sviluppo dei linfociti T (T-mancanti per stallo su IL-7) e assenza fisiologica assoluta periferica delle cellule NK (NK-mancanti per stallo letale su IL-15).",
    "targetSectionId": "sec-11-6"
  }
];
