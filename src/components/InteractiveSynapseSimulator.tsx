import React, { useState } from 'react';
import {
  Shield,
  Zap,
  Activity,
  Layers,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Pill,
  Award,
  RefreshCw,
  Info,
  Sliders,
  ChevronRight,
  Flame,
  Lock,
  Unlock
} from 'lucide-react';

type ActivationMode = 'signal1_only' | 'full_activation' | 'ctla4_checkpoint' | 'pd1_exhaustion';

export const InteractiveSynapseSimulator: React.FC = () => {
  const [mode, setMode] = useState<ActivationMode>('full_activation');
  const [drugCsA, setDrugCsA] = useState<boolean>(false);
  const [drugAntiCTLA4, setDrugAntiCTLA4] = useState<boolean>(false);
  const [drugAntiPD1, setDrugAntiPD1] = useState<boolean>(false);
  const [highlightZone, setHighlightZone] = useState<'all' | 'csmac' | 'psmac' | 'dsmac'>('all');

  // Compute molecular state
  let zap70Activity = 0;
  let calciumFlux = 0;
  let nfatTranslocation = 0;
  let il2Production = 0;
  let tCellOutcome = '';
  let outcomeColor = '';
  let outcomeBadge = '';

  if (mode === 'signal1_only') {
    zap70Activity = 40;
    calciumFlux = 35;
    nfatTranslocation = 30;
    il2Production = 5;
    tCellOutcome = 'Anergia Clonale Irreversibile (Tolleranza Periferica). Il linfocita non prolifera e diventa refrattario.';
    outcomeColor = 'border-amber-500 bg-amber-50 text-amber-900';
    outcomeBadge = 'ANERGIA CLONALE';
  } else if (mode === 'full_activation') {
    if (drugCsA) {
      zap70Activity = 85;
      calciumFlux = 90;
      nfatTranslocation = 5; // blocked by Calcineurin inhibition
      il2Production = 0;
      tCellOutcome = 'Blocco Farmacologico da Calcineurina-Inibitori (Ciclosporina A / Tacrolimus): Calcio elevato ma NFAT fosforilato inattivo nel citoplasma. Produzione di IL-2 AZZERATA, mancato rigetto del trapianto.';
      outcomeColor = 'border-blue-500 bg-blue-50 text-blue-900';
      outcomeBadge = 'IMMUNOSOPPRESSIONE FARMACOLOGICA (CsA)';
    } else {
      zap70Activity = 95;
      calciumFlux = 95;
      nfatTranslocation = 95;
      il2Production = 98;
      tCellOutcome = 'Attivazione Ottimale Piena: Espressione catena α (CD25) del recettore IL-2R ad altissima affinità, autocrinia sostenuta ed espansione clonale vigorosa!';
      outcomeColor = 'border-emerald-500 bg-emerald-50 text-emerald-950';
      outcomeBadge = 'ESPANSIONE CLONALE MASSIMA';
    }
  } else if (mode === 'ctla4_checkpoint') {
    if (drugAntiCTLA4) {
      zap70Activity = 90;
      calciumFlux = 88;
      nfatTranslocation = 85;
      il2Production = 88;
      tCellOutcome = 'Sblocco dei Checkpoint con Anti-CTLA-4 (Ipilimumab): CTLA-4 viene neutralizzato; B7 si riconnette a CD28 con rilascio del freno immunitario. Attivazione clonale ripristinata e deplezione di Treg intratumorali!';
      outcomeColor = 'border-purple-500 bg-purple-50 text-purple-950';
      outcomeBadge = 'CHECKPOINT BLOCKADE (Ipilimumab)';
    } else {
      zap70Activity = 20;
      calciumFlux = 15;
      nfatTranslocation = 10;
      il2Production = 5;
      tCellOutcome = 'Fisiologico Spegnimento Tardivo da CTLA-4 (CD152): CTLA-4 lega B7-1/B7-2 con affinità 20-100x superiore rispetto a CD28, rimuovendo B7 tramite trans-endocitosi e reclutando fosfatasi SHP-1/PP2A.';
      outcomeColor = 'border-red-500 bg-red-50 text-red-950';
      outcomeBadge = 'INIBIZIONE DA CHECKPOINT (CTLA-4)';
    }
  } else if (mode === 'pd1_exhaustion') {
    if (drugAntiPD1) {
      zap70Activity = 85;
      calciumFlux = 80;
      nfatTranslocation = 82;
      il2Production = 80;
      tCellOutcome = 'Immunoterapia con Anti-PD-1 / Anti-PD-L1 (Nivolumab / Pembrolizumab): Ripristino della funzione citotossica nei linfociti T infiltranti il tumore (TILs), regressione neoplastica!';
      outcomeColor = 'border-cyan-500 bg-cyan-50 text-cyan-950';
      outcomeBadge = 'RIVITALIZZAZIONE TIL (Anti-PD-1)';
    } else {
      zap70Activity = 15;
      calciumFlux = 10;
      nfatTranslocation = 8;
      il2Production = 2;
      tCellOutcome = 'Esaurimento Linfocitario ("T-Cell Exhaustion"): PD-1 su linfociti CD8+ lega PD-L1 tumorale. Reclutamento di fosfatasi SHP-2 che defosforila ZAP-70 e la catena CD3ζ, bloccando la lisi del tumore.';
      outcomeColor = 'border-slate-500 bg-slate-100 text-slate-800';
      outcomeBadge = 'ESAURIMENTO LINFOCITARIO (Exhaustion)';
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-8">
      {/* Top Banner */}
      <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-1">
            <Activity className="w-4 h-4" />
            <span>Simulatore Dinamico di Laboratorio Cellulare</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            La Sinapsi Immunologica (SMAC) & I Checkpoint Inibitori
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Simula l’interfaccia molecolare tra la Cellula Dendritica (APC) e il Linfocita T, osservando in tempo reale l’impatto dei 3 segnali, dei checkpoint negativi (CTLA-4, PD-1) e dei farmaci biologici.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => {
              setMode('full_activation');
              setDrugCsA(false);
              setDrugAntiCTLA4(false);
              setDrugAntiPD1(false);
              setHighlightZone('all');
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-colors border border-slate-700"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Parametri</span>
          </button>
        </div>
      </div>

      {/* Control Rail */}
      <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 space-y-4">
        <div>
          <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
            1. Seleziona lo Scenario Fisiopatologico:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            <button
              onClick={() => setMode('signal1_only')}
              className={`p-3 rounded-xl text-left border transition-all ${
                mode === 'signal1_only'
                  ? 'bg-amber-500 text-white border-amber-600 shadow-xs font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 text-xs'
              }`}
            >
              <div className="font-bold flex items-center justify-between">
                <span>Solo Segnale 1</span>
                {mode === 'signal1_only' && <CheckCircle2 className="w-4 h-4 text-white" />}
              </div>
              <div className={`text-xs mt-1 ${mode === 'signal1_only' ? 'text-amber-100' : 'text-slate-500'}`}>
                TCR:pMHC senza B7-CD28 → Anergia clonale
              </div>
            </button>

            <button
              onClick={() => setMode('full_activation')}
              className={`p-3 rounded-xl text-left border transition-all ${
                mode === 'full_activation'
                  ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 text-xs'
              }`}
            >
              <div className="font-bold flex items-center justify-between">
                <span>Segnali 1 + 2 (Piena)</span>
                {mode === 'full_activation' && <CheckCircle2 className="w-4 h-4 text-white" />}
              </div>
              <div className={`text-xs mt-1 ${mode === 'full_activation' ? 'text-emerald-100' : 'text-slate-500'}`}>
                TCR + CD28:B7 → Autocrinia IL-2 & CD25
              </div>
            </button>

            <button
              onClick={() => setMode('ctla4_checkpoint')}
              className={`p-3 rounded-xl text-left border transition-all ${
                mode === 'ctla4_checkpoint'
                  ? 'bg-purple-700 text-white border-purple-800 shadow-xs font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 text-xs'
              }`}
            >
              <div className="font-bold flex items-center justify-between">
                <span>Checkpoint CTLA-4</span>
                {mode === 'ctla4_checkpoint' && <CheckCircle2 className="w-4 h-4 text-white" />}
              </div>
              <div className={`text-xs mt-1 ${mode === 'ctla4_checkpoint' ? 'text-purple-100' : 'text-slate-500'}`}>
                CTLA-4 (alta affinità) spiazza CD28
              </div>
            </button>

            <button
              onClick={() => setMode('pd1_exhaustion')}
              className={`p-3 rounded-xl text-left border transition-all ${
                mode === 'pd1_exhaustion'
                  ? 'bg-slate-800 text-white border-slate-900 shadow-xs font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 text-xs'
              }`}
            >
              <div className="font-bold flex items-center justify-between">
                <span>Asse PD-1 / PD-L1</span>
                {mode === 'pd1_exhaustion' && <CheckCircle2 className="w-4 h-4 text-white" />}
              </div>
              <div className={`text-xs mt-1 ${mode === 'pd1_exhaustion' ? 'text-slate-300' : 'text-slate-500'}`}>
                Inibizione periferica & T-cell exhaustion
              </div>
            </button>
          </div>
        </div>

        {/* Drug intervention toggles */}
        <div>
          <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
            2. Intervento Farmacologico Terapeutico:
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {mode === 'full_activation' && (
              <button
                onClick={() => setDrugCsA(!drugCsA)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all border ${
                  drugCsA
                    ? 'bg-blue-600 text-white border-blue-700 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
              >
                <Pill className="w-3.5 h-3.5" />
                <span>{drugCsA ? 'Rimuovi Ciclosporina A' : 'Somministra Ciclosporina A / Tacrolimus'}</span>
              </button>
            )}

            {mode === 'ctla4_checkpoint' && (
              <button
                onClick={() => setDrugAntiCTLA4(!drugAntiCTLA4)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all border ${
                  drugAntiCTLA4
                    ? 'bg-purple-600 text-white border-purple-700 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>{drugAntiCTLA4 ? 'Rimuovi Anti-CTLA-4' : 'Somministra Anti-CTLA-4 (Ipilimumab)'}</span>
              </button>
            )}

            {mode === 'pd1_exhaustion' && (
              <button
                onClick={() => setDrugAntiPD1(!drugAntiPD1)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all border ${
                  drugAntiPD1
                    ? 'bg-cyan-600 text-white border-cyan-700 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>{drugAntiPD1 ? 'Rimuovi Anti-PD-1' : 'Somministra Anti-PD-1 (Nivolumab / Pembrolizumab)'}</span>
              </button>
            )}

            {mode === 'signal1_only' && (
              <span className="text-xs text-amber-700 bg-amber-100/70 border border-amber-300 px-2.5 py-1 rounded-md">
                Nessuna costimolazione: la cellula è refrattaria (anergica). Nessun farmaco necessario per bloccarla.
              </span>
            )}

            {/* Filter SMAC zone */}
            <div className="ml-auto flex items-center gap-1 text-xs">
              <span className="text-slate-500 font-mono">Zona SMAC:</span>
              <button
                onClick={() => setHighlightZone('all')}
                className={`px-2 py-0.5 rounded text-xs ${highlightZone === 'all' ? 'bg-slate-900 text-white font-bold' : 'bg-slate-200 text-slate-700'}`}
              >
                Tutte
              </button>
              <button
                onClick={() => setHighlightZone('csmac')}
                className={`px-2 py-0.5 rounded text-xs ${highlightZone === 'csmac' ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-200 text-slate-700'}`}
              >
                cSMAC
              </button>
              <button
                onClick={() => setHighlightZone('psmac')}
                className={`px-2 py-0.5 rounded text-xs ${highlightZone === 'psmac' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-200 text-slate-700'}`}
              >
                pSMAC
              </button>
              <button
                onClick={() => setHighlightZone('dsmac')}
                className={`px-2 py-0.5 rounded text-xs ${highlightZone === 'dsmac' ? 'bg-amber-600 text-white font-bold' : 'bg-slate-200 text-slate-700'}`}
              >
                dSMAC
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Visual Synapse Canvas */}
      <div className="p-5 sm:p-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          {/* Top: Dendritic Cell (APC) */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-4 text-center relative overflow-hidden">
            <div className="absolute top-2 left-3 text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
              Membrana Cellula Dendritica (APC Professionale Matura)
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              {/* MHC-peptide complex */}
              <div
                className={`p-2.5 rounded-lg border text-center transition-all ${
                  highlightZone === 'csmac' || highlightZone === 'all'
                    ? 'border-indigo-400 bg-indigo-950/80 ring-2 ring-indigo-500/50'
                    : 'border-slate-700 bg-slate-800/50 opacity-40'
                }`}
              >
                <div className="text-xs font-mono font-bold text-indigo-300">Complesso MHC:peptide</div>
                <div className="text-[11px] text-slate-300">Tasca con peptide 8-10 o 12-24 aa</div>
                <span className="inline-block mt-1 text-[10px] font-mono bg-indigo-800 px-1.5 py-0.5 rounded text-indigo-200">
                  Segnale 1 (Specificità)
                </span>
              </div>

              {/* B7-1 / B7-2 */}
              <div
                className={`p-2.5 rounded-lg border text-center transition-all ${
                  mode === 'signal1_only'
                    ? 'border-dashed border-red-500/60 bg-red-950/30 opacity-30 line-through'
                    : highlightZone === 'csmac' || highlightZone === 'all'
                    ? 'border-emerald-400 bg-emerald-950/80 ring-2 ring-emerald-500/50'
                    : 'border-slate-700 bg-slate-800/50 opacity-40'
                }`}
              >
                <div className="text-xs font-mono font-bold text-emerald-300">B7-1 (CD80) / B7-2 (CD86)</div>
                <div className="text-[11px] text-slate-300">
                  {mode === 'signal1_only' ? 'Assenti / Non costimolanti' : 'Iper-espressi da DC matura'}
                </div>
                <span className="inline-block mt-1 text-[10px] font-mono bg-emerald-800 px-1.5 py-0.5 rounded text-emerald-200">
                  Segnale 2 (Costimolazione)
                </span>
              </div>

              {/* ICAM-1 */}
              <div
                className={`p-2.5 rounded-lg border text-center transition-all ${
                  highlightZone === 'psmac' || highlightZone === 'all'
                    ? 'border-teal-400 bg-teal-950/80 ring-2 ring-teal-500/50'
                    : 'border-slate-700 bg-slate-800/50 opacity-40'
                }`}
              >
                <div className="text-xs font-mono font-bold text-teal-300">ICAM-1 (CD54)</div>
                <div className="text-[11px] text-slate-300">Ligando per integrina LFA-1</div>
                <span className="inline-block mt-1 text-[10px] font-mono bg-teal-800 px-1.5 py-0.5 rounded text-teal-200">
                  Adesione pSMAC
                </span>
              </div>

              {/* PD-L1 / PD-L2 */}
              {mode === 'pd1_exhaustion' && (
                <div className="p-2.5 rounded-lg border border-cyan-400 bg-cyan-950/80 ring-2 ring-cyan-500/50 text-center animate-pulse">
                  <div className="text-xs font-mono font-bold text-cyan-300">PD-L1 (CD274) / PD-L2</div>
                  <div className="text-[11px] text-slate-300">Ligando inibitorio su cellule bersaglio/tumore</div>
                  <span className="inline-block mt-1 text-[10px] font-mono bg-cyan-800 px-1.5 py-0.5 rounded text-cyan-200">
                    Freno Tissutale
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Middle: Synaptic Cleft (15 nm distance) */}
          <div className="my-3 py-2 px-4 rounded-lg bg-slate-950/80 border border-dashed border-slate-700 flex flex-col items-center justify-center relative">
            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
              <span>Spazio Sinaptico (~15 nm tra membrane plasmatiche)</span>
              <span className="text-slate-600">·</span>
              <span className="text-indigo-400 font-bold">Concentric rings SMAC</span>
            </div>

            <div className="w-full flex items-center justify-around py-1 text-xs">
              <div className="flex flex-col items-center">
                <span className="text-xs text-indigo-400">↓↓ TCR : pMHC ↓↓</span>
                <span className="text-[10px] text-slate-500 font-mono">Affinità micromolare (~1-100 μM)</span>
              </div>

              {mode !== 'signal1_only' && (
                <div className="flex flex-col items-center">
                  {mode === 'ctla4_checkpoint' && !drugAntiCTLA4 ? (
                    <span className="text-xs text-red-400 font-bold animate-pulse">
                      ↓↓ CTLA-4 : B7-1/B7-2 (Kd ~0.2 nM) Spiazza CD28! ↓↓
                    </span>
                  ) : (
                    <span className="text-xs text-emerald-400">
                      ↓↓ B7-1/2 : CD28 (Kd ~4 μM) Costimolazione ↓↓
                    </span>
                  )}
                  <span className="text-[10px] text-slate-500 font-mono">
                    {mode === 'ctla4_checkpoint' && !drugAntiCTLA4 ? 'Affinità 20-100x superiore' : 'Segnale di sopravvivenza'}
                  </span>
                </div>
              )}

              <div className="flex flex-col items-center">
                <span className="text-xs text-teal-400">↓↓ LFA-1 : ICAM-1 ↓↓</span>
                <span className="text-[10px] text-slate-500 font-mono">Inside-out high affinity</span>
              </div>
            </div>
          </div>

          {/* Bottom: T Lymphocyte Membrane & Intracellular Signaling */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-4 text-center relative overflow-hidden">
            <div className="absolute top-2 left-3 text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">
              Membrana & Citosol del Linfocita T
            </div>

            {/* Receptor row */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              {/* TCR / CD3 complex */}
              <div
                className={`p-2.5 rounded-lg border text-center transition-all ${
                  highlightZone === 'csmac' || highlightZone === 'all'
                    ? 'border-indigo-400 bg-indigo-950/80'
                    : 'border-slate-700 bg-slate-800/50 opacity-40'
                }`}
              >
                <div className="text-xs font-mono font-bold text-indigo-300">TCR αβ + CD3 (γε, δε, ζζ)</div>
                <div className="text-[11px] text-slate-300">10 Motivi ITAM citoplasmatici</div>
                <span className="inline-block mt-1 text-[10px] font-mono bg-indigo-900 px-1.5 py-0.5 rounded text-indigo-200">
                  Lck & ZAP-70 reclutati
                </span>
              </div>

              {/* CD28 or CTLA-4 */}
              <div
                className={`p-2.5 rounded-lg border text-center transition-all ${
                  mode === 'signal1_only'
                    ? 'border-slate-700 bg-slate-900/40 text-slate-500'
                    : mode === 'ctla4_checkpoint' && !drugAntiCTLA4
                    ? 'border-purple-400 bg-purple-950/90 ring-2 ring-purple-500/60'
                    : highlightZone === 'csmac' || highlightZone === 'all'
                    ? 'border-emerald-400 bg-emerald-950/80 ring-2 ring-emerald-500/50'
                    : 'border-slate-700 bg-slate-800/50 opacity-40'
                }`}
              >
                {mode === 'ctla4_checkpoint' && !drugAntiCTLA4 ? (
                  <>
                    <div className="text-xs font-mono font-bold text-purple-300 flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3 text-red-400" />
                      <span>CTLA-4 (CD152) Attivo</span>
                    </div>
                    <div className="text-[11px] text-purple-200">Motivi ITIM reclutano SHP-1 & PP2A</div>
                    <span className="inline-block mt-1 text-[10px] font-mono bg-purple-900 px-1.5 py-0.5 rounded text-purple-200">
                      Freno Omeostatico
                    </span>
                  </>
                ) : (
                  <>
                    <div className="text-xs font-mono font-bold text-emerald-300">CD28 Costitutivo</div>
                    <div className="text-[11px] text-slate-300">Attiva PI3K / Akt & stabilizza mRNA IL-2</div>
                    <span className="inline-block mt-1 text-[10px] font-mono bg-emerald-900 px-1.5 py-0.5 rounded text-emerald-200">
                      Bcl-xL Pro-survival
                    </span>
                  </>
                )}
              </div>

              {/* LFA-1 */}
              <div
                className={`p-2.5 rounded-lg border text-center transition-all ${
                  highlightZone === 'psmac' || highlightZone === 'all'
                    ? 'border-teal-400 bg-teal-950/80'
                    : 'border-slate-700 bg-slate-800/50 opacity-40'
                }`}
              >
                <div className="text-xs font-mono font-bold text-teal-300">Integrina LFA-1 (αLβ2 / CD11a:CD18)</div>
                <div className="text-[11px] text-slate-300">Transizione conformazionale ad alta affinità</div>
                <span className="inline-block mt-1 text-[10px] font-mono bg-teal-900 px-1.5 py-0.5 rounded text-teal-200">
                  Inside-Out Signaling
                </span>
              </div>

              {/* PD-1 */}
              {mode === 'pd1_exhaustion' && (
                <div className="p-2.5 rounded-lg border border-cyan-400 bg-cyan-950/90 text-center">
                  <div className="text-xs font-mono font-bold text-cyan-300">PD-1 (CD279)</div>
                  <div className="text-[11px] text-slate-300">Motivo ITSM recluta SHP-2</div>
                  <span className="inline-block mt-1 text-[10px] font-mono bg-cyan-900 px-1.5 py-0.5 rounded text-cyan-200">
                    {drugAntiPD1 ? 'Bloccato da Nivolumab' : 'Defosforila CD3 & ZAP-70'}
                  </span>
                </div>
              )}
            </div>

            {/* Intracellular Cascade Pathways */}
            <div className="mt-5 pt-4 border-t border-slate-700/80 grid grid-cols-1 md:grid-cols-3 gap-3 text-left">
              {/* Via 1: PLC-gamma / Calcio / Calcineurina / NFAT */}
              <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-700">
                <div className="text-xs font-mono font-bold text-indigo-300 mb-1 flex items-center justify-between">
                  <span>1. Via del Calcio / NFAT</span>
                  {drugCsA ? (
                    <span className="text-[10px] text-red-400 bg-red-950/80 px-1.5 py-0.2 rounded border border-red-700">
                      CsA Blocca
                    </span>
                  ) : null}
                </div>
                <div className="text-[11px] text-slate-300 leading-snug">
                  PLC-γ1 → IP3 → Rilascio Ca²⁺ ER + Canali CRAC (Orai1) → Calmodulina → <strong>Calcineurina</strong> defosforila <strong>NFAT</strong> → Traslocazione nucleare per gene IL-2.
                </div>
              </div>

              {/* Via 2: DAG / PKC-theta / NF-kB */}
              <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-700">
                <div className="text-xs font-mono font-bold text-amber-300 mb-1">
                  <span>2. Via del DAG / NF-κB</span>
                </div>
                <div className="text-[11px] text-slate-300 leading-snug">
                  Diacilglicerolo (DAG) attiva la <strong>PKC-θ</strong> → Complesso CARMA1/BCL10/MALT1 (CBM) → Fosforilazione di IκB → Rilascio ed ingresso nucleare del dimero <strong>NF-κB</strong>.
                </div>
              </div>

              {/* Via 3: Ras / MAP-chinasi / AP-1 */}
              <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-700">
                <div className="text-xs font-mono font-bold text-emerald-300 mb-1">
                  <span>3. Via Ras-MAPK / AP-1</span>
                </div>
                <div className="text-[11px] text-slate-300 leading-snug">
                  Ras-GRP attivato da DAG → Cascata Raf-MEK-ERK → Fosforilazione di c-Fos e sintesi di c-Jun → Assemblaggio dell’omodimero/eterodimero trascrizionale <strong>AP-1</strong>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Dynamic Gauge / Outcome Section */}
      <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
          {/* Gauge 1: ZAP-70 */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-1">
              <span>Attività ZAP-70 & ITAM</span>
              <span className="font-bold text-slate-800">{zap70Activity}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div
                className={`h-2.5 transition-all duration-500 ${
                  zap70Activity > 70 ? 'bg-indigo-600' : zap70Activity > 30 ? 'bg-amber-500' : 'bg-slate-400'
                }`}
                style={{ width: `${zap70Activity}%` }}
              />
            </div>
          </div>

          {/* Gauge 2: Calcium Flux */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-1">
              <span>Flusso Calcio Citoplasmatico</span>
              <span className="font-bold text-slate-800">{calciumFlux}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div
                className={`h-2.5 transition-all duration-500 ${
                  calciumFlux > 70 ? 'bg-cyan-600' : calciumFlux > 30 ? 'bg-amber-500' : 'bg-slate-400'
                }`}
                style={{ width: `${calciumFlux}%` }}
              />
            </div>
          </div>

          {/* Gauge 3: NFAT nuclear */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-1">
              <span>NFAT Nucleare Attivo</span>
              <span className="font-bold text-slate-800">{nfatTranslocation}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div
                className={`h-2.5 transition-all duration-500 ${
                  nfatTranslocation > 70 ? 'bg-emerald-600' : nfatTranslocation > 20 ? 'bg-amber-500' : 'bg-rose-500'
                }`}
                style={{ width: `${nfatTranslocation}%` }}
              />
            </div>
          </div>

          {/* Gauge 4: IL-2 production */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-1">
              <span>Trascrizione & Secrezione IL-2</span>
              <span className="font-bold text-slate-800">{il2Production}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div
                className={`h-2.5 transition-all duration-500 ${
                  il2Production > 70 ? 'bg-emerald-600' : il2Production > 10 ? 'bg-amber-500' : 'bg-slate-400'
                }`}
                style={{ width: `${il2Production}%` }}
              />
            </div>
          </div>
        </div>

        {/* Clinical / Biological Outcome Callout */}
        <div className={`p-4 rounded-xl border ${outcomeColor}`}>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/70 shadow-xs border border-current">
              {outcomeBadge}
            </span>
            <span className="text-xs font-semibold">Esito Fisiopatologico del Clone T:</span>
          </div>
          <p className="text-xs sm:text-sm font-medium leading-relaxed">
            {tCellOutcome}
          </p>
        </div>
      </div>
    </div>
  );
};
