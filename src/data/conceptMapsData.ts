import { ConceptMapFlowProps } from '../components/ConceptMapFlow';

// =========================================================================
// LEZIONE 7: ONTOGENESI B & CHECKPOINT
// =========================================================================
export const MAP_LEZIONE_7_STAGES: ConceptMapFlowProps = {
  id: 'map-lez7-stages',
  badge: 'MAPPA CONCETTUALE · ONTOGENESI B',
  title: 'Stadi di Maturazione dei Linfociti B nel Midollo Osseo',
  subtitle: 'Sequenza gerarchica dal progenitore staminale al linfocita B naïve pronto all\'egresso ematico',
  colorTheme: 'blue',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Cellula Pro-B Precoce (Early Pro-B)',
      highlightBadge: 'Inizio V(D)J',
      molecularActors: ['c-Kit', 'CD34', 'E2A', 'EBF1'],
      description: 'Commitment verso la linea B sotto l\'influenza di SCF/c-Kit e CXCL12. Inizio del riarrangiamento genico limitato alla giunzione D-J sul locus della catena pesante IgH.',
      checkpointOrOutcome: 'Accessibilità cromatinica del locus IgH garantita da E2A'
    },
    {
      stepNumber: 2,
      stage: 'Cellula Pro-B Tardiva (Late Pro-B)',
      highlightBadge: 'PAX5 Attivo',
      molecularActors: ['PAX5', 'CD19+', 'RAG1/2'],
      description: 'Espressione stabile del master regulator PAX5 con comparsa di CD19. Riarrangiamento del segmento V alla sequenza D-J già unita (completamento VDJ sulla catena pesante).',
      checkpointOrOutcome: 'Se il riarrangiamento è produttivo -> transizione a Grande Pre-B'
    },
    {
      stepNumber: 3,
      stage: 'Grande Pre-B (Large Pre-B)',
      highlightBadge: '1° Checkpoint',
      molecularActors: ['Pre-BCR', 'VpreB', 'λ5', 'Igα/Igβ', 'Btk'],
      description: 'La catena μ riarrangiata si associa alla catena leggera surrogata (VpreB/λ5) formando il Pre-BCR. Il cross-linking spontaneo genera segnale tonico senza ligando.',
      checkpointOrOutcome: 'Esclusione allelica (spegnimento RAG) e fino a 6 cicli di mitosi'
    },
    {
      stepNumber: 4,
      stage: 'Piccolo Pre-B (Small Pre-B)',
      highlightBadge: 'Riarrangiamento IgL',
      molecularActors: ['RAG riattivato', 'Locus κ', 'Locus λ'],
      description: 'Cessa la proliferazione. Si riattivano RAG1/2 e si aprono i loci delle catene leggere: riarrangiamento prima su κ (allele 1 e 2), poi se fallisce su λ (allele 1 e 2).',
      checkpointOrOutcome: 'Fino a 4 tentativi per generare una catena leggera funzionale'
    },
    {
      stepNumber: 5,
      stage: 'Linfocita B Immaturo',
      highlightBadge: '2° Checkpoint',
      molecularActors: ['mIgM completo', 'CD20+', 'Antigeni Self'],
      description: 'Espressione del BCR completo di classe IgM sulla membrana plasmatica. Ingresso nel test di tolleranza centrale nel midollo osseo.',
      checkpointOrOutcome: 'Se lega il self ad alta affinità -> Editing recettoriale o Apoptosi'
    }
  ],
  clinicalSummary: 'I difetti precoci nello sviluppo B (es. mutazione di Btk nella malattia di Bruton/XLA) bloccano la transizione da Pre-B a B immaturo, determinando agammaglobulinemia congenita con assenza totale di linfociti B periferici e plasmacellule.'
};

export const MAP_LEZIONE_7_CHECKPOINTS: ConceptMapFlowProps = {
  id: 'map-lez7-checkpoints',
  badge: 'BIVIO DECISIONALE · TOLLERANZA CENTRALE B',
  title: 'Il Secondo Checkpoint Midollare: Destino del Linfocita B Immaturo',
  subtitle: 'Ipotesi dell\'avidità di legame per gli autoantigeni stromali e meccanismi di tolleranza centrale',
  colorTheme: 'purple',
  mode: 'bifurcation',
  branches: {
    condition: 'Interazione tra il BCR (mIgM) del Linfocita B Immaturo e gli Autoantigeni nel Microambiente Midollare',
    testOrSignal: 'Intensità del legame e grado di cross-linking dei recettori sulla membrana',
    outcomes: [
      {
        label: 'Assenza di Riconoscimento del Self (o affinità bassissima)',
        badge: 'Successo · Migrazione',
        status: 'success',
        description: 'Il clone supera il test di tolleranza centrale. Espressione di BAFF-R, migrazione attraverso il circolo verso la milza (zona marginale o follicoli) come cellula B transizionale (T1/T2).'
      },
      {
        label: 'Legame Multivalente ad Alta Affinità con Autoantigeni di Membrana',
        badge: 'Editing Recettoriale (Rescue)',
        status: 'warning',
        description: 'La cellula non va subito in apoptosi: RAG1/2 rimangono accesi e guidano l\'editing della catena leggera (riarrangiamenti secondari a monte di Vκ e a valle di Jκ o sui loci λ). Se il nuovo BCR non è autoreattivo, la cellula si salva.'
      },
      {
        label: 'Fallimento dell\'Editing Recettoriale o Persistenza di Autoreattività',
        badge: 'Delezione Clonale (Apoptosi)',
        status: 'danger',
        description: 'Esauriti tutti i segmenti V e J utilizzabili (fino a 4 tentativi genomici), il segnale apoptotico mediato dalla via intrinseca (Bim) induce la morte cellulare programmata nel midollo.'
      }
    ]
  },
  clinicalSummary: 'L\'editing recettoriale è il principale meccanismo che impedisce la produzione di autoanticorpi sistemici. Difetti in questo checkpoint predispongono all\'insorgenza di Lupus Eritematoso Sistemico (LES) e artrite reumatoide precoce.'
};

// =========================================================================
// LEZIONE 8: MHC I E II, ARCHITETTURA MOLECOLARE & GENETICA HLA
// =========================================================================
export const MAP_LEZIONE_8_MHC_COMPARISON: ConceptMapFlowProps = {
  id: 'map-lez8-mhc-comparison',
  badge: 'SCHEMA COMPARATIVO · STRUTTURA MHC',
  title: 'MHC di Classe I vs MHC di Classe II a Confronto Molecolare',
  subtitle: 'Differenze tridimensionali, tasca di legame peptidico, corecettori e compartimentalizzazione',
  colorTheme: 'indigo',
  mode: 'comparison-flow',
  comparisonColumns: [
    {
      title: 'MHC di Classe I (HLA-A, B, C)',
      badge: 'Presentazione Citosolica',
      theme: 'blue',
      points: [
        { label: 'Composizione Subunità', value: 'Catena polimorfa α (45 kDa, domini α1, α2, α3) associata non-covalentemente a β2-microglobulina (12 kDa, non polimorfa, chr 15).' },
        { label: 'Architettura Tasca', value: 'Costituita dai domini α1 e α2: chiusa a entrambe le estremità da legami idrogeno terminali.' },
        { label: 'Lunghezza Peptidi', value: 'Rigidamente 8-10 amminoacidi; il peptide si inarca leggermente al centro per alloggiare nella fessura.' },
        { label: 'Residui Àncora', value: 'Posizione 2 (P2) e C-terminale (P9, idrofobico o basico).' },
        { label: 'Corecettore Riconosciuto', value: 'CD8 (lega il dominio non polimorfico α3).' },
        { label: 'Distribuzione Tissutale', value: 'Tutte le cellule nucleate dell\'organismo e piastrine (assente su eritrociti).' }
      ],
      outcome: 'Attivazione della citotossicità da parte dei linfociti T CD8+ (uccisione di cellule infettate da virus o tumorali).'
    },
    {
      title: 'MHC di Classe II (HLA-DP, DQ, DR)',
      badge: 'Presentazione Endosomiale',
      theme: 'purple',
      points: [
        { label: 'Composizione Subunità', value: 'Eterodimero di due catene polimorfe: catena α (33 kDa) e catena β (28 kDa), entrambe transmembrana (chr 6).' },
        { label: 'Architettura Tasca', value: 'Costituita dai domini α1 e β1: fessura aperta alle estremità (come un panino aperto hot dog).' },
        { label: 'Lunghezza Peptidi', value: 'Più lunghi ed eterogenei: 13-18 amminoacidi (possono protrudere dai lati della tasca).' },
        { label: 'Residui Àncora', value: 'Distribuiti internamente (P1, P4, P6, P9) lungo il corridoio peptidico.' },
        { label: 'Corecettore Riconosciuto', value: 'CD4 (lega il dominio non polimorfico β2).' },
        { label: 'Distribuzione Tissutale', value: 'Cellule presentanti l\'antigene professionali (APC): Cellule Dendritiche, Macrofagi, Linfociti B.' }
      ],
      outcome: 'Attivazione dei linfociti T Helper CD4+ (secrezione citochinica, attivazione macrofagica e cooperazione B-T).'
    }
  ],
  clinicalSummary: 'La mancata espressione di MHC-I o MHC-II causa le gravissime "Bare Lymphocyte Syndromes" (BLS tipo I da deficit TAP, BLS tipo II da deficit del fattore di trascrizione CIITA), caratterizzate da grave immunodeficienza combinata.'
};

export const MAP_LEZIONE_8_HLA_GENETICS: ConceptMapFlowProps = {
  id: 'map-lez8-hla-genetics',
  badge: 'MAPPA CONCETTUALE · GENETICA HLA',
  title: 'Genetica del Complesso HLA e Vantaggio dell\'Eterozigosi',
  subtitle: 'Poligenia, codominanza di espressione su cromosoma 6p21 e associazioni patologiche',
  colorTheme: 'cyan',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Cromosoma 6p21.3',
      highlightBadge: 'Poligenia',
      molecularActors: ['Loci Class I', 'Loci Class II', 'Loci Class III'],
      description: 'Il complesso genico più denso di variabilità del genoma umano: codifica per 3 geni classici di classe I (A, B, C) e 3 isotipi di classe II (DP, DQ, DR) con catene α e β distinte.',
      checkpointOrOutcome: 'Garantisce la presenza simultanea di multipli geni presentanti distinti'
    },
    {
      stepNumber: 2,
      stage: 'Polimorfismo Estremo allelismo',
      highlightBadge: 'Migliaia di Alleli',
      molecularActors: ['Tasche P1-P9', 'Sequenze esoniche'],
      description: 'Le variazioni nucleotidiche si concentrano quasi esclusivamente negli esoni che codificano le pareti della tasca peptidica, modificando la carica e l\'idrofobicità dei siti di ancoraggio.',
      checkpointOrOutcome: 'Ogni variante allelica lega un diverso set di peptidi antigenici'
    },
    {
      stepNumber: 3,
      stage: 'Espressione Codominante',
      highlightBadge: 'Aplotipi Materno/Paterno',
      molecularActors: ['6 varianti MHC-I', '12+ varianti MHC-II'],
      description: 'Entrambi gli aplotipi ereditati dai genitori vengono espressi contemporaneamente su ogni cellula. In un individuo eterozigote si esprimono fino a 6 diverse molecole MHC-I e oltre 12 combinazioni MHC-II.',
      checkpointOrOutcome: 'Massimizza il repertorio di peptidi patogeni presentabili ai T'
    },
    {
      stepNumber: 4,
      stage: 'Associazioni HLA-Malattia',
      highlightBadge: 'Rischio Clinico Relativo',
      molecularActors: ['HLA-B27', 'HLA-DQ2/DQ8', 'HLA-DR4'],
      description: 'Alcune tasche legano con elevatissima affinità peptidi self modificati o peptidi alimentari: HLA-B27 aumenta di 90 volte il rischio di Spondilite Anchilosante; HLA-DQ2/DQ8 lega il glutine deamidato nella celiachia.',
      checkpointOrOutcome: 'Predisposizione genetica alla perdita di tolleranza periferica'
    }
  ],
  clinicalSummary: 'La tipizzazione HLA è fondamentale sia per la compatibilità nel trapianto d\'organo solido e di cellule staminali ematopoietiche (HSCT), sia per la diagnosi differenziale delle malattie autoimmuni reumatologiche e gastroenterologiche.'
};

// =========================================================================
// LEZIONE 9: PROCESSAZIONE CITOSOLICA ED ENDOSOMIALE
// =========================================================================
export const MAP_LEZIONE_9_CYTOSOLIC_PATHWAY: ConceptMapFlowProps = {
  id: 'map-lez9-cytosolic-pathway',
  badge: 'SCHEMA DI PROCESSO · VIA MHC-I',
  title: 'La Via Citosolica di Caricamento su MHC di Classe I',
  subtitle: 'Dalla degradazione nell\'immunoproteasoma al complesso di caricamento peptidico (PLC) nel reticolo endoplasmatico',
  colorTheme: 'blue',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Ubiquitinazione & Immunoproteasoma',
      highlightBadge: 'Induzione IFN-γ',
      molecularActors: ['LMP2', 'LMP7', 'MECL-1', 'Ubiquitina'],
      description: 'Le proteine citosoliche (virali, tumorali o DRiPs) vengono marcate da poliubiquitina. L\'IFN-γ sostituisce le subunità catalitiche del proteasoma con LMP2/7, favorendo tagli C-terminali idrofobici.',
      checkpointOrOutcome: 'Generazione di peptidi ottimali per l\'ancoraggio a MHC-I'
    },
    {
      stepNumber: 2,
      stage: 'Traslocazione ATP-dipendente via TAP',
      highlightBadge: 'Trasportatore TAP1/2',
      molecularActors: ['TAP1', 'TAP2', 'Idrolisi ATP'],
      description: 'L\'eterodimero TAP pompa selettivamente peptidi di 8-16 residui dal citosol al lume del reticolo endoplasmatico sfruttando l\'energia dell\'idrolisi di ATP.',
      checkpointOrOutcome: 'Selettività per peptidi con estremità carbossilica idrofobica'
    },
    {
      stepNumber: 3,
      stage: 'Chaperoni del Reticolo & Assemblaggio',
      highlightBadge: 'Controllo Qualità',
      molecularActors: ['Calnessina', 'Calreticulina', 'ERp57'],
      description: 'La catena pesante α nascente si ripiega legando prima la Calnessina, poi si associa alla β2-microglobulina e viene presa in carico da Calreticulina ed ERp57.',
      checkpointOrOutcome: 'Mantiene la tasca aperta e conformazionalmente stabile'
    },
    {
      stepNumber: 4,
      stage: 'Complesso di Caricamento (PLC) & Editing',
      highlightBadge: 'Tapasina & ERAAP',
      molecularActors: ['Tapasina', 'PLC', 'ERAAP'],
      description: 'La Tapasina fa da ponte fisico tra TAP e MHC-I: inserisce e saggia il peptide nella tasca. L\'amminopeptidasi ERAAP accorcia peptidi troppo lunghi a 8-10 amminoacidi.',
      checkpointOrOutcome: 'Selezione del peptide ad altissima affinità (peptide editing)'
    },
    {
      stepNumber: 5,
      stage: 'Rilascio e Trasporto su Membrana',
      highlightBadge: 'Complesso Trimero',
      molecularActors: ['Golgi', 'Vescicole Esocitiche'],
      description: 'Il legame peptidico stabile chiude la tasca: il trimero (catena α + β2m + peptide) si dissocia dal PLC, transita attraverso il Golgi e viene esposto stabilmente sulla membrana.',
      checkpointOrOutcome: 'Riconoscimento e sorveglianza da parte dei cloni T CD8+'
    }
  ],
  clinicalSummary: 'Molti virus (es. HSV con proteina ICP47 che blocca TAP, US6 di CMV, nef di HIV) sviluppano strategie evolutive per inibire questa via, sfuggendo al riconoscimento citotossico ma diventando suscettibili alla lisi da cellule NK.'
};

