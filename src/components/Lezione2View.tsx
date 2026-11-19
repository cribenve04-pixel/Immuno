import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import React, { useState } from 'react';
import { InteractiveJakStatSimulator } from './InteractiveJakStatSimulator';
import { InteractiveCytokineMatrix } from './InteractiveCytokineMatrix';
import { InteractiveThreeSignals } from './InteractiveThreeSignals';
import { InteractiveOntogenyChart } from './InteractiveOntogenyChart';
import { CHEMOKINE_CLASSES_DATA, QUIZ_LEZIONE_2, FLASHCARDS_LEZIONE_2 } from '../data/lezione2Content';
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
  Check
} from 'lucide-react';

interface Lezione2ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione2View: React.FC<Lezione2ViewProps> = ({ isSerif, fontSize }) => {
  // Quiz state for Lezione 2

  // Flashcards state for Lezione 2

  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';





  return (
    <div className="space-y-12">
      {/* Chapter 2 Hero Block */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-mono">
                <span>Lezione 2</span>
                <span aria-hidden="true">·</span>
                <span>Prof.ssa Soriani</span>
                <span aria-hidden="true">·</span>
                <span>2 Ottobre 2025</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
                Lezione 2: Citochine, Segnalazione JAK-STAT, Trained Immunity e Chemochine
              </h1>

              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                Dal cross-talk tra immunità innata e adattativa alla biochimica della trasduzione intracellulare:
                il modello dei tre segnali del linfocita T, la catena comune γc (CD132), il pathway JAK-STAT
                e la modulazione a feedback negativo mediata da SOCS, fino alla classificazione delle chemochine e al loro ruolo nell'infezione da HIV.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-150 flex flex-wrap items-center gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Dna className="w-4 h-4 text-cyan-600" />
                <span>Via JAK-STAT & SOCS</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-purple-600" />
                <span>Pleiotropia & Ridondanza</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>Chemochine & Corecettori HIV</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative bg-slate-950 min-h-[220px]">
            <img
              src={IMAGES.jakStatPathway}
              onError={(e) => { e.currentTarget.src = '/images/jak_stat_pathway_1792321706887.jpg'; }}
              alt="Rendering 3D della trasduzione JAK-STAT e traslocazione nucleare di STAT"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-[11px] text-slate-200">
                Figura 2.0: Cascata di attivazione chinasica JAK-STAT e regolazione trascrizionale nucleare.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SEZIONE 2.1: COOPERAZIONE INNATA-ADATTATIVA E TRAINED IMMUNITY */}
      <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold block">
            Parte Prima · Dinamiche Temporali & Memoria Innata
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            2.1 Cooperazione tra Immunità Innata e Adattativa, Trained Immunity e Ruolo Istruttivo delle Citochine
          </h2>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            La risposta immunitaria nei confronti di microrganismi patogeni o di cellule in trasformazione neoplastica si articola
            in due fasi cinetiche coordinate. Nelle primissime fasi interviene la <strong>risposta naturale o innata</strong>,
            attivata entro poche ore dall'infezione. Il suo scopo fondamentale è prevenire la penetrazione iniziale ed evitare
            la diffusione sistemica (<em>"spread"</em>) del patogeno nel circolo ematico.
          </p>
          <p>
            Successivamente entra in azione l'<strong>immunità adattativa</strong>, caratterizzata da una cinetica più lenta
            (richiede giorni per espandersi), ma dotata di elevatissima specificità e della capacità di eradicare l'agente causale
            e generare memoria immunologica clonale duratura.
          </p>

          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-950">
            <h4 className="font-bold flex items-center gap-1.5 text-blue-900 mb-1">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Concetto Cardinale: La 'Trained Immunity' (Memoria dell'Immunità Innata)
            </h4>
            <p className="leading-relaxed font-serif-body">
              Tradizionalmente, la memoria immunologica era considerata un attributo esclusivo dei linfociti B e T adattativi.
              Studi pionieristici condotti a partire dai primi anni 2000 hanno tuttavia dimostrato che anche le cellule dell'immunità
              innata (in particolare <strong>monociti, macrofagi e cellule NK</strong>) sono dotate di una forma di memoria immunologica,
              definita <strong>Trained Immunity</strong>. A seguito di una stimolazione primaria (es. esposizione a BCG o a componenti
              fungini come il β-glucano), queste cellule subiscono <em>riprogrammazioni metaboliche</em> (shift glicolitico) e
              <em>modificazioni epigenetiche persistenti</em> a carico della cromatina (es. trimetilazione H3K4me3 e acetilazione H3K27ac).
              Ciò consente loro, a distanza di tempo, di montare una risposta secondaria quantitativamente e qualitativamente superiore
              nella clearance di infezioni, anche eterologhe.
            </p>
          </div>

          <p>
            L'immunità innata non svolge unicamente una funzione barriera o fagocitica diretta: il suo ruolo biologico più importante
            è garantire la produzione tempestiva di un ricco pannello di glicoproteine solubili — le <strong>citochine</strong> —,
            le quali agiscono come veri e propri messaggeri biologici deputati a <strong>istruire e guidare</strong> la successiva risposta
            adattativa. A loro volta, i linfociti T e B differenziati rilasciano citochine e chemochine che potenziano, reclutano e
            modulano l'efficacia dei fagociti innati, stabilendo un <em>cross-talk</em> bidirezionale permanente.
            In questa interfaccia operano inoltre popolazioni ibride intermedie, come i <strong>linfociti T γδ</strong> (T gamma-delta),
            che uniscono proprietà recettoriali innato-simili a meccanismi effettori tipici dell'immunità adattativa.
          </p>
        </div>
      </article>

      {/* SEZIONE 2.2: ONTOGENESI, GRAVIDANZA E TUMORI */}
      <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-700 font-semibold block">
            Parte Seconda · Fisiologia Clinica nel Corso della Vita
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            2.2 Ontogenesi e Dinamica Temporale: Dalla Nascita all'Immunosenescenza, Gravidanza e Microambiente Tumorale
          </h2>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Il sistema immunitario non è un'entità statica, bensì attraversa profonde riorganizzazioni fenotipiche nel corso
            dell'esistenza: dalla vita fetale e neonatale, all'adolescenza, all'età adulta, fino alla gravidanza e alla fase senile.
          </p>
          <p>
            L'analisi epidemiologica della mortalità causata da infezioni virali respiratorie pandemiche (come influenza o SARS-CoV-2)
            evidenzia una classica <strong>curva a U</strong>: i tassi più elevati di morbilità critica e decesso si concentrano
            nelle primissime fasi di vita e dopo i 60-65 anni:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Periodo Neonatale:</strong> il sistema immunitario del neonato è immaturo. La sua protezione dipende in modo
              critico dall'immunità passiva materna: le <strong>IgG materne</strong> trasferite per via transplacentare durante
              l'ultimo trimestre di gestazione (tramite il recettore FcRn fetale), seguite dagli anticorpi e dalle <strong>IgA secretorie</strong>
              assunte con il colostro e il latte durante l'allattamento.
            </li>
            <li>
              <strong>Età Adulta:</strong> si assiste al picco funzionale dei linfociti T helper 1 (Th1) e T helper 2 (Th2), con
              massima efficienza nella cooperazione cellulare ed eradicazione dei patogeni.
            </li>
            <li>
              <strong>Fase Senile (Immunosenescenza):</strong> dopo i sessant'anni si verifica una fisiologica atrofia timica con marcata
              riduzione della produzione di linfociti T vergini (*naïve*), accumulo di cloni senescenti oligoclonali e alterata
              risposta alle vaccinazioni primarie.
            </li>
          </ul>

          <div className="pt-2">
            <h4 className="font-bold text-slate-900 text-sm">
              I Linfociti T Regolatori (Treg): Dalla Tolleranza Gestazionale all'Immunoevasione Neoplastica
            </h4>
            <p className="mt-1">
              I linfociti Treg (FoxP3+) sono preposti al mantenimento dell'omeostasi e impediscono l'attivazione sregolata o autoimmune.
              La loro dinamica assume un rilievo centrale in due ambiti clinici distinti:
            </p>
            <ol className="list-decimal pl-5 space-y-2 mt-2">
              <li>
                <strong>Gravidanza:</strong> il feto rappresenta un <em>semi-allotrapianto</em> biologico, in quanto esprime antigeni
                paterni estranei (non-self). Durante la gestazione si osserva una fondamentale espansione fisiologica di linfociti Treg
                a livello della decidua uterina e nel sangue materno, indispensabile per impedire il rigetto immunologico dell'embrione.
              </li>
              <li>
                <strong>Oncologia:</strong> le cellule tumorali reclutano attivamente linfociti Treg all'interno del microambiente
                neoplastico. La presenza di un cospicuo infiltrato di Treg nelle biopsie tumorali costituisce un <strong>indice prognostico
                sfavorevole</strong>, poiché essi inibiscono l'attività lisi-mediata dei linfociti T citotossici e delle cellule NK,
                favorendo la progressione, l'angiogenesi e la disseminazione metastatica del tumore.
              </li>
            </ol>
          </div>
        </div>

        {/* Ontogeny Chart Mount */}
        <InteractiveOntogenyChart />
      </article>

      {/* SEZIONE 2.3: I TRE SEGNALI DEL LINFOCITA T */}
      <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold block">
            Parte Terza · Presentazione Antigenica & Sinapsi
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            2.3 Presentazione Antigenica e i Tre Segnali di Attivazione del Linfocita T
          </h2>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            A seguito della penetrazione tissutale di un patogeno, le prime cellule a intervenire sono le popolazioni <strong>sentinelle
            residenti</strong> (macrofagi tissutali e cellule dendritiche). Se il patogeno penetra la barriera epiteliale, esso viene
            fagocitato dalle cellule dendritiche immature, che si attivano, producono citochine infiammatorie e migrano attraverso
            i vasi linfatici afferenti verso il <strong>linfonodo satellite prossimale</strong>.
          </p>
          <p>
            Qui si manifesta la distinzione fondamentale tra il riconoscimento anticorpale e quello T-cellulare:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Linfociti B:</strong> riconoscono direttamente gli antigeni microbici nella loro <strong>conformazione nativa e
              tridimensionale</strong> mediante il BCR espresso in membrana.
            </li>
            <li>
              <strong>Linfociti T:</strong> non riconoscono mai l'antigene integro. L'antigene deve essere prima internalizzato,
              digerito e frammentato in peptidi lineari dalle <strong>cellule presentanti l'antigene (APC)</strong> e successivamente
              esposto sulla loro membrana in associazione a molecole del <strong>Complesso Maggiore di Istocompatibilità (MHC)</strong>.
              Il TCR riconosce unicamente il complesso trimolecolare formato da MHC e peptide (fenomeno della <em>restrizione MHC</em>).
            </li>
          </ul>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <h4 className="font-bold text-slate-900 mb-1">
              Il Modello dei Tre Segnali di Attivazione T-Cellulare
            </h4>
            <p className="text-slate-700 font-serif-body leading-relaxed">
              Per passare dallo stato di quiescenza (linfocita naïve) alla proliferazione clonale e alla differenziazione effettrice,
              il linfocita T deve ricevere obbligatoriamente tre segnali sequenziali coordinati:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="font-bold text-blue-900 block mb-1">1° Segnale: Specificità</span>
                <p className="text-[11px] text-slate-600">
                  Ingaggio del TCR e del corecettore (CD4 o CD8) con il peptide antigenico presentato su molecola MHC di classe I o II.
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="font-bold text-emerald-900 block mb-1">2° Segnale: Costimolazione</span>
                <p className="text-[11px] text-slate-600">
                  Interazione tra molecole costimolatorie dell'APC (<strong>B7-1 / CD80</strong> e <strong>B7-2 / CD86</strong>)
                  e il recettore costimolatorio <strong>CD28</strong> sul linfocita T. In assenza di questo segnale si instaura <em>anergia clonale</em>.
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="font-bold text-rose-900 block mb-1">3° Segnale: Differenziamento</span>
                <p className="text-[11px] text-slate-600">
                  Citochine polarizzanti secrete dall'APC stimolata (es. IL-12, IL-4, IL-6, TGF-β) che istruiscono il lignaggio trascrizionale
                  (Th1, Th2, Th17, Treg).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Signals Simulator Mount */}
        <InteractiveThreeSignals />
      </article>

      {/* SEZIONE 2.4: PROPRIETÀ CARDINALI DELLE CITOCHINE */}
      <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-purple-700 font-semibold block">
            Parte Quarta · Biologia Generale dei Mediatori Solubili
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            2.4 Proprietà Generali e Meccanismi d'Azione delle Citochine
          </h2>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Le <strong>citochine</strong> (dal greco <em>cyto-</em>, cellula, e <em>kinos</em>, movimento) sono glicoproteine
            a basso peso molecolare (generalmente comprese tra 15 e 25 kDa), secrete prevalentemente dai leucociti e da cellule
            stromali/epiteliali in risposta a stimoli infiammatori o antigenici.
          </p>
          <p>
            La biologia delle citochine è caratterizzata da vincoli fisiologici ed evolutivi rigorosi:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Secrezione polarizzata:</strong> vengono rilasciate in modo direzionato verso la giunzione intercellulare
              (sinapsi immunologica) formata con la cellula bersaglio, garantendo elevatissime concentrazioni locali con minimo disperdimento.
            </li>
            <li>
              <strong>Elevata affinità recettoriale ed azione a picodosi:</strong> esplicano la propria attività a concentrazioni
              estremamente ridotte (dell'ordine dei picogrammi o nanogrammi/ml, con costanti di dissociazione Kd ≈ 10⁻¹⁰ – 10⁻¹² M).
            </li>
            <li>
              <strong>Breve emivita biologica (minuti):</strong> la loro sintesi è transiente e la degradazione è rapida (catabolismo renale
              e inattivazione proteolitica), prevenendo reazioni tossiche sistemiche incontrollate.
            </li>
          </ul>

          <div className="pt-2">
            <h4 className="font-bold text-slate-900 text-sm">Raggio d'Azione: Autocrino, Paracrino ed Endocrino</h4>
            <p className="mt-1">
              A seconda della distanza tra la cellula produttrice e la cellula bersaglio, si distinguono tre modalità d'azione:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 mt-2">
              <li><strong>Autocrina:</strong> la citochina agisce sulla stessa cellula che l'ha prodotta (es. IL-2 che stimola la proliferazione del medesimo linfocita T attivato).</li>
              <li><strong>Paracrina:</strong> agisce su cellule contigue localizzate nel medesimo microambiente tissutale (es. IL-12 macrofagica che stimola cellule NK adiacenti).</li>
              <li><strong>Endocrina:</strong> la citochina viene immessa nel torrente circolatorio ed esercita effetti sistemici su organi remoti (es. IL-1, IL-6 e TNF-α che raggiungono l'ipotalamo per indurre la febbre e il fegato per stimolare la sintesi di proteine di fase acuta come la PCR).</li>
            </ol>
          </div>
        </div>

        {/* Cytokine Matrix Mount */}
        <InteractiveCytokineMatrix />
      </article>

      {/* SEZIONE 2.5: FAMIGLIE RECETTORIALI E CATENA COMUNE GAMMA */}
      <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-rose-700 font-semibold block">
            Parte Quinta · Recettori & Immunopatologia Molecolare
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            2.5 Famiglie di Recettori per Citochine e la Catena Comune γc (CD132): Rilevanza Clinica nella X-SCID
          </h2>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            I recettori per le citochine appartengono a superfamiglie strutturali distinte, caratterizzate da specifici domini
            di legame e subunità di trasduzione del segnale:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Recettori di Tipo I (Superfamiglia dei Recettori Ematopoietici):</strong> comprendono i recettori per IL-2, IL-3,
              IL-4, IL-5, IL-6, IL-7, IL-9, IL-12, IL-15, IL-21 e GM-CSF. Sono contraddistinti nel dominio extracellulare da quattro residui
              conservati di cisteina e dal motivo amminoacidico canonico <strong>WSXWS</strong> (Triptofano-Serina-X-Triptofano-Serina).
            </li>
            <li>
              <strong>Recettori di Tipo II (Recettori per Interferoni e famiglia di IL-10):</strong> comprendono IFN-α/β, IFN-γ e IL-10;
              condividono l'organizzazione delle cisteine ma <em>sono privi del motivo WSXWS</em>.
            </li>
            <li>
              <strong>Recettori della Famiglia del TNF (TNFRSF):</strong> proteine transmembrana trimere ricche in cisteina (es. TNFR1, TNFR2, CD40, Fas/CD95).
            </li>
            <li>
              <strong>Recettori della Famiglia delle Immunoglobuline:</strong> dotati di domini extracellulari Ig-like (es. IL-1R, c-Kit).
            </li>
            <li>
              <strong>Recettori per le Chemochine:</strong> recettori a sette eliche transmembrana accoppiati a proteine G (GPCR).
            </li>
          </ul>

          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 text-xs text-rose-950">
            <h4 className="font-bold flex items-center gap-1.5 text-rose-900 mb-1">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              Focus Clinico: La Catena Comune Gamma (γc / CD132) e la X-SCID
            </h4>
            <p className="leading-relaxed font-serif-body">
              All'interno della famiglia di Tipo I, molti recettori condividono subunità di trasduzione del segnale.
              Il paradigma fondamentale è rappresentato dalla <strong>catena comune gamma (γc, o CD132)</strong>,
              codificata dal gene <em>IL2RG</em> localizzato sul cromosoma X.
              Questa singola catena è condivisa dai recettori eteromerici di ben 6 citochine cruciali:
              <strong>IL-2, IL-4, IL-7, IL-9, IL-15 e IL-21</strong>.
              <br /><br />
              <strong>Conseguenza Patologica:</strong> Mutazioni con perdita di funzione del gene <em>IL2RG</em> determinano la
              <strong>SCID legata al cromosoma X (X-SCID)</strong>. Poiché l'assenza di γc abolisce simultaneamente il segnale
              di <strong>IL-7</strong> (indispensabile per la sopravvivenza e maturazione dei progenitori T nel timo) e di
              <strong>IL-15</strong> (indispensabile per lo sviluppo delle cellule NK), i bambini affetti nascono con un quadro
              letale di completa assenza di linfociti T e cellule NK circolanti (T⁻ B⁺ NK⁻). I linfociti B, pur presenti, risultano
              funzionalmente non cooperativi per l'assenza del supporto T helper.
            </p>
          </div>
        </div>
      </article>

      {/* SEZIONE 2.6: TRASDUZIONE JAK-STAT E FEEDBACK SOCS */}
      <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-cyan-700 font-semibold block">
            Parte Sesta · Vie Intracellulari & Trascrizione
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            2.6 Vie di Trasduzione del Segnale dei Recettori per Citochine: L'Asse JAK-STAT e il Circuito Inibitorio SOCS
          </h2>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            I recettori per citochine di Tipo I e Tipo II sono privi di attività chinasica intrinseca nel loro dominio citoplasmatico.
            La trasduzione del segnale si basa sul reclutamento costitutivo di tirosin-chinasi citosoliche chiamate
            <strong>JAK (Janus Kinases: JAK1, JAK2, JAK3 e Tyk2)</strong>.
          </p>
          <p>
            Il legame del ligando citochinico avvicina le subunità JAK, inducendone l'autofosforilazione e attivazione.
            Le JAK attivate fosforilano specifici residui di tirosina sulla porzione intracellulare del recettore, creando docking site
            per il dominio <strong>SH2</strong> di fattori di trascrizione citoplasmatici latenti denominati
            <strong>STAT (Signal Transducers and Activators of Transcription: STAT1, STAT2, STAT3, STAT4, STAT5a/b, STAT6)</strong>.
            Una volta reclutata, la proteina STAT viene fosforilata da JAK, si stacca dal recettore e dimerizza mediante interazione
            reciproca SH2-fosfotirosina. Il dimero STAT fosforilato trasloca nel nucleo e si lega a promotori specifici,
            attivando la trascrizione dei geni responsivi alla citochina.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <h4 className="font-bold text-slate-900 mb-1">
              I Meccanismi di Spegnimento: Le Proteine SOCS (Suppressor of Cytokine Signaling)
            </h4>
            <p className="text-slate-700 font-serif-body leading-relaxed">
              Dato il potenziale infiammatorio devastante di un'iperattivazione prolungata di JAK-STAT, la cellula dispone di
              un potente sistema di controllo a feedback negativo mediato dalla famiglia delle proteine <strong>SOCS (SOCS1-7, CIS)</strong>.
              I geni <em>SOCS</em> vengono trascritti proprio dagli stessi dimeri STAT attivati. Le proteine SOCS neosintetizzate spengono
              il segnale attraverso tre meccanismi complementari:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-slate-700">
              <li><strong>Inibizione catalitica diretta:</strong> il dominio KIR (Kinase Inhibitory Region) di SOCS si inserisce nella tasca catalitica di JAK bloccandone l'attività di fosforilazione.</li>
              <li><strong>Competizione sterica:</strong> il dominio SH2 di SOCS maschera le fosfotirosine del recettore, impedendo il reclutamento di nuove molecole STAT.</li>
              <li><strong>Degradazione proteasomiale:</strong> il dominio SOCS-box recluta complessi di ubiquitin-ligasi (Elongina B/C, Cullin-5), inducendo l'ubiquitinazione di JAK e del recettore con successiva degradazione proteolitica nel proteasoma 26S.</li>
            </ul>
          </div>
        </div>

        {/* JAK-STAT Simulator Mount */}
        <InteractiveJakStatSimulator />
      </article>

      {/* SEZIONE 2.7: CHEMOCHINE E RECETTORI GPCR */}
      <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-700 font-semibold block">
            Parte Settima · Chemiotassi & Infezione Retrovirale
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            2.7 Chemochine, Recettori GPCR con Motivo DRY e Ruolo nell'Infezione da HIV
          </h2>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Le <strong>chemochine</strong> (citochine chemiotattiche) sono polipeptidi basici a basso peso molecolare (8-12 kDa)
            preposti a orchestrare la migrazione orientata dei leucociti lungo gradienti chimici (chemiotassi e aptotassi).
            Oltre alla flogosi acuta e cronica, esse regolano l'angiogenesi, l'homing linfocitario fisiologico, lo sviluppo embrionale
            e la diffusione metastatica dei tumori solidi.
          </p>
          <p>
            In base alla disposizione e al numero di residui conservati di cisteina all'estremità N-terminale, le chemochine si
            suddividono in <strong>quattro famiglie strutturali</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs my-4">
            {CHEMOKINE_CLASSES_DATA.map((ch, idx) => (
              <div key={idx} className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-blue-900 text-sm block mb-1">{ch.classType}</span>
                <p className="text-slate-600 font-mono text-[11px] mb-1.5">{ch.structure}</p>
                <div className="space-y-1 text-slate-700">
                  <p><strong>Ligandi:</strong> {ch.primaryLigands}</p>
                  <p><strong>Recettori:</strong> <span className="font-mono text-blue-700">{ch.mainReceptors}</span></p>
                  <p className="text-slate-600 text-[11px] mt-1 pt-1 border-t border-slate-200 font-serif-body">
                    {ch.clinicalPathology}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <h4 className="font-bold text-slate-900 text-sm">
              I Recettori per Chemochine: Struttura a 7 Alfa-Eliche e il Motivo DRY
            </h4>
            <p className="mt-1">
              Tutti i recettori per chemochine sono <strong>recettori accoppiati a proteine G eterotrimeriche (GPCR)</strong> a sette
              alfa-eliche transmembrana. Il legame della chemochina specifica provoca un riarrangiamento conformazionale che espone
              un motivo amminoacidico altamente conservato, denominato <strong>DRY (Acido Aspartico - Arginina - Tirosina)</strong>,
              localizzato nella seconda ansa citoplasmatica. L'esposizione del motivo DRY permette l'aggancio delle subunità Gαi
              e lo scambio di GDP con GTP, scatenando la polimerizzazione di actina e la motilità leucocitaria.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950">
            <h4 className="font-bold flex items-center gap-1.5 text-amber-900 mb-1">
              <Info className="w-4 h-4 text-amber-600" />
              Immobilizzazione su Glicosamminoglicani (GAG) e Aptotassi
            </h4>
            <p className="leading-relaxed font-serif-body">
              Dopo la secrezione nei tessuti infiammati, le chemochine verrebbero rapidamente spazzate via dal flusso ematico o
              degradate da proteasi. Esse vengono invece immobilizzate mediante legami elettrostatici sui
              <strong>glicosamminoglicani (GAG, es. eparansolfato)</strong> presenti sul glicocalice delle cellule endoteliali e nella
              matrice extracellulare. Questa immobilizzazione le protegge dalla degradazione proteolitica e forma un
              <strong>gradiente di concentrazione in fase solida</strong> (aptotassi), che guida il leucocita dal lume vascolare
              direttamente al centro del focolaio lesivo.
            </p>
          </div>
        </div>
      </article>

      {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_LEZIONE_2} lessonNumber={2} title="Verifica dell'Apprendimento · Lezione 2" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS_LEZIONE_2} lessonNumber={2} title="Flashcard di Ripasso Attivo · Lezione 2" />
    </div>
  );
};
