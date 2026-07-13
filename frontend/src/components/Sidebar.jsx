import React, { useContext, useEffect, useState } from 'react';
import { ChatContext } from '../context/ChatContext';
import { fetchDocumentIndex } from '../services/api';

export default function Sidebar() {
  const { conversations, activeId, setActiveId, createNewChat } = useContext(ChatContext);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchDocumentIndex().then(setDocuments);
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <button className="new-chat-btn" onClick={createNewChat}>
          <span>+</span>
          <span>New Consultation</span>
        </button>
      </div>

      <div className="sidebar-section">
        <div className="section-label">Active Conversations</div>
        <div className="chat-history-list">
          {conversations.map((c) => (
            <button
              key={c.id}
              className={`history-item ${c.id === activeId ? 'active' : ''}`}
              onClick={() => setActiveId(c.id)}
            >
              <span>💬</span>
              <span>{c.title}</span>
            </button>
          ))}
        </div>

        <div className="section-label" style={{ marginTop: '24px' }}>Indexed Legal Corpus</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {documents.map((doc, i) => (
            <div
              key={i}
              style={{
                fontSize: '11px',
                padding: '6px 8px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '6px',
                color: '#94a3b8',
              }}
            >
              <div style={{ color: '#e2e8f0', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                📄 {doc.name}
              </div>
              <div>{doc.chunks} indexed chunks • {doc.size}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="status-indicator">
          <span className="status-dot"></span>
          <span>RAG Pipeline Active</span>
        </div>
        <span style={{ fontSize: '11px' }}>v1.0.0</span>
      </div>
    </aside>
  );
}
