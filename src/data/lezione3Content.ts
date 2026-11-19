import { QuizQuestion, Flashcard } from './chapterContent';

export interface NeutrophilGranuleType {
  name: string;
  stage: string;
  enzymesAndContents: string[];
  membraneMarkers: string[];
  mobilizationTrigger: string;
  functionalRole: string;
}

export const NEUTROPHIL_GRANULES_DATA: NeutrophilGranuleType[] = [
  {
    name: "Granuli Primari (Azzurrofili)",
    stage: "Formati allo stadio di Promielocita",
    enzymesAndContents: [
      "Mieloperossidasi (MPO)",
      "Elastasi Neutrofila (NE)",
      "Catepsina G",
      "Defensine (α-defensine HNP1-4)",
      "BPI (Bactericidal Permeability-Increasing protein)",
      "Lisozima"
    ],
    membraneMarkers: ["CD63", "Lamp-1 (CD107a)"],
    mobilizationTrigger: "Stimoli infiammatori massivi, fusione preferenziale con il fagosoma (esocitosi extracellulare strettamente regolata per limitare il danno tissutale)",
    functionalRole: "Attività microbicida ossigeno-indipendente e generazione di acido ipocloroso (HOCl) tramite MPO nel fagosoma e durante la NETosi."
  },
  {
    name: "Granuli Secondari (Specifici)",
    stage: "Formati allo stadio di Mielocita e Metamielocita",
    enzymesAndContents: [
      "Lattoferrina (sequestratore di ferro libero Fe3+)",
      "Lipocalina associata alla gelatinasi neutrofila (NGAL)",
      "Lisozima",
      "Collagenasi (MMP-8)",
      "Fosfatasi Alcalina Leucocitaria (LAP)"
    ],
    membraneMarkers: ["CD66b", "gp91phox / p22phox (citocromo b558)", "Recettore per fMLF"],
    mobilizationTrigger: "Attivazione chemiotattica intermedia; degranulazione sia fagolisosomiale che nell'ambiente extracellulare",
    functionalRole: "Batteriostasi nutrizionale per deprivazione di ferro, degradazione del collagene di tipo I-III della matrice e apporto della subunità membranosa della NADPH ossidasi."
  },
  {
    name: "Granuli Terziari (Gelatinasici)",
    stage: "Formati allo stadio di Neutrofilo Bandato",
    enzymesAndContents: [
      "Gelatinasi B (MMP-9)",
      "Lisozima",
      "Arilsolfatasi"
    ],
    membraneMarkers: ["Mac-1 (CD11b/CD18)", "gp91phox"],
    mobilizationTrigger: "Basse concentrazioni di chemochine (CXCL8) e contatti endoteliali iniziali",
    functionalRole: "Degradazione selettiva della lamina basale e del collagene di tipo IV per consentire la diapedesi transendoteliale rapida."
  },
  {
    name: "Vescicole Secretorie",
    stage: "Formate per endocitosi nell'ultimo stadio di neutrofilo maturo segmentato",
    enzymesAndContents: [
      "Albumina e proteine plasmatiche",
      "Assenza di enzimi litici idrolasici"
    ],
    membraneMarkers: ["Integrine β2 (CD11a/CD18, CD11b/CD18)", "FPR1 (recettore fMLF)", "CD14", "CD16 (FcγRIIIB)", "Recettori per CXCL8 (CXCR1/CXCR2)"],
    mobilizationTrigger: "Primissimo stimolo flogistico (rolling endoteliale e citochine minime)",
    functionalRole: "Fusione istantanea con la membrana plasmatica per incrementare repentinamente la densità di recettori di adesione e chemiotassi sulla superficie cellulare."
  }
];

export interface RosStep {
  step: number;
  enzyme: string;
  reaction: string;
  reactants: string;
  products: string;
  description: string;
  clinicalNote: string;
}

