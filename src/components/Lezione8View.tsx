import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import React, { useState } from 'react';
import { InteractiveMhcPocketSimulator } from './InteractiveMhcPocketSimulator';
import { InteractiveHlaInheritanceSimulator } from './InteractiveHlaInheritanceSimulator';
import {
  MHC_COMPARISON_DATA,
  HLA_DISEASE_ASSOCIATIONS_DATA,
  QUIZ_LEZIONE_8,
  FLASHCARDS_LEZIONE_8
} from '../data/lezione8Content';
import { ConceptMapFlow } from './ConceptMapFlow';
import { MAP_LEZIONE_8_MHC_COMPARISON, MAP_LEZIONE_8_HLA_GENETICS } from '../data/conceptMapsData';
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
  Users,
  Heart,
  HelpCircle
} from 'lucide-react';

interface Lezione8ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione8View: React.FC<Lezione8ViewProps> = ({ isSerif, fontSize }) => {
  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  return (
    <div className="space-y-12">
      {/* Chapter 8 Hero Block */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-mono">
            <span>Lezione 8 (Sbobina Ufficiale I e II Ora)</span>
            <span aria-hidden="true">·</span>
            <span>Prof.ssa Rosa Molfetta</span>
            <span aria-hidden="true">·</span>
            <span>8 e 16 Ottobre 2025</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Lezione 8: MHC di Classe I e II: Architettura Molecolare, Genetica HLA e Presentazione Antigenica
          </h1>

          <p className="mt-3 text-slate-600 text-sm leading-relaxed max-w-4xl">
            Il Complesso Maggiore di Istocompatibilità (MHC / HLA): dalle basi storiche del rigetto nei trapianti d&apos;organo
            alla biologia strutturale della tasca peptidica (foglietti β antiparalleli e α-eliche anfipatiche).
            Confronto molecolare tra MHC-I (catena α e β2-microglobulina, peptidi 8-10 aa) e MHC-II (eterodimero α/β, peptidi 13-18 aa).
            Analisi genetica del locus HLA su cromosoma 6p21: poligenia, polimorfismo estremo e codominanza di espressione.
            Il concetto di legame promiscuo e la stabilità del trimero sulla membrana.
            Il vantaggio evolutivo dell&apos;eterozigosi, i segnali olfattivi nella selezione sessuale umana e nei topi (studio delle T-shirt sudate),
            la restrizione funzionale dei corecettori CD4 e CD8, la compartimentalizzazione intracellulare (citosolica vs vescicolare)
            e le associazioni con patologie autoimmuni (HLA-B27, celiachia e neuroinfiammazione microgliale).
          </p>

          <div className="mt-6 pt-5 border-t border-slate-150 flex flex-wrap items-center gap-6 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Tasca Peptidica & Residui Àncora</span>
            </div>
            <div className="flex items-center gap-2">
              <Dna className="w-4 h-4 text-purple-600" />
              <span>Poligenia, Codominanza & Aplotipi</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Corecettori CD4/CD8 & Compartimenti</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 8.1: TCR VS ANTICORPI & IMMUNODOMINANZA */}
      <section id="sec-8-1" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
            Sezione 8.1
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Riconoscimento Antigenico: TCR vs Anticorpi, Restrizione MHC & Immunodominanza
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Epitopi conformazionali 3D nativi vs peptidi lineari processati presentati su molecole MHC.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Come introdotto in aula dalla Professoressa Molfetta, il sistema immunitario adotta due strategie di riconoscimento
            antigenico radicalmente distinte:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-blue-600">Linfociti B & Anticorpi</span>
              <h4 className="font-bold text-slate-900 text-sm">Riconoscimento Nativo Tridimensionale</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Gli anticorpi e il BCR riconoscono gli antigeni nella loro <strong>struttura tridimensionale nativa</strong>,
                indipendentemente dalla loro natura chimica (proteine, polisaccaridi, lipidi, acidi nucleici o piccoli apteni).
                Gli epitopi possono essere <em>conformazionali</em> (discontinui nello spazio) o lineari esposti sulla superficie.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-purple-600">Linfociti T & TCR</span>
              <h4 className="font-bold text-slate-900 text-sm">Restrizione MHC per Peptidi Lineari</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                I linfociti T riconoscono <strong>esclusivamente antigeni proteici degradati</strong> in piccoli frammenti peptidici lineari,
                esposti sulla superficie cellulare associati alle molecole del <strong>Complesso Maggiore di Istocompatibilità (MHC)</strong>.
                Il TCR riconosce epitopi che nella proteina nativa terziaria o quaternaria risultano nascosti all&apos;interno del core idrofobico.
              </p>
            </div>
          </div>

          <h3 className="text-base font-bold text-slate-900 mt-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Il Concetto di Immunodominanza degli Epitopi
          </h3>

          <p>
            Quando una proteina estranea viene degradata proteoliticamente all&apos;interno della cellula, essa dà origine a decine di peptidi differenti.
            Tuttavia, non tutti i peptidi generati vengono presentati con la stessa efficienza né sono capaci di stimolare una risposta T:
            si definiscono <strong>epitopi immunodominanti</strong> quei peptidi che possiedono la sequenza di residui àncora chimicamente
            più favorevole per legare con alta affinità le tasche delle molecole MHC espresse da quell&apos;individuo.
            Di conseguenza, una proteina complessa stimola la proliferazione clonale solo verso una ristretta frazione dei suoi frammenti teorici.
          </p>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 space-y-2">
            <div className="font-bold flex items-center gap-2 text-blue-900 text-sm">
              <Info className="w-4 h-4 text-blue-600" />
              Il Complesso Trimerico TCR:pMHC
            </div>
            <p className="leading-relaxed">
              Il TCR riconosce contemporaneamente <strong>sia il peptide non-self sia la molecola MHC self</strong>,
              formando un complesso trimerico inscindibile.
              Se lo stesso identico peptide viene presentato da una molecola MHC diversa (allotipo differente),
              o se la stessa molecola MHC presenta un peptide diverso, il TCR non è in grado di legarsi!
              Questa doppia specificità prende il nome di <strong>restrizione MHC</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8.2: ARCHITETTURA 3D CLASSE I VS CLASSE II */}
      <section id="sec-8-2" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-purple-600 uppercase">
            Sezione 8.2
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Architettura Molecolare e Biologia Strutturale: MHC-I vs MHC-II
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Composizione polipeptidica, ruolo della β2-microglobulina, domini immunoglobulinici e tasca di legame.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Sebbene entrambe le classi presentino una conformazione terziaria e tridimensionale fortemente sovrapponibile,
            la loro organizzazione polipeptidica e la derivazione genica sono sostanzialmente distinte:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/60 space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-blue-950 text-sm">MHC di Classe I</h4>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-200 text-blue-800">
                  Monocatenaria + β2M
                </span>
              </div>
              <ul className="text-xs text-blue-900 space-y-1.5 list-disc pl-4">
                <li>
                  <strong>Catena Pesante α (44-47 kDa):</strong> glicoproteina transmembrana polimorfa codificata nel locus HLA (cromosoma 6),
                  suddivisa in tre domini extracellulari (α1, α2 e α3), un segmento transmembrana idrofobico e una coda citoplasmatica.
                </li>
                <li>
                  <strong>Tasca di Legame Peptidica:</strong> costituita esclusivamente dai domini α1 e α2 della catena pesante,
                  che si ripiegano insieme formando una cavità chiusa alle estremità.
                </li>
                <li>
                  <strong>β2-Microglobulina (12 kDa):</strong> piccola proteina non transmembrana codificata sul cromosoma 15.
                  È invariante e priva di polimorfismo in tutta la specie umana; si associa non-covalentemente al dominio α3
                  ed è tassativa per la stabilizzazione conformazionale e il trasporto in membrana dell&apos;MHC-I.
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/60 space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-emerald-950 text-sm">MHC di Classe II</h4>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-200 text-emerald-800">
                  Eterodimero α + β
                </span>
              </div>
              <ul className="text-xs text-emerald-900 space-y-1.5 list-disc pl-4">
                <li>
                  <strong>Due Catene Polipeptidiche Distinte:</strong> catena α (32-34 kDa, con domini α1 e α2) e catena β (29-32 kDa, con domini β1 e β2).
                  Entrambe attraversano la membrana plasmatica con una propria elica transmembrana e coda citosolica.
                </li>
                <li>
                  <strong>Entrambe codificate nel locus HLA:</strong> sia i geni della catena α sia i geni della catena β risiedono nel cromosoma 6 (regioni HLA-DP, HLA-DQ, HLA-DR).
                </li>
                <li>
                  <strong>Tasca di Legame Peptidica Eterodimerica:</strong> formata dal contributo congiunto del dominio α1 (catena α) e del dominio β1 (catena β).
                  Le due estremità sono aperte, permettendo al peptide di sporgere.
                </li>
              </ul>
            </div>
          </div>

