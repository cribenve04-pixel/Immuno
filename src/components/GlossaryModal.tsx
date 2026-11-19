import React, { useState, useMemo } from 'react';
import { DETAILED_GLOSSARY, DetailedGlossaryTerm } from '../data/expandedGlossary';
import { Search, X, BookA, Tag, ExternalLink, ArrowRight } from 'lucide-react';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToLesson?: (lessonNumber: number) => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({
  isOpen,
  onClose,
  onNavigateToLesson
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState<string>('Tutte');
  const [selectedLetter, setSelectedLetter] = useState<string>('Tutte');

  const categories = [
    'Tutte',
    'Innata & PRR',
    'Adattativa T/B',
    'Complemento',
    'Citochine & Segnalazione',
    'Immunopatologia',
    'Clinica & Farmaci'
  ];

  const letters = useMemo(() => {
    const lettersSet = new Set<string>();
    DETAILED_GLOSSARY.forEach((t) => lettersSet.add(t.letter.toUpperCase()));
    return ['Tutte', ...Array.from(lettersSet).sort()];
  }, []);

  const filteredTerms = useMemo(() => {
    return DETAILED_GLOSSARY.filter((item) => {
      const matchSearch =
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCat = selectedCat === 'Tutte' || item.category === selectedCat;
      const matchLetter = selectedLetter === 'Tutte' || item.letter.toUpperCase() === selectedLetter;
      return matchSearch && matchCat && matchLetter;
    });
  }, [searchTerm, selectedCat, selectedLetter]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[88vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-500/30">
              <BookA className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Glossario Medico di Immunologia Generale e Clinica</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  {DETAILED_GLOSSARY.length} Termini
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Definizioni rigorose in ordine alfabetico, acronimi, citochine, PRR, farmaci biologici e checkpoint
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

        {/* Search & Alphabetical Ribbon */}
        <div className="p-4 border-b border-slate-200 bg-white space-y-3 shadow-2xs">
          {/* Live Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cerca termine, acronimo o molecola (es. CD28, Nef, MAC, CCR5, Tocilizumab, RAG)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
              autoFocus
            />
          </div>

          {/* Alphabetical A-Z Quick Filters */}
          <div className="flex flex-wrap items-center gap-1 text-[11px] font-mono font-bold">
            <span className="text-slate-400 mr-1 text-xs">Indice:</span>
            {letters.map((lettr) => (
              <button
                key={lettr}
                onClick={() => setSelectedLetter(lettr)}
                className={`w-6 h-6 rounded flex items-center justify-center transition-all ${
                  selectedLetter === lettr
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {lettr === 'Tutte' ? 'All' : lettr}
              </button>
            ))}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors ${
                  selectedCat === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Term List */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3 flex-1 bg-slate-50">
          {filteredTerms.map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-all shadow-2xs space-y-1.5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-bold text-slate-900 text-sm">{item.term}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-semibold">
                    {item.category}
                  </span>
                  {item.lessonNumber && onNavigateToLesson && (
                    <button
                      onClick={() => {
                        onClose();
                        onNavigateToLesson(item.lessonNumber!);
                      }}
                      className="text-[10px] font-mono font-bold text-slate-500 hover:text-blue-700 bg-slate-100 hover:bg-blue-50 px-2 py-0.5 rounded flex items-center gap-1 transition-colors border border-slate-200"
                      title={`Vai alla Lezione ${item.lessonNumber}`}
                    >
                      <span>Lez. {item.lessonNumber}</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </button>
                  )}
                </div>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-serif-body">
                {item.definition}
              </p>
            </div>
          ))}

          {filteredTerms.length === 0 && (
            <div className="py-16 text-center text-xs text-slate-400">
              Nessun termine corrisponde ai parametri di ricerca selezionati.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 border-t border-slate-200 bg-white text-[11px] text-slate-500 flex justify-between items-center">
          <span>
            Visualizzati <strong>{filteredTerms.length}</strong> su {DETAILED_GLOSSARY.length} termini
          </span>
          <span className="text-slate-400">Premi Esc per chiudere</span>
        </div>
      </div>
    </div>
  );
};
