import React, { useState } from 'react';
import {
  GitMerge,
  X,
  Layers,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Shield,
  Zap,
  Activity,
  Dna,
  Cpu,
  ChevronRight
} from 'lucide-react';

interface ProcessDiagramsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToLesson?: (lessonNumber: number, sectionId?: string) => void;
}

export const ProcessDiagramsModal: React.FC<ProcessDiagramsModalProps> = ({
  isOpen,
  onClose,
  onNavigateToLesson
}) => {
  const [selectedDiagram, setSelectedDiagram] = useState<
    'complement' | 't_activation' | 'germinal_center' | 'cancer_cycle' | 'hiv_cycle'
  >('complement');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-600/30 text-indigo-400 border border-indigo-500/30">
              <GitMerge className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Diagrammi di Flusso & Schemi di Processo Immunologico</span>
              </h3>
              <p className="text-xs text-slate-400">
                Mappe concettuali dei meccanismi complessi con tappe molecolari sequenziali e punti di regolazione
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector Ribbon */}
        <div className="p-3 bg-slate-100 border-b border-slate-200 flex flex-wrap gap-1.5 text-xs font-semibold">
          {[
            { id: 'complement', label: '1. Cascata del Complemento (3 Vie & MAC)' },
            { id: 't_activation', label: '2. I Tre Segnali di Attivazione T' },
            { id: 'germinal_center', label: '3. Reazione Centro Germinativo' },
            { id: 'cancer_cycle', label: '4. Ciclo Cancro-Immunità (7 Step)' },
            { id: 'hiv_cycle', label: '5. Infezione & Replicazione HIV-1' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedDiagram(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedDiagram === tab.id
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Diagram Canvas Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 bg-slate-50 space-y-6">
          {/* 1. DIAGRAMMA CASCATA DEL COMPLEMENTO */}
          {selectedDiagram === 'complement' && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                  Lezione 15 · Il Sistema del Complemento
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5">
                  Architettura Integrata delle Tre Vie di Attivazione, Amplificazione C3 e Lisi da MAC
                </h4>
              </div>

              {/* 3 Starting Pathways */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                {/* Via Classica */}
                <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/60 space-y-2">
                  <span className="font-mono font-bold text-blue-800 uppercase block">Via Classica</span>
                  <div className="font-bold text-slate-900">Trigger: Immunocomplessi (IgG / IgM)</div>
                  <p className="text-slate-600 leading-normal">
                    C1q si lega a 2+ Fc → autoattivazione di C1r e C1s. C1s cliva C4 e C2.
                  </p>
                  <div className="p-2 rounded bg-white font-mono text-[11px] text-blue-900 font-bold border border-blue-100 text-center">
                    C4b + C2b → C4b2b (C3 Convertasi)
                  </div>
                </div>

                {/* Via Lectinica */}
                <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/60 space-y-2">
                  <span className="font-mono font-bold text-emerald-800 uppercase block">Via Lectinica</span>
                  <div className="font-bold text-slate-900">Trigger: Residui di Mannosio Microbico</div>
                  <p className="text-slate-600 leading-normal">
                    MBL o Ficoline legano zuccheri → attivazione di MASP-1 e MASP-2. Clivaggio di C4 e C2.
                  </p>
                  <div className="p-2 rounded bg-white font-mono text-[11px] text-emerald-900 font-bold border border-emerald-100 text-center">
                    C4b + C2b → C4b2b (C3 Convertasi)
                  </div>
                </div>

                {/* Via Alternativa */}
                <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/60 space-y-2">
                  <span className="font-mono font-bold text-purple-800 uppercase block">Via Alternativa</span>
                  <div className="font-bold text-slate-900">Trigger: Tick-Over Spontaneo & Superfici</div>
                  <p className="text-slate-600 leading-normal">
                    Idrolisi di C3 in C3(H2O) → legame con Fattore B → clivaggio da Fattore D.
                  </p>
                  <div className="p-2 rounded bg-white font-mono text-[11px] text-purple-900 font-bold border border-purple-100 text-center">
                    C3b + Bb → C3bBb (C3 Convertasi + Properdina)
                  </div>
                </div>
              </div>

              {/* Convergence Arrow */}
              <div className="flex justify-center">
                <div className="p-2 rounded-full bg-slate-200 text-slate-600">
                  <ArrowDown className="w-5 h-5" />
                </div>
              </div>

              {/* C3 Cleavage & Amplification */}
              <div className="p-4 rounded-xl border border-slate-300 bg-white shadow-xs space-y-3">
                <div className="text-center font-bold text-sm text-slate-900">
                  Punto di Convergenza Centrale: Clivaggio di C3
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
                    <span className="font-mono font-bold text-amber-800 block mb-1">C3a (Anafilatossina Solubile)</span>
                    <p className="text-slate-700">Degranulazione mastociti, permeabilità vascolare, broncocostrizione.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-200">
                    <span className="font-mono font-bold text-indigo-800 block mb-1">C3b (Legame Tioestere Membrana)</span>
                    <p className="text-slate-700">Opsonizzazione via CR1/CR3 + Ancoraggio alla C3 convertasi per generare C5 convertasi!</p>
                  </div>
                </div>
              </div>

              {/* Convergence to Terminal Stage */}
              <div className="flex justify-center">
                <div className="p-2 rounded-full bg-slate-200 text-slate-600">
                  <ArrowDown className="w-5 h-5" />
                </div>
              </div>

              {/* C5 Convertase & MAC */}
              <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/70 text-xs space-y-3">
                <div className="font-bold text-sm text-rose-950 flex items-center justify-between">
                  <span>C5 Convertasi (C4b2b3b o C3bBb3b) & Complesso MAC</span>
                  <span className="font-mono text-rose-700">Lisi Osmotica Terminale</span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 text-center font-mono font-bold">
                  <span className="px-2.5 py-1 bg-white rounded border border-rose-300 text-rose-900">C5 clivato in C5b (+ C5a)</span>
                  <ArrowRight className="w-4 h-4 text-rose-400" />
                  <span className="px-2.5 py-1 bg-white rounded border border-rose-300 text-rose-900">+ C6 e C7</span>
                  <ArrowRight className="w-4 h-4 text-rose-400" />
                  <span className="px-2.5 py-1 bg-white rounded border border-rose-300 text-rose-900">+ C8</span>
                  <ArrowRight className="w-4 h-4 text-rose-400" />
                  <span className="px-3 py-1 bg-rose-600 text-white rounded shadow-xs">Polimerizzazione 10-16 C9 (Poro MAC 10 nm)</span>
                </div>
              </div>
            </div>
          )}

          {/* 2. DIAGRAMMA I TRE SEGNALI DI ATTIVAZIONE T */}
          {selectedDiagram === 't_activation' && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                  Lezione 12 & 19 · Attivazione Linfocitaria T
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5">
                  La Triade dei Segnali di Attivazione & Differenziamento Effettore Th
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                {/* Segnale 1 */}
                <div className="p-4 rounded-xl border border-blue-200 bg-white shadow-xs space-y-2.5">
                  <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-bold flex items-center justify-center">1</span>
                  <div className="font-bold text-slate-900 text-sm">Segnale 1: Riconoscimento Antigenico</div>
                  <div className="p-2.5 rounded bg-blue-50 border border-blue-200 font-mono text-[11px] text-blue-900 font-semibold">
                    TCR + CD3 + Corecettore (CD4 / CD8) legano pMHC
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Fosforilazione dei motivi ITAM di CD3 da Lck/Fyn → attivazione di ZAP-70 → cascata NFAT, NF-κB, AP-1.
                  </p>
                  <div className="p-2 rounded bg-amber-50 border border-amber-200 text-amber-900 font-semibold text-[11px]">
                    Segnale 1 isolato = Induzione di Anergia Clonale!
                  </div>
                </div>

                {/* Segnale 2 */}
                <div className="p-4 rounded-xl border border-emerald-200 bg-white shadow-xs space-y-2.5">
                  <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-mono font-bold flex items-center justify-center">2</span>
                  <div className="font-bold text-slate-900 text-sm">Segnale 2: Costimolazione Obbligata</div>
                  <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200 font-mono text-[11px] text-emerald-900 font-semibold">
                    CD28 (sul T) lega B7-1 (CD80) / B7-2 (CD86) sull'APC
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Attivazione di PI3K/Akt → stabilizzazione mRNA di IL-2 → espressione di Bcl-xL anti-apoptotico e proliferazione clonale.
                  </p>
                  <div className="p-2 rounded bg-rose-50 border border-rose-200 text-rose-900 font-semibold text-[11px]">
                    Freno inibitorio competitivo: CTLA-4 (rimuove B7 per trans-endocitosi).
                  </div>
                </div>

                {/* Segnale 3 */}
                <div className="p-4 rounded-xl border border-purple-200 bg-white shadow-xs space-y-2.5">
                  <span className="w-7 h-7 rounded-lg bg-purple-600 text-white font-mono font-bold flex items-center justify-center">3</span>
                  <div className="font-bold text-slate-900 text-sm">Segnale 3: Citochine Polarizzanti</div>
                  <div className="p-2.5 rounded bg-purple-50 border border-purple-200 font-mono text-[11px] text-purple-900 font-semibold">
                    Citochine secrete dall'APC e dal microambiente
                  </div>
                  <ul className="space-y-1 text-slate-700 leading-normal">
                    <li>• <strong>IL-12 + IFN-γ:</strong> attiva T-bet → profilo <strong>Th1</strong> (IFN-γ, CTL).</li>
                    <li>• <strong>IL-4:</strong> attiva GATA-3 → profilo <strong>Th2</strong> (IL-4, IL-5, IgE).</li>
                    <li>• <strong>IL-6 + IL-23:</strong> attiva RORγt → profilo <strong>Th17</strong> (IL-17, neutrofili).</li>
                    <li>• <strong>TGF-β + IL-2:</strong> attiva FoxP3 → profilo <strong>Treg</strong> (soppressione).</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* 3. REAZIONE CENTRO GERMINATIVO */}
          {selectedDiagram === 'germinal_center' && (
            <div className="space-y-5">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                  Lezione 13 · Centro Germinativo & Maturazione B
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5">
                  Dinamica Bicompartimentale: Zona Scura (Mutazione) vs Zona Chiara (Selezione)
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl border border-slate-700 bg-slate-900 text-white space-y-2">
                  <span className="font-mono text-purple-300 font-bold uppercase block">1. Zona Scura (Centroblasti)</span>
                  <div className="font-bold text-sm text-white">Proliferazione Clonale & Ipermutazione (SHM)</div>
                  <p className="text-slate-300 leading-relaxed">
                    I linfociti B proliferano rapidissimamente sotto lo stimolo di CXCR4. L'enzima <strong>AID</strong> deamina le citosine nei geni delle regioni variabili (V), introducendo mutazioni casuali nelle regioni ipervariabili CDR.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/60 text-slate-800 space-y-2">
                  <span className="font-mono text-blue-800 font-bold uppercase block">2. Zona Chiara (Centrociti)</span>
                  <div className="font-bold text-sm text-slate-900">Selezione per Sopravvivenza & Switch Isotipico</div>
                  <p className="text-slate-700 leading-relaxed">
                    I centrociti competono per legare l'antigene esposto sulle <strong>FDC (Cellule Dendritiche Follicolari)</strong>. Solo chi ha acquisito affinità superiore cattura l'antigene e riceve il segnale salvavita di CD40L e IL-21 dai linfociti <strong>Tfh</strong>.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-emerald-300 bg-emerald-50 text-xs text-emerald-950 flex items-center justify-between">
                <div>
                  <strong>Esito della Selezione:</strong> Differenziamento in <strong>Plasmacellule ad altissima affinità</strong> a lunga sopravvivenza o <strong>Linfociti B di Memoria</strong>.
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              </div>
            </div>
          )}

          {/* 4. CICLO CANCRO-IMMUNITA */}
          {selectedDiagram === 'cancer_cycle' && (
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                  Lezione 32 · The Cancer-Immunity Cycle (Chen & Mellman)
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5">
                  I 7 Step Sequenziali dell'Immunosorveglianza & Punti di Fuga Tumorale
                </h4>
              </div>

              <div className="space-y-2 text-xs">
                {[
                  { step: 1, title: 'Rilascio di Antigeni Tumorali & DAMPs', desc: 'Morte cellulare neoplastica da stress genotossico o radioterapia.' },
                  { step: 2, title: 'Cross-Presentazione da Cellule Dendritiche', desc: 'Captazione e trasporto nei linfonodi sentinella da cDC1.' },
                  { step: 3, title: 'Priming & Attivazione Linfonodale', desc: 'Attivazione di CTL CD8+ (bersaglio di blocco: CTLA-4 / Ipilimumab).' },
                  { step: 4, title: 'Trafficking dei Linfociti T al Tumore', desc: 'Migrazione endoteliale guidata da chemochine (CXCL9, CXCL10).' },
                  { step: 5, title: 'Infiltrazione nel Letto Tumorale', desc: 'Superamento delle barriere stromali (immunotipo Desert / Excluded / Inflamed).' },
                  { step: 6, title: 'Riconoscimento Specifico pMHC-I', desc: 'Legame TCR al neoantigene (fuga da downregulation di HLA-I e β2m).' },
                  { step: 7, title: 'Uccisione Citotossica (Perforina / Granzimi)', desc: 'Lisi del clone (blocco da asse PD-1/PD-L1 ripristinato da Nivolumab).' }
                ].map((s) => (
                  <div key={s.step} className="p-3 rounded-lg border border-slate-200 bg-white flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-blue-600 text-white font-mono font-bold flex items-center justify-center shrink-0 text-xs">
                      {s.step}
                    </span>
                    <div className="flex-1">
                      <strong className="text-slate-900">{s.title}</strong>
                      <span className="text-slate-500 ml-2">— {s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. CICLO REPLICATIVO HIV-1 */}
          {selectedDiagram === 'hiv_cycle' && (
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-700">
                  Lezione 33 · Biologia & Farmacologia di HIV-1
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5">
                  Tappe dell'Ingresso, Retrotrascrizione, Integrazione ed Effetto Farmaci
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1.5">
                  <span className="font-mono font-bold text-red-700">1. Attacco & Corecettore</span>
                  <p className="text-slate-700">gp120 lega CD4 → cambio conformazionale → ansa V3 lega CCR5 o CXCR4.</p>
                  <span className="text-[11px] font-mono text-emerald-700 font-bold">Target: Maraviroc (anti-CCR5)</span>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1.5">
                  <span className="font-mono font-bold text-red-700">2. Fusione di Membrana</span>
                  <p className="text-slate-700">gp41 estende l'arpione idrofobico formando il six-helix bundle.</p>
                  <span className="text-[11px] font-mono text-emerald-700 font-bold">Target: Enfuvirtide (T-20)</span>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1.5">
                  <span className="font-mono font-bold text-red-700">3. Retrotrascrizione (RT)</span>
                  <p className="text-slate-700">Conversione di ssRNA virale in dsDNA provirale senza proofreading.</p>
                  <span className="text-[11px] font-mono text-emerald-700 font-bold">Target: NRTI (Tenofovir) / NNRTI</span>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1.5">
                  <span className="font-mono font-bold text-red-700">4. Integrazione nel Genoma</span>
                  <p className="text-slate-700">L'integrasi (IN) inserisce il provirus nel DNA ospite guidata da LTR.</p>
                  <span className="text-[11px] font-mono text-emerald-700 font-bold">Target: INSTI (Dolutegravir)</span>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1.5 col-span-1 sm:col-span-2">
                  <span className="font-mono font-bold text-red-700">5. Trascrizione, Gemmazione & Clivaggio da Proteasi</span>
                  <p className="text-slate-700">Tat attiva l'allungamento; i virioni gemmati maturano grazie al taglio di Gag-Pol mediato dalla proteasi virale.</p>
                  <span className="text-[11px] font-mono text-emerald-700 font-bold">Target: Inibitori di Proteasi (Darunavir/Ritonavir)</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 border-t border-slate-200 bg-white flex justify-between items-center text-xs text-slate-500">
          <span>Schemi di processo didattici conformi al programma d'esame</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-colors"
          >
            Chiudi Schemi
          </button>
        </div>
      </div>
    </div>
  );
};
