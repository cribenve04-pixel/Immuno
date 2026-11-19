/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * MODALE SYLLABUS DEL MANUALE (8 Macro-Capitoli)
 */

import React, { useState } from 'react';
import { ALL_33_LESSONS, LessonMeta } from '../data/courseSyllabus';
import {
  BOOK_CHAPTERS,
  getSectionByLessonNumber
} from '../data/bookChapters';
import {
  BookMarked,
  Search,
  CheckCircle2,
  Clock,
  X,
  ChevronRight,
  ChevronDown,
  User,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';

interface SyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentChapter: number;
  onSelectChapter: (num: number) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  isOpen,
  onClose,
  currentChapter,
  onSelectChapter
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openChapters, setOpenChapters] = useState<Set<number>>(
    new Set([1, 2, 3, 4, 5, 6, 7, 8])
  );

  if (!isOpen) return null;

  const toggleChapter = (id: number) => {
    setOpenChapters((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredChapters = BOOK_CHAPTERS.map((ch) => {
    if (!searchTerm.trim()) return ch;
    const q = searchTerm.toLowerCase();

    const matchesChapter =
      ch.title.toLowerCase().includes(q) ||
      ch.subtitle.toLowerCase().includes(q);

    const matchingSections = ch.sections.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.code.toLowerCase().includes(q) ||
        s.professor.toLowerCase().includes(q) ||
        `lezione ${s.lessonNumber}`.includes(q)
    );

    if (matchesChapter || matchingSections.length > 0) {
      return {
        ...ch,
        sections: matchingSections.length > 0 ? matchingSections : ch.sections
      };
    }
    return null;
  }).filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-850">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-xs">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                  Piano dell'Opera in 8 Macro-Capitoli
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold">
                  34 Sezioni
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Manuale Ufficiale di Immunologia Generale e Clinica · Laurea Magistrale in Medicina e Chirurgia
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-3.5 sm:p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cerca capitolo, sezione o docente..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
              autoFocus
            />
          </div>
        </div>

        {/* 8 Macro-Chapters List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 bg-slate-50/50 dark:bg-slate-950/40">
          {filteredChapters.map((ch) => {
            if (!ch) return null;
            const isExpanded = openChapters.has(ch.id);

            return (
              <div
                key={ch.id}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs"
              >
                {/* Chapter Title Bar */}
                <button
                  onClick={() => toggleChapter(ch.id)}
                  className="w-full p-3.5 sm:p-4 flex items-center justify-between gap-3 text-left hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`px-2.5 py-0.5 rounded text-[11px] font-bold font-mono tracking-tight shrink-0 ${ch.badgeColor.bg}`}
                    >
                      {ch.id === 0 ? 'INTRO' : `CAPITOLO ${ch.romanId}`}
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 truncate">
                        {ch.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        {ch.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                      {ch.sections.length} sezioni
                    </span>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </button>

                {/* Sub-sections Grid */}
                {isExpanded && (
                  <div className="p-3 bg-slate-50/60 dark:bg-slate-950/60 border-t border-slate-150 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ch.sections.map((sec) => {
                      const isCurrent = currentChapter === sec.lessonNumber;

                      return (
                        <div
                          key={sec.lessonNumber}
                          onClick={() => {
                            onSelectChapter(sec.lessonNumber);
                            onClose();
                          }}
                          className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                            isCurrent
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 ring-1 ring-blue-500'
                              : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-300'
                          }`}
                        >
                          <div className="space-y-0.5 min-w-0">
                            <div className="flex items-center gap-1.5 text-[10px] font-mono">
                              <span className="font-bold text-blue-600 dark:text-blue-400">
                                Sez. {sec.code}
                              </span>
                              <span className="text-slate-400">·</span>
                              <span className="text-slate-500">Lez. {sec.lessonNumber}</span>
                            </div>
                            <h5 className="font-semibold text-xs text-slate-900 dark:text-slate-100 truncate">
                              {sec.title}
                            </h5>
                            <span className="text-[10px] text-slate-400 block truncate">
                              {sec.professor}
                            </span>
                          </div>

                          <span className="text-xs text-blue-600 font-bold shrink-0">
                            Apri →
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
