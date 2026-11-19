import { QuizQuestion, Flashcard } from './chapterContent';

export interface DcSubsetDetail {
  subset: string;
  humanMarkers: string;
  mouseMarkers: string;
  transcriptionFactors: string;
  primaryFunction: string;
}

export const DC_SUBSETS_DATA: DcSubsetDetail[] = [
  {
    subset: 'cDC1 (Convenzionali Tipo 1)',
    humanMarkers: 'CD141 (BDCA3), CLEC9A, XCR1, CADM1',
    mouseMarkers: 'CD8α, CD103, CLEC9A, XCR1',
    transcriptionFactors: 'BATF3, IRF8, ID2',
    primaryFunction: 'Specialiste assolute della cross-presentazione di antigeni esogeni (da cellule apoptotiche, virus e tumori) su MHC di classe I per il priming dei linfociti T CD8+ citotossici. Secernono IL-12.'
  },
  {
    subset: 'cDC2 (Convenzionali Tipo 2)',
    humanMarkers: 'CD1c (BDCA1), CD11c, CD172a (SIRPα)',
    mouseMarkers: 'CD11b, CD172a (SIRPα)',
    transcriptionFactors: 'IRF4, ZEB2, KLF4',
    primaryFunction: 'Specializzate nella presentazione su MHC di classe II per l’attivazione e la polarizzazione dei linfociti T CD4+ helper (risposte Th2 e Th17 contro batteri extracellulari, funghi e parassiti).'
  },
  {
    subset: 'pDC (Dendritiche Plasmacitoidi)',
    humanMarkers: 'CD123 (IL-3Rα), CD303 (BDCA2), CD304',
    mouseMarkers: 'B220, Siglec-H, BST2 (mPDCA-1)',
    transcriptionFactors: 'TCF4 (E2-2), IRF7, BCL11A',
    primaryFunction: 'Sentinelle antivirali dell’immunità innata: esprimono alti livelli basali di TLR7 e TLR9 negli endosomi e producono quantità massicce di interferoni di tipo I (IFN-α/β) in risposta ad acidi nucleici virali.'
  },
  {
    subset: 'Cellule di Langerhans',
    humanMarkers: 'CD207 (Langerina), CD1a, E-caderina',
    mouseMarkers: 'CD207 (Langerina), CD11b, EpCAM',
    transcriptionFactors: 'Runx3, PU.1, ID2',
    primaryFunction: 'DC residenti nell’epidermide contenenti i granuli a racchetta di Birbeck. Captano antigeni cutanei per fagocitosi/pinocitosi, maturano e migrano nei linfonodi drenanti per il priming antigenico.'
  },
  {
    subset: 'mo-DC (Derivate da Monociti)',
    humanMarkers: 'CD14, CD11b, CD11c, CD206, CD1a',
    mouseMarkers: 'CD11b, Ly6C, F4/80',
    transcriptionFactors: 'IRF4, PU.1',
    primaryFunction: 'Differenziano rapidamente dai monociti circolanti nei focolai flogistici acuti in risposta a GM-CSF e IL-4. Esercitano intensa attività fagocitica e produzione locale di citochine pro-infiammatorie (TNF-α, IL-6).'
  }
];

export interface NonClassicalTCellDetail {
  population: string;
  presentingMolecule: string;
  antigenType: string;
  geneLocation: string;
  tcrDiversity: string;
  effectorFunction: string;
}

