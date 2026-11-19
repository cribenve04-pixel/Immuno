import React, { useState, useMemo } from 'react';
import { ALL_33_LESSONS, LessonMeta } from '../data/courseSyllabus';
import { Search, X, BookOpen, User, Calendar, ArrowRight, Tag, Filter, CheckCircle2 } from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToLesson: (lessonNumber: number, sectionId?: string) => void;
}

export const MACRO_TOPICS_MAP: { [key: string]: number[] } = {
  "Tutti i Macro-Argomenti": Array.from({ length: 33 }, (_, i) => i + 1),
  "1. Basi & Immunità Innata": [1, 3, 4, 5, 21],
  "2. Basi Molecolari & Maturazione": [6, 7, 8, 9, 10, 11],
  "3. Attivazione & Differenziamento T/B": [2, 12, 13, 14, 19, 20],
  "4. Meccanismi Effettori & Complemento": [15, 16, 17, 18],
  "5. Immunità Mucosale, Microbiota & Infezioni": [22, 23, 24, 25],
  "6. Ipersensibilità & Immunopatologia": [26, 27, 28],
  "7. Tolleranza & Autoimmunità": [29, 30, 31],
  "8. Immunologia Oncologica & Immunodeficienze": [32, 33]
};

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigateToLesson
}) => {
  const [query, setQuery] = useState('');
  const [selectedMacroTopic, setSelectedMacroTopic] = useState<string>('Tutti i Macro-Argomenti');
  const [selectedProf, setSelectedProf] = useState<string>('Tutti i Docenti');

  // Unified teacher list: merges duplicate surname variants
  const professors = [
    'Tutti i Docenti',
    'Dott. Fabrizio Antonangeli',
    'Prof.ssa Ricciarda Galandrini',
    'Prof.ssa Rosa Molfetta',
    'Prof.ssa Alessandra Soriani'
  ];

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    const allowedLessonNumbers = MACRO_TOPICS_MAP[selectedMacroTopic] || [];

    return ALL_33_LESSONS.filter((lesson) => {
      // 1. Check macro-topic constraint
      if (!allowedLessonNumbers.includes(lesson.number)) return false;

      // 2. Check professor constraint (unifying surnames and joint courses)
      if (selectedProf !== 'Tutti i Docenti') {
        const filterKey = selectedProf.toLowerCase();
        const profLower = lesson.professor.toLowerCase();
        let matches = false;
        if (filterKey.includes('galandrini') && profLower.includes('galandrini')) matches = true;
        else if (filterKey.includes('molfetta') && profLower.includes('molfetta')) matches = true;
        else if (filterKey.includes('soriani') && profLower.includes('soriani')) matches = true;
        else if (filterKey.includes('antonangeli') && profLower.includes('antonangeli')) matches = true;
        else if (profLower.includes(filterKey)) matches = true;

        if (!matches) return false;
      }

      // 3. Check text query if typed
      if (!q) return true;

      const inTitle = lesson.title.toLowerCase().includes(q);
      const inSummary = lesson.summary.toLowerCase().includes(q);
      const inTopics = lesson.topics.some((t) => t.toLowerCase().includes(q));
      const inNumber = `lezione ${lesson.number}`.includes(q) || `lez ${lesson.number}`.includes(q);

      return inTitle || inSummary || inTopics || inNumber;
    });
  }, [query, selectedMacroTopic, selectedProf]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[88vh] flex flex-col overflow-hidden">
        {/* Search Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-500/30">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Motore di Ricerca & Filtro Lezioni del Corso</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  33 Lezioni
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Cerca termini molecolari, citochine, patologie, o filtra per professore e macro-argomento
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Query Input & Live Filters */}
        <div className="p-4 border-b border-slate-200 bg-white space-y-3 shadow-2xs">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Digita termine di ricerca (es. Interleuchina-2, MHC, Nef, CCR5, Rituximab, Mastociti, Granuloma)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
              autoFocus
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {/* Filter by Macro-Argomenti */}
            <div>
              <label className="text-[10px] font-mono uppercase text-slate-500 font-bold block mb-1">
                Filtra per Macro-Argomento:
              </label>
              <select
                value={selectedMacroTopic}
                onChange={(e) => setSelectedMacroTopic(e.target.value)}
                className="w-full text-xs font-semibold p-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-800"
              >
                {Object.keys(MACRO_TOPICS_MAP).map((mt) => (
                  <option key={mt} value={mt}>
                    {mt}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter by Professore */}
            <div>
              <label className="text-[10px] font-mono uppercase text-slate-500 font-bold block mb-1">
                Filtra per Professore:
              </label>
              <select
                value={selectedProf}
                onChange={(e) => setSelectedProf(e.target.value)}
                className="w-full text-xs font-semibold p-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-800"
              >
                {professors.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3 flex-1 bg-slate-50">
          <div className="text-[11px] font-mono text-slate-500 flex justify-between items-center mb-1">
            <span>
              Risultati trovati: <strong>{searchResults.length}</strong> lezioni
            </span>
            {(selectedMacroTopic !== 'Tutti i Macro-Argomenti' || selectedProf !== 'Tutti i Docenti' || query) && (
              <button
                onClick={() => {
                  setQuery('');
                  setSelectedMacroTopic('Tutti i Macro-Argomenti');
                  setSelectedProf('Tutti i Docenti');
                }}
                className="text-blue-600 hover:underline"
              >
                Resetta filtri
              </button>
            )}
          </div>

          {searchResults.map((l) => (
            <div
              key={l.number}
              onClick={() => {
                onClose();
                onNavigateToLesson(l.number);
              }}
              className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-xs transition-all cursor-pointer group space-y-2"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    {l.number}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    Lezione {l.number}: {l.title}
                  </h4>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3 text-slate-400" />
                    {l.professor}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {l.dateStr}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-serif-body">
                {l.summary}
              </p>

              {/* Topics preview */}
              <div className="flex flex-wrap gap-1 pt-1">
                {l.topics.slice(0, 4).map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                  >
                    {t}
                  </span>
                ))}
                {l.topics.length > 4 && (
                  <span className="text-[10px] font-mono text-slate-400 px-1 py-0.5">
                    +{l.topics.length - 4} altri
                  </span>
                )}
              </div>
            </div>
          ))}

          {searchResults.length === 0 && (
            <div className="py-16 text-center text-xs text-slate-400 space-y-2">
              <Search className="w-8 h-8 mx-auto text-slate-300" />
              <p>Nessuna lezione corrisponde alla ricerca o ai filtri impostati.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 border-t border-slate-200 bg-white text-xs text-slate-500 flex justify-between items-center">
          <span>Clicca su una lezione per aprirla istantaneamente</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-colors"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};
