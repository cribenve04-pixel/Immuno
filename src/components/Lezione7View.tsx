import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import React, { useState } from 'react';
import { InteractiveVdjRecombinationSimulator } from './InteractiveVdjRecombinationSimulator';
import { InteractiveBcellToleranceSimulator } from './InteractiveBcellToleranceSimulator';
import {
  B_CELL_STAGES_DATA,
  VDJ_ENZYMES_DATA,
  QUIZ_LEZIONE_7,
  FLASHCARDS_LEZIONE_7
} from '../data/lezione7Content';
import { ConceptMapFlow } from './ConceptMapFlow';
import { MAP_LEZIONE_7_STAGES, MAP_LEZIONE_7_CHECKPOINTS } from '../data/conceptMapsData';
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

import { IMAGES } from '../data/imageAssets';

interface Lezione7ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione7View: React.FC<Lezione7ViewProps> = ({ isSerif, fontSize }) => {
  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  return (
    <div className="space-y-12">
      {/* Chapter 7 Hero Block */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="p-6 sm:p-8 lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-mono">
                <span>Lezione 7 (Sbobina Ufficiale I e II Ora)</span>
                <span aria-hidden="true">·</span>
                <span>Prof.ssa Rosa Molfetta</span>
                <span aria-hidden="true">·</span>
                <span>15/10/2025</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
                Lezione 7: Maturazione dei Linfociti B, Checkpoint Pre-BCR ed Editing Recettoriale
              </h1>

              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                L&apos;ontogenesi molecolare dei linfociti B: dalle nicchie stromali ematopoietiche (c-Kit/SCF, CXCL12/CCR4)
                alla SCID legata all&apos;X (catena γc), la triade trascrizionale dell&apos;identità B (E2A, EBF1, PAX5 con CD19 e CD20).
                Dissezione chimica del riarrangiamento V(D)J: sequenze segnale RSS, regola 12/23, complesso RAG1/RAG2, sindrome di Omenn,
                apertura delle forcine da Artemis/DNA-PKcs, nucleotidi P e diversità giunzionale da TdT (nucleotidi N).
                Analisi del primo checkpoint del Pre-BCR (catene invarianti VpreB/λ5, segnale tonico ed esclusione allelica),
                del secondo checkpoint di tolleranza centrale con l&apos;editing recettoriale della catena leggera (fino a 4 tentativi),
                della selezione periferica nella milza mediata dall&apos;asse BAFF/BAFF-R e della coespressione di IgM e IgD per splicing alternativo.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-150 flex flex-wrap items-center gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Dna className="w-4 h-4 text-purple-600" />
                <span>Ricombinasi RAG &amp; Regola 12/23</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>Pre-BCR &amp; Segnale Tonico</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Editing Recettoriale &amp; Asse BAFF</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative bg-slate-950 min-h-[240px]">
            <img
              src={IMAGES.bCellCheckpoints}
              alt="Tavola accademica: Checkpoint Pre-BCR nel Large Pre-B e Editing Recettoriale del Linfocita B Immaturo nel Midollo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-xs border border-slate-700/60">
                Tavola Scientifica: Checkpoint Pre-BCR &amp; Editing Recettoriale
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 7.1: ORIGINE MIDOLLARE, NICCHIE STROMALI E FATTORI TROFICI */}
      <section id="sec-7-1" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
            Sezione 7.1
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Origine Midollare, Nicchie Stromali e Segnali Trofici di Localizzazione
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Interazione c-Kit / SCF, chemochine CXCL12 e il ruolo di CCR4 nel soggiorno a lungo termine nel midollo.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Come introdotto dalla docente, i linfociti B traggono la loro denominazione originaria dal sito anatomico di maturazione:
            negli uccelli la <em>Borsa di Fabrizio</em>, mentre nei mammiferi e nell&apos;uomo il <strong>midollo osseo (Bone Marrow)</strong>.
            Tuttavia, le evidenze attuali dimostrano che la maturazione non si esaurisce affatto nel midollo, bensì prosegue
            e si perfeziona a livello periferico nella <strong>polpa bianca della milza</strong>.
          </p>

          <p>
            Le <strong>cellule staminali ematopoietiche (HSC)</strong> risiedono in microambienti altamente specializzati del midollo osseo:
            le <em>nicchie endostali</em> (adiacenti all&apos;osso trabecolare) e le <em>nicchie perivascolari</em> (a ridosso dei sinusoidi).
            Queste cellule ricevono segnali trofici e di ancoraggio fondamentali dalle cellule stromali reticolari:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-3">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-blue-600">Asse Chemochinico</span>
              <h4 className="font-bold text-slate-900 text-sm">CXCL12 e CCR4 / CXCR4</h4>
              <p className="text-xs text-slate-600 leading-snug">
                La chemochina <strong>CXCL12 (SDF-1)</strong>, secreta costantemente dalle cellule stromali CAR (CXCL12-abundant reticular),
                trattiene i precursori staminali ed ematopoietici all&apos;interno delle nicchie. Questo asse viene sfruttato anche dalle
                <strong>plasmacellule a lunga sopravvivenza</strong>, che migrano nuovamente nel midollo per risiedervi per anni producendo anticorpi protettivi.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-purple-600">Asse Tirosin-Chinasico</span>
              <h4 className="font-bold text-slate-900 text-sm">c-Kit (CD117) & SCF</h4>
              <p className="text-xs text-slate-600 leading-snug">
                Il recettore tirosin-chinasico <strong>c-Kit</strong> sui progenitori lega il ligando <strong>SCF (Stem Cell Factor)</strong>,
                espresso sia in forma transmembrana sia rilasciato solubile dallo stroma. Il cross-linking avvia cascate chinasiche intracellulari
                indispensabili per la proliferazione e la sopravvivenza precoce.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-600">Asse Citochinico</span>
              <h4 className="font-bold text-slate-900 text-sm">Interleuchina-7 (IL-7)</h4>
              <p className="text-xs text-slate-600 leading-snug">
                Prodotta dalle cellule stromali del midollo osseo e dell&apos;epitelio timico.
                Guida la transizione verso il committed progenitor dei linfociti B e T.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-950 space-y-2">
            <div className="font-bold flex items-center gap-2 text-purple-900 text-sm">
              <AlertCircle className="w-4 h-4 text-purple-600" />
              Focus Sbobina: La Dicotomia Uomo-Topo su IL-7 e la SCID Legata all&apos;X
            </div>
            <p className="leading-relaxed">
              La Professoressa Molfetta ha evidenziato una differenza fondamentale tra modello murino ed essere umano:
              mentre nel topo il deficit di IL-7 abolisce totalmente lo sviluppo sia dei linfociti B sia dei T, <strong>nell&apos;uomo i linfociti B si sviluppano regolarmente anche in assenza del segnale di IL-7</strong>,
              grazie a meccanismi stromali ridondanti (come SCF/c-Kit).
              Ciò è dimostrato dalla <strong>SCID legata al cromosoma X (X-SCID)</strong>, causata da mutazioni nella <em>catena gamma comune (γc / CD132)</em>,
              subunità trasduttrice condivisa dai recettori di IL-2, IL-4, IL-7, IL-9, IL-15 e IL-21:
              i bambini affetti mostrano una <strong>totale assenza di linfociti T (per blocco di IL-7) e di cellule NK (per blocco di IL-15)</strong>,
              mentre i <strong>linfociti B sono numericamente normali (fenotipo T- B+ NK-)</strong>, pur risultando non funzionanti per assenza di T helper.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7.2: COMMITMENT, EPIGENETICA E FATTORI DI TRASCRIZIONE */}
      <section id="sec-7-2" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-purple-600 uppercase">
            Sezione 7.2
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Commitment, Rimodellamento Epigenetico e la Triade Trascrizionale B: E2A, EBF1 e PAX5
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Accessibilità della cromatina, controllo pleiotropico da microRNA e l&apos;espressione differenziale dei marcatori CD19 e CD20.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            L&apos;indirizzamento irreversibile (<em>lineage commitment</em>) della cellula progenitrice comune verso la linea B
            richiede profonde modificazioni epigenetiche della cromatina:
            acetilazione e ubiquitinazione istonica aprono i loci genici specifici del B-cell lineage (trasformando l&apos;eterocromatina in eucromatina accessibile),
            mentre network di <strong>microRNA</strong> regolano pleiotropicamente la traduzione di centinaia di messaggeri intermedi.
          </p>

