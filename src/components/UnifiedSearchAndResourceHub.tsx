/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CENTRO RISORSE DIDATTICHE, RICERCA GLOBALE & GLOSSARIO UNIFICATI
 * Unisce in un'unica vista la Ricerca nel Libro e il Glossario A-Z,
 * affiancati dall'Indice dei 8 Macro-Capitoli del manuale.
 */

import React, { useState, useMemo, useEffect } from 'react';
import { ALL_33_LESSONS } from '../data/courseSyllabus';
import { DETAILED_GLOSSARY } from '../data/expandedGlossary';
import {
  BOOK_CHAPTERS,
  getSectionByLessonNumber,
  getChapterByLessonNumber
} from '../data/bookChapters';
import { ALL_LESSON_SECTIONS } from '../data/lessonSections';
import {
  Search,
  BookOpen,
  GraduationCap,
  X,
  ArrowRight,
  Layers,
  ChevronDown,
  ChevronRight,
  FolderOpen
} from 'lucide-react';

export type HubTab = 'search' | 'syllabus' | 'glossary';
type SearchScope = 'all' | 'lessons' | 'glossary';

interface UnifiedSearchAndResourceHubProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: HubTab;
  currentLesson: number;
  onNavigateToLesson: (lessonNumber: number, sectionId?: string) => void;
}

