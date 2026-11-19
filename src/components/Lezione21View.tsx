import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import { ConceptMapFlow } from './ConceptMapFlow';
import { MAP_LEZIONE_21_NK_BALANCE_AND_MISSING_SELF, MAP_LEZIONE_21_KIR_GENETICS_AND_PREECLAMPSIA } from '../data/conceptMapsData';
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
  ArrowRight
} from 'lucide-react';

interface Lezione21ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export function Lezione21View({ isSerif, fontSize }: Lezione21ViewProps) {
  // Simulator 1: Missing-Self & ADCC Lab State
  const [selectedScenario, setSelectedScenario] = useState<
    'healthy' | 'missing' | 'induced' | 'adcc' | 'evasion'
  >('healthy');

  // Simulator 2: Clinical Kir Mismatch & Preeclampsia State
  const [clinicalTab, setClinicalTab] = useState<'transplant' | 'pregnancy'>('transplant');
  
  // Transplant scenario state
  const [patientHla, setPatientHla] = useState<'C1_homo' | 'C2_homo' | 'Bw4_pos'>('C1_homo');
  const [donorKir, setDonorKir] = useState<'anti_C2' | 'anti_C1' | 'all_match'>('anti_C2');

  // Pregnancy scenario state
  const [maternalAplotype, setMaternalAplotype] = useState<'AA' | 'Bx'>('AA');
  const [fetalHlaC, setFetalHlaC] = useState<'C1' | 'C2'>('C2');

