import { QuizQuestion, Flashcard } from './chapterContent';

export interface CytokineProperty {
  type: 'Pleiotropia' | 'Ridondanza' | 'Sinergia' | 'Antagonismo';
  cytokines: string;
  targetCells: string;
  effect: string;
  molecularMechanism: string;
}

export const CYTOKINE_PROPERTIES_DATA: CytokineProperty[] = [
  {
    type: 'Pleiotropia',
    cytokines: 'IL-4',
    targetCells: 'Linfocita B, Timociti, Mastociti',
    effect: 'Attivazione e differenziamento (B); maturazione (Timociti); crescita (Mastociti)',
    molecularMechanism: 'La stessa citochina si lega al recettore IL-4R su linee cellulari distinte, attivando programmi trascrizionali tessuto-specifici differenti mediati da STAT6.'
  },
  {
    type: 'Ridondanza',
    cytokines: 'IL-2, IL-4, IL-5',
    targetCells: 'Linfociti B',
    effect: 'Proliferazione cellulare',
    molecularMechanism: 'Citochine diverse legano recettori distinti che convergono sulle medesime vie proliferative intracellulari (es. attivazione della via MAPK/ERK e PI3K/Akt).'
  },
  {
    type: 'Sinergia',
    cytokines: 'IL-4 + IL-5',
    targetCells: 'Linfociti B',
    effect: 'Induzione marcata dello switch isotipico verso la produzione di IgE',
    molecularMechanism: 'IL-4 apre e decondensa il locus genico della catena costante Cε tramite STAT6, mentre IL-5 fornisce segnali cooperativi di sopravvivenza ed espansione delle cellule secernenti IgE.'
  },
  {
    type: 'Antagonismo',
    cytokines: 'IFN-γ vs IL-4',
    targetCells: 'Linfociti B',
    effect: 'IFN-γ blocca lo switch a IgE indotto da IL-4',
    molecularMechanism: 'IFN-γ attiva STAT1 e T-bet, che reprimono la trascrizione indotta da STAT6 al promotore del gene della catena epsilon, favorendo invece lo switch a IgG2a/IgG1 protettive.'
  }
];

export const CHEMOKINE_CLASSES_DATA = [
  {
    classType: "CXC (α-chemochine)",
    structure: "Due cisteine amminoterminali separate da un singolo amminoacido arbitrario (C-X-C)",
    primaryLigands: "CXCL8 (Interleuchina-8), CXCL12 (SDF-1)",
    mainReceptors: "CXCR1, CXCR2, CXCR4",
    targetCells: "Neutrofili, Linfociti T, Linfociti B, Precursori emopoietici",
    clinicalPathology: "CXCL8 guida il reclutamento massivo dei neutrofili nella flogosi acuta; CXCR4 funge da corecettore per l'ingresso delle varianti T-tropiche (X4) di HIV-1."
  },
  {
    classType: "CC (β-chemochine)",
    structure: "Due cisteine amminoterminali direttamente adiacenti, prive di residui interposti (C-C)",
    primaryLigands: "CCL2 (MCP-1), CCL3 (MIP-1α), CCL5 (RANTES)",
    mainReceptors: "CCR2, CCR5, CCR3",
    targetCells: "Monociti/Macrofagi, Linfociti T memoria, Eosinofili, Cellule Dendritiche",
    clinicalPathology: "CCR5 è espresso sui macrofagi e linfociti T ed è il corecettore obbligato impiegato dai ceppi macrofago-tropici (R5) di HIV-1; mutazioni CCR5-Δ32 conferiscono resistenza all'infezione."
  },
  {
    classType: "C (γ-chemochine)",
    structure: "Conservano una singola cisteina amminoterminale (mancanza della prima e terza cisteina canonica)",
    primaryLigands: "XCL1 (Linfotactina-α), XCL2 (Linfotactina-β)",
    mainReceptors: "XCR1",
    targetCells: "Linfociti T e Cellule Natural Killer (NK), Cellule Dendritiche cross-presentanti (cDC1)",
    clinicalPathology: "Asse fondamentale per il reclutamento reciproco tra cellule T CD8+ attivate e cellule dendritiche specializzate nella presentazione crociata di antigeni tumorali e virali."
  },
  {
    classType: "CX3C (δ-chemochine)",
    structure: "Due residui di cisteina separati da tre amminoacidi arbitrari (C-X-X-X-C); molecola transmembrana a stelo mucinico",
    primaryLigands: "CX3CL1 (Frattalchina / Neurotactina)",
    mainReceptors: "CX3CR1",
    targetCells: "Monociti non classici 'patrolling', Linfociti T citotossici, Cellule NK, Microglia cerebrale",
    clinicalPathology: "Funziona sia come molecola di adesione salda quando legata alla membrana endoteliale, sia come chemochina chemiotattica solubile dopo clivaggio da metalloproteasi (ADAM10/17)."
  }
];

