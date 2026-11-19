import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
/**
 * Lezione 32: Immunologia Oncologica ed Immunoterapia dei Tumori:
 * Immunosorveglianza, Immunoediting, TME, Inibitori dei Checkpoint (CTLA-4, PD-1/PD-L1, Nobel 2018),
 * CAR-T Cell Therapy, BiTE, iRECIST, Biomarcatori & Tossicità irAEs
 *
 * Corso di Laurea Magistrale in Medicina e Chirurgia
 * Trascrizione integrale integrata dalle lezioni universitarie della Prof.ssa Ricciarda Galandrini (15/12/2025, 1ª e 2ª ora)
 * Sbobinatori: Andrea Cemino, Alice Chiaravalloti | Revisori: Alessandro Bartone, Valentina di Luzio
 */

import React, { useState, useEffect } from 'react';
import {
  Award,
  BookOpen,
  Microscope,
  ShieldCheck,
  Activity,
  Layers,
  Dna,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  Sparkles,
  FileText,
  CheckCircle,
  Heart,
  Zap,
  Crosshair,
  RefreshCw,
  Scissors,
  Stethoscope,
  ShieldAlert,
  ArrowRight,
  Info,
  Check,
  Clock,
  Eye,
  AlertTriangle,
  Flame,
  RotateCcw,
  Save,
  Trash2,
  Droplets,
  SlidersHorizontal,
  Share2,
  Radio,
  Target,
  Thermometer,
  ShieldOff
} from 'lucide-react';

interface Lezione32ViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
}

