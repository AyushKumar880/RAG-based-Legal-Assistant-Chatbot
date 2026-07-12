import React from 'react';

export default function SearchBar({ value, onChange, placeholder = "Search legal records..." }) {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '8px 12px 8px 32px',
          borderRadius: '8px',
          border: '1px solid #cbd5e1',
          fontSize: '13px',
        }}
      />
      <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}>
        🔍
      </span>
    </div>
  );
}
