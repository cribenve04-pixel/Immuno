import React, { useState } from 'react';
import {
  Shield,
  Zap,
  Play,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Activity,
  HeartPulse,
  Sparkles,
  Info,
  Flame,
  ShieldCheck,
  Target
} from 'lucide-react';

type NkScenario = 'normal_self' | 'missing_self' | 'adcc_tumor';

export const InteractiveNkCellSimulator: React.FC = () => {
  const [scenario, setScenario] = useState<NkScenario>('normal_self');
  const [isLysisTriggered, setIsLysisTriggered] = useState<boolean>(false);
  const [selectedMolecule, setSelectedMolecule] = useState<string | null>(null);

  const scenarioDetails = {
    normal_self: {
      title: 'Cellula Sana Fisiologica (Normal Self)',
      mhcStatus: 'Espressione Normale di MHC-I (HLA-A, B, C, E)',
      stressStatus: 'Nessun ligando di stress (MICA/MICB assenti)',
      inhibitorySignal: 'Attivo e Dominante (KIR/NKG2A con ITIM -> reclutamento SHP-1)',
      activatingSignal: 'Assente o debole',
      outcome: 'TOLLERANZA IMMUNITARIA: Nessun rilascio di granuli litici. La cellula sana è risparmiata.',
      outcomeType: 'spared',
      badgeColor: 'emerald'
    },
    missing_self: {
      title: 'Cellula Infetta da Virus o Tumorale (Missing-Self)',
      mhcStatus: 'Perdita o Down-regulation di MHC-I (spegnimento per evadere i CD8+)',
      stressStatus: 'Elevata espressione di molecole indotte da stress (MICA, MICB, ULBPs)',
      inhibitorySignal: 'Spento! Nessun freno ITIM/SHP-1',
      activatingSignal: 'Attivo e travolgente (NKG2D via DAP10 e NCRs NKp46/NKp30 via ITAM)',
      outcome: 'CITOLISI ATTIVATA: Polarizzazione del centrosoma, esocitosi di Perforina e Granzimi -> Apoptosi!',
      outcomeType: 'lysed',
      badgeColor: 'rose'
    },
    adcc_tumor: {
      title: 'Cellula Neoplastica Opsonizzata da Anticorpi (ADCC)',
      mhcStatus: 'Variabile (non influenza l\'attivazione)',
      stressStatus: 'Superficie rivestita da anticorpi terapeutici IgG1 o IgG3 (es. Trastuzumab o Rituximab)',
      inhibitorySignal: 'Superato dalla potenza del cross-linking del recettore CD16',
      activatingSignal: 'Cross-linking massivo di CD16 (FcγRIIIA) associato a catene con motivi ITAM',
      outcome: 'LISI ADCC POTENTE: Degranulazione polarizzata e distruzione della cellula tumorale mirata.',
      outcomeType: 'adcc',
      badgeColor: 'purple'
    }
  };

  const molecularGlossary: Record<string, { desc: string; clinical: string }> = {
    'MHC-I (HLA-A/B/C/E)': {
      desc: 'Complessi di istocompatibilità espressi costitutivamente su tutte le cellule nucleate sane umane.',
      clinical: 'I virus (CMV, HSV, Adenovirus) e le cellule neoplastiche down-regolano MHC-I per sfuggire ai linfociti T CD8+, rendendosi però bersaglio elettivo delle cellule NK!'
    },
    'KIR (KIR2DL/3DL)': {
      desc: 'Killer cell Immunoglobulin-like Receptors dotati di lunga coda intracellulare ("L") con motivi inibitori ITIM.',
      clinical: 'Riconoscono specifici epitopi polimorfici di HLA-A, B e C, determinando la compatibilità allogenica nei trapianti di midollo osseo.'
    },
    'CD94 / NKG2A': {
      desc: 'Eterodimero inibitorio che riconosce la molecola monomorfa HLA-E complessata con peptidi leader di altri MHC-I.',
      clinical: 'Funge da sensore della sintesi globale di MHC-I cellulare; bersaglio di nuovi farmaci checkpoint inibitori (Monalizumab).'
    },
    'NKG2D (CD314)': {
      desc: 'Omodimero attivante che associa l\'adattatore citoplasmatico DAP10 (via PI3K / Akt).',
      clinical: 'Riconosce proteine MICA/MICB e ULBP espresse da cellule in corso di danno al DNA, infezione o trasformazione carcinomatosa.'
    },
    'CD16 (FcγRIIIA)': {
      desc: 'Recettore a bassa affinità per il frammento Fc delle immunoglobuline IgG, associato a catene trasduttrici con motivi ITAM.',
      clinical: 'Mediatore chiave della Citotossicità Cellulo-Mediata Anticorpo-Dipendente (ADCC); principio d\'azione di Rituximab (anti-CD20) e Trastuzumab (anti-HER2).'
    },
    'Perforina (PRF1)': {
      desc: 'Proteina porogenica rilasciata dai granuli litici NK in presenza di ioni Ca2+ extracellulari.',
      clinical: 'Polimerizza nel doppio strato lipidico aprendo pori cilindrici stabili attraverso cui penetrano i Granzimi.'
    },
    'Granzima B': {
      desc: 'Serin-proteasi pro-apoptotica che taglia dopo residui di aspartato all\'interno della cellula bersaglio.',
      clinical: 'Attiva direttamente la pro-caspasi-3 e cliva la proteina BID in tBID, provocando il collasso mitocondriale e la frammentazione del DNA nucleare.'
    }
  };

  const current = scenarioDetails[scenario];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs my-8">
      {/* Top Banner */}
      <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30">
              <Target className="w-5 h-5 text-rose-400" />
            </span>
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-rose-300 font-mono">
                Simulatore Fisiopatologico Interattivo
              </span>
              <h3 className="text-xl font-bold text-white">
                Cellule Natural Killer: Modello del Missing-Self & ADCC
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsLysisTriggered(!isLysisTriggered)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs ${
                isLysisTriggered
                  ? 'bg-rose-600 text-white hover:bg-rose-500'
                  : 'bg-indigo-600 text-white hover:bg-indigo-500'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              {isLysisTriggered ? 'Riavvia Sinapsi Litica' : 'Attiva Verifica di Lisi'}
            </button>
            <button
              onClick={() => {
                setScenario('normal_self');
                setIsLysisTriggered(false);
                setSelectedMolecule(null);
              }}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          </div>
        </div>

        <p className="text-xs text-rose-200/80 mt-2 max-w-3xl">
          Esplora l'ipotesi di Klas Kärre: come la cellula Natural Killer computa in frazioni di secondo l'equilibrio dinamico tra segnali inibitori (MHC-I / ITIM) e segnali attivanti (Stress, NKG2D, CD16 per ADCC).
        </p>
      </div>

      {/* Scenario Selector Ribbon */}
      <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
        <div className="w-full sm:w-auto">
          <span className="text-xs font-bold text-slate-700 block mb-1.5">
            Seleziona la Tipologia di Cellula Bersaglio:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setScenario('normal_self');
                setIsLysisTriggered(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                scenario === 'normal_self'
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              1. Cellula Sana (MHC-I Normale)
            </button>
            <button
              onClick={() => {
                setScenario('missing_self');
                setIsLysisTriggered(true);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                scenario === 'missing_self'
                  ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              2. Missing-Self (Tumore / Virus)
            </button>
            <button
              onClick={() => {
                setScenario('adcc_tumor');
                setIsLysisTriggered(true);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                scenario === 'adcc_tumor'
                  ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              3. Opsonizzata da IgG (ADCC)
            </button>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[11px] font-mono text-slate-500 block">Stato Effettore NK:</span>
          <span
            className={`inline-block px-2.5 py-0.5 rounded text-xs font-bold ${
              current.outcomeType === 'spared'
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                : current.outcomeType === 'lysed'
                ? 'bg-rose-100 text-rose-800 border border-rose-200'
                : 'bg-purple-100 text-purple-800 border border-purple-200'
            }`}
          >
            {current.outcomeType === 'spared' ? 'Inibita (Tolleranza)' : 'Attivata (Degranulazione)'}
          </span>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Visual Synapse (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 text-white relative min-h-[380px] flex flex-col justify-between overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <span className="font-mono text-rose-300 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                Sinapsi Immunologica Citotossica NK - Bersaglio
              </span>
              <span className="text-slate-400 font-mono text-[11px]">
                {current.title.split(' (')[0]}
              </span>
            </div>

            {/* Interactive Molecular Junction Diagram */}
            <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              {/* Left Box: Cellula NK */}
              <div className="bg-slate-900/90 rounded-xl p-4 border border-rose-900/40 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-300 flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-rose-400" /> Linfocita NK (CD3- CD56+)
                  </span>
                  <span className="text-[10px] bg-rose-950 text-rose-300 px-1.5 py-0.5 rounded border border-rose-800">
                    Effettore
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  {/* Inhibitory receptor */}
                  <div
                    onClick={() => setSelectedMolecule('KIR (KIR2DL/3DL)')}
                    className={`p-2 rounded-lg border cursor-pointer transition-all ${
                      scenario === 'normal_self'
                        ? 'bg-emerald-950/70 border-emerald-500 text-emerald-200'
                        : 'bg-slate-800/40 border-slate-700 text-slate-500 line-through'
                    }`}
                  >
                    <div className="font-bold flex items-center justify-between">
                      <span>KIR / NKG2A-CD94</span>
                      <span className="text-[10px] font-mono">Motivo ITIM</span>
                    </div>
                    <p className="text-[10px] text-slate-300 mt-0.5">
                      {scenario === 'normal_self'
                        ? 'Fosforilato: recluta SHP-1 -> spegne lisi'
                        : 'Non ingaggiato (nessun freno)'}
                    </p>
                  </div>

                  {/* Activating receptor NKG2D */}
                  <div
                    onClick={() => setSelectedMolecule('NKG2D (CD314)')}
                    className={`p-2 rounded-lg border cursor-pointer transition-all ${
                      scenario === 'missing_self'
                        ? 'bg-rose-950/80 border-rose-500 text-rose-200 shadow-md ring-1 ring-rose-400'
                        : 'bg-slate-800/40 border-slate-700 text-slate-400'
                    }`}
                  >
                    <div className="font-bold flex items-center justify-between">
                      <span>NKG2D / NCRs (NKp46)</span>
                      <span className="text-[10px] font-mono">DAP10 / ITAM</span>
                    </div>
                    <p className="text-[10px] text-slate-300 mt-0.5">
                      {scenario === 'missing_self'
                        ? 'Attivato da MICA/MICB indotti da stress'
                        : 'Segnale debole o represso da SHP-1'}
                    </p>
                  </div>

                  {/* ADCC receptor CD16 */}
                  <div
                    onClick={() => setSelectedMolecule('CD16 (FcγRIIIA)')}
                    className={`p-2 rounded-lg border cursor-pointer transition-all ${
                      scenario === 'adcc_tumor'
                        ? 'bg-purple-950/80 border-purple-500 text-purple-200 shadow-md ring-1 ring-purple-400'
                        : 'bg-slate-800/40 border-slate-700 text-slate-400'
                    }`}
                  >
                    <div className="font-bold flex items-center justify-between">
                      <span>CD16 (FcγRIIIA)</span>
                      <span className="text-[10px] font-mono">Motivo ITAM</span>
                    </div>
                    <p className="text-[10px] text-slate-300 mt-0.5">
                      {scenario === 'adcc_tumor'
                        ? 'Lega porzione Fc delle IgG (ADCC oncologica)'
                        : 'A riposo (nessun anticorpo legato)'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Box: Cellula Bersaglio */}
              <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200 flex items-center gap-1">
                    <Target className="w-3.5 h-3.5 text-indigo-400" /> Cellula Bersaglio
                  </span>
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700">
                    Target
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  {/* MHC-I Status */}
                  <div
                    onClick={() => setSelectedMolecule('MHC-I (HLA-A/B/C/E)')}
                    className={`p-2 rounded-lg border cursor-pointer transition-all ${
                      scenario === 'normal_self'
                        ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200'
                        : 'bg-rose-950/40 border-rose-500 text-rose-300'
                    }`}
                  >
                    <div className="font-bold flex items-center justify-between">
                      <span>MHC di Classe I</span>
                      <span className="text-[10px] font-mono">
                        {scenario === 'normal_self' ? '100% Presente' : 'Assente / Perso'}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-300 mt-0.5">
                      {scenario === 'normal_self'
                        ? 'HLA-A, B, C ed HLA-E esposti'
                        : 'Down-regolato dal virus o dalla mutazione'}
                    </p>
                  </div>

                  {/* Stress Ligands */}
                  <div
                    className={`p-2 rounded-lg border text-xs transition-all ${
                      scenario === 'missing_self'
                        ? 'bg-amber-950/40 border-amber-500 text-amber-200'
                        : 'bg-slate-800/40 border-slate-700 text-slate-500'
                    }`}
                  >
                    <div className="font-bold flex items-center justify-between">
                      <span>MICA / MICB / ULBP</span>
                      <span className="text-[10px] font-mono">
                        {scenario === 'missing_self' ? 'Espressi' : 'Assenti'}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-300 mt-0.5">
                      Proteine indotte da danno ossidativo, replicazione virale o oncogeni.
                    </p>
                  </div>

                  {/* Antibody Coating */}
                  <div
                    className={`p-2 rounded-lg border text-xs transition-all ${
                      scenario === 'adcc_tumor'
                        ? 'bg-purple-950/40 border-purple-500 text-purple-200'
                        : 'bg-slate-800/40 border-slate-700 text-slate-500'
                    }`}
                  >
                    <div className="font-bold flex items-center justify-between">
                      <span>Anticorpi IgG Legati</span>
                      <span className="text-[10px] font-mono">
                        {scenario === 'adcc_tumor' ? 'Trastuzumab / Rituximab' : 'Assenti'}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-300 mt-0.5">
                      Rivestimento con immunoglobuline di superficie specifiche.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Granule Release & Lytic Outcome Banner */}
            <div
              className={`p-3.5 rounded-xl border text-xs transition-all ${
                current.outcomeType === 'spared'
                  ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                  : current.outcomeType === 'lysed'
                  ? 'bg-rose-950/90 border-rose-500 text-rose-200 ring-1 ring-rose-500'
                  : 'bg-purple-950/90 border-purple-500 text-purple-200 ring-1 ring-purple-500'
              }`}
            >
              <div className="flex items-center gap-2 font-bold text-sm mb-1">
                {current.outcomeType === 'spared' ? (
                  <>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Tolleranza Fisiologica Garantita
                  </>
                ) : (
                  <>
                    <Flame className="w-4 h-4 text-rose-400 animate-pulse" />
                    Esocitosi Polarizzata di Perforina e Granzima B → Apoptosi della Cellula Bersaglio!
                  </>
                )}
              </div>
              <p className="text-[11px] leading-relaxed text-slate-300">
                {current.outcome}
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar Inspector & Educational Box (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Molecular Detail Card */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <div className="flex items-center gap-1.5 mb-2 text-rose-900 font-bold text-xs uppercase tracking-wider">
              <Info className="w-4 h-4 text-rose-600" />
              Ispettore Recettori & Molecole NK
            </div>

            {selectedMolecule && molecularGlossary[selectedMolecule] ? (
              <div className="bg-white p-3 rounded-lg border border-rose-100 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm">
                    {selectedMolecule}
                  </h4>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 font-semibold">
                    Scheda Molecolare
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  {molecularGlossary[selectedMolecule].desc}
                </p>
                <div className="pt-2 border-t border-slate-100 text-[11px] text-rose-900 bg-rose-50/70 p-2 rounded">
                  <strong>Correlazione Clinico-Patologica:</strong>{' '}
                  {molecularGlossary[selectedMolecule].clinical}
                </div>
              </div>
            ) : (
              <div className="p-3 bg-white rounded-lg border border-dashed border-slate-300 text-xs text-slate-500 text-center">
                Clicca sui recettori (es. KIR, CD94/NKG2A, NKG2D, CD16, Perforina, Granzima B) per visualizzarne il motivo di segnalazione e il ruolo nelle immunoterapie.
              </div>
            )}

            {/* Quick Pills */}
            <div className="mt-3">
              <span className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                Molecole Chiave da Esplorare:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {Object.keys(molecularGlossary).map((name) => (
                  <button
                    key={name}
                    onClick={() => setSelectedMolecule(name)}
                    className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors border ${
                      selectedMolecule === name
                        ? 'bg-rose-600 text-white border-rose-600'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-rose-50'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Educational Note: Asse Macrofago-NK */}
          <div className="bg-gradient-to-br from-rose-50 to-orange-50/60 rounded-xl p-4 border border-rose-100 text-xs space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-rose-950">
              <Sparkles className="w-4 h-4 text-rose-700" />
              Asse di Cooperazione Macrofago-NK (IL-12 / IFN-γ)
            </div>
            <p className="text-slate-700 leading-relaxed">
              I macrofagi che hanno fagocitato microbi secernono <strong>IL-12</strong> e <strong>IL-15</strong>, le quali stimolano le cellule NK a produrre elevate quantità di <strong>IFN-γ</strong>. L'IFN-γ a sua volta attiva potentemente l'attività microbicida dei macrofagi (sintesi di NO via iNOS e radicali ROS via NOX2), costituendo il principale meccanismo di contenimento nelle prime ore di infezione intracellulare!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
