import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import { ConceptMapFlow } from './ConceptMapFlow';
import { MAP_LEZIONE_14_TI_ANTIGENS, MAP_LEZIONE_14_INHIBITORY_CIRCUITS } from '../data/conceptMapsData';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Activity,
  Layers,
  Microscope,
  Dna,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Clock,
  Sliders,
  Syringe,
  XCircle,
  Info,
  Lock,
  Unlock,
  FileText,
  Check,
  Zap,
  Bookmark,
  Target,
  RefreshCw,
  GitBranch,
  Filter
} from 'lucide-react';

interface Lezione14ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione14View: React.FC<Lezione14ViewProps> = ({ isSerif, fontSize }) => {
  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // --- STATO SIMULATORE 1: ANTIGENI TI-1 vs TI-2 vs VACCINO CONIUGATO ---
  const [sim1Mode, setSim1Mode] = useState<'ti1' | 'ti2' | 'td_conjugate'>('ti2');
  const [sim1ComplementOpsonized, setSim1ComplementOpsonized] = useState<boolean>(true);
  const [sim1PatientAge, setSim1PatientAge] = useState<'infant' | 'adult'>('adult'); // Infant < 2 years

  // --- STATO SIMULATORE 2: CIRCUITI INIBITORI (FcγRIIB & CD22) ---
  const [sim2ImmuneComplexes, setSim2ImmuneComplexes] = useState<boolean>(true);
  const [sim2SialicAcidsPresent, setSim2SialicAcidsPresent] = useState<boolean>(true);
  const [sim2BcrStimulated, setSim2BcrStimulated] = useState<boolean>(true);

