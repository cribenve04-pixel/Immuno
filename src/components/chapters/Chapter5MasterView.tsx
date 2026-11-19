/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CAPITOLO V MASTER VIEW: IMMUNITÀ MUCOSALE, MICROBIOTA & INFEZIONI
 * Trattato accademico continuo a pagina unica.
 * Comprende la fisiologia del GALT, secrezione di IgA dimeriche (pIgR), tolleranza orale,
 * la risposta alle infezioni batteriche/virali con evasione, piattaforme vaccinali (mRNA, subunità)
 * e l'asse neuro-immune microbiota-intestino-cervello con acidi grassi a catena corta (SCFA).
 */

import React, { useState, useEffect } from 'react';
import {
  Globe,
  Layers,
  Activity,
  Shield,
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
  Compass,
  Radio,
  Dna,
  ShieldAlert,
  Boxes,
  Syringe,
  BrainCircuit,
  Bug
} from 'lucide-react';

// Simulatori Interattivi
import { InteractiveAntiviralStateSimulator } from '../InteractiveAntiviralStateSimulator';

// Quiz & Domande d'Esame
import { ALL_EXAM_QUESTIONS } from '../../data/examQuestions';
import { QuizSection } from '../QuizSection';

interface Chapter5MasterViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
  initialSection?: string;
}