export const ROS_CASCADE_STEPS: RosStep[] = [
  {
    step: 1,
    enzyme: "NADPH Ossidasi (Complesso NOX2 / Phox)",
    reaction: "2 O₂ + NADPH ➔ 2 O₂•⁻ + NADP⁺ + H⁺",
    reactants: "Ossigeno molecolare (O₂) + NADPH citosolico",
    products: "Anione Superossido (O₂•⁻)",
    description: "Trasferimento rapido di elettroni dal cofattore NADPH intracellulare all'ossigeno molecolare all'interno del fagosoma attraverso i gruppi eme del citocromo b558 (gp91phox e p22phox).",
    clinicalNote: "Mutazioni nel gene CYBB (che codifica gp91phox sul cromosoma X) sono responsabili del 65-70% dei casi di Malattia Granulomatosa Cronica (X-CGD)."
  },
  {
    step: 2,
    enzyme: "Superossido Dismutasi (SOD)",
    reaction: "2 O₂•⁻ + 2 H⁺ ➔ H₂O₂ + O₂",
    reactants: "Anione superossido + protoni",
    products: "Perossido di Idrogeno (H₂O₂)",
    description: "Dismutazione catalitica o spontanea del superossido instabile a perossido di idrogeno all'interno del lume fagolisosomiale, molecola diffusibile e ossidante intermedio.",
    clinicalNote: "Molti batteri (es. Staphylococcus aureus) producono catalasi per inattivare H₂O₂, rendendoli patogeni letali per i pazienti con CGD."
  },
  {
    step: 3,
    enzyme: "Mieloperossidasi (MPO)",
    reaction: "H₂O₂ + Cl⁻ + H⁺ ➔ HOCl + H₂O",
    reactants: "Perossido di idrogeno + ione cloruro (Cl⁻)",
    products: "Acido Ipocloroso (HOCl / principio attivo della candeggina)",
    description: "La MPO, rilasciata dai granuli azzurrofili nel fagosoma, catalizza l'alogenazione ossidativa generando acido ipocloroso e cloramina, i più potenti agenti microbicidi e battericidi dell'organismo umano.",
    clinicalNote: "Il deficit ereditario di MPO è relativamente comune (1:2000-4000) e decorre spesso asintomatico tranne in pazienti diabetici a rischio di infezioni disseminate da Candida."
  },
  {
    step: 4,
    enzyme: "Reazione di Fenton / Haber-Weiss",
    reaction: "Fe²⁺ + H₂O₂ ➔ Fe³⁺ + •OH + OH⁻",
    reactants: "Perossido di idrogeno + Ferro ferroso (Fe²⁺)",
    products: "Radicale Ossidrile (•OH)",
    description: "Generazione del radicale ossidrile altamente reattivo, privo di specificità, in grado di perossidare istantaneamente lipidi di membrana batterica, rompere filamenti di DNA e denaturare proteine enzimatiche.",
    clinicalNote: "La lattoferrina dei granuli secondari chela il ferro Fe3+, limitando la reazione di Fenton incontrollata nei tessuti dell'ospite per proteggere l'endotelio sano."
  }
];

