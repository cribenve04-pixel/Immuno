import { QuizQuestion, Flashcard } from './chapterContent';

export interface LymphoidDistributionItem {
  district: string;
  countBillion: number;
  percentage: number;
  functionalRole: string;
  notes: string;
}

export const LYMPHOID_DISTRIBUTION_DATA: LymphoidDistributionItem[] = [
  {
    district: 'Linfonodi (circa 500 linfonodi)',
    countBillion: 190,
    percentage: 41.3,
    functionalRole: 'Incontro T-APC per antigeni drenati dai tessuti periferici tramite vasi linfatici afferenti',
    notes: 'Sede elettiva dell’homing dei T naïve tramite HEV e CCR7:CCL21. Architettura divisa in corticale (follicoli B) e paracorticale (zona T con fibroblasti reticolari FRC).'
  },
  {
    district: 'Milza (Polpa Bianca)',
    countBillion: 70,
    percentage: 15.2,
    functionalRole: 'Filtro ematogeno per antigeni circolanti sistemici e batteri capsulati',
    notes: 'PALS (guaine linfoidi periarteriolari) ricche di cellule T; zona marginale con macrofagi specializzati e linfociti B MZ.'
  },
  {
    district: 'Midollo Osseo',
    countBillion: 50,
    percentage: 10.9,
    functionalRole: 'Organo linfoide primario e nicchia di sopravvivenza per plasmacellule a lunga vita e cellule T memoria',
    notes: 'Mantiene il pool di riserva e fornisce segnali trofici tramite CXCL12 e IL-7.'
  },
  {
    district: 'Tratto Gastrointestinale (GALT/Intestino)',
    countBillion: 50,
    percentage: 10.9,
    functionalRole: 'Tolleranza verso antigeni alimentari e microbiota, difesa da enteropatogeni',
    notes: 'Placche di Peyer, follicoli isolati, lamina propria e linfociti intraepiteliali (IEL). Homing guidato da integrina α4β7 e chemochina CCL25 (CCR9).'
  },
  {
    district: 'Polmoni (BALT & parenchima)',
    countBillion: 30,
    percentage: 6.5,
    functionalRole: 'Sorveglianza dell’epitelio respiratorio esposto ad antigeni inalati',
    notes: 'Filtro aereo continuo con rapido reclutamento di effettori tissutali residenti (TRM).'
  },
  {
    district: 'Cute (SALT & derma)',
    countBillion: 20,
    percentage: 4.3,
    functionalRole: 'Barriera epiteliale e sorveglianza contro patogeni cutanei',
    notes: 'Cellule di Langerhans epidermiche migrano nei linfonodi drenanti. Homing guidato da CLA (Cutaneous Lymphocyte Antigen) e CCR4/CCR10.'
  },
  {
    district: 'Sangue Periferico',
    countBillion: 10,
    percentage: 2.2,
    functionalRole: 'Compartimento di transito e ridistribuzione emodinamica continua',
    notes: 'Rappresenta solo il 2% circa del patrimonio linfocitario totale dell’organismo (circa 10-11 miliardi su circa 460 miliardi totali).'
  },
  {
    district: 'Fegato',
    countBillion: 10,
    percentage: 2.2,
    functionalRole: 'Filtro della circolazione portale e induzione di tolleranza sistemica',
    notes: 'Ricco di cellule NKT, macrofagi di Kupffer e linfociti memoria non convenzionali.'
  }
];

export interface DCMaturationCompare {
  feature: string;
  immatureDC: string;
  matureDC: string;
  significance: string;
}

