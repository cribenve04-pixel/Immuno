import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import React, { useState } from 'react';
import { InteractiveCrossPresentationSimulator } from './InteractiveCrossPresentationSimulator';
import { InteractiveSuperantigenVsNonProteinSimulator } from './InteractiveSuperantigenVsNonProteinSimulator';
import {
  DC_SUBSETS_DATA,
  NON_CLASSICAL_T_CELLS_DATA,
  SUPERANTIGEN_DATA,
  QUIZ_LEZIONE_10,
  FLASHCARDS_LEZIONE_10
} from '../data/lezione10Content';
import { IMAGES } from '../data/imageAssets';
import { ConceptMapFlow } from './ConceptMapFlow';
import { MAP_LEZIONE_10_CROSS_PRESENTATION, MAP_LEZIONE_10_NON_PEPTIDIC } from '../data/conceptMapsData';
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
  HeartHandshake,
  Share2
} from 'lucide-react';

interface Lezione10ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione10View: React.FC<Lezione10ViewProps> = ({ isSerif, fontSize }) => {
  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  return (
    <div className="space-y-12">
      {/* Chapter 10 Hero Block */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-mono">
            <span>Lezione 10 (Sbobina Ufficiale I e II Ora)</span>
            <span aria-hidden="true">·</span>
            <span>Prof.ssa Rosa Molfetta</span>
            <span aria-hidden="true">·</span>
            <span>22 Ottobre 2025</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Lezione 10: Cross-Presentazione, Autofagia, Cross-Dressing, Superantigeni e Presentazione di Antigeni Non Proteici
          </h1>

          <p className="mt-3 text-slate-600 text-sm leading-relaxed max-w-4xl">
            Il completamento dell&apos;architettura di processazione e presentazione antigenica: le eccezioni e i casi particolari che governano l&apos;immunità complessa.
            La cooperazione cellulare tra linfociti T ed APC effettrici e il ruolo trimerico dell&apos;asse CD40:CD40L (CD154) nella maturazione macrofagica (burst ossidativo e iNOS) e linfocitaria B (switch isotipico e affinamento).
            La via dell&apos;autofagia (macroautofagia, microautofagia e chaperone-mediata) con i marcatori LC3 e Atg8 per la presentazione di antigeni endogeni citosolici su MHC di classe II.
            La Cross-Presentazione (presentazione crociata) mediata dalla sottopopolazione cDC1 (dipendente da BATF3/IRF8): il pathway citosolico (canali ERAD/ERGIC, proteasoma e TAP) e il pathway vacuolare endolisosomiale per l&apos;innesco citotossico di linfociti T CD8+ contro tumori e cellule apoptotiche infette.
            I meccanismi di Cross-Dressing: trogocitosi diretta di membrana, esosomi tumorali e nanotubi citoplasmatici.
            I Superantigeni batterici stafilococcici e streptococcici (TSST-1, enterotossine SEA-SED, SpeA/C): aggancio esterno tra MHC-II e domini Vβ del TCR, attivazione policlonale massiva del 20-25% dei linfociti T e tempesta citochinica da shock tossico.
            La presentazione di antigeni non proteici da parte di molecole monomorfiche non-HLA del cromosoma 1: le molecole CD1 (CD1d) leganti lipidi e derivati della ceramide per le cellule NKT con TCR semi-invariante Vα24-Jα18, e la proteina MR1 legante metaboliti batterici della Riboflavina (Vitamina B2) per le cellule MAIT residenti nelle mucose e nel fegato.
          </p>

          <div className="mt-6 pt-5 border-t border-slate-150 flex flex-wrap items-center gap-6 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Share2 className="w-4 h-4 text-blue-600" />
              <span>Cross-Presentazione cDC1 & Cross-Dressing</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-rose-600" />
              <span>Superantigeni (SAg) & Shock Tossico</span>
            </div>
            <div className="flex items-center gap-2">
              <Dna className="w-4 h-4 text-indigo-600" />
              <span>Piattaforme CD1 (NKT) & MR1 (MAIT)</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 10.1: ASSE CD40:CD40L & COOPERAZIONE APC EFFETTRICI */}
      <section id="sec-10-1" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
            Sezione 10.1
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            La Cooperazione T:APC e l&apos;Asse Fondamentale CD40:CD40L (CD154)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            La trimerizzazione recettoriale, l&apos;induzione di iNOS nei macrofagi e lo switch isotipico nei linfociti B.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Nelle lezioni precedenti è stata stabilita la rigorosa divisione funzionale tra le cellule presentanti l&apos;antigene:
            mentre le <strong>cellule dendritiche</strong> sono le uniche deputate al <em>priming</em> iniziale dei linfociti T naïve nei linfonodi,
            i <strong>macrofagi</strong> e i <strong>linfociti B</strong> agiscono come APC specializzate nell&apos;interagire con linfociti T che sono <strong>già effettori differenziati</strong>.
          </p>

          <p>
            Quando un linfocita T naïve si attiva per la prima volta, va incontro a una massiccia riprogrammazione trascrizionale:
            tra le prime e più importanti proteine espresse sulla sua superficie vi è il <strong>ligando del CD40 (CD40L o CD154)</strong>,
            una proteina transmembrana appartenente alla superfamiglia del Tumor Necrosis Factor (TNF).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/70 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-blue-700">Cooperazione con i Macrofagi</span>
              <h4 className="font-bold text-blue-950 text-sm">Burst Ossidativo & Uccisione Intrafagosomiale</h4>
              <p className="text-xs text-blue-900 leading-relaxed">
                Molti batteri intracellulari (come <em>Mycobacterium tuberculosis</em> o <em>Leishmania</em>) possono resistere all&apos;interno del fagosoma senza essere uccisi.
                Quando il macrofago presenta l&apos;antigene al T helper effettore, il <strong>CD154 trimerico</strong> del linfocita T lega e trimerizza il <strong>CD40</strong> del macrofago.
                In combinazione con l&apos;<strong>IFN-γ</strong> secreto dal T helper, questo segnale attiva la <strong>ossido nitrico sintetasi inducibile (iNOS)</strong>
                e l&apos;<strong>ossidasi fagocitica</strong>: la massiccia produzione di specie reattive dell&apos;ossigeno (ROS) e di ossido nitrico (NO) porta all&apos;eradicazione del patogeno intrafagosomiale.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/70 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-purple-700">Cooperazione con i Linfociti B</span>
              <h4 className="font-bold text-purple-950 text-sm">Switch Isotipico & Maturazione dell’Affinità</h4>
              <p className="text-xs text-purple-900 leading-relaxed">
                Il linfocita B capta l&apos;antigene specifico tramite il BCR a clatrina, lo processa e lo espone su MHC-II.
                L&apos;interazione del <strong>CD40</strong> del linfocita B con il <strong>CD40L</strong> del T helper effettore,
                unitamente alle citochine istruenti rilasciate dal T, è il segnale tassativo che permette al linfocita B di proliferare,
                sopravvivere (inibizione dei fattori pro-apoptotici) e attivare l&apos;enzima AID (Activation-Induced Cytidine Deaminase)
                per compiere lo <strong>scambio di classe immunoglobulinica (switch isotipico ad IgG, IgA, IgE)</strong>
                e l&apos;<strong>ipermutazione somatica con maturazione dell&apos;affinità</strong> nei centri germinativi.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Feedback Positivo di Espressione MHC e Costimolatori</span>
            </div>
            <p className="leading-relaxed">
              Il segnale mediato da CD40 trimerizzato induce nei macrofagi e nei linfociti B una marcata <strong>upregolazione delle molecole MHC di classe II e dei costimolatori B7-1/B7-2</strong>,
              trasformando queste cellule in APC via via più potenti ed efficienti durante il prosieguo della risposta immunitaria.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10.2: AUTOFAGIA ED ANTIGENI CITOSOLICI SU MHC-II */}
      <section id="sec-10-2" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-purple-600 uppercase">
            Sezione 10.2
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            L&apos;Autofagia e la Presentazione di Antigeni Endogeni su MHC di Classe II
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Integrazione tra compartimento citoplasmatico e lisosomiale: macroautofagia, microautofagia e marcatori LC3/Atg8.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Nelle lezioni precedenti è stata illustrata la separazione canonica: MHC-I per antigeni citosolici ed MHC-II per antigeni vescicolari esogeni.
            Tuttavia, come spiegato dalla Professoressa Molfetta, <strong>queste due vie sono in realtà intercomunicanti</strong>.
            La prima grande eccezione al dogma è rappresentata dalla presentazione di <strong>proteine citosoliche (endogene) su molecole MHC di classe II</strong>,
            fenomeno reso possibile dal macchinario dell&apos;<strong>autofagia</strong>:
          </p>

