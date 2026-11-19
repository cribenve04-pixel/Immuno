/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CAPITOLO III MASTER VIEW: ATTIVAZIONE & DIFFERENZIAMENTO T/B
 * Trattato accademico a pagina unica a flusso continuo.
 * Comprende citochine, JAK-STAT, sinapsi immunologica (SMAC), centro germinativo (AID/CSR),
 * antigeni T-indipendenti, polarizzazione Th (Th1/Th2/Th17/Tfh/Treg) e citotossicità CTL.
 */

import React, { useState, useEffect } from 'react';
import {
  Zap,
  Layers,
  Activity,
  Shield,
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
  Flame,
  Radio,
  Dna,
  Users
} from 'lucide-react';

// Simulatori Interattivi Chapter 3
import { InteractiveJakStatSimulator } from '../InteractiveJakStatSimulator';
import { InteractiveCytokineMatrix } from '../InteractiveCytokineMatrix';
import { InteractiveChemokineMatrix } from '../InteractiveChemokineMatrix';
import { InteractiveSynapseSimulator } from '../InteractiveSynapseSimulator';
import { InteractiveThreeSignals } from '../InteractiveThreeSignals';
import { InteractiveGerminalCenterSimulator } from '../InteractiveGerminalCenterSimulator';
import { InteractiveClassSwitchSimulator } from '../InteractiveClassSwitchSimulator';
import { InteractivePolarizationCompass } from '../InteractivePolarizationCompass';
import { InteractiveCheckpointBlockade } from '../InteractiveCheckpointBlockade';

// Quiz & Domande d'Esame
import { ALL_EXAM_QUESTIONS } from '../../data/examQuestions';
import { QuizSection } from '../QuizSection';

interface Chapter3MasterViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
  initialSection?: string;
}