export const DC_MATURATION_COMPARISON: DCMaturationCompare[] = [
  {
    feature: 'Morfologia & Localizzazione',
    immatureDC: 'Cellula di Langerhans o DC interstiziale residente negli epiteli/tessuti periferici',
    matureDC: 'Cellula dendritica interdigitata localizzata nella paracorticale (zona T) del linfonodo',
    significance: 'Transizione dallo stato sentinella tissutale a presentante professionale nel nodo.'
  },
  {
    feature: 'Capacità Endocitica & Fagocitosi',
    immatureDC: 'Massima: macropinocitosi fluida, fagocitosi recettore-mediata (Dectina, Recettore Mannosio)',
    matureDC: 'Minima o quasi spenta: cessazione dell’ingestione antigenica non specifica',
    significance: 'Protegge la purezza del campione antigenico campionato nella sede dell’infezione da contaminazioni tardive.'
  },
  {
    feature: 'Espressione Molecole MHC di Classe II',
    immatureDC: 'Bassa/moderata in membrana; rapido turnover degradativo endolisosomiale via ubiquitina-ligasi MARCH1',
    matureDC: 'Molto elevata ed emivita prolungata (>40 ore); spegnimento di MARCH1 e stabilizzazione in membrana',
    significance: 'Garantisce densità elevata e duratura di complessi peptide:MHC-II per consentire il contatto con cloni T rari.'
  },
  {
    feature: 'Molecole di Costimolazione (B7-1 / CD80, B7-2 / CD86)',
    immatureDC: 'Minime o assenti (incapacità di fornire il Segnale 2)',
    matureDC: 'Iper-espresse ad altissima densità in risposta a PAMP/DAMP e TLR',
    significance: 'Fornisce il Segnale 2 obbligatorio via CD28: senza questo legame il linfocita T andrebbe in anergia clonale.'
  },
  {
    feature: 'Recettori Chemochinici di Membrana',
    immatureDC: 'Esprime recettori infiammatori periferici: CCR1, CCR2, CCR5, CCR6',
    matureDC: 'Espressione marcata e de novo di CCR7 (downregulation dei recettori infiammatori periferici)',
    significance: 'CCR7 risponde al gradiente di CCL21 e CCL19 rilasciato dalle FRC e HEV del linfonodo, guidando la migrazione afferente.'
  },
  {
    feature: 'Metabolismo Cellulare',
    immatureDC: 'Fosforilazione ossidativa mitocondriale (OXPHOS) a basso dispendio energetico',
    matureDC: 'Switch metabolico rapido verso la glicolisi aerobica (effetto Warburg immunitario)',
    significance: 'Fornisce intermedi biosintetici immediati per la massiccia sintesi di citochine e membrane sinaptiche.'
  }
];

export interface SignalThreeItem {
  signalName: string;
  molecularActors: string;
  biologicalConsequence: string;
  deficiencyPhenotype: string;
}

export const THREE_SIGNALS_DATA: SignalThreeItem[] = [
  {
    signalName: 'Segnale 1 (Specificità Antigenica)',
    molecularActors: 'Trimero TCR αβ : peptide (8-10 aa per MHC-I o 12-24 aa per MHC-II) : tasca MHC + corecettore CD4 o CD8',
    biologicalConsequence: 'Attivazione delle tirosin-chinasi Lck e ZAP-70, fosforilazione dei 10 ITAM del complesso CD3/ζ, inside-out signaling di LFA-1',
    deficiencyPhenotype: 'In assenza del Segnale 2, il Segnale 1 isolato induce ANERGIA CLONALE irreversibile (tolleranza periferica anti-autoreattività).'
  },
  {
    signalName: 'Segnale 2 (Costimolazione Essenziale)',
    molecularActors: 'B7-1 (CD80) e B7-2 (CD86) sulla DC matura legati al recettore omodimerico CD28 costitutivo sul linfocita T naïve',
    biologicalConsequence: 'Attivazione di PI3K-Akt-mTOR, sovraespressione della proteina anti-apoptotica Bcl-xL, stabilizzazione dell’mRNA di IL-2 di oltre 20 volte',
    deficiencyPhenotype: 'Mancanza di proliferazione cellulare, fallimento dell’espansione clonale e mancata induzione della catena CD25 del recettore IL-2.'
  },
  {
    signalName: 'Segnale 3 (Differenziamento & Polarizzazione Effettrice)',
    molecularActors: 'Citochine polarizzanti prodotte dalla DC e dal microambiente (IL-12, IFN-γ, IL-4, IL-6, TGF-β, IL-23, IL-1β)',
    biologicalConsequence: 'Attivazione di fattori di trascrizione master (T-bet per Th1, GATA-3 per Th2, RORγt per Th17, Bcl-6 per Tfh, FoxP3 per iTreg)',
    deficiencyPhenotype: 'Sviluppo di effettori non focalizzati o anomali, suscettibilità ad infezioni specifiche (es. infezioni fungine per difetto Th17).'
  }
];

export interface PharmacologicalTargetItem {
  drugName: string;
  targetMolecule: string;
  molecularMechanism: string;
  clinicalIndication: string;
  sideEffectsOrCaveats: string;
}

