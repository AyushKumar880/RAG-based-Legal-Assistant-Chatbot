import React from 'react';

export default function ConfidenceMeter({ confidence = 0.92 }) {
  const percentage = Math.round(confidence * 100);
  const color = percentage > 80 ? '#10b981' : percentage > 50 ? '#f59e0b' : '#ef4444';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#64748b' }}>
      <span>Confidence:</span>
      <div style={{ width: '40px', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
        <div style={{ width: `${percentage}%`, height: '100%', background: color }} />
      </div>
      <span style={{ fontWeight: 600, color }}>{percentage}%</span>
    </div>
  );
}
