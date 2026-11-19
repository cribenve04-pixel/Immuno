import { QuizQuestion, Flashcard } from './chapterContent';

export interface BCellDevelopmentStage {
  stage: string;
  anatomicalSite: string;
  heavyChainState: string;
  lightChainState: string;
  surfaceMarkers: string;
  keyEvents: string;
}

export const B_CELL_STAGES_DATA: BCellDevelopmentStage[] = [
  {
    stage: 'Cellula Staminale Ematopoietica (HSC)',
    anatomicalSite: 'Nicchia midollare (endostio e vasi sinusoidi)',
    heavyChainState: 'Configurazione germinale (nessun riarrangiamento)',
    lightChainState: 'Configurazione germinale',
    surfaceMarkers: 'CD34+, c-Kit (CD117)+, CCR4+',
    keyEvents: 'Interazione con CXCL12 stromale e SCF (Stem Cell Factor); riceve segnali trofici per l’espansione e il mantenimento della staminalità.'
  },
  {
    stage: 'Pro-B Precoce (Early Pro-B)',
    anatomicalSite: 'Stroma del midollo osseo',
    heavyChainState: 'Riarrangiamento D-J su entrambi gli alleli',
    lightChainState: 'Configurazione germinale (eterocromatina condensata)',
    surfaceMarkers: 'CD19+, CD43+, c-Kit+, TdT+',
    keyEvents: 'Attivazione dei fattori di trascrizione E2A, EBF1 e PAX5. Espressione iniziale di RAG1/RAG2 e TdT; unione irreversibile D-J.'
  },
  {
    stage: 'Pro-B Tardivo (Late Pro-B)',
    anatomicalSite: 'Stroma del midollo osseo',
    heavyChainState: 'Riarrangiamento V-DJ sul primo allele',
    lightChainState: 'Configurazione germinale',
    surfaceMarkers: 'CD19+, CD43+, CD10+, TdT+',
    keyEvents: 'Scelta casuale di un segmento V unito al segmento DJ. Se non produttivo su entrambi gli alleli, la cellula muore per apoptosi.'
  },
  {
    stage: 'Grande Pre-B (Large Pre-B) · 1° Checkpoint',
    anatomicalSite: 'Midollo osseo (indipendente da ligandi esterni)',
    heavyChainState: 'VDJ riarrangiato produttivamente; sintesi proteica catena μ',
    lightChainState: 'Configurazione germinale',
    surfaceMarkers: 'Pre-BCR (catena μ + surrogate light chain VpreB/λ5) + Igα/Igβ (CD79a/b), CD19+, CD20+',
    keyEvents: 'Segnale tonico ligando-indipendente: auto-oligomerizzazione di λ5/VpreB che induce burst proliferativo, arresta RAG e stabilisce l’esclusione allelica.'
  },
  {
    stage: 'Piccolo Pre-B (Small Pre-B)',
    anatomicalSite: 'Midollo osseo',
    heavyChainState: 'Catena μ intracellulare immagazzinata',
    lightChainState: 'Riarrangiamento V-J (prima locus κ, poi se fallisce locus λ)',
    surfaceMarkers: 'CD19+, CD20+, CD10+ (c-Kit e TdT downregolati)',
    keyEvents: 'Riapertura epigenetica della cromatina dei loci delle catene leggere; riattivazione controllata di RAG1/RAG2.'
  },
  {
    stage: 'B Immaturo (Immature B) · 2° Checkpoint',
    anatomicalSite: 'Midollo osseo',
    heavyChainState: 'Catena μ espressa stabilmente',
    lightChainState: 'Catena leggera (κ o λ) associata',
    surfaceMarkers: 'mIgM completa + Igα/Igβ, CD19+, CD20+',
    keyEvents: 'Saggio di tolleranza centrale al self: l’alta affinità per antigeni self scatena l’editing recettoriale (RAG riacceso) o delezione per apoptosi; la bassa affinità causa anergia.'
  },
  {
    stage: 'B Transizionale (T1 e T2)',
    anatomicalSite: 'Uscita dal sangue e migrazione nella polpa bianca della milza',
    heavyChainState: 'Inizio trascrizione tandem Cμ e Cδ',
    lightChainState: 'κ o λ definitiva',
    surfaceMarkers: 'T1: IgM alta, IgD bassa, CD21/35 basso, BAFF-R intermedio. T2: IgM alta, IgD alta, CD21/35+, BAFF-R alto',
    keyEvents: 'Tolleranza periferica e competizione per BAFF (BLyS): le cellule anergiche o autoreattive muoiono; le cellule sane maturano in B follicolari (B2) o della zona marginale.'
  },
  {
    stage: 'B Maturo Follicolare Vergine (Mature Naive B2)',
    anatomicalSite: 'Follicoli linfonodali, follicoli splenici, MALT e circolo',
    heavyChainState: 'Coespressione simultanea di IgM e IgD per splicing alternativo',
    lightChainState: 'Catena leggera identica funzionale',
    surfaceMarkers: 'mIgM+, mIgD+, CD19+, CD20+, CXCR5+, CD21/CR2+',
    keyEvents: 'Competenza funzionale piena: ricircolo continuo tra sangue e organi linfoidi secondari guidato da CXCL13/CXCR5 pronto alla risposta contro antigeni non-self.'
  }
];