export const PHARMACOLOGICAL_TARGETS: PharmacologicalTargetItem[] = [
  {
    drugName: 'Ciclosporina A (CsA)',
    targetMolecule: 'Complesso Ciclofillina - Calcineurina',
    molecularMechanism: 'Si lega alla ciclofillina intracellulare; il complesso blocca l’attività fosfatasica della calcineurina, impedendo la defosforilazione di NFAT e la sua traslocazione nel nucleo. Viene così arrestata la trascrizione di IL-2.',
    clinicalIndication: 'Prevenzione del rigetto nei trapianti d’organo solido (rene, cuore, fegato) e malattie autoimmuni severe.',
    sideEffectsOrCaveats: 'Nefrotossicità dose-dipendente, ipertensione arteriosa, irsutismo e ipertrofia gengivale.'
  },
  {
    drugName: 'Tacrolimus (FK506)',
    targetMolecule: 'Complesso FKBP12 - Calcineurina',
    molecularMechanism: 'Si lega alla proteina immunofillina FKBP-12; il farmaco inibisce la subunità catalitica della calcineurina con una potenza 10-100 volte superiore rispetto alla ciclosporina, sopprimendo NFAT e IL-2.',
    clinicalIndication: 'Trapianti renali, epatici e polmonari; dermatite atopica severa (formulazione topica).',
    sideEffectsOrCaveats: 'Nefrotossicità, neurotossicità (tremori, cefalea), aumentato rischio di diabete post-trapianto (PTDM).'
  },
  {
    drugName: 'Fingolimod (FTY720)',
    targetMolecule: 'Recettore S1PR1 (Sfingosina-1-fosfato recettore 1)',
    molecularMechanism: 'Profarmaco fosforilato dalla sfingosina chinasi in vivo in FTY720-P. Agisce come modulatore/agonista funzionale che induce internalizzazione irreversibile e degradazione ubiquitina-dipendente di S1PR1. I linfociti perdono la capacità di percepire il gradiente di S1P e rimangono sequestrati nei linfonodi.',
    clinicalIndication: 'Sclerosi Multipla recidivante-remittente (prima terapia orale approvata).',
    sideEffectsOrCaveats: 'Bradicardia transitoria alla prima dose, blocco atrio-ventricolare, edema maculare, linfopenia periferica marcata (>70%).'
  },
  {
    drugName: 'Ipilimumab',
    targetMolecule: 'CTLA-4 (CD152)',
    molecularMechanism: 'Anticorpo monoclonale umano (IgG1) che blocca il legame di CTLA-4 a B7-1/B7-2. Ripristina il legame costimolatorio con CD28 e promuove la deplezione intratumorale dei linfociti T regolatori (Treg) tramite ADCC mediate da recettori Fc.',
    clinicalIndication: 'Melanoma metastatico avanzato, carcinoma renale avanzato, carcinoma colorettale MSI-H/dMMR.',
    sideEffectsOrCaveats: 'Eventi avversi immuno-relati (irAEs) gravi: colite autoimmune severa, ipofisite, tiroidite, epatite autoimmune.'
  },
  {
    drugName: 'Nivolumab / Pembrolizumab',
    targetMolecule: 'PD-1 (CD279)',
    molecularMechanism: 'Anticorpi monoclonali umanizzati (IgG4) anti-PD-1 che impediscono il legame inibitorio con PD-L1 e PD-L2. Riattivano i linfociti T CD8+ citotossici intratumorali in stato di "exhaustion" (esaurimento clonale).',
    clinicalIndication: 'Melanoma, carcinoma polmonare non a piccole cellule (NSCLC), linfoma di Hodgkin classico, tumori solidi con instabilità dei microsatelliti.',
    sideEffectsOrCaveats: 'Tossicità immuno-correlate: polmonite autoimmune (pneumonite), tiroidite/ipotiroidismo, nefrite interstiziale.'
  },
  {
    drugName: 'Abatacept (CTLA-4-Ig)',
    targetMolecule: 'B7-1 (CD80) e B7-2 (CD86)',
    molecularMechanism: 'Proteina di fusione solubile composta dal dominio extracellulare di CTLA-4 fuso alla regione Fc di IgG1 umana. Lega avidamente B7 sulle APC sequestrandolo ed impedendo la costimolazione fisiologica di CD28.',
    clinicalIndication: 'Artrite reumatoide attiva moderata-severa refrattaria a metotrexato e farmaci anti-TNF.',
    sideEffectsOrCaveats: 'Aumentata suscettibilità a infezioni respiratorie batteriche e opportunistiche; controindicata la somministrazione contemporanea con anti-TNF.'
  }
];

