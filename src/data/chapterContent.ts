export interface NobelMilestone {
  year: number;
  scientists: string;
  discovery: string;
  clinicalImpact: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  clinicalPearl: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: 'Fondamenti' | 'Cellulare' | 'Patologia' | 'Terapia' | 'Molecolare' | 'Clinica';
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'Innata' | 'Adattativa' | 'Clinica' | 'Molecolare';
}

export const NOBEL_MILESTONES: NobelMilestone[] = [
  {
    year: 1908,
    scientists: "Il'ja Mečnikov & Paul Ehrlich",
    discovery: "Immunità cellulare (fagocitosi) e teorie umorali (anticorpi/catene laterali)",
    clinicalImpact: "Fondazione concettuale della cooperazione tra fagociti e fattori solubili sierici."
  },
  {
    year: 1984,
    scientists: "Georges Köhler & César Milstein",
    discovery: "Tecnologia degli ibridomi per la produzione di anticorpi monoclonali (mAbs)",
    clinicalImpact: "Rivoluzione delle terapie biologiche mirate in oncologia, reumatologia e infettivologia."
  },
  {
    year: 1996,
    scientists: "Peter C. Doherty & Rolf M. Zinkernagel",
    discovery: "Specificità dell'immunità cellulo-mediata e restrizione MHC",
    clinicalImpact: "Comprensione del riconoscimento T-cellulare di antigeni virali associati a molecole self."
  },
  {
    year: 2011,
    scientists: "Ralph M. Steinman (con B. Beutler e J. Hoffmann)",
    discovery: "Scoperta delle cellule dendritiche e del loro ruolo nell'immunità adattativa",
    clinicalImpact: "Chiarimento del ponte cruciale tra immunità innata e presentazione dell'antigene ai linfociti naïve."
  },
  {
    year: 2018,
    scientists: "James P. Allison & Tasuku Honjo",
    discovery: "Terapia oncologica basata sull'inibizione dei checkpoint immunitari negativi (CTLA-4, PD-1)",
    clinicalImpact: "Rimozione dei freni inibitori sui linfociti T per sbloccare la distruzione dei tumori avanzati."
  },
  {
    year: 2023,
    scientists: "Katalin Karikó & Drew Weissman",
    discovery: "Modifiche nucleosidiche dell'mRNA che sopprimono l'attivazione infiammatoria aspecifica",
    clinicalImpact: "Piattaforma tecnologica salvavita per i vaccini a mRNA sintetico anti-COVID-19 e future terapie geniche."
  }
];

export const TH_POLARIZATIONS = [
  {
    type: "Th1",
    inducing: "IL-12, IFN-γ",
    masterTF: "T-bet",
    effectorCytokines: "IFN-γ, TNF-β",
    targets: "Patogeni intracellulari (virus, micobatteri, parassiti endocellulari)",
    pathology: "Malattie autoimmuni organo-specifiche, danno infiammatorio cronico",
    description: "Attiva potentemente l'attività microbicida dei macrofagi (M1) attraverso il rilascio di IFN-γ e promuove la produzione di IgG opsonizzanti."
  },
  {
    type: "Th2",
    inducing: "IL-4",
    masterTF: "GATA-3",
    effectorCytokines: "IL-4, IL-5, IL-13",
    targets: "Elminti parassiti, microbi extracellulari alle superfici mucose",
    pathology: "Allergie, atopia, asma bronchiale, ipersensibilità di Tipo I",
    description: "Stimola lo switch isotipico verso le IgE (via IL-4/IL-13), recluta ed attiva gli eosinofili (via IL-5) e incrementa la secrezione mucosa."
  },
  {
    type: "Th17",
    inducing: "IL-6, IL-23, TGF-β",
    masterTF: "RORγt",
    effectorCytokines: "IL-17A, IL-17F, IL-22",
    targets: "Batteri extracellulari, funghi (es. Candida albicans)",
    pathology: "Psoriasi, sclerosi multipla, spondiloartriti, malattie infiammatorie croniche intestinali",
    description: "Favorisce il reclutamento massivo di neutrofili nei focolai flogistici e induce peptidi antimicrobici epiteliali."
  },
  {
    type: "Tfh (Follicolari)",
    inducing: "IL-6, IL-21",
    masterTF: "Bcl-6",
    effectorCytokines: "IL-21, IL-4",
    targets: "Assistenza T-B cooperativa nei centri germinativi",
    pathology: "Generazione di autoanticorpi patogeni in lupus (LES) e connettiviti",
    description: "Risiede nei follicoli secondari e fornisce il segnale CD40L e citochinico indispensabile per ipermutazione somatica e switch isotipico dei linfociti B."
  },
  {
    type: "Treg (Regolatori)",
    inducing: "TGF-β, IL-2",
    masterTF: "FoxP3",
    effectorCytokines: "IL-10, TGF-β, IL-35",
    targets: "Autotolleranza periferica, soppressione dell'infiammazione",
    pathology: "Sindrome IPEX in caso di mutazione di FoxP3; soppressione immunitaria anti-tumorale",
    description: "Controlla le risposte dei linfociti autoreattivi scampati alla tolleranza centrale e placa la flogosi a guarigione avvenuta."
  }
];

