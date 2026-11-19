import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import React, { useState } from 'react';
import { InteractiveRosSimulator } from './InteractiveRosSimulator';
import { InteractiveNetosisSimulator } from './InteractiveNetosisSimulator';
import { NEUTROPHIL_GRANULES_DATA, QUIZ_LEZIONE_3, FLASHCARDS_LEZIONE_3 } from '../data/lezione3Content';
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
  AlertCircle
} from 'lucide-react';

interface Lezione3ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione3View: React.FC<Lezione3ViewProps> = ({ isSerif, fontSize }) => {
  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  return (
    <div className="space-y-12">
      {/* Chapter 3 Hero Block */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-mono">
                <span>Lezione 3</span>
                <span aria-hidden="true">·</span>
                <span>Prof.ssa Soriani</span>
                <span aria-hidden="true">·</span>
                <span>Corso Ufficiale di Medicina e Chirurgia</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
                Lezione 3: Ematopoiesi, Neutrofili, Burst Respiratorio e NETosi
              </h1>

              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                Dalla biologia della cellula staminale ematopoietica (HSC) nelle nicchie midollari alla prima linea di difesa innata:
                cinetica dei compartimenti, gerarchia di degranulazione, biochimica del complesso enzimatico NADPH ossidasi (NOX2)
                e dinamica molecolare delle trappole extracellulari (NETs) con le relative sindromi da immunodeficienza (CGD e LAD).
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-150 flex flex-wrap items-center gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Dna className="w-4 h-4 text-rose-600" />
                <span>Complesso NOX2 & Radicale HOCl</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>NETosi & Citrullinazione PAD4</span>
              </div>
              <div className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-amber-600" />
                <span>Malattia Granulomatosa Cronica (CGD)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative bg-slate-950 min-h-[240px]">
            <img
              src={IMAGES.neutrophilNets}
              onError={(e) => { e.currentTarget.src = '/images/neutrophil_nets_ros_1792322903490.jpg'; }}
              alt="Visualizzazione 3D scientifica di neutrofilo umano attivato con burst respiratorio ROS ed estrusione di trappole extracellulari NETs che catturano batteri"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-xs border border-slate-700/60">
                Ricostruzione 3D: Neutrofilo attivato, ROS & Trappole NETs
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3.1: EMATOPOIESI E NICCHIE MIDOLLARI */}
      <section id="sec-3-1" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-rose-600 uppercase">
            Sezione 3.1
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Ematopoiesi, Nicchie Midollari e Regolazione Linfomieloide
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Architettura microambientale del midollo osseo, cellule staminali pluripotenti e segnali citochinici di lineage commitment.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            L'intero compartimento cellulare del sangue e del sistema immunitario trae origine nel midollo osseo a partire da una popolazione
            estremamente rarefatta (circa 1 ogni 10.000-100.000 cellule mononucleate midollari) di <strong>Cellule Staminali Ematopoietiche multipotenti (HSC, Hematopoietic Stem Cells)</strong>.
            Fenotipicamente, nell'uomo le HSC sono definite dalla positività per il marcatore di adesione <strong>CD34</strong>, dall'assenza del marcatore di differenziamento <strong>CD38 (CD34⁺CD38⁻)</strong>
            e dalla completa negatività per i marcatori specifici di lignaggio maturo (Lin⁻, come CD3, CD19, CD14, CD56, CD66b).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6 font-sans">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5 uppercase tracking-wider font-mono">
                <Layers className="w-4 h-4 text-blue-600" />
                Nicchia Endostale (Osteoblastica)
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Localizzata in prossimità della superficie interna dell'osso trabecolare corticale, dominata da osteoblasti e cellule stromali che secernono <strong>Angiopoietina-1</strong> e <strong>Trombopoietina (TPO)</strong>.
                È un microambiente a <strong>bassa tensione di ossigeno (ipossico)</strong>, fondamentale per mantenere le HSC in uno stato di <strong>quiescenza replicativa prolungata (G₀)</strong>,
                proteggendone l'integrità genomica dallo stress ossidativo metabolico.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5 uppercase tracking-wider font-mono">
                <Activity className="w-4 h-4 text-emerald-600" />
                Nicchia Vascolare (Sinusoidale)
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Costituita dai sinusoidi venosi midollari endoteliali e dalle cellule stromali perivascolari (cellule reticolari ricche di CXCL12 / CAR cells).
                Questo compartimento è più ossigenato e ricco di nutrienti; qui le HSC si attivano, entrano in ciclo cellulare proliferativo e si differenziano
                nei due progenitori multipotenti intermedi: il <strong>Progenitore Mieloide Comune (CMP)</strong> e il <strong>Progenitore Linfoide Comune (CLP)</strong>.
              </p>
            </div>
          </div>

          <p>
            Il destino differenziativo mieloide rispetto a quello linfoide è orchestrato dall'esposizione coordinata a specifici <strong>Fattori di Crescita Ematopoietici (CSF, Colony-Stimulating Factors)</strong>:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>
              <strong>Stem Cell Factor (SCF / c-Kit Ligand) e Flt3-Ligand:</strong> Fattori precoci non di linea che garantiscono l'auto-rinnovamento (self-renewal) e la sopravvivenza basale delle HSC primitive legando i recettori tirosin-chinasici CD117 e CD135.
            </li>
            <li>
              <strong>Interleuchina-3 (IL-3 / multi-CSF) e GM-CSF:</strong> Promuovono la proliferazione del CMP verso la granulopoiesi e la monocitopoiesi.
            </li>
            <li>
              <strong>G-CSF (Granulocyte Colony-Stimulating Factor):</strong> Il ligando fisiologico fondamentale per l'indirizzamento univoco verso la serie granulocitaria neutrofila, inducendo la trascrizione del master regulator <strong>C/EBPα</strong>.
            </li>
            <li>
              <strong>Interleuchina-7 (IL-7):</strong> Prodotta dallo stroma midollare e timico, indispensabile per la sopravvivenza e il riarrangiamento dei recettori antigenici nei precursori linfoidi B e T.
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 3.2: CINETICA DEI NEUTROFILI E GRANULI */}
      <section id="sec-3-2" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-rose-600 uppercase">
            Sezione 3.2
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Cinetica, Compartimenti e Gerarchia di Degranulazione del Neutrofilo
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Pool midollari, dinamica di demarginazione vascolare e mobilizzazione controllata dei quattro tipi di granuli intracellulari.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            I granulociti neutrofili rappresentano i leucociti più abbondanti nel sangue periferico umano dell'adulto (40-75% della formula leucocitaria, corrispondenti a 1.500 – 7.500 / μL).
            Ogni giorno il midollo osseo produce circa 10¹¹ neutrofili in condizioni stazionarie, quota che può aumentare di oltre 10 volte durante infezioni batteriche acute.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 not-prose font-sans">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono mb-2 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-600" />
              I Due Pool Vascolari: Circolante vs Marginale
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="font-bold text-slate-800 block mb-1">1. Pool Circolante (50% del totale vascolare):</span>
                Cellule che scorrono liberamente al centro del torrente ematico con un'emivita fisiologica rapidissima di circa <strong>6-8 ore</strong>. Questo è l'unico pool campionato dal prelievo venoso per l'emocromo.
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="font-bold text-slate-800 block mb-1">2. Pool Marginale (50% del totale vascolare):</span>
                Neutrofili temporaneamente sequestrati o adesi a bassa affinità all'endotelio dei letti capillari polmonari, splenici ed epatici.
              </div>
            </div>
            <div className="mt-3 p-3 bg-blue-50/70 border border-blue-200 rounded-lg text-xs text-blue-900">
              <strong>Correlazione Clinica sulla Demarginazione:</strong> Stimoli fisici intensi, adrenalina o la somministrazione di <strong>glucocorticoidi (cortisone)</strong> inducono il rapido distacco
              dei neutrofili marginali che si riversano nel flusso centrale. L'emocromo mostrerà una marcata <strong>leucocitosi neutrofila</strong> (fino a 15.000-20.000/μL) priva di forme immature ("deviazione a sinistra"),
              riflettendo semplicemente un cambio di compartimento fisico e non un'infezione attiva.
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 not-prose font-sans">
            I Quattro Tipi di Granuli: Mobilizzazione Gerarchica Inversa
          </h3>
          <p>
            Durante la maturazione nel midollo (da mieloblasto a promielocita, mielocita, metamielocita, neutrofilo bandato e neutrofilo segmentato maturo),
            la cellula sintetizza tipi distinti di granuli. La regola biologica fondamentale stabilisce che <em>i granuli formati per ultimi sono i primi a essere rilasciati</em> durante l'attivazione infiammatoria:
          </p>

