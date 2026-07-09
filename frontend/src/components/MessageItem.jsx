import React from 'react';
import ComplexityBadge from './ComplexityBadge';
import SourceCard from './SourceCard';

export default function MessageItem({ message }) {
  const isUser = message.role === 'user';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: isUser ? 'flex-end' : 'flex-start',
        maxWidth: '85%',
      }}
    >
      <div
        style={{
          background: isUser ? '#2563eb' : '#ffffff',
          color: isUser ? '#ffffff' : '#0f172a',
          padding: '14px 18px',
          borderRadius: isUser ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
          boxShadow: 'var(--shadow-sm)',
          border: isUser ? 'none' : '1px solid #e2e8f0',
        }}
      >
        {!isUser && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#334155' }}>⚖️ Legal AI Response</span>
            {message.complexity && <ComplexityBadge complexity={message.complexity} />}
          </div>
        )}

        <div style={{ fontSize: '14px', whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
          {message.text}
        </div>

        {!isUser && message.sources && <SourceCard sources={message.sources} />}

        <div
          style={{
            marginTop: '6px',
            fontSize: '10px',
            color: isUser ? 'rgba(255, 255, 255, 0.7)' : '#94a3b8',
            textAlign: isUser ? 'right' : 'left',
          }}
        >
          {message.timestamp}
        </div>
      </div>
    </div>
  );
}