          <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-950 space-y-2">
            <h4 className="font-bold text-purple-900 text-sm flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-600" />
              L&apos;Innesco dell&apos;Autofagosoma in Condizioni di Stress Cellulare
            </h4>
            <p className="leading-relaxed">
              L&apos;autofagia è un meccanismo costitutivo presente in tutte le cellule, che viene fortemente potenziato in condizioni di stress metabolico:
              <strong>mancanza di nutrienti (starvation)</strong>, <strong>ipossia tissutale</strong>, accumulo di aggregati proteici mal ripiegati
              o quando la cellula tumorale va incontro a <strong>transizione epitelio-mesenchima (EMT)</strong> staccandosi dal connettivo per migrare.
              Per procurarsi energia e amminoacidi di recupero, la cellula attiva proteine specifiche:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-purple-900">
              <li><strong>LC3:</strong> lega i lipidi di membrana e promuove la curvatura e la formazione dell&apos;autofagosoma a doppia membrana;</li>
              <li><strong>Atg8:</strong> proteina ubiquitina-like che si complessa a LC3 e funge da marcatore selettivo di ciò che deve essere inglobato (proteine solubili, aggregati o interi mitocondri);</li>
              <li>L&apos;autofagosoma così formato <strong>si fonde con i compartimenti endolisosomiali</strong> (autofagolisosoma), dove le catepsine a pH acido digeriscono le proteine citosoliche in peptidi che vengono caricati sulle molecole <strong>MHC di classe II</strong>!</li>
            </ul>
          </div>

