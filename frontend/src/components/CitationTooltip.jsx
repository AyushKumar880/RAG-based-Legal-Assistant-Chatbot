import React, { useState } from 'react';

export default function CitationTooltip({ text, citation }) {
  const [show, setShow] = useState(false);

  return (
    <span
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ textDecoration: 'underline dotted #2563eb', cursor: 'help', position: 'relative' }}
    >
      {text}
      {show && (
        <span
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#1e293b',
            color: '#fff',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '11px',
            whiteSpace: 'nowrap',
            zIndex: 50,
          }}
        >
          {citation}
        </span>
      )}
    </span>
  );
}
