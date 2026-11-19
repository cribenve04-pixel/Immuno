import { QuizQuestion, Flashcard } from './chapterContent';

export interface PathwayComparisonDetail {
  feature: string;
  endogenousPathway: string;
  exogenousPathway: string;
  molecularMechanism: string;
}

export const PATHWAY_COMPARISON_DATA: PathwayComparisonDetail[] = [
  {
    feature: 'Origine dell’Antigene',
    endogenousPathway: 'Proteine citosoliche endogene (sintesi virale, proteine cellulari alterate/tumorali, self)',
    exogenousPathway: 'Proteine extracellulari esogene (batteri, tossine, funghi, virus captati dall’esterno)',
    molecularMechanism: 'Separazione topografica: il citoplasma ospita la replicazione dei patogeni intracellulari; i fluidi extracellulari contengono i microbi captati per fagocitosi o endocitosi.'
  },
  {
    feature: 'Macchinario Proteolitico',
    endogenousPathway: 'Proteasoma 26S e Immunoproteasoma (subunità LMP2, LMP7, MECL-1 indotte da IFN-γ)',
    exogenousPathway: 'Endosomi e Lisosomi acidi contenenti proteasi endopeptidasiche e catepsine (B, D, L, S)',
    molecularMechanism: 'La via endogena sfrutta la poliubiquitinazione Lys48; la via esogena sfrutta l’acidificazione progressiva delle vescicole (pH 6.5 → 4.5).'
  },
  {
    feature: 'Trasporto nel Compartimento di Caricamento',
    endogenousPathway: 'Trasportatore TAP1/TAP2 dipendente da ATP nella membrana del RER',
    exogenousPathway: 'Traffico vescicolare endocitico/fagocitico verso il compartimento MIIC (MHC Class II Compartment)',
    molecularMechanism: 'TAP trasloca selettivamente peptidi di 8-13 aminoacidi con residui C-terminali idrofobici/basici dal citoplasma al lume del RER.'
  },
  {
    feature: 'Protezione della Tasca & Chaperonine',
    endogenousPathway: 'Calnexina, Calreticulina, ERp57 e Tapasina (complesso PLC di caricamento nel RER)',
    exogenousPathway: 'Catena Invariante CD74 (trimero Ii) che blocca fisicamente la tasca nel RER e guida al MIIC',
    molecularMechanism: 'La catena invariante impedisce che i peptidi citosolici presenti nel RER leghino prematuramente le molecole MHC-II.'
  },
  {
    feature: 'Frammento Residuo e Peptide Exchange',
    endogenousPathway: 'ERAP1 ed ERAP2 (aminopeptidasi del RER che rifiniscono l’estremità N-terminale)',
    exogenousPathway: 'Frammento CLIP (rimosso conformazionalmente dal chaperone catalitico HLA-DM)',
    molecularMechanism: 'HLA-DM funge da scambiatore peptidico (peptide editor), stabilizzando MHC-II vuoto fino al legame di un peptide a più alta affinità.'
  },
  {
    feature: 'Regolazione Negativa Naturale',
    endogenousPathway: 'Proteine virali di immunoevasione (ICP47 di HSV, US6/US11 di CMV, E19 di Adenovirus)',
    exogenousPathway: 'Molecola HLA-DO (inibitore fisiologico di HLA-DM) e ubiquitina ligasi MARCH1',
    molecularMechanism: 'Nelle DC immature e nei B resting, HLA-DO e MARCH1 limitano la presentazione esogena mantenendo la tolleranza verso il self.'
  },
  {
    feature: 'Molecola Presentante & Destinazione',
    endogenousPathway: 'MHC di Classe I (catena α + β2M) espressa su TUTTE le cellule nucleate → Linfociti T CD8+ CTL',
    exogenousPathway: 'MHC di Classe II (eterodimero α/β) espressa su APC PROFESSIONISTE → Linfociti T CD4+ Th',
    molecularMechanism: 'I CTL CD8+ eliminano direttamente la cellula bersaglio per lisi/apoptosi; i Th CD4+ rilasciano citochine per potenziare fagociti e linfociti B.'
  }
];