          <h3 className="text-base font-bold text-slate-900 mt-4 flex items-center gap-2">
            <Microscope className="w-4 h-4 text-blue-600" />
            Le Tre Modalità di Autofagia
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-2 text-xs">
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="font-bold text-slate-900 block">1. Macroautofagia</span>
              <p className="text-slate-600 text-[11px] leading-snug">
                Formazione de novo di vescicole a doppia membrana (autofagosomi) nel citoplasma che sequestrano porzioni di citosol e organelli prima di fondersi con il lisosoma.
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="font-bold text-slate-900 block">2. Microautofagia</span>
              <p className="text-slate-600 text-[11px] leading-snug">
                Invaginazione diretta della membrana del lisosoma stesso, che risucchia e ingloba porzioni limitrofe di citoplasma direttamente nel lume litico.
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="font-bold text-slate-900 block">3. Chaperone-Mediata</span>
              <p className="text-slate-600 text-[11px] leading-snug">
                Proteine da shock termico (es. Hsc70) riconoscono il motivo sequenziale <em>KFERQ</em> su proteine citosoliche solubili e le traslocano attraverso il recettore lysosomiale Lamp2A.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-600">
            <strong>Regolazione omeostatica aggiuntiva:</strong> la Professoressa Molfetta ha evidenziato che le proteine LC3 e Atg8
            regolano anche complessi che promuovono l&apos;endocitosi e la degradazione costitutiva delle molecole MHC di classe I in condizioni basali (in assenza di danno),
            mantenendone controllata la densità superficiale omeostatica.
          </p>
        </div>
      </section>

      {/* SECTION 10.3: CROSS-PRESENTAZIONE & LE CDC1 */}
      <section id="sec-10-3" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 uppercase">
            Sezione 10.3
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            La Cross-Presentazione (Presentazione Crociata) e la Sottopopolazione cDC1
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Presentazione di antigeni esogeni su MHC-I per il priming dei CTL CD8+ e tassonomia delle cellule dendritiche.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 space-y-2">
            <h4 className="font-bold text-blue-900 text-sm flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-600" />
              Perché la Cross-Presentazione è una Necessità Biologica Tassativa?
            </h4>
            <p className="leading-relaxed">
              Tutti i linfociti T naïve (vergini) che hanno superato la maturazione timica necessitano inderogabilmente di essere attivati
              da una <strong>cellula dendritica</strong> all&apos;interno dei linfonodi per proliferare e differenziare in effettori.
              Ciò vale sia per i CD4+ sia per i CD8+.
              Tuttavia, <strong>molti virus non infettano le cellule dendritiche</strong> (infettano epatociti, epiteli polmonari o neuroni),
              e <strong>le cellule tumorali derivano da mutazioni di tessuti periferici</strong> senza che la dendritica sia essa stessa trasformata.
              Se la DC potesse presentare su MHC-I soltanto ciò che sintetizza nel proprio citosol, l&apos;organismo non potrebbe MAI innescare una risposta di linfociti T CD8+
              contro virus a tropismo periferico o contro i tumori!
              La <strong>cross-presentazione</strong> risolve questo dilemma: consente alla DC di captare frammenti esogeni o cellule morte
              e instradarli sulla via dell&apos;MHC di classe I.
            </p>
          </div>

