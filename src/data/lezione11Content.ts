import { QuizQuestion, Flashcard } from './chapterContent';

export interface ScidDetail {
  type: string;
  geneAndProtein: string;
  inheritance: string;
  immunophenotype: string;
  molecularMechanism: string;
  clinicalNotes: string;
}

export const SCID_CLASSIFICATION_DATA: ScidDetail[] = [
  {
    type: 'SCID X-Linked (γc)',
    geneAndProtein: 'IL2RG (Catena γ comune / CD132)',
    inheritance: 'Recessiva legata all’X (Xq13.1)',
    immunophenotype: 'T⁻ B⁺ NK⁻',
    molecularMechanism: 'La catena γc è condivisa dai recettori di IL-2, IL-4, IL-7, IL-9, IL-15 e IL-21. Il difetto di segnalazione di IL-7 arresta la proliferazione dei timociti pro-T (DN), mentre il difetto di IL-15 impedisce lo sviluppo delle cellule NK.',
    clinicalNotes: 'Rappresenta circa il 45-50% di tutte le SCID. I linfociti B sono presenti in numero normale ma risultano non funzionali per assenza dell’aiuto T helper (grave ipogammaglobulinemia globale).'
  },
  {
    type: 'SCID da Deficit di JAK3',
    geneAndProtein: 'JAK3 (Janus Kinase 3)',
    inheritance: 'Autosomica recessiva (19p13.1)',
    immunophenotype: 'T⁻ B⁺ NK⁻',
    molecularMechanism: 'JAK3 è la tirosin-chinasi legata specificamente alla coda citoplasmatica della catena γc: fosforila i fattori STAT5a/b in risposta a IL-7 e IL-15. La sua assenza fenocopia esattamente la SCID X-linked.',
    clinicalNotes: 'Rappresenta il 6-7% dei casi. Stesso quadro clinico della SCID X-linked ma presente con uguale frequenza in entrambi i sessi.'
  },
  {
    type: 'SCID da Deficit di IL-7Rα',
    geneAndProtein: 'IL7R (Catena α del recettore per IL-7 / CD127)',
    inheritance: 'Autosomica recessiva (5p13.2)',
    immunophenotype: 'T⁻ B⁺ NK⁺',
    molecularMechanism: 'Viene compromessa selettivamente la via proliferativa dei timociti indotta da IL-7. La via di IL-15 (che impiega la catena IL-15Rβ e γc) è invece del tutto intatta, consentendo il normale differenziamento delle cellule NK.',
    clinicalNotes: 'Rappresenta circa il 10% dei casi. La presenza di cellule NK funzionali è utile nella diagnosi differenziale con le forme legate a γc e JAK3.'
  },
  {
    type: 'SCID da Deficit di RAG1 / RAG2',
    geneAndProtein: 'RAG1 / RAG2 (Recombination Activating Genes)',
    inheritance: 'Autosomica recessiva (11p12)',
    immunophenotype: 'T⁻ B⁻ NK⁺',
    molecularMechanism: 'Incapacità assoluta di compiere la ricombinazione somatica V(D)J dei recettori antigenici TCR e BCR. I timociti si arrestano allo stadio DN3 e i precursori B allo stadio pro-B.',
    clinicalNotes: 'Mancano sia i linfociti T che i B. Mutazioni ipomorfe parziali causano la Sindrome di Omenn (eritrodermia esfoliativa, eosinofilia e linfociti T oligoclonali autoreattivi).'
  },
  {
    type: 'SCID Radiosensibile (Artemis)',
    geneAndProtein: 'DCLRE1C (Endonucleasi Artemis)',
    inheritance: 'Autosomica recessiva (10p13)',
    immunophenotype: 'T⁻ B⁻ NK⁺',
    molecularMechanism: 'Artemis apre le forcine a hairpin generate da RAG nel complesso NHEJ (riparazione delle rotture a doppio filamento del DNA). Oltre al blocco V(D)J, la cellula non ripara i danni al DNA indotti da radiazioni.',
    clinicalNotes: 'Pazienti affetti da grave immunodeficienza associata a radiosensibilità cellulare estrema e predisposizione a neoplasie cutanee ed ematologiche.'
  },
  {
    type: 'ADA-SCID',
    geneAndProtein: 'ADA (Adenosina Deaminasi)',
    inheritance: 'Autosomica recessiva (20q13.12)',
    immunophenotype: 'T⁻ B⁻ NK⁻',
    molecularMechanism: 'L’accumulo di adenosina e deossiadenosina provoca l’accumulo intracellulare di dATP, potente inibitore della ribonucleotide reduttasi. Ne deriva un blocco della sintesi del DNA con apoptosi massiva di tutti i progenitori linfoidi in attiva divisione.',
    clinicalNotes: 'Rappresenta il 15-16% dei casi. È la forma del celebre "bimbo-bolla" David Vetter. Trattata storicamente con enzima PEG-ADA e primo modello clinico di successo per la terapia genica con vettori retrovirali.'
  }
];

