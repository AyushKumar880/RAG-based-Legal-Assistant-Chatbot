import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import { sendChatMessage } from '../services/api';

export function useChat() {
  const {
    activeConversation,
    activeId,
    addMessage,
    isLoading,
    setIsLoading,
    settings,
  } = useContext(ChatContext);

  const sendMessage = async (queryText) => {
    if (!queryText.trim() || isLoading) return;

    const userMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    addMessage(activeId, userMessage);
    setIsLoading(true);

    try {
      const response = await sendChatMessage({
        query: queryText,
        conversationId: activeId,
        settings,
      });

      const assistantMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        text: response.answer,
        complexity: response.complexity || 'complex',
        sources: response.sources || [],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      addMessage(activeId, assistantMessage);
    } catch (err) {
      const errorMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        text: `Error processing query: ${err.message || 'Please verify local model service connection.'}`,
        complexity: 'simple',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      addMessage(activeId, errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages: activeConversation.messages,
    isLoading,
    sendMessage,
  };
}
