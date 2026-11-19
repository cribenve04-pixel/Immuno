import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Shield,
  Zap,
  Activity,
  AlertTriangle,
  Award,
  BookOpen,
  CheckCircle,
  HelpCircle,
  RotateCw,
  Sparkles,
  Info,
  ChevronRight,
  Dna,
  Layers,
  HeartPulse,
  Sliders,
  FileText,
  UserCheck,
  Flame,
  ArrowRight,
  Bug,
  Brain,
  Pill,
  GitMerge
} from 'lucide-react';

interface Lezione23ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export function Lezione23View({ isSerif, fontSize }: Lezione23ViewProps) {
  // Simulator 1: GALT & IgA Transcytosis Lab
  const [transcytosisStep, setTranscytosisStep] = useState<1 | 2 | 3 | 4>(1);

  // Simulator 2: Gut-Brain & Dysbiosis Lab
  const [gutState, setGutState] = useState<'eubiosis' | 'antibiotics' | 'crohn_nod2'>('eubiosis');

  // Flashcards state
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  // Quiz state
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showQuizExplanations, setShowQuizExplanations] = useState<Record<number, boolean>>({});


  const toggleCard = (id: number) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAnswer = (questionId: number, optionLetter: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionLetter }));
    setShowQuizExplanations((prev) => ({ ...prev, [questionId]: true }));
  };

  const proseClass = `${isSerif ? 'font-serif-body' : 'font-sans'} ${
    fontSize === 'large' ? 'text-base sm:text-lg leading-relaxed' : 'text-sm sm:text-base leading-relaxed'
  } text-slate-800 space-y-4`;

  
  const FLASHCARDS = [
  {
    "id": 1,
    "front": "Perché TLR-5 negli enterociti sani non si attiva in risposta ai miliardi di batteri flagellati del lume intestinale?",
    "back": "Perché è espresso esclusivamente sulla membrana basolaterale dell'enterocita, non sul polo apicale. Si attiva solo in caso di rottura giunzionale e penetrazione batterica.",
    "category": "POLARIZZAZIONE TLR-5"
  },
  {
    "id": 2,
    "front": "In che modo le mutazioni di NOD2 predispongono allo sviluppo del Morbo di Crohn?",
    "back": "Aboliscono la secrezione di α-defensine dalle cellule di Paneth. Il mancato confinamento causa invasione batterica delle cripte e flogosi cronica transmurale (Th1/Th17).",
    "category": "MUTAZIONI NOD2 & CROHN"
  },
  {
    "id": 3,
    "front": "Quali proprietà definiscono i macrofagi della lamina propria come \"anergici all'infiammazione\"?",
    "back": "Fagocitano efficacemente ma non fanno burst ossidativo, non esprimono B7 (CD80/86), non rilasciano IL-12/TNF e secernono costitutivamente IL-10.",
    "category": "MACROFAGI INTESTINALI"
  },
  {
    "id": 4,
    "front": "Qual è il ruolo funzionale delle cellule M nell'epitelio associato ai follicoli (FAE)?",
    "back": "Operano la transcitosi: captano particelle ed antigeni dal lume per endocitosi apicale e li riversano intatti nella tasca basolaterale per le cellule dendritiche.",
    "category": "CELLULE M & FAE"
  },
  {
    "id": 5,
    "front": "Quali molecole di homing vengono impresse sui linfociti dall'acido retinoico nei linfonodi mesenterici?",
    "back": "L'integrina α4β7 (che lega MAdCAM-1 sulle venule mucosali) e il recettore CCR9 (che lega la chemochina CCL25 del tenue).",
    "category": "CODICE DI HOMING GALT"
  },
  {
    "id": 6,
    "front": "Come fanno le IgA dimeriche ad attraversare l'epitelio e da cosa sono protette nel lume?",
    "back": "Legano il recettore pIgR basolaterale, compiono transcitosi apicale e vengono rilasciate con la Componente Secretoria (SC) che le protegge dalle proteasi.",
    "category": "TRANSCITOSI DELLE IgA"
  }
];
  const QUIZ_QUESTIONS = [
  {
    "id": 1,
    "question": "Quale citochina è la principale regolatrice ed induttrice della secrezione di muco da parte delle cellule caliciformi (goblet cells)?",
    "options": [
      "Interleuchina-12 (IL-12)",
      "Interleuchina-13 (IL-13)",
      "Interferone-gamma (IFN-γ)",
      "IL-2",
      "TNF-β"
    ],
    "correctIndex": 1,
    "explanation": "Risposta Esatta: B. Come sottolineato a lezione, sebbene citochine innate come IL-1 e TNF aumentino la produzione di muco, la citochina che primariamente regola ed incrementa l'attività delle goblet cells è l'Interleuchina-13 (IL-13)."
  },
  {
    "id": 2,
    "question": "Dove è localizzato fisiologicamente il recettore TLR-5 sulle cellule epiteliali intestinali (enterociti)?",
    "options": [
      "Esclusivamente sulla membrana apicale rivolta verso il lume",
      "Esclusivamente sulla membrana basolaterale",
      "Sulla membrana nucleare delle cellule M",
      "Sulla superficie degli eritrociti"
    ],
    "correctIndex": 1,
    "explanation": "Risposta Esatta: B. TLR-5 è espresso solo sulla superficie basolaterale; ciò impedisce l'attivazione innescata dalla flagellina dei batteri commensali luminali, scatenando l'infiammazione solo se i batteri penetrano la barriera."
  },
  {
    "id": 3,
    "question": "Quale recettore intracellulare, la cui mutazione predispone al Morbo di Crohn, stimola la produzione di defensine nelle cellule di Paneth?",
    "options": [
      "TLR-4",
      "NOD2",
      "RIG-I",
      "MDA5",
      "cGAS"
    ],
    "correctIndex": 1,
    "explanation": "Risposta Esatta: B. NOD2 riconosce il muramil dipeptide; mutazioni con perdita di funzione riducono la produzione di defensine da parte delle cellule di Paneth, causando mancato confinamento batterico e colite cronica transmurale."
  },
  {
    "id": 4,
    "question": "Come si comportano i macrofagi residenti nella lamina propria intestinale rispetto alla produzione citochinica e al burst respiratorio?",
    "options": [
      "Secernono massicce quantità di IL-12 e TNF-α inducendo flogosi continua",
      "Attivano un burst respiratorio massivo con elevatissimi livelli di ROS",
      "Fagocitano efficacemente ma non attivano il burst ossidativo, non esprimono B7 e producono costitutivamente IL-10",
      "Non sono capaci di fagocitosi",
      "Producono esclusivamente istamina"
    ],
    "correctIndex": 2,
    "explanation": "Risposta Esatta: C. I macrofagi intestinali sono anergici all'infiammazione: eliminano detriti cellulari e microbi senza liberare citochine infiammatorie né specie reattive dell'ossigeno, rilasciando costitutivamente la citochina soppressiva IL-10."
  },
  {
    "id": 5,
    "question": "Quale metabolita derivato dalla fermentazione batterica delle fibre è un potente induttore del differenziamento dei linfociti T regolatori (Treg) tramite inibizione di HDAC?",
    "options": [
      "Acido Lattico",
      "Butirrato (Acido grasso a catena corta - SCFA)",
      "Colesterolo",
      "Acido Folico",
      "Bilirubina"
    ],
    "correctIndex": 1,
    "explanation": "Risposta Esatta: B. Gli acidi grassi a catena corta (in particolare il butirrato) inibiscono le istone deacetilasi promuovendo l'acetilazione del promotore di Foxp3 e guidando il differenziamento dei Treg intestinali."
  },
  {
    "id": 6,
    "question": "Circa quale percentuale della serotonina corporea totale viene sintetizzata a livello dell'intestino dalle cellule enterocromaffini?",
    "options": [
      "Meno del 5%",
      "Circa il 20%",
      "Oltre il 90%",
      "Il 50%"
    ],
    "correctIndex": 2,
    "explanation": "Risposta Esatta: C. Più del 90% della serotonina totale è sintetizzata nelle cellule enteroendocrine della mucosa intestinale, dove stimola i neuroni enterici e trasmette segnali al cervello tramite il nervo vago."
  },
  {
    "id": 7,
    "question": "Quale citochina rilasciata dalle cellule con il ciuffo (tuft cells) mantiene costitutivamente le cellule linfoidi innate di tipo 2 (ILC2)?",
    "options": [
      "Interleuchina-25 (IL-25)",
      "IL-12",
      "IL-2",
      "IFN-α",
      "TNF-α"
    ],
    "correctIndex": 0,
    "explanation": "Risposta Esatta: A. Le cellule con il ciuffo secernono costitutivamente IL-25 a livello basale, mantenendo la popolazione delle ILC2 che rilasciano IL-13 per la produzione fisiologica di muco."
  },
  {
    "id": 8,
    "question": "Quale molecola di adesione endoteliale della lamina propria intestinale viene riconosciuta dall'integrina α4β7 espressa dai linfociti mucosali?",
    "options": [
      "ICAM-1",
      "VCAM-1",
      "MAdCAM-1",
      "Selectina-E",
      "PECAM-1 (CD31)"
    ],
    "correctIndex": 2,
    "explanation": "Risposta Esatta: C. L'integrina α4β7, indotta dall'acido retinoico nei linfociti durante il priming nei MLN, lega selettivamente MAdCAM-1 espressa sull'endotelio dei vasi mucosali intestinali."
  },
  {
    "id": 9,
    "question": "Quale recettore transmembrana media la transcitosi delle IgA dimeriche dalla membrana basolaterale al polo apicale dell'enterocita?",
    "options": [
      "FcRn (recettore Fc neonatale)",
      "pIgR (Recettore Polimerico delle Immunoglobuline)",
      "CD16",
      "FcγRIIB",
      "CR1"
    ],
    "correctIndex": 1,
    "explanation": "Risposta Esatta: B. Il recettore pIgR lega le IgA dimeriche (unite da catena J) sul lato basolaterale e le trasporta nel lume, dove viene clivato lasciando la Componente Secretoria (SC) unita al dimero."
  },
  {
    "id": 10,
    "question": "Quale fenotipo caratterizza i linfociti intraepiteliali (IEL) residenti a livello dell'epitelio intestinale in condizioni omeostatiche?",
    "options": [
      "Linfociti B secernenti IgM",
      "Linfociti citotossici CD8+ (spesso con omodimero CD8αα) con recettori NK e TCR a diversità ridotta",
      "Macrofagi M1 iperattivi",
      "Linfociti Th2 produttori di IL-5",
      "Neutrofili immaturi a banda"
    ],
    "correctIndex": 1,
    "explanation": "Risposta Esatta: B. Gli IEL sono per la maggior parte cellule CD8αα+ (sia TCRαβ che TCRγδ) dotate di recettori NK e recettori di attivazione innati, specializzate nell'eliminare enterociti danneggiati o stressati."
  }
];

  return (
    <article className="space-y-12">
      {/* Header Didattico Ufficiale */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-150 pb-4 mb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">Lezione 23</span>
            <span>·</span>
            <span>20 Novembre 2025 (1ª e 2ª ora)</span>
            <span>·</span>
            <span>Docente: <strong>Prof.ssa Rosa Molfetta</strong></span>
          </div>
          <div className="text-xs font-mono text-slate-500">
            Sbobinatori: <strong>Ludovica Bianco</strong> (1ª ora), <strong>Francesco Berti</strong> (2ª ora) | Revisori: <strong>Michela Bianchi</strong>, <strong>Carmen Bertuca</strong>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-serif-heading">
          Immunità Mucosale & GALT: Microbioma, Barriere Epiteliali, IgA Secretorie & Asse Intestino-Cervello
        </h1>

        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          Trattazione monografica organica sul più vasto compartimento immunitario dell'organismo:
          la sfida biologica di una superficie di 400 m² continuamente esposta a 25–30 kg/anno di proteine alimentari e ad oltre 10¹⁴ batteri commensali;
          l'architettura a doppio compartimento del GALT (Placche del Peyer induttive vs Lamina Propria effettrice);
          le specializzazioni epiteliali (cellule M, cellule di Paneth, goblet cells regolate da IL-13, tuft cells con IL-25);
          i macrofagi anergici all'infiammazione e la polarizzazione basolaterale di TLR-5;
          le basi molecolari del Morbo di Crohn da mutazioni di NOD2;
          l'immunometabolismo degli acidi grassi a catena corta (SCFA) e della via IDO/chinurenina/AhR del triptofano;
          la comunicazione bidirezionale dell'asse Intestino-Cervello (Gut-Brain Axis);
          l'imprinting di homing impresso dall'acido retinoico (CCR9, α4β7, MAdCAM-1) e la biofisica della transcitosi delle IgA dimeriche mediata da pIgR.
        </p>
      </div>

      <div className={proseClass}>
        {/* 23.1 ARCHITETTURA MUCOSE & TOLLERANZA ORALE */}
        <section id="sec-23-1" className="space-y-4">
          <div className="flex items-center gap-2 text-emerald-700">
            <Shield className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              23.1 Architettura dei Tessuti Mucosi & Il Paradosso della Tolleranza Orale
            </h2>
          </div>

          <p>
            L'<strong>immunità mucosale</strong> presiede alla sorveglianza e alla difesa di tutti i tessuti dell'organismo rivestiti da epiteli mucosi: il tratto gastrointestinale, l'apparato respiratorio, l'apparato urogenitale e le ghiandole esocrine associate (lacrimali, salivari e mammarie).
          </p>

          <p>
            Questi epiteli presentano un vincolo fisiologico ineludibile: per assolvere alla loro funzione primaria di <strong>scambio con l'ambiente esterno</strong> (assorbimento di nutrienti nell'intestino, diffusione dei gas nei polmoni), devono essere necessariamente <strong>estremamente sottili, monostratificati e permeabili</strong>. Questa indispensabile permeabilità li rende intrinsecamente <em>vulnerabili all'attacco e alla penetrazione di agenti patogeni</em>.
          </p>

          <p>
            Nel tratto gastrointestinale umano, la presenza di villi e microvilli dell'orletto a spazzola amplifica la superficie assorbente fino a raggiungere un'estensione complessiva colossale di <strong>circa 400 m²</strong> (l'equivalente di due campi da tennis!). Su questa superficie si verifica una stimolazione antigenica incessante e quantitativamente impressionante:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
            <li><strong>Proteine Dietetiche</strong>: l'organismo introduce ed elabora mediamente <strong>25–30 kg di proteine alimentari all'anno</strong>, ciascuna delle quali rappresenta una potenziale molecola non-self estranea.</li>
            <li><strong>Microbiota Commensale</strong>: un consorzio ecologico di oltre <strong>10¹⁴ microrganismi</strong> (batteri, funghi e virus non patogeni).</li>
            <li><strong>Antigeni Inalati o Sessuali</strong>: polveri, pollini, allergeni respiratori e fluidi seminali.</li>
          </ul>

          <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs font-sans">
            <h4 className="font-bold text-emerald-950 text-sm mb-1.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              Il Grande Paradosso Biologico dell'Immunità Mucosale
            </h4>
            <p className="text-emerald-900 m-0 leading-relaxed">
              Il sistema immunitario mucosale deve risolvere quotidianamente una sfida computazionale straordinaria: <strong>distinguere gli antigeni non-self innocui (proteine del cibo, microbi commensali) da quelli nocivi (patogeni invasivi)</strong>.
              <br /><br />
              Se il sistema reagisse contro il cibo o i commensali, si scatenerebbero intolleranze alimentari devastanti (celiachia, allergie) o coliti croniche autodistruttive; se invece rimanesse passivo di fronte a batteri o virus invasivi, l'ospite soccomberebbe a infezioni fulminanti. La soluzione evolutiva è l'instaurazione di una <strong>tolleranza mucosale attiva (Tolleranza Orale)</strong> verso il non-self innocuo, preservando al contempo una pronta reattività effettrice (risposta "pro-attiva") contro i microbi patogeni.
            </p>
          </div>
        </section>

        {/* 23.2 IL MICROBIOMA IN NUMERI & PROTEZIONE */}
        <section id="sec-23-2" className="space-y-4">
          <div className="flex items-center gap-2 text-indigo-700">
            <Bug className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              23.2 Il Microbioma Intestinale in Numeri, Rapporti Simbiotici & Difesa Diretta e Indiretta
            </h2>
          </div>

          <p>
            Come illustrato dalla Prof.ssa Molfetta nella slide 2 (<em>The Importance of the Microbiome by the Numbers</em>), l'essere umano è un vero e proprio "super-organismo" olobiotico:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-sans text-xs">
            <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
              <span className="text-slate-400 font-mono text-[10px] block">NUMERO BATTERI</span>
              <strong className="text-xl font-black text-indigo-700 block mt-0.5">10–100 Trilioni</strong>
              <span className="text-[10px] text-slate-500">10 volte le cellule umane</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
              <span className="text-slate-400 font-mono text-[10px] block">GENI PROCARIOTI</span>
              <strong className="text-xl font-black text-indigo-700 block mt-0.5">&gt; 3.3 Milioni</strong>
              <span className="text-[10px] text-slate-500">100 volte i geni umani (~22.000)</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
              <span className="text-slate-400 font-mono text-[10px] block">SPECIE DISTINTE</span>
              <strong className="text-xl font-black text-indigo-700 block mt-0.5">&gt; 1.000</strong>
              <span className="text-[10px] text-slate-500">Bacteroidetes, Firmicutes</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
              <span className="text-slate-400 font-mono text-[10px] block">DENSITÀ MASSIMA</span>
              <strong className="text-xl font-black text-indigo-700 block mt-0.5">Colon (Crasso)</strong>
              <span className="text-[10px] text-slate-500">Fino a 10¹¹-10¹² batteri/g</span>
            </div>
          </div>

          <p className="mt-3">
            La distribuzione non è omogenea: la concentrazione e la diversità aumentano in senso prossimo-distale. Nello stomaco, a causa del pH acido estremo, sopravvivono poche specie specializzate (tra cui <em>Helicobacter pylori</em>); nel tenue predominano enterococchi, lattobacilli e streptococchi; nel colon si raggiunge la massima ricchezza ecologica con ceppi anaerobi obbligati.
          </p>

          <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-4">
            La Duplice Funzione di Difesa del Microbiota Commensale
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-300 space-y-2">
              <span className="font-bold text-slate-900 text-sm block">1. Protezione Diretta (Resistenza alla Colonizzazione)</span>
              <p className="text-slate-700 m-0 leading-relaxed">
                • <strong>Competizione di Spazio:</strong> i batteri commensali formano un biofilm biologico compatto che maschera i recettori di adesione epiteliali, impedendo fisicamente ai microbi patogeni di attraccare.
                <br />
                • <strong>Competizione Metabolica:</strong> consumano avidamente i nutrienti e gli oligoelementi necessari alla replicazione patogena.
                <br />
                • <strong>Inattivazione di Tossine:</strong> degradano enzimaticamente tossine microbiche e producono batteriocine ad azione battericida mirata.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-300 space-y-2">
              <span className="font-bold text-blue-900 text-sm block">2. Protezione Indiretta (Modulazione Omeostatica)</span>
              <p className="text-blue-950 m-0 leading-relaxed">
                • Rilasciano metaboliti (acidi grassi a catena corta, derivati del triptofano) che fungono da segnali di sopravvivenza per l'epitelio.
                <br />
                • Stimolano la proliferazione cellulare delle cripte e il rafforzamento delle giunzioni occludenti (*tight junctions*).
                <br />
                • Inducono lo sviluppo post-natale delle strutture linfoidi e orientano le cellule dendritiche e i macrofagi verso un profilo tollerogenico (*Treg* ed *IL-10*).
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs font-sans mt-3">
            <h4 className="font-bold text-amber-950 text-sm mb-1 flex items-center gap-2">
              <Pill className="w-4 h-4 text-amber-700" />
              L'Evidenza Clinica della Disbiosi da Terapie Antibiotiche
            </h4>
            <p className="text-amber-900 m-0 leading-relaxed">
              La dimostrazione più evidente dell'essenzialità del microbiota deriva dai trattamenti antibiotici prolungati o ad ampio spettro: distruggendo la flora commensale, viene abbattuta la resistenza alla colonizzazione; la barriera epiteliale perde trofismo e diventa più permeabile, aprendo la strada all'attecchimento di patogeni opportunisti resistenti, come <strong>Clostridioides difficile</strong>, che rilascia enterotossine necrosanti causando la grave colite pseudomembranosa.
            </p>
          </div>
        </section>

        {/* 23.3 ANATOMIA MALT / GALT: INDUTTIVO VS EFFETTORE */}
        <section id="sec-23-3" className="space-y-4">
          <div className="flex items-center gap-2 text-rose-700">
            <Layers className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              23.3 Anatomia Funzionale del GALT: Compartimento Induttivo vs Compartimento Effettore
            </h2>
          </div>

          <p>
            Tutte le strutture linfoidi e le cellule immunitarie disseminate nelle mucose costituiscono il <strong>MALT (Mucosal-Associated Lymphoid Tissue)</strong>. Il distretto più esteso e specializzato è il <strong>GALT (Gut-Associated Lymphoid Tissue)</strong>, che si organizza rigidamente in due compartimenti funzionali distinti:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
            {/* Compartimento Induttivo */}
            <div className="p-4 rounded-xl bg-purple-50/80 border border-purple-200 space-y-2">
              <span className="font-bold text-purple-950 text-sm block">
                1. Compartimento Induttivo (Priming & Attivazione Naive)
              </span>
              <p className="text-purple-950 m-0 leading-relaxed">
                È la sede in cui gli antigeni luminali vengono catturati, processati e presentati ai linfociti T e B vergini (naive), avviando la risposta clonale. Comprende:
                <br /><br />
                • <strong>Placche del Peyer (PP)</strong>: strutture linfoidi follicolari organizzate situate costitutivamente nella sottomucosa e lamina propria dell'ileo. Contengono follicoli ricchi di linfociti B con centri germinativi attivi, aree T interfollicolari (linfociti CD4+ e CD8+ naive) e cellule dendritiche.
                <br />
                • <strong>Follicoli Linfoidi Isolati (ILF)</strong>: centinaia di minuscoli aggregati linfoidi disseminati nel tenue e nel colon.
                <br />
                • <strong>Linfonodi Mesenterici (MLN)</strong>: i più grandi linfonodi dell'organismo, situati alla radice del mesentere, collegati vasi linfatici afferenti provenienti dalla parete intestinale.
              </p>
            </div>

            {/* Compartimento Effettore */}
            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-2">
              <span className="font-bold text-emerald-950 text-sm block">
                2. Compartimento Effettore (Azione Locale & Secrezione)
              </span>
              <p className="text-emerald-950 m-0 leading-relaxed">
                È il compartimento diffuso e disperso in cui i linfociti attivati fanno ritorno per svolgere le loro funzioni esecutive. Comprende:
                <br /><br />
                • <strong>Lamina Propria</strong>: lo strato connettivale lasso sottomucoso, riccamente vascolarizzato, che accoglie milioni di <em>plasmacellule secernenti IgA</em>, linfociti T effettori/memoria (soprattutto CD4+ Th17, Th1 e Treg), macrofagi residenti anergici, mastociti, eosinofili e cellule dendritiche.
                <br />
                • <strong>Epitelio Intestinale</strong>: sede dei <strong>Linfociti Intraepiteliali (IEL)</strong>, per la maggior parte linfociti T citotossici CD8+ intercalati tra un enterocita e l'altro a stretto contatto con il lume.
              </p>
            </div>
          </div>
        </section>

        {/* 23.4 SPECIALIZZAZIONI EPITELIALI: CELLULE M, PANETH, GOBLET, TUFT */}
        <section id="sec-23-4" className="space-y-4">
          <div className="flex items-center gap-2 text-amber-700">
            <Zap className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              23.4 Specializzazioni Cellulari Epiteliali: Cellule M, Cellule di Paneth, Goblet Cells & Tuft Cells
            </h2>
          </div>

          <p>
            L'epitelio intestinale è un mosaico altamente differenziato in cui gli enterociti assorbenti classici convivono con popolazioni cellulari ultra-specializzate per l'immunosorveglianza:
          </p>

          <div className="space-y-3 font-sans text-xs">
            {/* Cellule M */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-950 text-sm">
                  1. Cellule M (Microfold Cells) — Il Cancello della Transcitosi Antigenica
                </span>
                <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-900 font-mono font-bold">Placche del Peyer (FAE)</span>
              </div>
              <p className="text-slate-700 m-0 leading-relaxed">
                Localizzate esclusivamente nell'<strong>epitelio associato ai follicoli (FAE - Follicle-Associated Epithelium)</strong> che sovrasta le placche del Peyer. Non possiedono i microvilli fitti dell'orletto a spazzola né lo spesso strato di glicocalice/muco, permettendo agli antigeni luminali di prendere contatto intimo con la membrana apicale.
                <br />
                <strong>Funzione di Transcitosi:</strong> internalizzano particelle, batteri intatti e macromolecole per endocitosi/fagocitosi apicale, trasportandoli rapidamente in vescicole transcitosiche e rilasciandoli intatti per esocitosi nella loro <strong>tasca basolaterale profonda</strong>. In questa tasca stazionano permanentemente cellule dendritiche e linfociti B e T naive pronti a captare l'antigene.
              </p>
            </div>

            {/* Cellule di Paneth */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="font-bold text-slate-950 text-sm block">
                2. Cellule di Paneth — Le Sentinelle delle Cripte di Lieberkühn
              </span>
              <p className="text-slate-700 m-0 leading-relaxed">
                Situate sul fondo delle cripte ghiandolari dell'intestino tenue, proprio accanto alle <strong>cellule staminali epiteliali Lgr5⁺</strong> (che rigenerano l'intero epitelio ogni 4-5 giorni).
                <br />
                Secernono massicce quantità di <strong>peptidi antimicrobici (AMPs)</strong>: <strong>α-defensine (HD-5, HD-6)</strong>, <strong>lisozima</strong>, fosfolipasi A2 e la lectina battericida <strong>REG3γ</strong> (che lega il peptidoglicano dei Gram-positivi). Questa batteria biochimica crea una "zona cuscinetto sterile" che protegge le cellule staminali da insulti microbici.
              </p>
            </div>

            {/* Goblet Cells */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-950 text-sm">
                  3. Cellule Caliciformi Mucipare (Goblet Cells) — Il Ruolo Cruciale dell'IL-13
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-mono font-bold">MUC2 & IL-13</span>
              </div>
              <p className="text-slate-700 m-0 leading-relaxed">
                Cellule secretorie specializzate nella sintesi ed esocitosi delle <strong>mucine (in particolare MUC2)</strong>, glicoproteine ad altissimo peso molecolare che idratandosi formano il gel mucoso protettivo.
                <br />
                <em>Perla del Corso:</em> La produzione basale di muco è continua, ma gli stimoli infiammatori possono incrementarla drasticamente. Tra tutte le citochine, <strong>l'Interleuchina-13 (IL-13) è il principale fattore regolatore ed induttore della secrezione di muco</strong> da parte delle goblet cells (le quali esprimono ad alta densità il recettore IL-4Rα/IL-13Rα1).
              </p>
            </div>

            {/* Tuft Cells */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="font-bold text-slate-950 text-sm block">
                4. Cellule con il Ciuffo (Tuft Cells) — Sensori Chemosensoriali & Asse IL-25 / ILC2
              </span>
              <p className="text-slate-700 m-0 leading-relaxed">
                Riconoscibili per un ciuffo apicale di lunghi microvilli rigidi dotati di recettori del gusto (TAS2R) e succinato. In condizioni basali o in risposta a metaboliti parassitari, le Tuft cells secernono costitutivamente l'allarmina <strong>Interleuchina-25 (IL-25)</strong>, che mantiene in vita e stimola le cellule linfoidi innate di tipo 2 (<strong>ILC2</strong>), le quali a loro volta rilasciano IL-13 alimentando il ricambio di muco.
              </p>
            </div>
          </div>
        </section>

        {/* 23.5 L'EPITELIO COME BARRIERA INTERATTIVA: TLR-5 & NOD2 (CROHN) */}
        <section id="sec-23-5" className="space-y-4">
          <div className="flex items-center gap-2 text-rose-800">
            <AlertTriangle className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              23.5 L'Epitelio come Barriera Interattiva: Polarizzazione di TLR-5 & Mutazioni di NOD2 nel Morbo di Crohn
            </h2>
          </div>

          <p>
            L'epitelio intestinale non è una barriera inerte, ma un <strong>sensore biochimico attivo</strong> costantemente sintonizzato sui PAMP del microbiota luminale tramite recettori PRR:
          </p>

          <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 text-xs font-sans space-y-2">
            <h4 className="font-bold text-slate-900 text-sm m-0">
              La Polarizzazione Spaziale di TLR-5: Perché i Batteri nel Lume Non Attivano Flogosi?
            </h4>
            <p className="text-slate-700 m-0 leading-relaxed">
              Il recettore <strong>TLR-5</strong> riconosce la <em>flagellina monomerica</em> dei batteri flagellati. Negli enterociti sani, TLR-5 è espresso <strong>esclusivamente sulla superficie della membrana basolaterale</strong>, mentre è completamente assente dal polo apicale rivolto verso il lume!
              <br />
              Finché i miliardi di batteri commensali flagellati risiedono nel lume, non possono toccare TLR-5 e non scatenano alcuna infiammazione. Solo se si verifica una lesione delle tight junctions e i batteri oltrepassano la barriera raggiungendo lo spazio basolaterale, la flagellina ingaggia TLR-5, attivando la cascata MyD88 / NF-κB e scatenando il richiamo di emergenza dei neutrofili.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-red-50 border border-red-300 text-xs font-sans space-y-2 mt-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-red-950 text-sm">
                La Genetica del Morbo di Crohn: Il Ruolo del Recettore Citosolico NOD2
              </span>
              <span className="px-2 py-0.5 rounded bg-red-100 text-red-900 font-mono font-bold">IBD Genetics</span>
            </div>
            <p className="text-red-950 m-0 leading-relaxed">
              Il recettore intracellulare citosolico <strong>NOD2 (CARD15)</strong> riconosce il muramil dipeptide (MDP) derivato dal peptidoglicano batterico. Nelle cellule di Paneth e negli enterociti, la stimolazione basale di NOD2 attiva la sintesi e la secrezione continua di <strong>α-defensine</strong>, mantenendo confinato il microbiota.
              <br /><br />
              <strong>Patogenesi Molecolare nel Morbo di Crohn:</strong>
              <br />
              Le mutazioni con perdita di funzione del gene <em>NOD2</em> (frequenti nei pazienti affetti da Morbo di Crohn) aboliscono la produzione di defensine nelle cripte. Privi di questo scudo antimicrobico, i batteri commensali proliferano a ridosso dell'epitelio, invadono la lamina propria e scatenano una stimolazione cronica massiva del sistema immunitario, che risponde con una <strong>flogosi transmurale granulomatosa distruttiva (guidata da Th1 e Th17)</strong> che porta a stenosi, ulcere e fistole intestinali.
            </p>
          </div>
        </section>

        {/* 23.6 MACROFAGI INTESTINALI ANERGICI */}
        <section id="sec-23-6" className="space-y-4">
          <div className="flex items-center gap-2 text-indigo-700">
            <UserCheck className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              23.6 I Macrofagi Intestinali della Lamina Propria: Cellule Anergiche all'Infiammazione
            </h2>
          </div>

          <p>
            Mentre i macrofagi dei tessuti periferici e del sangue (monociti) sono pronti a scatenare reazioni infiammatorie furiose al contatto con i microbi, i <strong>macrofagi residenti nella lamina propria intestinale</strong> esibiscono un fenotipo funzionale diametralmente opposto (slide 9):
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-300 space-y-2">
              <span className="font-bold text-slate-900 text-sm block">Cosa Fanno Attivamente</span>
              <ul className="list-disc pl-4 space-y-1 text-slate-700">
                <li><strong>Capacità Fagocitica Eccellente</strong>: inglobano rapidamente particelle di cibo, corpi apoptotici di enterociti desquamati e microbi commensali penetrati accidentalmente.</li>
                <li><strong>Secrezione Costitutiva di IL-10</strong>: producono continuamente elevatissimi livelli di Interleuchina-10, mantenendo un microambiente rigorosamente immunosoppresso e tollerogenico nella lamina propria.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 space-y-2">
              <span className="font-bold text-rose-950 text-sm block">Cosa NON Fanno (Anergia Fiammatoria)</span>
              <ul className="list-disc pl-4 space-y-1 text-rose-950">
                <li><strong>Non Attivano il Burst Ossidativo</strong>: non producono quantità distruttive di ROS (specie reattive dell'ossigeno) o intermedi azotati.</li>
                <li><strong>Bassa/Assente Espressione di Co-Stimolatori</strong>: non esprimono CD80 e CD86, impedendo l'iperattivazione dei linfociti T.</li>
                <li><strong>Nessuna Citochina Pro-Infiammatoria</strong>: non secernono IL-1, IL-6, IL-12 o TNF-α in risposta ai microbi commensali.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 23.7 METABOLITI MICROBIOTA: SCFA & TRIPTOFANO (IDO / AhR) */}
        <section id="sec-23-7" className="space-y-4">
          <div className="flex items-center gap-2 text-purple-700">
            <Dna className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              23.7 Metaboliti del Microbiota: Acidi Grassi a Catena Corta (SCFA / Butirrato) & la Via del Triptofano
            </h2>
          </div>

          <p>
            Il dialogo tra microbiota e sistema immunitario non avviene solo tramite contatti molecolari di superficie, ma soprattutto attraverso una ricca batteria di <strong>metaboliti a basso peso molecolare</strong> capaci di attraversare l'epitelio ed entrare nel nucleo delle cellule immunitarie:
          </p>

          <div className="space-y-3 font-sans text-xs">
            {/* SCFA */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="font-bold text-slate-950 text-sm block">
                1. Acidi Grassi a Catena Corta (SCFA: Butirrato, Propionato, Acetato)
              </span>
              <p className="text-slate-700 m-0 leading-relaxed">
                Prodotti dalla fermentazione batterica anaerobia delle fibre dietetiche non digeribili operata da Clostridi e Bacteroidi.
                <br />
                • <strong>Induzione dei Linfociti T Regolatori (Treg)</strong>: penetrano nei linfociti T naive e fungono da potenti <em>inibitori delle istone deacetilasi (HDAC)</em>; l'iperacetilazione del locus genico del fattore di trascrizione <strong>FOXP3</strong> induce stabilmente il differenziamento in Treg immunosoppressori produttori di IL-10.
                <br />
                • <strong>Carburante degli Enterociti</strong>: il <strong>butirrato</strong> costituisce la fonte energetica primaria per gli enterociti del colon, stimolando la sintesi di proteine giunzionali (claudine) e preservando l'integrità della barriera.
              </p>
            </div>

            {/* Triptofano */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="font-bold text-slate-950 text-sm block">
                2. Il Metabolismo del Triptofano: Asse IDO / Chinurenina & Recettore Nucleare AhR
              </span>
              <p className="text-slate-700 m-0 leading-relaxed">
                Il triptofano alimentare viene convertito secondo tre vie biochimiche principali:
                <br />
                • <strong>Via dell'Enzima IDO (Indoleamina 2,3-diossigenasi)</strong>: espresso da enterociti e cellule dendritiche; converte il 95% del triptofano in <strong>chinurenina</strong> (e infine NAD). La chinurenina induce differenziamento tollerogenico delle cellule dendritiche e sopprime i cloni T autoreattivi.
                <br />
                • <strong>Via dell'Aryl Hydrocarbon Receptor (AhR)</strong>: i batteri commensali degradano il triptofano in derivati indolici (indolo-3-acetato, indolo-3-propionico). Questi composti legano il recettore nucleare <strong>AhR</strong> su cellule dendritiche, Treg e <strong>cellule ILC3</strong>, stimolando la produzione di <strong>IL-22</strong> (rigenerazione epiteliale e defensine).
                <br />
                • <strong>Via della Serotonina (5-HT)</strong>: circa l'1-2% del triptofano viene trasformato in serotonina ad opera della triptofano idrossilasi 1 (TPH1) nelle cellule enteroendocrine.
              </p>
            </div>
          </div>
        </section>

        {/* 23.8 ASSE INTESTINO-CERVELLO (GUT-BRAIN AXIS) */}
        <section id="sec-23-8" className="space-y-4">
          <div className="flex items-center gap-2 text-cyan-700">
            <Brain className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              23.8 L'Asse Bidirezionale Intestino-Cervello (Gut-Brain Axis) & la Serotonina Enterica
            </h2>
          </div>

          <p>
            Uno dei capitoli più affascinanti approfonditi nella lezione dalla Prof.ssa Molfetta (slide 12–14) è la rete di comunicazione neuro-immunologica che collega intimamente l'intestino con il Sistema Nervoso Centrale (SNC):
          </p>

          <div className="p-4 rounded-xl bg-cyan-50/80 border border-cyan-200 text-xs font-sans space-y-2">
            <h4 className="font-bold text-cyan-950 text-sm m-0">
              La Serotonina Intestinale: Più del 90% Prodotta nell'Intestino!
            </h4>
            <p className="text-cyan-950 m-0 leading-relaxed">
              Contrariamente alla credenza comune, <strong>oltre il 90% della serotonina totale dell'organismo umano non è prodotta nel cervello, ma sintetizzata dalle cellule enteroendocrine (enterocromaffini) dell'intestino</strong> a partire dal triptofano, sotto la stimolazione diretta degli acidi grassi a catena corta (SCFA) prodotti dal microbiota commensale!
              <br /><br />
              La serotonina enterica:
              <br />
              1. <em>A livello periferico locale:</em> stimola i neuroni enterici del plesso mioenterico di Auerbach e sottomucoso di Meissner regolando la motilità peristaltica e la secrezione di muco.
              <br />
              2. <em>A livello centrale:</em> stimola le terminazioni afferenti del <strong>nervo vago</strong>, trasmettendo segnali neurochimici direttamente ai nuclei del tronco encefalico e all'encefalo.
            </p>
          </div>

          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
            <li><strong>Permeabilità della Barriera Emato-Encefalica (BEE) agli SCFA</strong>: gli acidi grassi a catena corta rilasciati dal microbiota entrano nel circolo ematico, superano la BEE e modulano la maturazione della microglia cerebrale e la neurogenesi.</li>
            <li><strong>Comunicazione Bidirezionale Discendente</strong>: il sistema nervoso centrale regola a sua volta l'immunità intestinale tramite il tono parasimpatico vagale colinergico (via anti-infiammatoria) e l'<strong>asse ipotalamo-ipofisi-surrene (HPA)</strong> con il rilascio di corticosteroidi immunosoppressori.</li>
            <li><strong>Disbiosi & Malattie Neurodegenerative</strong>: alterazioni della composizione del microbiota sono state associate a fenotipi infiammatori centrali in sclerosi multipla, morbo di Parkinson e disturbi dell'umore.</li>
          </ul>
        </section>

        {/* 23.9 CELLULE LTi & STRUTTURE LINFOIDI TERZIARIE */}
        <section id="sec-23-9" className="space-y-4">
          <div className="flex items-center gap-2 text-indigo-800">
            <GitMerge className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              23.9 Cellule Linfoidi Innate (ILC2, ILC3) e Cellule LTi (Lymphoid Tissue Inducer)
            </h2>
          </div>

          <p>
            Mentre nel sangue e nei tessuti periferici le ILC1 e le cellule NK sono abbondanti, a livello della mucosa intestinale in condizioni di salute <strong>le ILC predominanti sono le ILC2 e le ILC3</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 space-y-2">
              <span className="font-bold text-emerald-950 text-sm block">ILC2 nell'Intestino</span>
              <p className="text-emerald-950 m-0 leading-relaxed">
                Mantenute costitutivamente dall'<strong>IL-25</strong> rilasciata dalle cellule con il ciuffo (*tuft cells*). Secernono <strong>IL-13</strong>, che mantiene attiva la secrezione basale di muco da parte delle goblet cells preservando la barriera idratata.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 space-y-2">
              <span className="font-bold text-amber-950 text-sm block">ILC3 nell'Intestino</span>
              <p className="text-amber-950 m-0 leading-relaxed">
                Stimolate dai metaboliti del triptofano tramite il recettore AhR. Secernono <strong>IL-22</strong>, che agisce sulle cellule epiteliali inducendo la produzione di peptidi antimicrobici (defensine, REG3γ) e la continua sintesi di proteine giunzionali.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-purple-50/80 border border-purple-200 text-xs font-sans mt-3 space-y-2">
            <h4 className="font-bold text-purple-950 text-sm m-0">
              Le Cellule LTi (Lymphoid Tissue Inducer) & L'Organogenesi Linfonodale Fetale
            </h4>
            <p className="text-purple-900 m-0 leading-relaxed">
              Un sottogruppo fondamentale di ILC3 è costituito dalle cellule <strong>LTi (Lymphoid Tissue Inducer)</strong>:
              <br />
              • Durante la vita fetale, esprimono sulla membrana il trimero <strong>Linfotossina-alfa1-beta2 (LTα1β2)</strong>. Il legame al recettore LTβR sulle cellule mesenchimali stromali induce la sintesi delle chemochine omeostatiche:
              <br />
              - <strong>CCL19 e CCL21</strong> (che richiamano linfociti T naive e cellule dendritiche CCR7+).
              <br />
              - <strong>CXCL13</strong> (che richiama i linfociti B CXCR5+).
              <br />
              - <strong>IL-7</strong> (che garantisce la sopravvivenza linfocitaria).
              <br />
              Questo circuito guida l'aggregazione ordinata dei follicoli B e delle aree T, generando i <strong>linfonodi e le placche del Peyer</strong>.
              <br /><br />
              • Nell'adulto, le cellule LTi persistenti possono essere riattivate in contesti di infiammazione cronica inducendo la genesi di <strong>Strutture Linfoidi Terziarie (TLS)</strong> ectopiche direttamente nella lamina propria.
            </p>
          </div>
        </section>

        {/* 23.10 DINAMICA ADATTATIVA: DC CD103+, HOMING (CCR9/a4b7) & IgA SECRETORIE (pIgR) */}
        <section id="sec-23-10" className="space-y-4">
          <div className="flex items-center gap-2 text-emerald-800">
            <Award className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              23.10 DC Tollerogeniche CD103+, Imprinting di Homing Mucosale & Transcitosi delle IgA Secretorie (pIgR)
            </h2>
          </div>

          <p>
            La risposta adattativa intestinale rappresenta il vertice della sofisticazione immunologica mucosale:
          </p>

          <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-3">
            A. Dicotomia delle Cellule Dendritiche Intestinali
          </h3>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
            <li><strong>DC Tollerogeniche (CD103⁺ CX3CR1⁻)</strong>: residenti costitutive della lamina propria. Esprimono l'integrina <strong>CD103 (αE)</strong> ed enzimi della famiglia della retinaldeide deidrogenasi (<strong>RALDH</strong>), che trasformano la Vitamina A alimentare in <strong>Acido Retinoico</strong>. In presenza di <strong>TGF-β</strong>, promuovono il differenziamento dei linfociti T in <strong>Treg immunosoppressori (Foxp3+)</strong> e imprimono il codice di homing mucosale.</li>
            <li><strong>DC Infiammatorie (CD11b⁺ CX3CR1⁺ CD103⁻)</strong>: non sono costitutive; vengono reclutate in massa dal circolo ematico in corso di infezione acuta o rottura della barriera. Producono IL-1, IL-6, IL-12 e IL-23, guidando la differenziazione in linfociti Th1 e Th17 patogenetici.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-6">
            B. Il Codice Molecolare di Homing Mucosale
          </h3>
          <p>
            I linfociti T e B naive che incontrano l'antigene nei linfonodi mesenterici o nelle placche del Peyer ricevono dalle DC l'istruzione di <strong>tornare specificamente alla mucosa intestinale</strong>:
          </p>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs font-sans text-xs space-y-2">
            <p className="m-0 leading-relaxed text-slate-700">
              • <strong>Acido Retinoico</strong>: induce stabilmente sui linfociti attivati l'espressione dell'<strong>integrina α4β7</strong> e del recettore per chemochine <strong>CCR9</strong>.
              <br />
              • <strong>Attraversamento dell'Endotelio</strong>: l'integrina <strong>α4β7</strong> si lega selettivamente all'indirizzina vascolare mucosale <strong>MAdCAM-1</strong> (Mucosal Addressin Cell Adhesion Molecule-1) espressa dalle venule post-capillari della lamina propria intestinale.
              <br />
              • <strong>Chemiotassi</strong>: il recettore <strong>CCR9</strong> guida i linfociti verso il gradiente della chemochina <strong>CCL25</strong>, prodotta costitutivamente dall'epitelio dell'intestino tenue.
              <br />
              • Nel <em>colon</em>, l'homing è guidato dal recettore <strong>CCR10</strong> che lega la chemochina <strong>CCL28</strong>.
              <br />
              • L'ingresso tra gli enterociti per diventare <strong>Linfociti Intraepiteliali (IEL)</strong> richiede l'integrina <strong>αEβ7 (CD103)</strong>, che si ancora alla <strong>E-caderina</strong> degli enterociti.
            </p>
          </div>

          <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-6">
            C. Le Immunoglobuline A (IgA) Secretorie & Transcitosi mediata da pIgR
          </h3>
          <p>
            Nell'intestino le IgA superano le IgG con un rapporto di <strong>40 a 1</strong>. Lo switch isotipico verso le IgA avviene attraverso due vie:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
            <li><strong>Via T-Dipendente (Placche del Peyer & MLN)</strong>: indotta da antigeni proteici e cooperazione T-B guidata da <strong>CD40-CD40L</strong>, alti livelli di <strong>TGF-β</strong> e <strong>Ossido Nitrico (NO)</strong> sintetizzato da DC iNOS+. Genera plasmacellule a lunga vita con mutazioni somatiche producenti <strong>IgA ad alta affinità</strong> contro tossine e patogeni.</li>
            <li><strong>Via T-Indipendente (Lamina Propria)</strong>: indotta da antigeni polisaccaridici del microbiota commensale tramite le citochine innate <strong>BAFF</strong> e <strong>APRIL</strong> prodotte da DC stimolate da TLR. Genera <strong>IgA a bassa affinità</strong> polireattive deputate al confinamento ecologico dei commensali.</li>
          </ul>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 font-sans text-xs space-y-2 mt-3">
            <h4 className="font-bold text-emerald-950 text-sm m-0">
              La Transcitosi delle IgA Dimeriche tramite il Recettore pIgR
            </h4>
            <p className="text-emerald-950 m-0 leading-relaxed">
              Le plasmacellule della lamina propria secernono <strong>IgA in forma dimerica</strong> (due monomeri uniti dalla catena polipeptidica J).
              <br />
              1. Il dimero lega il <strong>recettore polimerico delle immunoglobuline (pIgR)</strong> espresso sulla membrana <em>basolaterale</em> degli enterociti.
              <br />
              2. Il complesso IgA-pIgR viene internalizzato per endocitosi e trasportato attraverso il citoplasma in vescicole transcitosiche verso il <em>polo apicale</em>.
              <br />
              3. Al polo luminale, il pIgR viene clivato enzimaticamente: la porzione extracellulare rimane irreversibilmente legata all'IgA costituendo la <strong>Componente Secretoria (SC)</strong>.
              <br />
              4. L'<strong>IgA secretoria (sIgA)</strong> così formata è straordinariamente resistente alla digestione da parte delle proteasi gastriche e pancreatiche luminali. Nel lume intestinale, la sIgA neutralizza tossine e patogeni, confina i commensali nel muco ed esporta antigeni pericolosi verso l'esterno, senza provocare attivazione infiammatoria o danno collaterale!
            </p>
          </div>

          {/* SIMULATORE 1: GALT & IGA TRANSCYTOSIS LAB */}
          <div id="sim-galt-iga-transcytosis" className="mt-8 pt-6 border-t-2 border-slate-200">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                    Laboratorio Interattivo 1
                  </span>
                  <h3 className="text-xl font-bold font-serif-heading text-white m-0">
                    La Macchina del GALT: Dal Priming Antigenico alla Transcitosi delle sIgA
                  </h3>
                </div>
                <div className="flex gap-1.5 bg-slate-800 p-1 rounded-lg border border-slate-700 text-xs font-mono">
                  {[1, 2, 3, 4].map((step) => (
                    <button
                      key={step}
                      onClick={() => setTranscytosisStep(step as any)}
                      className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                        transcytosisStep === step
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Fase {step}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contenuto Dinamico Fasi */}
              <div className="p-5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-3 font-sans text-xs">
                {transcytosisStep === 1 && (
                  <div>
                    <span className="font-bold text-emerald-400 text-sm block mb-1">
                      Fase 1: Campionamento dell'Antigene via Cellule M (FAE) & Dendriti Trans-Epiteliali
                    </span>
                    <p className="text-slate-300 leading-relaxed m-0">
                      Nelle <strong>Placche del Peyer</strong>, le cellule M catturano gli antigeni luminali (cibo o batteri) e li trasferiscono per transcitosi nella tasca basolaterale dove stazionano le cellule dendritiche. Contemporaneamente, nella lamina propria, le DC CD103+ estroflettono prolungamenti direttamente tra le tight junctions degli enterociti campionando il lume.
                    </p>
                  </div>
                )}

                {transcytosisStep === 2 && (
                  <div>
                    <span className="font-bold text-emerald-400 text-sm block mb-1">
                      Fase 2: Priming nei Linfonodi Mesenterici & Imprinting di Homing con Acido Retinoico
                    </span>
                    <p className="text-slate-300 leading-relaxed m-0">
                      Le cellule dendritiche migrano ai <strong>linfonodi mesenterici (MLN)</strong>. Qui secernono <strong>Acido Retinoico</strong> (sintetizzato dalla Vitamina A tramite RALDH) e <strong>TGF-β</strong>. L'acido retinoico attiva la trascrizione del recettore per chemochine <strong>CCR9</strong> e dell'integrina <strong>α4β7</strong> sui linfociti T e B naive, "indirizzandoli" al ritorno esclusivo nella lamina propria intestinale.
                    </p>
                  </div>
                )}

                {transcytosisStep === 3 && (
                  <div>
                    <span className="font-bold text-emerald-400 text-sm block mb-1">
                      Fase 3: Switch Isotipico verso IgA (TGF-β, CD40L & Ossido Nitrico)
                    </span>
                    <p className="text-slate-300 leading-relaxed m-0">
                      Nei centri germinativi delle placche del Peyer e dei MLN, la cooperazione T-B in presenza di <strong>TGF-β</strong>, <strong>CD40L</strong> e <strong>Ossido Nitrico (NO)</strong> attiva l'enzima AID e induce lo scambio di classe esclusivo verso <strong>IgA</strong>. Si differenziano plasmacellule a lunga vita producenti IgA dimeriche legate dalla catena J.
                    </p>
                  </div>
                )}

                {transcytosisStep === 4 && (
                  <div>
                    <span className="font-bold text-emerald-400 text-sm block mb-1">
                      Fase 4: Homing via MAdCAM-1/CCL25 & Transcitosi Epiteliale tramite pIgR
                    </span>
                    <p className="text-slate-300 leading-relaxed m-0">
                      Le plasmacellule tornano nella lamina propria legando <strong>MAdCAM-1</strong> (tramite α4β7) e <strong>CCL25</strong> (tramite CCR9). Rilasciano IgA dimeriche che legano il <strong>pIgR basolaterale</strong> degli enterociti. Dopo transcitosi apicale, il pIgR viene clivato e l'IgA viene rilasciata nel lume unita alla <strong>Componente Secretoria (SC)</strong>, che la protegge dagli enzimi digestivi per neutralizzare i patogeni.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* SIMULATORE 2: GUT-BRAIN & DISBIOSI */}
          <div id="sim-gut-brain-disbiosi" className="mt-8 pt-6 border-t-2 border-slate-200">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                    Laboratorio Interattivo 2
                  </span>
                  <h3 className="text-xl font-bold font-serif-heading text-white m-0">
                    Asse Intestino-Cervello & Disbiosi Clinica (Morbo di Crohn vs Eubiosi)
                  </h3>
                </div>
                <div className="flex rounded-lg bg-slate-800 p-1 border border-slate-700 text-xs font-sans">
                  <button
                    onClick={() => setGutState('eubiosis')}
                    className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                      gutState === 'eubiosis' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    1. Eubiosi Omeostatica
                  </button>
                  <button
                    onClick={() => setGutState('antibiotics')}
                    className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                      gutState === 'antibiotics' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    2. Disbiosi da Antibiotici
                  </button>
                  <button
                    onClick={() => setGutState('crohn_nod2')}
                    className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                      gutState === 'crohn_nod2' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    3. Morbo di Crohn (NOD2 Mutato)
                  </button>
                </div>
              </div>

              {/* Parametri Comparativi */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans text-xs">
                <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
                  <span className="text-slate-400 font-mono text-[11px] block">STATO DELLA BARRIERA</span>
                  <strong className="text-base font-bold text-white block">
                    {gutState === 'eubiosis'
                      ? 'Integra (Tight Junctions compatte)'
                      : gutState === 'antibiotics'
                      ? 'Permeabile (Leaky Gut)'
                      : 'Ulcere Transmurali & Fistole'}
                  </strong>
                  <span className="text-[11px] text-slate-400">
                    {gutState === 'eubiosis'
                      ? 'Muco denso e continuo (MUC2)'
                      : gutState === 'antibiotics'
                      ? 'Assottigliamento del gel mucoso'
                      : 'Distruzione mucosa e sottomucosa'}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
                  <span className="text-slate-400 font-mono text-[11px] block">PROFILO CELLULARE</span>
                  <strong className="text-base font-bold text-white block">
                    {gutState === 'eubiosis'
                      ? 'DC CD103+ & Treg (Foxp3+)'
                      : gutState === 'antibiotics'
                      ? 'DC infiammatorie CD11b+'
                      : 'Linfociti Th1 & Th17 reattivi'}
                  </strong>
                  <span className="text-[11px] text-slate-400">
                    {gutState === 'eubiosis'
                      ? 'Macrofagi anergici producenti IL-10'
                      : gutState === 'antibiotics'
                      ? 'Reclutamento monocitario dal circolo'
                      : 'Infiltrato massivo di neutrofili ed IFN-γ'}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
                  <span className="text-slate-400 font-mono text-[11px] block">ASSE GUT-BRAIN</span>
                  <strong className="text-base font-bold text-white block">
                    {gutState === 'eubiosis'
                      ? 'Omeostasi (SCFA & 5-HT corretti)'
                      : gutState === 'antibiotics'
                      ? 'Alterato (Crollo SCFA, ansia)'
                      : 'Infiammazione Sistemica & Dolore'}
                  </strong>
                  <span className="text-[11px] text-slate-400">
                    {gutState === 'eubiosis'
                      ? 'Tono vagale fisiologico'
                      : gutState === 'antibiotics'
                      ? 'Bassa sintesi di serotonina'
                      : 'Iperattivazione asse HPA (stress)'}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 text-xs font-sans">
                <p className="m-0 leading-relaxed text-slate-200">
                  {gutState === 'eubiosis' && (
                    <>
                      <strong>Spiegazione Fisiologica:</strong> Il microbiota fermenta le fibre producendo <strong>acidi grassi a catena corta (butirrato)</strong> che nutrono gli enterociti e stimolano le <strong>DC CD103+</strong> a produrre acido retinoico e TGF-β. I linfociti T si differenziano in <strong>Treg</strong>; le plasmacellule rilasciano <strong>IgA dimeriche</strong> che confinano i microbi nel muco senza indurre flogosi.
                    </>
                  )}
                  {gutState === 'antibiotics' && (
                    <>
                      <strong>Quadro da Farmaci:</strong> L'eliminazione dei ceppi anaerobi commensali azzera la produzione di butirrato e riduce la sintesi di serotonina da parte delle cellule enterocromaffini. Il batterio patogeno opportunista <em>C. difficile</em> prolifera senza competizione, rilascia tossine e aumenta la permeabilità intestinale, scatenando colite acuta e alterazioni dell'umore via asse intestino-cervello.
                    </>
                  )}
                  {gutState === 'crohn_nod2' && (
                    <>
                      <strong>Patogenesi del Morbo di Crohn:</strong> Le mutazioni di <strong>NOD2</strong> aboliscono la produzione di <strong>α-defensine</strong> da parte delle cellule di Paneth. I batteri invadono le cripte e attivano TLR-5 basolaterale; la risposta vira su <strong>DC CD11b+</strong> e linfociti <strong>Th1/Th17</strong> iper-reattivi con secrezione di IFN-γ e TNF-α, causando lesioni transmurali segmentarie e granulomi non caseosi.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TABELLA 23.1: ARCHITETTURA GALT */}
        <section id="tabella-23-1" className="space-y-4 pt-6 border-t border-slate-200">
          <div className="flex items-center gap-2 text-slate-900">
            <FileText className="w-5 h-5 text-emerald-700 shrink-0" />
            <h3 className="text-xl font-bold font-serif-heading m-0">
              Tabella 23.1: Architettura Cellulare e Molecolare del GALT
            </h3>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs font-sans text-xs">
            <table className="min-w-full divide-y divide-slate-200 text-left">
              <thead className="bg-slate-50 font-mono text-[11px] text-slate-700 uppercase">
                <tr>
                  <th className="py-2.5 px-3">Tipo Cellulare / Struttura</th>
                  <th className="py-2.5 px-3">Localizzazione</th>
                  <th className="py-2.5 px-3">Marcatori & Recettori</th>
                  <th className="py-2.5 px-3">Mediatori Secreti</th>
                  <th className="py-2.5 px-3">Funzione Biologica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-800">
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-slate-950">Cellule M (Microfold)</td>
                  <td className="py-2.5 px-3">FAE delle Placche del Peyer</td>
                  <td className="py-2.5 px-3 font-mono">Prive di microvilli e glicocalice</td>
                  <td className="py-2.5 px-3">Vescicole transcitosiche</td>
                  <td className="py-2.5 px-3">Transcitosi apicale-basale di antigeni integri alle DC.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-slate-950">Cellule di Paneth</td>
                  <td className="py-2.5 px-3">Fondo cripte intestinali (tenue)</td>
                  <td className="py-2.5 px-3 font-mono">NOD2 citosolico, TLR2/4</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-800">α-defensine, lisozima, REG3γ</td>
                  <td className="py-2.5 px-3">Mantenimento della sterilità e protezione cellule staminali.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-slate-950">Goblet Cells (Caliciformi)</td>
                  <td className="py-2.5 px-3">Disseminate tra gli enterociti</td>
                  <td className="py-2.5 px-3 font-mono">Recettore per IL-13 (IL-13Rα1)</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-800">Mucina MUC2 (gel mucoso)</td>
                  <td className="py-2.5 px-3">Barriera fisica luminale continua e trasporto del muco.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-slate-950">Tuft Cells (Con ciuffo)</td>
                  <td className="py-2.5 px-3">Epitelio intestinale</td>
                  <td className="py-2.5 px-3 font-mono">TAS2R, succinato recettore</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-800">Interleuchina-25 (IL-25)</td>
                  <td className="py-2.5 px-3">Sensing di metaboliti e stimolo basale alle cellule ILC2.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-slate-950">DC Tollerogeniche</td>
                  <td className="py-2.5 px-3">Lamina propria & MLN</td>
                  <td className="py-2.5 px-3 font-mono">CD103⁺ (αE), CX3CR1⁻, RALDH</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-800">Acido Retinoico, TGF-β</td>
                  <td className="py-2.5 px-3">Differenziamento Treg e imprinting homing (CCR9, α4β7).</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-slate-950">Macrofagi Intestinali</td>
                  <td className="py-2.5 px-3">Lamina propria sottomucosa</td>
                  <td className="py-2.5 px-3 font-mono">CD80/86 assente, CD64 assente</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-800">IL-10 costitutivo (no IL-12/TNF)</td>
                  <td className="py-2.5 px-3">Fagocitosi anergica senza danno ossidativo o flogosi.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-slate-950">Linfociti Intraepiteliali (IEL)</td>
                  <td className="py-2.5 px-3">Intercalati tra enterociti</td>
                  <td className="py-2.5 px-3 font-mono">CD8αα⁺, TCRαβ/γδ oligoclonali, NKR</td>
                  <td className="py-2.5 px-3">Perforina, granzimi</td>
                  <td className="py-2.5 px-3">Sorveglianza dell'epitelio ed eliminazione cellule danneggiate.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* TABELLA 23.2: METABOLITI MICROBIOTA */}
        <section id="tabella-23-2" className="space-y-4 pt-6 border-t border-slate-200">
          <div className="flex items-center gap-2 text-slate-900">
            <FileText className="w-5 h-5 text-purple-700 shrink-0" />
            <h3 className="text-xl font-bold font-serif-heading m-0">
              Tabella 23.2: I Metaboliti del Microbiota e la Regolazione Immunitaria
            </h3>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs font-sans text-xs">
            <table className="min-w-full divide-y divide-slate-200 text-left">
              <thead className="bg-slate-50 font-mono text-[11px] text-slate-700 uppercase">
                <tr>
                  <th className="py-2.5 px-3">Metabolita</th>
                  <th className="py-2.5 px-3">Origine Microbica / Dietetica</th>
                  <th className="py-2.5 px-3">Bersaglio & Recettore</th>
                  <th className="py-2.5 px-3">Effetto Biologico & Ruolo Clinico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-800">
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-purple-950">Butirrato (SCFA)</td>
                  <td className="py-2.5 px-3">Fermentazione anaerobia fibre dietetiche</td>
                  <td className="py-2.5 px-3 font-mono">Inibitore HDAC / GPR109A</td>
                  <td className="py-2.5 px-3">Nutrizione enterociti, induzione Treg (FOXP3) e anti-infiammatorio.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-purple-950">Chinurenina</td>
                  <td className="py-2.5 px-3">Metabolismo triptofano via IDO epiteliale</td>
                  <td className="py-2.5 px-3 font-mono">AhR / Mitocondri (NAD)</td>
                  <td className="py-2.5 px-3">Sviluppo di DC tollerogeniche e soppressione clonale reattiva.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-purple-950">Derivati Indolici</td>
                  <td className="py-2.5 px-3">Degradazione triptofano da Lactobacilli</td>
                  <td className="py-2.5 px-3 font-mono">Recettore nucleare AhR</td>
                  <td className="py-2.5 px-3">Induzione di ILC3, secrezione di IL-22 e rigenerazione barriera.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-purple-950">Serotonina (5-HT)</td>
                  <td className="py-2.5 px-3">Cellule enterocromaffini stimolate da SCFA</td>
                  <td className="py-2.5 px-3 font-mono">Recettori 5-HT su neuroni enterici e vago</td>
                  <td className="py-2.5 px-3">Regolazione peristalsi e trasmissione bidirezionale all'encefalo.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-purple-950">Polisaccaride A (PSA)</td>
                  <td className="py-2.5 px-3">Capsula di Bacteroides fragilis</td>
                  <td className="py-2.5 px-3 font-mono">TLR2 su cellule dendritiche</td>
                  <td className="py-2.5 px-3">Induzione di linfociti Treg producenti IL-10 (protezione da colite).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

              {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_QUESTIONS} lessonNumber={23} title="Verifica dell'Apprendimento · Lezione 23" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS} lessonNumber={23} title="Flashcard di Ripasso Attivo · Lezione 23" />
    </div>
  </article>
);
};
