import { QuizQuestion, Flashcard } from './chapterContent';

export interface MhcComparisonDetail {
  feature: string;
  mhcClassI: string;
  mhcClassII: string;
  molecularSignificance: string;
}

export const MHC_COMPARISON_DATA: MhcComparisonDetail[] = [
  {
    feature: 'Composizione Polipeptidica',
    mhcClassI: 'Catena pesante α (44-47 kDa) + β2-microglobulina (12 kDa)',
    mhcClassII: 'Eterodimero di due catene: catena α (32-34 kDa) e catena β (29-32 kDa)',
    molecularSignificance: 'MHC-I impiega una catena transmembrana polimorfa e una catena accessoria invariante (β2M); MHC-II impiega due catene transmembrana entrambe codificate nel locus HLA.'
  },
  {
    feature: 'Localizzazione Genica',
    mhcClassI: 'Catena α su Cr. 6p21 (HLA-A, -B, -C); β2M su Cr. 15 (monomorfica)',
    mhcClassII: 'Entrambe le catene (α e β) su Cr. 6p21 (HLA-DP, -DQ, -DR)',
    molecularSignificance: 'La β2M è identica in tutta la specie umana ed è indispensabile per la corretta conformazione e l’esportazione in membrana del complesso MHC-I.'
  },
  {
    feature: 'Architettura della Tasca Peptidica',
    mhcClassI: 'Formata dai domini α1 e α2 della stessa catena α (tasca chiusa alle estremità)',
    mhcClassII: 'Formata dal dominio α1 (catena α) e dal dominio β1 (catena β) (tasca aperta ai lati)',
    molecularSignificance: 'Un pavimento di 8 filamenti a foglietto β antiparallelo sormontato da due α-eliche anfipatiche parallele crea la nicchia che alloggia il peptide.'
  },
  {
    feature: 'Lunghezza del Peptide Alloggiato',
    mhcClassI: '8-10 aminoacidi (lunghezza ottimale 9 aa)',
    mhcClassII: '13-18 aminoacidi (può legare fino a 30 aa prima del taglio proteolitico)',
    molecularSignificance: 'La tasca chiusa di MHC-I blocca rigidamente le estremità amminica e carbossilica; la tasca aperta di MHC-II lascia sporgere le estremità come una fetta di carne in un panino hot-dog.'
  },
  {
    feature: 'Residui Àncora & Conformazione',
    mhcClassI: 'Posizionati alle estremità (P2 e C-terminale P9); il centro del peptide si inarca all’esterno verso il TCR',
    mhcClassII: 'Distribuiti lungo la sequenza centrale (motivi spaziati internamente); le estremità sporgono libere',
    molecularSignificance: 'I residui àncora penetrano nelle tasche idrofobiche/aromatiche dell’MHC determinando il legame promiscuo; i residui sporgenti definiscono la specificità fine riconosciuta dal TCR.'
  },
  {
    feature: 'Corecettore Linfocitario Partner',
    mhcClassI: 'CD8 (dimero αβ o αα) lega selettivamente il dominio invariante α3',
    mhcClassII: 'CD4 (monomero a 4 domini Ig-like) lega i domini invarianti α2 e β2',
    molecularSignificance: 'I corecettori stabilizzano la sinapsi immunologica a bassa affinità TCR:pMHC e reclutano la chinasi Lck per l’innesco del segnale a valle.'
  },
  {
    feature: 'Origine dell’Antigene Presentato',
    mhcClassI: 'Proteine citosoliche ed endogene (virali, tumorali, self degradate dal proteasoma)',
    mhcClassII: 'Proteine extracellulari ed esogene captate per endocitosi/fagocitosi (vescicolari)',
    molecularSignificance: 'La separazione spaziale consente di innescare la citotossicità letale solo verso cellule infettate internamente, preservando le cellule innocenti.'
  },
  {
    feature: 'Distribuzione Cellulare',
    mhcClassI: 'Costitutiva su tutte le cellule nucleate del corpo (assente sugli eritrociti anucleati)',
    mhcClassII: 'Costitutiva su APC professioniste (DC, macrofagi, linfociti B) ed epitelio timico; inducibile su endotelio ed epitelio',
    molecularSignificance: 'Qualsiasi cellula nucleata può subire trasformazione neoplastica o infezione virale e deve poter essere riconosciuta ed eliminata dai CTL CD8+.'
  },
  {
    feature: 'Citochine Upregulatrici Chiave',
    mhcClassI: 'Interferoni di tipo I (IFN-α, IFN-β) e TNF-α',
    mhcClassII: 'Interferone di tipo II (IFN-γ, prodotto da T helper 1 e NK)',
    molecularSignificance: 'Cooperazione tra immunità innata ed acquisita per amplificare la presentazione durante infezioni virali (IFN-I) o fagocitarie (IFN-γ).'
  }
];