export const QUIZ_LEZIONE_2: QuizQuestion[] = [
  {
    "id": "l2-q1",
    "question": "Che cosa si intende per 'Trained Immunity' nell'ambito della risposta immunitaria innata, e su quali meccanismi biologici si fonda?",
    "options": [
      "Una memoria immunologica aspecifica delle cellule innate (monociti, macrofagi, NK) mediata da riprogrammazione metabolica e modificazioni epigenetiche",
      "La proliferazione clonale dei soli linfociti T helper con riarrangiamento somatico V(D)J",
      "La sintesi esclusiva di immunoglobuline di classe IgE da parte dei basofili",
      "L'eliminazione apoptotica irreversibile di tutte le cellule dendritiche residenti"
    ],
    "correctIndex": 0,
    "explanation": "La Trained Immunity è una forma di memoria dell'immunità innata descritta nei primi anni 2000. Essa poggia su modifiche epigenetiche della cromatina (es. metilazione/acetilazione istonica) e riprogrammazioni metaboliche (es. shift verso la glicolisi aerobia) che consentono a macrofagi e cellule NK di rispondere in modo più rapido e vigoroso a successivi stimoli infettivi eterologhi.",
    "clinicalPearl": "La vaccinazione con BCG (bacillo di Calmette-Guérin) è il modello classico che stimola una potente trained immunity con protezione crociata verso infezioni virali e batteriche non correlate."
  },
  {
    "id": "l2-q2",
    "question": "Quale rilevanza clinica riveste la condivisione della 'catena comune gamma' (γc o CD132) da parte di recettori per citochine come IL-2, IL-4, IL-7 e IL-15?",
    "options": [
      "Permette la fagocitosi esclusiva di batteri capsulati da parte dei neutrofili",
      "La sua mutazione genetica inattiva simultaneamente molteplici citochine, provocando la SCID legata al cromosoma X (X-SCID) con assenza di linfociti T ed NK",
      "Induce una produzione massiva e patologica di anticorpi anti-recettore del TSH",
      "Determina unicamente la sintesi di citochine appartenenti alla famiglia delle chemochine CX3C"
    ],
    "correctIndex": 1,
    "explanation": "La catena γc (CD132) è la subunità trasduttrice del segnale condivisa da IL-2, IL-4, IL-7, IL-9, IL-15 e IL-21. Mutazioni con perdita di funzione del gene IL2RG sul cromosoma X causano la X-SCID: mancando il segnale di IL-7 si ha l'arresto dello sviluppo T nel timo, mentre senza IL-15 non maturano le cellule NK.",
    "clinicalPearl": "Poiché la catena gamma comune trasduce per via JAK3 intracellulare, i deficit di JAK3 presentano un fenotipo clinico identico (SCID autosomica recessiva)."
  },
  {
    "id": "l2-q3",
    "question": "Qual è la sequenza esatta degli eventi molecolari della via di trasduzione del segnale JAK-STAT a partire dal legame recettoriale della citochina?",
    "options": [
      "Dimerizzazione di STAT nel citosol -> attivazione di RAG-1 -> legame della citochina -> blocco di JAK",
      "Ingresso nucleare della citochina intatta -> taglio del DNA -> sintesi diretta di proteine SOCS",
      "Legame della citochina -> attivazione e autofosforilazione di JAK -> fosforilazione di tirosine sul recettore -> reclutamento di STAT via dominio SH2 -> fosforilazione e dimerizzazione di STAT -> traslocazione nel nucleo",
      "Attivazione dei recettori a 7 eliche -> rilascio di ioni calcio -> degradazione immediata del recettore"
    ],
    "correctIndex": 2,
    "explanation": "L'oligomerizzazione recettoriale indotta dalla citochina attiva le chinasi JAK che fosforilano il dominio intracellulare del recettore. STAT viene reclutato legando queste fosfotirosine tramite il suo dominio SH2; JAK fosforila quindi STAT, che si stacca, forma un omo o eterodimero e trasloca nel nucleo per attivare la trascrizione.",
    "clinicalPearl": "I farmaci 'jakinibi' (es. Tofacitinib, Ruxolitinib) inibiscono specificamente l'attività catalitica di JAK, bloccando alla radice l'iperinfiammazione in artrite reumatoide e mielofibrosi."
  },
  {
    "id": "l2-q4",
    "question": "In che modo le proteine SOCS (Suppressor of Cytokine Signaling) esercitano la loro funzione di regolazione a feedback negativo sulla via JAK-STAT?",
    "options": [
      "Aumentano indefinitamente l'emivita sierica delle chemochine infiammatorie",
      "Bloccano la fusione tra fagosoma e lisosoma nei granulociti neutrofili",
      "Promuovono la distruzione delle cellule endoteliali mediante rilascio di anafilatossina C5a",
      "Inibiscono direttamente l'attività chinasica di JAK, competono con STAT per i siti sul recettore e reclutano ligasi di ubiquitina per degradare JAK e recettore"
    ],
    "correctIndex": 3,
    "explanation": "I geni SOCS vengono espressi come risposta diretta all'attivazione di STAT. Le proteine SOCS contengono un dominio KIR che blocca l'attività catalitica di JAK, un dominio SH2 che compete stericamente con STAT, e un SOCS-box che recluta il macchinario di ubiquitinazione proteasomiale, spegnendo il segnale.",
    "clinicalPearl": "La mancata regolazione delle vie citochiniche per disfunzione di SOCS può determinare sindromi mieloproliferative croniche o risposte flogistiche devastanti."
  },
  {
    "id": "l2-q5",
    "question": "Nel contesto dell'infezione da virus dell'immunodeficienza umana (HIV), quale ruolo chiave svolgono i recettori per le chemochine a 7 alfa-eliche transmembrana?",
    "options": [
      "Fungono da corecettori obbligati (CCR5 per ceppi macrofago-tropici R5, CXCR4 per ceppi T-tropici X4) insieme a CD4 per la fusione virale",
      "Producono interferoni di tipo I per lisare l'involucro virale lipidico",
      "Bloccano irreversibilmente la trascrizione retrovirale tramite il motivo conservato DRY",
      "Impediscono la colonizzazione del timo da parte delle cellule staminali ematopoietiche"
    ],
    "correctIndex": 0,
    "explanation": "L'ingresso di HIV nelle cellule bersaglio richiede il legame primario di gp120 a CD4, seguito dall'interazione con un corecettore chemochinico: CCR5 (utilizzato dai ceppi R5 responsabili della trasmissione) o CXCR4 (ceppi X4 tipici delle fasi avanzate di progressione verso l'AIDS).",
    "clinicalPearl": "L'antagonista del CCR5 Maraviroc blocca l'ingresso dei ceppi R5; individui con la mutazione omozigote CCR5-Δ32 sono naturalmente resistenti all'infezione da ceppi R5."
  },
  {
    "id": "l2-q6",
    "question": "Quale dei seguenti scenari fisiopatologici illustra il ruolo dei linfociti T regolatori (Treg) rispettivamente nella gravidanza e nel microambiente tumorale?",
    "options": [
      "Sono assenti in gravidanza e provocano il rigetto del feto; nei tumori uccidono le cellule neoplastiche mediante rilascio di perforina",
      "In gravidanza aumentano fisiologicamente per garantire la tolleranza verso il feto (semi-allotrapianto non-self); nei tumori la loro presenza nell'infiltrato sopprime l'immunità antitumorale ed è un indice prognostico sfavorevole",
      "Inducono febbre sistemica per via endocrina legandosi all'ipotalamo",
      "Stimolano selettivamente i mastociti a degranulare massivamente istamina"
    ],
    "correctIndex": 1,
    "explanation": "In gravidanza i Treg sono essenziali per impedire il rigetto dell'embrione che esprime antigeni paterni non-self. Nel microambiente tumorale, le cellule neoplastiche reclutano Treg che sopprimono l'attività dei CTL e delle cellule NK, favorendo l'immunoevasione tumorale e associandosi a prognosi infausta.",
    "clinicalPearl": "Molte strategie immunoterapiche moderne mirano a depletare selettivamente i Treg intratumorali (es. tramite anti-CTLA-4 o anti-CD25) per ripristinare la risposta citotossica efficace."
  }
];

