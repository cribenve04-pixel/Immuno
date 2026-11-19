import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
/**
 * Lezione 29: Immunologia dei Trapianti & Trapianto di Cellule Staminali Emopoietiche:
 * Alloriconoscimento, GVHD, Cellule NK & Farmacologia Immunosoppressiva
 *
 * Corso di Laurea Magistrale in Medicina e Chirurgia
 * Trascrizione integrale integrata dalle lezioni universitarie della Prof.ssa Alessandra Soriani (04/12/2025, 1ª e 2ª ora)
 * Sbobinatori: Carmen Bertuca, Isotta Caimi | Revisori: Chiara D'Alessandro, Daniele Cardini
 */

import React, { useState, useEffect } from 'react';
import {
  Award,
  BookOpen,
  Microscope,
  ShieldCheck,
  Activity,
  Layers,
  Dna,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  Sparkles,
  FileText,
  CheckCircle,
  Heart,
  Zap,
  Crosshair,
  RefreshCw,
  Scissors,
  Stethoscope,
  ShieldAlert,
  ArrowRight,
  Info,
  Check,
  Clock,
  Eye,
  AlertTriangle,
  Flame,
  RotateCcw,
  Save,
  Trash2,
  Droplets,
  SlidersHorizontal
} from 'lucide-react';

interface Lezione29ViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
}

