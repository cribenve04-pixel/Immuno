import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import { ConceptMapFlow } from './ConceptMapFlow';
import { MAP_LEZIONE_18_MAB_EVOLUTION, MAP_LEZIONE_18_CAR_T_AND_ADC } from '../data/conceptMapsData';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Activity,
  Layers,
  Microscope,
  Dna,
  RotateCcw,
  Sparkles,
  Zap,
  Bookmark,
  Target,
  GitBranch,
  Flame,
  Droplets,
  AlertTriangle,
  FileText,
  Check,
  CheckCircle,
  Crosshair,
  Sliders,
  Scissors,
  Syringe,
  Radio,
  Award,
  Atom,
  HeartPulse
} from 'lucide-react';

interface Lezione18ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione18View: React.FC<Lezione18ViewProps> = ({ isSerif, fontSize }) => {
  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // ==========================================
  // STATO SIMULATORE 1: INGEGNERIA MOLECOLARE mAb
  // ==========================================
  type FormatType = 'murine' | 'chimeric' | 'humanized' | 'human' | 'bite' | 'adc';
  type FcEngineering = 'wt' | 'afucosylated' | 'yte_mutation' | 'igg4_silenced';
  type PayloadChoice = 'none' | 'tubulin_inhibitor' | 'lutetium177' | 'scfv_cd3';

  const [mabFormat, setMabFormat] = useState<FormatType>('humanized');
  const [fcEngineering, setFcEngineering] = useState<FcEngineering>('wt');
  const [payloadChoice, setPayloadChoice] = useState<PayloadChoice>('none');

  // Calcolo dinamico delle proprietà farmacologiche
  let suffixName = '-zumab (es. Trastuzumab)';
  let immunogenicityRisk = 'Basso (&lt; 5-10% anticorpi anti-farmaco ADA)';
  let halfLifeStr = '21 giorni (standard)';
  let primaryMechanism = 'Neutralizzazione & ADCC mediata da CD16a';
  let clinicalIndication = 'Oncologia solida ed ematologica, Malattie infettive';
  let badgeColor = 'bg-blue-50 text-blue-900 border-blue-300';

  if (mabFormat === 'murine') {
    suffixName = '-omab (100% sequenza murina)';
    immunogenicityRisk = 'ALTISSIMO (Sviluppo di anticorpi HAMA - Human Anti-Mouse Antibodies in oltre il 70% dei casi, rapida neutralizzazione ed emivita di sole 24-48 ore)';
    halfLifeStr = '1 - 2 giorni (scarso legame a FcRn umano endoteliale)';
    primaryMechanism = 'Uso diagnostico in vitro (immunofenotipo, citometria) o radioimmunoterapia di precisione loco-regionale';
    clinicalIndication = 'Reagenti diagnostici di laboratorio; solo rari usi in vivo con scarso successo clinico';
    badgeColor = 'bg-rose-50 text-rose-950 border-rose-300';
  } else if (mabFormat === 'chimeric') {
    suffixName = '-ximab (es. Rituximab, Cetuximab; 65% umano, 34% murino)';
    immunogenicityRisk = 'Moderato (~ 15-20% anticorpi HACA - Human Anti-Chimeric Antibodies)';
    halfLifeStr = '10 - 14 giorni';
    primaryMechanism = 'ADCC potenziata, citotossicità complemento-dipendente (CDC) ed opsonofagocitosi';
    clinicalIndication = 'Linfomi B non-Hodgkin, Leucemia Linfatica Cronica (LLC), Carcinoma del colon';
    badgeColor = 'bg-amber-50 text-amber-950 border-amber-300';
  } else if (mabFormat === 'humanized') {
    suffixName = '-zumab (es. Trastuzumab, Pertuzumab; >90% umano, solo le CDR sono murine)';
    immunogenicityRisk = 'Basso (minima insorgenza di anticorpi anti-idiotipo HAHA)';
    halfLifeStr = '21 giorni (ottimale interazione con FcRn)';
    primaryMechanism = 'Inibizione della dimerizzazione recettoriale (es. HER2), ADCC e clearance macrofagica';
    clinicalIndication = 'Carcinoma mammario HER2-positivo, Malattie autoimmuni sistemiche';
    badgeColor = 'bg-indigo-50 text-indigo-950 border-indigo-300';
  } else if (mabFormat === 'human') {
    suffixName = '-umab (es. Panitumumab, Nivolumab; 100% umano da topi transgenici Xenomouse)';
    immunogenicityRisk = 'Minimo / Fisiologico (&lt; 2-3%)';
    halfLifeStr = '21 - 28 giorni';
    primaryMechanism = 'Massima biocompatibilità, neutralizzazione e checkpoint blockade';
    clinicalIndication = 'Oncologia avanzata, Immunoterapia dei tumori, Malattie metaboliche (PCSK9)';
    badgeColor = 'bg-emerald-50 text-emerald-950 border-emerald-300';
  } else if (mabFormat === 'bite') {
    suffixName = 'BiTE (Bispecific T-cell Engager, fusione tandem di 2 scFv: anti-CD3 + anti-Tumore)';
    immunogenicityRisk = 'Moderato / Basso (privo di Fc, molecola sintetica di ~55 kDa)';
    halfLifeStr = 'BREVISSIMA: 2 - 4 ore! (Non lega FcRn per assenza di Fc e viene filtrato dal glomerulo renale; richiede infusione continua)';
    primaryMechanism = 'Formazione di una sinapsi citotossica artificiale antigene-indipendente tra linfocita T CD8+ (CD3) e cellula tumorale &rarr; degranulazione di perforina e granzimi';
    clinicalIndication = 'Blinatumomab (anti-CD19 / anti-CD3) nella Leucemia Linfoblastica Acuta (ALL)';
    badgeColor = 'bg-purple-50 text-purple-950 border-purple-300';
  } else if (mabFormat === 'adc') {
    suffixName = 'ADC (Antibody-Drug Conjugate: mAb carrier + Linker clivabile + Payload citotossico)';
    immunogenicityRisk = 'Basso per la componente mAb; tossicità sistemica controllata dal linker chimico';
    halfLifeStr = '14 - 18 giorni (guidato dall\'anticorpo veicolante)';
    primaryMechanism = 'Targeting specifico &rarr; Internalizzazione endocitica &rarr; Clivaggio lisosomiale del linker &rarr; Rilascio intracellulare concentrato della tossina (blocco microtubuli o DNA)';
    clinicalIndication = 'Trastuzumab Emtansine (T-DM1), Trastuzumab Deruxtecan (T-DXd), Brentuximab Vedotin (anti-CD30)';
    badgeColor = 'bg-teal-50 text-teal-950 border-teal-300';
  }

  // Modulazione Fc
  if (fcEngineering === 'afucosylated' && mabFormat !== 'bite') {
    primaryMechanism += ' + IPER-ADCC (Affinità per CD16a sulle cellule NK incrementata di 50-100 volte per rimozione del core-fucosio da Asn297; prototipo: Obinutuzumab anti-CD20)';
  } else if (fcEngineering === 'yte_mutation' && mabFormat !== 'bite') {
    halfLifeStr = 'ECCEZIONALE: 6 MESI (180 giorni!) grazie alla tripla mutazione M252Y/S254T/T256E nel dominio CH2 che massimizza il riciclo endoteliale via FcRn; prototipo: Nirsevimab anti-RSV per neonati)';
  } else if (fcEngineering === 'igg4_silenced' && mabFormat !== 'bite') {
    primaryMechanism = 'PURA NEUTRALIZZAZIONE / BLOCCO RECETTORIALE (Sottoclasse IgG4 o mutazioni LALA: abolita l\'attivazione del complemento e l\'ADCC; prototipo: Pembrolizumab/Nivolumab anti-PD-1)';
  }

  // Modulazione Payload
  if (payloadChoice === 'tubulin_inhibitor') {
    primaryMechanism += ' + Distruzione letale del fuso mitotico (MMAE/DM1) con arresto in mitosi e apoptosi cellulare.';
  } else if (payloadChoice === 'lutetium177') {
    primaryMechanism += ' + Radioimmunoterapia con emissione beta per necrosi tumorale ed effetto crossfire sulle cellule adiacenti + imaging diagnostico SPECT (Medicina Teranostica).';
  } else if (payloadChoice === 'scfv_cd3') {
    primaryMechanism += ' + Reclutamento forzato di linfociti T citotossici per lisi della massa tumorale.';
  }

  // ==========================================
  // STATO SIMULATORE 2: LABORATORIO CLINICO CAR-T
  // ==========================================
  type CarGeneration = 'gen1' | 'gen2_41bb' | 'gen2_cd28' | 'gen3_dual' | 'gen4_suicide';
  type TargetTumor = 'all_cd19' | 'myeloma_bcma' | 'breast_her2_solid';

  const [carGen, setCarGen] = useState<CarGeneration>('gen2_41bb');
  const [targetTumor, setTargetTumor] = useState<TargetTumor>('all_cd19');
  const [tumorBurden, setTumorBurden] = useState<'low' | 'medium' | 'high'>('high');
  const [appliedTherapy, setAppliedTherapy] = useState<string>('none');

  useEffect(() => {
    setAppliedTherapy('none');
  }, [carGen, targetTumor, tumorBurden]);