export const Lezione32View: React.FC<Lezione32ViewProps> = ({
  isSerif = false,
  fontSize = 'normal'
}) => {
  // Simulator 1 State: Cancer-Immunity Cycle & Tumor Immunotypes Lab
  const [selectedImmunotype, setSelectedImmunotype] = useState<'desert' | 'excluded' | 'inflamed'>('inflamed');
  const [hlaExpressionLevel, setHlaExpressionLevel] = useState<'normal_mhc1' | 'downregulated_mhc1' | 'loss_b2m'>('normal_mhc1');
  const [nkg2dSolubleShedding, setNkg2dSolubleShedding] = useState<boolean>(false);
  const [hasTlsStructures, setHasTlsStructures] = useState<boolean>(true);

  // Simulator 2 State: Advanced Immunotherapies Lab (ICI, CAR-T, CRS, irAEs)
  const [selectedTherapyPlatform, setSelectedTherapyPlatform] = useState<'ici_dual' | 'ici_pd1' | 'cart_generation' | 'bite_blinatumomab' | 'adc_trastuzumab'>('ici_dual');
  const [carGeneration, setCarGeneration] = useState<1 | 2 | 3 | 4 | 5>(2);
  const [tumorTargetAntigen, setTumorTargetAntigen] = useState<'cd19' | 'her2' | 'neoantigen'>('cd19');
  const [tmbStatus, setTmbStatus] = useState<'tmb_high_dmmr' | 'tmb_low_mss'>('tmb_high_dmmr');
  const [gutMicrobiotaStatus, setGutMicrobiotaStatus] = useState<'akkermansia_rich' | 'dysbiosis'>('akkermansia_rich');

  // Flashcards state
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const toggleCard = (id: number) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // 10 Academic Multiple Choice Questions for Lezione 32
  const quizQuestions = [
    {
      id: 1,
      question: "Quale fondamentale evidenza ha dimostrato l'esperimento classico dei trapianti tumorali singenici murini indotti da carcinogeni chimici?",
      options: [
        "Che il rigetto tumorale è mediato esclusivamente dalla cascata litica del complemento.",
        "Che la protezione immunitaria contro il tumore re-inoculato è specifica e trasferibile ad un topo naïve tramite il trasferimento adottivo di linfociti T CD8+.",
        "Che le cellule tumorali non esprimono antigeni riconosciuti dal sistema immunitario adattativo.",
        "Che la somministrazione di IL-4 induce l'eradicazione dei melanomi cutanei."
      ],
      correctAnswer: 1,
      explanation: "L'esperimento classico dimostra che un topo operato di tumore singenico non sviluppa la neoplasia se re-inoculato con le medesime cellule (memoria protettiva). Inoltre, trapiantando il tumore in un topo singenico naïve, la crescita neoplastica viene completamente bloccata se si trasferiscono simultaneamente linfociti T CD8+ prelevati dal topo immune, confermando l'esistenza dei Tumour Rejection Antigens (TRA) e la mediazione da parte dei CTL."
    },
    {
      id: 2,
      question: "Qual è la differenza concettuale e traslazionale cardine tra Tumor-Associated Antigens (TAA) e Tumor-Specific Antigens (TSA / Neoantigeni)?",
      options: [
        "I TAA derivano esclusivamente da virus a DNA; i TSA sono glicoproteine fisiologiche del siero.",
        "I TAA sono proteine self presenti anche nelle cellule normali ma sovraespresse nel tumore (es. HER2, PSA); i TSA sono neoantigeni generati da mutazioni genomiche o oncovirus, totalmente assenti nei tessuti sani e privi di tolleranza immunologica.",
        "I TAA sono presentati su MHC di classe I; i TSA solo su MHC di classe II.",
        "I TAA inducono una risposta immune vigorosa; i TSA sono sempre anergizzanti."
      ],
      correctAnswer: 1,
      explanation: "I TAA (come HER2/Neu, PSA, CEA o antigeni differenziativi) sono espressi anche a bassi livelli nei tessuti sani, per cui il sistema immunitario manifesta un certo grado di tolleranza centrale/periferica. I TSA (neoantigeni da oncogeni mutati come Ras, p53, Bcr-Abl o oncoproteine virali come HPV E6/E7 ed EBNA) sono unici della cellula tumorale: non essendo stati visti durante l'ontogenesi, sono fortemente immunogenici."
    },
    {
      id: 3,
      question: "Quale dei seguenti scenari descrive correttamente l'immunotipo tumorale 'Immune-Excluded'?",
      options: [
        "Totale assenza di linfociti T sia nel nido tumorale che nello stroma peritumorale.",
        "I linfociti T citotossici sono abbondanti ma rimangono confinati nello stroma peritumorale, bloccati da dense barriere di collagene, fibroblasti CAF e TGF-β, senza penetrare nel letto neoplastico.",
        "Tumore intensamente infiltrato da CTL CD8+ con formazione di Strutture Linfoidi Terziarie (TLS).",
        "Neoplasia caratterizzata da iper-espressione costitutiva di MHC di classe I in assenza di ligandi inibitori."
      ],
      correctAnswer: 1,
      explanation: "Nell'immunotipo Immune-Excluded i linfociti T CD8+ vengono correttamente reclutati dal torrente circolatorio ma non riescono a penetrare all'interno delle isole tumorali parenchimali, rimanendo bloccati alla periferia a causa della barriera stromale densa costituita da matrice extracellulare, fibroblasti associati al tumore (CAF) e citochine immunosoppressive come il TGF-β."
    },
    {
      id: 4,
      question: "Come aggirano le cellule tumorali il riconoscimento mediato dalle cellule Natural Killer (NK) quando perdono l'espressione di MHC di classe I per sfuggire ai CTL?",
      options: [
        "Sovraesprimendo costitutivamente il recettore Fas per indurre necrosi nelle cellule NK.",
        "Rilasciando nell'ambiente extracellulare i ligandi solubili del recettore attivatore NKG2D (shedding di MICA/MICB e ULBP), che legano e neutralizzano NKG2D prima del contatto cellulare.",
        "Sequestrando l'interleuchina-12 attraverso la sintesi di recettori esca solubili.",
        "Attivando la fagocitosi delle cellule NK da parte degli eosinofili intratumorali."
      ],
      correctAnswer: 1,
      explanation: "La perdita di MHC-I o di β2-microglobulina rende la cellula tumorale un bersaglio ideale per le cellule NK (Missing-Self). Tuttavia, i tumori contrastano questa immunosorveglianza effettuando lo shedding proteolitico dei ligandi di stress attivatori del recettore NKG2D (come MICA, MICB, ULBP): i ligandi solubili saturano e desensibilizzano il recettore NKG2D sulle cellule NK, bloccandone l'attivazione citotossica."
    },
    {
      id: 5,
      question: "Quali enzimi immunosoppressivi del microambiente tumorale (TME) causano 'starvation metabolica' nei linfociti T citotossici infiltranti?",
      options: [
        "Amilasi e lipasi pancreatica.",
        "Arginasi 1 (ARG1, che consuma L-arginina) e Indolammina-2,3-diossigenasi (IDO, che catabolizza L-triptofano in chinurenine).",
        "Calcineurina e fosfodiesterasi 5.",
        "Peptidilarginina deaminasi (PAD) e caspasi-1."
      ],
      correctAnswer: 1,
      explanation: "I macrofagi associati al tumore (TAM M2) e le MDSC esprimono elevati livelli di Arginasi 1 (che priva il microambiente di L-arginina, aminoacido indispensabile per l'espressione della catena CD3ζ del TCR) e di IDO (che esaurisce il triptofano generando metaboliti tossici chinureninici), arrestando il ciclo cellulare e l'attività effettrice dei linfociti T."
    },
    {
      id: 6,
      question: "Cosa differenzia sul piano biologico e temporale il checkpoint CTLA-4 dal checkpoint PD-1, premiati con il Nobel nel 2018 ad Allison e Honjo?",
      options: [
        "CTLA-4 agisce sui neutrofili nel sangue; PD-1 agisce solo sui linfociti B midollari.",
        "CTLA-4 interviene precocemente nella fase di priming nei linfonodi regionali tra APC e T naïve; PD-1 interviene successivamente nella fase effettrice a livello dei tessuti periferici e del letto tumorale.",
        "CTLA-4 stimola la proliferazione clonale; PD-1 induce la fagocitosi complemento-mediata.",
        "CTLA-4 lega l'antigene CD19; PD-1 si lega selettivamente a HER2."
      ],
      correctAnswer: 1,
      explanation: "Come evidenziato nella lezione della Prof.ssa Galandrini, CTLA-4 è il freno fisiologico precoce che agisce durante la fase di priming linfonodale, competendo con CD28 per il legame a CD80/CD86 sull'APC. PD-1 è invece il freno della fase effettrice tessutale: espresso sui CTL attivati, lega PD-L1/PD-L2 sulla cellula tumorale o sulle cellule dello stroma, spegnendo la citotossicità locale."
    },
    {
      id: 7,
      question: "Qual è la componente chiave aggiunta nei recettori chimerici CAR di Seconda Generazione rispetto alla Prima Generazione, che ne ha permesso il successo clinico (Kymriah, Yescarta)?",
      options: [
        "La catena variabile pesante di un anticorpo policlonale equino.",
        "L'integrazione di un dominio costimolatorio intracellulare (come CD28 o 4-1BB / CD137) fuso con la catena CD3ζ.",
        "La delezione totale del frammento scFv extracellulare per favorire l'adesione passiva.",
        "La secrezione costitutiva di interferone alfa e beta nel citoplasma."
      ],
      correctAnswer: 1,
      explanation: "I CAR di 1ª generazione possedevano solo la catena CD3ζ (attivazione del solo Segnale 1), andando incontro a rapida anergia ed esaurimento in vivo. I CAR di 2ª generazione hanno introdotto un dominio costimolatorio (CD28 o 4-1BB/CD137) a monte di CD3ζ, fornendo il Segnale 2 indispensabile per la proliferazione robusta, la persistenza clonale a lungo termine e l'attività citolitica antitumorale."
    },
    {
      id: 8,
      question: "Quale farmaco biologico rappresenta la terapia salvavita di prima linea per la Sindrome da Rilascio di Citochine (CRS) indotta da CAR-T?",
      options: [
        "Rituximab (anti-CD20).",
        "Tocilizumab (anticorpo monoclonale antagonista del recettore dell'Interleuchina-6 / IL-6R).",
        "Trastuzumab (anti-HER2).",
        "Ipilimumab (anti-CTLA-4)."
      ],
      correctAnswer: 1,
      explanation: "La CRS è scatenata dall'iperattivazione a cascata dei macrofagi da parte delle cellule CAR-T espanse, con rilascio massivo di IL-6, IFN-γ e TNF-α che provoca shock e CID. Il blocco mirato dell'asse dell'IL-6 mediante Tocilizumab (anti-IL-6R), eventualmente associato a corticosteroidi ad alte dosi, risolve rapidamente la tossicità sistemica senza compromettere l'efficacia del CAR-T."
    },
    {
      id: 9,
      question: "Secondo i criteri iRECIST per la valutazione delle risposte immunoterapiche, come viene definita e interpretata la 'Pseudo-progressione'?",
      options: [
        "Una rapida crescita maligna del tumore che richiede l'immediata sospensione del trattamento.",
        "Un transitorio aumento volumetrico della lesione tumorale alla TC dovuto al massivo afflusso di infiltrato infiammatorio (linfociti T e macrofagi), che precede la necrosi colliquativa e la regressione tumorale.",
        "La comparsa di metastasi ossee asintomatiche resistenti all'immunoterapia.",
        "Una reazione allergica anafilattica da anticorpi monoclonali chimerici."
      ],
      correctAnswer: 1,
      explanation: "La pseudo-progressione è un fenomeno peculiare dell'immunoterapia: all'imaging TC il tumore appare aumentato di volume (oppure compaiono apparenti nuove lesioni), ma ciò non riflette proliferazione di cellule maligne, bensì un cospicuo afflusso di infiltrato infiammatorio di linfociti T citotossici che aggrediscono la neoplasia. Spesso alla TC la massa appare ipodensa (segno di necrosi tissutale) e regredisce ai controlli successivi."
    },
    {
      id: 10,
      question: "Per quale motivo l'Ipofisite Autoimmune è un evento avverso immuno-relato (irAE) caratteristicamente associato all'anticorpo anti-CTLA-4 (Ipilimumab) ma rarissimo con anti-PD-1?",
      options: [
        "Perché Ipilimumab penetra nel liquor cefalorachidiano attraverso la barriera emato-encefalica inattivando la microglia.",
        "Perché le cellule endocrine dell'adenoipofisi esprimono ectopicamente CTLA-4 sulla propria membrana; il legame di Ipilimumab innesca citotossicità complemento-mediata ed infiammazione distruttiva ipofisaria.",
        "Perché CTLA-4 stimola direttamente la secrezione di TSH e prolattina.",
        "Perché l'ipofisi produce grandi quantità di PD-L1 che neutralizza Nivolumab."
      ],
      correctAnswer: 1,
      explanation: "Come illustrato nella lezione, le cellule secernenti dell'adenoipofisi esprimono fisiologicamente livelli rilevabili di CTLA-4. Quando Ipilimumab (un'anticorpo IgG1) vi si lega, fissa il complemento attraverso la porzione Fc scatenando un danno citotossico diretto e flogosi dell'ipofisi (ipofisite), con deficit ormonali multipli (tiroideo, surrenalico, gonadico)."
    }
  ];

  const flashcardsData = [
    {
      id: 1,
      title: "Esperimento del Rigetto Tumorale Singenico Murino",
      front: "Cosa dimostra l'esperimento classico di resezione e trapianto tumorale nei topi singenici?",
      back: "Dimostra l'esistenza dell'immunosorveglianza specifica e degli antigeni di rigetto tumorale (TRA): un topo operato rigetta un secondo inoculo delle stesse cellule. Inoltre, il trasferimento adottivo di soli linfociti T CD8+ dal topo immune a un topo naïve singenico è sufficiente a prevenire la crescita tumorale ed eradicare la neoplasia."
    },
    {
      id: 2,
      title: "TAA (Antigeni Tumore-Associati) vs TSA (Neoantigeni)",
      front: "Qual è la differenza fondamentale tra TAA e TSA per l'immunoterapia?",
      back: "TAA: proteine self fisiologiche sovraespresse nel tumore (es. HER2/Neu, PSA, CEA, MAGE, NY-ESO-1); debolmente immunogeniche a causa della tolleranza immunitaria. TSA (Neoantigeni): antigeni creati ex novo da mutazioni somatiche di oncogeni/oncosoppressori (Ras, p53, Bcr-Abl) o da oncovirus (HPV E6/E7, EBV EBNA); non esiste tolleranza, sono fortemente immunogenici."
    },
    {
      id: 3,
      title: "I Tre Immunotipi Tumorali (Desert, Excluded, Inflamed)",
      front: "Quali caratteristiche definiscono i tumori Immune-Desert, Immune-Excluded e Inflamed?",
      back: "Desert (Freddo): totale assenza di linfociti T nel tumore e nello stroma (ipossia, acidità lattica, assenza di chemochine). Excluded: linfociti presenti ma intrappolati nello stroma peritumorale da barriere di collagene e TGF-β. Inflamed (Caldo): abbondante infiltrazione intratumorale di CTL CD8+ e Th1 con Strutture Linfoidi Terziarie (TLS); massima responsività agli ICI."
    },
    {
      id: 4,
      title: "CTLA-4 (Priming) vs PD-1/PD-L1 (Fase Effettrice)",
      front: "Perché la combinazione di anti-CTLA-4 (Ipilimumab) e anti-PD-1 (Nivolumab) è sinergica?",
      back: "Agiscono in sedi e tempi complementari: CTLA-4 blocca il freno fisiologico precoce durante il priming linfonodale tra DC e T naïve espandendo il repertorio clonale; PD-1/PD-L1 rimuove il freno tissutale terminale nel microambiente tumorale riattivando i CTL esauriti. La duplice inibizione massimizza sia l'espansione che la citotossicità effettrice."
    },
    {
      id: 5,
      title: "Architettura delle 5 Generazioni di Cellule CAR-T",
      front: "Come si è evoluta la struttura del recettore chimerico dell'antigene (CAR) da 1ª a 5ª generazione?",
      back: "1ª Gen: scFv + CD3ζ (scarsa persistenza). 2ª Gen: scFv + CD3ζ + 1 dominio costimolatorio (CD28 o 4-1BB, come Kymriah e Yescarta). 3ª Gen: scFv + CD3ζ + 2 costimoli (CD28 + 4-1BB). 4ª Gen (TRUCKs): aggiunta di secrezione inducibile di citochine pro-infiammatorie (IL-12). 5ª Gen: integrazione della catena IL-2Rβ per attivazione diretta di JAK/STAT."
    },
    {
      id: 6,
      title: "Pseudo-progressione nei Criteri iRECIST & irAEs",
      front: "Cos'è la pseudo-progressione e come si differenzia la tossicità dell'anti-CTLA-4 (ipofisite)?",
      back: "La pseudo-progressione è l'aumento transitorio del volume tumorale alla TC dovuto all'afflusso massiccio di infiltrato infiammatorio di CTL (non vera proliferazione tumorale; spesso accompagnata da ipodensità per colliquazione necrotica). L'ipofisite autoimmune da anti-CTLA-4 deriva dall'espressione ectopica di CTLA-4 sull'adenoipofisi con danno complemento-mediato."
    }
  ];

  return (
    <div className="space-y-12">
      {/* MONOGRAPHIC HERO SECTION */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="border-b border-slate-200 bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 p-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-400/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                Lezione 32 · Immunologia Oncologica & Immunoterapie Avanzate
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-white">
                Immunologia dei Tumori: Immunosorveglianza, Immunoediting, Inibitori dei Checkpoint & Linfociti CAR-T
              </h1>
              <p className="text-purple-100/90 text-sm sm:text-base mt-2 max-w-4xl">
                Dall'esperimento classico murino sul rigetto dei tumori singenici mediato da linfociti T CD8+
                e il Ciclo Cancro-Immunità in 7 step, alla rivoluzione del Premio Nobel 2018 ad Allison e Honjo
                (CTLA-4, PD-1/PD-L1), l'ingegneria cellulare delle CAR-T (dalla 1ª alla 5ª generazione), i costrutti BiTE,
                la diagnostica radiologica iRECIST e la gestione clinica degli eventi avversi immuno-relati (irAEs).
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-purple-800/50 text-xs text-purple-200/90 font-medium">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-purple-400" />
              <span><strong>Docente:</strong> Prof.ssa Ricciarda Galandrini</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-400" />
              <span><strong>Data:</strong> 15 Dicembre 2025 (1ª e 2ª ora, h8:00 - 10:00)</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-purple-400" />
              <span><strong>Sbobinatori:</strong> Andrea Cemino, Alice Chiaravalloti | <strong>Revisori:</strong> Alessandro Bartone, Valentina di Luzio</span>
            </div>
          </div>
        </div>

        {/* METRICS & OVERVIEW STRIP */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-200 bg-slate-50 border-b border-slate-200 text-xs">
          <div className="p-4 flex items-center gap-3">
            <Award className="w-5 h-5 text-amber-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900">Premio Nobel 2018</div>
              <div className="text-slate-500 text-[11px]">Allison (CTLA-4) & Honjo (PD-1)</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-3">
            <Layers className="w-5 h-5 text-purple-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900">5 Generazioni CAR-T</div>
              <div className="text-slate-500 text-[11px]">Kymriah, Yescarta, TRUCKs</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-3">
            <Radio className="w-5 h-5 text-indigo-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900">3 Immunotipi & TLS</div>
              <div className="text-slate-500 text-[11px]">Desert, Excluded, Inflamed</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-3">
            <SlidersHorizontal className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900">2 Laboratori Interattivi</div>
              <div className="text-slate-500 text-[11px]">Ciclo Cancro & Terapie ICI/CAR</div>
            </div>
          </div>
        </div>
      </div>

      {/* SEZIONE 32.1: IMMUNOSORVEGLIANZA & ESPERIMENTO CLASSICO MURINO */}
      <article id="sec-32-1" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-purple-700 font-semibold block">
            Sezione 32.1 · Basi Sperimentali Fondamentali
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Immunosorveglianza Antitumorale & l'Esperimento Classico del Rigetto nei Topi Singenici
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Il concetto di <strong>immunosorveglianza tumorale</strong> poggia sulla capacità intrinseca del sistema immunitario adattativo
            di riconoscere, contrastare ed eliminare le cellule neoplastiche emergenti. A seguito della trasformazione neoplastica,
            la cellula perde le caratteristiche di tolleranza immunologica tipiche del tessuto normale (<em>self</em>), esponendo determinanti antigenici
            che la qualificano come <em>non-self</em> o <em>altered-self</em>.
          </p>
          <p>
            Dal punto di vista clinico-epidemiologico, la maggioranza dei tumori insorge in pazienti apparentemente immunocompetenti:
            ciò non smentisce l'immunosorveglianza, ma dimostra l'esistenza di sofisticati processi di evasione darwiniana.
            Due evidenze storiche cardine ne testimoniano l'efficacia protettiva:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-800 text-xs">
            <li>
              <strong>Valore prognostico dei TILs (Tumor-Infiltrating Lymphocytes):</strong> la quantificazione bioptica di una cospicua infiltrazione
              di linfociti T citotossici CD8+ all'interno del letto tumorale correla in modo statisticamente robusto con una sopravvivenza globale (Overall Survival) marcatamente superiore.
            </li>
            <li>
              <strong>Aumentata incidenza neoplastica negli immunodeficienti:</strong> soggetti con immunodeficienze congenite o iatrogeniche (pazienti trapiantati d'organo solido sottoposti ad immunosoppressione cronica, pazienti affetti da infezione da HIV/AIDS) manifestano una frequenza elevatissima di neoplasie indotte da virus oncogeni e tumori cutanei.
            </li>
          </ul>

          <div className="my-6 p-5 rounded-xl border border-purple-200 bg-purple-50/70">
            <div className="flex items-start gap-3">
              <Microscope className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-purple-950 text-sm">
                  L'Esperimento Classico dei Tumori Singenici Murini Trapiantabili
                </h4>
                <p className="text-purple-900 text-xs mt-1.5 leading-relaxed font-serif-body">
                  In modelli murini, l'induzione di tumori cutanei mediante carcinogeni chimici (es. metilcolantrene) genera masse neoplastiche
                  singeniche trapiantabili. L'esperimento si articola in tre passaggi paradigmici:
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-1.5 text-xs text-purple-950 font-serif-body">
                  <li><strong>Resezione ed Immunizzazione:</strong> asportando chirurgicamente il tumore primitivo e re-iniettando le medesime cellule tumorali nello stesso topo donatore, il tumore <strong>non cresce</strong> (il topo ha acquisito una memoria immunitaria protettiva specifica contro quel clone).</li>
                  <li><strong>Trapianto in Ricevente Naïve:</strong> se le medesime cellule tumorali vengono iniettate in un topo sano singenico (geneticamente identico), il tumore cresce rapidamente, confermando che l'animale naïve non possiede cellule T pre-attivate.</li>
                  <li><strong>Trasferimento Adottivo di Linfociti T CD8+:</strong> se nel topo singenico naïve si inoculano le cellule tumorali contemporaneamente al <strong>trasferimento adottivo di linfociti T CD8+ purificati dal topo immunizzato</strong>, la crescita del tumore viene <strong>completamente prevenuta ed eradicata</strong>.</li>
                </ol>
                <p className="text-purple-900 text-xs mt-2 leading-relaxed">
                  Questo esperimento miliare ha dimostrato che il rigetto del tumore è mediato dai linfociti T CD8+ citotossici
                  attraverso il riconoscimento di antigeni tumore-specifici, definiti <strong>Tumour Rejection Antigens (TRA)</strong> o <strong>TSTA</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* SEZIONE 32.2: TASSONOMIA DEGLI ANTIGENI TUMORALI: TAA VS TSA */}
      <article id="sec-32-2" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-purple-700 font-semibold block">
            Sezione 32.2 · Tassonomia Molecolare
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Antigeni Tumore-Associati (TAA) vs Antigeni Tumore-Specifici (TSA / Neoantigeni)
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Il riconoscimento della cellula tumorale da parte del sistema immunitario adattativo dipende dalla natura e dalla densità degli antigeni
            esposti sulla membrana cellulare o presentati nei solchi delle molecole HLA di classe I e classe II. Si distinguono due grandi categorie:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            {/* TAA */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-900 text-sm block mb-1 text-blue-900">
                1. Tumor-Associated Antigens (TAA - Tumore-Associati)
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Sono proteine self espresse anche nelle cellule normali differenziate, ma che nella neoplasia risultano marcatamente <strong>iper-espresse o aberranti</strong>.
                Poiché sono antigeni self, il sistema immunitario possiede un certo grado di tolleranza centrale o periferica; risultano pertanto <em>debolmente immunogenici</em> e non oncogeni di per sé.
              </p>
              <div className="mt-2.5 p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800">
                <span className="font-bold block mb-1">Esempi Clinici di TAA:</span>
                <ul className="list-disc pl-4 space-y-1">
                  <li><strong>Proteine self amplificate:</strong> <em>HER2/Neu (ErbB2)</em>, recettore tirosin-chinasico della famiglia EGFR espresso a bassi livelli nell'epitelio sano ma iper-amplificato nel 20% dei carcinomi mammari e gastrici.</li>
                  <li><strong>Antigeni di differenziazione tissutale:</strong> <em>PSA</em> (prostata), <em>CEA</em> (carcino-embrionario nel colon), <em>tirosinasi</em> e <em>MART-1</em> nei melanomi.</li>
                  <li><strong>Cancer-Testis Antigens (CTA):</strong> <em>NY-ESO-1</em> e <em>MAGE-1</em>, silenziati nei tessuti sani adulti (tranne trofoblasto e spermatociti privi di MHC) e riattivati ectopicamente nei tumori.</li>
                </ul>
              </div>
            </div>

            {/* TSA */}
            <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/60">
              <span className="font-bold text-purple-950 text-sm block mb-1">
                2. Tumor-Specific Antigens (TSA / Neoantigeni)
              </span>
              <p className="text-xs text-purple-950 leading-relaxed font-serif-body">
                Sono antigeni espressi <strong>esclusivamente dalle cellule tumorali</strong> e totalmente assenti nelle cellule sane dell'organismo.
                Scaturiscono da mutazioni genomiche somatiche o dall'espressione di proteine codificate da virus oncogeni.
                Non essendo mai stati presentati nel timo durante la selezione centrale, non esiste tolleranza: sono <strong>estremamente immunogenici</strong>.
              </p>
              <div className="mt-2.5 p-2.5 rounded-lg bg-white border border-purple-200 text-xs text-purple-950">
                <span className="font-bold block mb-1">Esempi Clinici di TSA / Neoantigeni:</span>
                <ul className="list-disc pl-4 space-y-1 font-serif-body">
                  <li><strong>Prodotti di oncogeni mutati:</strong> oncoproteina <em>Ras</em> mutata (K-Ras G12D), oncosoppressore <em>p53</em> mutato, proteina di fusione <em>Bcr-Abl</em> nella Leucemia Mieloide Cronica (cromosoma Philadelphia t(9;22)).</li>
                  <li><strong>Oncogeni virali esogeni:</strong> oncoproteine <em>E6 ed E7</em> del Papillomavirus umano (HPV nel carcinoma della cervice uterina e dell'orofaringe), antigene <em>EBNA</em> del virus di Epstein-Barr (EBV nel linfoma di Burkitt e carcinoma nasofaringeo).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* SEZIONE 32.3: IL CICLO CANCRO-IMMUNITÀ & STRUTTURE LINFOIDI TERZIARIE (TLS) */}
      <article id="sec-32-3" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-purple-700 font-semibold block">
            Sezione 32.3 · Dinamica Cellulare Sistemica
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Il Ciclo Cancro-Immunità in 7 Step & il Ruolo Chiave delle Strutture Linfoidi Terziarie (TLS)
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            La risposta immunitaria efficace contro un tumore non è un evento statico, bensì un processo ciclico iterativo auto-amplificante
            descritto da Daniel Chen e Ira Mellman come il <strong>Cancer-Immunity Cycle</strong>, articolato in sette passaggi sequenziali:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4 text-xs">
            <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-900 block mb-1">Step 1: Rilascio di Antigeni Tumorali</span>
              <p className="text-slate-600">Le cellule tumorali morenti (per apoptosi, necrosi o danno ischemico) rilasciano neoantigeni peptidici e allarmine DAMPs nel microambiente.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-900 block mb-1">Step 2: Captazione da Cellule Dendritiche</span>
              <p className="text-slate-600">Le cellule dendritiche (DC residenti, in particolare cDC1) fagocitano i detriti antigenici, stimolate dai DAMPs via TLR.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-900 block mb-1">Step 3: Priming Linfonodale</span>
              <p className="text-slate-600">Le DC migrano ai linfonodi drenanti ed eseguono la cross-presentazione su MHC-I e MHC-II, attivando i linfociti T naïve CD8+ e CD4+.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-900 block mb-1">Step 4: Trafficking dei CTL nel Sangue</span>
              <p className="text-slate-600">I linfociti T citotossici (CTL) clonati entrano nel circolo ematico guidati da integrine e gradienti chemochinici.</p>
            </div>
            <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-900 block mb-1">Step 5: Infiltrazione nel Letto Tumorale</span>
              <p className="text-slate-600">I CTL attraversano l'endotelio vascolare tumorale extravasando nel parenchima neoplastico (o posizionandosi nello stroma peritumorale).</p>
            </div>
            <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-900 block mb-1">Step 6: Riconoscimento Specifico del Tumore</span>
              <p className="text-slate-600">Il TCR del CTL ingaggia specificamente il complesso neoantigene-MHC di classe I esposto sulla superficie della cellula neoplastica.</p>
            </div>
          </div>
          <div className="p-3.5 rounded-lg border border-purple-200 bg-purple-50/70 text-xs">
            <span className="font-bold text-purple-950 block mb-1">Step 7: Killing Citotossico & Auto-Amplificazione</span>
            <p className="text-purple-900 leading-relaxed font-serif-body">
              Il CTL rilascia perforine e granzimi, inducendo l'apoptosi della cellula tumorale. La lisi tumorale disperde ulteriori neoantigeni e allarmine DAMPs,
              che vengono ri-captati da nuove DC alimentando un nuovo ciclo cancro-immunità a cascata.
            </p>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Strutture Linfoidi Terziarie (TLS): I Linfonodi Intratumorali
          </h3>
          <p>
            Nel contesto immune della neoplasia possono formarsi le <strong>Strutture Linfoidi Terziarie (TLS, Tertiary Lymphoid Structures)</strong>:
            aggregati altamente organizzati di linfociti T, follicoli di cellule B e cellule dendritiche mature follicolari (FDC) dotati di venule ad endotelio alto (HEV).
            Le TLS funzionano come veri e propri <em>linfonodi ectopici in situ</em>: consentono la presentazione dell'antigene, il priming e l'espansione clonale direttamente
            nel microambiente tumorale, bypassando la necessità di migrazione ai linfonodi regionali. La loro presenza alla biopsia correla in modo eccezionale
            con la sensibilità agli inibitori dei checkpoint e con una prognosi favorevole a lungo termine.
          </p>
        </div>
      </article>

      {/* SEZIONE 32.4: I TRE IMMUNOTIPI TUMORALI: DESERT, EXCLUDED & INFLAMED */}
      <article id="sec-32-4" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-purple-700 font-semibold block">
            Sezione 32.4 · Istotipo Funzionale & Microambiente
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            I Tre Immunotipi Tumorali: Immune-Desert, Immune-Excluded & Inflamed
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            In base all'abbondanza, alla localizzazione topografica e allo stato di attivazione dei linfociti T rispetto al nido tumorale,
            le neoplasie solide vengono classificate in <strong>tre immunotipi fondamentali</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-900 text-sm block mb-1 text-blue-900">1. Immune-Desert</span>
              <span className="text-[11px] font-mono text-slate-500 block mb-2">Tumore Freddo (Cold)</span>
              <p className="text-xs text-slate-700 leading-relaxed">
                I linfociti T sono totalmente assenti sia all'interno del tumore che nello stroma circostante.
                Le cellule immunitarie vengono respinte da un microambiente ostile caratterizzato da <strong>assenza di chemochine (CXCL9/10)</strong>,
                grave ipossia da vascolarizzazione anomala, acidificazione lattica e deprivazione metabolica di glucosio e triptofano. Risposta minima o nulla all'immunoterapia standard.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-900 text-sm block mb-1 text-amber-900">2. Immune-Excluded</span>
              <span className="text-[11px] font-mono text-slate-500 block mb-2">Tumore Immuno-Escluso</span>
              <p className="text-xs text-slate-700 leading-relaxed">
                I linfociti T vengono reclutati dal circolo ma rimangono confinati nello <strong>stroma connettivale peritumorale</strong>, incapaci di penetrare nel parenchima neoplastico.
                Sono bloccati fisicamente da dense barriere di collagene deposte da fibroblasti associati al tumore (CAF) e dalla presenza di citochine soppressive quali il <strong>TGF-β</strong>.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-900 text-sm block mb-1 text-emerald-900">3. Inflamed</span>
              <span className="text-[11px] font-mono text-slate-500 block mb-2">Tumore Caldo (Hot)</span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Cospicua infiltrazione intratumorale di linfociti T CD8+ e Th1 a stretto contatto con le cellule neoplastiche, con presenza di <strong>TLS</strong> e firma infiammatoria da IFN-γ.
                I linfociti sono tuttavia frenati dall'espressione di checkpoint inibitori (PD-L1): rappresentano i candidati ideali con <strong>massima percentuale di risposta agli ICI</strong>.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-700">
            <strong>Correlazione Prognostica Cellulare:</strong> La quantificazione dei linfociti <strong>T CD8+ e Th1</strong> correla positivamente con la sopravvivenza del paziente;
            al contrario, l'abbondanza di <strong>macrofagi TAM M2</strong>, di <strong>MDSC</strong> e di <strong>Treg</strong> correla quasi costantemente con prognosi sfavorevole e progressione metastatica.
          </p>
        </div>
      </article>

      {/* SEZIONE 32.5: CANCER IMMUNOEDITING & MECCANISMI DI FUGA (MHC-I & NKG2D) */}
      <article id="sec-32-5" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-purple-700 font-semibold block">
            Sezione 32.5 · Evasione Immunitaria & Plasticità Neoplastica
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Cancer Immunoediting (Le Tre 'E') & Evasione: Down-regulation di MHC-I e Shedding di NKG2D
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Il rapporto tra tumore e sistema immunitario è un processo dinamico darwiniano formulato da Robert Schreiber come <strong>Cancer Immunoediting</strong>,
            articolato nelle cosiddette <em>Tre "E"</em>:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-800">
            <li><strong>Eliminazione (Elimination):</strong> fase iniziale in cui l'immunosorveglianza innata ed adattativa riconosce ed eradica le cellule trasformate emergenti prima che formino una massa clinicamente visibile.</li>
            <li><strong>Equilibrio (Equilibrium):</strong> fase di dormienza immunitaria che può durare decenni; il sistema immunitario contiene la crescita neoplastica ma seleziona cloni tumorali resistenti meno immunogenici.</li>
            <li><strong>Evasione (Escape):</strong> i cloni tumorali selezionati eludono il controllo immunitario, acquisendo la capacità di proliferare incontrollatamente e dare metastasi.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            La Perdita di MHC di Classe I & il Paradosso delle Cellule Natural Killer
          </h3>
          <p>
            Uno dei meccanismi più frequenti di evasione consiste nella <strong>down-regolazione o perdita completa delle molecole HLA di classe I e della β2-microglobulina</strong>.
            Priva di MHC-I, la cellula tumorale diventa invisibile ai linfociti T citotossici CD8+.
          </p>
          <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/70 text-xs text-slate-800 space-y-2">
            <span className="font-bold text-rose-950 block">Il Contrattacco delle Cellule NK & lo Shedding di NKG2D:</span>
            <p className="leading-relaxed font-serif-body">
              Fisiologicamente, la perdita di MHC-I attiva le cellule <strong>Natural Killer (NK) per meccanismo di Missing-Self</strong> (rimozione del segnale inibitorio KIR).
              Per eludere anche le cellule NK, le cellule tumorali mettono in atto una strategia biochimica evasiva:
              esprimono i ligandi di stress attivatori del recettore <strong>NKG2D</strong> (come le glicoproteine MICA, MICB e ULBP), ma anziché mantenerli ancorati alla membrana,
              attivano metalloproteasi di superficie che ne provocano il distacco idrolitico nel mezzo extracellulare (<strong>shedding dei ligandi solubili</strong>).
              I ligandi solubili circolanti legano e desensibilizzano il recettore NKG2D sulle cellule NK prima che esse possano avvicinarsi al tumore, disattivandone la risposta citotossica.
            </p>
          </div>
        </div>
      </article>

      {/* SEZIONE 32.6: MICROAMBIENTE TUMORALE (TME): TAM M2, MDSC, STARVATION & TREG */}
      <article id="sec-32-6" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-purple-700 font-semibold block">
            Sezione 32.6 · Immunometabolismo & Cellule Soppressorie
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Il Microambiente Tumorale (TME): TAM M2, Starvation da Arginasi/IDO, MDSC & Treg (CCL22)
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Il microambiente tumorale non è un semplice aggregato di cellule neoplastiche, ma un ecosistema eterogeneo complesso (stroma, vasi, cellule immunitarie)
            polarizzato dal tumore verso uno stato di <strong>profonda immunosoppressione</strong>:
          </p>

          <div className="space-y-4 my-4 text-xs">
            {/* TAM M2 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="font-bold text-slate-900 text-sm block text-blue-900">
                1. Macrofagi Associati al Tumore (TAM M2)
              </span>
              <p className="text-slate-700 leading-relaxed">
                Monociti reclutati dal circolo ematico attraverso chemochine tumorali (<strong>CCL2, M-CSF, VEGF</strong>) e differenziati localmente in macrofagi M2
                sotto l'influenza di IL-4, IL-10, TGF-β e CSF. I TAM M2 secernono fattori angiogenici (VEGF, FGF, PDGF) e metalloproteasi (MMP-2, MMP-9)
                che favoriscono l'invasione vascolare e le metastasi, mentre sopprimono l'immunità adattativa producendo IL-10 e TGF-β.
              </p>
            </div>

            {/* Starvation Metabolica */}
            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/70 space-y-2">
              <span className="font-bold text-amber-950 text-sm block">
                2. Starvation Metabolica: Arginasi 1 & IDO
              </span>
              <p className="text-slate-700 leading-relaxed font-serif-body">
                I TAM M2 e le cellule mieloidi esprimono alti livelli di <strong>Arginasi 1 (ARG1)</strong>, che consuma avidamente l'aminoacido essenziale <em>L-arginina</em>,
                indispensabile per la sintesi della catena di trasduzione CD3ζ nei linfociti T.
                Parallelamente, l'iper-espressione dell'enzima <strong>IDO (indolammina-2,3-diossigenasi)</strong> degrada il <em>triptofano</em> in chinurenine tossiche,
                bloccando il ciclo cellulare dei CTL CD8+ e potenziando la differenziazione dei Treg.
              </p>
            </div>

            {/* Treg & CCL22 */}
            <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/70 space-y-2">
              <span className="font-bold text-purple-950 text-sm block">
                3. Linfociti T Regolatori (Treg) & Chemochina CCL22
              </span>
              <p className="text-slate-700 leading-relaxed">
                Le cellule tumorali producono attivamente la chemochina <strong>CCL22</strong>, che si lega specificamente al recettore <strong>CCR4</strong> espresso ad alta densità sui linfociti Treg.
                I Treg infiltrano massivamente il letto tumorale, sequestrano l'IL-2 dal microambiente attraverso il recettore ad altissima affinità <strong>CD25</strong>
                (privando i CTL responder del loro fattore di crescita) e producono adenosina immunosoppressiva.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* SEZIONE 32.7: IMMUNOTERAPIE CON ANTICORPI MONOCLONALI: TARGETING, ADC & BITE */}
      <article id="sec-32-7" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-purple-700 font-semibold block">
            Sezione 32.7 · Biologia degli Anticorpi Ricombinanti
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Immunoterapie con Anticorpi: Tumor-Targeting (Trastuzumab), Coniugati Farmaco-Anticorpo (ADC) & Costrutti BiTE
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            L'impiego degli anticorpi monoclonali in oncologia si articola in tre piattaforme ingegneristiche distinte:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 text-xs">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="font-bold text-slate-900 text-sm block text-blue-900">1. Tumor-Targeting mAbs</span>
              <p className="text-slate-700 leading-relaxed">
                Anticorpi monoclonali 'nudi' che legano specificamente antigeni tumorali sulla superficie della cellula neoplastica.
                Agiscono con un duplice meccanismo:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-slate-600">
                <li><strong>Funzioni Fc-mediate:</strong> attivazione dell'ADCC da parte delle cellule NK (via CD16), fagocitosi macrofagica (ADCP) e attivazione del complemento (CDC).</li>
                <li><strong>Blocco del segnale oncogenico:</strong> es. <strong>Trastuzumab</strong> lega HER2/Neu, impedendone la dimerizzazione e spegnendo i segnali pro-sopravvivenza PI3K/Akt.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/60 space-y-2">
              <span className="font-bold text-purple-950 text-sm block">2. Antibody-Drug Conjugates (ADC)</span>
              <p className="text-purple-900 leading-relaxed font-serif-body">
                Complessi farmaceutici costituiti da un anticorpo monoclonale tumor-specifico coniugato mediante linker chimico ad un farmaco chemioterapico altamente citotossico
                (es. tossine inibitrici dei microtubuli o inibitori della topoisomerasi I, come in Trastuzumab emtansine T-DM1 o Trastuzumab deruxtecan).
                L'anticorpo funge da 'cavallo di Troia': riconosce il recettore neoplastico, viene internalizzato per endocitosi e nei lisosomi rilascia selettivamente
                il chemioterapico dentro la cellula tumorale, azzerando la tossicità sistemica sui tessuti sani.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/60 space-y-2">
              <span className="font-bold text-emerald-950 text-sm block">3. Costrutti BiTE</span>
              <p className="text-slate-700 leading-relaxed">
                <em>Bispecific T-cell Engagers:</em> molecole ricombinanti composte da due domini variabili a catena singola (scFv) uniti da un linker flessibile.
                Un dominio scFv lega un antigene tumorale (es. <strong>CD19</strong>), mentre l'altro lega la catena <strong>CD3</strong> del TCR sui linfociti T.
                Il costrutto BiTE (es. <strong>Blinatumomab</strong>) forza la formazione di una <strong>sinapsi citolitica artificiale</strong> tra CTL e cellula leucemica,
                scatenando la lisi cellulare perforina/granzima-dipendente in modo totalmente <strong>indipendente dal legame con molecole MHC</strong>.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* SEZIONE 32.8: INIBITORI DEI CHECKPOINT (ICI) & PREMIO NOBEL 2018 */}
      <article id="sec-32-8" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-purple-700 font-semibold block">
            Sezione 32.8 · La Rivoluzione dei Checkpoint Inibitori
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Inibitori dei Checkpoint Immunitari (ICI): Premio Nobel 2018 ad Allison e Honjo & lo Studio NEJM 2017
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/70 my-3">
            <div className="flex items-center gap-2 font-bold text-amber-950 text-sm mb-1.5">
              <Award className="w-5 h-5 text-amber-600 shrink-0" />
              <span>Premio Nobel per la Fisiologia o la Medicina 2018: James P. Allison & Tasuku Honjo</span>
            </div>
            <p className="text-amber-900 text-xs leading-relaxed font-serif-body">
              Il conferimento del Premio Nobel 2018 ad Allison e Honjo ha sancito il passaggio epocale dalla terapia diretta contro la cellula tumorale
              (chemio/radioterapia) all'<strong>immunoterapia dei checkpoint</strong>: anziché colpire direttamente il tumore, si rimuovono i 'freni molecolari'
              fisiologici del sistema immunitario, liberando i linfociti T citotossici affinché distruggano autonomamente le masse neoplastiche.
            </p>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            La Dicotomia Spazio-Temporale: CTLA-4 vs PD-1 / PD-L1
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="font-bold text-slate-900 block text-blue-900">CTLA-4 (Ipilimumab) · Fase di Priming</span>
              <p className="text-slate-700 leading-relaxed">
                Agisce precocemente all'interno dei <strong>linfonodi drenanti regionali</strong> durante la fase di attivazione (priming) dei linfociti T naïve.
                CTLA-4 compete con CD28 per il legame ai ligandi B7 (CD80/CD86) sull'APC.
                Il blocco farmacologico con <strong>Ipilimumab</strong> rimuove questo freno iniziale, aumentando l'ampiezza dell'espansione clonale T e il repertorio di cloni antitumorali attivati.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/60 space-y-2">
              <span className="font-bold text-purple-950 block">PD-1 / PD-L1 (Nivolumab, Pembrolizumab) · Fase Effettrice</span>
              <p className="text-purple-900 leading-relaxed font-serif-body">
                Agisce tardivamente all'interno dei <strong>tessuti periferici e del letto tumorale</strong> durante la fase effettrice citotossica.
                PD-1 è espresso sui CTL cronicamente stimolati; il suo legame con PD-L1 (espresso dalle cellule tumorali e dai TAM M2) spegne la via PI3K/Akt reclutando la fosfatasi SHP-2.
                Il blocco con anticorpi anti-PD-1 (Nivolumab, Pembrolizumab) o anti-PD-L1 (Atezolizumab, Durvalumab) risveglia i linfociti T dallo stato di esaurimento (exhaustion).
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Lo Studio Landmark NEJM 2017: Duplice Inibizione nel Melanoma Metastatico
          </h3>
          <p>
            Lo studio clinico prospettico pubblicato sul <em>New England Journal of Medicine</em> nel 2017 ha confrontato la monoterapia rispetto alla
            <strong>combinazione di Nivolumab (anti-PD-1) + Ipilimumab (anti-CTLA-4)</strong> in pazienti affetti da melanoma metastatico avanzato:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-800">
            <li>La duplice inibizione ha dimostrato un aumento straordinario e statisticamente significativo della <strong>Progression-Free Survival (PFS)</strong> e dell'<strong>Overall Survival (OS)</strong> a 3 e 5 anni rispetto alle monoterapie.</li>
            <li>Oltre il 50% dei pazienti trattati con la combinazione ha ottenuto una remissione a lungo termine con plateau nelle curve di sopravvivenza, trasformando una patologia precedentemente letale entro pochi mesi in una condizione cronicamente controllabile o guarita.</li>
          </ul>
        </div>
      </article>

      {/* SEZIONE 32.9: TERAPIA CELLULARE CAR-T (GENERAZIONI 1-5, CRS & CAR-NK) */}
      <article id="sec-32-9" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-purple-700 font-semibold block">
            Sezione 32.9 · Terapie Cellulari Avanzate
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Linfociti CAR-T: Ingegnerizzazione Genica, Generazioni da 1 a 5, Sindrome CRS (IL-6) & Cellule CAR-NK
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            La terapia cellulare con <strong>Linfociti CAR-T (Chimeric Antigen Receptor T-cell)</strong> rappresenta il vertice della medicina immunologica personalizzata:
            consiste nel prelevare i linfociti T autologhi del paziente, ingegnerizzarli geneticamente affinché esprimano un recettore sintetico mirato contro un antigene tumorale ed infonderli nuovamente nel paziente dopo chemioterapia di linfo-deplezione.
          </p>

          <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">
            Architettura del Recettore Chimerico CAR: Il Vantaggio del Non-MHC
          </h3>
          <p>
            Il recettore CAR è una molecola ibrida artificiale costituita da:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-800">
            <li><strong>Dominio extracellulare di riconoscimento:</strong> un frammento a catena singola variabile (<strong>scFv</strong>) derivato dai domini variabili (V_H e V_L) di un anticorpo monoclonale specifico per un antigene tumorale di superficie (es. <strong>CD19</strong> o <strong>CD20</strong> nei tumori ematologici B).</li>
            <li><strong>Vantaggio clinico rivoluzionario:</strong> a differenza del TCR fisiologico, il CAR riconosce l'antigene conformazionale nativo <em>in modo totalmente indipendente da MHC</em>, neutralizzando il meccanismo di fuga tumorale basato sulla perdita di HLA di classe I.</li>
            <li><strong>Dominio intracellulare di trasduzione:</strong> la catena <strong>CD3ζ (catena Z)</strong> dotata di 3 motivi ITAM che inviano il segnale litico di attivazione alla cellula T.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Le Cinque Generazioni di Costrutti CAR
          </h3>
          <div className="space-y-3 my-4 text-xs">
            <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-bold shrink-0">1ª Gen</span>
              <p className="text-slate-700"><strong>scFv + catena CD3ζ:</strong> priva di costimolo; i linfociti andavano incontro a rapida anergia ed esaurimento in vivo entro pochi giorni.</p>
            </div>
            <div className="p-3 rounded-lg border border-purple-200 bg-purple-50/70 flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-purple-200 text-purple-900 font-bold shrink-0">2ª Gen</span>
              <p className="text-purple-950 font-serif-body">
                <strong>scFv + CD3ζ + 1 Dominio Costimolatorio (CD28 o 4-1BB/CD137):</strong> l'aggiunta del costimolo attiva le vie delle chinasi (PI3K/Akt o TRAF), conferendo elevata proliferazione, persistenza clonale e memoria. Base dei farmaci approvati da AIFA nel 2019: <em>Tisagenlecleucel (Kymriah, anti-CD19 con 4-1BB)</em> e <em>Axicabtagene ciloleucel (Yescarta, anti-CD19 con CD28)</em> per LLA-B pediatrica e linfomi diffusi a grandi cellule B resistenti.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-bold shrink-0">3ª Gen</span>
              <p className="text-slate-700"><strong>scFv + CD3ζ + 2 Domini Costimolatori (CD28 + 4-1BB o OX40):</strong> combinazione di costimoli differenti, senza tuttavia mostrare una netta superiorità clinica rispetto alla 2ª generazione.</p>
            </div>
            <div className="p-3 rounded-lg border border-indigo-200 bg-indigo-50/70 flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-indigo-200 text-indigo-900 font-bold shrink-0">4ª Gen</span>
              <p className="text-indigo-950 font-serif-body">
                <strong>TRUCKs (T cells Redirected for Universal Cytokine-mediated Killing):</strong> CAR di 2ª gen ingegnerizzati con un promotore inducibile per la sintesi e secrezione locale di citochine pro-infiammatorie nel letto tumorale (es. <strong>IL-12</strong> o IL-18), per rimodellare il TME nei tumori solidi.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-emerald-200 bg-emerald-50/70 flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-bold shrink-0">5ª Gen</span>
              <p className="text-emerald-950 font-serif-body">
                <strong>Next-Generation CAR:</strong> CAR di 2ª gen con integrazione della <strong>catena β del recettore per IL-2 (IL-2Rβ)</strong> e sito di legame per STAT3/5, attivando la cascata JAK-STAT in modo antigene-dipendente per prevenire l'exhaustion.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Tossicità Clinica: CRS (Sindrome da Rilascio di Citochine) & Frontiere CAR-NK
          </h3>
          <p>
            Le CAR-T sono vere e proprie 'bombe biologiche viventi': la loro massiva attivazione in vivo può scatenare la
            <strong>Sindrome da Rilascio di Citochine (CRS)</strong>, causata dall'attivazione secondaria a cascata dei macrofagi residenti con tempesta iper-citochinemica sistemica
            (elevatissimi livelli di <strong>IL-6</strong>, IFN-γ e TNF-α), iperpiressia elevata, ipotensione severa, insufficienza multiorgano e coagulazione intravascolare disseminata (CID).
            Il trattamento salvavita d'elezione consiste nel tempestivo blocco recettoriale con l'anticorpo monoclonale <strong>Tocilizumab (anti-IL-6R)</strong> associato a corticosteroidi.
          </p>
          <p className="text-xs text-slate-700">
            Per superare i limiti delle CAR-T autologhe (costi esorbitanti, tempi produttivi di 2–4 settimane non compatibili con neoplasie fulminanti)
            la ricerca attuale punta allo sviluppo di <strong>CAR-NK allogeniche 'Off-the-Shelf'</strong>: le cellule NK non esprimono TCR (quindi non possono causare Graft-versus-Host Disease / GVHD)
            e possono essere congelate e somministrate a qualsiasi ricevente senza restrizione MHC.
          </p>
        </div>
      </article>

      {/* SEZIONE 32.10: CRITERI IRECIST, SINERGIA RADIOTERAPICA, BIOMARCATORI & IRAES */}
      <article id="sec-32-10" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-purple-700 font-semibold block">
            Sezione 32.10 · Valutazione Clinica & Tossicità
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Criteri iRECIST (Pseudo-progressione), Sinergia con Radioterapia, Biomarcatori & Tossicità irAEs
          </h2>
        </div>
        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            I Criteri iRECIST & il Reperto di 'Pseudo-progressione'
          </h3>
          <p>
            L'introduzione dell'immunoterapia ha imposto la riscrittura dei criteri radiologici di risposta tumorale (criteri <strong>iRECIST</strong>).
            Nei trattamenti chemioterapici tradizionali, l'aumento delle dimensioni tumorali indica inequivocabilmente fallimento terapeutico.
            Nell'immunoterapia con ICI, invece, si osserva frequentemente il fenomeno della <strong>Pseudo-progressione</strong>:
          </p>
          <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/70 text-xs text-slate-800 space-y-2">
            <span className="font-bold text-blue-950 block">Perché il tumore si ingrandisce se la terapia funziona?</span>
            <p className="leading-relaxed font-serif-body">
              L'incremento volumetrico della lesione tumorale alla TC o comparsa di apparenti nuovi noduli nelle prime 4–8 settimane non è dovuto alla proliferazione di cellule maligne,
              bensì ad un <strong>massivo e massiccio infiltrato infiammatorio intratumorale di linfociti T citotossici</strong> che aggrediscono la neoplasia.
              All'imaging TC il tumore appare spesso <em>ipodenso</em> (più scuro), indicando colliquazione e necrosi del tessuto tumorale.
              Proseguendo il trattamento, l'infiltrato flogistico si risolve e la massa tumorale collassa e scompare.
              I criteri iRECIST impongono di ripetere la TC a distanza di 4–8 settimane prima di dichiarare la reale progressione della malattia.
            </p>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Sinergia tra Radioterapia Stereotassica ed ICI (Morte Cellulare Immunogenica)
          </h3>
          <p>
            La combinazione tra radioterapia stereotassica mirata e inibitori dei checkpoint produce una potente sinergia terapeutica attraverso due meccanismi:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-800">
            <li><strong>Aumento del carico mutazionale (TMB):</strong> il danno genotossico delle radiazioni induce nuove mutazioni somatiche con esposizione di nuovi neoantigeni peptidici.</li>
            <li><strong>Morte Cellulare Immunogenica (ICD):</strong> le radiazioni inducono traslocazione di <em>calreticulina</em> sulla membrana plasmatica e rilascio di allarmine DAMPs (<em>HMGB1, ATP extracellulare</em>) ed <em>interferoni di tipo I</em>, convertendo un tumore freddo in un tumore caldo sensibile ai CTL (<strong>Effetto Abscopal</strong>: regressione di metastasi a distanza non irradiate).</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Biomarcatori Predittivi di Risposta & Microbiota Intestinale
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="font-bold text-slate-900 block">Biomarcatori Molecolari & Tessutali:</span>
              <p className="text-slate-700 leading-relaxed">
                <strong>PD-L1:</strong> valutato immunoistochimicamente sulla biopsia tumorale (TPS o CPS);
                <strong>Tumor Mutational Burden (TMB-high):</strong> numero di mutazioni per megabase;
                <strong>Deficit di Mismatch Repair (dMMR / MSI-high):</strong> i tumori con instabilità microsatellitare accumulano centinaia di neoantigeni, mostrando risposte cliniche eccezionali agli anti-PD-1.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/60 space-y-1.5">
              <span className="font-bold text-emerald-950 block">Il Ruolo Chiave del Microbiota Intestinale:</span>
              <p className="text-slate-700 leading-relaxed font-serif-body">
                Recenti studi multi-omici hanno dimostrato che la composizione batterica fecale influenza direttamente l'efficacia degli ICI.
                La presenza di ceppi commensali specifici quali <strong>Akkermansia muciniphila</strong>, <em>Faecalibacterium</em> e <em>Bifidobacterium</em>
                è associata a robuste risposte sistemiche e prolungata sopravvivenza; al contrario, la disbiosi o l'abuso di antibiotici prima dell'immunoterapia azzerano l'efficacia del trattamento.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Tossicità Autoimmune Immuno-Relata (irAEs)
          </h3>
          <p>
            La rimozione dei freni molecolari fisiologici di tolleranza immunologica può scatenare <strong>eventi avversi immuno-relati (irAEs)</strong>,
            che consistono in vere e proprie patologie autoimmuni o autoinfiammatorie:
          </p>
          <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/60 text-xs text-slate-800 space-y-2">
            <span className="font-bold text-rose-950 block">Spettro Clinico & Patogenesi dell'Ipofisite:</span>
            <p className="leading-relaxed font-serif-body">
              Possono manifestarsi: <strong>colite autoimmune</strong> con diarrea severa, <strong>pneumonite interstiziale</strong>, epatite, tiroidite, miocardite acuta fulminante e rash cutanei/vitiligine.
              Particolarmente paradigmatica è l'<strong>Ipofisite Autoimmune</strong>, osservata prevalentemente con l'anticorpo anti-CTLA-4 (Ipilimumab):
              le cellule endocrine dell'adenoipofisi esprimono fisiologicamente CTLA-4 sulla propria superficie cellulare.
              Il legame di Ipilimumab attiva la cascata classica del complemento, inducendo lisi citotossica diretta e grave panipopituitarismo con insufficienza corticosurrenalica e tiroidea secondaria.
            </p>
          </div>
        </div>
      </article>

      {/* SIMULATORE 1: CICLO CANCRO-IMMUNITÀ & IMMUNOTIPI */}
      <div id="sim-cancer-immunity-cycle" className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
              <Microscope className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold block">
                Simulatore Didattico Interattivo 32.1
              </span>
              <h3 className="text-xl font-bold text-white">
                Laboratorio del Ciclo Cancro-Immunità, Immunotipi Tumorali & Evasione NK (Shedding NKG2D)
              </h3>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono">
            Modello Dinamico Infiltrato vs Evasione
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls Column */}
          <div className="space-y-4 bg-slate-800/60 p-5 rounded-xl border border-slate-700/60 text-xs">
            <div>
              <label className="text-slate-300 font-bold block mb-1.5">1. Immunotipo del Microambiente Tumorale:</label>
              <div className="space-y-1.5">
                <button
                  onClick={() => setSelectedImmunotype('desert')}
                  className={`w-full p-2.5 rounded-lg border text-left transition-all ${
                    selectedImmunotype === 'desert'
                      ? 'bg-blue-600/30 border-blue-400 text-blue-200 font-bold ring-1 ring-blue-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Immune-Desert (Freddo / Cold)
                </button>
                <button
                  onClick={() => setSelectedImmunotype('excluded')}
                  className={`w-full p-2.5 rounded-lg border text-left transition-all ${
                    selectedImmunotype === 'excluded'
                      ? 'bg-amber-600/30 border-amber-400 text-amber-200 font-bold ring-1 ring-amber-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Immune-Excluded (Barriere Stromali)
                </button>
                <button
                  onClick={() => setSelectedImmunotype('inflamed')}
                  className={`w-full p-2.5 rounded-lg border text-left transition-all ${
                    selectedImmunotype === 'inflamed'
                      ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200 font-bold ring-1 ring-emerald-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Inflamed (Caldo / Hot con Infiltrato T)
                </button>
              </div>
            </div>

            <div>
              <label className="text-slate-300 font-bold block mb-1.5">2. Espressione di HLA di Classe I & β2-microglobulina:</label>
              <select
                value={hlaExpressionLevel}
                onChange={(e) => setHlaExpressionLevel(e.target.value as any)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs text-slate-200"
              >
                <option value="normal_mhc1">Espressione Fisiologica Intatta (MHC-I+ β2m+)</option>
                <option value="downregulated_mhc1">Down-regolazione Parziale di HLA-I</option>
                <option value="loss_b2m">Perdita Totale (Mutazione Omozigote β2m)</option>
              </select>
            </div>

            <div>
              <label className="text-slate-300 font-bold block mb-1.5">3. Shedding Solubile dei Ligandi di NKG2D (MICA/B):</label>
              <button
                onClick={() => setNkg2dSolubleShedding(!nkg2dSolubleShedding)}
                className={`w-full p-2.5 rounded-lg border text-left flex items-center justify-between ${
                  nkg2dSolubleShedding
                    ? 'bg-rose-600/30 border-rose-400 text-rose-200 font-bold ring-1 ring-rose-400'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                }`}
              >
                <span>{nkg2dSolubleShedding ? 'Shedding Attivo (MICA/B Solubili ↑)' : 'Ligandi Ancorati su Membrana'}</span>
                <ShieldOff className="w-4 h-4 text-rose-400" />
              </button>
            </div>

            <div>
              <label className="text-slate-300 font-bold block mb-1.5">4. Strutture Linfoidi Terziarie (TLS):</label>
              <button
                onClick={() => setHasTlsStructures(!hasTlsStructures)}
                className={`w-full p-2 rounded-lg border text-left ${
                  hasTlsStructures
                    ? 'bg-purple-600/30 border-purple-400 text-purple-200 font-bold'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                {hasTlsStructures ? 'Presenza di TLS nel Microambiente' : 'Assenza di TLS'}
              </button>
            </div>
          </div>

          {/* Visualization & Outcome (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-5 rounded-xl border border-slate-700 bg-slate-800/80">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Valutazione della Risposta Citotossica e Prognosi
                </span>
                <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${
                  selectedImmunotype === 'inflamed' && hlaExpressionLevel === 'normal_mhc1'
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                    : hlaExpressionLevel === 'loss_b2m' && !nkg2dSolubleShedding
                    ? 'bg-cyan-950 text-cyan-300 border border-cyan-700'
                    : hlaExpressionLevel === 'loss_b2m' && nkg2dSolubleShedding
                    ? 'bg-rose-950 text-rose-300 border border-rose-700'
                    : 'bg-amber-950 text-amber-300 border border-amber-700'
                }`}>
                  {selectedImmunotype === 'desert'
                    ? 'RESISTENZA PRIMARIA (DESERTO IMMUNITARIO)'
                    : selectedImmunotype === 'excluded'
                    ? 'SEQUESTRO STROMALE (IMMUNO-ESCLUSO)'
                    : hlaExpressionLevel === 'loss_b2m' && nkg2dSolubleShedding
                    ? 'DOPPIA EVASIONE IMMUNITARIA (CTL + NK BLIND)'
                    : hlaExpressionLevel === 'loss_b2m' && !nkg2dSolubleShedding
                    ? 'ATTIVAZIONE NK (MISSING-SELF)'
                    : 'ERADICAZIONE CITOTOSSICA (HOT TUMOR)'}
                </span>
              </div>

              {/* Status Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">Riconoscimento CTL CD8+</div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {hlaExpressionLevel === 'loss_b2m'
                      ? 'Nullo (MHC-I Assente)'
                      : selectedImmunotype === 'desert'
                      ? 'Assente (No CTL)'
                      : selectedImmunotype === 'excluded'
                      ? 'Bloccato nello Stroma'
                      : 'Attivo ed Efficace'}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">Sorveglianza Cellule NK</div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {nkg2dSolubleShedding
                      ? 'Paralizzata (Shedding MICA)'
                      : hlaExpressionLevel === 'loss_b2m'
                      ? 'Iperattivata (Missing-Self)'
                      : 'Inibita da MHC-I (KIR)'}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">Priming In Situ (TLS)</div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {hasTlsStructures ? 'TLS Presenti (Prognosi +)' : 'Assenti'}
                  </div>
                </div>
              </div>

              {/* Mechanistic Commentary */}
              <div className="mt-4 p-4 rounded-lg bg-slate-900/90 border border-slate-700 text-xs leading-relaxed">
                <div className="font-bold text-purple-400 mb-1 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Referto di Evasione ed Immuno-Architettura:</span>
                </div>
                {selectedImmunotype === 'desert' ? (
                  <p className="text-blue-200">
                    <strong>Tumore Freddo (Immune-Desert):</strong> L'assenza di chemochine come CXCL9/CXCL10 e la presenza di grave acidosi lattica
                    impediscono il reclutamento dei linfociti T. Anche in presenza di un alto carico di neoantigeni, non si realizza alcuno step del ciclo
                    cancro-immunità. Risposta minima agli inibitori di PD-1 in monoterapia.
                  </p>
                ) : selectedImmunotype === 'excluded' ? (
                  <p className="text-amber-200">
                    <strong>Tumore Immuno-Escluso:</strong> I CTL CD8+ arrivano dai vasi ma vengono intrappolati nella capsula connettivale peritumorale
                    da barriere di collagene e segnali TGF-β secreti dai CAF. La strategia terapeutica razionale richiede la combinazione di anti-TGF-β
                    o inibitori delle metalloproteasi con gli inibitori dei checkpoint per permettere ai CTL di varcare lo stroma.
                  </p>
                ) : hlaExpressionLevel === 'loss_b2m' && nkg2dSolubleShedding ? (
                  <p className="text-rose-200">
                    <strong>Doppia Evasione Tumorale Sofisticata:</strong> Il tumore ha mutato la β2-microglobulina rendendosi invisibile ai CTL CD8+.
                    Al contempo, per non soccombere al 'missing-self' delle cellule NK, rilascia ligandi MICA/MICB solubili mediante metalloproteasi (shedding),
                    neutralizzando il recettore NKG2D prima dell'aggancio litico. Entrambi i bracci citotossici sono neutralizzati.
                  </p>
                ) : hlaExpressionLevel === 'loss_b2m' && !nkg2dSolubleShedding ? (
                  <p className="text-cyan-200">
                    <strong>Attivazione del Missing-Self:</strong> La perdita di MHC-I protegge il tumore dai linfociti T, ma rimuove il freno inibitorio
                    dei recettori KIR sulle cellule NK. Poiché i ligandi MICA/MICB rimangono ancorati alla membrana, le cellule NK ingaggiano NKG2D
                    e provocano la lisi osmotica della cellula neoplastica via perforina e granzimi.
                  </p>
                ) : (
                  <p className="text-emerald-200">
                    <strong>Tumore Caldo Altamente Immunogenico (Inflamed):</strong> La massiccia infiltrazione di CTL CD8+ a contatto diretto con le cellule tumorali
                    e la presenza di Strutture Linfoidi Terziarie (TLS) attive garantiscono un ciclo cancro-immunità efficiente.
                    La presenza di PD-L1 funge da biomarcatore ideale per il trattamento con inibitori dei checkpoint (Nivolumab, Pembrolizumab), che ripristinano l'attività litica.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SIMULATORE 2: LABORATORIO DELLE TERAPIE AVANZATE (ICI & CAR-T) */}
      <div id="sim-immunotherapy-cart-ici" className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold block">
                Simulatore Didattico Interattivo 32.2
              </span>
              <h3 className="text-xl font-bold text-white">
                Laboratorio delle Terapie Avanzate: Checkpoint Inibitori (ICI), Ingegneria CAR-T & Gestione Tossicità
              </h3>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono">
            Biomarcatori & Gestione Clinica CRS / irAEs
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls Column */}
          <div className="space-y-4 bg-slate-800/60 p-5 rounded-xl border border-slate-700/60 text-xs">
            <div>
              <label className="text-slate-300 font-bold block mb-1.5">1. Piattaforma Terapeutica Selezionata:</label>
              <div className="space-y-1.5">
                <button
                  onClick={() => setSelectedTherapyPlatform('ici_dual')}
                  className={`w-full p-2 rounded-lg border text-left transition-all ${
                    selectedTherapyPlatform === 'ici_dual'
                      ? 'bg-purple-600/30 border-purple-400 text-purple-200 font-bold ring-1 ring-purple-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Duplice Blocco Checkpoint (Nivolumab + Ipilimumab)
                </button>
                <button
                  onClick={() => setSelectedTherapyPlatform('ici_pd1')}
                  className={`w-full p-2 rounded-lg border text-left transition-all ${
                    selectedTherapyPlatform === 'ici_pd1'
                      ? 'bg-blue-600/30 border-blue-400 text-blue-200 font-bold ring-1 ring-blue-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Monoterapia Anti-PD-1 (Nivolumab / Pembrolizumab)
                </button>
                <button
                  onClick={() => setSelectedTherapyPlatform('cart_generation')}
                  className={`w-full p-2 rounded-lg border text-left transition-all ${
                    selectedTherapyPlatform === 'cart_generation'
                      ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200 font-bold ring-1 ring-emerald-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Terapia Cellulare Adottiva CAR-T
                </button>
                <button
                  onClick={() => setSelectedTherapyPlatform('bite_blinatumomab')}
                  className={`w-full p-2 rounded-lg border text-left transition-all ${
                    selectedTherapyPlatform === 'bite_blinatumomab'
                      ? 'bg-amber-600/30 border-amber-400 text-amber-200 font-bold ring-1 ring-amber-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Costrutto Bispecifico BiTE (Blinatumomab CD19-CD3)
                </button>
                <button
                  onClick={() => setSelectedTherapyPlatform('adc_trastuzumab')}
                  className={`w-full p-2 rounded-lg border text-left transition-all ${
                    selectedTherapyPlatform === 'adc_trastuzumab'
                      ? 'bg-rose-600/30 border-rose-400 text-rose-200 font-bold ring-1 ring-rose-400'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  Antibody-Drug Conjugate (Trastuzumab Emtansine / Deruxtecan)
                </button>
              </div>
            </div>

            {/* Conditional Sub-controls for CAR-T */}
            {selectedTherapyPlatform === 'cart_generation' && (
              <div className="pt-2 border-t border-slate-700 space-y-2">
                <label className="text-slate-300 font-bold block mb-1">Generazione del Costrutto CAR:</label>
                <div className="grid grid-cols-5 gap-1">
                  {([1, 2, 3, 4, 5] as const).map((gen) => (
                    <button
                      key={gen}
                      onClick={() => setCarGeneration(gen)}
                      className={`p-2 rounded border text-center font-bold ${
                        carGeneration === gen
                          ? 'bg-emerald-600 border-emerald-400 text-white'
                          : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      {gen}ª Gen
                    </button>
                  ))}
                </div>
                <div className="text-[10px] text-slate-400">
                  {carGeneration === 1 && 'Solo CD3ζ (Bassa persistenza)'}
                  {carGeneration === 2 && 'CD3ζ + CD28 o 4-1BB (Approvate AIFA 2019)'}
                  {carGeneration === 3 && 'CD3ζ + CD28 + 4-1BB'}
                  {carGeneration === 4 && 'TRUCKs (Secrezione inducibile IL-12)'}
                  {carGeneration === 5 && 'CD3ζ + CD28 + IL-2Rβ (Via JAK/STAT)'}
                </div>
              </div>
            )}

            {/* Biomarker Controls for ICI */}
            {(selectedTherapyPlatform === 'ici_dual' || selectedTherapyPlatform === 'ici_pd1') && (
              <div className="pt-2 border-t border-slate-700 space-y-3">
                <div>
                  <label className="text-slate-300 font-bold block mb-1">Stato Carico Mutazionale & Mismatch Repair:</label>
                  <select
                    value={tmbStatus}
                    onChange={(e) => setTmbStatus(e.target.value as any)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs text-slate-200"
                  >
                    <option value="tmb_high_dmmr">TMB-High & dMMR / MSI-High (Migliaia di Neoantigeni)</option>
                    <option value="tmb_low_mss">TMB-Low & MSS (Basso Carico di Neoantigeni)</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-300 font-bold block mb-1">Composizione del Microbiota Intestinale:</label>
                  <select
                    value={gutMicrobiotaStatus}
                    onChange={(e) => setGutMicrobiotaStatus(e.target.value as any)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs text-slate-200"
                  >
                    <option value="akkermansia_rich">Ricco in Akkermansia muciniphila & Bifidobacterium (Favorevole)</option>
                    <option value="dysbiosis">Disbiosi Marcata / Post-Antibiotico (Resistenza)</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Visualization & Clinical Outcome (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-5 rounded-xl border border-slate-700 bg-slate-800/80">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Previsione Efficacia Clinica & Tossicità
                </span>
                <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${
                  selectedTherapyPlatform === 'cart_generation'
                    ? (carGeneration >= 2 ? 'bg-red-950 text-red-300 border border-red-700' : 'bg-slate-800 text-slate-300')
                    : selectedTherapyPlatform === 'ici_dual'
                    ? 'bg-purple-950 text-purple-300 border border-purple-700'
                    : 'bg-blue-950 text-blue-300 border border-blue-700'
                }`}>
                  {selectedTherapyPlatform === 'cart_generation'
                    ? (carGeneration >= 2 ? 'RISCHIO SINDROME CRS (IL-6 ↑)' : 'CAR-T 1ª GEN: ANERGIA PRECOCE')
                    : selectedTherapyPlatform === 'ici_dual'
                    ? 'EFFICACIA MASSIMA · RISCHIO irAEs ELEVATO'
                    : selectedTherapyPlatform === 'bite_blinatumomab'
                    ? 'SINAPSI FORZATA CITOTOSSICA (NO-MHC)'
                    : selectedTherapyPlatform === 'adc_trastuzumab'
                    ? 'TARGET THERAPY CONIUGATA INTRACELLULARE'
                    : 'RISPOSTA CORRELATA AI BIOMARCATORI'}
                </span>
              </div>

              {/* Status Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">Tasso di Risposta Obiettiva</div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {selectedTherapyPlatform === 'ici_dual'
                      ? (tmbStatus === 'tmb_high_dmmr' && gutMicrobiotaStatus === 'akkermansia_rich' ? '≈ 60-65% (PFS Estesa)' : '≈ 25-30%')
                      : selectedTherapyPlatform === 'cart_generation'
                      ? (carGeneration >= 2 ? '80-90% Remissione in LLA-B' : 'Bassa (< 15%)')
                      : selectedTherapyPlatform === 'bite_blinatumomab'
                      ? 'Elevata in Linfomi B / LLA'
                      : 'Elevata in Tumori HER2+'}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">Tossicità Principale Attesa</div>
                  <div className="text-sm font-bold text-white mt-0.5 truncate">
                    {selectedTherapyPlatform === 'ici_dual'
                      ? 'irAEs (Ipofisite, Colite, Epatite)'
                      : selectedTherapyPlatform === 'cart_generation'
                      ? (carGeneration >= 2 ? 'CRS (IL-6) & Neurotossicità' : 'Minima')
                      : selectedTherapyPlatform === 'bite_blinatumomab'
                      ? 'CRS lieve & Neurotossicità'
                      : 'Tossicità d\'organo controllata'}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">Trattamento di Salvataggio</div>
                  <div className="text-sm font-bold text-white mt-0.5 truncate">
                    {selectedTherapyPlatform === 'cart_generation'
                      ? 'Tocilizumab (anti-IL-6R)'
                      : selectedTherapyPlatform === 'ici_dual'
                      ? 'Corticosteroidi ad alte dosi'
                      : 'Monitoraggio clinico'}
                  </div>
                </div>
              </div>

              {/* Detailed Narrative */}
              <div className="mt-4 p-4 rounded-lg bg-slate-900/90 border border-slate-700 text-xs leading-relaxed">
                <div className="font-bold text-indigo-400 mb-1 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Referto di Farmacodinamica & Gestione Clinica:</span>
                </div>
                {selectedTherapyPlatform === 'ici_dual' ? (
                  <p className="text-purple-200">
                    <strong>Duplice Blocco Checkpoint (Nivolumab + Ipilimumab):</strong> Bloccando simultaneamente il priming linfonodale (CTLA-4) e la fase effettrice
                    tissutale (PD-1), si ottengono tassi di sopravvivenza a lungo termine record (NEJM 2017).
                    {tmbStatus === 'tmb_high_dmmr' ? ' L\'elevato carico mutazionale (TMB-high/dMMR) garantisce una straordinaria sorgente di neoantigeni immunogenici.' : ' Nei tumori MSS con basso TMB la responsività è ridotta.'}
                    {gutMicrobiotaStatus === 'akkermansia_rich' ? ' La presenza di Akkermansia muciniphila nel microbiota potenzia la secrezione di IL-12 sistemica favorendo l\'infiltrazione intratumorale.' : ' La disbiosi compromette l\'attività delle cellule dendritiche.'}
                    <strong> Gestione Tossicità:</strong> Oltre il 50% dei pazienti sviluppa irAEs di grado 3-4 (tra cui la caratteristica ipofisite da anti-CTLA-4 e colite autoimmune), richiedenti sospensione temporanea e corticosteroidi sistemici.
                  </p>
                ) : selectedTherapyPlatform === 'cart_generation' ? (
                  <p className="text-emerald-200">
                    <strong>Terapia Cellulare Adottiva CAR-T:</strong> {carGeneration === 1 && 'I CAR di 1ª generazione possiedono solo CD3ζ; senza costimolo i linfociti vanno incontro a rapida anergia in vivo.'}
                    {carGeneration === 2 && 'I CAR di 2ª generazione integrano un dominio costimolatorio (CD28 o 4-1BB) con CD3ζ. Riconoscono l\'antigene CD19 indipendentemente da MHC, raggiungendo percentuali di remissione completa dell\'80-90% nella leucemia linfoblastica acuta recidivata (AIFA 2019).'}
                    {carGeneration === 3 && 'I CAR di 3ª generazione combinano due domini costimolatori (CD28 + 4-1BB).'}
                    {carGeneration === 4 && 'I TRUCKs di 4ª generazione secernono IL-12 nel microambiente, superando le barriere immunosoppressive stromali nei tumori solidi.'}
                    {carGeneration === 5 && 'I CAR di 5ª generazione reclutano direttamente la via JAK-STAT mediante la catena IL-2Rβ.'}
                    {carGeneration >= 2 && ' Attenzione: L\'iper-espansione clonale rischia di scatenare la Sindrome da Rilascio di Citochine (CRS) mediata da IL-6. Prescrivere tempestivamente Tocilizumab (anti-IL-6R).'}
                  </p>
                ) : selectedTherapyPlatform === 'bite_blinatumomab' ? (
                  <p className="text-amber-200">
                    <strong>Costrutti BiTE (Blinatumomab):</strong> L'anticorpo bispecifico ingaggia contemporaneamente CD19 sul blasto tumorale e CD3 sul linfocita T citotossico,
                    forzando una sinapsi fisica artificiale che attiva la degranulazione di perforine e granzimi indipendentemente da qualsiasi restrizione per MHC.
                  </p>
                ) : selectedTherapyPlatform === 'adc_trastuzumab' ? (
                  <p className="text-rose-200">
                    <strong>Antibody-Drug Conjugates (ADC):</strong> L'anticorpo monoclonale riconosce il recettore HER2, viene internalizzato nei lisosomi dove il linker
                    viene clivato enzimaticamente, rilasciando l'agente chemioterapico ad altissima citotossicità direttamente nel citoplasma della cellula neoplastica.
                  </p>
                ) : (
                  <p className="text-blue-200">
                    <strong>Monoterapia Anti-PD-1 (Nivolumab / Pembrolizumab):</strong> Ripristina la capacità citolitica dei linfociti T infiltranti esausti bloccando l'interazione con PD-L1.
                    Miglior profilo di tollerabilità rispetto al duplice blocco, con minore incidenza di irAEs severi.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TABELLE SINOTTICHE (32.1 & 32.2) */}
      <article id="tabelle-sinottiche" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-purple-700 font-semibold block">
            Tavole Sinottiche Didattiche
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Compendio delle Piattaforme di Immunoterapia & Matrice dei Biomarcatori e Tossicità irAEs
          </h2>
        </div>

        {/* Tabella 32.1 */}
        <div id="tabella-32-1" className="mb-8">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-mono text-xs">Tabella 32.1</span>
            Confronto Sistematico tra le Principali Piattaforme di Immunoterapia Oncologica
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Piattaforma</th>
                  <th className="p-3">Meccanismo d'Azione Primario</th>
                  <th className="p-3">Dipendenza da MHC</th>
                  <th className="p-3">Esempi Farmacologici</th>
                  <th className="p-3">Indicazioni Elettive</th>
                  <th className="p-3">Tossicità Cardine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-blue-900">Inibitori Checkpoint (ICI)</td>
                  <td className="p-3">Rimozione dei freni inibitori T: blocco del priming (CTLA-4) o riattivazione dell'exhaustion (PD-1/PD-L1)</td>
                  <td className="p-3 font-mono text-blue-700">Sì (Richiede pMHC)</td>
                  <td className="p-3">Ipilimumab (anti-CTLA-4), Nivolumab, Pembrolizumab (anti-PD-1), Atezolizumab (anti-PD-L1)</td>
                  <td className="p-3">Melanoma, tumori dMMR/MSI-high, NSCLC, carcinoma renale, vescica</td>
                  <td className="p-3">Eventi avversi immuno-relati (irAEs: ipofisite, colite, pneumonite, miocardite)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-emerald-900">Cellule CAR-T</td>
                  <td className="p-3">Linfociti autologhi ingegnerizzati con recettore chimerico (scFv + CD3ζ + domini costimolatori CD28/4-1BB)</td>
                  <td className="p-3 font-mono text-emerald-700 font-bold">No (Indipendente da MHC)</td>
                  <td className="p-3">Tisagenlecleucel (Kymriah), Axicabtagene ciloleucel (Yescarta)</td>
                  <td className="p-3">Leucemia Linfoblastica Acuta a cellule B (LLA-B pediatrica), Linfoma diffuso a grandi cellule B (DLBCL)</td>
                  <td className="p-3">Sindrome da Rilascio di Citochine (CRS con IL-6), neurotossicità (ICANS), on-target off-tumor</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-amber-900">Costrutti BiTE</td>
                  <td className="p-3">Anticorpi bispecifici con due scFv che legano simultaneamente CD19 sul tumore e CD3 sul linfocita T forzando la sinapsi litica</td>
                  <td className="p-3 font-mono text-amber-700 font-bold">No (Indipendente da MHC)</td>
                  <td className="p-3">Blinatumomab</td>
                  <td className="p-3">LLA a precursori B recidivata/refrattaria con malattia minima residua (MRD)</td>
                  <td className="p-3">CRS, neurotossicità acuta reversibile, neutropenia</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-purple-900">Antibody-Drug Conjugates (ADC)</td>
                  <td className="p-3">Anticorpo monoclonale tumor-specifico coniugato a chemioterapico altamente citotossico; internalizzazione e rilascio intracellulare</td>
                  <td className="p-3 font-mono text-slate-500">No (Riconosce antigene nativo)</td>
                  <td className="p-3">Trastuzumab emtansine (T-DM1), Trastuzumab deruxtecan (T-DXd)</td>
                  <td className="p-3">Carcinomi mammari e gastrici metastatici HER2-positivi o HER2-low</td>
                  <td className="p-3">Tossicità ematologica, polmonite interstiziale da rilascio di tossina</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Tumor-Targeting mAbs Nudi</td>
                  <td className="p-3">Attivazione di ADCC (cellule NK via CD16), CDC e blocco della dimerizzazione recettoriale oncogenica</td>
                  <td className="p-3 font-mono text-slate-500">No (Antigene di superficie nativo)</td>
                  <td className="p-3">Trastuzumab (anti-HER2), Rituximab (anti-CD20), Cetuximab (anti-EGFR)</td>
                  <td className="p-3">Tumori ematologici B, neoplasie mammari e colorettali</td>
                  <td className="p-3">Reazioni da infusione, cardiotossicità reversibile (Trastuzumab)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabella 32.2 */}
        <div id="tabella-32-2">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-mono text-xs">Tabella 32.2</span>
            Matrice dei Biomarcatori Predittivi di Risposta ed Eventi Avversi Autoimmuni (irAEs)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Biomarcatore / irAE</th>
                  <th className="p-3">Tipo / Categoria</th>
                  <th className="p-3">Significato Biologico & Meccanismo Molecolare</th>
                  <th className="p-3">Impatto Clinico / Gestione Terapeutica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-blue-900">PD-L1 (TPS / CPS)</td>
                  <td className="p-3">Biomarcatore Tissutale</td>
                  <td className="p-3">Espressione del ligando inibitore su cellule tumorali e cellule immunitarie infiltranti (TAM M2)</td>
                  <td className="p-3">Guida la prescrizione in prima linea di pembrolizumab/atezolizumab; cut-off TPS ≥ 50% predice alta risposta</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-emerald-900">dMMR / MSI-High & TMB-High</td>
                  <td className="p-3">Biomarcatore Genomico</td>
                  <td className="p-3">Deficit dei sistemi di riparo del DNA (mismatch repair); accumulo di mutazioni somatiche e migliaia di neoantigeni</td>
                  <td className="p-3">Approvazione agnostica da parte di FDA/EMA per l'uso di anti-PD-1 indipendentemente dall'istotipo tumorale d'origine</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-purple-900">Akkermansia muciniphila</td>
                  <td className="p-3">Biomarcatore del Microbiota</td>
                  <td className="p-3">Batterio commensale mucosale che stimola le cellule dendritiche a secernere IL-12 sistemica potenziando l'homing dei CTL</td>
                  <td className="p-3">Associazione con prolungata Progression-Free Survival agli ICI; l'esposizione ad antibiotici prima della terapia è sfavorevole</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-rose-900">Ipofisite Autoimmune</td>
                  <td className="p-3">irAE Specifico anti-CTLA-4</td>
                  <td className="p-3">Espressione ectopica costitutiva di CTLA-4 sulle cellule dell'adenoipofisi; fissazione del complemento da parte di Ipilimumab</td>
                  <td className="p-3">Cefalea, astenia, panipopituitarismo con insufficienza corticosurrenalica; richiede ormonoterapia sostitutiva permanente</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-amber-900">Colite & Pneumonite irAE</td>
                  <td className="p-3">irAE Sistemico</td>
                  <td className="p-3">Iperattivazione autoimmune dei linfociti T citotossici e Th1 verso antigeni dell'epitelio intestinale e polmonare</td>
                  <td className="p-3">Diarrea acquosa severa (&gt; 6 scariche/die) o tosse secca con dispnea; sospensione immediata e boli di metilprednisolone ± Infliximab</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </article>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={quizQuestions} lessonNumber={32} title="Verifica dell'Apprendimento · Lezione 32" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={flashcardsData} lessonNumber={32} title="Flashcard di Ripasso Attivo · Lezione 32" />
    </div>
  );
};