export const Lezione29View: React.FC<Lezione29ViewProps> = ({
  isSerif = false,
  fontSize = 'normal'
}) => {
  // Simulator 1 State: Organ Transplant & HLA Compatibility Lab
  const [selectedDonorType, setSelectedDonorType] = useState<'identical' | 'mismatch_1' | 'mismatch_class2' | 'mismatch_high' | 'xenograft'>('identical');
  const [selectedImmunosuppression, setSelectedImmunosuppression] = useState<'none' | 'calcineurin' | 'mTOR' | 'belatacept' | 'steroids_triple'>('calcineurin');
  const [simCrossmatchPositive, setSimCrossmatchPositive] = useState<boolean>(false);

  // Simulator 2 State: HSC Transplant, KIR-HLA Mismatch & NK Alloreactivity
  const [hscTransplantType, setHscTransplantType] = useState<'hla_matched' | 'haplo_perugia' | 't_depleted_alone'>('haplo_perugia');
  const [hasKirMismatch, setHasKirMismatch] = useState<boolean>(true);
  const [conditioningIntensity, setConditioningIntensity] = useState<'myeloablative' | 'reduced'>('myeloablative');

  // Flashcards active-recall state
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);


  const toggleCard = (index: number) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleOptionSelect = (qIdx: number, oIdx: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: oIdx }));
  };

  const typographyClass = isSerif ? 'font-serif' : 'font-sans';
  const sizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // Compute Simulator 1 Outcome
  const getGraftOutcome = () => {
    if (selectedDonorType === 'xenograft') {
      return {
        type: 'Rigetto Iperacuto Grave (Minuti / Ore)',
        badge: 'bg-rose-100 text-rose-800 border-rose-300',
        histology: 'Legame di anticorpi naturali umani preformati contro α-Galattosio (α-Gal). Attivazione massiva della via classica del complemento, danno endoteliale acuto, degranulazione piastrinica, trombosi microvascolare occludente e infarto d\'organo irreversibile.',
        survival24m: '0%',
        pathway: 'Anticorpi preformati xenoreattivi + Lisi da MAC (C5b-9) + Neutrofili',
        recommendation: 'Necessario donatore suino OGM con knockout per α1,3-galattosiltransferasi (GGTA1), transgeni per inibitori del complemento umano (hDAF/CD55, hCD46, hCD59) e inattivazione retrovirus PERV.'
      };
    }
    if (simCrossmatchPositive) {
      return {
        type: 'Rigetto Iperacuto Vascolare (Sala Operatoria)',
        badge: 'bg-red-100 text-red-900 border-red-300',
        histology: 'Crossmatch positivo: presenza di alloanticorpi preformati donatore-specifici (anti-HLA-I o anti-ABO da gravidanze, trasfusioni o trapianti pregressi). Trombosi fulminante dei capillari peritubulari e necrosi ischemica prima della chiusura chirurgica.',
        survival24m: '0%',
        pathway: 'Attivazione immediata del Complemento (C3a, C5a, MAC) e reclutamento massivo di neutrofili.',
        recommendation: 'Crossmatch controindicato in chirurgia dei trapianti. Ricerca di donatore compatibile con crossmatch linfocitario CDC negativo o desensibilizzazione d\'urgenza.'
      };
    }
    if (selectedDonorType === 'identical') {
      if (selectedImmunosuppression === 'none') {
        return {
          type: 'Rigetto Cronico Lento (Mesi / Anni)',
          badge: 'bg-amber-100 text-amber-800 border-amber-300',
          histology: 'Nonostante la perfetta identità HLA (0 mismatch), l\'assenza di immunosoppressione permette il riconoscimento indiretto di Antigeni Minori di Istocompatibilità (mHA, es. antigene H-Y codificato dal cromosoma Y). Lenta iperplasia intimale ed arteriosclerosi del graft.',
          survival24m: '85%',
          pathway: 'Riconoscimento indiretto di peptidi mHA da parte dei CD4+ con flogosi subclinica.',
          recommendation: 'Richiesta immunosoppressione di mantenimento a basso dosaggio anche in trapianti HLA-identici.'
        };
      }
      return {
        type: 'Attecchimento Eccellente & Tolleranza Funzionale',
        badge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        histology: 'Zero mismatch HLA di classe I e II. Con inibitori della calcineurina o Belatacept, la funzionalità d\'organo resta ottimale a lungo termine con minima fibrosi interstiziale.',
        survival24m: '95–98%',
        pathway: 'Minima alloattivazione; controllo efficace della proliferazione T e della sintesi di IL-2.',
        recommendation: 'Protocollo standard di riferimento. Monitoraggio nefrotossicità da CNI e filtrato glomerulare.'
      };
    }
    if (selectedDonorType === 'mismatch_class2') {
      if (selectedImmunosuppression === 'none') {
        return {
          type: 'Rigetto Acuto Grave Precoce (1–2 Settimane)',
          badge: 'bg-rose-100 text-rose-800 border-rose-300',
          histology: 'Mismatch di classe II (HLA-DR/DQ): innesco esplosivo di linfociti T helper alloreattivi sia per via diretta che indiretta. Intensa secrezione di IL-2 e IFN-γ, infiltrazione linfocitaria parenchimale, tubulite grave e rigetto cellulare acuto.',
          survival24m: '35%',
          pathway: 'Alloattivazione T-helper policlonale ad alta frequenza (1–10%) e priming di CTL CD8+.',
          recommendation: 'I mismatch di classe II hanno un impatto prognostico peggiore rispetto alla classe I. Richiesta terapia d\'induzione biologica (anti-CD25) e triplice immunosoppressione.'
        };
      }
      return {
        type: 'Rischio di Rigetto Acuto Controllato / Rigetto Cronico Tardivo',
        badge: 'bg-blue-100 text-blue-800 border-blue-300',
        histology: 'La terapia immunosoppressiva previene l\'episodio acuto fulminante, ma l\'alloriconoscimento indiretto persistente stimola la produzione de novo di alloanticorpi donatore-specifici (ABMR tardivo, positività C4d nei capillari) e vasculopatia dell\'allotrapianto a 5–10 anni.',
        survival24m: '78%',
        pathway: 'Inibizione dell\'asse calcineurina/NFAT o mTOR; controllo del segnale 3 citochinico.',
        recommendation: 'Monitoraggio seriato degli anticorpi anti-HLA (Luminex) e biopsie protocollari.'
      };
    }
    // mismatch_1 or mismatch_high
    return {
      type: selectedDonorType === 'mismatch_high' ? 'Rigetto Acuto Moderato-Severo & Rapida Fibrosi' : 'Sopravvivenza Buona con Immunosoppressione Standard',
      badge: selectedDonorType === 'mismatch_high' ? 'bg-orange-100 text-orange-800 border-orange-300' : 'bg-cyan-100 text-cyan-800 border-cyan-300',
      histology: selectedDonorType === 'mismatch_high'
        ? '3–4 mismatch HLA: elevata carica allogenica. Rischio di rigetto acuto cellulare (endotelite, tubulite) e deposizione di C4d. Necessità di boli steroidei o siero antilinfocitario (ATG).'
        : '1–2 mismatch HLA di classe I: risposta T CD8+ gestibile farmacologicamente. Buon controllo a medio termine con sopravvivenza a 2 anni dell\'88%.',
      survival24m: selectedDonorType === 'mismatch_high' ? '60%' : '88%',
      pathway: 'Infiltrazione da CTL e macrofagi M1 guidati da IFN-γ.',
      recommendation: 'Adeguamento terapeutico con associazione CNI + Micofenolato Mofetile + Steroidi.'
    };
  };

  // Compute Simulator 2 Outcome (HSC Transplant)
  const getHscOutcome = () => {
    if (hscTransplantType === 't_depleted_alone') {
      return {
        gvhdRisk: 'Bassissimo (< 5%)',
        gvhdBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        gvlEffect: 'Assente / Debolissimo',
        gvlBadge: 'bg-rose-50 text-rose-700 border-rose-200',
        relapseRate: 'Molto Alta (60–75%)',
        relapseBadge: 'bg-red-100 text-red-900 border-red-300',
        summary: 'Il purging midollare con separazione magnetica anti-CD3 elimina i linfociti T maturi prevenendo la GVHD, ma abolisce l\'effetto Graft-Versus-Leukemia (GVL). Le cellule neoplastiche residue proliferano indisturbate provocando frequenti recidive letali.',
        mechanisms: 'Mancanza di cellule effettrici donatrici alloreattive contro i blasti leucemici residui.'
      };
    }
    if (hscTransplantType === 'haplo_perugia') {
      if (hasKirMismatch) {
        return {
          gvhdRisk: 'Basso (10–15%)',
          gvhdBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          gvlEffect: 'Massimo (NK Alloreattive)',
          gvlBadge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          relapseRate: 'Minima / Quasi Azzerata (0–5% in LMA)',
          relapseBadge: 'bg-emerald-100 text-emerald-900 border-emerald-300',
          summary: 'Protocollo Perugia (Locatelli, Moretti, Velardi): nel trapianto aploidentico con mismatch KIR-HLA, le cellule Natural Killer del donatore non ricevono segnali inibitori dai blasti leucemici (missing-self allogenico) e li sterminano con perforina/granzimi. Le cellule NK NON causano GVHD perché i tessuti sani non esprimono i ligandi attivatori di stress, e inoltre eliminano le DC del ricevente bloccando il priming T.',
          mechanisms: 'Alloreattività NK mediata da mismatch tra KIR inibitori del donatore e HLA-I del ricevente; distruzione dei blasti e delle cellule dendritiche dell\'ospite.'
        };
      }
      return {
        gvhdRisk: 'Moderato (20–30%)',
        gvhdBadge: 'bg-amber-50 text-amber-700 border-amber-200',
        gvlEffect: 'Intermedio (solo T-mediato)',
        gvlBadge: 'bg-blue-50 text-blue-700 border-blue-200',
        relapseRate: 'Moderata (25–35%)',
        relapseBadge: 'bg-amber-100 text-amber-900 border-amber-300',
        summary: 'Senza mismatch KIR-HLA (KIR match completo), le cellule NK del donatore vengono inibite dal riconoscimento dell\'HLA-I self sul tumore. L\'effetto antileucemico dipende solo dai cloni T, aumentando il rischio di GVHD tissutale a parità di protezione antineoplastica.',
        mechanisms: 'Le cellule NK ricevono il segnale inibitorio da HLA-I e non distruggono i blasti leucemici.'
      };
    }
    // hla_matched
    return {
      gvhdRisk: 'Moderato (30–40% per mHA)',
      gvhdBadge: 'bg-amber-50 text-amber-700 border-amber-200',
      gvlEffect: 'Buono (T-dipendente)',
      gvlBadge: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      relapseRate: 'Bassa-Intermedia (20–30%)',
      relapseBadge: 'bg-blue-100 text-blue-900 border-blue-300',
      summary: 'Trapianto standard HLA-identico da donatore compatibile. I linfociti T maturi riconoscono gli antigeni minori di istocompatibilità (mHA): forniscono un buon effetto GVT/GVL ma espongono al rischio di GVHD acuta e cronica a cute, fegato e intestino.',
      mechanisms: 'Alloreattività T diretta contro epitopi polimorfici non-HLA (mHA) tra donatore e ricevente.'
    };
  };

  const graftOutcome = getGraftOutcome();
  const hscOutcome = getHscOutcome();

  // 6 Active Recall Flashcards
  const flashcardsData = [
    {
      q: 'Qual è la differenza concettuale fondamentale tra il rigetto di un organo solido (HVG) e la reazione nel trapianto di midollo osseo (GVH)?',
      a: 'Nel trapianto d\'organo solido si ha una reazione Host-Versus-Graft (HVG): i linfociti immunocompetenti del ricevente riconoscono gli alloantigeni dell\'organo trapiantato e lo rigettano. Nel trapianto di midollo osseo/HSC si ha un "trapianto allo specchio" con reazione Graft-Versus-Host (GVH): il ricevente è immunocompromesso/mieloablato, mentre i linfociti T maturi immunocompetenti infusi con l\'innesto del donatore aggrediscono i tessuti sani dell\'ospite (cute, fegato, intestino).'
    },
    {
      q: 'Perché l\'alloriconoscimento DIRETTO genera una risposta immunitaria molto più violenta e policlonale rispetto a quella contro un normale virus?',
      a: 'Nel riconoscimento diretto, il TCR riconosce direttamente la struttura allosterica dell\'intera molecola MHC allogenica non processata sulle cellule dendritiche del donatore. Il peptide alloggiato serve solo da stabilizzatore. Poiché molti cloni T diversi possono legarsi all\'MHC allogenico a prescindere dal peptide, la frequenza di linfociti T alloreattivi è sbalorditiva (1–10% dell\'intero repertorio T corporeo), rispetto all\'1/100.000 tipico di un peptide virale convenzionale.'
    },
    {
      q: 'Qual è il bersaglio molecolare primario responsabile del rigetto iperacuto negli xenotrapianti da maiale all\'uomo e come è stato superato?',
      a: 'Il determinante carboidratico α-galattosio (Galα1,3-Gal), espresso dall\'endotelio vascolare dei suini ma assente nell\'uomo (che possiede anticorpi naturali preformati anti-Gal). È stato superato mediante ingegneria genetica: maiali con knockout del gene dell\'enzima α1,3-galattosiltransferasi (GGTA1), transgeni per regolatori umani del complemento (hDAF/CD55, hCD46, hCD59) e inattivazione di retrovirus endogeni suini (PERV).'
    },
    {
      q: 'In cosa consiste la Mixed Lymphocyte Reaction (MLR) unidirezionale e come misura il potenziale alloreattivo?',
      a: 'Le PBMC del ricevente vengono irradiate o trattate con mitomicina C affinché non possano replicarsi ma continuino ad esprimere gli alloantigeni (stimolatrici); vengono incubate con le PBMC vitali del donatore (risponditrici). Si aggiunge timidina triziata (³H-TdR): se c\'è incompatibilità, i linfociti del donatore proliferano incorporando la timidina radioattiva nel loro DNA e secernono IL-2/IFN-γ. Maggiore è la radioattività contata, maggiore è l\'alloreattività e peggiore è il donatore.'
    },
    {
      q: 'Qual è il principio biologico della rivoluzione delle cellule NK nel trapianto aploidentico secondo la scuola italiana (Moretti, Locatelli, Velardi)?',
      a: 'Si basa sulla "teoria del missing-self": se esiste un mismatch KIR-HLA (le cellule NK del donatore possiedono recettori KIR inibitori per i quali il ricevente non possiede il corrispondente ligando HLA-I), le cellule NK del donatore non ricevono alcun segnale inibitorio dai blasti leucemici e li l面向izzano ferocemente (potente effetto GVL, recidive ridotte allo 0% nella LMA). Le cellule NK NON inducono GVHD poiché i tessuti sani non esprimono ligandi attivatori, ed eliminano le DC dell\'ospite prevenendo il rigetto.'
    },
    {
      q: 'Qual è la cascata biochimica mirata dalla Ciclosporina A e dal Tacrolimus (FK506)?',
      a: 'Entrambi bloccano il Segnale 1/Calcio: il segnale del TCR induce l\'aumento di Ca²⁺ citoplasmatico che attiva la fosfatasi Calcineurina. La Calcineurina normalmente defosforila il fattore di trascrizione NFAT permettendone la traslocazione nucleare e la trascrizione del gene dell\'IL-2. La Ciclosporina lega la Ciclofillina, mentre il Tacrolimus lega la proteina FKBP12: entrambi i complessi farmaco-immunofillina inibiscono l\'attività fosfatasica della calcineurina, arrestando la produzione di IL-2.'
    }
  ];

  // 10 Exam Questions with Detailed Rationales
  const quizQuestions = [
    {
      q: 'In quale tipologia di rigetto del trapianto d\'organo solido sono coinvolti anticorpi preformati specifici che attivano la cascata del complemento e determinano trombosi microvascolare immediata in sala operatoria?',
      options: [
        'Rigetto iperacuto',
        'Rigetto acuto cellulare mediato da linfociti CD8+',
        'Rigetto cronico con fibrosi interstiziale',
        'Reazione del trapianto contro l\'ospite (GVHD)'
      ],
      correct: 0,
      rationale: 'Il rigetto iperacuto avviene entro minuti o poche ore dal clampaggio vascolare ed è provocato da alloanticorpi preformati nel siero del ricevente (anti-ABO o anti-HLA-I da precedenti gravidanze, trasfusioni o trapianti). Questi legano l\'endotelio capillare dell\'innesto, fissano C1q e attivano la via classica del complemento, inducendo necrosi endoteliale, richiamo di neutrofili, rilascio di enzimi litici, trombosi massiva e infarto ischemico d\'organo.'
    },
    {
      q: 'Quale delle seguenti affermazioni sulla genetica del complesso HLA umano (Cromosoma 6p21.3) è CORRETTA?',
      options: [
        'I geni HLA hanno un\'espressione dominante a carico esclusivo dell\'aplotipo materno.',
        'La probabilità statistica che due fratelli con gli stessi genitori condividano entrambi gli aplotipi HLA (identità completa) è del 25%.',
        'I geni di classe III codificano per le catene invarianti di presentazione lipidica CD1.',
        'Le molecole HLA-G sono espresse ubiquitariamente su tutte le cellule nucleate somatiche.'
      ],
      correct: 1,
      rationale: 'Gli antigeni HLA sono codominanti e vengono ereditati in blocco (aplotipi). Dall\'incrocio mendeliano tra madre e padre (ciascuno con due aplotipi diversi), la prole presenta 4 combinazioni possibili con identica frequenza: 25% probabilità di identità HLA completa (due aplotipi identici), 50% di essere aploidentici (un aplotipo identico), e 25% di mismatch completo (nessun aplotipo in comune).'
    },
    {
      q: 'Qual è la fondamentale differenza molecolare tra la via DIRETTA e la via INDIRETTA di alloriconoscimento T?',
      options: [
        'Nella via diretta il TCR riconosce allopeptidi processati su MHC self, mentre nell\'indiretta riconosce lipidi su CD1.',
        'Nella via diretta i linfociti T riconoscono l\'intera molecola MHC allogenica intatta sulle cellule dendritiche del donatore; nella via indiretta le APC del ricevente internalizzano e processano l\'MHC del donatore esponendone i peptidi su MHC-II self.',
        'La via diretta attiva esclusivamente le plasmacellule della milza, mentre la via indiretta attiva le cellule NK.',
        'La via indiretta ha una frequenza clonale del 10% e si esaurisce entro le prime 24 ore dal trapianto.'
      ],
      correct: 1,
      rationale: 'Nell\'alloriconoscimento diretto, i linfociti T del ricevente riconoscono l\'MHC allogenico intatto non processato esposto sulle cellule dendritiche passeggere del donatore (elevatissima frequenza clonale 1–10%, rigetto acuto precoce). Nell\'alloriconoscimento indiretto, le APC dell\'ospite fagocitano cellule dell\'organo trapiantato, processano le proteine MHC allogeniche ed espongono allopeptidi su MHC-II self ai linfociti CD4+ (frequenza clonale fisiologica, guida del rigetto cronico e della sintesi anticorpale).'
    },
    {
      q: 'Per quale motivo clinico il test di crossmatch linfocitario CDC (Microcitotossicità Complemento-Dipendente) viene eseguito obbligatoriamente prima di un trapianto renale?',
      options: [
        'Per quantificare il livello di globuli rossi del donatore.',
        'Per verificare se il ricevente possiede già anticorpi preformati citotossici contro i linfociti del donatore (prevenzione del rigetto iperacuto).',
        'Per indurre la proliferazione clonale delle cellule staminali del donatore.',
        'Per misurare l\'espressione di recettori CXCR4 sulle cellule endoteliali.'
      ],
      correct: 1,
      rationale: 'Il crossmatch consiste nel mettere a contatto il siero del potenziale ricevente con i linfociti del donatore in presenza di complemento e colorante vitale (Trypan blue). Se il ricevente ha anticorpi specifici diretti contro l\'HLA del donatore, questi legano le cellule, attivano il MAC del complemento e le lisano (il colorante penetra nella cellula). Un crossmatch positivo controindica categoricamente il trapianto poiché provocherebbe rigetto iperacuto immediato.'
    },
    {
      q: 'Quale determinante carboidratico costituisce il principale ostacolo immunologico negli xenotrapianti da suino all\'uomo?',
      options: [
        'Acido N-glicolilneuraminico (Neu5Gc)',
        'α-Galattosio (Galα1,3-Gal)',
        'Fucosio α1,2-galattosidico dell\'antigene H',
        'Polisaccaride capsulare poliribosilribitolo fosfato'
      ],
      correct: 1,
      rationale: 'L\'endotelio vascolare porcino esprime elevatissime quantità di residui oligosaccaridici terminanti con α-galattosio (α-Gal), sintetizzati dall\'enzima α1,3-galattosiltransferasi. Gli esseri umani e le scimmie del Vecchio Mondo hanno perso questo enzima ed esprimono anticorpi naturali preformati anti-Gal (circa l\'1% delle immunoglobuline circolanti totali), che legano l\'endotelio provocando rigetto iperacuto fulminante.'
    },
    {
      q: 'Negli esperimenti storici di Peter Medawar sui trapianti cutanei murini, cosa dimostrò che il rigetto è un fenomeno immunologico adattativo a memoria cellulare?',
      options: [
        'Il fatto che un secondo trapianto dallo stesso donatore venisse rigettato con identica latenza temporale di 14 giorni.',
        'Il secondo innesto cutaneo dallo stesso ceppo donatore veniva rigettato in modo accelerato (3–5 giorni, second-set rejection), e tale immunità rapida poteva essere trasferita adottivamente con i linfociti ma non con il siero.',
        'Il rigetto avveniva solo se gli animali ricevevano un antibiotico simultaneo.',
        'La completa insensibilità del fenomeno alla rimozione dei linfociti T.'
      ],
      correct: 1,
      rationale: 'Medawar dimostrò che il rigetto primario (first-set) richiedeva 10–14 giorni (tempo di priming adattativo), mentre un secondo innesto dello stesso donatore scatenava un rigetto rapido a 3–5 giorni (second-set rejection, memoria immunologica). Dimostrò inoltre che la memoria era cellulo-mediata trasferendo il fenotipo ad un topo naïve tramite linfociti (e non con il siero), provando la natura T-dipendente del rigetto.'
    },
    {
      q: 'Per quale motivo il feto, pur esprimendo alloantigeni paterni (allotrapianto emi-allogenico naturale), non viene rigettato dal sistema immunitario materno?',
      options: [
        'Perché il feto produce grandi quantità di IL-2 che silenziano le cellule dendritiche materne.',
        'Perché le cellule del trofoblasto non esprimono MHC-II né MHC-I classici polimorfici (HLA-A, HLA-B), ma esprimono molecole non classiche come HLA-G ed HLA-E (che inibiscono le NK), secernono IL-10 ed esprimono regolatori del complemento (DAF, MCP).',
        'Perché il sistema immunitario materno entra in anergia globale irreversibile per tutta la gestazione.',
        'Perché la barriera placentare è completamente impermeabile alle immunoglobuline materne.'
      ],
      correct: 1,
      rationale: 'Il trofoblasto placentare crea un formidabile privilegio immunologico locale: assenza di MHC-II e di MHC-I classici (evitando l\'attacco da parte di CTL alloreattivi materni diretti contro allotipi paterni); espressione strategica di HLA-G (che lega il recettore inibitorio ILT-2 su NK e macrofagi) e HLA-E (che lega NKG2A); alta produzione locale di citochine soppressive (IL-10, TGF-β) ed enzimi come IDO; ed espressione di DAF/CD55 e MCP/CD46 che inibiscono le convertasi del complemento.'
    },
    {
      q: 'Nella malattia del trapianto contro l\'ospite (GVHD) secondaria a trapianto di midollo osseo allogenico, quali sono i tre principali organi bersaglio aggrediti dai linfociti T del donatore?',
      options: [
        'Cervello, milza e miocardio',
        'Cute, fegato e tratto gastroenterico',
        'Rene, tiroide e polmone',
        'Cornea, midollo osseo e pancreas'
      ],
      correct: 1,
      rationale: 'La GVHD acuta e cronica colpisce in via prediletta la cute (rash maculopapulare eritematoso, necrolisi epidermica), il fegato (colestasi, iperbilirubinemia, necrosi duttale biliare) e il tratto gastroenterico (diarrea acquosa profusa indotta da apoptosi enterocitaria, denudamento mucoso ed emorragie). Tale tropismo è guidato da specifici recettori di homing e chemochine indotti dal regime condizionante.'
    },
    {
      q: 'Nel protocollo di trapianto aploidentico per la Leucemia Mieloide Acuta (scuola di Perugia), perché il mismatch KIR-HLA tra donatore e ricevente azzera le recidive leucemiche senza provocare GVHD?',
      options: [
        'Perché le cellule NK del donatore esprimono FasL che lega esclusivamente i cheratinociti cutanei.',
        'Perché le cellule NK del donatore possiedono KIR inibitori che non trovano il corrispondente ligando HLA-I sui blasti leucemici del ricevente (missing-self), uccidendoli; al contempo le NK non provocano GVHD perché i tessuti sani dell\'ospite non esprimono ligandi attivatori di stress.',
        'Perché le cellule NK si trasformano in plasmacellule secernenti anticorpi monoclonali neutralizzanti.',
        'Perché la selezione timica elimina tutte le cellule NK prima dell\'infusione endovenosa.'
      ],
      correct: 1,
      rationale: 'Nel trapianto aploidentico con alloreattività KIR-HLA (missing-self mediato da NK), le cellule NK del donatore non trovano il ligando HLA-I inibitorio sui blasti leucemici dell\'ospite: prevalgono i segnali dei recettori attivatori (NCR, NKG2D, DNAM-1) e la cellula tumorale viene eliminata (Graft-Versus-Leukemia perfetto). I tessuti normali dell\'ospite non subiscono lisi (niente GVHD) perché sono privi dei ligandi attivatori inducibili dallo stress tumorale. Inoltre le NK eliminano le APC dell\'ospite prevenendo il priming dei linfociti T.'
    },
    {
      q: 'Quale coppia di farmaci immunosoppressori blocca la proliferazione linfocitaria agendo SPECIFICAMENTE sull\'attività fosfatasica della calcineurina mediata da immunofilline intracellulari?',
      options: [
        'Rapamicina (Sirolimus) e Belatacept',
        'Ciclosporina A (CsA) e Tacrolimus (FK506)',
        'Micofenolato Mofetile e Azatioprina',
        'Prednisone e Basiliximab'
      ],
      correct: 1,
      rationale: 'Ciclosporina A e Tacrolimus sono inibitori della calcineurina (CNI). La Ciclosporina forma un complesso binario con la Ciclofillina, mentre il Tacrolimus lega la proteina FKBP12. Entrambi i complessi legano e inattivano la fosfatasi Calcineurina, impedendo la defosforilazione del fattore NFAT e la sua traslocazione nel nucleo, con conseguente blocco della trascrizione del gene di IL-2 (Segnale 1-dipendente).'
    }
  ];

  return (
    <article className={`space-y-12 text-slate-800 ${typographyClass} ${sizeClass}`}>
      {/* MONOGRAPHIC HERO BANNER */}
      <section className="bg-gradient-to-br from-teal-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-teal-800/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-teal-300">
            <span className="px-2.5 py-1 bg-teal-900/60 border border-teal-700/50 rounded-md font-semibold tracking-wide">
              LEZIONE 29 · TRATTATO MONOGRAFICO
            </span>
            <span>·</span>
            <span>4 Dicembre 2025 (1ª e 2ª ora)</span>
            <span>·</span>
            <span>Docente: Prof.ssa Alessandra Soriani</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Immunologia dei Trapianti d'Organo & Trapianto di Cellule Staminali Emopoietiche:
            <span className="block text-teal-300 mt-1">
              Alloriconoscimento, GVHD, Rivoluzione NK & Farmacologia Immunosoppressiva
            </span>
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm max-w-4xl leading-relaxed">
            Dalla pionieristica chirurgia dell'Aula Paride Stefanini e dalle scoperte Nobel di Medawar e Snell
            alla genetica formale dell'HLA sul cromosoma 6. Trattazione integrata dei tre rigetti d'organo solido (iperacuto,
            acuto, cronico), xenotrapianti porcini OGM e barriera dell'α-galattosio, alloriconoscimento diretto vs indiretto,
            danno da ischemia-riperfusione (IRI) e allarmine DAMP. Analisi clinica del "trapianto allo specchio" (HSC e GVHD vs GVL),
            la rivoluzione italiana del trapianto aploidentico con alloreattività NK (Moretti, Locatelli, Velardi)
            e la dissezione farmacologica dei tre segnali del linfocita T (Ciclosporina, Tacrolimus, Rapamicina, Belatacept, biologici).
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-teal-800/50 text-xs">
            <div className="bg-white/5 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
              <span className="text-teal-400 font-mono block text-[11px] font-semibold">ORGANO SOLIDO</span>
              <span className="text-slate-200 font-bold">Host-Versus-Graft (HVG)</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
              <span className="text-teal-400 font-mono block text-[11px] font-semibold">MIDOLLO OSSEO / HSC</span>
              <span className="text-slate-200 font-bold">Graft-Versus-Host (GVH)</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
              <span className="text-teal-400 font-mono block text-[11px] font-semibold">ALLORICONOSCIMENTO</span>
              <span className="text-slate-200 font-bold">Diretto (1–10%) vs Indiretto</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
              <span className="text-teal-400 font-mono block text-[11px] font-semibold">TARGET MOLECOLARI</span>
              <span className="text-slate-200 font-bold">Calcineurina, mTOR, B7</span>
            </div>
          </div>
        </div>
      </section>

      {/* 29.1 CLINICAL FRAMEWORK & GENETIC CLASSIFICATION */}
      <section id="sec-29-1" className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">29.1</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Inquadramento Clinico & Classificazione Genetica dei Trapianti
          </h2>
        </div>

        <p>
          Il trapianto rappresenta l'intervento terapeutico d'elezione per patologie d'organo terminali altrimenti prive di
          alternative cliniche: la cheratopatia bollosa e le distrofie corneali (trapianto di cornea), l'insufficienza renale
          cronica terminale (trapianto renale), lo scompenso cardiaco refrattario (trapianto cardiaco), la cirrosi scompensata
          e l'epatocarcinoma (trapianto di fegato), la fibrosi polmonare e l'ipertensione polmonare primitiva (trapianto polmonare o cuore-polmone),
          e il diabete mellito scompensato (trapianto di pancreas o isole pancreatiche). A questi si affianca il trapianto di
          cellule staminali emopoietiche (HSC, midollo osseo, sangue periferico mobilizzato o cordone ombelicale), indicato in
          leucemie, linfomi, mielomi, anemie aplastiche e difetti monogenici del sistema emopoietico.
        </p>

        <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl text-xs space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-900">
            <Award className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Pietra Miliare Storica: L'Aula Paride Stefanini</span>
          </div>
          <p className="text-amber-950 leading-relaxed">
            L'aula magna del Policlinico è intitolata al Prof. <strong>Paride Stefanini</strong>, pioniere assoluto della chirurgia
            dei trapianti in Italia: eseguì a Roma il primo trapianto di rene nel nostro Paese (su una giovane ragazza, che sopravvisse
            purtroppo solo pochi giorni a causa delle primordiali tecniche immunosoppressive dell'epoca). Stefanini fu inoltre autore del
            secondo <em>xenotrapianto</em> renale al mondo, prelevando un organo da uno scimpanzé. Sebbene il paziente andò incontro
            a un violento rigetto acuto, quei tentativi pionieristici aprirono la strada all'era moderna della chirurgia e dell'immunologia dei trapianti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="font-bold text-slate-900 block text-sm">1. Autologo (Autograft)</span>
            <p className="text-slate-600">
              Trapianto da una sede corporea all'altra <strong>nello stesso paziente</strong> (es. innesti cutanei per grandi ustionati,
              vene safene per bypass aorto-coronarico, oppure cellule staminali emopoietiche autologhe crioconservate dopo chemio ad alte dosi).
              <strong>Zero rischio di rigetto immunologico</strong>.
            </p>
          </div>
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="font-bold text-slate-900 block text-sm">2. Singenico (Isograft)</span>
            <p className="text-slate-600">
              Trapianto tra individui <strong>geneticamente identici</strong> (gemelli monozigoti nell'uomo o ceppi murini inbred in laboratorio).
              Non vi è diversità genetica negli antigeni d'istocompatibilità: il trapianto attecchisce stabilmente senza necessità di immunosoppressione.
            </p>
          </div>
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="font-bold text-slate-900 block text-sm">3. Allogenico (Allograft)</span>
            <p className="text-slate-600">
              Trapianto tra individui <strong>diversi appartenenti alla medesima specie</strong> (da donatore a ricevente umano). È la condizione
              clinica standard: la divergenza allelica dei loci HLA e degli antigeni minori scatena una potente reazione immunitaria di rigetto (necessaria immunosoppressione cronica).
            </p>
          </div>
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="font-bold text-slate-900 block text-sm">4. Xenogenico (Xenograft)</span>
            <p className="text-slate-600">
              Trapianto <strong>inter-specie</strong> (es. cuore o rene di maiale trapiantato nell'uomo). Ostacolato da anticorpi naturali
              preformati umani anti-α-Gal e incompatibilità biochimiche dei regolatori del complemento, oggi affrontato con complessi protocolli di editing genomico suino.
            </p>
          </div>
        </div>
      </section>

      {/* 29.2 HISTORICAL MILESTONES & HLA GENETICS */}
      <section id="sec-29-2" className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">29.2</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Basi Storiche & Genetica del Complesso Maggiore di Istocompatibilità (HLA)
          </h2>
        </div>

        <p>
          La comprensione biologica del rigetto ha radici negli esperimenti fondamentali della prima metà del Novecento.
          Negli anni '30–'50, <strong>Peter Gorer</strong> identificò nel topo un gruppo di antigeni cellulari (antigene II) codificati
          in un'area genomica specifica, la cui incompatibilità provocava il rigetto dei trapianti tumorali e cutanei.
          <strong>George Snell</strong> (Premio Nobel per la Medicina nel 1980, assieme a Jean Dausset e Baruj Benacerraf) mappò
          questi geni dimostrando che definiscono il <em>Complesso Maggiore di Istocompatibilità (MHC/HLA)</em>.
          Parallelamente, <strong>Sir Peter Medawar</strong> (Premio Nobel nel 1960) dimostrò sperimentalmente che il rigetto d'organo
          è un autentico fenomeno di <strong>immunità adattativa cellulo-mediata dotato di memoria immunologica e specificità</strong>:
        </p>

        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
          <span className="font-mono font-bold text-slate-800 uppercase tracking-wide block">
            L'Esperimento Classico di Medawar: Rigetto Primario (First-Set) vs Secondario (Second-Set)
          </span>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>
              <strong>Trapianto Primario (First-Set):</strong> innestando cute da un topo di ceppo A a un ceppo allogenico B, l'organo appare
              inizialmente vascolarizzato e vitale; dopo 7–10 giorni compare infiltrazione leucocitaria con necrosi completa e rigetto al 10°–14° giorno (tempo necessario al priming dei linfociti T).
            </li>
            <li>
              <strong>Trapianto Secondario Accelerato (Second-Set):</strong> se lo stesso topo B riceve un secondo innesto cutaneo dallo stesso
              ceppo A, il rigetto si manifesta in modo fulmineo e violento in <strong>soli 3–5 giorni</strong>, dimostrando l'esistenza di memoria immunologica pre-attivata.
            </li>
            <li>
              <strong>Trasferimento Adottivo Cellulo-Mediato:</strong> iniettando i linfociti (e non il siero) del topo B immunizzato in un terzo
              topo B naïve, quest'ultimo rigettava il primo innesto cutaneo di ceppo A in maniera accelerata second-set. Il rigetto è dunque un processo guidato dai linfociti T.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Dna className="w-4 h-4 text-teal-600" />
              Architettura Genomica: Cromosoma 6p21.3
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Nell'essere umano il complesso genico HLA mappa sul braccio corto del <strong>cromosoma 6</strong>:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-slate-600">
              <li><strong>MHC di Classe I Classiche:</strong> HLA-A, HLA-B, HLA-C (espresse su tutte le cellule nucleate, presentano peptidi a CTL CD8+).</li>
              <li><strong>MHC di Classe I Non Classiche:</strong> HLA-E, HLA-F, HLA-G (ruolo immunomodulatore essenziale nella tolleranza materno-fetale e nel controllo delle cellule NK).</li>
              <li><strong>MHC di Classe II:</strong> HLA-DP, HLA-DQ, HLA-DR (eterodimeri α/β espressi su APC professionali: cellule dendritiche, macrofagi, linfociti B).</li>
              <li><strong>MHC di Classe III:</strong> molecole non deputate alla presentazione antigenica (fattori del complemento C2, C4, Fattore B, e citochine TNF-α, Linfotossina).</li>
              <li><strong>MHC-I Relate:</strong> MICA e MICB (ligandi di stress sul cromosoma 6 per il recettore attivatorio NKG2D delle cellule NK e dei CTL).</li>
            </ul>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-600" />
              Codominanza, Ereditarietà in Blocco & Modelli Murini
            </h4>
            <p className="text-slate-700 leading-relaxed">
              I geni HLA mostrano <strong>espressione codominante</strong>: gli alleli di entrambi i genitori vengono trascritti e tradotti simultaneamente.
              I loci di classe I e II vengono ereditati in blocco come un <em>aplotipo materno</em> e un <em>aplotipo paterno</em>.
            </p>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 space-y-1">
              <strong>Regola Genetica degli Incroci (Topi F1):</strong>
              <p>
                Un topo ibrido F1 (incrocio A × B) esprime codominantemente sia gli antigeni di ceppo A sia di ceppo B.
                Pertanto, un trapianto cutaneo proveniente dal ceppo parentale puro A o B viene <strong>accettato</strong> dall'ibrido F1
                (perché per F1 gli alleli parentali sono riconosciuti come self). Al contrario, un innesto cutaneo proveniente dall'ibrido F1
                trapiantato nel genitore A viene <strong>immediatamente rigettato</strong>, poiché il topo A riconosce l'allele B come alloproteina estranea non-self!
              </p>
            </div>
            <p className="text-teal-800 font-semibold text-[11px]">
              Tra fratelli con gli stessi genitori, la probabilità di identità HLA completa (due aplotipi identici) è del <strong>25%</strong>,
              di condividere un solo aplotipo (aploidentici) è del <strong>50%</strong>, di non condividere nessun aplotipo è del <strong>25%</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 29.3 PRE-TRANSPLANT DIAGNOSTICS */}
      <section id="sec-29-3" className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">29.3</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Diagnostica Pre-Trapianto: Tipizzazione HLA, MLR & Microcitotossicità CDC
          </h2>
        </div>

        <p>
          L'esito clinico e la sopravvivenza a lungo termine dell'allotrapianto dipendono in maniera critica dal grado di compatibilità HLA.
          L'analisi epidemiologica delle curve di sopravvivenza a 24 mesi rivela che <strong>zero mismatch in classe I e zero mismatch in classe II</strong> garantiscono
          le percentuali più elevate di successo. L'aumento dei mismatch in classe I comporta una progressiva flessione della sopravvivenza, ma il drop più drastico
          ed infausto si verifica in presenza di <strong>mismatch nelle molecole HLA di classe II</strong> (HLA-DR/DQ): questo perché la diversità di classe II stimola
          in modo esplosivo i linfociti T helper CD4+, innescando un potente aiuto citochinico che recluta sia CTL CD8+ sia plasmacellule produttrici di alloanticorpi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-teal-50/60 border border-teal-200 rounded-2xl space-y-2">
            <h4 className="font-bold text-teal-950 text-sm flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-teal-700" />
              1. Reazione Linfocitaria Mista (MLR - Mixed Lymphocyte Reaction)
            </h4>
            <p className="text-teal-900 leading-relaxed">
              È un saggio funzionale in vitro che predice la reattività proliferativa dei linfociti T alloreattivi. Nella versione <em>unidirezionale</em>:
            </p>
            <ol className="list-decimal pl-4 space-y-1 text-teal-950">
              <li>Le cellule mononucleate del sangue periferico (PBMC) del <strong>ricevente</strong> vengono inattivate mediante irradiazione gamma o mitomicina C (fungono da cellule <em>stimolatrici</em>, capaci di presentare alloantigeni ma impossibilitate a proliferare).</li>
              <li>Vengono co-coltivate con le PBMC vitali del <strong>donatore</strong> (cellule <em>risponditrici</em>).</li>
              <li>Se sussiste incompatibilità HLA (specie di classe II), i linfociti del donatore riconoscono l'allogenicità, si attivano e vanno incontro a massiva espansione clonale.</li>
              <li>Si aggiunge <strong>timidina triziata (³H-TdR)</strong>, che si incorpora nel DNA delle cellule in attiva replicazione: misurando la radioattività emessa (conteggi per minuto, cpm), si quantifica l'entità della proliferazione.</li>
              <li>Tramite saggi ELISA sui sopranatanti si dosano citochine pro-infiammatorie come <strong>IL-2 e IFN-γ</strong>, e con saggi di rilascio di cromo si valuta la citotossicità CTL. Elevata radioattività indica grave incompatibilità.</li>
            </ol>
          </div>

          <div className="p-4 bg-indigo-50/60 border border-indigo-200 rounded-2xl space-y-2">
            <h4 className="font-bold text-indigo-950 text-sm flex items-center gap-1.5">
              <Microscope className="w-4 h-4 text-indigo-700" />
              2. Saggio di Microcitotossicità Complemento-Dipendente (CDC) & Crossmatch
            </h4>
            <p className="text-indigo-900 leading-relaxed">
              Metodica sierologica utilizzata sia per la tipizzazione rapida degli antigeni HLA sia per il crossmatch pre-operatorio obbligatorio:
            </p>
            <ol className="list-decimal pl-4 space-y-1 text-indigo-950">
              <li>I linfociti del paziente vengono dispensati nei pozzetti di una micropiastra Terasaki contenente sieri con anticorpi monoclonali noti diretti contro specifici alleli HLA.</li>
              <li>Si aggiunge <strong>complemento di coniglio</strong> esogeno.</li>
              <li>Se l'anticorpo riconosce l'allele espresso, si forma il complesso antigene-anticorpo con fissazione di C1q e formazione del poro litico di membrana <strong>MAC (C5b-9)</strong>.</li>
              <li>Si aggiunge un colorante vitale (es. <strong>Trypan Blue</strong> o Eosina Y): le cellule con membrana perforata dal MAC incorporano il colorante (positività al microscopio, colorazione bluastra), mentre le cellule intatte escludono il colorante rimanendo rifrangenti e incolori.</li>
              <li><strong>Crossmatch Pre-Trapianto:</strong> pone a reagire il siero del ricevente con i linfociti del donatore. Se il test è positivo (lisi cellulare), significa che il ricevente possiede già alloanticorpi preformati donatore-specifici (DSA): il trapianto è <strong>assolutamente controindicato</strong> per rischio immediato di rigetto iperacuto.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* 29.4 HYPERACUTE REJECTION & XENOTRANSPLANTATION */}
      <section id="sec-29-4" className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">29.4</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Rigetto Iperacuto Vascolare & La Frontiera degli Xenotrapianti
          </h2>
        </div>

        <p>
          Il <strong>rigetto iperacuto</strong> si manifesta in maniera fulminea entro <strong>pochi minuti o poche ore</strong> dall'anastomosi vascolare,
          spesso mentre il paziente è ancora sul tavolo operatorio. È una patologia puramente umorale vascolare scatenata dal legame di
          <strong>anticorpi preformati</strong> circolanti nel ricevente contro antigeni espressi sulla superficie delle cellule endoteliali dell'organo donato.
        </p>

        <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-2xl text-xs space-y-2">
          <span className="font-bold text-rose-950 text-sm flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-rose-700" />
            Eziopatogenesi del Rigetto Iperacuto nell'Allotrapianto Umano
          </span>
          <p className="text-rose-900 leading-relaxed">
            Gli anticorpi preformati derivano da tre scenari clinici di pregressa immunizzazione:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-rose-950">
            <li><strong>Incompatibilità di Gruppo Sanguigno AB0:</strong> le cellule endoteliali dei vasi dell'innesto esprimono gli antigeni carboidratici AB0 identici a quelli eritrocitari. Il legame delle isoemoagglutinine naturali IgM del ricevente scatena una lisi endoteliale immediata.</li>
            <li><strong>Pregresse Trasfusioni Ematiche:</strong> esposizione a leucociti allogenici che ha indotto alloanticorpi anti-HLA di classe I.</li>
            <li><strong>Pregresse Gravidanze Multiple:</strong> la madre sviluppa alloanticorpi ad alto titolo contro gli antigeni HLA paterni espressi dal feto.</li>
            <li><strong>Precedenti Trapianti d'Organo:</strong> memoria umorale contro antigeni allogenici condivisi.</li>
          </ul>
          <p className="text-rose-950 font-semibold pt-1">
            <strong>Cascata Istopatologica:</strong> il legame degli anticorpi all'endotelio attiva il complemento → le anafilotossine C3a e C5a
            chemiotattizzano i neutrofili → i neutrofili rilasciano elastasi, idrolasi acide e radicali liberi → denudamento della membrana
            basale con esposizione del collagene e del fattore di von Willebrand → massiva attivazione piastrinica e trombosi microvascolare occludente
            con necrosi ischemica, infarto renale/cardiaco e cianosi immediata dell'organo.
          </p>
        </div>

        {/* Focus Xenotransplantation */}
        <div className="p-4 bg-white border border-slate-200 rounded-2xl space-y-3 text-xs">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-rose-600" />
            La Rivoluzione degli Xenotrapianti: Superare la Barriera dell'α-Galattosio
          </h4>
          <p className="text-slate-700 leading-relaxed">
            A causa della drammatica carenza di organi umani da donatore cadavere o vivente, la ricerca si è concentrata sul maiale (<em>Sus scrofa domesticus</em>),
            il cui cuore e reni hanno dimensioni, peso e prestazioni emodinamiche sovrapponibili a quelli umani. Tuttavia, lo xenotrapianto d'organo suino
            innescava storicamente un rigetto iperacuto letale in meno di un'ora:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <strong className="text-slate-900 block">1. L'Epitopo α-Galattosio</strong>
              <p className="text-slate-600">
                L'endotelio porcino esprime l'enzima <em>α1,3-galattosiltransferasi</em>, assente nei primati superiori. Tutti gli umani possiedono
                anticorpi naturali anti-Gal. Soluzione: topi e maiali <strong>knockout per GGTA1</strong> (privi di α-Gal).
              </p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <strong className="text-slate-900 block">2. Incompatibilità Complemento</strong>
              <p className="text-slate-600">
                I fattori regolatori suini (CD55, CD46, CD59) non inibiscono efficacemente il complemento umano. Soluzione: maiali transgenici esprimenti
                i regolatori umani <strong>hDAF (CD55)</strong> e <strong>hCD46 (MCP)</strong>.
              </p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <strong className="text-slate-900 block">3. Inattivazione PERV (CRISPR)</strong>
              <p className="text-slate-600">
                I genomi suini contengono retrovirus endogeni (Porcine Endogenous Retrovirus, PERV) a rischio infettivo. Tramite CRISPR/Cas9 sono state
                inattivate decine di copie virali silenti, consentendo trapianti cardiaci e renali con sopravvivenze umane record superiori a 6 mesi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 29.5 ACUTE REJECTION & ALLORECOGNITION PATHWAYS */}
      <section id="sec-29-5" className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">29.5</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Rigetto Acuto: Alloriconoscimento Diretto vs Indiretto & Fisiopatologia T-Cellulare
          </h2>
        </div>

        <p>
          Il <strong>rigetto acuto</strong> si manifesta a distanza di <strong>giorni o settimane</strong> dal trapianto (tipicamente tra il 7° giorno e i primi 3–6 mesi).
          È il paradigma della risposta immunitaria adattativa allogenica: la deplezione selettiva di linfociti T CD4+ e CD8+ prolunga drammaticamente
          la sopravvivenza dell'innesto, dimostrando che i linfociti T sono gli orchestratori insostituibili del processo.
          La sensibilizzazione avviene nei linfonodi regionali drenanti la sede dell'innesto, dopodiché le cellule effettrici migrano attraverso il torrente circolatorio
          nel parenchima trapiantato provocando <em>tubulite</em> renale, <em>endotelite</em> e necrosi delle cellule parenchimali.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-teal-50/50 border border-teal-200 rounded-2xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-teal-950 text-sm">Via di Alloriconoscimento DIRETTO</span>
              <span className="px-2 py-0.5 bg-teal-100 text-teal-800 font-mono rounded font-bold">1–10% dei Cloni T</span>
            </div>
            <p className="text-teal-900 leading-relaxed">
              I linfociti T CD4+ e CD8+ del ricevente riconoscono direttamente la <strong>struttura allosterica intatta della molecola MHC allogenica non processata</strong>,
              espressa dalle <em>cellule dendritiche passeggere del donatore</em> trapiantate assieme all'organo.
            </p>
            <ul className="list-disc pl-4 space-y-1 text-teal-950">
              <li><strong>Riconoscimento Molecolare:</strong> il peptide alloggiato nella tasca funge unicamente da stabilizzatore sterico; il TCR si adatta e lega l'intero scaffold dell'MHC estraneo.</li>
              <li><strong>Frequenza Clonale Elevatissima:</strong> fino al <strong>10% dell'intero repertorio T</strong> del corpo può riconoscere direttamente un MHC estraneo! Ciò spiega la straordinaria violenza del rigetto acuto precoce rispetto a qualunque infezione virale.</li>
              <li><strong>Cinetica:</strong> domina nelle prime settimane ma <em>si spegne progressivamente</em> man mano che le DC passeggere del donatore muoiono e vengono eliminate.</li>
            </ul>
          </div>

          <div className="p-4 bg-indigo-50/50 border border-indigo-200 rounded-2xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-indigo-950 text-sm">Via di Alloriconoscimento INDIRETTO</span>
              <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 font-mono rounded font-bold">1/100.000 (Fisiologica)</span>
            </div>
            <p className="text-indigo-900 leading-relaxed">
              Le cellule presentanti l'antigene (APC dendritiche e macrofagi) del <strong>ricevente</strong> migrano nell'organo, endocitano le molecole
              MHC allogeniche rilasciate dalle cellule dell'innesto, le processano nel sistema endo-lisosomiale e ne presentano i <strong>frammenti peptidici (allopeptidi)</strong>
              in associazione a molecole <strong>MHC di classe II self</strong>.
            </p>
            <ul className="list-disc pl-4 space-y-1 text-indigo-950">
              <li><strong>Riconoscimento Molecolare:</strong> analogo al classico riconoscimento di un antigene proteico esogeno. Attiva primariamente linfociti T helper CD4+.</li>
              <li><strong>Funzione Effettrice:</strong> i CD4+ rilasciano IFN-γ (attivando macrofagi in un quadro DTH-like cronico) e forniscono il segnale costimolatorio CD40-CD40L ai linfociti B per la sintesi di <strong>alloanticorpi donatore-specifici</strong>.</li>
              <li><strong>Cinetica:</strong> persiste per tutta la vita del trapianto ed è il meccanismo cardine del <em>rigetto cronico tardivo</em> e dell'arteriosclerosi dell'allotrapianto.</li>
            </ul>
          </div>
        </div>

        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
          <span className="font-bold text-slate-900 block">Rigetto Acuto Cellulare (TCMR) vs Rigetto Acuto Mediato da Anticorpi (ABMR):</span>
          <p className="text-slate-700">
            Il rigetto acuto può essere prevalentemente cellulare (CTL CD8+ perforina/granzima-dipendenti che causano necrosi focale e tubulite,
            con ottima risposta alla terapia con boli di cortisone) o mediato da anticorpi (ABMR: produzione de novo di alloanticorpi anti-HLA,
            attivazione del complemento con riscontro bioptico patognomonico del frammento <strong>C4d</strong> fissato sui capillari peritubulari renale,
            trattato con plasmaferesi, immunoglobuline e.v. e anti-CD20 Rituximab).
          </p>
        </div>
      </section>

      {/* 29.6 CHRONIC REJECTION, MINOR ANTIGENS & FETAL ALLOGRAFT */}
      <section id="sec-29-6" className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">29.6</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Rigetto Cronico, Antigeni Minori di Istocompatibilità (mHA) & Il Feto come Allotrapianto
          </h2>
        </div>

        <p>
          Il <strong>rigetto cronico</strong> si sviluppa insidiosamente nell'arco di <strong>mesi o anni</strong> ed è la causa principale del fallimento
          d'organo a lungo termine. Nei trapianti renali, la sopravvivenza dell'innesto a 1 anno è eccellente (~90%), ma subisce un calo drastico
          fino al ~60% a 10 anni proprio a causa del rigetto cronico, che risulta ampiamente refrattario alle attuali terapie immunosoppressive.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-600" />
              Istopatologia: Vasculopatia Cronica dell'Allotrapianto
            </h4>
            <p className="text-slate-700 leading-relaxed">
              La lesione caratteristica è l'<strong>arteriosclerosi accelerata del trapianto</strong>:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-slate-600">
              <li>I linfociti T infiltranti (via indiretta) e i macrofagi rilasciano citochine pro-fibrotiche (PDGF, FGF, TGF-β, IFN-γ).</li>
              <li>Ciò stimola la massiva migrazione e <strong>iperplasia intimale delle cellule muscolari lisce vascolari</strong> nella parete arteriosa.</li>
              <li>Ne consegue un progressivo ispessimento concentrico, restringimento luminale concentrico fino alla completa occlusione del vaso.</li>
              <li>A valle si verifica ischemia cronica con <strong>fibrosi interstiziale diffusa ed atrofia parenchimale</strong> (glomerulosclerosi renale, fibrosi miocardica nel cuore, bronchiolite obliterante nel polmone).</li>
            </ul>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Dna className="w-4 h-4 text-rose-600" />
              Antigeni Minori di Istocompatibilità (mHA) & Esperimento H-Y
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Anche in caso di <em>totale compatibilità HLA</em> (0 mismatch), i trapianti allogenici possono andare incontro a rigetto cronico.
              La causa risiede negli <strong>antigeni minori di istocompatibilità (mHA)</strong>, peptidi polimorfici derivati da normali proteine
              cellulari codificate da geni non-MHC sparsi nel genoma.
            </p>
            <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-rose-950 space-y-1">
              <strong>L'Esempio Clinico del Cromosoma Y (Antigene H-Y):</strong>
              <p>
                Nei topi singenici identici per MHC:
                <br />• Donatore Maschio → Ricevente Maschio = <strong>Accettato</strong>
                <br />• Donatrice Femmina → Ricevente Femmina = <strong>Accettato</strong>
                <br />• Donatrice Femmina → Ricevente Maschio = <strong>Accettato</strong>
                <br />• Donatore Maschio → Ricevente Femmina = <strong>RIGETTATO!</strong>
              </p>
              <p className="pt-0.5">
                La femmina non possiede il cromosoma Y e riconosce le proteine codificate da Y (es. Ddx3y, Uty, Smcy) come alloantigeni estranei,
                spiegando il maggior tasso di rigetto cronico cardiaco osservato nei trapianti da donatore maschio a ricevente femmina.
              </p>
            </div>
          </div>
        </div>

        {/* Fetal Allograft Box */}
        <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-2xl text-xs space-y-2">
          <div className="flex items-center gap-2 font-bold text-emerald-950 text-sm">
            <Heart className="w-4 h-4 text-emerald-700" />
            <span>Il Feto in Gravidanza: Modello Naturale di Allotrapianto Tollerato</span>
          </div>
          <p className="text-emerald-900 leading-relaxed">
            Il feto eredita il 50% del genoma dal padre ed esprime alloantigeni paterni estranei alla madre: costituisce a tutti gli effetti un
            <strong>allotrapianto emi-allogenico</strong>. Il rigetto viene impedito da molteplici meccanismi coordinati:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 pt-1 text-slate-800">
            <div className="bg-white p-2.5 rounded-lg border border-emerald-200">
              <strong className="text-emerald-900 block">1. Ormoni Soppressivi</strong>
              <span>Gli estrogeni e il progesterone down-regolano la reattività dei linfociti T sistemici e promuovono l'espansione di Treg deciduali.</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-emerald-200">
              <strong className="text-emerald-900 block">2. Citochine Regolatorie</strong>
              <span>Il trofoblasto secerne cospicue quantità di <strong>IL-10</strong>, TGF-β e l'enzima IDO (che deprime il triptofano, bloccando i T alloreattivi).</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-emerald-200">
              <strong className="text-emerald-900 block">3. Inibitori Complemento</strong>
              <span>Espressione apicale trofoblastica di DAF (CD55), MCP (CD46) e CD59 per inattivare le convertasi C3/C5 e proteggere la placenta.</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-emerald-200">
              <strong className="text-emerald-900 block">4. HLA-G & HLA-E</strong>
              <span>Assenza di HLA-A e HLA-B (nessun target per CTL); espressione di <strong>HLA-G ed HLA-E</strong> non classiche che spengono le cellule NK uterine via ILT-2 e CD94/NKG2A.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 29.7 ISCHEMIA-REPERFUSION INJURY & DAMPS */}
      <section id="sec-29-7" className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">29.7</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Danno da Ischemia-Riperfusione (IRI) & Il Ruolo delle Allarmine DAMPs
          </h2>
        </div>

        <p>
          Il rigetto non è un evento puramente confinato all'immunità adattativa: la sua intensità viene fortemente condizionata
          dall'attivazione dell'immunità innata causata dal trauma chirurgico e dal <strong>danno da ischemia-riperfusione (IRI)</strong>.
          Durante le fasi di espianto e trapianto, l'organo compie un violento ciclo termico e gassoso:
          <strong> Normossia (21% O₂) → Ipossia → Anossia da Freddo (in ghiaccio a 4°C, 0% O₂) → Ipossia durante l'anastomosi → Normossia da Riperfusione</strong>.
        </p>

        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2">
          <span className="font-mono font-bold text-slate-800 uppercase tracking-wide block">
            Il Burst Ossidativo da Riperfusione e la Liberazione di DAMPs
          </span>
          <p className="text-slate-700 leading-relaxed">
            Al momento della riapertura del flusso ematico, il brusco sbalzo di ossigeno alimenta i mitocondri danneggiati e l'enzima xantina ossidasi,
            generando un massivo <strong>burst di specie reattive dell'ossigeno (ROS)</strong>. Questo stress ossidativo lacera le membrane cellulari
            inducendo il rilascio di allarmine intracellulari (Damage-Associated Molecular Patterns, DAMPs):
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-1">
            <div className="bg-white p-2.5 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block">HMGB1</strong>
              <span className="text-slate-600">High Mobility Group Box-1 nucleare; rilasciata durante la necrosi, attiva TLR4 e RAGE su DC ed endotelio.</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block">Heat Shock Proteins</strong>
              <span className="text-slate-600">HSP70 e HSP90 chaperonine di stress; legano TLR2 e TLR4 inducendo chemochine pro-infiammatorie.</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block">mtDNA & ATP</strong>
              <span className="text-slate-600">DNA mitocondriale ricco di CpG ipometilato (attiva TLR9) e ATP extracellulare (innesca l'inflammasoma NLRP3 via P2X7).</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block">Fibronectina & Ialuronano</strong>
              <span className="text-slate-600">Frammenti di matrice extracellulare digerita da metalloproteasi; stimolano NF-κB endoteliale.</span>
            </div>
          </div>
          <p className="text-teal-900 font-semibold pt-1">
            <strong>Conseguenza Immunologica:</strong> i DAMPs convertono un organo altrimenti silente in un potente stimolo infiammatorio innato:
            up-regolano le molecole di adesione endoteliale (ICAM-1, VCAM-1), inducono l'espressione di MHC di classe II e delle molecole costimolatorie
            (CD80, CD86) sulle cellule dendritiche, accelerando enormemente il priming dei linfociti T alloreattivi e predisponendo alla fibrosi cronica.
          </p>
        </div>
      </section>

      {/* SIMULATOR 1: ORGAN TRANSPLANT & HLA LAB */}
      <section id="sim-transplant-hla-lab" className="space-y-4">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-teal-500/30">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-teal-500/20 text-teal-400 rounded-xl border border-teal-500/30">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-teal-400 font-bold uppercase tracking-wider block">
                  Simulatore Interattivo 1
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Laboratorio di Compatibilità HLA, Rigetto d'Organo & Farmacoterapia
                </h3>
              </div>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
              Modello Clinico di Gell & Coombs / Allotrapianto
            </span>
          </div>

          <p className="text-xs text-slate-300 mt-4 leading-relaxed">
            Seleziona la tipologia di donatore e il grado di mismatch HLA, il regime farmacologico immunosoppressivo adottato e
            lo stato del crossmatch linfocitario CDC pre-trapianto per analizzare la cinetica istopatologica, il pathway molecolare prevalente
            e la percentuale attesa di sopravvivenza dell'organo a 24 mesi.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Controls */}
            <div className="space-y-4 bg-slate-800/60 p-4 rounded-2xl border border-slate-700 text-xs">
              <div>
                <label className="font-semibold text-slate-200 block mb-1.5">
                  1. Tipologia Donatore & Mismatch HLA:
                </label>
                <select
                  value={selectedDonorType}
                  onChange={(e) => setSelectedDonorType(e.target.value as any)}
                  className="w-full bg-slate-900 text-white border border-slate-700 rounded-lg p-2 font-medium focus:ring-1 focus:ring-teal-400 focus:outline-none"
                >
                  <option value="identical">Singenico / HLA-Identico (0 Mismatch I & II)</option>
                  <option value="mismatch_1">1–2 Mismatch HLA Classe I (Classe II compatibile)</option>
                  <option value="mismatch_class2">Mismatch HLA Classe II (HLA-DR/DQ incompatibile)</option>
                  <option value="mismatch_high">3–4 Mismatch Multipli (Classe I & II incompatibili)</option>
                  <option value="xenograft">Xenotrapianto da Maiale Wild-Type (Epitopo α-Gal)</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-200 block mb-1.5">
                  2. Regime Immunosoppressivo Impostato:
                </label>
                <select
                  value={selectedImmunosuppression}
                  onChange={(e) => setSelectedImmunosuppression(e.target.value as any)}
                  className="w-full bg-slate-900 text-white border border-slate-700 rounded-lg p-2 font-medium focus:ring-1 focus:ring-teal-400 focus:outline-none"
                >
                  <option value="calcineurin">Inibitori Calcineurina (Ciclosporina A / Tacrolimus)</option>
                  <option value="mTOR">Inibitori mTOR (Rapamicina / Sirolimus)</option>
                  <option value="belatacept">Blocco Costimolo CD28 (Belatacept CTLA-4-Ig)</option>
                  <option value="steroids_triple">Triplice Terapia (CNI + Micofenolato + Glucocorticoidi)</option>
                  <option value="none">Nessuna Terapia (Controllo Sperimentale)</option>
                </select>
              </div>

              <div className="pt-2 border-t border-slate-700">
                <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                  <input
                    type="checkbox"
                    checked={simCrossmatchPositive}
                    onChange={(e) => setSimCrossmatchPositive(e.target.checked)}
                    className="rounded border-slate-600 text-teal-500 focus:ring-teal-400"
                  />
                  <span>Simula Crossmatch CDC Positivo (Allo-Ab preformati)</span>
                </label>
              </div>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-2 bg-slate-800/90 p-5 rounded-2xl border border-slate-700 text-xs flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-slate-400 text-[11px] uppercase tracking-wide">
                    Quadro Istopatologico & Cinetica
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full font-bold border text-xs ${graftOutcome.badge}`}>
                    {graftOutcome.type}
                  </span>
                </div>

                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-2 mt-2">
                  <p className="text-slate-200 leading-relaxed font-sans">
                    <strong>Istopatologia:</strong> {graftOutcome.histology}
                  </p>
                  <p className="text-slate-300 leading-relaxed font-mono text-[11px]">
                    <strong>Pathway Effettore:</strong> {graftOutcome.pathway}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-700/80">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 text-[11px] font-mono block">SOPRAVVIVENZA STIMATA A 24 MESI</span>
                  <span className="text-2xl font-black text-teal-400 mt-0.5 block">{graftOutcome.survival24m}</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 text-[11px] font-mono block">RACCOMANDAZIONE CLINICA</span>
                  <p className="text-[11px] text-slate-300 mt-1 leading-snug">{graftOutcome.recommendation}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 29.8 HSC TRANSPLANTATION & GVHD VS GVL */}
      <section id="sec-29-8" className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">29.8</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Trapianto di Cellule Staminali Emopoietiche (HSC), GVHD vs GVL & Il Dilemma del Purging
          </h2>
        </div>

        <p>
          Il trapianto di midollo osseo o di cellule staminali emopoietiche (HSC) rappresenta una procedura salvavita impiegata in
          patologie onco-ematologiche maligne (Leucemia Mieloide Acuta LMA, Leucemia Linfoblastica Acuta LLA, Mieloma Multiplo, Linfomi non-Hodgkin),
          anemie aplastiche gravi e patologie genetiche dell'emopoiesi (Sindrome di Wiskott-Aldrich, Atassia-Telangiectasia con mutazione di ATM,
          Anemia di Fanconi, SCID).
        </p>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-2">
          <span className="font-mono font-bold text-slate-800 uppercase tracking-wide block">
            Fasi Cliniche del Trapianto di HSC: Mobilitazione & Regime Condizionante
          </span>
          <p className="text-slate-700 leading-relaxed">
            In passato la raccolta richiedeva dolorose e ripetute punture della cresta iliaca in anestesia generale.
            Oggi le HSC vengono mobilizzate dalla nicchia stromale del midollo osseo nel sangue periferico mediante somministrazione di
            <strong> G-CSF o GM-CSF</strong> associati ad antagonisti farmacologici del recettore <strong>CXCR4</strong> (come Plerixafor):
            interrompendo l'interazione tra CXCR4 e la chemochina stromale <strong>SDF-1 (CXCL12)</strong>, le cellule staminali si staccano
            dalle cellule stromali e migrano nel circolo ematico, dove vengono comodamente raccolte tramite <em>leucoaferesi</em>.
            Un'ulteriore fonte è costituita dal sangue da cordone ombelicale, ricco di HSC immature naïve.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Il ricevente viene preventivamente sottoposto a un <strong>regime condizionante mieloablativo</strong> con chemioterapia ad alte dosi
            e radioterapia totale corporea (TBI): questo trattamento distrugge le cellule tumorali residue e svuota le nicchie midollari,
            creando lo "spazio" anatomico indispensabile all'attecchimento (engraftment) delle nuove cellule staminali infuse.
          </p>
        </div>

        <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl text-xs space-y-2">
          <span className="font-bold text-amber-950 text-sm flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-amber-800" />
            Il "Trapianto allo Specchio": Reazione Graft-Versus-Host (GVHD)
          </span>
          <p className="text-amber-900 leading-relaxed">
            A differenza degli organi solidi dove il ricevente rigetta l'organo (Host-Versus-Graft, HVG), nel trapianto allogenico di HSC
            il ricevente ha il midollo azzerato ed è privo di difese immunitarie; al contrario, nell'inoculo midollare vengono trapiantati anche
            <strong>linfociti T maturi del donatore</strong>. Se sussiste incompatibilità per loci HLA o antigeni minori di istocompatibilità (mHA),
            sono i linfociti T immunocompetenti del donatore ad aggredire i tessuti dell'ospite, scatenando la
            <strong> Malattia del Trapianto contro l'Ospite (Graft-Versus-Host Disease, GVHD)</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-amber-950">
            <li><strong>Organi Bersaglio:</strong> cute (eritema maculopapulare fino a bolle ed epidermolisi), fegato (colestasi con marcata iperbilirubinemia e necrosi dei dotti biliari), tratto gastrointestinale (diarrea secretoria massiva ed emorragica da citolisi enterocitaria).</li>
            <li><strong>Meccanismi Citotossici:</strong> i CTL CD8+ del donatore rilasciano perforine e granzimi ed esprimono Fas-Ligando (FasL), mentre i CD4+ producono tempesta di TNF-α, amplificata dal rilascio di PAMP microbici traslocati dall'intestino de-epitelializzato dal condizionamento.</li>
          </ul>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-2xl text-xs space-y-2">
          <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
            <Scissors className="w-4 h-4 text-rose-600" />
            Il Dilemma del Purging Midollare & L'Effetto Benefico Graft-Versus-Leukemia (GVL)
          </span>
          <p className="text-slate-700 leading-relaxed">
            Per prevenire la letale GVHD, si è tentato in passato di "ripulire" l'aspirato midollare eliminando i linfociti T maturi prima dell'infusione:
            le cellule venivano fatte passare attraverso una colonnina contenente <strong>anticorpi magnetici anti-CD3</strong> che trattenevano i linfociti T.
            Il risultato clinico fu sorprendente ed amaro:
          </p>
          <div className="p-3 bg-rose-50/70 border border-rose-200 rounded-xl text-rose-950 font-medium">
            <strong>Il Paradosso del Purging:</strong> l'eliminazione dei linfociti T azzerava completamente la GVHD, ma provocava una
            <strong> drammatica impennata delle recidive leucemiche e frequenti fallimenti di attecchimento</strong>!
            Questo accadeva perché i linfociti T del donatore esercitano anche il cruciale effetto terapeutico
            <strong> Graft-Versus-Leukemia (GVL) / Graft-Versus-Tumor (GVT)</strong>, sterminando le cellule leucemiche minime residue sopravvissute al condizionamento.
            Rimuovere i T salvava dalla GVHD ma condannava il paziente a morte per recidiva tumorale.
          </div>
        </div>
      </section>

      {/* 29.9 NK CELLS & HAPLOIDENTICAL TRANSPLANT (PERUGIA PROTOCOL) */}
      <section id="sec-29-9" className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">29.9</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Cellule NK & Trapianto Aploidentico: La Rivoluzione del Missing-Self (Scuola di Perugia)
          </h2>
        </div>

        <p>
          Il dilemma tra GVHD e GVL è stato brillantemente risolto grazie alle intuizioni e agli studi condotti da ricercatori italiani
          della scuola di Perugia e Roma (<strong>Franco Aversa, Andrea Velardi, Franco Locatelli, Alessandro Moretta e Alessandra Soriani</strong>),
          che hanno introdotto il protocollo di trapianto aploidentico con cellule <strong>Natural Killer (NK) alloreattive</strong>,
          oggi standard terapeutico mondiale per la Leucemia Mieloide Acuta (LMA).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-teal-50/60 border border-teal-200 rounded-xl space-y-2">
            <h4 className="font-bold text-teal-950 text-sm flex items-center gap-1.5">
              <Crosshair className="w-4 h-4 text-teal-700" />
              1. Ripopolamento Precoce & Teoria del Missing-Self
            </h4>
            <p className="text-teal-900 leading-relaxed">
              Dopo il trapianto di midollo osseo, le <strong>cellule Natural Killer sono le prime in assoluto a ripopolare l'ambiente emopoietico</strong>,
              molto prima della rigenerazione dei linfociti T e B, e sono immediatamente dotate di piena capacità citotossica.
            </p>
            <p className="text-teal-950">
              La loro attività è regolata dal bilancio tra recettori attivatori (NCR come NKp46, NKp30, NKp44; DNAM-1; NKG2D) e
              recettori inibitori <strong>KIR (Killer-cell Immunoglobulin-like Receptors)</strong> specifici per alleli HLA-A, HLA-B e HLA-C.
              Secondo la <em>teoria del missing-self</em> (Ljunggren e Kärre): se la cellula bersaglio esprime normali molecole HLA-I self,
              il KIR si lega e genera un potente segnale inibitorio mediato da motivi ITIM che blocca la citotossicità.
              Se l'HLA-I manca o è incompatibile, l'inibizione decade e i recettori attivatori innescano la degranulazione litica.
            </p>
          </div>

          <div className="p-4 bg-indigo-50/60 border border-indigo-200 rounded-xl space-y-2">
            <h4 className="font-bold text-indigo-950 text-sm flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-700" />
              2. Il Mismatch KIR-HLA nel Trapianto Aploidentico
            </h4>
            <p className="text-indigo-900 leading-relaxed">
              Nel trapianto aploidentico (es. da genitore a figlio, compatibile per un solo aplotipo), si seleziona intenzionalmente un donatore
              le cui cellule NK esprimano <strong>KIR inibitori per alleli HLA di classe I che sono assenti nel ricevente (mismatch KIR-HLA)</strong>:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-indigo-950">
              <li><strong>Sterminio dei Blasti Leucemici (GVL perfetto):</strong> le NK del donatore incontrano le cellule tumorali leucemiche del paziente, le quali non possiedono l'HLA-I corrispondente al KIR. Mancando il segnale di stop inibitorio, le NK rilasciano perforine e granzimi <strong>eliminando le recidive (tasso di recidiva ridotto fino allo 0% nella LMA!)</strong>.</li>
              <li><strong>Assenza Totale di GVHD:</strong> le cellule NK <em>non</em> aggrediscono i tessuti sani del paziente (cute, fegato, intestino), perché le cellule somatiche sane normali non esprimono i ligandi attivatori di stress.</li>
              <li><strong>Eliminazione delle Cellule Dendritiche dell'Ospite:</strong> le NK alloreattive distruggono le DC residue del ricevente, impedendo sia il rigetto del trapianto (HVG) sia il priming alloreattivo dei rari linfociti T donatori.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SIMULATOR 2: HSC, KIR-HLA MISMATCH & NK ALLOREACTIVITY */}
      <section id="sim-hsc-gvhd-nk-lab" className="space-y-4">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-indigo-500/30">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-xl border border-indigo-500/30">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider block">
                  Simulatore Interattivo 2
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Laboratorio Trapianto HSC, Mismatch KIR-HLA & Alloreattività NK vs GVHD
                </h3>
              </div>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
              Protocollo Perugia / Locatelli & Velardi
            </span>
          </div>

          <p className="text-xs text-slate-300 mt-4 leading-relaxed">
            Esplora le differenze biologiche tra il trapianto HLA-identico standard, il purging midollare anti-CD3 e la strategia
            del trapianto aploidentico con alloreattività delle cellule Natural Killer (mismatch KIR-HLA) nella Leucemia Mieloide Acuta.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Controls */}
            <div className="space-y-4 bg-slate-800/60 p-4 rounded-2xl border border-slate-700 text-xs">
              <div>
                <label className="font-semibold text-slate-200 block mb-1.5">
                  1. Strategia Trapianto HSC:
                </label>
                <select
                  value={hscTransplantType}
                  onChange={(e) => setHscTransplantType(e.target.value as any)}
                  className="w-full bg-slate-900 text-white border border-slate-700 rounded-lg p-2 font-medium focus:ring-1 focus:ring-indigo-400 focus:outline-none"
                >
                  <option value="haplo_perugia">Trapianto Aploidentico (Protocollo Perugia / Moretti-Locatelli)</option>
                  <option value="hla_matched">Trapianto HLA-Identico Compatibile (Famigliare / MUD)</option>
                  <option value="t_depleted_alone">Purging Linfocitario Totale T (Colonnina Magnetica anti-CD3)</option>
                </select>
              </div>

              {hscTransplantType === 'haplo_perugia' && (
                <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700 space-y-2">
                  <label className="font-semibold text-teal-300 block">
                    Stato del Mismatch KIR-HLA:
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1.5 cursor-pointer text-slate-200">
                      <input
                        type="radio"
                        name="kirMismatch"
                        checked={hasKirMismatch}
                        onChange={() => setHasKirMismatch(true)}
                        className="text-teal-500"
                      />
                      <span>Presente (Alloreattività NK attiva)</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer text-slate-200">
                      <input
                        type="radio"
                        name="kirMismatch"
                        checked={!hasKirMismatch}
                        onChange={() => setHasKirMismatch(false)}
                        className="text-teal-500"
                      />
                      <span>Assente (KIR Match)</span>
                    </label>
                  </div>
                </div>
              )}

              <div>
                <label className="font-semibold text-slate-200 block mb-1.5">
                  2. Regime Condizionante:
                </label>
                <select
                  value={conditioningIntensity}
                  onChange={(e) => setConditioningIntensity(e.target.value as any)}
                  className="w-full bg-slate-900 text-white border border-slate-700 rounded-lg p-2 font-medium focus:ring-1 focus:ring-indigo-400 focus:outline-none"
                >
                  <option value="myeloablative">Mieloablativo Totale (Chemioterapia massiva + TBI)</option>
                  <option value="reduced">Ad Intensità Ridotta (RIC - Pazienti fragili)</option>
                </select>
              </div>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-2 bg-slate-800/90 p-5 rounded-2xl border border-slate-700 text-xs flex flex-col justify-between space-y-4">
              <div>
                <span className="font-mono text-slate-400 text-[11px] uppercase tracking-wide block mb-2">
                  Valutazione Triangolare: Rischio GVHD vs Effetto GVL vs Tasso di Recidiva
                </span>

                <div className="grid grid-cols-3 gap-2.5 mb-3">
                  <div className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-700">
                    <span className="text-[10px] font-mono text-slate-400 block">RISCHIO GVHD</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold inline-block mt-1 border ${hscOutcome.gvhdBadge}`}>
                      {hscOutcome.gvhdRisk}
                    </span>
                  </div>
                  <div className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-700">
                    <span className="text-[10px] font-mono text-slate-400 block">EFFETTO GVL / GVT</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold inline-block mt-1 border ${hscOutcome.gvlBadge}`}>
                      {hscOutcome.gvlEffect}
                    </span>
                  </div>
                  <div className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-700">
                    <span className="text-[10px] font-mono text-slate-400 block">TASSO RECIDIVA LEUCEMICA</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold inline-block mt-1 border ${hscOutcome.relapseBadge}`}>
                      {hscOutcome.relapseRate}
                    </span>
                  </div>
                </div>

                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-2">
                  <p className="text-slate-200 leading-relaxed font-sans">
                    <strong>Sintesi Clinica:</strong> {hscOutcome.summary}
                  </p>
                  <p className="text-indigo-300 leading-relaxed font-mono text-[11px]">
                    <strong>Meccanismo Molecolare:</strong> {hscOutcome.mechanisms}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/80 text-[11px] text-slate-400 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>
                  Le cellule NK non hanno bisogno di priming timico, non aggrediscono la mucosa gastrointestinale né i dotti biliari, e azzerano le cellule dendritiche dell'ospite.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 29.10 IMMUNOSUPPRESSIVE PHARMACOLOGY */}
      <section id="sec-29-10" className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">29.10</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Farmacologia dell'Immunosoppressione: La Triade dei Segnali T & Target Terapeutici
          </h2>
        </div>

        <p>
          Il successo della chirurgia dei trapianti si fonda sulla modulazione farmacologica mirata dei meccanismi di attivazione
          linfocitaria. L'attivazione di un linfocita T naïve richiede una successione ordinata di tre segnali biologici,
          ciascuno dei quali costituisce un bersaglio terapeutico altamente selettivo:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {/* Signal 1 */}
          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">SEGNALE 1: TCR / CD3</span>
              <span className="px-2 py-0.5 bg-rose-50 text-rose-700 rounded font-mono font-bold text-[10px]">Attivazione</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Il legame del TCR al complesso MHC-peptide attiva la cascata di tirosin-chinasi (Lck, ZAP-70) con attivazione della fosfolipasi C-γ1 (PLC-γ1),
              idrolisi di PIP₂ in IP₃ e DAG, e rilascio massivo di ioni <strong>Calcio (Ca²⁺)</strong> dal reticolo endoplasmatico.
            </p>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 space-y-1">
              <strong>Farmaci Mirati sul Segnale 1:</strong>
              <ul className="list-disc pl-3.5 space-y-1 text-[11px] text-slate-700">
                <li><strong>Anti-CD3 (Muromonab / OKT3):</strong> anticorpo monoclonale murino che blocca il complesso CD3 inducendone l'internalizzazione o la modulazione antigenica, spegnendo la trasduzione del segnale primario.</li>
              </ul>
            </div>
          </div>

          {/* Signal 2 */}
          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">SEGNALE 2: Costimolazione</span>
              <span className="px-2 py-0.5 bg-amber-50 text-amber-700 rounded font-mono font-bold text-[10px]">Sopravvivenza</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Interazione tra il recettore costitutivo <strong>CD28</strong> sul linfocita T e le molecole costimolatorie <strong>B7-1 (CD80) e B7-2 (CD86)</strong>
              sull'APC. L'assenza del segnale 2 condanna il linfocita all'anergia funzionale o alla morte per apoptosi.
            </p>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 space-y-1">
              <strong>Farmaci Mirati sul Segnale 2:</strong>
              <ul className="list-disc pl-3.5 space-y-1 text-[11px] text-slate-700">
                <li><strong>Belatacept (CTLA-4-Ig ricombinante):</strong> proteina di fusione solubile formata dal dominio extracellulare di CTLA-4 e la porzione Fc di IgG1. Lega con affinità 20–100 volte superiore a CD28 le molecole B7-1/B7-2 sulle APC, bloccando selettivamente il costimolo (evita la nefrotossicità tipica dei CNI).</li>
              </ul>
            </div>
          </div>

          {/* Signal 3 */}
          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">SEGNALE 3: Citochine / IL-2</span>
              <span className="px-2 py-0.5 bg-teal-50 text-teal-700 rounded font-mono font-bold text-[10px]">Proliferazione</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Il Calcio intracellulare attiva la <strong>Calcineurina</strong>, fosfatasi che defosforila <strong>NFAT</strong> consentendone la traslocazione nucleare
              e la trascrizione del gene di <strong>IL-2</strong>. L'IL-2 secreta si lega al recettore IL-2R ad alta affinità (CD25) attivando la via di <strong>mTOR</strong>,
              che spinge il ciclo cellulare dalla fase G1 alla fase S.
            </p>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 space-y-1">
              <strong>Farmaci Mirati sul Segnale 3:</strong>
              <ul className="list-disc pl-3.5 space-y-1 text-[11px] text-slate-700">
                <li><strong>Inibitori Calcineurina (Ciclosporina A & Tacrolimus)</strong>: blocco a monte della trascrizione di IL-2.</li>
                <li><strong>Inibitori di mTOR (Rapamicina / Sirolimus)</strong>: blocco a valle del ciclo cellulare mediato da IL-2.</li>
                <li><strong>Anti-CD25 (Basiliximab)</strong>: anticorpo anti-IL-2Rα.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* In-depth Biochemistry of CNI vs mTOR */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-3">
          <span className="font-bold text-slate-900 text-sm block">
            Biochimica Comparativa: Ciclosporina A vs Tacrolimus (FK506) vs Rapamicina (Sirolimus)
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1.5">
              <strong className="text-teal-900 text-xs block">Ciclosporina A (CsA)</strong>
              <p className="text-slate-600">
                Peptide ciclico fungino (<em>Tolypocladium inflatum</em>). Entra nel citoplasma e si lega alla sua immunofillina specifica:
                la <strong>Ciclofillina</strong>. Il complesso binario CsA-Ciclofillina si inserisce nella tasca catalitica della <strong>Calcineurina</strong>,
                inibendone l'attività fosfatasica. NFAT resta iperfosforilato nel citoplasma e non può entrare nel nucleo:
                <strong>blocco totale della trascrizione di IL-2</strong>.
              </p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1.5">
              <strong className="text-indigo-900 text-xs block">Tacrolimus (FK506)</strong>
              <p className="text-slate-600">
                Macrolide isolato da <em>Streptomyces tsukubaensis</em>. Si lega a una diversa immunofillina intracellulare:
                la <strong>FKBP12 (FK-binding protein 12)</strong>. Il complesso FK506-FKBP12 blocca con potenza da 10 a 100 volte superiore
                la medesima <strong>Calcineurina</strong>, arrestando la traslocazione nucleare di NFAT e la sintesi di IL-2.
              </p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1.5">
              <strong className="text-purple-900 text-xs block">Rapamicina (Sirolimus)</strong>
              <p className="text-slate-600">
                Macrolide da <em>Streptomyces hygroscopicus</em>. Si lega alla medesima proteina <strong>FKBP12</strong>, ma il complesso
                FKBP12-Rapamicina <strong>NON inibisce la calcineurina</strong>! Si lega invece alla chinasi <strong>mTOR (mammalian Target of Rapamycin)</strong>,
                bloccando la trasduzione a valle del recettore di IL-2 ed arrestando la progressione da G1 a S dei linfociti.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 block">Antimetaboliti & Antiproliferativi</strong>
              <p className="text-slate-600">
                <strong>Micofenolato Mofetile (MMF):</strong> inibitore selettivo e reversibile dell'enzima <em>inosina monofosfato deidrogenasi (IMPDH)</em>,
                essenziale per la via di sintesi de novo dei nucleotidi guaninici da cui dipendono i linfociti B e T proliferanti.
                <strong>Azatioprina:</strong> profarmaco analogo purinico della 6-mercaptopurina, si incorpora nel DNA bloccandone la replicazione.
              </p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 block">Glucocorticoidi (Corticosteroidi)</strong>
              <p className="text-slate-600">
                Prednisone e Metilprednisolone agiscono legando recettori citosolici nucleari: inibiscono <strong>NF-κB ed AP-1</strong>,
                spegnendo la trascrizione di citochine infiammatorie (IL-1, TNF-α, IL-6), riducono l'adesione leucocitaria all'endotelio
                e stimolano l'induzione della <em>lipocortina-1</em> (inibitrice della fosfolipasi A2). Cardine delle terapie d'induzione e del trattamento del rigetto acuto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIVE SYNOPTIC TABLES */}
      <section id="tabelle-sinottiche" className="space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">TAVOLE</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Tavole Sinottiche Comparative di Riferimento Clinico
          </h2>
        </div>

        {/* Table 29.1 */}
        <div className="space-y-2">
          <span className="text-xs font-bold font-mono text-slate-700 uppercase tracking-wide">
            Tabella 29.1: Confronto Nosografico dei Tre Tipi di Rigetto d'Organo Solido
          </span>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-200 font-mono text-[11px]">
                  <th className="p-3">Caratteristica</th>
                  <th className="p-3">Rigetto Iperacuto</th>
                  <th className="p-3">Rigetto Acuto (Cellulare / ABMR)</th>
                  <th className="p-3">Rigetto Cronico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-3 font-semibold text-slate-900 bg-slate-50">Cinetica Temporale</td>
                  <td className="p-3">Minuti o poche ore (in sala operatoria)</td>
                  <td className="p-3">Giorni o settimane (tipicamente 1–12 sett.)</td>
                  <td className="p-3">Mesi o anni dal trapianto</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900 bg-slate-50">Meccanismo Effettore</td>
                  <td className="p-3">Anticorpi preformati (anti-ABO, anti-HLA-I o anti-α-Gal)</td>
                  <td className="p-3">Linfociti T CD4+/CD8+ alloreattivi (via diretta) e/o allo-Ab de novo</td>
                  <td className="p-3">Linfociti T CD4+ (via indiretta) contro antigeni minori (mHA) o HLA</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900 bg-slate-50">Istopatologia Caratteristica</td>
                  <td className="p-3">Trombosi massiva dei capillari, neutrofili e necrosi ischemica</td>
                  <td className="p-3">Infiltrato linfocitario, tubulite renale, endotelite vascolare, positività C4d</td>
                  <td className="p-3">Arteriosclerosi dell'allotrapianto, iperplasia intimale muscolare, fibrosi interstiziale</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900 bg-slate-50">Ruolo del Complemento</td>
                  <td className="p-3">Essenziale e fulminante (MAC C5b-9 e anafilotossine)</td>
                  <td className="p-3">Variabile: cruciale nell'ABMR (fissazione di C4d)</td>
                  <td className="p-3">Basso grado cronico / subclinico</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900 bg-slate-50">Prevenzione & Terapia</td>
                  <td className="p-3">Prevenzione assoluta con Crossmatch CDC e tipizzazione ABO; refrattario a farmaci</td>
                  <td className="p-3">Boli di corticosteroidi, CNI, ATG anti-T, plasmaferesi/Rituximab per ABMR</td>
                  <td className="p-3">Ampiamente irreversibile e resistente; ri-trapianto</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 29.2 */}
        <div className="space-y-2 pt-4">
          <span className="text-xs font-bold font-mono text-slate-700 uppercase tracking-wide">
            Tabella 29.2: Target Molecolari dei Principali Farmaci Immunosoppressori
          </span>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-200 font-mono text-[11px]">
                  <th className="p-3">Classe Farmacologica</th>
                  <th className="p-3">Principio Attivo</th>
                  <th className="p-3">Immunofillina / Target Molecolare</th>
                  <th className="p-3">Meccanismo d'Azione Biologico</th>
                  <th className="p-3">Profilo di Tossicità Distintivo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-3 font-semibold text-slate-900 bg-slate-50" rowSpan={2}>Inibitori Calcineurina (CNI)</td>
                  <td className="p-3 font-mono font-bold text-teal-800">Ciclosporina A</td>
                  <td className="p-3">Ciclofillina → Calcineurina</td>
                  <td className="p-3">Blocca defosforilazione di NFAT → inibisce trascrizione gene IL-2</td>
                  <td className="p-3">Nefrotossicità vasocostrittiva, ipertensione, ipertricosi, iperplasia gengivale</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-teal-800">Tacrolimus (FK506)</td>
                  <td className="p-3">FKBP12 → Calcineurina</td>
                  <td className="p-3">Blocco Calcineurina con potenza ×100 rispetto a CsA → stop IL-2</td>
                  <td className="p-3">Nefrotossicità, neurotossicità (tremori), diabete mellito post-trapianto (PTDM)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900 bg-slate-50">Inibitori di mTOR</td>
                  <td className="p-3 font-mono font-bold text-indigo-800">Rapamicina (Sirolimus)</td>
                  <td className="p-3">FKBP12 → Chinasi mTOR (mTORC1)</td>
                  <td className="p-3">Blocco proliferazione cellulare a valle di IL-2 (arresto ciclo G1 → S)</td>
                  <td className="p-3">Mielosoppressione (piastrinopenia), iperlipidemia, ritardata guarigione ferite (non nefrotossico)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900 bg-slate-50">Blocco Costimolatorio (Segnale 2)</td>
                  <td className="p-3 font-mono font-bold text-amber-800">Belatacept</td>
                  <td className="p-3">B7-1 (CD80) e B7-2 (CD86) su APC</td>
                  <td className="p-3">Proteina CTLA-4-Ig ricombinante: lega B7 impedendo il legame a CD28 → anergia T</td>
                  <td className="p-3">Rischio di PTLD (linfomi EBV-correlati in pazienti EBV-sieronegativi); zero nefrotossicità</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900 bg-slate-50">Antimetaboliti Purinici</td>
                  <td className="p-3 font-mono font-bold text-purple-800">Micofenolato Mofetile</td>
                  <td className="p-3">Inosina Monofosfato Deidrogenasi (IMPDH)</td>
                  <td className="p-3">Blocca sintesi de novo delle purine in linfociti B e T attivati proliferanti</td>
                  <td className="p-3">Tossicità gastrointestinale (diarrea), leucopenia ed anemia midollare</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900 bg-slate-50">Anticorpi Monoclonali Biologici</td>
                  <td className="p-3 font-mono font-bold text-slate-800">Basiliximab / Rituximab</td>
                  <td className="p-3">CD25 (IL-2Rα) / CD20 (Linfociti B)</td>
                  <td className="p-3">Antagonismo recettoriale di IL-2 (induzione) / Deplezione selettiva B anti-rigetto umorale</td>
                  <td className="p-3">Reazioni da infusione, suscettibilità ad infezioni opportunistiche virali/fungine</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={quizQuestions} lessonNumber={29} title="Verifica dell'Apprendimento · Lezione 29" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={flashcardsData} lessonNumber={29} title="Flashcard di Ripasso Attivo · Lezione 29" />
    </article>
  );
};
