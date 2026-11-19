/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CAPITOLO VII MASTER VIEW: IMMUNOLOGIA DEI TRAPIANTI, MECCANISMI DI TOLLERANZA
 * CENTRALE E PERIFERICA E PATOGENESI DELLE MALATTIE AUTOIMMUNI
 * 
 * Trattato accademico continuo a pagina unica privo di discontinuità d'aula.
 * Unifica integralmente tutti i contenuti, le tabelle e i simulatori di:
 * - Lezione 29: Immunologia dei Trapianti & HSCT (Alloriconoscimento, GVHD, Cellule NK & Immunosoppressione)
 * - Lezione 30: Tolleranza Centrale & Periferica, Sindromi Monogeniche (APS-1, IPEX, ALPS) & Predisposizione HLA
 * - Lezione 31: Malattie Autoimmuni Sistemiche e d'Organo (LES, Diabete Tipo 1, SM, AR & Dimorfismo lncRNA Xist)
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  ShieldAlert,
  Layers,
  Activity,
  Shield,
  Zap,
  Target,
  Sparkles,
  Info,
  ChevronRight,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Microscope,
  Stethoscope,
  Pill,
  Clock,
  Compass,
  Radio,
  Dna,
  Heart,
  Scale,
  Users,
  Baby,
  Sun,
  Flame,
  Droplets,
  RotateCw,
  Sliders,
  Check,
  CheckCircle,
  HelpCircle,
  Syringe,
  Bug,
  Thermometer,
  FileText,
  BookmarkCheck,
  Split,
  Eye,
  SlidersHorizontal,
  Crosshair
} from 'lucide-react';

// Quiz & Flashcards
import { ALL_EXAM_QUESTIONS } from '../../data/examQuestions';
import { QuizSection } from '../QuizSection';
import { FlashcardDeck } from '../FlashcardDeck';

interface Chapter7MasterViewProps {
  isSerif?: boolean;
  fontSize?: 'normal' | 'large';
  initialSection?: string;
  onNavigateSection?: (sectionId: string) => void;
}