          <p>
            Questo programma è orchestrato dalla cooperazione sinergica di tre fattori di trascrizione gerarchici:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-3">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-500">Fattore di Priming</span>
              <h4 className="font-bold text-slate-900 text-sm">E2A (TCF3)</h4>
              <p className="text-xs text-slate-600 leading-snug">
                Fattore bHLH che coopera con l&apos;apertura della cromatina e avvia la trascrizione di geni precoci, tra cui le ricombinasi RAG1 e RAG2.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-500">Fattore di Consolidamento</span>
              <h4 className="font-bold text-slate-900 text-sm">EBF1 (Early B-cell Factor 1)</h4>
              <p className="text-xs text-slate-600 leading-snug">
                Attiva l&apos;espressione delle catene accessorie Igα (CD79a) e Igβ (CD79b) e dei componenti della catena leggera surrogata (λ5 e VpreB).
              </p>
            </div>

            <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/70 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-purple-700">Master Regulator di Identità</span>
              <h4 className="font-bold text-purple-950 text-sm">PAX5 (BSAP)</h4>
              <p className="text-xs text-purple-900 leading-snug">
                <strong>Definisce l&apos;identità del linfocita B.</strong> Si accende nello stadio Pro-B e si spegne solo alla transizione in plasmacellula.
                Reprime irreversibilmente i geni degli altri lignaggi (Notch-1 per i T, M-CSFR per i mieloidi) e attiva geni B-specifici.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Microscope className="w-4 h-4 text-blue-600" />
              Marcatori di Membrana Attivati da PAX5: CD19 vs CD20
            </div>
            <p className="leading-relaxed">
              PAX5 guida l&apos;espressione di due glicoproteine di membrana utilizzate routinariamente nella citofluorimetria diagnostica di leucemie e linfomi B:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li><strong>CD19:</strong> compare precocemente nello stadio <em>Pre-B1</em> e permane su tutti gli stadi di maturazione fino alla plasmacellula (dove viene gradualmente down-regolato). Forma il corecettore essenziale con CD21 (CR2) e CD81.</li>
              <li><strong>CD20:</strong> compare poco dopo, nello stadio <em>Pre-B2/B immaturo</em>, e permane fino al linfocita B maturo circolante. <strong>Non è espresso sulle plasmacellule</strong>. Costituisce il bersaglio molecolare dell&apos;anticorpo monoclonale chimerico <em>Rituximab</em>, impiegato nella terapia di linfomi a cellule B e patologie autoimmuni severe.</li>
            </ul>
          </div>

