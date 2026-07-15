import React, { useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '6px 10px',
        borderRadius: '6px',
        border: '1px solid #cbd5e1',
        fontSize: '13px',
      }}
      title="Toggle color mode"
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
