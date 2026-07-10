import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

export default function Navbar({ onOpenSettings }) {
  const { activeConversation } = useContext(ChatContext);

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <div className="brand-icon">⚖️</div>
        <div className="brand-text">
          <h1>{activeConversation ? activeConversation.title : 'Legal AI Assistant'}</h1>
          <p>Hybrid BM25 + Semantic Vector Retrieval with Reciprocal Rank Fusion</p>
        </div>
      </div>

      <div className="navbar-actions">
        <button
          onClick={onOpenSettings}
          style={{
            padding: '8px 12px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-color)',
            fontSize: '13px',
            color: 'var(--text-main)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'white',
          }}
        >
          ⚙️ Settings
        </button>
      </div>
    </header>
  );
}
