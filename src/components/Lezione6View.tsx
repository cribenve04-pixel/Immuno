import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import React, { useState } from 'react';
import { InteractiveBcrSignalingSimulator } from './InteractiveBcrSignalingSimulator';
import { InteractiveAntibodyDigestionSimulator } from './InteractiveAntibodyDigestionSimulator';
import {
  BCR_VS_TCR_DATA,
  IMMUNOGLOBULIN_ISOTYPES_DATA,
  ENZYMATIC_CLEAVAGE_DATA,
  QUIZ_LEZIONE_6,
  FLASHCARDS_LEZIONE_6
} from '../data/lezione6Content';
import { IMAGES } from '../data/imageAssets';
import {
  Award,
  BookOpen,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ChevronRight,
  ShieldAlert,
  Dna,
  Activity,
  Layers,
  Sparkles,
  Info,
  Rotate3D,
  Check,
  Microscope,
  Stethoscope,
  Pill,
  Clock,
  Flame,
  FileText,
  AlertCircle,
  Shield,
  Zap,
  Scissors,
  Droplets,
  HeartPulse
} from 'lucide-react';

interface Lezione6ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione6View: React.FC<Lezione6ViewProps> = ({ isSerif, fontSize }) => {
  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  return (
    <div className="space-y-12">
      {/* Chapter 6 Hero Block */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-mono">
                <span>Lezione 6 (Sbobina Ufficiale I e II Ora)</span>
                <span aria-hidden="true">·</span>
                <span>Prof.ssa Rosa Molfetta</span>
                <span aria-hidden="true">·</span>
                <span>14/10/2025</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
                Lezione 6: Linfociti B, B Cell Receptor (BCR) e Struttura delle Immunoglobuline
              </h1>

              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                Dalle modalità di riconoscimento dell&apos;antigene nativo (BCR vs TCR) all&apos;architettura quaternaria delle immunoglobuline:
                frammentazione enzimatica con papaina e pepsina (Fab vs F(ab&apos;)2), regioni cerniera, isotipi, allotipi e idiotipi.
                Dissezione molecolare del recettore FcRn, transcitosi delle IgA secretorie, basi genetiche del riarrangiamento somatico V(D)J,
                trasduzione del segnale via Igα/Igβ (ITAM, Lyn, Syk) e il modello immunologico dell&apos;aptene-carrier nei vaccini coniugati.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-150 flex flex-wrap items-center gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>Struttura Ig & Frammenti Fab / Fc</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-indigo-600" />
                <span>Cascata BCR (ITAM, Lyn, Syk)</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>FcRn, IgA Secretorie & Apteni</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative bg-slate-950 min-h-[240px]">
            <img
              src={IMAGES.bcrAntibodySignaling}
              onError={(e) => { e.currentTarget.src = '/images/bcr_antibody_structure_signaling_1792402120071.jpg'; }}
              alt="Tavola accademica: architettura delle immunoglobuline, complesso BCR con Ig-alfa e Ig-beta, frammentazione papaina/pepsina e ciclo FcRn"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-xs border border-slate-700/60">
                Tavola Scientifica: Architettura BCR, Ig & Ciclo FcRn
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 6.1: RICONOSCIMENTO ANTIGENE: BCR VS TCR */}
      <section id="sec-6-1" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
            Sezione 6.1
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Modalità di Riconoscimento dell&apos;Antigene: Linfociti B vs Linfociti T
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Forma nativa tridimensionale vs peptidi denaturati MHC-ristretti, epitopi conformazionali e cross-reattività autoimmune.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Come spiegato chiaramente dalla Prof.ssa Molfetta, l&apos;immunità adattativa si distingue radicalmente dall&apos;immunità innata
            per la sua squisita <strong>specificità clonale</strong>: le cellule B e T riconoscono singoli determinanti molecolari
            grazie a recettori dotati di regioni altamente variabili generati casualmente durante la linfa-poiesi.
            Tuttavia, le regole biofisiche di riconoscimento differiscono profondamente tra i due lignaggi:
          </p>

          {/* Comparative Table BCR vs TCR */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs my-4">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3">Caratteristica Fisiologica</th>
                  <th className="p-3">B Cell Receptor (BCR) & Anticorpi</th>
                  <th className="p-3">T Cell Receptor (TCR)</th>
                  <th className="p-3">Significato Clinico & Funzionale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150">
                {BCR_VS_TCR_DATA.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3 font-bold text-slate-900 whitespace-nowrap">{item.feature}</td>
                    <td className="p-3 text-blue-900 bg-blue-50/30">{item.bcr}</td>
                    <td className="p-3 text-purple-900 bg-purple-50/30">{item.tcr}</td>
                    <td className="p-3 text-slate-600 leading-snug">{item.clinicalSignificance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-slate-900 mt-6 flex items-center gap-2">
            <Dna className="w-4 h-4 text-blue-600" />
            Natura degli Epitopi: Lineari vs Conformazionali
          </h3>

          <p>
            La porzione di una macromolecola antigenica che prende contatto fisico diretto con il sito combinatorio dell&apos;anticorpo
            prende il nome di <strong>epitopo o determinante antigenico</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Epitopi Lineari (Sequenziali)
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Costituiti da amminoacidi contigui nella struttura primaria della proteina.
                Il legame con l&apos;anticorpo <strong>resiste alla denaturazione termica e ai solventi</strong>: anche se la proteina perde
                la sua struttura terziaria, la sequenza lineare rimane intatta e riconoscibile (meccanismo sfruttato ad esempio nel Western Blot con SDS).
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                Epitopi Conformazionali (Discontinui)
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Formati da residui amminoacidici distanti nella sequenza primaria ma portati a stretta vicinanza spaziale dal ripiegamento tridimensionale nativo.
                <strong>Se la proteina viene denaturata o bollita, l&apos;epitopo scompare istantaneamente</strong> e l&apos;anticorpo non è più in grado di legarlo.
              </p>
              <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-900">
                <strong>Correlazione Clinica Docente: Allergie Alimentari IgE-Mediate</strong><br />
                Pazienti allergici a proteine della mela o dell&apos;uovo con IgE dirette contro epitopi conformazionali possono consumare l&apos;alimento cotto o bollito senza scatenare reazioni anafilattiche, poiché la cottura denatura la proteina distruggendo l&apos;epitopo.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
            <strong className="text-slate-900">Cross-Reattività & Mimetismo Molecolare:</strong><br />
            Benché gli anticorpi siano altamente specifici, alcuni mostrano cross-reattività legandosi con affinità variabile a determinanti
            strutturalmente correlati. Questo meccanismo è alla base del <strong>mimetismo molecolare</strong> nelle patologie autoimmuni:
            anticorpi generati contro antigeni microbici (es. proteina M dello <em>Streptococcus pyogenes</em>) cross-reagiscono con proteine self
            (miosina cardiaca o glicoproteine valvolari), scatenando la cardite reumatica acuta.
          </div>
        </div>
      </section>

      {/* SECTION 6.2: STRUTTURA DELLE IMMUNOGLOBULINE E DIGESTIONE ENZIMATICA */}
      <section id="sec-6-2" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-purple-600 uppercase">
            Sezione 6.2
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Struttura Molecolare dell&apos;Anticorpo, Digestione Enzimatica e Flessibilità della Cerniera
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Le quattro catene polipeptidiche, il folding a barile beta, la scissione storica con papaina e pepsina (Fab vs F(ab&apos;)2).
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Ogni unità anticorpale monomerica fondamentale possiede una struttura quaternaria a &quot;Y&quot; formata da <strong>quattro catene polipeptidiche</strong>:
            due catene pesanti (Heavy, H, circa 50 kDa) e due catene leggere identiche (Light, L, circa 25 kDa), unite da ponti disolfuro covalenti intercatena.
            Ciascuna catena è suddivisa in domini globulari compatti di circa 110 amminoacidi noti come <strong>domini immunoglobulinici</strong> (Ig fold),
            formati da foglietti β antiparalleli stabilizzati da un ponte disolfuro intrinsecamente conservato:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>Catena Leggera (L):</strong> possiede 2 domini (1 dominio variabile N-terminale V_L e 1 dominio costante C-terminale C_L). Può essere di tipo κ o λ.</li>
            <li><strong>Catena Pesante (H):</strong> possiede 1 dominio variabile V_H e 3 domini costanti (C_H1, C_H2, C_H3) per IgG, IgD e IgA, oppure 4 domini costanti (C_H1-C_H4) per IgM e IgE.</li>
            <li><strong>Regione Cerniera (Hinge Region):</strong> segmento flessibile ricco di prolina e cisteine presente in IgG, IgD e IgA tra C_H1 e C_H2. Permette l&apos;apertura angolare a compasso dei due bracci Fab per agganciare epitopi posti a distanze variabili.</li>
          </ul>

          {/* Cleavage Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs my-4">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3">Enzima Proteolitico</th>
                  <th className="p-3">Sito di Taglio Cerniera</th>
                  <th className="p-3">Frammenti Ottenuti</th>
                  <th className="p-3">Capacità di Legame & Valenza</th>
                  <th className="p-3">Funzioni Effettrici Residue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150">
                {ENZYMATIC_CLEAVAGE_DATA.map((cleave, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3 font-bold text-slate-900">{cleave.enzyme}</td>
                    <td className="p-3 text-slate-700">{cleave.cleavageSite}</td>
                    <td className="p-3 font-semibold text-purple-950 bg-purple-50/40">{cleave.fragmentsGenerated}</td>
                    <td className="p-3 text-slate-700 leading-snug">{cleave.antigenBindingCapacity}</td>
                    <td className="p-3 text-slate-600 leading-snug">{cleave.effectorFunctions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Interactive Cleavage & FcRn Simulator */}
          <div className="pt-2">
            <InteractiveAntibodyDigestionSimulator />
          </div>
        </div>
      </section>

      {/* SECTION 6.3: ISOTIPI, ALLOTIPI E IDIOTIPI */}
      <section id="sec-6-3" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 uppercase">
            Sezione 6.3
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Isotipo, Allotipo e Idiotipo: Catena J, IgA Secretorie e Componente Secretoria
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Classificazione genetica delle immunoglobuline, polimerizzazione e protezione mucosale contro la lisi enzimatica.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-blue-600">Dominio Costante Catena H</span>
              <h4 className="font-bold text-slate-900 text-sm">Isotipo</h4>
              <p className="text-xs text-slate-600 leading-snug">
                Definisce la classe dell&apos;anticorpo (<strong>IgM, IgD, IgG, IgA, IgE</strong>) codificata dai geni Cμ, Cδ, Cγ, Cα, Cε.
                Determina la forma polimerica e le funzioni effettrici dell&apos;Fc. Presente in tutti gli individui sani.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-purple-600">Variazione Allelica Individuale</span>
              <h4 className="font-bold text-slate-900 text-sm">Allotipo</h4>
              <p className="text-xs text-slate-600 leading-snug">
                Piccole differenze amminoacidiche nelle regioni costanti ereditate mendelianamente (es. allotipi Gm nelle IgG1).
                Non alterano la funzione di base, ma possono modulare l&apos;affinità di legame verso recettori FcR polimorfici.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-600">Sito Combinatorio CDR</span>
              <h4 className="font-bold text-slate-900 text-sm">Idiotipo</h4>
              <p className="text-xs text-slate-600 leading-snug">
                L&apos;insieme delle sequenze uniche dei loop ipervariabili (CDR1, CDR2, CDR3) che compongono il paratopo specifico.
                Ogni singolo clone B esprime un idiotipo unico che ne determina l&apos;esclusiva specificità per l&apos;antigene.
              </p>
            </div>
          </div>

          <h3 className="text-base font-bold text-slate-900 mt-6 flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-600" />
            Atlante Comparativo dei Cinque Isotipi di Immunoglobuline
          </h3>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs my-3">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3">Isotipo</th>
                  <th className="p-3">Gene H</th>
                  <th className="p-3">Stato Polimerico</th>
                  <th className="p-3">Conc. Sierica</th>
                  <th className="p-3">Emivita</th>
                  <th className="p-3">Attivazione Complemento</th>
                  <th className="p-3">Funzioni Cardinali</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150">
                {IMMUNOGLOBULIN_ISOTYPES_DATA.map((iso, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3 font-bold text-slate-900 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono">
                        {iso.isotype}
                      </span>
                    </td>
                    <td className="p-3 font-mono text-slate-600">{iso.heavyChainGene}</td>
                    <td className="p-3 text-slate-700">{iso.polymericState}</td>
                    <td className="p-3 font-semibold text-slate-900">{iso.serumConcentration}</td>
                    <td className="p-3 font-mono text-slate-700">{iso.halfLifeDays}</td>
                    <td className="p-3 text-slate-600">{iso.complementActivation}</td>
                    <td className="p-3 text-slate-700 leading-snug">{iso.primaryBiologicalFunction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-950 space-y-2">
            <div className="font-bold flex items-center gap-2 text-indigo-900 text-sm">
              <Droplets className="w-4 h-4 text-indigo-600" />
              Focus Sbobina: La Transcitosi delle IgA e la Componente Secretoria
            </div>
            <p className="leading-relaxed">
              Le <strong>IgA secretorie (sIgA)</strong> sono prodotte dalle plasmacellule della lamina propria come dimeri uniti dalla <strong>catena J (15 kDa)</strong>.
              Sul versante basolaterale delle cellule epiteliali mucosali, il dimero si lega al <strong>recettore polimerico delle immunoglobuline (poly-Ig receptor)</strong>.
              Il complesso viene internalizzato per endocitosi e trasportato attraverso il citoplasma (<em>transcitosi</em>) fino al versante apicale luminale.
              Qui il recettore poly-Ig viene clivato proteoliticamente: una porzione extracellulare rimane permanentemente avvolta attorno alle IgA,
              costituendo la <strong>componente secretoria</strong>. Questa corazza proteica è essenziale perché scherma stericamente le IgA dall&apos;azione
              degradativa degli enzimi proteolitici gastrici e batterici presenti nei lumi mucosi (saliva, secreto intestinale, latte materno).
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6.4: REPERTORIO PREFORMATO E RIARRANGIAMENTO V(D)J */}
      <section id="sec-6-4" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-rose-600 uppercase">
            Sezione 6.4
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Basi Genetiche del Riarrangiamento Somatico V(D)J e Repertorio Preformato
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Cromosomi 14, 2 e 22, unione combinatoria a tappe nel midollo osseo e concentrazione della variabilità nei loop CDR3.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Il sistema immunitario umano è in grado di generare tra <strong>10⁹ e 10¹² specificità anticorpali differenti</strong> a partire
            da un numero limitato di geni della linea germinale, grazie al meccanismo molecolare di <strong>riarrangiamento somatico V(D)J</strong>
            (scoperto dal premio Nobel Susumu Tonegawa dimostrando che il DNA delle plasmacellule è fisicamente più corto di quello germinale):
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-500">Cromosoma 14 (14q32)</span>
              <h4 className="font-bold text-slate-900 text-sm">Locus Catena Pesante (H)</h4>
              <p className="text-xs text-slate-600 leading-snug">
                Circa 40 segmenti <strong>V</strong> (Variable), 23 segmenti <strong>D</strong> (Diversity) e 6 segmenti <strong>J</strong> (Joining),
                seguiti in tandem dai geni costanti Cμ, Cδ, Cγ, Cα, Cε.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-500">Cromosoma 2 (2p11)</span>
              <h4 className="font-bold text-slate-900 text-sm">Locus Catena Leggera Kappa (κ)</h4>
              <p className="text-xs text-slate-600 leading-snug">
                Circa 35 segmenti <strong>V</strong> e 5 segmenti <strong>J</strong> (privo di segmenti D!), seguiti da un unico gene costante Cκ.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-500">Cromosoma 22 (22q11)</span>
              <h4 className="font-bold text-slate-900 text-sm">Locus Catena Leggera Lambda (λ)</h4>
              <p className="text-xs text-slate-600 leading-snug">
                Circa 30 segmenti <strong>V</strong> accoppiati a 4-5 coppie tandem Jλ - Cλ (privo di segmenti D).
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-600" />
              La Sequenza Rigorosa di Taglia-e-Cuci nel Midollo Osseo
            </div>
            <ol className="list-decimal pl-5 space-y-1.5 leading-relaxed text-slate-700">
              <li><strong>Stadio Pro-B precoce:</strong> ricombinazione di un segmento <strong>D con un segmento J</strong> sulla catena pesante (delezione circolare del DNA intermedio).</li>
              <li><strong>Stadio Pro-B tardivo:</strong> ricombinazione di un segmento <strong>V con il complesso DJ</strong> già formato (unione V-D-J funzionale).</li>
              <li><strong>Stadio Pre-B:</strong> riarrangiamento della catena leggera (solo <strong>V con J</strong>); prima sul locus κ, e in caso di insuccesso sul locus λ (esclusione allelica e isotipica).</li>
              <li><strong>Espressione del BCR vergine:</strong> il trascritto primario unisce VDJ con i geni adiacenti Cμ e Cδ, consentendo l&apos;espressione contemporanea di <strong>IgM e IgD naive</strong> sulla membrana mediante <em>splicing alternativo</em>.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 6.5: COMPLESSO DI SEGNALAZIONE DEL BCR */}
      <section id="sec-6-5" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-600 uppercase">
            Sezione 6.5
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Il Complesso di Segnalazione del BCR: Igα/Igβ (CD79a/b), Lyn, Syk e Via del Calcio
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            I motivi ITAM, il cross-linking recettoriale su zattere lipidiche e la cascata genica di attivazione plasmacellulare.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Il recettore clonotipico di membrana (mIgM o mIgD) ha una coda citoplasmatica priva di attività enzimatica o trasduttiva.
            Per trasdurre il segnale all&apos;interno del citoplasma, il BCR si assembla obbligatoriamente con l&apos;eterodimero
            <strong>Igα (CD79a) e Igβ (CD79b)</strong>, dotato di lunghe code intracellulari recanti motivi <strong>ITAM</strong>
            (<em>Immunoreceptor Tyrosine-based Activation Motif</em>, sequenze YxxL/I-x₆₋₈-YxxL/I).
          </p>

          {/* Mount Interactive BCR Simulator */}
          <div className="pt-2">
            <InteractiveBcrSignalingSimulator />
          </div>

          {/* Tavola Sinottica Comparativa BCR vs TCR */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <h4 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider">
                Quadro Sinottico Comparativo: Omologia delle Cascate di Segnalazione BCR vs TCR
              </h4>
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-xs">
                <thead className="bg-slate-50 font-semibold text-slate-800">
                  <tr>
                    <th scope="col" className="px-3.5 py-3 text-left">Fase del Segnale</th>
                    <th scope="col" className="px-3.5 py-3 text-left">Via del Recettore B (BCR)</th>
                    <th scope="col" className="px-3.5 py-3 text-left">Via del Recettore T (TCR)</th>
                    <th scope="col" className="px-3.5 py-3 text-left">Omologia Funzionale &amp; Biochimica</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-blue-50/40">
                    <td className="px-3.5 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      1. Riconoscimento Antigene
                    </td>
                    <td className="px-3.5 py-3 text-blue-900 font-medium">
                      mIgM / mIgD (antigene nativo 3D / epitopi conformazionali)
                    </td>
                    <td className="px-3.5 py-3 text-indigo-900 font-medium">
                      Eterodimero TCR αβ (peptide lineare denaturato 8-16 aa su MHC-I/II)
                    </td>
                    <td className="px-3.5 py-3 text-slate-600">
                      Entrambi possiedono code citoplasmatiche troppo corte per trasdurre autonomamente.
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/40">
                    <td className="px-3.5 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      2. Subunità Trasduttrici con ITAM
                    </td>
                    <td className="px-3.5 py-3 text-blue-900 font-medium">
                      Eterodimero Igα / Igβ (CD79a / CD79b) [<strong>2 ITAM totali</strong>]
                    </td>
                    <td className="px-3.5 py-3 text-indigo-900 font-medium">
                      Complesso CD3 (γε, δε) + Omodimero ζζ (CD247) [<strong>10 ITAM totali</strong>]
                    </td>
                    <td className="px-3.5 py-3 text-slate-600">
                      Motivi ITAM (YxxL/I-x₆₋₈-YxxL/I): siti di fosforilazione per docking di domini tandem SH2.
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/40">
                    <td className="px-3.5 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      3. Tirosin-Chinasi Src Iniziale
                    </td>
                    <td className="px-3.5 py-3 text-blue-900 font-medium">
                      <strong>Lyn</strong> (coadiuvata da Fyn e Blk)
                    </td>
                    <td className="px-3.5 py-3 text-indigo-900 font-medium">
                      <strong>Lck</strong> (associata alle code di CD4 o CD8) e Fyn
                    </td>
                    <td className="px-3.5 py-3 text-slate-600">
                      Fosforila i residui di tirosina negli ITAM all&apos;avvicinamento/clustering recettoriale.
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/40">
                    <td className="px-3.5 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      4. Chinasi Tandem-SH2
                    </td>
                    <td className="px-3.5 py-3 text-blue-900 font-medium">
                      <strong>Syk</strong> (Spleen Tyrosine Kinase)
                    </td>
                    <td className="px-3.5 py-3 text-indigo-900 font-medium">
                      <strong>ZAP-70</strong> (70 kDa Zeta-Associated Protein)
                    </td>
                    <td className="px-3.5 py-3 text-slate-600">
                      Si ancora con altissima affinità agli ITAM doppiamente fosforilati e innesca la cascata a valle.
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/40">
                    <td className="px-3.5 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      5. Piattaforma Scaffold Adattatrice
                    </td>
                    <td className="px-3.5 py-3 text-blue-900 font-medium">
                      <strong>BLNK</strong> (denominata anche SLP-65 o BASH)
                    </td>
                    <td className="px-3.5 py-3 text-indigo-900 font-medium">
                      <strong>LAT</strong> (integrata in membrana) + <strong>SLP-76</strong>
                    </td>
                    <td className="px-3.5 py-3 text-slate-600">
                      Hub molecolare multifosforilato che coordina la fosfolipasi C e la chinasi della famiglia Tec.
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/40">
                    <td className="px-3.5 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      6. Chinasi Tec &amp; Fosfolipasi C
                    </td>
                    <td className="px-3.5 py-3 text-blue-900 font-medium">
                      <strong>Btk</strong> (Bruton) attiva <strong>PLCγ2</strong>
                    </td>
                    <td className="px-3.5 py-3 text-indigo-900 font-medium">
                      <strong>Itk</strong> attiva <strong>PLCγ1</strong>
                    </td>
                    <td className="px-3.5 py-3 text-slate-600">
                      Idrolisi del fosfolipide PIP2 in secondo messaggero solubile IP3 e messaggero lipidico DAG.
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/40">
                    <td className="px-3.5 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      7. Degradazione nel Proteasoma 26S
                    </td>
                    <td className="px-3.5 py-3 text-blue-900 font-medium">
                      PKCβ → Complesso IKK → Fosforilazione e <strong>degradazione di IκBα</strong> nel proteasoma
                    </td>
                    <td className="px-3.5 py-3 text-indigo-900 font-medium">
                      PKCθ → Complesso CBM (CARMA1/BCL10/MALT1) → IKK → <strong>degradazione IκBα</strong> nel proteasoma
                    </td>
                    <td className="px-3.5 py-3 text-slate-600">
                      La distruzione proteasomiale di IκB smaschera il segnale NLS del fattore nucleare <strong>NF-κB</strong>.
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/40">
                    <td className="px-3.5 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      8. Fattori Trascrizionali Finali
                    </td>
                    <td className="px-3.5 py-3 text-blue-900 font-medium">
                      <strong>NF-κB, NFAT, AP-1</strong> (sopravvivenza Bcl-2, Myc, ciclina D2, differenziamento plasmacellule)
                    </td>
                    <td className="px-3.5 py-3 text-indigo-900 font-medium">
                      <strong>NF-κB, NFAT, AP-1</strong> (sintesi di IL-2, espressione CD25, proliferazione clonale T)
                    </td>
                    <td className="px-3.5 py-3 text-slate-600">
                      Perfetta convergenza dei programmi genici nucleari per l&apos;ingresso rapido in ciclo mitotico.
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/40">
                    <td className="px-3.5 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      9. Clinica e Farmacologia
                    </td>
                    <td className="px-3.5 py-3 text-rose-800 font-medium">
                      XLA (mutazione <em>BTK</em>); Inibitori: <strong>Ibrutinib, Acalabrutinib</strong> (anti-Btk per CLL), Fostamatinib (anti-Syk)
                    </td>
                    <td className="px-3.5 py-3 text-rose-800 font-medium">
                      SCID da deficit di ZAP-70 o CD3γ/ε; Immunosoppressori: <strong>Ciclosporina A / Tacrolimus</strong> (anti-Calcineurina su NFAT)
                    </td>
                    <td className="px-3.5 py-3 text-slate-600">
                      Bersagli specifici cardine in oncoematologia e nel trapianto d&apos;organo solido.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6.6: IMMUNOGENICITA' E MODELLO APTENE-CARRIER */}
      <section id="sec-6-6" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-amber-600 uppercase">
            Sezione 6.6
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Immunogenicità, Apteni e il Modello Aptene-Carrier nei Vaccini Coniugati
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Molecole antigeniche vs immunogene, cooperazione T-B e la rivoluzione farmacologica dei vaccini contro i batteri capsulati.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Non tutte le molecole capaci di legarsi a un BCR sono in grado di attivare la risposta immunitaria:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>Antigene:</strong> qualsiasi sostanza che può essere legata specificamente da un anticorpo o da un TCR.</li>
            <li><strong>Immunogeno:</strong> un antigene che possiede le caratteristiche fisico-chimiche necessarie per innescare attivamente la proliferazione e differenziazione dei linfociti. Le proteine complesse ad alto peso molecolare sono gli immunogeni più potenti.</li>
            <li><strong>Aptene:</strong> piccola molecola chimica (es. metalli come nichel, farmaci come penicillina, dinitrofenolo DNP) che viene legata con alta affinità dal BCR ma che <em>da sola non è immunogena</em> (non fa cross-linking e non può essere presentata su MHC al TCR).</li>
          </ul>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-2">
            <div className="font-bold flex items-center gap-2 text-amber-900 text-sm">
              <Pill className="w-4 h-4 text-amber-600" />
              Il Complesso Aptene-Carrier e i Vaccini Coniugati di Precisione
            </div>
            <p className="leading-relaxed">
              Se l&apos;aptene viene legato chimicamente in modo covalente a una proteina ad alto peso molecolare (detta <strong>carrier</strong>),
              l&apos;intero coniugato diventa potentemente immunogeno:
            </p>
            <ol className="list-decimal pl-5 space-y-1 leading-relaxed text-amber-900">
              <li>Il linfocita B specifico per l&apos;aptene (es. polisaccaride capsulare pneumococcico) riconosce l&apos;aptene tramite il suo BCR.</li>
              <li>La cellula B internalizza l&apos;intero complesso aptene-carrier per endocitosi.</li>
              <li>Nel compartimento lisosomiale, la proteina carrier viene digerita in peptidi, che vengono esposti su molecole <strong>MHC di Classe II</strong>.</li>
              <li>Un linfocita T helper specifico per il carrier riconosce il peptide ed emette segnali costimolatori (CD40L e citochine IL-4/IL-21).</li>
              <li>Il linfocita B riceve il segnale per compiere lo <strong>switch isotipico a IgG e maturazione dell&apos;affinità</strong>, producendo anticorpi protettivi duraturi e cellule della memoria contro l&apos;aptene.</li>
            </ol>
            <p className="pt-1 text-[11px] text-amber-800">
              <strong>Esempio Clinico Cardinalizio:</strong> I vaccini coniugati contro <em>Haemophilus influenzae</em> tipo b, <em>Neisseria meningitidis</em> e
              <em>Streptococcus pneumoniae</em> legano i polisaccaridi della capsula batterica al tossoide tetanico o al tossoide difterico non tossico (CRM197),
              consentendo un&apos;immunizzazione efficace e salvavita anche nei bambini di età inferiore ai 2 anni.
            </p>
          </div>
        </div>
      </section>

      {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_LEZIONE_6} lessonNumber={6} title="Verifica dell'Apprendimento · Lezione 6" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS_LEZIONE_6} lessonNumber={6} title="Flashcard di Ripasso Attivo · Lezione 6" />
    </div>
  );
};