  // --- STATO FLASHCARDS ---
  const [flashcardIdx, setFlashcardIdx] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // --- STATO QUIZ ---
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // --- STATO QUADERNO NOTE ---
  const [notes, setNotes] = useState<string>(() => {
    return localStorage.getItem('immunologia_lez14_notes') || '';
  });
  const [noteSaved, setNoteSaved] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('immunologia_lez14_notes', notes);
  }, [notes]);

  const handleSaveNote = () => {
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2000);
  };

  // --- DATA FLASHCARDS (6 CARTE AD ALTA RESA CLINICA) ---
  const FLASHCARDS = [
    {
      q: 'Qual è la differenza molecolare fondamentale tra gli antigeni TI-1 e TI-2?',
      a: 'I TI-1 forniscono contemporaneamente il segnale 1 (BCR) e il segnale 2 (TLR, es. LPS su TLR4 o RNA su TLR endosomiali), possedendo spesso attività mitogenica ad alte dosi. I TI-2 sono polimeri multivalenti ripetitivi privi di attività mitogenica intrinseca, che inducono un massivo cross-linking di centinaia di BCR, amplificato dall\'opsonizzazione C3d/C3dg legata al corecettore CR2/CD21.',
      tag: 'Antigeni TI'
    },
    {
      q: 'Perché i polisaccaridi capsulari puri falliscono nell\'immunizzare bambini sotto i 2 anni di età?',
      a: 'Perché sono antigeni TI-2: la loro risposta dipende dai linfociti B della zona marginale (MZ) splenica e dall\'espressione efficiente di CD21/CR2, entrambi immaturi e funzionalmente deficienti nei primi 2 anni di vita. Non essendoci cooperazione T-dipendente, non si formano centri germinativi né memoria.',
      tag: 'Clinica Vaccinale'
    },
    {
      q: 'Attraverso quale meccanismo molecolare il vaccino coniugato (aptene-carrier) genera memoria immunologica?',
      a: 'Grazie al Riconoscimento Congiunto (Linked Recognition): il linfocita B naïve endocita il complesso aptene-polisaccaride legato al carrier proteico (es. tossoide tetanico o CRM197). Presenta i peptidi del carrier su MHC-II ai linfociti Tfh specifici per il carrier. Il segnale CD40:CD40L e IL-21/IL-4 stimola la reazione del centro germinativo con AID, switch a IgG, SHM e generazione di plasmacellule midollari a lunga vita (LLPC) e memoria B.',
      tag: 'Vaccini Coniugati'
    },
    {
      q: 'Perché il repertorio anticorpale dei linfociti B-1 non possiede N-nucleotidi ed è polireattivo?',
      a: 'I linfociti B-1 originano ontogeneticamente dal fegato fetale prima della nascita, in una finestra temporale in cui l\'enzima TdT (Terminal Deoxynucleotidyl Transferase) non è ancora espresso nei precursori linfoidi. Di conseguenza, le giunzioni V-D-J sono prive di variabilità giunzionale N e codificano per combinazioni germline stereotipate, ottimizzate per riconoscere carboidrati comuni e detriti cellulari apoptotici (anticorpi naturali come le isoagglutinine anti-AB0).',
      tag: 'Ontogenesi B-1'
    },
    {
      q: 'Come fa l\'asse Notch2 / BAFF-R a determinare il destino verso i Linfociti B della Zona Marginale (MZ)?',
      a: 'I precursori transizionali splenici che ricevono un segnale tonico debole dal BCR mantengono attiva la trasduzione guidata dal recettore Notch2 (ingaggiato da Delta-like sulle cellule stromali) insieme al recettore BAFF-R. Al contrario, un forte segnale BCR down-regola Notch2 forzando il destino verso B follicolari. I B MZ esprimono livelli basali pre-esistenti di Blimp-1, permettendo una rapida differenziazione in plasmacellule.',
      tag: 'Linfociti B MZ'
    },
    {
      q: 'Qual è il meccanismo biochimico con cui il recettore FcγRIIB (CD32) arresta la trasduzione del BCR?',
      a: 'L\'ingaggio simultaneo da parte di immunocomplessi IgG induce la fosforilazione del motivo ITIM intracellulare di FcγRIIB da parte di Lyn. L\'ITIM fosforilato recluta la inositolo-5\'-fosfatasi SHIP, che defosforila PIP₃ a PIP₂. Questo rimuove i siti di ancoraggio per i domini PH di Btk, PLCγ2 e Akt, bloccando l\'efflusso di Ca²⁺ e arrestando la proliferazione B per feedback negativo.',
      tag: 'Regolazione Inibitoria'
    }
  ];

  // --- DATA QUIZ (10 DOMANDE MULTIPLE CHOICE) ---
  const QUIZ_QUESTIONS = [
    {
      id: 1,
      question: 'Quale coppia di recettori media tipicamente il doppio segnale di attivazione negli antigeni Timo-Indipendenti di tipo 1 (TI-1)?',
      options: [
        'BCR e recettore Notch2',
        'BCR e Toll-Like Receptor (TLR, es. TLR4 per LPS o TLR endosomiali)',
        'BCR e CD40 stimolato da CD40L solubile',
        'CR2/CD21 e recettore FcγRIIB'
      ],
      correct: 1,
      rationale: 'Gli antigeni TI-1 attivano i linfociti B naive fornendo sia il segnale 1 attraverso il BCR, sia il segnale 2 attraverso recettori dell\'immunità innata (Toll-like Receptors, in particolare TLR4 per LPS o TLR7/8/9 per acidi nucleici microbici), superando la soglia di attivazione senza richiedere linfociti T.',
      pearl: 'A concentrazioni elevate, molti antigeni TI-1 agiscono come mitogeni policlonali capaci di attivare linfociti B indipendentemente dalla specificità del BCR.'
    },
    {
      id: 2,
      question: 'Per quale motivo clinico fondamentale i vaccini polisaccaridici semplici (non coniugati) contro lo Pneumococco o il Meningococco sono inefficaci nei neonati e nei lattanti al di sotto dei 2 anni?',
      options: [
        'Nei primi 2 anni il fegato non produce ancora la frazione C3 del complemento',
        'I linfociti B della zona marginale (MZ) splenica e l\'espressione di CD21 non hanno ancora raggiunto la piena maturità funzionale',
        'Il timo neonatale degrada prematuramente le catene pesanti delle immunoglobuline',
        'I neonati esprimono solo CD5 e non possono produrre IgM'
      ],
      correct: 1,
      rationale: 'I polisaccaridi sono antigeni TI-2, la cui risposta anticorpale nell\'organismo adulto è primariamente sostenuta dai linfociti B della zona marginale splenica e potenziata dal corecettore CR2/CD21. Nel bambino sotto i 2 anni, la zona marginale e l\'espressione di CD21 sono ancora ontogeneticamente immature, rendendo i lattanti altamente suscettibili a sepsi da batteri capsulati in assenza di vaccini coniugati.',
      pearl: 'La coniugazione covalente con un carrier proteico (es. tossoide tetanico o CRM197) trasforma l\'antigene da TI-2 a T-dipendente (TD), conferendo efficacia salvavita fin dai primi mesi di vita.'
    },
    {
      id: 3,
      question: 'Nel contesto dei vaccini coniugati aptene-carrier, cosa riconosce specificamente il linfocita Tfh helper che coopera con il linfocita B?',
      options: [
        'Il polisaccaride capsulare legato direttamente all\'MHC-I',
        'Il complesso aptene-anticorpo legato a FcγRIIB',
        'Un peptide derivato dal carrier proteico coniugato, processato ed esposto su MHC di classe II',
        'L\'aptene glucidico legato alla tasca non polimorfica di CD1d'
      ],
      correct: 2,
      rationale: 'Il fenomeno del Linked Recognition (riconoscimento congiunto) si basa sull\'endocitosi dell\'intero complesso coniugato da parte del BCR specifico per il polisaccaride. All\'interno degli endosomi del linfocita B, il carrier proteico viene proteoliticamente frammentato in peptidi che vengono caricati sulle molecole MHC-II e presentati ai linfociti Tfh specifici per quel peptide carrier.',
      pearl: 'Il linfocita B e il linfocita T cooperano senza dover riconoscere lo stesso identico epitopo: il B riconosce il polisaccaride (aptene), il T riconosce il peptide carrier.'
    },
    {
      id: 4,
      question: 'Qual è l\'origine ontogenetica e la caratteristica genetica distintiva dei linfociti B-1 (in particolare B-1a)?',
      options: [
        'Originano dal timo durante la pubertà ed esprimono CD28',
        'Originano dal fegato fetale, mancano dell\'espressione di TdT e posseggono un repertorio V(D)J stereotipato a bassa affinità per il self e carboidrati',
        'Derivano dai centri germinativi dei linfonodi mesenterici ed esprimono alti livelli di AID costitutivo',
        'Originano dalla milza adulta sotto lo stimolo selettivo di IL-17'
      ],
      correct: 1,
      rationale: 'I linfociti B-1 si sviluppano precocemente nel fegato fetale prima della nascita, in una finestra temporale priva dell\'enzima TdT (Terminal Deoxynucleotidyl Transferase). L\'assenza di TdT impedisce l\'inserzione di N-nucleotidi alle giunzioni V-D-J, generando un repertorio stereotipato privo di fine specificità proteica ma ottimizzato per molecole polireattive e conservate.',
      pearl: 'I B-1 si automantengono nell\'adulto tramite autorinnovamento nelle cavità sierose (peritoneo e pleura), indipendentemente dal midollo osseo.'
    },
    {
      id: 5,
      question: 'Cosa sono le isoagglutinine naturali del sistema dei gruppi sanguigni AB0 e chi le produce fisiologicamente?',
      options: [
        'Anticorpi IgG ad altissima affinità prodotti da plasmacellule midollari a lunga vita dopo trasfusione',
        'Anticorpi naturali prevalentemente di classe IgM prodotti dai linfociti B-1, cross-reattivi verso antigeni carboidratici del microbiota commensale',
        'Citochine citotossiche rilasciate dai linfociti T CD8+ all\'ingresso di eritrociti eterologhi',
        'Complemento attivato spontaneamente per assenza di CD59'
      ],
      correct: 1,
      rationale: 'Le isoagglutinine anti-A e anti-B sono anticorpi naturali di classe IgM prodotti costitutivamente dai linfociti B-1 senza bisogno di precedente contatto con sangue estraneo. Sono generate per cross-reattività contro strutture saccaridiche identiche esposte sulla parete dei batteri commensali intestinali.',
      pearl: 'Un individuo di gruppo 0 possiede anticorpi IgM naturali anti-A e anti-B già nei primi mesi di vita, rendendo la determinazione del gruppo sanguigno tassativa prima di qualsiasi emotrasfusione.'
    },
    {
      id: 6,
      question: 'Quale combinazione di segnali di differenziamento indirizza un linfocita B transizionale splenico a diventare un linfocita B della Zona Marginale (MZ) anziché Follicolare (FO)?',
      options: [
        'Un segnale BCR molto forte che attiva NFAT e CD40',
        'Un segnale tonico debole del BCR associato a segnalazione via Notch2 (ingaggiato da Delta-like) e BAFF-R',
        'La completa delezione di Notch2 e l\'assenza di recettori BAFF',
        'L\'attivazione costitutiva di AID in presenza di IL-4'
      ],
      correct: 1,
      rationale: 'La specificazione di destino tra B follicolari e B di zona marginale è regolata dall\'intensità del segnale del BCR: un segnale tonico debole consente la conservazione dell\'espressione di Notch2, il quale — ingaggiato dai ligandi della famiglia Delta-like espressi dallo stroma della polpa rossa splenica — in sinergia con BAFF-R promuove il differenziamento a linfocita B MZ. Un segnale forte del BCR invece silenzia Notch2 e spinge verso il fenotipo follicolare.',
      pearl: 'I B MZ esprimono livelli basali del fattore di trascrizione Blimp-1 già pronti: ciò consente loro di differenziarsi in plasmacellule secernenti IgM in tempi fulminei.'
    },
    {
      id: 7,
      question: 'Qual è il ruolo del recettore inibitorio FcγRIIB (CD32) sulla membrana del linfocita B?',
      options: [
        'Attiva la fagocitosi nei linfociti B follicolari',
        'Media il feedback negativo quando riconosce il frammento Fc delle IgG complessate con l\'antigene, reclutando la fosfatasi SHIP',
        'Induce lo switch isotipico verso IgE nei pazienti atopici',
        'Favorisce l\'ingresso del linfocita B nel centro germinativo reclutando ZAP-70'
      ],
      correct: 1,
      rationale: 'FcγRIIB è l\'unico recettore Fc inibitorio espresso dai linfociti B: presenta un motivo intracellulare ITIM. Quando si formano immunocomplessi antigene-IgG, questi collegano fisicamente il BCR con FcγRIIB; Lyn fosforila l\'ITIM, reclutando l\'inositolo fosfatasi SHIP che idrolizza PIP₃ a PIP₂, bloccando la cascata di sopravvivenza e attivazione del BCR.',
      pearl: 'Mutazioni o polimorfismi con perdita di funzione di FcγRIIB sono fortemente associati a suscettibilità al Lupus Eritematoso Sistemico (LES) per mancato spegnimento della risposta anticorpale.'
    },
    {
      id: 8,
      question: 'Quale substrato lipidico viene idrolizzato dalla fosfatasi inositolica SHIP reclutata da FcγRIIB?',
      options: [
        'Converte PIP₂ in IP₃ e DAG',
        'Converte PIP₃ (fosfatidilinositolo-3,4,5-trisfosfato) in PIP₂ (fosfatidilinositolo-3,4-bisfosfato)',
        'Fosforila la sfingosina a sfingosina-1-fosfato (S1P)',
        'Sintetizza cardiolipina all\'interno della membrana mitocondriale'
      ],
      correct: 1,
      rationale: 'SHIP (SH2-containing Inositol Phosphatase) idrolizza specificamente il fosfato in posizione 5\' dell\'anello dell\'inositolo di PIP₃, trasformandolo in PI(3,4)P₂. In questo modo cancella il sito d\'attracco di membrana per i domini PH di Btk, Akt e PLCγ2, arrestando a monte l\'efflusso di Ca²⁺ e la trascrizione genica.',
      pearl: 'SHIP antagonizza direttamente l\'attività della chinasi PI3K attivata dal complesso corecettoriale CD19.'
    },
    {
      id: 9,
      question: 'Quale molecola viene riconosciuta dal corecettore inibitorio CD22 (Siglec-2) e quali fosfatasi recluta sulla sua coda citoplasmatica?',
      options: [
        'Lega il mannosio batterico e recluta la calcineurina',
        'Lega residui di acido sialico (α-2,6) tipici delle cellule self e recluta le tirosin-fosfatasi SHP-1 e SHP-2',
        'Lega la frazione C3b del complemento e recluta la chinasi Syk',
        'Lega il recettore CD40L e recluta TRAF6'
      ],
      correct: 1,
      rationale: 'CD22 appartiene alla famiglia delle lectine di tipo Ig (Siglec) e riconosce specificamente acidi sialici con legame α-2,6, presenti in elevata abbondanza sulle membrane cellulari dei vertebrati (self) e assenti sulla maggior parte dei batteri. I suoi motivi ITIM fosforilati reclutano SHP-1 e SHP-2, che defosforilano Syk, CD79a/b e BLNK, innalzando la soglia di tolleranza al self.',
      pearl: 'L\'interazione può avvenire sia in trans (con acidi sialici su cellule vicine) che in cis (con acidi sialici presenti sulla stessa membrana del linfocita B e sul BCR stesso).'
    },
    {
      id: 10,
      question: 'In condizioni di stimolazione Timo-Indipendente nelle mucose, quali citochine e fattori innati possono comunque guidare uno switch isotipico verso IgA?',
      options: [
        'IL-2 e IFN-γ secreti da linfociti Th1',
        'BAFF e APRIL secreti da cellule dendritiche e ILC3 mucosali in sinergia con TGF-β, acido retinoico e NO',
        'Fattore di crescita dell\'epidermide (EGF) e istamina',
        'Granzima B e Perforina rilasciati da cellule NK'
      ],
      correct: 1,
      rationale: 'Sebbene lo switch isotipico classico sia Tfh-dipendente, a livello delle mucose (es. placche di Peyer, lamina propria) le cellule dendritiche e le ILC3 possono secernere BAFF e APRIL. Questi fattori legano TACI e BAFF-R sui linfociti B inducendo l\'attivazione di AID; in associazione con il TGF-β mucosale, guidano una ricombinazione di switch verso IgA T-indipendente per proteggere il lume intestinale.',
      pearl: 'Le plasmacellule generate per switch T-indipendente hanno però una vita breve e non garantiscono memoria immunologica a lungo termine.'
    }
  ];

  const handleSelectAnswer = (qId: number, optIdx: number) => {
    if (quizSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (userAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  return (
    <div className={`space-y-12 ${proseFontClass}`}>
      {/* HEADER DELLA LEZIONE 14 */}
      <header className="border-b border-slate-200 pb-8 bg-gradient-to-b from-blue-50/50 to-transparent p-6 rounded-2xl">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-blue-700 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
            Lezione 14
          </span>
          <span className="px-2.5 py-0.5 bg-indigo-100 text-indigo-800 rounded-md text-xs font-semibold">
            Prof.ssa Rosa Molfetta
          </span>
          <span className="px-2.5 py-0.5 bg-slate-200 text-slate-700 rounded-md text-xs font-medium">
            30 e 31 Ottobre 2025
          </span>
          <span className="px-2.5 py-0.5 bg-amber-100 text-amber-900 rounded-md text-xs font-medium flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            55 min lettura
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
          Antigeni T-Indipendenti (TI-1 &amp; TI-2), Sottopopolazioni B (B-1, MZ, FO) e Meccanismi di Regolazione Negativa
        </h1>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl mb-4 font-normal">
          Dalle risposte immunitarie non proteiche ai sofisticati meccanismi di spegnimento recettoriale:
          analisi molecolare del superamento della soglia di attivazione senza T helper, razionale biotecnologico dei
          vaccini coniugati (aptene-carrier), ontogenesi dei linfociti B-1 fetali produttori di anticorpi naturali (isoagglutinine AB0),
          specializzazione sentinella dei B della zona marginale splenica (Notch2/Blimp-1) e circuiti inibitori ITIM a feedback
          guidati dalle fosfatasi SHIP e SHP-1/2 (FcγRIIB e CD22/acidi sialici).
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 pt-3 border-t border-slate-200/80">
          <span><strong>Sbobinatori:</strong> Andrea Cemino, Asia Bisciardi</span>
          <span>•</span>
          <span><strong>Revisori:</strong> Dora Bruni, Daniele Bianconi</span>
          <span>•</span>
          <span><strong>Manuale Ufficiale:</strong> Immunologia Clinica e Molecolare (Abbas, 10ª Ed.)</span>
        </div>
      </header>

      {/* BOX OBIETTIVI DI APPRENDIMENTO */}
      <section className="bg-white rounded-xl border border-blue-200 p-5 shadow-xs">
        <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Target className="w-4 h-4 text-blue-600" />
          Obiettivi Didattici e Traguardi di Competenza Clinico-Molecolare
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700">
          <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-150">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Antigeni TI-1 vs TI-2:</strong> comprendere la biochimica del doppio segnale innato (BCR + TLR) rispetto al cross-linking massivo multivalente dipendente da CR2/CD21.</span>
          </div>
          <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-150">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Vaccini Coniugati &amp; Linked Recognition:</strong> decifrare il meccanismo con cui un carrier proteico converte un polisaccaride T-indipendente in una risposta con centro germinativo e memoria nei lattanti.</span>
          </div>
          <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-150">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Triforcazione dei Linfociti B:</strong> confrontare ontogenesi (fegato fetale vs midollo), repertorio (TdT-assente vs diversificato) e funzione tra B-1 (CD5+), B di Zona Marginale (Notch2) e B Follicolari.</span>
          </div>
          <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-150">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Freni Inibitori ITIM (FcγRIIB &amp; CD22):</strong> padroneggiare il reclutamento di SHIP (idrolisi di PIP₃) e di SHP-1/2 (defosforilazione di Syk/BLNK) e la loro implicazione nel Lupus (LES).</span>
          </div>
        </div>
      </section>

      {/* SEZIONE 14.1 */}
      <section id="sec-14-1" className="space-y-4">
        <div className="border-l-4 border-blue-600 pl-4">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">Capitolo 14.1</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Antigeni Timo-Indipendenti (TI): Concetti Fondamentali, Soglie e Caratteristiche Umorali
          </h2>
        </div>

        <p className={proseSizeClass}>
          Nelle lezioni precedenti è stato sviscerato il paradigma della risposta umorale <strong className="text-slate-900">Timo-Dipendente (TD)</strong>:
          in tale contesto, gli antigeni di natura esclusivamente <em className="text-slate-800">proteica solubile</em> richiedono una stretta cooperazione
          fisica e molecolare tra linfocita B naive e linfocita T helper follicolare (Tfh), mediata dall'ingaggio del recettore{' '}
          <strong className="text-blue-700">CD40</strong> da parte del ligando <strong className="text-blue-700">CD40L</strong> e dal rilascio coordinato di citochine
          chiave (IL-21, IL-4). Questo processo innesca la formazione del centro germinativo, la reazione di switch isotipico (CSR),
          l'ipermutazione somatica (SHM) ad opera dell'enzima AID e la generazione di plasmacellule midollari a lunga vita (LLPC) e cellule B memoria.
        </p>

        <p className={proseSizeClass}>
          Tuttavia, il mondo microbico presenta all'ospite una sterminata panoplia di determinanti antigenici di natura <strong className="text-slate-900">non proteica</strong>:
          polisaccaridi capsulari batterici (es. <em>Streptococcus pneumoniae</em>, <em>Neisseria meningitidis</em>, <em>Haemophilus influenzae</em>), lipopolisaccaridi (LPS)
          della parete dei Gram-negativi, acidi teicoici, destrani, polimeri di ficoll, lipidi e acidi nucleici virali. Poiché le molecole MHC di classe II possono legare e
          presentare ai recettori TCR esclusivamente peptidi lineari derivati da proteine, i linfociti T helper sono <strong className="text-rose-700">intrinsecamente ciechi</strong>{' '}
          nei confronti di questi antigeni non proteici.
        </p>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
            <Info className="w-4 h-4 text-blue-600" />
            La Risposta Timo-Indipendente (TI): Tratti Canonici
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700">
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
              <span><strong>Classe anticorpale:</strong> produzione pressoché esclusiva di immunoglobuline di isotipo <strong>IgM</strong> a bassa affinità.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
              <span><strong>Destino cellulare:</strong> rapida differenziazione in <strong>plasmablasti a breve emivita</strong> (pochi giorni) nei focolai extrafollicolari.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
              <span><strong>Assenza di Centro Germinativo:</strong> non si osserva la classica architettura GC né l'intervento dei linfociti Tfh.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
              <span><strong>Assenza di Memoria Classica:</strong> riesposizioni successive allo stesso antigene TI evocano la medesima cinetica e titolo anticorpale (nessuna risposta secondaria amplificata).</span>
            </li>
          </ul>
        </div>
      </section>

      {/* SEZIONE 14.2 */}
      <section id="sec-14-2" className="space-y-4">
        <div className="border-l-4 border-indigo-600 pl-4">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block">Capitolo 14.2</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Meccanismi di Attivazione TI-1 (BCR + TLR) vs TI-2 (Cross-Linking Polivalente &amp; Corecettore CR2/CD21)
          </h2>
        </div>

        <p className={proseSizeClass}>
          Come può un linfocita B naive superare la severa soglia biochimica di attivazione senza l'ingaggio di CD40 da parte del T helper?
          L'evoluzione ha selezionato due distinte strategie biofisiche e molecolari, che suddividono gli antigeni T-indipendenti in due classi:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* BOX TI-1 */}
          <div className="p-4 bg-white rounded-xl border-2 border-indigo-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-indigo-100 pb-2">
              <h3 className="font-bold text-indigo-950 text-sm flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-indigo-600" />
                Antigeni TI-1 (Doppio Segnale BCR + PRR)
              </h3>
              <span className="text-[10px] bg-indigo-50 text-indigo-700 font-bold px-2 py-0.5 rounded">Mitogenici</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Gli antigeni <strong>TI-1</strong> possiedono una duplice natura: legano con una porzione specifica il <strong>BCR</strong> (fornendo il classico segnale 1)
              e contemporaneamente legano recettori dell'immunità innata, primariamente i <strong className="text-indigo-800">Toll-Like Receptors (TLR)</strong>, presenti sulla
              membrana o nei compartimenti endosomiali del linfocita B.
            </p>
            <div className="text-xs space-y-1.5 bg-indigo-50/50 p-2.5 rounded-lg border border-indigo-100">
              <p><strong>Esempi prototipici:</strong> LPS batterico (ingaggia TLR4 via MD2/CD14) e RNA/DNA virali (ingaggiano TLR7, TLR8 e TLR9 endosomiali).</p>
              <p><strong>Effetto di dose:</strong> A basse concentrazioni attivano selettivamente i linfociti B antigene-specifici. A concentrazioni elevate agiscono come <em>mitogeni policlonali</em>, stimolando fino a un terzo di tutti i linfociti B dell'organismo indipendentemente dalla specificità del BCR.</p>
            </div>
          </div>

          {/* BOX TI-2 */}
          <div className="p-4 bg-white rounded-xl border-2 border-blue-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-blue-100 pb-2">
              <h3 className="font-bold text-blue-950 text-sm flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-blue-600" />
                Antigeni TI-2 (Cross-Linking Massivo &amp; CR2)
              </h3>
              <span className="text-[10px] bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded">Multivalenti</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Gli antigeni <strong>TI-2</strong> sono macromolecole polimeriche dotate di una struttura regolare e altamente ripetitiva con subunità identiche e regolarmente spaziate
              (es. polisaccaridi capsulari, destrani, polimeri di ficoll). <strong>Non possiedono alcuna attività mitogenica intrinseca</strong> né legano direttamente i TLR.
            </p>
            <div className="text-xs space-y-1.5 bg-blue-50/50 p-2.5 rounded-lg border border-blue-100">
              <p><strong>Biofisica di membrana:</strong> La matrice polimerica lega contemporaneamente centinaia di monomeri BCR sulla membrana della cellula B, inducendo un <em>cross-linking massivo e prolungato</em>.</p>
              <p><strong>Co-stimolazione dal Complemento:</strong> I polisaccaridi fissano spontaneamente il complemento via alternativa; i frammenti <strong>C3d e C3dg</strong> legati all'antigene vengono riconosciuti dal corecettore <strong>CR2 (CD21)</strong>, che associato a CD19 e CD81 abbassa la soglia di attivazione di 100-1000 volte.</p>
            </div>
          </div>
        </div>

        {/* Schema Concettuale di Processo: Confronto TI-1 vs TI-2 vs TD */}
        <ConceptMapFlow {...MAP_LEZIONE_14_TI_ANTIGENS} />
      </section>

      {/* SEZIONE 14.3 */}
      <section id="sec-14-3" className="space-y-4">
        <div className="border-l-4 border-amber-600 pl-4">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">Capitolo 14.3</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Eccezioni di Switch Isotipico T-Indipendente: Asse BAFF/APRIL/TGF-β per IgA &amp; Segnali TLR per IgG
          </h2>
        </div>

        <p className={proseSizeClass}>
          Sebbene la regola classica dei testi affermi che la ricombinazione di switch isotipico (CSR) sia rigorosamente subordinata alla presenza
          dei linfociti Tfh e dell'ingaggio CD40/CD40L, le evidenze sperimentali e cliniche hanno identificato rilevanti <strong className="text-amber-800">eccezioni T-indipendenti</strong>,
          fondamentali soprattutto nella protezione delle barriere mucosali e nella risposta immediata a batteri invasivi:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-xl space-y-2">
            <h4 className="font-bold text-amber-950 flex items-center gap-1.5 text-xs">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Switch a IgG T-Indipendente via TLR
            </h4>
            <p className="text-slate-700 leading-relaxed">
              In presenza di forti stimolazioni di tipo <strong>TI-1</strong> (ad esempio alte concentrazioni di LPS batterico o acidi nucleici virali riconosciuti da TLR4 o TLR9),
              i linfociti B possono attivare cascate trascrizionali guidate da <strong>NF-κB</strong> e dal fattore <strong>T-bet</strong>.
              Questi segnali inducono l'espressione endogena dell'enzima <strong className="text-slate-900">AID (AICDA)</strong> e la produzione autocrina o paracrina di <strong>IFN-γ</strong>,
              guidando la ricombinazione verso subclasse <strong className="text-amber-900">IgG2a / IgG2c</strong> (nel topo) o <strong className="text-amber-900">IgG1 / IgG3</strong> (nell'uomo),
              indispensabili per l'opsonizzazione fagocitica precoce.
            </p>
          </div>

          <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-2">
            <h4 className="font-bold text-emerald-950 flex items-center gap-1.5 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Switch a IgA Mucosali T-Indipendente via BAFF / APRIL
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Nelle mucose intestinali (lamina propria, placche di Peyer), cellule dendritiche mucosali, macrofagi stromali e cellule linfoidi innate di tipo 3 (ILC3),
              in risposta al microbiota, rilasciano cospicue quantità di <strong className="text-emerald-900">BAFF</strong> e <strong className="text-emerald-900">APRIL</strong>.
              Queste molecole legano i recettori <strong>TACI</strong> e <strong>BAFF-R</strong> sui linfociti B residenti, attivando la via non canonica di NF-κB e l'enzima AID.
              In sinergia con il <strong>TGF-β</strong> (abbondante nell'ambiente mucosale), l'acido retinoico e l'ossido nitrico (NO), si promuove lo switch isotipico verso <strong className="text-emerald-900">IgA secretorie dimere</strong>.
              Tali plasmacellule rimangono tuttavia a vita breve e non generano memoria a lungo termine.
            </p>
          </div>
        </div>
      </section>

      {/* SEZIONE 14.4 */}
      <section id="sec-14-4" className="space-y-4">
        <div className="border-l-4 border-rose-600 pl-4">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block">Capitolo 14.4</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Il Principio del Riconoscimento Congiunto (Linked Recognition) &amp; Meccanismo dei Vaccini Coniugati (Aptene-Carrier)
          </h2>
        </div>

        <p className={proseSizeClass}>
          I polisaccaridi capsulari batterici rappresentano il principale fattore di virulenza di patogeni invasivi mortali come{' '}
          <em>Streptococcus pneumoniae</em> (pneumococco), <em>Neisseria meningitidis</em> (meningococco) e <em>Haemophilus influenzae</em> tipo b (Hib).
          Essendo antigeni TI-2, la risposta naturale contro le loro capsule è priva di memoria immunologica, non induce maturazione dell'affinità
          e — cosa drammatica in medicina — <strong className="text-rose-700">è completamente assente o inefficiente nei bambini sotto i 2 anni</strong>,
          a causa dell'immaturità della zona marginale della milza e della scarsa espressione di CD21/CR2.
        </p>

        <p className={proseSizeClass}>
          La soluzione biotecnologica a questo stallo terapeutico è stata la formulazione dei <strong className="text-slate-900">vaccini coniugati</strong>.
          Il principio biologico su cui poggiano è il <strong className="text-rose-700">Riconoscimento Congiunto (Linked Recognition)</strong>,
          scoperto originariamente negli anni '60 con gli esperimenti sugli apteni e carrier proteici:
        </p>

        {/* DIAGRAMMA A STEP DEL VACCINO CONIUGATO */}
        <div className="p-5 bg-white border-2 border-rose-200 rounded-2xl shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-rose-100 pb-3">
            <h3 className="font-bold text-rose-950 text-sm flex items-center gap-2">
              <Syringe className="w-5 h-5 text-rose-600" />
              Cascata di Eventi Cellulari del Vaccino Coniugato (Aptene-Carrier)
            </h3>
            <span className="text-xs font-mono bg-rose-50 text-rose-700 px-2.5 py-1 rounded-md font-bold">
              PCV13 / PCV20 / Hib / MenACWY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100 flex flex-col justify-between">
              <div>
                <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center text-xs mb-2">1</span>
                <h4 className="font-bold text-rose-900 mb-1">Riconoscimento BCR</h4>
                <p className="text-slate-600 leading-relaxed">
                  Il polisaccaride capsulare (<strong>aptene</strong>) è legato covalentemente a un carrier proteico immunogenico (es. <em>tossoide tetanico</em>, <em>tossoide difterico</em> o <em>CRM197</em>). Il linfocita B naive riconosce specificamente il polisaccaride tramite il suo BCR.
                </p>
              </div>
            </div>

            <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100 flex flex-col justify-between">
              <div>
                <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center text-xs mb-2">2</span>
                <h4 className="font-bold text-rose-900 mb-1">Endocitosi &amp; Processamento</h4>
                <p className="text-slate-600 leading-relaxed">
                  L'intero complesso coniugato (polisaccaride + proteina) viene internalizzato per endocitosi recettore-mediata. Negli endolisosomi, solo la componente proteica viene digerita dalle catepsine in <strong>peptidi carrier</strong>, che vengono caricati su <strong>MHC-II</strong>.
                </p>
              </div>
            </div>

            <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100 flex flex-col justify-between">
              <div>
                <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center text-xs mb-2">3</span>
                <h4 className="font-bold text-rose-900 mb-1">Cooperazione Tfh:B</h4>
                <p className="text-slate-600 leading-relaxed">
                  Il linfocita B presenta i peptidi del carrier su MHC-II a un linfocita <strong>Tfh specifico per la proteina carrier</strong>. Il T helper ingaggia <strong>CD40</strong> tramite <strong>CD40L</strong> e secerne <strong>IL-21</strong>, fornendo un soccorso T-dipendente completo al clone B anti-polisaccaride!
                </p>
              </div>
            </div>

            <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100 flex flex-col justify-between">
              <div>
                <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center text-xs mb-2">4</span>
                <h4 className="font-bold text-rose-900 mb-1">Memoria &amp; Titolo IgG</h4>
                <p className="text-slate-600 leading-relaxed">
                  Il linfocita B anti-polisaccaride entra nel centro germinativo: subisce switch a <strong>IgG ad altissima affinità</strong>, ipermutazione somatica e genera <strong>plasmacellule a lunga vita (LLPC)</strong> e <strong>cellule B memoria</strong>, proteggendo per decenni anche il lattante!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SIMULATORE INTERATTIVO 1 --- */}
      <section id="sim-ti-vaccini" className="p-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl shadow-md space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-800/60 pb-3">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-indigo-400" />
            <h3 className="font-bold text-sm sm:text-base text-white tracking-wide">
              Simulatore Interattivo: Dinamica Molecolare TI-1 vs TI-2 vs Vaccino Coniugato
            </h3>
          </div>
          <span className="text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 px-2.5 py-1 rounded-full font-mono">
            Laboratorio Biofisico e Vaccinale
          </span>
        </div>

        {/* CONTROLLI DEL SIMULATORE */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div>
            <label className="text-indigo-200 font-semibold mb-1.5 block">Natura dell'Antigene Somministrato:</label>
            <div className="grid grid-cols-3 gap-1">
              <button
                onClick={() => setSim1Mode('ti1')}
                className={`py-1.5 px-2 rounded-lg font-bold transition-all text-center ${
                  sim1Mode === 'ti1'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                TI-1 (LPS)
              </button>
              <button
                onClick={() => setSim1Mode('ti2')}
                className={`py-1.5 px-2 rounded-lg font-bold transition-all text-center ${
                  sim1Mode === 'ti2'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                TI-2 (Capsulare)
              </button>
              <button
                onClick={() => setSim1Mode('td_conjugate')}
                className={`py-1.5 px-2 rounded-lg font-bold transition-all text-center ${
                  sim1Mode === 'td_conjugate'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Coniugato (PCV)
              </button>
            </div>
          </div>

          <div>
            <label className="text-indigo-200 font-semibold mb-1.5 block">Età del Paziente:</label>
            <div className="grid grid-cols-2 gap-1">
              <button
                onClick={() => setSim1PatientAge('infant')}
                className={`py-1.5 px-2 rounded-lg font-bold transition-all text-center ${
                  sim1PatientAge === 'infant'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Lattante (&lt; 2 anni)
              </button>
              <button
                onClick={() => setSim1PatientAge('adult')}
                className={`py-1.5 px-2 rounded-lg font-bold transition-all text-center ${
                  sim1PatientAge === 'adult'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Adulto (&gt; 2 anni)
              </button>
            </div>
          </div>

          <div>
            <label className="text-indigo-200 font-semibold mb-1.5 block">Opsonizzazione C3d/C3dg:</label>
            <button
              onClick={() => setSim1ComplementOpsonized(!sim1ComplementOpsonized)}
              className={`w-full py-1.5 px-2 rounded-lg font-bold transition-all text-center flex items-center justify-center gap-1.5 ${
                sim1ComplementOpsonized
                  ? 'bg-indigo-500/30 text-indigo-200 border border-indigo-400/40'
                  : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>{sim1ComplementOpsonized ? 'C3d Presente (CR2 Attivo)' : 'Assente (CR2 Inattivo)'}</span>
            </button>
          </div>
        </div>

        {/* PANNELLO DI STATO DINAMICO */}
        <div className="bg-slate-950/80 p-4 rounded-xl border border-indigo-900/60 grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs">
          {/* COLONNA 1: SEGNALI MOLECOLARI */}
          <div className="space-y-2 border-b lg:border-b-0 lg:border-r border-indigo-900/50 pb-3 lg:pb-0 lg:pr-3">
            <h4 className="font-mono text-indigo-300 uppercase tracking-wider font-bold text-[11px] flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              1. Eventi di Membrana &amp; Trasduzione
            </h4>
            {sim1Mode === 'ti1' && (
              <div className="space-y-1 text-slate-300">
                <p className="text-emerald-400 font-semibold">✓ Segnale 1: BCR legato all'antigene</p>
                <p className="text-emerald-400 font-semibold">✓ Segnale 2: Innesco TLR (es. TLR4/MyD88 o TLR9)</p>
                <p className="text-indigo-300 text-[11px]">Attivazione rapida di NF-κB e MAPK; indipendenza da CD40.</p>
              </div>
            )}
            {sim1Mode === 'ti2' && (
              <div className="space-y-1 text-slate-300">
                <p className="text-emerald-400 font-semibold">✓ Cross-linking di centinaia di BCR adiacenti</p>
                <p className={sim1ComplementOpsonized ? 'text-emerald-400 font-semibold' : 'text-amber-400 font-semibold'}>
                  {sim1ComplementOpsonized
                    ? '✓ Complesso CR2/CD19/CD81 ingaggia C3d (soglia -1000×)'
                    : '✗ Assenza di C3d: richiesta concentrazione antigenica elevatissima'}
                </p>
                <p className={sim1PatientAge === 'infant' ? 'text-rose-400 font-semibold' : 'text-slate-400 text-[11px]'}>
                  {sim1PatientAge === 'infant'
                    ? '⚠️ Nel lattante i linfociti B MZ e CD21 sono immaturi: attivazione FALLITA!'
                    : 'Nell\'adulto la zona marginale splenica risponde efficacemente.'}
                </p>
              </div>
            )}
            {sim1Mode === 'td_conjugate' && (
              <div className="space-y-1 text-slate-300">
                <p className="text-emerald-400 font-semibold">✓ BCR riconosce polisaccaride + carrier</p>
                <p className="text-emerald-400 font-semibold">✓ Endocitosi &amp; digestione carrier in peptidi</p>
                <p className="text-emerald-400 font-semibold">✓ Esposizione peptidi su MHC-II al Tfh</p>
                <p className="text-indigo-300 text-[11px]">Ingaggio CD40:CD40L + secrezione di IL-21 da parte del Tfh.</p>
              </div>
            )}
          </div>

          {/* COLONNA 2: REAZIONE DEL CENTRO GERMINATIVO & AID */}
          <div className="space-y-2 border-b lg:border-b-0 lg:border-r border-indigo-900/50 pb-3 lg:pb-0 lg:pr-3">
            <h4 className="font-mono text-indigo-300 uppercase tracking-wider font-bold text-[11px] flex items-center gap-1.5">
              <Dna className="w-3.5 h-3.5 text-blue-400" />
              2. Induzione AID, Switch &amp; Ipermutazione
            </h4>
            {sim1Mode === 'ti1' && (
              <div className="space-y-1 text-slate-300">
                <p><span className="text-slate-400">Attivazione AID:</span> <strong className="text-amber-400">Bassa/Focale</strong></p>
                <p><span className="text-slate-400">Centro Germinativo:</span> <strong className="text-rose-400">Assente</strong></p>
                <p><span className="text-slate-400">Switch Isotipico:</span> Prevalente IgM; possibili rare IgG T-indipendenti</p>
                <p><span className="text-slate-400">Maturazione Affinità:</span> <strong className="text-rose-400">Assente</strong></p>
              </div>
            )}
            {sim1Mode === 'ti2' && (
              <div className="space-y-1 text-slate-300">
                <p><span className="text-slate-400">Attivazione AID:</span> <strong className="text-rose-400">Assente/Trascurabile</strong></p>
                <p><span className="text-slate-400">Centro Germinativo:</span> <strong className="text-rose-400">Assente</strong></p>
                <p><span className="text-slate-400">Switch Isotipico:</span> IgM oligomeriche a bassa affinità</p>
                <p><span className="text-slate-400">Maturazione Affinità:</span> <strong className="text-rose-400">Nessuna</strong></p>
              </div>
            )}
            {sim1Mode === 'td_conjugate' && (
              <div className="space-y-1 text-slate-300">
                <p><span className="text-slate-400">Attivazione AID:</span> <strong className="text-emerald-400">Massiva e Prolungata</strong></p>
                <p><span className="text-slate-400">Centro Germinativo:</span> <strong className="text-emerald-400">Formazione Piena (GC)</strong></p>
                <p><span className="text-slate-400">Switch Isotipico:</span> <strong className="text-emerald-400">IgG1 / IgG3 ad alta efficienza</strong></p>
                <p><span className="text-slate-400">Maturazione Affinità:</span> <strong className="text-emerald-400">Ipermutazione Somatica (SHM)</strong></p>
              </div>
            )}
          </div>

          {/* COLONNA 3: ESITO CLINICO & MEMORIA */}
          <div className="space-y-2">
            <h4 className="font-mono text-indigo-300 uppercase tracking-wider font-bold text-[11px] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              3. Esito Clinico &amp; Memoria a Lungo Termine
            </h4>
            {sim1Mode === 'ti1' && (
              <div className="p-2 bg-indigo-900/30 rounded border border-indigo-700/40 text-slate-200">
                <p className="font-semibold text-amber-300">Risposta Rapida ma Effimera</p>
                <p className="text-[11px] text-slate-300 mt-1">Plasmablasti a breve vita (3-5 giorni); nessuna cellula memoria. Non protegge da successive reinfezioni.</p>
              </div>
            )}
            {sim1Mode === 'ti2' && (
              <div className={`p-2 rounded border ${
                sim1PatientAge === 'infant'
                  ? 'bg-rose-950/40 border-rose-800 text-rose-200'
                  : 'bg-blue-900/30 border-blue-700/40 text-slate-200'
              }`}>
                {sim1PatientAge === 'infant' ? (
                  <>
                    <p className="font-semibold text-rose-400">Fallimento Vaccinale / Rischio Sepsi</p>
                    <p className="text-[11px] text-rose-300 mt-1">Il vaccino a polisaccaridi nudi (es. Pneumo23) non suscita anticorpi nel lattante. Rischio di meningite e sepsi batteriemica fulminante!</p>
                  </>
                ) : (
                  <>
                    <p className="font-semibold text-blue-300">Protezione IgM nell'Adulto</p>
                    <p className="text-[11px] text-slate-300 mt-1">Sostenuta dai B della zona marginale splenica. Mancano plasmacellule midollari a lunga vita; il titolo anticorpale decade in 2-3 anni.</p>
                  </>
                )}
              </div>
            )}
            {sim1Mode === 'td_conjugate' && (
              <div className="p-2 bg-emerald-950/40 border border-emerald-800 text-emerald-200 rounded">
                <p className="font-semibold text-emerald-300">Immunità Protettiva Duratura (Decennale)</p>
                <p className="text-[11px] text-emerald-100 mt-1">
                  Generazione di <strong>plasmacellule midollari a lunga vita (LLPC)</strong> e <strong>cellule B memoria</strong>. Efficace anche nel lattante fin dal 2° mese di vita!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SEZIONE 14.5 */}
      <section id="sec-14-5" className="space-y-4">
        <div className="border-l-4 border-emerald-600 pl-4">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">Capitolo 14.5</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Linfociti B-1 (B-1a vs B-1b): Ontogenesi Fetale, Assenza di TdT, CD5 e Anticorpi Naturali (Sistema AB0)
          </h2>
        </div>

        <p className={proseSizeClass}>
          I linfociti B maturi non costituiscono una popolazione uniforme, bensì si dividono in tre grandi stirpi con origini ontogenetiche,
          distribuzioni anatomiche e profili funzionali radicalmente distinti. La prima sottopopolazione scoperta è costituita dai{' '}
          <strong className="text-emerald-700">Linfociti B-1</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Microscope className="w-4 h-4 text-emerald-600" />
              Ontogenesi Fetale &amp; Silenziamento di TdT
            </h3>
            <p className="text-slate-700 leading-relaxed">
              I linfociti B-1 originano durante la vita embrionale e fetale dal <strong>fegato fetale</strong> (e dai tessuti para-aortici e sacco vitellino),
              in risposta a specifici segnali induttivi come <strong>IL-7</strong> e <strong>TSLP</strong>.
              Crucialmente, durante lo sviluppo fetale precoce, l'enzima ricombinatorio <strong className="text-rose-700">TdT (Terminal Deoxynucleotidyl Transferase) non è ancora espresso</strong>.
              Pertanto, durante l'assemblaggio dei segmenti genici V-D-J delle immunoglobuline nei precursori B-1, <em>non avviene alcuna addizione di N-nucleotidi</em> alle giunzioni.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Ne consegue un repertorio genico con giunzioni corte e sequenze germline canoniche invarianti (es. V_H11 e V_H12 nel topo).
              Questo repertorio "stereotipato" è evolutivamente selezionato per riconoscere determinanti molecolari altamente conservati:
              carboidrati della parete microbica (destrani, fosforilcolina di <em>S. pneumoniae</em>) e <strong>strutture self alterate</strong> (es. lipidi ossidati su cellule apoptotiche).
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-emerald-600" />
              Cavità Sierose &amp; Anticorpi Naturali (AB0)
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Nell'individuo adulto, i B-1 colonizzano selettivamente le <strong>cavità sierose</strong> (cavità peritoneale e pleurica) e la lamina propria intestinale.
              Non richiedono un continuo rifornimento dal midollo osseo: possiedono una straordinaria capacità di <strong className="text-emerald-800">autorinnovamento periferico perenne</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed">
              I linfociti B-1 secernono costantemente, in assenza di immunizzazioni esogene deliberate, i cosiddetti <strong className="text-emerald-900">anticorpi naturali</strong> (prevalentemente IgM e IgA mucosali).
              L'esempio clinico più famoso è rappresentato dalle <strong className="text-slate-900">isoagglutinine anti-AB0</strong>: un soggetto di gruppo sanguigno 0
              presenta elevati titoli di IgM naturali anti-A e anti-B sintetizzati dai B-1 in risposta cross-reattiva verso oligosaccaridi identici
              presenti sulla capsula dei batteri commensali intestinali. Essi garantiscono inoltre la rimozione immediata dei corpi apoptotici,
              prevenendo la liberazione di autoantigeni e lo sviluppo di Lupus (LES).
            </p>
          </div>
        </div>

        {/* BOX B-1a vs B-1b */}
        <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
          <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
            <GitBranch className="w-4 h-4 text-emerald-700" />
            Dicotomia B-1: Sottopopolazione B-1a (CD5+) vs B-1b (CD5-)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700 pt-1">
            <div className="p-2.5 bg-white rounded-lg border border-emerald-150">
              <strong className="text-emerald-900 block mb-1">Linfociti B-1a (CD5+):</strong>
              Esprimono il recettore <strong>CD5</strong>, una glicoproteina dotata di motivi <strong>ITIM</strong> citoplasmatici. Riconoscono con debole affinità anche componenti self.
              L'ingaggio di CD5 recluta fosfatasi inibitorie che impediscono l'attivazione iper-proliferativa autoimmune, confinando il linfocita a uno stato di tolleranza
              o inducendo la produzione di citochine immunoregolatrici (IL-10). Sono la fonte principale di anticorpi naturali nel plasma.
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-emerald-150">
              <strong className="text-emerald-900 block mb-1">Linfociti B-1b (CD5-):</strong>
              Sono privi dell'espressione di CD5 e non presentano reattività verso il self. Sono deputati alla difesa specializzata contro batteri intracellulari e parassiti
              (es. <em>Borrelia hermsii</em>, <em>Salmonella enterica</em>), essendo capaci di generare una duratura protezione T-indipendente specifica.
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE 14.6 */}
      <section id="sec-14-6" className="space-y-4">
        <div className="border-l-4 border-purple-600 pl-4">
          <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block">Capitolo 14.6</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Linfociti B della Zona Marginale (MZ): Segnale Notch2/BAFF-R, Blimp-1 Basale, Sorveglianza Emisplenica &amp; CD1d/NKT
          </h2>
        </div>

        <p className={proseSizeClass}>
          La seconda sottopopolazione specializzata è rappresentata dai <strong className="text-purple-700">Linfociti B della Zona Marginale (MZ B cells)</strong>.
          A differenza dei B-1, i linfociti B MZ originano nell'adulto da precursori midollari emopoietici, migrano nella milza come linfociti transizionali (T1 e T2)
          e colonizzano l'interfaccia anatomica strategica della <strong className="text-slate-900">zona marginale splenica</strong>, situata tra la polpa bianca e i seni della polpa rossa:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 bg-white rounded-xl border border-purple-200 shadow-xs space-y-1.5">
            <h4 className="font-bold text-purple-950 flex items-center gap-1.5">
              <GitBranch className="w-4 h-4 text-purple-600" />
              Decisione di Destino: Notch2 &amp; BCR
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Il bivio di differenziamento tra B Follicolari e B di Zona Marginale è governato dal <strong>segnale tonico del BCR</strong>:
              un segnale BCR debole preserva l'espressione del recettore <strong className="text-purple-900">Notch2</strong>.
              L'interazione con i ligandi della famiglia <em>Delta-like</em> presenti sulle cellule stromali spleniche, insieme al segnale di <strong>BAFF-R</strong>,
              forza il destino irreversibile verso il fenotipo MZ. Al contrario, un BCR ad alta affinità down-regola Notch2 inducendo il fenotipo follicolare.
            </p>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-purple-200 shadow-xs space-y-1.5">
            <h4 className="font-bold text-purple-950 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-purple-600" />
              Blimp-1 Basale &amp; Cinetica Fulminea
            </h4>
            <p className="text-slate-700 leading-relaxed">
              I linfociti B MZ si trovano in uno stato metabolico "pre-attivato": esprimono livelli basali del fattore master plasmacellulare <strong className="text-purple-900">Blimp-1</strong>{' '}
              e possiedono un reticolo endoplasmatico già parzialmente sviluppato. Al contatto con batteri ematici capsulati, non richiedono giorni di riprogrammazione:
              si differenziano in <strong>plasmablasti secernenti IgM in poche ore</strong>, stroncando la batteriemia sul nascere.
            </p>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-purple-200 shadow-xs space-y-1.5">
            <h4 className="font-bold text-purple-950 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-purple-600" />
              Fenotipo di Membrana &amp; CD1d
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Profilo fenotipico distintivo: <strong className="text-slate-900">IgM<sup>high</sup>, IgD<sup>low</sup>, CD21/CR2<sup>high</sup></strong> (fino a 10 volte più espresso rispetto ai follicolari),
              CD23-negativi, elevati livelli di TLR e marcatore <strong className="text-purple-900">CD1d</strong>.
              Tramite CD1d, presentano antigeni lipidici microbici ai linfociti <strong>iNKT</strong> (invariant Natural Killer T), ricevendo cooperazione rapida.
            </p>
          </div>
        </div>
      </section>

      {/* SEZIONE 14.7 */}
      <section id="sec-14-7" className="space-y-4">
        <div className="border-l-4 border-cyan-600 pl-4">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block">Capitolo 14.7</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Divergenza Topo vs Uomo nella Zona Marginale &amp; Linfociti B Regolatori (Breg, IL-10)
          </h2>
        </div>

        <p className={proseSizeClass}>
          Durante la lezione, la Prof.ssa Rosa Molfetta ha posto particolare enfasi sulle <strong className="text-cyan-800">divergenze fisiologiche tra modello murino e specie umana</strong>,
          nonché sull'esistenza della sottopopolazione funzionale immunosoppressoria dei Linfociti B regolatori:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-white rounded-xl border border-cyan-200 shadow-xs space-y-2">
            <h4 className="font-bold text-cyan-950 flex items-center gap-1.5 text-xs">
              <Filter className="w-4 h-4 text-cyan-600" />
              Linfociti B MZ: Topo vs Uomo
            </h4>
            <p className="text-slate-700 leading-relaxed">
              <strong>Nel Topo:</strong> I linfociti B MZ sono <em>rigidamente sessili</em>. Rimangono permanentemente confinati nella zona marginale della milza
              grazie a recettori di adesione (integrine LFA-1 e VLA-4) e non ricircolano nel sangue né entrano nei follicoli linfonodali.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>Nell'Uomo:</strong> I B MZ mostrano una plasticità incomparabilmente maggiore. Una frazione rilevante esprime il marcatore di memoria <strong className="text-cyan-900">CD27</strong>,
              può distaccarsi dalla milza e <em>ricircolare liberamente nel torrente circolatorio</em>, colonizzando le cripte tonsillari, i follicoli delle placche di Peyer e i linfonodi.
              Inoltre, nell'uomo possono presentare mutazioni somatiche (SHM) nel repertorio anticorpale, costituendo una <em>memoria pre-diversificata</em> di prima linea.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-cyan-200 shadow-xs space-y-2">
            <h4 className="font-bold text-cyan-950 flex items-center gap-1.5 text-xs">
              <ShieldCheck className="w-4 h-4 text-cyan-600" />
              I Linfociti B Regolatori (Breg)
            </h4>
            <p className="text-slate-700 leading-relaxed">
              I <strong>Breg</strong> (tra cui i cloni CD19<sup>+</sup>CD24<sup>high</sup>CD38<sup>high</sup> o B-1a stimolati cronologicamente) non sono deputati alla secrezione
              di anticorpi opsonizzanti, bensì al mantenimento dell'omeostasi immunitaria e della tolleranza periferica.
            </p>
            <p className="text-slate-700 leading-relaxed">
              La loro arma biochimica principale è la secrezione massiva della citochina immunosoppressoria <strong className="text-cyan-900">Interleuchina-10 (IL-10)</strong>{' '}
              e di <strong>TGF-β</strong>. Con queste citochine sopprimono la differenziazione dei linfociti Th1 e Th17, inibiscono la secrezione di TNF-α da parte dei macrofagi
              e promuovono l'espansione dei linfociti T regolatori (Treg FoxP3+). Deficit di Breg provocano esacerbazione di coliti autoimmuni e artrite reumatoide,
              mentre la loro iperattività nel microambiente tumorale favorisce l'immunoevasione neoplastica.
            </p>
          </div>
        </div>
      </section>

      {/* SEZIONE 14.8: TABELLA COMPARATIVA TRIPARTITA */}
      <section id="sec-14-8" className="space-y-4">
        <div className="border-l-4 border-slate-700 pl-4">
          <span className="text-xs font-bold text-slate-600 uppercase tracking-widest block">Capitolo 14.8</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Tabella Sinottica Tripartita: Linfociti B Follicolari (FO) vs Linfociti B della Zona Marginale (MZ) vs Linfociti B-1
          </h2>
        </div>

        <p className={proseSizeClass}>
          La seguente matrice comparativa sintetizza le differenze ontogenetiche, anatomiche, fenotipiche e funzionali che caratterizzano
          le tre grandi popolazioni di linfociti B nell'organismo umano:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
          <table className="w-full text-left text-xs bg-white">
            <thead className="bg-slate-100 text-slate-800 uppercase tracking-wider font-bold border-b border-slate-200">
              <tr>
                <th className="p-3 border-r border-slate-200">Parametro Biologico</th>
                <th className="p-3 border-r border-slate-200 text-blue-900 bg-blue-50/50">Linfociti B Follicolari (B-2 FO)</th>
                <th className="p-3 border-r border-slate-200 text-purple-900 bg-purple-50/50">Linfociti B Zona Marginale (MZ)</th>
                <th className="p-3 text-emerald-900 bg-emerald-50/50">Linfociti B-1 (B-1a / B-1b)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td className="p-3 font-semibold bg-slate-50 border-r border-slate-200">Origine Ontogenetica</td>
                <td className="p-3 border-r border-slate-200">Midollo osseo (dall'età post-natale per tutta la vita)</td>
                <td className="p-3 border-r border-slate-200">Midollo osseo (precursori T1/T2 indirizzati da Notch2)</td>
                <td className="p-3 font-bold text-emerald-800">Fegato fetale (sviluppo embrionale e perinatale)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold bg-slate-50 border-r border-slate-200">Localizzazione Primaria</td>
                <td className="p-3 border-r border-slate-200">Follicoli di milza, linfonodi, placche di Peyer; ricircolanti</td>
                <td className="p-3 border-r border-slate-200">Zona marginale della milza (polpa bianca/rossa)</td>
                <td className="p-3 font-bold text-emerald-800">Cavità peritoneale e pleurica; mucose</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold bg-slate-50 border-r border-slate-200">Mantenimento Adulto</td>
                <td className="p-3 border-r border-slate-200">Costante de novo ematopoiesi midollare</td>
                <td className="p-3 border-r border-slate-200">Generati da precursori midollari; lunga emivita</td>
                <td className="p-3 font-bold text-emerald-800">Autorinnovamento autonomo periferico (self-renewal)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold bg-slate-50 border-r border-slate-200">Profilo Superficie</td>
                <td className="p-3 border-r border-slate-200">IgM<sup>low</sup>, IgD<sup>high</sup>, CD23<sup>+</sup>, CD21<sup>interm</sup></td>
                <td className="p-3 border-r border-slate-200">IgM<sup>high</sup>, IgD<sup>low</sup>, CD23<sup>-</sup>, CD21/CR2<sup>high</sup>, CD1d<sup>+</sup></td>
                <td className="p-3">IgM<sup>high</sup>, IgD<sup>low</sup>, CD23<sup>-</sup>, CD5<sup>+</sup> (B-1a) o CD5<sup>-</sup> (B-1b)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold bg-slate-50 border-r border-slate-200">Espressione di TdT &amp; Giunzioni</td>
                <td className="p-3 border-r border-slate-200">TdT elevato; ampia variabilità di giunzione (N-nucleotidi)</td>
                <td className="p-3 border-r border-slate-200">TdT presente; repertorio diversificato</td>
                <td className="p-3 font-bold text-rose-700">TdT assente; repertorio stereotipato senza N-nucleotidi</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold bg-slate-50 border-r border-slate-200">Natura dell'Antigene</td>
                <td className="p-3 border-r border-slate-200">Proteine solubili Timo-Dipendenti (TD)</td>
                <td className="p-3 border-r border-slate-200">Polisaccaridi ematici (TI-2) e lipidi microbici (CD1d)</td>
                <td className="p-3">Polisaccaridi, lipidi, fosforilcolina, self apoptotico</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold bg-slate-50 border-r border-slate-200">Cooperazione con Linfociti T</td>
                <td className="p-3 border-r border-slate-200 font-bold text-blue-700">Obbligatoria (Tfh via CD40:CD40L)</td>
                <td className="p-3 border-r border-slate-200">Minima; possono cooperare con cellule iNKT (CD1d)</td>
                <td className="p-3 font-bold text-slate-900">Totalmente assente (T-indipendente pura)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold bg-slate-50 border-r border-slate-200">Reazione Centro Germinativo (GC)</td>
                <td className="p-3 border-r border-slate-200 font-bold text-emerald-700">Costante e robusta</td>
                <td className="p-3 border-r border-slate-200">Rara/assente (differenziazione rapida extrafollicolare)</td>
                <td className="p-3 text-rose-700 font-bold">Assente</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold bg-slate-50 border-r border-slate-200">Isotipo Secretorio Prevalente</td>
                <td className="p-3 border-r border-slate-200">IgG, IgA, IgE (dopo switch indotto da AID)</td>
                <td className="p-3 border-r border-slate-200">IgM a rapida comparsa; scarse IgG</td>
                <td className="p-3">IgM naturali (isoagglutinine AB0), IgA mucosali</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold bg-slate-50 border-r border-slate-200">Maturazione dell'Affinità (SHM)</td>
                <td className="p-3 border-r border-slate-200 font-bold text-blue-700">Elevatissima (selezione darwiniana in GC)</td>
                <td className="p-3 border-r border-slate-200">Bassa o assente (moderata solo nell'uomo)</td>
                <td className="p-3 text-rose-700 font-bold">Nessuna</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold bg-slate-50 border-r border-slate-200">Generazione di Memoria</td>
                <td className="p-3 border-r border-slate-200 font-bold text-blue-700">Cellule B memoria &amp; LLPC midollari decennali</td>
                <td className="p-3 border-r border-slate-200">Scarsa/assente (plasmablasti a breve vita)</td>
                <td className="p-3">Assente (ma persistono cellule B-1 autorinnovanti)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEZIONE 14.9 */}
      <section id="sec-14-9" className="space-y-4">
        <div className="border-l-4 border-rose-700 pl-4">
          <span className="text-xs font-bold text-rose-700 uppercase tracking-widest block">Capitolo 14.9</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Regolazione Negativa: Feedback da Immunocomplessi via FcγRIIB (CD32), ITIM &amp; Inositolo-Fosfatasi SHIP
          </h2>
        </div>

        <p className={proseSizeClass}>
          L'attivazione clonale dei linfociti B deve essere rigorosamente frenata una volta che la carica patogena è stata neutralizzata,
          per prevenire proliferazioni linfomatose incontrollate, ipergammaglobulinemie tossiche o reazioni autoimmuni.
          Oltre ai meccanismi passivi (degradazione dell'antigene ed esaurimento dei T effettori), esistono sofisticati{' '}
          <strong className="text-rose-700">checkpoint recettoriali inibitori attivi</strong> dotati di motivi{' '}
          <strong className="text-slate-900">ITIM (Immunoreceptor Tyrosine-based Inhibitory Motif)</strong>:
        </p>

        <div className="p-5 bg-white border-2 border-rose-200 rounded-2xl shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-rose-100 pb-3">
            <h3 className="font-bold text-rose-950 text-sm flex items-center gap-2">
              <Lock className="w-4 h-4 text-rose-600" />
              Il Circuito Inibitorio di FcγRIIB (CD32): Feedback da Immunocomplessi
            </h3>
            <span className="text-xs font-mono bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-bold">
              Unico FcR Inibitorio sui B
            </span>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed">
            <strong>FcγRIIB (CD32)</strong> è un recettore transmembrana a bassa affinità per il monomero di IgG. Non lega le IgG libere circolanti,
            ma presenta un'avidità elevatissima per gli <strong className="text-slate-900">immunocomplessi</strong> (antigene legato ad anticorpi IgG secreti).
            Quando durante la risposta umorale la concentrazione di IgG specifiche raggiunge livelli elevati, gli immunocomplessi formati legano simultaneamente
            il determinante antigenico tramite il <strong>BCR</strong> e la porzione Fc tramite <strong>FcγRIIB</strong>, inducendo il <em className="text-rose-800">co-clustering</em> dei due recettori.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-rose-50/60 rounded-xl border border-rose-150 space-y-1">
              <span className="font-bold text-rose-900 block">1. Fosforilazione dell'ITIM</span>
              <p className="text-slate-600 leading-relaxed">
                Il co-clustering porta FcγRIIB in stretta vicinanza con la tirosin-chinasi Src (<strong>Lyn</strong>) associata al BCR.
                Lyn fosforila la tirosina del motivo <strong>ITIM</strong> presente nella coda citoplasmatica di FcγRIIB.
              </p>
            </div>

            <div className="p-3 bg-rose-50/60 rounded-xl border border-rose-150 space-y-1">
              <span className="font-bold text-rose-900 block">2. Reclutamento di SHIP</span>
              <p className="text-slate-600 leading-relaxed">
                L'ITIM fosforilato funge da sito di ancoraggio ad alta affinità per il dominio SH2 dell'inositolo-5'-fosfatasi <strong className="text-rose-950">SHIP (SH2-containing Inositol Phosphatase)</strong>.
              </p>
            </div>

            <div className="p-3 bg-rose-50/60 rounded-xl border border-rose-150 space-y-1">
              <span className="font-bold text-rose-900 block">3. Idrolisi di PIP₃ in PIP₂</span>
              <p className="text-slate-600 leading-relaxed">
                SHIP idrolizza il fosfato in posizione 5' di <strong>PIP₃</strong> convertendolo in <strong>PIP₂</strong>.
                Senza PIP₃ sulla membrana, le proteine a dominio PH (<strong className="text-rose-950">Btk, PLCγ2 e Akt</strong>) perdono il loro ancoraggio,
                azzerando la cascata di calcio e arrestando la proliferazione!
              </p>
            </div>
          </div>

          <div className="p-3 bg-rose-100/50 rounded-lg border border-rose-200 text-xs text-rose-900">
            <strong>Rilevanza Clinica:</strong> Topi knock-out per FcγRIIB o per SHIP sviluppano una grave sindrome simil-lupica con ipergammaglobulinemia massiva,
            autoanticorpi anti-DNA a doppio filamento e glomerulonefrite da immunocomplessi letale. Nell'uomo, varianti alleliche ipofunzionanti di FcγRIIB
            sono associate a predisposizione al Lupus Eritematoso Sistemico (LES).
          </div>
        </div>
      </section>

      {/* SEZIONE 14.10 */}
      <section id="sec-14-10" className="space-y-4">
        <div className="border-l-4 border-indigo-700 pl-4">
          <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest block">Capitolo 14.10</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Regolazione Negativa: Il Corecettore CD22 (Siglec-2), Acidi Sialici Self, Fosfatasi SHP-1/SHP-2 &amp; Tolleranza
          </h2>
        </div>

        <p className={proseSizeClass}>
          Mentre FcγRIIB agisce come feedback dipendente dalla sintesi pregressa di IgG, il recettore <strong className="text-indigo-800">CD22 (Siglec-2)</strong>{' '}
          opera come un <em className="text-slate-900">freno tonico costitutivo</em>, fondamentale per mantenere elevata la soglia di tolleranza verso gli autoantigeni
          e distinguere il self dal non-self:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-white rounded-xl border border-indigo-200 shadow-xs space-y-2">
            <h3 className="font-bold text-indigo-950 text-sm flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-indigo-600" />
              Lectine Siglec &amp; Riconoscimento Acidi Sialici
            </h3>
            <p className="text-slate-700 leading-relaxed">
              CD22 appartiene alla superfamiglia delle immunoglobuline e al gruppo delle lectine <strong>Siglec</strong> (Sialic acid-binding Ig-type lectins).
              Il suo dominio extracellulare riconosce residui di <strong className="text-indigo-900">acido sialico legato con legame α-2,6 al galattosio</strong>.
              Gli acidi sialici sono abbondantissimi sulla superficie di tutte le cellule dei vertebrati (self), mentre sono del tutto assenti o rarissimi
              sulla maggior parte dei microrganismi invasivi.
            </p>
            <p className="text-slate-600 leading-relaxed">
              CD22 opera tramite due modalità topologiche:
              <br />• <strong>Interazioni in cis:</strong> lega acidi sialici presenti su glicoproteine della stessa membrana del linfocita B (incluse le IgM del BCR).
              <br />• <strong>Interazioni in trans:</strong> lega acidi sialici esposti su cellule dell'ospite adiacenti.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-indigo-200 shadow-xs space-y-2">
            <h3 className="font-bold text-indigo-950 text-sm flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-indigo-600" />
              Cascata Biochimica: Motivi ITIM &amp; SHP-1/SHP-2
            </h3>
            <p className="text-slate-700 leading-relaxed">
              La coda intracellulare di CD22 racchiude ben <strong className="text-indigo-900">sei motivi ITIM</strong>.
              Quando il BCR riceve un debole stimolo in vicinanza di CD22 (o in presenza di ligandi self sialilati), le chinasi Lyn fosforilano le tirosine degli ITIM di CD22.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Gli ITIM fosforilati reclutano potentemente le tirosin-fosfatasi <strong className="text-slate-900">SHP-1</strong> (e in misura minore SHP-2), oltre a SHIP.
              A differenza di SHIP (che agisce sui lipidi), SHP-1 defosforila direttamente le proteine bersaglio:
              <strong> Syk, le code di CD79a/CD79b e l'adattatore BLNK (SLP-65)</strong>.
              In questo modo, qualsiasi segnale di cross-linking accidentale verso autoantigeni viene abortito sul nascere.
            </p>
          </div>
        </div>

        <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-xs space-y-2">
          <h4 className="font-bold text-indigo-950 flex items-center gap-1.5 text-xs">
            <Info className="w-4 h-4 text-indigo-600" />
            Quadro Riassuntivo dei Freni Recettoriali del Linfocita B
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-slate-700 bg-white rounded-lg border border-indigo-150">
              <thead className="bg-indigo-100/70 text-indigo-900 font-bold border-b border-indigo-200">
                <tr>
                  <th className="p-2">Recettore</th>
                  <th className="p-2">Ligando Fisiologico</th>
                  <th className="p-2">Motivo Citosolico</th>
                  <th className="p-2">Effettore Reclutato</th>
                  <th className="p-2">Bersaglio &amp; Meccanismo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-indigo-100 text-[11px]">
                <tr>
                  <td className="p-2 font-bold text-rose-800">FcγRIIB (CD32)</td>
                  <td className="p-2">Immunocomplessi IgG</td>
                  <td className="p-2 font-mono">1 motivo ITIM</td>
                  <td className="p-2 font-bold text-purple-700">Inositolo fosfatasi SHIP</td>
                  <td className="p-2">Converte PIP₃ in PIP₂; delocalizza Btk, PLCγ2 e Akt</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-indigo-800">CD22 (Siglec-2)</td>
                  <td className="p-2">Acidi Sialici α-2,6 (Self)</td>
                  <td className="p-2 font-mono">6 motivi ITIM</td>
                  <td className="p-2 font-bold text-blue-700">Tirosin-fosfatasi SHP-1/2 (+ SHIP)</td>
                  <td className="p-2">Defosforila Syk, CD79a/b e BLNK; innalza soglia tolleranza</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-emerald-800">CD5 (sui B-1a)</td>
                  <td className="p-2">Ligandi self / CD72</td>
                  <td className="p-2 font-mono">Motivi ITIM / pseudo-ITIM</td>
                  <td className="p-2 font-bold text-blue-700">Fosfatasi SHP-1</td>
                  <td className="p-2">Frena l'attivazione verso autoantigeni nei cloni B-1a</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-slate-800">PD-1 (CD279)</td>
                  <td className="p-2">PD-L1 / PD-L2</td>
                  <td className="p-2 font-mono">ITIM e ITSM</td>
                  <td className="p-2 font-bold text-blue-700">SHP-2</td>
                  <td className="p-2">Inibisce la fosforilazione di PI3K e Akt</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Schema Concettuale di Processo: Circuiti Inibitori ITIM (FcγRIIB vs CD22) */}
        <ConceptMapFlow {...MAP_LEZIONE_14_INHIBITORY_CIRCUITS} />
      </section>

      {/* --- SIMULATORE INTERATTIVO 2 --- */}
      <section id="sim-inibizione-b" className="p-5 bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 text-white rounded-2xl shadow-md space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rose-800/60 pb-3">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-rose-400" />
            <h3 className="font-bold text-sm sm:text-base text-white tracking-wide">
              Simulatore dei Circuiti Inibitori: FcγRIIB (SHIP) &amp; CD22 (SHP-1/2)
            </h3>
          </div>
          <span className="text-xs bg-rose-500/20 text-rose-300 border border-rose-400/30 px-2.5 py-1 rounded-full font-mono">
            Modulatore di Segnale In Vitro
          </span>
        </div>

        {/* CONTROLLI DEL SIMULATORE 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div>
            <label className="text-rose-200 font-semibold mb-1.5 block">Stimolazione Primaria BCR:</label>
            <button
              onClick={() => setSim2BcrStimulated(!sim2BcrStimulated)}
              className={`w-full py-1.5 px-2 rounded-lg font-bold transition-all text-center flex items-center justify-center gap-1.5 ${
                sim2BcrStimulated
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>{sim2BcrStimulated ? 'BCR Attivato da Antigene' : 'BCR a Riposo (Tonico)'}</span>
            </button>
          </div>

          <div>
            <label className="text-rose-200 font-semibold mb-1.5 block">Immunocomplessi IgG (FcγRIIB):</label>
            <button
              onClick={() => setSim2ImmuneComplexes(!sim2ImmuneComplexes)}
              className={`w-full py-1.5 px-2 rounded-lg font-bold transition-all text-center flex items-center justify-center gap-1.5 ${
                sim2ImmuneComplexes
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{sim2ImmuneComplexes ? 'Complessi IgG Presenti (Attivi)' : 'Assenti (Nessun Feedback)'}</span>
            </button>
          </div>

          <div>
            <label className="text-rose-200 font-semibold mb-1.5 block">Acidi Sialici Self α-2,6 (CD22):</label>
            <button
              onClick={() => setSim2SialicAcidsPresent(!sim2SialicAcidsPresent)}
              className={`w-full py-1.5 px-2 rounded-lg font-bold transition-all text-center flex items-center justify-center gap-1.5 ${
                sim2SialicAcidsPresent
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{sim2SialicAcidsPresent ? 'Acidi Sialici Riconosciuti' : 'Assenti / Enzima Neuraminidasi'}</span>
            </button>
          </div>
        </div>

        {/* OUTPUT LIVE DEL SIMULATORE 2 */}
        <div className="bg-slate-950/80 p-4 rounded-xl border border-rose-900/60 grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs">
          {/* STATO FOSFORILAZIONE A MONTE */}
          <div className="space-y-2 border-b lg:border-b-0 lg:border-r border-rose-900/50 pb-3 lg:pb-0 lg:pr-3">
            <h4 className="font-mono text-rose-300 uppercase tracking-wider font-bold text-[11px] flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Chinasi a Monte: Syk &amp; BLNK
            </h4>
            {!sim2BcrStimulated ? (
              <p className="text-slate-400">BCR inattivo: fosforilazione basale minima.</p>
            ) : sim2SialicAcidsPresent ? (
              <div className="space-y-1">
                <p className="text-rose-400 font-semibold">✗ CD22 ingaggia acidi sialici → SHP-1 attivo!</p>
                <p className="text-slate-300 text-[11px]">SHP-1 defosforila Syk e BLNK: il segnale a monte viene drasticamente attenuato.</p>
              </div>
            ) : (
              <div className="space-y-1">
                <p className="text-emerald-400 font-semibold">✓ Syk e BLNK pienamente fosforilati</p>
                <p className="text-slate-300 text-[11px]">Assenza di CD22/SHP-1: trasduzione verso PLCγ2 libera da inibizione prossimale.</p>
              </div>
            )}
          </div>

          {/* STATO LIPIDI DI MEMBRANA: PIP3 vs PIP2 */}
          <div className="space-y-2 border-b lg:border-b-0 lg:border-r border-rose-900/50 pb-3 lg:pb-0 lg:pr-3">
            <h4 className="font-mono text-rose-300 uppercase tracking-wider font-bold text-[11px] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              Dinamica Lipidica: PIP₃ vs PIP₂
            </h4>
            {!sim2BcrStimulated ? (
              <p className="text-slate-400">Livelli fisiologici stazionari di fosfoinositidi.</p>
            ) : sim2ImmuneComplexes ? (
              <div className="space-y-1">
                <p className="text-rose-400 font-semibold">✗ FcγRIIB attivo → Reclutamento di SHIP</p>
                <p className="text-slate-300 text-[11px]">
                  SHIP idrolizza PIP₃ → PIP₂. <strong>Btk, PLCγ2 e Akt non possono ancorarsi alla membrana</strong>.
                </p>
              </div>
            ) : (
              <div className="space-y-1">
                <p className="text-emerald-400 font-semibold">✓ Accumulo di PIP₃ guidato da PI3K</p>
                <p className="text-slate-300 text-[11px]">Btk e PLCγ2 ancorati; via libera alla sintesi di IP₃ e DAG.</p>
              </div>
            )}
          </div>

          {/* ESITO FINALE: CALCIO & PROLIFERAZIONE */}
          <div className="space-y-2">
            <h4 className="font-mono text-rose-300 uppercase tracking-wider font-bold text-[11px] flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              Flusso di Ca²⁺ &amp; Output Proliferativo
            </h4>
            {!sim2BcrStimulated ? (
              <div className="p-2 bg-slate-900 rounded border border-slate-700 text-slate-400">
                Linfocita B quiescente in G₀.
              </div>
            ) : sim2ImmuneComplexes && sim2SialicAcidsPresent ? (
              <div className="p-2 bg-rose-950/60 rounded border border-rose-800 text-rose-200">
                <p className="font-semibold text-rose-400">Spegnimento Completo (Blocco Doppio)</p>
                <p className="text-[11px] text-rose-200 mt-1">
                  Syk defosforilato da SHP-1 e PIP₃ idrolizzato da SHIP. Nessun afflusso di Ca²⁺; NFAT e NF-κB rimangono inattivi.
                </p>
              </div>
            ) : sim2ImmuneComplexes ? (
              <div className="p-2 bg-amber-950/50 rounded border border-amber-800 text-amber-200">
                <p className="font-semibold text-amber-300">Feedback Negativo da Anticorpi (SHIP)</p>
                <p className="text-[11px] text-amber-200 mt-1">
                  La risposta è soppressa per accumulo di immunocomplessi IgG. Il clone cessa la secrezione anticorpale.
                </p>
              </div>
            ) : sim2SialicAcidsPresent ? (
              <div className="p-2 bg-indigo-950/50 rounded border border-indigo-800 text-indigo-200">
                <p className="font-semibold text-indigo-300">Tolleranza Verso il Self (SHP-1)</p>
                <p className="text-[11px] text-indigo-200 mt-1">
                  CD22 riconosce acidi sialici self: innalzamento della soglia e prevenzione di reazioni autoimmuni.
                </p>
              </div>
            ) : (
              <div className="p-2 bg-emerald-950/50 rounded border border-emerald-800 text-emerald-200">
                <p className="font-semibold text-emerald-300">Attivazione Massimale e Proliferazione</p>
                <p className="text-[11px] text-emerald-100 mt-1">
                  Scarica esplosiva di Ca²⁺, traslocazione nucleare di NFAT, NF-κB e AP-1, proliferazione clonale e switch.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_QUESTIONS} lessonNumber={14} title="Verifica dell'Apprendimento · Lezione 14" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS} lessonNumber={14} title="Flashcard di Ripasso Attivo · Lezione 14" />

      {/* --- SEZIONE QUADERNO NOTE DELLO STUDENTE --- */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-150 pb-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-slate-900 text-base">Quaderno Personale di Immunologia (Lezione 14)</h3>
          </div>
          {noteSaved && (
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1 animate-pulse">
              <Check className="w-3.5 h-3.5" />
              Salvato localmente!
            </span>
          )}
        </div>

        <p className="text-xs text-slate-500">
          Usa questo spazio per annotare concetti chiave, schemi riassuntivi o domande per il docente. Il testo viene memorizzato automaticamente nel tuo browser.
        </p>

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Scrivi qui i tuoi appunti clinici su TI-1/TI-2, vaccini coniugati, B-1, MZ e circuiti ITIM (FcγRIIB / CD22)..."
          className="w-full h-32 p-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 font-sans leading-relaxed"
        />

        <div className="flex justify-end">
          <button
            onClick={handleSaveNote}
            className="py-1.5 px-4 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
          >
            Conferma Salvataggio
          </button>
        </div>
      </section>
    </div>
  );
};