export interface VdjEnzymeDetail {
  enzyme: string;
  activity: string;
  roleInDiversity: string;
  clinicalDeficiency: string;
}

export const VDJ_ENZYMES_DATA: VdjEnzymeDetail[] = [
  {
    enzyme: 'RAG1 & RAG2 (Recombination Activating Genes)',
    activity: 'Endonucleasi linfocita-specifica dimero-eterotrimerica',
    roleInDiversity: 'Riconosce specificamente le sequenze RSS (regola 12/23), introduce un taglio a singolo filamento sfasato e forma un’estremità sigillata a forcina (hairpin) sui segmenti codificanti eliminando il DNA circolare intermedio.',
    clinicalDeficiency: 'Mutazioni nulle: SCID T- B- con assenza totale di linfociti maturi. Mutazioni ipomorfe parziali: Sindrome di Omenn (eritrodermia severa, alopecia, epatosplenomegalia e cloni T autoreattivi oligoclonali).'
  },
  {
    enzyme: 'Artemis (Endonucleasi) & DNA-PKcs (Chinasi)',
    activity: 'Complesso di apertura delle forcine (Hairpin Opening)',
    roleInDiversity: 'La protein-chinasi DNA-PKcs fosforila e attiva Artemis, che taglia asimmetricamente la forcina di DNA a doppio filamento, creando estremità sporgenti a singolo filamento (overhangs) da cui originano i nucleotidi P (palindromici).',
    clinicalDeficiency: 'SCID radiosensibile autosomica recessiva (deficit di Artemis): incapacità di riparare le rotture a doppio filamento sia durante il V(D)J sia dopo esposizione a radiazioni ionizzanti.'
  },
  {
    enzyme: 'TdT (Terminal Deoxynucleotidyl Transferase)',
    activity: 'DNA polimerasi templato-indipendente (senza stampo)',
    roleInDiversity: 'Aggiunge nucleotidi casuali (nucleotidi N, da 1 a 20 nt) alle estremità 3’ libere dei segmenti V-D e D-J della catena pesante, determinando la straordinaria ipervariabilità giunzionale del loop CDR3.',
    clinicalDeficiency: 'Assente nei linfociti B fetali/neonatali precoci e nelle cellule B1 peritoneali, che presentano un repertorio anticorpale meno eterogeneo e più cross-reattivo verso pattern microbici comuni.'
  },
  {
    enzyme: 'DNA Ligasi IV & XRCC4',
    activity: 'Complesso ligasico del Non-Homologous End Joining (NHEJ)',
    roleInDiversity: 'Salda covalentemente i due segmenti codificanti riarrangiati dopo il riempimento dei gap da parte di DNA polimerasi μ o λ.',
    clinicalDeficiency: 'Sindrome da microcefalia, ritardo di crescita, grave immunodeficienza combinata e difetti scheletrici.'
  }
];

