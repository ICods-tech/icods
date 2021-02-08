import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import api from '../services/api'
import AsyncStorage from '@react-native-community/async-storage'

interface User {
  name: string;
  email: string;
  id: string;
}

interface AuthState {
  user: object;
  token: string;
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

  const [data, setData] = useState<AuthState>({} as AuthState)

  useEffect(() => {
    async function loadStoredData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet(['@ICods:token', '@ICods:user'])

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1])})
      }
    }
    
    loadStoredData()
  }, [])

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const res = await api.post('signin', {
          email,
          password
      })
      const { token, user } = res.data
      
      await AsyncStorage.multiSet([
        ['@ICods:token', token],
        ['@ICods:user', JSON.stringify(user)]
      ])

      api.defaults.headers.authorization = `Bearer ${token}`

      setData({token, user})
    } catch (err) {
      throw new Error('User is not Authenticated')
    }
  }, [])

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@ICods:token', '@ICods:user'])  

    setData({} as AuthState)
  }, [])

  const updateUser = useCallback((updatedUser: User) => {

    AsyncStorage.setItem('@ICods:user', JSON.stringify(updatedUser));

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

  if (!context) {
    throw new Error('useAuth must be wrapped inside an AuthProvider')
  }

  return context;
}
 

export { AuthContext, AuthProvider, useAuth }