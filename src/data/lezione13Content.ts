import { QuizQuestion, Flashcard } from './chapterContent';

export interface GerminalCenterZoneCompare {
  feature: string;
  darkZone: string;
  lightZone: string;
  molecularDrivers: string;
  clinicalSignificance: string;
}

export const GC_ZONE_COMPARISON: GerminalCenterZoneCompare[] = [
  {
    feature: 'Popolazione Cellulare Principale',
    darkZone: 'Centroblasti (grandi cellule blastiche con citoplasma basofilo, alto rapporto nucleo/citoplasma)',
    lightZone: 'Centrociti (cellule più piccole con nucleo indentato o scanalato), FDC e Tfh',
    molecularDrivers: 'Bcl-6 mantiene lo stato blastico e silenzia p53 e p21, permettendo cicli mitotici fulminei',
    clinicalSignificance: 'I linfomi a grandi cellule B (DLBCL) derivano prevalentemente da controparti trasformate dei centroblasti della zona scura.'
  },
  {
    feature: 'Attività Proliferativa & Cinetica',
    darkZone: 'Massima proliferazione clonale (tempo di duplicazione: 6-12 ore); sede di espansione massiva',
    lightZone: 'Quiescenza o arresto proliferativo; valutazione della sopravvivenza clonale e dell’affinità',
    molecularDrivers: 'Espressione di ciclina D3 e repressione di p27 (CDKN1B); assenza di apoptosi spontanea',
    clinicalSignificance: 'Spiega l’estrema sensibilità iniziale del centro germinativo e dei linfomi aggressivi ai chemioterapici antiblastici.'
  },
  {
    feature: 'Recettori Chemochinici di Membrana',
    darkZone: 'Alta espressione di CXCR4 (CXCR4^high, CXCR5^low)',
    lightZone: 'Alta espressione di CXCR5 (CXCR5^high, CXCR4^low)',
    molecularDrivers: 'Gradiente di CXCL12 prodotto dai fibroblasti della zona scura vs CXCL13 prodotto dalle FDC nella zona chiara',
    clinicalSignificance: 'L’antagonismo o blocco di CXCR4/CXCR5 altera il partizionamento microscopico del centro germinativo e abroga la maturazione dell’affinità.'
  },
  {
    feature: 'Processi Genetici & Molecolari',
    darkZone: 'Ipermutazione Somatica (SHM) guidata da AID nei segmenti variabili V(D)J',
    lightZone: 'Selezione clonale mediata da BCR/antigene e Switch di Classe (CSR) guidato da Tfh',
    molecularDrivers: 'AID (Activation-Induced Cytidine Deaminase) deamina le deossicitidine in deossiuracili su ssDNA',
    clinicalSignificance: 'Un’errata regolazione di AID nella zona scura causa traslocazioni oncogeniche (es. c-Myc su IgH in t(8;14) nel linfoma di Burkitt).'
  },
  {
    feature: 'Disponibilità dell’Antigene',
    darkZone: 'Assente (non vi sono cellule presentanti né immunocomplessi liberi)',
    lightZone: 'Concentrato ad altissima densità sulla superficie dendritica delle FDC (non fagocitato)',
    molecularDrivers: 'Recettori del complemento CR1 (CD35), CR2 (CD21) e recettori FcγRIIB legano immunocomplessi opsonizzati',
    clinicalSignificance: 'Permette ai centrociti di competere per quote limitanti di antigene; i cloni a bassa affinità falliscono la cattura e muoiono per apoptosi.'
  },
  {
    feature: 'Destino Cellulare e Selezione',
    darkZone: 'Generazione di varianti mutanti ad ampio spettro di affinità (alcune vantaggiose, molte deleteri o autoreattive)',
    lightZone: 'Selezione positiva (salvataggio anti-apoptotico via CD40L e IL-21) vs Morte per neglect o apoptosi Fas-mediata',
    molecularDrivers: 'Segnale CD40:CD40L attiva NF-κB e up-regola Mcl-1 e c-FLIP; IL-21 via STAT3 promuove la differenziazione o il re-ingresso',
    clinicalSignificance: 'Circa il 90-95% dei centrociti prodotti nella zona scura viene eliminato nella zona chiara e fagocitato dai macrofagi a corpi tingibili.'
  }
];

export interface MemoryTypeComparison {
  feature: string;
  gcDependentMemory: string;
  gcIndependentMemory: string;
  biologicalAdvantage: string;
}

