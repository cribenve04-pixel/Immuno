/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  loadViewMemory,
  saveCurrentLesson,
  saveSecondaryLesson,
  saveSplitMode,
  saveSplitSync,
  saveSidebarOpen,
  saveTheme,
  saveFontSizeLevel,
  savePageZoom,
  saveFontFamily,
  saveSpacing,
  saveLessonScrollPosition,
  getLessonScrollPosition,
  resetAllViewMemory
} from './utils/viewMemory';
import { Header } from './components/Header';
import { SidebarTOC } from './components/SidebarTOC';
import { Lezione0HomeView } from './components/Lezione0';
import { Chapter0MasterView } from './components/chapter0/Chapter0MasterView';
import { Chapter1MasterView } from './components/chapter1/Chapter1MasterView';
import { Chapter2MasterView } from './components/chapter2/Chapter2MasterView';
import { Chapter3MasterView } from './components/chapter3/Chapter3MasterView';
import { Chapter4MasterView } from './components/chapter4/Chapter4MasterView';
import { Chapter5MasterView } from './components/chapter5/Chapter5MasterView';
import { Chapter6MasterView } from './components/chapter6/Chapter6MasterView';
import { Chapter7MasterView } from './components/chapter7/Chapter7MasterView';
import { Chapter8MasterView } from './components/chapter8/Chapter8MasterView';
import { Lezione1View } from './components/Lezione1View';
import { Lezione2View } from './components/Lezione2View';
import { Lezione3View } from './components/Lezione3View';
import { Lezione4View } from './components/Lezione4View';
import { Lezione5View } from './components/Lezione5View';
import { Lezione6View } from './components/Lezione6View';
import { Lezione7View } from './components/Lezione7View';
import { Lezione8View } from './components/Lezione8View';
import { Lezione9View } from './components/Lezione9View';
import { Lezione10View } from './components/Lezione10View';
import { Lezione11View } from './components/Lezione11View';
import { Lezione12View } from './components/Lezione12View';
import { Lezione13View } from './components/Lezione13View';
import { Lezione14View } from './components/Lezione14View';
import { Lezione15View } from './components/Lezione15View';
import { Lezione16View } from './components/Lezione16View';
import { Lezione17View } from './components/Lezione17View';
import { Lezione18View } from './components/Lezione18View';
import { Lezione19View } from './components/Lezione19View';
import { Lezione20View } from './components/Lezione20View';
import { Lezione21View } from './components/Lezione21View';
import { Lezione22View } from './components/Lezione22View';
import { Lezione23View } from './components/Lezione23View';
import { Lezione24View } from './components/Lezione24View';
import { Lezione25View } from './components/Lezione25View';
import { Lezione26View } from './components/Lezione26View';
import { Lezione27View } from './components/Lezione27View';
import { Lezione28View } from './components/Lezione28View';
import { Lezione29View } from './components/Lezione29View';
import { Lezione30View } from './components/Lezione30View';
import { Lezione31View } from './components/Lezione31View';
import { Lezione32View } from './components/Lezione32View';
import { Lezione33View } from './components/Lezione33View';
import { StandardLectureHeader } from './components/StandardLectureHeader';
import { SplitLectureColumn } from './components/SplitLectureColumn';
import { InteractiveQuizEngine } from './components/InteractiveQuizEngine';
import { ProcessDiagramsModal } from './components/ProcessDiagramsModal';
import { UnifiedSearchAndResourceHub, HubTab } from './components/UnifiedSearchAndResourceHub';
import {
  ReaderSettingsModal,
  ReadingTheme,
  ReadingFont,
  ReadingSpacing
} from './components/ReaderSettingsModal';
import { ALL_33_LESSONS } from './data/courseSyllabus';
import { getSectionByLessonNumber, BOOK_CHAPTERS } from './data/bookChapters';
import { ALL_LESSON_SECTIONS } from './data/lessonSections';
import { BookNavigationFooter } from './components/BookNavigationFooter';
import { ChapterNavigationRail } from './components/ChapterNavigationRail';
import { TTSProvider, useTTS } from './context/TTSContext';
import { FloatingAudioPlayer } from './components/FloatingAudioPlayer';
import {
  BookOpen,
  PanelRightOpen,
  ListOrdered,
  ArrowLeftRight,
  X,
  Columns2,
  Link2,
  Unlink,
  Loader2
} from 'lucide-react';

