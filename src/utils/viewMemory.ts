/**
 * viewMemory.ts
 * Gestore centralizzato per la persistenza locale (localStorage) dello stato di visualizzazione:
 * - Lezione corrente e lezione secondaria (modalità affiancata)
 * - Tema cromatico (Chiaro, Carta Sepia, Crepuscolo, Notte OLED)
 * - Dimensione carattere / Zoom percentuale (85% - 140%)
 * - Famiglia tipografica (Sans moderno, Serif editoriale, Monospazio)
 * - Interlinea & spaziatura (compatta, normale, ampia)
 * - Stato vista affiancata (split mode) e sincronizzazione scorrimento
 * - Stato apertura barra laterale / Indice TOC
 * - Posizione di scorrimento (scrollY) e ultima sezione attiva per ciascuna lezione
 */

import { ReadingTheme, ReadingFont, ReadingSpacing } from '../components/ReaderSettingsModal';

const STORAGE_KEYS = {
  CURRENT_LESSON: 'immunologia_current_lesson',
  SECONDARY_LESSON: 'immunologia_secondary_lesson',
  IS_SPLIT_MODE: 'immunologia_is_split_mode',
  IS_SPLIT_SYNC: 'immunologia_is_split_sync',
  IS_SIDEBAR_OPEN: 'immunologia_is_sidebar_open',
  FONT_SIZE_LEVEL: 'immunologia_font_size_level',
  THEME: 'immunologia_theme',
  FONT_FAMILY: 'immunologia_font_family',
  SPACING: 'immunologia_spacing',
  LESSON_SCROLL_MAP: 'immunologia_lesson_scroll_map',
  LESSON_SECTION_MAP: 'immunologia_lesson_section_map',
  LAST_SAVED_TIMESTAMP: 'immunologia_memory_timestamp'
} as const;

export interface ViewMemoryState {
  currentLesson: number;
  secondaryLesson: number;
  isSplitMode: boolean;
  isSplitSync: boolean;
  isSidebarOpen: boolean;
  fontSizeLevel: number;
  theme: ReadingTheme;
  fontFamily: ReadingFont;
  spacing: ReadingSpacing;
}

const DEFAULT_VIEW_STATE: ViewMemoryState = {
  currentLesson: 33,
  secondaryLesson: 32,
  isSplitMode: false,
  isSplitSync: false,
  isSidebarOpen: true,
  fontSizeLevel: 100,
  theme: 'light',
  fontFamily: 'sans',
  spacing: 'normal'
};

// Safe helper to read from localStorage
function safeGetItem(key: string): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(key);
  } catch (err) {
    console.warn(`[ViewMemory] Impossibile leggere ${key}:`, err);
    return null;
  }
}

// Safe helper to write to localStorage
function safeSetItem(key: string, value: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, value);
    localStorage.setItem(STORAGE_KEYS.LAST_SAVED_TIMESTAMP, Date.now().toString());
  } catch (err) {
    console.warn(`[ViewMemory] Impossibile salvare ${key}:`, err);
  }
}

// Safe helper to remove from localStorage
function safeRemoveItem(key: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.warn(`[ViewMemory] Impossibile rimuovere ${key}:`, err);
  }
}

/**
 * Carica l'intero stato di visualizzazione salvato in localStorage,
 * con fallback robusti ai valori predefiniti in caso di dati assenti o corrotti.
 */
export function loadViewMemory(): ViewMemoryState {
  if (typeof window === 'undefined') return { ...DEFAULT_VIEW_STATE };

  // 1. Current Lesson (1-33)
  let currentLesson = DEFAULT_VIEW_STATE.currentLesson;
  const rawLesson = safeGetItem(STORAGE_KEYS.CURRENT_LESSON);
  if (rawLesson) {
    const parsed = parseInt(rawLesson, 10);
    if (!isNaN(parsed) && parsed >= 1 && parsed <= 33) {
      currentLesson = parsed;
    }
  }

  // 2. Secondary Lesson (1-33)
  let secondaryLesson = DEFAULT_VIEW_STATE.secondaryLesson;
  const rawSecondary = safeGetItem(STORAGE_KEYS.SECONDARY_LESSON);
  if (rawSecondary) {
    const parsed = parseInt(rawSecondary, 10);
    if (!isNaN(parsed) && parsed >= 1 && parsed <= 33) {
      secondaryLesson = parsed;
    }
  }

  // 3. Split Mode
  let isSplitMode = DEFAULT_VIEW_STATE.isSplitMode;
  const rawSplit = safeGetItem(STORAGE_KEYS.IS_SPLIT_MODE);
  if (rawSplit !== null) {
    isSplitMode = rawSplit === 'true';
  }

  // 4. Split Sync
  let isSplitSync = DEFAULT_VIEW_STATE.isSplitSync;
  const rawSync = safeGetItem(STORAGE_KEYS.IS_SPLIT_SYNC);
  if (rawSync !== null) {
    isSplitSync = rawSync === 'true';
  }

  // 5. Sidebar Open
  let isSidebarOpen = DEFAULT_VIEW_STATE.isSidebarOpen;
  const rawSidebar = safeGetItem(STORAGE_KEYS.IS_SIDEBAR_OPEN);
  if (rawSidebar !== null) {
    isSidebarOpen = rawSidebar === 'true';
  }

  // 6. Font Size Level (85 - 140)
  let fontSizeLevel = DEFAULT_VIEW_STATE.fontSizeLevel;
  const rawFontSize = safeGetItem(STORAGE_KEYS.FONT_SIZE_LEVEL);
  if (rawFontSize) {
    const parsed = parseInt(rawFontSize, 10);
    if (!isNaN(parsed) && parsed >= 85 && parsed <= 160) {
      fontSizeLevel = parsed;
    }
  }

  // 7. Theme
  let theme: ReadingTheme = DEFAULT_VIEW_STATE.theme;
  const rawTheme = safeGetItem(STORAGE_KEYS.THEME) as ReadingTheme | null;
  if (rawTheme && ['light', 'sepia', 'slate', 'night'].includes(rawTheme)) {
    theme = rawTheme;
  }

  // 8. Font Family
  let fontFamily: ReadingFont = DEFAULT_VIEW_STATE.fontFamily;
  const rawFontFamily = safeGetItem(STORAGE_KEYS.FONT_FAMILY) as ReadingFont | null;
  if (rawFontFamily && ['serif', 'sans', 'mono'].includes(rawFontFamily)) {
    fontFamily = rawFontFamily;
  }

  // 9. Spacing
  let spacing: ReadingSpacing = DEFAULT_VIEW_STATE.spacing;
  const rawSpacing = safeGetItem(STORAGE_KEYS.SPACING) as ReadingSpacing | null;
  if (rawSpacing && ['compact', 'normal', 'relaxed'].includes(rawSpacing)) {
    spacing = rawSpacing;
  }

  return {
    currentLesson,
    secondaryLesson,
    isSplitMode,
    isSplitSync,
    isSidebarOpen,
    fontSizeLevel,
    theme,
    fontFamily,
    spacing
  };
}

