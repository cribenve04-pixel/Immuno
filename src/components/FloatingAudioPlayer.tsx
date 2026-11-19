import React, { useState } from 'react';
import { useTTS } from '../context/TTSContext';
import {
  Play,
  Pause,
  Square,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Gauge,
  UserCheck,
  MousePointerClick,
  Minimize2,
  Maximize2,
  X,
  Headphones,
  Sparkles,
  Info
} from 'lucide-react';

export const FloatingAudioPlayer: React.FC = () => {
  const {
    isPlaying,
    isPaused,
    rate,
    volume,
    voice,
    availableVoices,
    currentSegmentIndex,
    totalSegments,
    currentSegment,
    isClickToReadActive,
    isPlayerVisible,
    isMinimized,
    play,
    pause,
    resume,
    stop,
    skipNext,
    skipPrev,
    toggleClickToRead,
    togglePlayerVisible,
    toggleMinimized,
    setRate,
    setVolume,
    setVoice
  } = useTTS();

  const [showVoiceMenu, setShowVoiceMenu] = useState<boolean>(false);
  const [showRateMenu, setShowRateMenu] = useState<boolean>(false);

  if (!isPlayerVisible) {
    return null;
  }

  // Filter Italian voices for the picker
  const italianVoices = availableVoices.filter(v => v.lang.startsWith('it') || v.lang.includes('IT'));
  const otherVoices = availableVoices.filter(v => !v.lang.startsWith('it') && !v.lang.includes('IT'));

  const rates = [0.75, 1.0, 1.25, 1.5, 2.0];
  const progressPct = totalSegments > 0 && currentSegmentIndex >= 0 
    ? Math.round(((currentSegmentIndex + 1) / totalSegments) * 100) 
    : 0;

  // Minimized Floating Audio Pill
  if (isMinimized) {
    return (
      <div
        id="tts-floating-player"
        role="region"
        aria-label="Lettore Vocale Ridotto"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 p-2 px-3 bg-slate-900/95 dark:bg-slate-950/95 text-white backdrop-blur-md rounded-full shadow-2xl border border-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-300"
      >
        <button
          onClick={toggleMinimized}
          className="flex items-center gap-2 text-xs font-semibold hover:text-blue-400 transition-colors cursor-pointer"
          title="Espandi lettore vocale"
        >
          <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white">
            <Headphones className="w-4 h-4" />
            {isPlaying && !isPaused && (
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
            )}
          </div>
          <span className="font-mono text-[11px] max-w-[120px] truncate">
            {isPlaying ? `${progressPct}% · ${currentSegment?.label || 'In ascolto'}` : 'Lettore TTS'}
          </span>
        </button>

        <button
          onClick={() => {
            if (isPlaying && !isPaused) pause();
            else if (isPaused) resume();
            else play();
          }}
          className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label={isPlaying && !isPaused ? 'Pausa lettura' : 'Avvia lettura'}
        >
          {isPlaying && !isPaused ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
        </button>

        <button
          onClick={toggleMinimized}
          className="p-1 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer"
          title="Ingrandisci controlli"
          aria-label="Ingrandisci barra audio"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={togglePlayerVisible}
          className="p-1 rounded-full text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
          title="Chiudi lettore"
          aria-label="Chiudi lettore vocale"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <aside
      id="tts-floating-player"
      role="region"
      aria-label="Pannello Sintesi Vocale e Lettura Accessibile"
      className="fixed bottom-4 left-3 right-3 sm:left-auto sm:right-6 sm:w-[580px] z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-4 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      {/* Top Bar: Progress, Title and Window actions */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-150 dark:border-slate-800 pb-2.5 mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
            <Headphones className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                Sintesi Vocale Intelligente (TTS)
              </span>
              {currentSegment && (
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  {currentSegment.label}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {totalSegments > 0 && (
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mr-2">
              {currentSegmentIndex >= 0 ? currentSegmentIndex + 1 : 0} / {totalSegments} ({progressPct}%)
            </span>
          )}

          {/* Minimize Button */}
          <button
            onClick={toggleMinimized}
            title="Riduci a icona fluttuante"
            aria-label="Riduci lettore a icona"
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <Minimize2 className="w-3.5 h-3.5" />
          </button>

          {/* Close Button */}
          <button
            onClick={() => {
              stop();
              togglePlayerVisible();
            }}
            title="Chiudi lettore audio"
            aria-label="Chiudi lettore audio"
            className="p-1 rounded-md text-slate-400 hover:text-rose-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-3">
        <div
          className="bg-blue-600 h-full transition-all duration-300 rounded-full"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Snippet Ticker of Active Segment */}
      <div className="mb-3 px-3 py-2 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-800 text-xs">
        <div className="flex items-start gap-2">
          {isPlaying && !isPaused ? (
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping mt-1 shrink-0" />
          ) : (
            <span className="w-2 h-2 rounded-full bg-slate-400 mt-1 shrink-0" />
          )}
          <p className="text-slate-700 dark:text-slate-300 line-clamp-2 leading-relaxed italic">
            {currentSegment 
              ? `"${currentSegment.text.slice(0, 160)}${currentSegment.text.length > 160 ? '...' : ''}"`
              : "Premi Play per avviare la lettura dall'inizio o fai clic su qualsiasi paragrafo col Click-to-Read."}
          </p>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Main Transport Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={skipPrev}
            disabled={currentSegmentIndex <= 0}
            title="Paragrafo Precedente"
            aria-label="Vai al paragrafo precedente"
            className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 transition-colors cursor-pointer"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              if (isPlaying && !isPaused) pause();
              else if (isPaused) resume();
              else play();
            }}
            title={isPlaying && !isPaused ? "Pausa lettura (Spazio)" : "Avvia / Riprendi lettura"}
            aria-label={isPlaying && !isPaused ? "Pausa lettura" : "Avvia lettura"}
            className="p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-md hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
          >
            {isPlaying && !isPaused ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </button>

          <button
            onClick={skipNext}
            disabled={totalSegments === 0 || currentSegmentIndex >= totalSegments - 1}
            title="Paragrafo Successivo"
            aria-label="Vai al paragrafo successivo"
            className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 transition-colors cursor-pointer"
          >
            <SkipForward className="w-4 h-4" />
          </button>

          <button
            onClick={stop}
            title="Interrompi e azzera evidenziazione"
            aria-label="Ferma lettura"
            className="p-2 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <Square className="w-4 h-4" />
          </button>
        </div>

        {/* Secondary Parameters: Speed, Voice, Click-to-Read, Volume */}
        <div className="flex items-center gap-2">
          {/* Click-to-Read Active Toggle */}
          <button
            onClick={toggleClickToRead}
            title={
              isClickToReadActive
                ? "Click-to-Read ATTIVO: Clicca su qualsiasi testo della pagina per ascoltarlo da quel punto"
                : "Attiva Click-to-Read"
            }
            aria-label="Attiva o disattiva modalità Click-to-Read"
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              isClickToReadActive
                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <MousePointerClick className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Click-to-Read</span>
          </button>

          {/* Speed Selector */}
          <div className="relative">
            <button
              onClick={() => {
                setShowRateMenu(!showRateMenu);
                setShowVoiceMenu(false);
              }}
              title="Velocità di lettura"
              aria-label="Regola velocità di lettura"
              className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-mono font-bold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Gauge className="w-3.5 h-3.5 text-blue-600" />
              <span>{rate}x</span>
            </button>

            {showRateMenu && (
              <div className="absolute bottom-full mb-2 left-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl p-1.5 flex flex-col gap-1 z-60 min-w-[70px]">
                {rates.map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      setRate(r);
                      setShowRateMenu(false);
                    }}
                    className={`px-2.5 py-1 text-xs rounded-md font-mono text-left transition-colors cursor-pointer ${
                      rate === r
                        ? 'bg-blue-600 text-white font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {r}x
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Voice Selector */}
          <div className="relative">
            <button
              onClick={() => {
                setShowVoiceMenu(!showVoiceMenu);
                setShowRateMenu(false);
              }}
              title="Seleziona Voce Italiana"
              aria-label="Seleziona voce di sintesi"
              className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer max-w-[130px] truncate"
            >
              <UserCheck className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span className="truncate">{voice?.name.split(' ')[0] || 'Voce'}</span>
            </button>

            {showVoiceMenu && (
              <div className="absolute bottom-full mb-2 right-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl p-2 z-60 w-64 max-h-60 overflow-y-auto">
                <div className="text-[11px] font-bold text-slate-500 uppercase font-mono px-2 py-1">
                  Voci Italiane ({italianVoices.length})
                </div>
                {italianVoices.length > 0 ? (
                  italianVoices.map((v) => (
                    <button
                      key={v.name}
                      onClick={() => {
                        setVoice(v);
                        setShowVoiceMenu(false);
                      }}
                      className={`w-full px-2.5 py-1.5 text-xs text-left rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                        voice?.name === v.name
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="truncate">{v.name.replace('Microsoft ', '').replace('Google ', '')}</span>
                      {v.name.includes('Natural') && (
                        <span className="text-[9px] px-1 rounded bg-blue-200 text-blue-900 dark:bg-blue-800 dark:text-white shrink-0 ml-1">
                          Naturale
                        </span>
                      )}
                    </button>
                  ))
                ) : (
                  <div className="text-xs text-slate-400 p-2">Nessuna voce italiana dedicata rilevata.</div>
                )}

                {otherVoices.length > 0 && (
                  <>
                    <div className="text-[11px] font-bold text-slate-400 uppercase font-mono px-2 py-1 mt-2 border-t border-slate-150 dark:border-slate-800">
                      Altre Voci di Sistema
                    </div>
                    {otherVoices.slice(0, 5).map((v) => (
                      <button
                        key={v.name}
                        onClick={() => {
                          setVoice(v);
                          setShowVoiceMenu(false);
                        }}
                        className={`w-full px-2.5 py-1 text-xs text-left rounded-md transition-colors truncate cursor-pointer ${
                          voice?.name === v.name
                            ? 'bg-blue-600 text-white font-semibold'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        {v.name} ({v.lang})
                      </button>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>

          {/* Volume Button */}
          <button
            onClick={() => setVolume(volume > 0 ? 0 : 1.0)}
            title={volume === 0 ? "Riattiva audio" : "Muto"}
            aria-label={volume === 0 ? "Riattiva audio" : "Disattiva audio"}
            className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {volume === 0 ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4 text-slate-600 dark:text-slate-300" />}
          </button>
        </div>
      </div>

      {/* Helper Footer Hint */}
      <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-sans">
        <span className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-500" />
          Schemi e tabelle tradotti in spiegazione discorsiva
        </span>
        <span className="font-mono text-[10px]">Scorciatoia: Alt+P (Play/Pausa)</span>
      </div>
    </aside>
  );
};
