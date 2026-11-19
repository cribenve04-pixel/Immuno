/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CAPITOLO VI MASTER VIEW: IPERSENSIBILITÀ & IMMUNOPATOLOGIA
 * Trattato accademico a pagina unica a flusso continuo.
 * Comprende la classificazione clinica di Gell e Coombs:
 * - Tipo I: IgE, recettore FcεRI, degranulazione mastocitaria, asma & anafilassi
 * - Tipo II: danno citotossico anticorpo-mediato (ADCC, complemento, recettori)
 * - Tipo III: immunocomplessi circolanti, vasculiti & malattia da siero
 * - Tipo IV: ipersensibilità ritardata cellulo-mediata (DTH), granulomi & celiachia
 */

import React, { useState, useEffect } from 'react';
import {
  AlertTriangle,
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
  Wind
} from 'lucide-react';

// Quiz & Domande d'Esame
import { ALL_EXAM_QUESTIONS } from '../../data/examQuestions';
import { QuizSection } from '../QuizSection';

interface Chapter6MasterViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
  initialSection?: string;
}

export const Chapter6MasterView: React.FC<Chapter6MasterViewProps> = ({
  isSerif = false,
  fontSize = 'normal',
  initialSection
}) => {
  const proseFontClass = isSerif ? 'font-serif' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  const [activeSubSection, setActiveSubSection] = useState<string>('sec-6-tipo-1');

  const SECTIONS_NAV = [
    { id: 'sec-6-tipo-1', label: '6.1 Tipo I: IgE, Mastociti & Asma', icon: Wind },
    { id: 'sec-6-tipo-2-3', label: '6.2 Tipo II & III: Citotossicità & IC', icon: ShieldAlert },
    { id: 'sec-6-tipo-4', label: '6.3 Tipo IV: DTH, Granulomi & Celiachia', icon: Flame },
    { id: 'sec-6-verifica', label: 'Verifica & Quiz', icon: CheckCircle2 }
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
      
      {/* 1. TESTATA MONUMENTALE DEL CAPITOLO VI */}
      <header className="bg-gradient-to-br from-rose-900 via-slate-900 to-red-950 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-white shadow-xl border border-rose-800/40 relative overflow-hidden w-full">
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-10 bottom-0 text-rose-500/10 font-mono font-black text-9xl select-none pointer-events-none">
          VI
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-400/30">
              Capitolo VI · Trattato Integrato
            </span>
            <span className="text-xs font-mono text-rose-200/70">
              Classificazione di Gell & Coombs: Danno Tessutale Immuno-Mediato
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Ipersensibilità & Immunopatologia: Meccanismi di Danno Tessutale
          </h1>

          <p className="text-rose-100/90 text-sm sm:text-base leading-relaxed max-w-3xl">
            Quando la reazione difensiva supera i limiti dell'omeostasi e genera distruzione tissutale: 
            dalla degranulazione immediata mastocitaria mediata da IgE (anafilassi e asma bronchiale), 
            alle reazioni citotossiche organo-specifiche da anticorpi IgG/IgM (miastenia, Basedow, eritroblastosi), 
            fino al deposito intravascolare di immunocomplessi (vasculiti da Tipo III) e alla risposta cellulo-mediata ritardata (DTH, granulomi e celiachia).
          </p>

          <div className="pt-4 border-t border-rose-800/60 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-800/50">
              <span className="text-[10px] font-mono text-rose-400 font-bold block">PARTE 6.1</span>
              <strong className="text-white block mt-0.5">Tipo I (Immediata)</strong>
              <span className="text-[11px] text-rose-200/70">IgE, FcεRI, Istamina, Asma</span>
            </div>
            <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-800/50">
              <span className="text-[10px] font-mono text-rose-400 font-bold block">PARTE 6.2</span>
              <strong className="text-white block mt-0.5">Tipo II & III</strong>
              <span className="text-[11px] text-rose-200/70">Citotossicità & Immunocomplessi</span>
            </div>
            <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-800/50">
              <span className="text-[10px] font-mono text-rose-400 font-bold block">PARTE 6.3</span>
              <strong className="text-white block mt-0.5">Tipo IV (Cellulare)</strong>
              <span className="text-[11px] text-rose-200/70">DTH, Granulomi & Celiachia</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. SUB-BARRA DI NAVIGAZIONE RAPIDA IN-PAGE */}
      <nav className="sticky top-14 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl p-2 border border-slate-200 dark:border-slate-800 shadow-md flex items-center gap-1.5 overflow-x-auto scrollbar-thin">
        <span className="text-[11px] font-mono font-bold text-slate-500 uppercase px-2 shrink-0 flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5 text-rose-600" />
          Indice Cap. VI:
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
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-rose-50 dark:hover:bg-slate-755'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{sec.label}</span>
            </button>
          );
        })}
      </nav>

      {/* =========================================================================
          SEZIONE 6.1: IPERSENSIBILITÀ DI TIPO I (IMMEDIATA)
          ========================================================================= */}
      <article id="sec-6-tipo-1" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
            <Wind className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              Sezione 6.1 · Risposta Allergica IgE-Mediata
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Ipersensibilità di Tipo I: Allergeni, Sensibilizzazione, Recettore FcεRI ad Alta Affinità & Fisiopatologia dell'Asma
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            L'ipersensibilità immediata è scatenata dall'interazione tra allergeni bivalenti e <strong>IgE pre-formate</strong> 
            legate con affinità picomolare (Kd ≈ 10⁻¹⁰ M) al recettore <strong>FcεRI</strong> sulla superficie di mastociti tissutali e basofili.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 not-prose text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-rose-600 block mb-1">FASE PRECOCE (Minuti)</span>
              Il cross-linking dei recettori innesca il rilascio esocitotico immediato di granuli contenenti <strong>istamina, eparina, triptasi</strong> 
              e la sintesi de novo di <strong>leucotrieni (LTC4, LTD4, LTE4)</strong> e prostaglandina <strong>PGD2</strong>: 
              vasodilatazione, aumento drammatico della permeabilità capillare, broncocostrizione e ipersecrezione mucosa.
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-rose-600 block mb-1">FASE TARDIVA (4-8 Ore)</span>
              Reclutamento attivo di <strong>eosinofili, basofili e linfociti Th2</strong> guidato da eotassina (CCL11) e IL-5. 
              Gli eosinofili rilasciano la proteina basica maggiore (MBP) e perossidasi eosinofila (EPO), cronicizzando il rimodellamento bronchiale nell'asma.
            </div>
          </div>
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 6.2: IPERSENSIBILITÀ DI TIPO II & TIPO III
          ========================================================================= */}
      <article id="sec-6-tipo-2-3" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              Sezione 6.2 · Citotossicità Anticorpale & Vasculiti
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Ipersensibilità di Tipo II (Citotossica Organo-Specifica) & Tipo III (da Immunocomplessi Circolanti)
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            <strong>Tipo II</strong>: anticorpi IgG o IgM diretti contro antigeni fissi di membrana o della matrice extracellulare causano danno tramite:
            1) attivazione del complemento (C5b-9 e opsonizzazione C3b); 2) citotossicità cellulare anticorpo-dipendente (ADCC via FcγRIII delle cellule NK); 
            3) alterazione funzionale senza citolisi (es. stimolazione recettoriale nel Basedow via anti-TSHR, o blocco recettoriale nella Miastenia Gravis via anti-AChR).
          </p>
          <p>
            <strong>Tipo III</strong>: quando gli immunocomplessi solubili si formano in lieve eccesso di antigene, non vengono eliminati dai macrofagi epato-splenici 
            e si depositano a livello delle membrane basali fenestrate (glomeruli renali, sinovie articolari, vasi cutanei), 
            fissando il complemento e reclutando neutrofili che rilasciano enzimi lisosomiali nella parete vasale (<strong>vasculite leucocitoclastica</strong>).
          </p>
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 6.3: IPERSENSIBILITÀ DI TIPO IV (CELLULARE / RITARDATA)
          ========================================================================= */}
      <article id="sec-6-tipo-4" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
              Sezione 6.3 · Risposta Cellulo-Mediata Ritardata
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Ipersensibilità di Tipo IV: Reazione di Mantoux, Dermatite da Contatto, Formazione del Granuloma & Celiachia
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            L'ipersensibilità ritardata (DTH) non richiede anticorpi ed è mediata esclusivamente da <strong>linfociti T sensibilizzati</strong> (Th1, Th17 e CTL CD8+). 
            Il picco clinico compare dopo 24-72 ore dall'esposizione all'antigene:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Reazione Tubercolinica (Mantoux)</strong>: i macrofagi cutanei presentano PPD ai linfociti Th1 di memoria, che secernono IFN-γ reclutando monociti e causando indurimento eritematoso.</li>
            <li><strong>Granuloma Immunitario</strong>: quando il patogeno (es. <em>Mycobacterium tuberculosis</em>) resiste alla lisi macrofagica, l'IFN-γ continuo induce la trasformazione dei macrofagi in <strong>cellule epitelioidi</strong> e cellule giganti multinucleate di Langhans circondate da un anello di linfociti T.</li>
            <li><strong>Malattia Celiaca</strong>: la gliadina deaminata dall'enzima transglutaminasi tissutale (tTG) si ancora con altissima affinità nelle tasche delle molecole <strong>HLA-DQ2 e HLA-DQ8</strong>, scatenando una risposta Th1/CTL che distrugge i villi intestinali con atrofia e iperplasia delle cripte.</li>
          </ul>
        </div>
      </article>

      {/* =========================================================================
          SEZIONE VERIFICA & AUTOVALUTAZIONE
          ========================================================================= */}
      <section id="sec-6-verifica" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              Autovalutazione Capitolo VI
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Verifica delle Competenze Clinico-Molecolari del Capitolo VI
            </h2>
          </div>
        </div>

        <div className="not-prose space-y-8">
          <QuizSection
            title="Quiz Ufficiale Capitolo VI: Ipersensibilità I-IV & Immunopatologia Clinica"
            customQuestions={ALL_EXAM_QUESTIONS.filter((q) => [26, 27, 28].includes(q.lessonNumber))}
          />
        </div>
      </section>

    </div>
  );
};