export const QUIZ_LEZIONE_12: QuizQuestion[] = [
  {
    "id": "q12-1",
    "question": "Qual è il secondo segnale richiesto per l'attivazione completa e produttiva del linfocita T naïve?",
    "options": [
      "Il legame tra MHC di classe II e il corecettore CD4",
      "La secrezione paracrina di Interferone-gamma",
      "La segnalazione costimolatoria di CD28 mediata dall'interazione con B7-1 (CD80) e B7-2 (CD86)",
      "Il legame dell'integrina LFA-1 con ICAM-1 a livello del pSMAC"
    ],
    "correctIndex": 2,
    "explanation": "Il Segnale 2 (costimolazione) è fornito primariamente dal recettore CD28 espresso dal linfocita T naïve che lega le molecole B7-1 (CD80) e B7-2 (CD86) espresse dalla cellula presentante l'antigene (APC) matura. In assenza di questo segnale, il linfocita va incontro ad anergia clonale irreversibile. (Domanda ufficiale slide docente).",
    "clinicalPearl": "Il legame B7:CD28 stabilizza l'mRNA di IL-2 aumentandone l'emivita di oltre 20 volte e inducendo l'espressione di proteine anti-apoptotiche come Bcl-xL."
  },
  {
    "id": "q12-2",
    "question": "Come ricircolano e penetrano i linfociti T naïve all'interno del parenchima dei linfonodi periferici?",
    "options": [
      "Attraverso i vasi linfatici afferenti insieme alle particelle virali libere",
      "Esclusivamente attraverso il dotto toracico che sbocca nel seno midollare",
      "Mediante diapedesi casuale attraverso i capillari fenestrati della milza",
      "Attraverso le venule ad endotelio alto (HEV) guidati dall'interazione tra CCR7 e la chemochina CCL21"
    ],
    "correctIndex": 3,
    "explanation": "I linfociti T naïve circolanti nel sangue penetrano nella paracorticale dei linfonodi attraversando le Venule ad Endotelio Alto (HEV). L'homing è orchestrato dal recettore chemochinico CCR7 sui linfociti T e dalle chemochine CCL21 e CCL19 prodotte dalle cellule stromali reticolari e dall'endotelio delle HEV. (Domanda ufficiale slide docente).",
    "clinicalPearl": "Le HEV non sono presenti nella milza: la polpa bianca lienale riceve infatti i linfociti direttamente dalle arteriole terminali della zona marginale."
  },
  {
    "id": "q12-3",
    "question": "Qual è la funzione molecolare principale dei recettori C-type lectin (CLR), come ad esempio DC-SIGN?",
    "options": [
      "Legare residui carboidratici (zuccheri) in maniera dipendente da ioni calcio (Ca2+)",
      "Fosforilare direttamente le tirosine nei motivi ITAM del complesso CD3",
      "Idrolizzare il fosfatidilinositolo 4,5-bifosfato in IP3 e DAG",
      "Attivare selettivamente la via apoptotica intrinseca mediata da Bax e Bak"
    ],
    "correctIndex": 0,
    "explanation": "I recettori lectinici di tipo C (CLR) legano strutture carboidratiche complesse presenti sulle pareti di microrganismi patogeni (es. mannosio, fucosio, glucani) mediante domini lectinici che richiedono obbligatoriamente ioni calcio bivalenti (Ca2+). Un esempio classico citato è DC-SIGN, recettore capace di legare i residui ad alto mannosio della gp120 del virus HIV-1. (Domanda ufficiale slide docente).",
    "clinicalPearl": "DC-SIGN può funzionare come 'cavallo di Troia': legando la gp120 di HIV senza necessariamente distruggerla, la DC veicola il virus direttamente ai linfociti T CD4+ nel linfonodo."
  },
  {
    "id": "q12-4",
    "question": "Qual è il ruolo fisiologico fondamentale di CTLA-4 (CD152) nella risposta immunitaria mediata dai linfociti T?",
    "options": [
      "Fornire il primo segnale di riconoscimento antigenico primario",
      "Regolazione negativa e spegnimento controllato della risposta immunitaria per prevenire l'autoimmunità",
      "Stimolare la produzione autocrina massiva di Interleuchina-2",
      "Guidare la chemiotassi dei linfociti T verso i vasi linfatici efferenti"
    ],
    "correctIndex": 1,
    "explanation": "CTLA-4 è un recettore inibitorio cardine espresso tardivamente (48-72 ore) sui linfociti T convenzionali attivati e costitutivamente sui Treg FoxP3+. Spegne la risposta immunitaria legando B7-1/B7-2 con affinità 20-100 volte superiore a CD28 e trasducendo segnali inibitori via ITIM/fosfatasi. (Domanda ufficiale slide docente).",
    "clinicalPearl": "Topi knockout per CTLA-4 (CTLA-4 -/-) muoiono precocemente a 3-4 settimane di vita per una sindrome linfoproliferativa massiva letale con infiltrazione autoimmune multiorgano."
  },
  {
    "id": "q12-5",
    "question": "Quale superfamiglia di recettori dell'immunità innata è deputata al riconoscimento dei Pattern Molecolari Associati ai Patogeni (PAMP) avviando la maturazione della cellula dendritica?",
    "options": [
      "Recettori ormonali steroidei nucleari",
      "Recettori per l'Fc delle immunoglobuline (FcγR)",
      "Recettori Toll-like (TLR)",
      "Integrine della famiglia β1 e β2"
    ],
    "correctIndex": 2,
    "explanation": "I Toll-like Receptors (TLR), sia superficiali che endosomiali, riconoscono i PAMP microbici (LPS, peptidoglicano, flagellina, acidi nucleici virali), innescando la cascata MyD88/TRIF che porta all'up-regulation di B7-1, B7-2, MHC-II e CCR7, convertendo la DC immatura in APC matura. (Domanda ufficiale slide docente).",
    "clinicalPearl": "La maturazione mediata da TLR induce inoltre lo spegnimento della ligasi MARCH1, aumentando drasticamente l'emivita delle molecole MHC-II da poche ore a oltre 40 ore."
  },
  {
    "id": "q12-6",
    "question": "Cosa si osserva caratteristicamente in una fase tardiva (48-72 ore) dell'attivazione dei linfociti T?",
    "options": [
      "Defosforilazione immediata dei 10 motivi ITAM del complesso CD3",
      "Secrezione esclusiva di immunoglobuline IgM solubili",
      "Perdita definitiva del recettore TCR per endocitosi",
      "Espressione di membrana del checkpoint inibitorio CTLA-4 (CD152)"
    ],
    "correctIndex": 3,
    "explanation": "Mentre CD28 è espresso costitutivamente sui T naïve, CTLA-4 viene traslocato in membrana e indotto a livello trascrizionale solo dopo 2-3 giorni dall'attivazione, fungendo da freno omeostatico naturale che compete con CD28 per il legame con B7-1 e B7-2. (Domanda ufficiale slide docente).",
    "clinicalPearl": "Il ritardo di 48-72 ore nell'espressione di CTLA-4 è perfetto per consentire l'espansione clonale iniziale prima di attivare il freno fisiologico."
  },
  {
    "id": "q12-7",
    "question": "Cosa riconoscono primariamente i recettori Toll-like (TLRs) espressi sulle cellule dell'immunità innata?",
    "options": [
      "Pattern Molecolari Associati ai Patogeni (PAMPs)",
      "Peptidi self complessati con molecole HLA di classe I",
      "Immunoglobuline di classe IgE complessate con mastociti",
      "Sfingosina-1-fosfato presente nel plasma venoso"
    ],
    "correctIndex": 0,
    "explanation": "I TLR riconoscono motivi molecolari altamente conservati ed essenziali per la sopravvivenza microbica noti come PAMP (Pathogen-Associated Molecular Patterns), assenti nelle cellule eucariotiche dell'ospite. (Domanda ufficiale slide docente).",
    "clinicalPearl": "Oltre ai PAMP microbici esogeni, alcuni TLR (in particolare TLR4 e TLR2) possono riconoscere anche DAMP endogeni rilasciati da cellule necrotiche, come HMGB1 e proteine HSP."
  },
  {
    "id": "q12-8",
    "question": "Quale modificazione molecolare subisce il recettore per l'Interleuchina-2 (IL-2R) in seguito all'attivazione del linfocita T naïve?",
    "options": [
      "Perde la catena gamma comune (CD132) diventando insensibile alla stimolazione paracrina",
      "Passa da una forma dimerica a bassa/intermedia affinità (catene βγ) a una forma trimerica ad altissima affinità (αβγ) per espressione de novo di CD25 (catena α)",
      "Viene fosforilato sui residui ITIM interni arrestando il ciclo cellulare in fase G0",
      "Si associa stabilmente all'integrina LFA-1 impedendo il legame di ICAM-1"
    ],
    "correctIndex": 1,
    "explanation": "Il linfocita T naïve esprime il dimero IL-2Rβγ a moderata affinità (Kd ~ 10^-9 M). L'attivazione TCR + CD28 stimola la sintesi autocrina di IL-2 e l'espressione in membrana di CD25 (catena α, peptide di 55 kDa), assemblando il trimero αβγ ad altissima affinità (Kd ~ 10^-11 M) che scatena la robusta espansione clonale.",
    "clinicalPearl": "La catena CD25 viene rilasciata in forma solubile (sCD25) nel siero durante flogosi intensa, fungendo da biomarcatore di linfoistiocitosi emofagocitica (HLH) e rigetto acuto."
  },
  {
    "id": "q12-9",
    "question": "Qual è il meccanismo molecolare con cui il farmaco Fingolimod (FTY720) esercita la sua azione terapeutica nella Sclerosi Multipla?",
    "options": [
      "Inibisce selettivamente la tirosin-chinasi ZAP-70 bloccando la fosforilazione di LAT",
      "Neutralizza direttamente la citochina IL-2 nel siero impedendo la formazione del trimero recettoriale",
      "Agisce come modulatore funzionale del recettore S1PR1 inducendone internalizzazione e degradazione irreversibile, intrappolando i linfociti autoreattivi nei linfonodi",
      "Blocca competitivamente i siti di legame di ICAM-1 sulle cellule dell'endotelio cerebrale"
    ],
    "correctIndex": 2,
    "explanation": "Fingolimod (FTY720-P) si lega al recettore per la sfingosina-1-fosfato (S1PR1) sui linfociti T e ne induce l'endocitosi e la degradazione proteica. Privi del recettore S1PR1, i linfociti non possono più seguire il gradiente chemotattico di S1P verso la linfa efferente e il sangue, rimanendo confinati nei linfonodi ed evitando così l'infiltrazione distruttiva della mielina nel SNC.",
    "clinicalPearl": "Prima di somministrare la prima dose di Fingolimod è obbligatorio un monitoraggio ECG per 6 ore a causa del rischio di bradicardia transitoria e blocco atrio-ventricolare."
  },
  {
    "id": "q12-10",
    "question": "Quale ruolo svolge la proteina di membrana CD69 espressa precocemente dal linfocita T attivato nel linfonodo?",
    "options": [
      "Lega l'antigene MHC di classe II favorendo il cross-priming",
      "Funziona come ligando solubile per i recettori chemochinici CCR7",
      "Fosforila la catena zeta del CD3 attivando la fosfolipasi C-gamma",
      "Si lega fisicamente al recettore S1PR1 provocandone l'internalizzazione e garantendo la ritenzione transitoria del linfocita nel linfonodo"
    ],
    "correctIndex": 3,
    "explanation": "CD69 è un marcatore molto precoce di attivazione. Si associa in membrana con S1PR1 e ne promuove l'internalizzazione, impedendo al linfocita di uscire anzitempo dal linfonodo verso la linfa efferente prima di aver completato l'espansione clonale e il programma di differenziamento effettore (4-7 giorni).",
    "clinicalPearl": "La caduta fisiologica di CD69 al giorno 5-7 consente il re-indirizzamento di S1PR1 in membrana, autorizzando l'egresso delle cellule T effettrici verso i tessuti periferici."
  },
  {
    "id": "q12-11",
    "question": "Su quale bersaglio intracellulare agiscono i farmaci immunosoppressori Ciclosporina A e Tacrolimus (FK506)?",
    "options": [
      "Inibiscono la serina/treonina fosfatasi Calcineurina, bloccando la defosforilazione e la traslocazione nucleare del fattore trascrizionale NFAT",
      "Bloccano selettivamente la via chinasica JAK-STAT fosforilando SOCS-3",
      "Inibiscono la subunità proteasomiale LMP2 impedendo la generazione di peptidi per MHC-I",
      "Agiscono come inibitori allosterici della RNA polimerasi II mitocondriale"
    ],
    "correctIndex": 0,
    "explanation": "Sia la Ciclosporina A (legata alla ciclofillina) che il Tacrolimus/FK506 (legato a FKBP-12) inibiscono la Calcineurina attivata da calcio/calmodulina. Bloccando la calcineurina, NFAT non può essere defosforilato, non migra nel nucleo e la trascrizione del gene dell'IL-2 è soppressa, impedendo il rigetto del trapianto.",
    "clinicalPearl": "Il monitoraggio terapeutico dei livelli ematici (trough levels) di ciclosporina e tacrolimus è fondamentale per evitare la nefrotossicità renale da vasocostrizione dell'arteriola afferente."
  },
  {
    "id": "q12-12",
    "question": "Qual è la differenza fondamentale tra il checkpoint inibitorio CTLA-4 e il checkpoint PD-1?",
    "options": [
      "CTLA-4 stimola la proliferazione cellulare mentre PD-1 induce la fagocitosi dei linfociti",
      "CTLA-4 agisce principalmente nella fase iniziale di priming nei tessuti linfoidi secondari competendo con CD28 per B7, mentre PD-1 agisce prevalentemente nella fase effettrice nei tessuti periferici e nel microambiente tumorale",
      "CTLA-4 viene espresso solo dai linfociti B mentre PD-1 è esclusivo delle cellule NK",
      "PD-1 ha un'affinità per B7 superiore rispetto a quella di CTLA-4"
    ],
    "correctIndex": 1,
    "explanation": "CTLA-4 (premio Nobel 2018 James Allison) compete con CD28 per i ligandi B7-1/B7-2 sulle APC professioniste nei linfonodi durante il priming primario. PD-1 (premio Nobel 2018 Tasuku Honjo) si lega a PD-L1/PD-L2 espressi su cellule parenchimali, tessuti infiammati e cellule tumorali in periferia, spegnendo la citotossicità dei linfociti effettori ed inducendo 'T-cell exhaustion'.",
    "clinicalPearl": "La combinazione di anti-CTLA4 (ipilimumab) e anti-PD1 (nivolumab) genera risposte sinergiche nel melanoma avanzato ma con un'incidenza di tossicità autoimmuni (irAE) superiore al 50%."
  }
];