export interface ThymicSelectionStep {
  feature: string;
  positiveSelection: string;
  negativeSelection: string;
}

export const THYMIC_SELECTION_SUMMARY: ThymicSelectionStep[] = [
  {
    feature: 'Sede Anatomica Timica',
    positiveSelection: 'Corticale timica',
    negativeSelection: 'Midollare timica e giunzione cortico-midollare'
  },
  {
    feature: 'Cellule Presentanti lo Stroma',
    positiveSelection: 'Cellule epiteliali timiche corticali (cTEC)',
    negativeSelection: 'Cellule epiteliali timiche midollari (mTEC) e Cellule Dendritiche timiche'
  },
  {
    feature: 'Stadio Maturativo del Timocita',
    positiveSelection: 'Doppio Positivo (DP: CD4⁺ CD8⁺)',
    negativeSelection: 'Singolo Positivo (SP: CD4⁺ o CD8⁺) e fase tardiva DP'
  },
  {
    feature: 'Forza del Legame TCR : pMHC-self',
    positiveSelection: 'Affinità bassa-intermedia per MHC-self',
    negativeSelection: 'Affinità elevata / alta avidità per peptidi self'
  },
  {
    feature: 'Destino Biologico del Timocita',
    positiveSelection: 'Sopravvivenza e maturazione (chi non lega muore per neglect)',
    negativeSelection: 'Apoptosi (delezione clonale) o deviazione a Treg FoxP3⁺'
  },
  {
    feature: 'Obiettivo Fisiologico Fondamentale',
    positiveSelection: 'Garantire la Restrizione per l’MHC self dell’individuo',
    negativeSelection: 'Garantire la Tolleranza Centrale prevenendo l’autoimmunità'
  }
];

