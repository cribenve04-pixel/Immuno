import React, { useState } from 'react';
import { GELL_COOMBS_DATA } from '../data/chapterContent';
import { Search, ChevronDown, ChevronUp, Stethoscope, Pill, Clock } from 'lucide-react';

export const InteractiveTables: React.FC = () => {
  const [table1Search, setTable1Search] = useState<string>('');
  const [expandedGellType, setExpandedGellType] = useState<string | null>('I');

  const table1Data = [
    {
      property: "Cinetica d'azione",
      innata: "Immediata / Rapida (ore)",
      adattativa: "Ritardata (giorni)",
      significato: "L'innata sfrutta recettori preesistenti e fattori di fase acuta; l'adattativa richiede espansione clonale dei linfociti naïve."
    },
    {
      property: "Specificità recettoriale",
      innata: "Verso strutture condivise e conservate (PAMPs / DAMPs)",
      adattativa: "Estremamente specifica verso singoli epitopi molecolari",
      significato: "L'innata distingue classi di microbi (es. LPS batterico); l'adattativa discrimina variazioni di singoli aminoacidi."
    },
    {
      property: "Diversità recettoriale",
      innata: "Limitata (< 100 recettori, codificata da linea germinativa)",
      adattativa: "Enorme (> 10^11 combinazioni tramite ricombinazione genica V(D)J)",
      significato: "PRR (Toll-like, NOD) non mutano nella vita; BCR e TCR riarrangiano somaticamente nel midollo e nel timo."
    },
    {
      property: "Cellule effettrici",
      innata: "Macrofagi, Granulociti (Neutrofili, Eosinofili, Basofili), Cellule Dendritiche, Cellule NK, ILCs",
      adattativa: "Linfociti B, Linfociti T (CD4+ Helper, CD8+ Citotossici)",
      significato: "I fagociti mediano eliminazione aspecifica; i linfociti T e B producono risposte mirate a lungo raggio."
    },
    {
      property: "Fattori umorali solubili",
      innata: "Sistema del complemento, interferoni, proteine di fase acuta (PCR, MBL)",
      adattativa: "Anticorpi (Immunoglobuline: IgM, IgD, IgG, IgA, IgE) secreti dalle plasmacellule",
      significato: "Il complemento lisa i patogeni e richiama neutrofili; gli anticorpi neutralizzano ed opsonizzano."
    },
    {
      property: "Memoria immunologica",
      innata: "Assente (o non clonale/trained immunity epigenetica)",
      adattativa: "Presente e duratura (cellule B e T di memoria ad alta sopravvivenza)",
      significato: "Costituisce il principio fondante dei vaccini e protegge dalle reinfezioni sintomatiche."
    }
  ];

  const filteredTable1 = table1Data.filter(
    (row) =>
      row.property.toLowerCase().includes(table1Search.toLowerCase()) ||
      row.innata.toLowerCase().includes(table1Search.toLowerCase()) ||
      row.adattativa.toLowerCase().includes(table1Search.toLowerCase())
  );

  return (
    <div className="space-y-10 my-10">
      {/* TABELLA 1 */}
      <div id="tabella-1" className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-mono tracking-wider text-blue-700 font-semibold">Tavola Comparativa Sinottica</span>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">Tabella 1: Caratteristiche Distintive tra Immunità Innata e Adattativa</h3>
            <p className="text-xs text-slate-500 mt-1">
              Confronto sistematico dei parametri biologici, recettoriali, cellulari ed evolutivi.
            </p>
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cerca proprietà o fattore..."
              value={table1Search}
              onChange={(e) => setTable1Search(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-800"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs divide-y divide-slate-200">
            <thead className="bg-slate-100/70 text-slate-700 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-4 w-1/4">Proprietà Biologica</th>
                <th className="py-3 px-4 w-1/3 text-emerald-900 bg-emerald-50/50">Immunità Innata (Naturale)</th>
                <th className="py-3 px-4 w-1/3 text-blue-900 bg-blue-50/50">Immunità Adattativa (Specifica)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {filteredTable1.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-900 align-top">
                    {row.property}
                    <div className="text-[11px] text-slate-500 font-normal mt-1 leading-normal">
                      {row.significato}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-700 bg-emerald-50/20 align-top leading-relaxed">
                    {row.innata}
                  </td>
                  <td className="py-3 px-4 text-slate-700 bg-blue-50/20 align-top leading-relaxed">
                    {row.adattativa}
                  </td>
                </tr>
              ))}
              {filteredTable1.length === 0 && (
                <tr>
                  <td colSpan={3} className="py-8 text-center text-slate-400">
                    Nessuna proprietà trovata per la chiave di ricerca inserita.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* TABELLA 2: GELL E COOMBS */}
      <div id="tabella-2" className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-mono tracking-wider text-rose-700 font-semibold">Classificazione Immunopatologica</span>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">Tabella 2: Classificazione delle Reazioni di Ipersensibilità (Gell e Coombs)</h3>
            <p className="text-xs text-slate-500 mt-1">
              Quadro clinico-molecolare dei 4 tipi di ipersensibilità: mediatori, dinamica tessutale, patologie e bersagli farmacologici.
            </p>
          </div>
        </div>

        <div className="p-5 space-y-4">
          {GELL_COOMBS_DATA.map((item) => {
            const isExpanded = expandedGellType === item.type;
            const badgeColor =
              item.type === 'I' ? 'bg-amber-600 text-white' :
              item.type === 'II' ? 'bg-blue-600 text-white' :
              item.type === 'III' ? 'bg-purple-600 text-white' :
              'bg-rose-600 text-white';

            return (
              <div
                key={item.type}
                className="border border-slate-200 rounded-lg overflow-hidden bg-white transition-all hover:border-slate-300"
              >
                <div
                  onClick={() => setExpandedGellType(isExpanded ? null : item.type)}
                  className="p-4 flex items-center justify-between cursor-pointer bg-slate-50/60 hover:bg-slate-100/60 select-none transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-md flex items-center justify-center font-bold text-sm ${badgeColor}`}>
                      {item.type}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Tipo {item.type}: {item.name}</h4>
                      <p className="text-xs text-slate-500">
                        Mediatore: <span className="font-mono text-slate-700">{item.mediator}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-slate-500">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {item.timing}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    )}
                  </div>
                </div>

                {isExpanded && (
                  <div className="p-5 border-t border-slate-200 bg-white space-y-4 text-xs animate-in fade-in duration-200">
                    <div>
                      <span className="font-semibold text-slate-900 block mb-1">Meccanismo Fisiopatologico di Danno:</span>
                      <p className="text-slate-700 leading-relaxed font-serif-body">
                        {item.physiopathology}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <span className="font-bold text-slate-900 flex items-center gap-1.5 mb-2">
                          <Stethoscope className="w-3.5 h-3.5 text-blue-600" />
                          Esempi Clinici Caratteristici
                        </span>
                        <ul className="space-y-1 text-slate-700">
                          {item.examples.map((ex, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-blue-500 font-bold">•</span>
                              <span>{ex}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <span className="font-bold text-slate-900 flex items-center gap-1.5 mb-2">
                          <Pill className="w-3.5 h-3.5 text-emerald-600" />
                          Target Terapeutico e Trattamento
                        </span>
                        <p className="text-slate-700 leading-relaxed">
                          {item.therapeuticTarget}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