export const MEMORY_TYPE_COMPARISON: MemoryTypeComparison[] = [
  {
    feature: 'Sede di Generazione Anatomica',
    gcDependentMemory: 'Centro Germinativo (Zona Chiara del follicolo secondario dopo ripetuti cicli)',
    gcIndependentMemory: 'Focolai extrafollicolari al confine cortico-midollare o zona marginale',
    biologicalAdvantage: 'La memoria extrafollicolare compare prestissimo (3-5 giorni), prima della completa maturazione del GC.'
  },
  {
    feature: 'Livello di Ipermutazione Somatica (SHM)',
    gcDependentMemory: 'Altissimo carico di mutazioni somatiche mirate nei CDR del dominio variabile',
    gcIndependentMemory: 'Geni variabili non mutati (linea germinativa) o con pochissime mutazioni somatiche',
    biologicalAdvantage: 'La mancanza di restrizione d’affinità conferisce una plasticità antigenica polivalente.'
  },
  {
    feature: 'Affinità per l’Antigene Inducente',
    gcDependentMemory: 'Affinità nanopolare o sub-nanomolare, altissima specificità per il ceppo infettante originale',
    gcIndependentMemory: 'Affinità moderata o intermedia verso il ceppo immunizzante originario',
    biologicalAdvantage: 'La memoria a bassa affinità evita il vicolo cieco del sovra-adattamento (over-fitting immunitario).'
  },
  {
    feature: 'Isotipo di Immunoglobulina Espressa',
    gcDependentMemory: 'Prevalentemente class-switched: IgG1, IgG3, IgA (rari cloni IgM+ altamente mutati)',
    gcIndependentMemory: 'Prevalentemente IgM+ (o IgM+ IgD+) con intatta architettura pentamerica d’avolte',
    biologicalAdvantage: 'Le IgM pentameriche compensano la minore affinità intrinseca con una avidità funzionale decavalente.'
  },
  {
    feature: 'Risposta a Varianti Antigeniche e Mutanti di Fuga',
    gcDependentMemory: 'Vulnerabile al fallimento: le mutazioni nei siti critici del patogeno possono azzerare il legame',
    gcIndependentMemory: 'Capacità eccellente di cross-reattività contro varianti virali mutate (es. ceppi emergenti di SARS-CoV-2 o Influenza)',
    biologicalAdvantage: 'Fornisce una cintura di salvataggio evolutiva contro la deriva antigenica dei virus a RNA.'
  },
  {
    feature: 'Fattori di Trascrizione Master',
    gcDependentMemory: 'BACH2 alto (che reprime Blimp-1), dipendente dal percorso Bcl-6/Tfh pregresso',
    gcIndependentMemory: 'Induzione precoce indipendente da Bcl-6; regolazione da NF-κB e c-Myc transiente',
    biologicalAdvantage: 'Mantiene una frazione cellulare pronta a proliferare o a rientrare in un nuovo centro germinativo de novo.'
  }
];

export interface ClassSwitchCytokineRule {
  cytokine: string;
  sourceCells: string;
  inducedIsotype: string;
  transcriptionFactor: string;
  mainEffectorFunctions: string;
  clinicalRelevance: string;
}

export const CLASS_SWITCH_RULES: ClassSwitchCytokineRule[] = [
  {
    cytokine: 'Interferone-gamma (IFN-γ)',
    sourceCells: 'Linfociti Th1, Cellule NK, Linfociti T CD8+',
    inducedIsotype: 'IgG1 e IgG3 (nell’uomo) / IgG2a (nel topo)',
    transcriptionFactor: 'T-bet e STAT1',
    mainEffectorFunctions: 'Opsonizzazione ad altissima affinità per FcγRI (CD64), attivazione classica del Complemento (C1q), ADCC mediata da NK (CD16)',
    clinicalRelevance: 'Difesa primaria contro batteri intracellulari e virus; difetti di IFN-γR causano suscettibilità severa a micobatteri (MSMD).'
  },
  {
    cytokine: 'Interleuchina-4 (IL-4) & IL-13',
    sourceCells: 'Linfociti Th2, Mastociti, Basofili, ILC2',
    inducedIsotype: 'IgE e IgG4 (nell’uomo)',
    transcriptionFactor: 'GATA-3 e STAT6',
    mainEffectorFunctions: 'Legame al recettore ad altissima affinità FcεRI su mastociti e basofili; degranulazione di istamina; difesa da elminti',
    clinicalRelevance: 'Cardine patogenetico delle malattie atopiche, asma allergico, anafilassi sistemica; bersaglio del dupilumab (anti-IL-4Rα).'
  },
  {
    cytokine: 'TGF-β, BAFF e APRIL',
    sourceCells: 'Linfociti Treg, Cellule dendritiche mucosali, cellule stromali epiteliali del GALT',
    inducedIsotype: 'IgA1 e IgA2',
    transcriptionFactor: 'Smad2/3, Smad4 e Runx3',
    mainEffectorFunctions: 'Immunità mucosale: formazione di dimeri con catena J, transcitosi guidata dal recettore polimerico (pIgR), neutralizzazione asettica',
    clinicalRelevance: 'La carenza selettiva di IgA è la più comune immunodeficienza primitiva (1:600), spesso associata a celiachia o infezioni respiratorie.'
  },
  {
    cytokine: 'Interleuchina-21 (IL-21)',
    sourceCells: 'Linfociti Tfh (T follicular helper)',
    inducedIsotype: 'Potenziamento generale di IgG1, IgG3, IgA e transizione a plasmacellula',
    transcriptionFactor: 'STAT3 e IRF4',
    mainEffectorFunctions: 'Citochina fondamentale per la proliferazione dei centrociti e la loro transizione a plasmacellule secernenti o cellule B memoria',
    clinicalRelevance: 'Le mutazioni autosomiche dominanti o recessive in STAT3 causano la sindrome da Iper-IgE (Sindrome di Job) con difetto di GC e Tfh.'
  }
];

