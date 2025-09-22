
import React, { createContext, useContext, useEffect, useState } from 'react';
import { mockLogin, logout as apiLogout, getCurrentUser } from '../services/mockApi';

const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState(getCurrentUser());
  useEffect(()=>{ setUser(getCurrentUser()); },[]);
  const login = async (email,password) => { const u = await mockLogin(email,password); setUser(u); return u; };
  const logout = () => { apiLogout(); setUser(null); };
  return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