export const Chapter5MasterView: React.FC<Chapter5MasterViewProps> = ({
  isSerif = false,
  fontSize = 'normal',
  initialSection
}) => {
  const proseFontClass = isSerif ? 'font-serif' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  const [activeSubSection, setActiveSubSection] = useState<string>('sec-5-risposta-infezioni');

  const SECTIONS_NAV = [
    { id: 'sec-5-risposta-infezioni', label: '5.1 Risposta alle Infezioni', icon: Bug },
    { id: 'sec-5-immunita-mucosale', label: '5.2 GALT & IgA Secretorie', icon: Shield },
    { id: 'sec-5-antivirale-vaccini', label: '5.3 Vaccinologia & mRNA', icon: Syringe },
    { id: 'sec-5-asse-gut-brain', label: '5.4 Asse Gut-Brain & SCFA', icon: BrainCircuit },
    { id: 'sec-5-verifica', label: 'Verifica & Quiz', icon: CheckCircle2 }
  ];

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

  useEffect(() => {
    if (initialSection) {
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
      
      {/* 1. TESTATA MONUMENTALE DEL CAPITOLO V */}
      <header className="bg-gradient-to-br from-teal-900 via-slate-900 to-emerald-950 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-white shadow-xl border border-teal-800/40 relative overflow-hidden w-full">
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-10 bottom-0 text-teal-500/10 font-mono font-black text-9xl select-none pointer-events-none">
          V
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-400/30">
              Capitolo V · Trattato Integrato
            </span>
            <span className="text-xs font-mono text-teal-200/70">
              GALT, Tolleranza Orale, Vaccinologia & Asse Neuro-Immune
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Immunità Mucosale, Microbiota Intestinale e Risposta alle Infezioni
          </h1>

          <p className="text-teal-100/90 text-sm sm:text-base leading-relaxed max-w-3xl">
            L'interfaccia con il mondo esterno: l'anatomia immunologica specializzata del tessuto linfoide associato all'intestino (GALT), 
            il campionamento antigienico tramite le cellule M delle placche di Peyer, la sintesi e secrezione transepiteliale di IgA dimeriche 
            protette dal componente secretorio, l'asse bidirezionale microbiota-intestino-cervello guidato dagli acidi grassi a catena corta (SCFA), 
            e le piattaforme della moderna vaccinologia inversa e a RNA messaggero.
          </p>

          <div className="pt-4 border-t border-teal-800/60 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-teal-950/60 border border-teal-800/50">
              <span className="text-[10px] font-mono text-teal-400 font-bold block">PARTE 5.1</span>
              <strong className="text-white block mt-0.5">Infezioni</strong>
              <span className="text-[11px] text-teal-200/70">Batteri, Virus & Evasione</span>
            </div>
            <div className="p-2.5 rounded-lg bg-teal-950/60 border border-teal-800/50">
              <span className="text-[10px] font-mono text-teal-400 font-bold block">PARTE 5.2</span>
              <strong className="text-white block mt-0.5">GALT & IgA</strong>
              <span className="text-[11px] text-teal-200/70">Cellule M, pIgR, Tolleranza</span>
            </div>
            <div className="p-2.5 rounded-lg bg-teal-950/60 border border-teal-800/50">
              <span className="text-[10px] font-mono text-teal-400 font-bold block">PARTE 5.3</span>
              <strong className="text-white block mt-0.5">Vaccinologia</strong>
              <span className="text-[11px] text-teal-200/70">mRNA, Nanoparticelle lipidiche</span>
            </div>
            <div className="p-2.5 rounded-lg bg-teal-950/60 border border-teal-800/50">
              <span className="text-[10px] font-mono text-teal-400 font-bold block">PARTE 5.4</span>
              <strong className="text-white block mt-0.5">Asse Gut-Brain</strong>
              <span className="text-[11px] text-teal-200/70">SCFA, Nervo Vago, Microglia</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. SUB-BARRA DI NAVIGAZIONE RAPIDA IN-PAGE */}
      <nav className="sticky top-14 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl p-2 border border-slate-200 dark:border-slate-800 shadow-md flex items-center gap-1.5 overflow-x-auto scrollbar-thin">
        <span className="text-[11px] font-mono font-bold text-slate-500 uppercase px-2 shrink-0 flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5 text-teal-600" />
          Indice Cap. V:
        </span>
        {SECTIONS_NAV.map((sec) => {
          const Icon = sec.icon;
          const isActive = activeSubSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToAnchor(sec.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-slate-755'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{sec.label}</span>
            </button>
          );
        })}
      </nav>

      {/* =========================================================================
          SEZIONE 5.1: RISPOSTA IMMUNITARIA ALLE INFEZIONI & EVASIONE DEI PATOGENI
          ========================================================================= */}
      <article id="sec-5-risposta-infezioni" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400">
            <Bug className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Sezione 5.1 · Interazione Ospite-Patogeno
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Meccanismi Effettori contro Batteri, Micobatteri e Virus con Strategie Molecolari di Immunoevasione
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            La risposta immunitaria deve modularsi in base alla nicchia biologica del patogeno:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Batteri Extracellulari (Stafilococchi, Streptococchi)</strong>: contrastati da neutrofili (NOX2, NETs), opsonizzazione complementare (C3b/iC3b) e anticorpi neutralizzanti.</li>
            <li><strong>Batteri Intracellulari (Mycobacterium tuberculosis, Listeria)</strong>: richiedono l'attivazione classica dei macrofagi (profilo M1) indotta da IFN-γ prodotto dai linfociti Th1 e cellule NK, con formazione di granulomi immunitari.</li>
            <li><strong>Virus</strong>: contrastati tempestivamente dagli interferoni di tipo I (IFN-α/β) che inducono lo stato antivirale citosolico, e successivamente eliminati dai linfociti T citotossici CD8+.</li>
          </ul>
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 5.2: IMMUNITÀ MUCOSALE & GALT (IgA, PLACCHE DI PEYER)
          ========================================================================= */}
      <article id="sec-5-immunita-mucosale" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Sezione 5.2 · Fisiologia delle Superfici Mucosali
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Architettura del GALT: Cellule M, Transcitosi di IgA Dimeriche via pIgR e Meccanismi di Tolleranza Orale
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            Il GALT (Gut-Associated Lymphoid Tissue) costituisce il compartimento immunologico più esteso del corpo umano. 
            Le <strong>cellule M (Microfold)</strong> nell'epitelio follicolo-associato (FAE) sovrastante le placche di Peyer campionano 
            attivamente gli antigeni luminali e li trasferiscono intatti nella tasca basolaterale dove risiedono cellule dendritiche CD103+.
          </p>
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 not-prose text-xs">
            <h4 className="font-bold text-emerald-950 dark:text-emerald-200 text-sm mb-1">
              Ciclo di Sintesi e Secrezione delle IgA Dimeriche
            </h4>
            <p className="text-emerald-900 dark:text-emerald-300 leading-relaxed">
              Le plasmacellule della lamina propria sintetizzano dimeri di IgA uniti dalla catena J. 
              Sulla superficie basolaterale dell'enterocita, il <strong>recettore polimerico delle immunoglobuline (pIgR)</strong> lega 
              la catena J e internalizza il complesso per transcitosi. Sulla superficie apicale luminale, il pIgR viene scisso: una porzione 
              rimane legata al dimero costituendo il <strong>componente secretorio (SC)</strong>, che protegge l'anticorpo dalla degradazione 
              delle proteasi digestive.
            </p>
          </div>
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 5.3: RISPOSTA ANTIVIRALE & PIATTAFORME VACCINALI
          ========================================================================= */}
      <article id="sec-5-antivirale-vaccini" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">
            <Syringe className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Sezione 5.3 · Vaccinologia Razionale & Immunoprofilassi
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Stato Antivirale, Vaccini a mRNA in Nanoparticelle Lipidiche (LNP) e Vaccinologia Inversa
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            I vaccini a RNA messaggero incapsulato in nanoparticelle lipidiche (LNP) mimano l'infezione naturale: 
            l'mRNA viene tradotto nel citoplasma delle cellule dendritiche e presentato sia su MHC-I (dopo degradazione nel proteasoma) 
            sia su MHC-II (dopo secrezione ed endocitosi), garantendo una robusta induzione combinata di anticorpi neutralizzanti ad alta affinità 
            e linfociti T citotossici di memoria.
          </p>
        </div>

        {/* Simulatore Stato Antivirale */}
        <div className="not-prose pt-4 border-t border-slate-150 dark:border-slate-800">
          <InteractiveAntiviralStateSimulator />
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 5.4: ASSE MICROBIOTA-INTESTINO-CERVELLO & METABOLITI SCFA
          ========================================================================= */}
      <article id="sec-5-asse-gut-brain" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Sezione 5.4 · Comunicazione Neuro-Immune
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              L'Asse Microbiota-Intestino-Cervello: Regolazione Tramite Acidi Grassi a Catena Corta (Butirrato) & Microglia
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            Il microbiota intestinale non è un semplice passeggero commensale, ma un vero organo endocrino e immunomodulatore. 
            La fermentazione batterica delle fibre alimentari genera <strong>acidi grassi a catena corta (SCFA: butirrato, propionato, acetato)</strong>:
            il butirrato agisce come inibitore delle istone deacetilasi (HDAC), promuovendo la differenziazione e la stabilità fenotipica 
            dei <strong>linfociti Treg Foxp3+</strong> della lamina propria. Inoltre, gli SCFA attraversano la barriera emato-encefalica 
            regolando la maturazione e lo stato di sorveglianza delle cellule microgliali cerebrali.
          </p>
        </div>
      </article>

      {/* =========================================================================
          SEZIONE VERIFICA & AUTOVALUTAZIONE
          ========================================================================= */}
      <section id="sec-5-verifica" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Autovalutazione Capitolo V
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Verifica delle Competenze Clinico-Molecolari del Capitolo V
            </h2>
          </div>
        </div>

        <div className="not-prose space-y-8">
          <QuizSection
            title="Quiz Ufficiale Capitolo V: Immunità Mucosale, Microbiota & Vaccini"
            customQuestions={ALL_EXAM_QUESTIONS.filter((q) => [22, 23, 24, 25].includes(q.lessonNumber))}
          />
        </div>
      </section>

    </div>
  );
};
