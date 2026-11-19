import React, { useState } from 'react';
import {
  GitMerge,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Sparkles,
  Info,
  ChevronDown,
  ChevronUp,
  Volume2,
  Dna,
  Activity,
  Layers,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';

export type ConceptMapTheme = 'blue' | 'indigo' | 'purple' | 'emerald' | 'amber' | 'rose' | 'cyan';

export interface ConceptStep {
  stepNumber?: number | string;
  stage: string;
  highlightBadge?: string;
  molecularActors?: string[];
  description: string;
  checkpointOrOutcome?: string;
  statusColor?: 'neutral' | 'success' | 'warning' | 'danger' | 'info';
}

export interface ConceptBranch {
  condition: string;
  testOrSignal: string;
  outcomes: {
    label: string;
    description: string;
    status: 'success' | 'warning' | 'danger';
    badge?: string;
  }[];
}

export interface ConceptMapFlowProps {
  id?: string;
  badge?: string;
  title: string;
  subtitle: string;
  colorTheme?: ConceptMapTheme;
  mode?: 'horizontal-chain' | 'bifurcation' | 'matrix-divergence' | 'comparison-flow';
  steps?: ConceptStep[];
  branches?: ConceptBranch;
  comparisonColumns?: {
    title: string;
    badge?: string;
    theme?: ConceptMapTheme;
    points?: { label: string; value: string }[];
    outcome?: string;
    colorAccent?: string;
    items?: string[];
  }[];
  clinicalSummary?: string;
  dataSpeechText?: string;
}

export const ConceptMapFlow: React.FC<ConceptMapFlowProps> = ({
  id,
  badge = 'MAPPA CONCETTUALE · SCHEMA DI PROCESSO',
  title,
  subtitle,
  colorTheme = 'indigo',
  mode = 'horizontal-chain',
  steps = [],
  branches,
  comparisonColumns = [],
  clinicalSummary,
  dataSpeechText
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  // Theme palettes
  const themeStyles = {
    blue: {
      border: 'border-blue-200 dark:border-blue-900',
      headerBg: 'bg-gradient-to-r from-blue-50 via-sky-50/60 to-white dark:from-blue-950/60 dark:via-slate-900 dark:to-slate-900',
      badge: 'bg-blue-600 text-white',
      accentText: 'text-blue-700 dark:text-blue-400',
      nodeBorder: 'border-blue-200 dark:border-blue-800',
      nodeBg: 'bg-blue-50/50 dark:bg-blue-950/30',
      arrowColor: 'text-blue-500'
    },
    indigo: {
      border: 'border-indigo-200 dark:border-indigo-900',
      headerBg: 'bg-gradient-to-r from-indigo-50 via-slate-50 to-white dark:from-indigo-950/60 dark:via-slate-900 dark:to-slate-900',
      badge: 'bg-indigo-600 text-white',
      accentText: 'text-indigo-700 dark:text-indigo-400',
      nodeBorder: 'border-indigo-200 dark:border-indigo-800',
      nodeBg: 'bg-indigo-50/50 dark:bg-indigo-950/30',
      arrowColor: 'text-indigo-500'
    },
    purple: {
      border: 'border-purple-200 dark:border-purple-900',
      headerBg: 'bg-gradient-to-r from-purple-50 via-pink-50/40 to-white dark:from-purple-950/60 dark:via-slate-900 dark:to-slate-900',
      badge: 'bg-purple-600 text-white',
      accentText: 'text-purple-700 dark:text-purple-400',
      nodeBorder: 'border-purple-200 dark:border-purple-800',
      nodeBg: 'bg-purple-50/50 dark:bg-purple-950/30',
      arrowColor: 'text-purple-500'
    },
    emerald: {
      border: 'border-emerald-200 dark:border-emerald-900',
      headerBg: 'bg-gradient-to-r from-emerald-50 via-teal-50/40 to-white dark:from-emerald-950/60 dark:via-slate-900 dark:to-slate-900',
      badge: 'bg-emerald-600 text-white',
      accentText: 'text-emerald-700 dark:text-emerald-400',
      nodeBorder: 'border-emerald-200 dark:border-emerald-800',
      nodeBg: 'bg-emerald-50/50 dark:bg-emerald-950/30',
      arrowColor: 'text-emerald-500'
    },
    amber: {
      border: 'border-amber-200 dark:border-amber-900',
      headerBg: 'bg-gradient-to-r from-amber-50 via-orange-50/40 to-white dark:from-amber-950/60 dark:via-slate-900 dark:to-slate-900',
      badge: 'bg-amber-600 text-white',
      accentText: 'text-amber-800 dark:text-amber-400',
      nodeBorder: 'border-amber-200 dark:border-amber-800',
      nodeBg: 'bg-amber-50/50 dark:bg-amber-950/30',
      arrowColor: 'text-amber-500'
    },
    rose: {
      border: 'border-rose-200 dark:border-rose-900',
      headerBg: 'bg-gradient-to-r from-rose-50 via-red-50/40 to-white dark:from-rose-950/60 dark:via-slate-900 dark:to-slate-900',
      badge: 'bg-rose-600 text-white',
      accentText: 'text-rose-700 dark:text-rose-400',
      nodeBorder: 'border-rose-200 dark:border-rose-800',
      nodeBg: 'bg-rose-50/50 dark:bg-rose-950/30',
      arrowColor: 'text-rose-500'
    },
    cyan: {
      border: 'border-cyan-200 dark:border-cyan-900',
      headerBg: 'bg-gradient-to-r from-cyan-50 via-sky-50/40 to-white dark:from-cyan-950/60 dark:via-slate-900 dark:to-slate-900',
      badge: 'bg-cyan-600 text-white',
      accentText: 'text-cyan-700 dark:text-cyan-400',
      nodeBorder: 'border-cyan-200 dark:border-cyan-800',
      nodeBg: 'bg-cyan-50/50 dark:bg-cyan-950/30',
      arrowColor: 'text-cyan-500'
    }
  }[colorTheme];

  // Auto-generate spoken narrative if not passed
  const spokenText = dataSpeechText || (
    `${title}. ${subtitle}. ` +
    (steps.length > 0 ? steps.map((s, i) => `Tappa ${i + 1}: ${s.stage}. ${s.description}`).join(' ') : '') +
    (clinicalSummary ? ` Rilevanza clinica: ${clinicalSummary}` : '')
  );

  return (
    <div
      id={id}
      data-speech-text={spokenText}
      className={`my-6 rounded-2xl border ${themeStyles.border} bg-white dark:bg-slate-900 shadow-sm overflow-hidden not-prose transition-all`}
    >
      {/* Header Bar */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`p-4 sm:p-5 ${themeStyles.headerBg} border-b ${themeStyles.border} cursor-pointer flex items-center justify-between gap-3 select-none`}
      >
        <div className="flex items-start sm:items-center gap-3">
          <div className="p-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs shrink-0 mt-0.5 sm:mt-0">
            <GitMerge className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${themeStyles.badge}`}>
                {badge}
              </span>
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" />
                Visione d'Insieme &amp; Mappa Concettuale
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-snug">
              {title}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 line-clamp-2">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 hidden sm:inline print:hidden">
            {isExpanded ? 'Riduci' : 'Espandi'}
          </span>
          <button
            type="button"
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 print:hidden"
            aria-label={isExpanded ? 'Riduci mappa concettuale' : 'Espandi mappa concettuale'}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Flow Body */}
      <div className={`p-4 sm:p-6 space-y-6 ${isExpanded ? 'block' : 'hidden print:block'}`}>
          {/* MODE 1: Sequential Flow / Pipeline */}
          {mode === 'horizontal-chain' && steps.length > 0 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
                {steps.map((st, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl border ${themeStyles.nodeBorder} ${themeStyles.nodeBg} p-4 flex flex-col justify-between space-y-3 relative group transition-all hover:shadow-xs`}
                  >
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                          {st.stepNumber || idx + 1}
                        </span>
                        {st.highlightBadge && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                            {st.highlightBadge}
                          </span>
                        )}
                      </div>

                      {/* Stage Name */}
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm leading-snug break-words">
                        {st.stage}
                      </h4>

                      {/* Molecular Actors */}
                      {st.molecularActors && st.molecularActors.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {st.molecularActors.map((actor, aIdx) => (
                            <span
                              key={aIdx}
                              className="px-1.5 py-0.5 rounded bg-white/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[10px] border border-slate-200/80 dark:border-slate-700"
                            >
                              {actor}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-xs text-slate-700 dark:text-slate-300 mt-2.5 leading-relaxed break-words">
                        {st.description}
                      </p>
                    </div>

                    {/* Checkpoint / Outcome Tag */}
                    {st.checkpointOrOutcome && (
                      <div className="pt-2 border-t border-slate-200/80 dark:border-slate-800 flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="break-words font-medium">{st.checkpointOrOutcome}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODE 2: Bifurcation / Decision Matrix */}
          {mode === 'bifurcation' && branches && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] font-mono font-bold uppercase text-slate-500 tracking-wider">
                  Test di Selezione &amp; Condizione a Monte
                </span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                  {branches.condition}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {branches.testOrSignal}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
                {branches.outcomes.map((out, oIdx) => {
                  const borderCol =
                    out.status === 'success'
                      ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/30'
                      : out.status === 'warning'
                      ? 'border-amber-300 dark:border-amber-800 bg-amber-50/60 dark:bg-amber-950/30'
                      : 'border-rose-300 dark:border-rose-800 bg-rose-50/60 dark:bg-rose-950/30';

                  const badgeCol =
                    out.status === 'success'
                      ? 'bg-emerald-600 text-white'
                      : out.status === 'warning'
                      ? 'bg-amber-600 text-white'
                      : 'bg-rose-600 text-white';

                  const IconComp =
                    out.status === 'success'
                      ? CheckCircle2
                      : out.status === 'warning'
                      ? AlertTriangle
                      : XCircle;

                  return (
                    <div key={oIdx} className={`p-4 rounded-xl border ${borderCol} flex flex-col justify-between space-y-3`}>
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <IconComp className="w-4 h-4 shrink-0" />
                          {out.badge && (
                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${badgeCol}`}>
                              {out.badge}
                            </span>
                          )}
                        </div>
                        <h5 className="font-bold text-sm text-slate-900 dark:text-slate-100 leading-snug">
                          {out.label}
                        </h5>
                        <p className="text-xs text-slate-700 dark:text-slate-300 mt-2 leading-relaxed">
                          {out.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* MODE 3: Comparison Flow */}
          {mode === 'comparison-flow' && comparisonColumns.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {comparisonColumns.map((col, cIdx) => (
                <div
                  key={cIdx}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 p-4 sm:p-5 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-2.5">
                      <h4 className="font-extrabold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                        {col.title}
                      </h4>
                      {col.badge && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200">
                          {col.badge}
                        </span>
                      )}
                    </div>

                    {col.points && col.points.length > 0 && (
                      <div className="space-y-2 text-xs">
                        {col.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                            <span className="font-bold text-slate-700 dark:text-slate-300 shrink-0 font-mono text-[11px]">
                              {pt.label}:
                            </span>
                            <span className="text-slate-600 dark:text-slate-400 break-words">
                              {pt.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {col.items && col.items.length > 0 && (
                      <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 list-disc pl-4">
                        {col.items.map((it, itIdx) => (
                          <li key={itIdx} className="leading-relaxed break-words">
                            {it}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {col.outcome && (
                    <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200">
                      <span className="font-bold text-blue-600 dark:text-blue-400">Esito Funzionale:</span> {col.outcome}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Clinical & Takeaway Summary Footer Card */}
          {clinicalSummary && (
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-100/90 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 flex items-start gap-3 text-xs text-slate-800 dark:text-slate-200">
              <Stethoscope className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-slate-900 dark:text-slate-100 block mb-0.5">
                  Sintesi per l'Esame Clinico &amp; Rilevanza Patologica:
                </strong>
                <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                  {clinicalSummary}
                </p>
              </div>
            </div>
          )}
        </div>
    </div>
  );
};