export const GELL_COOMBS_DATA = [
  {
    type: "I",
    name: "Immediata (IgE-mediata / Atopica)",
    mediator: "IgE specifiche legate a recettori FcεRI",
    effectorCells: "Mastociti tessutali, basofili circolanti, eosinofili (fase tardiva)",
    physiopathology: "Il cross-linking dell'antigene con le IgE su mastociti provoca degranulazione immediata di istamina, proteasi e successiva sintesi di leucotrieni (LTC4, LTD4, LTE4) e prostaglandine (PGD2).",
    examples: ["Rinite allergica stagionale", "Asma bronchiale estrinseco", "Angioedema acuto", "Shock anafilattico sistemico"],
    timing: "Secondi a minuti (fase precoce); 4-8 ore (fase tardiva)",
    therapeuticTarget: "Antistaminici H1, adrenalina per via intramuscolare (anafilassi), corticosteroidi, anticorpi anti-IgE (Omalizumab)"
  },
  {
    type: "II",
    name: "Citotossica mediata da Anticorpi",
    mediator: "IgG o IgM dirette contro antigeni di superficie cellulare o matrice fissa",
    effectorCells: "Macrofagi, cellule NK (ADCC), sistema del complemento (C3b, MAC)",
    physiopathology: "Legame di anticorpi ad antigeni fissi sulla superficie cellulare; danno mediato da lisi complementare (MAC), opsonizzazione e fagocitosi, oppure alterazione funzionale della segnalazione recettoriale senza lisi.",
    examples: ["Malattia di Graves (anticorpi stimolanti il recettore TSHR)", "Miastenia Gravis (Ab anti-AChR)", "Reazioni emolitiche trasfusionali (ABO/Rh)", "Anemia emolitica autoimmune (AIHA)"],
    timing: "Ore o giorni",
    therapeuticTarget: "Plasmaferesi, immunoglobuline endovena (IVIG), immunosoppressori, splenectomia (nelle citopenie)"
  },
  {
    type: "III",
    name: "Mediata da Immunocomplessi",
    mediator: "Immunocomplessi solubili circolanti (Ag solubile + IgG o IgM)",
    effectorCells: "Neutrofili reclutati da anafilatossine C3a/C5a, piastrine, cellule endoteliali",
    physiopathology: "Formazione di complessi antigene-anticorpo in leggero eccesso di antigene che non vengono rimossi dal sistema reticolo-endoteliale e precipitano nella parete dei piccoli vasi ematici, glomeruli e sinovia, innescando vasculite necrotizzante.",
    examples: ["Lupus Eritematoso Sistemico (LES - nefrite lupica)", "Glomerulonefrite post-streptococcica", "Malattia da siero acuta", "Fenomeno di Arthus"],
    timing: "Ore o settimane (spesso 6-12 giorni dall'esposizione sistemica)",
    therapeuticTarget: "Corticosteroidi ad alte dosi, idrossiclorochina, micofenolato mofetile, rituximab (anti-CD20)"
  },
  {
    type: "IV",
    name: "Cellulo-mediata o Ritardata (DTH)",
    mediator: "Linfociti T sensibilizzati (CD4+ Th1/Th17 e CD8+ citotossici); Indipendente da anticorpi",
    effectorCells: "Macrofagi attivati da IFN-γ, linfociti CTL degranulanti",
    physiopathology: "I linfociti T sensibilizzati riconoscono l'antigene ripresentato dalle APC e rilasciano chemochine e citochine pro-infiammatorie che richiamano e attivano cronicamente macrofagi tissutali, culminando in lisi cellulare o formazione di granulomi.",
    examples: ["Artrite Reumatoide (flogosi sinoviale erosiva)", "Dermatite allergica da contatto (Nichel, edera velenosa)", "Reazione alla tubercolina (test di Mantoux)", "Diabete mellito di Tipo 1"],
    timing: "24-72 ore (reazione ritardata)",
    therapeuticTarget: "Farmaci biologici anti-TNF-α (Infliximab, Adalimumab), inibitori di JAK chinasi, inibitori di IL-6R, metotrexato"
  }
];

