/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CAPITOLO II MASTER VIEW: BASI MOLECOLARI DEL RICONOSCIMENTO ANTIGENICO,
 * RICOMBINAZIONE SOMATICA V(D)J, COMPLESSO MHC & MATURAZIONE LINFOCITARIA
 * 
 * Trattato accademico a pagina unica a flusso continuo senza discontinuità d'aula.
 * Unifica in un unico compendio rigoroso le Lezioni 6, 7, 8, 9, 10 e 11:
 * - Lezione 6: Linfociti B, Recettore BCR, Struttura Quaternaria delle Ig e Segnalazione
 * - Lezione 7: Ontogenesi B Midollare, Checkpoint Pre-BCR e Tolleranza Centrale/Periferica
 * - Lezione 8: Biochimica della Ricombinazione V(D)J, Diversità Giunzionale e Defetti NHEJ (SCID/Omenn)
 * - Lezione 9: Complesso Maggiore di Istocompatibilità (HLA): Genetica, Polimorfismo e Tasche Peptidiche
 * - Lezione 10: Vie di Processazione (MHC-I citosolica, MHC-II endocitaria), Cross-Presentazione e Vie Non Classiche
 * - Lezione 11: Ontogenesi e Selezione Timica dei Linfociti T, Checkpoint Pre-TCR, AIRE e Tolleranza Centrale T
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
  Scissors,
  Split,
  Binary,
  Cpu,
  BookmarkCheck,
  Scale
} from 'lucide-react';

// Import dei simulatori interattivi ufficiali Chapter 2
import { InteractiveAntibodyDigestionSimulator } from '../InteractiveAntibodyDigestionSimulator';
import { InteractiveBcrSignalingSimulator } from '../InteractiveBcrSignalingSimulator';
import { InteractiveVdjRecombinationSimulator } from '../InteractiveVdjRecombinationSimulator';
import { InteractiveScidMolecularSimulator } from '../InteractiveScidMolecularSimulator';
import { InteractiveBcellToleranceSimulator } from '../InteractiveBcellToleranceSimulator';
import { InteractiveMhcPocketSimulator } from '../InteractiveMhcPocketSimulator';
import { InteractiveHlaGeneticsSimulator } from '../InteractiveHlaGeneticsSimulator';
import { InteractiveHlaInheritanceSimulator } from '../InteractiveHlaInheritanceSimulator';
import { InteractiveProcessingPathwaysSimulator } from '../InteractiveProcessingPathwaysSimulator';
import { InteractiveDendriticCellMaturationSimulator } from '../InteractiveDendriticCellMaturationSimulator';
import { InteractiveCrossPresentationSimulator } from '../InteractiveCrossPresentationSimulator';
import { InteractiveSuperantigenVsNonProteinSimulator } from '../InteractiveSuperantigenVsNonProteinSimulator';
import { InteractiveThymicSelectionSimulator } from '../InteractiveThymicSelectionSimulator';

// Import Quiz e Flashcard
import { ALL_EXAM_QUESTIONS } from '../../data/examQuestions';
import { FLASHCARDS_LEZIONE_6, BCR_VS_TCR_DATA, IMMUNOGLOBULIN_ISOTYPES_DATA } from '../../data/lezione6Content';
import { FLASHCARDS_LEZIONE_7, B_CELL_STAGES_DATA } from '../../data/lezione7Content';
import { FLASHCARDS_LEZIONE_8, MHC_COMPARISON_DATA } from '../../data/lezione8Content';
import { FLASHCARDS_LEZIONE_9 } from '../../data/lezione9Content';
import { FLASHCARDS_LEZIONE_10 } from '../../data/lezione10Content';
import { FLASHCARDS_LEZIONE_11 } from '../../data/lezione11Content';
import { QuizSection } from '../QuizSection';
import { FlashcardDeck } from '../FlashcardDeck';

interface Chapter2MasterViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
  initialSection?: string;
  onNavigateSection?: (sectionId: string) => void;
}