export const MAP_LEZIONE_9_ENDOSOMAL_PATHWAY: ConceptMapFlowProps = {
  id: 'map-lez9-endosomal-pathway',
  badge: 'SCHEMA DI PROCESSO · VIA MHC-II',
  title: 'La Via Vescicolare ed Endosomiale di Caricamento su MHC di Classe II',
  subtitle: 'Dalla sintesi con Catena Invariante (CD74) all\'editing del CLIP via HLA-DM negli endolisosomi',
  colorTheme: 'purple',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Sintesi ER e Catena Invariante (Ii / CD74)',
      highlightBadge: 'Blocco Fisico',
      molecularActors: ['CD74 (Ii)', 'Trimero MHC-II'],
      description: 'Nel reticolo, 3 eterodimeri α/β si assemblano attorno a un trimero di catena invariante CD74. Il segmento CLIP occupa la tasca, impedendo il legame accidentale di peptidi endogeni.',
      checkpointOrOutcome: 'Indirizzamento selettivo verso la via endosomiale (segnale dileucina)'
    },
    {
      stepNumber: 2,
      stage: 'Endocitosi & Digestione Lisosomiale',
      highlightBadge: 'Acidificazione pH',
      molecularActors: ['Catepsine S/L', 'Antigene Esogeno'],
      description: 'La cellula fagocita o endocita proteine extracellulari. La fusione con endolisosomi acidi attiva le proteasi catepsine che degradano l\'antigene in frammenti di 13-18 residui.',
      checkpointOrOutcome: 'Generazione di peptidi idonei per la tasca aperta di MHC-II'
    },
    {
      stepNumber: 3,
      stage: 'Degradazione di CD74 a Frammento CLIP',
      highlightBadge: 'Residuo CLIP',
      molecularActors: ['Catepsina S', 'Compartimento MIIC'],
      description: 'Le catepsine digeriscono la catena invariante lasciando nella tasca solo il piccolo frammento peptidico residuo denominato CLIP (Class II-associated Invariant Chain Peptide).',
      checkpointOrOutcome: 'Protegge la tasca dal collasso fino all\'arrivo del peptide affine'
    },
    {
      stepNumber: 4,
      stage: 'Scambio Peptidico mediato da HLA-DM',
      highlightBadge: 'Catalizzatore HLA-DM',
      molecularActors: ['HLA-DM', 'HLA-DO (repressore)'],
      description: 'La molecola non classica HLA-DM si lega al complesso, allenta la tasca, scalza via il peptide CLIP e catalizza l\'inserimento di peptidi antigenici esogeni ad alta affinità.',
      checkpointOrOutcome: 'Stabilizzazione del trimero MHC-II con peptide esogeno'
    },
    {
      stepNumber: 5,
      stage: 'Fusione con Membrana Plasmatica',
      highlightBadge: 'Esposizione su APC',
      molecularActors: ['Membrana APC', 'TCR CD4+'],
      description: 'Le vescicole MIIC si fondono con la membrana plasmatica. Il complesso peptide-MHC-II viene esposto per il pattugliamento da parte dei linfociti T CD4+ Helper.',
      checkpointOrOutcome: 'Innesco del segnale 1 per i linfociti T Helper antigene-specifici'
    }
  ],
  clinicalSummary: 'Difetti genetici di HLA-DM impediscono lo scalzamento di CLIP, determinando la mancata presentazione di antigeni patogeni e l\'esposizione uniforme di soli complessi MHC-CLIP, con grave immunodeficienza nei test cutanei di ipersensibilità ritardata.'
};

// =========================================================================
// LEZIONE 10: CROSS-PRESENTAZIONE & PRESENTAZIONI NON PEPTIDICHE
// =========================================================================
export const MAP_LEZIONE_10_CROSS_PRESENTATION: ConceptMapFlowProps = {
  id: 'map-lez10-cross-presentation',
  badge: 'MAPPA CONCETTUALE · CROSS-PRESENTAZIONE',
  title: 'La Cross-Presentazione delle Cellule Dendritiche Convenzionali 1 (cDC1)',
  subtitle: 'Come antigeni esogeni extracellulari vengono presentati su MHC-I per innescare cloni T CD8+ citotossici naïf',
  colorTheme: 'emerald',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Cattura da cDC1 (Clec9A / XCR1+)',
      highlightBadge: 'Riconoscimento F-Actina',
      molecularActors: ['Clec9A', 'XCR1', 'BATF3'],
      description: 'Le cDC1 captano cellule tumorali necrotiche o cellule infettate da virus non citotropi per le APC tramite il recettore scavenger Clec9A, che riconosce la filamina e l\'actina denaturata.',
      checkpointOrOutcome: 'Internalizzazione dell\'antigene in fagosomi specializzati'
    },
    {
      stepNumber: 2,
      stage: 'Alcalinizzazione Fagosomiale & Fuga',
      highlightBadge: 'Inibizione Proteolisi',
      molecularActors: ['NOX2 (gp91phox)', 'Traslocatore Sec61'],
      description: 'La NADPH ossidasi NOX2 fagosomiale produce ROS che alcalinizzano il lume a pH 7.2-7.5, bloccando le proteasi lisosomiali. L\'antigene intatto sfugge nel citosol attraverso il canale Sec61.',
      checkpointOrOutcome: 'Preservazione dell\'integrità conformazionale degli epitopi virali/tumorali'
    },
    {
      stepNumber: 3,
      stage: 'Degradazione e Re-importo (Via Citosolica)',
      highlightBadge: 'Proteasoma & TAP',
      molecularActors: ['Immunoproteasoma', 'TAP1/2'],
      description: 'Nel citosol della cDC1, l\'antigene sfuggito viene processato dal proteasoma e i frammenti peptidici vengono ri-traslocati via TAP nel lume dell\'ER o direttamente nel fagosoma.',
      checkpointOrOutcome: 'I peptidi generati sono caricati su molecole MHC di Classe I'
    },
    {
      stepNumber: 4,
      stage: 'Cross-Priming dei Linfociti T CD8+ Naïve',
      highlightBadge: 'Immunità Antitumorale',
      molecularActors: ['MHC-I', 'CD80/CD86', 'IL-12'],
      description: 'La cDC1 migra al linfonodo satellite ed espone l\'antigene tumorale su MHC-I fornendo contemporaneamente forte costimolazione B7/CD28 e IL-12 a cloni CD8+ naïf.',
      checkpointOrOutcome: 'Generazione di Linfociti T Citotossici (CTL) effettori ed espansione clonale'
    }
  ],
  clinicalSummary: 'La cross-presentazione è la via fisiologica indispensabile per avviare l\'immunità contro tumori solidi e virus che non infettano direttamente le cellule dendritiche. Nei topi knockout per il fattore di trascrizione BATF3 le cDC1 mancano completamente e i tumori non vengono rigettati.'
};

export const MAP_LEZIONE_10_NON_PEPTIDIC: ConceptMapFlowProps = {
  id: 'map-lez10-non-peptidic',
  badge: 'SCHEMA COMPARATIVO · VIE NON CONVENZIONALI',
  title: 'Presentazione di Antigeni Non Proteici e Vie Alternative: CD1, MR1, Cross-Dressing',
  subtitle: 'Dalla presentazione lipidica ai linfociti NKT alla cattura diretta di trogocitosi',
  colorTheme: 'amber',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Molecole CD1 (CD1a-e)',
      highlightBadge: 'Glicolipidi & Micobatteri',
      molecularActors: ['Tasca idrofobica profonda', 'Linfociti NKT'],
      description: 'Strutturalmente simili a MHC-I ma con tasche profonde idrofobiche: legano catene aciliche lipidiche e acidi micolici di Mycobacterium tuberculosis, esponendo la testa zuccherina verso il TCR.',
      checkpointOrOutcome: 'Attivazione rapidissima di linfociti NKT e rilascio di IFN-γ / IL-4'
    },
    {
      stepNumber: 2,
      stage: 'Molecola MR1',
      highlightBadge: 'Metaboliti Vitamina B',
      molecularActors: ['Derivati Riboflavina (Vit B2)', 'Linfociti MAIT'],
      description: 'MR1 presenta metaboliti intermedi della via biosintetica della riboflavina (vitamina B2), esclusiva di batteri e lieviti (assente nei mammiferi), a linfociti MAIT nelle mucose.',
      checkpointOrOutcome: 'Immunità mucosale sentinella polmonare e intestinale'
    },
    {
      stepNumber: 3,
      stage: 'Autofagia (Macroautofagia & CMA)',
      highlightBadge: 'Self Endogeno su MHC-II',
      molecularActors: ['Autofagosomi', 'LAMP-2A'],
      description: 'Proteine citosoliche self e patogeni intracellulari vengono inglobati in autofagosomi che fondono con i compartimenti MIIC: permette la presentazione di antigeni endogeni su MHC-II.',
      checkpointOrOutcome: 'Essenziale per la selezione timica positiva/negativa dei CD4+'
    },
    {
      stepNumber: 4,
      stage: 'Cross-Dressing (Trogocitosi)',
      highlightBadge: 'Scambio di Membrana',
      molecularActors: ['MHC intatti preformati', 'Contatto Sinaptico'],
      description: 'Una cellula dendritica "strappa" e incorpora frammenti di membrana contenenti complessi pMHC già assemblati da altre cellule dendritiche o cellule tumorali, esponendoli intatti.',
      checkpointOrOutcome: 'Amplificazione esponenziale della presentazione senza sintesi de novo'
    }
  ],
  clinicalSummary: 'I farmaci biologici e vaccini di nuova generazione sfruttano ligandi di CD1 (es. α-galattosilceramide) e metaboliti MR1 come potenti adiuvanti per attivare istantaneamente le cellule NKT e MAIT con risposta citochinica innato-simile.'
};

// =========================================================================
// LEZIONE 11: MATURAZIONE TIMICA E SELEZIONE T
// =========================================================================
export const MAP_LEZIONE_11_THYMIC_STAGES: ConceptMapFlowProps = {
  id: 'map-lez11-thymic-stages',
  badge: 'MAPPA CONCETTUALE · TIMOCITI DN → DP',
  title: 'Stadi Maturativi dei Timociti e Checkpoint di β-Selezione',
  subtitle: 'Dall\'ingresso cortico-midollare (Notch-1) al recettore Pre-TCR e transizione a doppio positivo',
  colorTheme: 'cyan',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Stadio DN1 (CD44+ CD25-)',
      highlightBadge: 'Ingresso Giunzione CM',
      molecularActors: ['Notch-1', 'DLL4', 'c-Kit'],
      description: 'I progenitori linfoidi precoci (ETP) arrivano dalla circolazione nella giunzione cortico-midollare. Il ligando DLL4 delle cellule stromali timiche lega Notch-1, bloccando irreversibilmente il destino B o mieloide.',
      checkpointOrOutcome: 'Impegno esclusivo verso il lignaggio T'
    },
    {
      stepNumber: 2,
      stage: 'Stadio DN2 (CD44+ CD25+)',
      highlightBadge: 'Commitment Linfocitario',
      molecularActors: ['IL-7R', 'GATA-3', 'Bcl11b'],
      description: 'Migrazione verso la corteccia esterna timica sotto l\'influenza di IL-7. Inizio del riarrangiamento dei segmenti Dβ-Jβ sul locus della catena TCR-β.',
      checkpointOrOutcome: 'Accensione dei fattori di specificità T-cellulare'
    },
    {
      stepNumber: 3,
      stage: 'Stadio DN3 (CD44- CD25+)',
      highlightBadge: 'Checkpoint Pre-TCR',
      molecularActors: ['Riarrangiamento Vβ-DJβ', 'pTα (Pre-TCR)', 'CD3'],
      description: 'Completamento VDJ sulla catena β. La catena β si associa alla catena invariante surrogata pTα e al complesso CD3 formando il Pre-TCR.',
      checkpointOrOutcome: 'Se il riarrangiamento β è produttivo -> segnale tonico di sopravvivenza (β-selezione)'
    },
    {
      stepNumber: 4,
      stage: 'Stadio DN4 (CD44- CD25-)',
      highlightBadge: 'Esclusione Allelica',
      molecularActors: ['Burst Mitotico', 'Down-regolazione RAG'],
      description: 'La β-selezione induce rapida proliferazione clonale, spegne temporaneamente RAG bloccando il secondo allele β (esclusione allelica) e prepara l\'apertura del locus della catena α.',
      checkpointOrOutcome: 'Transizione irreversibile a timocita corticale maturo'
    },
    {
      stepNumber: 5,
      stage: 'Doppio Positivo DP (CD4+ CD8+)',
      highlightBadge: 'Riarrangiamento TCR-α',
      molecularActors: ['TCR-α/β completo', 'CD4', 'CD8', 'RAG riattivato'],
      description: 'La cellula esprime simultaneamente entrambi i corecettori CD4 e CD8. Riarrangiamento della catena α (che cancella per delezione il locus TCR-δ). Espressione del TCR αβ a densità moderata.',
      checkpointOrOutcome: 'Pronto per il doppio setaccio di selezione timica (positiva e negativa)'
    }
  ],
  clinicalSummary: 'La delezione congenita della 3ª e 4ª tasca faringea nella Sindrome di DiGeorge comporta agenesia o ipoplasia timica: i progenitori ematopoietici non possono maturare e si ha un quadro drammatico di immunodeficienza T con infezioni virali e fungine ricorrenti.'
};