          <h3 className="text-base font-bold text-slate-900 mt-4 flex items-center gap-2">
            <Users className="w-4 h-4 text-indigo-600" />
            La Specialista Assoluta: La Sottopopolazione cDC1
          </h3>

          <p>
            Le cellule dendritiche non costituiscono una popolazione uniforme, bensì una famiglia eterogenea di sottopopolazioni fenotipicamente e funzionalmente distinte:
          </p>

          <div className="overflow-x-auto my-2">
            <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <thead className="bg-slate-100 text-slate-800 font-mono text-[11px] uppercase">
                <tr>
                  <th className="p-3 border-b border-slate-200">Sottopopolazione DC</th>
                  <th className="p-3 border-b border-slate-200">Marcatori Chiave Umani</th>
                  <th className="p-3 border-b border-slate-200">Fattori Trascrizionali</th>
                  <th className="p-3 border-b border-slate-200">Funzione Immunologica Primaria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                {DC_SUBSETS_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-bold font-mono text-blue-700">{row.subset}</td>
                    <td className="p-3 font-mono text-[11px]">{row.humanMarkers}</td>
                    <td className="p-3 font-mono font-semibold text-purple-700">{row.transcriptionFactors}</td>
                    <td className="p-3 text-[11px] leading-relaxed">{row.primaryFunction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 10.4: I DUE PATHWAY DI CROSS-PRESENTAZIONE & SIMULATORE */}
      <section id="sec-10-4" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
            Sezione 10.4
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Meccanismi Non-Canonici di Presentazione: Cross-Presentazione cDC1 vs Superantigeni (SAg)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Dissezione comparata della presentazione crociata di antigeni esogeni su MHC-I e del bypass molecolare dei superantigeni batterici.
          </p>
        </div>

        <div className={`text-slate-800 space-y-5 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Oltre alle vie canoniche di processazione citosolica ed endolisosomiale, il sistema immunitario dispone di
            meccanismi specialistici per rispondere ad eccezioni biologiche cruciali: la <strong>cross-presentazione</strong>
            (che permette alle cellule dendritiche cDC1 di innescare cloni CD8+ contro antigeni esogeni tumorali o virali)
            e il fenomeno patologico dei <strong>superantigeni</strong> (tossine che bypassano la processazione unendo forzatamente MHC-II e TCR).
          </p>

          {/* Tavola Didattica Universitaria: Illustrazione Scientifica Comparativa ad Alta Definizione */}
          <div className="my-6 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="bg-slate-950 p-4 sm:p-6 flex items-center justify-center">
              <img
                src={IMAGES.crossPresAndSuperantigen}
                onError={(e) => {
                  e.currentTarget.src = '/images/cross_pres_and_superantigen_1793615539507.jpg';
                }}
                alt="Tavola scientifica comparativa della Cross-Presentazione cDC1 a sinistra e del meccanismo dei superantigeni a destra"
                className="w-full max-h-[520px] object-contain rounded-xl shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5 sm:p-6 bg-slate-50/80 border-t border-slate-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-indigo-700 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  Tavola 10.1 · Schema Strutturale Comparato: Cross-Presentazione cDC1 vs Superantigeni (SAg)
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  Risoluzione Molecolare: Canale ERAD · Proteasoma 26S · TAP · Aggancio Laterale MHC-II/Vβ
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-serif-body">
                <strong>Dissezione Topografica e Molecolare:</strong> A sinistra, nella <strong>Presentazione Crociata (Cross-Presentation)</strong>
                delle cellule dendritiche convenzionali 1 (<em>cDC1</em>), residui di cellule tumorali o apoptotiche inglobati nel <strong>fagosoma</strong>
                fuggono nel citosol attraverso il canale di retro-traslocazione <strong>ERAD / Sec61</strong>. Qui vengono degradati dal <strong>Proteasoma 26S</strong>;
                i peptidi risultanti vengono pompati nel <strong>Reticolo Endoplasmatico (RE)</strong> dal trasportatore <strong>TAP</strong>, caricati su molecole
                <strong> MHC di classe I</strong> e trasportati in membrana per il <strong>priming dei linfociti T citotossici CD8+</strong>.
                <br className="my-1.5" />
                A destra, nel <strong>Meccanismo dei Superantigeni (SAg)</strong>, una tossina batterica esogena (es. <em>TSST-1</em> di <em>S. aureus</em> o enterotossine)
                non richiede alcuna processazione intracellulare: agisce come una morsa molecolare che si ancora alla superficie esterna della catena α o β di
                <strong> MHC di classe II</strong> e al dominio <strong>Vβ del TCR</strong>, completamente al di fuori della tasca peptidica. Questo legame
                forzato attiva indiscriminatamente fino al <strong>20-25% di tutti i linfociti T naïve</strong>, scatenando una mortale <strong>tempesta citochinica</strong>
                (TNF-α, IL-1, IL-2, IFN-γ) e lo shock tossico (TSS).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/70 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-blue-700">1. Pathway Citosolico cDC1</span>
              <h4 className="font-bold text-blue-950 text-sm">TAP &amp; Proteasoma Dipendente</h4>
              <p className="text-xs text-blue-900 leading-relaxed font-serif-body">
                Le proteine contenute nei fagolisosomi fuoriescono attivamente nel citosol attraverso il traslocone <strong>ERAD (Endoplasmic-Reticulum-Associated Degradation)</strong>
                o mediante vescicole trasportate in senso retrogrado verso l&apos;<strong>ERGIC (ER-Golgi Intermediate Compartment)</strong>.
                Una volta nel citosol, l&apos;antigene viene poliubiquitinato e degradato dal proteasoma;
                i peptidi risultanti vengono pompati nel RER dal trasportatore <strong>TAP1/TAP2</strong> e alloggiano nell&apos;MHC-I secondo la via classica.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/70 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-700">2. Pathway Vacuolare cDC1</span>
              <h4 className="font-bold text-emerald-950 text-sm">TAP &amp; Proteasoma Indipendente</h4>
              <p className="text-xs text-emerald-900 leading-relaxed font-serif-body">
                L&apos;antigene non sfugge nel citoplasma: viene degradato all&apos;interno degli endosomi o fagolisosomi ad opera di proteasi lisosomiali (in particolare la <strong>catepsina S</strong>).
                I peptidi generati vengono caricati direttamente su molecole MHC-I che transitano o ricircolano dalla membrana plasmatica all&apos;interno del compartimento endosomiale,
                scambiando il peptide self con il peptide esogeno direttamente nel vacuolo acido.
              </p>
            </div>
          </div>

          {/* Tabella Sinottica Comparativa dei Meccanismi Non-Canonici */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs my-4">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Meccanismo di Presentazione</th>
                  <th className="p-3">Cellula Presentante (APC)</th>
                  <th className="p-3">Molecola Espositrice</th>
                  <th className="p-3">Natura dell&apos;Antigene</th>
                  <th className="p-3">Sito di Legame sul TCR</th>
                  <th className="p-3">Esito Funzionale / Clinico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-700">
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-bold text-indigo-700">Cross-Presentazione</td>
                  <td className="p-3 font-medium">Cellule dendritiche cDC1 (BATF3+/IRF8+)</td>
                  <td className="p-3 font-mono font-bold text-blue-700">MHC di Classe I</td>
                  <td className="p-3">Peptidi esogeni (tumori, cellule apoptotiche infette)</td>
                  <td className="p-3">Anse CDR3α e CDR3β (tasca peptidica canonica)</td>
                  <td className="p-3 text-emerald-700 font-semibold">Priming citotossico CD8+ clonale antitumorale/antivirale</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-bold text-rose-700">Superantigeni (SAg)</td>
                  <td className="p-3 font-medium">Qualsiasi APC esprimente MHC-II</td>
                  <td className="p-3 font-mono font-bold text-emerald-700">MHC di Classe II</td>
                  <td className="p-3">Tossine proteiche intatte (TSST-1, SpeA, enterotossine)</td>
                  <td className="p-3 font-bold text-rose-700">Superficie laterale Vβ (esterno alla tasca)</td>
                  <td className="p-3 text-rose-700 font-semibold">Attivazione policlonale massiva (20-25%), tempesta citochinica, shock tossico</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-bold text-slate-900">Presentazione CD1d</td>
                  <td className="p-3 font-medium">APC, cellule dendritiche, timociti corticali</td>
                  <td className="p-3 font-mono font-bold text-purple-700">Molecola CD1d (non polimorfica)</td>
                  <td className="p-3">Lipidi e glicolipidi (α-GalCer, micobatteri)</td>
                  <td className="p-3">TCR semi-invariante Vα24-Jα18 delle cellule NKT</td>
                  <td className="p-3 text-purple-700 font-semibold">Rilascio fulmineo di IL-4 e IFN-γ da parte delle cellule NKT</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-bold text-slate-900">Presentazione MR1</td>
                  <td className="p-3 font-medium">Tutte le cellule esprimenti MR1</td>
                  <td className="p-3 font-mono font-bold text-amber-700">Proteina MR1 (cromosoma 1)</td>
                  <td className="p-3">Metaboliti della Riboflavina / Vitamina B2 (5-OP-RU)</td>
                  <td className="p-3">TCR semi-invariante Vα7.2 delle cellule MAIT</td>
                  <td className="p-3 text-amber-700 font-semibold">Difesa antibatterica rapida a livello di mucose e fegato</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mount Simulator */}
          <div className="pt-2">
            <InteractiveCrossPresentationSimulator />
          </div>

          {/* Mappa Concettuale di Fine Paragrafo: Cross-Presentazione cDC1 */}
          <ConceptMapFlow {...MAP_LEZIONE_10_CROSS_PRESENTATION} />
        </div>
      </section>

      {/* SECTION 10.5: CROSS-DRESSING, TROGOCITOSI & ESOSOMI */}
      <section id="sec-10-5" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-purple-600 uppercase">
            Sezione 10.5
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Il Fenomeno del Cross-Dressing: Trogocitosi, Esosomi e Nanotubi
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Presentazione semidiretta di complessi MHC-I:peptide preformati senza processazione intracellulare.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Oltre alla cross-presentazione convenzionale (in cui la DC deve elaborare l&apos;antigene con i propri enzimi),
            la Professoressa Molfetta ha dettagliato una via alternativa di straordinaria rilevanza immunologica: il <strong>Cross-Dressing</strong> (o via semidiretta).
            Nel cross-dressing, la cellula dendritica <strong>acquisisce complessi MHC-I:peptide già completamente assemblati da altre cellule</strong>
            ed inizia ad esporli direttamente sulla propria membrana plasmatica:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-3 text-xs">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-purple-600">Trogocitosi</span>
              <h4 className="font-bold text-slate-900 text-xs">Morsicatura di Membrana</h4>
              <p className="text-slate-600 text-[11px] leading-snug">
                Durante il contatto fisico cellula-cellula mediato da coppie recettore-ligando, la dendritica "morsica" e incorpora porzioni intatte di membrana plasmatica della cellula adiacente (tumorale o infetta), esponendone i complessi pMHC-I.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-blue-600">Vescicole Extracellulari</span>
              <h4 className="font-bold text-slate-900 text-xs">Esosomi & Microvescicole</h4>
              <p className="text-slate-600 text-[11px] leading-snug">
                Le cellule tumorali rilasciano continuamente nanovescicole (esosomi endosomiali) e microvescicole di gemmazione plasmatica: queste vescicole contengono complessi pMHC-I che si fondono direttamente con la membrana della DC.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-600">Nanotubi di Membrana</span>
              <h4 className="font-bold text-slate-900 text-xs">Ponti Citoplasmatici Continui</h4>
              <p className="text-slate-600 text-[11px] leading-snug">
                Estroflessioni tubulari sottili che collegano direttamente due cellule, fungendo da binari per il trasferimento intercellulare rapido di proteine di membrana e complessi immunitari.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-600">
            <strong>Vantaggio terapeutico:</strong> il cross-dressing consente alle cellule dendritiche di presentare neoantigeni tumorali
            anche qualora le cellule tumorali abbiano mutato o perso la proteina TAP, il proteasoma o le chaperonine intracellulari!
          </p>
        </div>
      </section>

      {/* SECTION 10.6: I SUPERANTIGENI & SHOCK TOSSICO */}
      <section id="sec-10-6" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-rose-600 uppercase">
            Sezione 10.6
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            I Superantigeni (SAg): Meccanismo Molecolare e Sindrome da Shock Tossico
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Attivazione non convenzionale, scavalcamento della tasca peptidica e tempesta citochinica policlonale.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-950 space-y-2">
            <h4 className="font-bold text-rose-900 text-sm flex items-center gap-2">
              <Flame className="w-4 h-4 text-rose-600" />
              L&apos;Attivazione Policlonale Non Convenzionale
            </h4>
            <p className="leading-relaxed">
              I <strong>Superantigeni (SAg)</strong> sono esotossine proteiche secrete da batteri Gram-positivi (in primis <em>Staphylococcus aureus</em> e <em>Streptococcus pyogenes</em>)
              che sovvertono radicalmente le regole dell&apos;immunologia:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-rose-900">
              <li><strong>Zero processazione intracellulare:</strong> non necessitano di essere internalizzati, frammentati da proteasi né alloggiati nella tasca peptidica;</li>
              <li><strong>Ponte molecolare esterno:</strong> si legano intatti all&apos;esterno della molecola <strong>MHC di classe II</strong> (su residui invarianti della catena β o α) e contemporaneamente agganciano il dominio <strong>Vβ variabile del TCR</strong>;</li>
              <li><strong>Attivazione massiva policlonale:</strong> qualsiasi linfocita T che esprima quel dato segmento Vβ viene attivato all&apos;istante, a prescindere dalla specificità del suo TCR. Mentre un antigene convenzionale attiva lo 0.0001-0.001% dei cloni, un superantigene attiva simultaneamente <strong>fino al 20-25% di tutti i linfociti T dell&apos;organismo</strong>!</li>
            </ul>
          </div>

          <div className="overflow-x-auto my-2">
            <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <thead className="bg-slate-100 text-slate-800 font-mono text-[11px] uppercase">
                <tr>
                  <th className="p-3 border-b border-slate-200">Esotossina Superantigenica</th>
                  <th className="p-3 border-b border-slate-200">Batterio Produttore</th>
                  <th className="p-3 border-b border-slate-200">Segmento Vβ Bersaglio</th>
                  <th className="p-3 border-b border-slate-200">Manifestazione Clinica Primaria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                {SUPERANTIGEN_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-bold font-mono text-rose-700">{row.toxin}</td>
                    <td className="p-3 font-semibold text-slate-900">{row.sourceOrganism}</td>
                    <td className="p-3 font-mono text-purple-700">{row.tcrTarget}</td>
                    <td className="p-3 text-[11px] leading-relaxed">{row.clinicalManifestation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-700">
            L&apos;iperattivazione incontrollata scatena una massiccia <strong>tempesta citochinica</strong>:
            i linfociti Th rilasciano dosi letali di <strong>TNF-α</strong>, <strong>IL-1β</strong>, <strong>IL-2</strong> e <strong>IFN-γ</strong>.
            Il TNF-α induce dilatazione arteriolare generalizzata e perdita di barriera endoteliale, esitando nella <strong>Sindrome da Shock Tossico (TSS)</strong>
            con ipotensione refrattaria ai liquidi, danno polmonare acuto (ARDS), rash desquamativo a guanto ed insufficienza multiorgano (MOF).
          </p>

          {/* Mount Dual Simulator */}
          <div className="pt-2">
            <InteractiveSuperantigenVsNonProteinSimulator />
          </div>
        </div>
      </section>

      {/* SECTION 10.7: PRESENTAZIONE NON PROTEICA: CD1 & NKT */}
      <section id="sec-10-7" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 uppercase">
            Sezione 10.7
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Presentazione di Antigeni Non Proteici: Le Molecole CD1 e le Cellule NKT
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Piattaforme invarianti sul cromosoma 1, tasche idrofobiche per lipidi/ceramidi e cellule NKT.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            I linfociti T convenzionali riconoscono unicamente peptidi proteici lineari associati a molecole MHC classiche.
            Tuttavia, l&apos;organismo possiede popolazioni di linfociti T &quot;innati&quot; o non convenzionali che fungono da ponte immediato tra immunità innata ed adattativa,
            specializzati nel riconoscimento di <strong>antigeni non proteici</strong>.
            La prima grande famiglia è costituita dalle <strong>molecole CD1</strong> e dalle <strong>cellule NKT (Natural Killer T)</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-indigo-600">La Famiglia Molecolare CD1</span>
              <h4 className="font-bold text-slate-900 text-sm">Struttura MHC-I-like Monomorfa</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Le molecole CD1 (CD1a, CD1b, CD1c, CD1d, CD1e) sono glicoproteine transmembrana associate non covalentemente alla <strong>β2-microglobulina</strong>.
                A differenza dell&apos;MHC classico:
                1) <strong>Non sono codificate nel locus HLA</strong>, ma su geni monomorfi situati sul <strong>Cromosoma 1</strong>;
                2) <strong>Non sono polimorfe</strong> (sono identiche in tutti gli individui della specie umana);
                3) Possiedono una tasca di legame eccezionalmente profonda e idrofobica, ideale per accogliere le code aciliche apolari di <strong>lipidi, glicolipidi e derivati della ceramide</strong>, lasciando sporgere verso il TCR la testa polare idrofila.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-purple-600">Le Cellule NKT (Natural Killer T)</span>
              <h4 className="font-bold text-slate-900 text-sm">TCR Semi-Invariante Vα24-Jα18</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Esprimono marcatori tipici delle cellule NK (CD16, CD56 nell&apos;uomo; NK1.1 nel topo) unitamente a un <strong>TCR invariante</strong>
                (catena Vα24-Jα18 associata a Vβ11 nell&apos;uomo).
                Le NKT (spesso doppi negativi CD4-CD8- o CD4+) riconoscono lipidi presentati da <strong>CD1d</strong> (come la galattosilceramide sintetico α-GalCer o fosfolipidi micobatterici).
                Entro pochi minuti dall&apos;innesco, rilasciano quantità enormi e simultanee di <strong>IFN-γ</strong> e <strong>IL-4</strong>,
                fungendo da acceleratore immediato per le risposte antitumorali e antivirali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10.8: PIATTAFORMA MR1 & CELLULE MAIT */}
      <section id="sec-10-8" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-teal-600 uppercase">
            Sezione 10.8
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            La Piattaforma MR1 e i Linfociti MAIT nelle Mucose e nel Fegato
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Presentazione di intermedi della biosintesi della Riboflavina (Vitamina B2) e sorveglianza mucosale.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            La scoperta più recente nel campo dell&apos;immunità non convenzionale riguarda le <strong>cellule MAIT (Mucosal-Associated Invariant T)</strong>,
            identificate negli ultimi dieci anni come una delle componenti numericamente più cospicue dell&apos;immunità mucosale ed epatica
            (rappresentano fino al <strong>10-40% di tutti i linfociti T residenti nel fegato</strong> e sono abbondantissime nell&apos;intestino e nei polmoni):
          </p>

          <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-2">
            <h4 className="font-bold text-teal-900 text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-600" />
              La Molecola Invariante MR1 & i Metaboliti della Vitamina B2
            </h4>
            <p className="leading-relaxed">
              Le cellule MAIT esprimono un <strong>TCR invariante</strong> formato dalla catena <strong>Vα7.2-Jα33</strong> (nell&apos;uomo) riarrangiata con segmenti Vβ2 o Vβ13.
              Il loro recettore riconosce piccoli composti chimici presentati da <strong>MR1 (MHC-Related Protein 1)</strong>,
              una molecola monomorfa codificata sul <strong>Cromosoma 1</strong> associata alla β2-microglobulina:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-teal-900">
              <li><strong>Discrimine evolutivo:</strong> le cellule dei mammiferi non possiedono gli enzimi per sintetizzare la vitamina B2 (Riboflavina) o l&apos;acido folico (B9), che devono essere assunti con la dieta. Al contrario, quasi tutti i batteri e i funghi possiedono la via enzimatica per sintetizzare la riboflavina;</li>
              <li>Gli intermedi instabili di questa sintesi microbica (es. derivati pirimidinici che reagiscono con glicole aldeide) alloggiano nella tasca aromatica di MR1 formando una base di Schiff transitoria;</li>
              <li>Il riconoscimento innesca una potente attività citotossica (perforina e granzimi) ed un rapido rilascio di <strong>IFN-γ</strong> e <strong>TNF-α</strong>;</li>
              <li><strong>Attivazione MR1-indipendente:</strong> le MAIT possono inoltre attivarsi senza il legame al TCR, stimolate direttamente dalle citochine pro-infiammatorie dell&apos;immunità innata <strong>IL-12 e IL-18</strong>.</li>
            </ul>
          </div>

          <div className="overflow-x-auto my-2">
            <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <thead className="bg-slate-100 text-slate-800 font-mono text-[11px] uppercase">
                <tr>
                  <th className="p-3 border-b border-slate-200">Popolazione T</th>
                  <th className="p-3 border-b border-slate-200">Molecola Presentante</th>
                  <th className="p-3 border-b border-slate-200">Natura Antigene</th>
                  <th className="p-3 border-b border-slate-200">Sede Genica & Polimorfismo</th>
                  <th className="p-3 border-b border-slate-200">Diversità TCR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                {NON_CLASSICAL_T_CELLS_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-bold font-mono text-slate-900">{row.population}</td>
                    <td className="p-3 font-semibold text-blue-700">{row.presentingMolecule}</td>
                    <td className="p-3 text-[11px]">{row.antigenType}</td>
                    <td className="p-3 font-mono text-[11px]">{row.geneLocation}</td>
                    <td className="p-3 text-[11px] leading-relaxed">{row.tcrDiversity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mappa Concettuale di Fine Paragrafo: Vie Non Convenzionali e Non Peptidiche */}
          <ConceptMapFlow {...MAP_LEZIONE_10_NON_PEPTIDIC} />
        </div>
      </section>

      {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_LEZIONE_10} lessonNumber={10} title="Verifica dell'Apprendimento · Lezione 10" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS_LEZIONE_10} lessonNumber={10} title="Flashcard di Ripasso Attivo · Lezione 10" />
    </div>
  );
};