          {/* Mappa Concettuale di Fine Paragrafo: Stadi di Maturazione B */}
          <ConceptMapFlow {...MAP_LEZIONE_7_STAGES} />
        </div>
      </section>

      {/* SECTION 7.3: LA MACCHINA ENZIMATICA V(D)J */}
      <section id="sec-7-3" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 uppercase">
            Sezione 7.3
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            La Macchina Enzimatica del Riarrangiamento V(D)J e le Sequenze Segnale RSS (Regola 12/23)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Attività endonucleasica del dimero RAG1/RAG2, formazione delle forcine (hairpins) e patogenesi della Sindrome di Omenn.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Nella configurazione genomica germinale, i promotori situati a monte di ciascun segmento V si trovano a centinaia di kilobasi di distanza
            dagli <em>enhancer</em> trascrizionali (localizzati a valle dei geni costanti C). Il riarrangiamento somatico ha la duplice funzione di
            generare un esone variabile unico e di <strong>avvicinare fisicamente i promotori agli enhancer</strong>, consentendo un&apos;efficiente trascrizione genica.
          </p>

          <h3 className="text-base font-bold text-slate-900 mt-4 flex items-center gap-2">
            <Dna className="w-4 h-4 text-indigo-600" />
            La Regola del 12/23: L&apos;Architettura delle Sequenze RSS
          </h3>

          <p>
            Ciascun segmento genico V, D e J è fiancheggiato da <strong>Sequenze Segnale di Ricombinazione (RSS)</strong> altamente conservate, composte da:
            un <strong>ettamero</strong> conservato (7 nt, 5&apos;-CACAGTG-3&apos;) e un <strong>nonamero</strong> conservato (9 nt, 5&apos;-ACAAAAACC-3&apos;),
            separati da una sequenza spaziatrice non conservata di <strong>12 nucleotidi</strong> (pari a 1 giro completo di elica di DNA) oppure di <strong>23 nucleotidi</strong> (pari a 2 giri completi d&apos;elica).
          </p>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
            <strong>La Regola di Giunzione 12/23:</strong> Un segmento affiancato da uno spaziatore da 12 nt può ricombinare <em>esclusivamente</em> con un segmento affiancato da uno spaziatore da 23 nt.
            Nel locus della catena pesante H, i segmenti V hanno a valle RSS da 23 nt, i segmenti D hanno RSS da 12 nt sia al 5&apos; che al 3&apos;, e i segmenti J hanno a monte RSS da 23 nt.
            Questa rigida geometria sterica <strong>impedisce l&apos;unione diretta V con J</strong> senza il segmento D intermedio, garantendo la corretta sequenza temporale di montaggio V-D-J!
          </div>

