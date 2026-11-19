/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CAPITOLO I MASTER VIEW: L'IMMUNITÀ INNATA, LE DIFESE DI BARRIERA E L'INFIAMMAZIONE
 * Trattato accademico a pagina unica a flusso continuo privo di discontinuità d'aula.
 * Organizzato per argomenti fisiologici sequenziali con ponti narrativi e simulatori incastonati.
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Shield,
  Layers,
  Activity,
  Flame,
  Dna,
  Zap,
  Target,
  Sparkles,
  Info,
  ChevronRight,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Microscope,
  Stethoscope,
  Pill,
  Clock,
  ExternalLink,
  ChevronDown,
  FileText,
  Sliders,
  RotateCw,
  HelpCircle,
  Baby,
  HeartPulse,
  UserCheck
} from 'lucide-react';

// Import dei simulatori interattivi ufficiali
import { InteractiveTlrPathwaySimulator } from '../InteractiveTlrPathwaySimulator';
import { InteractiveInflammasomeSimulator } from '../InteractiveInflammasomeSimulator';
import { InteractiveExtravasationSimulator } from '../InteractiveExtravasationSimulator';
import { InteractiveExtravasationCascade } from '../InteractiveExtravasationCascade';
import { InteractiveRosSimulator } from '../InteractiveRosSimulator';
import { InteractiveNetosisSimulator } from '../InteractiveNetosisSimulator';
import { InteractiveAntiviralStateSimulator } from '../InteractiveAntiviralStateSimulator';

// Import dati, quiz e flashcards
import { QUIZ_LEZIONE_4 } from '../../data/lezione4Content';
import { QUIZ_LEZIONE_3 } from '../../data/lezione3Content';
import { ANTIMICROBIAL_PEPTIDES_DATA } from '../../data/lezione5Content';
import { ALL_EXAM_QUESTIONS } from '../../data/examQuestions';
import { FLASHCARDS_LEZIONE_3 } from '../../data/lezione3Content';
import { FLASHCARDS_LEZIONE_4 } from '../../data/lezione4Content';
import { FLASHCARDS_LEZIONE_5 } from '../../data/lezione5Content';
import { QuizSection } from '../QuizSection';
import { FlashcardDeck } from '../FlashcardDeck';

interface Chapter1MasterViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
  initialSection?: string;
  onNavigateSection?: (sectionId: string) => void;
}