export const NON_CLASSICAL_T_CELLS_DATA: NonClassicalTCellDetail[] = [
  {
    population: 'Linfociti T Convenzionali',
    presentingMolecule: 'MHC di Classe I (HLA-A, B, C) e MHC di Classe II (HLA-DP, DQ, DR)',
    antigenType: 'Peptidi proteici lineari (8-10 aa per classe I; 13-18 aa per classe II)',
    geneLocation: 'Cromosoma 6p21 (Locus HLA, polimorfismo estremo)',
    tcrDiversity: 'Altissima diversità clonale (ricombinazione V(D)J casuale, specificità fine per singoli epitopi con memoria immunologica)',
    effectorFunction: 'CD8+ CTL (lisi perforina/granzima) e CD4+ Th (Th1, Th2, Th17, Tfh, Treg) con cinetica primaria di 7-14 giorni.'
  },
  {
    population: 'Cellule NKT (Natural Killer T)',
    presentingMolecule: 'CD1 (in particolare la molecola CD1d)',
    antigenType: 'Lipidi, glicolipidi e derivati della ceramide (es. α-galattosilceramide, lipidi micobatterici)',
    geneLocation: 'Cromosoma 1 (geni monomorfici e non polimorfi, non associati a HLA)',
    tcrDiversity: 'TCR semi-invariante (nell’uomo: catena Vα24-Jα18 riarrangiata con catene Vβ11 preferenziali)',
    effectorFunction: 'Risposta fulminea (minuti-ore): secrezione massiva simultanea di IFN-γ e IL-4; citotossicità antitumorale e contro patogeni intracellulari.'
  },
  {
    population: 'Cellule MAIT (Mucosal-Associated Invariant T)',
    presentingMolecule: 'MR1 (MHC-Related Protein 1)',
    antigenType: 'Metaboliti intermedi della biosintesi batterica e fungina della Vitamina B2 (Riboflavina) e B9 (Acido Folico)',
    geneLocation: 'Cromosoma 1 (gene monomorfico, universale in tutti gli individui)',
    tcrDiversity: 'TCR invariante (nell’uomo: catena Vα7.2-Jα33 riarrangiata con Vβ2 o Vβ13)',
    effectorFunction: 'Sorveglianza delle mucose (intestino, polmoni, fegato): rilascio immediato di perforina, granzimi, IFN-γ e TNF-α in risposta a metaboliti microbici o citochine innati (IL-12/IL-18).'
  }
];

export interface SuperantigenDetail {
  toxin: string;
  sourceOrganism: string;
  tcrTarget: string;
  clinicalManifestation: string;
}

export const SUPERANTIGEN_DATA: SuperantigenDetail[] = [
  {
    toxin: 'TSST-1 (Toxic Shock Syndrome Toxin-1)',
    sourceOrganism: 'Staphylococcus aureus',
    tcrTarget: 'Segmento Vβ2 del TCR umano',
    clinicalManifestation: 'Sindrome da Shock Tossico stafilococcica (febbre elevata, ipotensione grave refrattaria, rash desquamativo a guanto, insufficienza multiorgano per tempesta citochinica da TNF-α e IL-1).'
  },
  {
    toxin: 'Enterotossine Stafilococciche (SEA, SEB, SEC, SED)',
    sourceOrganism: 'Staphylococcus aureus',
    tcrTarget: 'Segmenti Vβ3, Vβ12, Vβ14, Vβ15',
    clinicalManifestation: 'Intossicazione alimentare acuta stafilococcica (vomito incoercibile, crampi addominali e diarrea a rapida insorgenza entro 2-6 ore per termostabilità della tossina) e shock tossico sistemico.'
  },
  {
    toxin: 'Esotossine Pirogeniche Streptococciche (SpeA, SpeC)',
    sourceOrganism: 'Streptococcus pyogenes (Gruppo A)',
    tcrTarget: 'Segmenti Vβ2, Vβ4, Vβ8',
    clinicalManifestation: 'Sindrome da Shock Tossico Streptococcico (STSS), Scarlattina tossica e fascite necrotizzante rapidamente progressiva con letalità del 30-50%.'
  }
];