export const FLASHCARDS_LEZIONE_12: Flashcard[] = [
  {
    id: 'fc-12-1',
    category: 'Cellulare',
    front: 'Quali sono i Tre Segnali necessari per l’attivazione completa del Linfocita T naïve e la sua espansione?',
    back: '1) Segnale 1: TCR αβ + CD4/CD8 che riconoscono il complesso peptide-MHC (specificità antigene-dipendente).\n2) Segnale 2: Costimolazione via CD28 (sul T) che si lega a B7-1 (CD80) e B7-2 (CD86) sull’APC matura.\n3) Segnale 3: Citochine polarizzanti (IL-12, IL-4, IL-6/TGF-β, IL-23) che determinano il fenotipo effettore specifico (Th1, Th2, Th17, Tfh, Treg).'
  },
  {
    id: 'fc-12-2',
    category: 'Molecolare',
    front: 'Cosa accade se un linfocita T riceve il Segnale 1 in assenza del Segnale 2 (mancanza di costimolazione B7:CD28)?',
    back: 'Il linfocita T entra in uno stato di ANERGIA CLONALE irreversibile: la cellula diventa refrattaria e incapace di proliferare o produrre IL-2 anche in caso di successiva esposizione allo stesso antigene con costimolazione intatta. È un meccanismo cardine di TOLLERANZA PERIFERICA.'
  },
  {
    id: 'fc-12-3',
    category: 'Cellulare',
    front: 'Come è strutturata la Sinapsi Immunologica (SMAC) tra Linfocita T e APC?',
    back: 'È organizzata in zone concentriche:\n• cSMAC (centrale): TCR, complesso CD3, corecettori CD4 o CD8, CD28 legato a B7, chinasi Lck e ZAP-70.\n• pSMAC (periferico): anello di adesione formato dall’integrina LFA-1 (αLβ2) legata a ICAM-1 stabilizzata da talina e citoscheletro.\n• dSMAC (distale): molecole con voluminosi ectodomini glicosilati (CD43, CD45) escluse stericamente dal centro per consentire il contatto ravvicinato (15 nm).'
  },
  {
    id: 'fc-12-4',
    category: 'Molecolare',
    front: 'Descrivi la cascata di trasduzione biochimica: da ZAP-70 all’attivazione di NFAT e sintesi di IL-2.',
    back: '1. ZAP-70 attivato fosforila le proteine adattatrici LAT e SLP-76.\n2. Reclutamento e attivazione della Fosfolipasi C-γ (PLC-γ1).\n3. PLC-γ idrolizza PIP2 in IP3 e DAG.\n4. IP3 stimola il rilascio di Ca2+ dal reticolo endoplasmatico con apertura dei canali CRAC (Orai1/STIM1).\n5. L’aumento di Ca2+ citosolico lega la Calmodulina, che attiva la fosfatasi CALCINEURINA.\n6. La Calcineurina defosforila NFAT, scoprendo il suo segnale di localizzazione nucleare.\n7. NFAT trasloca nel nucleo e trascrive il gene di IL-2 (assieme ad AP-1 e NF-κB).'
  },
  {
    id: 'fc-12-5',
    category: 'Terapia',
    front: 'Qual è il bersaglio e il meccanismo d’azione di Ciclosporina A e Tacrolimus (FK506)?',
    back: 'Entrambi sono inibitori della CALCINEURINA:\n• Ciclosporina A forma un complesso inibitorio con la Ciclofillina.\n• Tacrolimus forma un complesso con FKBP-12.\nEntrambi bloccano l’attività fosfatasica della Calcineurina, impedendo la defosforilazione di NFAT e la sua traslocazione nucleare. Di conseguenza, bloccano totalmente la sintesi autocrina di Interleuchina-2 (IL-2), prevenendo il rigetto dei trapianti.'
  },
  {
    id: 'fc-12-6',
    category: 'Molecolare',
    front: 'Spiega il paradosso tra il recettore ad alta e bassa affinità per IL-2 (ruolo di CD25).',
    back: '• T naïve non stimolato: esprime il dimero βγ (CD122 + CD132) a bassa/media affinità (Kd ~ 10⁻⁹ M).\n• T attivato (TCR + CD28): sintetizza de novo la catena α (CD25, 55 kDa), assemblando il trimero αβγ ad altissima affinità (Kd ~ 10⁻¹¹ M).\n• Linfociti Treg: esprimono costitutivamente la forma trimerica αβγ (CD25 alta), sequestrando l’IL-2 dal microambiente ed esercitando immunosoppressione.'
  },
  {
    id: 'fc-12-7',
    category: 'Cellulare',
    front: 'Qual è il ruolo del binomio CD69 e S1PR1 nel controllo dell’egresso linfonodale?',
    back: '• T naïve esprime S1PR1: sensibile al gradiente di S1P (basso nel parenchima, alto nel sangue/linfa), pronto ad uscire dal linfonodo se non incontra l’antigene.\n• T attivato da TCR esprime rapidamente CD69: CD69 lega S1PR1 inducendone l’internalizzazione e degradazione. La cellula diventa "cieca" a S1P e rimane trattenuta nel linfonodo per 4-7 giorni per proliferare.\n• Effettore differenziato: CD69 scende, S1PR1 risale in superficie e guida l’egresso verso i tessuti infiammati.'
  },
  {
    id: 'fc-12-8',
    category: 'Terapia',
    front: 'Come funziona il farmaco Fingolimod (FTY720) nella Sclerosi Multipla?',
    back: 'Fingolimod (FTY720) è un analogo strutturale della sfingosina. Fosforilato in vivo (FTY720-P), lega S1PR1 comportandosi come modulatore funzionale e inducendone l’internalizzazione irreversibile e degradazione lisosomiale. I linfociti T autoreattivi restano intrappolati nei linfonodi periferici, riducendo di oltre il 70% il pool circolante e impedendo l’infiltrazione infiammatoria della sostanza bianca cerebrale.'
  },
  {
    id: 'fc-12-9',
    category: 'Molecolare',
    front: 'Quali sono i meccanismi con cui CTLA-4 (CD152) inibisce i linfociti T?',
    back: '1) Competizione per affinità: lega B7-1 e B7-2 con affinità 20-100 volte superiore rispetto a CD28, spiazzando il segnale costimolatorio.\n2) Trogocitosi / Trans-endocitosi: CTLA-4 strappa fisicamente B7 dalla membrana dell’APC e lo degrada per endocitosi.\n3) Segnalazione inibitoria: i motivi ITIM citoplasmatici reclutano le fosfatasi SHP-1 e PP2A, che defosforilano le chinasi a valle del TCR e di CD28.'
  },
  {
    id: 'fc-12-10',
    category: 'Terapia',
    front: 'Perché la scoperta di CTLA-4 e PD-1 ha meritato il Premio Nobel per la Medicina nel 2018 (Allison e Honjo)?',
    back: 'Ha inaugurato l’IMMUNOTERAPIA DEI CHECKPOINT:\nInvece di colpire le cellule tumorali con sostanze citotossiche, i farmaci anti-CTLA-4 (Ipilimumab) e anti-PD-1/PD-L1 (Nivolumab, Pembrolizumab) bloccano i freni fisiologici del sistema immunitario, risvegliando i linfociti T CD8+ esausti e inducendo remissioni cliniche durature in tumori metastatici precedentemente letali (es. melanoma, tumore polmonare, renale).'
  },
  {
    id: 'fc-12-11',
    category: 'Cellulare',
    front: 'Cosa accade nell’interazione bidirezionale CD40-CD40L tra Linfocita T e Cellula Dendritica?',
    back: 'Il linfocita T attivato esprime CD40L (CD154) che si lega a CD40 sulla DC. Questo invia un segnale di "licensing" alla DC che: \n1) Aumenta ulteriormente l’espressione di B7-1 e B7-2.\n2) Stimola la produzione di citochine pro-infiammatorie (IL-12, TNF-α).\n3) Migliora la capacità di cross-presentazione per l’attivazione ottimale dei CD8+ citotossici.'
  },
  {
    id: 'fc-12-12',
    category: 'Molecolare',
    front: 'Qual è la chemochina cardine per l’homing dei T naïve e delle DC mature nel linfonodo e quale recettore riconosce?',
    back: 'La chemochina è CCL21 (insieme a CCL19), prodotta dalle cellule stromali reticolari e dalle venule ad endotelio alto (HEV) del linfonodo. Entrambe legano il recettore CCR7, espresso sia dai linfociti T naïve ricircolanti che dalle cellule dendritiche mature migranti dai tessuti periferici.'
  }
];