export interface HlaDiseaseAssociation {
  allele: string;
  mhcClass: 'Classe I' | 'Classe II';
  disease: string;
  relativeRisk: string;
  molecularPathology: string;
}

export const HLA_DISEASE_ASSOCIATIONS_DATA: HlaDiseaseAssociation[] = [
  {
    allele: 'HLA-B*27',
    mhcClass: 'Classe I',
    disease: 'Spondilite Anchilosante (e spondiloartriti sieronegative)',
    relativeRisk: '> 90 volte',
    molecularPathology: 'L’allele HLA-B27 presenta una spiccata tendenza al misfolding nel reticolo endoplasmatico con autofagia disregolata, oppure presenta un peptide self artrogenico scatenante linfociti T citotossici autoreattivi contro le entesi articolari.'
  },
  {
    allele: 'HLA-DQ2 / HLA-DQ8',
    mhcClass: 'Classe II',
    disease: 'Celiachia (Enteropatia da sensibilità al glutine)',
    relativeRisk: '> 95% dei pazienti ha DQ2/DQ8',
    molecularPathology: 'La deamidazione della gliadina da parte della transglutaminasi tissutale (tTG) introduce cariche negative che alloggiano con straordinaria affinità nelle tasche cariche positivamente di DQ2 (DQA1*05:01/DQB1*02:01) scatenando i CD4+ T helper intestinali.'
  },
  {
    allele: 'HLA-DR4 (DRB1*04:01)',
    mhcClass: 'Classe II',
    disease: 'Artrite Reumatoide (Shared Epitope)',
    relativeRisk: '4 - 8 volte',
    molecularPathology: 'Il motivo dell’epitopo condiviso (Shared Epitope, sequenza QKRAA nella catena β1) forma una tasca P4 elettropositiva ideale per accogliere residui di citrullina generati dalla PAD, innescando la produzione di autoanticorpi anti-CCP (ACPA).'
  },
  {
    allele: 'HLA-DR3 / HLA-DR4',
    mhcClass: 'Classe II',
    disease: 'Diabete Mellito di Tipo 1 (Insulino-dipendente)',
    relativeRisk: '20 - 40 volte (in eterozigosi combinata DR3/DR4)',
    molecularPathology: 'Presentazione di epitopi autoantigenici delle cellule β-pancreatiche (preproinsulina, GAD65, IA-2) a linfociti T autoreattivi che sfuggono alla selezione negativa timica.'
  },
  {
    allele: 'HLA-DR2 (DRB1*15:01)',
    mhcClass: 'Classe II',
    disease: 'Sclerosi Multipla & Malattie Neuroinfiammatorie',
    relativeRisk: '3 - 4 volte',
    molecularPathology: 'Presentazione da parte della microglia attivata e macrofagi infiltranti il SNC di peptidi della proteina basica della mielina (MBP) e MOG, innescando neuroinfiammazione autoimmune nel midollo spinale e nell’encefalo.'
  }
];

