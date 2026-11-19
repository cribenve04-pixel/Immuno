/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Quiz Storage Service & Spaced Repetition Memory (Mobile On-The-Go)
 * Gestisce la persistenza locale (localStorage) per sessioni continue,
 * tracciamento degli errori, ripresa sessione e statistiche di padronanza per capitolo.
 */

import { ExamQuestion } from '../data/examQuestions';
import { BOOK_CHAPTERS } from '../data/bookChapters';
import { GoogleDriveSyncService, DriveStudyData } from './googleDriveSyncService';
import { getAccessToken } from './googleAuthService';

export interface StoredQuestionRecord {
  attempts: number;
  correctCount: number;
  lastAnsweredAt: number; // timestamp ms
  isLastCorrect: boolean;
  lastSelectedOption?: number;
}

export type StoredQuizHistory = Record<string, StoredQuestionRecord>;

export interface StoredActiveSession {
  chapterIds: number[];
  selectedProfessorFilters: string[];
  selectedCategoryFilters: string[];
  questionIds: string[];
  currentIndex: number;
  mode: 'continuous' | 'review_errors' | 'standard';
  streak: number;
  startedAt: number;
  answeredHistory: {
    questionId: string;
    selectedIndex: number;
    isCorrect: boolean;
  }[];
}

const STORAGE_KEY_HISTORY = 'immunologia_exam_quiz_history_v2';
const STORAGE_KEY_ACTIVE_SESSION = 'immunologia_exam_quiz_active_session_v2';

