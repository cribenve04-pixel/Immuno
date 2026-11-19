import React, { useState } from 'react';
import { Dna, ShieldCheck, AlertTriangle, Users, Heart, Sparkles, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

export const InteractiveHlaGeneticsSimulator: React.FC = () => {
  const [individualType, setIndividualType] = useState<'heterozygous' | 'homozygous'>('heterozygous');
  const [activeTab, setActiveTab] = useState<'genetics' | 'pathogen_challenge' | 'sweaty_tshirt' | 'disease_association'>('genetics');

  // Pathogens testing states
  const [selectedPathogen, setSelectedPathogen] = useState<'flu' | 'hiv' | 'malaria' | 'sars'>('flu');

  // Sweaty T-shirt experiment test
  const [testedScentIndex, setTestedScentIndex] = useState<number | null>(null);

  const pathogensData = {
    flu: {
      name: 'Virus dell’Influenza A (Proteina NP)',
      peptide: 'GILGFVFTL (Epitopo A*02)',
      requiredAllele: 'HLA-A*02',
      heterozygotePresented: true,
      homozygotePresented: individualType === 'heterozygous',
      impact: 'I linfociti T citotossici riconoscono il peptide e distruggono le cellule respiratorie infette entro 48 ore.'
    },
    hiv: {
      name: 'Virus HIV-1 (Proteina del Capside Gag p24)',
      peptide: 'KRWIILGLNK (Epitopo B*27/B*57)',
      requiredAllele: 'HLA-B*27',
      heterozygotePresented: true,
      homozygotePresented: false, // Homozygous individual lacks B*27
      impact: 'Forte controllo della carica virale. La mutazione di fuga virale compromette la replicazione dell&apos;HIV.'
    },
    malaria: {
      name: 'Plasmodium falciparum (Proteina Circumsporozoitica)',
      peptide: 'DPNANPNV (Epitopo B*53)',
      requiredAllele: 'HLA-B*53',
      heterozygotePresented: true,
      homozygotePresented: false,
      impact: 'Attivazione precoce dei CTL epatici che abbatte il carico di merozoiti e previene la malaria cerebrale letale.'
    },
    sars: {
      name: 'SARS-CoV-2 (Proteina Spike S2)',
      peptide: 'YLQPRTFLL (Epitopo A*02/A*24)',
      requiredAllele: 'HLA-A*24',
      heterozygotePresented: true,
      homozygotePresented: individualType === 'heterozygous',
      impact: 'Generazione di memoria immunitaria T duratura che riduce il danno polmonare e accelera la clearance.'
    }
  };

  const currentPathogen = pathogensData[selectedPathogen];
  const canPresent = individualType === 'heterozygous' ? currentPathogen.heterozygotePresented : currentPathogen.homozygotePresented;

  const tShirtSubjects = [
    { id: 1, label: 'Soggetto Maschile 1', hlaProfile: 'Condivide 5 su 6 alleli HLA con l&apos;esaminatrice', score: 'Odore percepito come sgradevole / neutrale (simile al proprio profilo genetico)', match: 'HLA-Simile' },
    { id: 2, label: 'Soggetto Maschile 2', hlaProfile: 'Condivide 0 su 6 alleli HLA (Completamente dissimile)', score: 'Odore percepito come attraente, piacevole e stimolante', match: 'HLA-Dissimile (Vantaggio Eterozigosi)' },
    { id: 3, label: 'Soggetto Maschile 3', hlaProfile: 'Condivide 4 su 6 alleli HLA (Parente stretto o inbred)', score: 'Odore percepito come poco gradevole / repulsivo', match: 'HLA-Simile' },
  ];

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
              Genetica di Popolazione & Evoluzione
            </span>
            <span className="text-xs text-slate-400 font-mono">Cromosoma 6p21 & Selezione Sessuale</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
            Simulatore di Eterozigosi HLA, Disequilibrio di Linkage & Selezione Naturale
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIndividualType('heterozygous');
              setActiveTab('genetics');
              setSelectedPathogen('flu');
              setTestedScentIndex(null);
            }}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            title="Ripristina parametri predefiniti"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mode Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab('genetics')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'genetics'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-900/50'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <Dna className="w-3.5 h-3.5" /> 1. Aplotipi & Codominanza (6 vs 16 Molecole)
        </button>
        <button
          onClick={() => setActiveTab('pathogen_challenge')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'pathogen_challenge'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/50'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" /> 2. Vantaggio Eterozigosi vs Patogeni
        </button>
        <button
          onClick={() => setActiveTab('sweaty_tshirt')}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'sweaty_tshirt'
              ? 'bg-purple-600 text-white shadow-md shadow-purple-900/50'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <Heart className="w-3.5 h-3.5" /> 3. Esperimento T-Shirt & Olfatto
        </button>
      </div>

      {/* TAB 1: GENETICS & CO-DOMINANCE */}
      {activeTab === 'genetics' && (
        <div className="space-y-5">
          {/* Individual Configuration Switch */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
            <div>
              <span className="text-xs font-bold text-slate-200 block">Stato di Zigosità dell&apos;Individuo:</span>
              <span className="text-[11px] text-slate-400">
                L&apos;eterozigosi massimizza il numero di molecole esposte contemporaneamente in membrana grazie alla codominanza.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIndividualType('heterozygous')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  individualType === 'heterozygous'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                Eterozigote Completo (Reale)
              </button>
              <button
                onClick={() => setIndividualType('homozygous')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  individualType === 'homozygous'
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                Omozigote (Topi Inbred / Consanguinei)
              </button>
            </div>
          </div>

          {/* Chromosome 6 Diagram and Haplotypes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Maternal Haplotype */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-bold text-pink-400 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Aplotipo Materno (Cromosoma 6p21)
                </span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                  Ereditato in blocco
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2 rounded bg-slate-900 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">Classe I:</span>
                  <span className="font-mono text-pink-300 font-semibold">HLA-A*02 · HLA-B*07 · HLA-C*07</span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">Classe II:</span>
                  <span className="font-mono text-pink-300 font-semibold">DP(A1*01/B1*04) · DQ(A1*01/B1*05) · DR(A*01/B1*15)</span>
                </div>
              </div>
            </div>

            {/* Paternal Haplotype */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-bold text-sky-400 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Aplotipo Paterno (Cromosoma 6p21)
                </span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                  {individualType === 'heterozygous' ? 'Alleli Diversi' : 'Identico alla madre'}
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2 rounded bg-slate-900 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">Classe I:</span>
                  <span className="font-mono text-sky-300 font-semibold">
                    {individualType === 'heterozygous'
                      ? 'HLA-A*24 · HLA-B*27 · HLA-C*02'
                      : 'HLA-A*02 · HLA-B*07 · HLA-C*07'}
                  </span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">Classe II:</span>
                  <span className="font-mono text-sky-300 font-semibold">
                    {individualType === 'heterozygous'
                      ? 'DP(A1*02/B1*02) · DQ(A1*05/B1*02) · DR(A*01/B1*03)'
                      : 'DP(A1*01/B1*04) · DQ(A1*01/B1*05) · DR(A*01/B1*15)'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Co-dominant Expression Summary */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Risultato Fenotipico sulla Membrana Cellulare (Codominanza Totale)
              </span>
              <span className="text-xs font-mono text-slate-400">
                {individualType === 'heterozygous' ? 'Repertorio Massimo' : 'Repertorio Ristretto (50%)'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-800/50 space-y-1">
                <div className="font-bold text-blue-300">
                  MHC Classe I: {individualType === 'heterozygous' ? '6 Molecole Distinte' : '3 Molecole'}
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {individualType === 'heterozygous'
                    ? '2 varianti di HLA-A + 2 di HLA-B + 2 di HLA-C espresse simultaneamente su OGNI cellula nucleata, ciascuna associata alla β2M invariante (Cromosoma 15).'
                    : 'Soltanto 3 tipi di molecole di classe I (1A + 1B + 1C) a causa dell’omozigosi parentale.'}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/50 space-y-1">
                <div className="font-bold text-emerald-300">
                  MHC Classe II: {individualType === 'heterozygous' ? 'Fino a 16 Combinazioni' : '3-4 Combinazioni'}
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {individualType === 'heterozygous'
                    ? 'La catena α materna può appaiarsi sia con la β materna che con la β paterna (trans-complementazione tra loci DP e DQ), moltiplicando la diversità recettoriale!'
                    : 'Nessun trans-appaiamento nuovo: le catene α e β sono identiche tra i due cromosomi.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PATHOGEN CHALLENGE (HETEROZYGOTE ADVANTAGE) */}
      {activeTab === 'pathogen_challenge' && (
        <div className="space-y-5">
          <div className="text-xs text-slate-300 bg-slate-800/70 p-3.5 rounded-xl border border-slate-700 leading-relaxed">
            <strong>Il Teorema della Selezione Naturale:</strong> I microrganismi mutano e si replicano a velocità infinitamente superiore a quella del genoma umano. L&apos;eterozigosi fornisce a ciascun individuo più varianti di tasca peptidica; se un virus muta e perde l&apos;àncora per un dato allele, l&apos;eterozigote lo presenta tramite un secondo allele alternativo!
          </div>

          {/* Pathogen Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {(Object.keys(pathogensData) as Array<keyof typeof pathogensData>).map((key) => {
              const pat = pathogensData[key];
              return (
                <button
                  key={key}
                  onClick={() => setSelectedPathogen(key)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    selectedPathogen === key
                      ? 'bg-blue-600/30 border-blue-500 text-white shadow-md'
                      : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span className="text-[10px] font-mono text-slate-400 block">{pat.requiredAllele}</span>
                  <span className="text-xs font-bold block line-clamp-1">{pat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Test Outcome Card */}
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <h5 className="font-bold text-white text-sm">{currentPathogen.name}</h5>
                <span className="text-xs text-slate-400 font-mono">
                  Epitopo: {currentPathogen.peptide} (Richiede allele: <strong className="text-amber-300">{currentPathogen.requiredAllele}</strong>)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Profilo testato:</span>
                <span className={`px-2.5 py-1 rounded text-xs font-bold ${
                  individualType === 'heterozygous' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-amber-950 text-amber-300 border border-amber-800'
                }`}>
                  {individualType === 'heterozygous' ? 'Eterozigote' : 'Omozigote'}
                </span>
              </div>
            </div>

            <div className={`p-4 rounded-xl border flex items-start gap-3 ${
              canPresent
                ? 'bg-emerald-950/40 border-emerald-800/80 text-emerald-200'
                : 'bg-rose-950/40 border-rose-800/80 text-rose-200'
            }`}>
              {canPresent ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1">
                <div className="font-bold text-xs">
                  {canPresent
                    ? 'Presentazione Antigenica Efficace e Risposta Immunitaria Attivata'
                    : 'Mancata Presentazione Antigenica · Fuga Immunitaria del Patogeno'}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {canPresent
                    ? `${currentPathogen.impact} La presenza dell'allele ${currentPathogen.requiredAllele} consente un ancoraggio ad alta stabilità nella tasca di legame.`
                    : `L'individuo omozigote è privo dell'allele ${currentPathogen.requiredAllele}. Le sue uniche molecole MHC non possiedono tasche chimicamente complementari ai residui di questo peptide: il patogeno replica indisturbato!`}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: THE SWEATY T-SHIRT EXPERIMENT (WEDEKIND ET AL. 1995) */}
      {activeTab === 'sweaty_tshirt' && (
        <div className="space-y-5">
          <div className="text-xs text-slate-300 bg-slate-800/70 p-3.5 rounded-xl border border-slate-700 leading-relaxed space-y-1.5">
            <div className="font-bold text-purple-300 flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-purple-400" /> Lo Studio Scientifico delle T-Shirt Sudate (Wedekind et al., 1995, Università di Berna)
            </div>
            <p>
              44 studenti maschi indossarono una t-shirt di cotone pulita per due notti consecutive, evitando cibi speziati, alcol e saponi profumati. 49 studentesse valutarono alla cieca la gradevolezza dell&apos;odore di ciascuna maglietta.
            </p>
            <p className="text-purple-200">
              <strong>Risultato:</strong> Le studentesse classificarono come <em>nettamente più gradevole e attraente</em> l&apos;odore degli uomini con alleli HLA dissimili dai propri. I peptidi legati dai recettori dell&apos;organo vomeronasale condividono omologie con le molecole HLA: un raffinato meccanismo evolutivo per evitare consanguineità e garantire prole eterozigote!
            </p>
          </div>

          {/* Test Shirts Selector */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-300">
              Seleziona una maglietta da valutare:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {tShirtSubjects.map((sub, idx) => (
                <button
                  key={sub.id}
                  onClick={() => setTestedScentIndex(idx)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    testedScentIndex === idx
                      ? 'bg-purple-900/40 border-purple-500 shadow-md'
                      : 'bg-slate-800/70 border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-xs font-bold text-white">{sub.label}</div>
                  <div className="text-[11px] text-slate-400 mt-1">{sub.hlaProfile}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Test Evaluation Display */}
          {testedScentIndex !== null && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold text-purple-300">
                  Esito della Percezione Olfattiva:
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-200 border border-purple-800 ml-auto">
                  {tShirtSubjects[testedScentIndex].match}
                </span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                {tShirtSubjects[testedScentIndex].score}
              </p>
              <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                L&apos;evoluzione naturale modella le preferenze sessuali olfattive per contrastare la consanguineità e arricchire il corredo genico dei figli con una combinazione eterozigote di alleli HLA.
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