export const MAP_LEZIONE_11_SELECTION_BIFURCATION: ConceptMapFlowProps = {
  id: 'map-lez11-selection-bifurcation',
  badge: 'BIVIO DECISIONALE · SETACCIO TIMICO',
  title: 'Il Doppio Bivio di Selezione Timica: Positiva (cTEC) e Negativa (mTEC / AIRE)',
  subtitle: 'Ipotesi dell\'avità/affinità di legame tra TCR e complessi pMHC self nel timo',
  colorTheme: 'rose',
  mode: 'bifurcation',
  branches: {
    condition: 'Interazione del TCR del Timocita DP con complessi MHC-I e MHC-II presentati dalle Cellule Stromali Timiche',
    testOrSignal: 'Intensità e durata del segnale biochimico di fosforilazione intracellulare',
    outcomes: [
      {
        label: 'Nessun Riconoscimento di MHC (Affinità nulla o trascurabile)',
        badge: 'Morte per Negligenza (~90%)',
        status: 'danger',
        description: 'Il TCR è incapace di riconoscere le molecole MHC self dell\'individuo. In assenza di segnali trofici di sopravvivenza, la cellula va incontro ad apoptosi spontanea per negligenza nella corteccia.'
      },
      {
        label: 'Riconoscimento a Bassa/Moderata Affinità (Selezione Positiva)',
        badge: 'Sopravvivenza & Restrizione MHC',
        status: 'success',
        description: 'Le cTEC forniscono segnali di sopravvivenza. Se il TCR riconosce MHC-I, spegne CD4 diventando Singolo Positivo CD8+; se riconosce MHC-II, spegne CD8 diventando Singolo Positivo CD4+. Migrazione nella midollare.'
      },
      {
        label: 'Riconoscimento ad Altissima Affinità con Peptidi Ectopici (Selezione Negativa)',
        badge: 'Delezione Clonale (Tolleranza)',
        status: 'warning',
        description: 'Nella midollare, le mTEC esprimono il fattore di trascrizione AIRE, presentando proteine organo-specifiche periferiche (insulina, tireoglobulina). Un legame troppo forte innesca Bim e apoptosi o deviazione verso Treg.'
      }
    ]
  },
  clinicalSummary: 'Mutazioni nel gene AIRE impediscono la selezione negativa contro autoantigeni periferici, causando la sindrome autoimmune poliendocrina di tipo 1 (APECED / APS-1) caratterizzata da ipoparatiroidismo, insufficienza surrenalica e candidosi mucocutanea cronica.'
};

// =========================================================================
// LEZIONE 12: TCR-CD3 & SINAPSI IMMUNOLOGICA
// =========================================================================
export const MAP_LEZIONE_12_SMAC_ZONATION: ConceptMapFlowProps = {
  id: 'map-lez12-smac-zonation',
  badge: 'SCHEMA ANATOMICO · SINAPSI IMMUNOLOGICA',
  title: 'Architettura Concentrica della Sinapsi Immunologica (SMAC) e Segregazione Cinetica',
  subtitle: 'Organizzazione spaziale tra Linfocita T e APC: c-SMAC, p-SMAC, d-SMAC e modello dimensionale',
  colorTheme: 'indigo',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Contatto Iniziale e Riconoscimento',
      highlightBadge: 'Scansione Rapida',
      molecularActors: ['LFA-1 bassa affinità', 'ICAM-1', 'Microvilli'],
      description: 'Il linfocita T esplora la superficie dell\'APC mediante protrusioni actiniche. LFA-1 a conformazione ripiegata interagisce transientemente con ICAM-1 stabilendo un contatto instabile.',
      checkpointOrOutcome: 'Se il TCR non trova il peptide specifico -> distacco entro minuti'
    },
    {
      stepNumber: 2,
      stage: 'd-SMAC (Distal SMAC)',
      highlightBadge: 'Anello Esterno',
      molecularActors: ['CD45 (grande ectodominio)', 'CD148', 'Actina F filamentosa'],
      description: 'L\'accostamento stretto delle membrane (15 nm) esclude fisicamente per ingombro sterico le voluminose tirosin-fosfatasi transmembrana CD45 e CD148 verso la periferia distale della sinapsi.',
      checkpointOrOutcome: 'Segregazione cinetica: cessa l\'azione defosforilante di CD45 su ITAM'
    },
    {
      stepNumber: 3,
      stage: 'p-SMAC (Peripheral SMAC)',
      highlightBadge: 'Anello Adesivo Intermedio',
      molecularActors: ['LFA-1 esteso alta affinità', 'ICAM-1', 'Talinina'],
      description: 'Il segnale del TCR induce "inside-out signaling" che distende LFA-1 ad altissima affinità. LFA-1 si ancora al citoscheletro tramite talinina, formando un anello di tenuta meccanica stagno.',
      checkpointOrOutcome: 'Mantenimento prolungato della sinapsi per molte ore (cooperazione e polarizzazione)'
    },
    {
      stepNumber: 4,
      stage: 'c-SMAC (Central SMAC)',
      highlightBadge: 'Nucleo di Segnalazione & Endocitosi',
      molecularActors: ['TCR-CD3', 'Corecettori CD4/CD8', 'CD28', 'PKC-θ'],
      description: 'Al centro della sinapsi convergono i microcluster di TCR-CD3, CD28 e le chinasi attivate. Dopo la segnalazione iniziale, il c-SMAC diventa anche sede di endocitosi e degradazione del TCR.',
      checkpointOrOutcome: 'Spegnimento controllato del segnale per evitare sovrastimolazione tossica'
    }
  ],
  clinicalSummary: 'Il modello di segregazione cinetica dimostra che il legame del TCR attiva la fosforilazione non tramite un cambio conformazionale allosterico, ma tramite l\'esclusione fisica della fosfatasi CD45 dal centro della giunzione stretta.'
};

// =========================================================================
// LEZIONE 13: CENTRO GERMINATIVO & VIE TRASDUZIONALI TCR
// =========================================================================
export const MAP_LEZIONE_13_GERMINAL_CENTER: ConceptMapFlowProps = {
  id: 'map-lez13-germinal-center',
  badge: 'SCHEMA DI PROCESSO · CENTRO GERMINATIVO',
  title: 'La Dinamica del Centro Germinativo: Zona Scura, Zona Chiara e Selezione Clonale',
  subtitle: 'Ipermutazione somatica guidata da AID, test di affinità su FDC e differenziamento in plasmacellule di memoria',
  colorTheme: 'purple',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Ingresso e Zona Scura (Dark Zone)',
      highlightBadge: 'Proliferazione & Mutazione',
      molecularActors: ['Centroblasti', 'CXCR4', 'Enzima AID', 'Bcl-6'],
      description: 'Sotto il controllo del master regulator Bcl-6 e di CXCR4, i centroblasti proliferano intensamente (tempo di raddoppio 6-8h). L\'enzima AID deamina le citosine in uracili nei geni V(D)J (ipermutazione somatica).',
      checkpointOrOutcome: 'Generazione casuale di mutazioni puntiformi nelle anse CDR'
    },
    {
      stepNumber: 2,
      stage: 'Migrazione nella Zona Chiara (Light Zone)',
      highlightBadge: 'Saggio Competitivo',
      molecularActors: ['Centrociti', 'CXCR5', 'FDC', 'Antigeni nativi intatti'],
      description: 'I centroblasti riducono CXCR4 e aumentano CXCR5, migrando nella zona chiara come centrociti. Qui competono per legare l\'antigene nativo esposto sulle cellule dendritiche follicolari (FDC).',
      checkpointOrOutcome: 'Solo i BCR con affinità aumentata riescono a strappare l\'antigene dalle FDC'
    },
    {
      stepNumber: 3,
      stage: 'Presentazione e Rescue da Linfociti Tfh',
      highlightBadge: 'Cooperazione CD40-CD40L',
      molecularActors: ['Linfociti Tfh', 'CD40L', 'IL-21', 'MHC-II'],
      description: 'Il centrocito internalizza l\'antigene, lo processa e lo presenta su MHC-II ai linfociti T helper follicolari (Tfh). Il segnale CD40L e IL-21 fornisce il segnale anti-apoptotico indispensabile di sopravvivenza.',
      checkpointOrOutcome: 'Se il centrocito non riceve aiuto Tfh entro poche ore -> apoptosi massiva'
    },
    {
      stepNumber: 4,
      stage: 'Bivio Effettore Finale',
      highlightBadge: 'Switch Isotipico & Memoria',
      molecularActors: ['Plasmacellule LLPC', 'B di Memoria', 'Blimp-1'],
      description: 'I cloni selezionati ad altissima affinità possono rientrare nella dark zone per ulteriori cicli di mutazione oppure differenziare in plasmacellule a lunga sopravvivenza (midollo osseo) o cellule B di memoria circolanti.',
      checkpointOrOutcome: 'Produzione di anticorpi neutralizzanti ad affinità fino a mille volte superiore'
    }
  ],
  clinicalSummary: 'La reazione del centro germinativo è il bersaglio fisiologico della vaccinazione protettiva. Mutazioni neoplastiche che bloccano il centrocita in questo stadio (es. traslocazione t(14;18) di Bcl-2 nel linfoma follicolare) causano linfomi B ad alta aggressività.'
};

export const MAP_LEZIONE_13_TCR_TRANSDUCTION: ConceptMapFlowProps = {
  id: 'map-lez13-tcr-transduction',
  badge: 'CASCATA BIOCHIMICA · SEGNALSOMA TCR',
  title: 'Le Tre Vie Trascrizionali a Valle del TCR e Target Immunosoppressivi',
  subtitle: 'Dalla scissione di PIP2 via PLC-γ1 all\'attivazione parallela di NFAT, NF-κB e AP-1',
  colorTheme: 'cyan',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Innesco Prossimale (Lck & ZAP-70)',
      highlightBadge: 'Fosforilazione ITAM',
      molecularActors: ['Lck', 'CD3 ζ (10 ITAM)', 'ZAP-70', 'LAT', 'SLP-76'],
      description: 'Lck associata a CD4/CD8 fosforila le tirosine dei motivi ITAM di CD3. ZAP-70 vi si ancora tramite domini tandem SH2 e fosforila la proteina adattatrice di membrana LAT e SLP-76.',
      checkpointOrOutcome: 'Reclutamento e attivazione catalitica della fosfolipasi C-gamma 1 (PLC-γ1)'
    },
    {
      stepNumber: 2,
      stage: 'Via del Calcio / Calcineurina / NFAT',
      highlightBadge: 'Target Ciclosporina A',
      molecularActors: ['IP3', 'Efflusso Ca2+ ER', 'Calmodulina', 'Calcineurina'],
      description: 'L\'IP3 apre i canali del calcio nel reticolo. L\'aumento di Ca2+ attiva la fosfatasi Calcineurina, che defosforila NFAT permettendone la traslocazione nel nucleo per trascrivere IL-2.',
      checkpointOrOutcome: 'Farmacologia: Ciclosporina A e Tacrolimus (FK506) bloccano la calcineurina'
    },
    {
      stepNumber: 3,
      stage: 'Via del DAG / PKC-θ / NF-κB',
      highlightBadge: 'Complesso CBM',
      molecularActors: ['DAG', 'PKC-θ', 'CARMA1/BCL10/MALT1', 'IKK'],
      description: 'Il DAG recluta la PKC-θ alla membrana, che attiva il complesso proteico CBM. Questo attiva il complesso IKK che fosforila IκB, liberando NF-κB per la migrazione nucleare e la sopravvivenza.',
      checkpointOrOutcome: 'Induzione di geni anti-apoptotici (Bcl-xL) e citochine infiammatorie'
    },
    {
      stepNumber: 4,
      stage: 'Via delle MAP-chinasi / AP-1',
      highlightBadge: 'Proliferazione',
      molecularActors: ['RasGRP', 'Ras-GTP', 'Raf / MEK / ERK', 'c-Fos e c-Jun'],
      description: 'Il DAG attiva anche RasGRP, innescando la cascata classica delle MAP-chinasi. ERK fosforila e induce la trascrizione di c-Fos, che dimerizza con c-Jun formando il fattore trascrizionale AP-1.',
      checkpointOrOutcome: 'Cooperazione sinergica obbligata tra NFAT e AP-1 sul promotore di IL-2'
    }
  ],
  clinicalSummary: 'La comprensione di questo snodo molecolare ha rivoluzionato la medicina dei trapianti: gli inibitori della calcineurina (Ciclosporina e Tacrolimus) impediscono la defosforilazione di NFAT, bloccando a monte la sintesi di IL-2 e prevenendo il rigetto d\'organo.'
};

