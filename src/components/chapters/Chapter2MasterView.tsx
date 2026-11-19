/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CAPITOLO II MASTER VIEW: BASI MOLECOLARI, RICOMBINAZIONE V(D)J, MHC & SELEZIONE LINFOCITARIA
 * Trattato accademico continuo a pagina unica. Unifica l'ontogenesi B e T, la genetica HLA,
 * la biochimica del riarrangiamento somatico e la presentazione antigenica.
 */

import React, { useState, useEffect } from 'react';
import {
  Dna,
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
  ExternalLink,
  ChevronDown,
  FileText,
  Sliders,
  RotateCw,
  HelpCircle,
  Scissors
} from 'lucide-react';

// Simulatori Interattivi Chapter 2
import { InteractiveBcrSignalingSimulator } from '../InteractiveBcrSignalingSimulator';
import { InteractiveAntibodyDigestionSimulator } from '../InteractiveAntibodyDigestionSimulator';
import { InteractiveOntogenyChart } from '../InteractiveOntogenyChart';
import { InteractiveBcellToleranceSimulator } from '../InteractiveBcellToleranceSimulator';
import { InteractiveVdjRecombinationSimulator } from '../InteractiveVdjRecombinationSimulator';
import { InteractiveScidMolecularSimulator } from '../InteractiveScidMolecularSimulator';
import { InteractiveHlaGeneticsSimulator } from '../InteractiveHlaGeneticsSimulator';
import { InteractiveHlaInheritanceSimulator } from '../InteractiveHlaInheritanceSimulator';
import { InteractiveMhcPocketSimulator } from '../InteractiveMhcPocketSimulator';
import { InteractiveProcessingPathwaysSimulator } from '../InteractiveProcessingPathwaysSimulator';
import { InteractiveCrossPresentationSimulator } from '../InteractiveCrossPresentationSimulator';
import { InteractiveThymicSelectionSimulator } from '../InteractiveThymicSelectionSimulator';

// Quiz & Domande d'Esame
import { ALL_EXAM_QUESTIONS } from '../../data/examQuestions';
import { QuizSection } from '../QuizSection';

interface Chapter2MasterViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
  initialSection?: string;
}

