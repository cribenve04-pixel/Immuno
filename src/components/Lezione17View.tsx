import { QuizSection } from './QuizSection';
import { FlashcardDeck } from './FlashcardDeck';
import { ConceptMapFlow } from './ConceptMapFlow';
import { MAP_LEZIONE_17_FC_RECEPTORS_CASCADE, MAP_LEZIONE_17_ISOTYPE_EFFECTOR_COMPARISON } from '../data/conceptMapsData';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Activity,
  Layers,
  Microscope,
  Dna,
  RotateCcw,
  Sparkles,
  Zap,
  Bookmark,
  Target,
  GitBranch,
  Flame,
  Droplets,
  AlertTriangle,
  FileText,
  Check,
  CheckCircle,
  Baby,
  RefreshCw,
  HeartPulse,
  Eye,
  Crosshair,
  TrendingUp,
  Sliders,
  Scissors,
  Syringe
} from 'lucide-react';

interface Lezione17ViewProps {
  isSerif: boolean;
  fontSize: 'normal' | 'large';
}

export const Lezione17View: React.FC<Lezione17ViewProps> = ({ isSerif, fontSize }) => {
  const proseFontClass = isSerif ? 'font-serif-body' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // ==========================================
  // STATO SIMULATORE 1: LABORATORIO DEI RECETTORI Fc
  // ==========================================
  type IgIsotype = 'igg1' | 'igg2' | 'igg3' | 'igg4' | 'iga_dimer' | 'igm_pentamer' | 'ige';
  type ComplexState = 'monomer' | 'immune_complex';
  type FucosylationState = 'normal_fucosylated' | 'afucosylated';

  const [selectedIg, setSelectedIg] = useState<IgIsotype>('igg1');
  const [complexState, setComplexState] = useState<ComplexState>('immune_complex');
  const [fucosylation, setFucosylation] = useState<FucosylationState>('normal_fucosylated');
  const [cellTarget, setCellTarget] = useState<'macrophage' | 'nk_cell' | 'b_cell' | 'endothelium' | 'mastocyte' | 'enterocyte'>('macrophage');

  // Calcolo dei comportamenti recettoriali in base alla selezione
  let engagedReceptor = 'Nessun recettore ingaggiato efficacemente';
  let bindingAffinity = 'Molto Bassa / Trascurabile';
  let signalingMechanism = 'Nessuna trasduzione';
  let biologicalOutcome = 'Nessuna risposta biologica';
  let statusBannerColor = 'bg-slate-100 text-slate-700 border-slate-300';

  if (cellTarget === 'macrophage') {
    if (selectedIg === 'igg1' || selectedIg === 'igg3') {
      if (complexState === 'immune_complex') {
        engagedReceptor = 'FcγRI (CD64) & FcγRIIA (CD32a)';
        bindingAffinity = 'Alta (Ka ~ 10⁸ - 10⁹ M⁻¹ per FcγRI)';
        signalingMechanism = 'Cross-linking &rarr; Fosforilazione domini ITAM (catene γ e coda CD32a) da parte di chinasi Src &rarr; Reclutamento Syk';
        biologicalOutcome = 'Opsonofagocitosi massiva potenziata di 50-100 volte, attivazione NADPH ossidasi (NOX2 &rarr; ROS), induzione di iNOS (NO) e secrezione di TNF-α / IL-1β';
        statusBannerColor = 'bg-emerald-50 text-emerald-900 border-emerald-300';
      } else {
        engagedReceptor = 'FcγRI (CD64) saturato da IgG monomerica';
        bindingAffinity = 'Alta per FcγRI basale, ma senza cross-linking';
        signalingMechanism = 'Assenza di aggregazione recettoriale &rarr; Nessun segnale a valle';
        biologicalOutcome = 'Legame statico di sorveglianza senza fagocitosi attiva; previene l\'attivazione aspecifica in assenza di patogeno';
        statusBannerColor = 'bg-blue-50 text-blue-900 border-blue-300';
      }
    } else if (selectedIg === 'igg4') {
      engagedReceptor = 'FcγRIIB (CD32b) inibitorio o legame debolissimo a FcγR';
      bindingAffinity = 'Bassa per recettori attivatori, preferenziale per FcγRIIB';
      signalingMechanism = 'Mancata attivazione ITAM; reclutamento della fosfatasi SHIP-1 se co-ingaggiato';
      biologicalOutcome = 'Mancata attivazione del burst ossidativo; azione antinfiammatoria / tollerogena';
      statusBannerColor = 'bg-slate-100 text-slate-800 border-slate-300';
    } else {
      engagedReceptor = 'Nessun FcγR espresso sul macrofago lega questo isotipo (richiede FcαRI per IgA o recettori per mannosio)';
      bindingAffinity = 'Incompatibilità di classe isotipica';
      signalingMechanism = 'Inattivo';
      biologicalOutcome = 'Fagocitosi mediata unicamente da vie alternative o assente';
      statusBannerColor = 'bg-amber-50 text-amber-900 border-amber-300';
    }
  } else if (cellTarget === 'nk_cell') {
    if (selectedIg === 'igg1' || selectedIg === 'igg3') {
      if (complexState === 'immune_complex') {
        const isAfuco = fucosylation === 'afucosylated';
        engagedReceptor = 'FcγRIIIA (CD16a) associato a omodimero γ-γ o ζ-ζ';
        bindingAffinity = isAfuco ? 'Altissima (aumentata di 50-100x per assenza sterica di fucosio in Asn297)' : 'Moderata / Fisiologica';
        signalingMechanism = 'Cross-linking recettoriale massivo &rarr; Fosforilazione ITAM (catene ζ/γ) &rarr; Cascate ZAP-70 / PI3K / Calcio';
        biologicalOutcome = isAfuco
          ? 'ADCC Iper-Potenziata (Citotossicità devastante, degranulazione polare fulminea di Perforina e Granzimi, lisi della cellula bersaglio, tempesta citochinica)'
          : 'ADCC Fisiologica: Uccisione mirata di cellule umane infettate da virus o cellule neoplastiche opsonizzate';
        statusBannerColor = isAfuco ? 'bg-rose-50 text-rose-950 border-rose-300' : 'bg-indigo-50 text-indigo-900 border-indigo-300';
      } else {
        engagedReceptor = 'FcγRIIIA (CD16a)';
        bindingAffinity = 'Bassa per monomero libero (Kd ~ 1 µM)';
        signalingMechanism = 'Mancato cross-linking';
        biologicalOutcome = 'Cellula NK a riposo: nessun rilascio di granuli citotossici';
        statusBannerColor = 'bg-slate-100 text-slate-700 border-slate-300';
      }
    } else {
      engagedReceptor = 'Nessuno: le cellule NK non esprimono recettori per IgG2, IgG4, IgA, IgM o IgE';
      bindingAffinity = 'Nulla';
      signalingMechanism = 'Inattivo';
      biologicalOutcome = 'Nessuna induzione di ADCC';
      statusBannerColor = 'bg-amber-50 text-amber-900 border-amber-300';
    }
  } else if (cellTarget === 'b_cell') {
    if (selectedIg === 'igg1' || selectedIg === 'igg2' || selectedIg === 'igg3' || selectedIg === 'igg4') {
      if (complexState === 'immune_complex') {
        engagedReceptor = 'FcγRIIB (CD32b) con dominio ITIM intrinseco';
        bindingAffinity = 'Moderata, lega tutte le 4 sottoclassi di IgG complessate ad antigene';
        signalingMechanism = 'Co-crosslinking simultaneo di BCR + FcγRIIB &rarr; Fosforilazione ITIM da parte di Lyn &rarr; Reclutamento fosfatasi SHIP-1';
        biologicalOutcome = 'Feedback Negativo B-Cellulare: SHIP defosforila PIP₃ in PIP₂, bloccando Btk, PLCγ2 e l\'ingresso di Ca²⁺. Arresto della sintesi anticorpale ed estinzione della risposta immune.';
        statusBannerColor = 'bg-blue-50 text-blue-900 border-blue-300';
      } else {
        engagedReceptor = 'FcγRIIB a riposo';
        bindingAffinity = 'Bassa per monomero';
        signalingMechanism = 'Nessun co-crosslinking con BCR';
        biologicalOutcome = 'Il Linfocita B rimane suscettibile all\'attivazione canonica';
        statusBannerColor = 'bg-slate-100 text-slate-700 border-slate-300';
      }
    } else {
      engagedReceptor = 'FcγRIIB non lega IgA, IgM o IgE';
      bindingAffinity = 'Nulla';
      signalingMechanism = 'Inattivo';
      biologicalOutcome = 'Nessun feedback inibitorio via FcγRIIB';
      statusBannerColor = 'bg-slate-100 text-slate-700 border-slate-300';
    }
  } else if (cellTarget === 'endothelium') {
    if (selectedIg === 'igg1' || selectedIg === 'igg2' || selectedIg === 'igg3' || selectedIg === 'igg4') {
      engagedReceptor = 'FcRn (Recettore di Brambell / Fc Neonatale, eterodimero α + β2-microglobulina)';
      bindingAffinity = 'pH-dipendente: Altissima a pH acido endosomiale (<6.5), nulla a pH fisiologico neutro (7.4)';
      signalingMechanism = 'Endocitosi fluida per pinocitosi &rarr; Acidificazione endosomiale &rarr; Legame a 2 molecole di FcRn per IgG &rarr; Sorting lontano dai lisosomi';
      biologicalOutcome = 'Transcitosi e Riciclo: rilascio intatto sulla superficie basolaterale o vascolare a pH 7.4. Conferisce alle IgG l\'eccezionale emivita di 21-28 giorni (7 gg per IgG3 per suscettibilità della cerniera) e media il passaggio placentare verso il feto!';
      statusBannerColor = 'bg-emerald-50 text-emerald-900 border-emerald-300';
    } else {
      engagedReceptor = 'FcRn non riconosce IgA, IgM, IgE (manca il docking conservato CH2-CH3)';
      bindingAffinity = 'Nulla';
      signalingMechanism = 'Nessun legame di salvataggio';
      biologicalOutcome = 'Le Ig non-IgG pinocitate vengono indirizzate alla degradazione lisosomiale enzimatica, determinando emivite molto più brevi (IgE = 2 gg, IgA = 5 gg, IgM = 5 gg)';
      statusBannerColor = 'bg-rose-50 text-rose-900 border-rose-300';
    }
  } else if (cellTarget === 'mastocyte') {
    if (selectedIg === 'ige') {
      if (complexState === 'immune_complex') {
        engagedReceptor = 'FcεRI ad altissima affinità (tetramero αβγγ con ITAM)';
        bindingAffinity = 'Altissima irreversibile (Kd ~ 10⁻¹⁰ M); la catena α cattura stabilmente Fc di IgE';
        signalingMechanism = 'Cross-linking antigenico di IgE adiacenti &rarr; Attivazione Lyn &rarr; Fosforilazione ITAM su catene β e γ &rarr; Reclutamento Syk e PLCγ &rarr; Calcio massivo';
        biologicalOutcome = 'Degranulazione immediata: rilascio violento di Istamina, Eparina, Triptasi, TNF-α preformato, sintesi di Leucotrieni (LTC4, LTD4, LTE4) e PAF. Broncocostrizione, vasodilatazione sistemica e shock anafilattico.';
        statusBannerColor = 'bg-rose-100 text-rose-950 border-rose-400 font-semibold';
      } else {
        engagedReceptor = 'FcεRI (legame del monomero IgE)';
        bindingAffinity = 'Altissima (Kd ~ 10⁻¹⁰ M)';
        signalingMechanism = 'Mancato cross-linking antigenico; nessun flusso di Ca²⁺';
        biologicalOutcome = 'Sensibilizzazione passiva: il mastocita si "arma" esponendo le IgE sulla propria membrana per mesi in attesa del successivo contatto con l\'allergene bivalente.';
        statusBannerColor = 'bg-amber-50 text-amber-900 border-amber-300';
      }
    } else {
      engagedReceptor = 'Nessun legame efficace (i mastociti legano solo minimamente IgG via FcγRIII nei topi)';
      bindingAffinity = 'Minima';
      signalingMechanism = 'Inattivo';
      biologicalOutcome = 'Nessuna degranulazione anafilattica tipica';
      statusBannerColor = 'bg-slate-100 text-slate-700 border-slate-300';
    }
  } else if (cellTarget === 'enterocyte') {
    if (selectedIg === 'iga_dimer') {
      engagedReceptor = 'pIgR (Polymeric Immunoglobulin Receptor)';
      bindingAffinity = 'Alta specificità per complessi polimerici provvisti di Catena J (IgA dimeriche e IgM pentameriche)';
      signalingMechanism = 'Endocitosi dal versante basolaterale &rarr; Transcitosi intracellulare verso la membrana apicale &rarr; Clivaggio proteolitico con rilascio della Componente Secretoria (SC)';
      biologicalOutcome = 'Secrezione nel lume intestinale / respiratorio di sIgA (IgA secretoria): la componente secretoria ancora le IgA al muco, proteggendole dalla digestione da parte delle proteasi luminali e consentendo l\'esclusione immune e la crescita incatenata (enchained growth)!';
      statusBannerColor = 'bg-emerald-50 text-emerald-900 border-emerald-300';
    } else if (selectedIg === 'igm_pentamer') {
      engagedReceptor = 'pIgR (riconosce la Catena J della IgM)';
      bindingAffinity = 'Alta';
      signalingMechanism = 'Transcitosi analoga a IgA';
      biologicalOutcome = 'Secrezione mucosale di IgM compensatorie (meccanismo protettivo vicariante nei pazienti affetti da Deficit Selettivo di IgA)';
      statusBannerColor = 'bg-blue-50 text-blue-900 border-blue-300';
    } else {
      engagedReceptor = 'pIgR non riconosce IgG monomeriche né IgE (manca la Catena J)';
      bindingAffinity = 'Nulla';
      signalingMechanism = 'Inattivo';
      biologicalOutcome = 'Le IgG non possono essere trasportate nel lume mediante pIgR; rimangono confinate nella lamina propria o trasudano passivamente';
      statusBannerColor = 'bg-slate-100 text-slate-700 border-slate-300';
    }
  }

  // ==========================================
  // STATO SIMULATORE 2: ELETTROFORESI & PATOLOGIE CLINICHE
  // ==========================================
  type ClinicalProfile = 'normal' | 'polyclonal' | 'monoclonal_myeloma' | 'itp' | 'infant_hypo';
  const [selectedProfile, setSelectedProfile] = useState<ClinicalProfile>('normal');
  const [activeClinicalIntervention, setActiveClinicalIntervention] = useState<string>('none');

  useEffect(() => {
    setActiveClinicalIntervention('none');
  }, [selectedProfile]);

  const electrophoreticData: Record<ClinicalProfile, {
    title: string;
    description: string;
    curveCharacteristics: string;
    albuminLevel: string;
    gammaLevel: string;
    pathologyDetails: string;
    interventions: { id: string; label: string; outcome: string; isEffective: boolean }[];
  }> = {
    normal: {
      title: 'Quadro Fisiologico Normale',
      description: 'Tracciato elettroforetico standard delle proteine sieriche (SPEP) in soggetto adulto sano.',
      curveCharacteristics: 'Picco alto e stretto di Albumina (60%), seguito dalle bande globuliniche α1, α2, β e una cupola policlonale armonica e diffusa nella regione gamma (15-20%).',
      albuminLevel: 'Normale (3.5 - 5.0 g/dL)',
      gammaLevel: 'Normale policlonale (0.8 - 1.6 g/dL)',
      pathologyDetails: 'Equilibrio omeostatico: concentrazione bilanciata di IgG (~1000 mg/dL), IgA (~200 mg/dL), IgM (~100 mg/dL) e tracce di IgE/IgD.',
      interventions: [
        {
          id: 'monitoring',
          label: 'Follow-up di routine',
          outcome: 'Il paziente non necessita di interventi; profilo protettivo fisiologico.',
          isEffective: true
        }
      ]
    },
    polyclonal: {
      title: 'Ipergammaglobulinemia Policlonale (Flogosi Cronica / Malattie Autoimmuni / Epatopatie)',
      description: 'Aumento eterogeneo di tutti gli isotipi anticorpali ad opera di molteplici cloni plasmacellulari attivati.',
      curveCharacteristics: 'Ampia e uniforme gibbosità ("a base larga") della banda gamma-globulinica, che riflette la cooperazione di milioni di cloni differenti.',
      albuminLevel: 'Lievemente ridotta per consumo o infiammazione acuta/cronica',
      gammaLevel: 'Marcatamente elevata a base larga (> 2.0 - 3.5 g/dL)',
      pathologyDetails: 'Reperibile in corso di infezioni croniche protratte (HIV, tubercolosi, endocardite), connettiviti sistemiche (LES, artrite reumatoide, sindrome di Sjögren) e cirrosi epatica.',
      interventions: [
        {
          id: 'treat_cause',
          label: 'Trattamento mirato dell\'infezione di base o immunosoppressione per connettivite',
          outcome: 'Graduale normalizzazione del tracciato con risoluzione dello stimolo antigenico cronico.',
          isEffective: true
        }
      ]
    },
    monoclonal_myeloma: {
      title: 'Gammopatia Monoclonale / Mieloma Multiplo (Picco a Campanile)',
      description: 'Proliferazione neoplastica clonale di una singola plasmacellula midollare secernente una sola immunoglobulina omogenea (Componente M).',
      curveCharacteristics: 'Stretta, alta e aguzza cuspide simmetrica nella regione gamma: "picco a campanile a base stretta" (spesso >3 g/dL di proteina monoclonale).',
      albuminLevel: 'Frequentemente depressa per sindrome da deperimento midollare',
      gammaLevel: 'Spike monoclonale severo (Componente M), con ipogammaglobulinemia marcata delle immunoglobuline sane non clonali',
      pathologyDetails: 'Quadro clinico CRAB: Calcemia elevata, Renal failure (rene da mieloma con cilindri di catene leggere di Bence Jones), Anemia normocitica normocromica, Bone lesions (lesioni osteolitiche a stampo dovute ad attivazione osteoclastica da RANKL).',
      interventions: [
        {
          id: 'chemo_immunotherapy',
          label: 'Terapia di combinazione con Inibitori del Proteasoma (Bortezomib) + Immunomodulanti (Lenalidomide) + Anti-CD38 (Daratumumab)',
          outcome: 'Abbattimento drastico del clone neoplastico midollare, scomparsa del picco a campanile e recupero della funzione ematopoietica.',
          isEffective: true
        }
      ]
    },
    itp: {
      title: 'Porpora Trombocitopenica Immune (ITP / Morbo di Werlhof) & FcγRI',
      description: 'Malattia autoimmune causata da autoanticorpi IgG diretti contro le glicoproteine della membrana piastrinica (GPIIb/IIIa o GPIb/IX).',
      curveCharacteristics: 'Tracciato elettroforetico spesso apparentemente normale o con lieve incremento gamma; il danno è periferico selettivo sulle piastrine.',
      albuminLevel: 'Normale',
      gammaLevel: 'Normale o modicamente aumentata; presenza di autoanticorpi specifici anti-piastrine',
      pathologyDetails: 'Le piastrine rivestite da IgG vengono intercettate dai macrofagi splenici ed epatici tramite il recettore FcγRI (CD64) e FcγRIIA, che innescano opsonofagocitosi distruttiva (emivita piastrinica crolla da 7-10 giorni a poche ore &rarr; piastrinopenia severa < 20.000/µL con petecchie, porpora, epistassi e rischio emorragie viscerali).',
      interventions: [
        {
          id: 'ivig_infusion',
          label: 'Infusione ad alte dosi di Immunoglobuline Endovena (IVIG, 1-2 g/kg)',
          outcome: 'SUCCESSO TEMPORANEO RAPIDO: Le IVIG saturano competitivamente tutti i recettori FcγRI sui macrofagi splenici e le frazioni sialilate inducono up-regolazione del recettore inibitorio FcγRIIB, bloccando immediatamente la distruzione piastrinica entro 24-48 ore.',
          isEffective: true
        },
        {
          id: 'tpo_agonist',
          label: 'Agonisti del recettore della Trombopoietina (TPO-RA: Eltrombopag, Romiplostim)',
          outcome: 'SUCCESSO CRONICO: Stimolano la megacariocitopoiesi midollare aumentando la produzione di nuove piastrine per compensare la distruzione periferica.',
          isEffective: true
        },
        {
          id: 'splenectomy',
          label: 'Splenectomia chirurgica (rimozione della milza)',
          outcome: 'RIMOZIONE DEL SITO PRIMARIO: Elimina sia la sede principale di fagocitosi FcγRI-dipendente sia il principale sito di produzione degli autoanticorpi da parte dei linfociti B splenici.',
          isEffective: true
        }
      ]
    },
    infant_hypo: {
      title: 'Ipogammaglobulinemia Transitoria dell\'Infanzia & Finestra FcRn',
      description: 'Fisiologica caduta dei livelli di immunoglobuline circolanti tra il 3° e il 6° mese di vita del lattante.',
      curveCharacteristics: 'Profilo elettroforetico con regione gamma marcatamente depressa e appiattita rispetto all\'adulto.',
      albuminLevel: 'Normale',
      gammaLevel: 'Profondamente ridotta (< 0.3 - 0.4 g/dL)',
      pathologyDetails: 'Durante la vita intrauterina, il feto riceve passivamente le IgG materne via FcRn placentare. Dopo la nascita, l\'emivita delle IgG materne è di ~21 giorni: entro 3-4 mesi il titolo materno crolla. Poiché la sintesi endogena neonatale di IgG e IgA richiede maturità e stimolazione antigenica, si genera una "finestra di vulnerabilità" immunitaria con aumentata suscettibilità ad otiti, polmoniti e infezioni respiratorie da batteri capsulati.',
      interventions: [
        {
          id: 'maternal_breastfeeding',
          label: 'Allattamento al seno (fornitura di IgA secretorie e lattoferrina)',
          outcome: 'ECCELLENTE: Fornisce protezione mucosale topica immediata nel tratto gastrointestinale e respiratorio superiore durante la transizione maturativa.',
          isEffective: true
        },
        {
          id: 'antibiotic_prophylaxis',
          label: 'Vigilanza clinica ed eventuale profilassi antibiotica mirata se infezioni ricorrenti',
          outcome: 'Protegge il bambino fino al compimento del 12°-18° mese, quando la produzione autonoma di IgG raggiunge livelli protettivi.',
          isEffective: true
        }
      ]
    }
  };

  const currentProfileData = electrophoreticData[selectedProfile];

  // ==========================================
  // STATO FLASHCARDS ATTIVE (6 QUESITI)
  // ==========================================
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const toggleCard = (index: number) => {
    setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const flashcards = [
    {
      question: 'Qual è la differenza nei prodotti di scissione tra la digestione con Papaina e con Pepsina/Tripsina?',
      answer: 'La Papaina cliva a monte dei ponti disolfuro della cerniera generando 3 frammenti: due frammenti monovalenti identici Fab (che legano l\'antigene ma non precipitano) e un frammento Fc (cristallizzabile, che media le funzioni effettrici). La Pepsina (e la Tripsina) cliva a valle dei ponti disolfuro generando un singolo frammento bivalente F(ab\')₂ (capace di crosslinking e precipitazione) e frammenti degradati dell\'Fc.'
    },
    {
      question: 'Come spiega la struttura della regione cerniera la ridotta emivita di IgG3 (7 giorni) rispetto a IgG1 (21 giorni)?',
      answer: 'Le IgG3 possiedono una regione cerniera straordinariamente allungata (fino a 62 amminoacidi con 11 ponti disolfuro intercatena). Questa estensione garantisce una mobilità tridimensionale altissima e un\'efficacia superiore nell\'attivare C1q e FcγR, ma espone la molecola ad una rapida degradazione proteolitica da parte delle proteasi plasmatiche e microbiche, riducendone l\'emivita a circa 7 giorni.'
    },
    {
      question: 'Qual è il meccanismo biochimico del riciclo cellulare delle IgG mediato dal recettore neonatale FcRn?',
      answer: 'FcRn (struttura MHC-I like con β2-microglobulina) espresso su endotelio e sinciziotrofoblasto lega le IgG negli endosomi a pH acido (<6.5) dopo pinocitosi, proteggendole dalla digestione nei lisosomi. Le vescicole compiono transcitosi verso la membrana cellulare dove, a pH fisiologico neutro (7.4), l\'affinità crolla e le IgG vengono rilasciate intatte nel sangue, estendendone l\'emivita a 21 giorni.'
    },
    {
      question: 'Come esercita il recettore FcγRIIB il feedback negativo sui linfociti B e quale enzima intracellulare recluta?',
      answer: 'FcγRIIB è l\'unico recettore Fc inibitorio (dotato di dominio ITIM). Quando un immunocomplesso lega contemporaneamente il BCR e FcγRIIB, la tirosina dell\'ITIM viene fosforilata da Lyn e recluta la fosfatasi lipidica SHIP-1. SHIP-1 defosforila PIP₃ in PIP₂, impedendo il docking di Btk e PLCγ2, arrestando il flusso di Calcio e bloccando l\'ulteriore produzione anticorpale.'
    },
    {
      question: 'In che modo la fucosilazione del frammento Fc modula l\'ADCC mediata dalle cellule NK (CD16a) e quale ruolo ha in COVID-19?',
      answer: 'La rimozione del residuo di fucosio dal core oligosaccaridico legato ad Asn297 del dominio CH2 aumenta l\'affinità per FcγRIIIA (CD16a) di 50-100 volte. Negli individui con COVID-19 severo critico, le plasmacellule producono anticorpi anti-Spike iper-afucosilati che scatenano un\'iperattivazione incontrollata dei macrofagi polmonari e delle NK, favorendo il danno alveolare diffuso e la tempesta citochinica.'
    },
    {
      question: 'Qual è la funzione della Componente Secretoria (SC) generata dal clivaggio di pIgR durante la secrezione delle IgA?',
      answer: 'Il recettore pIgR lega il dimero di IgA provvisto di catena J sul lato basolaterale degli epiteli e ne media la transcitosi luminale. Al versante apicale, pIgR viene tagliato proteoliticamente e il suo dominio extracellulare rimane avvolto attorno all\'IgA come Componente Secretoria (SC), che protegge l\'anticorpo dalla lisi enzimatica gastrica/pancreatica e ne ancora il dimero alle mucine del muco.'
    }
  ];

  // ==========================================
  // STATO QUIZ ACCADEMICO (10 QUESITI)
  // ==========================================
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showQuizResults, setShowQuizResults] = useState<boolean>(false);

  const quizQuestions = [
    {
      id: 1,
      question: 'Quale delle seguenti coppie di enzimi proteolitici produce, a partire da una molecola di IgG integra, rispettivamente tre frammenti distinti (due Fab monovalenti e un Fc) e un frammento bivalente F(ab\')₂ con degradazione dell\'Fc?',
      options: [
        'A) Pepsina per i 3 frammenti e Papaina per F(ab\')₂',
        'B) Papaina per i 3 frammenti (due Fab + Fc) e Pepsina per F(ab\')₂',
        'C) Tripsina per frammenti costanti e Chimotripsina per le ancore',
        'D) Lattoferrina e Lisozima',
        'E) Elastasi neutrofila e Mieloperossidasi'
      ],
      correctAnswer: 1,
      explanation: 'La Papaina (estratta dalla papaia) taglia la catena pesante a monte dei ponti disolfuro della cerniera producendo due frammenti Fab identici monovalenti e un frammento Fc. La Pepsina (enzima gastrico) taglia a valle dei ponti disolfuro, preservando l\'unione delle due braccia leganti l\'antigene nel frammento bivalente F(ab\')₂ mentre l\'Fc viene idrolizzato in piccoli peptidi.'
    },
    {
      id: 2,
      question: 'Il recettore neonatale FcRn (recettore di Brambell) è cruciale per la farmacocinetica degli anticorpi e per l\'immunità perinatale. Quale affermazione sulla sua struttura molecolare e funzionamento è corretta?',
      options: [
        'A) È un recettore a 7 domini transmembrana accoppiato a proteine Gs',
        'B) Ha una struttura MHC di classe I-like associata a β2-microglobulina e lega le IgG a pH acido endosomiale (<6.5)',
        'C) Lega preferenzialmente le IgM pentameriche attraverso la catena J',
        'D) Determina la rapida distruzione lisosomiale di tutte le IgG catturate',
        'E) È presente esclusivamente nei macrofagi alveolari'
      ],
      correctAnswer: 1,
      explanation: 'FcRn è un eterodimero strutturalmente analogo alle molecole MHC di classe I, composto da una catena pesante α e dalla subunità invariabile β2-microglobulina. Il legame con il frammento Fc delle IgG avviene ad alta affinità solo a pH acido (<6.5) negli endosomi, proteggendo la molecola dal catabolismo lisosomiale e consentendone il riciclo extracellulare a pH 7.4.'
    },
    {
      id: 3,
      question: 'Una donna al nono mese di gravidanza viene vaccinata contro il Virus Respiratorio Sinciziale (RSV). Quale isotipo e quale meccanismo biologico permetteranno al nascituro di essere protetto nei primi mesi di vita?',
      options: [
        'A) IgE secretorie che attraversano la membrana amniotica per osmosi',
        'B) IgM pentameriche trasportate dalla vena ombelicale tramite pIgR',
        'C) IgG materne (prevalentemente IgG1 e IgG3) che attraversano il sinciziotrofoblasto placentare mediante transcitosi mediata da FcRn',
        'D) Linfociti T citotossici materni che colonizzano il timo fetale',
        'E) IgD solubili rilasciate nel liquido amniotico'
      ],
      correctAnswer: 2,
      explanation: 'L\'immunizzazione passiva naturale del feto avviene mediante il trasporto transplacentare delle IgG materne (in particolare IgG1 e IgG3) operato dal recettore FcRn espresso sul sinciziotrofoblasto. Questo meccanismo garantisce una protezione transitoria nei primi mesi di vita, sfruttata attivamente dalla vaccinazione materna anti-RSV.'
    },
    {
      id: 4,
      question: 'Nel tracciato elettroforetico delle proteine sieriche (SPEP) di un paziente affetto da Mieloma Multiplo sintomatico con lesioni osteolitiche, quale alterazione caratteristica della frazione gamma si osserva?',
      options: [
        'A) Totale assenza della banda dell\'albumina con profilo gamma piatto',
        'B) Banda gamma allargata a gobba simmetrica a base larga tipica di infezione cronica',
        'C) Un picco stretto, alto e aguzzo ("a campanile a base stretta") corrispondente alla componente monoclonale M',
        'D) Raddoppio isolato della banda delle alfa-1 globuline',
        'E) Deposito diffuso di immunocomplessi solubili nella banda beta'
      ],
      correctAnswer: 2,
      explanation: 'Il Mieloma Multiplo origina dalla proliferazione clonale neoplastica di una singola plasmacellula che secerne quantità massive di una singola specie anticorpale identica, producendo all\'elettroforesi uno spike simmetrico ed estremamente compatto definito picco monoclonale "a campanile a base stretta".'
    },
    {
      id: 5,
      question: 'Qual è il ruolo del recettore FcγRIIB (CD32b) nella regolazione fisiologica della risposta umorale da parte dei linfociti B?',
      options: [
        'A) Attivare la degranulazione mastocitaria tramite ITAM',
        'B) Esercitare un feedback negativo bloccando l\'attivazione cellulare quando l\'antigene complessato lega simultaneamente BCR e FcγRIIB tramite il reclutamento della fosfatasi SHIP',
        'C) Aumentare la produzione di interleuchina-2 per stimolare i linfociti T',
        'D) Promuovere la polimerizzazione del poro litico C9 del complemento',
        'E) Accelerare la trascitosi delle IgA nel lume intestinale'
      ],
      correctAnswer: 1,
      explanation: 'FcγRIIB possiede un dominio citoplasmatico ITIM. Quando la concentrazione di anticorpi IgG è sufficiente da opsonizzare l\'antigene, si verifica il co-crosslinking di BCR ed FcγRIIB: la fosforilazione dell\'ITIM recluta la fosfatasi inositolo SHIP-1 che idrolizza PIP3 arrestando la cascata a valle di Btk e spegnendo la risposta anticorpale.'
    },
    {
      id: 6,
      question: 'Quale delle seguenti modificazioni post-traduzionali a carico del frammento Fc delle IgG aumenta drasticamente (fino a 100 volte) l\'affinità per il recettore FcγRIIIA (CD16a) sulle cellule NK, potenziando la citotossicità cellulare anticorpo-dipendente (ADCC)?',
      options: [
        'A) Iper-metilazione delle arginine nella regione cerniera',
        'B) Assenza di residui di fucosio (afucosilazione) sulla catena glicanica legata ad Asn297 del dominio CH2',
        'C) Acetilazione dei residui di istidina nel dominio CH1',
        'D) Taglio proteolitico della catena leggera kappa',
        'E) Fosforilazione delle serine del dominio Fab'
      ],
      correctAnswer: 1,
      explanation: 'La rimozione sterica del residuo di fucosio dal glicano N-linked conservato in Asn297 del dominio CH2 (anticorpi afucosilati) elimina l\'ingombro sterico con il residuo di carboidrato di FcγRIIIA, determinando un incremento di affinità di 50-100 volte per CD16a sulle cellule NK e scatenando una potente ADCC.'
    },
    {
      id: 7,
      question: 'Nella Porpora Trombocitopenica Immune (ITP o morbo di Werlhof), qual è il meccanismo immunopatologico che causa la drastica riduzione della conta piastrinica?',
      options: [
        'A) Mancata produzione di megacariociti nel midollo osseo per deficit di ferro',
        'B) Opsonizzazione delle piastrine da parte di autoanticorpi IgG anti-GPIIb/IIIa e loro distruzione fagocitica ad opera dei macrofagi splenici via FcγRI',
        'C) Lisi osmotica massiva mediata unicamente dalla via alternativa del complemento',
        'D) Degranulazione anafilattica massiva di istamina da parte degli eosinofili',
        'E) Infezione diretta delle piastrine da parte del virus di Epstein-Barr'
      ],
      correctAnswer: 1,
      explanation: 'Nell\'ITP i linfociti B autoreattivi producono autoanticorpi IgG diretti contro le glicoproteine della superficie piastrinica (GPIIb/IIIa o GPIb/IX). Le piastrine opsonizzate vengono riconosciute dai recettori FcγRI (CD64) e FcγRIIA dei macrofagi della milza e del fegato, che le eliminano per fagocitosi provocando grave trombocitopenia periferica.'
    },
    {
      id: 8,
      question: 'Quale delle seguenti affermazioni descrive correttamente il meccanismo con cui le IgA secretorie (sIgA) attraversano l\'epitelio intestinale e proteggono la mucosa?',
      options: [
        'A) Vengono trasportate come monomeri da FcRn e distrutte nel succo gastrico',
        'B) Il dimero di IgA unito dalla catena J lega il recettore pIgR sul lato basolaterale, viene transcitate al lume dove pIgR viene tagliato, rilasciando la Componente Secretoria che ancora le IgA al muco',
        'C) Vengono secrete unicamente tramite fagocitosi da parte dei neutrofili luminali',
        'D) Attivano potentemente la via classica del complemento nel lume intestinale generando perforazioni epiteliali',
        'E) Riconoscono solo allergeni alimentari provocando degranulazione di mastociti'
      ],
      correctAnswer: 1,
      explanation: 'Le plasmacellule della lamina propria producono dimeri di IgA tenuti insieme dalla catena J. Il recettore pIgR espresso sul versante basolaterale degli enterociti lega la catena J, ne guida la transcitosi apicale e viene clivato lasciando attaccata la Componente Secretoria (SC). La SC protegge il dimero dalle proteasi intestinali e lo lega alle mucine.'
    },
    {
      id: 9,
      question: 'In cosa consiste il fenomeno della "crescita incatenata" (enchained growth) mediato dalle IgA nei confronti dei batteri flagellati luminali?',
      options: [
        'A) Formazione di bio-film patogeni resistenti agli antibiotici',
        'B) Le IgA dimeriche legano le cellule figlie batteriche durante la divisione cellulare, impedendone la separazione e formando lunghe catene inerti che non possono nuotare e vengono espulse col muco',
        'C) Inibizione della replicazione del DNA batterico tramite inserimento nucleare di Fab',
        'D) Stimolazione della proliferazione batterica per nutrire gli enterociti',
        'E) Fagocitosi delle cellule M da parte dei bacilli'
      ],
      correctAnswer: 1,
      explanation: 'La "crescita incatenata" è un elegante meccanismo non infiammatorio di esclusione immune: le IgA secretorie bivalenti/tetravalenti legano i batteri flagellati (es. Salmonella) mentre si dividono, impedendo alle cellule figlie di staccarsi. Si formano ciuffi e lunghe catene batteriche incapaci di motilità che vengono facilmente eliminate dalla peristalsi intestinale.'
    },
    {
      id: 10,
      question: 'Come cooperano le IgE e gli eosinofili nella difesa dell\'ospite contro le infezioni da elminti e parassiti pluricellulari?',
      options: [
        'A) Le IgE perforano direttamente la cuticola dell\'elminte mediante il frammento Fc',
        'B) Gli elminti vengono fagocitati interi dagli eosinofili grazie a recettori scavenger',
        'C) Le IgE opsonizzano l\'elminte legandone il tegumento con i Fab; gli eosinofili riconoscono le IgE tramite FcεRI e rilasciano enzimi litici e proteine tossiche (MBP, ECP) uccidendo il parassita per ADCC',
        'D) Le IgE trasformano l\'elminte in batterio Gram-positivo',
        'E) Gli eosinofili secernono C1q che lisa la membrana parassitaria per via classica'
      ],
      correctAnswer: 2,
      explanation: 'Dato che gli elminti sono organismi pluricellulari troppo grandi per essere fagocitati, la difesa immunitaria si affida alla citotossicità extracellulare (ADCC): le IgE rivestono il parassita e gli eosinofili, ingaggiando le IgE tramite il recettore FcεRI, rilasciano i propri granuli contenenti la Major Basic Protein (MBP), la proteina cationica eosinofila (ECP) e perossidasi, distruggendo il tegumento dell\'elminte.'
    }
  ];

  const handleSelectAnswer = (qIndex: number, optionIndex: number) => {
    if (showQuizResults) return;
    setQuizAnswers(prev => ({ ...prev, [qIndex]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctAnswer) score++;
    });
    return score;
  };


  return (
    <div className={`space-y-12 ${proseFontClass} text-slate-800`}>
      {/* HEADER DELLA LEZIONE 17 */}
      <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-indigo-800/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full text-xs font-mono font-semibold tracking-wide uppercase">
              Lezione 17 · 06 Novembre 2025
            </span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full text-xs font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" /> Trascrizione Integrale Verificata
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Funzioni Effettrici degli Anticorpi, Famiglia dei Recettori Fc (FcγR, FcRn, FcεR, pIgR), Sottoclassi e Immunopatologia
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-4xl leading-relaxed">
            Dalla bioarchitettura molecolare e scissione enzimatica delle immunoglobuline (Fab ed Fc) ai meccanismi effettori: neutralizzazione virale, attivazione classica del complemento, opsonofagocitosi via FcγRI (50-100x), citotossicità ADCC delle cellule NK via CD16a, glicosilazione/fucosilazione in COVID-19, circuito inibitorio FcγRIIB, riciclo e trasporto placentare mediati da FcRn, immunità mucosale sIgA con pIgR e reattività anafilattica/antielmintica delle IgE via FcεRI.
          </p>

          <div className="pt-4 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-300">
            <div>
              <span className="text-slate-400 block font-mono text-[10px] uppercase">Docente Ufficiale</span>
              <strong className="text-white text-sm">Prof.ssa Ricciarda Galandrini</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-mono text-[10px] uppercase">Sbobinatori</span>
              <strong className="text-white text-xs">Alice Amorosi & Francesca Barile</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-mono text-[10px] uppercase">Revisori Medici</span>
              <strong className="text-white text-xs">Aldo Annetta & Giulia Bella</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-mono text-[10px] uppercase">Target Didattico</span>
              <strong className="text-white text-xs">Immunologia & Terapie Anticorpali</strong>
            </div>
          </div>
        </div>
      </section>

      {/* INDICE RAPIDO DEI 10 SOTTO-CAPITOLI */}
      <nav className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-150 pb-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-1.5">
            <Bookmark className="w-4 h-4" /> Struttura della Trattazione (10 Sotto-capitoli)
          </span>
          <span className="text-xs text-slate-500 font-sans">Tempo stimato: 35 min</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs">
          <a href="#sec-17-1" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">1</span>
            17.1 Struttura Quaternaria & Digestione Enzimatica (Papaina vs Pepsina)
          </a>
          <a href="#sec-17-2" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">2</span>
            17.2 Isotipi, Distribuzione & Elettroforesi Sieroproteica (Picco Monoclonale)
          </a>
          <a href="#sec-17-3" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">3</span>
            17.3 Sottoclassi IgG (IgG1-4): Cerniera, Emivita & Profilo di IgG4
          </a>
          <a href="#sec-17-4" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">4</span>
            17.4 Neutralizzazione dell'Antigene & Sieroterapia Passiva
          </a>
          <a href="#sec-17-5" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">5</span>
            17.5 Recettore Neonatale FcRn: Transcitosi, Placenta & Riciclo (21 gg)
          </a>
          <a href="#sec-17-6" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">6</span>
            17.6 Attivazione del Complemento: CH2, Glicosilazione & IgM a "Ragno"
          </a>
          <a href="#sec-17-7" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">7</span>
            17.7 Recettori FcγR (CD64, CD32a, CD32b, CD16a), ADCC & Morbo di Werlhof
          </a>
          <a href="#sec-17-8" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">8</span>
            17.8 Glicosilazione & Fucosilazione del Frammento Fc in COVID-19 Severo
          </a>
          <a href="#sec-17-9" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">9</span>
            17.9 Immunità Mucosale & IgA: Dimero, pIgR, Crescita Incatenata & Muco
          </a>
          <a href="#sec-17-10" className="text-slate-700 hover:text-indigo-600 font-medium py-1 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">10</span>
            17.10 IgE & FcεRI: Cross-Linking Anafilattico & ADCC Antielmintica
          </a>
        </div>
      </nav>

      {/* SOTTO-CAPITOLO 17.1 */}
      <section id="sec-17-1" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            1
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 17.1</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Struttura Quaternaria delle Immunoglobuline & Digestione Enzimatica (Papaina vs Pepsina)
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            Gli anticorpi (o immunoglobuline, Ig) sono proteine solubili secrete dalle <strong>plasmacellule</strong> (lo stadio differenziativo terminale dei linfociti B). Hanno una bioarchitettura molecolare del tutto sovrapponibile a quella del <em>B Cell Receptor (BCR)</em>, con l'unica fondamentale differenza che sono privi della sequenza transmembrana idrofobica e della coda citoplasmatica.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Dna className="w-4 h-4 text-indigo-600" /> Architettura Quaternaria a 4 Catene
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Ogni monomero anticorpale è formato da <strong>due catene pesanti (H, Heavy)</strong> identiche (codificate dal cromosoma 14) e <strong>due catene leggere (L, Light)</strong> identiche (catene κ sul cromosoma 2 o λ sul cromosoma 22), unite reciprocamente da ponti disolfuro covalenti intercatena (-S-S-).
              </p>
              <ul className="text-xs text-slate-700 space-y-1 list-disc pl-4 pt-1">
                <li><strong>Estremità N-terminale variabile (V):</strong> formata dai domini VH e VL (riarrangiamenti VDJ e VJ), ospitanti ciascuno 3 anelli ipervariabili (CDR1, CDR2, CDR3) che costituiscono il paratopo.</li>
                <li><strong>Porzione costante (C):</strong> formata dal dominio CL per la catena leggera e da 3 o 4 domini CH (CH1, CH2, CH3; CH4 per IgM e IgE).</li>
                <li><strong>Regione Cerniera (Hinge region):</strong> posta tra CH1 e CH2, ricca di cisteine e proline, garantisce flessibilità angolare alle due braccia per adattarsi alla spaziatura degli epitopi.</li>
              </ul>
            </div>

            <div className="p-4 bg-indigo-50/60 rounded-xl border border-indigo-200 space-y-2">
              <h4 className="font-bold text-indigo-900 text-sm flex items-center gap-2">
                <Scissors className="w-4 h-4 text-indigo-700" /> La Scissione Enzimatica Storica di Porter e Edelman
              </h4>
              <p className="text-xs text-indigo-950 leading-relaxed">
                Gli studi biochimici che valsero il Premio Nobel nel 1972 dimostrarono che il trattamento proteolitico delle IgG scinde la molecola in frammenti con compiti biologici distinti:
              </p>
              <div className="space-y-2 pt-1 text-xs">
                <div className="p-2.5 bg-white rounded-lg border border-indigo-150">
                  <strong className="text-indigo-700 block font-mono">1. Papaina (estratta da Carica papaya)</strong>
                  Taglia a monte dei ponti disolfuro inter-catena pesante nella cerniera &rarr; genera <strong>3 frammenti indipendenti</strong>: due frammenti <strong>Fab</strong> (Fragment antigen-binding, monovalenti, legano l'antigene ma non precipitano) e un frammento <strong>Fc</strong> (Fragment crystallizable, formato dai domini costanti CH2 e CH3, responsabile di tutte le funzioni effettrici).
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-indigo-150">
                  <strong className="text-indigo-700 block font-mono">2. Pepsina / Tripsina (enzimi digestivi)</strong>
                  Taglia a valle dei ponti disolfuro della cerniera &rarr; genera un singolo frammento bivalente <strong>F(ab')₂</strong> (capace di legare contemporaneamente due epitopi e formare reticoli precipitanti) mentre la porzione Fc viene frammentata in piccoli peptidi inattivi (pFc').
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 17.2 */}
      <section id="sec-17-2" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            2
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 17.2</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Isotipi, Distribuzione Anatomica & Elettroforesi Sieroproteica (Picco Monoclonale a Campanile)
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            L'identità di classe (isotipo) delle immunoglobuline non dipende dalle regioni variabili Fab, bensì dai geni costanti codificati dal locus <em>IGH</em> sul cromosoma 14:
          </p>
          <div className="p-3 bg-slate-100 rounded-lg font-mono text-xs text-slate-800 text-center tracking-wide">
            5'- V-D-J &mdash; Cμ (IgM) &mdash; Cδ (IgD) &mdash; Cγ3 &mdash; Cγ1 &mdash; Cα1 &mdash; Cγ2 &mdash; Cγ4 &mdash; Cε (IgE) &mdash; Cα2 (IgA2) - 3'
          </div>

          <p>
            Le 5 classi (IgM, IgD, IgG, IgA, IgE) presentano concentrazioni sieriche, emivite e distribuzioni anatomiche nettamente distinte:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-xs my-2">
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
              <strong className="block text-blue-900 font-bold text-sm">IgG</strong>
              <span className="text-[11px] text-blue-700 font-mono">1000-1500 mg/dL</span>
              <p className="text-[10px] text-slate-600 mt-1">75% del siero. Circolo e tessuti extravascolari.</p>
            </div>
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
              <strong className="block text-amber-900 font-bold text-sm">IgA</strong>
              <span className="text-[11px] text-amber-700 font-mono">150-350 mg/dL</span>
              <p className="text-[10px] text-slate-600 mt-1">15% del siero. La più prodotta nel corpo (&gt;50 mg/kg/die).</p>
            </div>
            <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200">
              <strong className="block text-indigo-900 font-bold text-sm">IgM</strong>
              <span className="text-[11px] text-indigo-700 font-mono">80-150 mg/dL</span>
              <p className="text-[10px] text-slate-600 mt-1">8-10% del siero. Risposta primaria, confinata nel circolo.</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="block text-slate-900 font-bold text-sm">IgD</strong>
              <span className="text-[11px] text-slate-700 font-mono">&lt; 3 mg/dL</span>
              <p className="text-[10px] text-slate-600 mt-1">Tracce minime. Co-espressa con IgM sui B naïve.</p>
            </div>
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200">
              <strong className="block text-rose-900 font-bold text-sm">IgE</strong>
              <span className="text-[11px] text-rose-700 font-mono">&lt; 0.05 mg/dL</span>
              <p className="text-[10px] text-slate-600 mt-1">0.002%. Fissata ai mastociti e basofili via FcεRI.</p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-600" /> Elettroforesi delle Sieroproteine (SPEP) & Il Campanile a Base Stretta
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              Nel tracciato elettroforetico le proteine sieriche migrano in base alla carica netta verso l'anodo. L'<strong>albumina</strong> è la frazione più abbondante e veloce (picco prominente a sinistra), mentre le immunoglobuline migrano nella regione delle <strong>gamma-globuline</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
              <div className="p-2.5 bg-white rounded border border-slate-200">
                <strong className="text-slate-900 block font-semibold mb-0.5">Ipergammaglobulinemia Policlonale (Base Larga)</strong>
                Curva ad ampia gobba simmetrica, espressione della sintesi eterogenea di milioni di cloni plasmacellulari differenti in risposta a infezioni croniche protratte o collagenopatie autoimmuni.
              </div>
              <div className="p-2.5 bg-white rounded border border-slate-200">
                <strong className="text-slate-900 block font-semibold mb-0.5">Componente Monoclonale (Picco a Campanile)</strong>
                Cuspide simmetrica acutissima, alta e stretta ("a campanile a base stretta"). Segno patognomonico di una proliferazione monoclonale neoplastica di una singola plasmacellula (<strong>Mieloma Multiplo</strong>, MGUS o Macroglobulinemia di Waldenström).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 17.3 */}
      <section id="sec-17-3" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            3
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 17.3</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Sottoclassi di IgG (IgG1, IgG2, IgG3, IgG4): Cerniera, Emivita & Il Paradosso di IgG4
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            Nell'uomo le IgG sono suddivise in 4 sottoclassi determinate dalla sequenza costante della catena γ. Le differenze strutturali più marcate risiedono nella lunghezza e nella composizione in ponti disolfuro della <strong>regione cerniera</strong>:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-indigo-900 text-sm block">IgG1 (60-70%)</span>
              <p className="text-slate-600">Cerniera standard di 15 amminoacidi. Il prototipo dell'anticorpo: eccellente opsonizzante, potente attivatore della via classica del complemento, passa la placenta. Emivita: 21 giorni.</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-indigo-900 text-sm block">IgG2 (20-25%)</span>
              <p className="text-slate-600">Cerniera corta e rigida con 4 ponti disolfuro. Risponde selettivamente ad antigeni polisaccaridici capsulati (pneumococco). Debole attivatore del complemento, scarso passaggio placentare. Emivita: 21 giorni.</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-indigo-900 text-sm block">IgG3 (5-8%)</span>
              <p className="text-slate-600">Cerniera iper-allungata (62 amminoacidi, 11 ponti disolfuro). È il più potente attivatore di C1q e FcγR. <strong>Tuttavia</strong>, la cerniera è un bersaglio primario per le proteasi: <strong>emivita ridotta a soli 7 giorni!</strong></p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-indigo-900 text-sm block">IgG4 (~4%)</span>
              <p className="text-slate-600">Cerniera compatta. <strong>Anticorpi "anti-infiammatori"</strong>: non attivano C1q né il complemento, non inducono ADCC né fagocitosi. Legano preferenzialmente il recettore inibitorio FcγRIIB. Emivita: 21 giorni.</p>
            </div>
          </div>

          <div className="p-3 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs text-amber-900">
            <strong>Il fenomeno del Fab-Arm Exchange nelle IgG4:</strong> A causa di legami disolfuro intercatena instabili nella cerniera, le IgG4 in circolo scambiano continuamente una semi-molecola (una catena pesante + una catena leggera) con un'altra IgG4. Ne risultano anticorpi <em>funzionalmente monovalenti e bispecifici</em>, incapaci di compiere cross-linking o formare immunocomplessi precipitanti. Questo spiega la loro azione frenante naturale e il loro coinvolgimento nelle malattie fibro-infiammatorie croniche (Malattia correlata a IgG4).
          </div>

          {/* Schema Comparativo: Isotipi & Profili Effettori */}
          <ConceptMapFlow {...MAP_LEZIONE_17_ISOTYPE_EFFECTOR_COMPARISON} />
        </div>
      </section>

      {/* SOTTO-CAPITOLO 17.4 */}
      <section id="sec-17-4" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            4
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 17.4</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Neutralizzazione dell'Antigene & Applicazioni nella Sieroterapia Passiva
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            La <strong>neutralizzazione</strong> è l'unica funzione effettrice anticorpale che dipende esclusivamente dalle regioni variabili del frammento <strong>Fab</strong> e non richiede la cooperazione del frammento Fc o di cellule effettrici aggiuntive:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 block font-semibold">1. Blocco dell'Ingresso Virale</strong>
              L'anticorpo si lega con altissima affinità a proteine di superficie del virione: ad esempio, gli anticorpi anti-RBD della proteina Spike di <strong>SARS-CoV-2</strong> bloccano il legame al recettore umano <strong>ACE2</strong>; gli anticorpi anti-gp120 dell'<strong>HIV</strong> bloccano l'interazione con il <strong>CD4</strong>.
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 block font-semibold">2. Blocco della Fusione e Gemmazione</strong>
              Gli anticorpi impediscono i cambiamenti conformazionali necessari per la fusione della membrana virale con la cellula ospite (es. emoagglutinina dell'influenza) o bloccano il distacco di nuovi virioni dalla membrana cellulare.
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 block font-semibold">3. Neutralizzazione delle Tossine</strong>
              Gli anticorpi legano le esotossine batteriche secrete (tetanica, botulinica, difterica, colerica) impedendone l'ancoraggio ai recettori cellulari o ai gangliosidi neuronali, neutralizzandone istantaneamente la tossicità.
            </div>
          </div>

          <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-xl space-y-2">
            <h4 className="font-bold text-blue-950 text-sm flex items-center gap-2">
              <Syringe className="w-4 h-4 text-blue-600" /> Principio Terapeutico: Sieroterapia Passiva & Anticorpi Monoclonali
            </h4>
            <p className="text-xs text-blue-950 leading-relaxed">
              La somministrazione di siero immune o di immunoglobuline iperimmuni umane (es. <em>siero antitetanico</em> o immunoglobuline anti-rabbia) fornisce una <strong>protezione immediata ma transitoria</strong> al paziente non vaccinato esposto a ferite sporche o morsi. Durante la pandemia di COVID-19, anticorpi monoclonali umanizzati neutralizzanti anti-Spike sono stati autorizzati d'emergenza per bloccare precocemente l'interazione con ACE2 e prevenire l'ospedalizzazione.
            </p>
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 17.5 */}
      <section id="sec-17-5" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            5
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 17.5</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Recettore Neonatale FcRn (Brambell): Transcitosi, Placenta & Riciclo (Emivita di 21 Giorni)
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            Il recettore <strong>FcRn</strong> (originariamente identificato da Brambell come recettore neonatale per il passaggio delle IgG materne) è una molecola eterodimerica strutturalmente omologa alle molecole <strong>MHC di classe I</strong>, composta da una catena pesante transmembrana α associata non covalentemente alla <strong>β2-microglobulina</strong>.
          </p>

          <div className="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 space-y-3">
            <h4 className="font-bold text-emerald-900 text-sm flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-emerald-700" /> Il Ciclo Biofisico pH-Dipendente del Riciclo e Transcitosi
            </h4>
            <ol className="text-xs text-emerald-950 space-y-2 list-decimal pl-5">
              <li>
                <strong>Pinocitosi Fluida Aspecifica:</strong> Le cellule endoteliali vascolari e il sinciziotrofoblasto placentare internalizzano continuamente fluidi extracellulari contenenti proteine sieriche (albumina, IgG, transferrina).
              </li>
              <li>
                <strong>Acidificazione Endosomiale (pH &lt; 6.5):</strong> La pompa protonica vacuolare acidifica il lume dell'endosoma. A pH acido, due residui di istidina conservati all'interfaccia CH2-CH3 dell'IgG si protonano, instaurando un legame ad altissima affinità con due molecole di FcRn.
              </li>
              <li>
                <strong>Deviazione dal Catabolismo Lisosomiale:</strong> Mentre le altre proteine sieriche prive di recettore vengono convogliate ai lisosomi e degradate in amminoacidi, il complesso IgG-FcRn viene segregato in vescicole di riciclo o di transcitosi.
              </li>
              <li>
                <strong>Rilascio a pH Fisiologico Neutro (pH 7.4):</strong> Quando la vescicola si fonde con la membrana plasmatica (sul versante basolaterale del feto o nel lume capillare), l'aumento di pH a 7.4 deprotona le istidine. L'affinità di FcRn per l'IgG si annulla istantaneamente e l'anticorpo viene rilasciato intatto nel torrente circolatorio.
              </li>
            </ol>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block font-semibold mb-1">
                <Baby className="w-3.5 h-3.5 inline mr-1 text-indigo-600" /> Immunizzazione Passiva del Feto & Ipogammaglobulinemia Infantile
              </strong>
              FcRn nel sinciziotrofoblasto trasferisce le IgG materne nel sangue fetale durante il 3° trimestre. Dopo la nascita, tra il 3° e il 6° mese, le IgG materne decadono e il bambino attraversa la fisiologica <em>ipogammaglobulinemia transitoria dell'infanzia</em> prima che la sintesi endogena sia matura.
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block font-semibold mb-1">
                <ShieldCheck className="w-3.5 h-3.5 inline mr-1 text-emerald-600" /> Il Segreto della Lunga Emivita (21-28 Giorni)
              </strong>
              Il riciclo endoteliale continuo mediato da FcRn salva le IgG dal decadimento proteico standard, portando l'emivita a 3-4 settimane. Questa proprietà viene sfruttata nell'ingegneria dei farmaci biologici creando <strong>proteine di fusione Fc-fused</strong> (es. Etanercept, Epoetina-Fc).
            </div>
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 17.6 */}
      <section id="sec-17-6" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            6
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 17.6</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Attivazione del Complemento: Dominio CH2, Glicosilazione & IgM a Conformazione "a Ragno"
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            L'innesco della via classica del complemento ad opera del complesso C1 (C1qrs) richiede l'interazione specifica tra le teste globulari di <strong>C1q</strong> e il dominio <strong>CH2</strong> delle immunoglobuline:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" /> Il Ruolo Chiave della Glicosilazione in CH2
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Il residuo di asparagina 297 (Asn297) nel dominio CH2 porta una catena oligosaccaridica bivalente ramificata. Se l'anticorpo viene enzimaticamente deglicosilato, i due domini CH2 collassano l'uno sull'altro, mascherando fisicamente il sito di legame per C1q ed eliminando l'interazione con FcγR.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600" /> La Transizione Conformazionale delle IgM (Staple Form)
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                In soluzione acquosa, le <strong>IgM pentameriche</strong> adottano una <em>conformazione planare a stella</em> in cui i domini CH2 sono nascosti e non possono legare C1q. Quando i 10 Fab legano antigeni polivalenti su una parete batterica, la molecola compie una rotazione tridimensionale assumendo una <strong>conformazione "a ragno" (staple form)</strong>: i domini CH2 si proiettano verso l'esterno, esponendo un gruppo ad altissima densità che lega una singola molecola di C1q con avidità formidabile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 17.7 */}
      <section id="sec-17-7" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            7
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 17.7</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Famiglia dei Recettori FcγR (CD64, CD32a, CD32b, CD16a), ADCC & Porpora Trombocitopenica (Werlhof)
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            I recettori per il frammento Fc delle IgG (FcγR) costituiscono il fulcro della cooperazione tra umoralità e citotossicità cellulare. Si distinguono in recettori <strong>attivatori (ITAM)</strong> e un recettore <strong>inibitorio (ITIM)</strong>:
          </p>

          <div className="space-y-3">
            <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-2">
              <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700" /> FcγRI (CD64) &bull; Alta Affinità & Opsonofagocitosi
              </h4>
              <p className="text-xs text-emerald-950 leading-relaxed">
                Espresso su macrofagi, monociti e neutrofili (fortemente indotto da IFN-γ). È l'unico recettore ad altissima affinità (Ka ~ 10⁸-10⁹ M⁻¹). È associato a un omodimero di catene γ provviste di domini ITAM. Il cross-linking indotto da patogeni opsonizzati da IgG1/IgG3 scatena la fagocitosi con una potenza <strong>50-100 volte superiore</strong> alla fagocitosi aspecifica, innescando il burst ossidativo (NOX2) e la digestione fagolisosomiale.
              </p>
              <div className="p-2.5 bg-white rounded border border-emerald-200 text-xs">
                <strong>Correlazione Clinica nella ITP (Morbo di Werlhof):</strong> Autoanticorpi IgG legano le glicoproteine piastriniche GPIIb/IIIa. Le piastrine opsonizzate vengono fagocitate avidamente dai macrofagi della polpa rossa splenica dotati di FcγRI, causando trombocitopenia grave con manifestazioni emorragiche (petecchie, ecchimosi). La terapia con immunoglobuline endovena (IVIG) ad alte dosi satura competitivamente questi recettori arrestando l'emocateresi splenica.
              </div>
            </div>

            <div className="p-4 bg-indigo-50/70 rounded-xl border border-indigo-200 space-y-2">
              <h4 className="font-bold text-indigo-950 text-sm flex items-center gap-2">
                <Crosshair className="w-4 h-4 text-indigo-700" /> FcγRIIIA (CD16a) &bull; Citotossicità Cellulare Anticorpo-Dipendente (ADCC)
              </h4>
              <p className="text-xs text-indigo-950 leading-relaxed">
                Espresso prevalentemente sulle <strong>cellule Natural Killer (NK)</strong>. È associato a catene di trasduzione γ o ζ (identiche a quelle del complesso TCR/CD3) dotate di domini ITAM.
              </p>
              <p className="text-xs text-indigo-950">
                <strong>Regola Fondamentale dell'ADCC:</strong> Il bersaglio dell'ADCC <em>non è mai un patogeno isolato o un batterio</em>, bensì una <strong>cellula bersaglio intera</strong> (cellula umana infettata da virus che espone antigeni virali sulla membrana, oppure una cellula neoplastica). Il legame simultaneo di più IgG da parte di CD16a attiva la degranulazione polare diretta di <strong>perforina e granzimi</strong> con induzione di apoptosi nella cellula target.
              </p>
            </div>
          </div>
        </div>

        {/* SIMULATORE 1: LABORATORIO RECETTORI Fc */}
        <div id="sim-fc-receptors" className="p-5 sm:p-6 bg-slate-900 text-white rounded-2xl border border-indigo-500/40 shadow-lg space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-indigo-400" />
              <h3 className="font-bold text-sm sm:text-base text-indigo-200">
                Simulatore Molecolare: Interazione Immunoglobuline & Recettori Fc (FcγR, FcRn, FcεR, pIgR)
              </h3>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-900/60 text-indigo-300 font-mono text-[11px] border border-indigo-700">
              Affinità, ITAM/ITIM & Output Cellulare
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            {/* Controllo 1: Isotipo */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
              <label className="text-slate-300 font-semibold block">Classe / Sottoclasse Ig</label>
              <select
                aria-label="Classe / Sottoclasse Ig"
                value={selectedIg}
                onChange={(e) => setSelectedIg(e.target.value as any)}
                className="w-full bg-slate-950 text-white border border-slate-600 rounded-lg p-1.5 text-xs focus:ring-1 focus:ring-indigo-400"
              >
                <option value="igg1">IgG1 (Canonica, 65%)</option>
                <option value="igg2">IgG2 (Antipolisaccaridica)</option>
                <option value="igg3">IgG3 (Cerniera Lunga, Emivita 7gg)</option>
                <option value="igg4">IgG4 (Antinfiammatoria)</option>
                <option value="iga_dimer">IgA Dimerica (+ Catena J)</option>
                <option value="igm_pentamer">IgM Pentamerica (+ Catena J)</option>
                <option value="ige">IgE (Monomerica, Ipersensibilità)</option>
              </select>
            </div>

            {/* Controllo 2: Stato Complesso */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
              <label className="text-slate-300 font-semibold block">Conformazione / Reticolo</label>
              <select
                aria-label="Conformazione / Reticolo"
                value={complexState}
                onChange={(e) => setComplexState(e.target.value as any)}
                className="w-full bg-slate-950 text-white border border-slate-600 rounded-lg p-1.5 text-xs focus:ring-1 focus:ring-indigo-400"
              >
                <option value="immune_complex">Immunocomplesso Multivalente (Cross-linking)</option>
                <option value="monomer">Monomero Libero Solubile (No aggregazione)</option>
              </select>
            </div>

            {/* Controllo 3: Tipo Cellulare */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
              <label className="text-slate-300 font-semibold block">Cellula Effettrice Bersaglio</label>
              <select
                aria-label="Cellula Effettrice Bersaglio"
                value={cellTarget}
                onChange={(e) => setCellTarget(e.target.value as any)}
                className="w-full bg-slate-950 text-white border border-slate-600 rounded-lg p-1.5 text-xs focus:ring-1 focus:ring-indigo-400"
              >
                <option value="macrophage">Macrofago / Monocita (FcγRI / FcγRIIA)</option>
                <option value="nk_cell">Cellula Natural Killer (FcγRIIIA / CD16a)</option>
                <option value="b_cell">Linfocita B (FcγRIIB Inibitorio / ITIM)</option>
                <option value="endothelium">Endotelio / Placenta (FcRn / Brambell)</option>
                <option value="mastocyte">Mastocita / Basofilo (FcεRI)</option>
                <option value="enterocyte">Enterocita Mucosale (pIgR)</option>
              </select>
            </div>

            {/* Controllo 4: Fucosilazione */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
              <label className="text-slate-300 font-semibold block">Glicosilazione CH2 (Asn297)</label>
              <select
                aria-label="Glicosilazione CH2 (Asn297)"
                value={fucosylation}
                onChange={(e) => setFucosylation(e.target.value as any)}
                disabled={cellTarget !== 'nk_cell'}
                className="w-full bg-slate-950 text-white border border-slate-600 rounded-lg p-1.5 text-xs focus:ring-1 focus:ring-indigo-400 disabled:opacity-50"
              >
                <option value="normal_fucosylated">Normofucosilata (+ Fucosio)</option>
                <option value="afucosylated">Afucosilata (Iper-affinità per CD16)</option>
              </select>
              <p className="text-[10px] text-slate-400">Rilevante per ADCC delle cellule NK.</p>
            </div>
          </div>

          {/* Scheda di output della simulazione molecolare */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 border-b border-slate-800 pb-3">
              <div>
                <span className="text-slate-400 font-mono text-[10px] uppercase block">Recettore Ingaggiato</span>
                <strong className="text-indigo-300 text-xs">{engagedReceptor}</strong>
              </div>
              <div>
                <span className="text-slate-400 font-mono text-[10px] uppercase block">Affinità di Legame</span>
                <strong className="text-white text-xs">{bindingAffinity}</strong>
              </div>
              <div>
                <span className="text-slate-400 font-mono text-[10px] uppercase block">Cascata di Segnalazione</span>
                <strong className="text-slate-200 text-xs">{signalingMechanism}</strong>
              </div>
            </div>

            <div className={`p-3 rounded-lg border text-xs leading-relaxed ${statusBannerColor}`}>
              <strong className="block mb-0.5">Esito Biologico Risultante:</strong>
              {biologicalOutcome}
            </div>
          </div>
        </div>

        {/* Mappa Concettuale della Cascata di Attivazione dei Recettori Fc */}
        <ConceptMapFlow {...MAP_LEZIONE_17_FC_RECEPTORS_CASCADE} />
      </section>

      {/* SOTTO-CAPITOLO 17.8 */}
      <section id="sec-17-8" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            8
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 17.8</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Glicosilazione & Fucosilazione del Frammento Fc in COVID-19 Severo
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            La glicosilazione delle immunoglobuline non è un dettaglio accessorio, ma un <strong>interruttore funzionale</strong> che governa la qualità della risposta effettrice. Le modificazioni post-traduzionali avvengono nel reticolo endoplasmatico e apparato di Golgi della plasmacellula prima della secrezione:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Dna className="w-4 h-4 text-emerald-600" /> Il Fenomeno della Fucosilazione
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                In condizioni fisiologiche, oltre il 90-95% delle IgG circolanti possiede un residuo di <strong>core-fucosio</strong> sull'oligosaccaride legato ad Asn297. Questo residuo crea un lieve ingombro sterico con il residuo di carboidrato presente sulla superficie di FcγRIIIA (CD16a). Quando il fucosio è assente (<strong>IgG afucosilate</strong>), il frammento Fc si adatta con precisione micromolecolare nella tasca recettoriale di CD16a, incrementando l'affinità fino a 100 volte.
              </p>
            </div>

            <div className="p-4 bg-rose-50/70 rounded-xl border border-rose-200 space-y-2">
              <h4 className="font-bold text-rose-950 text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600" /> La Scoperta Clinica in Pazienti con COVID-19 Grave
              </h4>
              <p className="text-xs text-rose-950 leading-relaxed">
                È stato documentato che i pazienti ospedalizzati con forme severe e letali di <strong>COVID-19</strong> presentavano un titolo insolitamente elevato di anticorpi anti-Spike <strong>iper-afucosilati</strong> rispetto ai soggetti vaccinati o paucisintomatici. Questi anticorpi afucosilati iper-attivano i macrofagi alveolari e le cellule NK polmonari via CD16a, scatenando una colossale produzione di citochine pro-infiammatorie (IL-6, TNF-α, IL-1β) e contribuendo all'ARDS e alla tempesta citochinica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 17.9 */}
      <section id="sec-17-9" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            9
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 17.9</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Immunità Mucosale & IgA: Dimero, pIgR, Componente Secretoria & Crescita Incatenata
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            Le <strong>Immunoglobuline A (IgA)</strong> costituiscono l'isotipo quantitativamente dominante dell'organismo umano: ogni giorno le plasmacellule della lamina propria mucosale ne producono più di <strong>50 mg per kg di peso corporeo</strong> (oltre 3-5 grammi al dì), superando la sintesi di tutti gli altri isotipi messi assieme!
          </p>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-600" /> Il Ciclo di Transcitosi di pIgR & La Componente Secretoria
            </h4>
            <div className="space-y-2 text-xs text-slate-700">
              <p>
                Nelle mucose (tratto gastrointestinale, respiratorio, genitourinario, ghiandole mammarie e salivari), le plasmacellule secernono le IgA sotto forma di <strong>dimeri</strong>, uniti tramite ponti disolfuro da un piccolo polipeptide accessorio: la <strong>Catena J (Joining Chain)</strong>.
              </p>
              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-semibold">1. Riconoscimento Basolaterale da pIgR</strong>
                Il dimero di IgA lega con alta affinità il <em>Polymeric Immunoglobulin Receptor (pIgR)</em> espresso sulla membrana basolaterale delle cellule epiteliali di rivestimento (enterociti).
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-semibold">2. Transcitosi Vescicolare e Clivaggio</strong>
                Il complesso viene internalizzato per endocitosi e trasportato attraverso la cellula fino al versante apicale. Qui una specifica endoproteasi taglia il recettore pIgR: il dominio extracellulare rimane irreversibilmente avvolto attorno al dimero di IgA costituendo la <strong>Componente Secretoria (SC)</strong>.
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-semibold">3. Funzione della Componente Secretoria (sIgA)</strong>
                La componente secretoria maschera i siti vulnerabili dell'IgA proteggendola dalla digestione enzimatica da parte delle proteasi luminali (pepsina, tripsina, enzimi batterici) e ancora l'anticorpo allo strato di mucine del muco epiteliale.
              </div>
            </div>
          </div>

          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
            <h4 className="font-bold text-amber-950 text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-700" /> I 5 Meccanismi Protettivi non Infiammatori delle IgA
            </h4>
            <ul className="text-xs text-amber-950 space-y-1.5 list-disc pl-5">
              <li><strong>Esclusione Immune e Neutralizzazione:</strong> impedisce fisicamente ai patogeni e alle tossine di prendere contatto con i recettori apicali degli enterociti.</li>
              <li><strong>Crescita Incatenata (Enchained Growth):</strong> le IgA legano contemporaneamente le cellule figlie batteriche durante la divisione cellulare, impedendone la disgiunzione e formando lunghi grovigli inerti che vengono lavati via dalla peristalsi.</li>
              <li><strong>Modulazione dell'espressione flagellare:</strong> spegne la sintesi di flagellina e fattori di motilità invasiva nei bacilli patogeni.</li>
              <li><strong>Facilitazione del campionamento antigenico:</strong> complessi IgA-antigene vengono catturati dalle cellule M delle placche di Peyer per una presentazione tollerogenica non distruttiva.</li>
              <li><strong>Tethering non patogeno del microbiota:</strong> trattiene i batteri commensali all'interno della matrice del muco senza attivare cascate citotossiche o infiammatorie.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SOTTO-CAPITOLO 17.10 */}
      <section id="sec-17-10" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-150 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg">
            10
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Sezione 17.10</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Immunoglobuline E (IgE), Recettore FcεRI su Mastociti & ADCC Eosinofila contro Elminti
            </h2>
          </div>
        </div>

        <div className={`${proseSizeClass} space-y-4 text-slate-700`}>
          <p>
            Le <strong>IgE</strong> sono gli anticorpi meno abbondanti nel siero (&lt;0.05 mg/dL) e presentano un'emivita libera cortissima (circa 2 giorni). Tuttavia, esercitano un potenziale biologico e patogenetico formidabile attraverso il recettore ad altissima affinità <strong>FcεRI</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-rose-50/70 rounded-xl border border-rose-200 space-y-2">
              <h4 className="font-bold text-rose-950 text-sm flex items-center gap-2">
                <Flame className="w-4 h-4 text-rose-600" /> Il Recettore FcεRI & La Reazione Anafilattica Immediata
              </h4>
              <p className="text-xs text-rose-950 leading-relaxed">
                FcεRI è un complesso tetramerico (αβγγ) espresso su mastociti e basofili. La catena α lega il frammento Fc dell'IgE con un'affinità quasi covalente (Kd ~ 10⁻¹⁰ M).
              </p>
              <ul className="text-xs text-rose-950 space-y-1 list-disc pl-4 pt-1">
                <li><strong>Sensibilizzazione:</strong> Le IgE monomeriche si legano a FcεRI senza scatenare alcun segnale. La cellula si "arma" stabilizzando le IgE per mesi sulla sua membrana.</li>
                <li><strong>Scatenamento da Cross-Linking:</strong> Quando lo stesso allergene multivalente rientra nell'organismo e collega contemporaneamente due molecole di IgE contigue, i domini ITAM delle catene β e γ trasducono segnali massivi di attivazione: degranulazione fulminea di <strong>istamina</strong>, proteasi e successiva sintesi di <strong>leucotrieni (LTC4, LTD4)</strong> e PAF (shock anafilattico, asma, orticaria).</li>
              </ul>
            </div>

            <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-2">
              <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-700" /> Difesa Antiparassitaria: L'ADCC degli Eosinofili contro Elminti
              </h4>
              <p className="text-xs text-emerald-950 leading-relaxed">
                Gli elminti (parassiti pluricellulari quali <em>Schistosoma</em>, <em>Ascaris</em>, nematodi) sono troppo grandi per essere fagocitati da macrofagi o neutrofili.
              </p>
              <p className="text-xs text-emerald-950">
                La risposta protettiva di tipo 2 (Th2, IL-4, IL-5) induce lo switch verso IgE. Le IgE rivestono il tegumento dell'elminte tramite i frammenti Fab. Gli <strong>eosinofili</strong> riconoscono le code Fc delle IgE tramite i propri recettori FcεRI, scatenando un rilascio extracellulare concentrato di mediatori litici: <strong>Major Basic Protein (MBP)</strong>, <strong>proteina cationica eosinofila (ECP)</strong> e perossidasi, disgregando la cuticola del parassita per citotossicità extracellulare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIMULATORE 2: ELETTROFORESI & PATOLOGIE CLINICHE */}
      <div id="sim-electrophoresis-pathology" className="p-5 sm:p-6 bg-slate-900 text-white rounded-2xl border border-indigo-500/40 shadow-lg space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-indigo-400" />
            <h3 className="font-bold text-sm sm:text-base text-indigo-200">
              Laboratorio Clinico: Elettroforesi Sieroproteica, Gammopatie & Malattie correlate ai Recettori Fc
            </h3>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-indigo-900/60 text-indigo-300 font-mono text-[11px] border border-indigo-700">
            Diagnosi Differenziale Ematologica
          </span>
        </div>

        {/* Selettore Profilo Clinico */}
        <div className="space-y-1.5">
          <label className="text-slate-300 text-xs font-semibold block">Seleziona il Quadro Elettroforetico o Clinico da Analizzare:</label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
            <button
              onClick={() => setSelectedProfile('normal')}
              className={`p-2 rounded-lg font-semibold text-center border transition-all ${
                selectedProfile === 'normal'
                  ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                  : 'bg-slate-800 hover:bg-slate-750 text-slate-300 border-slate-700'
              }`}
            >
              Fisiologico Normale
            </button>
            <button
              onClick={() => setSelectedProfile('polyclonal')}
              className={`p-2 rounded-lg font-semibold text-center border transition-all ${
                selectedProfile === 'polyclonal'
                  ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                  : 'bg-slate-800 hover:bg-slate-750 text-slate-300 border-slate-700'
              }`}
            >
              Ipergammaglob. Policlonale
            </button>
            <button
              onClick={() => setSelectedProfile('monoclonal_myeloma')}
              className={`p-2 rounded-lg font-semibold text-center border transition-all ${
                selectedProfile === 'monoclonal_myeloma'
                  ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                  : 'bg-slate-800 hover:bg-slate-750 text-slate-300 border-slate-700'
              }`}
            >
              Mieloma (Picco a Campanile)
            </button>
            <button
              onClick={() => setSelectedProfile('itp')}
              className={`p-2 rounded-lg font-semibold text-center border transition-all ${
                selectedProfile === 'itp'
                  ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                  : 'bg-slate-800 hover:bg-slate-750 text-slate-300 border-slate-700'
              }`}
            >
              ITP (Werlhof & FcγRI)
            </button>
            <button
              onClick={() => setSelectedProfile('infant_hypo')}
              className={`p-2 rounded-lg font-semibold text-center border transition-all ${
                selectedProfile === 'infant_hypo'
                  ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                  : 'bg-slate-800 hover:bg-slate-750 text-slate-300 border-slate-700'
              }`}
            >
              Ipogammaglob. Infantile
            </button>
          </div>
        </div>

        {/* Scheda del profilo selezionato */}
        <div className="bg-slate-950 p-4 sm:p-5 rounded-xl border border-slate-800 space-y-4 text-xs">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-800 pb-2">
            <h4 className="text-sm font-bold text-indigo-300">{currentProfileData.title}</h4>
            <span className="text-[11px] font-mono text-slate-400">{currentProfileData.description}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
              <span className="text-slate-400 font-mono text-[10px] uppercase block">Caratteristiche del Tracciato</span>
              <p className="text-slate-200 font-medium">{currentProfileData.curveCharacteristics}</p>
            </div>
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
              <span className="text-slate-400 font-mono text-[10px] uppercase block">Frazione Albumina</span>
              <p className="text-slate-200 font-medium">{currentProfileData.albuminLevel}</p>
            </div>
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
              <span className="text-slate-400 font-mono text-[10px] uppercase block">Frazione Gamma-Globulinica</span>
              <p className="text-slate-200 font-medium">{currentProfileData.gammaLevel}</p>
            </div>
          </div>

          <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 space-y-1">
            <span className="text-indigo-400 font-mono text-[10px] uppercase block font-semibold">Correlazione Clinico-Patologica</span>
            <p className="text-slate-300">{currentProfileData.pathologyDetails}</p>
          </div>

          {/* Test d'intervento terapeutico */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <label className="text-slate-300 font-semibold block text-xs">
              Protocollo Terapeutico / Management Clinico Consigliato:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {currentProfileData.interventions.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveClinicalIntervention(t.id)}
                  className={`p-2.5 rounded-lg text-left text-[11px] font-medium border transition-all ${
                    activeClinicalIntervention === t.id
                      ? t.isEffective
                        ? 'bg-emerald-950 border-emerald-500 text-emerald-200'
                        : 'bg-rose-950 border-rose-500 text-rose-200'
                      : 'bg-slate-900 hover:bg-slate-850 text-slate-300 border-slate-700'
                  }`}
                >
                  <div className="font-bold mb-0.5">{t.label}</div>
                </button>
              ))}
            </div>

            {activeClinicalIntervention !== 'none' && (
              <div
                className={`p-3 rounded-lg border mt-2 text-xs leading-relaxed ${
                  currentProfileData.interventions.find((t) => t.id === activeClinicalIntervention)?.isEffective
                    ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-200'
                    : 'bg-rose-950/80 border-rose-500/60 text-rose-200'
                }`}
              >
                <strong>Riscontro Clinico:</strong>{' '}
                {currentProfileData.interventions.find((t) => t.id === activeClinicalIntervention)?.outcome}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* TABELLE COMPARATIVE SINOTTICHE (17.1 & 17.2) */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-8">
        <div>
          <span className="text-xs font-mono uppercase text-indigo-700 font-semibold tracking-wider">Tabelle Sinottiche Ufficiali</span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
            Compendio della Famiglia dei Recettori Fc & Proprietà dei 5 Isotipi Anticorpali
          </h3>
        </div>

        {/* Tabella 17.1 */}
        <div className="space-y-3">
          <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-600" /> Tabella 17.1: Compendio dei Recettori Fc Umani
          </h4>
          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-mono">
                  <th className="p-3">Recettore</th>
                  <th className="p-3">Affinità per Ig</th>
                  <th className="p-3">Catene & Motivi</th>
                  <th className="p-3">Distribuzione Cellulare</th>
                  <th className="p-3">Funzioni Biologiche Primarie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">FcγRI (CD64)</td>
                  <td className="p-3 font-mono">Alta (Ka ~ 10⁸-10⁹ M⁻¹)<br />Lega IgG1, IgG3</td>
                  <td className="p-3">Catena α + Omodimero γ-γ (ITAM)</td>
                  <td className="p-3">Macrofagi, Monociti, Neutrofili (indotto da IFN-γ), DC</td>
                  <td className="p-3">Opsonofagocitosi potenziata 50-100x, burst ossidativo NOX2, distruzione piastrine in ITP (Werlhof)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">FcγRIIA (CD32a)</td>
                  <td className="p-3 font-mono">Bassa<br />Lega complessi IgG1, IgG3</td>
                  <td className="p-3">Singola catena con ITAM intrinseco</td>
                  <td className="p-3">Macrofagi, Neutrofili, DC, Piastrine</td>
                  <td className="p-3">Uptake di immunocomplessi nelle DC, attivazione pro-trombotica nelle piastrine (HIT)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">FcγRIIB (CD32b)</td>
                  <td className="p-3 font-mono">Bassa<br />Lega tutte le sottoclassi (IgG1-4)</td>
                  <td className="p-3">Singola catena con ITIM intrinseco</td>
                  <td className="p-3">Linfociti B, Monociti, DC, Basofili, Mastociti (assente su NK)</td>
                  <td className="p-3">Feedback negativo anticorpale: reclutamento fosfatasi SHIP-1, idrolisi PIP3 &rarr; arresto proliferazione B</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">FcγRIIIA (CD16a)</td>
                  <td className="p-3 font-mono">Bassa/Moderata (Altissima se IgG afucosilata)</td>
                  <td className="p-3">Catena α + Omodimero γ-γ o ζ-ζ (ITAM)</td>
                  <td className="p-3">Cellule Natural Killer (NK), Macrofagi, Monociti</td>
                  <td className="p-3">Citotossicità Cellulare Anticorpo-Dipendente (ADCC): rilascio di perforina/granzimi contro cellule opsonizzate</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">FcRn (Brambell)</td>
                  <td className="p-3 font-mono">pH-dipendente (Alta a pH &lt;6.5, nulla a pH 7.4)</td>
                  <td className="p-3">MHC classe I-like (catena α + β2-microglobulina)</td>
                  <td className="p-3">Sinciziotrofoblasto placentare, Endoteli vascolari sistemici</td>
                  <td className="p-3">Trasferimento transplacentare delle IgG materne al feto; riciclo e salvataggio dal catabolismo (emivita 21 gg)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">FcεRI</td>
                  <td className="p-3 font-mono">Altissima (Kd ~ 10⁻¹⁰ M)<br />Lega monomeri di IgE</td>
                  <td className="p-3">Tetramero αβγγ (ITAM amplificato)</td>
                  <td className="p-3">Mastociti, Granulociti Basofili, Granulociti Eosinofili</td>
                  <td className="p-3">Degranulazione anafilattica da cross-linking allergico (istamina, leucotrieni); ADCC eosinofila contro elminti</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-indigo-950">pIgR</td>
                  <td className="p-3 font-mono">Alta specificità per complessi con Catena J</td>
                  <td className="p-3">Recettore transmembrana clivato a Componente Secretoria</td>
                  <td className="p-3">Membrana basolaterale delle cellule epiteliali mucosali</td>
                  <td className="p-3">Transcitosi luminale dei dimeri di IgA e pentameri di IgM; formazione di sIgA protetta dalle proteasi e legata al muco</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabella 17.2 */}
        <div className="space-y-3">
          <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" /> Tabella 17.2: Quadro Comparativo dei 5 Isotipi e delle 4 Sottoclassi di IgG
          </h4>
          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-mono">
                  <th className="p-3">Isotipo</th>
                  <th className="p-3">Struttura / Polimeria</th>
                  <th className="p-3">Conc. Sierica</th>
                  <th className="p-3">Emivita</th>
                  <th className="p-3">Placenta (FcRn)</th>
                  <th className="p-3">Complemento (C1q)</th>
                  <th className="p-3">Opsonizzazione (FcγR)</th>
                  <th className="p-3">Neutralizzazione</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">IgG1</td>
                  <td className="p-3">Monomero (cerniera 15 aa)</td>
                  <td className="p-3">9 mg/mL</td>
                  <td className="p-3">21 giorni</td>
                  <td className="p-3 text-emerald-700 font-bold">+++</td>
                  <td className="p-3 text-emerald-700 font-bold">++</td>
                  <td className="p-3 text-emerald-700 font-bold">+++</td>
                  <td className="p-3 font-semibold">+++</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">IgG2</td>
                  <td className="p-3">Monomero (cerniera corta, 4 -S-S-)</td>
                  <td className="p-3">3 mg/mL</td>
                  <td className="p-3">21 giorni</td>
                  <td className="p-3 text-slate-500">+</td>
                  <td className="p-3 text-slate-500">+</td>
                  <td className="p-3 text-slate-400">+/-</td>
                  <td className="p-3 font-semibold">++</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">IgG3</td>
                  <td className="p-3">Monomero (cerniera estesa 62 aa, 11 -S-S-)</td>
                  <td className="p-3">1 mg/mL</td>
                  <td className="p-3 text-rose-700 font-bold">7 giorni (proteolisi)</td>
                  <td className="p-3 text-emerald-700 font-bold">++</td>
                  <td className="p-3 text-indigo-700 font-bold">++++ (Massima)</td>
                  <td className="p-3 text-emerald-700 font-bold">+++</td>
                  <td className="p-3 font-semibold">+++</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">IgG4</td>
                  <td className="p-3">Monomero (Fab-arm exchange bispecifico)</td>
                  <td className="p-3">0.5 mg/mL</td>
                  <td className="p-3">21 giorni</td>
                  <td className="p-3 text-slate-500">+</td>
                  <td className="p-3 text-rose-600 font-bold">- (Inattiva)</td>
                  <td className="p-3 text-slate-500">- (Predilige FcγRIIB)</td>
                  <td className="p-3 font-semibold">+++</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">IgA (sIgA)</td>
                  <td className="p-3">Dimero con Catena J e Componente Secretoria</td>
                  <td className="p-3">2 mg/mL (siero) / &gt;50 mg/kg/die</td>
                  <td className="p-3">5-6 giorni</td>
                  <td className="p-3 text-rose-600">-</td>
                  <td className="p-3 text-slate-400">- / Debole via lectinica</td>
                  <td className="p-3">Via FcαRI (CD89)</td>
                  <td className="p-3 font-bold text-emerald-700">++++ (Mucosa)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">IgM</td>
                  <td className="p-3">Pentamero con Catena J (900 kDa, 10 paratopi)</td>
                  <td className="p-3">1.5 mg/mL</td>
                  <td className="p-3">5 giorni</td>
                  <td className="p-3 text-rose-600">-</td>
                  <td className="p-3 text-indigo-700 font-bold">++++ (Staple)</td>
                  <td className="p-3 text-slate-400">-</td>
                  <td className="p-3 font-semibold">++</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">IgE</td>
                  <td className="p-3">Monomero (4 domini CH, CH1-CH4)</td>
                  <td className="p-3">0.00005 mg/mL</td>
                  <td className="p-3">2 giorni (mesi su FcεRI)</td>
                  <td className="p-3 text-rose-600">-</td>
                  <td className="p-3 text-rose-600">-</td>
                  <td className="p-3 text-rose-700 font-bold">FcεRI (Mastociti/Eosinofili)</td>
                  <td className="p-3 text-slate-400">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

            {/* VERIFICA DELL'APPRENDIMENTO (QUIZ) */}
      <QuizSection customQuestions={quizQuestions} lessonNumber={17} title="Verifica dell'Apprendimento · Lezione 17" />

      {/* FLASHCARDS DI RIPASSO ATTIVO */}
      <FlashcardDeck cards={flashcards} lessonNumber={17} title="Flashcard di Ripasso Attivo · Lezione 17" />
    </div>
  );
};