export const Chapter1MasterView: React.FC<Chapter1MasterViewProps> = ({
  isSerif = false,
  fontSize = 'normal',
  initialSection
}) => {
  const proseFontClass = isSerif ? 'font-serif' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // Domande d'esame e Flashcard del Capitolo I (Lezioni 1, 3, 4, 5, 21)
  const chapter1Questions = useMemo(() => {
    return ALL_EXAM_QUESTIONS.filter((q) => [1, 3, 4, 5, 21].includes(q.lessonNumber));
  }, []);

  const chapter1Flashcards = useMemo(() => {
    return [
      ...FLASHCARDS_LEZIONE_3,
      ...FLASHCARDS_LEZIONE_4,
      ...FLASHCARDS_LEZIONE_5
    ];
  }, []);

  // Sezione attiva per la barra di navigazione rapida in-page
  const [activeSubSection, setActiveSubSection] = useState<string>('sec-1-barriere');

  // Stato Simulatore NK Missing-Self / ADCC
  const [selectedNkScenario, setSelectedNkScenario] = useState<
    'healthy' | 'missing' | 'induced' | 'adcc' | 'evasion'
  >('healthy');

  // Stato Simulatore Clinico Trapianto KIR / Preeclampsia
  const [clinicalTab, setClinicalTab] = useState<'transplant' | 'pregnancy'>('transplant');
  const [patientHla, setPatientHla] = useState<'C1_homo' | 'C2_homo' | 'Bw4_pos'>('C1_homo');
  const [donorKir, setDonorKir] = useState<'anti_C2' | 'anti_C1' | 'all_match'>('anti_C2');
  const [maternalAplotype, setMaternalAplotype] = useState<'AA' | 'Bx'>('AA');
  const [fetalHlaC, setFetalHlaC] = useState<'C1' | 'C2'>('C2');

  const SECTIONS_NAV = [
    { id: 'sec-1-barriere', label: '1.0 Barriere & Peptidi (AMPs)', icon: Shield },
    { id: 'sec-1-prr', label: '1.1 Sensori PRR & Vie TLR', icon: Zap },
    { id: 'sec-1-inflammasoma', label: '1.2 Inflammasoma NLRP3 & Piroptosi', icon: Flame },
    { id: 'sec-1-stravaso', label: '1.3 Reclutamento & Stravaso', icon: Activity },
    { id: 'sec-1-effettori', label: '1.4 Neutrofili: NOX2 & NETosi', icon: Target },
    { id: 'sec-1-antivirale', label: '1.5 Interferoni Tipo I & ISG', icon: Dna },
    { id: 'sec-1-nk', label: '1.6 Cellule NK (Missing-Self) & ILCs', icon: Layers },
    { id: 'sec-1-verifica', label: 'Verifica & Flashcards', icon: CheckCircle2 }
  ];

  // ScrollSpy interno per aggiornare il selettore rapido
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = SECTIONS_NAV.length - 1; i >= 0; i--) {
        const item = SECTIONS_NAV[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSubSection(item.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lastScrolledSectionRef = useRef<string | null>(null);

  // Gestione scorrimento iniziale se specificato (singola esecuzione per prevenire scroll a tratti)
  useEffect(() => {
    if (initialSection && lastScrolledSectionRef.current !== initialSection) {
      lastScrolledSectionRef.current = initialSection;
      setTimeout(() => {
        const el = document.getElementById(initialSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [initialSection]);

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSubSection(id);
    }
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8 lg:space-y-10 pb-16">
      
      {/* 1. TESTATA MONUMENTALE DEL CAPITOLO I */}
      <header className="bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-950 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-white shadow-xl border border-emerald-800/40 relative overflow-hidden w-full">
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-10 bottom-0 text-emerald-500/10 font-mono font-black text-9xl select-none pointer-events-none">
          I
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              Capitolo I · Trattato Integrato
            </span>
            <span className="text-xs font-mono text-emerald-200/70">
              Flusso Continuo di Fisiopatologia & Immunologia Cellulare
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            L'Immunità Innata, le Difese di Barriera e la Dinamica dell'Infiammazione
          </h1>

          <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed max-w-3xl">
            Dalla prima interfaccia epiteliale all'esplosione catalitica del burst respiratorio e alla citotossicità 
            chirurgica delle cellule Natural Killer. Questo capitolo unifica in un'unica trattazione continua l'anatomia, 
            la biochimica dei sensori molecolari e le risposte effettrici della difesa innata umana.
          </p>

          {/* Badge riassuntivi */}
          <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono text-emerald-200/90 border-t border-emerald-800/50">
            <span className="flex items-center gap-1.5 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/60">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              Barriere Fisico-Chimiche (AMPs)
            </span>
            <span className="flex items-center gap-1.5 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/60">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              Tassonomia PRRs (TLR, CLR, NLR, RLR, STING)
            </span>
            <span className="flex items-center gap-1.5 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/60">
              <Flame className="w-3.5 h-3.5 text-emerald-400" />
              Inflammasoma NLRP3 & Piroptosi
            </span>
            <span className="flex items-center gap-1.5 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/60">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              Stravaso Endoteliale & NOX2
            </span>
            <span className="flex items-center gap-1.5 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/60">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              Missing-Self NK & ILCs
            </span>
          </div>
        </div>
      </header>

      {/* 2. BARRA STICKY DI NAVIGAZIONE RAPIDA AD ANCORAGGI (In-Page Navigation) */}
      <nav className="sticky top-16 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl p-2 shadow-md">
        <div className="flex items-center justify-between px-2 pb-1.5 mb-1.5 border-b border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <span className="font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            Indice degli Argomenti del Capitolo I
          </span>
          <span className="hidden sm:inline">Navigazione Rapida a Scorrimento Continuo</span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          {SECTIONS_NAV.map((item) => {
            const Icon = item.icon;
            const isActive = activeSubSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToAnchor(item.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white font-bold shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-750'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-emerald-600 dark:text-emerald-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* ========================================================================================= */}
      {/* SEZIONE 1.0: PROLOGO FISIOLOGICO & ARCHITETTURA DELLE BARRIERE EPITELIALI (AMPs) */}
      {/* ========================================================================================= */}
      <article
        id="sec-1-barriere"
        className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 lg:p-9 shadow-xs space-y-6 w-full"
      >
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            <span>Sezione 1.0 · Prima Linea Difensiva</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
            Architettura delle Barriere Epiteliali, Peptidi Antimicrobici (AMPs) e Microbioma
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            La barriera fisico-chimica e microbiologica costituisce l'interfaccia continua tra l'ambiente esterno e l'organismo ospite.
          </p>
        </div>

        <div className={`text-slate-800 dark:text-slate-200 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            L'immunità innata (o naturale) rappresenta il più antico sistema difensivo filogenetico, condiviso sia dai metazoi 
            invertebrati che dai vertebrati superiori. A differenza dell'immunità adattativa, non richiede una fase di espansione 
            clonale né una ricombinazione somatica genica per operare: i suoi recettori e meccanismi effettori sono 
            <strong> germline-encoded</strong> (codificati direttamente nella linea germinale genomica) e pronti a intervenire entro minuti o ore 
            (fase 0-12 ore) dal contatto con l'agente esogeno.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 pt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Le Tre Componenti Sinottiche delle Barriere
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose my-4">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase">
                1. Barriera Fisica
              </span>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                Integrità Epiteliale & Desquamazione
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Strato corneo cheratinizzato cutaneo, giunzioni occludenti (zonulae occludentes: claudine e occludine), 
                clearance mucociliare dell'albero tracheo-bronchiale e peristalsi gastrica ed intestinale.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase">
                2. Barriera Chimica
              </span>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                pH, Secrezioni & Lisozima
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Acidità cutanea (pH 5.5 da acidi grassi del sebo), succo gastrico (pH 1.5-2.0), surfattante polmonare 
                (SP-A e SP-D con funzione di opsonine) e lisozima (idrolisi dei legami β-1,4 del peptidoglicano).
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase">
                3. Barriera Microbiologica
              </span>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                Microbiota Commensale
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Centomila miliardi di microrganismi simbiotici che occupano nicchie ecologiche per esclusione competitiva, 
                sintetizzano acidi grassi a catena corta (SCFA: butirrato, propionato) e secernono batteriocine battericide.
              </p>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 pt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            I Peptidi Antimicrobici (AMPs): Defensine e Catelicidine
          </h3>

          <p>
            Tra i più sofisticati presidi biochimici delle superfici mucose figurano i <strong>peptidi antimicrobici (AMP)</strong>, 
            brevi polipeptidi cationici (ricchi in residui di arginina e lisina) ad attività battericida a spettro ultra-largo:
          </p>

          <div className="overflow-x-auto not-prose my-3">
            <table className="w-full text-xs text-left border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 dark:bg-slate-800 font-mono text-slate-700 dark:text-slate-300">
                <tr>
                  <th className="p-2.5">Famiglia Molecolare</th>
                  <th className="p-2.5">Sorgente Cellulare Primaria</th>
                  <th className="p-2.5">Caratteristiche Chimiche</th>
                  <th className="p-2.5">Meccanismo Battericida</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-2.5 font-bold font-mono text-emerald-600 dark:text-emerald-400">α-Defensine (HD5, HD6)</td>
                  <td className="p-2.5">Cellule di Paneth (Cripte di Lieberkühn nell'ileo) & Granuli Neutrofili (HNP1-4)</td>
                  <td className="p-2.5">29-35 aminoacidi, 3 ponti disolfuro intramolecolari tra cisteine invarianti (C1-C6, C2-C4, C3-C5)</td>
                  <td className="p-2.5">Interazione elettrostatica con membrane cariche negativamente; inserzione e formazione di pori "barrel-stave" con lisi osmotica.</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-2.5 font-bold font-mono text-emerald-600 dark:text-emerald-400">β-Defensine (hBD1, hBD2, hBD3)</td>
                  <td className="p-2.5">Cheratinociti cutanei ed epiteli respiratori e urogenitali stimolati da citochine</td>
                  <td className="p-2.5">36-42 aminoacidi, conformazione a foglietto β con diversa connettività dei ponti disolfuro (C1-C5, C2-C4, C3-C6)</td>
                  <td className="p-2.5">Disgregazione del doppio strato lipidico batterico secondo il "modello a tappeto" (carpet model) e chemioattrazione per cellule T e DC.</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-2.5 font-bold font-mono text-emerald-600 dark:text-emerald-400">Catelicidina (hCAP-18 / LL-37)</td>
                  <td className="p-2.5">Sintetizzata come pro-peptide da neutrofili ed epiteli; attivata per clivaggio da Proteinasi-3</td>
                  <td className="p-2.5">Peptide C-terminale di 37 aminoacidi ad alfa-elica anfifilica (LL-37)</td>
                  <td className="p-2.5">Neutralizzazione diretta dell'endotossina LPS batterica, permeabilizzazione batterica e induzione di chemochine infiammatorie.</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-2.5 font-bold font-mono text-emerald-600 dark:text-emerald-400">Calprotectina (S100A8/S100A9)</td>
                  <td className="p-2.5">Citoplasma dei neutrofili e cellule epiteliali (costituisce il 45% delle proteine solubili)</td>
                  <td className="p-2.5">Eterodimero chelante cationi bivalenti</td>
                  <td className="p-2.5">"Nutritional Immunity": chela ad altissima affinità Zinco (Zn²⁺) e Manganese (Mn²⁺), sottraendoli al metabolismo vitale dei microbi.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* PONTE NARRATIVO DI RACCORDO */}
        <div className="bg-emerald-50 dark:bg-emerald-950/40 border-l-4 border-emerald-500 p-4 rounded-r-xl not-prose space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300 uppercase">
            <ArrowRight className="w-4 h-4" />
            <span>Ponte Fisiologico di Transizione</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed">
            Se la barriera fisica viene lesionata (trauma, ustione, puntura) o il patogeno possiede fattori di virulenza 
            capaci di superarla, l'invasore penetra nell'interstizio connettivale. Qui entrano in gioco le cellule sentinella 
            tissutali (macrofagi residenti, cellule dendritiche e mastociti) dotate della suite molecolare dei 
            <strong> Pattern Recognition Receptors (PRRs)</strong>, analizzata nel paragrafo successivo.
          </p>
        </div>
      </article>

      {/* ========================================================================================= */}
      {/* SEZIONE 1.1: IL RICONOSCIMENTO MOLECOLARE: LA TASSONOMIA DEI PRRs (TLR, CLR, NLR, RLR, STING) */}
      {/* ========================================================================================= */}
      <article
        id="sec-1-prr"
        className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 lg:p-9 shadow-xs space-y-6 w-full"
      >
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            <span>Sezione 1.1 · Riconoscimento Molecolare</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
            La Tassonomia dei Sensori PRR: Recettori Toll-like, CLR, RLR e l'Asse cGAS-STING
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Come il sistema immunitario innato discrimina le firme molecolari esogene invarianti (PAMP) e le allarmine endogene (DAMP).
          </p>
        </div>

        <div className={`text-slate-800 dark:text-slate-200 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Il sistema immunitario innato non riconosce specifici epitopi antigenici tridimensionali come fanno le immunoglobuline o il TCR, 
            ma è programmato per rilevare <strong>motivi molecolari conservati</strong>:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>PAMP (Pathogen-Associated Molecular Patterns):</strong> strutture biochimiche invarianti, condivise da intere 
              classi di microrganismi e assolutamente indispensabili per la loro sopravvivenza o replicazione (es. LPS dei batteri Gram-negativi, 
              acido lipoteicoico e peptidoglicano dei Gram-positivi, flagellina, dsRNA virale, DNA CpG non metilato). Non possono 
              subire mutazioni rapide senza compromettere la vitalità del microrganismo.
            </li>
            <li>
              <strong>DAMP (Damage-Associated Molecular Patterns / Allarmine):</strong> molecole endogene "self" segregate in condizioni 
              fisiologiche all'interno dei compartimenti cellulari (nucleo, mitocondri, citoplasma), che vengono rilasciate all'esterno 
              in seguito a morte cellulare necrotica o danno cellulare acuto (es. ATP extracellulare, proteina HMGB1, cristalli di acido urico, 
              filamenti di actina, frammenti di ialuronano e DNA mitocondriale citosolico).
            </li>
          </ul>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 pt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            I Recettori Toll-Like (TLR): Topografia Subcellulare & Specificità
          </h3>

          <p>
            I recettori Toll-like (TLR1-TLR10 nell'uomo) sono glicoproteine transmembrana di tipo I caratterizzate da:
          </p>
          <ol className="list-decimal pl-5 space-y-1.5">
            <li>
              <strong>Dominio extracellulare (o luminale):</strong> conformato a ferro di cavallo, costituito da 16-28 ripetizioni ricche in 
              leucina (LRR, Leucine-Rich Repeats), responsabile dell'aggancio diretto del ligando.
            </li>
            <li>
              <strong>Singolo segmento transmembrana idrofobico.</strong>
            </li>
            <li>
              <strong>Dominio citoplasmatico TIR (Toll/IL-1 Receptor):</strong> omologo al dominio intracellulare del recettore di IL-1, 
              responsabile del reclutamento degli adattatori e dell'innesco della cascata chinasica.
            </li>
          </ol>

          {/* Tabella sinottica TLR */}
          <div className="overflow-x-auto not-prose my-3">
            <table className="w-full text-xs text-left border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 dark:bg-slate-800 font-mono text-slate-700 dark:text-slate-300">
                <tr>
                  <th className="p-2.5">Recettore</th>
                  <th className="p-2.5">Localizzazione</th>
                  <th className="p-2.5">Ligando Tipico (PAMP / DAMP)</th>
                  <th className="p-2.5">Adattatore Primario</th>
                  <th className="p-2.5">Effetto Trascrizionale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-2.5 font-bold font-mono text-blue-600 dark:text-blue-400">TLR1 / TLR2</td>
                  <td className="p-2.5">Membrana Plasmatica</td>
                  <td className="p-2.5">Lipopeptidi triacilati (Batteri Gram-negativi, Micobatteri)</td>
                  <td className="p-2.5 font-mono">MyD88 / TIRAP</td>
                  <td className="p-2.5">Attivazione NF-κB & MAPK (TNF, IL-6, IL-12)</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-2.5 font-bold font-mono text-blue-600 dark:text-blue-400">TLR2 / TLR6</td>
                  <td className="p-2.5">Membrana Plasmatica</td>
                  <td className="p-2.5">Lipopeptidi diacilati, acido lipoteicoico, zimolsano fungino</td>
                  <td className="p-2.5 font-mono">MyD88 / TIRAP</td>
                  <td className="p-2.5">Attivazione NF-κB & MAPK (TNF, IL-1β)</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-2.5 font-bold font-mono text-blue-600 dark:text-blue-400">TLR4 (+ MD2 + CD14)</td>
                  <td className="p-2.5">Membrana & Endosoma</td>
                  <td className="p-2.5">Lipopolisaccaride (LPS endotossico) & DAMP (HMGB1, Tenascina-C)</td>
                  <td className="p-2.5 font-mono">MyD88 (superficie) & TRIF (endosoma)</td>
                  <td className="p-2.5 font-semibold text-emerald-600 dark:text-emerald-400">Biforcazione: NF-κB (flogosi) + IRF3 (IFN-I)</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-2.5 font-bold font-mono text-blue-600 dark:text-blue-400">TLR5</td>
                  <td className="p-2.5">Membrana Plasmatica</td>
                  <td className="p-2.5">Flagellina monomerica batterica</td>
                  <td className="p-2.5 font-mono">MyD88</td>
                  <td className="p-2.5">Attivazione NF-κB (difesa mucosale intestinale)</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-2.5 font-bold font-mono text-indigo-600 dark:text-indigo-400">TLR3</td>
                  <td className="p-2.5">Membrana Endosomiale</td>
                  <td className="p-2.5">dsRNA virale (RNA a doppio filamento replicativo)</td>
                  <td className="p-2.5 font-mono font-bold text-purple-600 dark:text-purple-400">TRIF (esclusivo MyD88-indipendente)</td>
                  <td className="p-2.5 font-semibold text-purple-600 dark:text-purple-400">Induzione potente di IRF3 e IFN-β</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-2.5 font-bold font-mono text-indigo-600 dark:text-indigo-400">TLR7 / TLR8</td>
                  <td className="p-2.5">Membrana Endosomiale</td>
                  <td className="p-2.5">ssRNA virale ricco in GU (HIV, Influenza, SARS-CoV-2)</td>
                  <td className="p-2.5 font-mono">MyD88</td>
                  <td className="p-2.5">IRF7 (massiccio IFN-α nelle pDC) + NF-κB</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                  <td className="p-2.5 font-bold font-mono text-indigo-600 dark:text-indigo-400">TLR9</td>
                  <td className="p-2.5">Membrana Endosomiale</td>
                  <td className="p-2.5">Motivi CpG non metilati (DNA batterico e virale di herpesvirus)</td>
                  <td className="p-2.5 font-mono">MyD88</td>
                  <td className="p-2.5">IRF7 (IFN-α) + NF-κB</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 pt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Le Due Vie di Segnalazione: MyD88 vs TRIF
          </h3>

          <p>
            Il legame del PAMP induce l'omodimerizzazione o l'eterodimerizzazione dei TLR, consentendo ai domini TIR citoplasmatici 
            di assemblare piattaforme di segnalazione altamente specializzate:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-3">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-2">
              <div className="flex items-center gap-2 font-mono font-bold text-slate-800 dark:text-slate-200 text-xs uppercase">
                <Flame className="w-4 h-4 text-orange-500" />
                <span>Via MyD88-Dipendente (Pro-Infiammatoria)</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                MyD88 recluta le serina/treonina chinasi <strong>IRAK4</strong> e <strong>IRAK1</strong> formando il <em>Myddosoma</em>. 
                IRAK1 attiva l'ubiquitina ligasi E3 <strong>TRAF6</strong>, che sintetizza catene di poliubiquitina Lys63 per attivare 
                la chinasi <strong>TAK1</strong>. TAK1 fosforila simultaneamente:
              </p>
              <ul className="text-xs text-slate-700 dark:text-slate-300 list-disc pl-4 space-y-1">
                <li>Il complesso <strong>IKK</strong> (IKKα/IKKβ/NEMO) → fosforilazione e degradazione proteasomiale di IκB → traslocazione nucleare di <strong>NF-κB (p50/p65)</strong>.</li>
                <li>Le chinasi <strong>MAPK</strong> (p38, JNK, ERK) → attivazione del fattore di trascrizione <strong>AP-1</strong>.</li>
              </ul>
              <p className="text-[11px] font-mono text-slate-900 dark:text-slate-200 font-semibold pt-1">
                Output: TNF-α, IL-1β, IL-6, CXCL8, IL-12 e molecole costimolatorie CD80/CD86.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-2">
              <div className="flex items-center gap-2 font-mono font-bold text-purple-800 dark:text-purple-300 text-xs uppercase">
                <Dna className="w-4 h-4 text-purple-500" />
                <span>Via TRIF-Dipendente (Antivirale / IFN-I)</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Utilizzata in via esclusiva da <strong>TLR3</strong> e attivata da <strong>TLR4</strong> dopo endocitosi nel compartimento endosomiale. 
                L'adattatore TRIF recluta <strong>TRAF3</strong>, che assembla un complesso chinasico con <strong>TBK1</strong> (TANK-binding kinase 1) 
                e <strong>IKKε</strong>:
              </p>
              <ul className="text-xs text-slate-700 dark:text-slate-300 list-disc pl-4 space-y-1">
                <li>Fosforilazione al C-terminale dei fattori trascrizionali citosolici <strong>IRF3</strong> e <strong>IRF7</strong>.</li>
                <li>Omodimerizzazione di IRF3/7 e rapida traslocazione nel nucleo.</li>
                <li>Legame cooperativo ai promotori degli <strong>Interferoni di Tipo I (IFN-α, IFN-β)</strong>.</li>
              </ul>
              <p className="text-[11px] font-mono text-purple-900 dark:text-purple-200 font-semibold pt-1">
                Output: Stato antivirale intracellulare, espressione di ISG ed amplificazione sistemica.
              </p>
            </div>
          </div>
        </div>

        {/* SIMULATORE INTERATTIVO INCASTONATO */}
        <div className="not-prose pt-2">
          <div className="mb-2 flex items-center justify-between text-xs font-mono text-slate-500">
            <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-blue-600" />
              Laboratorio Dinamico: Cinetica delle Vie TLR a Confronto Diretto
            </span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Simulatore Interattivo</span>
          </div>
          <InteractiveTlrPathwaySimulator />
        </div>

        {/* ALTRI SENSORI CITOSOLICI: RLR E cGAS-STING */}
        <div className={`text-slate-800 dark:text-slate-200 space-y-3 pt-3 ${proseFontClass} ${proseSizeClass}`}>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            I Sensori Intracellulari: RLR (RIG-I/MDA5) e l'Asse cGAS-STING
          </h3>
          <p>
            Quando i microbi penetrano direttamente all'interno del citosol cellulare, sfuggono alla rilevazione luminale 
            degli endosomi. In tale compartimento agiscono due grandi sistemi di sorveglianza genomica:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Recettori RLR (RIG-I-Like Receptors):</strong> elicasi a RNA citosoliche (RIG-I e MDA5). <strong>RIG-I</strong> 
              riconosce RNA virali a singolo filamento provvisti di 5'-trifosfato o 5'-difosfato privi di cap metilato; <strong>MDA5</strong> 
              riconosce dsRNA a catena molto lunga (&gt;1000 bp). Entrambi segnalano attraverso il loro dominio CARD legando la proteina 
              mitocondriale <strong>MAVS</strong> (Mitochondrial Antiviral Signaling), che forma aggregati prion-like sulla membrana esterna 
              mitocondriale innescando la fosforilazione di TBK1-IRF3.
            </li>
            <li>
              <strong>L'Asse cGAS-STING per il DNA Citosolico:</strong> la sintasi enzimatica <strong>cGAS</strong> rileva la presenza anomala 
              di dsDNA nel citosol (da virus a DNA, retrovirus, batteri intracellulari o rottura dell'involucro nucleare in cellule tumorali). 
              cGAS catalizza la sintesi del secondo messaggero ciclico <strong>2'3'-cGAMP</strong>, che si lega alla proteina transmembrana 
              <strong>STING</strong> residente sul reticolo endoplasmatico. STING oligomerizza, migra verso il Golgi e recluta la chinasi 
              TBK1, determinando un'imponente induzione trascrizionale di IFN-β.
            </li>
          </ul>

          {/* Sotto-blocco 1: Recettori NLR citosolici non-inflammasomici (NOD1 e NOD2) */}
          <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Recettori NLR Citosolici Non-Inflammasomici: La Sentinella Intracellulare NOD1 e NOD2
            </h3>
            <p>
              I recettori <strong>NOD1 (CARD4)</strong> e <strong>NOD2 (CARD15)</strong> appartengono alla famiglia dei 
              <em> Nucleotide-binding Oligomerization Domain-like Receptors (NLR)</em> ma, a differenza di NLRP3, non assemblano 
              un inflammasoma multiproteico né clivano caspasi-1: fungono invece da potenti attivatori citoplasmatici della trascrizione 
              pro-infiammatoria guidata da NF-κB e dalle chinasi MAPK. Riconoscono con estrema stereospecificità frammenti solubili 
              del peptidoglicano batterico internalizzati per endocitosi o traslocati attraverso sistemi di secrezione batterica (T3SS/T4SS):
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>NOD1 (CARD4):</strong> provvisto di un singolo dominio CARD N-terminale. Riconosce specificamente l'<strong>acido meso-diaminopimelico (iE-DAP: D-glutammil-meso-diaminopimelato)</strong>, 
                un amminoacido atipico caratteristico del peptidoglicano della quasi totalità dei <strong>batteri Gram-negativi</strong> 
                e di una ristretta cerchia di Gram-positivi intracellulari (come <em>Listeria monocytogenes</em>).
              </li>
              <li>
                <strong>NOD2 (CARD15):</strong> provvisto di due domini CARD tandem N-terminali. Riconosce il <strong>Muramil-Dipeptide (MDP: N-acetilmuramil-L-alanil-D-isoglutamina)</strong>, 
                la minima frazione bioattiva universale del peptidoglicano presente sia nei batteri <strong>Gram-positivi</strong> che nei <strong>Gram-negativi</strong>. 
                È espresso preferenzialmente nei fagociti mononucleati e soprattutto nelle <strong>cellule di Paneth</strong> situate alla base delle cripte di Lieberkühn nell'ileo.
              </li>
            </ul>

            <div className="bg-slate-50 dark:bg-slate-850 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 not-prose my-2 text-xs">
              <div className="flex items-center gap-2 font-mono font-bold text-slate-900 dark:text-slate-100">
                <Dna className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Cascata Molecolare di Trasduzione: La Chinasi RIPK2 (RICK) e l'Asse NF-κB/MAPK</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Il legame del peptidoglicano ai domini LRR C-terminali induce un cambiamento conformazionale mediato dal dominio NACHT (NBD) dipendente da ATP, 
                favorendo l'oligomerizzazione di NOD1/NOD2. I domini CARD esposti interagiscono per omotipia CARD-CARD con la serina/treonina chinasi 
                <strong> RIPK2 (nota anche come RICK o CARDIAK)</strong>. RIPK2 viene ampiamente poliubiquitinata con catene Lys63 da parte delle ligasi E3 
                (cIAP1/2 e XIAP), creando una piattaforma di docking che recluta la chinasi <strong>TAK1</strong> e il complesso <strong>IKK (IKKα/β/NEMO)</strong>. 
                L'esito è la fosforilazione e degradazione di IκB, la traslocazione nucleare di <strong>NF-κB (p50/p65)</strong> e l'attivazione contemporanea 
                delle chinasi p38 e JNK (attivando AP-1), inducendo trascrizione di citochine (TNF-α, IL-6, CXCL8) e chemochine chemiotattiche per neutrofili.
              </p>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-750">
                <span className="font-bold font-mono text-emerald-700 dark:text-emerald-400 block">Ruolo Fisiologico Omeostatico nelle Cellule di Paneth:</span>
                <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                  Nelle cripte ileali, il sensing tonico di MDP mediato da NOD2 stimola fisiologicamente le cellule di Paneth a secernere granuli apicali ricchi 
                  in <strong>α-defensine enteriche (HD5 e HD6)</strong>, lisozima e fosfolipasi A2 secretoria (sPLA2), mantenendo sterile la nicchia delle cellule staminali 
                  intestinali Lgr5⁺ e impedendo l'invasione batterica luminale della barriera mucosale.
                </p>
              </div>
            </div>

            {/* Correlazione Clinica NOD2 */}
            <div className="p-4 rounded-xl border border-red-200 dark:border-red-900/60 bg-red-50/40 dark:bg-red-950/20 not-prose space-y-2">
              <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase text-red-800 dark:text-red-300">
                <Stethoscope className="w-4 h-4 text-red-600" />
                <span>Correlazione Clinica Genetica: Due Facce Mutazionali di NOD2 (Morbo di Crohn vs Sindrome di Blau)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-red-200 dark:border-red-800/60">
                  <span className="font-bold text-red-700 dark:text-red-400 font-mono block">1. Mutazioni Loss-of-Function nel Morbo di Crohn:</span>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    Polimorfismi e mutazioni con perdita di funzione nel dominio LRR di <em>NOD2/CARD15</em> (in particolare la mutazione frameshift 
                    <strong> 3020insC / 1007fs</strong>, oltre a R702W e G908R) sono il più solido fattore di rischio genetico per il <strong>Morbo di Crohn ileale fibrostenosante</strong>. 
                    <strong>Paradosso patogenetico:</strong> la mancata rilevazione di MDP porta a un <em>deficit di secrezione di α-defensine (HD5/HD6)</em> da parte delle cellule di Paneth. 
                    Il difetto innato primario consente la proliferazione batterica luminale e la traslocazione di microbi nella sottomucosa, 
                    scatenando una risposta adattativa vicariante iperreattiva cronica guidata da linfociti Th1/Th17 con flogosi transmurale, granulomi non caseosi, stenosi e fistole.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-red-200 dark:border-red-800/60">
                  <span className="font-bold text-red-700 dark:text-red-400 font-mono block">2. Mutazioni Gain-of-Function nella Sindrome di Blau:</span>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    Mutazioni autosomiche dominanti con guadagno di funzione concentrate nel dominio centrale <strong>NACHT/NBD</strong> di NOD2 
                    (frequente la sostituzione <strong>R334W</strong> o <strong>R334Q</strong>). Queste mutazioni impediscono il mantenimento della conformazione 
                    autoinibita a riposo: NOD2 oligomerizza spontaneamente indipendentemente dalla presenza del ligando MDP, determinando 
                    iperattivazione costitutiva basale di NF-κB. Clinicamente si manifesta come malattia autoinfiammatoria granulomatosa sistemica pediatrica 
                    con la triade classica: <strong>artrite granulomatosa poliatipica giovanile, dermatite eritemato-papulosa cronica e uveite/panuveite granulomatosa</strong> 
                    progressiva con rischio di cecità.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sotto-blocco 2: Recettori Lectinici di Tipo C (CLR: Dectina-1 e DC-SIGN) */}
          <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Recettori Lectinici di Tipo C (CLR): Dectina-1, DC-SIGN e la Difesa Antifungina Th17
            </h3>
            <p>
              I <strong>recettori lectinici di tipo C (CLR, C-type Lectin Receptors)</strong> sono proteine transmembrana o solubili dotate di uno o più 
              domini di riconoscimento dei carboidrati (CRD o CTLD, Carbohydrate Recognition Domain). Sebbene filogeneticamente calcio-dipendenti, 
              molti sensori innati di questa classe legano le complesse impalcature polisaccaridiche delle pareti fungine, batteriche e di parassiti 
              innescando sia fagocitosi che programmi trascrizionali dedicati:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-3 text-xs">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-2">
                <span className="font-bold font-mono text-purple-700 dark:text-purple-400 uppercase text-xs flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-purple-600" />
                  Dectina-1 (CLEC7A) & L'Asse hemITAM-Syk-CARD9
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Espressa su cellule dendritiche mieloidi, monociti, macrofagi e neutrofili. Riconosce selettivamente i polimeri di 
                  <strong> β-1,3-glucani</strong> e β-1,6-glucani che formano l'ossatura rigida della parete cellulare di lieviti e miceti filamentosi 
                  (<em>Candida albicans</em>, <em>Aspergillus fumigatus</em>, <em>Pneumocystis jirovecii</em>).
                </p>
                <div className="bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-slate-100 font-mono">Meccanismo di Trasduzione Intracellulare:</span>
                  <p className="text-slate-600 dark:text-slate-400">
                    La coda citosolica di Dectina-1 possiede un motivo singolare denominato <strong>hemITAM</strong> (provvisto di una singola tirosina 
                    YxxL). Il legame del β-glucano induce dimerizzazione e fosforilazione della tirosina da parte di chinasi Src, consentendo 
                    il reclutamento e l'attivazione della tirosina chinasi citosolica <strong>Syk</strong>.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Syk fosforila e recluta la proteina adattatrice <strong>CARD9</strong>, la quale assembla con BCL10 e MALT1 il complesso trimerico 
                    <strong> CBM (CARD9-BCL10-MALT1)</strong>. Il complesso CBM attiva potentemente IKK/NF-κB e le vie MAPK, inducendo burst respiratorio 
                    e trascrizione massiva di citochine polarizzanti: <strong>IL-1β, IL-6 e soprattutto IL-23</strong>.
                  </p>
                </div>
                <p className="font-semibold text-purple-900 dark:text-purple-200 pt-1">
                  Impatto Funzionale: È la principale via d'istruzione innata per la polarizzazione dei linfociti T helper <strong>Th17</strong> (secrezione di IL-17A, IL-17F e IL-22), 
                  cardinali per il reclutamento di neutrofili nelle mucose. Mutazioni genetiche in Dectina-1 o CARD9 causano <strong>Candidosi Mucocutanea Cronica (CMC)</strong> recidivante severa e infezioni fungine invasive del SNC.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-2">
                <span className="font-bold font-mono text-blue-700 dark:text-blue-400 uppercase text-xs flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-blue-600" />
                  DC-SIGN (CD209) & Recettore del Mannosio (CD206)
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>DC-SIGN (CD209):</strong> recettore lectinico espresso ad alta densità sulle cellule dendritiche dermiche e mucosali. 
                  Riconosce glicoproteine ricche in residui terminali di <strong>D-mannosio e L-fucosio</strong> presenti su virus (envelope gp120 di HIV, glicoproteina E di Dengue, proteina Spike di SARS-CoV-2), micobatteri (<em>M. tuberculosis</em>) e parassiti (<em>Schistosoma mansoni</em>).
                </p>
                <div className="bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-slate-100 font-mono">Cavallo di Troia & Sovversione Immunitaria:</span>
                  <p className="text-slate-600 dark:text-slate-400">
                    Oltre a mediare l'internalizzazione antigenica per il cross-priming, DC-SIGN viene sfruttato opportunisticamente da <strong>HIV-1</strong>: 
                    il virus si ancora a DC-SIGN sulle cellule dendritiche mucose senza subire neutralizzazione; le cellule dendritiche migrano 
                    ai linfonodi regionali dove trasferiscono particelle virali integre ai linfociti T CD4⁺ bersaglio (fenomeno di <em>trans-infection</em>).
                  </p>
                </div>
                <p className="text-slate-700 dark:text-slate-300 pt-1 leading-relaxed">
                  <strong>Recettore del Mannosio (MR / CD206):</strong> espresso su macrofagi tissutali (specie M2) e cellule endoteliali sinusoidali epatiche. 
                  Media rapida endocitosi e clearance lisosomiale di microbi mannosilati e glicoproteine endogene senescenti, fungendo da marcatore fenotipico 
                  cardinale dei macrofagi a polarizzazione riparativa M2.
                </p>
              </div>
            </div>
          </div>

          {/* Sotto-blocco 3: PRR Solubili Umorali (Pentraxine, Collectine, Ficoline) */}
          <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              PRR Solubili Umorali: Pentraxine, Collectine e Ficoline come "Anticorpi Innati Ante-Litteram"
            </h3>
            <p>
              L'immunità innata possiede una formidabile componente umorale costituita da <strong>PRR solubili circolanti</strong> nel plasma 
              e nei fluidi interstiziali. Agiscono come funzionali "antenati filogenetici delle immunoglobuline": riconoscono motivi PAMP/DAMP 
              multivalenti, opsonizzano il bersaglio e fungono da ponte molecolare per innescare l'attivazione della cascata del complemento 
              e la fagocitosi recettore-mediata:
            </p>

            <div className="overflow-x-auto not-prose my-3 w-full border border-slate-200 dark:border-slate-800 rounded-lg">
              <table className="w-full min-w-[580px] text-xs text-left">
                <thead className="bg-slate-100 dark:bg-slate-800 font-mono text-slate-700 dark:text-slate-300">
                  <tr>
                    <th className="p-2.5">Famiglia PRR Solubile</th>
                    <th className="p-2.5">Molecole Esemplari</th>
                    <th className="p-2.5">Origine Cellulare & Induzione</th>
                    <th className="p-2.5">Ligando Molecolare (PAMP / DAMP)</th>
                    <th className="p-2.5">Meccanismo Effettore Primario</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                    <td className="p-2.5 font-bold font-mono text-blue-600 dark:text-blue-400">Pentraxine Corte</td>
                    <td className="p-2.5 font-semibold">CRP (Proteina C Reattiva) & SAP (Amiloide Sierica P)</td>
                    <td className="p-2.5">Epatociti; induzione massiva (&gt;1000x) guidata da <strong>IL-6</strong> sistemica</td>
                    <td className="p-2.5">Fosforilcolina (parete pneumococcica) e residui fosfatidilcolinici di cellule apoptotiche</td>
                    <td className="p-2.5 font-medium text-emerald-700 dark:text-emerald-400">Fissa il complesso <strong>C1q</strong> attivando la via classica del complemento; lega i recettori FcγR (CD32a/CD64) promuovendo opsonofagocitosi</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                    <td className="p-2.5 font-bold font-mono text-indigo-600 dark:text-indigo-400">Pentraxine Lunghe</td>
                    <td className="p-2.5 font-semibold">PTX3 (Pentraxina-3)</td>
                    <td className="p-2.5">Monociti, macrofagi, cellule endoteliali e cDC nel focolaio tissutale infiammato (indotta da <strong>TNF-α e IL-1β</strong>, insensibile a IL-6)</td>
                    <td className="p-2.5">Galattomannano di <em>Aspergillus fumigatus</em>, conidi micotici, componenti di <em>Pseudomonas</em> e frammenti apoptotici</td>
                    <td className="p-2.5">Opsonizzazione locale diretta, reclutamento di C1q, attivazione di macrofagi e rimodellamento vascolare tissutale</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                    <td className="p-2.5 font-bold font-mono text-teal-600 dark:text-teal-400">Collectine</td>
                    <td className="p-2.5 font-semibold">MBL (Mannose-Binding Lectin), SP-A, SP-D</td>
                    <td className="p-2.5">MBL: fegato (circolante). SP-A / SP-D: <strong>pneumociti di tipo II</strong> e cellule di Clara nell'epitelio alveolare</td>
                    <td className="p-2.5">MBL: mannosio e fucosio terminali. SP-A/D: lipidi e glucani microbici capsulari nell'albero polmonare</td>
                    <td className="p-2.5 font-medium text-emerald-700 dark:text-emerald-400">MBL attiva le serina-proteasi <strong>MASP-1 e MASP-2</strong> innescando la <strong>via lectinica del complemento</strong> (clivaggio C4 e C2); SP-A/D agglutinano i patogeni respiratori favorendo la clearance alveolare</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-850">
                    <td className="p-2.5 font-bold font-mono text-amber-600 dark:text-amber-400">Ficoline</td>
                    <td className="p-2.5 font-semibold">L-Ficolina, M-Ficolina, H-Ficolina</td>
                    <td className="p-2.5">Fegato (L- e H-ficolina nel siero) e monociti/macrofagi polmonari (M-ficolina)</td>
                    <td className="p-2.5">N-acetilglucosamina (GlcNAc), N-acetilgalactosamina e acidi lipoteicoici batterici</td>
                    <td className="p-2.5">Struttura oligomerica con domini fibrinogeno-simili: attivano MASP-1/2 e la via lectinica del complemento in modo identico a MBL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* PONTE NARRATIVO DI RACCORDO */}
        <div className="bg-emerald-50 dark:bg-emerald-950/40 border-l-4 border-emerald-500 p-4 rounded-r-xl not-prose space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300 uppercase">
            <ArrowRight className="w-4 h-4" />
            <span>Ponte Fisiologico di Transizione</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed">
            La trascrizione di citochine primarie indotta da NF-κB fornisce alla cellula sentinella i trascritti dei precursori 
            inattivi pro-IL-1β e pro-IL-18. Tuttavia, queste citochine sono biologiche "armi a doppio taglio" e non possono essere 
            secrete finché non vengono processate enzimaticamente da una macchina molecolare specializzata: 
            l'<strong>Inflammasoma NLRP3</strong>, analizzato di seguito.
          </p>
        </div>
      </article>

      {/* ========================================================================================= */}
      {/* SEZIONE 1.2: L'INNESTO DELL'INFIAMMAZIONE: INFLAMMASOMA NLRP3, CASPASI-1 E PIROPTOSI */}
      {/* ========================================================================================= */}
      <article
        id="sec-1-inflammasoma"
        className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 lg:p-9 shadow-xs space-y-6 w-full"
      >
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-700 dark:text-orange-400 uppercase tracking-wider">
            <Flame className="w-4 h-4" />
            <span>Sezione 1.2 · Biologia dell'Infiammazione Acuta</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
            L'Innesco dell'Infiammazione: Inflammasoma NLRP3, Caspasi-1 e la Piroptosi Mediata da Gasdermina D
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Il paradigma a due segnali, la maturazione non convenzionale di IL-1β/IL-18 e la lisi cellulare pro-infiammatoria.
          </p>
        </div>

        <div className={`text-slate-800 dark:text-slate-200 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            L'inflammasoma è un complesso multiproteico citosolico ad altissimo peso molecolare che funge da piattaforma catalitica 
            per l'attivazione della <strong>Caspasi-1</strong> (precedentemente nota come ICE, Interleukin-1β Converting Enzyme). 
            Tra le diverse varianti (NLRP1, NLRC4, AIM2), l'inflammasoma <strong>NLRP3</strong> è il più rilevante in medicina clinica, 
            poiché integra stimoli flogistici e metabolici estremamente eterogenei.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 pt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            Il Modello a Due Segnali dell'Attivazione di NLRP3
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-3">
            <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 space-y-2">
              <span className="text-xs font-mono font-bold text-amber-800 dark:text-amber-300 uppercase block">
                Segnale 1: Priming ("Licensing")
              </span>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                Trascrizione genica mediata da NF-κB
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                In condizioni basali, i livelli citosolici di NLRP3 e di pro-IL-1β sono inadeguati per sostenere l'assemblaggio. 
                L'attivazione di TLR4 (via LPS) o del recettore per il TNF (TNFR) attiva NF-κB, determinando:
              </p>
              <ul className="text-xs text-slate-700 dark:text-slate-300 list-disc pl-4 space-y-1">
                <li>Upregulation trascrizionale del gene <em>NLRP3</em> e dei geni codificanti <strong>pro-IL-1β</strong> (31 kDa) e <strong>pro-IL-18</strong>.</li>
                <li>Modificazioni post-traduzionali cruciali (deubiquitinazione di NLRP3 da parte di BRCC36 e fosforilazione).</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-red-200 dark:border-red-900/60 bg-red-50/40 dark:bg-red-950/20 space-y-2">
              <span className="text-xs font-mono font-bold text-red-800 dark:text-red-300 uppercase block">
                Segnale 2: Attivazione Molecolare
              </span>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                Stress ionico, lisosomiale o mitocondriale
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Stimoli multipli provocano una transizione conformazionale di NLRP3 con idrolisi di ATP:
              </p>
              <ul className="text-xs text-slate-700 dark:text-slate-300 list-disc pl-4 space-y-1">
                <li><strong>Efflusso citosolico di K⁺:</strong> innescato da ATP extracellulare che lega il canale ionico <strong>P2X7</strong>, o da tossine batteriche poriformi (nigericina).</li>
                <li><strong>Danno lisosomiale:</strong> fagocitosi frustrata di cristalli insolubili (urato monosodico nella gotta, colesterolo, silice, asbesto) con rilascio citosolico di catepsina B.</li>
                <li><strong>ROS mitocondriali:</strong> rilascio di DNA mitocondriale ossidato e cardiolipina.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 pt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            La Piroptosi e i Pori di Gasdermina D (GSDMD)
          </h3>

          <p>
            Una volta assemblato l'anello oligomerico di NLRP3 con la proteina adattatrice <strong>ASC</strong>, i domini CARD di ASC 
            reclutano la <strong>pro-caspasi-1</strong>. La concentrazione forzata delle pro-caspasi induce il loro clivaggio autocatalitico 
            in caspasi-1 attiva (eterotetramero p20/p10):
          </p>

          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Maturazione Citochinica:</strong> la caspasi-1 opera il clivaggio proteolitico di pro-IL-1β (31 kDa) generando 
              <strong> IL-1β matura</strong> (17 kDa) biologicamente attiva, e di pro-IL-18 in <strong>IL-18 matura</strong>. Entrambe 
              queste citochine sono prive della sequenza leader idrofobica per la secrezione classica attraverso il reticolo/Golgi.
            </li>
            <li>
              <strong>Clivaggio di Gasdermina D:</strong> la caspasi-1 cliva la proteina <strong>Gasdermina D (GSDMD)</strong> a livello 
              del residuo Asp275, liberando il dominio effettore N-terminale (<strong>GSDMD-N</strong>, 31 kDa) dal dominio autoinibitorio C-terminale.
            </li>
            <li>
              <strong>Oligomerizzazione e Pori di Membrana:</strong> da 16 a 24 monomeri di GSDMD-N oligomerizzano e si inseriscono 
              selettivamente nei foglietti interni della membrana plasmatica cellulare (grazie all'affinità per fosfatidilinositolo 4,5-bisfosfato 
              e cardiolipina), aprendo grandi pori transmembrana idrofili con un diametro interno di <strong>10-14 nanometri</strong>.
            </li>
            <li>
              <strong>Lisi Osmotica Piroptotica:</strong> attraverso i pori di GSDMD vengono esternalizzate massivamente nel microambiente 
              le citochine mature IL-1β e IL-18. Contemporaneamente, l'ingresso massivo di acqua e sodio per gradiente osmotico 
              determina il rigonfiamento cellulare idropico (ballooning), la rottura netta della membrana plasmatica cellulare 
              (<strong>piroptosi</strong>) e la dispersione esplosiva di DAMPs nel tessuto circostante, amplificando l'infiammazione.
            </li>
          </ol>
        </div>

        {/* SIMULATORE INTERATTIVO INCASTONATO */}
        <div className="not-prose pt-2">
          <div className="mb-2 flex items-center justify-between text-xs font-mono text-slate-500">
            <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-orange-600" />
              Laboratorio Dinamico: Piroptosi, Caspasi-1 e Pori di Gasdermina D
            </span>
            <span className="text-orange-600 dark:text-orange-400 font-semibold">Simulatore Interattivo</span>
          </div>
          <InteractiveInflammasomeSimulator />
        </div>

        {/* CORRELAZIONE CLINICA: CAPS E BIOLOGICI ANTI-IL-1 */}
        <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20 not-prose space-y-2">
          <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase text-amber-800 dark:text-amber-300">
            <Stethoscope className="w-4 h-4 text-amber-600" />
            <span>Correlazione Clinica: Sindromi Autoinfiammatorie Periodiche (CAPS) & Terapie Mirate</span>
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            Mutazioni autosomiche dominanti con guadagno di funzione (gain-of-function) nel dominio NACHT del gene <em>NLRP3</em> 
            causano le <strong>CAPS (Cryopyrin-Associated Periodic Syndromes)</strong>: dalla Sindrome Autoinfiammatoria Familiare da Freddo 
            (FCAS), alla Sindrome di Muckle-Wells (MWS) fino alla devastante patologia neonatale CINCA/NOMID. In queste condizioni, 
            l'inflammasoma si assembla spontaneamente anche in assenza di PAMP/DAMP. 
            Il trattamento d'elezione si avvale degli inibitori biologici della via di IL-1:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-[11px] font-mono">
            <span className="bg-white dark:bg-slate-900 p-2 rounded border border-amber-200 dark:border-amber-800 text-slate-800 dark:text-slate-200">
              <strong>Anakinra:</strong> antagonista ricombinante del recettore di IL-1 (IL-1Ra).
            </span>
            <span className="bg-white dark:bg-slate-900 p-2 rounded border border-amber-200 dark:border-amber-800 text-slate-800 dark:text-slate-200">
              <strong>Canakinumab:</strong> anticorpo monoclonale umanizzato anti-IL-1β a lunga emivita.
            </span>
            <span className="bg-white dark:bg-slate-900 p-2 rounded border border-amber-200 dark:border-amber-800 text-slate-800 dark:text-slate-200">
              <strong>Rilonacept:</strong> proteina di fusione solubile recettoriale decoy "IL-1 trap".
            </span>
          </div>
        </div>

        {/* PONTE NARRATIVO DI RACCORDO */}
        <div className="bg-orange-50 dark:bg-orange-950/40 border-l-4 border-orange-500 p-4 rounded-r-xl not-prose space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-800 dark:text-orange-300 uppercase">
            <ArrowRight className="w-4 h-4" />
            <span>Ponte Fisiologico di Transizione</span>
          </div>
          <p className="text-xs sm:text-sm text-orange-900 dark:text-orange-200 leading-relaxed">
            L'IL-1β e il TNF-α riversati nell'interstizio dai macrofagi attivati diffondono verso i vasi sanguigni adiacenti. 
            Colpendo le cellule endoteliali delle venule post-capillari, attivano l'espressione di molecole d'adesione e chemochine, 
            orchestrando la potente cascata del <strong>reclutamento leucocitario e dello stravaso ematico</strong>, descritto di seguito.
          </p>
        </div>
      </article>

      {/* ========================================================================================= */}
      {/* SEZIONE 1.3: IL RECLUTAMENTO LEUCOCITARIO: CASCATA DI ADESIONE ENDOTELIALE E DIAPEDESI */}
      {/* ========================================================================================= */}
      <article
        id="sec-1-stravaso"
        className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 lg:p-9 shadow-xs space-y-6 w-full"
      >
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
            <Activity className="w-4 h-4" />
            <span>Sezione 1.3 · Emodinamica & Migrazione Cellulare</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
            Il Reclutamento Leucocitario: Cascata di Adesione Endoteliale e Diapedesi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Dalle forze di taglio ematiche al legame integrinico ad alta affinità e alla transmigrazione trans-endoteliale.
          </p>
        </div>

        <div className={`text-slate-800 dark:text-slate-200 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            In condizioni fisiologiche, i leucociti viaggiano al centro del flusso ematico laminare ad alta velocità (fino a 1-2 mm/secondo). 
            Durante la flogosi acuta, le modificazioni emodinamiche (vasodilatazione arteriolare indotta da istamina e NO, seguita da stasi ematica 
            e incremento della permeabilità post-capillare) spingono i leucociti verso la periferia del vaso (<strong>marginazione</strong>), 
            consentendo il contatto diretto con l'endotelio attivato.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 pt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Le 4 Tappe Sequenziali della Cascata di Adesione
          </h3>

          <div className="space-y-3 not-prose my-3">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-start gap-3">
              <span className="shrink-0 w-7 h-7 rounded-lg bg-emerald-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                1
              </span>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                  Rolling (Rotolamento Mediato da Selectine)
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  L'endotelio infiammato espone <strong>P-selectina</strong> (rapidamente esternalizzata dai corpi intracellulari di Weibel-Palade 
                  entro 10-15 minuti sotto stimolo di istamina o trombina) ed <strong>E-selectina</strong> (sintetizzata de novo in 2-4 ore sotto 
                  stimolo di TNF-α e IL-1). Le selectine legano i carboidrati fucosilati come il tetrasaccaride <strong>sialil-Lewis X (sLe^X)</strong> 
                  presente sulla proteina <strong>PSGL-1</strong> dei leucociti. I legami hanno cinetica rapida di associazione/dissociazione 
                  ("catch bonds"), permettendo al neutrofilo di rotolare sul vaso e rallentare la velocità da mm/s a μm/s.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-start gap-3">
              <span className="shrink-0 w-7 h-7 rounded-lg bg-emerald-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                2
              </span>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                  Attivazione Chemochinica & Segnalazione "Inside-Out"
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Le chemochine infiammatorie (come <strong>CXCL8 / IL-8</strong> per i neutrofili o <strong>CCL2 / MCP-1</strong> per i monociti) 
                  sono immobilizzate sulla superficie luminale dell'endotelio legate ai glicosaminoglicani (eparan-solfato). Il leucocita rotolante 
                  le riconosce mediante recettori a 7 eliche transmembrana associati a proteine G (GPCR: <strong>CXCR1/CXCR2</strong>). La cascata 
                  trasduzionale intracellulare attiva le piccole GTPasi (Rap1) e le proteine di ancoraggio citoscheletrico (<strong>talina</strong> 
                  e <strong>kindlina-3</strong>), innescando il segnale <em>inside-out</em> sulle code citoplasmatiche delle integrine.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-start gap-3">
              <span className="shrink-0 w-7 h-7 rounded-lg bg-emerald-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                3
              </span>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                  Adesione Stabile & Arresto Fermo (Integrine β2 & ICAM-1)
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  A seguito del segnale inside-out, le integrine leucocitarie β2 (eterodimeri con catena β comune CD18): 
                  <strong>LFA-1</strong> (αLβ2 / CD11a-CD18) e <strong>Mac-1</strong> (αMβ2 / CD11b-CD18) subiscono una repentina estensione 
                  conformazionale dallo stato piegato a bassa affinità allo stato eretto ad altissima affinità. Le teste integriniche 
                  si ancorano tenacemente ai domini Ig-like delle molecole <strong>ICAM-1 (CD54)</strong> e <strong>ICAM-2</strong> espresse 
                  dall'endotelio. L'adesione supera la forza di trascinamento ematico, arrestando completamente la cellula (firm adhesion).
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-start gap-3">
              <span className="shrink-0 w-7 h-7 rounded-lg bg-emerald-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                4
              </span>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                  Diapedesi & Transmigrazione Tissutale
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Il leucocita appiattito scivola attraverso le giunzioni endoteliali intercellulari (via paracellulare, mediata da 
                  interazioni omofiliche di <strong>PECAM-1 / CD31</strong> e <strong>CD99</strong>, con dissoluzione reversibile dei complessi 
                  VE-caderina) o attraversa il corpo della cellula endoteliale (via transcellulare). Giunto a contatto con la membrana basale 
                  vascolare, il neutrofilo rilascia gelatinasi (MMP-9) ed elastasi per digerire collagene e laminina, migrando nell'interstizio 
                  guidato dal gradiente chemiotattico (CXCL8, C5a, LTB4, peptidi batterici formilati fMLP).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SIMULATORE INTERATTIVO INCASTONATO */}
        <div className="not-prose pt-2">
          <div className="mb-2 flex items-center justify-between text-xs font-mono text-slate-500">
            <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-emerald-600" />
              Laboratorio Dinamico: Stravaso Leucocitario & Forze Emodinamiche
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Simulatore Interattivo</span>
          </div>
          <InteractiveExtravasationSimulator />
        </div>

        {/* CORRELAZIONE CLINICA: LAD-1 E LAD-2 */}
        <div className="p-4 rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-950/20 not-prose space-y-2">
          <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase text-red-800 dark:text-red-300">
            <Stethoscope className="w-4 h-4 text-red-600" />
            <span>Correlazione Clinica: Deficit di Adesione Leucocitaria (LAD-1 e LAD-2)</span>
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            I difetti genetici della cascata di adesione evidenziano l'indispensabilità clinica di ciascuna tappa:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
            <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-red-200 dark:border-red-800/60">
              <span className="font-bold text-red-700 dark:text-red-400 font-mono block">LAD-1 (Leukocyte Adhesion Deficiency-1):</span>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Mutazione autosomica recessiva del gene <em>ITGB2</em> che codifica per la catena <strong>β2 (CD18)</strong> delle integrine. 
                I neutrofili non riescono ad ancorarsi ad ICAM-1. <strong>Segni patognomonici:</strong> ritardata caduta del cordone ombelicale 
                (&gt;30 giorni con onfalite necrotica), infezioni batteriche cutaneo-mucosali ricorrenti prive di pus (assenza di neutrofili 
                nel tessuto lesionato) e marcata <strong>leucocitosi neutrofila periferica persistente</strong> (&gt;50.000-100.000/μL) dovuta 
                all'impossibilità dei neutrofili di abbandonare il letto vascolare.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-red-200 dark:border-red-800/60">
              <span className="font-bold text-red-700 dark:text-red-400 font-mono block">LAD-2 (Leukocyte Adhesion Deficiency-2):</span>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Mutazione recessiva del trasportatore del GDP-fucosio nel Golgi (gene <em>SLC35C1</em>). Causa assenza congenita 
                del ligando <strong>sialil-Lewis X</strong> sui leucociti. Il rolling sulle selectine è completamente inibito. 
                Si associa a deficit immunitario moderato, fenotipo eritrocitario Bombay (assenza di antigene H) e grave ritardo psicomotorio e staturale.
              </p>
            </div>
          </div>
        </div>

        {/* PONTE NARRATIVO DI RACCORDO */}
        <div className="bg-emerald-50 dark:bg-emerald-950/40 border-l-4 border-emerald-500 p-4 rounded-r-xl not-prose space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300 uppercase">
            <ArrowRight className="w-4 h-4" />
            <span>Ponte Fisiologico di Transizione</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed">
            Una volta completata la diapedesi, i neutrofili e i monociti infiltrano in massa il connettivo extravascolare infetto. 
            Qui si scatena l'arsenale antimicrobico più potente dell'ospite: la fagocitosi, l'attivazione del 
            <strong> complesso NADPH ossidasi (NOX2)</strong> con la cascata dei ROS e il sacrificio estremo della <strong>NETosi</strong>, 
            trattati dettagliatamente nel paragrafo 1.4.
          </p>
        </div>
      </article>

      {/* ========================================================================================= */}
      {/* SEZIONE 1.4: GLI EFFETTORI MIELOIDI DI PRIMA LINEA: FAGOCITOSI, NOX2 E NETOSI */}
      {/* ========================================================================================= */}
      <article
        id="sec-1-effettori"
        className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 lg:p-9 shadow-xs space-y-6 w-full"
      >
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-700 dark:text-red-400 uppercase tracking-wider">
            <Target className="w-4 h-4" />
            <span>Sezione 1.4 · Effettori Mieloidi & Burst Ossidativo</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
            Gli Effettori Mieloidi di Prima Linea: Granulociti Neutrofili, Complesso NOX2 e Meccanismi di NETosi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            La biochimica del burst respiratorio, la genesi dell'acido ipocloroso, la decondensazione della cromatina da PAD4 e la clinica della CGD.
          </p>
        </div>

        <div className={`text-slate-800 dark:text-slate-200 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            I <strong>granulociti neutrofili</strong> costituiscono il 50-70% dei leucociti circolanti nel sangue periferico adulto 
            (valori di riferimento: 1.500 - 7.000/μL). Vengono prodotti nel midollo osseo a una velocità prodigiosa 
            (circa <strong>10¹¹ cellule al giorno</strong>, stimolata dal fattore di crescita ematopoietico <strong>G-CSF</strong>), 
            possiedono un'emivita ematica breve (6-8 ore) e muoiono tipicamente per apoptosi dopo 1-2 giorni nei tessuti extravascolari, 
            costituendo la componente cellulare predominante del pus.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 pt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            I Quattro Compartimenti Granulari del Neutrofilo
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 not-prose my-3 text-xs">
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
              <span className="font-bold font-mono text-purple-600 dark:text-purple-400 block">1. Granuli Primari (Azzurrofili)</span>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                <strong>Mieloperossidasi (MPO)</strong>, elastasi neutrofila (NE), catepsina G, lisozima, proteina BPI (bactericidal permeability increasing) e α-defensine (HNP1-4).
              </p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
              <span className="font-bold font-mono text-blue-600 dark:text-blue-400 block">2. Granuli Secondari (Specifici)</span>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                <strong>Lattoferrina</strong> (chelante del ferro Fe³⁺), collagenasi (MMP-8), transcobalamina I e subunità di membrana del citocromo b558 (gp91phox e p22phox).
              </p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
              <span className="font-bold font-mono text-amber-600 dark:text-amber-400 block">3. Granuli Terziari (Gelatinasi)</span>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                <strong>Gelatinasi (MMP-9)</strong> e lisozima; mobilizzati precocemente per la digestione proteolitica della matrice vascolare durante la diapedesi.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
              <span className="font-bold font-mono text-emerald-600 dark:text-emerald-400 block">4. Vescicole Secretorie</span>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Pool di riserva preformato contenente molecole d'adesione transmembrana (integrine β2, recettori fMLP, CD14 e recettori Fc) esocitati al primo stimolo.
              </p>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 pt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            Il Complesso NADPH Ossidasi (NOX2) e la Cascata dei ROS
          </h3>

          <p>
            Durante la fagocitosi, il consumo cellulare di ossigeno da parte del neutrofilo aumenta vertiginosamente fino a 100 volte 
            (<strong>burst respiratorio</strong> o esplosione respiratoria). Questo fenomeno non è destinato alla fosforilazione ossidativa 
            mitocondriale per generare ATP, ma alimenta il complesso enzimatico multimerico <strong>NADPH Ossidasi fagocitaria (NOX2)</strong>:
          </p>

          <div className="p-4 rounded-xl border border-red-200 dark:border-red-900/60 bg-red-50/40 dark:bg-red-950/20 not-prose space-y-2">
            <h4 className="font-bold text-red-900 dark:text-red-200 text-sm font-mono">
              Architettura Molecolare & Meccanismo di Attivazione
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              A riposo, il complesso è fisicamente dissociato in due compartimenti per prevenire un danno ossidativo autogeno:
            </p>
            <ul className="text-xs text-slate-700 dark:text-slate-300 list-disc pl-4 space-y-1">
              <li><strong>Eterodimero di membrana (Citocromo b558):</strong> ancorato alla membrana plasmatica e dei granuli specifici, composto dalla subunità catalitica maggiore <strong>gp91phox</strong> (glicoproteina di 91 kDa con centri eme e siti di legame per FAD e NADPH) e dalla subunità stabilizzante <strong>p22phox</strong>.</li>
              <li><strong>Complesso regolatorio citosolico:</strong> formato dalle proteine citosoliche <strong>p47phox</strong> (l'organizzatore), <strong>p67phox</strong> (l'attivatore catalitico) e <strong>p40phox</strong>, accoppiate alla piccola GTPasi <strong>Rac2</strong> legata a GDP.</li>
            </ul>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
              All'atto della fagocitosi, la Protein Kinasi C (PKC) fosforila multipli residui di serina su <strong>p47phox</strong>, 
              smascherando i suoi domini SH3. Il complesso citosolico subisce una drammatica traslocazione di massa verso la membrana del fagosoma, 
              innestandosi su gp91phox/p22phox simultaneamente allo scambio di GDP con GTP su Rac2. Il complesso NOX2 diviene cataliticamente attivo.
            </p>
          </div>

          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 pt-2 font-mono uppercase text-red-700 dark:text-red-400">
            Le Reazioni Chimiche del Burst Ossidativo
          </h4>

          <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs space-y-2 not-prose">
            <div className="flex items-center justify-between pb-1 border-b border-slate-800 text-slate-400 text-[11px]">
              <span>Tappa di Reazione</span>
              <span>Enzima Catalizzatore</span>
            </div>
            <div>
              <p className="text-amber-300 font-bold">1. NADPH + 2 O₂ → NADP⁺ + H⁺ + 2 O₂•⁻</p>
              <p className="text-slate-400 text-[11px]">NOX2 trasferisce due elettroni dal NADPH citosolico all'O₂ luminale fagosomiale, producendo l'<strong>anione superossido</strong>.</p>
            </div>
            <div>
              <p className="text-blue-300 font-bold">2. 2 O₂•⁻ + 2 H⁺ → H₂O₂ + O₂</p>
              <p className="text-slate-400 text-[11px]">La <strong>Superossido Dismutasi (SOD)</strong> dismuta il superossido in <strong>perossido d'idrogeno</strong> (acqua ossigenata).</p>
            </div>
            <div>
              <p className="text-emerald-300 font-bold">3. H₂O₂ + Cl⁻ + H⁺ → HOCl + H₂O</p>
              <p className="text-slate-400 text-[11px]">La <strong>Mieloperossidasi (MPO)</strong> (dai granuli azzurrofili) alogenizza l'H₂O₂ con ioni cloro, generando il potentissimo <strong>acido ipocloroso (HOCl)</strong>.</p>
            </div>
            <div>
              <p className="text-purple-300 font-bold">4. Reazione di Haber-Weiss / Fenton: Fe²⁺ + H₂O₂ → Fe³⁺ + •OH + OH⁻</p>
              <p className="text-slate-400 text-[11px]">Generazione del <strong>radicale idrossile (•OH)</strong>, il più potente e distruttivo agente ossidante biologico esistente.</p>
            </div>
          </div>
        </div>

        {/* SIMULATORE INTERATTIVO NOX2 ROS */}
        <div className="not-prose pt-2">
          <div className="mb-2 flex items-center justify-between text-xs font-mono text-slate-500">
            <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-red-600" />
              Laboratorio Dinamico: Il Complesso NADPH Ossidasi & la Cascata dei ROS
            </span>
            <span className="text-red-600 dark:text-red-400 font-semibold">Simulatore Interattivo</span>
          </div>
          <InteractiveRosSimulator />
        </div>

        {/* NETosi E PAD4 */}
        <div className={`text-slate-800 dark:text-slate-200 space-y-3 pt-3 ${proseFontClass} ${proseSizeClass}`}>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            La NETosi: Genesi ed Estrusione delle Neutrophil Extracellular Traps
          </h3>
          <p>
            Scoperta da Brinkmann e Zychlinsky nel 2004, la <strong>NETosi</strong> è una peculiare forma di morte cellulare programmata, 
            distinta da apoptosi e necrosi, mediante la quale il neutrofilo proietta all'esterno la propria cromatina nucleare decondensata, 
            creando reti tridimensionali extracellulari ad alta densità microbicida (NETs):
          </p>

          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Attivazione e Generazione di ROS:</strong> stimoli massivi (LPS, complessi immuni, cristalli) attivano PKC e la via 
              Raf-MEK-ERK, stimolando la produzione di ROS da parte di NOX2.
            </li>
            <li>
              <strong>Migrazione Enzimatica Nucleare:</strong> i ROS provocano la permeabilizzazione delle membrane granulari: 
              l'<strong>elastasi neutrofila (NE)</strong> e la <strong>MPO</strong> traslocano dai granuli azzurrofili all'interno del nucleo. 
              L'elastasi digerisce parzialmente gli istoni e la lamina nucleare.
            </li>
            <li>
              <strong>Citrullinazione Istonica Mediata da PAD4:</strong> l'enzima citosolico <strong>Peptidilarginina Deiminasi 4 (PAD4)</strong> 
              (strettamente dipendente da massicci flussi di Ca²⁺ intracellulari) trasloca nel nucleo e converte i residui carichi positivamente 
              di arginina presenti sugli <strong>istoni H3 e H4</strong> in <strong>citrullina neutra</strong>. La perdita delle cariche 
              positive abolisce l'attrazione elettrostatica tra gli istoni e lo scheletro fosfodiesterico (carico negativamente) del DNA, 
              determinando un'iperdecondensazione massiva della cromatina nucleare.
            </li>
            <li>
              <strong>Estrusione Extracellulare del Reticolo:</strong> la cromatina decondensata si fonde con le proteine microbicide 
              dei granuli e del citoplasma (MPO, elastasi, catepsina G, lattoferrina, calprotectina). La membrana nucleare e quella plasmatica 
              si rompono, estrudendo le NETs nell'interstizio. Il reticolo intrappola meccanicamente batteri e funghi, concentrando 
              localmente gli enzimi litici e impedendone la disseminazione ematica.
            </li>
          </ol>
        </div>

        {/* SIMULATORE INTERATTIVO NETOSI */}
        <div className="not-prose pt-2">
          <div className="mb-2 flex items-center justify-between text-xs font-mono text-slate-500">
            <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-red-600" />
              Laboratorio Dinamico: Cinetica Molecolare della NETosi & PAD4
            </span>
            <span className="text-red-600 dark:text-red-400 font-semibold">Simulatore Interattivo</span>
          </div>
          <InteractiveNetosisSimulator />
        </div>

        {/* CORRELAZIONE CLINICA: CGD E MALATTIE DA NETS */}
        <div className="p-4 rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-950/20 not-prose space-y-2">
          <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase text-red-800 dark:text-red-300">
            <Stethoscope className="w-4 h-4 text-red-600" />
            <span>Correlazione Clinica: Malattia Granulomatosa Cronica (CGD) & Trombopatologia da NETs</span>
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            La <strong>Malattia Granulomatosa Cronica (CGD)</strong> è un'immunodeficienza congenita primaria dovuta nell'85% dei casi 
            a mutazioni recessive legate all'X nel gene <em>CYBB</em> (che codifica per gp91phox), o in forme autosomiche recessive 
            (mutazioni in <em>NCF1</em>/p47phox o <em>CYBA</em>/p22phox). I neutrofili fagocitano normalmente i microrganismi ma non possono 
            generare O₂•⁻ né HOCl.
          </p>
          <ul className="text-xs text-slate-700 dark:text-slate-300 list-disc pl-4 space-y-1">
            <li><strong>Suscettibilità selettiva a batteri e funghi catalasi-positivi:</strong> <em>Staphylococcus aureus</em>, <em>Aspergillus</em>, <em>Serratia marcescens</em>, <em>Burkholderia cepacia</em> e <em>Nocardia</em>. Questi microbi degradano l'H₂O₂ autoprodotta mediante la propria catalasi, impedendo al fagosoma di utilizzarla per formare HOCl.</li>
            <li><strong>Formazione di granulomi infiammatori cronici:</strong> l'impossibilità di eliminare il microrganismo scatena un reclutamento continuo e frustrato di macrofagi e linfociti con ostruzioni viscerali gastrointestinali ed urogenitali.</li>
            <li><strong>Diagnostica:</strong> test quantitativo di ossidazione della <strong>Diidrorodamina 123 (DHR)</strong> mediante citofluorimetria a flusso (inattivato nella CGD) o test al Nitroblu di Tetrazolio (NBT).</li>
            <li><strong>NETs e Autoimmunità:</strong> l'eccesso patologico di NETs fungendo da scaffold per piastrine e fattore XII induce immunotrombosi (ARDS, sepsi) ed espone antigeni intracellulari (dsDNA, istoni citrullinati, MPO) innescando anticorpi anti-DNA nel Lupus (LES) e ANCA nelle vasculiti.</li>
          </ul>
        </div>

        {/* PONTE NARRATIVO DI RACCORDO */}
        <div className="bg-red-50 dark:bg-red-950/40 border-l-4 border-red-500 p-4 rounded-r-xl not-prose space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-800 dark:text-red-300 uppercase">
            <ArrowRight className="w-4 h-4" />
            <span>Ponte Fisiologico di Transizione</span>
          </div>
          <p className="text-xs sm:text-sm text-red-900 dark:text-red-200 leading-relaxed">
            Se il burst ossidativo e la NETosi dei neutrofili dominano la battaglia contro i batteri piogeni e i funghi extracellulari, 
            essi sono inefficaci contro i patogeni virali a localizzazione intracellulare. Per fronteggiare l'invasione virale, 
            l'ospite aziona il sofisticato sistema biochimico degli <strong>Interferoni di Tipo I (IFN-α/β)</strong> e lo stato antivirale, 
            analizzati nel paragrafo 1.5.
          </p>
        </div>
      </article>

      {/* ========================================================================================= */}
      {/* SEZIONE 1.5: LA DIFESA ANTIVIRALE CELLULO-MEDIATA: INTERFERONI DI TIPO I E STATO ANTIVIRALE */}
      {/* ========================================================================================= */}
      <article
        id="sec-1-antivirale"
        className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 lg:p-9 shadow-xs space-y-6 w-full"
      >
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
            <Dna className="w-4 h-4" />
            <span>Sezione 1.5 · Risposta Antivirale Innata</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
            La Difesa Antivirale Cellulo-Mediata: Interferoni di Tipo I e lo Stato Antivirale ISG
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Segnalazione autocrina/paracrina via IFNAR, cascata JAK-STAT/ISGF3 ed enzimi effettori intracellulari (PKR, 2'-5'-OAS/RNasi L, Mx).
          </p>
        </div>

        <div className={`text-slate-800 dark:text-slate-200 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Gli <strong>Interferoni di Tipo I</strong> comprendono 13 sottotipi molecolari di <strong>IFN-α</strong> e un singolo 
            <strong> IFN-β</strong>. Possono essere prodotti virtualmente da tutte le cellule nucleate in risposta all'ingaggio 
            di TLR endosomiali (TLR3, TLR7/8, TLR9) e sensori citosolici (RIG-I, MDA5, cGAS-STING). Tuttavia, le più formidabili produttrici 
            sistemiche sono le <strong>cellule dendritiche plasmacitoidi (pDC)</strong>, che esprimono costitutivamente alti livelli di TLR7 e TLR9 
            accoppiati al fattore di trascrizione <strong>IRF7</strong> già pre-assemblato nel citoplasma, secernendo quantità massive 
            di IFN-I entro pochissime ore dall'esposizione virale.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 pt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            La Cascata di Trasduzione IFNAR e il Trimero ISGF3
          </h3>

          <p>
            Tutti gli IFN di tipo I agiscono legando un recettore eterodimerico comune di superficie, <strong>IFNAR</strong>, composto dalle 
            due catene <strong>IFNAR1</strong> e <strong>IFNAR2</strong>. La trasduzione segue la classica via JAK-STAT:
          </p>

          <ol className="list-decimal pl-5 space-y-1.5">
            <li>
              Il legame citochinico avvicina le subunità recettoriali inducendo l'autofosforilazione crociata delle tirosina-chinasi 
              associate: <strong>JAK1</strong> (su IFNAR2) e <strong>Tyk2</strong> (su IFNAR1).
            </li>
            <li>
              Le chinasi fosforilano specifici residui tirosinici sulle code del recettore, creando siti di attracco per i domini SH2 dei fattori 
              <strong> STAT1</strong> e <strong>STAT2</strong>.
            </li>
            <li>
              STAT1 e STAT2 vengono fosforilati (Tyr701 su STAT1, Tyr690 su STAT2), si staccano dal recettore ed eterodimerizzano.
            </li>
            <li>
              L'eterodimero STAT1/STAT2 recluta nel citosol la proteina a dita di zinco <strong>IRF9</strong>, formando il trimero 
              <strong> ISGF3 (Interferon-Stimulated Gene Factor 3)</strong>.
            </li>
            <li>
              ISGF3 trasloca nel nucleo e si lega con altissima specificità alle sequenze promotoriali <strong>ISRE (Interferon-Stimulated Response Elements)</strong>, 
              attivando la trascrizione sincronizzata di oltre 300 geni stimolati da interferone (<strong>ISG</strong>).
            </li>
          </ol>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 pt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            I Quattro Grandi Sistemi Enzimatici Effettori dello Stato Antivirale
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-3">
            <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20 space-y-2">
              <span className="text-xs font-mono font-bold text-indigo-800 dark:text-indigo-300 uppercase block">
                1. Asse PKR (Protein Kinase R)
              </span>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                Blocco Totale della Sintesi Proteica
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Espressa basalmente come monomero inattivo, PKR si lega a molecole di dsRNA virale lungo (&gt;30 bp) omodimerizzando e autofosforilandosi. 
                PKR attiva fosforila la subunità alfa del fattore eucariotico di inizio della traduzione <strong>eIF2α</strong> (sul residuo Ser51). 
                La fosforilazione sequestra irreversibilmente il fattore di scambio nucleotidico eIF2B, <strong>arrestando all'istante la traduzione 
                ribosomiale sia dei messaggeri virali che di quelli cellulari</strong>. La cellula infettata sacrifica la propria sintesi proteica 
                per impedire la produzione dei capsidi virali.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20 space-y-2">
              <span className="text-xs font-mono font-bold text-indigo-800 dark:text-indigo-300 uppercase block">
                2. Asse 2'-5'-OAS e RNasi L
              </span>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                Degradazione Catalitica degli RNA Virali
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                L'enzima <strong>2'-5'-OAS (Oligoadenilato Sintetasi)</strong> sintetizzato via ISRE e attivato da dsRNA polimerizza ATP 
                generando oligonucleotidi atipici uniti da legami fosfodiesterici 2'-5': <strong>pppA(2'p5'A)n (2-5A)</strong>. 
                Questi oligomeri fungono da secondi messaggeri allosterici legando l'endonucleasi latente <strong>RNasi L</strong>. 
                La dimerizzazione attiva RNasi L, che <strong>degrada indiscriminatamente tutti gli RNA a singolo filamento cellulari e virali</strong> 
                (mRNA e rRNA 28S/18S), bloccando l'infezione e generando frammenti di RNA corti che fungono da ligandi addizionali per RIG-I e MDA5.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20 space-y-2">
              <span className="text-xs font-mono font-bold text-indigo-800 dark:text-indigo-300 uppercase block">
                3. Grandi GTPasi Mx (MxA e MxB)
              </span>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                Sequestro Meccanico dei Complessi Virali
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Le proteine <strong>MxA</strong> e <strong>MxB</strong> sono GTPasi dinamina-simili indotte fortemente dagli IFN-I. 
                MxA forma anelli polimerici ad alto peso molecolare attorno ai complessi ribonucleoproteici virali nel citoplasma (es. virus 
                influenzali, coronavirus, rhabdovirus), immobilizzandoli e impedendone la traslocazione nucleare o l'assemblaggio. 
                MxB blocca selettivamente l'uncoating del capside di HIV-1 impedendone l'ingresso nucleare.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20 space-y-2">
              <span className="text-xs font-mono font-bold text-indigo-800 dark:text-indigo-300 uppercase block">
                4. Proteina ISG15 (ISGilazione)
              </span>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                Modificazione Coniugativa Simil-Ubiquitina
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Piccola proteina contenente due domini simil-ubiquitina. Viene legata covalentemente ai residui di lisina delle proteine 
                virali e cellulari (mediante una cascata enzimatica E1-E2-E3 indotta da IFN-I), destabilizzando le strutture dei virioni 
                in formazione ed impedendo il germogliamento (budding) delle particelle virali attraverso la membrana cellulare.
              </p>
            </div>
          </div>
        </div>

        {/* SIMULATORE INTERATTIVO INCASTONATO */}
        <div className="not-prose pt-2">
          <div className="mb-2 flex items-center justify-between text-xs font-mono text-slate-500">
            <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-indigo-600" />
              Laboratorio Dinamico: Stato Antivirale, Cascate PKR, 2'-5'-OAS & Proteine Mx
            </span>
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Simulatore Interattivo</span>
          </div>
          <InteractiveAntiviralStateSimulator />
        </div>

        {/* PONTE NARRATIVO DI RACCORDO */}
        <div className="bg-indigo-50 dark:bg-indigo-950/40 border-l-4 border-indigo-500 p-4 rounded-r-xl not-prose space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-800 dark:text-indigo-300 uppercase">
            <ArrowRight className="w-4 h-4" />
            <span>Ponte Fisiologico di Transizione</span>
          </div>
          <p className="text-xs sm:text-sm text-indigo-900 dark:text-indigo-200 leading-relaxed">
            Gli interferoni di tipo I aumentano inoltre massicciamente l'espressione delle molecole MHC di classe I su tutte le cellule nucleate 
            per esporre peptidi virali ai linfociti T citotossici (CD8⁺). Tuttavia, molti virus (come CMV, HSV, Adenovirus) hanno evoluto 
            strategie evasive per sequestrare o degradare le molecole MHC di classe I. È esattamente per neutralizzare questo trucco 
            che l'organismo dispone dei guardiani del "Missing-Self": le <strong>cellule Natural Killer (NK)</strong>, 
            protagoniste della Sezione 1.6.
          </p>
        </div>
      </article>

      {/* ========================================================================================= */}
      {/* SEZIONE 1.6: L'IMMUNITÀ LINFOIDE INNATA: CELLULE NATURAL KILLER (NK) E ILCs */}
      {/* ========================================================================================= */}
      <article
        id="sec-1-nk"
        className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 lg:p-9 shadow-xs space-y-6 w-full"
      >
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>Sezione 1.6 · Linfociti Innati & Missing-Self</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
            L'Immunità Linfoide Innata: Cellule Natural Killer (NK), Bilancio KIR/NKG2D e ILCs
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            La teoria del Missing-Self, il bilancio tra recettori inibitori ITIM e attivatori ITAM/DAP10, la citotossicità polare da perforina/granzimi e la clinica del trapianto aploidentico.
          </p>
        </div>

        <div className={`text-slate-800 dark:text-slate-200 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Le <strong>cellule Natural Killer (NK)</strong> costituiscono la terza popolazione linfoide circolante (5-15% dei linfociti 
            ematici totali). Morfologicamente identificate come linfociti a grandi granuli (LGL), sono fenotipicamente definite dalla 
            presenza della molecola d'adesione NCAM (<strong>CD56⁺</strong>), del recettore Fc a bassa affinità per IgG <strong>CD16⁺</strong> 
            e dalla <strong>totale assenza del complesso CD3/TCR (CD3⁻)</strong>. Originano nel midollo osseo e richiedono tassativamente 
            la citochina <strong>IL-15</strong> per il loro sviluppo e sopravvivenza.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 pt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            Le Due Sottopopolazioni Funzionali delle Cellule NK
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-3">
            <div className="p-4 rounded-xl border border-teal-200 dark:border-teal-900/60 bg-teal-50/40 dark:bg-teal-950/20 space-y-2">
              <span className="text-xs font-mono font-bold text-teal-800 dark:text-teal-300 uppercase block">
                1. Sottopopolazione CD56^bright CD16^dim/neg
              </span>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                Regolazione Citochinica & Immunità Tissutale
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Rappresentano solo il 10% delle NK nel sangue periferico, ma costituiscono la stragrande maggioranza nei linfonodi, milza 
                e utero deciduale gravidico. Hanno scarsa citotossicità basale spontanea ma sono formidabili produttrici di citochine 
                immunomodulanti (soprattutto <strong>IFN-γ</strong>, TNF-α e GM-CSF) in risposta a IL-12, IL-15 e IL-18 rilasciate dalle cellule dendritiche.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-teal-200 dark:border-teal-900/60 bg-teal-50/40 dark:bg-teal-950/20 space-y-2">
              <span className="text-xs font-mono font-bold text-teal-800 dark:text-teal-300 uppercase block">
                2. Sottopopolazione CD56^dim CD16^bright
              </span>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                Citotossicità Litica Rapida & ADCC
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Rappresentano il 90% delle NK circolanti nel sangue periferico. Esprimono livelli massicci di perforina e granzimi 
                preformati nei granuli secretori. Dotate di potentissima attività litica citotossica immediata e capaci di eseguire 
                la <strong>citotossicità cellulare anticorpo-dipendente (ADCC)</strong> ingaggiando cellule opsonizzate da IgG1 o IgG3 
                attraverso il recettore <strong>CD16 (FcγRIIIa)</strong>.
              </p>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 pt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            Il Modello del "Missing-Self" e il Bilanciamento Recettoriale
          </h3>

          <p>
            Formulata da Klas Kärre e Hans-Gustaf Ljunggren alla fine degli anni '80, la teoria del <strong>Missing-Self</strong> stabilisce 
            che la cellula NK riconosce e uccide selettivamente le cellule che hanno <strong>perso l'espressione fisiologica del "Self" normale</strong> 
            (costituito dalle molecole MHC di classe I):
          </p>

          <div className="bg-slate-50 dark:bg-slate-850 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3 not-prose my-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400 font-mono">
                  Recettori Inibitori (Freno Fisiologico)
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Contengono nella lunga coda citoplasmatica motivi <strong>ITIM (Immunoreceptor Tyrosine-based Inhibition Motif)</strong>. 
                  Comprendono:
                </p>
                <ul className="text-xs text-slate-700 dark:text-slate-300 list-disc pl-4 mt-1 space-y-1">
                  <li><strong>KIR (Killer cell Ig-like Receptors):</strong> es. KIR2DL1, KIR2DL2/3, KIR3DL1 che riconoscono specifici epitopi polimorfici sulle molecole HLA-A, HLA-B (motivo Bw4) e HLA-C (gruppo C1 vs gruppo C2).</li>
                  <li><strong>CD94/NKG2A:</strong> eterodimero lectinico che riconosce <strong>HLA-E</strong> (che presenta peptidi leader di HLA classici).</li>
                  <li><strong>Meccanismo di inibizione:</strong> il legame a MHC-I induce la fosforilazione dell'ITIM da parte di chinasi Src, reclutando la tirosina-fosfatasi <strong>SHP-1</strong>. SHP-1 defosforila istantaneamente Vav-1, spegnendo la polarizzazione dell'actina e bloccando la degranulazione litica.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-sm text-red-700 dark:text-red-400 font-mono">
                  Recettori Attivatori (Grilletto Litico)
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Associati a catene adattatrici contenenti motivi <strong>ITAM</strong> (CD3ζ, FcεRIγ) o <strong>DAP10</strong> (motivo YxxM per PI3K). Comprendono:
                </p>
                <ul className="text-xs text-slate-700 dark:text-slate-300 list-disc pl-4 mt-1 space-y-1">
                  <li><strong>NKG2D:</strong> omodimero che riconosce molecole "induced-self" espresse solo sotto stress cellulare, danno genomico o infezione: <strong>MICA, MICB</strong> e proteine <strong>ULBP1-6</strong>.</li>
                  <li><strong>NCR (Natural Cytotoxicity Receptors):</strong> recettori specifici <strong>NKp46</strong>, <strong>NKp30</strong> e <strong>NKp44</strong> (indotto).</li>
                  <li><strong>CD16 (FcγRIIIa):</strong> lega complessi IgG-antigene con legame multimerico travolgente, superando l'inibizione basale e scatenando l'ADCC.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* SIMULATORE INTERATTIVO MISSING-SELF & ADCC LAB */}
        <div className="not-prose pt-2 bg-slate-50 dark:bg-slate-850 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-teal-700 dark:text-teal-400 flex items-center gap-1.5">
                <Sliders className="w-4 h-4" />
                Laboratorio Interattivo: Bilancio delle Sinapsi NK & Missing-Self
              </span>
              <p className="text-xs text-slate-500 mt-0.5">
                Seleziona uno scenario cellulare per osservare l'integrazione tra segnali inibitori e attivatori.
              </p>
            </div>
            <div className="flex flex-wrap gap-1">
              {[
                { id: 'healthy', label: 'Cellula Sana (Tolleranza)' },
                { id: 'missing', label: 'Missing-Self (Tumore/Virus)' },
                { id: 'induced', label: 'Induced-Self (Stress MICA)' },
                { id: 'adcc', label: 'ADCC (CD16 + Trastuzumab)' }
              ].map((scen) => (
                <button
                  key={scen.id}
                  onClick={() => setSelectedNkScenario(scen.id as any)}
                  className={`px-2.5 py-1 text-xs font-mono rounded-lg border transition-all cursor-pointer ${
                    selectedNkScenario === scen.id
                      ? 'bg-teal-600 text-white font-bold border-teal-700 shadow-2xs'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {scen.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dettaglio dello scenario selezionato */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 space-y-2">
              <span className="text-[11px] font-mono text-slate-400 font-bold uppercase">Stato Cellula Bersaglio</span>
              <h5 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                {selectedNkScenario === 'healthy' && 'Cellula Fisiologica Normale'}
                {selectedNkScenario === 'missing' && 'Cellula Neoplastica / Infezione CMV'}
                {selectedNkScenario === 'induced' && 'Cellula Danneggiata da Radiazioni/Farmaci'}
                {selectedNkScenario === 'adcc' && 'Cellula Bersagliata da Anticorpi Monoclonali'}
              </h5>
              <div className="text-xs space-y-1 font-mono text-slate-600 dark:text-slate-300">
                <p>MHC Classe I: <strong className={selectedNkScenario === 'missing' ? 'text-red-500' : 'text-emerald-500'}>
                  {selectedNkScenario === 'missing' ? 'Assente / Down-regolato' : 'Normale (Alto)'}
                </strong></p>
                <p>Ligandi MICA/MICB: <strong className={selectedNkScenario === 'induced' ? 'text-red-500' : 'text-slate-500'}>
                  {selectedNkScenario === 'induced' ? 'Espressi Massivamente' : 'Basali / Assenti'}
                </strong></p>
                <p>Opsonizzazione IgG: <strong className={selectedNkScenario === 'adcc' ? 'text-blue-500' : 'text-slate-500'}>
                  {selectedNkScenario === 'adcc' ? 'Presente su Antigene Bersaglio' : 'Assente'}
                </strong></p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 space-y-2">
              <span className="text-[11px] font-mono text-slate-400 font-bold uppercase">Bilancio Molecolare della Sinapsi</span>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">Freno (KIR/NKG2A - ITIM):</span>
                  <span className="font-mono font-bold">
                    {selectedNkScenario === 'missing' ? '0% (Disattivato)' : '100% (Attivo Dominante)'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-red-600 dark:text-red-400 font-bold">Acceleratore (NKG2D/NCR):</span>
                  <span className="font-mono font-bold">
                    {selectedNkScenario === 'induced' ? '100% (Iper-stimolato)' : selectedNkScenario === 'adcc' ? 'Travolgente (CD16)' : '20% (Basale)'}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 pt-1 leading-snug">
                  {selectedNkScenario === 'healthy' && 'La fosfatasi SHP-1 defosforila Vav-1: la cellula NK risparmia il bersaglio.'}
                  {selectedNkScenario === 'missing' && 'Assenza di legame KIR → Mancata attivazione di SHP-1 → Il segnale attivatore prevale in assenza di freno.'}
                  {selectedNkScenario === 'induced' && 'L\'iperespressione di MICA supera il blocco inibitorio basale.'}
                  {selectedNkScenario === 'adcc' && 'Il clustering di CD16 tramite ITAM genera un potenziale d\'azione litico insormontabile.'}
                </p>
              </div>
            </div>

            <div className={`p-3.5 rounded-xl border space-y-2 flex flex-col justify-between ${
              selectedNkScenario === 'healthy'
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800'
                : 'bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-800'
            }`}>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase block text-slate-500">Esito Funzionale NK</span>
                <h5 className={`font-bold text-base mt-0.5 ${
                  selectedNkScenario === 'healthy' ? 'text-emerald-800 dark:text-emerald-300' : 'text-red-800 dark:text-red-300'
                }`}>
                  {selectedNkScenario === 'healthy' ? '✓ TOLLERANZA (Sopravvivenza)' : '⚡ DEGRANULAZIONE LITICA (Lisi Cellulare)'}
                </h5>
                <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
                  {selectedNkScenario === 'healthy' && 'Nessun danno alla cellula bersaglio. La cellula NK si disinnesta intatta.'}
                  {selectedNkScenario === 'missing' && 'Rilascio orientato di perforine (pori) e granzimi B (taglio caspasi-3 / Bid): apoptosi in 30 minuti.'}
                  {selectedNkScenario === 'induced' && 'Uccisione selettiva della cellula stressata genomica (prevenzione oncogenesi).'}
                  {selectedNkScenario === 'adcc' && 'Uccisione mirata anticorpo-mediata (es. Trastuzumab contro HER2 o Rituximab contro CD20).'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* EDUCAZIONE DELLE CELLULE NK (LICENSING / ARMING VS DISARMING) & MEMORIA ADATTATIVA-SIMILE */}
        <div className={`text-slate-800 dark:text-slate-200 space-y-4 pt-3 ${proseFontClass} ${proseSizeClass}`}>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            L'Educazione Funzionale delle Cellule NK: Licensing (Arming vs Disarming) e Memoria Adattativa-Simile
          </h3>
          <p>
            Il repertorio recettoriale delle cellule NK viene espresso in modo stocastico durante l'ontogenesi midollare. 
            Come fa l'organismo a garantire che le cellule NK non attacchino cellule sane e al contempo mantengano la capacità di riconoscere 
            il <em>missing-self</em> patologico? La risposta risiede nel processo di <strong>educazione funzionale (o Licensing)</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-3 text-xs">
            <div className="p-4 rounded-xl border border-teal-200 dark:border-teal-900/60 bg-teal-50/40 dark:bg-teal-950/20 space-y-2">
              <span className="font-bold font-mono text-teal-800 dark:text-teal-300 uppercase block">
                1. Modello dell'Arming (Licensing Attivo)
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Durante la maturazione, una cellula NK deve incontrare almeno una molecola <strong>MHC-I del Self autologo</strong> capace 
                di legare un suo recettore inibitorio (un KIR inibitorio o CD94/NKG2A). Paradossalmente, questo segnale inibitorio cronico mediato da ITIM 
                e dalla fosfatasi <strong>SHP-1</strong> non spegne definitivamente la cellula, ma la <strong>"istruisce ed arma"</strong>: calibra il macchinario 
                secretorio litico e rende la cellula NK pienamente competente (<em>licensed</em>). Una volta licenziata, se la cellula NK incontra un bersaglio 
                privo di quel ligando inibitorio, scaricherà immediatamente il proprio potenziale citotossico.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-2">
              <span className="font-bold font-mono text-slate-700 dark:text-slate-300 uppercase block">
                2. Modello del Disarming (Anergia / Unlicensed NK)
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Se una cellula NK in maturazione non possiede alcun recettore inibitorio capace di riconoscere le molecole MHC-I dell'individuo, 
                riceverebbe stimoli attivatori basali continui non bilanciati. Per prevenire un'aggressione autoimmune aspecifica, questa cellula 
                subisce un processo di <strong>disarmo funzionale (disarming)</strong>: diventa anergica, ipo-responsiva agli stimoli da contatto 
                e incapace di degranulare spontaneamente. Tuttavia, queste cellule <em>unlicensed</em> non vengono eliminate e possono essere risvegliate 
                in corso di infezioni sistemiche da citochine infiammatorie (IL-12, IL-15, IL-18).
              </p>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-850 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 not-prose my-2 text-xs">
            <span className="font-bold font-mono text-slate-900 dark:text-slate-100 block">
              Il Modello del Reostato (Rheostat Model):
            </span>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              L'educazione delle NK non è un interruttore binario (on/off), ma un <strong>reostato quantitativo continuo</strong>: 
              maggiore è il numero e l'affinità delle interazioni inibitorie autologhe sperimentate durante lo sviluppo (es. omozigosi per ligandi KIR, 
              co-espressione di multipli KIR autologhi e NKG2A), più elevata e violenta sarà la responsività citotossica della cellula NK una volta 
              rimosso il freno inibitorio sul bersaglio patologico.
            </p>
          </div>

          {/* MEMORIA ADATTATIVA-SIMILE (HCMV & NKG2C+) */}
          <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20 not-prose space-y-2">
            <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase text-indigo-900 dark:text-indigo-300">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Memoria Adattativa-Simile delle Cellule NK: L'Espansione Clonale NKG2C⁺ nell'Infezione da HCMV</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              Sebbene storicamente definite componenti pure dell'immunità innata prive di memoria immunologica, le cellule NK umane 
              possono generare popolazioni a memoria persistente (<em>Adaptive / Memory-like NK cells</em>). Il paradigma cardinale è rappresentato 
              dall'infezione o riattivazione da <strong>Citomegalovirus Umano (HCMV)</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
              <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-indigo-200 dark:border-indigo-800/60">
                <span className="font-bold text-indigo-700 dark:text-indigo-400 font-mono block">Ingaggio Molecolare:</span>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  La proteina virale <strong>UL40</strong> di HCMV contiene un peptide identico alla sequenza leader degli HLA classici. 
                  Questo peptide viene caricato sulla molecola non classica <strong>HLA-E</strong> e presentato al recettore attivatore 
                  eterodimerico <strong>CD94/NKG2C</strong> espresso sulle NK.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-indigo-200 dark:border-indigo-800/60">
                <span className="font-bold text-indigo-700 dark:text-indigo-400 font-mono block">Riprogrammazione Epigenetica:</span>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  L'espansione clonale genera cellule <strong>NKG2C⁺ CD57⁺ LIR-1⁺</strong> terminalmente differenziate. A livello epigenetico, 
                  subiscono metilazione del DNA con spegnimento di molecole adattatrici convenzionali (FcεRIγ, SYK) e passaggio all'impiego 
                  di <strong>CD3ζ</strong> e <strong>ZAP-70</strong>, mimando l'architettura dei linfociti T.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-indigo-200 dark:border-indigo-800/60">
                <span className="font-bold text-indigo-700 dark:text-indigo-400 font-mono block">Potenziale Effettore Ricordato:</span>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Queste cellule persistono per decenni nel sangue dei soggetti sieropositivi per CMV. Al re-incontro con patogeni o anticorpi, 
                  esibiscono una <strong>ADCC mediata da CD16 drammaticamente amplificata</strong> e una produzione istantanea e torrenziale 
                  di <strong>IFN-γ</strong> e TNF-α.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================================= */}
        {/* LABORATORIO CLINICO INTERATTIVO: TRAPIANTO APLOIDENTICO (RUGGERI-VELARDI) & PREECLAMPSIA */}
        {/* ========================================================================================= */}
        <div className="not-prose my-6 bg-slate-50 dark:bg-slate-850 p-4 sm:p-6 rounded-2xl border border-teal-200 dark:border-teal-800/70 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border border-teal-300 dark:border-teal-800">
                  Laboratorio Clinico Avanzato
                </span>
                <span className="text-xs text-slate-500 font-mono">Immunogenetica KIR / HLA</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">
                Laboratorio Clinico NK: Trapianto Aploidentico di CSE & Cellule uNK nella Preeclampsia
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Simula in tempo reale l'alloreattività KIR nel modello Velardi-Ruggeri per l'AML e la placentazione fetale guidata dalle uNK deciduali.
              </p>
            </div>

            {/* Tab Switcher */}
            <div className="flex items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-0.5 text-xs font-semibold shadow-2xs shrink-0">
              <button
                type="button"
                onClick={() => setClinicalTab('transplant')}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                  clinicalTab === 'transplant'
                    ? 'bg-teal-600 text-white shadow-xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Trapianto Aploidentico (AML)</span>
              </button>
              <button
                type="button"
                onClick={() => setClinicalTab('pregnancy')}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                  clinicalTab === 'pregnancy'
                    ? 'bg-rose-600 text-white shadow-xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Baby className="w-3.5 h-3.5" />
                <span>Cellule uNK & Preeclampsia</span>
              </button>
            </div>
          </div>

          {/* SCHEDA 1: TRAPIANTO APLOIDENTICO DI CSE (MODELLO RUGGERI-VELARDI) */}
          {clinicalTab === 'transplant' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Selettore HLA Paziente */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <span className="text-xs font-mono font-bold uppercase text-slate-500 block">
                    1. Assetto HLA del Ricevente (Paziente con AML)
                  </span>
                  <div className="space-y-1.5">
                    {[
                      { id: 'C1_homo', label: 'Omozigote HLA-C Gruppo 1 (C*01, C*03, C*07)', desc: 'Manca del gruppo epitopico C2' },
                      { id: 'C2_homo', label: 'Omozigote HLA-C Gruppo 2 (C*02, C*04, C*05)', desc: 'Manca del gruppo epitopico C1' },
                      { id: 'Bw4_pos', label: 'HLA-Bw4 Negativo (Omozigote Bw6)', desc: 'Manca del motivo inibitorio Bw4' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setPatientHla(opt.id as any)}
                        className={`w-full p-2.5 rounded-lg text-left text-xs border transition-all cursor-pointer ${
                          patientHla === opt.id
                            ? 'bg-teal-50 dark:bg-teal-950/60 border-teal-500 text-teal-950 dark:text-teal-200 font-bold ring-1 ring-teal-400'
                            : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        <div className="font-semibold">{opt.label}</div>
                        <div className="text-[11px] opacity-75">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selettore KIR Donatore */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <span className="text-xs font-mono font-bold uppercase text-slate-500 block">
                    2. Repertorio KIR Educato nel Donatore Aploidentico
                  </span>
                  <div className="space-y-1.5">
                    {[
                      { id: 'anti_C2', label: 'Donatore con NK KIR2DL1⁺ (Educate su C2)', desc: 'Alloreattivo se il ricevente manca di HLA-C2' },
                      { id: 'anti_C1', label: 'Donatore con NK KIR2DL2/3⁺ (Educate su C1)', desc: 'Alloreattivo se il ricevente manca di HLA-C1' },
                      { id: 'all_match', label: 'Donatore KIR-Compatibile (Match Completo)', desc: 'Tutti i KIR inibitori trovano ligando cognato nel ricevente' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setDonorKir(opt.id as any)}
                        className={`w-full p-2.5 rounded-lg text-left text-xs border transition-all cursor-pointer ${
                          donorKir === opt.id
                            ? 'bg-teal-50 dark:bg-teal-950/60 border-teal-500 text-teal-950 dark:text-teal-200 font-bold ring-1 ring-teal-400'
                            : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        <div className="font-semibold">{opt.label}</div>
                        <div className="text-[11px] opacity-75">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Esito Dinamico Trapianto */}
              {(() => {
                const isMismatchActive =
                  (patientHla === 'C1_homo' && donorKir === 'anti_C2') ||
                  (patientHla === 'C2_homo' && donorKir === 'anti_C1');

                return (
                  <div className={`p-4 rounded-xl border transition-all space-y-3 ${
                    isMismatchActive
                      ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-400 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100'
                      : 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-100'
                  }`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-current/20 pb-2">
                      <div className="flex items-center gap-2">
                        {isMismatchActive ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                        )}
                        <span className="font-bold font-mono text-sm uppercase">
                          {isMismatchActive
                            ? 'Alloreattività KIR Positiva: Effetto GvL (Graft-versus-Leukemia) Massimo'
                            : 'Nessun Mismatch KIR-Ligando: Tolleranza dei Blasti Leucemici'}
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-white dark:bg-slate-900 shadow-2xs">
                        {isMismatchActive ? 'Modello Perugia / Ruggeri-Velardi' : 'Condizione Standard Senza Vantaggio NK'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="font-bold font-mono block text-slate-700 dark:text-slate-300">1. Eradicazione della Leucemia (GvL):</span>
                        <p className="mt-1 leading-relaxed opacity-90">
                          {isMismatchActive
                            ? 'I blasti leucemici di AML del paziente mancano dell\'epitopo inibitorio. Le NK licenziate del donatore non trovano il freno ITIM/SHP-1 e degranulano massivamente perforina e granzima B, distruggendo la malattia minima residua.'
                            : 'I blasti leucemici del paziente espongono molecole HLA che ingaggiano i KIR inibitori del donatore. Le NK allogeniche vengono bloccate e non esercitano lisi antileucemica.'}
                        </p>
                      </div>

                      <div>
                        <span className="font-bold font-mono block text-slate-700 dark:text-slate-300">2. Protezione da GVHD (Graft-vs-Host):</span>
                        <p className="mt-1 leading-relaxed opacity-90">
                          {isMismatchActive
                            ? 'Paradosso salvavita: le NK alloreattive uccidono specificamente le cellule dendritiche (APC) del paziente che mancano dell\'HLA self. Senza APC riceventi, i linfociti T non possono attivarsi: zero GVHD!'
                            : 'Le APC del ricevente non vengono eliminate dalle NK; il rischio di attivazione T-cellulare e Graft-versus-Host Disease deve essere controllato unicamente da farmaci immunosoppressori.'}
                        </p>
                      </div>

                      <div>
                        <span className="font-bold font-mono block text-slate-700 dark:text-slate-300">3. Esito Clinico & Sopravvivenza:</span>
                        <p className="mt-1 leading-relaxed opacity-90">
                          {isMismatchActive
                            ? 'Sopravvivenza libera da malattia a 5 anni per AML ad alto rischio: >65% (vs <10% nei trapianti privi di alloreattività NK). Le cellule NK abbattono anche i linfociti T residui del paziente, prevenendo il rigetto dell\'innesto.'
                            : 'Il tasso di recidiva della leucemia mieloide acuta post-trapianto rimane elevato (40-60%), non potendo beneficiare del clearing immunologico mediato dalle cellule NK allogeniche.'}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* SCHEDA 2: CELLULE uNK DECIDUALI NELLA PREECLAMPSIA (ASHLEY MOFFETT) */}
          {clinicalTab === 'pregnancy' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Selettore Aplotipo Materno */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <span className="text-xs font-mono font-bold uppercase text-slate-500 block">
                    1. Aplotipo KIR Materno (Cellule uNK Deciduali)
                  </span>
                  <div className="space-y-1.5">
                    {[
                      { id: 'AA', label: 'Aplotipo Materno KIR AA (Solo Inibitori)', desc: 'Esprime KIR2DL1 ad alta affinità; privo di KIR attivatori (KIR2DS1⁻)' },
                      { id: 'Bx', label: 'Aplotipo Materno KIR Bx (Con Geni Attivatori)', desc: 'Possiede il recettore attivatore KIR2DS1 specifico per HLA-C2' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setMaternalAplotype(opt.id as any)}
                        className={`w-full p-2.5 rounded-lg text-left text-xs border transition-all cursor-pointer ${
                          maternalAplotype === opt.id
                            ? 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-950 dark:text-rose-200 font-bold ring-1 ring-rose-400'
                            : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        <div className="font-semibold">{opt.label}</div>
                        <div className="text-[11px] opacity-75">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selettore HLA-C Fetale */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <span className="text-xs font-mono font-bold uppercase text-slate-500 block">
                    2. Gruppo HLA-C Espresso dal Trofoblasto Fetale
                  </span>
                  <div className="space-y-1.5">
                    {[
                      { id: 'C2', label: 'Trofoblasto HLA-C2 Positivo (Eredità Paterna/Materna)', desc: 'Presenta il residuo Lys80 ad altissima affinità per KIR2DL1 e KIR2DS1' },
                      { id: 'C1', label: 'Trofoblasto Omozigote HLA-C1', desc: 'Presenta Asn80 a bassa affinità (lega debolmente KIR2DL2/3)' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setFetalHlaC(opt.id as any)}
                        className={`w-full p-2.5 rounded-lg text-left text-xs border transition-all cursor-pointer ${
                          fetalHlaC === opt.id
                            ? 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-950 dark:text-rose-200 font-bold ring-1 ring-rose-400'
                            : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        <div className="font-semibold">{opt.label}</div>
                        <div className="text-[11px] opacity-75">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Esito Dinamico Preeclampsia */}
              {(() => {
                const isHighRiskPreeclampsia = maternalAplotype === 'AA' && fetalHlaC === 'C2';
                const isProtective = maternalAplotype === 'Bx' && fetalHlaC === 'C2';

                return (
                  <div className={`p-4 rounded-xl border transition-all space-y-3 ${
                    isHighRiskPreeclampsia
                      ? 'bg-rose-50 dark:bg-rose-950/50 border-rose-400 dark:border-rose-800 text-rose-950 dark:text-rose-100'
                      : isProtective
                      ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-400 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100'
                      : 'bg-slate-100 dark:bg-slate-800/60 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100'
                  }`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-current/20 pb-2">
                      <div className="flex items-center gap-2">
                        {isHighRiskPreeclampsia ? (
                          <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                        ) : isProtective ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        ) : (
                          <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                        )}
                        <span className="font-bold font-mono text-sm uppercase">
                          {isHighRiskPreeclampsia && 'Alto Rischio: Preeclampsia Grave & Ritardo di Crescita (IUGR)'}
                          {isProtective && 'Protezione Clinica: Placentazione Ottimale & Vasi Uterini Dilatati'}
                          {!isHighRiskPreeclampsia && !isProtective && 'Rischio Basale: Fisiologica Placentazione Utero-Deciduale'}
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-white dark:bg-slate-900 shadow-2xs">
                        Modello Ashley Moffett (Cambridge)
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="font-bold font-mono block text-slate-700 dark:text-slate-300">1. Sinapsi uNK Materna - Trofoblasto Fetale:</span>
                        <p className="mt-1 leading-relaxed opacity-90">
                          {isHighRiskPreeclampsia && 'Le cellule uNK deciduali materne (CD56^bright CD16⁻) esprimono solo KIR2DL1. Il forte legame inibitorio con HLA-C2 fetale iper-inibisce le uNK, bloccandone l\'attività secretoria.'}
                          {isProtective && 'La madre possiede il recettore attivatore KIR2DS1. Il legame a HLA-C2 attiva la cascata DAP12/ITAM nelle uNK, stimolando la produzione massiva di fattori angiogenici.'}
                          {!isHighRiskPreeclampsia && !isProtective && 'L\'interazione debole tra KIR2DL2/3 e HLA-C1 non genera inibizione soppressiva eccessiva: le uNK deciduali mantengono un rilascio fisiologico equilibrato di citochine.'}
                        </p>
                      </div>

                      <div>
                        <span className="font-bold font-mono block text-slate-700 dark:text-slate-300">2. Rimodellamento delle Arterie Spirali:</span>
                        <p className="mt-1 leading-relaxed opacity-90">
                          {isHighRiskPreeclampsia && 'Critico deficit di VEGF-A, PlGF e Angiopoietina-2. Mancata invasione profonda del trofoblasto extravilloso nel miometrio. Le arterie spirali NON si dilatano, rimanendo strette e muscolari ad alta resistenza.'}
                          {isProtective && 'Abbondante secrezione di VEGF, PlGF e MMP-9 da parte delle uNK. Completa sostituzione della tunica muscolare: le arterie spirali diventano ampi canali a bassa resistenza e alto flusso.'}
                          {!isHighRiskPreeclampsia && !isProtective && 'Regolare rimodellamento vascolare deciduo-placentare con perfusione materno-fetale adeguata.'}
                        </p>
                      </div>

                      <div>
                        <span className="font-bold font-mono block text-slate-700 dark:text-slate-300">3. Quadro Fisiopatologico Sistemico:</span>
                        <p className="mt-1 leading-relaxed opacity-90">
                          {isHighRiskPreeclampsia && 'L\'ipossia placentare scatena il rilascio in circolo di sFlt-1 (che sequestra VEGF) e s-Endoglina. Si genera disfunzione endoteliale sistemica: ipertensione arteriosa materna (>140/90 mmHg), proteinuria, edema e IUGR fetale.'}
                          {isProtective && 'Nessun distress ischemico placentare. I livelli di sFlt-1 rimangono fisiologici; la gravidanza procede a termine con normale accrescimento ponderale fetale.'}
                          {!isHighRiskPreeclampsia && !isProtective && 'Gravidanza a basso rischio clinico vascolare; parametri di pressione arteriosa e accrescimento fetale nei limiti di norma.'}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        {/* PANORAMICA DELLE CELLULE LINFOIDI INNATE (ILC1, ILC2, ILC3) */}
        <div className={`text-slate-800 dark:text-slate-200 space-y-3 pt-3 ${proseFontClass} ${proseSizeClass}`}>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            Le Cellule Linfoidi Innate (ILCs): Gli Omologhi Innati dei Linfociti T Helper
          </h3>
          <p>
            Le <strong>ILC (Innate Lymphoid Cells)</strong> sono cellule linfoidi residenti nei tessuti mucosali e barriera, 
            prive di recettori antigenici clonali riarrangiati. Rispondono istantaneamente alle allarmine e citochine rilasciate 
            dall'epitelio danneggiato, replicando in modalità innata i profili citochinici delle sottopopolazioni Th adattative:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 not-prose my-3 text-xs">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-1.5">
              <span className="font-mono font-bold text-blue-600 dark:text-blue-400 block">ILC1 (Omologhe ai Th1)</span>
              <p className="text-slate-600 dark:text-slate-400">
                Fattore master: <strong>T-bet</strong>. Rispondono a <strong>IL-12</strong> e <strong>IL-18</strong> secernendo massicciamente 
                <strong> IFN-γ</strong>. Difesa di prima linea contro batteri intracellulari e protozoi nei tessuti connettivi.
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-1.5">
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 block">ILC2 (Omologhe ai Th2)</span>
              <p className="text-slate-600 dark:text-slate-400">
                Fattore master: <strong>GATA-3</strong>. Rispondono ad allarmine epiteliali (<strong>IL-25, IL-33, TSLP</strong>) 
                secernendo <strong>IL-4, IL-5 e IL-13</strong>. Difesa antiparassitaria (elminti), rimodellamento tessutale e asma allergica.
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-1.5">
              <span className="font-mono font-bold text-orange-600 dark:text-orange-400 block">ILC3 & LTi (Omologhe ai Th17)</span>
              <p className="text-slate-600 dark:text-slate-400">
                Fattore master: <strong>RORγt</strong>. Rispondono a <strong>IL-23</strong> e <strong>IL-1β</strong> producendo 
                <strong> IL-17 e IL-22</strong>. Preservano l'integrità epiteliale intestinale e guidano l'organogenesi linfonodale fetale (LTi).
              </p>
            </div>
          </div>
        </div>

        {/* SINTESI FINALE E RACCORDO VERSO IL CAPITOLO II */}
        <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white p-6 rounded-2xl not-prose space-y-3 border border-teal-700/50 shadow-md">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-teal-300">
            <BookOpen className="w-4 h-4" />
            <span>Sintesi di Raccordo: La Connessione Fisiologica tra Capitolo I e Capitolo II</span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white">
            Dal Reclutamento Innato alla Genesi della Risposta Clonale Adattativa
          </h4>
          <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed">
            L'immunità innata non opera mai in un vuoto biologico stagno: il suo scopo fondamentale non è solo contenere 
            l'infezione nelle prime 0-12 ore, ma consentire alle <strong>cellule dendritiche convenzionali (cDC)</strong> di catturare 
            gli antigeni microbici, maturare sotto stimolo di TLR/IL-1β, migrare attraverso i vasi linfatici afferenti verso i linfonodi drenanti 
            ed esporre i peptidi processati sulle molecole <strong>MHC di classe I e classe II</strong>. 
            Nel <strong>Capitolo II</strong> esamineremo le basi molecolari con cui i linfociti B e T generano i propri recettori clonali 
            mediante la ricombinazione somatica V(D)J e la selezione timica e midollare.
          </p>
        </div>
      </article>

      {/* ========================================================================================= */}
      {/* SEZIONE 1.7: VERIFICA FINALE, QUIZ & FLASHCARDS INTEGRATE */}
      {/* ========================================================================================= */}
      <article
        id="sec-1-verifica"
        className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 lg:p-9 shadow-xs space-y-6 w-full"
      >
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>Autovalutazione Accademica · Capitolo I</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
            Verifica delle Competenze & Flashcard di Ripasso Attivo
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Quesiti a scelta multipla con razionale biochimico dettagliato per testare la padronanza dei concetti del Capitolo 1.
          </p>
        </div>

        {/* Quiz integrato & Flashcards del Capitolo I */}
        <div className="not-prose space-y-8">
          <QuizSection
            title="Quesiti d'Esame Ufficiali · Capitolo I (Lezioni 1, 3, 4, 5, 21)"
            subtitle="Filtro integrato sui quesiti d'esame ufficiali: Barriere, Sensori PRR, Inflammasoma, Neutrofili, Interferoni e Cellule NK"
            customQuestions={chapter1Questions}
            showLessonFilter={true}
          />

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
            <FlashcardDeck
              title="Flashcard di Ripasso Attivo · Capitolo I"
              subtitle="Mappe concettuali e perle mnestiche: biochimica, vie di trasduzione, recettori e quadri clinici del Capitolo 1"
              cards={chapter1Flashcards}
            />
          </div>
        </div>
      </article>

    </div>
  );
};