export const QUIZ_LEZIONE_10: QuizQuestion[] = [
  {
    "id": "q10-1",
    "question": "Che cosa si intende per \"Cross-Presentazione\" (Presentazione Crociata) e quale sottopopolazione cellulare ne è la specialista biologica per eccellenza?",
    "options": [
      "La via mediante la quale antigeni extracellulari ed esogeni (es. cellule apoptotiche infettate o tumorali) vengono presentati su molecole MHC di Classe I ai linfociti T CD8+, svolta in modo massimamente efficiente dalle cellule dendritiche convenzionali di tipo 1 (cDC1)",
      "La capacità dei linfociti B di presentare antigeni sia solubili sia particolati ai linfociti Th2",
      "La mutazione genetica che permette alla β2-microglobulina di associarsi alle molecole MHC di classe II",
      "Il trasferimento di immunoglobuline materne attraverso la placenta mediato dal recettore FcRn"
    ],
    "correctIndex": 0,
    "explanation": "Come spiegato dalla Professoressa Molfetta, la cross-presentazione rompe il paradigma canonico: permette a una cellula dendritica non infettata di fagocitare cellule morte infettate da virus o frammenti tumorali esogeni e instradarli sulla via dell’MHC di classe I. Questa funzione è vitale per il priming dei linfociti T CD8+ naïve nei linfonodi ed è appannaggio quasi esclusivo della sottopopolazione cDC1 (dipendente dal fattore di trascrizione Batf3).",
    "clinicalPearl": "Topi o pazienti con deficit genetico di BATF3 o IRF8 mancano completamente della popolazione cDC1: non riescono a montare risposte immuni mediate da linfociti T CD8+ contro i tumori trapiantati e non rispondono all’immunoterapia con inibitori dei checkpoint immunitari (anti-PD-1/anti-CTLA-4)."
  },
  {
    "id": "q10-2",
    "question": "In che modo i \"Superantigeni\" (come la tossina TSST-1 di Staphylococcus aureus) attivano i linfociti T rispetto agli antigeni convenzionali?",
    "options": [
      "Vengono tagliati nel proteasoma in peptidi di 9 aminoacidi e caricati con altissima affinità nella tasca di MHC-I",
      "Non necessitano di alcuna processazione intracellulare: si legano contemporaneamente alla superficie esterna non polimorfa di MHC-II e alla porzione variabile Vβ del TCR, provocando un’attivazione policlonale massiva (fino al 20% dei T totali) con tempesta citochinica",
      "Bloccano selettivamente il trasportatore TAP1 inducendo la sindrome del linfocita nudo",
      "Si legano esclusivamente al corecettore CD4 inducendone l’internalizzazione e la degradazione lisosomiale"
    ],
    "correctIndex": 1,
    "explanation": "I superantigeni scavalcano le regole della specificità clonale: non vengono digeriti in frammenti né alloggiano nella tasca di legame peptidico. Agiscono come un morsetto molecolare esterno legandosi ai domini non polimorfici di MHC-II e alla catena Vβ del TCR di qualsiasi linfocita T che esprima quel dato segmento genico. Questo attiva contemporaneamente un clone su cinque (20-25% di tutti i linfociti T dell’organismo), scatenando un rilascio devastante di citochine infiammatorie (TNF-α, IL-1, IFN-γ) che causa ipotensione, shock settico e collasso multiorgano.",
    "clinicalPearl": "Nelle intossicazioni alimentari da stafilococco, le enterotossine stafilococciche (SEA-SED) sono superantigeni termostabili: la cottura degli alimenti uccide il batterio ma non inattiva la tossina preformata, provocando nausea, vomito profuso e collasso entro appena 2-6 ore dall’ingestione."
  },
  {
    "id": "q10-3",
    "question": "Qual è il ligando e la natura chimica dell’antigene riconosciuto dalle cellule NKT (Natural Killer T) e quale molecola di presentazione utilizzano?",
    "options": [
      "Riconoscono metaboliti della riboflavina (vitamina B2) presentati dalla molecola MR1",
      "Riconoscono frammenti di DNA a doppio filamento presentati dal recettore Toll-like TLR9",
      "Riconoscono antigeni di natura lipidica e glicolipidica (come la galattosilceramide α-GalCer) presentati dalla molecola invariante CD1 (in particolare CD1d), codificata sul cromosoma 1",
      "Riconoscono porzioni Fc delle immunoglobuline IgM aggregate sulla superficie batterica"
    ],
    "correctIndex": 2,
    "explanation": "Le cellule NKT esprimono un TCR semi-invariante (Vα24-Jα18 nell’uomo) associato a marcatori NK (CD16, CD56). Non riconoscono peptidi proteici, bensì lipidi, glicolipidi e sfingolipidi (tra cui il prototipo sintetico α-GalCer e lipidi micobatterici) presentati dalle molecole della famiglia CD1 (specificamente CD1d). Le molecole CD1 sono strutturalmente simili all’MHC-I (con tasca profonda idrofobica e associazione con la β2-microglobulina) ma sono rigidamente invarianti e codificate sul cromosoma 1, al di fuori del locus HLA.",
    "clinicalPearl": "I derivati lipidici di Mycobacterium tuberculosis (come il glicolipide fenolico e il micolato) vengono presentati dalle molecole CD1 (CD1a, CD1b, CD1c) a cellule T lipidico-reattive, costituendo un ramo essenziale della risposta difensiva contro le infezioni micobatteriche polmonari."
  },
  {
    "id": "q10-4",
    "question": "Che cosa riconoscono le cellule T invarianti associate alle mucose (MAIT) e quale ruolo fisiologico svolgono nei tessuti mucosi e nel fegato?",
    "options": [
      "Riconoscono frammenti peptidici derivati dal glutine presentati da HLA-DQ2",
      "Riconoscono filamenti di RNA virale extracellulare legati alla proteina C reattiva",
      "Riconoscono polisaccaridi capsulari presentati dal recettore scavenger SR-A",
      "Riconoscono metaboliti intermedi della via biosintetica delle vitamine del gruppo B (in particolare precursori della Riboflavina/Vitamina B2) presentati dalla molecola invariante MR1"
    ],
    "correctIndex": 3,
    "explanation": "I linfociti MAIT costituiscono fino al 10-40% dei linfociti T del fegato e sono abbondantissimi nella mucosa intestinale e respiratoria. Esprimono un TCR invariante (Vα7.2-Jα33) che riconosce piccoli metaboliti intermedi della biosintesi della riboflavina (Vitamina B2) prodotti esclusivamente da batteri e funghi (l’organismo umano non sintetizza riboflavina e la assume con la dieta). Questi metaboliti vengono presentati dalla molecola monomorfa MR1 (MHC-Related Protein 1), innescando una risposta protettiva immediata con produzione di IFN-γ, TNF-α e citotossicità diretta.",
    "clinicalPearl": "Poiché i mammiferi non possiedono gli enzimi per la biosintesi de novo della riboflavina, la via MR1/MAIT discrimina in modo infallibile i microbi sintetizzanti vitamine rispetto alle cellule dell’ospite, rappresentando una pietra miliare dell’immunità mucosale innato-adattativa."
  },
  {
    "id": "q10-5",
    "question": "In che cosa consiste il fenomeno del \"Cross-Dressing\" e della \"Trogocitosi\" nella biologia delle cellule presentanti l’antigene?",
    "options": [
      "Nella capacità delle cellule dendritiche di acquisire complessi MHC-peptide già preformati direttamente dalla superficie di altre cellule (tramite trasferimento di membrana, trogocitosi, nanotubi o esosomi) ed esporli senza dover processare internamente l’antigene",
      "Nel mascheramento dei batteri tramite capsule polisaccaridiche acide",
      "Nell’inversione del flusso secretorio dal reticolo endoplasmatico verso il nucleo cellulare",
      "Nella transizione da linfocita T naïve a linfocita T della memoria centrale"
    ],
    "correctIndex": 0,
    "explanation": "Nel cross-dressing, la cellula dendritica non necessita di fagocitare, degradare e ricaricare l’antigene nel proprio RER. Attraverso il contatto intercellulare intimo (trogocitosi, dove porzioni di membrana plasmatica vengono \"morsicate\" e trasferite da una cellula all’altra), tramite esosomi rilasciati da cellule tumorali o mediante nanotubi citoplasmatici, la dendritica acquisisce complessi MHC-I:peptide già assemblati e li espone direttamente sulla propria superficie cellulare per presentarli ai linfociti T CD8+.",
    "clinicalPearl": "Nel contesto dei trapianti allogenici, il cross-dressing consente alle cellule dendritiche del ricevente di acquisire intatti i complessi MHC allogenici del donatore (via semidiretta di alloriconoscimento), accelerando la cinetica del rigetto acuto d’organo."
  }
];