export const Chapter7MasterView: React.FC<Chapter7MasterViewProps> = ({
  isSerif = false,
  fontSize = 'normal',
  initialSection
}) => {
  const proseFontClass = isSerif ? 'font-serif' : 'font-sans';
  const proseSizeClass = fontSize === 'large' ? 'text-base leading-relaxed' : 'text-sm leading-relaxed';

  // Domande d'esame filtrate per le lezioni del Capitolo 7 (29, 30, 31)
  const chapter7Questions = useMemo(() => {
    return ALL_EXAM_QUESTIONS.filter((q) => [29, 30, 31].includes(q.lessonNumber));
  }, []);

  // Flashcards cumulate del Capitolo 7 ad altissima resa didattica
  const chapter7Flashcards = useMemo(() => {
    return [
      {
        id: 'fc-c7-01',
        category: 'Trapianti - Alloriconoscimento',
        front: 'Qual è la differenza biologica ed effettrice fondamentale tra la via diretta e la via indiretta di alloriconoscimento?',
        back: 'Nella via DIRETTA, i linfociti T del ricevente (CD4⁺ e CD8⁺) riconoscono l\'MHC allogenico intatto espresso sulle cellule dendritiche passeggere del donatore; ha un\'altissima frequenza clonale (1–10%) e guida il rigetto acuto cellulare. Nella via INDIRETTA, le DC del ricevente captano l\'MHC allogenico del donatore, lo processano e presentano peptidi allogenici su MHC-II self: è l\'unica via che fornisce l\'aiuto Tfh/Th1 cognato ai linfociti B per produrre alloanticorpi donor-specifici (DSA), guidando il rigetto umorale e il rigetto cronico.'
      },
      {
        id: 'fc-c7-02',
        category: 'Trapianti - Diagnostica',
        front: 'Qual è il marcatore bioptico patognomonico del rigetto acuto umorale (ABMR) nel trapianto renale?',
        back: 'La deposizione lineare covalente del frammento C4d lungo la membrana basale dei capillari peritubulari all\'immunofluorescenza. C4d deriva dall\'attivazione della via classica del complemento innescata dal legame degli alloanticorpi donor-specifici (DSA) all\'endotelio e, possedendo un legame tioestere covalente stabile, rimane ancorato ai tessuti come testimonianza indelebile dell\'attacco umorale.'
      },
      {
        id: 'fc-c7-03',
        category: 'HSCT - Ematologia',
        front: 'Cosa differenzia la Malattia del Trapianto contro l\'Ospite (GVHD) dall\'effetto Graft-versus-Leukemia (GvL)?',
        back: 'Nella GVHD, i linfociti T maturi immunocompetenti del donatore riconoscono come estranei i tessuti del ricevente immunodepresso, scatenando flogosi distruttiva sulla triade Cute (rash/eritrodermia), Fegato (colestasi/ittero) e Intestino (diarrea secretoria ematica). Nel GvL, gli stessi linfociti T del donatore (unitamente alle cellule NK con mismatch KIR nel trapianto aploidentico) pattugliano il midollo ed eliminano selettivamente i blasti leucemici residui del ricevente, prevenendo la recidiva tumorale.'
      },
      {
        id: 'fc-c7-04',
        category: 'Tolleranza - Centrale',
        front: 'Qual è la funzione molecolare di AIRE nelle mTEC e cosa provoca la sua mutazione inattivante?',
        back: 'AIRE (AutoImmune REgulator) funge da modulatore epigenetico nelle cellule epiteliali timiche midollari (mTEC), guidando l\'espressione genica promiscua ectopica di migliaia di antigeni tessuto-ristretti periferici (TRA: insulina, tireoglobulina, MBP). Ciò permette la selezione negativa dei timociti autoreattivi. La mutazione autosomica recessiva causa la sindrome APS-1 (APECED), caratterizzata da candidosi mucocutanea cronica (auto-anticorpi anti-IL-17/IL-22), ipoparatiroidismo e morbo di Addison.'
      },
      {
        id: 'fc-c7-05',
        category: 'Tolleranza - Treg',
        front: 'Quali sono i meccanismi biochimici mediante cui i linfociti Treg FoxP3⁺ sopprimono la risposta immunitaria?',
        back: '1) Spugna metabolica citochinica: l\'iperespressione costitutiva di CD25 (catena α ad alta affinità di IL-2R) sottrae IL-2 dal microambiente, inducendo morte per privazione citochinica dei linfociti T responder; 2) Secrezione di citochine immunosoppressive: TGF-β, IL-10 e IL-35; 3) Disattivazione delle APC: CTLA-4 ad alta affinità rimuove CD80/CD86 dalle DC per trans-endocitosi trogocitosica; 4) Ectoenzimi CD39/CD73: idrolizzano ATP/ADP extracellulare pro-infiammatorio convertendolo in adenosina immunosoppressiva.'
      },
      {
        id: 'fc-c7-06',
        category: 'Tolleranza - Monogeniche',
        front: 'Quali sono i difetti molecolari e i fenotipi clinici cardinali della sindrome IPEX e della sindrome ALPS?',
        back: 'IPEX è causata da mutazioni X-linked recessive di FOXP3 con totale assenza di linfociti Treg funzionali: si manifesta precocemente nel neonato maschio con triade enteropatia autoimmune grave (diarrea intrattabile), diabete mellito tipo 1 neonatale ed eczema esteso. ALPS (sindrome di Canale-Smith) è dovuta a mutazioni eterozigoti nei geni dell\'apoptosi AICD periferica (FAS/CD95, FASLG o CASP10): causa linfoadenopatia cronica non maligna, splenomegalia, citopenie autoimmuni e accumulo patognomonico di linfociti T TCRαβ⁺ doppi negativi CD4⁻CD8⁻.'
      },
      {
        id: 'fc-c7-07',
        category: 'Autoimmunità - Dimorfismo',
        front: 'In che modo la recente scoperta sul long non-coding RNA Xist spiega la spiccata prevalenza femminile delle malattie autoimmuni?',
        back: 'Nelle femmine (XX), il trascritto lncRNA Xist viene espresso fisiologicamente per silenziare per eterocromatinizzazione uno dei due cromosomi X. Durante questo processo, Xist recluta oltre 80 diverse ribonucleoproteine nucleari self (tra cui Ro/SSA, La/SSB, Sm e RNP). Alla morte cellulare (apoptosi difettosa o NETosi), questo macro-complesso Xist-RNP viene rilasciato agendo da potente immunogeno polivalente che stimola TLR7/TLR9, spiegando la prevalenza femminile 9:1 nel LES e nella sindrome di Sjögren.'
      },
      {
        id: 'fc-c7-08',
        category: 'Autoimmunità - Genetica HLA',
        front: 'Perché l\'allele HLA-B27 conferisce un Odds Ratio di ~90-100 per la Spondilite Anchilosante?',
        back: 'A causa delle proprietà biochimiche intrinseche della sua catena pesante: la catena HLA-B27 possiede una lenta cinetica di ripiegamento nel reticolo endoplasmatico con tendenza a formare omodimeri aberranti legati da ponti disolfuro. Questo accumulo innesca lo stress cellulare UPR (Unfolded Protein Response), che attiva la produzione massiva della citochina IL-23 da parte delle cellule mieloidi, sostenendo l\'asse patogenetico osteo-articolare Th17/IL-17.'
      },
      {
        id: 'fc-c7-09',
        category: 'Autoimmunità - LES',
        front: 'Qual è il ruolo dell\'Interferon Signature di Tipo I e della citochina BAFF nella patogenesi del Lupus (LES)?',
        back: 'Nel LES, immunocomplessi formati da DNA/RNA e autoanticorpi IgG vengono internalizzati dalle cellule dendritiche plasmacitoidi (pDC) via FcγRIIA, attivando i recettori endosomiali TLR7 (RNA) e TLR9 (DNA). Le pDC secernono quantità massive di IFN-α (firma genica dell\'interferone), che attiva i monociti a secernere BAFF (BLyS). BAFF promuove la sopravvivenza, maturazione e produzione anticorpale dei linfociti B autoreattivi, bersaglio del farmaco biologico Belimumab.'
      },
      {
        id: 'fc-c7-10',
        category: 'Autoimmunità - Artrite Reumatoide',
        front: 'Cosa differenzia il Fattore Reumatoide (FR) dagli anticorpi ACPA e come si forma il panno sinoviale erosivo nell\'AR?',
        back: 'Il Fattore Reumatoide è un autoanticorpo (solitamente IgM) diretto contro il frammento Fc delle IgG umane; è sensibile ma poco specifico. Gli ACPA (anti-proteine citrullinate / anti-CCP) riconoscono peptidi in cui l\'arginina è stata deiminata in citrullina dall\'enzima PAD (favorito dal fumo), e possiedono una specificità >95%. Nella sinovia, Th17 e Th1 secernono IL-17, TNF-α e IL-6 stimolando i fibroblasti sinoviali (FLS) a iperproliferare (panno sinoviale) e a esprimere RANKL, che differenzia i precursori mieloidi in osteoclasti erodendo la cartilagine e l\'osso subcondrale.'
      },
      {
        id: 'fc-c7-11',
        category: 'Autoimmunità - Sclerosi Multipla',
        front: 'Qual è il meccanismo d\'azione di Natalizumab nella Sclerosi Multipla e quale complicanza letale può provocare?',
        back: 'Natalizumab è un anticorpo monoclonale umanizzato anti-integrina α4 (VLA-4 / α4β1). Blocca l\'interazione tra VLA-4 espressa sui linfociti T effettori autoreattivi Th1/Th17 e VCAM-1 sull\'endotelio della Barriera Emato-Encefalica (BBB), impedendone l\'extravaso nel SNC. Tuttavia, l\'azzeramento della sorveglianza immunitaria nel cervello può consentire la riattivazione del virus JC opportunista latente negli oligodendrociti, causando la temibile Leucoencefalopatia Multifocale Progressiva (PML).'
      },
      {
        id: 'fc-c7-12',
        category: 'Autoimmunità - Diabete Tipo 1',
        front: 'Quali sono i 4 autoanticorpi predittivi nel Diabete di Tipo 1 e perché il danno alle cellule β è prettamente cellulare?',
        back: 'I 4 autoanticorpi predittivi sono: IAA (anti-insulina), GAD65 (anti-acido glutammico decarbossilasi), IA-2 (anti-tirosina fosfatasi) e ZnT8 (anti-trasportatore dello zinco). Non sono essi a distruggere il pancreas, ma fungono da eccezionali biomarcatori predittivi. La lisi citotossica irreversibile delle cellule β produttrici di insulina nelle isole di Langerhans è eseguita direttamente da CTL CD8⁺ autoreattivi via perforina/granzimi e FasL, coadiuvati dall\'infiammazione Th1 (IFN-γ, TNF-α, IL-1β).'
      }
    ];
  }, []);

  const [activeSubSection, setActiveSubSection] = useState<string>('sec-7-trapianti-alloriconoscimento');

  // --- STATI DEI SIMULATORI INTERATTIVI DEL CAPITOLO VII ---

  // Simulatore 1: Laboratorio di Compatibilità HLA d'Organo e Rigetto
  const [sim1DonorMhc, setSim1DonorMhc] = useState<'identical' | 'mismatch_1_class1' | 'mismatch_class2_dr' | 'full_mismatch' | 'xenograft_pig'>('identical');
  const [sim1Crossmatch, setSim1Crossmatch] = useState<boolean>(false);
  const [sim1Therapy, setSim1Therapy] = useState<'none' | 'cni_tacrolimus' | 'belatacept' | 'triple_regimen'>('triple_regimen');

  // Simulatore 2: HSCT, Alloreattività NK e Mismatch KIR-HLA
  const [sim2TransplantType, setSim2TransplantType] = useState<'hla_matched' | 'haplo_perugia' | 't_depleted'>('haplo_perugia');
  const [sim2KirMismatch, setSim2KirMismatch] = useState<boolean>(true);
  const [sim2Conditioning, setSim2Conditioning] = useState<'myeloablative' | 'reduced'>('myeloablative');

  // Simulatore 3: Tolleranza Centrale (AIRE) & Sindromi Monogeniche
  const [sim3Syndrome, setSim3Syndrome] = useState<'healthy' | 'aps1_aire' | 'ipex_foxp3' | 'alps_fas' | 'chai_ctla4'>('healthy');

  // Simulatore 4: Multifattorialità Autoimmune (Trigger, Fumo, PAD e Innesco)
  const [sim4HlaRisk, setSim4HlaRisk] = useState<'hla_b27' | 'shared_epitope_dr4' | 'hla_dr3_dq2' | 'neutral'>('shared_epitope_dr4');
  const [sim4Trigger, setSim4Trigger] = useState<'smoking_pad' | 'ebv_glialcam' | 'uv_netosis' | 'none'>('smoking_pad');

  const SECTIONS_NAV = [
    { id: 'sec-7-trapianti-alloriconoscimento', label: '7.1 Alloriconoscimento & Rigetto d\'Organo', icon: Heart },
    { id: 'sec-7-farmaci-trapianto-cse', label: '7.2 Farmacologia Antirigetto & HSCT (GVHD/GvL)', icon: Pill },
    { id: 'sec-7-tolleranza-monogeniche', label: '7.3 Tolleranza Centrale/Periferica & 4 Sindromi', icon: Scale },
    { id: 'sec-7-eziopatogenesi-xist', label: '7.4 Eziopatogenesi: HLA, Trigger & Complesso Xist', icon: Dna },
    { id: 'sec-7-autoimmuni-clinica', label: '7.5 Patologie: LES, AR, Sclerosi Multipla & T1D', icon: ShieldAlert },
    { id: 'sec-7-verifica', label: '7.6 Sintesi Master, Quiz d\'Esame & Flashcard', icon: CheckCircle2 }
  ];

  // ScrollSpy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (let i = SECTIONS_NAV.length - 1; i >= 0; i--) {
        const item = SECTIONS_NAV[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSubSection(item.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lastScrolledSectionRef = useRef<string | null>(null);

  // Gestione dell'ancora iniziale da routing esterno (singola esecuzione per prevenire scroll a tratti)
  useEffect(() => {
    if (initialSection && lastScrolledSectionRef.current !== initialSection) {
      lastScrolledSectionRef.current = initialSection;
      setTimeout(() => {
        const el = document.getElementById(initialSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [initialSection]);

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSubSection(id);
    }
  };

  // Calcolo esito trapianto d'organo solido (Simulatore 1)
  const sim1Outcome = useMemo(() => {
    if (sim1DonorMhc === 'xenograft_pig') {
      return {
        status: 'RIGETTO IPERACUTO XENOGENICO FULMINANTE',
        color: 'text-rose-400 bg-rose-950/80 border-rose-500',
        text: 'Legame immediato di anticorpi naturali umani preformati contro il disaccaride α-Gal (assente nell\'uomo). Fissazione istantanea del complemento, lisi endoteliale da MAC (C5b-9), necrosi ischemica e trombosi occlusiva entro pochi minuti sul tavolo operatorio.'
      };
    }
    if (sim1Crossmatch) {
      return {
        status: 'RIGETTO IPERACUTO ALLOANTICORPALE',
        color: 'text-rose-400 bg-rose-950/80 border-rose-500',
        text: 'Crossmatch sierologico positivo: presenza di anticorpi preformati donor-specifici (DSA anti-HLA o anti-AB0 da trasfusioni o gravidanze precedenti). Trombosi massiva dei capillari peritubulari prima della sintesi cutanea. Controindicazione assoluta al trapianto!'
      };
    }
    if (sim1DonorMhc === 'identical') {
      if (sim1Therapy === 'none') {
        return {
          status: 'Rigetto Cronico Lento (Mesi/Anni)',
          color: 'text-amber-400 bg-amber-950/80 border-amber-500',
          text: 'Nonostante la perfetta identità HLA, il mancato utilizzo di farmaci permette l\'innesco della via indiretta contro gli Antigeni Minori di Istocompatibilità (mHAg, es. antigene H-Y). Lenta arteriosclerosi del graft.'
        };
      }
      return {
        status: 'Attecchimento Eccellente e Tolleranza Funzionale',
        color: 'text-emerald-400 bg-emerald-950/80 border-emerald-500',
        text: 'Zero mismatch HLA. Con la triplice terapia o con Belatacept la sopravvivenza del trapianto a 10 anni supera il 90-95% con minima fibrosi interstiziale.'
      };
    }
    if (sim1DonorMhc === 'mismatch_class2_dr') {
      if (sim1Therapy === 'none') {
        return {
          status: 'RIGETTO ACUTO CELLULARE GRAVE (1-2 Settimane)',
          color: 'text-rose-400 bg-rose-950/80 border-rose-500',
          text: 'Il mismatch di Classe II (HLA-DR/DQ) attiva precocemente i cloni Th1 alloreattivi ad alta frequenza (1-10%), i quali forniscono aiuto massiccio ai CTL CD8⁺ e ai linfociti B per i DSA (C4d⁺).'
        };
      }
      return {
        status: 'Rischio di Rigetto Acuto Controllato farmacologicamente',
        color: 'text-blue-400 bg-blue-950/80 border-blue-500',
        text: 'Il mismatch di classe II è controllato dalla triplice terapia (Tacrolimus + MMF + Steroidi), ma richiede monitoraggio stretto dei DSA e del C4d per prevenire vasculopatia cronica.'
      };
    }
    return {
      status: 'Alto Rischio di Rigetto Acuto e Cronico',
      color: 'text-amber-400 bg-amber-950/80 border-amber-500',
      text: 'Mismatch HLA multiplo: richiede terapia di induzione biologica (Basiliximab o ATG) e dosaggi pieni di inibitori della calcineurina per contenere l\'infiltrazione T tubulare ed endoteliale.'
    };
  }, [sim1DonorMhc, sim1Crossmatch, sim1Therapy]);

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 ${proseFontClass} pb-24 transition-colors duration-200`}>
      
      {/* =========================================================================
          TESTATA MONUMENTALE CAPITOLO VII
          ========================================================================= */}
      <header className="relative bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 text-white border-b border-purple-800/40 py-12 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-purple-500/20 text-purple-300 border border-purple-400/40">
              Trattato Accademico Ufficiale • Capitolo VII
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700">
              Lezioni 29, 30 e 31 Integrate
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-900/40 text-indigo-200 border border-indigo-700/50">
              Cattedre: Prof.ssa Alessandra Soriani • Prof.ssa Ricciarda Galandrini
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Immunologia dei Trapianti, Tolleranza Centrale/Periferica & Malattie Autoimmuni
            </h1>
            <p className="text-base sm:text-lg text-purple-100/90 max-w-4xl leading-relaxed">
              Dalle leggi di Snell e le vie di alloriconoscimento (diretta, indiretta, semidiretta) 
              alla chimica dell'immunosoppressione (Tacrolimus, Belatacept, MMF) e le peculiarità dell'HSCT 
              (GVHD vs GvL, mismatch KIR delle cellule NK). Dalla tolleranza timica AIRE-mediata e le 4 sindromi 
              monogeniche (APS-1, IPEX, ALPS, CHAI) alle basi multifattoriali dell'autoimmunità, con la scoperta 
              del macro-complesso ribonucleoproteico lncRNA <em>Xist</em> nel dimorfismo di genere e la fisiopatologia 
              di LES, Artrite Reumatoide, Sclerosi Multipla e Diabete di Tipo 1.
            </p>
          </div>

          {/* KPI del Capitolo */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-purple-800/30 text-xs font-mono">
            <div className="bg-slate-900/60 p-3 rounded-xl border border-purple-800/30">
              <span className="text-purple-400 block font-semibold">Frequenza Alloreattiva</span>
              <span className="text-white text-base font-bold">1–10% Cloni T</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-xl border border-purple-800/30">
              <span className="text-purple-400 block font-semibold">Marker ABMR Renale</span>
              <span className="text-white text-base font-bold">C4d Peritubulare</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-xl border border-purple-800/30">
              <span className="text-purple-400 block font-semibold">Dimorfismo F:M</span>
              <span className="text-white text-base font-bold">lncRNA Xist (81 RNP)</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-xl border border-purple-800/30">
              <span className="text-purple-400 block font-semibold">Rischio HLA-B27</span>
              <span className="text-white text-base font-bold">Odds Ratio ~90-100</span>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          BARRA STICKY DI NAVIGAZIONE DEL CAPITOLO (SECTIONS_NAV)
          ========================================================================= */}
      <nav aria-label="Navigazione interna capitolo 7" className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-2 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {SECTIONS_NAV.map((sec) => {
              const Icon = sec.icon;
              const isActive = activeSubSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToAnchor(sec.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? 'bg-purple-600 text-white shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-purple-600 dark:hover:text-purple-400'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`} />
                  <span>{sec.label}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500">
            <span>Docenti: Soriani / Galandrini</span>
          </div>
        </div>
      </nav>

      {/* =========================================================================
          CORPO CENTRALE DEL CAPITOLO VII (MAX-W-7XL)
          ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">

        {/* -----------------------------------------------------------------------
            SEZIONE 7.1: ALLORICONOSCIMENTO & RIGETTO D'ORGANO SOLIDO
            ----------------------------------------------------------------------- */}
        <section id="sec-7-trapianti-alloriconoscimento" className="scroll-mt-24 space-y-8">
          
          <div className="border-l-4 border-purple-600 pl-4 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400 font-bold">
              Sezione 7.1 • Dalla Lezione 29
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              Immunologia dei Trapianti: Istocompatibilità, Vie di Alloriconoscimento e Tipi di Rigetto
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Lessico dei trapianti e leggi di Snell; paradosso dell'alta frequenza alloreattiva (1–10%); via diretta, indiretta e semidiretta; rigetto iperacuto da anticorpi preformati, rigetto acuto cellulare ed umorale con marcatore C4d, e rigetto cronico con arteriosclerosi del graft.
            </p>
          </div>

          {/* LESSICO DEI TRAPIANTI E LEGGI DI SNELL */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span>Tassonomia dei Trapianti & Basi Genetiche di George Snell (Nobel 1980)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-sm block">1. Autologo (Autoinnesto)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Tessuto prelevato e reimpiantato nello <strong>stesso individuo</strong> (es. cute negli ustionati, cellule staminali emopoietiche autologhe post-chemioterapia ad alte dosi). Nessuna risposta immunitaria (attecchimento al 100%).
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-sm block">2. Singenico / Isogenico</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Trapianto tra <strong>individui geneticamente identici</strong> (gemelli monozigoti o topi dello stesso ceppo *inbred* omozigote). Piena istocompatibilità genetica; nessun rigetto immunologico.
                </p>
              </div>

              <div className="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border-2 border-purple-500 space-y-1.5">
                <span className="font-bold text-purple-700 dark:text-purple-300 font-mono text-sm block">3. Allogenico (Allotrapianto)</span>
                <p className="text-slate-700 dark:text-slate-200">
                  Trapianto tra individui geneticamente differenti della <strong>stessa specie</strong> (es. da donatore umano a ricevente umano). È la condizione clinica standard: le molecole <strong>MHC non-self (allogeniche)</strong> innescano una potente risposta alloreattiva con rischio di rigetto.
                </p>
              </div>

              <div className="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-300 dark:border-rose-900 space-y-1.5">
                <span className="font-bold text-rose-700 dark:text-rose-300 font-mono text-sm block">4. Xenogenico (Xenoinnesto)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Trapianto tra individui di <strong>specie biologiche differenti</strong> (es. rene o cuore di maiale transgenico in ricevente umano). Barriera costituita da anticorpi naturali umani contro l'epitopo glicidico <strong>α-Gal (galattosio-α-1,3-galattosio)</strong>.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border-l-4 border-purple-600 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <p>
                <strong>Le Leggi Genetiche dei Trapianti di George Snell:</strong>
              </p>
              <ul className="space-y-1 list-disc list-inside text-xs text-slate-600 dark:text-slate-400">
                <li>Innesti tra membri dello stesso ceppo inbred (ceppo A → ceppo A) attecchiscono sempre.</li>
                <li>Innesti tra ceppi inbred differenti (ceppo A → ceppo B) vengono rigettati con cinetica immunologica specifica.</li>
                <li>Gli ibridi F1 generati dall'incrocio tra due ceppi inbred (A × B → F1[A/B]) esprimono in modo <strong>codominante</strong> entrambi gli aplotipi MHC genitoriali: pertanto un ibrido F1 accetta sempre innesti da ciascuno dei genitori (sia da A sia da B), mentre <strong>nessuno dei due genitori puri può accettare un innesto dall'ibrido F1</strong>, poiché l'MHC dell'altro genitore viene riconosciuto come non-self e rigettato!</li>
              </ul>
            </div>
          </div>

          {/* PERCHÉ L'1-10% DEI LINFOCITI T RISPONDE AGLI ALLOANTIGENI */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              <span>Il Paradosso Molecolare dell'Alloreattività: Come mai l'1–10% dell'Intero Repertorio T Risponde al Graft?</span>
            </h3>
            <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
              Contro un normale antigene microbico esogeno (es. proteina virale), la frequenza dei cloni T specifici nel repertorio vergine dell'individuo è di appena <strong>1 cellula su 100.000 – 1.000.000 (10⁻⁵ – 10⁻⁶)</strong>. Nel trapianto allogenico, invece, una proporzione sbalorditiva pari all'<strong>1–10% di tutti i linfociti T circolanti</strong> si attiva simultaneamente e violentemente contro l'MHC del donatore!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-purple-600 dark:text-purple-400 font-mono block">Modello 1: Alta Densità dei Determinanti di Superficie</span>
                <p className="text-slate-600 dark:text-slate-300">
                  L'elica α polimorfa dell'MHC allogenico presenta differenze amminoacidiche superficiali che sporgono verso il TCR. Poiché sulla superficie di una singola cellula dendritica del donatore sono espresse decine di migliaia di molecole MHC allogeniche identiche, la densità del determinante estraneo è di molti ordini di grandezza superiore a quella di un singolo complesso MHC-peptide microbico convenzionale.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-indigo-600 dark:text-indigo-400 font-mono block">Modello 2: Molteplicità Peptidica del Donatore (Cross-Reattività)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  L'MHC allogenico è caricato con migliaia di peptidi self endogeni differenti del donatore. Molti di questi complessi allogenici assumono per pura casualità una conformazione tridimensionale che simula perfettamente un complesso MHC self + peptide estraneo verso cui il repertorio T del ricevente è stato positivamente selezionato nel timo, scatenando una massiccia reattività crociata policlonale.
                </p>
              </div>
            </div>
          </div>

          {/* LE TRE VIE DI ALLORICONOSCIMENTO (DIRETTA, INDIRETTA, SEMIDIRETTA) */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Split className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span>Le 3 Vie di Alloriconoscimento: Diretta, Indiretta e Semidiretta (Cross-Dressing)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
              
              {/* Via Diretta */}
              <div className="p-4 bg-purple-50/50 dark:bg-purple-950/20 border-2 border-purple-400/60 dark:border-purple-800 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-purple-700 dark:text-purple-300 font-mono text-sm">1. Via Diretta</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-200 font-bold">DC Donatore</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  I linfociti T del ricevente (CD8⁺ e CD4⁺) riconoscono direttamente la <strong>molecola MHC allogenica intatta</strong> presente sulla superficie delle <strong>Cellule Dendritiche "Passeggere" del Donatore (passenger leukocytes)</strong> migrate dal trapianto ai linfonodi drenanti del ricevente.
                </p>
                <div className="p-2.5 bg-white dark:bg-slate-850 rounded-lg text-xs space-y-1">
                  <p><strong>Frequenza:</strong> Altissima (1–10% dei cloni T).</p>
                  <p><strong>Ruolo Patologico:</strong> È la via responsabile del <strong>Rigetto Acuto Cellulo-Mediato</strong>. Si spegne gradualmente nelle settimane/mesi successivi man mano che le DC passeggere del donatore muoiono e vengono eliminate.</p>
                </div>
              </div>

              {/* Via Indiretta */}
              <div className="p-4 bg-blue-50/50 dark:bg-blue-950/20 border-2 border-blue-400/60 dark:border-blue-800 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-blue-700 dark:text-blue-300 font-mono text-sm">2. Via Indiretta</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-bold">DC Ricevente</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Le <strong>Cellule Dendritiche del Ricevente</strong> penetrano nel trapianto, catturano proteine MHC allogeniche rilasciate dalle cellule del graft in turnover o in necrosi, le internalizzano, le digeriscono nei lisosomi e presentano i peptidi allogenici dentro le <strong>proprie molecole MHC di Classe II self</strong> ai linfociti CD4⁺ del ricevente.
                </p>
                <div className="p-2.5 bg-white dark:bg-slate-850 rounded-lg text-xs space-y-1">
                  <p><strong>Linked Recognition B-T:</strong> È l'<strong>unica via capace di fornire l'aiuto cognato ai linfociti B del ricevente</strong> per lo switch isotipico e la secrezione di <strong>Alloanticorpi Donor-Specifici IgG (DSA)</strong>.</p>
                  <p><strong>Ruolo Patologico:</strong> Guida il <strong>Rigetto Acuto Umorale</strong> e soprattutto il <strong>Rigetto Cronico</strong> a lungo termine.</p>
                </div>
              </div>

              {/* Via Semidiretta */}
              <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/20 border-2 border-emerald-400/60 dark:border-emerald-800 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-700 dark:text-emerald-300 font-mono text-sm">3. Via Semidiretta</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-200 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 font-bold">Cross-Dressing</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Le cellule dendritiche del ricevente acquisiscono sulla propria membrana citoplasmatica vescicole extracellulari, esosomi o frammenti di membrana intatti derivati dalle cellule del donatore contenenti complessi MHC-peptide intatti del donatore (<strong>fenomeno di "trogocitosi" o cross-dressing</strong>).
                </p>
                <div className="p-2.5 bg-white dark:bg-slate-850 rounded-lg text-xs space-y-1">
                  <p><strong>Meccanismo:</strong> La DC del ricevente espone simultaneamente molecole costimolatorie self (CD80/CD86) e complessi MHC intatti allogenici, amplificando l'attivazione dei CTL CD8⁺ per via diretta.</p>
                </div>
              </div>

            </div>
          </div>

          {/* I TRE PATTERN CLINICO-PATOLOGICI DI RIGETTO D'ORGANO SOLIDO */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              <span>I 3 Pattern Clinico-Patologici di Rigetto d'Organo Solido (Rene)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
              
              {/* Rigetto Iperacuto */}
              <div className="p-4 bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-rose-700 dark:text-rose-300 font-mono text-sm">Rigetto Iperacuto</span>
                  <span className="text-rose-600 dark:text-rose-400 font-mono font-bold text-xs">Minuti / Ore</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Avviene <strong>sul tavolo operatorio</strong> non appena vengono rimossi i clamp vascolari e il sangue del ricevente perfonde il trapianto:
                </p>
                <ul className="space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside text-xs">
                  <li><strong>Eziologia:</strong> Presenza di <strong>alloanticorpi preformati</strong> nel circolo del ricevente diretti contro antigeni <strong>AB0</strong> o molecole <strong>HLA del donatore</strong> (sensibilizzazione pregressa da politrasfusioni, gravidanze multipare o precedenti trapianti rigettati).</li>
                  <li><strong>Istopatologia:</strong> Fissazione istantanea di C1q, attivazione della cascata del complemento (MAC C5b-9), distruzione dell'endotelio vascolare, denudamento della membrana basale, aggregazione piastrinica massiva e <strong>trombosi microvascolare occlusiva con infarto ischemico cianotico dell'organo</strong>.</li>
                  <li><strong>Prevenzione Obbligatoria:</strong> Test di <strong>Cross-Match pre-trapianto</strong> (incubazione in vitro del siero del ricevente con i linfociti del donatore con saggio CDC o citofluorimetria; se positivo, il trapianto è assolutamente controindicato!).</li>
                </ul>
              </div>

              {/* Rigetto Acuto */}
              <div className="p-4 bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-700 dark:text-amber-300 font-mono text-sm">Rigetto Acuto</span>
                  <span className="text-amber-600 dark:text-amber-400 font-mono font-bold text-xs">Giorni / Mesi</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Rappresenta la risposta immunitaria primaria adattativa montata ex-novo contro l'organo:
                </p>
                <ul className="space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside text-xs">
                  <li><strong>Rigetto Acuto Cellulare (TCMR):</strong> Infiltrazione interstiziale di <strong>CTL CD8⁺ e Th1</strong> che attaccano l'epitelio dei tubuli renali (<strong>tubulite</strong>) e l'endotelio delle arteriole (<strong>endotelite / intimal arteritis</strong>). Trattabile con bolo di corticosteroidi ad alte dosi o anticorpi anti-T (ATG).</li>
                  <li><strong>Rigetto Acuto Umorale (ABMR):</strong> Guidato da anticorpi donor-specifici (DSA) che legano l'endotelio dei capillari peritubulari. <strong>Marker Patognomonico Bioptico d'Esame:</strong> Deposizione lineare continua del frammento <strong>C4d</strong> nei capillari peritubulari renale! Trattamento: plasmaferesi, immunoglobuline endovena (IVIG) e Rituximab.</li>
                </ul>
              </div>

              {/* Rigetto Cronico */}
              <div className="p-4 bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/50 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-purple-700 dark:text-purple-300 font-mono text-sm">Rigetto Cronico</span>
                  <span className="text-purple-600 dark:text-purple-400 font-mono font-bold text-xs">Mesi / Anni</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  È la causa principale di fallimento tardivo dell'organo trapiantato a distanza di anni:
                </p>
                <ul className="space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside text-xs">
                  <li><strong>Patogenesi Molecolare:</strong> Sostenuto dalla via indiretta e dalla produzione persistente di DSA a basso titolo, unita a flogosi cronica subclinica (IFN-γ, PDGF, TGF-β, FGF).</li>
                  <li><strong>Istologia:</strong> Proliferazione e migrazione delle cellule muscolari lisce dell'intima vascolare con deposizione di matrice extracellulare, che determinano <strong>Arteriosclerosi Accelerata del Trapianto (Vasculopatia Concentrica Occlusiva)</strong> con ischemia cronica, atrofia parenchimale e fibrosi interstiziale progressiva (<em>bronchiolite obliterante</em> nel polmone, <em>arteriopatia coronarica del graft</em> nel cuore). Refrattario ai normali farmaci immunosoppressori.</li>
                </ul>
              </div>

            </div>
          </div>

        </section>

        {/* -----------------------------------------------------------------------
            SEZIONE 7.2: FARMACOLOGIA ANTIRIGETTO & TRAPIANTO HSCT (GVHD vs GvL)
            ----------------------------------------------------------------------- */}
        <section id="sec-7-farmaci-trapianto-cse" className="scroll-mt-24 space-y-8">
          
          <div className="border-l-4 border-indigo-600 pl-4 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
              Sezione 7.2 • Dalla Lezione 29
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              Farmacologia Immunosoppressiva e Trapianto di Cellule Staminali Emopoietiche (HSCT)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Inibitori della calcineurina (Ciclosporina A e Tacrolimus), inibitori di mTOR (Rapamicina), blocco del segnale 2 (Belatacept / CTLA4-Ig), antimetaboliti (Micofenolato Mofetile e inibizione IMPDH); HSCT: tipizzazione 10/12 alleli, antigeni minori mHAg (H-Y), GVHD acuta e cronica, ed effetto antitumorale Graft-versus-Leukemia con mismatch KIR delle cellule NK.
            </p>
          </div>

          {/* BERSAGLI MOLECOLARI DEI FARMACI IMMUNOSOPPRESSORI */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Pill className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>I Bersagli Molecolari dei Farmaci Antirigetto: Disattivazione dei 3 Segnali Linfocitari</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              
              <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-indigo-600 dark:text-indigo-400 font-mono text-sm block">1. Inibitori Calcineurina (Segnale 1)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Ciclosporina A</strong> (si lega alla Ciclofilina citosolica) e <strong>Tacrolimus / FK506</strong> (si lega a FKBP12). Entrambi i complessi farmaco-immunofilina inibiscono la fosfatasi <strong>Calcineurina</strong>, bloccando la defosforilazione e la traslocazione nucleare del fattore <strong>NFAT</strong>, sopprimendo a monte la trascrizione di <strong>IL-2</strong>.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-purple-600 dark:text-purple-400 font-mono text-sm block">2. Belatacept (Blocco Segnale 2)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Proteina di fusione ricombinante solubile costituita dal dominio extracellulare di <strong>CTLA-4 mutato ad altissima affinità fuso con il frammento Fc di IgG1</strong>. Lega e sequestra le molecole costimolatorie <strong>CD80 e CD86</strong> sulle APC, inducendo anergia nei linfociti alloreattivi. <em>Grande vantaggio clinico:</em> privo della nefrotossicità cronica di Tacrolimus e Ciclosporina!
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-amber-600 dark:text-amber-400 font-mono text-sm block">3. Inibitori di mTOR (Segnale 3)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Sirolimus (Rapamicina)</strong> ed Everolimus: legano la proteina citosolica FKBP12 ma, a differenza del Tacrolimus, non inibiscono la calcineurina bensì la chinasi serina-treonina <strong>mTOR (complesso mTORC1)</strong>. Bloccano la progressione del ciclo cellulare da G1 a S indotta da IL-2, inibendo la proliferazione clonale T.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono text-sm block">4. Micofenolato Mofetile (MMF)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Profarmaco dell'acido micofenolico: <strong>inibitore selettivo, potente e reversibile dell'enzima IMPDH (Inosina Monofosfato Deidrogenasi)</strong>. I linfociti T e B dipendono obbligatoriamente dalla sintesi de novo dei nucleotidi purinici (guanina) e mancano della via di salvataggio: l'MMF blocca selettivamente la replicazione linfocitaria.
                </p>
              </div>

            </div>
          </div>

          {/* SIMULATORE 1: LABORATORIO TRAPIANTO RENALE E CROSS-MATCH */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-lg space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-purple-400" />
                <h3 className="text-base font-bold text-white">Simulatore Interattivo: Compatibilità HLA, Cross-Match & Rigetto d'Organo Solido</h3>
              </div>
              <span className="text-xs font-mono bg-slate-800 px-3 py-1 rounded text-purple-300 border border-slate-700">
                Chirurgia dei Trapianti & Immunogenetica
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 block">Condizione Donatore-Ricevente:</label>
                <select
                  value={sim1DonorMhc}
                  onChange={(e) => setSim1DonorMhc(e.target.value as any)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs font-mono text-white"
                >
                  <option value="identical">Identità HLA Perfetta (0 mismatch)</option>
                  <option value="mismatch_1_class1">1 Mismatch di Classe I (HLA-A/B)</option>
                  <option value="mismatch_class2_dr">Mismatch di Classe II (HLA-DR/DQ)</option>
                  <option value="full_mismatch">Pieno Mismatch HLA Multiplo</option>
                  <option value="xenograft_pig">Xenotrapianto (Maiale wild-type)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 block">Esito Cross-Match Pre-Trapianto:</label>
                <button
                  onClick={() => setSim1Crossmatch(!sim1Crossmatch)}
                  className={`w-full py-2 px-3 rounded-lg text-xs font-mono font-bold border transition-all ${
                    sim1Crossmatch
                      ? 'bg-rose-950/80 border-rose-500 text-rose-300'
                      : 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                  }`}
                >
                  {sim1Crossmatch ? 'Cross-Match POSITIVO (DSA preformati)' : 'Cross-Match NEGATIVO (Idoneo)'}
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 block">Protocollo Immunosoppressivo:</label>
                <select
                  value={sim1Therapy}
                  onChange={(e) => setSim1Therapy(e.target.value as any)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs font-mono text-white"
                >
                  <option value="triple_regimen">Triplice Terapia Standard (Tacrolimus + MMF + Steroide)</option>
                  <option value="belatacept">Regime Belatacept (CTLA4-Ig a risparmio CNI)</option>
                  <option value="cni_tacrolimus">Monoterapia Tacrolimus</option>
                  <option value="none">Nessuna Immunosoppressione</option>
                </select>
              </div>
            </div>

            {/* Risultato Simulatore 1 */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-850 pb-2 text-xs font-mono">
                <span className="text-slate-400">Esito Istopatologico & Funzionale Previsto:</span>
                <span className={`px-2.5 py-0.5 rounded font-bold border ${sim1Outcome.color}`}>
                  {sim1Outcome.status}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                {sim1Outcome.text}
              </p>
            </div>
          </div>

          {/* TRAPIANTO DI CELLULE STAMINALI EMOPOIETICHE (HSCT), GVHD E GRAFT-VERSUS-LEUKEMIA (GvL) */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-5">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Crosshair className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Trapianto di Midollo Osseo ed HSCT: Regimi di Condizionamento, mHAg (H-Y), GVHD & Effetto GvL</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              
              {/* Box GVHD */}
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono block text-sm">
                  1. Malattia del Trapianto Contro l'Ospite (GVHD) & Antigeni Minori mHAg
                </span>
                <p className="text-slate-600 dark:text-slate-300">
                  A differenza del trapianto d'organo solido in cui l'ospite attacca il graft, nell'HSCT allogenico sono i <strong>linfociti T maturi immunocompetenti del donatore</strong> presenti nell'inoculo a riconoscere come estraneo il ricevente, reso privo di difese dal regime di chemio-radioterapia di condizionamento.
                </p>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-rose-500 text-xs space-y-1.5">
                  <p><strong>Antigeni Minori di Istocompatibilità (mHAg):</strong> Anche in caso di perfetta compatibilità HLA 10/10 o 12/12, la GVHD può scatenarsi a causa di polimorfismi in normali proteine cellulari: il prototipo è l'<strong>antigene H-Y codificato dal cromosoma Y maschile</strong> (quando una donatrice femmina dona a un fratello maschio, i linfociti T della donatrice non sono tolleranti verso le proteine del cromosoma Y!).</p>
                  <p><strong>Triade Bersaglio della GVHD Acuta (&lt;100 giorni):</strong></p>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-600 dark:text-slate-400">
                    <li><strong>Cute:</strong> Rash maculopapulare eritematoso pruriginoso che parte dal palmo delle mani e piante dei piedi fino all'eritrodermia bollosa.</li>
                    <li><strong>Fegato:</strong> Danno endoteliale e necrosi dei piccoli dotti biliari con colestasi marcata e iperbilirubinemia coniugata.</li>
                    <li><strong>Intestino:</strong> Distruzione delle cripte ghiandolari mucosali (fase innescata dal danno da condizionamento e traslocazione di LPS) con <strong>diarrea secretoria acquosa ed ematica profusa</strong> e dolori colici violenti.</li>
                  </ul>
                </div>
              </div>

              {/* Box GvL e Alloreattività NK da Mismatch KIR */}
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono block text-sm">
                  2. Il Risvolto Terapeutico Miracoloso: L'Effetto Graft-Versus-Leukemia (GvL)
                </span>
                <p className="text-slate-600 dark:text-slate-300">
                  La deplezione totale dei linfociti T dall'inoculo midollare previene la GVHD ma aumenta drammaticamente il tasso di recidiva della leucemia! Questo ha svelato che i linfociti del donatore svolgono un'azione salvavita fondamentale: l'<strong>effetto Graft-versus-Leukemia (GvL)</strong>, distruggendo le cellule staminali leucemiche minime residue.
                </p>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-indigo-500 text-xs space-y-1.5">
                  <p><strong>Il Protocollo Perugia & Alloreattività NK (Prof.ssa Velardi / Cattedra Soriani):</strong></p>
                  <p className="text-slate-600 dark:text-slate-300">
                    Nel <strong>trapianto aploidentico</strong> (da genitore a figlio, compatibile solo al 50% su un singolo aplotipo HLA), si rimuovono tutti i linfociti T maturi per evitare la GVHD letale e si sfruttano le <strong>Cellule NK del donatore dotate di mismatch KIR-HLA ligand</strong>:
                  </p>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-600 dark:text-slate-400">
                    <li>Se le cellule leucemiche del paziente mancano dell'allele HLA-C del gruppo appropriato che funge da ligando per i recettori inibitori <strong>KIR</strong> delle cellule NK del donatore, il segnale di inibizione (<em>Missing Self</em>) viene a mancare.</li>
                    <li>Le cellule NK alloreattive del donatore uccidono fulmineamente i blasti leucemici residui (effetto antileucemico potente) e le DC del ricevente (prevenendo il rigetto), <strong>senza provocare la GVHD nei tessuti normali dell'ospite</strong>!</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* -----------------------------------------------------------------------
            SEZIONE 7.3: TOLLERANZA CENTRALE/PERIFERICA & LE 4 SINDROMI MONOGENICHE
            ----------------------------------------------------------------------- */}
        <section id="sec-7-tolleranza-monogeniche" className="scroll-mt-24 space-y-8">
          
          <div className="border-l-4 border-emerald-600 pl-4 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
              Sezione 7.3 • Dalla Lezione 30
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              Architettura della Tolleranza Centrale e Periferica e le 4 Sindromi Autoimmuni Monogeniche
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Esperimento storico di Medawar sul chimerismo neonatale (Nobel 1960); i 4 pilastri della tolleranza periferica (ignoranza e privilegio, anergia con ubiquitina-ligasi E3 Cbl-b/GRAIL, soppressione Treg FoxP3⁺ e delezione AICD via Fas/BIM); dissezione molecolare delle sindromi APS-1 (AIRE), IPEX (FOXP3), ALPS (FAS/CD95) e aploinsufficienza di CTLA-4 (CHAI).
            </p>
          </div>

          {/* I 4 PILASTRI DELLA TOLLERANZA PERIFERICA DEI LINFOCITI T */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Scale className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>I 4 Meccanismi Fisiologici di Tolleranza Periferica per i Cloni T Autoreattivi Sfuggiti al Timo</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-sm block">1. Ignoranza Immunologica & Privilegio Anatomico</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Segregazione fisica degli autoantigeni dietro barriere anatomiche prive di drenaggio linfatico convenzionale (camera anteriore dell'occhio, cervello, parenchima testicolare, placenta fetale). I tessuti a privilegio immunitario esprimono costitutivamente alti livelli di <strong>FasL e PD-L1</strong> e secernono <strong>TGF-β</strong>, inducendo apoptosi immediata di qualunque linfocita T attivato che osi penetrare la barriera.
                </p>
                <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg text-xs border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                  <strong>Correlazione Clinica: Oftalmia Simpatica:</strong> Un trauma perforante a un occhio rilascia in circolo autoantigeni intraoculari precedentemente sequestrati (uvea/retina). I linfociti T si attivano nei linfonodi cervicali e migrano attaccando non solo l'occhio traumatizzato ma anche l'occhio controlaterale sano precedentemente integro, conducendo a cecità bilaterale se non trattata tempestivamente con immunosoppressione o enucleazione dell'occhio traumatizzato.
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-sm block">2. Anergia Clonale & Ubiquitina-Ligasi E3 (Cbl-b / GRAIL)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Quando il TCR riconosce l'autoantigene (Segnale 1) su cellule presentanti l'antigene immature e quiescenti prive di costimolazione CD80/CD86 (<strong>assenza di Segnale 2</strong>):
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  Si attiva l'afflusso di calcio e <strong>NFAT in assenza del complesso AP-1 (Fos/Jun)</strong>. Questo squilibrio trascrizionale attiva la trascrizione dei geni delle <strong>Ubiquitina-Ligasi E3 (Cbl-b, GRAIL, Itch)</strong>. Queste ligasi ubiquitinano e degradano proteasomicamente PLC-γ1, PKC-θ e la catena trasduttrice CD3ζ, rendendo il linfocita permanentemente e irreversibilmente refrattario a future stimolazioni anche in presenza di costimolazione successiva.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-sm block">3. Soppressione Attiva Dominante da Linfociti Treg FoxP3⁺</span>
                <p className="text-slate-600 dark:text-slate-300">
                  I linfociti Treg naturali timici (tTreg) e periferici (pTreg) esprimono stabilmente il master regulator <strong>FoxP3</strong>. Esercitano una sorveglianza attiva dominante:
                </p>
                <ul className="space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside text-xs">
                  <li><strong>Consumo di IL-2 (Spugna Metabolica):</strong> Esprimono costitutivamente la subunità α ad alta affinità <strong>CD25</strong>, sottraendo IL-2 ai cloni effettori che muoiono per privazione citochinica.</li>
                  <li><strong>CTLA-4 Costitutivo:</strong> Rimuove per trans-endocitosi le molecole CD80/CD86 dalla superficie delle APC.</li>
                  <li><strong>Citochine Soppressive:</strong> Secrezione locale di <strong>IL-10, TGF-β e IL-35</strong>.</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-sm block">4. Delezione Clonale Periferica (Apoptosi AICD)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  La stimolazione antigenica cronica e ripetuta dei linfociti T da parte di autoantigeni tessutali abbondanti innesca la morte cellulare indotta da attivazione (<strong>AICD - Activation-Induced Cell Death</strong>):
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  Attivazione concomitante della via estrinseca con co-espressione di <strong>Fas (CD95) e FasL (CD95L)</strong> e reclutamento di FADD/Caspasi-8, unitamente alla via intrinseca mitocondriale mediata dall'induzione del fattore pro-apoptotico BH3-only <strong>BIM</strong>, che neutralizza Bcl-2 portando al rilascio di citocromo c e morte apoptotica del clone autoreattivo.
                </p>
              </div>

            </div>
          </div>

          {/* DISSEZIONE DELLE 4 SINDROMI AUTOIMMUNI MONOGENICHE (APS-1, IPEX, ALPS, CHAI) */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Dna className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Le 4 Sindromi Autoimmuni Monogeniche Umane ("Esperimenti della Natura")</span>
              </h3>
              <span className="text-xs font-mono bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full font-semibold">
                Genetica Causativa
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 font-mono border-b border-slate-200 dark:border-slate-800">
                    <th className="p-3">Sindrome Monogenica</th>
                    <th className="p-3">Gene Mutato & Ereditarietà</th>
                    <th className="p-3">Meccanismo Molecolare Alterato</th>
                    <th className="p-3">Triade / Manifestazioni Cliniche Cardine</th>
                    <th className="p-3">Particolarità d'Esame</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400 font-mono">APS-1 / APECED</td>
                    <td className="p-3 font-mono">AIRE (Cromosoma 21)<br/><span className="text-slate-500">Autosomica Recessiva</span></td>
                    <td className="p-3">Mancata espressione promiscua ectopica degli antigeni tessuto-specifici (TRA) nelle mTEC del timo; fallimento della selezione negativa centrale.</td>
                    <td className="p-3"><strong>Triade Classica:</strong> 1) Candidosi mucocutanea cronica (CMC); 2) Ipoparatiroidismo primitivo; 3) Morbo di Addison (insufficienza corticosurrenalica).</td>
                    <td className="p-3 text-slate-600 dark:text-slate-300">La candidosi è causata da autoanticorpi neutralizzanti ad alto titolo diretti contro <strong>IL-17A, IL-17F e IL-22</strong>!</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-bold text-rose-600 dark:text-rose-400 font-mono">Sindrome IPEX</td>
                    <td className="p-3 font-mono">FOXP3 (Cromosoma X)<br/><span className="text-slate-500">X-linked Recessiva (Maschi)</span></td>
                    <td className="p-3">Totale assenza o disfunzione dei linfociti T regolatori (Treg CD4⁺CD25⁺FoxP3⁺). Mancanza assoluta del freno immunosoppressivo dominante periferico.</td>
                    <td className="p-3"><strong>Triade Neonatale Letale:</strong> 1) Enteropatia autoimmune intrattabile con diarrea profusa; 2) Diabete mellito di Tipo 1 neonatale; 3) Eczema atopico ed eritrodermia severa.</td>
                    <td className="p-3 text-slate-600 dark:text-slate-300">Modello murino omologo è il topo <em>Scurfy</em>. Terapia risolutiva: trapianto di cellule staminali emopoietiche (HSCT).</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-bold text-purple-600 dark:text-purple-400 font-mono">Sindrome ALPS (Canale-Smith)</td>
                    <td className="p-3 font-mono">FAS (TNFRSF6), FASLG o CASP10<br/><span className="text-slate-500">Autosomica Dominante</span></td>
                    <td className="p-3">Difetto molecolare nella via estrinseca dell'apoptosi AICD. I linfociti T attivati non muoiono dopo l'incontro con l'antigene e si accumulano nei tessuti.</td>
                    <td className="p-3">Linfoadenopatia massiva cronica non tumorale, epatosplenomegalia, anemie emolitiche e piastrinopenie autoimmuni refrattarie.</td>
                    <td className="p-3 text-slate-600 dark:text-slate-300"><strong>Biomarker d'Esame:</strong> Presenza patognomonica in circolo di <strong>Linfociti T TCRαβ⁺ Doppi Negativi (CD4⁻CD8⁻ DNT)</strong> &gt;1.5-2%!</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-bold text-blue-600 dark:text-blue-400 font-mono">Aploinsufficienza CTLA-4 (CHAI) / LRBA</td>
                    <td className="p-3 font-mono">CTLA4 o LRBA<br/><span className="text-slate-500">Autosomica Dominante</span></td>
                    <td className="p-3">Mancanza di CTLA-4 o deficit di <strong>LRBA</strong> (proteina chaperon che ricicla CTLA-4 salvandolo dalla degradazione lisosomiale). Mancata rimozione di CD80/CD86 dalle APC.</td>
                    <td className="p-3">Infiltrazione linfocitaria multiorgano (cervello, polmoni, intestino), ipogammaglobulinemia paradosso con autoimmunità grave (CVID-like).</td>
                    <td className="p-3 text-slate-600 dark:text-slate-300">Terapia biologica mirata specifica: somministrazione della proteina di fusione solubile <strong>Abatacept (CTLA4-Ig)</strong>!</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </section>

        {/* -----------------------------------------------------------------------
            SEZIONE 7.4: EZIOPATOGENESI: HLA, DIMORFISMO (XIST) & TRIGGER AMBIENTALI
            ----------------------------------------------------------------------- */}
        <section id="sec-7-eziopatogenesi-xist" className="scroll-mt-24 space-y-8">
          
          <div className="border-l-4 border-amber-600 pl-4 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
              Sezione 7.4 • Dalle Lezioni 30 e 31
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              Eziopatogenesi Multifattoriale dell'Autoimmunità: HLA, Dimorfismo Sessuale e Complessi lncRNA Xist
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Genetica poligenica e Odds Ratio (HLA-B27, Shared Epitope HLA-DR4, PTPN22 R620W); perché le donne sono colpite nell'80-90% dei casi: ormoni, dosaggio biallelico di TLR7 e il ruolo cardine del macro-complesso formato dal long non-coding RNA Xist con 81 ribonucleoproteine self (Ro/SSA, La/SSB, Sm); i 4 trigger ambientali (mimetismo molecolare, attivazione bystander, epitope spreading e citrullinazione mediata da PAD indotta dal fumo).
            </p>
          </div>

          {/* GENETICA POLIGENICA E RISCHIO RELATIVO DEGLI ALLELI HLA */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Dna className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span>Associazione HLA & Rischio Relativo (Odds Ratio) nelle Malattie Autoimmuni</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-amber-600 dark:text-amber-400 font-mono text-sm block">HLA-B27: Spondilite Anchilosante (OR ~90–100)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  È l'associazione più forte in assoluto tra un allele MHC e una patologia umana (&gt;90% dei pazienti affetti è B27⁺). Oltre alla presentazione peptidica artrogenica, la catena pesante di HLA-B27 possiede una lenta cinetica di folding e tende a formare omodimeri non canonici nel RE, attivando la risposta <strong>UPR</strong> e inducendo la secrezione di <strong>IL-23/IL-17</strong>.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-purple-600 dark:text-purple-400 font-mono text-sm block">HLA-DRB1*04:01: Shared Epitope nell'AR (OR ~4–6)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Condivide una specifica sequenza conservata di 5 aminoacidi (<strong>QKRAA / QRRAA</strong>) nella tasca di legame P4 della catena β1. Questa tasca è ricca di residui basici con carica positiva: accoglie con altissima affinità solo peptidi contenenti residui idrofobici neutri come la <strong>Citrullina</strong>, mentre respinge l'Arginina self fisiologica carica positivamente!
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-blue-600 dark:text-blue-400 font-mono text-sm block">Polimorfismi Non-HLA: PTPN22 (Variante R620W)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  La mutazione puntiforme Arg620Trp (R620W) della tirosina-fosfatasi citosolica <strong>Lyp</strong> espressa nei linfociti T e B altera l'interazione con la chinasi Csk. Causa una paradossale iper-reattività dei linfociti B e un fallimento dei checkpoint di delezione centrale e periferica (associata a Diabete Tipo 1, Artrite Reumatoide e Tiroiditi).
                </p>
              </div>
            </div>
          </div>

          {/* PERCHÉ LE MALATTIE AUTOIMMUNI COLPISCONO LE DONNE? COMPLESSO lncRNA XIST */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-900 border-2 border-purple-300 dark:border-purple-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Il Mistero del Dimorfismo di Genere (F:M 9:1) e la Scoperta del Macro-Complesso lncRNA Xist
                </h3>
              </div>
              <span className="text-xs font-mono bg-purple-200 dark:bg-purple-950 text-purple-800 dark:text-purple-300 px-3 py-1 rounded font-bold">
                Lezione Prof.ssa Soriani
              </span>
            </div>

            <p className={`text-slate-700 dark:text-slate-300 ${proseSizeClass}`}>
              Nelle connettiviti sistemiche come il LES e la sindrome di Sjögren, il rapporto femmine/maschi raggiunge valori impressionanti di <strong>9:1 (circa il 90% dei pazienti sono donne)</strong>. Sebbene gli estrogeni potenzino fisiologicamente la sopravvivenza dei linfociti B e la produzione di BAFF, recenti studi di risonanza molecolare presentati a lezione hanno identificato il meccanismo causativo fondamentale:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-white dark:bg-slate-850 rounded-xl border border-purple-200 dark:border-slate-700 space-y-2">
                <span className="font-bold text-purple-700 dark:text-purple-300 font-mono block">1. L'Assemblaggio del Complesso lncRNA Xist con 81 Proteine</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Il long non-coding RNA <strong>Xist (X-inactive specific transcript)</strong> è trascritto <em>esclusivamente nelle cellule femminili dotate di cariotipo XX</em> per silenziare per eterocromatinizzazione uno dei due cromosomi X. Durante questo processo di condensazione cromatinica, la molecola di Xist recluta e si complessa fisicamente con ben <strong>81 diverse ribonucleoproteine nucleari (RBP)</strong>, tra cui gli antigeni cardine <strong>Ro/SSA, La/SSB, Sm e RNP</strong>.
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-850 rounded-xl border border-purple-200 dark:border-slate-700 space-y-2">
                <span className="font-bold text-rose-700 dark:text-rose-300 font-mono block">2. Rilascio di Xist nelle NETs e Innesco Autoanticorpale</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Alla morte cellulare (specie nella <strong>NETosi</strong> neutrofila e apoptosi), il macro-complesso ribonucleoproteico Xist-RNP viene rilasciato nello spazio extracellulare. Essendo un reticolo macromolecolare polivalente che associa RNA a decine di proteine self, viene catturato con avidità estrema dai linfociti B e dalle pDC, stimolando simultaneamente il BCR e i sensori endosomiali <strong>TLR7</strong>, innescando la produzione degli autoanticorpi tipici del LES e la firma dell'interferone!
                </p>
              </div>
            </div>

            <p className="text-xs text-purple-900 dark:text-purple-200 italic">
              *Prova sperimentale conclusiva: Maschi transgenici che esprimono forzatamente un cDNA di Xist non funzionale all'inattivazione cromosomica sviluppano gli stessi autoanticorpi ribonucleoproteici e le stesse manifestazioni lupiche delle femmine!
            </p>
          </div>

          {/* I 4 MECCANISMI DI INNESCO AMBIENTALE */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Sun className="w-5 h-5 text-amber-500" />
              <span>I 4 Trigger Ambientali: Mimetismo, Attivazione Bystander, Epitope Spreading e Citrullinazione</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-amber-600 dark:text-amber-400 font-mono block text-sm">1. Mimetismo Molecolare</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Omologia strutturale o di sequenza tra epitopi microbici e proteine self: <em>S. pyogenes</em> (Proteina M vs miosina cardiaca nella Febbre Reumatica); <em>Campylobacter jejuni</em> (lipooligosaccaride vs gangliosidi GM1 nella Sindrome di Guillain-Barré); <strong>Virus di Epstein-Barr (EBV / EBNA-1)</strong> che cross-reagisce con la proteina gliale <strong>GlialCAM</strong> nella <strong>Sclerosi Multipla</strong>.
                </p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-blue-600 dark:text-blue-400 font-mono block text-sm">2. Attivazione Bystander</span>
                <p className="text-slate-600 dark:text-slate-300">
                  L'infezione acuta o la necrosi tissutale scatena una tempesta innata locale (IL-1, TNF-α, IFN-I) che induce l'espressione massiccia delle molecole costimolatorie <strong>CD80/CD86</strong> sulle APC residenti. Questo fornisce il "Segnale 2" a linfociti T autoreattivi anergici presenti come spettatori (<em>bystanders</em>), risvegliandoli dalla quiescenza.
                </p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-purple-600 dark:text-purple-400 font-mono block text-sm">3. Epitope Spreading</span>
                <p className="text-slate-600 dark:text-slate-300">
                  L'infiammazione iniziale distrugge le cellule rilasciando antigeni self intracellulari precedentemente nascosti. La risposta si estende da un singolo epitopo iniziale ad altri epitopi della medesima molecola (<em>intramolecolare</em>) o a proteine adiacenti del complesso (<em>intermolecolare</em>, es. da GPIIb/IIIa a GPIb/IX nella piastrinopenia ITP).
                </p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-rose-600 dark:text-rose-400 font-mono block text-sm">4. Citrullinazione & Fumo</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Il fumo di sigaretta e la parodontite da <em>Porphyromonas gingivalis</em> attivano nei polmoni e gengive l'enzima <strong>PAD (Peptidil-Arginina Deiminasi)</strong>. La deiminazione converte residui di <strong>Arginina in Citrullina</strong> nelle proteine self, creando neoantigeni che si incastrano nella tasca P4 di HLA-DR4 inducendo gli anticorpi <strong>ACPA (anti-CCP)</strong> dell'Artrite Reumatoide!
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* -----------------------------------------------------------------------
            SEZIONE 7.5: PATOGENESI CLINICA: LES, ARTRITE REUMATOIDE, SM & DIABETE T1D
            ----------------------------------------------------------------------- */}
        <section id="sec-7-autoimmuni-clinica" className="scroll-mt-24 space-y-8">
          
          <div className="border-l-4 border-rose-600 pl-4 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 font-bold">
              Sezione 7.5 • Dalla Lezione 31
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              Fisiopatologia delle Grandi Malattie Autoimmuni Sistemiche e Organo-Specifiche
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              LES: NETosi, apoptosi non risolta (C1q/DNasi), TLR7/9 nelle pDC, signature IFN-α, BAFF e farmaci Belimumab/Anifrolumab; Artrite Reumatoide: ACPA, panno sinoviale erosivo, asse RANKL/RANK/osteoclasti e biologici; Sclerosi Multipla: VLA-4/VCAM-1 (Natalizumab e virus JC), bande oligoclonali liquorali e anti-CD20; Diabete di Tipo 1: lisi CTL CD8⁺ delle cellule β, 4 autoanticorpi predittivi e Teplizumab (anti-CD3).
            </p>
          </div>

          {/* LUPUS ERITEMATOSO SISTEMICO (LES): IL CIRCOLO VIZIOSO PATOGENETICO */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <span>Lupus Eritematoso Sistemico (LES): Il Circolo Vizioso Patogenetico e l'Asse IFN-α/BAFF</span>
              </h3>
              <span className="text-xs font-mono bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 px-3 py-1 rounded font-semibold">
                Prototipo del Tipo III Sistemico
              </span>
            </div>

            <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
              Il LES è la connettivite autoimmune prototipica caratterizzata dalla produzione di autoanticorpi diretti contro costituenti nucleari (<strong>ANA, anti-dsDNA, anti-Sm</strong>). La patogenesi si articola in una cascata amplificatrice a feedback positivo:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono block">1. Apoptosi & Deficit Clearance</span>
                <p className="text-slate-600 dark:text-slate-300">
                  I raggi UV inducono apoptosi massiva dei cheratinociti. Nei soggetti predisposti (mutazioni di <strong>C1q, C4, C2</strong> o dell'endonucleasi <strong>DNasi1 / TREX1</strong>), i corpi apoptotici non vengono rimossi dai macrofagi, persistendo nel tessuto con rilascio di nucleosomi e DNA libero.
                </p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono block">2. Attivazione B via BCR & TLR</span>
                <p className="text-slate-600 dark:text-slate-300">
                  I linfociti B autoreattivi legano il DNA o le ribonucleoproteine col BCR e le internalizzano nell'endosoma. Qui il DNA attiva <strong>TLR9</strong> e l'RNA attiva <strong>TLR7</strong>, fornendo un doppio segnale di proliferazione e secrezione di anticorpi <strong>anti-dsDNA e anti-Sm</strong>.
                </p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono block">3. Le pDC e l'Interferon Signature</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Gli immunocomplessi DNA-IgG vengono captati dalle <strong>cellule dendritiche plasmacitoidi (pDC) via recettore FcγRIIA (CD32A)</strong>. L'attivazione di TLR7/9 induce una produzione torrentizia di <strong>IFN-α (Firma dell'Interferone del LES)</strong>.
                </p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono block">4. Asse BAFF & Terapie Mirate</span>
                <p className="text-slate-600 dark:text-slate-300">
                  L'IFN-α stimola i monociti a rilasciare <strong>BAFF (BLyS)</strong>, che mantiene in vita i linfociti B autoreattivi chiudendo il cerchio. <em>Terapie Biologiche Mirate:</em> <strong>Belimumab</strong> (anti-BAFF) e <strong>Anifrolumab</strong> (anti-IFNAR1 che blocca il recettore degli interferoni di tipo I).
                </p>
              </div>
            </div>
          </div>

          {/* ARTRITE REUMATOIDE (AR): PANNO SINOVIALE, ACPA E OSTEOCLASTOGENESI */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-500" />
              <span>Artrite Reumatoide (AR): Sinovite Cronica, ACPA, Panno Erosivo & Asse RANKL/Osteoclasti</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono block text-sm">Fattore Reumatoide vs ACPA (Anti-CCP)</span>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Fattore Reumatoide (FR):</strong> autoanticorpo (solitamente IgM) diretto contro la porzione Fc costante delle IgG umane; è presente nel 70-80% dei pazienti ma non è specifico (si riscontra anche in infezioni croniche come epatite C ed endocardite).
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>ACPA (Anti-Citrullinated Protein Antibodies):</strong> diretti contro proteine in cui l'arginina è stata deiminata in citrullina (vimentina, filaggrina, fibrinogeno citrullinato). Possiedono una <strong>specificità superiore al 95-98%</strong> e compaiono nel siero anche 5–10 anni prima dell'esordio dei sintomi clinici articolari!
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono block text-sm">Il Panno Sinoviale & Erosione Ossea RANKL-Dipendente</span>
                <p className="text-slate-600 dark:text-slate-300">
                  Nella membrana sinoviale infiltrata da <strong>Th17 (IL-17), Th1 (IFN-γ) e macrofagi</strong>, si sviluppa un'iperplasia invasiva fibroblastica tumor-like detta <strong>Panno Sinoviale</strong>.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  I macrofagi e i fibroblasti sinoviali producono massicce quantità di <strong>TNF-α, IL-1β e IL-6</strong>, e sovraesprimono <strong>RANKL</strong>. RANKL si lega al recettore <strong>RANK</strong> sui precursori monocitari mieloidi differenziandoli in <strong>Osteoclasti maturi multi-nucleati</strong>, che erodono irreversibilmente l'osso subcondrale peri-articolare, mentre le metalloproteasi (MMP-1, MMP-13) degradano la cartilagine ialina.
                </p>
              </div>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
              <strong>Arsenale Biologico nell'AR:</strong> DMARDs convenzionali (<strong>Metotrexato</strong>); farmaci biologici <strong>anti-TNF-α</strong> (Infliximab, Adalimumab, Etanercept, Golimumab, Certolizumab pegol); <strong>anti-IL-6R</strong> (Tocilizumab, Sarilumab); inibitore della costimolazione <strong>Abatacept</strong> (CTLA4-Ig); anti-CD20 (Rituximab) e inibitori orali di JAK-STAT (<strong>Jakinibi</strong>: Tofacitinib, Baricitinib, Upadacitinib).
            </div>
          </div>

          {/* SCLEROSI MULTIPLA & DIABETE DI TIPO 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Box Sclerosi Multipla */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>Sclerosi Multipla (SM): Demielinizzazione del SNC, Integrina VLA-4 & Bande Oligoclonali</span>
              </h3>
              <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
                Malattia infiammatoria cronica demielinizzante autoimmune del SNC (modello sperimentale: EAE):
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                <li><strong>Attraversamento della BBB:</strong> Linfociti Th1 e Th17 reattivi contro proteine della mielina (MBP, MOG, PLP) usano l'integrina <strong>VLA-4 (α4β1)</strong> per legare <strong>VCAM-1</strong> sulle cellule endoteliali cerebrali.</li>
                <li><strong>Natalizumab & Rischio PML:</strong> L'anticorpo anti-α4 Natalizumab blocca l'ingresso dei linfociti T nel cervello arrestando le recidive, ma l'azzeramento della sorveglianza immunitaria nel SNC favorisce la riattivazione opportunistica del <strong>virus JC</strong> latente, che infetta gli oligodendrociti provocando la letale <strong>Leucoencefalopatia Multifocale Progressiva (PML)</strong>.</li>
                <li><strong>Bande Oligoclonali Liquorali:</strong> Alla rachicentesi, il riscontro di bande oligoclonali di IgG presenti nel liquido cefalorachidiano ma assenti nel siero dimostra la sintesi intratecale autonoma di immunoglobuline da parte di plasmacellule annidate in follicoli linfoidi ectopici meningei (fondamento dell'efficacia degli anticorpi anti-CD20 <strong>Ocrelizumab e Ofatumumab</strong>).</li>
              </ul>
            </div>

            {/* Box Diabete Mellito Tipo 1 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Crosshair className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <span>Diabete Mellito di Tipo 1 (T1D): Insulite Linfocitaria & Distruzione Citotossica delle Cellule β</span>
              </h3>
              <p className={`text-slate-600 dark:text-slate-300 ${proseSizeClass}`}>
                Distruzione selettiva delle cellule β delle isole pancreatiche di Langerhans produttrici di insulina:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                <li><strong>Meccanismo Effettore Primario:</strong> L'uccisione delle cellule β è mediata direttamente da <strong>CTL CD8⁺ autoreattivi</strong> mediante esocitosi orientata di <strong>Perforina e Granzimi B</strong> e via <strong>FasL/Fas</strong>, assistiti dalla secrezione di IFN-γ, TNF-α e IL-1β da parte di Th1 infiltranti (<em>insulite</em>). L'esordio clinico si manifesta quando oltre l'80–90% del patrimonio β-cellulare è irreversibilmente distrutto.</li>
                <li><strong>I 4 Autoanticorpi Predittivi:</strong> 1) <strong>IAA</strong> (anti-insulina); 2) <strong>anti-GAD65</strong> (decarbossilasi dell'acido glutammico); 3) <strong>anti-IA-2</strong> (tirosina fosfatasi); 4) <strong>anti-ZnT8</strong> (trasportatore dello zinco delle vescicole secretorie). La presenza concomitante di ≥ 2 autoanticorpi conferisce un rischio &gt;70-80% di sviluppare diabete conclamato entro 5-10 anni.</li>
                <li><strong>Svolta Biologica Recente: Teplizumab</strong> (anticorpo monoclonale umanizzato non-mitogenico anti-CD3) approvato per ritardare di oltre 2-3 anni l'esordio del diabete clinico nei soggetti asintomatici ad alto rischio!</li>
              </ul>
            </div>

          </div>

        </section>

        {/* -----------------------------------------------------------------------
            SEZIONE 7.6: SINTESI MASTER, QUIZ D'ESAME & FLASHCARD CUMULATIVE
            ----------------------------------------------------------------------- */}
        <section id="sec-7-verifica" className="scroll-mt-24 space-y-8">
          
          <div className="border-l-4 border-slate-600 dark:border-slate-400 pl-4 py-1">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
              Sezione 7.6 • Verifica dell'Apprendimento
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
              Sintesi Comparativa Master, Batteria di Quiz d'Esame e Mazzo Flashcard
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Tavola sinottica integrale dei bersagli immunologici e farmacologici del Capitolo VII, 12 flashcards clinico-molecolari per il ripasso attivo e batteria di quiz ufficiali con razionali completi delle Lezioni 29, 30 e 31.
            </p>
          </div>

          {/* TAVOLA COMPARATIVA MASTER DEI MODULI EFFETTORI DEL CAPITOLO VII */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookmarkCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span>Tavola Sinottica Master: Integrazione dei Bersagli Terapeutici del Capitolo VII</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 font-mono border-b border-slate-200 dark:border-slate-800">
                    <th className="p-3">Distretto / Patologia</th>
                    <th className="p-3">Farmaco / Molecola Target</th>
                    <th className="p-3">Bersaglio Intracellulare / Recettore</th>
                    <th className="p-3">Meccanismo d'Azione Immunologico</th>
                    <th className="p-3">Impatto Clinico / Complicanze Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-purple-600 font-mono">Trapianti d'Organo</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Tacrolimus (FK506)</td>
                    <td className="p-3 font-mono">FKBP12 / Calcineurina</td>
                    <td className="p-3">Blocca la defosforilazione di NFAT e la trascrizione di IL-2 (Segnale 1)</td>
                    <td className="p-3">Cardine antirigetto; rischio nefrotossicità e diabete post-trapianto</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-purple-600 font-mono">Trapianti d'Organo</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Belatacept</td>
                    <td className="p-3 font-mono">CD80 / CD86 (APC)</td>
                    <td className="p-3">Proteina di fusione CTLA4-Ig ad alta affinità che blocca il Segnale 2 costimolatorio</td>
                    <td className="p-3">Alternativa non-nefrotossica agli inibitori di calcineurina nel rene</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-rose-600 font-mono">Lupus (LES)</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Belimumab</td>
                    <td className="p-3 font-mono">BAFF (BLyS) solubile</td>
                    <td className="p-3">Inibisce la sopravvivenza e la differenziazione dei linfociti B autoreattivi</td>
                    <td className="p-3">Trattamento approvato per LES attivo e Nefrite Lupica</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-rose-600 font-mono">Lupus (LES)</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Anifrolumab</td>
                    <td className="p-3 font-mono">Subunità IFNAR1</td>
                    <td className="p-3">Anticorpo che blocca il recettore di tutti gli interferoni di Tipo I (IFN-α/β)</td>
                    <td className="p-3">Spegne l'Interferon Signature nelle forme cutanee e articolari di LES</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-amber-600 font-mono">Artrite Reumatoide</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Tocilizumab</td>
                    <td className="p-3 font-mono">IL-6R (solubile e transmembrana)</td>
                    <td className="p-3">Inibisce la via infiammatoria JAK/STAT mediata da IL-6 nel panno sinoviale</td>
                    <td className="p-3">Efficace nell'AR severa e nella prevenzione dell'amiloidosi AA</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-blue-600 font-mono">Sclerosi Multipla</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Natalizumab</td>
                    <td className="p-3 font-mono">Integrina α4 (VLA-4 / α4β1)</td>
                    <td className="p-3">Blocca il legame a VCAM-1 impedendo il passaggio trans-BBB dei linfociti T nel SNC</td>
                    <td className="p-3">Altissima efficacia; rischio letale di PML da riattivazione del virus JC</td>
                  </tr>
                  <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-850/40">
                    <td className="p-3 font-semibold text-emerald-600 font-mono">Diabete Tipo 1</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100">Teplizumab</td>
                    <td className="p-3 font-mono">Catena CD3ε (TCR)</td>
                    <td className="p-3">Anticorpo monoclonale non-FcR legante che induce anergia nei CTL autoreattivi</td>
                    <td className="p-3">Primo farmaco capace di ritardare l'esordio del T1D clinico di 2–3 anni</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* BANCO DI PROVA D'ESAME: QUIZ SECTION UFFICIALE */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Banco di Prova d'Esame: Quiz delle Lezioni 29, 30 e 31
                </h3>
              </div>
              <span className="text-xs font-mono bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full font-semibold">
                {chapter7Questions.length} Quesiti Ufficiali Selezionati
              </span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Quesiti a scelta multipla con razionale biochimico dettagliato per ciascuna opzione corretta ed errata.
            </p>

            <QuizSection 
              customQuestions={chapter7Questions} 
              lessonNumber={29}
              title="Batteria Ufficiale di Quiz d'Esame · Capitolo VII (Trapianti, Tolleranza & Autoimmunità)" 
            />
          </div>

          {/* FLASHCARD PER RIPASSO ATTIVO AD ALTO RENDIMENTO */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Mazzo di Ripasso Attivo: 12 Flashcards Cliniche del Capitolo VII
                </h3>
              </div>
              <span className="text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full">
                Spaced Repetition
              </span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Clicca su ciascuna carta per svelare il meccanismo molecolare, il biomarker o il razionale diagnostico da ripetere ad alta voce prima dell'esame orale.
            </p>

            <FlashcardDeck cards={chapter7Flashcards} />
          </div>

          {/* PONTE FISIOLOGICO DI TRANSIZIONE AL CAPITOLO VIII */}
          <div className="bg-gradient-to-r from-red-950 via-rose-950 to-slate-900 text-white rounded-2xl p-6 border border-red-800/40 shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-rose-300 text-xs font-mono uppercase tracking-wider font-bold">
              <span>Ponte Fisiologico di Transizione</span>
              <ArrowRight className="w-4 h-4" />
              <span>Capitolo VIII: Immunologia Oncologica, Terapie Cellulari CAR-T & Pandemia da HIV/AIDS</span>
            </div>

            <h3 className="text-xl font-bold text-white">
              Dal Fallimento della Tolleranza Verso il Self all'Immunoterapia Oncologica e le Immunodeficienze Acquisite
            </h3>

            <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed">
              Nel Capitolo VII abbiamo esplorato come il sistema immunitario mantenga la tolleranza verso i tessuti propri e come la sua rottura provochi rigetto o malattie autoimmuni sistemiche e d'organo. Nel conclusivo <strong>Capitolo VIII</strong>, rovesceremo la prospettiva affrontando le grandi sfide della medicina moderna: studieremo l'<strong>immunosorveglianza oncologica</strong>, il ciclo in 7 fasi cancro-immunità e la teoria dell'<strong>immunoediting (3E: Eliminazione, Equilibrio, Fuga)</strong>; l'ingegneria dei <strong>checkpoint inibitori (anti-CTLA-4 Ipilimumab, anti-PD-1 Nivolumab/Pembrolizumab)</strong> e le <strong>cellule CAR-T</strong> di seconda e terza generazione con gestione della tempesta citochinica (CRS via Tocilizumab); per giungere infine alla virologia immunologica dell'<strong>HIV-1/AIDS</strong>, dal tropismo recettoriale CD4/CCR5/CXCR4 e la deplezione dei linfociti T helper fino alla deplezione del reservoir latente e le strategie terapeutiche HAART.
            </p>

            <div className="pt-2 flex justify-end">
              <span className="text-xs font-mono text-rose-300 bg-rose-950/60 px-3 py-1.5 rounded-lg border border-rose-700/50 flex items-center gap-1.5">
                <span>Verso il Capitolo VIII</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
};
