import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import React, { useState, useEffect } from 'react';
import { InlineProcessFlowDiagram } from './InlineProcessFlowDiagram';
import {
  ShieldAlert,
  Dna,
  Activity,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Zap,
  HelpCircle,
  BookOpen,
  Award,
  Layers,
  Sparkles,
  Search,
  FileText,
  Clock,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Cpu,
  Microscope,
  Stethoscope,
  Globe,
  Share2,
  Lock,
  Unlock,
  Sliders,
  Check
} from 'lucide-react';

interface Lezione33ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione33View: React.FC<Lezione33ViewProps> = ({ isSerif, fontSize }) => {
  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // State for Simulator 1: Ciclo Replicativo & Target Farmacologici
  const [selectedStrain, setSelectedStrain] = useState<'R5' | 'X4'>('R5');
  const [selectedCellTarget, setSelectedCellTarget] = useState<'macrophage' | 'tcell'>('macrophage');
  const [activeDrugClass, setActiveDrugClass] = useState<'none' | 'entry' | 'fusion' | 'nrti' | 'insti' | 'pi'>('none');
  const [replicationStep, setReplicationStep] = useState<number>(1);

  // State for Simulator 2: Cinetica Trifasica, Biomarcatori & Profilo Clinico
  const [simulationPhase, setSimulationPhase] = useState<'eclipse' | 'acute_nat' | 'seroconversion' | 'latency_early' | 'latency_late' | 'aids_terminal'>('latency_early');
  const [patientGenotype, setPatientGenotype] = useState<'wildtype' | 'ccr5_delta32_het' | 'ccr5_delta32_hom' | 'ltnp_kir_b'>('wildtype');
  const [haartActive, setHaartActive] = useState<boolean>(false);

  // State for Flashcards
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  // State for Quiz
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [showQuizResults, setShowQuizResults] = useState<boolean>(false);

  const toggleCard = (id: number) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectQuiz = (qIdx: number, oIdx: number) => {
    setQuizAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
  };

  // Flashcards Data
  const flashcardsData = [
    {
      id: 1,
      q: "Qual è il recettore primario e quali sono i due corecettori chemochinici fondamentali per l'infezione da HIV-1?",
      a: "Il recettore primario è il CD4 (dominio D1 extracellulare). I corecettori per chemochine sono CCR5 (ceppi M-tropici R5 su macrofagi e DC, trasmissione iniziale) e CXCR4 (ceppi T-tropici X4 su linfociti T CD4+, fasi avanzate)."
    },
    {
      id: 2,
      q: "Qual è la funzione immunologica e patogenetica cardine della proteina accessoria virale Nef?",
      a: "Nef downregola ed instrada verso la degradazione lisosomiale i complessi MHC-I nascenti dall'apparato di Golgi (evasione dai CTL CD8+). Inoltre induce estroflessioni filiformi (filopodi) nei macrofagi che per trogocitosi trasferiscono Nef ai linfociti B, inibendo lo scambio isotipico."
    },
    {
      id: 3,
      q: "Cosa si intende per 'Fase di Eclissi' e qual è la cinetica di comparsa dei marcatori diagnostici (NAT, p24, anticorpi)?",
      a: "La fase di eclissi (primi 4-10 giorni) è il periodo in cui il virus replica nella mucosa e nei linfonodi ma non è rilevabile nel sangue. Al giorno 10 si positivizza l'RNA virale (NAT); al giorno 18 l'antigene capsico p24; tra i giorni 21 e 25 si verifica la sieroconversione con comparsa prima di IgM e poi di IgG."
    },
    {
      id: 4,
      q: "Quali caratteristiche immunologiche e genetiche definiscono i 'Long-Term Non-Progressors' (LTNP)?",
      a: "Latenza spontanea > 7-10 anni senza terapia con conta CD4 > 600/μL. Si associano a CTL polifunzionali ad ampio spettro, anticorpi ampiamente neutralizzanti (bNAbs), aplotipo KIR-B (ricco di recettori NK attivatori KIR-S) e varianti genetiche come la delezione eterozigote di CCR5 (CCR5-Δ32)."
    },
    {
      id: 5,
      q: "Qual è il criterio clinico-laboratoristico cardine che sancisce la transizione da latenza ad AIDS conclamato?",
      a: "La caduta della conta assoluta dei linfociti T CD4+ al di sotto di 200 cellule/μL (o < 14%), oppure l'insorgenza di una o più infezioni opportunistiche o neoplasie AIDS-definitive (rapporto CD4/CD8 invertito, patologicamente < 0.2)."
    },
    {
      id: 6,
      q: "Perché la terapia HAART/cART, pur abbattendo la viremia sotto la soglia di rilevabilità (U=U), non eradica l'infezione?",
      a: "A causa della costituzione precoce (entro 10-20 giorni) di serbatoi cellulari latenti (Reservoir) in macrofagi e linfociti T CD4+ memory a riposo. Queste cellule hanno DNA provirale integrato ma non trascrivono proteine virali: non espongono peptidi su MHC-I e risultano del tutto invisibili a CTL e farmaci."
    }
  ];

  // Quiz Questions Data (10 MCQs)
  const quizData = [
    {
      question: "1. Nel 2008, Françoise Barré-Sinoussi e Luc Montagnier sono stati insigniti del Premio Nobel per la Medicina per quale fondamentale traguardo?",
      options: [
        "L'identificazione del recettore CD4",
        "La sintesi del primo farmaco inibitore della proteasi virale",
        "La scoperta e il clonaggio del virus dell'immunodeficienza umana (HIV-1)",
        "La scoperta del corecettore CCR5 e della delezione Δ32"
      ],
      correct: 2,
      rationale: "Françoise Barré-Sinoussi e Luc Montagnier isolarono per la prima volta l'HIV-1 presso l'Istituto Pasteur di Parigi nel 1983 (originariamente denominato LAV) e ne effettuarono il clonaggio genetico, scoperta che valse loro il Premio Nobel per la Fisiologia o Medicina nel 2008."
    },
    {
      question: "2. Durante l'infezione cellulare, la glicoproteina di superficie gp120 subisce un cambio conformazionale cruciale in seguito a quale evento?",
      options: [
        "Al clivaggio proteolitico mediato dalla proteasi virale intracellulare",
        "Al legame con il dominio D1 extracellulare della molecola CD4",
        "All'internalizzazione lisosomiale mediata da clatrina",
        "Al contatto diretto con le sequenze LTR dell'RNA genomico"
      ],
      correct: 1,
      rationale: "Il legame trimerico di gp120 con l'ansa D1 del CD4 induce un riarrangiamento conformazionale che espone l'ansa flessibile V3. Questo cambio consente l'interazione ad alta affinità con il corecettore per chemochine (CCR5 o CXCR4) e la successiva dislocazione fusogena di gp41."
    },
    {
      question: "3. Quale fra le seguenti affermazioni descrive correttamente la differenza biologica tra ceppi virali M-tropici e T-tropici di HIV-1?",
      options: [
        "I ceppi M-tropici impiegano CXCR4 e infettano preferenzialmente linfociti T naive",
        "I ceppi M-tropici impiegano CCR5 e sono responsabili della trasmissione virale primaria per via mucosale",
        "I ceppi T-tropici infettano esclusivamente le cellule di Kupffer epatiche",
        "I ceppi T-tropici impiegano DC-SIGN per la fusione di membrana senza passare per il CD4"
      ],
      correct: 1,
      rationale: "I ceppi M-tropici (R5) utilizzano il corecettore CCR5 espresso su macrofagi, cellule dendritiche e T CD4+ di memoria; dominano nelle fasi iniziali dell'infezione e nella trasmissione mucosale. I ceppi T-tropici (X4) utilizzano CXCR4 ed emergono tipicamente nelle fasi avanzate."
    },
    {
      question: "4. Qual è il ruolo del recettore DC-SIGN espresso sulle cellule dendritiche nella storia naturale dell'infezione da HIV?",
      options: [
        "Media la lisi osmotica del virione tramite la via classica del complemento",
        "Lega i domini glucidici di gp120 consentendo alle DC di trasportare il virus ai linfonodi regionali e presentarlo ai T CD4+",
        "Agisce da inibitore naturale della trascrittasi inversa",
        "Sostituisce il CD4 permettendo la fusione diretta mediata da gp41"
      ],
      correct: 1,
      rationale: "DC-SIGN è una lectina di tipo C che lega residui mannosilati della proteina gp120 altamente glicosilata; le cellule dendritiche captano il virus nella mucosa senza necessariamente subirne un'infezione litica e fungono da 'cavallo di Troia' migrando nei linfonodi per trasmetterlo ai T CD4+."
    },
    {
      question: "5. La sequenza cronologica corretta dei test laboratoristici che si positivizzano dopo l'infezione acuta da HIV è:",
      options: [
        "Anticorpi IgG → Antigene p24 → Test molecolare RNA (NAT)",
        "Antigene p24 → Anticorpi IgM → Test molecolare RNA (NAT)",
        "Test molecolare RNA virale (NAT, giorno 10) → Antigene p24 (giorno 18) → Sieroconversione IgM/IgG (giorni 21-25)",
        "Sieroconversione IgG → Test di Western Blot → Fase di eclissi"
      ],
      correct: 2,
      rationale: "Dopo la finestra di eclissi (primi 4-10 giorni), il primo marcatore circolante è l'RNA virale plasmatico rilevato dal test molecolare NAT (~10° giorno). Al 18° giorno compare l'antigene capsico p24, seguito al 21°-25° giorno dalla sieroconversione anticorpale (IgM e subito dopo IgG anti-envelope/core)."
    },
    {
      question: "6. Quale evidenza genetica ha reso celebre il caso del 'Paziente di Berlino' (Timothy Ray Brown), primo individuo guarito dall'infezione da HIV?",
      options: [
        "L'induzione di ipermutazione somatica artificiale nel gene della proteasi virale",
        "Il trapianto di cellule staminali emopoietiche da un donatore omozigote per la mutazione CCR5-Δ32",
        "La somministrazione continuativa di anticorpi monoclonali anti-CXCR4",
        "L'amplificazione genica dell'aplotipo KIR-A inibitorio"
      ],
      correct: 1,
      rationale: "Il Paziente di Berlino ricevette nel 2007 un trapianto di midollo allogenico per leucemia mieloide acuta da un donatore con delezione in omozigosi CCR5-Δ32. Le nuove cellule emopoietiche rigenerate mancavano del corecettore funzionale CCR5, rendendole refrattarie all'infezione dei ceppi R5 residenti e portando alla guarigione sterilizzante."
    },
    {
      question: "7. In quale modo la proteina virale Nef favorisce l'immunoevasione di HIV dai linfociti T citotossici (CTL CD8+)?",
      options: [
        "Clivando direttamente la perforina nei granuli citotossici",
        "Inibendo la trascrizione del recettore per IL-2 nei linfociti CD8+",
        "Inducendo l'internalizzazione e degradazione lisosomiale delle molecole MHC di classe I nascenti dall'apparato di Golgi",
        "Stimolando la secrezione di anticorpi IgE neutralizzanti"
      ],
      correct: 2,
      rationale: "Nef lega i complessi MHC-I nascenti nel trans-Golgi network reindirizzandoli verso i lisosomi per la degradazione; ciò abbatte la densità superficiale di MHC-I sulle cellule infettate, impedendo il riconoscimento e la lisi da parte dei CTL CD8+ virus-specifici."
    },
    {
      question: "8. Quale infezione opportunistica fungina polmonare è considerata una delle più frequenti manifestazioni patognomoniche di AIDS all'esordio?",
      options: [
        "Polmonite da Pneumocystis jirovecii (PJP, precedentemente P. carinii)",
        "Aspergillosi broncopolmonare allergica",
        "Tinea pedis estesa",
        "Polmonite lobare da Klebsiella pneumoniae"
      ],
      correct: 0,
      rationale: "La polmonite da Pneumocystis jirovecii (PJP) è una classica infezione opportunistica AIDS-definente che insorge tipicamente quando la conta dei CD4+ scende sotto 200 cellule/μL, manifestandosi con tosse secca, dispnea progressiva e infiltrati polmonari bilaterali a vetro smerigliato."
    },
    {
      question: "9. Qual è l'effetto biologico della trasmissione intercellulare di Nef dai macrofagi infetti ai linfociti B mediante filopodi e trogocitosi?",
      options: [
        "Potenziamento massivo della produzione di anticorpi neutralizzanti bNAbs",
        "Interferenza con lo scambio isotipico (class-switch) e genesi di ipergammaglobulinemia policlonale aberrante",
        "Attivazione selettiva della sintesi di IgA secretorie mucosali",
        "Induzione di apoptosi immediata di tutte le plasmacellule midollari"
      ],
      correct: 1,
      rationale: "Come descritto dalla Prof.ssa Galandrini, i macrofagi che esprimono Nef formano prolungamenti filiformi (filopodi) che prendono contatto con i linfociti B e trasferiscono materiale per trogocitosi. L'acquisizione di Nef interferisce con i meccanismi di class-switch recombination, provocando disfunzione umorale ed ipergammaglobulinemia policlonale inefficace."
    },
    {
      question: "10. In che cosa risiede il limite principale della terapia antiretrovirale combinata (HAART / cART)?",
      options: [
        "Non è in grado di inibire la trascrittasi inversa nei ceppi selvaggi",
        "Provoca una costante soppressione della produzione di interferone di primo tipo",
        "Non è in grado di eliminare i serbatoi provirali latenti (Reservoir) integrati nelle cellule quiescenti",
        "È efficace solo nei pazienti omozigoti per la delezione CCR5-Δ32"
      ],
      correct: 2,
      rationale: "La HAART è straordinariamente efficace nel sopprimere la replicazione virale attiva al di sotto dei limiti di rilevabilità (< 50 copie/mL), ma i farmaci non agiscono sulle cellule infettate in modo latente che non trascrivono il provirus. Alla sospensione della terapia, il virus si riattiva prontamente a partire da questi reservoir."
    }
  ];

