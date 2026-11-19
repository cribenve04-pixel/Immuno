import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import React, { useState } from 'react';
import { InteractiveSynapseSimulator } from './InteractiveSynapseSimulator';
import { InteractiveTraffickingSimulator } from './InteractiveTraffickingSimulator';
import {
  LYMPHOID_DISTRIBUTION_DATA,
  DC_MATURATION_COMPARISON,
  THREE_SIGNALS_DATA,
  PHARMACOLOGICAL_TARGETS,
  QUIZ_LEZIONE_12,
  FLASHCARDS_LEZIONE_12
} from '../data/lezione12Content';
import { ConceptMapFlow } from './ConceptMapFlow';
import { MAP_LEZIONE_12_SMAC_ZONATION } from '../data/conceptMapsData';
import {
  Layers,
  Shield,
  Zap,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ChevronRight,
  ShieldAlert,
  Dna,
  Activity,
  Sparkles,
  Info,
  Check,
  Microscope,
  Stethoscope,
  Pill,
  Clock,
  Flame,
  FileText,
  AlertCircle,
  Users,
  Compass,
  Award,
  Lock,
  Unlock,
  Sliders,
  Brain,
  Droplets,
  HeartHandshake,
  BookOpen
} from 'lucide-react';

interface Lezione12ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione12View: React.FC<Lezione12ViewProps> = ({ isSerif, fontSize }) => {
  // Navigation active tab
  const [activeTab, setActiveTab] = useState<'textbook' | 'synapse_sim' | 'trafficking_sim' | 'quiz' | 'flashcards'>('textbook');

