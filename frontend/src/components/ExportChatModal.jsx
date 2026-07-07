import React from 'react';

export default function ExportChatModal({ isOpen, onClose, messages }) {
  if (!isOpen) return null;

  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(messages, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `legal-consultation-${Date.now()}.json`);
    dlAnchorElem.click();
    onClose();
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 110 }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', width: '340px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '12px' }}>Export Consultation</h3>
        <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>Download your conversation history for documentation or auditing.</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
          <button onClick={onClose} style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>Close</button>
          <button onClick={handleExportJson} style={{ padding: '6px 12px', borderRadius: '6px', background: '#2563eb', color: 'white' }}>Export JSON</button>
        </div>
      </div>
    </div>
  );
}