// =========================================================================
// LEZIONE 14: ANTIGENI T-INDIPENDENTI & REGOLAZIONE NEGATIVA (FcγRIIB, CD22)
// =========================================================================
export const MAP_LEZIONE_14_TI_ANTIGENS: ConceptMapFlowProps = {
  id: 'map-lez14-ti-antigens',
  badge: 'SCHEMA COMPARATIVO · ANTIGENI TI-1 VS TI-2',
  title: 'Antigeni T-Indipendenti di Tipo 1 (TI-1) vs Tipo 2 (TI-2) e Razionale Vaccini Coniugati',
  subtitle: 'Come polimeri ripetitivi e mitogeni stimolano i linfociti B in assenza di cooperazione T-Helper',
  colorTheme: 'blue',
  mode: 'comparison-flow',
  comparisonColumns: [
    {
      title: 'Antigeni TI-1 (Mitogeni Policlonali)',
      badge: 'LPS Batterico',
      theme: 'amber',
      points: [
        { label: 'Esempi Molecolari', value: 'Lipopolisaccaride (LPS, endotossina Gram-negativi), DNA CpG batterico.' },
        { label: 'Meccanismo di Innesco', value: 'Doppio segnale contemporaneo: lega sia il BCR che recettori dell\'immunità innata TLR (es. TLR4 o TLR9).' },
        { label: 'Specificità di Risposta', value: 'Ad alte concentrazioni induce attivazione policlonale aspecifica di tutti i cloni B; a basse dosi attiva solo B antigene-specifici.' },
        { label: 'Memoria & Switch', value: 'Genera esclusivamente IgM a bassa affinità, nessuna memoria immunologica.' }
      ],
      outcome: 'Risposta umorale immediata nelle prime 24-48 ore da infezioni batteriche sistemiche gravi.'
    },
    {
      title: 'Antigeni TI-2 (Polimeri Capsulari Ripetitivi)',
      badge: 'Capsule Batteriche (Pneumococco)',
      theme: 'indigo',
      points: [
        { label: 'Esempi Molecolari', value: 'Polisaccaridi capsulari di Streptococcus pneumoniae, Neisseria meningitidis, Haemophilus influenzae.' },
        { label: 'Meccanismo di Innesco', value: 'Massivo cross-linking esteso di decine di molecole BCR adiacenti sulla superficie del linfocita B.' },
        { label: 'Sottopopolazione Coinvolta', value: 'Linfociti B della Zona Marginale della milza (MZ) e Linfociti B-1 peritoneali.' },
        { label: 'Limiti Pediatrici', value: 'Inefficace nei bambini sotto i 2 anni per immaturità anatomica della zona marginale splenica.' }
      ],
      outcome: 'I vaccini puri polisaccaridici non funzionano nei neonati: da qui l\'invenzione salvavita dei vaccini coniugati con carrier proteico (es. anatossina tetanica/difterica).'
    }
  ],
  clinicalSummary: 'La coniugazione covalente del polisaccaride capsulare a un carrier proteico (vaccini coniugati anti-Pneumococco e Meningococco) permette all\'APC e al linfocita B di presentare peptidi proteici ai Tfh, convertendo una risposta TI-2 in una risposta T-dipendente con switch a IgG e memoria a vita nei neonati.'
};

export const MAP_LEZIONE_14_INHIBITORY_CIRCUITS: ConceptMapFlowProps = {
  id: 'map-lez14-inhibitory-circuits',
  badge: 'CASCATA INIBITORIA · FEEDBACK B',
  title: 'I Due Grandi Circuiti di Spegnimento del Segnale B: FcγRIIB (CD32b) e CD22 (Siglec-2)',
  subtitle: 'Motivi ITIM intracellulari, reclutamento di SHIP/SHP-1 e prevenzione dell\'iperattivazione autoimmune',
  colorTheme: 'rose',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Formazione di Immunocomplessi IgG',
      highlightBadge: 'Innesco FcγRIIB',
      molecularActors: ['Antigene solubile', 'IgG secrete', 'BCR'],
      description: 'Quando la concentrazione di IgG nel siero è sufficiente, gli immunocomplessi bivalenti legano contemporaneamente il BCR con la porzione Fab e il recettore FcγRIIB con la porzione Fc.',
      checkpointOrOutcome: 'Co-ligation (avvicinamento fisico) tra BCR e recettore inibitorio'
    },
    {
      stepNumber: 2,
      stage: 'Fosforilazione dell\'ITIM e Reclutamento SHIP',
      highlightBadge: 'Azione SHIP-1',
      molecularActors: ['Motivo ITIM', 'Lyn', 'Fosfatasi SHIP', 'PIP3 → PIP2'],
      description: 'La tirosina del motivo ITIM viene fosforilata da Lyn. L\'inositolo fosfatasi SHIP vi si lega e idrolizza il secondo messaggero PIP3 a PIP2, distruggendo il sito di docking di Btk, Akt e PLC-γ2.',
      checkpointOrOutcome: 'Cessazione immediata dell\'efflusso di calcio e arresto proliferativo'
    },
    {
      stepNumber: 3,
      stage: 'Riconoscimento di Acidi Sialici da CD22',
      highlightBadge: 'Discriminazione Self',
      molecularActors: ['CD22 (Siglec-2)', 'Acidi Sialici α-2,6', 'Fosfatasi SHP-1'],
      description: 'CD22 lega gli acidi sialici α-2,6 ubiquitari sulle cellule dei mammiferi (self). I suoi multipli motivi ITIM reclutano le tirosin-fosfatasi proteiche SHP-1 e SHP-2.',
      checkpointOrOutcome: 'Defosforilazione diretta delle tirosine di Syk, CD79a/b e BLNK'
    },
    {
      stepNumber: 4,
      stage: 'Innalzamento della Soglia di Tolleranza',
      highlightBadge: 'Prevenzione Autoimmunità',
      molecularActors: ['Anergia Clonale', 'Morte per Apoptosi'],
      description: 'L\'azione combinata di SHIP (spegnimento lipidico) e SHP-1 (spegnimento proteico) innalza drasticamente la soglia di attivazione del linfocita B a contatto con il self sano.',
      checkpointOrOutcome: 'Protezione costitutiva contro l\'autoimmunità sistemica (LES)'
    }
  ],
  clinicalSummary: 'Polimorfismi o difetti nell\'espressione di FcγRIIB o CD22 provocano il mancato spegnimento della produzione di anticorpi: il sistema produce IgG in eccesso contro antigeni nucleari, portando a vasculite da immunocomplessi e nefrite lupica.'
};

// =========================================================================
// LEZIONE 15: IL SISTEMA DEL COMPLEMENTO, VIE, REGOLAZIONE E CLINICA
// =========================================================================
export const MAP_LEZIONE_15_COMPLEMENT_3WAYS: ConceptMapFlowProps = {
  id: 'map-lez15-complement-3ways',
  badge: 'MAPPA CONCETTUALE · CASCATA COMPLEMENTARE',
  title: 'La Cascata delle Tre Vie del Complemento: Dalle Convertasi al Complesso di Attacco alla Membrana (MAC)',
  subtitle: 'Innesco divergente, amplificazione centrale su C3 e convergenza finale litica (C5b-9)',
  colorTheme: 'blue',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Tre Vie di Innesco Indipendenti',
      highlightBadge: 'Pattern Recognition',
      molecularActors: ['Classica (C1qrs/Ig)', 'Lectinica (MBL/MASP)', 'Alternativa (C3 tick-over/Properdina)'],
      description: 'Via Classica attivata da immunocomplessi IgG/IgM; Via Lectinica attivata da MBL su residui di mannosio microbici; Via Alternativa attivata da idrolisi spontanea continua di C3 in siero.',
      checkpointOrOutcome: 'Attivazione delle serin-proteasi iniziali (C1s, MASP-2, Fattore D)'
    },
    {
      stepNumber: 2,
      stage: 'Assemblaggio della C3 Convertasi',
      highlightBadge: 'Snodo Centrale',
      molecularActors: ['C4b2b (Classica/Lectinica)', 'C3bBb (Alternativa)', 'Properdina'],
      description: 'Scissione enzimatica di C4 e C2 (Classica) o di C3 e Fattore B (Alternativa). Entrambe le convertasi scindono centinaia di molecole di C3 in C3a (anafilotossina) e C3b (opsonina).',
      checkpointOrOutcome: 'Enorme amplificazione a cascata: deposizione di migliaia di C3b sul patogeno'
    },
    {
      stepNumber: 3,
      stage: 'Formazione della C5 Convertasi',
      highlightBadge: 'Transizione Litica',
      molecularActors: ['C4b2b3b', 'C3bBb3b', 'Scissione di C5'],
      description: 'Il reclutamento di un\'ulteriore molecola di C3b converte l\'enzima in C5 convertasi. Clivaggio di C5 in C5a (la più potente anafilotossina e chemiotattico per neutrofili) e C5b.',
      checkpointOrOutcome: 'C5b instabile avvia l\'assemblaggio non enzimatico del poro litico'
    },
    {
      stepNumber: 4,
      stage: 'Assemblaggio del Complesso Litico MAC (C5b-9)',
      highlightBadge: 'Perforazione Membrana',
      molecularActors: ['C5b-6-7 (ancoraggio lipidico)', 'C8 (penetrazione)', '10-16 C9 (polimerizzazione)'],
      description: 'C5b lega C6 e C7 inserendosi nel doppio strato fosfolipidico. C8 penetra la membrana e recluta da 10 a 16 monomeri di C9 che polimerizzano formando un poro transmembrana idrofilico di 10 nm.',
      checkpointOrOutcome: 'Massivo influsso osmotico di acqua e ioni -> Lisi cellulare del batterio'
    }
  ],
  clinicalSummary: 'I pazienti con deficit congenito delle proteine terminali del MAC (C5, C6, C7, C8 o C9) presentano una suscettibilità selettiva e ricorrente a infezioni fulminanti da Neisseria meningitidis e Neisseria gonorrhoeae, evidenziando il ruolo insostituibile del poro litico contro i batteri Gram-negativi provvisti di capsula sottile.'
};

export const MAP_LEZIONE_15_REGULATION_AND_CLINICS: ConceptMapFlowProps = {
  id: 'map-lez15-regulation-clinics',
  badge: 'BIVIO PATOLOGICO · REGOLAZIONE DEL SELF',
  title: 'Regolazione Biochimica del Complemento e Quadri Patologici da Mancato Controllo',
  subtitle: 'Protezione delle cellule umane e malattie: Angioedema Ereditario (HAE), EPN e aHUS',
  colorTheme: 'rose',
  mode: 'bifurcation',
  branches: {
    condition: 'Meccanismi Molecolari di Freno del Complemento su Cellule Self ed Endotelio',
    testOrSignal: 'Presenza di proteine regolatrici solubili nel plasma e ancorate con ancora GPI sulla membrana',
    outcomes: [
      {
        label: 'Inibitore della C1-Esterasi (C1-INH) Funzionante',
        badge: 'Fisiologico · Blocco C1/Callicreina',
        status: 'success',
        description: 'C1-INH blocca le proteasi C1r, C1s, MASP e controlla la callicreina. Nel Deficit di C1-INH si ha l\'Angioedema Ereditario (HAE): produzione incontrollata di bradichinina con edemi sottomucosi laringei pericolosi per la vita (non risponde a cortisonici o antistaminici).'
      },
      {
        label: 'Proteine di Membrana ad Ancora GPI: DAF (CD55) e Protectina (CD59)',
        badge: 'Protezione Eritrocitaria',
        status: 'warning',
        description: 'DAF dissocia le C3 convertasi; CD59 impedisce la polimerizzazione di C9. Nella mutazione somatica di PIGA nelle cellule staminali si ha l\'Emoglobinuria Parossistica Notturna (EPN): lisi complemento-mediata dei globuli rossi durante la notte (trattata con Eculizumab anti-C5).'
      },
      {
        label: 'Regolatori Solubili dell\'Alternativa: Fattore H e Fattore I',
        badge: 'Protezione Endoteliale Renale',
        status: 'danger',
        description: 'Il Fattore H lega gli acidi sialici self e funge da cofattore per il Fattore I nel degradare C3b in iC3b inattivo. Mutazioni del Fattore H causano la Sindrome Emolitico-Uremica atipica (aHUS), caratterizzata da microangiopatia trombotica renale e insufficienza renale acuta.'
      }
    ]
  },
  clinicalSummary: 'La disponibilità dell\'anticorpo monoclonale umanizzato Eculizumab (anti-C5) ha rivoluzionato il trattamento sia dell\'EPN che dell\'aHUS: bloccando la scissione di C5 impedisce la formazione del MAC salvando gli eritrociti e l\'endotelio renale.'
};

// =========================================================================
// LEZIONE 16: RECETTORI DEL COMPLEMENTO, CLUSTER B & INFEZIONI
// =========================================================================
export const MAP_LEZIONE_16_RECEPTORS_NETWORK: ConceptMapFlowProps = {
  id: 'map-lez16-receptors-network',
  badge: 'MAPPA CONCETTUALE · RECETTORI DEL COMPLEMENTO',
  title: 'La Rete Integrata dei Recettori per i Frammenti di Attivazione del Complemento',
  subtitle: 'Connessione tra opsonine (C3b/iC3b/C3d), fagocitosi, co-stimolo B e reclutamento flogistico GPCR',
  colorTheme: 'indigo',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Recettore CR1 (CD35): Clearance & Decadimento',
      highlightBadge: 'C3b / C4b Alta Affinità',
      molecularActors: ['30 domini CCP', 'Eritrociti', 'Macrofagi', 'Cellule FDC'],
      description: 'Lega C3b e C4b sui microbi e immunocomplessi. Sugli eritrociti fa da "navetta" verso fegato e milza. Ha attività intrinseca di cofattore per il Fattore I e dissocia le convertasi C3.',
      checkpointOrOutcome: 'Rimozione passiva senza rilascio di anafilotossine nel circolo'
    },
    {
      stepNumber: 2,
      stage: 'Recettore CR2 (CD21): Co-recettore del Linfocita B',
      highlightBadge: 'C3d / C3dg Bound',
      molecularActors: ['CR2 (CD21)', 'CD19', 'CD81 (TAPA-1)', 'PI3K'],
      description: 'Riconosce i frammenti terminali C3d/C3dg legati covalentemente all\'antigene. Insieme a CD19 e CD81 abbassa la soglia di attivazione del BCR di 100-1000 volte reclutando PI3K.',
      checkpointOrOutcome: 'Attivazione B anche a concentrazioni infinitesimali di antigene'
    },
    {
      stepNumber: 3,
      stage: 'Integrine β2: CR3 (Mac-1) & CR4 (p150,95)',
      highlightBadge: 'iC3b Opsonofagocitosi',
      molecularActors: ['CD11b/CD18 (CR3)', 'CD11c/CD18 (CR4)', 'ICAM-1', 'Neutrofili'],
      description: 'Eterodimeri con catena β2 comune (CD18). Riconoscono selettivamente iC3b generato dal Fattore I su batteri e cellule apoptotiche, guidando la fagocitosi e la diapedesi.',
      checkpointOrOutcome: 'Nel deficit di CD18 (LAD-1): mancata fagocitosi e leucocitosi paradossa'
    },
    {
      stepNumber: 4,
      stage: 'Recettori Anafilotossine: C3aR & C5aR (CD88)',
      highlightBadge: 'GPCR Gαi / Infiammazione',
      molecularActors: ['C5a > C3a > C4a', 'Mastociti', 'Basofili', 'Neutrofili'],
      description: 'Recettori a 7 domini transmembrana accoppiati a proteine G. C5aR guida la chemiotassi dei neutrofili al sito di infezione e la degranulazione di istamina dai mastociti.',
      checkpointOrOutcome: 'Potente vasodilatazione, stravaso ed extravasazione leucocitaria'
    }
  ],
  clinicalSummary: 'La sinergia tra recettori complementari garantisce sia la rapida sterilizzazione dei tessuti infetti tramite opsonizzazione e chemochine (C5a), sia il mantenimento della tolleranza periferica attraverso l\'eliminazione non infiammatoria dei corpi apoptotici mediata da iC3b su CR3/CR4.'
};

