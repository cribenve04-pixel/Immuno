import React, { useState, useEffect, useRef } from 'react';
import { User } from 'firebase/auth';
import {
  initAuth,
  googleSignIn,
  googleSignOut,
  hasActiveDriveToken,
  isGoogleLoginSnoozed,
  snoozeGoogleLogin,
  clearGoogleLoginSnooze,
  recordLastDriveSync,
  getLastDriveSyncTimestamp,
  AUTH_SNOOZE_EVENT
} from '../services/googleAuthService';
import { QuizStorageService } from '../services/quizStorageService';
import { Cloud, CloudOff, Check, RefreshCw, LogOut, ChevronDown, Clock } from 'lucide-react';

interface GoogleAccountButtonProps {
  onSyncComplete?: () => void;
  compact?: boolean;
  showSnoozeOption?: boolean;
}

function formatSyncTime(ts: number | null): string | null {
  if (!ts) return null;
  try {
    const d = new Date(ts);
    const now = new Date();
    const isToday =
      d.getDate() === now.getDate() &&
      d.getMonth() === now.getMonth() &&
      d.getFullYear() === now.getFullYear();
    const timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return isToday ? `Oggi, ${timeStr}` : `${d.toLocaleDateString([], { day: '2-digit', month: '2-digit' })} ${timeStr}`;
  } catch {
    return null;
  }
}