export interface ViralImmunoevasionDetail {
  virus: string;
  viralProtein: string;
  targetMechanism: string;
  immunologicalImpact: string;
}

export const VIRAL_IMMUNOEVASION_DATA: ViralImmunoevasionDetail[] = [
  {
    virus: 'Cytomegalovirus (CMV / HCMV)',
    viralProtein: 'US2 & US11',
    targetMechanism: 'Retrotraslocazione della catena pesante MHC-I dal lume del RER al citoplasma per degradazione proteasomica',
    immunologicalImpact: 'Distruzione precoce dell’MHC-I appena sintetizzato, azzerando la presentazione ai CTL CD8+.'
  },
  {
    virus: 'Cytomegalovirus (CMV / HCMV)',
    viralProtein: 'US3 & US6',
    targetMechanism: 'US3 blocca il traffico esocitico nel Golgi; US6 inibisce il legame dell’ATP su TAP1/2 bloccando il trasporto dei peptidi',
    immunologicalImpact: 'Paralisi multipla e coordinata della via di presentazione citosolica su più livelli sequenziali.'
  },
  {
    virus: 'Herpes Simplex Virus (HSV-1 / HSV-2)',
    viralProtein: 'ICP47',
    targetMechanism: 'Si lega con affinità nanomolare al sito citosolico del trasportatore TAP1/TAP2 bloccando l’accesso dei peptidi',
    immunologicalImpact: 'I peptidi generati dal proteasoma non possono entrare nel RER; l’MHC-I resta vuoto, instabile e non viene esposto in superficie.'
  },
  {
    virus: 'Adenovirus',
    viralProtein: 'E19 (gp19K)',
    targetMechanism: 'Trattiene fisicamente il complesso MHC-I nel lume del reticolo endoplasmatico tramite un segnale di ritenzione KDEL-like',
    immunologicalImpact: 'MHC-I non raggiunge mai la membrana plasmatica, consentendo la persistenza virale all’interno dell’epitelio respiratorio.'
  },
  {
    virus: 'Kaposi Sarcoma-associated Herpesvirus (KSHV / HHV-8)',
    viralProtein: 'K3 & K5',
    targetMechanism: 'Ubiquitina ligasi virali omologhe a MARCH1 che ubiquitinano le code citoplasmatiche di MHC-I e molecole costimolatorie',
    immunologicalImpact: 'Rapida endocitosi e distruzione lisosomiale di MHC-I e ICAM-1 dalla superficie delle cellule infettate.'
  }
];