          {/* Mount VDJ Simulator */}
          <div className="pt-2">
            <InteractiveVdjRecombinationSimulator />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Scissors className="w-4 h-4 text-purple-600" />
                Complesso delle Ricombinasi RAG1 / RAG2
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                RAG1 e RAG2 formano un complesso eterotetramerico linfocita-specifico che lega simultaneamente una RSS-12 e una RSS-23,
                avvicinando i segmenti in un&apos;ansa di DNA. L&apos;attività endonucleasica di RAG taglia un singolo filamento alla giunzione tra RSS e segmento codificante;
                il gruppo 3&apos;-OH libero compie un attacco nucleofilo trans-esterificante sul filamento opposto, sigillando le estremità codificanti in una
                <strong>forcina chiusa (hairpin)</strong> ed eliminando il DNA intermedio circolare.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/70 space-y-2">
              <h4 className="font-bold text-rose-950 text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                Quadro Clinico Sbobina: La Sindrome di Omenn
              </h4>
              <p className="text-xs text-rose-900 leading-relaxed">
                Mentre le mutazioni nulle nei geni RAG causano SCID T⁻ B⁻, <strong>mutazioni ipomorfe parziali (con attività residua minima)</strong> di RAG1, RAG2 o Artemis
                provocano la <strong>Sindrome di Omenn</strong>: i rari linfociti che riescono a maturare sfuggono ai controlli di tolleranza ed espandono cloni T autoreattivi oligoclonali.
                I lattanti presentano un quadro paradossale di grave immunodeficienza con infezioni opportunistiche, associata a <strong>grave eritrodermia esfoliativa cutanea</strong>,
                alopecia, linfoadenopatia massiva, epatosplenomegalia e livelli elevatissimi di IgE sieriche ed eosinofilia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7.4: DIVERSITA' GIUNZIONALE, NUCLEOTIDI P ED N (TdT) */}
      <section id="sec-7-4" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-rose-600 uppercase">
            Sezione 7.4
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Apertura delle Forcine da Artemis, Nucleotidi P e Ipervariabilità Giunzionale con TdT (Nucleotidi N)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Diversità combinatoriale vs diversità giunzionale: come il CDR3 diventa il sito più ipervariabile dell&apos;anticorpo.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Se la specificità del repertorio anticorpale dipendesse unicamente dalla combinazione casuale dei segmenti genici
            (<em>diversità combinatoriale</em>, circa 40 V × 23 D × 6 J ≈ 5.500 varianti di catena pesante),
            il sistema immunitario non potrebbe mai riconoscere l&apos;infinita varietà dei patogeni ambientali.
            La massima quota di diversità è invece generata alla giunzione tra i segmenti (<strong>diversità giunzionale</strong>, concentrata nell&apos;ansa <strong>CDR3</strong>):
          </p>

          <ol className="list-decimal pl-5 space-y-2 text-xs text-slate-700">
            <li>
              <strong>Apertura Asimmetrica delle Forcine da Artemis / DNA-PKcs:</strong>
              La nucleasi <strong>Artemis</strong>, attivata per fosforilazione dalla subunità catalitica della chinasi <strong>DNA-PKcs</strong> (complesso del Non-Homologous End Joining),
              taglia la forcina covalentemente chiusa non al centro, ma in modo asimmetrico e sfasato. Uno dei due filamenti risulta più lungo dell&apos;altro,
              e la distensione della sequenza complementare genera le caratteristiche estremità sporgenti palindromiche, note come <strong>nucleotidi P</strong>.
            </li>
            <li>
              <strong>Aggiunta di Nucleotidi N da parte della TdT:</strong>
              Prima che la DNA polimerasi completi i filamenti, interviene l&apos;enzima linfocita-specifico <strong>TdT (Terminal deoxynucleotidyl transferase)</strong>.
              La TdT è una polimerasi unica nel suo genere, poiché <em>non necessita di alcuno stampo</em>: aggiunge in modo completamente casuale fino a 20 deossinucleotidi
              (<strong>nucleotidi N</strong>) alle estremità 3&apos; libere dei filamenti di DNA delle giunzioni V-D e D-J della catena pesante.
            </li>
            <li>
              <strong>Delezione Esonucleasica e Saldatura con DNA Ligasi IV:</strong>
              Esonucleasi rimuovono eventuali nucleotidi non appaiati e il complesso <strong>DNA Ligasi IV / XRCC4</strong> risalda covalentemente lo scheletro fosfodiesterico.
            </li>
          </ol>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
            <strong>Subpopolazioni B prive di TdT:</strong> Come sottolineato dalla docente, esistono sottopopolazioni linfocitarie (quali i <strong>linfociti B1 fetali/peritoneali</strong>)
            che si sviluppano prima della comparsa della TdT: il loro repertorio BCR è molto più ristretto, omogeneo e germinale, specializzato nel riconoscere polisaccaridi batterici e fosfolipidi comuni.
          </div>
        </div>
      </section>