export const GoogleAccountButton: React.FC<GoogleAccountButtonProps> = ({
  onSyncComplete,
  compact = false,
  showSnoozeOption = false
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [hasDriveToken, setHasDriveToken] = useState<boolean>(() => hasActiveDriveToken());
  const [isSnoozed, setIsSnoozed] = useState<boolean>(() => isGoogleLoginSnoozed());
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [lastSyncTime, setLastSyncTime] = useState<string | null>(() =>
    formatSyncTime(getLastDriveSyncTimestamp())
  );
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleSnoozeChange = () => {
      setIsSnoozed(isGoogleLoginSnoozed());
    };
    window.addEventListener(AUTH_SNOOZE_EVENT, handleSnoozeChange);
    return () => window.removeEventListener(AUTH_SNOOZE_EVENT, handleSnoozeChange);
  }, []);

  useEffect(() => {
    const unsubscribe = initAuth(
      async (authUser, _token) => {
        setUser(authUser);
        setHasDriveToken(true);
        // Se il token Drive è attivo in memoria, sincronizza automaticamente
        try {
          setIsSyncing(true);
          const syncRes = await QuizStorageService.syncWithGoogleDrive();
          if (syncRes.success) {
            recordLastDriveSync();
            setLastSyncTime(formatSyncTime(Date.now()));
          }
          if (onSyncComplete) onSyncComplete();
        } catch (err) {
          console.warn('Errore sync iniziale Drive:', err);
        } finally {
          setIsSyncing(false);
        }
      },
      () => {
        setUser(null);
        setHasDriveToken(false);
      },
      (rememberedUser) => {
        // Su Android/PWA riaperta: ricorda l'account Google salvato da Firebase
        // senza forzare di nuovo il popup di login; i progressi restano salvati in locale
        setUser(rememberedUser);
        setHasDriveToken(false);
      }
    );

    return () => unsubscribe();
  }, [onSyncComplete]);

  // Chiudi menu al clic esterno
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpenMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogin = async (forceAccountPicker = false) => {
    setIsLoggingIn(true);
    try {
      const result = await googleSignIn({ forceAccountPicker });
      if (result) {
        setUser(result.user);
        setHasDriveToken(true);
        setIsSyncing(true);
        const syncResult = await QuizStorageService.syncWithGoogleDrive();
        if (syncResult.success) {
          recordLastDriveSync();
          setLastSyncTime(formatSyncTime(Date.now()));
        }
        if (onSyncComplete) onSyncComplete();
      }
    } catch (err) {
      console.error('Login fallito:', err);
    } finally {
      setIsLoggingIn(false);
      setIsSyncing(false);
    }
  };

  const handleManualSync = async () => {
    if (!hasDriveToken) {
      // Riconnette Drive con 1 tap usando login_hint dell'account già ricordato
      await handleLogin(false);
      return;
    }
    setIsSyncing(true);
    try {
      const res = await QuizStorageService.syncWithGoogleDrive();
      if (res.success) {
        recordLastDriveSync();
        setLastSyncTime(formatSyncTime(Date.now()));
      }
      if (onSyncComplete) onSyncComplete();
    } catch (err) {
      console.error('Errore sincronizzazione manuale:', err);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await googleSignOut();
      setUser(null);
      setHasDriveToken(false);
      setIsOpenMenu(false);
    } catch (err) {
      console.error('Errore disconnessione:', err);
    }
  };

  // Utente non loggato
  if (!user) {
    return (
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => handleLogin(false)}
          disabled={isLoggingIn}
          title={
            isSnoozed
              ? 'Login Google saltato temporaneamente — clicca se vuoi sincronizzare con Drive'
              : 'Accedi con Google per sincronizzare i salvataggi su Drive'
          }
          className={`p-2 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer disabled:opacity-50 border ${
            isSnoozed
              ? 'bg-slate-100/80 dark:bg-slate-800/70 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-200/80'
              : 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700'
          }`}
        >
          {/* Google G Logo SVG */}
          <svg className={`w-4 h-4 sm:w-3.5 sm:h-3.5 shrink-0 ${isSnoozed ? 'opacity-60' : ''}`} viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span className={compact ? 'hidden md:inline' : 'inline'}>
            {isLoggingIn ? 'Accesso...' : isSnoozed ? 'Drive' : 'Accedi'}
          </span>
        </button>

        {showSnoozeOption && !isSnoozed && (
          <button
            type="button"
            onClick={() => snoozeGoogleLogin(7)}
            title="Salta il login con Google per 7 giorni e salva in locale sul telefono"
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            Salta per 7 gg
          </button>
        )}
      </div>
    );
  }

  // Utente autenticato (ricordato da Firebase o con token Drive attivo)
  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        title={
          hasDriveToken
            ? `Account Google (${user.email}) · Drive sincronizzato`
            : `Account ricordato (${user.email}) · Salvataggio locale attivo`
        }
        className="px-2 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
      >
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.displayName || 'Utente'}
            className="w-4 h-4 rounded-full object-cover shrink-0"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold shrink-0">
            {user.email ? user.email.charAt(0).toUpperCase() : 'U'}
          </div>
        )}

        <div className="flex items-center gap-1">
          {hasDriveToken ? (
            <Cloud className={`w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 ${isSyncing ? 'animate-spin' : ''}`} />
          ) : (
            <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          )}
          <span
            className={`hidden sm:inline font-bold ${
              hasDriveToken
                ? 'text-emerald-700 dark:text-emerald-300'
                : 'text-slate-700 dark:text-slate-300'
            }`}
          >
            {hasDriveToken ? 'Drive' : 'Locale'}
          </span>
        </div>

        <ChevronDown className="w-3 h-3 text-slate-400 shrink-0" />
      </button>

      {/* Menu a comparsa */}
      {isOpenMenu && (
        <div className="absolute right-0 mt-2 w-68 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl z-50 p-3 space-y-3 text-xs animate-in fade-in zoom-in-95">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
            <div className="font-bold text-slate-900 dark:text-slate-100 truncate">
              {user.displayName || 'Utente Google'}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
              {user.email}
            </div>
          </div>

          {hasDriveToken ? (
            <div className="p-2.5 rounded-lg bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[11px] text-emerald-900 dark:text-emerald-200 space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Sincronizzazione Drive Attiva</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                I tuoi progressi, le statistiche e le sessioni sono salvati automaticamente su Google Drive.
              </p>
              {lastSyncTime && (
                <div className="text-[10px] text-emerald-700 dark:text-emerald-400 pt-0.5">
                  Ultimo sync: {lastSyncTime}
                </div>
              )}
            </div>
          ) : (
            <div className="p-2.5 rounded-lg bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-[11px] text-blue-900 dark:text-blue-200 space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <CloudOff className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Accesso Ricordato (Modalità Locale)</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-snug">
                I progressi si salvano automaticamente sul telefono senza rifare il login. Premi sotto solo quando vuoi sincronizzare con Drive.
              </p>
              {lastSyncTime && (
                <div className="text-[10px] text-blue-700 dark:text-blue-400 pt-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>Ultimo sync Drive: {lastSyncTime}</span>
                </div>
              )}
            </div>
          )}

          <div className="space-y-1.5">
            <button
              onClick={handleManualSync}
              disabled={isSyncing || isLoggingIn}
              className="w-full px-3 py-2 bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-lg font-semibold flex items-center justify-between transition-colors cursor-pointer disabled:opacity-50"
            >
              <div className="flex items-center gap-2">
                <RefreshCw className={`w-3.5 h-3.5 ${isSyncing || isLoggingIn ? 'animate-spin' : ''}`} />
                <span>
                  {isLoggingIn
                    ? 'Riconnessione...'
                    : isSyncing
                    ? 'Sincronizzazione...'
                    : hasDriveToken
                    ? 'Sincronizza Ora'
                    : 'Ricollega & Sincronizza Drive'}
                </span>
              </div>
              <Cloud className="w-3.5 h-3.5 text-blue-500" />
            </button>

            {isSnoozed && (
              <button
                onClick={() => clearGoogleLoginSnooze()}
                className="w-full px-3 py-1.5 text-[11px] text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium text-left transition-colors cursor-pointer"
              >
                Ripristina promemoria Drive
              </button>
            )}

            <button
              onClick={handleSignOut}
              className="w-full px-3 py-2 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg font-semibold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Disconnetti Account</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
