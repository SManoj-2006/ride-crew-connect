
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  role: 'driver' | 'customer' | 'admin';
  name?: string;
  phone?: string;
  location?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: 'driver' | 'customer' | 'admin') => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: 'driver' | 'customer' | 'admin'): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Demo credentials - in real app, this would be API validation
    const validCredentials = {
      admin: { email: 'admin@ridecrew.in', password: 'admin123' },
      driver: { email: 'driver@example.in', password: 'driver123' },
      customer: { email: 'customer@example.in', password: 'customer123' }
    };

    if (email === validCredentials[role].email && password === validCredentials[role].password) {
      const userData: User = {
        id: Date.now().toString(),
        email,
        role,
        name: role.charAt(0).toUpperCase() + role.slice(1) + ' User',
        phone: '+91 9876543210',
        location: 'Mumbai, Maharashtra'
      };
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
