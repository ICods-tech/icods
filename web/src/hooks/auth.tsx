import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api'

interface User {
  name: string;
  email: string;
  id: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  token: string;
  signIn(Credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@ICods:token');
    const user = localStorage.getItem('@ICods:user');
    console.log('AUTH CONTEXT')
    console.log({
      user,
      token
    })
    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`

      return { token, user: JSON.parse(user)}
    }

    return {} as AuthState
  })

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const res = await api.post('signin', {
          email,
          password
      })

      const { token, user } = res.data
      
      localStorage.setItem('@ICods:token', token);
      localStorage.setItem('@ICods:user', JSON.stringify(user));

      api.defaults.headers.authorization = `Bearer ${token}`

      setData({token, user})
    } catch (err) {
      throw new Error('User is not Authenticated')
    }
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@ICods:token')  
    localStorage.removeItem('@ICods:user')

    setData({} as AuthState)
  }, [])

  const updateUser = useCallback((updatedUser: User) => {

    localStorage.setItem('@ICods:user', JSON.stringify(updatedUser));

    setData({
      token: data.token,
      user: {
        ...updatedUser
      } 
    })
  }, [data])

  return (  
    <AuthContext.Provider value={{ user: data.user, signIn, token: data.token, signOut, updateUser }}>
      { children } 
    </AuthContext.Provider>
  );
};  

const useAuth = () => {
  const context = useContext(AuthContext)

  return context;
}
 

export { AuthContext, AuthProvider, useAuth }