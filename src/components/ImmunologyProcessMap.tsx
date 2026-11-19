import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldAlert,
  Zap,
  Activity,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  Sliders,
  Layers
} from 'lucide-react';

export type ProcessRelationType = 'activates' | 'inhibits' | 'differentiates' | 'releases' | 'modulates';

export interface ProcessStep {
  id: string;
  stepNumber?: number | string;
  source: string;
  relation: string;
  relationType: ProcessRelationType;
  target: string;
  description?: string;
  molecularActors?: string[];
  interferingFactor?: {
    factor: string;
    action: string;
    clinicalEffect?: string;
  };
  checkpoint?: string;
}

export interface ProcessMapProps {
  title: string;
  subtitle?: string;
  summaryText?: string;
  badge?: string;
  steps: ProcessStep[];
  outcome: {
    label: string;
    description: string;
    isPathological?: boolean;
  };
  initialExpanded?: boolean;
}

const RELATION_STYLES: Record<
  ProcessRelationType,
  {
    bgBadge: string;
    icon: React.ReactNode;
    symbol: string;
  }
> = {
  activates: {
    bgBadge: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-100 border-emerald-300 dark:border-emerald-600 font-bold',
    icon: <Zap className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-300 shrink-0" />,
    symbol: '➔ attiva'
  },
  inhibits: {
    bgBadge: 'bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-100 border-rose-300 dark:border-rose-600 font-bold',
    icon: <XCircle className="w-3.5 h-3.5 text-rose-700 dark:text-rose-300 shrink-0" />,
    symbol: '⊣ inibisce'
  },
  differentiates: {
    bgBadge: 'bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-100 border-indigo-300 dark:border-indigo-600 font-bold',
    icon: <Layers className="w-3.5 h-3.5 text-indigo-700 dark:text-indigo-300 shrink-0" />,
    symbol: '➜ differenzia'
  },
  releases: {
    bgBadge: 'bg-cyan-100 dark:bg-cyan-950 text-cyan-900 dark:text-cyan-100 border-cyan-300 dark:border-cyan-600 font-bold',
    icon: <Activity className="w-3.5 h-3.5 text-cyan-700 dark:text-cyan-300 shrink-0" />,
    symbol: '⚡ rilascia'
  },
  modulates: {
    bgBadge: 'bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-100 border-amber-300 dark:border-amber-600 font-bold',
    icon: <Sliders className="w-3.5 h-3.5 text-amber-700 dark:text-amber-300 shrink-0" />,
    symbol: '↷ modula'
  }
};