export const QUIZ_LEZIONE_8: QuizQuestion[] = [
  {
    "id": "q8-1",
    "question": "Qual è la ragione strutturale per cui le molecole MHC di classe I legano peptidi rigidi di 8-10 aminoacidi, mentre le molecole di classe II alloggiano peptidi più lunghi (13-18 aminoacidi)?",
    "options": [
      "L’MHC-I è codificato da geni con introni più corti rispetto ai geni dell’MHC-II",
      "La β2-microglobulina occupa fisicamente metà della tasca di legame peptidica dell’MHC-I limitandone lo spazio",
      "La tasca dell’MHC-I è chiusa ad entrambe le estremità dai domini α1 e α2, mentre la tasca dell’MHC-II è aperta ai lati essendo formata dall’associazione dei domini α1 e β1",
      "I peptidi per MHC-I contengono esclusivamente residui di cisteina che formano ponti disolfuro intramolecolari compatti"
    ],
    "correctIndex": 2,
    "explanation": "Come spiegato in aula dalla Professoressa Molfetta, la tasca di MHC-I è formata da un unico polipeptide (domini α1 e α2) che sigilla le due estremità, costringendo i peptidi a una lunghezza fissa di 8-10 aminoacidi con le estremità vincolate dai residui àncora. Al contrario, nell’MHC-II la tasca è formata da due catene distinte (α1 e β1) che lasciano le estremità aperte, permettendo al peptide di sporgere liberamente oltre i confini della tasca come in un panino hot-dog.",
    "clinicalPearl": "Nelle cellule trasformate o infettate, peptidi virali o neoantigeni mutati con sostituzioni nei residui àncora P2 o P9 perdono la capacità di legarsi a MHC-I, consentendo al tumore di evadere la sorveglianza dei linfociti T citotossici CD8+."
  },
  {
    "id": "q8-2",
    "question": "Che cosa si intende per \"espressione codominante\" dei geni HLA e quale vantaggio funzionale conferisce a un individuo eterozigote?",
    "options": [
      "Esprime solo l’allele paterno nei tessuti ematopoietici e solo l’allele materno nei tessuti connettivali",
      "Un solo allele viene scelto casualmente per ciascuna cellula, come avviene per l’inattivazione del cromosoma X",
      "Gli alleli di classe I silenziano trascrizionalmente gli alleli di classe II in condizioni basali",
      "Tutti gli alleli ereditati (sia materni che paterni) per ogni locus vengono espressi simultaneamente sulla membrana cellulare, raddoppiando o quadruplicando il repertorio di peptidi patogeni presentabili"
    ],
    "correctIndex": 3,
    "explanation": "A differenza dei caratteri mendeliani classici a dominanza/recessività, i geni HLA sono espressi in modo codominante: un individuo eterozigote per i 3 loci di classe I esprime simultaneamente 6 proteine MHC-I distinte per cellula. Per la classe II, combinando le catene α e β materne e paterne, si possono assemblare fino a 16 eterodimeri differenti. Questo moltiplica lo spettro di peptidi che possono essere presentati, amplificando l’efficacia protettiva contro i patogeni.",
    "clinicalPearl": "Nel trapianto allogenico di cellule staminali ematopoietiche (HSCT), la compatibilità HLA è critica: un mismatch a singolo allele scatena la reazione contro l’ospite (Graft-versus-Host Disease, GvHD) mediata dai linfociti T alloreattivi."
  },
  {
    "id": "q8-3",
    "question": "Perché una molecola MHC priva di peptide NON può rimanere stabilmente espressa sulla superficie cellulare?",
    "options": [
      "Perché il legame del peptide nella tasca è indispensabile per la stabilizzazione conformazionale del trimero (catena α, β2M/catena β e peptide); in assenza di peptide, il complesso è instabile e viene rapidamente internalizzato e degradato",
      "Perché viene attaccata e distrutta dalle immunoglobuline circolanti IgM",
      "Perché l’assenza di peptide attiva selettivamente la cascata del complemento per via classica",
      "Perché le cellule endoteliali impediscono il passaggio di molecole prive di residui glicidici complessi"
    ],
    "correctIndex": 0,
    "explanation": "Sulla membrana cellulare non esistono molecole MHC \"vuote\". Il peptide inserito nella tasca funge da elemento strutturale cardine: fornisce i contatti non covalenti che saldano le α-eliche e il pavimento β. Se il peptide si dissocia o non è legato nel RE/vescicola, la molecola perde conformazione e viene prontamente internalizzata e degradata nei lisosomi. In condizioni fisiologiche basali, tutte le MHC espresse alloggiano peptidi self.",
    "clinicalPearl": "Nelle immunodeficienze con mutazione di TAP1 o TAP2 (Bare Lymphocyte Syndrome Tipo I), i peptidi citosolici non entrano nel RE: i complessi MHC-I privi di peptide collassano, determinando assenza totale di MHC-I di superficie e infezioni respiratorie batteriche croniche necrotizzanti."
  },
  {
    "id": "q8-4",
    "question": "Qual è il significato evolutivo e molecolare dell’esperimento sociale delle \"T-shirt sudate\" condotto negli anni ’90 citato nella lezione?",
    "options": [
      "Ha dimostrato che le citochine pro-infiammatorie vengono rilasciate nel sudore durante lo sforzo fisico",
      "Ha evidenziato che la scelta sessuale umana è inconsciamente influenzata da segnali olfattivi legati a peptidi MHC, con una preferenza per partner con aplotipi HLA dissimili al fine di massimizzare l’eterozigosi della prole",
      "Ha provato che i batteri del microbioma ascellare degradano esclusivamente le catene pesanti delle IgG",
      "Ha dimostrato che l’esercizio anaerobico induce la down-regolazione costitutiva di HLA-B27"
    ],
    "correctIndex": 1,
    "explanation": "L’esperimento condotto da Wedekind et al. (e replicato in vari modelli mammiferi) ha dimostrato che le donne valutano come più attraente l’odore di magliette indossate da uomini con alleli HLA differenti dai propri. A livello molecolare, i recettori vomeronasali e olfattivi legano frammenti peptidici strutturalmente affini a quelli dell’MHC. La selezione sessuale verso aplotipi dissimili favorisce l’eterozigosi della prole, garantendo una maggiore resistenza globale alle malattie infettive.",
    "clinicalPearl": "L’assunzione di contraccettivi orali estroprogestinici inverte questa preferenza: le donne sotto pillola preferiscono l’odore di individui con HLA simile, poiché lo stato ormonale simula la gravidanza in cui è biologicamente vantaggioso avvicinarsi al nucleo familiare di supporto."
  },
  {
    "id": "q8-5",
    "question": "In che modo i corecettori CD4 e CD8 discriminano funzionalmente tra MHC di classe I e di classe II?",
    "options": [
      "CD8 lega la tasca peptidica di MHC-I mentre CD4 lega la tasca peptidica di MHC-II",
      "CD8 riconosce la β2-microglobulina, mentre CD4 riconosce il solfato di eparano della matrice",
      "CD8 interagisce specificamente con il dominio non polimorfico α3 di MHC-I, mentre CD4 interagisce con i domini non polimorfici α2 e β2 di MHC-II",
      "CD4 e CD8 non interagiscono con l’MHC, ma esclusivamente con il complesso CD3 del TCR"
    ],
    "correctIndex": 2,
    "explanation": "Poiché la tasca peptidica (α1/α2 per MHC-I e α1/β1 per MHC-II) è altamente polimorfa per consentire la variabilità del legame antigenico, i corecettori invarianti CD4 e CD8 devono legare porzioni rigidamente conservate della molecola. CD8 lega il dominio immunoglobulinico invariante α3 della catena pesante di MHC-I, orientando il linfocita verso la citotossicità; CD4 lega simultaneamente i domini conservati α2 e β2 di MHC-II, orientando il linfocita verso la secrezione di citochine helper.",
    "clinicalPearl": "Il virus dell’immunodeficienza umana (HIV) sfrutta proprio il corecettore CD4 come recettore d’ingresso cellulare primario, legandosi alla gp120 virale e inducendo la deplezione selettiva dei T helper CD4+ con conseguente AIDS conclamato."
  }
];

