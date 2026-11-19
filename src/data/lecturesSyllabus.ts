import { ALL_33_LESSONS } from './courseSyllabus';

export interface LectureSyllabusItem {
  number: number;
  title: string;
  shortTitle: string;
  prof: string;
  date: string;
  topics: string[];
  isAvailable: boolean;
  summary: string;
}

const SHORT_TITLES_MAP: Record<number, string> = {
  1: "Principi, Citochine & JAK-STAT",
  2: "Citochine & JAK-STAT",
  3: "Neutrofili & NETosi",
  4: "PRR & Inflammasoma",
  5: "Barriere & Antivirale",
  6: "Linfociti B & BCR",
  7: "Maturazione B & Tolleranza",
  8: "MHC & Genetica HLA",
  9: "Processazione Antigeni",
  10: "Cross-Presentazione & SAg",
  11: "Maturazione T & Selezione",
  12: "Attivazione T & Sinapsi",
  13: "Centro Germinativo & B-T",
  14: "Antigeni TI & Circuiti Inibitori",
  15: "Il Sistema del Complemento",
  16: "Recettori Complemento & Infezioni",
  17: "Funzioni Effettrici Anticorpi",
  18: "mAb, ADC & CAR-T",
  19: "Differenziamento T Helper (Th)",
  20: "Linfociti T Citotossici (CTL)",
  21: "Cellule Natural Killer (NK)",
  22: "Risposta Immunitaria Infezioni",
  23: "Immunità Mucosale & GALT",
  24: "Difesa Antivirale & Vaccinologia",
  25: "Asse Microbiota-Intestino-Cervello",
  26: "Ipersensibilità Tipo I & Asma",
  27: "Ipersensibilità Tipi II & III",
  28: "Ipersensibilità Tipo IV & Granulomi",
  29: "Immunologia dei Trapianti",
  30: "Tolleranza & Autoimmunità",
  31: "Malattie Autoimmuni Cliniche",
  32: "Immunologia Oncologica",
  33: "Infezione da HIV & AIDS"
};

export const LECTURES_LIST: LectureSyllabusItem[] = ALL_33_LESSONS.map((l) => ({
  number: l.number,
  title: `Lezione ${l.number}: ${l.title}`,
  shortTitle: SHORT_TITLES_MAP[l.number] || (l.title.length > 25 ? l.title.slice(0, 22) + '...' : l.title),
  prof: l.professor,
  date: l.dateStr,
  topics: l.topics,
  isAvailable: l.isAvailable ?? true,
  summary: l.summary
}));
