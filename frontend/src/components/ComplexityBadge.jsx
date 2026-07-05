import React from 'react';
import { COMPLEXITY_LEVELS } from '../constants/prompts';

export default function ComplexityBadge({ complexity }) {
  const levelKey = (complexity || 'simple').toUpperCase().replace('-', '_');
  const config = COMPLEXITY_LEVELS[levelKey] || COMPLEXITY_LEVELS.SIMPLE;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '3px 10px',
        borderRadius: '12px',
        fontSize: '11px',
        fontWeight: '600',
        color: config.color,
        backgroundColor: config.bgColor,
        border: `1px solid ${config.color}33`,
      }}
      title={config.description}
    >
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: config.color,
        }}
      />
      {config.label}
    </div>
  );
}
