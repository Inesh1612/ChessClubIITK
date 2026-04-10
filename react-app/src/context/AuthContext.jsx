import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedStatus = localStorage.getItem('chess-club-auth');
    if (storedStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('chess-club-auth', 'true');
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('chess-club-auth');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
