import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import { ConceptMapFlow } from './ConceptMapFlow';
import { MAP_LEZIONE_20_CTL_KILLING_CASCADE, MAP_LEZIONE_20_HLH_AND_AICD_PATHOLOGY } from '../data/conceptMapsData';
import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  Zap,
  Target,
  Activity,
  Microscope,
  Award,
  BookOpen,
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Check,
  ArrowRight,
  AlertTriangle,
  FileText,
  Flame,
  Pill,
  Dna,
  Layers,
  Skull,
  Eye,
  Sliders,
  ShieldCheck,
  RefreshCw,
  Crosshair
} from 'lucide-react';

interface Lezione20ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione20View: React.FC<Lezione20ViewProps> = ({ isSerif, fontSize }) => {
  const fontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const sizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // State for Simulator 1: CTL Synapse & HLH Genetic Mutation Engine
  const [synapsePhase, setSynapsePhase] = useState<'contact' | 'polarization' | 'exocytosis' | 'killing'>('contact');
  const [hlhMutation, setHlhMutation] = useState<'none' | 'perforin' | 'munc13' | 'syntaxin'>('none');

  // State for Simulator 2: Tumor Checkpoint & Immunotherapy Lab
  const [checkpointDrug, setCheckpointDrug] = useState<'none' | 'anti-pd1' | 'anti-pdl1' | 'anti-ctla4'>('none');
  const [m2MacrophageInfiltrate, setM2MacrophageInfiltrate] = useState<boolean>(true);

  // State for Flashcards
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  // State for Quiz
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState<boolean>(false);


