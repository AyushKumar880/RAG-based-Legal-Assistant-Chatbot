import React, { useState } from 'react';

export default function AudioPlayer({ text }) {
  const [playing, setPlaying] = useState(false);

  const toggleSpeech = () => {
    if ('speechSynthesis' in window) {
      if (playing) {
        window.speechSynthesis.cancel();
        setPlaying(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onend = () => setPlaying(false);
        window.speechSynthesis.speak(utterance);
        setPlaying(true);
      }
    }
  };

  return (
    <button
      onClick={toggleSpeech}
      style={{
        padding: '4px 8px',
        fontSize: '11px',
        borderRadius: '4px',
        border: '1px solid #cbd5e1',
        background: '#fff',
        cursor: 'pointer',
      }}
      title="Listen to legal response"
    >
      {playing ? '⏹ Stop Audio' : '🔊 Read Aloud'}
    </button>
  );
}