export const MAP_LEZIONE_16_MICROBIAL_EVASION: ConceptMapFlowProps = {
  id: 'map-lez16-microbial-evasion',
  badge: 'BIVIO STRATEGICO · EVASIONE MICROBICA',
  title: 'Strategie Molecolari di Hijacking ed Evasione del Complemento nei Patogeni',
  subtitle: 'Meccanismi biochimici impiegati da batteri e virus per sfuggire all\'opsonizzazione e alla lisi da MAC',
  colorTheme: 'purple',
  mode: 'bifurcation',
  branches: {
    condition: 'Strategia Patogenetica Adottata dal Microrganismo Invasore',
    testOrSignal: 'Bersaglio molecolare della cascata complementare neutralizzato dal patogeno',
    outcomes: [
      {
        label: 'Inibizione e Cleavage delle Convertasi (es. Staphylococcus aureus)',
        badge: 'Proteine SCIN & Efb',
        status: 'danger',
        description: 'S. aureus secerne SCIN (Staphylococcal Complement Inhibitor), che blocca le convertasi C3 della via classica e alternativa, ed Efb, che lega C3 inibendone il deposito. Secerne inoltre CHIPS, che blocca selettivamente C5aR e FPR1 sui neutrofili impedendone la chemiotassi.'
      },
      {
        label: 'Reclutamento Forzato dei Regolatori del Self (es. Borrelia burgdorferi & Streptococchi)',
        badge: 'Mimicry del Fattore H',
        status: 'warning',
        description: 'Borrelia esprime le lipoproteine CspA/CRASP che legano il Fattore H plasmatico dell\'ospite sulla propria superficie: il patogeno "si traveste da cellula self", inducendo il Fattore I a degradare sul nascere ogni molecola di C3b depositata.'
      },
      {
        label: 'Resistenza Fisica al Complesso Litico MAC (C5b-9)',
        badge: 'Spessore Peptidoglicano & Capsula',
        status: 'success',
        description: 'I batteri Gram-positivi (es. Streptococcus pneumoniae) possiedono una spessa parete di peptidoglicano (30-80 nm) che impedisce fisicamente a C5b-9 di toccare la membrana cellulare: contro di essi il killing dipende esclusivamente dall\'opsonofagocitosi mediata da C3b/iC3b.'
      }
    ]
  },
  clinicalSummary: 'La conoscenza dei fattori di evasione come SCIN e CHIPS ha permesso lo sviluppo di nuovi composti farmacologici sperimentali ispirati alle strategie batteriche per spegnere l\'iperattivazione del complemento in sepsi, rigetto di trapianto e sindromi da ischemia-riperfusione.'
};

// =========================================================================
// LEZIONE 17: FUNZIONI EFFETTRICI DELLE Ig, RECETTORI Fc & SOTTOCLASSI
// =========================================================================
export const MAP_LEZIONE_17_FC_RECEPTORS_CASCADE: ConceptMapFlowProps = {
  id: 'map-lez17-fc-receptors-cascade',
  badge: 'MAPPA CONCETTUALE · ATTIVAZIONE RECETTORI Fc',
  title: 'La Cascata di Riconoscimento e Trasduzione dei Recettori Fcγ (CD64, CD32, CD16)',
  subtitle: 'Dal legame dell\'immunocomplesso all\'attivazione ITAM, opsonofagocitosi e citotossicità ADCC',
  colorTheme: 'blue',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Formazione dell\'Immunocomplesso Multivalente',
      highlightBadge: 'Cross-Linking Obbligato',
      molecularActors: ['Antigene microbico', 'IgG1 / IgG3', 'Frammento Fc CH2-CH3'],
      description: 'L\'anticorpo lega l\'antigene con i frammenti Fab. I monomeri liberi circolano senza attivare i recettori; solo l\'aggregazione in complessi immuni multivalenti consente il clustering dei recettori Fc.',
      checkpointOrOutcome: 'Soglia biofisica: clustering di almeno due recettori Fc contigui'
    },
    {
      stepNumber: 2,
      stage: 'Ingaggio di FcγRI (CD64): Opsonofagocitosi',
      highlightBadge: 'Altissima Affinità (Ka 10⁹ M⁻¹)',
      molecularActors: ['FcγRI (CD64)', 'Dimero γ-γ (ITAM)', 'Chinasi Lyn/Src', 'Syk'],
      description: 'Espresso su macrofagi e monociti. La subunità associata γ-γ contiene motivi ITAM fosforilati da chinasi Src, con reclutamento di Syk. Aumenta la fagocitosi di 50-100 volte.',
      checkpointOrOutcome: 'Attivazione del burst ossidativo NADPH ossidasi (NOX2) e killing'
    },
    {
      stepNumber: 3,
      stage: 'Ingaggio di FcγRIIIA (CD16a): Citotossicità ADCC',
      highlightBadge: 'Cellule Natural Killer',
      molecularActors: ['CD16a', 'Catena ζ o γ', 'Perforina', 'Granzima B'],
      description: 'Sulle cellule NK, il cross-linking di CD16a tramite IgG opsonizzanti su una cellula infetta o tumorale innesca la degranulazione selettiva polarizzata di perforina e granzimi.',
      checkpointOrOutcome: 'Morte apoptotica per ADCC della cellula bersaglio senza costimolo'
    },
    {
      stepNumber: 4,
      stage: 'Recettore Neonatale FcRn: Riciclo ed Emivita (21 gg)',
      highlightBadge: 'pH-Dipendente (Endosoma)',
      molecularActors: ['FcRn (eterodimero MHC-like)', 'β2-microglobulina', 'pH 6.0 vs 7.4'],
      description: 'Negli endosomi a pH acido (6.0), FcRn lega il frammento Fc delle IgG internalizzate per pinocitosi, sottraendole alla degradazione lisosomiale e riciclandole in membrana a pH 7.4.',
      checkpointOrOutcome: 'Emivita plasmatica estesa a 3 settimane e passaggio placentare materno-fetale'
    }
  ],
  clinicalSummary: 'La comprensione del legame FcγRIIIA ha permesso l\'ingegnerizzazione di anticorpi monoclonali afucosilati (privi del fucosio nel dominio CH2), che presentano un\'affinità fino a 50 volte superiore per CD16a, scatenando una potente ADCC antitumorale clinicamente sfruttata in oncoematologia.'
};

export const MAP_LEZIONE_17_ISOTYPE_EFFECTOR_COMPARISON: ConceptMapFlowProps = {
  id: 'map-lez17-isotype-effector-comparison',
  badge: 'SCHEMA COMPARATIVO · ISOTIPI & PROFILI EFFETTORI',
  title: 'Dicotomie Funzionali tra le Classi e Sottoclassi di Immunoglobuline',
  subtitle: 'Confronto analitico tra IgG1/3, IgG4, IgA secretoria dimera e IgE anafilattica',
  colorTheme: 'cyan',
  mode: 'comparison-flow',
  comparisonColumns: [
    {
      title: 'IgG1 & IgG3 (Effettori Maggiori)',
      colorAccent: 'blue',
      items: [
        'Regione cerniera flessibile ed estesa (particolarmente lunga in IgG3 con 62 aminoacidi)',
        'Efficienza massima nell\'attivazione della via classica del complemento (legame C1q)',
        'Altissima affinità per FcγRI (CD64) e FcγRIIIA (CD16a), leader nell\'opsonofagocitosi e ADCC',
        'Emivita prolungata (~21 giorni per IgG1, 7 giorni per IgG3 per proteolisi cerniera)'
      ]
    },
    {
      title: 'IgG4 (Isotipo Inibitorio & Scambio Fab)',
      colorAccent: 'amber',
      items: [
        'Incapace di attivare il complemento (non lega C1q a causa della conformazione CH2)',
        'Non induce burst respiratorio né degranulazione nei fagociti',
        'Fenomeno del Fab-Arm Exchange in vivo: scambia una catena pesante/leggera diventando bispecifico funzionale monovalente',
        'Coinvolto nella malattia sistemica fibro-infiammatoria IgG4-correlata (IgG4-RD)'
      ]
    },
    {
      title: 'sIgA Dimera (Immunità Mucosale)',
      colorAccent: 'emerald',
      items: [
        'Dimero collegato dalla catena J (Joining chain), secreto dalle plasmacellule della lamina propria',
        'Trasportato attraverso l\'epitelio mediante il recettore polimerico pIgR',
        'Possiede il Componente Secretorio (SC) che ne previene la degradazione da parte delle proteasi luminali',
        'Neutralizzazione immune pura (esclusione immune) senza generare infiammazione complementare lesiva'
      ]
    },
    {
      title: 'IgE (Allergia & Difesa Antielmintica)',
      colorAccent: 'rose',
      items: [
        'Concentrazione sierica basale bassissima (nanogrammi/mL)',
        'Lega con affinità irreversibile (Ka ~ 10¹⁰ M⁻¹) il recettore FcεRI su mastociti e basofili',
        'Al cross-linking allergenico rilascia istamina, eicosanoidi (LTC4, PGD2) e PAF in pochi secondi',
        'Recluta eosinofili contro elminti pluricellulari inducendo il rilascio di MBP (Major Basic Protein)'
      ]
    }
  ],
  clinicalSummary: 'La variabilità di classe riflette una specializzazione topografica e funzionale impeccabile: mentre le IgG difendono il compartimento sistemico e i tessuti profondi, le IgA proteggono le mucose senza danno infiammatorio e le IgE vigilano sulle superfici corporee contro i parassiti pluricellulari.'
};

// =========================================================================
// LEZIONE 18: TERAPIE MONOCLONALI, ADC & CAR-T
// =========================================================================
export const MAP_LEZIONE_18_MAB_EVOLUTION: ConceptMapFlowProps = {
  id: 'map-lez18-mab-evolution',
  badge: 'MAPPA CONCETTUALE · BIOTECNOLOGIE IMMUNOLOGICHE',
  title: 'Evoluzione Molecolare degli Anticorpi Monoclonali Terapeutici',
  subtitle: 'Dalla tecnologia pionieristica degli ibridomi murini ai farmaci completamente umani e nomenclatura',
  colorTheme: 'indigo',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Anticorpi Murini (-omab)',
      highlightBadge: '100% Topo · Ibridoma',
      molecularActors: ['Köhler & Milstein', 'PEG', 'Terreno HAT', 'HGPRT- Mieloma'],
      description: 'Generati fondendo plasmacellule spleniche di topo immunizzato con mieloma tumorale in terreno HAT. Somministrati nell\'uomo scatenano la risposta neutralizzante HAMA e durano solo 24-48 ore.',
      checkpointOrOutcome: 'Grave immunogenicità e rapida inattivazione plasmatica'
    },
    {
      stepNumber: 2,
      stage: 'Anticorpi Chimerici (-ximab)',
      highlightBadge: '~65% Umano · Rituximab',
      molecularActors: ['Domini Vh/Vl murini', 'Domini costanti Ch/Cl umani', 'IgG1 human Fc'],
      description: 'Le regioni variabili leganti l\'antigene restano di topo, ma l\'intero frammento Fc e i domini costanti Fab sono umani. Dimezzata la risposta HACA, emivita estesa a 10-14 giorni.',
      checkpointOrOutcome: 'Efficace reclutamento di FcγRIII ed eliminazione di cellule B (es. Rituximab anti-CD20)'
    },
    {
      stepNumber: 3,
      stage: 'Anticorpi Umanizzati (-zumab)',
      highlightBadge: '>90% Umano · Trastuzumab',
      molecularActors: ['CDR Grafting', 'Framework umano', 'Trastuzumab', 'Bevacizumab'],
      description: 'Ingegnerizzati mediante CDR-grafting: solo le anse ipervariabili di legame (CDR1, 2, 3) sono trapiantate da anticorpi murini su un\'impalcatura anticorpale totalmente umana. Emivita ~21 giorni.',
      checkpointOrOutcome: 'Minima immunogenicità e altissima tollerabilità clinica'
    },
    {
      stepNumber: 4,
      stage: 'Anticorpi Completamente Umani (-umab)',
      highlightBadge: '100% Umano · Nivolumab',
      molecularActors: ['Topi transgenici (Xenomouse)', 'Phage Display', 'Loci Ig umani knock-in'],
      description: 'Prodotti in ceppi murini in cui i loci genici delle immunoglobuline sono stati sostituiti con i loci umani completi, oppure selezionati mediante librerie combinatorie su batteriofagi.',
      checkpointOrOutcome: 'Zero immunogenicità e perfetta interazione con FcRn ed effettori umani'
    }
  ],
  clinicalSummary: 'La transizione da molecole murine a completamente umane ha consentito la somministrazione cronica di immunoterapie nei tumori e nelle malattie autoimmuni senza il rischio di rigetto da HAMA, aprendo la strada a farmaci blockbuster come Panitumumab, Nivolumab e Pembrolizumab.'
};

