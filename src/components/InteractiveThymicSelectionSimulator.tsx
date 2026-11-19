import React, { useState } from 'react';
import { Shield, Sparkles, AlertTriangle, CheckCircle2, RotateCcw, ArrowRight, Dna, Activity, Lock, Unlock, Zap, HeartHandshake, Skull, Heart } from 'lucide-react';

export const InteractiveThymicSelectionSimulator: React.FC = () => {
  const [stage, setStage] = useState<'cortex' | 'medulla'>('cortex');
  
  // Cortex State (Positive Selection & Coreceptor Choice)
  const [cortexAffinity, setCortexAffinity] = useState<'none' | 'low' | 'high'>('low');
  const [boundMhcClass, setBoundMhcClass] = useState<'mhc1' | 'mhc2'>('mhc2');

  // Medulla State (Negative Selection & AIRE)
  const [medullaAffinity, setMedullaAffinity] = useState<'low' | 'intermediate' | 'high'>('low');
  const [aireStatus, setAireStatus] = useState<'normal' | 'mutated'>('normal');

  const handleReset = () => {
    setStage('cortex');
    setCortexAffinity('low');
    setBoundMhcClass('mhc2');
    setMedullaAffinity('low');
    setAireStatus('normal');
  };

  const getCortexOutcome = () => {
    if (cortexAffinity === 'none') {
      return {
        status: 'neglect',
        badge: 'MORTE PER NEGLIGENZA',
        title: 'Mancato Riconoscimento dell’MHC Self',
        desc: 'Oltre il 90% dei timociti doppi positivi fallisce la selezione positiva. Il TCR non è in grado di legare alcuna molecola MHC presentata dalle cTEC: non riceve segnali trofici e muore spontaneamente per apoptosi (death by neglect).',
        canProceed: false,
        color: 'rose'
      };
    }
    if (cortexAffinity === 'high') {
      return {
        status: 'early_deletion',
        badge: 'DELEZIONE PRECOCE',
        title: 'Affinità Eccessiva nella Corticale',
        desc: 'Un legame eccessivamente forte con i complessi pMHC self corticali innesca l’apoptosi da delezione clonale prima ancora di completare la maturazione.',
        canProceed: false,
        color: 'amber'
      };
    }
    return {
      status: 'selected',
      badge: 'SELEZIONE POSITIVA RIUSCITA',
      title: `Restrizione MHC Acquisita (Diventa Singolo Positivo ${boundMhcClass === 'mhc1' ? 'CD8⁺' : 'CD4⁺'})`,
      desc: `Il timocita lega a bassa affinità l’${boundMhcClass === 'mhc1' ? 'MHC-I' : 'MHC-II'}. Secondo il modello istruttivo, silenzia l’espressione del corecettore opposto e diventa ${boundMhcClass === 'mhc1' ? 'Singolo Positivo CD8⁺' : 'Singolo Positivo CD4⁺'}. Può migrare nella midollare!`,
      canProceed: true,
      color: 'emerald'
    };
  };

  const getMedullaOutcome = () => {
    if (aireStatus === 'mutated' && medullaAffinity === 'high') {
      return {
        status: 'apeced',
        badge: 'FUGA AUTOREATTIVA (APECED / APS-1)',
        title: 'Mancata Espressione del Self & Autoimmunità Sistemica',
        desc: 'Il gene AIRE è mutato: le mTEC non trascrivono gli antigeni periferici (insulina, tiroglobulina, surreni). Il timocita autoreattivo non viene eliminato, fuoriesce in circolo e aggredisce le ghiandole endocrine causando ipoparatiroidismo, morbo di Addison e candidiasi cronica da autoanticorpi anti-IL-17!',
        color: 'rose'
      };
    }

    if (medullaAffinity === 'high') {
      return {
        status: 'negative_selection',
        badge: 'SELEZIONE NEGATIVA (APOPTOSI)',
        title: 'Delezione Clonale per Alta Affinità con il Self',
        desc: 'Il timocita lega con alta affinità o avidità l’autoantigene presentato dalle mTEC (grazie ad AIRE) o dalle DC timiche. Riceve un segnale di morte cellulare programmata: viene eliminato per preservare la tolleranza centrale!',
        color: 'amber'
      };
    }

    if (medullaAffinity === 'intermediate') {
      return {
        status: 'treg',
        badge: 'DIFFERENZIAMENTO IN TREG (FoxP3⁺)',
        title: 'Generazione di Linfocita T Regolatore Naturale',
        desc: 'Un’affinità intermedia-alta per il self non causa apoptosi ma devia il timocita verso la linea dei Treg FoxP3⁺. Questa cellula migrerà in periferia per sopprimere attivamente le risposte autoimmuni.',
        color: 'purple'
      };
    }

    return {
      status: 'mature_naive',
      badge: 'LINFOCITA T MATURO NAÏVE',
      title: 'Tolleranza Centrale Superata con Successo!',
      desc: 'Il legame con il self è a bassa affinità: il timocita non è autoreattivo, è ristretto per l’MHC self e tollerante al self. Esce dal timo attraverso le venule post-capillari e va a pattugliare gli organi linfoidi secondari come linfocita T naïve maturo!',
      color: 'emerald'
    };
  };

  const cortexOutcome = getCortexOutcome();
  const medullaOutcome = getMedullaOutcome();

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-blue-500/20 text-blue-400 border border-blue-500/30">
              Laboratorio Timico Interattivo
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Restrizione MHC, Modello Istruttivo & Tolleranza AIRE
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white mt-1">
            Simulatore dei Processi di Selezione Timica: Positiva & Negativa
          </h3>
        </div>

        <button
          onClick={handleReset}
          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors self-start sm:self-auto border border-slate-700/60"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Ripristina Simulazione</span>
        </button>
      </div>

      {/* Stage Navigation */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => setStage('cortex')}
          className={`p-3 rounded-xl border text-left transition-all ${
            stage === 'cortex'
              ? 'bg-blue-950/50 border-blue-500 text-white shadow-sm'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-900'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-bold">
            <span>Fase 1: Corticale Timica (cTEC)</span>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-900 text-blue-200">
              SELEZIONE POSITIVA
            </span>
          </div>
          <p className="text-[11px] opacity-80 mt-1">
            Timociti Doppi Positivi (CD4⁺ CD8⁺). Restrizione MHC & scelta del corecettore.
          </p>
        </button>

        <button
          onClick={() => setStage('medulla')}
          disabled={!cortexOutcome.canProceed && stage === 'cortex'}
          className={`p-3 rounded-xl border text-left transition-all ${
            stage === 'medulla'
              ? 'bg-purple-950/50 border-purple-500 text-white shadow-sm'
              : cortexOutcome.canProceed
              ? 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-900'
              : 'bg-slate-950/40 border-slate-900 text-slate-600 opacity-50 cursor-not-allowed'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-bold">
            <span>Fase 2: Midollare Timica (mTEC & AIRE)</span>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-900 text-purple-200">
              SELEZIONE NEGATIVA
            </span>
          </div>
          <p className="text-[11px] opacity-80 mt-1">
            Timociti Singoli Positivi. Espressione promiscua del self periferico & eliminazione autoreattività.
          </p>
        </button>
      </div>

      {stage === 'cortex' ? (
        /* CORTICAL SIMULATOR */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 bg-slate-950/80 rounded-xl p-4 border border-slate-800 space-y-4">
            <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
              1. Interazione TCR:cTEC nella Corticale:
            </span>

            {/* Affinity Selector */}
            <div className="space-y-1.5 text-xs">
              <label className="text-slate-300 font-semibold block">
                Forza del Legame TCR con l’MHC self corticale:
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => setCortexAffinity('none')}
                  className={`w-full p-2.5 rounded-lg border text-left transition-all ${
                    cortexAffinity === 'none'
                      ? 'bg-rose-950/50 border-rose-500 text-rose-200 shadow-xs'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                  }`}
                >
                  <div className="font-bold">Affinità Nulla (Zero Legame)</div>
                  <div className="text-[10px] text-slate-400">&gt;90% dei timociti non riconosce l’MHC</div>
                </button>

                <button
                  onClick={() => setCortexAffinity('low')}
                  className={`w-full p-2.5 rounded-lg border text-left transition-all ${
                    cortexAffinity === 'low'
                      ? 'bg-emerald-950/50 border-emerald-500 text-emerald-200 shadow-xs'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                  }`}
                >
                  <div className="font-bold">Affinità Bassa / Fisiologica (Ottimale)</div>
                  <div className="text-[10px] text-slate-400">Riconoscimento debole del pMHC self</div>
                </button>

                <button
                  onClick={() => setCortexAffinity('high')}
                  className={`w-full p-2.5 rounded-lg border text-left transition-all ${
                    cortexAffinity === 'high'
                      ? 'bg-amber-950/50 border-amber-500 text-amber-200 shadow-xs'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                  }`}
                >
                  <div className="font-bold">Affinità Eccessivamente Alta</div>
                  <div className="text-[10px] text-slate-400">Attivazione anomala precoce</div>
                </button>
              </div>
            </div>

            {/* Coreceptor Choice (Instruction Model) */}
            {cortexAffinity === 'low' && (
              <div className="space-y-1.5 pt-3 border-t border-slate-800 text-xs">
                <label className="text-slate-300 font-semibold block">
                  Scelta Istruttiva del Corecettore:
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => setBoundMhcClass('mhc1')}
                    className={`p-2 rounded border text-center font-bold ${
                      boundMhcClass === 'mhc1'
                        ? 'bg-blue-600 text-white border-blue-500 shadow-xs'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    Lega MHC-I (CD8⁺)
                  </button>
                  <button
                    onClick={() => setBoundMhcClass('mhc2')}
                    className={`p-2 rounded border text-center font-bold ${
                      boundMhcClass === 'mhc2'
                        ? 'bg-purple-600 text-white border-purple-500 shadow-xs'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    Lega MHC-II (CD4⁺)
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Cortex Outcome Banner (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950/80 rounded-xl p-5 border border-slate-800 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h4 className="font-bold text-white text-sm">
                Esito della Selezione Positiva nella Corticale:
              </h4>
              <span className={`text-[9px] font-mono px-2 py-0.5 rounded font-black ${
                cortexOutcome.color === 'emerald'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                  : cortexOutcome.color === 'amber'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
                  : 'bg-rose-500/20 text-rose-300 border border-rose-400/30'
              }`}>
                {cortexOutcome.badge}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="font-bold text-sm text-white">{cortexOutcome.title}</div>
              <p className="text-xs text-slate-300 leading-relaxed font-serif-body">
                {cortexOutcome.desc}
              </p>
            </div>

            {cortexOutcome.canProceed ? (
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setStage('medulla')}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
                >
                  <span>Avanza alla Midollare (Selezione Negativa)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-800/60 text-xs text-rose-200 flex items-center gap-2">
                <Skull className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Il timocita è andato incontro ad apoptosi e viene fagocitato dai macrofagi corticali del timo.</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* MEDULLA SIMULATOR (Negative Selection & AIRE) */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 bg-slate-950/80 rounded-xl p-4 border border-slate-800 space-y-4">
            <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
              2. Tolleranza Centrale nella Midollare:
            </span>

            {/* AIRE Toggle */}
            <div className="space-y-1.5 text-xs">
              <label className="text-slate-300 font-semibold flex items-center justify-between">
                <span>Stato del Gene AIRE nelle mTEC:</span>
                <span className="text-[10px] font-mono text-purple-400">
                  {aireStatus === 'normal' ? 'AIRE Attivo' : 'Mutazione APECED'}
                </span>
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  onClick={() => setAireStatus('normal')}
                  className={`p-2 rounded border text-center font-semibold ${
                    aireStatus === 'normal'
                      ? 'bg-purple-600 text-white border-purple-500 shadow-xs'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  Fisiologico (Self Espresso)
                </button>
                <button
                  onClick={() => setAireStatus('mutated')}
                  className={`p-2 rounded border text-center font-semibold ${
                    aireStatus === 'mutated'
                      ? 'bg-rose-600 text-white border-rose-500 shadow-xs'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  Mutato (Sindrome APS-1)
                </button>
              </div>
              <p className="text-[10px] text-slate-400">
                {aireStatus === 'normal'
                  ? 'AIRE consente la trascrizione ectopica di insulina, tiroglobulina e antigeni periferici.'
                  : 'Nessuna espressione di antigeni periferici: i cloni autoreattivi sfuggono al controllo!'}
              </p>
            </div>

            {/* Medullary Affinity Selector */}
            <div className="space-y-1.5 pt-3 border-t border-slate-800 text-xs">
              <label className="text-slate-300 font-semibold block">
                Affinità del TCR per gli Autoantigeni Midollari:
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => setMedullaAffinity('low')}
                  className={`w-full p-2.5 rounded-lg border text-left transition-all ${
                    medullaAffinity === 'low'
                      ? 'bg-emerald-950/50 border-emerald-500 text-emerald-200 shadow-xs'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                  }`}
                >
                  <div className="font-bold">Affinità Bassa per il Self</div>
                  <div className="text-[10px] text-slate-400">Non riconosce gli antigeni tissutali</div>
                </button>

                <button
                  onClick={() => setMedullaAffinity('intermediate')}
                  className={`w-full p-2.5 rounded-lg border text-left transition-all ${
                    medullaAffinity === 'intermediate'
                      ? 'bg-purple-950/50 border-purple-500 text-purple-200 shadow-xs'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                  }`}
                >
                  <div className="font-bold">Affinità Intermedia-Alta</div>
                  <div className="text-[10px] text-slate-400">Deviazione verso Treg FoxP3⁺</div>
                </button>

                <button
                  onClick={() => setMedullaAffinity('high')}
                  className={`w-full p-2.5 rounded-lg border text-left transition-all ${
                    medullaAffinity === 'high'
                      ? 'bg-rose-950/50 border-rose-500 text-rose-200 shadow-xs'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                  }`}
                >
                  <div className="font-bold">Affinità Elevata / Autoreattivo</div>
                  <div className="text-[10px] text-slate-400">Bersaglio della selezione negativa</div>
                </button>
              </div>
            </div>
          </div>

          {/* Medulla Outcome Banner (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950/80 rounded-xl p-5 border border-slate-800 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h4 className="font-bold text-white text-sm">
                Esito della Selezione Negativa nella Midollare:
              </h4>
              <span className={`text-[9px] font-mono px-2 py-0.5 rounded font-black ${
                medullaOutcome.color === 'emerald'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                  : medullaOutcome.color === 'purple'
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
                  : medullaOutcome.color === 'amber'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
                  : 'bg-rose-500/20 text-rose-300 border border-rose-400/30'
              }`}>
                {medullaOutcome.badge}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="font-bold text-sm text-white">{medullaOutcome.title}</div>
              <p className="text-xs text-slate-300 leading-relaxed font-serif-body">
                {medullaOutcome.desc}
              </p>
            </div>

            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Stato Fenotipico Finale:</span>
              <span className="font-mono font-bold text-white">
                {medullaOutcome.status === 'mature_naive'
                  ? `Linfocita T Naïve ${boundMhcClass === 'mhc1' ? 'CD8⁺' : 'CD4⁺'} Circolante`
                  : medullaOutcome.status === 'treg'
                  ? 'Linfocita T Regolatore CD4⁺ CD25⁺ FoxP3⁺'
                  : medullaOutcome.status === 'apeced'
                  ? 'Clone Autoreattivo Patogeno (APECED)'
                  : 'Delezione Clonale Timica (Morte)'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