          {/* Detailed Synoptic Table */}
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <thead className="bg-slate-100 text-slate-800 font-mono text-[11px] uppercase">
                <tr>
                  <th className="p-3 border-b border-slate-200">Parametro Strutturale & Funzionale</th>
                  <th className="p-3 border-b border-slate-200 text-blue-700">MHC di Classe I</th>
                  <th className="p-3 border-b border-slate-200 text-emerald-700">MHC di Classe II</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                {MHC_COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-semibold text-slate-900 font-mono text-[11px]">{row.feature}</td>
                    <td className="p-3">{row.mhcClassI}</td>
                    <td className="p-3">{row.mhcClassII}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mappa Concettuale di Fine Paragrafo: Confronto MHC-I vs MHC-II */}
          <ConceptMapFlow {...MAP_LEZIONE_8_MHC_COMPARISON} />
        </div>
      </section>

      {/* SECTION 8.3: GEOMETRIA DELLA TASCA PEPTIDICA & SIMULATORE 3D */}
      <section id="sec-8-3" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 uppercase">
            Sezione 8.3
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Geometria della Tasca Peptidica, Residui Àncora e Dinamica di Legame
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Pavimento di foglietti β, α-eliche laterali e vincoli sterici (tasca chiusa vs tasca aperta).
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            La cristallografia ai raggi X ha rivelato che la tasca di legame peptidica presenta in entrambe le classi
            una straordinaria omologia tridimensionale:
            è costituita da un <strong>pavimento piatto di 8 filamenti a foglietto β antiparalleli</strong>, delimitato lateralmente
            da <strong>due α-eliche anfipatiche parallele</strong>.
            All&apos;interno di questa fessura alloggia il peptide antigenico.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                La Tasca Chiusa di MHC-I (8-10 aa)
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                I domini α1 e α2 appartengono allo stesso polipeptide e chiudono fisicamente entrambe le estremità della tasca.
                Il peptide deve avere una lunghezza rigida di <strong>8-10 aminoacidi</strong> (ottimale 9 aa).
                Le sue estremità N- e C-terminale sono vincolate nelle tasche profonde A ed F.
                I <strong>residui àncora</strong> sono tipicamente l&apos;aminoacido in posizione 2 (P2, idrofobico o basico)
                e l&apos;aminoacido C-terminale (P9, idrofobico o aromatico, come leucina, isoleucina o valina).
                Poiché le estremità sono rigidamente bloccate, <strong>la porzione centrale del peptide (P4-P6) si inarca verso l&apos;alto</strong>,
                sporgendo dalla cavità per interagire direttamente con le anse ipervariabili CDR3 del TCR!
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-600" />
                La Tasca Aperta di MHC-II (13-18 aa)
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Essendo formata dalla giustapposizione di due proteine diverse (dominio α1 della catena α e dominio β1 della catena β),
                la fessura risulta <strong>aperta ad entrambi i lati</strong>.
                Il peptide si adagia come un salsicciotto in un panino hot-dog: alloggia peptidi più lunghi di <strong>13-18 aminoacidi</strong>,
                le cui estremità sporgono liberamente oltre i margini della tasca.
                I residui àncora non sono localizzati ai capi terminali, ma sono distribuiti internamente lungo la sequenza (P1, P4, P6, P9).
                Durante la processazione, l&apos;MHC-II può legare inizialmente peptidi fino a 30 aa che vengono poi rifiniti da peptidasi prima dell&apos;esportazione in membrana.
              </p>
            </div>
          </div>

