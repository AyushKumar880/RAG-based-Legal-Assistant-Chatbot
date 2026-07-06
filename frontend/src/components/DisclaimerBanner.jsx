import React, { useState } from 'react';

export default function DisclaimerBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div style={{ background: '#fef3c7', color: '#92400e', padding: '8px 16px', fontSize: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span>⚠️ <strong>Notice:</strong> This system is an AI research prototype and does not substitute certified legal advice.</span>
      <button onClick={() => setVisible(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>✕</button>
    </div>
  );
}
