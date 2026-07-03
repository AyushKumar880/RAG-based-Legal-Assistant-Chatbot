import React from 'react';

export default function BadgePill({ label, color = '#2563eb', bg = '#eff6ff' }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: '12px',
        fontSize: '11px',
        fontWeight: 600,
        color,
        backgroundColor: bg,
        border: `1px solid ${color}33`,
      }}
    >
      {label}
    </span>
  );
}