  // Calcolo delle complicanze CRS / ICANS in base al carico tumorale e costimolazione
  let crsGrade = 'Grado 1: Febbre isolata (&ge;38°C), brividi, cefalea';
  let il6Level = 'Moderatamente aumentata (100 - 300 pg/mL)';
  let onTargetOffTumorRisk = 'Minimo: l\'aplasia delle cellule B sane è accettabile e trattabile con infusione di IVIG';
  let persistenceProfile = 'Buona persistenza a lungo termine (mesi/anni, tipica del dominio 4-1BB/CD137)';

  if (carGen === 'gen1') {
    persistenceProfile = 'Scarsa / Incompleta: i linfociti T privi di costimolazione vanno rapidamente incontro ad anergia o apoptosi in vivo';
  } else if (carGen === 'gen2_cd28') {
    persistenceProfile = 'Rapida espansione esplosiva iniziale ma ridotta persistenza a lungo termine rispetto a 4-1BB; rischio più precoce di esaurimento cellulare (exhaustion)';
  } else if (carGen === 'gen3_dual') {
    persistenceProfile = 'Potenza citotossica massiva con doppi segnali di sopravvivenza (CD28 + 4-1BB)';
  } else if (carGen === 'gen4_suicide') {
    persistenceProfile = 'Dotata di gene suicidio inducibile (es. iCasp9 attivato da rimiducid o marker recettoriale legato da tamoxifene) per spegnimento d\'emergenza!';
  }

  if (targetTumor === 'breast_her2_solid') {
    onTargetOffTumorRisk = 'GRAVE CRITICITÀ (On-Target Off-Tumor): L\'antigene HER2 è un antigene condiviso ("shared antigen"), espresso a bassi livelli anche sull\'epitelio delle vie biliari e cardiomiociti. Rischio di colangite tossica letale!';
  } else if (targetTumor === 'myeloma_bcma') {
    onTargetOffTumorRisk = 'Targeting selettivo su BCMA (B-Cell Maturation Antigen) espresso solo da plasmacellule sane e mielomatose; ipogammaglobulinemia secondaria.';
  }

  if (tumorBurden === 'high') {
    crsGrade = 'Grado 3 - 4 SEVERO: Ipotensione refrattaria richiedente vasopressori ad alte dosi, ipossiemia severa (FiO2 >40%), edema polmonare e neurotossicità ICANS (afasia, convulsioni, confusione mentale)';
    il6Level = 'CRITICA (> 5000 - 10000 pg/mL) &rarr; Cytokine Release Syndrome fulminante mediata da macrofagi iper-attivati';
  } else if (tumorBurden === 'medium') {
    crsGrade = 'Grado 2: Febbre persistente associata a ipotensione responsiva ai liquidi o ipossia lieve trattabile con cannule nasali';
    il6Level = 'Elevata (500 - 1500 pg/mL)';
  }

  // ==========================================
  // STATO FLASHCARDS ATTIVE (6 QUESITI)
  // ==========================================
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const toggleCard = (index: number) => {
    setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const flashcards = [
    {
      question: 'Qual è il principio biologico della selezione clonale in terreno HAT nella tecnica degli ibridomi di Köhler e Milstein?',
      answer: 'Le cellule di mieloma sono mutanti difettive per l\'enzima HGPRT. Il terreno HAT contiene aminopterina (che blocca la sintesi de novo dei nucleotidi) e ipoxantina/timidina (per la via di salvataggio). Le plasmacellule normali apportano l\'enzima HGPRT funzionale ma muoiono spontaneamente dopo 10 giorni in vitro; le cellule di mieloma non fuso muoiono perché non hanno HGPRT; sopravvivono e proliferano unicamente gli IBRIDOMI fusi.'
    },
    {
      question: 'Qual è il significato della nomenclatura sistematica dei suffissi anticorpali (-omab, -ximab, -zumab, -umab)?',
      answer: '-omab indica anticorpi interamente murini (topo); -ximab indica anticorpi chimerici (regioni variabili Fab murine, regioni costanti umane, es. Rituximab); -zumab indica anticorpi umanizzati (soltanto le anse ipervariabili CDR sono murine, >90% umano, es. Trastuzumab); -umab indica anticorpi al 100% interamente umani generati in topi transgenici (es. Panitumumab, Nivolumab).'
    },
    {
      question: 'Come agisce Trastuzumab (anti-HER2) e perché Pertuzumab viene spesso somministrato in combinazione?',
      answer: 'HER2 è un recettore tirosin-chinasico della famiglia EGFR privo di un proprio ligando, che induce proliferazione quando eterodimerizza con HER1, HER3 o HER4. Trastuzumab lega il dominio extracellulare IV bloccandone l\'attivazione costitutiva e promuovendo l\'ADCC. Pertuzumab lega un epitopo differente (dominio II) impedendo fisicamente la dimerizzazione con HER3. La combinazione esercita un doppio blocco sinergico.'
    },
    {
      question: 'Cosa prevede la mutazione YTE e quale farmaco l\'ha sfruttata per raggiungere 6 mesi di emivita nei neonati contro RSV?',
      answer: 'La mutazione YTE consiste nella sostituzione di tre amminoacidi (Met252Tyr, Ser254Thr, Thr256Glu) nel dominio CH2 delle IgG. Questo decuplica l\'affinità per il recettore FcRn a pH acido endosomiale (<6.5) massimizzando il riciclo cellulare. È stata implementata in Nirsevimab (anti-RSV), consentendo a una singola iniezione intramuscolo di proteggere i neonati prematuri per un\'intera stagione epidemica (emivita di 180 giorni).'
    },
    {
      question: 'Qual è l\'architettura molecolare di un BiTE (Bispecific T-cell Engager) e perché la sua emivita è di sole 2-4 ore?',
      answer: 'Un BiTE è costituito da due frammenti a singola catena (scFv: VH+VL uniti da peptide linker) fusi in tandem: uno lega un antigene tumorale (es. CD19) e l\'altro il CD3 dei linfociti T citotossici. Essendo privo del frammento Fc, ha un basso peso molecolare (~55 kDa) che ne determina la rapida filtrazione glomerulare e l\'incapacità di legarsi a FcRn, riducendo l\'emivita a 2-4 ore e imponendo infusione venosa continua.'
    },
    {
      question: 'Qual è il meccanismo patogenetico della Cytokine Release Syndrome (CRS) nelle CAR-T e quale farmaco biologico è salvavita?',
      answer: 'La distruzione massiva delle cellule tumorali da parte dei linfociti CAR-T attiva in modo incontrollato i macrofagi dell\'immunità innata, che rilasciano cascate tempestose di IL-6, IL-1 e TNF-α causando febbre elevata, ipotensione da shock vasodilatatorio, edema polmonare e neurotossicità (ICANS). Il farmaco salvavita di prima scelta è Tocilizumab, anticorpo monoclonale antagonista del recettore dell\'IL-6 (IL-6R).'
    }
  ];

  // ==========================================
  // STATO QUIZ ACCADEMICO (10 QUESITI ESAME)
  // ==========================================
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showQuizResults, setShowQuizResults] = useState<boolean>(false);

