import React from 'react';
import { InteractiveExtravasationSimulator } from './InteractiveExtravasationSimulator';
import { InteractiveKineticsGraph } from './InteractiveKineticsGraph';
import { InteractiveCheckpointBlockade } from './InteractiveCheckpointBlockade';
import { InteractivePolarizationCompass } from './InteractivePolarizationCompass';
import { InteractiveTables } from './InteractiveTables';
import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import { NOBEL_MILESTONES } from '../data/chapterContent';
import { IMAGES } from '../data/imageAssets';

interface Lezione1ViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
}

export const Lezione1View: React.FC<Lezione1ViewProps> = ({
  isSerif = false,
  fontSize = 'normal'
}) => {
  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  return (
    <>
      {/* SEZIONE 1: FONDAMENTI */}
      <article id="capitolo-1" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold block">
            Parte Prima · Principi Epistemologici
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            1. Fondamenti e Principi Generali dell'Immunologia
          </h2>
        </div>

        {/* 1.1 Natura della disciplina */}
        <section id="sec-1-1" className="mb-10">
          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">1.1</span>
            Natura della disciplina e approccio traslazionale
          </h3>
          <div className={`text-slate-800 space-y-3.5 ${proseFontClass} ${proseSizeClass}`}>
            <p>
              L'immunologia è una disciplina biomedica sperimentale quantitativa ("scienza dura") fondata sul metodo
              scientifico galileiano. Le evidenze immunologiche non sono assunti teorici a priori, bensì poggiano su
              modelli empirici rigorosamente riproducibili, condotti mediante saggi molecolari <em>in vitro</em> e
              modelli preclinici <em>in vivo</em>.
            </p>
            <p>
              Gli obiettivi primari della disciplina si articolano su due livelli complementari e interconnessi:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-slate-800">
              <li>
                <strong>Comprensione meccanicistica fondamentale:</strong> definizione analitica delle caratteristiche
                cellulari, recettoriali, molecolari e genomiche del sistema immunitario in condizioni di perfetta
                omeostasi e durante la risposta flogistica.
              </li>
              <li>
                <strong>Medicina traslazionale (<em>from bench to bedside</em>):</strong> conversione diretta delle
                scoperte molecolari di laboratorio in presidi diagnostici predittivi e protocolli terapeutici avanzati,
                quali immunoterapie biologiche con anticorpi monoclonali, vaccini a piattaforme sintetiche e farmaci mirati
                (<em>target therapy</em>).
              </li>
            </ol>
            <p>
              Dal punto di vista funzionale, il sistema immunitario è preposto al mantenimento dell'integrità biologica
              dell'organismo attraverso il riconoscimento e l'eliminazione di agenti patogeni esogeni (batteri, virus,
              funghi, parassiti) e di cellule alterate endogene (sorveglianza immunologica contro la trasformazione neoplastica).
              Parallelamente, esso garantisce la tolleranza verso le componenti proprie dell'organismo (<em>self</em>) e verso
              microrganismi commensali non nocivi. Quando tali equilibri subiscono alterazioni, il sistema immunitario può farsi
              esso stesso mediatore di danno tessutale (immunopatologia).
            </p>
          </div>
        </section>

        {/* 1.2 Tappe storiche */}
        <section id="sec-1-2" className="mb-8">
          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">1.2</span>
            Tappe storiche ed evoluzione concettuale
          </h3>
          <div className={`text-slate-800 space-y-3.5 ${proseFontClass} ${proseSizeClass}`}>
            <p>
              L'evoluzione storica dell'immunologia ha segnato il passaggio da un approccio empirico-osservazionale
              alla medicina molecolare e cellulare di precisione, testimoniato da fondamentali avanzamenti concettuali
              riconosciuti da molteplici Premi Nobel:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-800">
              <li>
                <strong>Edward Jenner (1798) e la vaccinazione empirica:</strong> osservando la costante resistenza al vaiolo
                umano (<em>Variola virus</em>) nelle mungitrici affette da vaiolo bovino (<em>Cowpox virus</em>), Jenner sviluppò
                il primo approccio di immunizzazione eterologa tramite inoculazione di materiale pustoloso attenuato/crostoso,
                gettando le basi empiriche della profilassi vaccinale.
              </li>
              <li>
                <strong>Louis Pasteur (fine XIX secolo):</strong> formalizzazione scientifica del principio di attenuazione
                dei patogeni microbici, presupposto razionale per le campagne di immunizzazione di massa che nel XX secolo hanno
                condotto all'eradicazione del vaiolo e al controllo globale di infezioni letali o invalidanti come la poliomielite.
              </li>
              <li>
                <strong>Immunità cellulare e umorale (inizio XX secolo):</strong> le pionieristiche scoperte di Il'ja Mečnikov
                sulla fagocitosi dimostrarono l'importanza della componente cellulare, parallelamente alla caratterizzazione delle
                antitossine e degli anticorpi circolanti (immunità umorale) da parte di Paul Ehrlich.
              </li>
              <li>
                <strong>Georges Köhler e César Milstein (1975, Premio Nobel 1984):</strong> introduzione della rivoluzionaria
                tecnologia degli ibridomi per la produzione in vitro di <strong>anticorpi monoclonali (mAbs)</strong>. Questa
                innovazione ha inaugurato l'era dei farmaci biologici mirati (<em>target therapy</em>), attualmente impiegati in
                oncologia, reumatologia, ematologia, infettivologia e neurologia.
              </li>
            </ul>
          </div>

          {/* Interactive Nobel Milestones Grid */}
          <div className="mt-6 pt-5 border-t border-slate-200">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-3">
              Pietre Miliari Premi Nobel dell'Immunologia Moderna
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {NOBEL_MILESTONES.map((nb, i) => (
                <div key={i} className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 transition-colors">
                  <div className="flex justify-between items-center font-mono text-[11px] text-slate-500 mb-1">
                    <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      Nobel {nb.year}
                    </span>
                    <span className="truncate max-w-[160px]">{nb.scientists}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">{nb.discovery}</h4>
                  <p className="text-slate-600 font-serif-body text-[11px] leading-relaxed">
                    {nb.clinicalImpact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 1.3 Rivoluzione del DNA ricombinante */}
        <section id="sec-1-3">
          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">1.3</span>
            La Rivoluzione del DNA ricombinante e l'Ingegneria Terapeutica
          </h3>
          <div className={`text-slate-800 space-y-3.5 ${proseFontClass} ${proseSizeClass}`}>
            <p>
              L'avvento delle tecnologie del DNA ricombinante negli anni '80 e '90 ha radicalmente trasformato
              la farmacologia immunologica. La transizione da sieri eterologhi o composti chimici aspecifici a
              proteine umane ricombinanti e molecole ingegnerizzate ha aperto orizzonti clinici precedentemente inimmaginabili:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
              <div className="p-3.5 bg-blue-50/60 border border-blue-200 rounded-lg">
                <span className="font-bold text-blue-900 block mb-1">Anticorpi Umanizzati e Totalmente Umani</span>
                <p className="text-xs text-blue-950 font-serif-body leading-relaxed">
                  Riduzione drastica dell'immunogenicità rispetto ai primi mAbs murini, prolungamento dell'emivita
                  plasmatica (fino a 21 giorni mediata dal recettore neonatale FcRn) ed elevatissima affinità di legame.
                </p>
              </div>
              <div className="p-3.5 bg-emerald-50/60 border border-emerald-200 rounded-lg">
                <span className="font-bold text-emerald-900 block mb-1">Proteine di Fusione & Inibitori Citochinici</span>
                <p className="text-xs text-emerald-950 font-serif-body leading-relaxed">
                  Esempi emblematici includono molecole <em>trap</em> (es. etanercept, recettore solubile del TNF fuso
                  alla frazione Fc di IgG1) per il controllo selettivo della flogosi cronica reumatologica.
                </p>
              </div>
            </div>
            <p>
              Oggi, le piattaforme di espressione genica ricombinante consentono la sintesi su scala industriale di
              citochine terapeutiche (es. IFN-α, IL-2 ricombinante, G-CSF per la mobilizzazione dei neutrofili) e lo
              sviluppo di recettori chimerici antigenici (<strong>CAR-T</strong>) per la riprogrammazione <em>ex vivo</em> dei
              linfociti T citotossici autologhi in ambito oncologico.
            </p>
          </div>
        </section>
      </article>

      {/* SEZIONE 2: ORGANIZZAZIONE GENERALE */}
      <article id="capitolo-2" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold block">
            Parte Seconda · Anatomia Funzionale & Compartimentazione
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            2. Organizzazione Generale del Sistema Immunitario
          </h2>
        </div>

        {/* 2.1 Immunità Innata vs Adattativa */}
        <section id="sec-2-1" className="mb-10">
          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">2.1</span>
            Immunità Innata (Naturale) ed Immunità Adattativa (Specifica)
          </h3>
          <div className={`text-slate-800 space-y-3.5 ${proseFontClass} ${proseSizeClass}`}>
            <p>
              La risposta immunitaria dell'organismo umano è strutturata in due grandi compartimenti fisiologici
              strettamente interconnessi, distinti per cinetica d'innesco, tipologia recettoriale e meccanismi effettori:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Immunità Innata (Naturale):</strong> costituisce la prima insostituibile linea di difesa dell'organismo.
                Entra in azione in tempi rapidissimi (da minuti a poche ore) ed è mediata da cellule della linea mieloide
                (granulociti neutrofili, eosinofili, basofili, monociti/macrofagi, cellule dendritiche), da cellule linfoidi
                innate (<strong>ILCs</strong>, tra cui le cellule <strong>NK</strong>, <em>Natural Killer</em>), nonché da
                barriere chimico-fisiche epiteliali e fattori solubili (quali il sistema del complemento e le proteine di fase acuta).
                Riconosce strutture molecolari altamente conservate e non modifica la propria efficacia in seguito a successivi contatti
                con lo stesso agente.
              </li>
              <li>
                <strong>Immunità Adattativa (Specifica):</strong> si sviluppa più lentamente nel corso di una prima infezione
                (giorni) ma è dotata di straordinaria specificità antigenica e della capacità di generare <strong>memoria immunologica</strong>.
                I suoi effettori chiave sono i <strong>linfociti B</strong> (immunità umorale) e i <strong>linfociti T</strong>
                (immunità cellulo-mediata).
              </li>
            </ul>
            <p>
              I due compartimenti cooperano senza soluzione di continuità: le cellule dendritiche e i macrofagi fagocitano, processano
              e presentano l'antigene ai linfociti T vergini (<em>naïve</em>), mentre il rilascio sequenziale di citochine e chemochine
              orchestra la transizione dalla fase infiammatoria acuta alla risposta effettrice specifica.
            </p>
          </div>
        </section>

        {/* 2.2 Maturazione, Clonalità e Tolleranza Centrale */}
        <section id="sec-2-2" className="mb-10">
          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">2.2</span>
            Maturazione, Clonalità e Tolleranza Centrale
          </h3>
          <div className={`text-slate-800 space-y-3.5 ${proseFontClass} ${proseSizeClass}`}>
            <p>
              I linfociti B e T originano da un precursore linfoide comune (<em>Common Lymphoid Progenitor</em>, CLP) all'interno
              del midollo osseo. Il loro ciclo biologico prevede due tappe anatomiche e funzionali distinte:
            </p>
            <ol className="list-decimal pl-5 space-y-2.5">
              <li>
                <strong>Organi Linfoidi Primari (Centrali o Generativi):</strong>
                <br />
                • <strong>Midollo Osseo:</strong> sede della generazione di tutte le cellule ematopoietiche e della maturazione
                e selezione dei <strong>linfociti B</strong>.
                <br />
                • <strong>Timo:</strong> organo linfoepiteliale cervicale/mediastinico in cui migrano i progenitori immaturi per
                completare il programma differenziativo dei <strong>linfociti T</strong>.
              </li>
              <li>
                <strong>Educazione e Selezione Tissutale:</strong>
                <br />
                Durante la maturazione nei tessuti primari avvengono complessi processi di <strong>riarrangiamento genico somatico</strong>
                (ricombinazione V(D)J) mediati da enzimi specifici (RAG-1, RAG-2). Questo meccanismo consente di generare un repertorio
                teoricamente illimitato di recettori clonotipici per l'antigene:
                <br />
                • <strong>BCR</strong> (<em>B-Cell Receptor</em>) sui linfociti B;
                <br />
                • <strong>TCR</strong> (<em>T-Cell Receptor</em>) sui linfociti T.
                <br />
                La maturazione include una rigorosa fase di <strong>selezione positiva e negativa</strong> (tolleranza centrale):
                i linfociti che esprimono recettori non funzionali vanno incontro a morte per apoptosi; parimenti, i cloni autoreattivi
                che riconoscono con alta affinità componenti del <em>self</em> vengono eliminati o inattivati, prevenendo l'insorgenza
                di disordini autoimmuni.
              </li>
              <li>
                <strong>Principio di Clonalità:</strong>
                <br />
                Ciascun linfocita maturo esprime sulla propria membrana un'unica tipologia di recettore clonotipico dotato di specificità
                per un singolo determinante antigenico (<strong>epitopo</strong>). Secondo la teoria della selezione clonale di Burnet,
                l'ingresso dell'antigene attiva selettivamente solo il clone cellulare pre-esistente provvisto del recettore complementare,
                inducendone la rapida espansione clonale e il differenziamento in cellule effettrici e cellule della memoria.
              </li>
            </ol>
          </div>
        </section>

        {/* 2.3 Tessuti Secondari e Reclutamento Leucocitario */}
        <section id="sec-2-3" className="mb-10">
          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">2.3</span>
            Tessuti Linfoidi Periferici e Dinamiche di Reclutamento
          </h3>
          <div className={`text-slate-800 space-y-3.5 ${proseFontClass} ${proseSizeClass}`}>
            <p>
              I linfociti maturi <em>naïve</em> lasciano gli organi primari e ricircolano costantemente tra il torrente circolatorio,
              la linfa e gli <strong>organi linfoidi secondari (periferici)</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Linfonodi:</strong> drenano i liquidi interstiziali e filtrano la linfa proveniente dai tessuti periferici;
                presentano una rigida compartimentazione in aree corticali B-dipendenti (follicoli linfoidi e centri germinativi)
                e aree paracorticali T-dipendenti ricche di cellule dendritiche interdigitate.
              </li>
              <li>
                <strong>Milza:</strong> organo specializzato nel monitoraggio immunologico degli antigeni veicolati dal sangue,
                divisa funzionalmente in polpa rossa (emocateresi ed eliminazione di emazie senescenti) e polpa bianca (aree periarteriolari
                PALS ricche di cellule T e follicoli B).
              </li>
              <li>
                <strong>MALT</strong> (<em>Mucosa-Associated Lymphoid Tissue</em>): tessuto linfoide non capsulato distribuito a livello
                delle mucose, comprendente le <strong>placche di Peyer</strong> dell'ileo, l'anello del Waldeyer e gli aggregati
                linfocitari della mucosa respiratoria e urogenitale.
              </li>
            </ul>
          </div>

          {/* Histology Micrograph Integration */}
          <div className="my-6 rounded-xl overflow-hidden border border-slate-200 bg-white grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 bg-slate-100 h-full">
              <img
                src={IMAGES.lymphoidHistology}
                onError={(e) => { e.currentTarget.src = '/images/lymphoid_histology_1792319783766.jpg'; }}
                alt="Microscopia istologica di un follicolo linfonodale umano con centro germinativo e zona mantellare"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-7 p-4 text-xs text-slate-700 space-y-2">
              <div className="flex items-center justify-between text-slate-500 font-mono text-[11px]">
                <span>Microscopia Ottica ad Alta Risoluzione</span>
                <span>Barra: 100 μm</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Figura 1.2: Architettura del Follicolo Linfonodale Secondario</h4>
              <p className="font-serif-body leading-relaxed">
                Sezione istologica di centro germinativo (<strong>GC</strong>) con divisione funzionale in Zona Scura
                (<strong>DZ</strong>, proliferazione dei centroblasti e ipermutazione somatica) e Zona Chiara
                (<strong>LZ</strong>, selezione dei centrociti mediata da cellule dendritiche follicolari), circondato
                dalla Zona Mantellare (<strong>MZ</strong>) di linfociti B vergini.
              </p>
            </div>
          </div>

          {/* Extravasation Simulator Mount */}
          <div id="sim-stravaso">
            <InteractiveExtravasationSimulator />
          </div>
        </section>

        {/* 2.4 Microbioma, Barriere Mucose ed Esposoma */}
        <section id="sec-2-4">
          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">2.4</span>
            Microbioma, Barriere Mucose ed Esposoma
          </h3>
          <div className={`text-slate-800 space-y-3.5 ${proseFontClass} ${proseSizeClass}`}>
            <p>
              Il tratto gastrointestinale costituisce la più vasta superficie d'interazione antigenica dell'organismo,
              ospitando fino a 10<sup>12</sup> microrganismi/ml nel lume colico. Questo consorzio simbiotico di batteri,
              virus e funghi commensali costituisce il <strong>microbioma</strong>, entità biologicamente attiva fondamentale
              per la maturazione del sistema immunitario, il metabolismo e la preservazione dell'integrità epiteliale.
              A livello della lamina propria e delle placche di Peyer, le cellule dendritiche campionano costantemente gli antigeni
              microbici e alimentari, inducendo una costante produzione di <strong>IgA secretorie (sIgA)</strong> e favorendo
              lo sviluppo di linfociti T regolatori (Treg) ad azione immunosoppressiva e tollerogenica.
            </p>
            <p>
              La composizione e la diversità funzionale del microbioma sono plasmate da fattori endogeni (assetto genetico)
              ed esogeni, globalmente definiti <strong>esposoma</strong>: modalità del parto (naturale versus cesareo), allattamento,
              dieta, ritmi circadiani ed esposizione ad antibiotici.
            </p>
            <p>
              L'<strong>ipotesi dell'igiene</strong> postula che una ridotta esposizione microbica precoce in ambienti a elevato tasso
              di sanificazione ostacoli il corretto "addestramento" dei meccanismi immuno-regolatori, favorendo una deviazione sbilanciata
              verso risposte infiammatorie e predisponendo allo sviluppo di disordini atopici, allergici e autoimmuni, oltre a influenzare
              la fisiologia sistemica mediante vie di segnalazione bidirezionali (es. asse intestino-cervello).
            </p>
          </div>
        </section>
      </article>

      {/* SEZIONE 3: RISPOSTA ADATTATIVA */}
      <article id="capitolo-3" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold block">
            Parte Terza · Meccanismi Effettori & Memoria
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            3. Dinamica ed Effettori della Risposta Adattativa
          </h2>
        </div>

        {/* 3.1 Immunità Umorale */}
        <section id="sec-3-1" className="mb-10">
          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">3.1</span>
            Immunità Umorale: Plasmacellule e Meccanismi Anticorpali
          </h3>
          <div className={`text-slate-800 space-y-3.5 ${proseFontClass} ${proseSizeClass}`}>
            <p>
              L'immunità umorale è preposta alla difesa contro i microbi extracellulari e le tossine solubili.
              I linfociti B, a seguito del riconoscimento dell'antigene tramite il BCR e dell'eventuale interazione cooperativa
              con i linfociti T helper nei centri germinativi, proliferano e differenziano in <strong>plasmacellule</strong>,
              fabbriche biologiche specializzate nella secrezione di elevate quantità di <strong>immunoglobuline (anticorpi)</strong> solubili.
            </p>
            <p>
              Gli anticorpi secreti esplicano molteplici funzioni protettive cruciali:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Neutralizzazione:</strong> blocco sterico dei siti di legame impiegati dai patogeni per aderire e infettare
                le cellule ospiti. Un esempio primario è costituito dagli anticorpi neutralizzanti diretti contro la proteina
                Spike (<em>S</em>) di SARS-CoV-2, che ne impediscono l'interazione con il recettore cellulare umano ACE2
                (<em>Angiotensin-Converting Enzyme 2</em>).
              </li>
              <li>
                <strong>Opsonizzazione:</strong> rivestimento della superficie antigenica mediante la porzione Fab dell'anticorpo,
                rendendo accessibile la porzione costante (Fc) ai recettori specifici (FcR) presenti sulla membrana dei fagociti
                mononucleati e dei granulociti neutrofili, incrementando esponenzialmente l'efficacia fagocitica.
              </li>
              <li>
                <strong>Attivazione del complemento:</strong> innesco della via classica della cascata complementare a partire
                dal legame della subunità C1q a immunocomplessi esposti, con conseguente formazione del complesso di attacco alla
                membrana (<strong>MAC</strong>) che lisa osmoticamente la cellula bersaglio, e liberazione di anafilatossine
                pro-infiammatorie (C3a, C5a).
              </li>
            </ul>
          </div>
        </section>

        {/* 3.2 Immunità Cellulo-Mediata */}
        <section id="sec-3-2" className="mb-10">
          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">3.2</span>
            Immunità Cellulo-Mediata: Linfociti CD4+ e CD8+
          </h3>
          <div className={`text-slate-800 space-y-3.5 ${proseFontClass} ${proseSizeClass}`}>
            <p>
              L'immunità cellulo-mediata interviene contro i patogeni intracellulari (virus, batteri a replicazione endocellulare
              come <em>Mycobacterium tuberculosis</em>) e le cellule neoplastiche mutate. È coordinata da due sottopopolazioni
              principali di linfociti T:
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-slate-900 text-sm">A. Linfociti T Helper (CD4+)</h4>
                <p className="mt-1">
                  Forniscono un segnale di supporto (<em>help</em>) essenziale per l'attivazione e la specializzazione delle
                  cellule B, dei macrofagi e degli stessi linfociti citotossici. In base al profilo citochinico del microambiente
                  tissutale e all'attivazione di fattori trascrizionali specifici (<em>lineage-defining transcription factors</em>),
                  i linfociti CD4+ <em>naïve</em> polarizzano verso distinti fenotipi effettori (Th1, Th2, Th17, Tfh, Treg).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm">B. Linfociti T Citotossici (CD8+, CTL)</h4>
                <p className="mt-1">
                  Riconoscono epitopi antigenici presentati in associazione a molecole MHC di classe I, espresse su tutte le cellule
                  nucleate dell'organismo. Il riconoscimento specifico induce il rilascio polarizzato e direzionato del contenuto dei
                  loro granuli litici: <strong>perforina</strong> (che polimerizza formando pori nella membrana lipidica bersaglio)
                  e <strong>granzimi</strong> (proteasi a serina che attraversano i pori e attivano la cascata delle caspasi),
                  determinando la rapida morte programmata per apoptosi della cellula infetta o trasformata.
                </p>
              </div>
            </div>
          </div>

          {/* Polarization Compass Mount */}
          <div id="sim-polarizzazione">
            <InteractivePolarizationCompass />
          </div>
        </section>

        {/* 3.3 Memoria Immunologica */}
        <section id="sec-3-3">
          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">3.3</span>
            Memoria Immunologica e Dinamica delle Risposte
          </h3>
          <div className={`text-slate-800 space-y-3.5 ${proseFontClass} ${proseSizeClass}`}>
            <p>
              La capacità di sviluppare risposte rapide e quantitativamente amplificate a seguito di esposizioni secondarie al medesimo
              antigene rappresenta una proprietà cardinale distintiva dell'immunità adattativa:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Risposta Primaria:</strong> originata dal primo contatto con l'antigene; presenta un periodo di latenza
                (<em>lag phase</em>) prolungato (giorni o settimane), produzione iniziale predominante di anticorpi di classe IgM
                a modesta affinità e una precoce fase di contrazione. Al termine di questa fase, una frazione di cellule B e T sopravvive
                differenziando in <strong>cellule di memoria a lunga sopravvivenza</strong>.
              </li>
              <li>
                <strong>Risposta Secondaria:</strong> innescata da una riesposizione allo stesso antigene; caratterizzata da un periodo
                di latenza significativamente ridotto (1-2 giorni), rapida espansione clonale, ed elevati titoli anticorpali sierici
                sostenuti prevalentemente da isotipi a elevata affinità (es. IgG, IgA) generati grazie ai meccanismi di ipermutazione
                somatica nei centri germinativi.
              </li>
            </ul>
            <p>
              Questo principio fisiologico costituisce il presupposto immunobiologico della vaccinazione, che permette di generare
              memoria protettiva duratura senza indurre la grave morbilità associata all'infezione primaria naturale.
            </p>
          </div>

          {/* Interactive Kinetics Graph Mount */}
          <div id="sim-cinetica">
            <InteractiveKineticsGraph />
          </div>
        </section>
      </article>

      {/* SEZIONE 4: IMMUNOPATOLOGIA ED APPLICAZIONI CLINICHE */}
      <article id="capitolo-4" className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <span className="text-xs uppercase font-mono tracking-wider text-rose-700 font-semibold block">
            Parte Quarta · Fisiopatologia Clinica & Terapie
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            4. Immunopatologia ed Applicazioni Cliniche
          </h2>
        </div>

        {/* 4.1 Reazioni di Ipersensibilità */}
        <section id="sec-4-1" className="mb-10">
          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-rose-600">4.1</span>
            Reazioni di Ipersensibilità (Classificazione di Gell e Coombs)
          </h3>
          <div className={`text-slate-800 space-y-3.5 ${proseFontClass} ${proseSizeClass}`}>
            <p>
              Le reazioni di ipersensibilità descrivono risposte immuni inappropriate, non regolate o mal dirette verso antigeni
              ambientali innocui (<em>allergeni</em>), autoantigeni (<em>autoimmunità</em>) o alloantigeni trapiantati:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Tipo I: Ipersensibilità Immediata (IgE-mediata):</strong> innescata dal cross-linking di immunoglobuline
                di classe IgE legate al recettore ad alta affinità FcεRI sulla membrana di basofili e mastociti tessutali. Provoca
                il rilascio immediato di istamina e la sintesi <em>ex novo</em> di leucotrieni e prostaglandine.
                Clinica: rinite, asma estrinseco, angioedema e shock anafilattico sistemico.
              </li>
              <li>
                <strong>Tipo II: Ipersensibilità Mediata da Anticorpi Citotossici:</strong> diretta contro antigeni fissi localizzati
                sulla superficie cellulare o nella matrice extracellulare. Il legame anticorpale (IgG, IgM) induce danno cellulare
                mediante complemento, opsonizzazione o alterazione recettoriale autonoma.
                Esempi: reazioni trasfusionali ABO/Rh e Malattia di Graves (tireotossicosi da autoanticorpi stimolanti il recettore TSHR).
              </li>
              <li>
                <strong>Tipo III: Ipersensibilità Mediata da Immunocomplessi:</strong> precipitazione di complessi antigene-anticorpo
                solubili circolanti lungo l'endotelio dei vasi sanguigni (glomeruli renali, sinovia, cute), richiamando granulociti
                neutrofili che innescano una <strong>vasculite necrotizzante</strong>.
                Esempi: Lupus Eritematoso Sistemico (LES), glomerulonefriti post-infettive, malattia da siero.
              </li>
              <li>
                <strong>Tipo IV: Ipersensibilità Cellulo-Mediata o Ritardata (DTH):</strong> mediata da linfociti T sensibilizzati
                (Th1/Th17 e CD8+) e macrofagi reclutati, indipendente dall'intervento di anticorpi. Le lesioni tessutali si manifestano
                clinicamente a distanza di 24-72 ore.
                Esempi: Artrite Reumatoide (sinovite proliferativa cronica), dermatite allergica da contatto, test alla tubercolina.
              </li>
            </ul>
          </div>
        </section>

        {/* 4.2 Disregolazione Citochinica e Reazioni Autoimmuni Atipiche */}
        <section id="sec-4-2" className="mb-10">
          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-rose-600">4.2</span>
            Disregolazione Citochinica e Reazioni Autoimmuni Atipiche
          </h3>
          <div className={`text-slate-800 space-y-3.5 ${proseFontClass} ${proseSizeClass}`}>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Tempesta Citochinica (<em>Cytokine Storm</em>)</h4>
              <p className="mt-1">
                Rappresenta una condizione patologica critica caratterizzata da una risposta sistemica incontrollata e disregolata,
                contrassegnata da ipersecrezione massiva e sostenuta di citochine pro-infiammatorie primarie:
                <strong>TNF-α</strong>, <strong>IL-1</strong> e <strong>IL-6</strong>.
                La loro diffusione sistemica non controllata altera l'omeostasi endoteliale, determinando perdita della funzione di
                barriera (<em>capillary leak syndrome</em>), ipotensione grave, coagulazione intravascolare disseminata (CID) e
                insufficienza multiorgano (<em>Multi-Organ Failure</em>, MOF).
                La gestione clinica tempestiva richiede farmaci biologici mirati quali antagonisti del recettore di IL-6 (es. tocilizumab)
                o inibitori di IL-1.
              </p>
            </div>

            <div className="pt-2">
              <h4 className="font-bold text-slate-900 text-sm">Autoanticorpi anti-citochina: il caso clinico di COVID-19</h4>
              <p className="mt-1">
                Un'alterazione funzionale atipica del sistema immunitario consiste nella produzione di autoanticorpi diretti contro
                mediatori solubili endogeni. Studi condotti su pazienti con forme critiche e letali di infezione da SARS-CoV-2 hanno
                dimostrato che circa il 10% degli individui affetti presentava <strong>autoanticorpi neutralizzanti diretti contro
                gli interferoni di tipo I</strong> (IFN-α e IFN-ω), molecole ad azione antivirale essenziali per bloccare tempestivamente
                la replicazione virale nelle prime fasi dell'infezione. La neutralizzazione funzionale di queste citochine abolisce
                la risposta antivirale precoce, consentendo una proliferazione virale massiva associata a grave danno polmonare.
              </p>
            </div>
          </div>
        </section>

        {/* 4.3 Immunodeficienze Primitive e Secondarie */}
        <section id="sec-4-3" className="mb-10">
          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-rose-600">4.3</span>
            Immunodeficienze Primitive e Secondarie
          </h3>
          <div className={`text-slate-800 space-y-3.5 ${proseFontClass} ${proseSizeClass}`}>
            <p>
              Rappresentano una vasta eterogeneità di condizioni cliniche caratterizzate dalla ridotta o assente funzionalità
              di uno o più elementi del sistema immunitario, con conseguente marcata suscettibilità a infezioni opportunistiche
              ricorrenti e alterata sorveglianza neoplastica:
            </p>
            <ul className="list-disc pl-5 space-y-2.5">
              <li>
                <strong>Immunodeficienze Primitive (Congenite):</strong> anomalie su base monogenica. Tra queste spicca la
                <strong>SCID (Immunodeficienza Combinata Grave) da deficit di Adenosina Deaminasi (ADA)</strong>, enzima chiave
                nella via del salvataggio dei nucleotidi purinici. L'accumulo intracellulare di metaboliti deossiribosilati (dATP)
                risulta selettivamente citotossico per i progenitori linfocitari immaturi in attiva replicazione negli organi primari
                (midollo e timo), causando la quasi totale deplezione dei linfociti circolanti (quadro storico del "bambino bolla").
                L'approccio clinico contemporaneo comprende il trapianto di cellule staminali ematopoietiche e protocolli di terapia
                genica mediante inserzione del gene <em>ADA</em> esogeno.
              </li>
              <li>
                <strong>Immunodeficienze Acquisite (Secondarie):</strong> conseguenti a noxae patogene esterne, malnutrizione o terapie
                immunosoppressive. Il paradigma fondamentale è l'<strong>AIDS</strong> (<em>Acquired Immunodeficiency Syndrome</em>),
                secondaria all'infezione da virus dell'immunodeficienza umana (<strong>HIV</strong>), che aggredisce e depleta
                progressivamente i linfociti T helper CD4+, compromettendo la regolazione globale della risposta adattativa.
              </li>
            </ul>
          </div>
        </section>

        {/* 4.4 Checkpoint Inhibitors e Tecnologie Omiche */}
        <section id="sec-4-4">
          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="text-rose-600">4.4</span>
            Immunologia Traslazionale: Checkpoint Inhibitors e Tecnologie Omiche
          </h3>
          <div className={`text-slate-800 space-y-3.5 ${proseFontClass} ${proseSizeClass}`}>
            <p>
              Le cellule tumorali sfuggono alla distruzione immunitaria sovraesprimendo molecole di superficie inibitorie che
              inviano segnali di arresto ai linfociti effettori infiltranti il microambiente neoplastico.
              Il target biologico primario è rappresentato dall'asse <strong>PD-1/PD-L1</strong>. L'impiego clinico di anticorpi
              monoclonali neutralizzanti diretti contro PD-1 o contro PD-L1 rimuove fisicamente questo "freno biologico", ripristinando
              la piena capacità citotossica linfocitaria e inducendo risposte cliniche con regressioni complete anche in stadi neoplastici
              metastatici avanzati.
            </p>
            <p>
              Parallelamente, l'oncologia e l'immunologia traslazionale contemporanee poggiano sull'integrazione di tecnologie
              omiche ad alta risoluzione:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Trascrittomica a singola cellula (<em>scRNA-seq</em>):</strong> decodifica il profilo trascrizionale di ogni
                singola cellula leucocitaria, tracciandone le traiettorie differenziative ed identificando cloni rari.
              </li>
              <li>
                <strong>Analisi dei repertori immunologici (<em>Immune Repertoire Sequencing</em>):</strong> sequenziamento NGS ad alta
                profondità delle porzioni ipervariabili CDR3 dei geni riarrangiati per TCR e BCR per valutare l'ampiezza clonale.
              </li>
              <li>
                <strong>Proteomica a singola cellula e Citometria di Massa (CyTOF):</strong> quantificazione simultanea di oltre 40-50
                marcatori fenotipici proteici per cellula tramite anticorpi marcati con isotopi di metalli pesanti delle terre rare.
              </li>
            </ul>
          </div>

          {/* Checkpoint Simulator Mount */}
          <div id="sim-checkpoint">
            <InteractiveCheckpointBlockade />
          </div>
        </section>
      </article>

      {/* TABELLE RIASSUNTIVE SINTETICHE */}
      <InteractiveTables />

      {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck />
    </>
  );
};
