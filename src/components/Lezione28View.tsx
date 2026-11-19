import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
/**
 * Lezione 28: Ipersensibilità di Tipo IV, Malattie Granulomatose, Psoriasi, IBD & Celiachia
 * Docenti: Prof.ssa Molfetta (1ª ora) & Prof.ssa Soriani (2ª ora) - 03/12/2025
 * 
 * Trattato accademico e monografico esaustivo su:
 * - Ipersensibilità di Tipo IV (DTH - Delayed-Type Hypersensitivity): reazioni cellulo-mediate T-dipendenti (Th1, Th17, CTL CD8+)
 * - Fase di priming (linfonodi) e fase effettrice (citochine, macrofagi M1, lisi citotossica)
 * - Tubercolosi e reazione granulomatosa: M. tuberculosis nei macrofagi, blocco fusione fagosoma-lisosoma, IL-12, IFN-γ, CD40-CD40L
 * - Morfologia del granuloma: cellule epitelioidi, cellule giganti multinucleate di Langhans, necrosi caseosa centrale
 * - Cellule NKT (lipidi/acidi micolici su CD1b), linfociti T γδ (fosfoantigeni), CTL CD8+ e riesplosione tubercolosi nell'AIDS
 * - Test di Mantoux: tubercolina PPD intradermica con indurimento a 48–72h
 * - Dermatite da contatto (eczema da contatto): apteni (nichel, cromo, edera velenosa), cellule di Langerhans, Th1, IFN-γ, forma vescicolare
 * - Lipidi dell'edera presentati da CD1a, citochine IL-17 e IL-22, Patch test e compromissione della barriera epidermica
 * - Spettro continuo tra autoinfiammazione e autoimmunità: malattie monogeniche pure (FMF con mutazione della pirina / IL-1β) vs multifattoriali
 * - Psoriasi: danno cheratinociti (meccanico, UV, fumo, stress HPA / neuroinfiammazione nervi-mastociti ed EGF), complessi LL37-DNA
 * - Attivazione pDC via TLR9 con interferone di tipo I, stimolazione cDC, espansione Th1 e Th17 (IL-17 e IL-22)
 * - Autoantigeni nella psoriasi: ADAMTS-L5 dei melanociti, antigeni lipidici da PLA2G4D/CD1a in microvescicole, cheratina 17 e mimetismo molecolare con proteina M streptococcica su HLA-Cw*06:02
 * - Terapie della psoriasi: inibitori JAK-STAT, biologici anti-TNF, anti-IL-23 (ustekinumab, guselkumab, risankizumab), anti-IL-17 (secukinumab, ixekizumab) e anti-IL-17R (brodalumab)
 * - Malattie Infiammatorie Croniche Intestinali (IBD): Morbo di Crohn (transmurale, segmentario, ileo-colico, granulomi, fibrosi sottomucosa) vs Colite Ulcerosa (continua, mucosa superficiale retto-colon, cripte, ascessi)
 * - Disbiosi ed eubiosi: metaboliti batterici (SCFA/butirrato, triptofano su AhR/ILC3/IL-22, acido retinoico e IgA secretorie)
 * - Disregolazione dell'immunità innata: traslocazione batterica, passaggio da ILC3 protettive a ILC1 pro-infiammatorie (IFN-γ), macrofagi M1 secernenti IL-12/IL-23, neutrofili N1 (IL-17)
 * - Genetica IBD: mutazioni comuni (IL-23R, JAK/STAT, TLR4, TNF) vs specifiche del Crohn (NOD2 per muramil-dipeptide e ATG16L1 per autofagia batterica)
 * - Terapia dell'homing intestinale: integrina α4β7 e MAdCAM-1 con anticorpi bloccanti (Vedolizumab)
 * - Celiachia: risposta al glutine (gliadina e glutenina ricche di prolina e glutammina), frammento a 33 aminoacidi indigerito
 * - Transglutaminasi tissutale (tTG) che deamina la gliadina introducendo cariche negative
 * - Genetica obbligata della celiachia: presentazione selettiva su HLA-DQ2 e HLA-DQ8
 * - Danno enterocitario nella celiachia: Th1 secernenti IFN-γ, induzione di IL-15 negli enterociti, attivazione linfociti intraepiteliali (IEL CD8+ simil-NK)
 * - Asse NKG2D e ligandi di stress (MIC-A, MIC-B), citotossicità perforina/granzima e FAS/FAS-L con atrofia dei villi e malassorbimento
 * - Autoanticorpi diagnostici (anti-tTG, anti-EMA, anti-DGP), dieta aglutinata e prospettive biotecnologiche/probiotici
 */

import React, { useState } from 'react';
import {
  ShieldAlert,
  Flame,
  Activity,
  AlertTriangle,
  Layers,
  Dna,
  FileText,
  Search,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  BookOpen,
  Filter,
  Microscope,
  Baby,
  HeartPulse,
  Syringe,
  Wind,
  Droplets,
  Stethoscope,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Info,
  Bug,
  ShieldCheck,
  Zap,
  SlidersHorizontal
} from 'lucide-react';

interface Lezione28ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione28View: React.FC<Lezione28ViewProps> = ({ isSerif, fontSize }) => {
  const fontClass = isSerif ? 'font-serif' : 'font-sans';
  const sizeClass = fontSize === 'large' ? 'text-lg leading-relaxed' : 'text-base leading-relaxed';

  // State for Simulator 1: Type IV Hypersensitivity & Psoriasis Lab
  const [activeSim1Tab, setActiveSim1Tab] = useState<'granuloma' | 'psoriasis'>('granuloma');
  const [tbStage, setTbStage] = useState<'early_phagosome' | 'm1_langhans' | 'caseous_granuloma'>('m1_langhans');
  const [cd4Count, setCd4Count] = useState<number>(850); // cells/uL (HIV/AIDS check)
  const [psoriasisTrigger, setPsoriasisTrigger] = useState<'mechanical_uv' | 'stress_hpa' | 'streptococcus'>('mechanical_uv');
  const [psoriasisTherapy, setPsoriasisTherapy] = useState<'none' | 'anti_il17' | 'anti_il23' | 'jak_inhibitor'>('none');
  const [hlaCStatus, setHlaCStatus] = useState<boolean>(true); // HLA-Cw*06:02

  // State for Simulator 2: IBD & Celiac Disease Lab
  const [activeSim2Tab, setActiveSim2Tab] = useState<'ibd' | 'celiac'>('ibd');
  const [ibdType, setIbdType] = useState<'crohn' | 'ulcerative_colitis'>('crohn');
  const [nod2Mutated, setNod2Mutated] = useState<boolean>(true);
  const [vedolizumabActive, setVedolizumabActive] = useState<boolean>(false);
  const [celiacGlutenIntake, setCeliacGlutenIntake] = useState<boolean>(true);
  const [celiacHla, setCeliacHla] = useState<'dq2_dq8_positive' | 'dq2_dq8_negative'>('dq2_dq8_positive');
  const [tTgActive, setTTgActive] = useState<boolean>(true);

