import { useState } from 'react';

export function useSpeechRecognition() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const start = () => {
    setIsListening(true);
  };

  const stop = () => {
    setIsListening(false);
  };

  return { isListening, transcript, start, stop };
}