  const quizQuestions = [
    {
      id: 1,
      question: 'Riguardo ai "tumor targeting monoclonal antibodies", quale delle seguenti affermazioni è ERRATA (domanda ufficiale presentata a lezione)?',
      options: [
        'A) Inibiscono la trasmissione dei segnali proliferativi per le cellule tumorali',
        'B) Causano citolisi delle cellule tumorali mediante ADCC',
        'C) Agiscono nel microambiente tumorale',
        'D) Promuovono la trasduzione di segnali pro-apoptotici',
        'E) Sono efficaci esclusivamente mediante citolisi dipendente dal complemento (CDC) e non possono esercitare neutralizzazione diretta'
      ],
      correctAnswer: 4,
      explanation: 'L\'affermazione E è errata (e quindi la risposta corretta al quesito negativo): i tumor targeting mAbs agiscono attraverso molteplici meccanismi combinati (blocco del segnale proliferativo, induzione di apoptosi, ADCC via cellule NK e opsonofagocitosi macrofagica), non limitandosi alla sola via del complemento.'
    },
    {
      id: 2,
      question: 'Quale delle seguenti caratteristiche definisce rigorosamente un anticorpo monoclonale rispetto a un antisiero policlonale?',
      options: [
        'A) Si produce fisiologicamente in vivo in risposta a un\'infezione batterica primaria',
        'B) È costituito da una miscela eterogenea di immunoglobuline con affinità variabili',
        'C) È prodotto da un singolo clone cellulare immortalizzato (ibridoma), possiede un\'unica specificità epitopica, affinità costante e identico isotipo',
        'D) Non può in alcun caso essere ingegnerizzato o umanizzato',
        'E) È presente solo nelle secrezioni mucosali come dimero'
      ],
      correctAnswer: 2,
      explanation: 'A differenza delle risposte policlonali in vivo (in cui molti cloni B riconoscono molteplici epitopi diversi dello stesso patogeno), un anticorpo monoclonale deriva da una singola plasmacellula fusa con una cellula di mieloma, garantendo identico isotipo, omogeneità assoluta di sequenza e singola specificità di legame.'
    },
    {
      id: 3,
      question: 'Gli anticorpi monoclonali il cui nome farmacologico termina con il suffisso -UMAB (es. Panitumumab, Ofatumumab, Nivolumab):',
      options: [
        'A) Sono completamente murini',
        'B) Sono chimerici (catene variabili murine e costanti umane)',
        'C) Sono umanizzati (solo le regioni CDR sono murine)',
        'D) Sono completamente umani (100% sequenza genica umana)',
        'E) Sono frammenti bispecifici a catena singola'
      ],
      correctAnswer: 3,
      explanation: 'Secondo la nomenclatura internazionale dell\'OMS: -omab = murino; -ximab = chimerico; -zumab = umanizzato; -umab = completamente umano (derivato da phage display o topi transgenici con locus immunoglobulinico umano integrato).'
    },
    {
      id: 4,
      question: 'Quali effetti biologici possono essere ottenuti mediante ingegneria mirata del frammento Fc di un anticorpo monoclonale terapeutico?',
      options: [
        'A) Aumento della citotossicità cellulare anticorpo-dipendente (ADCC) mediante defucosilazione in Asn297',
        'B) Prolungamento marcato dell\'emivita plasmatica (fino a 6 mesi) mediante mutazione YTE che ottimizza il legame a FcRn',
        'C) Mutazione della specificità per l\'epitopo antigenico del Fab',
        'D) Sono corrette sia A) che B)',
        'E) Nessun effetto, poiché il frammento Fc non è modificabile geneticamente'
      ],
      correctAnswer: 3,
      explanation: 'L\'ingegneria del frammento Fc consente di modulare selettivamente le funzioni effettrici: la rimozione del fucosio (defucosilazione, come in Obinutuzumab) potenzia l\'affinità per CD16a incrementando l\'ADCC; la mutazione YTE (come in Nirsevimab) decuplica l\'affinità per FcRn a pH acido estendendo l\'emivita a 6 mesi. Il legame all\'antigene dipende invece dal dominio variabile Fab.'
    },
    {
      id: 5,
      question: 'I farmaci biologici della classe BiTE (Bispecific T-cell Engagers, come Blinatumomab):',
      options: [
        'A) Sono costituiti da un frammento Fc dimerico purificato da siero equino',
        'B) Sono frammenti ricombinanti composti da due scFv uniti in tandem che legano da un lato un antigene tumorale e dall\'altro il CD3 dei linfociti T',
        'C) Reclutano unicamente le cellule epiteliali respiratorie',
        'D) Hanno un\'emivita di oltre 30 giorni e non vengono filtrati dal rene',
        'E) Sono utilizzati esclusivamente nella terapia dell\'osteoporosi'
      ],
      correctAnswer: 1,
      explanation: 'I BiTE fondono due frammenti a singola catena variabile (scFv): uno diretto contro l\'antigene tumorale (es. CD19 nei linfomi B) e l\'altro contro la subunità epsilon del CD3 dei linfociti T, creando una sinapsi citotossica forzata che distrugge il tumore in modo antigene-indipendente.'
    },
    {
      id: 6,
      question: 'Quali delle seguenti piattaforme terapeutiche rappresentano evoluzioni tecnologiche derivate dagli anticorpi monoclonali?',
      options: [
        'A) Linfociti T con Recettore Antigenico Chimerico (CAR-T cells)',
        'B) Terreno selettivo HAT con aminopterina',
        'C) Coniugati anticorpo-farmaco (Antibody-Drug Conjugates, ADC)',
        'D) La risposta anticorpi anti-topo HAMA',
        'E) Sono corrette sia A) che C)'
      ],
      correctAnswer: 4,
      explanation: 'Sia le CAR-T (che sfruttano il frammento scFv dell\'anticorpo monoclonale come ectodominio extracellulare di riconoscimento) sia gli ADC (che usano il mAb come proiettile guidato per recapitare un chemioterapico citotossico intracellulare) rappresentano storiche evoluzioni della tecnologia dei monoclonali.'
    },
    {
      id: 7,
      question: 'In un Antibody-Drug Conjugate (ADC) come Trastuzumab-Emtansine (T-DM1), quale caratteristica funzionale deve possedere il linker chimico che unisce il mAb al principio attivo citotossico?',
      options: [
        'A) Deve idrolizzarsi spontaneamente nel plasma entro 5 minuti dall\'infusione endovenosa',
        'B) Deve essere stabile nel circolo sistemico per evitare tossicità sistemica aspecifica e rilasciare il farmaco citotossico solo dopo internalizzazione endocitica nella cellula tumorale',
        'C) Deve legarsi covalentemente all\'albumina sierica',
        'D) Deve inibire l\'interazione del frammento Fab con il recettore HER2',
        'E) Deve promuovere la glicosilazione del reticolo endoplasmatico'
      ],
      correctAnswer: 1,
      explanation: 'Il linker deve garantire elevata stabilità nel torrente circolatorio (per non disperdere la tossina nei tessuti sani) e venire scisso selettivamente da enzimi lisosomiali (o dal basso pH endocitico) una volta che il complesso ADC-antigene è stato internalizzato nella cellula bersaglio.'
    },
    {
      id: 8,
      question: 'Qual è il razionale dell\'impiego della radioimmunoterapia (RIT) nella medicina teranostica e in cosa consiste l\'effetto "Crossfire"?',
      options: [
        'A) La radiazione colpisce solo i vasi sanguigni sani senza toccare la massa tumorale',
        'B) L\'anticorpo trasporta un radioisotopo che emette radiazioni in grado di colpire non solo la cellula legata ma anche le cellule tumorali adiacenti prive di antigene nel raggio di emissione',
        'C) Il radioisotopo trasforma il linfocita B in cellula dendritica',
        'D) L\'effetto crossfire blocca la biosintesi di de novo dei nucleotidi',
        'E) La somministrazione avviene solo attraverso aerosol nasale'
      ],
      correctAnswer: 1,
      explanation: 'L\'effetto crossfire descrive il fenomeno per cui i raggi emessi dall\'isotopo legato all\'anticorpo (particelle beta o alfa) penetrano per frazioni di millimetro o centimetri nella massa neoplastica, irradiando e distruggendo anche le cellule tumorali circostanti che hanno perso o non esprimono l\'antigene target.'
    },
    {
      id: 9,
      question: 'Nelle cellule CAR-T di seconda e terza generazione, quale componente molecolare è stata inserita nel dominio citoplasmatico intracellulare oltre alla catena CD3-zeta per prevenire l\'anergia e potenziare la persistenza cellulare?',
      options: [
        'A) Domini costimolatori come CD28 e/o 4-1BB (CD137)',
        'B) La fosfatasi inibitoria SHIP-1',
        'C) Il recettore di membrana pIgR con componente secretoria',
        'D) Subunità dell\'integrina CD18',
        'E) La catena J delle IgM'
      ],
      correctAnswer: 0,
      explanation: 'Le CAR-T di prima generazione (dotate della sola catena zeta di CD3) andavano rapidamente incontro ad anergia o morte cellulare in vivo. L\'aggiunta di domini costimolatori intracellulari come CD28 (espansione rapida) e 4-1BB/CD137 (sopravvivenza a lungo termine e memoria) definisce la seconda e terza generazione, garantendo remissioni durature.'
    },
    {
      id: 10,
      question: 'Un paziente con linfoma a grandi cellule B sviluppa febbre a 40°C, grave ipotensione refrattaria ai liquidi, ipossiemia ed elevazione esponenziale di IL-6 (8500 pg/mL) 4 giorni dopo l\'infusione di cellule CAR-T (Yescarta). Quale approccio terapeutico immediato è raccomandato per trattare la Cytokine Release Syndrome (CRS)?',
      options: [
        'A) Infusione di eritrociti concentrati e osservazione',
        'B) Somministrazione tempestiva dell\'anticorpo anti-IL-6R Tocilizumab, associato o meno a corticosteroidi (desametasone)',
        'C) Sospensione dell\'acqua per os e somministrazione di papaina',
        'D) Trapianto autologo di piastrine non irradiate',
        'E) Antibioticoterapia empirica con penicillina senza immunosoppressione'
      ],
      correctAnswer: 1,
      explanation: 'La Cytokine Release Syndrome (CRS) da CAR-T è sostenuta dall\'attivazione massiva dei macrofagi dell\'ospite che secernono quantità enormi di IL-6. Il trattamento salvavita di prima linea approvato è Tocilizumab (anticorpo monoclonale antagonista recettoriale anti-IL-6R), in grado di abortire rapidamente la sindrome e prevenire l\'insufficienza multiorgano.'
    }
  ];

  const handleSelectAnswer = (qIndex: number, optionIndex: number) => {
    if (showQuizResults) return;
    setQuizAnswers(prev => ({ ...prev, [qIndex]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctAnswer) score++;
    });
    return score;
  };