  // Quiz state
  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  return (
    <div className="space-y-10">
      {/* Textbook Hero Header */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white">
          <div className="flex flex-wrap items-center gap-2 text-xs text-indigo-300 mb-3 font-mono">
            <span>Corso di Laurea Magistrale in Medicina e Chirurgia</span>
            <span aria-hidden="true">·</span>
            <span>Immunologia Clinica e Molecolare</span>
            <span aria-hidden="true">·</span>
            <span className="bg-indigo-800/80 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700">
              Lezione 12 / 33
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
            Attivazione dei Linfociti T, Sinapsi Immunologica, Segnali di Costimolazione e Checkpoint Inibitori (CTLA-4, PD-1)
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-4 font-mono">
            <span><strong>Docente:</strong> Prof.ssa Ricciarda Galandrini</span>
            <span>·</span>
            <span><strong>Data:</strong> 25 e 27 Ottobre 2025</span>
            <span>·</span>
            <span><strong>Sbobinatori:</strong> D. Barbuto, M.C. Dellomonaco</span>
            <span>·</span>
            <span><strong>Revisori:</strong> B. Bocelli, C. D'Alessandro</span>
          </div>

          {/* Quick Stats Pill Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800 text-xs">
            <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700">
              <span className="text-slate-400 block text-[11px]">Pool Linfocitario Totale</span>
              <span className="text-base font-bold text-emerald-400 font-mono">~460 Miliardi</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700">
              <span className="text-slate-400 block text-[11px]">Quota nei Linfonodi (~500)</span>
              <span className="text-base font-bold text-indigo-300 font-mono">190 Miliardi (41%)</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700">
              <span className="text-slate-400 block text-[11px]">Quota Circolante Ematica</span>
              <span className="text-base font-bold text-amber-300 font-mono">10 Miliardi (2.2%)</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700">
              <span className="text-slate-400 block text-[11px]">Nobel Medicina 2018</span>
              <span className="text-base font-bold text-cyan-300 font-mono">CTLA-4 & PD-1</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation Strip */}
        <div className="flex items-center gap-2 px-6 py-3 bg-slate-50 border-b border-slate-200 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('textbook')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'textbook'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Manuale Completo</span>
          </button>
          <button
            onClick={() => setActiveTab('synapse_sim')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'synapse_sim'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Simulatore Sinapsi & Checkpoint</span>
          </button>
          <button
            onClick={() => setActiveTab('trafficking_sim')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'trafficking_sim'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Simulatore Trafficking (CD69/S1PR1)</span>
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'quiz'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Quiz & Domande Slide Docente (12)</span>
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'flashcards'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Flashcard Deck (12)</span>
          </button>
        </div>
      </div>

      {/* VIEW: SYNAPSE SIMULATOR */}
      {activeTab === 'synapse_sim' && (
        <div>
          <InteractiveSynapseSimulator />
          <div className="text-center mt-4">
            <button
              onClick={() => setActiveTab('textbook')}
              className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold underline"
            >
              ← Torna alla trattazione teorica nel testo
            </button>
          </div>
        </div>
      )}

      {/* VIEW: TRAFFICKING SIMULATOR */}
      {activeTab === 'trafficking_sim' && (
        <div>
          <InteractiveTraffickingSimulator />
          <div className="text-center mt-4">
            <button
              onClick={() => setActiveTab('textbook')}
              className="text-xs text-teal-600 hover:text-teal-800 font-semibold underline"
            >
              ← Torna alla trattazione teorica nel testo
            </button>
          </div>
        </div>
      )}

      {/* VIEW: QUIZ */}
      {activeTab === 'quiz' && (
        <QuizSection customQuestions={QUIZ_LEZIONE_12} lessonNumber={12} title="Verifica dell'Apprendimento · Lezione 12" />
      )}

      {/* VIEW: FLASHCARDS */}
      {activeTab === 'flashcards' && (
        <FlashcardDeck cards={FLASHCARDS_LEZIONE_12} lessonNumber={12} title="Flashcard di Ripasso Attivo · Lezione 12" />
      )}

      {/* VIEW: TEXTBOOK */}
      {activeTab === 'textbook' && (
        <article className={`space-y-12 ${proseFontClass} ${proseSizeClass}`}>
          {/* SECTION 1: ARCHITETTURA E TRAFFICKING NEI TESSUTI */}
          <section id="sec-12-1" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Microscope className="w-4 h-4" />
              <span>Sezione 12.1</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              Distribuzione Quantitativa dei Linfociti nei Tessuti e Dinamica della Circolazione Linfatica
            </h2>

            <div className="space-y-4 text-slate-700">
              <p>
                Il sistema immunitario adattativo umano possiede un patrimonio complessivo stimato in circa <strong>460 miliardi di linfociti</strong>. Contrariamente alla percezione comune che considera il sangue periferico il compartimento linfoide principale, il circolo ematico contiene soltanto circa <strong>10 miliardi di linfociti</strong> (corrispondenti a poco più del <strong>2%</strong> dell’intero pool corporeo). Il sangue funge esclusivamente da mezzo di transito rapido e ridistribuzione emodinamica tra i veri organi di sorveglianza e riserva.
              </p>

              <p>
                La quota preponderante dei linfociti risiede negli organi linfoidi secondari, in primo luogo nei circa <strong>500 linfonodi</strong> distribuiti lungo le vie linfatiche (con ben <strong>190 miliardi di cellule, ~41.3%</strong>), seguiti dalla <strong>milza</strong> (70 miliardi, ~15.2%), dal <strong>midollo osseo</strong> (50 miliardi, che funge da nicchia trofica di sopravvivenza per le plasmacellule e i T memoria) e dai tessuti barriera mucosali e cutanei (50 miliardi nel GALT intestinale, 30 miliardi nei polmoni, 20 miliardi nella cute).
              </p>

              {/* Table of Lymphoid Distribution */}
              <div className="my-6 overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white font-mono">
                      <th className="p-3">Distretto Anatomico / Organo</th>
                      <th className="p-3 text-right">Linfociti (Miliardi)</th>
                      <th className="p-3 text-right">Percentuale (%)</th>
                      <th className="p-3">Ruolo Fisiologico Preponderante</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-sans">
                    {LYMPHOID_DISTRIBUTION_DATA.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                        <td className="p-3 font-semibold text-slate-900">{row.district}</td>
                        <td className="p-3 text-right font-mono font-bold text-indigo-700">{row.countBillion}</td>
                        <td className="p-3 text-right font-mono text-slate-600">{row.percentage}%</td>
                        <td className="p-3 text-slate-600">
                          <div>{row.functionalRole}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">{row.notes}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
                Circolazione Centripeta della Linfa & Venule ad Endotelio Alto (HEV)
              </h3>
              <p>
                La linfa si forma continuamente per drenaggio del fluido interstiziale periferico e scorre secondo una rigorosa circolazione centripeta:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800 space-y-1">
                <div>Interstizio Tessutale Periferico → Capillari Linfatici a fondo cieco</div>
                <div>→ Vasi Linfatici Afferenti (provvisti di valvole a nido di rondine)</div>
                <div>→ Seno Sottocapsulare del Linfonodo → Seni Corticali & Parenchima Paracorticale (Zona T)</div>
                <div>→ Seni Midollari → Vaso Linfatico Efferente (che emerge dall’ilo)</div>
                <div>→ Tronchi Linfatici Principali → Dotto Toracico (e dotto linfatico destro)</div>
                <div>→ Immissione nel Sistema Venoso (giunzione giugulo-succlavia / Vena Cava Superiore).</div>
              </div>

              <p>
                L'ingresso dei linfociti T naïve dal circolo ematico al linfonodo non avviene casualmente, bensì attraverso un distretto microvascolare specializzato: le <strong>Venule ad Endotelio Alto (HEV, High Endothelial Venules)</strong>, situate nella paracorticale. L’endotelio di queste venule è caratterizzato da cellule cuboidi rigonfie che espumano la chemochina <strong>CCL21</strong>. I linfociti T naïve circolanti esprimono il recettore chemochinico <strong>CCR7</strong> e la molecola di adesione <strong>L-selectina (CD62L)</strong>: l’interazione CCR7:CCL21 arresta il rolling dei linfociti, innesca l’attivazione inside-out dell’integrina LFA-1 e induce la diapedesi selettiva nella zona T paracorticale.
              </p>
            </div>
          </section>

          {/* SECTION 2: MATURAZIONE DELLA CELLULA DENDRITICA */}
          <section id="sec-12-2" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Microscope className="w-4 h-4" />
              <span>Sezione 12.2</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              Maturazione Funzionale e Fenotipica della Cellula Dendritica (APC)
            </h2>

            <div className="space-y-4 text-slate-700">
              <p>
                La cellula dendritica convenzionale (cDC) è l'unica APC capace di effettuare il <strong>priming</strong> primario dei linfociti T naïve. Nei tessuti periferici (es. cute dove prende il nome storico di <em>Cellula di Langerhans</em>), la dendritica si trova in uno stato immaturo sentinella, ottimizzato per l’endocitosi continua:
              </p>

              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>
                  <strong>Endocitosi e Pinocitosi ad elevata efficienza:</strong> macropinocitosi fluida, fagocitosi recettore-mediata tramite recettori lectinici di tipo C (CLR come Dectina-1, Recettore del Mannosio e DC-SIGN).
                </li>
                <li>
                  <strong>Basso livello di molecole MHC-II in membrana:</strong> le molecole MHC-II neosintetizzate hanno una breve emivita a causa dell’ubiquitinazione mediata dalla ligasi <strong>MARCH1</strong>, che ne induce la rapida degradazione endolisosomiale.
                </li>
                <li>
                  <strong>Assenza di molecole costimolatorie (B7-1 e B7-2):</strong> una cellula dendritica immatura che campiona antigeni self periferici non può fornire il Segnale 2, prevenendo reazioni autoimmuni distruttive.
                </li>
              </ul>

              <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-950 text-xs sm:text-sm my-4">
                <span className="font-bold flex items-center gap-1.5 mb-1 text-indigo-900">
                  <Flame className="w-4 h-4" />
                  Lo Switch della Maturazione (PAMPs, DAMPs & TLRs):
                </span>
                Quando i recettori PRR della DC (come i TLR superficiali TLR2/4 o endosomiali TLR3/7/8/9) riconoscono pattern microbici o segnali di allarme endogeno (DAMP), la trascrizione genica viene radicalmente riprogrammata:
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 font-mono text-[11px]">
                  <div className="bg-white/80 p-2 rounded border border-indigo-100">
                    • Downregulation di MARCH1 → Stabilizzazione MHC-II (emivita &gt;40h)
                  </div>
                  <div className="bg-white/80 p-2 rounded border border-indigo-100">
                    • Iper-espressione di B7-1 (CD80) e B7-2 (CD86)
                  </div>
                  <div className="bg-white/80 p-2 rounded border border-indigo-100">
                    • Comparsa massiva del recettore CCR7 (homing al linfonodo)
                  </div>
                  <div className="bg-white/80 p-2 rounded border border-indigo-100">
                    • Switch metabolico verso la Glicolisi Aerobica (Warburg immunitario)
                  </div>
                </div>
              </div>

              {/* Table DC comparison */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs my-4">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white font-mono">
                      <th className="p-3">Caratteristica Molecolare</th>
                      <th className="p-3">DC Immatura (Tessuto Periferico)</th>
                      <th className="p-3">DC Matura (Paracorticale Linfonodo)</th>
                      <th className="p-3">Significato Fisiopatologico</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {DC_MATURATION_COMPARISON.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                        <td className="p-3 font-semibold text-slate-900">{row.feature}</td>
                        <td className="p-3 text-slate-700">{row.immatureDC}</td>
                        <td className="p-3 text-indigo-900 font-medium">{row.matureDC}</td>
                        <td className="p-3 text-slate-500 text-[11px]">{row.significance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION 3: I TRE SEGNALI & LA SINAPSI IMMUNOLOGICA */}
          <section id="sec-12-3" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Microscope className="w-4 h-4" />
              <span>Sezione 12.3</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              I Tre Segnali dell'Attivazione T & Architettura della Sinapsi Immunologica (SMAC)
            </h2>

            <div className="space-y-4 text-slate-700">
              <p>
                L'attivazione clonale di un linfocita T naïve non è un evento binario on/off guidato dal solo legame antigenico, bensì un processo rigidamente controllato che richiede la cooperazione simultanea di <strong>tre segnali sequenziali e complementari</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                {THREE_SIGNALS_DATA.map((sig, sIdx) => (
                  <div key={sIdx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider mb-1">
                        {sig.signalName}
                      </div>
                      <div className="text-xs text-slate-800 font-semibold mb-2">
                        {sig.molecularActors}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {sig.biologicalConsequence}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] text-amber-800 font-medium">
                      <strong>Conseguenza del Deficit:</strong> {sig.deficiencyPhenotype}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm my-4">
                <span className="font-bold flex items-center gap-1.5 mb-1 text-amber-900">
                  <AlertTriangle className="w-4 h-4" />
                  Perla d'Esame: Il Paradosso dell'Anergia Clonale
                </span>
                Se un linfocita T naïve riconosce il suo antigene specifico tramite il TCR (Segnale 1) su una cellula non-professionale o su una DC immatura priva delle molecole costimolatorie B7-1 e B7-2 (assenza di Segnale 2), il clone non solo non si attiva, ma entra in uno stato di <strong>Anergia Clonale irreversibile</strong>. Anche qualora in futuro lo stesso linfocita venisse ristimolato dallo stesso antigene in presenza di massiccia costimolazione, non risponderà più. Questo rappresenta uno dei pilastri biochimici della <strong>tolleranza periferica</strong> contro i tessuti dell'organismo.
              </div>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">
                Architettura Concentrica della Sinapsi Immunologica (SMAC)
              </h3>
              <p>
                Quando il linfocita T stabilisce il contatto con l'APC matura, i recettori di membrana e il citoscheletro di actina si riorganizzano in una piattaforma microscopica altamente ordinata denominata <strong>SMAC (Supramolecular Activation Cluster)</strong> o <em>Sinapsi Immunologica</em>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
                <div className="p-4 rounded-xl bg-indigo-950 text-white border border-indigo-900">
                  <div className="text-xs font-mono font-bold text-indigo-300 uppercase mb-1">
                    cSMAC (Central SMAC)
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Zona centrale a ridosso dell'interfaccia di contatto (~15 nm). Raggruppa i complessi <strong>TCR/CD3</strong>, i corecettori <strong>CD4 o CD8</strong>, il costimolatore <strong>CD28</strong> legato a B7, e le tirosin-chinasi <strong>Lck</strong> e <strong>ZAP-70</strong>. È il cuore pulsante della trasduzione biochimica primaria.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-teal-950 text-white border border-teal-900">
                  <div className="text-xs font-mono font-bold text-teal-300 uppercase mb-1">
                    pSMAC (Peripheral SMAC)
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Anello concentrico adesivo costituito dall'integrina <strong>LFA-1 (αLβ2 / CD11a:CD18)</strong> legata al suo controrecettore <strong>ICAM-1 (CD54)</strong> sull'APC. Il segnale inside-out scatenato dal TCR estende la conformazione di LFA-1 aumentandone l'affinità di 1000 volte e sigillando la giunzione cellulare.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <div className="text-xs font-mono font-bold text-amber-300 uppercase mb-1">
                    dSMAC (Distal SMAC)
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Anello esterno periferico in cui vengono relegate per esclusione sterica le molecole dotate di ectodomini glicosilati voluminosi (come la fosfatasi <strong>CD45</strong> e <strong>CD43</strong>). L'allontanamento fisico di CD45 dal centro della sinapsi impedisce la defosforilazione precoce di Lck e ZAP-70.
                  </p>
                </div>
              </div>

              {/* Button to open interactive simulator */}
              <div className="mt-4 p-4 rounded-xl bg-indigo-50 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-indigo-900">
                  <strong>Laboratorio Virtuale:</strong> Sperimenta in tempo reale la manipolazione della sinapsi, la competizione CTLA-4/CD28 e l'effetto della Ciclosporina A nel simulatore interattivo dedicato.
                </div>
                <button
                  onClick={() => setActiveTab('synapse_sim')}
                  className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shrink-0 flex items-center gap-1.5 shadow-xs transition-colors"
                >
                  <Activity className="w-4 h-4" />
                  <span>Apri Simulatore Sinapsi</span>
                </button>
              </div>

              {/* Mappa Concettuale di Fine Paragrafo: Architettura della Sinapsi Immunologica (SMAC) */}
              <ConceptMapFlow {...MAP_LEZIONE_12_SMAC_ZONATION} />
            </div>
          </section>

          {/* SECTION 4: TRASDUZIONE BIOCHIMICA DEL TCR E CALCINEURINA */}
          <section id="sec-12-4" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Microscope className="w-4 h-4" />
              <span>Sezione 12.4</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              Biochimica della Trasduzione Intracellulare del TCR: Dagli ITAM alla Trascrizione di IL-2
            </h2>

            <div className="space-y-4 text-slate-700">
              <p>
                Il recettore TCR αβ possiede code citoplasmatiche estremamente corte (soli 3-4 aminoacidi), del tutto prive di attività catalitica intrinseca. La trasduzione del segnale è interamente delegata alle subunità invarianti associate che formano il complesso del recettore:
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs font-mono text-slate-800">
                <div>• Eterodimero CD3 γε (1 ITAM su γ + 1 ITAM su ε = 2 ITAM)</div>
                <div>• Eterodimero CD3 δε (1 ITAM su δ + 1 ITAM su ε = 2 ITAM)</div>
                <div>• Omodimero o eterodimero ζζ (3 ITAM per catena ζ = 6 ITAM)</div>
                <div className="font-bold text-indigo-800 pt-1 border-t border-slate-200">
                  TOTALE: 10 Motivi ITAM (Immunoreceptor Tyrosine-based Activation Motif) per complesso TCR funzionale!
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-900 mt-5 mb-2">
                La Cascata Enzimatica Sequenziale:
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong>Attivazione di Lck:</strong> la tirosin-chinasi Lck, associata fisicamente alle code citoplasmatiche dei corecettori CD4 o CD8, viene defosforilata sulla tirosina inibitoria terminale da CD45 e fosforila i due residui di tirosina conservati all’interno di ciascun motivo ITAM.
                </li>
                <li>
                  <strong>Reclutamento di ZAP-70:</strong> la tirosin-chinasi solubile <strong>ZAP-70</strong> si ancora saldamente ai doppi residui fosforilati degli ITAM della catena ζ tramite i suoi due domini tandem <strong>SH2</strong>. Una volta agganciata, Lck fosforila e attiva cataliticamente ZAP-70.
                </li>
                <li>
                  <strong>Assemblaggio del Signalosoma LAT / SLP-76:</strong> ZAP-70 fosforila residui multipli di tirosina sulla proteina adattatrice transmembrana <strong>LAT (Linker for Activation of T cells)</strong> e sull'adattatore citosolico <strong>SLP-76</strong>, creando una piattaforma di reclutamento per la <strong>Fosfolipasi C-γ1 (PLC-γ1)</strong>.
                </li>
                <li>
                  <strong>Idrolisi di PIP2:</strong> la PLC-γ1 attivata catalizza l'idrolisi del fosfolipide di membrana fosfatidilinositolo 4,5-bifosfato (PIP2) in due secondi messaggeri cruciali:
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
                    <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                      <span className="font-bold text-indigo-900 font-mono block mb-1">
                        A) Inositolo 1,4,5-trifosfato (IP3)
                      </span>
                      Molecola polare idrosolubile che diffonde nel citoplasma e si lega ai recettori-canale per il calcio sul reticolo endoplasmatico, inducendo lo svuotamento dei depositi intracellulari di Ca²⁺. La deplezione di Ca²⁺ nel reticolo viene avvertita dalla proteina sensore STIM1, che oligomerizza e apre i canali di membrana <strong>CRAC (costituiti da subunità Orai1)</strong>. Si genera così un flusso massiccio e prolungato di ioni Ca²⁺ dall’esterno verso il citosol.
                    </div>

                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <span className="font-bold text-amber-900 font-mono block mb-1">
                        B) Diacilglicerolo (DAG)
                      </span>
                      Molecola lipidica idrofobica che rimane inserita nella membrana plasmatica. Recluta ed attiva due importanti vie: la <strong>Protein Chinasi C-θ (PKC-θ)</strong>, che fosforila il complesso IKK portando alla degradazione di IκB e alla traslocazione nucleare di <strong>NF-κB</strong>; e il fattore <strong>Ras-GRP</strong>, che accende la cascata delle MAP-chinasi (Raf-MEK-ERK) culminando nella fosforilazione di c-Fos e c-Jun per l'assemblaggio del fattore <strong>AP-1</strong>.
                    </div>
                  </div>
                </li>
              </ol>

              {/* Clinical Focus: Calcineurin and Cyclosporine */}
              <div className="p-5 rounded-xl bg-slate-900 text-white border border-slate-800 my-6">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Pill className="w-4 h-4" />
                  <span>Target Farmacologico ad Alto Rendimento Clinico</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  L'Asse Calcio - Calmodulina - Calcineurina - NFAT & Gli Inibitori Farmacologici
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                  L'aumento sostenuto della concentrazione di Ca²⁺ citosolico provoca il legame del calcio alla proteina <strong>Calmodulina</strong>. Il complesso Ca²⁺-Calmodulina si associa alla serina/treonina fosfatasi citosolica <strong>Calcineurina</strong> attivandola. La calcineurina defosforila molteplici residui di serina sul fattore trascrizionale <strong>NFAT (Nuclear Factor of Activated T cells)</strong>, mascherando i segnali di esportazione nucleare ed esponendo il segnale di localizzazione nucleare (NLS). NFAT trasloca rapidamente nel nucleo dove coopera con AP-1 e NF-κB per legarsi al promotore del gene dell'<strong>Interleuchina-2 (IL-2)</strong>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono pt-3 border-t border-slate-800">
                  <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700">
                    <span className="text-indigo-400 font-bold block">Ciclosporina A (CsA)</span>
                    Si lega alla ciclofillina citoplasmatica; il complesso inibisce la calcineurina prevenendo la defosforilazione di NFAT. Zero sintesi di IL-2.
                  </div>
                  <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700">
                    <span className="text-teal-400 font-bold block">Tacrolimus (FK506)</span>
                    Si lega alla proteina immunofillina FKBP-12; blocca la calcineurina con affinità 10-100x superiore a CsA. Terapia d’elezione nei trapianti.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: AUTOCRINIA IL-2 & RECETTORE TRIMERICO CD25 */}
          <section id="sec-12-5" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Microscope className="w-4 h-4" />
              <span>Sezione 12.5</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              Autocrinia di Interleuchina-2 (IL-2) e il Recettore Trimerico ad Alta Affinità (CD25)
            </h2>

            <div className="space-y-4 text-slate-700">
              <p>
                L'<strong>Interleuchina-2 (IL-2)</strong> è la principale citochina di crescita autocrina e paracrina dei linfociti T. La sua trascrizione inizia circa <strong>12 ore</strong> dopo l'ingaggio simultaneo del TCR e di CD28 e raggiunge il picco a 24-48 ore. L'aspetto biologico più raffinato risiede nella trasformazione conformazionale del suo recettore di membrana (IL-2R):
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-1">
                    Stato Quiescente (T Naïve)
                  </div>
                  <div className="text-sm font-bold text-slate-900 mb-2">
                    Recettore Dimerico βγ (Bassa/Intermedia Affinità)
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-2">
                    Composto dalla catena <strong>IL-2Rβ (CD122, 75 kDa)</strong> associata alla <strong>catena γ comune (γc / CD132, 64 kDa)</strong>.
                  </p>
                  <div className="text-xs font-mono bg-white p-2 rounded border border-slate-200 text-slate-700">
                    Costante di Dissociazione: <strong>Kd ≈ 10⁻⁹ M</strong> (richiede concentrazioni molto elevate di citochina).
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-emerald-300 bg-emerald-50">
                  <div className="text-xs font-mono font-bold text-emerald-700 uppercase mb-1">
                    Stato Attivato (T TCR + CD28)
                  </div>
                  <div className="text-sm font-bold text-emerald-950 mb-2">
                    Recettore Trimerico αβγ (Altissima Affinità)
                  </div>
                  <p className="text-xs text-emerald-900 leading-relaxed mb-2">
                    L'attivazione trascrizionale induce la sintesi de novo della catena <strong>IL-2Rα (CD25, 55 kDa)</strong>, che si associa al dimero βγ.
                  </p>
                  <div className="text-xs font-mono bg-white p-2 rounded border border-emerald-200 text-emerald-800">
                    Costante di Dissociazione: <strong>Kd ≈ 10⁻¹¹ M</strong> (affinità aumentata di 100 volte!).
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-purple-950 text-xs sm:text-sm">
                <span className="font-bold flex items-center gap-1.5 mb-1 text-purple-900">
                  <Info className="w-4 h-4" />
                  Il Ruolo dei Linfociti T Regolatori (Treg FoxP3+):
                </span>
                I linfociti Treg non producono autonomamente IL-2 (hanno il promotore silenziato), ma esprimono <strong>costitutivamente</strong> il recettore trimerico ad altissima affinità <strong>CD25 (IL-2Rα)</strong>. In questo modo fungono da "spugna" biologica per l’IL-2 nel microambiente, sottraendola ai linfociti T effettori convenzionali ed esercitando una potente soppressione paracrina.
              </div>
            </div>
          </section>

          {/* SECTION 6: ASSE CD69 - S1PR1 & FINGOLIMOD */}
          <section id="sec-12-6" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Microscope className="w-4 h-4" />
              <span>Sezione 12.6</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              Ritenzione Linfonodale vs Egresso: L'Antagonismo Funzionale CD69 - S1PR1 e Fingolimod (FTY720)
            </h2>

            <div className="space-y-4 text-slate-700">
              <p>
                Un linfocita T naïve ricircolante entra nel linfonodo via HEV. Come fa la cellula a decidere se trattenersi per espandersi clonalmente o uscire subito verso la linfa efferente qualora non incontri il proprio antigene cognato? Il decisore molecolare è l'asse costituito dal recettore <strong>S1PR1</strong> e dal marcatore precoce di attivazione <strong>CD69</strong>:
              </p>

              <div className="space-y-3 my-4 text-xs sm:text-sm">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <strong className="text-slate-900 block mb-1">1. Il Gradiente Chemiotattico della Sfingosina-1-Fosfato (S1P):</strong>
                  La concentrazione di S1P è mantenuta molto <strong>bassa</strong> nel parenchima linfonodale (ad opera dell'enzima degradativo S1P-liasi), mentre è <strong>molto elevata</strong> nella linfa efferente e nel plasma sanguigno. Il recettore accoppiato a proteine G <strong>S1PR1</strong> guida i linfociti verso le zone a concentrazione più elevata di S1P (egresso nei vasi linfatici efferenti).
                </div>

                <div className="p-3.5 bg-indigo-50 border border-indigo-200 rounded-xl">
                  <strong className="text-indigo-950 block mb-1">2. Incontro con l'Antigene & Ritenzione Obbligata di 4-7 Giorni:</strong>
                  Quando il linfocita riconosce il peptide su MHC ed è costimolato da B7, viene immediatamente trascritta e traslocata in membrana la lectina di tipo C <strong>CD69</strong> (marcatore precocissimo di attivazione). <strong>CD69 si lega fisicamente a S1PR1</strong> inducendone l'internalizzazione e la degradazione. Privato di S1PR1, il linfocita diventa "cieco" al gradiente di S1P della linfa efferente e <strong>rimane trattenuto nella paracorticale per 4-7 giorni</strong>, il tempo strettamente necessario per compiere 8-10 cicli di divisione cellulare e differenziarsi in effettore armato.
                </div>

                <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <strong className="text-emerald-950 block mb-1">3. Uscita Effettrice nei Focolai Infiammatori Periferici:</strong>
                  Una volta completato il programma differenziativo, l'espressione di CD69 cessa. S1PR1 viene nuovamente sintetizzato ed esposto sulla membrana cellulare. Il linfocita differenziato percepisce l’elevata concentrazione di S1P nei seni midollari, migra nel vaso linfatico efferente, raggiunge il dotto toracico e si reimmette nel sangue per dirigersi nei tessuti infiammati.
                </div>
              </div>

              {/* Callout Fingolimod */}
              <div className="p-5 rounded-xl bg-teal-950 text-white border border-teal-900 my-6">
                <div className="flex items-center gap-2 text-teal-300 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Brain className="w-4 h-4" />
                  <span>Applicazione Clinica: Fingolimod (FTY720) nella Sclerosi Multipla</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Sequestro Linfonodale dei Linfociti Autoreattivi Encefalitogenici
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                  <strong>Fingolimod</strong> è un analogo sintetico della sfingosina. Somministrato per via orale, viene fosforilato in vivo dalla sfingosina-chinasi 2 in <em>FTY720-P</em>. Questa molecola si comporta come un <strong>modulatore funzionale / agonista internalizzante</strong> del recettore S1PR1: legandosi al recettore, ne induce l'endocitosi massiva e la degradazione irreversibile mediata dal proteasoma. I linfociti T (compresi i cloni Th1 e Th17 autoreattivi contro la mielina) rimangono bloccati dentro i linfonodi e non possono uscire nel sangue. La conta periferica dei linfociti T scende di oltre il <strong>70%</strong>, impedendo loro di oltrepassare la barriera emato-encefalica e proteggendo il sistema nervoso centrale dalle placche demielinizzanti.
                </p>

                <div className="pt-2 border-t border-teal-800 flex justify-end">
                  <button
                    onClick={() => setActiveTab('trafficking_sim')}
                    className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Visualizza nel Simulatore di Trafficking</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7: COOPERAZIONE BIDIREZIONALE CD40-CD40L */}
          <section id="sec-12-7" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Microscope className="w-4 h-4" />
              <span>Sezione 12.7</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              Cooperazione Bidirezionale T:APC (Asse CD40:CD40L) e Licensing delle Dendritiche
            </h2>

            <div className="space-y-4 text-slate-700">
              <p>
                L'interazione tra linfocita T e APC non è una via a senso unico. Il linfocita T attivato esprime in superficie il ligando <strong>CD40L (CD154)</strong>, appartenente alla superfamiglia del TNF, che si lega al recettore <strong>CD40</strong> espresso costitutivamente sulla membrana della cellula dendritica e del linfocita B.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-mono font-bold text-indigo-700 uppercase mb-1">
                    1. Licensing della Cellula Dendritica
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Il legame CD40L:CD40 invia un potente segnale retroattivo alla cellula dendritica: stimola un'ulteriore sovraespressione di <strong>B7-1 e B7-2</strong>, aumenta la secrezione di <strong>IL-12</strong> e ne potenzia la capacità di cross-presentare antigeni tumorali e virali ai linfociti T CD8+ citotossici.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-mono font-bold text-emerald-700 uppercase mb-1">
                    2. Aiuto T-Dipendente ai Linfociti B nei Centri Germinativi
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Nei follicoli linfoidi, l'interazione tra CD40L espresso dal linfocita T follicolare helper (Tfh) e CD40 sul linfocita B è il segnale <strong>obbligatorio</strong> per l'attivazione dell'enzima <strong>AID (Activation-Induced Cytidine Deaminase)</strong>, indispensabile per lo <em>switch isotipico</em> (da IgM a IgG, IgA, IgE) e la <em>ipermutazione somatica</em> con maturazione dell'affinità anticorpale. Pazienti con mutazioni di CD40L sviluppano la grave <strong>Sindrome da Iper-IgM X-Linked</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 8: I CHECKPOINT INIBITORI (CTLA-4, PD-1) & NOBEL 2018 */}
          <section id="sec-12-8" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Sezione 12.8 · Focus Premio Nobel Medicina 2018</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              I Checkpoint Inibitori Fisiologici (CTLA-4, PD-1) & La Rivoluzione dell'Immunoterapia Oncologica
            </h2>

            <div className="space-y-4 text-slate-700">
              <p>
                La risposta immunitaria deve essere controllata e auto-limitante per prevenire la distruzione incontrollata dei tessuti sani dell’ospite. A tale scopo l'organismo impiega recettori inibitori noti come <strong>checkpoint immunologici</strong>, la cui scoperta e applicazione terapeutica ha valso a <strong>James Allison</strong> e <strong>Tasuku Honjo</strong> il <strong>Premio Nobel per la Medicina nel 2018</strong>:
              </p>

              {/* CTLA-4 detailed breakdown */}
              <div className="p-5 rounded-xl border border-purple-200 bg-purple-50/70 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-purple-950 flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-purple-700" />
                    <span>CTLA-4 (Cytotoxic T-Lymphocyte Antigen 4 / CD152)</span>
                  </h3>
                  <span className="text-xs font-mono bg-purple-200 text-purple-900 px-2 py-0.5 rounded font-bold">
                    Fase di Priming (Linfonodo)
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-purple-900 leading-relaxed">
                  Mentre CD28 è espresso costitutivamente su tutti i T naïve, CTLA-4 viene traslocato in membrana soltanto <strong>48-72 ore dopo l'attivazione</strong> (è invece costitutivamente espresso sui linfociti regolatori Treg FoxP3+). Esercita la sua funzione inibitoria attraverso tre distinti meccanismi:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs text-purple-950 font-sans">
                  <div className="p-3 bg-white rounded-lg border border-purple-200">
                    <span className="font-bold block mb-1 text-purple-900 font-mono">1. Affinità e Avidità Superiore</span>
                    CTLA-4 si lega a B7-1 e B7-2 con un'affinità da <strong>20 a 100 volte superiore</strong> rispetto a CD28, scalzando competitivamente CD28 anche quando i livelli di B7 sull'APC sono bassi.
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-purple-200">
                    <span className="font-bold block mb-1 text-purple-900 font-mono">2. Trans-Endocitosi (Trogocitosi)</span>
                    CTLA-4 strappa fisicamente le molecole B7 dalla superficie della cellula dendritica e le internalizza nel citosol del linfocita T per degradazione lisosomiale, lasciando la DC priva di costimolatori!
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-purple-200">
                    <span className="font-bold block mb-1 text-purple-900 font-mono">3. Segnalazione Negativa via ITIM</span>
                    Le code citoplasmatiche di CTLA-4 contengono motivi ITIM che reclutano le fosfatasi <strong>SHP-1</strong> e <strong>PP2A</strong>, che defosforilano le chinasi a valle del TCR e di CD28 (arresto del ciclo cellulare).
                  </div>
                </div>

                <div className="pt-2 text-xs text-purple-900 border-t border-purple-200 font-mono">
                  <strong>Applicazione Oncologica:</strong> L'anticorpo monoclonale umano anti-CTLA-4 <strong>Ipilimumab (Yervoy®)</strong> blocca CTLA-4, consentendo a B7 di continuare a costimolare CD28 ed eliminando i Treg intratumorali. Primo farmaco che ha dimostrato un prolungamento significativo della sopravvivenza nel melanoma metastatico.
                </div>
              </div>

              {/* PD-1 detailed breakdown */}
              <div className="p-5 rounded-xl border border-cyan-200 bg-cyan-50/70 space-y-3 mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-cyan-950 flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-cyan-700" />
                    <span>PD-1 (Programmed Cell Death 1 / CD279)</span>
                  </h3>
                  <span className="text-xs font-mono bg-cyan-200 text-cyan-900 px-2 py-0.5 rounded font-bold">
                    Fase Effettrice (Tessuto & Tumore)
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-cyan-900 leading-relaxed">
                  PD-1 è un recettore espresso dai linfociti T in seguito a stimolazione persistente o cronica da parte dell'antigene. I suoi ligandi fisiologici sono <strong>PD-L1 (CD274)</strong>, ampiamente espresso da cellule epiteliali, stromali e neoplastiche in risposta all’Interferone-gamma, e <strong>PD-L2 (CD273)</strong>, espresso prevalentemente dalle APC.
                </p>

                <p className="text-xs sm:text-sm text-cyan-900 leading-relaxed">
                  La coda citoplasmatica di PD-1 contiene un motivo <strong>ITSM (Immunoreceptor Tyrosine-based Switch Motif)</strong> che, una volta fosforilato, recluta la tirosin-fosfatasi <strong>SHP-2</strong>. SHP-2 defosforila direttamente le tirosine del complesso CD3ζ e di ZAP-70, disattivando la via delle MAP-chinasi e di PI3K. Questo stato biologico prende il nome di <strong>T-Cell Exhaustion (Esaurimento Linfocitario)</strong>: il linfocita CD8+ è ancora vivo nel microambiente tumorale ma è incapace di rilasciare perforina e granzimi.
                </p>

                <div className="pt-2 text-xs text-cyan-900 border-t border-cyan-200 font-mono">
                  <strong>Applicazione Oncologica:</strong> Gli anticorpi bloccanti anti-PD-1 (<strong>Nivolumab, Pembrolizumab</strong>) o anti-PD-L1 (<strong>Atezolizumab, Durvalumab</strong>) recidono il legame inibitorio, risvegliano i linfociti CD8+ infiltranti il tumore (TILs) e provocano la lisi immunomediata del tumore.
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 9: TABELLA SINOTTICA DEI BERSAGLI FARMACOLOGICI */}
          <section id="sec-12-9" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Pill className="w-4 h-4" />
              <span>Sezione 12.9 · Farmacologia Molecolare Applicata</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              Tabella Sinottica Completa dei Farmaci Immunomodulatori & Inibitori dei Checkpoint
            </h2>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white font-mono">
                    <th className="p-3">Principio Attivo</th>
                    <th className="p-3">Bersaglio Molecolare</th>
                    <th className="p-3">Meccanismo Intracellulare / Molecolare</th>
                    <th className="p-3">Indicazione Clinica Principale</th>
                    <th className="p-3">Tossicità & Effetti Collaterali Chiave</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {PHARMACOLOGICAL_TARGETS.map((drug, dIdx) => (
                    <tr key={dIdx} className={dIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                      <td className="p-3 font-bold text-slate-900 font-mono">{drug.drugName}</td>
                      <td className="p-3 font-semibold text-indigo-700 font-mono">{drug.targetMolecule}</td>
                      <td className="p-3 text-slate-700 leading-snug">{drug.molecularMechanism}</td>
                      <td className="p-3 text-slate-900 font-medium">{drug.clinicalIndication}</td>
                      <td className="p-3 text-rose-800 text-[11px] leading-snug">{drug.sideEffectsOrCaveats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
          <QuizSection customQuestions={QUIZ_LEZIONE_12} lessonNumber={12} title="Verifica dell'Apprendimento · Lezione 12" />

          {/* FLASHCARDS DI RIPASSO ATTIVO */}
          <FlashcardDeck cards={FLASHCARDS_LEZIONE_12} lessonNumber={12} title="Flashcard di Ripasso Attivo · Lezione 12" />
        </article>
      )}
    </div>
  );
};
