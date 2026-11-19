import { useCallback } from 'react';
import { useTTS } from '../context/TTSContext';

/**
 * Hook for Interactive Simulators, Sliders, and What-If models.
 * Enables real-time vocal guidance, conditional cause-effect explanations,
 * and auditory feedback on parameter adjustments.
 */
export function useTtsInteractive() {
  const { speakInteractiveFeedback, isPlaying, isPaused, stop } = useTTS();

  /**
   * Explains a conditional what-if scenario with medical cause-and-effect structure.
   * e.g. "Se aumentiamo il blocco di PD-1, allora il clone CD8 riacquista attività citolitica..."
   */
  const explainWhatIf = useCallback((condition: string, consequence: string) => {
    const speechText = `Ragionamento fisiopatologico: Se ${condition}, allora ${consequence}.`;
    speakInteractiveFeedback(speechText, { priority: 'urgent' });
  }, [speakInteractiveFeedback]);

  /**
   * Real-time auditory feedback when a slider or numerical parameter is moved.
   */
  const announceSliderChange = useCallback((parameterLabel: string, value: string | number, physiologicalEffect: string) => {
    const text = `Variazione parametro: ${parameterLabel} impostato a ${value}. Effetto molecolare: ${physiologicalEffect}.`;
    speakInteractiveFeedback(text, { priority: 'urgent' });
  }, [speakInteractiveFeedback]);

  /**
   * Direct vocal explanation of an active simulation state.
   */
  const explainState = useCallback((stateTitle: string, description: string) => {
    const text = `${stateTitle}. ${description}`;
    speakInteractiveFeedback(text, { priority: 'urgent' });
  }, [speakInteractiveFeedback]);

  return {
    explainWhatIf,
    announceSliderChange,
    explainState,
    isPlayingTTS: isPlaying && !isPaused,
    stopTTS: stop
  };
}
