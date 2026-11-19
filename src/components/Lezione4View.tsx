import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import React, { useState } from 'react';
import { InteractiveTlrPathwaySimulator } from './InteractiveTlrPathwaySimulator';
import { InteractiveInflammasomeSimulator } from './InteractiveInflammasomeSimulator';
import {
  TLR_TAXONOMY_DATA,
  INFLAMMASOME_CASCADE_STEPS,
  QUIZ_LEZIONE_4,
  FLASHCARDS_LEZIONE_4
} from '../data/lezione4Content';
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
  ShieldCheck,
  Zap,
  Filter
} from 'lucide-react';

interface Lezione4ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione4View: React.FC<Lezione4ViewProps> = ({ isSerif, fontSize }) => {
  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  const [tlrFilter, setTlrFilter] = useState<'ALL' | 'MEMBRANA' | 'ENDOSOMA'>('ALL');

  const filteredTlrs = TLR_TAXONOMY_DATA.filter((item) => {
    if (tlrFilter === 'ALL') return true;
    if (tlrFilter === 'MEMBRANA') return item.subcellularLocation.toLowerCase().includes('membrana') || item.subcellularLocation.toLowerCase().includes('plasmatica');
    if (tlrFilter === 'ENDOSOMA') return item.subcellularLocation.toLowerCase().includes('endosoma') || item.subcellularLocation.toLowerCase().includes('reticolo');
    return true;
  });