  return (
    <div className={`space-y-12 ${proseFontClass} text-slate-800`}>
      {/* HEADER DELLA LEZIONE 18 */}
      <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-indigo-800/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full text-xs font-mono font-semibold tracking-wide uppercase">
              Lezione 18 · 10 Novembre 2025
            </span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full text-xs font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" /> Trascrizione Integrale Verificata
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Anticorpi Monoclonali Terapeutici (mAb), Ingegneria dell'Fc, Piattaforme Bispecifiche (BiTE/BiKE), ADC e Terapia Cellulare CAR-T
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-4xl leading-relaxed">
            Dalla rivoluzione degli ibridomi e selezione in terreno HAT (Köhler e Milstein, Nobel 1984) all'evoluzione bioingegneristica: mAb murini (-omab), chimerici (-ximab), umanizzati (-zumab) e umani (-umab); tumor targeting (Rituximab, Trastuzumab/Pertuzumab); glicoingegneria e defucosilazione (Obinutuzumab); estensione dell'emivita a 6 mesi con mutazione YTE (Nirsevimab); coniugati anticorpo-farmaco (ADC); radioimmunoterapia e medicina teranostica; e terapia cellulare con recettori antigenici chimerici (CAR-T) con gestione della Cytokine Release Syndrome (CRS).
          </p>

          <div className="pt-4 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-300">
            <div>
              <span className="text-slate-400 block font-mono text-[10px] uppercase">Docente Ufficiale</span>
              <strong className="text-white text-sm">Prof.ssa Ricciarda Galandrini</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-mono text-[10px] uppercase">Sbobinatori</span>
              <strong className="text-white text-xs">Andrea Campanile & Martina Cannizzaro</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-mono text-[10px] uppercase">Revisori Medici</span>
              <strong className="text-white text-xs">Andrea Caleo & Sofia Corrieri</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-mono text-[10px] uppercase">Target Didattico</span>
              <strong className="text-white text-xs">Biotecnologie Immunologiche & Oncologia</strong>
            </div>
          </div>
        </div>
      </section>

      {/* INDICE RAPIDO DEI 10 SOTTO-CAPITOLI */}
      <nav className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-150 pb-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-1.5">
            <Bookmark className="w-4 h-4" /> Struttura della Trattazione (10 Sotto-capitoli)
          </span>
          <span className="text-xs text-slate-500 font-sans">Tempo stimato: 35 min</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs">
          <a href="#sec-18-1" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">1</span>
            18.1 Monoclonalità vs Policlonalità & Nobel a Köhler e Milstein (1984)
          </a>
          <a href="#sec-18-2" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">2</span>
            18.2 Tecnologia degli Ibridomi: Fusione con Mieloma, HAT & Via HGPRT
          </a>
          <a href="#sec-18-3" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">3</span>
            18.3 Dagli Anticorpi Murini ai Farmaci Umani: HAMA & Suffissi (-omab, -ximab, -zumab, -umab)
          </a>
          <a href="#sec-18-4" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">4</span>
            18.4 Tumor Targeting mAbs: Rituximab (Anti-CD20) & Trastuzumab/Pertuzumab (HER2)
          </a>
          <a href="#sec-18-5" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">5</span>
            18.5 Applicazioni nelle Malattie Infettive: SARS-CoV-2 (Anti-RBD), RSV & Convalescenti
          </a>
          <a href="#sec-18-6" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">6</span>
            18.6 Ingegneria dell'Fc: Glicoingegneria (Obinutuzumab) & Mutazione YTE (Emivita 6 Mesi)
          </a>
          <a href="#sec-18-7" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">7</span>
            18.7 Piattaforme Bispecifiche: BiTE (T-Cell Engagers Anti-CD3), BiKE & TriKE (CD16)
          </a>
          <a href="#sec-18-8" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">8</span>
            18.8 Antibody-Drug Conjugates (ADC): Linker Clivabili & Payload Citotossici (T-DM1, T-DXd)
          </a>
          <a href="#sec-18-9" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">9</span>
            18.9 Radioimmunoterapia (RIT) & Teranostica: Isotopi α/β-Emittenti ed Effetto Crossfire
          </a>
          <a href="#sec-18-10" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">10</span>
            18.10 Terapia Cellulare CAR-T: Design di 1ª-3ª Gen, Cytokine Release Syndrome & Tocilizumab
          </a>
        </div>
      </nav>

      {/* SOTTO-CAPITOLO 18.1 */}
      <section id="sec-18-1" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            1
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 18.1</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Monoclonalità vs Policlonalità Fisiologica & La Scoperta di Köhler e Milstein (Nobel 1984)
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            In natura, ogni qualvolta il nostro organismo risponde a un agente microbico o a un vaccino, la risposta immunitaria umorale è tipicamente <strong>policlonale</strong>: un singolo patogeno esprime centinaia di epitopi differenti; ciascun epitopo seleziona e attiva un distinto clone di linfociti B vergini, generando un siero contenente una miscela eterogenea di immunoglobuline con specificità, affinità e isotipi differenti.
          </p>
          <p>
            Al contrario, una risposta <strong>monoclonale</strong> deriva dalla proliferazione e secrezione di un <em>singolo clone plasmacellulare</em>. In vivo, la comparsa di immunoglobuline monoclonali nel sangue periferico è un reperto quasi esclusivamente <strong>patologico</strong>, tipico di neoplasie ematologiche delle plasmacellule quali il <strong>Mieloma Multiplo</strong>.
          </p>

          <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-2">
            <h4 className="font-bold text-indigo-950 text-sm flex items-center gap-2">
              <Award className="w-4 h-4 text-indigo-600" /> Il Premio Nobel per la Medicina del 1984
            </h4>
            <p className="text-xs text-indigo-950 leading-relaxed">
              Nel 1975, gli scienziati <strong>Georges Köhler</strong> e <strong>César Milstein</strong> pubblicarono sulla rivista <em>Nature</em> un articolo destinato a rivoluzionare la biomedicina: la dimostrazione che era possibile fondere in vitro una normale plasmacellula produttrice di anticorpi con una cellula tumorale di mieloma immortalizzata, creando una cellula ibrida &mdash; l'<strong>Ibridoma</strong> &mdash; capace di replicarsi indefinitamente in coltura e produrre quantità virtualmente illimitate di un anticorpo con specificità, affinità e isotipo predefiniti: l'<strong>anticorpo monoclonale (mAb)</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 18.2 */}
      <section id="sec-18-2" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            2
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 18.2</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              La Tecnologia degli Ibridomi: Fusione Cellulare, Terreno Selettivo HAT & Via HGPRT
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            Il protocollo originale di Köhler e Milstein si articola in una rigorosa sequenza di passaggi biotecnologici:
          </p>

          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Microscope className="w-4 h-4 text-blue-600" /> Le 5 Fasi della Generazione di Ibridomi
            </h4>
            <ol className="text-xs text-slate-700 space-y-2 list-decimal pl-5">
              <li>
                <strong>Immunizzazione dell'animale:</strong> un topo da laboratorio viene immunizzato con l'antigene bersaglio prescelto; dopo 7-10 giorni, al picco della risposta germinativa, la milza viene prelevata e disgregata ottenendo una sospensione di cellule primarie (plasmacellule specifiche, ma destinate a morire in coltura entro 10 giorni).
              </li>
              <li>
                <strong>La linea di Mieloma Murino:</strong> si impiega una linea tumorale plasmacellulare immortalizzata che è <em>non secernente</em> (difettiva nella sintesi di Ig proprie) e presenta una mutazione letale nel gene <strong>HGPRT</strong> (Ipoxantina-Guanina Fosforibosil-Transferasi).
              </li>
              <li>
                <strong>Fusione con Polietilenglicole (PEG):</strong> la miscela splenica e le cellule di mieloma vengono trattate con PEG, che induce la fusione delle membrane plasmatiche generando una sospensione eterogenea di plasmacellule isolate, mielomi isolati, cellule fuse omologhe e <em>ibridomi eterologhi plasmacellula-mieloma</em>.
              </li>
              <li>
                <strong>Selezione nel terreno HAT (Ipoxantina, Aminopterina, Timidina):</strong>
                <ul className="list-disc pl-5 pt-1 space-y-1">
                  <li>L'<strong>Aminopterina</strong> blocca irreversibilmente la sintesi <em>de novo</em> dei nucleotidi purinici e pirimidinici.</li>
                  <li>Le cellule possono sopravvivere solo mediante la <strong>via alternativa di salvataggio (salvage pathway)</strong>, che richiede l'enzima HGPRT per convertire l'ipoxantina in nucleotidi e la timidina chinasi (TK) per la timidina.</li>
                  <li>Le cellule di mieloma non fuso muoiono perché prive di HGPRT; le plasmacellule normali non fuse muoiono per senescenza cellulare entro 7-10 giorni; <strong>solo gli ibridomi sopravvivono e proliferano</strong> (poiché ereditano l'enzima HGPRT dalla plasmacellula e l'immortalità replicativa dal mieloma).</li>
                </ul>
              </li>
              <li>
                <strong>Clonaggio in Diluizione Limite:</strong> gli ibridomi vengono diluiti a concentrazione di <em>una singola cellula per pozzetto</em> in micropiastre a 96 pozzetti; i sovranatanti vengono testati mediante ELISA per selezionare il clone con la massima affinità e specificità per l'epitopo target.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 18.3 */}
      <section id="sec-18-3" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            3
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 18.3</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Dagli Anticorpi Murini ai Farmaci Umani: La Risposta HAMA & Nomenclatura Sistematica
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            I primi anticorpi monoclonali prodotti erano proteine al 100% murine. Quando somministrati nell'uomo a scopo terapeutico in vivo, manifestarono tre gravi fallimenti biologici:
          </p>
          <ul className="text-xs text-slate-700 space-y-1 list-disc pl-5">
            <li><strong>La risposta HAMA (Human Anti-Mouse Antibodies):</strong> il sistema immunitario umano riconosce le immunoglobuline di topo come antigeni estranei eterologhi, producendo anticorpi neutralizzanti che inattivano il farmaco ed espongono al rischio di shock anafilattico e malattia da siero.</li>
            <li><strong>Incompatibilità cross-specie del frammento Fc:</strong> l'Fc murino interagisce con scarsa efficienza con i recettori FcγR umani (compromettendo l'ADCC e l'opsonofagocitosi) e con C1q umano.</li>
            <li><strong>Emivita plasmatica brevissima (1-2 giorni):</strong> l'Fc murino non lega efficacemente il recettore neonatale umano <strong>FcRn</strong> sulle cellule endoteliali vascolari, subendo una rapida degradazione lisosomiale.</li>
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs pt-2">
            <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 space-y-1">
              <span className="font-bold text-rose-900 text-sm block font-mono">-omab</span>
              <p className="text-rose-950 font-semibold">Murino (100% topo)</p>
              <p className="text-[11px] text-slate-600">Alta immunogenicità, risposta HAMA, emivita 24-48h. Oggi confinati alla diagnostica in vitro (es. Ibritumomab).</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
              <span className="font-bold text-amber-900 text-sm block font-mono">-ximab</span>
              <p className="text-amber-950 font-semibold">Chimerico (~65% umano)</p>
              <p className="text-[11px] text-slate-600">Domini variabili Fab di topo, domini costanti Fc umani. Bassa risposta HACA, emivita ~10-14 gg (es. Rituximab, Cetuximab).</p>
            </div>
            <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-200 space-y-1">
              <span className="font-bold text-indigo-900 text-sm block font-mono">-zumab</span>
              <p className="text-indigo-950 font-semibold">Umanizzato (&gt;90% umano)</p>
              <p className="text-[11px] text-slate-600">Solo le anse ipervariabili CDR sono murine; tutto il framework Fab ed Fc è umano. Emivita ~21 gg (es. Trastuzumab, Pertuzumab).</p>
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
              <span className="font-bold text-emerald-900 text-sm block font-mono">-umab</span>
              <p className="text-emerald-950 font-semibold">Completamente Umano (100%)</p>
              <p className="text-[11px] text-slate-600">Prodotti mediante topi transgenici con locus umano knock-in (Xenomouse) o phage display. Zero immunogenicità (es. Panitumumab, Nivolumab).</p>
            </div>
          </div>