export const ImmunologyProcessMap: React.FC<ProcessMapProps> = ({
  title,
  subtitle,
  summaryText,
  badge = 'Schema di Processo & Mappa Concettuale',
  steps,
  outcome,
  initialExpanded = true
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(initialExpanded);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);

  return (
    <div className="immunology-process-map my-6 rounded-2xl border border-blue-200 dark:border-slate-700 bg-gradient-to-b from-blue-50/70 via-slate-50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-4 sm:p-6 shadow-sm transition-all">
      {/* Header with expand/collapse toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-blue-200/80 dark:border-slate-800 pb-3.5">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 dark:text-blue-300">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse shrink-0"></span>
            <span>{badge}</span>
          </div>
          <h4 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mt-1 flex items-center gap-2 tracking-tight">
            {title}
          </h4>
          {subtitle && (
            <p className="text-xs text-slate-700 dark:text-slate-300 font-sans mt-0.5 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-2xs cursor-pointer print:hidden"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
                <span>Riduci Schema</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
                <span>Visualizza Diagramma</span>
              </>
            )}
          </button>
        </div>
      </div>

      {summaryText && (
        <div className={`mt-3.5 text-xs text-slate-800 dark:text-slate-200 italic border-l-3 border-blue-600 dark:border-blue-400 pl-3 py-1.5 bg-white/70 dark:bg-slate-800/80 rounded-r-lg shadow-2xs ${isExpanded ? 'block' : 'hidden print:block'}`}>
          {summaryText}
        </div>
      )}

      {/* Main Flowchart Content */}
      <div className={`mt-5 space-y-4 ${isExpanded ? 'block' : 'hidden print:block'}`}>
          {/* Quick Flow Breadcrumb / Concept Stream */}
          <div className="overflow-x-auto pb-2 scrollbar-thin">
            <div className="flex items-stretch min-w-[580px] gap-2 py-1">
              {steps.map((st, idx) => {
                const style = RELATION_STYLES[st.relationType] || RELATION_STYLES.activates;
                const isSelected = activeStepIndex === idx;

                return (
                  <React.Fragment key={st.id || idx}>
                    {/* Node Box */}
                    <button
                      type="button"
                      onClick={() => setActiveStepIndex(isSelected ? null : idx)}
                      className={`stream-node flex-1 min-w-[140px] p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-500 shadow-md ring-2 ring-blue-400'
                          : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-slate-750'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono font-bold mb-1">
                        <span className={isSelected ? 'text-blue-100' : 'text-slate-700 dark:text-slate-300'}>
                          Passo {idx + 1}
                        </span>
                        {st.interferingFactor && (
                          <span
                            title="Presenza di fattore inibitorio / freno"
                            className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-amber-300' : 'bg-rose-500 ring-2 ring-rose-200 dark:ring-rose-900'}`}
                          />
                        )}
                      </div>
                      <div className={`font-bold text-xs truncate ${isSelected ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                        {st.source}
                      </div>
                      <div className={`text-[11px] font-semibold mt-1 truncate ${isSelected ? 'text-blue-100' : 'text-blue-700 dark:text-blue-300'}`}>
                        ➔ {st.target}
                      </div>
                    </button>

                    {/* Connector Arrow */}
                    {idx < steps.length - 1 && (
                      <div className="flex flex-col items-center justify-center px-1 shrink-0">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border shadow-2xs ${style.bgBadge}`}>
                          {st.relation}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-500 dark:text-slate-400 mt-1" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}

              {/* Final Outcome Box in stream */}
              <div className="flex flex-col items-center justify-center px-1 shrink-0">
                <span className="text-[10px] font-mono font-bold uppercase text-slate-600 dark:text-slate-400">esito</span>
                <ArrowRight className="w-4 h-4 text-slate-500 dark:text-slate-400 mt-1" />
              </div>
              <div
                className={`flex-1 min-w-[140px] p-3 rounded-xl border text-left flex flex-col justify-center shadow-xs ${
                  outcome.isPathological
                    ? 'bg-rose-100 dark:bg-rose-950 border-rose-300 dark:border-rose-700 text-rose-950 dark:text-rose-100'
                    : 'bg-emerald-100 dark:bg-emerald-950 border-emerald-300 dark:border-emerald-700 text-emerald-950 dark:text-emerald-100'
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider font-extrabold opacity-80">
                  Effetto Finale
                </div>
                <div className="font-extrabold text-xs mt-0.5 leading-snug">
                  {outcome.label}
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Step-by-Step Flow Stack */}
          <div className="space-y-3 pt-2">
            {steps.map((step, idx) => {
              const style = RELATION_STYLES[step.relationType] || RELATION_STYLES.activates;
              const isSelected = activeStepIndex === idx;

              return (
                <div
                  key={step.id || idx}
                  className={`step-card relative p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50/90 dark:bg-slate-800 ring-2 ring-blue-400/60 shadow-sm'
                      : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-600 shadow-2xs'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    {/* Left: Process Action Chain */}
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="px-2 py-0.5 font-mono text-xs font-bold rounded-md bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600">
                          Passo {idx + 1}
                        </span>
                        <span className="step-source font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                          {step.source}
                        </span>
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-bold rounded-md border shadow-2xs ${style.bgBadge}`}>
                          {style.icon}
                          {step.relation}
                        </span>
                        <span className="step-target font-extrabold text-blue-700 dark:text-blue-300 text-sm sm:text-base">
                          {step.target}
                        </span>
                      </div>

                      {step.description && (
                        <p className="step-desc text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed pl-3 border-l-2 border-slate-300 dark:border-slate-600 mt-1.5 font-serif-body">
                          {step.description}
                        </p>
                      )}

                      {/* Molecular Actors */}
                      {step.molecularActors && step.molecularActors.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs">
                          <span className="font-bold text-slate-700 dark:text-slate-300">Molecole chiave:</span>
                          {step.molecularActors.map((mol, mIdx) => (
                            <span
                              key={mIdx}
                              className="px-2 py-0.5 rounded-md font-mono text-[11px] font-semibold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-600"
                            >
                              {mol}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right: Interfering / Inhibiting Counterpart */}
                    {step.interferingFactor && (
                      <div className="interfering-box lg:w-80 p-3.5 rounded-xl border border-rose-300 dark:border-rose-700 bg-rose-50 dark:bg-rose-950/70 text-xs space-y-1.5 shadow-2xs shrink-0">
                        <div className="flex items-center gap-1.5 text-rose-800 dark:text-rose-200 font-bold text-xs uppercase tracking-wide">
                          <ShieldAlert className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
                          <span>Fattore Interferente / Freno</span>
                        </div>
                        <div className="interfering-title font-extrabold text-slate-900 dark:text-white text-xs sm:text-sm">
                          {step.interferingFactor.factor}
                        </div>
                        <p className="interfering-action text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-serif-body">
                          {step.interferingFactor.action}
                        </p>
                        {step.interferingFactor.clinicalEffect && (
                          <div className="interfering-effect text-[11px] font-mono text-rose-800 dark:text-rose-200 font-bold pt-1 border-t border-rose-200 dark:border-rose-800/80">
                            Effetto Clinico: {step.interferingFactor.clinicalEffect}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Outcome Banner */}
          <div
            className={`p-4 rounded-xl border flex items-start gap-3.5 shadow-xs ${
              outcome.isPathological
                ? 'bg-rose-100 dark:bg-rose-950 border-rose-300 dark:border-rose-700 text-rose-950 dark:text-rose-100'
                : 'bg-emerald-100 dark:bg-emerald-950 border-emerald-300 dark:border-emerald-700 text-emerald-950 dark:text-emerald-100'
            }`}
          >
            {outcome.isPathological ? (
              <XCircle className="w-5 h-5 text-rose-700 dark:text-rose-300 mt-0.5 shrink-0" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-emerald-700 dark:text-emerald-300 mt-0.5 shrink-0" />
            )}
            <div className="space-y-1">
              <div className="text-xs font-extrabold uppercase tracking-wide">
                Esito Biologico Finale: {outcome.label}
              </div>
              <p className="text-xs sm:text-sm font-medium leading-relaxed font-serif-body opacity-95">
                {outcome.description}
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};