export const QUIZ_LEZIONE_7: QuizQuestion[] = [
  {
    "id": "q-l7-1",
    "question": "Nello stadio di Pre-B grande nel midollo osseo, attraverso quale meccanismo il complesso del Pre-BCR trasduce il segnale tonico di proliferazione e arresta il riarrangiamento sul secondo allele della catena pesante (esclusione allelica)?",
    "options": [
      "Attraverso il legame ad altissima affinità con antigeni self circolanti presentati da cellule stromali",
      "Attraverso l’auto-aggregazione (cross-linking ligando-indipendente) favorita dalle catene invarianti sostitutive della catena leggera (VpreB e λ5), che attivano la chinasi BTK e spengono l'espressione di RAG",
      "Attraverso l'attivazione della ribonucleasi RNasi L nel citoplasma",
      "Attraverso la secrezione immediata di immunoglobuline di classe IgE"
    ],
    "correctIndex": 1,
    "explanation": "Il Pre-BCR è costituito dalla catena pesante μ appena riarrangiata associata alle catene surrogate invarianti VpreB e λ5 (che simulano una catena leggera provvisoria) e all'eterodimero trasduttore Igα/Igβ. Le catene VpreB e λ5 possiedono domini sporgenti che interagiscono spontaneamente tra complessi pre-BCR adiacenti, inducendo un'auto-aggregazione ligando-indipendente (segnale tonico). Questo segnale intracellulare (veicolato da Lyn, Syk, BLNK e BTK) è vitale: induce un'intensa proliferazione cellulare, down-regola RAG1/RAG2 chiudendo il secondo allele della catena pesante (esclusione allelica) e programma la successiva apertura cromatinica dei loci delle catene leggere.",
    "clinicalPearl": "Nei pazienti maschi con Agammaglobulinemia legata all'X (Malattia di Bruton), mutazioni inattivanti nel gene BTK impediscono la trasduzione di questo segnale tonico: lo sviluppo si arresta tassativamente allo stadio pre-B e il paziente non possiede linfociti B maturi circolanti né immunoglobuline sieriche."
  },
  {
    "id": "q-l7-2",
    "question": "Che cosa si intende per 'Editing Recettoriale' (Receptor Editing) durante la tolleranza centrale dei linfociti B nel midollo osseo?",
    "options": [
      "La mutazione somatica dei geni costanti Fc per trasformare una IgM in IgG",
      "La digestione della catena pesante da parte della papaina midollare",
      "Il salvataggio di un linfocita B autoreattivo ad alta affinità mediante la riattivazione dei geni RAG e la ricombinazione successiva dei loci delle catene leggere (prima κ, poi λ), nel tentativo di sostituire la catena leggera autoreattiva con una non autoreattiva",
      "L'espulsione immediata del nucleo da parte del linfocita B"
    ],
    "correctIndex": 2,
    "explanation": "Quando un linfocita B immaturo esprime un BCR completo IgM (μ + κ) che riconosce con elevata affinità antigeni self multivalenti di membrana nel midollo, la cellula non va incontro a morte immediata. Riceve invece un segnale che mantiene aperti o riattiva i geni RAG1/RAG2, consentendo un nuovo evento di riarrangiamento genico sul locus della catena leggera (sul medesimo allele κ utilizzando segmenti V a monte e J a valle, o sul secondo allele κ, oppure sui due loci λ, fino a un massimo di 4 tentativi). Se il nuovo riarrangiamento genera una catena leggera che non riconosce il self, il linfocita B viene salvato e prosegue la maturazione. Solo se tutti i tentativi falliscono e il recettore rimane autoreattivo, la cellula viene eliminata per apoptosi (delezione clonale).",
    "clinicalPearl": "L'editing recettoriale è il principale e più efficiente meccanismo fisiologico di tolleranza centrale dei linfociti B, consentendo di non sprecare l'impegnativo riarrangiamento della catena pesante già completato con successo."
  },
  {
    "id": "q-l7-3",
    "question": "Quale combinazione di segnali determina il destino di sopravvivenza o apoptosi di un linfocita B transizionale (T1/T2) durante la selezione di tolleranza periferica nella milza?",
    "options": [
      "Alto segnale dal BCR e assenza totale di chemochine",
      "Esclusivo riconoscimento di antigeni solubili a pH acido",
      "Assenza di recettori BAFF-R e iperattivazione di perforina e granzimi",
      "Basso segnale basale dal BCR associato a un forte segnale di sopravvivenza veicolato dalla citochina BAFF attraverso il recettore BAFF-R"
    ],
    "correctIndex": 3,
    "explanation": "I linfociti B che escono dal midollo arrivano nella milza come cellule transizionali T1/T2, in cui il macchinario di trasduzione del segnale è ancora instabile e incline all'apoptosi. Nella milza, un legame forte dell'antigene con il BCR (che indica autoreattività verso antigeni periferici) induce apoptosi o anergia. Al contrario, le cellule non autoreattive mostrano un segnale debolissimo dal BCR e una forte espressione del recettore BAFF-R. Il legame della citochina stromale BAFF (della famiglia del TNF) al BAFF-R attiva la via NF-κB inducendo fattori anti-apoptotici (Bcl-2, Mcl-1) e consentendo la transizione a linfociti B maturi follicolari (B2).",
    "clinicalPearl": "Topi o individui con deficit della via BAFF/BAFF-R mancano quasi completamente di linfociti B maturi; al contrario, livelli sierici eccessivi di BAFF consentono la sopravvivenza anomala di cloni B autoreattivi, reperto caratteristico nel Lupus Eritematoso Sistemico (LES) e bersaglio del farmaco biologico Belimumab (anticorpo monoclonale anti-BAFF)."
  },
  {
    "id": "q-l7-4",
    "question": "Attraverso quale meccanismo genetico un linfocita B maturo naive (vergine) coesprime contemporaneamente sulla propria membrana plasmatica sia l'isotipo IgM sia l'isotipo IgD con identica specificità per l'antigene?",
    "options": [
      "Splicing alternativo di un lungo trascritto primario di pre-mRNA contenente il modulo VDJ riarrangiato e i geni adiacenti Cμ e Cδ, con scelta alternativa del sito di poliadenilazione",
      "Ricombinazione somatica a livello del DNA mediata dalle ricombinasi RAG1 e RAG2",
      "Fosforilazione catalitica da parte della tirosin-chinasi Lyn",
      "Endocitosi e riciclo mediati dal recettore FcRn"
    ],
    "correctIndex": 0,
    "explanation": "La coespressione simultanea di IgM e IgD sulla membrana del linfocita B maturo naive rappresenta l'unico esempio di coespressione isotipica e NON comporta alcuna modificazione o taglio del DNA. La RNA polimerasi II trascrive un lungo pre-mRNA primario che inizia con la sequenza leader e il segmento VDJ già unito, proseguendo attraverso il gene Cμ e il gene adiacente Cδ. Tramite un meccanismo di splicing alternativo e scelta del sito di poliadenilazione (poly-A site), parte dei trascritti unisce VDJ con Cμ (dando origine a mIgM) e parte unisce VDJ con Cδ (dando origine a mIgD). Poiché la regione VDJ è identica, entrambe le molecole condividono la medesima specificità idiotipica per l'antigene.",
    "clinicalPearl": "La contemporanea comparsa di mIgD insieme a mIgM definisce il linfocita B come fenotipicamente maturo ed immunocompetente, pronto a ricircolare nei follicoli degli organi linfoidi secondari."
  },
  {
    "id": "q-l7-5",
    "question": "Per quale motivo nella SCID legata al cromosoma X (X-SCID da mutazione della catena gamma comune γc) i linfociti T sono totalmente assenti mentre i linfociti B sono numericamente normali (fenotipo T- B+ NK-)?",
    "options": [
      "Perché i linfociti B maturano esclusivamente nel timo",
      "Perché nella specie umana il recettore per IL-7 (che contiene la catena γc) è obbligatorio per la sopravvivenza dei precursori T nel timo, mentre nel midollo osseo umano i precursori B possono sopperire all'assenza di IL-7 sfruttando altri fattori di crescita stromali (come SCF/c-Kit)",
      "Perché la catena γc è espressa solo sui globuli rossi",
      "Perché i linfociti B producono autonomamente la propria catena γc"
    ],
    "correctIndex": 1,
    "explanation": "La catena gamma comune (γc o CD132, codificata dal gene IL2RG sul cromosoma X) è condivisa dai recettori di IL-2, IL-4, IL-7, IL-9, IL-15 e IL-21. Nella specie umana (a differenza del topo, dove IL-7 è vitale per entrambi i lignaggi), lo sviluppo dei linfociti T dipende in modo assoluto da IL-7R, e quello delle cellule NK dipende da IL-15R; la loro maturazione si arresta totalmente. I precursori B umani invece possono svilupparsi anche in assenza di segnale IL-7 grazie alla ridondanza di SCF/c-Kit e altri fattori stromali. Pertanto, i linfociti B sono presenti nel sangue, ma risultano funzionalmente inefficaci per assenza di cooperazione da parte dei T helper (grave ipogammaglobulinemia).",
    "clinicalPearl": "La X-SCID è la forma più frequente di immunodeficienza combinata grave (~50% dei casi). Senza trapianto allogenico di cellule staminali ematopoietiche o terapia genica nei primi mesi di vita, è letale entro il primo anno per infezioni opportunistiche fulminanti."
  }
];