// --- Specific Save Functions ---

export function saveCurrentLesson(lessonNum: number): void {
  if (lessonNum >= 1 && lessonNum <= 33) {
    safeSetItem(STORAGE_KEYS.CURRENT_LESSON, lessonNum.toString());
  }
}

export function saveSecondaryLesson(lessonNum: number): void {
  if (lessonNum >= 1 && lessonNum <= 33) {
    safeSetItem(STORAGE_KEYS.SECONDARY_LESSON, lessonNum.toString());
  }
}

export function saveSplitMode(isSplit: boolean): void {
  safeSetItem(STORAGE_KEYS.IS_SPLIT_MODE, String(isSplit));
}

export function saveSplitSync(isSync: boolean): void {
  safeSetItem(STORAGE_KEYS.IS_SPLIT_SYNC, String(isSync));
}

export function saveSidebarOpen(isOpen: boolean): void {
  safeSetItem(STORAGE_KEYS.IS_SIDEBAR_OPEN, String(isOpen));
}

export function saveTheme(theme: ReadingTheme): void {
  safeSetItem(STORAGE_KEYS.THEME, theme);
}

export function saveFontSizeLevel(level: number): void {
  safeSetItem(STORAGE_KEYS.FONT_SIZE_LEVEL, level.toString());
}

export function saveFontFamily(font: ReadingFont): void {
  safeSetItem(STORAGE_KEYS.FONT_FAMILY, font);
}

export function saveSpacing(spacing: ReadingSpacing): void {
  safeSetItem(STORAGE_KEYS.SPACING, spacing);
}

// --- Scroll & Section Position Memory per Lesson ---

export function saveLessonScrollPosition(lessonNum: number, scrollY: number, sectionId?: string): void {
  if (typeof window === 'undefined' || lessonNum < 1 || lessonNum > 33) return;

  try {
    // 1. Save scroll offset
    const currentScrollMapRaw = safeGetItem(STORAGE_KEYS.LESSON_SCROLL_MAP);
    const scrollMap: Record<number, number> = currentScrollMapRaw ? JSON.parse(currentScrollMapRaw) : {};
    scrollMap[lessonNum] = Math.max(0, Math.round(scrollY));
    safeSetItem(STORAGE_KEYS.LESSON_SCROLL_MAP, JSON.stringify(scrollMap));

    // 2. Save active section id if provided
    if (sectionId) {
      const currentSectionMapRaw = safeGetItem(STORAGE_KEYS.LESSON_SECTION_MAP);
      const sectionMap: Record<number, string> = currentSectionMapRaw ? JSON.parse(currentSectionMapRaw) : {};
      sectionMap[lessonNum] = sectionId;
      safeSetItem(STORAGE_KEYS.LESSON_SECTION_MAP, JSON.stringify(sectionMap));
    }
  } catch (err) {
    console.warn('[ViewMemory] Errore nel salvataggio della posizione di scroll:', err);
  }
}

export function getLessonScrollPosition(lessonNum: number): { scrollY: number; sectionId: string | null } | null {
  if (typeof window === 'undefined') return null;

  try {
    const scrollMapRaw = safeGetItem(STORAGE_KEYS.LESSON_SCROLL_MAP);
    const sectionMapRaw = safeGetItem(STORAGE_KEYS.LESSON_SECTION_MAP);

    const scrollMap: Record<number, number> = scrollMapRaw ? JSON.parse(scrollMapRaw) : {};
    const sectionMap: Record<number, string> = sectionMapRaw ? JSON.parse(sectionMapRaw) : {};

    const scrollY = scrollMap[lessonNum] ?? 0;
    const sectionId = sectionMap[lessonNum] ?? null;

    if (scrollY > 0 || sectionId) {
      return { scrollY, sectionId };
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Resetta l'intera memoria di visualizzazione alle impostazioni predefinite
 */
export function resetAllViewMemory(): ViewMemoryState {
  Object.values(STORAGE_KEYS).forEach((key) => {
    safeRemoveItem(key);
  });
  return { ...DEFAULT_VIEW_STATE };
}

/**
 * Restituisce data e ora dell'ultimo salvataggio (se presente)
 */
export function getLastSavedTimestamp(): number | null {
  const raw = safeGetItem(STORAGE_KEYS.LAST_SAVED_TIMESTAMP);
  return raw ? parseInt(raw, 10) : null;
}
