import React, { useState } from 'react';
import { LECTURES_LIST, LectureSyllabusItem } from '../data/lecturesSyllabus';
import { BookOpen, CheckCircle2, Clock, ChevronLeft, ChevronRight, Upload, Sparkles, Copy, Check } from 'lucide-react';

interface TopBar33LecturesProps {
  currentLecture: number;
  onSelectLecture: (num: number) => void;
}

export const TopBar33Lectures: React.FC<TopBar33LecturesProps> = ({
  currentLecture,
  onSelectLecture
}) => {
  const [selectedUpcoming, setSelectedUpcoming] = useState<LectureSyllabusItem | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = (lec: LectureSyllabusItem) => {
    const prompt = `Ecco la sbobina della **${lec.title}** (${lec.prof}). Trasformala nella relativa sezione del manuale universitario seguendo le System Instructions, con testo accademico completo, tabelle sinottiche, simulatori interattivi, perle cliniche d'esame, quiz e flashcard:\n\n[INCOLLA QUI IL TESTO DELLA SBOBINA ${lec.number}]`;
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const availableCount = LECTURES_LIST.filter((l) => l.isAvailable).length;
  const pendingCount = LECTURES_LIST.length - availableCount;

  return (
    <div className="bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        {/* Title row */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              Corso di Immunologia · 33 Lezioni / Sbobine
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Seleziona la lezione per visualizzare gli argomenti e il capitolo:
            </span>
          </div>

          <div className="text-xs text-slate-600 font-mono">
            <span className="text-emerald-700 font-bold">{availableCount} Disponibili</span> · <span>{pendingCount} In Attesa</span>
          </div>
        </div>

        {/* 33-Item Horizontal Scrollable Rail */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin">
          {LECTURES_LIST.map((lec) => {
            const isSelected = currentLecture === lec.number;
            const isDone = lec.isAvailable;

            return (
              <button
                key={lec.number}
                onClick={() => {
                  if (lec.isAvailable) {
                    onSelectLecture(lec.number);
                  } else {
                    setSelectedUpcoming(lec);
                  }
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all border shrink-0 ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-700 font-bold shadow-xs'
                    : isDone
                    ? 'bg-emerald-50 text-emerald-900 border-emerald-300 hover:bg-emerald-100 font-semibold'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
                title={`${lec.title} - ${lec.prof}`}
              >
                <span
                  className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-mono font-bold ${
                    isSelected
                      ? 'bg-white text-blue-700'
                      : isDone
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {lec.number}
                </span>

                <span className="max-w-[170px] truncate">{lec.shortTitle}</span>

                {isDone && !isSelected && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal/Drawer when clicking on an upcoming lecture */}
      {selectedUpcoming && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-blue-700 uppercase font-semibold">
                  Sbobina {selectedUpcoming.number} di 33 · {selectedUpcoming.prof}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">
                  {selectedUpcoming.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedUpcoming(null)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-serif-body">
              {selectedUpcoming.summary}
            </p>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
              <span className="font-bold text-slate-800 block mb-1">Argomenti Chiave della Lezione:</span>
              <ul className="space-y-1 text-slate-600">
                {selectedUpcoming.topics.map((t, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => handleCopyPrompt(selectedUpcoming)}
                className="w-full py-2 px-3 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Prompt Copiato! Incolla in Chat' : 'Copia Prompt per Incollare la Sbobina in Chat'}</span>
              </button>
              <button
                onClick={() => setSelectedUpcoming(null)}
                className="w-full py-1.5 text-xs text-slate-500 hover:text-slate-700 text-center"
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