          {/* Mount MHC Pocket 3D Simulator */}
          <div className="pt-2">
            <InteractiveMhcPocketSimulator />
          </div>
        </div>
      </section>

      {/* SECTION 8.4: GENETICA HLA: POLIGENIA, POLIMORFISMO E CODOMINANZA */}
      <section id="sec-8-4" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-purple-600 uppercase">
            Sezione 8.4
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Genetica del Locus HLA: Poligenia, Polimorfismo Estremo e Codominanza
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Cromosoma 6p21, eredità in aplotipo, linkage disequilibrium e calcolo combinatorio delle molecole espresse.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-950 space-y-2">
            <div className="font-bold flex items-center gap-2 text-purple-900 text-sm">
              <Dna className="w-4 h-4 text-purple-600" />
              Concetto Fondamentale: Variabilità Somatica (TCR/BCR) vs Variabilità Germinale (MHC)
            </div>
            <p className="leading-relaxed">
              La Professoressa Molfetta ha posto grande enfasi su questa distinzione chiave:
              per i recettori dei linfociti B e T (BCR e TCR), ogni individuo eredita esattamente gli stessi geni germinali;
              la variabilità è <strong>somatica, intra-individuale e clonale</strong>, generata dal riarrangiamento casuale V(D)J all&apos;interno di ogni singola cellula.
              Per le molecole MHC la situazione è opposta: la sequenza non viene mai riarrangiata somaticamente;
              la diversità è <strong>germinale e di popolazione</strong>: all&apos;interno della specie umana esistono migliaia di alleli diversi,
              e ogni individuo ne eredita un set fisso dai genitori che rimane immutato in tutte le cellule del corpo.
            </p>
          </div>

