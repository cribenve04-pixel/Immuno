import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import React, { useState, useEffect } from 'react';
import { InlineProcessFlowDiagram } from './InlineProcessFlowDiagram';
import {
  Brain,
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
  Baby,
  Dna,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

interface Lezione25ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione25View: React.FC<Lezione25ViewProps> = ({ isSerif, fontSize }) => {
  // Simulator 1: Gut-Brain Axis States
  const [axisState, setAxisState] = useState<'eubiosis' | 'antibiotics' | 'chronic_stress' | 'neuroinflammation'>('eubiosis');
  const [vagalStimulation, setVagalStimulation] = useState<number>(80);

  // Simulator 2: Tryptophan Metabolic Switch (Serotonin vs Kynurenine/Quinolinic Acid)
  const [inflammatoryTone, setInflammatoryTone] = useState<number>(20); // 0 to 100%
  const [stressCortisol, setStressCortisol] = useState<number>(25); // 0 to 100%
  const [butyrateLevel, setButyrateLevel] = useState<number>(75); // 0 to 100%

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState<{ [key: number]: boolean }>({});

  // Flashcards State
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

  // Computed metrics for Tryptophan Lab
  // IDO/TDO drive: driven by inflammation and cortisol, attenuated by butyrate
  const idoActivity = Math.max(5, Math.min(100, Math.round(inflammatoryTone * 0.7 + stressCortisol * 0.5 - butyrateLevel * 0.3)));
  const serotoninProduction = Math.max(10, Math.round(100 - idoActivity * 0.85));
  const quinolinicAcidMicroglia = Math.max(5, Math.min(100, Math.round(idoActivity * 1.1 - butyrateLevel * 0.4)));
  const kynurenicAcidAstrocytes = Math.max(10, Math.round(50 + butyrateLevel * 0.4 - inflammatoryTone * 0.3));
  const neurotoxicityIndex = Math.max(0, Math.min(100, Math.round(quinolinicAcidMicroglia * 1.2 - kynurenicAcidAstrocytes * 0.6)));

  
  const FLASHCARDS = [
            {
              id: 1,
              front: "Perché la vagotomia abolisce l'effetto ansiolitico del probiotico Lactobacillus rhamnosus?",
              back: "Il nervo vago è composto per il 90% da fibre afferenti sensitive. Il ceppo stimola recettori locali inducendo impulsi elettrici che risalgono al tronco encefalico e all'amigdala: resecando il nervo vago, la via conduttrice viene interrotta e il segnale non raggiunge il cervello."
            },
            {
              id: 2,
              front: "Qual è la differenza neurofunzionale tra Acido Chinolinico e Acido Chinurenico?",
              back: "Entrambi derivano dalla chinurenina (metabolismo del triptofano via IDO1): l'Acido Chinolinico (prodotto dalla microglia attivata) è un potente agonista del recettore NMDA, induce eccitotossicità e neuroinfiammazione; l'Acido Chinurenico (prodotto dagli astrociti) è un antagonista competitivo NMDA, neuroprotettivo."
            },
            {
              id: 3,
              front: "Come dimostra lo studio dell'Università Sapienza il legame tra antibiotici e glioma cerebrale?",
              back: "I topi trattati con antibiotici sviluppano gliomi di volume maggiore perché la disbiosi riduce la trans-presentazione di IL-15 da parte delle cellule dendritiche intestinali. Ciò causa la perdita selettiva della sottopopolazione di cellule NK CD27+ ad alta capacità citotossica antitumorale."
            },
            {
              id: 4,
              front: "In che modo il butirrato agisce come modulatore epigenetico sui linfociti T?",
              back: "Il butirrato è un potente inibitore delle istone deacetilasi (HDAC). Bloccando la rimozione dei gruppi acetile, mantiene la cromatina decondensata sul promotore del gene FOXP3, promuovendo stabilmente il differenziamento dei linfociti T naive in linfociti T regolatori (Treg)."
            },
            {
              id: 5,
              front: "Qual è il significato patogenetico dell'Ipotesi di Braak nel Morbo di Parkinson?",
              back: "Ipotizza che l'aggregazione patologica dell'α-sinucleina inizi nel plesso enterico intestinale sotto l'influenza di disbiosi e flogosi locale (calprotectina e zonulina elevate), per poi risalire retrogradamente lungo le fibre afferenti del nervo vago fino al tronco encefalico e alla substantia nigra."
            },
            {
              id: 6,
              front: "Quali anomalie tipiche presentano i topi Germ-Free (senza microbiota) a livello del SNC?",
              back: "Presentano ridotta espressione di BDNF nell'ippocampo e amigdala, microglia atrofica e immatura, barriera emato-encefalica iper-permeabile (leaky BBB per ridotta espressione di claudina-5 e occludina) e iperreattività esagerata dell'asse dello stress HPA."
            }
          ];
  const QUIZ_QUESTIONS = [
            {
              id: 1,
              question: "Quale proporzione delle fibre costituenti il nervo vago è deputata alla trasmissione afferente dall'intestino al cervello?",
              options: [
                "Circa il 10%",
                "Circa il 50%",
                "Circa il 90%",
                "Il 100% (è un nervo esclusivamente sensitivo)"
              ],
              correct: 2,
              explanation: "Il nervo vago è fortemente asimmetrico: solo il 10% delle fibre è efferente motorio, mentre ben il 90% è costituito da fibre sensitive afferenti che trasmettono costantemente informazioni dallo stato intestinale al SNC."
            },
            {
              id: 2,
              question: "Quale percentuale della serotonina totale corporea è sintetizzata a livello gastrointestinale dalle cellule enterocromaffini?",
              options: [
                "Circa il 20%",
                "Circa il 50%",
                "Oltre il 95%",
                "La totalità (100%), il cervello non produce serotonina"
              ],
              correct: 2,
              explanation: "Oltre il 95% della serotonina dell'organismo è prodotta dalle cellule enterocromaffini della mucosa intestinale tramite l'enzima TPH1, modulato dai metaboliti del microbiota (SCFA)."
            },
            {
              id: 3,
              question: "In che modo lo stress cronico e i glucocorticoidi (cortisolo) influenzano la migrazione linfocitaria?",
              options: [
                "Aumentano l'espressione di CXCR4 sui linfociti, sequestrandoli nel midollo osseo",
                "Inducono la lisi massiva dei linfociti B per apoptosi estrinseca",
                "Bloccano la produzione di eritropoietina renale",
                "Convertono i macrofagi in cellule epiteliali caliciformi"
              ],
              correct: 0,
              explanation: "I glucocorticoidi sovraregolano il recettore CXCR4 sui linfociti; il legame con la chemochina midollare CXCL12 sequestra le cellule immunitarie nel midollo, provocando deplezione periferica e immunosoppressione."
            },
            {
              id: 4,
              question: "Quale anomalia immunologica specifica è stata scoperta nello studio dell'Università Sapienza sui topi affetti da glioma cerebrale trattati con antibiotici?",
              options: [
                "Un aumento del 300% delle cellule plasmatiche producenti IgE",
                "La perdita selettiva della sottopopolazione di cellule NK CD27+ ad alta capacità citotossica per difetto di IL-15",
                "La mutazione genetica spontanea del gene p53 nei neuroni corticali",
                "Il blocco completo dell'enzima proteasoma nei linfociti CD4+"
              ],
              correct: 1,
              explanation: "Lo studio Sapienza ha evidenziato che la disbiosi da antibiotici sopprime la trans-presentazione di IL-15 da parte delle DC intestinali, provocando la riduzione selettiva delle cellule NK CD27+ citotossiche e favorendo la crescita tumorale."
            },
            {
              id: 5,
              question: "Quale metabolita della via delle chinurenine è prodotto dalla microglia attivata ed agisce come agonista eccitotossico dei recettori NMDA?",
              options: [
                "L'acido chinurenico",
                "L'acido chinolinico",
                "La melatonina",
                "L'acido butirrico"
              ],
              correct: 1,
              explanation: "L'acido chinolinico è prodotto dalla microglia durante infiammazioni mediate da IDO1: è un potente agonista dei recettori NMDA, genera radicali liberi e neurotossicità, ed è associato a depressione e psicosi."
            },
            {
              id: 6,
              question: "Qual è la differenza neurochimica tra amido e cellulosa a livello dell'apparato digerente umano?",
              options: [
                "L'amido ha legami β-1,4 digeribili; la cellulosa ha legami α-1,4 fermentabili",
                "L'amido presenta legami α-1,4 idrolizzati dalle amilasi umane; la cellulosa ha legami β-1,4 indigeribili dall'uomo ma fermentati dai batteri in SCFA",
                "Entrambi vengono assorbiti intatti nel duodeno per pinocitosi",
                "La cellulosa viene trasformata in glucosio nello stomaco a pH acido"
              ],
              correct: 1,
              explanation: "Gli enzimi digestivi umani idrolizzano solo i legami α-1,4 dell'amido; i legami β-1,4 della cellulosa resistono alla digestione gastrica e raggiungono il colon, dove vengono fermentati in SCFA benefici dal microbiota."
            },
            {
              id: 7,
              question: "Quale tra i tre principali acidi grassi a catena corta (SCFA) è il solo in grado di attraversare liberamente la barriera emato-encefalica e raggiungere il liquor?",
              options: [
                "Il butirrato",
                "Il propionato",
                "L'acetato",
                "Il valerato"
              ],
              correct: 2,
              explanation: "L'acetato (C2) è il principale SCFA che attraversa liberamente la BBB ed entra nel fluido cerebrospinale a concentrazioni significative, fungendo da precursore per l'Acetil-CoA e la mielinizzazione."
            },
            {
              id: 8,
              question: "Secondo l'ipotesi neuropatologica di Braak, da dove avrebbe origine il processo patogenetico del Morbo di Parkinson?",
              options: [
                "Dalla corteccia frontale in seguito a traumi cranici ripetuti",
                "Dal plesso mienterico enterico intestinale con risalita retrograda lungo il nervo vago",
                "Dalle cellule di Purkinje cerebellari per deficit di vitamina B12",
                "Dal midollo spinale lombare a causa dell'artrosi"
              ],
              correct: 1,
              explanation: "L'ipotesi di Braak dimostra che gli aggregati prioni di α-sinucleina originano nel plesso enterico dell'intestino (favoriti da disbiosi locale) e risalgono al tronco encefalico lungo le fibre afferenti vagali."
            },
            {
              id: 9,
              question: "Cosa dimostra l'esperimento di somministrazione del probiotico Lactobacillus rhamnosus nei topi sottoposti a vagotomia?",
              options: [
                "Che il probiotico cura l'infezione batterica indipendentemente dai nervi",
                "Che gli effetti ansiolitici e la sovraregolazione dei recettori GABA cerebrali richiedono obbligatoriamente l'integrità del nervo vago",
                "Che la vagotomia provoca obesità immediata nel topo",
                "Che il batterio penetra direttamente nei ventricoli cerebrali"
              ],
              correct: 1,
              explanation: "La resezione del nervo vago azzera completamente gli effetti benefici su ansia e recettori GABA cerebrali indotti da L. rhamnosus, provando che il vago è il mediatore neurale necessario dell'effetto."
            },
            {
              id: 10,
              question: "Cosa si intende per 'olobionte' in medicina moderna?",
              options: [
                "Un individuo affetto da immunodeficienza combinata grave",
                "L'unità biologica funzionale costituita dall'organismo ospite e da tutti i microrganismi simbiotici co-evoluti",
                "Una cellula staminale totipotente derivata dal midollo osseo",
                "Un tipo di farmaco biologico monoclonale bispecifico"
              ],
              correct: 1,
              explanation: "L'olobionte è l'organismo ospite considerato insieme al suo microbiota commensale integrato: un macro-ecosistema in cui metabolismo, immunità e funzioni cerebrali dipendono dalla costante cooperazione simbiotica."
            }
          ];

  return (
    <article className={`space-y-12 ${fontClass} ${sizeClass} text-slate-800`}>

      {/* Chapter 25.1 */}
      <section id="sec-25-1" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">25.1</span> Nascita ed Evoluzione del Concetto: Da Beaumont (1833) e Metchnikoff al Dogma Bottom-Up
        </h2>
        <p>
          Il concetto che l'apparato digerente e il sistema nervoso centrale siano intimamente interconnessi
          ha radici storiche affascinanti e rigorosamente documentate:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-amber-900 font-bold uppercase text-[11px]">William Beaumont (1833)</strong>
              <span className="px-1.5 py-0.5 rounded bg-amber-200 text-amber-800 font-mono text-[10px]">Fisiologia Clinica</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Il medico militare statunitense William Beaumont curò il cacciatore di pelli canadese Alexis St. Martin,
              sopravvissuto a una ferita da arma da fuoco che lasciò una <strong>fistola gastrica cutanea permanente</strong>.
              Beaumont introdusse pezzetti di cibo legati a un filo direttamente nello stomaco, osservando che la motilità,
              il colore della mucosa gastrica e la secrezione di succo acido variavano drasticamente{' '}
              <strong>in base allo stato emotivo del paziente (rabbia, paura, serenità)</strong>: fu la prima dimostrazione
              sperimentale diretta dell'asse cervello-intestino.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-purple-900 font-bold uppercase text-[11px]">Élie Metchnikoff & Nissle (1917)</strong>
              <span className="px-1.5 py-0.5 rounded bg-purple-200 text-purple-800 font-mono text-[10px]">Origine Probiotici</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Il premio Nobel Metchnikoff teorizzò che la longevità dei contadini bulgari dipendesse dal consumo abituale di{' '}
              <strong>latte fermentato ricco di lattobacilli</strong>, contrastando i batteri putrefattivi del colon. Nel 1917,
              durante la Prima Guerra Mondiale, Alfred Nissle isolò un ceppo non patogeno di <em>Escherichia coli</em> (ceppo Nissle 1917)
              da un soldato miracolosamente risparmiato da un'epidemia mortale di dissenteria, impiegandolo per trattare le infezioni enteriche.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-blue-900 font-bold uppercase text-[11px]">Il Salto di Paradigma: Bottom-Up</strong>
              <span className="px-1.5 py-0.5 rounded bg-blue-200 text-blue-800 font-mono text-[10px]">Neuro-Immunologia</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Se la fisiologia classica considerava quasi esclusivamente la via <em>top-down</em> (il cervello che controlla
              la motilità viscerale durante reazioni di attacco o fuga / <em>fight-or-flight</em> o l'ansia pre-esame che scatena diarrea),
              le evidenze molecolari del <strong>Human Microbiome Project (2007)</strong> e gli studi pionieristici del 2014 hanno
              stabilito che il flusso informativo dominante è <strong>bottom-up: dall'intestino al cervello</strong>, con un impatto
              decisivo su umore, neurogenesi, nocicezione e neurodegenerazione.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 25.2 */}
      <section id="sec-25-2" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">25.2</span> Tassonomia, Dimensioni Genomiche & Quadro Regolatorio
        </h2>
        <p>
          Nel contesto accademico e clinico è indispensabile distinguere con rigore i termini scientifici:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Microbiota:</strong> la totalità delle comunità microbiche viventi (batteri, virus, lieviti/funghi, archeobatteri e protozoi)
            che colonizzano le superfici epiteliali dell'organismo a contatto con l'ambiente esterno (tratto gastrointestinale, cute, vie respiratorie,
            apparato urogenitale). Il tratto gastrointestinale costituisce la nicchia più densamente popolata: ospita una biomassa di{' '}
            <strong>1–2 kg di microrganismi</strong>, paragonabile al peso dell'encefalo adulto, con un rapporto cellulare tra batteri e cellule
            umane approssimativamente pari a 1:1.
          </li>
          <li>
            <strong>Microbioma:</strong> l'insieme complessivo dei geni codificati dal microbiota. Mentre il genoma umano conta circa{' '}
            <strong>23.000 geni</strong>, il microbioma metagenomico intestinale esprime oltre <strong>1–2 milioni di geni unici</strong>{' '}
            (un patrimonio genetico funzionale 100 volte superiore), conferendo capacità metaboliche ed enzimatiche che l'organismo ospite
            non possiede.
          </li>
          <li>
            <strong>Olobionte (Holobiont):</strong> l'unità biologico-funzionale integrata costituita dall'organismo umano eucariotico insieme a
            tutti i suoi partner microbici simbiotici co-evoluti.
          </li>
          <li>
            <strong>Probiotici (Definizione FAO/OMS):</strong> microrganismi vivi che, somministrati in quantità adeguate, conferiscono un beneficio
            documentato alla salute dell'ospite.
          </li>
          <li>
            <strong>Prebiotici:</strong> substrati alimentari non digeribili (es. fibre solubili, inulina, frutto-oligosaccaridi FOS, galatto-oligosaccaridi GOS)
            selettivamente utilizzati dai microrganismi della flora intestinale a vantaggio dell'ospite.
          </li>
          <li>
            <strong>Psicobiotici:</strong> classe innovativa di probiotici e prebiotici che, mediante la secrezione di acidi grassi a catena corta,
            neurotrasmettitori (GABA, serotonina) e citochine antinfiammatorie (IL-10), riducono i livelli circolanti di corticosterone/cortisolo e IL-6,
            esercitando un'azione ansiolitica e antidepressiva dimostrata sia in modelli murini che in trial clinici.
          </li>
        </ul>

        {/* Regulatory Box */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-2">
          <strong className="text-slate-900 text-sm block">Quadro Regolatorio Internazionale dei Probiotici</strong>
          <p className="text-slate-700 leading-relaxed">
            Come illustrato dal Dott. Antonangeli, lo status giuridico dei probiotici differisce radicalmente a livello globale:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block font-bold text-xs">Unione Europea (EFSA)</strong>
              <p className="text-slate-600 mt-1">
                Regime fortemente restrittivo: i probiotici possono essere commercializzati esclusivamente come{' '}
                <strong>integratori alimentari</strong> (food supplements). Non è consentito riportare in etichetta indicazioni
                terapeutiche o di cura per patologie specifiche.
              </p>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block font-bold text-xs">Stati Uniti (FDA)</strong>
              <p className="text-slate-600 mt-1">
                Regolamentazione duale: coesistono ceppi commercializzati come integratori alimentari (senza claims preventivi) e preparazioni
                approvate dall'FDA con specifiche indicazioni cliniche basate su trial controllati.
              </p>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block font-bold text-xs">Giappone, Canada & Svizzera</strong>
              <p className="text-slate-600 mt-1">
                Legislazione permissiva e traslazionale: specifici ceppi batterici sono registrati come <strong>veri e propri farmaci di
                prescrizione medica</strong> (es. <em>Lactobacillus johnsonii</em> prescritto come coadiuvante terapeutico per l'eradicazione
                di <em>Helicobacter pylori</em>).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 25.3 */}
      <section id="sec-25-3" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">25.3</span> Composizione del Microbiota Umano: I Quattro Phyla Cardine
        </h2>
        <p>
          Il microbiota intestinale ospita oltre <strong>40.000 ceppi batterici</strong> appartenenti a circa 2.700 specie distinte.
          La quasi totalità della flora batterica del colon appartiene a quattro grandi phyla filogenetici:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4 font-sans text-xs">
          <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-1">
            <span className="text-[10px] font-mono text-blue-700 font-bold uppercase">60–80% della Popolazione</span>
            <strong className="text-slate-900 block font-bold text-sm">Firmicutes (Gram+)</strong>
            <p className="text-slate-600">
              Dal latino <em>firmus</em> (forte) per la parete spessa di peptidoglicano. Comprende <em>Lactobacillus</em>, <em>Clostridium</em>,{' '}
              <em>Enterococcus</em>, <em>Ruminococcus</em>. Sono i <strong>principali produttori di acido butirrico (butirrato)</strong>,
              combustibile essenziale per i colonociti e potente regolatore epigenetico delle cellule Treg.
            </p>
          </div>

          <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-1">
            <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase">15–30% della Popolazione</span>
            <strong className="text-slate-900 block font-bold text-sm">Bacteroidetes (Gram-)</strong>
            <p className="text-slate-600">
              Batteri anaerobi Gram-negativi dotati di LPS a bassa tossicità (es. <em>Bacteroides fragilis</em>, <em>Prevotella</em>).
              Specializzati nella degradazione di polisaccaridi complessi della dieta e delle mucine dell'ospite, sintetizzano propionato e acetato.
            </p>
          </div>

          <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-1">
            <span className="text-[10px] font-mono text-rose-700 font-bold uppercase">&lt; 5% della Popolazione</span>
            <strong className="text-slate-900 block font-bold text-sm">Proteobacteria (Gram-)</strong>
            <p className="text-slate-600">
              Dal dio greco Proteo (multiforme). Comprende commensali opportunisti (<em>Escherichia coli</em>) e patogeni franchi (<em>Salmonella</em>,{' '}
              <em>Vibrio cholerae</em>, <em>Helicobacter pylori</em>). Portatori di LPS infiammatorio con tendenza al trasferimento genico orizzontale
              di plasmidi di antibiotico-resistenza.
            </p>
          </div>

          <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-1">
            <span className="text-[10px] font-mono text-purple-700 font-bold uppercase">3–8% della Popolazione</span>
            <strong className="text-slate-900 block font-bold text-sm">Actinobacteria (Gram+)</strong>
            <p className="text-slate-600">
              Dominati dal genere <em>Bifidobacterium</em> (<em>B. infantis</em>, <em>B. bifidum</em>, <em>B. longum</em>).
              Predominanti nel neonato allattato al seno, fermentano gli oligosaccaridi del latte materno (HMO) producendo lattato e acetato,
              acidificando il lume e prevenendo la colonizzazione da enteropatogeni.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 25.4 */}
      <section id="sec-25-4" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">25.4</span> Fattori Modulatori Dinamici: Nascita, Nutrizione & Polimorfismi Genetici
        </h2>
        <p>
          Il microbiota non è un'entità statica ma un ecosistema plastico che subisce continue perturbazioni e rimodellamenti:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Modalità del Parto (Vaginale vs Cesareo):</strong> Durante il parto naturale, il nascituro transita nel canale vaginale
            venendo esposto alla microflora materna ricca di <em>Lactobacillus</em> e batteri fecali, che colonizzano rapidamente l'intestino.
            Nel parto cesareo, il neonato viene a contatto per primo con i batteri cutanei ambientali (<em>Staphylococcus</em>, <em>Corynebacterium</em>).
            Questa impronta ecologica persiste <strong>fino a circa 2 anni di vita</strong>: studi epidemiologici su vasta scala correlano
            il parto cesareo a un aumentato rischio di sviluppare asma, atopia, obesità e malattie autoimmuni nell'infanzia e adolescenza.
          </li>
          <li>
            <strong>Allattamento (Seno vs Artificiale):</strong> L'allattamento al seno fornisce oligosaccaridi HMO indigeribili per il lattante
            ma nutrimento esclusivo per <em>Bifidobacterium infantis</em>, promuovendo tolleranza immunitaria. Il latte artificiale seleziona
            invece popolazioni arricchite di <em>Clostridium</em> e streptococchi.
          </li>
          <li>
            <strong>La Dieta & La Chimica dei Carboidrati:</strong> I carboidrati polimerici con legame glicosidico <strong>α-1,4</strong>{' '}
            (come l'amido) sono scissi dalle amilasi umane nel tenue. I carboidrati complessi con legame <strong>β-1,4</strong>{' '}
            (come la cellulosa e le fibre alimentari non solubili) non possono essere digeriti dai nostri enzimi: giungono intatti nel colon cieco,
            dove vengono fermentati dai batteri anaerobi in acidi grassi a catena corta (SCFA).
          </li>
          <li>
            <strong>Attenzione ai FODMAPs nella Sindrome dell'Intestino Irritabile (IBS):</strong> Composti prebiotici come l'inulina (polimero
            del fruttosio) sono benefici per soggetti sani, ma rientrano nella categoria dei FODMAP (<em>Fermentable Oligosaccharides, Disaccharides,
            Monosaccharides and Polyols</em>). Nei pazienti con IBS o ipersensibilità viscerale, la loro rapida fermentazione batterica produce gas,
            distensione delle anse intestinali e stimolazione algica dolorosa. La nutrizione clinica deve essere personalizzata e non generalizzata.
          </li>
          <li>
            <strong>Genetica dell'Ospite:</strong> Studi su gemelli omozigoti ed eterozigoti dimostrano che i polimorfismi nei geni codificanti
            molecole MHC, recettori Toll-like (TLR) e NOD2 condizionano la persistenza di specifici ceppi batterici: anche modificando la dieta,
            l'assetto immunologico dell'ospite tende a riportare il microbiota verso il suo profilo genotipicamente predeterminato.
          </li>
        </ul>
      </section>

      {/* Chapter 25.5 */}
      <section id="sec-25-5" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">25.5</span> Modelli Sperimentali: Topi Germ-Free, Antibiotici Non Assorbibili & Metagenomica 16S
        </h2>
        <p>
          Per dimostrare il nesso di causa-effetto tra composizione microbiotica e funzioni del sistema nervoso centrale,
          la ricerca scientifica si è avvalsa di rigorosi modelli sperimentali:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4 font-sans text-xs">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
            <strong className="text-slate-900 block font-bold text-xs uppercase text-blue-700">Topi Germ-Free (GF)</strong>
            <p className="text-slate-700 leading-relaxed">
              Nati per taglio cesareo asettico e allevati in isolatori privi di qualsiasi microrganismo. Mostrano anomalie neurologiche
              e immunitarie macroscopiche: <strong>ridotta espressione di BDNF</strong> nell'ippocampo e amigdala (deficit di memoria spaziale),
              <strong>iper-permeabilità della barriera emato-encefalica (BBB)</strong> per mancata espressione di occludina e claudina-5,
              <strong>microglia immatura e atrofica</strong> con deficit di ramificazione, e un'iperreattività esagerata dell'asse dello stress HPA.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
            <strong className="text-slate-900 block font-bold text-xs uppercase text-emerald-700">Antibiotici Non Assorbibili</strong>
            <p className="text-slate-700 leading-relaxed">
              Somministrazione nell'acqua di bevanda di un cocktail di antibiotici (es. <strong>Vancomicina, Neomicina, Bacitracina</strong>)
              che non attraversano la mucosa intestinale e non passano nel sangue. Qualsiasi alterazione osservata a livello encefalico o comportamentale
              è la prova inconfutabile che il segnale è generato dalla perturbazione locale del microbiota e non dalla tossicità sistemica del farmaco.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
            <strong className="text-slate-900 block font-bold text-xs uppercase text-purple-700">Metagenomica 16S rRNA</strong>
            <p className="text-slate-700 leading-relaxed">
              Estrazione del DNA fecale e amplificazione della subunità 16S dell'RNA ribosomiale procariotico. Si distinguono due parametri cardine:
              l'<strong>α-diversity</strong> (la ricchezza e uniformità di specie all'interno dello stesso individuo) e la{' '}
              <strong>β-diversity</strong> (il grado di dissimilarità tassonomica tra campioni o coorti sottoposte a trattamenti diversi).
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 25.6: The 7 Communication Routes */}
      <section id="sec-25-6" className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">25.6</span> Le Sette Vie di Comunicazione dell'Asse Intestino-Cervello
        </h2>
        <p>
          Come sintetizzato nella lezione del Dott. Antonangeli, il microbiota esercita i suoi effetti neuro-immunologici
          attraverso <strong>sette vie distinte e interconnesse</strong>:
        </p>

        {/* SCHEMA DI PROCESSO INTERCALATO NELLA SPIEGAZIONE */}
        <InlineProcessFlowDiagram
          processId="gut_brain"
          title="Schema di Processo: Le Vie Cardine dell'Asse Intestino-Cervello"
          subtitle="Visione d'insieme integrata dei collegamenti tra vago, serotonina enterocromaffine, butirrato e neuroinfiammazione"
          defaultExpanded={true}
        />

        <div className="space-y-4 font-sans text-xs">
          {/* Route 1 */}
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-blue-900 text-sm font-bold">Via 1: Il Nervo Vago (La Via Elettrica Asimmetrica)</strong>
              <span className="px-2 py-0.5 rounded bg-blue-200 text-blue-800 font-mono text-[10px] font-bold">90% Afferente</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Il nervo vago (X paio di nervi cranici) rappresenta la connessione neurale diretta più rapida tra visceri ed encefalo.
              Dato anatomico fondamentale per lo studente di medicina: <strong>soltanto il 10% delle fibre vagali è efferente</strong>{' '}
              (motilità gastrica, secrezione biliare), mentre <strong>ben il 90% delle fibre è afferente sensitivo</strong>{' '}
              (informa costantemente il nucleo del tratto solitario e l'ipotalamo sullo stato chimico e immunitario dell'intestino).
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>Esperimento Cardine di Vagotomia:</strong> Topi nutriti per 14 giorni con il ceppo probiotico <em>Lactobacillus rhamnosus</em>{' '}
              mostrano un netto incremento dei recettori GABA nel cervello, accompagnato da una significativa riduzione dell'ansia e del comportamento
              di <em>grooming</em>. Se a questi topi viene eseguita una <strong>vagotomia sottodiaframmatica</strong> (sezione chirurgica del vago),{' '}
              <span className="text-blue-900 font-bold">tutti gli effetti ansiolitici e comportamentali del probiotico scompaiono istantaneamente</span>,
              dimostrando che il nervo vago è il conduttore elettrico obbligato del segnale microbiotico.
            </p>
          </div>

          {/* Route 2 */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-amber-900 text-sm font-bold">Via 2: Cellule Enteroendocrine & Enterocromaffini (La Serotonina)</strong>
              <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-800 font-mono text-[10px] font-bold">95% della Serotonina</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Le cellule enterocromaffini (EC) intercalate nell'epitelio della mucosa intestinale sono la principale centrale neuroendocrina
              del corpo: sintetizzano e rilasciano <strong>oltre il 95% della serotonina totale (5-HT) dell'organismo</strong>.
            </p>
            <p className="text-slate-700 leading-relaxed">
              La serotonina periferica non è in grado di attraversare la barriera emato-encefalica integra; tuttavia, regola la motilità
              propulsiva intestinale e si lega ai recettori <strong>5-HT3</strong> presenti sulle terminazioni del nervo vago, modulando
              la scarica sinaptica verso il tronco encefalico. L'enzima limitante della biosintesi, la <strong>Triptofano Idrossilasi-1 (TPH1)</strong>,
              è direttamente stimolato dagli acidi grassi a catena corta e dagli acidi biliari secondari prodotti dai batteri. Nei topi germ-free,
              la trascrizione di TPH1 crolla, determinando un accumulo anomalo di triptofano plasmatico e una riduzione drastica della serotonina.
            </p>
          </div>

          {/* Route 3 */}
          <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-purple-900 text-sm font-bold">Via 3: Sintesi Batterica Diretta di Neurotrasmettitori</strong>
              <span className="px-2 py-0.5 rounded bg-purple-200 text-purple-800 font-mono text-[10px] font-bold">Neurochimica Luminale</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Numerosi ceppi commensali sintetizzano de novo e rilasciano nel microambiente luminale neurotrasmettitori identici a quelli umani:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li><strong>GABA (Acido γ-amminobutirrico):</strong> neurotrasmettitore inibitorio primario, prodotto da <em>Lactobacillus</em>, <em>Bifidobacterium</em> e <em>Bacteroides</em>.</li>
              <li><strong>Dopamina & Noradrenalina:</strong> sintetizzate da ceppi di <em>Bacillus</em>, <em>Escherichia</em> e <em>Streptococcus</em>.</li>
              <li><strong>Istamina:</strong> sintetizzata da <em>Lactobacillus reuteri</em> tramite istidina decarbossilasi (HDC), regolando motilità e citochine.</li>
            </ul>
          </div>

          {/* Route 4 */}
          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-rose-900 text-sm font-bold">Via 4: L'Asse Ipotalamo-Ipofisi-Surrene (HPA) & Lo Stress Cronico</strong>
              <span className="px-2 py-0.5 rounded bg-rose-200 text-rose-800 font-mono text-[10px] font-bold">Corticosterone & CXCR4</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Lo stress psicogeno o metabolico percepito dall'amigdala attiva l'ipotalamo a rilasciare CRH, che induce ACTH ipofisario e secrezione
              di glucocorticoidi dal surrene (<strong>cortisolo</strong> nell'uomo, <strong>corticosterone</strong> nel topo).
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>Sequestro Linfocitario Midollare:</strong> Come evidenziato a lezione, il cortisolo sovraregola il recettore chemochinico{' '}
              <strong>CXCR4</strong> sui linfociti periferici; il ligando CXCL12 espresso nello stroma del midollo osseo richiama e intrappola i
              linfociti nel midollo, provocando <em>deplezione periferica e immunosoppressione cronica</em>. Inoltre, i glucocorticoidi aumentano
              la permeabilità delle tight junctions dell'epitelio intestinale, innescando un circolo vizioso in cui la disbiosi alimenta l'infiammazione sistemica.
            </p>
          </div>

          {/* Route 5 */}
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-emerald-900 text-sm font-bold">Via 5: Modulazione del Sistema Immunitario (70-80% delle Cellule Immunitarie)</strong>
              <span className="px-2 py-0.5 rounded bg-emerald-200 text-emerald-800 font-mono text-[10px] font-bold">Treg vs Th17 / Microglia</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Circa l'<strong>80% di tutti i linfociti e plasmacellule risiede nella mucosa gastrointestinale</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>
                <strong>In Eubiosi:</strong> I ceppi di <em>Clostridium</em> (cluster IV e XIVa) producono butirrato che, legandosi a GPR43/109A
                e inibendo le HDAC, promuove la differenziazione massiva di <strong>linfociti T regolatori (Treg Foxp3+)</strong> e il rilascio sistemico
                di <strong>IL-10 e TGF-β</strong>. Queste citochine antinfiammatorie proteggono la barriera emato-encefalica e mantengono la
                microglia in uno stato di sorveglianza quiescente non citotossica.
              </li>
              <li>
                <strong>In Disbiosi:</strong> I <strong>Batteri Filamentosi Segmentati (SFB)</strong> aderiscono all'epitelio ileale stimolando
                le DC a secernere IL-6 e IL-23, polarizzando una risposta infiammatoria mediata da <strong>linfociti Th17 e Th1</strong>. L'IL-17
                stimola gli endoteli a produrre IL-8 reclutando neutrofili; le citochine pro-infiammatorie circolanti (IL-1β, IL-6, TNF-α, IFN-γ)
                rompono le giunzioni serrate della BBB e attivano la <strong>microglia cerebrale</strong>, che assume un fenotipo M1 citotossico
                con rilascio di ossido nitrico e distruzione delle sinapsi neuronali.
              </li>
            </ul>
          </div>

          {/* Route 6 */}
          <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-indigo-900 text-sm font-bold">Via 6: Acidi Grassi a Catena Corta (SCFA: Butirrato, Propionato, Acetato)</strong>
              <span className="px-2 py-0.5 rounded bg-indigo-200 text-indigo-800 font-mono text-[10px] font-bold">Epigenetica & BDNF</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Gli SCFA derivano dalla fermentazione anaerobia delle fibre alimentari:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li><strong>Butirrato (C4):</strong> utilizzato dai colonociti come fonte energetica primaria; potente inibitore delle istone deacetilasi (HDAC), induce l'acetilazione del promotore di <em>FOXP3</em> nei linfociti T e stimola la sintesi di <strong>BDNF (Brain-Derived Neurotrophic Factor)</strong> nell'ippocampo.</li>
              <li><strong>Propionato (C3):</strong> captato dal fegato via vena porta, regola la gluconeogenesi e la secrezione di ormoni della sazietà (leptina, PYY).</li>
              <li><strong>Acetato (C2):</strong> è lo SCFA più abbondante in circolo sistemico; <strong>è l'unico che attraversa liberamente la barriera emato-encefalica</strong> raggiungendo concentrazioni millimolari nel liquido cefalorachidiano, dove funge da substrato per la sintesi di Acetil-CoA e la mielinizzazione.</li>
            </ul>
          </div>

          {/* Route 7 */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-slate-900 text-sm font-bold">Via 7: Vescicole Extracellulari Batteriche (Outer Membrane Vesicles - OMVs)</strong>
              <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-mono text-[10px] font-bold">Nanovettori Sistemici</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              I batteri Gram-negativi rilasciano nel lume intestinale nanovescicole bilipidiche (30–200 nm) contenenti proteine, frammenti di DNA,
              RNA e LPS. Queste vescicole possono attraversare l'epitelio intestinale integro, immettersi nel circolo ematico sistemico e raggiungere
              il distretto cerebrovascolare, fungendo da veicoli di segnalazione a lungo raggio per i recettori dell'immunità innata della microglia.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 25.7: Focus Traslazionale - Sclerosi Multipla e Glioma Sapienza */}
      <section id="sec-25-7" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">25.7</span> Focus Immunologico Sperimentale: Sclerosi Multipla & Glioma Cerebrale
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
          {/* EAE Study */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-blue-900 text-sm font-bold">Modello di Sclerosi Multipla (EAE)</strong>
              <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 font-mono text-[10px]">Autoimmunità SNC</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Nel modello murino di Encefalomielite Autoimmune Sperimentale (EAE, modello della Sclerosi Multipla umana),
              l'effetto del microbiota è stato testato in topi germ-free:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>
                La colonizzazione con <strong>Batteri Filamentosi Segmentati (SFB)</strong> stimola potentemente la risposta Th17 nel colon:
                i linfociti Th17 migrano attraverso la BBB nel sistema nervoso centrale, scatenando <strong>demielinizzazione massiva
                e paralisi severa degli arti posteriori</strong>.
              </li>
              <li>
                Al contrario, la colonizzazione con una miscela di <strong>Clostridi produttori di butirrato</strong> stimola l'espansione
                di linfociti Treg che secernono IL-10 sistemica, <strong>riducendo drasticamente lo score clinico e arrestando la progressione della malattia</strong>.
              </li>
            </ul>
          </div>

          {/* Sapienza Glioma Study */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-purple-900 text-sm font-bold">Studio Sapienza su Microbiota e Glioma del SNC</strong>
              <span className="px-1.5 py-0.5 rounded bg-purple-100 text-purple-800 font-mono text-[10px]">Onco-Immunologia</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Il Dott. Antonangeli ha presentato un importante studio sperimentale condotto presso l'Università Sapienza di Roma:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>
                Topi transgenici con glioma cerebrale trattati con un cocktail di antibiotici nell'acqua di bevanda sviluppano{' '}
                <strong>tumori di volume significativamente maggiore</strong> rispetto ai topi di controllo trattati con sola acqua.
              </li>
              <li>
                Il glioma è controllato nella fase iniziale dalle <strong>Cellule Natural Killer (NK)</strong> che esprimono il marcatore
                di degranulazione litica CD107a. Nei topi disbiotici trattati con antibiotici, la quantità totale di cellule NK resta invariata,
                ma scompare selettivamente la sottopopolazione a più alta attività citotossica: le <strong>cellule NK CD27⁺</strong>.
              </li>
              <li>
                <strong>Meccanismo Molecolare:</strong> La maturazione delle NK CD27⁺ dipende dall'<strong>interleuchina-15 (IL-15)</strong>{' '}
                che non è solubile, ma viene trans-presentata sulla membrana delle cellule dendritiche della lamina propria stimolate dagli antigeni
                del microbiota captati dalle cellule M.
              </li>
              <li>
                <strong>Reversibilità:</strong> La sospensione dell'antibiotico o l'esecuzione di un <strong>trapianto di microbiota fecale (FMT)</strong>{' '}
                ripristina la popolazione NK CD27⁺ citotossica e dimezza il volume tumorale cerebrale.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Chapter 25.8: The Tryptophan Metabolic Fork */}
      <section id="sec-25-8" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">25.8</span> Il Bivio Metabolico del Triptofano: Serotonina vs Via delle Chinurenine
        </h2>
        <p>
          Il triptofano, amminoacido essenziale introdotto con la dieta, rappresenta lo snodo biochimico cardinale
          dell'interazione tra infiammazione intestinale e funzione cerebrale:
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-white rounded-lg border border-emerald-200 space-y-1">
              <strong className="text-emerald-900 block font-bold text-xs">Ramo 1: Via della Serotonina & Melatonina (Omeostasi)</strong>
              <p className="text-slate-700 leading-relaxed">
                In condizioni di eubiosi fisiologica, il triptofano viene convertito in 5-HTP dall'enzima <strong>TPH1</strong> (nelle cellule
                enterocromaffini) e <strong>TPH2</strong> (nei neuroni serotoninergici del tronco encefalico), originando <strong>serotonina</strong>{' '}
                e successivamente <strong>melatonina</strong> (regolazione del ciclo sonno-veglia e neuroprotezione).
              </p>
            </div>

            <div className="p-3 bg-white rounded-lg border border-rose-200 space-y-1">
              <strong className="text-rose-900 block font-bold text-xs">Ramo 2: Via delle Chinurenine (Flogosi & Stress)</strong>
              <p className="text-slate-700 leading-relaxed">
                In presenza di citochine pro-infiammatorie (IFN-γ, IL-6) e ormoni dello stress (cortisolo), vengono attivati potentemente
                due enzimi extracerebrali: l'<strong>Indoleamina 2,3-diossigenasi (IDO1)</strong> nei macrofagi e cellule dendritiche, e il{' '}
                <strong>Triptofano 2,3-diossigenasi (TDO)</strong> negli epatociti. Il triptofano viene sottratto alla sintesi di serotonina e
                deviato verso la produzione di <strong>chinurenina</strong>.
              </p>
            </div>
          </div>

          <div className="p-3 bg-slate-900 text-white rounded-xl space-y-2 font-sans">
            <strong className="text-cyan-400 block text-xs font-mono uppercase tracking-wider">
              Il Conflitto Encefalico: Acido Chinolinico (Microglia) vs Acido Chinurenico (Astrociti)
            </strong>
            <p className="text-slate-300 text-xs leading-relaxed">
              La chinurenina plasmatica attraversa la barriera emato-encefalica tramite il trasportatore per amminoacidi neutri LAT1. All'interno
              del parenchima cerebrale, subisce due destini enzimatici diametralmente opposti:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded bg-slate-800 border border-rose-500/40">
                <span className="font-bold text-rose-400 block">Acido Chinolinico (Quinolinic Acid - QUIN):</span>
                <span className="text-slate-300">
                  Prodotto dalla <strong>microglia attivata</strong> via KMO/KYNU. È un potente <strong>agonista dei recettori NMDA del glutammato</strong>.
                  Provoca eccitotossicità, massiccio afflusso di calcio intracellulare, produzione di radicali liberi dell'ossigeno (ROS) e morte neuronale.
                  È il marker biologico della <strong>depressione maggiore resistente, psicosi e ideazione suicidaria</strong>.
                </span>
              </div>
              <div className="p-2.5 rounded bg-slate-800 border border-emerald-500/40">
                <span className="font-bold text-emerald-400 block">Acido Chinurenico (Kynurenic Acid - KYN):</span>
                <span className="text-slate-300">
                  Prodotto dagli <strong>astrociti</strong> via KAT. È un <strong>antagonista competitivo del recettore NMDA</strong> e recettore
                  dell'acetilcolina α7. Esercita un'azione <strong>neuroprotettiva</strong> bloccando l'eccitotossicità.
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-[11px] italic mt-1">
              La somministrazione di ceppi probiotici produttori di butirrato <strong>reprime l'espressione di IDO1</strong>, riducendo la sintesi
              di acido chinolinico e riequilibrando la trasmissione glutammatergica ed eliminando i comportamenti depressivi.
            </p>
          </div>
        </div>
      </section>

      {/* Simulator 1: Dynamic Gut-Brain Interactive Lab */}
      <section id="sim-gut-brain-axis-interactive" className="p-6 rounded-2xl bg-slate-900 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 font-mono text-[11px] font-bold uppercase tracking-wider">
              Laboratorio Interattivo 1
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white mt-1">
              Simulatore delle 7 Vie di Comunicazione Gut-Brain
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">Modello Neuro-Immune Dinamico</span>
        </div>

        {/* State Selection */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: 'eubiosis', label: 'Eubiosi Fisiologica', desc: 'Clostridi, butirrato, barriera integra' },
            { id: 'antibiotics', label: 'Disbiosi da Antibiotici', desc: 'Cocktail orale, deplezione NK CD27+' },
            { id: 'chronic_stress', label: 'Stress Cronico HPA', desc: 'Cortisolo elevato, sequestro CXCR4' },
            { id: 'neuroinflammation', label: 'Neuroinfiammazione Severa', desc: 'SFB, Th17, microglia M1 tossica' }
          ].map((st) => (
            <button
              key={st.id}
              onClick={() => setAxisState(st.id as any)}
              className={`p-2.5 rounded-xl border text-left transition-all text-xs ${
                axisState === st.id
                  ? 'bg-cyan-600/30 border-cyan-400 text-white shadow-md'
                  : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <div className="font-bold">{st.label}</div>
              <div className="text-[10px] text-slate-400 truncate">{st.desc}</div>
            </button>
          ))}
        </div>

        {/* Interactive Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
            <span className="text-slate-400 text-[10px] block">TONO VAGALE (AFFERENZE 90%)</span>
            <strong className="text-sm font-bold text-white block">
              {axisState === 'eubiosis'
                ? 'Normale (Attività Sinaptica Fisiologica)'
                : axisState === 'chronic_stress'
                ? 'Inibito da Simpatico'
                : 'Alterato da Citochine'}
            </strong>
            <span className="text-[10px] text-cyan-400">
              {axisState === 'eubiosis' ? 'Effetto ansiolitico attivo' : 'Perdita del freno parasimpatico'}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
            <span className="text-slate-400 text-[10px] block">PERMEABILITÀ BARRIERA (BBB)</span>
            <strong
              className={`text-sm font-bold block ${
                axisState === 'eubiosis' ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              {axisState === 'eubiosis'
                ? 'Integra (Claudina-5 / Occludina)'
                : 'Leaky BBB (Fuga di citochine ed amiloidi)'}
            </strong>
            <span className="text-[10px] text-slate-400">
              {axisState === 'eubiosis' ? 'SCFA stimolano tight-junctions' : 'Rottura indotta da IL-6/TNF'}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
            <span className="text-slate-400 text-[10px] block">STATO DELLA MICROGLIA</span>
            <strong
              className={`text-sm font-bold block ${
                axisState === 'eubiosis' ? 'text-emerald-400' : 'text-amber-400'
              }`}
            >
              {axisState === 'eubiosis'
                ? 'Sorveglianza Quiescente'
                : axisState === 'neuroinflammation'
                ? 'Citotossica (Acido Chinolinico)'
                : 'Morfologia Reattiva'}
            </strong>
            <span className="text-[10px] text-slate-400">
              {axisState === 'eubiosis' ? 'IL-10 e TGF-β protettivi' : 'Rilascio di ROS e neurotossine'}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
            <span className="text-slate-400 text-[10px] block">LIVELLI DI BDNF (IPPOCAMPO)</span>
            <strong
              className={`text-sm font-bold block ${
                axisState === 'eubiosis' ? 'text-cyan-400' : 'text-rose-400'
              }`}
            >
              {axisState === 'eubiosis' ? 'Elevati (Neurogenesi attiva)' : 'Depressi (-55%)'}
            </strong>
            <span className="text-[10px] text-slate-400">
              {axisState === 'eubiosis' ? 'Plasticità sinaptica e memoria' : 'Vulnerabilità ad ansia e atrofia'}
            </span>
          </div>
        </div>

        {/* Dynamic Context Card */}
        <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 font-sans text-xs text-slate-200 leading-relaxed">
          {axisState === 'eubiosis' && (
            <p className="m-0">
              <strong>Stato Omeostatico:</strong> I Firmicutes (clostridi) fermentano le fibre in <strong>butirrato</strong>, che agisce da
              inibitore delle HDAC stabilizzando i <strong>Treg nel colon</strong>. Viene secreta IL-10 sistemica, le cellule enterocromaffini
              sintetizzano serotonina via TPH1 stimolando le terminazioni afferenti del vago, e la barriera emato-encefalica mantiene tight
              junctions serrate impedendo la neuroinfiammazione.
            </p>
          )}
          {axisState === 'antibiotics' && (
            <p className="m-0">
              <strong>Effetto del Trattamento Antibiotico:</strong> L'uso di antibiotici non assorbibili azzera la diversità tassonomica (α-diversity).
              Viene compromessa la trans-presentazione di <strong>IL-15</strong> da parte delle cellule dendritiche intestinali: le cellule{' '}
              <strong>NK CD27⁺ citotossiche crollano</strong>, privando il sistema nervoso centrale della sorveglianza precoce antitumorale
              (come dimostrato nel modello murino di glioma dell'Università Sapienza).
            </p>
          )}
          {axisState === 'chronic_stress' && (
            <p className="m-0">
              <strong>Iperattivazione dell'Asse HPA:</strong> Lo stress cronico induce massiccio rilascio di corticosterone, che sovraregola{' '}
              <strong>CXCR4</strong> sui linfociti sequestrandoli nel midollo osseo. I glucocorticoidi attivano l'enzima epatico TDO, deviando il
              triptofano lontano dalla via della serotonina verso la via delle chinurenine, alimentando ansia e depressione.
            </p>
          )}
          {axisState === 'neuroinflammation' && (
            <p className="m-0">
              <strong>Flogosi Autoimmune:</strong> La proliferazione di batteri filamentosi segmentati (SFB) induce una tempesta di{' '}
              <strong>linfociti Th17 ed IL-17</strong>. Le giunzioni occludenti della BBB vengono distrutte: la <strong>microglia attivata</strong>{' '}
              produce acido chinolinico eccitotossico, scatenando demielinizzazione (modello EAE della sclerosi multipla) e degenerazione neuronale.
            </p>
          )}
        </div>
      </section>

      {/* Simulator 2: Tryptophan Metabolic Switch */}
      <section id="sim-tryptophan-kynurenine-switch" className="p-6 rounded-2xl bg-slate-900 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-400 font-mono text-[11px] font-bold uppercase tracking-wider">
              Laboratorio Interattivo 2
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white mt-1">
              Laboratorio del Bivio Metabolico del Triptofano (Serotonina vs Acido Chinolinico)
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">Enzimi IDO1 / TDO & Target NMDA</span>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans text-xs">
          <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-300 font-semibold">Tono Infiammatorio (IFN-γ, IL-6):</span>
              <span className="font-mono text-rose-400 font-bold">{inflammatoryTone}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={inflammatoryTone}
              onChange={(e) => setInflammatoryTone(Number(e.target.value))}
              className="w-full accent-rose-500 cursor-pointer"
            />
            <span className="text-[10px] text-slate-400 block">Induce fortemente l'enzima IDO1 nella microglia e APC</span>
          </div>

          <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-300 font-semibold">Stress / Cortisolo Sistemico:</span>
              <span className="font-mono text-amber-400 font-bold">{stressCortisol}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={stressCortisol}
              onChange={(e) => setStressCortisol(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <span className="text-[10px] text-slate-400 block">Induce l'enzima epatico TDO deviando il triptofano</span>
          </div>

          <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-300 font-semibold">Livello di Butirrato (SCFA):</span>
              <span className="font-mono text-emerald-400 font-bold">{butyrateLevel}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={butyrateLevel}
              onChange={(e) => setButyrateLevel(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <span className="text-[10px] text-slate-400 block">Inibisce IDO1 e stimola TPH1 per la sintesi di serotonina</span>
          </div>
        </div>

        {/* Real-Time Outcome Gauges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-700">
            <span className="text-slate-400 text-[10px] block">ATTIVITÀ ENZIMI IDO1 / TDO</span>
            <strong className="text-base font-bold text-amber-400 block mt-1">{idoActivity}%</strong>
            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-amber-400 h-full transition-all duration-200" style={{ width: `${idoActivity}%` }} />
            </div>
          </div>

          <div className="p-3 bg-slate-900 rounded-xl border border-slate-700">
            <span className="text-slate-400 text-[10px] block">SINTESI SEROTONINA (TPH1/2)</span>
            <strong className="text-base font-bold text-emerald-400 block mt-1">{serotoninProduction}%</strong>
            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-emerald-400 h-full transition-all duration-200" style={{ width: `${serotoninProduction}%` }} />
            </div>
          </div>

          <div className="p-3 bg-slate-900 rounded-xl border border-slate-700">
            <span className="text-slate-400 text-[10px] block">ACIDO CHINOLINICO (MICROGLIA)</span>
            <strong className="text-base font-bold text-rose-400 block mt-1">{quinolinicAcidMicroglia}% (Agonista NMDA)</strong>
            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-rose-500 h-full transition-all duration-200" style={{ width: `${quinolinicAcidMicroglia}%` }} />
            </div>
          </div>

          <div className="p-3 bg-slate-900 rounded-xl border border-slate-700">
            <span className="text-slate-400 text-[10px] block">INDICE DI NEUROTOSSICITÀ SNC</span>
            <strong
              className={`text-base font-bold block mt-1 ${
                neurotoxicityIndex > 50 ? 'text-rose-400' : 'text-emerald-400'
              }`}
            >
              {neurotoxicityIndex > 50 ? `${neurotoxicityIndex}% (Elevato - Danno)` : `${neurotoxicityIndex}% (Basso - Protetto)`}
            </strong>
            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className={`h-full transition-all duration-200 ${
                  neurotoxicityIndex > 50 ? 'bg-rose-500' : 'bg-emerald-400'
                }`}
                style={{ width: `${neurotoxicityIndex}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 25.9 & 25.10: Clinical Correlations */}
      <section id="sec-25-9" className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">25.9</span> Implicazioni Cliniche: Neurodegenerazione, Nocicezione & Neurosviluppo
        </h2>

        <div className="space-y-4 font-sans text-xs">
          {/* Parkinson */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-slate-900 text-sm font-bold">1. Morbo di Parkinson: I Prodromi Intestinali di 10–15 Anni</strong>
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono text-[10px] font-bold">Ipotesi di Braak</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              La perdita dei neuroni dopaminergici nella <em>substantia nigra pars compacta</em> è preceduta da <strong>10–15 anni di alterazioni
              gastrointestinali croniche</strong> (stitichezza ostinata, rallentamento del transito e infiammazione mucosale).
            </p>
            <p className="text-slate-700 leading-relaxed">
              Nelle feci dei pazienti parkinsoniani si riscontrano elevati livelli di <strong>calprotectina</strong> (rilasciata dai neutrofili
              infiltranti la mucosa) e <strong>zonulina</strong> (marcatore di rottura delle giunzioni serrate). Inoltre, l'abbondanza relativa
              di ceppi della famiglia <em>Enterobacteriaceae</em> correla direttamente con la severità dell'instabilità posturale e dei disturbi
              della deambulazione.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>L'Ipotesi Neuropatologica di Braak:</strong> Il misfolding e l'aggregazione patologica dell'<strong>α-sinucleina</strong>{' '}
              ha origine nel plesso mienterico sottomucoso enterico dell'intestino, favorita da disbiosi e LPS batterico. Da qui, i prioni di
              α-sinucleina risalgono retrogradamente lungo le <strong>fibre afferenti del nervo vago</strong> fino al nucleo motore dorsale
              del vago nel tronco encefalico, propagandosi poi alle strutture dopaminergiche centrali.
            </p>
          </div>

          {/* Alzheimer */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-slate-900 text-sm font-bold">2. Malattia di Alzheimer: L'Ipotesi Infettiva della β-Amiloide</strong>
              <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-mono text-[10px] font-bold">Peptide Antimicrobico</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Studi recenti hanno rivoluzionato la comprensione della proteina <strong>β-amiloide (Aβ)</strong>: non è un mero detrito
              metabolico aberrante, ma possiede intrinseche <strong>proprietà antimicrobiche fisiologiche</strong> deputate a intrappolare virus
              latenti riattivati (es. Herpes Simplex HSV-1) e batteri. In condizioni fisiologiche, le placche transitorie vengono prontamente
              fagocitate e smaltite dalla microglia.
            </p>
            <p className="text-slate-700 leading-relaxed">
              In caso di disbiosi cronica e aumentata permeabilità intestinale, amiloidi batteriche e LPS passano in circolo, superano la BBB
              danneggiata e scatenano un'<strong>iperattivazione cronica della microglia</strong>. La microglia esausta perde la capacità fagocitaria
              e riversa enzimi litici, innescando l'accumulo irreversibile di placche senili insolubili, l'iperfosforilazione della proteina Tau e
              la perdita sinaptica. Il <strong>butirrato</strong> esercita un potente ruolo neuroprotettivo riducendo l'iperfosforilazione di Tau.
            </p>
          </div>

          {/* Autism ASD */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-slate-900 text-sm font-bold">3. Disturbi dello Spettro Autistico (ASD)</strong>
              <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-mono text-[10px] font-bold">Permeabilità & Microglia</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Una percentuale elevatissima di bambini con diagnosi di ASD presenta gravi sintomi gastrointestinali correlati a disbiosi severa.
              È stato documentato che trattamenti selettivi con antibiotici (es. vancomicina per eradicare clostridi patogeni) o supplementazioni
              con specifici ceppi probiotici rinforzano la barriera intestinale, attenuano l'iperinfiammazione microgliale e migliorano transitoriamente
              i punteggi comportamentali e le interazioni sociali mediate da <strong>ossitocina</strong>.
            </p>
          </div>

          {/* Pain, Migraine & Obesity */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-slate-900 text-sm font-bold">4. Nocicezione, Emicrania & Obesità come Flogosi di Basso Grado</strong>
              <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-mono text-[10px] font-bold">Fibre C & Aδ / Adipochine</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              <strong>Nocicezione & Emicrania:</strong> Il 70% dei pazienti con emicrania cronica presenta comorbilità gastrointestinali.
              La neuroinfiammazione sistemica sensibilizza i nocicettori periferici (fibre C e Aδ) nel midollo spinale mediante sovraespressione
              di recettori del glutammato. In eubiosi, la produzione batterica di GABA e serotonina contrasta la sensibilizzazione centrale al dolore;
              abbassando l'infiammazione intestinale si rende il paziente oncologico più tollerante alle chemioterapie.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>L'Asse Obesità-Infiammazione:</strong> Come ricordato dal docente, nella <em>Drosophila</em> le funzioni del tessuto adiposo,
              del fegato e del sistema immunitario sono svolte da un unico organo comune (i corpi grassi / <em>fat body</em>). Anche nell'uomo,
              i linfonodi sono anatomicamente immersi in cuscinetti di tessuto adiposo perinodale. L'eccesso lipidico induce disbiosi, secrezione
              di leptina e citochine pro-infiammatorie, alimentando uno stato di <strong>infiammazione cronica di basso grado</strong> che accelera
              la neurodegenerazione.
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Academic Tables */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-150 pb-2">
          <span className="text-blue-600">25.10</span> Tabelle Sinottiche Avanzate di Studio
        </h2>

        {/* Table 1 */}
        <div id="tabella-25-1" className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase">
              Tabella 25.1 — Le Sette Vie di Comunicazione Neuro-Immune dell'Asse Gut-Brain
            </span>
          </div>
          <div className="overflow-x-auto font-sans text-xs">
            <table className="w-full border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  <th className="border border-slate-200 p-2 text-left">Via di Comunicazione</th>
                  <th className="border border-slate-200 p-2 text-left">Mediatori Chiave</th>
                  <th className="border border-slate-200 p-2 text-left">Sorgente & Bersaglio</th>
                  <th className="border border-slate-200 p-2 text-left">Effetto Fisiologico / Fisiopatologico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-2 font-bold text-slate-900">1. Nervo Vago (X paio)</td>
                  <td className="p-2 font-mono">Potenziali d'azione, recettori 5-HT3</td>
                  <td className="p-2">90% fibre afferenti: intestino → nucleo tratto solitario</td>
                  <td className="p-2">Trasmissione rapida degli stimoli microbiotici; effetto ansiolitico abolito da vagotomia</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">2. Cellule Enteroendocrine</td>
                  <td className="p-2 font-mono">Serotonina (5-HT), PYY, GLP-1, CKK</td>
                  <td className="p-2">Cellule enterocromaffini (95% della 5-HT totale)</td>
                  <td className="p-2">Regolazione motilità, sinapsi vagali afferenti, modulazione dell'appetito e sazietà</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">3. Neurotrasmettitori Batterici</td>
                  <td className="p-2 font-mono">GABA, Dopamina, Noradrenalina, Istamina</td>
                  <td className="p-2"><em>Lactobacillus</em>, <em>Bifidobacterium</em>, <em>Bacillus</em></td>
                  <td className="p-2">Azione paracrina sui neuroni del sistema nervoso enterico (ENS) e terminazioni sensitive</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">4. Asse HPA & Stress</td>
                  <td className="p-2 font-mono">CRH → ACTH → Cortisolo / Corticosterone</td>
                  <td className="p-2">Ipotalamo-Ipofisi → Ghiandola Surrenale → Midollo</td>
                  <td className="p-2">Sovraregolazione di CXCR4 sui linfociti con sequestro midollare; alterata permeabilità intestinale</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">5. Rete Immunitaria Intestinale</td>
                  <td className="p-2 font-mono">IL-10, TGF-β vs IL-17, IL-23, IFN-γ</td>
                  <td className="p-2">80% dei linfociti: Treg (Clostridi) vs Th17 (SFB)</td>
                  <td className="p-2">Omeostasi della barriera encefalica vs rottura della BBB e attivazione microgliale M1</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">6. Acidi Grassi a Catena Corta</td>
                  <td className="p-2 font-mono">Butirrato, Propionato, Acetato (C2-C4)</td>
                  <td className="p-2">Fermentazione di fibre; recettori FFAR2/3 (GPR41/43)</td>
                  <td className="p-2">Inibizione delle HDAC, induzione epigenetica di FOXP3 e BDNF; acetato permea nel liquor</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">7. Vescicole Batteriche (OMVs)</td>
                  <td className="p-2 font-mono">Nanovescicole bilipidiche, LPS, DNA/RNA</td>
                  <td className="p-2">Batteri Gram-negativi → circolo sistemico → BBB</td>
                  <td className="p-2">Segnalazione a lungo raggio per i recettori PRR dell'endotelio cerebrale e microglia</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2 */}
        <div id="tabella-25-2" className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase">
              Tabella 25.2 — Quadro Clinico-Patologico delle Malattie Neurodegenerative & Oncologiche
            </span>
          </div>
          <div className="overflow-x-auto font-sans text-xs">
            <table className="w-full border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  <th className="border border-slate-200 p-2 text-left">Patologia</th>
                  <th className="border border-slate-200 p-2 text-left">Alterazione Microbiotica / Intestinale</th>
                  <th className="border border-slate-200 p-2 text-left">Meccanismo Molecolare Neuro-Immune</th>
                  <th className="border border-slate-200 p-2 text-left">Impatto Clinico & Terapeutico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-2 font-bold text-slate-900">Morbo di Parkinson</td>
                  <td className="p-2">Aumento <em>Enterobacteriaceae</em>; calprotectina e zonulina fecali elevate</td>
                  <td className="p-2">Aggregazione di α-sinucleina nell'ENS e risalita retrograda lungo il nervo vago</td>
                  <td className="p-2">Stitichezza e infiammazione precedono di 10–15 anni i sintomi motori; correlazione con instabilità</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Malattia di Alzheimer</td>
                  <td className="p-2">Disbiosi pro-infiammatoria, crollo batteri produttori di butirrato</td>
                  <td className="p-2">β-amiloide antimicrobica forma placche non rimosse da microglia senescente; Tau iperfosforilata</td>
                  <td className="p-2">Il butirrato riduce la deposizione delle placche e la fosforilazione di Tau, migliorando la cognizione</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Sclerosi Multipla (EAE)</td>
                  <td className="p-2">Colonizzazione da batteri filamentosi segmentati (SFB)</td>
                  <td className="p-2">Iperpolarizzazione Th17 nel colon con migrazione nel SNC e distruzione della guaina mielinica</td>
                  <td className="p-2">La ricolonizzazione con Clostridi produttori di butirrato induce Treg e attenua la gravità dell'EAE</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Glioma Cerebrale (Studio Sapienza)</td>
                  <td className="p-2">Disbiosi indotta da antibiotici non assorbibili</td>
                  <td className="p-2">Mancata trans-presentazione di IL-15 da DC intestinali → deplezione di <strong>cellule NK CD27⁺ citotossiche</strong></td>
                  <td className="p-2">I tumori crescono significativamente di più; il trapianto fecale ripristina le NK CD27⁺ e riduce il tumore</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-900">Depressione & Ansia</td>
                  <td className="p-2">60% comorbilità gastrointestinale; crollo diversità tassonomica</td>
                  <td className="p-2">Iperattivazione IDO1 da IFN-γ/IL-6 → acido chinolinico eccitotossico su recettori NMDA</td>
                  <td className="p-2">Gli psicobiotici riducono corticosterone e IL-6, normalizzando il metabolismo del triptofano</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_QUESTIONS} lessonNumber={25} title="Verifica dell'Apprendimento · Lezione 25" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS} lessonNumber={25} title="Flashcard di Ripasso Attivo · Lezione 25" />
    </article>
  );
};