export interface HyperIgmSubtype {
  type: string;
  defectGene: string;
  inheritance: string;
  cellularDefect: string;
  lymphoidHistology: string;
  clinicalSpectrum: string;
}

export const HIGM_SUBTYPES: HyperIgmSubtype[] = [
  {
    type: 'HIGM Tipo 1 (Sindrome da Iper-IgM X-Linked)',
    defectGene: 'CD40LG (codificante per CD40L / CD154 sul cromosoma Xq26)',
    inheritance: 'Recessiva legata al sesso (X-linked), ~70% dei casi di HIGM',
    cellularDefect: 'Difetto intrinseco del linfocita T: incapacità di fornire il segnale CD40-dipendente a B, macrofagi e cellule dendritiche',
    lymphoidHistology: 'Assenza totale di centri germinativi nei linfonodi e milza; follicoli primari ipoplastici costituiti unicamente da IgM/IgD',
    clinicalSpectrum: 'Assenza di IgG, IgA, IgE con IgM normali o marcatamente aumentate. Gravi infezioni opportunistiche precoci (*Pneumocystis jirovecii*, *Cryptosporidium parvum* biliare con colangite sclerosante) e neutropenia.'
  },
  {
    type: 'HIGM Tipo 2',
    defectGene: 'AICDA (codificante per AID - Activation-Induced Cytidine Deaminase, 12p13)',
    inheritance: 'Autosomica recessiva',
    cellularDefect: 'Difetto intrinseco del linfocita B: cooperazione T:B intatta (CD40L normale), ma totale blocco biochimico della deaminazione del DNA',
    lymphoidHistology: 'Iperplasia linfoide follicolare marcata con centri germinativi giganti floridi, ma incapaci di eseguire CSR e SHM',
    clinicalSpectrum: 'Assenza completa di IgG, IgA, IgE; IgM elevate; infezioni batteriche sino-polmonari ricorrenti da piogeni capsulati; linfoadenomegalia ed epato-splenomegalia marcate; nessun rischio opportunistico da *Pneumocystis*.'
  },
  {
    type: 'HIGM Tipo 3',
    defectGene: 'CD40 (codificante per CD40, recettore TNF-R su cellule B e APC, 20q12)',
    inheritance: 'Autosomica recessiva',
    cellularDefect: 'Difetto intrinseco del recettore su cellule B e APC: quadro fenotipico speculare al tipo 1, ma indipendente dal genere',
    lymphoidHistology: 'Assenza di centri germinativi; architettura follicolare collassata; mancata attivazione macrofagica',
    clinicalSpectrum: 'Sovrapponibile a HIGM-1 (infezioni batteriche gravi + parassiti opportunisti come *Pneumocystis* per mancato licensing macrofagico).'
  },
  {
    type: 'HIGM Tipo 5',
    defectGene: 'UNG (Uracil-N-DNA Glycosylase, 12q24)',
    inheritance: 'Autosomica recessiva',
    cellularDefect: 'Difetto di riparazione del DNA post-deaminazione: AID funziona, ma l’uracile non viene rimosso per generare i siti abasici AP',
    lymphoidHistology: 'Centri germinativi iperplastici con blocco quasi totale del Class Switch Recombination (CSR) e alterazione qualitativa dell’SHM',
    clinicalSpectrum: 'Ipogammaglobulinemia con IgM normali o elevate; infezioni ricorrenti dell’albero respiratorio e linfoproliferazione benigna.'
  }
];