          <p>
            L&apos;incredibile grado di variabilità delle molecole MHC da un individuo all&apos;altro è determinato dalla combinazione di tre caratteristiche genetiche uniche:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-3">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-blue-600">1. Poligenia</span>
              <h4 className="font-bold text-slate-900 text-sm">Molteplici Geni Distinti</h4>
              <p className="text-xs text-slate-600 leading-snug">
                Nel braccio corto del cromosoma 6 (regione 6p21.3) risiedono molteplici geni indipendenti:
                per la Classe I i geni <strong>HLA-A, HLA-B e HLA-C</strong>;
                per la Classe II le regioni geniche <strong>HLA-DP, HLA-DQ e HLA-DR</strong> (oltre a geni di Classe III per TNF e complemento C2, C4, Fattore B).
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-purple-600">2. Polimorfismo Estremo</span>
              <h4 className="font-bold text-slate-900 text-sm">I Geni Più Variabili del Genoma</h4>
              <p className="text-xs text-slate-600 leading-snug">
                I geni HLA sono i più polimorfi di tutta la biologia umana: esistono migliaia di varianti alleliche nella popolazione.
                Le mutazioni non sono distribuite a caso lungo il gene, ma sono <strong>strettamente concentrate nei nucleotidi che codificano per la tasca peptidica</strong> (domini α1/α2 in MHC-I e β1 in MHC-II).
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-600">3. Codominanza Piena</span>
              <h4 className="font-bold text-slate-900 text-sm">Nessuna Recessività</h4>
              <p className="text-xs text-slate-600 leading-snug">
                A differenza della genetica mendeliana classica in cui l&apos;allele dominante silenzia il recessivo,
                nei geni HLA <strong>tutti gli alleli ereditati (sia materni che paterni) vengono tradotti ed espressi contemporaneamente</strong> sulla membrana cellulare.
              </p>
            </div>
          </div>

          <h3 className="text-base font-bold text-slate-900 mt-4 flex items-center gap-2">
            <Users className="w-4 h-4 text-indigo-600" />
            Eredità in Aplotipo e Linkage Disequilibrium
          </h3>