export const FLASHCARDS_LEZIONE_7: Flashcard[] = [
  {
    id: 'fc-l7-1',
    front: "Qual è il ruolo cardinale del fattore di trascrizione PAX5 nello sviluppo della linea linfocitaria B?",
    back: "PAX5 (BSAP) è il master regulator dell'identità B. Si attiva nello stadio Pro-B e permane per tutta la vita della cellula B, spegnendosi solo alla differenziazione in plasmacellula. Reprime irreversibilmente i geni di altri lignaggi (es. Notch1 per i linfociti T, M-CSFR per i mieloidi) e attiva geni specifici B, tra cui CD19, CD20, Igα (CD79a) e BLNK.",
    category: 'Cellulare'
  },
  {
    id: 'fc-l7-2',
    front: "In cosa consiste la 'Regola del 12/23' delle sequenze RSS e quale scopo biologico assicura?",
    back: "Le sequenze RSS (Recombination Signal Sequences) sono composte da un ettamero e un nonamero conservati separati da uno spaziatore non conservato di 12 o 23 paia di basi (1 o 2 giri d'elica del DNA). La regola stabilisce che una sequenza con spaziatore da 12 nt può ricombinare solo con una da 23 nt. Nella catena pesante ciò impedisce l'unione diretta V-J o V-V, imponendo l'ordine obbligato V-D-J.",
    category: 'Molecolare'
  },
  {
    id: 'fc-l7-3',
    front: "Come funziona il 1° Checkpoint midollare mediato dal Pre-BCR e dalle catene surrogate VpreB/λ5?",
    back: "La catena pesante μ appena riarrangiata si associa alle catene invarianti VpreB e λ5 e a Igα/Igβ. Questo complesso auto-aggrega spontaneamente sulla membrana senza antigene (segnale tonico) attivando BTK e Syk. Il segnale induce proliferazione dei grandi pre-B, spegne RAG bloccando il secondo allele pesante (esclusione allelica) e autorizza il riarrangiamento della catena leggera.",
    category: 'Cellulare'
  },
  {
    id: 'fc-l7-4',
    front: "Quali sono i tre possibili destini di un linfocita B immaturo al 2° Checkpoint midollare della tolleranza centrale?",
    back: "1. Nessun legame al self: migrazione in periferia come B transizionale.\n2. Riconoscimento ad ALTA AFFINITÀ/AVIDITÀ di self multivalente: riattivazione di RAG ed Editing Recettoriale della catena leggera (fino a 4 tentativi); se fallisce, apoptosi per delezione clonale.\n3. Riconoscimento a BASSA AFFINITÀ di self solubile: induzione di anergia clonale (perdita di IgM superficiali e silenziamento funzionale).",
    category: 'Fondamenti'
  },
  {
    id: 'fc-l7-5',
    front: "Qual è il ruolo della citochina BAFF e del recettore BAFF-R nella selezione dei linfociti B transizionali nella milza?",
    back: "Nella milza i linfociti transizionali competono per la citochina stromale BAFF (famiglia TNF). Un debole segnale tonico del BCR abbinato a un forte segnale da BAFF-R stimola NF-κB e Bcl-2 promuovendo la sopravvivenza e la transizione a B maturo follicolare (B2). Cellule autoreattive o anergiche (che down-regolano BAFF-R) non ricevono BAFF e muoiono per apoptosi periferica.",
    category: 'Molecolare'
  },
  {
    id: 'fc-l7-6',
    front: "Qual è la differenza molecolare tra la coespressione di IgM/IgD e il successivo switch isotipico (CSR)?",
    back: "La coespressione di IgM e IgD sulla cellula naive avviene per SPLICING ALTERNATIVO di un unico pre-mRNA primario senza alterazioni al DNA genomico. Al contrario, lo scambio isotipico (class switch a IgG, IgA o IgE) nei centri germinativi comporta una RICOMBINAZIONE GENICA irreversibile al DNA mediata dall'enzima AID con taglio ed eliminazione dei geni costanti intermedi.",
    category: 'Clinica'
  }
];