export const QUIZ_LEZIONE_11: QuizQuestion[] = [
  {
    "id": "q11-1",
    "question": "La selezione negativa dei timociti nel timo richiede un’interazione del TCR con il complesso peptide-MHC self caratterizzata da:",
    "options": [
      "Bassa affinità (permette il differenziamento dei T convenzionali)",
      "Alta affinità / avidità (indispensabile per indurre l’apoptosi da delezione clonale dei cloni autoreattivi)",
      "Assoluta assenza di molecole MHC sulla superficie stromale",
      "Interazione esclusiva con antigeni lipidici su CD1d"
    ],
    "correctIndex": 1,
    "explanation": "La selezione negativa serve ad eliminare i cloni potenzialmente pericolosi per l’organismo. Se il TCR del timocita riconosce il complesso pMHC self con alta affinità o alta avidità nella midollare timica, la cellula riceve un segnale pro-apoptotico che ne determina la morte per delezione clonale. Al contrario, un legame a bassa affinità consente la sopravvivenza dei linfociti T convenzionali (selezionati positivamente nella corticale), mentre un’affinità intermedia-alta orienta verso la differenziazione in linfocita T regolatore naturale (Treg FoxP3+).",
    "clinicalPearl": "Se la selezione negativa fallisce a causa del mancato riconoscimento ad alta affinità o per mutazioni dei trasduttori pro-apoptotici (es. Bim), i linfociti autoreattivi penetrano nel sangue periferico scatenando malattie autoimmuni multiorgano."
  },
  {
    "id": "q11-2",
    "question": "Qual è la conseguenza cellulare ed immunofenotipica della mutazione della catena gamma comune (γc) nei pazienti affetti da SCID X-linked?",
    "options": [
      "Assenza di linfociti B e preservazione dei linfociti T ed NK",
      "Iperproduzione incontrollata di linfociti T citotossici CD8+",
      "Assenza di linfociti T e di cellule NK, con presenza di linfociti B (fenotipo T⁻ B⁺ NK⁻)",
      "Mancata espressione delle molecole MHC di classe I su tutte le cellule"
    ],
    "correctIndex": 2,
    "explanation": "Come spiegato in aula dalla Professoressa Galandrini, la catena γc è condivisa da IL-2, IL-4, IL-7, IL-9, IL-15 e IL-21. La perdita del segnale di IL-7 blocca la proliferazione dei timociti pro-T nel timo, azzerando i linfociti T; la contemporanea perdita del segnale di IL-15 azzera la maturazione delle cellule NK. I linfociti B umani sono invece presenti in circolo (poiché meno dipendenti da IL-7 rispetto al topo), ma non sono in grado di produrre anticorpi per assenza del supporto T helper.",
    "clinicalPearl": "La SCID X-linked costituisce la forma più comune di immunodeficienza severa combinata (~50% dei casi). Senza trapianto allogenico tempestivo di cellule staminali ematopoietiche o terapia genica, i neonati muoiono entro il primo anno di vita per infezioni opportunistiche polmonari da Pneumocystis jirovecii o sepsi fungine."
  },
  {
    "id": "q11-3",
    "question": "A quali sequenze specifiche di DNA si legano gli enzimi ricombinasi RAG-1 e RAG-2 durante il riarrangiamento dei loci genetici del TCR?",
    "options": [
      "Ai promotori trascrittivi degli istoni H3 e H4",
      "Alle anse ipervariabili CDR1 e CDR2 della catena alfa",
      "Ai domini transmembrana della catena invariante CD74",
      "Alle sequenze segnale di ricombinazione (RSS), costituite da un eptamero conservato e un nonamero separati da spaziatore di 12 o 23 nucleotidi"
    ],
    "correctIndex": 3,
    "explanation": "RAG1 e RAG2 riconoscono con estrema precisione le sequenze segnale di ricombinazione (RSS) che fiancheggiano ciascun segmento genico V, D e J. Ciascuna RSS è formata da un eptamero (7 bp) e un nonamero (9 bp), separati da sequenze spaziatrici rigide di 12 o 23 paia di basi (un giro o due giri completi della doppia elica del DNA, rispettando la \"regola del 12/23\"). RAG introduce tagli a doppio filamento formando strutture chiuse a forcina (hairpin).",
    "clinicalPearl": "Mutazioni con perdita totale di funzione in RAG1 o RAG2 causano la SCID autosomica recessiva T⁻ B⁻ NK⁺. Mutazioni parziali ipomorfe con minima attività residua causano invece la Sindrome di Omenn, caratterizzata da eritrodermia generalizzata, alopecia, epatosplenomegalia ed espansione oligoclonale aberrante di linfociti T autoreattivi."
  },
  {
    "id": "q11-4",
    "question": "Dove si trovano localizzati nel genoma umano i loci genetici deputati alla codifica delle catene del TCR?",
    "options": [
      "Cromosoma 7 per la catena β (e γ); Cromosoma 14 per la catena α (e δ)",
      "Cromosoma 6p21 all’interno del locus HLA",
      "Cromosoma 1 per la catena α e Cromosoma 2 per la catena β",
      "Cromosoma X per tutte le catene del TCR"
    ],
    "correctIndex": 0,
    "explanation": "Nel genoma umano, il locus per la catena β del TCR è situato sul Cromosoma 7 (che ospita anche il locus della catena γ). Il locus per la catena α è situato sul Cromosoma 14; in modo affascinante, il locus per la catena δ è interamente nidificato e inframezzato all’interno del locus della catena α (tra i segmenti Vα e Jα), cosicché qualsiasi riarrangiamento del locus α comporta l’escissione e la cancellazione irreversibile del locus δ.",
    "clinicalPearl": "Nelle traslocazioni cromosomiche associate a leucemie linfoblastiche acute a cellule T (T-ALL), i promotori altamente attivi dei loci TCR sul cromosoma 7 e 14 vengono erroneamente traslocati in prossimità di proto-oncogeni come NOTCH1, TAL1 o LMO2, causandone l’iperespressione oncogenica costitutiva."
  },
  {
    "id": "q11-5",
    "question": "Qual è il ruolo molecolare del fattore di trascrizione nucleare AIRE nelle cellule epiteliali midollari timiche (mTEC) e quale patologia causa la sua mutazione?",
    "options": [
      "Induce la ricombinazione somatica della catena pesante delle immunoglobuline",
      "Permette l’espressione ectopica/promiscua di migliaia di antigeni tessuto-specifici periferici (insulina, tiroglobulina, proteina della mielina) nelle mTEC per istruire la selezione negativa; la sua mutazione causa la sindrome APECED / APS-1",
      "Blocca la produzione di interferone gamma durante le infezioni virali",
      "Fosforila la catena CD3 zeta inibendo l’apoptosi dei timociti"
    ],
    "correctIndex": 1,
    "explanation": "Il fattore AIRE (Autoimmune Regulator) rilascia la cromatina nelle mTEC permettendo loro di esprimere ectopicamente proteine che fisiologicamente appartengono a tessuti periferici remoti (isole pancreatiche, tiroide, surreni, stomaco). I timociti singoli positivi che riconoscono questi autoantigeni con alta affinità vengono eliminati per delezione clonale. Mutazioni in AIRE impediscono questo processo e scatenano la sindrome APECED / APS-1 (Autoimmune Polyendocrinopathy-Candidiasis-Ectodermal Dystrophy).",
    "clinicalPearl": "I pazienti con APECED sviluppano ipoparatiroidismo, insufficienza surrenalica primaria (Addison) e candidiasi mucocutanea cronica: quest’ultima è causata dalla comparsa paradossa di autoanticorpi neutralizzanti ad altissimo titolo diretti contro l’interleuchina 17 (IL-17A/F), che azzerano le difese epiteliali contro Candida albicans."
  },
  {
    "id": "q11-6",
    "question": "Che cosa accade a un timocita nello stadio \"Doppio Positivo\" (DP) se il suo TCR riconosce con bassa affinità una molecola MHC di classe I presentata dalle cellule epiteliali timiche corticali (cTEC)?",
    "options": [
      "Viene eliminato immediatamente per apoptosi da danno genetico",
      "Perde sia CD4 che CD8 diventando una cellula NKT invariante",
      "Sopravvive alla selezione positiva, silenzia l’espressione del corecettore CD4 preservando CD8, e differenzia in linfocita T citotossico singolo positivo CD8+ secondo il modello istruttivo",
      "Inverte il riarrangiamento genico della catena beta mediante l’enzima Artemis"
    ],
    "correctIndex": 2,
    "explanation": "Il legame a bassa affinità con l’MHC-I sulle cTEC corticali fornisce al timocita doppio positivo (CD4+ CD8+) i segnali trofici di sopravvivenza (selezione positiva / restrizione MHC). Secondo il modello istruttivo dominante, l’interazione specifica del corecettore CD8 con il dominio α3 di MHC-I impartisce un segnale intracellulare che arresta la trascrizione del gene CD4 mantenendo attivo CD8: il timocita transita allo stadio di Singolo Positivo CD8+ ed è guidato verso la midollare timica.",
    "clinicalPearl": "Pazienti con mutazioni nel gene CD8 o nel dominio di interazione con Lck non riescono a completare il differenziamento istruttivo dei linfociti T singoli positivi CD8+, manifestando una grave suscettibilità selettiva a infezioni virali respiratorie ed erpetiche."
  }
];

