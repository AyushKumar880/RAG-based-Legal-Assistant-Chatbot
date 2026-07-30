export function isValidQuery(query) {
  return typeof query === 'string' && query.trim().length >= 3;
}

export function isValidDocumentExtension(filename) {
  const valid = ['.pdf', '.txt', '.doc', '.docx'];
  return valid.some((ext) => filename.toLowerCase().endsWith(ext));
}