export const FLASHCARDS_LEZIONE_10: Flashcard[] = [
  {
    id: 'fc-l10-1',
    front: 'Qual è la differenza fondamentale tra il Pathway Citosolico e il Pathway Vacuolare della Cross-Presentazione?',
    back: 'Nel pathway citosolico, l’antigene esogeno fagocitato sfugge dal vacuolo nel citosol (via canali ERAD o retro-trasporto ERGIC), viene poliubiquitinato, degradato dal proteasoma e traslocato da TAP nel RER per essere caricato su MHC-I. Nel pathway vacuolare, l’antigene viene digerito direttamente all’interno degli endosomi da proteasi acide (catepsina S) e caricato su molecole MHC-I che ricircolano o transitano nei compartimenti endosomiali, senza intervento di TAP né del proteasoma.',
    category: 'Molecolare'
  },
  {
    id: 'fc-l10-2',
    front: 'Qual è il ruolo dell’Autofagia nella presentazione su MHC di Classe II?',
    back: 'In condizioni di stress cellulare, ipossia o starvation, la cellula forma autofagosomi a doppia membrana (marcati da LC3 e Atg8) che sequestrano organelli e proteine citosoliche endogene. Quando l’autofagosoma si fonde con i lisosomi acidi, queste proteine endogene vengono frammentate dalle catepsine e caricate sulle molecole MHC di classe II, violando la regola secondo cui l’MHC-II presenta esclusivamente antigeni esogeni.',
    category: 'Cellulare'
  },
  {
    id: 'fc-l10-3',
    front: 'Quali sono le caratteristiche biologiche distintive delle Cellule Dendritiche cDC1?',
    back: 'Le cDC1 sono caratterizzate nell’uomo dai marcatori CD141 (BDCA3), CLEC9A e XCR1, e nel topo da CD8α e CD103. Dipendono dai fattori di trascrizione BATF3 e IRF8. Sono le cellule per eccellenza deputate alla cross-presentazione di cellule apoptotiche, virus e neoantigeni tumorali su MHC di classe I per l’innesco (priming) dei linfociti T citotossici CD8+.',
    category: 'Cellulare'
  },
  {
    id: 'fc-l10-4',
    front: 'Perché i Superantigeni inducono una risposta infiammatoria letale (Shock Tossico)?',
    back: 'I superantigeni (es. TSST-1, enterotossine stafilococciche) scavalcano la tasca di legame peptidico e legano contemporaneamente i domini non polimorfici di MHC-II e la regione variabile Vβ del TCR. Questo attiva fino al 20-25% dell’intero repertorio di linfociti T dell’organismo in modo policlonale, innescando una massiva tempesta citochinica (TNF-α, IL-1, IFN-γ, IL-2) con vasodilatazione generalizzata, shock settico e insufficienza multiorgano.',
    category: 'Patologia'
  },
  {
    id: 'fc-l10-5',
    front: 'Che cos’è il "Cross-Dressing" e come si differenzia dalla cross-presentazione?',
    back: 'Nella cross-presentazione classica la cellula dendritica internalizza l’antigene e lo processa con i propri macchinari enzimatici. Nel cross-dressing la dendritica non processa l’antigene: acquisisce complessi MHC-I:peptide preformati direttamente da altre cellule mediante trogocitosi (scambio di frammenti di membrana), esosomi tumorali o nanotubi, e li esibisce intatti sulla propria membrana plasmatica.',
    category: 'Molecolare'
  },
  {
    id: 'fc-l10-6',
    front: 'Qual è il ruolo dell’asse CD40:CD40L (CD154) nella cooperazione tra linfociti T ed APC?',
    back: 'Il ligando CD154 (CD40L), appartenente alla superfamiglia del TNF, è espresso trimerico sulla superficie dei linfociti T CD4+ attivati e trimerizza il recettore CD40 espresso su macrofagi e linfociti B. Nei macrofagi attiva iNOS e l’ossidasi fagocitica per uccidere microbi endocitati; nei linfociti B induce la proliferazione, la sopravvivenza anti-apoptotica, lo switch isotipico (IgG, IgA, IgE) e la maturazione dell’affinità.',
    category: 'Terapia'
  }
];
