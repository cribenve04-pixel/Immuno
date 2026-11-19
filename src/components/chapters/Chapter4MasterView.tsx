/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CAPITOLO IV MASTER VIEW: MECCANISMI EFFETTORI & COMPLEMENTO
 * Trattato accademico a pagina unica a flusso continuo.
 * Comprende la cascata del complemento (vie classica, lectinica, alternativa, MAC),
 * i recettori del complemento CR1-4, i recettori Fc, e le biotecnologie anticorpali (mAbs, BiTE, ADC).
 */

import React, { useState, useEffect } from 'react';
import {
  Flame,
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
  Boxes
} from 'lucide-react';

// Simulatori Interattivi Chapter 4
import { InteractiveComplementSimulator } from '../InteractiveComplementSimulator';

// Quiz & Domande d'Esame
import { ALL_EXAM_QUESTIONS } from '../../data/examQuestions';
import { QuizSection } from '../QuizSection';

interface Chapter4MasterViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
  initialSection?: string;
}

export const Chapter4MasterView: React.FC<Chapter4MasterViewProps> = ({
  isSerif = false,
  fontSize = 'normal',
  initialSection
}) => {
  const proseFontClass = isSerif ? 'font-serif' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  const [activeSubSection, setActiveSubSection] = useState<string>('sec-4-vie-complemento');

  const SECTIONS_NAV = [
    { id: 'sec-4-vie-complemento', label: '4.1 Vie del Complemento & MAC', icon: Flame },
    { id: 'sec-4-recettori-complemento', label: '4.2 Recettori CR1-4 & Clearance', icon: Shield },
    { id: 'sec-4-effettori-anticorpi', label: '4.3 Recettori Fc & Isotipi', icon: Activity },
    { id: 'sec-4-monoclonali-terapeutici', label: '4.4 Monoclonali, BiTE & ADC', icon: Pill },
    { id: 'sec-4-verifica', label: 'Verifica & Quiz', icon: CheckCircle2 }
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
      
      {/* 1. TESTATA MONUMENTALE DEL CAPITOLO IV */}
      <header className="bg-gradient-to-br from-amber-900 via-slate-900 to-orange-950 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-white shadow-xl border border-amber-800/40 relative overflow-hidden w-full">
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-10 bottom-0 text-amber-500/10 font-mono font-black text-9xl select-none pointer-events-none">
          IV
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30">
              Capitolo IV · Trattato Integrato
            </span>
            <span className="text-xs font-mono text-amber-200/70">
              Cascata del Complemento, Recettori Fc & Biotecnologie Farmaceutiche
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Meccanismi Effettori Umorali: La Cascata del Complemento, i Recettori Fc e l'Ingegneria Anticorpale
          </h1>

          <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed max-w-3xl">
            Le armi biochimiche del siero: attivazione a cascata enzimatica delle vie classica, lectinica e alternativa; 
            assemblaggio del poro litico MAC (C5b-9) e sua fine regolazione protettiva (C1-INH, DAF, CD59); biologia dei recettori complementari 
            e Fc cellulari (FcγR, FcRn, FcεR); e rivoluzione farmacologica degli anticorpi monoclonali di nuova generazione, 
            costrutti bispecifici BiTE e coniugati farmaco-anticorpo (ADC).
          </p>

          <div className="pt-4 border-t border-amber-800/60 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-amber-950/60 border border-amber-800/50">
              <span className="text-[10px] font-mono text-amber-400 font-bold block">PARTE 4.1</span>
              <strong className="text-white block mt-0.5">Complemento</strong>
              <span className="text-[11px] text-amber-200/70">Vie Classica/Lect/Alt, MAC</span>
            </div>
            <div className="p-2.5 rounded-lg bg-amber-950/60 border border-amber-800/50">
              <span className="text-[10px] font-mono text-amber-400 font-bold block">PARTE 4.2</span>
              <strong className="text-white block mt-0.5">Recettori CR1-4</strong>
              <span className="text-[11px] text-amber-200/70">Opsonizzazione & Clearance IC</span>
            </div>
            <div className="p-2.5 rounded-lg bg-amber-950/60 border border-amber-800/50">
              <span className="text-[10px] font-mono text-amber-400 font-bold block">PARTE 4.3</span>
              <strong className="text-white block mt-0.5">Recettori Fc</strong>
              <span className="text-[11px] text-amber-200/70">FcγR, ADCC, FcRn & pIgR</span>
            </div>
            <div className="p-2.5 rounded-lg bg-amber-950/60 border border-amber-800/50">
              <span className="text-[10px] font-mono text-amber-400 font-bold block">PARTE 4.4</span>
              <strong className="text-white block mt-0.5">Biotecnologie</strong>
              <span className="text-[11px] text-amber-200/70">mAbs, BiTE, CAR-T & ADC</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. SUB-BARRA DI NAVIGAZIONE RAPIDA IN-PAGE */}
      <nav className="sticky top-14 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl p-2 border border-slate-200 dark:border-slate-800 shadow-md flex items-center gap-1.5 overflow-x-auto scrollbar-thin">
        <span className="text-[11px] font-mono font-bold text-slate-500 uppercase px-2 shrink-0 flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5 text-amber-600" />
          Indice Cap. IV:
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
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-755'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{sec.label}</span>
            </button>
          );
        })}
      </nav>

      {/* =========================================================================
          SEZIONE 4.1: SISTEMA DEL COMPLEMENTO (VIE & MAC)
          ========================================================================= */}
      <article id="sec-4-vie-complemento" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Sezione 4.1 · Cascata Enzimatica del Complemento
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Vie Classica, Lectinica e Alternativa: C3 Convertasi, C5 Convertasi e Assemblaggio del Poro MAC (C5b-9)
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            Il complemento è costituito da oltre 30 zimogeni plasmatici sintetizzati principalmente dal fegato. 
            L'attivazione converge su una reazione centrale amplificatrice: la scissione proteolitica della componente <strong>C3</strong> 
            in <strong>C3a</strong> (potente anafilatossina flogogena) e <strong>C3b</strong> (opsonina che si ancora covalentemente tramite legame tioestere).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4 not-prose text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-amber-600 block mb-1">VIA CLASSICA</span>
              Innescata dal complesso C1 (C1q + C1r₂s₂) che riconosce porzioni Fc di IgM o IgG aggregate. Forma la C3 convertasi <strong>C4b2a</strong>.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-amber-600 block mb-1">VIA LECTINICA</span>
              Innescata da MBL o ficoline complessate a MASP-1/MASP-2 che legano residui di mannosio microbici. Forma la C3 convertasi <strong>C4b2a</strong>.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-amber-600 block mb-1">VIA ALTERNATIVA</span>
              Sempre attiva a basso livello via <em>tick-over</em> spontaneo del C3. In presenza di superfici microbiche prive di acido sialico, stabilizza la convertasi <strong>C3bBb</strong> con properdina.
            </div>
          </div>
        </div>

        {/* Simulatore Complemento Interattivo */}
        <div className="not-prose pt-4 border-t border-slate-150 dark:border-slate-800">
          <InteractiveComplementSimulator />
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 4.2: RECETTORI CR1-CR4 & CLEARANCE IMMUNOCOMPLESSI
          ========================================================================= */}
      <article id="sec-4-recettori-complemento" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Sezione 4.2 · Opsonizzazione & Clearance
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Recettori del Complemento (CR1-CR4), Trasporto Eritrocitario & Immunoevasione Batterica
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            I frammenti opsonizzanti C3b e iC3b sono riconosciuti dai recettori cellulari della famiglia CR:
            <strong> CR1 (CD35)</strong> espresso sugli eritrociti lega gli immunocomplessi opsonizzati e li trasporta 
            alla milza e al fegato, dove i macrofagi residenti li fagocitano senza distruggere il globulo rosso.
            I recettori <strong>CR3 (CD11b/CD18, Mac-1)</strong> e <strong>CR4 (CD11c/CD18)</strong> mediano l'ingestione fagocitaria diretta da parte di neutrofili e monociti.
          </p>
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 4.3: FUNZIONI EFFETTRICI DEGLI ANTICORPI & RECETTORI Fc
          ========================================================================= */}
      <article id="sec-4-effettori-anticorpi" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Sezione 4.3 · Connessione Umorale-Cellulare
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Recettori FcγR (I, IIA, IIB, IIIA), ADCC mediata da NK, Riciclo FcRn & Transcitosi pIgR
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            La diversità degli isotipi (IgM, IgD, IgG1-4, IgA1-2, IgE) riflette l'adattamento funzionale della risposta umorale:
            <strong> FcγRI (CD64)</strong> è un recettore ad altissima affinità espresso sui macrofagi per la fagocitosi; 
            <strong> FcγRIIIA (CD16)</strong> sulle cellule NK media la <strong>citotossicità cellulare anticorpo-dipendente (ADCC)</strong>; 
            <strong> FcγRIIB (CD32b)</strong> è l'unico recettore inibitorio dotato di motivo ITIM che spegne la proliferazione B; 
            e il <strong>recettore neonatale FcRn</strong> salva le IgG dal catabolismo lisosomiale, conferendo loro un'emivita plasmatica eccezionale di 21 giorni.
          </p>
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 4.4: BIOTECNOLOGIE ANTICORPALI: MONOCLONALI, BITE & ADC
          ========================================================================= */}
      <article id="sec-4-monoclonali-terapeutici" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400">
            <Pill className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
              Sezione 4.4 · Immunofarmacologia Clinica
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Dagli Anticorpi Murini ai Completamente Umani: Ingegneria Fc, Costrutti Bispecifici (BiTE) & Coniugati Farmaco-Anticorpo (ADC)
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            L'ingegneria genetica ha rivoluzionato l'uso terapeutico degli anticorpi:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Chimerici (-ximab, es. Rituximab)</strong>: 33% murini (solo regioni variabili), 67% umani.</li>
            <li><strong>Umanizzati (-zumab, es. Trastuzumab)</strong>: solo i loop CDR murini innestati su framework umano (95% umano).</li>
            <li><strong>Completamente Umani (-umab, es. Nivolumab, Pembrolizumab)</strong>: prodotti in topi transgenici o phage display (100% umano).</li>
            <li><strong>Costrutti Bispecifici (BiTE, es. Blinatumomab)</strong>: due scFv legati che avvicinano fisicamente CD3 dei linfociti T a CD19 sui blasti leucemici.</li>
            <li><strong>Antibody-Drug Conjugates (ADC, es. Trastuzumab emtansine)</strong>: veicolano chemioterapici citotossici direttamente all'interno delle cellule neoplastiche bersaglio.</li>
          </ul>
        </div>
      </article>

      {/* =========================================================================
          SEZIONE VERIFICA & AUTOVALUTAZIONE
          ========================================================================= */}
      <section id="sec-4-verifica" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Autovalutazione Capitolo IV
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Verifica delle Competenze Clinico-Molecolari del Capitolo IV
            </h2>
          </div>
        </div>

        <div className="not-prose space-y-8">
          <QuizSection
            title="Quiz Ufficiale Capitolo IV: Sistema del Complemento & Recettori Fc"
            customQuestions={ALL_EXAM_QUESTIONS.filter((q) => [15, 16, 17, 18].includes(q.lessonNumber))}
          />
        </div>
      </section>

    </div>
  );
};