export const MAP_LEZIONE_18_CAR_T_AND_ADC: ConceptMapFlowProps = {
  id: 'map-lez18-car-t-adc',
  badge: 'BIVIO TERAPEUTICO · IMMUNOTERAPIA AVANZATA',
  title: 'Costrutti Terapeutici di Nuova Generazione: ADC vs CAR-T Cells',
  subtitle: 'Veicolazione selettiva di chemioterapici ad alta potenza vs riprogrammazione genica cellulare',
  colorTheme: 'rose',
  mode: 'bifurcation',
  branches: {
    condition: 'Strategia di Uccisione del Bersaglio Tumorale',
    testOrSignal: 'Vettore farmacologico coniugato chimico vs Linfocita T modificato geneticamente con recettore chimerico',
    outcomes: [
      {
        label: 'Antibody-Drug Conjugates (ADC, es. Trastuzumab-Emtansine T-DM1)',
        badge: 'Cavallo di Troia Farmacologico',
        status: 'warning',
        description: 'L\'anticorpo monoclonale riconosce il recettore tumorale (es. HER2). È legato covalentemente tramite linker stabile a un veleno cellulare potentissimo (es. inibitore dei microtubuli DM1). Dopo endocitosi e degradazione lisosomiale, il payload viene rilasciato uccidendo selettivamente la cellula neoplastica senza tossicità sistemica libera.'
      },
      {
        label: 'Cellule CAR-T (Chimeric Antigen Receptor T Cells, es. Tisagenlecleucel anti-CD19)',
        badge: 'Farmaco Vivente Replicante',
        status: 'danger',
        description: 'Linfociti T autologhi prelevati dal paziente e trasdotti con vettore virale: esprimono un recettore chimerico composto da un dominio scFv anticorpale extracellulare (indipendente da MHC) fuso a domini costimolatori intracellulari (CD28 o 4-1BB) e alla catena di trasduzione CD3ζ. Riconoscono e distruggono leucemie e linfomi B refrattari.'
      },
      {
        label: 'Anticorpi Bispecifici BiTE (Bispecific T-cell Engager, es. Blinatumomab)',
        badge: 'Sinapsi Artificiale di Prossimità',
        status: 'success',
        description: 'Costrutti privi di frammento Fc composti da due domini scFv fusi in tandem: uno lega CD19 sulla cellula tumorale e l\'altro lega CD3ε sul linfocita T citotossico. Forza la formazione di una sinapsi litica diretta tra qualsiasi CTL bystander e la cellula maligna, inducendo degranulazione senza restrizione MHC.'
      }
    ]
  },
  clinicalSummary: 'La terapia con CAR-T e BiTE può scatenare tossicità immuno-mediate sistemiche severe, in primis la Sindrome da Rilascio di Citochine (CRS) mediata da picchi massivi di IL-6 e la neurotossicità ICANS, prontamente trattate con Tocilizumab (anticorpo monoclonale anti-IL-6R) e corticosteroidi.'
};

// =========================================================================
// LEZIONE 19: DIFFERENZIAMENTO DEI LINFOCITI T HELPER (Th1, Th2, Th17, Treg)
// =========================================================================
export const MAP_LEZIONE_19_TH_POLARIZATION: ConceptMapFlowProps = {
  id: 'map-lez19-th-polarization',
  badge: 'SCHEMA COMPARATIVO · DIFFERENZIAMENTO CD4+',
  title: 'I Quattro Destini Polarizzanti del Linfocita T Helper Naïve',
  subtitle: 'Terzo segnale citochinico, fattori di trascrizione master regulator e profili effettori',
  colorTheme: 'purple',
  mode: 'comparison-flow',
  comparisonColumns: [
    {
      title: 'Linfociti Th1 (Immunità Tipo 1)',
      colorAccent: 'blue',
      items: [
        'Citochine Induttrici: IL-12 (dalle DC) e IFN-γ (da cellule NK)',
        'Trasduttore & Master Regulator: STAT4 e T-bet (induce se stesso con loop positivo)',
        'Citochine Effettrici: IFN-γ, TNF-α, IL-2',
        'Bersaglio Effettore: Macrofagi M1 (induzione iNOS/NO) e stimolo ai CTL CD8+',
        'Protezione / Patologia: Batteri e virus intracellulari; se eccessivo autoimmunità d\'organo e granulomi'
      ]
    },
    {
      title: 'Linfociti Th2 (Immunità Tipo 2)',
      colorAccent: 'emerald',
      items: [
        'Citochine Induttrici: IL-4 e allarmine epiteliali (TSLP, IL-33, IL-25)',
        'Trasduttore & Master Regulator: STAT6 e GATA-3',
        'Citochine Effettrici: IL-4 (switch IgE), IL-5 (eosinofili), IL-13 (muco e peristalsi weep & sweep)',
        'Bersaglio Effettore: Eosinofili, mastociti, basofili e macrofagi M2',
        'Protezione / Patologia: Elminti pluricellulari; se disregolato atopia, asma allergica e anafilassi'
      ]
    },
    {
      title: 'Linfociti Th17 (Immunità Tipo 3)',
      colorAccent: 'amber',
      items: [
        'Citochine Induttrici: IL-6 + TGF-β (innesco) e IL-23 (stabilizzazione e sopravvivenza clonale)',
        'Trasduttore & Master Regulator: STAT3 e RORγt',
        'Citochine Effettrici: IL-17A, IL-17F, IL-22',
        'Bersaglio Effettore: Barriere epiteliali, induzione peptidi antimicrobici (defensine) e reclutamento neutrofili (G-CSF, CXCL8)',
        'Protezione / Patologia: Batteri extracellulari e miceti (Candida); coinvolto in psoriasi, IBD e sclerosi multipla'
      ]
    },
    {
      title: 'Linfociti Treg (Immunosoppressione)',
      colorAccent: 'rose',
      items: [
        'Citochine Induttrici: TGF-β e IL-2 ad alta affinità (in assenza di citochine pro-infiammatorie)',
        'Trasduttore & Master Regulator: STAT5 e FoxP3',
        'Molecole Effettrici: IL-10, TGF-β, IL-35, CTLA-4 ad elevata densità e sequestro di IL-2 (CD25 high)',
        'Funzione Fisiologica: Mantenimento della tolleranza periferica e spegnimento flogistico',
        'Correlazione Clinica: Nella mutazione genica di FoxP3 si ha la sindrome IPEX fatale'
      ]
    }
  ],
  clinicalSummary: 'I profili Th operano una rigida cross-inibizione reciproca: l\'IFN-γ del Th1 inibisce direttamente la proliferazione Th2 e Th17; l\'IL-4 e l\'IL-10 del Th2 bloccano lo sviluppo dei Th1. Questa polarizzazione determina l\'esito di infezioni gravi come la lebbra (forma tubercoloide Th1 vs forma lepromatosa Th2).'
};

export const MAP_LEZIONE_19_M1_VS_M2_MACROPHAGES: ConceptMapFlowProps = {
  id: 'map-lez19-m1-vs-m2',
  badge: 'BIVIO CELLULARE · POLARIZZAZIONE DEI MACROFAGI',
  title: 'Attivazione Classica (M1) vs Attivazione Alternativa (M2) dei Macrofagi',
  subtitle: 'Bivio metabolico dell\'arginina: asse citotossico iNOS vs asse riparativo Arginasi-1',
  colorTheme: 'indigo',
  mode: 'bifurcation',
  branches: {
    condition: 'Segnale Microambientale Ricevuto dal Monocita / Macrofago Tissutale',
    testOrSignal: 'Prevalenza di citochine Th1 (IFN-γ + endotossine LPS) vs citochine Th2 (IL-4 / IL-13)',
    outcomes: [
      {
        label: 'Macrofago M1 (Attivazione Classica Pro-Infiammatoria)',
        badge: 'Asse iNOS / Ossido Nitrico',
        status: 'danger',
        description: 'Indotto da IFN-γ e legame CD40-CD40L. Esprime l\'enzima iNOS (NOS2) che trasforma la L-arginina in Ossido Nitrico (NO) e citrullina. Con i radicali superossido genera perossinitrito, compiendo una potente azione microbicida e antitumorale con secrezione di IL-12, TNF-α e IL-1β.'
      },
      {
        label: 'Macrofago M2 (Attivazione Alternativa Riparativa e Antinfiammatoria)',
        badge: 'Asse Arginasi-1 / Prolina & Poliamine',
        status: 'success',
        description: 'Indotto da IL-4 e IL-13 tramite STAT6. Esprime l\'enzima Arginasi-1, che converte l\'arginina in ornitina, precursore di prolina e poliamine essenziali per la sintesi del collagene, la guarigione delle ferite, l\'angiogenesi e la fibrosi tissutale. Secerne citochine immunosoppressive IL-10 e TGF-β.'
      },
      {
        label: 'Dirottamento Tumorale dei Macrofagi (TAM)',
        badge: 'Immunoevasione Oncologica',
        status: 'warning',
        description: 'Nel microambiente tumorale i fattori stromali (TGF-β, IL-10, M-CSF, ipossia) convertono i macrofagi infiltranti in fenotipo M2-like (TAM). Questi bloccano i linfociti citotossici ed erogano VEGF favorendo la neoangiogenesi e la disseminazione metastatica.'
      }
    ]
  },
  clinicalSummary: 'Il bilancio metabolico M1/M2 è un cardine diagnostico e terapeutico: terapie volte a "ripolarizzare" i macrofagi associati al tumore da M2 immunosoppressivi a M1 litici costituiscono uno dei campi più promettenti dell\'oncologia traslazionale.'
};

// =========================================================================
// LEZIONE 20: LINFOCITI T CITOTOSSICI (CTL), KILLING & PATOLOGIE (HLH/ALPS)
// =========================================================================
export const MAP_LEZIONE_20_CTL_KILLING_CASCADE: ConceptMapFlowProps = {
  id: 'map-lez20-ctl-killing-cascade',
  badge: 'MAPPA CONCETTUALE · MECCANISMO DEL KILLING CITOTOSSICO',
  title: 'La Sequenza Molecolare di Uccisione Bersaglio-Specifica del CTL CD8+',
  subtitle: 'Dalla scansione della sinapsi litica all\'esocitosi dei granuli e induzione della duplice via apoptotica',
  colorTheme: 'rose',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Riconoscimento Specifico & Sinapsi Litica',
      highlightBadge: 'MHC-I / TCR + LFA-1',
      molecularActors: ['TCR/CD3', 'CD8αβ', 'LFA-1 attivata da chemochine', 'ICAM-1'],
      description: 'Il CTL riconosce il peptide virale o tumorale di 8-11 aminoacidi esposto su MHC di classe I. L\'alta affinità di LFA-1 sigilla una sinapsi immunologica ermetica ad anello protetta da leakage citotossico.',
      checkpointOrOutcome: 'Segnale calcio intracellulare e riorganizzazione citoscheletrica'
    },
    {
      stepNumber: 2,
      stage: 'Polarizzazione dell\'Apparato Secretorio',
      highlightBadge: 'Rotazione MTOC',
      molecularActors: ['MTOC', 'Microtubuli', 'Granuli litici preformati', 'Apparato di Golgi'],
      description: 'Il centro organizzatore dei microtubuli (MTOC) e l\'apparato di Golgi compiono una rapida traslazione fisica verso la giunzione intercellulare, ammassando i granuli tossici a ridosso della membrana bersaglio.',
      checkpointOrOutcome: 'Uccisione strettamente direzionata: le cellule adiacenti sane non vengono danneggiate'
    },
    {
      stepNumber: 3,
      stage: 'Docking & Esocitosi dei Granuli Mediata da SNARE',
      highlightBadge: 'Machinery Ca²⁺-Dipendente',
      molecularActors: ['Rab27a', 'Munc13-4', 'Sintassina-11 (SNARE)', 'Perforina (PRF1)'],
      description: 'Le vescicole compiono il priming e la fusione di membrana mediata da Rab27a, Munc13-4 e Sintassina-11, riversando nel vallo sinaptico monomeri di perforina e proteasi a serina (granzimi).',
      checkpointOrOutcome: 'Mutazioni di questi geni causano la Sindrome Emofagocitica Familiare (HLH)'
    },
    {
      stepNumber: 4,
      stage: 'Innesco Apoptotico da Granzima B',
      highlightBadge: 'Duplice Via Letale',
      molecularActors: ['Perforina (poro transmembrana)', 'Granzima B', 'Procaspasi-3', 'Bid -> tBid'],
      description: 'La perforina polimerizza creando pori. Il Granzima B penetra e scatena: 1) clivaggio diretto della procaspasi-3 in caspasi-3 effettrice; 2) taglio di Bid in tBid con collasso mitocondriale e rilascio di Citocromo c.',
      checkpointOrOutcome: 'Condensazione nucleare, frammentazione del DNA (CAD) e apoptosi selettiva'
    }
  ],
  clinicalSummary: 'I CTL dispongono anche della via non secretoria mediata da FasL che interagisce con Fas (CD95) sulla cellula bersaglio, attivando la caspasi-8. Questa seconda via è fondamentale per l\'AICD (Activation-Induced Cell Death) che spegne le risposte clonali terminate.'
};

export const MAP_LEZIONE_20_HLH_AND_AICD_PATHOLOGY: ConceptMapFlowProps = {
  id: 'map-lez20-hlh-alps',
  badge: 'BIVIO IMMUNOPATOLOGICO · DIFETTI CITOTOSSICI',
  title: 'Patologie Genetiche della Citotossicità: Sindrome Emofagocitica (HLH) vs ALPS',
  subtitle: 'Divergenza tra mancato killing con tempesta citochinica e mancato spegnimento omeostatico',
  colorTheme: 'purple',
  mode: 'bifurcation',
  branches: {
    condition: 'Deficit Genetico Molecolare nel Linfocita T Citotossico',
    testOrSignal: 'Difetto nella macchina esocitica dei granuli litici vs mutazione dei recettori di morte Fas/FasL',
    outcomes: [
      {
        label: 'Sindrome Emofagocitica Linfoistiocitaria Familiare (FHL / HLH)',
        badge: 'Mutazione Perforina / Munc13-4 / Rab27a',
        status: 'danger',
        description: 'Il CTL riconosce la cellula infetta (es. da EBV) ma non riesce a lisarla. Rimane a contatto prolungato e secerne quantità tossiche incontrollate di IFN-γ. L\'iperattivazione macrofagica scatenata induce emofagocitosi nel midollo con pancitopenia fulminante, febbre continua, iperferritinemia estrema e mortalità altissima senza trapianto midollare o anti-IFN-γ (Emapalumab).'
      },
      {
        label: 'Sindrome Linfoproliferativa Autoimmune (ALPS / Canale-Smith)',
        badge: 'Mutazione FAS / FASL / Caspasi-10',
        status: 'warning',
        description: 'La via secretoria di perforine e granzimi è integra (il killing antivirale è normale). È deficitaria l\'apoptosi indotta da attivazione (AICD): al termine dell\'infezione i cloni T attivati non muoiono, accumulandosi negli organi linfoidi con linfoadenopatia massiva cronica, splenomegalia e comparsa di una popolazione anomala di linfociti T a doppio negativi (TCRαβ+ CD4- CD8-).'
      },
      {
        label: 'Sindrome di Griscelli Tipo 2 (Albinismo Parziale & HLH)',
        badge: 'Mutazione Rab27a (GTPasi)',
        status: 'danger',
        description: 'Rab27a governa il traffico vescicolare sia dei granuli citotossici dei linfociti T/NK sia dei melanosomi nei melanociti cutanei. I pazienti presentano albinismo parziale oculo-cutaneo associato al quadro letale di emofagocitosi macrofagica HLH.'
      }
    ]
  },
  clinicalSummary: 'Questa dicotomia illustra mirabilmente il dualismo biologico del CTL: l\'efficienza letale dei granuli è indispensabile per eradicare i patogeni intracellulari senza esaurimento infiammatorio, mentre la via recettoriale Fas/FasL è la sentinella indispensabile per l\'omeostasi e la prevenzione dell\'autoimmunità sistemica.'
};

