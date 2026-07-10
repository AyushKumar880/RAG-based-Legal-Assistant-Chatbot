import React from 'react';

export default function ModelSelector({ currentModel = 'command-r', onChange }) {
  const models = [
    { id: 'command-r', name: 'Cohere Command-R (Legal Fine-tuned)' },
    { id: 'llama-3-8b', name: 'Llama 3 8B Instruct' },
    { id: 'mistral-7b', name: 'Mistral 7B Legal-RAG' },
  ];

  return (
    <select
      value={currentModel}
      onChange={(e) => onChange && onChange(e.target.value)}
      style={{
        padding: '6px 10px',
        borderRadius: '6px',
        border: '1px solid #cbd5e1',
        fontSize: '12px',
        background: 'white',
      }}
    >
      {models.map((m) => (
        <option key={m.id} value={m.id}>{m.name}</option>
      ))}
    </select>
  );
}
