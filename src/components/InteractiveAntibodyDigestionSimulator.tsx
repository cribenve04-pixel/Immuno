import React, { useState } from 'react';
import { Scissors, Shield, Activity, RotateCcw, Droplets, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { ENZYMATIC_CLEAVAGE_DATA } from '../data/lezione6Content';

type CleavageMode = 'papain' | 'pepsin' | 'fcrn_cycle';

export const InteractiveAntibodyDigestionSimulator: React.FC = () => {
  const [cleavageMode, setCleavageMode] = useState<CleavageMode>('papain');
  const [fcrnStep, setFcrnStep] = useState<number>(0);

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
              Laboratorio Biochimico & Farmacologico
            </span>
            <span className="text-xs text-slate-400 font-mono">Papaina · Pepsina · Recettore FcRn</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
            Frammentazione Enzimatica (Fab vs F(ab&apos;)2) & Salvataggio Endoteliale via FcRn
          </h4>
        </div>

        {/* Mode Switchers */}
        <div className="flex items-center gap-2 print:hidden">
          <button
            onClick={() => {
              setCleavageMode('papain');
              setFcrnStep(0);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              cleavageMode === 'papain'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Scissors className="w-3.5 h-3.5" />
            <span>1. Papaina</span>
          </button>
          <button
            onClick={() => {
              setCleavageMode('pepsin');
              setFcrnStep(0);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              cleavageMode === 'pepsin'
                ? 'bg-cyan-600 text-white shadow-xs'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Scissors className="w-3.5 h-3.5" />
            <span>2. Pepsina</span>
          </button>
          <button
            onClick={() => {
              setCleavageMode('fcrn_cycle');
              setFcrnStep(0);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              cleavageMode === 'fcrn_cycle'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>3. Ciclo FcRn</span>
          </button>
        </div>
      </div>

      {/* Screen Interactive Content */}
      <div className="print:hidden">
        {/* Main Content Area */}
        {cleavageMode === 'papain' && (
          <div className="space-y-4">
          <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-purple-200">Digestione con Papaina (Proteasi da Carica papaya)</span>
              <span className="text-xs font-mono bg-purple-900/80 text-purple-300 px-2 py-0.5 rounded">Taglio al di SOPRA della Cerniera</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              La papaina scinde i legami peptidici situati prima dei ponti disolfuro inter-catena pesante.
              Si generano <strong>tre frammenti separati</strong>: due frammenti <strong>Fab</strong> (50 kDa ciascuno) e un frammento <strong>Fc</strong> (50 kDa).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {/* Box Fab */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="font-bold text-white text-sm flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                <span>2 Frammenti Fab (Fraction Antigen-Binding)</span>
              </div>
              <ul className="text-slate-300 space-y-1.5 list-disc pl-4 leading-relaxed">
                <li><strong>Struttura:</strong> Ciascun Fab è composto da una catena leggera intera (VL + CL) e dai domini VH + CH1 della catena pesante.</li>
                <li><strong>Valenza:</strong> Monovalente (1 solo sito combinatorio per frammento).</li>
                <li><strong>Proprietà biochimica:</strong> Lega l&apos;antigene con la stessa identica affinità dell&apos;anticorpo intatto, ma <em>non può fare cross-linking né precipitare l&apos;antigene in reticoli</em>.</li>
              </ul>
            </div>

            {/* Box Fc */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="font-bold text-white text-sm flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
                <span>1 Frammento Fc (Fraction Crystallizable)</span>
              </div>
              <ul className="text-slate-300 space-y-1.5 list-disc pl-4 leading-relaxed">
                <li><strong>Struttura:</strong> Dimeri dei domini costanti carbossi-terminali CH2 e CH3 uniti da ponti disolfuro.</li>
                <li><strong>Proprietà biochimica:</strong> Tende spontaneamente a cristallizzare a basse temperature.</li>
                <li><strong>Funzione:</strong> Media tutte le funzioni effettrici dell&apos;anticorpo: legame a recettori <strong>FcγR</strong> su macrofagi (fagocitosi) e NK (ADCC), fissazione di <strong>C1q</strong> (complemento) e legame a <strong>FcRn</strong>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {cleavageMode === 'pepsin' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-cyan-200">Digestione con Pepsina (Proteasi gastrica a pH acido)</span>
              <span className="text-xs font-mono bg-cyan-900/80 text-cyan-300 px-2 py-0.5 rounded">Taglio al di SOTTO della Cerniera</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              La pepsina taglia i domini pesanti sul versante carbossilico rispetto ai ponti disolfuro della cerniera.
              I due bracci Fab rimangono saldamente uniti dal ponte disolfuro cerniera, generando un unico grande frammento <strong>F(ab&apos;)2 (110 kDa)</strong>,
              mentre la porzione Fc viene completamente idrolizzata in una moltitudine di piccoli peptidi inattivi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="font-bold text-white text-sm flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <span>Frammento F(ab&apos;)2 Bivalente (110 kDa)</span>
              </div>
              <ul className="text-slate-300 space-y-1.5 list-disc pl-4 leading-relaxed">
                <li><strong>Valenza:</strong> <strong>Bivalente</strong> (2 siti antigenici attivi tenuti insieme dalla cerniera intatta).</li>
                <li><strong>Reattività:</strong> Può fare <strong>cross-linking</strong>, agglutinare globuli rossi o batteri e formare reticoli insolubili di precipitazione.</li>
                <li><strong>Vantaggio terapeutico:</strong> Neutralizza veleni o tossine senza innescare reazioni infiammatorie mediate da Fc.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="font-bold text-white text-sm flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                <span>Frammento Fc Idrolizzato (Distrutto)</span>
              </div>
              <ul className="text-slate-300 space-y-1.5 list-disc pl-4 leading-relaxed">
                <li>Nessun frammento Fc integro residuo.</li>
                <li>Totale incapacità di attivare la via classica del complemento (nessun legame di C1q).</li>
                <li>Nessun legame a FcγR; eliminazione rapida dal circolo renale per filtrazione glomerulare (emivita ridotta rispetto all&apos;IgG nativa).</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {cleavageMode === 'fcrn_cycle' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-amber-200">Ciclo di Riciclo Endoteliale e Trasferimento Placentare FcRn</span>
              <span className="text-xs font-mono bg-amber-900/80 text-amber-300 px-2 py-0.5 rounded">Emivita IgG: 21-28 giorni</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Il recettore Fc neonatale (FcRn) è un recettore atipico MHC-I-simile privo di tasca peptidica, complessato con la β2-microglobulina.
              Regola l&apos;emivita prolungata delle IgG salvandole dalla digestione nei lisosomi cellulari mediante un meccanismo pH-dipendente.
            </p>
          </div>

          {/* Stepper for FcRn */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 text-xs">
            <div
              onClick={() => setFcrnStep(0)}
              className={`p-3 rounded-xl border cursor-pointer transition-all ${
                fcrnStep === 0 ? 'bg-amber-950/70 border-amber-500' : 'bg-slate-950 border-slate-800'
              }`}
            >
              <span className="text-[10px] font-mono font-bold text-amber-400 block uppercase">Fase 1 · Sangue</span>
              <div className="font-semibold text-white mt-0.5">Plasma a pH 7.4</div>
              <p className="text-[11px] text-slate-300 mt-1">A pH neutro, FcRn non ha affinità per le IgG. Le IgG circolano libere e vengono pinocitate in vescicole.</p>
            </div>

            <div
              onClick={() => setFcrnStep(1)}
              className={`p-3 rounded-xl border cursor-pointer transition-all ${
                fcrnStep === 1 ? 'bg-amber-950/70 border-amber-500' : 'bg-slate-950 border-slate-800'
              }`}
            >
              <span className="text-[10px] font-mono font-bold text-amber-400 block uppercase">Fase 2 · Endosoma</span>
              <div className="font-semibold text-white mt-0.5">Acidificazione (pH &lt; 6.5)</div>
              <p className="text-[11px] text-slate-300 mt-1">I residui di istidina dell&apos;Fc si protonano: legame ad altissima affinità a FcRn sulle membrane vescicolari.</p>
            </div>

            <div
              onClick={() => setFcrnStep(2)}
              className={`p-3 rounded-xl border cursor-pointer transition-all ${
                fcrnStep === 2 ? 'bg-amber-950/70 border-amber-500' : 'bg-slate-950 border-slate-800'
              }`}
            >
              <span className="text-[10px] font-mono font-bold text-amber-400 block uppercase">Fase 3 · Smistamento</span>
              <div className="font-semibold text-white mt-0.5">Salvataggio dal Lisosoma</div>
              <p className="text-[11px] text-slate-300 mt-1">Le proteine non legate a FcRn finiscono nel lisosoma e vengono digerite. Le IgG legate vengono re-indirizzate alla membrana.</p>
            </div>

            <div
              onClick={() => setFcrnStep(3)}
              className={`p-3 rounded-xl border cursor-pointer transition-all ${
                fcrnStep === 3 ? 'bg-amber-950/70 border-amber-500' : 'bg-slate-950 border-slate-800'
              }`}
            >
              <span className="text-[10px] font-mono font-bold text-amber-400 block uppercase">Fase 4 · Esocitosi</span>
              <div className="font-semibold text-white mt-0.5">Rilascio a pH 7.4</div>
              <p className="text-[11px] text-slate-300 mt-1">A contatto con il pH neutro extracellulare, FcRn perde istantaneamente affinità rilasciando l&apos;IgG integra nel sangue.</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-amber-200">
            <strong>Applicazione Biotecnologica & Trasferimento Materno-Fetale:</strong><br />
            Lo stesso asse FcRn opera nel sinciziotrofoblasto placentare, trasferendo le IgG materne nella circolazione fetale
            durante il terzo trimestre di gravidanza (immunità passiva neonatale).
            In farmacologia, la fusione del dominio Fc di un&apos;IgG a proteine terapeutiche instabili (es. <em>Etanercept</em>, recettore solubile del TNF-α)
            sfrutta il riciclo via FcRn per estenderne l&apos;emivita da poche ore a oltre 14 giorni.
          </div>
        </div>
      )}
      </div>

      {/* Printable Unrolled Table of Enzymatic Cleavage & FcRn (A4 Format) */}
      <div className="hidden print:block p-6 border-t border-slate-700 bg-white text-slate-900">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4 font-mono flex items-center justify-between border-b border-slate-300 pb-2">
          <span>Tavola Sinottica: Frammentazione Enzimatica (Papaina vs Pepsina) & Ciclo FcRn (Srotolata)</span>
          <span className="text-slate-500 font-mono">Biochimica & Biotecnologie</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {/* Papaina */}
          <div className="p-4 rounded-lg border border-purple-300 bg-purple-50/50 break-inside-avoid space-y-2">
            <div className="flex items-center justify-between border-b border-purple-200 pb-1">
              <span className="font-bold text-sm text-purple-900">1. Digestione con Papaina</span>
              <span className="font-mono text-[10px] text-purple-700 font-semibold">Sito: Sopra la Cerniera</span>
            </div>
            <p className="text-slate-800 leading-relaxed font-normal">
              Taglio N-terminale rispetto ai ponti disolfuro intercatena H-H.
            </p>
            <div className="p-2 rounded bg-white border border-purple-200 font-mono text-[11px] text-purple-950">
              <strong>Resa:</strong> 2 frammenti Fab monovalenti (50 kDa ciascuno) + 1 frammento Fc cristallizzabile (50 kDa).
            </div>
            <p className="text-[11px] text-slate-600 leading-snug">
              <strong>Comportamento funzionale:</strong> I frammenti Fab legano l&apos;antigene ma non precipitano né agglutinano (monovalenti). Il frammento Fc media le funzioni effettrici legando C1q e recettori FcγR.
            </p>
          </div>

          {/* Pepsina */}
          <div className="p-4 rounded-lg border border-cyan-300 bg-cyan-50/50 break-inside-avoid space-y-2">
            <div className="flex items-center justify-between border-b border-cyan-200 pb-1">
              <span className="font-bold text-sm text-cyan-900">2. Digestione con Pepsina</span>
              <span className="font-mono text-[10px] text-cyan-700 font-semibold">Sito: Sotto la Cerniera</span>
            </div>
            <p className="text-slate-800 leading-relaxed font-normal">
              Taglio C-terminale rispetto ai ponti disolfuro intercatena H-H a pH acido.
            </p>
            <div className="p-2 rounded bg-white border border-cyan-200 font-mono text-[11px] text-cyan-950">
              <strong>Resa:</strong> 1 frammento F(ab&apos;)₂ bivalente (100 kDa) + frammenti peptidici Fc degradati (pFc&apos;).
            </div>
            <p className="text-[11px] text-slate-600 leading-snug">
              <strong>Comportamento funzionale:</strong> Il frammento F(ab&apos;)₂ è bivalente, agglutina e precipita gli antigeni multivalenti ma è privo di funzioni effettrici (incapace di attivare il complemento o legare FcγR).
            </p>
          </div>
        </div>

        {/* Ciclo del Recettore Neonatale FcRn */}
        <div className="mt-5 p-4 rounded-lg border border-amber-300 bg-amber-50/50 break-inside-avoid text-xs space-y-2">
          <div className="font-bold text-amber-950 font-mono uppercase tracking-wider border-b border-amber-200 pb-1 flex items-center justify-between">
            <span>3. Ciclo del Recettore Fc Neonatale (FcRn) e Salvataggio Endoteliale delle IgG</span>
            <span className="font-mono text-[10px] text-amber-800">Emivita ~21 giorni</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 pt-1 text-[11px]">
            <div className="p-2 rounded bg-white border border-amber-200">
              <strong className="text-amber-900 block font-bold">1. Pinocitosi Fluida</strong>
              <p className="text-slate-700 text-[10.5px] mt-0.5">Ingresso non specifico di proteine plasmatiche nelle cellule endoteliali a pH 7.4 (nessun legame a FcRn).</p>
            </div>
            <div className="p-2 rounded bg-white border border-amber-200">
              <strong className="text-amber-900 block font-bold">2. Acidificazione (pH &lt; 6.5)</strong>
              <p className="text-slate-700 text-[10.5px] mt-0.5">Protonazione delle istidine del dominio CH2-CH3 dell&apos;Fc: legame ad altissima affinità a FcRn di membrana.</p>
            </div>
            <div className="p-2 rounded bg-white border border-amber-200">
              <strong className="text-amber-900 block font-bold">3. Smistamento Vescicolare</strong>
              <p className="text-slate-700 text-[10.5px] mt-0.5">Le proteine non legate finiscono nei lisosomi e vengono distrutte; il complesso IgG-FcRn viene riciclato verso la superficie.</p>
            </div>
            <div className="p-2 rounded bg-white border border-amber-200">
              <strong className="text-amber-900 block font-bold">4. Esocitosi (pH 7.4)</strong>
              <p className="text-slate-700 text-[10.5px] mt-0.5">A pH ematico neutro FcRn perde affinità e rilascia l&apos;IgG integra in circolo, prolungandone l&apos;emivita (3-4 settimane).</p>
            </div>
          </div>
          <div className="text-[10.5px] text-slate-700 pt-1 border-t border-amber-200 leading-relaxed">
            <strong>Applicazioni Farmacologiche & Fisiologiche:</strong> Trasferimento transplacentare delle IgG dalla madre al feto nel 3° trimestre. Sviluppo di farmaci biologici <em>Fc-fusion proteins</em> (es. Etanercept, Abatacept) per estendere la durata d&apos;azione terapeutica.
          </div>
        </div>
      </div>
    </div>
  );
};
