import React, { useState } from 'react';
import { Dna, Users, Sparkles, CheckCircle2, RotateCcw, AlertCircle, Heart, ArrowRight } from 'lucide-react';

export const InteractiveHlaInheritanceSimulator: React.FC = () => {
  // Preset Parents
  const [motherAplotype, setMotherAplotype] = useState<'A1' | 'A2'>('A1');
  const [fatherAplotype, setFatherAplotype] = useState<'B1' | 'B2'>('B1');
  const [isHomozygousTest, setIsHomozygousTest] = useState<boolean>(false);
  const [showTshirtExperiment, setShowTshirtExperiment] = useState<boolean>(false);

  // Aplotype data
  const maternalData = isHomozygousTest
    ? {
        name: 'Aplotipo Materno (Identico a Paterno)',
        class1: ['A*02:01', 'B*07:02', 'C*07:01'],
        class2Alpha: ['DRA*01:01', 'DQA1*01:02', 'DPA1*01:03'],
        class2Beta: ['DRB1*15:01', 'DQB1*06:02', 'DPB1*04:01']
      }
    : motherAplotype === 'A1'
    ? {
        name: 'Aplotipo Materno 1',
        class1: ['A*02:01', 'B*07:02', 'C*07:01'],
        class2Alpha: ['DRA*01:01', 'DQA1*01:02', 'DPA1*01:03'],
        class2Beta: ['DRB1*15:01', 'DQB1*06:02', 'DPB1*04:01']
      }
    : {
        name: 'Aplotipo Materno 2',
        class1: ['A*24:02', 'B*35:01', 'C*04:01'],
        class2Alpha: ['DRA*01:01', 'DQA1*05:01', 'DPA1*02:01'],
        class2Beta: ['DRB1*11:01', 'DQB1*03:01', 'DPB1*02:01']
      };

  const paternalData = isHomozygousTest
    ? {
        name: 'Aplotipo Paterno (Omozigosi Consanguinea)',
        class1: ['A*02:01', 'B*07:02', 'C*07:01'],
        class2Alpha: ['DRA*01:01', 'DQA1*01:02', 'DPA1*01:03'],
        class2Beta: ['DRB1*15:01', 'DQB1*06:02', 'DPB1*04:01']
      }
    : fatherAplotype === 'B1'
    ? {
        name: 'Aplotipo Paterno 1',
        class1: ['A*01:01', 'B*08:01', 'C*07:01'],
        class2Alpha: ['DRA*01:01', 'DQA1*05:01', 'DPA1*01:03'],
        class2Beta: ['DRB1*03:01', 'DQB1*02:01', 'DPB1*04:02']
      }
    : {
        name: 'Aplotipo Paterno 2',
        class1: ['A*03:01', 'B*27:05', 'C*02:02'],
        class2Alpha: ['DRA*01:01', 'DQA1*03:01', 'DPA1*01:03'],
        class2Beta: ['DRB1*04:01', 'DQB1*03:02', 'DPB1*04:01']
      };

  // Unique count calculation
  const uniqueClass1 = Array.from(new Set([...maternalData.class1, ...paternalData.class1]));
  const isFullyHeterozygous = uniqueClass1.length === 6;
  const mhc1ExpressedCount = uniqueClass1.length;
  // MHC-II can form cis (m-m, p-p) and trans (m-p, p-m) combinations for DQ and DP (DRA is monomorphic, but DRB has extra loci DRB3/4/5)
  const mhc2ExpressedCount = isHomozygousTest ? 3 : 14; // up to ~16 combinations

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-purple-500/20 text-purple-400 border border-purple-500/30">
              Genetica di Popolazione
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Poligenia, Codominanza ed Eterozigosi HLA
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white mt-1">
            Simulatore di Eredità in Aplotipo e Vantaggio dell&apos;Eterozigosi
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsHomozygousTest(!isHomozygousTest)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
              isHomozygousTest
                ? 'bg-rose-600/90 text-white border-rose-500 shadow-xs'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
            }`}
          >
            {isHomozygousTest ? 'Modello Omozigote (Inbred)' : 'Simula Omozigosi (Topi Inbred)'}
          </button>
        </div>
      </div>

      {/* Parents Aplotype Selector */}
      {!isHomozygousTest && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-pink-400 font-bold">Cromosoma 6p21 Materno:</span>
              <div className="flex gap-1">
                <button
                  onClick={() => setMotherAplotype('A1')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    motherAplotype === 'A1' ? 'bg-pink-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  Aplotipo M1
                </button>
                <button
                  onClick={() => setMotherAplotype('A2')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    motherAplotype === 'A2' ? 'bg-pink-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  Aplotipo M2
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] font-mono">
              {maternalData.class1.map((a, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-pink-950/60 text-pink-300 border border-pink-800/60">
                  {a}
                </span>
              ))}
              {maternalData.class2Beta.map((b, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/60">
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-blue-400 font-bold">Cromosoma 6p21 Paterno:</span>
              <div className="flex gap-1">
                <button
                  onClick={() => setFatherAplotype('B1')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    fatherAplotype === 'B1' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  Aplotipo P1
                </button>
                <button
                  onClick={() => setFatherAplotype('B2')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    fatherAplotype === 'B2' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  Aplotipo P2
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] font-mono">
              {paternalData.class1.map((a, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-800/60">
                  {a}
                </span>
              ))}
              {paternalData.class2Beta.map((b, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800/60">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Surface Phenotype in the Child (Offspring) */}
      <div className="p-5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <h4 className="font-bold text-white text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Fenotipo di Membrana del Figlio (Espressione Codominante)
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Nessun allele è recessivo: ogni cellula esprime simultaneamente le molecole di entrambi i genitori.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-blue-900/60 border border-blue-700/60 text-blue-200">
              <strong>{mhc1ExpressedCount}</strong> Molecole MHC-I
            </span>
            <span className="px-2.5 py-1 rounded bg-purple-900/60 border border-purple-700/60 text-purple-200">
              Fino a <strong>{mhc2ExpressedCount}</strong> Eterodimeri MHC-II
            </span>
          </div>
        </div>

        {/* Molecules Grid */}
        <div className="space-y-3">
          <div>
            <span className="text-[11px] font-mono text-slate-400 block mb-1.5 font-bold">
              Molecole MHC di Classe I espresse sulla membrana di ogni cellula nucleata:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {uniqueClass1.map((allele, idx) => {
                const isFromMother = maternalData.class1.includes(allele);
                return (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-lg border text-center font-mono text-xs ${
                      isFromMother
                        ? 'bg-pink-950/30 border-pink-700/50 text-pink-200'
                        : 'bg-blue-950/30 border-blue-700/50 text-blue-200'
                    }`}
                  >
                    <div className="text-[9px] uppercase tracking-wider opacity-75">
                      {isFromMother ? 'Materno' : 'Paterno'}
                    </div>
                    <div className="font-bold mt-0.5">{allele}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-2">
            <span className="text-[11px] font-mono text-slate-400 block mb-1.5 font-bold">
              Eterodimeri MHC di Classe II espressi sulle APC (Appaiamento in Cis e in Trans):
            </span>
            <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 text-xs text-slate-300 leading-relaxed">
              Mentre la catena α di MHC-I si associa alla sola β2M invariante, per MHC-II le catene α (materne o paterne)
              possono liberamente assemblarsi con le catene β (materne o paterne) nel reticolo endoplasmatico.
              Ad esempio, per il locus HLA-DQ: (α_mat + β_mat), (α_mat + β_pat), (α_pat + β_mat), (α_pat + β_pat).
              Questo genera fino a <strong>16 combinazioni eterodimeriche funzionali distinte</strong>!
            </div>
          </div>
        </div>
      </div>

      {/* Evolutionary Advantage Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={`p-4 rounded-xl border space-y-2 ${
          isHomozygousTest
            ? 'bg-rose-950/40 border-rose-800 text-rose-200'
            : 'bg-emerald-950/40 border-emerald-800 text-emerald-200'
        }`}>
          <div className="flex items-center gap-2 font-bold text-sm">
            {isHomozygousTest ? (
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            )}
            <span>
              {isHomozygousTest
                ? 'Svantaggio dell’Omozigosi (Rischio Epidemico)'
                : 'Vantaggio dell’Eterozigosi (Fitness Evolutiva)'}
            </span>
          </div>
          <p className="text-xs leading-relaxed opacity-90">
            {isHomozygousTest
              ? 'L’individuo omozigote presenta solo 3 molecole MHC-I e 3 MHC-II. Se un patogeno muta i propri peptidi chiave in modo da eludere quelle tre tasche, l’organismo non ha alternative e subisce un’infezione letale (come osservato nelle colonie di topi inbred).'
              : 'L’individuo eterozigote esprime 6 molecole MHC-I e fino a 16 MHC-II. Se un virus muta un epitopo per sfuggire a HLA-A*02, i suoi peptidi verranno comunque legati da HLA-A*01, HLA-B*07 o HLA-C*07. La probabilità che un virus muti simultaneamente per eludere 6 tasche diverse è statisticamente trascurabile!'}
          </p>
        </div>

        {/* Wedekind T-shirt Study Drawer */}
        <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-white text-xs flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-pink-400" />
              Selezione Sessuale & Studio "T-Shirt Sudate" (1995)
            </span>
            <button
              onClick={() => setShowTshirtExperiment(!showTshirtExperiment)}
              className="text-[10px] font-mono text-purple-400 hover:text-purple-300 underline"
            >
              {showTshirtExperiment ? 'Nascondi' : 'Dettagli Studio'}
            </button>
          </div>
          <p className="text-xs text-slate-400 leading-snug">
            Per mantenere l’eterozigosi nella popolazione, l’evoluzione ha sviluppato meccanismi comportamentali:
            le donne preferiscono l’odore di partner con alleli HLA dissimili dai propri.
          </p>
          {showTshirtExperiment && (
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300 space-y-1.5 animate-in fade-in duration-150">
              <p>
                <strong>Wedekind et al. (Proc. R. Soc. Lond. B 1995):</strong> 49 studentesse hanno valutato la piacevolezza olfattiva di 6 magliette indossate per 2 notti da studenti tipizzati HLA (3 con HLA simile, 3 con HLA dissimile).
              </p>
              <p className="text-emerald-400 font-mono text-[10px]">
                Risultato: odore giudicato significativamente più piacevole per gli HLA dissimili. Effetto invertito solo dall’assunzione di contraccettivi orali (che simulano lo stato ormonale di gravidanza).
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
