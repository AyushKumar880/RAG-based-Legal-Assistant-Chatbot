import React from 'react';

export default function LoadingSpinner({ size = 20, color = '#2563eb' }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: `2px solid ${color}33`,
        borderTop: `2px solid ${color}`,
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }}
    />
  );
}