          <p>
            I geni del complesso HLA sono fisicamente contigui sul cromosoma 6 e distano pochi milioni di paia di basi.
            Durante la meiosi la frequenza di ricombinazione (crossing-over) è estremamente bassa:
            l&apos;intero set di geni HLA su un cromosoma viene quindi <strong>ereditato in blocco come una singola unità genetica, detta aplotipo</strong>.
            Ciascun individuo riceve un aplotipo materno e un aplotipo paterno.
            A causa del <em>linkage disequilibrium</em>, alcuni alleli rimangono associati tra loro nella popolazione molto più frequentemente di quanto atteso dal semplice caso (es. l&apos;aplotipo ancestrale A1-B8-DR3 nei caucasici).
          </p>

          {/* Mount HLA Inheritance Simulator */}
          <div className="pt-2">
            <InteractiveHlaInheritanceSimulator />
          </div>

          {/* Mappa Concettuale di Fine Paragrafo: Ereditarietà e Genetica HLA */}
          <ConceptMapFlow {...MAP_LEZIONE_8_HLA_GENETICS} />
        </div>
      </section>

      {/* SECTION 8.5: LEGAME PROMISCUO & STABILITA' DEL TRIMERO */}
      <section id="sec-8-5" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-600 uppercase">
            Sezione 8.5
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Il Legame Promiscuo e la Regola di Stabilità del Trimero di Membrana
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Perché l&apos;MHC non distingue il self dal non-self e perché non esistono molecole MHC vuote.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            A differenza degli anticorpi, la cui interazione è rigidamente specifica per un singolo determinante epitopico,
            il legame tra MHC e peptide è definito <strong>legame promiscuo (o degenerato)</strong>:
            un singolo allele MHC può alloggiare migliaia di peptidi con sequenze amminoacidiche totalmente eterogenee,
            a condizione che preservino i corretti residui àncora (compatibilità sterica e idrofobica con le tasche del pavimento).
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              L&apos;MHC Non Discrimina il Self dal Non-Self!
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              La Professoressa Molfetta ha chiarito un concetto essenziale:
              <strong>la molecola MHC non possiede alcuna capacità biochimica di distinguere se un peptide derivi da un virus o da una proteina del proprio corpo</strong>.
              Qualsiasi peptide dotato dei residui àncora appropriati si lega con la medesima affinità.
              La discriminazione tra innocuità (self) e pericolo patogeno (non-self) è demandata interamente al <strong>linfocita T (TCR)</strong>
              attraverso i rigorosi processi di tolleranza centrale nel timo e periferica nei tessuti secondari!
            </p>
          </div>

          <h3 className="text-base font-bold text-slate-900 mt-4 flex items-center gap-2">
            <Shield className="w-4 h-4 text-blue-600" />
            La Regola Biologica: Nessuna Molecola MHC è Espressa "Vuota"
          </h3>

          <p>
            Sulla membrana plasmatica di una cellula sana o infetta <strong>non esistono molecole MHC prive di peptide</strong>.
            Il peptide funge da elemento strutturale cardine: i suoi legami idrogeno e contatti idrofobici saldano le α-eliche
            e stabilizzano l&apos;intero eterodimero.
            Se un complesso MHC giunge in superficie senza peptide o perde il peptide legato:
          </p>

          <ol className="list-decimal pl-5 space-y-2 text-xs text-slate-700">
            <li>Subisce una rapida denaturazione conformazionale;</li>
            <li>Viene prontamente internalizzato per endocitosi;</li>
            <li>Viene degradato nei compartimenti lisosomiali.</li>
          </ol>

          <p className="text-xs text-slate-600">
            Pertanto, in condizioni fisiologiche in assenza di patogeni, il 100% delle molecole MHC espresse sulla superficie
            presenta una miriade di <strong>peptidi self endogeni innocui</strong>, che garantiscono la sopravvivenza dei linfociti T naïve tramite segnali trofici tonici.
          </p>
        </div>
      </section>

      {/* SECTION 8.6: VANTAGGIO DELL'ETEROZIGOSI & SELEZIONE SESSUALE */}
      <section id="sec-8-6" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-rose-600 uppercase">
            Sezione 8.6
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Vantaggio Evolutivo dell&apos;Eterozigosi, Selezione Sessuale e Rigetto dei Trapianti
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Resistenza ai patogeni mutanti, studio sociologico delle T-shirt sudate e basi del rigetto allogenico.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Activity className="w-4 h-4 text-rose-600" />
            Origine Storica: Il Rigetto dei Trapianti
          </h3>

