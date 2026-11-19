import React, { useState } from 'react';
import { Shield, Sparkles, AlertCircle, CheckCircle2, RotateCcw, ArrowRight, Dna, Layers, Zap } from 'lucide-react';

type MhcType = 'class1' | 'class2';
type PeptideTest = 'optimal' | 'tooLong' | 'noAnchor';

export const InteractiveMhcPocketSimulator: React.FC = () => {
  const [selectedMhc, setSelectedMhc] = useState<MhcType>('class1');
  const [testedPeptide, setTestedPeptide] = useState<PeptideTest>('optimal');
  const [showCoreceptor, setShowCoreceptor] = useState<boolean>(true);

  // Peptide details based on selection
  const isClass1 = selectedMhc === 'class1';

  const getBindingResult = () => {
    if (isClass1) {
      if (testedPeptide === 'optimal') {
        return {
          status: 'success',
          title: 'Legame Stabile ed Espressione di Membrana',
          message: 'Il peptide nonamero (9 aa) alloggia perfettamente nella tasca chiusa: i residui àncora P2 (alifatico) e P9 (aromatico/idrofobico) si inseriscono nelle tasche B ed F. Il centro (P4-P6) si inarca verso l’esterno per il riconoscimento da parte del TCR!',
          tcrInteraction: 'Riconoscimento TCR CD8+ attivo',
          membraneStability: 'Stabile sulla membrana per ore'
        };
      } else if (testedPeptide === 'tooLong') {
        return {
          status: 'error',
          title: 'Fallimento del Legame: Ingombro Sterico',
          message: 'Le estremità della tasca di MHC-I sono rigidamente chiuse dai domini α1 e α2. Un peptide lungo (15 aa) non può alloggiare all’interno senza collidere stericamente con le pareti terminali della fessura.',
          tcrInteraction: 'Nessun legame / Complesso assente',
          membraneStability: 'Instabile: MHC-I privo di peptide viene trattenuto nel RE o degradato'
        };
      } else {
        return {
          status: 'error',
          title: 'Fallimento del Legame: Mancanza Residui Àncora',
          message: 'Il peptide ha lunghezza idonea (9 aa) ma mancano gli aminoacidi idrofobici/aromatici complementari alle tasche di ancoraggio. La costante di dissociazione è troppo elevata e il peptide si dissocia immediatamente.',
          tcrInteraction: 'Nessuna presentazione al TCR',
          membraneStability: 'Dissociazione rapida: internalizzazione e digestione lisosomiale'
        };
      }
    } else {
      // Class II
      if (testedPeptide === 'optimal') {
        return {
          status: 'success',
          title: 'Legame Stabile con Estremità Sporgenti',
          message: 'La tasca aperta formata da α1 e β1 accoglie il peptide di 15 aa. I residui àncora interni (P1, P4, P6, P9) si incastrano nelle tasche chimiche del pavimento, mentre le estremità N- e C-terminali sporgono liberamente oltre i bordi.',
          tcrInteraction: 'Riconoscimento TCR CD4+ attivo',
          membraneStability: 'Complesso trimero stabile sulla membrana dell’APC'
        };
      } else if (testedPeptide === 'tooLong') {
        return {
          status: 'success',
          title: 'Legame Permissivo Valido (Sporgenza Estesa)',
          message: 'Grazie alla geometria aperta a entrambi i lati, la tasca di MHC-II può legare peptidi fino a 25-30 aminoacidi prima del trimming proteolitico! Le porzioni eccedenti sporgono oltre le estremità senza impedire l’ancoraggio del core centrale.',
          tcrInteraction: 'Presentabile al TCR (dopo trimming enzimatico a 13-18 aa)',
          membraneStability: 'Stabile sulla membrana'
        };
      } else {
        return {
          status: 'error',
          title: 'Fallimento del Legame: Mancanza di Motivi Àncora',
          message: 'In assenza dei residui conservati che ancorano il peptide alle tasche interne della catena β1, il peptide non raggiunge l’affinità necessaria per rimpiazzare il frammento CLIP della catena invariante.',
          tcrInteraction: 'Nessuna attivazione del T helper',
          membraneStability: 'Degradazione endosomiale'
        };
      }
    }
  };

  const result = getBindingResult();

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-blue-500/20 text-blue-400 border border-blue-500/30">
              Laboratorio Molecolare 3D
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Geometria della Tasca Peptidica & Docking Corecettori
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white mt-1">
            Simulatore di Tasca di Legame: MHC-I vs MHC-II
          </h3>
        </div>

        {/* MHC Class Selector */}
        <div className="flex rounded-lg bg-slate-800/90 p-1 border border-slate-700/60 self-start sm:self-auto">
          <button
            onClick={() => {
              setSelectedMhc('class1');
              setTestedPeptide('optimal');
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
              isClass1
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            MHC Classe I (8-10 aa)
          </button>
          <button
            onClick={() => {
              setSelectedMhc('class2');
              setTestedPeptide('optimal');
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
              !isClass1
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            MHC Classe II (13-18 aa)
          </button>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Interactive Pocket Visualizer (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950/80 rounded-xl p-5 border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-mono text-slate-400">
              {isClass1 ? 'MHC-I: Catena α (α1, α2, α3) + β2M' : 'MHC-II: Eterodimero Catena α (α1, α2) + Catena β (β1, β2)'}
            </div>
            <div className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
              {isClass1 ? 'Tasca Chiusa (α1+α2)' : 'Tasca Aperta (α1+β1)'}
            </div>
          </div>

          {/* Pocket Schematic Box */}
          <div className="relative py-6 px-4 bg-slate-900/90 rounded-xl border border-slate-800/80 overflow-hidden min-h-[220px] flex flex-col justify-center items-center">
            {/* Flanking Alpha-Helices */}
            <div className="w-full flex justify-between items-center px-4 mb-2 text-[10px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block"></span>
                {isClass1 ? 'α-Elica α1' : 'α-Elica α1'}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block"></span>
                {isClass1 ? 'α-Elica α2' : 'α-Elica β1'}
              </span>
            </div>

            {/* The Groove Visual Representation */}
            <div className="relative w-full max-w-md h-24 rounded-lg bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-2 border-dashed border-slate-700 flex items-center justify-center p-2 overflow-visible">
              {/* Pocket closed/open barriers */}
              {isClass1 ? (
                <>
                  <div className="absolute -left-2 top-0 bottom-0 w-4 bg-red-600/80 rounded-l flex items-center justify-center text-[9px] font-mono font-bold text-white shadow-xs">
                    STOP
                  </div>
                  <div className="absolute -right-2 top-0 bottom-0 w-4 bg-red-600/80 rounded-r flex items-center justify-center text-[9px] font-mono font-bold text-white shadow-xs">
                    STOP
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute -left-2 top-0 bottom-0 w-3 bg-emerald-500/40 rounded-l border-r border-emerald-400/50 flex items-center justify-center text-[8px] font-mono text-emerald-300">
                    APERTO
                  </div>
                  <div className="absolute -right-2 top-0 bottom-0 w-3 bg-emerald-500/40 rounded-r border-l border-emerald-400/50 flex items-center justify-center text-[8px] font-mono text-emerald-300">
                    APERTO
                  </div>
                </>
              )}

              {/* The Loaded Peptide */}
              {testedPeptide === 'optimal' && isClass1 && (
                <div className="w-full flex items-center justify-between px-2 py-1.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 rounded-md shadow-lg border border-amber-300 animate-in fade-in duration-200">
                  <span className="px-1.5 py-0.5 bg-amber-800 text-white rounded text-[10px] font-bold font-mono">
                    P1 (N-term)
                  </span>
                  <span className="px-1.5 py-0.5 bg-blue-900 text-blue-200 rounded text-[9px] font-mono font-bold">
                    P2 [Àncora]
                  </span>
                  <span className="text-[11px] font-black text-slate-950 font-mono tracking-tight animate-pulse">
                    P4-P6 (Arco verso TCR)
                  </span>
                  <span className="px-1.5 py-0.5 bg-blue-900 text-blue-200 rounded text-[9px] font-mono font-bold">
                    P9 [Àncora]
                  </span>
                </div>
              )}

              {testedPeptide === 'optimal' && !isClass1 && (
                <div className="w-[125%] -mx-[12.5%] flex items-center justify-between px-3 py-1.5 bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-600 rounded-md shadow-lg border border-emerald-300 text-slate-950 font-bold text-[10px] font-mono">
                  <span className="text-white bg-slate-950/80 px-1 rounded text-[9px]">Sporgenza N</span>
                  <span className="bg-emerald-900 text-emerald-100 px-1 rounded">P1</span>
                  <span>P4 (Àncora)</span>
                  <span>P6 (TCR)</span>
                  <span className="bg-emerald-900 text-emerald-100 px-1 rounded">P9</span>
                  <span className="text-white bg-slate-950/80 px-1 rounded text-[9px]">Sporgenza C</span>
                </div>
              )}

              {testedPeptide === 'tooLong' && isClass1 && (
                <div className="w-[130%] -mx-[15%] flex items-center justify-center p-2 bg-red-600/90 rounded border-2 border-red-400 text-white font-mono text-xs font-bold gap-2 shadow-lg">
                  <AlertCircle className="w-4 h-4 text-white shrink-0" />
                  <span>Collisione Estremità: 15 aa eccede la tasca chiusa!</span>
                </div>
              )}

              {testedPeptide === 'tooLong' && !isClass1 && (
                <div className="w-[150%] -mx-[25%] flex items-center justify-between px-3 py-1.5 bg-gradient-to-r from-teal-700 via-teal-400 to-teal-700 rounded-md shadow-lg border border-teal-200 text-slate-950 font-bold text-[9px] font-mono">
                  <span className="text-white bg-slate-950/90 px-1 rounded">Lunga Sporgenza N (8 aa)</span>
                  <span className="bg-emerald-950 text-white px-1.5 py-0.5 rounded font-black">Motivo Centrale (Core 9 aa)</span>
                  <span className="text-white bg-slate-950/90 px-1 rounded">Lunga Sporgenza C (8 aa)</span>
                </div>
              )}

              {testedPeptide === 'noAnchor' && (
                <div className="w-full flex items-center justify-center p-2 bg-slate-800/90 border border-slate-600 rounded text-slate-400 font-mono text-xs italic gap-2">
                  <RotateCcw className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                  <span>Peptide instabile: nessun residuo àncora compatibile. Si dissocia!</span>
                </div>
              )}
            </div>

            {/* Beta Sheet Floor Indicator */}
            <div className="w-full text-center mt-3 text-[10px] font-mono text-slate-400">
              <span>Pavimento a 8 filamenti Foglietto-β Antiparallelo</span>
            </div>
          </div>

          {/* Coreceptor Docking Visualization */}
          {showCoreceptor && (
            <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Shield className={`w-4 h-4 ${isClass1 ? 'text-blue-400' : 'text-emerald-400'}`} />
                <div>
                  <span className="font-bold text-white">
                    {isClass1 ? 'Docking Corecettore CD8 (Linfocita Citotossico)' : 'Docking Corecettore CD4 (Linfocita T Helper)'}
                  </span>
                  <p className="text-[11px] text-slate-400">
                    {isClass1
                      ? 'Lega specificamente il dominio non polimorfico α3 (interazione con β2M)'
                      : 'Lega contemporaneamente i domini non polimorfici α2 e β2 di MHC-II'}
                  </p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded text-[10px] font-mono font-bold ${
                isClass1 ? 'bg-blue-500/20 text-blue-300' : 'bg-emerald-500/20 text-emerald-300'
              }`}>
                {isClass1 ? 'CD8 → α3' : 'CD4 → α2+β2'}
              </span>
            </div>
          )}
        </div>

        {/* Right Column: Controls & Molecular Analysis (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {/* Peptide Variant Testing Buttons */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2.5">
            <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
              Testa Peptidi nella Tasca:
            </span>
            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={() => setTestedPeptide('optimal')}
                className={`w-full p-2.5 rounded-lg text-left text-xs font-semibold transition-all border flex items-center justify-between ${
                  testedPeptide === 'optimal'
                    ? isClass1
                      ? 'bg-blue-600/30 text-blue-200 border-blue-500/60 shadow-sm'
                      : 'bg-emerald-600/30 text-emerald-200 border-emerald-500/60 shadow-sm'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                <span>{isClass1 ? 'Peptide Ottimale (9 aa con P2/P9 idrofobici)' : 'Peptide Ottimale (15 aa con motivi interni)'}</span>
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              </button>

              <button
                onClick={() => setTestedPeptide('tooLong')}
                className={`w-full p-2.5 rounded-lg text-left text-xs font-semibold transition-all border flex items-center justify-between ${
                  testedPeptide === 'tooLong'
                    ? 'bg-amber-600/30 text-amber-200 border-amber-500/60 shadow-sm'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                <span>{isClass1 ? 'Peptide Lungo (15 aa - test collisione)' : 'Peptide Lungo (25 aa - test estremità aperte)'}</span>
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              </button>

              <button
                onClick={() => setTestedPeptide('noAnchor')}
                className={`w-full p-2.5 rounded-lg text-left text-xs font-semibold transition-all border flex items-center justify-between ${
                  testedPeptide === 'noAnchor'
                    ? 'bg-rose-600/30 text-rose-200 border-rose-500/60 shadow-sm'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                <span>Peptide senza Residui Àncora compatibili</span>
                <RotateCcw className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>
          </div>

          {/* Biological Outcome Display */}
          <div className={`p-4 rounded-xl border space-y-2 ${
            result.status === 'success'
              ? 'bg-emerald-950/40 border-emerald-800/80 text-emerald-200'
              : 'bg-rose-950/40 border-rose-800/80 text-rose-200'
          }`}>
            <div className="flex items-center gap-2 font-bold text-sm">
              {result.status === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              )}
              <span>{result.title}</span>
            </div>
            <p className="text-xs leading-relaxed opacity-90">
              {result.message}
            </p>
            <div className="pt-2 border-t border-slate-800/60 flex flex-wrap justify-between text-[11px] font-mono opacity-80 gap-2">
              <span>{result.tcrInteraction}</span>
              <span>•</span>
              <span>{result.membraneStability}</span>
            </div>
          </div>

          {/* Toggle Coreceptor Docking */}
          <div className="flex items-center justify-between px-3 py-2 bg-slate-950/50 rounded-lg border border-slate-800 text-xs">
            <span className="text-slate-400">Visualizza Docking Corecettore:</span>
            <button
              onClick={() => setShowCoreceptor(!showCoreceptor)}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                showCoreceptor
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {showCoreceptor ? 'Attivo' : 'Nascosto'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