  const toggleCard = (index: number) => {
    setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    if (!showResults) {
      setUserAnswers(prev => ({ ...prev, [questionIndex]: optionIndex }));
    }
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  // Flashcards Data
  const flashcardsData = [
    {
      question: "Perché è biologicamente necessaria la Cross-Presentazione (Cross-Priming)?",
      answer: "Perché le cellule dendritiche non sono quasi mai la sede primaria di infezioni virali o di trasformazione tumorale. Per innescare i CTL CD8+ naive, la DC deve captare l'antigene extracellulare esogeno e dirottarlo nel citosol (cytosolic diversion), dove viene ubiquitinato, processato dal proteasoma e caricato su molecole MHC di classe I tramite TAP."
    },
    {
      question: "In che modo i linfociti Th1 coadiuvano il priming dei linfociti T citotossici?",
      answer: "Attraverso due modalità complementari: 1) Aiuto citochinico diretto: secrezione di IL-2 e IFN-γ che promuovono l'espansione e il differenziamento del CTL; 2) 'Licensing' della DC: contatto CD40L (sul Th1) con CD40 (sulla DC), che induce una robusta upregolazione di MHC-I, costimolatori B7 (CD80/86) e secrezione di IL-12."
    },
    {
      question: "Quali sono i ruoli della Perforina e del Granzima B nella via secretoria?",
      answer: "In presenza di Ca²⁺ extracellulare, la perforina polimerizza nella membrana del bersaglio formando pori transmembrana. Il Granzima B penetra e innesca una duplice via apoptotica: cliva la procaspasi-3 in caspasi-3 (attivando la DNasi CAD) e cliva Bid in tBid, provocando il collasso mitocondriale con rilascio di citocromo c e attivazione della caspasi-9."
    },
    {
      question: "Cos'è l'AICD e quale patologia scaturisce dal deficit del recettore Fas/FasL?",
      answer: "L'AICD (Activation-Induced Cell Death) è la morte programmata mediata da Fas/FasL che spegne la risposta immunitaria al termine della proliferazione T, prevenendo l'iperplasia linfoide. Mutazioni di FAS o FASL causano la Sindrome Linfoproliferativa Autoimmune (ALPS), caratterizzata da linfoadenopatia massiva, splenomegalia e autoimmunità (la via perforine/granzimi resta però intatta)."
    },
    {
      question: "Qual è il meccanismo patogenetico della Sindrome Emofagocitica Familiare (HLH)?",
      answer: "Mutazioni di geni della macchina esocitica (Perforina PRF1, Munc13-4, Rab27a, Sintassina-11) impediscono al CTL di uccidere la cellula infettata. Il CTL, stimolato cronicamente, produce quantità abnormi di IFN-γ, che iperattiva i macrofagi spingendoli a fagocitare le cellule del sangue (emofagocitosi con pancitopenia, epatosplenomegalia e tempesta citochinica CRS)."
    },
    {
      question: "Perché nelle mutazioni di Rab27a e Munc13-4 (Sindrome di Griscelli) si associa albinismo?",
      answer: "Perché Rab27a e Munc13-4 fanno parte della famiglia SNARE deputata al traffico e all'esocitosi vescicolare non solo dei granuli citotossici dei linfociti T/NK, ma anche dei melanosomi nei melanociti cutanei. Il mancato rilascio di melanina ai cheratinociti impedisce la pigmentazione di cute e capelli, provocando ipopigmentazione/albinismo parziale."
    }
  ];

  // 10 Official Quiz Questions (incorporating all questions from slides 11, 12, 13)
  const quizData = [
    {
      question: "1. Nella sindrome linfoproliferativa autoimmune (ALPS). Indicare la risposta errata: (Slide 11)",
      options: [
        "A) È una malattia neoplastica degli organi linfoidi",
        "B) È caratterizzata da iperplasia dei linfonodi",
        "C) È una malattia genetica dovuta a mutazione di Fas o FasL",
        "D) È dovuta a difetto di killing di cellule infettate",
        "E) Vere A e D"
      ],
      correctIndex: 4,
      rationale: "Corretto (E): Come chiarito dalla professoressa, l'ALPS NON è una neoplasia linfoide (ma un difetto genetico di omeostasi/spegnimento) e i pazienti NON hanno difetto di killing delle cellule infettate (perché la via secretoria dei granzimi/perforina è del tutto intatta). Pertanto le affermazioni A e D sono entrambe errate."
    },
    {
      question: "2. Il linfocita Th1 coadiuva il priming del CTL tramite: (Slide 11)",
      options: [
        "A) Produzione IL-2",
        "B) Attivazione DC (tramite CD40-CD40L)",
        "C) Produzione IFN-I",
        "D) Produzione IL-12",
        "E) Come A e B"
      ],
      correctIndex: 4,
      rationale: "Corretto (E): Il Th1 coadiuva il CTL sia direttamente secernendo citochine di crescita (IL-2 e IFN-γ) sia indirettamente attivando e 'licenziando' la cellula dendritica attraverso l'interazione CD40L : CD40."
    },
    {
      question: "3. Il priming del CTL anti-HBV (virus epatite B) richiede: (Slide 12)",
      options: [
        "A) L'infezione della DC",
        "B) La cross-presentazione",
        "C) L'internalizzazione dell'epatocita infettato",
        "D) Tutte sono corrette",
        "E) Come B e C"
      ],
      correctIndex: 4,
      rationale: "Corretto (E): Il virus HBV è epato-tropico e non infetta la cellula dendritica (quindi la A è falsa). Per attivare i CTL anti-HBV, la DC deve internalizzare frammenti di epatociti infettati ed effettuare la cross-presentazione su MHC di classe I."
    },
    {
      question: "4. La presentazione in MHC classe I: (Slide 12)",
      options: [
        "A) Riguarda antigeni processati nelle vescicole endocitiche",
        "B) Riguarda peptidi di almeno 30 aa",
        "C) Coinvolge il trasportatore peptidico TAP",
        "D) Coinvolge la catena invariante Ii",
        "E) Coinvolge il CD3"
      ],
      correctIndex: 2,
      rationale: "Corretto (C): Il complesso MHC di classe I lega peptidi corti (8-10 aa) derivanti dal proteasoma e traslocati nel reticolo endoplasmatico dal trasportatore eterodimerico TAP (Transporter associated with Antigen Processing)."
    },
    {
      question: "5. Nella sinapsi citotossica avvengono i seguenti eventi (tranne uno): (Slide 12)",
      options: [
        "A) Polarizzazione dei granuli citotossici",
        "B) Formazione del dominio secretorio",
        "C) Rilascio di granzyme attraverso i pori di perforina",
        "D) Riarrangiamento della tubulina e del centrosoma",
        "E) Esocitosi dei granuli regolata da sintassine"
      ],
      correctIndex: 2,
      rationale: "Corretto (C): Come spiegato nella lezione, la C è errata. I granzimi non passano semplicemente attraverso i pori di perforina formati sulla membrana plasmatica; la perforina agisce favorendo l'endocitosi o la permeabilizzazione delle vescicole endosomiche una volta internalizzati."
    },
    {
      question: "6. Il danno mitocondriale indotto dal CTL durante il killing: (Slide 12)",
      options: [
        "A) Avviene per cause genetiche",
        "B) È indotto da granzyme B",
        "C) È indotto da caspasi 3",
        "D) È espressione di exhaustion del CTL",
        "E) Come B e C"
      ],
      correctIndex: 1,
      rationale: "Corretto (B): Il granzima B innesca direttamente il danno della membrana mitocondriale clivando la proteina pro-apoptotica Bid nel frammento attivo tBid, che induce il rilascio di citocromo c nello spazio citosolico."
    },
    {
      question: "7. L'AICD (Activation-Induced Cell Death): (Slide 13)",
      options: [
        "A) È dovuta all'espressione di CTLA-4",
        "B) È mediata dalla perforina",
        "C) Avviene nel corso della selezione negativa timica",
        "D) È la morte apoptotica del linfocita T che fa seguito all'attivazione",
        "E) Nessuna delle precedenti"
      ],
      correctIndex: 3,
      rationale: "Corretto (D): L'AICD è il meccanismo fisiologico omeostatico di morte apoptotica (guidato dall'asse Fas/FasL) che elimina la maggior parte dei cloni T effettori al termine della risposta immunitaria per prevenire l'iper-accumulo linfocitario."
    },
    {
      question: "8. L'exhaustion (esaurimento funzionale) del CTL nel microambiente tumorale è dovuto a: (Slide 13)",
      options: [
        "A) Espressione di PD-L1/2 da parte delle cellule tumorali",
        "B) Espressione di PD-L1/2 da parte del CTL",
        "C) Espressione di PD-L1/2 da parte dei macrofagi (M2)",
        "D) Perdita dell'antigene tumorale",
        "E) Vere A e C"
      ],
      correctIndex: 4,
      rationale: "Corretto (E): L'esaurimento funzionale dei CTL è scatenato dal legame del loro recettore inibitorio PD-1 con i ligandi PD-L1 e PD-L2 espressi sia direttamente dalle cellule neoplastiche sia dai macrofagi M2 immunosoppressori intratumorali."
    },
    {
      question: "9. Nella Sindrome Emofagocitica Familiare (HLH), perché si manifesta anemia, piastrinopenia e splenomegalia?",
      options: [
        "A) Perché i linfociti B producono autoanticorpi opsonizzanti contro l'emoglobina",
        "B) Perché l'incapacità di uccidere la cellula target causa secrezione massiva e continua di IFN-γ, che iper-attiva i macrofagi inducendo l'inglobamento distruttivo (emofagocitosi) degli elementi figurati del sangue",
        "C) Per un blocco totale della differenziazione midollare delle cellule staminali ematopoietiche",
        "D) A causa di un deficit renale congenito nella sintesi di eritropoietina",
        "E) Perché i granzimi mutati vengono rilasciati nel torrente circolatorio lisando gli eritrociti"
      ],
      correctIndex: 1,
      rationale: "Corretto (B): Il difetto genetico di esocitosi impedisce al CTL di eliminare la cellula infetta; il CTL persiste nell'attivazione rilasciando una cascata spropositata di IFN-γ. I macrofagi iperstimolati fagocitano attivamente globuli rossi, piastrine e leucociti nella milza e nel midollo osseo (emofagocitosi)."
    },
    {
      question: "10. In che modo gli inibitori dei checkpoint immunitari (anti-PD-1 / anti-PD-L1) ripristinano l'immunità antitumorale?",
      options: [
        "A) Distruggendo direttamente la membrana plasmatica delle cellule tumorali tramite perforina solubile",
        "B) Bloccando l'interazione inibitoria tra PD-1 (sul CTL) e PD-L1/2 (su tumore e macrofagi M2), impedendo il reclutamento della fosfatasi SHP-2 e riattivando la cascata di killing citotossico",
        "C) Aumentando di 100 volte l'affinità di FAS per il ligando FADD nel citosol",
        "D) Inducendo la degranulazione precoce dei neutrofili prima del loro arrivo nel tumore",
        "E) Convertendo i linfociti CD8 naive in plasmacellule secernenti IgG3"
      ],
      correctIndex: 1,
      rationale: "Corretto (B): Gli anticorpi monoclonali anti-PD-1 (Pembrolizumab, Nivolumab) o anti-PD-L1 (Atezolizumab) interrompono il circuito inibitorio, prevenendo la defosforilazione di ZAP-70 e CD28 mediata da SHP-2 e ripristinando il serial-killing dei CTL contro le cellule tumorali."
    }
  ];

  return (
    <article className={`space-y-12 ${fontClass} ${sizeClass} text-slate-800`}>
      {/* Chapter Title & Academic Header */}
      <header className="border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-200">
            Capitolo 20 · Immunità Cellulo-Mediata
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 text-slate-700">
            Data: 13 Novembre 2025 (1ª e 2ª ora)
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            Prof.ssa Ricciarda Galandrini
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-50 text-indigo-800 border border-indigo-200">
            Sbobinatori: C. Carbonari & A. Cimini Gianforte
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-serif-heading">
          Linfociti T Citotossici (CTL): Priming, Cross-Presentazione, Sinapsi Litica, Vie Apoptotiche (Granzimi/Perforina vs Fas/FasL), Evasione Virale, Checkpoint & Sindromi Emofagocitiche (HLH)
        </h1>

        <p className="mt-4 text-base text-slate-600 leading-relaxed font-sans">
          Trattato monografico approfondito sulla biologia molecolare e clinica dei linfociti T citotossici (CTL CD8+): dalla fase di priming linfonodale con i tre segnali e la risoluzione del paradosso dendritico mediante <strong>cross-presentazione (cross-priming)</strong> con deviazione citosolica (<em>cytosolic diversion</em>), alle modalità di cooperazione con i linfociti Th1 (supporto citochinico di IL-2/IFN-γ e <em>licensing</em> della DC via CD40-CD40L). Disamina della biogenesi dello stato antivirale indotto da <strong>Interferoni di tipo I (IFN-α/β)</strong> attraverso i PRR intracellulari (TLR3, RIG-I, cGAS/STING, AIM2). Architettura della <strong>sinapsi citotossica</strong> con polarizzazione del centrosoma (MTOC) e traffico dei granuli lungo i microtubuli; duplice meccanismo di killing tramite la <strong>via secretoria</strong> (polimerizzazione Ca²⁺-dipendente di perforina e cascata apoptotica a doppio binario del Granzima B su Caspasi-3/CAD e asse mitocondriale Bid/Bax/citocromo c/Caspasi-9) e la <strong>via dei recettori di morte Fas (CD95) / FasL</strong>. Implicazioni patologiche: selezione negativa, <strong>AICD</strong> (Activation-Induced Cell Death) e <strong>Sindrome Linfoproliferativa Autoimmune (ALPS)</strong>. Analisi dell'evasione virale, dell'<strong>infiltrato intratumorale (TILs)</strong> correlato alla prognosi, del blocco dei checkpoint <strong>PD-1 / PD-L1</strong> nell'immunoterapia moderna e del disastro immunologico delle <strong>Sindromi Emofagocitiche Famigliari (HLH / Griscelli)</strong> per mutazioni di PRF1, Rab27a, Munc13-4 e Sintassina-11.
        </p>

        {/* Metadocument Details */}
        <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 font-sans gap-3">
          <div className="flex items-center gap-2">
            <Microscope className="w-4 h-4 text-rose-600" />
            <span><strong>Docente:</strong> Prof.ssa Ricciarda Galandrini</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span><strong>Revisori:</strong> Claudia Ciciotti (1ª ora), Anna Ciavarella (2ª ora)</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-blue-600" />
            <span><strong>Core Patologico:</strong> Cross-priming HBV, ALPS vs HLH, Albinismo parziale, Emofagocitosi, Checkpoint PD-1 / PD-L1</span>
          </div>
        </div>
      </header>

      {/* 20.1 Priming & Assemblaggio MHC Classe I */}
      <section id="sec-20-1" className="space-y-4">
        <div className="flex items-center gap-2 text-rose-700">
          <Target className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            20.1 Il Priming Linfonodale dei Linfociti T Citotossici & Assemblaggio in Classe I di Antigeni Endogeni
          </h2>
        </div>

        <p>
          L'immunità cellulo-mediata citotossica rappresenta il presidio fondamentale per la clearance di cellule infettate da virus o parassiti intracellulari, nonché per l'immunosorveglianza contro cellule neoplastiche trasformate e cellule allogeniche (nel rigetto dei trapianti). Analogamente a quanto descritto per i linfociti T helper, il <strong>priming</strong> dei linfociti T citotossici avviene negli organi linfoidi secondari (linfonodi e milza), dove i precursori <strong>CD8+ naive</strong> (definiti "pre-citotossici" poiché ancora privi di granuli secretori litici e incapaci di uccidere) incontrano l'antigene specifico.
        </p>

        <p>
          Il completamento del priming richiede la cooperazione sequenziale di tre segnali molecolari:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center mb-2">1</div>
            <strong className="text-slate-900 block text-sm mb-1">Segnale 1: Complesso MHC-I : Peptide</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Il TCR αβ riconosce stereospecificamente il peptide antigenico (8-10 amminoacidi) alloggiato nella tasca della molecola <strong>MHC di classe I</strong>, mentre il corecettore <strong>CD8</strong> lega il dominio invariante α3 stabilizzando la sinapsi.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 font-bold flex items-center justify-center mb-2">2</div>
            <strong className="text-slate-900 block text-sm mb-1">Segnale 2: Costimolazione CD28</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Legame tra <strong>CD28</strong> (sul linfocita T) e i ligandi costimolatori <strong>B7-1 (CD80)</strong> e <strong>B7-2 (CD86)</strong> espressi dall'APC professionale matura. Impedisce l'anergia e attiva la proliferazione monoclonale.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 font-bold flex items-center justify-center mb-2">3</div>
            <strong className="text-slate-900 block text-sm mb-1">Segnale 3: IL-12 & IFN di Tipo I</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              L'<strong>Interleuchina-12 (IL-12)</strong> e gli <strong>Interferoni di Tipo I (in primis IFN-α)</strong> istruiscono la differenziazione citolitica, inducendo la trascrizione dei geni della perforina, dei granzimi e di T-bet/Eomes.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-6">
          La Via Endogena di Presentazione su MHC di Classe I
        </h3>
        <p>
          Gli antigeni presentati in classe I sono tipicamente <strong>antigeni endogeni</strong>, cioè sintetizzati *de novo* all'interno del citoplasma della cellula (proteine virali neosintetizzate, oncoproteine tumorali mutate o polipeptidi difettosi derivanti da DRiPs):
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-slate-700">
          <li><strong>Ubiquitinazione</strong>: la proteina citosolica target subisce l'aggiunta covalente di catene di poliubiquitina (modificazione post-traduzionale conservata che marca le proteine per la distruzione).</li>
          <li><strong>Clivaggio nel Proteasoma</strong>: il complesso del 26S proteasoma (o immunoproteasoma indotto da IFN-γ con subunità LMP2/LMP7) digerisce il polipeptide in frammenti oligopeptidici di 8-10 amminoacidi con estremità carbossiliche idonee.</li>
          <li><strong>Traslocazione via TAP</strong>: i peptidi citosolici vengono traslocati attivamente attraverso la membrana del Reticolo Endoplasmatico (RE) dal trasportatore eterodimerico ATP-dipendente <strong>TAP1/TAP2</strong>.</li>
          <li><strong>Caricamento nel Complesso PLC</strong>: nel lume del RE, assistito da chaperon molecolari quali calreticulina, ERp57 e <strong>tapasina</strong> (che funge da ponte tra TAP e la catena pesante di MHC-I), il peptide viene caricato nella tasca conformata con la β2-microglobulina.</li>
          <li><strong>Espressione in Membrana</strong>: il complesso trimero stabile (catena pesante + β2-microglobulina + peptide) transita attraverso l'apparato di Golgi mediante vescicole secretorie e viene esposto stabilmente sulla superficie cellulare.</li>
        </ol>

        {/* Box Comparativo con Classe II */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-sans">
          <strong className="text-slate-900 block text-sm mb-1 font-bold">
            Confronto Rigoroso con l'Assemblaggio in Classe II (Antigeni Esogeni)
          </strong>
          <p className="text-slate-600 m-0 leading-relaxed">
            Gli antigeni esogeni vengono captati dall'ambiente extracellulare per fagocitosi, macropinocitosi o endocitosi recettoriale, segregati nelle vescicole endosomiche che si fondono con i lisosomi formantisi in <em>fagolisosomi acidi</em> ricchi di catepsine. Nel RE, la molecola di classe II viene assemblata legata alla <strong>catena invariante (Ii)</strong>, che occupa la tasca impedendo il legame precoce di peptidi citosolici. Nei compartimenti MIIC, la catena invariante viene degradata lasciando solo il frammento <strong>CLIP</strong>. La molecola chaperon <strong>HLA-DM</strong> catalizza lo scambio di CLIP con il peptide esogeno ad alta affinità (12-24 aa), prima del trasporto in superficie.
          </p>
        </div>
      </section>

      {/* 20.2 Cross-Presentazione & Paradosso della Cellula Dendritica */}
      <section id="sec-20-2" className="space-y-4">
        <div className="flex items-center gap-2 text-rose-700">
          <Zap className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            20.2 Il Paradosso della Cellula Dendritica & la Cross-Presentazione (Cytosolic Diversion)
          </h2>
        </div>

        <p>
          La professoressa pone l'accento su un apparente paradosso biologico: <em>"Se la classe I presenta antigeni endogeni sintetizzati nel citosol, come può la cellula dendritica attivare un CTL naive contro un virus epato-tropico (es. virus dell'Epatite B, HBV) o contro una cellula tumorale epiteliale?"</em>
        </p>

        <p>
          Infatti, la cellula dendritica <strong>raramente viene infettata dal virus HBV</strong> (che ha recettori specifici solo per gli epatociti) e <strong>non è una cellula tumorale</strong>. Se la DC si limitasse a fagocitare frammenti necrotici di epatociti infetti o cellule tumorali, questi antigeni esogeni verrebbero instradati esclusivamente nel percorso endolisosomiale di classe II, attivando solo i CD4+ helper e <strong>lasciando i linfociti CD8+ naive del tutto ciechi e inattivati</strong>.
        </p>

        <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200">
          <h4 className="font-bold text-rose-950 text-sm flex items-center gap-2 mb-2 font-sans">
            <Sparkles className="w-4 h-4 text-rose-700" />
            La Soluzione Biologica: Cross-Priming e Deviazione Citosolica (Cytosolic Diversion)
          </h4>
          <p className="text-xs text-rose-950 leading-relaxed font-sans m-0">
            La <strong>Cross-Presentazione</strong> è la capacità biologica specializzata della cellula dendritica convenzionale (in particolare il subset <strong>cDC1</strong> esprimente CD8α/CD103 e il recettore CLEC9A) di presentare su <strong>MHC di classe I antigeni di provenienza extracellulare</strong>. L'antigene esogeno captato per fagocitosi subisce un cambio di compartimento: attraverso canali dedicati o permeabilizzazione controllata dell'endosoma, l'antigene fuoriesce nel citosol (<strong>Cytosolic Diversion</strong>). Una volta divenuta proteina citosolica, viene marcata dall'ubiquitina, degradata dal proteasoma, traslocata nel RE tramite TAP e caricata sulle molecole di classe I. In questo modo, l'antigene viene contemporaneamente esposto sia in classe II sia in classe I, consentendo il priming concertato di CD4+ e CD8+.
          </p>
        </div>
      </section>

      {/* 20.3 Tre Modalità di Priming dei CTL con Aiuto Th1 */}
      <section id="sec-20-3" className="space-y-4">
        <div className="flex items-center gap-2 text-rose-700">
          <Activity className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            20.3 Tre Modalità di Priming dei CTL & la Cooperazione con i Linfociti Th1 (Help T-Cell)
          </h2>
        </div>

        <p>
          Come illustrato dettagliatamente nella slide 2 della lezione, l'attivazione e la differenziazione dei linfociti CD8+ naive in CTL maturi può avvenire secondo tre modalità distinte a seconda del contesto infiammatorio e della cooperazione dei linfociti Th1:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <strong className="text-slate-900 block text-sm mb-1">Modalità A: Priming Diretto Autonomo</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              La cellula dendritica, fortemente attivata da PAMP virali su TLR intracellulari, presenta l'antigene in classe I (segnale 1), esprime alti livelli di B7 (segnale 2) e secerne direttamente <strong>IL-12 e IFN-α/β</strong> (segnale 3), attivando il CTL senza richiedere l'intervento contemporaneo di un linfocita T-helper.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <strong className="text-slate-900 block text-sm mb-1">Modalità B: Help Citochinico Diretto da Th1</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Il linfocita Th1 attivato presente nella medesima nicchia linfonodale produce citochine paracrine ad alta concentrazione: <strong>Interleuchina-2 (IL-2)</strong>, che sostiene la proliferazione clonale del CD8+, e <strong>Interferone-γ (IFN-γ)</strong>, che ne coadiuva la differenziazione effettrice.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <strong className="text-slate-900 block text-sm mb-1">Modalità C: Licensing della DC via CD40-CD40L</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Il linfocita Th1 riconosce il peptide su MHC-II ed esprime <strong>CD40-Ligando (CD40L)</strong>. Il legame a <strong>CD40</strong> sulla DC attiva una cascata intracellulare (<em>Licensing</em>) che upregola drasticamente l'espressione di molecole MHC-I, costimolatori B7 e secrezione di IL-12, trasformando la DC in un'APC super-stimolatrice per il CTL.
            </p>
          </div>
        </div>
      </section>

      {/* 20.4 Interferoni di Tipo I & Sensori PRR */}
      <section id="sec-20-4" className="space-y-4">
        <div className="flex items-center gap-2 text-rose-700">
          <Sparkles className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            20.4 Interferoni di Tipo I (IFN-α/β), Cellule Dendritiche Plasmocitoidi (pDC) & Sensori PRR
          </h2>
        </div>

        <p>
          Gli <strong>Interferoni di Tipo I (IFN-α e IFN-β)</strong> rappresentano la prima linea di difesa antivirale innata e sono indispensabili per il priming efficiente dei CTL. Sebbene prodotti da tutte le cellule epiteliali infettate e dalle cDC, la fonte fisiologica più potente e specializzata è costituita dalle <strong>Cellule Dendritiche Plasmocitoidi (pDC)</strong>. Le pDC non sono di origine mieloide convenzionale; possiedono un reticolo endoplasmatico sviluppatissimo che consente loro di secernere concentrazioni di IFN-I fino a 1000 volte superiori rispetto a qualunque altra cellula.
        </p>

        <p>
          L'induzione di IFN-I è scatenata dal rilevamento molecolare di acidi nucleici virali mediante una batteria specializzata di <em>Pattern Recognition Receptors (PRR)</em>:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-sans">
          <div className="p-3 bg-white rounded-lg border border-slate-200">
            <strong className="text-slate-900 block mb-1">TLR3 (Endosomiale)</strong>
            <span>Riconosce l'RNA a doppio filamento (dsRNA) virale endosomiale; segnala tramite l'adattatore TRIF per attivare IRF3.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200">
            <strong className="text-slate-900 block mb-1">RIG-I / MDA5 (RLRs Citosolici)</strong>
            <span>Elicasi citosoliche che rilevano RNA virali a doppio filamento e 5'-trifosfato non cappato, attivando l'adattatore mitocondriale MAVS.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200">
            <strong className="text-slate-900 block mb-1">cGAS / STING & CDS</strong>
            <span>Sensori citosolici di DNA a doppio filamento: cGAS sintetizza 2'3'-cGAMP che attiva STING sul reticolo endoplasmatico, inducendo IRF3.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200">
            <strong className="text-slate-900 block mb-1">AIM2 (Inflammasoma)</strong>
            <span>Rileva dsDNA citosolico aberrante, favorendo la produzione di citochine infiammatorie mature IL-1β e IL-18.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200">
            <strong className="text-slate-900 block mb-1">NLR (NOD-like Receptors)</strong>
            <span>Sensori intracellulari di peptidoglicani batterici e molecole DAMP generate dal danno cellulare, attivanti NF-κB.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200">
            <strong className="text-slate-900 block mb-1">Stato Antivirale Intracellulare</strong>
            <span>L'IFN-I induce la sintesi di PKR (blocco traduzione virale), 2'-5' OAS / RNasi L (degradazione RNA virale) e proteine Mx GTPasi.</span>
          </div>
        </div>
      </section>

      {/* 20.5 Sinapsi Citotossica & Via Secretoria */}
      <section id="sec-20-5" className="space-y-4">
        <div className="flex items-center gap-2 text-rose-700">
          <Crosshair className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            20.5 Architettura della Sinapsi Citotossica, Traffico dei Granuli & la Via Secretoria (Perforina e Granzimi)
          </h2>
        </div>

        <p>
          Una volta differenziato, il CTL lascia il linfonodo ed effettua l'homing nel tessuto periferico infiammato. Quando riconosce la cellula bersaglio esprimente il complesso MHC-I : peptide, si forma un'area di contatto sigillata ad altissima risoluzione spaziale: la <strong>Sinapsi Citotossica</strong> (immunological synapse).
        </p>

        <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-4">
          La Riorganizzazione Spazio-Temporale del Citoscheletro (MTOC)
        </h3>
        <p>
          Il contatto iniziale dura alcuni minuti ed è rigorosamente <strong>tirosin-chinasi dipendente</strong>:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
          <li><strong>Anello Periferico di Adesione (pSMAC)</strong>: stabilizzato dal legame ad alta affinità tra l'integrina <strong>LFA-1</strong> (αLβ2) sul CTL e la molecola <strong>ICAM-1</strong> espressa sulla cellula bersaglio. Questo anello sigilla ermeticamente lo spazio extracellulare intercellulare impedendo la dispersione dei granuli ai tessuti sani adiacenti.</li>
          <li><strong>Centro di Organizzazione dei Microtubuli (MTOC / Centrosoma)</strong>: alla stimolazione del TCR, il centrosoma si muove rapidamente e si <em>polarizza</em> proprio sotto la membrana sinaptica. I microtubuli fungono da veri e propri "binari ferroviari" su cui i granuli citotossici (marcati con chinesine e dineine) scorrono convergendo nel <strong>dominio secretorio centrale (cSMAC)</strong>.</li>
        </ul>

        {/* Biochimica di Perforina e Granzimi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs mt-4">
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
            <h4 className="font-bold text-blue-900 text-sm mb-2 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-blue-700" />
              Perforine (Polimerizzazione Ca²⁺-Dipendente)
            </h4>
            <p className="text-blue-950 leading-relaxed m-0">
              Proteine conservate strutturalmente omologhe al componente C9 del MAC del complemento. All'interno dei granuli sono inattive a causa del pH acido (~5.5). Una volta esocitate nella fessura sinaptica neutra, in presenza di <strong>calcio extracellulare (Ca²⁺)</strong>, subiscono un cambio conformazionale e <strong>polimerizzano</strong> (12-18 monomeri), inserendosi nella membrana lipidica della cellula bersaglio formando un poro transmembrana cilindrico di ~16 nm. Ciò provoca lisi osmotica precoce e facilita l'ingresso dei granzimi.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
            <h4 className="font-bold text-rose-900 text-sm mb-2 flex items-center gap-1.5">
              <Skull className="w-4 h-4 text-rose-700" />
              Granzimi (Serin-Proteasi & Apoptosi a Doppio Binario)
            </h4>
            <p className="text-rose-950 leading-relaxed m-0">
              Il <strong>Granzima B</strong> è il più potente e caratterizzato: cliva substrati dopo residui di aspartato (analogamente alle caspasi). Innesca una micidiale apoptosi a doppio binario:
              <br /><strong>1. Via Diretta Caspasica:</strong> cliva direttamente la <strong>procaspasi-3</strong> attivandola a <em>caspasi-3</em>, che distrugge l'inibitore ICAD liberando la DNasi attiva <strong>CAD</strong> (frammentazione internucleosomiale del DNA a 'scala').
              <br /><strong>2. Via Danno Mitocondriale:</strong> cliva la proteina BH3-only <strong>Bid</strong> in <em>tBid</em>. tBid attiva Bax e Bak sulla membrana mitocondriale esterna, provocando la fuoriuscita di <strong>citocromo c</strong> nel citosol, l'assemblaggio dell'<strong>apoptosoma</strong> con Apaf-1 e <strong>procaspasi-9</strong>, e l'amplificazione massiva della caspasi-3.
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 mt-2">
          <strong>Il Fenomeno del Serial Killing</strong>: una volta completata la degranulazione mirata, il CTL rilascia i legami di adesione, si distacca dalla cellula bersaglio morente (che entra in apoptosi autonoma) e ricicla i propri recettori, pronto a legare e distruggere in successione multipli bersagli cellulari.
        </p>

        {/* Mappa Concettuale della Sequenza di Uccisione del CTL CD8+ */}
        <ConceptMapFlow {...MAP_LEZIONE_20_CTL_KILLING_CASCADE} />
      </section>

      {/* 20.6 Via dei Recettori di Morte Fas/FasL */}
      <section id="sec-20-6" className="space-y-4">
        <div className="flex items-center gap-2 text-rose-700">
          <Skull className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            20.6 La Via dei Recettori di Morte: Fas (CD95) / FasL, FADD e Caspasi-8
          </h2>
        </div>

        <p>
          Accanto alla via secretoria dei granuli, i CTL possono indurre la morte cellulare attraverso la <strong>via estrinseca dei recettori di morte</strong>. Il prototipo cardinale analizzato dalla professoressa è il recettore <strong>Fas (CD95 / APO-1)</strong>, membro della superfamiglia di TNF-R, espresso costitutivamente sulla superficie di molteplici cellule bersaglio.
        </p>

        <p>
          Il CTL attivato upregola il <strong>Fas-Ligando (FasL / CD178)</strong>, una proteina omotrimerica transmembrana. Il legame tra FasL e Fas provoca la trimerizzazione dei domini intracellulari di morte (<strong>Death Domain, DD</strong>) di Fas. Questo complesso recluta la proteina adattatrice citosolica <strong>FADD (Fas-Associated Death Domain)</strong> tramite interazioni omotipiche DD-DD.
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-sans space-y-2">
          <strong className="text-slate-900 block text-sm font-bold">
            La Cascata del Complesso DISC (Death-Inducing Signaling Complex)
          </strong>
          <p className="text-slate-600 leading-relaxed m-0">
            FADD possiede un dominio effettore di morte (<strong>DED</strong>) che recluta e attiva la <strong>procaspasi-8</strong> per dimerizzazione autocatalitica. La <strong>caspasi-8 attiva</strong> agisce a sua volta su due fronti identici a quelli del Granzima B:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>Cliva direttamente la <strong>caspasi-3</strong> inducendo la fase esecutrice dell'apoptosi (CAD).</li>
            <li>Cliva <strong>Bid in tBid</strong>, causando permeabilizzazione mitocondriale e rilascio di citocromo c con reclutamento della caspasi-9.</li>
          </ul>
        </div>

        <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-4">
          Ruoli Fisiologici Chiave di Fas/FasL Oltre il Killing
        </h3>
        <p>
          La professoressa sottolinea che l'asse Fas/FasL interviene in due processi biologici di importanza primaria:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <strong className="text-slate-900 block text-sm mb-1">1. Selezione Negativa nel Timo</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              I timociti della midollare che riconoscono con affinità eccessivamente elevata il complesso MHC-peptide self vanno incontro ad apoptosi clonale. Questo processo è coadiuvato da Fas, che può interagire con FasL espresso dalle cellule stromali timiche o dallo stesso timocita in modalità autocellulare (<strong>legame in cis</strong>).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <strong className="text-slate-900 block text-sm mb-1">2. AICD (Activation-Induced Cell Death)</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Al termine della risposta immune, per mantenere costante il numero totale di linfociti nell'organismo ed evitare l'ipertrofia linfoide, i T effettori ripetutamente stimolati esprimono contemporaneamente Fas e FasL, suicidandosi e spegnendo la risposta (contrazione clonale omeostatica).
            </p>
          </div>
        </div>
      </section>

      {/* 20.7 Sindrome Linfoproliferativa Autoimmune (ALPS) */}
      <section id="sec-20-7" className="space-y-4">
        <div className="flex items-center gap-2 text-rose-700">
          <AlertTriangle className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            20.7 Sindrome Linfoproliferativa Autoimmune (ALPS): Difetto Genetico di Fas/FasL
          </h2>
        </div>

        <p>
          La mancata funzionalità dell'asse apoptotico Fas/FasL è la causa eziologica della <strong>Sindrome Linfoproliferativa Autoimmune (ALPS - Autoimmune Lymphoproliferative Syndrome)</strong>, una rara immunopatologia genetica caratterizzata da:
        </p>

        <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
          <li><strong>Grave Linfoadenopatia Cronica Non-Maligna</strong>: enorme ingrossamento non neoplastico dei linfonodi (in particolare laterocervicali, occipitali e sottomandibolari) ed epatosplenomegalia dovuta all'accumulo incontrollato di cloni T attivati che non vengono eliminati via AICD.</li>
          <li><strong>Popolazione Cellulare T Anomala DNT (Doppi Negativi)</strong>: espansione caratteristica di linfociti T circolanti TCRαβ+ privi sia di CD4 sia di CD8 (TCRαβ⁺ CD4⁻ CD8⁻).</li>
          <li><strong>Autoimmunità Multiorgano</strong>: il difetto di Fas compromette anche la delezione clonale nella selezione negativa timica e periferica; i pazienti sviluppano anemia emolitica autoimmune, piastrinopenia e neutropenia.</li>
        </ul>

        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs font-sans">
          <strong className="text-amber-950 block text-sm mb-1 font-bold">
            La Perla d'Esame della Docente: Perché i Pazienti ALPS NON Hanno Immunodeficienza Virale?
          </strong>
          <p className="text-amber-900 m-0 leading-relaxed">
            Come formalmente evidenziato nel quesito d'esame (slide 11), i pazienti affetti da ALPS non presentano deficit nel controllo delle infezioni virali! Il motivo è che la <strong>via secretoria dei granuli litici (perforina e granzimi) è perfettamente integra e funzionante</strong>. Il difetto risiede esclusivamente nel recettore Fas/FasL, deputato all'omeostasi cellulare e allo spegnimento, non al killing virale primario.
          </p>
        </div>

        {/* Bivio Immunopatologico: HLH vs ALPS */}
        <ConceptMapFlow {...MAP_LEZIONE_20_HLH_AND_AICD_PATHOLOGY} />
      </section>

      {/* 20.8 Evasione Virale */}
      <section id="sec-20-8" className="space-y-4">
        <div className="flex items-center gap-2 text-rose-700">
          <ShieldAlert className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            20.8 Strategie Molecolari di Evasione Virale dall'Azione dei CTL
          </h2>
        </div>

        <p>
          Nel corso del co-adattamento evolutivo con l'ospite, i virus hanno sviluppato contromisure sofisticate per disattivare la sorveglianza dei CTL:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">1. Inibizione Proteasoma & TAP</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Il virus di Epstein-Barr (EBV, tramite la proteina EBNA-1 ricca di ripetizioni Gly-Ala) impedisce la processazione proteasomica. Il virus Herpes Simplex (HSV) esprime la proteina <strong>ICP47</strong>, che blocca il canale citosolico di TAP impedendo la traslocazione dei peptidi virali nel reticolo endoplasmatico.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">2. Distruzione o Ritenzione di MHC-I</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Il Citomegalovirus (CMV) esprime le proteine <strong>US2 e US11</strong>, che scortano le catene pesanti di MHC-I fuori dal RE nel citosol per degradazione proteasomica (ERAD), e <strong>US3</strong>, che le trattiene nel RE. L'Adenovirus (E19) trattiene MHC-I nel Golgi. Senza MHC-I in superficie, la cellula infetta è invisibile al CTL.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">3. Inibitori dei Granzimi & Caspasi</strong>
            <p className="text-slate-600 m-0 leading-relaxed">
              Molti virus producono inibitori intracellulari diretti della cascata litica: Adenovirus esprime inibitori sierologici del Granzima B; CMV sintetizza la proteina <em>vMIA</em> che blocca il collasso mitocondriale e la liberazione del citocromo c; Poxvirus sintetizza <em>CrmA</em>, potente inibitore serpinico delle caspasi-1 e caspasi-8.
            </p>
          </div>
        </div>
      </section>

      {/* 20.9 Immunità Antitumorale & Checkpoint PD-1/PD-L1 */}
      <section id="sec-20-9" className="space-y-4">
        <div className="flex items-center gap-2 text-rose-700">
          <Award className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            20.9 Immunità Antitumorale, Infiltrato Linfocitario Intratumorale (TILs) & Checkpoint PD-1 / PD-L1
          </h2>
        </div>

        <p>
          Le cellule neoplastiche esprimono molteplici categorie di <strong>Tumor Rejection Antigens (TRA)</strong> riconosciuti dai CTL:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-700 text-xs sm:text-sm">
          <li><strong>Prodotti di oncogeni o oncosoppressori mutati</strong> (es. Ras mutato, Bcr/Abl nelle LMC, p53 mutata).</li>
          <li><strong>Antigeni oncofetali o differenziativi sovraespressi</strong> (HER2/neu nel carcinoma mammario, PSA nel tumore prostatico, MAGE, MART-1, tirosinasi nel melanoma, CEA nel colon-retto).</li>
          <li><strong>Proteine di virus oncogeni</strong> (oncoproteine E6 ed E7 del Papillomavirus umano HPV, EBNA di EBV).</li>
        </ul>

        {/* Effetti dell'infiltrato linfocitario */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-sans">
          <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-emerald-600" />
            Effetti dell'Infiltrato Linfocitario sulla Prognosi (Immunoscore)
          </h4>
          <p className="text-slate-600 leading-relaxed mb-2">
            Come illustrato nella celebre metanalisi proiettata a lezione (slide 8), la densità e la localizzazione dei <strong>linfociti T citotossici CD8+ (TILs)</strong> nel cuore del tumore e al margine invasivo correlano in modo statisticamente robusto con una <strong>prognosi altamente favorevole</strong> nella quasi totalità dei tumori solidi epiteliali (melanoma, carcinoma del colon-retto, NSCLC polmonare, carcinoma mammario). Al contrario, la prevalenza di <strong>macrofagi M2</strong> e di <strong>Treg</strong> si associa rigidamente a <strong>prognosi sfavorevole</strong> per l'induzione di immunosoppressione locale e metastatizzazione.
          </p>
        </div>

        {/* Asse PD-1 / PD-L1 e Immunoterapia */}
        <div className="p-4 rounded-xl bg-indigo-50/80 border border-indigo-200 text-xs font-sans space-y-2">
          <div className="flex items-center gap-2">
            <Pill className="w-5 h-5 text-indigo-700 shrink-0" />
            <h4 className="font-bold text-indigo-950 text-sm m-0">
              Esaurimento Funzionale (Exhaustion) & Inibitori dei Checkpoint Immunitari (Nobel 2018)
            </h4>
          </div>
          <p className="text-indigo-950 leading-relaxed m-0">
            La stimolazione antigenica cronica non risolta nel microambiente tumorale induce l'upregolazione del recettore inibitorio <strong>PD-1 (Programmed Cell Death-1)</strong> sui CTL. Contemporaneamente, le cellule tumorali e i macrofagi M2 stromali iper-esprimono i ligandi <strong>PD-L1 (B7-H1)</strong> e <strong>PD-L2 (B7-DC)</strong>. Il legame attiva il dominio inibitorio ITSM di PD-1, che recluta la fosfatasi <strong>SHP-2</strong>: SHP-2 defosforila ZAP-70 e CD28, spegnendo la capacità citotossica e proliferativa del CTL e inducendo l'<strong>esaurimento funzionale (exhaustion)</strong>.
          </p>
          <p className="text-indigo-900 leading-relaxed m-0">
            <strong>Rivoluzione Clinica dei Checkpoint Inhibitors</strong>: gli anticorpi monoclonali bloccanti <strong>anti-PD-1</strong> (Pembrolizumab, Nivolumab) o <strong>anti-PD-L1</strong> (Atezolizumab, Durvalumab) interrompono fisicamente questa interazione inibitoria. Privato del segnale di stop, il CTL riacquista la motilità, polimerizza nuovamente il centrosoma e scatena il serial killing contro la neoplasia, con risposte cliniche durature anche in stadi metastatici avanzati.
          </p>
        </div>
      </section>

      {/* 20.10 Sindromi Emofagocitiche Famigliari (HLH) */}
      <section id="sec-20-10" className="space-y-4">
        <div className="flex items-center gap-2 text-rose-700">
          <Flame className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
            20.10 Sindromi Emofagocitiche Famigliari (HLH): Difetti della Macchina Esocitica, Albinismo & Tempesta Citochinica
          </h2>
        </div>

        <p>
          Le <strong>Sindromi Emofagocitiche Famigliari (HLH - Familial Hemophagocytic Lymphohistiocytosis)</strong> costituiscono un gruppo letale di malattie genetiche autosomiche recessive causate da mutazioni che disabilitano la biogenesi, il docking, il priming o la fusione dei granuli citotossici nei linfociti CTL e nelle cellule NK:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-sans">
          <div className="p-3 bg-white rounded-lg border border-slate-200">
            <strong className="text-slate-900 block mb-1">FHL-2: Mutazione Perforina (PRF1)</strong>
            <span>La causa più frequente: i granuli si fondono regolarmente, ma sono privi di perforina funzionale. Nessuna formazione di pori nella cellula bersaglio.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200">
            <strong className="text-slate-900 block mb-1">FHL-3: Mutazione Munc13-4 (UNC13D)</strong>
            <span>Proteina essenziale del complesso SNARE per il <em>priming</em> del granulo a ridosso della membrana plasmatica prima dell'apertura del poro di fusione.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200">
            <strong className="text-slate-900 block mb-1">Sindrome di Griscelli tipo 2 (Rab27a)</strong>
            <span>La GTPasi Rab27a àncora il granulo al citoscheletro subcorticale actinico. La mutazione blocca il docking.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200">
            <strong className="text-slate-900 block mb-1">FHL-4: Sintassina-11 (STX11)</strong>
            <span>t-SNARE della membrana plasmatica necessaria per la fusione bicatenaria delle membrane lipidiche.</span>
          </div>
        </div>

        {/* Patogenesi dell'Emofagocitosi & Albinismo */}
        <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 text-xs font-sans space-y-2">
          <h4 className="font-bold text-rose-950 text-sm flex items-center gap-2">
            <Skull className="w-4 h-4 text-rose-700" />
            La Catastrofe Immunologica: Perché il Deficit di Uccisione Scatena l'Emofagocitosi?
          </h4>
          <p className="text-rose-950 leading-relaxed m-0">
            Normalmente, il CTL uccide la cellula infettata e la reazione si conclude. Nell'HLH, il CTL riconosce la cellula infetta (spesso da virus di Epstein-Barr o Citomegalovirus) ma <strong>non riesce ad ucciderla</strong>. Persistendo la stimolazione antigenica sul TCR, il CTL rilascia quantitativi abnormi e continuativi di <strong>Interferone-γ (IFN-γ)</strong>.
          </p>
          <p className="text-rose-950 leading-relaxed m-0">
            L'eccesso sistemico di IFN-γ provoca l'<strong>iperattivazione massiva e incontrollata dei macrofagi</strong> tessutali. I macrofagi acquisiscono un appetito fagocitico aberrante e iniziano a fagocitare attivamente gli elementi figurati del sangue all'interno del midollo osseo, della milza e del fegato (<strong>emofagocitosi</strong>), causando la classica triade clinica: <strong>anemia severa, piastrinopenia ed epatosplenomegalia</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
            <div className="p-2.5 bg-white rounded border border-rose-200">
              <strong className="text-slate-900 block font-semibold mb-0.5">La Correlazione con l'Albinismo Parziale</strong>
              <span className="text-slate-600">
                Nei pazienti con mutazione di <em>Rab27a</em> (Sindrome di Griscelli) o <em>Munc13-4</em>, la medesima macchina SNARE è richiesta nei melanociti per il traffico dei melanosomi. Il blocco del rilascio di melanina provoca capelli argentei e ipopigmentazione cutanea (albinismo parziale) associata a immunodeficienza.
              </span>
            </div>
            <div className="p-2.5 bg-white rounded border border-rose-200">
              <strong className="text-slate-900 block font-semibold mb-0.5">Cytokine Storm & Terapia Biologica</strong>
              <span className="text-slate-600">
                L'iperattivazione macrofagica instaura una letale <strong>Cytokine Release Syndrome (CRS)</strong> con picchi sistemici di IL-6, IL-1β e TNF-α, coagulopatia e neurotossicità. La terapia cardine include il trapianto di midollo allogenico, corticosteroidi e mAb mirati come <strong>Tocilizumab (anti-IL-6R)</strong> o <strong>Emapalumab (anti-IFN-γ)</strong>.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SIMULATORE 1: CTL SYNAPSE & HLH MUTATION ENGINE */}
      <section id="sim-ctl-synapse" className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold">
                <Crosshair className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 m-0">
                  Simulatore 1: Laboratorio della Sinapsi Citotossica & Macchina Genetica HLH
                </h3>
                <p className="text-xs text-slate-500 m-0">
                  Esplora le 4 fasi della sinapsi litica e simula le mutazioni genetiche dell'apparato secretorio (Perforina, Rab27a, Munc13-4, Sintassina-11).
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-rose-100 text-rose-800 border border-rose-200">
              Interactive Synapse & Exocytosis Engine
            </span>
          </div>
        </div>

        {/* Synapse Phase Selector & HLH Mutation Selector */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Fase Sinapsi:</span>
            <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50">
              <button
                onClick={() => setSynapsePhase('contact')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  synapsePhase === 'contact' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                1. Coniugato (LFA-1/TCR)
              </button>
              <button
                onClick={() => setSynapsePhase('polarization')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  synapsePhase === 'polarization' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                2. Polarizzazione MTOC
              </button>
              <button
                onClick={() => setSynapsePhase('exocytosis')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  synapsePhase === 'exocytosis' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                3. Docking & Esocitosi
              </button>
              <button
                onClick={() => setSynapsePhase('killing')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  synapsePhase === 'killing' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                4. Apoptosi Bersaglio
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Mutazione Ereditaria HLH:</span>
            <select
              value={hlhMutation}
              onChange={(e) => setHlhMutation(e.target.value as any)}
              className="p-1.5 rounded-lg border border-slate-300 bg-white text-slate-800 font-semibold focus:outline-none focus:border-rose-500"
            >
              <option value="none">Nessuna (Genotipo Fisiologico WT)</option>
              <option value="perforin">FHL-2: Mutazione Perforina (PRF1)</option>
              <option value="munc13">FHL-3 / Griscelli: Munc13-4 o Rab27a</option>
              <option value="syntaxin">FHL-4: Mutazione Sintassina-11 (STX11)</option>
            </select>
          </div>
        </div>

        {/* Dynamic Board */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Stato del Macchinario Molecolare</span>
              <strong className="text-slate-900 text-sm block mt-1">
                {synapsePhase === 'contact' && 'Riconoscimento & Sigillo Periferico'}
                {synapsePhase === 'polarization' && 'Riorganizzazione MTOC & Microtubuli'}
                {synapsePhase === 'exocytosis' && (hlhMutation === 'none' ? 'Esocitosi Granuli Attiva' : 'Blocco Esocitico / Difetto Litico')}
                {synapsePhase === 'killing' && (hlhMutation === 'none' ? 'Attivazione Caspasi-3 & Apoptosi' : 'FALLIMENTO Killing: Iper-secrezione IFN-γ')}
              </strong>
              <p className="text-slate-600 mt-1 m-0">
                {synapsePhase === 'contact' && 'TCR/CD8 lega MHC-I. LFA-1 lega ICAM-1 formando il pSMAC periferico che isola la fessura intercellulare.'}
                {synapsePhase === 'polarization' && 'Il centrosoma (MTOC) ruota verso la sinapsi. I granuli viaggiano su binari di tubulina verso la membrana cSMAC.'}
                {synapsePhase === 'exocytosis' && (
                  hlhMutation === 'none'
                    ? 'Rab27a àncora il granulo, Munc13-4 media il priming, Sintassina-11 fonde le membrane: rilascio di Perforina e Granzimi.'
                    : hlhMutation === 'perforin'
                    ? 'I granuli si fondono, ma la perforina è tronca/inattiva: nessun poro nella membrana del bersaglio!'
                    : hlhMutation === 'munc13'
                    ? 'Difetto di Munc13-4 o Rab27a: i granuli non riescono ad effettuare il docking/priming. Blocco della fusione.'
                    : 'Difetto di Sintassina-11 (t-SNARE): mancata fusione della membrana vescicolare. Nessun rilascio.'
                )}
                {synapsePhase === 'killing' && (
                  hlhMutation === 'none'
                    ? 'Perforina polimerizza con Ca²⁺, Granzima B penetra e cliva Caspasi-3/CAD e Bid. La cellula tumorale/infetta muore in apoptosi.'
                    : 'La cellula target rimane integra e continua a stimolare il TCR. Il CTL non riesce a staccarsi e rilascia una tempesta tossica di IFN-γ.'
                )}
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Esito Cellulare Bersaglio</span>
              <div className="mt-2">
                {hlhMutation === 'none' ? (
                  synapsePhase === 'killing' ? (
                    <div className="p-2 bg-emerald-50 text-emerald-900 rounded border border-emerald-200">
                      <strong>Lisi Apoptotica Completata:</strong> Frammentazione del DNA, blebbing di membrana, distacco del CTL pronto per il *serial killing*.
                    </div>
                  ) : (
                    <div className="p-2 bg-slate-100 text-slate-700 rounded">
                      Progressione regolare della sinapsi citotossica...
                    </div>
                  )
                ) : (
                  <div className="p-2 bg-rose-50 text-rose-900 rounded border border-rose-200">
                    <strong>BERSAGLIO INTATTO (Killing Fallito):</strong> La cellula infettata da EBV/CMV sopravvive. La mancata lisi impedisce il ciclo di disattivazione fisiologico.
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Quadro Clinico Sistemico</span>
              <div className="mt-2">
                {hlhMutation === 'none' ? (
                  <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-800 font-bold block">
                    Omeostasi & Clearance Infettiva Fisiologica
                  </span>
                ) : (
                  <div className="space-y-1">
                    <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold block">
                      Sindrome Emofagocitica (HLH) Conclamata
                    </span>
                    <p className="text-[11px] text-slate-600 m-0 leading-tight">
                      IFN-γ stimola cronicamente i macrofagi midollari e splenici: <strong>Emofagocitosi di globuli rossi e piastrine</strong> (pancitopenia grave, splenomegalia massiva).
                      {hlhMutation === 'munc13' && ' Associata ad Albinismo parziale per deficit di trasporto melanosomi.'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIMULATORE 2: CHECKPOINT IMMUNITARI & IMMUNOTERAPIA */}
      <section id="sim-checkpoint-lab" className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
                <Pill className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 m-0">
                  Simulatore 2: Checkpoint Immunitari Intratumorali & Terapia con Anticorpi Monoclonali
                </h3>
                <p className="text-xs text-slate-500 m-0">
                  Simula l'interazione tra PD-1 sui CTL e i ligandi PD-L1/PD-L2 su cellule tumorali e macrofagi M2; inietta i monoclonali per ripristinare il killing.
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-100 text-indigo-800 border border-indigo-200">
              Immunotherapy & TILs Lab
            </span>
          </div>
        </div>

        {/* Drug Selector & Infiltrate Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Terapia Monoclonale:</span>
            <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50">
              <button
                onClick={() => setCheckpointDrug('none')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  checkpointDrug === 'none' ? 'bg-slate-700 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Nessun Farmaco (Controllo)
              </button>
              <button
                onClick={() => setCheckpointDrug('anti-pd1')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  checkpointDrug === 'anti-pd1' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Anti-PD-1 (Pembrolizumab / Nivolumab)
              </button>
              <button
                onClick={() => setCheckpointDrug('anti-pdl1')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  checkpointDrug === 'anti-pdl1' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Anti-PD-L1 (Atezolizumab)
              </button>
              <button
                onClick={() => setCheckpointDrug('anti-ctla4')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  checkpointDrug === 'anti-ctla4' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Anti-CTLA-4 (Ipilimumab)
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-700">Infiltrato Macrofagico M2 (TAM):</span>
            <button
              onClick={() => setM2MacrophageInfiltrate(!m2MacrophageInfiltrate)}
              className={`px-3 py-1.5 rounded-lg font-bold border transition-all ${
                m2MacrophageInfiltrate
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-slate-100 text-slate-600 border-slate-200'
              }`}
            >
              {m2MacrophageInfiltrate ? 'Macrofagi M2 Presenti (PD-L2+)' : 'Macrofagi M2 Assenti'}
            </button>
          </div>
        </div>

        {/* Dynamic Board */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Stato di Segnalazione del CTL</span>
              <div className="mt-1">
                {checkpointDrug === 'anti-pd1' || checkpointDrug === 'anti-pdl1' ? (
                  <div>
                    <span className="text-emerald-700 font-bold text-sm block">Segnalazione TCR Riattivata</span>
                    <p className="text-slate-600 m-0 mt-0.5">
                      Il monoclonale blocca il checkpoint. La fosfatasi SHP-2 non viene reclutata; ZAP-70 e CD28 trasducono il segnale di degranulazione litica.
                    </p>
                  </div>
                ) : (
                  <div>
                    <span className="text-rose-700 font-bold text-sm block">Esaurimento Funzionale (Exhaustion)</span>
                    <p className="text-slate-600 m-0 mt-0.5">
                      PD-1 lega PD-L1 (sul tumore) {m2MacrophageInfiltrate ? 'e PD-L2 (sui macrofagi M2)' : ''}. La fosfatasi SHP-2 spegne la sinapsi: CTL anergico.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Efficacia Citotossica Intratumorale</span>
              <div className="mt-1">
                {checkpointDrug === 'anti-pd1' || checkpointDrug === 'anti-pdl1' ? (
                  <div className="p-2 bg-emerald-50 text-emerald-900 rounded border border-emerald-200">
                    <strong>Serial Killing Operativo:</strong> Rapida regressione della massa tumorale, aumento dei linfociti CD8+ effettori attivi (TILs).
                  </div>
                ) : checkpointDrug === 'anti-ctla4' ? (
                  <div className="p-2 bg-indigo-50 text-indigo-900 rounded border border-indigo-200">
                    <strong>Priming Linfonodale Amplificato:</strong> Aumenta il numero di nuovi cloni CTL generati nei linfonodi drenanti, ma l'asse PD-1/PD-L1 intratumorale persiste parzialmente.
                  </div>
                ) : (
                  <div className="p-2 bg-rose-50 text-rose-900 rounded border border-rose-200">
                    <strong>Evasione Neoplastica Completa:</strong> Il tumore cresce indisturbato; i CTL sono bloccati nello stroma peri-tumorale.
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Immunoscore Prognostico Stimato</span>
              <div className="mt-1">
                {checkpointDrug === 'anti-pd1' || checkpointDrug === 'anti-pdl1' ? (
                  <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-800 font-bold block text-center">
                    Immunoscore Alto (Prognosi Favorevole)
                  </span>
                ) : m2MacrophageInfiltrate ? (
                  <span className="px-2 py-1 rounded bg-rose-100 text-rose-800 font-bold block text-center">
                    Immunoscore Basso / Stroma M2 (Prognosi Sfavorevole)
                  </span>
                ) : (
                  <span className="px-2 py-1 rounded bg-amber-100 text-amber-800 font-bold block text-center">
                    Immunoscore Intermedio
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABELLE SINOTTICHE 20.1 e 20.2 */}
      <section className="space-y-6">
        {/* Tabella 20.1 */}
        <div id="tabella-20-1" className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-rose-700" />
            <h3 className="text-lg font-bold text-slate-900 m-0 font-serif-heading">
              Tabella 20.1: Macchinario di Esocitosi dei Granuli Citotossici & Sindromi Emofagocitiche (HLH)
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse font-sans">
              <thead>
                <tr className="bg-slate-100 text-slate-900 border-b border-slate-300">
                  <th className="p-3 font-bold">Gene Mutato</th>
                  <th className="p-3 font-bold">Proteina Codificata & Ruolo</th>
                  <th className="p-3 font-bold">Fase del Traffico Vescicolare</th>
                  <th className="p-3 font-bold">Patologia Genetica Correlata</th>
                  <th className="p-3 font-bold">Fenotipo Clinico Saliente</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-rose-900">PRF1</td>
                  <td className="p-3"><strong>Perforina</strong>: polimerizzazione Ca²⁺-dipendente e poro litico</td>
                  <td className="p-3">Fase effettrice litica post-esocitosi</td>
                  <td className="p-3 font-semibold">FHL-2 (Familial HLH tipo 2)</td>
                  <td className="p-3">Pancitopenia, emofagocitosi midollare, epatosplenomegalia, tempesta citochinica IFN-γ</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-rose-900">UNC13D</td>
                  <td className="p-3"><strong>Munc13-4</strong>: priming del granulo per l'apertura del poro di fusione</td>
                  <td className="p-3">Priming a ridosso della membrana</td>
                  <td className="p-3 font-semibold">FHL-3 (Familial HLH tipo 3)</td>
                  <td className="p-3">Emofagocitosi fulminante, mancato rilascio dei granuli citotossici e dei melanosomi</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-rose-900">RAB27A</td>
                  <td className="p-3"><strong>Rab27a</strong>: piccola GTPasi di ancoraggio del granulo all'actina</td>
                  <td className="p-3">Tethering e docking subcorticale</td>
                  <td className="p-3 font-semibold">Sindrome di Griscelli tipo 2 (GS2)</td>
                  <td className="p-3 text-amber-800 font-bold">HLH + Albinismo parziale (capelli argentati per accumulo melanosomi nei melanociti)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-rose-900">STX11</td>
                  <td className="p-3"><strong>Sintassina-11</strong>: t-SNARE della membrana plasmatica</td>
                  <td className="p-3">Fusione bicatenaria della membrana</td>
                  <td className="p-3 font-semibold">FHL-4 (Familial HLH tipo 4)</td>
                  <td className="p-3">Linfoistiocitosi emofagocitica autosomica recessiva infantile, iperferritinemia estrema</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-800">FAS / FASLG</td>
                  <td className="p-3"><strong>Fas (CD95) / FasL</strong>: recettore di morte e ligando (DISC/FADD)</td>
                  <td className="p-3">Via estrinseca apoptotica / AICD</td>
                  <td className="p-3 font-semibold text-blue-900">ALPS (Sindrome Linfoproliferativa Autoimmune)</td>
                  <td className="p-3 text-emerald-800">Linfoadenopatia massiva, cellule DNT (CD4-CD8-), autoimmunità. <strong>Immunità virale INTATTA</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabella 20.2 */}
        <div id="tabella-20-2" className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Skull className="w-5 h-5 text-rose-700" />
            <h3 className="text-lg font-bold text-slate-900 m-0 font-serif-heading">
              Tabella 20.2: Vie Apoptotiche dei CTL a Confronto: Via Secretoria vs Via Recettori di Morte
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse font-sans">
              <thead>
                <tr className="bg-slate-100 text-slate-900 border-b border-slate-300">
                  <th className="p-3 font-bold">Caratteristica Biologica</th>
                  <th className="p-3 font-bold text-blue-900">Via Secretoria (Granuli Litici)</th>
                  <th className="p-3 font-bold text-purple-900">Via Recettori di Morte (Fas / FasL)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-semibold">Mediatori Principali</td>
                  <td className="p-3">Perforina e Granzimi (in primis Granzima B)</td>
                  <td className="p-3">Fas Ligando (FasL/CD178) su CTL e Fas (CD95) su bersaglio</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-semibold">Dipendenza da Calcio (Ca²⁺)</td>
                  <td className="p-3 font-bold text-emerald-700">Sì (obbligatorio per la polimerizzazione della perforina)</td>
                  <td className="p-3">No (interazione proteina-proteina trimero recettoriale)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-semibold">Caspasi Iniziatrice Reclutata</td>
                  <td className="p-3">Attivazione diretta della Procaspasi-3 e Caspasi-9 via tBid</td>
                  <td className="p-3">Procaspasi-8 reclutata dal dominio DED dell'adattatore FADD</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-semibold">Coinvolgimento del Mitocondrio</td>
                  <td className="p-3">Sì (Granzima B cliva Bid in tBid con rilascio di Citocromo c)</td>
                  <td className="p-3">Sì (Caspasi-8 cliva Bid amplificando la via intrinseca)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-semibold">Caspasi Esecutrice Comune</td>
                  <td className="p-3 font-bold">Caspasi-3 attiva (cliva ICAD liberando la DNasi CAD)</td>
                  <td className="p-3 font-bold">Caspasi-3 attiva (cliva ICAD liberando la DNasi CAD)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-semibold">Ruolo Fisiologico Prevalente</td>
                  <td className="p-3">Killing di cellule infettate da virus e cellule tumorali (rapido)</td>
                  <td className="p-3">Omeostasi T periferica, contrazione clonale post-infezione (AICD), selezione negativa</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-semibold">Patologia da Deficit Genetico</td>
                  <td className="p-3 font-bold text-rose-700">Sindromi Emofagocitiche Famigliari (HLH tipo 2, 3, 4)</td>
                  <td className="p-3 font-bold text-blue-800">Sindrome Linfoproliferativa Autoimmune (ALPS)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={quizData} lessonNumber={20} title="Verifica dell'Apprendimento · Lezione 20" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={flashcardsData} lessonNumber={20} title="Flashcard di Ripasso Attivo · Lezione 20" />
    </article>
  );
};
