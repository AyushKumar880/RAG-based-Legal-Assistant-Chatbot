import React, { useState } from 'react';

export default function FeedbackWidget({ messageId, onFeedback }) {
  const [voted, setVoted] = useState(null);

  const handleVote = (type) => {
    setVoted(type);
    if (onFeedback) onFeedback(messageId, type);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#94a3b8' }}>
      <span>Accurate?</span>
      <button
        onClick={() => handleVote('up')}
        style={{ color: voted === 'up' ? '#10b981' : '#64748b', cursor: 'pointer' }}
      >
        👍
      </button>
      <button
        onClick={() => handleVote('down')}
        style={{ color: voted === 'down' ? '#ef4444' : '#64748b', cursor: 'pointer' }}
      >
        👎
      </button>
    </div>
  );
}
