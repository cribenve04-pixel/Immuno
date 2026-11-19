import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
/**
 * Lezione 27: Ipersensibilità di Secondo e Terzo Tipo
 * Docente: Prof.ssa Ricciarda Galandrini - 01/12/2025
 * 
 * Trattato accademico e monografico esaustivo su:
 * - Meccanismi patogenetici di danno dell'immunità umorale (anticorpi patogenetici preformati IgG e IgM)
 * - Ipersensibilità di Tipo II: antigeni insolubili/fissi su cellule e matrice extracellulare (autoantigeni, apteni-carrier, alloantigeni)
 * - Sistema AB0, isoemoagglutinine naturali IgM T-indipendenti da flora batterica, trasfusione incompatibile e lisi da MAC
 * - Rigetto iperacuto vascolare d'organo solido (anti-AB0 ed anti-MHC I in donne pluripare o politrasfuse, corpi di Weibel-Palade, NETs)
 * - Sistema Rh (antigene proteico D), assenza di anticorpi naturali, sensibilizzazione materna e switch a IgG anti-D (IgG1/IgG3)
 * - Transcitosi placentare via recettore FcRn (recettore di Brambell simile a MHC I con beta-2-microglobulina a pH acido endosomiale)
 * - Malattia emolitica del neonato (MEN / eritroblastosi fetale), ittero nucleare (kernicterus), emopoiesi extramidollare
 * - Profilassi con siero anti-D (dagli anni '70) e diagnostica con Test di Coombs Diretto vs Indiretto
 * - Farmaci come apteni che modificano proteine self (penicillina legata a residui di lisina con anemie emolitiche e citopenie)
 * - Ipersensibilità di Tipo III da immunocomplessi solubili: fisiologia della clearance via C3b-tioestere, recettore CR1 eritrocitario e filtro splenico
 * - Dimensioni degli immunocomplessi (equivalenza macromolecolare vs eccesso di anticorpo vs eccesso di antigene persistente)
 * - Vasculite da immunocomplessi: C3a/C5a, permeabilità vasale, reclutamento neutrofili (FcγRIIIA/B), fagocitosi frustrata e NETosi
 * - Fattori emodinamici favorenti (alta pressione di filtrazione glomerulare, turbolenza, endoteli con acido sialico e cariche negative)
 * - Glomerulonefrite post-streptococcica (GNPS, antigeni piantati, pattern granulare lumpy-bumpy all'immunofluorescenza vs lineare di Goodpasture)
 * - Vasculiti cutanee (vasculite leucocitoclastica e porpora palpabile vs eritema nodoso settale ipodermico)
 * - Malattia da siero (sieri eterologhi come ATG e antiofidico o farmaci, latenza 7-14 giorni, triade febbre-artrite-porpora, ipocomplementemia)
 * - Crioglobulinemie (Tipo 1 monoclonale, Tipo 2 mista monoclonale/policlonale con HCV, Tipo 3 mista policlonale con artrite reumatoide/LES, gelificazione a 4°C, Fenomeno di Raynaud)
 * - Alveoliti allergiche estrinseche (polmonite da ipersensibilità sterile da antigeni inalati, stimolazione macrofagi alveolari via FcγRI)
 * - Casi clinici guidati dalla sbobina: eritroblastosi fetale con monitoraggio Coombs e trasfusione fetale; malattia da siero da penicillina con linfocitosi
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
  Info
} from 'lucide-react';

interface Lezione27ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione27View: React.FC<Lezione27ViewProps> = ({ isSerif, fontSize }) => {
  const fontClass = isSerif ? 'font-serif' : 'font-sans';
  const sizeClass = fontSize === 'large' ? 'text-lg leading-relaxed' : 'text-base leading-relaxed';

  // State for Simulator 1: Type II AB0 & Rh Transfusion / Coombs Laboratory
  const [donorGroup, setDonorGroup] = useState<'A' | 'B' | 'AB' | '0'>('A');
  const [recipientGroup, setRecipientGroup] = useState<'A' | 'B' | 'AB' | '0'>('0');
  const [rhMotherSensitized, setRhMotherSensitized] = useState<boolean>(true);
  const [coombsTiter, setCoombsTiter] = useState<number>(16); // 1:16
  const [antiDProphylaxisGiven, setAntiDProphylaxisGiven] = useState<boolean>(false);
  const [activeLabTab, setActiveLabTab] = useState<'AB0' | 'Rh_Coombs'>('AB0');

  // State for Simulator 2: Type III Immune Complex Kinetics & Serum Sickness Lab
  const [antigenAntibodyRatio, setAntigenAntibodyRatio] = useState<'excess_ab' | 'equivalence' | 'excess_ag'>('excess_ag');
  const [hemodynamicPressure, setHemodynamicPressure] = useState<'low' | 'moderate' | 'high_glomerular'>('high_glomerular');
  const [endothelialCharge, setEndothelialCharge] = useState<'neutral' | 'negative_sialic'>('negative_sialic');
  const [serumSicknessDay, setSerumSicknessDay] = useState<number>(10);

  // Flashcards state
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);


  const toggleCard = (id: number) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Logic for AB0 Compatibility
  const getRecipientIsohemagglutinins = (group: 'A' | 'B' | 'AB' | '0'): string[] => {
    switch (group) {
      case 'A': return ['Anti-B (IgM)'];
      case 'B': return ['Anti-A (IgM)'];
      case 'AB': return ['Nessuna isoemoagglutinina'];
      case '0': return ['Anti-A (IgM)', 'Anti-B (IgM)'];
    }
  };

  const checkAB0Compatibility = (donor: 'A' | 'B' | 'AB' | '0', recipient: 'A' | 'B' | 'AB' | '0') => {
    if (donor === '0') return { compatible: true, reason: 'Il donatore 0 non possiede antigeni A o B sulle emazie (donatore universale di eritrociti).' };
    if (recipient === 'AB') return { compatible: true, reason: 'Il ricevente AB non possiede isoemoagglutinine plasmatiche anti-A né anti-B (ricevente universale di eritrociti).' };
    if (donor === recipient) return { compatible: true, reason: 'Gruppi perfettamente identici: assenza di anticorpi specifici verso gli antigeni trasfusi.' };
    
    // Incompatibility detected
    return {
      compatible: false,
      reason: `Grave incompatibilità: il ricevente di gruppo ${recipient} possiede anticorpi IgM contro gli antigeni ${donor} espressi sulle emazie del donatore.`
    };
  };

  const ab0Result = checkAB0Compatibility(donorGroup, recipientGroup);

  
  const FLASHCARDS = [
            {
              id: 1,
              q: "Qual è la differenza fondamentale tra l'antigene del Tipo II e quello del Tipo III?",
              a: "Nel Tipo II l'antigene è INSOLUBILE, espresso stabilmente sulla superficie di cellule (emazie, piastrine, endoteli) o nella matrice extracellulare. Nel Tipo III l'antigene è SOLUBILE nel plasma, e si formano immunocomplessi circolanti che precipitano secondariamente nei vasi."
            },
            {
              id: 2,
              q: "Perché possediamo isoemoagglutinine IgM anti-A o anti-B naturali senza pregresse trasfusioni?",
              a: "Nei primi mesi di vita la flora batterica saprofita intestinale esprime antigeni saccaridici identici a quelli del sistema AB0. Il sistema immunitario sviluppa tolleranza verso il self e produce IgM naturali T-indipendenti verso l'antigene assente."
            },
            {
              id: 3,
              q: "Qual è il ruolo del recettore FcRn (Brambell) nella malattia emolitica del neonato?",
              a: "FcRn (omologo a MHC I con β2-microglobulina) espresso sul sinciziotrofoblasto trasporta selettivamente le IgG1/IgG3 materne anti-D nel circolo fetale via transcitosi (legame a pH acido 6.0 nell'endosoma e rilascio a pH neutro 7.4 nel feto)."
            },
            {
              id: 4,
              q: "Come si differenziano il Test di Coombs Indiretto e il Test di Coombs Diretto?",
              a: "L'Indiretto ricerca anticorpi anti-D liberi nel siero materno (incubato con emazie Rh+ note e antisiero di Coombs). Il Diretto ricerca anticorpi già legati in vivo sulla superficie delle emazie del sangue fetale/neonatale mediante aggiunta diretta di antisiero di Coombs."
            },
            {
              id: 5,
              q: "Come avviene fisiologicamente la clearance degli immunocomplessi da parte dei globuli rossi?",
              a: "C3b si lega stabilmente all'immunocomplesso e si ancora al recettore CR1 (CD35) dei globuli rossi circolanti. Nei sinusoidi epatici e splenici il Fattore I stacca il complesso, che viene fagocitato dai macrofagi via FcγR, rilasciando l'eritrocita intatto."
            },
            {
              id: 6,
              q: "Che cos'è la fagocitosi frustrata dei neutrofili nella vasculite da Tipo III?",
              a: "I neutrofili ingaggiano con FcγRIIIA/B gli immunocomplessi intrappolati nella parete vascolare endoteliale. Impossibilitati a inglobare la parete del vaso, rilasciano all'esterno enzimi litici, ROS, NO e NETs, causando necrosi fibrinoide e trombosi ischemica."
            }
          ];
  const QUIZ_QUESTIONS = [
            {
              id: 1,
              q: "1. Quale caratteristica immunologica spiega la cinetica rapida (poche ore) delle reazioni di ipersensibilità di Tipo II e III?",
              options: [
                "A) Gli anticorpi IgG o IgM responsabili del danno erano già preformati nell'individuo prima del contatto",
                "B) La sintesi proteica dei linfociti B viene accelerata dagli ormoni tiroidei in meno di 60 minuti",
                "C) Il complemento viene sintetizzato de novo dal fegato durante la prima ora dell'infezione",
                "D) I linfociti T CD8+ si differenziano ed espandono clonalmente in meno di 2 ore"
              ],
              correct: 0,
              rationale: "La comparsa dei sintomi entro poche ore dimostra inequivocabilmente che non vi è il tempo biologico per una sensibilizzazione primaria; gli anticorpi erano già presenti nel siero del paziente."
            },
            {
              id: 2,
              q: "2. Nel sistema AB0, qual è la modificazione enzimatica specifica responsabile della formazione dell'antigene A a partire dalla sostanza fondamentale H?",
              options: [
                "A) Aggiunta di D-galattosio ad opera della galattosil-transferasi",
                "B) Aggiunta di N-acetilgalattosamina ad opera della acetilgalattosaminil-transferasi",
                "C) Clivaggio enzimatico dell'anello β-lattamico della lisina",
                "D) Desialilazione terminale della membrana basale glomerulare"
              ],
              correct: 1,
              rationale: "L'antigene A deriva dall'aggiunta di N-acetilgalattosamina al substrato H da parte della N-acetilgalattosaminil-transferasi, mentre l'antigene B deriva dall'aggiunta di D-galattosio."
            },
            {
              id: 3,
              q: "3. Per quale ragione un paziente di gruppo sanguigno 0 può donare globuli rossi a qualsiasi ricevente (donatore universale)?",
              options: [
                "A) Perché le sue emazie non esprimono alcun antigene A o B sulla membrana, non potendo essere agglutinate da isoemoagglutinine",
                "B) Perché il suo plasma contiene isoemoagglutinine che inattivano il complemento del ricevente",
                "C) Perché le sue emazie legano ad altissima affinità il recettore FcRn placentare",
                "D) Perché il sistema immunitario del donatore produce solo IgG4 bloccanti"
              ],
              correct: 0,
              rationale: "Le emazie di gruppo 0 possiedono solo la catena fondamentale H (non immunogena) e mancano di determinanti A o B: non possono essere legate né agglutinate dagli anticorpi anti-A o anti-B del ricevente."
            },
            {
              id: 4,
              q: "4. Nel rigetto iperacuto d'organo solido, quale ruolo svolgono i corpi endoteliali di Weibel-Palade?",
              options: [
                "A) Rilasciano fattore di von Willebrand fungendo da nucleazione per l'aggregazione piastrinica e la trombosi vascolare",
                "B) Secernono lisozima e lattoferrina che degradano gli immunocomplessi circolanti",
                "C) Bloccano il fattore C1q impedendo la formazione del complesso di attacco alla membrana MAC",
                "D) Sintetizzano C3b facilitando la clearance splenica del trapianto"
              ],
              correct: 0,
              rationale: "Il danno endoteliale mediato dal complemento provoca l'esocitosi dei granuli di Weibel-Palade contenenti vWF, scatenando l'adesione piastrinica e la trombosi occludente del rigetto iperacuto vascolare."
            },
            {
              id: 5,
              q: "5. Attraverso quale recettore placentare le IgG materne anti-D oltrepassano la barriera verso il circolo fetale?",
              options: [
                "A) Recettore FcεRI con omodimero γγ",
                "B) Recettore FcRn (recettore di Brambell), strutturalmente correlato alle molecole MHC di Classe I con β2-microglobulina",
                "C) Recettore scavenger SR-A dei macrofagi deciduali",
                "D) Recettore per la porzione J-chain pIgR dei sinciziotrofoblasti"
              ],
              correct: 1,
              rationale: "L'FcRn (recettore di Brambell) media la transcitosi delle IgG materne attraverso il sinciziotrofoblasto legando CH2-CH3 a pH acido endosomiale e rilasciandole nel feto a pH neutro."
            },
            {
              id: 6,
              q: "6. Quale reperto definisce l'esito del Test di Coombs Diretto eseguito sul sangue del cordone di un neonato con sospetta eritroblastosi fetale?",
              options: [
                "A) Agglutinazione delle emazie fetali dopo aggiunta dell'antisiero di Coombs (anticorpi anti-IgG umane), confermando il legame in vivo di anticorpi materni",
                "B) Comparsa di un gel insolubile dopo incubazione a 4°C per 24 ore",
                "C) Lisi osmotica spontanea in provetta priva di anticorpi secondari",
                "D) Presenza di pattern lineare di fluorescenza all'esame microscopico dei globuli bianchi"
              ],
              correct: 0,
              rationale: "Il Test di Coombs Diretto rileva la presenza di anticorpi già fissati in vivo sulla membrana dei globuli rossi fetali: l'aggiunta di antiglobuline umane secondarie causa emoagglutinazione macroscopica."
            },
            {
              id: 7,
              q: "7. In quale condizione stechiometrica si formano i piccoli immunocomplessi solubili patogeni responsabili della vasculite di Tipo III?",
              options: [
                "A) In condizioni di equivalenza stechiometrica tra antigene e anticorpo",
                "B) In condizioni di netto eccesso di anticorpo con pochi antigeni",
                "C) In condizioni di persistente eccesso di antigene rispetto agli anticorpi disponibili",
                "D) Esclusivamente in assenza totale di ioni calcio e magnesio nel siero"
              ],
              correct: 2,
              rationale: "L'eccesso di antigene (infezioni croniche, neoplasie, farmaci continui) impedisce la formazione di grandi reticoli: si formano piccoli oligomeri che non fissano abbastanza C3b, sfuggono al filtro splenico e precipitano nei vasi."
            },
            {
              id: 8,
              q: "8. Nel meccanismo fisiologico di clearance degli immunocomplessi, a quale recettore eritrocitario si ancora C3b?",
              options: [
                "A) Recettore CR1 (CD35)",
                "B) Recettore CR2 (CD21)",
                "C) Recettore FcγRIIB dotato di motivo ITIM",
                "D) Recettore Toll-like TLR4"
              ],
              correct: 0,
              rationale: "C3b, legato covalentemente all'anticorpo dell'immunocomplesso, viene agganciato dal recettore CR1 (CD35) espresso sui globuli rossi, che lo trasportano al fegato e alla milza."
            },
            {
              id: 9,
              q: "9. Alla biopsia renale con immunofluorescenza, quale pattern distingue patognomonicamente la glomerulonefrite post-streptococcica (Tipo III) dalla sindrome di Goodpasture (Tipo II)?",
              options: [
                "A) Pattern granulare 'a cielo stellato' (lumpy-bumpy) nel Tipo III vs pattern lineare continuo nel Tipo II",
                "B) Pattern lineare continuo nel Tipo III vs pattern granulare nel Tipo II",
                "C) Assenza totale di fluorescenza in entrambe le patologie",
                "D) Depositi esclusivi di catene pesanti IgE nel Tipo III"
              ],
              correct: 0,
              rationale: "Il deposito disomogeneo e casuale di immunocomplessi circolanti conferisce alla GNPS il tipico aspetto granulare a zolle ('a cielo stellato'), mentre gli autoanticorpi diretti contro il collagene IV della membrana basale in Goodpasture danno un pattern lineare continuo."
            },
            {
              id: 10,
              q: "10. Nel caso clinico del bambino trattato con penicillina che sviluppa Malattia da Siero, quale reperto ematologico ha escluso una recidiva di infezione batterica?",
              options: [
                "A) Una marcata linfocitosi (80% linfociti) invece della tipica neutrofilia batterica",
                "B) L'azzeramento completo delle piastrine con porpora trombocitopenica fulminante",
                "C) Un incremento isolato degli eosinofili oltre il 50%",
                "D) La totale scomparsa delle isoemoagglutinine IgM anti-A e anti-B"
              ],
              correct: 0,
              rationale: "La professoressa ha sottolineato che la leucocitosi con marcata linfocitosi (80%) rifletteva l'espansione clonale linfoide scatenata dal complesso aptene-carrier della penicillina, escludendo una sovrainfezione batterica neutrofila."
            }
          ];

  return (
    <article className={`space-y-12 ${fontClass} ${sizeClass} text-slate-800`}>
      {/* Chapter Master Header */}
      <header className="border-b border-slate-200 pb-8 not-prose font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase bg-rose-100 text-rose-800 border border-rose-200">
            Lezione 27 • 01 Dicembre 2025
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
            Prof.ssa Ricciarda Galandrini
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            Immunopatologia d'Organo e Vascolare
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
          Ipersensibilità di Secondo e Terzo Tipo: Citotossicità Anticorpale Tessuto-Specifica & Vasculiti da Immunocomplessi
        </h1>
        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          Trattato accademico integrale sui meccanismi di danno dell'immunità umorale mediati da anticorpi IgG e IgM: dalla reazione
          trasfusionale acuta del sistema AB0 e rigetto iperacuto vascolare d'organo, all'incompatibilità Rh, recettore di Brambell (FcRn) ed
          eritroblastosi fetale con profilassi e test di Coombs; fino alla clearance fisiologica degli immunocomplessi (C3b, CR1 eritrocitario,
          filtro splenico) e al collasso vascolare nelle vasculiti da immunocomplessi, glomerulonefrite post-streptococcica, malattia da siero,
          crioglobulinemie con fenomeno di Raynaud e polmonite da ipersensibilità.
        </p>

        {/* Academic Meta Box */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans">
          <div>
            <span className="text-slate-600 uppercase font-semibold block">Docente</span>
            <strong className="text-slate-800">Prof.ssa Ricciarda Galandrini</strong>
          </div>
          <div>
            <span className="text-slate-600 uppercase font-semibold block">Sbobinatori</span>
            <strong className="text-slate-800">M. Capriati & A. Affinito</strong>
          </div>
          <div>
            <span className="text-slate-600 uppercase font-semibold block">Revisori</span>
            <strong className="text-slate-800">G. Abate & V. Cusano</strong>
          </div>
          <div>
            <span className="text-slate-600 uppercase font-semibold block">Isotipi Coinvolti</span>
            <strong className="text-slate-800">IgG1, IgG3 & IgM Pentameriche</strong>
          </div>
        </div>
      </header>

      {/* 27.1 Inquadramento & Distinzione Concettuale */}
      <section id="sec-27-1" className="space-y-6">
        <div className="border-l-4 border-rose-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-rose-700 tracking-wider">Sezione 27.1</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Inquadramento dell'Immunopatologia & Distinzione Concettuale tra Tipo II e Tipo III
          </h2>
        </div>

        <p>
          Come opportunamente ribadito in sede di apertura dalla Prof.ssa Galandrini, il termine <strong>ipersensibilità</strong> non
          definisce una singola entità nosografica specifica (non si pone diagnosi di "paziente affetto da ipersensibilità di primo o secondo tipo"),
          bensì identifica il <strong>meccanismo immunopatogenetico fondamentale</strong> attraverso cui il sistema immunitario, deviando dalla
          propria fisiologica missione difensiva e omeostatica, genera una lesione cellulare o tissutale responsabile di un ampio spettro di patologie.
        </p>

        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-sm font-sans space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-bold">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
            <span>Regola Cardine: Anticorpi Preformati & Cinetica Rapida</span>
          </div>
          <p className="text-amber-800 leading-relaxed text-xs">
            Sia nell'<strong>Ipersensibilità di Tipo II</strong> che nell'<strong>Ipersensibilità di Tipo III</strong>, il danno è innescato
            da componenti dell'<strong>immunità umorale</strong> (anticorpi <strong>IgG</strong> o <strong>IgM</strong> la cui produzione è
            inappropriata, non regolata o sproporzionata). Entrambe le manifestazioni insorgono in <strong>tempi rapidi</strong> (nell'ordine
            di poche ore, tipicamente 5–8 ore dall'esposizione), il che implica in modo incontrovertibile che gli anticorpi responsabili
            fossero già <strong>preformati</strong> nell'individuo: non vi è infatti il tempo biologico per una sensibilizzazione primaria <em>ex novo</em>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
              <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Ipersensibilità di Tipo II (Citotossica / Tessuto-Specifica)</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Gli anticorpi IgG o IgM riconoscono e legano <strong>antigeni insolubili o fissati stabilmente</strong> alla superficie
              di cellule (autologhe, allogeniche trasfuse o trapiantate) o a componenti strutturali della <strong>matrice extracellulare</strong>{' '}
              e delle membrane basali. Il danno è localizzato e ristretto al distretto anatomico o al citotipo bersaglio.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-purple-800 font-bold text-sm">
              <Droplets className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Ipersensibilità di Tipo III (da Immunocomplessi Solubili)</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Gli anticorpi IgG o IgM si legano ad <strong>antigeni solubili</strong> presenti in circolo, formando <strong>immunocomplessi (IC)</strong>.
              Qualora la clearance reticoloendoteliale fallisca, tali complessi precipitano passivamente e si depositano nelle pareti dei
              vasi sanguigni (vasculite), attivando il complemento e richiamando neutrofili. La malattia ha carattere marcatamente sistemico.
            </p>
          </div>
        </div>
      </section>

      {/* 27.2 Anatomia del Tipo II: Bersagli Antigenici & Meccanismi di Danno */}
      <section id="sec-27-2" className="space-y-6">
        <div className="border-l-4 border-rose-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-rose-700 tracking-wider">Sezione 27.2</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Anatomia dell'Ipersensibilità di Tipo II: Triade Antigenica & Tridimensionalità del Danno
          </h2>
        </div>

        <p>
          Nelle reazioni di secondo tipo, gli antigeni insolubili riconosciuti dagli anticorpi IgG o IgM appartengono a tre grandi categorie eziopatogenetiche:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans text-xs">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <strong className="text-rose-900 block font-bold text-sm">1. Autoantigeni Self</strong>
            <p className="text-slate-600">
              Perdita della tolleranza immunologica centrale o periferica verso molecole costitutive di membrane cellulari o della matrice
              (es. desmogleina nel pemfigo, collagene IV in Goodpasture, recettori ormonali e neurotrasmettitoriali).
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <strong className="text-blue-900 block font-bold text-sm">2. Apteni Farmacologici</strong>
            <p className="text-slate-600">
              Farmaci a basso peso molecolare privi di immunogenicità autonoma (es. penicillina) che si legano covalentemente a proteine
              di superficie delle cellule ematiche (eritrociti, piastrine, granulociti), formando epitopi estranei che inducono sintesi anticorpale.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <strong className="text-emerald-900 block font-bold text-sm">3. Alloantigeni</strong>
            <p className="text-slate-600">
              Antigeni polimorfi espressi su cellule provenienti da individui non geneticamente identici della stessa specie: antigeni
              eritrocitari (sistemi AB0 e Rh) o molecole MHC su endoteli d'organo trapiantato o cellule fetali.
            </p>
          </div>
        </div>

        <p>
          Il legame di IgG o IgM su questi antigeni di superficie innesca tre distinte modalità fisiopatologiche di danno:
        </p>

        <div className="space-y-3 font-sans text-xs">
          <div className="p-3 rounded-lg bg-white border-l-4 border-red-500 border-slate-200 shadow-2xs">
            <strong className="text-red-950 font-bold block text-sm mb-0.5">A. Danno Citolitico ed Emolisi (Complemento & ADCC)</strong>
            <span className="text-slate-700 leading-relaxed">
              L'attivazione della via classica del complemento porta all'assemblaggio del complesso di attacco alla membrana (MAC / C5b-9),
              che perfora il doppio strato fosfolipidico provocando lisi osmotica diretta (emolisi intravascolare). Parallelamente, la porzione
              Fc delle IgG legate viene riconosciuta dai recettori FcγRIII (CD16) delle cellule Natural Killer (ADCC) e dai macrofagi splenici,
              provocando fagocitosi ed emolisi extravascolare.
            </span>
          </div>

          <div className="p-3 rounded-lg bg-white border-l-4 border-amber-500 border-slate-200 shadow-2xs">
            <strong className="text-amber-950 font-bold block text-sm mb-0.5">B. Danno Pro-Infiammatorio Tissutale (Fagocitosi Frustrata & NETs)</strong>
            <span className="text-slate-700 leading-relaxed">
              Quando gli anticorpi si depositano su membrane basali o endoteli non fagocitabili (es. glomerulonefriti e rigetto d'organo),
              le anafilotossine C3a e C5a attraggono neutrofili. Impossibilitati a inglobare la struttura integra, i neutrofili rilasciano
              enzimi litici dai granuli citosolici, specie reattive dell'ossigeno (ROS), ossido nitrico (NO) e reti di cromatina extracellulare (NETs),
              aggravando la necrosi tissutale e la trombosi vascolare.
            </span>
          </div>

          <div className="p-3 rounded-lg bg-white border-l-4 border-purple-500 border-slate-200 shadow-2xs">
            <strong className="text-purple-950 font-bold block text-sm mb-0.5">C. Danno Funzionale Recettoriale (Agonismo vs Antagonismo)</strong>
            <span className="text-slate-700 leading-relaxed">
              Gli autoanticorpi possono alterare l'omeostasi cellulare senza provocare lisi o flogosi:
              nel <strong>Morbo di Graves</strong>, autoanticorpi IgG legano il recettore per il TSH mimando l'ormone (effetto agonista costitutivo)
              con ipertiroidismo incontrollato; nella <strong>Miastenia Gravis</strong>, autoanticorpi legano il recettore nicotinico per l'acetilcolina
              (AChR) sulla placca motrice neuromuscolare con effetto antagonista competitivo e internalizzazione del recettore, inducendo paralisi flaccida progressiva.
            </span>
          </div>
        </div>
      </section>

      {/* 27.3 Sistema AB0 & Reazione Trasfusionale Acuta */}
      <section id="sec-27-3" className="space-y-6">
        <div className="border-l-4 border-rose-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-rose-700 tracking-wider">Sezione 27.3</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Il Sistema Gruppo-Ematico AB0, Isoemoagglutinine Naturali & Emolisi da MAC
          </h2>
        </div>

        <p>
          Il sistema AB0 rappresenta l'esempio archetipico di ipersensibilità di Tipo II mediata da <strong>alloantigeni zuccherini</strong>.
          Gli antigeni AB0 sono costituiti da corte catene oligosaccaridiche coniugate a lipidi o proteine di membrana degli eritrociti e delle cellule endoteliali.
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-3">
          <strong className="text-slate-900 text-sm block font-bold">Biochimica & Sintesi Enzimatica degli Antigeni AB0</strong>
          <ul className="list-disc list-inside space-y-1.5 text-slate-700">
            <li>
              <strong>Sostanza fondamentale H (Antigene 0):</strong> Catena oligosaccaridica costituita da galattosio, N-acetilglucosamina e fucosio terminale.
              L'antigene 0 <em>non possiede potere immunogeno</em> perché è universalmente presente e privo di glicosilazioni addizionali.
            </li>
            <li>
              <strong>Antigene A:</strong> L'enzima <em>N-acetilgalattosaminil-transferasi</em> aggiunge una molecola di N-acetilgalattosamina terminale al substrato H.
            </li>
            <li>
              <strong>Antigene B:</strong> L'enzima <em>galattosil-transferasi</em> aggiunge una molecola di D-galattosio terminale al substrato H.
            </li>
            <li>
              <strong>Genetica di trasmissione:</strong> Gli alleli A e B sono codominanti tra loro e dominanti rispetto all'allele 0 recessivo. I genotipi possibili
              sono quindi AA o A0 (fenotipo A), BB o B0 (fenotipo B), AB (fenotipo AB) e 00 (fenotipo 0).
            </li>
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 font-sans text-xs space-y-2">
          <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
            <Info className="w-4 h-4 text-blue-700 shrink-0" />
            <span>Perché Possediamo Isoemoagglutinine Naturali IgM Senza Trasfusioni Pregresse?</span>
          </div>
          <p className="text-blue-900/90 leading-relaxed">
            A differenza di altri sistemi antigenici proteici, gli individui producono spontaneamente anticorpi plasmatici denominati{' '}
            <strong>isoemoagglutinine</strong> (prevalentemente pentameri <strong>IgM</strong>) rivolti contro l'antigene assente dalle proprie emazie.
            La docente sottolinea il razionale biologico: nei primi mesi di vita, il neonato viene colonizzato dalla <strong>flora batterica saprofita intestinale</strong>,
            la cui parete presenta determinanti saccaridici identici agli antigeni A e B. Ne scaturisce una risposta anticorpale <strong>T-indipendente</strong>{' '}
            con tolleranza immunologica verso l'antigene espresso dal self e produzione persistente di IgM verso quello assente:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-[11px] text-center">
            <div className="p-2 bg-white rounded border border-blue-200">Gruppo A → Anti-B</div>
            <div className="p-2 bg-white rounded border border-blue-200">Gruppo B → Anti-A</div>
            <div className="p-2 bg-white rounded border border-blue-200">Gruppo AB → Nessuno</div>
            <div className="p-2 bg-white rounded border border-blue-200">Gruppo 0 → Anti-A & Anti-B</div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-900">La Cascata dell'Emolisi Intravascolare Acuta</h3>
          <p>
            In caso di errata trasfusione (es. emazie di gruppo A trasfuse a un soggetto di gruppo 0), le <strong>IgM pentameriche</strong> anti-A
            del ricevente legano all'istante le emazie trasfuse. Grazie alla configurazione pentamerica, ciascuna molecola di IgM espone contemporaneamente
            fino a 5 porzioni Fc capaci di legare la molecola <strong>C1q</strong> del complemento con efficienza catalitica elevatissima.
          </p>
          <p>
            L'innesco esplosivo della via classica culmina con l'assemblaggio di migliaia di pori di <strong>MAC (C5b-9)</strong> per singolo globulo rosso.
            La massiva lisi osmotica intravascolare libera enormi quantità di <strong>emoglobina libera</strong> nel plasma. L'emoglobina supera la soglia di legame
            dell'aptoglobina e filtra attraverso la barriera glomerulare, precipitando nei tubuli renali con conseguente <strong>emoglobinuria scura</strong>{' '}
            e necrosi tubulare acuta ostruttiva. Il metabolismo dell'eme genera marcata <strong>iperbilirubinemia</strong>, mentre il rilascio di anafilotossine
            e TNF-α scatena febbre, brividi scuotenti e shock ipotensivo.
          </p>
          <p className="text-slate-600 text-xs italic">
            Nota clinica: Tra madre e feto l'incompatibilità AB0 (es. madre 0 e feto A) non causa patologie gravi perché le isoemoagglutinine IgM non attraversano
            la placenta; solo raramente deboli sottoclassi IgG materne possono provocare una modesta iperbilirubinemia neonatale clinicamente benigna.
          </p>
        </div>
      </section>

      {/* 27.4 Rigetto Iperacuto Vascolare d'Organo Solido */}
      <section id="sec-27-4" className="space-y-6">
        <div className="border-l-4 border-rose-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-rose-700 tracking-wider">Sezione 27.4</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Rigetto Iperacuto Vascolare nei Trapianti d'Organo: Endoteli, Pluriparità & NETs
          </h2>
        </div>

        <p>
          Il medesimo meccanismo citotossico di Tipo II si manifesta nel <strong>rigetto iperacuto d'organo solido</strong> (rene, cuore, polmone),
          il quale si compie drammaticamente entro <strong>pochi minuti o poche ore</strong> dall'esecuzione delle anastomosi vascolari chirurgiche.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <strong className="text-slate-900 block font-bold text-sm">Le Fonti di Anticorpi Preformati</strong>
            <ul className="list-disc list-inside space-y-1.5 text-slate-700">
              <li>
                <strong>Incompatibilità AB0:</strong> Gli endoteli vascolari dell'organo donato esprimono gli antigeni glucidici AB0. Le IgM naturali
                del ricevente vi si legano istantaneamente (evenienza oggi scongiurata dai rigorosi protocolli di compatibilità).
              </li>
              <li>
                <strong>Alloimmunizzazione Anti-HLA da Pluriparità:</strong> Donne pluripare possono aver sviluppato anticorpi IgG specifici verso
                gli antigeni MHC di Classe I del feto ereditati dal padre. Se l'organo donato condivide quel determinante HLA-I, gli anticorpi
                preformati aggrediscono l'endotelio vascolare.
              </li>
              <li>
                <strong>Politrasfusioni o Precedenti Trapianti:</strong> Esposizione a leucociti ed emazie allogeniche con memoria anticorpale preesistente.
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <strong className="text-slate-900 block font-bold text-sm">La Cascata Patogenetica Endoteliale</strong>
            <p className="text-slate-700 leading-relaxed">
              Il legame anticorpo-endotelio fissa il complemento e genera MAC con grave denudamento dell'endotelio vasale. Dai corpi endoteliali di{' '}
              <strong>Weibel-Palade</strong> viene rilasciato il fattore di von Willebrand (vWF), innescando l'aggregazione piastrinica.
              Le anafilotossine C3a e C5a richiamano una tempesta di <strong>neutrofili</strong>, i quali compiono fagocitosi frustrata e rilasciano
              trappole extracellulari di cromatina (<strong>NETs</strong>) intrise di mieloperossidasi, elastasi e catepsina G. Ne consegue una
              trombosi microvascolare occludente generalizzata, infarto emorragico e necrosi ischemica dell'innesto: per questo è definito{' '}
              <strong>Rigetto Iperacuto Vascolare</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 27.5 Sistema Rh, Brambell (FcRn) & Malattia Emolitica del Neonato */}
      <section id="sec-27-5" className="space-y-6">
        <div className="border-l-4 border-rose-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-rose-700 tracking-wider">Sezione 27.5</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Il Sistema Rhesus (Rh), Recettore FcRn (Brambell) & Malattia Emolitica del Neonato (MEN)
          </h2>
        </div>

        <p>
          Il sistema Rh è costituito da un complesso di <strong>antigeni proteici</strong> di membrana denominati C, c, D, E, e.
          Tra questi, l'<strong>antigene D</strong> è dotato del massimo potere immunogeno; la dicitura convenzionale "Rh positivo" indica la presenza
          dell'antigene D, mentre "Rh negativo" ne indica la totale assenza genotipica (omozigote recessivo <em>d/d</em>).
        </p>

        <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 font-sans text-xs space-y-2">
          <strong className="text-rose-900 text-sm block font-bold">Differenza Cardine con il Sistema AB0</strong>
          <p className="text-rose-950 leading-relaxed">
            Essendo antigeni proteici e non saccaridici, per il sistema Rh <strong>non esistono isoemoagglutinine naturali preformate</strong>.
            Un individuo Rh negativo non possiede anticorpi anti-D a meno che non sia stato specificamente immunizzato attraverso un contatto ematico
            con emazie Rh positive (trasfusione errata, oppure contatto ematico feto-materno durante la gravidanza o al momento del parto).
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900">Dinamica Materno-Fetale dell'Eritroblastosi Fetale</h3>
          <p>
            Qualora una madre <strong>Rh-</strong> concepisca un figlio con un padre <strong>Rh+</strong> (omozigote D/D con probabilità del 100%,
            o eterozigote D/d con probabilità del 50%), il feto può risultare Rh+.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li>
              <strong>Prima Gravidanza (Sensibilizzazione Silente):</strong> Durante la gestazione, la circolazione fetale e materna rimangono
              sostanzialmente separate. Al momento del parto (oppure in occasione di aborto spontaneo/terapeutico, amniocentesi o distacco placentare),
              un contingente di emazie fetali Rh+ entra nel circolo materno. La madre viene <strong>sensibilizzata</strong>: produce inizialmente
              una transitoria risposta IgM anti-D (che non attraversa la placenta) e genera un pool permanente di <strong>linfociti B memoria</strong>{' '}
              sottoposti a switch isotipico verso <strong>IgG1 e IgG3 anti-D</strong>. Il primo figlio nasce sano.
            </li>
            <li>
              <strong>Seconda Gravidanza con Feto Rh+:</strong> Minime quantità fisiologiche di emazie fetali (anche frazioni di millilitro)
              stimolano rapidamente le cellule B memoria materne, inducendo una massiccia produzione di IgG anti-D ad altissima affinità.
            </li>
            <li>
              <strong>Transcitosi Placentare via Recettore FcRn (Brambell):</strong> Le IgG1 e IgG3 materne legano selettivamente il recettore{' '}
              <strong>FcRn</strong> presente sulle cellule del sinciziotrofoblasto. L'FcRn (strutturalmente omologo alle molecole MHC di Classe I,
              formato da una catena α associata alla β₂-microglobulina) lega l'interfaccia CH2-CH3 delle IgG a pH endosomiale acido
              (6.0–6.5) e le rilascia sul versante fetale a pH fisiologico neutro (7.4), riversandole nel circolo del nascituro.
            </li>
            <li>
              <strong>Emolisi Fetale & Danno Clinico:</strong> Nel feto, le IgG anti-D rivestono le emazie Rh+. A livello splenico, i macrofagi
              captano le emazie opsonizzate mediante i recettori FcγR provocando <strong>grave emolisi extravascolare</strong>. L'anemizzazione cronica
              stimola disperatamente l'emopoiesi extramidollare a livello epatico e splenico con epatosplenomegalia e comparsa in circolo di precursori
              immaturi (<strong>eritroblastosi</strong>). L'iperbilirubinemia non coniugata supera la barriera emato-encefalica immatura del neonato,
              depositandosi nei nuclei della base e provocando necrosi neuronale irreversibile (<strong>kernicterus</strong> o ittero nucleare con
              gravi sequele neurologiche e scheletriche, fino alla morte intrauterina per <em>idrope fetale</em>).
            </li>
          </ol>
        </div>

        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 font-sans text-xs space-y-2">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
            <span>La Rivoluzione della Sieroprofilassi Anti-D (Dagli Anni '70)</span>
          </div>
          <p className="text-emerald-950 leading-relaxed">
            Dagli anni '70 la malattia emolitica del neonato è divenuta rarissima nei Paesi sviluppati grazie alla somministrazione profilattica
            alla gestante Rh- di <strong>immunoglobuline umane anti-D (siero anti-Rh)</strong> alla 28ª settimana di gestazione ed entro 72 ore dal parto.
            Questi anticorpi esogeni legano e mascherano all'istante le minime emazie fetali Rh+ entrate nel circolo materno, guidandone la distruzione
            macrofagica splenica prima che il sistema immunitario della madre possa riconoscerle e attivare il clone B memoria.
            Oggi la patologia si riscontra prevalentemente in donne non sottoposte a regolare monitoraggio prenatale o sieroprofilassi.
          </p>
        </div>
      </section>

      {/* 27.6 Diagnostica: Test di Coombs Diretto vs Indiretto & Farmaci Apteni */}
      <section id="sec-27-6" className="space-y-6">
        <div className="border-l-4 border-rose-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-rose-700 tracking-wider">Sezione 27.6</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Diagnostica Ematologica: Test di Coombs Diretto vs Indiretto & Farmaci come Apteni
          </h2>
        </div>

        <p>
          Il gold standard per identificare gli anticorpi anti-eritrocitari responsabili dell'ipersensibilità di Tipo II è il <strong>Test di Coombs</strong>{' '}
          (o test dell'antiglobulina umana), ideato dal medico Robin Coombs:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
              <Search className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Test di Coombs Indiretto (Ricerca Anticorpi Liberi nel Siero Materno)</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Si preleva il <strong>siero della gestante</strong> e lo si incuba in provetta con emazie Rh+ note di laboratorio. Se il siero materno
              contiene IgG anti-D libere, queste rivestiranno le emazie. Si aggiunge poi l'<strong>antisiero di Coombs</strong> (anticorpi di coniglio
              anti-IgG umane): gli anticorpi secondari formano ponti intermolecolari tra i frammenti Fc delle IgG adiacenti provocando{' '}
              <strong>emoagglutinazione visibile a occhio nudo</strong>.
            </p>
            <div className="p-2 bg-slate-50 rounded border border-slate-200 text-slate-600">
              <strong>Significato del Titolo:</strong> Un titolo di 1:8 significa che la reazione è positiva fino a una diluizione di 8 volte.
              Più il denominatore è alto (es. 1:16, 1:32, 1:64), maggiore è la concentrazione di anticorpi e l'intensità della risposta immunitaria materna.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
              <Baby className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Test di Coombs Diretto (Ricerca Anticorpi Già Legati alle Emazie Fetali)</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Si preleva un campione di <strong>globuli rossi del feto o del neonato</strong> (es. da cordone ombelicale o vena ombelicale tramite cordocentesi).
              Le emazie sono già rivestite <em>in vivo</em> dalle IgG materne che hanno attraversato la placenta. Si aggiunge direttamente
              l'antisiero di Coombs anti-IgG umane: la comparsa di emoagglutinazione conferma inequivocabilmente la diagnosi di emolisi immunomediata attiva.
            </p>
          </div>
        </div>

        {/* Focus Farmaci come Apteni */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-3">
          <strong className="text-slate-900 text-sm block font-bold">I Farmaci che Fungono da Apteni: Modello Penicillina</strong>
          <p className="text-slate-700 leading-relaxed">
            I farmaci a basso peso molecolare (es. <strong>penicillina</strong> e antibiotici β-lattamici) non sono di per sé immunogeni.
            Tuttavia, l'anello reattivo β-lattamico può aprirsi spontaneamente e legarsi con legame covalente stabile ai residui dell'aminoacido{' '}
            <strong>lisina</strong> esposti sulle proteine integrali di membrana di globuli rossi, piastrine o neutrofili:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <span className="font-bold text-red-800 block">Anemia Emolitica da Farmaci</span>
              <span className="text-slate-600">Le emazie rivestite dal complesso farmaco-lisina vengono distrutte per fagocitosi splenica via FcγR.</span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <span className="font-bold text-amber-800 block">Trombocitopenia da Farmaci</span>
              <span className="text-slate-600">Le piastrine rivestite dall'aptene subiscono lisi opsonica con grave porpora emorragica.</span>
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">
              <span className="font-bold text-purple-800 block">Agranulocitosi da Farmaci</span>
              <span className="text-slate-600">I granulociti neutrofili vengono depleti con vulnerabilità ad infezioni batteriche opportunistiche.</span>
            </div>
          </div>
          <p className="text-slate-600 italic">
            La Prof.ssa Galandrini sottolinea come la penicillina sia un modello paradigmatico straordinario: è in grado di innescare tutti e quattro
            i tipi di ipersensibilità di Gell e Coombs (Tipo I con shock anafilattico immediato da IgE; Tipo II con anemia emolitica; Tipo III con
            malattia da siero da immunocomplessi solubili plasma-farmaco; Tipo IV con dermatite da contatto ritardata).
          </p>
        </div>
      </section>

      {/* 27.7 Ipersensibilità di Tipo III: Fisiologia della Clearance & Dimensioni degli IC */}
      <section id="sec-27-7" className="space-y-6">
        <div className="border-l-4 border-purple-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-purple-700 tracking-wider">Sezione 27.7</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Ipersensibilità di Tipo III: Fisiologia della Clearance degli Immunocomplessi & Regola della Dimensione
          </h2>
        </div>

        <p>
          Nell'<strong>Ipersensibilità di Tipo III</strong> (o da immunocomplessi solubili), anticorpi IgG o IgM si legano ad antigeni solubili
          circolanti. La formazione di complessi antigene-anticorpo è un evento fisiologico normale nel corso di qualunque risposta umorale.
          In condizioni fisiologiche, l'organismo dispone di un sofisticato sistema omeostatico di <strong>clearance reticoloendoteliale</strong>{' '}
          guidato dal complemento:
        </p>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs font-sans text-xs space-y-3">
          <strong className="text-slate-900 text-sm block font-bold">I Quattro Passaggi Fisiologici della Rimozione degli Immunocomplessi</strong>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li>
              <strong>Attivazione della Via Classica & Fissazione di C3b:</strong> Il legame di C1q agli anticorpi dell'immunocomplesso attiva la cascata.
              Il fattore <strong>C3b</strong>, grazie al proprio legame estere/tioesterico altamente reattivo, si ancora stabilmente ai residui glicidici dell'anticorpo.
            </li>
            <li>
              <strong>Cattura Eritrocitaria via Recettore CR1 (CD35):</strong> I globuli rossi circolanti esprimono ad alta densità il recettore{' '}
              <strong>CR1 (recettore per C3b/C4b)</strong>. L'immunocomplesso opsonizzato da C3b viene così agganciato alla membrana dell'eritrocita,
              il quale funge da "veicolo navetta" ematico innocuo, impedendo la precipitazione del complesso sui vasi.
            </li>
            <li>
              <strong>Filtraggio Splenico ed Epatico:</strong> I globuli rossi carichi transitano attraverso i cordoni splenici e i sinusoidi epatici.
              Qui interviene il <strong>Fattore I</strong> del complemento, che cliva parzialmente C3b staccando l'immunocomplesso dall'eritrocita.
            </li>
            <li>
              <strong>Fagocitosi Macrofagica e Rilascio del Globulo Rosso:</strong> I macrofagi residenti della milza e le cellule di Kupffer epatiche,
              dotati di recettori <strong>FcγR</strong> e recettori per il complemento, fagocitano e degradano l'immunocomplesso nei lisosomi,
              mentre il globulo rosso viene rilasciato intatto nel flusso ematico.
            </li>
          </ol>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900">La Curva Stechiometrica & la Dimensione degli Immunocomplessi</h3>
          <p>
            L'efficienza della clearance macrofagica dipende primariamente dal <strong>volume molecolare degli immunocomplessi</strong>,
            determinato dal rapporto stechiometrico tra concentrazione di antigene e concentrazione di anticorpo:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans text-xs">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
              <strong className="text-blue-900 block font-bold text-sm">Zona di Equivalenza (Grandi Aggregati)</strong>
              <p className="text-slate-600">
                Le concentrazioni molari di antigene e anticorpo sono bilanciate. Si formano reticoli macromolecolari tridimensionali giganti che attivano
                potentemente il complemento e vengono eliminati dalla milza in <strong>pochissimi minuti</strong>.
              </p>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
              <strong className="text-indigo-900 block font-bold text-sm">Eccesso di Anticorpo (Aggregati Medi)</strong>
              <p className="text-slate-600">
                Pochi epitopi antigenici saturati da abbondanti anticorpi. Si generano aggregati di medie dimensioni che attivano il complemento e
                vengono smaltiti efficacemente senza ristagno vascolare patologico.
              </p>
            </div>
            <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-200 space-y-1.5">
              <strong className="text-rose-900 block font-bold text-sm">Eccesso di Antigene (Piccoli Aggregati Patogeni)</strong>
              <p className="text-slate-600">
                Quantità massive di antigene persistente rispetto agli anticorpi disponibili. Si originano <strong>complessi oligomerici piccolissimi</strong>{' '}
                che <em>non riescono a fissare C3b in quantità sufficiente</em> per legarsi a CR1, sfuggono al filtro splenico, persistono a lungo in circolo
                e tendono a precipitare nelle pareti dei vasi sanguigni, innescando la vasculite di Tipo III.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 27.8 Patogenesi della Vasculite da Immunocomplessi & Fattori Emodinamici */}
      <section id="sec-27-8" className="space-y-6">
        <div className="border-l-4 border-purple-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-purple-700 tracking-wider">Sezione 27.8</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Patogenesi della Vasculite da Immunocomplessi: C3a/C5a, Neutrofili, NETs & Fattori Emodinamici
          </h2>
        </div>

        <p>
          Quando i piccoli immunocomplessi si accumulano in circolo, superano l'endotelio e precipitano nella tonaca intima e nella membrana basale vasale,
          dando inizio al processo di <strong>vasculite da immunocomplessi</strong>.
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-2">
          <strong className="text-slate-900 text-sm block font-bold">La Cascata del Danno Vasculitico</strong>
          <ol className="list-decimal list-inside space-y-1.5 text-slate-700">
            <li>
              Gli immunocomplessi depositati attivano localmente la via classica del complemento, generando abbondanti anafilotossine{' '}
              <strong>C3a</strong> e <strong>C5a</strong>.
            </li>
            <li>
              Le anafilotossine stimolano i mastociti perivascolari al rilascio di amine vasoattive (istamina), aumentando la permeabilità vascolare e facilitando
              l'ulteriore intrappolamento subendoteliale di immunocomplessi.
            </li>
            <li>
              <strong>C5a</strong> agisce come potente chemoattrattante reclutando un imponente infiltrato di <strong>neutrofili</strong> ematici.
            </li>
            <li>
              I neutrofili ingaggiano le IgG dell'immunocomplesso mediante i recettori <strong>FcγRIIIA</strong> e <strong>FcγRIIIB</strong>.
              Tuttavia, poiché l'antigene è ancorato alla parete del vaso, i neutrofili vanno incontro a <strong>fagocitosi frustrata</strong>:
              esocitano all'esterno enzimi litici (mieloperossidasi, elastasi, proteinasi 3), generano radicali liberi dell'ossigeno (ROS) e ossido nitrico (NO).
            </li>
            <li>
              Estrusione massiva di <strong>NETs (Neutrophil Extracellular Traps)</strong>: le fibre di cromatina decondensata e istoni citotossici
              provocano estesa <strong>necrosi fibrinoide</strong> della parete vascolare, denudano il subendotelio e fungono da piattaforma pro-trombotica
              per piastrine e fibrina, provocando occlusione vascolare ischemica e infarto tissutale a valle.
            </li>
          </ol>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900">Perché gli Immunocomplessi si Depositano in Sedi Preferenziali?</h3>
          <p>
            Benché le malattie da immunocomplessi abbiano potenziale sistemico, la loro deposizione si concentra in distretti anatomici selettivi
            a causa di precisi determinanti emodinamici e biochimici:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 font-sans text-xs">
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
              <strong className="text-slate-900 block font-bold">1. Pressione di Filtrazione</strong>
              <p className="text-slate-600">
                Distretti ad altissima pressione endovascolare o con elevata ultrafiltrazione di liquidi: <strong>glomerulo renale</strong>,{' '}
                <strong>capillari sinoviali</strong>, <strong>plessi coroidei</strong> del SNC e cute.
              </p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
              <strong className="text-slate-900 block font-bold">2. Turbolenza Emodinamica</strong>
              <p className="text-slate-600">
                Punti di biforcazione arteriosa o curvature vascolari dove le forze di taglio facilitano la collisione e l'ancoraggio degli aggregati.
              </p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
              <strong className="text-slate-900 block font-bold">3. Danni Infiammatori Pregressi</strong>
              <p className="text-slate-600">
                Focolai preesistenti di vasodilatazione o danno endoteliale che incrementano la permeabilità della parete vasale.
              </p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
              <strong className="text-rose-900 block font-bold">4. Cariche Elettrostatiche</strong>
              <p className="text-slate-600">
                Le membrane basali glomerulari e i capillari cutanei sono ricchi di <strong>acido sialico ed eparan-solfato anionico (carica negativa)</strong>,
                che attraggono elettrostaticamente immunocomplessi dotati di carica netta cationica (positiva).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 27.9 Quadri Clinici Tipici da Tipo III */}
      <section id="sec-27-9" className="space-y-6">
        <div className="border-l-4 border-purple-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-purple-700 tracking-wider">Sezione 27.9</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Quadri Clinici dell'Ipersensibilità di Tipo III: Glomerulonefrite, Malattia da Siero, Crioglobuline & Alveoliti
          </h2>
        </div>

        <p>
          La sbobina analizza le più importanti patologie cliniche da deposito di immunocomplessi:
        </p>

        {/* GNPS */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs font-sans text-xs space-y-2">
          <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
            <Microscope className="w-4 h-4 text-blue-600 shrink-0" />
            <span>1. Glomerulonefrite Post-Streptococcica (GNPS) & Pattern Granulare</span>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Infezione faringea o cutanea da <em>Streptococco β-emolitico di gruppo A</em> in età pediatrica. Dopo 1–3 settimane dalla guarigione
            clinica della faringite (quando la carica batterica è azzerata ma persistono antigeni streptococcici in circolo), gli immunocomplessi precipitano
            nel glomerulo renale o antigeni batterici cationici filtrati si impiantano nella membrana basale (<em>planted antigens</em>) richiamando anticorpi in situ.
          </p>
          <div className="p-2.5 bg-slate-50 rounded border border-slate-200 text-slate-700 space-y-1">
            <strong>Diagnostica e Biopsia con Immunofluorescenza:</strong>
            <p className="m-0">
              Oltre il <strong>90% delle glomerulonefriti</strong> ha patogenesi da immunocomplessi. Alla biopsia renale, l'immunofluorescenza per IgG e C3
              mostra una tipica disposizione <strong>granulare "a cielo stellato" (lumpy-bumpy)</strong> lungo la membrana basale e nel mesangio,
              facilmente distinguibile dal pattern <em>lineare uniforme</em> caratteristico della sindrome di Goodpasture (Tipo II, anti-collagene IV).
              Clinicamente si manifesta con sindrome nefritica: ematuria macroscopica ("a lavatura di carne"), proteinuria, oliguria, ipertensione ed edemi periorbitari.
            </p>
          </div>
        </div>

        {/* Malattia da Siero */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs font-sans text-xs space-y-2">
          <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
            <Syringe className="w-4 h-4 text-rose-600 shrink-0" />
            <span>2. Malattia da Siero (Serum Sickness): Sieri Eterologhi & Farmaci</span>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Rappresenta il prototipo storico delle patologie sistemiche da immunocomplessi. Originariamente osservata dopo la somministrazione di grandi volumi
            di sieri eterologhi animali (siero antitetanico o antidifterico equino); oggi si riscontra principalmente con la <strong>globulina antitimocitaria (ATG)</strong>{' '}
            di coniglio o cavallo (usata per depletare i linfociti T nei trapianti di midollo osseo), con il siero antiofidico (antivipera), oppure indotta
            da farmaci (penicillina, cefalosporine, FANS) tramite complesso aptene-proteina plasmatica solubile:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li><strong>Latenza di 7–14 giorni:</strong> Tempo necessario alla risposta umorale primaria per produrre IgG/IgM anti-proteine eterologhe mentre l'antigene è ancora presente.</li>
            <li><strong>Triade Clinica Classica:</strong> Febbre elevata, <strong>artrite</strong>/artralgie simmetriche migranti (deposizione sinoviale), e <strong>rash cutaneo orticarioide o porpora palpabile</strong>.</li>
            <li><strong>Laboratorio:</strong> Marcato consumo e caduta del complemento sierico (<strong>ipocomplementemia C3/C4</strong>) per massiva fissazione negli immunocomplessi vascolari.</li>
          </ul>
        </div>

        {/* Crioglobulinemie */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs font-sans text-xs space-y-2">
          <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
            <Flame className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>3. Crioglobulinemie & Fenomeno di Raynaud</span>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Le crioglobuline sono immunoglobuline anomale che hanno la proprietà fisica di <strong>precipitare o gelificare a temperature fredde (&lt;37°C)</strong>{' '}
            e ridisciogliersi al riscaldamento. La diagnosi si pone prelevando il sangue a caldo e ponendo la provetta in frigo a <strong>4°C</strong>: si osserva
            la formazione di un evidente precipitato opaco o gel (criocrito):
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="p-2 bg-slate-50 rounded border border-slate-200">
              <strong className="text-slate-800 block">Tipo I (Monoclonale Pura)</strong>
              <span>Singolo clone IgM o IgG in neoplasie ematologiche (mieloma multiplo, macroglobulinemia di Waldenström). Sindrome da iperviscosità.</span>
            </div>
            <div className="p-2 bg-slate-50 rounded border border-slate-200">
              <strong className="text-slate-800 block">Tipo II (Mista Monoclonale)</strong>
              <span>IgM monoclonale con attività di <em>fattore reumatoide</em> che lega la porzione Fc di IgG policlonali autologhe. Fortemente legata a <strong>infezione cronica da HCV</strong>.</span>
            </div>
            <div className="p-2 bg-slate-50 rounded border border-slate-200">
              <strong className="text-slate-800 block">Tipo III (Mista Policlonale)</strong>
              <span>IgM policlonali anti-IgG policlonali in patologie autoimmuni (artrite reumatoide, LES, Sjögren) o infettive (HBV, HIV, EBV).</span>
            </div>
          </div>
          <p className="text-slate-600">
            <strong>Fenomeno di Raynaud Secondario:</strong> Il freddo alle estremità (dita delle mani e piedi, naso, padiglioni auricolari) provoca precipitazione
            delle crioglobuline con iperviscosità, arresto del flusso ematico, dolore parossistico e cianosi intensa che può evolvere in necrosi e ulcerazioni.
            La docente distingue questo Raynaud secondario vascolare da quello primitivo idiopatico delle giovani donne, puramente angiospastico e privo di crioglobuline.
          </p>
        </div>

        {/* Alveoliti Allergiche Estrinseche */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs font-sans text-xs space-y-2">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
            <Wind className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>4. Alveoliti Allergiche Estrinseche (Polmoniti da Ipersensibilità)</span>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Malattie professionali dovute all'inalazione cronica di materiale antigenico proteico polverulento: escrementi di volatili ("polmone dell'allevatore
            di piccioni"), fieno ammuffito contenente attinomiceti ("polmone del contadino"), spore fungine in impianti di aria condizionata.
            Gli antigeni solubili inalati penetrano negli alveoli e formano immunocomplessi locali con IgG presenti nel secreto broncoalveolare.
            Gli immunocomplessi legano i <strong>recettori FcγRI sui macrofagi alveolari</strong>, innescando rilascio massiccio di TNF-α, IL-1 e chemochine per neutrofili.
          </p>
          <div className="p-2 bg-amber-50 rounded border border-amber-200 text-amber-900 font-semibold">
            Concetto Chiave: Si tratta di una <strong>polmonite sterile</strong> (non infettiva!). L'impiego di antibiotici è assolutamente inutile e scorretto;
            la terapia richiede l'allontanamento definitivo della sorgente antigenica e glucocorticoidi ad alte dosi.
          </div>
        </div>
      </section>

      {/* 27.10 Casi Clinici Discussione Guidata */}
      <section id="sec-27-10" className="space-y-6">
        <div className="border-l-4 border-rose-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-rose-700 tracking-wider">Sezione 27.10</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Disamina dei Casi Clinici della Sbobina: Eritroblastosi Fetale & Malattia da Siero da Farmaci
          </h2>
        </div>

        <p>
          La seconda ora di lezione analizza due scenari clinici reali che sintetizzano mirabilmente l'applicazione al letto del malato
          dei concetti immunopatologici di Tipo II e Tipo III:
        </p>

        {/* Caso Clinico 1 */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <strong className="text-slate-900 text-sm font-bold flex items-center gap-2">
              <Baby className="w-4 h-4 text-rose-600" />
              Caso Clinico 1: Eritroblastosi Fetale con Monitoraggio del Titolo di Coombs & Trasfusioni Feto-Ombelicali
            </strong>
            <span className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded font-bold text-[10px]">Tipo II Citotossico</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
            <div>
              <p className="m-0"><strong>Anamnesi:</strong> Paziente di 31 anni, seconda gravidanza. Madre gruppo A Rh-, Padre gruppo A Rh+. Primogenito maschio sano (ha causato la sensibilizzazione primaria).</p>
              <p className="mt-1"><strong>Monitoraggio Seriale:</strong></p>
              <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                <li>14ª settimana: Test di Coombs Indiretto positivo a titolo 1:8</li>
                <li>18ª settimana: Titolo raddoppiato a <strong>1:16</strong> (risposta anamnestica in espansione); liquido amniotico positivo per bilirubina.</li>
              </ul>
            </div>
            <div>
              <p className="m-0"><strong>Trattamento Intrauterino d'Urgenza:</strong></p>
              <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                <li>29ª sett: cordocentesi da vena ombelicale con Ht al <strong>6,2%</strong> (anemia estrema letale!). Eseguita trasfusione intrauterina di emazie gruppo 0 Rh-.</li>
                <li>30,5ª sett: Ht risalito a 16,3%, ripetuta trasfusione di emazie 0 Rh-.</li>
                <li>33,5ª sett: Ht 21%, ulteriore trasfusione 0 Rh-.</li>
                <li>34,5ª sett: Parto cesareo pilotato con nascita di neonata femmina viva e sana.</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 italic m-0">
            Razionale: Le emazie 0 Rh- trasfuse in vena ombelicale non possiedono l'antigene D, pertanto non possono essere aggredite dalle IgG materne
            giunte attraverso la placenta via FcRn, garantendo l'ossigenazione fetale fino alla maturità polmonare.
          </p>
        </div>

        {/* Caso Clinico 2 */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-sans text-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <strong className="text-slate-900 text-sm font-bold flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-purple-600" />
              Caso Clinico 2: Malattia da Siero Indotta da Penicillina con Linfocitosi
            </strong>
            <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded font-bold text-[10px]">Tipo III da Immunocomplessi</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
            <div>
              <p className="m-0"><strong>Quadro Iniziale:</strong> Bambino maschio di 6 anni con febbre elevata e tachipnea. Emocoltura positiva per <em>Streptococcus pneumoniae</em>. Diagnosi: polmonite lobare inferiore sx.</p>
              <p className="mt-1"><strong>Terapia:</strong> Penicillina e.v. per 9 giorni con completa risoluzione clinica e dimissione.</p>
            </div>
            <div>
              <p className="m-0"><strong>Recidiva a 9 Giorni dalla Dimissione:</strong></p>
              <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                <li>Comparsa di rash cutaneo orticarioide/porporico, febbre refrattaria, artrite bilaterale delle caviglie, linfoadenopatia e splenomegalia.</li>
                <li>Laboratorio: VES elevata (54), marcata <strong>riduzione del complemento C3/C4</strong>, proteinuria ed ematuria; biopsia cutanea con immunofluorescenza positiva per depositi di IgG e complemento nei vasi dermici.</li>
              </ul>
            </div>
          </div>
          <div className="p-2 bg-purple-50 rounded border border-purple-200 text-purple-900">
            <strong>Dettaglio Chiave della Prof.ssa Galandrini sull'Emocromo:</strong>
            <p className="mt-0.5 m-0 leading-relaxed">
              Il bambino presenta leucocitosi (23.700/µL), ma non neutrofilia (come ci si aspetterebbe in un'infezione batterica), bensì una netta{' '}
              <strong>linfocitosi (80% linfociti)</strong>! Questo dato ematologico dimostra che il quadro clinico non è una recidiva della polmonite pneumococcica,
              ma una massiccia espansione clonale di linfociti T e B antigene-specifici scatenata dalla reazione aptene-carrier della penicillina
              con sintesi di immunocomplessi circolanti: è la diagnosi inequivocabile di <strong>Malattia da Siero indotta da farmaci</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SIMULATOR 1: Type II AB0 & Rh Transfusion / Coombs Laboratory */}
      <section id="sim-type2-transfusion-coombs" className="space-y-6 pt-4 not-prose font-sans">
        <div className="border-l-4 border-rose-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-rose-700 tracking-wider">Simulatore Interattivo 1</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Laboratorio di Compatibilità Emica: Sistema AB0, Mac-Lisi & Test di Coombs per Rh
          </h2>
        </div>

        <p className="text-slate-700 text-sm">
          Simula in tempo reale l'esito emolitico di una trasfusione tra gruppi AB0 discordanti e sperimenta la diagnostica dell'eritroblastosi fetale
          valutando l'effetto della sieroprofilassi materna con immunoglobuline anti-D e la titolazione del Test di Coombs.
        </p>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-6">
          {/* Sub-tabs switch */}
          <div className="flex gap-2 border-b border-slate-200 pb-3">
            <button
              onClick={() => setActiveLabTab('AB0')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeLabTab === 'AB0'
                  ? 'bg-rose-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Modulo 1: Reazione Trasfusionale AB0 & Lisi da MAC
            </button>
            <button
              onClick={() => setActiveLabTab('Rh_Coombs')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeLabTab === 'Rh_Coombs'
                  ? 'bg-rose-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Modulo 2: Incompatibilità Rh, Profilassi & Test di Coombs
            </button>
          </div>

          {activeLabTab === 'AB0' ? (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Donor selection */}
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
                    1. Gruppo Emazie Donatore (Antigeni Espressi)
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {(['A', 'B', 'AB', '0'] as const).map((g) => (
                      <button
                        key={`donor-${g}`}
                        onClick={() => setDonorGroup(g)}
                        className={`py-2 rounded-lg text-xs font-bold border transition-all ${
                          donorGroup === g
                            ? 'bg-blue-600 text-white border-blue-700 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 block">
                    Antigeni sulle emazie: <strong>{donorGroup === '0' ? 'Nessuno (solo sostanza H)' : donorGroup === 'AB' ? 'Antigene A + Antigene B' : `Antigene ${donorGroup}`}</strong>
                  </span>
                </div>

                {/* Recipient selection */}
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
                    2. Gruppo Ricevente (Isoemoagglutinine Sieriche)
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {(['A', 'B', 'AB', '0'] as const).map((g) => (
                      <button
                        key={`recip-${g}`}
                        onClick={() => setRecipientGroup(g)}
                        className={`py-2 rounded-lg text-xs font-bold border transition-all ${
                          recipientGroup === g
                            ? 'bg-purple-700 text-white border-purple-800 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 block">
                    Anticorpi IgM presenti: <strong>{getRecipientIsohemagglutinins(recipientGroup).join(', ')}</strong>
                  </span>
                </div>
              </div>

              {/* Real-time Reaction Readout */}
              <div className={`p-4 rounded-xl border text-xs space-y-2 ${
                ab0Result.compatible
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-red-50 border-red-300 text-red-950'
              }`}>
                <div className="flex items-center gap-2 font-bold text-sm">
                  {ab0Result.compatible ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span>Trasfusione Compatibile: Assenza di Reazione Citolitica</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-red-600" />
                      <span>REAZIONE TRASFUSIONALE ACUTA (Lisi da MAC & Emoglobinuria)</span>
                    </>
                  )}
                </div>
                <p className="leading-relaxed m-0">{ab0Result.reason}</p>
                {!ab0Result.compatible && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px]">
                    <div className="p-2 bg-white/80 rounded border border-red-200">
                      <span className="block font-bold text-red-900">Legame C1q:</span>
                      <span>Massivo (IgM pentameriche)</span>
                    </div>
                    <div className="p-2 bg-white/80 rounded border border-red-200">
                      <span className="block font-bold text-red-900">Assemblaggio MAC:</span>
                      <span>&gt;10.000 pori per globulo</span>
                    </div>
                    <div className="p-2 bg-white/80 rounded border border-red-200">
                      <span className="block font-bold text-red-900">Emolisi Intravascolare:</span>
                      <span>Immediata (entro 1–2 ore)</span>
                    </div>
                    <div className="p-2 bg-white/80 rounded border border-red-200">
                      <span className="block font-bold text-red-900">Rischio Renale:</span>
                      <span>Necrosi tubulare acuta</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Rh and Coombs Lab */
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">Stato Sensibilizzazione Madre (Rh-)</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setRhMotherSensitized(false)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                        !rhMotherSensitized ? 'bg-emerald-600 text-white border-emerald-700' : 'bg-white text-slate-700'
                      }`}
                    >
                      Non Sensibilizzata (1° parto)
                    </button>
                    <button
                      onClick={() => setRhMotherSensitized(true)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                        rhMotherSensitized ? 'bg-rose-700 text-white border-rose-800' : 'bg-white text-slate-700'
                      }`}
                    >
                      Sensibilizzata (B memoria+)
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">Sieroprofilassi Anti-D Somministrata?</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setAntiDProphylaxisGiven(true)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                        antiDProphylaxisGiven ? 'bg-emerald-600 text-white border-emerald-700' : 'bg-white text-slate-700'
                      }`}
                    >
                      Sì (Siero Anti-Rh dato)
                    </button>
                    <button
                      onClick={() => setAntiDProphylaxisGiven(false)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border ${
                        !antiDProphylaxisGiven ? 'bg-rose-700 text-white border-rose-800' : 'bg-white text-slate-700'
                      }`}
                    >
                      No (Mancata profilassi)
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">Titolo Coombs Indiretto Materno</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min={0}
                      max={64}
                      step={8}
                      value={coombsTiter}
                      onChange={(e) => setCoombsTiter(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-rose-600"
                    />
                    <span className="font-mono text-xs font-bold w-12 text-right">
                      {coombsTiter === 0 ? 'Neg.' : `1:${coombsTiter}`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Fetal Outcome Readout */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <strong className="text-slate-900 text-sm block font-bold">Stato Fetale e Transcitosi via FcRn (Brambell):</strong>
                {antiDProphylaxisGiven && !rhMotherSensitized ? (
                  <p className="text-emerald-800 m-0">
                    <strong>Profilassi Efficace:</strong> Gli anticorpi anti-D esogeni hanno eliminato le emazie fetali nel circolo materno prima dell'attivazione dei linfociti B. Nessuna memoria formata: feto al sicuro.
                  </p>
                ) : rhMotherSensitized && !antiDProphylaxisGiven ? (
                  <div className="space-y-1.5 text-rose-900">
                    <p className="m-0 font-semibold">
                      <strong>Allarme Eritroblastosi Fetale (MEN):</strong> Le IgG1/IgG3 anti-D materne legano il recettore FcRn placentare a pH endosomiale e vengono secrete nel circolo fetale a pH 7.4.
                    </p>
                    <p className="m-0 text-slate-700">
                      Gravità clinica: con titolo di 1:{coombsTiter}, si stima una distruzione massiva di eritrociti fetali splenici via FcγR macrofagici, con rischio di <strong>kernicterus</strong> e scompenso idropico. Indicata cordocentesi d'urgenza e trasfusione fetale di emazie 0 Rh-.
                    </p>
                  </div>
                ) : (
                  <p className="text-slate-700 m-0">
                    Paziente con memoria immunologica pregressa: la sola profilassi tardiva non arresta i cloni B memoria già attivati. Monitorare attentamente il titolo ogni 2–4 settimane.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SIMULATOR 2: Type III Immune Complex Kinetics & Serum Sickness Lab */}
      <section id="sim-type3-immune-complexes-lab" className="space-y-6 pt-4 not-prose font-sans">
        <div className="border-l-4 border-purple-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-purple-700 tracking-wider">Simulatore Interattivo 2</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Laboratorio Emodinamico: Dimensioni degli Immunocomplessi, Fagocitosi Frustrata & Malattia da Siero
          </h2>
        </div>

        <p className="text-slate-700 text-sm">
          Modula il rapporto stechiometrico antigene-anticorpo per osservare la formazione dei complessi immuni, la loro clearance
          fisiologica vs precipitazione vascolare guidata dalla pressione endovascolare e dalle cariche elettriche endoteliali.
        </p>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-6">
          {/* Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-700 block">Rapporto Antigene/Anticorpo</span>
              <div className="flex flex-col gap-1.5">
                {[
                  { id: 'excess_ab', label: 'Eccesso di Anticorpo' },
                  { id: 'equivalence', label: 'Equivalenza (Grandi)' },
                  { id: 'excess_ag', label: 'Eccesso di Antigene (Piccoli)' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setAntigenAntibodyRatio(item.id as any)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold border text-left transition-all ${
                      antigenAntibodyRatio === item.id
                        ? 'bg-purple-700 text-white border-purple-800'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-700 block">Pressione di Filtrazione Distrettuale</span>
              <div className="flex flex-col gap-1.5">
                {[
                  { id: 'low', label: 'Bassa (Vene Sistemiche)' },
                  { id: 'moderate', label: 'Media (Arterie Piane)' },
                  { id: 'high_glomerular', label: 'Altissima (Glomerulo / Sinovia)' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setHemodynamicPressure(item.id as any)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold border text-left transition-all ${
                      hemodynamicPressure === item.id
                        ? 'bg-purple-700 text-white border-purple-800'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-700 block">Carica Elettrica Endotelio</span>
              <div className="flex flex-col gap-1.5">
                {[
                  { id: 'neutral', label: 'Carica Neutra' },
                  { id: 'negative_sialic', label: 'Carica Negativa (Acido Sialico)' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setEndothelialCharge(item.id as any)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold border text-left transition-all ${
                      endothelialCharge === item.id
                        ? 'bg-purple-700 text-white border-purple-800'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Telemetry */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-3">
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <strong className="text-slate-900 text-sm font-bold">Risultato del Rimodellamento e della Clearance</strong>
              <span className="font-mono text-purple-700 font-bold">
                {antigenAntibodyRatio === 'excess_ag' ? 'Rischio Vasculitico: CRITICO' : 'Rischio Vasculitico: BASSO'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block font-semibold">Dimensione Complessi:</span>
                <strong className="text-slate-900 text-sm">
                  {antigenAntibodyRatio === 'equivalence' ? 'Macromolecolari (>1.000 kDa)' : antigenAntibodyRatio === 'excess_ab' ? 'Medi (~500 kDa)' : 'Oligomerici Piccoli (<200 kDa)'}
                </strong>
              </div>

              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block font-semibold">Cattura CR1 su Emazie:</span>
                <strong className={`text-sm ${antigenAntibodyRatio === 'excess_ag' ? 'text-rose-700' : 'text-emerald-700'}`}>
                  {antigenAntibodyRatio === 'excess_ag' ? 'Fallita (Scarsa fissazione C3b)' : 'Ottimale (Clearance epatosplenica)'}
                </strong>
              </div>

              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block font-semibold">Attivazione Neutrofili & NETs:</span>
                <strong className={`text-sm ${antigenAntibodyRatio === 'excess_ag' && hemodynamicPressure === 'high_glomerular' ? 'text-rose-700' : 'text-slate-700'}`}>
                  {antigenAntibodyRatio === 'excess_ag' && hemodynamicPressure === 'high_glomerular' ? 'Fagocitosi Frustrata Massiva' : 'Minima / Assente'}
                </strong>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed pt-1 m-0">
              {antigenAntibodyRatio === 'excess_ag'
                ? `I piccoli immunocomplessi sfuggono alla clearance reticoloendoteliale. Complice l'elevata pressione di filtrazione e l'attrazione elettrostatica dell'acido sialico cationico, gli aggregati precipitano nella membrana basale glomerulare inducendo glomerulonefrite con tipico pattern granulare all'immunofluorescenza.`
                : `I complessi di grandi dimensioni legano stabilmente C3b e vengono trasportati dai recettori CR1 eritrocitari alla milza, dove il Fattore I e i macrofagi FcγR+ li degradano prontamente senza danno endoteliale.`}
            </p>
          </div>

          {/* Timeline of Serum Sickness */}
          <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 text-xs space-y-2">
            <div className="flex justify-between items-center">
              <strong className="text-purple-900 text-sm font-bold flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-purple-700" />
                Cinetica Temporale della Malattia da Siero (Inoculo Siero Eterologo o Farmaco)
              </strong>
              <span className="font-mono text-purple-800 font-bold">Giorno {serumSicknessDay}</span>
            </div>
            <input
              type="range"
              min={0}
              max={21}
              value={serumSicknessDay}
              onChange={(e) => setSerumSicknessDay(Number(e.target.value))}
              className="w-full h-1.5 bg-purple-200 rounded-lg cursor-pointer accent-purple-700"
            />
            <div className="p-2.5 bg-white rounded border border-purple-200 text-purple-950">
              {serumSicknessDay < 6 && (
                <p className="m-0">
                  <strong>Giorni 0–6 (Periodo di Latenza Silente):</strong> L'antigene eterologo circola liberamente ad alte concentrazioni. Il sistema immunitario sta completando il priming dei linfociti B e T nei linfonodi; nessun sintomo evidente.
                </p>
              )}
              {serumSicknessDay >= 6 && serumSicknessDay <= 14 && (
                <p className="m-0">
                  <strong>Giorni 7–14 (Fase Acuta di Malattia da Siero):</strong> Compaiono i primi anticorpi IgG/IgM specifici. Si formano immunocomplessi in eccesso di antigene che precipitano nei vasi. Esordio della triade clinica: <strong>febbre elevata, artrite simmetrica, porpora cutanea palpabile e crollo del complemento C3/C4</strong>.
                </p>
              )}
              {serumSicknessDay > 14 && (
                <p className="m-0">
                  <strong>Giorni 15–21+ (Risoluzione e Clearance):</strong> Con la produzione massiccia di anticorpi si passa all'eccesso anticorpale e all'equivalenza: gli immunocomplessi diventano grandi e vengono prontamente eliminati dal fegato e dalla milza. I sintomi regrediscono spontaneamente.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TABELLA 27.1: Confronto Fisiopatologico Tipo II vs Tipo III */}
      <section id="tabella-27-1" className="space-y-4 not-prose font-sans">
        <div className="border-l-4 border-rose-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-rose-700 tracking-wider">Tabella Sinottica 27.1</span>
          <h2 className="text-xl font-bold text-slate-900 mt-0.5">
            Confronto Comparativo: Ipersensibilità di Tipo II vs Ipersensibilità di Tipo III
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3">Parametro</th>
                <th className="p-3 bg-rose-50/60 text-rose-950">Tipo II (Citotossica / Tessuto-Specifica)</th>
                <th className="p-3 bg-purple-50/60 text-purple-950">Tipo III (da Immunocomplessi Solubili)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td className="p-3 font-bold text-slate-900">Natura dell'Antigene</td>
                <td className="p-3 bg-rose-50/30"><strong>Insolubile, fisso</strong> su cellule (emazie, piastrine) o matrice tissutale (collagene, desmogleina)</td>
                <td className="p-3 bg-purple-50/30"><strong>Solubile</strong> circolante nel plasma o nei fluidi interstiziali</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">Sede Formazione Complessi</td>
                <td className="p-3 bg-rose-50/30"><em>In situ</em> direttamente sulla superficie cellulare o sulla membrana basale bersaglio</td>
                <td className="p-3 bg-purple-50/30">Nel <strong>torrente circolatorio</strong>, con successiva precipitazione passiva nei tessuti</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">Isotipi Anticorpali</td>
                <td className="p-3 bg-rose-50/30">IgG (sottoclassi IgG1, IgG3) e IgM</td>
                <td className="p-3 bg-purple-50/30">IgG e IgM</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">Meccanismo di Danno</td>
                <td className="p-3 bg-rose-50/30">Lisi osmotica da MAC, opsonizzazione con fagocitosi FcγR, ADCC da cellule NK, o alterazione funzionale recettoriale</td>
                <td className="p-3 bg-purple-50/30">Attivazione complemento vascolare, chemiotassi da C5a, <strong>fagocitosi frustrata dei neutrofili</strong>, NETosi e necrosi fibrinoide</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">Distribuzione Patologica</td>
                <td className="p-3 bg-rose-50/30"><strong>Organo-specifica</strong> o ristretta al citotipo bersaglio</td>
                <td className="p-3 bg-purple-50/30"><strong>Sistemica</strong> (vasi, glomeruli, sinovia, cute, plessi coroidei)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">Pattern Immunofluorescenza</td>
                <td className="p-3 bg-rose-50/30">Tipicamente <strong>lineare e omogeneo</strong> (es. Goodpasture lungo la membrana basale glomerulare)</td>
                <td className="p-3 bg-purple-50/30">Tipicamente <strong>granulare "a cielo stellato" (lumpy-bumpy)</strong></td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">Esempi Clinici Cardine</td>
                <td className="p-3 bg-rose-50/30">Reazione trasfusionale AB0, eritroblastosi fetale Rh, anemie da penicillina, rigetto iperacuto d'organo, Graves, Miastenia Gravis</td>
                <td className="p-3 bg-purple-50/30">Glomerulonefrite post-streptococcica, Malattia da Siero (ATG/farmaci), Crioglobulinemie, LES, polmonite da ipersensibilità</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* TABELLA 27.2: Spettro Clinico delle Malattie da Immunocomplessi */}
      <section id="tabella-27-2" className="space-y-4 not-prose font-sans">
        <div className="border-l-4 border-purple-600 pl-4 py-1">
          <span className="text-xs font-mono font-bold uppercase text-purple-700 tracking-wider">Tabella Sinottica 27.2</span>
          <h2 className="text-xl font-bold text-slate-900 mt-0.5">
            Spettro Clinico ed Eziologico delle Malattie da Immunocomplessi (Tipo III)
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3">Categoria Eziologica</th>
                <th className="p-3">Antigene Coinvolto</th>
                <th className="p-3">Distretto di Deposizione</th>
                <th className="p-3">Quadro Clinico-Patologico</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td className="p-3 font-bold text-blue-900">Infezioni Persistenti Subacute</td>
                <td className="p-3">Streptococchi β-emolitici, Stafilococchi, HBV, HCV, Plasmodium malariae</td>
                <td className="p-3">Glomeruli renali, capillari cutanei, sinovia</td>
                <td className="p-3">Glomerulonefrite post-infettiva (GNPS), porpora vascolare palpabile, artrite reattiva</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-rose-900">Malattie Autoimmuni Sistemiche</td>
                <td className="p-3">Autoantigeni nucleari (DNA a doppia elica, istoni, Sm, Ro/SSA), IgG autologhe</td>
                <td className="p-3">Microcircolo renale, cute, articolazioni, vasi mesenterici, sierose</td>
                <td className="p-3">Nefrite lupica nel LES, vasculite reumatoide con fattore reumatoide IgM anti-IgG</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-purple-900">Sieroterapia & Farmaci</td>
                <td className="p-3">Siero eterologo (ATG di coniglio/cavallo, siero antiofidico), penicillina/FANS-carrier</td>
                <td className="p-3">Vasi sistemici, articolazioni, glomeruli</td>
                <td className="p-3">Malattia da Siero acuta (febbre, artrite simmetrica, rash orticarioide, linfocitosi, ipocomplementemia C3/C4)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-indigo-900">Crioglobulinemie (Tipi 1, 2, 3)</td>
                <td className="p-3">IgM monoclonali o policlonali che precipitano al freddo legando IgG autologhe</td>
                <td className="p-3">Circolo periferico esposto al freddo (mani, piedi, padiglioni auricolari)</td>
                <td className="p-3">Fenomeno di Raynaud secondario con dolore e necrosi ischemica, gelificazione a 4°C, neuropatia periferica</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-emerald-900">Inalazione Cronica di Allergeni</td>
                <td className="p-3">Proteine da deiezioni di uccelli, spore fungine da muffe o condizionatori</td>
                <td className="p-3">Alveoli polmonari e macrofagi alveolari (FcγRI)</td>
                <td className="p-3">Polmonite da ipersensibilità sterile (alveolite allergica estrinseca; NON trattare con antibiotici!)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={QUIZ_QUESTIONS} lessonNumber={27} title="Verifica dell'Apprendimento · Lezione 27" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={FLASHCARDS} lessonNumber={27} title="Flashcard di Ripasso Attivo · Lezione 27" />
    </article>
  );
};