export const QUIZ_LEZIONE_13: QuizQuestion[] = [
  {
    "id": "lez13-q1",
    "question": "Attraverso quale meccanismo le Follicular Dendritic Cells (FDC) trattengono e presentano l’antigene ai linfociti B nella zona chiara del centro germinativo?",
    "options": [
      "Tramite endocitosi recettore-mediata e processazione lisosomiale su molecole MHC di classe II",
      "Mediante cross-presentazione citosolica dipendente dal trasportatore TAP1/2",
      "Tramite secrezione di esomi contenenti peptidi associati a molecole MHC di classe I",
      "In forma nativa, non processata, legato a recettori per il complemento (CR1, CR2) e recettori Fc (FcγR)",
      "Sotto forma di frammenti proteolitici degradati dal proteasoma 26S"
    ],
    "correctIndex": 3,
    "explanation": "Le FDC (Follicular Dendritic Cells) sono cellule stromali di origine mesenchimale (non ematopoietiche) prive di MHC-II e non fagocitiche. Il loro compito esclusivo è catturare e trattenere immunocomplessi opsonizzati intatti tramite i recettori del complemento CR1 (CD35), CR2 (CD21) e recettori FcγRIIB, esponendoli sulla loro membrana per la selezione diretta del BCR dei centrociti.",
    "clinicalPearl": "A differenza delle cellule dendritiche convenzionali (cDC), le FDC non processano l’antigene: i linfociti B riconoscono sempre conformazioni tridimensionali native e non peptidi lineari."
  },
  {
    "id": "lez13-q2",
    "question": "Qual è il ruolo del corecettore del linfocita B (complesso CD21/CD19/CD81) durante l’interazione con l’antigene opsonizzato?",
    "options": [
      "Abbassare la soglia di attivazione del BCR di 100-1000 volte legando il frammento C3d del complemento",
      "Fosforilare direttamente le catene pesanti dell’anticorpo promuovendo lo switch isotipico",
      "Inibire la trasduzione del segnale del BCR reclutando le fosfatasi SHP-1 e SHIP-1",
      "Degradare la membrana del patogeno mediante la formazione del complesso di attacco alla membrana MAC",
      "Indurre l’internalizzazione del recettore tramite un pathway dipendente da caveolina-1"
    ],
    "correctIndex": 0,
    "explanation": "Il legame contemporaneo dell’antigene al BCR e del frammento C3d del complemento al recettore CR2 (CD21) recluta la lunga coda citoplasmatica di CD19, che viene fosforilata da Lyn. Questo recluta e attiva la PI3K, abbassando la concentrazione soglia di antigene necessaria per l’innesco cellulare di ben 100-1000 volte rispetto al solo BCR.",
    "clinicalPearl": "Il corecettore B rappresenta l’anello d’unione molecolare perfetto tra immunità innata (attivazione del complemento e deposizione di C3d) e immunità adattativa umorale."
  },
  {
    "id": "lez13-q3",
    "question": "Il principio del \"riconoscimento congiunto\" (Linked Recognition) è la base razionale della progettazione di quale classe di vaccini?",
    "options": [
      "Vaccini attenuati orali contro il poliovirus (Sabin)",
      "Vaccini coniugati contro batteri capsulati (Haemophilus influenzae tipo b, Pneumococco)",
      "Vaccini a DNA plasmidico nudo con promotore virale",
      "Vaccini a tossoide tetanico purificato senza adiuvante",
      "Vaccini a cellule intere inattivate al calore"
    ],
    "correctIndex": 1,
    "explanation": "Nei vaccini coniugati (es. Hib o Pneumococco nei neonati), l’aptene polisaccaridico capsulare (che da solo darebbe solo una debole risposta T-indipendente senza memoria) viene legato covalentemente a una proteina carrier (es. tossoide tetanico o difterico CRM197). Il BCR lega il polisaccaride nativo, internalizza l’intero complesso, degrada la proteina e presenta il peptide carrier su MHC-II a un linfocita T CD4+ pre-attivato, ricevendo l’aiuto T indispensabile per la memoria a lungo termine.",
    "clinicalPearl": "Il linfocita B e il linfocita T cooperano solo se l’epitopo conformazionale B e l’epitopo peptidico T fanno parte della medesima particella o macromolecola coniugata."
  },
  {
    "id": "lez13-q4",
    "question": "Cosa accade all’espressione dei recettori chemochinici CXCR5 e CCR7 nel linfocita B dopo il contatto iniziale con l’antigene nel follicolo?",
    "options": [
      "Sia CXCR5 che CCR7 vengono completamente degradati portando all’apoptosi immediata",
      "CXCR5 viene iperespresso mentre CCR7 viene silenziato, trattenendo la cellula al centro del follicolo",
      "CXCR5 viene parzialmente sottoregolato e CCR7 viene indotto, guidando la migrazione verso il confine T-B",
      "Viene espresso unicamente CXCR4 con migrazione diretta nel midollo osseo emopoietico",
      "CCR7 viene sostituito dal recettore S1PR1 che induce l’immediato egresso nella linfa efferente"
    ],
    "correctIndex": 2,
    "explanation": "Il linfocita B naïve esprime CXCR5 e risponde alla chemochina CXCL13 concentrata nei follicoli. Dopo l’ingaggio del BCR, la cellula up-regola CCR7 (il cui ligando CCL19/CCL21 è prodotto nella zona T paracorticale) e modula CXCR5, migrando verso l’interfaccia o confine T-B per incontrare i linfociti T helper antigene-specifici.",
    "clinicalPearl": "Simmetricamente, il linfocita T attivato dalla DC riduce CCR7 e aumenta CXCR5: entrambi convergono al confine T-B per attuare la prima interazione cooperativa."
  },
  {
    "id": "lez13-q5",
    "question": "Qual è il \"master transcription factor\" dei linfociti T follicolari helper (Tfh) e qual è la loro citochina firma essenziale per i centrociti?",
    "options": [
      "T-bet e Interferone-gamma (IFN-γ)",
      "GATA-3 e Interleuchina-4 (IL-4)",
      "FoxP3 e Fattore di Crescita Trasformante-beta (TGF-β)",
      "Bcl-6 e Interleuchina-21 (IL-21)",
      "RORγt e Interleuchina-17 (IL-17)"
    ],
    "correctIndex": 3,
    "explanation": "I Tfh (T follicular helper) sono caratterizzati dal repressore trascrizionale Bcl-6 (indotto da STAT3/IL-6/IL-12), marcatori CXCR5, ICOS, PD-1 e CD40L. La loro citochina distintiva fondamentale è l’IL-21, che fornisce ai linfociti B centrociti i segnali di sopravvivenza, proliferazione e spinta al differenziamento plasmacellulare.",
    "clinicalPearl": "Bcl-6 nel Tfh reprime i programmi alternativi Th1, Th2 e Th17, guidando l’espressione di CXCR5 che ne permette l’accesso anatomico ai follicoli B."
  },
  {
    "id": "lez13-q6",
    "question": "Quale reazione biochimica fondamentale catalizza l’enzima AID (Activation-Induced Cytidine Deaminase) durante la reazione del centro germinativo?",
    "options": [
      "La deaminazione idrolitica della deossicitidina in deossiuracile su filamenti singoli di DNA",
      "La metilazione delle isole CpG nei promotori dei geni delle immunoglobuline",
      "Il taglio idrolitico dei motivi RSS mediato da transesterificazione identica a RAG1/2",
      "La fosforilazione ossidativa degli istoni H3 e H4 nel locus IgH",
      "L’addizione casuale di nucleotidi N privi di stampo identica alla TdT"
    ],
    "correctIndex": 0,
    "explanation": "L’enzima AID catalizza la rimozione di un gruppo amminico dall’anello pirimidinico della deossicitidina (dC), convertendola in deossiuracile (dU). Poiché l’AID agisce solo su DNA a singolo filamento (ssDNA), la sua attività richiede una trascrizione attiva che apra la doppia elica formando bolle trascrizionali.",
    "clinicalPearl": "L’uracile non appartiene fisiologicamente al DNA: la sua comparsa scatena i macchinari di riparazione cellulare (UNG, APE1, MSH2/6) che generano l’ipermutazione somatica e i tagli per il class switch."
  },
  {
    "id": "lez13-q7",
    "question": "Quale delle seguenti modificazioni genomiche si verifica durante il Class Switch Recombination (CSR)?",
    "options": [
      "Inversione di 180 gradi del segmento leader del promotore V(D)J",
      "Ricombinazione non omologa mediata da tagli a doppio filamento nelle regioni di Switch (S) con escissione ad anello dei segmenti C costanti interposti",
      "Splicing alternativo reversibile dell’RNA messaggero maturo primario",
      "Duplicazione in tandem delle regioni CDR3 della catena leggera kappa",
      "Inserzione di sequenze retrovirali endogene tra VDJ e Cγ"
    ],
    "correctIndex": 1,
    "explanation": "Il Class Switch Recombination (CSR) è un processo di ricombinazione genetica irreversibile a livello di DNA: tagli a doppio filamento guidati da AID nelle regioni Switch (S) upstream portano all’escissione di un cerchio extracromosomico di DNA contenente le regioni costanti non scelte, ricongiungendo la porzione VDJ originaria a un nuovo gene costante (Cγ, Cε o Cα) mediante NHEJ (Non-Homologous End Joining).",
    "clinicalPearl": "A differenza dello switch tra IgM e IgD (che avviene per splicing alternativo dell’RNA e non modifica il genoma), il passaggio a IgG, IgE o IgA è permanente e cancella fisicamente i geni Cμ e Cδ."
  },
  {
    "id": "lez13-q8",
    "question": "In un bambino di 10 mesi con infezioni polmonari ricorrenti da batteri piogeni ed episodio di polmonite da Pneumocystis jirovecii, il dosaggio evidenzia assenza di IgG, IgA e IgE, con IgM elevate. La biopsia linfonodale mostra assenza completa di centri germinativi. Qual è la diagnosi più probabile?",
    "options": [
      "Deficit autosomico recessivo di AID (Sindrome HIGM tipo 2)",
      "Agammaglobulinemia di Bruton legata al sesso (mutazione di BTK)",
      "Sindrome da Iper-IgM X-Linked (HIGM tipo 1 da mutazione di CD40L)",
      "Immunodeficienza Comune Variabile (CVID)",
      "Deficit selettivo di IgA"
    ],
    "correctIndex": 2,
    "explanation": "La sindrome HIGM-1 è dovuta a mutazioni del gene CD40LG (cromosoma X), codificante per CD40L sui linfociti T. In assenza di CD40L, i linfociti B non ricevono il segnale indispensabile per formare i centri germinativi e per attivare AID (nessun CSR né SHM), determinando assenza di IgG/IgA/IgE e IgM persistenti. Inoltre, il mancato segnale CD40 sui macrofagi abolisce la loro attivazione microbicida, causando infezioni opportunistiche severe tipiche da *Pneumocystis jirovecii*.",
    "clinicalPearl": "Al contrario, nei difetti intrinseci del B come HIGM-2 (mutazione di AID), i centri germinativi sono presenti e giganti (iperplasia linfoide) e i macrofagi funzionano regolarmente: non si osservano infezioni da *Pneumocystis*."
  },
  {
    "id": "lez13-q9",
    "question": "Qual è il vantaggio evolutivo/biologico fondamentale della popolazione di linfociti B memoria a bassa affinità e scarsamente mutati (GC-indipendenti)?",
    "options": [
      "Secernere istantaneamente milioni di anticorpi IgE per distruggere parassiti metazoi",
      "Fissare il complemento con efficienza cento volte superiore a qualsiasi IgG3",
      "Inibire l’attivazione dei linfociti T citotossici per prevenire danni tissutali",
      "Fornire una riserva cross-reattiva plastica capace di neutralizzare varianti mutate del patogeno (deriva antigenica virale)",
      "Migrare unicamente nel midollo osseo per sostituire i precursori ematopoietici"
    ],
    "correctIndex": 3,
    "explanation": "I linfociti B memoria a bassa affinità (spesso non mutati e generati precocemente fuori dal centro germinativo) mantengono un repertorio recettoriale più ampio e meno specializzato. Se un virus muta i suoi epitopi dominanti (es. varianti Spike di SARS-CoV-2 o ceppi stagionali influenzali), le plasmacellule a iper-affinità possono fallire, mentre questi cloni memoria plastici possono legare la variante e rientrare in un centro germinativo secondario per una nuova ondata di affinamento.",
    "clinicalPearl": "La risposta umorale bilancia strategicamente due forze: la \"massima potenza letale\" (plasmacellule a lunghissima vita con altissima affinità) e la \"massima flessibilità evolutiva\" (memoria GC-indipendente polivalente)."
  },
  {
    "id": "lez13-q10",
    "question": "Quale combinazione di citochine e fattori di trascrizione governa la transizione terminale del centrocita in plasmacellula secernente anticorpi?",
    "options": [
      "Alti livelli di IRF4 che attivano Blimp-1 (PRDM1), con conseguente repressione di Bcl-6 e Pax5",
      "TGF-β che attiva Smad3 inducendo l’espressione esclusiva di Pax5",
      "Bcl-6 che reprime stabilmente Blimp-1 e attiva il programma mitotico della ciclina D3",
      "IFN-γ che attiva STAT1 provocando la degradazione lisosomiale del reticolo endoplasmatico",
      "IL-2 che attiva T-bet inducendo il riarrangiamento della catena leggera lambda"
    ],
    "correctIndex": 0,
    "explanation": "Il bivio trascrizionale tra centro germinativo e plasmacellula si basa sull’antagonismo mutuo tra Bcl-6/Pax5 (che mantengono l’identità B e la proliferazione nel GC) e Blimp-1/XBP-1 (che guidano il programma plasmacellulare). Quando il segnale antigenico e citochinico (IL-21) induce alti livelli di IRF4, questo attiva Blimp-1 (PRDM1), che spegne irreversibilmente Bcl-6 e Pax5, arrestando il ciclo cellulare ed espandendo massivamente il reticolo endoplasmatico per la secrezione di immunoglobuline.",
    "clinicalPearl": "Blimp-1 e Bcl-6 sono reciprocamente esclusivi: una cellula non può esprimere contemporaneamente entrambi i fattori di trascrizione master."
  },
  {
    "id": "lez13-q11",
    "question": "Le plasmacellule a lunga vita (LLPC, Long-Lived Plasma Cells) risiedono principalmente in quale distretto anatomico e grazie a quale chemochina?",
    "options": [
      "Nella polpa rossa della milza tramite il recettore CCR9 e la chemochina CCL25",
      "Nel midollo osseo, dove migrano guidate dall’asse CXCR4:CXCL12 e ricevono fattori trofici come APRIL e IL-6 dalle cellule stromali",
      "Nei follicoli delle placche di Peyer guidate unicamente da integrina α4β7",
      "Nel timo corticale dove cooperano con le cTEC mediante secrezione autocrina di IL-7",
      "Nel torrente ematico periferico in costante movimento ad alta velocità"
    ],
    "correctIndex": 1,
    "explanation": "Le plasmacellule a lunga vita up-regolano CXCR4 e migrano nel midollo osseo attratte da CXCL12 prodotto dalle cellule stromali reticolari. Nelle nicchie midollari, le LLPC perdono il BCR di superficie e MHC-II e vivono per decenni (o per l’intera durata della vita dell’individuo), mantenute da segnali di sopravvivenza essenziali come APRIL (tramite BCMA) e IL-6.",
    "clinicalPearl": "I titoli anticorpali protettivi che persistono per 50-70 anni dopo vaccinazioni o infezioni infantili (morbillo, tetano, difterite) sono generati continuamente da queste plasmacellule residenti nel midollo."
  },
  {
    "id": "lez13-q12",
    "question": "Cosa accade ai centrociti che acquisiscono mutazioni deleterie o con affinità diminuita per l’antigene esposto dalle FDC nella zona chiara?",
    "options": [
      "Vengono espulsi direttamente nella linfa efferente senza subire alterazioni",
      "Si differenziano forzatamente in linfociti B della zona marginale",
      "Non riescono a competere per l’antigene e non ricevono i segnali di soccorso da Tfh (CD40L/IL-21), andando incontro a morte apoptotica per \"neglect\"",
      "Re-invertono il loro genoma tornando alla sequenza germinativa mediante la polimerasi Pol η",
      "Fagocitano le Follicular Dendritic Cells per trarne nutrimento metabolico"
    ],
    "correctIndex": 2,
    "explanation": "La selezione nel centro germinativo è spietatamente darwiniana: la quantità di antigene sulle FDC e il numero di Tfh disponibili sono strettamente limitanti. Solo i centrociti con affinità aumentata estraggono l’antigene con forza meccanica, lo internalizzano, lo presentano ai Tfh e ricevono i segnali anti-apoptotici (CD40L, IL-21, up-regolazione di Mcl-1). I cloni a bassa affinità o non funzionali muoiono per neglect/apoptosi entro poche ore e vengono fagocitati dai Tingible Body Macrophages.",
    "clinicalPearl": "Questo severo filtro elimina anche i mutanti che per caso hanno acquisito autoreattività verso componenti self nel corso dell’ipermutazione somatica."
  }
];

