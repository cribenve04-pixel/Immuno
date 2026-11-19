import React, { useState } from 'react';
import { Shield, Sparkles, AlertCircle, ArrowRight, RotateCcw, Bug, Activity } from 'lucide-react';

export const InteractiveNetosisSimulator: React.FC = () => {
  const [stage, setStage] = useState<number>(1);
  const [pathologyMode, setPathologyMode] = useState<'microbicida' | 'lupus' | 'trombosi'>('microbicida');

  const stagesData = [
    {
      num: 1,
      title: "Attivazione & Calcio-Influx",
      subtitle: "Innesco Recettoriale e Segnale di Danno",
      desc: "Il legame di PAMPs (LPS, peptidoglicano) ai TLR, di immunocomplessi a FcγR, o di chemochine (CXCL8) induce un rapido rilascio di ioni Ca²⁺ dal reticolo endoplasmatico e l'attivazione della protein chinasi C (PKC).",
      keyEnzymes: "PKC, Calcio intracellulare, NOX2",
      cellState: "Neutrofilo a riposo con nucleo polilobato (3-5 lobi) e granuli integri."
    },
    {
      num: 2,
      title: "PAD4 & Citrullinazione Istonica",
      subtitle: "Perdita della Conformazione Nucleosomiale",
      desc: "L'elevata concentrazione di Ca²⁺ attiva la Peptidil-Arginina Deiminasi 4 (PAD4). PAD4 converte i residui carichi positivamente di arginina sugli istoni H3 e H4 in citrullina neutra, annullando l'attrazione elettrostatica con il DNA. L'Elastasi Neutrofila (NE) e la MPO migrano nel nucleo digerendo gli istoni.",
      keyEnzymes: "PAD4, Elastasi Neutrofila (NE), MPO",
      cellState: "Inizio dello srotolamento della cromatina; perdita della lobatura nucleare."
    },
    {
      num: 3,
      title: "Decondensazione & Fusione",
      subtitle: "Rottura della Lamina e Membrana Nucleare",
      desc: "L'involucro nucleare si frammenta e la cromatina decondensata invade l'intero spazio citosolico, fondendosi intimamente con le proteine antimicrobiche dei granuli primari azzurrofili (MPO, elastasi, defensine) e secondari.",
      keyEnzymes: "Laminasi, Istoni citrullinati, Calprotectina",
      cellState: "Il citoplasma è occupato da un gel continuo di DNA e peptidi microbicidi."
    },
    {
      num: 4,
      title: "Estrusione delle NETs",
      subtitle: "Rete Extracellulare & Intrappolamento Microbico",
      desc: "La membrana plasmatica si permeabilizza tramite pori litici mediati da Gasdermina D. La rete tridimensionale di filamenti di DNA fosforilato viene espulsa all'esterno, creando un reticolo adesivo che intrappola fisicamente batteri (E. coli, S. aureus) e funghi.",
      keyEnzymes: "Gasdermina D (GSDMD), DNA backbone, LL-37, Istoni",
      cellState: "Estrusione completa del net proteo-nucleico; intrappolamento dei patogeni."
    }
  ];

  const currentStage = stagesData[stage - 1];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold tracking-wider text-purple-600 uppercase bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
              Dinamica Cellulare
            </span>
            <span className="text-xs text-slate-400 font-mono">NETosi Suicida vs Vitale</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
            Genesi ed Estrusione delle NETs (Neutrophil Extracellular Traps)
          </h3>
          <p className="text-xs text-slate-600 mt-0.5">
            Dalla citrullinazione istonica mediata da PAD4 alla rete di DNA microbicida e alle conseguenze trombotiche e autoimmuni.
          </p>
        </div>

        {/* Pathology mode toggle */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold print:hidden">
          <button
            onClick={() => setPathologyMode('microbicida')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              pathologyMode === 'microbicida'
                ? 'bg-white text-purple-800 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Azione Fisiologica
          </button>
          <button
            onClick={() => setPathologyMode('lupus')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              pathologyMode === 'lupus'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Lupus (SLE)
          </button>
          <button
            onClick={() => setPathologyMode('trombosi')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              pathologyMode === 'trombosi'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Immunotrombosi
          </button>
        </div>
      </div>

      {/* Screen Interactive Stage */}
      <div className="print:hidden">
        {/* Interactive Visual Stage Box */}
        <div className="mt-6 bg-slate-950 rounded-xl p-5 text-white border border-slate-800 relative overflow-hidden">
        {/* Stage Navigation Buttons */}
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((s) => (
              <button
                key={s}
                onClick={() => setStage(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  stage === s
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                }`}
              >
                Stadio {s}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setStage((prev) => (prev < 4 ? prev + 1 : 1))}
              className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors"
            >
              <span>{stage === 4 ? 'Ricomincia' : 'Stadio Successivo'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* SVG Graphic of Neutrophil Morphology in NETosis */}
        <div className="relative flex items-center justify-center min-h-[220px]">
          <svg viewBox="0 0 600 220" className="w-full max-h-[220px]">
            {/* Background elements */}
            <circle cx="200" cy="110" r="85" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" strokeDasharray={stage === 4 ? "4 3" : "none"} />

            {/* STAGE 1: Polylobed Nucleus */}
            {stage === 1 && (
              <g>
                <circle cx="170" cy="90" r="22" fill="#4338ca" />
                <circle cx="230" cy="95" r="20" fill="#4338ca" />
                <circle cx="195" cy="135" r="24" fill="#4338ca" />
                <path d="M 170 90 Q 200 80 230 95 Q 220 120 195 135 Z" fill="#4338ca" />
                <text x="200" y="115" fill="#e0e7ff" fontSize="10" fontWeight="bold" textAnchor="middle">
                  Nucleo Trilobato
                </text>
                {/* Granules */}
                <circle cx="150" cy="130" r="5" fill="#f43f5e" />
                <circle cx="160" cy="70" r="4" fill="#38bdf8" />
                <circle cx="240" cy="130" r="5" fill="#f43f5e" />
                <circle cx="225" cy="65" r="4" fill="#38bdf8" />
                <circle cx="140" cy="100" r="4" fill="#eab308" />
              </g>
            )}

            {/* STAGE 2: PAD4 Citrullination & Loss of Lobes */}
            {stage === 2 && (
              <g>
                <circle cx="200" cy="110" r="55" fill="#6d28d9" stroke="#c084fc" strokeWidth="2" />
                <text x="200" y="105" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
                  PAD4 Attivata
                </text>
                <text x="200" y="125" fill="#f5d0fe" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  Istoni citrullinati (H3Cit)
                </text>
                {/* Elastase migrating */}
                <path d="M 140 100 Q 170 100 185 105" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 2" fill="none" />
                <text x="130" y="90" fill="#fda4af" fontSize="9">Elastasi ➔</text>
              </g>
            )}

            {/* STAGE 3: Chromatin Decondensation filling cytosol */}
            {stage === 3 && (
              <g>
                <circle cx="200" cy="110" r="78" fill="#4c1d95" opacity="0.8" />
                {/* Chromatin web inside */}
                <path d="M 140 90 Q 200 140 260 90 Q 160 140 210 60 Q 240 130 150 120" stroke="#c084fc" strokeWidth="2.5" fill="none" />
                <text x="200" y="112" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
                  Gel DNA + Peptidi Litici
                </text>
                <text x="200" y="130" fill="#f3e8ff" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  MPO + NE legate alla cromatina
                </text>
              </g>
            )}

            {/* STAGE 4: Extruded NETs trapping bacteria */}
            {stage === 4 && (
              <g>
                {/* Ruptured cell remnant */}
                <circle cx="160" cy="110" r="45" fill="#312e81" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 3" />
                <text x="160" y="114" fill="#fca5a5" fontSize="9" fontWeight="bold" textAnchor="middle">
                  Membrana Lisi
                </text>

                {/* Spectacular Extruded DNA Web */}
                <path
                  d="M 190 80 Q 280 20 370 70 T 520 100 T 580 150 M 190 120 Q 300 160 400 130 T 540 180 M 200 140 Q 260 200 350 170 T 480 140"
                  stroke="#a855f7"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M 280 40 L 320 160 M 360 60 L 430 180 M 460 80 L 510 170"
                  stroke="#c084fc"
                  strokeWidth="1.5"
                  strokeDasharray="3 2"
                  fill="none"
                />

                {/* Histone beads on DNA string */}
                <circle cx="320" cy="45" r="4" fill="#38bdf8" />
                <circle cx="430" cy="115" r="4" fill="#38bdf8" />
                <circle cx="480" cy="150" r="4" fill="#38bdf8" />

                {/* Trapped Microbes */}
                <g transform="translate(350, 65)">
                  <ellipse cx="15" cy="10" rx="14" ry="7" fill="#854d0e" stroke="#eab308" />
                  <text x="15" y="12" fill="#fef08a" fontSize="7" textAnchor="middle">Batterio</text>
                </g>
                <g transform="translate(450, 125)">
                  <ellipse cx="15" cy="10" rx="14" ry="7" fill="#854d0e" stroke="#eab308" />
                  <text x="15" y="12" fill="#fef08a" fontSize="7" textAnchor="middle">Batterio</text>
                </g>

                <text x="430" y="30" fill="#d8b4fe" fontSize="12" fontWeight="bold">
                  TRAPPOLE EXTRACELLULARI (NETs)
                </text>
                <text x="430" y="46" fill="#a5b4fc" fontSize="9" fontFamily="monospace">
                  Filamenti DNA + Istoni + MPO + LL-37
                </text>
              </g>
            )}
          </svg>
        </div>

        {/* Dynamic Detail Card */}
        <div className="mt-3 p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-bold text-purple-400">
              Stadio {currentStage.num}: {currentStage.title} ({currentStage.subtitle})
            </span>
            <span className="font-mono text-slate-400 text-[11px]">
              Enzimi Chiave: <strong className="text-slate-200">{currentStage.keyEnzymes}</strong>
            </span>
          </div>
          <p className="mt-1 text-slate-300 leading-relaxed font-serif-body">
            {currentStage.desc}
          </p>
        </div>
      </div>

      {/* Pathology Clinical Context Card */}
      <div className="mt-4 p-4 rounded-xl border bg-slate-50 border-slate-200 text-xs">
        {pathologyMode === 'microbicida' && (
          <div>
            <div className="flex items-center gap-2 text-purple-800 font-bold mb-1">
              <Shield className="w-4 h-4 text-purple-600" />
              <span>Funzione Fisiologica: Barriera Microbicida contro Batteri e Funghi Filamentosi</span>
            </div>
            <p className="text-slate-700 leading-relaxed font-serif-body">
              La NETosi permette ai neutrofili di catturare patogeni di dimensioni troppo elevate per essere fagocitati
              (come le ife di <em>Aspergillus</em> e <em>Candida albicans</em>) o aggregati batterici voluminosi.
              Gli istoni carichi positivamente legati al DNA esercitano un'azione diretta di lisi della membrana batterica.
            </p>
          </div>
        )}

        {pathologyMode === 'lupus' && (
          <div>
            <div className="flex items-center gap-2 text-rose-800 font-bold mb-1">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>Immunopatologia: Lupus Eritematoso Sistemico (SLE) & Mancata Degradazione</span>
            </div>
            <p className="text-slate-700 leading-relaxed font-serif-body">
              Nei pazienti con SLE, difetti nell'endonucleasi plasmatica <strong>DNasi 1</strong> impediscono la corretta digestione delle NETs.
              I complessi di DNA nativo a doppio filamento (dsDNA), istoni citrullinati e peptide antimicrobico LL-37
              vengono riconosciuti dalle cellule dendritiche plasmacitoidi (pDC) tramite TLR9, scatenando un'iperproduzione
              continua di <strong>Interferone di tipo I (IFN-α)</strong> e la sintesi di anticorpi anti-DNA (ANA e anti-dsDNA).
            </p>
          </div>
        )}

        {pathologyMode === 'trombosi' && (
          <div>
            <div className="flex items-center gap-2 text-amber-800 font-bold mb-1">
              <Activity className="w-4 h-4 text-amber-600" />
              <span>Immunotrombosi & Complicanze Vascolari della Sepsi</span>
            </div>
            <p className="text-slate-700 leading-relaxed font-serif-body">
              Lo scheletro di DNA delle NETs e gli istoni H3/H4 fungono da impalcatura solida che attiva direttamente
              la via intrinseca della coagulazione (fattore XII) e recluta piastrine, innescando la <strong>trombosi microvascolare</strong>.
              Questo meccanismo difensivo confina i microbi nei vasi infetti, ma in corso di sepsi sistemica o COVID-19 grave
              provoca coagulazione intravascolare disseminata (CID) e danno ischemico multi-organo.
            </p>
          </div>
        )}
      </div>
      </div>

      {/* Printable Unrolled Stages of NETosis (A4 Format) */}
      <div className="hidden print:block p-6 border-t border-slate-200 bg-white">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4 font-mono flex items-center justify-between border-b border-slate-300 pb-2">
          <span>Stadi della NETosi, Citrullinazione Istonica ed Effetti Patologici (Srotolati)</span>
          <span className="text-slate-500 font-mono">4 Stadi Sequenziali</span>
        </div>

        <div className="space-y-4">
          {stagesData.map((st) => (
            <div key={st.num} className="p-4 rounded-lg border border-slate-300 bg-slate-50/60 break-inside-avoid space-y-2 text-xs">
              <div className="flex items-center justify-between font-bold text-slate-900 border-b border-slate-200 pb-1">
                <span className="text-sm text-purple-900">Stadio {st.num}: {st.title} — {st.subtitle}</span>
                <span className="font-mono text-[10px] text-slate-500">Morfologia: {st.cellState}</span>
              </div>
              <p className="text-slate-800 leading-relaxed font-normal">{st.desc}</p>
              <div className="text-[11px] text-purple-900 font-mono pt-1">
                <strong>Enzimi & Fattori Chiave:</strong> {st.keyEnzymes}
              </div>
            </div>
          ))}
        </div>

        {/* Quadro Patologico Tripartito */}
        <div className="mt-5 p-4 rounded-lg border border-slate-300 bg-slate-50 break-inside-avoid text-xs space-y-3">
          <div className="font-bold text-slate-900 font-mono uppercase tracking-wider">
            Le Tre Dimensioni Fisiopatologiche delle NETs:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
            <div className="p-2.5 rounded bg-white border border-slate-200">
              <strong className="text-purple-900 block font-bold mb-1">1. Fisiologia Microbicida</strong>
              <p className="text-slate-700 leading-relaxed">
                Intrappolamento fisico di microrganismi voluminosi non fagocitabili (ife di <em>Candida</em>, <em>Aspergillus</em>) e lisi di membrana mediata da istoni carichi positivamente e peptidi LL-37.
              </p>
            </div>
            <div className="p-2.5 rounded bg-white border border-slate-200">
              <strong className="text-rose-900 block font-bold mb-1">2. Autoimmunità & Lupus (SLE)</strong>
              <p className="text-slate-700 leading-relaxed">
                Difetti genetici di <strong>DNasi 1</strong> causano persistenza di dsDNA e istoni citrullinati. Le pDC attivano TLR9 secernendo IFN-α e stimolando la produzione cronica di autoanticorpi ANA e anti-dsDNA.
              </p>
            </div>
            <div className="p-2.5 rounded bg-white border border-slate-200">
              <strong className="text-amber-900 block font-bold mb-1">3. Immunotrombosi & Sepsi</strong>
              <p className="text-slate-700 leading-relaxed">
                Il DNA extracellulare attiva il fattore XII della coagulazione e gli istoni H3/H4 reclutano piastrine. In sepsi sistemica scatena trombosi microvascolare diffusa e CID.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