export const Chapter3MasterView: React.FC<Chapter3MasterViewProps> = ({
  isSerif = false,
  fontSize = 'normal',
  initialSection
}) => {
  const proseFontClass = isSerif ? 'font-serif' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  const [activeSubSection, setActiveSubSection] = useState<string>('sec-3-citochine');

  const SECTIONS_NAV = [
    { id: 'sec-3-citochine', label: '3.1 Citochine & JAK-STAT', icon: Radio },
    { id: 'sec-3-sinapsi-t', label: '3.2 Sinapsi Immunologica (SMAC)', icon: Zap },
    { id: 'sec-3-centro-germinativo', label: '3.3 Centro Germinativo & AID', icon: Sparkles },
    { id: 'sec-3-antigeni-ti', label: '3.4 Antigeni TI & Linfociti B-1', icon: Layers },
    { id: 'sec-3-polarizzazione-th', label: '3.5 Profili Th1/Th2/Th17 & Treg', icon: Compass },
    { id: 'sec-3-ctl-citotossici', label: '3.6 CTL Citotossici & Sinapsi Litica', icon: Target },
    { id: 'sec-3-verifica', label: 'Verifica & Quiz', icon: CheckCircle2 }
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
      
      {/* 1. TESTATA MONUMENTALE DEL CAPITOLO III */}
      <header className="bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-950 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-white shadow-xl border border-blue-800/40 relative overflow-hidden w-full">
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-10 bottom-0 text-blue-500/10 font-mono font-black text-9xl select-none pointer-events-none">
          III
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
              Capitolo III · Trattato Integrato
            </span>
            <span className="text-xs font-mono text-blue-200/70">
              Sinapsi Immunologica, Cooperazione T-B & Polarizzazione Effettrice
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Attivazione Linfocitaria & Differenziamento Effettore T/B
          </h1>

          <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed max-w-3xl">
            Dal primo contatto intimo tra cellula dendritica e linfocita T naïve fino all'architettura ultrastrutturale 
            della sinapsi SMAC, all'ipermutazione somatica guidata dall'enzima AID nei centri germinativi linfonodali, 
            e alla polarizzazione nei grandi assi funzionali Th1, Th2, Th17, Tfh e Treg.
          </p>

          <div className="pt-4 border-t border-blue-800/60 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-800/50">
              <span className="text-[10px] font-mono text-blue-400 font-bold block">PARTE 3.1</span>
              <strong className="text-white block mt-0.5">JAK-STAT</strong>
              <span className="text-[11px] text-blue-200/70">Citochine & Chemochine</span>
            </div>
            <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-800/50">
              <span className="text-[10px] font-mono text-blue-400 font-bold block">PARTE 3.2</span>
              <strong className="text-white block mt-0.5">Sinapsi T</strong>
              <span className="text-[11px] text-blue-200/70">cSMAC, pSMAC, 3 Segnali</span>
            </div>
            <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-800/50">
              <span className="text-[10px] font-mono text-blue-400 font-bold block">PARTE 3.3</span>
              <strong className="text-white block mt-0.5">Centro Germ.</strong>
              <span className="text-[11px] text-blue-200/70">Enzima AID, CSR & SHM</span>
            </div>
            <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-800/50">
              <span className="text-[10px] font-mono text-blue-400 font-bold block">PARTE 3.4</span>
              <strong className="text-white block mt-0.5">Antigeni TI</strong>
              <span className="text-[11px] text-blue-200/70">B-1, Zona Marginale & FcγRIIB</span>
            </div>
            <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-800/50">
              <span className="text-[10px] font-mono text-blue-400 font-bold block">PARTE 3.5</span>
              <strong className="text-white block mt-0.5">Profili Th</strong>
              <span className="text-[11px] text-blue-200/70">Th1/2/17, Tfh & Treg</span>
            </div>
            <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-800/50">
              <span className="text-[10px] font-mono text-blue-400 font-bold block">PARTE 3.6</span>
              <strong className="text-white block mt-0.5">CTL Litici</strong>
              <span className="text-[11px] text-blue-200/70">Perforina, Granzimi & HLH</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. SUB-BARRA DI NAVIGAZIONE RAPIDA IN-PAGE */}
      <nav className="sticky top-14 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl p-2 border border-slate-200 dark:border-slate-800 shadow-md flex items-center gap-1.5 overflow-x-auto scrollbar-thin">
        <span className="text-[11px] font-mono font-bold text-slate-500 uppercase px-2 shrink-0 flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
          Indice Cap. III:
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
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-755'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{sec.label}</span>
            </button>
          );
        })}
      </nav>

      {/* =========================================================================
          SEZIONE 3.1: CITOCHINE & SEGNALAZIONE JAK-STAT
          ========================================================================= */}
      <article id="sec-3-citochine" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
            <Radio className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Sezione 3.1 · Comunicazione Intercellulare & Trasduzione
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Citochine, Recettori di Tipo I/II, Via JAK-STAT & Chemochine con Motivo DRY
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            Le citochine sono mediatori proteici solubili caratterizzati da <strong>pleiotropia, ridondanza, sinergia e antagonismo</strong>. 
            La maggior parte delle interleuchine e degli interferoni segnala tramite recettori multimerici privi di attività catalitica intrinseca, 
            accoppiati costitutivamente a <strong>Janus Chinasi (JAK1, JAK2, JAK3, Tyk2)</strong>. La dimerizzazione recettoriale attiva le JAK, 
            che fosforilano code citoplasmatiche generando siti di ancoraggio per i domini SH2 dei fattori <strong>STAT (1-6)</strong>.
          </p>
        </div>

        <div className="not-prose pt-4 border-t border-slate-150 dark:border-slate-800">
          <InteractiveJakStatSimulator />
        </div>

        <div className="not-prose pt-6 border-t border-slate-150 dark:border-slate-800">
          <InteractiveChemokineMatrix />
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 3.2: ATTIVAZIONE LINFOCITA T & SINAPSI SMAC
          ========================================================================= */}
      <article id="sec-3-sinapsi-t" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Sezione 3.2 · Biologia della Sinapsi Immunologica
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              La Sinapsi SMAC: Segregazione Cinetica, I 3 Segnali e i Checkpoint Inibitori (CTLA-4, PD-1)
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            L'interazione tra TCR e complesso pMHC induce una riorganizzazione su scala nanometrica del citoscheletro di actina e dei lipidi di membrana, 
            formando la <strong>Sinapsi Immunologica (SMAC)</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li><strong>cSMAC (Central)</strong>: raccoglie il complesso TCR/CD3, CD4/CD8 e il segnale costimolatorio CD28-B7.</li>
            <li><strong>pSMAC (Peripheral)</strong>: anello adesivo formato dall'integrina LFA-1 legata a ICAM-1, che stabilizza il contatto.</li>
            <li><strong>dSMAC (Distal)</strong>: anello esterno da cui vengono fisicamente segregate le grandi fosfatasi inibitorie come CD45.</li>
          </ul>
        </div>

        <div className="not-prose pt-4 border-t border-slate-150 dark:border-slate-800">
          <InteractiveThreeSignals />
        </div>

        <div className="not-prose pt-6 border-t border-slate-150 dark:border-slate-800">
          <InteractiveSynapseSimulator />
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 3.3: CENTRO GERMINATIVO & ENZIMA AID
          ========================================================================= */}
      <article id="sec-3-centro-germinativo" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Sezione 3.3 · Microarchitettura del Follicolo Linfonodale
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Cooperazione T-B, Dinamica Zona Scura/Chiara ed Enzima AID (SHM & Switch Isotipico CSR)
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            Dopo l'incontro dell'antigene al confine tra follicolo e zona T, i linfociti B e i linfociti T follicolari helper (Tfh) 
            collaborano tramite la coppia recettoriale <strong>CD40-CD40L</strong>. Questo innesca la formazione del <strong>Centro Germinativo</strong>:
            nella <strong>zona scura</strong>, i centroblasti proliferano ed esprimono l'enzima <strong>AID (Activation-Induced Cytidine Deaminase)</strong>, 
            che deamina citosine in uracili nel DNA, inducendo <strong>ipermutazione somatica (SHM)</strong> nei geni variabili e 
            <strong> ricombinazione di scambio di classe (CSR)</strong> nelle regioni costanti.
          </p>
        </div>

        <div className="not-prose pt-4 border-t border-slate-150 dark:border-slate-800">
          <InteractiveGerminalCenterSimulator />
        </div>

        <div className="not-prose pt-6 border-t border-slate-150 dark:border-slate-800">
          <InteractiveClassSwitchSimulator />
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 3.4: ANTIGENI T-INDIPENDENTI & SOTTOPOPOLAZIONI B-1/MZ
          ========================================================================= */}
      <article id="sec-3-antigeni-ti" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Sezione 3.4 · Risposte Umorali Non Convenzionali
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Antigeni TI-1 e TI-2, Linfociti B-1 Peritoneali, Cellule B della Zona Marginale & FcγRIIB
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            Gli antigeni non proteici (polisaccaridi capsulari, LPS) non possono essere presentati su MHC-II e attivano i linfociti B senza l'aiuto dei linfociti T:
            <strong> TI-1</strong> (attivatori policlonali intrinseci come LPS via TLR4) e <strong>TI-2</strong> (strutture multimeriche ripetute che causano esteso cross-linking dei BCR). 
            Queste risposte sono sostenute principalmente dai <strong>linfociti B-1</strong> (cavità peritoneale e pleurica, produttori degli anticorpi naturali IgM) 
            e dai <strong>linfociti B della zona marginale splenica (MZB)</strong>.
          </p>
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 3.5: DIFFERENZIAMENTO T HELPER (Th1, Th2, Th17, Tfh, Treg)
          ========================================================================= */}
      <article id="sec-3-polarizzazione-th" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Sezione 3.5 · Paradigma di Polarizzazione Effettrice T CD4+
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Lineage Transcription Factors, Citochine Polarizzanti & Pattern Effettori (Th1, Th2, Th17, Tfh, Treg)
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            In risposta al microambiente citochinico fornito dalla cellula dendritica e dai tessuti infiammati, 
            il linfocita T CD4+ vergine attiva specifici <em>master regulator</em> trascrizionali che guidano 
            la differenziazione in sottopopolazioni effettrici mutuamente esclusive:
          </p>
        </div>

        <div className="not-prose pt-4 border-t border-slate-150 dark:border-slate-800">
          <InteractivePolarizationCompass />
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 3.6: LINFOCITI T CITOTOSSICI (CTL) & SINAPSI LITICA
          ========================================================================= */}
      <article id="sec-3-ctl-citotossici" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              Sezione 3.6 · Citotossicità Cellulo-Mediata Esecutiva
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Linfociti T Citotossici CD8+: Priming da DC Licenziate, Sinapsi Litica, Perforina/Granzimi & Sindromi HLH
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            I CTL CD8+ eliminano con precisione chirurgica le cellule infettate da virus e le cellule neoplastiche. 
            All'atto del riconoscimento specifico pMHC-I, il centrosoma (MTOC) e l'apparato di Golgi del CTL polarizzano verso il punto di contatto, 
            estrudedo il contenuto dei granuli litici in uno spazio confinato protetto: la <strong>sinapsi litica</strong>.
            La <strong>perforina</strong> polimerizza in presenza di calcio formando un canale transmembrana che consente l'ingresso 
            dei <strong>granzimi (A e B)</strong>: il granzima B taglia e attiva la caspasi-3 e la proteina pro-apoptotica Bid, 
            innescando l'esplosione apoptotica mitocondriale priva di rilascio flogogeno.
          </p>
        </div>
      </article>

      {/* =========================================================================
          SEZIONE VERIFICA & AUTOVALUTAZIONE
          ========================================================================= */}
      <section id="sec-3-verifica" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Autovalutazione Capitolo III
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Verifica delle Competenze Clinico-Molecolari del Capitolo III
            </h2>
          </div>
        </div>

        <div className="not-prose space-y-8">
          <QuizSection
            title="Quiz Ufficiale Capitolo III: Sinapsi, Centri Germinativi & Differenziamento Th"
            customQuestions={ALL_EXAM_QUESTIONS.filter((q) => [2, 12, 13, 14, 19, 20].includes(q.lessonNumber))}
          />
        </div>
      </section>

    </div>
  );
};
