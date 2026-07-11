import React from 'react';

export default function PrintView({ messages }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      style={{
        padding: '6px 12px',
        borderRadius: '6px',
        border: '1px solid #cbd5e1',
        fontSize: '12px',
        background: '#fff',
        cursor: 'pointer',
      }}
    >
      🖨️ Print Consultation Memo
    </button>
  );
}
