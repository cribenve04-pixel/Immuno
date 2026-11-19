import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import React, { useState } from 'react';
import { InteractiveThymicSelectionSimulator } from './InteractiveThymicSelectionSimulator';
import { InteractiveScidMolecularSimulator } from './InteractiveScidMolecularSimulator';
import {
  SCID_CLASSIFICATION_DATA,
  THYMIC_SELECTION_SUMMARY,
  QUIZ_LEZIONE_11,
  FLASHCARDS_LEZIONE_11
} from '../data/lezione11Content';
import { ConceptMapFlow } from './ConceptMapFlow';
import { MAP_LEZIONE_11_THYMIC_STAGES, MAP_LEZIONE_11_SELECTION_BIFURCATION } from '../data/conceptMapsData';
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
  Skull,
  Syringe
} from 'lucide-react';

interface Lezione11ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione11View: React.FC<Lezione11ViewProps> = ({ isSerif, fontSize }) => {
  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  return (
    <div className="space-y-12">
      {/* Chapter 11 Hero Block */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-mono">
            <span>Lezione 11 (Sbobina Ufficiale I e II Ora)</span>
            <span aria-hidden="true">·</span>
            <span>Prof.ssa Ricciarda Galandrini</span>
            <span aria-hidden="true">·</span>
            <span>23 Ottobre 2025</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Lezione 11: La Maturazione dei Linfociti T nel Timo, Riarrangiamento del TCR, SCID e Selezione Timica
          </h1>

          <p className="mt-3 text-slate-600 text-sm leading-relaxed max-w-4xl">
            L&apos;inizio del viaggio dell&apos;immunità adattativa cellulo-mediata: la fase antigene-indipendente di sviluppo e selezione dei linfociti T all&apos;interno del timo.
            L&apos;architettura dello stroma timico corticale (cTEC) e midollare (mTEC), il modello del topo nudo (mutazione Foxn1) e la sindrome di DiGeorge (delezione 22q11.2).
            La transizione dai progenitori midollari guidata da Notch-1 e GATA-3 attraverso gli stadi doppi negativi (DN1-DN4: CD44, CD25, c-Kit) sotto il controllo trofico di IL-7.
            L&apos;assemblaggio del pre-TCR con la catena surrogata pTα, l&apos;esclusione allelica del locus β e il riarrangiamento somatico mediato da RAG1/2, Artemis e TdT (diversità combinatoriale e giunzionale con nucleotidi P ed N).
            I linfociti T γδ intraepiteliali non convenzionali e il loro sviluppo parallelo.
            Le Immunodeficienze Severe Combinate (SCID): la forma X-linked da mutazione della catena γ comune (T⁻ B⁺ NK⁻ per blocco simultaneo di IL-7 e IL-15), la carenza di JAK3, il deficit selettivo di IL-7Rα (T⁻ B⁺ NK⁺), le SCID da deficit di RAG1/2, la forma radiosensibile da deficit di Artemis e l&apos;accumulo purinico tossico nella ADA-SCID (&quot;bimbo-bolla&quot; David Vetter).
            I processi di selezione timica nei timociti doppi positivi (CD4⁺ CD8⁺): la morte per negligenza (&gt;90% dei cloni), la selezione positiva corticale per restrizione MHC self, il modello istruttivo di silenziamento del corecettore (CD4⁺ vs CD8⁺), la selezione negativa midollare per tolleranza centrale al self (delezione clonale) e il differenziamento dei linfociti T regolatori naturali (Treg FoxP3⁺).
            Il ruolo del fattore trascrizionale AIRE (Autoimmune Regulator) nell&apos;espressione ectopica promiscua del self periferico nelle mTEC e la patogenesi della sindrome APECED / APS-1 (ipoparatiroidismo, morbo di Addison e candidiasi mucocutanea cronica da autoanticorpi anti-IL-17).
          </p>

          <div className="mt-6 pt-5 border-t border-slate-150 flex flex-wrap items-center gap-6 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Dna className="w-4 h-4 text-blue-600" />
              <span>DN1-DN4, Pre-TCR & RAG1/2</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>SCID (γc, JAK3, IL-7R, RAG, ADA)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Selezione Positiva/Negativa & AIRE</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 11.1: ARCHITETTURA DEL TIMO, TOPO NUDO & DIGEORGE */}
      <section id="sec-11-1" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
            Sezione 11.1
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            L&apos;Organogenesi e l&apos;Architettura del Timo: Corticale, Midollare e Stroma
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Il microambiente stromale indispensabile per l&apos;emopoiesi T, il topo nudo e la sindrome di DiGeorge.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Il timo è l&apos;organo linfoide primario deputato all&apos;istruzione, al riarrangiamento recettoriale e alla selezione dei linfociti T.
            Situato nel mediastino antero-superiore, va incontro a una progressiva <strong>involuzione fisiologica fibro-adiposa</strong> a partire dall&apos;adolescenza
            (intorno ai 20 anni ha già completato la generazione della quasi totalità del repertorio T periferico a lunga sopravvivenza).
          </p>

          <p>
            Ciascun lobo timico è avvolto da una capsula connettivale che invia setti suddividendolo in lobuli.
            All&apos;interno di ogni lobulo si distinguono due compartimenti citoarchitettonici distinti:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/70 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-blue-700">Zona Corticale (Superficiale)</span>
              <h4 className="font-bold text-blue-950 text-sm">cTEC Stellari & Maturazione Precoce</h4>
              <p className="text-xs text-blue-900 leading-relaxed">
                Densamente stipata di piccoli timociti immaturi in attiva proliferazione.
                L&apos;impalcatura stromale è formata da <strong>cellule epiteliali timiche corticali (cTEC)</strong> di forma stellata,
                che avvolgono i timociti fornendo fattori trofici (in primis <strong>IL-7</strong>) e mediando il processo di <strong>selezione positiva</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/70 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-purple-700">Zona Midollare (Centrale)</span>
              <h4 className="font-bold text-purple-950 text-sm">mTEC, AIRE & Tolleranza Centrale</h4>
              <p className="text-xs text-purple-900 leading-relaxed">
                Meno densa di timociti, ricca di <strong>cellule epiteliali timiche midollari (mTEC)</strong>, cellule dendritiche timiche e corpuscoli di Hassall.
                È la sede principale della <strong>selezione negativa</strong>: le mTEC esprimono il fattore nucleare <strong>AIRE</strong>
                per esporre ai timociti singoli positivi gli autoantigeni periferici ed eliminare i cloni autoreattivi.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
            <div className="font-bold text-slate-900 flex items-center gap-2 text-sm">
              <Microscope className="w-4 h-4 text-blue-600" />
              L&apos;Insegnamento del &quot;Topo Nudo&quot; (Nude Mouse, mutazione Foxn1)
            </div>
            <p className="leading-relaxed font-serif-body">
              Come sottolineato dalla Professoressa Galandrini, la componente ematopoietica non basta: <strong>se manca lo stroma timico, la maturazione dei T non può avvenire</strong>!
              Nel topo nudo, una mutazione spontanea nel fattore trascrizionale <em>Foxn1</em> causa agenesia dei peli e mancato sviluppo dell&apos;epitelio timico.
              Questo topo possiede normalissime cellule staminali ematopoietiche nel midollo, ma è privo di linfociti T.
              Il trapianto di midollo osseo non cura il topo nudo; la cura consiste nel <strong>trapianto di timo</strong> da un donatore sano
              (oppure da un topo SCID, che manca di linfociti ma possiede uno stroma timico perfettamente integro e funzionante!).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-950 space-y-2">
            <div className="font-bold text-rose-900 flex items-center gap-2 text-sm">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              Correlazione Clinica: La Sindrome di DiGeorge (Aplasia Timica Congenita)
            </div>
            <p className="leading-relaxed font-serif-body">
              Nell&apos;uomo, il corrispettivo clinico è la <strong>Sindrome di DiGeorge</strong>, causata nella grande maggioranza dei casi da una
              <strong>microdelezione 22q11.2</strong> (interessante il gene <em>TBX1</em>).
              Ne deriva un difetto di sviluppo del III e IV arco/tasca branchiale embrionale con la classica triade:
              1) <strong>Aplasia o ipoplasia del timo</strong> con grave deficit di linfociti T e suscettibilità ad infezioni virali/fungine;
              2) <strong>Agenesia delle ghiandole paratiroidi</strong> con ipocalcemia neonatale e crisi tetaniche precoci (spesso il sintomo d&apos;esordio!);
              3) <strong>Cardiopatie conotruncali</strong> (tetralogia di Fallot, tronco arterioso comune) e facies dismorfica caratteristica.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 11.2: NOTCH-1, GATA-3 & GLI STADI DOPPI NEGATIVI (DN1-DN4) */}
      <section id="sec-11-2" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-purple-600 uppercase">
            Sezione 11.2
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Dalla Cellula Staminale al Timo: Notch-1, GATA-3 e gli Stadi Doppi Negativi (DN1-DN4)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Il commitment linfoide T, il recettore c-Kit, CD44, CD25 e il ruolo vitale di Interleuchina-7.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Tutti i linfociti derivano dalla Cellula Staminale Ematopoietica multipotente (HSC) del midollo osseo attraverso il Progenitore Linfoide Comune (CLP).
            Mentre i linfociti B e le cellule ILC maturano nel midollo osseo, i progenitori T migrano via torrente circolatorio ed entrano nel timo
            a livello della <strong>giunzione cortico-midollare</strong>.
            Il commitment irreversibile verso la linea T è orchestrato dall&apos;interazione con il recettore <strong>Notch-1</strong>
            (attivato dai ligandi Delta-like sulle cellule epiteliali timiche) e dal fattore di trascrizione <strong>GATA-3</strong>.
          </p>

          <p>
            I primi timociti arrivati nel timo sono privi dei corecettori CD4 e CD8 e prendono il nome di <strong>Doppi Negativi (DN: CD4⁻ CD8⁻)</strong>.
            Questo stadio precoce è scandito da quattro sotto-stadi identificati dall&apos;espressione differenziale dei marcatori di superficie <strong>CD44</strong> (molecola di adesione per la matrice) e <strong>CD25</strong> (catena α del recettore per IL-2):
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-2 text-xs">
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="text-[10px] font-mono font-bold text-blue-600 uppercase">Stadio DN1 (Pro-T Precoce)</span>
              <div className="font-bold text-slate-900">CD44⁺ CD25⁻ (c-Kit alto)</div>
              <p className="text-slate-600 text-[11px] leading-snug">
                Configurazione germline di tutti i geni TCR. La cellula si espande sotto la spinta di fattori di crescita stromali.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="text-[10px] font-mono font-bold text-purple-600 uppercase">Stadio DN2</span>
              <div className="font-bold text-slate-900">CD44⁺ CD25⁺</div>
              <p className="text-slate-600 text-[11px] leading-snug">
                Si accendono RAG1 e RAG2. Inizia il primo riarrangiamento somatico della catena β (unione tra i segmenti Dβ e Jβ).
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="text-[10px] font-mono font-bold text-amber-600 uppercase">Stadio DN3 (Pre-TCR)</span>
              <div className="font-bold text-slate-900">CD44⁻ CD25⁺</div>
              <p className="text-slate-600 text-[11px] leading-snug">
                Si completa l&apos;unione Vβ-DJβ. Se produttivo, la catena β si associa a pTα formando il <strong>pre-TCR</strong> (primo checkpoint).
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase">Stadio DN4</span>
              <div className="font-bold text-slate-900">CD44⁻ CD25⁻</div>
              <p className="text-slate-600 text-[11px] leading-snug">
                Il segnale del pre-TCR arresta RAG, induce <strong>esclusione allelica</strong> sul locus β e stimola l&apos;espressione di CD4 e CD8 (transizione a DP).
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 space-y-2">
            <h4 className="font-bold text-blue-900 text-sm flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-600" />
              Il Ruolo Insostituibile di Interleuchina-7 (IL-7)
            </h4>
            <p className="leading-relaxed font-serif-body">
              L&apos;<strong>Interleuchina-7 (IL-7)</strong>, prodotta dalle cellule epiteliali timiche corticali (cTEC), è il fattore di crescita essenziale
              per la sopravvivenza e la proliferazione di tutti i timociti doppi negativi.
              Mentre nei linfociti B umani il ruolo di IL-7 è parzialmente ridondante, <strong>nei linfociti T è assolutamente indispensabile</strong>.
              Mutazioni che aboliscono la via di segnalazione di IL-7 causano un arresto totale dell&apos;emopoiesi T,
              esitando nella <strong>Sindrome da Immunodeficienza Severa Combinata (SCID)</strong>.
            </p>
          </div>

          {/* Mappa Concettuale di Fine Paragrafo: Stadi di Maturazione Timica */}
          <ConceptMapFlow {...MAP_LEZIONE_11_THYMIC_STAGES} />
        </div>
      </section>

      {/* SECTION 11.3: ARCHITETTURA DEL TCR E COMPLESSO CD3/ZETA */}
      <section id="sec-11-3" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 uppercase">
            Sezione 11.3
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            L&apos;Architettura Molecolare del TCR e il Complesso CD3 / Catena ζ
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Eterodimero αβ, anse ipervariabili CDR1-3, domini ITAM di trasduzione e loci cromosomici 7 e 14.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Il recettore clonotipico per l&apos;antigene del linfocita T (TCR) è espresso sulla superficie cellulare in circa <strong>100.000 copie identiche</strong> per cellula.
            Nel 95% dei casi è un eterodimero formato da due catene glicoproteiche legate da ponte disolfuro: la <strong>catena α</strong> e la <strong>catena β</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-blue-600">Catene α e β: Legame Antigenico</span>
              <h4 className="font-bold text-slate-900 text-sm">Domini Variabili Vα / Vβ & Anse CDR</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ciascuna catena possiede un dominio variabile (V) e un dominio costante (C).
                I domini Vα e Vβ formano insieme il sito di legame per il complesso pMHC.
                Ciascun dominio variabile contiene 3 anse ipervariabili (<strong>CDR1, CDR2, CDR3</strong>):
                mentre CDR1 e CDR2 prendono contatto prevalentemente con le eliche polimorfiche dell&apos;MHC,
                la regione <strong>CDR3</strong> (generata dalla giunzione somatica V-(D)-J) prende contatto intimo con il peptide antigenico centrale!
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-purple-600">CD3 & Catena ζ: Trasduzione del Segnale</span>
              <h4 className="font-bold text-slate-900 text-sm">I 10 Domini ITAM Citoplasmatici</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Le code citoplasmatiche delle catene α e β sono cortissime (appena 3-5 aminoacidi) e <strong>prive di attività di trasduzione</strong>.
                Per trasmettere il segnale all&apos;interno del linfocita, il TCR si assembla stabilmente con:
                1) L&apos;eterodimero <strong>CD3γε</strong>; 2) L&apos;eterodimero <strong>CD3δε</strong>; 3) L&apos;omodimero <strong>ζζ</strong> (catena zeta).
                Ciascuna catena CD3 contiene 1 motivo ITAM, mentre ciascuna catena ζ contiene 3 motivi ITAM: in totale il complesso TCR possiede <strong>10 motivi ITAM</strong> fosforilabili dalla chinasi Lck!
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
            <div>
              <span className="font-mono font-bold text-slate-900">Localizzazione Genica dei Loci TCR:</span>
              <div className="text-[11px] text-slate-600 mt-0.5">
                • <strong>Cromosoma 7:</strong> Catena β (segmenti V, D, J, C) e Catena γ (V, J, C)<br />
                • <strong>Cromosoma 14:</strong> Catena α (segmenti V, J, C) e Catena δ (V, D, J, C inframezzato dentro il locus α)
              </div>
            </div>
            <span className="text-xs font-mono font-black px-2.5 py-1 rounded bg-slate-200 text-slate-800">
              Cr. 7 & Cr. 14
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 11.4: MACCHINARIO RICOMBINAZIONE: RAG1/2, ARTEMIS, TDT */}
      <section id="sec-11-4" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
            Sezione 11.4
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Il Macchinario della Ricombinazione Somatica: RAG1/2, Artemis e TdT
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Sequenze RSS, regola del 12/23, nucleotidi P (palindromici) e nucleotidi N casuali.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            La genesi del recettore clonale avviene in assenza dell&apos;antigene, mediante un processo di taglia-e-cuci genetico irreversibile:
          </p>

          <ol className="list-decimal pl-5 space-y-2 text-xs text-slate-700">
            <li>
              <strong>Sequenze Segnale di Ricombinazione (RSS):</strong> fiancheggiano ciascun segmento genico. Sono formate da un <strong>eptamero (7 bp)</strong> altamente conservato (5&apos;-CACAGTG-3&apos;) e un <strong>nonamero (9 bp)</strong> ricco in A/T (5&apos;-ACAAAAACC-3&apos;), separati da sequenze spaziatrici rigide di <strong>12 o 23 nucleotidi</strong> (regola del 12/23: un segmento spaziatore di 12 può ricombinare solo con uno di 23);
            </li>
            <li>
              <strong>Complesso RAG1 e RAG2:</strong> le ricombinasi RAG1/2 riconoscono le RSS e introducono tagli a doppio filamento precisi a livello della giunzione con l&apos;eptamero, generando anelli di DNA escisso (anello di delezione) ed estremità codificanti sigillate a <strong>forcina (hairpin)</strong>;
            </li>
            <li>
              <strong>Apertura delle Hairpin da parte di Artemis:</strong> l&apos;endonucleasi nucleare <strong>Artemis</strong> (attivata da DNA-PKcs) taglia le forcine in modo asimmetrico. Quando i filamenti si distendono, le basi a singolo filamento fungono da stampo generando sequenze palindromiche denominate <strong>nucleotidi P</strong>;
            </li>
            <li>
              <strong>Aggiunta di Nucleotidi N da parte di TdT:</strong> l&apos;enzima <strong>TdT (Terminal Deoxynucleotidyl Transferase)</strong> aggiunge casualmente nucleotidi non stampati (fino a 20 nt) alle estremità libere, prima della saldatura finale mediata dal complesso di giunzione non omologa (NHEJ: Ku70/Ku80, DNA Ligasi IV, XRCC4).
            </li>
          </ol>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Dna className="w-4 h-4 text-purple-600" />
              Diversità Combinatoriale vs Diversità Giunzionale
            </h4>
            <p className="leading-relaxed">
              La combinazione casuale dei segmenti V, D e J genera circa <strong>3 milioni di combinazioni teoriche</strong> (diversità combinatoriale).
              Tuttavia, l&apos;azione di Artemis e l&apos;aggiunta di nucleotidi P ed N da parte di TdT moltiplicano questo valore di diversi ordini di grandezza,
              creando una <strong>diversità giunzionale</strong> sterminata:
              il repertorio potenziale raggiunge <strong>10¹⁶ - 10¹⁸ TCR teorici</strong>, con un repertorio realmente circolante stimato in oltre <strong>10⁷ - 10⁸ specificità clonali</strong> distinte!
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 11.5: LINFOCITI T GAMMA-DELTA */}
      <section id="sec-11-5" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-600 uppercase">
            Sezione 11.5
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            I Linfociti T γδ: Sviluppo Parallelo e Sorveglianza Intraepiteliale
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Locus δ annidato su cromosoma 14, repertorio oligoclonale e indipendenza dai corecettori CD4/CD8.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Durante lo stadio doppio negativo DN2/DN3, i timociti avviano contemporaneamente anche il riarrangiamento dei loci <strong>γ</strong> (Cromosoma 7) e <strong>δ</strong> (annidato sul Cromosoma 14 all&apos;interno del locus α).
            Se la cellula completa con successo il riarrangiamento delle catene γ e δ prima della catena β,
            <strong>diventa un linfocita T γδ (circa il 5% di tutti i linfociti T)</strong> ed esce direttamente dal timo senza passare per lo stadio doppio positivo DP!
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
            <li><strong>Repertorio Oligoclonale:</strong> possiedono pochissimi segmenti genici V e non presentano l&apos;immensa variabilità dei T αβ;</li>
            <li><strong>Assenza di CD4 e CD8:</strong> non esprimono né CD4 né CD8 e non sono ristretti per le molecole MHC classiche;</li>
            <li><strong>Distribuzione Anatomica:</strong> rarissimi nel sangue periferico, colonizzano ad ondate precoci durante la vita fetale gli epiteli di barriera (cute, dotti mucosi, intestino, tessuto adiposo) assumendo la funzione di <strong>linfociti intraepiteliali (IEL)</strong>;</li>
            <li><strong>Riconoscimento Molecolare:</strong> riconoscono molecole di stress cellulare (MICA/MICB), fosfoantigeni batterici e lipidi presentati da molecole MHC-I-like (CD1), secernendo citochine immediate per l&apos;omeostasi e la riparazione tessutale.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 11.6: LE SCID E TERAPIA GENICA & SIMULATORE SCID */}
      <section id="sec-11-6" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-rose-600 uppercase">
            Sezione 11.6
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Le Immunodeficienze Severe Combinate (SCID): Eziologia, Fenotipi e Terapia Genica
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            SCID X-linked (γc), JAK3, IL-7Rα, RAG1/2, Artemis radiosensibile e ADA-SCID.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Le <strong>Immunodeficienze Severe Combinate (SCID)</strong> costituiscono un gruppo eterogeneo di disordini monogenici ereditari
            caratterizzati dal comune denominatore dell&apos;<strong>assenza di linfociti T maturi nel sangue periferico</strong>.
            L&apos;assenza dell&apos;immunità cellulo-mediata rende i lattanti esposti a infezioni letali da funghi opportunisti (<em>Pneumocystis jirovecii</em>, <em>Candida</em>)
            e virus (CMV, EBV, adenovirus) sin dai primi mesi di vita.
          </p>

          <div className="overflow-x-auto my-2">
            <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <thead className="bg-slate-100 text-slate-800 font-mono text-[11px] uppercase">
                <tr>
                  <th className="p-3 border-b border-slate-200">Tipo di SCID</th>
                  <th className="p-3 border-b border-slate-200">Gene Mutato</th>
                  <th className="p-3 border-b border-slate-200">Ereditarietà</th>
                  <th className="p-3 border-b border-slate-200">Fenotipo Linfoide</th>
                  <th className="p-3 border-b border-slate-200">Meccanismo Molecolare Chiave</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                {SCID_CLASSIFICATION_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-bold font-mono text-slate-900">{row.type}</td>
                    <td className="p-3 font-mono text-[11px] text-blue-700">{row.geneAndProtein}</td>
                    <td className="p-3 text-[11px]">{row.inheritance}</td>
                    <td className="p-3 font-mono font-black text-rose-700">{row.immunophenotype}</td>
                    <td className="p-3 text-[11px] leading-relaxed">{row.molecularMechanism}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mount SCID Simulator */}
          <div className="pt-2">
            <InteractiveScidMolecularSimulator />
          </div>
        </div>
      </section>

      {/* SECTION 11.7: SELEZIONE POSITIVA, NEGATIVA & SIMULATORE TIMICO */}
      <section id="sec-11-7" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-600 uppercase">
            Sezione 11.7
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            I Processi di Selezione Timica: Positiva, Negativa e Modello Istruttivo
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Morte per negligenza, restrizione MHC corticale, scelta del corecettore e delezione clonale midollare.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Al termine dello stadio DN4, il timocita inizia ad esprimere sia CD4 che CD8 diventando un <strong>timocita Doppio Positivo (DP: CD4⁺ CD8⁺)</strong>.
            A questo punto riprende l&apos;attività di RAG1/2 che riarrangia la catena α del TCR: una volta assemblato l&apos;eterodimero αβ completo,
            ha inizio il rigorosissimo controllo qualità della selezione timica, che porta alla <strong>morte di oltre il 95% di tutti i timociti generati</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-2 text-xs">
            <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/70 space-y-1.5">
              <span className="font-bold text-rose-900 block text-sm">1. Morte per Negligenza</span>
              <p className="text-rose-800 text-[11px] leading-relaxed">
                Riguarda oltre il <strong>90% dei timociti</strong>. Poiché il TCR è stato riarrangiato a caso, la stragrande maggioranza dei recettori non ha alcuna affinità per le molecole MHC self dell&apos;individuo: non ricevendo alcun segnale trofico, la cellula muore spontaneamente per apoptosi da abbandono.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/70 space-y-1.5">
              <span className="font-bold text-blue-900 block text-sm">2. Selezione Positiva (Corticale)</span>
              <p className="text-blue-800 text-[11px] leading-relaxed">
                Avviene a contatto con le <strong>cTEC</strong> corticali. Se il TCR lega con <strong>affinità debole-intermedia</strong> l&apos;MHC self, il timocita riceve il segnale di sopravvivenza. Questo garantisce la <strong>restrizione MHC</strong> (il T riconoscerà solo peptidi su MHC self).
              </p>
            </div>

            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/70 space-y-1.5">
              <span className="font-bold text-amber-900 block text-sm">3. Selezione Negativa (Midollare)</span>
              <p className="text-amber-800 text-[11px] leading-relaxed">
                Avviene a contatto con le <strong>mTEC</strong> e DC timiche. I timociti il cui TCR riconosce il complesso peptide-MHC self con <strong>alta affinità/avidità</strong> ricevono un segnale di apoptosi e vengono eliminati (<strong>tolleranza centrale</strong>).
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-950 space-y-2">
            <h4 className="font-bold text-purple-900 text-sm flex items-center gap-2">
              <Heart className="w-4 h-4 text-purple-600" />
              Il Destino dei Linfociti T Regolatori Naturali (Treg)
            </h4>
            <p className="leading-relaxed font-serif-body">
              Non tutti i timociti che legano il self muoiono: quelli dotati di un&apos;<strong>affinità intermedia-alta</strong> (non sufficientemente alta da causare delezione, ma superiore a quella dei T convenzionali)
              vengono salvati ed istruiti a differenziare in <strong>linfociti T regolatori naturali (nTreg CD4⁺ CD25⁺ FoxP3⁺)</strong>.
              Queste cellule migreranno nella periferia dell&apos;organismo per pattugliare i tessuti e bloccare attivamente i cloni autoreattivi sfuggiti al timo.
            </p>
          </div>

          {/* Mount Selection Simulator */}
          <div className="pt-2">
            <InteractiveThymicSelectionSimulator />
          </div>

          {/* Mappa Concettuale di Fine Paragrafo: Il Bivio della Selezione Timica */}
          <ConceptMapFlow {...MAP_LEZIONE_11_SELECTION_BIFURCATION} />
        </div>
      </section>

      {/* SECTION 11.8: IL FATTORE AIRE E LA SINDROME APECED */}
      <section id="sec-11-8" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-rose-600 uppercase">
            Sezione 11.8
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Il Fattore Trascrizionale AIRE e la Sindrome APECED / APS-1
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Espressione genica promiscua nelle mTEC, triade endocrina e candidiasi mucocutanea cronica da autoanticorpi anti-IL-17.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              L&apos;Espressione Ectopica Promiscua Guidata da AIRE
            </h4>
            <p className="leading-relaxed font-serif-body">
              Come possono le cellule epiteliali della midollare del timo (mTEC) testare la tolleranza verso antigeni espressi unicamente in tessuti lontani (come l&apos;insulina nelle isole di Langerhans o la tireoglobulina nella tiroide)?
              La risposta risiede nel fattore di trascrizione <strong>AIRE (Autoimmune Regulator)</strong>, codificato sul cromosoma 21q22.3.
              AIRE si associa a complessi di de-condensazione cromatinica e permette alle mTEC di trascrivere migliaia di <strong>antigeni tessuto-specifici (TRA)</strong>
              periferici (epatici, pancreatici, retinici, cerebrali), esponendoli ai timociti singoli positivi ed eliminando i cloni autoreattivi prima che lascino il timo!
            </p>
          </div>

          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-950 space-y-2">
            <h4 className="font-bold text-rose-900 text-sm flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              La Sindrome APECED / APS-1 (Autoimmune Polyendocrinopathy-Candidiasis-Ectodermal Dystrophy)
            </h4>
            <p className="leading-relaxed font-serif-body">
              Mutazioni a carico del gene <em>AIRE</em> aboliscono la selezione negativa contro gli antigeni periferici.
              I linfociti T autoreattivi fuggono dal timo e provocano la sindrome da poliendocrinopatia autoimmune di tipo 1 (APS-1 / APECED):
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-rose-900 font-serif-body">
              <li><strong>Ipoparatiroidismo autoimmune:</strong> distruzione delle paratiroidi con ipocalcemia e tetania grave;</li>
              <li><strong>Insufficienza surrenalica primaria (Morbo di Addison):</strong> distruzione autoimmune della corticale del surrene;</li>
              <li><strong>Diabete mellito di tipo 1:</strong> distruzione autoimmune delle cellule β pancreatiche produttrici di insulina;</li>
              <li>
                <strong>Candidiasi Mucocutanea Cronica (CMC):</strong> infezioni fungine severe e ricorrenti da <em>Candida albicans</em> a livello di mucose, cute e unghie.
                Come ha spiegato la Professoressa Galandrini, la candidiasi è causata dalla comparsa paradossa di <strong>autoanticorpi neutralizzanti ad altissimo titolo diretti contro l&apos;Interleuchina-17 (anti-IL-17A e anti-IL-17F)</strong>:
                il blocco dell&apos;IL-17 (la citochina effettrice prodotta dai Th17 per stimolare i peptidi antimicrobici e i neutrofili) azzera le difese dell&apos;epitelio contro la proliferazione fungina!
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_LEZIONE_11} lessonNumber={11} title="Verifica dell'Apprendimento · Lezione 11" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS_LEZIONE_11} lessonNumber={11} title="Flashcard di Ripasso Attivo · Lezione 11" />
    </div>
  );
};
