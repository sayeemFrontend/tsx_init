import { useState } from 'react';
import { AuthContext } from './AuthContext';
import { defaultProps } from '@/types';

export default function AuthProvider({ children }: defaultProps) {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