export const FLASHCARDS_LEZIONE_8: Flashcard[] = [
  {
    id: 'fc-l8-1',
    front: 'Perché l’interazione TCR:pMHC richiede necessariamente l’intervento dei corecettori CD4 o CD8?',
    back: 'Il legame del TCR con il complesso peptide-MHC è a bassa affinità (Kd tra 1 e 100 μM, di ordini di grandezza inferiore agli anticorpi). I corecettori invarianti CD4 e CD8 legano i domini conservati di MHC (rispettivamente α2/β2 e α3), stabilizzando fisicamente la sinapsi per un tempo sufficiente e reclutando la chinasi intracellulare Lck associata alle loro code citoplasmatiche per fosforilare i motivi ITAM di CD3/catena ζ.',
    category: 'Molecolare'
  },
  {
    id: 'fc-l8-2',
    front: 'Qual è la differenza fondamentale tra variabilità dei recettori antigenici (TCR/BCR) e variabilità delle molecole MHC?',
    back: 'La variabilità di TCR e BCR è INDIVIDUALE e SOMATICA: ogni individuo eredita gli stessi geni germinali, che vengono poi ricombinati casualmente (V(D)J somatic recombination) all’interno di ciascun singolo linfocita generando cloni unici. La variabilità dell’MHC è invece POPOLAZIONALE e GERMINALE: deriva da poligenia, polimorfismo allelico estremo e codominanza; ogni individuo eredita stabilmente dal genoma dei genitori un set fisso di alleli che non muta nelle cellule somatiche.',
    category: 'Fondamenti'
  },
  {
    id: 'fc-l8-3',
    front: 'Che cosa si intende per "Legame Promiscuo" dell’MHC per i peptidi?',
    back: 'A differenza della specificità rigidamente univoca "chiave-serratura" degli anticorpi per un singolo epitopo, una singola molecola MHC può legare centinaia o migliaia di peptidi sequenzialmente differenti, purché possiedano i residui àncora (idrofobici o basici) nelle posizioni corrette compatibili con le tasche chimiche della fessura.',
    category: 'Molecolare'
  },
  {
    id: 'fc-l8-4',
    front: 'Quale compartimento cellulare alimenta la via di caricamento dell’MHC-I rispetto all’MHC-II?',
    back: 'MHC-I presenta peptidi derivati da proteine CITOSOLICHE/ENDOGENE (sintesi virale intracellulare, proteine self degradate dal proteasoma e traslocate nel RE da TAP). MHC-II presenta peptidi derivati da proteine EXTRACELLULARI/ESOGENE internalizzate per fagocitosi o endocitosi recettore-mediata e digerite nei lisosomi acidi mediante catepsine.',
    category: 'Cellulare'
  },
  {
    id: 'fc-l8-5',
    front: 'Qual è il ruolo patogenetico dell’allele HLA-B*27 nella Spondilite Anchilosante?',
    back: 'Presenta una correlazione clinica elevatissima (rischio relativo >90). Le ipotesi patogenetiche includono: 1) Presentazione di un peptide artrogenico batterico cross-reattivo con autoantigeni articolari; 2) Tendenza della catena pesante HLA-B27 a formare omomodimeri anomali (B272) legati da ponti disolfuro che attivano recettori KIR o LILR; 3) Misfolding nel RE con stress del reticolo endoplasmatico e iperproduzione flogistica di IL-23/IL-17.',
    category: 'Clinica'
  },
  {
    id: 'fc-l8-6',
    front: 'Quali citochine regolano in modo differenziale l’espressione di MHC di classe I e classe II?',
    back: 'Gli Interferoni di tipo I (IFN-α e IFN-β) e il TNF-α stimolano la trascrizione e aumentano l’espressione di MHC-I su tutte le cellule nucleate durante infezioni virali. L’Interferone di tipo II (IFN-γ), prodotto da linfociti Th1 e NK, up-regola potentemente l’espressione di MHC-II (tramite il transattivatore CIITA) su macrofagi, DC, cellule endoteliali ed epiteliali.',
    category: 'Terapia'
  }
];