  return (
    <div className="space-y-12">
      {/* Chapter 4 Hero Block */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-mono">
                <span>Lezione 4</span>
                <span aria-hidden="true">·</span>
                <span>Prof.ssa Galandrini</span>
                <span aria-hidden="true">·</span>
                <span>Corso Ufficiale di Medicina e Chirurgia</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
                Lezione 4: Recettori dell&apos;Immunità Innata (PRR) e Inflammasoma NLRP3
              </h1>

              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                Dal riconoscimento chimico dei pattern molecolari associati ai patogeni (PAMPs) e al danno cellulare sterile (DAMPs)
                alla biologia dei Toll-Like Receptors (TLR1-10), recettori NOD citosolici, asse cGAS-STING e sensori RLR.
                Focus avanzato sul modello a Due Segnali dell&apos;inflammasoma NLRP3, attivazione della Caspasi-1,
                piroptosi mediata da Gasdermina D e target biologici (Anakinra, Canakinumab).
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-150 flex flex-wrap items-center gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-indigo-600" />
                <span>TLR1-10 & Cascata MyD88/TRIF</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-rose-600" />
                <span>Inflammasoma NLRP3 & ASC Speck</span>
              </div>
              <div className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-amber-600" />
                <span>Piroptosi GSDMD & CAPS / Gotta</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative bg-slate-950 min-h-[240px]">
            <img
              src={IMAGES.inflammasomePathway}
              onError={(e) => { e.currentTarget.src = '/images/inflammasome_nlrp3_pathway_1792323880438.jpg'; }}
              alt="Schema scientifico universitario dell'inflammasoma NLRP3, assemblaggio del disco proteico, priming NF-kB, piroptosi e pori di Gasdermina D"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-xs border border-slate-700/60">
                Tavola Didattica: Assemblaggio NLRP3 & Due Segnali
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4.1: ARCHITETTURA E TASSONOMIA DEI PRR */}
      <section id="sec-4-1" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 uppercase">
            Sezione 4.1
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Architettura e Tassonomia dei Pattern Recognition Receptors (PRRs)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Principi del riconoscimento molecolare innato, compartimentalizzazione subcellulare e struttura modulare dei Toll-Like Receptors.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            A differenza dei recettori clonotipici dell&apos;immunità adattativa (TCR e BCR), generati mediante ricombinazione
            somatica casuale <em>V(D)J</em>, i <strong>Pattern Recognition Receptors (PRRs)</strong> dell&apos;immunità innata sono
            codificati direttamente nella linea germinale (<em>germline-encoded</em>). Questa caratteristica evolutiva garantisce
            un&apos;immediata reattività senza ritardi proliferativi clonali, consentendo ai leucociti e agli epiteli di barriera
            di rilevare istantaneamente motivi molecolari conservati ed essenziali per la sopravvivenza dei microrganismi
            (<strong>PAMPs</strong>, <em>Pathogen-Associated Molecular Patterns</em>), nonché molecole endogene rilasciate da cellule
            in necrosi osmotica o stressate (<strong>DAMPs</strong>, <em>Damage-Associated Molecular Patterns</em> o allarmine).
          </p>

          <h3 className="text-base font-bold text-slate-900 mt-4 flex items-center gap-2">
            <Shield className="w-4 h-4 text-indigo-600" />
            Struttura Modulare dei Toll-Like Receptors (TLR)
          </h3>

          <p>
            I <strong>Toll-Like Receptors</strong> (scoperti inizialmente nella <em>Drosophila melanogaster</em> dal premio Nobel
            Jules Hoffmann e nell&apos;uomo da Charles Janeway e Bruce Beutler) sono glicoproteine transmembrana di tipo I caratterizzate
            da una rigida architettura a due compartimenti:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Ectodominio a ferro di cavallo (LRR):</strong> rivolto verso lo spazio extracellulare o verso il lume
              endosomiale, è costituito da 19-25 sequenze ripetute ricche in leucina (<em>Leucine-Rich Repeats</em>, lunghe 24-29 aminoacidi).
              Questa conformazione semicircolare crea una tasca concava altamente specializzata nell&apos;accogliere lipidi, proteine
              o doppi filamenti di acidi nucleici.
            </li>
            <li>
              <strong>Dominio Intracitoplasmatico TIR:</strong> omologo al dominio citoplasmatico del recettore dell&apos;Interleuchina-1
              (<em>Toll/IL-1 Receptor domain</em>, ~160 aminoacidi). Dopo il legame con il ligando, due monomeri di TLR si avvicinano,
              permettendo ai rispettivi domini TIR di associarsi e costituire una piattaforma di reclutamento per le proteine adattatrici
              citosoliche (MyD88, TRIF, TIRAP/Mal, TRAM).
            </li>
          </ul>

          {/* Interactive TLR Taxonomy Table */}
          <div className="mt-6 pt-4 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Microscope className="w-4 h-4 text-indigo-600" />
                  Atlante Comparativo dei TLR Umani (TLR1 - TLR10)
                </h4>
                <p className="text-xs text-slate-500">
                  Dati di localizzazione, partner di dimerizzazione, ligandi specifici e correlazioni cliniche.
                </p>
              </div>

              {/* Filter */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-semibold">
                <Filter className="w-3.5 h-3.5 text-slate-400 ml-1" />
                <button
                  onClick={() => setTlrFilter('ALL')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    tlrFilter === 'ALL' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Tutti (1-10)
                </button>
                <button
                  onClick={() => setTlrFilter('MEMBRANA')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    tlrFilter === 'MEMBRANA' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Membrana Plasmatica
                </button>
                <button
                  onClick={() => setTlrFilter('ENDOSOMA')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    tlrFilter === 'ENDOSOMA' ? 'bg-white text-purple-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Endosomiali (Acidi Nucleici)
                </button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Recettore</th>
                    <th className="p-3">Sede Subcellulare</th>
                    <th className="p-3">Ligando Primario & Fonte</th>
                    <th className="p-3">Adattatore</th>
                    <th className="p-3">Significato Clinico</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150">
                  {filteredTlrs.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3 font-bold text-slate-900 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                          <span>{item.receptor}</span>
                        </div>
                        <div className="text-[10px] text-slate-500 font-normal">{item.dimerization}</div>
                      </td>
                      <td className="p-3 text-slate-700">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium ${
                            item.subcellularLocation.includes('Membrana')
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : 'bg-purple-50 text-purple-700 border border-purple-200'
                          }`}
                        >
                          {item.subcellularLocation}
                        </span>
                      </td>
                      <td className="p-3 text-slate-800">
                        <div className="font-semibold text-slate-900">{item.primaryLigands.join(', ')}</div>
                        <div className="text-[11px] text-slate-500">{item.pathogenSource}</div>
                      </td>
                      <td className="p-3 font-mono font-bold text-slate-700 whitespace-nowrap">
                        <span
                          className={`px-2 py-0.5 rounded ${
                            item.adapterUsed === 'TRIF'
                              ? 'bg-cyan-100 text-cyan-800'
                              : item.adapterUsed === 'MyD88 & TRIF'
                              ? 'bg-indigo-100 text-indigo-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {item.adapterUsed}
                        </span>
                      </td>
                      <td className="p-3 text-slate-600 leading-snug">{item.clinicalRelevance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4.2: SEGNALAZIONE MYD88 VS TRIF */}
      <section id="sec-4-2" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
            Sezione 4.2
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Le Vie di Segnalazione Intracellulare: MyD88 vs TRIF a Confronto Diretto
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Dissezione biochimica della biforcazione tra risposta pro-infiammatoria pirogena e risposta antivirale mediata da Interferoni di Tipo I.
          </p>
        </div>

        <div className={`text-slate-800 space-y-5 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            A valle della dimerizzazione dei domini TIR citoplasmatici dei Toll-Like Receptors, la cascata trasduzionale
            si biforca rigidamente in due percorsi molecolari alternativi a seconda dell&apos;adattatore primario reclutato:
            la <strong>via MyD88-dipendente</strong> (attivata da tutti i TLR di superficie ed endosomiali, eccetto TLR3) e la
            <strong> via TRIF-dipendente</strong> (utilizzata in modo esclusivo da TLR3 e attivata da TLR4 in seguito ad endocitosi).
          </p>

          {/* Tavola Didattica Universitaria: Illustrazione Scientifica Comparativa ad Alta Definizione */}
          <div className="my-6 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="bg-slate-950 p-4 sm:p-6 flex items-center justify-center">
              <img
                src={IMAGES.tlrMyd88TrifPathway}
                onError={(e) => {
                  e.currentTarget.src = '/images/tlr_myd88_trif_pathway_1793614999882.jpg';
                }}
                alt="Tavola anatomica e biochimica delle due vie di segnalazione dei TLR a confronto: via MyD88-dipendente a sinistra e via TRIF-dipendente a destra"
                className="w-full max-h-[520px] object-contain rounded-xl shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5 sm:p-6 bg-slate-50/80 border-t border-slate-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-indigo-700 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  Tavola 4.1 · Schema Strutturale Comparato: Vie MyD88 vs TRIF
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  Risoluzione Molecolare: Recettori LRR · Domini TIR · Pori Nucleari
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-serif-body">
                <strong>Dissezione Topografica e Molecolare:</strong> A sinistra, il recettore <strong>TLR4</strong> sulla membrana
                plasmatica riconosce il lipopolisaccaride (LPS) complessato nella tasca di <strong>MD-2</strong>. L&apos;appaiamento dei
                domini citoplasmatici <strong>TIR</strong> recluta <strong>MyD88</strong> e, tramite il Death Domain, assembla il
                <em> Myddosoma</em> con le chinasi <strong>IRAK4</strong> e <strong>IRAK1</strong>. L&apos;ubiquitina ligasi <strong>TRAF6</strong> e la chinasi
                <strong> TAK1</strong> attivano il complesso <strong>IKK (IKKα/β/NEMO)</strong>, che fosforila <strong>IκBα</strong> avviandone
                la degradazione nel <strong>proteasoma 26S</strong>. Il dimero <strong>NF-κB (p50/p65)</strong> trasloca attraverso il poro nucleare
                per indurre citochine pro-infiammatorie (<strong>TNF-α, IL-1β, IL-6</strong>).
                <br className="my-1.5" />
                A destra, sulla membrana dell&apos;<strong>endosoma</strong>, <strong>TLR3</strong> (o TLR4 endocitato tramite <strong>TRAM</strong>)
                ingaggia l&apos;adattatore <strong>TRIF</strong>. TRIF recluta <strong>TRAF3</strong>, che attiva il complesso chinasico non-canonico
                <strong> TBK1</strong> e <strong>IKKε</strong>. Queste chinasi fosforilano il fattore citosolico <strong>IRF3</strong>, inducendone
                l&apos;omodimerizzazione e la traslocazione nucleare per la trascrizione selettiva di <strong>Interferone-β (IFN-β)</strong> e geni antivirali.
              </p>
            </div>
          </div>

          {/* Confronto Dettagliato in Box Affiancati */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            {/* Box MyD88 */}
            <div className="p-4 sm:p-5 rounded-xl bg-amber-50/80 border border-amber-200 space-y-2.5">
              <div className="font-bold text-amber-900 text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-600" />
                <span>Via MyD88-Dipendente (Flogosi Pirogena & Antibatterica)</span>
              </div>
              <ul className="text-xs text-amber-900/90 space-y-1.5 list-disc pl-4 font-serif-body">
                <li><strong>Recettori:</strong> TLR1, TLR2, TLR4 (membrana), TLR5, TLR6, TLR7, TLR8, TLR9.</li>
                <li><strong>Adattatore ponte:</strong> TIRAP / Mal (necessario per TLR2 e TLR4).</li>
                <li><strong>Complesso Iniziatore:</strong> <em>Myddosoma</em> (MyD88 oligomerizzato con IRAK4 e IRAK1 tramite Death Domains).</li>
                <li><strong>Effettore catalitico:</strong> TRAF6 (E3 ligasi K63) → TAK1 → IKKα/β/NEMO.</li>
                <li><strong>Regolatore & Freno:</strong> Fosforilazione di IκBα su Ser32/36 e digestione rapida nel Proteasoma 26S.</li>
                <li><strong>Fattore Trascrizionale:</strong> NF-κB (dimero p50/p65) + AP-1 (via MAPK).</li>
                <li><strong>Trascrizione Finale:</strong> TNF-α, IL-1β, IL-6, IL-12, CXCL8.</li>
              </ul>
            </div>

            {/* Box TRIF */}
            <div className="p-4 sm:p-5 rounded-xl bg-cyan-50/80 border border-cyan-200 space-y-2.5">
              <div className="font-bold text-cyan-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-600" />
                <span>Via TRIF-Dipendente (Immunità Antivirale & IFN Tipo I)</span>
              </div>
              <ul className="text-xs text-cyan-900/90 space-y-1.5 list-disc pl-4 font-serif-body">
                <li><strong>Recettori:</strong> TLR3 (in via esclusiva) e TLR4 (endosoma post-endocitosi).</li>
                <li><strong>Adattatore ponte:</strong> TRAM (TICAM-2, impiegato unicamente da TLR4).</li>
                <li><strong>Complesso Iniziatore:</strong> TRIF (TICAM-1) con domini di legame per TRAF3.</li>
                <li><strong>Effettore catalitico:</strong> TRAF3 → Chinasi atipiche TBK1 (TANK-binding kinase 1) e IKKε.</li>
                <li><strong>Regolatore & Freno:</strong> Fosforilazione diretta dei residui serinici C-terminali di IRF3.</li>
                <li><strong>Fattore Trascrizionale:</strong> Omodimero fosforilato IRF3 (e IRF7 nelle cellule dendritiche plasmacitoidi).</li>
                <li><strong>Trascrizione Finale:</strong> Interferone-β (IFN-β), CXCL10 (IP-10) e geni ISG.</li>
              </ul>
            </div>
          </div>

          {/* Tabella Sinottica Comparativa */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs my-4">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Parametro Molecolare</th>
                  <th className="p-3 text-amber-900 bg-amber-50/50">Via MyD88-Dipendente</th>
                  <th className="p-3 text-cyan-900 bg-cyan-50/50">Via TRIF-Dipendente</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-700">
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-semibold text-slate-900">Sede Subcellulare di Innesco</td>
                  <td className="p-3">Membrana Plasmatica (TLR1/2/4/5/6) o Endosomi (TLR7/8/9)</td>
                  <td className="p-3">Endosoma precoce/tardivo (TLR3 e TLR4 internalizzato)</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-semibold text-slate-900">Adattatore Primario (Dominio TIR)</td>
                  <td className="p-3 font-mono font-bold text-amber-700">MyD88 (+ TIRAP / Mal)</td>
                  <td className="p-3 font-mono font-bold text-cyan-700">TRIF (+ TRAM per TLR4)</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-semibold text-slate-900">Adattatore Ubiquitina-Ligasi</td>
                  <td className="p-3">TRAF6 (catene di poliubiquitina K63)</td>
                  <td className="p-3">TRAF3</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-semibold text-slate-900">Complesso Chinasico Cardine</td>
                  <td className="p-3">IRAK4 → IRAK1 → TAK1 → IKKα / IKKβ / NEMO</td>
                  <td className="p-3">TBK1 (TANK-Binding Kinase 1) &amp; IKKε</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-semibold text-slate-900">Destino dell&apos;Inibitore / Proteolisi</td>
                  <td className="p-3">Fosforilazione e degradazione di IκBα nel Proteasoma 26S</td>
                  <td className="p-3">Nessuna proteolisi: attivazione diretta per fosforilazione di IRF3</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-semibold text-slate-900">Fattore di Trascrizione Effettore</td>
                  <td className="p-3 font-bold text-slate-900">NF-κB (dimero p50/p65)</td>
                  <td className="p-3 font-bold text-slate-900">IRF3 (omodimero fosforilato)</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-semibold text-slate-900">Firma Citochinica Secreta</td>
                  <td className="p-3 text-amber-800 font-semibold">TNF-α, IL-1β, IL-6, IL-12, CXCL8</td>
                  <td className="p-3 text-cyan-800 font-semibold">Interferone-β (IFN-β), CXCL10 (IP-10)</td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="p-3 font-semibold text-slate-900">Fenotipo Clinico da Deficit Congenito</td>
                  <td className="p-3 text-rose-700">
                    Deficit di IRAK4 / MyD88: infezioni piogene invasive recidivanti (Pneumococco), ma <em>assenza paradossa di febbre</em>
                  </td>
                  <td className="p-3 text-indigo-700">
                    Deficit di TLR3 / TRIF: encefalite erpetica devastante (HSE da HSV-1) per difetto di produzione di IFN-β nel SNC
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Interactive TLR Simulator Mount con grafica comparativa parallela */}
          <div className="pt-2">
            <InteractiveTlrPathwaySimulator />
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 leading-relaxed font-serif-body">
              <strong className="text-slate-900">Perla Clinica: Il complesso TLR4/MD-2 e lo Shock Settico Endotossinico</strong><br />
              L&apos;endotossina batterica (LPS) non si lega direttamente a TLR4. Nel siero, viene legata dalla proteina <strong>LBP</strong>,
              che la trasferisce al recettore GPI di superficie <strong>CD14</strong>. CD14 la consegna alla tasca idrofobica profonda
              della proteina <strong>MD-2</strong>, complessata in modo stabile con l&apos;ectodominio di TLR4. La dimerizzazione dei due
              complessi TLR4/MD-2 scatena un&apos;attivazione simultanea sia della via di membrana (MyD88) che di quella endosomiale (TRIF),
              inducendo la proverbiale &quot;tempesta citochinica&quot; (TNF-α, IL-1β, ossido nitrico) responsabile della vasodilatazione refrattaria,
              ipotensione e CID tipiche dello shock settico da Gram-negativi.
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 4.3: RECETTORI CITOSOLICI: NLR, RLR E CGAS-STING */}
      <section id="sec-4-3" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-purple-600 uppercase">
            Sezione 4.3
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Sensori Intracellulari Citosolici: NLR, RLR e l&apos;Asse cGAS-STING
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Sorveglianza immunitaria del compartimento citoplasmatico: peptidoglicano, RNA virale e dsDNA ectopico.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Poiché numerosi patogeni virali e batteri intracellulari invasivi (come <em>Listeria monocytogenes</em>,
            <em>Shigella</em> e <em>Mycobacterium tuberculosis</em>) eludono la sorveglianza dei TLR penetrando direttamente nel citosol,
            la cellula eucariotica possiede tre sofisticate famiglie di sensori citoplasmatici:
          </p>

          <div className="space-y-4">
            {/* NLR Box */}
            <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/40">
              <h3 className="font-bold text-purple-950 text-sm flex items-center gap-2">
                <Dna className="w-4 h-4 text-purple-600" />
                1. Nod-Like Receptors (NLR): NOD1 e NOD2
              </h3>
              <p className="mt-1 text-xs text-purple-900 leading-relaxed">
                Contengono un dominio LRR C-terminale sensore, un dominio centrale NACHT (con attività ATPasica oligomerizzante)
                e uno o due domini CARD N-terminali. <strong>NOD1</strong> rileva il frammento batterico acido γ-D-glutamil-meso-diaminopimelico
                (iE-DAP), esclusivo dei Gram-negativi. <strong>NOD2</strong> riconosce invece il muramil-dipeptide (MDP), componente
                comune a tutti i peptidoglicani batterici. A valle del legame con MDP, NOD2 recluta la chinasi <strong>RIPK2</strong> (RICK),
                attivando la via NF-κB e stimolando la produzione di peptidi antimicrobici (α- e β-defensine) nelle cellule di Paneth ileali.
              </p>
              <div className="mt-2.5 p-2.5 rounded-lg bg-white/80 border border-purple-200 text-xs text-purple-950">
                <strong>Correlazione Clinica: Morbo di Crohn e Mutazioni di NOD2/CARD15</strong><br />
                Polimorfismi con perdita di funzione nel gene <em>NOD2</em> (in particolare la mutazione frameshift 3020insC / 1007fs)
                sono il principale fattore di rischio genetico per la Malattia di Crohn a localizzazione ileale. Il mancato riconoscimento
                fisiologico di MDP riduce la secrezione di defensine, provocando un&apos;anomala penetrazione della flora commensale nella
                lamina propria e una cronica infiammazione granulomatosa transmurale.
              </div>
            </div>

            {/* RLR Box */}
            <div className="p-4 rounded-xl border border-cyan-200 bg-cyan-50/40">
              <h3 className="font-bold text-cyan-950 text-sm flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-600" />
                2. RIG-I-Like Receptors (RLR): RIG-I e MDA5
              </h3>
              <p className="mt-1 text-xs text-cyan-900 leading-relaxed">
                Elicasi a RNA citosoliche dotate di due domini CARD N-terminali. <strong>RIG-I</strong> distingue l&apos;RNA genomico virale
                da quello dell&apos;ospite riconoscendo estremità 5&apos;-trifosfato o 5&apos;-difosfato non cappate (assenti nell&apos;RNA maturo eucariotico).
                <strong>MDA5</strong> riconosce lunghi filamenti doppi di dsRNA (&gt;1000 bp). Entrambi si associano alla proteina adattatrice
                mitocondriale <strong>MAVS</strong> (<em>Mitochondrial Antiviral Signaling protein</em>), la quale forma aggregati prion-like
                sulla membrana esterna del mitocondrio scatenando la sintesi esplosiva di Interferoni di Tipo I.
              </p>
            </div>

            {/* cGAS-STING Box */}
            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40">
              <h3 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                3. Sensori di DNA Citosolico: L&apos;Asse cGAS - STING
              </h3>
              <p className="mt-1 text-xs text-emerald-900 leading-relaxed">
                In condizioni fisiologiche, il DNA a doppio filamento è rigorosamente confinato nel nucleo o nella matrice mitocondriale.
                La presenza di dsDNA nel citosol costituisce un potente segnale di allarme (infezione da virus a DNA come HSV o retrovirus,
                oppure rottura dell&apos;involucro nucleare in cellule tumorali). L&apos;enzima citosolico <strong>cGAS</strong> (<em>cyclic GMP-AMP Synthase</em>)
                si lega al dsDNA e sintetizza il secondo messaggero insolito <strong>2&apos;3&apos;-cGAMP</strong>.
                Il cGAMP si lega alla proteina <strong>STING</strong> (<em>Stimulator of Interferon Genes</em>) situata sul reticolo endoplasmatico,
                inducendone la traslocazione al Golgi dove recluta TBK1 e attiva IRF3, con produzione di IFN-β.
              </p>
              <div className="mt-2.5 p-2.5 rounded-lg bg-white/80 border border-emerald-200 text-xs text-emerald-950">
                <strong>Clinica: Sindrome SAVI (STING-Associated Vasculopathy with onset in Infancy)</strong><br />
                Mutazioni gain-of-function in <em>STING1</em> determinano un&apos;interferinopatia congenita autoinfiammatoria con vasculite
                microvascolare cutanea distale (necrosi delle dita), febbri ricorrenti e interstiziopatia polmonare fibrosante grave.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4.4: L'INFLAMMASOMA NLRP3 E LA PIROPTOSI VIA GASDERMINA D */}
      <section id="sec-4-4" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-rose-600 uppercase">
            Sezione 4.4
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            L&apos;Inflammasoma NLRP3: Modello a Due Segnali e Piroptosi via Gasdermina D
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Biochimica dell&apos;oligomerizzazione a ruota, autoclivaggio della Caspasi-1 e lisi cellulare litica programmata.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            L&apos;<strong>inflammasoma NLRP3</strong> (noto anche come criopirina o NALP3) è una straordinaria macchina macromolecolare
            intracellulare citosolica la cui funzione cardinale è processare proteoliticamente i precursori inattivi di citochine
            febbricitanti altamente infiammatorie: <strong>pro-IL-1β</strong> (31 kDa) e <strong>pro-IL-18</strong> (24 kDa).
            A causa dell&apos;immensa potenza pirogenica e distruttiva di IL-1β, la sua produzione è subordinata a un rigoroso
            <strong>modello a Due Segnali</strong> sequenziali:
          </p>

          {/* Stepper Table / Cards of 4 phases */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            {INFLAMMASOME_CASCADE_STEPS.map((step, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-rose-600">
                  <span>{step.phase}</span>
                  <span className="text-slate-400">Fase {idx + 1}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                <div className="pt-2 border-t border-slate-200/80 flex flex-wrap gap-1">
                  {step.molecules.map((m, mIdx) => (
                    <span key={mIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white border border-slate-200 text-slate-700">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-base font-bold text-slate-900 mt-6 flex items-center gap-2">
            <Flame className="w-4 h-4 text-rose-600" />
            Meccanismo della Piroptosi Mediata da Gasdermina D (GSDMD)
          </h3>

          <p>
            La scoperta della <strong>Gasdermina D</strong> da parte del laboratorio di Feng Shao e Vishva Dixit ha rivoluzionato
            la comprensione della morte cellulare programmata. La Caspasi-1 attiva non si limita al clivaggio di pro-IL-1β e pro-IL-18,
            ma esegue un taglio proteolitico selettivo sul residuo Asp275 della proteina citosolica Gasdermina D (53 kDa).
            Questo taglio rimuove il dominio C-terminale (GSDMD-C), il quale in condizioni basali esercita un&apos;autoinibizione
            sterica sul frammento N-terminale.
          </p>

          <p>
            Una volta liberato, il dominio <strong>GSDMD-N</strong> (31 kDa) espone superfici idrofobiche cariche positivamente
            che si legano con altissima affinità ai lipidi acidi del foglietto interno della membrana plasmatica (fosfatidilinositolo
            4,5-bisfosfato, PIP2, e fosfatidilserina). Da 16 a 28 monomeri di GSDMD-N oligomerizzano formando un anello ad anfora
            con un poro idrofilico transmembrana stabile di <strong>10-14 nm di diametro interno</strong>.
          </p>

          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-950 space-y-2">
            <div className="font-bold flex items-center gap-2 text-rose-900 text-sm">
              <Flame className="w-4 h-4 text-rose-600" />
              Conseguenze Biofisiche del Poro di Gasdermina D
            </div>
            <ul className="list-disc pl-5 space-y-1 leading-relaxed text-rose-900">
              <li>
                <strong>Fuoriuscita Selettiva delle Citochine:</strong> IL-1β matura (diametro idrodinamico ~4.5 nm) e IL-18 passano
                liberamente attraverso il poro di 10-14 nm prima ancora della rottura della membrana cellulare.
              </li>
              <li>
                <strong>Collasso del Gradiente Osmotico:</strong> Ingresso massivo di acqua e sodio con rapido rigonfiamento cellulare,
                formazione di grandi bleb sferici e lisi osmotica terminale (<em>Piroptosi</em>).
              </li>
              <li>
                <strong>Rilascio Violento di DAMPs:</strong> Rilascio nel microambiente di LDH intracellulare, ATP, HMGB1, proteine S100
                e filamenti intatti di <em>ASC speck</em>, che persistono nei tessuti amplificando l&apos;infiammazione all&apos;esterno.
              </li>
            </ul>
          </div>

          {/* Simulatore Dinamico NLRP3, Caspasi-1 e Gasdermina D (Stile Atlante Interattivo) */}
          <div className="pt-2">
            <InteractiveInflammasomeSimulator />
          </div>
        </div>
      </section>

      {/* SECTION 4.5: CORRELAZIONI CLINICHE E FARMACOLOGIA TRASLAZIONALE */}
      <section id="sec-4-5" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-600 uppercase">
            Sezione 4.5
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Correlazioni Cliniche: CAPS, Gotta e Terapie Biologiche Mirate
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Dalla genetica molecolare delle criopirinopatie al blocco farmacologico di precisione dell&apos;asse IL-1 / NLRP3.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Box CAPS */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-rose-600" />
                <span>Criopirinopatie Ereditarie (CAPS)</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Spettro di malattie autoinfiammatorie monogeniche a trasmissione autosomica dominante causate da mutazioni gain-of-function
                nel gene <em>NLRP3</em> (<em>CIAS1</em>, cromosoma 1q44). Il dominio NACHT mutato assume una conformazione aperta spontanea
                indipendente dall&apos;efflusso di K+:
              </p>
              <ul className="text-xs list-disc pl-5 space-y-1 text-slate-700">
                <li><strong>FCAS:</strong> orticaria neutrofila da freddo, artralgie e febbre dopo esposizione alle basse temperature.</li>
                <li><strong>Sindrome di Muckle-Wells (MWS):</strong> febbri ricorrenti, orticaria persistente, sordità neurosensoriale progressiva e grave amiloidosi sistemica da amiloide AA (insufficienza renale terminale).</li>
                <li><strong>NOMID/CINCA:</strong> forma neonatale gravissima con artropatia deformante, meningite cronica asettica e dismorfismi craniofacciali.</li>
              </ul>
            </div>

            {/* Box Gotta Acuta */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-600" />
                <span>Artrite Gottosa Acuta e Cristallopatie</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                I cristalli aghiformi di <strong>urato monosodico (MSU)</strong> precipitano nel liquido sinoviale (spesso della prima
                articolazione metatarso-falangea, <em>podagra</em>). I macrofagi residenti fagocitano i cristalli ma non riescono
                a digerirli (<em>fagocitosi frustrata</em>):
              </p>
              <ul className="text-xs list-disc pl-5 space-y-1 text-slate-700">
                <li>I cristalli aguzzi lacerano la membrana del fagolisosoma, provocando la fuoriuscita di <strong>Catepsina B</strong> nel citosol.</li>
                <li>La lesione induce efflusso massivo di K+ e stress mitocondriale con produzione di ROS, assemblando l&apos;inflammasoma NLRP3.</li>
                <li>L&apos;esplosione locale di IL-1β recluta ondate massive di neutrofili che provocano il dolore parossistico, calore, edema ed eritema infiammatorio acuto.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-base font-bold text-slate-900 mt-6 flex items-center gap-2">
            <Pill className="w-4 h-4 text-emerald-600" />
            Terapie Biologiche di Precisione Contro l&apos;Asse IL-1 / Inflammasoma
          </h3>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3">Farmaco</th>
                  <th className="p-3">Natura Molecolare</th>
                  <th className="p-3">Bersaglio / Meccanismo</th>
                  <th className="p-3">Indicazioni Cliniche Approvate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150">
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3 font-bold text-emerald-950">Anakinra (Kineret)</td>
                  <td className="p-3 text-slate-600">Forma ricombinante non glicosilata di IL-1Ra umano (antagonista recettoriale)</td>
                  <td className="p-3 text-slate-700">Si lega competitivamente al recettore IL-1R1, impedendo l&apos;aggancio sia di IL-1α che di IL-1β</td>
                  <td className="p-3 text-slate-700">Sindrome di Muckle-Wells/CAPS, Still dell&apos;adulto, pericardite ricorrente refrattaria, gotta acuta resistente ai FANS</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3 font-bold text-emerald-950">Canakinumab (Ilaris)</td>
                  <td className="p-3 text-slate-600">Anticorpo monoclonale umano intero IgG1κ selettivo</td>
                  <td className="p-3 text-slate-700">Lega con altissima affinità e neutralizza selettivamente IL-1β circolante (emivita prolungata ~26 giorni)</td>
                  <td className="p-3 text-slate-700">Tutte le forme di CAPS, Febbre Familiare Mediterranea (FMF), Artrite Idiopatica Giovanile sistemica (sJIA), gotta cronica</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3 font-bold text-emerald-950">Rilonacept (Arcalyst)</td>
                  <td className="p-3 text-slate-600">Proteina di fusione solubile dimero extracellulare IL-1R1 / IL-1RAcP / Fc IgG1 (&quot;IL-1 Trap&quot;)</td>
                  <td className="p-3 text-slate-700">Agisce come trappola decodificante legando IL-1α e IL-1β prima che raggiungano la cellula</td>
                  <td className="p-3 text-slate-700">CAPS (FCAS e MWS), pericardite ricorrente recidivante</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3 font-bold text-indigo-950">Colchicina</td>
                  <td className="p-3 text-slate-600">Alcaloide estratto dal <em>Colchicum autumnale</em></td>
                  <td className="p-3 text-slate-700">Lega la tubulina e blocca la polimerizzazione dei microtubuli, impedendo la migrazione e l&apos;assemblaggio dei filamenti ASC speck</td>
                  <td className="p-3 text-slate-700">Trattamento e profilassi degli attacchi acuti di gotta; prevenzione dell&apos;amiloidosi nella FMF</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3 font-bold text-purple-950">MCC950 & Dapansutrile</td>
                  <td className="p-3 text-slate-600">Piccole molecole chimiche orali di sintesi</td>
                  <td className="p-3 text-slate-700">Inibizione selettiva diretta del dominio NACHT di NLRP3; bloccano l&apos;idrolisi di ATP senza alterare NLRC4 o AIM2</td>
                  <td className="p-3 text-slate-700">In fase clinica avanzata per cardiopatia ischemica (post-infarto), steatoepatite (MASH) e neuroinfiammazione (Alzheimer)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_LEZIONE_4} lessonNumber={4} title="Verifica dell'Apprendimento · Lezione 4" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS_LEZIONE_4} lessonNumber={4} title="Flashcard di Ripasso Attivo · Lezione 4" />
    </div>
  );
};