          <p>
            Il complesso maggiore di istocompatibilità non è stato scoperto per il suo ruolo nella presentazione antigenica,
            bensì per essere il responsabile primario del <strong>rigetto iperacuto e acuto nei trapianti d&apos;organo</strong>.
            Sia nell&apos;uomo che nel topo, un trapianto di tessuto non viene rigettato solo quando si tratta di un <em>autotrapianto</em>
            o di un trapianto tra individui geneticamente identici (gemelli monozigoti o ceppi di topi <em>inbred</em> ottenuti
            tramite accoppiamenti consanguinei fratello-sorella per decine di generazioni).
            In qualsiasi allotrapianto tra individui non correlati, le molecole MHC del donatore sono codificate da alleli differenti:
            le cellule T del ricevente riconoscono le MHC estranee come antigeni non-self ad altissima frequenza precursoriale (alloreattività),
            scatenando un rigetto violento. Lo stesso principio regola i tentativi di <em>xenotrapianto</em> (ad es. da maiale a uomo, reso possibile oggi dall&apos;inattivazione genica CRISPR dei geni suini).
          </p>

          <h3 className="text-base font-bold text-slate-900 mt-4 flex items-center gap-2">
            <Heart className="w-4 h-4 text-pink-600" />
            Meccanismi Sociali ed Evolutivi di Mantenimento dell&apos;Eterozigosi
          </h3>

          <p>
            L&apos;eterozigosi conferisce un indiscutibile vantaggio selettivo:
            i virus e i batteri mutano con tassi esponenzialmente più rapidi rispetto al genoma umano.
            Se un virus muta un aminoacido critico per eludere l&apos;ancoraggio su HLA-A*02,
            in un individuo eterozigote i frammenti virali rimangono perfettamente presentabili da HLA-A*24 o HLA-B*35.
            Una popolazione eterogenea è impermeabile all&apos;estinzione di massa da singoli ceppi patogeni emergenti.
          </p>

