import React, { useState, useMemo } from 'react';
import { FLASHCARDS } from '../data/chapterContent';
import { Rotate3D, Check, ArrowLeft, ArrowRight, Bookmark } from 'lucide-react';

export interface FlashcardItem {
  id?: string | number;
  front?: string;
  q?: string;
  question?: string;
  back?: string;
  a?: string;
  answer?: string;
  category?: string;
  tag?: string;
  topic?: string;
}

export interface FlashcardDeckProps {
  cards?: (FlashcardItem | any)[];
  lessonNumber?: number;
  title?: string;
  subtitle?: string;
}

export const FlashcardDeck: React.FC<FlashcardDeckProps> = ({
  cards,
  lessonNumber,
  title,
  subtitle
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tutti');
  const [mastered, setMastered] = useState<Set<string>>(new Set());

  // Normalize incoming cards or fallback to chapterContent FLASHCARDS
  const normalizedCards = useMemo(() => {
    if (cards && cards.length > 0) {
      return cards.map((c, idx) => ({
        id: String(c.id ?? `card-${idx + 1}`),
        front: c.front || c.q || c.question || '',
        back: c.back || c.a || c.answer || '',
        category: c.category || c.tag || c.topic || (lessonNumber ? `Lezione ${lessonNumber}` : 'Concetto Chiave')
      }));
    }
    return FLASHCARDS;
  }, [cards, lessonNumber]);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    normalizedCards.forEach((c) => {
      if (c.category) set.add(c.category);
    });
    const arr = Array.from(set);
    if (arr.length > 1) {
      return ['Tutti', ...arr];
    }
    return [];
  }, [normalizedCards]);

  const filteredCards = useMemo(() => {
    if (selectedCategory === 'Tutti' || categories.length <= 1) {
      return normalizedCards;
    }
    return normalizedCards.filter((c) => c.category === selectedCategory);
  }, [selectedCategory, normalizedCards, categories.length]);

  const card = filteredCards[currentIdx] || filteredCards[0] || {
    id: 'empty',
    front: 'Nessuna scheda disponibile',
    back: 'Nessuna spiegazione disponibile',
    category: 'N/A'
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIdx((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIdx((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const toggleMastered = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const next = new Set(mastered);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setMastered(next);
  };

  return (
    <div id="flashcards" className="bg-white rounded-xl border border-slate-200 overflow-hidden my-8 shadow-xs">
      {/* Top Banner */}
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold flex items-center gap-1.5">
            <Bookmark className="w-3.5 h-3.5" />
            {lessonNumber ? `Ripasso Attivo · Lezione ${lessonNumber}` : 'Ripasso Attivo (Active Recall)'}
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-0.5">
            {title || (lessonNumber ? `Flashcard Concettuali · Lezione ${lessonNumber}` : "Flashcard Concettuali per l'Esame")}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {subtitle || 'Schede di memorizzazione rapida per il consolidamento dei concetti chiave d\'esame.'}
          </p>
        </div>

        {/* Category Filter if multiple exist */}
        {categories.length > 1 && (
          <div className="flex flex-wrap items-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setSelectedCategory(cat); setCurrentIdx(0); setIsFlipped(false); }}
                className={`px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white font-medium'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Flashcard Body (Screen Interactive) */}
      <div className="p-6 max-w-xl mx-auto print:hidden">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
          <span className="font-medium">Scheda {filteredCards.length > 0 ? currentIdx + 1 : 0} di {filteredCards.length}</span>
          <span className="font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
            {card.category}
          </span>
        </div>

        {/* 3D Flip Card Container */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="relative min-h-[220px] p-6 rounded-xl border-2 border-slate-200 hover:border-blue-400 bg-white shadow-xs cursor-pointer select-none transition-all flex flex-col justify-between group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase text-slate-400 flex items-center gap-1">
              <Rotate3D className="w-3.5 h-3.5 text-blue-600" />
              {isFlipped ? 'Risposta & Spiegazione' : 'Domanda d\'Esame'}
            </span>

            <button
              onClick={(e) => toggleMastered(card.id, e)}
              className={`p-1 px-2 rounded text-xs flex items-center gap-1 transition-colors cursor-pointer ${
                mastered.has(card.id)
                  ? 'bg-emerald-100 text-emerald-800 font-medium'
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
              }`}
              title={mastered.has(card.id) ? 'Memorizzato' : 'Segna come appreso'}
            >
              <Check className="w-3.5 h-3.5" />
              <span className="text-[11px]">{mastered.has(card.id) ? 'Appreso ✓' : 'Segna come appreso'}</span>
            </button>
          </div>

          <div className="my-auto py-4 text-center">
            {isFlipped ? (
              <p className="text-sm text-slate-800 leading-relaxed font-normal">
                {card.back}
              </p>
            ) : (
              <h4 className="text-base font-bold text-slate-900 leading-snug">
                {card.front}
              </h4>
            )}
          </div>

          <div className="text-center text-[11px] text-slate-400 group-hover:text-blue-600 transition-colors">
            Fai clic sulla scheda per capovolgerla
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-4 flex items-center justify-between gap-2">
          <button
            onClick={handlePrev}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Precedente</span>
          </button>

          <span className="text-xs text-slate-500 font-mono">
            {mastered.size} su {normalizedCards.length} padroneggiate
          </span>

          <button
            onClick={handleNext}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs cursor-pointer"
          >
            <span>Successiva</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Printable Unrolled Flashcards Grid (Schede di Ripasso Attivo A4) */}
      <div className="hidden print:block p-5 border-t border-slate-200 bg-white">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 font-mono flex items-center justify-between">
          <span>Schede di Ripasso Attivo (Domande & Risposte d'Esame Srotolate)</span>
          <span className="text-slate-500">{normalizedCards.length} Schede Totali</span>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs">
          {normalizedCards.map((c, idx) => (
            <div key={c.id || idx} className="p-3 border border-slate-300 rounded-lg bg-slate-50/70 break-inside-avoid">
              <div className="flex items-center justify-between text-[10.5px] font-mono text-slate-500 mb-1 border-b border-slate-200 pb-1">
                <span>Scheda #{idx + 1}</span>
                <span className="font-semibold text-blue-700">{c.category}</span>
              </div>
              <div className="font-bold text-slate-900 my-1 leading-snug">
                {c.front}
              </div>
              <div className="text-slate-700 border-t border-slate-200/80 pt-1.5 leading-relaxed text-[11px]">
                <strong className="text-slate-900">Risposta:</strong> {c.back}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
