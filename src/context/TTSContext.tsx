import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { TTSSegment, extractLectureSegments } from '../utils/ttsDomParser';

interface TTSContextType {
  isPlaying: boolean;
  isPaused: boolean;
  rate: number;
  volume: number;
  voice: SpeechSynthesisVoice | null;
  availableVoices: SpeechSynthesisVoice[];
  currentSegmentIndex: number;
  totalSegments: number;
  currentSegment: TTSSegment | null;
  isClickToReadActive: boolean;
  isPlayerVisible: boolean;
  isMinimized: boolean;
  lastInteractiveAnnounce: string | null;
  play: (startIndex?: number) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  skipNext: () => void;
  skipPrev: () => void;
  readFromElement: (element: HTMLElement) => void;
  speakInteractiveFeedback: (text: string, options?: { priority?: 'urgent' | 'queue'; onEnd?: () => void }) => void;
  toggleClickToRead: () => void;
  togglePlayerVisible: () => void;
  toggleMinimized: () => void;
  setRate: (rate: number) => void;
  setVolume: (volume: number) => void;
  setVoice: (voice: SpeechSynthesisVoice) => void;
  refreshSegments: (container?: HTMLElement) => void;
}

const TTSContext = createContext<TTSContextType | null>(null);

export const TTSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [rate, setRateState] = useState<number>(1.0);
  const [volume, setVolumeState] = useState<number>(1.0);
  const [voice, setVoiceState] = useState<SpeechSynthesisVoice | null>(null);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  
  const [segments, setSegments] = useState<TTSSegment[]>([]);
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState<number>(-1);
  const [isClickToReadActive, setIsClickToReadActive] = useState<boolean>(false);
  const [isPlayerVisible, setIsPlayerVisible] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [lastInteractiveAnnounce, setLastInteractiveAnnounce] = useState<string | null>(null);

  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const currentIndexRef = useRef<number>(-1);
  const isPlayingRef = useRef<boolean>(false);
  const isPausedRef = useRef<boolean>(false);
  const segmentsRef = useRef<TTSSegment[]>([]);
  const rateRef = useRef<number>(1.0);
  const volumeRef = useRef<number>(1.0);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const feedbackDebounceTimer = useRef<number | null>(null);

  // Sync refs
  useEffect(() => { currentIndexRef.current = currentSegmentIndex; }, [currentSegmentIndex]);
  useEffect(() => { isPlayingRef.current = isPlaying; }, [isPlaying]);
  useEffect(() => { isPausedRef.current = isPaused; }, [isPaused]);
  useEffect(() => { segmentsRef.current = segments; }, [segments]);
  useEffect(() => { rateRef.current = rate; }, [rate]);
  useEffect(() => { volumeRef.current = volume; }, [volume]);
  useEffect(() => { voiceRef.current = voice; }, [voice]);

  // Load and filter voices (prioritize Italian)
  const initVoices = useCallback(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    const all = window.speechSynthesis.getVoices();
    if (!all || all.length === 0) return;

    // Filter Italian voices first
    const itVoices = all.filter(v => v.lang.startsWith('it') || v.lang.includes('IT'));
    const nonIt = all.filter(v => !v.lang.startsWith('it') && !v.lang.includes('IT'));
    const sorted = [...itVoices, ...nonIt];

    setAvailableVoices(sorted);

    // Pick best default voice: Italian Natural or Google or first Italian
    if (!voiceRef.current && itVoices.length > 0) {
      const preferred = itVoices.find(v => 
        v.name.includes('Natural') || 
        v.name.includes('Online') || 
        v.name.includes('Google') || 
        v.name.includes('Alice') || 
        v.name.includes('Cosimo') || 
        v.name.includes('Elsa')
      ) || itVoices[0];
      setVoiceState(preferred);
      voiceRef.current = preferred;
    }
  }, []);

  useEffect(() => {
    initVoices();
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = initVoices;
    }
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [initVoices]);

  // Refresh segments from DOM
  const refreshSegments = useCallback((container?: HTMLElement) => {
    const root = container || document.querySelector('.unified-lecture-view') || document.querySelector('main');
    if (!root) return;
    const extracted = extractLectureSegments(root as HTMLElement);
    setSegments(extracted);
    segmentsRef.current = extracted;
  }, []);

  // Visual highlighting and smooth scrolling
  const highlightElement = useCallback((element: HTMLElement) => {
    // Clean all previous highlights
    document.querySelectorAll('.tts-active-reading').forEach(el => {
      el.classList.remove(
        'tts-active-reading',
        'border-l-4',
        'border-blue-600',
        'bg-blue-50/80',
        'dark:bg-blue-950/40',
        'pl-3',
        'rounded-r-lg',
        'transition-all',
        'duration-300',
        'shadow-xs'
      );
      // Remove speech badge if injected
      el.querySelector('.tts-soundwave-badge')?.remove();
    });

    // Add active highlight
    element.classList.add(
      'tts-active-reading',
      'border-l-4',
      'border-blue-600',
      'bg-blue-50/80',
      'dark:bg-blue-950/40',
      'pl-3',
      'rounded-r-lg',
      'transition-all',
      'duration-300',
      'shadow-xs'
    );

    // Inject temporary subtle indicator badge
    const badge = document.createElement('span');
    badge.className = 'tts-soundwave-badge inline-flex items-center gap-1 ml-2 text-[10px] font-mono font-bold text-blue-600 bg-blue-100 dark:bg-blue-900/60 dark:text-blue-300 px-1.5 py-0.5 rounded-full animate-pulse select-none';
    badge.innerHTML = '🔊 In ascolto';
    if (element.tagName.toLowerCase().startsWith('h') || element.tagName.toLowerCase() === 'p') {
      element.appendChild(badge);
    }

    // Smooth scroll centering element
    try {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch {
      element.scrollIntoView();
    }
  }, []);

  const clearHighlight = useCallback(() => {
    document.querySelectorAll('.tts-active-reading').forEach(el => {
      el.classList.remove(
        'tts-active-reading',
        'border-l-4',
        'border-blue-600',
        'bg-blue-50/80',
        'dark:bg-blue-950/40',
        'pl-3',
        'rounded-r-lg',
        'transition-all',
        'duration-300',
        'shadow-xs'
      );
      el.querySelector('.tts-soundwave-badge')?.remove();
    });
  }, []);

  // Speak segment at specific index
  const speakSegmentAtIndex = useCallback((idx: number) => {
    if (!window.speechSynthesis) return;
    const segs = segmentsRef.current;
    if (idx < 0 || idx >= segs.length) {
      // Completed reading all segments
      setIsPlaying(false);
      setIsPaused(false);
      clearHighlight();
      setCurrentSegmentIndex(-1);
      return;
    }

    window.speechSynthesis.cancel();

    const seg = segs[idx];
    setCurrentSegmentIndex(idx);
    highlightElement(seg.element);

    const utter = new SpeechSynthesisUtterance(seg.text);
    activeUtteranceRef.current = utter;

    utter.lang = 'it-IT';
    if (voiceRef.current) {
      utter.voice = voiceRef.current;
    }
    utter.rate = rateRef.current;
    utter.volume = volumeRef.current;

    utter.onend = () => {
      if (isPlayingRef.current && !isPausedRef.current) {
        // Automatically advance to next segment
        speakSegmentAtIndex(idx + 1);
      }
    };

    utter.onerror = (e) => {
      // Ignore user-initiated cancellation
      if (e.error === 'canceled' || e.error === 'interrupted') return;
      console.warn('TTS Utterance warning:', e);
      if (isPlayingRef.current) {
        speakSegmentAtIndex(idx + 1);
      }
    };

    window.speechSynthesis.speak(utter);
  }, [highlightElement, clearHighlight]);

  // Main controls
  const play = useCallback((startIndex?: number) => {
    if (segmentsRef.current.length === 0) {
      refreshSegments();
    }

    const nextIndex = startIndex !== undefined 
      ? startIndex 
      : currentIndexRef.current >= 0 
        ? currentIndexRef.current 
        : 0;

    setIsPlaying(true);
    setIsPaused(false);
    setIsPlayerVisible(true);
    speakSegmentAtIndex(nextIndex);
  }, [refreshSegments, speakSegmentAtIndex]);

  const pause = useCallback(() => {
    if (window.speechSynthesis && isPlayingRef.current) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }, []);

  const resume = useCallback(() => {
    if (window.speechSynthesis && isPausedRef.current) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      play();
    }
  }, [play]);

  const stop = useCallback(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
    clearHighlight();
    activeUtteranceRef.current = null;
  }, [clearHighlight]);

  const skipNext = useCallback(() => {
    const nextIdx = Math.min(segmentsRef.current.length - 1, currentIndexRef.current + 1);
    play(nextIdx);
  }, [play]);

  const skipPrev = useCallback(() => {
    const prevIdx = Math.max(0, currentIndexRef.current - 1);
    play(prevIdx);
  }, [play]);

  // Click-to-Read handler
  const readFromElement = useCallback((targetElement: HTMLElement) => {
    if (segmentsRef.current.length === 0) {
      refreshSegments();
    }

    // Find closest segment element
    const segs = segmentsRef.current;
    let foundIndex = segs.findIndex(s => s.element === targetElement || s.element.contains(targetElement) || targetElement.contains(s.element));

    if (foundIndex === -1) {
      // Find by data-tts-id
      const ttsId = targetElement.closest('[data-tts-id]')?.getAttribute('data-tts-id');
      if (ttsId) {
        foundIndex = segs.findIndex(s => s.id === ttsId);
      }
    }

    if (foundIndex !== -1) {
      play(foundIndex);
    } else {
      // Direct raw text fallback if outside standard segments
      const text = targetElement.textContent?.trim();
      if (text && text.length > 3) {
        stop();
        setIsPlaying(true);
        setIsPlayerVisible(true);
        highlightElement(targetElement);

        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'it-IT';
        if (voiceRef.current) utter.voice = voiceRef.current;
        utter.rate = rateRef.current;
        utter.volume = volumeRef.current;
        utter.onend = () => {
          clearHighlight();
          setIsPlaying(false);
        };
        window.speechSynthesis.speak(utter);
      }
    }
  }, [refreshSegments, play, stop, highlightElement, clearHighlight]);

  // Interactive Simulator Feedback (Real-time slider / What-If voice explanations)
  const speakInteractiveFeedback = useCallback((text: string, options?: { priority?: 'urgent' | 'queue'; onEnd?: () => void }) => {
    if (!window.speechSynthesis) return;

    // Debounce slider updates to avoid sound cluttering
    if (feedbackDebounceTimer.current) {
      window.clearTimeout(feedbackDebounceTimer.current);
    }

    feedbackDebounceTimer.current = window.setTimeout(() => {
      setLastInteractiveAnnounce(text);

      // Cancel current reading or announce over it
      window.speechSynthesis.cancel();
      setIsPlaying(true);
      setIsPlayerVisible(true);

      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'it-IT';
      if (voiceRef.current) utter.voice = voiceRef.current;
      utter.rate = Math.min(1.2, rateRef.current);
      utter.volume = volumeRef.current;

      utter.onend = () => {
        if (options?.onEnd) options.onEnd();
      };

      window.speechSynthesis.speak(utter);
    }, 200);
  }, []);

  const toggleClickToRead = useCallback(() => {
    setIsClickToReadActive(prev => !prev);
  }, []);

  const togglePlayerVisible = useCallback(() => {
    setIsPlayerVisible(prev => !prev);
  }, []);

  const toggleMinimized = useCallback(() => {
    setIsMinimized(prev => !prev);
  }, []);

  const setRate = useCallback((newRate: number) => {
    setRateState(newRate);
    rateRef.current = newRate;
    // If currently speaking, restart current segment with new rate
    if (isPlayingRef.current && !isPausedRef.current && currentIndexRef.current >= 0) {
      speakSegmentAtIndex(currentIndexRef.current);
    }
  }, [speakSegmentAtIndex]);

  const setVolume = useCallback((newVol: number) => {
    setVolumeState(newVol);
    volumeRef.current = newVol;
  }, []);

  const setVoice = useCallback((newVoice: SpeechSynthesisVoice) => {
    setVoiceState(newVoice);
    voiceRef.current = newVoice;
    if (isPlayingRef.current && !isPausedRef.current && currentIndexRef.current >= 0) {
      speakSegmentAtIndex(currentIndexRef.current);
    }
  }, [speakSegmentAtIndex]);

  // Click-to-Read DOM event binding
  useEffect(() => {
    if (!isClickToReadActive) return;

    const handleDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Ignore player UI clicks or buttons
      if (
        target.closest('#tts-floating-player') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('a') ||
        target.closest('nav') ||
        target.closest('[role="dialog"]')
      ) {
        return;
      }

      // If clicked on readable content inside article/main
      const readable = target.closest('p, h1, h2, h3, h4, li, blockquote, [data-speech-text]') as HTMLElement | null;
      if (readable) {
        readFromElement(readable);
      }
    };

    document.addEventListener('click', handleDocClick);
    return () => {
      document.removeEventListener('click', handleDocClick);
    };
  }, [isClickToReadActive, readFromElement]);

  const currentSegment = currentSegmentIndex >= 0 && currentSegmentIndex < segments.length
    ? segments[currentSegmentIndex]
    : null;

  return (
    <TTSContext.Provider
      value={{
        isPlaying,
        isPaused,
        rate,
        volume,
        voice,
        availableVoices,
        currentSegmentIndex,
        totalSegments: segments.length,
        currentSegment,
        isClickToReadActive,
        isPlayerVisible,
        isMinimized,
        lastInteractiveAnnounce,
        play,
        pause,
        resume,
        stop,
        skipNext,
        skipPrev,
        readFromElement,
        speakInteractiveFeedback,
        toggleClickToRead,
        togglePlayerVisible,
        toggleMinimized,
        setRate,
        setVolume,
        setVoice,
        refreshSegments
      }}
    >
      {children}
    </TTSContext.Provider>
  );
};

export const useTTS = (): TTSContextType => {
  const context = useContext(TTSContext);
  if (!context) {
    return {
      isPlaying: false,
      isPaused: false,
      rate: 1,
      volume: 1,
      voice: null,
      availableVoices: [],
      currentSegmentIndex: -1,
      totalSegments: 0,
      currentSegment: null,
      isClickToReadActive: false,
      isPlayerVisible: false,
      isMinimized: false,
      lastInteractiveAnnounce: null,
      play: () => {},
      pause: () => {},
      resume: () => {},
      stop: () => {},
      skipNext: () => {},
      skipPrev: () => {},
      readFromElement: () => {},
      speakInteractiveFeedback: () => {},
      toggleClickToRead: () => {},
      togglePlayerVisible: () => {},
      toggleMinimized: () => {},
      setRate: () => {},
      setVolume: () => {},
      setVoice: () => {},
      refreshSegments: () => {}
    };
  }
  return context;
};