export const QuizStorageService = {
  /**
   * Carica la cronologia globale di tutte le domande risposte dall'utente
   */
  getQuizHistory(): StoredQuizHistory {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
      if (!raw) return {};
      return JSON.parse(raw);
    } catch (e) {
      console.warn('Errore lettura quiz history da localStorage:', e);
      return {};
    }
  },

  /**
   * Salva la cronologia completa
   */
  saveQuizHistory(history: StoredQuizHistory): void {
    try {
      localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(history));
    } catch (e) {
      console.warn('Errore salvataggio quiz history in localStorage:', e);
    }
  },

  /**
   * Registra il tentativo di risposta per una specifica domanda
   */
  recordQuestionAnswer(
    questionId: string,
    isCorrect: boolean,
    selectedOption: number
  ): StoredQuizHistory {
    const history = this.getQuizHistory();
    const existing = history[questionId] || {
      attempts: 0,
      correctCount: 0,
      lastAnsweredAt: Date.now(),
      isLastCorrect: false
    };

    history[questionId] = {
      attempts: existing.attempts + 1,
      correctCount: existing.correctCount + (isCorrect ? 1 : 0),
      lastAnsweredAt: Date.now(),
      isLastCorrect: isCorrect,
      lastSelectedOption: selectedOption
    };

    this.saveQuizHistory(history);
    this.triggerDriveAutoSync();
    return history;
  },

  /**
   * Recupera la sessione attiva memorizzata (se presente)
   */
  getActiveSession(): StoredActiveSession | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_ACTIVE_SESSION);
      if (!raw) return null;
      const parsed: StoredActiveSession = JSON.parse(raw);
      // Validazione minima
      if (Array.isArray(parsed.questionIds) && parsed.questionIds.length > 0) {
        return parsed;
      }
      return null;
    } catch (e) {
      console.warn('Errore lettura active session da localStorage:', e);
      return null;
    }
  },

  /**
   * Salva lo stato della sessione attiva (per riprenderla in treno/pause)
   */
  saveActiveSession(session: StoredActiveSession): void {
    try {
      localStorage.setItem(STORAGE_KEY_ACTIVE_SESSION, JSON.stringify(session));
      this.triggerDriveAutoSync();
    } catch (e) {
      console.warn('Errore salvataggio active session in localStorage:', e);
    }
  },

  /**
   * Cancella la sessione attiva corrente (ad es. al completamento o reset manuale)
   */
  clearActiveSession(): void {
    try {
      localStorage.removeItem(STORAGE_KEY_ACTIVE_SESSION);
      this.triggerDriveAutoSync();
    } catch (e) {
      console.warn('Errore eliminazione active session:', e);
    }
  },

  /**
   * Azzera interamente la memoria delle risposte e delle sessioni
   */
  clearAllQuizData(): void {
    try {
      localStorage.removeItem(STORAGE_KEY_HISTORY);
      localStorage.removeItem(STORAGE_KEY_ACTIVE_SESSION);
    } catch (e) {
      console.warn('Errore reset totale dati quiz:', e);
    }
  },

  /**
   * Restituisce gli ID di tutte le domande risposte in modo errato (per il Ripasso Mirato)
   */
  getWrongQuestionIds(): string[] {
    const history = this.getQuizHistory();
    return Object.entries(history)
      .filter(([_, record]) => !record.isLastCorrect)
      .map(([id]) => id);
  },

  /**
   * Calcola le statistiche di padronanza per un dato capitolo
   */
  getChapterStats(
    chapterId: number,
    allQuestions: ExamQuestion[]
  ): { total: number; answered: number; mastered: number; accuracy: number } {
    const chapter = BOOK_CHAPTERS.find((c) => c.id === chapterId);
    if (!chapter) {
      return { total: 0, answered: 0, mastered: 0, accuracy: 0 };
    }

    const chapterQuestions = allQuestions.filter((q) =>
      chapter.lessonNumbers.includes(q.lessonNumber)
    );
    const total = chapterQuestions.length;
    if (total === 0) {
      return { total: 0, answered: 0, mastered: 0, accuracy: 0 };
    }

    const history = this.getQuizHistory();
    let answered = 0;
    let mastered = 0;

    chapterQuestions.forEach((q) => {
      const record = history[q.id];
      if (record && record.attempts > 0) {
        answered++;
        if (record.isLastCorrect) {
          mastered++;
        }
      }
    });

    const accuracy = answered > 0 ? Math.round((mastered / answered) * 100) : 0;
    return { total, answered, mastered, accuracy };
  },

  /**
   * Sincronizzazione automatica asincrona in background con Google Drive
   */
  async triggerDriveAutoSync(): Promise<void> {
    try {
      const token = await getAccessToken();
      if (!token) return; // Utente non autenticato o token non in memoria

      const history = this.getQuizHistory();
      const session = this.getActiveSession();
      const studyData: DriveStudyData = {
        version: 2,
        updatedAt: Date.now(),
        quizHistory: history,
        activeSession: session
      };

      await GoogleDriveSyncService.saveStudyDataToDrive(studyData);
    } catch (err) {
      console.warn('Auto-sync su Google Drive non riuscito:', err);
    }
  },

  /**
   * Sincronizza e unisce i dati locali con quelli salvati su Google Drive
   */
  async syncWithGoogleDrive(): Promise<{
    success: boolean;
    hasRemoteData: boolean;
    error?: string;
  }> {
    const token = await getAccessToken();
    if (!token) {
      return { success: false, hasRemoteData: false, error: 'Accesso Google richiesto' };
    }

    const res = await GoogleDriveSyncService.loadStudyDataFromDrive();
    if (!res.success) {
      return { success: false, hasRemoteData: false, error: res.error };
    }

    if (!res.data) {
      // Nessun dato su Drive: carichiamo i dati locali attuali su Drive
      await this.triggerDriveAutoSync();
      return { success: true, hasRemoteData: false };
    }

    // Unione (Merge) intelligente: combina la cronologia locale e remota
    const localHistory = this.getQuizHistory();
    const remoteHistory = res.data.quizHistory || {};
    const mergedHistory: StoredQuizHistory = { ...localHistory };

    Object.entries(remoteHistory).forEach(([qId, remoteRec]) => {
      const localRec = mergedHistory[qId];
      if (!localRec) {
        mergedHistory[qId] = remoteRec;
      } else {
        // Unisci i dati prendendo la risposta più recente
        const isRemoteNewer = (remoteRec.lastAnsweredAt || 0) > (localRec.lastAnsweredAt || 0);
        mergedHistory[qId] = {
          attempts: Math.max(localRec.attempts, remoteRec.attempts),
          correctCount: Math.max(localRec.correctCount, remoteRec.correctCount),
          lastAnsweredAt: Math.max(localRec.lastAnsweredAt || 0, remoteRec.lastAnsweredAt || 0),
          isLastCorrect: isRemoteNewer ? remoteRec.isLastCorrect : localRec.isLastCorrect,
          lastSelectedOption: isRemoteNewer ? remoteRec.lastSelectedOption : localRec.lastSelectedOption
        };
      }
    });

    this.saveQuizHistory(mergedHistory);

    // Se locale non ha sessione attiva ma remoto sì, ripristina remoto
    const localSession = this.getActiveSession();
    if (!localSession && res.data.activeSession) {
      this.saveActiveSession(res.data.activeSession);
    }

    // Risalva lo stato unificato su Drive
    await this.triggerDriveAutoSync();
    return { success: true, hasRemoteData: true };
  }
};