export const QUIZ_LEZIONE_9: QuizQuestion[] = [
  {
    "id": "q9-1",
    "question": "Qual è il ruolo molecolare svolto dalla proteina HLA-DM all’interno dei compartimenti endolisosomiali durante la via di processazione esogena?",
    "options": [
      "Lega direttamente il peptide esogeno e lo trasporta fino alla membrana plasmatica",
      "Fosforila la proteina TAP1 per consentire l’ingresso del lisosoma nel reticolo endoplasmatico",
      "Degrada la catena pesante di MHC-II mediante attività amilolitica",
      "Agisce come chaperone catalitico (\"peptide editor\"): si associa a MHC-II, induce una variazione conformazionale che determina il distacco del frammento CLIP e favorisce il caricamento di peptidi a più elevata affinità"
    ],
    "correctIndex": 3,
    "explanation": "Come spiegato in aula dalla Professoressa Molfetta, HLA-DM non è capace di legare peptidi antigenici. Si tratta di una molecola non polimorfa simile a MHC-II che funge da chaperone conformazionale: si lega all’eterodimero MHC-II nei lisosomi/MIIC, ne deforma la tasca provocando il rilascio del peptide inibitore CLIP e mantiene aperta la fessura fino a quando non vi si inserisce un peptide antigenico con affinità sufficiente a conferire stabilità al complesso.",
    "clinicalPearl": "Mutazioni nel gene HLA-DM o nella subunità regolatoria causano la Bare Lymphocyte Syndrome di Tipo II, in cui MHC-II resta occupato da CLIP e non riesce a presentare antigeni ai CD4+, provocando una grave immunodeficienza combinata con assenza di risposta anticorpale T-dipendente."
  },
  {
    "id": "q9-2",
    "question": "Che cosa accade alla presentazione antigenica nelle cellule prive dei trasportatori funzionali TAP1 o TAP2 (Sindrome del Linfocita Nudo di Tipo I)?",
    "options": [
      "I peptidi generati nel citosol non possono essere traslocati nel lume del RER: le molecole MHC-I rimangono vuote, non completano l’assemblaggio con la β2M e vengono trattenute e degradate, con assenza quasi totale di MHC-I sulla superficie cellulare",
      "I peptidi citosolici entrano nel nucleo cellulare inducendo mutazioni neoplastiche immediate",
      "L’MHC di classe I si carica spontaneamente con lipidi e polisaccaridi extracellulari",
      "Viene iperattivata la secrezione di immunoglobuline IgE da parte dei neutrofili"
    ],
    "correctIndex": 0,
    "explanation": "Il trasportatore eterodimerico TAP1/TAP2 consuma ATP per pompare i peptidi tagliati dal proteasoma attraverso la membrana del RER. Se TAP è mutato o assente (come nella Bare Lymphocyte Syndrome di Tipo I), la catena α di MHC-I non può legare il peptide; in assenza del peptide stabilizzatore, il trimero collassa e viene degradato nel RE. I pazienti presentano livelli plasmatici quasi nulli di MHC-I di superficie e un profondo deficit di linfociti T citotossici CD8+.",
    "clinicalPearl": "I pazienti con deficit di TAP soffrono di bronchiectasie e infezioni batteriche respiratorie croniche necrotizzanti (Pseudomonas, Haemophilus) sin dall’infanzia, ma conservano paradossalmente una parziale immunità antivirale grazie alle cellule NK."
  },
  {
    "id": "q9-3",
    "question": "Per quale motivo l’interferone-gamma (IFN-γ) converte il proteasoma costitutivo in \"immunoproteasoma\" mediante l’incorporazione delle subunità LMP2 e LMP7?",
    "options": [
      "Per inibire la degradazione delle proteine batteriche e favorire la sopravvivenza del patogeno",
      "Perché LMP2 e LMP7 orientano l’attività proteolitica verso tagli che generano preferenzialmente peptidi di 8-10 aminoacidi dotati di residui carbossi-terminali idrofobici o basici, ideali per l’ancoraggio nella tasca di MHC-I",
      "Per consentire al proteasoma di fondersi direttamente con i fagosomi della membrana plasmatica",
      "Per sostituire completamente il ruolo della β2-microglobulina nella secrezione di citochine"
    ],
    "correctIndex": 1,
    "explanation": "Durante uno stato infiammatorio o infezione virale, l’IFN-γ stimola la trascrizione dei geni LMP2 e LMP7 (localizzati nel locus HLA sul cromosoma 6). Queste subunità catalitiche si sostituiscono a quelle ordinarie del proteasoma 20S modificandone la specificità di taglio chimiotriptico e triptico: producono con altissima efficienza peptidi della lunghezza corretta (8-10 aa) e con il motivo àncora C-terminale (leucina, isoleucina, valina) perfettamente compatibile con la tasca di MHC-I e con il trasportatore TAP.",
    "clinicalPearl": "Inibitori selettivi dell’immunoproteasoma (come ONX-0914) sono attualmente in fase di sperimentazione clinica per il trattamento di patologie autoimmuni e nel mieloma multiplo resistente al bortezomib."
  },
  {
    "id": "q9-4",
    "question": "Qual è il meccanismo molecolare con cui l’ubiquitina ligasi MARCH1 regola il livello di espressione di MHC-II nelle cellule dendritiche immature rispetto a quelle attivate?",
    "options": [
      "MARCH1 fosforila il recettore CCR7 bloccando la migrazione nei vasi linfatici",
      "MARCH1 è una proteina virale di Epstein-Barr che distrugge selettivamente i linfociti B naïve",
      "Nelle DC immature MARCH1 è attiva sulla membrana endosomiale e ubiquitina la coda di MHC-II determinandone la continua degradazione lisosomiale; l’attivazione via TLR spegne la trascrizione di MARCH1, consentendo a MHC-II di accumularsi stabilmente in superficie con un’emivita prolungata",
      "MARCH1 converte il frammento CLIP in un peptide immunogenico ad alta affinità"
    ],
    "correctIndex": 2,
    "explanation": "Nelle cellule dendritiche immature residenti nei tessuti periferici, le molecole MHC-II subiscono un continuo ricircolo: l’ubiquitina ligasi MARCH1 ne ubiquitina le code citoplasmatiche indirizzandole alla distruzione lisosomiale, mantenendo bassi i livelli di superficie. Quando la DC riconosce un patogeno mediante PRR/TLR, la trascrizione del gene MARCH1 viene rapidamente arrestata: le molecole MHC-II neosintetizzate cariche di peptidi microbici non vengono più degradate, accumulandosi sulla membrana plasmatica con un’emivita che passa da poche ore a oltre 30-40 ore.",
    "clinicalPearl": "I virus oncogeni come il virus del Sarcoma di Kaposi (KSHV) hanno sviluppato le proteine omologhe K3 e K5 che mimano l’azione di MARCH1, inducendo la degradazione forzata di MHC-I e delle molecole costimolatorie per sottrarsi alla risposta immune."
  },
  {
    "id": "q9-5",
    "question": "Quale delle seguenti combinazioni descrive correttamente i \"Tre Segnali\" tassativi forniti da una Cellula Dendritica matura per l’attivazione efficace (priming) di un Linfocita T naïve?",
    "options": [
      "Segnale 1: CD40L legante CD40; Segnale 2: Deamidazione del glutine; Segnale 3: Fagocitosi per opsonizzazione",
      "Segnale 1: Secrezione di istamina; Segnale 2: Attivazione del complemento per via alternativa; Segnale 3: Attivazione delle piastrine",
      "Segnale 1: Legame di IgE al recettore FcεRI; Segnale 2: Granzima B citosolico; Segnale 3: Perforina di membrana",
      "Segnale 1: Complesso TCR:pMHC (+ corecettore CD4/CD8); Segnale 2: Costimolazione B7 (CD80/CD86) legante CD28; Segnale 3: Citochine polarizzanti (es. IL-12, IL-4, IL-6)"
    ],
    "correctIndex": 3,
    "explanation": "Il priming di un linfocita T vergine (naïve) richiede inderogabilmente tre segnali concertati: il Segnale 1 conferisce la specificità antigenica (interazione del TCR con il peptide alloggiato su MHC e docking del corecettore CD4 o CD8); il Segnale 2 garantisce la costimolazione di sopravvivenza e proliferazione (le molecole B7-1/CD80 e B7-2/CD86 della DC interagiscono con il recettore CD28 sul linfocita T; in assenza del Segnale 2, il linfocita va incontro ad anergia o apoptosi); il Segnale 3 è mediato da citochine solubili istruenti (IL-12 per differenziazione Th1, IL-4 per Th2, TGF-β+IL-6 per Th17) che determinano il profilo funzionale effettrice.",
    "clinicalPearl": "Il farmaco Abatacept (CTLA-4-Ig) è una proteina di fusione solubile che lega ad altissima affinità le molecole B7 (CD80/CD86) sulle APC, impedendo il legame con CD28 e bloccando il Segnale 2: è impiegato con successo nell’artrite reumatoide per spegnere l’attivazione T autoreattiva."
  }
];

