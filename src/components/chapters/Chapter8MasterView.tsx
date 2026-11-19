/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CAPITOLO VIII MASTER VIEW: IMMUNOLOGIA ONCOLOGICA & IMMUNODEFICIENZE ACQUISITE
 * Trattato accademico a pagina unica a flusso continuo.
 * Comprende:
 * - Ciclo cancro-immunità in 7 fasi & le 3E dell'immunoediting (Eliminazione, Equilibrio, Evasione)
 * - Inibitori dei checkpoint immunitari (anti-CTLA-4, anti-PD-1, anti-PD-L1) e tossicità immunocorrelate (irAEs)
 * - Terapia cellulare con linfociti CAR-T di 1ª-4ª generazione & gestione della tempesta citochinica (CRS/ICANS)
 * - Virologia immunologica dell'HIV-1, tropismo CCR5/CXCR4, deplezione CD4+, reservoir latente e HAART
 */

import React, { useState, useEffect } from 'react';
import {
  Activity,
  Layers,
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
  HeartPulse,
  Flame,
  Bug,
  Crosshair
} from 'lucide-react';

// Simulatori Interattivi Chapter 8
import { InteractiveCheckpointBlockade } from '../InteractiveCheckpointBlockade';

// Quiz & Domande d'Esame
import { ALL_EXAM_QUESTIONS } from '../../data/examQuestions';
import { QuizSection } from '../QuizSection';

interface Chapter8MasterViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
  initialSection?: string;
}