export const FLASHCARDS_LEZIONE_11: Flashcard[] = [
  {
    id: 'fc-l11-1',
    front: 'Quali sono i quattro stadi dei Timociti Doppi Negativi (DN1-DN4) e quali marcatori li distinguono?',
    back: 'I timociti DN (CD4⁻ CD8⁻) si distinguono in base a CD44 e CD25: 1) DN1: CD44⁺ CD25⁻ (pre-T precoce, c-Kit alto); 2) DN2: CD44⁺ CD25⁺ (inizio riarrangiamento Dβ-Jβ); 3) DN3: CD44⁻ CD25⁺ (riarrangiamento Vβ-DJβ ed espressione del pre-TCR con la catena surrogata pTα); 4) DN4: CD44⁻ CD25⁻ (il segnale del pre-TCR induce esclusione allelica del locus β, proliferazione e transizione a doppio positivo CD4⁺ CD8⁺).',
    category: 'Cellulare'
  },
  {
    id: 'fc-l11-2',
    front: 'Perché il "Topo Nudo" non possiede linfociti T e cosa insegna sulla biologia timica?',
    back: 'Il topo nudo (mutazione recessiva Foxn1) ha cellule staminali ematopoietiche normali ma è privo di epitelio e stroma timico funzionale. Non matura linfociti T, ma guarisce con un trapianto di timo (anche da topo SCID privo di T), dimostrando che lo stroma epiteliale timico (cTEC ed mTEC) è la componente istruttiva insostituibile per l’emopoiesi T.',
    category: 'Fondamenti'
  },
  {
    id: 'fc-l11-3',
    front: 'Qual è la causa genetica e il quadro clinico della Sindrome di DiGeorge?',
    back: 'Microdelezione sul cromosoma 22q11.2 che determina disgenesia del III e IV arco/tasca branchiale embrionale. Quadro clinico: 1) Aplasia/ipoplasia timica con deficit grave di linfociti T; 2) Ipoplasia delle paratiroidi con ipocalcemia neonatale e tetania; 3) Cardiopatie congenite conotruncali (tetralogia di Fallot); 4) Facies dismorfica.',
    category: 'Clinica'
  },
  {
    id: 'fc-l11-4',
    front: 'Come si differenzia la SCID X-linked dalla SCID da deficit di IL-7Rα?',
    back: 'Entrambe causano assenza di linfociti T (T⁻ B⁺). Tuttavia, la SCID X-linked muta la catena γc (condivisa da IL-7 e IL-15), causando anche l’assenza delle cellule NK (T⁻ B⁺ NK⁻). Il deficit di IL-7Rα blocca solo la via di IL-7 (lasciando intatta la via di IL-15 mediata da IL-15Rβ/γc), quindi le cellule NK sono presenti e funzionanti (T⁻ B⁺ NK⁺).',
    category: 'Clinica'
  },
  {
    id: 'fc-l11-5',
    front: 'Che cos’è la "Morte per Negligenza" (Death by Neglect) nella corticale timica?',
    back: 'Riguarda oltre il 90% dei timociti doppi positivi: se il loro TCR generato casualmente non è in grado di legare con alcuna affinità le molecole MHC self presentate dalle cTEC corticali, il timocita non riceve alcun segnale trofico di sopravvivenza e va incontro ad apoptosi spontanea entro 3-4 giorni.',
    category: 'Molecolare'
  },
  {
    id: 'fc-l11-6',
    front: 'Qual è il ruolo del gene AIRE e quale correlazione esiste con la candidiasi mucocutanea cronica?',
    back: 'AIRE promuove l’espressione ectopica di migliaia di antigeni periferici nelle mTEC per eliminare i cloni T autoreattivi. Nella sindrome APECED (mutazione di AIRE), l’autoimmunità aberrante produce autoanticorpi neutralizzanti diretti contro l’IL-17 (citochina essenziale dei Th17 per l’immunità mucosale), provocando candidiasi mucocutanea cronica refrattaria.',
    category: 'Patologia'
  }
];