          <div className="p-4 rounded-xl bg-pink-50 border border-pink-200 text-xs text-pink-950 space-y-2">
            <div className="font-bold flex items-center gap-2 text-pink-900 text-sm">
              <Sparkles className="w-4 h-4 text-pink-600" />
              Focus Didattico: Lo Studio delle T-Shirt Sudate (Wedekind 1995)
            </div>
            <p className="leading-relaxed">
              Per prevenire l&apos;omozigosi da consanguineità, l&apos;evoluzione dei mammiferi ha sviluppato meccanismi di <strong>selezione sessuale guidata dall&apos;olfatto</strong>.
              Nei roditori, i maschi rilasciano nelle urine composti volatili contenenti peptidi MHC; le femmine scelgono preferenzialmente partner con MHC dissimile dal proprio.
              Nell&apos;uomo, il celebre esperimento di Claus Wedekind ha visto studentesse universitarie annusare magliette indossate per 48 ore da studenti maschi tipizzati HLA:
              le partecipanti hanno valutato l&apos;odore come significativamente più gradevole e attraente quando apparteneva a uomini con <strong>aplotipi HLA divergenti dai propri</strong>.
              A livello molecolare, i peptidi captati dai recettori dell&apos;organo vomeronasale mimano la conformazione delle fessure MHC,
              agendo come un sensore biologico per massimizzare la diversità immunologica della discendenza.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8.7: CORECETTORI CD4/CD8 & COMPARTIMENTI CELLULARI */}
      <section id="sec-8-7" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-blue-600 uppercase">
            Sezione 8.7
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Corecettori CD4 e CD8: Specializzazione Funzionale e Compartimentalizzazione
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Interazione con domini invarianti e segregazione tra patogeni citosolici ed extracellulari.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            Poiché l&apos;interazione del TCR con il complesso pMHC ha una costante di affinità assai modesta (Kd da 1 a 100 μM,
            molto più debole rispetto a quella degli anticorpi), la stabilità della sinapsi immunologica richiede l&apos;intervento
            dei <strong>corecettori CD4 e CD8</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/70 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-blue-950 text-sm">CD8: Partner di MHC-I</h4>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-200 text-blue-800">
                  Linfocita Citotossico (CTL)
                </span>
              </div>
              <p className="text-xs text-blue-900 leading-relaxed">
                CD8 è un eterodimero αβ o omodimero αα invariante. Lega specificamente il <strong>dominio non polimorfico α3</strong> della catena pesante di MHC-I.
                Recluta la chinasi <strong>Lck</strong> intracellulare per innescare la cascata citotossica (perforina e granzimi)
                che uccide direttamente la cellula bersaglio.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/70 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-emerald-950 text-sm">CD4: Partner di MHC-II</h4>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-200 text-emerald-800">
                  Linfocita T Helper (Th)
                </span>
              </div>
              <p className="text-xs text-emerald-900 leading-relaxed">
                CD4 è una singola catena polipeptidica con quattro domini extracellulari tipo immunoglobulina.
                Lega contemporaneamente i <strong>domini non polimorfici α2 e β2</strong> di MHC-II.
                Attiva il linfocita a secernere citochine istruenti che potenziano i macrofagi e stimolano i linfociti B.
              </p>
            </div>
          </div>

          <h3 className="text-base font-bold text-slate-900 mt-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-600" />
            La Logica Evolutiva dei Due Compartimenti
          </h3>

          <p>
            La segregazione tra le due classi risponde a una logica biochimica impeccabile basata sulla localizzazione topografica del patogeno:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-blue-600">Compartimento Citosolico → MHC-I</span>
              <p className="text-xs text-slate-700 leading-relaxed">
                I virus e i parassiti intracellulari si replicano nel citoplasma cellulare.
                L&apos;unico modo per eradicare l&apos;infezione è <strong>sacrificare la cellula infetta</strong>.
                Poiché qualsiasi cellula dell&apos;organismo può essere infettata da un virus,
                <strong>l&apos;MHC-I è espresso su tutte le cellule nucleate del corpo</strong> (assente solo sugli eritrociti privi di nucleo).
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-600">Compartimento Vescicolare → MHC-II</span>
              <p className="text-xs text-slate-700 leading-relaxed">
                I batteri, i funghi e le tossine si trovano nei fluidi extracellulari.
                Non serve uccidere le cellule sane, ma occorre orchestrare una risposta con anticorpi e fagocitosi.
                <strong>L&apos;MHC-II è espresso costitutivamente solo sulle APC professioniste</strong> (cellule dendritiche, macrofagi e linfociti B),
                capaci di fagocitare il materiale estraneo e presentarlo per ricevere l&apos;aiuto citochinico dei T helper.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8.8: REGOLAZIONE CITOCHINICA ED EVASIONE IMMUNITARIA */}
      <section id="sec-8-8" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-purple-600 uppercase">
            Sezione 8.8
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Regolazione Citochinica (IFN-I vs IFN-γ) e Meccanismi di Immunoevasione Patogena
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Induzione trascrizionale tramite transattivatore CIITA e downregolazione virale e tumorale.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            L&apos;espressione delle molecole MHC non è statica, bensì finemente calibrata dalle citochine prodotte durante la flogosi:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-600" />
                Interferoni di Tipo I (IFN-α / IFN-β) → Upregolazione MHC-I
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Rilasciati precocemente dalle cellule infettate da virus e dalle pDC, aumentano la trascrizione della catena pesante α,
                della β2-microglobulina, del trasportatore TAP e delle subunità dell&apos;immunoproteasoma (LMP2/LMP7),
                massimizzando la probabilità che i CTL CD8+ intercettino la cellula infetta.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Flame className="w-4 h-4 text-emerald-600" />
                Interferone-γ (IFN-II) → Upregolazione MHC-II
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Prodotto da linfociti Th1 e cellule NK, attiva il transattivatore trascrizionale <strong>CIITA (Class II Transactivator)</strong>.
                Induce l&apos;espressione di MHC-II non solo sulle APC professioniste, ma anche su tipi cellulari atipici durante infiammazioni severe:
                cellule endoteliali, cheratinociti, fibroblasti, cellule epiteliali intestinali, mastociti, eosinofili e basofili.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-950 space-y-2">
            <div className="font-bold flex items-center gap-2 text-rose-900 text-sm">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              Immunoevasione Virale & Tumorale (Missing Self)
            </div>
            <p className="leading-relaxed">
              Molti virus oncogeni e patogeni persistenti (Cytomegalovirus, Adenovirus, Herpes simplex) e cellule neoplastiche
              bloccano la sintesi o il trasporto in membrana di MHC-I per sfuggire alla lisi operata dai CD8+.
              Tuttavia, il sistema immunitario ha evoluto una contro-misura letale: le <strong>cellule NK (Natural Killer)</strong>.
              I recettori inibitori delle NK (KIR e CD94/NKG2A) monitorano costantemente i livelli basali di MHC-I;
              quando una cellula perde l&apos;espressione di MHC-I (*missing self*), il segnale inibitorio si azzera e la cellula NK la distrugge all&apos;istante!
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8.9: ASSOCIAZIONI HLA E MALATTIE */}
      <section id="sec-8-9" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-150 pb-4">
          <span className="text-xs font-mono font-bold tracking-wider text-rose-600 uppercase">
            Sezione 8.9
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Correlazioni Cliniche: Malattie Autoimmuni e Neuroinfiammazione Microgliale
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Spondilite anchilosante, celiachia, diabete mellito tipo 1, artrite reumatoide e infiammazione nel SNC.
          </p>
        </div>

        <div className={`text-slate-800 space-y-4 ${proseFontClass} ${proseSizeClass}`}>
          <p>
            La correlazione tra determinati alleli HLA e patologie autoimmuni non implica che l&apos;allele causi direttamente la malattia,
            ma che esso rappresenti una <strong>predisposizione genetica fondamentale</strong>:
            se un individuo non possiede gli alleli HLA capaci di alloggiare e presentare i peptidi autoantigenici rilevanti,
            i cloni T autoreattivi non potranno mai essere attivati in periferia.
          </p>

          <div className="overflow-x-auto my-3">
            <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <thead className="bg-slate-100 text-slate-800 font-mono text-[11px] uppercase">
                <tr>
                  <th className="p-3 border-b border-slate-200">Allele HLA</th>
                  <th className="p-3 border-b border-slate-200">Classe</th>
                  <th className="p-3 border-b border-slate-200">Malattia Associata</th>
                  <th className="p-3 border-b border-slate-200">Rischio Relativo</th>
                  <th className="p-3 border-b border-slate-200">Meccanismo Molecolare</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                {HLA_DISEASE_ASSOCIATIONS_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-bold font-mono text-purple-700">{row.allele}</td>
                    <td className="p-3 font-mono text-[11px]">{row.mhcClass}</td>
                    <td className="p-3 font-semibold text-slate-900">{row.disease}</td>
                    <td className="p-3 font-mono font-bold text-rose-600">{row.relativeRisk}</td>
                    <td className="p-3 text-[11px] leading-relaxed">{row.molecularPathology}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Microscope className="w-4 h-4 text-purple-600" />
              Focus Sbobina: Il Ruolo di HLA nelle Malattie Neurodegenerative
            </h4>
            <p className="leading-relaxed">
              La Professoressa Molfetta ha menzionato come la neurodegenerazione (Morbo di Alzheimer, Morbo di Parkinson)
              sia largamente sostenuta da una <strong>neuroinfiammazione cronica nel Sistema Nervoso Centrale</strong>.
              Le cellule immunocompetenti residenti nel SNC che esprimono molecole MHC e presentano antigeni ai linfociti T
              sono le <strong>cellule della microglia</strong> (macrofagi residenti del parenchima cerebrale).
              La presenza di determinati alleli HLA condiziona il tipo di peptidi neurochimici che possono essere presentati
              e la magnitudo del richiamo flogistico tissutale all&apos;interno dell&apos;encefalo.
            </p>
          </div>
        </div>
      </section>

      {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_LEZIONE_8} lessonNumber={8} title="Verifica dell'Apprendimento · Lezione 8" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS_LEZIONE_8} lessonNumber={8} title="Flashcard di Ripasso Attivo · Lezione 8" />
    </div>
  );
};