export const Chapter2MasterView: React.FC<Chapter2MasterViewProps> = ({
  isSerif = false,
  fontSize = 'normal',
  initialSection
}) => {
  const proseFontClass = isSerif ? 'font-serif' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  const [activeSubSection, setActiveSubSection] = useState<string>('sec-2-bcr');

  const SECTIONS_NAV = [
    { id: 'sec-2-bcr', label: '2.1 BCR & Immunoglobuline', icon: Shield },
    { id: 'sec-2-ontogenesi-b', label: '2.2 Ontogenesi B Midollare', icon: Layers },
    { id: 'sec-2-vdj', label: '2.3 Ricombinazione V(D)J & SCID', icon: Scissors },
    { id: 'sec-2-hla', label: '2.4 Genetica HLA & Tasche MHC', icon: Dna },
    { id: 'sec-2-processazione', label: '2.5 Vie di Processazione & Cross', icon: Activity },
    { id: 'sec-2-selezione-t', label: '2.6 Selezione Timica T & AIRE', icon: Target },
    { id: 'sec-2-verifica', label: 'Verifica & Quiz', icon: CheckCircle2 }
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
      
      {/* 1. TESTATA MONUMENTALE DEL CAPITOLO II */}
      <header className="bg-gradient-to-br from-indigo-900 via-slate-900 to-violet-950 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-white shadow-xl border border-indigo-800/40 relative overflow-hidden w-full">
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-10 bottom-0 text-indigo-500/10 font-mono font-black text-9xl select-none pointer-events-none">
          II
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
              Capitolo II · Trattato Integrato
            </span>
            <span className="text-xs font-mono text-indigo-200/70">
              Genetica dei Recettori Antigenici, MHC & Checkpoint di Sviluppo
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Basi Molecolari della Diversità: Ricombinazione V(D)J, Complesso HLA e Maturazione Linfocitaria
          </h1>

          <p className="text-indigo-100/90 text-sm sm:text-base leading-relaxed max-w-3xl">
            Come fa l'organismo a generare oltre 10¹¹ specificità recettoriali partendo da un genoma finito? 
            Questo capitolo esplora la fisica e la biochimica del riconoscimento molecolare: la struttura quaternaria 
            degli anticorpi, la macchina enzimatica di riarrangiamento somatico RAG1/2-TdT, l'architettura polimorfa 
            del locus HLA, le vie di processazione TAP/endosomiale e i severi checkpoint di selezione centrale nel timo e nel midollo.
          </p>

          {/* Mappa Concettuale ad Albero Sintetica */}
          <div className="pt-4 border-t border-indigo-800/60 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-indigo-950/60 border border-indigo-800/50">
              <span className="text-[10px] font-mono text-indigo-400 font-bold block">PARTE 2.1</span>
              <strong className="text-white block mt-0.5">BCR & Ig</strong>
              <span className="text-[11px] text-indigo-200/70">Fab, Fc, FcRn, Lyn/Syk</span>
            </div>
            <div className="p-2.5 rounded-lg bg-indigo-950/60 border border-indigo-800/50">
              <span className="text-[10px] font-mono text-indigo-400 font-bold block">PARTE 2.2</span>
              <strong className="text-white block mt-0.5">Ontogenesi B</strong>
              <span className="text-[11px] text-indigo-200/70">Pre-BCR, Editing recettoriale</span>
            </div>
            <div className="p-2.5 rounded-lg bg-indigo-950/60 border border-indigo-800/50">
              <span className="text-[10px] font-mono text-indigo-400 font-bold block">PARTE 2.3</span>
              <strong className="text-white block mt-0.5">V(D)J & RAG</strong>
              <span className="text-[11px] text-indigo-200/70">RSS 12/23, TdT, SCID</span>
            </div>
            <div className="p-2.5 rounded-lg bg-indigo-950/60 border border-indigo-800/50">
              <span className="text-[10px] font-mono text-indigo-400 font-bold block">PARTE 2.4</span>
              <strong className="text-white block mt-0.5">Complesso HLA</strong>
              <span className="text-[11px] text-indigo-200/70">MHC I vs II, Tasche peptidiche</span>
            </div>
            <div className="p-2.5 rounded-lg bg-indigo-950/60 border border-indigo-800/50">
              <span className="text-[10px] font-mono text-indigo-400 font-bold block">PARTE 2.5</span>
              <strong className="text-white block mt-0.5">Processazione</strong>
              <span className="text-[11px] text-indigo-200/70">TAP, CLIP, Cross-presentazione</span>
            </div>
            <div className="p-2.5 rounded-lg bg-indigo-950/60 border border-indigo-800/50">
              <span className="text-[10px] font-mono text-indigo-400 font-bold block">PARTE 2.6</span>
              <strong className="text-white block mt-0.5">Selezione Timica</strong>
              <span className="text-[11px] text-indigo-200/70">Positiva/Negativa, AIRE</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. SUB-BARRA DI NAVIGAZIONE RAPIDA IN-PAGE */}
      <nav className="sticky top-14 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl p-2 border border-slate-200 dark:border-slate-800 shadow-md flex items-center gap-1.5 overflow-x-auto scrollbar-thin">
        <span className="text-[11px] font-mono font-bold text-slate-500 uppercase px-2 shrink-0 flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
          Indice Cap. II:
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
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-750'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{sec.label}</span>
            </button>
          );
        })}
      </nav>

      {/* =========================================================================
          SEZIONE 2.1: BCR & IMMUNOGLOBULINE
          ========================================================================= */}
      <article id="sec-2-bcr" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Sezione 2.1 · Riconoscimento Antigenico Umorale
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Linfociti B, B-Cell Receptor (BCR) & Struttura delle Immunoglobuline
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            A differenza del recettore dei linfociti T (TCR), che riconosce esclusivamente corti frammenti peptidici 
            vincolati alle tasche delle molecole MHC, il <strong>B-Cell Receptor (BCR)</strong> e gli <strong>anticorpi solubili</strong> 
            riconoscono l'antigene nella sua conformazione tridimensionale nativa: proteine globulari, polisaccaridi capsulari, lipidi complessi 
            e acidi nucleici.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 not-prose">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-indigo-600" />
                Architettura Quaternaria (H₂L₂)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Ogni monomero immunoglobulinico è costituito da due catene pesanti (H) identiche e due catene leggere (L, κ o λ) 
                unite da ponti disolfuro intercatena. La variabilità risiede nei domini aminoterminali (VH e VL) contenenti tre 
                <strong> regioni ipervariabili (CDR1, CDR2, CDR3)</strong>, di cui la <strong>CDR3</strong> rappresenta il baricentro catalitico 
                del legame con il determinante antigenico.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2 flex items-center gap-2">
                <Scissors className="w-4 h-4 text-violet-600" />
                Frammentazione Enzimatica Storica
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                La digestione con <strong>papaina</strong> taglia a monte dei ponti disolfuro della cerniera, producendo <strong>2 frammenti Fab</strong> monovalenti 
                e <strong>1 frammento Fc</strong> cristallizzabile. La digestione con <strong>pepsina</strong> taglia invece a valle, generando 
                un unico frammento bivalente <strong>F(ab')₂</strong> e peptidi degradati della porzione Fc.
              </p>
            </div>
          </div>
        </div>

        {/* Simulatore Digestione Enzimatica */}
        <div className="not-prose pt-4 border-t border-slate-150 dark:border-slate-800">
          <InteractiveAntibodyDigestionSimulator />
        </div>

        {/* Simulatore Segnalazione BCR */}
        <div className="not-prose pt-6 border-t border-slate-150 dark:border-slate-800">
          <div className="mb-3">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">
              La Trasduzione del Segnale via Complesso BCR: Eterodimero Igα/Igβ (CD79a/CD79b)
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              La coda intracitoplasmatica delle mIgM possiede solo 3 aminoacidi (KVK). La trasduzione dipende interamente dai motivi 
              <strong> ITAM</strong> fosforilati dalle chinasi Src della famiglia Lyn, Fyn e Blk, con reclutamento della chinasi <strong>Syk</strong>.
            </p>
          </div>
          <InteractiveBcrSignalingSimulator />
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 2.2: ONTOGENESI B MIDOLLARE
          ========================================================================= */}
      <article id="sec-2-ontogenesi-b" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Sezione 2.2 · Sviluppo Midollare & Tolleranza Centrale
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Ontogenesi B, Checkpoint Pre-BCR & Meccanismi di Selezione Negativa
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            Nel midollo osseo emopoietico, la cellula staminale pluripotente (HSC) si differenzia in progenitore linfoide comune (CLP) 
            e intraprende la linea B sotto l'induzione dei fattori di trascrizione <strong>EBF1, E2A e PAX5</strong>, insieme al segnale trofico 
            del recettore <strong>IL-7R</strong> e di CXCL12 prodotto dalle cellule stromali midollari.
          </p>

          <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 not-prose">
            <h4 className="font-bold text-blue-950 dark:text-blue-200 text-sm mb-1 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Il Checkpoint del Pre-BCR nello Stadio Pre-B
            </h4>
            <p className="text-xs text-blue-900 dark:text-blue-300 leading-relaxed">
              La catena pesante μ appena riarrangiata deve associarsi alla <strong>catena leggera surrogata (SLC: VpreB + λ5)</strong> per formare 
              il pre-BCR. Se il complesso si assembla con successo sulla membrana, invia segnali di sopravvivenza autonomi che:
              1) inducono intensa proliferazione clonale; 2) arrestano la ricombinazione del secondo allele H (<strong>esclusione allelica</strong>); 
              3) aprono il locus per il riarrangiamento della catena leggera (prima κ, poi λ in caso di fallimento).
            </p>
          </div>
        </div>

        {/* Grafico Ontogenesi Interattivo */}
        <div className="not-prose pt-4 border-t border-slate-150 dark:border-slate-800">
          <InteractiveOntogenyChart />
        </div>

        {/* Simulatore Tolleranza B & Receptor Editing */}
        <div className="not-prose pt-6 border-t border-slate-150 dark:border-slate-800">
          <InteractiveBcellToleranceSimulator />
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 2.3: RICOMBINAZIONE SOMATICA V(D)J & DIFETTI GENETICI
          ========================================================================= */}
      <article id="sec-2-vdj" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400">
            <Scissors className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              Sezione 2.3 · Biochimica del Riarrangiamento Somatico
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              La Ricombinazione Somatica V(D)J: Sequenze RSS 12/23, RAG1/2, Artemis & SCID
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            La diversità combinatoriale e giunzionale dei recettori antigenici (BCR e TCR) è guidata dalla reazione di <strong>taglio e ricucitura genica somatica</strong>. 
            Ciascun segmento genico è fiancheggiato da sequenze segnale di ricombinazione (<strong>RSS</strong>) formate da un eptamero conservato, 
            uno spaziatore di 12 o 23 paia di basi (corrispondente a 1 o 2 giri dell'elica di DNA) e un nonamero ricco in AT. 
            La reazione rispetta rigidamente la <strong>regola 12/23</strong>.
          </p>
        </div>

        {/* Simulatore V(D)J Completo */}
        <div className="not-prose pt-4 border-t border-slate-150 dark:border-slate-800">
          <InteractiveVdjRecombinationSimulator />
        </div>

        {/* Simulatore Molecolare SCID / Omenn */}
        <div className="not-prose pt-6 border-t border-slate-150 dark:border-slate-800">
          <InteractiveScidMolecularSimulator />
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 2.4: GENETICA E ARCHITETTURA DEL COMPLESSO HLA (MHC I E II)
          ========================================================================= */}
      <article id="sec-2-hla" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
            <Dna className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Sezione 2.4 · Complesso Maggiore di Istocompatibilità
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Genetica HLA sul Cromosoma 6p21, Polimorfismo e Architettura delle Tasche Peptidiche
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            Il locus <strong>HLA (Human Leukocyte Antigen)</strong>, mappato sul braccio corto del cromosoma 6 (6p21.3), rappresenta la regione 
            più polimorfa dell'intero genoma umano. Questa straordinaria variabilità allelica è concentrata attorno alla <strong>tasca di legame per il peptide</strong>, 
            garantendo che la specie umana possa presentare e riconoscere peptidi derivati da qualsiasi patogeno mutante.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 not-prose">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-xs font-mono text-purple-600 font-bold block mb-1">CLASSE I (HLA-A, -B, -C)</span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Catena α polimorfa a tre domini (α1, α2, α3) associata non-covalentemente alla <strong>β2-microglobulina</strong>. 
                La tasca è chiusa alle estremità e alloggia peptidi corti di <strong>8-10 aminoacidi</strong> ancorati alle tasche B ed F. 
                Presenta a linfociti T CD8+. Espressa su tutte le cellule nucleate.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-xs font-mono text-indigo-600 font-bold block mb-1">CLASSE II (HLA-DR, -DP, -DQ)</span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Eterodimero transmembrana formato da una catena α e una catena β entrambe polimorfe. 
                La tasca è aperta a entrambe le estremità, consentendo l'alloggiamento di peptidi più lunghi di <strong>13-25 aminoacidi</strong>. 
                Presenta a linfociti T CD4+. Espressa constitutivamente su APC professionali (DC, macrofagi, linfociti B).
              </p>
            </div>
          </div>
        </div>

        {/* Simulatore Eredità Aplotipica HLA */}
        <div className="not-prose pt-4 border-t border-slate-150 dark:border-slate-800">
          <InteractiveHlaInheritanceSimulator />
        </div>

        {/* Simulatore Tasca MHC & Motivi di Ancoraggio */}
        <div className="not-prose pt-6 border-t border-slate-150 dark:border-slate-800">
          <InteractiveMhcPocketSimulator />
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 2.5: VIE DI PROCESSAZIONE ANTIGENICA & CROSS-PRESENTAZIONE
          ========================================================================= */}
      <article id="sec-2-processazione" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Sezione 2.5 · Vie di Caricamento Peptidico
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Via Citosolica (TAP/ERAAP), Via Endosomiale (Catena Invariante/CLIP/HLA-DM) & Cross-Presentazione
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            La segregazione anatomica tra antigeni intracellulari ed extracellulari governa il destino della risposta immunitaria: 
            gli antigeni virali e tumorali sintetizzati nel citosol vengono digeriti dall'<strong>immunoproteasoma (LMP2, LMP7, MECL-1)</strong>, 
            traslocati nel reticolo endoplasmatico da <strong>TAP1/TAP2</strong>, rifiniti da <strong>ERAAP</strong> e caricati su MHC-I.
          </p>
          <p>
            Al contrario, i patogeni endocitati vengono digeriti nelle vescicole lisosomiali. Nel reticolo le molecole MHC-II sono protette 
            dalla <strong>Catena Invariante (Ii/CD74)</strong> per impedire legami precoci con peptidi citosolici. Nell'endosoma, le catepsine 
            digeriscono Ii lasciando il solo frammento <strong>CLIP</strong> nella tasca, che viene poi scambiato cataliticamente con il peptide antigenico 
            grazie alla molecola chaperon <strong>HLA-DM</strong>.
          </p>
        </div>

        {/* Simulatore Vie di Processazione a Confronto */}
        <div className="not-prose pt-4 border-t border-slate-150 dark:border-slate-800">
          <InteractiveProcessingPathwaysSimulator />
        </div>

        {/* Simulatore Cross-Presentazione nelle Cellule Dendritiche cDC1 */}
        <div className="not-prose pt-6 border-t border-slate-150 dark:border-slate-800">
          <InteractiveCrossPresentationSimulator />
        </div>
      </article>

      {/* =========================================================================
          SEZIONE 2.6: SELEZIONE TIMICA DEI LINFOCITI T & FATTORE AIRE
          ========================================================================= */}
      <article id="sec-2-selezione-t" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Sezione 2.6 · Educazione Timica & Tolleranza Centrale T
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Ontogenesi nel Timo, Selezione Positiva nella Corticale, Selezione Negativa Midollare e Fattore AIRE
            </h2>
          </div>
        </div>

        <div className={`prose max-w-none text-slate-700 dark:text-slate-300 ${proseFontClass} ${proseSizeClass} space-y-4`}>
          <p>
            I precursori pro-T migrano dal midollo osseo alla giunzione cortico-midollare del timo guidati dal recettore <strong>Notch1</strong>. 
            Attraverso stadi sequenziali CD4-CD8- (doppio negativi DN1-DN4) e il checkpoint del pre-TCR (TCRβ riarrangiato associato a pTα), 
            i timociti diventano CD4+CD8+ (doppio positivi DP) nella corticale timica.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 not-prose">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">
              Ipotesi dell'Avidità di Riconoscimento & AIRE
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              1) <strong>Selezione Positiva (Corticale)</strong>: le cTEC presentano complessi MHC-peptide autologo. Se il timocita lega con affinità debole/moderata, 
              riceve segnali di sopravvivenza e si restringe a CD4 singolo positivo (se riconosce MHC-II) o CD8 singolo positivo (se riconosce MHC-I). 
              Se non riconosce affatto il proprio MHC, muore per trascuratezza (<em>death by neglect</em>).<br/>
              2) <strong>Selezione Negativa (Midollare)</strong>: le mTEC e le DC midollari esprimono il fattore di trascrizione <strong>AIRE (Autoimmune Regulator)</strong>, 
              che consente l'espressione ectopica di antigeni tessuto-specifici periferici (insulina, tireoglobulina, mielina). I timociti con affinità 
              eccessivamente alta per il self subiscono delezione clonale apoptotica, prevenendo l'autoimmunità. Le mutazioni in AIRE causano la sindrome monogenica <strong>APS-1 (APECED)</strong>.
            </p>
          </div>
        </div>

        {/* Simulatore Selezione Timica */}
        <div className="not-prose pt-4 border-t border-slate-150 dark:border-slate-800">
          <InteractiveThymicSelectionSimulator />
        </div>
      </article>

      {/* =========================================================================
          SEZIONE VERIFICA & AUTOVALUTAZIONE
          ========================================================================= */}
      <section id="sec-2-verifica" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-slate-150 dark:border-slate-800 pb-4">
          <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Autovalutazione Capitolo II
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              Verifica delle Competenze Clinico-Molecolari del Capitolo II
            </h2>
          </div>
        </div>

        <div className="not-prose space-y-8">
          <QuizSection
            title="Quiz Ufficiale Capitolo II: BCR, Ricombinazione V(D)J e Complesso HLA"
            customQuestions={ALL_EXAM_QUESTIONS.filter((q) => [6, 7, 8, 9, 10, 11].includes(q.lessonNumber))}
          />
        </div>
      </section>

    </div>
  );
};
