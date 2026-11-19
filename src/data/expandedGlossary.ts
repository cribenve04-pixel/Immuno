export interface DetailedGlossaryTerm {
  term: string;
  definition: string;
  category: 'Innata & PRR' | 'Adattativa T/B' | 'Complemento' | 'Citochine & Segnalazione' | 'Immunopatologia' | 'Clinica & Farmaci';
  lessonNumber?: number;
  letter: string;
}

export const DETAILED_GLOSSARY: DetailedGlossaryTerm[] = [
  // A
  {
    term: "AChR (Recettore dell'Acetilcolina)",
    definition: "Recettore nicotinico canale ionico situato sulla membrana post-sinaptica della giunzione neuromuscolare; bersaglio degli autoanticorpi antagonisti e depletanti nella Miastenia Gravis.",
    category: "Immunopatologia",
    lessonNumber: 31,
    letter: "A"
  },
  {
    term: "Acidi Grassi a Catena Corta (SCFA)",
    definition: "Metaboliti prodotti dalla fermentazione batterica delle fibre alimentari nel colon (butirrato, propionato, acetato); inibiscono le istone deacetilasi (HDAC) promuovendo la differenziazione dei linfociti T regolatori (Treg).",
    category: "Innata & PRR",
    lessonNumber: 23,
    letter: "A"
  },
  {
    term: "ADC (Antibody-Drug Conjugates)",
    definition: "Biofarmaci composti da un anticorpo monoclonale tumor-targeting legato chimicamente tramite linker a un agente citotossico ad altissima potenza (es. Trastuzumab emtansine T-DM1 o deruxtecan T-DXd), consentendo rilascio intracellulare mirato.",
    category: "Clinica & Farmaci",
    lessonNumber: 18,
    letter: "A"
  },
  {
    term: "ADCC (Antibody-Dependent Cellular Cytotoxicity)",
    definition: "Meccanismo litico mediante il quale cellule dell'immunità innata, principalmente cellule Natural Killer esprimenti il recettore attivatorio FcγRIIIA (CD16), riconoscono e distruggono cellule bersaglio opsonizzate da anticorpi IgG.",
    category: "Adattativa T/B",
    lessonNumber: 21,
    letter: "A"
  },
  {
    term: "Adenosina Deaminasi (ADA)",
    definition: "Enzima della via di salvataggio purinico; il suo deficit genetico autosomico recessivo causa accumulo di metaboliti deossiribonucleosidici tossici (dATP) con apoptosi selettiva dei progenitori T, B ed NK (SCID da deficit di ADA).",
    category: "Clinica & Farmaci",
    lessonNumber: 11,
    letter: "A"
  },
  {
    term: "Affinità vs Avidità",
    definition: "L'affinità quantifica la forza di legame termodinamica tra un singolo epitopo antigenico e un singolo paratopo anticorpale; l'avidità rappresenta la forza complessiva dell'interazione multivalente (es. IgM pentamerica ad alta avidità ma bassa affinità intrinseca).",
    category: "Adattativa T/B",
    lessonNumber: 6,
    letter: "A"
  },
  {
    term: "AID (Activation-Induced Cytidine Deaminase)",
    definition: "Enzima espresso nei linfociti B del centro germinativo che deamina la citosina in uracile nel DNA a singolo filamento, innescando l'ipermutazione somatica (SHM) e la ricombinazione per scambio di classe (CSR).",
    category: "Adattativa T/B",
    lessonNumber: 13,
    letter: "A"
  },
  {
    term: "AIRE (Autoimmune Regulator)",
    definition: "Fattore di trascrizione espresso dalle cellule epiteliali midollari timiche (mTEC) che induce l'espressione ectopica promiscuo di migliaia di antigeni tessuto-specifici (TRA) per la selezione negativa dei timociti autoreattivi; la sua mutazione causa la sindrome APECED/APS-1.",
    category: "Adattativa T/B",
    lessonNumber: 30,
    letter: "A"
  },
  {
    term: "Anafilatossine",
    definition: "Piccoli frammenti peptidici (C3a e soprattutto C5a) rilasciati durante l'attivazione della cascata del complemento; legano recettori GPCR su mastociti, basofili e granulociti inducendo degranulazione, contrazione della muscolatura liscia e potente chemiotassi.",
    category: "Complemento",
    lessonNumber: 15,
    letter: "A"
  },
  {
    term: "Anergia Clonale",
    definition: "Stato funzionale di ipo-responsività intrinseca e prolungata indotto nei linfociti T quando il TCR riconosce il complesso peptide-MHC (Segnale 1) in assenza del segnale costimolatorio CD28-B7 (Segnale 2); meccanismo cardine di tolleranza periferica.",
    category: "Adattativa T/B",
    lessonNumber: 30,
    letter: "A"
  },

  // B
  {
    term: "BAFF / BLyS",
    definition: "Fattore di sopravvivenza essenziale per i linfociti B periferici appartenente alla famiglia del TNF; si lega al recettore BAFF-R promuovendo la maturazione dei B transizionali in cellule follicolari o marginali.",
    category: "Citochine & Segnalazione",
    lessonNumber: 7,
    letter: "B"
  },
  {
    term: "BCR (B-Cell Receptor)",
    definition: "Complesso macromolecolare espresso sulla membrana dei linfociti B, costituito da un'immunoglobulina di superficie (mIgM o mIgD) non covalentemente associata all'eterodimero di trasduzione Igα/Igβ (CD79a/CD79b) dotato di motivi ITAM.",
    category: "Adattativa T/B",
    lessonNumber: 6,
    letter: "B"
  },
  {
    term: "BiTE (Bispecific T-cell Engagers)",
    definition: "Molecole ricombinanti composte da due scFv legati in tandem (uno specifico per CD3ε dei linfociti T e uno per un marcatore tumorale, es. CD19 in Blinatumomab), capaci di forzare una sinapsi citotossica litica indipendente da MHC.",
    category: "Clinica & Farmaci",
    lessonNumber: 18,
    letter: "B"
  },
  {
    term: "bNAbs (Broadly Neutralizing Antibodies)",
    definition: "Anticorpi ad altissima somatica ipermutazione capaci di neutralizzare un ampio spettro di ceppi eterologhi di HIV-1 legandosi a epitopi conformazionali terziari conservati del trimero gp120/gp41; tipicamente prodotti dai Long-Term Non-Progressors.",
    category: "Adattativa T/B",
    lessonNumber: 33,
    letter: "B"
  },
  {
    term: "Bruton (Tirosina Chinasi Btk / Malattia di Bruton)",
    definition: "Chinasi citoplasmatica essenziale per la trasduzione del segnale a valle del pre-BCR e del BCR; la sua mutazione genetica legata all'X determina agammaglobulinemia legata al sesso (XLA) con blocco maturativo allo stadio pro-B.",
    category: "Clinica & Farmaci",
    lessonNumber: 7,
    letter: "B"
  },
  {
    term: "Bystander Activation",
    definition: "Attivazione aspecifica di linfociti T o B quiescenti (anche autoreattivi) scatenata dalla massiccia produzione locale di citochine proinfiammatorie e DAMPs/PAMPs durante un'infezione grave, in assenza di riconoscimento specifico dell'antigene primario.",
    category: "Immunopatologia",
    lessonNumber: 30,
    letter: "B"
  },

  // C
  {
    term: "C1-INH (Inibitore della C1 Esterasi)",
    definition: "Serpina plasmatica solubile che dissocia C1r e C1s da C1q e inibisce la callicreina del sistema di contatto; il suo deficit genetico o funzionale determina l'Angioedema Ereditario (HAE) con edema sottomucoso e laringeo indotto da bradichinina.",
    category: "Complemento",
    lessonNumber: 15,
    letter: "C"
  },
  {
    term: "C3 Convertasi",
    definition: "Complesso enzimatico cardine del complemento deputato al clivaggio proteolitico massivo di C3 in C3a e C3b; formato da C4b2b nella via classica/lectinica e da C3bBb nella via alternativa.",
    category: "Complemento",
    lessonNumber: 15,
    letter: "C"
  },
  {
    term: "CAR-T (Chimeric Antigen Receptor T-cells)",
    definition: "Linfociti T autologhi geneticamente modificati mediante vettori lentivirali per esprimere un recettore sintetico composto da un scFv monoclonale extracellulare fuso a domini costimolatori (CD28 o 4-1BB) e alla catena CD3ζ, per uccisione tumorale MHC-indipendente.",
    category: "Clinica & Farmaci",
    lessonNumber: 32,
    letter: "C"
  },
  {
    term: "CCR5 & CXCR4",
    definition: "Recettori a 7 domini transmembrana accoppiati a proteine G per chemochine; fungono da corecettori obbligati per l'ingresso di HIV-1 nei macrofagi (ceppi R5 M-tropici) e nei linfociti T CD4+ (ceppi X4 T-tropici).",
    category: "Innata & PRR",
    lessonNumber: 33,
    letter: "C"
  },
  {
    term: "CCR5-Δ32",
    definition: "Delezione di 32 paia di basi nel gene CCR5 che porta a proteina tronca non espressa; in eterozigosi rallenta la progressione clinica di HIV, in omozigosi conferisce resistenza assoluta all'infezione da ceppi R5 (documentata nel Paziente di Berlino).",
    category: "Clinica & Farmaci",
    lessonNumber: 33,
    letter: "C"
  },
  {
    term: "CD16 (FcγRIIIA)",
    definition: "Recettore a bassa affinità per il frammento Fc delle IgG complessate, espresso sulle cellule NK associato a catene omo/eterodimeriche con motivi ITAM; mediatore primario della citotossicità cellulare anticorpo-dipendente (ADCC).",
    category: "Adattativa T/B",
    lessonNumber: 21,
    letter: "C"
  },
  {
    term: "CD28 vs CTLA-4",
    definition: "CD28 è il recettore costimolatorio principale che lega B7-1 e B7-2 potenziando proliferazione e sopravvivenza; CTLA-4 è un recettore inibitorio ad affinità superiore che compete stericamente e sequestra B7 per trans-endocitosi spegnendo la risposta.",
    category: "Adattativa T/B",
    lessonNumber: 12,
    letter: "C"
  },
  {
    term: "CD40 - CD40L",
    definition: "Coppia recettore-ligando cardine della cooperazione T-B e del licensing delle cellule dendritiche; le mutazioni di CD40L (sul cromosoma X) provocano la Sindrome da Iper-IgM per totale incapacità di effettuare lo switch isotipico e formare centri germinativi.",
    category: "Adattativa T/B",
    lessonNumber: 13,
    letter: "C"
  },
  {
    term: "Centro Germinativo",
    definition: "Microstruttura specializzata che si forma nei follicoli linfoidi secondari durante risposte T-dipendenti, divisa in Zona Scura (proliferazione e ipermutazione somatica da AID) e Zona Chiara (selezione clonale ad alta affinità mediata da FDC e Tfh).",
    category: "Adattativa T/B",
    lessonNumber: 13,
    letter: "C"
  },
  {
    term: "cGAS - STING",
    definition: "Via di sensing citosolico del DNA a doppio filamento (virale, batterico o nucleare rilasciato da danno genotossico); cGAS sintetizza il secondo messaggero cGAMP che attiva STING sul reticolo endoplasmatico, innescando la secrezione di IFN di tipo I.",
    category: "Innata & PRR",
    lessonNumber: 4,
    letter: "C"
  },
  {
    term: "Citrullinazione & ACPA",
    definition: "Modificazione post-traduzionale catalizzata dall'enzima peptidilarginina deaminasi (PAD) che converte l'arginina in citrullina; i peptidi citrullinati legano varianti di HLA-DR4/DR1 generando autoanticorpi ACPA specifici per l'Artrite Reumatoide.",
    category: "Immunopatologia",
    lessonNumber: 31,
    letter: "C"
  },
  {
    term: "Cross-Presentazione (Cross-Priming)",
    definition: "Capacità esclusiva delle cellule dendritiche convenzionali cDC1 di internalizzare antigeni esogeni (da cellule infettate o tumorali) e traslocarli nel citosol per processazione proteasomiale e presentazione su MHC di classe I a linfociti T CD8+ naïve.",
    category: "Adattativa T/B",
    lessonNumber: 10,
    letter: "C"
  },

  // D
  {
    term: "DAF (CD55 - Decay Accelerating Factor)",
    definition: "Glicoproteina di membrana ancorata a GPI che dissocia i complessi C3 convertasi (C4b2b e C3bBb) sia della via classica che alternativa, proteggendo le cellule self dalla lisi complementare.",
    category: "Complemento",
    lessonNumber: 15,
    letter: "D"
  },
  {
    term: "DC-SIGN (CD209)",
    definition: "Recettore lectinico di tipo C espresso sulle cellule dendritiche che lega residui mannosilati di gp120 dell'HIV; consente alla DC di captare il virione nella mucosa e trasportarlo intatto ai linfonodi regionali per infettare i T CD4+.",
    category: "Innata & PRR",
    lessonNumber: 33,
    letter: "D"
  },
  {
    term: "Dectina-1",
    definition: "Recettore di membrana della famiglia delle lectine di tipo C che riconosce i β-1,3-glucani delle pareti cellulari fungine (es. Candida albicans), attivando la via CARD9/NF-κB e orientando la risposta verso Th17 protettivi.",
    category: "Innata & PRR",
    lessonNumber: 22,
    letter: "D"
  },

  // E
  {
    term: "Epitope Spreading",
    definition: "Fenomeno di progressione dell'autoimmunità in cui il danno tissutale iniziale provoca il rilascio di antigeni criptici prima non esposti, allargando il repertorio autoanticorpale ad altri epitopi della stessa proteina o di proteine adiacenti.",
    category: "Immunopatologia",
    lessonNumber: 31,
    letter: "E"
  },
  {
    term: "Esclusione Allelica",
    definition: "Processo genetico mediante il quale un linfocita B o T esprime i geni riarrangiati per il recettore (BCR o TCR) derivanti da un solo cromosoma parentale, inattivando il riarrangiamento dell'altro allele per garantire specificità clonale rigorosa.",
    category: "Adattativa T/B",
    lessonNumber: 7,
    letter: "E"
  },

  // F
  {
    term: "Fas (CD95) / Fas-Ligando (CD178)",
    definition: "Coppia recettoriale della famiglia del TNF che innesca la via estrinseca dell'apoptosi tramite complesso DISC e caspasi-8; mediatore essenziale dell'AICD (morte cellulare indotta da attivazione) per l'omeostasi linfocitaria (mutato nella sindrome ALPS).",
    category: "Adattativa T/B",
    lessonNumber: 20,
    letter: "F"
  },
  {
    term: "FcRn (Recettore Neonatale per l'Fc)",
    definition: "Eterodimero strutturalmente simile a MHC-I associato a β2-microglobulina; nei lisosomi lega l'Fc delle IgG a pH acido proteggendole da degradazione e riciclandole a pH fisiologico nel sangue, garantendo un'emivita di oltre 21 giorni e il passaggio placentare.",
    category: "Adattativa T/B",
    lessonNumber: 17,
    letter: "F"
  },
  {
    term: "Fostamatinib",
    definition: "Farmaco biologico inibitore mirato della tirosina chinasi Syk; blocca la cascata di segnalazione a valle dei recettori FcγR sui macrofagi, impedendo la fagocitosi delle piastrine opsonizzate nella Porpora Trombocitopenica Idiopatica (ITP).",
    category: "Clinica & Farmaci",
    lessonNumber: 31,
    letter: "F"
  },

  // G
  {
    term: "GALT (Gut-Associated Lymphoid Tissue)",
    definition: "Il più vasto distretto immunitario dell'organismo, composto da compartimenti induttivi organizzati (Placche del Peyer, linfonodi mesenterici) ed effettori diffusi (lamina propria, IEL), specializzato nella tolleranza orale e nella secrezione di sIgA.",
    category: "Innata & PRR",
    lessonNumber: 23,
    letter: "G"
  },
  {
    term: "Gell e Coombs (Classificazione)",
    definition: "Classificazione nosografica delle reazioni immunopatologiche di ipersensibilità: Tipo I (IgE-mediata/anafilattica), Tipo II (citotossica mediata da anticorpi tissutali), Tipo III (da immunocomplessi circolanti), Tipo IV (cellulo-mediata o ritardata).",
    category: "Immunopatologia",
    lessonNumber: 26,
    letter: "G"
  },
  {
    term: "Granzima B",
    definition: "Serina-proteasi citolitica contenuta nei granuli secretori dei CTL e delle cellule NK; entra nella cellula bersaglio tramite i pori di perforina e cliva sia la procaspasi-3 attivando la DNasi CAD, sia la proteina Bid in tBid inducendo l'apoptosi mitocondriale.",
    category: "Adattativa T/B",
    lessonNumber: 20,
    letter: "G"
  },

  // H
  {
    term: "HAART / cART",
    definition: "Highly Active Antiretroviral Therapy (o Combination Antiretroviral Therapy): combinazione di tre farmaci appartenenti a classi diverse (NRTI, NNRTI, inibitori di proteasi, inibitori di integrasi) capace di sopprimere la viremia da HIV sotto 50 copie/mL (U=U).",
    category: "Clinica & Farmaci",
    lessonNumber: 33,
    letter: "H"
  },
  {
    term: "HLA-B27",
    definition: "Allele di classe I del complesso maggiore di istocompatibilità associato a un Rischio Relativo (RR) superiore a 80-90 per lo sviluppo della Spondilite Anchilosante e delle spondiloartriti sieronegative.",
    category: "Clinica & Farmaci",
    lessonNumber: 30,
    letter: "H"
  },

  // I
  {
    term: "IDO (Indolammina-2,3-diossigenasi)",
    definition: "Enzima immunotollerogeno che catabolizza il triptofano in chinurenina; la deplezione locale di triptofano induce starvation metabolica e arresto del ciclo nei linfociti T effettori, favorendo la differenziazione dei Treg.",
    category: "Citochine & Segnalazione",
    lessonNumber: 30,
    letter: "I"
  },
  {
    term: "IL-2 (Interleuchina-2)",
    definition: "Citochina autocrina e paracrina essenziale per la proliferazione e l'espansione clonale dei linfociti T attivati; lega un recettore eterotrimerico ad altissima affinità composto da catena α (CD25), catena β (CD122) e catena γ comune (CD132).",
    category: "Citochine & Segnalazione",
    lessonNumber: 2,
    letter: "I"
  },
  {
    term: "IL-6 & Tocilizumab",
    definition: "Citochina proinfiammatoria pleiotropica e pirogena rilasciata dai macrofagi; mediatrice principale della sindrome da rilascio di citochine (CRS) da CAR-T e dell'artrite reumatoide, trattata elettivamente con l'anticorpo monoclonale anti-IL-6R Tocilizumab.",
    category: "Citochine & Segnalazione",
    lessonNumber: 2,
    letter: "I"
  },
  {
    term: "Inflammasoma NLRP3",
    definition: "Piattaforma molecolare citosolica multiproteica (NLRP3 + ASC + procaspasi-1) attivata da PAMPs, DAMPs e perturbazioni ioniche; converte per taglio proteolitico la pro-IL-1β e la pro-IL-18 nelle forme biologicamente attive e cliva la Gasdermina D.",
    category: "Innata & PRR",
    lessonNumber: 4,
    letter: "I"
  },
  {
    term: "Interferoni di Tipo I (IFN-α / IFN-β)",
    definition: "Citochine antivirali secrete precocemente soprattutto dalle cellule dendritiche plasmacitoidi (pDC) a valle di TLR endosomiali e RLR citosolici; attivano centinaia di geni ISG (PKR, OAS/RNasi L, IFITM) bloccando la replicazione virale cellulare.",
    category: "Citochine & Segnalazione",
    lessonNumber: 5,
    letter: "I"
  },
  {
    term: "Ipilimumab & Nivolumab",
    definition: "Anticorpi monoclonali inibitori dei checkpoint immunitari: Ipilimumab blocca CTLA-4 amplificando il priming linfonodale; Nivolumab blocca PD-1 riattivando i linfociti T esauriti nel microambiente tumorale (Premio Nobel 2018 ad Allison e Honjo).",
    category: "Clinica & Farmaci",
    lessonNumber: 32,
    letter: "I"
  },

  // J
  {
    term: "JAK-STAT (Via di Segnalazione)",
    definition: "Cascata di trasduzione biochimica rapida a valle dei recettori delle citochine di classe I e II: le tirosina chinasi Janus (JAK1, JAK2, JAK3, Tyk2) si transfosforilano e fosforilano i fattori di trascrizione STAT, che omo/eterodimerizzano traslocando nel nucleo.",
    category: "Citochine & Segnalazione",
    lessonNumber: 2,
    letter: "J"
  },

  // K
  {
    term: "KIR (Killer cell Immunoglobulin-like Receptors)",
    definition: "Famiglia di recettori espressi sulle cellule NK specifici per molecole HLA di classe I (HLA-A, B, C); suddivisi in inibitori (KIR-L con coda lunga dotata di motivi ITIM reclutanti SHP-1) e attivatori (KIR-S con coda corta associata a DAP12/ITAM).",
    category: "Adattativa T/B",
    lessonNumber: 21,
    letter: "K"
  },

  // L
  {
    term: "Long-Term Non-Progressors (LTNP)",
    definition: "Individui con infezione da HIV-1 che mantengono spontaneamente una fase di latenza asintomatica prolungata (> 7-10 anni) senza terapia, con viremia bassa e conta di CD4 > 600/μL, associati a CTL polifunzionali, bNAbs, aplotipo KIR-B e mutazione CCR5-Δ32.",
    category: "Clinica & Farmaci",
    lessonNumber: 33,
    letter: "L"
  },

  // M
  {
    term: "MAC (Complesso di Attacco alla Membrana)",
    definition: "Complesso macromolecolare terminale del complemento formato da C5b-6-7-8 e dalla polimerizzazione di 10-16 molecole di C9; crea un poro idrofilo transmembrana di 10 nm inducendo lisi osmotica selettiva (es. contro Neisseria).",
    category: "Complemento",
    lessonNumber: 15,
    letter: "M"
  },
  {
    term: "MHC di Classe I vs Classe II",
    definition: "MHC-I è espresso su tutte le cellule nucleate, lega peptidi endogeni (8-10 aa) e presenta ai T CD8+; MHC-II è espresso solo sulle APC professionali (DC, macrofagi, B), lega peptidi esogeni lunghi (12-24 aa) e presenta ai T CD4+ helper.",
    category: "Adattativa T/B",
    lessonNumber: 8,
    letter: "M"
  },
  {
    term: "Missing-Self (Teoria del)",
    definition: "Principio formulato da Klas Kärre: le cellule Natural Killer lisano cellule prive delle molecole MHC-I self o che ne abbiano ridotto l'espressione (come avviene in seguito a infezioni virali o trasformazione neoplastica), venendo meno il segnale inibitorio KIR.",
    category: "Adattativa T/B",
    lessonNumber: 21,
    letter: "M"
  },

  // N
  {
    term: "Natalizumab",
    definition: "Anticorpo monoclonale umanizzato diretto contro la subunità α4 delle integrine (VLA-4 / α4β1 e α4β7); blocca l'adesione a VCAM-1 e MAdCAM-1 impedendo lo stravaso dei linfociti T autoreattivi nel SNC (Sclerosi Multipla) e nell'intestino (Crohn).",
    category: "Clinica & Farmaci",
    lessonNumber: 31,
    letter: "N"
  },
  {
    term: "Nef (HIV-1)",
    definition: "Fattore di virulenza multifunzionale di HIV: provoca la degradazione lisosomiale di MHC-I proteggendo la cellula dai CTL e stimola estroflessioni filiformi macrofagiche che per trogocitosi trasferiscono Nef ai B bloccando il class-switch anticorpale.",
    category: "Clinica & Farmaci",
    lessonNumber: 33,
    letter: "N"
  },
  {
    term: "NETosi (Neutrophil Extracellular Traps)",
    definition: "Forma programmata di morte cellulare dei neutrofili in cui la cromatina decondensata (istoni citrullinati da PAD4) viene estrusa all'esterno complessata con enzimi antimicrobici (mieloperossidasi, elastasi), intrappolando e uccidendo microbi extracellulari.",
    category: "Innata & PRR",
    lessonNumber: 3,
    letter: "N"
  },
  {
    term: "NKG2D",
    definition: "Recettore attivatorio omotimerico di tipo C espresso su cellule NK e CTL CD8+; lega i ligandi di stress indotto da danno genotossico e trasformazione neoplastica (MICA, MICB, ULBP1-6), segnalando tramite la proteina adattatrice DAP10.",
    category: "Adattativa T/B",
    lessonNumber: 21,
    letter: "N"
  },

  // P
  {
    term: "PAMPs & DAMPs",
    definition: "PAMPs (Pathogen-Associated Molecular Patterns) sono strutture microbiche altamente conservate ed essenziali (LPS, peptidoglicano, dsRNA); DAMPs (Damage-Associated Molecular Patterns) sono allarmine endogene rilasciate da cellule necrotiche o stressate (ATP, HMGB1, calreticulina).",
    category: "Innata & PRR",
    lessonNumber: 4,
    letter: "P"
  },
  {
    term: "Perforina",
    definition: "Glicoproteina citolitica contenuta nei granuli secretori dei CTL e delle cellule NK; in presenza di ioni Ca²⁺ polimerizza nella membrana della cellula bersaglio formando pori cilindrici transmembrana attraverso cui transitano i granzimi.",
    category: "Adattativa T/B",
    lessonNumber: 20,
    letter: "P"
  },
  {
    term: "Pneumocystis jirovecii (PJP)",
    definition: "Fungo atipico opportunista polmonare; la sua polmonite interstiziale bilaterale è la classica infezione opportunistica definente l'esordio di AIDS nei pazienti con linfociti T CD4+ inferiori a 200 cellule/μL.",
    category: "Clinica & Farmaci",
    lessonNumber: 33,
    letter: "P"
  },

  // R
  {
    term: "RAG-1 & RAG-2 (Recombination Activating Genes)",
    definition: "Endonucleasi linfocita-specifiche che riconoscono le sequenze segnale di ricombinazione (RSS) e tagliano il DNA introducendo rotture a doppio filamento essenziali per la ricombinazione somatica V(D)J; il loro deficit genetico provoca SCID T- B- NK+.",
    category: "Adattativa T/B",
    lessonNumber: 7,
    letter: "R"
  },
  {
    term: "RANKL - RANK - OPG",
    definition: "Asse dell'osteoimmunologia: RANKL prodotto dai linfociti Th1/Th17 lega RANK sui precursori degli osteoclasti promuovendone maturazione e riassorbimento osseo erosivo (nell'artrite reumatoide); OPG (osteoprotegerina) agisce come recettore esca fisiologico.",
    category: "Immunopatologia",
    lessonNumber: 31,
    letter: "R"
  },
  {
    term: "Reservoir Virali (HIV)",
    definition: "Serbatoi cellulari integrati quiescenti (linfociti T CD4+ memory a riposo e macrofagi tissutali) costituiti precocemente nei primi 10-20 giorni dall'infezione; non trascrivono proteine virali e rimangono invulnerabili a farmaci e risposta immunitaria.",
    category: "Clinica & Farmaci",
    lessonNumber: 33,
    letter: "R"
  },
  {
    term: "Rituximab",
    definition: "Anticorpo monoclonale chimerico murino-umano diretto contro l'antigene CD20 espresso sui linfociti B (da pre-B a B maturi); induce deplezione B tramite ADCC, CDC e apoptosi, utilizzato in linfomi B, artrite reumatoide e vasculiti.",
    category: "Clinica & Farmaci",
    lessonNumber: 18,
    letter: "R"
  },

  // S
  {
    term: "SCID-X1 (Catena Gamma Comune)",
    definition: "Immunodeficienza combinata grave legata al cromosoma X causata da mutazioni del gene IL2RG codificante per la catena γ comune (γc / CD132), condivisa dai recettori per IL-2, IL-4, IL-7, IL-9, IL-15 e IL-21; fenotipo T- B+ NK- per mancata segnalazione di IL-7 e IL-15.",
    category: "Clinica & Farmaci",
    lessonNumber: 11,
    letter: "S"
  },
  {
    term: "Sindrome di DiGeorge",
    definition: "Immunodeficienza primaria causata da microdelezione 22q11.2 con mancato sviluppo embrionale del 3° e 4° arco faringeo; comporta aplasia timica con deficit profondo di linfociti T, ipoparatiroidismo con ipocalcemia e anomalie conotruncali cardiache.",
    category: "Clinica & Farmaci",
    lessonNumber: 11,
    letter: "S"
  },
  {
    term: "Sinapsi Immunologica (SMAC)",
    definition: "Giunzione cellulare altamente organizzata tra linfocita T e APC: c-SMAC centrale contenente il TCR, CD3, CD4/CD8 e molecole costimolatorie; p-SMAC periferico ricco di integrine di adesione LFA-1/ICAM-1; d-SMAC distale contenente CD45 e fosfatasi escluse.",
    category: "Adattativa T/B",
    lessonNumber: 12,
    letter: "S"
  },

  // T
  {
    term: "TAP1 & TAP2",
    definition: "Trasportatori associati alla processazione antigenica: eterodimero ABC a livello della membrana del reticolo endoplasmatico che traspone attivamente i peptidi citosolici generati dal proteasoma nel lume dell'ER per caricarli sulle molecole MHC di classe I.",
    category: "Adattativa T/B",
    lessonNumber: 9,
    letter: "T"
  },
  {
    term: "Th1 vs Th2 vs Th17",
    definition: "Lignaggi T helper differenziati: Th1 guidati da IL-12/T-bet producono IFN-γ contro intracellulari; Th2 guidati da IL-4/GATA3 secernono IL-4/5/13 contro parassiti ed allergie; Th17 guidati da IL-6/IL-23/RORγt producono IL-17/22 contro batteri extracellulari e funghi.",
    category: "Adattativa T/B",
    lessonNumber: 19,
    letter: "T"
  },
  {
    term: "TLR (Toll-Like Receptors)",
    definition: "Famiglia di recettori PRR dotati di ectodominio ricco in leucine (LRR) e dominio citoplasmatico TIR: TLR1, 2, 4, 5, 6 sulla membrana plasmatica riconoscono componenti batteriche; TLR3, 7, 8, 9 negli endosomi riconoscono acidi nucleici virali/batterici.",
    category: "Innata & PRR",
    lessonNumber: 4,
    letter: "T"
  },
  {
    term: "Trogocitosi",
    definition: "Processo di trasferimento intercellulare rapido mediante il quale un linfocita o macrofago acquisisce porzioni di membrana plasmatica e proteine ancorate da una cellula adiacente a seguito di stretto contatto sinaptico o prolungamenti filiformi (filopodi).",
    category: "Adattativa T/B",
    lessonNumber: 33,
    letter: "T"
  },

  // U
  {
    term: "U=U (Undetectable = Untransmittable)",
    definition: "Principio scientifico validato a livello globale secondo cui una persona con infezione da HIV che assume regolarmente la terapia cART e mantiene stabilmente una carica virale plasmatica non rilevabile (< 50 copie/mL) non trasmette il virus per via sessuale.",
    category: "Clinica & Farmaci",
    lessonNumber: 33,
    letter: "U"
  },

  // V
  {
    term: "V(D)J Ricombinasi",
    definition: "Macchinario enzimatico comprendente RAG-1, RAG-2, Artemis, Ku70/80 e TdT (Deossinucleotidil Transferasi Terminale) che opera la ricombinazione genica somatica assemblando i segmenti variabili dei geni per immunoglobuline e TCR.",
    category: "Adattativa T/B",
    lessonNumber: 7,
    letter: "V"
  }
];