export const FLASHCARDS_LEZIONE_13: Flashcard[] = [
  {
    id: 'fc-lez13-1',
    front: 'Qual è l’origine ontogenetica e la funzione fondamentale delle Follicular Dendritic Cells (FDC)?',
    back: 'Sono cellule stromali mesenchimali (non ematopoietiche) prive di MHC-II. Trattengono immunocomplessi opsonizzati intatti tramite recettori del complemento (CR1, CR2) e FcγR, presentandoli in forma nativa ai centrociti B e secernendo CXCL13 e BAFF.',
    category: 'Cellulare'
  },
  {
    id: 'fc-lez13-2',
    front: 'Come è composto il corecettore del linfocita B e quale vantaggio conferisce?',
    back: 'Complesso trimolecolare CD21 (CR2) + CD19 + CD81. Lega il frammento C3d opsonizzato sull’antigene; la fosforilazione di CD19 attiva PI3K e riduce la soglia di attivazione del BCR di ben 100-1000 volte.',
    category: 'Molecolare'
  },
  {
    id: 'fc-lez13-3',
    front: 'Cosa si intende per "Linked Recognition" (Riconoscimento Congiunto)?',
    back: 'Il linfocita B e il linfocita T CD4+ devono riconoscere epitopi appartenenti allo stesso complesso molecolare: il B riconosce l’epitopo conformazionale nativo (anche glicidico), internalizza il complesso e presenta il peptide proteico lineare su MHC-II al T helper.',
    category: 'Fondamenti'
  },
  {
    id: 'fc-lez13-4',
    front: 'Qual è il "codice chemochinico" che guida l’incontro tra cellule B e T al confine follicolare?',
    back: 'Il linfocita B stimolato abbassa parzialmente CXCR5 e alza CCR7; il linfocita T attivato abbassa CCR7 e alza CXCR5. Entrambe le cellule convergono al confine tra follicolo e paracorteccia (T-B border).',
    category: 'Cellulare'
  },
  {
    id: 'fc-lez13-5',
    front: 'Quali sono i ruoli contrapposti della Zona Scura e della Zona Chiara del Centro Germinativo?',
    back: 'Zona Scura (CXCR4+): proliferazione esplosiva dei centroblasti e Ipermutazione Somatica (SHM) mediata da AID. Zona Chiara (CXCR5+): centrociti, selezione per affinità con FDC e Tfh, Switch Isotipico (CSR), apoptosi o riciclo.',
    category: 'Cellulare'
  },
  {
    id: 'fc-lez13-6',
    front: 'Qual è la reazione chimica precisa catalizzata dall’enzima AID?',
    back: 'Deaminazione idrolitica della deossicitidina in deossiuracile (dC → dU) su DNA a singolo filamento (ssDNA) esposto durante la trascrizione nei geni Ig.',
    category: 'Molecolare'
  },
  {
    id: 'fc-lez13-7',
    front: 'Come si generano le rotture a doppio filamento (DSB) durante il Class Switch Recombination?',
    back: 'AID deamina molteplici citidine nelle sequenze ripetute di Switch (S). L’uracile viene rimosso da UNG creando siti abasici; l’endonucleasi APE1 taglia i siti AP su entrambi i filamenti generando DSB ricongiunte poi da NHEJ.',
    category: 'Molecolare'
  },
  {
    id: 'fc-lez13-8',
    front: 'Quale citochina induce lo switch a IgE e quale fattore di trascrizione attiva nel linfocita B?',
    back: 'L’Interleuchina-4 (IL-4) secreta dai linfociti Th2 (o Tfh2), che attiva il fattore di trascrizione STAT6 promuovendo la trascrizione germline della regione di switch Sε.',
    category: 'Molecolare'
  },
  {
    id: 'fc-lez13-9',
    front: 'Perché i pazienti con HIGM-1 (mutazione di CD40L) sviluppano polmoniti da Pneumocystis jirovecii a differenza dei pazienti con HIGM-2 (mutazione di AID)?',
    back: 'Perché CD40L è espresso sui T e serve sia a stimolare i B (CSR/SHM) sia ad attivare i macrofagi per l’uccisione di patogeni opportunisti. In HIGM-2 il difetto è intrinseco al B (AID): i macrofagi ricevono regolarmente il segnale CD40.',
    category: 'Clinica'
  },
  {
    id: 'fc-lez13-10',
    front: 'Quale coppia di fattori di trascrizione si antagonizza reciprocamente nel decidere tra Centro Germinativo e Plasmacellula?',
    back: 'Bcl-6 e Pax5 (mantengono l’identità B, l’ipermutazione e il centro germinativo) contro Blimp-1 (PRDM1) e XBP-1 (spengono Bcl-6 e guidano la differenziazione in plasmacellula secernente).',
    category: 'Molecolare'
  },
  {
    id: 'fc-lez13-11',
    front: 'Dove migrano e come sopravvivono per decenni le Plasmacellule a Lunga Vita (LLPC)?',
    back: 'Migrano nel midollo osseo attirate da CXCL12 tramite il recettore CXCR4. Nelle nicchie stromali sono mantenute vive da citochine trofiche come APRIL (via recettore BCMA) e IL-6.',
    category: 'Cellulare'
  },
  {
    id: 'fc-lez13-12',
    front: 'Qual è il valore immunologico protettivo delle cellule B memoria GC-indipendenti rispetto a quelle ipermutate?',
    back: 'Possiedono geni V non mutati o poco mutati con affinità moderata ma ampia plasticità: sono essenziali per neutralizzare varianti mutate del patogeno sfuggite agli anticorpi ultraspecifici (es. varianti SARS-CoV-2).',
    category: 'Clinica'
  }
];