          {/* Mappa Concettuale dell'Evoluzione degli Anticorpi Monoclonali */}
          <ConceptMapFlow {...MAP_LEZIONE_18_MAB_EVOLUTION} />
        </div>
      </section>

      {/* SOTTO-CAPITOLO 18.4 */}
      <section id="sec-18-4" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            4
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 18.4</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Tumor Targeting mAbs: Rituximab (Anti-CD20) & Trastuzumab/Pertuzumab (Anti-HER2)
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            I primi anticorpi monoclonali autorizzati in oncologia clinica appartengono alla classe dei <strong>Tumor Targeting mAbs</strong>: anticorpi diretti contro antigeni presenti sulla membrana delle cellule neoplastiche:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-600" /> Rituximab (Anti-CD20, Approvato FDA 1997)
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Anticorpo chimerico IgG1 rivolto contro la fosfoproteina transmembrana <strong>CD20</strong>, espressa dai precursori B e dai linfociti B maturi, nonché nella quasi totalità dei linfomi non-Hodgkin B e nella Leucemia Linfatica Cronica (LLC).
              </p>
              <p className="text-xs text-slate-700">
                <strong>Meccanismi d'azione triplici:</strong> 1) Induzione di ADCC mediata da cellule NK via FcγRIIIA; 2) Attivazione della citotossicità complemento-dipendente (CDC); 3) Opsonofagocitosi macrofagica via FcγRI. Benché distrugga anche i linfociti B normali ("shared antigen"), l'aplasia B-cellulare è tollerata e gestibile clinicamente poiché non colpisce le plasmacellule a lunga vita (che sono CD20-negative) né le cellule staminali ematopoietiche.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Crosshair className="w-4 h-4 text-rose-600" /> Trastuzumab & Pertuzumab (Anti-HER2, Carcinoma Mammario)
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                L'oncogene <strong>HER2 (ErbB2)</strong> è iperespresso nel 25-30% dei carcinomi della mammella. È un recettore ad attività tirosin-chinasica costitutiva che non possiede un ligando fisiologico proprio ma forma eterodimeri proliferativi con HER1 (EGFR), HER3 e HER4, inducendo la via MAPK e PI3K/Akt.
              </p>
              <p className="text-xs text-slate-700">
                <strong>Doppio Blocco Sinergico:</strong> <em>Trastuzumab</em> (umanizzato, 1998) lega il dominio extracellulare IV inducendo internalizzazione recettoriale e potente ADCC; <em>Pertuzumab</em> lega il dominio II bloccando stericamente la dimerizzazione con HER3. La somministrazione combinata ha rivoluzionato la sopravvivenza delle pazienti HER2-positive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 18.5 */}
      <section id="sec-18-5" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            5
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 18.5</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Applicazioni nelle Malattie Infettive: SARS-CoV-2 (Anti-RBD), RSV, Ebola & Antrace
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            Nelle patologie infettive ad alta letalità, gli anticorpi monoclonali possono essere generati isolando direttamente le plasmacellule memoria di <strong>pazienti convalescenti</strong> che hanno superato l'infezione:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 block font-semibold">SARS-CoV-2 (Anti-Spike RBD)</strong>
              Cocktail monoclonali (Bamlanivimab, Etesevimab, Casirivimab, Imdevimab) approvati in emergenza per bloccare l'interazione tra RBD di Spike e ACE2; limitati nel tempo dall'antigenic drift delle varianti (Omicron).
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 block font-semibold">Virus Respiratorio Sinciziale (RSV)</strong>
              <strong>Palivizumab</strong> (umanizzato IgG1, 1998) e <strong>Nirsevimab</strong> (2022, dotato di mutazione YTE) per la profilassi delle infezioni del tratto respiratorio inferiore nei neonati prematuri.
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 block font-semibold">Ebola Virus (Ansuvimab, Inmazeb)</strong>
              Monoclonali completamente umani autorizzati nel 2020 capaci di legare la glicoproteina di superficie di Ebola, abbattendo la mortalità emorragica dal 70% al di sotto del 30%.
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 block font-semibold">Antrace & C. difficile</strong>
              <strong>Raxibacumab</strong> e <strong>Obiltoxaximab</strong> contro l'antigene protettivo di <em>Bacillus anthracis</em>; <strong>Bezlotoxumab</strong> contro l'enterotossina B di <em>C. difficile</em>.
            </div>
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 18.6 */}
      <section id="sec-18-6" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            6
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 18.6</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Ingegneria del Frammento Fc: Glicoingegneria, Defucosilazione (Obinutuzumab) & Mutazione YTE
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            Negli ultimi 15 anni la bioingegneria farmaceutica ha superato il concetto di semplice "anticorpo umano nudo", modificando la sequenza e i residui glicidici del frammento <strong>Fc</strong> per alterare le proprietà effettrici e farmacocinetiche in modo sartoriale:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50/70 rounded-xl border border-purple-200 space-y-2">
              <h4 className="font-bold text-purple-950 text-sm flex items-center gap-2">
                <Dna className="w-4 h-4 text-purple-700" /> 1. Glicoingegneria & Defucosilazione (Obinutuzumab)
              </h4>
              <p className="text-xs text-purple-950 leading-relaxed">
                Il residuo di asparagina 297 (Asn297) del dominio CH2 ospita un oligosaccaride con residuo terminale di fucosio. Modificando geneticamente le linee cellulari produttrici (CHO) per silenziare l'enzima fucosil-transferasi (FUT8), si producono anticorpi <strong>afucosilati</strong>.
              </p>
              <p className="text-xs text-purple-950">
                L'assenza di fucosio elimina l'ingombro sterico con il carboidrato del recettore <strong>FcγRIIIA (CD16a)</strong> espresso sulle cellule NK, incrementando l'affinità di legame di <strong>50-100 volte</strong>! Il farmaco <strong>Obinutuzumab</strong> (anti-CD20 afucosilato approvato nel 2017) induce una ADCC straordinariamente superiore a Rituximab, diventando terapia di prima linea nel linfoma follicolare.
              </p>
            </div>

            <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-2">
              <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-700" /> 2. La Mutazione YTE per l'Emivita Semestrale (Nirsevimab)
              </h4>
              <p className="text-xs text-emerald-950 leading-relaxed">
                Sostituendo 3 amminoacidi nel dominio CH2 (<strong>M252Y / S254T / T256E</strong>, da cui l'acronimo <strong>Y-T-E</strong>), l'affinità per il recettore neonatale <strong>FcRn</strong> a pH acido endosomiale aumenta di oltre 10 volte.
              </p>
              <p className="text-xs text-emerald-950">
                Le cellule endoteliali salvano l'anticorpo dalla degradazione lisosomiale riciclandolo continuamente. L'anticorpo <strong>Nirsevimab</strong> (anti-RSV) vanta un'emivita di <strong>6 mesi (180 giorni)</strong>: una singola iniezione somministrata alla nascita o alla madre nel 3° trimestre protegge il neonato per l'intera durata della stagione invernale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 18.7 */}
      <section id="sec-18-7" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            7
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 18.7</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Piattaforme Bispecifiche: BiTE (T-Cell Engagers Anti-CD3), BiKE & TriKE (CD16)
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            Le piattaforme bispecifiche a doppia specificità fondono le porzioni variabili di due anticorpi distinti per creare "ponti fisici" tra cellule immunitarie effettrici e cellule tumorali:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-600" /> BiTE (Bispecific T-Cell Engager)
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Composti da due frammenti a singola catena (<strong>scFv</strong>: VH+VL uniti da peptide linker flessibile): un scFv lega un antigene tumorale (es. CD19, CD20, HER2, EGFR), mentre l'altro scFv riconosce la catena CD3ε del complesso TCR sui linfociti T citotossici.
              </p>
              <p className="text-xs text-slate-700">
                <strong>Meccanismo Antigene-Indipendente:</strong> Il BiTE costringe fisicamente il linfocita T a formare una sinapsi citotossica contro il tumore, rilasciando granuli litici di perforina e granzimi anche senza riconoscimento TCR/MHC! Prototipo clinico: <strong>Blinatumomab</strong> (anti-CD19 / anti-CD3 per ALL). Limiti: emivita brevissima (2-4 ore, assenza di Fc) e rischio di tossicità neurologica e da citochine.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-600" /> BiKE & TriKE (Killer Cell Engagers)
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Progettati per reclutare specificamente le <strong>cellule Natural Killer (NK)</strong>:
              </p>
              <ul className="text-xs text-slate-700 space-y-1 list-disc pl-4 pt-1">
                <li><strong>BiKE (Bispecific Killer Engager):</strong> unisce un scFv anti-CD16 (FcγRIIIA delle NK) a un scFv anti-antigene tumorale (es. CD19, CD33).</li>
                <li><strong>TriKE (Trispecific Killer Engager):</strong> integra tre frammenti variabili (es. anti-CD19 + anti-CD22 + anti-CD16) oppure include un dominio chimerico contenente <strong>IL-15</strong> per sostenere la proliferazione e sopravvivenza in vivo delle cellule NK armate.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 18.8 */}
      <section id="sec-18-8" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            8
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 18.8</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Antibody-Drug Conjugates (ADC): Linker Clivabili & Payload Citotossici (T-DM1, T-DXd)
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            Gli <strong>Antibody-Drug Conjugates (ADC)</strong> incarnano la visione del "proiettile magico" di Paul Ehrlich: impiegare la specificità dell'anticorpo monoclonale come veicolo mirato per recapitare all'interno della cellula neoplastica composti citotossici 100-1000 volte più potenti della chemioterapia tradizionale:
          </p>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Syringe className="w-4 h-4 text-indigo-600" /> Anatomia Trimolecolare di un ADC
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                <strong className="text-indigo-900 block font-semibold">1. L'Anticorpo Veicolante</strong>
                Monoclonale ad alta specificità (IgG1 umanizzata) che riconosce selettivamente un antigene espresso dal tumore (es. HER2, CD30, TROP-2, Nectin-4).
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                <strong className="text-indigo-900 block font-semibold">2. Il Linker Chimico</strong>
                Ponte covalente stabile nel circolo ematico (per prevenire tossicità sistemica aspecifica) ma <em>clivabile selettivamente</em> all'interno del fago-lisosoma tumorale (linker peptidici sensibili a catepsina B, o ponti disolfuro).
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                <strong className="text-indigo-900 block font-semibold">3. Il Payload Citotossico</strong>
                Composti ultra-letali: inibitori dei microtubuli (<strong>Maytansinoidi DM1/DM4</strong>, <strong>Auristatine MMAE/MMAF</strong>) o inibitori della topoisomerasi I (<strong>Deruxtecan DXd</strong>).
              </div>
            </div>
          </div>

          <div className="p-3 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl text-xs text-emerald-950">
            <strong>Esempi di Successo Clinico:</strong> <em>Trastuzumab Emtansine (T-DM1)</em> e <em>Trastuzumab Deruxtecan (T-DXd)</em> nel carcinoma mammario HER2-positivo avanzato; <em>Brentuximab Vedotin</em> (anti-CD30 legato ad auristatina) nel Linfoma di Hodgkin e nel linfoma anaplastico a grandi cellule.
          </div>

          {/* Mappa Concettuale delle Terapie Avanzate: ADC vs CAR-T vs BiTE */}
          <ConceptMapFlow {...MAP_LEZIONE_18_CAR_T_AND_ADC} />
        </div>
      </section>

      {/* SOTTO-CAPITOLO 18.9 */}
      <section id="sec-18-9" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            9
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 18.9</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Radioimmunoterapia (RIT) & Medicina Teranostica: Isotopi α/β-Emittenti ed Effetto Crossfire
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            La <strong>Radioimmunoterapia (RIT)</strong> unisce la selettività del targeting anticorpale all'energia citolesiva dei radioisotopi:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Atom className="w-4 h-4 text-amber-600" /> Radioterapia Tradizionale vs Radioimmunoterapia (Effetto Crossfire)
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Mentre la radioterapia convenzionale a fasci esterni emette un fascio lineare che attraversa e danneggia inevitabilmente i tessuti sani interposti, nella RIT il radiofarmaco si accumula all'interno del tumore emettendo radiazioni in tutte le direzioni.
              </p>
              <p className="text-xs text-slate-700">
                <strong>Effetto Crossfire:</strong> L'irradiazione emessa da una cellula tumorale legata dall'anticorpo penetra per millimetri nei tessuti circostanti, distruggendo anche le cellule neoplastiche limitrofe che hanno perso l'espressione dell'antigene o che non sono state direttamente raggiunte dall'anticorpo.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Radio className="w-4 h-4 text-indigo-600" /> Medicina Teranostica (Therapy + Diagnostics)
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Utilizzando radioisotopi che possiedono sia un'emissione corpuscolata terapeutica (raggi β⁻ o α) sia un'emissione fotonica (raggi γ):
              </p>
              <ul className="text-xs text-slate-700 space-y-1 list-disc pl-4 pt-1">
                <li><strong>Lutezio-177 (¹⁷⁷Lu):</strong> coniugato ad anticorpi anti-PSMA (antigene di membrana specifico della prostata) per il carcinoma prostatico metastatico resistente alla castrazione.</li>
                <li><strong>Omburtamab (anti-B7-H3 / P7H3):</strong> somministrato per via intratecale/loco-regionale nel trattamento dei tumori rari delle meningi e neuroblastomi pediatrici; l'emissione gamma permette di tracciare la localizzazione della neoplasia a 48 ore mediante imaging SPECT.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 18.10 */}
      <section id="sec-18-10" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            10
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 18.10</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Terapia Cellulare con Recettori Chimerici CAR-T: Design di 1ª-3ª Gen, Cytokine Release Syndrome & Tocilizumab
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            Le <strong>CAR-T (Chimeric Antigen Receptor T-cell)</strong> rappresentano la convergenza suprema tra terapia genica, cellulare e ingegneria anticorpale: linfociti T autologhi prelevati dal paziente vengono geneticamente riprogrammati mediante vettori retrovirali/lentivirali difettivi per esprimere un recettore chimerico artificiale:
          </p>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Dna className="w-4 h-4 text-indigo-600" /> L'Evoluzione del Costrutto Molecolare CAR
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-semibold">1ª Generazione (1990s)</strong>
                Ectodominio scFv (Fab monoclonale) + dominio cerniera/transmembrana + endodominio citoplasmatico con sola <strong>catena ζ di CD3</strong>. <em>Fallimento clinico:</em> privo di segnale 2 costimolatorio, i linfociti andavano rapidamente incontro ad anergia o apoptosi.
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                <strong className="text-indigo-900 block font-semibold">2ª Generazione (Approvata FDA/AIFA)</strong>
                scFv + catena ζ + <strong>un dominio costimolatorio</strong>: o <strong>CD28</strong> (rapida espansione citotossica, es. <em>Axicabtagene ciloleucel / Yescarta</em>) oppure <strong>4-1BB (CD137)</strong> (sopravvivenza a lungo termine e persistenza memoria, es. <em>Tisagenlecleucel / Kymriah</em>).
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-semibold">3ª e 4ª Generazione (TRUCKs)</strong>
                scFv + catena ζ + <strong>doppio dominio costimolatorio (CD28 + 4-1BB)</strong> + vettori inducibili per citochine (IL-12) e <strong>geni suicidio</strong> (iCasp9 attivabile con farmaci selettivi in caso di tossicità fulminante).
              </div>
            </div>
          </div>

          <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl space-y-2">
            <h4 className="font-bold text-rose-950 text-sm flex items-center gap-2">
              <Flame className="w-4 h-4 text-rose-600" /> La Cytokine Release Syndrome (CRS) & Neurotossicità (ICANS)
            </h4>
            <p className="text-xs text-rose-950 leading-relaxed">
              La distruzione esplosiva della massa tumorale attiva a cascata i macrofagi dell'immunità innata, che riversano nel torrente circolatorio quantità mostruose di <strong>IL-6, IL-1 e TNF-α</strong>. La CRS si manifesta con febbre elevata (&ge;40°C), vasodilatazione e ipotensione refrattaria da shock, sindrome da distress respiratorio e neurotossicità severa (ICANS: afasia, disorientamento, tremori, convulsioni).
            </p>
            <p className="text-xs text-rose-950 font-semibold">
              Trattamento Salvavita di Scelta: <strong>Tocilizumab</strong> (anticorpo monoclonale umanizzato antagonista recettoriale anti-IL-6R), somministrato tempestivamente con o senza corticosteroidi sistemici (desametasone).
            </p>
          </div>
        </div>
      </section>

      {/* SIMULATORE 1: INGEGNERIA MOLECOLARE mAb */}
      <div id="sim-mab-engineer" className="p-5 sm:p-6 bg-slate-900 text-white rounded-2xl border border-indigo-500/40 shadow-lg space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-indigo-400" />
            <h3 className="font-bold text-sm sm:text-base text-indigo-200">
              Simulatore di Ingegneria Molecolare Anticorpale (Dal Murino al BiTE / ADC / YTE)
            </h3>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-indigo-900/60 text-indigo-300 font-mono text-[11px] border border-indigo-700">
            Formato, Modifiche Fc & Proprietà Farmacocinetiche
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {/* Formato mAb */}
          <div className="space-y-1.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
            <label className="text-slate-300 font-semibold block">Formato Molecolare di Base</label>
            <select
              aria-label="Formato Molecolare di Base"
              value={mabFormat}
              onChange={(e) => setMabFormat(e.target.value as any)}
              className="w-full bg-slate-950 text-white border border-slate-600 rounded-lg p-1.5 text-xs focus:ring-1 focus:ring-indigo-400"
            >
              <option value="murine">Murino (-omab, 100% Topo)</option>
              <option value="chimeric">Chimerico (-ximab, 65% Umano)</option>
              <option value="humanized">Umanizzato (-zumab, &gt;90% Umano)</option>
              <option value="human">Umano (-umab, 100% Topo Xenomouse)</option>
              <option value="bite">BiTE (Bispecific scFv Anti-CD3/Tumore)</option>
              <option value="adc">ADC (Coniugato Anticorpo-Farmaco)</option>
            </select>
            <p className="text-[10px] text-slate-400">Determina il grado di immunogenicità HAMA.</p>
          </div>

          {/* Fc Engineering */}
          <div className="space-y-1.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
            <label className="text-slate-300 font-semibold block">Ingegneria del Frammento Fc</label>
            <select
              aria-label="Ingegneria del Frammento Fc"
              value={fcEngineering}
              onChange={(e) => setFcEngineering(e.target.value as any)}
              disabled={mabFormat === 'bite'}
              className="w-full bg-slate-950 text-white border border-slate-600 rounded-lg p-1.5 text-xs focus:ring-1 focus:ring-indigo-400 disabled:opacity-40"
            >
              <option value="wt">Wild-Type Standard (IgG1 naturale)</option>
              <option value="afucosylated">Defucosilato in Asn297 (Iper-ADCC Obinutuzumab)</option>
              <option value="yte_mutation">Mutazione YTE (Emivita 6 mesi Nirsevimab)</option>
              <option value="igg4_silenced">Isotipo IgG4 Silenziato (No ADCC / Solo blocco)</option>
            </select>
            <p className="text-[10px] text-slate-400">Modula l'affinità per CD16a o FcRn.</p>
          </div>

          {/* Payload */}
          <div className="space-y-1.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
            <label className="text-slate-300 font-semibold block">Payload / Coniugato Aggiuntivo</label>
            <select
              aria-label="Payload / Coniugato Aggiuntivo"
              value={payloadChoice}
              onChange={(e) => setPayloadChoice(e.target.value as any)}
              disabled={mabFormat === 'bite'}
              className="w-full bg-slate-950 text-white border border-slate-600 rounded-lg p-1.5 text-xs focus:ring-1 focus:ring-indigo-400 disabled:opacity-40"
            >
              <option value="none">Nessun Payload (Naked mAb Terapeutico)</option>
              <option value="tubulin_inhibitor">Tossina Tubulina Maytansinoide/Auristatina (ADC)</option>
              <option value="lutetium177">Radionuclide Lutezio-177 (Radioimmunoterapia/Teranostica)</option>
              <option value="scfv_cd3">scFv Anti-CD3 (Bispecifico T-cell engager)</option>
            </select>
            <p className="text-[10px] text-slate-400">Aggiunge tossicità specifica o radioattività.</p>
          </div>
        </div>

        {/* Scheda Risultati */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 border-b border-slate-800 pb-2">
            <div>
              <span className="text-slate-400 font-mono text-[10px] uppercase block">Suffisso & Nomenclatura OMS</span>
              <strong className="text-indigo-300 text-xs">{suffixName}</strong>
            </div>
            <div>
              <span className="text-slate-400 font-mono text-[10px] uppercase block">Emivita Plasmatica Stimata</span>
              <strong className="text-emerald-400 text-xs font-mono">{halfLifeStr}</strong>
            </div>
            <div>
              <span className="text-slate-400 font-mono text-[10px] uppercase block">Immunogenicità nell'Uomo</span>
              <span className="text-slate-300 text-xs">{immunogenicityRisk}</span>
            </div>
          </div>

          <div className={`p-3 rounded-lg border text-xs leading-relaxed ${badgeColor}`}>
            <strong className="block mb-0.5">Meccanismo d'Azione Primario:</strong>
            {primaryMechanism}
          </div>

          <div className="text-[11px] text-slate-400">
            <strong>Applicazione Clinica Tipica:</strong> {clinicalIndication}
          </div>
        </div>
      </div>

      {/* SIMULATORE 2: LABORATORIO CLINICO CAR-T */}
      <div id="sim-car-t-lab" className="p-5 sm:p-6 bg-slate-900 text-white rounded-2xl border border-indigo-500/40 shadow-lg space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-5 h-5 text-rose-400" />
            <h3 className="font-bold text-sm sm:text-base text-rose-200">
              Laboratorio Clinico CAR-T: Design Molecolare & Gestione della Cytokine Release Syndrome (CRS)
            </h3>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-rose-900/60 text-rose-300 font-mono text-[11px] border border-rose-700">
            Terapia Cellulare & Emergenze
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {/* Generazione CAR */}
          <div className="space-y-1.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
            <label className="text-slate-300 font-semibold block">Generazione del Costrutto CAR</label>
            <select
              aria-label="Generazione del Costrutto CAR"
              value={carGen}
              onChange={(e) => setCarGen(e.target.value as any)}
              className="w-full bg-slate-950 text-white border border-slate-600 rounded-lg p-1.5 text-xs focus:ring-1 focus:ring-rose-400"
            >
              <option value="gen1">1ª Generazione (Solo catena CD3-zeta)</option>
              <option value="gen2_41bb">2ª Generazione (CD3-zeta + 4-1BB/CD137 Kymriah)</option>
              <option value="gen2_cd28">2ª Generazione (CD3-zeta + CD28 Yescarta)</option>
              <option value="gen3_dual">3ª Generazione (CD3-zeta + CD28 + 4-1BB)</option>
              <option value="gen4_suicide">4ª Generazione + Gene Suicidio Inducibile</option>
            </select>
          </div>

          {/* Target Neoplastico */}
          <div className="space-y-1.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
            <label className="text-slate-300 font-semibold block">Neoplasia Ematologica / Solida Target</label>
            <select
              aria-label="Neoplasia Ematologica / Solida Target"
              value={targetTumor}
              onChange={(e) => setTargetTumor(e.target.value as any)}
              className="w-full bg-slate-950 text-white border border-slate-600 rounded-lg p-1.5 text-xs focus:ring-1 focus:ring-rose-400"
            >
              <option value="all_cd19">Leucemia Linfoblastica Acuta / DLBCL (Anti-CD19)</option>
              <option value="myeloma_bcma">Mieloma Multiplo Refrattario (Anti-BCMA)</option>
              <option value="breast_her2_solid">Carcinoma Mammario Solido (Anti-HER2)</option>
            </select>
          </div>

          {/* Carico Tumorale */}
          <div className="space-y-1.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
            <label className="text-slate-300 font-semibold block">Massa Tumorale del Paziente</label>
            <select
              aria-label="Massa Tumorale del Paziente"
              value={tumorBurden}
              onChange={(e) => setTumorBurden(e.target.value as any)}
              className="w-full bg-slate-950 text-white border border-slate-600 rounded-lg p-1.5 text-xs focus:ring-1 focus:ring-rose-400"
            >
              <option value="low">Bassa Massa (&lt; 5% blasti midollari)</option>
              <option value="medium">Media Massa (Malattia bulky limitata)</option>
              <option value="high">Altissima Massa (&gt; 50% blasti, epatosplenomegalia)</option>
            </select>
          </div>
        </div>

        {/* Quadro Clinico & CRS */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border-b border-slate-800 pb-2">
            <div>
              <span className="text-slate-400 font-mono text-[10px] uppercase block">Sopravvivenza & Persistenza Linfocitaria</span>
              <strong className="text-white text-xs">{persistenceProfile}</strong>
            </div>
            <div>
              <span className="text-slate-400 font-mono text-[10px] uppercase block">Tossicità da Antigene Condiviso (Off-Tumor)</span>
              <strong className="text-amber-300 text-xs">{onTargetOffTumorRisk}</strong>
            </div>
          </div>

          <div className="p-3 bg-rose-950/60 border border-rose-600/50 rounded-lg space-y-1 text-rose-200">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase text-rose-400 font-bold">Quadro Clinico CRS & IL-6</span>
              <span className="font-mono text-[11px] font-bold text-white">{il6Level}</span>
            </div>
            <p className="font-semibold">{crsGrade}</p>
          </div>

          {/* Intervento terapeutico */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <label className="text-slate-300 font-semibold block text-xs">
              Somministra Intervento Terapeutico d'Emergenza:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                onClick={() => setAppliedTherapy('tocilizumab')}
                className={`p-2.5 rounded-lg text-left text-[11px] font-bold border transition-all ${
                  appliedTherapy === 'tocilizumab'
                    ? 'bg-emerald-950 border-emerald-500 text-emerald-200'
                    : 'bg-slate-900 hover:bg-slate-850 text-slate-300 border-slate-700'
                }`}
              >
                Tocilizumab (Anti-IL-6R) &plusmn; Desametasone
              </button>
              <button
                onClick={() => setAppliedTherapy('paracetamol')}
                className={`p-2.5 rounded-lg text-left text-[11px] font-bold border transition-all ${
                  appliedTherapy === 'paracetamol'
                    ? 'bg-rose-950 border-rose-500 text-rose-200'
                    : 'bg-slate-900 hover:bg-slate-850 text-slate-300 border-slate-700'
                }`}
              >
                Solo Antipiretici & Liquidi di Supporto
              </button>
              <button
                onClick={() => setAppliedTherapy('suicide_switch')}
                disabled={carGen !== 'gen4_suicide'}
                className={`p-2.5 rounded-lg text-left text-[11px] font-bold border transition-all disabled:opacity-40 ${
                  appliedTherapy === 'suicide_switch'
                    ? 'bg-purple-950 border-purple-500 text-purple-200'
                    : 'bg-slate-900 hover:bg-slate-850 text-slate-300 border-slate-700'
                }`}
              >
                Attivazione Gene Suicidio (Induzione Apoptosi CAR-T)
              </button>
            </div>

            {appliedTherapy === 'tocilizumab' && (
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/60 rounded-lg text-emerald-200 text-xs">
                <strong>SUCCESSO SALVAVITA:</strong> Il blocco competitivo di IL-6R abortisce tempestivamente la tempesta citochinica, normalizza la pressione arteriosa ed evita il ricovero in terapia intensiva, preservando la funzionalità antitumorale dei linfociti CAR-T.
              </div>
            )}
            {appliedTherapy === 'paracetamol' && (
              <div className="p-3 bg-rose-950/80 border border-rose-500/60 rounded-lg text-rose-200 text-xs">
                <strong>INSUFFICIENTE NELLE FORME SEVERE:</strong> Il solo paracetamolo non blocca la cascata citochinica macrofagica; progressione verso shock vasodilatatorio e insufficienza multiorgano irreversibile!
              </div>
            )}
            {appliedTherapy === 'suicide_switch' && (
              <div className="p-3 bg-purple-950/80 border border-purple-500/60 rounded-lg text-purple-200 text-xs">
                <strong>SPEGNIMENTO TOTALE D'EMERGENZA:</strong> Il farmaco attiva la proteina apoptotica inducibile (iCaspasi-9): le CAR-T circolanti muoiono per apoptosi in poche ore. La tossicità cessa istantaneamente, ma la terapia antitumorale viene interrotta.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* TABELLE COMPARATIVE SINOTTICHE (18.1 & 18.2) */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-8">
        <div>
          <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Tabelle Sinottiche Ufficiali</span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
            Compendio degli Anticorpi Monoclonali Approvati & Matrice Tecnologica Avanzata
          </h3>
        </div>

        {/* Tabella 18.1 */}
        <div className="space-y-3">
          <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-600" /> Tabella 18.1: Nomenclatura, Target & Principali Anticorpi Monoclonali Approvati
          </h4>
          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-mono">
                  <th className="p-3">Anticorpo (Nome Commerciale)</th>
                  <th className="p-3">Formato / Suffisso</th>
                  <th className="p-3">Antigene Target</th>
                  <th className="p-3">Indicazione Clinica Primaria</th>
                  <th className="p-3">Meccanismo d'Azione Prevalente</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">Rituximab (MabThera)</td>
                  <td className="p-3 font-mono">Chimerico (-ximab)</td>
                  <td className="p-3">CD20 (Linfociti B)</td>
                  <td className="p-3">Linfoma non-Hodgkin, LLC, Artrite Reumatoide</td>
                  <td className="p-3">ADCC (CD16a), citotossicità da complemento (CDC), opsonofagocitosi</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">Trastuzumab (Herceptin)</td>
                  <td className="p-3 font-mono">Umanizzato (-zumab)</td>
                  <td className="p-3">HER2 (ErbB2, Dominio IV)</td>
                  <td className="p-3">Carcinoma mammario e gastrico HER2-positivo</td>
                  <td className="p-3">Inibizione segnale MAPK/Akt, blocco dimerizzazione, ADCC</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">Pertuzumab (Perjeta)</td>
                  <td className="p-3 font-mono">Umanizzato (-zumab)</td>
                  <td className="p-3">HER2 (Dominio II)</td>
                  <td className="p-3">Carcinoma mammario metastatico HER2+</td>
                  <td className="p-3">Blocco sterico della dimerizzazione HER2-HER3 (sinergico a Trastuzumab)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">Obinutuzumab (Gazyvaro)</td>
                  <td className="p-3 font-mono">Umanizzato Defucosilato</td>
                  <td className="p-3">CD20 (Tipo II)</td>
                  <td className="p-3">Linfoma Follicolare, Leucemia Linfatica Cronica</td>
                  <td className="p-3">Iper-ADCC da glicoingegneria (assenza fucosio in Asn297)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">Nirsevimab (Beyfortus)</td>
                  <td className="p-3 font-mono">Umano Mutato YTE (-mab)</td>
                  <td className="p-3">Proteina F del Virus RSV</td>
                  <td className="p-3">Profilassi neonatale dell'infezione da RSV</td>
                  <td className="p-3">Neutralizzazione virale con emivita semestrale (180 gg) via FcRn</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">Blinatumomab (Blincyto)</td>
                  <td className="p-3 font-mono">BiTE (Doppio scFv)</td>
                  <td className="p-3">CD19 + CD3ε</td>
                  <td className="p-3">Leucemia Linfoblastica Acuta a cellule B (ALL)</td>
                  <td className="p-3">Sinapsi citotossica artificiale diretta tra T CD8+ e cellule tumorali CD19+</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">Trastuzumab Deruxtecan (Enhertu)</td>
                  <td className="p-3 font-mono">ADC (Coniugato Topo-I)</td>
                  <td className="p-3">HER2 (Veicolante)</td>
                  <td className="p-3">Carcinomi mammari metastatici HER2-positive e HER2-low</td>
                  <td className="p-3">Internalizzazione lisosomiale e rilascio di inibitore della topoisomerasi I</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">Tocilizumab (RoActemra)</td>
                  <td className="p-3 font-mono">Umanizzato (-zumab)</td>
                  <td className="p-3">Recettore IL-6 (IL-6R)</td>
                  <td className="p-3">Cytokine Release Syndrome (CRS) da CAR-T, Artrite Reumatoide</td>
                  <td className="p-3">Antagonista recettoriale competitivo, aborto della tempesta citochinica</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabella 18.2 */}
        <div className="space-y-3">
          <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" /> Tabella 18.2: Piattaforme Avanzate a Confronto
          </h4>
          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-mono">
                  <th className="p-3">Piattaforma</th>
                  <th className="p-3">Struttura & Formato</th>
                  <th className="p-3">Emivita</th>
                  <th className="p-3">Meccanismo Effettore Chiave</th>
                  <th className="p-3">Tossicità / Criticità Clinica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Naked mAbs (IgG1/IgG4)</td>
                  <td className="p-3">Immunoglobulina intera (150 kDa)</td>
                  <td className="p-3">21 - 28 giorni</td>
                  <td className="p-3">Neutralizzazione, ADCC, CDC, Checkpoint blockade</td>
                  <td className="p-3">Reazioni all'infusione, aplasia B-cellulare secondaria</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">BiTE (Dual-targeting)</td>
                  <td className="p-3">Fusione tandem di 2 scFv privi di Fc (55 kDa)</td>
                  <td className="p-3 text-rose-700 font-bold">2 - 4 ore (infusione continua)</td>
                  <td className="p-3">Attivazione T cellulare CD3-dipendente senza TCR-MHC</td>
                  <td className="p-3">Sindrome da rilascio di citochine, neurotossicità precoce</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">ADC (Antibody-Drug Conjugates)</td>
                  <td className="p-3">mAb intero + Linker chimico + Tossina chemioterapica</td>
                  <td className="p-3">14 - 21 giorni</td>
                  <td className="p-3">Rilascio endocitico lisosomiale di veleni mitotici o inibitori topoisomerasi</td>
                  <td className="p-3">Polmonite interstiziale, trombocitopenia, neuropatia periferica</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Radioimmunoterapia (RIT)</td>
                  <td className="p-3">mAb coniugato a chelatore + Radioisotopo α/β (¹⁷⁷Lu, ²¹¹At)</td>
                  <td className="p-3">Variabile (ore / giorni in base all'isotopo)</td>
                  <td className="p-3">Irradiazione loco-regionale intratumorale ed effetto crossfire</td>
                  <td className="p-3">Mielotossicità, radioprotezione del paziente, emissione gamma</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Cellule CAR-T</td>
                  <td className="p-3">Linfocita T vivo transgenico con scFv + ζ + CD28/4-1BB</td>
                  <td className="p-3 text-emerald-700 font-bold">Mesi - Anni (Cellula vivente replicante)</td>
                  <td className="p-3">Citotossicità perenne, proliferazione autonoma contro neoantigeni</td>
                  <td className="p-3 text-rose-700 font-bold">Cytokine Release Syndrome (CRS), ICANS, On-target off-tumor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={quizQuestions} lessonNumber={18} title="Verifica dell'Apprendimento · Lezione 18" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={flashcards} lessonNumber={18} title="Flashcard di Ripasso Attivo · Lezione 18" />
    </div>
  );
};