  // Flashcards state
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);


  const toggleCard = (id: number) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  
  const FLASHCARDS = [
            {
              id: 1,
              q: "Qual è la differenza fondamentale dell'ipersensibilità di Tipo IV rispetto ai Tipi I, II e III?",
              a: "Il Tipo IV è l'UNICA forma puramente cellulo-mediata T-dipendente (Th1, Th17, CTL CD8+), priva del ruolo patogenetico primario degli anticorpi. Inoltre la fase effettrice è ritardata (24–72 ore, DTH)."
            },
            {
              id: 2,
              q: "Come si forma il granuloma tubercolare e quali cellule lo compongono?",
              a: "M. tuberculosis blocca la fusione fagosoma-lisosoma. I macrofagi secernono IL-12 inducendo Th1 che producono IFN-γ e CD40L. L'attivazione cronica porta alla fusione dei macrofagi in cellule giganti multinucleate di Langhans (nuclei a ferro di cavallo) e cellule epitelioidi, con necrosi caseosa centrale."
            },
            {
              id: 3,
              q: "Perché l'AIDS provoca la riattivazione letale della tubercolosi?",
              a: "L'HIV deprime selettivamente i linfociti T CD4+. Senza i Th1 che secernono IFN-γ e costimolano con CD40L, i macrofagi non riescono a mantenere l'integrità del granuloma: il batterio esce dalla latenza e dissemina per via ematica (tubercolosi miliare)."
            },
            {
              id: 4,
              q: "Qual è il ruolo dei complessi LL37-DNA nella patogenesi della psoriasi?",
              a: "Il danno ai cheratinociti libera DNA self che si lega al peptide antimicrobico LL37. I complessi LL37-DNA attivano il TLR9 delle cellule dendritiche plasmacitoidi (pDC), scatenando un'iperproduzione di interferone di tipo I, che avvia la cascata Th1/Th17."
            },
            {
              id: 5,
              q: "Cosa distingue geneticamente il Morbo di Crohn dalla Colite Ulcerosa?",
              a: "Il morbo di Crohn è caratterizzato da mutazioni nei geni dell'eliminazione batterica intracellulare via autofagia: NOD2 (recettore citosolico per il muramil-dipeptide MDP) e ATG16L1 / IRGM, assenti nella colite ulcerosa."
            },
            {
              id: 6,
              q: "Perché chi non possiede HLA-DQ2 né HLA-DQ8 non può sviluppare la Celiachia?",
              a: "La gliadina deaminata dalla tTG acquisisce cariche negative che possono incastrarsi stabilmente solo nelle tasche di legame cariche positivamente delle molecole MHC-II HLA-DQ2 e HLA-DQ8. Senza di esse non c'è presentazione ai linfociti CD4+ (VPN >99%)."
            }
          ];
  const QUIZ_QUESTIONS = [
            {
              id: 1,
              q: "1. Qual è il tempo di latenza tipico per la comparsa della fase effettrice dell'ipersensibilità di Tipo IV (DTH)?",
              options: [
                "A) 15–30 minuti",
                "B) 2–4 ore",
                "C) 24–72 ore (con picco tipico a 48 ore)",
                "D) 10–14 giorni"
              ],
              correct: 2,
              rationale: "La reazione di Tipo IV è detta ritardata (DTH) perché richiede 24–72 ore per permettere il reclutamento dei linfociti T memoria, la trascrizione citochinica e l'attivazione macrofagica."
            },
            {
              id: 2,
              q: "2. Quale meccanismo di evasione consente a Mycobacterium tuberculosis di sopravvivere all'interno dei macrofagi alveolari?",
              options: [
                "A) Produzione di capsule polisaccaridiche che degradano C3b",
                "B) Inibizione della fusione tra fagosoma e lisosoma, bloccando l'acidificazione enzimatica",
                "C) Degradazione delle catene pesanti delle IgE",
                "D) Secrezione di proteasi che degradano l'antigene D del sistema Rh"
              ],
              correct: 1,
              rationale: "M. tuberculosis interferisce specificamente con il traffico vescicolare dell'ospite, bloccando la fusione tra fagosoma e lisosoma e impedendo la degradazione enzimatica dei bacilli."
            },
            {
              id: 3,
              q: "3. Quali cellule morfologiche caratteristiche si formano dalla fusione sinciziale di macrofagi attivati all'interno del granuloma tubercolare?",
              options: [
                "A) Cellule giganti multinucleate di Langhans con nuclei disposti a ferro di cavallo",
                "B) Cellule di Reed-Sternberg binucleate a specchio",
                "C) Mastociti degranulati triptasi-positivi",
                "D) Cellule dendritiche follicolari FDC del centro germinativo"
              ],
              correct: 0,
              rationale: "La stimolazione cronica con IFN-γ induce la fusione di macrofagi attivati nelle cellule giganti di Langhans, i cui nuclei si dispongono tipicamente a corona o ferro di cavallo alla periferia del citoplasma."
            },
            {
              id: 4,
              q: "4. Nella dermatite da contatto da nichel o edera velenosa, quali APC epidermiche endocitano il complesso aptene-carrier e migrano ai linfonodi?",
              options: [
                "A) Cellule di Kupffer",
                "B) Cellule di Langerhans",
                "C) Cellule M delle placche del Peyer",
                "D) Cellule endoteliali sinusoidali"
              ],
              correct: 1,
              rationale: "Le cellule di Langerhans sono le cellule dendritiche residenti dell'epidermide: catturano il complesso aptene-proteina e migrano nei linfonodi drenanti per il priming dei linfociti T."
            },
            {
              id: 5,
              q: "5. Quale patologia rappresenta il prototipo di malattia monogenica puramente autoinfiammatoria causata da mutazioni della pirina?",
              options: [
                "A) Malattia Celiaca",
                "B) Febbre Familiare Mediterranea (FMF) con iperattivazione dell'inflammasoma e di IL-1β",
                "C) Pemfigo volgare",
                "D) Sindrome di Goodpasture"
              ],
              correct: 1,
              rationale: "La Febbre Familiare Mediterranea (FMF) è una malattia autoinfiammatoria pura dell'immunità innata, causata da mutazioni del gene della pirina con produzione incontrollata di IL-1β senza autoanticorpi."
            },
            {
              id: 6,
              q: "6. Nella psoriasi, quale complesso molecolare attiva il TLR9 delle cellule dendritiche plasmacitoidi inducendo interferone di tipo I?",
              options: [
                "A) Complessi DNA self legato al peptide antimicrobico LL37",
                "B) Complessi C1q-IgM pentameriche",
                "C) Frammenti di gliadina coniugati con colesterolo",
                "D) Triptasi mastocitaria complessata con eparina"
              ],
              correct: 0,
              rationale: "Il DNA self rilasciato dai cheratinociti danneggiati viene legato da LL37, formando complessi resistenti che entrano negli endosomi delle pDC attivando TLR9 e scatenando la secrezione di IFN-I."
            },
            {
              id: 7,
              q: "7. Quale caratteristica anatomo-patologica differenzia inequivocabilmente il Morbo di Crohn dalla Colite Ulcerosa?",
              options: [
                "A) Il morbo di Crohn causa infiammazione transmurale (tutti gli strati della parete) con granulomi, mentre la colite ulcerosa è superficiale e continua",
                "B) Il morbo di Crohn colpisce solo il retto, mentre la colite ulcerosa colpisce tutto l'apparato digerente",
                "C) Il morbo di Crohn è mediato da IgE, mentre la colite ulcerosa da immunocomplessi",
                "D) La colite ulcerosa si associa a mutazioni esclusive del gene NOD2"
              ],
              correct: 0,
              rationale: "Il morbo di Crohn è caratterizzato da flogosi transmurale che attraversa tutta la parete intestinale con granulomi non caseosi e fibrosi, mentre la RCU è limitata alla mucosa superficiale del retto-colon."
            },
            {
              id: 8,
              q: "8. Quale farmaco biologico blocca selettivamente l'homing intestinale dei linfociti legando l'integrina α4β7 e impedendo l'interazione con MAdCAM-1?",
              options: [
                "A) Vedolizumab",
                "B) Omalizumab",
                "C) Dupilumab",
                "D) Adrenalina"
              ],
              correct: 0,
              rationale: "Vedolizumab è un anticorpo monoclonale che lega l'integrina α4β7 espressa dai linfociti T mucosal-homing, bloccando l'interazione con MAdCAM-1 dell'endotelio intestinale e spegnendo l'infiltrazione locale."
            },
            {
              id: 9,
              q: "9. Quale modificazione biochimica introduce la transglutaminasi tissutale (tTG) sul peptide della gliadina nella celiachia?",
              options: [
                "A) Deamina la glutammina in acido glutammico, introducendo cariche negative che legano le tasche basiche di HLA-DQ2/DQ8",
                "B) Aggiunge una molecola di galattosio terminale",
                "C) Taglia i ponti disolfuro delle catene pesanti delle IgG",
                "D) Fosforila i residui di tirosina ITAM"
              ],
              correct: 0,
              rationale: "La tTG deamina i residui di glutammina in acido glutammico: le cariche negative consentono al peptide di incastrarsi con altissima affinità nelle tasche cariche positivamente delle molecole HLA-DQ2 o DQ8."
            },
            {
              id: 10,
              q: "10. Nella celiachia, attraverso quale asse recettoriale i linfociti intraepiteliali (IEL CD8+) uccidono direttamente gli enterociti stressati?",
              options: [
                "A) Asse recettore NKG2D sui linfociti IEL e ligandi di stress MIC-A/MIC-B sugli enterociti (potenziato da IL-15)",
                "B) Recettore FcεRI e istamina",
                "C) Recettore CR1 e C3b",
                "D) Recettore Brambell FcRn a pH acido"
              ],
              correct: 0,
              rationale: "Gli enterociti stressati espongono i ligandi di stress MIC-A e MIC-B; gli IEL attivati da IL-15 esprimono il recettore attivatore NKG2D e uccidono gli enterociti inducendo atrofia dei villi."
            }
          ];

  return (
    <article className={`space-y-12 ${fontClass} ${sizeClass} text-slate-800`}>
      {/* Chapter Master Header */}
      <header className="border-b border-slate-200 pb-8 not-prose font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-100 text-amber-800 border border-amber-200">
            Lezione 28 • 03 Dicembre 2025
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
            Prof.ssa Molfetta (1ª h) & Prof.ssa Soriani (2ª h)
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            Immunità Cellulo-Mediata & Malattie Mucosali
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
          Ipersensibilità di Tipo IV, Reazioni Granulomatose, Psoriasi, IBD & Malattia Celiaca
        </h1>
        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          Trattato monografico accademico completo sui meccanismi dell'immunità cellulo-mediata T-dipendente (ipersensibilità ritardata DTH a 24–72 ore):
          dalla biologia del granuloma tubercolare (*Mycobacterium tuberculosis*, cellule di Langhans, NKT, Mantoux) e dermatite da contatto da apteni;
          allo spettro continuo tra autoinfiammazione e autoimmunità (mutazioni dell'inflammasoma FMF vs psoriasi con complessi LL37-DNA, pDC/IFN-I,
          cheratina 17 e HLA-Cw*06:02); fino alla fisiopatologia delle malattie infiammatorie croniche intestinali (Morbo di Crohn transmurale con mutazioni
          NOD2/ATG16L1 vs Colite Ulcerosa, plasticità ILC3-ILC1 e terapia di homing anti-α₄β₇/MAdCAM-1) e della Celiachia (frammento della gliadina
          a 33 aminoacidi, deaminazione da transglutaminasi tissutale tTG, genetica obbligata HLA-DQ2/DQ8, asse IL-15/NKG2D/MIC-A ed atrofia dei villi).
        </p>

        {/* Academic Meta Box */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans">
          <div>
            <span className="text-slate-600 uppercase font-semibold block">Docenti</span>
            <strong className="text-slate-800">Prof.ssa Molfetta & Prof.ssa Soriani</strong>
          </div>
          <div>
            <span className="text-slate-600 uppercase font-semibold block">Sbobinatrici</span>
            <strong className="text-slate-800">M. Aiello & A. Accarrino</strong>
          </div>
          <div>
            <span className="text-slate-600 uppercase font-semibold block">Revisionatrici</span>
            <strong className="text-slate-800">S. Campolongo & A. Cusenza</strong>
          </div>
          <div>
            <span className="text-slate-600 uppercase font-semibold block">Mediatori Cardine</span>
            <strong className="text-slate-800">Th1, Th17, CTL, IFN-γ, IL-17, IL-15</strong>
          </div>
        </div>
      </header>

      {/* 28.1 Inquadramento DTH & Differenze Tipi I-III */}
      <section id="sec-28-1" className="space-y-6">
        <div className="border-l-4 border-amber-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">Sezione 28.1</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Inquadramento dell'Ipersensibilità di Tipo IV (DTH): Risposta Cellulo-Mediata T-Dipendente
          </h2>
        </div>

        <p>
          L'<strong>ipersensibilità di Tipo IV</strong> si distingue in modo categorico da tutte le altre forme della classificazione di Gell e Coombs:
          mentre i Tipi I, II e III sono innescati e guidati dall'<strong>immunità umorale</strong> (anticorpi IgE, IgG o IgM solubili o fissati),
          il Tipo IV è l'<strong>unica forma di ipersensibilità puramente cellulo-mediata</strong>. Il danno tissutale non richiede la partecipazione
          primaria di immunoglobuline, ma è orchestrato dai <strong>linfociti T</strong> (linfociti CD4+ Th1, Th17 e linfociti CD8+ citotossici CTL),
          in stretta cooperazione con cellule dell'immunità innata (macrofagi M1) o cellule non convenzionali (NKT e linfociti T γδ).
        </p>

        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-sm font-sans space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-bold">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
            <span>Perché si Definisce "Ipersensibilità Ritardata" (DTH - Delayed-Type Hypersensitivity)?</span>
          </div>
          <p className="text-amber-800 leading-relaxed text-xs">
            Nelle reazioni di Tipo I (allergiche) i sintomi compaiono in 15–30 minuti; nei Tipi II e III in poche ore (5–8 h).
            Al contrario, nella reazione di Tipo IV la fase di scatenamento richiede un tempo marcatamente più lungo, rendendosi evidente
            dopo <strong>24–72 ore</strong> dall'incontro con l'antigene (picco tipico a 48 ore). Questo ritardo biologico è determinato dalla necessità
            di reclutare i linfociti T memoria nel tessuto periferico, avviare la sintesi trascrizionale di citochine infiammatorie (IFN-γ, TNF-α),
            e attirare e differenziare un cospicuo infiltrato di macrofagi effettori.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans text-xs pt-1">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
            <strong className="text-slate-900 block font-bold text-sm">1. Patogeni Persistenti</strong>
            <p className="text-slate-600">
              Microrganismi intracellulari difficili da eliminare (es. <em>Mycobacterium tuberculosis</em>). La risposta immunitaria cronica
              li confina in strutture granulomatose: il danno d'organo polmonare non è causato da tossine batteriche, ma dall'infiammazione T-mediata.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
            <strong className="text-slate-900 block font-bold text-sm">2. Antigeni Ambientali Innocui</strong>
            <p className="text-slate-600">
              Apteni chimici (nichel, cromo, resine, veleno d'edera). La risposta cellulo-mediata è inappropriata e genera una dermatite da contatto (eczema).
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
            <strong className="text-slate-900 block font-bold text-sm">3. Autoantigeni Self</strong>
            <p className="text-slate-600">
              Rottura della tolleranza centrale o periferica con attivazione di cloni T autoreattivi contro tessuti propri (es. psoriasi, diabete tipo 1, sclerosi multipla).
            </p>
          </div>
        </div>
      </section>

      {/* 28.2 Fasi della Risposta: Priming vs Fase Effettrice */}
      <section id="sec-28-2" className="space-y-6">
        <div className="border-l-4 border-amber-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">Sezione 28.2</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Dinamica Bifasica: Priming nei Linfonodi Drenanti vs Fase Effettrice Tissutale
          </h2>
        </div>

        <p>
          Come sottolineato dalla Prof.ssa Molfetta, ogni reazione di ipersensibilità di Tipo IV si articola obbligatoriamente in due momenti sequenziali:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Fase 1: Induzione e Priming (Primo Incontro con l'Antigene)</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              L'antigene (o aptene-carrier) penetra attraverso la barriera epiteliale compromessa e viene fagocitato dalle cellule presentanti l'antigene
              residenti (cellule dendritiche dermiche o cellule di Langerhans dell'epidermide). Le APC migrano attraverso i vasi linfatici afferenti
              verso i <strong>linfonodi drenanti</strong>, dove presentano i peptidi antigenici su molecole <strong>MHC di Classe II</strong> (ai CD4+)
              e <strong>MHC di Classe I</strong> (ai CD8+). I linfociti T vergini vanno incontro a proliferazione ed espansione clonale, differenziandosi
              in <strong>linfociti T effettori e cellule T memoria</strong>. Questa fase è clinicamente asintomatica e richiede 1–2 settimane.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
              <Flame className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Fase 2: Fase Effettrice & Scatenamento (Secondo Incontro)</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              In seguito a riesposizione all'antigene, i linfociti T memoria circolanti vengono attirati nel tessuto periferico dalle chemochine locali.
              Al contatto con l'antigene ri-presentato dalle APC o dalle cellule tissutali, i linfociti T effettori rilasciano un'ondata di citochine pro-infiammatorie:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li><strong>IFN-γ e TNF-α (da Th1):</strong> Attivazione classica dei macrofagi (fenotipo M1) con produzione di ROS, NO e citochine infiammatorie.</li>
              <li><strong>IL-17 e IL-22 (da Th17):</strong> Reclutamento di neutrofili ed iperproliferazione cheratinocitaria.</li>
              <li><strong>Perforina e Granzimi (da CTL CD8+):</strong> Lisi citotossica diretta delle cellule bersaglio infette o modificate dall'aptene.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 28.3 Reazione Granulomatosa & Tubercolosi */}
      <section id="sec-28-3" className="space-y-6">
        <div className="border-l-4 border-amber-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">Sezione 28.3</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            La Reazione Granulomatosa: Tubercolosi, Sopravvivenza Intrafagolisosomiale & Cellule di Langhans
          </h2>
        </div>

        <p>
          Il paradigma clinico e biologico più celebre di DTH sostenuta da patogeni persistenti è l'infezione da <strong>Mycobacterium tuberculosis</strong>.
          Il bacillo di Koch penetra per via aerea negli alveoli polmonari e viene prontamente fagocitato dai macrofagi alveolari.
          Tuttavia, il micobatterio ha sviluppato un meccanismo evolutivo di evasione: <strong>inibisce la fusione tra fagosoma e lisosoma</strong>,
          bloccando l'acidificazione e impedendo la degradazione enzimatica.
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-3">
          <strong className="text-slate-900 text-sm block font-bold">L'Asse di Attivazione Reciproca Macrofago-Th1 & la Genesi del Granuloma</strong>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li>
              I macrofagi infetti riconoscono i PAMPs micobatterici tramite TLR2/TLR4 e secernono <strong>IL-12</strong> e ossido nitrico (NO).
            </li>
            <li>
              L'IL-12 attiva i linfociti T helper vergini differenziandoli in <strong>linfociti Th1</strong>, i quali producono massicce dosi di{' '}
              <strong>IFN-γ</strong> e up-regolano sulla propria superficie il ligando costimolatorio <strong>CD40L (CD154)</strong>.
            </li>
            <li>
              Il legame <strong>CD40–CD40L</strong> associato all'IFN-γ induce l'attivazione classica dei macrofagi in senso <strong>M1</strong>,
              stimolando la produzione di radicali liberi dell'ossigeno (burst ossidativo).
            </li>
            <li>
              Nonostante la massima attivazione, il micobatterio resiste all'eliminazione completa. L'attivazione reciproca persistente tra macrofagi e linfociti T
              si cronicizza, inducendo profonde modificazioni morfologiche dei macrofagi:
              <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-slate-600">
                <li><strong>Cellule Epitelioidi:</strong> Macrofagi ingranditi con abbondante citoplasma eosinofilo chiaro e contorni interdigitati, specializzati nella secrezione citochinica.</li>
                <li><strong>Cellule Giganti Multinucleate di Langhans:</strong> Fusione sinciziale di molteplici macrofagi attivati, con nuclei disposti a ferro di cavallo alla periferia della cellula.</li>
              </ul>
            </li>
            <li>
              L'agglomerato concentrico di cellule epitelioidi, cellule giganti di Langhans, fibroblasti secernenti collagene alla periferia e un orletto
              di linfociti T CD4+ e CD8+ forma il <strong>granuloma tubercolare</strong>, il cui centro va incontro a necrosi da ipossia e tossicità cellulare (<strong>necrosi caseosa</strong>).
            </li>
          </ol>
        </div>

        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 font-sans text-xs space-y-2">
          <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
            <Info className="w-4 h-4 text-blue-700 shrink-0" />
            <span>Natura a Doppio Taglio del Granuloma & la Tragedia dell'AIDS</span>
          </div>
          <p className="text-blue-900/90 leading-relaxed">
            Il granuloma è primariamente una <strong>struttura protettiva</strong>: murando il micobatterio al proprio interno, ne impedisce la replicazione
            e la disseminazione sistemica, mantenendo l'infezione in uno stato di <strong>latenza asintomatica nel 90% degli individui sani</strong>.
            Tuttavia, la formazione massiva di granulomi fibrotici compromette l'architettura elastica degli alveoli polmonari e gli scambi gassosi.
          </p>
          <p className="text-blue-900/90 leading-relaxed">
            La Prof.ssa Molfetta richiama l'attenzione storica sul riesplodere drammatico della tubercolosi con la pandemia di <strong>AIDS</strong>:
            l'HIV uccide selettivamente i <strong>linfociti T CD4+</strong>. Privi della guida citochinica dei Th1 (IFN-γ e CD40L), i macrofagi non riescono
            a formare o mantenere i granulomi. Il micobatterio si "risveglia", diventa altamente virulento, evade dal polmone e dissemina per via ematogena
            provocando tubercolosi miliare e localizzazioni extrapolate distruttive (es. renale, meningea, scheletrica).
          </p>
        </div>
      </section>

      {/* 28.4 Cellule Non Classiche & Test di Mantoux */}
      <section id="sec-28-4" className="space-y-6">
        <div className="border-l-4 border-amber-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">Sezione 28.4</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Cellule Non Classiche nel Granuloma (NKT, γδ, CTL) & Diagnostica con Test di Mantoux
          </h2>
        </div>

        <p>
          La risposta immunitaria non funziona a compartimenti stagni. Nel contesto del granuloma tubercolare cooperano diverse popolazioni effettrici:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans text-xs">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
            <strong className="text-purple-900 block font-bold text-sm">Linfociti CTL CD8+</strong>
            <p className="text-slate-600">
              Antigeni proteici micobatterici che sfuggono al fagolisosoma entrano nel citoplasma e vengono presentati su molecole MHC di Classe I.
              I CTL rilasciano <strong>perforina</strong> e <strong>granulisina</strong> (capace di penetrare la parete cerosa dei micobatteri), uccidendo i macrofagi infetti.
            </p>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
            <strong className="text-emerald-900 block font-bold text-sm">Cellule NKT (CD1b)</strong>
            <p className="text-slate-600">
              Riconoscono <strong>antigeni lipidici esogeni</strong> (acidi micolici della parete micobatterica) presentati dalla molecola non polimorfa{' '}
              <strong>CD1b</strong>. Una volta attivate, rilasciano citochine ed esercitano citotossicità diretta.
            </p>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
            <strong className="text-rose-900 block font-bold text-sm">Linfociti T γδ</strong>
            <p className="text-slate-600">
              Riconoscono <strong>fosfoantigeni</strong> o molecole di stress cellulare indipendentemente da MHC, lisando selettivamente i macrofagi senescenti o danneggiati.
            </p>
          </div>
        </div>

        {/* Test di Mantoux */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs font-sans text-xs space-y-2">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
            <Syringe className="w-4 h-4 text-rose-600 shrink-0" />
            <span>Il Test di Mantoux (Intradermoreazione alla Tubercolina PPD)</span>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Il modo più classico per diagnosticare un'infezione (anche pregressa e latente) da micobatterio è il <strong>test di Mantoux</strong>.
            Si inietta nel derma dell'avambraccio una frazione purificata di proteine micobatteriche denominata <strong>PPD (Purified Protein Derivative)</strong>.
            Se il soggetto è già stato immunizzato (infezione naturale pregressa o vaccinazione BCG), i linfociti Th1 memoria migrano nel sito di inoculo.
          </p>
          <p className="text-slate-700 leading-relaxed">
            La lettura si esegue rigorosamente a <strong>48–72 ore</strong> (il tempo tipico della DTH). La reazione positiva si manifesta con un{' '}
            <strong>ponfo edematoso e indurito</strong> (infiltrato di macrofagi e linfociti T, non semplice eritema). Un'indurazione ≥10 mm indica positività,
            attestando l'avvenuto priming cellulo-mediato verso il micobatterio.
          </p>
        </div>
      </section>

      {/* 28.5 Dermatite da Contatto */}
      <section id="sec-28-5" className="space-y-6">
        <div className="border-l-4 border-amber-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">Sezione 28.5</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Dermatite da Contatto (Eczema da Contatto): Apteni, Cellule di Langerhans & Patch Test
          </h2>
        </div>

        <p>
          Un'altra importantissima manifestazione clinica di Tipo IV è la <strong>dermatite allergica da contatto</strong> (o eczema da contatto).
          La docente sottolinea una distinzione fondamentale per gli studenti di medicina: la dermatite da contatto <strong>non ha nulla a che fare
          con la dermatite atopica</strong> (che è una reazione di Tipo I mediata da IgE).
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-2">
          <strong className="text-slate-900 text-sm block font-bold">Fisiopatologia della Sensibilizzazione da Apteni Cutanei</strong>
          <p className="text-slate-700 leading-relaxed">
            Le sostanze scatenanti sono <strong>apteni</strong> a basso peso molecolare privi di immunogenicità autonoma (ioni metallici come il{' '}
            <strong>nichel</strong> di bigiotteria e bottoni, sali di cromo del cuoio, derivati della gomma, cosmetici, tinture per capelli o veleni vegetali
            come l'urushiolo dell'<strong>edera velenosa</strong>).
          </p>
          <ol className="list-decimal list-inside space-y-1.5 text-slate-700">
            <li>
              <strong>Condizione Necessaria — Barriera Epiteliale Danneggiata:</strong> Senza una micro-lesione meccanica o chimica dello strato corneo,
              gli apteni non possono penetrare. La barriera compromessa è l'innesco obbligato.
            </li>
            <li>
              <strong>Formazione del Complesso Aptene-Carrier:</strong> Penetrato nell'epidermide, l'aptene si lega covalentemente alle lisine o cisteine
              delle proteine self endogene, trasformandosi in un neoantigene immunogeno completo.
            </li>
            <li>
              <strong>Cattura da parte delle Cellule di Langerhans:</strong> Le cellule dendritiche dell'epidermide (cellule di Langerhans) endocitano
              il complesso aptene-proteina e migrano ai linfonodi drenanti, attivando linfociti CD4+ Th1 e CTL CD8+.
            </li>
            <li>
              <strong>Fase Effettrice (48 ore):</strong> Al nuovo contatto, i linfociti Th1 rilasciano <strong>IFN-γ</strong> nell'epidermide, stimolando
              i cheratinociti a secernere chemochine per macrofagi. Nelle forme gravi (dermatite da contatto vescicolare), i CTL CD8+ e gli enzimi macrofagici
              lisano direttamente i cheratinociti, provocando distacco dermo-epidermico con formazione di vescicole sierose, desquamazione e prurito intenso.
            </li>
          </ol>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs">
          <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
            <strong className="text-slate-900 block font-bold">Presentazione Lipidica via CD1a & Asse IL-17/IL-22</strong>
            <p className="text-slate-600">
              Nel caso dell'edera velenosa (urushiolo), le componenti lipidiche possono essere presentate direttamente dalle molecole <strong>CD1a</strong>{' '}
              a linfociti T lipidici, che producono <strong>IL-17 e IL-22</strong>, rendendo la lesione eczematosa ipercheratosica e complessa.
            </p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
            <strong className="text-slate-900 block font-bold">Diagnostica con Patch Test (Cerotti Epicutanei)</strong>
            <p className="text-slate-600">
              Si applicano sulla cute del dorso dischetti di alluminio contenenti tracce dei presunti apteni per 48 ore. La comparsa a <strong>48–72 ore</strong>{' '}
              di un'area eritemato-vescicolare pruriginosa riproduce la reazione ritardata DTH confermando l'allergene responsabile.
            </p>
          </div>
        </div>
      </section>

      {/* 28.6 Spettro Autoinfiammazione vs Autoimmunità */}
      <section id="sec-28-6" className="space-y-6">
        <div className="border-l-4 border-amber-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">Sezione 28.6</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Lo Spettro Continuo tra Autoinfiammazione ed Autoimmunità
          </h2>
        </div>

        <p>
          La Prof.ssa Molfetta introduce una fondamentale revisione concettuale: le patologie croniche immunomediate non sono divise in blocchi rigidi,
          ma si distribuiscono lungo un <strong>continuum (spettro di Dan Kastner e McGonagle)</strong> tra due estremi fisiopatologici:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 space-y-2">
            <div className="flex items-center gap-2 text-orange-950 font-bold text-sm">
              <Flame className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Autoinfiammazione (Dominio dell'Immunità Innata)</span>
            </div>
            <p className="text-orange-900 leading-relaxed">
              Attivazione anomala, spontanea e non controllata delle cellule e dei recettori dell'<strong>immunità innata</strong> (macrofagi, neutrofili,
              inflammasomi) che si automantiene attraverso loop di amplificazione a feedback positivo, <strong>in totale assenza di antigeni specifici,
              linfociti T o B autoreattivi o autoanticorpi</strong>.
            </p>
            <p className="text-orange-950 font-semibold m-0">
              Esempi Monogenici Puri: Febbre Familiare Mediterranea (FMF, mutazione del gene <em>MEFV</em> che codifica per la pirina con iperattivazione
              dell'inflammasoma e tempesta di IL-1β) e sindromi periodiche CAPS.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 space-y-2">
            <div className="flex items-center gap-2 text-purple-950 font-bold text-sm">
              <ShieldAlert className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Autoimmunità (Dominio dell'Immunità Adattativa)</span>
            </div>
            <p className="text-purple-900 leading-relaxed">
              Risposta immunitaria mediata da <strong>linfociti T (CD4+/CD8+) o linfociti B clonali specificamente indirizzati contro autoantigeni self</strong>{' '}
              a seguito della rottura della tolleranza immunologica (presenza di autoanticorpi sierici ad alta specificità o TCR autoreattivi).
            </p>
            <p className="text-purple-950 font-semibold m-0">
              Esempi: Malattia Celiaca (antigene alimentare glutine + autoanticorpi anti-tTG/EMA), Lupus Eritematoso Sistemico (LES), Diabete di Tipo 1.
            </p>
          </div>
        </div>

        <p className="text-slate-700">
          La quasi totalità delle malattie più diffuse nella popolazione sono <strong>patologie multifattoriali a cavallo</strong>, in cui un evento
          trigger autoinfiammatorio iniziale dell'immunità innata rompe la tolleranza e recluta secondariamente linfociti T autoreattivi adattativi:
          l'esempio cardine esaminato è la <strong>psoriasi</strong>.
        </p>
      </section>

      {/* 28.7 Psoriasi: Modello a Cavallo */}
      <section id="sec-28-7" className="space-y-6">
        <div className="border-l-4 border-amber-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">Sezione 28.7</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            La Psoriasi: Danno Epidermico, Complessi LL37-DNA, HLA-Cw*06:02 & Terapie Target
          </h2>
        </div>

        <p>
          La psoriasi è una malattia eritemato-desquamativa cronica della cute caratterizzata da un'iperproliferazione abnorme dei cheratinociti
          stimolati continuamente da citochine infiammatorie, associata a neovascolarizzazione angiogenica e neuroinfiammazione.
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-3">
          <strong className="text-slate-900 text-sm block font-bold">La Cascata Patogenetica Completa della Placca Psoriasica</strong>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li>
              <strong>Trigger Iniziale (Danno ai Cheratinociti):</strong> Traumi meccanici (fenomeno di Koebner), radiazioni UV, fumo o stress psicologico.
              Lo stress attiva l'asse ipotalamo-ipofisi-surrene (HPA), liberando corticotropina e neurotrasmettitori periferici: si instaura una{' '}
              <strong>neuroinfiammazione</strong> con *crosstalk* reciproco tra terminazioni nervose e mastociti cutanei, che rilasciano EGF e fattori angiogenici.
            </li>
            <li>
              <strong>Rilascio di DNA Self & Complessi con il Peptide LL37:</strong> I cheratinociti danneggiati lisano e rilasciano frammenti di DNA e RNA self.
              Il peptide antimicrobico <strong>LL37 (catelicidina)</strong> si lega avidamente al DNA self formando complessi insolubili protetti dalla degradazione.
            </li>
            <li>
              <strong>Attivazione delle Cellule Dendritiche Plasmacitoidi (pDC):</strong> I complessi LL37-DNA penetrano per endocitosi nelle pDC e attivano il{' '}
              <strong>TLR9 endosomiale</strong>. Le pDC secernono quantità massive di <strong>interferone di tipo I (IFN-α/β)</strong>.
            </li>
            <li>
              <strong>Attivazione delle cDC & Differenziamento Th1 / Th17:</strong> L'IFN-I attiva le cellule dendritiche classiche mieloidi (cDC), che producono{' '}
              <strong>IL-12</strong> e <strong>IL-23</strong>, polarizzando cloni T verso il profilo <strong>Th1 (IFN-γ)</strong> e soprattutto <strong>Th17 (IL-17A, IL-17F, IL-22)</strong>.
            </li>
            <li>
              <strong>Iperproliferazione dei Cheratinociti & Loop Infiammatorio:</strong> IL-17 e IL-22 stimolano i cheratinociti a proliferare a dismisura,
              inibiscono la corretta maturazione epidermica (paracheratosi, desquamazione argentea) e inducono i cheratinociti stessi a produrre chemochine
              (CXCL8 per neutrofili) e ulteriore peptide LL37, alimentando un loop continuo a feedback positivo.
            </li>
          </ol>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900">Gli Autoantigeni della Psoriasi & la Genetica HLA</h3>
          <p>La transizione verso la risposta autoimmune conclamata coinvolge specifici autoantigeni identificati:</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans text-xs">
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
              <strong className="text-rose-900 block font-bold">1. Cheratina 17 & Mimetismo</strong>
              <p className="text-slate-600">
                La proteina M dello <em>Streptococcus pyogenes</em> presenta forte omologia di sequenza con la cheratina 17 dei cheratinociti.
                Peptidi di cheratina 17 vengono presentati preferenzialmente dall'allele <strong>HLA-Cw*06:02 (HLA-C)</strong>, spiegando perché
                questo aplotipo aumenti di oltre 10 volte il rischio di psoriasi.
              </p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
              <strong className="text-blue-900 block font-bold">2. ADAMTS-L5</strong>
              <p className="text-slate-600">
                Metalloproteasi espressa dai melanociti che attiva linfociti T citotossici CD8+ autoreattivi capaci di aggredire e lisare i cheratinociti basali.
              </p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
              <strong className="text-emerald-900 block font-bold">3. Lipidi da PLA2G4D & CD1a</strong>
              <p className="text-slate-600">
                L'isoforma fosfolipasi A2 (PLA2G4D) attivata nei cheratinociti e mastociti produce antigeni lipidici self rilasciati in microvescicole
                e presentati da molecole <strong>CD1a</strong> a cellule T lipidiche che secernono IL-17 e IL-22.
              </p>
            </div>
          </div>
        </div>

        {/* Terapie Biologiche nella Psoriasi */}
        <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 font-sans text-xs space-y-2">
          <div className="flex items-center gap-2 text-purple-900 font-bold text-sm">
            <Zap className="w-4 h-4 text-purple-700 shrink-0" />
            <span>La Rivoluzione dei Farmaci Biologici nella Psoriasi Moderata-Severa</span>
          </div>
          <p className="text-purple-950 leading-relaxed">
            La comprensione molecolare della cascata ha permesso di sviluppare una terapia biologica di straordinaria efficacia:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            <div className="p-2 bg-white rounded border border-purple-200">
              <strong className="text-purple-900 block">Anti-IL-17:</strong>
              <span>Secukinumab, Ixekizumab (bloccano IL-17A), Bimekizumab (anti-IL-17A/F)</span>
            </div>
            <div className="p-2 bg-white rounded border border-purple-200">
              <strong className="text-purple-900 block">Anti-IL-17RA:</strong>
              <span>Brodalumab (blocca il recettore di IL-17)</span>
            </div>
            <div className="p-2 bg-white rounded border border-purple-200">
              <strong className="text-purple-900 block">Anti-IL-23:</strong>
              <span>Guselkumab, Risankizumab, Tildrakizumab (bloccano la p19 di IL-23); Ustekinumab (anti-p40 IL-12/23)</span>
            </div>
            <div className="p-2 bg-white rounded border border-purple-200">
              <strong className="text-purple-900 block">Inibitori JAK-STAT:</strong>
              <span>Piccole molecole (Tofacitinib, Deucravacitinib inibitore selettivo TYK2)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 28.8 Malattie Intestinali (IBD: Crohn vs RCU) */}
      <section id="sec-28-8" className="space-y-6">
        <div className="border-l-4 border-emerald-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-emerald-700 tracking-wider">Sezione 28.8</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Malattie Infiammatorie Croniche Intestinali (IBD): Morbo di Crohn vs Colite Ulcerosa
          </h2>
        </div>

        <p>
          Nella seconda ora di lezione, la Prof.ssa Soriani affronta le patologie infiammatorie croniche dell'intestino (<strong>IBD - Inflammatory Bowel Disease</strong>),
          tipiche dei Paesi industrializzati ad elevata incidenza. Le IBD racchiudono due entità anatomo-cliniche distinte:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
              <Layers className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Morbo di Crohn (Enterite Regionale)</span>
            </div>
            <ul className="list-disc list-inside space-y-1.5 text-slate-700">
              <li><strong>Sede:</strong> Può interessare qualsiasi tratto del canale alimentare dalla bocca all'ano, ma predilige l'<strong>ileo terminale e il colon</strong>.</li>
              <li><strong>Distribuzione:</strong> Segmentaria e discontinuare (lesioni "a salto" intervallate da mucosa sana).</li>
              <li><strong>Profondità della Flogosi:</strong> Infiammazione <strong>transmurale</strong> che interessa tutti gli strati della parete (epitelio, lamina propria, sottomucosa fino alla tonaca muscolare e sierosa).</li>
              <li><strong>Istologia Tipica:</strong> Presenza nel 50% dei casi di <strong>granulomi non caseosi</strong> e marcata <strong>fibrosi sottomucosa</strong> che conduce a complicanze stenosanti ed ulcerative profonde (fissurazioni e fistole entero-cutanee o entero-enteriche).</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
              <Droplets className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Colite Ulcerosa (RCU)</span>
            </div>
            <ul className="list-disc list-inside space-y-1.5 text-slate-700">
              <li><strong>Sede:</strong> Rigorosamente limitata al <strong>colon e retto</strong>, senza mai estendersi all'intestino tenue.</li>
              <li><strong>Distribuzione:</strong> Continua a partire dal retto, estendendosi in direzione prossimale senza aree di salto.</li>
              <li><strong>Profondità della Flogosi:</strong> Infiammazione <strong>superficiale</strong> limitata alla mucosa e alla sottomucosa superficiale.</li>
              <li><strong>Istologia Tipica:</strong> Assenza assoluta di granulomi; marcata <strong>distorsione delle cripte ghiandolari</strong>, microascessi criptici neutrofili, ulcerazioni sanguinanti estese e pseudopolipi infiammatori.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 28.9 Disbiosi, Barriera Epiteliale, Genetica IBD & Vedolizumab */}
      <section id="sec-28-9" className="space-y-6">
        <div className="border-l-4 border-emerald-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-emerald-700 tracking-wider">Sezione 28.9</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Disbiosi, Genetica dell'Autofagia (NOD2/ATG16L1) & Terapia di Homing (Vedolizumab)
          </h2>
        </div>

        <p>
          L'evento scatenante primario delle IBD è la rottura dell'omeostasi tra ospite e microbiota luminale (<strong>disbiosi</strong>):
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-2">
          <strong className="text-slate-900 text-sm block font-bold">Il Ruolo Protettivo dei Batteri Commensali Sani (Eubiosi)</strong>
          <p className="text-slate-700 leading-relaxed">
            I commensali sani possiedono un LPS a bassissima endotossicità, non invadono l'epitelio e vengono trattenuti nel muco. Producono metaboliti
            fondamentali: gli <strong>acidi grassi a catena corta (SCFA come il butirrato)</strong> stimolano le cellule dendritiche a divenire tollerogeniche
            e inducono linfociti T regolatori Foxp3+ secernenti IL-10; i derivati del triptofano legano il recettore AhR attivando le cellule linfoidi
            innate <strong>ILC3</strong> che secernono <strong>IL-22</strong>, rinforzando le giunzioni occludenti (<em>tight junctions</em>) e la produzione di defensine;
            l'acido retinoico guida lo switch alle <strong>IgA secretorie</strong>.
          </p>
          <div className="p-2.5 bg-rose-50 rounded border border-rose-200 text-rose-950 font-semibold">
            In Disbiosi: Crollano le tight junctions, i batteri luminali traslocano nella lamina propria. I macrofagi residenti, che normalmente secernono
            IL-10 e non fanno burst ossidativo, si polarizzano in senso <strong>M1 infiammatorio</strong> secernendo IL-12 e IL-23.
            Le <strong>ILC3 trans-differenziano plasticamente in ILC1</strong> produttrici di IFN-γ, mentre i Th17 secernono IL-17 che recluta massicce
            ondate di neutrofili N1 distruttivi.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <strong className="text-slate-900 block font-bold text-sm">Genetica Specifica di Crohn: Il Difetto di Autofagia</strong>
            <p className="text-slate-700 leading-relaxed">
              Mentre mutazioni nei pathway IL-23R, JAK/STAT e TNF sono comuni a entrambe le IBD, il morbo di Crohn è caratterizzato da mutazioni
              dei geni deputati all'eliminazione dei batteri intracellulari negli enterociti:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li><strong>Gene NOD2:</strong> Codifica per un recettore citosolico che riconosce il muramil-dipeptide (MDP) della parete batterica e attiva l'autofagia protettiva.</li>
              <li><strong>Gene ATG16L1 & IRGM:</strong> Fattori essenziali dell'autofagosoma che ingloba e degrada i batteri penetrati.</li>
            </ul>
            <p className="text-slate-600 italic m-0">
              Se NOD2 o ATG16L1 sono mutati, l'enterocita non riesce a degradare i batteri intracellulari via autofagia: i batteri persistono e scatenano un'infiammazione transmurale cronica.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <strong className="text-slate-900 block font-bold text-sm">Blocco Selettivo dell'Homing Intestinale: Vedolizumab</strong>
            <p className="text-slate-700 leading-relaxed">
              Durante il priming nelle placche del Peyer e nei linfonodi mesenterici, i linfociti attivati esprimono il recettore di homing mucosale{' '}
              <strong>integrina α4β7</strong>. Nel circolo sanguigno, l'integrina α4β7 lega specificamente la molecola di adesione{' '}
              <strong>MAdCAM-1</strong> espressa in modo selettivo dall'endotelio venulare della lamina propria intestinale.
            </p>
            <p className="text-slate-700 leading-relaxed">
              L'anticorpo monoclonale <strong>Vedolizumab</strong> (anti-integrina α4β7) blocca selettivamente l'adesione e l'extravasazione dei leucociti
              nel tratto gastrointestinale senza indurre immunosoppressione sistemica: una pietra miliare della terapia target delle IBD.
            </p>
          </div>
        </div>
      </section>

      {/* 28.10 Celiachia: Gliadina, tTG, HLA-DQ2/8 & Asse NKG2D */}
      <section id="sec-28-10" className="space-y-6">
        <div className="border-l-4 border-emerald-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-emerald-700 tracking-wider">Sezione 28.10</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            La Malattia Celiaca: Gliadina a 33-mer, Transglutaminasi tTG, HLA-DQ2/DQ8 & Asse Citotossico IL-15/NKG2D
          </h2>
        </div>

        <p>
          A differenza delle IBD che sono primariamente autoinfiammatorie e guidate dall'immunità innata, la <strong>celiachia</strong> è una
          malattia autoimmune e infiammatoria cronica dell'intestino tenue innescata da un antigene alimentare non patogeno: il <strong>glutine</strong>{' '}
          (frazioni proteiche di <strong>gliadina</strong> e <strong>glutenina</strong> del frumento, orzo e segale).
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-3">
          <strong className="text-slate-900 text-sm block font-bold">La Cascata Immunopatogenetica Molecolare della Celiachia</strong>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li>
              <strong>Resistenza Enzimatica del Peptide 33-mer:</strong> La gliadina è straordinariamente ricca degli aminoacidi <strong>prolina e glutammina</strong>.
              Gli enzimi proteolitici gastrici e pancreatici umani non possiedono endopeptidasi capaci di scindere i legami prolina-prolina:
              rimane un frammento intatto indigeribile lungo <strong>33 aminoacidi (33-mer della α-gliadina)</strong>.
            </li>
            <li>
              <strong>Attraversamento della Barriera Epiteliale:</strong> In condizioni di permeabilità aumentata (indotta da disbiosi o infezioni virali),
              il peptide 33-mer supera le tight junctions e raggiunge la lamina propria sottomucosa.
            </li>
            <li>
              <strong>Deaminazione da parte della Transglutaminasi Tissutale (tTG):</strong> L'enzima <strong>tTG</strong> cliva i residui di glutammina
              della gliadina trasformandoli in <strong>acido glutammico carico negativamente</strong>.
            </li>
            <li>
              <strong>Presentazione Obbligata su HLA-DQ2 o HLA-DQ8:</strong> Le cariche negative dell'acido glutammico si incastrano con perfetta complementarità
              elettrostatica nelle tasche basiche cariche positivamente delle molecole MHC di Classe II <strong>HLA-DQ2</strong> (95% dei celiaci) o{' '}
              <strong>HLA-DQ8</strong> (5% dei celiaci).
              <div className="p-2 mt-1 bg-amber-50 rounded border border-amber-200 text-amber-950 font-semibold">
                Dogma Genetico: Se un individuo non possiede né HLA-DQ2 né HLA-DQ8, <strong>non presenterà mai la gliadina deaminata</strong> ai linfociti T
                e non potrà MAI sviluppare la celiachia (Valore Predittivo Negativo &gt;99%). Chi possiede tali alleli ha predisposizione necessaria ma non sufficiente.
              </div>
            </li>
            <li>
              <strong>Attivazione dei Linfociti T CD4+ Th1:</strong> I linfociti T specifici riconoscono il peptide e rilasciano massicce dosi di <strong>IFN-γ</strong>.
              Contemporaneamente, stimolano i linfociti B a produrre <strong>anticorpi anti-gliadina (AGA), anti-transglutaminasi (anti-tTG IgA/IgG)</strong> e{' '}
              <strong>anti-endomisio (EMA)</strong>.
            </li>
            <li>
              <strong>L'Asse Citotossico Intraepiteliale (IL-15 & NKG2D):</strong> L'IFN-γ e i peptidi di gliadina stimolano gli enterociti a produrre{' '}
              <strong>Interleuchina-15 (IL-15)</strong>, che sopprime il TGF-β regolatorio e attiva potentemente i <strong>linfociti intraepiteliali (IEL CD8+)</strong>.
              Gli enterociti stressati up-regolano sulla membrana i ligandi di stress <strong>MIC-A e MIC-B</strong>.
              Gli IEL, armati del recettore attivatore <strong>NKG2D</strong> stimolato da IL-15, riconoscono MIC-A/B e <strong>uccidono direttamente gli enterociti</strong>{' '}
              tramite perforina/granzima e pathway FAS/FAS-Ligando.
            </li>
            <li>
              <strong>Esito Patologico Irreversibile Senza Dieta:</strong> Lisi massiva degli enterociti con <strong>atrofia totale dei villi intestinali</strong>,
              iperplasia rigenerativa delle cripte ghiandolari, infiltrato massivo di IEL (&gt;25 IEL per 100 enterociti), con conseguente sindrome da grave malassorbimento cronico, diarrea e calo ponderale.
            </li>
          </ol>
        </div>

        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 font-sans text-xs space-y-2">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
            <span>Terapia Attuale & Prospettive Biotecnologiche</span>
          </div>
          <p className="text-emerald-950 leading-relaxed">
            L'unica terapia validata ad oggi è la <strong>dieta aglutinata (gluten-free) rigorosa e permanente a vita</strong>: in assenza dell'antigene alimentare,
            la cascata si spegne completamente e i villi intestinali si rigenerano.
            Le frontiere biotecnologiche esplorano lo sviluppo di frumento geneticamente modificato privo del peptide 33-mer, inibitori farmacologici della
            transglutaminasi tissutale tTG ed endopeptidasi orali capaci di degradare il glutine prima che raggiunga l'intestino tenue.
          </p>
        </div>
      </section>

      {/* SIMULATOR 1: Type IV Hypersensitivity & Psoriasis Lab */}
      <section id="sim-type4-psoriasis-lab" className="space-y-6 pt-4 not-prose font-sans">
        <div className="border-l-4 border-amber-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">Simulatore Interattivo 1</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Laboratorio DTH & Psoriasi: Architettura del Granuloma vs Placca Psoriasica (LL37-DNA & Biologici)
          </h2>
        </div>

        <p className="text-slate-700 text-sm">
          Esplora la dinamica cellulo-mediata della DTH: simula il confinamento del micobatterio tubercolare nel granuloma e l'effetto della deplezione di CD4+
          nell'AIDS, oppure sperimenta la cascata autoinfiammatoria-autoimmune della psoriasi modulando trigger ambientali e farmaci biologici mirati.
        </p>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-6">
          {/* Sub-tab selection */}
          <div className="flex gap-2 border-b border-slate-200 pb-3">
            <button
              onClick={() => setActiveSim1Tab('granuloma')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeSim1Tab === 'granuloma'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Modulo 1: Granuloma Tubercolare & Rischio AIDS
            </button>
            <button
              onClick={() => setActiveSim1Tab('psoriasis')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeSim1Tab === 'psoriasis'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Modulo 2: Placca Psoriasica & Farmaci Biologici
            </button>
          </div>

          {activeSim1Tab === 'granuloma' ? (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">Stadio di Infezione da M. tuberculosis</span>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { id: 'early_phagosome', label: '1. Invasione Fagolisosoma (Blocco Fusione)' },
                      { id: 'm1_langhans', label: '2. Asse IL-12/IFN-γ, Cellule di Langhans' },
                      { id: 'caseous_granuloma', label: '3. Granuloma Maturo con Necrosi Caseosa' }
                    ].map((st) => (
                      <button
                        key={st.id}
                        onClick={() => setTbStage(st.id as any)}
                        className={`p-2 rounded-lg text-xs font-bold border text-left transition-all ${
                          tbStage === st.id
                            ? 'bg-amber-700 text-white border-amber-800'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">Conta Linfociti T CD4+ del Paziente</span>
                  <input
                    type="range"
                    min={50}
                    max={1200}
                    step={50}
                    value={cd4Count}
                    onChange={(e) => setCd4Count(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-amber-600"
                  />
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Valore: <strong>{cd4Count} cellule/µL</strong></span>
                    <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                      cd4Count < 200 ? 'bg-red-100 text-red-800' : cd4Count < 500 ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {cd4Count < 200 ? 'Quadro AIDS Conclamato' : cd4Count < 500 ? 'Immunodeficienza Moderata' : 'Immunità Competente'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Real-time Pathology Readout */}
              <div className={`p-4 rounded-xl border text-xs space-y-2 ${
                cd4Count < 200
                  ? 'bg-red-50 border-red-300 text-red-950'
                  : 'bg-slate-50 border-slate-200 text-slate-800'
              }`}>
                <div className="flex items-center gap-2 font-bold text-sm">
                  {cd4Count < 200 ? (
                    <>
                      <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                      <span>Collasso del Granuloma & Disseminazione Tubercolare Miliare</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Confinamento Efficace nel Granuloma (Infezione Latente Asintomatica)</span>
                    </>
                  )}
                </div>
                <p className="leading-relaxed m-0">
                  {cd4Count < 200
                    ? `Con conta CD4+ inferiore a 200 cellule/µL tipica dell'AIDS, i macrofagi non ricevono stimolo citochinico (IFN-γ) e costimolatorio (CD40L). Il granuloma si disgrega: il micobatterio riprende la replicazione ed invade il torrente ematico con tubercolosi miliare renale, meningea ed ossea letale.`
                    : `I linfociti Th1 forniscono IFN-γ e CD40L ai macrofagi alveolari, coordinando la fusione in cellule di Langhans e cellule epitelioidi con necrosi caseosa centrale. Il bacillo è confinato e isolato dal parenchima polmonare sano. Test di Mantoux: positivo (>10 mm a 48–72h).`}
                </p>
              </div>
            </div>
          ) : (
            /* Psoriasis Lab */
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">Evento Trigger Ambientale</span>
                  <div className="flex flex-col gap-1">
                    {[
                      { id: 'mechanical_uv', label: 'Danno Meccanico / Raggi UV (Koebner)' },
                      { id: 'stress_hpa', label: 'Stress Psico-Fisico (Asse HPA / Nervi)' },
                      { id: 'streptococcus', label: 'Faringite Streptococcica (Proteina M)' }
                    ].map((trig) => (
                      <button
                        key={trig.id}
                        onClick={() => setPsoriasisTrigger(trig.id as any)}
                        className={`p-1.5 rounded-lg text-xs font-bold border text-left transition-all ${
                          psoriasisTrigger === trig.id
                            ? 'bg-amber-700 text-white border-amber-800'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {trig.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">Genotipo HLA-Cw*06:02</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setHlaCStatus(true)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                        hlaCStatus ? 'bg-rose-700 text-white border-rose-800' : 'bg-white text-slate-700'
                      }`}
                    >
                      Presente (Alto Rischio)
                    </button>
                    <button
                      onClick={() => setHlaCStatus(false)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                        !hlaCStatus ? 'bg-slate-700 text-white border-slate-800' : 'bg-white text-slate-700'
                      }`}
                    >
                      Assente
                    </button>
                  </div>
                  <span className="text-[11px] text-slate-500 block">
                    Presenta con altissima efficienza i peptidi della <strong>cheratina 17</strong> omologhi alla proteina M streptococcica.
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">Terapia Biologica Somministrata</span>
                  <div className="flex flex-col gap-1">
                    {[
                      { id: 'none', label: 'Nessuna (Infiammazione Piena)' },
                      { id: 'anti_il17', label: 'Anti-IL-17 (Secukinumab / Ixekizumab)' },
                      { id: 'anti_il23', label: 'Anti-IL-23 (Guselkumab / Risankizumab)' },
                      { id: 'jak_inhibitor', label: 'Inibitore JAK / TYK2 (Deucravacitinib)' }
                    ].map((th) => (
                      <button
                        key={th.id}
                        onClick={() => setPsoriasisTherapy(th.id as any)}
                        className={`p-1.5 rounded-lg text-xs font-bold border text-left transition-all ${
                          psoriasisTherapy === th.id
                            ? 'bg-purple-700 text-white border-purple-800'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {th.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic Psoriasis Readout */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <strong className="text-slate-900 text-sm block font-bold">Stato della Placca Psoriasica:</strong>
                {psoriasisTherapy === 'none' ? (
                  <p className="text-rose-900 m-0 leading-relaxed">
                    <strong>Placca Attiva in Espansione:</strong> Il rilascio di DNA dai cheratinociti complessato con LL37 stimola le pDC via TLR9.
                    Ondata di IFN di tipo 1 con differenziamento Th17/Th1. I cheratinociti iperproliferano sotto lo stimolo di IL-17 e IL-22,
                    formando la placca eritemato-desquamativa con infiltrato di neutrofili ed eritema da neovascolarizzazione mastocitaria.
                  </p>
                ) : (
                  <p className="text-emerald-900 m-0 leading-relaxed">
                    <strong>Risposta Clinica Eccellente (PASI 90/100):</strong> La terapia mirata con <strong>{psoriasisTherapy.toUpperCase()}</strong>{' '}
                    interrompe l'asse Th17 o la trasduzione del segnale JAK-STAT. I cheratinociti arrestano la proliferazione compulsiva,
                    la desquamazione regredisce e l'epidermide ripristina la normale stratificazione entro poche settimane.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SIMULATOR 2: IBD & Celiac Disease Lab */}
      <section id="sim-ibd-celiac-lab" className="space-y-6 pt-4 not-prose font-sans">
        <div className="border-l-4 border-emerald-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-emerald-700 tracking-wider">Simulatore Interattivo 2</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Laboratorio IBD & Celiachia: Homing α4β7/MAdCAM-1 vs Asse Celiaco (Gliadina 33-mer, HLA-DQ2/8 & IL-15/NKG2D)
          </h2>
        </div>

        <p className="text-slate-700 text-sm">
          Simula l'effetto della disregolazione dell'immunità innata e delle mutazioni di NOD2/ATG16L1 nelle IBD con blocco dell'homing mediante Vedolizumab,
          oppure esplora la patogenesi della Celiachia variando la presenza degli aplotipi HLA-DQ2/DQ8 e l'attivazione citotossica degli IEL.
        </p>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-6">
          {/* Sub-tab selection */}
          <div className="flex gap-2 border-b border-slate-200 pb-3">
            <button
              onClick={() => setActiveSim2Tab('ibd')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeSim2Tab === 'ibd'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Modulo 1: IBD (Crohn vs RCU, NOD2 & Vedolizumab)
            </button>
            <button
              onClick={() => setActiveSim2Tab('celiac')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeSim2Tab === 'celiac'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Modulo 2: Malattia Celiaca (HLA-DQ2/8 & Asse NKG2D)
            </button>
          </div>

          {activeSim2Tab === 'ibd' ? (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">Patologia Selezionata</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIbdType('crohn')}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                        ibdType === 'crohn' ? 'bg-rose-700 text-white border-rose-800' : 'bg-white text-slate-700'
                      }`}
                    >
                      Morbo di Crohn
                    </button>
                    <button
                      onClick={() => setIbdType('ulcerative_colitis')}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                        ibdType === 'ulcerative_colitis' ? 'bg-blue-700 text-white border-blue-800' : 'bg-white text-slate-700'
                      }`}
                    >
                      Colite Ulcerosa
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">Mutazione NOD2 / ATG16L1 (Autofagia)</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setNod2Mutated(true)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                        nod2Mutated ? 'bg-rose-700 text-white border-rose-800' : 'bg-white text-slate-700'
                      }`}
                    >
                      Mutato (Deficit)
                    </button>
                    <button
                      onClick={() => setNod2Mutated(false)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                        !nod2Mutated ? 'bg-emerald-600 text-white border-emerald-700' : 'bg-white text-slate-700'
                      }`}
                    >
                      Wild-Type (Normale)
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">Terapia Anti-Integrina α4β7 (Vedolizumab)</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setVedolizumabActive(true)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                        vedolizumabActive ? 'bg-emerald-600 text-white border-emerald-700' : 'bg-white text-slate-700'
                      }`}
                    >
                      Attiva (Blocco Homing)
                    </button>
                    <button
                      onClick={() => setVedolizumabActive(false)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                        !vedolizumabActive ? 'bg-slate-700 text-white border-slate-800' : 'bg-white text-slate-700'
                      }`}
                    >
                      Non Somministrata
                    </button>
                  </div>
                </div>
              </div>

              {/* IBD Result Readout */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <strong className="text-slate-900 text-sm block font-bold">Quadro Istopatologico & Terapeutico:</strong>
                <p className="text-slate-700 m-0 leading-relaxed">
                  {ibdType === 'crohn'
                    ? `Flogosi transmurale segmentaria con granulomi non caseosi e fibrosi sottomucosa. ${nod2Mutated ? 'La mutazione di NOD2/ATG16L1 impedisce agli enterociti di degradare i batteri luminali penetrati via autofagia, scatenando infiammazione iperattiva.' : 'Autofagia intatta ma disbiosi e permeabilità luminale aumentata.'}`
                    : `Infiammazione continua superficiale confinata a retto e colon, con ascessi criptici neutrofili ed ulcerazioni emorragiche.`}
                </p>
                {vedolizumabActive && (
                  <p className="text-emerald-800 font-semibold m-0 pt-1">
                    Effetto Vedolizumab: L'anticorpo blocca l'integrina α4β7 sui linfociti T effettori impedendo il legame a MAdCAM-1 venulare. L'infiltrazione linfocitaria nella lamina propria crolla selettivamente, riducendo la flogosi intestinale senza immunosoppressione sistemica.
                  </p>
                )}
              </div>
            </div>
          ) : (
            /* Celiac Disease Lab */
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">Assunzione di Glutine (Peptide 33-mer)</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCeliacGlutenIntake(true)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                        celiacGlutenIntake ? 'bg-rose-700 text-white border-rose-800' : 'bg-white text-slate-700'
                      }`}
                    >
                      Dieta Libera (Con Glutine)
                    </button>
                    <button
                      onClick={() => setCeliacGlutenIntake(false)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                        !celiacGlutenIntake ? 'bg-emerald-600 text-white border-emerald-700' : 'bg-white text-slate-700'
                      }`}
                    >
                      Dieta Aglutinata (Gluten-Free)
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">Genotipo HLA di Classe II</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCeliacHla('dq2_dq8_positive')}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                        celiacHla === 'dq2_dq8_positive' ? 'bg-rose-700 text-white border-rose-800' : 'bg-white text-slate-700'
                      }`}
                    >
                      HLA-DQ2 o DQ8 (+)
                    </button>
                    <button
                      onClick={() => setCeliacHla('dq2_dq8_negative')}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                        celiacHla === 'dq2_dq8_negative' ? 'bg-emerald-600 text-white border-emerald-700' : 'bg-white text-slate-700'
                      }`}
                    >
                      Altri Alleli HLA (-)
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">Attività Transglutaminasi tTG</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setTTgActive(true)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                        tTgActive ? 'bg-amber-700 text-white border-amber-800' : 'bg-white text-slate-700'
                      }`}
                    >
                      Attiva (Deamina la Gliadina)
                    </button>
                    <button
                      onClick={() => setTTgActive(false)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                        !tTgActive ? 'bg-emerald-600 text-white border-emerald-700' : 'bg-white text-slate-700'
                      }`}
                    >
                      Inibita (Biotecnologia)
                    </button>
                  </div>
                </div>
              </div>

              {/* Dynamic Celiac Readout */}
              <div className={`p-4 rounded-xl border text-xs space-y-2 ${
                celiacGlutenIntake && celiacHla === 'dq2_dq8_positive' && tTgActive
                  ? 'bg-rose-50 border-rose-300 text-rose-950'
                  : 'bg-emerald-50 border-emerald-300 text-emerald-950'
              }`}>
                <div className="flex items-center gap-2 font-bold text-sm">
                  {celiacGlutenIntake && celiacHla === 'dq2_dq8_positive' && tTgActive ? (
                    <>
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      <span>Atrofia Subtotale/Totale dei Villi Intestinali (Marsh 3c)</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Mucosa Intestinale Normale / Rigenerata (Villi Conservati)</span>
                    </>
                  )}
                </div>
                <p className="leading-relaxed m-0">
                  {celiacHla === 'dq2_dq8_negative'
                    ? `Individuo non portatore di HLA-DQ2 né HLA-DQ8: la gliadina deaminata non può essere presentata ai linfociti T CD4+. Il rischio di sviluppare malattia celiaca è PRATICAMENTE ZERO (Valore Predittivo Negativo >99%).`
                    : !celiacGlutenIntake
                    ? `Dieta aglutinata rigorosa: l'assenza del peptide 33-mer spegne la secrezione di IFN-γ e IL-15. I linfociti intraepiteliali non vengono attivati contro gli enterociti; i villi si rigenerano completamente entro 6–12 mesi.`
                    : `La tTG deamina la gliadina introducendo cariche negative che legano stabilmente le tasche basiche di HLA-DQ2/8. I CD4+ Th1 secernono IFN-γ, inducendo gli enterociti a produrre IL-15 ed esprimere ligandi di stress MIC-A/B. I linfociti intraepiteliali IEL CD8+ esprimono NKG2D e uccidono direttamente gli enterociti, causando appiattimento completo dei villi e sindrome da malassorbimento.`}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* TABELLA 28.1: Spettro delle Reazioni di Tipo IV */}
      <section id="tabella-28-1" className="space-y-4 not-prose font-sans">
        <div className="border-l-4 border-amber-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">Tabella Sinottica 28.1</span>
          <h2 className="text-xl font-bold text-slate-900 mt-0.5">
            Tassonomia delle Reazioni di Ipersensibilità di Tipo IV (DTH)
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3">Sottotipo / Patologia</th>
                <th className="p-3">Antigene Stimolante</th>
                <th className="p-3">Cellule Effettrici Cardine</th>
                <th className="p-3">Mediatori & Citochine</th>
                <th className="p-3">Lesione Tissutale Tipica</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td className="p-3 font-bold text-amber-900">Tubercolosi Polmonare</td>
                <td className="p-3"><em>Mycobacterium tuberculosis</em> persistente nei fagosomi</td>
                <td className="p-3">Th1, Macrofagi M1, Cellule di Langhans, NKT (CD1b), CTL</td>
                <td className="p-3">IL-12, IFN-γ, CD40L, TNF-α, ROS/NO, granulisina</td>
                <td className="p-3">Granuloma con necrosi caseosa centrale e fibrosi periferica</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-blue-900">Test di Mantoux (PPD)</td>
                <td className="p-3">Derivato proteico purificato (tubercolina)</td>
                <td className="p-3">Linfociti Th1 memoria e macrofagi reclutati</td>
                <td className="p-3">IFN-γ, TNF-α, chemochine</td>
                <td className="p-3">Ponfo eritematoso indurito a 48–72 ore (micro-granuloma intradermico)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-rose-900">Dermatite da Contatto</td>
                <td className="p-3">Apteni (nichel, cromo, urushiolo dell'edera velenosa)</td>
                <td className="p-3">Cellule di Langerhans, Th1, Th17, CTL CD8+, T lipidici (CD1a)</td>
                <td className="p-3">IFN-γ, IL-17, IL-22, perforina</td>
                <td className="p-3">Eczema eritemato-desquamativo e vescicolare con lisi di cheratinociti</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-purple-900">Psoriasi Volgare</td>
                <td className="p-3">Complessi LL37-DNA self, cheratina 17 (HLA-Cw*06:02), ADAMTS-L5</td>
                <td className="p-3">pDC, cDC, Th17, Th1, CTL CD8+, mastociti cutanei</td>
                <td className="p-3">IFN-I (pDC), IL-23, IL-17A/F, IL-22, TNF-α, EGF</td>
                <td className="p-3">Placca eritematosa ispessita a margini netti con squame argentee e paracheratosi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* TABELLA 28.2: Confronto IBD vs Celiachia */}
      <section id="tabella-28-2" className="space-y-4 not-prose font-sans">
        <div className="border-l-4 border-emerald-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-emerald-700 tracking-wider">Tabella Sinottica 28.2</span>
          <h2 className="text-xl font-bold text-slate-900 mt-0.5">
            Confronto Comparativo: Morbo di Crohn, Colite Ulcerosa & Malattia Celiaca
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3">Caratteristica</th>
                <th className="p-3 bg-rose-50/60 text-rose-950">Morbo di Crohn</th>
                <th className="p-3 bg-blue-50/60 text-blue-950">Colite Ulcerosa (RCU)</th>
                <th className="p-3 bg-emerald-50/60 text-emerald-950">Malattia Celiaca</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td className="p-3 font-bold text-slate-900">Natura Principale</td>
                <td className="p-3 bg-rose-50/30">Autoinfiammatoria / Innata multifattoriale</td>
                <td className="p-3 bg-blue-50/30">Autoinfiammatoria / Innata multifattoriale</td>
                <td className="p-3 bg-emerald-50/30">Autoimmune / Adattativa scatenata da antigene alimentare</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">Sede Anatomica</td>
                <td className="p-3 bg-rose-50/30">Dalla bocca all'ano (predilige ileo terminale e colon)</td>
                <td className="p-3 bg-blue-50/30">Esclusivamente retto e colon</td>
                <td className="p-3 bg-emerald-50/30">Intestino tenue (duodeno e digiuno)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">Profondità di Parete</td>
                <td className="p-3 bg-rose-50/30"><strong>Transmurale</strong> (tutti gli strati fino alla sierosa)</td>
                <td className="p-3 bg-blue-50/30"><strong>Superficiale</strong> (mucosa e sottomucosa superficiale)</td>
                <td className="p-3 bg-emerald-50/30">Mucosa (epitelio e lamina propria)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">Istologia Tipica</td>
                <td className="p-3 bg-rose-50/30">Granulomi non caseosi, fibrosi sottomucosa, fistole</td>
                <td className="p-3 bg-blue-50/30">Distorsione delle cripte, ascessi criptici neutrofili</td>
                <td className="p-3 bg-emerald-50/30">Atrofia dei villi, iperplasia cripte, infiltrato IEL &gt;25%</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">Genetica Fondamentale</td>
                <td className="p-3 bg-rose-50/30">Mutazioni <strong>NOD2</strong> (MDP) e <strong>ATG16L1</strong> (autofagia)</td>
                <td className="p-3 bg-blue-50/30">IL-23R, JAK/STAT, barriera epiteliale</td>
                <td className="p-3 bg-emerald-50/30">Obbligata: <strong>HLA-DQ2</strong> (95%) o <strong>HLA-DQ8</strong> (5%)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">Meccanismo di Danno</td>
                <td className="p-3 bg-rose-50/30">Traslocazione batterica, ILC1 (IFN-γ), macrofagi M1, Th1/Th17</td>
                <td className="p-3 bg-blue-50/30">Danno epiteliale, neutrofili, citochine mucosali</td>
                <td className="p-3 bg-emerald-50/30">Deaminazione tTG, Th1, IL-15 e lisi IEL via NKG2D/MIC-A</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">Terapia Cardine</td>
                <td className="p-3 bg-rose-50/30">Anti-TNF, anti-IL-12/23, Vedolizumab (anti-α4β7)</td>
                <td className="p-3 bg-blue-50/30">Mesalazina, steroidi, anti-TNF, Vedolizumab, inibitori JAK</td>
                <td className="p-3 bg-emerald-50/30"><strong>Dieta priva di glutine rigorosa a vita</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_QUESTIONS} lessonNumber={28} title="Verifica dell'Apprendimento · Lezione 28" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS} lessonNumber={28} title="Flashcard di Ripasso Attivo · Lezione 28" />
    </article>
  );
};