      {/* SECTION 7.5: 1° CHECKPOINT E PRE-BCR */}
      <section id="sec-7-5" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
            Sezione 7.5
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Il 1° Checkpoint Midollare: Complesso del Pre-BCR (VpreB/λ5), Segnale Tonico ed Esclusione Allelica
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Verifica di produttività della catena pesante, blocco della ricombinazione sul 2° allele e mutazione BTK (Bruton).
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Poiché l&apos;aggiunta e la delezione casuale di nucleotidi provoca spesso lo sfasamento del quadro di lettura (<em>frameshift</em>)
            con comparsa di codoni di stop prematuri, circa due terzi dei riarrangiamenti VDJ risultano <strong>non produttivi</strong>.
            La cellula B deve pertanto verificare tassativamente che la catena pesante μ appena riarrangiata sia conformazionalmente stabile e capace di raggiungere la membrana:
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-600" />
              Architettura Molecolare del Pre-BCR
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              Nello stadio di <strong>grande Pre-B</strong>, i geni delle catene leggere non sono ancora stati riarrangiati (eterocromatina chiusa).
              Per poter traslocare sulla membrana plasmatica, la catena pesante μ si assembla con la <strong>catena leggera surrogata (Surrogate Light Chain, SLC)</strong>,
              costituita da due proteine invarianti codificate da geni non riarrangiabili: <strong>VpreB</strong> (omologa al dominio variabile VL) e <strong>λ5</strong> (omologa al dominio costante CL).
              Il complesso si accoppia all&apos;eterodimero trasduttore <strong>Igα / Igβ (CD79a/b)</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-blue-600">Biochimica del Segnale</span>
              <h4 className="font-bold text-slate-900 text-sm">Il Segnale Tonico Ligando-Indipendente</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Le code delle catene invarianti λ5 e VpreB sporgono dalla struttura del Pre-BCR e interagiscono spontaneamente tra complessi adiacenti.
                Ciò genera un&apos;<strong>auto-oligomerizzazione (cross-linking spontaneo)</strong> sulla membrana plasmatica del grande pre-B
                in assenza di qualsiasi antigene esterno: questo impulso costante prende il nome di <strong>segnale tonico</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-600">Conseguenze Fisiologiche</span>
              <h4 className="font-bold text-slate-900 text-sm">Burst Proliferativo & Esclusione Allelica</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Il segnale tonico attiva la chinasi <strong>BTK, BLNK e PI3K</strong> inducendo un massiccio burst proliferativo (da un singolo grande pre-B derivano fino a 64 piccoli pre-B con la stessa catena pesante).
                Parallelamente, spegne RAG1/RAG2 bloccando la ricombinazione del secondo allele della catena pesante (<strong>esclusione allelica</strong>, che garantisce l&apos;assoluta monoreattività clonale)
                e programma l&apos;apertura cromatinica dei loci delle catene leggere κ e λ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7.6: 2° CHECKPOINT E TOLLERANZA CENTRALE */}
      <section id="sec-7-6" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-600 uppercase">
            Sezione 7.6
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Il 2° Checkpoint e la Tolleranza Centrale: Editing Recettoriale (Receptor Editing), Delezione ed Anergia
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Saggio di autoreattività nel midollo osseo, tentativi genomici sequenziali (locus κ e λ) e tolleranza al self.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Una volta completato anche il riarrangiamento della catena leggera (dapprima sul primo allele κ, poi sul secondo κ,
            e se fallisce sui loci λ), il linfocita B immaturo esprime sulla membrana plasmatica un <strong>BCR completo di isotipo IgM (mIgM)</strong>.
            A questo punto interviene il <strong>secondo checkpoint midollare</strong>, che verifica non solo la funzionalità del recettore,
            ma soprattutto <strong>QUALI antigeni lega</strong>.
          </p>

          <p>
            Nel midollo osseo sono fisiologicamente presenti <em>esclusivamente antigeni self</em>. Il legame del BCR determina tre destini molecolari distinti:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-3">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-blue-600">Nessuna Autoreattività</span>
              <h4 className="font-bold text-slate-900 text-sm">Sopravvivenza & Uscita</h4>
              <p className="text-xs text-slate-600 leading-snug">
                Il BCR non riconosce componenti self stromali: il linfocita B immaturo riceve il segnale di autorizzazione e lascia il midollo per migrare nella milza.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/70 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-purple-700">Alta Affinità / Multivalente</span>
              <h4 className="font-bold text-purple-950 text-sm">Editing Recettoriale</h4>
              <p className="text-xs text-purple-900 leading-snug">
                Il forte cross-linking riattiva RAG1/2 consentendo nuovi riarrangiamenti della catena leggera (fino a 4 tentativi).
                Se l&apos;editing fallisce, la cellula viene eliminata per <strong>delezione clonale apoptotica</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/70 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-amber-700">Bassa Affinità / Solubile</span>
              <h4 className="font-bold text-amber-950 text-sm">Anergia Clonale</h4>
              <p className="text-xs text-amber-900 leading-snug">
                Il legame debole a molecole self solubili non attiva apoptosi immediata ma provoca endocitosi di mIgM e repressione funzionale: la cellula esce come clone anergico silente.
              </p>
            </div>
          </div>

          {/* Mount B-Cell Tolerance Simulator */}
          <div className="pt-2">
            <InteractiveBcellToleranceSimulator />
          </div>

          {/* Tavola Sinottica Comparativa dei Due Checkpoint Ontogenetici B */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <h4 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider">
                Quadro Sinottico Comparativo: 1° Checkpoint (Pre-BCR) vs 2° Checkpoint (Tolleranza Centrale)
              </h4>
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-xs">
                <thead className="bg-slate-50 font-semibold text-slate-800">
                  <tr>
                    <th scope="col" className="px-3.5 py-3 text-left">Parametro Molecolare</th>
                    <th scope="col" className="px-3.5 py-3 text-left">1° Checkpoint: Large Pre-B</th>
                    <th scope="col" className="px-3.5 py-3 text-left">2° Checkpoint: Immature B</th>
                    <th scope="col" className="px-3.5 py-3 text-left">Significato Fisiopatologico</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-emerald-50/40">
                    <td className="px-3.5 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      1. Complesso Recettoriale
                    </td>
                    <td className="px-3.5 py-3 text-blue-900 font-medium">
                      <strong>Pre-BCR</strong> (μ pesante + catena surrogato VpreB/λ5 + Igα/Igβ)
                    </td>
                    <td className="px-3.5 py-3 text-emerald-900 font-medium">
                      <strong>BCR Immaturo</strong> (μ pesante + catena leggera autentica κ o λ + Igα/Igβ)
                    </td>
                    <td className="px-3.5 py-3 text-slate-600">
                      Transizione da recettore invariante di controllo strutturale a recettore antigenico bivalente.
                    </td>
                  </tr>
                  <tr className="hover:bg-emerald-50/40">
                    <td className="px-3.5 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      2. Obbiettivo Biologico del Controllo
                    </td>
                    <td className="px-3.5 py-3 text-blue-900 font-medium">
                      Verificare la <strong>produttività e stabilità</strong> del riarrangiamento V-D-J della catena pesante
                    </td>
                    <td className="px-3.5 py-3 text-emerald-900 font-medium">
                      Verificare la <strong>non-autoreattività (tolleranza)</strong> contro gli autoantigeni dello stroma
                    </td>
                    <td className="px-3.5 py-3 text-slate-600">
                      Il 1° checkpoint valuta la struttura; il 2° checkpoint valuta la specificità/affinità verso il self.
                    </td>
                  </tr>
                  <tr className="hover:bg-emerald-50/40">
                    <td className="px-3.5 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      3. Natura del Segnale
                    </td>
                    <td className="px-3.5 py-3 text-blue-900 font-medium">
                      <strong>Segnale tonico ligando-indipendente</strong> (interazione omotipica code λ5/VpreB)
                    </td>
                    <td className="px-3.5 py-3 text-emerald-900 font-medium">
                      <strong>Segnale ligando-dipendente</strong> da autoantigeni di membrana o solubili dello stroma
                    </td>
                    <td className="px-3.5 py-3 text-slate-600">
                      Auto-aggregazione spontanea nel Pre-B vs legame con complessi self molecolari nel B immaturo.
                    </td>
                  </tr>
                  <tr className="hover:bg-emerald-50/40">
                    <td className="px-3.5 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      4. Stato Enzimi RAG1/RAG2
                    </td>
                    <td className="px-3.5 py-3 text-blue-900 font-medium">
                      <strong>Spegnimento immediato</strong> e degradazione proteasomiale di RAG2
                    </td>
                    <td className="px-3.5 py-3 text-emerald-900 font-medium">
                      <strong>Riattivazione mirata</strong> se autoreattivo ad alta affinità (Receptor Editing)
                    </td>
                    <td className="px-3.5 py-3 text-slate-600">
                      Garantisce l&apos;esclusione allelica di IgH al 1° checkpoint e la correzione di IgL al 2° checkpoint.
                    </td>
                  </tr>
                  <tr className="hover:bg-emerald-50/40">
                    <td className="px-3.5 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      5. Esito in Caso di Successo
                    </td>
                    <td className="px-3.5 py-3 text-blue-900 font-medium">
                      <strong>Burst mitotico (5-6 divisioni)</strong> e apertura cromatina dei loci κ/λ
                    </td>
                    <td className="px-3.5 py-3 text-emerald-900 font-medium">
                      <strong>Selezione positiva:</strong> migrazione sinusoidale verso la milza (stadi T1/T2)
                    </td>
                    <td className="px-3.5 py-3 text-slate-600">
                      Moltiplicazione del clone con catena pesante corretta e poi validazione definitiva del BCR.
                    </td>
                  </tr>
                  <tr className="hover:bg-emerald-50/40">
                    <td className="px-3.5 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      6. Esito in Caso di Fallimento
                    </td>
                    <td className="px-3.5 py-3 text-rose-800 font-medium">
                      Tentativo sul 2° allele IgH; se non produttivo → <strong>morte per mancato segnale</strong>
                    </td>
                    <td className="px-3.5 py-3 text-rose-800 font-medium">
                      Editing recettoriale (4 tentativi κ → λ); se fallisce → <strong>delezione per apoptosi</strong>
                    </td>
                    <td className="px-3.5 py-3 text-slate-600">
                      Eliminazione rigorosa sia delle cellule incompetenti che di quelle potenzialmente autoimmuni.
                    </td>
                  </tr>
                  <tr className="hover:bg-emerald-50/40">
                    <td className="px-3.5 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      7. Patologia Medica Associata
                    </td>
                    <td className="px-3.5 py-3 text-purple-900 font-medium">
                      <strong>Agammaglobulinemia di Bruton (XLA):</strong> mutazione <em>BTK</em>, arresto Pre-B
                    </td>
                    <td className="px-3.5 py-3 text-purple-900 font-medium">
                      <strong>Autoimmunità Sistemica (LES):</strong> fallimento dell&apos;editing/delezione e iper-BAFF
                    </td>
                    <td className="px-3.5 py-3 text-slate-600">
                      Deficit immunitario congenito humorale nel primo caso; perdita della tolleranza centrale nel secondo.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mappa Concettuale di Fine Paragrafo: Il Bivio di Tolleranza Centrale */}
          <ConceptMapFlow {...MAP_LEZIONE_7_CHECKPOINTS} />
        </div>
      </section>

      {/* SECTION 7.7: MILZA E ASSE BAFF/BAFF-R */}
      <section id="sec-7-7" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-amber-600 uppercase">
            Sezione 7.7
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Selezione Periferica nella Milza, Linfociti B Transizionali (T1/T2) e l&apos;Asse Vitale BAFF/BAFF-R
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Il bilancio tra segnale pro-apoptotico del BCR e segnale trofico BAFF-R, implicazioni nel Lupus LES e farmaco biologico Belimumab.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            I linfociti B che superano la selezione centrale lasciano il midollo attraverso i sinusoidi ematici e raggiungono la milza
            sotto forma di <strong>linfociti B transizionali (stadi T1 e T2)</strong>. In questi stadi intermedi, le cellule non possiedono ancora
            la piena maturità fenotipica né la capacità di proliferare in risposta al ligando; al contrario, il loro apparato di trasduzione intracellulare
            è fisiologicamente &quot;tarato&quot; per indurre <strong>segnali pro-apoptotici</strong> se ingaggiato fortemente:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-amber-600">Fattore di Sopravvivenza</span>
              <h4 className="font-bold text-slate-900 text-sm">La Citochina BAFF (BLyS)</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Appartenente alla superfamiglia del TNF, <strong>BAFF (B-cell Activating Factor)</strong> è una citochina trimerica prodotta dallo stroma splenico e dalle cellule mieloidi.
                Si lega al recettore <strong>BAFF-R</strong> sui linfociti B transizionali T2 e maturi, attivando la via non canonica di NF-κB (p52/RelB) e stimolando la trascrizione dei geni anti-apoptotici <strong>Bcl-2 e Mcl-1</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-rose-600">Il Bilancio dei Due Segnali</span>
              <h4 className="font-bold text-slate-900 text-sm">Tolleranza Periferica Splenica</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Se BCR è basso e BAFF-R è alto → MATURAZIONE.</strong><br />
                <strong>Se BCR è alto e BAFF-R è basso → APOPTOSI.</strong><br />
                I cloni anergici (che hanno down-regolato BAFF-R nel midollo) non riescono a competere per i livelli limitanti di BAFF e muoiono per inedia trofica.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-950 space-y-2">
            <div className="font-bold flex items-center gap-2 text-indigo-900 text-sm">
              <Pill className="w-4 h-4 text-indigo-600" />
              Correlazione Clinico-Terapeutica: Eccesso di BAFF nel Lupus e Belimumab
            </div>
            <p className="leading-relaxed">
              Nei pazienti affetti da <strong>Lupus Eritematoso Sistemico (LES)</strong> e sindrome di Sjögren si riscontrano concentrazioni sieriche abnormemente elevate di BAFF.
              Questo eccesso di stimolo trofico altera la soglia di tolleranza periferica, salvando dall&apos;apoptosi cloni B autoreattivi e anergici che producono autoanticorpi patogeni (anti-dsDNA, anti-Smith).
              Il farmaco biologico <strong>Belimumab</strong> è un anticorpo monoclonale umano che neutralizza specificamente BAFF solubile, ripristinando la selezione negativa periferica e riducendo le riacutizzazioni lupiche.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7.8: B MATURO FOLLICOLARE E SPLICING ALTERNATIVO IgM/IgD */}
      <section id="sec-7-8" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
            Sezione 7.8
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Il Linfocita B Maturo Follicolare (B2) e la Coespressione di IgM e IgD per Splicing Alternativo
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Homing nei follicoli guidato da CXCR5/CXCL13, ricircolo continuo e competenza all&apos;attivazione contro antigeni non-self.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Il superamento della selezione periferica nella milza sancisce l&apos;acquisizione della <strong>maturità fenotipica e funzionale</strong>:
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              La Coespressione di IgM e IgD Mediata da Splicing Alternativo dell&apos;RNA
            </h4>
            <p className="leading-relaxed">
              La coespressione simultanea di due isotipi diversi (<strong>mIgM e mIgD</strong>) sulla membrana dello stesso linfocita B maturo naive
              costituisce un evento biologico unico. Essa <strong>non deriva da modificazioni del DNA genomico</strong>, bensì dallo <em>splicing alternativo</em>
              di un lungo trascritto primario contenente l&apos;esone VDJ riarrangiato seguito dai geni costanti Cμ e Cδ:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>L&apos;utilizzo del sito di poliadenilazione a valle di Cμ produce mRNA per la catena pesante μ (→ <strong>mIgM</strong>).</li>
              <li>Lo splicing che connette direttamente VDJ a Cδ (saltando Cμ) produce mRNA per la catena pesante δ (→ <strong>mIgD</strong>).</li>
            </ul>
            <p className="pt-1 text-[11px] text-slate-600">
              Entrambe le immunoglobuline condividono la medesima catena leggera e lo stesso modulo VDJ, garantendo l&apos;assoluta identità di specificità idiotipica per l&apos;antigene.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm">Homing Follicolare: CXCR5 & CXCL13</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                I linfociti B maturi follicolari (B2) esprimono selettivamente il recettore chemochinico <strong>CXCR5</strong>.
                Seguendo il gradiente della chemochina <strong>CXCL13 (BLC)</strong>, prodotta dalle cellule dendritiche follicolari (FDC),
                entrano nei follicoli linfoidi primari della milza, dei linfonodi e delle placche di Peyer intestinali.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm">Competenza Funzionale all&apos;Attivazione</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Mentre durante la maturazione il legame al ligando generava segnali apoptotici o anergizzanti (tolleranza),
                il linfocita B maturo naive ha rimodellato il proprio apparato trasduttivo: l&apos;ingaggio del BCR da parte di un antigene non-self
                non induce più morte, bensì <strong>proliferazione massiva, ingresso nei centri germinativi e differenziazione in plasmacellula e cellule della memoria</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_LEZIONE_7} lessonNumber={7} title="Verifica dell'Apprendimento · Lezione 7" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS_LEZIONE_7} lessonNumber={7} title="Flashcard di Ripasso Attivo · Lezione 7" />
    </div>
  );
};
