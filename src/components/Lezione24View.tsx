import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Activity,
  AlertTriangle,
  Award,
  CheckCircle,
  HelpCircle,
  ChevronRight,
  BookOpen,
  Zap,
  Target,
  Sparkles,
  Info,
  Clock,
  RotateCcw,
  Sliders,
  Play,
  Flame,
  FileText,
  Thermometer,
  Layers,
  Heart,
  Droplets,
  Syringe,
  Bug,
  Microscope,
  Baby
} from 'lucide-react';

interface Lezione24ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione24View: React.FC<Lezione24ViewProps> = ({ isSerif, fontSize }) => {
  // Simulator 1: Antiviral sensing and viral evasion
  const [viralStrain, setViralStrain] = useState<'wt' | 'hcv_ns3' | 'cmv_micb' | 'pox_decoy'>('wt');
  const [infectionHour, setInfectionHour] = useState<number>(12);

  // Simulator 2: Vaccine Platforms and Herd Immunity
  const [activeVaccinePlatform, setActiveVaccinePlatform] = useState<
    'attenuated' | 'inactivated' | 'toxoid' | 'conjugated' | 'vlp' | 'mrna'
  >('conjugated');
  const [vaccineCoverage, setVaccineCoverage] = useState<number>(85);
  const [pathogenR0, setPathogenR0] = useState<number>(15); // Default Measles R0 ~ 15

  // Interactive Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState<{ [key: number]: boolean }>({});

