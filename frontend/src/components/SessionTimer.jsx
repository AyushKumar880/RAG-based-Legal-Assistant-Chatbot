import React, { useState, useEffect } from 'react';

export default function SessionTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (sec) => {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div style={{ fontSize: '11px', color: '#94a3b8' }}>
      Session Duration: <strong style={{ color: '#0f172a' }}>{format(seconds)}</strong>
    </div>
  );
}