export const Chapter8MasterView: React.FC<Chapter8MasterViewProps> = ({
  isSerif = false,
  fontSize = 'normal',
  initialSection
}) => {
  const proseFontClass = isSerif ? 'font-serif' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  const [activeSubSection, setActiveSubSection] = useState<string>('sec-8-immunologia-tumori');

  const SECTIONS_NAV = [
    { id: 'sec-8-immunologia-tumori', label: '8.1 Immunoediting, Checkpoint & CAR-T', icon: Crosshair },
    { id: 'sec-8-hiv-aids', label: '8.2 Infezione da HIV-1 & AIDS', icon: Bug },
    { id: 'sec-8-verifica', label: 'Verifica & Quiz', icon: CheckCircle2 }
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
      
      {/* 1. TESTATA MONUMENTALE DEL CAPITOLO VIII */}
      <header className="bg-gradient-to-br from-red-900 via-slate-900 to-rose-950 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-white shadow-xl border border-red-800/40 relative overflow-hidden w-full">
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-10 bottom-0 text-red-500/10 font-mono font-black text-9xl select-none pointer-events-none">
          VIII
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-red-500/20 text-red-300 border border-red-400/30">
              Capitolo VIII · Trattato Integrato
            </span>
            <span className="text-xs font-mono text-red-200/70">
              Immunoediting, Immunoterapia Avanzata & Patogenesi dell'Infezione da HIV
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Immunologia Oncologica & Immunodeficienze Acquisite
          </h1>

          <p className="text-red-100/90 text-sm sm:text-base leading-relaxed max-w-3xl">
            Le frontiere più avanzate dell'immunologia biomedica contemporanea: dalla comprensione del microambiente immunosoppressorio tumorale 
            e dei meccanismi di immunoediting (le 3E: Eliminazione, Equilibrio, Evasione), alla rivoluzione terapeutica dei checkpoint inibitori (anti-PD-1, anti-CTLA-4) 
            e dei linfociti T reindirizzati mediante recettori chimerici (CAR-T), fino alla virologia immunologica dell'HIV-1, 
            con la cinetica multifasica dell'infezione, la selezione del tropismo co-recettoriale CCR5/CXCR4, l'anatomia del reservoir virale latente e le moderne strategie antiretrovirali di combinazione (cART).
          </p>

          <div className="pt-4 border-t border-red-800/60 grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-800/50">
              <span className="text-[10px] font-mono text-red-400 font-bold block">PARTE 8.1</span>
              <strong className="text-white block mt-0.5">Onco-Immunologia</strong>
              <span className="text-[11px] text-red-200/70">Immunoediting, Checkpoint & Cellule CAR-T</span>
            </div>
            <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-800/50">
              <span className="text-[10px] font-mono text-red-400 font-bold block">PARTE 8.2</span>
              <strong className="text-white block mt-0.5">Infezione da HIV-1</strong>
              <span className="text-[11px] text-red-200/70">Tropismo R5/X4, Reservoir Latente & HAART</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. SUB-BARRA DI NAVIGAZIONE RAPIDA IN-PAGE */}
      <nav className="sticky top-14 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl p-2 border border-slate-200 dark:border-slate-800 shadow-md flex items-center gap-1.5 overflow-x-auto scrollbar-thin">
        <span className="text-[11px] font-mono font-bold text-slate-500 uppercase px-2 shrink-0 flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5 text-red-600" />
          Indice Cap. VIII:
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
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-slate-755'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{sec.label}</span>
            </button>
          );
        })}
      </nav>

      {/* =========================================================================
          SEZIONE 8.1: IMMUNOLOGIA DEI TUMORI, CHECKPOINT & CAR-T
          ========================================================================= */}
      <article id="sec-8-immunologia-tumori" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400">
            <Crosshair className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              Sezione 8.1 · Immuno-Oncologia Clinica
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Il Ciclo Cancro-Immunità, Immunoediting Tumorale (Eliminazione, Equilibrio, Evasione), Inibitori dei Checkpoint & CAR-T
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            Il sistema immunitario esercita una pressione selettiva costante sulla neoplasia nascente attraverso le <strong>tre E dell'immunoediting</strong>:
            1) <strong>Eliminazione</strong>: la sorveglianza immunitaria riconosce e distrugge le cellule trasformate; 
            2) <strong>Equilibrio</strong>: cloni mutati resistenti permangono in uno stato di dormienza controllata dai linfociti T per anni; 
            3) <strong>Evasione (Escape)</strong>: la perdita delle molecole MHC-I, la sovraespressione di PD-L1 e il reclutamento di macrofagi M2 e Treg consentono la progressione clinica.
          </p>
        </div>

        {/* Simulatore Inibitori dei Checkpoint PD-1/PD-L1 e CTLA-4 */}
        <div className="not-prose pt-4 border-t border-slate-150 dark:border-slate-800">
          <InteractiveCheckpointBlockade />
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 8.2: INFEZIONE DA HIV-1 & PATOGENESI AIDS
          ========================================================================= */}
      <article id="sec-8-hiv-aids" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
            <Bug className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              Sezione 8.2 · Immunodeficienze Acquisite
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Virologia Molecolare dell'HIV-1: Glicoproteina gp120/gp41, Tropismo R5/X4, Deplezione dei Linfociti T CD4+, Reservoir & HAART
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            Il virus dell'immunodeficienza umana (HIV-1) infetta selettivamente i linfociti T helper e i macrofagi legando il recettore <strong>CD4</strong> 
            e i co-recettori chemochinici <strong>CCR5 (ceppi M-tropici R5, dominanti nella trasmissione)</strong> e <strong>CXCR4 (ceppi T-tropici X4, emergenti nella fase avanzata)</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 not-prose text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-red-600 block mb-1">CINETICA DELL'INFEZIONE</span>
              Fase acuta con picco di viremia e massiva deplezione dei linfociti T CD4+ di memoria nel GALT; seguita da una latenza clinica asintomatica 
              di 7-10 anni durante la quale la replicazione continua nei centri germinativi linfonodali; fino al collasso del pool T CD4+ (&lt;200 cellule/μL) 
              e alla comparsa delle infezioni opportunistiche indicative di AIDS conclamato.
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-red-600 block mb-1">IL RESERVOIR LATENTE & LA TERAPIA HAART</span>
              L'integrazione del provirus nel genoma dei <strong>linfociti T CD4+ resting di memoria a lungo termine</strong> costituisce 
              la barriera insormontabile per l'eradicazione definitiva. La terapia antiretrovirale combinata (cART/HAART) blocca la replicazione 
              attiva azzerando la carica virale plasmatica, ma richiede aderenza continua a vita.
            </div>
          </div>
        </div>
      </article>

      {/* =========================================================================
          SEZIONE VERIFICA & AUTOVALUTAZIONE
          ========================================================================= */}
      <section id="sec-8-verifica" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              Autovalutazione Capitolo VIII
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Verifica delle Competenze Clinico-Molecolari del Capitolo VIII
            </h2>
          </div>
        </div>

        <div className="not-prose space-y-8">
          <QuizSection
            title="Quiz Ufficiale Capitolo VIII: Immunologia dei Tumori, Checkpoint & HIV"
            customQuestions={ALL_EXAM_QUESTIONS.filter((q) => [32, 33].includes(q.lessonNumber))}
          />
        </div>
      </section>

    </div>
  );
};
