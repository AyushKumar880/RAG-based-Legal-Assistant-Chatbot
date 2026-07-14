import React, { useState } from 'react';

export default function SourceCard({ sources }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!sources || sources.length === 0) return null;

  return (
    <div style={{ marginTop: '12px', borderTop: '1px solid #e2e8f0', paddingTop: '8px' }}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          fontSize: '12px',
          fontWeight: 600,
          color: '#2563eb',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span>{isExpanded ? '▼' : '►'}</span>
        <span>Retrieved References ({sources.length} sources)</span>
      </button>

      {isExpanded && (
        <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {sources.map((src, i) => (
            <div
              key={i}
              style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '8px 12px',
                fontSize: '12px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <strong style={{ color: '#0f172a' }}>{src.title}</strong>
                {src.score && (
                  <span style={{ color: '#16a34a', fontWeight: 600 }}>
                    Score: {(src.score * 100).toFixed(0)}%
                  </span>
                )}
              </div>
              <p style={{ color: '#475569', fontStyle: 'italic', margin: 0 }}>
                "{src.snippet}"
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