// =========================================================================
// LEZIONE 21: CELLULE NATURAL KILLER (NK), RECETTORI KIR & MISSING SELF
// =========================================================================
export const MAP_LEZIONE_21_NK_BALANCE_AND_MISSING_SELF: ConceptMapFlowProps = {
  id: 'map-lez21-nk-balance',
  badge: 'BIVIO DECISIONALE · MODELLO MISSING SELF',
  title: 'La Logica di Attivazione delle Cellule NK: Equilibrio tra Segnali ITIM e ITAM',
  subtitle: 'Integrazione biochimica tra recettori inibitori per MHC-I e recettori attivatori per molecole di stress',
  colorTheme: 'blue',
  mode: 'bifurcation',
  branches: {
    condition: 'Stato di Espressione Molecolare della Cellula Bersaglio Incontrata dalla Cellula NK',
    testOrSignal: 'Ingaggio recettori inibitori (KIR, CD94/NKG2A su HLA classici/E) vs recettori attivatori (NKG2D, NCR, CD16)',
    outcomes: [
      {
        label: 'Cellula Sana dell\'Ospite: Prevalenza del Segnale Inibitorio',
        badge: 'Espressione Normale di HLA-I',
        status: 'success',
        description: 'HLA-A, B, C e HLA-E legano i recettori inibitori KIR e CD94/NKG2A. I motivi citoplasmatici ITIM fosforilati reclutano le tirosin-fosfatasi SHP-1 e SHP-2, che defosforilano le chinasi a valle dei recettori attivatori: la cellula NK viene inibita e il bersaglio sano risparmiato.'
      },
      {
        label: 'Cellula Tumorale o Infetta: "Missing Self" (Perdita di HLA-I)',
        badge: 'Downregulation Evasiva di MHC-I',
        status: 'danger',
        description: 'Molti virus (CMV, HSV) e tumori spengono MHC-I per sfuggire ai CTL CD8+. Venendo a mancare il freno dei recettori ITIM, anche il debole segnale tonico dei recettori attivatori supera la soglia, inducendo lisi citotossica immediata della cellula priva di MHC-I.'
      },
      {
        label: 'Cellula con "Induced Self": Iperespressione di Ligandi di Stress',
        badge: 'Ingaggio di NKG2D / DAP10',
        status: 'warning',
        description: 'Danno al DNA, trasformazione neoplastica o infezioni inducono la comparsa massiva di MICA, MICB e ULBP1-4. L\'ingaggio di NKG2D e del suo adattatore DAP10 (via PI3K) sovrasta anche i segnali inibitori residui, scatenando il rilascio polarizzato di perforine e secrezione di IFN-γ.'
      }
    ]
  },
  clinicalSummary: 'La cooperazione tra cellule NK e macrofagi rappresenta un asse innato primario: i macrofagi fagocitano e rilasciano IL-12 e IL-15 stimolando le NK a produrre elevate quantità di IFN-γ, il quale retro-attiva i macrofagi al killing M1 prima ancora dello sviluppo dell\'immunità adattativa Th1.'
};

export const MAP_LEZIONE_21_KIR_GENETICS_AND_PREECLAMPSIA: ConceptMapFlowProps = {
  id: 'map-lez21-kir-genetics',
  badge: 'MAPPA CONCETTUALE · GENETICA KIR & CLINICA',
  title: 'Genetica del Locus KIR sul Cromosoma 19q13.4 e Ruolo nella Gravidanza',
  subtitle: 'Aplotipi A e B, diversità poligenica e rimodellamento delle arterie spirali uterine mediato da uNK',
  colorTheme: 'rose',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Locus Poligenico e Polimorfo KIR',
      highlightBadge: 'Cromosoma 19q13.4',
      molecularActors: ['Locus LRC', 'KIR lunghi (2DL/3DL con ITIM)', 'KIR corti (2DS/3DS con ITAM)'],
      description: 'Il repertorio KIR è altamente variabile nella popolazione umana per numero di geni e alleli. Si suddivide in due grandi famiglie aplotipiche: Aplotipo A (prevalentemente inibitorio) e Aplotipo B (ricco di recettori attivatori aggiuntivi).',
      checkpointOrOutcome: 'Elevata variabilità individuale nel riconoscimento delle molecole HLA-C'
    },
    {
      stepNumber: 2,
      stage: 'Cellule NK Uterine (uNK / dNK) alla Decidua',
      highlightBadge: 'Fenotipo CD56 bright CD16-',
      molecularActors: ['Trofoblasto extravilloso', 'HLA-C fetale', 'HLA-G', 'HLA-E'],
      description: 'Alla giunzione feto-materna, le uNK non esercitano citotossicità litica, bensì secernono citochine angiogeniche (VEGF, Angiopoietina-2, CXCL8) necessarie per guidare l\'invasione trofoblastica.',
      checkpointOrOutcome: 'Invasione controllata del sinciziotrofoblasto nella tonaca media uterina'
    },
    {
      stepNumber: 3,
      stage: 'Rimodellamento delle Arterie Spirali Uterine',
      highlightBadge: 'Vasi a Bassa Resistenza',
      molecularActors: ['uNK attivate', 'Perfusione placentare', 'Flusso ematico fetale'],
      description: 'Le uNK demoliscono la componente muscolare liscia delle arterie spirali materne, trasformandole da vasi stretti ad alta resistenza in canali ampi e flessibili ad alta capacità e basso regime pressorio.',
      checkpointOrOutcome: 'Fornitura ematica e nutritiva massimale per la crescita del feto'
    },
    {
      stepNumber: 4,
      stage: 'Mismatch KIR Materno / HLA Fetale: Preeclampsia',
      highlightBadge: 'Rischio Clinico Ostetrico',
      molecularActors: ['Madre aplotipo KIR AA', 'Feto HLA-C2 paterno', 'Ipoperfusione placentare'],
      description: 'Se una gestante omozigote per l\'Aplotipo A (KIR2DL1 inibitorio) porta un feto con HLA-C2 ereditato dal padre, le uNK ricevono un\'inibizione eccessiva: mancato rimodellamento vascolare e ischemia placentare.',
      checkpointOrOutcome: 'Insorgenza di Preeclampsia (ipertensione gestazionale, proteinuria e ritardo di crescita)'
    }
  ],
  clinicalSummary: 'La combinazione genetica materno-fetale KIR AA / HLA-C2 aumenta significativamente il rischio di preeclampsia, aborti spontanei ricorrenti e ritardo di crescita intrauterino (IUGR), evidenziando il ruolo ormonale e vascolare insospettato dei recettori immunologici.'
};

// =========================================================================
// LEZIONE 22: RISPOSTE ALLE INFEZIONI (BATTERI, FUNGHI, PARASSITI)
// =========================================================================
export const MAP_LEZIONE_22_IMMUNE_RESPONSES_BY_PATHOGEN: ConceptMapFlowProps = {
  id: 'map-lez22-responses-pathogen',
  badge: 'SCHEMA COMPARATIVO · MODELLI DI DIFESA ANTIMICROBICA',
  title: 'Specializzazione della Risposta Immunitaria in Base alla Nicchia del Patogeno',
  subtitle: 'Batteri extracellulari piogeni vs batteri intracellulari vs infezioni da elminti pluricellulari',
  colorTheme: 'emerald',
  mode: 'comparison-flow',
  comparisonColumns: [
    {
      title: 'Batteri Extracellulari (es. Streptococchi, Neisseria)',
      colorAccent: 'blue',
      items: [
        'Sensori Primari: TLR superficiali (TLR2, TLR4, TLR5) e complemento',
        'Effettori Cellulari: Neutrofili richiamati da CXCL8 e C5a',
        'Asse Citochinico: Th17 (IL-17, IL-22, G-CSF) che amplifica la mielopoiesi e le giunzioni serrate',
        'Meccanismo Litico: Fagocitosi opsonino-dipendente (IgG + C3b) e scoppio colloido-osmotico da MAC (C5b-9)',
        'Evasione Tipica: Capsule polisaccaridiche antifagocitarie e proteasi scindenti IgA'
      ]
    },
    {
      title: 'Batteri Intracellulari (es. Mycobacterium tuberculosis)',
      colorAccent: 'amber',
      items: [
        'Sensori Primari: TLR endosomiali e sensori citosolici (NOD2)',
        'Effettori Cellulari: Macrofagi attivati M1 in stretta cooperazione con Th1 e CTL CD8+',
        'Asse Citochinico: IL-12/STAT4 che induce alti livelli di IFN-γ e TNF-α',
        'Meccanismo Litico: Formazione di fagolisosomi, sintesi di NO da iNOS e radicali ROS',
        'Esito Cronicizzante: Formazione del Granuloma (cellule epitelioidi e cellule giganti di Langhans con necrosi caseosa)'
      ]
    },
    {
      title: 'Parassiti & Elminti Pluricellulari (es. Schistosoma, Ascaris)',
      colorAccent: 'rose',
      items: [
        'Sensori Primari: Allarmine epiteliali rilasciate da danno tissutale (TSLP, IL-33, IL-25)',
        'Effettori Cellulari: Granulociti Eosinofili, Mastociti, ILC2 e Macrofagi M2',
        'Asse Citochinico: Th2 guidati da GATA-3 con produzione coordinata di IL-4, IL-5 e IL-13',
        'Meccanismo Litico: ADCC mediata da IgE su FcεRI dell\'eosinofilo con secrezione di Major Basic Protein (MBP)',
        'Espulsione Meccanica: Fenomeno "weep & sweep" (ipersecrezione di muco da IL-13 e contrazione peristaltica viscerale)'
      ]
    }
  ],
  clinicalSummary: 'La corretta polarizzazione è questione di vita o di morte: nella lebbra da Mycobacterium leprae, una risposta polarizzata Th1 confina i bacilli in granulomi dermici controllati (forma tubercoloide), mentre uno sbilanciamento Th2 permette la proliferazione incontrollata nei macrofagi con sfiguramento nodulare diffuso (forma lepromatosa).'
};

export const MAP_LEZIONE_22_SUPERANTIGENS_VS_CONVENTIONAL: ConceptMapFlowProps = {
  id: 'map-lez22-superantigens',
  badge: 'BIVIO MOLECOLARE · RICONOSCIMENTO DEL TCR',
  title: 'Riconoscimento Antigenico Canonico vs Attivazione da Superantigene (SAg)',
  subtitle: 'Confronto strutturale tra presentazione convenzionale MHC-II e shock tossico da bypass molecolare',
  colorTheme: 'rose',
  mode: 'bifurcation',
  branches: {
    condition: 'Modalità di Interazione con il Recettore dei Linfociti T (TCR) e MHC di Classe II',
    testOrSignal: 'Peptide alloggiato nella tasca MHC riconosciuto dalle anse CDR3 vs legame allosterico esterno al solco',
    outcomes: [
      {
        label: 'Presentazione Antigenica Convenzionale (Peptide-MHC)',
        badge: 'Specificità Clonale Rigorosa',
        status: 'success',
        description: 'L\'antigene proteico viene processato in peptidi lineari di 10-30 aminoacidi alloggiati nella tasca di MHC-II. Il TCR contatta contemporaneamente il peptide e le eliche α di MHC tramite le regioni ipervariabili CDR3. Attiva una frazione minuscola del repertorio (1 cellula T su 100.000 - 1.000.000), generando memoria specifica immunologica.'
      },
      {
        label: 'Attivazione da Superantigene Batterico (es. TSST-1, Enterotossine Stafilococciche)',
        badge: 'Bypass Policlonale Massivo (fino al 20%)',
        status: 'danger',
        description: 'La tossina non richiede alcun processamento intracellulare: si lega simultaneamente al versante esterno della catena Vβ del TCR e alla porzione laterale non polimorfa di MHC-II, fungendo da "pinza molecolare esterna". Attiva indistintamente tutti i linfociti T recanti quella specifica famiglia Vβ, stimolando fino al 5-20% dell\'intero compartimento T dell\'organismo.'
      },
      {
        label: 'Esito Clinico: Sindrome da Shock Tossico (TSS)',
        badge: 'Tempesta Citochinica Sistemica',
        status: 'danger',
        description: 'Il simultaneo rilascio torrenziale di TNF-α, IL-1β, IL-2 e IFN-γ scatena vasodilatazione generalizzata con collasso emodinamico (ipotensione refrattaria), iperpiressia, danno da permeabilità capillare sistemica, insufficienza multiorgano (MOF) ed esantema desquamativo.'
      }
    ]
  },
  clinicalSummary: 'I superantigeni batterici rappresentano una delle armi biologiche più subdole: disorientano il sistema immunitario saturando l\'intero repertorio T in una proliferazione aspecifica abortiva, impedendo la genesi di una risposta anticorpale e cellulare diretta contro il batterio invasore.'
};