export const QUIZ_LEZIONE_3: QuizQuestion[] = [
  {
    "id": "l3-q1",
    "question": "Qual è il difetto molecolare più frequente alla base della Malattia Granulomatosa Cronica (CGD) e quale test citofluorimetrico ne permette la diagnosi rapida?",
    "options": [
      "Mutazione della catena comune gamma CD132; test di agglutinazione al lattice",
      "Mutazione legata all'X del gene CYBB (codificante gp91phox); test alla diidrorodamina 123 (DHR) mediante citometria a flusso",
      "Deficit congenito dell'enzima adenosina deaminasi (ADA); dosaggio dell'interleuchina-2 sierica",
      "Assenza della catena beta-2 integrinica CD18; test del tempo di protrombina"
    ],
    "correctIndex": 1,
    "explanation": "La CGD è causata da mutazioni nei componenti del complesso NADPH ossidasi leucocitaria. La forma legata al cromosoma X (X-CGD, circa il 70% dei casi) è dovuta a mutazioni in CYBB (gp91phox). Il saggio quantitativo alla diidrorodamina (DHR) misura l'emissione di fluorescenza verde (rodamina 123) indotta dall'ossidazione dei ROS dopo stimolazione con PMA: nei pazienti CGD la fluorescenza non aumenta a causa della mancata produzione di superossido.",
    "clinicalPearl": "Le madri portatrici sane di X-CGD mostrano un profilo a 'doppio picco' (mosaicismo) alla citometria DHR a causa dell'inattivazione casuale del cromosoma X (fenomeno di Lyon)."
  },
  {
    "id": "l3-q2",
    "question": "Perché i pazienti affetti da Malattia Granulomatosa Cronica (CGD) sono selettivamente suscettibili a infezioni recidivanti sostenute da microrganismi catalasi-positivi (es. S. aureus, Aspergillus, Serratia marcescens)?",
    "options": [
      "Perché i batteri catalasi-positivi secernono elastasi che distrugge i granuli azzurrofili",
      "Perché la catalasi batterica degrada direttamente il recettore CD14 sui monociti",
      "Perché i batteri catalasi-negativi (come Streptococcus pneumoniae) producono H2O2 come metabolita che il neutrofilo CGD può 'rubare' e usare tramite la propria MPO per ucciderli, mentre i microrganismi catalasi-positivi degradano il proprio H2O2 privando il neutrofilo di substrato",
      "Perché i batteri catalasi-positivi presentano una capsula di acido ialuronico che impedisce la degranulazione terziaria"
    ],
    "correctIndex": 2,
    "explanation": "I batteri privi di catalasi (catalasi-negativi come Pneumococco e Streptococco) rilasciano perossido di idrogeno nei tessuti; la mieloperossidasi (MPO) del neutrofilo del paziente CGD è intatta e sfrutta questo H2O2 esogeno per sintetizzare HOCl e uccidere il microrganismo. Al contrario, i germi catalasi-positivi demoliscono il loro stesso H2O2 in acqua e ossigeno, lasciando il fagosoma privo di ROS.",
    "clinicalPearl": "I 5 patogeni 'faro' della CGD sono Staphylococcus aureus, Aspergillus fumigatus, Serratia marcescens, Burkholderia cepacia e Nocardia."
  },
  {
    "id": "l3-q3",
    "question": "Quale sequenza di eventi molecolari caratterizza la 'Suicidal NETosis' (formazione delle trappole extracellulari di neutrofili con morte cellulare)?",
    "options": [
      "Attivazione di RAG1/2 -> riarrangiamento dei loci immunoglobulinici -> secrezione di anticorpi IgA",
      "Esocitosi esclusiva di granuli di istamina senza rottura nucleare",
      "Ingresso in mitosi -> formazione del fuso mitotico -> clonazione cellulare periferica rapida",
      "Attivazione di NADPH ossidasi -> rilascio di calcio e attivazione di PAD4 (peptidil-arginina deiminasi 4) -> citrullinazione degli istoni -> traslocazione nucleare di elastasi (NE) e MPO -> decondensazione della cromatina -> rottura nucleare e della membrana con estrusione della rete di DNA decorata con peptidi antimicrobici"
    ],
    "correctIndex": 3,
    "explanation": "La NETosi suicida canonica richiede ROS dipendenti da NOX2, attivazione di PAD4 che converte le arginine cariche positivamente degli istoni in citrullina neutra (annullando l'attrazione elettrostatica con i gruppi fosfato del DNA). L'elastasi e la MPO migrano nel nucleo favorendo la decondensazione massiva. Infine la membrana si rompe estrudendo la rete di DNA.",
    "clinicalPearl": "Le NET contengono autoantigeni nucleari (DNA a doppio filamento, istoni citrullinati, LL-37): un clearance difettoso delle NET alimenta l'autoimmunità sistemica nel Lupus Eritematoso Sistemico (SLE)."
  },
  {
    "id": "l3-q4",
    "question": "Qual è la differenza fondamentale tra la Deficit di Adesione Leucocitaria di tipo 1 (LAD-1) e quella di tipo 2 (LAD-2)?",
    "options": [
      "LAD-1 è un difetto della catena beta-2 integrinica CD18 (mancata adesione salda); LAD-2 è un difetto del trasportatore di fucosio che impedisce la sintesi di Sialil-Lewis X (mancato rolling su selectine)",
      "LAD-1 causa assenza totale di neutrofili nel midollo; LAD-2 provoca aplasia midollare completa",
      "LAD-1 risponde al trattamento con penicillina orale; LAD-2 guarisce spontaneamente con la pubertà",
      "LAD-1 colpisce unicamente i linfociti B; LAD-2 riguarda solo i monociti non classici"
    ],
    "correctIndex": 0,
    "explanation": "LAD-1 è autosomica recessiva per mutazioni in ITGB2 (CD18), subunità comune delle integrine β2 (LFA-1, Mac-1): i neutrofili rotolano ma non riescono ad arrestarsi saldamente all'endotelio né a compiere diapedesi. LAD-2 (SLC35C1) altera il trasporto del fucosio nel Golgi, impedendo la fucosilazione dell'antigene sialil-Lewis X: i neutrofili non riescono a effettuare il rolling iniziale su E- e P-selectina.",
    "clinicalPearl": "Il segno clinico classico alla nascita di LAD-1 è il ritardato distacco del moncone ombelicale (>30 giorni) accompagnato da marcata neutrofilia ematica priva di pus nei tessuti (infezioni fredde)."
  },
  {
    "id": "l3-q5",
    "question": "Cosa accade alla riserva di neutrofili in corso di somministrazione di glucocorticoidi (es. desametasone o prednisone) e perché l'emocromo mostra leucocitosi neutrofila?",
    "options": [
      "I glucocorticoidi uccidono istantaneamente tutti i neutrofili tramite apoptosi Fas-mediata",
      "I glucocorticoidi provocano 'demarginazione', riducendo l'espressione di molecole di adesione endoteliali e favorendo il passaggio dei neutrofili dal pool marginale al pool circolante, oltre a ritardarne l'apoptosi",
      "I glucocorticoidi aumentano esclusivamente il numero di precursori staminali nel midollo osseo",
      "I glucocorticoidi inibiscono la sintesi di eritropoietina convertendo i globuli rossi in neutrofili"
    ],
    "correctIndex": 1,
    "explanation": "I neutrofili intravascolari sono divisi a metà tra pool circolante e pool marginale (cellule temporaneamente adese all'endotelio dei letti capillari polmonari e splenici). I glucocorticoidi down-regolano l'adesione endoteliale e allungano l'emivita del neutrofilo bloccandone l'apoptosi costitutiva, causando demarginazione e aumento del numero assoluto di neutrofili circolanti all'emocromo.",
    "clinicalPearl": "Questa neutrofilia cortisonica è 'sterile' e non si associa a deviazione a sinistra (assenza di forme immature come mielociti o promielociti)."
  },
  {
    "id": "l3-q6",
    "question": "Quale fattore di crescita ricombinante umano viene impiegato in oncologia per prevenire la neutropenia febbrile post-chemioterapia e quale recettore target stimola?",
    "options": [
      "Eritropoietina (EPO) su recettore EPOR",
      "Trombopoietina (TPO) sul recettore MPL",
      "G-CSF (Filgrastim / Lenograstim / Pegfilgrastim) su recettore G-CSFR (CD114), inducendo proliferazione, differenziamento e rilascio accelerato dal midollo osseo",
      "Interleuchina-4 sul recettore IL-4Rα"
    ],
    "correctIndex": 2,
    "explanation": "Il G-CSF umano ricombinante (Filgrastim) lega il recettore G-CSFR (CD114) presente sui progenitori mieloidi orientati e sui neutrofili maturi. Attiva vie proliferative (JAK-STAT3, MAPK) riducendo il tempo di transito midollare da 5-7 giorni a 24-48 ore, proteggendo i pazienti neutropenici da sepsi letali.",
    "clinicalPearl": "Il G-CSF viene utilizzato anche nei donatori sani per la mobilizzazione e raccolta di cellule staminali ematopoietiche CD34+ dal sangue periferico per trapianto allogenico."
  }
];