          {/* Granules Table */}
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <thead className="bg-slate-100 text-slate-800 font-mono font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Classe Granulo</th>
                  <th className="p-3">Contenuto Enzimatico & Proteico</th>
                  <th className="p-3">Marcatori di Membrana</th>
                  <th className="p-3">Soglia di Rilascio & Funzione</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {NEUTROPHIL_GRANULES_DATA.map((g, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3 font-bold text-slate-900">
                      <div className="text-slate-900 font-bold">{g.name}</div>
                      <div className="text-[10px] font-mono text-slate-500 mt-0.5">{g.stage}</div>
                    </td>
                    <td className="p-3 text-slate-700">
                      <ul className="list-disc pl-3 space-y-0.5">
                        {g.enzymesAndContents.map((e, eIdx) => (
                          <li key={eIdx}>{e}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-3 font-mono text-slate-600">
                      {g.membraneMarkers.join(', ')}
                    </td>
                    <td className="p-3 text-slate-600 leading-snug">
                      <div className="font-semibold text-slate-800 mb-0.5">{g.functionalRole}</div>
                      <div className="text-[11px] text-slate-500">{g.mobilizationTrigger}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 3.3: IL BURST RESPIRATORIO E LA NADPH OSSIDASI */}
      <section id="sec-3-3" className="space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
          <div className="border-b border-slate-150 pb-4">
            <span className="text-xs font-mono font-bold tracking-wider text-rose-600 uppercase">
              Sezione 3.3
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Fagocitosi, Burst Respiratorio e il Complesso Enzimatico NOX2
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              La catena di trasporto degli elettroni fagolisosomiale, la chimica dei ROS e il ruolo cardine della Mieloperossidasi (MPO).
            </p>
          </div>

          <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
            <p>
              In seguito al legame di particelle opsonizzate da anticorpi IgG (interazione con i recettori <strong>FcγRI / CD64</strong> e <strong>FcγRIIA / CD32</strong>)
              o da frammenti del complemento (C3b/iC3b che legano <strong>CR1 / CD35</strong> e <strong>Mac-1 / CR3 / CD11b-CD18</strong>),
              il neutrofilo emette pseudopodi che racchiudono il patogeno in un vacuolo intracellulare detto <strong>fagosoma</strong>.
            </p>

            <p>
              Contemporaneamente alla fagocitosi si verifica un incremento impetuoso del consumo di ossigeno molecolare (fino a 50-100 volte il livello basale),
              fenomeno denominato <strong>burst respiratorio (o esplosione ossidativa)</strong>.
              Questo consumo di ossigeno non è destinato alla produzione di ATP mitocondriale, ma alimenta l'attività catalitica del complesso
              enzimatico multicomponente <strong>NADPH Ossidasi (NOX2 / Phox)</strong>.
            </p>

            <p>
              A riposo, i componenti del complesso sono spazialmente separati:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
              <li>
                <strong>Sottocomplesso di Membrana (Citocromo b₅₅₈):</strong> Eterodimero transmembrana costituito da <strong>gp91phox</strong> (subunità catalitica β contenente FAD e due gruppi eme) e <strong>p22phox</strong> (subunità α).
              </li>
              <li>
                <strong>Sottocomplesso Citosolico:</strong> Formato da <strong>p47phox</strong> (adattatore fosforilabile da PKC), <strong>p67phox</strong> (attivatore catalitico) e <strong>p40phox</strong>, associati alla piccola GTPasi <strong>Rac2</strong>.
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive ROS Simulator Mounted Here */}
        <InteractiveRosSimulator />
      </section>

      {/* SECTION 3.4: MECCANISMI MOLECOLARI DELLA NETOSI */}
      <section id="sec-3-4" className="space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
          <div className="border-b border-slate-150 pb-4">
            <span className="text-xs font-mono font-bold tracking-wider text-rose-600 uppercase">
              Sezione 3.4
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Meccanismi Molecolari della NETosi e Trappole Extracellulari
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Dalla citrullinazione istonica PAD4-mediata alla formazione di reti di DNA antibatteriche e alle complicanze nell'autoimmunità.
            </p>
          </div>

          <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
            <p>
              Scoperta nel 2004 da Arturo Zychlinsky, la <strong>NETosi (Neutrophil Extracellular Trap formation)</strong> è una forma specializzata
              di morte cellulare programmata attiva o di risposta effettrice che consente al neutrofilo di estroflettere il proprio materiale genetico nucleare
              nell'ambiente interstiziale, intrappolando e distruggendo microrganismi extracellulari di grandi dimensioni.
            </p>

            <p>
              A differenza dell'apoptosi (che è immunologicamente silente) o della necrosi classica (disordinata), la NETosi è un processo biochimico strettamente controllato:
            </p>

            <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 text-xs text-purple-950 not-prose font-sans space-y-2">
              <span className="font-bold flex items-center gap-1.5 text-purple-900">
                <Sparkles className="w-4 h-4 text-purple-600" />
                Il Ruolo Cruciale di PAD4 (Peptidil-Arginina Deiminasi 4)
              </span>
              <p className="leading-relaxed">
                Il DNA genomico eucariotico è compattato in nucleosomi grazie alla forte attrazione elettrostatica tra le cariche negative dei gruppi fosfato del DNA
                e le cariche positive degli amminoacidi basici (<strong>arginina</strong> e lisina) degli istoni.
                L'enzima nucleare <strong>PAD4</strong>, attivato dall'aumento del calcio intracellulare, converte l'arginina in <strong>citrullina neutra</strong> (citrullinazione).
                Questa alterazione chimica dissolve i legami ionici, provocando lo srotolamento spontaneo e massivo dell'intera struttura cromatinica.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive NETosis Simulator Mounted Here */}
        <InteractiveNetosisSimulator />
      </section>

      {/* SECTION 3.5: FISIOPATOLOGIA CLINICA E DIAGNOSTICA */}
      <section id="sec-3-5" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-rose-600 uppercase">
            Sezione 3.5
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Fisiopatologia Clinica: CGD, LAD, Neutropenie e Farmacologia dei CSF
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Inquadramento delle immunodeficienze congenite dei fagociti, diagnostica di laboratorio e applicazioni cliniche di G-CSF ricombinante.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose font-sans">
            {/* Box CGD */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider font-mono">
                <ShieldAlert className="w-4 h-4" />
                Malattia Granulomatosa Cronica (CGD)
              </div>
              <h4 className="text-sm font-bold text-slate-900 mt-1">
                Deficit di NOX2 & Infezioni Catalasi-Positive
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Incidenza di circa 1:200.000 nati vivi. Nel 70% dei casi è legata al cromosoma X (mutazione di <em>CYBB</em> per gp91phox),
                mentre il restante 30% è autosomica recessiva (mutazioni in <em>NCF1</em> per p47phox, <em>CYBA</em> per p22phox).
                La mancata lisi dei patogeni intrappolati nel fagosoma induce il sistema immunitario a formare <strong>granulomi infiammatori cronici</strong>
                nel fegato, polmoni, linfonodi e tratto gastrointestinale.
              </p>
              <div className="mt-2.5 text-[11px] font-mono text-rose-800 bg-rose-50 p-2 rounded border border-rose-200">
                Patogeni tipici: <em>Staphylococcus aureus, Aspergillus, Serratia marcescens, Burkholderia cepacia, Nocardia</em>.
              </div>
            </div>

            {/* Box LAD */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider font-mono">
                <AlertCircle className="w-4 h-4" />
                Deficit di Adesione Leucocitaria (LAD-1 & LAD-2)
              </div>
              <h4 className="text-sm font-bold text-slate-900 mt-1">
                Incapacità di Reclutamento Tissutale & Infezioni Senza Pus
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                In <strong>LAD-1</strong> la mutazione del gene <em>ITGB2</em> (catena β₂ integrinica CD18) impedisce l'arresto saldato all'endotelio;
                i neutrofili non possono migrare nei tessuti infetti. Nei neonati si osserva un tipico <strong>ritardo nella caduta del cordone ombelicale (&gt;30 giorni)</strong>,
                omfalite e leucocitosi ematica estrema (&gt;50.000-100.000/μL) ma <strong>totale assenza di pus</strong> nelle lesioni infettive.
              </p>
              <div className="mt-2.5 text-[11px] font-mono text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
                In LAD-2 manca il trasportatore di fucosio (SLC35C1) con difetto di Sialil-Lewis X e mancato rolling iniziale su selectine.
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-6 not-prose font-sans">
            Terapia Sostitutiva e Mobilizzazione: G-CSF Ricombinante Umano
          </h3>
          <p>
            La neutropenia grave (conta assoluta di neutrofili, ANC &lt; 500/μL) espone il paziente a infezioni batteriche opportunistiche e sepsi fatali.
            L'introduzione in clinica del <strong>G-CSF ricombinante (Filgrastim, Lenograstim o la forma pegilata a rilascio prolungato Pegfilgrastim)</strong>
            ha rivoluzionato l'oncologia medica, dimezzando l'incidenza di neutropenia febbrile dopo chemioterapia citotossica mielosoppressiva.
            Inoltre, il G-CSF viene impiegato nei donatori sani di midollo per indurre la fuoriuscita e mobilizzazione delle cellule staminali CD34⁺
            dalle nicchie midollari al sangue periferico, consentendone la raccolta atraumatica mediante leucaferesi.
          </p>
        </div>
      </section>

      {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_LEZIONE_3} lessonNumber={3} title="Verifica dell'Apprendimento · Lezione 3" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS_LEZIONE_3} lessonNumber={3} title="Flashcard di Ripasso Attivo · Lezione 3" />
    </div>
  );
};