export const EXTRAVASATION_STEPS = [
  {
    step: 1,
    title: "1. Rolling (Rotolamento)",
    mechanism: "Interazione a bassa affinità tra Selectine endoteliali (P-selectina, E-selectina) e residui glucidici sialilati (Sialil-Lewis X / PSGL-1) sui leucociti.",
    dynamics: "Le forze di taglio emostatiche staccano e riattaccano transitoriamente i legami, rallentando drasticamente il moto del leucocita lungo l'endotelio attivato.",
    molecularPlayers: "P-selectina (rilasciata dai corpi di Weibel-Palade), E-selectina, Sialyl-Lewis X (sLeX), PSGL-1."
  },
  {
    step: 2,
    title: "2. Attivazione Chemochinica",
    mechanism: "Le chemochine infiammatorie (es. CXCL8/IL-8) esposte sulla superficie luminale legano specifici recettori a 7 domini transmembrana (GPCR) del leucocita.",
    dynamics: "La cascata intracellulare mediata da proteine G induce un rapido switch conformazionale 'inside-out' delle integrine leucocitarie, portandole dallo stato ripiegato a bassa affinità allo stato esteso ad altissima affinità.",
    molecularPlayers: "CXCL8 (IL-8), CCL2, Recettori CXCR1/2, CCR2, Proteine G eterotrimeriche."
  },
  {
    step: 3,
    title: "3. Adesione Stabile (Arresto)",
    mechanism: "Legame ad alta affinità tra le integrine attivate (es. LFA-1: αLβ2, Mac-1: αMβ2) e le molecole di adesione endoteliale della superfamiglia delle immunoglobuline (ICAM-1, VCAM-1).",
    dynamics: "L'adesione supera la forza propulsiva del flusso ematico: il leucocita si arresta completamente e si appiattisce contro il letto endoteliale.",
    molecularPlayers: "LFA-1 (CD11a/CD18), Mac-1 (CD11b/CD18), VLA-4 (α4β1), ICAM-1 (CD54), VCAM-1 (CD106)."
  },
  {
    step: 4,
    title: "4. Diapedesi (Transmigrazione)",
    mechanism: "Il leucocita estende pseudopodi attraverso le giunzioni intercellulari tra cellule endoteliali adiacenti guidato da molecole giunzionali.",
    dynamics: "Rilascio locale di collagenasi e metalloproteasi per superare la membrana basale vascolare e migrare verso il gradiente chemiotattico del focolaio lesivo.",
    molecularPlayers: "PECAM-1 (CD31), CD99, Giunzioni serrate endoteliali, Metalloproteinasi di matrice (MMP-9, MMP-2)."
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question: "Quale meccanismo patogenetico spiega la comparsa di forme critiche e letali di COVID-19 in una quota significativa di pazienti, come descritto nelle anomalie autoimmuni atipiche?",
    options: [
      "Presenza di autoanticorpi neutralizzanti diretti contro gli Interferoni di tipo I (IFN-α, IFN-ω)",
      "Iperattivazione selettiva dei linfociti Th2 con ipersecrezione di IL-4",
      "Mutazione autosomica recessiva del gene codificante RAG-1 e RAG-2",
      "Produzione di anticorpi opsonizzanti stimolanti il recettore TSHR"
    ],
    correctIndex: 0,
    explanation: "Circa il 10% dei pazienti con infezione critica da SARS-CoV-2 presenta autoanticorpi neutralizzanti diretti contro gli interferoni di tipo I. Questo abolisce la tempestiva difesa antivirale innata precoce, consentendo una diffusione virale polmonare incontrollata.",
    clinicalPearl: "A differenza delle forme lievi o asintomatiche, questi autoanticorpi anti-citochina impediscono l'espressione dei geni antivirale ISG (*Interferon-Stimulated Genes*)."
  },
  {
    id: "q2",
    question: "Nella classificazione di Gell e Coombs, qual è la caratteristica distintiva che differenzia l'Ipersensibilità di Tipo II da quella di Tipo III?",
    options: [
      "Il Tipo II è mediato da cellule T, mentre il Tipo III è mediato da IgE",
      "Nel Tipo II gli anticorpi riconoscono antigeni fissi sulla superficie cellulare o tissutale; nel Tipo III gli antigeni sono solubili e formano immunocomplessi circolanti precipitanti",
      "Il Tipo II richiede sempre la formazione di granulomi epitelioidi, assenti nel Tipo III",
      "Il Tipo II è un'ipersensibilità immediata che insorge in pochi minuti, il Tipo III è sempre tardiva a 72 ore"
    ],
    correctIndex: 1,
    explanation: "Nel Tipo II l'antigene è una struttura insolubile fissata sulla superficie cellulare (es. recettore TSHR nel Graves, antigeni eritrocitari nelle trasfusioni). Nel Tipo III l'antigene è solubile; la formazione di complessi antigene-anticorpo circolanti e la loro precipitazione vascolare innesca vasculite necrotizzante.",
    clinicalPearl: "Esempi classici: Malattia di Graves (Tipo II con alterazione recettoriale funzionale); Nefrite Lupica nel LES (Tipo III con precipitazione glomerulare di immunocomplessi DNA-antiDNA)."
  },
  {
    id: "q3",
    question: "Qual è la base biochimica e citotossica dell'Immunodeficienza Combinata Grave (SCID) causata da deficit dell'enzima Adenosina Deaminasi (ADA)?",
    options: [
      "Deficit di sintesi di anticorpi di classe IgA da alterata transcitocitosi mucosa",
      "Mancata espressione di molecole MHC di classe II sulle cellule presentanti l'antigene",
      "Accumulo intracellulare di dATP citotossico che blocca la replicazione del DNA nei precursori linfocitari in attiva divisione",
      "Degenerazione selettiva dei soli granulociti neutrofili periferici"
    ],
    correctIndex: 2,
    explanation: "L'assenza di ADA nella via di salvataggio delle purine porta all'accumulo anomalo di metaboliti deossiribosilati, in primis dATP. Il dATP inibisce la ribonucleotide reduttasi ed è selettivamente letale per i progenitori linfoidi immaturi in attiva moltiplicazione nel midollo e nel timo.",
    clinicalPearl: "Il trattamento attuale include il trapianto allogenico di midollo e la terapia genica con cellule staminali ematopoietiche trasdotte con gene ADA normale."
  },
  {
    id: "q4",
    question: "Qual è il razionale terapeutico dell'impiego degli inibitori dell'asse PD-1/PD-L1 (Premio Nobel ad Allison e Honjo) nell'immunoterapia oncologica?",
    options: [
      "Aumentare la produzione di istamina da parte dei mastociti intratumorali",
      "Rimuovere il freno inibitorio che inattiva i linfociti T citotossici (CD8+), ripristinandone la capacità lisi-mediata contro le cellule neoplastiche",
      "Neutralizzare direttamente l'oncogene KRAS mutato all'interno del nucleo tumorale",
      "Indurre l'apoptosi dei linfociti T per evitare la comparsa di malattie autoimmuni"
    ],
    correctIndex: 1,
    explanation: "Le cellule tumorali esprimono spesso PD-L1 per legare il recettore PD-1 sui linfociti T infiltranti e indurre esaurimento cellulare (T-cell exhaustion). L'uso di anticorpi monoclonali neutralizzanti anti-PD-1 o anti-PD-L1 riattiva i cloni T citotossici capaci di distruggere il tumore.",
    clinicalPearl: "I tumori con difetti del mismatch repair (dMMR/MSI-high) presentano un altissimo carico mutazionale e neoantigenico, rispondendo in modo spettacolare a questa terapia."
  },
  {
    id: "q5",
    question: "Quale fattore di trascrizione definisce la polarizzazione dei linfociti T CD4+ verso il profilo Th1, e quale citochina ne costituisce il principale mediatore effettore?",
    options: [
      "GATA-3 e Interleuchina-4 (IL-4)",
      "RORγt e Interleuchina-17 (IL-17)",
      "T-bet e Interferone-gamma (IFN-γ)",
      "FoxP3 e Fattore di Crescita Trasformante beta (TGF-β)"
    ],
    correctIndex: 2,
    explanation: "I linfociti Th1 sono guidati dal master regulator T-bet indotto da IL-12 e IFN-γ; secernono elevate quantità di IFN-γ, fondamentale per l'attivazione microbicida dei macrofagi contro patogeni intracellulari.",
    clinicalPearl: "GATA-3 definisce i Th2, RORγt i Th17, Bcl-6 i Tfh e FoxP3 i Treg."
  },
  {
    id: "q6",
    question: "Durante la cascata del reclutamento leucocitario, quale evento è direttamente responsabile della transizione tra il rolling (rotolamento) e l'adesione stabile all'endotelio?",
    options: [
      "Il cambio conformazionale ad alta affinità delle integrine (es. LFA-1) indotto dalla segnalazione GPCR delle chemochine",
      "La clivatura proteolitica irreversibile del recettore CD31/PECAM-1",
      "La distruzione delle cellule endoteliali ad opera della perforina rilasciata dai mastociti",
      "L'espulsione di trappole extracellulari di DNA da parte dei neutrofili (NETs)"
    ],
    correctIndex: 0,
    explanation: "Le chemochine esposte sull'endotelio legano i recettori GPCR del leucocita, scatenando una segnalazione intracellulare ('inside-out signaling') che trasforma le integrine (come LFA-1) dallo stato piegato a bassa affinità allo stato esteso ad altissima affinità per ICAM-1.",
    clinicalPearl: "I difetti genetici della subunità β2 delle integrine (CD18) causano la LAD-1 (Leukocyte Adhesion Deficiency-1), caratterizzata da mancato reclutamento dei neutrofili e assenza di formazione di pus."
  }
];

