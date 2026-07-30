const STORAGE_PREFIX = 'legal_rag_';

export const storage = {
  get: (key) => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_PREFIX + key));
    } catch {
      return null;
    }
  },
  set: (key, val) => {
    try {
      localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(val));
    } catch (e) {
      console.warn(e);
    }
  },
  remove: (key) => {
    localStorage.removeItem(STORAGE_PREFIX + key);
  },
};
