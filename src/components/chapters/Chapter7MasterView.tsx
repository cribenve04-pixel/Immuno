/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CAPITOLO VII MASTER VIEW: TOLLERANZA & AUTOIMMUNITÀ
 * Trattato accademico a pagina unica a flusso continuo.
 * Comprende:
 * - Immunologia dei trapianti d'organo e HSCT (alloriconoscimento diretto/indiretto, GVHD, rigetto iperacuto/acuto/cronico)
 * - Meccanismi di tolleranza centrale e periferica (anergia, soppressione Treg Foxp3, delezioni clonali)
 * - Sindromi monogeniche da rottura della tolleranza (APS-1/AIRE, IPEX/Foxp3, ALPS/Fas)
 * - Grandi patologie autoimmuni (LES, T1D, Sclerosi Multipla, AR) e dimorfismo di genere (lncRNA Xist)
 */

import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
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
  Heart,
  Scale,
  Users
} from 'lucide-react';

// Quiz & Domande d'Esame
import { ALL_EXAM_QUESTIONS } from '../../data/examQuestions';
import { QuizSection } from '../QuizSection';

interface Chapter7MasterViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
  initialSection?: string;
}

export const Chapter7MasterView: React.FC<Chapter7MasterViewProps> = ({
  isSerif = false,
  fontSize = 'normal',
  initialSection
}) => {
  const proseFontClass = isSerif ? 'font-serif' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  const [activeSubSection, setActiveSubSection] = useState<string>('sec-7-trapianti-gvhd');

  const SECTIONS_NAV = [
    { id: 'sec-7-trapianti-gvhd', label: '7.1 Trapianti, HSCT & GVHD', icon: Heart },
    { id: 'sec-7-tolleranza-treg', label: '7.2 Tolleranza & Sindromi (IPEX/APS-1)', icon: Scale },
    { id: 'sec-7-malattie-autoimmuni', label: '7.3 Autoimmunità (LES, T1D, SM & Xist)', icon: ShieldAlert },
    { id: 'sec-7-verifica', label: 'Verifica & Quiz', icon: CheckCircle2 }
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
      
      {/* 1. TESTATA MONUMENTALE DEL CAPITOLO VII */}
      <header className="bg-gradient-to-br from-purple-900 via-slate-900 to-violet-950 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-white shadow-xl border border-purple-800/40 relative overflow-hidden w-full">
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-10 bottom-0 text-purple-500/10 font-mono font-black text-9xl select-none pointer-events-none">
          VII
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-400/30">
              Capitolo VII · Trattato Integrato
            </span>
            <span className="text-xs font-mono text-purple-200/70">
              Mantenimento del Self, Alloriconoscimento & Malattie Autoimmuni
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Tolleranza Immunologica, Trapianti e Malattie Autoimmuni
          </h1>

          <p className="text-purple-100/90 text-sm sm:text-base leading-relaxed max-w-3xl">
            I sofisticati meccanismi che impediscono al sistema immunitario di distruggere i tessuti propri e le conseguenze cliniche 
            della loro rottura: dall'alloriconoscimento diretto e indiretto nei trapianti solidi e nella Graft-versus-Host Disease (GVHD), 
            ai circuiti di tolleranza periferica dominati dai linfociti Treg Foxp3+ e dall'asse CTLA-4, fino alle sindromi monogeniche (APS-1, IPEX, ALPS), 
            alle grandi malattie autoimmuni multifattoriali (LES, Diabete Tipo 1, Sclerosi Multipla) e al recente dimorfismo biologico legato all'RNA non codificante Xist.
          </p>

          <div className="pt-4 border-t border-purple-800/60 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-800/50">
              <span className="text-[10px] font-mono text-purple-400 font-bold block">PARTE 7.1</span>
              <strong className="text-white block mt-0.5">Trapianti & GVHD</strong>
              <span className="text-[11px] text-purple-200/70">Alloriconoscimento & Rigetto</span>
            </div>
            <div className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-800/50">
              <span className="text-[10px] font-mono text-purple-400 font-bold block">PARTE 7.2</span>
              <strong className="text-white block mt-0.5">Tolleranza & Treg</strong>
              <span className="text-[11px] text-purple-200/70">Foxp3, CTLA-4, APS-1 & IPEX</span>
            </div>
            <div className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-800/50">
              <span className="text-[10px] font-mono text-purple-400 font-bold block">PARTE 7.3</span>
              <strong className="text-white block mt-0.5">Autoimmunità</strong>
              <span className="text-[11px] text-purple-200/70">LES, T1D, SM & Dimorfismo Xist</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. SUB-BARRA DI NAVIGAZIONE RAPIDA IN-PAGE */}
      <nav className="sticky top-14 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl p-2 border border-slate-200 dark:border-slate-800 shadow-md flex items-center gap-1.5 overflow-x-auto scrollbar-thin">
        <span className="text-[11px] font-mono font-bold text-slate-500 uppercase px-2 shrink-0 flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5 text-purple-600" />
          Indice Cap. VII:
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
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-slate-755'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{sec.label}</span>
            </button>
          );
        })}
      </nav>

      {/* =========================================================================
          SEZIONE 7.1: TRAPIANTI D'ORGANO, HSCT & GVHD
          ========================================================================= */}
      <article id="sec-7-trapianti-gvhd" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
            <Heart className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Sezione 7.1 · Immunologia dei Trapianti
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Alloriconoscimento Diretto e Indiretto, Rigetto Iperacuto/Acuto/Cronico e Graft-versus-Host Disease (GVHD)
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            Il rigetto dei trapianti allogenici è innescato dalla reazione dei linfociti T del ricevente contro le molecole HLA non-self del donatore:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 not-prose text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-purple-600 block mb-1">ALLORICONOSCIMENTO DIRETTO</span>
              I linfociti T del ricevente riconoscono intatte le molecole HLA allogeniche esposte sulla superficie delle cellule dendritiche passeggere del donatore. 
              Coinvolge una frequenza clonale elevatissima (fino all'1-10% dei linfociti T circolanti) ed è responsabile del <strong>rigetto acuto cellulare</strong>.
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-purple-600 block mb-1">ALLORICONOSCIMENTO INDIRETTO</span>
              Le APC del ricevente internalizzano le molecole HLA allogeniche del donatore, le processano e le presentano come normali peptidi esogeni su HLA self. 
              Sostiene la produzione di alloanticorpi e guida il <strong>rigetto cronico vascolare</strong> con arteriosclerosi accelerata del graft.
            </div>
          </div>
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 7.2: TOLLERANZA CENTRALE/PERIFERICA & SINDROMI MONOGENICHE
          ========================================================================= */}
      <article id="sec-7-tolleranza-treg" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Sezione 7.2 · Checkpoint di Autoregolazione
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Linfociti Treg CD4+CD25+Foxp3+, Asse CTLA-4/B7, Anergia e Sindromi Monogeniche (APS-1, IPEX, ALPS)
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            I cloni autoreattivi sfuggiti alla selezione negativa timica vengono neutralizzati in periferia da molteplici barriere di sicurezza:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Anergia Clonale</strong>: riconoscimento dell'antigene in assenza del secondo segnale di costimolazione B7-CD28.</li>
            <li><strong>Soppressione Attiva dai Linfociti Treg (Foxp3+)</strong>: consumano avidamente IL-2 (tramite CD25 ad alta affinità), producono citochine soppressorie (IL-10, TGF-β, IL-35) e internalizzano/degradano le molecole B7 delle APC tramite trans-endocitosi guidata da <strong>CTLA-4</strong>.</li>
            <li><strong>Sindrome IPEX</strong>: mutazione emizigote del gene Foxp3 sul cromosoma X; nei neonati maschi provoca enteropatia secretoria fulminante, diabete neonatale ed eczema esteso per totale assenza di Treg funzionali.</li>
            <li><strong>Sindrome ALPS</strong>: mutazioni nella via Fas/FasL che impediscono l'apoptosi indotta da attivazione (AICD), causando linfoadenopatia massiva e splenomegalia da accumulo di linfociti T doppi negativi (CD4-CD8-).</li>
          </ul>
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 7.3: MALATTIE AUTOIMMUNI SISTEMICHE & DIMORFISMO XIST
          ========================================================================= */}
      <article id="sec-7-malattie-autoimmuni" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              Sezione 7.3 · Eziopatogenesi Multifattoriale
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              LES (Lupus Eritematoso Sistemico), Diabete Tipo 1, Sclerosi Multipla e il Ruolo del Complesso lncRNA Xist
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            Le malattie autoimmuni colpiscono in modo sproporzionato il sesso femminile (rapporto fino a 9:1 nel LES). 
            Oltre al contributo degli estrogeni, una recente scoperta scientifica di portata fondamentale ha identificato 
            il complesso ribonucleoproteico del long non-coding RNA <strong>Xist</strong> (responsabile dell'inattivazione del cromosoma X) 
            come uno dei principali stimolatori dell'autoimmunità: le proteine che si associano fisicamente a Xist 
            agiscono come potenti autoantigeni in individui geneticamente predisposti.
          </p>
        </div>
      </article>

      {/* =========================================================================
          SEZIONE VERIFICA & AUTOVALUTAZIONE
          ========================================================================= */}
      <section id="sec-7-verifica" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Autovalutazione Capitolo VII
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Verifica delle Competenze Clinico-Molecolari del Capitolo VII
            </h2>
          </div>
        </div>

        <div className="not-prose space-y-8">
          <QuizSection
            title="Quiz Ufficiale Capitolo VII: Tolleranza, Trapianti & Malattie Autoimmuni"
            customQuestions={ALL_EXAM_QUESTIONS.filter((q) => [29, 30, 31].includes(q.lessonNumber))}
          />
        </div>
      </section>

    </div>
  );
};
