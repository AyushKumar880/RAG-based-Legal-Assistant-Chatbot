import { useEffect } from 'react';

export function useKeyboardShortcut(key, callback, metaKey = false) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const isMetaMatch = metaKey ? event.ctrlKey || event.metaKey : true;
      if (event.key.toLowerCase() === key.toLowerCase() && isMetaMatch) {
        event.preventDefault();
        callback(event);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, callback, metaKey]);
}
