import React, { useState } from 'react';

export default function DocumentUploadModal({ isOpen, onClose, onUpload }) {
  const [file, setFile] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file && onUpload) {
      onUpload(file);
      onClose();
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 110 }}>
      <div style={{ background: 'white', padding: '24px', borderRadius: '12px', width: '380px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>Index New Legal Document</h3>
        <form onSubmit={handleSubmit}>
          <input type="file" accept=".pdf,.txt" onChange={(e) => setFile(e.target.files[0])} style={{ marginBottom: '16px' }} />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <button type="button" onClick={onClose} style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>Cancel</button>
            <button type="submit" disabled={!file} style={{ padding: '6px 12px', borderRadius: '6px', background: '#2563eb', color: 'white' }}>Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
}
