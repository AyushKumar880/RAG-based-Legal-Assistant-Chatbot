export const authService = {
  getToken: () => localStorage.getItem('auth_token') || 'dev-token',
  isAuthenticated: () => true,
  login: async (credentials) => ({ success: true, user: 'legal-analyst' }),
  logout: () => localStorage.removeItem('auth_token'),
};