export const FLASHCARDS: Flashcard[] = [
  {
    id: "fc1",
    front: "Quali sono i due organi linfoidi primari e quale funzione fondamentale svolgono?",
    back: "Midollo Osseo e Timo. Sono le sedi generative della produzione e dell'educazione (selezione positiva e negativa / tolleranza centrale) rispettivamente dei linfociti B e dei linfociti T.",
    category: "Cellulare"
  },
  {
    id: "fc2",
    front: "Cosa stabilisce la Teoria della Selezione Clonale?",
    back: "Ciascun linfocita maturo possiede un recettore antigenico unico pre-esistente all'incontro con l'antigene. L'antigene seleziona e stimola la proliferazione e differenziazione unicamente del clone dotato del recettore complementare.",
    category: "Fondamenti"
  },
  {
    id: "fc3",
    front: "Come agisce la Tempesta Citochinica (Cytokine Storm) a livello emodinamico e sistemico?",
    back: "L'ipersecrezione massiva di TNF-α, IL-1 e IL-6 induce alterazione dell'endotelio, perdita della funzione di barriera (capillary leak), ipotensione refrattaria, CID (coagulazione intravascolare disseminata) e insufficienza multiorgano (MOF).",
    category: "Patologia"
  },
  {
    id: "fc4",
    front: "Qual è la differenza cinetica e isotipica tra risposta immunitaria umorale primaria e secondaria?",
    back: "La primaria ha un lungo periodo di latenza (lag phase) e produce basse quantità di IgM a bassa affinità. La secondaria ha latenza brevissima, rapida espansione clonale, ed elevati titoli di IgG ad alta affinità derivate da ipermutazione somatica.",
    category: "Fondamenti"
  },
  {
    id: "fc5",
    front: "In cosa differisce il target farmacologico tra Tocilizumab e farmaci anti-PD-1?",
    back: "Tocilizumab blocca il recettore di IL-6 (IL-6R) per spegnere l'iperinfiammazione sistemica (tempesta citochinica). I farmaci anti-PD-1 (es. Pembrolizumab) rimuovono il freno inibitorio sui linfociti T per potenziare l'uccisione del tumore.",
    category: "Terapia"
  },
  {
    id: "fc6",
    front: "Cosa afferma l'Ipotesi dell'Igiene nell'ambito dell'esposoma moderno?",
    back: "Una ridotta esposizione microbica nei primi anni di vita in ambienti iper-sanificati ostacola la corretta stimolazione dei circuiti regolatori (Treg, microbioma), favorendo risposte immunitarie sbilanciate verso allergie e autoimmunità.",
    category: "Patologia"
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "BCR (B-Cell Receptor)",
    definition: "Complesso recettoriale espresso sulla superficie dei linfociti B, costituito da una immunoglobulina di membrana associata alle catene di trasduzione del segnale Igα/Igβ.",
    category: "Adattativa"
  },
  {
    term: "TCR (T-Cell Receptor)",
    definition: "Eterodimero proteico (solitamente catene α e β) espresso sui linfociti T, deputato al riconoscimento di peptidi antigenici presentati in associazione alle molecole MHC.",
    category: "Adattativa"
  },
  {
    term: "Epitopo (Determinante Antigenico)",
    definition: "Porzione specifica di una molecola macromolecolare antigenica riconosciuta con elevata affinità dal sito di legame (paratope) di un anticorpo o da un TCR.",
    category: "Molecolare"
  },
  {
    term: "Ricombinazione V(D)J",
    definition: "Meccanismo di riarrangiamento somatico del DNA guidato dagli enzimi ricombinasi RAG-1 e RAG-2, responsabile della generazione dell'enorme repertorio recettoriale clonale primario.",
    category: "Molecolare"
  },
  {
    term: "Opsonizzazione",
    definition: "Processo mediante il quale particelle o microrganismi vengono rivestiti da opsonine (es. frammento Fc di IgG, C3b del complemento), aumentandone l'efficienza di fagocitosi da parte di macrofagi e neutrofili.",
    category: "Innata"
  },
  {
    term: "Complesso di Attacco alla Membrana (MAC)",
    definition: "Struttura citotossica terminale formata dai componenti C5b, C6, C7, C8 e polimeri di C9 della cascata complementare, che perfora il doppio strato lipidico patogeno inducendone lisi osmotica.",
    category: "Innata"
  },
  {
    term: "Checkpoint Immunitario",
    definition: "Molecole di membrana con funzione recettoriale inibitoria (es. CTLA-4, PD-1) deputate a modulare e limitare l'ampiezza della risposta T-cellulare per preservare l'autotolleranza periferica.",
    category: "Clinica"
  },
  {
    term: "SCID (Immunodeficienza Combinata Grave)",
    definition: "Quadro congenito letale caratterizzato dal mancato sviluppo funzionale sia dei linfociti T che dei linfociti B (es. deficit di Adenosina Deaminasi ADA o mutazione della catena γc).",
    category: "Clinica"
  },
  {
    term: "Immune Repertoire Sequencing",
    definition: "Tecnologia di sequenziamento ad alta risoluzione (NGS) focalizzata sulle porzioni ipervariabili CDR3 dei geni riarrangiati per TCR e BCR per valutare l'ampiezza clonale della risposta.",
    category: "Molecolare"
  },
  {
    term: "Citometria di Massa (CyTOF)",
    definition: "Metodologia proteomica single-cell che impiega anticorpi coniugati con isotopi metallici stabili di terre rare, permettendo la quantificazione simultanea di oltre 40-50 parametri per cellula.",
    category: "Molecolare"
  }
];