export const FLASHCARDS_LEZIONE_9: Flashcard[] = [
  {
    id: 'fc-l9-1',
    front: 'Qual è il ruolo biologico della Catena Invariante (CD74 / Ii) nel reticolo endoplasmatico?',
    back: 'La catena invariante forma un trimero nel RER che si associa a tre eterodimeri di MHC-II (complesso nonamerico). Svolge due compiti cardine: 1) Inserisce una propria porzione nella tasca di legame peptidica di MHC-II, impedendo che vi alloggino prematuramente i peptidi citosolici destinati a MHC-I; 2) Possiede nella coda citoplasmatica segnali di smistamento che indirizzano il complesso lungo la via esocitica verso il compartimento endosomiale acido (MIIC).',
    category: 'Molecolare'
  },
  {
    id: 'fc-l9-2',
    front: 'Che cos’è il frammento CLIP e quale proteina ne promuove il rilascio nei lisosomi?',
    back: 'CLIP (Class II-associated Invariant chain Peptide) è il piccolo frammento amminoacidico della catena invariante CD74 che rimane intrappolato nella tasca di MHC-II dopo che le catepsine lisosomiali hanno digerito il resto della proteina esposta. Viene attivamente rimosso dallo scambiatore catalitico HLA-DM, che modifica la conformazione della tasca permettendo il caricamento di peptidi antigenici esogeni ad alta affinità.',
    category: 'Molecolare'
  },
  {
    id: 'fc-l9-3',
    front: 'Qual è la funzione del trasportatore TAP1/TAP2 e in quale patologia risulta mutato?',
    back: 'TAP1/TAP2 è un eterodimero della famiglia dei trasportatori ABC che sfrutta l’idrolisi di ATP per pompare i peptidi di 8-13 aminoacidi generati dal proteasoma dal citoplasma al lume del RER. Mutazioni con perdita di funzione causano la "Sindrome del Linfocita Nudo di Tipo I" (Bare Lymphocyte Syndrome I): assenza di peptidi nel RER, collasso e degradazione di MHC-I, mancata espressione di superficie e grave deficit di linfociti T citotossici CD8+.',
    category: 'Clinica'
  },
  {
    id: 'fc-l9-4',
    front: 'In che modo le aminopeptidasi ERAP1 ed ERAP2 influenzano la suscettibilità a malattie autoimmuni?',
    back: 'ERAP1 ed ERAP2 operano il "trimming" N-terminale dei peptidi traslocati da TAP nel RER, accorciandoli alla lunghezza ottimale di 8-10 aminoacidi per MHC-I. Polimorfismi di ERAP con elevata attività enzimatica o splicing funzionale aumentano la velocità e il numero di peptidi processati, inclusi peptidi self patogenetici che possono essere presentati da alleli a rischio come HLA-B*27, innescando la spondilite anchilosante.',
    category: 'Patologia'
  },
  {
    id: 'fc-l9-5',
    front: 'Che differenza funzionale sussiste tra Cellule Dendritiche, Macrofagi e Linfociti B come APC?',
    back: 'Le Cellule Dendritiche sono le uniche APC capaci di effettuare il PRIMING dei linfociti T naïve (vergini) nei linfonodi grazie all’alta espressione inducibile di costimolatori B7 e CCR7. I Macrofagi e i Linfociti B presentano invece l’antigene prevalentemente a Linfociti T EFFETTORI già differenziati per riceverne in cambio l’aiuto citochinico (IFN-γ per attivare la funzione microbicida del macrofago; CD40L e citochine per lo switch isotipico e affinamento anticorpale nei B).',
    category: 'Cellulare'
  },
  {
    id: 'fc-l9-6',
    front: 'Quali sono le strategie virali per eludere la presentazione antigenica in MHC-I?',
    back: '1) Inibizione di TAP da parte della proteina ICP47 di Herpes Simplex (HSV); 2) Retrotraslocazione e degradazione proteasomica forzata di MHC-I mediata dalle proteine US2 e US11 di Cytomegalovirus (CMV); 3) Blocco del traffico e ritenzione nel RER da parte di E19 di Adenovirus; 4) Ubiquitinazione e degradazione endolisosomiale mediata dalle ligasi K3/K5 del virus di Kaposi (KSHV).',
    category: 'Terapia'
  }
];