export const Chapter2MasterView: React.FC<Chapter2MasterViewProps> = ({
  isSerif = false,
  fontSize = 'normal',
  initialSection
}) => {
  const proseFontClass = isSerif ? 'font-serif' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // Domande d'esame filtrate per le lezioni del Capitolo 2 (6, 7, 8, 9, 10, 11)
  const chapter2Questions = useMemo(() => {
    return ALL_EXAM_QUESTIONS.filter((q) => [6, 7, 8, 9, 10, 11].includes(q.lessonNumber));
  }, []);

  // Flashcards cumulate del Capitolo 2
  const chapter2Flashcards = useMemo(() => {
    return [
      ...FLASHCARDS_LEZIONE_6,
      ...FLASHCARDS_LEZIONE_7,
      ...FLASHCARDS_LEZIONE_8,
      ...FLASHCARDS_LEZIONE_9,
      ...FLASHCARDS_LEZIONE_10,
      ...FLASHCARDS_LEZIONE_11
    ];
  }, []);

  // Sezione attiva per lo ScrollSpy della barra sticky
  const [activeSubSection, setActiveSubSection] = useState<string>('sec-2-bcr-ig');

  // Configurazione delle 8 sezioni della barra di navigazione
  const SECTIONS_NAV = [
    { id: 'sec-2-bcr-ig', label: '2.1 Struttura Ig & Segnalazione BCR', icon: Shield },
    { id: 'sec-2-vdj', label: '2.2 Ricombinazione V(D)J & NHEJ', icon: Scissors },
    { id: 'sec-2-ontogenesi-b', label: '2.3 Ontogenesi B & Tolleranza', icon: Layers },
    { id: 'sec-2-mhc-struttura', label: '2.4 Genetica HLA & Tasche MHC', icon: Dna },
    { id: 'sec-2-processing', label: '2.5 Vie di Processazione MHC I/II', icon: Activity },
    { id: 'sec-2-cross-non-classiche', label: '2.6 Cross-Pres. & Superantigeni', icon: Zap },
    { id: 'sec-2-ontogenesi-t', label: '2.7 Selezione Timica T & AIRE', icon: Target },
    { id: 'sec-2-verifica', label: '2.8 Tavola Master, Quiz & Flashcard', icon: CheckCircle2 }
  ];

  // ScrollSpy per evidenziare la sezione corrente
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
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

  // Scorrimento alla sezione iniziale se specificata (singola esecuzione per prevenire scroll a tratti)
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

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSubSection(id);
    }
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8 lg:space-y-10 pb-16">
      
      {/* =========================================================================
          1. TESTATA MONUMENTALE DEL CAPITOLO II
          ========================================================================= */}
      <header className="bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-white shadow-xl border border-indigo-800/40 relative overflow-hidden w-full">
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-10 bottom-0 text-indigo-500/10 font-mono font-black text-9xl select-none pointer-events-none">
          II
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
              Capitolo II · Trattato Fondamentale
            </span>
            <span className="text-xs font-mono text-indigo-200/70">
              Prof.sse Rosa Molfetta & Ricciarda Galandrini · Lezioni 6 – 11
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Basi Molecolari del Riconoscimento Antigenico, Ricombinazione Somatica, Complesso MHC e Maturazione Linfocitaria
          </h1>

          <p className="text-indigo-100/90 text-sm sm:text-base leading-relaxed max-w-4xl">
            L'architettura biochimica e genetica dell'immunità adattativa: dalla struttura quaternaria delle immunoglobuline 
            e dei complessi recettoriali BCR/TCR, alla biochimica del taglio e cucito genico somatico <em>V(D)J</em> guidato dal 
            macchinario RAG1/2-Artemis-TdT; dall'organizzazione genomica poligenica e polimorfica del locus <em>HLA</em> sul cromosoma 6p21.3 
            e l'ancoraggio nelle tasche peptidiche, alle vie di processazione intracellulare (immunoproteasoma/TAP vs catepsine/HLA-DM), 
            sino ai severi checkpoint di selezione centrale positiva e negativa mediati da <strong>AIRE</strong> nel timo e da Btk nel midollo osseo.
          </p>

          <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-md bg-white/10 text-white/90 border border-white/10 flex items-center gap-1.5">
              <Dna className="w-3.5 h-3.5 text-indigo-400" /> V(D)J Somatic Recombination
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/10 text-white/90 border border-white/10 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-violet-400" /> BCR/TCR Signaling Casette
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/10 text-white/90 border border-white/10 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" /> MHC-I / MHC-II Architecture
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/10 text-white/90 border border-white/10 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-emerald-400" /> Central Tolerance & AIRE
            </span>
          </div>
        </div>
      </header>

      {/* =========================================================================
          2. BARRA STICKY DI NAVIGAZIONE RAPIDA IN-PAGE (SECTIONS_NAV)
          ========================================================================= */}
      <nav 
        aria-label="Navigazione rapida sezioni Capitolo II"
        className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-xl p-1.5 shadow-lg shadow-black/20"
      >
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar scroll-smooth">
          {SECTIONS_NAV.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSubSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-indigo-600 text-white font-semibold shadow-sm shadow-indigo-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{sec.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* =========================================================================
          CORPO DEL CAPITOLO: 8 ARTICOLI SEQUENZIALI
          ========================================================================= */}
      <div className={`space-y-10 sm:space-y-12 lg:space-y-16 ${proseFontClass} ${proseSizeClass}`}>

        {/* =========================================================================
            SEZIONE 2.1: STRUTTURA DELLE IMMUNOGLOBULINE, COMPLESSO BCR & TRASDUZIONE
            ========================================================================= */}
        <section
          id="sec-2-bcr-ig"
          aria-labelledby="heading-sec-2-bcr-ig"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-wider font-bold">
              <Shield className="w-4 h-4" />
              <span>Sezione 2.1 · Basi Molecolari del Riconoscimento Umorale (Lezione 6)</span>
            </div>
            <h2 id="heading-sec-2-bcr-ig" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Struttura delle Immunoglobuline, Complesso BCR e Trasduzione del Segnale
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Dall'architettura quaternaria H2L2 e domini Ig-fold alla digestione enzimatica storica, il riciclo endoteliale via FcRn, e la cascata di trasduzione biochimica Lyn-Syk-Btk-PLCγ2-CBM-NF-κB con il corecettore CD19/CD21/CD81.
            </p>
          </div>

          <div className="space-y-5 text-slate-800 dark:text-slate-200">
            <p>
              I linfociti B sono i soli effettori dell'organismo in grado di sintetizzare le <strong>immunoglobuline (Ig)</strong>, 
              le quali assolvono a una duplice funzione biologica: ancorate alla membrana cellulare costituiscono la subunità 
              legante l'antigene del <strong>complesso del recettore della cellula B (BCR, <em>B-cell Receptor</em>)</strong>, 
              mentre secrete nello spazio extracellulare e nel torrente circolatorio dalle plasmacellule differenziate operano come 
              <strong>anticorpi solubili</strong>, mediando la neutralizzazione di tossine, l'opsonizzazione fagocitaria e l'attivazione della cascata classica del complemento.
            </p>

            {/* Sotto-blocco 1: Architettura Quaternaria H2L2 */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Dna className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>1. Architettura Quaternaria H₂L₂ e Dominio Ig-Fold</span>
              </h3>
              <p>
                Il monomero basale immunoglobulinico è un eterotetramero simmetrico costituito da <strong>due catene pesanti identiche (H, <em>Heavy</em>, ~50-70 kDa)</strong> 
                e <strong>due catene leggere identiche (L, <em>Light</em>, ~25 kDa)</strong>, con una massa molecolare complessiva di circa 150 kDa nelle IgG. 
                Le catene sono connesse reciprocamente mediante <strong>ponti disolfuro intercatena covalenti</strong> e interazioni non covalenti idrofobiche. 
                Ciascun polipeptide è modulato strutturalmente in domini globulari ripetuti omologhi definiti <strong>domini Ig-fold</strong> (~110 aminoacidi):
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-2">
                  <div className="text-xs font-mono font-bold uppercase text-indigo-700 dark:text-indigo-300">
                    Il Dominio Strutturale Ig-Fold
                  </div>
                  <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                    È costituito da due foglietti β paralleli e antiparalleli sovrapposti a forma di «sandwich» (formati da 7 o 9 filamenti β), 
                    stabilizzati al centro da un ponte disolfuro intracatena altamente conservato tra due residui di cisteina spaziati di circa 65 aminoacidi. 
                    Le catene pesanti presentano 1 dominio variabile (<strong>VH</strong>) e 3 o 4 domini costanti (<strong>CH1, CH2, CH3</strong> nelle IgG, IgA e IgD; 
                    più <strong>CH4</strong> nelle IgM e IgE). Le catene leggere presentano 1 dominio variabile (<strong>VL</strong>) e 1 dominio costante (<strong>CL</strong>, isotipi κ o λ).
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-violet-200 dark:border-violet-800/60 bg-violet-50/30 dark:bg-violet-950/20 space-y-2">
                  <div className="text-xs font-mono font-bold uppercase text-violet-700 dark:text-violet-300">
                    Regioni CDR (Ipervariabili) vs Framework (FR)
                  </div>
                  <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                    All'interno di ciascun dominio variabile (VH e VL), la variabilità di sequenza non è omogenea ma concentrata in tre anse connettive esposte 
                    sulla superficie apicale del dominio: le <strong>Regioni Determinanti la Complementarietà (CDR1, CDR2, CDR3)</strong>. 
                    I 3 CDR della catena pesante e i 3 CDR della catena leggera si affiancano nello spazio tridimensionale formando il <strong>paratope</strong> (sito combinatorio per l'antigene). 
                    Le zone interposte, a sequenza conservata, costituiscono le 4 regioni <strong>Framework (FR1, FR2, FR3, FR4)</strong> che fungono da telaio strutturale dell'Ig-fold. 
                    Il <strong>CDR3</strong> è il determinante primario di specificità e mostra la variabilità più estrema.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm">
                <strong>Regione Cerniera (Hinge Region):</strong> presente nelle catene γ, α e δ (assente in μ ed ε), è un segmento flessibile ricco in 
                residui di prolina (che conferisce mobilità angolare permettendo all'anticorpo di legare epitopi spaziati a distanze variabili da 0 a 180°) 
                e cisteine (che formano i ponti disolfuro inter-catena pesante). La presenza o assenza della cerniera determina le proprietà biofisiche e la suscettibilità proteolitica dell'isotipo.
              </div>
            </div>

            {/* Sotto-blocco 2: Digestione Enzimatica e Recettore FcRn */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Scissors className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>2. Digestione Enzimatica Storica (Papaina vs Pepsina) e Riciclo pH-Dipendente via FcRn</span>
              </h3>
              <p>
                Gli esperimenti biochimici di Rodney Porter e Gerald Edelman hanno chiarito la dualità funzionale dell'anticorpo (legame antigenico vs funzioni effettrici) 
                attraverso il clivaggio proteolitico mirato:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/40 dark:bg-blue-950/20 space-y-1.5">
                  <strong className="text-blue-900 dark:text-blue-200 font-bold block">
                    Digestione con Papaina (Taglio Sopra la Cerniera)
                  </strong>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    Taglia a monte dei ponti disolfuro inter-pesante generando <strong>3 frammenti separati</strong>:
                    <br />• <strong>2 Frammenti Fab (<em>Fragment antigen-binding</em>)</strong> monovalenti (~50 kDa ciascuno), composti da VL+CL uniti a VH+CH1, capaci di legare l'antigene ma privi di funzioni effettrici o capacità di precipitazione;
                    <br />• <strong>1 Frammento Fc (<em>Fragment crystallizable</em>)</strong> (~50 kDa), costituito dal dimero dei domini CH2-CH3, privo di legame antigenico ma responsabile di fissazione del complemento (C1q), legame a FcγR e trasporto tissutale.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50/40 dark:bg-amber-950/20 space-y-1.5">
                  <strong className="text-amber-900 dark:text-amber-200 font-bold block">
                    Digestione con Pepsina (Taglio Sotto la Cerniera)
                  </strong>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    Taglia a valle dei ponti disolfuro inter-pesante degradando contemporaneamente la porzione Fc in multipli piccoli peptidi:
                    <br />• <strong>1 Frammento F(ab')₂</strong> (~110 kDa) bivalente, mantenuto unito dal ponte disolfuro della cerniera, in grado di effettuare cross-linking, precipitazione ed emoagglutinazione senza attivare l'infiammazione Fc-mediata;
                    <br />• <strong>Frammenti peptidici sub-Fc</strong> non funzionali.
                  </p>
                </div>
              </div>

              {/* Box FcRn */}
              <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-bold text-xs uppercase tracking-wider text-emerald-900 dark:text-emerald-200">
                    Fisiologia del Recettore Fc Neonatale (FcRn) e Salvataggio delle IgG
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Il recettore <strong>FcRn</strong> (eterodimero formato da una catena MHC-I-simile priva di tasca classica e dalla β2-microglobulina) 
                  spiega l'eccezionale emivita biologica delle IgG umane (<strong>21-28 giorni</strong>, rispetto a 1-5 giorni per gli altri isotipi) 
                  e il loro passaggio trans-placentare attivo durante la gestazione:
                  <br />1. Le cellule endoteliali vascolari internalizzano continuamente le proteine sieriche per pinocitosi fluida non specifica.
                  <br />2. Nell'endosoma primario, che va incontro ad acidificazione protonica (<strong>pH 6.0</strong>), residui di istidina conservati all'interfaccia CH2-CH3 dell'Fc si protonano, permettendo un <strong>legame ad alta affinità con FcRn</strong>.
                  <br />3. Le IgG legate a FcRn vengono sottratte al destino lisosomiale di degradazione proteolitica e riciclate mediante vescicole di sorting apicale verso la membrana plasmatica.
                  <br />4. Al contatto con il pH neutro del torrente ematico (<strong>pH 7.4</strong>), l'affinità crolla bruscamente e l'anticorpo IgG intatto viene rilasciato nella circolazione. 
                  Questo principio è alla base della progettazione di proteine di fusione ricombinanti terapeutiche (es. <em>Etanercept</em>, Fc-fusions) e del farmaco <em>Efgartigimod</em> (frammento Fc mutato ad altissima affinità che satura FcRn accelerando la degradazione degli autoanticorpi patogeni nella Miastenia Gravis).
                </p>
              </div>

              {/* Simulatore Incastonato: Antibody Digestion */}
              <div className="pt-2">
                <InteractiveAntibodyDigestionSimulator />
              </div>
            </div>

            {/* Sotto-blocco 3: Complesso BCR e Trasduzione del Segnale */}
            <div className="space-y-3 pt-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>3. Il Complesso BCR, la Sinapsi B e la Cascata di Segnalazione Lyn-Syk-Btk-PLCγ2</span>
              </h3>
              <p>
                L'immunoglobulina di membrana (mIgM o mIgD nei B naïve) possiede una coda citoplasmatica estremamente corta 
                (costituita da soli 3 aminoacidi idrofobici: <strong>Lys-Val-Lys</strong>), fisicamente incapace di trasdurre alcun segnale all'interno del citoplasma. 
                L'innesco cellulare richiede l'accoppiamento non covalente con un eterodimero invariante di segnalazione: <strong>Igα (CD79a) e Igβ (CD79b)</strong>, 
                ciascuno provvisto di una lunga coda citoplasmatica contenente un motivo <strong>ITAM (<em>Immunoreceptor Tyrosine-based Activation Motif</em>)</strong>, 
                con sequenza consenso <em>YxxL/I-x(6-8)-YxxL/I</em>.
              </p>

              {/* Fasi della Segnalazione BCR */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-3 text-xs sm:text-sm">
                <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-indigo-600" />
                  <span>Sequenza Enzimatica di Trasduzione del Segnale del BCR:</span>
                </div>
                <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
                  <li>
                    <strong>Cross-Linking dell'Antigene e Attivazione delle chinasi Src:</strong> il legame di un antigene multivalente induce l'avvicinamento 
                    dei complessi BCR nei <em>lipid rafts</em> di membrana, attivando le tirosin-chinasi associate alla membrana della famiglia Src 
                    (<strong>Lyn, Fyn, Blk</strong>), che fosforilano i due residui di tirosina negli ITAM di Igα e Igβ.
                  </li>
                  <li>
                    <strong>Reclutamento di Syk:</strong> gli ITAM doppiamente fosforilati fungono da sito di docking per i domini tandem <strong>SH2</strong> 
                    della tirosin-chinasi citoplasmatica <strong>Syk</strong>. Il legame attiva Syk mediante autofosforilazione allosterica.
                  </li>
                  <li>
                    <strong>Assemblaggio dello Scaffold BLNK (SLP-65):</strong> Syk attivata fosforila massicciamente la proteina adattatrice 
                    <strong>BLNK (B-cell Linker Protein o SLP-65)</strong>, la quale orchestra il reclutamento simultaneo della <strong>tirosin-chinasi di Bruton (Btk)</strong> 
                    e della <strong>fosfolipasi C-gamma-2 (PLCγ2)</strong>.
                  </li>
                  <li>
                    <strong>Attivazione di PLCγ2 e Scissione di PIP₂:</strong> Btk (attivata da Lyn e reclutata dai lipidi PIP₃ generati da PI3K) fosforila e attiva PLCγ2, 
                    la quale idrolizza il fosfatidilinositolo 4,5-bisfosfato (PIP₂) di membrana in due secondi messaggeri intracellulari chiave:
                    <div className="pl-4 pt-1 space-y-1">
                      <div>• <strong>Inositolo 1,4,5-trisfosfato (IP₃):</strong> molecola solubile che migra nel citosol e lega i recettori IP₃R sul reticolo endoplasmatico, inducendo un rapido efflusso di ioni Ca²⁺. Lo svuotamento degli store luminali attiva il sensore STIM1 che apre i canali di membrana <strong>ORAI1 (CRAC)</strong> inducendo l'influsso capacitativo sostenuto di Ca²⁺. L'aumento del calcio libero attiva la <em>Calmodulina</em> che a sua volta attiva la fosfatasi <strong>Calcineurina</strong>, la quale defosforila il fattore trascrizionale <strong>NFAT</strong>, promuovendone la traslocazione nel nucleo.</div>
                      <div>• <strong>Diacilglicerolo (DAG):</strong> resta ancorato alla membrana plasmatica dove, in sinergia con il calcio, recluta e attiva la <strong>PKCβ</strong>. PKCβ fosforila la proteina adattatrice <strong>CARD11</strong>.</div>
                    </div>
                  </li>
                  <li>
                    <strong>Formazione del Complesso CBM e Attivazione di NF-κB:</strong> CARD11 fosforilata cambia conformazione e polimerizza con <strong>BCL10</strong> 
                    e la paracaspasi <strong>MALT1</strong>, costituendo il macromolecolare <strong>complesso CBM (CARD11-BCL10-MALT1)</strong>. 
                    MALT1 recluta e attiva il complesso IKK (IKKα, IKKβ e la subunità regolatoria NEMO/IKKγ). IKK fosforila l'inibitore <strong>IκBα</strong>, 
                    marcandolo per la poliubiquitinazione e la degradazione selettiva nel proteasoma 26S. Liberato dal freno inibitorio, il dimero trascrizionale 
                    <strong>NF-κB (p50/p65)</strong> trasloca nel nucleo cellulare inducendo trascrizione di geni anti-apoptotici (<em>Bcl-xL, Bcl-2</em>) e citochine.
                  </li>
                </ol>
              </div>

              {/* Il Corecettore B (CD19-CD21-CD81) */}
              <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/40 dark:bg-indigo-950/20 space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="font-bold text-xs uppercase tracking-wider text-indigo-900 dark:text-indigo-200">
                    Il Complesso Corecettoriale B (CD19 - CD21/CR2 - CD81/TAPA-1)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  L'attivazione del linfocita B viene straordinariamente amplificata (riducendo la concentrazione minima di antigene richiesta di <strong>1.000 – 10.000 volte</strong>) 
                  quando l'antigene microbico è opsonizzato dal frammento del complemento <strong>C3d</strong>:
                  <br />• <strong>CD21 (Complement Receptor 2, CR2):</strong> lega covalentemente il frammento C3d legato al microbo.
                  <br />• <strong>CD19:</strong> possiede una voluminosa coda citoplasmatica dotata di residui di tirosina che, fosforilati da Lyn, reclutano avidamente la <strong>PI3K (Fosfoinositide 3-chinasi)</strong>. PI3K fosforila PIP₂ in PIP₃, creando una piattaforma di ancoraggio per le chinasi dotate di domini PH (Btk e Akt).
                  <br />• <strong>CD81 (TAPA-1):</strong> tetraspanina transmembrana che stabilizza l'interazione del complesso nella zattera lipidica.
                  <br />Questo meccanismo connette magistralmente l'immunità innata complementare con l'immunità umorale adattativa.
                </p>
              </div>

              {/* Simulatore Incastonato: BCR Signaling */}
              <div className="pt-2">
                <InteractiveBcrSignalingSimulator />
              </div>
            </div>
          </div>

          {/* Ponte Fisiologico di Transizione */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-100 via-indigo-50 to-slate-100 dark:from-slate-800 dark:via-indigo-950/40 dark:to-slate-800 border border-indigo-200/60 dark:border-indigo-800/50 flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-indigo-900 dark:text-indigo-200 font-semibold block mb-0.5">
                Ponte Fisiologico di Transizione: Dalla proteina matura alla biochimica del genoma
              </strong>
              Come fa l'organismo a generare l'immensa variabilità dei domini variabili e in particolare del CDR3, 
              superiore al numero totale di geni contenuti nell'intero genoma umano? 
              La risposta risiede nel meccanismo della <strong>ricombinazione somatica V(D)J</strong>.
            </div>
          </div>
        </section>


        {/* =========================================================================
            SEZIONE 2.2: BIOCHIMICA DELLA RICOMBINAZIONE SOMATICA V(D)J & NHEJ
            ========================================================================= */}
        <section
          id="sec-2-vdj"
          aria-labelledby="heading-sec-2-vdj"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-wider font-bold">
              <Scissors className="w-4 h-4" />
              <span>Sezione 2.2 · Meccanismi Molecolari di Diversificazione Genica (Lezione 7 & 8)</span>
            </div>
            <h2 id="heading-sec-2-vdj" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Biochimica della Ricombinazione Somatica V(D)J, Diversità Giunzionale e Defetti NHEJ (SCID & Omenn)
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Organizzazione cromosomica dei loci Ig e TCR, sequenze segnale RSS con la regola del 12/23, macchinario RAG1/RAG2, risoluzione dei DSB mediante Ku70/80-DNA-PKcs-Artemis-TdT, calcolo della combinatoria e immunodeficienze combinate gravi.
            </p>
          </div>

          <div className="space-y-5 text-slate-800 dark:text-slate-200">
            <p>
              Nel genoma delle cellule germinali e di tutte le cellule non linfoidi, i segmenti genici codificanti per i domini variabili dei recettori 
              antigenici (BCR e TCR) sono frammentati e separati da lunghi introni non codificanti. 
              La <strong>ricombinazione somatica V(D)J</strong> è l'unico processo di riarrangiamento fisiologico programmato del DNA presente nei vertebrati, 
              avviene esclusivamente durante la maturazione dei linfociti B (nel midollo osseo) e dei linfociti T (nel timo), ed è irreversibile.
            </p>

            {/* Sotto-blocco 1: Organizzazione Genomica dei Loci */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Binary className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>1. Mappa dei Loci Cromosomici Umani</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-950/20">
                  <strong className="text-indigo-900 dark:text-indigo-200 block mb-1">Catena Pesante IgH (Cr. 14q32)</strong>
                  <p className="text-slate-700 dark:text-slate-300 text-xs">
                    Comprende ~38-46 segmenti variabili <strong>VH</strong> funzionali, 23 segmenti di diversità <strong>DH</strong>, 6 segmenti di giunzione <strong>JH</strong>, 
                    seguiti dal cluster dei geni costanti nell'ordine: Cμ, Cδ, Cγ3, Cγ1, Cα1, Cγ2, Cγ4, Cε, Cα2.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-950/20">
                  <strong className="text-indigo-900 dark:text-indigo-200 block mb-1">Catena Leggera κ (Cr. 2p11)</strong>
                  <p className="text-slate-700 dark:text-slate-300 text-xs">
                    Comprende ~35 segmenti <strong>Vκ</strong>, 5 segmenti <strong>Jκ</strong> e un singolo gene costante <strong>Cκ</strong>. 
                    I segmenti D sono completamente assenti nelle catene leggere.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-950/20">
                  <strong className="text-indigo-900 dark:text-indigo-200 block mb-1">Catena Leggera λ (Cr. 22q11)</strong>
                  <p className="text-slate-700 dark:text-slate-300 text-xs">
                    Comprende ~30 segmenti <strong>Vλ</strong> e 4-5 cassette funzionali a tandem formate ciascuna da una coppia <strong>Jλ-Cλ</strong>.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50/30 dark:bg-violet-950/20 text-xs">
                <strong>Organizzazione dei Loci TCR:</strong> il locus <strong>TCRβ</strong> è situato sul cromosoma 7q34 (Vβ, Dβ1-Jβ1, Dβ2-Jβ2, Cβ1, Cβ2); 
                il locus <strong>TCRγ</strong> si trova sul cromosoma 7p14; i loci <strong>TCRα e TCRδ</strong> sono situati in tandem sul cromosoma 14q11.2, 
                con una peculiarità assoluta: l'intero locus <em>TCRδ</em> è annidato fisicamente <em>all'interno</em> del locus TCRα tra i segmenti Vα e Jα. 
                Pertanto, qualsiasi riarrangiamento produttivo del locus Vα-Jα provoca la <strong>delezione fisica ed escissione inevitabile del locus TCRδ</strong>, 
                sigillando irreversibilmente il destino della cellula verso la linea T αβ ed escludendo per sempre la linea T γδ!
              </div>
            </div>

            {/* Sotto-blocco 2: Sequenze Segnale RSS e la Regola del 12/23 */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Dna className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>2. Le Sequenze Segnale di Ricombinazione (RSS) e la «Regola del 12/23»</span>
              </h3>
              <p>
                Ciascun segmento codificante V, D o J è fiancheggiato da sequenze consenso di DNA non codificanti conservate, denominate 
                <strong>RSS (<em>Recombination Signal Sequences</em>)</strong>. Ciascuna RSS è strutturata in tre moduli:
              </p>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-2 text-xs sm:text-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 block text-xs">Eptamero (7 bp)</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-slate-100 text-sm">5'-CACAGTG-3'</span>
                    <p className="text-[11px] text-slate-500 mt-1">Sempre adiacente alla sequenza codificante, segna il punto esatto di clivaggio enzimatico.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 block text-xs">Spaziatore (Spacer)</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-slate-100 text-sm">12 bp oppure 23 bp</span>
                    <p className="text-[11px] text-slate-500 mt-1">Sequenza non conservata, ma di lunghezza rigidamente fissa corrispondente a 1 o 2 giri completi d'elica (10.4 bp/giro).</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 block text-xs">Nonamero (9 bp)</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-slate-100 text-sm">5'-ACAAAAACC-3'</span>
                    <p className="text-[11px] text-slate-500 mt-1">Regione ricca in A/T fondamentale per l'aggancio ad alta affinità dell'eterotetramero RAG1/RAG2.</p>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-700">
                  <strong className="text-indigo-900 dark:text-indigo-200">La Regola del 12/23:</strong> un segmento fiancheggiato da una RSS con spaziatore da 12 bp 
                  può ricombinare unicamente con un segmento fiancheggiato da una RSS con spaziatore da 23 bp (accoppiamento 1 giro – 2 giri). 
                  Nel locus IgH, i segmenti VH presentano una RSS a valle da 23 bp, i segmenti DH sono fiancheggiati da entrambi i lati da RSS da 12 bp, 
                  e i segmenti JH presentano a monte una RSS da 23 bp. Questo vincolo geometrico <strong>rende fisicamente impossibile l'unione diretta VH-JH o VH-VH</strong>, 
                  imponendo tassativamente l'ordine D-J prima e V-DJ poi.
                </div>
              </div>
            </div>

            {/* Sotto-blocco 3: Fasi Biochimiche della Reazione */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>3. Il Macchinario RAG1/RAG2, il Taglio a Forcina e la Riparazione via NHEJ</span>
              </h3>
              <p>
                La reazione di ricombinazione somatica si articola in una fase linfoide-specifica di taglio (mediata dagli enzimi RAG) 
                e una fase ubiquitaria di riparazione delle rotture a doppio filamento mediante la via di <strong>Non-Homologous End Joining (NHEJ)</strong>:
              </p>

              <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-2.5 text-xs sm:text-sm">
                <div className="space-y-2 text-slate-700 dark:text-slate-300">
                  <div>
                    <strong>1. Riconoscimento e Sinapsi del Complesso RAG1/RAG2:</strong> l'eterotetramero (RAG1)₂-(RAG2)₂ si assembla sulle RSS. 
                    RAG1 contiene il dominio catalitico endonucleasico DDE, mentre RAG2 funge da lettore epigenetico legandosi all'istone <strong>H3K4me3</strong> 
                    della cromatina attiva trascrizionalmente aperta. RAG1 unisce fisicamente le due RSS formando una sinapsi di DNA.
                  </div>
                  <div>
                    <strong>2. Clivaggio a Doppio Filamento e Formazione della Forcina (Hairpin):</strong> RAG1 introduce inizialmente un'interruzione a singolo filamento (nick) 
                    con un gruppo 3'-OH libero al confine tra l'estremità codificante e l'eptamero. Successivamente, il 3'-OH libero esegue un attacco nucleofilo 
                    di transesterificazione sul legame fosfodiesterico del filamento opposto. Questa reazione genera due esiti strutturali:
                    <div className="pl-4 pt-1 space-y-1">
                      <div>• <strong>Signal Ends (Estremità del Segnale):</strong> estremità tronche a filo netto (<em>blunt ends</em>) prive di forcina, che vengono saldate insieme testa a testa senza modifiche generando il <strong>Signal Joint</strong> circolare episomiale (nei linfociti T prende il nome di <strong>TREC</strong>, marcatore di timopoiesi recente);</div>
                      <div>• <strong>Coding Ends (Estremità Codificanti):</strong> le estremità dei segmenti genici vengono sigillate covalentemente a formare una <strong>forcina chiusa a fondo cieco (hairpin)</strong>.</div>
                    </div>
                  </div>
                  <div>
                    <strong>3. Reclutamento del Complesso NHEJ (Ku70/Ku80 & DNA-PKcs):</strong> l'eterodimero <strong>Ku70/Ku80</strong> a forma di ciambella scivola sulle estremità 
                    del DNA a doppio filamento spezzato, proteggendole dalla degradazione aspecifica e reclutando la chinasi serina/treonina <strong>DNA-PKcs</strong>.
                  </div>
                  <div>
                    <strong>4. Apertura della Forcina da parte di Artemis (Generazione di Nucleotidi P):</strong> DNA-PKcs fosforila e attiva l'endonucleasi 
                    <strong>Artemis (codificata dal gene DCLRE1C)</strong>. Artemis esegue un taglio asimmetrico monofilamento a singolo nucleotide di distanza dalla punta della forcina. 
                    Quando la forcina asimmetrica si distende, lascia una breve sequenza a singolo filamento che, duplicata dai sistemi di riempimento, genera 
                    una sequenza palindromica conservata: i cosiddetti <strong>Nucleotidi P (Palindromici)</strong>.
                  </div>
                  <div>
                    <strong>5. Aggiunta dei Nucleotidi N da parte della TdT (Diversificazione Giunzionale):</strong> l'enzima <strong>TdT (Terminal deossinucleotidil-transferasi)</strong>, 
                    espresso specificamente nei precursori B (durante il riarrangiamento della catena pesante) e nei precursori T (durante tutti i riarrangiamenti), 
                    aggiunge in modo totalmente casuale, privo di stampo (<em>template-independent</em>), da 1 a 20 nucleotidi monofosfato (<strong>Nucleotidi N</strong>) 
                    alle estremità 3' aperte dei filamenti.
                  </div>
                  <div>
                    <strong>6. Esonucleolisi, Polimerizzazione e Legatura Finale:</strong> esonucleasi aspecifiche rifilano nucleotidi in eccesso; 
                    le DNA polimerasi <strong>μ e λ</strong> colmano i gap a singolo filamento per complementarietà; il complesso <strong>DNA Ligasi IV - XRCC4 - XLF (Cernunnos)</strong> 
                    salda covalentemente i due filamenti codificanti formando il <strong>Coding Joint</strong> definitivo.
                  </div>
                </div>
              </div>

              {/* Box Diversità Combinatoriale vs Giunzionale */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 space-y-1.5">
                  <div className="text-xs font-mono font-bold uppercase text-slate-800 dark:text-slate-200">
                    Diversità Combinatoriale (~10⁶)
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Deriva dalle possibili combinazioni casuali tra i segmenti genici germinali:
                    <br />Catena pesante: 45 VH × 23 DH × 6 JH = ~6.200 combinazioni.
                    <br />Catene leggere: (35 Vκ × 5 Jκ) + (30 Vλ × 4 Jλ) = ~300 combinazioni.
                    <br />Accoppiamento H + L: 6.200 × 300 = <strong>~2 × 10⁶ combinazioni teoriche</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/40 dark:bg-indigo-950/20 space-y-1.5">
                  <div className="text-xs font-mono font-bold uppercase text-indigo-800 dark:text-indigo-300">
                    Diversità Giunzionale (&gt; 10¹¹ – 10¹⁴)
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    L'apertura asimmetrica delle forcine (nucleotidi P), l'inserzione casuale template-independent di nucleotidi N da parte della TdT, 
                    e la perdita imprecisa di basi nucleotidiche al confine della giunzione amplificano la diversità di molti ordini di grandezza. 
                    Il sito giunzionale coincide con il <strong>CDR3</strong>, spiegando perché questa ansa sia il punto a più alta diversità dell'anticorpo.
                  </p>
                </div>
              </div>

              {/* Simulatori Incastonati: VDJ & SCID */}
              <div className="pt-2 space-y-4">
                <InteractiveVdjRecombinationSimulator />
                <InteractiveScidMolecularSimulator />
              </div>

              {/* Correlazioni Cliniche: SCID T- B- NK+ e Sindrome di Omenn */}
              <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/40 dark:bg-rose-950/20 space-y-2">
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span className="font-bold text-xs uppercase tracking-wider text-rose-900 dark:text-rose-200">
                    Correlazioni Clinico-Patologiche: SCID T⁻ B⁻ NK⁺ e Sindrome di Omenn
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
                  <p>
                    <strong>SCID con fenotipo T⁻ B⁻ NK⁺ (Radiosensibile o Radioresistente):</strong>
                    <br />• Mutazioni con perdita totale di funzione (null mutations) nei geni <strong>RAG1 o RAG2</strong> provocano un blocco totale 
                    del riarrangiamento recettoriale allo stadio Pro-B e DN3, impedendo lo sviluppo sia dei linfociti T che dei linfociti B. Le cellule NK 
                    (che non necessitano di ricombinazione genica) si sviluppano normalmente. Poiché RAG opera solo nei linfociti, queste cellule non sono radiosensibili.
                    <br />• Mutazioni con perdita di funzione nei geni del complesso ubiquitario NHEJ (<strong>Artemis / DCLRE1C, DNA-PKcs, DNA Ligasi IV</strong>) 
                    causano un fenotipo clinico identico (SCID T⁻ B⁻ NK⁺), ma accompagnato da <strong>radiosensibilità estrema e difetti di accrescimento/microcefalia</strong>, 
                    in quanto l'organismo è incapace di riparare i tagli a doppio filamento indotti da radiazioni ionizzanti o agenti chemioterapici in tutti i tessuti somatici.
                  </p>
                  <p>
                    <strong>Sindrome di Omenn (Mutazioni Ipormorfe / "Leaky" di RAG1 o RAG2):</strong>
                    <br />Mutazioni parziali che conservano una minima attività enzimatica residua (&lt; 5-10%). La minima ricombinazione permette la fuga 
                    di rari precursori linfocitari che sfuggono alla tolleranza centrale timica ed espandono oligoclonalmente in periferia. 
                    Questi cloni T anomali (polarizzati marcatamente in senso <strong>Th2</strong>) infiltrano la cute e l'intestino, producendo un quadro drammatico 
                    caratterizzato da: <strong>eritrodermia esfoliativa universale</strong>, alopecia, linfoadenopatia ed epatosplenomegalia massive, 
                    <strong>eosinofilia estrema</strong>, livelli sierici esorbitanti di <strong>IgE</strong> e diarrea intrattabile con deperimento cachettico neonatale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ponte Fisiologico di Transizione */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-100 via-indigo-50 to-slate-100 dark:from-slate-800 dark:via-indigo-950/40 dark:to-slate-800 border border-indigo-200/60 dark:border-indigo-800/50 flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-indigo-900 dark:text-indigo-200 font-semibold block mb-0.5">
                Ponte Fisiologico di Transizione: Dal taglio genico agli stadi di maturazione midollare
              </strong>
              Come viene orchestrato cronologicamente il taglio V(D)J all'interno del midollo osseo, 
              e quali meccanismi di controllo di qualità garantiscono che ciascun linfocita B esprima una sola specificità recettoriale 
              e non risulti autoreattivo contro il proprio organismo?
            </div>
          </div>
        </section>


        {/* =========================================================================
            SEZIONE 2.3: ONTOGENESI B MIDOLLARE, CHECKPOINT PRE-BCR & TOLLERANZA
            ========================================================================= */}
        <section
          id="sec-2-ontogenesi-b"
          aria-labelledby="heading-sec-2-ontogenesi-b"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-wider font-bold">
              <Layers className="w-4 h-4" />
              <span>Sezione 2.3 · Sviluppo Linfocitario e Selezione B (Lezione 7)</span>
            </div>
            <h2 id="heading-sec-2-ontogenesi-b" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Ontogenesi Midollare B, Checkpoint Pre-BCR e Tolleranza Centrale/Periferica B
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Gli stadi da HSC a Pro-B e Pre-B, il complesso surrogato VpreB/λ5 con segnalazione tonica Btk, esclusione allelica e isotipica, tolleranza centrale midollare (receptor editing vs delezione vs anergia) e transizione periferica splenica dipendente da BAFF.
            </p>
          </div>

          <div className="space-y-5 text-slate-800 dark:text-slate-200">
            <p>
              L'ontogenesi dei linfociti B avviene all'interno del microambiente protetto del <strong>midollo osseo</strong>, 
              in intimo contatto con le cellule stromali reticolari che rilasciano chemochine e citochine trofiche 
              (in particolare <strong>CXCL12</strong> per CXCR4, <strong>SCF</strong> per c-Kit, e <strong>IL-7</strong>). 
              L'impegno irreversibile verso il lignaggio B è sigillato dall'attivazione a cascata dei fattori di trascrizione 
              <strong>E2A, EBF1 e PAX5 (BSAP)</strong>: PAX5 agisce come "master regulator", attivando geni essenziali quali <em>CD19</em>, 
              <em>CD79a</em> e <em>BLNK</em>, e reprimendo contemporaneamente l'accesso alla linea mieloide e T (blocco di Notch1).
            </p>

            {/* Sotto-blocco 1: Gli Stadi Midollari e il Checkpoint del Pre-BCR */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Shield className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>1. Il Primo Checkpoint: Il Complesso del Pre-BCR e l'Esclusione Allelica</span>
              </h3>
              
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-3 text-xs sm:text-sm">
                <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
                  <li>
                    <strong>Stadio Pro-B Precoce (Early Pro-B, CD34⁺ CD19⁺ CD43⁺ TdT⁺):</strong> inizia il riarrangiamento <strong>D-J</strong> 
                    su entrambi gli alleli del locus della catena pesante IgH.
                  </li>
                  <li>
                    <strong>Stadio Pro-B Tardivo (Late Pro-B, CD19⁺ CD43⁺ CD10⁺):</strong> avviene il riarrangiamento <strong>V-DJ</strong> sul primo allele IgH. 
                    Se il riarrangiamento è in frame (produttivo), la cellula sintetizza la proteina della <strong>catena pesante μ</strong>. Se è non produttivo, 
                    la cellula tenta il riarrangiamento V-DJ sul secondo allele; se anche questo fallisce, va incontro ad apoptosi.
                  </li>
                  <li>
                    <strong>Stadio Grande Pre-B (Large Pre-B) e il Complesso del Pre-BCR:</strong> la catena pesante μ non può essere trasportata in membrana da sola. 
                    Viene accoppiata a un surrogato invariante della catena leggera (<strong>SLC, <em>Surrogate Light Chain</em></strong>), formato dall'eterodimero 
                    invariante <strong>VpreB (CD179a)</strong> e <strong>λ5 (CD179b)</strong>, e alle molecole di segnalazione Igα/Igβ (CD79a/CD79b). 
                    Questo macro-complesso costituisce il <strong>Pre-BCR</strong>.
                  </li>
                </ol>

                <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
                  <strong className="text-indigo-900 dark:text-indigo-200 block">
                    Segnalazione Tonica Indipendente da Ligando e Conseguenze Biologiche:
                  </strong>
                  Le code non-immunoglobuliniche amminoterminali di VpreB e λ5 interagiscono spontaneamente tra complessi adiacenti, inducendo 
                  una oligomerizzazione autonoma di membrana priva della necessità di alcun ligando esterno. Il segnale tonico attiva 
                  <strong>Lyn, Syk, BLNK e Btk</strong>, determinando tre effetti fondamentali:
                  <br />• <strong>Esclusione Allelica di IgH:</strong> il segnale spegne transitoriamente la trascrizione di RAG1 e RAG2, 
                  mentre promuove la decondensazione e l'inattivazione epigenetica del secondo allele IgH. Questo garantisce che ogni singolo linfocita B 
                  esprima <em>una sola ed esclusiva catena pesante specifica</em> (monospecificità clonale).
                  <br />• <strong>Proliferazione Clonale Massiva:</strong> la cellula va incontro a 6-8 divisioni mitotiche rapide, amplificando per 50-100 volte 
                  la progenie clonale dotata di una catena pesante μ funzionale.
                  <br />• <strong>Transizione a Piccolo Pre-B e Riarrangiamento delle Catene Leggere:</strong> i linfociti arrestano la proliferazione, 
                  riducono il loro volume cellulare (Small Pre-B), spengono la sintesi di SLC (VpreB/λ5), riaccendono RAG1/RAG2 e avviano 
                  il riarrangiamento della <strong>catena leggera κ</strong> (partendo da un allele κ; se non produttivo, il secondo allele κ; se entrambi falliscono, 
                  tentano i loci λ: <strong>Esclusione Isotipica</strong>, con rapporto fisiologico umano κ:λ di ~60:40).
                </div>
              </div>

              {/* Correlazione Clinica: Morbo di Bruton (XLA) */}
              <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50/40 dark:bg-amber-950/20 space-y-1.5">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span className="font-bold text-xs uppercase tracking-wider text-amber-900 dark:text-amber-200">
                    Correlazione Clinica d'Esame: Agammaglobulinemia di Bruton (XLA)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  L'<strong>Agammaglobulinemia legata al sesso (XLA o Morbo di Bruton)</strong> è causata da mutazioni a perdita di funzione nel gene 
                  <strong>BTK</strong> (tirosin-chinasi di Bruton), localizzato sul braccio lungo del cromosoma X (Xq22.1). 
                  In assenza di Btk funzionale, la trasduzione del segnale del pre-BCR è bloccata: i precursori B si arrestano irreversibilmente allo stadio 
                  di <strong>Pre-B nel midollo osseo</strong> e vanno incontro ad apoptosi. 
                  Nel sangue periferico e nei tessuti linfoidi secondari si osserva: <strong>totale assenza di linfociti B maturi circolanti (CD19⁺ &lt; 0.1%)</strong>, 
                  linfonodi rudimentali privi di centri germinativi e tonsille invisibili, e un crollo catastrofico di tutti gli isotipi anticorpali 
                  (IgG &lt; 100 mg/dL, IgM e IgA indosabili). I neonati maschi diventano sintomatici dopo i 6-9 mesi di vita (al decadimento delle IgG materne trasmesse via placenta), 
                  sviluppando infezioni batteriche respiratorie e oto-mastoidee ricorrenti (<em>Streptococcus pneumoniae, Haemophilus influenzae</em>) e meningiti enterovirali fulminanti.
                </p>
              </div>
            </div>

            {/* Sotto-blocco 2: Tolleranza Centrale Midollare e Receptor Editing */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>2. Il Secondo Checkpoint: Tolleranza Centrale B (Editing vs Delezione vs Anergia)</span>
              </h3>
              <p>
                Quando la catena leggera è stata riarrangiata con successo, viene associata alla catena pesante μ: 
                il linfocita transita allo stadio di <strong>Linfocita B Immaturo</strong> esprimendo per la prima volta un <strong>BCR completo (IgM di membrana)</strong>. 
                In questo momento delicato, la cellula viene esposta agli autoantigeni presenti nel microambiente midollare per verificare l'autotolleranza:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/30 dark:bg-emerald-950/20">
                  <strong className="text-emerald-900 dark:text-emerald-200 block mb-1">1. Nessuna Autoreattività</strong>
                  <p className="text-slate-700 dark:text-slate-300 text-xs">
                    Se il BCR non riconosce autoantigeni con affinità significativa, la cellula supera il controllo ed è autorizzata 
                    a lasciare il midollo osseo verso la milza come linfocita B transizionale (T1).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50/30 dark:bg-rose-950/20">
                  <strong className="text-rose-900 dark:text-rose-200 block mb-1">2. Alta Affinità (Self Multivalente)</strong>
                  <p className="text-slate-700 dark:text-slate-300 text-xs">
                    Cross-linking massivo da autoantigeni di membrana: la cellula arresta lo sviluppo e attiva il <strong>Receptor Editing</strong>. 
                    Mantiene accesi RAG1/2 e tenta riarrangiamenti secondari su segmenti Vκ a monte e Jκ a valle o passa sul locus λ. 
                    Se il nuovo BCR è innocuo la cellula si salva; se l'autoreattività persiste, va incontro ad apoptosi intrinseca (<strong>Delezione Clonale</strong>).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50/30 dark:bg-amber-950/20">
                  <strong className="text-amber-900 dark:text-amber-200 block mb-1">3. Bassa Affinità (Self Solubile)</strong>
                  <p className="text-slate-700 dark:text-slate-300 text-xs">
                    Stimolazione debole e monovalente: la cellula non muore ma entra in <strong>Anergia Clonale</strong>. 
                    Sottoregola drasticamente le mIgM (esprimendo solo poche mIgD), perde la motilità chemiotattica verso CXCL13 e ha una sopravvivenza ridotta a pochi giorni.
                  </p>
                </div>
              </div>

              {/* Simulatore Incastonato: B cell Tolerance */}
              <div className="pt-2">
                <InteractiveBcellToleranceSimulator />
              </div>

              {/* Box Transizione Splenica e Fattore BAFF */}
              <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/40 dark:bg-indigo-950/20 space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="font-bold text-xs uppercase tracking-wider text-indigo-900 dark:text-indigo-200">
                    Transizione Splenica (B Transizionali T1 e T2) e la Competizione per BAFF
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  I linfociti B immaturi lasciano il midollo come cellule <strong>transizionali T1</strong> (IgM_high IgD_low CD21⁻ CD23⁻) ed entrano nella milza. 
                  Nel follicolo splenico transitano a <strong>cellule T2</strong> (IgM_high IgD_high CD21⁺ CD23⁺) e competono per il fattore di sopravvivenza essenziale 
                  <strong>BAFF (<em>B-cell Activating Factor</em> o BLyS)</strong>, prodotto dalle cellule stromali follicolari e FDC. 
                  Il segnale attraverso il recettore <strong>BAFF-R</strong> attiva la via non canonica di NF-κB (via chinasi NIK e RelB), inducendo proteine anti-apoptotiche Bcl-2. 
                  I cloni anergici o autoreattivi hanno livelli inadeguati di BAFF-R e vengono eliminati per apoptosi competitiva. 
                  I cloni sopravvissuti completano il differenziamento diventando:
                  <br />• <strong>Linfociti B Follicolari Recircolanti (B-2):</strong> fenotipo IgM_low IgD_high CD23⁺, deputati alle risposte T-dipendenti nei centri germinativi;
                  <br />• <strong>Linfociti B della Zona Marginale (MZ B):</strong> fenotipo IgM_high IgD_low CD21_high CD1d⁺, residenti nella zona marginale della milza per intercettare antigeni polisaccaridici ematogeni con risposte rapide T-indipendenti.
                </p>
              </div>
            </div>
          </div>

          {/* Ponte Fisiologico di Transizione */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-100 via-indigo-50 to-slate-100 dark:from-slate-800 dark:via-indigo-950/40 dark:to-slate-800 border border-indigo-200/60 dark:border-indigo-800/50 flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-indigo-900 dark:text-indigo-200 font-semibold block mb-0.5">
                Ponte Fisiologico di Transizione: Dal riconoscimento dell'antigene nativo alla presentazione MHC-ristretta
              </strong>
              Se il linfocita B è capace di riconoscere molecole solubili o di membrana nella loro conformazione tridimensionale nativa, 
              il linfocita T è cieco verso gli antigeni intatti: può riconoscere esclusivamente piccoli frammenti peptidici lineari 
              incastonati nelle tasche molecolari delle molecole del <strong>Complesso Maggiore di Istocompatibilità (MHC / HLA)</strong>.
            </div>
          </div>
        </section>


        {/* =========================================================================
            SEZIONE 2.4: COMPLESSO MHC / HLA: STRUTTURA & GENETICA 6P21.3
            ========================================================================= */}
        <section
          id="sec-2-mhc-struttura"
          aria-labelledby="heading-sec-2-mhc-struttura"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-wider font-bold">
              <Dna className="w-4 h-4" />
              <span>Sezione 2.4 · Genetica di Popolazione e Struttura Molecolare (Lezione 9)</span>
            </div>
            <h2 id="heading-sec-2-mhc-struttura" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Complesso MHC / HLA: Struttura, Tasche Peptidiche, Mappa Genomica 6p21.3 ed Eredità Aplotipica
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Mappa dei loci HLA di Classe I, II e III sul cromosoma 6, poligenia, polimorfismo estremo e codominanza dell'espressione; architettura 3D della tasca chiusa di MHC-I (α1/α2 + β2m) vs tasca aperta di MHC-II (α1/β1), residui di ancoraggio P2/P9 ed eredità aplotipica mendeliana con linkage disequilibrium.
            </p>
          </div>

          <div className="space-y-5 text-slate-800 dark:text-slate-200">
            <p>
              Il <strong>Complesso Maggiore di Istocompatibilità (MHC, <em>Major Histocompatibility Complex</em>)</strong>, 
              denominato nella specie umana <strong>HLA (<em>Human Leukocyte Antigen</em>)</strong>, è un cluster di oltre 200 geni 
              estremamente denso localizzato sul braccio corto del <strong>cromosoma 6 (regione 6p21.3)</strong>, esteso per circa 3.6-4.0 megabasi. 
              Rappresenta la regione genomica a più alto grado di polimorfismo di tutti i vertebrati ed è la sede primaria della determinazione 
              genetica dell'identità biologica self e della suscettibilità alle malattie autoimmuni.
            </p>

            {/* Sotto-blocco 1: Mappa Genomica e i Tre Pilastri Genetici */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Binary className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>1. Organizzazione Genomica delle Tre Regioni HLA</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-1.5">
                  <strong className="text-indigo-900 dark:text-indigo-200 block font-bold">Regione di Classe II (Centromerica)</strong>
                  <p className="text-slate-700 dark:text-slate-300 text-xs">
                    Codifica per gli eterodimeri classici <strong>HLA-DP (DPA1, DPB1)</strong>, <strong>HLA-DQ (DQA1, DQB1)</strong> e <strong>HLA-DR (DRA, DRB1, DRB3/4/5)</strong>. 
                    Ospita inoltre i geni per i componenti della processazione antigenica: <strong>TAP1, TAP2, Tapasina (TAPBP), LMP2 (PSMB9), LMP7 (PSMB8)</strong>, 
                    nonché gli editor HLA-DM e HLA-DO.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50/30 dark:bg-violet-950/20 space-y-1.5">
                  <strong className="text-violet-900 dark:text-violet-200 block font-bold">Regione di Classe III (Intermedia)</strong>
                  <p className="text-slate-700 dark:text-slate-300 text-xs">
                    Non codifica per molecole di presentazione ma per molecole infiammatorie e del complemento: 
                    <strong>C2, C4A, C4B, Fattore B</strong> della via alternativa, <strong>TNF-α</strong>, <strong>Linfotossina-α (LT-α)</strong> 
                    e proteine da shock termico (<strong>HSP70</strong>).
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-1.5">
                  <strong className="text-indigo-900 dark:text-indigo-200 block font-bold">Regione di Classe I (Telomerica)</strong>
                  <p className="text-slate-700 dark:text-slate-300 text-xs">
                    Codifica per le catene pesanti polimorfiche classiche <strong>HLA-A, HLA-B, HLA-C</strong>. 
                    Include inoltre i geni non classici a polimorfismo limitato: <strong>HLA-E</strong> (riconosciuto da NKG2A/CD94 delle NK), 
                    <strong>HLA-F</strong> e <strong>HLA-G</strong> (essenziale nella tolleranza immunitaria al trofoblasto placentare).
                  </p>
                </div>
              </div>

              {/* I Tre Pilastri: Poligenia, Polimorfismo, Codominanza */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-2 text-xs sm:text-sm">
                <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-indigo-600" />
                  <span>I Tre Pilastri della Genetica HLA:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-700 dark:text-slate-300 text-xs">
                  <div>
                    <strong>1. Poligenia:</strong> coesistenza di multipli geni distinti per ciascuna classe (3 loci per la Classe I; 3 o 4 loci per la Classe II per ciascun cromosoma aploide).
                  </div>
                  <div>
                    <strong>2. Polimorfismo Estremo:</strong> nella popolazione umana sono descritti oltre 35.000 alleli differenti (database IPD-IMGT/HLA). La variabilità allelica è concentrata nei residui aminoacidici che delimitano la tasca peptidica.
                  </div>
                  <div>
                    <strong>3. Codominanza Assoluta:</strong> entrambi gli alleli (materno e paterno) sono trascritti ed espressi contemporaneamente sulla superficie di ciascuna cellula.
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs pt-1">
                  Un individuo eterozigote esprime quindi contemporaneamente sulla membrana delle proprie cellule nucleate: 
                  <strong>6 molecole differenti di Classe I</strong> (2 alleli HLA-A + 2 HLA-B + 2 HLA-C) e fino a <strong>8-12 eterodimeri di Classe II</strong> 
                  (grazie alla capacità delle catene α e β di combinarsi sia in cis dallo stesso cromosoma che in trans da cromosomi diversi per HLA-DQ e HLA-DP).
                </p>
              </div>
            </div>

            {/* Sotto-blocco 2: Architettura 3D a Confronto (MHC-I vs MHC-II) */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>2. Architettura Strutturale 3D delle Tasche di Legame Peptidico</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Scheda MHC-I */}
                <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-2 text-xs sm:text-sm">
                  <div className="font-bold text-indigo-900 dark:text-indigo-200 flex items-center justify-between">
                    <span>MHC di Classe I (Tasca Chiusa)</span>
                    <span className="px-2 py-0.5 rounded bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-[10px] font-mono">
                      CD8⁺ Ristretto
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    <li>• <strong>Subunità Polipeptidiche:</strong> Catena pesante transmembrana α (45 kDa, tre domini α1, α2, α3) associata non covalentemente alla <strong>β₂-microglobulina (12 kDa)</strong>, catena costante invariante codificata sul <strong>cromosoma 15</strong>.</li>
                    <li>• <strong>Fessura di Legame:</strong> formata interamente dai domini <strong>α1 e α2</strong> della catena pesante: un pavimento di 8 filamenti a foglietto β antiparalleli sormontato da due α-eliche anfipatiche. Il dominio <strong>α3</strong> lega il corecettore CD8.</li>
                    <li>• <strong>Conformazione della Tasca:</strong> rigidamente <strong>CHIUSA alle due estremità</strong> da residui conservati di tirosina che formano legami a idrogeno con i terminali amminico (N-term) e carbossilico (C-term) del peptide.</li>
                    <li>• <strong>Lunghezza del Peptide:</strong> strettamente compresa tra <strong>8 e 10 aminoacidi</strong> (lunghezza aurea 9 aa). Il peptide assume una conformazione inarcata al centro che protrude verso il TCR.</li>
                    <li>• <strong>Residui di Ancoraggio (Anchor Residues):</strong> posizionati alle due estremità: tipicamente alla posizione <strong>P2</strong> (aminoacidi idrofobici o basici alloggiati nella tasca B) e alla posizione terminale <strong>P9 / P-omega</strong> (residui idrofobici apolari come Leucina, Valina, Isoleucina o basici come Lisina/Arginina alloggiati nella profonda tasca F).</li>
                  </ul>
                </div>

                {/* Scheda MHC-II */}
                <div className="p-4 rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50/30 dark:bg-violet-950/20 space-y-2 text-xs sm:text-sm">
                  <div className="font-bold text-violet-900 dark:text-violet-200 flex items-center justify-between">
                    <span>MHC di Classe II (Tasca Aperta)</span>
                    <span className="px-2 py-0.5 rounded bg-violet-200 dark:bg-violet-900 text-violet-800 dark:text-violet-200 text-[10px] font-mono">
                      CD4⁺ Ristretto
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    <li>• <strong>Subunità Polipeptidiche:</strong> eterodimero di due catene polimorfiche transmembrana, <strong>catena α (33 kDa, domini α1-α2)</strong> e <strong>catena β (28 kDa, domini β1-β2)</strong>, entrambe codificate nella regione HLA sul cromosoma 6.</li>
                    <li>• <strong>Fessura di Legame:</strong> formata dall'interazione eterodimerica tra il dominio <strong>α1</strong> e il dominio <strong>β1</strong>. Il dominio <strong>β2</strong> lega selettivamente il corecettore CD4.</li>
                    <li>• <strong>Conformazione della Tasca:</strong> fessura <strong>APERTA a entrambi i lati</strong>, priva di blocchi alle estremità. Il peptide si adagia come una fune continua lasciando sporgere i terminali N e C fuori dalla tasca.</li>
                    <li>• <strong>Lunghezza del Peptide:</strong> compresa tra <strong>12 e 25 aminoacidi</strong> (lunghezza ottimale tipica di 13-18 aa). I residui terminali sporgenti possono essere tagliati in vivo da esopeptidasi.</li>
                    <li>• <strong>Residui di Ancoraggio (Anchor Residues):</strong> distribuiti internamente lungo il core centrale peptidico (tipicamente 9 aminoacidi): un residuo idrofobico voluminoso aromantico alla posizione <strong>P1</strong> (Phe, Tyr, Trp, Leu) alloggiato in una profonda tasca idrofobica, associato a residui di ancoraggio secondari alle posizioni <strong>P4, P6 e P9</strong>.</li>
                  </ul>
                </div>
              </div>

              {/* Simulatori Incastonati: MHC Pocket & HLA Genetics */}
              <div className="pt-2 space-y-4">
                <InteractiveMhcPocketSimulator />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <InteractiveHlaGeneticsSimulator />
                  <InteractiveHlaInheritanceSimulator />
                </div>
              </div>

              {/* Box Eredità Aplotipica e Linkage Disequilibrium */}
              <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/40 dark:bg-indigo-950/20 space-y-2">
                <div className="flex items-center gap-2">
                  <BookmarkCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="font-bold text-xs uppercase tracking-wider text-indigo-900 dark:text-indigo-200">
                    Aplotipo HLA, Linkage Disequilibrium e Calcolo della Compatibilità nei Trapianti
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  A causa della stretta vicinanza fisica sul cromosoma 6 (frequenza di ricombinazione meiotica / crossing-over &lt; 1%), 
                  l'insieme dei geni HLA presenti su un singolo cromosoma viene ereditato in blocco come un'unità inscindibile definita <strong>Aplotipo HLA</strong>.
                  <br />• <strong>Genetica Mendeliana:</strong> ogni individuo possiede 2 aplotipi (uno materno e uno paterno). Tra fratelli germani nati dagli stessi genitori 
                  la probabilità di ereditare gli stessi 2 aplotipi (HLA-identità 100%) è del <strong>25%</strong>; la probabilità di condividere 1 aplotipo 
                  (aploidentità 50%) è del <strong>50%</strong>; la probabilità di essere completamente incompatibili (0 aplotipi condivisi) è del <strong>25%</strong>.
                  <br />• <strong>Linkage Disequilibrium (Disibinamento di Associazione):</strong> alcuni alleli HLA co-segregano nella popolazione con una frequenza 
                  statisticamente assai superiore a quella attesa dal prodotto casuale delle loro singole frequenze alleliche. 
                  L'esempio emblematico nelle popolazioni caucasiche è l'aplotipo ancestrale <strong>HLA-A*01:01 - B*08:01 - DRB1*03:01</strong>, fortemente associato 
                  a suscettibilità per Celiachia, Lupus Eritematoso Sistemico (LES) e Miastenia Gravis.
                  <br />• <strong>Associazione Malattia HLA-B27:</strong> l'allele <em>HLA-B*27</em> conferisce un rischio relativo superiore a <strong>90</strong> 
                  per lo sviluppo della <strong>Spondilite Anchilosante</strong>, spiegato dalla tendenza molecolare della catena pesante a formare omodimeri B27₂ anomali sulla membrana e dal misfolding nel reticolo endoplasmatico con autofagia e stress del RE.
                </p>
              </div>
            </div>
          </div>

          {/* Ponte Fisiologico di Transizione */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-100 via-indigo-50 to-slate-100 dark:from-slate-800 dark:via-indigo-950/40 dark:to-slate-800 border border-indigo-200/60 dark:border-indigo-800/50 flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-indigo-900 dark:text-indigo-200 font-semibold block mb-0.5">
                Ponte Fisiologico di Transizione: Dalla tasca tridimensionale ai percorsi di processazione intracellulare
              </strong>
              Come fanno i peptidi ad essere caricati con precisione millimetrica nelle rispettive tasche MHC? 
              La cellula adotta due percorsi molecolari rigidamente segregati: 
              la <strong>via citosolica per MHC-I</strong> e la <strong>via endocitaria per MHC-II</strong>.
            </div>
          </div>
        </section>


        {/* =========================================================================
            SEZIONE 2.5: VIE DI PROCESSAZIONE ANTIGENICA: CITOSOLICA VS ENDOCITARIA
            ========================================================================= */}
        <section
          id="sec-2-processing"
          aria-labelledby="heading-sec-2-processing"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-wider font-bold">
              <Activity className="w-4 h-4" />
              <span>Sezione 2.5 · Vie di Processazione Intracellulare (Lezione 10)</span>
            </div>
            <h2 id="heading-sec-2-processing" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Vie di Processazione Antigenica: Citosolica (MHC-I) vs Endocitaria (MHC-II)
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              L'immunoproteasoma LMP2/MECL-1/LMP7, il trasportatore TAP1/TAP2 e il complesso di caricamento PLC (Calreticulina, ERp57, Tapasina, ERAP1/2) vs la biosintesi di MHC-II con la catena invariante Ii/CD74, il compartimento MIIC, la proteolisi in CLIP, l'editing catalitico di HLA-DM e il turnover MARCH1; difetti genetici BLS-I e BLS-II.
            </p>
          </div>

          <div className="space-y-5 text-slate-800 dark:text-slate-200">
            <p>
              La segregazione funzionale del sistema immunitario (distinzione tra bersagli citotossici CD8⁺ e cellule cooperatrici CD4⁺) 
              è garantita dalla rigida separazione biochimica tra il compartimento intracellulare citosolico 
              (che campiona proteine endogene sintetizzate dalla cellula) e il compartimento endolisosomiale vescicolare 
              (che campiona proteine extracellulari endocitate o fagocitate).
            </p>

            {/* Sotto-blocco 1: La Via Citosolica / Endogena per MHC-I */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>1. La Via Citosolica (Endogena) per MHC di Classe I</span>
              </h3>
              
              <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-3 text-xs sm:text-sm">
                <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
                  <li>
                    <strong>Substrati e Marcatura con Ubiquitina:</strong> le proteine citosoliche (antigeni virali, neoantigeni tumorali o proteine self degenerate, 
                    comprese le <strong>DRiPs</strong>, <em>Defective Ribosomal Products</em> che costituiscono fino al 30% delle catene polipeptidiche neosintetizzate 
                    ripiegate scorrettamente) vengono coniugate a catene di <strong>poliubiquitina</strong> (legame tramite Lys48) dalla cascata enzimatica E1-E2-E3 ligasi.
                  </li>
                  <li>
                    <strong>Degradazione mediata dall'Immunoproteasoma:</strong> in condizioni infiammatorie, sotto l'azione di <strong>IFN-γ e TNF-α</strong>, 
                    le tre subunità catalitiche costitutive del proteasoma 20S (β1, β2, β5) vengono sostituite dalle subunità inducibili 
                    <strong>LMP2 (β1i), MECL-1 (β2i) e LMP7 (β5i)</strong>. L'immunoproteasoma, accoppiato al cappuccio regolatorio <strong>PA28 (11S)</strong>, 
                    modifica il profilo di taglio: sopprime il clivaggio dopo aminoacidi acidi e massimizza il clivaggio dopo aminoacidi <strong>idrofobici o basici</strong>, 
                    generando frammenti peptidici dotati della precisa estremità C-terminale richiesta per alloggiare nella tasca F di MHC-I.
                  </li>
                  <li>
                    <strong>Traslocazione nel Reticolo Endoplasmatico via TAP:</strong> i peptidi citosolici vengono traslocati nel lume del RER 
                    mediante il trasportatore ABC ATP-dipendente <strong>TAP (eterodimero TAP1 e TAP2)</strong>, codificato nella regione MHC-II. 
                    TAP seleziona selettivamente peptidi di 8-16 aminoacidi con estremità carbossilica idrofobica o basica.
                  </li>
                  <li>
                    <strong>Il Complesso di Caricamento del Peptide (PLC, <em>Peptide-Loading Complex</em>):</strong> nel lume del RER la catena pesante α MHC-I 
                    neosintetizzata si lega al chaperone <strong>Calnexina</strong>. Dopo l'unione con la β2-microglobulina, la calnexina viene rilasciata e il dimero 
                    viene accolto da <strong>Calreticulina</strong> e dall'ossidoriduttasi <strong>ERp57</strong>. L'interazione cardine è mediata dalla 
                    <strong>Tapasina (TAPBP)</strong>, la quale fa da ponte fisico tra il canale di TAP e la catena α, tenendo aperta la fessura di legame. 
                    La tapasina funge da <strong>«Peptide Editor»</strong>: impedisce la chiusura prematura della tasca e consente solo a peptidi con elevata affinità 
                    e stabilità cinetica di sigillare il complesso.
                  </li>
                  <li>
                    <strong>Rifilatura N-terminale via ERAP ed Esportazione:</strong> le aminopeptidasi del reticolo endoplasmatico <strong>ERAP1 ed ERAP2</strong> 
                    rifilano i peptidi traslocati da TAP che superano i 10 aminoacidi, tagliando i residui N-terminali fino alla misura aurea di 8-9 aminoacidi. 
                    Una volta formato il trimero stabile (catena α + β2m + peptide), MHC-I si distacca dal PLC e transita attraverso il Golgi fino alla membrana cellulare.
                  </li>
                </ol>
              </div>

              {/* Box BLS-I */}
              <div className="p-3.5 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/40 dark:bg-rose-950/20 text-xs sm:text-sm">
                <strong className="text-rose-900 dark:text-rose-200 font-bold block mb-1">
                  Bare Lymphocyte Syndrome di Tipo I (BLS-I):
                </strong>
                Causata da mutazioni autosomiche recessive nei geni <strong>TAP1, TAP2 o Tapasina</strong>. I dimeri MHC-I non possono essere caricati con i peptidi, 
                risultano termicamente instabili e vengono retrotraslocati e degradati nel citosol via ERAD. 
                Quadro clinico: espressione di MHC-I &lt; 1-5% del normale, severo deficit di linfociti T citotossici CD8⁺ circolanti, infezioni batteriche respiratorie 
                croniche con bronchiectasie precoci e <strong>vasculite granulomatosa necrotizzante cutanea</strong> (ulcere fagedeniche agli arti inferiori), 
                mentre l'immunità antivirale è parzialmente preservata dalla normale funzione delle cellule NK.
              </div>
            </div>

            {/* Sotto-blocco 2: La Via Endocitaria / Esogena per MHC-II */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>2. La Via Endocitaria (Esogena) per MHC di Classe II</span>
              </h3>

              <div className="p-4 rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50/30 dark:bg-violet-950/20 space-y-3 text-xs sm:text-sm">
                <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
                  <li>
                    <strong>Endocitosi e Degradazione Endolisosomiale:</strong> le APC professionali (cellule dendritiche, macrofagi, linfociti B) internalizzano 
                    antigeni extracellulari mediante fagocitosi, macropinocitosi o endocitosi recettore-mediata. 
                    Le vescicole subiscono progressiva acidificazione (da pH 6.5 a pH 4.5-5.0 nel <strong>MIIC, <em>MHC Class II Compartment</em></strong>) 
                    alimentata dalla pompa protonica V-ATPase. L'ambiente acido attiva le endoproteasi lisosomiali, in particolare le catepsine 
                    (<strong>Catepsina S</strong> nelle cellule dendritiche e B; <strong>Catepsina L</strong> nell'epitelio timico corticale).
                  </li>
                  <li>
                    <strong>Biosintesi nel RE e la Catena Invariante (Ii / CD74):</strong> nel reticolo endoplasmatico, le catene α e β di MHC-II neosintetizzate 
                    si assemblano in un nonamero formato da tre eterodimeri αβ uniti a un trimero centrale di <strong>Catena Invariante (Ii o CD74, 31 kDa)</strong>. 
                    Il dominio <strong>CLIP (<em>Class II-associated Invariant Chain Peptide</em>, residui 81-104)</strong> della catena invariante si alloggia 
                    fisicamente nella tasca di legame peptidico di ciascun dimero:
                    <div className="pl-4 pt-1 space-y-1">
                      <div>• Impedisce l'occupazione impropria della tasca da parte dei peptidi citosolici traslocati da TAP nel RER destinati a MHC-I;</div>
                      <div>• Funge da chaperone indispensabile per il corretto ripiegamento dell'eterodimero;</div>
                      <div>• Fornisce un segnale di sorting dileucinico (Leu-Ile) nella coda citoplasmatica che indirizza il complesso lungo la via secretoria verso il compartimento endosomiale acido MIIC.</div>
                    </div>
                  </li>
                  <li>
                    <strong>Digestione di Ii e Genesi del Frammento CLIP:</strong> nel compartimento MIIC le catepsine acide clivano sequenzialmente la catena invariante 
                    lasciando inserito nella fessura di legame solo il piccolo frammento protettivo <strong>CLIP</strong>.
                  </li>
                  <li>
                    <strong>Editing Peptidico mediato da HLA-DM:</strong> la molecola MHC non classica <strong>HLA-DM</strong> (strutturalmente analoga a MHC-II 
                    ma priva di tasca per peptidi e localizzata stabilmente nei lisosomi) si lega all'eterodimero inducendo una distorsione conformazionale 
                    che provoca il <strong>rilascio del frammento CLIP</strong>. HLA-DM stabilizza la tasca vuota e agisce come catalizzatore enzimatico e «peptide editor», 
                    favorendo l'alloggiamento selettivo dei soli peptidi esogeni che possiedono la più elevata affinità cinetica (off-rate lento). 
                    Nei linfociti B e nel timo, <strong>HLA-DO</strong> si complessa a HLA-DM inibendone la funzione e modulando il repertorio presentato.
                  </li>
                  <li>
                    <strong>Regolazione del Turnover di Superficie via MARCH1:</strong> l'ubiquitina ligasi E3 <strong>MARCH1</strong> poliubiquitina la coda citoplasmatica 
                    della catena β di MHC-II e di CD86 inducendone l'endocitosi e la degradazione lisosomiale. Durante l'attivazione della DC mediata da TLR, 
                    la trascrizione di MARCH1 viene bruscamente spenta: l'emivita di MHC-II sulla membrana cellulare sale da 4 a oltre <strong>40-50 ore</strong>, 
                    "congelando" la presentazione dei peptidi microbici per il priming nei linfonodi drenanti.
                  </li>
                </ol>
              </div>

              {/* Box BLS-II */}
              <div className="p-3.5 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/40 dark:bg-rose-950/20 text-xs sm:text-sm">
                <strong className="text-rose-900 dark:text-rose-200 font-bold block mb-1">
                  Bare Lymphocyte Syndrome di Tipo II (BLS-II):
                </strong>
                Grave immunodeficienza combinata a trasmissione autosomica recessiva causata da mutazioni non nei geni strutturali HLA ma nei 
                <strong>fattori trascrizionali transattivatori del promotore MHC-II</strong>: il master regulator <strong>CIITA</strong> o le subunità del complesso trimerico 
                RFX (<strong>RFXANK, RFX5, RFXAP</strong>). L'espressione di tutte le molecole MHC di classe II (HLA-DP, DQ, DR) è totalmente assente. 
                Nel timo fallisce la selezione positiva dei linfociti T CD4⁺: il paziente presenta un <strong>crollo quasi totale dei T CD4⁺ circolanti</strong>, 
                con grave deficit immunitario sia cellulo-mediato che umorale (mancata cooperazione T-B) che si manifesta nella prima infanzia con infezioni 
                opportunistiche fulminanti (<em>Pneumocystis jirovecii</em>, CMV, Candida) e decesso in assenza di trapianto di midollo osseo.
              </div>

              {/* Simulatori Incastonati: Processing Pathways & DC Maturation */}
              <div className="pt-2 space-y-4">
                <InteractiveProcessingPathwaysSimulator />
                <InteractiveDendriticCellMaturationSimulator />
              </div>
            </div>
          </div>

          {/* Ponte Fisiologico di Transizione */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-100 via-indigo-50 to-slate-100 dark:from-slate-800 dark:via-indigo-950/40 dark:to-slate-800 border border-indigo-200/60 dark:border-indigo-800/50 flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-indigo-900 dark:text-indigo-200 font-semibold block mb-0.5">
                Ponte Fisiologico di Transizione: Le eccezioni al dogma della segregazione funzionale
              </strong>
              Come fa il sistema immunitario a innescare una risposta di linfociti T citotossici CD8⁺ contro virus che non infettano le cellule dendritiche 
              o contro cellule tumorali non ematopoietiche? E come vengono rilevati i lipidi microbici o i metaboliti vitaminici? 
              La risposta risiede nella <strong>cross-presentazione</strong>, nei <strong>superantigeni</strong> e nei recettori <strong>CD1 e MR1</strong>.
            </div>
          </div>
        </section>


        {/* =========================================================================
            SEZIONE 2.6: CROSS-PRESENTAZIONE, SUPERANTIGENI & VIE NON CLASSICHE
            ========================================================================= */}
        <section
          id="sec-2-cross-non-classiche"
          aria-labelledby="heading-sec-2-cross-non-classiche"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-wider font-bold">
              <Zap className="w-4 h-4" />
              <span>Sezione 2.6 · Vie Non Convenzionali e Allerta Sistemica (Lezione 10)</span>
            </div>
            <h2 id="heading-sec-2-cross-non-classiche" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Cross-Presentazione (cDC1), Superantigeni e Vie Non Classiche (CD1, MR1, Butirofiline)
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              La biologia specialistica delle cellule dendritiche cDC1 (BATF3, XCR1, CLEC9A) e le due vie molecolari di cross-priming (citosolica Sec61 vs vacuolare); la tempesta citochinica dei superantigeni batterici (TSST-1, SEA-SEE); la presentazione lipidica via CD1a-d e i linfociti invarianti iNKT, MAIT (MR1/riboflavina) e T γδ (Butirofiline/IPP).
            </p>
          </div>

          <div className="space-y-5 text-slate-800 dark:text-slate-200">
            {/* Sotto-blocco 1: Cross-Presentazione e cDC1 */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>1. Il Meccanismo della Cross-Presentazione e le Cellule Dendritiche cDC1</span>
              </h3>
              <p>
                Il dogma classico postula che gli antigeni esogeni internalizzati vengano instradati unicamente su molecole MHC di classe II per i T CD4⁺. 
                Tuttavia, la maggior parte dei virus patogeni e delle neoplasie epiteliali non infetta né trasforma le cellule dendritiche. 
                Affinché i <strong>linfociti T citotossici CD8⁺ naïve</strong> (che richiedono costimolazione professionale B7-CD28) possano essere attivati (<strong>Cross-Priming</strong>), 
                alcune cellule dendritiche sono dotate della capacità biochimica di acquisire antigeni extracellulari e caricarli su molecole <strong>MHC di Classe I</strong>.
              </p>

              <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-2 text-xs sm:text-sm">
                <div className="font-bold text-indigo-900 dark:text-indigo-200">
                  Le Cellule Dendritiche Convenzionali di Tipo 1 (cDC1):
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                  Nell'essere umano sono identificate fenotipicamente dai marcatori <strong>BDCA3 / CD141⁺</strong>, dal recettore per chemochine <strong>XCR1⁺</strong> 
                  (che riconosce XCL1 secreto dalle NK e dai CD8⁺ attivati) e dal recettore lectinico <strong>CLEC9A (DNGR-1)</strong>, 
                  il quale riconosce specificamente i filamenti di F-actina esposti dalle membrane necrotiche di cellule danneggiate. 
                  Il loro sviluppo dipende in modo assoluto dai fattori di trascrizione <strong>BATF3 e IRF8</strong> (i topi knock-out <em>Batf3⁻/⁻</em> sono privi di cDC1 
                  e totalmente incapaci di rigettare tumori immunogeni o innescare CTL antivirali).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <strong className="text-slate-900 dark:text-slate-100 block mb-1">Via Citosolica (Dominante)</strong>
                    <p className="text-slate-600 dark:text-slate-400">
                      L'antigene fagocitato fuoriesce dal fagosoma nel citosol attraverso il canale di traslocazione <strong>Sec61</strong> 
                      e componenti ERAD associati alla proteasi p97/VCP. Nel citosol viene ubiquitinato e frammentato dall'<strong>immunoproteasoma</strong>. 
                      I peptidi rientrano via TAP nel fagosoma stesso o nel RER, dove vengono caricati su MHC-I.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <strong className="text-slate-900 dark:text-slate-100 block mb-1">Via Vacuolare (TAP-Indipendente)</strong>
                    <p className="text-slate-600 dark:text-slate-400">
                      L'antigene viene digerito direttamente all'interno dell'endofagosoma mediante la <strong>Catepsina S</strong> acida e caricato 
                      su molecole MHC-I che ricircolano dalla membrana plasmatica negli endosomi precoci, senza alcun intervento del proteasoma o di TAP.
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-700 dark:text-slate-300 border-t border-indigo-200 dark:border-indigo-800">
                  <strong>Fenomeno del Cross-Dressing:</strong> la cellula dendritica non processa internamente l'antigene ma "cattura" complessi 
                  MHC-I:peptide già preformati direttamente dalla membrana di altre cellule tramite <em>trogocitosi</em>, esosomi tumorali o nanotubi citoplasmatici, 
                  esponendoli intatti sulla propria membrana plasmatica (via semidiretta di alloriconoscimento nei trapianti d'organo).
                </div>
              </div>

              {/* Simulatore Incastonato: Cross-Presentation */}
              <div className="pt-2">
                <InteractiveCrossPresentationSimulator />
              </div>
            </div>

            {/* Sotto-blocco 2: Superantigeni */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Flame className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>2. I Superantigeni e la Sindrome da Shock Tossico</span>
              </h3>
              <p>
                I <strong>superantigeni (SAg)</strong> sono potenti esotossine batteriche o virali prodotte tipicamente da cocchi Gram-positivi 
                (in particolare la tossina dello shock tossico <strong>TSST-1</strong> e le enterotossine stafilococciche <strong>SEA-SEE</strong> di <em>Staphylococcus aureus</em>; 
                e le esotossine pirogene <strong>SPE-A e SPE-C</strong> di <em>Streptococcus pyogenes</em>).
              </p>

              <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/40 dark:bg-rose-950/20 space-y-2 text-xs sm:text-sm">
                <div className="font-bold text-rose-900 dark:text-rose-200">
                  Meccanismo d'Azione Non Convenzionale a Forma di "Morsetto Molecolare":
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                  I superantigeni scavalcano la fessura di legame peptidico: <strong>non richiedono processazione endocellulare</strong> né alloggiamento 
                  nella tasca MHC. Si legano simultaneamente all'esterno del complesso: legano una porzione non polimorfica della catena <strong>α di MHC-II</strong> 
                  su una APC e una specifica famiglia del segmento variabile <strong>Vβ del TCR</strong> sul linfocita T (es. Vβ2 per TSST-1).
                </p>
                <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 pt-1">
                  <div>• <strong>Attivazione Policlonale Massiva:</strong> attivano indistintamente dal <strong>5% al 25% dell'intero repertorio T</strong> dell'organismo (rispetto allo 0.001-0.01% di una risposta convenzionale epitopo-specifica).</div>
                  <div>• <strong>Tempesta Citochinica (Cytokine Storm):</strong> rilascio sistemico incontrollato di <strong>TNF-α, IL-1β, IL-2, IL-6 e IFN-γ</strong>.</div>
                  <div>• <strong>Quadro Clinico della Sindrome da Shock Tossico (TSS):</strong> febbre altissima (&gt;39°C), rash cutaneo eritematoso scarlattiniforme con desquamazione palmare/plantare tardiva, vasodilatazione periferica grave con shock ipotensivo refrattario, coagulazione intravascolare disseminata (CID) e insufficienza multiorgano (MOF).</div>
                  <div>• <strong>Esito Tardivo:</strong> anergia clonale irreversibile o apoptosi massiva (<em>clonal exhaustion</em>) dei linfociti T coinvolti.</div>
                </div>
              </div>

              {/* Simulatore Incastonato: Superantigen Vs Non Protein */}
              <div className="pt-2">
                <InteractiveSuperantigenVsNonProteinSimulator />
              </div>
            </div>

            {/* Sotto-blocco 3: Vie Non Classiche (CD1, MR1, Butirofiline) */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>3. Presentazione di Antigeni Non Peptidici: Famiglia CD1, MR1 e Butirofiline</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                {/* CD1 */}
                <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-1.5">
                  <div className="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Famiglia CD1 (CD1a-d)</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    Molecole non polimorfe associate a β₂m (Cr. 1q22). Possiedono tasche idrofobiche eccezionalmente profonde rivestite da residui apolari 
                    adatte ad alloggiare catene alchiliche lipidiche fino a 80 atomi di carbonio (<strong>acidi micolici, LAM</strong> di <em>M. tuberculosis</em> presentati da CD1b). 
                    <strong>CD1d</strong> presenta glicolipidi (come l'<strong>α-galattosilceramide, α-GalCer</strong>) ai linfociti <strong>iNKT</strong> 
                    (TCR invariante Vα24-Jα18), i quali rilasciano simultaneamente massicce quantità di IL-4 e IFN-γ entro poche ore. 
                    Il caricamento richiede gli chaperoni lipidici <strong>Saposine e NPC2</strong>.
                  </p>
                </div>

                {/* MR1 */}
                <div className="p-4 rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50/30 dark:bg-violet-950/20 space-y-1.5">
                  <div className="font-bold text-violet-900 dark:text-violet-200 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-violet-600" />
                    <span>MR1 & Linfociti MAIT</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    Molecola invariante associata a β₂m la cui tasca alloggia intermedi idrosolubili della via di biosintesi batterica della 
                    <strong>Vitamina B2 (Riboflavina)</strong>, in particolare il metabolita <strong>5-OP-RU</strong>. 
                    I mammiferi non sintetizzano riboflavina (la assumono con la dieta), per cui MR1 sorveglia selettivamente i microbi metabolicamente attivi. 
                    Attiva i linfociti <strong>MAIT</strong> (<em>Mucosal-Associated Invariant T</em> con catena TCR Vα7.2-Jα33/20), 
                    estremamente abbondanti nella mucosa intestinale e nel parenchima epatico (fino al 20-40% dei T epatici).
                  </p>
                </div>

                {/* Butirofiline */}
                <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-1.5">
                  <div className="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Butirofiline & Linfociti T γδ</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                    I linfociti <strong>T γδ periferici (Vγ9Vδ2)</strong> rilevano fosfoantigeni intermedi della via del mevalonato (<strong>IPP endogeno</strong> 
                    iperprodotto da cellule tumorali) o della via microbica MEP (<strong>HMBPP</strong>). 
                    I fosfoantigeni non legano la tasca MHC ma si legano al dominio citoplasmatico intracellulare <strong>B30.2</strong> 
                    della <strong>Butirofilina BTN3A1 (CD277)</strong>, la quale eterodimerizza con <strong>BTN2A1</strong> 
                    attivando direttamente il TCR Vγ9Vδ2 per una citotossicità immediata priva di restrizione HLA classica.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ponte Fisiologico di Transizione */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-100 via-indigo-50 to-slate-100 dark:from-slate-800 dark:via-indigo-950/40 dark:to-slate-800 border border-indigo-200/60 dark:border-indigo-800/50 flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-indigo-900 dark:text-indigo-200 font-semibold block mb-0.5">
                Ponte Fisiologico di Transizione: Dalla presentazione periferica alla scuola centrale del timo
              </strong>
              Come fa l'organismo ad addestrare i precursori T affinché riconoscano le molecole MHC self complessate a peptidi estranei, 
              eliminando con rigore chirurgico i cloni autoreattivi pericolosi per i nostri tessuti? 
              L'analisi si sposta nel microambiente del <strong>timo</strong> e nei processi di <strong>selezione positiva e negativa</strong>.
            </div>
          </div>
        </section>


        {/* =========================================================================
            SEZIONE 2.7: ONTOGENESI TIMICA T, PRE-TCR, SELEZIONE POSITIVA/NEGATIVA & AIRE
            ========================================================================= */}
        <section
          id="sec-2-ontogenesi-t"
          aria-labelledby="heading-sec-2-ontogenesi-t"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-6"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-wider font-bold">
              <Target className="w-4 h-4" />
              <span>Sezione 2.7 · Sviluppo Timico e Tolleranza Centrale T (Lezione 11)</span>
            </div>
            <h2 id="heading-sec-2-ontogenesi-t" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Ontogenesi Timica T: Stadi DN1-DN4, Checkpoint Pre-TCR, Selezione Positiva/Negativa e Fattore AIRE
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Impegno di linea via Notch1/DLL4, stadi doppi negativi (DN1-DN4) e checkpoint Pre-TCR (pTα + TCRβ con esclusione allelica), riarrangiamento TCRα nello stadio DP; selezione positiva su cTEC con β5t (restrizione MHC) e lineage commitment ThPOK (CD4) vs Runx3 (CD8); selezione negativa midollare su mTEC mediata da AIRE/FEZF2 (APECED/APS-1), genesi dei tTreg FoxP3⁺ ed egresso S1P/S1PR1 con quantificazione dei TREC.
            </p>
          </div>

          <div className="space-y-5 text-slate-800 dark:text-slate-200">
            <p>
              I progenitori linfoidi migrano dal midollo osseo al timo guidati dal gradiente chemiotattico delle chemochine 
              <strong>CCL21 e CCL25</strong> (che legano i recettori <strong>CCR7 e CCR9</strong> sui precursori ematopoietici precoci ETP/CLP) 
              attraverso le venule ad endotelio alto poste alla giunzione cortico-midollare. 
              Nel microambiente timico corticale l'interazione tra il recettore <strong>Notch1</strong> del timocita e il ligando 
              <strong>Delta-like 4 (DLL4)</strong> espresso dalle cellule epiteliali timiche corticali (cTEC) induce il clivaggio proteolitico mediato da γ-secretasi 
              e la traslocazione nucleare del dominio <strong>NICD</strong>, il quale accende i geni maestri della linea T (<strong>TCF-1, GATA-3, BCL11B</strong>) 
              e reprime permanentemente la linea B, mieloide ed eritroide.
            </p>

            {/* Sotto-blocco 1: Stadi DN1-DN4 e Beta-Selezione del Pre-TCR */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Scissors className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>1. Gli Stadi Doppi Negativi (DN1-DN4) e il Checkpoint del Pre-TCR (Beta-Selezione)</span>
              </h3>
              
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-3 text-xs sm:text-sm">
                <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-indigo-600" />
                  <span>Progressione Differenziativa dei Timociti Doppi Negativi (CD4⁻ CD8⁻):</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 text-xs">
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <strong className="text-indigo-600 dark:text-indigo-400 block mb-0.5">DN1 (CD44⁺ CD25⁻)</strong>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                      c-Kit_high. Precursore iniziale multipotente nella giunzione cortico-midollare; migra verso la corteccia esterna.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <strong className="text-indigo-600 dark:text-indigo-400 block mb-0.5">DN2 (CD44⁺ CD25⁺)</strong>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                      c-Kit_high. Impegno definitivo sigillato da Bcl11b. Inizio del riarrangiamento <strong>Dβ-Jβ</strong> su entrambi gli alleli del locus TCRβ.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <strong className="text-indigo-600 dark:text-indigo-400 block mb-0.5">DN3 (CD44⁻ CD25⁺)</strong>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                      c-Kit_low. Riarrangiamento <strong>Vβ-DJβ</strong> sul primo allele. Stadio del <strong>Primo Checkpoint (Beta-Selezione)</strong>.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <strong className="text-indigo-600 dark:text-indigo-400 block mb-0.5">DN4 (CD44⁻ CD25⁻)</strong>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                      Cellula post-checkpoint: proliferazione clonale intensiva ed espressione coordinata di CD4 e CD8 (transizione a Doppio Positivo).
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/40 dark:bg-indigo-950/20 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
                  <strong className="text-indigo-900 dark:text-indigo-200 block">
                    Il Complesso del Pre-TCR e gli Effetti della Beta-Selezione allo Stadio DN3:
                  </strong>
                  La catena TCRβ appena sintetizzata viene espressa in membrana associata alla catena invariante surrogata 
                  <strong>pTα (<em>Pre-T-cell antigen receptor alpha</em>, 33 kDa)</strong> e al complesso di trasduzione <strong>CD3</strong> (eterodimeri γε, δε e omodimero ζζ). 
                  Il pre-TCR dimerizza spontaneamente testa-coda trasmettendo un segnale tonico autonomo dipendente da <strong>Lck e ZAP-70</strong> che produce 4 esiti:
                  <br />1. <strong>Esclusione Allelica del Locus TCRβ:</strong> inibisce l'espressione di RAG1/2 e chiude l'eterocromatina sul secondo allele TCRβ;
                  <br />2. <strong>Spegnimento Trascrizionale di pTα;</strong>
                  <br />3. <strong>Espansione Clonale Esponenziale</strong> allo stadio DN4 moltiplicando i timociti dotati di TCRβ funzionante;
                  <br />4. <strong>Attivazione dell'Espressione di CD4 e CD8</strong> portando la cellula allo stadio <strong>Doppio Positivo (DP, CD4⁺ CD8⁺)</strong>.
                </div>
              </div>
            </div>

            {/* Sotto-blocco 2: Stadio DP, Riarrangiamento TCRα e Selezione Positiva */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>2. Lo Stadio Doppio Positivo (DP), la Selezione Positiva e la Restrizione MHC</span>
              </h3>
              <p>
                Raggiunto lo stadio DP (che costituisce circa l'<strong>80-85%</strong> dell'intera cellularità timica), la cellula riattiva RAG1 e RAG2 
                e avvia il riarrangiamento della <strong>catena TCRα (cromosoma 14)</strong>. 
                Poiché il locus TCRδ è situato all'interno di TCRα, il primo riarrangiamento Vα-Jα elimina fisicamente il locus δ generando il cerchio 
                episomiale di scarto <strong>TREC (<em>T-cell Receptor Excision Circle</em>)</strong>. 
                A differenza del locus β, sul locus α <strong>non vi è una rigida esclusione allelica</strong>: la cellula compie molteplici riarrangiamenti 
                successivi su entrambi i cromosomi finché non ottiene una catena α selezionabile positivamente.
              </p>

              <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-2 text-xs sm:text-sm">
                <div className="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-indigo-600" />
                  <span>La Selezione Positiva nella Corteccia Timica (cTEC):</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                  I timociti DP saggiano il proprio TCRαβ neosintetizzato contro i complessi self-MHC/peptide esposti dalle cellule epiteliali timiche corticali (cTEC). 
                  Le cTEC possiedono un apparato enzimatico unico: esprimono il <strong>Timoproteasoma</strong> (in cui la subunità β5t sostituisce la subunità β5i) 
                  e la <strong>Catepsina L</strong>, generando peptidi self peculiari a bassa affinità:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                  <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900">
                    <strong className="text-rose-900 dark:text-rose-200 block mb-1">Morte per Negligenza (&gt; 90-95%)</strong>
                    <p className="text-slate-600 dark:text-slate-400">
                      Se il TCR non possiede alcuna affinità per i complessi self-MHC self-peptide, il timocita non riceve alcun segnale trofico 
                      di sopravvivenza ed entra spontaneamente in apoptosi per default entro 3-4 giorni (<em>Death by Neglect</em>).
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900">
                    <strong className="text-emerald-900 dark:text-emerald-200 block mb-1">Selezione Positiva (~2-5%)</strong>
                    <p className="text-slate-600 dark:text-slate-400">
                      Un legame a <strong>bassa o intermedia affinità</strong> trasmette segnali tonici di sopravvivenza via ERK/MAPK e Bcl-2, 
                      arrestando definitivamente RAG e conferendo al repertorio T la proprietà fondamentale della <strong>Restrizione MHC</strong> 
                      (riconoscimento dei soli alleli self presenti nel timo dell'individuo).
                    </p>
                  </div>
                </div>
              </div>

              {/* Lineage Commitment CD4 vs CD8 */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-2 text-xs sm:text-sm">
                <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-indigo-600" />
                  <span>Lineage Commitment: Il Modello dell'Intensità e Durata del Segnale</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                    <strong className="text-indigo-600 dark:text-indigo-400 block font-bold">Destino CD4⁺ Singolo Positivo (Helper)</strong>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Se il TCR riconosce <strong>MHC di Classe II</strong> insieme a CD4 (che trasporta un'elevata densità della chinasi Lck), 
                      viene generato un segnale intracellulare <strong>forte e prolungato nel tempo</strong>. Questo segnale induce il master regulator 
                      <strong>ThPOK (Zbtb7b)</strong> e GATA-3, i quali reprimono permanentemente il gene Runx3 e silenziano il locus CD8.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                    <strong className="text-violet-600 dark:text-violet-400 block font-bold">Destino CD8⁺ Singolo Positivo (Citotossico)</strong>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Se il TCR riconosce <strong>MHC di Classe I</strong> insieme a CD8, il segnale generato è più <strong>debole o intermittente</strong>. 
                      L'assenza di un segnale prolungato impedisce l'induzione di ThPOK e promuove invece l'attivazione del fattore trascrizionale 
                      <strong>Runx3</strong>, il quale reprime la trascrizione di CD4 e attiva il programma citotossico (perforina, granzimi, CD8αβ).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sotto-blocco 3: Selezione Negativa, AIRE, tTreg ed Egresso S1P */}
            <div className="space-y-3 pt-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>3. La Selezione Negativa Midollare, il Fattore AIRE, la Genesi dei tTreg ed Egresso S1P</span>
              </h3>
              <p>
                I timociti singoli positivi (SP CD4⁺ o CD8⁺) migrano dalla corteccia verso la <strong>midollare timica</strong> guidati dal gradiente 
                delle chemochine <strong>CCL19 e CCL21</strong> che legano <strong>CCR7</strong> espresso sui timociti maturi. 
                Nella midollare incontrano le cellule epiteliali timiche midollari (<strong>mTEC</strong>) e le cellule dendritiche residenti 
                per la verifica dell'autotolleranza centrale.
              </p>

              <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-3 text-xs sm:text-sm">
                <div>
                  <strong className="text-indigo-900 dark:text-indigo-200 block mb-1">
                    Delezione Clonale per Apoptosi Intrinseca:
                  </strong>
                  Se il TCR di un timocita lega complessi self-MHC/self-peptide con <strong>affinità troppo elevata</strong> (potenziale clone autoreattivo patogenetico), 
                  riceve un segnale letale che attiva la proteina pro-apoptotica BH3-only <strong>Bim</strong>, la quale attiva Bax e Bak innescando 
                  la cascata mitocondriale intrinseca con rilascio di citocromo c e morte per apoptosi (<strong>Delezione Clonale</strong>).
                </div>

                <div>
                  <strong className="text-indigo-900 dark:text-indigo-200 block mb-1">
                    Il Ruolo Fondamentale di AIRE (Autoimmune Regulator) e FEZF2:
                  </strong>
                  Per eliminare cloni reattivi contro proteine specifiche di organi periferici distanti (es. Insulina pancreatica, Tireoglobulina tiroidea, 
                  Proteina Basica della Mielina MBP del SNC, caseina), le mTEC mature esprimono constitutivamente il fattore <strong>AIRE</strong> 
                  (e il co-fattore <strong>FEZF2</strong>). AIRE riconosce l'istone decondensato non metilato <strong>H3K4me0</strong> e recluta il macchinario 
                  di allungamento trascrizionale <strong>P-TEFb</strong>, guidando la <strong>«trascrizione ectopica promiscua»</strong> di migliaia di antigeni 
                  tessuto-specifici (TRA, <em>Tissue-Restricted Antigens</em>) nel timo per esporli ai timociti.
                </div>

                <div>
                  <strong className="text-indigo-900 dark:text-indigo-200 block mb-1">
                    Divertimento verso la Linea Linfocitaria T Regolatoria Naturale (tTreg):
                  </strong>
                  I timociti CD4⁺ che legano self-peptide/MHC-II con affinità intermedia-alta (appena sotto la soglia letale di delezione), 
                  anziché morire vengono salvati grazie a segnali cooperativi di <strong>IL-2 (CD25)</strong> e CD28, attivando stabilmente 
                  il fattore di trascrizione <strong>FOXP3</strong>. Differenziano così in <strong>Linfociti T Regolatori Timici o Naturali (tTreg CD4⁺ CD25⁺ FoxP3⁺)</strong>, 
                  i custodi essenziali della tolleranza periferica contro eventuali cloni autoreattivi sfuggiti al timo.
                </div>
              </div>

              {/* Box APECED / APS-1 */}
              <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/40 dark:bg-rose-950/20 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span className="font-bold text-xs uppercase tracking-wider text-rose-900 dark:text-rose-200">
                    Sindrome Clinica d'Esame: APECED / APS-1 (Deficit di AIRE)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Mutazioni autosomiche recessive a perdita di funzione nel gene <strong>AIRE (21q22.3)</strong> impediscono la trascrizione ectopica 
                  dei TRA nelle mTEC: i timociti autoreattivi non vengono eliminati e sciamano nel sangue periferico, scatenando la sindrome 
                  <strong>APECED (<em>Autoimmune Polyendocrinopathy-Candidiasis-Ectodermal Dystrophy</em>)</strong> o <strong>Sindrome Poliendocrina Autoimmune di Tipo 1 (APS-1)</strong>, 
                  caratterizzata dalla triade classica:
                  <br />1. <strong>Ipoparatiroidismo autoimmune primario;</strong>
                  <br />2. <strong>Insufficienza surrenalica primitiva (Morbo di Addison);</strong>
                  <br />3. <strong>Candidosi mucocutanea cronica (CMC):</strong> provocata paradossalmente dalla produzione di <strong>autoanticorpi neutralizzanti 
                  ad altissimo titolo contro IL-17A, IL-17F e IL-22</strong>, che aboliscono le difese mucosali dei Th17 contro la <em>Candida albicans</em>.
                </p>
              </div>

              {/* Emigrazione Timica, S1P e Screening Neonatale TREC */}
              <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/40 dark:bg-indigo-950/20 space-y-2">
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="font-bold text-xs uppercase tracking-wider text-indigo-900 dark:text-indigo-200">
                    Emigrazione Timica, Gradiente S1P e Screening Neonatale con i TREC
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Completata la maturazione, i timociti singoli positivi up-regolano il fattore di trascrizione <strong>KLF2</strong> e il recettore 
                  per la <strong>Sfingosina-1-Fosfato (S1PR1)</strong>. Seguendo il ripido gradiente chemiotattico di S1P (elevatissima nel sangue, 
                  quasi nulla nel parenchima timico grazie alla S1P-liasi), abbandonano il timo attraversando la parete delle venule post-capillari 
                  ed entrano in circolo come <strong>Linfociti T Emigrati Recenti (RTE, <em>Recent Thymic Emigrants</em>)</strong>.
                  <br />• <strong>Screening Neonatale Universale per la SCID:</strong> ciascun RTE porta nel proprio citoplasma i cerchi di escissione 
                  episomiale <strong>TREC</strong> (originati dal riarrangiamento TCRα che escinde il locus TCRδ). Poiché i TREC non si duplicano durante la mitosi, 
                  la loro concentrazione riflette direttamente l'attività funzionale del timo. Il test <strong>TREC su goccia di sangue essiccata su cartoncino Guthrie</strong> 
                  alla nascita mediante PCR quantitativa permette di diagnosticare tutte le forme di SCID e sindrome di DiGeorge entro le prime settimane di vita, 
                  consentendo il trapianto salvavita di midollo prima che il lattante sviluppi infezioni opportunistiche letali.
                </p>
              </div>

              {/* Simulatore Incastonato: Thymic Selection */}
              <div className="pt-2">
                <InteractiveThymicSelectionSimulator />
              </div>
            </div>
          </div>

          {/* Ponte Fisiologico di Transizione */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-100 via-indigo-50 to-slate-100 dark:from-slate-800 dark:via-indigo-950/40 dark:to-slate-800 border border-indigo-200/60 dark:border-indigo-800/50 flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-indigo-900 dark:text-indigo-200 font-semibold block mb-0.5">
                Ponte Fisiologico di Transizione: Verso la sintesi sinottica e l'autovalutazione d'esame
              </strong>
              Abbiamo percorso tutti i tasselli molecolari dell'immunità adattativa: la biochimica dei recettori, 
              la genetica di ricombinazione, la struttura delle tasche MHC, le vie di processazione e l'istruzione centrale degli organi primari. 
              Consolidiamo ora queste nozioni nella <strong>Tavola Sinottica Comparativa Master</strong> e nella batteria di verifica con <strong>Quiz d'Esame</strong> e <strong>Flashcard</strong>.
            </div>
          </div>
        </section>


        {/* =========================================================================
            SEZIONE 2.8: TAVOLA SINOTTICA MASTER, QUIZ D'ESAME & FLASHCARD DI CAPITOLO
            ========================================================================= */}
        <section
          id="sec-2-verifica"
          aria-labelledby="heading-sec-2-verifica"
          className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 md:p-8 shadow-xs space-y-8"
        >
          {/* Header Sezione */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-wider font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Sezione 2.8 · Autovalutazione, Ripasso Attivo e Competenze Cliniche</span>
            </div>
            <h2 id="heading-sec-2-verifica" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Tavola Sinottica Comparativa Master, Batteria di Quiz d'Esame e Flashcard
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Sintesi comparativa integrale a specchio (BCR vs TCR, MHC-I vs MHC-II, Ontogenesi B vs T) e strumenti di consolidamento della memoria a lungo termine per il colloquio d'esame orale.
            </p>
          </div>

          {/* 1. Tavola Sinottica Comparativa Master */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Scale className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>1. Tavola Sinottica Comparativa Master: Linfociti B vs Linfociti T</span>
            </h3>

            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="p-3.5 font-bold">Parametro Molecolare / Biologico</th>
                    <th className="p-3.5 font-bold text-indigo-700 dark:text-indigo-300">Linfocita B / Recettore BCR</th>
                    <th className="p-3.5 font-bold text-violet-700 dark:text-violet-300">Linfocita T / Recettore TCR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/50 dark:bg-slate-850">Sede di Maturazione Primaria</td>
                    <td className="p-3">Midollo osseo (stroma con SCF e CXCL12)</td>
                    <td className="p-3">Timo (corteccia cTEC e midollare mTEC)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/50 dark:bg-slate-850">Valenza del Recettore Antigenico</td>
                    <td className="p-3">Bivalente (2 paratopi identici per monomero); fino a 10 in IgM pentamerica</td>
                    <td className="p-3">Monovalente (1 solo sito combinatorio formato da αβ o γδ)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/50 dark:bg-slate-850">Natura Conformazionale dell'Antigene</td>
                    <td className="p-3">Epitopi conformazionali o lineari su molecole native intatte (proteine, glicani, lipidi, apteni)</td>
                    <td className="p-3">Esclusivamente frammenti peptidici lineari (denaturati) legati a molecole MHC self</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/50 dark:bg-slate-850">Subunità di Segnalazione ITAM</td>
                    <td className="p-3">Eterodimero <strong>Igα / Igβ (CD79a / CD79b)</strong> (2 motivi ITAM totali)</td>
                    <td className="p-3">Complesso <strong>CD3 (γε, δε, ζζ)</strong> (10 motivi ITAM totali: 3 per ciascuna catena ζ)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/50 dark:bg-slate-850">Chinasi Iniziatrici e di Amplificazione</td>
                    <td className="p-3">Famiglia Src (<strong>Lyn, Fyn, Blk</strong>) → <strong>Syk</strong> → <strong>Btk</strong></td>
                    <td className="p-3">Famiglia Src (<strong>Lck, Fyn</strong>) → <strong>ZAP-70</strong> → <strong>Itk</strong></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/50 dark:bg-slate-850">Proteina Adattatrice Scaffold Chiave</td>
                    <td className="p-3"><strong>BLNK (SLP-65)</strong></td>
                    <td className="p-3"><strong>LAT</strong> e <strong>SLP-76</strong></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/50 dark:bg-slate-850">Primo Checkpoint dello Sviluppo</td>
                    <td className="p-3"><strong>Pre-BCR</strong>: catena pesante μ + SLC (VpreB/λ5) allo stadio Large Pre-B</td>
                    <td className="p-3"><strong>Pre-TCR</strong>: catena TCRβ + pTα allo stadio DN3 (Beta-selezione)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/50 dark:bg-slate-850">Selezione Positiva (Restrizione)</td>
                    <td className="p-3">Assente (i linfociti B non sono ristretti per le molecole MHC self)</td>
                    <td className="p-3">Obbligatoria nella corteccia timica su cTEC con timoproteasoma β5t</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/50 dark:bg-slate-850">Meccanismo di Tolleranza Centrale</td>
                    <td className="p-3"><strong>Receptor Editing</strong> della catena leggera (κ/λ), delezione clonale, anergia</td>
                    <td className="p-3"><strong>Delezione Clonale</strong> (apoptosi Bim-dipendente) o differenziamento in tTreg FoxP3⁺</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/50 dark:bg-slate-850">Forma Solubile Secreta</td>
                    <td className="p-3">Sì: anticorpi secreti circolanti ad alto titolo dopo differenziazione plasmacellulare</td>
                    <td className="p-3">No: il TCR opera esclusivamente come recettore legato alla membrana plasmatica</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/50 dark:bg-slate-850">Ipermutazione Somatica & Switch (CSR)</td>
                    <td className="p-3">Sì: nei centri germinativi mediata da AID dopo l'incontro con l'antigene</td>
                    <td className="p-3">No: la sequenza del TCR resta geneticamente identica per tutta la vita del clone T</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/50 dark:bg-slate-850">Malattia Genetica Prototipo di Arresto</td>
                    <td className="p-3"><strong>Morbo di Bruton (XLA)</strong>: mutazione di BTK con arresto a Pre-B e assenza di B maturi</td>
                    <td className="p-3"><strong>SCID X-linked</strong>: mutazione di IL2RG (γc) con arresto T e NK; <strong>APECED</strong> (mutazione AIRE)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Batteria di Quiz d'Esame Filtrata */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>2. Batteria Ufficiale di Domande d'Esame Orale (Lezioni 6 – 11)</span>
              </h3>
              <span className="text-xs font-mono text-slate-500">
                {chapter2Questions.length} Quesiti Selezionati
              </span>
            </div>

            <QuizSection customQuestions={chapter2Questions} />
          </div>

          {/* 3. Mazzo di Flashcards del Capitolo II */}
          <div className="space-y-4 pt-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <BookmarkCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>3. Mazzo Completo di Flashcard per il Ripasso Attivo (Capitolo II)</span>
              </h3>
              <span className="text-xs font-mono text-slate-500">
                {chapter2Flashcards.length} Schede Concettuali
              </span>
            </div>

            <FlashcardDeck cards={chapter2Flashcards} />
          </div>
        </section>

      </div>
    </div>
  );
};
