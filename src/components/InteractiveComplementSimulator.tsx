import React, { useState } from 'react';
import {
  Shield,
  Zap,
  Play,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Droplets,
  Activity,
  Pill,
  Info,
  Flame,
  ShieldCheck,
  Ban
} from 'lucide-react';

type ComplementPathwayKey = 'classica' | 'lectinica' | 'alternativa';
type ClinicalScenarioKey = 'fisiologico' | 'epn_deficit' | 'eculizumab' | 'c1_inh_deficit' | 'terminal_c5_c9_deficit';

export const InteractiveComplementSimulator: React.FC = () => {
  const [selectedPathway, setSelectedPathway] = useState<ComplementPathwayKey>('classica');
  const [activeStep, setActiveStep] = useState<number>(1);
  const [clinicalScenario, setClinicalScenario] = useState<ClinicalScenarioKey>('fisiologico');
  const [selectedProtein, setSelectedProtein] = useState<string | null>(null);

  const pathwayData = {
    classica: {
      title: 'Via Classica (Anticorpo-Dipendente)',
      trigger: 'Immunocomplessi (IgM pentamerica > IgG3 > IgG1)',
      initiator: 'C1q-C1r2-C1s2',
      c3Convertase: 'C4b2a',
      c5Convertase: 'C4b2a3b',
      color: 'blue'
    },
    lectinica: {
      title: 'Via delle Lectine (Zuccheri Microbici)',
      trigger: 'Mannosio e Ficoline su pareti batteriche/fungine',
      initiator: 'MBL / Ficoline + MASP-1/2',
      c3Convertase: 'C4b2a',
      c5Convertase: 'C4b2a3b',
      color: 'amber'
    },
    alternativa: {
      title: 'Via Alternativa (Tick-Over & Autoamplificazione)',
      trigger: 'Idrolisi spontanea C3(H2O) su superfici prive di inibitori',
      initiator: 'C3(H2O)Bb + Fattore D',
      c3Convertase: 'C3bBb (stabilizzata da Properdina)',
      c5Convertase: 'C3b2Bb',
      color: 'emerald'
    }
  };

  const stepsData = [
    {
      number: 1,
      name: '1. Riconoscimento & Innesco Iniziale',
      desc:
        selectedPathway === 'classica'
          ? 'IgM o IgG legate all\'antigene reclutano C1q. Le subunità C1r attivano autocataliticamente la serin-proteasi C1s.'
          : selectedPathway === 'lectinica'
          ? 'MBL o Ficoline riconoscono carboidrati terminali microbici, attivando le proteasi MASP-1 e MASP-2.'
          : 'Lenta idrolisi spontanea continua di C3 in plasma (tick-over) genera C3(H2O), che lega Fattore B e viene clivato dal Fattore D in C3(H2O)Bb.',
      status: 'Innesco enzimatico di superficie'
    },
    {
      number: 2,
      name: '2. Formazione della C3 Convertasi',
      desc:
        selectedPathway === 'alternativa'
          ? 'C3b depositato sulla superficie microbica lega il Fattore B, clivato dal Fattore D: si assembla la convertasi C3bBb, stabilizzata dal Fattore P (Properdina).'
          : 'C1s o MASP-2 clivano C4 in C4a e C4b (che si ancora covalentemente tramite legame tioestere) e C2 in C2a e C2b, formando la C3 convertasi C4b2a.',
      status: 'Assemblaggio del complesso catalitico bimolecolare'
    },
    {
      number: 3,
      name: '3. Clivaggio di C3 & Opsonizzazione Esponenziale',
      desc:
        'La C3 convertasi cliva centinaia di molecole di C3 sierico in: C3a (rilasciata come potente anafilatossina solubile) e C3b (fissata in massa sulla membrana come opsonina per i recettori fagocitici CR1, CR3 e CR4). Alimenta la via alternativa!',
      status: 'Amplificazione esponenziale a valanga (>10^6 molecole C3b)'
    },
    {
      number: 4,
      name: '4. Transizione a C5 Convertasi & Innesco Litico',
      desc:
        clinicalScenario === 'eculizumab'
          ? 'BLOCCO FARMACOLOGICO! Eculizumab si lega ad altissima affinità a C5, impedendo alla C5 convertasi di clivarlo. La cascata si arresta qui: NESSUN C5a, NESSUN MAC! Eritrociti protetti.'
          : 'L\'aggiunta di una molecola di C3b trasforma la convertasi in C5 convertasi (' +
            (selectedPathway === 'alternativa' ? 'C3b2Bb' : 'C4b2a3b') +
            '). Essa taglia C5 generando l\'anafilatossina chemotattica C5a e il frammento di nucleazione labile C5b.',
      status: clinicalScenario === 'eculizumab' ? 'Arresto mirato da anticorpo monoclonale' : 'Generazione del frammento C5b'
    },
    {
      number: 5,
      name: '5. Assembramento del MAC (C5b-9) & Lisi Osmostica',
      desc:
        clinicalScenario === 'eculizumab'
          ? 'Nessun complesso litico formato grazie a Eculizumab. Cellula intatta, emolisi azzerata!'
          : clinicalScenario === 'terminal_c5_c9_deficit'
          ? 'DEFICIT GENETICO C5-C9: mancata polimerizzazione del MAC. Assenza di lisi batterica -> suscettibilità a meningite fulminante da Neisseria!'
          : clinicalScenario === 'epn_deficit'
          ? 'EMOGLOBINURIA PAROSSISTICA NOTTURNA: a causa dell\'assenza di CD55 e CD59 da mutazione PIGA, il MAC polimerizza senza alcun freno sulla membrana eritrocitaria, aprendo pori litici di 11 nm -> EMOLISI INTRAVASCOLARE MASSIVA, urine scure e trombosi!'
          : 'C5b recluta C6 e C7 (si ancora al doppio strato lipidico), poi C8 (penetra la membrana) e induce la polimerizzazione di 10-18 monomeri di C9 formando il Membrane Attack Complex (MAC, C5b-9): un poro transmembrana stabile da 11 nm che induce lisi osmotica microbica!',
      status:
        clinicalScenario === 'epn_deficit'
          ? 'Lisi eritrocitaria patologica incontrollata'
          : clinicalScenario === 'eculizumab'
          ? 'Protezione terapeutica totale'
          : 'Poro litico cilindrico transmembrana completato'
    }
  ];

  const proteinGlossary: Record<string, { role: string; notes: string }> = {
    'C1q': {
      role: 'Esamero a bouquet con teste globulari leganti frammenti Fc di immunoglobuline (almeno 2 teste contigue).',
      notes: 'Il deficit congenito di C1q è il più potente fattore di rischio genetico noto per Lupus Eritematoso Sistemico (LES >90%).'
    },
    'C4b2a': {
      role: 'C3 Convertasi classica e lectinica. Cliva C3 nativo liberando C3a e fissando C3b.',
      notes: 'Dissociata fisiologicamente da DAF (CD55) e degradata da Fattore I con cofattore C4bp.'
    },
    'C3bBb': {
      role: 'C3 Convertasi alternativa. Si assembla su qualsiasi superficie biologica priva di regolatori del self.',
      notes: 'Viene stabilizzata dalla Properdina (Fattore P), che estende l\'emivita enzimatica da 90 secondi a oltre 15 minuti.'
    },
    'C3a': {
      role: 'Anafilatossina solubile (77 aa). Lega C3aR su mastociti inducendo rilascio di istamina e vasodilatazione.',
      notes: 'Possiede anche proprietà chemiotattiche minori rispetto a C5a.'
    },
    'C3b / iC3b': {
      role: 'Opsonina primaria dell\'organismo. Fissa covalentemente le pareti microbiche via legame tioestere.',
      notes: 'Riconosciuta con avidità elevatissima dai recettori fagocitici CR1 (CD35), CR3 (Mac-1) e CR4 dei macrofagi.'
    },
    'C5a': {
      role: 'La più potente anafilatossina e molecola chemioattrattante del plasma umano.',
      notes: 'Attiva i neutrofili a concentrazioni picomolari via C5aR1 (CD88), stimolando chemiotassi, burst respiratorio NOX2 e adesione endoteliale.'
    },
    'MAC (C5b-9)': {
      role: 'Complesso di Attacco alla Membrana. Canale cilindrico idrofilo transmembrana (diametro 10-11 nm).',
      notes: 'Composto da C5b, C6, C7, C8 e polimeri di 10-18 subunità C9. Fondamentale per la lisi di batteri Gram-negativi dotati di parete sottile (Neisseria).'
    },
    'CD55 (DAF)': {
      role: 'Decay-Accelerating Factor. Glicoproteina GPI-ancorata che disassembla le C3 convertasi cellulari.',
      notes: 'Assente negli eritrociti dei pazienti con EPN per deficit del gene PIGA.'
    },
    'CD59 (Protectina)': {
      role: 'Inibitore terminale del MAC. Proteina ancorata a GPI che si interpone in C5b-8 bloccando C9.',
      notes: 'La sua perdita nell\'EPN porta alla lisi osmotica incontrollata del globulo rosso.'
    },
    'C1-INH': {
      role: 'Serpina plasmatica suicida che inattiva irreversibilmente C1r, C1s, MASP-2, Callicreina e FXIIa.',
      notes: 'Il deficit causa Angioedema Ereditario (HAE) con edema letale da accumulo di bradichinina.'
    },
    'Eculizumab': {
      role: 'Anticorpo monoclonale umanizzato anti-C5 (blocco di prima linea per EPN e aHUS).',
      notes: 'Previene il clivaggio di C5, arrestando l\'emolisi intravascolare; richiede vaccinazione antimeningococcica obbligatoria.'
    }
  };

  const handlePlayCascade = () => {
    let step = 1;
    setActiveStep(1);
    const interval = setInterval(() => {
      step++;
      if (step > 5) {
        clearInterval(interval);
      } else {
        setActiveStep(step);
      }
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs my-8">
      {/* Header */}
      <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              <Droplets className="w-5 h-5 text-indigo-400" />
            </span>
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-indigo-300 font-mono">
                Simulatore Fisiopatologico Molecolare
              </span>
              <h3 className="text-xl font-bold text-white">
                Cascata del Complemento & Lisi Litica MAC
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePlayCascade}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Play className="w-3.5 h-3.5" />
              Riproduci Cascata Completa
            </button>
            <button
              onClick={() => {
                setActiveStep(1);
                setSelectedProtein(null);
              }}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          </div>
        </div>

        <p className="text-xs text-indigo-200/80 mt-2 max-w-3xl">
          Seleziona la via di innesco, naviga tra le 5 fasi della cascata enzimatica e sperimenta l'impatto di patologie molecolari (EPN, deficit C1-INH) o di terapie biologiche mirate (Eculizumab).
        </p>
      </div>

      {/* Control Ribbon */}
      <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Pathway Selection */}
        <div>
          <span className="text-xs font-bold text-slate-700 block mb-1.5">
            1. Seleziona la Via di Innesco del Complemento:
          </span>
          <div className="flex flex-wrap gap-2">
            {(['classica', 'lectinica', 'alternativa'] as ComplementPathwayKey[]).map((key) => {
              const active = selectedPathway === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedPathway(key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                    active
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {pathwayData[key].title.split(' (')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clinical Scenario Selection */}
        <div>
          <span className="text-xs font-bold text-slate-700 block mb-1.5">
            2. Contesto Fisiopatologico / Terapeutico:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setClinicalScenario('fisiologico')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                clinicalScenario === 'fisiologico'
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Fisiologico (Self Protetto)
            </button>
            <button
              onClick={() => setClinicalScenario('epn_deficit')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                clinicalScenario === 'epn_deficit'
                  ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              EPN (Deficit CD55/CD59)
            </button>
            <button
              onClick={() => setClinicalScenario('eculizumab')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                clinicalScenario === 'eculizumab'
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Terapia: Eculizumab (anti-C5)
            </button>
            <button
              onClick={() => setClinicalScenario('c1_inh_deficit')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                clinicalScenario === 'c1_inh_deficit'
                  ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              HAE (Deficit C1-INH)
            </button>
          </div>
        </div>
      </div>

      {/* Step Progress Indicators */}
      <div className="p-4 bg-slate-100 border-b border-slate-200 grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
        {stepsData.map((step) => {
          const isCurrent = activeStep === step.number;
          const isPassed = activeStep > step.number;
          return (
            <button
              key={step.number}
              onClick={() => setActiveStep(step.number)}
              className={`p-2 rounded-xl text-left transition-all border ${
                isCurrent
                  ? 'bg-white border-indigo-400 shadow-sm ring-2 ring-indigo-200'
                  : isPassed
                  ? 'bg-indigo-50/70 border-indigo-200 text-indigo-900'
                  : 'bg-white/50 border-slate-200 opacity-60 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                    isCurrent
                      ? 'bg-indigo-600 text-white'
                      : isPassed
                      ? 'bg-indigo-200 text-indigo-800'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {step.number}
                </span>
                {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />}
              </div>
              <p className="text-xs font-bold truncate text-slate-800">
                {step.name.split('. ')[1]}
              </p>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Stage */}
      <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Visual Cascade Stage (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 text-white relative min-h-[360px] flex flex-col justify-between overflow-hidden">
            {/* Top Stage Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-semibold text-slate-300">
                  Fase {activeStep}/5: {stepsData[activeStep - 1].name}
                </span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-indigo-300 border border-slate-700">
                {pathwayData[selectedPathway].title.split(' (')[0]}
              </span>
            </div>

            {/* Dynamic Diagrammatic Graphic */}
            <div className="my-6 space-y-4">
              {/* Row 1: Innesco */}
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
                <div
                  onClick={() => setSelectedProtein(selectedPathway === 'classica' ? 'C1q' : 'MBL')}
                  className={`px-3 py-2 rounded-lg font-bold border cursor-pointer transition-all ${
                    activeStep >= 1
                      ? 'bg-blue-600/30 border-blue-400 text-blue-200 shadow-sm'
                      : 'bg-slate-800/40 border-slate-700 text-slate-500'
                  }`}
                >
                  {pathwayData[selectedPathway].initiator}
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500" />
                <div
                  onClick={() =>
                    setSelectedProtein(
                      selectedPathway === 'alternativa' ? 'C3bBb' : 'C4b2a'
                    )
                  }
                  className={`px-3 py-2 rounded-lg font-mono font-bold border cursor-pointer transition-all ${
                    activeStep >= 2
                      ? 'bg-amber-600/30 border-amber-400 text-amber-200 shadow-md ring-1 ring-amber-400'
                      : 'bg-slate-800/40 border-slate-700 text-slate-500'
                  }`}
                >
                  C3 Convertasi: {pathwayData[selectedPathway].c3Convertase}
                </div>
              </div>

              {/* Row 2: Clivaggio C3 */}
              <div className="flex items-center justify-center gap-4 text-xs">
                <div
                  onClick={() => setSelectedProtein('C3a')}
                  className={`px-3 py-1.5 rounded-full border text-xs font-bold cursor-pointer transition-all ${
                    activeStep >= 3
                      ? 'bg-rose-500/20 border-rose-400 text-rose-300 animate-pulse'
                      : 'bg-slate-800 border-slate-700 text-slate-600'
                  }`}
                >
                  🔥 C3a (Anafilatossina Flogogena)
                </div>
                <div
                  onClick={() => setSelectedProtein('C3b / iC3b')}
                  className={`px-4 py-2 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                    activeStep >= 3
                      ? 'bg-emerald-500/30 border-emerald-400 text-emerald-200 shadow-md'
                      : 'bg-slate-800 border-slate-700 text-slate-600'
                  }`}
                >
                  🛡️ C3b (Opsonizzazione Fagocitaria Massiva)
                </div>
              </div>

              {/* Row 3: C5 Convertasi & Eculizumab Block */}
              <div className="flex flex-col items-center justify-center gap-2 text-xs">
                <div
                  className={`px-4 py-2 rounded-xl font-mono border font-bold text-center transition-all ${
                    activeStep >= 4
                      ? clinicalScenario === 'eculizumab'
                        ? 'bg-rose-950/80 border-rose-500 text-rose-300'
                        : 'bg-indigo-600/30 border-indigo-400 text-indigo-200'
                      : 'bg-slate-800 border-slate-700 text-slate-600'
                  }`}
                >
                  C5 Convertasi: {pathwayData[selectedPathway].c5Convertase}
                  {clinicalScenario === 'eculizumab' && (
                    <div className="mt-1 flex items-center justify-center gap-1 text-[11px] text-rose-400 font-sans font-bold">
                      <Ban className="w-3.5 h-3.5" /> BLOCCATO DA ECULIZUMAB
                    </div>
                  )}
                </div>

                {activeStep >= 4 && clinicalScenario !== 'eculizumab' && (
                  <div className="flex items-center gap-3">
                    <span
                      onClick={() => setSelectedProtein('C5a')}
                      className="px-2.5 py-1 rounded-md bg-rose-900/40 border border-rose-500 text-rose-300 cursor-pointer text-[11px] font-bold"
                    >
                      ⚡ C5a (Potente Chemioattrattante)
                    </span>
                    <span className="text-slate-400">+</span>
                    <span className="px-2.5 py-1 rounded-md bg-indigo-900/40 border border-indigo-500 text-indigo-300 text-[11px] font-bold">
                      C5b (Inizio MAC)
                    </span>
                  </div>
                )}
              </div>

              {/* Row 4: MAC Assembly Terminal */}
              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <div
                  onClick={() => setSelectedProtein('MAC (C5b-9)')}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    activeStep >= 5
                      ? clinicalScenario === 'epn_deficit'
                        ? 'bg-rose-900/60 border-rose-500 text-rose-200 shadow-lg ring-2 ring-rose-500'
                        : clinicalScenario === 'eculizumab'
                        ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200'
                        : clinicalScenario === 'terminal_c5_c9_deficit'
                        ? 'bg-amber-950/40 border-amber-500 text-amber-200'
                        : 'bg-purple-900/40 border-purple-400 text-purple-200'
                      : 'bg-slate-800/30 border-slate-800 text-slate-600'
                  }`}
                >
                  <div className="font-bold text-sm flex items-center justify-center gap-2">
                    {clinicalScenario === 'epn_deficit' ? (
                      <>
                        <AlertTriangle className="w-4 h-4 text-rose-400 animate-bounce" />
                        MAC (C5b-9) Perfora Globuli Rossi Self: EMOLISI MASSIVA EPN
                      </>
                    ) : clinicalScenario === 'eculizumab' ? (
                      <>
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        MAC Assente: Globulo Rosso Integro & Salvato
                      </>
                    ) : clinicalScenario === 'terminal_c5_c9_deficit' ? (
                      <>
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                        MAC Incompleto: Suscettibilità a Neisseria Meningitidis
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 text-purple-300" />
                        Complesso MAC C5b-9: Poro Litico Transmembrana (11 nm)
                      </>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1 max-w-lg mx-auto">
                    {clinicalScenario === 'epn_deficit'
                      ? 'L\'assenza di CD55 e CD59 per difetto di sintesi dell\'ancora GPI (mutazione somatica PIGA) impedisce l\'arresto della C3 convertasi e del C9, causando lisi osmotica notturna ed emoglobinuria.'
                      : clinicalScenario === 'eculizumab'
                      ? 'Il legame dell\'anticorpo monoclonale su C5 azzera la lisi intravascolare ed elimina la necessità di emotrasfusioni nei pazienti affetti da EPN.'
                      : 'I monomeri C9 (10-18 subunità) polimerizzano nel doppio strato fosfolipidico, annullando il gradiente osmotico e provocando la lisi litica del bersaglio.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Status Box */}
            <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <span className="font-medium">{stepsData[activeStep - 1].desc}</span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 shrink-0 ml-2">
                {stepsData[activeStep - 1].status}
              </span>
            </div>
          </div>

          {/* Quick Navigator Step Buttons */}
          <div className="flex items-center justify-between gap-2 pt-1">
            <button
              disabled={activeStep === 1}
              onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 disabled:opacity-40"
            >
              ← Fase Precedente
            </button>
            <span className="text-xs text-slate-500 font-mono">
              Fase {activeStep} di 5
            </span>
            <button
              disabled={activeStep === 5}
              onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
              className="px-3 py-1.5 rounded-lg border border-indigo-200 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 disabled:opacity-40"
            >
              Fase Successiva →
            </button>
          </div>
        </div>

        {/* Sidebar Info & Molecular Inspector (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Molecular Inspector Card */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <div className="flex items-center gap-1.5 mb-2 text-indigo-900 font-bold text-xs uppercase tracking-wider">
              <Info className="w-4 h-4 text-indigo-600" />
              Ispettore Molecolare
            </div>

            {selectedProtein && proteinGlossary[selectedProtein] ? (
              <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm">
                    {selectedProtein}
                  </h4>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800 font-semibold">
                    Attivo
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  {proteinGlossary[selectedProtein].role}
                </p>
                <div className="pt-2 border-t border-slate-100 text-[11px] text-amber-800 bg-amber-50/70 p-2 rounded">
                  <strong>Rilevanza Clinica:</strong>{' '}
                  {proteinGlossary[selectedProtein].notes}
                </div>
              </div>
            ) : (
              <div className="p-3 bg-white rounded-lg border border-dashed border-slate-300 text-xs text-slate-500 text-center">
                Clicca su qualsiasi molecola nel diagramma (es. C1q, C3 Convertasi, C3b, C5a, MAC, CD55, CD59) per esaminarne le funzioni e le correlazioni cliniche d'esame.
              </div>
            )}

            {/* Quick Protein Pills */}
            <div className="mt-3">
              <span className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                Esplora Molecole Chiave:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {Object.keys(proteinGlossary).map((name) => (
                  <button
                    key={name}
                    onClick={() => setSelectedProtein(name)}
                    className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors border ${
                      selectedProtein === name
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-indigo-50'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Clinical Correlation Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50/60 rounded-xl p-4 border border-indigo-100 text-xs space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-indigo-950">
              <Shield className="w-4 h-4 text-indigo-700" />
              Perla Clinica d'Esame
            </div>
            <p className="text-slate-700 leading-relaxed">
              Il sistema del complemento possiede <strong>due punti di amplificazione cruciali</strong>: la C3 convertasi (che converte centinaia di molecole di C3 in C3b e C3a) e il circuito di amplificazione della via alternativa, responsabile di oltre l'80% di tutta l'attivazione finale anche se l'innesco è partito dalla via classica o lectinica!
            </p>
            <div className="pt-2 border-t border-indigo-200/60 text-[11px] text-indigo-900 font-semibold">
              Regola mnemonica: C3a & C5a = Anafilatossine (A come Allergia/Anafilassi); C3b = opsonina (B come Batterio rivestito per la fagocitosi).
            </div>
          </div>
        </div>
      </div>

      {/* Print View: Full linear unrolled steps for PDF export without truncation */}
      <div className="hidden print:block p-4 space-y-4 border-t border-slate-300">
        <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wide">
          Sintesi Completa delle Vie del Complemento (Classica, Lectinica, Alternativa) & Scenari Clinici:
        </h4>
        
        {/* Tabella Comparativa delle 3 Vie */}
        <div className="grid grid-cols-3 gap-2.5 text-xs">
          <div className="p-2.5 rounded-lg border border-blue-300 bg-blue-50/60">
            <strong className="text-blue-900 block font-bold mb-1">1. Via Classica</strong>
            <p className="text-[11px] text-slate-700"><strong>Innesco:</strong> Immunocomplessi (IgM pentamerica, IgG3, IgG1)</p>
            <p className="text-[11px] text-slate-700"><strong>Iniziatore:</strong> C1q + C1r₂ + C1s₂</p>
            <p className="text-[11px] text-slate-900 font-mono mt-1">C3 Convertasi: C4b2b</p>
            <p className="text-[11px] text-slate-900 font-mono">C5 Convertasi: C4b2b3b</p>
          </div>
          <div className="p-2.5 rounded-lg border border-amber-300 bg-amber-50/60">
            <strong className="text-amber-900 block font-bold mb-1">2. Via delle Lectine</strong>
            <p className="text-[11px] text-slate-700"><strong>Innesco:</strong> Residui di mannosio e carboidrati microbici</p>
            <p className="text-[11px] text-slate-700"><strong>Iniziatore:</strong> MBL / Ficoline + MASP-1/2</p>
            <p className="text-[11px] text-slate-900 font-mono mt-1">C3 Convertasi: C4b2b</p>
            <p className="text-[11px] text-slate-900 font-mono">C5 Convertasi: C4b2b3b</p>
          </div>
          <div className="p-2.5 rounded-lg border border-emerald-300 bg-emerald-50/60">
            <strong className="text-emerald-900 block font-bold mb-1">3. Via Alternativa</strong>
            <p className="text-[11px] text-slate-700"><strong>Innesco:</strong> Idrolisi spontanea tick-over C3(H₂O)</p>
            <p className="text-[11px] text-slate-700"><strong>Iniziatore:</strong> C3(H₂O)Bb + Fattore D + Properdina</p>
            <p className="text-[11px] text-slate-900 font-mono mt-1">C3 Convertasi: C3bBb</p>
            <p className="text-[11px] text-slate-900 font-mono">C5 Convertasi: C3bBb3b (C3b₂Bb)</p>
          </div>
        </div>

        {/* Le 5 Fasi Molecolari */}
        <div className="space-y-2">
          {stepsData.map((step) => (
            <div key={step.number} className="p-3 rounded-lg border border-slate-300 bg-slate-50/70 break-inside-avoid">
              <div className="font-bold text-xs text-slate-900 mb-0.5 flex items-center justify-between">
                <span>{step.name}</span>
                <span className="text-[10px] text-slate-500 font-mono">{step.status}</span>
              </div>
              <p className="text-xs text-slate-800 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Correlazioni Cliniche d'Esame */}
        <div className="p-3 rounded-lg border border-indigo-200 bg-indigo-50/40 text-[11px] text-slate-800 space-y-1 break-inside-avoid">
          <strong className="text-indigo-950 font-bold block">Scenari Clinici Chiave:</strong>
          <p>• <strong>Emoglobinuria Parossistica Notturna (EPN):</strong> Mutazione somatica nel gene <em>PIGA</em> con perdita dell&apos;ancora GPI per CD55 (DAF) e CD59 (MIRL), scatenando lisi intravascolare massiva da MAC mediata dal complemento.</p>
          <p>• <strong>Eculizumab (Soliris):</strong> Anticorpo monoclonale umanizzato anti-C5 che blocca la scissione in C5a e C5b, arrestando completamente la formazione del complesso MAC (C5b-9) in EPN e SEUa.</p>
          <p>• <strong>Angioedema Ereditario (HAE):</strong> Deficit di C1-Inibitore (C1-INH) che impedisce il controllo della via classica e dell&apos;asse callicreina-chinina, portando a sovrapproduzione di Bradichinina ed edema laringeo potenzialmente letale.</p>
        </div>
      </div>
    </div>
  );
};
