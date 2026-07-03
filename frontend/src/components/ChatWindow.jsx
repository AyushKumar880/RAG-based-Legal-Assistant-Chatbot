import React, { useState, useRef, useEffect } from 'react';
import MessageItem from './MessageItem';
import { useChat } from '../hooks/useChat';
import { SUGGESTED_PROMPTS } from '../constants/prompts';

export default function ChatWindow() {
  const { messages, isLoading, sendMessage } = useChat();
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      sendMessage(inputText);
      setInputText('');
    }
  };

  const handlePromptClick = (query) => {
    sendMessage(query);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden', background: '#f8fafc' }}>
      {/* Scrollable Message List */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {messages.length === 1 && (
          <div style={{ margin: 'auto', maxWidth: '680px', width: '100%', textAlign: 'center', padding: '40px 0' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
              RAG Legal Assistant & Analysis
            </h2>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '24px' }}>
              Ask complex legal questions grounded in indexed precedent, contracts, and regulatory statutes.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', textAlign: 'left' }}>
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt.id}
                  onClick={() => handlePromptClick(prompt.query)}
                  style={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '14px',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#3b82f6')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#e2e8f0')}
                >
                  <div style={{ fontWeight: 600, fontSize: '13px', color: '#1e293b', marginBottom: '4px' }}>
                    {prompt.title}
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.4 }}>
                    {prompt.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <MessageItem key={msg.id} message={msg} />
        ))}

        {isLoading && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', background: 'white', borderRadius: '10px', width: 'fit-content', border: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '13px', color: '#64748b' }}>Executing RAG Retrieval & Generating Response...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div style={{ padding: '16px 24px', background: 'white', borderTop: '1px solid #e2e8f0' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px', maxWidth: '850px', margin: '0 auto' }}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your legal query (e.g., Explain clause liability under contract law)..."
            disabled={isLoading}
            style={{
              flex: 1,
              padding: '12px 18px',
              borderRadius: '10px',
              border: '1px solid #cbd5e1',
              fontSize: '14px',
              background: '#f8fafc',
            }}
          />
          <button
            type="submit"
            disabled={isLoading || !inputText.trim()}
            style={{
              padding: '12px 24px',
              borderRadius: '10px',
              backgroundColor: inputText.trim() && !isLoading ? '#2563eb' : '#94a3b8',
              color: 'white',
              fontWeight: 600,
              fontSize: '14px',
              transition: 'background-color 0.2s ease',
            }}
          >
            Send
          </button>
        </form>
        <div style={{ textAlign: 'center', fontSize: '11px', color: '#94a3b8', marginTop: '8px' }}>
          Outputs are powered by hybrid retrieval and LLM reasoning. Verify critical clauses with certified legal counsel.
        </div>
      </div>
    </div>
  );
}
