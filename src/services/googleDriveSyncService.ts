/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Google Drive Sync Service
 * Sincronizza automaticamente lo stato delle sessioni, la cronologia dei quiz
 * e le statistiche di padronanza del manuale su Google Drive.
 */

import { getAccessToken } from './googleAuthService';
import { StoredActiveSession, StoredQuizHistory } from './quizStorageService';

export interface DriveStudyData {
  version: number;
  updatedAt: number;
  userEmail?: string;
  quizHistory: StoredQuizHistory;
  activeSession: StoredActiveSession | null;
}

const DRIVE_FILE_NAME = 'immunologia_study_data.json';

export const GoogleDriveSyncService = {
  /**
   * Cerca l'ID del file di studio su Google Drive
   */
  async findFileId(token: string): Promise<string | null> {
    try {
      const query = encodeURIComponent(`name = '${DRIVE_FILE_NAME}' and trashed = false`);
      const res = await fetch(
        `https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id, name, modifiedTime)`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      if (!res.ok) {
        console.warn('Errore ricerca file su Google Drive:', res.status, res.statusText);
        return null;
      }
      const json = await res.json();
      if (json.files && json.files.length > 0) {
        return json.files[0].id;
      }
      return null;
    } catch (err) {
      console.warn('Eccezione durante findFileId su Drive:', err);
      return null;
    }
  },

  /**
   * Carica i dati di studio salvati su Google Drive
   */
  async loadStudyDataFromDrive(): Promise<{
    success: boolean;
    data?: DriveStudyData;
    error?: string;
  }> {
    const token = await getAccessToken();
    if (!token) {
      return { success: false, error: 'Autenticazione richiesta per accedere a Google Drive' };
    }

    try {
      const fileId = await this.findFileId(token);
      if (!fileId) {
        return { success: true, data: undefined }; // Nessun file ancora creato
      }

      const res = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!res.ok) {
        return { success: false, error: `Errore caricamento file: ${res.statusText}` };
      }

      const data: DriveStudyData = await res.json();
      return { success: true, data };
    } catch (err: any) {
      console.error('Errore durante il download da Google Drive:', err);
      return { success: false, error: err.message || 'Errore di connessione a Google Drive' };
    }
  },

  /**
   * Salva o aggiorna i dati di studio su Google Drive
   */
  async saveStudyDataToDrive(data: DriveStudyData): Promise<{
    success: boolean;
    fileId?: string;
    error?: string;
  }> {
    const token = await getAccessToken();
    if (!token) {
      return { success: false, error: 'Autenticazione richiesta per salvare su Google Drive' };
    }

    try {
      const fileId = await this.findFileId(token);

      if (fileId) {
        // Aggiorna file esistente (PATCH media)
        const res = await fetch(
          `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`,
          {
            method: 'PATCH',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }
        );

        if (!res.ok) {
          return { success: false, error: `Errore salvataggio file su Drive: ${res.statusText}` };
        }

        const json = await res.json();
        return { success: true, fileId: json.id };
      } else {
        // Crea nuovo file con multipart upload
        const metadata = {
          name: DRIVE_FILE_NAME,
          description: 'Salvataggi automatici del Manuale di Immunologia Generale e Clinica (Quiz & Progressi)',
          mimeType: 'application/json'
        };

        const boundary = '-------immunologia_drive_boundary_' + Date.now();
        const delimiter = `\r\n--${boundary}\r\n`;
        const closeDelimiter = `\r\n--${boundary}--`;

        const multipartBody =
          delimiter +
          'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
          JSON.stringify(metadata) +
          delimiter +
          'Content-Type: application/json\r\n\r\n' +
          JSON.stringify(data) +
          closeDelimiter;

        const res = await fetch(
          'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': `multipart/related; boundary=${boundary}`
            },
            body: multipartBody
          }
        );

        if (!res.ok) {
          return { success: false, error: `Errore creazione file su Drive: ${res.statusText}` };
        }

        const json = await res.json();
        return { success: true, fileId: json.id };
      }
    } catch (err: any) {
      console.error('Errore durante il salvataggio su Google Drive:', err);
      return { success: false, error: err.message || 'Errore di connessione a Google Drive' };
    }
  }
};
