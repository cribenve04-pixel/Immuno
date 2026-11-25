/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Google Workspace Auth Service (Firebase Auth + Client-side Token Management)
 * Gestisce l'accesso con account Google e il token in memoria per Google Drive.
 */

import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  User
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

// Inizializza l'app Firebase riutilizzando l'istanza se già presente
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Assicura persistenza locale dell'account Firebase anche su PWA Android installate tramite Chrome
setPersistence(auth, browserLocalPersistence).catch((err) => {
  console.warn('Impossibile impostare browserLocalPersistence:', err);
});

const DRIVE_SCOPE = 'https://www.googleapis.com/auth/drive.file';

const createProvider = (loginHint?: string | null, forceAccountPicker = false) => {
  const p = new GoogleAuthProvider();
  // Scope per Google Drive: accesso solo ai file creati e usati dall'app
  p.addScope(DRIVE_SCOPE);
  const params: Record<string, string> = {};
  if (loginHint && !forceAccountPicker) {
    params.login_hint = loginHint;
  } else if (forceAccountPicker) {
    params.prompt = 'select_account';
  }
  if (Object.keys(params).length > 0) {
    p.setCustomParameters(params);
  }
  return p;
};

// Cache in memoria del token di accesso OAuth (MAI in localStorage/sessionStorage)
let cachedAccessToken: string | null = null;
let isSigningIn = false;

const SNOOZE_STORAGE_KEY = 'immunologia_google_login_snooze_until';
const LAST_SYNC_STORAGE_KEY = 'immunologia_last_drive_sync_at';
export const AUTH_SNOOZE_EVENT = 'immunologia-auth-snooze-change';
const DEFAULT_SNOOZE_DAYS = 7;

export const isGoogleLoginSnoozed = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const raw = localStorage.getItem(SNOOZE_STORAGE_KEY);
    if (!raw) return false;
    const until = parseInt(raw, 10);
    if (isNaN(until)) return false;
    return Date.now() < until;
  } catch {
    return false;
  }
};

export const getGoogleLoginSnoozeUntil = (): number | null => {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(SNOOZE_STORAGE_KEY);
    if (!raw) return null;
    const until = parseInt(raw, 10);
    return !isNaN(until) && Date.now() < until ? until : null;
  } catch {
    return null;
  }
};

export const snoozeGoogleLogin = (days: number = DEFAULT_SNOOZE_DAYS): void => {
  if (typeof window === 'undefined') return;
  try {
    const until = Date.now() + days * 24 * 60 * 60 * 1000;
    localStorage.setItem(SNOOZE_STORAGE_KEY, String(until));
    window.dispatchEvent(new Event(AUTH_SNOOZE_EVENT));
  } catch (err) {
    console.warn('Impossibile salvare la preferenza di salto login:', err);
  }
};

export const clearGoogleLoginSnooze = (): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(SNOOZE_STORAGE_KEY);
    window.dispatchEvent(new Event(AUTH_SNOOZE_EVENT));
  } catch {}
};

export const recordLastDriveSync = (): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LAST_SYNC_STORAGE_KEY, String(Date.now()));
  } catch {}
};

export const getLastDriveSyncTimestamp = (): number | null => {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(LAST_SYNC_STORAGE_KEY);
    if (!raw) return null;
    const ts = parseInt(raw, 10);
    return isNaN(ts) ? null : ts;
  } catch {
    return null;
  }
};

export const initAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void,
  onUserRememberedWithoutToken?: (user: User) => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        // L'utente è già autenticato con Firebase (sessione persistita su Android/Chrome),
        // ma il token OAuth in memoria di Drive verrà richiesto solo su sua azione manuale
        if (onUserRememberedWithoutToken) {
          onUserRememberedWithoutToken(user);
        } else if (onAuthFailure) {
          onAuthFailure();
        }
      }
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

export const googleSignIn = async (
  options?: { forceAccountPicker?: boolean }
): Promise<{ user: User; accessToken: string } | null> => {
  try {
    isSigningIn = true;
    const loginHint = auth.currentUser?.email || null;
    const provider = createProvider(loginHint, Boolean(options?.forceAccountPicker));
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error('Impossibile ottenere il token di accesso OAuth per Google Drive');
    }

    cachedAccessToken = credential.accessToken;
    clearGoogleLoginSnooze();
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error: any) {
    console.error('Errore durante il login con Google:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

export const getAccessToken = async (): Promise<string | null> => {
  return cachedAccessToken;
};

export const hasActiveDriveToken = (): boolean => {
  return Boolean(cachedAccessToken);
};

export const googleSignOut = async (): Promise<void> => {
  await signOut(auth);
  cachedAccessToken = null;
};