  // Flashcards state
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});


  const toggleFlashcard = (id: number) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectAnswer = (qId: number, optionIdx: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
    setShowResults((prev) => ({ ...prev, [qId]: true }));
  };

  const fontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const sizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // Herd immunity calculations: Threshold = 1 - 1/R0
  const herdThreshold = Math.max(0, Math.round((1 - 1 / pathogenR0) * 100));
  const isHerdProtected = vaccineCoverage >= herdThreshold;
  const outbreakRisk = Math.max(0, Math.min(100, Math.round((herdThreshold - vaccineCoverage) * 2.2)));

  
  const FLASHCARDS = [
            {
              id: 1,
              front: "Perché l'infezione da HCV porta a deficit nella sintesi di Interferoni di Tipo I?",
              back: "La serina-proteasi virale NS3/4A dell'Epatite C taglia MAVS (IPS-1) staccandolo dalla membrana mitocondriale esterna. Senza MAVS, i sensori citosolici RIG-I e MDA5 non possono trasdurre il segnale a TBK1 e IRF3/7, bloccando la trascrizione di IFN-α ed IFN-β."
            },
            {
              id: 2,
              front: "Come evade il Citomegalovirus (HCMV) l'azione contemporanea di CTL ed NK?",
              back: "HCMV blocca il trasportatore TAP1/2 e degrada MHC-I (evadendo i CTL CD8+). Per evitare la lisi da missing-self mediata da NK, esprime micro-RNA (miR-UL112) che degradano l'mRNA di MICB e sintetizza la proteina UL16 che sequestra MICA nell'ER, impedendo l'attivazione di NKG2D."
            },
            {
              id: 3,
              front: "Qual è la differenza molecolare tra Antigenic Drift e Antigenic Shift nell'influenza?",
              back: "Il Drift è una deriva antigenica dovuta a mutazioni puntiformi casuali dell'RNA polimerasi priva di proofreading su singoli epitopi di HA/NA (richiede vaccino annuale). Lo Shift è un salto antigenico radicale dovuto al riassortimento di interi segmenti di RNA tra ceppi diversi (es. umano + aviario) in una cellula co-infettata, originando pandemie globali."
            },
            {
              id: 4,
              front: "Perché i vaccini a polisaccaridi puri non sono efficaci nei bambini sotto i 2 anni?",
              back: "I polisaccaridi capsulari sono antigeni T-indipendenti di tipo 2 (TI-2): attivano i linfociti B senza aiuto cooperatore T (no MHC-II), non inducono memoria né switch a IgG. Nei neonati sotto i 2 anni la milza marginale e la risposta TI-2 sono immature: solo la coniugazione con carrier proteico trasforma la risposta in T-dipendente."
            },
            {
              id: 5,
              front: "Cosa sono le Virus-Like Particles (VLP) del vaccino anti-HPV e perché sono sicure al 100%?",
              back: "Sono particelle composte dalla proteina principale del capside L1 espressa in lievito, che si auto-assembla in una struttura identica al virione nativo. Sono sicure al 100% perché prive di genoma virale e prive degli oncogeni virali trasformanti E6 ed E7."
            },
            {
              id: 6,
              front: "Cosa stabilisce la formula dell'Immunità di Gregge Qc = 1 - 1/R0 e perché il morbillo richiede il 95%?",
              back: "Stabilisce la percentuale minima di popolazione immunizzata necessaria per interrompere la trasmissione endemica. Poiché il morbillo ha un R0 elevatissimo (~15-18), la soglia critica Qc è 1 - 1/15 = 93.3% - 95%. Sotto questa percentuale si verificano focolai epidemici che colpiscono i soggetti non vaccinabili."
            }
          ];
  const QUIZ_QUESTIONS = [
            {
              id: 1,
              question: "Quale recettore endosomiale riconosce specificamente l'RNA virale a doppio filamento (dsRNA) segnalando attraverso l'adattatore TRIF?",
              options: [
                "TLR7",
                "TLR9",
                "TLR3",
                "RIG-I"
              ],
              correct: 2,
              explanation: "TLR3 è localizzato negli endosomi, riconosce dsRNA e segnala unicamente attraverso l'adattatore cellulare TRIF, inducendo l'attivazione e la traslocazione nucleare di IRF3. Al contrario, TLR7/8/9 segnalano tramite MyD88."
            },
            {
              id: 2,
              question: "In che modo la serina-proteasi NS3/4A del virus dell'Epatite C (HCV) sopprime la produzione di interferoni di tipo 1?",
              options: [
                "Fosforila e inattiva direttamente il recettore di membrana IFNAR1",
                "Taglia proteoliticamente la proteina MAVS (IPS-1) ancorata alla membrana mitocondriale esterna",
                "Degrada l'enzima RNA polimerasi cellulare II nel nucleo",
                "Inibisce la trascrizione del gene codificante per l'adattatore MyD88"
              ],
              correct: 1,
              explanation: "La proteasi NS3 di HCV cliva MAVS staccandolo dalla superficie mitocondriale esterna. Senza MAVS ancorato, i sensori citosolici RIG-I e MDA5 non possono attivare TBK1 e IRF3/7."
            },
            {
              id: 3,
              question: "Qual è il meccanismo con cui il Citomegalovirus (HCMV) previene l'attivazione delle cellule NK mediata dal recettore NKG2D?",
              options: [
                "Produce micro-RNA (miR-UL112) che reprimono la traduzione di MICB e la proteina UL16 che sequestra MICA nell'ER",
                "Aumenta l'espressione sulla membrana cellulare di CD80 e CD86",
                "Inattiva la perforina rilasciata nei granuli litici",
                "Taglia il recettore CD16 sulla superficie della cellula NK"
              ],
              correct: 0,
              explanation: "HCMV downregola MICA legandola con la proteina virale UL16 nell'ER e distrugge/blocca l'mRNA di MICB tramite micro-RNA virali specifici, azzerando l'ingaggio del recettore attivatore NKG2D sulle NK."
            },
            {
              id: 4,
              question: "Quale recente funzione omeostatica delle cellule NK è stata evidenziata dalla Prof.ssa Soriani durante la lezione?",
              options: [
                "Le cellule NK attivate stimolano le plasmacellule a produrre esclusivamente IgE allergiche",
                "Le cellule NK, tramite IFN-α, eliminano le cellule T follicolari helper (Tfh) per evitare un'eccessiva sintesi anticorpale",
                "Le cellule NK convertono i linfociti B naive in linfociti B-1 peritoneali",
                "Le cellule NK degradano direttamente il complemento sierico C3"
              ],
              correct: 1,
              explanation: "Come evidenziato a lezione, studi recenti dimostrano che le cellule NK guidate da IFN-α eliminano le Tfh nei follicoli linfoidi per evitare un'eccessiva espansione anticorpale e preservare l'omeostasi."
            },
            {
              id: 5,
              question: "Cosa differenzia l'Antigenic Drift dall'Antigenic Shift nel virus dell'influenza?",
              options: [
                "Il Drift avviene solo nei virus a DNA, lo Shift nei virus a RNA",
                "Il Drift è dovuto a mutazioni puntiformi casuali dell'RNA polimerasi virale, lo Shift a riassortimento di interi segmenti genomici",
                "Il Drift causa pandemie letali improvvise, lo Shift mutazioni asintomatiche",
                "Il Drift non richiede alcun aggiornamento dei vaccini stagionali"
              ],
              correct: 1,
              explanation: "Il drift (deriva) deriva da errori puntiformi della polimerasi priva di proofreading su HA/NA (necessità del vaccino annuale); lo shift (salto) è lo scambio di interi segmenti di RNA tra ceppi diversi, originando virus pandemici totalmente nuovi."
            },
            {
              id: 6,
              question: "Per quale motivo il vaccino antipolio orale di Sabin (OPV) è stato in grado di eradicare l'infezione nella comunità meglio del vaccino Salk (IPV)?",
              options: [
                "Perché Sabin ha usato il virus del vaiolo bovino come carrier",
                "Perché OPV, replicandosi nell'intestino, stimola massicce IgA secretorie mucosali che impediscono l'infezione e la trasmissione oro-fecale",
                "Perché il vaccino Salk causa paralisi flaccida nel 50% dei vaccinati",
                "Perché Salk non induceva alcuna produzione di anticorpi di classe IgG"
              ],
              correct: 1,
              explanation: "OPV imita la via naturale enterica stimolando le IgA secretorie mucosali che bloccano il virus nel lume intestinale (immunità di barriera e blocco della trasmissione). IPV intramuscolare stimola solo IgG sieriche, proteggendo dal danno al SNC ma consentendo la replicazione intestinale."
            },
            {
              id: 7,
              question: "Cosa provocò l'epidemia di poliomielite da ceppo vaccinale verificatasi in Nigeria nel 2007?",
              options: [
                "Una contaminazione batterica dei flaconi vaccinali con Clostridium tetani",
                "La reversione a virulenza del ceppo 3 di Sabin, che differiva dal ceppo selvaggio per soli 10 nucleotidi",
                "La perdita totale di refrigerazione dei vaccini a mRNA",
                "Una mutazione nel recettore cellulare polivirus dei bambini nigeriani"
              ],
              correct: 1,
              explanation: "Il ceppo 3 di Sabin differiva per soli 10 nucleotidi dal virus naturale: mutazioni spontanee durante la replicazione hanno ripristinato la neurovirulenza. Il ceppo 1, che differisce per 57 nucleotidi, è invece stabilissimo."
            },
            {
              id: 8,
              question: "Qual è il razionale immunologico alla base della coniugazione del polisaccaride capsulare con il tossoide tetanico nel vaccino anti-Hib?",
              options: [
                "Permettere alla proteina carrier di presentare peptidi su MHC-II ai linfociti Th CD4+, trasformando la risposta in T-dipendente con switch a IgG e memoria",
                "Inattivare il complemento sierico per evitare la lisi dei globuli rossi",
                "Consentire al polisaccaride di legarsi direttamente al recettore CD8 citotossico",
                "Aumentare la replicazione del batterio all'interno delle cellule dendritiche"
              ],
              correct: 0,
              explanation: "Il polisaccaride è un antigene T-indipendente inefficace nei neonati. Coniugato al carrier, il linfocita B specifico per il polisaccaride espone i peptidi del carrier su MHC-II ai linfociti Th, inducendo switch a IgG e memoria B."
            },
            {
              id: 9,
              question: "Come sono realizzate le Virus-Like Particles (VLP) del vaccino contro il Papillomavirus umano (HPV)?",
              options: [
                "Tramite l'inattivazione con formalina di virus HPV vivi isolati da biopsie di cervice uterina",
                "Mediante auto-assemblaggio in vitro della proteina ricombinante L1 del capside espressa in lieviti, totalmente priva di DNA oncogeno virale",
                "Inoculando plasmidi di DNA nudo codificanti gli oncogeni E6 ed E7",
                "Tramite passaggi seriali di HPV in colture di fibroblasti di scimmia"
              ],
              correct: 1,
              explanation: "La proteina L1 del capside espressa in lievito si auto-assembla spontaneamente in VLP vuote, prive di acidi nucleici e di oncogeni (E6/E7), garantendo massima immunogenicità e sicurezza al 100%."
            },
            {
              id: 10,
              question: "A quanto ammonta approssimativamente il rischio di sviluppare encefalite grave da infezione naturale di morbillo rispetto alla vaccinazione MPR?",
              options: [
                "Il rischio è identico in entrambi i casi (1 su 100.000)",
                "Il morbillo naturale causa encefalite in circa 1 su 1.000–2.000 malati; il vaccino MPR in meno di 1 su 1.000.000 di vaccinati",
                "Il vaccino MPR causa encefalite nel 10% dei soggetti, la malattia naturale nell'1%",
                "Il morbillo naturale non causa mai complicanze neurologiche nei paesi industrializzati"
              ],
              correct: 1,
              explanation: "Il morbillo naturale provoca encefalite acuta in 1:1.000-2.000 malati e morte in 1:1.000-3.000; la vaccinazione MPR ha un rischio di complicanze encefalitiche inferiore a 1 su un milione di dosi, con un profilo rischio-beneficio straordinariamente favorevole."
            }
          ];

  return (
    <article className={`space-y-12 ${fontClass} ${sizeClass} text-slate-800`}>
      {/* Textbook Hero Monograph Header */}
      <header className="border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-blue-700 uppercase tracking-wider mb-2">
          <span>Corso di Laurea Magistrale in Medicina e Chirurgia</span>
          <span>·</span>
          <span>Immunologia e Immunopatologia</span>
          <span>·</span>
          <span>Lezione 24</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Lezione 24: Risposta Immunitaria Antivirale, Meccanismi di Evasione & Vaccinologia Generale
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
          Dalla cinetica multifasica della difesa antivirale (interferoni di tipo I, cellule NK, CTL CD8+ e anticorpi)
          ai sofisticati circuiti di immunoevasione virale (taglio di MAVS, blocco di TAP/MHC-I, microRNA anti-MICB ed
          esche solubili per NKG2D). Trattato monografico sulla storia della vaccinazione (Jenner e Pasteur), le
          piattaforme vaccinali tradizionali (attenuati, inattivati, tossoidi DTP, coniugati carrier-dipendenti per batteri
          capsulati, VLP di HPV) e le frontiere dei vaccini a DNA, mRNA formulato in nanoparticelle lipidiche, vaccinologia
          inversa, adiuvanti innovativi, immunità di gregge e bilancio oggettivo rischio-beneficio.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-sans text-slate-500 border-t border-slate-150 pt-4">
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Docente: <strong>Prof.ssa Alessandra Soriani</strong></span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>Data Lezione: <strong>24 Novembre 2025 (1ª e 2ª ora)</strong></span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-emerald-600" />
            <span>Sbobinatori: <strong>Camilla D’Amico, Gioia Maria Celiberti</strong></span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-indigo-600" />
            <span>Revisori: <strong>Lea Cassella, Margherita Biagioli</strong></span>
          </div>
        </div>
      </header>

      {/* Chapter 24.1 */}
      <section id="sec-24-1" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">24.1</span> Fisiologia della Risposta Antivirale: Cinetica Trifasica Coordinata
        </h2>
        <p>
          La risposta dell'organismo alle infezioni virali segue una precisa sequenza cronologica ed evolutiva,
          suddivisa in tre fasi funzionalmente integrate che mirano a contenere la replicazione precoce,
          distruggere le cellule serbatoio ed eliminare definitivamente le particelle virali libere:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-blue-900 uppercase">Fase 1: Precoce (Ore 0–72)</span>
              <span className="px-1.5 py-0.5 rounded bg-blue-200 text-blue-800 font-mono text-[10px]">Innata I</span>
            </div>
            <p className="text-slate-700">
              Le cellule dendritiche (in particolare pDC) e le cellule epiteliali infettate captano gli acidi
              nucleici virali tramite PRR endosomiali e citosolici, secernendo rapidamente massicce concentrazioni di{' '}
              <strong>Interferoni di tipo I (IFN-α, IFN-β)</strong>, oltre a TNF-α, IL-12 e IL-15. Questa fase istituisce
              lo stato antivirale nei tessuti sani adiacenti e blocca l'esplosione esponenziale della carica virale.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-purple-900 uppercase">Fase 2: Intermedia (Giorni 2–5)</span>
              <span className="px-1.5 py-0.5 rounded bg-purple-200 text-purple-800 font-mono text-[10px]">Innata II</span>
            </div>
            <p className="text-slate-700">
              Potenziate da IFN-I e IL-12/15, le <strong>Cellule Natural Killer (NK)</strong> lisano le cellule bersaglio
              che espongono ligandi di stress indotto o che hanno downmodulato MHC-I (meccanismo del <em>missing-self</em>).
              Le NK secernono elevate quantità di <strong>IFN-γ</strong>, orientando la successiva polarizzazione
              adattativa verso il lignaggio Th1.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-emerald-900 uppercase">Fase 3: Tardiva (Giorni 6+)</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-200 text-emerald-800 font-mono text-[10px]">Adattativa</span>
            </div>
            <p className="text-slate-700">
              L'innesco dei linfociti T naive nei linfonodi drenanti culmina nell'espansione clonale dei{' '}
              <strong>Linfociti T Citotossici CD8+ (CTL)</strong> antigene-specifici, che sterilizzano l'infezione
              uccidendo le cellule permissive. Contemporaneamente, le plasmacellule secernono{' '}
              <strong>anticorpi neutralizzanti ad alta affinità</strong> capaci di bloccare i virioni liberi ed evitare
              le reinfezioni.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 24.2 */}
      <section id="sec-24-2" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">24.2</span> Sensing Intracellulare dei Virus: PRR Endosomiali & Citosolici
        </h2>
        <p>
          I virus, essendo parassiti intracellulari obbligati, introducono i propri acidi nucleici in compartimenti
          cellulari specifici a seconda della modalità di ingresso (fusione diretta alla membrana plasmatica vs
          endocitosi/fagocitosi). La cellula risponde impiegando un doppio livello di sorveglianza sensoriale:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>PRR Endosomiali (Famiglia Toll-like Receptors):</strong>
            <ul className="list-circle pl-6 mt-1 space-y-1">
              <li>
                <strong>TLR3:</strong> riconosce RNA virale a doppio filamento (dsRNA), tipico intermedio di replicazione
                dei virus a RNA o genoma dei Reovirus. Segnala esclusivamente tramite l'adattatore <strong>TRIF</strong>,
                inducendo la fosforilazione e traslocazione nucleare di <strong>IRF3</strong>.
              </li>
              <li>
                <strong>TLR7 e TLR8:</strong> legano RNA virale a singolo filamento (ssRNA) ricco di guanosina/uridina.
                Utilizzano l'adattatore universale <strong>MyD88</strong> per attivare in modo massivo <strong>IRF7</strong>{' '}
                e NF-κB, caratteristica peculiare delle cellule dendritiche plasmacitoidi (pDC).
              </li>
              <li>
                <strong>TLR9:</strong> riconosce sequenze di DNA virale a singolo filamento contenenti motivi CpG non
                metilati, convergendo su MyD88 e IRF7.
              </li>
            </ul>
          </li>
          <li>
            <strong>Sensori Citosolici (Famiglia RLR & DNA-Sensing):</strong>
            <ul className="list-circle pl-6 mt-1 space-y-1">
              <li>
                <strong>RIG-I e MDA5:</strong> recettori citosolici a RNA elicasi con domini CARD. RIG-I lega brevi
                frammenti di dsRNA o ssRNA con estremità 5'-trifosfato o 5'-difosfato non cappata; MDA5 lega lunghi
                tratti di dsRNA polimerico (&gt;1000 bp).
              </li>
              <li>
                <strong>MAVS (Mitochondrial Antiviral Signaling, noto anche come IPS-1 / VISA / Cardif):</strong> proteina
                adattatrice transmembrana ancorata alla membrana mitocondriale esterna. Quando RIG-I o MDA5 legano l'RNA
                virale, i loro domini CARD omotipici polimerizzano MAVS in fibre prioniche filamentose sulla superficie
                mitocondriale. MAVS recluta le chinasi TBK1 e IKKε, determinando l'attivazione simultanea di{' '}
                <strong>IRF3, IRF7 ed NF-κB</strong>.
              </li>
              <li>
                <strong>Via cGAS-STING:</strong> cGAS riconosce DNA virale aberrante nel citosol sintetizzando il secondo
                messaggero ciclico cGAMP, che si lega a STING sul reticolo endoplasmatico per guidare la trascrizione di
                IFN-β.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Chapter 24.3 */}
      <section id="sec-24-3" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">24.3</span> Lo Stato Antivirale: Meccanismi Molecolari degli Effettori ISG
        </h2>
        <p>
          Gli interferoni di primo tipo (IFN-α/β) rilasciati dalle cellule sentinella si legano in modo paracrino e autocrino
          al recettore eterodimerico <strong>IFNAR1/IFNAR2</strong>, attivando la cascata di trasduzione JAK1-Tyk2 con
          fosforilazione di STAT1 e STAT2. Questi, unendosi a IRF9, formano il complesso eterotrimerico <strong>ISGF3</strong>,
          che migra nel nucleo legandosi alle sequenze ISRE (<em>Interferon-Stimulated Response Elements</em>) per trascrivere
          centinaia di geni <strong>ISG (Interferon-Stimulated Genes)</strong>. Questi effettori bloccano molteplici passaggi
          del ciclo replicativo virale:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4 font-sans text-xs">
          <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-1">
            <strong className="text-blue-900 block font-bold">1. IFITM (IFITM1, 2, 3)</strong>
            <p className="text-slate-600">
              Proteine transmembrana che alterano la fluidità e curvatura del doppio strato lipidico dell'ospite, bloccando
              la <strong>fusione virale di membrana</strong> e impedendo il rilascio del capside nel citosol.
            </p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-1">
            <strong className="text-purple-900 block font-bold">2. PKR (Protein Kinase R)</strong>
            <p className="text-slate-600">
              Attivata direttamente dal dsRNA, fosforila la subunità α del fattore eucariotico di inizio della traduzione{' '}
              <strong>eIF2α</strong>, bloccando la sintesi proteica virale e cellulare e provocando l'arresto traduzionale.
            </p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-1">
            <strong className="text-rose-900 block font-bold">3. Asse 2'-5' OAS / RNasi L</strong>
            <p className="text-slate-600">
              L'OAS sintetizza oligoadenilati 2'-5' anomali che attivano la <strong>RNasi L</strong> citosolica, enzima che
              degrada indiscriminatamente l'RNA virale a singolo filamento, generando frammenti che amplificano RIG-I.
            </p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-1">
            <strong className="text-emerald-900 block font-bold">4. GTPasi Mx (MxA, MxB)</strong>
            <p className="text-slate-600">
              Formano anelli polimerici attorno ai complessi ribonucleoproteici virali, intrappolandoli e bloccando il loro
              traffico nucleare, la trascrizione genica e l'assemblaggio dei nuovi virioni.
            </p>
          </div>
        </div>
        <p>
          Inoltre, gli IFN-I svolgono due azioni immunologiche fondamentali: <strong>aumentano marcatamente l'espressione
          delle molecole MHC di classe I</strong> su tutte le cellule somatiche (favorendo la presentazione antigenica ai CTL)
          e attivano direttamente le cellule NK e le cellule dendritiche.
        </p>
      </section>

      {/* Chapter 24.4 */}
      <section id="sec-24-4" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">24.4</span> Ruolo delle Cellule NK nella Difesa Antivirale & Omeostasi Anticorpale
        </h2>
        <p>
          Le cellule NK cooperano intimamente con la linea di difesa precoce:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Citotossicità Selettiva:</strong> riconoscono le cellule infettate da virus che hanno perso MHC-I nel
            tentativo di sfuggire ai CTL (meccanismo del <em>missing-self</em> per mancato ingaggio dei KIR inibitori)
            oppure riconoscono molecole di stress cellulare indotto dall'infezione (MICA, MICB, ULBP) tramite il recettore
            attivatore <strong>NKG2D</strong>.
          </li>
          <li>
            <strong>Secrezione di Citochine di Tipo 1:</strong> producono massicce dosi di <strong>IFN-γ</strong>, che
            promuove il differenziamento dei Th naive in Th1, attiva i macrofagi per la fagocitosi di detriti apoptotici,
            induce lo switch isotipico verso anticorpi opsonizzanti e fissa-complemento (IgG1 e IgG3 umane) e sovraregola
            l'espressione di MHC di classe II sulle APC.
          </li>
          <li>
            <strong>Scoperta Recente sull'Omeostasi Anticorpale (Citazione di Lezione):</strong> Come sottolineato dalla
            Prof.ssa Soriani citando recenti scoperte pubblicate sulla letteratura internazionale, le cellule NK, in
            presenza di IFN-α, svolgono un'insospettata funzione regolatoria: sono capaci di <strong>uccidere le cellule
            T follicolari helper (Tfh)</strong> nei centri germinativi linfonodali. Questo meccanismo di feedback negativo
            elimina le Tfh iperattive e riporta il sistema all'omeostasi, prevenendo la formazione esagerata di anticorpi
            autoreattivi o tempeste umorali sregolate.
          </li>
        </ul>
      </section>

      {/* Chapter 24.5 */}
      <section id="sec-24-5" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">24.5</span> Strategie di Immunoevasione Virale: Bersagli Molecolari
        </h2>
        <p>
          I virus hanno coevoluto formidabili contromisure biochimiche per sabotare ciascun nodo del sistema immunitario:
        </p>
        <div className="space-y-3 font-sans text-xs">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 text-sm block mb-1">
              1. Clivaggio di MAVS da parte dell'Epatite C (HCV)
            </strong>
            <p className="text-slate-700 leading-relaxed">
              Il virus dell'epatite C (HCV) codifica per la serina-proteasi <strong>NS3/4A</strong>, la quale riconosce una
              specifica sequenza amminoacidica nel dominio C-terminale di MAVS mitocondriale e la taglia proteoliticamente.
              Il distacco di MAVS dalla membrana del mitocondrio ne impedisce la polimerizzazione prionica, spegnendo la
              trasduzione del segnale verso IRF3 e NF-κB e azzerando la sintesi di interferoni di tipo I. Nel corso
              dell'evoluzione dei primati, l'ospite ha selezionato mutazioni convergenti nella tasca di taglio di MAVS per
              renderla immune al clivaggio della proteasi virale.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 text-sm block mb-1">
              2. Blocco della Presentazione Antigenica su MHC-I (Evasione dai CTL)
            </strong>
            <p className="text-slate-700 leading-relaxed">
              Diversi virus bloccano l'assemblaggio e il trasporto del trimero MHC-I: inibizione del proteasoma (EBV
              tramite EBNA1), blocco competitivo del canale peptidico TAP1/2 (proteina <strong>ICP47</strong> di Herpes
              Simplex Virus e <strong>US6</strong> di Citomegalovirus), degradazione di MHC-I per retro-traslocazione e
              distruzione proteasomiale (proteine US2 e US11 di HCMV), o sequestro di MHC-I nel Golgi (Adenovirus E19).
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 text-sm block mb-1">
              3. Evasione dal Riconoscimento NK: Downregolazione di MICA/MICB & MicroRNA Virali
            </strong>
            <p className="text-slate-700 leading-relaxed">
              Poiché l'azzeramento di MHC-I renderebbe la cellula suscettibile alla lisi mediata da NK (missing-self), i
              virus devono contemporaneamente disarmare i recettori attivatori NK:
            </p>
            <ul className="list-disc pl-5 mt-1 text-slate-700 space-y-1">
              <li>
                <strong>Downmodulazione di MICA e MICB:</strong> il Citomegalovirus (HCMV) produce la glicoproteina{' '}
                <strong>UL16</strong> che lega MICA/MICB nel reticolo endoplasmatico, impedendone l'esposizione sulla
                membrana cellulare.
              </li>
              <li>
                <strong>Micro-RNA Virali:</strong> HCMV sintetizza specifici <strong>miRNA virali</strong> (es. miR-UL112)
                che ibridano con la regione 3'-UTR dell'mRNA cellulare di MICB, reprimendone la traduzione e spegnendo
                l'ingaggio di NKG2D.
              </li>
              <li>
                <strong>Proteine Esche Solubili:</strong> gli <em>Orthopoxvirus</em> secernono proteine virali solubili
                (OMCP) ad altissima affinità per il recettore <strong>NKG2D</strong>, che saturano il recettore sulla
                superficie della cellula NK impedendole di legarsi ai ligandi di membrana della cellula infettata.
              </li>
            </ul>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 text-sm block mb-1">
              4. Citochine Immunosoppressive, Inibitori di Apoptosi & Controffensiva Letale
            </strong>
            <p className="text-slate-700 leading-relaxed">
              Il virus di Epstein-Barr (EBV) codifica per un omologo dell'interleuchina-10 (<strong>vIL-10 / BCRF1</strong>),
              che spegne la sintesi di IL-12 e blocca l'attivazione dei macrofagi. Poxvirus ed Herpesvirus esprimono
              inibitori proteici delle caspasi (CrmA), omologhi virali di Bcl-2 (vBcl-2) e inibitori della via recettoriale
              estrinseca (<strong>vFLIP</strong>). Infine, virus come HIV e HTLV-1 inducono sulla cellula bersaglio infetta
              l'iperespressione di <strong>FAS-Ligando (FasL/CD95L)</strong>, invertendo l'arma litica e inducendo
              l'apoptosi degli stessi linfociti T CD8+ citotossici che tentano di attaccarla.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 24.6 */}
      <section id="sec-24-6" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">24.6</span> Variabilità Antigenica: Antigenic Drift vs Antigenic Shift
        </h2>
        <p>
          Il virus dell'influenza rappresenta il modello cardine di elusione della memoria anticorpale tramite
          mutazioni a carico delle due principali glicoproteine di superficie: l'<strong>Emoagglutinina (HA)</strong> (che
          riconosce l'acido sialico per l'ingresso) e la <strong>Neuraminidasi (NA)</strong> (che cliva l'acido sialico
          per il rilascio della progenie):
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-amber-900 text-sm">Deriva Antigenica (Antigenic Drift)</strong>
              <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-800 font-bold text-[10px]">Micro-mutazioni</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Dovuta agli errori casuali dell'RNA polimerasi RNA-dipendente (RdRp), priva di attività esonucleasica di{' '}
              <em>proofreading</em>. Causa mutazioni puntiformi nei singoli epitopi di HA e NA. Gli anticorpi neutralizzanti
              preesistenti perdono affinità o diventano inefficaci, consentendo al virus di reinfettare soggetti già
              esposti. È il motivo biologico per cui il <strong>vaccino antinfluenzale stagionale deve essere aggiornato
              e somministrato ogni anno</strong>.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-rose-900 text-sm">Salto Antigenico (Antigenic Shift)</strong>
              <span className="px-2 py-0.5 rounded bg-rose-200 text-rose-800 font-bold text-[10px]">Pandemico</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Avviene esclusivamente nei virus dell'influenza di tipo A (con genoma segmentato in 8 frammenti distinti di
              ssRNA). Se una singola cellula ospite (tipicamente nel suino, ospite permissivo "mixing vessel") viene
              co-infettata contemporaneamente da due ceppi diversi (es. un ceppo umano e uno aviario), durante l'assemblaggio
              può verificarsi un <strong>riassortimento genomico totale</strong> di segmenti interi. Il nuovo virus esprime
              una proteina HA o NA completamente inedita per la specie umana, verso cui la popolazione mondiale è
              immunologicamente vergine, scatenando <strong>pandemie globali devastanti</strong> (Spagnola 1918 H1N1, Asiatica
              1957 H2N2, Hong Kong 1968 H3N3, Suina 2009 H1N1).
            </p>
          </div>
        </div>
      </section>

      {/* Simulator 1: Interactive Lab */}
      <section id="sim-antiviral-evasion" className="p-6 rounded-2xl bg-slate-900 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-mono text-[11px] font-bold uppercase tracking-wider">
              Laboratorio Interattivo 1
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white mt-1">
              Simulatore del Sensing Antivirale & Strategie di Evasione
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">Targeting Molecolare in Tempo Reale</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <button
            onClick={() => setViralStrain('wt')}
            className={`p-3 rounded-xl border text-left transition-all ${
              viralStrain === 'wt'
                ? 'bg-blue-600/30 border-blue-400 text-white'
                : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <div className="font-bold text-xs">Virus Wild-Type</div>
            <div className="text-[11px] text-slate-400 mt-1">Nessuna evasione attiva (Controllo)</div>
          </button>
          <button
            onClick={() => setViralStrain('hcv_ns3')}
            className={`p-3 rounded-xl border text-left transition-all ${
              viralStrain === 'hcv_ns3'
                ? 'bg-amber-600/30 border-amber-400 text-white'
                : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <div className="font-bold text-xs">Epatite C (HCV)</div>
            <div className="text-[11px] text-slate-400 mt-1">Proteasi NS3 cliva MAVS mitocondriale</div>
          </button>
          <button
            onClick={() => setViralStrain('cmv_micb')}
            className={`p-3 rounded-xl border text-left transition-all ${
              viralStrain === 'cmv_micb'
                ? 'bg-purple-600/30 border-purple-400 text-white'
                : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <div className="font-bold text-xs">Citomegalovirus (HCMV)</div>
            <div className="text-[11px] text-slate-400 mt-1">microRNA anti-MICB + Blocco TAP1/2</div>
          </button>
          <button
            onClick={() => setViralStrain('pox_decoy')}
            className={`p-3 rounded-xl border text-left transition-all ${
              viralStrain === 'pox_decoy'
                ? 'bg-rose-600/30 border-rose-400 text-white'
                : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <div className="font-bold text-xs">Orthopoxvirus</div>
            <div className="text-[11px] text-slate-400 mt-1">Esca solubile NKG2D + Inibitore caspasi</div>
          </button>
        </div>

        {/* Dynamic Sliders and Metrics */}
        <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700 space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-300">Tempo Trascorso dall'Infezione (Ore):</span>
            <span className="font-mono text-cyan-400 font-bold">{infectionHour} Ore</span>
          </div>
          <input
            type="range"
            min={2}
            max={72}
            step={2}
            value={infectionHour}
            onChange={(e) => setInfectionHour(Number(e.target.value))}
            className="w-full accent-cyan-500 cursor-pointer"
          />

          {/* Real-time Status Bars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 font-mono text-xs">
            {/* Metric 1: IFN-I */}
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
              <span className="text-slate-400 block text-[10px]">LIVELLO IFN-α/β (ISG)</span>
              <strong className="text-sm font-bold text-white block mt-1">
                {viralStrain === 'hcv_ns3' ? '12% (Blocco MAVS)' : infectionHour < 12 ? '45%' : '94% (Attivato)'}
              </strong>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-blue-500 h-full transition-all duration-300"
                  style={{
                    width: viralStrain === 'hcv_ns3' ? '12%' : `${Math.min(100, infectionHour * 2)}%`
                  }}
                />
              </div>
            </div>

            {/* Metric 2: MHC-I Presentation */}
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
              <span className="text-slate-400 block text-[10px]">ESPRESSIONE MHC-I</span>
              <strong className="text-sm font-bold text-white block mt-1">
                {viralStrain === 'cmv_micb' ? '15% (TAP bloccato)' : '88% (Fisiologico)'}
              </strong>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{
                    width: viralStrain === 'cmv_micb' ? '15%' : '88%'
                  }}
                />
              </div>
            </div>

            {/* Metric 3: NK Cell Killing */}
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
              <span className="text-slate-400 block text-[10px]">CITOTOSSICITÀ NK</span>
              <strong className="text-sm font-bold text-white block mt-1">
                {viralStrain === 'cmv_micb'
                  ? '22% (miRNA anti-MICB)'
                  : viralStrain === 'pox_decoy'
                  ? '8% (NKG2D mascherato)'
                  : infectionHour > 18
                  ? '85% (Attiva)'
                  : '40%'}
              </strong>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-purple-500 h-full transition-all duration-300"
                  style={{
                    width:
                      viralStrain === 'cmv_micb'
                        ? '22%'
                        : viralStrain === 'pox_decoy'
                        ? '8%'
                        : `${Math.min(90, infectionHour * 1.5)}%`
                  }}
                />
              </div>
            </div>

            {/* Metric 4: Viral Clearance Probability */}
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
              <span className="text-slate-400 block text-[10px]">ERADICAZIONE VIRALE</span>
              <strong className="text-sm font-bold text-white block mt-1">
                {viralStrain === 'wt' && infectionHour > 36
                  ? 'Alta (92%)'
                  : viralStrain === 'hcv_ns3'
                  ? 'Bassa (Cronicizzazione)'
                  : viralStrain === 'cmv_micb'
                  ? 'Incompleta (Latenza)'
                  : 'Modesta (Evasione multipla)'}
              </strong>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-cyan-500 h-full transition-all duration-300"
                  style={{
                    width:
                      viralStrain === 'wt'
                        ? `${Math.min(95, infectionHour * 1.8)}%`
                        : viralStrain === 'hcv_ns3'
                        ? '25%'
                        : '38%'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Explanation Box */}
        <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-xs font-sans text-slate-200">
          {viralStrain === 'wt' && (
            <p className="m-0 leading-relaxed">
              <strong>Controllo Fisiologico:</strong> Il dsRNA virale attiva sia i TLR endosomiali che RIG-I/MDA5.
              MAVS mitocondriale polimerizza normalmente, inducendo massicce quantità di <strong>IFN-I</strong> via IRF3/7.
              Le cellule NK riconoscono i ligandi di stress MICA/MICB e distruggono le cellule infette, mentre i CTL CD8+
              riconoscono i peptidi virali correttamente caricati su MHC-I grazie all'attività di TAP1/2.
            </p>
          )}
          {viralStrain === 'hcv_ns3' && (
            <p className="m-0 leading-relaxed">
              <strong>Evasione dell'Epatite C:</strong> La proteasi virale <strong>NS3</strong> cliva MAVS staccandolo
              dalla membrana del mitocondrio. Questo impedisce a RIG-I di formare i complessi polimerici, facendo crollare
              la trascrizione di IFN-α ed IFN-β. La cellula infetta non riesce a instaurare lo stato antivirale nei
              tessuti vicini, favorendo l'infezione cronica e la cirrosi epatica.
            </p>
          )}
          {viralStrain === 'cmv_micb' && (
            <p className="m-0 leading-relaxed">
              <strong>Doppia Evasione da HCMV:</strong> Il Citomegalovirus produce proteine (US6, ICP47) che bloccano TAP,
              impedendo la presentazione dell'antigene ai CTL. Per evitare di essere ucciso dalle cellule NK per{' '}
              <em>missing-self</em>, HCMV esprime micro-RNA (miR-UL112) che distruggono l'mRNA di <strong>MICB</strong> e
              la proteina UL16 che sequestra MICA nell'ER: la cellula NK non riceve il segnale attivatore NKG2D e non uccide.
            </p>
          )}
          {viralStrain === 'pox_decoy' && (
            <p className="m-0 leading-relaxed">
              <strong>Esca Solubile da Orthopoxvirus:</strong> Il virus rilascia nello spazio extracellulare proteine solubili
              che agiscono da <em>esche competitive</em> legandosi al recettore <strong>NKG2D</strong> dei linfociti NK.
              Il recettore viene mascherato e non può più ingaggiare i ligandi espressi dalle cellule bersaglio infette.
            </p>
          )}
        </div>
      </section>

      {/* Chapter 24.7 */}
      <section id="sec-24-7" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">24.7</span> Principi Fondamentali di Vaccinologia: Tappe Storiche, Attiva vs Passiva & Cinetica della Memoria
        </h2>
        <p>
          La vaccinazione rappresenta il presidio medico preventivo a maggior impatto sulla sopravvivenza umana nella storia.
          L'idea empirica che la sopravvivenza a un'infezione conferisse protezione risale all'antichità:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Origini Antiche e Variolazione:</strong> Già Tucidide nel 430 a.C. descriveva durante la peste di Atene
            come solo i sopravvissuti potessero accudire i malati senza reinfettarsi. In Cina ed Egitto si praticava
            l'inalazione nasale di polvere di croste vaiolose, pratica introdotta in Inghilterra nel '700 da Lady Mary Wortley
            Montagu con il nome di <strong>variolazione</strong> (inoculazione del virus del vaiolo umano vitale prelevato da pustole,
            gravata tuttavia da una mortalità dell'1–2%).
          </li>
          <li>
            <strong>Edward Jenner (1798) & Il Principio Vaccinale:</strong> Osservando che le mungitrici contraggono il vaiolo
            bovino (<em>cowpox</em>) sviluppando solo lesioni lievi sulle mani ed essendo poi immuni dal vaiolo umano (<em>smallpox</em>),
            Jenner prelevò materiale da una lesione di vaiolo bovino della mungitrice Sarah Nelmes e lo inoculò nel bambino di 8 anni
            James Phipps. Dopo la guarigione, Jenner inoculò il vaiolo umano letale: il bambino non manifestò alcun sintomo.
            La protezione derivava dalla <strong>condivisione di epitopi antigenici cross-reattivi</strong> tra il virus bovino e quello
            umano: gli anticorpi anti-cowpox neutralizzano il virus del vaiolo umano. Dalla parola latina <em>vacca</em> nacque il
            termine universale <strong>vaccinazione</strong>.
          </li>
          <li>
            <strong>Louis Pasteur (1885):</strong> Generalizzò il concetto scientifico dimostrando che i patogeni possono essere
            volontariamente attenuati in laboratorio. Formulò il vaccino antirabbico, somministrato con successo al piccolo
            Joseph Meister morso da un cane rabido.
          </li>
        </ul>

        {/* Table: Attiva vs Passiva */}
        <div className="overflow-x-auto my-4 font-sans text-xs">
          <table className="w-full border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-100 text-slate-800">
                <th className="border border-slate-200 p-2 text-left">Parametro</th>
                <th className="border border-slate-200 p-2 text-left">Immunizzazione Passiva</th>
                <th className="border border-slate-200 p-2 text-left">Immunizzazione Attiva</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td className="p-2 font-bold text-slate-900">Sorgente</td>
                <td className="p-2">Trasferimento diretto di anticorpi preformati (da siero/plasma o latte materno)</td>
                <td className="p-2">Esposizione naturale all'infezione o somministrazione artificiale del vaccino</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-slate-900">Tempo di Insorgenza</td>
                <td className="p-2 font-semibold text-emerald-700">Immediato (minuti/ore dall'infusione)</td>
                <td className="p-2 text-amber-700">Lento (richiede 1–3 settimane per l'espansione clonale)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-slate-900">Durata della Protezione</td>
                <td className="p-2 text-rose-700">Transitoria (legata all'emivita delle IgG, ~21 giorni)</td>
                <td className="p-2 font-semibold text-emerald-700">Prolungata nel tempo (anni o decenni)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-slate-900">Memoria Immunologica</td>
                <td className="p-2 text-rose-700 font-bold">Assente (nessun priming di cellule B o T)</td>
                <td className="p-2 font-bold text-blue-700">Presente (plasmacellule a lunga vita e memory B/T)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-slate-900">Esempi Clinici</td>
                <td className="p-2">
                  Naturale: IgG transplacentari (FcRn) ed IgA nel colostro/latte. Artificiale: Ig antitetaniche post-ferita arrugginita,
                  siero antiofidico equino, plasma iperimmune anti-SARS-CoV-2.
                </td>
                <td className="p-2">
                  Infezione virale superata (morbillo naturale), tutti i vaccini del calendario obbligatorio e raccomandato.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Cinetica e Qualità della Memoria B:</strong> Durante la risposta primaria a un antigene vaccinale,
          la frequenza dei linfociti B specifici naive è estremamente bassa (circa <strong>1 su 10⁴ – 10⁵</strong>), con
          prevalenza iniziale di IgM a bassa affinità. Con la dose di richiamo (<em>boost</em>), la frequenza dei linfociti B
          di memoria balza a <strong>1 su 10² – 10³</strong>; grazie al centro germinativo e all'ipermutazione somatica
          guidata dall'enzima AID, gli anticorpi subiscono switch a <strong>IgG ad altissima affinità</strong>, garantendo una
          neutralizzazione istantanea.
        </p>
      </section>

      {/* Chapter 24.8 */}
      <section id="sec-24-8" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">24.8</span> Classificazione dei Vaccini Tradizionali: Vivi Attenuati vs Inattivati e Tossoidi
        </h2>
        <div className="space-y-4 font-sans text-xs">
          {/* Section: Attenuati */}
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-3">
            <div className="flex items-center justify-between">
              <strong className="text-blue-900 text-sm">1. Vaccini a Virus Vivo Attenuato</strong>
              <span className="px-2 py-0.5 rounded bg-blue-200 text-blue-800 font-bold text-[10px]">Replicanti</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Il virus è reso avirulento ma mantiene la capacità di infettare le cellule e replicarsi a basso livello:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>
                <strong>Metodo di Attenuazione Tradizionale:</strong> il virus isolato dall'uomo viene fatto crescere
                serialmente in colture cellulari di specie eterologa (es. fibroblasti embrionali di scimmia). Nel corso dei passaggi,
                il virus accumula mutazioni adattative per legare meglio i recettori di scimmia, perdendo gradualmente la competenza
                a replicarsi efficacemente nell'ospite umano.
              </li>
              <li>
                <strong>Strategia Jenneriana (Patogeni Correlati):</strong> utilizzo di un virus animale naturalmente non patogeno
                per l'uomo ma cross-reattivo (es. Rotavirus bovino o vaccino del vaiolo).
              </li>
              <li>
                <strong>Ingegneria Genetica Moderna:</strong> delezione mirata in vitro dei geni essenziali per la virulenza;
                il patogeno conserva la struttura antigenica integra ma è impossibilitato a revertire.
              </li>
            </ul>
            <div className="p-3 bg-white rounded-lg border border-blue-150 space-y-1">
              <strong className="text-slate-900 block font-bold">Il Caso Clinico del Rotavirus: Rotarix vs RotaTeq</strong>
              <p className="text-slate-600">
                Il rotavirus è un virus a dsRNA a 11 segmenti, prima causa mondiale di diarrea severa e disidratazione letale
                nei lattanti. Le glicoproteine di rivestimento più immunogeniche sono <strong>VP4 e VP7</strong>. Esistono due
                formulazioni: <strong>Rotarix</strong> (ceppo umano singolo attenuato mediante passaggi in cellule di scimmia) e{' '}
                <strong>RotaTeq</strong> (ceppo jenneriano riassortito pentavalente composto da rotavirus bovino modificato per
                esprimere le 5 varianti umane più diffuse di VP4 e VP7). I vaccini attenuati sono{' '}
                <span className="text-rose-700 font-bold">rigorosamente controindicati nei pazienti immunocompromessi</span> a causa
                del rischio di replicazione non controllata.
              </p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-blue-150 space-y-1">
              <strong className="text-slate-900 block font-bold">Dilemma Storico del Poliovirus: Sabin (OPV) vs Salk (IPV) & Reversione</strong>
              <p className="text-slate-700">
                Jonas Salk nel 1954 creò il vaccino inattivato <strong>IPV</strong> somministrato per via intramuscolare: induce
                esclusivamente IgG sieriche, prevenendo la viremia e la paralisi (poliomielite paralitica), ma non previene
                l'infezione intestinale né la trasmissione oro-fecale. Nel 1963 Albert Sabin sviluppò il vaccino vivo attenuato{' '}
                <strong>OPV</strong> somministrato per via orale: replicandosi nell'epitelio intestinale, stimola massicce{' '}
                <strong>IgA secretorie mucosali</strong>, bloccando l'infezione alla porta d'ingresso e impedendo la trasmissione
                nella comunità.
              </p>
              <p className="text-slate-700 mt-1">
                <strong>Il Pericolo della Reversione alla Virulenza:</strong> Nel 2007 in Nigeria si verificò un'epidemia causata dal
                ceppo vaccinale Sabin di tipo 3. Questo ceppo differiva dal virus wild-type naturale per{' '}
                <strong>soli 10 nucleotidi</strong>: durante la replicazione nella popolazione, una retromutazione puntiforme casuale
                ripristinò la neurovirulenza originaria. Per contrastare questo rischio, si selezionano ceppi con elevata divergenza
                (es. Ceppo 1 di Sabin, che differisce per ben 57 nucleotidi, rendendo la reversione statisticamente trascurabile), e oggi
                si utilizza prevalentemente IPV nei paesi polio-free.
              </p>
            </div>
          </div>

          {/* Section: Inattivati e Tossoidi */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <strong className="text-slate-900 text-sm">2. Vaccini Inattivati (Uccisi) & Tossoidi (DTP)</strong>
              <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-bold text-[10px]">Non Replicanti</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              I patogeni vengono uccisi con agenti chimici (formaldeide, β-propiolattone) o fisici (calore, raggi X).
              Non possono replicarsi, non possono in nessun caso revertire a forme virulente e sono sicuri negli immunocompromessi.
              Tuttavia, hanno una minore immunogenicità, non stimolano le risposte CTL (nessun ingresso nel citosol) e richiedono
              richiami multipli e aggiunta di adiuvanti.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>I Tossoidi (Anatossine):</strong> Molti batteri patogeni causano malattia non per invasività diretta ma
              tramite esotossine solubili altamente letali (es. <em>Clostridium tetani</em>, <em>Corynebacterium diphtheriae</em>).
              Trattando la tossina con formalina o raggi X, la struttura terziaria viene modificata eliminando la componente tossica
              ma conservando gli epitopi immunogenici: il prodotto ottenuto si chiama <strong>tossoide</strong>. Inoculato nell'uomo
              (vaccino DTP: Difterite, Tetano, Pertosse), induce anticorpi neutralizzanti che bloccano il legame della tossina al suo
              recettore tissutale.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 24.9 */}
      <section id="sec-24-9" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">24.9</span> Vaccini Coniugati (Switch T-Dipendente) & Virus-Like Particles (VLP) per HPV
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 space-y-2">
            <strong className="text-indigo-900 text-sm block">Vaccini a Subunità Coniugata per Batteri Capsulati</strong>
            <p className="text-slate-700 leading-relaxed">
              Batteri capsulati come <em>Haemophilus influenzae</em> tipo b (Hib), <em>Neisseria meningitidis</em> e{' '}
              <em>Streptococcus pneumoniae</em> possiedono una spessa capsula polisaccaridica.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>Il Limite Biologico:</strong> I polisaccaridi capsulari puri sono <strong>antigeni T-indipendenti di tipo 2 (TI-2)</strong>.
              Attivano i linfociti B cross-linkando i BCR ma non possono essere caricati su MHC di classe II; di conseguenza, non reclutano
              l'aiuto dei linfociti T helper, non inducono switch isotipico a IgG né memoria immunologica, producendo solo basse concentrazioni
              di IgM. Soprattutto, <strong>i bambini al di sotto dei due anni di età non montano alcuna risposta verso gli antigeni TI-2</strong>,
              restando totalmente esposti a meningiti fulminanti.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>Il Principio della Coniugazione:</strong> Il polisaccaride capsulare viene coniugato covalentemente a una{' '}
              <strong>proteina carrier immunogena</strong> (es. tossoide tetanico o difterico). Il linfocita B capta l'intero complesso
              tramite il BCR specifico per il polisaccaride, lo internalizza per endocitosi e digerisce la proteina carrier nei lisosomi.
              I peptidi derivati dalla proteina carrier vengono esposti su <strong>MHC di classe II</strong> ed ingaggiano un linfocita Th CD4+
              specifico per il carrier (CD40L-CD40, IL-4, IL-21). Il segnale cooperatore T induce il linfocita B a differenziare in plasmacellule
              secernenti <strong>IgG ad alta affinità</strong> e in cellule B di memoria: la risposta viene trasformata da{' '}
              <strong>T-indipendente a T-dipendente</strong>, conferendo protezione salvavita nei neonati.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 space-y-2">
            <strong className="text-purple-900 text-sm block">Virus-Like Particles (VLP) nel Vaccino HPV</strong>
            <p className="text-slate-700 leading-relaxed">
              Il Papillomavirus umano (HPV) comprende ceppi ad alto potere trasformante oncogeno: i ceppi <strong>16 e 18</strong> sono
              responsabili del <strong>99,9% dei carcinomi della cervice uterina</strong> e di circa il <strong>30% dei carcinomi squamocellulari
              del distretto testa-collo</strong>, oltre a tumori ano-genitali in ambo i sessi.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>Tecnologia VLP:</strong> Il gene codificante la proteina principale del capside virale, <strong>L1</strong>, viene
              isolato e clonato in cellule di lievito (<em>Saccharomyces cerevisiae</em>). La proteina L1 ricombinante espressa possiede la
              straordinaria proprietà biofisica di <strong>auto-assemblarsi spontaneamente in particelle virali vuote (Virus-Like Particles)</strong>.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Le VLP presentano la conformazione tridimensionale nativa identica al capside di HPV autentico, evocando una potentissima
              risposta di anticorpi neutralizzanti, ma sono <strong>completamente prive di DNA virale e degli oncogeni virali E6 ed E7</strong>,
              azzerando qualsiasi rischio di infezione o trasformazione neoplastica.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>Vaccinazione Universale di Genere:</strong> Poiché l'HPV è trasmesso per via sessuale e causa tumori testa-collo e
              anogenitali anche nei maschi, la profilassi vaccinale moderna è estesa a tutti gli adolescenti maschi e femmine (all'età di 11–12 anni).
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 24.10 */}
      <section id="sec-24-10" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">24.10</span> Adiuvanti Vaccinali, Vaccinologia Inversa & Piattaforme DNA/mRNA (Vaccini 2.0)
        </h2>
        <p>
          Gli <strong>adiuvanti</strong> sono sostanze chimiche o biologiche somministrate insieme all'antigene con due scopi essenziali:
          creare un <em>effetto deposito</em> (rallentando il rilascio dell'antigene ed esponendolo più a lungo alle cellule immunitarie) e
          fornire un <em>segnale di pericolo</em> stimolando i recettori dell'immunità innata (PRR/TLR) sulle APC per indurre costimolatori (CD80/CD86)
          e citochine polarizzanti:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-3 font-sans text-xs">
          <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-1">
            <strong className="text-slate-900 block font-bold">Idrossido di Alluminio (Allume)</strong>
            <p className="text-slate-600">
              L'adiuvante umano più diffuso; fa precipitare la proteina vaccinale prolungandone il rilascio e viene fagocitato dai macrofagi,
              attivando l'inflammasoma NLRP3 per una risposta Th2/umorale.
            </p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-1">
            <strong className="text-slate-900 block font-bold">Adiuvanti di Freund (IFA / CFA)</strong>
            <p className="text-slate-600">
              Emulsioni olio-in-acqua. L'incompleto (IFA) ritarda il rilascio; il completo (CFA) contiene micobatteri tubercolari uccisi
              (agonisti TLR2/4/9 e NOD2). Troppo tossico per l'uomo (causa granulomi sterili), è il cardine della ricerca animale.
            </p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-1">
            <strong className="text-slate-900 block font-bold">ISCOMs (Immune Stimulating Complex)</strong>
            <p className="text-slate-600">
              Gabbie micellari stabili formate da colesterolo, fosfolipidi e saponina Quil-A. Si fondono direttamente con la membrana
              plasmatica dell'APC rilasciando i peptidi nel citosol, consentendo il caricamento su MHC-I e l'induzione di CTL protettivi.
            </p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-1">
            <strong className="text-slate-900 block font-bold">Agonisti Sintetici dei PRR</strong>
            <p className="text-slate-600">
              Adiuvanti molecolari d'avanguardia: MPLA (Monofosforil-lipide A, agonista non tossico di TLR4), oligonucleotidi CpG (TLR9),
              motivi flagellinici (TLR5) che indirizzano risposte mirate Th1 o Th17.
            </p>
          </div>
        </div>

        <div className="space-y-3 font-sans text-xs mt-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 text-sm block mb-1">
              La Vaccinologia Inversa (Reverse Vaccinology) — Il Metodo Rino Rappuoli
            </strong>
            <p className="text-slate-700 leading-relaxed">
              Mentre l'approccio pasteuriano partiva dal patogeno cresciuto in vitro (spesso impossibile per microrganismi non coltivabili),
              la <strong>Reverse Vaccinology</strong> introdotta da Rino Rappuoli parte dal <strong>sequenziamento dell'intero genoma del
              patogeno</strong>. Tramite algoritmi bioinformatici avanzati, si identificano le sequenze codificanti proteine transmembrana
              esposte in superficie e fattori di virulenza. Le sequenze predette vengono clonate ed espresse ricombinanti in vitro per saggiarne
              la capacità di legare sieri di pazienti convalescenti. Questo approccio ha permesso di creare il primo vaccino efficace contro il
              temibile <strong>Meningococco di sierogruppo B (Bexsero)</strong>, la cui capsula polisaccaridica non era sfruttabile perché
              strutturalmente identica all'acido polisialico del tessuto nervoso fetale umano (mimetismo molecolare autoimmune).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 text-sm block mb-1">
              Vaccini a DNA & Nuova Generazione mRNA-LNP
            </strong>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 leading-relaxed">
              <li>
                <strong>Vaccini a DNA:</strong> Plasmidi contenenti il gene antigenico sotto promotore virale (CMV), inoculati nei tessuti
                mediante getto pressurizzato d'oro (<em>gene gun</em> o pistola genica) o elettroporazione. L'antigene viene espresso per via
                diretta nelle cellule dendritiche (presentazione su MHC-I e MHC-II) o per via indiretta (miociti infettati captati da cDC1
                per cross-presentazione). Straordinariamente stabili a temperatura ambiente, eliminano ogni vincolo di catena del freddo.
              </li>
              <li>
                <strong>Vaccini a mRNA (SARS-CoV-2 - Pfizer/BioNTech BNT162b2 & Moderna mRNA-1273):</strong> Inoculazione diretta dell'mRNA
                messaggero codificante la glicoproteina Spike stabilizzata nella conformazione prefusione (mutazioni 2P). Per prevenire la
                degradazione immediata e il riconoscimento distruttivo da parte dei TLR7/8 endosomiali, i nucleotidi di uridina vengono
                sostituiti con <strong>N1-metil-pseudouridina</strong> (scoperta valsa il Premio Nobel a Karikó e Weissman). L'mRNA è
                veicolato all'interno di <strong>nanoparticelle lipidiche (LNP)</strong> ionizzabili che ne mediano l'endocitosi e la fuga
                nel citoplasma dell'ospite, stimolando una risposta protettiva simultanea di anticorpi neutralizzanti e CTL CD8+.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Chapter 24.11 */}
      <section id="sec-24-11" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">24.11</span> Sanità Pubblica, Immunità di Gregge & Rapporto Beneficio-Rischio
        </h2>
        <p>
          L'efficacia di un programma vaccinale va oltre la protezione del singolo individuo, estendendosi alla collettività attraverso
          l'<strong>immunità di gregge (Herd Immunity)</strong>:
        </p>
        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 font-sans text-xs space-y-2">
          <strong className="text-blue-900 text-sm block">La Soglia Critica di Immunità di Gregge</strong>
          <p className="text-slate-700 leading-relaxed">
            Se una percentuale sufficiente di individui è immunizzata, la catena di trasmissione interumana del patogeno viene interrotta,
            proteggendo indirettamente anche coloro che <strong>non possono essere vaccinati</strong> per ragioni mediche oggettive
            (neonati non ancora eleggibili, pazienti oncologici in chemioterapia aplasizzante, soggetti con immunodeficienze severe).
            La soglia critica si calcola con la formula:
          </p>
          <div className="p-2.5 bg-white rounded-lg border border-blue-300 font-mono text-center text-blue-900 font-bold text-sm">
            Soglia Minima di Copertura (Qc) = 1 − (1 / R₀)
          </div>
          <p className="text-slate-700 leading-relaxed">
            Per patogeni a trasmissibilità elevatissima come il morbillo (R₀ ≈ 15–18), la copertura vaccinale richiesta è pari ad almeno il{' '}
            <strong>94–95%</strong>. Se la copertura scende anche di pochi punti percentuali, si creano sacche di suscettibili che
            innescano focolai epidemici esplosivi.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 font-sans text-xs space-y-2">
          <strong className="text-rose-900 text-sm block">
            Il Caso Wakefield (1998) & Il Rigoroso Bilancio Rischio-Beneficio
          </strong>
          <p className="text-slate-700 leading-relaxed">
            Nel 1998 Andrew Wakefield pubblicò su <em>The Lancet</em> uno studio fraudolento su 12 bambini ipotizzando un nesso tra vaccino
            antimorbillo (MPR) e autismo. Indagini successive dimostrarono che i dati erano stati falsificati per interessi economici legati a
            brevetti alternativi. Lo studio fu ritirato formalmente dalla rivista e Wakefield radiato dall'Ordine dei Medici per condotta
            anti-deontologica e frode. Centinaia di studi su milioni di bambini non hanno riscontrato alcuna associazione tra vaccini e autismo.
          </p>
          <p className="text-slate-700 leading-relaxed">
            <strong>Analisi Oggettiva del Rischio:</strong>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
            <div className="p-2.5 bg-white rounded border border-rose-300">
              <strong className="text-rose-900 block font-bold">Rischio da Malattia Naturale (Morbillo):</strong>
              <ul className="list-disc pl-4 mt-1 text-slate-700 space-y-0.5">
                <li>Polmonite grave: 1 su 20 malati</li>
                <li>Encefalite acuta: 1 su 1.000 – 2.000 malati</li>
                <li>Morte: 1 su 1.000 – 3.000 malati</li>
                <li>Panencefalite subacuta sclerosante (SSPE): 1 su 10.000 malati</li>
              </ul>
            </div>
            <div className="p-2.5 bg-white rounded border border-emerald-300">
              <strong className="text-emerald-900 block font-bold">Rischio da Vaccinazione (MPR):</strong>
              <ul className="list-disc pl-4 mt-1 text-slate-700 space-y-0.5">
                <li>Reazione febbrile transitoria: 1 su 10–20</li>
                <li>Trombocitopenia transitoria autolimitante: 1 su 30.000</li>
                <li>Encefalite da vaccino: &lt; 1 su 1.000.000 di dosi</li>
                <li>Decesso: 0 (nessuna associazione causale provata)</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 italic">
            I vaccini sono "vittime del loro stesso successo": avendo eliminato la visibilità delle malattie letali, la popolazione
            perde memoria della loro gravità e sopravvaluta rischi teorici o falsi allarmi mediatici.
          </p>
        </div>
      </section>

      {/* Simulator 2: Interactive Lab - Platforms & Herd Immunity */}
      <section id="sim-vaccine-platform-lab" className="p-6 rounded-2xl bg-slate-900 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[11px] font-bold uppercase tracking-wider">
              Laboratorio Interattivo 2
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white mt-1">
              Laboratorio di Piattaforme Vaccinali & Calcolatore di Immunità di Gregge
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">Analisi Clinica & Modello Epidemiologico</span>
        </div>

        {/* Tab Selector for Vaccine Platforms */}
        <div>
          <span className="text-xs font-semibold text-slate-300 block mb-2 font-mono">SELEZIONA PIATTAFORMA VACCINALE:</span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {[
              { id: 'attenuated', label: 'Vivo Attenuato', desc: 'Rotarix, Sabin, MPR' },
              { id: 'inactivated', label: 'Inattivato (Ucciso)', desc: 'Salk, Epatite A' },
              { id: 'toxoid', label: 'Tossoide (DTP)', desc: 'Tetano, Difterite' },
              { id: 'conjugated', label: 'Coniugato Carrier', desc: 'Hib, Pneumococco' },
              { id: 'vlp', label: 'VLP Ricombinante', desc: 'HPV-L1, HBV' },
              { id: 'mrna', label: 'mRNA in LNP', desc: 'Pfizer, Moderna' }
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveVaccinePlatform(p.id as any)}
                className={`p-2.5 rounded-xl border text-left transition-all text-xs ${
                  activeVaccinePlatform === p.id
                    ? 'bg-emerald-600/30 border-emerald-400 text-white'
                    : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="font-bold">{p.label}</div>
                <div className="text-[10px] text-slate-400 truncate">{p.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Platform Details Card */}
        <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3 font-sans text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-700">
              <span className="text-slate-400 block text-[10px] font-mono">RISPOSTA IMMUNE ATTIVATA</span>
              <strong className="text-white text-sm block mt-0.5">
                {activeVaccinePlatform === 'attenuated'
                  ? 'Umorale (IgG + IgA) + Cellulo-mediata (CTL CD8+)'
                  : activeVaccinePlatform === 'conjugated'
                  ? 'Umorale T-dipendente (IgG ad alta affinità + Memory B)'
                  : activeVaccinePlatform === 'mrna'
                  ? 'Umorale Neutralizzante (IgG/IgA) + Robusta CTL CD8+'
                  : activeVaccinePlatform === 'vlp'
                  ? 'Potenti Anticorpi Neutralizzanti IgG'
                  : 'Prevalentemente Umorale (IgG sieriche)'}
              </strong>
            </div>

            <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-700">
              <span className="text-slate-400 block text-[10px] font-mono">RISCHIO REVERSIONE A VIRULENZA</span>
              <strong
                className={`text-sm block mt-0.5 ${
                  activeVaccinePlatform === 'attenuated' ? 'text-amber-400' : 'text-emerald-400'
                }`}
              >
                {activeVaccinePlatform === 'attenuated'
                  ? 'Possibile (es. Sabin ceppo 3) — Controindicato in deficit T'
                  : 'Nullo (0%) — Impossibile per assenza di patogeno vitale'}
              </strong>
            </div>

            <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-700">
              <span className="text-slate-400 block text-[10px] font-mono">STABILITÀ & CATENA DEL FREDDO</span>
              <strong className="text-white text-sm block mt-0.5">
                {activeVaccinePlatform === 'mrna'
                  ? 'Critica (-80°C / -20°C per evitare degradazione RNA)'
                  : activeVaccinePlatform === 'attenuated'
                  ? 'Sensibile al calore (richiede refrigerazione +2°C / +8°C)'
                  : 'Elevata stabilità a temperatura ambiente (soprattutto DNA)'}
              </strong>
            </div>
          </div>
        </div>

        {/* Dynamic Herd Immunity Simulator */}
        <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="font-bold text-sm text-cyan-400 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              <span>Simulatore Interattivo di Immunità di Gregge (Herd Immunity Calculator)</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() => {
                  setPathogenR0(15);
                  setVaccineCoverage(95);
                }}
                className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-[11px]"
              >
                Preset Morbillo (R₀=15)
              </button>
              <button
                onClick={() => {
                  setPathogenR0(4);
                  setVaccineCoverage(80);
                }}
                className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-[11px]"
              >
                Preset SARS-CoV-2 (R₀=4)
              </button>
              <button
                onClick={() => {
                  setPathogenR0(2);
                  setVaccineCoverage(60);
                }}
                className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-[11px]"
              >
                Preset Influenza (R₀=2)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300">Tasso di Riproduzione di Base Patogeno (R₀):</span>
                <span className="font-mono text-cyan-400 font-bold">{pathogenR0}</span>
              </div>
              <input
                type="range"
                min={1.5}
                max={18}
                step={0.5}
                value={pathogenR0}
                onChange={(e) => setPathogenR0(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300">Copertura Vaccinale della Popolazione (%):</span>
                <span className="font-mono text-emerald-400 font-bold">{vaccineCoverage}%</span>
              </div>
              <input
                type="range"
                min={10}
                max={99}
                step={1}
                value={vaccineCoverage}
                onChange={(e) => setVaccineCoverage(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
              <span className="text-slate-400 block text-[10px]">SOGLIA MINIMA CRITICA (Qc)</span>
              <strong className="text-base font-bold text-amber-400 block mt-1">{herdThreshold}%</strong>
              <span className="text-[10px] text-slate-500">Formula: 1 - 1/R₀</span>
            </div>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
              <span className="text-slate-400 block text-[10px]">STATO DELLA PROTEZIONE COMUNITARIA</span>
              <strong
                className={`text-base font-bold block mt-1 ${
                  isHerdProtected ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {isHerdProtected ? 'PROTETTO (Catena Spezzata)' : 'A RISCHIO FOCOLAIO'}
              </strong>
              <span className="text-[10px] text-slate-500">
                {isHerdProtected ? 'I soggetti fragili non vaccinabili sono al sicuro' : 'Rischio di focolai esplosivi'}
              </span>
            </div>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
              <span className="text-slate-400 block text-[10px]">RISCHIO DI FOCOLAIO EPIDEMICO</span>
              <strong
                className={`text-base font-bold block mt-1 ${
                  outbreakRisk === 0 ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {outbreakRisk === 0 ? '0% (Contenuto)' : `${outbreakRisk}% (Alto)`}
              </strong>
              <span className="text-[10px] text-slate-500">Probabilità di diffusione secondaria</span>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Academic Tables */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">24.12</span> Tabelle Sinottiche Avanzate di Studio
        </h2>

        {/* Table 1: Viral Evasion */}
        <div id="tabella-24-1" className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase">
              Tabella 24.1 — Compendio dei Meccanismi di Evasione Virale & Bersagli Molecolari
            </span>
          </div>
          <div className="overflow-x-auto font-sans text-xs">
            <table className="w-full border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  <th className="border border-slate-200 p-2 text-left">Patogeno Virale</th>
                  <th className="border border-slate-200 p-2 text-left">Fattore Virale Esecutore</th>
                  <th className="border border-slate-200 p-2 text-left">Bersaglio Molecolare dell'Ospite</th>
                  <th className="border border-slate-200 p-2 text-left">Effetto Immunologico Diretto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-2 font-bold text-slate-900">Virus Epatite C (HCV)</td>
                  <td className="p-2 font-mono">Proteasi NS3/4A</td>
                  <td className="p-2">MAVS (IPS-1) su membrana mitocondriale esterna</td>
                  <td className="p-2">Clivaggio proteolitico di MAVS; blocco totale di IRF3 e sintesi IFN-α/β</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Citomegalovirus (HCMV)</td>
                  <td className="p-2 font-mono">US6, ICP47, US2, US11</td>
                  <td className="p-2">Trasportatore TAP1/2 e catene pesanti MHC-I</td>
                  <td className="p-2">Inibizione import peptidico nell'ER e distruzione proteasomiale di MHC-I</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Citomegalovirus (HCMV)</td>
                  <td className="p-2 font-mono">UL16 + miR-UL112 virale</td>
                  <td className="p-2">Ligandi attivatori NK (MICA e mRNA di MICB)</td>
                  <td className="p-2">Repressione traduzionale di MICB e ritenzione di MICA; evasione da NKG2D</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Orthopoxvirus</td>
                  <td className="p-2 font-mono">OMCP (Orthopoxvirus MHC-like)</td>
                  <td className="p-2">Recettore attivatore NKG2D su cellule NK e CD8+</td>
                  <td className="p-2">Proteina esca solubile che satura NKG2D mascherandolo dai ligandi di stress</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Virus Epstein-Barr (EBV)</td>
                  <td className="p-2 font-mono">vIL-10 (omologo virale BCRF1)</td>
                  <td className="p-2">Recettore IL-10R su macrofagi e cellule T</td>
                  <td className="p-2">Soppressione della trascrizione di IL-12, IFN-γ e blocco flogosi Th1</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Poxvirus & Herpesvirus</td>
                  <td className="p-2 font-mono">vFLIP, CrmA, vBcl-2</td>
                  <td className="p-2">Caspasi-8, Caspasi-1, proteine pro-apoptotiche Bak/Bax</td>
                  <td className="p-2">Inibizione dell'apoptosi intrinseca ed estrinseca; prevenzione piroptosi</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">HIV & HTLV-1</td>
                  <td className="p-2 font-mono">Tat, Tax (induzione di FasL)</td>
                  <td className="p-2">Fas (CD95) espresso sui Linfociti T CD8+ CTL</td>
                  <td className="p-2">Uccisione contropelo per apoptosi inversa dei CTL che attaccano la cellula</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Virus Influenzale A</td>
                  <td className="p-2 font-mono">RdRp polimerasi / Riassortimento segmenti</td>
                  <td className="p-2">Epitopi neutralizzanti di Emoagglutinina (HA) e Neuraminidasi (NA)</td>
                  <td className="p-2">Antigenic Drift (deriva puntiforme annuale) e Antigenic Shift (pandemie)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: Vaccine Taxonomy */}
        <div id="tabella-24-2" className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase">
              Tabella 24.2 — Matrice Comparativa delle Piattaforme Vaccinali Umane
            </span>
          </div>
          <div className="overflow-x-auto font-sans text-xs">
            <table className="w-full border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  <th className="border border-slate-200 p-2 text-left">Categoria Piattaforma</th>
                  <th className="border border-slate-200 p-2 text-left">Esempi Clinici Umani</th>
                  <th className="border border-slate-200 p-2 text-left">Profilo Immunitario Indotto</th>
                  <th className="border border-slate-200 p-2 text-left">Vantaggi Principali</th>
                  <th className="border border-slate-200 p-2 text-left">Limiti & Controindicazioni</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-2 font-bold text-slate-900">Vivo Attenuato</td>
                  <td className="p-2">Morbillo, Parotite, Rosolia (MPR), Sabin (OPV), Rotarix/RotaTeq, Varicella</td>
                  <td className="p-2">IgG + IgA mucosali + CTL CD8+ (MHC-I/II)</td>
                  <td className="p-2">Protezione duratura con dose singola, imita l'infezione naturale</td>
                  <td className="p-2 text-rose-700">Rischio di reversione a virulenza; controindicato in gravidanza e deficit T</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Inattivato (Ucciso)</td>
                  <td className="p-2">Poliovirus Salk (IPV), Epatite A, Rabbia, Influenza a virus split</td>
                  <td className="p-2">Anticorpi sierici IgG (bassa o nulla IgA e scarsa CTL)</td>
                  <td className="p-2">Nessun rischio di reversione; sicuro negli immunocompromessi</td>
                  <td className="p-2">Immunità più breve; richiede richiami multipli e adiuvanti</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Tossoidi (Anatossine)</td>
                  <td className="p-2">Tetano, Difterite (DTP)</td>
                  <td className="p-2">Anticorpi neutralizzanti IgG ad alta affinità contro l'esotossina</td>
                  <td className="p-2">Estremamente efficace per patologie mediate da tossina solubile</td>
                  <td className="p-2">Non protegge contro la colonizzazione batterica; richiede booster decennali</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Subunità Coniugata</td>
                  <td className="p-2"><em>H. influenzae</em> b (Hib), Meningococco C/ACWY, Pneumococco coniugato (PCV13/20)</td>
                  <td className="p-2">Switch T-dipendente a IgG con memoria immunologica</td>
                  <td className="p-2 font-bold text-emerald-800">Efficace nei neonati e bambini &lt;2 anni (supera il blocco TI-2)</td>
                  <td className="p-2">Complessità di sintesi chimica e coniugazione carrier</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Virus-Like Particles (VLP)</td>
                  <td className="p-2">Papillomavirus umano (HPV - Gardasil 9), Epatite B (HBsAg ricombinante)</td>
                  <td className="p-2">Anticorpi neutralizzanti IgG duraturi contro il capside virale</td>
                  <td className="p-2 font-bold text-emerald-800">Conformazione nativa; zero rischio infettivo o oncogeno (privo di DNA)</td>
                  <td className="p-2">Produzione biotecnologica in lieviti o sistemi eucariotici</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">mRNA Formulato in LNP</td>
                  <td className="p-2">SARS-CoV-2 (Comirnaty/Pfizer, Spikevax/Moderna)</td>
                  <td className="p-2">Anticorpi neutralizzanti + potente induzione di CTL CD8+ citotossici</td>
                  <td className="p-2 font-bold text-emerald-800">Sviluppo rapido su piattaforma computazionale; non integra nel genoma</td>
                  <td className="p-2">Termolabilità marcata (necessità di ultra-freezer -80°C / -20°C)</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Vaccini a DNA</td>
                  <td className="p-2">Piattaforme gene gun per patologie infettive e oncologiche</td>
                  <td className="p-2">Espressione endogena con presentazione sia su MHC-I che MHC-II</td>
                  <td className="p-2">Massima stabilità termica a temperatura ambiente, costi molto bassi</td>
                  <td className="p-2">Necessità di sistemi di rilascio ad alta pressione (gene gun) o elettroporazione</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_QUESTIONS} lessonNumber={24} title="Verifica dell'Apprendimento · Lezione 24" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS} lessonNumber={24} title="Flashcard di Ripasso Attivo · Lezione 24" />
    </article>
  );
};