export const UnifiedSearchAndResourceHub: React.FC<UnifiedSearchAndResourceHubProps> = ({
  isOpen,
  onClose,
  initialTab = 'search',
  currentLesson,
  onNavigateToLesson
}) => {
  // 2 tab principali: 'search' (Cerca & Glossario unificati) e 'syllabus' (Indice 8 Capitoli)
  const [activeTab, setActiveTab] = useState<'search' | 'syllabus'>(
    initialTab === 'syllabus' ? 'syllabus' : 'search'
  );
  const [searchScope, setSearchScope] = useState<SearchScope>(
    initialTab === 'glossary' ? 'glossary' : 'all'
  );

  // Sync tab e scope all'apertura
  useEffect(() => {
    if (isOpen) {
      if (initialTab === 'syllabus') {
        setActiveTab('syllabus');
      } else {
        setActiveTab('search');
        setSearchScope(initialTab === 'glossary' ? 'glossary' : 'all');
      }
    }
  }, [isOpen, initialTab]);

  // ==========================================
  // TAB 1 UNIFICATO: CERCA NEL LIBRO + GLOSSARIO A-Z
  // ==========================================
  const [query, setQuery] = useState('');
  const [selectedChapterFilter, setSelectedChapterFilter] = useState<number | 'all'>('all');
  const [glossaryCat, setGlossaryCat] = useState<string>('Tutte');
  const [glossaryLetter, setGlossaryLetter] = useState<string>('Tutte');

  const glossaryCategories = [
    'Tutte',
    'Innata & PRR',
    'Adattativa T/B',
    'Complemento',
    'Citochine & Segnalazione',
    'Immunopatologia',
    'Clinica & Farmaci'
  ];

  const glossaryLetters = useMemo(() => {
    const lettersSet = new Set<string>();
    DETAILED_GLOSSARY.forEach((t) => lettersSet.add(t.letter.toUpperCase()));
    return ['Tutte', ...Array.from(lettersSet).sort()];
  }, []);

  const searchResults = useMemo(() => {
    const q = query.toLowerCase().trim();

    return ALL_33_LESSONS.filter((lesson) => {
      const { chapter, section } = getSectionByLessonNumber(lesson.number);
      const matchChapter =
        selectedChapterFilter === 'all' || chapter.id === selectedChapterFilter;
      if (!matchChapter) return false;
      if (!q) return true;

      const inTitle = lesson.title.toLowerCase().includes(q);
      const inSummary = lesson.summary.toLowerCase().includes(q);
      const inTopics = lesson.topics.some((t) => t.toLowerCase().includes(q));
      const inProf = lesson.professor.toLowerCase().includes(q);
      const inChapter = chapter.title.toLowerCase().includes(q);
      const inCode = section.code.toLowerCase().includes(q);

      const paragraphs = ALL_LESSON_SECTIONS[lesson.number] || [];
      const inParagraphs = paragraphs.some((p) => p.title.toLowerCase().includes(q));

      return inTitle || inSummary || inTopics || inProf || inChapter || inCode || inParagraphs;
    });
  }, [query, selectedChapterFilter]);

  const filteredGlossary = useMemo(() => {
    const q = query.toLowerCase().trim();
    return DETAILED_GLOSSARY.filter((item) => {
      const matchSearch =
        !q ||
        item.term.toLowerCase().includes(q) ||
        item.definition.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      const matchCat = glossaryCat === 'Tutte' || item.category === glossaryCat;
      const matchLetter = glossaryLetter === 'Tutte' || item.letter.toUpperCase() === glossaryLetter;
      return matchSearch && matchCat && matchLetter;
    });
  }, [query, glossaryCat, glossaryLetter]);

  // ==========================================
  // TAB 2: INDICE DEL LIBRO IN 8 MACRO-CAPITOLI
  // ==========================================
  const [openChapterAccordions, setOpenChapterAccordions] = useState<Set<number>>(() => {
    const active = getChapterByLessonNumber(currentLesson);
    return new Set([active.id, 1, 2]);
  });

  const toggleChapterAccordion = (id: number) => {
    setOpenChapterAccordions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleExpandAllChapters = () => {
    setOpenChapterAccordions(new Set(BOOK_CHAPTERS.map((c) => c.id)));
  };

  const handleCollapseAllChapters = () => {
    setOpenChapterAccordions(new Set([]));
  };

  if (!isOpen) return null;

  const hasTypedQuery = query.trim().length > 0;
  const showGlossarySection = searchScope === 'glossary' || searchScope === 'all';
  const showLessonsSection = searchScope === 'lessons' || searchScope === 'all';
  const displayedGlossaryInAll = hasTypedQuery ? filteredGlossary : filteredGlossary.slice(0, 6);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden transition-all">
        {/* Hub Header & 2 Unified Tabs */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 shrink-0">
          <div className="flex items-center justify-between gap-3 mb-3.5">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="p-2 rounded-xl bg-blue-600 text-white shadow-xs shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h2 className="text-base sm:text-xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight truncate">
                  Ricerca, Glossario & Indice
                </h2>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 truncate">
                  Cerca lezioni e termini medici in un solo posto · 8 Macro-Capitoli
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
              aria-label="Chiudi finestra"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 2 Clean Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 dark:bg-slate-800 rounded-xl max-w-md">
            <button
              onClick={() => setActiveTab('search')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'search'
                  ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Cerca & Glossario</span>
            </button>

            <button
              onClick={() => setActiveTab('syllabus')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'syllabus'
                  ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Indice (8 Capitoli)</span>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: RICERCA GLOBALE & GLOSSARIO A-Z UNIFICATI               */}
        {/* ============================================================== */}
        {activeTab === 'search' && (
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
            {/* Barra di ricerca unica per Lezioni + Glossario */}
            <div className="space-y-3">
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Cerca argomenti, lezioni o termini nel glossario (es. TLR4, MHC, Centroblasto, CAR-T)..."
                  className="w-full pl-11 pr-16 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans"
                  autoFocus
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
                  >
                    Svuota
                  </button>
                )}
              </div>

              {/* Filtro Ambito: Tutto | Glossario A-Z | Lezioni del Libro */}
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  onClick={() => setSearchScope('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    searchScope === 'all'
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  Tutto ({filteredGlossary.length + searchResults.length})
                </button>

                <button
                  onClick={() => setSearchScope('glossary')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    searchScope === 'glossary'
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Glossario A-Z ({filteredGlossary.length})</span>
                </button>

                <button
                  onClick={() => setSearchScope('lessons')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    searchScope === 'lessons'
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Lezioni ({searchResults.length})</span>
                </button>
              </div>
            </div>

            {/* Filtri specifici Glossario quando in vista Glossario */}
            {searchScope === 'glossary' && (
              <div className="space-y-2.5">
                {/* Barra Alfabetica A-Z */}
                <div className="flex flex-wrap items-center gap-1 p-2 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800">
                  {glossaryLetters.map((char) => (
                    <button
                      key={char}
                      onClick={() => setGlossaryLetter(char)}
                      className={`px-2 py-1 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                        glossaryLetter === char
                          ? 'bg-indigo-600 text-white shadow-2xs'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                      }`}
                    >
                      {char}
                    </button>
                  ))}
                </div>

                {/* Categorie Glossario */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {glossaryCategories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setGlossaryCat(c)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        glossaryCat === c
                          ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Filtri Capitoli quando in vista Lezioni */}
            {searchScope === 'lessons' && (
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  onClick={() => setSelectedChapterFilter('all')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedChapterFilter === 'all'
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-2xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  Tutti i Capitoli (8)
                </button>
                {BOOK_CHAPTERS.filter((c) => c.id > 0).map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => setSelectedChapterFilter(ch.id)}
                    className={`px-2 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      selectedChapterFilter === ch.id
                        ? `${ch.badgeColor.bg} shadow-2xs`
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    Cap. {ch.romanId}
                  </button>
                ))}
              </div>
            )}

            {/* SEZIONE GLOSSARIO */}
            {showGlossarySection && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4" />
                    Termini del Glossario ({filteredGlossary.length})
                  </span>
                  {searchScope === 'all' && !hasTypedQuery && filteredGlossary.length > 6 && (
                    <button
                      onClick={() => setSearchScope('glossary')}
                      className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                    >
                      Vedi tutto il Glossario A-Z →
                    </button>
                  )}
                </div>

                {filteredGlossary.length === 0 ? (
                  <div className="p-5 text-center bg-slate-50 dark:bg-slate-850 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-xs text-slate-500">
                    Nessun termine trovato nel glossario per "{query}".
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {(searchScope === 'all' ? displayedGlossaryInAll : filteredGlossary).map((item) => (
                      <div
                        key={item.term}
                        className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col justify-between space-y-2 shadow-2xs"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h4 className="font-extrabold text-slate-900 dark:text-slate-100 text-sm">
                              {item.term}
                            </h4>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 shrink-0">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed font-sans">
                            {item.definition}
                          </p>
                        </div>

                        {item.lessonNumber && (
                          <div className="pt-2 border-t border-slate-150 dark:border-slate-800 flex items-center justify-between text-[11px]">
                            <span className="text-slate-500 font-mono">
                              Lezione {item.lessonNumber}
                            </span>
                            <button
                              onClick={() => {
                                onNavigateToLesson(item.lessonNumber!);
                                onClose();
                              }}
                              className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 flex items-center gap-1 transition-colors cursor-pointer"
                            >
                              <span>Apri Sezione</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* SEZIONE LEZIONI & CAPITOLI */}
            {showLessonsSection && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    Lezioni & Sezioni del Manuale ({searchResults.length})
                  </span>
                  {selectedChapterFilter !== 'all' && (
                    <span className="font-mono text-slate-500">Capitolo {selectedChapterFilter}</span>
                  )}
                </div>

                {searchResults.length === 0 ? (
                  <div className="p-6 text-center bg-slate-50 dark:bg-slate-850 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Nessuna lezione corrisponde ai criteri cercati.
                    </p>
                  </div>
                ) : (
                  searchResults.map((l) => {
                    const { chapter, section } = getSectionByLessonNumber(l.number);

                    return (
                      <div
                        key={l.number}
                        onClick={() => {
                          onNavigateToLesson(l.number);
                          onClose();
                        }}
                        className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer hover:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                          currentLesson === l.number
                            ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 shadow-2xs ring-1 ring-blue-500'
                            : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-300 hover:bg-slate-50/80 dark:hover:bg-slate-850'
                        }`}
                      >
                        <div className="space-y-1.5 flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 text-xs">
                            <span
                              className={`px-2 py-0.5 rounded text-[10.5px] font-bold font-mono tracking-tight shrink-0 ${chapter.badgeColor.bg}`}
                            >
                              Cap. {chapter.id === 0 ? 'Intro' : chapter.romanId}
                            </span>

                            <span className="font-mono font-bold text-blue-700 dark:text-blue-400">
                              Sez. {section.code}
                            </span>
                            <span className="text-slate-400">·</span>
                            <span className="text-slate-600 dark:text-slate-300 font-medium">
                              {l.professor}
                            </span>
                          </div>

                          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                            {l.title}
                          </h3>

                          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                            {l.summary}
                          </p>

                          <div className="flex flex-wrap gap-1.5 pt-0.5">
                            {l.topics.slice(0, 4).map((t, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button
                          type="button"
                          className="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-1.5 shrink-0 self-end sm:self-center transition-colors shadow-2xs cursor-pointer"
                        >
                          <span>Leggi</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })
                )}
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: INDICE DEL LIBRO RAGGRUPPATO NEI 8 MACRO-CAPITOLI       */}
        {/* ============================================================== */}
        {activeTab === 'syllabus' && (
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs bg-slate-50 dark:bg-slate-850 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Struttura dell'Opera: 8 Macro-Moduli Ufficiali
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleExpandAllChapters}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Espandi Tutto
                </button>
                <button
                  onClick={handleCollapseAllChapters}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Comprimi
                </button>
              </div>
            </div>

            <div className="space-y-3.5">
              {BOOK_CHAPTERS.map((ch) => {
                const isOpen = openChapterAccordions.has(ch.id);
                const isCurrentChapter = ch.lessonNumbers.includes(currentLesson);

                return (
                  <div
                    key={ch.id}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isCurrentChapter
                        ? 'border-blue-400 dark:border-blue-800 shadow-sm bg-white dark:bg-slate-900'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
                    }`}
                  >
                    <div
                      onClick={() => toggleChapterAccordion(ch.id)}
                      className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-slate-50/80 dark:hover:bg-slate-850/60 transition-colors"
                    >
                      <div className="flex items-start sm:items-center gap-3 min-w-0">
                        <div
                          className={`px-3 py-1 rounded-xl text-xs font-black font-mono shrink-0 shadow-2xs ${ch.badgeColor.bg}`}
                        >
                          {ch.id === 0 ? 'INTRO' : `CAPITOLO ${ch.romanId}`}
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 truncate">
                              {ch.title}
                            </h3>
                            {isCurrentChapter && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 shrink-0">
                                In Lettura
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                            {ch.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0 self-end sm:self-center text-xs">
                        <span className="font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                          {ch.sections.length} sezioni
                        </span>
                        <div className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                          {isOpen ? (
                            <ChevronDown className="w-5 h-5" />
                          ) : (
                            <ChevronRight className="w-5 h-5" />
                          )}
                        </div>
                      </div>
                    </div>

                    {isOpen && (
                      <div className="border-t border-slate-150 dark:border-slate-800 p-4 sm:p-5 bg-slate-50/40 dark:bg-slate-950/40 space-y-3">
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                          {ch.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2">
                          {ch.sections.map((sec, secIdx) => {
                            const isCurrent = sec.lessonNumber === currentLesson;

                            return (
                              <div
                                key={`${ch.id}-${sec.code}-${secIdx}`}
                                onClick={() => {
                                  onNavigateToLesson(sec.lessonNumber, sec.anchorId);
                                  onClose();
                                }}
                                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                                  isCurrent
                                    ? 'border-blue-500 bg-blue-50/80 dark:bg-blue-950/60 shadow-2xs ring-1 ring-blue-500'
                                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-300 hover:shadow-2xs'
                                }`}
                              >
                                <div className="space-y-1 min-w-0">
                                  <div className="flex items-center gap-1.5 text-xs">
                                    <span
                                      className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                                        isCurrent
                                          ? 'bg-blue-600 text-white'
                                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                                      }`}
                                    >
                                      Sez. {sec.code}
                                    </span>
                                    <span className="text-[11px] font-mono text-slate-400">
                                      Lezione {sec.lessonNumber}
                                    </span>
                                  </div>

                                  <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100 line-clamp-1">
                                    {sec.title}
                                  </h4>

                                  <div className="flex items-center gap-2 text-[10.5px] text-slate-500">
                                    <span>{sec.professor}</span>
                                    <span>·</span>
                                    <span>{sec.duration}</span>
                                  </div>
                                </div>

                                <button
                                  type="button"
                                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:hover:bg-blue-600 text-slate-600 dark:text-slate-300 transition-colors shrink-0"
                                  title="Vai a questa sezione"
                                >
                                  <ArrowRight className="w-4 h-4" />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