  return (
    <div className="space-y-10">
      {/* SEZIONE 33.1: STORIA E PIETRE MILIARI */}
      <article id="sec-33-1" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-150 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-red-700 font-semibold block">
            Capitolo 33.1 · Epistemologia & Pietre Miliari Storiche
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            33.1 Storia dell'HIV: Dal Primo Caso (1981) al Premio Nobel 2008 (Barré-Sinoussi & Montagnier)
          </h2>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            L'infezione da virus dell'immunodeficienza umana (<strong>HIV</strong>) e la conseguente sindrome da immunodeficienza
            acquisita (<strong>AIDS</strong>) rappresentano uno dei banchi di prova più complessi e trasformativi della medicina contemporanea.
            La patologia è stata riconosciuta per la prima volta negli Stati Uniti nel <strong>1981</strong>, anno in cui i Centri per la Prevenzione
            e il Controllo delle Malattie (CDC) di Atlanta registrarono un cluster anomalo di polmoniti da <em>Pneumocystis carinii</em> (oggi <em>jirovecii</em>)
            e sarcomi cutanei di Kaposi in giovani uomini precedentemente sani. Quello che si osservava non era una malattia a sé stante,
            bensì la <strong>fase terminale</strong> di una lenta, inesorabile distruzione del sistema immunitario adattativo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
            <div className="p-4 rounded-xl border border-red-200 bg-red-50/60 text-xs">
              <div className="flex items-center gap-2 font-bold text-red-950 mb-1.5">
                <Award className="w-4 h-4 text-red-600" />
                <span>1983 - Isolamento di HIV-1 & Nobel 2008</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Presso l'Istituto Pasteur di Parigi, <strong>Françoise Barré-Sinoussi</strong> e <strong>Luc Montagnier</strong> isolarono per la
                prima volta il retrovirus responsabile da una biopsia linfonodale di un paziente con linfoadenopatia persistente generalizzata.
                La scoperta e il successivo clonaggio del genoma di <strong>HIV-1</strong> valsero loro il <strong>Premio Nobel per la Medicina nel 2008</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/60 text-xs">
              <div className="flex items-center gap-2 font-bold text-blue-950 mb-1.5">
                <Search className="w-4 h-4 text-blue-600" />
                <span>1984-1995 - Identificazione Recettoriale</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Nel <strong>1984</strong> venne formalmente identificata la molecola <strong>CD4</strong> come recettore cellulare primario del virus.
                Tuttavia, dovettero trascorrere 11 anni (fino al <strong>1995</strong>) per chiarire perché CD4 da solo fosse insufficiente a mediare l'infezione:
                venne dimostrata la necessità obbligata di un <strong>secondo recettore</strong> costituito da chemochine recettoriali a 7 domini
                transmembrana, primariamente <strong>CCR5</strong> e <strong>CXCR4</strong>.
              </p>
            </div>
          </div>

          <p>
            Nel <strong>1993</strong>, la comprensione della persistenza dell'infezione fu rivoluzionata dalla scoperta dei <strong>Reservoir</strong> (serbatoi virali
            cellulari latenti): compartimenti anatomici e cellule a riposo in cui il genoma virale rimane integrato ma silente, immune sia alla
            sorveglianza dei linfociti citotossici che all'azione degli anticorpi circolanti. Questa scoperta spiegò perché l'organismo non sia
            fisiologicamente in grado di eradicare l'infezione spontaneamente.
          </p>

          <p>
            La vera cesura prognostica si registrò nel <strong>1996</strong> con l'introduzione della <strong>HAART (Highly Active Antiretroviral Therapy)</strong>,
            la terapia di combinazione che associa inibitori della trascrittasi inversa e inibitori della proteasi. La HAART non ha fornito una guarigione
            sterilizzante, ma ha consentito un prolungamento indefinito della fase di latenza clinica, trasformando una sentenza di morte acuta in una
            <strong>patologia cronica gestibile</strong> pienamente compatibile con un'aspettativa di vita sovrapponibile alla popolazione generale.
          </p>
        </div>
      </article>

      {/* SEZIONE 33.2: ARCHITETTURA MOLECOLARE DEL VIRIONE */}
      <article id="sec-33-2" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-150 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-red-700 font-semibold block">
            Capitolo 33.2 · Virologia & Biologia Strutturale
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            33.2 Architettura Molecolare del Virione HIV-1: Envelope (gp120/gp41), Capside p24 ed Enzimi Chiave (RT, IN, PR)
          </h2>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            HIV appartiene alla famiglia dei <strong>Retroviridae</strong>, genere <strong>Lentivirus</strong> (caratterizzato da lungo periodo di incubazione e
            infezioni croniche progressive). Il virione maturo possiede una struttura sferica di circa 100-120 nm di diametro, organizzata in
            compartimenti concentrici ad altissima specializzazione funzionale:
          </p>