  // Flashcards active recall state
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  // Official Quiz state
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
    "front": "Qual è il profilo fenotipico essenziale delle cellule NK e quale citochina ne guida obbligatoriamente lo sviluppo midollare?",
    "back": "CD56⁺ CD16⁺ CD3⁻ (TCR⁻) BCR⁻. La citochina obbligata è IL-15 (la cui catena γc è mutata nella SCID X-linked T⁻ B⁺ NK⁻).",
    "category": "FENOTIPO & ONTOGENESI"
  },
  {
    "id": 2,
    "front": "Cosa riconosce il recettore NKG2D e quale adattatore citoplasmatico recluta?",
    "back": "Riconosce molecole stress-induced (MICA, MICB, ULBP1-4) indotte da danno al DNA o tumori. Recluta l'adattatore DAP10 (motivo YINM / PI3K).",
    "category": "REPERTORIO ATTIVATORIO"
  },
  {
    "id": 3,
    "front": "Qual è il ligando del recettore CD94/NKG2A e cosa esprime in membrana?",
    "back": "Lega HLA-E, che presenta i peptidi leader derivati dalla biosintesi conservata delle molecole classiche HLA-A, B, C sane.",
    "category": "INIBIZIONE & HLA-E"
  },
  {
    "id": 4,
    "front": "Che differenza genetica sussiste tra Aplotipo KIR A e B, e qual è il vantaggio clinico dell'aplotipo B?",
    "back": "L'Aplotipo A ha quasi solo KIR inibitori; l'Aplotipo B possiede molteplici KIR attivatori (KIR-S). Si associa a stato di long-term non-progressor nell'infezione da HIV.",
    "category": "APLOTIPI KIR"
  },
  {
    "id": 5,
    "front": "In che modo l'interazione tra uNK materne e trofoblasto fetale può provocare preeclampsia?",
    "back": "Madre con aplotipo inibitorio KIR AA + Feto con HLA-C2 paterno: le uNK vengono iper-inibite, bloccano la secrezione di VEGF e impediscono il rimodellamento delle arterie spirali.",
    "category": "CLINICA UTERINA"
  },
  {
    "id": 6,
    "front": "Nello studio Ruggeri-Velardi (2002), perché il KIR-mismatch azzera le recidive di AML senza provocare GVHD?",
    "back": "Le NK trapiantate uccidono i blasti leucemici che mancano di HLA (GvL), ma non toccano i tessuti sani perché questi ultimi non esprimono ligandi da stress (induced-self).",
    "category": "TRAPIANTO APLOIDENTICO"
  }
];
  const QUIZ_QUESTIONS = [
  {
    "id": 1,
    "question": "[Slide Ufficiale 15] Le cellule linfoidi innate ILC:",
    "options": [
      "del gruppo 3 producono IFN γ",
      "del gruppo 1 producono IL-22",
      "del gruppo 2 esprimono il fattore di trascrizione RORγt",
      "del gruppo 1 fanno parte le cellule NK",
      "del gruppo 2 fanno parte quelle cellule più abbondanti nei siti mucosali"
    ],
    "correctIndex": 3,
    "explanation": "Risposta Esatta: D. Come spiegato dalla docente a fine lezione, le cellule NK appartengono al Gruppo 1 delle ILC (insieme alle ILC1). RORγt è tipico del Gruppo 3 e dei Th17; l'IL-22 è prodotta da ILC3/Th17; l'IFN-γ è prodotto dal Gruppo 1."
  },
  {
    "id": 2,
    "question": "[Slide Ufficiale 15] Le cellule NK possiedono recettori per (Indica la risposta errata):",
    "options": [
      "molecole MHC di classe II",
      "molecole MHC di classe I",
      "molecole MICA/B",
      "molecole HLA-E",
      "frammento Fc delle IgG"
    ],
    "correctIndex": 0,
    "explanation": "Risposta Esatta: A. Le cellule NK non possiedono recettori per molecole MHC di classe II! Riconoscono MHC di classe I (KIR), HLA-E (CD94/NKG2A), MICA/B (NKG2D) e il frammento Fc delle IgG (CD16)."
  },
  {
    "id": 3,
    "question": "[Slide Ufficiale 16] Le cellule NK sono:",
    "options": [
      "linfociti killer con repertorio recettoriale oligoclonale",
      "cellule T citotossiche",
      "ILC di tipo 1",
      "capaci di uccidere cellule infettate da virus senza una precedente sensibilizzazione",
      "Vere C) e D)"
    ],
    "correctIndex": 4,
    "explanation": "Risposta Esatta: E. Le cellule NK appartengono al Gruppo 1 delle ILC e sono capaci di uccidere spontaneamente cellule infettate da virus senza alcuna precedente sensibilizzazione clonale."
  },
  {
    "id": 4,
    "question": "[Slide Ufficiale 16] Le cellule NK (Indica la risposta errata):",
    "options": [
      "uccidono cellule infettate da virus e cellule neoplastiche",
      "vengono attivate tramite recettore per le immunoglobuline (CD16)",
      "svolgono un ruolo immunoregolatorio",
      "esprimono il TCR γδ",
      "vengono inibite dal legame con molecole MHC di classe I"
    ],
    "correctIndex": 3,
    "explanation": "Risposta Esatta: D. Le cellule NK non esprimono alcun tipo di TCR (né αβ né γδ) e non riarrangiano i geni del recettore clonale; sono CD3⁻ TCR⁻."
  },
  {
    "id": 5,
    "question": "[Slide Ufficiale 16] Con quale meccanismo un tumore può evadere la risposta delle cellule NK?",
    "options": [
      "Perdita di espressione del CD16",
      "Induzione della espressione di MICA e MICB",
      "Rilascio di MICA e MICB in forma solubile",
      "Ridotta espressione di KIR"
    ],
    "correctIndex": 2,
    "explanation": "Risposta Esatta: C. Il tumore rilascia MICA e MICB solubili tramite metalloproteasi (shedding). I ligandi solubili saturano e inducono l'internalizzazione di NKG2D, rendendo l'NK \"cieca\" e incapace di aderire alla cellula maligna. (La perdita di MHC-I stimolerebbe l'NK anziché farla evadere!)."
  },
  {
    "id": 6,
    "question": "[Slide Ufficiale 16] Citochine prodotte dalle cellule NK (Indica la risposta errata):",
    "options": [
      "IFN-γ",
      "IL-2",
      "VEGF",
      "TNF-α",
      "Come in A e B"
    ],
    "correctIndex": 1,
    "explanation": "Risposta Esatta: B. La Prof.ssa Galandrini ha rimarcato questo concetto: l'IL-2 viene prodotta solo dai linfociti T attivati. Le cellule NK possono rispondere all'IL-2 (trasformandosi in cellule LAK in vitro), ma non producono autonomamente IL-2. Producono invece IFN-γ, TNF-α e VEGF (nelle uNK)."
  },
  {
    "id": 7,
    "question": "[Slide Ufficiale 16] Secondo la teoria del «missing self» le cellule NK uccidono quando:",
    "options": [
      "La cellula bersaglio esprime ligandi di recettori attivatori",
      "La cellula bersaglio non esprime MHC-I",
      "La cellula bersaglio non esprime MHC-II",
      "La cellula NK esprime recettori attivatori",
      "La cellula bersaglio è opsonizzata da anticorpi self"
    ],
    "correctIndex": 1,
    "explanation": "Risposta Esatta: B. Nella formulazione classica di Klas Kärre (1981), l'innesco del killing avviene quando la cellula bersaglio ha perso o down-regolato l'espressione di MHC di classe I (\"missing\"), rimuovendo il freno inibitorio esercitato sui KIR/NKG2A."
  },
  {
    "id": 8,
    "question": "Quale combinazione immunogenetica materna e fetale è associata a un elevato rischio di preeclampsia?",
    "options": [
      "Madre KIR Bx + Feto HLA-C1",
      "Madre KIR AA + Feto HLA-C2",
      "Madre KIR AA + Feto privo di HLA-E",
      "Madre KIR Bx + Feto HLA-C2",
      "Madre omozigote per mutazione di CD16"
    ],
    "correctIndex": 1,
    "explanation": "Risposta Esatta: B. La combinazione tra madre omozigote per l'aplotipo inibitorio KIR AA e trofoblasto extravilloso fetale esprimente alleli HLA-C del Gruppo 2 (paterni) induce un'inibizione eccessiva delle uNK, bloccando il rilascio di VEGF e il rimodellamento delle arterie spirali uterine."
  },
  {
    "id": 9,
    "question": "Nello studio di Ruggeri e Velardi sul trapianto di midollo allogenico, perché le cellule NK alloreattive del donatore (KIR-mismatched) eliminano i blasti leucemici ma non causano GVHD nei tessuti sani del paziente?",
    "options": [
      "Perché i tessuti sani del paziente esprimono livelli dieci volte superiori di HLA-E",
      "Perché le cellule NK del donatore perdono la capacità di degranulare la perforina",
      "Perché i tessuti sani del ricevente non esprimono i ligandi attivatori da stress (induced-self), presenti invece sui blasti leucemici",
      "Perché le cellule NK vengono distrutte dai linfociti T del ricevente"
    ],
    "correctIndex": 2,
    "explanation": "Risposta Esatta: C. L'assenza di MHC-I (missing self) è necessaria ma non sufficiente da sola per innescare la lisi: serve un segnale positivo indotto dai ligandi attivatori (MICA/B, ULBP, CD155). I blasti leucemici esprimono ligandi da stress; i tessuti sani (cute, fegato, intestino) non li esprimono, risultando immuni alla lisi e impedendo la GVHD."
  },
  {
    "id": 10,
    "question": "Quale alterazione citofluorimetrica caratterizza la SCID legata all'X dovuta a mutazione del gene codificante per la subunità gamma-comune (γc / CD132)?",
    "options": [
      "Assenza isolata di Linfociti B con Linfociti T ed NK normali",
      "Assenza di Linfociti T ed NK, con Linfociti B presenti in numero normale o elevato (T⁻ B⁺ NK⁻)",
      "Iperespressione di CD16 e deficit di perforina",
      "Assenza simultanea di tutte e tre le linee (T⁻ B⁻ NK⁻)",
      "Pancitopenia da arresto della cellula staminale emopoietica (HSC)"
    ],
    "correctIndex": 1,
    "explanation": "Risposta Esatta: B. La catena γc è condivisa dal recettore dell'IL-7 (fondamentale per i linfociti T) e dell'IL-15 (indispensabile per le cellule NK). La sua mutazione azzera sia i linfociti T sia le cellule NK, lasciando i linfociti B presenti nel sangue periferico ma funzionalmente inattivi (fenotipo T⁻ B⁺ NK⁻)."
  }
];

  return (
    <article className="space-y-12">
      {/* Intestazione Ufficiale Accademica */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-150 pb-4 mb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold">Lezione 21</span>
            <span>·</span>
            <span>17 Novembre 2025 (1ª e 2ª ora)</span>
            <span>·</span>
            <span>Docente: <strong>Prof.ssa Ricciarda Galandrini</strong></span>
          </div>
          <div className="text-xs font-mono text-slate-500">
            Sbobinatori: <strong>Aurora Bisceglia</strong> (1ª ora), <strong>Chiara Congiunti</strong> (2ª ora) | Revisori: <strong>Arianna Collura</strong>, <strong>Giulia Corsini</strong>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-serif-heading">
          Cellule Natural Killer (NK): Recettori Attivatori e Inibitori, Teoria del Missing-Self, ILCs & Implicazioni Cliniche
        </h1>

        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          Trattazione monografica completa sui linfociti citotossici dell'immunità innata: scoperta storica e cinquantenario (1975–2025),
          morfologia di Grandi Linfociti Granulari (LGL), ontogenesi guidata da IL-15, inquadramento nella famiglia delle ILCs di Gruppo 1,
          recettori attivatori (CD16/ADCC, NKG2D, NCR, DNAM-1), recettori inibitori ITIM (KIR su chr 19 e CD94/NKG2A su chr 12 per HLA-E),
          genetica di popolazione e aplotipi A e B, la formulazione sperimentale del <em>Missing-Self</em> (Klas Kärre 1981), fino alle frontiere cliniche:
          ruolo pro-angiogenetico delle NK uterine (uNK) e rischio preeclampsia, immunoevasione tumorale e la pietra miliare del <strong>KIR-mismatch</strong> nel trapianto allogenico (Studio Ruggeri-Velardi).
        </p>
      </div>

      <div className={proseClass}>
        {/* 21.1 INTRODUZIONE & FENOTIPO */}
        <section id="sec-21-1" className="space-y-4">
          <div className="flex items-center gap-2 text-blue-700">
            <Shield className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              21.1 Scoperta delle Cellule NK, Morfologia LGL & Fenotipo (CD56+, CD16+, TCR⁻, BCR⁻)
            </h2>
          </div>

          <p>
            Le <strong>cellule Natural Killer (NK)</strong> furono identificate sperimentalmente a metà degli anni Settanta (la loro scoperta risale al <strong>1975</strong>, di cui ricorre il cinquantenario nel 2025). Vennero scoperte durante studi sul rigetto tumorale in modelli murini, in cui si osservò una popolazione di cellule linfoidi capace di uccidere spontaneamente cellule leucemiche <em>senza alcuna precedente immunizzazione o sensibilizzazione clonale</em>.
          </p>

          <p>
            Dal punto di vista citologico e morfologico al microscopio ottico, le cellule NK vengono definite <strong>Grandi Linfociti Granulari (LGL - Large Granular Lymphocytes)</strong>:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
            <li><strong>Dimensioni Maggiori</strong>: presentano un diametro notevolmente superiore rispetto ai piccoli linfociti T e B vergini a riposo, con un citoplasma più abbondante.</li>
            <li><strong>Granularità Costitutiva</strong>: contengono costitutivamente un ricco corredo di granuli citoplasmatici elettrondensi contenenti mediatori litici enzimatici (<strong>perforina</strong> e <strong>granzimi</strong>).</li>
            <li><strong>Cellule Effettrici Costitutive Pronte all'Azione</strong>: a differenza dei linfociti T citotossici (CTL CD8+ naive) che richiedono giorni di priming linfonodale, proliferazione ed espansione clonale prima di acquisire i granuli litici, le NK nascono già come <em>cellule effettrici mature</em>, pronte a scatenare la lisi o secernere citochine istantaneamente non appena riconoscono la cellula bersaglio.</li>
          </ul>

          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs font-sans">
            <h4 className="font-bold text-blue-950 text-sm mb-1.5 flex items-center gap-2">
              <Info className="w-4 h-4 text-blue-700" />
              L'Immunofenotipo Diagnostico nel Sangue Periferico
            </h4>
            <p className="text-blue-900 m-0 leading-relaxed">
              Nei referti clinici di citometria a flusso (pannello sottopopolazioni linfocitarie), le cellule NK sono rigorosamente identificate come <strong>CD56⁺ CD3⁻ (TCR⁻) e BCR⁻</strong>. Il <strong>CD56</strong> (NCAM - Neural Cell Adhesion Molecule) è il marcatore di popolazione cardine. Esse non riarrangiano i geni per le immunoglobuline né per il TCR; non possiedono recettori clonotipici per l'antigene e sono prive di memoria immunologica classica. Nel sangue periferico esprimono inoltre il recettore <strong>CD16</strong> (FcγRIIIA).
            </p>
          </div>
        </section>

        {/* 21.2 ONTOGENESI MIDOLLARE & IL-15 */}
        <section id="sec-21-2" className="space-y-4">
          <div className="flex items-center gap-2 text-indigo-700">
            <Dna className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              21.2 Ontogenesi nel Midollo Osseo, Asse IL-15 / Catena γ-Comune & SCID X-Linked
            </h2>
          </div>

          <p>
            Le cellule NK condividono l'origine ematopoietica con gli altri linfociti: derivano dalla cellula staminale emopoietica multipotente (HSC) che dà origine al <strong>Common Lymphoid Progenitor (CLP)</strong> nel midollo osseo. Tuttavia, mentre i linfociti T migrano nel timo e i B completano la maturazione nelle nicchie sinusoidali midollari tramite riarrangiamento genico:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
            <li>La maturazione e la differenziazione terminale delle cellule NK avvengono interamente nel <strong>midollo osseo</strong> e sono rigidamente controllate e dipendenti dalla citochina <strong>Interleuchina-15 (IL-15)</strong>.</li>
            <li>L'IL-15 è il fattore di crescita e sopravvivenza essenziale per il lineage NK: induce la trascrizione dei programmi citotossici, la formazione dei granuli litici e il mantenimento del pool di riserva.</li>
          </ul>

          {/* Focus SCID X-Linked */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs font-sans">
            <h4 className="font-bold text-amber-950 text-sm mb-1.5 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              Correlazione Clinica: La Catena γ-Comune (γc / CD132) e la SCID X-Linked
            </h4>
            <p className="text-amber-900 m-0 leading-relaxed">
              Il recettore per l'IL-15 è un eterotrimero formato dalla catena specifica IL-15Rα, dalla catena IL-2Rβ (CD122) e dalla <strong>catena gamma-comune (γc / CD132)</strong>. La subunità γc è condivisa con i recettori per <em>IL-2, IL-4, IL-7, IL-9, IL-15 e IL-21</em>.
              <br /><br />
              Nella <strong>SCID X-Linked (Immunodeficienza Combinata Grave legata all'X)</strong>, causata da mutazioni del gene <em>IL2RG</em> codificante per γc, si verifica un arresto completo dello sviluppo linfocitario con fenotipo <strong>T⁻ B⁺ NK⁻</strong>:
              <br />
              • Mancanza di Linfociti T dovuta al blocco del segnale di <strong>IL-7</strong> (indispensabile nel timo).
              <br />
              • Mancanza assoluta di Cellule NK dovuta al blocco del segnale di <strong>IL-15</strong> nel midollo osseo.
              <br />
              I linfociti B sono presenti in numero normale ma risultano non funzionali per assenza dell'aiuto T-dipendente e del segnale di IL-4/IL-21.
            </p>
          </div>
        </section>

        {/* 21.3 ILCs */}
        <section id="sec-21-3" className="space-y-4">
          <div className="flex items-center gap-2 text-purple-700">
            <Layers className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              21.3 La Famiglia delle Cellule Linfoidi Innate (ILCs di Gruppo 1, 2 e 3 a Confronto)
            </h2>
          </div>

          <p>
            Come sottolineato ampiamente dalla Prof.ssa Galandrini nelle slide 2 e 3, le cellule NK non sono entità isolate, ma costituiscono il membro fondatore della grande famiglia delle <strong>Innate Lymphoid Cells (ILCs)</strong>. Le ILCs sono la controparte innata, priva di recettori clonotipici riarrangiati, delle sottopopolazioni dei linfociti T helper e citotossici. Si dividono in <strong>tre gruppi principali</strong> che rispecchiano le polarizzazioni immunitarie di Tipo 1, Tipo 2 e Tipo 3:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
            {/* Gruppo 1 */}
            <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 space-y-2">
              <span className="font-bold text-blue-900 text-sm block">Gruppo 1 ILC (Tipo 1)</span>
              <p className="text-blue-950 m-0 leading-relaxed">
                <strong>Cellule:</strong> NK e ILC1.<br />
                <strong>Master Regulators:</strong> <strong>T-bet</strong> ed <strong>EOMES</strong> (Eomesodermina, fondamentale per le NK citotossiche).<br />
                <strong>Stimoli:</strong> IL-12, IL-15, IL-18.<br />
                <strong>Citochine Prodotte:</strong> <strong>IFN-γ</strong> e TNF-α.<br />
                <strong>Ruolo:</strong> Difesa contro patogeni intracellulari (virus, micobatteri) e immunosorveglianza oncologica. <em>Le ILC1 sono residenti e non citotossiche; le NK sono circolanti e citotossiche.</em>
              </p>
            </div>

            {/* Gruppo 2 */}
            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-2">
              <span className="font-bold text-emerald-900 text-sm block">Gruppo 2 ILC (Tipo 2)</span>
              <p className="text-emerald-950 m-0 leading-relaxed">
                <strong>Cellule:</strong> ILC2.<br />
                <strong>Master Regulators:</strong> <strong>GATA3</strong> e BCL11B.<br />
                <strong>Stimoli (Allarmine):</strong> IL-25, IL-33, TSLP.<br />
                <strong>Citochine Prodotte:</strong> <strong>IL-4, IL-5, IL-13</strong>, Anfipregulina (AREG).<br />
                <strong>Ruolo:</strong> Difesa contro parassiti ed elminti, riparazione epiteliale tissutale, patogenesi di asma allergica e dermatite atopica (analogo innato dei Th2).
              </p>
            </div>

            {/* Gruppo 3 */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 space-y-2">
              <span className="font-bold text-amber-900 text-sm block">Gruppo 3 ILC (Tipo 3)</span>
              <p className="text-amber-950 m-0 leading-relaxed">
                <strong>Cellule:</strong> ILC3 e cellule LTi (Lymphoid Tissue inducer).<br />
                <strong>Master Regulators:</strong> <strong>RORγt</strong> (recettore ormonale nucleare).<br />
                <strong>Stimoli:</strong> IL-23 e IL-1β.<br />
                <strong>Citochine Prodotte:</strong> <strong>IL-17</strong> e <strong>IL-22</strong>.<br />
                <strong>Ruolo:</strong> Difesa di barriera mucosale (epitelio intestinale e polmonare) contro funghi e batteri extracellulari; organogenesi linfonodale fetale (cellule LTi).
              </p>
            </div>
          </div>
        </section>

        {/* 21.4 LOCALIZZAZIONE & LE 2 FUNZIONI CARDINALI */}
        <section id="sec-21-4" className="space-y-4">
          <div className="flex items-center gap-2 text-rose-700">
            <HeartPulse className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              21.4 Distribuzione Tissutale e le Due Funzioni Cardinali: Citotossicità vs Immunoregolazione
            </h2>
          </div>

          <p>
            Nel sangue periferico umano, i linfociti presentano una ripartizione percentuale caratteristica: i <strong>linfociti T</strong> rappresentano la netta maggioranza (~<strong>70%</strong>), mentre i <strong>linfociti B</strong> e le <strong>cellule NK</strong> si attestano su un pari merito del <strong>10% – 15%</strong> ciascuno.
          </p>

          <p>
            Oltre al sangue periferico, le NK risiedono stabilmente in specifici distretti parenchimali come <strong>cellule residenti</strong>:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
            <li><strong>Fegato</strong>: rappresentano fino al 30-50% dei linfociti intraepatici residenti, fornendo una barriera di prima linea contro patogeni provenienti dal circolo portale.</li>
            <li><strong>Utero (Decidua Gravidica)</strong>: popolazione specializzata denominata <strong>uNK</strong> (CD56<sup>bright</sup> CD16⁻), fondamentale per la tolleranza materno-fetale e l'angiogenesi.</li>
            <li><strong>Polmoni</strong>: sentinelle costanti a guardia delle vie aeree contro infezioni virali respiratorie.</li>
            <li><strong>Organi Linfoidi Secondari (Linfonodi)</strong>: a riposo sono scarse nei linfonodi periferici rispetto ai T e B, ma possono migrare rapidamente nei siti flogistici guidate da gradienti chemochinici e integrine.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-6">
            Le Due Funzioni Biologiche di Base delle NK
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs mt-3">
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-1.5 m-0">
                <Zap className="w-4 h-4 text-red-700" />
                1. Funzione Citotossica (Killing Naturale)
              </h4>
              <p className="text-red-950 m-0 leading-relaxed">
                Le cellule NK uccidono le cellule bersaglio mediante un evento a più stadi analogo a quello dei CTL:
                <br />
                <strong>1. Riconoscimento e Coniugato Stretto</strong>: adesione mediata da integrine.
                <br />
                <strong>2. Riorganizzazione Citoscheletrica & Polarizzazione</strong>: il centrosoma (MTOC) sposta i microtubuli orientando i granuli verso la cellula target.
                <br />
                <strong>3. Esocitosi Direzionata dei Granuli Litici</strong>: fusione calcio-dipendente delle membrane con rilascio di <strong>perforina</strong> e <strong>granzimi</strong> nella fessura sinaptica.
                <br />
                <strong>4. Dissociazione e Serial Killing</strong>: l'NK si stacca dalla cellula apoptotica per colpire nuovi bersagli in sequenza.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-200 space-y-2">
              <h4 className="font-bold text-cyan-900 text-sm flex items-center gap-1.5 m-0">
                <Sparkles className="w-4 h-4 text-cyan-700" />
                2. Funzione Immunoregolatoria (Produzione di Citochine)
              </h4>
              <p className="text-cyan-950 m-0 leading-relaxed">
                Riconosciuta la cellula bersaglio, l'NK rilascia precocemente abbondanti quantità di <strong>IFN-γ</strong> e <strong>TNF-α</strong>:
                <br />
                • <strong>Attivazione Classica dei Macrofagi (M1)</strong>: l'IFN-γ scatena l'attività microbicida dei macrofagi (iNOS, ROS) prima ancora dell'attivazione dei Th1.
                <br />
                • <strong>Licensing delle Cellule Dendritiche (DC)</strong>: aumenta l'espressione di MHC-II, CD80 e CD86 promuovendo la presentazione antigenica.
                <br />
                • <strong>Guida della Risposta Adattativa</strong>: orienta il differenziamento dei Th0 in Th1 e induce lo switch isotipico verso le IgG opsonizzanti.
              </p>
            </div>
          </div>
        </section>

        {/* 21.5 RECETTORI ATTIVATORI */}
        <section id="sec-21-5" className="space-y-4">
          <div className="flex items-center gap-2 text-amber-700">
            <Zap className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              21.5 Il Macchinario dei Recettori Attivatori: CD16 (ADCC), NKG2D, NCR & DNAM-1
            </h2>
          </div>

          <p>
            Poiché le cellule NK non possiedono un recettore clonotipico per l'antigene riarrangiato come il TCR, il loro riconoscimento bersaglio è affidato a un composito <strong>repertorio germ-line di recettori attivatori</strong> che riconoscono ligandi associati a infezione virale, stress o anticorpi:
          </p>

          <div className="space-y-3 font-sans text-xs">
            {/* CD16 */}
            <div className="p-4 rounded-xl bg-white border-2 border-amber-300 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-950 text-sm">
                  1. CD16 (FcγRIIIA) — Il Mediatore dell'ADCC (Citotossicità Anticorpo-Dipendente)
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-mono font-bold">
                  Gerarchia Dominante
                </span>
              </div>
              <p className="text-slate-700 m-0 leading-relaxed">
                È il prototipo dei recettori attivatori, espresso da oltre il 90% delle NK circolanti. Possiede due domini extracellulari Ig-like che legano il <strong>frammento Fc delle IgG1 e IgG3</strong> che hanno opsonizzato una cellula patogena. Il segmento transmembrana si associa a omodimeri o eterodimeri di <strong>catene ζ (TCR-like) o catene γ (FcεRI-like)</strong>, entrambe dotate di motivi <strong>ITAM (Immunoreceptor Tyrosine-based Activation Motif)</strong>.
                <br />
                <em>Nota Cardinalizia del Corso:</em> L'aggregazione massiva di CD16 esercita un segnale attivatorio così potente da possedere una <strong>gerarchia dominante</strong>: la lisi della cellula opsonizzata da anticorpi avviene <em>anche se la cellula bersaglio esprime normali livelli di MHC-I</em>, superando il blocco inibitorio dei KIR!
              </p>
            </div>

            {/* NKG2D */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="font-bold text-slate-950 text-sm block">
                2. NKG2D — Sensore dell'Induced-Self e del Danno Genotossico
              </span>
              <p className="text-slate-700 m-0 leading-relaxed">
                Omodimero appartenente alla famiglia dei <strong>recettori C-type lectin-like</strong> (espresso su tutte le NK e sui linfociti T CD8+). Non possiede ITAM ma si associa stabilmente alla molecola adattatrice <strong>DAP10</strong>, che contiene un motivo citoplasmatico YINM legante la fosfatidilinositolo 3-chinasi (PI3K) e Grb2-Vav.
                <br />
                <strong>Ligandi Riconosciuti:</strong> Molecole strutturalmente simili all'MHC di classe I ma <em>non polimorfiche</em>: <strong>MICA, MICB</strong> e <strong>ULBP1, ULBP2, ULBP3, ULBP4</strong>. Queste molecole sono assenti o debolmente espresse negli epiteli sani, ma vengono massivamente indotte in condizioni di <strong>stress cellulare, danno genotossico al DNA (ATM/ATR chinasi), irradiazione e trasformazione neoplastica</strong>.
              </p>
            </div>

            {/* NCRs */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="font-bold text-slate-950 text-sm block">
                3. Natural Cytotoxicity Receptors (NCRs: NKp46, NKp30, NKp44)
              </span>
              <p className="text-slate-700 m-0 leading-relaxed">
                Famiglia di recettori immunoglobulinici deputati al riconoscimento diretto di <strong>proteine virali</strong> e ligandi di cellule infette:
                <br />
                • <strong>NKp46 (CD335)</strong> e <strong>NKp30 (CD337)</strong>: espressi costitutivamente a riposo.
                <br />
                • <strong>NKp44 (CD336)</strong>: assente nelle NK a riposo, viene rapidamente <em>indotto solo in seguito ad attivazione</em> (ad es. da IL-2).
                <br />
                <strong>Ligandi Virali Identificati:</strong> L'<strong>Emagglutinina (HA)</strong> del virus dell'influenza, l'<strong>Emoagglutinina-Neuraminidasi (HN)</strong> dei parainfluenzali, la proteina di rivestimento <strong>E-protein</strong> dei flavivirus Dengue e West Nile, molecole indotte da Herpes Simplex (HSV-1), Vaccinia virus, Sarcoma di Kaposi (NKp44L) e la proteina <strong>21spe-MLL5</strong> indotta da HIV.
              </p>
            </div>

            {/* DNAM-1 */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="font-bold text-slate-950 text-sm block">
                4. DNAM-1 (CD226) & Altri Recettori Co-Stimolatori
              </span>
              <p className="text-slate-700 m-0 leading-relaxed">
                Riconosce molecole di adesione cellulare come <strong>CD155 (PVR - Poliovirus Receptor)</strong> e <strong>CD112 (Nectina-2)</strong>, che oltre a essere bersagli dell'immunosorveglianza fungono da recettori di ingresso cellulare per Poliovirus ed Herpesvirus. Le NK esprimono inoltre molecole co-stimolatorie quali <strong>2B4 (CD244)</strong> legante CD48, <strong>CD2</strong> legante CD58, <strong>CD27</strong> legante CD70, e recettori TNF-R like quali <strong>CD137 (4-1BB)</strong> e <strong>OX40</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* 21.6 RECETTORI INIBITORI & TRASDUZIONE ITIM */}
        <section id="sec-21-6" className="space-y-4">
          <div className="flex items-center gap-2 text-rose-800">
            <Shield className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              21.6 I Recettori Inibitori: KIR (LRC su chr 19), CD94/NKG2A (NKC su chr 12) & Trasduzione ITIM
            </h2>
          </div>

          <p>
            Poiché molti ligandi attivatori (come CD155, CD112 e CD48) sono espressi anche sulle cellule normali sane dell'organismo, sorge spontanea la domanda cruciale: <em>"Cosa impedisce alle cellule NK di uccidere le cellule autologhe sane?"</em>.
          </p>

          <p>
            La salvaguardia dell'integrità dei tessuti sani è garantita dalla presenza di <strong>recettori inibitori specifici per le molecole MHC di classe I</strong>. Virtualmente ogni cellula NK matura esprime almeno un recettore inibitorio capace di riconoscere l'MHC-I self.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
            {/* KIR */}
            <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 space-y-2">
              <h4 className="font-bold text-rose-950 text-sm m-0">
                1. Recettori KIR (Killer Cell Immunoglobulin-like Receptors)
              </h4>
              <p className="text-rose-950 m-0 leading-relaxed">
                Codificati dal complesso <strong>LRC (Leukocyte Receptor Complex) sul cromosoma 19</strong>. Presentano 2 o 3 domini extracellulari immunoglobulinici (KIR2D o KIR3D).
                <br /><br />
                • <strong>KIR con Coda Lunga ("L", es. KIR2DL1, KIR2DL2/3, KIR3DL1)</strong>: possiedono nel segmento citoplasmatico motivi <strong>ITIM (Immunoreceptor Tyrosine-based Inhibitory Motif)</strong>. Sono rigorosamente <em>inibitori</em>!
                <br />
                • Riconoscono regioni <strong>non polimorfiche</strong> delle molecole MHC-I classiche:
                <br />
                - <strong>KIR2DL1</strong> lega alleli HLA-C del Gruppo 2 (con lisina in posizione 80, Lys80).
                <br />
                - <strong>KIR2DL2/3</strong> lega alleli HLA-C del Gruppo 1 (con asparagina in posizione 80, Asn80).
                <br />
                - <strong>KIR3DL1</strong> lega alleli HLA-B caratterizzati dal motivo sierologico HLA-Bw4.
              </p>
            </div>

            {/* NKG2A */}
            <div className="p-4 rounded-xl bg-purple-50/80 border border-purple-200 space-y-2">
              <h4 className="font-bold text-purple-950 text-sm m-0">
                2. Recettore CD94/NKG2A & Il Controllo di HLA-E
              </h4>
              <p className="text-purple-950 m-0 leading-relaxed">
                Codificato dal locus <strong>NKC (Natural Killer Complex) sul cromosoma 12</strong>. È un eterodimero della famiglia delle lectine di tipo C associato a CD94; la catena NKG2A contiene due motivi citoplasmatici <strong>ITIM</strong> inibitori.
                <br /><br />
                • <strong>Ligando Riconosciuto: HLA-E</strong>. HLA-E è una molecola di classe I non convenzionale (non polimorfica).
                <br />
                • <em>Meccanismo Bio-Sensore:</em> HLA-E non presenta peptidi antigenici microbici, ma lega e trasporta in membrana i <strong>peptidi leader</strong> derivati dalla biosintesi delle molecole classiche HLA-A, B e C. Se la cellula sana sintetizza normalmente MHC-I classico, i peptidi leader vengono clivati ed esposti su HLA-E. L'ingaggio di CD94/NKG2A funge quindi da <em>sentinella globale dell'integrità della trascrizione di MHC-I</em>.
              </p>
            </div>
          </div>

          {/* Biochimica ITIM */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 text-xs font-sans">
            <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-slate-700" />
              Biochimica del Segnale Inibitorio: Il Reclutamento delle Tirosin-Fosfatasi SHP-1 e SHP-2
            </h4>
            <p className="text-slate-700 m-0 leading-relaxed">
              Quando il dominio extracellulare del KIR-L o di NKG2A lega l'MHC-I, le tirosine del motivo <strong>ITIM</strong> (sequenza consenso <em>I/V/L/S-x-Y-x-x-L/V</em>) vengono fosforilate da chinasi Src. L'ITIM fosforilato recluta ad altissima affinità le <strong>tirosin-fosfatasi citoplasmatiche SHP-1 e SHP-2</strong> (Src homology 2 domain-containing phosphatase). SHP-1/2 defosforilano istantaneamente le tirosine chiave dei complessi attivatori (ITAM di CD16, catene ζ, DAP10, Vav1 e Syk/ZAP-70), spegnendo sul nascere il riarrangiamento di actina e la mobilizzazione del calcio. L'esocitosi dei granuli viene così completamente bloccata.
            </p>
          </div>
        </section>

        {/* 21.7 GENETICA DEI KIR & APLOTIPI A/B */}
        <section id="sec-21-7" className="space-y-4">
          <div className="flex items-center gap-2 text-indigo-800">
            <Dna className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              21.7 Genetica dei KIR: Dogma di Tolleranza Self a Mosaico & Aplotipi KIR (Aplotipo A vs B)
            </h2>
          </div>

          <p>
            La genetica dei recettori KIR è straordinariamente complessa e caratterizzata da un elevato grado di polimorfismo genico, duplicazioni e divergenza tra individui della popolazione:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
            <li><strong>Espressione Clonale Stocastica a Mosaico</strong>: i geni KIR ereditati (di origine materna e paterna) non vengono espressi tutti insieme su ciascuna NK. Al contrario, ogni clone NK esprime solo una combinazione casuale (stocastica) di alcuni KIR.</li>
            <li><strong>Il Dogma dell'Auto-Tolleranza (Licensing delle NK)</strong>: durante il differenziamento midollare vige una regola inviolabile: <em>ciascuna cellula NK matura deve esprimere obbligatoriamente almeno un recettore inibitorio capace di riconoscere le molecole MHC di classe I self del soggetto</em>. Se un precursore non esprime alcun recettore per il self, entra in uno stato di anergia funzionale ("unlicensed") per evitare catastrofiche reazioni autoimmuni contro tessuti sani.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-4">
            I Due Grandi Aplotipi di Popolazione: Aplotipo A vs Aplotipo B
          </h3>

          <p>
            Gli studi di genetica di popolazione hanno dimostrato che il locus genico KIR sul cromosoma 19 si organizza essenzialmente in due macro-aplotipi:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-300 space-y-2">
              <span className="font-bold text-slate-900 text-sm block">Aplotipo A (Prevalenza Inibitoria)</span>
              <p className="text-slate-700 m-0 leading-relaxed">
                Caratterizzato da una composizione genica fissa ricca di <strong>KIR inibitori a coda lunga</strong> (KIR2DL1, KIR2DL3, KIR3DL1, KIR3DL2) e da un solo KIR attivatore (KIR2DS4, spesso mutato o non funzionante).
                <br />
                Gli individui con aplotipo <strong>AA</strong> possiedono un assetto recettoriale a soglia inibitoria elevata: ottima auto-tolleranza, ma minore reattività verso infezioni virali croniche o cellule neoplastiche.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-300 space-y-2">
              <span className="font-bold text-blue-900 text-sm block">Aplotipo B (Ricco di KIR Attivatori)</span>
              <p className="text-blue-950 m-0 leading-relaxed">
                Caratterizzato dalla presenza di <strong>molteplici geni KIR attivatori a coda corta</strong> (suffisso "S": <em>KIR2DS1, KIR2DS2, KIR2DS3, KIR2DS5, KIR3DS1</em>) che possiedono una controparte attivatoria legante gli stessi alleli HLA.
                <br />
                <strong>Rilevanza Clinica (HIV Long-Term Progressors):</strong> Gli individui con aplotipo <strong>B</strong> presentano una spiccata capacità di contrastare le infezioni virali che cronicizzano (come HBV e HIV). Nei pazienti HIV-positivi definiti <em>long-term non-progressors</em> (soggetti che rimangono asintomatici per oltre 10 anni con viremia soppressa senza terapia antiretrovirale), l'analisi genetica rivela frequentemente un aplotipo KIR di tipo B: l'abbondanza di KIR attivatori conferisce alle loro cellule NK molteplici frecce al proprio arco per eliminare i linfociti infettati.
              </p>
            </div>
          </div>
        </section>

        {/* 21.8 TEORIA DEL MISSING-SELF (KLAS KÄRRE) */}
        <section id="sec-21-8" className="space-y-4">
          <div className="flex items-center gap-2 text-rose-700">
            <Flame className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              21.8 La Teoria del "Missing-Self" (Klas Kärre 1981) & la Complementarità Perfetta con i CTL
            </h2>
          </div>

          <p>
            Nel <strong>1981</strong>, nella sua celebre tesi di dottorato presso il prestigioso <em>Karolinska Institute di Stoccolma</em>, lo scienziato svedese <strong>Klas Kärre</strong> formulò e dimostrò sperimentalmente l'<strong>Ipotesi del Missing-Self</strong> (slide 11 della lezione):
          </p>

          <blockquote className="p-4 border-l-4 border-rose-600 bg-rose-50 text-rose-950 italic text-xs sm:text-sm font-sans rounded-r-xl">
            "The missing-self hypothesis argues that NK cells survey cells of the body for the expression of self MHC class I and destroy those cells in which it is missing."
            <br />
            <span className="font-semibold not-italic block mt-1 text-rose-800">
              — Klas Kärre, PhD thesis, Karolinska Institute, 1981
            </span>
          </blockquote>

          <p>
            Il destino di una cellula bersaglio a contatto con una cellula NK dipende dall'<strong>integrazione vettoriale dei segnali</strong>:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
            <li><strong>Cellula Sana Autologa (Sopravvivenza / Survive)</strong>: esprime ligandi per i recettori attivatori, ma contemporaneamente esprime livelli fisiologici di <strong>MHC di classe I</strong>. Il legame MHC-I con i KIR inibitori attiva SHP-1/2, che spegne il segnale attivatorio. Il bilancio netto è negativo: l'NK è inibita e la cellula bersaglio sana viene risparmiata.</li>
            <li><strong>Missing Self Puro (Lisi / Killing)</strong>: quando una cellula subisce trasformazione neoplastica o viene infettata da un virus, perde l'espressione di MHC-I. Venendo a mancare il segnale inibitorio dei KIR, il segnale positivo basale dei recettori attivatori (es. NKG2D o DNAM-1) prevale incontrastato: la cellula NK degranula e uccide il bersaglio!</li>
            <li><strong>Induced Self (Killing da Iper-Attivazione)</strong>: se la cellula mantiene MHC-I ma subisce un danno da stress tale da iper-esprimere quantità massicce di ligandi attivatori (MICA/B, ULBP), il segnale attivatorio travolge quantitativamente il segnale inibitorio, inducendo comunque la morte.</li>
          </ul>

          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs font-sans">
            <h4 className="font-bold text-amber-950 text-sm mb-1.5 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-700" />
              La Complementarità Strategica tra Linfociti T Citotossici (CTL) e Cellule NK
            </h4>
            <p className="text-amber-900 m-0 leading-relaxed">
              La coevoluzione tra sistema immunitario e patogeni intracellulari ha generato un'architettura difensiva a tenuta stagna:
              <br /><br />
              • Gli <strong>Herpesvirus</strong> (Citomegalovirus CMV, Epstein-Barr EBV, Herpes Simplex HSV, Varicella-Zoster VZV) hanno sviluppato sofisticati meccanismi di evasione per sfuggire ai CTL CD8+: bloccano il trasportatore TAP1 (come la proteina ICP47 di HSV), degradano MHC-I nei lisosomi o bloccano il proteasoma.
              <br />
              • Questa strategia virale, che renderebbe la cellula "invisibile" ai CTL (che richiedono obbligatoriamente l'MHC-I per riconoscere l'antigene), è un'arma a doppio taglio fatale: la scomparsa di MHC-I la rende il <strong>bersaglio perfetto ed elettivo per le cellule NK via Missing-Self</strong>!
              <br />
              Se un paziente presenta rari difetti genetici selettivi della funzione NK, soccombe a infezioni fulminanti da Herpesvirus.
            </p>
          </div>

          {/* SIMULATORE 1: MISSING SELF, INDUCED SELF & ADCC LAB */}
          <div id="sim-missing-self-lab" className="mt-8 pt-6 border-t-2 border-slate-200">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                    Laboratorio Interattivo 1
                  </span>
                  <h3 className="text-xl font-bold font-serif-heading text-white m-0">
                    Bilancio dei Segnali NK: Missing-Self, Induced-Self & ADCC
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-mono border border-cyan-800">
                  Simulazione Biofisica Dinamica
                </span>
              </div>

              {/* Selettore dello Scenario */}
              <div>
                <label className="text-xs font-bold font-mono uppercase tracking-wider text-slate-300 block mb-2">
                  Seleziona lo Stato Fisiopatologico della Cellula Bersaglio:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 text-xs font-sans">
                  <button
                    onClick={() => setSelectedScenario('healthy')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedScenario === 'healthy'
                        ? 'bg-emerald-950 border-emerald-400 text-emerald-200 shadow-md ring-1 ring-emerald-400'
                        : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className="font-bold block text-sm mb-1">1. Cellula Sana</span>
                    <span className="text-[11px] opacity-80">MHC-I normale, ligandi stress assenti</span>
                  </button>

                  <button
                    onClick={() => setSelectedScenario('missing')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedScenario === 'missing'
                        ? 'bg-rose-950 border-rose-400 text-rose-200 shadow-md ring-1 ring-rose-400'
                        : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className="font-bold block text-sm mb-1">2. Missing-Self Puro</span>
                    <span className="text-[11px] opacity-80">MHC-I perso (CMV / Herpes / Tumore)</span>
                  </button>

                  <button
                    onClick={() => setSelectedScenario('induced')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedScenario === 'induced'
                        ? 'bg-amber-950 border-amber-400 text-amber-200 shadow-md ring-1 ring-amber-400'
                        : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className="font-bold block text-sm mb-1">3. Induced-Self</span>
                    <span className="text-[11px] opacity-80">MHC-I presente + Iper-espressione MICA/B</span>
                  </button>

                  <button
                    onClick={() => setSelectedScenario('adcc')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedScenario === 'adcc'
                        ? 'bg-purple-950 border-purple-400 text-purple-200 shadow-md ring-1 ring-purple-400'
                        : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className="font-bold block text-sm mb-1">4. ADCC (IgG Opsonizz.)</span>
                    <span className="text-[11px] opacity-80">CD16 aggregato (Gerarchia Dominante)</span>
                  </button>

                  <button
                    onClick={() => setSelectedScenario('evasion')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedScenario === 'evasion'
                        ? 'bg-slate-800 border-red-500 text-red-200 shadow-md ring-1 ring-red-500'
                        : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className="font-bold block text-sm mb-1">5. Evasione Tumorale</span>
                    <span className="text-[11px] opacity-80">Shedding MICA/B solubile (NK "Cieca")</span>
                  </button>
                </div>
              </div>

              {/* Visualizzazione Interattiva dei Parametri */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
                {/* Segnale Inibitorio */}
                <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-mono">SEGNALE INIBITORIO (ITIM)</span>
                    <span className="font-bold text-red-400 font-mono">
                      {selectedScenario === 'missing'
                        ? '0 / 100'
                        : selectedScenario === 'evasion'
                        ? '80 / 100'
                        : '85 / 100'}
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-red-500 h-2 transition-all duration-500"
                      style={{
                        width:
                          selectedScenario === 'missing'
                            ? '0%'
                            : selectedScenario === 'evasion'
                            ? '80%'
                            : '85%'
                      }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-300 m-0">
                    {selectedScenario === 'missing'
                      ? 'Nessun ligando MHC-I. Nessun reclutamento di SHP-1/2!'
                      : 'KIR e NKG2A legano MHC-I/HLA-E; SHP-1/2 defosforila le chinasi.'}
                  </p>
                </div>

                {/* Segnale Attivatorio */}
                <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-mono">SEGNALE ATTIVATORIO (ITAM/DAP10)</span>
                    <span className="font-bold text-emerald-400 font-mono">
                      {selectedScenario === 'healthy'
                        ? '30 / 100'
                        : selectedScenario === 'missing'
                        ? '45 / 100'
                        : selectedScenario === 'induced'
                        ? '95 / 100'
                        : selectedScenario === 'adcc'
                        ? '99 / 100'
                        : '10 / 100 (Inibito)'}
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-emerald-500 h-2 transition-all duration-500"
                      style={{
                        width:
                          selectedScenario === 'healthy'
                            ? '30%'
                            : selectedScenario === 'missing'
                            ? '45%'
                            : selectedScenario === 'induced'
                            ? '95%'
                            : selectedScenario === 'adcc'
                            ? '99%'
                            : '10%'
                      }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-300 m-0">
                    {selectedScenario === 'healthy'
                      ? 'Espressione basale di ligandi attivatori.'
                      : selectedScenario === 'missing'
                      ? 'Ligandi basali sufficienti in assenza totale di inibizione.'
                      : selectedScenario === 'induced'
                      ? 'Iperespressione massiva di MICA/B leganti NKG2D-DAP10.'
                      : selectedScenario === 'adcc'
                      ? 'Aggregazione massiva di CD16 tramite Fc di IgG opsonizzanti.'
                      : 'NKG2D internalizzato a causa del legame con MICA/B solubile!'}
                  </p>
                </div>

                {/* Verdetto Finale del Segnale Netto */}
                <div
                  className={`p-4 rounded-xl border flex flex-col justify-between ${
                    selectedScenario === 'healthy' || selectedScenario === 'evasion'
                      ? 'bg-slate-800 border-slate-600 text-slate-200'
                      : 'bg-red-950/80 border-red-500 text-red-100'
                  }`}
                >
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider block text-slate-400">
                      ESITO CELLULARE FINALE
                    </span>
                    <span className="text-base font-extrabold block mt-1">
                      {selectedScenario === 'healthy'
                        ? 'Tolleranza / Sopravvivenza (No Lisi)'
                        : selectedScenario === 'missing'
                        ? 'UCCISIONE DA MISSING-SELF'
                        : selectedScenario === 'induced'
                        ? 'UCCISIONE DA INDUCED-SELF'
                        : selectedScenario === 'adcc'
                        ? 'LISI MEDIATA DA ADCC (CD16)'
                        : 'EVASIONE TUMORALE (NK Accecata)'}
                    </span>
                  </div>
                  <p className="text-[11px] mt-2 m-0 opacity-90 leading-tight">
                    {selectedScenario === 'healthy' &&
                      'Il segnale inibitorio SHP-1/2 domina su quello attivatorio. Nessuna degranulazione.'}
                    {selectedScenario === 'missing' &&
                      'La totale perdita di MHC-I elimina il freno molecolare: degranulazione rapida di perforina e granzimi.'}
                    {selectedScenario === 'induced' &&
                      'La tempesta di stimoli NKG2D-DAP10 vince quantitativamente il freno dei KIR. Apoptosi.'}
                    {selectedScenario === 'adcc' &&
                      'Il CD16 aggregato possiede dominanza gerarchica assoluta: lisi rapida della cellula target.'}
                    {selectedScenario === 'evasion' &&
                      'I ligandi solubili hanno saturato e fatto internalizzare NKG2D. La cellula tumorale sopravvive!'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bivio Decisionale: Modello Missing-Self & Induced-Self */}
          <ConceptMapFlow {...MAP_LEZIONE_21_NK_BALANCE_AND_MISSING_SELF} />
        </section>

        {/* 21.9 UTERO, uNK, ANGIOGENESI & PREECLAMPSIA */}
        <section id="sec-21-9" className="space-y-4">
          <div className="flex items-center gap-2 text-rose-700">
            <HeartPulse className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              21.9 Cellule NK Uterine (uNK), Angiogenesi con VEGF & Fisiopatologia della Preeclampsia
            </h2>
          </div>

          <p>
            Uno dei capitoli più affascinanti e innovativi trattati nella seconda ora di lezione dalla Prof.ssa Galandrini riguarda il ruolo non citotossico delle <strong>cellule NK uterine (uNK)</strong> nella riproduzione e nella gravidanza (slide 13 e 14):
          </p>

          <p>
            Nel tessuto deciduale dell'utero durante la gravidanza si accumula una ricca popolazione di cellule NK residenti (le <strong>uNK</strong>, fenotipicamente <em>CD56<sup>bright</sup> CD16⁻</em>). Sorprendentemente, pur essendo cellule morfologicamente mature con granuli citoplasmatici:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
            <li><strong>La Loro Funzione Non è di Uccidere</strong>: non mediano citotossicità contro le cellule fetali semi-allogeniche.</li>
            <li><strong>Localizzazione Perivascolare</strong>: si dispongono a manicotto attorno alle <strong>arterie spirali uterine</strong> (ramificazioni materne che portano il sangue alla placenta), proprio nel punto di intimo contatto con le cellule del <strong>trofoblasto extravilloso (EVT)</strong> di origine fetale.</li>
            <li><strong>Produzione di Fattori Angiogenetici (VEGF)</strong>: stimolate dal contatto con il trofoblasto, le uNK producono massicce dosi di <strong>VEGF (Vascular Endothelial Growth Factor)</strong>, angiopoietine e chemochine, che promuovono il <em>rimodellamento delle arterie spirali</em> (trasformandole da vasi rigidi ad alta resistenza in canali ampi a bassa resistenza e alto flusso), garantendo una vascolarizzazione placentare ottimale e la crescita fetale.</li>
          </ul>

          <div className="p-4 rounded-xl bg-red-50/80 border border-red-200 text-xs font-sans">
            <h4 className="font-bold text-red-950 text-sm mb-1.5 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-700" />
              La Patogenesi Molecolare della Preeclampsia
            </h4>
            <p className="text-red-900 m-0 leading-relaxed">
              La <strong>preeclampsia</strong> è una grave e temuta complicanza della gestazione caratterizzata da ipertensione arteriosa materna acuta, proteinuria e ritardo di crescita intrauterina, causata da un difetto precoce di rimodellamento delle arterie spirali con conseguente ipoperfusione placentare e rilascio di fattori anti-angiogenici tossici.
              <br /><br />
              <strong>La Base Immunogenetica:</strong>
              <br />
              • Il trofoblasto extravilloso fetale esprime molecole MHC paterne, in particolare <strong>HLA-C</strong> (che si dividono in Gruppo C1 e Gruppo C2).
              <br />
              • Quando una <strong>madre omozigote per l'aplotipo KIR AA</strong> (dotata quasi esclusivamente di KIR inibitori ad altissima affinità per HLA-C, in particolare <em>KIR2DL1</em>) incontra un feto che esprime alleli <strong>HLA-C del Gruppo C2</strong> (ereditati dal padre), si genera una <strong>iper-inibizione massiva delle cellule uNK materne</strong>.
              <br />
              • Le cellule uNK inibite <em>bloccano la produzione di VEGF e fattori angiogenetici</em>. Le arterie spirali uterine rimangono rigide e strette, scatenando la sequenza ischemica placentare della preeclampsia!
            </p>
          </div>

          {/* Mappa Concettuale della Genetica KIR e Rimodellamento Uterino */}
          <ConceptMapFlow {...MAP_LEZIONE_21_KIR_GENETICS_AND_PREECLAMPSIA} />
        </section>

        {/* 21.10 TRAPIANTO MIDOLLO & RUGGERI-VELARDI */}
        <section id="sec-21-10" className="space-y-4">
          <div className="flex items-center gap-2 text-indigo-700">
            <Award className="w-6 h-6 shrink-0" />
            <h2 className="text-2xl font-bold font-serif-heading text-slate-900 m-0">
              21.10 Oncologia & Trapianto di Midollo: Evasione Tumorale (Shedding MICA/B) e il Miracolo del KIR-Mismatch (Ruggeri-Velardi 2002)
            </h2>
          </div>

          <p>
            Nella parte conclusiva della lezione, la Prof.ssa Galandrini ha approfondito due capisaldi traslazionali dell'immunologia clinica moderna:
          </p>

          <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-4">
            1. Meccanismi di Immunoevasione Tumorale dalle Cellule NK
          </h3>
          <p>
            Mentre le cellule neoplastiche tendono a perdere MHC-I (rendendosi vulnerabili al missing-self), i tumori aggressivi evolvono un meccanismo di contro-evasione subdolo:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
            <li><strong>Shedding Proteolitico dei Ligandi NKG2D</strong>: mediante metalloproteasi di membrana (ADAM10/17), il tumore taglia e rilascia <strong>MICA e MICB in forma solubile</strong> nel microambiente extracellulare.</li>
            <li><strong>"Accecamento" della Cellula NK</strong>: le molecole MICA/B solubili legano avidamente i recettori NKG2D delle NK prima che queste raggiungano il tumore, inducendone la rapida <strong>endocitosi e internalizzazione</strong>. L'NK diventa "cieca" e incapace di uccidere il tumore.</li>
            <li><strong>Cellule LAK (Lymphokine-Activated Killer cells)</strong>: in laboratorio e in immunoterapia adottiva, l'incubazione di NK e linfociti con altissime dosi di <strong>IL-2</strong> converte le NK in cellule LAK "superkiller", capaci di lisare anche cellule tumorali resistenti (NB: l'IL-2 non è mai prodotta dalle NK ma dai T attivati!).</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 font-serif-heading mt-6">
            2. La Pietra Miliare del KIR-Mismatch nel Trapianto di Midollo Osseo (Studio Ruggeri-Velardi, Science 2002)
          </h3>
          <p>
            Nei pazienti con <strong>Leucemia Mieloide Acuta (AML)</strong> sottoposti a trapianto allogenico aploidentico (es. da un genitore o familiare compatibile per metà genoma HLA):
          </p>

          <div className="p-4 rounded-xl bg-indigo-50/80 border border-indigo-200 text-xs font-sans">
            <h4 className="font-bold text-indigo-950 text-sm mb-1.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-700" />
              La Dimostrazione Clinica Rivoluzionaria
            </h4>
            <p className="text-indigo-900 m-0 leading-relaxed">
              Lo studio pionieristico condotto dal gruppo italiano di <strong>Loredana Ruggeri e Andrea Velardi</strong> (pubblicato su <em>Science</em> nel 2002) ha dimostrato che tra donatore e ricevente si possono verificare due condizioni radicalmente diverse:
              <br /><br />
              • <strong>KIR-Matching</strong>: le cellule NK del donatore esprimono KIR inibitori che trovano le corrispondenti molecole HLA-C/B sul ricevente. Le NK del donatore sono inibite: se il paziente ha una <strong>malattia minima residua (MRD)</strong> di cellule leucemiche sfuggite alla chemioterapia, queste proliferano causando la <strong>recidiva letale</strong> della leucemia.
              <br /><br />
              • <strong>KIR-Mismatching (La Condizione Perfetta)</strong>: le cellule NK del donatore possiedono KIR inibitori che <em>NON trovano il ligando HLA nel ricevente</em> (ad es. donatore con KIR anti-C2, ma ricevente privo di HLA-C2, omozigote C1/C1).
              <br />
              <strong>Esito Clinico:</strong> Le NK trapiantate del donatore vedono le cellule leucemiche come <em>Missing-Self</em> e le distruggono completamente, azzerando le recidive (<strong>potente effetto Graft-versus-Leukemia, GvL</strong>)!
              <br /><br />
              <strong>La Domanda d'Oro d'Esame: Perché NON si scatena la temibile GVHD (Graft-versus-Host Disease)?</strong>
              <br />
              Perché per attivare il killing delle NK non basta l'assenza di MHC-I (missing-self): occorre che la cellula bersaglio esprima anche <strong>ligandi attivatori da stress (induced self)</strong>! I blasti leucemici sono cellule neoplastiche mutate sotto stress che esprimono MICA/B e CD155; al contrario, i <em>tessuti sani del ricevente (cute, fegato, intestino) non esprimono ligandi da stress</em>, e rimangono intatti e protetti!
            </p>
          </div>

          {/* SIMULATORE 2: CLINICAL KIR MISMATCH & PREECLAMPSIA */}
          <div id="sim-kir-clinical" className="mt-8 pt-6 border-t-2 border-slate-200">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold block">
                    Laboratorio Interattivo 2
                  </span>
                  <h3 className="text-xl font-bold font-serif-heading text-white m-0">
                    Simulatore Clinico: Trapianto Midollare Aploidentico & Rischio Preeclampsia
                  </h3>
                </div>
                {/* Tabs */}
                <div className="flex rounded-lg bg-slate-800 p-1 border border-slate-700 text-xs">
                  <button
                    onClick={() => setClinicalTab('transplant')}
                    className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                      clinicalTab === 'transplant'
                        ? 'bg-purple-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    1. Trapianto AML (KIR-Mismatch)
                  </button>
                  <button
                    onClick={() => setClinicalTab('pregnancy')}
                    className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                      clinicalTab === 'pregnancy'
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    2. Gravidanza & Preeclampsia
                  </button>
                </div>
              </div>

              {clinicalTab === 'transplant' ? (
                /* Tab 1: Trapianto */
                <div className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* HLA Paziente */}
                    <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2">
                      <label className="font-bold text-slate-300 block">
                        Assetto HLA-C del Ricevente (Paziente Leucemico):
                      </label>
                      <select
                        value={patientHla}
                        onChange={(e) => setPatientHla(e.target.value as any)}
                        className="w-full p-2 rounded-lg bg-slate-900 border border-slate-600 text-white font-mono"
                      >
                        <option value="C1_homo">HLA-C Gruppo 1 Omozigote (C1/C1, manca C2)</option>
                        <option value="C2_homo">HLA-C Gruppo 2 Omozigote (C2/C2, manca C1)</option>
                        <option value="Bw4_pos">HLA-C1/C2 Eterozigote (Completo sia C1 che C2)</option>
                      </select>
                      <p className="text-[11px] text-slate-400 m-0">
                        Se il paziente è privo di uno specifico gruppo (es. C2), i KIR anti-C2 non riceveranno inibizione.
                      </p>
                    </div>

                    {/* KIR Donatore */}
                    <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2">
                      <label className="font-bold text-slate-300 block">
                        Repertorio KIR delle Cellule NK del Donatore:
                      </label>
                      <select
                        value={donorKir}
                        onChange={(e) => setDonorKir(e.target.value as any)}
                        className="w-full p-2 rounded-lg bg-slate-900 border border-slate-600 text-white font-mono"
                      >
                        <option value="anti_C2">Donatore esprime KIR2DL1 (anti-C2)</option>
                        <option value="anti_C1">Donatore esprime KIR2DL2/3 (anti-C1)</option>
                        <option value="all_match">Donatore esprime solo KIR compatibili (Match)</option>
                      </select>
                      <p className="text-[11px] text-slate-400 m-0">
                        La presenza di un clone alloreattivo non inibito è la chiave del mismatch.
                      </p>
                    </div>
                  </div>

                  {/* Risultato del Calcolo Clinico */}
                  {(() => {
                    const isMismatch =
                      (patientHla === 'C1_homo' && donorKir === 'anti_C2') ||
                      (patientHla === 'C2_homo' && donorKir === 'anti_C1');

                    return (
                      <div
                        className={`p-4 rounded-xl border ${
                          isMismatch
                            ? 'bg-emerald-950/80 border-emerald-500 text-emerald-100'
                            : 'bg-rose-950/80 border-rose-500 text-rose-100'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-sm">
                            {isMismatch
                              ? 'CONDIZIONE: KIR-MISMATCHING (EFFETTO GvL MASSIVO)'
                              : 'CONDIZIONE: KIR-MATCHING (NESSUNA ALLOREATTIVITÀ NK)'}
                          </span>
                          <span className="px-2 py-0.5 rounded font-mono text-[11px] font-bold bg-white/10">
                            Studio Ruggeri-Velardi (2002)
                          </span>
                        </div>
                        <p className="m-0 leading-relaxed text-xs">
                          {isMismatch ? (
                            <>
                              <strong>Esito Straordinario:</strong> Le cellule NK del donatore che esprimono il KIR specifico per l'allele mancante nel ricevente <strong>non vengono inibite</strong> sui blasti leucemici. La Malattia Minima Residua (MRD) viene azzerata tramite <em>Graft-versus-Leukemia</em>.
                              <br />
                              <strong>Rischio Recidiva Leucemica a 5 Anni: ~0%</strong> (vs oltre 75% nei match).
                              <br />
                              <strong>Rischio GVHD: Assente!</strong> I tessuti sani del paziente non esprimono i ligandi attivatori da stress (MICA/B) e non vengono toccati.
                            </>
                          ) : (
                            <>
                              <strong>Esito Sfavorevole:</strong> Le cellule NK del donatore trovano i corrispondenti ligandi HLA sulle cellule leucemiche del ricevente e vengono completamente inibite tramite ITIM/SHP-1. Nessun effetto GvL: i cloni leucemici residui riprendono a proliferare, portando a recidiva precoce.
                            </>
                          )}
                        </p>
                      </div>
                    );
                  })()}
                </div>
              ) : (
                /* Tab 2: Preeclampsia */
                <div className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Genotipo Materno */}
                    <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2">
                      <label className="font-bold text-slate-300 block">
                        Aplotipo KIR Materno (Cellule uNK):
                      </label>
                      <select
                        value={maternalAplotype}
                        onChange={(e) => setMaternalAplotype(e.target.value as any)}
                        className="w-full p-2 rounded-lg bg-slate-900 border border-slate-600 text-white font-mono"
                      >
                        <option value="AA">Aplotipo AA (Omozigote Inibitorio - KIR2DL1 forte)</option>
                        <option value="Bx">Aplotipo Bx (Presenza di KIR Attivatori)</option>
                      </select>
                      <p className="text-[11px] text-slate-400 m-0">
                        L'aplotipo materno AA è privo di KIR attivatori ed è ipersensibile al blocco inibitorio.
                      </p>
                    </div>

                    {/* HLA Fetale */}
                    <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2">
                      <label className="font-bold text-slate-300 block">
                        HLA-C del Trofoblasto Fetale (Ereditato dal Padre):
                      </label>
                      <select
                        value={fetalHlaC}
                        onChange={(e) => setFetalHlaC(e.target.value as any)}
                        className="w-full p-2 rounded-lg bg-slate-900 border border-slate-600 text-white font-mono"
                      >
                        <option value="C2">HLA-C Gruppo 2 (Lys80 - Lega fortemente KIR2DL1)</option>
                        <option value="C1">HLA-C Gruppo 1 (Asn80 - Lega debolmente)</option>
                      </select>
                      <p className="text-[11px] text-slate-400 m-0">
                        L'allele fetale C2 ingaggia potentemente il recettore inibitorio KIR2DL1 materno.
                      </p>
                    </div>
                  </div>

                  {/* Risultato Gravidanza */}
                  {(() => {
                    const isPreeclampsiaRisk = maternalAplotype === 'AA' && fetalHlaC === 'C2';

                    return (
                      <div
                        className={`p-4 rounded-xl border ${
                          isPreeclampsiaRisk
                            ? 'bg-red-950/80 border-red-500 text-red-100'
                            : 'bg-emerald-950/80 border-emerald-500 text-emerald-100'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-sm">
                            {isPreeclampsiaRisk
                              ? 'ALTO RISCHIO DI PREECLAMPSIA & RITARDO DI CRESCITA INTRAUTERINA'
                              : 'GRAVIDANZA FISIOLOGICA: NORMALE RIMODELLAMENTO DELLE ARTERIE SPIRALI'}
                          </span>
                          <span className="px-2 py-0.5 rounded font-mono text-[11px] font-bold bg-white/10">
                            Asse uNK - VEGF
                          </span>
                        </div>
                        <p className="m-0 leading-relaxed text-xs">
                          {isPreeclampsiaRisk ? (
                            <>
                              <strong>Fisiopatologia Accademica:</strong> La combinazione tra <strong>Madre KIR AA</strong> e <strong>Feto HLA-C2</strong> induce una massiccia inibizione delle cellule uNK deciduali. Le uNK smettono di produrre <strong>VEGF</strong> e fattori angiogenetici; le arterie spirali non si dilatano e rimangono strette ad alta resistenza, provocando ipoperfusione placentare e preeclampsia materna.
                            </>
                          ) : (
                            <>
                              <strong>Esito Favorevole:</strong> Il trofoblasto extravilloso stimola correttamente le uNK senza un'eccessiva inibizione. Rilascio fisiologico di <strong>VEGF</strong>, trasformazione dilatatoria ad alto flusso delle arterie spirali e perfusione fetale eccellente.
                            </>
                          )}
                        </p>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* TABELLA 21.1: COMPENDIO RECETTORI NK */}
        <section id="tabella-21-1" className="space-y-4 pt-6 border-t border-slate-200">
          <div className="flex items-center gap-2 text-slate-900">
            <FileText className="w-5 h-5 text-blue-700 shrink-0" />
            <h3 className="text-xl font-bold font-serif-heading m-0">
              Tabella 21.1: Compendio Ragionato dei Recettori delle Cellule NK
            </h3>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs font-sans text-xs">
            <table className="min-w-full divide-y divide-slate-200 text-left">
              <thead className="bg-slate-50 font-mono text-[11px] text-slate-700 uppercase">
                <tr>
                  <th className="py-2.5 px-3">Recettore</th>
                  <th className="py-2.5 px-3">Tipo & Coda</th>
                  <th className="py-2.5 px-3">Locus / Chr</th>
                  <th className="py-2.5 px-3">Motivo / Adattatore</th>
                  <th className="py-2.5 px-3">Ligando Riconosciuto</th>
                  <th className="py-2.5 px-3">Funzione Biologica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-800">
                <tr className="bg-amber-50/40 hover:bg-amber-50">
                  <td className="py-2.5 px-3 font-bold text-amber-950">CD16 (FcγRIIIA)</td>
                  <td className="py-2.5 px-3">Attivatore (Ig-like)</td>
                  <td className="py-2.5 px-3 font-mono">1q23</td>
                  <td className="py-2.5 px-3 font-mono">ITAM (catene ζ o γ)</td>
                  <td className="py-2.5 px-3">Fc di IgG1 e IgG3 opsonizzanti</td>
                  <td className="py-2.5 px-3">Media l'ADCC con gerarchia dominante (supera KIR).</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-blue-950">NKG2D</td>
                  <td className="py-2.5 px-3">Attivatore (C-lectin)</td>
                  <td className="py-2.5 px-3 font-mono">12p13 (NKC)</td>
                  <td className="py-2.5 px-3 font-mono">DAP10 (motivo YINM / PI3K)</td>
                  <td className="py-2.5 px-3">MICA, MICB, ULBP1-4 (stress)</td>
                  <td className="py-2.5 px-3">Sensore del danno genotossico e tumori; shedding lo inibisce.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-blue-950">NCR (NKp46, 30, 44)</td>
                  <td className="py-2.5 px-3">Attivatore (Ig-like)</td>
                  <td className="py-2.5 px-3 font-mono">19q13 / 6p21</td>
                  <td className="py-2.5 px-3 font-mono">ITAM (CD3ζ / FcεRIγ / DAP12)</td>
                  <td className="py-2.5 px-3">Proteine virali (HA, HN, E-protein, NKp44L)</td>
                  <td className="py-2.5 px-3">Riconoscimento precoce di cellule infettate da virus respiratori e flavivirus.</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-blue-950">DNAM-1 (CD226)</td>
                  <td className="py-2.5 px-3">Attivatore / Adesione</td>
                  <td className="py-2.5 px-3 font-mono">18q22</td>
                  <td className="py-2.5 px-3 font-mono">Tirosina citoplasmatica</td>
                  <td className="py-2.5 px-3">CD155 (PVR) e CD112 (Nectina-2)</td>
                  <td className="py-2.5 px-3">Co-stimolazione e legame su bersagli infettati da Polio/Herpes.</td>
                </tr>
                <tr className="bg-rose-50/40 hover:bg-rose-50">
                  <td className="py-2.5 px-3 font-bold text-rose-950">KIR-L (KIR2DL, KIR3DL)</td>
                  <td className="py-2.5 px-3">Inibitorio (Coda L)</td>
                  <td className="py-2.5 px-3 font-mono">19q13.4 (LRC)</td>
                  <td className="py-2.5 px-3 font-mono">ITIM (recluta SHP-1/2)</td>
                  <td className="py-2.5 px-3">HLA-A, HLA-B (Bw4), HLA-C (C1/C2)</td>
                  <td className="py-2.5 px-3">Tolleranza verso MHC-I self; base del missing-self e del KIR-mismatch.</td>
                </tr>
                <tr className="bg-purple-50/40 hover:bg-purple-50">
                  <td className="py-2.5 px-3 font-bold text-purple-950">CD94/NKG2A</td>
                  <td className="py-2.5 px-3">Inibitorio (C-lectin)</td>
                  <td className="py-2.5 px-3 font-mono">12p13 (NKC)</td>
                  <td className="py-2.5 px-3 font-mono">ITIM (recluta SHP-1/2)</td>
                  <td className="py-2.5 px-3">HLA-E (con peptide leader HLA-A/B/C)</td>
                  <td className="py-2.5 px-3">Sensore sentinella globale della biosintesi conservata di MHC-I.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* TABELLA 21.2: LE FAMIGLIE DELLE ILCs */}
        <section id="tabella-21-2" className="space-y-4 pt-6 border-t border-slate-200">
          <div className="flex items-center gap-2 text-slate-900">
            <FileText className="w-5 h-5 text-purple-700 shrink-0" />
            <h3 className="text-xl font-bold font-serif-heading m-0">
              Tabella 21.2: Le Famiglie delle Cellule Linfoidi Innate (ILCs) a Confronto
            </h3>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs font-sans text-xs">
            <table className="min-w-full divide-y divide-slate-200 text-left">
              <thead className="bg-slate-50 font-mono text-[11px] text-slate-700 uppercase">
                <tr>
                  <th className="py-2.5 px-3">Gruppo ILC</th>
                  <th className="py-2.5 px-3">Cellule Costitutive</th>
                  <th className="py-2.5 px-3">Master Transcription Factors</th>
                  <th className="py-2.5 px-3">Citochine Guida & Allarmine</th>
                  <th className="py-2.5 px-3">Citochine Prodotte</th>
                  <th className="py-2.5 px-3">Controparte Linfociti T</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-800">
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-blue-900">Gruppo 1 ILC</td>
                  <td className="py-2.5 px-3">NK (citotossiche) & ILC1 (residenti)</td>
                  <td className="py-2.5 px-3 font-mono">T-bet, EOMES</td>
                  <td className="py-2.5 px-3">IL-12, IL-15, IL-18</td>
                  <td className="py-2.5 px-3 font-bold text-blue-950">IFN-γ, TNF-α</td>
                  <td className="py-2.5 px-3">Th1 & Linfociti T citotossici (CTL CD8+)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-emerald-900">Gruppo 2 ILC</td>
                  <td className="py-2.5 px-3">ILC2</td>
                  <td className="py-2.5 px-3 font-mono">GATA3, BCL11B</td>
                  <td className="py-2.5 px-3">IL-25, IL-33, TSLP (Allarmine)</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-950">IL-4, IL-5, IL-13, AREG</td>
                  <td className="py-2.5 px-3">Linfociti Th2</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-bold text-amber-900">Gruppo 3 ILC</td>
                  <td className="py-2.5 px-3">ILC3 & Cellule LTi</td>
                  <td className="py-2.5 px-3 font-mono">RORγt</td>
                  <td className="py-2.5 px-3">IL-23, IL-1β</td>
                  <td className="py-2.5 px-3 font-bold text-amber-950">IL-17, IL-22</td>
                  <td className="py-2.5 px-3">Linfociti Th17</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

              {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_QUESTIONS} lessonNumber={21} title="Verifica dell'Apprendimento · Lezione 21" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS} lessonNumber={21} title="Flashcard di Ripasso Attivo · Lezione 21" />
    </div>
  </article>
);
};
