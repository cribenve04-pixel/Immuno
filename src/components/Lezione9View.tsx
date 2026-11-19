import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import React, { useState } from 'react';
import { InteractiveProcessingPathwaysSimulator } from './InteractiveProcessingPathwaysSimulator';
import { InteractiveDendriticCellMaturationSimulator } from './InteractiveDendriticCellMaturationSimulator';
import {
  PATHWAY_COMPARISON_DATA,
  VIRAL_IMMUNOEVASION_DATA,
  QUIZ_LEZIONE_9,
  FLASHCARDS_LEZIONE_9
} from '../data/lezione9Content';
import { IMAGES } from '../data/imageAssets';
import { ConceptMapFlow } from './ConceptMapFlow';
import { MAP_LEZIONE_9_CYTOSOLIC_PATHWAY, MAP_LEZIONE_9_ENDOSOMAL_PATHWAY } from '../data/conceptMapsData';
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
  Rotate3D,
  Check,
  Microscope,
  Stethoscope,
  Pill,
  Clock,
  Flame,
  FileText,
  AlertCircle,
  Users,
  Heart,
  Lock,
  Unlock,
  HeartHandshake
} from 'lucide-react';

interface Lezione9ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione9View: React.FC<Lezione9ViewProps> = ({ isSerif, fontSize }) => {
  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  return (
    <div className="space-y-12">
      {/* Chapter 9 Hero Block */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-mono">
            <span>Lezione 9 (Sbobina Ufficiale I e II Ora)</span>
            <span aria-hidden="true">·</span>
            <span>Prof.ssa Rosa Molfetta</span>
            <span aria-hidden="true">·</span>
            <span>20 Ottobre 2025</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Lezione 9: La Processazione degli Antigeni Esogeni ed Endogeni
          </h1>

          <p className="mt-3 text-slate-600 text-sm leading-relaxed max-w-4xl">
            La dicotomia funzionale della processazione antigenica: come la cellula converte proteine complesse in frammenti peptidici
            idonei per l&apos;alloggiamento nelle tasche di MHC-I e MHC-II.
            La via citosolica endogena: ubiquitinazione a cascata (E1, E2, E3, catene di poliubiquitina Lys48), struttura del proteasoma 26S
            e induzione dell&apos;immunoproteasoma (subunità LMP2 e LMP7 via IFN-γ), il trasportatore ATP-dipendente TAP1/TAP2 e la sindrome del linfocita nudo di Tipo I,
            le chaperonine del RER (Calnexina, Calreticulina, ERp57, Tapasina) e il peptide trimming delle aminopeptidasi ERAP1 ed ERAP2 con suscettibilità ad autoimmunità (HLA-B27).
            L&apos;imbuto dell&apos;immunodominanza, l&apos;immunoediting tumorale delle Tre E e le sofisticate strategie di immunoevasione virale (CMV, HSV/ICP47, Adenovirus/E19, KSHV/MARCH).
            La via vescicolare esogena: captazione specialistica nelle APC (dendritiche, macrofagi con FcR/CR1, linfociti B via BCR a clatrina),
            biosintesi di MHC-II nel RER e mascheramento della tasca mediante la catena invariante (CD74 / Ii), instradamento al MIIC,
            digestione proteolitica e generazione del frammento CLIP. Lo scambio catalitico mediato da HLA-DM e la regolazione negativa da parte di HLA-DO.
            La biologia differenziativa delle Cellule Dendritiche: spegnimento dell&apos;ubiquitina ligasi endosomiale MARCH1, homing linfonodale via CCR7 (CCL19/21),
            upregolazione dei costimolatori B7-1/B7-2 (CD80/CD86) e i Tre Segnali di attivazione (priming) dei linfociti T naïve.
          </p>

          <div className="mt-6 pt-5 border-t border-slate-150 flex flex-wrap items-center gap-6 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-600" />
              <span>Proteasoma, TAP & Trimming ERAP</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-600" />
              <span>Catena Invariante CD74, CLIP & HLA-DM/DO</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>MARCH1, CCR7 & I Tre Segnali di Priming</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 9.1: DICOTOMIA FONDAMENTALE ENDOGENO VS ESOGENO */}
      <section id="sec-9-1" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
            Sezione 9.1
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Dicotomia Fondamentale: Antigeni Endogeni Citosolici vs Esogeni Vescicolari a Confronto Diretto
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            La segregazione anatomica tra patogeni intracellulari ed extracellulari, il processing degradativo e il controllo dei linfociti T.
          </p>
        </div>

        <div className={`text-slate-800 space-y-5 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Come ribadito in apertura della lezione dalla Professoressa Molfetta, l&apos;architettura del sistema immunitario
            poggia su una netta divisione del lavoro: le cellule dell&apos;organismo monitorano simultaneamente il proprio
            spazio interno (citosol) e il mondo esterno (fluidi interstiziali e lume dei vasi) attraverso due percorsi biochimici
            completamente separati: la <strong>via citosolica per MHC di classe I</strong> e la <strong>via vescicolare per MHC di classe II</strong>.
          </p>

          {/* Tavola Didattica Universitaria: Illustrazione Scientifica Comparativa ad Alta Definizione */}
          <div className="my-6 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="bg-slate-950 p-4 sm:p-6 flex items-center justify-center">
              <img
                src={IMAGES.mhc1VsMhc2Pathways}
                onError={(e) => {
                  e.currentTarget.src = '/images/mhc1_vs_mhc2_pathways_1793615522510.jpg';
                }}
                alt="Tavola anatomica e biochimica comparata delle due vie di processazione antigenica: MHC-I a sinistra e MHC-II a destra"
                className="w-full max-h-[520px] object-contain rounded-xl shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5 sm:p-6 bg-slate-50/80 border-t border-slate-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-blue-700 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  Tavola 9.1 · Schema Strutturale Comparato: Processazione MHC-I vs MHC-II
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  Risoluzione Subcellulare: Proteasoma 26S · Canale TAP · Catena Invariante CD74 · MIIC · HLA-DM
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-serif-body">
                <strong>Dissezione Topografica e Molecolare:</strong> A sinistra, nella <strong>via endogena (MHC-I)</strong>,
                proteine citosoliche (virali o mutate) marcate da <em>poliubiquitina Lys48</em> vengono frammentate dal
                <strong> Proteasoma 26S</strong> (o Immunoproteasoma con LMP2/LMP7). I peptidi generati sono pompati nel <strong>RER</strong>
                tramite il trasportatore ATP-dipendente <strong>TAP1/TAP2</strong> e rifiniti dall&apos;aminopeptidasi <strong>ERAP1/2</strong>.
                Nel RER, la catena α di MHC-I assemblata con la <strong>β2-microglobulina</strong> e assistita dal complesso di carico PLC
                (<em>Tapasina, Calreticulina, ERp57</em>) accoglie il peptide (8-10 aa) e, transitando per il <strong>Golgi</strong>,
                raggiunge la superficie per l&apos;ingaggio del <strong>TCR e del corecettore CD8</strong> del linfocita T citotossico.
                <br className="my-1.5" />
                A destra, nella <strong>via esogena (MHC-II)</strong>, microbi extracellulari vengono internalizzati per <em>endocitosi o fagocitosi</em>
                e digeriti dalle <strong>catepsine lisosomiali</strong> a pH acido. Nel RER, le catene α e β di MHC-II vengono assemblate con
                la <strong>Catena Invariante (CD74 / Ii)</strong>, che ne blocca la tasca impedendo il legame di peptidi endogeni. Nel compartimento
                tardivo <strong>MIIC</strong>, la catena invariante viene degradata lasciando il frammento <strong>CLIP</strong>; lo chaperone catalitico
                <strong> HLA-DM</strong> rimuove CLIP e inserisce il peptide antigenico ad alta affinità. Il complesso viaggia in membrana per l&apos;esposizione
                al <strong>TCR e corecettore CD4</strong> del linfocita T helper.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/70 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-blue-700">Via Endogena (MHC di Classe I)</span>
              <h4 className="font-bold text-blue-950 text-sm">Sorveglianza Citosolica & Linfociti T CD8+ CTL</h4>
              <p className="text-xs text-blue-900 leading-relaxed font-serif-body">
                Riguarda tutte le proteine sintetizzate o presenti all&apos;interno del <strong>citoplasma cellulare</strong> (antigeni endogeni):
                proteine virali neosintetizzate durante infezioni intracellulari, proteine mutate in cellule neoplastiche, oppure normali proteine self con emivita scaduta.
                Poiché qualsiasi cellula nucleata può subire infezione o trasformazione tumorale, <strong>l&apos;MHC-I è espresso su tutte le cellule nucleate</strong>.
                L&apos;effetto finale del riconoscimento è la <em>lisi citotossica</em> della cellula bersaglio da parte del linfocita T CD8+.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/70 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-700">Via Esogena (MHC di Classe II)</span>
              <h4 className="font-bold text-emerald-950 text-sm">Sorveglianza Vescicolare & Linfociti T CD4+ Helper</h4>
              <p className="text-xs text-emerald-900 leading-relaxed font-serif-body">
                Riguarda proteine captate dallo <strong>spazio extracellulare</strong> (antigeni esogeni):
                batteri, miceti, parassiti, tossine o virus opsonizzati internalizzati per endocitosi, fagocitosi o macropinocitosi.
                È espressa costitutivamente in modo ristretto sulle <strong>cellule presentanti l&apos;antigene (APC) professioniste</strong>:
                cellule dendritiche, macrofagi e linfociti B.
                L&apos;effetto del riconoscimento è la secrezione di citochine da parte del linfocita CD4+ per potenziare le difese antibatteriche o anticorpali.
              </p>
            </div>
          </div>

          {/* Tabella Sinottica Comparativa MHC-I vs MHC-II */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs my-4">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Caratteristica Molecolare</th>
                  <th className="p-3 text-blue-900 bg-blue-50/50">Via Citosolica (MHC di Classe I)</th>
                  <th className="p-3 text-emerald-900 bg-emerald-50/50">Via Vescicolare (MHC di Classe II)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-700">
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-semibold text-slate-900">Origine dell&apos;Antigene</td>
                  <td className="p-3">Proteine intracellulari / citosoliche (virali, tumorali, self anomale)</td>
                  <td className="p-3">Proteine extracellulari captate (batteri, tossine, funghi, corpi cellulari)</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-semibold text-slate-900">Macchinario Proteolitico</td>
                  <td className="p-3 font-mono font-bold text-blue-700">Proteasoma 26S & Immunoproteasoma (LMP2/LMP7)</td>
                  <td className="p-3 font-mono font-bold text-emerald-700">Catepsine endolisosomiali a pH acido (B, D, L, S)</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-semibold text-slate-900">Trasporto nel Reticolo Endoplasmatico</td>
                  <td className="p-3">Obbligatorio via canale ATPasico <strong>TAP1 / TAP2</strong></td>
                  <td className="p-3">Nessuno (l&apos;antigene non entra mai nel RER; resta nei vacuoli)</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-semibold text-slate-900">Protezione della Tasca nel RER</td>
                  <td className="p-3">Complesso PLC (Tapasina, Calreticulina, ERp57, Calnexina)</td>
                  <td className="p-3">Trimero di <strong>Catena Invariante CD74 (Ii)</strong> con peptide <strong>CLIP</strong></td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-semibold text-slate-900">Sito di Caricamento del Peptide</td>
                  <td className="p-3">Lume del <strong>Reticolo Endoplasmatico Rugoso (RER)</strong></td>
                  <td className="p-3">Compartimento endosomiale tardivo <strong>MIIC</strong></td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-semibold text-slate-900">Catalizzatore di Scambio Peptidico</td>
                  <td className="p-3">Tapasina (stabilizza la tasca vuota vicino a TAP)</td>
                  <td className="p-3 font-mono font-bold text-emerald-800">HLA-DM (rimuove CLIP; regolato da HLA-DO)</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-semibold text-slate-900">Lunghezza Ottimale del Peptide</td>
                  <td className="p-3"><strong>8 – 10 aminoacidi</strong> (tasca chiusa alle estremità)</td>
                  <td className="p-3"><strong>12 – 24 aminoacidi</strong> (tasca aperta alle estremità)</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-semibold text-slate-900">Distribuzione Cellulare</td>
                  <td className="p-3">Tutte le cellule nucleate + piastrine (eccetto eritrociti)</td>
                  <td className="p-3">APC professioniste: Cellule Dendritiche, Macrofagi, Linfociti B</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-semibold text-slate-900">Linfocita T Effettore Ristretto</td>
                  <td className="p-3 font-bold text-blue-900">Linfocita T CD8+ (Citotossico / CTL)</td>
                  <td className="p-3 font-bold text-emerald-900">Linfocita T CD4+ (Helper: Th1, Th2, Th17, Tfh)</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-semibold text-slate-900">Patologia da Deficit / Bersaglio Evasione</td>
                  <td className="p-3 text-rose-700">
                    Sindrome del Linfocita Nudo Tipo I (mutazione TAP1/2); blocco da Herpes ICP47 e CMV
                  </td>
                  <td className="p-3 text-purple-700">
                    Sindrome del Linfocita Nudo Tipo II (mutazione fattori CIITA/RFX); deficit HLA-DM
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Simulatore Interattivo Integrato delle Vie di Processazione */}
          <div className="pt-2">
            <InteractiveProcessingPathwaysSimulator />
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-2">
            <div className="font-bold flex items-center gap-2 text-amber-900 text-sm">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              Concetto Didattico Cardine: Sono i Linfociti T che Decidono quando Attivarsi!
            </div>
            <p className="leading-relaxed font-serif-body">
              Le molecole MHC non hanno il compito di distinguere il self dal non-self:
              sulla membrana sono stabili solo sotto forma di trimero (catena α, catena β/β2M e peptide)
              e in condizioni di salute espongono continuamente una miriade di peptidi self endogeni o esogeni.
              <strong>Gli MHC campionano ed espongono neutralmente tutto ciò che è presente nei compartimenti cellulari</strong>.
              La discriminazione tra innocuità e pericolo è demandata unicamente al repertorio clonale dei <strong>linfociti T</strong>,
              che si attivano solo se il loro recettore TCR riconosce la conformazione specifica di un complesso pMHC non-self.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9.2: LA VIA ENDOGENA: UBIQUITINA & PROTEASOMA 26S */}
      <section id="sec-9-2" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
            Sezione 9.2
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            La Via Endogena: Ubiquitinazione e Macchinario Proteasomico 26S
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            La cascata E1-E2-E3, il legame poliubiquitinico su Lys48 e la digestione proteolitica ATP-dipendente.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Tutte le proteine citosoliche (siano esse proteine cellulari giunte a fine emivita, proteine con folding errato
            o proteine virali neosintetizzate durante un&apos;infezione) vengono marcate per la distruzione mediante l&apos;aggiunta covalente dell&apos;<strong>ubiquitina</strong> (8 kDa).
            La coniugazione dell&apos;ubiquitina avviene sui residui amminoacidici di <strong>lisina</strong> del substrato attraverso una reazione ordinata a tre tappe:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-3">
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-blue-600">Enzima E1</span>
              <h4 className="font-bold text-slate-900 text-xs">Attivazione dell’Ubiquitina</h4>
              <p className="text-[11px] text-slate-600 leading-snug">
                Idrolizza ATP e forma un legame tioestere ad alta energia con l&apos;estremità C-terminale dell&apos;ubiquitina. Nelle cellule esiste essenzialmente <strong>un solo tipo</strong> di E1.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-purple-600">Enzima E2</span>
              <h4 className="font-bold text-slate-900 text-xs">Coniugazione & Trasferimento</h4>
              <p className="text-[11px] text-slate-600 leading-snug">
                Riceve l&apos;ubiquitina attivata da E1 trasferendola sul proprio residuo di cisteina attivo. Esistono <strong>vari tipi</strong> di E2 nella cellula.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-600">Enzima E3</span>
              <h4 className="font-bold text-slate-900 text-xs">Ligasi e Selezione del Substrato</h4>
              <p className="text-[11px] text-slate-600 leading-snug">
                Riconosce specificamente il substrato bersaglio e catalizza il trasferimento dell&apos;ubiquitina. Ne esistono <strong>moltissimi tipi</strong>, garantendo l&apos;alta specificità della via.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              Il Segnale di Degradazione: Poliubiquitinazione Lys48
            </h4>
            <p className="leading-relaxed">
              L&apos;ubiquitina possiede a sua volta residui di lisina (Lys48, Lys63, Lys11, ecc.).
              Mentre le mono-ubiquitinazioni o le catene Lys63 regolano la trasduzione del segnale o la riparazione del DNA,
              il segnale tassativo riconosciuto dal proteasoma per la degradazione proteolitica è costituito da una <strong>catena di almeno quattro ubiquitine legate tramite la Lisina 48 (Lys48)</strong>.
              Durante la proteolisi, l&apos;ubiquitina viene staccata intatta da de-ubiquitinasi (DUB) e riciclata per nuovi cicli catalitici.
            </p>
          </div>

          <h3 className="text-base font-bold text-slate-900 mt-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600" />
            Architettura del Proteasoma 20S / 26S
          </h3>

          <p>
            Il proteasoma è un cilindro macromolecolare cavo costituito da <strong>28 subunità raggruppate in 4 anelli concentrici sovrapposti</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>Due anelli esterni α (regolatori):</strong> riconoscono le catene di poliubiquitina, agganciano il substrato, ne promuovono l&apos;apertura e ne mediano l&apos;unfolding ATP-dipendente attraverso il canale centrale.</li>
            <li><strong>Due anelli interni β (catalitici):</strong> contengono i siti attivi proteolitici a treonina con attività chimiotriptica, triptica e peptidil-glutamilica che tagliano la proteina in peptidi di varia lunghezza.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 9.3: L'IMMUNOPROTEASOMA E IL TRASPORTATORE TAP1/TAP2 */}
      <section id="sec-9-3" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-purple-600 uppercase">
            Sezione 9.3
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            L&apos;Immunoproteasoma e il Trasportatore TAP1/TAP2
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Induzione da parte di IFN-γ, subunità LMP2/LMP7 e la sindrome del linfocita nudo di Tipo I.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-950 space-y-2">
            <div className="font-bold flex items-center gap-2 text-purple-900 text-sm">
              <Flame className="w-4 h-4 text-purple-600" />
              L&apos;Immunoproteasoma: Ottimizzazione del Taglio Peptidico guidata da IFN-γ
            </div>
            <p className="leading-relaxed">
              Durante infezioni virali o stimoli flogistici, l&apos;<strong>Interferone-gamma (IFN-γ)</strong> induce la sintesi di nuove subunità catalitiche:
              <strong>LMP2</strong> (β1i) e <strong>LMP7</strong> (β5i), codificate proprio all&apos;interno del <strong>locus HLA su cromosoma 6</strong> (tra i geni di classe II e classe I).
              Queste subunità sostituiscono quelle ordinarie del proteasoma convertendolo in <strong>immunoproteasoma</strong>.
              L&apos;immunoproteasoma taglia con straordinaria efficienza le proteine virali liberando peptidi di <strong>8-10 aminoacidi</strong>
              dotati di residui idrofobici o basici all&apos;estremità carbossilica (leucina, isoleucina, valina): esattamente i residui àncora richiesti dalla tasca di MHC-I e dal trasportatore TAP!
            </p>
          </div>

          <h3 className="text-base font-bold text-slate-900 mt-4 flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-600" />
            Il Trasportatore TAP1/TAP2 (Transporter Associated with Antigen Processing)
          </h3>

          <p>
            Mentre la degradazione proteica avviene nel citoplasma, le catene di MHC-I vengono sintetizzate sui ribosomi del <strong>Reticolo Endoplasmatico Rugoso (RER)</strong>
            e la loro tasca di legame sporge nel lume del reticolo.
            Il passaggio dei peptidi citosolici nel lume del RER è mediato dal <strong>complesso eterodimerico TAP1/TAP2</strong>:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li>Appartiene alla superfamiglia dei trasportatori <strong>ABC (ATP-Binding Cassette)</strong> e consuma ATP per pompare i peptidi contro gradiente;</li>
            <li>È codificato anch&apos;esso nel locus HLA del cromosoma 6p21;</li>
            <li>Lega selettivamente peptidi di lunghezza compresa tra <strong>8 e 13 aminoacidi</strong> dotati di residui carbossi-terminali idrofobici o basici.</li>
          </ul>

          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-950 space-y-2">
            <div className="font-bold flex items-center gap-2 text-rose-900 text-sm">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              Correlazione Clinica: La Sindrome del Linfocita Nudo di Tipo I
            </div>
            <p className="leading-relaxed">
              Mutazioni autosomiche recessive nei geni <em>TAP1</em> o <em>TAP2</em> causano la rara <strong>Sindrome del Linfocita Nudo di Tipo I (Bare Lymphocyte Syndrome Type I)</strong>.
              In assenza di TAP funzionante, i peptidi generati nel citoplasma non possono entrare nel RER.
              Poiché le molecole MHC-I richiedono tassativamente il peptide per stabilizzare la propria conformazione terziaria,
              gli eterodimeri vuoti vengono trattenuti nel RE e degradati:
              <strong>la superficie dei leucociti e delle cellule somatiche è quasi totalmente priva di MHC-I</strong>.
              I pazienti presentano una gravissima deplezione di linfociti T citotossici CD8+ ed infezioni respiratorie batteriche croniche necrotizzanti.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9.4: COMPLESSO PLC, CHAPERONINE & TRIMMING ERAP */}
      <section id="sec-9-4" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 uppercase">
            Sezione 9.4
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Il Complesso di Caricamento (PLC), Tapasina e il Trimming delle ERAP
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Calnexina, Calreticulina, ERp57, Tapasina e il ruolo delle aminopeptidasi ERAP1/ERAP2 nella suscettibilità autoimmune.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Nel lume del reticolo endoplasmatico rugoso, l&apos;assemblaggio della catena pesante α di MHC-I con la β2-microglobulina e il caricamento del peptide
            è coordinato da una staffetta altamente specializzata di <strong>chaperonine molecolari</strong>, denominata <strong>Complesso di Caricamento Peptidico (PLC - Peptide Loading Complex)</strong>:
          </p>

          <ol className="list-decimal pl-5 space-y-2 text-xs text-slate-700">
            <li>
              <strong>Calnexina:</strong> appena la catena α neosintetizzata emerge nel lume del RE, la calnexina la aggancia mantenendola parzialmente distesa e impedendone la precipitazione;
            </li>
            <li>
              <strong>Ingresso di β2M:</strong> quando la β2-microglobulina si associa al dominio α3, la calnexina si dissocia e subentra la <strong>Calreticulina</strong> affiancata dalla tiol-ossidoreduttasi <strong>ERp57</strong> (che stabilizza i ponti disolfuro intramolecolari);
            </li>
            <li>
              <strong>Tapasina:</strong> proteina transmembrana che funge da vero e proprio <em>ponte fisico</em> ancorando la molecola MHC-I direttamente al poro del trasportatore TAP1/TAP2. La tapasina funge inoltre da <em>peptide editor</em>, mantenendo aperta la tasca di legame finché non vi entra un peptide dotato di alta affinità.
            </li>
          </ol>

          <h3 className="text-base font-bold text-slate-900 mt-4 flex items-center gap-2">
            <Microscope className="w-4 h-4 text-purple-600" />
            Il Trimming Peptidico da parte di ERAP1 ed ERAP2
          </h3>

          <p>
            Mentre la tasca di MHC-I accoglie rigidamente peptidi lunghi al massimo <strong>8-10 aminoacidi</strong>,
            il trasportatore TAP pompare nel RER anche peptidi più lunghi (fino a 13-16 aa).
            Per consentirne l&apos;alloggiamento, intervengono due aminopeptidasi del lume del RE: <strong>ERAP1</strong> ed <strong>ERAP2</strong> (Endoplasmic Reticulum Aminopeptidase):
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li>Tagliano sequenzialmente i residui all&apos;estremità <strong>N-terminale</strong> del peptide fino a raggiungere la lunghezza ottimale di 9 aminoacidi (arrestano spontaneamente il taglio quando il peptide raggiunge 8-9 aa);</li>
            <li>Possono agire sia su peptidi liberi nel lume, sia su peptidi che hanno già impegnato l&apos;estremità C-terminale nella tasca di MHC-I lasciando sporgere l&apos;N-terminale;</li>
            <li>
              <strong>Polimorfismi e Suscettibilità alle Malattie Autoimmuni:</strong> ERAP1 ed ERAP2 presentano varianti alleliche e isoforme di splicing alternativo (ERAP1a/b; ERAP2 funzionale vs codone di stop troncato).
              Individui che ereditano <strong>isoforme di ERAP ad alta attività catalitica</strong> presentano una maggiore efficienza nel processare anche peptidi self,
              aumentando marcatamente il rischio di sviluppare malattie autoimmuni come la <strong>Spondilite Anchilosante</strong> in presenza dell&apos;allele <strong>HLA-B*27</strong>!
            </li>
          </ul>

          {/* Mount Pathway Simulator */}
          <div className="pt-2">
            <InteractiveProcessingPathwaysSimulator />
          </div>

          {/* Mappa Concettuale di Fine Paragrafo: Via Citosolica MHC-I */}
          <ConceptMapFlow {...MAP_LEZIONE_9_CYTOSOLIC_PATHWAY} />
        </div>
      </section>

      {/* SECTION 9.5: IMMUNODOMINANZA ED IMMUNOEVASIONE VIRALE & TUMORALE */}
      <section id="sec-9-5" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-rose-600 uppercase">
            Sezione 9.5
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            L&apos;Imbuto dell&apos;Immunodominanza ed Immunoevasione Virale & Tumorale
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Filtri di selezione dei peptidi, immunoediting tumorale delle Tre E e meccanismi virali di blocco.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            L&apos;Imbuto Molecolare dell&apos;Immunodominanza
          </h3>

          <p>
            Un intero genoma virale può potenzialmente codificare oltre <strong>100.000 peptidi teorici</strong>.
            Eppure, l&apos;organismo infettato attiva cloni di linfociti T citotossici CD8+ diretti contro appena <strong>20-50 peptidi immunodominanti</strong>.
            Questo drastico restringimento è determinato dal superamento sequenziale di una serie di rigorosi filtri biochimici:
          </p>

          <ol className="list-decimal pl-5 space-y-1 text-xs text-slate-700">
            <li>Solo le proteine virali degradate efficientemente dal proteasoma generano frammenti;</li>
            <li>Solo i frammenti dotati di residui compatibili vengono traslocati nel RE da TAP;</li>
            <li>Solo i peptidi della lunghezza corretta sfuggono alla distruzione e legano stabilmente la tasca dell&apos;MHC-I dell&apos;individuo;</li>
            <li>Solo i complessi pMHC capaci di stimolare cloni T CD8+ non delezionati nel timo attivano una risposta effettrice.</li>
          </ol>

          <h3 className="text-base font-bold text-slate-900 mt-4 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-600" />
            Strategie Virali di Immunoevasione
          </h3>

          <p>
            Poiché la via dell&apos;MHC-I è l&apos;unico meccanismo con cui il sistema immunitario intercetta patogeni intracellulari,
            i virus che stabiliscono infezioni croniche o latenti hanno evoluto un impressionante arsenale di proteine per sabotare questa via:
          </p>

          <div className="overflow-x-auto my-2">
            <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <thead className="bg-slate-100 text-slate-800 font-mono text-[11px] uppercase">
                <tr>
                  <th className="p-3 border-b border-slate-200">Patogeno Virale</th>
                  <th className="p-3 border-b border-slate-200">Proteina Virale</th>
                  <th className="p-3 border-b border-slate-200">Bersaglio Molecolare & Meccanismo</th>
                  <th className="p-3 border-b border-slate-200">Impatto Immunologico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                {VIRAL_IMMUNOEVASION_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-semibold text-slate-900">{row.virus}</td>
                    <td className="p-3 font-mono font-bold text-rose-600">{row.viralProtein}</td>
                    <td className="p-3 text-[11px]">{row.targetMechanism}</td>
                    <td className="p-3 text-[11px] leading-relaxed">{row.immunologicalImpact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-slate-900 mt-4 flex items-center gap-2">
            <Activity className="w-4 h-4 text-purple-600" />
            Immunoediting Tumorale: Eliminazione, Equilibrio ed Evasione
          </h3>

          <p>
            Sotto la costante pressione selettiva dei linfociti T citotossici, i cloni neoplastici vanno incontro a un processo evolutivo in tre fasi:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>Fase di Eliminazione:</strong> i CD8+ riconoscono i neoantigeni presentati da MHC-I e distruggono le cellule trasformate;</li>
            <li><strong>Fase di Equilibrio:</strong> selezione darwiniana di cloni tumorali resistenti meno immunogenici;</li>
            <li>
              <strong>Fase di Evasione:</strong> il tumore sfugge al controllo arrestando l&apos;espressione dei neoantigeni oppure downregolando MHC-I.
              Ciò può avvenire con meccanismi <em>reversibili</em> (ipermetilazione del promotore o microRNA inibitori)
              oppure con meccanismi <em>irreversibili</em> legati all&apos;instabilità genomica, come la <strong>mutazione/delezione del gene della β2-microglobulina</strong>,
              che azzera permanentemente l&apos;espressione di qualsiasi molecola MHC-I di superficie!
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 9.6: LA VIA ESOGENA: CAPTAZIONE & TRAFFICO ENDOLISOSOMIALE */}
      <section id="sec-9-6" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-600 uppercase">
            Sezione 9.6
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            La Via Esogena: Meccanismi di Captazione e Traffico Endolisosomiale
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Endocitosi mediata da recettore BCR a clatrina, fagocitosi guidata da opsonine e macropinocitosi.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Gli antigeni esogeni provengono dall&apos;ambiente extracellulare e devono essere captati attivamente dalle cellule presentanti l&apos;antigene.
            Le tre APC professioniste impiegano strategie di internalizzazione differenti e complementari:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-3">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-600">Cellule Dendritiche</span>
              <h4 className="font-bold text-slate-900 text-xs">Macropinocitosi & Fagocitosi</h4>
              <p className="text-[11px] text-slate-600 leading-snug">
                Capaci di "bere" enormi volumi di fluidi extracellulari mediante <strong>macropinocitosi</strong> (inglobando antigeni solubili)
                e di fagocitare interi batteri o corpi apoptotici. Sono le sentinelle tessutali per eccellenza.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-blue-600">Macrofagi</span>
              <h4 className="font-bold text-slate-900 text-xs">Fagocitosi & Opsonine</h4>
              <p className="text-[11px] text-slate-600 leading-snug">
                Fagocitano microbi di grandi dimensioni. L&apos;efficienza è moltiplicata dai recettori per le <strong>opsonine</strong>:
                recettori <strong>FcγR</strong> che legano le IgG legate al microbo e recettori <strong>CR1</strong> che legano il frammento C3b del complemento.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-purple-600">Linfociti B</span>
              <h4 className="font-bold text-slate-900 text-xs">Endocitosi via BCR a Clatrina</h4>
              <p className="text-[11px] text-slate-600 leading-snug">
                Non sono fagociti. Captano gli antigeni con altissima affinità mediante il <strong>BCR</strong>:
                il legame dell&apos;antigene induce clustering del recettore e recluta la proteina <strong>clatrina</strong>,
                formando vescicole endocitiche ideali per catturare tossine batteriche e particelle virali anche a picomoli di concentrazione.
              </p>
            </div>
          </div>

          <p>
            Le vescicole endocitiche neoformate (*early endosome*) subiscono un processo di fusione sequenziale con lisosomi acidi.
            Grazie all&apos;attività di pompe protoniche vacuolari (V-ATPase), il pH scende da 6.5 a valori acidi compresi tra <strong>4.5 e 5.0</strong>.
            A questo pH ottimale si attivano le <strong>catepsine (B, D, L, S)</strong>, proteasi acide che frammentano l&apos;antigene in peptidi
            di lunghezza variabile (13-25 aminoacidi).
          </p>
        </div>
      </section>

      {/* SECTION 9.7: BIOSINTESI MHC-II, CATENA INVARIANTE CD74 & CLIP */}
      <section id="sec-9-7" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-purple-600 uppercase">
            Sezione 9.7
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Biosintesi nel RER, Catena Invariante (CD74 / Ii) e Frammento CLIP
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Il mascheramento della tasca peptidica nel reticolo e il transito al compartimento MIIC.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Anche le molecole MHC di classe II vengono sintetizzate sui ribosomi del reticolo endoplasmatico rugoso.
            Tuttavia, il lume del RER è costantemente inondato dai peptidi citosolici traslocati da TAP e destinati all&apos;MHC-I.
            Per evitare che questi peptidi endogeni occupino erroneamente la tasca di legame di MHC-II, la cellula adotta un meccanismo raffinatissimo:
          </p>

          <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-950 space-y-2">
            <h4 className="font-bold text-purple-900 text-sm flex items-center gap-2">
              <Lock className="w-4 h-4 text-purple-600" />
              La Catena Invariante (CD74 / Ii)
            </h4>
            <p className="leading-relaxed">
              La <strong>catena invariante (CD74 / Invariant chain, Ii)</strong> è una proteina transmembrana non polimorfa che si assembla nel RER sotto forma di <strong>trimero</strong>.
              Ciascun monomero di CD74 si lega a un eterodimero α/β di MHC-II, formando un gigantesco complesso nonamerico [(αβ)₃(Ii)₃].
              Una regione specifica della catena invariante si inserisce direttamente all&apos;interno della tasca di legame di MHC-II,
              <strong>bloccandola fisicamente contro qualsiasi peptide presente nel RE</strong>!
              Inoltre, la coda citoplasmatica di CD74 contiene un segnale di smistamento a due leucina (dileucine motif) che guida il complesso
              attraverso il Golgi direttamente verso i compartimenti lisosomiali acidi, noti come <strong>MIIC (MHC Class II Compartment)</strong>.
            </p>
          </div>

          <h3 className="text-base font-bold text-slate-900 mt-4 flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" />
            La Nascita del Frammento CLIP (Class II-associated Invariant chain Peptide)
          </h3>

          <p>
            Quando il complesso nonamerico giunge nel compartimento MIIC, le catepsine lisosomiali (in particolare la catepsina S nelle DC e B, e la catepsina L nell&apos;epitelio timico)
            digeriscono proteoliticamente la catena invariante CD74.
            Tuttavia, il segmento che risiede direttamente all&apos;interno della tasca di legame peptidica è protetto dall&apos;azione delle proteasi:
            l&apos;unico residuo che sopravvive alla degradazione è un peptide di circa 24 aminoacidi denominato <strong>CLIP</strong>.
            A questo punto, la molecola MHC-II si trova nel lisosoma insieme ai peptidi esogeni derivati dal patogeno,
            ma <strong>ha ancora la tasca ostruita dal peptide CLIP</strong>!
          </p>
        </div>
      </section>

      {/* SECTION 9.8: CHAPERONE HLA-DM (PEPTIDE EDITING) & REGOLATORE HLA-DO */}
      <section id="sec-9-8" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-600 uppercase">
            Sezione 9.8
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Lo Scambio Peptidico Mediato da HLA-DM e la Regolazione Negativa di HLA-DO
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Il chaperone catalitico "peptide editor" e la regolazione dello stato di attivazione della cellula.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-2">
            <h4 className="font-bold text-emerald-900 text-sm flex items-center gap-2">
              <Unlock className="w-4 h-4 text-emerald-600" />
              HLA-DM: Il Catalizzatore dello Scambio Peptidico (Peptide Editor)
            </h4>
            <p className="leading-relaxed">
              La rimozione attiva di CLIP è operata da <strong>HLA-DM</strong>, una proteina non polimorfica codificata nel locus HLA.
              HLA-DM non lega peptidi antigenici: agisce come un enzima chaperone conformazionale.
              Nei lisosomi acidi, HLA-DM si associa lateralmente alla molecola MHC-II inducendo una distorsione della tasca
              che <strong>determina il rilascio rapido del frammento CLIP</strong>.
              HLA-DM stabilizza la conformazione vuota di MHC-II e permette l&apos;ingresso dei peptidi antigenici generati dalla digestione esogena.
              Se il peptide che entra ha bassa affinità, HLA-DM ne promuove la dissociazione finché la tasca non viene occupata
              da un peptide dotato di <strong>alta affinità e lunga emivita</strong> (funzione di <em>peptide editing</em>).
            </p>
          </div>

          <h3 className="text-base font-bold text-slate-900 mt-4 flex items-center gap-2">
            <Shield className="w-4 h-4 text-purple-600" />
            HLA-DO: Il Freno Molecolare Naturale di HLA-DM
          </h3>

          <p>
            Nelle cellule dendritiche immature e nei linfociti B naïve resting, l&apos;attività di HLA-DM è rigidamente controllata da un inibitore:
            la molecola <strong>HLA-DO</strong>.
            HLA-DO si associa a HLA-DM con legame ad alta affinità e ne blocca l&apos;azione catalitica.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-amber-600">Cellule Resting (Immature)</span>
              <h4 className="font-bold text-slate-900 text-xs">HLA-DO Alto → Presentazione Ristretta</h4>
              <p className="text-[11px] text-slate-600 leading-snug">
                L&apos;elevata espressione di HLA-DO tiene a freno HLA-DM. La rimozione di CLIP è lenta: vengono caricate poche molecole di classe II,
                in gran parte associate a peptidi self, preservando la tolleranza immunologica periferica.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-600">Cellule Attivate (+ TLR / BCR)</span>
              <h4 className="font-bold text-slate-900 text-xs">Downregolazione di HLA-DO → Esplosione di Presentazione</h4>
              <p className="text-[11px] text-slate-600 leading-snug">
                Il riconoscimento di patogeni non-self arresta la trascrizione di HLA-DO. HLA-DM libera catalizza lo scambio massivo di CLIP
                con i peptidi microbici esogeni, massimizzando la presentazione ai linfociti CD4+ T helper.
              </p>
            </div>
          </div>

          {/* Mappa Concettuale di Fine Paragrafo: Via Endosomiale MHC-II */}
          <ConceptMapFlow {...MAP_LEZIONE_9_ENDOSOMAL_PATHWAY} />
        </div>
      </section>

      {/* SECTION 9.9: BIOLOGIA DELLE CELLULE DENDRITICHE & PRIMING */}
      <section id="sec-9-9" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
            Sezione 9.9
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Biologia delle Cellule Dendritiche: Ubiquitina Ligasi MARCH1, CCR7 e i Tre Segnali
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            La transizione da sentinella tissutale a potente APC linfonodale e i tre segnali per il priming dei T naïve.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-600" />
            Il Ruolo dell&apos;Ubiquitina Ligasi Endosomiale MARCH1
          </h3>

          <p>
            La Professoressa Molfetta ha spiegato un meccanismo molecolare di estrema importanza clinica:
            nelle cellule dendritiche immature residenti nei tessuti periferici (come le cellule di Langerhans dell&apos;epidermide),
            le molecole MHC di classe II sono continuamente internalizzate e degradate nei lisosomi.
            Questo continuo turnover è mediato da <strong>MARCH1</strong>, un&apos;ubiquitina ligasi E3 localizzata nella membrana degli endosomi:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li>MARCH1 ubiquitina un residuo conservato di lisina nella coda citoplasmatica della catena β di MHC-II;</li>
            <li>Le molecole ubiquitinate vengono smistate verso i lisosomi e distrutte, mantenendo la loro emivita basale brevissima (~10 ore);</li>
            <li>
              <strong>Spegnimento mediato da TLR:</strong> non appena la DC riconosce un patogeno tramite i recettori PRR/TLR,
              la trascrizione del gene <em>MARCH1</em> viene spenta immediatamente!
              Le molecole MHC-II caricate con peptidi virali o batterici non vengono più ubiquitinate:
              <strong>la loro emivita balza a oltre 40 ore</strong> e si accumulano in densità massiva sulla membrana plasmatica.
            </li>
          </ul>

          <h3 className="text-base font-bold text-slate-900 mt-4 flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-600" />
            La Chemiotassi Guidata da CCR7 e i Tre Segnali di Priming
          </h3>

          <p>
            L&apos;attivazione induce inoltre l&apos;espressione del recettore chemochinico <strong>CCR7</strong>,
            che risponde ai gradienti di <strong>CCL19 e CCL21</strong> espressi dai vasi linfatici e dalle cellule reticolari dell&apos;area T dei linfonodi drenanti.
            Giunta nel linfonodo, la DC matura è l&apos;unica APC capace di effettuare il <strong>priming</strong> (la prima attivazione)
            di un linfocita T naïve grazie alla fornitura simultanea dei <strong>Tre Segnali Tassativi</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-2">
            <div className="p-3.5 rounded-xl border border-blue-200 bg-blue-50/70 space-y-1 text-xs">
              <span className="font-bold text-blue-900 block">Segnale 1: Specificità</span>
              <p className="text-blue-800">
                Interazione del <strong>TCR</strong> con il complesso pMHC e docking del corecettore (CD4 o CD8).
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/70 space-y-1 text-xs">
              <span className="font-bold text-emerald-900 block">Segnale 2: Costimolazione</span>
              <p className="text-emerald-800">
                Le molecole <strong>B7-1 (CD80)</strong> e <strong>B7-2 (CD86)</strong> della DC legano il recettore <strong>CD28</strong> sul linfocita T (indispensabile per sopravvivenza e proliferazione).
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-purple-200 bg-purple-50/70 space-y-1 text-xs">
              <span className="font-bold text-purple-900 block">Segnale 3: Polarizzazione</span>
              <p className="text-purple-800">
                Citochine solubili rilasciate dalla DC (IL-12 per Th1, IL-4 per Th2, TGF-β + IL-6 per Th17) che indirizzano il destino effettore.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Users className="w-4 h-4 text-indigo-600" />
              Specializzazione Funzionale: Dendritiche vs Macrofagi e Linfociti B
            </h4>
            <p className="leading-relaxed">
              Le tre APC professioniste non sono ridondanti:
              le <strong>Cellule Dendritiche</strong> sono dedicate al <em>priming</em> iniziale dei linfociti T naïve nei linfonodi.
              I <strong>Macrofagi</strong> e i <strong>Linfociti B</strong> presentano l&apos;antigene prevalentemente ai linfociti T <em>effettori</em> già differenziati:
              il macrofago presenta per ricevere IFN-γ ed essere attivato a uccidere i microbi endocitati;
              il linfocita B presenta per ricevere segnali via CD40L e citochine per completare la maturazione a plasmacellula e operare lo switch isotipico ad alta affinità.
            </p>
          </div>

          {/* Mount DC Maturation Simulator */}
          <div className="pt-2">
            <InteractiveDendriticCellMaturationSimulator />
          </div>
        </div>
      </section>

      {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_LEZIONE_9} lessonNumber={9} title="Verifica dell'Apprendimento · Lezione 9" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS_LEZIONE_9} lessonNumber={9} title="Flashcard di Ripasso Attivo · Lezione 9" />
    </div>
  );
};