          <div className="space-y-4 my-6 not-prose">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col md:flex-row gap-4 items-start">
              <div className="p-3 rounded-lg bg-red-100 text-red-800 font-mono font-bold text-sm shrink-0">
                Envelope Lipidico
              </div>
              <div className="text-xs text-slate-700 space-y-1.5">
                <div className="font-bold text-slate-900 text-sm">Doppio strato fosfolipidico derivato dall'ospite</div>
                <p>
                  Acquisito durante la gemmazione della particella virale attraverso la membrana plasmatica della cellula infettata.
                  Sulla superficie dell'envelope sono inseriti complessi eterotrimerici formati da due glicoproteine codificate dal gene <em>env</em>:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>
                    <strong>gp120 (Glicoproteina di superficie):</strong> componente estrinseca fortemente glicosilata (il "glycan shield" che scherma
                    stericamente gli epitopi neutralizzanti dagli anticorpi). Contiene l'<strong>ansa flessibile V3</strong> (terza regione variabile),
                    responsabile dell'interazione diretta con i corecettori chemochinici.
                  </li>
                  <li>
                    <strong>gp41 (Glicoproteina transmembrana):</strong> molecola idrofobica ancorata al bilayer lipidico, dotata di un peptide
                    fusogeno aminoterminale ad "arpione" indispensabile per scatenare la fusione di membrana.
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col md:flex-row gap-4 items-start">
              <div className="p-3 rounded-lg bg-indigo-100 text-indigo-800 font-mono font-bold text-sm shrink-0">
                Matrice & Capside
              </div>
              <div className="text-xs text-slate-700 space-y-1.5">
                <div className="font-bold text-slate-900 text-sm">Guscio proteico di sostegno e contenimento</div>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>
                    <strong>Matrice (p17):</strong> riveste la faccia interna del bilayer lipidico, stabilizzando la forma sferica del virione.
                  </li>
                  <li>
                    <strong>Capside o Core (p24):</strong> struttura conica composta da circa 2.000 molecole di p24. Questa proteina costituisce
                    il principale marcatore antigenico precoce rilevabile nel siero durante la fase acuta dell'infezione.
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col md:flex-row gap-4 items-start">
              <div className="p-3 rounded-lg bg-emerald-100 text-emerald-800 font-mono font-bold text-sm shrink-0">
                Core & Enzimi
              </div>
              <div className="text-xs text-slate-700 space-y-1.5">
                <div className="font-bold text-slate-900 text-sm">Genoma e Macchinario Enzimatico Replicativo</div>
                <p>
                  All'interno del capside conico sono alloggiate <strong>due copie identiche di RNA a singolo filamento a polarità positiva</strong> (genoma diploide),
                  strettamente associate alla nucleocapside p7, unitamente alla triade enzimatica essenziale per il ciclo replicativo:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>
                    <strong>Trascrittasi Inversa (RT - p66/p51):</strong> DNA polimerasi RNA-dipendente e DNA-dipendente provvista di attività ribonucleasica H (RNasi H).
                    Manca totalmente di attività di correzione di bozze (proofreading 3'→5'), generando un tasso di mutazione elevatissimo (~1 errore ogni 10⁴ basi).
                  </li>
                  <li>
                    <strong>Integrasi (IN - p32):</strong> catalizza il taglio delle estremità del DNA provirale neosintetizzato e la sua integrazione covalente
                    all'interno del genoma cellulare dell'ospite in corrispondenza delle sequenze <strong>LTR (Long Terminal Repeats)</strong>.
                  </li>
                  <li>
                    <strong>Proteasi (PR - p10):</strong> aspartil-proteasi deputata al clivaggio proteolitico mirato dei precursori poliproteici Gag e Gag-Pol
                    durante o subito dopo la gemmazione, passaggio obbligato affinché il virione acquisisca infettività matura.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* SEZIONE 33.3: FATTORI ACCESSORI NEF E TAT */}
      <article id="sec-33-3" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-150 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-red-700 font-semibold block">
            Capitolo 33.3 · Patogenicità & Immunoevasione Virale
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            33.3 I Fattori Accessori di Patogenicità: Tat e il Ruolo Cardinale di Nef (Downregolazione MHC-I & Trogocitosi B)
          </h2>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Oltre ai geni strutturali fondamentali (<em>gag</em>, <em>pol</em>, <em>env</em>), il genoma di HIV codifica una serie di proteine
            regolatorie e accessorie indispensabili per sostenere la replicazione e disattivare sistematicamente la risposta immunitaria dell'ospite:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6 not-prose">
            <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/50 text-xs space-y-2">
              <div className="font-bold text-purple-950 text-sm flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-purple-700" />
                <span>Tat (Trans-Activator of Transcription)</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Tat si lega a un elemento a forcina sull'RNA virale nascente denominato <strong>TAR (Trans-Activation Response element)</strong> e
                recluta il complesso cellulare <strong>P-TEFb</strong> (chinasi ciclina-dipendente CDK9 e Ciclina T1). Questa interazione determina
                la fosforilazione del dominio carbossiterminale (CTD) della RNA Polimerasi II dell'ospite, convertendola da uno stato a processività
                bassa/abortiva a una <strong>trascrizione elongativa ultra-efficiente</strong>, moltiplicando la resa di RNA genomico virale di centinaia di volte.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-red-200 bg-red-50/50 text-xs space-y-2">
              <div className="font-bold text-red-950 text-sm flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-red-700" />
                <span>Nef (Negative Regulatory Factor)</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Nonostante il nome storico, Nef è il più potente fattore di virulenza e immunoevasione di HIV-1. La professoressa Galandrini ha
                delineato due meccanismi molecolari cardine attraverso cui Nef distrugge l'efficacia del sistema immunitario:
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3.5 my-4">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              I Due Meccanismi d'Azione di Nef Evidenziati a Lezione:
            </h4>
            <ol className="list-decimal pl-5 space-y-2 text-xs text-slate-700 leading-relaxed">
              <li>
                <strong>Downregolazione e Degradazione Lisosomiale di MHC di Classe I:</strong> Nef interagisce direttamente con la coda
                citosolica delle molecole HLA-A ed HLA-B nascenti nel trans-Golgi network, reclutando adattatori endosomiali (AP-1) e deviandole
                verso i lisosomi dove vengono degradate. Privando la superficie cellulare di MHC-I, il virus impedisce ai linfociti T citotossici
                (<strong>CTL CD8+</strong>) di riconoscere i peptidi virali e distruggere la cellula infetta.
              </li>
              <li>
                <strong>Induzione di Filopodi nei Macrofagi e Trasferimento di Nef ai Linfociti B via Trogocitosi:</strong> I macrofagi infetti
                che esprimono Nef sviluppano lunghi prolungamenti filiformi della membrana plasmatica (<strong>filopodi</strong>), che prendono
                contatto fisico prolungato con i linfociti B adiacenti. Attraverso il fenomeno della <strong>trogocitosi</strong> (scambio attivo di
                frammenti di membrana e citosol), la proteina Nef penetra nei linfociti B, dove interferisce con la trascrizione dell'enzima AID
                (Activation-Induced Cytidine Deaminase) e blocca lo <strong>scambio isotipico (class-switch)</strong>. Ne consegue una grave
                disfunzione anticorpale caratterizzata da un'ipergammaglobulinemia policlonale anarchica non protettiva.
              </li>
            </ol>
          </div>
        </div>
      </article>

      {/* SEZIONE 33.4: TROPISMO CELLULARE E CORECETTORI */}
      <article id="sec-33-4" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-150 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-red-700 font-semibold block">
            Capitolo 33.4 · Tropismo & Basi Recettoriali
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            33.4 Tropismo Cellulare e Corecettori per Chemochine: Ceppi M-tropici (CCR5) vs T-tropici (CXCR4)
          </h2>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Il bersaglio cellulare primario di HIV è costituito da qualsiasi citotipo che esprima sulla propria superficie la molecola
            <strong>CD4</strong>: non solo i linfociti T helper, ma anche l'intero compartimento della linea monocito-macrofagica (monociti circolanti,
            macrofagi tissutali, cellule di Kupffer del fegato, cellule dendritiche interstiziali, cellule di Langerhans dell'epidermide e cellule
            microgliali del sistema nervoso centrale).
          </p>

          <p>
            Tuttavia, l'efficienza dell'infezione e il destino clinico dipendono in modo stringente dal <strong>tropismo corecettoriale</strong> del ceppo virale:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 not-prose">
            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/70 text-xs">
              <span className="font-mono text-amber-800 font-bold uppercase tracking-wider block mb-1">
                Ceppi M-Tropici (Ceppi R5)
              </span>
              <h4 className="font-bold text-slate-900 text-sm mb-2">Utilizzo selettivo di CCR5</h4>
              <p className="text-slate-700 leading-relaxed mb-2">
                Utilizzano il recettore per chemochine <strong>CCR5</strong> espresso su macrofagi, cellule dendritiche e linfociti T CD4+ di memoria.
                Rappresentano la <strong>quasi totalità dei ceppi trasmessi per via mucosale</strong> (sessuale o verticale). Hanno una cinetica
                di replicazione non sinciziotropa e consentono la persistenza cronica nei tessuti.
              </p>
              <div className="p-2 rounded bg-white/80 border border-amber-300 font-mono text-[11px] text-amber-900">
                Ligandi fisiologici bloccanti: MIP-1α (CCL3), MIP-1β (CCL4), RANTES (CCL5)
              </div>
            </div>

            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/70 text-xs">
              <span className="font-mono text-blue-800 font-bold uppercase tracking-wider block mb-1">
                Ceppi T-Tropici (Ceppi X4)
              </span>
              <h4 className="font-bold text-slate-900 text-sm mb-2">Utilizzo selettivo di CXCR4</h4>
              <p className="text-slate-700 leading-relaxed mb-2">
                Utilizzano il recettore <strong>CXCR4</strong> espresso ad alta densità sui linfociti T CD4+ naïve e central memory.
                Emergono tipicamente nelle <strong>fasi avanzate dell'infezione</strong> (dopo anni di latenza), sono fortemente sinciziotropi
                e si associano a una precipitosa distruzione della massa di linfociti T helper e a un rapido collasso verso l'AIDS conclamato.
              </p>
              <div className="p-2 rounded bg-white/80 border border-blue-300 font-mono text-[11px] text-blue-900">
                Ligando fisiologico bloccante: SDF-1 (Stromal Cell-Derived Factor 1 / CXCL12)
              </div>
            </div>
          </div>

          <p>
            Il determinante molecolare che governa questo cambio di tropismo risiede nei <strong>polimorfismi dell'ansa V3 di gp120</strong>:
            la sostituzione di singoli residui amminoacidici neutri con residui carichi positivamente (come lisina o arginina) nell'ansa V3 altera
            la complementarietà elettrostatica, spostando l'affinità da CCR5 a CXCR4. Nel paziente infettato non trattato si assiste a una continua
            generazione di quasi-specie con tropismo misto o duale (R5X4).
          </p>
        </div>
      </article>

      {/* SEZIONE 33.5: DINAMICA DELL'INGRESSO E CICLO REPLICATIVO */}
      <article id="sec-33-5" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-150 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-red-700 font-semibold block">
            Capitolo 33.5 · Dinamica Biofisica & Ciclo Replicativo
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            33.5 Meccanismo di Ingresso, Fusione di Membrana e Ciclo Replicativo Intracellulare
          </h2>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            L'ingresso di HIV all'interno della cellula bersaglio non avviene per endocitosi aspecifica, bensì attraverso un sofisticato
            processo di <strong>fusione diretta pH-indipendente</strong> tra l'envelope virale e la membrana plasmatica cellulare:
          </p>

          {/* SCHEMA DI PROCESSO INTERCALATO NELLA SPIEGAZIONE */}
          <InlineProcessFlowDiagram
            processId="hiv_cycle"
            title="Schema di Processo: Ciclo Replicativo HIV & Bersagli Farmacologici"
            subtitle="Visione d'insieme integrata: fusione gp41, trascrittasi inversa, integrasi provirale e maturazione proteasica"
            defaultExpanded={true}
          />

          <ol className="list-decimal pl-5 space-y-3 my-4">
            <li>
              <strong>Attacco Primario al CD4:</strong> La glicoproteina gp120 (organizzata in trimero associato a gp41) si lega con alta affinità
              al dominio extracellulare D1 del CD4.
            </li>
            <li>
              <strong>Transizione Conformazionale ed Esposizione dell'Ansa V3:</strong> L'interazione con il CD4 induce un drastico cambio conformazionale
              nella struttura terziaria di gp120, che apre la porzione apicale del trimero ed espone all'esterno l'ansa ipervariabile V3, prima
              mascherata stericamente.
            </li>
            <li>
              <strong>Interazione con il Corecettore Chemochinico:</strong> L'ansa V3 esposta si ancora alle anse extracellulari di CCR5 o CXCR4.
              Questo secondo legame provoca lo spostamento laterale di gp120, liberando la molecola transmembrana gp41.
            </li>
            <li>
              <strong>Estensione dell'Arpione Fusogeno di gp41:</strong> La subunità idrofobica aminoterminale di gp41 si proietta all'esterno come un
              arpione molecolare, penetrando nel doppio strato lipidico della cellula ospite. Il ripiegamento a forcina di gp41
              (<em>six-helix bundle</em>) accosta forzatamente la membrana virale e quella cellulare, determinando la formazione di un poro di fusione
              e l'iniezione del capside virale nel citosol.
            </li>
            <li>
              <strong>Uncoating & Retrotrascrizione:</strong> Nel citoplasma il capside va incontro a parziale disassemblaggio (uncoating);
              la trascrittasi inversa converte l'RNA a singolo filamento in una molecola di DNA a doppio filamento lineare (cDNA provirale).
            </li>
            <li>
              <strong>Import Nucleare ed Integrazione LTR-Dipendente:</strong> Il complesso di pre-integrazione (PIC) attraversa il poro nucleare;
              l'<strong>integrasi</strong> inserisce covalentemente il cDNA virale nel DNA genomico dell'ospite attraverso le sequenze LTR. Da questo momento
              il provirus integrato diventa parte permanente del patrimonio genetico cellulare.
            </li>
            <li>
              <strong>Bivio tra Latenza ed Espressione:</strong> Il provirus può rimanere silente (latenza provirale) oppure essere trascritto da fattori
              di trascrizione cellulari (NF-κB) potenziati da <strong>Tat</strong>. Vengono sintetizzati gli mRNA virali che, trasportati nel citoplasma da <strong>Rev</strong>,
              vengono tradotti nelle poliproteine Gag, Gag-Pol ed Env.
            </li>
            <li>
              <strong>Assemblaggio, Gemmazione e Maturazione da Proteasi:</strong> I componenti si assemblano sotto la membrana plasmatica; la particella
              gemma all'esterno incorporando l'envelope lipidico. La <strong>proteasi virale</strong> cliva i precursori poliproteici generando il virione
              maturo pienamente infettivo.
            </li>
          </ol>
        </div>
      </article>

      {/* SIMULATORE 1: CICLO REPLICATIVO & TARGET FARMACOLOGICI */}
      <div id="sim-hiv-replication-cycle" className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-6">
          <div className="p-2.5 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold block">
              Simulatore Interattivo 1
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Ciclo Replicativo di HIV-1, Tropismo R5 vs X4 & Bersagli Farmacologici
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls Column */}
          <div className="space-y-5 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
            <div>
              <label className="text-xs font-mono uppercase text-slate-400 block mb-2 font-semibold">
                1. Seleziona Ceppo Virale (Tropismo Ansa V3):
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => { setSelectedStrain('R5'); setSelectedCellTarget('macrophage'); }}
                  className={`p-2.5 rounded-lg text-xs font-bold transition-all border ${
                    selectedStrain === 'R5'
                      ? 'bg-amber-600 text-white border-amber-400 shadow-md'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  Ceppo R5 (M-tropico)
                </button>
                <button
                  onClick={() => { setSelectedStrain('X4'); setSelectedCellTarget('tcell'); }}
                  className={`p-2.5 rounded-lg text-xs font-bold transition-all border ${
                    selectedStrain === 'X4'
                      ? 'bg-blue-600 text-white border-blue-400 shadow-md'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  Ceppo X4 (T-tropico)
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase text-slate-400 block mb-2 font-semibold">
                2. Cellula Bersaglio dell'Ospite:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedCellTarget('macrophage')}
                  className={`p-2.5 rounded-lg text-xs font-bold transition-all border ${
                    selectedCellTarget === 'macrophage'
                      ? 'bg-emerald-600 text-white border-emerald-400'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  Macrofago / DC (CCR5+)
                </button>
                <button
                  onClick={() => setSelectedCellTarget('tcell')}
                  className={`p-2.5 rounded-lg text-xs font-bold transition-all border ${
                    selectedCellTarget === 'tcell'
                      ? 'bg-indigo-600 text-white border-indigo-400'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  Linfocita T CD4+ (CXCR4+)
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase text-slate-400 block mb-2 font-semibold">
                3. Intervento Farmacologico Antiretrovirale:
              </label>
              <select
                value={activeDrugClass}
                onChange={(e) => setActiveDrugClass(e.target.value as any)}
                className="w-full bg-slate-900 border border-slate-600 text-white text-xs rounded-lg p-2.5 focus:outline-none focus:ring-1 focus:ring-red-500"
              >
                <option value="none">Nessun Farmaco (Replicazione Libera)</option>
                <option value="entry">Inibitore Corecettore CCR5 (Maraviroc)</option>
                <option value="fusion">Inibitore di Fusione gp41 (Enfuvirtide / T-20)</option>
                <option value="nrti">Inibitore Trascrittasi Inversa (NRTI / NNRTI)</option>
                <option value="insti">Inibitore dell'Integrasi (INSTI - Raltegravir/Dolutegravir)</option>
                <option value="pi">Inibitore della Proteasi (PI - Darunavir/Ritonavir)</option>
              </select>
            </div>
          </div>

          {/* Interactive Visual Canvas Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="text-xs font-mono text-slate-400">
                  Stato Infezione: <span className="text-white font-bold">{selectedStrain} su {selectedCellTarget === 'macrophage' ? 'Macrofago' : 'T CD4+'}</span>
                </div>
                <div className="text-xs font-mono">
                  {activeDrugClass === 'none' ? (
                    <span className="text-red-400 font-bold flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" /> Replicazione Attiva
                    </span>
                  ) : (
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5" /> Blocco Farmacologico
                    </span>
                  )}
                </div>
              </div>

              {/* Step Analysis */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 font-mono mb-1">Compatibilità Recettoriale:</div>
                  {(selectedStrain === 'R5' && selectedCellTarget === 'macrophage') || (selectedStrain === 'X4' && selectedCellTarget === 'tcell') ? (
                    <p className="text-emerald-300 font-bold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Ingresso Permesso (Tropismo Compatibile)
                    </p>
                  ) : (
                    <p className="text-amber-300 font-bold flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" /> Mismatch Corecettoriale: Infezione Inefficiente
                    </p>
                  )}
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 font-mono mb-1">Azione del Farmaco Selezionato:</div>
                  <p className="text-white font-medium">
                    {activeDrugClass === 'none' && "Nessuna pressione farmacologica: il ciclo virale procede indisturbato fino alla gemmazione."}
                    {activeDrugClass === 'entry' && (selectedStrain === 'R5' ? "Maraviroc blocca allostericamente CCR5: impedisce l'aggancio di gp120 e arresta l'infezione allo step 1." : "Maraviroc è INATTIVO contro ceppi X4 (che usano CXCR4)! Il virus elude il farmaco.")}
                    {activeDrugClass === 'fusion' && "Enfuvirtide si lega a gp41 impedendo il ripiegamento a six-helix bundle e bloccando la fusione delle membrane."}
                    {activeDrugClass === 'nrti' && "Blocco della trascrizione inversa: i nucleosidi modificati (NRTI) arrestano l'allungamento della catena di cDNA."}
                    {activeDrugClass === 'insti' && "Gli INSTI chelano gli ioni Mg²⁺ nel sito catalitico dell'integrasi, impedendo l'inserimento del provirus nel genoma."}
                    {activeDrugClass === 'pi' && "Gli inibitori della proteasi impediscono il clivaggio di Gag-Pol: i virioni gemmati restano immaturi e NON infettivi."}
                  </p>
                </div>
              </div>

              {/* Outcome Banner */}
              <div className={`p-4 rounded-xl border text-xs leading-relaxed ${
                activeDrugClass === 'none'
                  ? 'bg-red-950/50 border-red-700/60 text-red-200'
                  : (activeDrugClass === 'entry' && selectedStrain === 'X4')
                  ? 'bg-amber-950/50 border-amber-700/60 text-amber-200'
                  : 'bg-emerald-950/50 border-emerald-700/60 text-emerald-200'
              }`}>
                <div className="font-bold text-sm mb-1 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  <span>Esito Molecolare del Ciclo:</span>
                </div>
                {activeDrugClass === 'none' && (
                  <p>
                    Il virus produce nuovi virioni maturi con rilascio continuo, lisi osmotica della membrana e formazione di sincizi.
                    Nei macrofagi si costituisce un reservoir latente stabile; nei linfociti T CD4+ subentra apoptosi e caduta della popolazione cellulare.
                  </p>
                )}
                {activeDrugClass === 'entry' && selectedStrain === 'X4' && (
                  <p>
                    <strong>Fallimento Terapeutico:</strong> Maraviroc è attivo unicamente su CCR5. Il ceppo X4 sfrutta CXCR4 e penetra
                    nella cellula T CD4+ intatta, provocando la distruzione della cellula bersaglio!
                  </p>
                )}
                {activeDrugClass !== 'none' && !(activeDrugClass === 'entry' && selectedStrain === 'X4') && (
                  <p>
                    <strong>Blocco Replicativo con Successo:</strong> La replicazione è arrestata. La viremia plasmatica si azzera (<span className="font-mono">HIV-RNA &lt; 50 copie/mL</span>).
                    Tuttavia, i provirus già integrati nei serbatoi cellulari quiescenti permangono silenti e non vengono intaccati dal trattamento.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEZIONE 33.6: STORIA NATURALE E CINETICA DELL'INFEZIONE */}
      <article id="sec-33-6" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-150 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-red-700 font-semibold block">
            Capitolo 33.6 · Cinetica Clinico-Immunologica
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            33.6 Storia Naturale dell'Infezione & Cinetica Trifasica: Finestra di Eclissi, Sieroconversione e Costituzione dei Serbatoi (Reservoir)
          </h2>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            La storia naturale dell'infezione da HIV segue una cinetica temporale rigorosamente suddivisa in <strong>tre fasi cardine</strong>:
          </p>

          <div className="space-y-4 my-6 not-prose">
            <div className="p-4 rounded-xl border border-red-200 bg-red-50/50 text-xs space-y-2">
              <div className="flex items-center justify-between font-bold text-red-950 text-sm">
                <span>Fase 1: Infezione Acuta Primaria (Giorni 0 - 60)</span>
                <span className="font-mono text-red-700">Picco Viremia & Drop CD4+</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Il virus penetra per via mucosale (ceppi misti R5 ed X4). Le <strong>cellule dendritiche</strong> legano il virus tramite il recettore lectinico
                <strong>DC-SIGN</strong> e lo trasportano ai linfonodi regionali, dove lo "offrono" ai linfociti T CD4+ naïve e memory. Qui si accende
                una replicazione esplosiva con un picco elevatissimo di viremia plasmatica nei primi 20-30 giorni. Si osserva una drammatica caduta dei CD4+,
                specialmente nel tessuto linfoide associato all'intestino (GALT), con distruzione irreversibile dei Th17 mucosali.
              </p>
              <div className="bg-white p-3 rounded-lg border border-red-200 font-mono text-[11px] text-slate-700 space-y-1">
                <div>• <strong>Fase di Eclissi (Giorni 0 - 5/10):</strong> Il virus replica nei tessuti ma non è rilevabile nel sangue periferico. Paziente asintomatico e apparentemente negativo.</div>
                <div>• <strong>Giorno 10:</strong> Positività al test molecolare (NAT - Nucleic Acid Testing per HIV-1 RNA).</div>
                <div>• <strong>Giorno 18:</strong> Positività per l'antigene capsico p24 (test immunoenzimatico combo di 4ª generazione).</div>
                <div>• <strong>Giorni 21 - 25:</strong> Sieroconversione: comparsa delle IgM specifiche e successivamente delle IgG (anti-p24 e anti-gp120/gp41).</div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50 text-xs space-y-2">
              <div className="flex items-center justify-between font-bold text-blue-950 text-sm">
                <span>Fase 2: Latenza Clinica (1 - 15+ Anni)</span>
                <span className="font-mono text-blue-700">Viremia Stabile & Equilibrio CTL</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                La vigorosa risposta immunitaria adattativa (massiva espansione clonale di CTL CD8+ virus-specifici che raggiungono frequenze
                fino a 1/10 dei linfociti totali, unita alla comparsa di anticorpi) abbatte drasticamente la carica virale fino a un "set-point" stabile.
                I linfociti T CD4+ risalgono verso valori subnormali (&gt; 600/μL). Il paziente è clinicamente asintomatico e a bassa contagiosità.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-300 bg-slate-100 text-xs space-y-2">
              <div className="flex items-center justify-between font-bold text-slate-900 text-sm">
                <span>Fase 3: Fase Terminale (AIDS Conclamato)</span>
                <span className="font-mono text-red-900 font-bold">CD4+ &lt; 200/μL & Infezioni Letali</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Il continuo accumulo di mutazioni, la ricombinazione genomica e l'esaurimento funzionale del sistema immunitario portano
                alla rottura dell'equilibrio: la viremia risale vertiginosamente, i linfociti CD4+ precipitano sotto le 200 cellule/μL e compaiono
                le infezioni opportunistiche letali e le neoplasie virali.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            La Costituzione Precoce dei Serbatoi Virali (Reservoir)
          </h3>
          <p>
            Uno dei concetti più rimarcati dalla Prof.ssa Galandrini è che i <strong>serbatoi virali si costituiscono precocissimamente</strong>, entro appena
            10-20 giorni dall'infezione primaria, prima ancora che la sieroconversione sia completata. Il virus colonizza la milza, i linfonodi,
            il sistema genitale e il sistema nervoso centrale.
          </p>
          <p>
            Nei serbatoi, le cellule macrofagiche e i linfociti T CD4+ memory a riposo contengono DNA provirale integrato ma <strong>non trascrivono
            attivamente proteine virali</strong>. Mancando l'espressione di gp120 e la presentazione di peptidi su MHC-I:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>Gli anticorpi neutralizzanti sono inefficaci:</strong> non vi sono particelle virali libere né antigeni sulla superficie delle cellule quiescenti.</li>
            <li><strong>I CTL citotossici sono ciechi:</strong> in assenza di complessi pMHC-I, non può instaurarsi la sinapsi litica.</li>
            <li><strong>I farmaci antiretrovirali non hanno bersaglio:</strong> RT, IN e PR non sono attive nelle cellule silenti non replicanti.</li>
          </ul>
        </div>
      </article>

      {/* SEZIONE 33.7: LATENZA E LONG-TERM NON-PROGRESSORS */}
      <article id="sec-33-7" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-150 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-red-700 font-semibold block">
            Capitolo 33.7 · Immunogenetica & Controllo Naturale
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            33.7 I Long-Term Non-Progressors (LTNP): CTL Polifunzionali, bNAbs, Aplotipi KIR e Mutazione CCR5-Δ32
          </h2>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Nella maggior parte degli individui non trattati la latenza dura in media 8-10 anni prima dell'evoluzione verso l'AIDS. Tuttavia,
            in una frazione ristretta di pazienti (circa l'1-5%) denominata <strong>Long-Term Non-Progressors (LTNP)</strong> o <em>Elite Controllers</em>,
            la fase di latenza asintomatica si prolunga spontaneamente per oltre 7-15 anni senza alcuna terapia, mantenendo costantemente la conta
            dei linfociti T CD4+ al di sopra di 600 cellule/μL (valori fisiologici normali ≈ 1000/μL, rapporto CD4:CD8 di 2:1).
          </p>

          <p>
            Dagli studi immunologici e genomici sono emersi quattro determinanti fondamentali che spiegano questa eccezionale resistenza:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 not-prose">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs space-y-2">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-red-600" />
                <span>1. CTL ad Ampio Spettro & Polifunzionali</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Gli LTNP montano una risposta CTL CD8+ dotata di altissima avidità recettoriale, capace di riconoscere epitopi multipli altamente
                conservati del capside p24. Questa policlonalità impedisce al virus di sfuggire con singole mutazioni puntiformi.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs space-y-2">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>2. Anticorpi bNAbs (Broadly Neutralizing)</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Capaci di neutralizzare un ampio spettro di ceppi virali eterologhi poiché legano epitopi conformazionali terziari conservati
                del trimero gp120/gp41 (come il sito di legame per CD4 o l'interfaccia gp120-gp41), superando l'ostacolo della variabilità dell'ansa V3.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs space-y-2">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Dna className="w-4 h-4 text-blue-600" />
                <span>3. Aplotipo B dei Recettori KIR (Cellule NK)</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Come spiegato dalla Prof.ssa Galandrini, i KIR sono recettori delle cellule NK per le molecole HLA-I. La popolazione si divide
                negli aplotipi A (prevalenza di KIR inibitori lunghi "L") e B (arricchito in <strong>KIR attivatori corti "S"</strong>). Gli individui
                con aplotipo B attivano un killing NK superiore verso le cellule che hanno downregolato HLA-A/B ad opera di Nef, prolungando la latenza.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs space-y-2">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-emerald-600" />
                <span>4. Genetica dell'Ospite: Mutazione CCR5-Δ32</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Una delezione di 32 paia di basi nel gene <em>CCR5</em> genera una proteina troncata non espressa in membrana. In <strong>eterozigosi</strong>
                riduce la densità del corecettore e ritarda la progressione; in <strong>omozigosi</strong> conferisce una <strong>completa refrattarietà
                all'infezione da ceppi R5</strong> (il principio alla base della guarigione del Paziente di Berlino nel 1996 e dei successivi casi).
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* SEZIONE 33.8: USCITA DALLA LATENZA ED ESCAPE VIRALE */}
      <article id="sec-33-8" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-150 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-red-700 font-semibold block">
            Capitolo 33.8 · Fisiopatologia del Collasso Immunitario
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            33.8 Uscita dalla Latenza, Esaurimento T-Cellulare ed Escape Virale: Quasi-Specie e Ricombinazione Omologa
          </h2>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Perché, a distanza di anni, la risposta immunitaria perde il controllo dell'infezione ed evolve verso l'AIDS?
            La causa risiede nella convergenza di <strong>tre fattori biologici inarrestabili</strong>:
          </p>

          <ol className="list-decimal pl-5 space-y-3 my-4">
            <li>
              <strong>Elevata Mutagenesi della Trascrittasi Inversa:</strong> La trascrittasi inversa introduce mutazioni puntiformi casuali a ogni
              ciclo replicativo. Questo genera una popolazione virale estremamente eterogenea nota come <strong>quasi-specie</strong>: cloni virali
              mutati negli epitopi antigenici di gp120 e Gag che non vengono più neutralizzati dagli anticorpi né riconosciuti dai CTL preesistenti.
            </li>
            <li>
              <strong>Ricombinazione Omologa Frequente (Crossing-Over):</strong> Quando una singola cellula viene co-infettata da ceppi virali diversi,
              la trascrittasi inversa "salta" da uno stampo di RNA all'altro durante la sintesi del DNA provirale, determinando da <strong>7 a 30 eventi
              di crossing-over per singolo genoma virale</strong>. Si generano così nuove varianti chimeriche ricombinanti dotate di escape combinato.
            </li>
            <li>
              <strong>Esaurimento Replicativo e Clonale (T-Cell Exhaustion):</strong> La stimolazione antigenica ininterrotta per anni conduce
              i linfociti T CD4+ e CD8+ all'esaurimento funzionale: progressiva perdita della capacità proliferativa e citotossica, mancata
              produzione di IL-2 ed IFN-γ e sovraespressione costitutiva di molteplici checkpoint inibitori (PD-1, CTLA-4, TIM-3, LAG-3).
            </li>
          </ol>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Meccanismi Diretti e Indiretti di Deplezione dei Linfociti T CD4+
          </h3>
          <p>
            La perdita catastrofica dei linfociti T helper nell'infezione da HIV non è imputabile a un singolo evento, ma a quattro meccanismi sinergici:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs not-prose my-3">
            <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
              <strong className="text-slate-900 block mb-1">1. Citopatogenicità Diretta & Gemmazione:</strong>
              L'intensa produzione virale depaupera la membrana plasmatica cellulare di fosfolipidi e proteine, portando a lisi osmotica.
            </div>
            <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
              <strong className="text-slate-900 block mb-1">2. Formazione di Sincizi Multinucleati:</strong>
              L'espressione superficiale di gp120 sulle cellule infette induce fusione con il CD4 di cellule T sane circostanti, creando sincizi giganti non vitali.
            </div>
            <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
              <strong className="text-slate-900 block mb-1">3. Uccisione Mediata da CTL CD8+:</strong>
              I linfociti citotossici riconoscono e distruggono le cellule T CD4+ infettate produttive che espongono frammenti peptidici virali.
            </div>
            <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
              <strong className="text-slate-900 block mb-1">4. Piroptosi Caspasi-1 Dipendente:</strong>
              Nelle cellule T CD4+ infettate abortivamente (quiescenti nel tessuto linfoide), l'accumulo di intermedi di trascrizione inversa incompleti
              attiva il sensore IFI16 e l'inflammasoma, scatenando una morte proinfiammatoria altamente distruttiva.
            </div>
          </div>
        </div>
      </article>

      {/* SEZIONE 33.9: FASE CONCLAMATA DI AIDS E INFEZIONI OPPORTUNISTICHE */}
      <article id="sec-33-9" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-150 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-red-700 font-semibold block">
            Capitolo 33.9 · Clinica dell'AIDS & Infezioni Opportunistiche
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            33.9 Fase Conclamata di AIDS (CD4 &lt; 200/μL): Infezioni Opportunistiche AIDS-Definitive e Neoplasie Virali
          </h2>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Dal punto di vista clinico-laboratoristico, la transizione verso l'<strong>AIDS conclamato</strong> è definita dal superamento di
            una soglia quantitativa invalicabile: <strong>la conta dei linfociti T CD4+ scende al di sotto di 200 cellule/μL</strong> (o &lt; 14%
            dei linfociti totali), con un'inversione profonda del rapporto fisiologico CD4/CD8 (che scende da 2:1 a &lt; 0.2).
          </p>

          <p>
            A questo livello di immunosoppressione compaiono le <strong>infezioni opportunistiche</strong>: patologie sostenute da germi saprofiti o
            commensali che colonizzano fisiologicamente mucose e cute senza arrecare danno nell'immunocompetente, ma che nel paziente con AIDS
            provocano quadri disseminati letali:
          </p>

          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-mono">
                  <th className="p-3 border-r border-slate-700">Conta T CD4+</th>
                  <th className="p-3 border-r border-slate-700">Patogeno Opportunista</th>
                  <th className="p-3 border-r border-slate-700">Quadro Clinico AIDS-Definente</th>
                  <th className="p-3">Meccanismo Fisiopatologico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white border border-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-amber-700">&lt; 200 / μL</td>
                  <td className="p-3 font-semibold text-slate-900"><em>Pneumocystis jirovecii</em> (ex <em>carinii</em>)</td>
                  <td className="p-3">Polmonite interstiziale bilaterale (PJP) con ipossia marcata e tosse secca</td>
                  <td className="p-3 text-slate-600">Perdita del reclutamento macrofagico e neutrofilo polmonare mediato da Th1/Th17</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-amber-700">&lt; 200 / μL</td>
                  <td className="p-3 font-semibold text-slate-900"><em>Candida albicans</em></td>
                  <td className="p-3">Candidosi esofagea, tracheale e bronco-polmonare (placche biancastre con disfagia severa)</td>
                  <td className="p-3 text-slate-600">Carenza di IL-17 ed IL-22 per l'integrità epiteliale e la secrezione di defensine</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-amber-700">&lt; 200 / μL</td>
                  <td className="p-3 font-semibold text-slate-900"><em>Cryptococcus neoformans</em></td>
                  <td className="p-3">Meningite subacuta criptococcica con ipertensione endocranica</td>
                  <td className="p-3 text-slate-600">Mancata opsonizzazione e deficit di killing macrofagico della capsula polisaccaridica</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-amber-700">&lt; 200 / μL</td>
                  <td className="p-3 font-semibold text-slate-900"><em>Toxoplasma gondii</em></td>
                  <td className="p-3">Encefalite focale con lesioni cerebrali a 'bersaglio' con edema perilesionale</td>
                  <td className="p-3 text-slate-600">Riattivazione di cisti quiescenti nel SNC per crollo di IFN-γ prodotto dai T CD4+</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-amber-700">&lt; 200 / μL</td>
                  <td className="p-3 font-semibold text-slate-900"><em>Mycobacterium tuberculosis</em> / MAC</td>
                  <td className="p-3">Tubercolosi miliare extrapolmonare o infezione disseminata da <em>M. avium-complex</em></td>
                  <td className="p-3 text-slate-600">Incapacità di formare e mantenere l'architettura granulomatosa classica</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-red-700">&lt; 50 / μL</td>
                  <td className="p-3 font-semibold text-slate-900">Cytomegalovirus (CMV)</td>
                  <td className="p-3">Retinite emorragica (cecità rapida), esofagite, colite e polmonite interstiziale</td>
                  <td className="p-3 text-slate-600">Azzeramento completo della sorveglianza cellulo-mediata CD4+ e CD8+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Neoplasie ad Eziologia Virale AIDS-Definenti
          </h3>
          <p>
            Al collasso della sorveglianza cellulo-mediata si associa l'esplosione di <strong>tumori maligni oncogenici guidati da virus</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>Sarcoma di Kaposi:</strong> neoplasia endoteliale vascolare indotta da <strong>Human Herpesvirus 8 (HHV-8)</strong>, manifestantesi con noduli cutanei e mucosi rosso-violacei e lesioni viscerali.</li>
            <li><strong>Linfomi Non-Hodgkin Sistemici ed Encefalici Primitivi:</strong> proliferazioni a cellule B a grandissima aggressività guidate dal <strong>Virus di Epstein-Barr (EBV)</strong>.</li>
            <li><strong>Carcinomi Epiteliali Ano-Genitali:</strong> carcinomi della cervice uterina e del canale anale indotti da ceppi oncogeni di <strong>Papillomavirus Umano (HPV 16, 18)</strong>.</li>
          </ul>
        </div>
      </article>

      {/* SEZIONE 33.10: TERAPIA HAART, RESERVOIR & SFIDE VACCINALI */}
      <article id="sec-33-10" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-150 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-red-700 font-semibold block">
            Capitolo 33.10 · Farmacologia, Sanità Globale & Vaccini
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            33.10 Terapia HAART/cART, Il Limite Invalicabile dei Reservoir, Epidemiologia Globale e Sfide del Vaccino Anti-HIV
          </h2>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            La gestione moderna dell'infezione da HIV poggia sulla <strong>cART (Combination Antiretroviral Therapy)</strong>, storicamente
            denominata <strong>HAART</strong>. Il principio terapeutico cardine è l'impiego concomitante di almeno <strong>due o tre farmaci
            appartenenti a classi farmacologiche con meccanismi d'azione sinergici</strong>, al fine di azzerare la probabilità statistica che il
            virus sviluppi mutazioni di resistenza simultanee:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-5 not-prose text-xs">
            <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
              <span className="font-mono font-bold text-blue-700 block mb-1">NRTI / NNRTI</span>
              <strong className="text-slate-900 block mb-1">Inibitori Trascrittasi Inversa</strong>
              <p className="text-slate-600">Bloccano la conversione dell'RNA genomico in cDNA (Tenofovir, Emtricitabina, Efavirenz).</p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
              <span className="font-mono font-bold text-purple-700 block mb-1">INSTI</span>
              <strong className="text-slate-900 block mb-1">Inibitori dell'Integrasi</strong>
              <p className="text-slate-600">Bloccano l'inserimento del provirus nelle sequenze genomiche dell'ospite (Dolutegravir, Raltegravir).</p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
              <span className="font-mono font-bold text-amber-700 block mb-1">PI</span>
              <strong className="text-slate-900 block mb-1">Inibitori della Proteasi</strong>
              <p className="text-slate-600">Impediscono il clivaggio dei precursori Gag-Pol, generando virioni immaturi (Darunavir, Ritonavir).</p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
              <span className="font-mono font-bold text-emerald-700 block mb-1">Entry / Fusion</span>
              <strong className="text-slate-900 block mb-1">Inibitori Ingresso & Fusione</strong>
              <p className="text-slate-600">Maraviroc (antagonista allosterico CCR5) ed Enfuvirtide (blocco conformazionale gp41).</p>
            </div>
          </div>

          <p>
            Il successo della HAART è misurato da due parametri speculari inversamente proporzionali: <strong>la riduzione della viremia plasmatica
            a livelli non rilevabili (&lt; 20-50 copie/mL)</strong> e la <strong>progressiva risalita della conta dei linfociti T CD4+</strong> verso livelli di sicurezza
            immunologica. Un paziente con viremia stabilmente non rilevabile non sviluppa AIDS e <strong>non trasmette il virus</strong> per via sessuale
            (principio scientifico internazionale <strong>U=U: Undetectable = Untransmittable</strong>).
          </p>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/70 text-xs my-4">
            <div className="flex items-center gap-2 font-bold text-amber-950 mb-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Perché la HAART non può eradicare l'HIV? Il Paradosso dei Reservoir</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              La HAART agisce solo sulle tappe enzimatiche della replicazione virale attiva. Nelle cellule T CD4+ memory a riposo e nei macrofagi tissutali,
              il DNA provirale integrato risiede in stato trascrizionalmente silente. Questi <strong>serbatoi latenti non necessitano di enzimi virali per sopravvivere</strong>,
              non espongono antigeni e possiedono un'emivita biologica stimata in oltre <strong>40-70 anni</strong>. Se la terapia viene interrotta, anche
              dopo 20 anni di soppressione completa, il virus si riattiva tempestivamente dai serbatoi, ripopolando il plasma in poche settimane.
              La terapia deve pertanto essere assunta <strong>per tutta la vita</strong>.
            </p>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Epidemiologia Globale & Diseguaglianze di Accesso
          </h3>
          <p>
            Secondo i dati ufficiali dell'OMS (WHO), convivono con l'infezione da HIV circa <strong>37.7 milioni di persone</strong> nel mondo.
            L'introduzione della cART ha permesso di <strong>dimezzare sia le nuove infezioni annue sia la mortalità globale tra il 2000 e il 2021</strong>.
            Tuttavia, persiste una drammatica disomogeneità geografica: <strong>oltre il 75% dei casi totali è concentrato nell'Africa Subsahariana</strong>.
            La necessità di controlli trimestrali dell'immunofenotipo e della carica virale, unita al costo dei regimi farmacologici, evidenzia come
            il controllo della pandemia rimanga strettamente legato al PIL e all'equità di accesso ai presidi sanitari nei paesi in via di sviluppo.
          </p>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            La Sfida Trentennale del Vaccino Profilattico
          </h3>
          <p>
            Da oltre trent'anni la comunità scientifica investe risorse massicce per lo sviluppo di un vaccino preventivo, senza tuttavia aver raggiunto
            una formulazione commerciale efficace. Gli ostacoli biologici insormontabili comprendono:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>Costituzione precoce dei reservoir:</strong> il vaccino dovrebbe impedire l'integrazione genomica nelle prime 24-48 ore dall'esposizione.</li>
            <li><strong>Ipervariabilità genomica estrema:</strong> l'assenza di proofreading dell'RT crea ceppi divergenti continuamente.</li>
            <li><strong>Maschera glucidica (Glycan Shield) di gp120:</strong> la fitta copertura di carboidrati self protegge gli epitopi neutralizzanti dagli anticorpi.</li>
          </ul>
          <p>
            Le strategie attuali in sperimentazione clinica impiegano <strong>vettori virali ricombinanti (Poxvirus, Adenovirus)</strong> e piattaforme
            a <strong>mRNA in nanoparticelle lipidiche (LNP)</strong> volte a presentare trimeri conformazionali stabilizzati di gp120/gp41 (SOSIP) per
            stimolare simultaneamente la genesi di anticorpi bNAbs e una potente risposta cellulare memory CTL CD8+.
          </p>
        </div>
      </article>

      {/* SIMULATORE 2: CINETICA TRIFASICA, RESERVOIR & IMPATTO HAART */}
      <div id="sim-hiv-kinetics-reservoir" className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-6">
          <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold block">
              Simulatore Interattivo 2
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Cinetica Trifasica dell'HIV: Viremia, Conta CD4+, Finestra Diagnostica & Impatto HAART vs LTNP
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls Column */}
          <div className="space-y-5 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
            <div>
              <label className="text-xs font-mono uppercase text-slate-400 block mb-2 font-semibold">
                1. Fase Temporale dell'Infezione:
              </label>
              <div className="space-y-1.5">
                {[
                  { id: 'eclipse', label: 'Giorni 0-7: Fase di Eclissi' },
                  { id: 'acute_nat', label: 'Giorno 10-18: Picco NAT & p24' },
                  { id: 'seroconversion', label: 'Giorno 21-30: Sieroconversione' },
                  { id: 'latency_early', label: 'Anni 1-5: Latenza Asintomatica' },
                  { id: 'latency_late', label: 'Anni 6-10: Pre-AIDS & Shift X4' },
                  { id: 'aids_terminal', label: 'Fase Terminale: AIDS (CD4 < 200)' }
                ].map(p => (
                  <button
                    key={p.id}
                    onClick={() => setSimulationPhase(p.id as any)}
                    className={`w-full text-left p-2 rounded-lg text-xs font-bold transition-all border ${
                      simulationPhase === p.id
                        ? 'bg-blue-600 text-white border-blue-400 shadow-xs'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase text-slate-400 block mb-2 font-semibold">
                2. Profilo Genetico / Immunologico Ospite:
              </label>
              <select
                value={patientGenotype}
                onChange={(e) => setPatientGenotype(e.target.value as any)}
                className="w-full bg-slate-900 border border-slate-600 text-white text-xs rounded-lg p-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="wildtype">Wild-Type Standard (Progressione Media)</option>
                <option value="ccr5_delta32_het">CCR5-Δ32 Eterozigote (Progressione Lenta)</option>
                <option value="ccr5_delta32_hom">CCR5-Δ32 Omozigote (Refrattario / Resistente)</option>
                <option value="ltnp_kir_b">LTNP: Aplotipo KIR-B + CTL Polifunzionali</option>
              </select>
            </div>

            <div className="pt-2 border-t border-slate-700">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-xs font-semibold text-slate-300">Terapia HAART / cART Attiva:</span>
                <input
                  type="checkbox"
                  checked={haartActive}
                  onChange={(e) => setHaartActive(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded bg-slate-900 border-slate-600 focus:ring-blue-500"
                />
              </label>
              <p className="text-[11px] text-slate-400 mt-1">
                Simula l'abbattimento della viremia e la risalita dei CD4+ (principio U=U).
              </p>
            </div>
          </div>

          {/* Visual Dashboard Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">HIV-RNA Plasmatico</span>
                  <div className="text-base sm:text-lg font-mono font-bold text-red-400">
                    {patientGenotype === 'ccr5_delta32_hom' ? 'Indosabile (0)' :
                     haartActive ? '< 20 copie/mL (U=U)' :
                     simulationPhase === 'eclipse' ? 'Non Rilevabile (< 20)' :
                     simulationPhase === 'acute_nat' ? '1.000.000 copie/mL (Picco)' :
                     simulationPhase === 'seroconversion' ? '100.000 copie/mL' :
                     simulationPhase === 'latency_early' ? '5.000 copie/mL (Set-point)' :
                     simulationPhase === 'latency_late' ? '50.000 copie/mL' :
                     '500.000+ copie/mL'}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Linfociti T CD4+</span>
                  <div className="text-base sm:text-lg font-mono font-bold text-blue-400">
                    {patientGenotype === 'ccr5_delta32_hom' ? '1.050 / μL (Normale)' :
                     haartActive ? '750 - 900 / μL (Recupero)' :
                     simulationPhase === 'eclipse' ? '1.000 / μL' :
                     simulationPhase === 'acute_nat' ? '450 / μL (Drop Acuto)' :
                     simulationPhase === 'seroconversion' ? '650 / μL (Risalita)' :
                     simulationPhase === 'latency_early' ? (patientGenotype === 'ltnp_kir_b' ? '850 / μL' : '650 / μL') :
                     simulationPhase === 'latency_late' ? '350 / μL' :
                     '70 / μL (Soglia AIDS)'}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Stato Reservoir Latenti</span>
                  <div className="text-xs sm:text-sm font-mono font-bold text-purple-400">
                    {patientGenotype === 'ccr5_delta32_hom' ? 'Assenti (0)' :
                     simulationPhase === 'eclipse' ? 'In Costituzione Precoce' :
                     'Presenti (Milza, GALT, SNC)'}
                  </div>
                </div>
              </div>

              {/* Status Report */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
                <div className="font-bold text-sm text-slate-200 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-cyan-400" />
                  <span>Dettaglio Diagnostico & Prognostico:</span>
                </div>
                <div className="text-slate-300 leading-relaxed space-y-1">
                  {simulationPhase === 'eclipse' && (
                    <p>
                      <strong>Fase di Eclissi:</strong> Il paziente è stato esposto al virus, che sta replicando nella mucosa e nei linfonodi sentinella.
                      Né il test NAT dell'RNA, né il test dell'antigene p24, né gli anticorpi risultano positivi. L'individuo è formalmente sieronegativo
                      ma è già contagioso!
                    </p>
                  )}
                  {simulationPhase === 'acute_nat' && (
                    <p>
                      <strong>Picco Acuto:</strong> Esplosione viremica sistemica con viremia a milioni di copie/mL. Il test molecolare (NAT) è
                      fortemente positivo; attorno al giorno 18 compare l'antigene capsico p24. Gli anticorpi specifici non sono ancora rilevabili.
                      Quadro clinico febbrile acuto con sindrome simil-mononucleosica.
                    </p>
                  )}
                  {simulationPhase === 'seroconversion' && (
                    <p>
                      <strong>Sieroconversione:</strong> Il sistema immunitario reagisce: compaiono le IgM e subito dopo le IgG anti-p24 e anti-gp120.
                      L'espansione dei CTL CD8+ specifici inizia a ridurre la carica virale. I CD4 risalgono parzialmente verso valori subnormali.
                    </p>
                  )}
                  {simulationPhase === 'latency_early' && (
                    <p>
                      <strong>Latenza Clinica:</strong> Equilibrio dinamico stabile (set-point virologico). Paziente del tutto asintomatico.
                      {patientGenotype === 'ltnp_kir_b' && " Grazie all'aplotipo KIR-B e a CTL polifunzionali, la latenza si mantiene spontaneamente per oltre 15 anni!"}
                      {haartActive && " Con la HAART attiva, la replicazione virale è completamente congelata e la trasmissibilità sessuale è azzerata (U=U)."}
                    </p>
                  )}
                  {simulationPhase === 'latency_late' && (
                    <p>
                      <strong>Fase Pre-AIDS:</strong> I CD4 scendono progressivamente (400-300/μL). Emerge l'esaurimento dei linfociti T (T-cell exhaustion)
                      e insorgono mutazioni dell'ansa V3 con switch tropico da R5 a X4 sinciziotropo. Comparsa di sintomi costituzionali e linfoadenopatia persistente.
                    </p>
                  )}
                  {simulationPhase === 'aids_terminal' && (
                    <p>
                      <strong>AIDS Conclamato:</strong> Crollo dei CD4+ &lt; 200/μL. Rischio imminente di polmonite da <em>Pneumocystis</em>, candidosi esofagea,
                      meningite criptococcica ed encefalite da toxoplasma. Senza inizio immediato di HAART e profilassi antibiotica, l'esito è letale.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TABELLE COMPARATIVE SINOTTICHE */}
      <article id="tabelle-sinottiche" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-150 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-red-700 font-semibold block">
            Tavole Sinottiche Universitarie
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Tabelle 33.1 & 33.2: Compendio Molecolare di HIV-1 & Stratificazione Clinica dell'AIDS
          </h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-slate-800 mb-3">
              Tabella 33.1: Enzimi, Proteine Strutturali e Fattori Accessori di HIV-1
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 font-mono">
                    <th className="p-3 border-b border-slate-200">Proteina / Enzima</th>
                    <th className="p-3 border-b border-slate-200">Gene</th>
                    <th className="p-3 border-b border-slate-200">Localizzazione</th>
                    <th className="p-3 border-b border-slate-200">Funzione Biologica & Target Clinico</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-bold text-red-700">gp120</td>
                    <td className="p-3 font-mono">env</td>
                    <td className="p-3">Superficie Envelope</td>
                    <td className="p-3">Glicoproteina altamente glicosilata; lega CD4 e contiene l'ansa V3 determinante per il tropismo CCR5/CXCR4.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-bold text-red-700">gp41</td>
                    <td className="p-3 font-mono">env</td>
                    <td className="p-3">Transmembrana Envelope</td>
                    <td className="p-3">Peptide fusogeno; forma il six-helix bundle che accosta e fonde le membrane. Bersaglio di Enfuvirtide.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-bold text-blue-700">p24</td>
                    <td className="p-3 font-mono">gag</td>
                    <td className="p-3">Capside (Core)</td>
                    <td className="p-3">Guscio conico che racchiude l'RNA genomico; principale marcatore sierologico precoce (giorno 18).</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-bold text-purple-700">Trascrittasi Inversa (RT)</td>
                    <td className="p-3 font-mono">pol</td>
                    <td className="p-3">Core virale</td>
                    <td className="p-3">Retrotrascrive l'RNA virale in DNA a doppio filamento; priva di proofreading (alta mutagenesi). Bersaglio di NRTI/NNRTI.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-bold text-purple-700">Integrasi (IN)</td>
                    <td className="p-3 font-mono">pol</td>
                    <td className="p-3">Core virale</td>
                    <td className="p-3">Inserisce il cDNA provirale nel genoma dell'ospite tramite le sequenze LTR. Bersaglio degli INSTI.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-bold text-purple-700">Proteasi (PR)</td>
                    <td className="p-3 font-mono">pol</td>
                    <td className="p-3">Core virale</td>
                    <td className="p-3">Cliva i precursori Gag e Gag-Pol per la maturazione del virione infettivo. Bersaglio degli inibitori di proteasi (PI).</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-bold text-emerald-700">Tat</td>
                    <td className="p-3 font-mono">tat</td>
                    <td className="p-3">Nucleo ospite</td>
                    <td className="p-3">Transattivatore trascrizionale; lega TAR e recluta P-TEFb per massimizzare la processività di RNA Pol II.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-bold text-emerald-700">Nef</td>
                    <td className="p-3 font-mono">nef</td>
                    <td className="p-3">Citosol / Membrana</td>
                    <td className="p-3">Degrada MHC-I nei lisosomi (evasione CTL); induce filopodi nei macrofagi con trogocitosi ai B e blocco del class-switch.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-slate-800 mb-3">
              Tabella 33.2: Quadro Comparativo delle Infezioni Opportunistiche per Soglia di CD4+
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 font-mono">
                    <th className="p-3 border-b border-slate-200">Soglia CD4+</th>
                    <th className="p-3 border-b border-slate-200">Classe Patogena</th>
                    <th className="p-3 border-b border-slate-200">Infezioni Opportunistiche Caratteristiche</th>
                    <th className="p-3 border-b border-slate-200">Neoplasie Correlate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-bold text-blue-700">&gt; 500 / μL</td>
                    <td className="p-3">Batteri comuni / Virus</td>
                    <td className="p-3">Polmoniti batteriche ricorrenti (<em>Streptococcus pneumoniae</em>), Herpes zoster plurimetamerico</td>
                    <td className="p-3">Nessuna neoplasia specifica correlata a deficit immunitario</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-bold text-amber-600">200 - 500 / μL</td>
                    <td className="p-3">Funghi / Micobatteri</td>
                    <td className="p-3">Candidosi orofaringea (mughetto), Tubercolosi polmonare tipica, Leucoplachia villosa linguale (EBV)</td>
                    <td className="p-3">Carcinomi cervicali ed anali intraepiteliali da HPV</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-bold text-amber-800">&lt; 200 / μL (AIDS)</td>
                    <td className="p-3">Funghi opportunisti / Protozoi</td>
                    <td className="p-3">Polmonite da <em>Pneumocystis jirovecii</em> (PJP), Candidosi esofagea, Encefalite da <em>Toxoplasma</em>, Meningite criptococcica</td>
                    <td className="p-3">Sarcoma di Kaposi (HHV-8), Linfomi non-Hodgkin sistemici (EBV)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-bold text-red-700">&lt; 50 / μL</td>
                    <td className="p-3">Herpesvirus / Micobatteri atipici</td>
                    <td className="p-3">Retinite e colite da Cytomegalovirus (CMV), Infezione disseminata da <em>Mycobacterium avium-complex</em> (MAC)</td>
                    <td className="p-3">Linfoma primitivo del sistema nervoso centrale (PCNSL da EBV)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </article>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={quizData} lessonNumber={33} title="Verifica dell'Apprendimento · Lezione 33" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={flashcardsData} lessonNumber={33} title="Flashcard di Ripasso Attivo · Lezione 33" />
    </div>
  );
};
