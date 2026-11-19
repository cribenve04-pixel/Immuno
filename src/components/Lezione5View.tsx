import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import React, { useState } from 'react';
import { InteractiveExtravasationCascade } from './InteractiveExtravasationCascade';
import { InteractiveAntiviralStateSimulator } from './InteractiveAntiviralStateSimulator';
import {
  ANTIMICROBIAL_PEPTIDES_DATA,
  CLR_RECEPTORS_DATA,
  EXTRAVASATION_STEPS_DATA,
  ANTIVIRAL_MECHANISMS_DATA,
  QUIZ_LEZIONE_5,
  FLASHCARDS_LEZIONE_5
} from '../data/lezione5Content';
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
  Droplets,
  HeartPulse
} from 'lucide-react';

interface Lezione5ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione5View: React.FC<Lezione5ViewProps> = ({ isSerif, fontSize }) => {
  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  return (
    <div className="space-y-12">
      {/* Chapter 5 Hero Block */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-mono">
                <span>Lezione 5 (Sbobina Ufficiale I e II Ora)</span>
                <span aria-hidden="true">·</span>
                <span>Prof.ssa Soriani</span>
                <span aria-hidden="true">·</span>
                <span>09/10/2025</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
                Lezione 5: Barriere Antimicrobiche, CLRs, Chemiotassi e Stato Antivirale
              </h1>

              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                Dalle barriere chimico-fisiche epiteliali con i peptidi cationici (defensine e catelicidina LL-37 nella psoriasi)
                alla tassonomia dei recettori per le Lectine di tipo C (CLRs: Dectina-1, mannosio, DC-SIGN) e PRR solubili (PCR e MBL).
                Analisi approfondita della dinamica di stravaso leucocitario con le integrine e dissezione molecolare
                dello Stato Antivirale (IFN-I, PKR, OAS/RNasi L, Mx) e delle interferonopatie.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-150 flex flex-wrap items-center gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>Defensine & Catelicidina LL-37</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-600" />
                <span>Stravaso & Deficit LAD-1/2</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>Stato Antivirale (PKR, OAS, Mx)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative bg-slate-950 min-h-[240px]">
            <img
              src={IMAGES.antiviralState}
              onError={(e) => { e.currentTarget.src = '/images/antiviral_state_ifn_pathway_1792398051970.jpg'; }}
              alt="Tavola accademica dello stato antivirale indotto da Interferoni di Tipo I, sensori pDC, complesso ISGF3, PKR, OAS/RNasi L e GTPasi Mx"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-xs border border-slate-700/60">
                Tavola Scientifica: Induzione dello Stato Antivirale (IFN-I)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5.1: BARRIERE EPITELIALI E PEPTIDI ANTIMICROBICI */}
      <section id="sec-5-1" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
            Sezione 5.1
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Barriere Epiteliali, Peptidi Cationici (Defensine α/β) e Catelicidina LL-37
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Meccanismi biofisici di permeabilizzazione di membrana, secrezione distrettuale e il ruolo patogenetico di LL-37 nella Psoriasi.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Come illustrato dalla docente in apertura di lezione, l&apos;organismo umano è protetto in prima istanza da un imponente
            complesso di barriere biologiche, meccaniche e chimico-fisiche (movimento ciliare dell&apos;epitelio respiratorio,
            basso pH gastrico, lisozima delle secrezioni lacrimali e salivari, acidi grassi sebacei e il microbioma commensale).
            Quando i microrganismi tentano di superare gli epiteli di rivestimento, incontrano immediatamente una fitta cortina
            di <strong>peptidi antimicrobici naturali (AMPs)</strong> secreti sia costitutivamente che su stimolazione infiammatoria.
          </p>

          <h3 className="text-base font-bold text-slate-900 mt-4 flex items-center gap-2">
            <Droplets className="w-4 h-4 text-blue-600" />
            Meccanismo Biofisico d&apos;Azione dei Peptidi Cationici
          </h3>

          <p>
            Le <strong>defensine</strong> e le <strong>catelicidine</strong> sono piccoli peptidi cationici (carichi positivamente).
            Le membrane dei batteri contengono elevate percentuali di fosfolipidi acidi a carica netta negativa (come fosfatidilglicerolo
            e cardiolipina) e molecole polianioniche superficiali (LPS nei Gram-negativi, acido lipoteicoico nei Gram-positivi).
            Al contrario, il foglietto esterno delle cellule eucariotiche umane è dominato da lipidi neutri/zwitterionici privi di carica netta
            (fosfatidilcolina e sfingomielina) e colesterolo.
          </p>

          <p>
            Grazie a questa differenza elettrochimica fondamentale, i peptidi cationici vengono attirati per attrazione elettrostatica
            verso la superficie batterica, si ripiegano ad anfipatica elica o foglietto β e <strong>si intercalano nel doppio strato lipidico</strong>,
            assemblandosi in pori litici stabili (modello &quot;a botte&quot; o &quot;a tappeto&quot;). L&apos;apertura di questi canali depolarizza
            istantaneamente il potenziale di membrana, dissipa i gradienti ionici vitali ed induce la morte osmotica del patogeno in pochi minuti.
          </p>

          {/* Table of Peptides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
            {ANTIMICROBIAL_PEPTIDES_DATA.map((pep, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 block">
                  {pep.family}
                </span>
                <h4 className="font-bold text-slate-900 text-sm">{pep.name}</h4>
                <div className="text-xs text-slate-600 space-y-1.5 leading-snug">
                  <div>
                    <strong className="text-slate-800">Sorgente Cellulare:</strong> {pep.cellularSource}
                  </div>
                  <div>
                    <strong className="text-slate-800">Meccanismo:</strong> {pep.mechanismOfAction}
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-200 text-[11px] text-amber-900 bg-amber-50/80 p-2 rounded-lg">
                  <strong>Clinica:</strong> {pep.clinicalRelevance}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-950 space-y-2">
            <div className="font-bold flex items-center gap-2 text-purple-900 text-sm">
              <Sparkles className="w-4 h-4 text-purple-600" />
              Focus Molecolare Sbobina: Il Ruolo della Catelicidina LL-37 nella Psoriasi
            </div>
            <p className="leading-relaxed">
              Il precursore inattivo <strong>hCAP-18</strong> (18 kDa) viene clivato enzimaticamente per rilasciare il frammento attivo <strong>LL-37</strong>.
              Oltre alla diretta attività microbicida, LL-37 è oggi riconosciuto come uno dei principali <strong>autoantigeni</strong> nella patogenesi della Psoriasi.
              Quando le cellule cutanee subiscono traumi meccanici minori o stress (fenomeno di Koebner), rilasciano all&apos;esterno frammenti di DNA e RNA self.
              LL-37 si complessa con questi acidi nucleici formando nanocristalli insolubili altamente stabili che proteggono il DNA/RNA dalla degradazione delle nucleasi.
              Questi complessi vengono avidamente endocitati dalle <strong>cellule dendritiche plasmacitoidi (pDCs)</strong> dermiche, dove si legano a
              <strong>TLR9</strong> (per il DNA) e <strong>TLR7</strong> (per l&apos;RNA), provocando una sintesi massiccia e incontrollata di <strong>IFN-α</strong>
              che sostiene l&apos;iperproliferazione dei cheratinociti e la flogosi cronica a placche.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5.2: RECETTORI PER LE LECTINE DI TIPO C (CLRs) E SCAVENGER */}
      <section id="sec-5-2" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-600 uppercase">
            Sezione 5.2
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Recettori per le Lectine di tipo C (CLRs), Scavenger e Sensori Formilati
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Riconoscimento di pattern saccaridici e fungini, cooperazione nella fagocitosi e vie chinasiche Syk-CARD9.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Mentre i Toll-Like Receptors riconoscono un&apos;ampia gamma di acidi nucleici e lipidi, i <strong>C-Type Lectin Receptors (CLRs)</strong>
            sono recettori transmembrana specializzati nel rilevare residui di carboidrati microbici dipendenti dal calcio (Ca²⁺).
            Sono prevalentemente espressi da cellule mieloidi fagocitiche (macrofagi e cellule dendritiche) e assolvono una duplice funzione:
            promuovere l&apos;endocitosi/fagocitosi del patogeno ed innescare vie di trasduzione genica pro-infiammatoria.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs my-3">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3">Recettore CLR</th>
                  <th className="p-3">Ligando Riconosciuto</th>
                  <th className="p-3">Espressione Cellulare</th>
                  <th className="p-3">Ruolo Fisiologico</th>
                  <th className="p-3">Rilevanza Clinica & Patologica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150">
                {CLR_RECEPTORS_DATA.map((clr, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3 font-bold text-slate-900 whitespace-nowrap">{clr.receptor}</td>
                    <td className="p-3 text-slate-700">{clr.ligandRecognized}</td>
                    <td className="p-3 text-slate-600">{clr.expressingCells}</td>
                    <td className="p-3 text-slate-700 leading-snug">{clr.functionalRole}</td>
                    <td className="p-3 text-slate-600 leading-snug">{clr.clinicalSignificance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Microscope className="w-4 h-4 text-emerald-600" />
                Recettori Scavenger: CD36 e la &quot;Pulizia&quot; Tissutale
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                I recettori scavenger (in particolare <strong>CD36</strong>) sono glicoproteine di membrana espresse dai macrofagi
                che legano con legame &quot;promiscuo&quot; polianioni, lipoproteine a bassa densità modificate (LDL ossidate) e lipidi batterici
                (diacilgliceridi microbici). Hanno un ruolo chiave nella rimozione delle cellule apoptotiche e nell&apos;endocitosi batterica;
                in patologia vascolare, l&apos;iperattivazione di CD36 nei macrofagi che internalizzano oxLDL porta alla formazione delle
                <em>cellule schiumose (foam cells)</em> che costituiscono il nucleo ateromasico delle placche vascolari.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-600" />
                Recettori per Peptidi N-Formilati (FPR1)
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                La sintesi proteica nei procarioti (batteri) e nei mitocondri inizia sempre con una <strong>N-formilmetionina (fMet)</strong>,
                a differenza delle proteine eucariotiche sintetizzate nel citosol che iniziano con metionina non formilata.
                I fagociti possiedono il recettore GPCR ad altissima sensibilità <strong>FPR1</strong>, in grado di captare concentrazioni picomolari
                del peptide chemotattico modello <em>fMet-Leu-Phe (fMLF)</em>. Il legame non induce direttamente trascrizione genica,
                bensì riorganizza il citoscheletro di actina guidando la <strong>chemiotassi direzionale rapida</strong> dei neutrofili verso il focolaio batterico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5.3: PRR SOLUBILI E COMPLEMENTO */}
      <section id="sec-5-3" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 uppercase">
            Sezione 5.3
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            PRR Solubili (Pentrassine, MBL, Ficoline) e Introduzione al Complemento
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Il compartimento umorale dell&apos;immunità innata: proteine di fase acuta, architettura a &quot;mazzo di tulipano&quot; e le 3 vie del complemento.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Oltre ai recettori associati alla membrana e a quelli citosolici, l&apos;immunità innata dispone di una sofisticata componente fluida
            composta da <strong>PRR solubili circolanti</strong>. Queste molecole, prodotte prevalentemente dagli epatociti in risposta a IL-6 e IL-1,
            funzionano come <em>opsonine primitive ancestrali</em>, svolgendo prima della sintesi anticorpale le funzioni di marcatura e fagocitosi:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-indigo-600">Pentrassine Corte: La PCR</span>
              <h4 className="font-bold text-slate-900 text-sm">Proteina C-Reattiva (PCR)</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Pentamero circolare a simmetria rotazionale che riconosce specificamente la <strong>fosforilcolina</strong> presente
                sui polisaccaridi di parete dello <em>Streptococcus pneumoniae</em> e sulle membrane delle cellule in apoptosi.
                La PCR legata agisce da opsonina per i recettori FcγR dei fagociti e recluta il complesso C1q, attivando la via classica del complemento.
                I suoi livelli plasmatici salgono fino a 1000 volte durante la flogosi acuta, costituendo il biomarcatore clinico di laboratorio più utilizzato.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-cyan-600">Collettine & Ficoline: Struttura a Tulipano</span>
              <h4 className="font-bold text-slate-900 text-sm">Mannose-Binding Lectin (MBL) e Ficoline</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Grandi complessi oligomerici composti da code collageniche flessibili e teste globulari leganti i carboidrati (CRD o domini fibrinogeno-simili),
                con la caratteristica conformazione ad albero o <em>&quot;a mazzo di tulipano&quot;</em>. MBL lega mannosio e glucosamina terminali dei batteri
                e forma complessi stabili con le proteasi seriniche <strong>MASP-1 e MASP-2</strong>, innescando direttamente la <strong>Via Lectinica del Complemento</strong>.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
              <Shield className="w-4 h-4" />
              Sintesi Sbobina: Le Tre Grandi Vie di Attivazione del Complemento
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Il sistema del complemento è una cascata enzimatica plasmatica ancestrale che converge sulla lisi microbica mediata dal
              <strong>Complesso di Attacco alla Membrana (MAC, C5b-9)</strong> e sul rilascio di potenti anafilotossine pro-infiammatorie (C3a e C5a):
            </p>
            <ul className="text-xs text-slate-200 space-y-1.5 list-disc pl-5">
              <li>
                <strong>Via Classica:</strong> Innescata dal legame di <em>C1q</em> agli immunocomplessi (frammenti Fc di IgM o IgG) legati sulla superficie patogena. Richiede anticorpi, costituendo il ponte con l&apos;immunità adattativa.
              </li>
              <li>
                <strong>Via Lectinica:</strong> Innescata da <em>MBL</em> o ficoline complessate a MASP-1/2 leganti mannosio microbico; attiva C4 e C2 in modo anticorpo-indipendente.
              </li>
              <li>
                <strong>Via Alternativa:</strong> Innescata spontaneamente dal continuo basso livello di idrolisi di C3 (<em>tick-over</em>); in assenza di fattori regolatori sulle superfici batteriche, C3b si fissa stabilmente reclutando il Fattore B e la properdina.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 5.4: CITOCHINE INFIAMMATORIE E SHOCK */}
      <section id="sec-5-4" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-rose-600 uppercase">
            Sezione 5.4
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Citochine Infiammatorie: Effetti Locali vs Sistemici e Shock Settico
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            La dicotomia concentrazione-dipendente: dal contenimento tissutale protettivo al collasso emodinamico sistemico da TNF-α.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Come sottolineato dal docente, le citochine della risposta innata (principalmente <strong>TNF-α, IL-1β e IL-6</strong>)
            esercitano effetti radicalmente diversi a seconda della loro concentrazione ematica e del raggio d&apos;azione:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-600">Basse Quantità Locali</span>
              <h4 className="font-bold text-slate-900 text-sm">Flogosi Protettiva</h4>
              <p className="text-xs text-slate-600 leading-snug">
                Aumento della permeabilità vascolare venulare per favorire l&apos;extravasazione di anticorpi e complemento.
                Espressione di selectine e chemochine; coagulazione locale nei microvasi per intrappolare i batteri nel tessuto.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-amber-600">Moderate Quantità Sistemiche</span>
              <h4 className="font-bold text-slate-900 text-sm">Risposta di Fase Acuta</h4>
              <p className="text-xs text-slate-600 leading-snug">
                <strong>Ipotalamo:</strong> IL-1 e TNF stimolano PGE2 inducendo la febbre che inibisce la replicazione batterica.
                <strong>Fegato:</strong> IL-6 induce sintesi di PCR, fibrinogeno e MBL.
                <strong>Midollo Osseo:</strong> G-CSF e GM-CSF mobilitano neutrofili inducendo leucocitosi periferica.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/60 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-rose-600">Alte Quantità Torrenziali</span>
              <h4 className="font-bold text-rose-950 text-sm">Shock Settico & CID</h4>
              <p className="text-xs text-rose-900 leading-snug">
                <strong>Cuore e Vasi:</strong> Vasodilatazione sistemica e caduta massiva della gittata cardiaca con ipotensione refrattaria.
                <strong>Endotelio:</strong> Perdita di anticoagulanti naturali (trombomodulina) con <em>Coagulazione Intravascolare Disseminata (CID)</em>,
                trombosi microvascolare diffusa e insufficienza multiorgano (MOF).
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
            <div>
              <strong>Equilibrio Regolatorio:</strong> L&apos;asse <strong>IL-12 / IL-18</strong> attiva le cellule NK e Th1 a rilasciare <strong>IFN-γ</strong> per potenziare la fagocitosi;
              il circuito viene successivamente spento da <strong>IL-10</strong> prodotta da monociti e macrofagi M2 per prevenire il danno tissutale collaterale.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5.5: EXTRAVASAZIONE LEUCOCITARIA */}
      <section id="sec-5-5" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
            Sezione 5.5
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Migrazione e Chemiotassi: La Cascata dello Stravaso Leucocitario
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Dinamica emodinamica a 4 tappe, attivazione inside-out delle integrine e deficit congeniti di adesione (LAD-1 e LAD-2).
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Per raggiungere il focolaio flogistico, i leucociti circolanti nel flusso ematico rapido (2000 μm/s) devono compiere
            una complessa sequenza molecolare coordinata lungo l&apos;endotelio delle venule post-capillari:
          </p>

          {/* Extravasation Stepper Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-3">
            {EXTRAVASATION_STEPS_DATA.map((step) => (
              <div key={step.stepNumber} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-blue-600">
                  <span>Tappa {step.stepNumber}</span>
                  <span className="text-slate-400">Emodinamica</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{step.phaseName}</h4>
                <div className="text-xs text-slate-700 leading-snug">
                  <strong>Attori Molecolari:</strong> {step.molecularActors}
                </div>
                <p className="text-xs text-slate-600 leading-snug">{step.biomechanics}</p>
                <div className="pt-2 border-t border-slate-200 text-[11px] text-rose-900 bg-rose-50/70 p-2 rounded-lg">
                  <strong>Difetto Genetico:</strong> {step.clinicalFailure}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Extravasation Cascade Mount */}
          <div className="pt-2">
            <InteractiveExtravasationCascade />
          </div>
        </div>
      </section>

      {/* SECTION 5.6: RISPOSTA ANTIVIRALE E STATO ANTIVIRALE */}
      <section id="sec-5-6" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-purple-600 uppercase">
            Sezione 5.6
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Risposta Antivirale, Cellule Dendritiche Plasmacitoidi e Stato Antivirale
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Sensing di acidi nucleici, induzione paracrina di IFN-I, vie PKR, OAS/RNasi L, Mx e interferonopatie.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            La risposta innata contro i virus si fonda sulla tempestiva rilevazione degli acidi nucleici virali all&apos;interno
            degli endosomi (mediata da <strong>TLR3</strong> per il dsRNA, <strong>TLR7/8</strong> per il ssRNA e <strong>TLR9</strong> per il DNA CpG)
            o nel citoplasma (mediata dalle elicasi a RNA <strong>RIG-I e MDA-5</strong> e dal sensore a DNA <strong>cGAS-STING</strong>).
          </p>

          <p>
            Le <strong>cellule dendritiche plasmacitoidi (pDCs)</strong> sono la &quot;fabbrica biologica&quot; primaria di interferoni di tipo I:
            grazie all&apos;espressione costitutiva ad altissimi livelli del fattore di trascrizione <strong>IRF7</strong>, rilasciano
            quantità torrenziali di <strong>IFN-α</strong> entro poche ore dal contatto con i virus.
          </p>

          <h3 className="text-base font-bold text-slate-900 mt-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-600" />
            Lo Stato Antivirale Paracrino: Blocco a Tre Livelli
          </h3>

          <p>
            L&apos;interferone rilasciato si lega al recettore eterodimerico <strong>IFNAR1/IFNAR2</strong> presente su tutte le cellule
            adiacenti sane non ancora infette. L&apos;attivazione della cascata JAK1/TYK2 e la formazione del trimero nucleare
            <strong>ISGF3 (STAT1/STAT2/IRF9)</strong> induce la trascrizione di centinaia di geni di risposta all&apos;interferone (ISGs),
            tra cui risaltano tre complessi enzimatici cardine:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
            {ANTIVIRAL_MECHANISMS_DATA.map((arm, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase text-purple-600 block">
                  Enzima Effettore {idx + 1}
                </span>
                <h4 className="font-bold text-slate-900 text-sm">{arm.enzyme}</h4>
                <div className="text-xs text-slate-700 leading-snug">
                  <strong>Attivatore:</strong> {arm.activator}
                </div>
                <p className="text-xs text-slate-600 leading-snug">{arm.molecularAction}</p>
                <div className="pt-2 border-t border-slate-200 text-[11px] text-emerald-800 bg-emerald-50/70 p-2 rounded-lg">
                  <strong>Blocco Virale:</strong> {arm.virologicalOutcome}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Antiviral Simulator Mount */}
          <div className="pt-2">
            <InteractiveAntiviralStateSimulator />
          </div>

          {/* Tavola Sinottica Comparativa dei Sistemi Effettori Antivirali */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <h4 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider">
                Quadro Sinottico Comparativo: I 4 Grandi Sistemi Effettori Antivirali ISG
              </h4>
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-xs">
                <thead className="bg-slate-50 font-semibold text-slate-800">
                  <tr>
                    <th scope="col" className="px-3.5 py-3 text-left">Asse Effettore ISG</th>
                    <th scope="col" className="px-3.5 py-3 text-left">Innesco / Attivatore</th>
                    <th scope="col" className="px-3.5 py-3 text-left">Substrato Molecolare</th>
                    <th scope="col" className="px-3.5 py-3 text-left">Meccanismo Biochimico</th>
                    <th scope="col" className="px-3.5 py-3 text-left">Blocco Virologico</th>
                    <th scope="col" className="px-3.5 py-3 text-left">Meccanismo di Evasione</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-purple-50/40">
                    <td className="px-3.5 py-3 font-semibold text-purple-900 whitespace-nowrap">
                      1. Asse PKR (Protein Kinase R)
                    </td>
                    <td className="px-3.5 py-3 text-slate-700">
                      dsRNA virale &gt;33 bp legante i domini dsRBD N-terminali
                    </td>
                    <td className="px-3.5 py-3 text-slate-700">
                      Fattore eucariotico d&apos;inizio della traduzione <strong>eIF2α</strong> (Ser51)
                    </td>
                    <td className="px-3.5 py-3 text-slate-700">
                      Dimerizzazione e autofosforilazione catalitica; eIF2α fosforilato sequestra irreversibilmente <strong>eIF2B</strong>
                    </td>
                    <td className="px-3.5 py-3 text-emerald-800 font-medium">
                      Congelamento globale della traduzione ribosomiale: blocco sintesi di proteine virali
                    </td>
                    <td className="px-3.5 py-3 text-rose-800">
                      Proteina NS1 (Influenza) o E3L (Vaccinia) che mascherano fisicamente il dsRNA
                    </td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40">
                    <td className="px-3.5 py-3 font-semibold text-cyan-900 whitespace-nowrap">
                      2. Asse 2&apos;-5&apos; OAS &amp; RNasi L
                    </td>
                    <td className="px-3.5 py-3 text-slate-700">
                      dsRNA virale attivatore allosterico di OAS1/2/3
                    </td>
                    <td className="px-3.5 py-3 text-slate-700">
                      ATP (conversione in oligoA 2&apos;-5&apos;) e RNA cellulare/virale a singolo filamento
                    </td>
                    <td className="px-3.5 py-3 text-slate-700">
                      Sintesi di <strong>2-5A</strong> ppp(A2&apos;p5&apos;A)n che recluta e dimerizza la <strong>RNasi L</strong> citosolica latente
                    </td>
                    <td className="px-3.5 py-3 text-emerald-800 font-medium">
                      Clivaggio a tappeto di ssRNA genomico virale e mRNA; i frammenti riamplificano RIG-I
                    </td>
                    <td className="px-3.5 py-3 text-rose-800">
                      Fosfodiesterasi virali (es. Coronavirus, Rotavirus) che degradano rapidamente 2-5A
                    </td>
                  </tr>
                  <tr className="hover:bg-emerald-50/40">
                    <td className="px-3.5 py-3 font-semibold text-emerald-900 whitespace-nowrap">
                      3. Asse GTPasi Mx (MxA &amp; MxB)
                    </td>
                    <td className="px-3.5 py-3 text-slate-700">
                      Espressione costitutiva indotta da ISGF3 (trascrizione diretta da ISRE)
                    </td>
                    <td className="px-3.5 py-3 text-slate-700">
                      Ribonucleoproteine (RNP) virali e proteine del capside (es. NP influenza, Gag HIV)
                    </td>
                    <td className="px-3.5 py-3 text-slate-700">
                      Oligomerizzazione in anelli macromolecolari toroidali con idrolisi di GTP e costrizione meccanica
                    </td>
                    <td className="px-3.5 py-3 text-emerald-800 font-medium">
                      Blocco dell&apos;uncoating primario, sequestro di RNP nel citosol e arresto assemblaggio virioni
                    </td>
                    <td className="px-3.5 py-3 text-rose-800">
                      Mutazioni adattative nella nucleoproteina virale NP che aboliscono il riconoscimento da MxA
                    </td>
                  </tr>
                  <tr className="hover:bg-amber-50/40">
                    <td className="px-3.5 py-3 font-semibold text-amber-900 whitespace-nowrap">
                      4. Asse IFITM (IFITM1, 2, 3)
                    </td>
                    <td className="px-3.5 py-3 text-slate-700">
                      Up-regolazione da IFN-I sulle membrane plasmatiche ed endosomiali
                    </td>
                    <td className="px-3.5 py-3 text-slate-700">
                      Doppio strato fosfolipidico e pori di fusione envelope virale
                    </td>
                    <td className="px-3.5 py-3 text-slate-700">
                      Alterazione locale della curvatura e rigidità lipidica di membrana (emifusione bloccata)
                    </td>
                    <td className="px-3.5 py-3 text-emerald-800 font-medium">
                      Impedisce la fusione tra envelope virale e membrana cellulare/endosomiale (es. Influenza, SARS-CoV-2)
                    </td>
                    <td className="px-3.5 py-3 text-rose-800">
                      Ingresso virale alternativo per via macro-pinocitotica o mutazioni dell&apos;emoagglutinina
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-950 space-y-2 mt-4">
            <div className="font-bold flex items-center gap-2 text-purple-900 text-sm">
              <ShieldAlert className="w-4 h-4 text-purple-600" />
              Sinergia con l&apos;Immunità Adattativa e Cellule Natural Killer (NK)
            </div>
            <p className="leading-relaxed">
              Gli interferoni di tipo I non si limitano all&apos;arresto traduzionale intracellulare:
              <strong> stimolano potentemente l&apos;espressione delle molecole MHC di Classe I</strong> su tutte le cellule bersaglio,
              rendendo i peptidi virali immediatamente visibili ai linfociti T citotossici CD8+.
              Parallelamente, potenziano la capacità litica delle <strong>cellule Natural Killer (NK)</strong>, che riconoscono ed eliminano
              le cellule in cui i virus tentano di evadere il controllo sottraendo o degradando le molecole MHC-I (meccanismo del <em>missing self</em>).
            </p>
          </div>
        </div>
      </section>

      {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_LEZIONE_5} lessonNumber={5} title="Verifica dell'Apprendimento · Lezione 5" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS_LEZIONE_5} lessonNumber={5} title="Flashcard di Ripasso Attivo · Lezione 5" />
    </div>
  );
};