export const FLASHCARDS_LEZIONE_2: Flashcard[] = [
  {
    id: "fc-l2-1",
    front: "Quali sono i tre segnali obbligatori necessari per l'attivazione e il differenziamento completo di un linfocita T naïve?",
    back: "Segnale 1: Riconoscimento del complesso peptide-MHC da parte del TCR; Segnale 2: Costimolazione (es. CD28 sul linfocita T con B7-1/CD80 o B7-2/CD86 sull'APC); Segnale 3: Citochine polarizzanti rilasciate dall'APC che attivano fattori di trascrizione specifici.",
    category: "Cellulare"
  },
  {
    id: "fc-l2-2",
    front: "Cosa si intende per 'secrezione polarizzata' e 'breve emivita' delle citochine?",
    back: "Le citochine vengono rilasciate in modo direzionato verso la sinapsi con la cellula bersaglio per massimizzare la concentrazione locale. Hanno un'emivita di pochi minuti per circoscrivere l'azione flogistica ed evitare danno tossico sistemico incontrollato.",
    category: "Fondamenti"
  },
  {
    id: "fc-l2-3",
    front: "Quali citochine condividono la catena gamma comune (γc o CD132) e quale grave patologia causa la sua mutazione?",
    back: "IL-2, IL-4, IL-7, IL-9, IL-15 e IL-21. La mutazione del gene IL2RG provoca la SCID legata all'X (X-SCID), contrassegnata da assenza completa di linfociti T ed NK dovuta al mancato segnale di IL-7 e IL-15.",
    category: "Patologia"
  },
  {
    id: "fc-l2-4",
    front: "Descrivi il ruolo del motivo canonico 'DRY' nei recettori per chemochine a sette eliche transmembrana (GPCR).",
    back: "Il motivo amminoacidico conservato Asp-Arg-Tyr (DRY) nella seconda ansa intracellulare subisce un cambio conformazionale all'ingaggio della chemochina, consentendo l'accoppiamento con le proteine G eterotrimeriche e lo scambio GDP/GTP.",
    category: "Molecolare"
  },
  {
    id: "fc-l2-5",
    front: "Perché le chemochine vengono immobilizzate sui glicosamminoglicani (GAG) della matrice extracellulare e dell'endotelio?",
    back: "L'interazione elettrostatica con i GAG protegge le chemochine dalla degradazione proteolitica e impedisce che vengano spazzate via dal flusso ematico, creando un gradiente di concentrazione stabile solido-fasico per l'aptotassi leucocitaria.",
    category: "Molecolare"
  },
  {
    id: "fc-l2-6",
    front: "Come varia la suscettibilità alle infezioni respiratorie gravi (SARS-CoV-2, influenza) agli estremi della vita e perché?",
    back: "Presenta una curva a U: picchi di mortalità nel neonato (sistema immunitario immaturo, protetto transitoriamente da IgG materne e latte) e nell'anziano sopra i 60-65 anni a causa dell'immunosenescenza (involuzione timica, calo di cloni T naïve, flogosi cronica di basso grado).",
    category: "Clinica"
  }
];