export const FLASHCARDS_LEZIONE_3: Flashcard[] = [
  {
    id: "fc-l3-1",
    front: "Quali sono i marcatori fenotipici cardinali della Cellula Staminale Ematopoietica (HSC) umana?",
    back: "CD34+ (molecola di adesione sierica), CD38- (assenza di marcatori di differenziamento), Lin- (assenza di antigeni di lignaggio maturo), CD90+ (Thy-1) e CD133+.",
    category: "Cellulare"
  },
  {
    id: "fc-l3-2",
    front: "Qual è la formula stechiometrica fondamentale del burst respiratorio catalizzato dal complesso NOX2?",
    back: "2 O₂ + NADPH ➔ 2 O₂•⁻ + NADP⁺ + H⁺. Gli elettroni attraversano FAD e due gruppi eme di gp91phox all'interno del fagosoma per ridurre l'ossigeno molecolare ad anione superossido.",
    category: "Molecolare"
  },
  {
    id: "fc-l3-3",
    front: "Cosa distingue la 'Vital NETosis' dalla 'Suicidal NETosis' nei neutrofili?",
    back: "La Vital NETosis si completa in 5-15 minuti tramite gemmazione di vescicole contenenti DNA o rilascio di DNA mitocondriale, lasciando il neutrofilo integro e ancora capace di chemiotassi e fagocitosi. La Suicidal NETosis richiede 2-4 ore, dipende da ROS/NOX2 e culmina nella lisi cellulare.",
    category: "Cellulare"
  },
  {
    id: "fc-l3-4",
    front: "Qual è il meccanismo biochimico d'azione dell'enzima PAD4 (peptidil-arginina deiminasi 4) nella decondensazione cromatinica?",
    back: "PAD4 catalizza la deiminazione dei residui di arginina a carica positiva (su istoni H3 e H4) convertendoli in citrullina neutra. La perdita della carica cationica dissolve i legami ionici con lo scheletro fosfodiesterico anionico del DNA, determinando lo srotolamento immediato della fibra cromatinica.",
    category: "Molecolare"
  },
  {
    id: "fc-l3-5",
    front: "Quale batterio è un prototipo di germe catalasi-positivo responsabile di ascessi letali nella Malattia Granulomatosa Cronica (CGD)?",
    back: "Staphylococcus aureus (ma anche Aspergillus, Serratia marcescens e Burkholderia cepacia). Distruggono il proprio perossido di idrogeno tramite catalasi, impedendo al neutrofilo privo di NOX2 di adoperare MPO per sintetizzare acido ipocloroso.",
    category: "Clinica"
  },
  {
    id: "fc-l3-6",
    front: "Cos'è il test della Diidrorodamina 123 (DHR) e come discrimina un soggetto sano, un malato di CGD e una portatrice eterozigote?",
    back: "Saggio in citometria a flusso: il DHR è non fluorescente e permeabile; ossidato da H₂O₂/MPO diventa rodamina 123 fluorescente verde. Sano: shift monomodale ad alta intensità; Malato CGD: nessun incremento di fluorescenza; Portatrice sana (X-CGD): bimodalità (due popolazioni cellulari distinte) per inattivazione del cromosoma X.",
    category: "Clinica"
  }
];