function AppContent() {
  const { refreshSegments, stop: stopTTS } = useTTS();

  // Caricamento sicuro dello stato memorizzato in locale
  const initialMemory = useRef(loadViewMemory()).current;

  const [currentChapterNum, setCurrentChapterNum] = useState<number>(() => initialMemory.currentLesson);
  const [secondaryChapterNum, setSecondaryChapterNum] = useState<number>(() => initialMemory.secondaryLesson);
  const [isSplitMode, setIsSplitMode] = useState<boolean>(() => initialMemory.isSplitMode);
  const [isSplitSync, setIsSplitSync] = useState<boolean>(() => initialMemory.isSplitSync);
  const [splitScrollSyncPct, setSplitScrollSyncPct] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => initialMemory.isSidebarOpen);

  // Modali e Hub
  const [isReaderSettingsOpen, setIsReaderSettingsOpen] = useState<boolean>(false);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [isDiagramsOpen, setIsDiagramsOpen] = useState<boolean>(false);
  const [isHubOpen, setIsHubOpen] = useState<boolean>(false);
  const [hubTab, setHubTab] = useState<HubTab>('search');

  // Reader Customization Preferences con persistenza
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(() => initialMemory.fontSizeLevel);
  const [pageZoom, setPageZoom] = useState<number>(() => initialMemory.pageZoom);
  const [theme, setTheme] = useState<ReadingTheme>(() => initialMemory.theme);
  const [fontFamily, setFontFamily] = useState<ReadingFont>(() => initialMemory.fontFamily);
  const [spacing, setSpacing] = useState<ReadingSpacing>(() => initialMemory.spacing);

  const [activeSectionId, setActiveSectionId] = useState<string>(() => {
    const saved = getLessonScrollPosition(initialMemory.currentLesson);
    return saved?.sectionId || `sec-${initialMemory.currentLesson}-1`;
  });
  const activeSectionIdRef = useRef<string>(activeSectionId);
  const [navigationTargetSection, setNavigationTargetSection] = useState<string | undefined>(undefined);
  const [isPrintingFullBook, setIsPrintingFullBook] = useState<boolean>(false);

  const handlePrintFullBook = () => {
    setIsPrintingFullBook(true);
    // Allow DOM to render and hydrate all 9 chapters completely
    setTimeout(() => {
      const handleAfterPrint = () => {
        setIsPrintingFullBook(false);
        window.removeEventListener('afterprint', handleAfterPrint);
      };
      window.addEventListener('afterprint', handleAfterPrint);
      window.print();
      // Safety fallback if afterprint does not fire in some browsers/cancellations
      setTimeout(() => {
        setIsPrintingFullBook(false);
      }, 6000);
    }, 450);
  };

  const isFirstMountRef = useRef<boolean>(true);

  // Sincronizzazione persistente automatica in localStorage ad ogni variazione
  useEffect(() => {
    saveCurrentLesson(currentChapterNum);
  }, [currentChapterNum]);

  useEffect(() => {
    saveSecondaryLesson(secondaryChapterNum);
  }, [secondaryChapterNum]);

  useEffect(() => {
    saveSplitMode(isSplitMode);
  }, [isSplitMode]);

  useEffect(() => {
    saveSplitSync(isSplitSync);
  }, [isSplitSync]);

  useEffect(() => {
    saveSidebarOpen(isSidebarOpen);
  }, [isSidebarOpen]);

  useEffect(() => {
    saveFontSizeLevel(fontSizeLevel);
  }, [fontSizeLevel]);

  useEffect(() => {
    savePageZoom(pageZoom);
  }, [pageZoom]);

  useEffect(() => {
    saveTheme(theme);
  }, [theme]);

  useEffect(() => {
    saveFontFamily(fontFamily);
  }, [fontFamily]);

  useEffect(() => {
    saveSpacing(spacing);
  }, [spacing]);

  // Ripristino della posizione di lettura salvata alla ricarica della pagina
  useEffect(() => {
    if (isFirstMountRef.current) {
      isFirstMountRef.current = false;
      const savedPos = getLessonScrollPosition(currentChapterNum);
      if (savedPos && savedPos.scrollY > 40) {
        const timer = setTimeout(() => {
          window.scrollTo({ top: savedPos.scrollY, behavior: 'instant' as ScrollBehavior });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [currentChapterNum]);

  // Aggiornamento automatico segmenti TTS alla transizione di lezione
  useEffect(() => {
    stopTTS();
    const timer = setTimeout(() => {
      refreshSegments();
    }, 450);
    return () => clearTimeout(timer);
  }, [currentChapterNum, refreshSegments, stopTTS]);

  // Global navigation handler for inter-lesson links, search results, and quiz weakness review
  const handleNavigateToLesson = (lessonNum: number, sectionId?: string) => {
    setCurrentChapterNum(lessonNum);
    setNavigationTargetSection(sectionId);
    setIsHubOpen(false);
    setIsQuizOpen(false);
    setIsDiagramsOpen(false);

    if (sectionId) {
      setActiveSectionId(sectionId);
      activeSectionIdRef.current = sectionId;
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const savedPos = getLessonScrollPosition(lessonNum);
      if (savedPos && savedPos.scrollY > 50) {
        setTimeout(() => {
          window.scrollTo({ top: savedPos.scrollY, behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Keyboard shortcut: Ctrl+K / Cmd+K opens the unified search hub
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setHubTab('search');
        setIsHubOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isSerif = fontFamily === 'serif';
  const fontSize: 'normal' | 'large' = fontSizeLevel > 110 ? 'large' : 'normal';

  // Sync dark theme and data-theme attribute with document root and body
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    if (theme === 'slate' || theme === 'night') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  // Fullscreen event listener to keep state in sync
  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.log('Fullscreen toggle failed:', err);
    }
  };

  // Screen Orientation State & Listeners for Android & Mobile devices
  const [isLandscape, setIsLandscape] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      if (window.screen?.orientation?.type) {
        return window.screen.orientation.type.startsWith('landscape');
      }
      return window.innerWidth > window.innerHeight;
    }
    return false;
  });

  useEffect(() => {
    const updateOrientation = () => {
      if (window.screen?.orientation?.type) {
        setIsLandscape(window.screen.orientation.type.startsWith('landscape'));
      } else {
        setIsLandscape(window.innerWidth > window.innerHeight);
      }
    };

    if (typeof screen !== 'undefined' && screen.orientation && typeof screen.orientation.unlock === 'function') {
      try {
        screen.orientation.unlock();
      } catch {}
    }

    window.addEventListener('resize', updateOrientation);
    window.addEventListener('orientationchange', updateOrientation);
    if (window.screen?.orientation) {
      window.screen.orientation.addEventListener('change', updateOrientation);
    }

    return () => {
      window.removeEventListener('resize', updateOrientation);
      window.removeEventListener('orientationchange', updateOrientation);
      if (window.screen?.orientation) {
        window.screen.orientation.removeEventListener('change', updateOrientation);
      }
    };
  }, []);

  // Programmatic rotation handler
  const toggleScreenRotation = async () => {
    try {
      const currentlyLandscape =
        (window.screen?.orientation?.type && window.screen.orientation.type.startsWith('landscape')) ||
        (window.innerWidth > window.innerHeight);

      if (currentlyLandscape) {
        if (document.fullscreenElement) {
          await document.exitFullscreen().catch(() => {});
        }
        if (window.screen?.orientation?.unlock) {
          window.screen.orientation.unlock();
        }
        if (window.screen?.orientation?.lock) {
          await window.screen.orientation.lock('portrait').catch(() => {});
        }
        setIsLandscape(false);
      } else {
        if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen().catch(() => {});
        }
        if (window.screen?.orientation?.lock) {
          await window.screen.orientation.lock('landscape').catch((err) => {
            console.warn('Orientation lock failed:', err);
          });
        }
        setIsLandscape(true);
      }
    } catch (err) {
      console.warn('Screen rotation error:', err);
      try {
        window.screen?.orientation?.unlock?.();
      } catch {}
    }
  };

  // ScrollSpy to keep TOC updated smoothly without triggering re-render cascades
  useEffect(() => {
    let saveScrollTimer: ReturnType<typeof setTimeout> | null = null;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Query ONLY section article headings, avoiding DOM thrashing across hundreds of generic IDs
          const sections = document.querySelectorAll<HTMLElement>('article[id^="sec-"], [id^="sec-"]');
          let matchedId: string | null = null;

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = sections[i];
            if (el.getBoundingClientRect().top <= 160) {
              matchedId = el.id;
              break;
            }
          }

          if (matchedId && matchedId !== activeSectionIdRef.current) {
            activeSectionIdRef.current = matchedId;
            setActiveSectionId(matchedId);
          }

          if (!isSplitMode) {
            if (saveScrollTimer) clearTimeout(saveScrollTimer);
            saveScrollTimer = setTimeout(() => {
              saveLessonScrollPosition(currentChapterNum, window.scrollY, activeSectionIdRef.current);
            }, 400);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (saveScrollTimer) clearTimeout(saveScrollTimer);
    };
  }, [currentChapterNum, isSplitMode]);

  const themeClasses: Record<ReadingTheme, string> = {
    light: 'bg-slate-50 text-slate-900',
    sepia: 'bg-[#fcf7ed] text-[#3e2e1e]',
    slate: 'bg-[#0f172a] text-[#f1f5f9]',
    night: 'bg-[#05070e] text-[#e2e8f0]',
  };

  const fontClasses: Record<ReadingFont, string> = {
    serif: 'font-serif',
    sans: 'font-sans',
    mono: 'font-mono',
  };

  const spacingClasses: Record<ReadingSpacing, string> = {
    compact: 'leading-snug',
    normal: 'leading-relaxed',
    relaxed: 'leading-loose',
  };

  const currentLessonMeta = ALL_33_LESSONS.find((l) => l.number === currentChapterNum) || ALL_33_LESSONS[0];
  const secondaryLessonMeta = ALL_33_LESSONS.find((l) => l.number === secondaryChapterNum) || ALL_33_LESSONS[1];

  const currentLessonSections = ALL_LESSON_SECTIONS[currentChapterNum] || [];
  const activeSectionObj = currentLessonSections.find((s) => s.id === activeSectionId);
  const activeParagraphTitle = activeSectionObj ? activeSectionObj.title : undefined;

  const renderLessonContent = (chapterNum: number) => {
    const isSerifMode = fontFamily === 'serif';
    const fontSizeMode: 'normal' | 'large' = fontSizeLevel > 110 ? 'large' : 'normal';

    // Capitolo I: [1, 3, 4, 5, 21]
    if ([1, 3, 4, 5, 21].includes(chapterNum)) {
      const targetAnchor = (navigationTargetSection && navigationTargetSection.startsWith('sec-1-'))
        ? navigationTargetSection
        : undefined;
      return <Chapter1MasterView isSerif={isSerifMode} fontSize={fontSizeMode} initialSection={targetAnchor} />;
    }

    // Capitolo II: [6, 7, 8, 9, 10, 11]
    if ([6, 7, 8, 9, 10, 11].includes(chapterNum)) {
      const targetAnchor = (navigationTargetSection && navigationTargetSection.startsWith('sec-2-'))
        ? navigationTargetSection
        : undefined;
      return <Chapter2MasterView isSerif={isSerifMode} fontSize={fontSizeMode} initialSection={targetAnchor} />;
    }

    // Capitolo III: [2, 12, 13, 14, 19, 20]
    if ([2, 12, 13, 14, 19, 20].includes(chapterNum)) {
      const targetAnchor = (navigationTargetSection && navigationTargetSection.startsWith('sec-3-'))
        ? navigationTargetSection
        : undefined;
      return <Chapter3MasterView isSerif={isSerifMode} fontSize={fontSizeMode} initialSection={targetAnchor} />;
    }

    // Capitolo IV: [15, 16, 17, 18]
    if ([15, 16, 17, 18].includes(chapterNum)) {
      const targetAnchor = (navigationTargetSection && navigationTargetSection.startsWith('sec-4-'))
        ? navigationTargetSection
        : undefined;
      return <Chapter4MasterView isSerif={isSerifMode} fontSize={fontSizeMode} initialSection={targetAnchor} />;
    }

    // Capitolo V: [22, 23, 24, 25]
    if ([22, 23, 24, 25].includes(chapterNum)) {
      const targetAnchor = (navigationTargetSection && navigationTargetSection.startsWith('sec-5-'))
        ? navigationTargetSection
        : undefined;
      return <Chapter5MasterView isSerif={isSerifMode} fontSize={fontSizeMode} initialSection={targetAnchor} />;
    }

    // Capitolo VI: [26, 27, 28]
    if ([26, 27, 28].includes(chapterNum)) {
      const targetAnchor = (navigationTargetSection && navigationTargetSection.startsWith('sec-6-'))
        ? navigationTargetSection
        : undefined;
      return <Chapter6MasterView isSerif={isSerifMode} fontSize={fontSizeMode} initialSection={targetAnchor} />;
    }

    // Capitolo VII: [29, 30, 31]
    if ([29, 30, 31].includes(chapterNum)) {
      const targetAnchor = (navigationTargetSection && navigationTargetSection.startsWith('sec-7-'))
        ? navigationTargetSection
        : undefined;
      return <Chapter7MasterView isSerif={isSerifMode} fontSize={fontSizeMode} initialSection={targetAnchor} />;
    }

    // Capitolo VIII: [32, 33]
    if ([32, 33].includes(chapterNum)) {
      const targetAnchor = (navigationTargetSection && navigationTargetSection.startsWith('sec-8-'))
        ? navigationTargetSection
        : undefined;
      return <Chapter8MasterView isSerif={isSerifMode} fontSize={fontSizeMode} initialSection={targetAnchor} />;
    }

    // Capitolo 0: Fondamenti del Sistema Immunitario, Ontogenesi Ematopoietica e Architettura degli Organi Linfoidi
    const targetAnchor0 = (navigationTargetSection && navigationTargetSection.startsWith('sec-0-'))
      ? navigationTargetSection
      : undefined;
    return (
      <Chapter0MasterView 
        isSerif={isSerifMode} 
        fontSize={fontSizeMode} 
        initialSection={targetAnchor0} 
        onNavigateToChapter={(lessonNum, sectionId) => handleNavigateToLesson(lessonNum, sectionId)}
      />
    );
  };

  return (
    <div
      data-theme={theme}
      className={`min-h-screen transition-colors duration-200 flex flex-col ${themeClasses[theme]} ${fontClasses[fontFamily]} ${spacingClasses[spacing]}`}
      id="top"
      style={{ fontSize: `${fontSizeLevel}%` }}
    >
      {/* Sticky Header snello per Mobile & Desktop */}
      <Header
        currentLesson={currentChapterNum}
        onSelectLesson={(num, sectionId) => handleNavigateToLesson(num, sectionId)}
        onOpenHub={(tab: HubTab = 'search') => {
          setHubTab(tab);
          setIsHubOpen(true);
        }}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        onOpenReaderSettings={() => setIsReaderSettingsOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenDiagrams={() => setIsDiagramsOpen(true)}
        isSplitMode={isSplitMode}
        onToggleSplitMode={() => setIsSplitMode((prev) => !prev)}
        pageZoom={pageZoom}
      />

      {/* Main Container con Zoom Pagina stile Chrome (mantiene Header e Modali nitidi al 100%) */}
      <div
        className={`app-zoom-surface w-full max-w-none flex-1 flex flex-col ${isSplitMode ? 'p-0 m-0 overflow-hidden' : 'px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-3 sm:py-5 md:py-6'}`}
        style={{ zoom: `${pageZoom}%` } as React.CSSProperties}
      >
        {!isSplitMode && !isPrintingFullBook && (
          <div className="hidden print:block mb-8 pb-4 border-b-2 border-slate-900">
            <div className="flex justify-between items-center text-xs text-slate-600 font-mono mb-1.5">
              <span>Università degli Studi — Corso di Laurea Magistrale in Medicina e Chirurgia</span>
              <span>
                {currentLessonMeta.chapterNumber === 0
                  ? 'Guida Introduttiva'
                  : `Capitolo ${currentLessonMeta.chapterNumber}: ${currentLessonMeta.chapterTitle}`}
              </span>
            </div>
            <h1 className="text-2xl font-black text-slate-950 tracking-tight">
              Sezione {currentLessonMeta.sectionCode || currentChapterNum}: {currentLessonMeta.title}
            </h1>
            <div className="flex gap-4 text-xs text-slate-700 mt-2 font-medium">
              <span><strong>Docente:</strong> {currentLessonMeta.professor}</span>
              <span>·</span>
              <span><strong>Data Lezione:</strong> {currentLessonMeta.dateStr}</span>
              <span>·</span>
              <span><strong>Manuale Ufficiale di Studio</strong></span>
            </div>
          </div>
        )}

        {/* FRONTESPIZIO ACCADEMICO & INDICE GENERALE PER LA STAMPA COMPLETA DEL LIBRO */}
        {isPrintingFullBook && (
          <div className="print-frontispiece-section mb-10 pb-8 border-b-4 border-slate-900 text-center space-y-6">
            <div className="text-xs uppercase tracking-widest font-mono text-slate-600 font-bold">
              Università degli Studi — Corso di Laurea Magistrale in Medicina e Chirurgia · Anno Accademico 2025/2026
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight uppercase max-w-4xl mx-auto leading-tight">
              Trattato di Immunologia Fondamentale e Clinica
            </h1>
            <p className="text-base font-serif italic text-slate-700 max-w-3xl mx-auto">
              Trattato unificato completo dei 9 Macro-Moduli tematici: Basi Molecolari, Ricombinazione Somatica V(D)J, MHC, Citochine, Complemento, Immunità Mucosale, Ipersensibilità, Trapianti, Oncologia e Terapie Avanzate.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-6 text-xs text-slate-700 font-medium">
              <span><strong>Corpo Docente:</strong> Proff. Angela Santoni, Fabrizio Mattei, Rossella Paolini, Paola Vacca, Maria Teresa Fiorita</span>
              <span>·</span>
              <span><strong>Edizione Accademica Ufficiale (Formato Abbas A4)</strong></span>
            </div>

            {/* Piano dell'Opera Generale (Indice dei Capitoli) */}
            <div className="mt-8 pt-6 border-t border-slate-300 text-left max-w-4xl mx-auto">
              <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500 mb-3 text-center">
                Piano Generale dell'Opera (Indice Sistematico A4)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-800">
                {BOOK_CHAPTERS.map((ch) => (
                  <div key={ch.id} className="p-2.5 rounded border border-slate-200 bg-slate-50/50">
                    <div className="font-bold text-slate-900 flex items-center justify-between">
                      <span>{ch.id === 0 ? 'INTRODUZIONE' : `CAPITOLO ${ch.romanId}`}</span>
                      <span className="font-mono text-[10px] text-slate-500">{ch.sections.length} sezioni</span>
                    </div>
                    <div className="text-[11px] text-slate-600 truncate mt-0.5">{ch.title}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="print-page-break" style={{ pageBreakBefore: 'always', breakBefore: 'page' }} />
          </div>
        )}

        {!isSplitMode ? (
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 xl:gap-8 items-start w-full">
            <main className="flex-1 min-w-0 w-full space-y-6 sm:space-y-8">
              <div className="unified-lecture-view w-full space-y-6 sm:space-y-8">
                {isPrintingFullBook ? (
                  <div className="full-book-printable-container space-y-12">
                    {/* Capitolo 0 */}
                    <div id="full-book-ch0">
                      <Chapter0MasterView isSerif={fontFamily === 'serif'} fontSize={fontSizeLevel > 110 ? 'large' : 'normal'} />
                    </div>
                    <div className="print-page-break" style={{ pageBreakBefore: 'always', breakBefore: 'page' }} />

                    {/* Capitolo 1 */}
                    <div id="full-book-ch1">
                      <Chapter1MasterView isSerif={fontFamily === 'serif'} fontSize={fontSizeLevel > 110 ? 'large' : 'normal'} />
                    </div>
                    <div className="print-page-break" style={{ pageBreakBefore: 'always', breakBefore: 'page' }} />

                    {/* Capitolo 2 */}
                    <div id="full-book-ch2">
                      <Chapter2MasterView isSerif={fontFamily === 'serif'} fontSize={fontSizeLevel > 110 ? 'large' : 'normal'} />
                    </div>
                    <div className="print-page-break" style={{ pageBreakBefore: 'always', breakBefore: 'page' }} />

                    {/* Capitolo 3 */}
                    <div id="full-book-ch3">
                      <Chapter3MasterView isSerif={fontFamily === 'serif'} fontSize={fontSizeLevel > 110 ? 'large' : 'normal'} />
                    </div>
                    <div className="print-page-break" style={{ pageBreakBefore: 'always', breakBefore: 'page' }} />

                    {/* Capitolo 4 */}
                    <div id="full-book-ch4">
                      <Chapter4MasterView isSerif={fontFamily === 'serif'} fontSize={fontSizeLevel > 110 ? 'large' : 'normal'} />
                    </div>
                    <div className="print-page-break" style={{ pageBreakBefore: 'always', breakBefore: 'page' }} />

                    {/* Capitolo 5 */}
                    <div id="full-book-ch5">
                      <Chapter5MasterView isSerif={fontFamily === 'serif'} fontSize={fontSizeLevel > 110 ? 'large' : 'normal'} />
                    </div>
                    <div className="print-page-break" style={{ pageBreakBefore: 'always', breakBefore: 'page' }} />

                    {/* Capitolo 6 */}
                    <div id="full-book-ch6">
                      <Chapter6MasterView isSerif={fontFamily === 'serif'} fontSize={fontSizeLevel > 110 ? 'large' : 'normal'} />
                    </div>
                    <div className="print-page-break" style={{ pageBreakBefore: 'always', breakBefore: 'page' }} />

                    {/* Capitolo 7 */}
                    <div id="full-book-ch7">
                      <Chapter7MasterView isSerif={fontFamily === 'serif'} fontSize={fontSizeLevel > 110 ? 'large' : 'normal'} />
                    </div>
                    <div className="print-page-break" style={{ pageBreakBefore: 'always', breakBefore: 'page' }} />

                    {/* Capitolo 8 */}
                    <div id="full-book-ch8">
                      <Chapter8MasterView isSerif={fontFamily === 'serif'} fontSize={fontSizeLevel > 110 ? 'large' : 'normal'} />
                    </div>
                  </div>
                ) : (
                  renderLessonContent(currentChapterNum)
                )}
              </div>
              <div className="print:hidden">
                <BookNavigationFooter
                  currentLesson={currentChapterNum}
                  onNavigate={(num) => handleNavigateToLesson(num)}
                  onOpenSyllabus={() => {
                    setHubTab('syllabus');
                    setIsHubOpen(true);
                  }}
                />
              </div>
            </main>

            <div className="hidden lg:block shrink-0 transition-all duration-300 print:hidden">
              {isSidebarOpen ? (
                <div className="w-72 xl:w-80 2xl:w-84">
                  <SidebarTOC
                    currentLesson={currentChapterNum}
                    activeId={activeSectionId}
                    isSerif={fontFamily === 'serif'}
                    setIsSerif={(val) => setFontFamily(val ? 'serif' : 'sans')}
                    fontSize={fontSizeLevel > 110 ? 'large' : 'normal'}
                    setFontSize={(val) => setFontSizeLevel(val === 'large' ? 125 : 100)}
                    onSwitchLesson={(num, secId) => handleNavigateToLesson(num, secId)}
                    isFullscreen={isFullscreen}
                    onToggleFullscreen={toggleFullscreen}
                    onToggleCollapse={() => setIsSidebarOpen(false)}
                  />
                </div>
              ) : (
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  title="Espandi Indice della Lezione (TOC)"
                  aria-label="Espandi Indice della Lezione"
                  className="sticky top-20 p-2.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-blue-600 rounded-xl border border-slate-200 dark:border-slate-800 shadow-md flex flex-col items-center gap-2 transition-all hover:scale-105 group cursor-pointer"
                >
                  <PanelRightOpen className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className="[writing-mode:vertical-lr] text-[11px] font-bold tracking-widest uppercase text-slate-700 dark:text-slate-300 group-hover:text-blue-600 py-1">
                    Indice Lezione
                  </span>
                  <ListOrdered className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="w-full flex-1 flex flex-col overflow-hidden bg-slate-100 dark:bg-slate-950">
            <div className="h-10 px-3 sm:px-4 bg-slate-100/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs shrink-0 select-none backdrop-blur-xs">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-1 rounded bg-blue-600 text-white shrink-0">
                  <Columns2 className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-2 min-w-0">
                  <span className="font-black text-slate-900 dark:text-slate-100 text-xs truncate">
                    Vista Affiancata 50/50
                  </span>
                  <span className="hidden sm:inline text-[11px] font-semibold text-slate-500 dark:text-slate-400 truncate">
                    · Divisa esattamente a metà schermo con due slider verticali indipendenti
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => setIsSplitSync((prev) => !prev)}
                  title={isSplitSync ? "Scorrimento sincronizzato" : "Scorrimento 100% indipendente"}
                  className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded border transition-all cursor-pointer ${
                    isSplitSync
                      ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-700'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750'
                  }`}
                >
                  {isSplitSync ? (
                    <>
                      <Link2 className="w-3 h-3 text-amber-600" />
                      <span className="hidden sm:inline">Sincronizzati</span>
                    </>
                  ) : (
                    <>
                      <Unlink className="w-3 h-3 text-blue-600" />
                      <span className="hidden sm:inline">Indipendenti</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    const temp = currentChapterNum;
                    setCurrentChapterNum(secondaryChapterNum);
                    setSecondaryChapterNum(temp);
                  }}
                  title="Inverti Sezione A con Sezione B"
                  className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded transition-colors cursor-pointer"
                >
                  <ArrowLeftRight className="w-3 h-3 text-blue-600" />
                  <span>Inverti</span>
                </button>

                <button
                  onClick={() => setIsSplitMode(false)}
                  title="Chiudi vista affiancata"
                  className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 border border-slate-300 dark:border-slate-700 hover:border-rose-300 rounded transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Chiudi</span>
                </button>
              </div>
            </div>

            <div className="w-full flex-1 grid grid-cols-2 gap-0 items-stretch overflow-hidden">
              <SplitLectureColumn
                columnId="A"
                lessonMeta={currentLessonMeta}
                allLessons={ALL_33_LESSONS}
                onSelectLesson={(num) => setCurrentChapterNum(num)}
                renderContent={() => renderLessonContent(currentChapterNum)}
                onOpenQuiz={() => setIsQuizOpen(true)}
                onOpenDiagrams={() => setIsDiagramsOpen(true)}
                colorTheme="blue"
                containerHeightClass={
                  isFullscreen
                    ? 'h-[calc(100vh-80px)]'
                    : 'h-[calc(100vh-108px)]'
                }
                isSyncActive={isSplitSync}
                onScrollBroadcast={(pct) => {
                  if (isSplitSync) setSplitScrollSyncPct(pct);
                }}
                externalScrollPct={isSplitSync ? splitScrollSyncPct : null}
                className="border-r border-slate-200 dark:border-slate-800"
              />

              <SplitLectureColumn
                columnId="B"
                lessonMeta={secondaryLessonMeta}
                allLessons={ALL_33_LESSONS}
                onSelectLesson={(num) => setSecondaryChapterNum(num)}
                renderContent={() => renderLessonContent(secondaryChapterNum)}
                onOpenQuiz={() => setIsQuizOpen(true)}
                onOpenDiagrams={() => setIsDiagramsOpen(true)}
                colorTheme="indigo"
                containerHeightClass={
                  isFullscreen
                    ? 'h-[calc(100vh-80px)]'
                    : 'h-[calc(100vh-108px)]'
                }
                isSyncActive={isSplitSync}
                onScrollBroadcast={(pct) => {
                  if (isSplitSync) setSplitScrollSyncPct(pct);
                }}
                externalScrollPct={isSplitSync ? splitScrollSyncPct : null}
              />
            </div>
          </div>
        )}
      </div>

      {/* Modali */}
      <UnifiedSearchAndResourceHub
        isOpen={isHubOpen}
        onClose={() => setIsHubOpen(false)}
        initialTab={hubTab}
        currentLesson={currentChapterNum}
        onNavigateToLesson={handleNavigateToLesson}
      />

      <InteractiveQuizEngine
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onNavigateToLesson={(num: number, secId?: string) => handleNavigateToLesson(num, secId)}
      />

      <ProcessDiagramsModal
        isOpen={isDiagramsOpen}
        onClose={() => setIsDiagramsOpen(false)}
        onNavigateToLesson={(num, secId) => handleNavigateToLesson(num, secId)}
      />

      <ReaderSettingsModal
        isOpen={isReaderSettingsOpen}
        onClose={() => setIsReaderSettingsOpen(false)}
        pageZoom={pageZoom}
        onChangePageZoom={setPageZoom}
        fontSizeLevel={fontSizeLevel}
        onChangeFontSizeLevel={setFontSizeLevel}
        fontFamily={fontFamily}
        onChangeFontFamily={setFontFamily}
        theme={theme}
        onChangeTheme={setTheme}
        spacing={spacing}
        onChangeSpacing={setSpacing}
        isLandscape={isLandscape}
        onToggleOrientation={toggleScreenRotation}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        currentChapterLabel={
          currentLessonMeta.chapterNumber === 0
            ? 'Introduzione'
            : `Cap. ${getSectionByLessonNumber(currentChapterNum).chapter.romanId}`
        }
        onPrintCurrentChapter={() => window.print()}
        onPrintFullBook={handlePrintFullBook}
        isPrintingFullBook={isPrintingFullBook}
        onResetDefaults={() => {
          const defaults = resetAllViewMemory();
          setPageZoom(defaults.pageZoom);
          setFontSizeLevel(defaults.fontSizeLevel);
          setTheme(defaults.theme);
          setFontFamily(defaults.fontFamily);
          setSpacing(defaults.spacing);
          setCurrentChapterNum(defaults.currentLesson);
          setSecondaryChapterNum(defaults.secondaryLesson);
          setIsSplitMode(defaults.isSplitMode);
          setIsSplitSync(defaults.isSplitSync);
          setIsSidebarOpen(defaults.isSidebarOpen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {!isSplitMode && (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 mt-16 text-xs text-slate-500">
          <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">Manuale Universitario di Immunologia Generale e Clinica</span>
            </div>
            <div className="text-slate-400 font-mono text-[11px]">
              Corso di 33 Lezioni · Edizione Digitale Interattiva per Medicina e Chirurgia
            </div>
          </div>
        </footer>
      )}

      {/* Modal Overlay durante la preparazione del Libro Completo */}
      {isPrintingFullBook && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4 print:hidden animate-in fade-in duration-200"
        >
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center mx-auto border border-blue-200 dark:border-blue-800">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Preparazione Libro Completo per la Stampa
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                Rendering di tutti i 9 Macro-Moduli didattici (Cap. 0 e I–VIII), srotolamento completo delle tavole biochimiche e impaginazione salti di pagina A4 in corso.
              </p>
            </div>
            <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 p-2.5 rounded-lg border border-blue-200 dark:border-blue-800">
              La finestra di dialogo per la stampa o salvataggio PDF si aprirà automaticamente a breve.
            </div>
            <button
              onClick={() => setIsPrintingFullBook(false)}
              className="px-4 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              Chiudi / Annulla
            </button>
          </div>
        </div>
      )}

      {/* Lettore di Sintesi Vocale Dinamico ed Esperienziale */}
      <FloatingAudioPlayer />
    </div>
  );
}

export default function App() {
  return (
    <TTSProvider>
      <AppContent />
    </TTSProvider>
  );
}