// =========================================================================
// LEZIONE 23: IMMUNITÀ MUCOSALE (MALT / GALT) & TRANSCITOSI DELLE IgA
// =========================================================================
export const MAP_LEZIONE_23_IGA_TRANSCYTOSIS: ConceptMapFlowProps = {
  id: 'map-lez23-iga-transcytosis',
  badge: 'MAPPA CONCETTUALE · IMMUNITÀ MUCOSALE',
  title: 'La Via di Biosintesi, Transcitosi e Secrezione delle IgA Mucosali (sIgA)',
  subtitle: 'Dalla plasmacellula della lamina propria al rilascio luminale protetto dal Componente Secretorio',
  colorTheme: 'emerald',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Sintesi del Dimero nella Lamina Propria',
      highlightBadge: 'Catena J di Giunzione',
      molecularActors: ['Plasmacellule GALT', 'Catena J (15 kDa)', 'TGF-β / BAFF / APRIL'],
      description: 'Le plasmacellule della lamina propria secernono le IgA in forma di dimero, unito covalentemente attraverso i domini Cα3 dalla catena polipeptidica J (Joining chain).',
      checkpointOrOutcome: 'Formazione del dimero pronto al riconoscimento del recettore'
    },
    {
      stepNumber: 2,
      stage: 'Legame al Recettore Polimerico pIgR',
      highlightBadge: 'Polo Basolaterale',
      molecularActors: ['pIgR (Poly-Ig Receptor)', 'Membrana basolaterale enterocita', 'Ectodominio'],
      description: 'Il recettore transmembrana pIgR, espresso sul versante basolaterale dell\'enterocita, lega con altissima specificità la catena J del dimero di IgA.',
      checkpointOrOutcome: 'Innesco dell\'endocitosi e formazione di vescicole di transcitosi'
    },
    {
      stepNumber: 3,
      stage: 'Transcitosi Vescicolare Attraverso l\'Enterocita',
      highlightBadge: 'Traffico Intracellulare Apicale',
      molecularActors: ['Microtubuli citoplasmatici', 'Endosomi di trasporto', 'Neutralizzazione intracellulare'],
      description: 'Il complesso pIgR-dIgA viene veicolato per transcitosi verso il polo apicale. Durante il tragitto, le IgA possono neutralizzare virus (es. Rotavirus) che si replicano nel citosol enterocitario.',
      checkpointOrOutcome: 'Trasporto protetto senza degradazione lisosomiale'
    },
    {
      stepNumber: 4,
      stage: 'Clivaggio e Rilascio di sIgA con Componente Secretorio',
      highlightBadge: 'Secrezione nel Lume Intestinale',
      molecularActors: ['Componente Secretorio (SC)', 'Glicocalice e Muco', 'Esclusione immune'],
      description: 'Sul polo apicale, una proteasi cliva pIgR: la porzione extracellulare rimane avvolta al dimero costituendo il Componente Secretorio (SC). Le sIgA si ancorano al muco proteggendosi dalla digestione enzimatica.',
      checkpointOrOutcome: 'Neutralizzazione dei patogeni per "esclusione immune" e crescita incatenata dei batteri'
    }
  ],
  clinicalSummary: 'La secrezione giornaliera di sIgA supera i 3-5 grammi, più di tutti gli altri isotipi messi insieme. La caratteristica fondamentale delle sIgA è l\'azione "non-flogistica": neutralizzano tossine e microbi senza attivare la via classica del complemento, preservando la delicata integrità della barriera epiteliale.'
};

export const MAP_LEZIONE_23_GALT_INTESTINAL_HOMING: ConceptMapFlowProps = {
  id: 'map-lez23-galt-homing',
  badge: 'MAPPA CONCETTUALE · CIRCUITO DI HOMING GALT',
  title: 'Il Circuito di Homing Intestinale dei Linfociti T e B Primati nel GALT',
  subtitle: 'Cattura da cellule M, induzione dell\'acido retinoico nei linfonodi mesenterici ed estrusione mucosale',
  colorTheme: 'indigo',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Campionamento Antigenico da Cellule M',
      highlightBadge: 'Placche di Peyer (FAE)',
      molecularActors: ['Cellule M (Microfold)', 'Tasca basolaterale', 'Cellule Dendritiche CD103+'],
      description: 'L\'epitelio associato ai follicoli (FAE) contiene cellule M prive di microvilli e muco. Captano particelle e batteri dal lume per transcitosi riversandoli nella tasca basolaterale alle cellule dendritiche residenti.',
      checkpointOrOutcome: 'Trasferimento antigenico intatto senza degradazione peptica'
    },
    {
      stepNumber: 2,
      stage: 'Imprinting nei Linfonodi Mesenterici (MLN)',
      highlightBadge: 'Acido Retinoico & RALDH',
      molecularActors: ['Enzima RALDH (vitamina A)', 'Acido Retinoico (RA)', 'DC CD103+'],
      description: 'Le DC migrano nei linfonodi mesenterici. Grazie all\'enzima retinil-aldeide deidrogenasi (RALDH), convertono la vitamina A in Acido Retinoico, che agisce sui linfociti T e B vergini durante il priming.',
      checkpointOrOutcome: 'Espressione genomica programmata del codice molecolare di homing mucosale'
    },
    {
      stepNumber: 3,
      stage: 'Espressione del Codice di Indirizzamento: α4β7 & CCR9',
      highlightBadge: 'Integrina & Chemochina Receptor',
      molecularActors: ['Integrina α4β7 (LPAM-1)', 'Recettore CCR9', 'Dotto toracico e circolo sistemico'],
      description: 'I linfociti attivati esprimono l\'integrina α4β7 e il recettore chemiotattico CCR9. Lasciano i linfonodi mesenterici via dotto toracico, entrano nella circolazione ematica generale e raggiungono l\'intestino.',
      checkpointOrOutcome: 'Ricircolo selettivo verso l\'organo d\'origine di priming'
    },
    {
      stepNumber: 4,
      stage: 'Estrusione e Arricchimento nella Lamina Propria',
      highlightBadge: 'Legame a MAdCAM-1 & CCL25',
      molecularActors: ['MAdCAM-1 (endotelio mucosale)', 'Chemochina CCL25 (enterociti tenue)', 'Diapedesi'],
      description: 'L\'integrina α4β7 si ancora saldamente a MAdCAM-1 sulle venule post-capillari dell\'intestino; il gradiente di CCL25 guida lo stravaso diapedetico dei linfociti nella lamina propria e nell\'epitelio (IEL).',
      checkpointOrOutcome: 'Popolamento dei linfociti effettori e guardiani mucosali residenti'
    }
  ],
  clinicalSummary: 'La scoperta del codice di homing α4β7 / MAdCAM-1 ha rivoluzionato il trattamento della Rettocolite Ulcerosa e del Morbo di Crohn: il farmaco biologico Vedolizumab è un anticorpo monoclonale anti-α4β7 che blocca selettivamente l\'infiltrazione dei linfociti nell\'intestino senza causare immunosoppressione sistemica.'
};

// =========================================================================
// LEZIONE 24: DIFESA ANTIVIRALE, INTERFERONI DI TIPO I & VACCINOLOGIA
// =========================================================================
export const MAP_LEZIONE_24_ANTIVIRAL_STATE_CASCADE: ConceptMapFlowProps = {
  id: 'map-lez24-antiviral-state',
  badge: 'MAPPA CONCETTUALE · STATO ANTIVIRALE INNATO',
  title: 'La Cascata di Riconoscimento Citosolico Virale e Induzione dello Stato Antivirale',
  subtitle: 'Dai recettori RIG-I/MDA5 alla secrezione di IFN di Tipo I e trasduzione JAK-STAT (geni ISG)',
  colorTheme: 'blue',
  mode: 'horizontal-chain',
  steps: [
    {
      stepNumber: 1,
      stage: 'Riconoscimento dell\'RNA Virale Citosolico',
      highlightBadge: 'RIG-I & MDA5 (RLR)',
      molecularActors: ['RIG-I (RNA 5\'-trifosfato corto)', 'MDA5 (dsRNA lungo)', 'Domini CARD'],
      description: 'I recettori della famiglia RIG-I-like (RLR) riconoscono pattern genomici virali assenti nelle cellule sane (es. estremità 5\'-trifosfato non cappata o lunghi RNA a doppio filamento).',
      checkpointOrOutcome: 'Attivazione conformazionale e svelamento dei domini effettori CARD'
    },
    {
      stepNumber: 2,
      stage: 'Assemblaggio Piattaforma Mitocondriale MAVS',
      highlightBadge: 'Segnalazione Mitocondriale',
      molecularActors: ['MAVS (IPS-1)', 'Chinasi TBK1 / IKKε', 'Fattore IRF3 / IRF7', 'NF-κB'],
      description: 'I domini CARD legano la proteina MAVS sulla membrana mitocondriale esterna. Si assembla un aggregato filamentoso che attiva le chinasi TBK1 e IKKε, con fosforilazione e dimerizzazione nucleare di IRF3 e IRF7.',
      checkpointOrOutcome: 'Trascrizione massiva dei geni per Interferone di Tipo I (IFN-α ed IFN-β)'
    },
    {
      stepNumber: 3,
      stage: 'Segnalazione Paracrina Autocrina via Recettore IFNAR',
      highlightBadge: 'Via JAK1 / TYK2 & STAT1/2',
      molecularActors: ['IFNAR1/IFNAR2', 'JAK1 / TYK2', 'STAT1 / STAT2 / IRF9', 'Complesso ISGF3'],
      description: 'Gli interferoni secreti legano il recettore IFNAR sulla cellula infetta e sulle cellule adiacenti sane. Attivano JAK1 e TYK2 con formazione del complesso eterotrimerico ISGF3 (STAT1-STAT2-IRF9).',
      checkpointOrOutcome: 'Traslocazione nucleare e legame agli elementi di risposta ISRE nel promotore'
    },
    {
      stepNumber: 4,
      stage: 'Blocco Replicativo: Effettori PKR, OAS-RNasi L & Mx1',
      highlightBadge: 'Stato Antivirale Conclamato',
      molecularActors: ['PKR (blocco traduzione via eIF2α)', 'OAS1-3 / RNasi L (degradazione RNA)', 'GTPasi Mx1'],
      description: 'I geni indotti da interferone (ISG) bloccano ogni fase virale: PKR fosforila e inattiva eIF2α spegnendo la sintesi proteica cellulare e virale; OAS attiva la RNasi L che demolisce tutto l\'RNA citoplasmatico.',
      checkpointOrOutcome: 'Resistenza totale all\'infezione delle cellule vicine e arresto della disseminazione'
    }
  ],
  clinicalSummary: 'La rilevanza clinica degli interferoni di tipo I è emersa drammaticamente durante la pandemia da SARS-CoV-2: fino al 15% dei pazienti con COVID-19 critico presenta autoanticorpi neutralizzanti preesistenti contro IFN-α o mutazioni ipofunzionanti congenite nei geni dell\'asse TLR3/IRF7/IFNAR.'
};

export const MAP_LEZIONE_24_VACCINE_PLATFORMS_COMPARISON: ConceptMapFlowProps = {
  id: 'map-lez24-vaccine-platforms',
  badge: 'SCHEMA COMPARATIVO · PIATTAFORME VACCINALI',
  title: 'Confronto Bio-Immunologico delle Grandi Piattaforme Vaccinali Umane',
  subtitle: 'Attenuati vs Inattivati vs Coniugati a carrier proteico vs VLP vs Nuove Tecnologie a mRNA',
  colorTheme: 'purple',
  mode: 'comparison-flow',
  comparisonColumns: [
    {
      title: 'Virus Vivi Attenuati (es. Morbillo, Rosolia, Parotite, Febbre Gialla)',
      colorAccent: 'blue',
      items: [
        'Composizione: Virus intatto replicante a virulenza attenuata in vitro',
        'Risposta Immunitaria: Completa e massiva (induce CTL CD8+ via MHC-I, anticorpi neutralizzanti e cellule B memoria decennali)',
        'Vantaggi: Singola dose spesso sufficiente, protezione duratura senza adiuvanti esogeni',
        'Controindicazioni: Assolutamente controindicato in gravidanza e immunodepressi per rischio di reversione patogena'
      ]
    },
    {
      title: 'Inattivati / Subunità & VLP (es. Anti-Polio Salk, Epatite B, HPV)',
      colorAccent: 'emerald',
      items: [
        'Composizione: Patogeno ucciso chimicamente o proteine ricombinanti strutturali assemblate (VLP come L1 di HPV)',
        'Risposta Immunitaria: Prevalentemente umorale (anticorpi protettivi neutralizzanti via MHC-II e Th2/Tfh)',
        'Vantaggi: Sicurezza del 100% (impossibile la replicazione o infezione)',
        'Svantaggi: Scarsa o nulla induzione di CTL CD8+, richiede richiami periodici e formulazione con adiuvanti allume'
      ]
    },
    {
      title: 'Vaccini Coniugati (es. Pneumococco PCV, Meningococco, Hib)',
      colorAccent: 'amber',
      items: [
        'Composizione: Polisaccaride capsulare T-indipendente coniugato covalentemente a carrier proteico (es. CRM197)',
        'Meccanismo: Linked Recognition: il B anti-zucchero presenta i peptidi del carrier proteico al Tfh',
        'Rivoluzione Clinica: Trasforma una risposta TI-2 effimera in una potente risposta T-dipendente con switch a IgG e memoria',
        'Impatto Pediatrico: Efficace anche nei bambini sotto i 2 anni di vita, eradicando la meningite da Hib'
      ]
    },
    {
      title: 'Piattaforme a mRNA & Vettori Virali (es. SARS-CoV-2 Spike)',
      colorAccent: 'rose',
      items: [
        'Composizione: mRNA modificato (N1-metilpseudouridina) incapsulato in nanoparticelle lipidiche (LNP)',
        'Meccanismo Intracellulare: Traduzione citosolica della proteina antigenica nei ribosomi dell\'ospite',
        'Risposta Doppia: Presentazione su MHC-I (robusta induzione di CTL CD8+) e secrezione con priming MHC-II (Tfh e IgG ad alto titolo)',
        'Vantaggi Produttivi: Rapidità di sintesi in vitro, assenza di materiale biologico infettivo o adiuvanti tossici'
      ]
    }
  ],
  clinicalSummary: 'Il successo dell\'immunizzazione dipende dall\'immunità di gregge (Herd Immunity), calcolata con la formula soglia = 1 - 1/R₀. Per patogeni altamente contagiosi come il morbillo (R₀ ≈ 15-18), la soglia di copertura minima per prevenire focolai epidemici supera il 95% della popolazione.'
};

