import React, { useState } from 'react';

// ==========================================
// 1. TIPI TYPESCRIPT
// ==========================================
export interface Lesson0Content {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  dateStr: string;
  professor: string;
  duration: string;
  readTimeMin: number;
  sectionsCount: number;
  isAvailable: boolean;
  topics: string[];
  summary: string;
  manifesto: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    principles: { title: string; description: string }[];
  };
  chapters: {
    id: string;
    number: number;
    title: string;
    subtitle: string;
    lessonsIncluded: string;
    sections: {
      code: string;
      title: string;
      sourceLesson: string;
      bulletPoints: string[];
    }[];
  }[];
  synopticTable: {
    lessonNumber: string;
    date: string;
    professor: string;
    officialTopic: string;
    textbookLocation: string;
  }[];
}

export interface Lezione0Props {
  onNavigateToLesson?: (lessonNum: number, sectionId?: string) => void;
  onOpenQuiz?: () => void;
  onOpenHub?: () => void;
}

// ==========================================
// 2. DATI COMPLETI DI LEZIONE 0
// ==========================================
export const LEZIONE_0_DATA: Lesson0Content = {
  number: 0,
  id: "lez-0",
  title: "Lezione 0: Guida e Architettura dell'Immunologia Umana",
  subtitle: "Dalla Discontinuità d'Aula all'Unico Libro di Testo",
  professor: "Prof.sse Galandrini, Soriani, Molfetta, Morrone, Rinaldi",
  dateStr: "Inizio Corso",
  duration: "15 min",
  readTimeMin: 15,
  sectionsCount: 8,
  isAvailable: true,
  topics: [
    "Manifesto Metodologico",
    "Immunità Innata & Sensori PAMP/DAMP",
    "Complemento & Traffico Leucocitario",
    "Genetica HLA & Presentatione",
    "Ontogenesi Repertori B e T",
    "Regolazione & Polarizzazione T",
    "Citotossicità & NK",
    "Risposta Umorale & Centro Germinativo",
    "Immunopatologia, Tolleranza, Clinica & Onco"
  ],
  summary: "Interfaccia unificante e homepage del corso. Unifica l'intero programma di 33 lezioni in 8 Macro-Capitoli logici, integrando principi metodologici d'esame e matrice di corrispondenza sinottica.",
  
  manifesto: {
    title: "1. Manifesto Metodologico: Superare la Discontinuità d'Aula",
    subtitle: "Dalla Discontinuità d'Aula all'Unico Libro di Testo",
    paragraphs: [
      "Lo studio universitario dell'Immunologia per il corso di Laurea Magistrale in Medicina e Chirurgia si scontra con una difficoltà oggettiva: la frammentazione cronologica del calendario accademico.",
      "La suddivisione del corso tra più docenti (Prof.sse Galandrini, Soriani, Molfetta, Morrone, Rinaldi), unita alla rotazione settimanale delle aule e alle esigenze di laboratorio, porta spesso a trattare argomenti paralleli in giorni consecutivi o a interrompere una via molecolare per poi riprenderla a distanza di settimane. A ciò si aggiunge la fisiologica \"circolarità\" della disciplina: per comprendere la selezione timica dei linfociti T (Lezione 11) è indispensabile conoscere la struttura dell'MHC (Lezione 9), ma per cogliere la funzione dell'MHC occorre aver già compreso il riconoscimento antigenico operato dal TCR.",
      "Questa Lezione 0 nasce come interfaccia unificante e homepage del corso. Il suo scopo è dissolvere i confini artificiali imposti dalle singole date delle sbobine e fondere l'intero programma in un unico libro di testo continuo."
    ],
    principles: [
      {
        title: "1. Padroneggiare la cascata (dal recettore al nucleo)",
        description: "Per ogni cellula immunitaria è richiesto il profilo molecolare completo: recettore di membrana → molecole accessorie di trasduzione (ITAM/ITIM) → chinasi e fosfatasi → secondi messaggeri → fattori di trascrizione attivati."
      },
      {
        title: "2. Collegare fisiologia e immunopatologia",
        description: "Ogni processo fisiologico spiegato a lezione trova il suo correlato d'esame in una sindrome da immunodeficienza, una patologia autoimmune o una reazione di ipersensibilità (es. la ricombinazione V(D)J si studia contestualmente alle SCID da deficit di RAG o Artemis; l'attenuazione del segnale T si collega direttamente agli inibitori dei checkpoint tumorali)."
      },
      {
        title: "3. Mappe di transizione anatomica",
        description: "Il sistema immunitario non lavora in sospensione, ma nello spazio tissutale. Bisogna sempre saper descrivere dove avviene un evento (midollo osseo → polpa bianca splenica → venule ad endotelio alto del linfonodo → centro germinativo → lamina propria mucosale)."
      }
    ]
  },

  chapters: [
    {
      id: "cap-1",
      number: 1,
      title: "Capitolo 1: Immunità Innata, Sensori Molecolari PAMP/DAMP ed Effettori Mieloidi",
      subtitle: "Sensori, fagocitosi, inflammasoma e piroptosi",
      lessonsIncluded: "Integrazione organica delle Lezioni 01, 02, 03, 04",
      sections: [
        {
          code: "1.1",
          title: "Barriere chimico-fisiche ed ecologia dell'interfaccia epiteliale",
          sourceLesson: "dalla Lezione 01",
          bulletPoints: [
            "Tight junctions, flusso mucociliare e pH dei secreti.",
            "Peptidi antimicrobici cationici: defensine α (cellule di Paneth) e β, catelicidina (hCAP-18 / LL-37).",
            "Enzimi litici e sequestratori biochimici: lisozima (idrolisi legami β-1,4 glicosidici del peptidoglicano), lattoferrina e calprotectina (immunità nutrizionale)."
          ]
        },
        {
          code: "1.2",
          title: "La famiglia dei Toll-Like Receptors (TLR) e l'interruttore trascrizionale",
          sourceLesson: "dalla Lezione 02",
          bulletPoints: [
            "TLR di superficie: TLR4/MD-2 (LPS), eterodimeri TLR2/TLR1 (lipopeptidi triacilati) e TLR2/TLR6 (lipopeptidi diacilati), TLR5 (flagellina monomerica).",
            "TLR endosomiali per acidi nucleici: TLR3 (dsRNA virale), TLR7 e TLR8 (ssRNA virale ricco in GU), TLR9 (motivi CpG non metilati).",
            "Piattaforme di trasduzione adattatrice: via MyD88-dipendente (TIRAP, IRAK4, IRAK1, TRAF6, attivazione del complesso IKK ed entrata nucleare di NF-κB) vs via TRIF-dipendente (TRAM, TBK1/IKKε, fosforilazione di IRF3/IRF7 per la sintesi di IFN di tipo I)."
          ]
        },
        {
          code: "1.3",
          title: "Sensori intracellulari, inflammasomi e piroptosi",
          sourceLesson: "dalla Lezione 03",
          bulletPoints: [
            "Recettori NOD-like citosolici: NOD1 (acido meso-diaminopimelico) e NOD2 (muramil dipeptide - MDP). Correlazione clinica con la malattia di Crohn.",
            "Sensori ad RNA e DNA citosolico: RIG-I, MDA5 (adattatore mitocondriale MAVS) e asse cGAS-STING (sintesi di 2'3'-cGAMP).",
            "L'inflammasoma canonico NLRP3: assemblaggio del complesso oligomerico (NLRP3, ASC con domini pirinici PYD e CARD, pro-caspasi-1).",
            "Effettori di morte infiammatoria: autoclivaggio della caspasi-1, maturazione di pro-IL-1β e pro-IL-18, clivaggio della Gasdermina D (GSDMD) e formazione dei pori litici di piroptosi."
          ]
        },
        {
          code: "1.4",
          title: "Biologia dei fagociti professionali e meccanismi battericidi",
          sourceLesson: "dalla Lezione 04",
          bulletPoints: [
            "Fagocitosi ed efferocitosi: recettori scavenger (SR-A, CD36) e recettori per la fosfatidilserina (TIM-4).",
            "Il complesso NADPH ossidasi fagocitaria (phox): assemblaggio delle subunità di membrana (gp91phox, p22phox) e citosoliche (p47phox, p67phox, Rac).",
            "Generazione di radicali liberi: superossido (O2•-), perossido di idrogeno (H2O2) e acido ipocloroso (HOCl) via mieloperossidasi (MPO).",
            "Patologia d'esame: Malattia Granulomatosa Cronica (CGD), trasmissione genetica e suscettibilità selettiva a batteri catalasi-positivi.",
            "Formazione delle trappole extracellulari dei neutrofili (NETosi): ruolo dell'enzima PAD4 nella citrullinazione degli istoni nucleari."
          ]
        }
      ]
    },
    {
      id: "cap-2",
      number: 2,
      title: "Capitolo 2: Il Sistema del Complemento, Traffico Leucocitario e Morfologia Funzionale degli Organi Linfoidi",
      subtitle: "Cascata complementare, diapedesi e architettura linfoide",
      lessonsIncluded: "Integrazione organica delle Lezioni 05, 06",
      sections: [
        {
          code: "2.1",
          title: "Le vie di attivazione del complemento e lisi osmotica",
          sourceLesson: "dalla Lezione 05",
          bulletPoints: [
            "Via classica (C1q, C1r, C1s legati a complessi antigene-anticorpo IgM o IgG).",
            "Via lectinica (MBL e ficoline complessate con le serina-proteasi MASP-1 e MASP-2).",
            "Via alternativa e fenomeno del \"tick-over\" spontaneo (idrolisi di C3, legame del Fattore B e taglio da parte del Fattore D).",
            "Le convertasi: C3 convertasi classica/lectinica (C4b2a) e alternativa (C3bBb stabilizzata da properdina); C5 convertasi (C4b2a3b e C3bBb3b).",
            "Assemblaggio del Complesso di Attacco alla Membrana (MAC, C5b-9).",
            "Attività delle anafilatossine: gradiente di potenza biologica (C5a > C3a > C4a) e chemiotassi neutrofila."
          ]
        },
        {
          code: "2.2",
          title: "Regolazione biochimica del complemento e quadri clinici",
          sourceLesson: "dalla Lezione 05",
          bulletPoints: [
            "Regolatori solubili: C1-inibitore (C1-INH), Fattore H, Fattore I, proteina C4BP, vitronectina.",
            "Regolatori di membrana: DAF (CD55), MCP (CD46), CD59 (inibitore del MAC).",
            "Clinica correlata: Emoglobinuria Parossistica Notturna (mutazione somatica di PIGA e perdita delle ancore GPI per CD55/CD59) e Angioedema Ereditario (deficit di C1-INH e iperattivazione della callicreina con accumulo di bradichinina)."
          ]
        },
        {
          code: "2.3",
          title: "Architettura degli Organi Linfoidi Secondari (SLO)",
          sourceLesson: "dalla Lezione 06",
          bulletPoints: [
            "Il linfonodo: architettura zonale (corticale a follicoli B, paracorticale a cellule T e cellule dendritiche, midollare con cordoni plasmacellulari e seni linfatici).",
            "La milza: polpa rossa (emocateresi ed efferocitosi) e polpa bianca (guaine linfoidi periarteriolari PALS T-dipendenti, follicoli B e zona marginale ricca di cellule B non ricircolanti)."
          ]
        },
        {
          code: "2.4",
          title: "Molecole di adesione, gradiente chemochinico e cascata dell'extravasazione",
          sourceLesson: "dalla Lezione 06",
          bulletPoints: [
            "Sequenza di migrazione leucocitaria attraverso le venule ad endotelio alto (HEV): 1. Rolling (L-selectina / PNAd; E/P-selectine con sialil-Lewis X); 2. Attivazione da chemochine (asse CCR7 con CCL19/CCL21 induttore di inside-out signaling integrinico); 3. Adesione salda (LFA-1 con ICAM-1; VLA-4 con VCAM-1); 4. Diapedesi e transmigrazione (PECAM-1 / CD31).",
            "Compartimentazione interna: l'asse CXCR5/CXCL13 segrega i linfociti B nei follicoli primari.",
            "Meccanismo di egresso linfonodale: antagonismo funzionale tra il recettore S1PR1 (gradiente ematico di sfingosina-1-fosfato) e il marcatore di attivazione precoce CD69."
          ]
        }
      ]
    },
    {
      id: "cap-3",
      number: 3,
      title: "Capitolo 3: Genetica HLA, Processazione dell'Antigene e Presentazione Ristretta",
      subtitle: "Architettura HLA, vie endogena/esogena e cross-presentazione",
      lessonsIncluded: "Integrazione organica delle Lezioni 09, 10",
      sections: [
        {
          code: "3.1",
          title: "Organizzazione genomica e architettura del complesso HLA",
          sourceLesson: "dalla Lezione 09",
          bulletPoints: [
            "Mappatura sul braccio corto del cromosoma 6 (6p21.3): organizzazione in cluster di Classe I (HLA-A, B, C), Classe II (HLA-DP, DQ, DR) e Classe III (C2, C4, Fattore B, TNF).",
            "Caratteristiche genetiche distintive: poligenia, polimorfismo estremo localizzato sui residui della tasca peptidica, espressione codominante e squilibrio di associazione (linkage disequilibrium).",
            "Struttura biochimica comparativa: MHC-I (catena pesante α con domini α1, α2, α3 legante CD8 + β2-microglobulina) vs MHC-II (eterodimero α e β con domini α1 e β1 per la tasca e α2/β2 leganti CD4).",
            "Correlazioni patologiche HLA-malattia: HLA-B27 e Spondilite Anchilosante; HLA-DQ2/DQ8 e Celiachia; HLA-DR4 e Artrite Reumatoide."
          ]
        },
        {
          code: "3.2",
          title: "Via di processazione citosolica/endogena (MHC di Classe I)",
          sourceLesson: "dalla Lezione 10",
          bulletPoints: [
            "Ubiquitinazione di proteine virali, tumorali o self anomale.",
            "Il proteasoma costitutivo e l'immunoproteasoma inducibile da IFN-γ (LMP2, LMP7, MECL-1).",
            "Traslocazione peptidica nel RE tramite il trasportatore eterodimerico TAP1/TAP2.",
            "Il Complesso di Caricamento del Peptide (PLC): calnexina, calreticulina, ERp57 e tapasina.",
            "Immunoevasione virale mirata: inibizione di TAP mediata da ICP47 (HSV) o US6 (CMV)."
          ]
        },
        {
          code: "3.3",
          title: "Via di processazione endosomiale/esogena (MHC di Classe II)",
          sourceLesson: "dalla Lezione 10",
          bulletPoints: [
            "Endocitosi/fagocitosi di antigeni extracellulari e progressiva acidificazione dell'endosoma.",
            "Biosintesi nel RE e ruolo chaperonico della Catena Invariante (CD74) per occupare la tasca e dirigere al MIIC.",
            "Digestione sequenziale di CD74 da parte delle catepsine endosomiali (S e L) fino al peptide residuo CLIP.",
            "Il peptide editor HLA-DM: scalzamento di CLIP e caricamento di peptidi esogeni ad alta affinità. Funzione inibitoria di HLA-DO."
          ]
        },
        {
          code: "3.4",
          title: "Vie non convenzionali e presentazione non peptidica",
          sourceLesson: "dalla Lezione 10",
          bulletPoints: [
            "Cross-presentazione (cross-priming): internalizzazione di antigeni esogeni da parte delle cDC1 (Clec9A+, XCR1+), retrotraslocazione citosolica e caricamento su MHC-I per il priming naive di CTL CD8+.",
            "Presentazione lipidica mediata da molecole CD1 (CD1a, b, c, d) a linfociti NKT.",
            "Presentazione di metaboliti della vitamina B tramite MR1 ai linfociti MAIT."
          ]
        }
      ]
    },
    {
      id: "cap-4",
      number: 4,
      title: "Capitolo 4: Ontogenesi, Ricombinazione Somatica V(D)J e Formazione del Repertorio B e T",
      subtitle: "Ricombinasi, stadi B/T midollo-timo, TCR-CD3 e cascate di trasduzione",
      lessonsIncluded: "Integrazione organica delle Lezioni 07, 08, 11, 12, 13",
      sections: [
        {
          code: "4.1",
          title: "La macchina enzimatica della ricombinazione genica V(D)J",
          sourceLesson: "dalla Lezione 08",
          bulletPoints: [
            "Sequenze Segnale di Ricombinazione (RSS): eptamero, spaziatore 12/23 e nonamero. Regola 12/23 per impedire giunzioni errate.",
            "Complesso ricombinasi linfoide-specifico RAG1 / RAG2: rotture a doppio filamento e forcine (hairpin).",
            "Apertura e diversificazione giunzionale: fosforilazione di Artemis via DNA-PKcs, generazione di nucleotidi P, aggiunta template-indipendente di nucleotidi N operata da TdT.",
            "Unione non omologa delle estremità (NHEJ): Ku70/Ku80, XRCC4 e DNA Ligasi IV.",
            "Sindromi associate: mutazioni RAG1/2 (SCID T-B-NK+ o Sindrome di Omenn); mutazioni Artemis/DNA-PKcs (SCID radiosensibile)."
          ]
        },
        {
          code: "4.2",
          title: "Ontogenesi e maturazione dei Linfociti B nel midollo osseo",
          sourceLesson: "dalla Lezione 07",
          bulletPoints: [
            "Nicchie stromali (c-Kit/SCF, IL-7) e fattori trascrizionali (E2A, EBF1, Pax-5).",
            "Stadi maturativi: Pro-B (D-J e V-DJ della catena pesante IgH), Pre-B grande (pre-BCR con catena μ e surrogate VpreB/λ5, segnale di arresto ricombinativo ed esclusione allelica), Pre-B piccolo (riarrangiamento catena leggera κ/λ).",
            "Checkpoint di tolleranza centrale: legame ad alta affinità con self multivalente → receptor editing su catena leggera; delezione clonale in caso di fallimento.",
            "Emersione di B immaturi (IgM high IgD low) e migrazione splenica a B follicolari naive o della zona marginale."
          ]
        },
        {
          code: "4.3",
          title: "Ontogenesi e selezione timica dei Linfociti T",
          sourceLesson: "dalla Lezione 11",
          bulletPoints: [
            "Colonizzazione da ETP, stadi doppi negativi (DN1 → DN4) regolati da Notch-1.",
            "DN3: riarrangiamento TCR-β, pre-TCR con pT-α e CD3, checkpoint β ed esclusione allelica.",
            "Transizione a Doppio Positivo (CD4+CD8+) e riarrangiamento del locus TCR-α (escisione ad anello del locus TCR-δ: formazione dei TREC).",
            "Selezione positiva corticale (cTEC): restrizione MHC e scelta di lignaggio CD4 (ThPOK) vs CD8 (Runx3).",
            "Selezione negativa midollare (mTEC/DC): eliminazione cloni ad alta affinità guidata dalla proteina Bim.",
            "Fattore trascrizionale AIRE: espressione ectopica di antigeni tessuto-specifici (TRA). Mutazioni causano APECED / APS-1."
          ]
        },
        {
          code: "4.4",
          title: "Il complesso del recettore T (TCR-CD3) e la sinapsi immunologica",
          sourceLesson: "dalla Lezione 12",
          bulletPoints: [
            "Architettura eterodimero TCR α/β (CDR1, CDR2, CDR3). Complejo CD3 (γϵ, δϵ, ζζ) per un totale di 10 motivi ITAM.",
            "Sinapsi Immunologica (SMAC): c-SMAC (TCR, CD4/CD8, CD28), p-SMAC (anello di adesione LFA-1/ICAM-1), d-SMAC (segregazione verso l'esterno di CD45 e CD148)."
          ]
        },
        {
          code: "4.5",
          title: "Cascate intracellulari di trasduzione a valle del TCR",
          sourceLesson: "dalla Lezione 13",
          bulletPoints: [
            "Innesco prossimale: Lck fosforila ITAM di CD3, reclutamento di ZAP-70, fosforilazione dell'adattatore LAT e di PLC-γ1.",
            "Tre vie effettrici principali da PIP2 (IP3 e DAG): 1. Calcio / NFAT (IP3, canali ORAI1/CRAC, calmodulina, calcineurina defosforila NFAT per trascrizione IL-2; target di Ciclosporina A e Tacrolimus); 2. PKC-θ / NF-κB (DAG, complesso CBM, IKK, degradazione IκB-α, rilascio p50/p65); 3. MAP chinasi / AP-1 (DAG, RasGRP1, Ras, Raf-1, MEK, ERK → Fos; via Rac/JNK → Jun; eterodimero AP-1)."
          ]
        }
      ]
    },
    {
      id: "cap-5",
      number: 5,
      title: "Capitolo 5: Regolazione del Segnale T, Differenziamento Th e Tolleranza Periferica",
      subtitle: "Costimolazione, checkpoint CTLA-4/PD-1, polarizzazione Th1/2/17 e Treg",
      lessonsIncluded: "Integrazione organica delle Lezioni 14, 15, 16",
      sections: [
        {
          code: "5.1",
          title: "Il paradigma dei segnali e la costimolazione B7 / CD28 vs CTLA-4",
          sourceLesson: "dalla Lezione 14",
          bulletPoints: [
            "Segnale 1 (TCR-MHC) + Segnale 2 (Costimolatori) → Attivazione e sopravvivenza (PI3K/Akt, Bcl-xL). Mancanza di Segnale 2 → ligasi Cbl-b/GRAIL ed anergia clonale.",
            "Checkpoint inibitorio precoce CTLA-4 (CD152): espressione indotta o costitutiva (Treg), affinità elevata per B7, rimozione fisica dei costimolatori via trans-endocitosi. Clinica: Abatacept (CTLA-4-Ig)."
          ]
        },
        {
          code: "5.2",
          title: "Checkpoint inibitori tardivi: l'asse PD-1 / PD-L1",
          sourceLesson: "dalla Lezione 14",
          bulletPoints: [
            "PD-1 (CD279): motivi ITIM ed ITSM citoplasmatici. Reclutamento di SHP-2 con defosforilazione di ZAP-70, CD3-ζ e p85 (PI3K).",
            "Media lo spegnimento della risposta effettrice periferica e l'exhaustion (esaurimento funzionale T)."
          ]
        },
        {
          code: "5.3",
          title: "Polarizzazione e funzioni effettrici delle sottopopolazioni Th (Th1, Th2, Th17)",
          sourceLesson: "dalla Lezione 15",
          bulletPoints: [
            "Th1: IL-12/IFN-γ → STAT4/STAT1 → T-bet → IFN-γ, TNF-α → Attivazione classica dei macrofagi M1 (iNOS) contro patogeni intracellulari.",
            "Th2: IL-4 → STAT6 → GATA-3 → IL-4 (switch IgE), IL-5 (eosinofili), IL-13 (muco, peristalsi) → Difesa antiparassitaria, macrofagi M2 (arginasi-1), atopia.",
            "Th17: TGF-β, IL-1β, IL-6, IL-23 → STAT3 → ROR-γt → IL-17A, IL-17F (reclutamento neutrofili via CXCL8), IL-22 (defensive) → Difesa da funghi/batteri, autoimmunità."
          ]
        },
        {
          code: "5.4",
          title: "Tolleranza periferica e biologia molecolare dei Linfociti T Regolatori (Treg)",
          sourceLesson: "dalla Lezione 16",
          bulletPoints: [
            "Origin: tTreg (timici) vs pTreg (periferici da TGF-β e acido retinoico). Fenotipo: CD4+ CD25high CD127low FoxP3+.",
            "Meccanismi di soppressione: 1. Deplezione metabolica di IL-2 (CD25); 2. Trans-endocitosi di B7 via CTLA-4; 3. Generazione di adenosina (CD39/CD73); 4. Citochine immunosoppressive (IL-10, TGF-β, IL-35).",
            "Patologia d'esame: Sindrome IPEX da mutazioni di FOXP3."
          ]
        }
      ]
    },
    {
      id: "cap-6",
      number: 6,
      title: "Capitolo 6: Cellule NK, Recettori KIR/NCR e Citotossicità Cellulare",
      subtitle: "Sistemi litici perforina/granzimi, Missing-Self, NKG2D e KIR",
      lessonsIncluded: "Integrazione organica delle Lezioni 17, 18, 19",
      sections: [
        {
          code: "6.1",
          title: "Meccanismi molecolari della lisi citotossica (CTL e Cellule NK)",
          sourceLesson: "dalla Lezione 17",
          bulletPoints: [
            "Polarizzazione del centrosoma (MTOC) e granuli litici a pH 5.5 con serglicina.",
            "Esocitosi Ca2+-dipendente mediata da Rab27a, Munc13-4, sintassina-11 (marcatore di membrana CD107a / LAMP-1).",
            "Perforina (PRF1): inserimento e polimerizzazione a poro (13-20 nm).",
            "Granzimi: Granzima B (cliva Bid in tBid con rilascio di citocromo c; attiva pro-caspasi-3), Granzima A (via caspasi-indipendente con distruzione del complesso SET), Granulisina.",
            "Via FasL (CD178) / Fas (CD95) → FADD → caspasi-8.",
            "Patologia: Linfoistiocitosi Emofagocitiche Familiari (FHL tipo 2, 3, 4)."
          ]
        },
        {
          code: "6.2",
          title: "Il bilanciamento tra recettori attivatori e inibitori nelle Cellule NK",
          sourceLesson: "dalla Lezione 18",
          bulletPoints: [
            "Missing-Self (Ljunggren e Kärre): perdita di MHC-I rende suscettibili le cellule bersaglio.",
            "NKG2D (CD314): omodimero legante DAP10 (PI3K) riconoscente molecole di stress self (MICA, MICB, ULBP1-6).",
            "NCR (Recettori di Citotossicità Naturale): NKp46 (costitutivo), NKp30 (legante B7-H6), NKp44 (inducibile)."
          ]
        },
        {
          code: "6.3",
          title: "La famiglia KIR, HLA-E e il licensing (educazione) delle NK",
          sourceLesson: "dalla Lezione 19",
          bulletPoints: [
            "Recettori KIR (cr. 19q13.4): code lunghe L (ITIM) vs corte S (ITAM via DAP12); riconoscono gruppi HLA-C1/C2.",
            "CD94/NKG2A: riconosce HLA-E e i peptidi leader delle molecole di classe I.",
            "Licensing/Educazione: acquisizione di competenza litica per ingaggio preventivo di MHC-I self autologhi.",
            "ADCC: mediata dal recettore FcγRIIIA (CD16a) con catene ζ verso IgG1 e IgG3.",
            "Applicazione clinica: KIR-ligand mismatch nel trapianto aploidentico per LMA."
          ]
        }
      ]
    },
    {
      id: "cap-7",
      number: 7,
      title: "Capitolo 7: Risposta Umorale, Dinamica del Centro Germinativo e Switch Isotipico",
      subtitle: "Incontro T-B, microarchitettura GC, enzima AID e differenziamento",
      lessonsIncluded: "Integrazione organica delle Lezioni 20, 21, 22",
      sections: [
        {
          code: "7.1",
          title: "Incontro T-B e cooperazione bidirezionale",
          sourceLesson: "dalla Lezione 20",
          bulletPoints: [
            "Risposte T-indipendenti (TI-1 mitogeni, TI-2 polisaccaridi) vs T-dipendenti (TD).",
            "Traffico chemochinico al confine T-B: downregulation di CXCR5 e upregulation di CCR7 nei B; viceversa nei T naive.",
            "Riconoscimento aptene-carrier e sinapsi T-B: interazione CD40 (B) con CD154/CD40L (Th/Tfh) essenziale per sopravvivenza e centro germinativo.",
            "Differenziamento Tfh: master regulator Bcl-6, ICOS, IL-21."
          ]
        },
        {
          code: "7.2",
          title: "Morfologia e microarchitettura del Centro Germinativo",
          sourceLesson: "dalla Lezione 20",
          bulletPoints: [
            "Zona Scura (Dark Zone): centroblasti esprimenti CXCR4, sede dell'ipermutazione somatica (SHM).",
            "Zona Chiara (Light Zone): centrociti esprimenti CXCR5, selezione da parte delle Cellule Dendritiche Follicolari (FDC) e Tfh."
          ]
        },
        {
          code: "7.3",
          title: "Basi biochimiche dell'Ipermutazione Somatica (SHM) e del Class Switch (CSR)",
          sourceLesson: "dalla Lezione 21",
          bulletPoints: [
            "Enzima AID (Activation-Induced Cytidine Deaminase): deaminazione C → U su ssDNA nei motivi WRCY.",
            "SHM: rimozione U da parte di UNG, taglio APE1 e riparazione error-prone via Pol-η sulle regioni V(D)J (maturazione dell'affinità).",
            "CSR: rotture a doppio filamento (DSB) indotte da AID/UNG nelle regioni di switch (Sμ, Sγ, Sα, Sϵ) e ricombinazione NHEJ.",
            "Citochine d'indirizzo: IFN-γ (IgG1/IgG3), IL-4/IL-13 (IgE), TGF-β (IgA).",
            "Clinica: Sindromi da Iper-IgM (HIGM1 da mutazioni CD40L; HIGM2 da AID; HIGM5 da UNG)."
          ]
        },
        {
          code: "7.4",
          title: "Destino post-germinativo: plasmacellule e linfociti B memoria",
          sourceLesson: "dalla Lezione 22",
          bulletPoints: [
            "Bivio trascrizionale: Bcl-6 (mantenimento proliferazione) vs Blimp-1 (PRDM1, spegnimento programma B e differenziamento plasmacellulare). Ruolo di XBP-1 ed ATF6 per l'UPR.",
            "Plasmacellule a lunga vita: migrazione guidata da CXCR4 verso nicchie midollari (CXCL12, BAFF).",
            "Regolazione retroattiva per immunocomplessi (antibody feedback): ingaggio di FcγRIIB (CD32b) ed attivazione della fosfatasi SHIP-1."
          ]
        }
      ]
    },
    {
      id: "cap-8",
      number: 8,
      title: "Capitolo 8: Immunità delle Mucose, Tolleranza, Immunopatologia Clinica e Immunoterapia",
      subtitle: "GALT, ipersensibilità I-IV, trapianti, tumori, CAR-T, SCID ed HIV",
      lessonsIncluded: "Integrazione organica delle Lezioni 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33",
      sections: [
        {
          code: "8.1",
          title: "Il sistema immunitario associato alle mucose (MALT/GALT) e microbiota",
          sourceLesson: "dalla Lezione 23",
          bulletPoints: [
            "Campionamento: Cellule M e DC CD103+ (conversione vitamina A in acido retinoico via RALDH, induzione α4β7 e CCR9).",
            "IgA secretorie (sIgA): dimeri con catena J, transcitosi via pIgR, clivaggio del Componente Secretorio.",
            "Microbiota: SCFA (butirrato) inibitori delle HDAC per la stabilizzazione dei pTreg."
          ]
        },
        {
          code: "8.2",
          title: "Rottura della tolleranza e patogenesi dell'autoimmunità",
          sourceLesson: "dalla Lezione 24",
          bulletPoints: [
            "Eziologia: loci HLA, PTPN22, CTLA4.",
            "Meccanismi: Mimetismo molecolare (es. proteina M dello Streptococco A e miosina cardiaca nella febbre reumatica); Attivazione da spettatore innocente (bystander activation); Propagazione dell'epitopo (epitope spreading)."
          ]
        },
        {
          code: "8.3",
          title: "Le reazioni di Ipersensibilità (Classificazione di Gell e Coombs)",
          sourceLesson: "dalle Lezioni 25, 26, 27",
          bulletPoints: [
            "Tipo I (IgE-mediata): sensibilizzazione Th2/IL-4/IgE su FcϵRI; degranulazione precoce (istamina, eparina, triptasi); mediatori lipidici (LTC4, LTD4, LTE4, PGD2); fase tardiva (IL-5, eotassina, eosinofili). Shock anafilattico ed Adrenalina i.m. Immunoterapia (AIT).",
            "Tipo II (Citotossica anticorpale): IgG/IgM su membrane/matrice; complemento, fagocitosi, ADCC. Esempi: Anemia Emolitica Autoimmune, Pemfigo Volgare, Goodpasture. Varianti funzionali: Graves (attivante), Miastenia Gravis (bloccante).",
            "Tipo III (Immunocomplessi solubili): precipitazione microvascolare (glomeruli, sinovia, cute) in eccesso d'antigene e consumo C3/C4. Quadri: LES, Malattia da Siero, Reazione di Arthus.",
            "Tipo IV (Cellulo-mediata / DTH): latenza 24-72h. Modello Th1/macrofagi (granuloma tubercolare con cellule epitelioidi e di Langhans); Modello cutaneo (Dermatite da Contatto); Diagnostica: Mantoux ed IGRA."
          ]
        },
        {
          code: "8.4",
          title: "Immunologia dei Trapianti e Alloriconoscimento",
          sourceLesson: "dalla Lezione 28",
          bulletPoints: [
            "Vie di alloriconoscimento: Diretta (MHC allogenico intatto su DC passeggere del donatore) vs Indiretta (DC ospite presentano peptidi allogenici su MHC-II self).",
            "Rigetto d'organo: Iperacuto (minuti-ore, anticorpi preformati anti-AB0/HLA, cross-match); Acuto (giorni-settimane, T CD4+/CD8+, tubulite/arterite, C4d bioptico); Cronico (mesi-anni, vasculopatia fibro-occlusiva dell'alloinnesto).",
            "HSCT e GVHD: T del donatore aggrediscono cute, GI e fegato del ricevente. Effetto benefico GVL."
          ]
        },
        {
          code: "8.5",
          title: "Immunologia dei Tumori e Immunoterapia",
          sourceLesson: "dalle Lezioni 29, 30",
          bulletPoints: [
            "Immunoediting (Schreiber): Eliminazione, Equilibrio, Evasione (Escape).",
            "Meccanismi di evasione: downregulation HLA-I (mutazioni β2m/TAP), shedding MICA/MICB, microambiente immunosoppressivo (Treg, TAM M2, MDSC, TGF-β, IL-10, VEGF, Arginasi-1, IDO).",
            "Checkpoint Blockade: anti-CTLA-4 (Ipilimumab), anti-PD-1 (Nivolumab, Pembrolizumab), anti-PD-L1 (Atezolizumab).",
            "CAR-T Therapy: scFv extracellulare indipendente da MHC + CD3-ζ + costimolatori (CD28 o 4-1BB). Tossicità: CRS (trattata con anti-IL-6R Tocilizumab) ed ICANS. BiTE (Blinatumomab)."
          ]
        },
        {
          code: "8.6",
          title: "Immunodeficienze Primitive (Congenite)",
          sourceLesson: "dalle Lezioni 31, 32",
          bulletPoints: [
            "Difetti B: Agammaglobulinemia di Bruton (mutazione BTK, arresto pre-B, assenza B ed Ig); CVID; Deficit selettivo di IgA.",
            "SCID: SCID X-linked (T- B+ NK-, mutazione IL2RG / γc o JAK3); SCID da deficit di ADA (T- B- NK-, dATP tossico); SCID da ricombinazione (RAG1/2, Artemis); Sindrome di DiGeorge (delezione 22q11.2, ipoplasia timica); Sindrome di Wiskott-Aldrich (WAS, microtrombocitopenia, eczema). Screening TREC."
          ]
        },
        {
          code: "8.7",
          title: "Immunodeficienze Acquisite: Biologia Molecolare di HIV e Patogenesi dell'AIDS",
          sourceLesson: "dalla Lezione 33",
          bulletPoints: [
            "Virione HIV-1: capside p24, ssRNA, triade enzimatica (RT, IN, PR). Involucro Env: gp120 (ansa V3) e gp41. Proteine regolatorie/accessorie: Tat, Rev, Nef (downregulation CD4 ed HLA-A/B), Vif (degrada APOBEC3G), Vpu (degrada teterina).",
            "Ingresso: gp120-CD4 → cambio conformazionale → corecettore CCR5 (ceppi R5) o CXCR4 (ceppi X4) → gp41 sei eliche e fusione. Mutazione protettiva CCR5-Δ32.",
            "Patogenesi: fase acuta con crollo Th17 nel GALT; costituzione precoce del Reservoir latente nei T CD4+ memory a riposo; latenza clinica; AIDS conclamato (< 200 CD4/μL) con infezioni opportunistiche (Pneumocystis, toxoplasmosi, CMV) e neoplasie (Kaposi da HHV-8, Linfoma EBV+).",
            "Terapia cART/HAART: inibitori RT (NRTI/NNRTI), integrasi (INSTI), proteasi (PI). Impossibilità di eradicare il reservoir latente."
          ]
        }
      ]
    }
  ],

  synopticTable: [
    { lessonNumber: "Lezione 01", date: "01.10.25", professor: "Prof.ssa Galandrini", officialTopic: "Introduzione, Barriere Epiteliali, Peptidi Antimicrobici, Lisozima", textbookLocation: "Paragrafo 1.1" },
    { lessonNumber: "Lezione 02", date: "02.10.25", professor: "Prof.ssa Galandrini", officialTopic: "Toll-Like Receptors (TLR di superficie ed endosomiali), Vie MyD88 e TRIF", textbookLocation: "Paragrafo 1.2" },
    { lessonNumber: "Lezione 03", date: "06.10.25", professor: "Prof.ssa Soriani", officialTopic: "Sensori intracellulari (NLR, RLR, STING), Inflammasoma NLRP3, Piroptosi", textbookLocation: "Paragrafo 1.3" },
    { lessonNumber: "Lezione 04", date: "08.10.25", professor: "Prof.ssa Galandrini", officialTopic: "Fagocitosi, NADPH Ossidasi, Mieloperossidasi, Malattia Granulomatosa, NETosi", textbookLocation: "Paragrafo 1.4" },
    { lessonNumber: "Lezione 05", date: "09.10.25", professor: "Prof.ssa Morrone", officialTopic: "Sistema del Complemento (Vie classica, lectinica, alternativa), Regolatori, EPN", textbookLocation: "Paragrafi 2.1, 2.2" },
    { lessonNumber: "Lezione 06", date: "13.10.25", professor: "Prof.ssa Morrone", officialTopic: "Organi Linfoidi Secondari (SLO), Homing Leucocitario, Selectine, Integrine, HEV", textbookLocation: "Paragrafi 2.3, 2.4" },
    { lessonNumber: "Lezione 07", date: "15.10.25", professor: "Prof.ssa Molfetta", officialTopic: "Maturazione Linfociti B midollare, Pre-BCR, Tolleranza Centrale B, Editing", textbookLocation: "Paragrafo 4.2" },
    { lessonNumber: "Lezione 08", date: "16.10.25", professor: "Prof.ssa Molfetta", officialTopic: "Meccanismo Molecolare Ricombinazione V(D)J, RAG1/2, RSS 12/23, TdT, Artemis", textbookLocation: "Paragrafo 4.1" },
    { lessonNumber: "Lezione 09", date: "20.10.25", professor: "Prof.ssa Molfetta", officialTopic: "Genetica del Locus HLA (Cromosoma 6), Struttura MHC-I e II, Polimorfismo", textbookLocation: "Paragrafo 3.1" },
    { lessonNumber: "Lezione 10", date: "22.10.25", professor: "Prof.ssa Molfetta", officialTopic: "Processazione Endogena (Proteasoma/TAP) ed Esogena (CLIP/HLA-DM), Cross-presentazione", textbookLocation: "Paragrafi 3.2, 3.3, 3.4" },
    { lessonNumber: "Lezione 11", date: "23.10.25", professor: "Prof.ssa Galandrini", officialTopic: "Ontogenesi T nel Timo, Pre-TCR, Selezione Positiva e Negativa, Ruolo di AIRE", textbookLocation: "Paragrafo 4.3" },
    { lessonNumber: "Lezione 12", date: "27.10.25", professor: "Prof.ssa Galandrini", officialTopic: "Struttura del TCR-CD3 (10 ITAM), Sinapsi Immunologica (SMAC) e Segregazione", textbookLocation: "Paragrafo 4.4" },
    { lessonNumber: "Lezione 13", date: "29.10.25", professor: "Prof.ssa Galandrini", officialTopic: "Trasduzione del TCR: Lck, ZAP-70, LAT, Cascate Calcio/NFAT, NF-κB, MAP chinasi", textbookLocation: "Paragrafo 4.5" },
    { lessonNumber: "Lezione 14", date: "30.10.25", professor: "Prof.ssa Galandrini", officialTopic: "Costimolazione B7/CD28, Checkpoint Inibitori CTLA-4, PD-1/PD-L1, Anergia", textbookLocation: "Paragrafi 5.1, 5.2" },
    { lessonNumber: "Lezione 15", date: "03.11.25", professor: "Prof.ssa Soriani", officialTopic: "Differenziamento Linfociti Th (Th1, Th2, Th17), Master Regulators, Citochine", textbookLocation: "Paragrafo 5.3" },
    { lessonNumber: "Lezione 16", date: "05.11.25", professor: "Prof.ssa Soriani", officialTopic: "Linfociti T Regolatori (Treg FoxP3+), Meccanismi di Soppressione, Sindrome IPEX", textbookLocation: "Paragrafo 5.4" },
    { lessonNumber: "Lezione 17", date: "06.11.25", professor: "Prof.ssa Galandrini", officialTopic: "Citotossicità Cellulare: Granuli di Perforina/Granzimi, LAMP-1, Via Fas/FasL", textbookLocation: "Paragrafo 6.1" },
    { lessonNumber: "Lezione 18", date: "10.11.25", professor: "Prof.ssa Galandrini", officialTopic: "Cellule NK: Missing-Self, Induced-Self, Recettori NKG2D, NKp46, NKp30, NKp44", textbookLocation: "Paragrafo 6.2" },
    { lessonNumber: "Lezione 19", date: "12.11.25", professor: "Prof.ssa Galandrini", officialTopic: "Recettori KIR, HLA-E / CD94/NKG2A, Licensing NK, ADCC (CD16), Trapianto Aploidentico", textbookLocation: "Paragrafo 6.3" },
    { lessonNumber: "Lezione 20", date: "13.11.25", professor: "Prof.ssa Molfetta", officialTopic: "Risposta Umorale, Cooperazione T-B (CD40-CD40L), Linfociti Tfh, Centro Germinativo", textbookLocation: "Paragrafi 7.1, 7.2" },
    { lessonNumber: "Lezione 21", date: "17.11.25", professor: "Prof.ssa Molfetta", officialTopic: "Enzima AID, Ipermutazione Somatica (SHM), Switch di Classe (CSR), Sindromi Iper-IgM", textbookLocation: "Paragrafo 7.3" },
    { lessonNumber: "Lezione 22", date: "19.11.25", professor: "Prof.ssa Molfetta", officialTopic: "Differenziamento Plasmacellulare (Blimp-1 vs Bcl-6), B memoria, Nicchie Midollari", textbookLocation: "Paragrafo 7.4" },
    { lessonNumber: "Lezione 23", date: "20.11.25", professor: "Prof.ssa Soriani", officialTopic: "Immunità delle Mucose (GALT), Cellule M, Homing Tropico (α4β7/CCR9), IgA Secretorie", textbookLocation: "Paragrafo 8.1" },
    { lessonNumber: "Lezione 24", date: "24.11.25", professor: "Prof.ssa Soriani", officialTopic: "Rottura Tolleranza, Eziologia Autoimmunità, Mimetismo Molecolare, Epitope Spreading", textbookLocation: "Paragrafo 8.2" },
    { lessonNumber: "Lezione 25", date: "26.11.25", professor: "Prof.ssa Rinaldi", officialTopic: "Ipersensibilità di Tipo I (IgE, FcϵRI, Mastociti, Istamina, Leucotrieni, Anafilassi)", textbookLocation: "Paragrafo 8.3" },
    { lessonNumber: "Lezione 26", date: "27.11.25", professor: "Prof.ssa Rinaldi", officialTopic: "Ipersensibilità di Tipo II (Citotossica / Anticorpale) e Tipo III (Immunocomplessi, LES)", textbookLocation: "Paragrafo 8.3" },
    { lessonNumber: "Lezione 27", date: "01.12.25", professor: "Prof.ssa Rinaldi", officialTopic: "Ipersensibilità di Tipo IV (Ritardata DTH, Granuloma, Dermatite da contatto, IGRA)", textbookLocation: "Paragrafo 8.3" },
    { lessonNumber: "Lezione 28", date: "03.12.25", professor: "Prof.ssa Galandrini", officialTopic: "Immunologia dei Trapianti: Alloriconoscimento Diretto/Indiretto, Rigetto, GVHD", textbookLocation: "Paragrafo 8.4" },
    { lessonNumber: "Lezione 29", date: "04.12.25", professor: "Prof.ssa Soriani", officialTopic: "Immunologia dei Tumori: Immunoediting (Eliminazione, Equilibrio, Escape), Evasione", textbookLocation: "Paragrafo 8.5" },
    { lessonNumber: "Lezione 30", date: "10.12.25", professor: "Prof.ssa Soriani", officialTopic: "Immunoterapia Oncologica Avanzata: Ingegneria CAR-T, CRS/Neurotossicità, BiTE", textbookLocation: "Paragrafo 8.5" },
    { lessonNumber: "Lezione 31", date: "11.12.25", professor: "Prof.ssa Molfetta", officialTopic: "Immunodeficienze Primitive B (Bruton, CVID, Deficit IgA) e SCID X-linked (γc)", textbookLocation: "Paragrafo 8.6" },
    { lessonNumber: "Lezione 32", date: "15.12.25", professor: "Prof.ssa Molfetta", officialTopic: "SCID da deficit di ADA, DiGeorge, Sindrome di Wiskott-Aldrich, Screening TREC", textbookLocation: "Paragrafo 8.6" },
    { lessonNumber: "Lezione 33", date: "17.12.25", professor: "Prof.ssa Molfetta", officialTopic: "Immunodeficienze Acquisite: HIV-1, Biologia Molecolare, Tropismo, Patogenesi AIDS", textbookLocation: "Paragrafo 8.7" }
  ]
};

