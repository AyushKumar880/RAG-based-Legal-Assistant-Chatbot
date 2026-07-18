import React, { createContext, useState, useEffect } from 'react';

export const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [conversations, setConversations] = useState([
    {
      id: 'default',
      title: 'Current Legal Inquiry',
      messages: [
        {
          id: 'msg-welcome',
          role: 'assistant',
          text: 'Welcome to the Legal Assistant Bot. How can I help you today? Ask about contracts, liability, statutory interpretation, or procedural compliance.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          complexity: 'simple',
        },
      ],
    },
  ]);

  const [activeId, setActiveId] = useState('default');
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({
    temperature: 0.2,
    topK: 4,
    showSources: true,
  });

  const activeConversation =
    conversations.find((c) => c.id === activeId) || conversations[0];

  const createNewChat = () => {
    const newId = `chat-${Date.now()}`;
    const newConv = {
      id: newId,
      title: 'New Legal Discussion',
      messages: [
        {
          id: `msg-${Date.now()}`,
          role: 'assistant',
          text: 'Started a fresh legal consultation session. Please input your query.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          complexity: 'simple',
        },
      ],
    };
    setConversations((prev) => [newConv, ...prev]);
    setActiveId(newId);
  };

  const addMessage = (conversationId, message) => {
    setConversations((prev) =>
      prev.map((conv) => {
        if (conv.id === conversationId) {
          return {
            ...conv,
            title:
              conv.messages.length === 1 && message.role === 'user'
                ? message.text.slice(0, 32) + '...'
                : conv.title,
            messages: [...conv.messages, message],
          };
        }
        return conv;
      })
    );
  };

  return (
    <ChatContext.Provider
      value={{
        conversations,
        activeId,
        setActiveId,
        activeConversation,
        createNewChat,
        addMessage,
        isLoading,
        setIsLoading,
        settings,
        setSettings,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