// ==========================================
// 3. COMPONENTE REACT LEZIONE 0
// ==========================================
export const Lezione0HomeView: React.FC<Lezione0Props> = ({
  onNavigateToLesson,
  onOpenQuiz,
  onOpenHub
}) => {
  const data: Lesson0Content = LEZIONE_0_DATA;
  const [activeTab, setActiveTab] = useState<'manifesto' | 'chapters' | 'table'>('chapters');

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8 text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-slate-800 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/50 px-3 py-1 rounded-full">
            {data.professor}
          </span>
          <div className="flex gap-2">
            {onOpenQuiz && (
              <button
                onClick={onOpenQuiz}
                className="px-3 py-1.5 text-xs font-semibold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer"
              >
                🧠 Avvia Quiz Interattivo
              </button>
            )}
            {onOpenHub && (
              <button
                onClick={onOpenHub}
                className="px-3 py-1.5 text-xs font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
              >
                🔍 Cerca nel Corso (Ctrl+K)
              </button>
            )}
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mt-3">
          {data.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-slate-400 mt-1 italic">{data.subtitle}</p>
        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500 dark:text-slate-400">
          <span>🕒 Lettura: {data.duration}</span>
          <span>📚 {data.chapters.length} Macro-Capitoli</span>
          <span>📄 33 Sbobine Unificate</span>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-200 dark:border-slate-800 space-x-4">
        <button
          onClick={() => setActiveTab('chapters')}
          className={`py-2 px-4 font-medium text-sm border-b-2 transition-colors cursor-pointer ${
            activeTab === 'chapters'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold'
              : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200'
          }`}
        >
          📖 Macro-Capitoli (Libro Unico)
        </button>
        <button
          onClick={() => setActiveTab('manifesto')}
          className={`py-2 px-4 font-medium text-sm border-b-2 transition-colors cursor-pointer ${
            activeTab === 'manifesto'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold'
              : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200'
          }`}
        >
          💡 Manifesto Metodologico
        </button>
        <button
          onClick={() => setActiveTab('table')}
          className={`py-2 px-4 font-medium text-sm border-b-2 transition-colors cursor-pointer ${
            activeTab === 'table'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold'
              : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200'
          }`}
        >
          📊 Matrice Sbobine ⟷ Capitoli
        </button>
      </div>

      {/* Tab: Manifesto Metodologico */}
      {activeTab === 'manifesto' && (
        <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-slate-800 p-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{data.manifesto.title}</h2>
          <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
            {data.manifesto.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="border-t border-gray-100 dark:border-slate-800 pt-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Principi di Studio per l'Esame Orale</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.manifesto.principles.map((pr, idx) => (
                <div key={idx} className="bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-2">{pr.title}</h4>
                  <p className="text-sm text-gray-700 dark:text-slate-300">{pr.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tab: Macro-Capitoli */}
      {activeTab === 'chapters' && (
        <section className="space-y-8">
          {data.chapters.map((chap) => (
            <div key={chap.id} className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-slate-800 overflow-hidden">
              <div className="bg-slate-900 text-white p-5">
                <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                  {chap.lessonsIncluded}
                </span>
                <h2 className="text-xl font-bold mt-1">{chap.title}</h2>
                <p className="text-sm text-slate-300 mt-1">{chap.subtitle}</p>
              </div>

              <div className="p-6 divide-y divide-gray-100 dark:divide-slate-800 space-y-6">
                {chap.sections.map((sec) => (
                  <div key={sec.code} className="pt-4 first:pt-0">
                    <div className="flex items-baseline space-x-3 mb-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 rounded">
                        {sec.code}
                      </span>
                      <h3 className="text-md font-bold text-gray-900 dark:text-white">{sec.title}</h3>
                      <span className="text-xs text-gray-400 italic">({sec.sourceLesson})</span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-slate-300 space-y-1.5 pl-2">
                      {sec.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">{bp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Tab: Matrice Sinottica */}
      {activeTab === 'table' && (
        <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-slate-800 overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-700 dark:text-slate-300">
            <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="p-3">Sbobina</th>
                <th className="p-3">Data</th>
                <th className="p-3">Docente</th>
                <th className="p-3">Argomento Ufficiale</th>
                <th className="p-3">Collocazione Testo Unico</th>
                <th className="p-3 text-right">Azione</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-800">
              {data.synopticTable.map((row, idx) => {
                const lessonNum = parseInt(row.lessonNumber.replace(/\D/g, ''), 10);
                return (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-3 font-semibold text-indigo-600 dark:text-indigo-400">{row.lessonNumber}</td>
                    <td className="p-3 text-gray-500">{row.date}</td>
                    <td className="p-3">{row.professor}</td>
                    <td className="p-3 font-medium text-gray-800 dark:text-slate-200">{row.officialTopic}</td>
                    <td className="p-3 font-mono text-xs text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 rounded">
                      {row.textbookLocation}
                    </td>
                    <td className="p-3 text-right">
                      {onNavigateToLesson && !isNaN(lessonNum) && (
                        <button
                          onClick={() => onNavigateToLesson(lessonNum)}
                          className="px-2.5 py-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 rounded transition-colors cursor-pointer"
                        >
                          Apri →
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
};

export default Lezione0HomeView;